const fs = require('fs');
const path = require('path');

function createConfigFile(array) {
	var proxyconf = "";
		array.forEach(prox => {
		proxyconf += `
		location ${prox.fields.origine} {
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_set_header Host $http_host;
			proxy_redirect off;
			proxy_pass http://${prox.fields.cible};
		}`;
		console.log("Proxy "+ prox.fields.log +" added");});
	fs.writeFileSync("/app/config/nginx.conf.erb", `
daemon off;
worker_processes <%= ENV['NGINX_WORKERS'] || 4 %>;
events {
	use epoll;
	accept_mutex on;
	worker_connections 1024;
}
http {
	gzip on;
	gzip_comp_level 2;
	gzip_http_version 1.0;
	gzip_proxied any;
	gzip_min_length 1100;
	gzip_buffers 16 8k;
	gzip_types *;
	gzip_disable "MSIE [1-6].(?!.*SV1)";
	gzip_vary on;
	server_tokens off;
	log_format l2met 'measure#nginx.service=$request_time request_id=$http_x_request_id';
	access_log logs/nginx/access.log l2met;
	error_log logs/nginx/error.log;
	include mime.types;
	default_type application/octet-stream;
	sendfile on;
	#Must read the body in 5 seconds.
	client_body_timeout 5;
	server {
		listen <%= ENV["PORT"] %>;
		server_name _;
		keepalive_timeout 5;
		pagespeed on;
		pagespeed FileCachePath /app/config;
		pagespeed LoadFromFileMatch "^https?://${process.env.ADDRESS}/" "/app/public/";
		pagespeed LoadFromFileRuleMatch disallow .*;
		pagespeed LoadFromFileRuleMatch allow \.css$;
		pagespeed LoadFromFileRuleMatch allow \.jpe?g$;
		pagespeed LoadFromFileRuleMatch allow \.png$;
		pagespeed LoadFromFileRuleMatch allow \.gif$;
		pagespeed LoadFromFileRuleMatch allow \.js$;
		root   /app/public;
		location / {
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_set_header Host $http_host;
			proxy_redirect off;
			proxy_pass http://127.0.0.1:3000;
			pagespeed EnableFilters prioritize_critical_css,rewrite_style_attributes,responsive_images_zoom,dedup_inlined_images,collapse_whitespace,extend_cache,rewrite_css,rewrite_javascript,defer_javascript,inline_images,combine_css,combine_javascript,lazyload_images,resize_images;
			pagespeed LowercaseHtmlNames on;
		}` + proxyconf + `	
		location ~ "\.pagespeed\.([a-z]\.)?[a-z]{2}\.[^.]{10}\.[^.]+" {
  			add_header "" "";
		}
		location ~ "^/pagespeed_static/" { }
		location ~ "^/ngx_pagespeed_beacon$" { }
	}
}
	`);
	console.log("Nginx config written");
}

module.exports = {
	createConfigFile
};
