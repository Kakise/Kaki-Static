const fs = require('fs');
const path = require('path');

function createConfigFile(array) {
	fs.unlinkSync(path.join(__dirname, "nginx.conf.erb"));
	fs.writeFileSync(path.join(__dirname, "nginx.conf.erb"), `
daemon off;
#Heroku dynos have at least 4 cores.
worker_processes <%= ENV['NGINX_WORKERS'] || 4 %>;

events {
	use epoll;
	accept_mutex on;
	worker_connections 1024;
}

http {
  gzip on;
  gzip_comp_level 2;
  gzip_min_length 512;

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

    root   /app/public;
    #index  index.html index.htm;

		location / {
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_set_header Host $http_host;
			proxy_redirect off;
			proxy_pass http://127.0.0.1:3000;
		}
		${array.forEach(prox =>{
		return `
		location ${prox.fields.origine} {
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_set_header Host $http_host;
			proxy_redirect off;
			proxy_pass http://${prox.fields.cible};
		}
		`;	
		})}
	}
}
	`);
	console.log("Nginx config written");
	fs.openSync('/tmp/app-initialized', 'w');
}

module.exports = {
	createConfigFile
};