! function(a) {
	var b = "object" == typeof window && window || "object" == typeof self && self;
	"undefined" != typeof exports ? a(exports) : b && (b.hljs = a({}), "function" == typeof define && define.amd && define([], function() {
		return b.hljs
	}))
}(function(a) {
	function b(a) {
		return a.replace(/[&<>]/gm, function(a) {
			return E[a]
		})
	}

	function c(a) {
		return a.nodeName.toLowerCase()
	}

	function d(a, b) {
		var c = a && a.exec(b);
		return c && 0 === c.index
	}

	function e(a) {
		return z.test(a)
	}

	function f(a) {
		var b, c, d, f, g = a.className + " ";
		if (g += a.parentNode ? a.parentNode.className : "", c = A.exec(g)) return u(c[1]) ? c[1] : "no-highlight";
		for (g = g.split(/\s+/), b = 0, d = g.length; d > b; b++)
			if (f = g[b], e(f) || u(f)) return f
	}

	function g(a, b) {
		var c, d = {};
		for (c in a) d[c] = a[c];
		if (b)
			for (c in b) d[c] = b[c];
		return d
	}

	function h(a) {
		var b = [];
		return function a(d, e) {
			for (var f = d.firstChild; f; f = f.nextSibling) 3 === f.nodeType ? e += f.nodeValue.length : 1 === f.nodeType && (b.push({
				event: "start",
				offset: e,
				node: f
			}), e = a(f, e), c(f).match(/br|hr|img|input/) || b.push({
				event: "stop",
				offset: e,
				node: f
			}));
			return e
		}(a, 0), b
	}

	function i(a, d, e) {
		function f() {
			return a.length && d.length ? a[0].offset !== d[0].offset ? a[0].offset < d[0].offset ? a : d : "start" === d[0].event ? a : d : a.length ? a : d
		}

		function g(a) {
			function d(a) {
				return " " + a.nodeName + '="' + b(a.value) + '"'
			}
			k += "<" + c(a) + v.map.call(a.attributes, d).join("") + ">"
		}

		function h(a) {
			k += "</" + c(a) + ">"
		}

		function i(a) {
			("start" === a.event ? g : h)(a.node)
		}
		for (var j = 0, k = "", l = []; a.length || d.length;) {
			var m = f();
			if (k += b(e.substr(j, m[0].offset - j)), j = m[0].offset, m === a) {
				l.reverse().forEach(h);
				do i(m.splice(0, 1)[0]), m = f(); while (m === a && m.length && m[0].offset === j);
				l.reverse().forEach(g)
			} else "start" === m[0].event ? l.push(m[0].node) : l.pop(), i(m.splice(0, 1)[0])
		}
		return k + b(e.substr(j))
	}

	function j(a) {
		function b(a) {
			return a && a.source || a
		}

		function c(c, d) {
			return new RegExp(b(c), "m" + (a.cI ? "i" : "") + (d ? "g" : ""))
		}

		function d(e, f) {
			if (!e.compiled) {
				if (e.compiled = !0, e.k = e.k || e.bK, e.k) {
					var h = {},
						i = function(b, c) {
							a.cI && (c = c.toLowerCase()), c.split(" ").forEach(function(a) {
								var c = a.split("|");
								h[c[0]] = [b, c[1] ? Number(c[1]) : 1]
							})
						};
					"string" == typeof e.k ? i("keyword", e.k) : w(e.k).forEach(function(a) {
						i(a, e.k[a])
					}), e.k = h
				}
				e.lR = c(e.l || /\w+/, !0), f && (e.bK && (e.b = "\\b(" + e.bK.split(" ").join("|") + ")\\b"), e.b || (e.b = /\B|\b/), e.bR = c(e.b), e.e || e.eW || (e.e = /\B|\b/), e.e && (e.eR = c(e.e)), e.tE = b(e.e) || "", e.eW && f.tE && (e.tE += (e.e ? "|" : "") + f.tE)), e.i && (e.iR = c(e.i)), null == e.r && (e.r = 1), e.c || (e.c = []);
				var j = [];
				e.c.forEach(function(a) {
					a.v ? a.v.forEach(function(b) {
						j.push(g(a, b))
					}) : j.push("self" === a ? e : a)
				}), e.c = j, e.c.forEach(function(a) {
					d(a, e)
				}), e.starts && d(e.starts, f);
				var k = e.c.map(function(a) {
					return a.bK ? "\\.?(" + a.b + ")\\.?" : a.b
				}).concat([e.tE, e.i]).map(b).filter(Boolean);
				e.t = k.length ? c(k.join("|"), !0) : {
					exec: function() {
						return null
					}
				}
			}
		}
		d(a)
	}

	function k(a, c, e, f) {
		function g(a, b) {
			var c, e;
			for (c = 0, e = b.c.length; e > c; c++)
				if (d(b.c[c].bR, a)) return b.c[c]
		}

		function h(a, b) {
			if (d(a.eR, b)) {
				for (; a.endsParent && a.parent;) a = a.parent;
				return a
			}
			return a.eW ? h(a.parent, b) : void 0
		}

		function i(a, b) {
			return !e && d(b.iR, a)
		}

		function m(a, b) {
			var c = t.cI ? b[0].toLowerCase() : b[0];
			return a.k.hasOwnProperty(c) && a.k[c]
		}

		function n(a, b, c, d) {
			var e = d ? "" : D.classPrefix,
				f = '<span class="' + e,
				g = c ? "" : C;
			return f += a + '">', f + b + g
		}

		function o() {
			var a, c, d, e;
			if (!w.k) return b(A);
			for (e = "", c = 0, w.lR.lastIndex = 0, d = w.lR.exec(A); d;) e += b(A.substr(c, d.index - c)), a = m(w, d), a ? (B += a[1], e += n(a[0], b(d[0]))) : e += b(d[0]), c = w.lR.lastIndex, d = w.lR.exec(A);
			return e + b(A.substr(c))
		}

		function p() {
			var a = "string" == typeof w.sL;
			if (a && !x[w.sL]) return b(A);
			var c = a ? k(w.sL, A, !0, y[w.sL]) : l(A, w.sL.length ? w.sL : void 0);
			return w.r > 0 && (B += c.r), a && (y[w.sL] = c.top), n(c.language, c.value, !1, !0)
		}

		function q() {
			z += null != w.sL ? p() : o(), A = ""
		}

		function r(a) {
			z += a.cN ? n(a.cN, "", !0) : "", w = Object.create(a, {
				parent: {
					value: w
				}
			})
		}

		function s(a, b) {
			if (A += a, null == b) return q(), 0;
			var c = g(b, w);
			if (c) return c.skip ? A += b : (c.eB && (A += b), q(), c.rB || c.eB || (A = b)), r(c, b), c.rB ? 0 : b.length;
			var d = h(w, b);
			if (d) {
				var e = w;
				e.skip ? A += b : (e.rE || e.eE || (A += b), q(), e.eE && (A = b));
				do w.cN && (z += C), w.skip || (B += w.r), w = w.parent; while (w !== d.parent);
				return d.starts && r(d.starts, ""), e.rE ? 0 : b.length
			}
			if (i(b, w)) throw new Error('Illegal lexeme "' + b + '" for mode "' + (w.cN || "<unnamed>") + '"');
			return A += b, b.length || 1
		}
		var t = u(a);
		if (!t) throw new Error('Unknown language: "' + a + '"');
		j(t);
		var v, w = f || t,
			y = {},
			z = "";
		for (v = w; v !== t; v = v.parent) v.cN && (z = n(v.cN, "", !0) + z);
		var A = "",
			B = 0;
		try {
			for (var E, F, G = 0; w.t.lastIndex = G, E = w.t.exec(c), E;) F = s(c.substr(G, E.index - G), E[0]), G = E.index + F;
			for (s(c.substr(G)), v = w; v.parent; v = v.parent) v.cN && (z += C);
			return {
				r: B,
				value: z,
				language: a,
				top: w
			}
		} catch (a) {
			if (a.message && -1 !== a.message.indexOf("Illegal")) return {
				r: 0,
				value: b(c)
			};
			throw a
		}
	}

	function l(a, c) {
		c = c || D.languages || w(x);
		var d = {
				r: 0,
				value: b(a)
			},
			e = d;
		return c.filter(u).forEach(function(b) {
			var c = k(b, a, !1);
			c.language = b, c.r > e.r && (e = c), c.r > d.r && (e = d, d = c)
		}), e.language && (d.second_best = e), d
	}

	function m(a) {
		return D.tabReplace || D.useBR ? a.replace(B, function(a, b) {
			return D.useBR && "\n" === a ? "<br>" : D.tabReplace ? b.replace(/\t/g, D.tabReplace) : void 0
		}) : a
	}

	function n(a, b, c) {
		var d = b ? y[b] : c,
			e = [a.trim()];
		return a.match(/\bhljs\b/) || e.push("hljs"), -1 === a.indexOf(d) && e.push(d), e.join(" ").trim()
	}

	function o(a) {
		var b, c, d, g, j, o = f(a);
		e(o) || (D.useBR ? (b = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), b.innerHTML = a.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : b = a, j = b.textContent, d = o ? k(o, j, !0) : l(j), c = h(b), c.length && (g = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), g.innerHTML = d.value, d.value = i(c, h(g), j)), d.value = m(d.value), a.innerHTML = d.value, a.className = n(a.className, o, d.language), a.result = {
			language: d.language,
			re: d.r
		}, d.second_best && (a.second_best = {
			language: d.second_best.language,
			re: d.second_best.r
		}))
	}

	function p(a) {
		D = g(D, a)
	}

	function q() {
		if (!q.called) {
			q.called = !0;
			var a = document.querySelectorAll("pre code");
			v.forEach.call(a, o)
		}
	}

	function r() {
		addEventListener("DOMContentLoaded", q, !1), addEventListener("load", q, !1)
	}

	function s(b, c) {
		var d = x[b] = c(a);
		d.aliases && d.aliases.forEach(function(a) {
			y[a] = b
		})
	}

	function t() {
		return w(x)
	}

	function u(a) {
		return a = (a || "").toLowerCase(), x[a] || x[y[a]]
	}
	var v = [],
		w = Object.keys,
		x = {},
		y = {},
		z = /^(no-?highlight|plain|text)$/i,
		A = /\blang(?:uage)?-([\w-]+)\b/i,
		B = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
		C = "</span>",
		D = {
			classPrefix: "hljs-",
			tabReplace: null,
			useBR: !1,
			languages: void 0
		},
		E = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;"
		};
	return a.highlight = k, a.highlightAuto = l, a.fixMarkup = m, a.highlightBlock = o, a.configure = p, a.initHighlighting = q, a.initHighlightingOnLoad = r, a.registerLanguage = s, a.listLanguages = t, a.getLanguage = u, a.inherit = g, a.IR = "[a-zA-Z]\\w*", a.UIR = "[a-zA-Z_]\\w*", a.NR = "\\b\\d+(\\.\\d+)?", a.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", a.BNR = "\\b(0b[01]+)", a.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", a.BE = {
		b: "\\\\[\\s\\S]",
		r: 0
	}, a.ASM = {
		cN: "string",
		b: "'",
		e: "'",
		i: "\\n",
		c: [a.BE]
	}, a.QSM = {
		cN: "string",
		b: '"',
		e: '"',
		i: "\\n",
		c: [a.BE]
	}, a.PWM = {
		b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/
	}, a.C = function(b, c, d) {
		var e = a.inherit({
			cN: "comment",
			b: b,
			e: c,
			c: []
		}, d || {});
		return e.c.push(a.PWM), e.c.push({
			cN: "doctag",
			b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
			r: 0
		}), e
	}, a.CLCM = a.C("//", "$"), a.CBCM = a.C("/\\*", "\\*/"), a.HCM = a.C("#", "$"), a.NM = {
		cN: "number",
		b: a.NR,
		r: 0
	}, a.CNM = {
		cN: "number",
		b: a.CNR,
		r: 0
	}, a.BNM = {
		cN: "number",
		b: a.BNR,
		r: 0
	}, a.CSSNM = {
		cN: "number",
		b: a.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
		r: 0
	}, a.RM = {
		cN: "regexp",
		b: /\//,
		e: /\/[gimuy]*/,
		i: /\n/,
		c: [a.BE, {
			b: /\[/,
			e: /\]/,
			r: 0,
			c: [a.BE]
		}]
	}, a.TM = {
		cN: "title",
		b: a.IR,
		r: 0
	}, a.UTM = {
		cN: "title",
		b: a.UIR,
		r: 0
	}, a.METHOD_GUARD = {
		b: "\\.\\s*" + a.UIR,
		r: 0
	}, a
}), hljs.registerLanguage("hsp", function(a) {
	return {
		cI: !0,
		l: /[\w\._]+/,
		k: "goto gosub return break repeat loop continue wait await dim sdim foreach dimtype dup dupptr end stop newmod delmod mref run exgoto on mcall assert logmes newlab resume yield onexit onerror onkey onclick oncmd exist delete mkdir chdir dirlist bload bsave bcopy memfile if else poke wpoke lpoke getstr chdpm memexpand memcpy memset notesel noteadd notedel noteload notesave randomize noteunsel noteget split strrep setease button chgdisp exec dialog mmload mmplay mmstop mci pset pget syscolor mes print title pos circle cls font sysfont objsize picload color palcolor palette redraw width gsel gcopy gzoom gmode bmpsave hsvcolor getkey listbox chkbox combox input mesbox buffer screen bgscr mouse objsel groll line clrobj boxf objprm objmode stick grect grotate gsquare gradf objimage objskip objenable celload celdiv celput newcom querycom delcom cnvstow comres axobj winobj sendmsg comevent comevarg sarrayconv callfunc cnvwtos comevdisp libptr system hspstat hspver stat cnt err strsize looplev sublev iparam wparam lparam refstr refdval int rnd strlen length length2 length3 length4 vartype gettime peek wpeek lpeek varptr varuse noteinfo instr abs limit getease str strmid strf getpath strtrim sin cos tan atan sqrt double absf expf logf limitf powf geteasef mousex mousey mousew hwnd hinstance hdc ginfo objinfo dirinfo sysinfo thismod __hspver__ __hsp30__ __date__ __time__ __line__ __file__ _debug __hspdef__ and or xor not screen_normal screen_palette screen_hide screen_fixedsize screen_tool screen_frame gmode_gdi gmode_mem gmode_rgb0 gmode_alpha gmode_rgb0alpha gmode_add gmode_sub gmode_pixela ginfo_mx ginfo_my ginfo_act ginfo_sel ginfo_wx1 ginfo_wy1 ginfo_wx2 ginfo_wy2 ginfo_vx ginfo_vy ginfo_sizex ginfo_sizey ginfo_winx ginfo_winy ginfo_mesx ginfo_mesy ginfo_r ginfo_g ginfo_b ginfo_paluse ginfo_dispx ginfo_dispy ginfo_cx ginfo_cy ginfo_intid ginfo_newid ginfo_sx ginfo_sy objinfo_mode objinfo_bmscr objinfo_hwnd notemax notesize dir_cur dir_exe dir_win dir_sys dir_cmdline dir_desktop dir_mydoc dir_tv font_normal font_bold font_italic font_underline font_strikeout font_antialias objmode_normal objmode_guifont objmode_usefont gsquare_grad msgothic msmincho do until while wend for next _break _continue switch case default swbreak swend ddim ldim alloc m_pi rad2deg deg2rad ease_linear ease_quad_in ease_quad_out ease_quad_inout ease_cubic_in ease_cubic_out ease_cubic_inout ease_quartic_in ease_quartic_out ease_quartic_inout ease_bounce_in ease_bounce_out ease_bounce_inout ease_shake_in ease_shake_out ease_shake_inout ease_loop",
		c: [a.CLCM, a.CBCM, a.QSM, a.ASM, {
			cN: "string",
			b: '{"',
			e: '"}',
			c: [a.BE]
		}, a.C(";", "$", {
			r: 0
		}), {
			cN: "meta",
			b: "#",
			e: "$",
			k: {
				"meta-keyword": "addion cfunc cmd cmpopt comfunc const defcfunc deffunc define else endif enum epack func global if ifdef ifndef include modcfunc modfunc modinit modterm module pack packopt regcmd runtime undef usecom uselib"
			},
			c: [a.inherit(a.QSM, {
				cN: "meta-string"
			}), a.NM, a.CNM, a.CLCM, a.CBCM]
		}, {
			cN: "symbol",
			b: "^\\*(\\w+|@)"
		}, a.NM, a.CNM]
	}
}), hljs.registerLanguage("tcl", function(a) {
	return {
		aliases: ["tk"],
		k: "after append apply array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd chan clock close concat continue dde dict encoding eof error eval exec exit expr fblocked fconfigure fcopy file fileevent filename flush for foreach format gets glob global history http if incr info interp join lappend|10 lassign|10 lindex|10 linsert|10 list llength|10 load lrange|10 lrepeat|10 lreplace|10 lreverse|10 lsearch|10 lset|10 lsort|10 mathfunc mathop memory msgcat namespace open package parray pid pkg::create pkg_mkIndex platform platform::shell proc puts pwd read refchan regexp registry regsub|10 rename return safe scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_startOfPreviousWord tcl_wordBreakAfter tcl_wordBreakBefore tcltest tclvars tell time tm trace unknown unload unset update uplevel upvar variable vwait while",
		c: [a.C(";[ \\t]*#", "$"), a.C("^[ \\t]*#", "$"), {
			bK: "proc",
			e: "[\\{]",
			eE: !0,
			c: [{
				cN: "title",
				b: "[ \\t\\n\\r]+(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*",
				e: "[ \\t\\n\\r]",
				eW: !0,
				eE: !0
			}]
		}, {
			eE: !0,
			v: [{
				b: "\\$(\\{)?(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*\\(([a-zA-Z0-9_])*\\)",
				e: "[^a-zA-Z0-9_\\}\\$]"
			}, {
				b: "\\$(\\{)?(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*",
				e: "(\\))?[^a-zA-Z0-9_\\}\\$]"
			}]
		}, {
			cN: "string",
			c: [a.BE],
			v: [a.inherit(a.ASM, {
				i: null
			}), a.inherit(a.QSM, {
				i: null
			})]
		}, {
			cN: "number",
			v: [a.BNM, a.CNM]
		}]
	}
}), hljs.registerLanguage("lsl", function(a) {
	var b = {
			cN: "subst",
			b: /\\[tn"\\]/
		},
		c = {
			cN: "string",
			b: '"',
			e: '"',
			c: [b]
		},
		d = {
			cN: "number",
			b: a.CNR
		},
		e = {
			cN: "literal",
			v: [{
				b: "\\b(?:PI|TWO_PI|PI_BY_TWO|DEG_TO_RAD|RAD_TO_DEG|SQRT2)\\b"
			}, {
				b: "\\b(?:XP_ERROR_(?:EXPERIENCES_DISABLED|EXPERIENCE_(?:DISABLED|SUSPENDED)|INVALID_(?:EXPERIENCE|PARAMETERS)|KEY_NOT_FOUND|MATURITY_EXCEEDED|NONE|NOT_(?:FOUND|PERMITTED(?:_LAND)?)|NO_EXPERIENCE|QUOTA_EXCEEDED|RETRY_UPDATE|STORAGE_EXCEPTION|STORE_DISABLED|THROTTLED|UNKNOWN_ERROR)|JSON_APPEND|STATUS_(?:PHYSICS|ROTATE_[XYZ]|PHANTOM|SANDBOX|BLOCK_GRAB(?:_OBJECT)?|(?:DIE|RETURN)_AT_EDGE|CAST_SHADOWS|OK|MALFORMED_PARAMS|TYPE_MISMATCH|BOUNDS_ERROR|NOT_(?:FOUND|SUPPORTED)|INTERNAL_ERROR|WHITELIST_FAILED)|AGENT(?:_(?:BY_(?:LEGACY_|USER)NAME|FLYING|ATTACHMENTS|SCRIPTED|MOUSELOOK|SITTING|ON_OBJECT|AWAY|WALKING|IN_AIR|TYPING|CROUCHING|BUSY|ALWAYS_RUN|AUTOPILOT|LIST_(?:PARCEL(?:_OWNER)?|REGION)))?|CAMERA_(?:PITCH|DISTANCE|BEHINDNESS_(?:ANGLE|LAG)|(?:FOCUS|POSITION)(?:_(?:THRESHOLD|LOCKED|LAG))?|FOCUS_OFFSET|ACTIVE)|ANIM_ON|LOOP|REVERSE|PING_PONG|SMOOTH|ROTATE|SCALE|ALL_SIDES|LINK_(?:ROOT|SET|ALL_(?:OTHERS|CHILDREN)|THIS)|ACTIVE|PASS(?:IVE|_(?:ALWAYS|IF_NOT_HANDLED|NEVER))|SCRIPTED|CONTROL_(?:FWD|BACK|(?:ROT_)?(?:LEFT|RIGHT)|UP|DOWN|(?:ML_)?LBUTTON)|PERMISSION_(?:RETURN_OBJECTS|DEBIT|OVERRIDE_ANIMATIONS|SILENT_ESTATE_MANAGEMENT|TAKE_CONTROLS|TRIGGER_ANIMATION|ATTACH|CHANGE_LINKS|(?:CONTROL|TRACK)_CAMERA|TELEPORT)|INVENTORY_(?:TEXTURE|SOUND|OBJECT|SCRIPT|LANDMARK|CLOTHING|NOTECARD|BODYPART|ANIMATION|GESTURE|ALL|NONE)|CHANGED_(?:INVENTORY|COLOR|SHAPE|SCALE|TEXTURE|LINK|ALLOWED_DROP|OWNER|REGION(?:_START)?|TELEPORT|MEDIA)|OBJECT_(?:CLICK_ACTION|HOVER_HEIGHT|LAST_OWNER_ID|(?:PHYSICS|SERVER|STREAMING)_COST|UNKNOWN_DETAIL|CHARACTER_TIME|PHANTOM|PHYSICS|TEMP_ON_REZ|NAME|DESC|POS|PRIM_(?:COUNT|EQUIVALENCE)|RETURN_(?:PARCEL(?:_OWNER)?|REGION)|REZZER_KEY|ROO?T|VELOCITY|OMEGA|OWNER|GROUP|CREATOR|ATTACHED_POINT|RENDER_WEIGHT|(?:BODY_SHAPE|PATHFINDING)_TYPE|(?:RUNNING|TOTAL)_SCRIPT_COUNT|TOTAL_INVENTORY_COUNT|SCRIPT_(?:MEMORY|TIME))|TYPE_(?:INTEGER|FLOAT|STRING|KEY|VECTOR|ROTATION|INVALID)|(?:DEBUG|PUBLIC)_CHANNEL|ATTACH_(?:AVATAR_CENTER|CHEST|HEAD|BACK|PELVIS|MOUTH|CHIN|NECK|NOSE|BELLY|[LR](?:SHOULDER|HAND|FOOT|EAR|EYE|[UL](?:ARM|LEG)|HIP)|(?:LEFT|RIGHT)_PEC|HUD_(?:CENTER_[12]|TOP_(?:RIGHT|CENTER|LEFT)|BOTTOM(?:_(?:RIGHT|LEFT))?)|[LR]HAND_RING1|TAIL_(?:BASE|TIP)|[LR]WING|FACE_(?:JAW|[LR]EAR|[LR]EYE|TOUNGE)|GROIN|HIND_[LR]FOOT)|LAND_(?:LEVEL|RAISE|LOWER|SMOOTH|NOISE|REVERT)|DATA_(?:ONLINE|NAME|BORN|SIM_(?:POS|STATUS|RATING)|PAYINFO)|PAYMENT_INFO_(?:ON_FILE|USED)|REMOTE_DATA_(?:CHANNEL|REQUEST|REPLY)|PSYS_(?:PART_(?:BF_(?:ZERO|ONE(?:_MINUS_(?:DEST_COLOR|SOURCE_(ALPHA|COLOR)))?|DEST_COLOR|SOURCE_(ALPHA|COLOR))|BLEND_FUNC_(DEST|SOURCE)|FLAGS|(?:START|END)_(?:COLOR|ALPHA|SCALE|GLOW)|MAX_AGE|(?:RIBBON|WIND|INTERP_(?:COLOR|SCALE)|BOUNCE|FOLLOW_(?:SRC|VELOCITY)|TARGET_(?:POS|LINEAR)|EMISSIVE)_MASK)|SRC_(?:MAX_AGE|PATTERN|ANGLE_(?:BEGIN|END)|BURST_(?:RATE|PART_COUNT|RADIUS|SPEED_(?:MIN|MAX))|ACCEL|TEXTURE|TARGET_KEY|OMEGA|PATTERN_(?:DROP|EXPLODE|ANGLE(?:_CONE(?:_EMPTY)?)?)))|VEHICLE_(?:REFERENCE_FRAME|TYPE_(?:NONE|SLED|CAR|BOAT|AIRPLANE|BALLOON)|(?:LINEAR|ANGULAR)_(?:FRICTION_TIMESCALE|MOTOR_DIRECTION)|LINEAR_MOTOR_OFFSET|HOVER_(?:HEIGHT|EFFICIENCY|TIMESCALE)|BUOYANCY|(?:LINEAR|ANGULAR)_(?:DEFLECTION_(?:EFFICIENCY|TIMESCALE)|MOTOR_(?:DECAY_)?TIMESCALE)|VERTICAL_ATTRACTION_(?:EFFICIENCY|TIMESCALE)|BANKING_(?:EFFICIENCY|MIX|TIMESCALE)|FLAG_(?:NO_DEFLECTION_UP|LIMIT_(?:ROLL_ONLY|MOTOR_UP)|HOVER_(?:(?:WATER|TERRAIN|UP)_ONLY|GLOBAL_HEIGHT)|MOUSELOOK_(?:STEER|BANK)|CAMERA_DECOUPLED))|PRIM_(?:ALPHA_MODE(?:_(?:BLEND|EMISSIVE|MASK|NONE))?|NORMAL|SPECULAR|TYPE(?:_(?:BOX|CYLINDER|PRISM|SPHERE|TORUS|TUBE|RING|SCULPT))?|HOLE_(?:DEFAULT|CIRCLE|SQUARE|TRIANGLE)|MATERIAL(?:_(?:STONE|METAL|GLASS|WOOD|FLESH|PLASTIC|RUBBER))?|SHINY_(?:NONE|LOW|MEDIUM|HIGH)|BUMP_(?:NONE|BRIGHT|DARK|WOOD|BARK|BRICKS|CHECKER|CONCRETE|TILE|STONE|DISKS|GRAVEL|BLOBS|SIDING|LARGETILE|STUCCO|SUCTION|WEAVE)|TEXGEN_(?:DEFAULT|PLANAR)|SCULPT_(?:TYPE_(?:SPHERE|TORUS|PLANE|CYLINDER|MASK)|FLAG_(?:MIRROR|INVERT))|PHYSICS(?:_(?:SHAPE_(?:CONVEX|NONE|PRIM|TYPE)))?|(?:POS|ROT)_LOCAL|SLICE|TEXT|FLEXIBLE|POINT_LIGHT|TEMP_ON_REZ|PHANTOM|POSITION|SIZE|ROTATION|TEXTURE|NAME|OMEGA|DESC|LINK_TARGET|COLOR|BUMP_SHINY|FULLBRIGHT|TEXGEN|GLOW|MEDIA_(?:ALT_IMAGE_ENABLE|CONTROLS|(?:CURRENT|HOME)_URL|AUTO_(?:LOOP|PLAY|SCALE|ZOOM)|FIRST_CLICK_INTERACT|(?:WIDTH|HEIGHT)_PIXELS|WHITELIST(?:_ENABLE)?|PERMS_(?:INTERACT|CONTROL)|PARAM_MAX|CONTROLS_(?:STANDARD|MINI)|PERM_(?:NONE|OWNER|GROUP|ANYONE)|MAX_(?:URL_LENGTH|WHITELIST_(?:SIZE|COUNT)|(?:WIDTH|HEIGHT)_PIXELS)))|MASK_(?:BASE|OWNER|GROUP|EVERYONE|NEXT)|PERM_(?:TRANSFER|MODIFY|COPY|MOVE|ALL)|PARCEL_(?:MEDIA_COMMAND_(?:STOP|PAUSE|PLAY|LOOP|TEXTURE|URL|TIME|AGENT|UNLOAD|AUTO_ALIGN|TYPE|SIZE|DESC|LOOP_SET)|FLAG_(?:ALLOW_(?:FLY|(?:GROUP_)?SCRIPTS|LANDMARK|TERRAFORM|DAMAGE|CREATE_(?:GROUP_)?OBJECTS)|USE_(?:ACCESS_(?:GROUP|LIST)|BAN_LIST|LAND_PASS_LIST)|LOCAL_SOUND_ONLY|RESTRICT_PUSHOBJECT|ALLOW_(?:GROUP|ALL)_OBJECT_ENTRY)|COUNT_(?:TOTAL|OWNER|GROUP|OTHER|SELECTED|TEMP)|DETAILS_(?:NAME|DESC|OWNER|GROUP|AREA|ID|SEE_AVATARS))|LIST_STAT_(?:MAX|MIN|MEAN|MEDIAN|STD_DEV|SUM(?:_SQUARES)?|NUM_COUNT|GEOMETRIC_MEAN|RANGE)|PAY_(?:HIDE|DEFAULT)|REGION_FLAG_(?:ALLOW_DAMAGE|FIXED_SUN|BLOCK_TERRAFORM|SANDBOX|DISABLE_(?:COLLISIONS|PHYSICS)|BLOCK_FLY|ALLOW_DIRECT_TELEPORT|RESTRICT_PUSHOBJECT)|HTTP_(?:METHOD|MIMETYPE|BODY_(?:MAXLENGTH|TRUNCATED)|CUSTOM_HEADER|PRAGMA_NO_CACHE|VERBOSE_THROTTLE|VERIFY_CERT)|STRING_(?:TRIM(?:_(?:HEAD|TAIL))?)|CLICK_ACTION_(?:NONE|TOUCH|SIT|BUY|PAY|OPEN(?:_MEDIA)?|PLAY|ZOOM)|TOUCH_INVALID_FACE|PROFILE_(?:NONE|SCRIPT_MEMORY)|RC_(?:DATA_FLAGS|DETECT_PHANTOM|GET_(?:LINK_NUM|NORMAL|ROOT_KEY)|MAX_HITS|REJECT_(?:TYPES|AGENTS|(?:NON)?PHYSICAL|LAND))|RCERR_(?:CAST_TIME_EXCEEDED|SIM_PERF_LOW|UNKNOWN)|ESTATE_ACCESS_(?:ALLOWED_(?:AGENT|GROUP)_(?:ADD|REMOVE)|BANNED_AGENT_(?:ADD|REMOVE))|DENSITY|FRICTION|RESTITUTION|GRAVITY_MULTIPLIER|KFM_(?:COMMAND|CMD_(?:PLAY|STOP|PAUSE)|MODE|FORWARD|LOOP|PING_PONG|REVERSE|DATA|ROTATION|TRANSLATION)|ERR_(?:GENERIC|PARCEL_PERMISSIONS|MALFORMED_PARAMS|RUNTIME_PERMISSIONS|THROTTLED)|CHARACTER_(?:CMD_(?:(?:SMOOTH_)?STOP|JUMP)|DESIRED_(?:TURN_)?SPEED|RADIUS|STAY_WITHIN_PARCEL|LENGTH|ORIENTATION|ACCOUNT_FOR_SKIPPED_FRAMES|AVOIDANCE_MODE|TYPE(?:_(?:[ABCD]|NONE))?|MAX_(?:DECEL|TURN_RADIUS|(?:ACCEL|SPEED)))|PURSUIT_(?:OFFSET|FUZZ_FACTOR|GOAL_TOLERANCE|INTERCEPT)|REQUIRE_LINE_OF_SIGHT|FORCE_DIRECT_PATH|VERTICAL|HORIZONTAL|AVOID_(?:CHARACTERS|DYNAMIC_OBSTACLES|NONE)|PU_(?:EVADE_(?:HIDDEN|SPOTTED)|FAILURE_(?:DYNAMIC_PATHFINDING_DISABLED|INVALID_(?:GOAL|START)|NO_(?:NAVMESH|VALID_DESTINATION)|OTHER|TARGET_GONE|(?:PARCEL_)?UNREACHABLE)|(?:GOAL|SLOWDOWN_DISTANCE)_REACHED)|TRAVERSAL_TYPE(?:_(?:FAST|NONE|SLOW))?|CONTENT_TYPE_(?:ATOM|FORM|HTML|JSON|LLSD|RSS|TEXT|XHTML|XML)|GCNP_(?:RADIUS|STATIC)|(?:PATROL|WANDER)_PAUSE_AT_WAYPOINTS|OPT_(?:AVATAR|CHARACTER|EXCLUSION_VOLUME|LEGACY_LINKSET|MATERIAL_VOLUME|OTHER|STATIC_OBSTACLE|WALKABLE)|SIM_STAT_PCT_CHARS_STEPPED)\\b"
			}, {
				b: "\\b(?:FALSE|TRUE)\\b"
			}, {
				b: "\\b(?:ZERO_ROTATION)\\b"
			}, {
				b: "\\b(?:EOF|JSON_(?:ARRAY|DELETE|FALSE|INVALID|NULL|NUMBER|OBJECT|STRING|TRUE)|NULL_KEY|TEXTURE_(?:BLANK|DEFAULT|MEDIA|PLYWOOD|TRANSPARENT)|URL_REQUEST_(?:GRANTED|DENIED))\\b"
			}, {
				b: "\\b(?:ZERO_VECTOR|TOUCH_INVALID_(?:TEXCOORD|VECTOR))\\b"
			}]
		},
		f = {
			cN: "built_in",
			b: "\\b(?:ll(?:AgentInExperience|(?:Create|DataSize|Delete|KeyCount|Keys|Read|Update)KeyValue|GetExperience(?:Details|ErrorMessage)|ReturnObjectsBy(?:ID|Owner)|Json(?:2List|[GS]etValue|ValueType)|Sin|Cos|Tan|Atan2|Sqrt|Pow|Abs|Fabs|Frand|Floor|Ceil|Round|Vec(?:Mag|Norm|Dist)|Rot(?:Between|2(?:Euler|Fwd|Left|Up))|(?:Euler|Axes)2Rot|Whisper|(?:Region|Owner)?Say|Shout|Listen(?:Control|Remove)?|Sensor(?:Repeat|Remove)?|Detected(?:Name|Key|Owner|Type|Pos|Vel|Grab|Rot|Group|LinkNumber)|Die|Ground|Wind|(?:[GS]et)(?:AnimationOverride|MemoryLimit|PrimMediaParams|ParcelMusicURL|Object(?:Desc|Name)|PhysicsMaterial|Status|Scale|Color|Alpha|Texture|Pos|Rot|Force|Torque)|ResetAnimationOverride|(?:Scale|Offset|Rotate)Texture|(?:Rot)?Target(?:Remove)?|(?:Stop)?MoveToTarget|Apply(?:Rotational)?Impulse|Set(?:KeyframedMotion|ContentType|RegionPos|(?:Angular)?Velocity|Buoyancy|HoverHeight|ForceAndTorque|TimerEvent|ScriptState|Damage|TextureAnim|Sound(?:Queueing|Radius)|Vehicle(?:Type|(?:Float|Vector|Rotation)Param)|(?:Touch|Sit)?Text|Camera(?:Eye|At)Offset|PrimitiveParams|ClickAction|Link(?:Alpha|Color|PrimitiveParams(?:Fast)?|Texture(?:Anim)?|Camera|Media)|RemoteScriptAccessPin|PayPrice|LocalRot)|ScaleByFactor|Get(?:(?:Max|Min)ScaleFactor|ClosestNavPoint|StaticPath|SimStats|Env|PrimitiveParams|Link(?:PrimitiveParams|Number(?:OfSides)?|Key|Name|Media)|HTTPHeader|FreeURLs|Object(?:Details|PermMask|PrimCount)|Parcel(?:MaxPrims|Details|Prim(?:Count|Owners))|Attached(?:List)?|(?:SPMax|Free|Used)Memory|Region(?:Name|TimeDilation|FPS|Corner|AgentCount)|Root(?:Position|Rotation)|UnixTime|(?:Parcel|Region)Flags|(?:Wall|GMT)clock|SimulatorHostname|BoundingBox|GeometricCenter|Creator|NumberOf(?:Prims|NotecardLines|Sides)|Animation(?:List)?|(?:Camera|Local)(?:Pos|Rot)|Vel|Accel|Omega|Time(?:stamp|OfDay)|(?:Object|CenterOf)?Mass|MassMKS|Energy|Owner|(?:Owner)?Key|SunDirection|Texture(?:Offset|Scale|Rot)|Inventory(?:Number|Name|Key|Type|Creator|PermMask)|Permissions(?:Key)?|StartParameter|List(?:Length|EntryType)|Date|Agent(?:Size|Info|Language|List)|LandOwnerAt|NotecardLine|Script(?:Name|State))|(?:Get|Reset|GetAndReset)Time|PlaySound(?:Slave)?|LoopSound(?:Master|Slave)?|(?:Trigger|Stop|Preload)Sound|(?:(?:Get|Delete)Sub|Insert)String|To(?:Upper|Lower)|Give(?:InventoryList|Money)|RezObject|(?:Stop)?LookAt|Sleep|CollisionFilter|(?:Take|Release)Controls|DetachFromAvatar|AttachToAvatar(?:Temp)?|InstantMessage|(?:GetNext)?Email|StopHover|MinEventDelay|RotLookAt|String(?:Length|Trim)|(?:Start|Stop)Animation|TargetOmega|Request(?:Experience)?Permissions|(?:Create|Break)Link|BreakAllLinks|(?:Give|Remove)Inventory|Water|PassTouches|Request(?:Agent|Inventory)Data|TeleportAgent(?:Home|GlobalCoords)?|ModifyLand|CollisionSound|ResetScript|MessageLinked|PushObject|PassCollisions|AxisAngle2Rot|Rot2(?:Axis|Angle)|A(?:cos|sin)|AngleBetween|AllowInventoryDrop|SubStringIndex|List2(?:CSV|Integer|Json|Float|String|Key|Vector|Rot|List(?:Strided)?)|DeleteSubList|List(?:Statistics|Sort|Randomize|(?:Insert|Find|Replace)List)|EdgeOfWorld|AdjustSoundVolume|Key2Name|TriggerSoundLimited|EjectFromLand|(?:CSV|ParseString)2List|OverMyLand|SameGroup|UnSit|Ground(?:Slope|Normal|Contour)|GroundRepel|(?:Set|Remove)VehicleFlags|(?:AvatarOn)?(?:Link)?SitTarget|Script(?:Danger|Profiler)|Dialog|VolumeDetect|ResetOtherScript|RemoteLoadScriptPin|(?:Open|Close)RemoteDataChannel|SendRemoteData|RemoteDataReply|(?:Integer|String)ToBase64|XorBase64|Log(?:10)?|Base64To(?:String|Integer)|ParseStringKeepNulls|RezAtRoot|RequestSimulatorData|ForceMouselook|(?:Load|Release|(?:E|Une)scape)URL|ParcelMedia(?:CommandList|Query)|ModPow|MapDestination|(?:RemoveFrom|AddTo|Reset)Land(?:Pass|Ban)List|(?:Set|Clear)CameraParams|HTTP(?:Request|Response)|TextBox|DetectedTouch(?:UV|Face|Pos|(?:N|Bin)ormal|ST)|(?:MD5|SHA1|DumpList2)String|Request(?:Secure)?URL|Clear(?:Prim|Link)Media|(?:Link)?ParticleSystem|(?:Get|Request)(?:Username|DisplayName)|RegionSayTo|CastRay|GenerateKey|TransferLindenDollars|ManageEstateAccess|(?:Create|Delete)Character|ExecCharacterCmd|Evade|FleeFrom|NavigateTo|PatrolPoints|Pursue|UpdateCharacter|WanderWithin))\\b"
		};
	return {
		i: ":",
		c: [c, {
			cN: "comment",
			v: [a.C("//", "$"), a.C("/\\*", "\\*/")]
		}, d, {
			cN: "section",
			v: [{
				b: "\\b(?:state|default)\\b"
			}, {
				b: "\\b(?:state_(?:entry|exit)|touch(?:_(?:start|end))?|(?:land_)?collision(?:_(?:start|end))?|timer|listen|(?:no_)?sensor|control|(?:not_)?at_(?:rot_)?target|money|email|experience_permissions(?:_denied)?|run_time_permissions|changed|attach|dataserver|moving_(?:start|end)|link_message|(?:on|object)_rez|remote_data|http_re(?:sponse|quest)|path_update|transaction_result)\\b"
			}]
		}, f, e, {
			cN: "type",
			b: "\\b(?:integer|float|string|key|vector|quaternion|rotation|list)\\b"
		}]
	}
}), hljs.registerLanguage("inform7", function(a) {
	var b = "\\[",
		c = "\\]";
	return {
		aliases: ["i7"],
		cI: !0,
		k: {
			keyword: "thing room person man woman animal container supporter backdrop door scenery open closed locked inside gender is are say understand kind of rule"
		},
		c: [{
			cN: "string",
			b: '"',
			e: '"',
			r: 0,
			c: [{
				cN: "subst",
				b: b,
				e: c
			}]
		}, {
			cN: "section",
			b: /^(Volume|Book|Part|Chapter|Section|Table)\b/,
			e: "$"
		}, {
			b: /^(Check|Carry out|Report|Instead of|To|Rule|When|Before|After)\b/,
			e: ":",
			c: [{
				b: "\\(This",
				e: "\\)"
			}]
		}, {
			cN: "comment",
			b: b,
			e: c,
			c: ["self"]
		}]
	}
}), hljs.registerLanguage("livecodeserver", function(a) {
	var b = {
			b: "\\b[gtps][A-Z]+[A-Za-z0-9_\\-]*\\b|\\$_[A-Z]+",
			r: 0
		},
		c = [a.CBCM, a.HCM, a.C("--", "$"), a.C("[^:]//", "$")],
		d = a.inherit(a.TM, {
			v: [{
				b: "\\b_*rig[A-Z]+[A-Za-z0-9_\\-]*"
			}, {
				b: "\\b_[a-z0-9\\-]+"
			}]
		}),
		e = a.inherit(a.TM, {
			b: "\\b([A-Za-z0-9_\\-]+)\\b"
		});
	return {
		cI: !1,
		k: {
			keyword: "$_COOKIE $_FILES $_GET $_GET_BINARY $_GET_RAW $_POST $_POST_BINARY $_POST_RAW $_SESSION $_SERVER codepoint codepoints segment segments codeunit codeunits sentence sentences trueWord trueWords paragraph after byte bytes english the until http forever descending using line real8 with seventh for stdout finally element word words fourth before black ninth sixth characters chars stderr uInt1 uInt1s uInt2 uInt2s stdin string lines relative rel any fifth items from middle mid at else of catch then third it file milliseconds seconds second secs sec int1 int1s int4 int4s internet int2 int2s normal text item last long detailed effective uInt4 uInt4s repeat end repeat URL in try into switch to words https token binfile each tenth as ticks tick system real4 by dateItems without char character ascending eighth whole dateTime numeric short first ftp integer abbreviated abbr abbrev private case while if div mod wrap and or bitAnd bitNot bitOr bitXor among not in a an within contains ends with begins the keys of keys",
			literal: "SIX TEN FORMFEED NINE ZERO NONE SPACE FOUR FALSE COLON CRLF PI COMMA ENDOFFILE EOF EIGHT FIVE QUOTE EMPTY ONE TRUE RETURN CR LINEFEED RIGHT BACKSLASH NULL SEVEN TAB THREE TWO six ten formfeed nine zero none space four false colon crlf pi comma endoffile eof eight five quote empty one true return cr linefeed right backslash null seven tab three two RIVERSION RISTATE FILE_READ_MODE FILE_WRITE_MODE FILE_WRITE_MODE DIR_WRITE_MODE FILE_READ_UMASK FILE_WRITE_UMASK DIR_READ_UMASK DIR_WRITE_UMASK",
			built_in: "put abs acos aliasReference annuity arrayDecode arrayEncode asin atan atan2 average avg avgDev base64Decode base64Encode baseConvert binaryDecode binaryEncode byteOffset byteToNum cachedURL cachedURLs charToNum cipherNames codepointOffset codepointProperty codepointToNum codeunitOffset commandNames compound compress constantNames cos date dateFormat decompress directories diskSpace DNSServers exp exp1 exp2 exp10 extents files flushEvents folders format functionNames geometricMean global globals hasMemory harmonicMean hostAddress hostAddressToName hostName hostNameToAddress isNumber ISOToMac itemOffset keys len length libURLErrorData libUrlFormData libURLftpCommand libURLLastHTTPHeaders libURLLastRHHeaders libUrlMultipartFormAddPart libUrlMultipartFormData libURLVersion lineOffset ln ln1 localNames log log2 log10 longFilePath lower macToISO matchChunk matchText matrixMultiply max md5Digest median merge millisec millisecs millisecond milliseconds min monthNames nativeCharToNum normalizeText num number numToByte numToChar numToCodepoint numToNativeChar offset open openfiles openProcesses openProcessIDs openSockets paragraphOffset paramCount param params peerAddress pendingMessages platform popStdDev populationStandardDeviation populationVariance popVariance processID random randomBytes replaceText result revCreateXMLTree revCreateXMLTreeFromFile revCurrentRecord revCurrentRecordIsFirst revCurrentRecordIsLast revDatabaseColumnCount revDatabaseColumnIsNull revDatabaseColumnLengths revDatabaseColumnNames revDatabaseColumnNamed revDatabaseColumnNumbered revDatabaseColumnTypes revDatabaseConnectResult revDatabaseCursors revDatabaseID revDatabaseTableNames revDatabaseType revDataFromQuery revdb_closeCursor revdb_columnbynumber revdb_columncount revdb_columnisnull revdb_columnlengths revdb_columnnames revdb_columntypes revdb_commit revdb_connect revdb_connections revdb_connectionerr revdb_currentrecord revdb_cursorconnection revdb_cursorerr revdb_cursors revdb_dbtype revdb_disconnect revdb_execute revdb_iseof revdb_isbof revdb_movefirst revdb_movelast revdb_movenext revdb_moveprev revdb_query revdb_querylist revdb_recordcount revdb_rollback revdb_tablenames revGetDatabaseDriverPath revNumberOfRecords revOpenDatabase revOpenDatabases revQueryDatabase revQueryDatabaseBlob revQueryResult revQueryIsAtStart revQueryIsAtEnd revUnixFromMacPath revXMLAttribute revXMLAttributes revXMLAttributeValues revXMLChildContents revXMLChildNames revXMLCreateTreeFromFileWithNamespaces revXMLCreateTreeWithNamespaces revXMLDataFromXPathQuery revXMLEvaluateXPath revXMLFirstChild revXMLMatchingNode revXMLNextSibling revXMLNodeContents revXMLNumberOfChildren revXMLParent revXMLPreviousSibling revXMLRootNode revXMLRPC_CreateRequest revXMLRPC_Documents revXMLRPC_Error revXMLRPC_GetHost revXMLRPC_GetMethod revXMLRPC_GetParam revXMLText revXMLRPC_Execute revXMLRPC_GetParamCount revXMLRPC_GetParamNode revXMLRPC_GetParamType revXMLRPC_GetPath revXMLRPC_GetPort revXMLRPC_GetProtocol revXMLRPC_GetRequest revXMLRPC_GetResponse revXMLRPC_GetSocket revXMLTree revXMLTrees revXMLValidateDTD revZipDescribeItem revZipEnumerateItems revZipOpenArchives round sampVariance sec secs seconds sentenceOffset sha1Digest shell shortFilePath sin specialFolderPath sqrt standardDeviation statRound stdDev sum sysError systemVersion tan tempName textDecode textEncode tick ticks time to tokenOffset toLower toUpper transpose truewordOffset trunc uniDecode uniEncode upper URLDecode URLEncode URLStatus uuid value variableNames variance version waitDepth weekdayNames wordOffset xsltApplyStylesheet xsltApplyStylesheetFromFile xsltLoadStylesheet xsltLoadStylesheetFromFile add breakpoint cancel clear local variable file word line folder directory URL close socket process combine constant convert create new alias folder directory decrypt delete variable word line folder directory URL dispatch divide do encrypt filter get include intersect kill libURLDownloadToFile libURLFollowHttpRedirects libURLftpUpload libURLftpUploadFile libURLresetAll libUrlSetAuthCallback libURLSetCustomHTTPHeaders libUrlSetExpect100 libURLSetFTPListCommand libURLSetFTPMode libURLSetFTPStopTime libURLSetStatusCallback load multiply socket prepare process post seek rel relative read from process rename replace require resetAll resolve revAddXMLNode revAppendXML revCloseCursor revCloseDatabase revCommitDatabase revCopyFile revCopyFolder revCopyXMLNode revDeleteFolder revDeleteXMLNode revDeleteAllXMLTrees revDeleteXMLTree revExecuteSQL revGoURL revInsertXMLNode revMoveFolder revMoveToFirstRecord revMoveToLastRecord revMoveToNextRecord revMoveToPreviousRecord revMoveToRecord revMoveXMLNode revPutIntoXMLNode revRollBackDatabase revSetDatabaseDriverPath revSetXMLAttribute revXMLRPC_AddParam revXMLRPC_DeleteAllDocuments revXMLAddDTD revXMLRPC_Free revXMLRPC_FreeAll revXMLRPC_DeleteDocument revXMLRPC_DeleteParam revXMLRPC_SetHost revXMLRPC_SetMethod revXMLRPC_SetPort revXMLRPC_SetProtocol revXMLRPC_SetSocket revZipAddItemWithData revZipAddItemWithFile revZipAddUncompressedItemWithData revZipAddUncompressedItemWithFile revZipCancel revZipCloseArchive revZipDeleteItem revZipExtractItemToFile revZipExtractItemToVariable revZipSetProgressCallback revZipRenameItem revZipReplaceItemWithData revZipReplaceItemWithFile revZipOpenArchive send set sort split start stop subtract union unload wait write"
		},
		c: [b, {
			cN: "keyword",
			b: "\\bend\\sif\\b"
		}, {
			cN: "function",
			bK: "function",
			e: "$",
			c: [b, e, a.ASM, a.QSM, a.BNM, a.CNM, d]
		}, {
			cN: "function",
			b: "\\bend\\s+",
			e: "$",
			k: "end",
			c: [e, d],
			r: 0
		}, {
			bK: "command on",
			e: "$",
			c: [b, e, a.ASM, a.QSM, a.BNM, a.CNM, d]
		}, {
			cN: "meta",
			v: [{
				b: "<\\?(rev|lc|livecode)",
				r: 10
			}, {
				b: "<\\?"
			}, {
				b: "\\?>"
			}]
		}, a.ASM, a.QSM, a.BNM, a.CNM, d].concat(c),
		i: ";$|^\\[|^=|&|{"
	}
}), hljs.registerLanguage("css", function(a) {
	var b = "[a-zA-Z-][a-zA-Z0-9_-]*",
		c = {
			b: /[A-Z\_\.\-]+\s*:/,
			rB: !0,
			e: ";",
			eW: !0,
			c: [{
				cN: "attribute",
				b: /\S/,
				e: ":",
				eE: !0,
				starts: {
					eW: !0,
					eE: !0,
					c: [{
						b: /[\w-]+\(/,
						rB: !0,
						c: [{
							cN: "built_in",
							b: /[\w-]+/
						}, {
							b: /\(/,
							e: /\)/,
							c: [a.ASM, a.QSM]
						}]
					}, a.CSSNM, a.QSM, a.ASM, a.CBCM, {
						cN: "number",
						b: "#[0-9A-Fa-f]+"
					}, {
						cN: "meta",
						b: "!important"
					}]
				}
			}]
		};
	return {
		cI: !0,
		i: /[=\/|'\$]/,
		c: [a.CBCM, {
			cN: "selector-id",
			b: /#[A-Za-z0-9_-]+/
		}, {
			cN: "selector-class",
			b: /\.[A-Za-z0-9_-]+/
		}, {
			cN: "selector-attr",
			b: /\[/,
			e: /\]/,
			i: "$"
		}, {
			cN: "selector-pseudo",
			b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
		}, {
			b: "@(font-face|page)",
			l: "[a-z-]+",
			k: "font-face page"
		}, {
			b: "@",
			e: "[{;]",
			i: /:/,
			c: [{
				cN: "keyword",
				b: /\w+/
			}, {
				b: /\s/,
				eW: !0,
				eE: !0,
				r: 0,
				c: [a.ASM, a.QSM, a.CSSNM]
			}]
		}, {
			cN: "selector-tag",
			b: b,
			r: 0
		}, {
			b: "{",
			e: "}",
			i: /\S/,
			c: [a.CBCM, c]
		}]
	}
}), hljs.registerLanguage("vala", function(a) {
	return {
		k: {
			keyword: "char uchar unichar int uint long ulong short ushort int8 int16 int32 int64 uint8 uint16 uint32 uint64 float double bool struct enum string void weak unowned owned async signal static abstract interface override virtual delegate if while do for foreach else switch case break default return try catch public private protected internal using new this get set const stdout stdin stderr var",
			built_in: "DBus GLib CCode Gee Object Gtk Posix",
			literal: "false true null"
		},
		c: [{
			cN: "class",
			bK: "class interface namespace",
			e: "{",
			eE: !0,
			i: "[^,:\\n\\s\\.]",
			c: [a.UTM]
		}, a.CLCM, a.CBCM, {
			cN: "string",
			b: '"""',
			e: '"""',
			r: 5
		}, a.ASM, a.QSM, a.CNM, {
			cN: "meta",
			b: "^#",
			e: "$",
			r: 2
		}]
	}
}), hljs.registerLanguage("mathematica", function(a) {
	return {
		aliases: ["mma"],
		l: "(\\$|\\b)" + a.IR + "\\b",
		k: "AbelianGroup Abort AbortKernels AbortProtect Above Abs Absolute AbsoluteCorrelation AbsoluteCorrelationFunction AbsoluteCurrentValue AbsoluteDashing AbsoluteFileName AbsoluteOptions AbsolutePointSize AbsoluteThickness AbsoluteTime AbsoluteTiming AccountingForm Accumulate Accuracy AccuracyGoal ActionDelay ActionMenu ActionMenuBox ActionMenuBoxOptions Active ActiveItem ActiveStyle AcyclicGraphQ AddOnHelpPath AddTo AdjacencyGraph AdjacencyList AdjacencyMatrix AdjustmentBox AdjustmentBoxOptions AdjustTimeSeriesForecast AffineTransform After AiryAi AiryAiPrime AiryAiZero AiryBi AiryBiPrime AiryBiZero AlgebraicIntegerQ AlgebraicNumber AlgebraicNumberDenominator AlgebraicNumberNorm AlgebraicNumberPolynomial AlgebraicNumberTrace AlgebraicRules AlgebraicRulesData Algebraics AlgebraicUnitQ Alignment AlignmentMarker AlignmentPoint All AllowedDimensions AllowGroupClose AllowInlineCells AllowKernelInitialization AllowReverseGroupClose AllowScriptLevelChange AlphaChannel AlternatingGroup AlternativeHypothesis Alternatives AmbientLight Analytic AnchoredSearch And AndersonDarlingTest AngerJ AngleBracket AngularGauge Animate AnimationCycleOffset AnimationCycleRepetitions AnimationDirection AnimationDisplayTime AnimationRate AnimationRepetitions AnimationRunning Animator AnimatorBox AnimatorBoxOptions AnimatorElements Annotation Annuity AnnuityDue Antialiasing Antisymmetric Apart ApartSquareFree Appearance AppearanceElements AppellF1 Append AppendTo Apply ArcCos ArcCosh ArcCot ArcCoth ArcCsc ArcCsch ArcSec ArcSech ArcSin ArcSinDistribution ArcSinh ArcTan ArcTanh Arg ArgMax ArgMin ArgumentCountQ ARIMAProcess ArithmeticGeometricMean ARMAProcess ARProcess Array ArrayComponents ArrayDepth ArrayFlatten ArrayPad ArrayPlot ArrayQ ArrayReshape ArrayRules Arrays Arrow Arrow3DBox ArrowBox Arrowheads AspectRatio AspectRatioFixed Assert Assuming Assumptions AstronomicalData Asynchronous AsynchronousTaskObject AsynchronousTasks AtomQ Attributes AugmentedSymmetricPolynomial AutoAction AutoDelete AutoEvaluateEvents AutoGeneratedPackage AutoIndent AutoIndentSpacings AutoItalicWords AutoloadPath AutoMatch Automatic AutomaticImageSize AutoMultiplicationSymbol AutoNumberFormatting AutoOpenNotebooks AutoOpenPalettes AutorunSequencing AutoScaling AutoScroll AutoSpacing AutoStyleOptions AutoStyleWords Axes AxesEdge AxesLabel AxesOrigin AxesStyle Axis BabyMonsterGroupB Back Background BackgroundTasksSettings Backslash Backsubstitution Backward Band BandpassFilter BandstopFilter BarabasiAlbertGraphDistribution BarChart BarChart3D BarLegend BarlowProschanImportance BarnesG BarOrigin BarSpacing BartlettHannWindow BartlettWindow BaseForm Baseline BaselinePosition BaseStyle BatesDistribution BattleLemarieWavelet Because BeckmannDistribution Beep Before Begin BeginDialogPacket BeginFrontEndInteractionPacket BeginPackage BellB BellY Below BenfordDistribution BeniniDistribution BenktanderGibratDistribution BenktanderWeibullDistribution BernoulliB BernoulliDistribution BernoulliGraphDistribution BernoulliProcess BernsteinBasis BesselFilterModel BesselI BesselJ BesselJZero BesselK BesselY BesselYZero Beta BetaBinomialDistribution BetaDistribution BetaNegativeBinomialDistribution BetaPrimeDistribution BetaRegularized BetweennessCentrality BezierCurve BezierCurve3DBox BezierCurve3DBoxOptions BezierCurveBox BezierCurveBoxOptions BezierFunction BilateralFilter Binarize BinaryFormat BinaryImageQ BinaryRead BinaryReadList BinaryWrite BinCounts BinLists Binomial BinomialDistribution BinomialProcess BinormalDistribution BiorthogonalSplineWavelet BipartiteGraphQ BirnbaumImportance BirnbaumSaundersDistribution BitAnd BitClear BitGet BitLength BitNot BitOr BitSet BitShiftLeft BitShiftRight BitXor Black BlackmanHarrisWindow BlackmanNuttallWindow BlackmanWindow Blank BlankForm BlankNullSequence BlankSequence Blend Block BlockRandom BlomqvistBeta BlomqvistBetaTest Blue Blur BodePlot BohmanWindow Bold Bookmarks Boole BooleanConsecutiveFunction BooleanConvert BooleanCountingFunction BooleanFunction BooleanGraph BooleanMaxterms BooleanMinimize BooleanMinterms Booleans BooleanTable BooleanVariables BorderDimensions BorelTannerDistribution Bottom BottomHatTransform BoundaryStyle Bounds Box BoxBaselineShift BoxData BoxDimensions Boxed Boxes BoxForm BoxFormFormatTypes BoxFrame BoxID BoxMargins BoxMatrix BoxRatios BoxRotation BoxRotationPoint BoxStyle BoxWhiskerChart Bra BracketingBar BraKet BrayCurtisDistance BreadthFirstScan Break Brown BrownForsytheTest BrownianBridgeProcess BrowserCategory BSplineBasis BSplineCurve BSplineCurve3DBox BSplineCurveBox BSplineCurveBoxOptions BSplineFunction BSplineSurface BSplineSurface3DBox BubbleChart BubbleChart3D BubbleScale BubbleSizes BulletGauge BusinessDayQ ButterflyGraph ButterworthFilterModel Button ButtonBar ButtonBox ButtonBoxOptions ButtonCell ButtonContents ButtonData ButtonEvaluator ButtonExpandable ButtonFrame ButtonFunction ButtonMargins ButtonMinHeight ButtonNote ButtonNotebook ButtonSource ButtonStyle ButtonStyleMenuListing Byte ByteCount ByteOrdering C CachedValue CacheGraphics CalendarData CalendarType CallPacket CanberraDistance Cancel CancelButton CandlestickChart Cap CapForm CapitalDifferentialD CardinalBSplineBasis CarmichaelLambda Cases Cashflow Casoratian Catalan CatalanNumber Catch CauchyDistribution CauchyWindow CayleyGraph CDF CDFDeploy CDFInformation CDFWavelet Ceiling Cell CellAutoOverwrite CellBaseline CellBoundingBox CellBracketOptions CellChangeTimes CellContents CellContext CellDingbat CellDynamicExpression CellEditDuplicate CellElementsBoundingBox CellElementSpacings CellEpilog CellEvaluationDuplicate CellEvaluationFunction CellEventActions CellFrame CellFrameColor CellFrameLabelMargins CellFrameLabels CellFrameMargins CellGroup CellGroupData CellGrouping CellGroupingRules CellHorizontalScrolling CellID CellLabel CellLabelAutoDelete CellLabelMargins CellLabelPositioning CellMargins CellObject CellOpen CellPrint CellProlog Cells CellSize CellStyle CellTags CellularAutomaton CensoredDistribution Censoring Center CenterDot CentralMoment CentralMomentGeneratingFunction CForm ChampernowneNumber ChanVeseBinarize Character CharacterEncoding CharacterEncodingsPath CharacteristicFunction CharacteristicPolynomial CharacterRange Characters ChartBaseStyle ChartElementData ChartElementDataFunction ChartElementFunction ChartElements ChartLabels ChartLayout ChartLegends ChartStyle Chebyshev1FilterModel Chebyshev2FilterModel ChebyshevDistance ChebyshevT ChebyshevU Check CheckAbort CheckAll Checkbox CheckboxBar CheckboxBox CheckboxBoxOptions ChemicalData ChessboardDistance ChiDistribution ChineseRemainder ChiSquareDistribution ChoiceButtons ChoiceDialog CholeskyDecomposition Chop Circle CircleBox CircleDot CircleMinus CirclePlus CircleTimes CirculantGraph CityData Clear ClearAll ClearAttributes ClearSystemCache ClebschGordan ClickPane Clip ClipboardNotebook ClipFill ClippingStyle ClipPlanes ClipRange Clock ClockGauge ClockwiseContourIntegral Close Closed CloseKernels ClosenessCentrality Closing ClosingAutoSave ClosingEvent ClusteringComponents CMYKColor Coarse Coefficient CoefficientArrays CoefficientDomain CoefficientList CoefficientRules CoifletWavelet Collect Colon ColonForm ColorCombine ColorConvert ColorData ColorDataFunction ColorFunction ColorFunctionScaling Colorize ColorNegate ColorOutput ColorProfileData ColorQuantize ColorReplace ColorRules ColorSelectorSettings ColorSeparate ColorSetter ColorSetterBox ColorSetterBoxOptions ColorSlider ColorSpace Column ColumnAlignments ColumnBackgrounds ColumnForm ColumnLines ColumnsEqual ColumnSpacings ColumnWidths CommonDefaultFormatTypes Commonest CommonestFilter CommonUnits CommunityBoundaryStyle CommunityGraphPlot CommunityLabels CommunityRegionStyle CompatibleUnitQ CompilationOptions CompilationTarget Compile Compiled CompiledFunction Complement CompleteGraph CompleteGraphQ CompleteKaryTree CompletionsListPacket Complex Complexes ComplexExpand ComplexInfinity ComplexityFunction ComponentMeasurements ComponentwiseContextMenu Compose ComposeList ComposeSeries Composition CompoundExpression CompoundPoissonDistribution CompoundPoissonProcess CompoundRenewalProcess Compress CompressedData Condition ConditionalExpression Conditioned Cone ConeBox ConfidenceLevel ConfidenceRange ConfidenceTransform ConfigurationPath Congruent Conjugate ConjugateTranspose Conjunction Connect ConnectedComponents ConnectedGraphQ ConnesWindow ConoverTest ConsoleMessage ConsoleMessagePacket ConsolePrint Constant ConstantArray Constants ConstrainedMax ConstrainedMin ContentPadding ContentsBoundingBox ContentSelectable ContentSize Context ContextMenu Contexts ContextToFilename ContextToFileName Continuation Continue ContinuedFraction ContinuedFractionK ContinuousAction ContinuousMarkovProcess ContinuousTimeModelQ ContinuousWaveletData ContinuousWaveletTransform ContourDetect ContourGraphics ContourIntegral ContourLabels ContourLines ContourPlot ContourPlot3D Contours ContourShading ContourSmoothing ContourStyle ContraharmonicMean Control ControlActive ControlAlignment ControllabilityGramian ControllabilityMatrix ControllableDecomposition ControllableModelQ ControllerDuration ControllerInformation ControllerInformationData ControllerLinking ControllerManipulate ControllerMethod ControllerPath ControllerState ControlPlacement ControlsRendering ControlType Convergents ConversionOptions ConversionRules ConvertToBitmapPacket ConvertToPostScript ConvertToPostScriptPacket Convolve ConwayGroupCo1 ConwayGroupCo2 ConwayGroupCo3 CoordinateChartData CoordinatesToolOptions CoordinateTransform CoordinateTransformData CoprimeQ Coproduct CopulaDistribution Copyable CopyDirectory CopyFile CopyTag CopyToClipboard CornerFilter CornerNeighbors Correlation CorrelationDistance CorrelationFunction CorrelationTest Cos Cosh CoshIntegral CosineDistance CosineWindow CosIntegral Cot Coth Count CounterAssignments CounterBox CounterBoxOptions CounterClockwiseContourIntegral CounterEvaluator CounterFunction CounterIncrements CounterStyle CounterStyleMenuListing CountRoots CountryData Covariance CovarianceEstimatorFunction CovarianceFunction CoxianDistribution CoxIngersollRossProcess CoxModel CoxModelFit CramerVonMisesTest CreateArchive CreateDialog CreateDirectory CreateDocument CreateIntermediateDirectories CreatePalette CreatePalettePacket CreateScheduledTask CreateTemporary CreateWindow CriticalityFailureImportance CriticalitySuccessImportance CriticalSection Cross CrossingDetect CrossMatrix Csc Csch CubeRoot Cubics Cuboid CuboidBox Cumulant CumulantGeneratingFunction Cup CupCap Curl CurlyDoubleQuote CurlyQuote CurrentImage CurrentlySpeakingPacket CurrentValue CurvatureFlowFilter CurveClosed Cyan CycleGraph CycleIndexPolynomial Cycles CyclicGroup Cyclotomic Cylinder CylinderBox CylindricalDecomposition D DagumDistribution DamerauLevenshteinDistance DampingFactor Darker Dashed Dashing DataCompression DataDistribution DataRange DataReversed Date DateDelimiters DateDifference DateFunction DateList DateListLogPlot DateListPlot DatePattern DatePlus DateRange DateString DateTicksFormat DaubechiesWavelet DavisDistribution DawsonF DayCount DayCountConvention DayMatchQ DayName DayPlus DayRange DayRound DeBruijnGraph Debug DebugTag Decimal DeclareKnownSymbols DeclarePackage Decompose Decrement DedekindEta Default DefaultAxesStyle DefaultBaseStyle DefaultBoxStyle DefaultButton DefaultColor DefaultControlPlacement DefaultDuplicateCellStyle DefaultDuration DefaultElement DefaultFaceGridsStyle DefaultFieldHintStyle DefaultFont DefaultFontProperties DefaultFormatType DefaultFormatTypeForStyle DefaultFrameStyle DefaultFrameTicksStyle DefaultGridLinesStyle DefaultInlineFormatType DefaultInputFormatType DefaultLabelStyle DefaultMenuStyle DefaultNaturalLanguage DefaultNewCellStyle DefaultNewInlineCellStyle DefaultNotebook DefaultOptions DefaultOutputFormatType DefaultStyle DefaultStyleDefinitions DefaultTextFormatType DefaultTextInlineFormatType DefaultTicksStyle DefaultTooltipStyle DefaultValues Defer DefineExternal DefineInputStreamMethod DefineOutputStreamMethod Definition Degree DegreeCentrality DegreeGraphDistribution DegreeLexicographic DegreeReverseLexicographic Deinitialization Del Deletable Delete DeleteBorderComponents DeleteCases DeleteContents DeleteDirectory DeleteDuplicates DeleteFile DeleteSmallComponents DeleteWithContents DeletionWarning Delimiter DelimiterFlashTime DelimiterMatching Delimiters Denominator DensityGraphics DensityHistogram DensityPlot DependentVariables Deploy Deployed Depth DepthFirstScan Derivative DerivativeFilter DescriptorStateSpace DesignMatrix Det DGaussianWavelet DiacriticalPositioning Diagonal DiagonalMatrix Dialog DialogIndent DialogInput DialogLevel DialogNotebook DialogProlog DialogReturn DialogSymbols Diamond DiamondMatrix DiceDissimilarity DictionaryLookup DifferenceDelta DifferenceOrder DifferenceRoot DifferenceRootReduce Differences DifferentialD DifferentialRoot DifferentialRootReduce DifferentiatorFilter DigitBlock DigitBlockMinimum DigitCharacter DigitCount DigitQ DihedralGroup Dilation Dimensions DiracComb DiracDelta DirectedEdge DirectedEdges DirectedGraph DirectedGraphQ DirectedInfinity Direction Directive Directory DirectoryName DirectoryQ DirectoryStack DirichletCharacter DirichletConvolve DirichletDistribution DirichletL DirichletTransform DirichletWindow DisableConsolePrintPacket DiscreteChirpZTransform DiscreteConvolve DiscreteDelta DiscreteHadamardTransform DiscreteIndicator DiscreteLQEstimatorGains DiscreteLQRegulatorGains DiscreteLyapunovSolve DiscreteMarkovProcess DiscretePlot DiscretePlot3D DiscreteRatio DiscreteRiccatiSolve DiscreteShift DiscreteTimeModelQ DiscreteUniformDistribution DiscreteVariables DiscreteWaveletData DiscreteWaveletPacketTransform DiscreteWaveletTransform Discriminant Disjunction Disk DiskBox DiskMatrix Dispatch DispersionEstimatorFunction Display DisplayAllSteps DisplayEndPacket DisplayFlushImagePacket DisplayForm DisplayFunction DisplayPacket DisplayRules DisplaySetSizePacket DisplayString DisplayTemporary DisplayWith DisplayWithRef DisplayWithVariable DistanceFunction DistanceTransform Distribute Distributed DistributedContexts DistributeDefinitions DistributionChart DistributionDomain DistributionFitTest DistributionParameterAssumptions DistributionParameterQ Dithering Div Divergence Divide DivideBy Dividers Divisible Divisors DivisorSigma DivisorSum DMSList DMSString Do DockedCells DocumentNotebook DominantColors DOSTextFormat Dot DotDashed DotEqual Dotted DoubleBracketingBar DoubleContourIntegral DoubleDownArrow DoubleLeftArrow DoubleLeftRightArrow DoubleLeftTee DoubleLongLeftArrow DoubleLongLeftRightArrow DoubleLongRightArrow DoubleRightArrow DoubleRightTee DoubleUpArrow DoubleUpDownArrow DoubleVerticalBar DoublyInfinite Down DownArrow DownArrowBar DownArrowUpArrow DownLeftRightVector DownLeftTeeVector DownLeftVector DownLeftVectorBar DownRightTeeVector DownRightVector DownRightVectorBar Downsample DownTee DownTeeArrow DownValues DragAndDrop DrawEdges DrawFrontFaces DrawHighlighted Drop DSolve Dt DualLinearProgramming DualSystemsModel DumpGet DumpSave DuplicateFreeQ Dynamic DynamicBox DynamicBoxOptions DynamicEvaluationTimeout DynamicLocation DynamicModule DynamicModuleBox DynamicModuleBoxOptions DynamicModuleParent DynamicModuleValues DynamicName DynamicNamespace DynamicReference DynamicSetting DynamicUpdating DynamicWrapper DynamicWrapperBox DynamicWrapperBoxOptions E EccentricityCentrality EdgeAdd EdgeBetweennessCentrality EdgeCapacity EdgeCapForm EdgeColor EdgeConnectivity EdgeCost EdgeCount EdgeCoverQ EdgeDashing EdgeDelete EdgeDetect EdgeForm EdgeIndex EdgeJoinForm EdgeLabeling EdgeLabels EdgeLabelStyle EdgeList EdgeOpacity EdgeQ EdgeRenderingFunction EdgeRules EdgeShapeFunction EdgeStyle EdgeThickness EdgeWeight Editable EditButtonSettings EditCellTagsSettings EditDistance EffectiveInterest Eigensystem Eigenvalues EigenvectorCentrality Eigenvectors Element ElementData Eliminate EliminationOrder EllipticE EllipticExp EllipticExpPrime EllipticF EllipticFilterModel EllipticK EllipticLog EllipticNomeQ EllipticPi EllipticReducedHalfPeriods EllipticTheta EllipticThetaPrime EmitSound EmphasizeSyntaxErrors EmpiricalDistribution Empty EmptyGraphQ EnableConsolePrintPacket Enabled Encode End EndAdd EndDialogPacket EndFrontEndInteractionPacket EndOfFile EndOfLine EndOfString EndPackage EngineeringForm Enter EnterExpressionPacket EnterTextPacket Entropy EntropyFilter Environment Epilog Equal EqualColumns EqualRows EqualTilde EquatedTo Equilibrium EquirippleFilterKernel Equivalent Erf Erfc Erfi ErlangB ErlangC ErlangDistribution Erosion ErrorBox ErrorBoxOptions ErrorNorm ErrorPacket ErrorsDialogSettings EstimatedDistribution EstimatedProcess EstimatorGains EstimatorRegulator EuclideanDistance EulerE EulerGamma EulerianGraphQ EulerPhi Evaluatable Evaluate Evaluated EvaluatePacket EvaluationCell EvaluationCompletionAction EvaluationElements EvaluationMode EvaluationMonitor EvaluationNotebook EvaluationObject EvaluationOrder Evaluator EvaluatorNames EvenQ EventData EventEvaluator EventHandler EventHandlerTag EventLabels ExactBlackmanWindow ExactNumberQ ExactRootIsolation ExampleData Except ExcludedForms ExcludePods Exclusions ExclusionsStyle Exists Exit ExitDialog Exp Expand ExpandAll ExpandDenominator ExpandFileName ExpandNumerator Expectation ExpectationE ExpectedValue ExpGammaDistribution ExpIntegralE ExpIntegralEi Exponent ExponentFunction ExponentialDistribution ExponentialFamily ExponentialGeneratingFunction ExponentialMovingAverage ExponentialPowerDistribution ExponentPosition ExponentStep Export ExportAutoReplacements ExportPacket ExportString Expression ExpressionCell ExpressionPacket ExpToTrig ExtendedGCD Extension ExtentElementFunction ExtentMarkers ExtentSize ExternalCall ExternalDataCharacterEncoding Extract ExtractArchive ExtremeValueDistribution FaceForm FaceGrids FaceGridsStyle Factor FactorComplete Factorial Factorial2 FactorialMoment FactorialMomentGeneratingFunction FactorialPower FactorInteger FactorList FactorSquareFree FactorSquareFreeList FactorTerms FactorTermsList Fail FailureDistribution False FARIMAProcess FEDisableConsolePrintPacket FeedbackSector FeedbackSectorStyle FeedbackType FEEnableConsolePrintPacket Fibonacci FieldHint FieldHintStyle FieldMasked FieldSize File FileBaseName FileByteCount FileDate FileExistsQ FileExtension FileFormat FileHash FileInformation FileName FileNameDepth FileNameDialogSettings FileNameDrop FileNameJoin FileNames FileNameSetter FileNameSplit FileNameTake FilePrint FileType FilledCurve FilledCurveBox Filling FillingStyle FillingTransform FilterRules FinancialBond FinancialData FinancialDerivative FinancialIndicator Find FindArgMax FindArgMin FindClique FindClusters FindCurvePath FindDistributionParameters FindDivisions FindEdgeCover FindEdgeCut FindEulerianCycle FindFaces FindFile FindFit FindGeneratingFunction FindGeoLocation FindGeometricTransform FindGraphCommunities FindGraphIsomorphism FindGraphPartition FindHamiltonianCycle FindIndependentEdgeSet FindIndependentVertexSet FindInstance FindIntegerNullVector FindKClan FindKClique FindKClub FindKPlex FindLibrary FindLinearRecurrence FindList FindMaximum FindMaximumFlow FindMaxValue FindMinimum FindMinimumCostFlow FindMinimumCut FindMinValue FindPermutation FindPostmanTour FindProcessParameters FindRoot FindSequenceFunction FindSettings FindShortestPath FindShortestTour FindThreshold FindVertexCover FindVertexCut Fine FinishDynamic FiniteAbelianGroupCount FiniteGroupCount FiniteGroupData First FirstPassageTimeDistribution FischerGroupFi22 FischerGroupFi23 FischerGroupFi24Prime FisherHypergeometricDistribution FisherRatioTest FisherZDistribution Fit FitAll FittedModel FixedPoint FixedPointList FlashSelection Flat Flatten FlattenAt FlatTopWindow FlipView Floor FlushPrintOutputPacket Fold FoldList Font FontColor FontFamily FontForm FontName FontOpacity FontPostScriptName FontProperties FontReencoding FontSize FontSlant FontSubstitutions FontTracking FontVariations FontWeight For ForAll Format FormatRules FormatType FormatTypeAutoConvert FormatValues FormBox FormBoxOptions FortranForm Forward ForwardBackward Fourier FourierCoefficient FourierCosCoefficient FourierCosSeries FourierCosTransform FourierDCT FourierDCTFilter FourierDCTMatrix FourierDST FourierDSTMatrix FourierMatrix FourierParameters FourierSequenceTransform FourierSeries FourierSinCoefficient FourierSinSeries FourierSinTransform FourierTransform FourierTrigSeries FractionalBrownianMotionProcess FractionalPart FractionBox FractionBoxOptions FractionLine Frame FrameBox FrameBoxOptions Framed FrameInset FrameLabel Frameless FrameMargins FrameStyle FrameTicks FrameTicksStyle FRatioDistribution FrechetDistribution FreeQ FrequencySamplingFilterKernel FresnelC FresnelS Friday FrobeniusNumber FrobeniusSolve FromCharacterCode FromCoefficientRules FromContinuedFraction FromDate FromDigits FromDMS Front FrontEndDynamicExpression FrontEndEventActions FrontEndExecute FrontEndObject FrontEndResource FrontEndResourceString FrontEndStackSize FrontEndToken FrontEndTokenExecute FrontEndValueCache FrontEndVersion FrontFaceColor FrontFaceOpacity Full FullAxes FullDefinition FullForm FullGraphics FullOptions FullSimplify Function FunctionExpand FunctionInterpolation FunctionSpace FussellVeselyImportance GaborFilter GaborMatrix GaborWavelet GainMargins GainPhaseMargins Gamma GammaDistribution GammaRegularized GapPenalty Gather GatherBy GaugeFaceElementFunction GaugeFaceStyle GaugeFrameElementFunction GaugeFrameSize GaugeFrameStyle GaugeLabels GaugeMarkers GaugeStyle GaussianFilter GaussianIntegers GaussianMatrix GaussianWindow GCD GegenbauerC General GeneralizedLinearModelFit GenerateConditions GeneratedCell GeneratedParameters GeneratingFunction Generic GenericCylindricalDecomposition GenomeData GenomeLookup GeodesicClosing GeodesicDilation GeodesicErosion GeodesicOpening GeoDestination GeodesyData GeoDirection GeoDistance GeoGridPosition GeometricBrownianMotionProcess GeometricDistribution GeometricMean GeometricMeanFilter GeometricTransformation GeometricTransformation3DBox GeometricTransformation3DBoxOptions GeometricTransformationBox GeometricTransformationBoxOptions GeoPosition GeoPositionENU GeoPositionXYZ GeoProjectionData GestureHandler GestureHandlerTag Get GetBoundingBoxSizePacket GetContext GetEnvironment GetFileName GetFrontEndOptionsDataPacket GetLinebreakInformationPacket GetMenusPacket GetPageBreakInformationPacket Glaisher GlobalClusteringCoefficient GlobalPreferences GlobalSession Glow GoldenRatio GompertzMakehamDistribution GoodmanKruskalGamma GoodmanKruskalGammaTest Goto Grad Gradient GradientFilter GradientOrientationFilter Graph GraphAssortativity GraphCenter GraphComplement GraphData GraphDensity GraphDiameter GraphDifference GraphDisjointUnion GraphDistance GraphDistanceMatrix GraphElementData GraphEmbedding GraphHighlight GraphHighlightStyle GraphHub Graphics Graphics3D Graphics3DBox Graphics3DBoxOptions GraphicsArray GraphicsBaseline GraphicsBox GraphicsBoxOptions GraphicsColor GraphicsColumn GraphicsComplex GraphicsComplex3DBox GraphicsComplex3DBoxOptions GraphicsComplexBox GraphicsComplexBoxOptions GraphicsContents GraphicsData GraphicsGrid GraphicsGridBox GraphicsGroup GraphicsGroup3DBox GraphicsGroup3DBoxOptions GraphicsGroupBox GraphicsGroupBoxOptions GraphicsGrouping GraphicsHighlightColor GraphicsRow GraphicsSpacing GraphicsStyle GraphIntersection GraphLayout GraphLinkEfficiency GraphPeriphery GraphPlot GraphPlot3D GraphPower GraphPropertyDistribution GraphQ GraphRadius GraphReciprocity GraphRoot GraphStyle GraphUnion Gray GrayLevel GreatCircleDistance Greater GreaterEqual GreaterEqualLess GreaterFullEqual GreaterGreater GreaterLess GreaterSlantEqual GreaterTilde Green Grid GridBaseline GridBox GridBoxAlignment GridBoxBackground GridBoxDividers GridBoxFrame GridBoxItemSize GridBoxItemStyle GridBoxOptions GridBoxSpacings GridCreationSettings GridDefaultElement GridElementStyleOptions GridFrame GridFrameMargins GridGraph GridLines GridLinesStyle GroebnerBasis GroupActionBase GroupCentralizer GroupElementFromWord GroupElementPosition GroupElementQ GroupElements GroupElementToWord GroupGenerators GroupMultiplicationTable GroupOrbits GroupOrder GroupPageBreakWithin GroupSetwiseStabilizer GroupStabilizer GroupStabilizerChain Gudermannian GumbelDistribution HaarWavelet HadamardMatrix HalfNormalDistribution HamiltonianGraphQ HammingDistance HammingWindow HankelH1 HankelH2 HankelMatrix HannPoissonWindow HannWindow HaradaNortonGroupHN HararyGraph HarmonicMean HarmonicMeanFilter HarmonicNumber Hash HashTable Haversine HazardFunction Head HeadCompose Heads HeavisideLambda HeavisidePi HeavisideTheta HeldGroupHe HeldPart HelpBrowserLookup HelpBrowserNotebook HelpBrowserSettings HermiteDecomposition HermiteH HermitianMatrixQ HessenbergDecomposition Hessian HexadecimalCharacter Hexahedron HexahedronBox HexahedronBoxOptions HiddenSurface HighlightGraph HighlightImage HighpassFilter HigmanSimsGroupHS HilbertFilter HilbertMatrix Histogram Histogram3D HistogramDistribution HistogramList HistogramTransform HistogramTransformInterpolation HitMissTransform HITSCentrality HodgeDual HoeffdingD HoeffdingDTest Hold HoldAll HoldAllComplete HoldComplete HoldFirst HoldForm HoldPattern HoldRest HolidayCalendar HomeDirectory HomePage Horizontal HorizontalForm HorizontalGauge HorizontalScrollPosition HornerForm HotellingTSquareDistribution HoytDistribution HTMLSave Hue HumpDownHump HumpEqual HurwitzLerchPhi HurwitzZeta HyperbolicDistribution HypercubeGraph HyperexponentialDistribution Hyperfactorial Hypergeometric0F1 Hypergeometric0F1Regularized Hypergeometric1F1 Hypergeometric1F1Regularized Hypergeometric2F1 Hypergeometric2F1Regularized HypergeometricDistribution HypergeometricPFQ HypergeometricPFQRegularized HypergeometricU Hyperlink HyperlinkCreationSettings Hyphenation HyphenationOptions HypoexponentialDistribution HypothesisTestData I Identity IdentityMatrix If IgnoreCase Im Image Image3D Image3DSlices ImageAccumulate ImageAdd ImageAdjust ImageAlign ImageApply ImageAspectRatio ImageAssemble ImageCache ImageCacheValid ImageCapture ImageChannels ImageClip ImageColorSpace ImageCompose ImageConvolve ImageCooccurrence ImageCorners ImageCorrelate ImageCorrespondingPoints ImageCrop ImageData ImageDataPacket ImageDeconvolve ImageDemosaic ImageDifference ImageDimensions ImageDistance ImageEffect ImageFeatureTrack ImageFileApply ImageFileFilter ImageFileScan ImageFilter ImageForestingComponents ImageForwardTransformation ImageHistogram ImageKeypoints ImageLevels ImageLines ImageMargins ImageMarkers ImageMeasurements ImageMultiply ImageOffset ImagePad ImagePadding ImagePartition ImagePeriodogram ImagePerspectiveTransformation ImageQ ImageRangeCache ImageReflect ImageRegion ImageResize ImageResolution ImageRotate ImageRotated ImageScaled ImageScan ImageSize ImageSizeAction ImageSizeCache ImageSizeMultipliers ImageSizeRaw ImageSubtract ImageTake ImageTransformation ImageTrim ImageType ImageValue ImageValuePositions Implies Import ImportAutoReplacements ImportString ImprovementImportance In IncidenceGraph IncidenceList IncidenceMatrix IncludeConstantBasis IncludeFileExtension IncludePods IncludeSingularTerm Increment Indent IndentingNewlineSpacings IndentMaxFraction IndependenceTest IndependentEdgeSetQ IndependentUnit IndependentVertexSetQ Indeterminate IndexCreationOptions Indexed IndexGraph IndexTag Inequality InexactNumberQ InexactNumbers Infinity Infix Information Inherited InheritScope Initialization InitializationCell InitializationCellEvaluation InitializationCellWarning InlineCounterAssignments InlineCounterIncrements InlineRules Inner Inpaint Input InputAliases InputAssumptions InputAutoReplacements InputField InputFieldBox InputFieldBoxOptions InputForm InputGrouping InputNamePacket InputNotebook InputPacket InputSettings InputStream InputString InputStringPacket InputToBoxFormPacket Insert InsertionPointObject InsertResults Inset Inset3DBox Inset3DBoxOptions InsetBox InsetBoxOptions Install InstallService InString Integer IntegerDigits IntegerExponent IntegerLength IntegerPart IntegerPartitions IntegerQ Integers IntegerString Integral Integrate Interactive InteractiveTradingChart Interlaced Interleaving InternallyBalancedDecomposition InterpolatingFunction InterpolatingPolynomial Interpolation InterpolationOrder InterpolationPoints InterpolationPrecision Interpretation InterpretationBox InterpretationBoxOptions InterpretationFunction InterpretTemplate InterquartileRange Interrupt InterruptSettings Intersection Interval IntervalIntersection IntervalMemberQ IntervalUnion Inverse InverseBetaRegularized InverseCDF InverseChiSquareDistribution InverseContinuousWaveletTransform InverseDistanceTransform InverseEllipticNomeQ InverseErf InverseErfc InverseFourier InverseFourierCosTransform InverseFourierSequenceTransform InverseFourierSinTransform InverseFourierTransform InverseFunction InverseFunctions InverseGammaDistribution InverseGammaRegularized InverseGaussianDistribution InverseGudermannian InverseHaversine InverseJacobiCD InverseJacobiCN InverseJacobiCS InverseJacobiDC InverseJacobiDN InverseJacobiDS InverseJacobiNC InverseJacobiND InverseJacobiNS InverseJacobiSC InverseJacobiSD InverseJacobiSN InverseLaplaceTransform InversePermutation InverseRadon InverseSeries InverseSurvivalFunction InverseWaveletTransform InverseWeierstrassP InverseZTransform Invisible InvisibleApplication InvisibleTimes IrreduciblePolynomialQ IsolatingInterval IsomorphicGraphQ IsotopeData Italic Item ItemBox ItemBoxOptions ItemSize ItemStyle ItoProcess JaccardDissimilarity JacobiAmplitude Jacobian JacobiCD JacobiCN JacobiCS JacobiDC JacobiDN JacobiDS JacobiNC JacobiND JacobiNS JacobiP JacobiSC JacobiSD JacobiSN JacobiSymbol JacobiZeta JankoGroupJ1 JankoGroupJ2 JankoGroupJ3 JankoGroupJ4 JarqueBeraALMTest JohnsonDistribution Join Joined JoinedCurve JoinedCurveBox JoinForm JordanDecomposition JordanModelDecomposition K KagiChart KaiserBesselWindow KaiserWindow KalmanEstimator KalmanFilter KarhunenLoeveDecomposition KaryTree KatzCentrality KCoreComponents KDistribution KelvinBei KelvinBer KelvinKei KelvinKer KendallTau KendallTauTest KernelExecute KernelMixtureDistribution KernelObject Kernels Ket Khinchin KirchhoffGraph KirchhoffMatrix KleinInvariantJ KnightTourGraph KnotData KnownUnitQ KolmogorovSmirnovTest KroneckerDelta KroneckerModelDecomposition KroneckerProduct KroneckerSymbol KuiperTest KumaraswamyDistribution Kurtosis KuwaharaFilter Label Labeled LabeledSlider LabelingFunction LabelStyle LaguerreL LambdaComponents LambertW LanczosWindow LandauDistribution Language LanguageCategory LaplaceDistribution LaplaceTransform Laplacian LaplacianFilter LaplacianGaussianFilter Large Larger Last Latitude LatitudeLongitude LatticeData LatticeReduce Launch LaunchKernels LayeredGraphPlot LayerSizeFunction LayoutInformation LCM LeafCount LeapYearQ LeastSquares LeastSquaresFilterKernel Left LeftArrow LeftArrowBar LeftArrowRightArrow LeftDownTeeVector LeftDownVector LeftDownVectorBar LeftRightArrow LeftRightVector LeftTee LeftTeeArrow LeftTeeVector LeftTriangle LeftTriangleBar LeftTriangleEqual LeftUpDownVector LeftUpTeeVector LeftUpVector LeftUpVectorBar LeftVector LeftVectorBar LegendAppearance Legended LegendFunction LegendLabel LegendLayout LegendMargins LegendMarkers LegendMarkerSize LegendreP LegendreQ LegendreType Length LengthWhile LerchPhi Less LessEqual LessEqualGreater LessFullEqual LessGreater LessLess LessSlantEqual LessTilde LetterCharacter LetterQ Level LeveneTest LeviCivitaTensor LevyDistribution Lexicographic LibraryFunction LibraryFunctionError LibraryFunctionInformation LibraryFunctionLoad LibraryFunctionUnload LibraryLoad LibraryUnload LicenseID LiftingFilterData LiftingWaveletTransform LightBlue LightBrown LightCyan Lighter LightGray LightGreen Lighting LightingAngle LightMagenta LightOrange LightPink LightPurple LightRed LightSources LightYellow Likelihood Limit LimitsPositioning LimitsPositioningTokens LindleyDistribution Line Line3DBox LinearFilter LinearFractionalTransform LinearModelFit LinearOffsetFunction LinearProgramming LinearRecurrence LinearSolve LinearSolveFunction LineBox LineBreak LinebreakAdjustments LineBreakChart LineBreakWithin LineColor LineForm LineGraph LineIndent LineIndentMaxFraction LineIntegralConvolutionPlot LineIntegralConvolutionScale LineLegend LineOpacity LineSpacing LineWrapParts LinkActivate LinkClose LinkConnect LinkConnectedQ LinkCreate LinkError LinkFlush LinkFunction LinkHost LinkInterrupt LinkLaunch LinkMode LinkObject LinkOpen LinkOptions LinkPatterns LinkProtocol LinkRead LinkReadHeld LinkReadyQ Links LinkWrite LinkWriteHeld LiouvilleLambda List Listable ListAnimate ListContourPlot ListContourPlot3D ListConvolve ListCorrelate ListCurvePathPlot ListDeconvolve ListDensityPlot Listen ListFourierSequenceTransform ListInterpolation ListLineIntegralConvolutionPlot ListLinePlot ListLogLinearPlot ListLogLogPlot ListLogPlot ListPicker ListPickerBox ListPickerBoxBackground ListPickerBoxOptions ListPlay ListPlot ListPlot3D ListPointPlot3D ListPolarPlot ListQ ListStreamDensityPlot ListStreamPlot ListSurfacePlot3D ListVectorDensityPlot ListVectorPlot ListVectorPlot3D ListZTransform Literal LiteralSearch LocalClusteringCoefficient LocalizeVariables LocationEquivalenceTest LocationTest Locator LocatorAutoCreate LocatorBox LocatorBoxOptions LocatorCentering LocatorPane LocatorPaneBox LocatorPaneBoxOptions LocatorRegion Locked Log Log10 Log2 LogBarnesG LogGamma LogGammaDistribution LogicalExpand LogIntegral LogisticDistribution LogitModelFit LogLikelihood LogLinearPlot LogLogisticDistribution LogLogPlot LogMultinormalDistribution LogNormalDistribution LogPlot LogRankTest LogSeriesDistribution LongEqual Longest LongestAscendingSequence LongestCommonSequence LongestCommonSequencePositions LongestCommonSubsequence LongestCommonSubsequencePositions LongestMatch LongForm Longitude LongLeftArrow LongLeftRightArrow LongRightArrow Loopback LoopFreeGraphQ LowerCaseQ LowerLeftArrow LowerRightArrow LowerTriangularize LowpassFilter LQEstimatorGains LQGRegulator LQOutputRegulatorGains LQRegulatorGains LUBackSubstitution LucasL LuccioSamiComponents LUDecomposition LyapunovSolve LyonsGroupLy MachineID MachineName MachineNumberQ MachinePrecision MacintoshSystemPageSetup Magenta Magnification Magnify MainSolve MaintainDynamicCaches Majority MakeBoxes MakeExpression MakeRules MangoldtLambda ManhattanDistance Manipulate Manipulator MannWhitneyTest MantissaExponent Manual Map MapAll MapAt MapIndexed MAProcess MapThread MarcumQ MardiaCombinedTest MardiaKurtosisTest MardiaSkewnessTest MarginalDistribution MarkovProcessProperties Masking MatchingDissimilarity MatchLocalNameQ MatchLocalNames MatchQ Material MathematicaNotation MathieuC MathieuCharacteristicA MathieuCharacteristicB MathieuCharacteristicExponent MathieuCPrime MathieuGroupM11 MathieuGroupM12 MathieuGroupM22 MathieuGroupM23 MathieuGroupM24 MathieuS MathieuSPrime MathMLForm MathMLText Matrices MatrixExp MatrixForm MatrixFunction MatrixLog MatrixPlot MatrixPower MatrixQ MatrixRank Max MaxBend MaxDetect MaxExtraBandwidths MaxExtraConditions MaxFeatures MaxFilter Maximize MaxIterations MaxMemoryUsed MaxMixtureKernels MaxPlotPoints MaxPoints MaxRecursion MaxStableDistribution MaxStepFraction MaxSteps MaxStepSize MaxValue MaxwellDistribution McLaughlinGroupMcL Mean MeanClusteringCoefficient MeanDegreeConnectivity MeanDeviation MeanFilter MeanGraphDistance MeanNeighborDegree MeanShift MeanShiftFilter Median MedianDeviation MedianFilter Medium MeijerG MeixnerDistribution MemberQ MemoryConstrained MemoryInUse Menu MenuAppearance MenuCommandKey MenuEvaluator MenuItem MenuPacket MenuSortingValue MenuStyle MenuView MergeDifferences Mesh MeshFunctions MeshRange MeshShading MeshStyle Message MessageDialog MessageList MessageName MessageOptions MessagePacket Messages MessagesNotebook MetaCharacters MetaInformation Method MethodOptions MexicanHatWavelet MeyerWavelet Min MinDetect MinFilter MinimalPolynomial MinimalStateSpaceModel Minimize Minors MinRecursion MinSize MinStableDistribution Minus MinusPlus MinValue Missing MissingDataMethod MittagLefflerE MixedRadix MixedRadixQuantity MixtureDistribution Mod Modal Mode Modular ModularLambda Module Modulus MoebiusMu Moment Momentary MomentConvert MomentEvaluate MomentGeneratingFunction Monday Monitor MonomialList MonomialOrder MonsterGroupM MorletWavelet MorphologicalBinarize MorphologicalBranchPoints MorphologicalComponents MorphologicalEulerNumber MorphologicalGraph MorphologicalPerimeter MorphologicalTransform Most MouseAnnotation MouseAppearance MouseAppearanceTag MouseButtons Mouseover MousePointerNote MousePosition MovingAverage MovingMedian MoyalDistribution MultiedgeStyle MultilaunchWarning MultiLetterItalics MultiLetterStyle MultilineFunction Multinomial MultinomialDistribution MultinormalDistribution MultiplicativeOrder Multiplicity Multiselection MultivariateHypergeometricDistribution MultivariatePoissonDistribution MultivariateTDistribution N NakagamiDistribution NameQ Names NamespaceBox Nand NArgMax NArgMin NBernoulliB NCache NDSolve NDSolveValue Nearest NearestFunction NeedCurrentFrontEndPackagePacket NeedCurrentFrontEndSymbolsPacket NeedlemanWunschSimilarity Needs Negative NegativeBinomialDistribution NegativeMultinomialDistribution NeighborhoodGraph Nest NestedGreaterGreater NestedLessLess NestedScriptRules NestList NestWhile NestWhileList NevilleThetaC NevilleThetaD NevilleThetaN NevilleThetaS NewPrimitiveStyle NExpectation Next NextPrime NHoldAll NHoldFirst NHoldRest NicholsGridLines NicholsPlot NIntegrate NMaximize NMaxValue NMinimize NMinValue NominalVariables NonAssociative NoncentralBetaDistribution NoncentralChiSquareDistribution NoncentralFRatioDistribution NoncentralStudentTDistribution NonCommutativeMultiply NonConstants None NonlinearModelFit NonlocalMeansFilter NonNegative NonPositive Nor NorlundB Norm Normal NormalDistribution NormalGrouping Normalize NormalizedSquaredEuclideanDistance NormalsFunction NormFunction Not NotCongruent NotCupCap NotDoubleVerticalBar Notebook NotebookApply NotebookAutoSave NotebookClose NotebookConvertSettings NotebookCreate NotebookCreateReturnObject NotebookDefault NotebookDelete NotebookDirectory NotebookDynamicExpression NotebookEvaluate NotebookEventActions NotebookFileName NotebookFind NotebookFindReturnObject NotebookGet NotebookGetLayoutInformationPacket NotebookGetMisspellingsPacket NotebookInformation NotebookInterfaceObject NotebookLocate NotebookObject NotebookOpen NotebookOpenReturnObject NotebookPath NotebookPrint NotebookPut NotebookPutReturnObject NotebookRead NotebookResetGeneratedCells Notebooks NotebookSave NotebookSaveAs NotebookSelection NotebookSetupLayoutInformationPacket NotebooksMenu NotebookWrite NotElement NotEqualTilde NotExists NotGreater NotGreaterEqual NotGreaterFullEqual NotGreaterGreater NotGreaterLess NotGreaterSlantEqual NotGreaterTilde NotHumpDownHump NotHumpEqual NotLeftTriangle NotLeftTriangleBar NotLeftTriangleEqual NotLess NotLessEqual NotLessFullEqual NotLessGreater NotLessLess NotLessSlantEqual NotLessTilde NotNestedGreaterGreater NotNestedLessLess NotPrecedes NotPrecedesEqual NotPrecedesSlantEqual NotPrecedesTilde NotReverseElement NotRightTriangle NotRightTriangleBar NotRightTriangleEqual NotSquareSubset NotSquareSubsetEqual NotSquareSuperset NotSquareSupersetEqual NotSubset NotSubsetEqual NotSucceeds NotSucceedsEqual NotSucceedsSlantEqual NotSucceedsTilde NotSuperset NotSupersetEqual NotTilde NotTildeEqual NotTildeFullEqual NotTildeTilde NotVerticalBar NProbability NProduct NProductFactors NRoots NSolve NSum NSumTerms Null NullRecords NullSpace NullWords Number NumberFieldClassNumber NumberFieldDiscriminant NumberFieldFundamentalUnits NumberFieldIntegralBasis NumberFieldNormRepresentatives NumberFieldRegulator NumberFieldRootsOfUnity NumberFieldSignature NumberForm NumberFormat NumberMarks NumberMultiplier NumberPadding NumberPoint NumberQ NumberSeparator NumberSigns NumberString Numerator NumericFunction NumericQ NuttallWindow NValues NyquistGridLines NyquistPlot O ObservabilityGramian ObservabilityMatrix ObservableDecomposition ObservableModelQ OddQ Off Offset OLEData On ONanGroupON OneIdentity Opacity Open OpenAppend Opener OpenerBox OpenerBoxOptions OpenerView OpenFunctionInspectorPacket Opening OpenRead OpenSpecialOptions OpenTemporary OpenWrite Operate OperatingSystem OptimumFlowData Optional OptionInspectorSettings OptionQ Options OptionsPacket OptionsPattern OptionValue OptionValueBox OptionValueBoxOptions Or Orange Order OrderDistribution OrderedQ Ordering Orderless OrnsteinUhlenbeckProcess Orthogonalize Out Outer OutputAutoOverwrite OutputControllabilityMatrix OutputControllableModelQ OutputForm OutputFormData OutputGrouping OutputMathEditExpression OutputNamePacket OutputResponse OutputSizeLimit OutputStream Over OverBar OverDot Overflow OverHat Overlaps Overlay OverlayBox OverlayBoxOptions Overscript OverscriptBox OverscriptBoxOptions OverTilde OverVector OwenT OwnValues PackingMethod PaddedForm Padding PadeApproximant PadLeft PadRight PageBreakAbove PageBreakBelow PageBreakWithin PageFooterLines PageFooters PageHeaderLines PageHeaders PageHeight PageRankCentrality PageWidth PairedBarChart PairedHistogram PairedSmoothHistogram PairedTTest PairedZTest PaletteNotebook PalettePath Pane PaneBox PaneBoxOptions Panel PanelBox PanelBoxOptions Paneled PaneSelector PaneSelectorBox PaneSelectorBoxOptions PaperWidth ParabolicCylinderD ParagraphIndent ParagraphSpacing ParallelArray ParallelCombine ParallelDo ParallelEvaluate Parallelization Parallelize ParallelMap ParallelNeeds ParallelProduct ParallelSubmit ParallelSum ParallelTable ParallelTry Parameter ParameterEstimator ParameterMixtureDistribution ParameterVariables ParametricFunction ParametricNDSolve ParametricNDSolveValue ParametricPlot ParametricPlot3D ParentConnect ParentDirectory ParentForm Parenthesize ParentList ParetoDistribution Part PartialCorrelationFunction PartialD ParticleData Partition PartitionsP PartitionsQ ParzenWindow PascalDistribution PassEventsDown PassEventsUp Paste PasteBoxFormInlineCells PasteButton Path PathGraph PathGraphQ Pattern PatternSequence PatternTest PauliMatrix PaulWavelet Pause PausedTime PDF PearsonChiSquareTest PearsonCorrelationTest PearsonDistribution PerformanceGoal PeriodicInterpolation Periodogram PeriodogramArray PermutationCycles PermutationCyclesQ PermutationGroup PermutationLength PermutationList PermutationListQ PermutationMax PermutationMin PermutationOrder PermutationPower PermutationProduct PermutationReplace Permutations PermutationSupport Permute PeronaMalikFilter Perpendicular PERTDistribution PetersenGraph PhaseMargins Pi Pick PIDData PIDDerivativeFilter PIDFeedforward PIDTune Piecewise PiecewiseExpand PieChart PieChart3D PillaiTrace PillaiTraceTest Pink Pivoting PixelConstrained PixelValue PixelValuePositions Placed Placeholder PlaceholderReplace Plain PlanarGraphQ Play PlayRange Plot Plot3D Plot3Matrix PlotDivision PlotJoined PlotLabel PlotLayout PlotLegends PlotMarkers PlotPoints PlotRange PlotRangeClipping PlotRangePadding PlotRegion PlotStyle Plus PlusMinus Pochhammer PodStates PodWidth Point Point3DBox PointBox PointFigureChart PointForm PointLegend PointSize PoissonConsulDistribution PoissonDistribution PoissonProcess PoissonWindow PolarAxes PolarAxesOrigin PolarGridLines PolarPlot PolarTicks PoleZeroMarkers PolyaAeppliDistribution PolyGamma Polygon Polygon3DBox Polygon3DBoxOptions PolygonBox PolygonBoxOptions PolygonHoleScale PolygonIntersections PolygonScale PolyhedronData PolyLog PolynomialExtendedGCD PolynomialForm PolynomialGCD PolynomialLCM PolynomialMod PolynomialQ PolynomialQuotient PolynomialQuotientRemainder PolynomialReduce PolynomialRemainder Polynomials PopupMenu PopupMenuBox PopupMenuBoxOptions PopupView PopupWindow Position Positive PositiveDefiniteMatrixQ PossibleZeroQ Postfix PostScript Power PowerDistribution PowerExpand PowerMod PowerModList PowerSpectralDensity PowersRepresentations PowerSymmetricPolynomial Precedence PrecedenceForm Precedes PrecedesEqual PrecedesSlantEqual PrecedesTilde Precision PrecisionGoal PreDecrement PredictionRoot PreemptProtect PreferencesPath Prefix PreIncrement Prepend PrependTo PreserveImageOptions Previous PriceGraphDistribution PrimaryPlaceholder Prime PrimeNu PrimeOmega PrimePi PrimePowerQ PrimeQ Primes PrimeZetaP PrimitiveRoot PrincipalComponents PrincipalValue Print PrintAction PrintForm PrintingCopies PrintingOptions PrintingPageRange PrintingStartingPageNumber PrintingStyleEnvironment PrintPrecision PrintTemporary Prism PrismBox PrismBoxOptions PrivateCellOptions PrivateEvaluationOptions PrivateFontOptions PrivateFrontEndOptions PrivateNotebookOptions PrivatePaths Probability ProbabilityDistribution ProbabilityPlot ProbabilityPr ProbabilityScalePlot ProbitModelFit ProcessEstimator ProcessParameterAssumptions ProcessParameterQ ProcessStateDomain ProcessTimeDomain Product ProductDistribution ProductLog ProgressIndicator ProgressIndicatorBox ProgressIndicatorBoxOptions Projection Prolog PromptForm Properties Property PropertyList PropertyValue Proportion Proportional Protect Protected ProteinData Pruning PseudoInverse Purple Put PutAppend Pyramid PyramidBox PyramidBoxOptions QBinomial QFactorial QGamma QHypergeometricPFQ QPochhammer QPolyGamma QRDecomposition QuadraticIrrationalQ Quantile QuantilePlot Quantity QuantityForm QuantityMagnitude QuantityQ QuantityUnit Quartics QuartileDeviation Quartiles QuartileSkewness QueueingNetworkProcess QueueingProcess QueueProperties Quiet Quit Quotient QuotientRemainder RadialityCentrality RadicalBox RadicalBoxOptions RadioButton RadioButtonBar RadioButtonBox RadioButtonBoxOptions Radon RamanujanTau RamanujanTauL RamanujanTauTheta RamanujanTauZ Random RandomChoice RandomComplex RandomFunction RandomGraph RandomImage RandomInteger RandomPermutation RandomPrime RandomReal RandomSample RandomSeed RandomVariate RandomWalkProcess Range RangeFilter RangeSpecification RankedMax RankedMin Raster Raster3D Raster3DBox Raster3DBoxOptions RasterArray RasterBox RasterBoxOptions Rasterize RasterSize Rational RationalFunctions Rationalize Rationals Ratios Raw RawArray RawBoxes RawData RawMedium RayleighDistribution Re Read ReadList ReadProtected Real RealBlockDiagonalForm RealDigits RealExponent Reals Reap Record RecordLists RecordSeparators Rectangle RectangleBox RectangleBoxOptions RectangleChart RectangleChart3D RecurrenceFilter RecurrenceTable RecurringDigitsForm Red Reduce RefBox ReferenceLineStyle ReferenceMarkers ReferenceMarkerStyle Refine ReflectionMatrix ReflectionTransform Refresh RefreshRate RegionBinarize RegionFunction RegionPlot RegionPlot3D RegularExpression Regularization Reinstall Release ReleaseHold ReliabilityDistribution ReliefImage ReliefPlot Remove RemoveAlphaChannel RemoveAsynchronousTask Removed RemoveInputStreamMethod RemoveOutputStreamMethod RemoveProperty RemoveScheduledTask RenameDirectory RenameFile RenderAll RenderingOptions RenewalProcess RenkoChart Repeated RepeatedNull RepeatedString Replace ReplaceAll ReplaceHeldPart ReplaceImageValue ReplaceList ReplacePart ReplacePixelValue ReplaceRepeated Resampling Rescale RescalingTransform ResetDirectory ResetMenusPacket ResetScheduledTask Residue Resolve Rest Resultant ResumePacket Return ReturnExpressionPacket ReturnInputFormPacket ReturnPacket ReturnTextPacket Reverse ReverseBiorthogonalSplineWavelet ReverseElement ReverseEquilibrium ReverseGraph ReverseUpEquilibrium RevolutionAxis RevolutionPlot3D RGBColor RiccatiSolve RiceDistribution RidgeFilter RiemannR RiemannSiegelTheta RiemannSiegelZ Riffle Right RightArrow RightArrowBar RightArrowLeftArrow RightCosetRepresentative RightDownTeeVector RightDownVector RightDownVectorBar RightTee RightTeeArrow RightTeeVector RightTriangle RightTriangleBar RightTriangleEqual RightUpDownVector RightUpTeeVector RightUpVector RightUpVectorBar RightVector RightVectorBar RiskAchievementImportance RiskReductionImportance RogersTanimotoDissimilarity Root RootApproximant RootIntervals RootLocusPlot RootMeanSquare RootOfUnityQ RootReduce Roots RootSum Rotate RotateLabel RotateLeft RotateRight RotationAction RotationBox RotationBoxOptions RotationMatrix RotationTransform Round RoundImplies RoundingRadius Row RowAlignments RowBackgrounds RowBox RowHeights RowLines RowMinHeight RowReduce RowsEqual RowSpacings RSolve RudvalisGroupRu Rule RuleCondition RuleDelayed RuleForm RulerUnits Run RunScheduledTask RunThrough RuntimeAttributes RuntimeOptions RussellRaoDissimilarity SameQ SameTest SampleDepth SampledSoundFunction SampledSoundList SampleRate SamplingPeriod SARIMAProcess SARMAProcess SatisfiabilityCount SatisfiabilityInstances SatisfiableQ Saturday Save Saveable SaveAutoDelete SaveDefinitions SawtoothWave Scale Scaled ScaleDivisions ScaledMousePosition ScaleOrigin ScalePadding ScaleRanges ScaleRangeStyle ScalingFunctions ScalingMatrix ScalingTransform Scan ScheduledTaskActiveQ ScheduledTaskData ScheduledTaskObject ScheduledTasks SchurDecomposition ScientificForm ScreenRectangle ScreenStyleEnvironment ScriptBaselineShifts ScriptLevel ScriptMinSize ScriptRules ScriptSizeMultipliers Scrollbars ScrollingOptions ScrollPosition Sec Sech SechDistribution SectionGrouping SectorChart SectorChart3D SectorOrigin SectorSpacing SeedRandom Select Selectable SelectComponents SelectedCells SelectedNotebook Selection SelectionAnimate SelectionCell SelectionCellCreateCell SelectionCellDefaultStyle SelectionCellParentStyle SelectionCreateCell SelectionDebuggerTag SelectionDuplicateCell SelectionEvaluate SelectionEvaluateCreateCell SelectionMove SelectionPlaceholder SelectionSetStyle SelectWithContents SelfLoops SelfLoopStyle SemialgebraicComponentInstances SendMail Sequence SequenceAlignment SequenceForm SequenceHold SequenceLimit Series SeriesCoefficient SeriesData SessionTime Set SetAccuracy SetAlphaChannel SetAttributes Setbacks SetBoxFormNamesPacket SetDelayed SetDirectory SetEnvironment SetEvaluationNotebook SetFileDate SetFileLoadingContext SetNotebookStatusLine SetOptions SetOptionsPacket SetPrecision SetProperty SetSelectedNotebook SetSharedFunction SetSharedVariable SetSpeechParametersPacket SetStreamPosition SetSystemOptions Setter SetterBar SetterBox SetterBoxOptions Setting SetValue Shading Shallow ShannonWavelet ShapiroWilkTest Share Sharpen ShearingMatrix ShearingTransform ShenCastanMatrix Short ShortDownArrow Shortest ShortestMatch ShortestPathFunction ShortLeftArrow ShortRightArrow ShortUpArrow Show ShowAutoStyles ShowCellBracket ShowCellLabel ShowCellTags ShowClosedCellArea ShowContents ShowControls ShowCursorTracker ShowGroupOpenCloseIcon ShowGroupOpener ShowInvisibleCharacters ShowPageBreaks ShowPredictiveInterface ShowSelection ShowShortBoxForm ShowSpecialCharacters ShowStringCharacters ShowSyntaxStyles ShrinkingDelay ShrinkWrapBoundingBox SiegelTheta SiegelTukeyTest Sign Signature SignedRankTest SignificanceLevel SignPadding SignTest SimilarityRules SimpleGraph SimpleGraphQ Simplify Sin Sinc SinghMaddalaDistribution SingleEvaluation SingleLetterItalics SingleLetterStyle SingularValueDecomposition SingularValueList SingularValuePlot SingularValues Sinh SinhIntegral SinIntegral SixJSymbol Skeleton SkeletonTransform SkellamDistribution Skewness SkewNormalDistribution Skip SliceDistribution Slider Slider2D Slider2DBox Slider2DBoxOptions SliderBox SliderBoxOptions SlideView Slot SlotSequence Small SmallCircle Smaller SmithDelayCompensator SmithWatermanSimilarity SmoothDensityHistogram SmoothHistogram SmoothHistogram3D SmoothKernelDistribution SocialMediaData Socket SokalSneathDissimilarity Solve SolveAlways SolveDelayed Sort SortBy Sound SoundAndGraphics SoundNote SoundVolume Sow Space SpaceForm Spacer Spacings Span SpanAdjustments SpanCharacterRounding SpanFromAbove SpanFromBoth SpanFromLeft SpanLineThickness SpanMaxSize SpanMinSize SpanningCharacters SpanSymmetric SparseArray SpatialGraphDistribution Speak SpeakTextPacket SpearmanRankTest SpearmanRho Spectrogram SpectrogramArray Specularity SpellingCorrection SpellingDictionaries SpellingDictionariesPath SpellingOptions SpellingSuggestionsPacket Sphere SphereBox SphericalBesselJ SphericalBesselY SphericalHankelH1 SphericalHankelH2 SphericalHarmonicY SphericalPlot3D SphericalRegion SpheroidalEigenvalue SpheroidalJoiningFactor SpheroidalPS SpheroidalPSPrime SpheroidalQS SpheroidalQSPrime SpheroidalRadialFactor SpheroidalS1 SpheroidalS1Prime SpheroidalS2 SpheroidalS2Prime Splice SplicedDistribution SplineClosed SplineDegree SplineKnots SplineWeights Split SplitBy SpokenString Sqrt SqrtBox SqrtBoxOptions Square SquaredEuclideanDistance SquareFreeQ SquareIntersection SquaresR SquareSubset SquareSubsetEqual SquareSuperset SquareSupersetEqual SquareUnion SquareWave StabilityMargins StabilityMarginsStyle StableDistribution Stack StackBegin StackComplete StackInhibit StandardDeviation StandardDeviationFilter StandardForm Standardize StandbyDistribution Star StarGraph StartAsynchronousTask StartingStepSize StartOfLine StartOfString StartScheduledTask StartupSound StateDimensions StateFeedbackGains StateOutputEstimator StateResponse StateSpaceModel StateSpaceRealization StateSpaceTransform StationaryDistribution StationaryWaveletPacketTransform StationaryWaveletTransform StatusArea StatusCentrality StepMonitor StieltjesGamma StirlingS1 StirlingS2 StopAsynchronousTask StopScheduledTask StrataVariables StratonovichProcess StreamColorFunction StreamColorFunctionScaling StreamDensityPlot StreamPlot StreamPoints StreamPosition Streams StreamScale StreamStyle String StringBreak StringByteCount StringCases StringCount StringDrop StringExpression StringForm StringFormat StringFreeQ StringInsert StringJoin StringLength StringMatchQ StringPosition StringQ StringReplace StringReplaceList StringReplacePart StringReverse StringRotateLeft StringRotateRight StringSkeleton StringSplit StringTake StringToStream StringTrim StripBoxes StripOnInput StripWrapperBoxes StrokeForm StructuralImportance StructuredArray StructuredSelection StruveH StruveL Stub StudentTDistribution Style StyleBox StyleBoxAutoDelete StyleBoxOptions StyleData StyleDefinitions StyleForm StyleKeyMapping StyleMenuListing StyleNameDialogSettings StyleNames StylePrint StyleSheetPath Subfactorial Subgraph SubMinus SubPlus SubresultantPolynomialRemainders SubresultantPolynomials Subresultants Subscript SubscriptBox SubscriptBoxOptions Subscripted Subset SubsetEqual Subsets SubStar Subsuperscript SubsuperscriptBox SubsuperscriptBoxOptions Subtract SubtractFrom SubValues Succeeds SucceedsEqual SucceedsSlantEqual SucceedsTilde SuchThat Sum SumConvergence Sunday SuperDagger SuperMinus SuperPlus Superscript SuperscriptBox SuperscriptBoxOptions Superset SupersetEqual SuperStar Surd SurdForm SurfaceColor SurfaceGraphics SurvivalDistribution SurvivalFunction SurvivalModel SurvivalModelFit SuspendPacket SuzukiDistribution SuzukiGroupSuz SwatchLegend Switch Symbol SymbolName SymletWavelet Symmetric SymmetricGroup SymmetricMatrixQ SymmetricPolynomial SymmetricReduction Symmetrize SymmetrizedArray SymmetrizedArrayRules SymmetrizedDependentComponents SymmetrizedIndependentComponents SymmetrizedReplacePart SynchronousInitialization SynchronousUpdating Syntax SyntaxForm SyntaxInformation SyntaxLength SyntaxPacket SyntaxQ SystemDialogInput SystemException SystemHelpPath SystemInformation SystemInformationData SystemOpen SystemOptions SystemsModelDelay SystemsModelDelayApproximate SystemsModelDelete SystemsModelDimensions SystemsModelExtract SystemsModelFeedbackConnect SystemsModelLabels SystemsModelOrder SystemsModelParallelConnect SystemsModelSeriesConnect SystemsModelStateFeedbackConnect SystemStub Tab TabFilling Table TableAlignments TableDepth TableDirections TableForm TableHeadings TableSpacing TableView TableViewBox TabSpacings TabView TabViewBox TabViewBoxOptions TagBox TagBoxNote TagBoxOptions TaggingRules TagSet TagSetDelayed TagStyle TagUnset Take TakeWhile Tally Tan Tanh TargetFunctions TargetUnits TautologyQ TelegraphProcess TemplateBox TemplateBoxOptions TemplateSlotSequence TemporalData Temporary TemporaryVariable TensorContract TensorDimensions TensorExpand TensorProduct TensorQ TensorRank TensorReduce TensorSymmetry TensorTranspose TensorWedge Tetrahedron TetrahedronBox TetrahedronBoxOptions TeXForm TeXSave Text Text3DBox Text3DBoxOptions TextAlignment TextBand TextBoundingBox TextBox TextCell TextClipboardType TextData TextForm TextJustification TextLine TextPacket TextParagraph TextRecognize TextRendering TextStyle Texture TextureCoordinateFunction TextureCoordinateScaling Therefore ThermometerGauge Thick Thickness Thin Thinning ThisLink ThompsonGroupTh Thread ThreeJSymbol Threshold Through Throw Thumbnail Thursday Ticks TicksStyle Tilde TildeEqual TildeFullEqual TildeTilde TimeConstrained TimeConstraint Times TimesBy TimeSeriesForecast TimeSeriesInvertibility TimeUsed TimeValue TimeZone Timing Tiny TitleGrouping TitsGroupT ToBoxes ToCharacterCode ToColor ToContinuousTimeModel ToDate ToDiscreteTimeModel ToeplitzMatrix ToExpression ToFileName Together Toggle ToggleFalse Toggler TogglerBar TogglerBox TogglerBoxOptions ToHeldExpression ToInvertibleTimeSeries TokenWords Tolerance ToLowerCase ToNumberField TooBig Tooltip TooltipBox TooltipBoxOptions TooltipDelay TooltipStyle Top TopHatTransform TopologicalSort ToRadicals ToRules ToString Total TotalHeight TotalVariationFilter TotalWidth TouchscreenAutoZoom TouchscreenControlPlacement ToUpperCase Tr Trace TraceAbove TraceAction TraceBackward TraceDepth TraceDialog TraceForward TraceInternal TraceLevel TraceOff TraceOn TraceOriginal TracePrint TraceScan TrackedSymbols TradingChart TraditionalForm TraditionalFunctionNotation TraditionalNotation TraditionalOrder TransferFunctionCancel TransferFunctionExpand TransferFunctionFactor TransferFunctionModel TransferFunctionPoles TransferFunctionTransform TransferFunctionZeros TransformationFunction TransformationFunctions TransformationMatrix TransformedDistribution TransformedField Translate TranslationTransform TransparentColor Transpose TreeForm TreeGraph TreeGraphQ TreePlot TrendStyle TriangleWave TriangularDistribution Trig TrigExpand TrigFactor TrigFactorList Trigger TrigReduce TrigToExp TrimmedMean True TrueQ TruncatedDistribution TsallisQExponentialDistribution TsallisQGaussianDistribution TTest Tube TubeBezierCurveBox TubeBezierCurveBoxOptions TubeBox TubeBSplineCurveBox TubeBSplineCurveBoxOptions Tuesday TukeyLambdaDistribution TukeyWindow Tuples TuranGraph TuringMachine Transparent UnateQ Uncompress Undefined UnderBar Underflow Underlined Underoverscript UnderoverscriptBox UnderoverscriptBoxOptions Underscript UnderscriptBox UnderscriptBoxOptions UndirectedEdge UndirectedGraph UndirectedGraphQ UndocumentedTestFEParserPacket UndocumentedTestGetSelectionPacket Unequal Unevaluated UniformDistribution UniformGraphDistribution UniformSumDistribution Uninstall Union UnionPlus Unique UnitBox UnitConvert UnitDimensions Unitize UnitRootTest UnitSimplify UnitStep UnitTriangle UnitVector Unprotect UnsameQ UnsavedVariables Unset UnsetShared UntrackedVariables Up UpArrow UpArrowBar UpArrowDownArrow Update UpdateDynamicObjects UpdateDynamicObjectsSynchronous UpdateInterval UpDownArrow UpEquilibrium UpperCaseQ UpperLeftArrow UpperRightArrow UpperTriangularize Upsample UpSet UpSetDelayed UpTee UpTeeArrow UpValues URL URLFetch URLFetchAsynchronous URLSave URLSaveAsynchronous UseGraphicsRange Using UsingFrontEnd V2Get ValidationLength Value ValueBox ValueBoxOptions ValueForm ValueQ ValuesData Variables Variance VarianceEquivalenceTest VarianceEstimatorFunction VarianceGammaDistribution VarianceTest VectorAngle VectorColorFunction VectorColorFunctionScaling VectorDensityPlot VectorGlyphData VectorPlot VectorPlot3D VectorPoints VectorQ Vectors VectorScale VectorStyle Vee Verbatim Verbose VerboseConvertToPostScriptPacket VerifyConvergence VerifySolutions VerifyTestAssumptions Version VersionNumber VertexAdd VertexCapacity VertexColors VertexComponent VertexConnectivity VertexCoordinateRules VertexCoordinates VertexCorrelationSimilarity VertexCosineSimilarity VertexCount VertexCoverQ VertexDataCoordinates VertexDegree VertexDelete VertexDiceSimilarity VertexEccentricity VertexInComponent VertexInDegree VertexIndex VertexJaccardSimilarity VertexLabeling VertexLabels VertexLabelStyle VertexList VertexNormals VertexOutComponent VertexOutDegree VertexQ VertexRenderingFunction VertexReplace VertexShape VertexShapeFunction VertexSize VertexStyle VertexTextureCoordinates VertexWeight Vertical VerticalBar VerticalForm VerticalGauge VerticalSeparator VerticalSlider VerticalTilde ViewAngle ViewCenter ViewMatrix ViewPoint ViewPointSelectorSettings ViewPort ViewRange ViewVector ViewVertical VirtualGroupData Visible VisibleCell VoigtDistribution VonMisesDistribution WaitAll WaitAsynchronousTask WaitNext WaitUntil WakebyDistribution WalleniusHypergeometricDistribution WaringYuleDistribution WatershedComponents WatsonUSquareTest WattsStrogatzGraphDistribution WaveletBestBasis WaveletFilterCoefficients WaveletImagePlot WaveletListPlot WaveletMapIndexed WaveletMatrixPlot WaveletPhi WaveletPsi WaveletScale WaveletScalogram WaveletThreshold WeaklyConnectedComponents WeaklyConnectedGraphQ WeakStationarity WeatherData WeberE Wedge Wednesday WeibullDistribution WeierstrassHalfPeriods WeierstrassInvariants WeierstrassP WeierstrassPPrime WeierstrassSigma WeierstrassZeta WeightedAdjacencyGraph WeightedAdjacencyMatrix WeightedData WeightedGraphQ Weights WelchWindow WheelGraph WhenEvent Which While White Whitespace WhitespaceCharacter WhittakerM WhittakerW WienerFilter WienerProcess WignerD WignerSemicircleDistribution WilksW WilksWTest WindowClickSelect WindowElements WindowFloating WindowFrame WindowFrameElements WindowMargins WindowMovable WindowOpacity WindowSelected WindowSize WindowStatusArea WindowTitle WindowToolbars WindowWidth With WolframAlpha WolframAlphaDate WolframAlphaQuantity WolframAlphaResult Word WordBoundary WordCharacter WordData WordSearch WordSeparators WorkingPrecision Write WriteString Wronskian XMLElement XMLObject Xnor Xor Yellow YuleDissimilarity ZernikeR ZeroSymmetric ZeroTest ZeroWidthTimes Zeta ZetaZero ZipfDistribution ZTest ZTransform $Aborted $ActivationGroupID $ActivationKey $ActivationUserRegistered $AddOnsDirectory $AssertFunction $Assumptions $AsynchronousTask $BaseDirectory $BatchInput $BatchOutput $BoxForms $ByteOrdering $Canceled $CharacterEncoding $CharacterEncodings $CommandLine $CompilationTarget $ConditionHold $ConfiguredKernels $Context $ContextPath $ControlActiveSetting $CreationDate $CurrentLink $DateStringFormat $DefaultFont $DefaultFrontEnd $DefaultImagingDevice $DefaultPath $Display $DisplayFunction $DistributedContexts $DynamicEvaluation $Echo $Epilog $ExportFormats $Failed $FinancialDataSource $FormatType $FrontEnd $FrontEndSession $GeoLocation $HistoryLength $HomeDirectory $HTTPCookies $IgnoreEOF $ImagingDevices $ImportFormats $InitialDirectory $Input $InputFileName $InputStreamMethods $Inspector $InstallationDate $InstallationDirectory $InterfaceEnvironment $IterationLimit $KernelCount $KernelID $Language $LaunchDirectory $LibraryPath $LicenseExpirationDate $LicenseID $LicenseProcesses $LicenseServer $LicenseSubprocesses $LicenseType $Line $Linked $LinkSupported $LoadedFiles $MachineAddresses $MachineDomain $MachineDomains $MachineEpsilon $MachineID $MachineName $MachinePrecision $MachineType $MaxExtraPrecision $MaxLicenseProcesses $MaxLicenseSubprocesses $MaxMachineNumber $MaxNumber $MaxPiecewiseCases $MaxPrecision $MaxRootDegree $MessageGroups $MessageList $MessagePrePrint $Messages $MinMachineNumber $MinNumber $MinorReleaseNumber $MinPrecision $ModuleNumber $NetworkLicense $NewMessage $NewSymbol $Notebooks $NumberMarks $Off $OperatingSystem $Output $OutputForms $OutputSizeLimit $OutputStreamMethods $Packages $ParentLink $ParentProcessID $PasswordFile $PatchLevelID $Path $PathnameSeparator $PerformanceGoal $PipeSupported $Post $Pre $PreferencesDirectory $PrePrint $PreRead $PrintForms $PrintLiteral $ProcessID $ProcessorCount $ProcessorType $ProductInformation $ProgramName $RandomState $RecursionLimit $ReleaseNumber $RootDirectory $ScheduledTask $ScriptCommandLine $SessionID $SetParentLink $SharedFunctions $SharedVariables $SoundDisplay $SoundDisplayFunction $SuppressInputFormHeads $SynchronousEvaluation $SyntaxHandler $System $SystemCharacterEncoding $SystemID $SystemWordLength $TemporaryDirectory $TemporaryPrefix $TextStyle $TimedOut $TimeUnit $TimeZone $TopDirectory $TraceOff $TraceOn $TracePattern $TracePostAction $TracePreAction $Urgent $UserAddOnsDirectory $UserBaseDirectory $UserDocumentsDirectory $UserName $Version $VersionNumber",
		c: [{
			cN: "comment",
			b: /\(\*/,
			e: /\*\)/
		}, a.ASM, a.QSM, a.CNM, {
			b: /\{/,
			e: /\}/,
			i: /:/
		}]
	}
}), hljs.registerLanguage("ruby", function(a) {
	var b = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
		c = {
			keyword: "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
			literal: "true false nil"
		},
		d = {
			cN: "doctag",
			b: "@[A-Za-z]+"
		},
		e = {
			b: "#<",
			e: ">"
		},
		f = [a.C("#", "$", {
			c: [d]
		}), a.C("^\\=begin", "^\\=end", {
			c: [d],
			r: 10
		}), a.C("^__END__", "\\n$")],
		g = {
			cN: "subst",
			b: "#\\{",
			e: "}",
			k: c
		},
		h = {
			cN: "string",
			c: [a.BE, g],
			v: [{
				b: /'/,
				e: /'/
			}, {
				b: /"/,
				e: /"/
			}, {
				b: /`/,
				e: /`/
			}, {
				b: "%[qQwWx]?\\(",
				e: "\\)"
			}, {
				b: "%[qQwWx]?\\[",
				e: "\\]"
			}, {
				b: "%[qQwWx]?{",
				e: "}"
			}, {
				b: "%[qQwWx]?<",
				e: ">"
			}, {
				b: "%[qQwWx]?/",
				e: "/"
			}, {
				b: "%[qQwWx]?%",
				e: "%"
			}, {
				b: "%[qQwWx]?-",
				e: "-"
			}, {
				b: "%[qQwWx]?\\|",
				e: "\\|"
			}, {
				b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
			}, {
				b: /<<(-?)\w+$/,
				e: /^\s*\w+$/
			}]
		},
		i = {
			cN: "params",
			b: "\\(",
			e: "\\)",
			endsParent: !0,
			k: c
		},
		j = [h, e, {
			cN: "class",
			bK: "class module",
			e: "$|;",
			i: /=/,
			c: [a.inherit(a.TM, {
				b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
			}), {
				b: "<\\s*",
				c: [{
					b: "(" + a.IR + "::)?" + a.IR
				}]
			}].concat(f)
		}, {
			cN: "function",
			bK: "def",
			e: "$|;",
			c: [a.inherit(a.TM, {
				b: b
			}), i].concat(f)
		}, {
			b: a.IR + "::"
		}, {
			cN: "symbol",
			b: a.UIR + "(\\!|\\?)?:",
			r: 0
		}, {
			cN: "symbol",
			b: ":(?!\\s)",
			c: [h, {
				b: b
			}],
			r: 0
		}, {
			cN: "number",
			b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
			r: 0
		}, {
			b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
		}, {
			cN: "params",
			b: /\|/,
			e: /\|/,
			k: c
		}, {
			b: "(" + a.RSR + ")\\s*",
			c: [e, {
				cN: "regexp",
				c: [a.BE, g],
				i: /\n/,
				v: [{
					b: "/",
					e: "/[a-z]*"
				}, {
					b: "%r{",
					e: "}[a-z]*"
				}, {
					b: "%r\\(",
					e: "\\)[a-z]*"
				}, {
					b: "%r!",
					e: "![a-z]*"
				}, {
					b: "%r\\[",
					e: "\\][a-z]*"
				}]
			}].concat(f),
			r: 0
		}].concat(f);
	g.c = j, i.c = j;
	var k = "[>?]>",
		l = "[\\w#]+\\(\\w+\\):\\d+:\\d+>",
		m = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",
		n = [{
			b: /^\s*=>/,
			starts: {
				e: "$",
				c: j
			}
		}, {
			cN: "meta",
			b: "^(" + k + "|" + l + "|" + m + ")",
			starts: {
				e: "$",
				c: j
			}
		}];
	return {
		aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
		k: c,
		i: /\/\*/,
		c: f.concat(n).concat(j)
	}
}), hljs.registerLanguage("yaml", function(a) {
	var b = {
			literal: "{ } true false yes no Yes No True False null"
		},
		c = "^[ \\-]*",
		d = "[a-zA-Z_][\\w\\-]*",
		e = {
			cN: "attr",
			v: [{
				b: c + d + ":"
			}, {
				b: c + '"' + d + '":'
			}, {
				b: c + "'" + d + "':"
			}]
		},
		f = {
			cN: "template-variable",
			v: [{
				b: "{{",
				e: "}}"
			}, {
				b: "%{",
				e: "}"
			}]
		},
		g = {
			cN: "string",
			r: 0,
			v: [{
				b: /'/,
				e: /'/
			}, {
				b: /"/,
				e: /"/
			}],
			c: [a.BE, f]
		};
	return {
		cI: !0,
		aliases: ["yml", "YAML", "yaml"],
		c: [e, {
			cN: "meta",
			b: "^---s*$",
			r: 10
		}, {
			cN: "string",
			b: "[\\|>] *$",
			rE: !0,
			c: g.c,
			e: e.v[0].b
		}, {
			b: "<%[%=-]?",
			e: "[%-]?%>",
			sL: "ruby",
			eB: !0,
			eE: !0,
			r: 0
		}, {
			cN: "type",
			b: "!!" + a.UIR
		}, {
			cN: "meta",
			b: "&" + a.UIR + "$"
		}, {
			cN: "meta",
			b: "\\*" + a.UIR + "$"
		}, {
			cN: "bullet",
			b: "^ *-",
			r: 0
		}, g, a.HCM, a.CNM],
		k: b
	}
}), hljs.registerLanguage("tap", function(a) {
	return {
		cI: !0,
		c: [a.HCM, {
			cN: "meta",
			v: [{
				b: "^TAP version (\\d+)$"
			}, {
				b: "^1\\.\\.(\\d+)$"
			}]
		}, {
			b: "(s+)?---$",
			e: "\\.\\.\\.$",
			sL: "yaml",
			r: 0
		}, {
			cN: "number",
			b: " (\\d+) "
		}, {
			cN: "symbol",
			v: [{
				b: "^ok"
			}, {
				b: "^not ok"
			}]
		}]
	}
}), hljs.registerLanguage("gcode", function(a) {
	var b = "[A-Z_][A-Z0-9_.]*",
		c = "\\%",
		d = "IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT EQ LT GT NE GE LE OR XOR",
		e = {
			cN: "meta",
			b: "([O])([0-9]+)"
		},
		f = [a.CLCM, a.CBCM, a.C(/\(/, /\)/), a.inherit(a.CNM, {
			b: "([-+]?([0-9]*\\.?[0-9]+\\.?))|" + a.CNR
		}), a.inherit(a.ASM, {
			i: null
		}), a.inherit(a.QSM, {
			i: null
		}), {
			cN: "name",
			b: "([G])([0-9]+\\.?[0-9]?)"
		}, {
			cN: "name",
			b: "([M])([0-9]+\\.?[0-9]?)"
		}, {
			cN: "attr",
			b: "(VC|VS|#)",
			e: "(\\d+)"
		}, {
			cN: "attr",
			b: "(VZOFX|VZOFY|VZOFZ)"
		}, {
			cN: "built_in",
			b: "(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)",
			e: "([-+]?([0-9]*\\.?[0-9]+\\.?))(\\])"
		}, {
			cN: "symbol",
			v: [{
				b: "N",
				e: "\\d+",
				i: "\\W"
			}]
		}];
	return {
		aliases: ["nc"],
		cI: !0,
		l: b,
		k: d,
		c: [{
			cN: "meta",
			b: c
		}, e].concat(f)
	}
}), hljs.registerLanguage("scilab", function(a) {
	var b = [a.CNM, {
		cN: "string",
		b: "'|\"",
		e: "'|\"",
		c: [a.BE, {
			b: "''"
		}]
	}];
	return {
		aliases: ["sci"],
		l: /%?\w+/,
		k: {
			keyword: "abort break case clear catch continue do elseif else endfunction end for function global if pause return resume select try then while",
			literal: "%f %F %t %T %pi %eps %inf %nan %e %i %z %s",
			built_in: "abs and acos asin atan ceil cd chdir clearglobal cosh cos cumprod deff disp error exec execstr exists exp eye gettext floor fprintf fread fsolve imag isdef isempty isinfisnan isvector lasterror length load linspace list listfiles log10 log2 log max min msprintf mclose mopen ones or pathconvert poly printf prod pwd rand real round sinh sin size gsort sprintf sqrt strcat strcmps tring sum system tanh tan type typename warning zeros matrix"
		},
		i: '("|#|/\\*|\\s+/\\w+)',
		c: [{
			cN: "function",
			bK: "function",
			e: "$",
			c: [a.UTM, {
				cN: "params",
				b: "\\(",
				e: "\\)"
			}]
		}, {
			b: "[a-zA-Z_][a-zA-Z_0-9]*('+[\\.']*|[\\.']+)",
			e: "",
			r: 0
		}, {
			b: "\\[",
			e: "\\]'*[\\.']*",
			r: 0,
			c: b
		}, a.C("//", "$")].concat(b)
	}
}), hljs.registerLanguage("csp", function(a) {
	return {
		cI: !1,
		l: "[a-zA-Z][a-zA-Z0-9_-]*",
		k: {
			keyword: "base-uri child-src connect-src default-src font-src form-action frame-ancestors frame-src img-src media-src object-src plugin-types report-uri sandbox script-src style-src"
		},
		c: [{
			cN: "string",
			b: "'",
			e: "'"
		}, {
			cN: "attribute",
			b: "^Content",
			e: ":",
			eE: !0
		}]
	}
}), hljs.registerLanguage("capnproto", function(a) {
	return {
		aliases: ["capnp"],
		k: {
			keyword: "struct enum interface union group import using const annotation extends in of on as with from fixed",
			built_in: "Void Bool Int8 Int16 Int32 Int64 UInt8 UInt16 UInt32 UInt64 Float32 Float64 Text Data AnyPointer AnyStruct Capability List",
			literal: "true false"
		},
		c: [a.QSM, a.NM, a.HCM, {
			cN: "meta",
			b: /@0x[\w\d]{16};/,
			i: /\n/
		}, {
			cN: "symbol",
			b: /@\d+\b/
		}, {
			cN: "class",
			bK: "struct enum",
			e: /\{/,
			i: /\n/,
			c: [a.inherit(a.TM, {
				starts: {
					eW: !0,
					eE: !0
				}
			})]
		}, {
			cN: "class",
			bK: "interface",
			e: /\{/,
			i: /\n/,
			c: [a.inherit(a.TM, {
				starts: {
					eW: !0,
					eE: !0
				}
			})]
		}]
	}
}), hljs.registerLanguage("oxygene", function(a) {
	var b = "abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained",
		c = a.C("{", "}", {
			r: 0
		}),
		d = a.C("\\(\\*", "\\*\\)", {
			r: 10
		}),
		e = {
			cN: "string",
			b: "'",
			e: "'",
			c: [{
				b: "''"
			}]
		},
		f = {
			cN: "string",
			b: "(#\\d+)+"
		},
		g = {
			cN: "function",
			bK: "function constructor destructor procedure method",
			e: "[:;]",
			k: "function constructor|10 destructor|10 procedure|10 method|10",
			c: [a.TM, {
				cN: "params",
				b: "\\(",
				e: "\\)",
				k: b,
				c: [e, f]
			}, c, d]
		};
	return {
		cI: !0,
		l: /\.?\w+/,
		k: b,
		i: '("|\\$[G-Zg-z]|\\/\\*|</|=>|->)',
		c: [c, d, a.CLCM, e, f, a.NM, g, {
			cN: "class",
			b: "=\\bclass\\b",
			e: "end;",
			k: b,
			c: [e, f, c, d, a.CLCM, g]
		}]
	}
}), hljs.registerLanguage("mercury", function(a) {
	var b = {
			keyword: "module use_module import_module include_module end_module initialise mutable initialize finalize finalise interface implementation pred mode func type inst solver any_pred any_func is semidet det nondet multi erroneous failure cc_nondet cc_multi typeclass instance where pragma promise external trace atomic or_else require_complete_switch require_det require_semidet require_multi require_nondet require_cc_multi require_cc_nondet require_erroneous require_failure",
			meta: "inline no_inline type_spec source_file fact_table obsolete memo loop_check minimal_model terminates does_not_terminate check_termination promise_equivalent_clauses foreign_proc foreign_decl foreign_code foreign_type foreign_import_module foreign_export_enum foreign_export foreign_enum may_call_mercury will_not_call_mercury thread_safe not_thread_safe maybe_thread_safe promise_pure promise_semipure tabled_for_io local untrailed trailed attach_to_io_state can_pass_as_mercury_type stable will_not_throw_exception may_modify_trail will_not_modify_trail may_duplicate may_not_duplicate affects_liveness does_not_affect_liveness doesnt_affect_liveness no_sharing unknown_sharing sharing",
			built_in: "some all not if then else true fail false try catch catch_any semidet_true semidet_false semidet_fail impure_true impure semipure"
		},
		c = a.C("%", "$"),
		d = {
			cN: "number",
			b: "0'.\\|0[box][0-9a-fA-F]*"
		},
		e = a.inherit(a.ASM, {
			r: 0
		}),
		f = a.inherit(a.QSM, {
			r: 0
		}),
		g = {
			cN: "subst",
			b: "\\\\[abfnrtv]\\|\\\\x[0-9a-fA-F]*\\\\\\|%[-+# *.0-9]*[dioxXucsfeEgGp]",
			r: 0
		};
	f.c.push(g);
	var h = {
			cN: "built_in",
			v: [{
				b: "<=>"
			}, {
				b: "<=",
				r: 0
			}, {
				b: "=>",
				r: 0
			}, {
				b: "/\\\\"
			}, {
				b: "\\\\/"
			}]
		},
		i = {
			cN: "built_in",
			v: [{
				b: ":-\\|-->"
			}, {
				b: "=",
				r: 0
			}]
		};
	return {
		aliases: ["m", "moo"],
		k: b,
		c: [h, i, c, a.CBCM, d, a.NM, e, f, {
			b: /:-/
		}]
	}
}), hljs.registerLanguage("swift", function(a) {
	var b = {
			keyword: "__COLUMN__ __FILE__ __FUNCTION__ __LINE__ as as! as? associativity break case catch class continue convenience default defer deinit didSet do dynamic dynamicType else enum extension fallthrough false final for func get guard if import in indirect infix init inout internal is lazy left let mutating nil none nonmutating operator optional override postfix precedence prefix private protocol Protocol public repeat required rethrows return right self Self set static struct subscript super switch throw throws true try try! try? Type typealias unowned var weak where while willSet",
			literal: "true false nil",
			built_in: "abs advance alignof alignofValue anyGenerator assert assertionFailure bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal fatalError filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare map max maxElement min minElement numericCast overlaps partition posix precondition preconditionFailure print println quickSort readLine reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith stride strideof strideofValue swap toString transcode underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers withUnsafePointer withUnsafePointers withVaList zip"
		},
		c = {
			cN: "type",
			b: "\\b[A-Z][\\w']*",
			r: 0
		},
		d = a.C("/\\*", "\\*/", {
			c: ["self"]
		}),
		e = {
			cN: "subst",
			b: /\\\(/,
			e: "\\)",
			k: b,
			c: []
		},
		f = {
			cN: "number",
			b: "\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",
			r: 0
		},
		g = a.inherit(a.QSM, {
			c: [e, a.BE]
		});
	return e.c = [f], {
		k: b,
		c: [g, a.CLCM, d, c, f, {
			cN: "function",
			bK: "func",
			e: "{",
			eE: !0,
			c: [a.inherit(a.TM, {
				b: /[A-Za-z$_][0-9A-Za-z$_]*/
			}), {
				b: /</,
				e: />/
			}, {
				cN: "params",
				b: /\(/,
				e: /\)/,
				endsParent: !0,
				k: b,
				c: ["self", f, g, a.CBCM, {
					b: ":"
				}],
				i: /["']/
			}],
			i: /\[|%/
		}, {
			cN: "class",
			bK: "struct protocol class extension enum",
			k: b,
			e: "\\{",
			eE: !0,
			c: [a.inherit(a.TM, {
				b: /[A-Za-z$_][0-9A-Za-z$_]*/
			})]
		}, {
			cN: "meta",
			b: "(@warn_unused_result|@exported|@lazy|@noescape|@NSCopying|@NSManaged|@objc|@convention|@required|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix|@autoclosure|@testable|@available|@nonobjc|@NSApplicationMain|@UIApplicationMain)"
		}, {
			bK: "import",
			e: /$/,
			c: [a.CLCM, d]
		}]
	}
}), hljs.registerLanguage("javascript", function(a) {
	var b = "[A-Za-z$_][0-9A-Za-z$_]*",
		c = {
			keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
			literal: "true false null undefined NaN Infinity",
			built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
		},
		d = {
			cN: "number",
			v: [{
				b: "\\b(0[bB][01]+)"
			}, {
				b: "\\b(0[oO][0-7]+)"
			}, {
				b: a.CNR
			}],
			r: 0
		},
		e = {
			cN: "subst",
			b: "\\$\\{",
			e: "\\}",
			k: c,
			c: []
		},
		f = {
			cN: "string",
			b: "`",
			e: "`",
			c: [a.BE, e]
		};
	e.c = [a.ASM, a.QSM, f, d, a.RM];
	var g = e.c.concat([a.CBCM, a.CLCM]);
	return {
		aliases: ["js", "jsx"],
		k: c,
		c: [{
			cN: "meta",
			r: 10,
			b: /^\s*['"]use (strict|asm)['"]/
		}, {
			cN: "meta",
			b: /^#!/,
			e: /$/
		}, a.ASM, a.QSM, f, a.CLCM, a.CBCM, d, {
			b: /[{,]\s*/,
			r: 0,
			c: [{
				b: b + "\\s*:",
				rB: !0,
				r: 0,
				c: [{
					cN: "attr",
					b: b,
					r: 0
				}]
			}]
		}, {
			b: "(" + a.RSR + "|\\b(case|return|throw)\\b)\\s*",
			k: "return throw case",
			c: [a.CLCM, a.CBCM, a.RM, {
				cN: "function",
				b: "(\\(.*?\\)|" + b + ")\\s*=>",
				rB: !0,
				e: "\\s*=>",
				c: [{
					cN: "params",
					v: [{
						b: b
					}, {
						b: /\(\s*\)/
					}, {
						b: /\(/,
						e: /\)/,
						eB: !0,
						eE: !0,
						k: c,
						c: g
					}]
				}]
			}, {
				b: /</,
				e: /(\/\w+|\w+\/)>/,
				sL: "xml",
				c: [{
					b: /<\w+\s*\/>/,
					skip: !0
				}, {
					b: /<\w+/,
					e: /(\/\w+|\w+\/)>/,
					skip: !0,
					c: [{
						b: /<\w+\s*\/>/,
						skip: !0
					}, "self"]
				}]
			}],
			r: 0
		}, {
			cN: "function",
			bK: "function",
			e: /\{/,
			eE: !0,
			c: [a.inherit(a.TM, {
				b: b
			}), {
				cN: "params",
				b: /\(/,
				e: /\)/,
				eB: !0,
				eE: !0,
				c: g
			}],
			i: /\[|%/
		}, {
			b: /\$[(.]/
		}, a.METHOD_GUARD, {
			cN: "class",
			bK: "class",
			e: /[{;=]/,
			eE: !0,
			i: /[:"\[\]]/,
			c: [{
				bK: "extends"
			}, a.UTM]
		}, {
			bK: "constructor",
			e: /\{/,
			eE: !0
		}],
		i: /#(?!!)/
	}
}), hljs.registerLanguage("xml", function(a) {
	var b = "[A-Za-z0-9\\._:-]+",
		c = {
			eW: !0,
			i: /</,
			r: 0,
			c: [{
				cN: "attr",
				b: b,
				r: 0
			}, {
				b: /=\s*/,
				r: 0,
				c: [{
					cN: "string",
					endsParent: !0,
					v: [{
						b: /"/,
						e: /"/
					}, {
						b: /'/,
						e: /'/
					}, {
						b: /[^\s"'=<>`]+/
					}]
				}]
			}]
		};
	return {
		aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
		cI: !0,
		c: [{
			cN: "meta",
			b: "<!DOCTYPE",
			e: ">",
			r: 10,
			c: [{
				b: "\\[",
				e: "\\]"
			}]
		}, a.C("<!--", "-->", {
			r: 10
		}), {
			b: "<\\!\\[CDATA\\[",
			e: "\\]\\]>",
			r: 10
		}, {
			b: /<\?(php)?/,
			e: /\?>/,
			sL: "php",
			c: [{
				b: "/\\*",
				e: "\\*/",
				skip: !0
			}]
		}, {
			cN: "tag",
			b: "<style(?=\\s|>|$)",
			e: ">",
			k: {
				name: "style"
			},
			c: [c],
			starts: {
				e: "</style>",
				rE: !0,
				sL: ["css", "xml"]
			}
		}, {
			cN: "tag",
			b: "<script(?=\\s|>|$)",
			e: ">",
			k: {
				name: "script"
			},
			c: [c],
			starts: {
				e: "</script>",
				rE: !0,
				sL: ["actionscript", "javascript", "handlebars", "xml"]
			}
		}, {
			cN: "meta",
			v: [{
				b: /<\?xml/,
				e: /\?>/,
				r: 10
			}, {
				b: /<\?\w+/,
				e: /\?>/
			}]
		}, {
			cN: "tag",
			b: "</?",
			e: "/?>",
			c: [{
				cN: "name",
				b: /[^\/><\s]+/,
				r: 0
			}, c]
		}]
	}
}), hljs.registerLanguage("qml", function(a) {
	var b = {
			keyword: "in of on if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await import",
			literal: "true false null undefined NaN Infinity",
			built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Behavior bool color coordinate date double enumeration font geocircle georectangle geoshape int list matrix4x4 parent point quaternion real rect size string url var variant vector2d vector3d vector4dPromise"
		},
		c = "[a-zA-Z_][a-zA-Z0-9\\._]*",
		d = {
			cN: "keyword",
			b: "\\bproperty\\b",
			starts: {
				cN: "string",
				e: "(:|=|;|,|//|/\\*|$)",
				rE: !0
			}
		},
		e = {
			cN: "keyword",
			b: "\\bsignal\\b",
			starts: {
				cN: "string",
				e: "(\\(|:|=|;|,|//|/\\*|$)",
				rE: !0
			}
		},
		f = {
			cN: "attribute",
			b: "\\bid\\s*:",
			starts: {
				cN: "string",
				e: c,
				rE: !1
			}
		},
		g = {
			b: c + "\\s*:",
			rB: !0,
			c: [{
				cN: "attribute",
				b: c,
				e: "\\s*:",
				eE: !0,
				r: 0
			}],
			r: 0
		},
		h = {
			b: c + "\\s*{",
			e: "{",
			rB: !0,
			r: 0,
			c: [a.inherit(a.TM, {
				b: c
			})]
		};
	return {
		aliases: ["qt"],
		cI: !1,
		k: b,
		c: [{
			cN: "meta",
			b: /^\s*['"]use (strict|asm)['"]/
		}, a.ASM, a.QSM, {
			cN: "string",
			b: "`",
			e: "`",
			c: [a.BE, {
				cN: "subst",
				b: "\\$\\{",
				e: "\\}"
			}]
		}, a.CLCM, a.CBCM, {
			cN: "number",
			v: [{
				b: "\\b(0[bB][01]+)"
			}, {
				b: "\\b(0[oO][0-7]+)"
			}, {
				b: a.CNR
			}],
			r: 0
		}, {
			b: "(" + a.RSR + "|\\b(case|return|throw)\\b)\\s*",
			k: "return throw case",
			c: [a.CLCM, a.CBCM, a.RM, {
				b: /</,
				e: />\s*[);\]]/,
				r: 0,
				sL: "xml"
			}],
			r: 0
		}, e, d, {
			cN: "function",
			bK: "function",
			e: /\{/,
			eE: !0,
			c: [a.inherit(a.TM, {
				b: /[A-Za-z$_][0-9A-Za-z$_]*/
			}), {
				cN: "params",
				b: /\(/,
				e: /\)/,
				eB: !0,
				eE: !0,
				c: [a.CLCM, a.CBCM]
			}],
			i: /\[|%/
		}, {
			b: "\\." + a.IR,
			r: 0
		}, f, g, h],
		i: /#/
	}
}), hljs.registerLanguage("gams", function(a) {
	var b = {
			keyword: "abort acronym acronyms alias all and assign binary card diag display else eq file files for free ge gt if integer le loop lt maximizing minimizing model models ne negative no not option options or ord positive prod put putpage puttl repeat sameas semicont semiint smax smin solve sos1 sos2 sum system table then until using while xor yes",
			literal: "eps inf na",
			"built-in": "abs arccos arcsin arctan arctan2 Beta betaReg binomial ceil centropy cos cosh cvPower div div0 eDist entropy errorf execSeed exp fact floor frac gamma gammaReg log logBeta logGamma log10 log2 mapVal max min mod ncpCM ncpF ncpVUpow ncpVUsin normal pi poly power randBinomial randLinear randTriangle round rPower sigmoid sign signPower sin sinh slexp sllog10 slrec sqexp sqlog10 sqr sqrec sqrt tan tanh trunc uniform uniformInt vcPower bool_and bool_eqv bool_imp bool_not bool_or bool_xor ifThen rel_eq rel_ge rel_gt rel_le rel_lt rel_ne gday gdow ghour gleap gmillisec gminute gmonth gsecond gyear jdate jnow jstart jtime errorLevel execError gamsRelease gamsVersion handleCollect handleDelete handleStatus handleSubmit heapFree heapLimit heapSize jobHandle jobKill jobStatus jobTerminate licenseLevel licenseStatus maxExecError sleep timeClose timeComp timeElapsed timeExec timeStart"
		},
		c = {
			cN: "params",
			b: /\(/,
			e: /\)/,
			eB: !0,
			eE: !0
		},
		d = {
			cN: "symbol",
			v: [{
				b: /\=[lgenxc]=/
			}, {
				b: /\$/
			}]
		},
		e = {
			cN: "comment",
			v: [{
				b: "'",
				e: "'"
			}, {
				b: '"',
				e: '"'
			}],
			i: "\\n",
			c: [a.BE]
		},
		f = {
			b: "/",
			e: "/",
			k: b,
			c: [e, a.CLCM, a.CBCM, a.QSM, a.ASM, a.CNM]
		},
		g = {
			b: /[a-z][a-z0-9_]*(\([a-z0-9_, ]*\))?[ \t]+/,
			eB: !0,
			e: "$",
			eW: !0,
			c: [e, f, {
				cN: "comment",
				b: /([ ]*[a-z0-9&#*=?@>\\<:\-,()$\[\]_.{}!+%^]+)+/,
				r: 0
			}]
		};
	return {
		aliases: ["gms"],
		cI: !0,
		k: b,
		c: [a.C(/^\$ontext/, /^\$offtext/), {
			cN: "meta",
			b: "^\\$[a-z0-9]+",
			e: "$",
			rB: !0,
			c: [{
				cN: "meta-keyword",
				b: "^\\$[a-z0-9]+"
			}]
		}, a.C("^\\*", "$"), a.CLCM, a.CBCM, a.QSM, a.ASM, {
			bK: "set sets parameter parameters variable variables scalar scalars equation equations",
			e: ";",
			c: [a.C("^\\*", "$"), a.CLCM, a.CBCM, a.QSM, a.ASM, f, g]
		}, {
			bK: "table",
			e: ";",
			rB: !0,
			c: [{
				bK: "table",
				e: "$",
				c: [g]
			}, a.C("^\\*", "$"), a.CLCM, a.CBCM, a.QSM, a.ASM, a.CNM]
		}, {
			cN: "function",
			b: /^[a-z][a-z0-9_,\-+' ()$]+\.{2}/,
			rB: !0,
			c: [{
				cN: "title",
				b: /^[a-z][a-z0-9_]+/
			}, c, d]
		}, a.CNM, d]
	}
}), hljs.registerLanguage("json", function(a) {
	var b = {
			literal: "true false null"
		},
		c = [a.QSM, a.CNM],
		d = {
			e: ",",
			eW: !0,
			eE: !0,
			c: c,
			k: b
		},
		e = {
			b: "{",
			e: "}",
			c: [{
				cN: "attr",
				b: /"/,
				e: /"/,
				c: [a.BE],
				i: "\\n"
			}, a.inherit(d, {
				b: /:/
			})],
			i: "\\S"
		},
		f = {
			b: "\\[",
			e: "\\]",
			c: [a.inherit(d)],
			i: "\\S"
		};
	return c.splice(c.length, 0, e, f), {
		c: c,
		k: b,
		i: "\\S"
	}
}), hljs.registerLanguage("openscad", function(a) {
	var b = {
			cN: "keyword",
			b: "\\$(f[asn]|t|vp[rtd]|children)"
		},
		c = {
			cN: "literal",
			b: "false|true|PI|undef"
		},
		d = {
			cN: "number",
			b: "\\b\\d+(\\.\\d+)?(e-?\\d+)?",
			r: 0
		},
		e = a.inherit(a.QSM, {
			i: null
		}),
		f = {
			cN: "meta",
			k: {
				"meta-keyword": "include use"
			},
			b: "include|use <",
			e: ">"
		},
		g = {
			cN: "params",
			b: "\\(",
			e: "\\)",
			c: ["self", d, e, b, c]
		},
		h = {
			b: "[*!#%]",
			r: 0
		},
		i = {
			cN: "function",
			bK: "module function",
			e: "\\=|\\{",
			c: [g, a.UTM]
		};
	return {
		aliases: ["scad"],
		k: {
			keyword: "function module include use for intersection_for if else \\%",
			literal: "false true PI undef",
			built_in: "circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign"
		},
		c: [a.CLCM, a.CBCM, d, f, e, b, h, i]
	}
}), hljs.registerLanguage("armasm", function(a) {
	return {
		cI: !0,
		aliases: ["arm"],
		l: "\\.?" + a.IR,
		k: {
			meta: ".2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .arm .thumb .code16 .code32 .force_thumb .thumb_func .ltorg ALIAS ALIGN ARM AREA ASSERT ATTR CN CODE CODE16 CODE32 COMMON CP DATA DCB DCD DCDU DCDO DCFD DCFDU DCI DCQ DCQU DCW DCWU DN ELIF ELSE END ENDFUNC ENDIF ENDP ENTRY EQU EXPORT EXPORTAS EXTERN FIELD FILL FUNCTION GBLA GBLL GBLS GET GLOBAL IF IMPORT INCBIN INCLUDE INFO KEEP LCLA LCLL LCLS LTORG MACRO MAP MEND MEXIT NOFP OPT PRESERVE8 PROC QN READONLY RELOC REQUIRE REQUIRE8 RLIST FN ROUT SETA SETL SETS SN SPACE SUBT THUMB THUMBX TTL WHILE WEND ",
			built_in: "r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 pc lr sp ip sl sb fp a1 a2 a3 a4 v1 v2 v3 v4 v5 v6 v7 v8 f0 f1 f2 f3 f4 f5 f6 f7 p0 p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15 c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 q0 q1 q2 q3 q4 q5 q6 q7 q8 q9 q10 q11 q12 q13 q14 q15 cpsr_c cpsr_x cpsr_s cpsr_f cpsr_cx cpsr_cxs cpsr_xs cpsr_xsf cpsr_sf cpsr_cxsf spsr_c spsr_x spsr_s spsr_f spsr_cx spsr_cxs spsr_xs spsr_xsf spsr_sf spsr_cxsf s0 s1 s2 s3 s4 s5 s6 s7 s8 s9 s10 s11 s12 s13 s14 s15 s16 s17 s18 s19 s20 s21 s22 s23 s24 s25 s26 s27 s28 s29 s30 s31 d0 d1 d2 d3 d4 d5 d6 d7 d8 d9 d10 d11 d12 d13 d14 d15 d16 d17 d18 d19 d20 d21 d22 d23 d24 d25 d26 d27 d28 d29 d30 d31 {PC} {VAR} {TRUE} {FALSE} {OPT} {CONFIG} {ENDIAN} {CODESIZE} {CPU} {FPU} {ARCHITECTURE} {PCSTOREOFFSET} {ARMASM_VERSION} {INTER} {ROPI} {RWPI} {SWST} {NOSWST} . @"
		},
		c: [{
			cN: "keyword",
			b: "\\b(adc|(qd?|sh?|u[qh]?)?add(8|16)?|usada?8|(q|sh?|u[qh]?)?(as|sa)x|and|adrl?|sbc|rs[bc]|asr|b[lx]?|blx|bxj|cbn?z|tb[bh]|bic|bfc|bfi|[su]bfx|bkpt|cdp2?|clz|clrex|cmp|cmn|cpsi[ed]|cps|setend|dbg|dmb|dsb|eor|isb|it[te]{0,3}|lsl|lsr|ror|rrx|ldm(([id][ab])|f[ds])?|ldr((s|ex)?[bhd])?|movt?|mvn|mra|mar|mul|[us]mull|smul[bwt][bt]|smu[as]d|smmul|smmla|mla|umlaal|smlal?([wbt][bt]|d)|mls|smlsl?[ds]|smc|svc|sev|mia([bt]{2}|ph)?|mrr?c2?|mcrr2?|mrs|msr|orr|orn|pkh(tb|bt)|rbit|rev(16|sh)?|sel|[su]sat(16)?|nop|pop|push|rfe([id][ab])?|stm([id][ab])?|str(ex)?[bhd]?|(qd?)?sub|(sh?|q|u[qh]?)?sub(8|16)|[su]xt(a?h|a?b(16)?)|srs([id][ab])?|swpb?|swi|smi|tst|teq|wfe|wfi|yield)(eq|ne|cs|cc|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al|hs|lo)?[sptrx]?",
			e: "\\s"
		}, a.C("[;@]", "$", {
			r: 0
		}), a.CBCM, a.QSM, {
			cN: "string",
			b: "'",
			e: "[^\\\\]'",
			r: 0
		}, {
			cN: "title",
			b: "\\|",
			e: "\\|",
			i: "\\n",
			r: 0
		}, {
			cN: "number",
			v: [{
				b: "[#$=]?0x[0-9a-f]+"
			}, {
				b: "[#$=]?0b[01]+"
			}, {
				b: "[#$=]\\d+"
			}, {
				b: "\\b\\d+"
			}],
			r: 0
		}, {
			cN: "symbol",
			v: [{
				b: "^[a-z_\\.\\$][a-z0-9_\\.\\$]+"
			}, {
				b: "^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:"
			}, {
				b: "[=#]\\w+"
			}],
			r: 0
		}]
	}
}), hljs.registerLanguage("d", function(a) {
	var b = {
			keyword: "abstract alias align asm assert auto body break byte case cast catch class const continue debug default delete deprecated do else enum export extern final finally for foreach foreach_reverse|10 goto if immutable import in inout int interface invariant is lazy macro mixin module new nothrow out override package pragma private protected public pure ref return scope shared static struct super switch synchronized template this throw try typedef typeid typeof union unittest version void volatile while with __FILE__ __LINE__ __gshared|10 __thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__",
			built_in: "bool cdouble cent cfloat char creal dchar delegate double dstring float function idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar wstring",
			literal: "false null true"
		},
		c = "(0|[1-9][\\d_]*)",
		d = "(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)",
		e = "0[bB][01_]+",
		f = "([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)",
		g = "0[xX]" + f,
		h = "([eE][+-]?" + d + ")",
		i = "(" + d + "(\\.\\d*|" + h + ")|\\d+\\." + d + d + "|\\." + c + h + "?)",
		j = "(0[xX](" + f + "\\." + f + "|\\.?" + f + ")[pP][+-]?" + d + ")",
		k = "(" + c + "|" + e + "|" + g + ")",
		l = "(" + j + "|" + i + ")",
		m = "\\\\(['\"\\?\\\\abfnrtv]|u[\\dA-Fa-f]{4}|[0-7]{1,3}|x[\\dA-Fa-f]{2}|U[\\dA-Fa-f]{8})|&[a-zA-Z\\d]{2,};",
		n = {
			cN: "number",
			b: "\\b" + k + "(L|u|U|Lu|LU|uL|UL)?",
			r: 0
		},
		o = {
			cN: "number",
			b: "\\b(" + l + "([fF]|L|i|[fF]i|Li)?|" + k + "(i|[fF]i|Li))",
			r: 0
		},
		p = {
			cN: "string",
			b: "'(" + m + "|.)",
			e: "'",
			i: "."
		},
		q = {
			b: m,
			r: 0
		},
		r = {
			cN: "string",
			b: '"',
			c: [q],
			e: '"[cwd]?'
		},
		s = {
			cN: "string",
			b: '[rq]"',
			e: '"[cwd]?',
			r: 5
		},
		t = {
			cN: "string",
			b: "`",
			e: "`[cwd]?"
		},
		u = {
			cN: "string",
			b: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',
			r: 10
		},
		v = {
			cN: "string",
			b: 'q"\\{',
			e: '\\}"'
		},
		w = {
			cN: "meta",
			b: "^#!",
			e: "$",
			r: 5
		},
		x = {
			cN: "meta",
			b: "#(line)",
			e: "$",
			r: 5
		},
		y = {
			cN: "keyword",
			b: "@[a-zA-Z_][a-zA-Z_\\d]*"
		},
		z = a.C("\\/\\+", "\\+\\/", {
			c: ["self"],
			r: 10
		});
	return {
		l: a.UIR,
		k: b,
		c: [a.CLCM, a.CBCM, z, u, r, s, t, v, o, n, p, w, x, y]
	}
}), hljs.registerLanguage("cos", function(a) {
	var b = {
			cN: "string",
			v: [{
				b: '"',
				e: '"',
				c: [{
					b: '""',
					r: 0
				}]
			}]
		},
		c = {
			cN: "number",
			b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)",
			r: 0
		},
		d = "property parameter class classmethod clientmethod extends as break catch close continue do d|0 else elseif for goto halt hang h|0 if job j|0 kill k|0 lock l|0 merge new open quit q|0 read r|0 return set s|0 tcommit throw trollback try tstart use view while write w|0 xecute x|0 zkill znspace zn ztrap zwrite zw zzdump zzwrite print zbreak zinsert zload zprint zremove zsave zzprint mv mvcall mvcrt mvdim mvprint zquit zsync ascii";
	return {
		cI: !0,
		aliases: ["cos", "cls"],
		k: d,
		c: [c, b, a.CLCM, a.CBCM, {
			cN: "comment",
			b: /;/,
			e: "$",
			r: 0
		}, {
			cN: "built_in",
			b: /(?:\$\$?|\.\.)\^?[a-zA-Z]+/
		}, {
			cN: "built_in",
			b: /\$\$\$[a-zA-Z]+/
		}, {
			cN: "built_in",
			b: /%[a-z]+(?:\.[a-z]+)*/
		}, {
			cN: "symbol",
			b: /\^%?[a-zA-Z][\w]*/
		}, {
			cN: "keyword",
			b: /##class|##super|#define|#dim/
		}, {
			b: /&sql\(/,
			e: /\)/,
			eB: !0,
			eE: !0,
			sL: "sql"
		}, {
			b: /&(js|jscript|javascript)</,
			e: />/,
			eB: !0,
			eE: !0,
			sL: "javascript"
		}, {
			b: /&html<\s*</,
			e: />\s*>/,
			sL: "xml"
		}]
	}
}), hljs.registerLanguage("elixir", function(a) {
	var b = "[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?",
		c = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
		d = "and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote",
		e = {
			cN: "subst",
			b: "#\\{",
			e: "}",
			l: b,
			k: d
		},
		f = {
			cN: "string",
			c: [a.BE, e],
			v: [{
				b: /'/,
				e: /'/
			}, {
				b: /"/,
				e: /"/
			}]
		},
		g = {
			cN: "function",
			bK: "def defp defmacro",
			e: /\B\b/,
			c: [a.inherit(a.TM, {
				b: b,
				endsParent: !0
			})]
		},
		h = a.inherit(g, {
			cN: "class",
			bK: "defimpl defmodule defprotocol defrecord",
			e: /\bdo\b|$|;/
		}),
		i = [f, a.HCM, h, g, {
			cN: "symbol",
			b: ":(?!\\s)",
			c: [f, {
				b: c
			}],
			r: 0
		}, {
			cN: "symbol",
			b: b + ":",
			r: 0
		}, {
			cN: "number",
			b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
			r: 0
		}, {
			cN: "variable",
			b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
		}, {
			b: "->"
		}, {
			b: "(" + a.RSR + ")\\s*",
			c: [a.HCM, {
				cN: "regexp",
				i: "\\n",
				c: [a.BE, e],
				v: [{
					b: "/",
					e: "/[a-z]*"
				}, {
					b: "%r\\[",
					e: "\\][a-z]*"
				}]
			}],
			r: 0
		}];
	return e.c = i, {
		l: b,
		k: d,
		c: i
	}
}), hljs.registerLanguage("dos", function(a) {
	var b = a.C(/^\s*@?rem\b/, /$/, {
			r: 10
		}),
		c = {
			cN: "symbol",
			b: "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)",
			r: 0
		};
	return {
		aliases: ["bat", "cmd"],
		cI: !0,
		i: /\/\*/,
		k: {
			keyword: "if else goto for in do call exit not exist errorlevel defined equ neq lss leq gtr geq",
			built_in: "prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux shift cd dir echo setlocal endlocal set pause copy append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color comp compact convert date dir diskcomp diskcopy doskey erase fs find findstr format ftype graftabl help keyb label md mkdir mode more move path pause print popd pushd promt rd recover rem rename replace restore rmdir shiftsort start subst time title tree type ver verify vol ping net ipconfig taskkill xcopy ren del"
		},
		c: [{
			cN: "variable",
			b: /%%[^ ]|%[^ ]+?%|![^ ]+?!/
		}, {
			cN: "function",
			b: c.b,
			e: "goto:eof",
			c: [a.inherit(a.TM, {
				b: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"
			}), b]
		}, {
			cN: "number",
			b: "\\b\\d+",
			r: 0
		}, b]
	}
}), hljs.registerLanguage("nginx", function(a) {
	var b = {
			cN: "variable",
			v: [{
				b: /\$\d+/
			}, {
				b: /\$\{/,
				e: /}/
			}, {
				b: "[\\$\\@]" + a.UIR
			}]
		},
		c = {
			eW: !0,
			l: "[a-z/_]+",
			k: {
				literal: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
			},
			r: 0,
			i: "=>",
			c: [a.HCM, {
				cN: "string",
				c: [a.BE, b],
				v: [{
					b: /"/,
					e: /"/
				}, {
					b: /'/,
					e: /'/
				}]
			}, {
				b: "([a-z]+):/",
				e: "\\s",
				eW: !0,
				eE: !0,
				c: [b]
			}, {
				cN: "regexp",
				c: [a.BE, b],
				v: [{
					b: "\\s\\^",
					e: "\\s|{|;",
					rE: !0
				}, {
					b: "~\\*?\\s+",
					e: "\\s|{|;",
					rE: !0
				}, {
					b: "\\*(\\.[a-z\\-]+)+"
				}, {
					b: "([a-z\\-]+\\.)+\\*"
				}]
			}, {
				cN: "number",
				b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
			}, {
				cN: "number",
				b: "\\b\\d+[kKmMgGdshdwy]*\\b",
				r: 0
			}, b]
		};
	return {
		aliases: ["nginxconf"],
		c: [a.HCM, {
			b: a.UIR + "\\s+{",
			rB: !0,
			e: "{",
			c: [{
				cN: "section",
				b: a.UIR
			}],
			r: 0
		}, {
			b: a.UIR + "\\s",
			e: ";|{",
			rB: !0,
			c: [{
				cN: "attribute",
				b: a.UIR,
				starts: c
			}],
			r: 0
		}],
		i: "[^\\s\\}]"
	}
}), hljs.registerLanguage("thrift", function(a) {
	var b = "bool byte i16 i32 i64 double string binary";
	return {
		k: {
			keyword: "namespace const typedef struct enum service exception void oneway set list map required optional",
			built_in: b,
			literal: "true false"
		},
		c: [a.QSM, a.NM, a.CLCM, a.CBCM, {
			cN: "class",
			bK: "struct enum service exception",
			e: /\{/,
			i: /\n/,
			c: [a.inherit(a.TM, {
				starts: {
					eW: !0,
					eE: !0
				}
			})]
		}, {
			b: "\\b(set|list|map)\\s*<",
			e: ">",
			k: b,
			c: ["self"]
		}]
	}
}), hljs.registerLanguage("vim", function(a) {
	return {
		l: /[!#@\w]+/,
		k: {
			keyword: "N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope cp cpf cq cr cs cst cu cuna cunme cw delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu go gr grepa gu gv ha helpf helpg helpt hi hid his ia iabc if ij il im imapc ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf quita qa rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank",
			built_in: "synIDtrans atan2 range matcharg did_filetype asin feedkeys xor argv complete_check add getwinposx getqflist getwinposy screencol clearmatches empty extend getcmdpos mzeval garbagecollect setreg ceil sqrt diff_hlID inputsecret get getfperm getpid filewritable shiftwidth max sinh isdirectory synID system inputrestore winline atan visualmode inputlist tabpagewinnr round getregtype mapcheck hasmapto histdel argidx findfile sha256 exists toupper getcmdline taglist string getmatches bufnr strftime winwidth bufexists strtrans tabpagebuflist setcmdpos remote_read printf setloclist getpos getline bufwinnr float2nr len getcmdtype diff_filler luaeval resolve libcallnr foldclosedend reverse filter has_key bufname str2float strlen setline getcharmod setbufvar index searchpos shellescape undofile foldclosed setqflist buflisted strchars str2nr virtcol floor remove undotree remote_expr winheight gettabwinvar reltime cursor tabpagenr finddir localtime acos getloclist search tanh matchend rename gettabvar strdisplaywidth type abs py3eval setwinvar tolower wildmenumode log10 spellsuggest bufloaded synconcealed nextnonblank server2client complete settabwinvar executable input wincol setmatches getftype hlID inputsave searchpair or screenrow line settabvar histadd deepcopy strpart remote_peek and eval getftime submatch screenchar winsaveview matchadd mkdir screenattr getfontname libcall reltimestr getfsize winnr invert pow getbufline byte2line soundfold repeat fnameescape tagfiles sin strwidth spellbadword trunc maparg log lispindent hostname setpos globpath remote_foreground getchar synIDattr fnamemodify cscope_connection stridx winbufnr indent min complete_add nr2char searchpairpos inputdialog values matchlist items hlexists strridx browsedir expand fmod pathshorten line2byte argc count getwinvar glob foldtextresult getreg foreground cosh matchdelete has char2nr simplify histget searchdecl iconv winrestcmd pumvisible writefile foldlevel haslocaldir keys cos matchstr foldtext histnr tan tempname getcwd byteidx getbufvar islocked escape eventhandler remote_send serverlist winrestview synstack pyeval prevnonblank readfile cindent filereadable changenr exp"
		},
		i: /;/,
		c: [a.NM, a.ASM, {
			cN: "string",
			b: /"(\\"|\n\\|[^"\n])*"/
		}, a.C('"', "$"), {
			cN: "variable",
			b: /[bwtglsav]:[\w\d_]*/
		}, {
			cN: "function",
			bK: "function function!",
			e: "$",
			r: 0,
			c: [a.TM, {
				cN: "params",
				b: "\\(",
				e: "\\)"
			}]
		}, {
			cN: "symbol",
			b: /<[\w-]+>/
		}]
	}
}), hljs.registerLanguage("scheme", function(a) {
	var b = "[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+",
		c = "(\\-|\\+)?\\d+([./]\\d+)?",
		d = c + "[+\\-]" + c + "i",
		e = {
			"builtin-name": "case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules ' * + , ,@ - ... / ; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"
		},
		f = {
			cN: "meta",
			b: "^#!",
			e: "$"
		},
		g = {
			cN: "literal",
			b: "(#t|#f|#\\\\" + b + "|#\\\\.)"
		},
		h = {
			cN: "number",
			v: [{
				b: c,
				r: 0
			}, {
				b: d,
				r: 0
			}, {
				b: "#b[0-1]+(/[0-1]+)?"
			}, {
				b: "#o[0-7]+(/[0-7]+)?"
			}, {
				b: "#x[0-9a-f]+(/[0-9a-f]+)?"
			}]
		},
		i = a.QSM,
		j = [a.C(";", "$", {
			r: 0
		}), a.C("#\\|", "\\|#")],
		k = {
			b: b,
			r: 0
		},
		l = {
			cN: "symbol",
			b: "'" + b
		},
		m = {
			eW: !0,
			r: 0
		},
		n = {
			b: /'/,
			c: [{
				b: "\\(",
				e: "\\)",
				c: ["self", g, i, h, k, l]
			}]
		},
		o = {
			cN: "name",
			b: b,
			l: b,
			k: e
		},
		p = {
			b: /lambda/,
			eW: !0,
			rB: !0,
			c: [o, {
				b: /\(/,
				e: /\)/,
				endsParent: !0,
				c: [k]
			}]
		},
		q = {
			v: [{
				b: "\\(",
				e: "\\)"
			}, {
				b: "\\[",
				e: "\\]"
			}],
			c: [p, o, m]
		};
	return m.c = [g, h, i, k, l, n, q].concat(j), {
		i: /\S/,
		c: [f, h, i, l, n, q].concat(j)
	}
}), hljs.registerLanguage("haxe", function(a) {
	var b = "([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)";
	return {
		aliases: ["hx"],
		k: {
			keyword: "break callback case cast catch class continue default do dynamic else enum extends extern for function here if implements import in inline interface never new override package private public return static super switch this throw trace try typedef untyped using var while",
			literal: "true false null"
		},
		c: [a.ASM, a.QSM, a.CLCM, a.CBCM, a.CNM, {
			cN: "class",
			bK: "class interface",
			e: "{",
			eE: !0,
			c: [{
				bK: "extends implements"
			}, a.TM]
		}, {
			cN: "meta",
			b: "#",
			e: "$",
			k: {
				"meta-keyword": "if else elseif end error"
			}
		}, {
			cN: "function",
			bK: "function",
			e: "[{;]",
			eE: !0,
			i: "\\S",
			c: [a.TM, {
				cN: "params",
				b: "\\(",
				e: "\\)",
				c: [a.ASM, a.QSM, a.CLCM, a.CBCM]
			}, {
				b: ":\\s*" + b
			}]
		}]
	}
}), hljs.registerLanguage("sql", function(a) {
	var b = a.C("--", "$");
	return {
		cI: !0,
		i: /[<>{}*#]/,
		c: [{
			bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment",
			e: /;/,
			eW: !0,
			l: /[\w\.]+/,
			k: {
				keyword: "abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
				literal: "true false null",
				built_in: "array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"
			},
			c: [{
				cN: "string",
				b: "'",
				e: "'",
				c: [a.BE, {
					b: "''"
				}]
			}, {
				cN: "string",
				b: '"',
				e: '"',
				c: [a.BE, {
					b: '""'
				}]
			}, {
				cN: "string",
				b: "`",
				e: "`",
				c: [a.BE]
			}, a.CNM, a.CBCM, b]
		}, a.CBCM, b]
	}
}), hljs.registerLanguage("avrasm", function(a) {
	return {
		cI: !0,
		l: "\\.?" + a.IR,
		k: {
			keyword: "adc add adiw and andi asr bclr bld brbc brbs brcc brcs break breq brge brhc brhs brid brie brlo brlt brmi brne brpl brsh brtc brts brvc brvs bset bst call cbi cbr clc clh cli cln clr cls clt clv clz com cp cpc cpi cpse dec eicall eijmp elpm eor fmul fmuls fmulsu icall ijmp in inc jmp ld ldd ldi lds lpm lsl lsr mov movw mul muls mulsu neg nop or ori out pop push rcall ret reti rjmp rol ror sbc sbr sbrc sbrs sec seh sbi sbci sbic sbis sbiw sei sen ser ses set sev sez sleep spm st std sts sub subi swap tst wdr",
			built_in: "r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 x|0 xh xl y|0 yh yl z|0 zh zl ucsr1c udr1 ucsr1a ucsr1b ubrr1l ubrr1h ucsr0c ubrr0h tccr3c tccr3a tccr3b tcnt3h tcnt3l ocr3ah ocr3al ocr3bh ocr3bl ocr3ch ocr3cl icr3h icr3l etimsk etifr tccr1c ocr1ch ocr1cl twcr twdr twar twsr twbr osccal xmcra xmcrb eicra spmcsr spmcr portg ddrg ping portf ddrf sreg sph spl xdiv rampz eicrb eimsk gimsk gicr eifr gifr timsk tifr mcucr mcucsr tccr0 tcnt0 ocr0 assr tccr1a tccr1b tcnt1h tcnt1l ocr1ah ocr1al ocr1bh ocr1bl icr1h icr1l tccr2 tcnt2 ocr2 ocdr wdtcr sfior eearh eearl eedr eecr porta ddra pina portb ddrb pinb portc ddrc pinc portd ddrd pind spdr spsr spcr udr0 ucsr0a ucsr0b ubrr0l acsr admux adcsr adch adcl porte ddre pine pinf",
			meta: ".byte .cseg .db .def .device .dseg .dw .endmacro .equ .eseg .exit .include .list .listmac .macro .nolist .org .set"
		},
		c: [a.CBCM, a.C(";", "$", {
			r: 0
		}), a.CNM, a.BNM, {
			cN: "number",
			b: "\\b(\\$[a-zA-Z0-9]+|0o[0-7]+)"
		}, a.QSM, {
			cN: "string",
			b: "'",
			e: "[^\\\\]'",
			i: "[^\\\\][^']"
		}, {
			cN: "symbol",
			b: "^[A-Za-z0-9_.$]+:"
		}, {
			cN: "meta",
			b: "#",
			e: "$"
		}, {
			cN: "subst",
			b: "@[0-9]+"
		}]
	}
}), hljs.registerLanguage("scss", function(a) {
	var b = "[a-zA-Z-][a-zA-Z0-9_-]*",
		c = {
			cN: "variable",
			b: "(\\$" + b + ")\\b"
		},
		d = {
			cN: "number",
			b: "#[0-9A-Fa-f]+"
		};
	return {
		cN: "attribute",
		b: "[A-Z\\_\\.\\-]+",
		e: ":",
		eE: !0,
		i: "[^\\s]",
		starts: {
			eW: !0,
			eE: !0,
			c: [d, a.CSSNM, a.QSM, a.ASM, a.CBCM, {
				cN: "meta",
				b: "!important"
			}]
		}
	}, {
		cI: !0,
		i: "[=/|']",
		c: [a.CLCM, a.CBCM, {
			cN: "selector-id",
			b: "\\#[A-Za-z0-9_-]+",
			r: 0
		}, {
			cN: "selector-class",
			b: "\\.[A-Za-z0-9_-]+",
			r: 0
		}, {
			cN: "selector-attr",
			b: "\\[",
			e: "\\]",
			i: "$"
		}, {
			cN: "selector-tag",
			b: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
			r: 0
		}, {
			b: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"
		}, {
			b: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"
		}, c, {
			cN: "attribute",
			b: "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
			i: "[^\\s]"
		}, {
			b: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
		}, {
			b: ":",
			e: ";",
			c: [c, d, a.CSSNM, a.QSM, a.ASM, {
				cN: "meta",
				b: "!important"
			}]
		}, {
			b: "@",
			e: "[{;]",
			k: "mixin include extend for if else each while charset import debug media page content font-face namespace warn",
			c: [c, a.QSM, a.ASM, d, a.CSSNM, {
				b: "\\s[A-Za-z0-9_.-]+",
				r: 0
			}]
		}]
	}
}), hljs.registerLanguage("subunit", function(a) {
	var b = {
			cN: "string",
			b: "\\[\n(multipart)?",
			e: "\\]\n"
		},
		c = {
			cN: "string",
			b: "\\d{4}-\\d{2}-\\d{2}(\\s+)\\d{2}:\\d{2}:\\d{2}.\\d+Z"
		},
		d = {
			cN: "string",
			b: "(\\+|-)\\d+"
		},
		e = {
			cN: "keyword",
			r: 10,
			v: [{
				b: "^(test|testing|success|successful|failure|error|skip|xfail|uxsuccess)(:?)\\s+(test)?"
			}, {
				b: "^progress(:?)(\\s+)?(pop|push)?"
			}, {
				b: "^tags:"
			}, {
				b: "^time:"
			}]
		};
	return {
		cI: !0,
		c: [b, c, d, e]
	}
}), hljs.registerLanguage("autohotkey", function(a) {
	var b = {
		b: /`[\s\S]/
	};
	return {
		cI: !0,
		k: {
			keyword: "Break Continue Else Gosub If Loop Return While",
			literal: "A|0 true false NOT AND OR",
			built_in: "ComSpec Clipboard ClipboardAll ErrorLevel"
		},
		c: [{
			cN: "built_in",
			b: "A_[a-zA-Z0-9]+"
		}, b, a.inherit(a.QSM, {
			c: [b]
		}), a.C(";", "$", {
			r: 0
		}), {
			cN: "number",
			b: a.NR,
			r: 0
		}, {
			cN: "variable",
			b: "%",
			e: "%",
			i: "\\n",
			c: [b]
		}, {
			cN: "symbol",
			c: [b],
			v: [{
				b: '^[^\\n";]+::(?!=)'
			}, {
				b: '^[^\\n";]+:(?!=)',
				r: 0
			}]
		}, {
			b: ",\\s*,"
		}]
	}
}), hljs.registerLanguage("autoit", function(a) {
	var b = "ByRef Case Const ContinueCase ContinueLoop Default Dim Do Else ElseIf EndFunc EndIf EndSelect EndSwitch EndWith Enum Exit ExitLoop For Func Global If In Local Next ReDim Return Select Static Step Switch Then To Until Volatile WEnd While With",
		c = "True False And Null Not Or",
		d = "Abs ACos AdlibRegister AdlibUnRegister Asc AscW ASin Assign ATan AutoItSetOption AutoItWinGetTitle AutoItWinSetTitle Beep Binary BinaryLen BinaryMid BinaryToString BitAND BitNOT BitOR BitRotate BitShift BitXOR BlockInput Break Call CDTray Ceiling Chr ChrW ClipGet ClipPut ConsoleRead ConsoleWrite ConsoleWriteError ControlClick ControlCommand ControlDisable ControlEnable ControlFocus ControlGetFocus ControlGetHandle ControlGetPos ControlGetText ControlHide ControlListView ControlMove ControlSend ControlSetText ControlShow ControlTreeView Cos Dec DirCopy DirCreate DirGetSize DirMove DirRemove DllCall DllCallAddress DllCallbackFree DllCallbackGetPtr DllCallbackRegister DllClose DllOpen DllStructCreate DllStructGetData DllStructGetPtr DllStructGetSize DllStructSetData DriveGetDrive DriveGetFileSystem DriveGetLabel DriveGetSerial DriveGetType DriveMapAdd DriveMapDel DriveMapGet DriveSetLabel DriveSpaceFree DriveSpaceTotal DriveStatus EnvGet EnvSet EnvUpdate Eval Execute Exp FileChangeDir FileClose FileCopy FileCreateNTFSLink FileCreateShortcut FileDelete FileExists FileFindFirstFile FileFindNextFile FileFlush FileGetAttrib FileGetEncoding FileGetLongName FileGetPos FileGetShortcut FileGetShortName FileGetSize FileGetTime FileGetVersion FileInstall FileMove FileOpen FileOpenDialog FileRead FileReadLine FileReadToArray FileRecycle FileRecycleEmpty FileSaveDialog FileSelectFolder FileSetAttrib FileSetEnd FileSetPos FileSetTime FileWrite FileWriteLine Floor FtpSetProxy FuncName GUICreate GUICtrlCreateAvi GUICtrlCreateButton GUICtrlCreateCheckbox GUICtrlCreateCombo GUICtrlCreateContextMenu GUICtrlCreateDate GUICtrlCreateDummy GUICtrlCreateEdit GUICtrlCreateGraphic GUICtrlCreateGroup GUICtrlCreateIcon GUICtrlCreateInput GUICtrlCreateLabel GUICtrlCreateList GUICtrlCreateListView GUICtrlCreateListViewItem GUICtrlCreateMenu GUICtrlCreateMenuItem GUICtrlCreateMonthCal GUICtrlCreateObj GUICtrlCreatePic GUICtrlCreateProgress GUICtrlCreateRadio GUICtrlCreateSlider GUICtrlCreateTab GUICtrlCreateTabItem GUICtrlCreateTreeView GUICtrlCreateTreeViewItem GUICtrlCreateUpdown GUICtrlDelete GUICtrlGetHandle GUICtrlGetState GUICtrlRead GUICtrlRecvMsg GUICtrlRegisterListViewSort GUICtrlSendMsg GUICtrlSendToDummy GUICtrlSetBkColor GUICtrlSetColor GUICtrlSetCursor GUICtrlSetData GUICtrlSetDefBkColor GUICtrlSetDefColor GUICtrlSetFont GUICtrlSetGraphic GUICtrlSetImage GUICtrlSetLimit GUICtrlSetOnEvent GUICtrlSetPos GUICtrlSetResizing GUICtrlSetState GUICtrlSetStyle GUICtrlSetTip GUIDelete GUIGetCursorInfo GUIGetMsg GUIGetStyle GUIRegisterMsg GUISetAccelerators GUISetBkColor GUISetCoord GUISetCursor GUISetFont GUISetHelp GUISetIcon GUISetOnEvent GUISetState GUISetStyle GUIStartGroup GUISwitch Hex HotKeySet HttpSetProxy HttpSetUserAgent HWnd InetClose InetGet InetGetInfo InetGetSize InetRead IniDelete IniRead IniReadSection IniReadSectionNames IniRenameSection IniWrite IniWriteSection InputBox Int IsAdmin IsArray IsBinary IsBool IsDeclared IsDllStruct IsFloat IsFunc IsHWnd IsInt IsKeyword IsNumber IsObj IsPtr IsString Log MemGetStats Mod MouseClick MouseClickDrag MouseDown MouseGetCursor MouseGetPos MouseMove MouseUp MouseWheel MsgBox Number ObjCreate ObjCreateInterface ObjEvent ObjGet ObjName OnAutoItExitRegister OnAutoItExitUnRegister Ping PixelChecksum PixelGetColor PixelSearch ProcessClose ProcessExists ProcessGetStats ProcessList ProcessSetPriority ProcessWait ProcessWaitClose ProgressOff ProgressOn ProgressSet Ptr Random RegDelete RegEnumKey RegEnumVal RegRead RegWrite Round Run RunAs RunAsWait RunWait Send SendKeepActive SetError SetExtended ShellExecute ShellExecuteWait Shutdown Sin Sleep SoundPlay SoundSetWaveVolume SplashImageOn SplashOff SplashTextOn Sqrt SRandom StatusbarGetText StderrRead StdinWrite StdioClose StdoutRead String StringAddCR StringCompare StringFormat StringFromASCIIArray StringInStr StringIsAlNum StringIsAlpha StringIsASCII StringIsDigit StringIsFloat StringIsInt StringIsLower StringIsSpace StringIsUpper StringIsXDigit StringLeft StringLen StringLower StringMid StringRegExp StringRegExpReplace StringReplace StringReverse StringRight StringSplit StringStripCR StringStripWS StringToASCIIArray StringToBinary StringTrimLeft StringTrimRight StringUpper Tan TCPAccept TCPCloseSocket TCPConnect TCPListen TCPNameToIP TCPRecv TCPSend TCPShutdown, UDPShutdown TCPStartup, UDPStartup TimerDiff TimerInit ToolTip TrayCreateItem TrayCreateMenu TrayGetMsg TrayItemDelete TrayItemGetHandle TrayItemGetState TrayItemGetText TrayItemSetOnEvent TrayItemSetState TrayItemSetText TraySetClick TraySetIcon TraySetOnEvent TraySetPauseIcon TraySetState TraySetToolTip TrayTip UBound UDPBind UDPCloseSocket UDPOpen UDPRecv UDPSend VarGetType WinActivate WinActive WinClose WinExists WinFlash WinGetCaretPos WinGetClassList WinGetClientSize WinGetHandle WinGetPos WinGetProcess WinGetState WinGetText WinGetTitle WinKill WinList WinMenuSelectItem WinMinimizeAll WinMinimizeAllUndo WinMove WinSetOnTop WinSetState WinSetTitle WinSetTrans WinWait",
		e = {
			v: [a.C(";", "$", {
				r: 0
			}), a.C("#cs", "#ce"), a.C("#comments-start", "#comments-end")]
		},
		f = {
			b: "\\$[A-z0-9_]+"
		},
		g = {
			cN: "string",
			v: [{
				b: /"/,
				e: /"/,
				c: [{
					b: /""/,
					r: 0
				}]
			}, {
				b: /'/,
				e: /'/,
				c: [{
					b: /''/,
					r: 0
				}]
			}]
		},
		h = {
			v: [a.BNM, a.CNM]
		},
		i = {
			cN: "meta",
			b: "#",
			e: "$",
			k: {
				"meta-keyword": "comments include include-once NoTrayIcon OnAutoItStartRegister pragma compile RequireAdmin"
			},
			c: [{
				b: /\\\n/,
				r: 0
			}, {
				bK: "include",
				k: {
					"meta-keyword": "include"
				},
				e: "$",
				c: [g, {
					cN: "meta-string",
					v: [{
						b: "<",
						e: ">"
					}, {
						b: /"/,
						e: /"/,
						c: [{
							b: /""/,
							r: 0
						}]
					}, {
						b: /'/,
						e: /'/,
						c: [{
							b: /''/,
							r: 0
						}]
					}]
				}]
			}, g, e]
		},
		j = {
			cN: "symbol",
			b: "@[A-z0-9_]+"
		},
		k = {
			cN: "function",
			bK: "Func",
			e: "$",
			i: "\\$|\\[|%",
			c: [a.UTM, {
				cN: "params",
				b: "\\(",
				e: "\\)",
				c: [f, g, h]
			}]
		};
	return {
		cI: !0,
		i: /\/\*/,
		k: {
			keyword: b,
			built_in: d,
			literal: c
		},
		c: [e, f, g, h, i, j, k]
	}
}), hljs.registerLanguage("powershell", function(a) {
	var b = {
			b: "`[\\s\\S]",
			r: 0
		},
		c = {
			cN: "variable",
			v: [{
				b: /\$[\w\d][\w\d_:]*/
			}]
		},
		d = {
			cN: "literal",
			b: /\$(null|true|false)\b/
		},
		e = {
			cN: "string",
			v: [{
				b: /"/,
				e: /"/
			}, {
				b: /@"/,
				e: /^"@/
			}],
			c: [b, c, {
				cN: "variable",
				b: /\$[A-z]/,
				e: /[^A-z]/
			}]
		},
		f = {
			cN: "string",
			v: [{
				b: /'/,
				e: /'/
			}, {
				b: /@'/,
				e: /^'@/
			}]
		},
		g = {
			cN: "doctag",
			v: [{
				b: /\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/
			}, {
				b: /\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/
			}]
		},
		h = a.inherit(a.C(null, null), {
			v: [{
				b: /#/,
				e: /$/
			}, {
				b: /<#/,
				e: /#>/
			}],
			c: [g]
		});
	return {
		aliases: ["ps"],
		l: /-?[A-z\.\-]+/,
		cI: !0,
		k: {
			keyword: "if else foreach return function do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch",
			built_in: "Add-Computer Add-Content Add-History Add-JobTrigger Add-Member Add-PSSnapin Add-Type Checkpoint-Computer Clear-Content Clear-EventLog Clear-History Clear-Host Clear-Item Clear-ItemProperty Clear-Variable Compare-Object Complete-Transaction Connect-PSSession Connect-WSMan Convert-Path ConvertFrom-Csv ConvertFrom-Json ConvertFrom-SecureString ConvertFrom-StringData ConvertTo-Csv ConvertTo-Html ConvertTo-Json ConvertTo-SecureString ConvertTo-Xml Copy-Item Copy-ItemProperty Debug-Process Disable-ComputerRestore Disable-JobTrigger Disable-PSBreakpoint Disable-PSRemoting Disable-PSSessionConfiguration Disable-WSManCredSSP Disconnect-PSSession Disconnect-WSMan Disable-ScheduledJob Enable-ComputerRestore Enable-JobTrigger Enable-PSBreakpoint Enable-PSRemoting Enable-PSSessionConfiguration Enable-ScheduledJob Enable-WSManCredSSP Enter-PSSession Exit-PSSession Export-Alias Export-Clixml Export-Console Export-Counter Export-Csv Export-FormatData Export-ModuleMember Export-PSSession ForEach-Object Format-Custom Format-List Format-Table Format-Wide Get-Acl Get-Alias Get-AuthenticodeSignature Get-ChildItem Get-Command Get-ComputerRestorePoint Get-Content Get-ControlPanelItem Get-Counter Get-Credential Get-Culture Get-Date Get-Event Get-EventLog Get-EventSubscriber Get-ExecutionPolicy Get-FormatData Get-Host Get-HotFix Get-Help Get-History Get-IseSnippet Get-Item Get-ItemProperty Get-Job Get-JobTrigger Get-Location Get-Member Get-Module Get-PfxCertificate Get-Process Get-PSBreakpoint Get-PSCallStack Get-PSDrive Get-PSProvider Get-PSSession Get-PSSessionConfiguration Get-PSSnapin Get-Random Get-ScheduledJob Get-ScheduledJobOption Get-Service Get-TraceSource Get-Transaction Get-TypeData Get-UICulture Get-Unique Get-Variable Get-Verb Get-WinEvent Get-WmiObject Get-WSManCredSSP Get-WSManInstance Group-Object Import-Alias Import-Clixml Import-Counter Import-Csv Import-IseSnippet Import-LocalizedData Import-PSSession Import-Module Invoke-AsWorkflow Invoke-Command Invoke-Expression Invoke-History Invoke-Item Invoke-RestMethod Invoke-WebRequest Invoke-WmiMethod Invoke-WSManAction Join-Path Limit-EventLog Measure-Command Measure-Object Move-Item Move-ItemProperty New-Alias New-Event New-EventLog New-IseSnippet New-Item New-ItemProperty New-JobTrigger New-Object New-Module New-ModuleManifest New-PSDrive New-PSSession New-PSSessionConfigurationFile New-PSSessionOption New-PSTransportOption New-PSWorkflowExecutionOption New-PSWorkflowSession New-ScheduledJobOption New-Service New-TimeSpan New-Variable New-WebServiceProxy New-WinEvent New-WSManInstance New-WSManSessionOption Out-Default Out-File Out-GridView Out-Host Out-Null Out-Printer Out-String Pop-Location Push-Location Read-Host Receive-Job Register-EngineEvent Register-ObjectEvent Register-PSSessionConfiguration Register-ScheduledJob Register-WmiEvent Remove-Computer Remove-Event Remove-EventLog Remove-Item Remove-ItemProperty Remove-Job Remove-JobTrigger Remove-Module Remove-PSBreakpoint Remove-PSDrive Remove-PSSession Remove-PSSnapin Remove-TypeData Remove-Variable Remove-WmiObject Remove-WSManInstance Rename-Computer Rename-Item Rename-ItemProperty Reset-ComputerMachinePassword Resolve-Path Restart-Computer Restart-Service Restore-Computer Resume-Job Resume-Service Save-Help Select-Object Select-String Select-Xml Send-MailMessage Set-Acl Set-Alias Set-AuthenticodeSignature Set-Content Set-Date Set-ExecutionPolicy Set-Item Set-ItemProperty Set-JobTrigger Set-Location Set-PSBreakpoint Set-PSDebug Set-PSSessionConfiguration Set-ScheduledJob Set-ScheduledJobOption Set-Service Set-StrictMode Set-TraceSource Set-Variable Set-WmiInstance Set-WSManInstance Set-WSManQuickConfig Show-Command Show-ControlPanelItem Show-EventLog Sort-Object Split-Path Start-Job Start-Process Start-Service Start-Sleep Start-Transaction Start-Transcript Stop-Computer Stop-Job Stop-Process Stop-Service Stop-Transcript Suspend-Job Suspend-Service Tee-Object Test-ComputerSecureChannel Test-Connection Test-ModuleManifest Test-Path Test-PSSessionConfigurationFile Trace-Command Unblock-File Undo-Transaction Unregister-Event Unregister-PSSessionConfiguration Unregister-ScheduledJob Update-FormatData Update-Help Update-List Update-TypeData Use-Transaction Wait-Event Wait-Job Wait-Process Where-Object Write-Debug Write-Error Write-EventLog Write-Host Write-Output Write-Progress Write-Verbose Write-Warning",
			nomarkup: "-ne -eq -lt -gt -ge -le -not -like -notlike -match -notmatch -contains -notcontains -in -notin -replace"
		},
		c: [b, a.NM, e, f, d, c, h]
	}
}), hljs.registerLanguage("taggerscript", function(a) {
	var b = {
			cN: "comment",
			b: /\$noop\(/,
			e: /\)/,
			c: [{
				b: /\(/,
				e: /\)/,
				c: ["self", {
					b: /\\./
				}]
			}],
			r: 10
		},
		c = {
			cN: "keyword",
			b: /\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/,
			e: /\(/,
			eE: !0
		},
		d = {
			cN: "variable",
			b: /%[_a-zA-Z0-9:]*/,
			e: "%"
		},
		e = {
			cN: "symbol",
			b: /\\./
		};
	return {
		c: [b, c, d, e]
	}
}), hljs.registerLanguage("monkey", function(a) {
	var b = {
		cN: "number",
		r: 0,
		v: [{
			b: "[$][a-fA-F0-9]+"
		}, a.NM]
	};
	return {
		cI: !0,
		k: {
			keyword: "public private property continue exit extern new try catch eachin not abstract final select case default const local global field end if then else elseif endif while wend repeat until forever for to step next return module inline throw import",
			built_in: "DebugLog DebugStop Error Print ACos ACosr ASin ASinr ATan ATan2 ATan2r ATanr Abs Abs Ceil Clamp Clamp Cos Cosr Exp Floor Log Max Max Min Min Pow Sgn Sgn Sin Sinr Sqrt Tan Tanr Seed PI HALFPI TWOPI",
			literal: "true false null and or shl shr mod"
		},
		i: /\/\*/,
		c: [a.C("#rem", "#end"), a.C("'", "$", {
			r: 0
		}), {
			cN: "function",
			bK: "function method",
			e: "[(=:]|$",
			i: /\n/,
			c: [a.UTM]
		}, {
			cN: "class",
			bK: "class interface",
			e: "$",
			c: [{
				bK: "extends implements"
			}, a.UTM]
		}, {
			cN: "built_in",
			b: "\\b(self|super)\\b"
		}, {
			cN: "meta",
			b: "\\s*#",
			e: "$",
			k: {
				"meta-keyword": "if else elseif endif end then"
			}
		}, {
			cN: "meta",
			b: "^\\s*strict\\b"
		}, {
			bK: "alias",
			e: "=",
			c: [a.UTM]
		}, a.QSM, b]
	}
}), hljs.registerLanguage("rsl", function(a) {
	return {
		k: {
			keyword: "float color point normal vector matrix while for if do return else break extern continue",
			built_in: "abs acos ambient area asin atan atmosphere attribute calculatenormal ceil cellnoise clamp comp concat cos degrees depth Deriv diffuse distance Du Dv environment exp faceforward filterstep floor format fresnel incident length lightsource log match max min mod noise normalize ntransform opposite option phong pnoise pow printf ptlined radians random reflect refract renderinfo round setcomp setxcomp setycomp setzcomp shadow sign sin smoothstep specular specularbrdf spline sqrt step tan texture textureinfo trace transform vtransform xcomp ycomp zcomp"
		},
		i: "</",
		c: [a.CLCM, a.CBCM, a.QSM, a.ASM, a.CNM, {
			cN: "meta",
			b: "#",
			e: "$"
		}, {
			cN: "class",
			bK: "surface displacement light volume imager",
			e: "\\("
		}, {
			bK: "illuminate illuminance gather",
			e: "\\("
		}]
	}
}), hljs.registerLanguage("bnf", function(a) {
	return {
		c: [{
			cN: "attribute",
			b: /</,
			e: />/
		}, {
			b: /::=/,
			starts: {
				e: /$/,
				c: [{
					b: /</,
					e: />/
				}, a.CLCM, a.CBCM, a.ASM, a.QSM]
			}
		}]
	}
}), hljs.registerLanguage("awk", function(a) {
	var b = {
			cN: "variable",
			v: [{
				b: /\$[\w\d#@][\w\d_]*/
			}, {
				b: /\$\{(.*?)}/
			}]
		},
		c = "BEGIN END if else while do for in break continue delete next nextfile function func exit|10",
		d = {
			cN: "string",
			c: [a.BE],
			v: [{
				b: /(u|b)?r?'''/,
				e: /'''/,
				r: 10
			}, {
				b: /(u|b)?r?"""/,
				e: /"""/,
				r: 10
			}, {
				b: /(u|r|ur)'/,
				e: /'/,
				r: 10
			}, {
				b: /(u|r|ur)"/,
				e: /"/,
				r: 10
			}, {
				b: /(b|br)'/,
				e: /'/
			}, {
				b: /(b|br)"/,
				e: /"/
			}, a.ASM, a.QSM]
		};
	return {
		k: {
			keyword: c
		},
		c: [b, d, a.RM, a.HCM, a.NM]
	}
}), hljs.registerLanguage("markdown", function(a) {
	return {
		aliases: ["md", "mkdown", "mkd"],
		c: [{
			cN: "section",
			v: [{
				b: "^#{1,6}",
				e: "$"
			}, {
				b: "^.+?\\n[=-]{2,}$"
			}]
		}, {
			b: "<",
			e: ">",
			sL: "xml",
			r: 0
		}, {
			cN: "bullet",
			b: "^([*+-]|(\\d+\\.))\\s+"
		}, {
			cN: "strong",
			b: "[*_]{2}.+?[*_]{2}"
		}, {
			cN: "emphasis",
			v: [{
				b: "\\*.+?\\*"
			}, {
				b: "_.+?_",
				r: 0
			}]
		}, {
			cN: "quote",
			b: "^>\\s+",
			e: "$"
		}, {
			cN: "code",
			v: [{
				b: "^```w*s*$",
				e: "^```s*$"
			}, {
				b: "`.+?`"
			}, {
				b: "^( {4}|\t)",
				e: "$",
				r: 0
			}]
		}, {
			b: "^[-\\*]{3,}",
			e: "$"
		}, {
			b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
			rB: !0,
			c: [{
				cN: "string",
				b: "\\[",
				e: "\\]",
				eB: !0,
				rE: !0,
				r: 0
			}, {
				cN: "link",
				b: "\\]\\(",
				e: "\\)",
				eB: !0,
				eE: !0
			}, {
				cN: "symbol",
				b: "\\]\\[",
				e: "\\]",
				eB: !0,
				eE: !0
			}],
			r: 10
		}, {
			b: /^\[[^\n]+\]:/,
			rB: !0,
			c: [{
				cN: "symbol",
				b: /\[/,
				e: /\]/,
				eB: !0,
				eE: !0
			}, {
				cN: "link",
				b: /:\s*/,
				e: /$/,
				eB: !0
			}]
		}]
	}
}), hljs.registerLanguage("erb", function(a) {
	return {
		sL: "xml",
		c: [a.C("<%#", "%>"), {
			b: "<%[%=-]?",
			e: "[%-]?%>",
			sL: "ruby",
			eB: !0,
			eE: !0
		}]
	}
}), hljs.registerLanguage("purebasic", function(a) {
	var b = {
			cN: "string",
			b: '(~)?"',
			e: '"',
			i: "\\n"
		},
		c = {
			cN: "symbol",
			b: "#[a-zA-Z_]\\w*\\$?"
		};
	return {
		aliases: ["pb", "pbi"],
		k: "And As Break CallDebugger Case CompilerCase CompilerDefault CompilerElse CompilerEndIf CompilerEndSelect CompilerError CompilerIf CompilerSelect Continue Data DataSection EndDataSection Debug DebugLevel Default Define Dim DisableASM DisableDebugger DisableExplicit Else ElseIf EnableASM EnableDebugger EnableExplicit End EndEnumeration EndIf EndImport EndInterface EndMacro EndProcedure EndSelect EndStructure EndStructureUnion EndWith Enumeration Extends FakeReturn For Next ForEach ForEver Global Gosub Goto If Import ImportC IncludeBinary IncludeFile IncludePath Interface Macro NewList Not Or ProcedureReturn Protected Prototype PrototypeC Read ReDim Repeat Until Restore Return Select Shared Static Step Structure StructureUnion Swap To Wend While With XIncludeFile XOr Procedure ProcedureC ProcedureCDLL ProcedureDLL Declare DeclareC DeclareCDLL DeclareDLL",
		c: [a.C(";", "$", {
			r: 0
		}), {
			cN: "function",
			b: "\\b(Procedure|Declare)(C|CDLL|DLL)?\\b",
			e: "\\(",
			eE: !0,
			rB: !0,
			c: [{
				cN: "keyword",
				b: "(Procedure|Declare)(C|CDLL|DLL)?",
				eE: !0
			}, {
				cN: "type",
				b: "\\.\\w*"
			}, a.UTM]
		}, b, c]
	}
}), hljs.registerLanguage("gradle", function(a) {
	return {
		cI: !0,
		k: {
			keyword: "task project allprojects subprojects artifacts buildscript configurations dependencies repositories sourceSets description delete from into include exclude source classpath destinationDir includes options sourceCompatibility targetCompatibility group flatDir doLast doFirst flatten todir fromdir ant def abstract break case catch continue default do else extends final finally for if implements instanceof native new private protected public return static switch synchronized throw throws transient try volatile while strictfp package import false null super this true antlrtask checkstyle codenarc copy boolean byte char class double float int interface long short void compile runTime file fileTree abs any append asList asWritable call collect compareTo count div dump each eachByte eachFile eachLine every find findAll flatten getAt getErr getIn getOut getText grep immutable inject inspect intersect invokeMethods isCase join leftShift minus multiply newInputStream newOutputStream newPrintWriter newReader newWriter next plus pop power previous print println push putAt read readBytes readLines reverse reverseEach round size sort splitEachLine step subMap times toInteger toList tokenize upto waitForOrKill withPrintWriter withReader withStream withWriter withWriterAppend write writeLine"
		},
		c: [a.CLCM, a.CBCM, a.ASM, a.QSM, a.NM, a.RM]
	}
}), hljs.registerLanguage("cal", function(a) {
	var b = "div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to until while with var",
		c = "false true",
		d = [a.CLCM, a.C(/\{/, /\}/, {
			r: 0
		}), a.C(/\(\*/, /\*\)/, {
			r: 10
		})],
		e = {
			cN: "string",
			b: /'/,
			e: /'/,
			c: [{
				b: /''/
			}]
		},
		f = {
			cN: "string",
			b: /(#\d+)+/
		},
		g = {
			cN: "number",
			b: "\\b\\d+(\\.\\d+)?(DT|D|T)",
			r: 0
		},
		h = {
			cN: "string",
			b: '"',
			e: '"'
		},
		i = {
			cN: "function",
			bK: "procedure",
			e: /[:;]/,
			k: "procedure|10",
			c: [a.TM, {
				cN: "params",
				b: /\(/,
				e: /\)/,
				k: b,
				c: [e, f]
			}].concat(d)
		},
		j = {
			cN: "class",
			b: "OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)",
			rB: !0,
			c: [a.TM, i]
		};
	return {
		cI: !0,
		k: {
			keyword: b,
			literal: c
		},
		i: /\/\*/,
		c: [e, f, g, h, a.NM, j, i]
	}
}), hljs.registerLanguage("x86asm", function(a) {
	return {
		cI: !0,
		l: "[.%]?" + a.IR,
		k: {
			keyword: "lock rep repe repz repne repnz xaquire xrelease bnd nobnd aaa aad aam aas adc add and arpl bb0_reset bb1_reset bound bsf bsr bswap bt btc btr bts call cbw cdq cdqe clc cld cli clts cmc cmp cmpsb cmpsd cmpsq cmpsw cmpxchg cmpxchg486 cmpxchg8b cmpxchg16b cpuid cpu_read cpu_write cqo cwd cwde daa das dec div dmint emms enter equ f2xm1 fabs fadd faddp fbld fbstp fchs fclex fcmovb fcmovbe fcmove fcmovnb fcmovnbe fcmovne fcmovnu fcmovu fcom fcomi fcomip fcomp fcompp fcos fdecstp fdisi fdiv fdivp fdivr fdivrp femms feni ffree ffreep fiadd ficom ficomp fidiv fidivr fild fimul fincstp finit fist fistp fisttp fisub fisubr fld fld1 fldcw fldenv fldl2e fldl2t fldlg2 fldln2 fldpi fldz fmul fmulp fnclex fndisi fneni fninit fnop fnsave fnstcw fnstenv fnstsw fpatan fprem fprem1 fptan frndint frstor fsave fscale fsetpm fsin fsincos fsqrt fst fstcw fstenv fstp fstsw fsub fsubp fsubr fsubrp ftst fucom fucomi fucomip fucomp fucompp fxam fxch fxtract fyl2x fyl2xp1 hlt ibts icebp idiv imul in inc incbin insb insd insw int int01 int1 int03 int3 into invd invpcid invlpg invlpga iret iretd iretq iretw jcxz jecxz jrcxz jmp jmpe lahf lar lds lea leave les lfence lfs lgdt lgs lidt lldt lmsw loadall loadall286 lodsb lodsd lodsq lodsw loop loope loopne loopnz loopz lsl lss ltr mfence monitor mov movd movq movsb movsd movsq movsw movsx movsxd movzx mul mwait neg nop not or out outsb outsd outsw packssdw packsswb packuswb paddb paddd paddsb paddsiw paddsw paddusb paddusw paddw pand pandn pause paveb pavgusb pcmpeqb pcmpeqd pcmpeqw pcmpgtb pcmpgtd pcmpgtw pdistib pf2id pfacc pfadd pfcmpeq pfcmpge pfcmpgt pfmax pfmin pfmul pfrcp pfrcpit1 pfrcpit2 pfrsqit1 pfrsqrt pfsub pfsubr pi2fd pmachriw pmaddwd pmagw pmulhriw pmulhrwa pmulhrwc pmulhw pmullw pmvgezb pmvlzb pmvnzb pmvzb pop popa popad popaw popf popfd popfq popfw por prefetch prefetchw pslld psllq psllw psrad psraw psrld psrlq psrlw psubb psubd psubsb psubsiw psubsw psubusb psubusw psubw punpckhbw punpckhdq punpckhwd punpcklbw punpckldq punpcklwd push pusha pushad pushaw pushf pushfd pushfq pushfw pxor rcl rcr rdshr rdmsr rdpmc rdtsc rdtscp ret retf retn rol ror rdm rsdc rsldt rsm rsts sahf sal salc sar sbb scasb scasd scasq scasw sfence sgdt shl shld shr shrd sidt sldt skinit smi smint smintold smsw stc std sti stosb stosd stosq stosw str sub svdc svldt svts swapgs syscall sysenter sysexit sysret test ud0 ud1 ud2b ud2 ud2a umov verr verw fwait wbinvd wrshr wrmsr xadd xbts xchg xlatb xlat xor cmove cmovz cmovne cmovnz cmova cmovnbe cmovae cmovnb cmovb cmovnae cmovbe cmovna cmovg cmovnle cmovge cmovnl cmovl cmovnge cmovle cmovng cmovc cmovnc cmovo cmovno cmovs cmovns cmovp cmovpe cmovnp cmovpo je jz jne jnz ja jnbe jae jnb jb jnae jbe jna jg jnle jge jnl jl jnge jle jng jc jnc jo jno js jns jpo jnp jpe jp sete setz setne setnz seta setnbe setae setnb setnc setb setnae setcset setbe setna setg setnle setge setnl setl setnge setle setng sets setns seto setno setpe setp setpo setnp addps addss andnps andps cmpeqps cmpeqss cmpleps cmpless cmpltps cmpltss cmpneqps cmpneqss cmpnleps cmpnless cmpnltps cmpnltss cmpordps cmpordss cmpunordps cmpunordss cmpps cmpss comiss cvtpi2ps cvtps2pi cvtsi2ss cvtss2si cvttps2pi cvttss2si divps divss ldmxcsr maxps maxss minps minss movaps movhps movlhps movlps movhlps movmskps movntps movss movups mulps mulss orps rcpps rcpss rsqrtps rsqrtss shufps sqrtps sqrtss stmxcsr subps subss ucomiss unpckhps unpcklps xorps fxrstor fxrstor64 fxsave fxsave64 xgetbv xsetbv xsave xsave64 xsaveopt xsaveopt64 xrstor xrstor64 prefetchnta prefetcht0 prefetcht1 prefetcht2 maskmovq movntq pavgb pavgw pextrw pinsrw pmaxsw pmaxub pminsw pminub pmovmskb pmulhuw psadbw pshufw pf2iw pfnacc pfpnacc pi2fw pswapd maskmovdqu clflush movntdq movnti movntpd movdqa movdqu movdq2q movq2dq paddq pmuludq pshufd pshufhw pshuflw pslldq psrldq psubq punpckhqdq punpcklqdq addpd addsd andnpd andpd cmpeqpd cmpeqsd cmplepd cmplesd cmpltpd cmpltsd cmpneqpd cmpneqsd cmpnlepd cmpnlesd cmpnltpd cmpnltsd cmpordpd cmpordsd cmpunordpd cmpunordsd cmppd comisd cvtdq2pd cvtdq2ps cvtpd2dq cvtpd2pi cvtpd2ps cvtpi2pd cvtps2dq cvtps2pd cvtsd2si cvtsd2ss cvtsi2sd cvtss2sd cvttpd2pi cvttpd2dq cvttps2dq cvttsd2si divpd divsd maxpd maxsd minpd minsd movapd movhpd movlpd movmskpd movupd mulpd mulsd orpd shufpd sqrtpd sqrtsd subpd subsd ucomisd unpckhpd unpcklpd xorpd addsubpd addsubps haddpd haddps hsubpd hsubps lddqu movddup movshdup movsldup clgi stgi vmcall vmclear vmfunc vmlaunch vmload vmmcall vmptrld vmptrst vmread vmresume vmrun vmsave vmwrite vmxoff vmxon invept invvpid pabsb pabsw pabsd palignr phaddw phaddd phaddsw phsubw phsubd phsubsw pmaddubsw pmulhrsw pshufb psignb psignw psignd extrq insertq movntsd movntss lzcnt blendpd blendps blendvpd blendvps dppd dpps extractps insertps movntdqa mpsadbw packusdw pblendvb pblendw pcmpeqq pextrb pextrd pextrq phminposuw pinsrb pinsrd pinsrq pmaxsb pmaxsd pmaxud pmaxuw pminsb pminsd pminud pminuw pmovsxbw pmovsxbd pmovsxbq pmovsxwd pmovsxwq pmovsxdq pmovzxbw pmovzxbd pmovzxbq pmovzxwd pmovzxwq pmovzxdq pmuldq pmulld ptest roundpd roundps roundsd roundss crc32 pcmpestri pcmpestrm pcmpistri pcmpistrm pcmpgtq popcnt getsec pfrcpv pfrsqrtv movbe aesenc aesenclast aesdec aesdeclast aesimc aeskeygenassist vaesenc vaesenclast vaesdec vaesdeclast vaesimc vaeskeygenassist vaddpd vaddps vaddsd vaddss vaddsubpd vaddsubps vandpd vandps vandnpd vandnps vblendpd vblendps vblendvpd vblendvps vbroadcastss vbroadcastsd vbroadcastf128 vcmpeq_ospd vcmpeqpd vcmplt_ospd vcmpltpd vcmple_ospd vcmplepd vcmpunord_qpd vcmpunordpd vcmpneq_uqpd vcmpneqpd vcmpnlt_uspd vcmpnltpd vcmpnle_uspd vcmpnlepd vcmpord_qpd vcmpordpd vcmpeq_uqpd vcmpnge_uspd vcmpngepd vcmpngt_uspd vcmpngtpd vcmpfalse_oqpd vcmpfalsepd vcmpneq_oqpd vcmpge_ospd vcmpgepd vcmpgt_ospd vcmpgtpd vcmptrue_uqpd vcmptruepd vcmplt_oqpd vcmple_oqpd vcmpunord_spd vcmpneq_uspd vcmpnlt_uqpd vcmpnle_uqpd vcmpord_spd vcmpeq_uspd vcmpnge_uqpd vcmpngt_uqpd vcmpfalse_ospd vcmpneq_ospd vcmpge_oqpd vcmpgt_oqpd vcmptrue_uspd vcmppd vcmpeq_osps vcmpeqps vcmplt_osps vcmpltps vcmple_osps vcmpleps vcmpunord_qps vcmpunordps vcmpneq_uqps vcmpneqps vcmpnlt_usps vcmpnltps vcmpnle_usps vcmpnleps vcmpord_qps vcmpordps vcmpeq_uqps vcmpnge_usps vcmpngeps vcmpngt_usps vcmpngtps vcmpfalse_oqps vcmpfalseps vcmpneq_oqps vcmpge_osps vcmpgeps vcmpgt_osps vcmpgtps vcmptrue_uqps vcmptrueps vcmplt_oqps vcmple_oqps vcmpunord_sps vcmpneq_usps vcmpnlt_uqps vcmpnle_uqps vcmpord_sps vcmpeq_usps vcmpnge_uqps vcmpngt_uqps vcmpfalse_osps vcmpneq_osps vcmpge_oqps vcmpgt_oqps vcmptrue_usps vcmpps vcmpeq_ossd vcmpeqsd vcmplt_ossd vcmpltsd vcmple_ossd vcmplesd vcmpunord_qsd vcmpunordsd vcmpneq_uqsd vcmpneqsd vcmpnlt_ussd vcmpnltsd vcmpnle_ussd vcmpnlesd vcmpord_qsd vcmpordsd vcmpeq_uqsd vcmpnge_ussd vcmpngesd vcmpngt_ussd vcmpngtsd vcmpfalse_oqsd vcmpfalsesd vcmpneq_oqsd vcmpge_ossd vcmpgesd vcmpgt_ossd vcmpgtsd vcmptrue_uqsd vcmptruesd vcmplt_oqsd vcmple_oqsd vcmpunord_ssd vcmpneq_ussd vcmpnlt_uqsd vcmpnle_uqsd vcmpord_ssd vcmpeq_ussd vcmpnge_uqsd vcmpngt_uqsd vcmpfalse_ossd vcmpneq_ossd vcmpge_oqsd vcmpgt_oqsd vcmptrue_ussd vcmpsd vcmpeq_osss vcmpeqss vcmplt_osss vcmpltss vcmple_osss vcmpless vcmpunord_qss vcmpunordss vcmpneq_uqss vcmpneqss vcmpnlt_usss vcmpnltss vcmpnle_usss vcmpnless vcmpord_qss vcmpordss vcmpeq_uqss vcmpnge_usss vcmpngess vcmpngt_usss vcmpngtss vcmpfalse_oqss vcmpfalsess vcmpneq_oqss vcmpge_osss vcmpgess vcmpgt_osss vcmpgtss vcmptrue_uqss vcmptruess vcmplt_oqss vcmple_oqss vcmpunord_sss vcmpneq_usss vcmpnlt_uqss vcmpnle_uqss vcmpord_sss vcmpeq_usss vcmpnge_uqss vcmpngt_uqss vcmpfalse_osss vcmpneq_osss vcmpge_oqss vcmpgt_oqss vcmptrue_usss vcmpss vcomisd vcomiss vcvtdq2pd vcvtdq2ps vcvtpd2dq vcvtpd2ps vcvtps2dq vcvtps2pd vcvtsd2si vcvtsd2ss vcvtsi2sd vcvtsi2ss vcvtss2sd vcvtss2si vcvttpd2dq vcvttps2dq vcvttsd2si vcvttss2si vdivpd vdivps vdivsd vdivss vdppd vdpps vextractf128 vextractps vhaddpd vhaddps vhsubpd vhsubps vinsertf128 vinsertps vlddqu vldqqu vldmxcsr vmaskmovdqu vmaskmovps vmaskmovpd vmaxpd vmaxps vmaxsd vmaxss vminpd vminps vminsd vminss vmovapd vmovaps vmovd vmovq vmovddup vmovdqa vmovqqa vmovdqu vmovqqu vmovhlps vmovhpd vmovhps vmovlhps vmovlpd vmovlps vmovmskpd vmovmskps vmovntdq vmovntqq vmovntdqa vmovntpd vmovntps vmovsd vmovshdup vmovsldup vmovss vmovupd vmovups vmpsadbw vmulpd vmulps vmulsd vmulss vorpd vorps vpabsb vpabsw vpabsd vpacksswb vpackssdw vpackuswb vpackusdw vpaddb vpaddw vpaddd vpaddq vpaddsb vpaddsw vpaddusb vpaddusw vpalignr vpand vpandn vpavgb vpavgw vpblendvb vpblendw vpcmpestri vpcmpestrm vpcmpistri vpcmpistrm vpcmpeqb vpcmpeqw vpcmpeqd vpcmpeqq vpcmpgtb vpcmpgtw vpcmpgtd vpcmpgtq vpermilpd vpermilps vperm2f128 vpextrb vpextrw vpextrd vpextrq vphaddw vphaddd vphaddsw vphminposuw vphsubw vphsubd vphsubsw vpinsrb vpinsrw vpinsrd vpinsrq vpmaddwd vpmaddubsw vpmaxsb vpmaxsw vpmaxsd vpmaxub vpmaxuw vpmaxud vpminsb vpminsw vpminsd vpminub vpminuw vpminud vpmovmskb vpmovsxbw vpmovsxbd vpmovsxbq vpmovsxwd vpmovsxwq vpmovsxdq vpmovzxbw vpmovzxbd vpmovzxbq vpmovzxwd vpmovzxwq vpmovzxdq vpmulhuw vpmulhrsw vpmulhw vpmullw vpmulld vpmuludq vpmuldq vpor vpsadbw vpshufb vpshufd vpshufhw vpshuflw vpsignb vpsignw vpsignd vpslldq vpsrldq vpsllw vpslld vpsllq vpsraw vpsrad vpsrlw vpsrld vpsrlq vptest vpsubb vpsubw vpsubd vpsubq vpsubsb vpsubsw vpsubusb vpsubusw vpunpckhbw vpunpckhwd vpunpckhdq vpunpckhqdq vpunpcklbw vpunpcklwd vpunpckldq vpunpcklqdq vpxor vrcpps vrcpss vrsqrtps vrsqrtss vroundpd vroundps vroundsd vroundss vshufpd vshufps vsqrtpd vsqrtps vsqrtsd vsqrtss vstmxcsr vsubpd vsubps vsubsd vsubss vtestps vtestpd vucomisd vucomiss vunpckhpd vunpckhps vunpcklpd vunpcklps vxorpd vxorps vzeroall vzeroupper pclmullqlqdq pclmulhqlqdq pclmullqhqdq pclmulhqhqdq pclmulqdq vpclmullqlqdq vpclmulhqlqdq vpclmullqhqdq vpclmulhqhqdq vpclmulqdq vfmadd132ps vfmadd132pd vfmadd312ps vfmadd312pd vfmadd213ps vfmadd213pd vfmadd123ps vfmadd123pd vfmadd231ps vfmadd231pd vfmadd321ps vfmadd321pd vfmaddsub132ps vfmaddsub132pd vfmaddsub312ps vfmaddsub312pd vfmaddsub213ps vfmaddsub213pd vfmaddsub123ps vfmaddsub123pd vfmaddsub231ps vfmaddsub231pd vfmaddsub321ps vfmaddsub321pd vfmsub132ps vfmsub132pd vfmsub312ps vfmsub312pd vfmsub213ps vfmsub213pd vfmsub123ps vfmsub123pd vfmsub231ps vfmsub231pd vfmsub321ps vfmsub321pd vfmsubadd132ps vfmsubadd132pd vfmsubadd312ps vfmsubadd312pd vfmsubadd213ps vfmsubadd213pd vfmsubadd123ps vfmsubadd123pd vfmsubadd231ps vfmsubadd231pd vfmsubadd321ps vfmsubadd321pd vfnmadd132ps vfnmadd132pd vfnmadd312ps vfnmadd312pd vfnmadd213ps vfnmadd213pd vfnmadd123ps vfnmadd123pd vfnmadd231ps vfnmadd231pd vfnmadd321ps vfnmadd321pd vfnmsub132ps vfnmsub132pd vfnmsub312ps vfnmsub312pd vfnmsub213ps vfnmsub213pd vfnmsub123ps vfnmsub123pd vfnmsub231ps vfnmsub231pd vfnmsub321ps vfnmsub321pd vfmadd132ss vfmadd132sd vfmadd312ss vfmadd312sd vfmadd213ss vfmadd213sd vfmadd123ss vfmadd123sd vfmadd231ss vfmadd231sd vfmadd321ss vfmadd321sd vfmsub132ss vfmsub132sd vfmsub312ss vfmsub312sd vfmsub213ss vfmsub213sd vfmsub123ss vfmsub123sd vfmsub231ss vfmsub231sd vfmsub321ss vfmsub321sd vfnmadd132ss vfnmadd132sd vfnmadd312ss vfnmadd312sd vfnmadd213ss vfnmadd213sd vfnmadd123ss vfnmadd123sd vfnmadd231ss vfnmadd231sd vfnmadd321ss vfnmadd321sd vfnmsub132ss vfnmsub132sd vfnmsub312ss vfnmsub312sd vfnmsub213ss vfnmsub213sd vfnmsub123ss vfnmsub123sd vfnmsub231ss vfnmsub231sd vfnmsub321ss vfnmsub321sd rdfsbase rdgsbase rdrand wrfsbase wrgsbase vcvtph2ps vcvtps2ph adcx adox rdseed clac stac xstore xcryptecb xcryptcbc xcryptctr xcryptcfb xcryptofb montmul xsha1 xsha256 llwpcb slwpcb lwpval lwpins vfmaddpd vfmaddps vfmaddsd vfmaddss vfmaddsubpd vfmaddsubps vfmsubaddpd vfmsubaddps vfmsubpd vfmsubps vfmsubsd vfmsubss vfnmaddpd vfnmaddps vfnmaddsd vfnmaddss vfnmsubpd vfnmsubps vfnmsubsd vfnmsubss vfrczpd vfrczps vfrczsd vfrczss vpcmov vpcomb vpcomd vpcomq vpcomub vpcomud vpcomuq vpcomuw vpcomw vphaddbd vphaddbq vphaddbw vphadddq vphaddubd vphaddubq vphaddubw vphaddudq vphadduwd vphadduwq vphaddwd vphaddwq vphsubbw vphsubdq vphsubwd vpmacsdd vpmacsdqh vpmacsdql vpmacssdd vpmacssdqh vpmacssdql vpmacsswd vpmacssww vpmacswd vpmacsww vpmadcsswd vpmadcswd vpperm vprotb vprotd vprotq vprotw vpshab vpshad vpshaq vpshaw vpshlb vpshld vpshlq vpshlw vbroadcasti128 vpblendd vpbroadcastb vpbroadcastw vpbroadcastd vpbroadcastq vpermd vpermpd vpermps vpermq vperm2i128 vextracti128 vinserti128 vpmaskmovd vpmaskmovq vpsllvd vpsllvq vpsravd vpsrlvd vpsrlvq vgatherdpd vgatherqpd vgatherdps vgatherqps vpgatherdd vpgatherqd vpgatherdq vpgatherqq xabort xbegin xend xtest andn bextr blci blcic blsi blsic blcfill blsfill blcmsk blsmsk blsr blcs bzhi mulx pdep pext rorx sarx shlx shrx tzcnt tzmsk t1mskc valignd valignq vblendmpd vblendmps vbroadcastf32x4 vbroadcastf64x4 vbroadcasti32x4 vbroadcasti64x4 vcompresspd vcompressps vcvtpd2udq vcvtps2udq vcvtsd2usi vcvtss2usi vcvttpd2udq vcvttps2udq vcvttsd2usi vcvttss2usi vcvtudq2pd vcvtudq2ps vcvtusi2sd vcvtusi2ss vexpandpd vexpandps vextractf32x4 vextractf64x4 vextracti32x4 vextracti64x4 vfixupimmpd vfixupimmps vfixupimmsd vfixupimmss vgetexppd vgetexpps vgetexpsd vgetexpss vgetmantpd vgetmantps vgetmantsd vgetmantss vinsertf32x4 vinsertf64x4 vinserti32x4 vinserti64x4 vmovdqa32 vmovdqa64 vmovdqu32 vmovdqu64 vpabsq vpandd vpandnd vpandnq vpandq vpblendmd vpblendmq vpcmpltd vpcmpled vpcmpneqd vpcmpnltd vpcmpnled vpcmpd vpcmpltq vpcmpleq vpcmpneqq vpcmpnltq vpcmpnleq vpcmpq vpcmpequd vpcmpltud vpcmpleud vpcmpnequd vpcmpnltud vpcmpnleud vpcmpud vpcmpequq vpcmpltuq vpcmpleuq vpcmpnequq vpcmpnltuq vpcmpnleuq vpcmpuq vpcompressd vpcompressq vpermi2d vpermi2pd vpermi2ps vpermi2q vpermt2d vpermt2pd vpermt2ps vpermt2q vpexpandd vpexpandq vpmaxsq vpmaxuq vpminsq vpminuq vpmovdb vpmovdw vpmovqb vpmovqd vpmovqw vpmovsdb vpmovsdw vpmovsqb vpmovsqd vpmovsqw vpmovusdb vpmovusdw vpmovusqb vpmovusqd vpmovusqw vpord vporq vprold vprolq vprolvd vprolvq vprord vprorq vprorvd vprorvq vpscatterdd vpscatterdq vpscatterqd vpscatterqq vpsraq vpsravq vpternlogd vpternlogq vptestmd vptestmq vptestnmd vptestnmq vpxord vpxorq vrcp14pd vrcp14ps vrcp14sd vrcp14ss vrndscalepd vrndscaleps vrndscalesd vrndscaless vrsqrt14pd vrsqrt14ps vrsqrt14sd vrsqrt14ss vscalefpd vscalefps vscalefsd vscalefss vscatterdpd vscatterdps vscatterqpd vscatterqps vshuff32x4 vshuff64x2 vshufi32x4 vshufi64x2 kandnw kandw kmovw knotw kortestw korw kshiftlw kshiftrw kunpckbw kxnorw kxorw vpbroadcastmb2q vpbroadcastmw2d vpconflictd vpconflictq vplzcntd vplzcntq vexp2pd vexp2ps vrcp28pd vrcp28ps vrcp28sd vrcp28ss vrsqrt28pd vrsqrt28ps vrsqrt28sd vrsqrt28ss vgatherpf0dpd vgatherpf0dps vgatherpf0qpd vgatherpf0qps vgatherpf1dpd vgatherpf1dps vgatherpf1qpd vgatherpf1qps vscatterpf0dpd vscatterpf0dps vscatterpf0qpd vscatterpf0qps vscatterpf1dpd vscatterpf1dps vscatterpf1qpd vscatterpf1qps prefetchwt1 bndmk bndcl bndcu bndcn bndmov bndldx bndstx sha1rnds4 sha1nexte sha1msg1 sha1msg2 sha256rnds2 sha256msg1 sha256msg2 hint_nop0 hint_nop1 hint_nop2 hint_nop3 hint_nop4 hint_nop5 hint_nop6 hint_nop7 hint_nop8 hint_nop9 hint_nop10 hint_nop11 hint_nop12 hint_nop13 hint_nop14 hint_nop15 hint_nop16 hint_nop17 hint_nop18 hint_nop19 hint_nop20 hint_nop21 hint_nop22 hint_nop23 hint_nop24 hint_nop25 hint_nop26 hint_nop27 hint_nop28 hint_nop29 hint_nop30 hint_nop31 hint_nop32 hint_nop33 hint_nop34 hint_nop35 hint_nop36 hint_nop37 hint_nop38 hint_nop39 hint_nop40 hint_nop41 hint_nop42 hint_nop43 hint_nop44 hint_nop45 hint_nop46 hint_nop47 hint_nop48 hint_nop49 hint_nop50 hint_nop51 hint_nop52 hint_nop53 hint_nop54 hint_nop55 hint_nop56 hint_nop57 hint_nop58 hint_nop59 hint_nop60 hint_nop61 hint_nop62 hint_nop63",
			built_in: "ip eip rip al ah bl bh cl ch dl dh sil dil bpl spl r8b r9b r10b r11b r12b r13b r14b r15b ax bx cx dx si di bp sp r8w r9w r10w r11w r12w r13w r14w r15w eax ebx ecx edx esi edi ebp esp eip r8d r9d r10d r11d r12d r13d r14d r15d rax rbx rcx rdx rsi rdi rbp rsp r8 r9 r10 r11 r12 r13 r14 r15 cs ds es fs gs ss st st0 st1 st2 st3 st4 st5 st6 st7 mm0 mm1 mm2 mm3 mm4 mm5 mm6 mm7 xmm0  xmm1  xmm2  xmm3  xmm4  xmm5  xmm6  xmm7  xmm8  xmm9 xmm10  xmm11 xmm12 xmm13 xmm14 xmm15 xmm16 xmm17 xmm18 xmm19 xmm20 xmm21 xmm22 xmm23 xmm24 xmm25 xmm26 xmm27 xmm28 xmm29 xmm30 xmm31 ymm0  ymm1  ymm2  ymm3  ymm4  ymm5  ymm6  ymm7  ymm8  ymm9 ymm10  ymm11 ymm12 ymm13 ymm14 ymm15 ymm16 ymm17 ymm18 ymm19 ymm20 ymm21 ymm22 ymm23 ymm24 ymm25 ymm26 ymm27 ymm28 ymm29 ymm30 ymm31 zmm0  zmm1  zmm2  zmm3  zmm4  zmm5  zmm6  zmm7  zmm8  zmm9 zmm10  zmm11 zmm12 zmm13 zmm14 zmm15 zmm16 zmm17 zmm18 zmm19 zmm20 zmm21 zmm22 zmm23 zmm24 zmm25 zmm26 zmm27 zmm28 zmm29 zmm30 zmm31 k0 k1 k2 k3 k4 k5 k6 k7 bnd0 bnd1 bnd2 bnd3 cr0 cr1 cr2 cr3 cr4 cr8 dr0 dr1 dr2 dr3 dr8 tr3 tr4 tr5 tr6 tr7 r0 r1 r2 r3 r4 r5 r6 r7 r0b r1b r2b r3b r4b r5b r6b r7b r0w r1w r2w r3w r4w r5w r6w r7w r0d r1d r2d r3d r4d r5d r6d r7d r0h r1h r2h r3h r0l r1l r2l r3l r4l r5l r6l r7l r8l r9l r10l r11l r12l r13l r14l r15l db dw dd dq dt ddq do dy dz resb resw resd resq rest resdq reso resy resz incbin equ times byte word dword qword nosplit rel abs seg wrt strict near far a32 ptr",
			meta: "%define %xdefine %+ %undef %defstr %deftok %assign %strcat %strlen %substr %rotate %elif %else %endif %if %ifmacro %ifctx %ifidn %ifidni %ifid %ifnum %ifstr %iftoken %ifempty %ifenv %error %warning %fatal %rep %endrep %include %push %pop %repl %pathsearch %depend %use %arg %stacksize %local %line %comment %endcomment .nolist __FILE__ __LINE__ __SECT__  __BITS__ __OUTPUT_FORMAT__ __DATE__ __TIME__ __DATE_NUM__ __TIME_NUM__ __UTC_DATE__ __UTC_TIME__ __UTC_DATE_NUM__ __UTC_TIME_NUM__  __PASS__ struc endstruc istruc at iend align alignb sectalign daz nodaz up down zero default option assume public bits use16 use32 use64 default section segment absolute extern global common cpu float __utf16__ __utf16le__ __utf16be__ __utf32__ __utf32le__ __utf32be__ __float8__ __float16__ __float32__ __float64__ __float80m__ __float80e__ __float128l__ __float128h__ __Infinity__ __QNaN__ __SNaN__ Inf NaN QNaN SNaN float8 float16 float32 float64 float80m float80e float128l float128h __FLOAT_DAZ__ __FLOAT_ROUND__ __FLOAT__"
		},
		c: [a.C(";", "$", {
			r: 0
		}), {
			cN: "number",
			v: [{
				b: "\\b(?:([0-9][0-9_]*)?\\.[0-9_]*(?:[eE][+-]?[0-9_]+)?|(0[Xx])?[0-9][0-9_]*\\.?[0-9_]*(?:[pP](?:[+-]?[0-9_]+)?)?)\\b",
				r: 0
			}, {
				b: "\\$[0-9][0-9A-Fa-f]*",
				r: 0
			}, {
				b: "\\b(?:[0-9A-Fa-f][0-9A-Fa-f_]*[Hh]|[0-9][0-9_]*[DdTt]?|[0-7][0-7_]*[QqOo]|[0-1][0-1_]*[BbYy])\\b"
			}, {
				b: "\\b(?:0[Xx][0-9A-Fa-f_]+|0[DdTt][0-9_]+|0[QqOo][0-7_]+|0[BbYy][0-1_]+)\\b"
			}]
		}, a.QSM, {
			cN: "string",
			v: [{
				b: "'",
				e: "[^\\\\]'"
			}, {
				b: "`",
				e: "[^\\\\]`"
			}],
			r: 0
		}, {
			cN: "symbol",
			v: [{
				b: "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)"
			}, {
				b: "^\\s*%%[A-Za-z0-9_$#@~.?]*:"
			}],
			r: 0
		}, {
			cN: "subst",
			b: "%[0-9]+",
			r: 0
		}, {
			cN: "subst",
			b: "%!S+",
			r: 0
		}, {
			cN: "meta",
			b: /^\s*\.[\w_-]+/
		}]
	}
}), hljs.registerLanguage("roboconf", function(a) {
	var b = "[a-zA-Z-_][^\\n{]+\\{",
		c = {
			cN: "attribute",
			b: /[a-zA-Z-_]+/,
			e: /\s*:/,
			eE: !0,
			starts: {
				e: ";",
				r: 0,
				c: [{
					cN: "variable",
					b: /\.[a-zA-Z-_]+/
				}, {
					cN: "keyword",
					b: /\(optional\)/
				}]
			}
		};
	return {
		aliases: ["graph", "instances"],
		cI: !0,
		k: "import",
		c: [{
			b: "^facet " + b,
			e: "}",
			k: "facet",
			c: [c, a.HCM]
		}, {
			b: "^\\s*instance of " + b,
			e: "}",
			k: "name count channels instance-data instance-state instance of",
			i: /\S/,
			c: ["self", c, a.HCM]
		}, {
			b: "^" + b,
			e: "}",
			c: [c, a.HCM]
		}, a.HCM]
	}
}), hljs.registerLanguage("ada", function(a) {
	var b = "\\d(_|\\d)*",
		c = "[eE][-+]?" + b,
		d = b + "(\\." + b + ")?(" + c + ")?",
		e = "\\w+",
		f = b + "#" + e + "(\\." + e + ")?#(" + c + ")?",
		g = "\\b(" + f + "|" + d + ")",
		h = "[A-Za-z](_?[A-Za-z0-9.])*",
		i = "[]{}%#'\"",
		j = a.C("--", "$"),
		k = {
			b: "\\s+:\\s+",
			e: "\\s*(:=|;|\\)|=>|$)",
			i: i,
			c: [{
				bK: "loop for declare others",
				endsParent: !0
			}, {
				cN: "keyword",
				bK: "not null constant access function procedure in out aliased exception"
			}, {
				cN: "type",
				b: h,
				endsParent: !0,
				r: 0
			}]
		};
	return {
		cI: !0,
		k: {
			keyword: "abort else new return abs elsif not reverse abstract end accept entry select access exception of separate aliased exit or some all others subtype and for out synchronized array function overriding at tagged generic package task begin goto pragma terminate body private then if procedure type case in protected constant interface is raise use declare range delay limited record when delta loop rem while digits renames with do mod requeue xor",
			literal: "True False"
		},
		c: [j, {
			cN: "string",
			b: /"/,
			e: /"/,
			c: [{
				b: /""/,
				r: 0
			}]
		}, {
			cN: "string",
			b: /'.'/
		}, {
			cN: "number",
			b: g,
			r: 0
		}, {
			cN: "symbol",
			b: "'" + h
		}, {
			cN: "title",
			b: "(\\bwith\\s+)?(\\bprivate\\s+)?\\bpackage\\s+(\\bbody\\s+)?",
			e: "(is|$)",
			k: "package body",
			eB: !0,
			eE: !0,
			i: i
		}, {
			b: "(\\b(with|overriding)\\s+)?\\b(function|procedure)\\s+",
			e: "(\\bis|\\bwith|\\brenames|\\)\\s*;)",
			k: "overriding function procedure with is renames return",
			rB: !0,
			c: [j, {
				cN: "title",
				b: "(\\bwith\\s+)?\\b(function|procedure)\\s+",
				e: "(\\(|\\s+|$)",
				eB: !0,
				eE: !0,
				i: i
			}, k, {
				cN: "type",
				b: "\\breturn\\s+",
				e: "(\\s+|;|$)",
				k: "return",
				eB: !0,
				eE: !0,
				endsParent: !0,
				i: i
			}]
		}, {
			cN: "type",
			b: "\\b(sub)?type\\s+",
			e: "\\s+",
			k: "type",
			eB: !0,
			i: i
		}, k]
	}
}), hljs.registerLanguage("fix", function(a) {
	return {
		c: [{
			b: /[^\u2401\u0001]+/,
			e: /[\u2401\u0001]/,
			eE: !0,
			rB: !0,
			rE: !1,
			c: [{
				b: /([^\u2401\u0001=]+)/,
				e: /=([^\u2401\u0001=]+)/,
				rE: !0,
				rB: !1,
				cN: "attr"
			}, {
				b: /=/,
				e: /([\u2401\u0001])/,
				eE: !0,
				eB: !0,
				cN: "string"
			}]
		}],
		cI: !0
	}
}), hljs.registerLanguage("xl", function(a) {
	var b = "ObjectLoader Animate MovieCredits Slides Filters Shading Materials LensFlare Mapping VLCAudioVideo StereoDecoder PointCloud NetworkAccess RemoteControl RegExp ChromaKey Snowfall NodeJS Speech Charts",
		c = {
			keyword: "if then else do while until for loop import with is as where when by data constant integer real text name boolean symbol infix prefix postfix block tree",
			literal: "true false nil",
			built_in: "in mod rem and or xor not abs sign floor ceil sqrt sin cos tan asin acos atan exp expm1 log log2 log10 log1p pi at text_length text_range text_find text_replace contains page slide basic_slide title_slide title subtitle fade_in fade_out fade_at clear_color color line_color line_width texture_wrap texture_transform texture scale_?x scale_?y scale_?z? translate_?x translate_?y translate_?z? rotate_?x rotate_?y rotate_?z? rectangle circle ellipse sphere path line_to move_to quad_to curve_to theme background contents locally time mouse_?x mouse_?y mouse_buttons " + b
		},
		d = {
			cN: "string",
			b: '"',
			e: '"',
			i: "\\n"
		},
		e = {
			cN: "string",
			b: "'",
			e: "'",
			i: "\\n"
		},
		f = {
			cN: "string",
			b: "<<",
			e: ">>"
		},
		g = {
			cN: "number",
			b: "[0-9]+#[0-9A-Z_]+(\\.[0-9-A-Z_]+)?#?([Ee][+-]?[0-9]+)?"
		},
		h = {
			bK: "import",
			e: "$",
			k: c,
			c: [d]
		},
		i = {
			cN: "function",
			b: /[a-z][^\n]*->/,
			rB: !0,
			e: /->/,
			c: [a.inherit(a.TM, {
				starts: {
					eW: !0,
					k: c
				}
			})]
		};
	return {
		aliases: ["tao"],
		l: /[a-zA-Z][a-zA-Z0-9_?]*/,
		k: c,
		c: [a.CLCM, a.CBCM, d, e, f, i, h, g, a.NM]
	}
}), hljs.registerLanguage("erlang", function(a) {
	var b = "[a-z'][a-zA-Z0-9_']*",
		c = "(" + b + ":" + b + "|" + b + ")",
		d = {
			keyword: "after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",
			literal: "false true"
		},
		e = a.C("%", "$"),
		f = {
			cN: "number",
			b: "\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",
			r: 0
		},
		g = {
			b: "fun\\s+" + b + "/\\d+"
		},
		h = {
			b: c + "\\(",
			e: "\\)",
			rB: !0,
			r: 0,
			c: [{
				b: c,
				r: 0
			}, {
				b: "\\(",
				e: "\\)",
				eW: !0,
				rE: !0,
				r: 0
			}]
		},
		i = {
			b: "{",
			e: "}",
			r: 0
		},
		j = {
			b: "\\b_([A-Z][A-Za-z0-9_]*)?",
			r: 0
		},
		k = {
			b: "[A-Z][a-zA-Z0-9_]*",
			r: 0
		},
		l = {
			b: "#" + a.UIR,
			r: 0,
			rB: !0,
			c: [{
				b: "#" + a.UIR,
				r: 0
			}, {
				b: "{",
				e: "}",
				r: 0
			}]
		},
		m = {
			bK: "fun receive if try case",
			e: "end",
			k: d
		};
	m.c = [e, g, a.inherit(a.ASM, {
		cN: ""
	}), m, h, a.QSM, f, i, j, k, l];
	var n = [e, g, m, h, a.QSM, f, i, j, k, l];
	h.c[1].c = n, i.c = n, l.c[1].c = n;
	var o = {
		cN: "params",
		b: "\\(",
		e: "\\)",
		c: n
	};
	return {
		aliases: ["erl"],
		k: d,
		i: "(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",
		c: [{
			cN: "function",
			b: "^" + b + "\\s*\\(",
			e: "->",
			rB: !0,
			i: "\\(|#|//|/\\*|\\\\|:|;",
			c: [o, a.inherit(a.TM, {
				b: b
			})],
			starts: {
				e: ";|\\.",
				k: d,
				c: n
			}
		}, e, {
			b: "^-",
			e: "\\.",
			r: 0,
			eE: !0,
			rB: !0,
			l: "-" + a.IR,
			k: "-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn -import -include -include_lib -compile -define -else -endif -file -behaviour -behavior -spec",
			c: [o]
		}, f, a.QSM, l, j, k, i, {
			b: /\.$/
		}]
	}
}), hljs.registerLanguage("handlebars", function(a) {
	var b = {
		"builtin-name": "each in with if else unless bindattr action collection debugger log outlet template unbound view yield"
	};
	return {
		aliases: ["hbs", "html.hbs", "html.handlebars"],
		cI: !0,
		sL: "xml",
		c: [a.C("{{!(--)?", "(--)?}}"), {
			cN: "template-tag",
			b: /\{\{[#\/]/,
			e: /\}\}/,
			c: [{
				cN: "name",
				b: /[a-zA-Z\.-]+/,
				k: b,
				starts: {
					eW: !0,
					r: 0,
					c: [a.QSM]
				}
			}]
		}, {
			cN: "template-variable",
			b: /\{\{/,
			e: /\}\}/,
			k: b
		}]
	}
}), hljs.registerLanguage("elm", function(a) {
	var b = {
			v: [a.C("--", "$"), a.C("{-", "-}", {
				c: ["self"]
			})]
		},
		c = {
			cN: "type",
			b: "\\b[A-Z][\\w']*",
			r: 0
		},
		d = {
			b: "\\(",
			e: "\\)",
			i: '"',
			c: [{
				cN: "type",
				b: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"
			}, b]
		},
		e = {
			b: "{",
			e: "}",
			c: d.c
		};
	return {
		k: "let in if then else case of where module import exposing type alias as infix infixl infixr port effect command subscription",
		c: [{
			bK: "port effect module",
			e: "exposing",
			k: "port effect module where command subscription exposing",
			c: [d, b],
			i: "\\W\\.|;"
		}, {
			b: "import",
			e: "$",
			k: "import as exposing",
			c: [d, b],
			i: "\\W\\.|;"
		}, {
			b: "type",
			e: "$",
			k: "type alias",
			c: [c, d, e, b]
		}, {
			bK: "infix infixl infixr",
			e: "$",
			c: [a.CNM, b]
		}, {
			b: "port",
			e: "$",
			k: "port",
			c: [b]
		}, a.QSM, a.CNM, c, a.inherit(a.TM, {
			b: "^[_a-z][\\w']*"
		}), b, {
			b: "->|<-"
		}]
	}
}), hljs.registerLanguage("zephir", function(a) {
	var b = {
			cN: "string",
			c: [a.BE],
			v: [{
				b: 'b"',
				e: '"'
			}, {
				b: "b'",
				e: "'"
			}, a.inherit(a.ASM, {
				i: null
			}), a.inherit(a.QSM, {
				i: null
			})]
		},
		c = {
			v: [a.BNM, a.CNM]
		};
	return {
		aliases: ["zep"],
		cI: !0,
		k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var let while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally int uint long ulong char uchar double float bool boolean stringlikely unlikely",
		c: [a.CLCM, a.HCM, a.C("/\\*", "\\*/", {
			c: [{
				cN: "doctag",
				b: "@[A-Za-z]+"
			}]
		}), a.C("__halt_compiler.+?;", !1, {
			eW: !0,
			k: "__halt_compiler",
			l: a.UIR
		}), {
			cN: "string",
			b: "<<<['\"]?\\w+['\"]?$",
			e: "^\\w+;",
			c: [a.BE]
		}, {
			b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
		}, {
			cN: "function",
			bK: "function",
			e: /[;{]/,
			eE: !0,
			i: "\\$|\\[|%",
			c: [a.UTM, {
				cN: "params",
				b: "\\(",
				e: "\\)",
				c: ["self", a.CBCM, b, c]
			}]
		}, {
			cN: "class",
			bK: "class interface",
			e: "{",
			eE: !0,
			i: /[:\(\$"]/,
			c: [{
				bK: "extends implements"
			}, a.UTM]
		}, {
			bK: "namespace",
			e: ";",
			i: /[\.']/,
			c: [a.UTM]
		}, {
			bK: "use",
			e: ";",
			c: [a.UTM]
		}, {
			b: "=>"
		}, b, c]
	}
}), hljs.registerLanguage("moonscript", function(a) {
	var b = {
			keyword: "if then not for in while do return else elseif break continue switch and or unless when class extends super local import export from using",
			literal: "true false nil",
			built_in: "_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"
		},
		c = "[A-Za-z$_][0-9A-Za-z$_]*",
		d = {
			cN: "subst",
			b: /#\{/,
			e: /}/,
			k: b
		},
		e = [a.inherit(a.CNM, {
			starts: {
				e: "(\\s*/)?",
				r: 0
			}
		}), {
			cN: "string",
			v: [{
				b: /'/,
				e: /'/,
				c: [a.BE]
			}, {
				b: /"/,
				e: /"/,
				c: [a.BE, d]
			}]
		}, {
			cN: "built_in",
			b: "@__" + a.IR
		}, {
			b: "@" + a.IR
		}, {
			b: a.IR + "\\\\" + a.IR
		}];
	d.c = e;
	var f = a.inherit(a.TM, {
			b: c
		}),
		g = "(\\(.*\\))?\\s*\\B[-=]>",
		h = {
			cN: "params",
			b: "\\([^\\(]",
			rB: !0,
			c: [{
				b: /\(/,
				e: /\)/,
				k: b,
				c: ["self"].concat(e)
			}]
		};
	return {
		aliases: ["moon"],
		k: b,
		i: /\/\*/,
		c: e.concat([a.C("--", "$"), {
			cN: "function",
			b: "^\\s*" + c + "\\s*=\\s*" + g,
			e: "[-=]>",
			rB: !0,
			c: [f, h]
		}, {
			b: /[\(,:=]\s*/,
			r: 0,
			c: [{
				cN: "function",
				b: g,
				e: "[-=]>",
				rB: !0,
				c: [h]
			}]
		}, {
			cN: "class",
			bK: "class",
			e: "$",
			i: /[:="\[\]]/,
			c: [{
				bK: "extends",
				eW: !0,
				i: /[:="\[\]]/,
				c: [f]
			}, f]
		}, {
			cN: "name",
			b: c + ":",
			e: ":",
			rB: !0,
			rE: !0,
			r: 0
		}])
	}
}), hljs.registerLanguage("axapta", function(a) {
	return {
		k: "false int abstract private char boolean static null if for true while long throw finally protected final return void enum else break new catch byte super case short default double public try this switch continue reverse firstfast firstonly forupdate nofetch sum avg minof maxof count order group by asc desc index hint like dispaly edit client server ttsbegin ttscommit str real date container anytype common div mod",
		c: [a.CLCM, a.CBCM, a.ASM, a.QSM, a.CNM, {
			cN: "meta",
			b: "#",
			e: "$"
		}, {
			cN: "class",
			bK: "class interface",
			e: "{",
			eE: !0,
			i: ":",
			c: [{
				bK: "extends implements"
			}, a.UTM]
		}]
	}
}), hljs.registerLanguage("maxima", function(a) {
	var b = "if then else elseif for thru do while unless step in and or not",
		c = "true false unknown inf minf ind und %e %i %pi %phi %gamma",
		d = " abasep abs absint absolute_real_time acos acosh acot acoth acsc acsch activate addcol add_edge add_edges addmatrices addrow add_vertex add_vertices adjacency_matrix adjoin adjoint af agd airy airy_ai airy_bi airy_dai airy_dbi algsys alg_type alias allroots alphacharp alphanumericp amortization %and annuity_fv annuity_pv antid antidiff AntiDifference append appendfile apply apply1 apply2 applyb1 apropos args arit_amortization arithmetic arithsum array arrayapply arrayinfo arraymake arraysetapply ascii asec asech asin asinh askinteger asksign assoc assoc_legendre_p assoc_legendre_q assume assume_external_byte_order asympa at atan atan2 atanh atensimp atom atvalue augcoefmatrix augmented_lagrangian_method av average_degree backtrace bars barsplot barsplot_description base64 base64_decode bashindices batch batchload bc2 bdvac belln benefit_cost bern bernpoly bernstein_approx bernstein_expand bernstein_poly bessel bessel_i bessel_j bessel_k bessel_simplify bessel_y beta beta_incomplete beta_incomplete_generalized beta_incomplete_regularized bezout bfallroots bffac bf_find_root bf_fmin_cobyla bfhzeta bfloat bfloatp bfpsi bfpsi0 bfzeta biconnected_components bimetric binomial bipartition block blockmatrixp bode_gain bode_phase bothcoef box boxplot boxplot_description break bug_report build_info|10 buildq build_sample burn cabs canform canten cardinality carg cartan cartesian_product catch cauchy_matrix cbffac cdf_bernoulli cdf_beta cdf_binomial cdf_cauchy cdf_chi2 cdf_continuous_uniform cdf_discrete_uniform cdf_exp cdf_f cdf_gamma cdf_general_finite_discrete cdf_geometric cdf_gumbel cdf_hypergeometric cdf_laplace cdf_logistic cdf_lognormal cdf_negative_binomial cdf_noncentral_chi2 cdf_noncentral_student_t cdf_normal cdf_pareto cdf_poisson cdf_rank_sum cdf_rayleigh cdf_signed_rank cdf_student_t cdf_weibull cdisplay ceiling central_moment cequal cequalignore cf cfdisrep cfexpand cgeodesic cgreaterp cgreaterpignore changename changevar chaosgame charat charfun charfun2 charlist charp charpoly chdir chebyshev_t chebyshev_u checkdiv check_overlaps chinese cholesky christof chromatic_index chromatic_number cint circulant_graph clear_edge_weight clear_rules clear_vertex_label clebsch_gordan clebsch_graph clessp clesspignore close closefile cmetric coeff coefmatrix cograd col collapse collectterms columnop columnspace columnswap columnvector combination combine comp2pui compare compfile compile compile_file complement_graph complete_bipartite_graph complete_graph complex_number_p components compose_functions concan concat conjugate conmetderiv connected_components connect_vertices cons constant constantp constituent constvalue cont2part content continuous_freq contortion contour_plot contract contract_edge contragrad contrib_ode convert coord copy copy_file copy_graph copylist copymatrix cor cos cosh cot coth cov cov1 covdiff covect covers crc24sum create_graph create_list csc csch csetup cspline ctaylor ct_coordsys ctransform ctranspose cube_graph cuboctahedron_graph cunlisp cv cycle_digraph cycle_graph cylindrical days360 dblint deactivate declare declare_constvalue declare_dimensions declare_fundamental_dimensions declare_fundamental_units declare_qty declare_translated declare_unit_conversion declare_units declare_weights decsym defcon define define_alt_display define_variable defint defmatch defrule defstruct deftaylor degree_sequence del delete deleten delta demo demoivre denom depends derivdegree derivlist describe desolve determinant dfloat dgauss_a dgauss_b dgeev dgemm dgeqrf dgesv dgesvd diag diagmatrix diag_matrix diagmatrixp diameter diff digitcharp dimacs_export dimacs_import dimension dimensionless dimensions dimensions_as_list direct directory discrete_freq disjoin disjointp disolate disp dispcon dispform dispfun dispJordan display disprule dispterms distrib divide divisors divsum dkummer_m dkummer_u dlange dodecahedron_graph dotproduct dotsimp dpart draw draw2d draw3d drawdf draw_file draw_graph dscalar echelon edge_coloring edge_connectivity edges eigens_by_jacobi eigenvalues eigenvectors eighth einstein eivals eivects elapsed_real_time elapsed_run_time ele2comp ele2polynome ele2pui elem elementp elevation_grid elim elim_allbut eliminate eliminate_using ellipse elliptic_e elliptic_ec elliptic_eu elliptic_f elliptic_kc elliptic_pi ematrix empty_graph emptyp endcons entermatrix entertensor entier equal equalp equiv_classes erf erfc erf_generalized erfi errcatch error errormsg errors euler ev eval_string evenp every evolution evolution2d evundiff example exp expand expandwrt expandwrt_factored expint expintegral_chi expintegral_ci expintegral_e expintegral_e1 expintegral_ei expintegral_e_simplify expintegral_li expintegral_shi expintegral_si explicit explose exponentialize express expt exsec extdiff extract_linear_equations extremal_subset ezgcd %f f90 facsum factcomb factor factorfacsum factorial factorout factorsum facts fast_central_elements fast_linsolve fasttimes featurep fernfale fft fib fibtophi fifth filename_merge file_search file_type fillarray findde find_root find_root_abs find_root_error find_root_rel first fix flatten flength float floatnump floor flower_snark flush flush1deriv flushd flushnd flush_output fmin_cobyla forget fortran fourcos fourexpand fourier fourier_elim fourint fourintcos fourintsin foursimp foursin fourth fposition frame_bracket freeof freshline fresnel_c fresnel_s from_adjacency_matrix frucht_graph full_listify fullmap fullmapl fullratsimp fullratsubst fullsetify funcsolve fundamental_dimensions fundamental_units fundef funmake funp fv g0 g1 gamma gamma_greek gamma_incomplete gamma_incomplete_generalized gamma_incomplete_regularized gauss gauss_a gauss_b gaussprob gcd gcdex gcdivide gcfac gcfactor gd generalized_lambert_w genfact gen_laguerre genmatrix gensym geo_amortization geo_annuity_fv geo_annuity_pv geomap geometric geometric_mean geosum get getcurrentdirectory get_edge_weight getenv get_lu_factors get_output_stream_string get_pixel get_plot_option get_tex_environment get_tex_environment_default get_vertex_label gfactor gfactorsum ggf girth global_variances gn gnuplot_close gnuplot_replot gnuplot_reset gnuplot_restart gnuplot_start go Gosper GosperSum gr2d gr3d gradef gramschmidt graph6_decode graph6_encode graph6_export graph6_import graph_center graph_charpoly graph_eigenvalues graph_flow graph_order graph_periphery graph_product graph_size graph_union great_rhombicosidodecahedron_graph great_rhombicuboctahedron_graph grid_graph grind grobner_basis grotzch_graph hamilton_cycle hamilton_path hankel hankel_1 hankel_2 harmonic harmonic_mean hav heawood_graph hermite hessian hgfred hilbertmap hilbert_matrix hipow histogram histogram_description hodge horner hypergeometric i0 i1 %ibes ic1 ic2 ic_convert ichr1 ichr2 icosahedron_graph icosidodecahedron_graph icurvature ident identfor identity idiff idim idummy ieqn %if ifactors iframes ifs igcdex igeodesic_coords ilt image imagpart imetric implicit implicit_derivative implicit_plot indexed_tensor indices induced_subgraph inferencep inference_result infix info_display init_atensor init_ctensor in_neighbors innerproduct inpart inprod inrt integerp integer_partitions integrate intersect intersection intervalp intopois intosum invariant1 invariant2 inverse_fft inverse_jacobi_cd inverse_jacobi_cn inverse_jacobi_cs inverse_jacobi_dc inverse_jacobi_dn inverse_jacobi_ds inverse_jacobi_nc inverse_jacobi_nd inverse_jacobi_ns inverse_jacobi_sc inverse_jacobi_sd inverse_jacobi_sn invert invert_by_adjoint invert_by_lu inv_mod irr is is_biconnected is_bipartite is_connected is_digraph is_edge_in_graph is_graph is_graph_or_digraph ishow is_isomorphic isolate isomorphism is_planar isqrt isreal_p is_sconnected is_tree is_vertex_in_graph items_inference %j j0 j1 jacobi jacobian jacobi_cd jacobi_cn jacobi_cs jacobi_dc jacobi_dn jacobi_ds jacobi_nc jacobi_nd jacobi_ns jacobi_p jacobi_sc jacobi_sd jacobi_sn JF jn join jordan julia julia_set julia_sin %k kdels kdelta kill killcontext kostka kron_delta kronecker_product kummer_m kummer_u kurtosis kurtosis_bernoulli kurtosis_beta kurtosis_binomial kurtosis_chi2 kurtosis_continuous_uniform kurtosis_discrete_uniform kurtosis_exp kurtosis_f kurtosis_gamma kurtosis_general_finite_discrete kurtosis_geometric kurtosis_gumbel kurtosis_hypergeometric kurtosis_laplace kurtosis_logistic kurtosis_lognormal kurtosis_negative_binomial kurtosis_noncentral_chi2 kurtosis_noncentral_student_t kurtosis_normal kurtosis_pareto kurtosis_poisson kurtosis_rayleigh kurtosis_student_t kurtosis_weibull label labels lagrange laguerre lambda lambert_w laplace laplacian_matrix last lbfgs lc2kdt lcharp lc_l lcm lc_u ldefint ldisp ldisplay legendre_p legendre_q leinstein length let letrules letsimp levi_civita lfreeof lgtreillis lhs li liediff limit Lindstedt linear linearinterpol linear_program linear_regression line_graph linsolve listarray list_correlations listify list_matrix_entries list_nc_monomials listoftens listofvars listp lmax lmin load loadfile local locate_matrix_entry log logcontract log_gamma lopow lorentz_gauge lowercasep lpart lratsubst lreduce lriemann lsquares_estimates lsquares_estimates_approximate lsquares_estimates_exact lsquares_mse lsquares_residual_mse lsquares_residuals lsum ltreillis lu_backsub lucas lu_factor %m macroexpand macroexpand1 make_array makebox makefact makegamma make_graph make_level_picture makelist makeOrders make_poly_continent make_poly_country make_polygon make_random_state make_rgb_picture makeset make_string_input_stream make_string_output_stream make_transform mandelbrot mandelbrot_set map mapatom maplist matchdeclare matchfix mat_cond mat_fullunblocker mat_function mathml_display mat_norm matrix matrixmap matrixp matrix_size mattrace mat_trace mat_unblocker max max_clique max_degree max_flow maximize_lp max_independent_set max_matching maybe md5sum mean mean_bernoulli mean_beta mean_binomial mean_chi2 mean_continuous_uniform mean_deviation mean_discrete_uniform mean_exp mean_f mean_gamma mean_general_finite_discrete mean_geometric mean_gumbel mean_hypergeometric mean_laplace mean_logistic mean_lognormal mean_negative_binomial mean_noncentral_chi2 mean_noncentral_student_t mean_normal mean_pareto mean_poisson mean_rayleigh mean_student_t mean_weibull median median_deviation member mesh metricexpandall mgf1_sha1 min min_degree min_edge_cut minfactorial minimalPoly minimize_lp minimum_spanning_tree minor minpack_lsquares minpack_solve min_vertex_cover min_vertex_cut mkdir mnewton mod mode_declare mode_identity ModeMatrix moebius mon2schur mono monomial_dimensions multibernstein_poly multi_display_for_texinfo multi_elem multinomial multinomial_coeff multi_orbit multiplot_mode multi_pui multsym multthru mycielski_graph nary natural_unit nc_degree ncexpt ncharpoly negative_picture neighbors new newcontext newdet new_graph newline newton new_variable next_prime nicedummies niceindices ninth nofix nonarray noncentral_moment nonmetricity nonnegintegerp nonscalarp nonzeroandfreeof notequal nounify nptetrad npv nroots nterms ntermst nthroot nullity nullspace num numbered_boundaries numberp number_to_octets num_distinct_partitions numerval numfactor num_partitions nusum nzeta nzetai nzetar octets_to_number octets_to_oid odd_girth oddp ode2 ode_check odelin oid_to_octets op opena opena_binary openr openr_binary openw openw_binary operatorp opsubst optimize %or orbit orbits ordergreat ordergreatp orderless orderlessp orthogonal_complement orthopoly_recur orthopoly_weight outermap out_neighbors outofpois pade parabolic_cylinder_d parametric parametric_surface parg parGosper parse_string parse_timedate part part2cont partfrac partition partition_set partpol path_digraph path_graph pathname_directory pathname_name pathname_type pdf_bernoulli pdf_beta pdf_binomial pdf_cauchy pdf_chi2 pdf_continuous_uniform pdf_discrete_uniform pdf_exp pdf_f pdf_gamma pdf_general_finite_discrete pdf_geometric pdf_gumbel pdf_hypergeometric pdf_laplace pdf_logistic pdf_lognormal pdf_negative_binomial pdf_noncentral_chi2 pdf_noncentral_student_t pdf_normal pdf_pareto pdf_poisson pdf_rank_sum pdf_rayleigh pdf_signed_rank pdf_student_t pdf_weibull pearson_skewness permanent permut permutation permutations petersen_graph petrov pickapart picture_equalp picturep piechart piechart_description planar_embedding playback plog plot2d plot3d plotdf ploteq plsquares pochhammer points poisdiff poisexpt poisint poismap poisplus poissimp poissubst poistimes poistrim polar polarform polartorect polar_to_xy poly_add poly_buchberger poly_buchberger_criterion poly_colon_ideal poly_content polydecomp poly_depends_p poly_elimination_ideal poly_exact_divide poly_expand poly_expt poly_gcd polygon poly_grobner poly_grobner_equal poly_grobner_member poly_grobner_subsetp poly_ideal_intersection poly_ideal_polysaturation poly_ideal_polysaturation1 poly_ideal_saturation poly_ideal_saturation1 poly_lcm poly_minimization polymod poly_multiply polynome2ele polynomialp poly_normal_form poly_normalize poly_normalize_list poly_polysaturation_extension poly_primitive_part poly_pseudo_divide poly_reduced_grobner poly_reduction poly_saturation_extension poly_s_polynomial poly_subtract polytocompanion pop postfix potential power_mod powerseries powerset prefix prev_prime primep primes principal_components print printf printfile print_graph printpois printprops prodrac product properties propvars psi psubst ptriangularize pui pui2comp pui2ele pui2polynome pui_direct puireduc push put pv qput qrange qty quad_control quad_qag quad_qagi quad_qagp quad_qags quad_qawc quad_qawf quad_qawo quad_qaws quadrilateral quantile quantile_bernoulli quantile_beta quantile_binomial quantile_cauchy quantile_chi2 quantile_continuous_uniform quantile_discrete_uniform quantile_exp quantile_f quantile_gamma quantile_general_finite_discrete quantile_geometric quantile_gumbel quantile_hypergeometric quantile_laplace quantile_logistic quantile_lognormal quantile_negative_binomial quantile_noncentral_chi2 quantile_noncentral_student_t quantile_normal quantile_pareto quantile_poisson quantile_rayleigh quantile_student_t quantile_weibull quartile_skewness quit qunit quotient racah_v racah_w radcan radius random random_bernoulli random_beta random_binomial random_bipartite_graph random_cauchy random_chi2 random_continuous_uniform random_digraph random_discrete_uniform random_exp random_f random_gamma random_general_finite_discrete random_geometric random_graph random_graph1 random_gumbel random_hypergeometric random_laplace random_logistic random_lognormal random_negative_binomial random_network random_noncentral_chi2 random_noncentral_student_t random_normal random_pareto random_permutation random_poisson random_rayleigh random_regular_graph random_student_t random_tournament random_tree random_weibull range rank rat ratcoef ratdenom ratdiff ratdisrep ratexpand ratinterpol rational rationalize ratnumer ratnump ratp ratsimp ratsubst ratvars ratweight read read_array read_binary_array read_binary_list read_binary_matrix readbyte readchar read_hashed_array readline read_list read_matrix read_nested_list readonly read_xpm real_imagpart_to_conjugate realpart realroots rearray rectangle rectform rectform_log_if_constant recttopolar rediff reduce_consts reduce_order region region_boundaries region_boundaries_plus rem remainder remarray rembox remcomps remcon remcoord remfun remfunction remlet remove remove_constvalue remove_dimensions remove_edge remove_fundamental_dimensions remove_fundamental_units remove_plot_option remove_vertex rempart remrule remsym remvalue rename rename_file reset reset_displays residue resolvante resolvante_alternee1 resolvante_bipartite resolvante_diedrale resolvante_klein resolvante_klein3 resolvante_produit_sym resolvante_unitaire resolvante_vierer rest resultant return reveal reverse revert revert2 rgb2level rhs ricci riemann rinvariant risch rk rmdir rncombine romberg room rootscontract round row rowop rowswap rreduce run_testsuite %s save saving scalarp scaled_bessel_i scaled_bessel_i0 scaled_bessel_i1 scalefactors scanmap scatterplot scatterplot_description scene schur2comp sconcat scopy scsimp scurvature sdowncase sec sech second sequal sequalignore set_alt_display setdifference set_draw_defaults set_edge_weight setelmx setequalp setify setp set_partitions set_plot_option set_prompt set_random_state set_tex_environment set_tex_environment_default setunits setup_autoload set_up_dot_simplifications set_vertex_label seventh sexplode sf sha1sum sha256sum shortest_path shortest_weighted_path show showcomps showratvars sierpinskiale sierpinskimap sign signum similaritytransform simp_inequality simplify_sum simplode simpmetderiv simtran sin sinh sinsert sinvertcase sixth skewness skewness_bernoulli skewness_beta skewness_binomial skewness_chi2 skewness_continuous_uniform skewness_discrete_uniform skewness_exp skewness_f skewness_gamma skewness_general_finite_discrete skewness_geometric skewness_gumbel skewness_hypergeometric skewness_laplace skewness_logistic skewness_lognormal skewness_negative_binomial skewness_noncentral_chi2 skewness_noncentral_student_t skewness_normal skewness_pareto skewness_poisson skewness_rayleigh skewness_student_t skewness_weibull slength smake small_rhombicosidodecahedron_graph small_rhombicuboctahedron_graph smax smin smismatch snowmap snub_cube_graph snub_dodecahedron_graph solve solve_rec solve_rec_rat some somrac sort sparse6_decode sparse6_encode sparse6_export sparse6_import specint spherical spherical_bessel_j spherical_bessel_y spherical_hankel1 spherical_hankel2 spherical_harmonic spherical_to_xyz splice split sposition sprint sqfr sqrt sqrtdenest sremove sremovefirst sreverse ssearch ssort sstatus ssubst ssubstfirst staircase standardize standardize_inverse_trig starplot starplot_description status std std1 std_bernoulli std_beta std_binomial std_chi2 std_continuous_uniform std_discrete_uniform std_exp std_f std_gamma std_general_finite_discrete std_geometric std_gumbel std_hypergeometric std_laplace std_logistic std_lognormal std_negative_binomial std_noncentral_chi2 std_noncentral_student_t std_normal std_pareto std_poisson std_rayleigh std_student_t std_weibull stemplot stirling stirling1 stirling2 strim striml strimr string stringout stringp strong_components struve_h struve_l sublis sublist sublist_indices submatrix subsample subset subsetp subst substinpart subst_parallel substpart substring subvar subvarp sum sumcontract summand_to_rec supcase supcontext symbolp symmdifference symmetricp system take_channel take_inference tan tanh taylor taylorinfo taylorp taylor_simplifier taytorat tcl_output tcontract tellrat tellsimp tellsimpafter tentex tenth test_mean test_means_difference test_normality test_proportion test_proportions_difference test_rank_sum test_sign test_signed_rank test_variance test_variance_ratio tex tex1 tex_display texput %th third throw time timedate timer timer_info tldefint tlimit todd_coxeter toeplitz tokens to_lisp topological_sort to_poly to_poly_solve totaldisrep totalfourier totient tpartpol trace tracematrix trace_options transform_sample translate translate_file transpose treefale tree_reduce treillis treinat triangle triangularize trigexpand trigrat trigreduce trigsimp trunc truncate truncated_cube_graph truncated_dodecahedron_graph truncated_icosahedron_graph truncated_tetrahedron_graph tr_warnings_get tube tutte_graph ueivects uforget ultraspherical underlying_graph undiff union unique uniteigenvectors unitp units unit_step unitvector unorder unsum untellrat untimer untrace uppercasep uricci uriemann uvect vandermonde_matrix var var1 var_bernoulli var_beta var_binomial var_chi2 var_continuous_uniform var_discrete_uniform var_exp var_f var_gamma var_general_finite_discrete var_geometric var_gumbel var_hypergeometric var_laplace var_logistic var_lognormal var_negative_binomial var_noncentral_chi2 var_noncentral_student_t var_normal var_pareto var_poisson var_rayleigh var_student_t var_weibull vector vectorpotential vectorsimp verbify vers vertex_coloring vertex_connectivity vertex_degree vertex_distance vertex_eccentricity vertex_in_degree vertex_out_degree vertices vertices_to_cycle vertices_to_path %w weyl wheel_graph wiener_index wigner_3j wigner_6j wigner_9j with_stdout write_binary_data writebyte write_data writefile wronskian xreduce xthru %y Zeilberger zeroequiv zerofor zeromatrix zeromatrixp zeta zgeev zheev zlange zn_add_table zn_carmichael_lambda zn_characteristic_factors zn_determinant zn_factor_generators zn_invert_by_lu zn_log zn_mult_table absboxchar activecontexts adapt_depth additive adim aform algebraic algepsilon algexact aliases allbut all_dotsimp_denoms allocation allsym alphabetic animation antisymmetric arrays askexp assume_pos assume_pos_pred assumescalar asymbol atomgrad atrig1 axes axis_3d axis_bottom axis_left axis_right axis_top azimuth background background_color backsubst berlefact bernstein_explicit besselexpand beta_args_sum_to_integer beta_expand bftorat bftrunc bindtest border boundaries_array box boxchar breakup %c capping cauchysum cbrange cbtics center cflength cframe_flag cnonmet_flag color color_bar color_bar_tics colorbox columns commutative complex cone context contexts contour contour_levels cosnpiflag ctaypov ctaypt ctayswitch ctayvar ct_coords ctorsion_flag ctrgsimp cube current_let_rule_package cylinder data_file_name debugmode decreasing default_let_rule_package delay dependencies derivabbrev derivsubst detout diagmetric diff dim dimensions dispflag display2d|10 display_format_internal distribute_over doallmxops domain domxexpt domxmxops domxnctimes dontfactor doscmxops doscmxplus dot0nscsimp dot0simp dot1simp dotassoc dotconstrules dotdistrib dotexptsimp dotident dotscrules draw_graph_program draw_realpart edge_color edge_coloring edge_partition edge_type edge_width %edispflag elevation %emode endphi endtheta engineering_format_floats enhanced3d %enumer epsilon_lp erfflag erf_representation errormsg error_size error_syms error_type %e_to_numlog eval even evenfun evflag evfun ev_point expandwrt_denom expintexpand expintrep expon expop exptdispflag exptisolate exptsubst facexpand facsum_combine factlim factorflag factorial_expand factors_only fb feature features file_name file_output_append file_search_demo file_search_lisp file_search_maxima|10 file_search_tests file_search_usage file_type_lisp file_type_maxima|10 fill_color fill_density filled_func fixed_vertices flipflag float2bf font font_size fortindent fortspaces fpprec fpprintprec functions gamma_expand gammalim gdet genindex gensumnum GGFCFMAX GGFINFINITY globalsolve gnuplot_command gnuplot_curve_styles gnuplot_curve_titles gnuplot_default_term_command gnuplot_dumb_term_command gnuplot_file_args gnuplot_file_name gnuplot_out_file gnuplot_pdf_term_command gnuplot_pm3d gnuplot_png_term_command gnuplot_postamble gnuplot_preamble gnuplot_ps_term_command gnuplot_svg_term_command gnuplot_term gnuplot_view_args Gosper_in_Zeilberger gradefs grid grid2d grind halfangles head_angle head_both head_length head_type height hypergeometric_representation %iargs ibase icc1 icc2 icounter idummyx ieqnprint ifb ifc1 ifc2 ifg ifgi ifr iframe_bracket_form ifri igeowedge_flag ikt1 ikt2 imaginary inchar increasing infeval infinity inflag infolists inm inmc1 inmc2 intanalysis integer integervalued integrate_use_rootsof integration_constant integration_constant_counter interpolate_color intfaclim ip_grid ip_grid_in irrational isolate_wrt_times iterations itr julia_parameter %k1 %k2 keepfloat key key_pos kinvariant kt label label_alignment label_orientation labels lassociative lbfgs_ncorrections lbfgs_nfeval_max leftjust legend letrat let_rule_packages lfg lg lhospitallim limsubst linear linear_solver linechar linel|10 linenum line_type linewidth line_width linsolve_params linsolvewarn lispdisp listarith listconstvars listdummyvars lmxchar load_pathname loadprint logabs logarc logcb logconcoeffp logexpand lognegint logsimp logx logx_secondary logy logy_secondary logz lriem m1pbranch macroexpansion macros mainvar manual_demo maperror mapprint matrix_element_add matrix_element_mult matrix_element_transpose maxapplydepth maxapplyheight maxima_tempdir|10 maxima_userdir|10 maxnegex MAX_ORD maxposex maxpsifracdenom maxpsifracnum maxpsinegint maxpsiposint maxtayorder mesh_lines_color method mod_big_prime mode_check_errorp mode_checkp mode_check_warnp mod_test mod_threshold modular_linear_solver modulus multiplicative multiplicities myoptions nary negdistrib negsumdispflag newline newtonepsilon newtonmaxiter nextlayerfactor niceindicespref nm nmc noeval nolabels nonegative_lp noninteger nonscalar noun noundisp nouns np npi nticks ntrig numer numer_pbranch obase odd oddfun opacity opproperties opsubst optimprefix optionset orientation origin orthopoly_returns_intervals outative outchar packagefile palette partswitch pdf_file pfeformat phiresolution %piargs piece pivot_count_sx pivot_max_sx plot_format plot_options plot_realpart png_file pochhammer_max_index points pointsize point_size points_joined point_type poislim poisson poly_coefficient_ring poly_elimination_order polyfactor poly_grobner_algorithm poly_grobner_debug poly_monomial_order poly_primary_elimination_order poly_return_term_list poly_secondary_elimination_order poly_top_reduction_only posfun position powerdisp pred prederror primep_number_of_tests product_use_gamma program programmode promote_float_to_bigfloat prompt proportional_axes props psexpand ps_file radexpand radius radsubstflag rassociative ratalgdenom ratchristof ratdenomdivide rateinstein ratepsilon ratfac rational ratmx ratprint ratriemann ratsimpexpons ratvarswitch ratweights ratweyl ratwtlvl real realonly redraw refcheck resolution restart resultant ric riem rmxchar %rnum_list rombergabs rombergit rombergmin rombergtol rootsconmode rootsepsilon run_viewer same_xy same_xyz savedef savefactors scalar scalarmatrixp scale scale_lp setcheck setcheckbreak setval show_edge_color show_edges show_edge_type show_edge_width show_id show_label showtime show_vertex_color show_vertex_size show_vertex_type show_vertices show_weight simp simplified_output simplify_products simpproduct simpsum sinnpiflag solvedecomposes solveexplicit solvefactors solvenullwarn solveradcan solvetrigwarn space sparse sphere spring_embedding_depth sqrtdispflag stardisp startphi starttheta stats_numer stringdisp structures style sublis_apply_lambda subnumsimp sumexpand sumsplitfact surface surface_hide svg_file symmetric tab taylordepth taylor_logexpand taylor_order_coefficients taylor_truncate_polynomials tensorkill terminal testsuite_files thetaresolution timer_devalue title tlimswitch tr track transcompile transform transform_xy translate_fast_arrays transparent transrun tr_array_as_ref tr_bound_function_applyp tr_file_tty_messagesp tr_float_can_branch_complex tr_function_call_default trigexpandplus trigexpandtimes triginverses trigsign trivial_solutions tr_numer tr_optimize_max_loop tr_semicompile tr_state_vars tr_warn_bad_function_calls tr_warn_fexpr tr_warn_meval tr_warn_mode tr_warn_undeclared tr_warn_undefined_variable tstep ttyoff tube_extremes ufg ug %unitexpand unit_vectors uric uriem use_fast_arrays user_preamble usersetunits values vect_cross verbose vertex_color vertex_coloring vertex_partition vertex_size vertex_type view warnings weyl width windowname windowtitle wired_surface wireframe xaxis xaxis_color xaxis_secondary xaxis_type xaxis_width xlabel xlabel_secondary xlength xrange xrange_secondary xtics xtics_axis xtics_rotate xtics_rotate_secondary xtics_secondary xtics_secondary_axis xu_grid x_voxel xy_file xyplane xy_scale yaxis yaxis_color yaxis_secondary yaxis_type yaxis_width ylabel ylabel_secondary ylength yrange yrange_secondary ytics ytics_axis ytics_rotate ytics_rotate_secondary ytics_secondary ytics_secondary_axis yv_grid y_voxel yx_ratio zaxis zaxis_color zaxis_type zaxis_width zeroa zerob zerobern zeta%pi zlabel zlabel_rotate zlength zmin zn_primroot_limit zn_primroot_pretest",
		e = "_ __ %|0 %%|0";
	return {
		l: "[A-Za-z_%][0-9A-Za-z_%]*",
		k: {
			keyword: b,
			literal: c,
			built_in: d,
			symbol: e
		},
		c: [{
			cN: "comment",
			b: "/\\*",
			e: "\\*/",
			c: ["self"]
		}, a.QSM, {
			cN: "number",
			r: 0,
			v: [{
				b: "\\b(\\d+|\\d+\\.|\\.\\d+|\\d+\\.\\d+)[Ee][-+]?\\d+\\b"
			}, {
				b: "\\b(\\d+|\\d+\\.|\\.\\d+|\\d+\\.\\d+)[Bb][-+]?\\d+\\b",
				r: 10
			}, {
				b: "\\b(\\.\\d+|\\d+\\.\\d+)\\b"
			}, {
				b: "\\b(\\d+|0[0-9A-Za-z]+)\\.?\\b"
			}]
		}],
		i: /@/
	}
}), hljs.registerLanguage("php", function(a) {
	var b = {
			b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"
		},
		c = {
			cN: "meta",
			b: /<\?(php)?|\?>/
		},
		d = {
			cN: "string",
			c: [a.BE, c],
			v: [{
				b: 'b"',
				e: '"'
			}, {
				b: "b'",
				e: "'"
			}, a.inherit(a.ASM, {
				i: null
			}), a.inherit(a.QSM, {
				i: null
			})]
		},
		e = {
			v: [a.BNM, a.CNM]
		};
	return {
		aliases: ["php3", "php4", "php5", "php6"],
		cI: !0,
		k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
		c: [a.HCM, a.C("//", "$", {
			c: [c]
		}), a.C("/\\*", "\\*/", {
			c: [{
				cN: "doctag",
				b: "@[A-Za-z]+"
			}]
		}), a.C("__halt_compiler.+?;", !1, {
			eW: !0,
			k: "__halt_compiler",
			l: a.UIR
		}), {
			cN: "string",
			b: /<<<['"]?\w+['"]?$/,
			e: /^\w+;?$/,
			c: [a.BE, {
				cN: "subst",
				v: [{
					b: /\$\w+/
				}, {
					b: /\{\$/,
					e: /\}/
				}]
			}]
		}, c, {
			cN: "keyword",
			b: /\$this\b/
		}, b, {
			b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
		}, {
			cN: "function",
			bK: "function",
			e: /[;{]/,
			eE: !0,
			i: "\\$|\\[|%",
			c: [a.UTM, {
				cN: "params",
				b: "\\(",
				e: "\\)",
				c: ["self", b, a.CBCM, d, e]
			}]
		}, {
			cN: "class",
			bK: "class interface",
			e: "{",
			eE: !0,
			i: /[:\(\$"]/,
			c: [{
				bK: "extends implements"
			}, a.UTM]
		}, {
			bK: "namespace",
			e: ";",
			i: /[\.']/,
			c: [a.UTM]
		}, {
			bK: "use",
			e: ";",
			c: [a.UTM]
		}, {
			b: "=>"
		}, d, e]
	}
}), hljs.registerLanguage("crystal", function(a) {
	function b(a, b) {
		var c = [{
			b: a,
			e: b
		}];
		return c[0].c = c, c
	}
	var c = "(_[uif](8|16|32|64))?",
		d = "[a-zA-Z_]\\w*[!?=]?",
		e = "!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
		f = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\][=?]?",
		g = {
			keyword: "abstract alias as asm begin break case class def do else elsif end ensure enum extend for fun if ifdef include instance_sizeof is_a? lib macro module next of out pointerof private protected rescue responds_to? return require self sizeof struct super then type typeof union unless until when while with yield __DIR__ __FILE__ __LINE__",
			literal: "false nil true"
		},
		h = {
			cN: "subst",
			b: "#{",
			e: "}",
			k: g
		},
		i = {
			cN: "template-variable",
			v: [{
				b: "\\{\\{",
				e: "\\}\\}"
			}, {
				b: "\\{%",
				e: "%\\}"
			}],
			k: g
		},
		j = {
			cN: "string",
			c: [a.BE, h],
			v: [{
				b: /'/,
				e: /'/
			}, {
				b: /"/,
				e: /"/
			}, {
				b: /`/,
				e: /`/
			}, {
				b: "%w?\\(",
				e: "\\)",
				c: b("\\(", "\\)")
			}, {
				b: "%w?\\[",
				e: "\\]",
				c: b("\\[", "\\]")
			}, {
				b: "%w?{",
				e: "}",
				c: b("{", "}")
			}, {
				b: "%w?<",
				e: ">",
				c: b("<", ">")
			}, {
				b: "%w?/",
				e: "/"
			}, {
				b: "%w?%",
				e: "%"
			}, {
				b: "%w?-",
				e: "-"
			}, {
				b: "%w?\\|",
				e: "\\|"
			}],
			r: 0
		},
		k = {
			b: "(" + e + ")\\s*",
			c: [{
				cN: "regexp",
				c: [a.BE, h],
				v: [{
					b: "//[a-z]*",
					r: 0
				}, {
					b: "/",
					e: "/[a-z]*"
				}, {
					b: "%r\\(",
					e: "\\)",
					c: b("\\(", "\\)")
				}, {
					b: "%r\\[",
					e: "\\]",
					c: b("\\[", "\\]")
				}, {
					b: "%r{",
					e: "}",
					c: b("{", "}")
				}, {
					b: "%r<",
					e: ">",
					c: b("<", ">")
				}, {
					b: "%r/",
					e: "/"
				}, {
					b: "%r%",
					e: "%"
				}, {
					b: "%r-",
					e: "-"
				}, {
					b: "%r\\|",
					e: "\\|"
				}]
			}],
			r: 0
		},
		l = {
			cN: "regexp",
			c: [a.BE, h],
			v: [{
				b: "%r\\(",
				e: "\\)",
				c: b("\\(", "\\)")
			}, {
				b: "%r\\[",
				e: "\\]",
				c: b("\\[", "\\]")
			}, {
				b: "%r{",
				e: "}",
				c: b("{", "}")
			}, {
				b: "%r<",
				e: ">",
				c: b("<", ">")
			}, {
				b: "%r/",
				e: "/"
			}, {
				b: "%r%",
				e: "%"
			}, {
				b: "%r-",
				e: "-"
			}, {
				b: "%r\\|",
				e: "\\|"
			}],
			r: 0
		},
		m = {
			cN: "meta",
			b: "@\\[",
			e: "\\]",
			c: [a.inherit(a.QSM, {
				cN: "meta-string"
			})]
		},
		n = [i, j, k, l, m, a.HCM, {
			cN: "class",
			bK: "class module struct",
			e: "$|;",
			i: /=/,
			c: [a.HCM, a.inherit(a.TM, {
				b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
			}), {
				b: "<"
			}]
		}, {
			cN: "class",
			bK: "lib enum union",
			e: "$|;",
			i: /=/,
			c: [a.HCM, a.inherit(a.TM, {
				b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
			})],
			r: 10
		}, {
			cN: "function",
			bK: "def",
			e: /\B\b/,
			c: [a.inherit(a.TM, {
				b: f,
				endsParent: !0
			})]
		}, {
			cN: "function",
			bK: "fun macro",
			e: /\B\b/,
			c: [a.inherit(a.TM, {
				b: f,
				endsParent: !0
			})],
			r: 5
		}, {
			cN: "symbol",
			b: a.UIR + "(\\!|\\?)?:",
			r: 0
		}, {
			cN: "symbol",
			b: ":",
			c: [j, {
				b: f
			}],
			r: 0
		}, {
			cN: "number",
			v: [{
				b: "\\b0b([01_]*[01])" + c
			}, {
				b: "\\b0o([0-7_]*[0-7])" + c
			}, {
				b: "\\b0x([A-Fa-f0-9_]*[A-Fa-f0-9])" + c
			}, {
				b: "\\b(([0-9][0-9_]*[0-9]|[0-9])(\\.[0-9_]*[0-9])?([eE][+-]?[0-9_]*[0-9])?)" + c
			}],
			r: 0
		}];
	return h.c = n, i.c = n.slice(1), {
		aliases: ["cr"],
		l: d,
		k: g,
		c: n
	}
}), hljs.registerLanguage("ini", function(a) {
	var b = {
		cN: "string",
		c: [a.BE],
		v: [{
			b: "'''",
			e: "'''",
			r: 10
		}, {
			b: '"""',
			e: '"""',
			r: 10
		}, {
			b: '"',
			e: '"'
		}, {
			b: "'",
			e: "'"
		}]
	};
	return {
		aliases: ["toml"],
		cI: !0,
		i: /\S/,
		c: [a.C(";", "$"), a.HCM, {
			cN: "section",
			b: /^\s*\[+/,
			e: /\]+/
		}, {
			b: /^[a-z0-9\[\]_-]+\s*=\s*/,
			e: "$",
			rB: !0,
			c: [{
				cN: "attr",
				b: /[a-z0-9\[\]_-]+/
			}, {
				b: /=/,
				eW: !0,
				r: 0,
				c: [{
					cN: "literal",
					b: /\bon|off|true|false|yes|no\b/
				}, {
					cN: "variable",
					v: [{
						b: /\$[\w\d"][\w\d_]*/
					}, {
						b: /\$\{(.*?)}/
					}]
				}, b, {
					cN: "number",
					b: /([\+\-]+)?[\d]+_[\d_]+/
				}, a.NM]
			}]
		}]
	}
}), hljs.registerLanguage("sml", function(a) {
	return {
		aliases: ["ml"],
		k: {
			keyword: "abstype and andalso as case datatype do else end eqtype exception fn fun functor handle if in include infix infixr let local nonfix of op open orelse raise rec sharing sig signature struct structure then type val with withtype where while",
			built_in: "array bool char exn int list option order real ref string substring vector unit word",
			literal: "true false NONE SOME LESS EQUAL GREATER nil"
		},
		i: /\/\/|>>/,
		l: "[a-z_]\\w*!?",
		c: [{
			cN: "literal",
			b: /\[(\|\|)?\]|\(\)/,
			r: 0
		}, a.C("\\(\\*", "\\*\\)", {
			c: ["self"]
		}), {
			cN: "symbol",
			b: "'[A-Za-z_](?!')[\\w']*"
		}, {
			cN: "type",
			b: "`[A-Z][\\w']*"
		}, {
			cN: "type",
			b: "\\b[A-Z][\\w']*",
			r: 0
		}, {
			b: "[a-z_]\\w*'[\\w']*"
		}, a.inherit(a.ASM, {
			cN: "string",
			r: 0
		}), a.inherit(a.QSM, {
			i: null
		}), {
			cN: "number",
			b: "\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
			r: 0
		}, {
			b: /[-=]>/
		}]
	}
}), hljs.registerLanguage("matlab", function(a) {
	var b = [a.CNM, {
			cN: "string",
			b: "'",
			e: "'",
			c: [a.BE, {
				b: "''"
			}]
		}],
		c = {
			r: 0,
			c: [{
				b: /'['\.]*/
			}]
		};
	return {
		k: {
			keyword: "break case catch classdef continue else elseif end enumerated events for function global if methods otherwise parfor persistent properties return spmd switch try while",
			built_in: "sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal rosser toeplitz vander wilkinson"
		},
		i: '(//|"|#|/\\*|\\s+/\\w+)',
		c: [{
			cN: "function",
			bK: "function",
			e: "$",
			c: [a.UTM, {
				cN: "params",
				v: [{
					b: "\\(",
					e: "\\)"
				}, {
					b: "\\[",
					e: "\\]"
				}]
			}]
		}, {
			b: /[a-zA-Z_][a-zA-Z_0-9]*'['\.]*/,
			rB: !0,
			r: 0,
			c: [{
				b: /[a-zA-Z_][a-zA-Z_0-9]*/,
				r: 0
			}, c.c[0]]
		}, {
			b: "\\[",
			e: "\\]",
			c: b,
			r: 0,
			starts: c
		}, {
			b: "\\{",
			e: /}/,
			c: b,
			r: 0,
			starts: c
		}, {
			b: /\)/,
			r: 0,
			starts: c
		}, a.C("^\\s*\\%\\{\\s*$", "^\\s*\\%\\}\\s*$"), a.C("\\%", "$")].concat(b)
	}
}), hljs.registerLanguage("ruleslanguage", function(a) {
	return {
		k: {
			keyword: "BILL_PERIOD BILL_START BILL_STOP RS_EFFECTIVE_START RS_EFFECTIVE_STOP RS_JURIS_CODE RS_OPCO_CODE INTDADDATTRIBUTE|5 INTDADDVMSG|5 INTDBLOCKOP|5 INTDBLOCKOPNA|5 INTDCLOSE|5 INTDCOUNT|5 INTDCOUNTSTATUSCODE|5 INTDCREATEMASK|5 INTDCREATEDAYMASK|5 INTDCREATEFACTORMASK|5 INTDCREATEHANDLE|5 INTDCREATEOVERRIDEDAYMASK|5 INTDCREATEOVERRIDEMASK|5 INTDCREATESTATUSCODEMASK|5 INTDCREATETOUPERIOD|5 INTDDELETE|5 INTDDIPTEST|5 INTDEXPORT|5 INTDGETERRORCODE|5 INTDGETERRORMESSAGE|5 INTDISEQUAL|5 INTDJOIN|5 INTDLOAD|5 INTDLOADACTUALCUT|5 INTDLOADDATES|5 INTDLOADHIST|5 INTDLOADLIST|5 INTDLOADLISTDATES|5 INTDLOADLISTENERGY|5 INTDLOADLISTHIST|5 INTDLOADRELATEDCHANNEL|5 INTDLOADSP|5 INTDLOADSTAGING|5 INTDLOADUOM|5 INTDLOADUOMDATES|5 INTDLOADUOMHIST|5 INTDLOADVERSION|5 INTDOPEN|5 INTDREADFIRST|5 INTDREADNEXT|5 INTDRECCOUNT|5 INTDRELEASE|5 INTDREPLACE|5 INTDROLLAVG|5 INTDROLLPEAK|5 INTDSCALAROP|5 INTDSCALE|5 INTDSETATTRIBUTE|5 INTDSETDSTPARTICIPANT|5 INTDSETSTRING|5 INTDSETVALUE|5 INTDSETVALUESTATUS|5 INTDSHIFTSTARTTIME|5 INTDSMOOTH|5 INTDSORT|5 INTDSPIKETEST|5 INTDSUBSET|5 INTDTOU|5 INTDTOURELEASE|5 INTDTOUVALUE|5 INTDUPDATESTATS|5 INTDVALUE|5 STDEV INTDDELETEEX|5 INTDLOADEXACTUAL|5 INTDLOADEXCUT|5 INTDLOADEXDATES|5 INTDLOADEX|5 INTDLOADEXRELATEDCHANNEL|5 INTDSAVEEX|5 MVLOAD|5 MVLOADACCT|5 MVLOADACCTDATES|5 MVLOADACCTHIST|5 MVLOADDATES|5 MVLOADHIST|5 MVLOADLIST|5 MVLOADLISTDATES|5 MVLOADLISTHIST|5 IF FOR NEXT DONE SELECT END CALL ABORT CLEAR CHANNEL FACTOR LIST NUMBER OVERRIDE SET WEEK DISTRIBUTIONNODE ELSE WHEN THEN OTHERWISE IENUM CSV INCLUDE LEAVE RIDER SAVE DELETE NOVALUE SECTION WARN SAVE_UPDATE DETERMINANT LABEL REPORT REVENUE EACH IN FROM TOTAL CHARGE BLOCK AND OR CSV_FILE RATE_CODE AUXILIARY_DEMAND UIDACCOUNT RS BILL_PERIOD_SELECT HOURS_PER_MONTH INTD_ERROR_STOP SEASON_SCHEDULE_NAME ACCOUNTFACTOR ARRAYUPPERBOUND CALLSTOREDPROC GETADOCONNECTION GETCONNECT GETDATASOURCE GETQUALIFIER GETUSERID HASVALUE LISTCOUNT LISTOP LISTUPDATE LISTVALUE PRORATEFACTOR RSPRORATE SETBINPATH SETDBMONITOR WQ_OPEN BILLINGHOURS DATE DATEFROMFLOAT DATETIMEFROMSTRING DATETIMETOSTRING DATETOFLOAT DAY DAYDIFF DAYNAME DBDATETIME HOUR MINUTE MONTH MONTHDIFF MONTHHOURS MONTHNAME ROUNDDATE SAMEWEEKDAYLASTYEAR SECOND WEEKDAY WEEKDIFF YEAR YEARDAY YEARSTR COMPSUM HISTCOUNT HISTMAX HISTMIN HISTMINNZ HISTVALUE MAXNRANGE MAXRANGE MINRANGE COMPIKVA COMPKVA COMPKVARFROMKQKW COMPLF IDATTR FLAG LF2KW LF2KWH MAXKW POWERFACTOR READING2USAGE AVGSEASON MAXSEASON MONTHLYMERGE SEASONVALUE SUMSEASON ACCTREADDATES ACCTTABLELOAD CONFIGADD CONFIGGET CREATEOBJECT CREATEREPORT EMAILCLIENT EXPBLKMDMUSAGE EXPMDMUSAGE EXPORT_USAGE FACTORINEFFECT GETUSERSPECIFIEDSTOP INEFFECT ISHOLIDAY RUNRATE SAVE_PROFILE SETREPORTTITLE USEREXIT WATFORRUNRATE TO TABLE ACOS ASIN ATAN ATAN2 BITAND CEIL COS COSECANT COSH COTANGENT DIVQUOT DIVREM EXP FABS FLOOR FMOD FREPM FREXPN LOG LOG10 MAX MAXN MIN MINNZ MODF POW ROUND ROUND2VALUE ROUNDINT SECANT SIN SINH SQROOT TAN TANH FLOAT2STRING FLOAT2STRINGNC INSTR LEFT LEN LTRIM MID RIGHT RTRIM STRING STRINGNC TOLOWER TOUPPER TRIM NUMDAYS READ_DATE STAGING",
			built_in: "IDENTIFIER OPTIONS XML_ELEMENT XML_OP XML_ELEMENT_OF DOMDOCCREATE DOMDOCLOADFILE DOMDOCLOADXML DOMDOCSAVEFILE DOMDOCGETROOT DOMDOCADDPI DOMNODEGETNAME DOMNODEGETTYPE DOMNODEGETVALUE DOMNODEGETCHILDCT DOMNODEGETFIRSTCHILD DOMNODEGETSIBLING DOMNODECREATECHILDELEMENT DOMNODESETATTRIBUTE DOMNODEGETCHILDELEMENTCT DOMNODEGETFIRSTCHILDELEMENT DOMNODEGETSIBLINGELEMENT DOMNODEGETATTRIBUTECT DOMNODEGETATTRIBUTEI DOMNODEGETATTRIBUTEBYNAME DOMNODEGETBYNAME"
		},
		c: [a.CLCM, a.CBCM, a.ASM, a.QSM, a.CNM, {
			cN: "literal",
			v: [{
				b: "#\\s+[a-zA-Z\\ \\.]*",
				r: 0
			}, {
				b: "#[a-zA-Z\\ \\.]+"
			}]
		}]
	}
}), hljs.registerLanguage("basic", function(a) {
	return {
		cI: !0,
		i: "^.",
		l: "[a-zA-Z][a-zA-Z0-9_$%!#]*",
		k: {
			keyword: "ABS ASC AND ATN AUTO|0 BEEP BLOAD|10 BSAVE|10 CALL CALLS CDBL CHAIN CHDIR CHR$|10 CINT CIRCLE CLEAR CLOSE CLS COLOR COM COMMON CONT COS CSNG CSRLIN CVD CVI CVS DATA DATE$ DEFDBL DEFINT DEFSNG DEFSTR DEF|0 SEG USR DELETE DIM DRAW EDIT END ENVIRON ENVIRON$ EOF EQV ERASE ERDEV ERDEV$ ERL ERR ERROR EXP FIELD FILES FIX FOR|0 FRE GET GOSUB|10 GOTO HEX$ IF|0 THEN ELSE|0 INKEY$ INP INPUT INPUT# INPUT$ INSTR IMP INT IOCTL IOCTL$ KEY ON OFF LIST KILL LEFT$ LEN LET LINE LLIST LOAD LOC LOCATE LOF LOG LPRINT USING LSET MERGE MID$ MKDIR MKD$ MKI$ MKS$ MOD NAME NEW NEXT NOISE NOT OCT$ ON OR PEN PLAY STRIG OPEN OPTION BASE OUT PAINT PALETTE PCOPY PEEK PMAP POINT POKE POS PRINT PRINT] PSET PRESET PUT RANDOMIZE READ REM RENUM RESET|0 RESTORE RESUME RETURN|0 RIGHT$ RMDIR RND RSET RUN SAVE SCREEN SGN SHELL SIN SOUND SPACE$ SPC SQR STEP STICK STOP STR$ STRING$ SWAP SYSTEM TAB TAN TIME$ TIMER TROFF TRON TO USR VAL VARPTR VARPTR$ VIEW WAIT WHILE WEND WIDTH WINDOW WRITE XOR"
		},
		c: [a.QSM, a.C("REM", "$", {
			r: 10
		}), a.C("'", "$", {
			r: 0
		}), {
			cN: "symbol",
			b: "^[0-9]+ ",
			r: 10
		}, {
			cN: "number",
			b: "\\b([0-9]+[0-9edED.]*[#!]?)",
			r: 0
		}, {
			cN: "number",
			b: "(&[hH][0-9a-fA-F]{1,4})"
		}, {
			cN: "number",
			b: "(&[oO][0-7]{1,6})"
		}]
	}
}), hljs.registerLanguage("glsl", function(a) {
	return {
		k: {
			keyword: "break continue discard do else for if return whileattribute binding buffer ccw centroid centroid varying coherent column_major const cw depth_any depth_greater depth_less depth_unchanged early_fragment_tests equal_spacing flat fractional_even_spacing fractional_odd_spacing highp in index inout invariant invocations isolines layout line_strip lines lines_adjacency local_size_x local_size_y local_size_z location lowp max_vertices mediump noperspective offset origin_upper_left out packed patch pixel_center_integer point_mode points precise precision quads r11f_g11f_b10f r16 r16_snorm r16f r16i r16ui r32f r32i r32ui r8 r8_snorm r8i r8ui readonly restrict rg16 rg16_snorm rg16f rg16i rg16ui rg32f rg32i rg32ui rg8 rg8_snorm rg8i rg8ui rgb10_a2 rgb10_a2ui rgba16 rgba16_snorm rgba16f rgba16i rgba16ui rgba32f rgba32i rgba32ui rgba8 rgba8_snorm rgba8i rgba8ui row_major sample shared smooth std140 std430 stream triangle_strip triangles triangles_adjacency uniform varying vertices volatile writeonly",
			type: "atomic_uint bool bvec2 bvec3 bvec4 dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 dmat3x4 dmat4 dmat4x2 dmat4x3 dmat4x4 double dvec2 dvec3 dvec4 float iimage1D iimage1DArray iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBufferiimageCube iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray image2DRect image3D imageBuffer imageCube imageCubeArray int isampler1D isampler1DArray isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D isamplerBuffer isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 mat2 mat2x2 mat2x3 mat2x4 mat3 mat3x2 mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 sampler1D sampler1DArray sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray sampler2DArrayShadow sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow sampler3D samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow image1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray uimage2DRect uimage3D uimageBuffer uimageCube uimageCubeArray uint usampler1D usampler1DArray usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D samplerBuffer usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 vec2 vec3 vec4 void",
			built_in: "gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize gl_MaxClipDistances gl_MaxClipPlanes gl_MaxCombinedAtomicCounterBuffers gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms gl_MaxCombinedImageUnitsAndFragmentOutputs gl_MaxCombinedTextureImageUnits gl_MaxComputeAtomicCounterBuffers gl_MaxComputeAtomicCounters gl_MaxComputeImageUniforms gl_MaxComputeTextureImageUnits gl_MaxComputeUniformComponents gl_MaxComputeWorkGroupCount gl_MaxComputeWorkGroupSize gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers gl_MaxFragmentAtomicCounters gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents gl_MaxFragmentInputVectors gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs gl_MaxVertexImageUniforms gl_MaxVertexOutputComponents gl_MaxVertexOutputVectors gl_MaxVertexTextureImageUnits gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffset gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial gl_FrontSecondaryColor gl_GlobalInvocationID gl_InstanceID gl_InvocationID gl_Layer gl_LightModel gl_LightSource gl_LocalInvocationID gl_LocalInvocationIndex gl_ModelViewMatrix gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose gl_ModelViewMatrixTranspose gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse gl_ModelViewProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixTranspose gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_Normal gl_NormalMatrix gl_NormalScale gl_NumSamples gl_NumWorkGroups gl_ObjectPlaneQ gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn gl_Point gl_PointCoord gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn gl_ProjectionMatrix gl_ProjectionMatrixInverse gl_ProjectionMatrixInverseTranspose gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask gl_SampleMaskIn gl_SamplePosition gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter gl_TexCoord gl_TextureEnvColor gl_TextureMatrix gl_TextureMatrixInverse gl_TextureMatrixInverseTranspose gl_TextureMatrixTranspose gl_Vertex gl_VertexID gl_ViewportIndex gl_WorkGroupID gl_WorkGroupSize gl_in gl_out EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive abs acos acosh all any asin asinh atan atanh atomicAdd atomicAnd atomicCompSwap atomicCounter atomicCounterDecrement atomicCounterIncrement atomicExchange atomicMax atomicMin atomicOr atomicXor barrier bitCount bitfieldExtract bitfieldInsert bitfieldReverse ceil clamp cos cosh cross dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward findLSB findMSB floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan greaterThanEqual groupMemoryBarrier imageAtomicAdd imageAtomicAnd imageAtomicCompSwap imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad imageSize imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset interpolateAtSample inverse inversesqrt isinf isnan ldexp length lessThan lessThanEqual log log2 matrixCompMult max memoryBarrier memoryBarrierAtomicCounter memoryBarrierBuffer memoryBarrierImage memoryBarrierShared min mix mod modf noise1 noise2 noise3 noise4 normalize not notEqual outerProduct packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 packUnorm2x16 packUnorm4x8 pow radians reflect refract round roundEven shadow1D shadow1DLod shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj shadow2DProjLod sign sin sinh smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture texture1D texture1DLod texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj texture2DProjLod texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset textureProjLod textureProjLodOffset textureProjOffset textureQueryLevels textureQueryLod textureSize transpose trunc uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm2x16 unpackUnorm4x8 usubBorrow",
			literal: "true false"
		},
		i: '"',
		c: [a.CLCM, a.CBCM, a.CNM, {
			cN: "meta",
			b: "#",
			e: "$"
		}]
	}
}), hljs.registerLanguage("1c", function(a) {
	var b = "[a-zA-Zа-яА-Я][a-zA-Z0-9_а-яА-Я]*",
		c = "возврат дата для если и или иначе иначеесли исключение конецесли конецпопытки конецпроцедуры конецфункции конеццикла константа не перейти перем перечисление по пока попытка прервать продолжить процедура строка тогда фс функция цикл число экспорт",
		d = "ansitooem oemtoansi ввестивидсубконто ввестидату ввестизначение ввестиперечисление ввестипериод ввестиплансчетов ввестистроку ввестичисло вопрос восстановитьзначение врег выбранныйплансчетов вызватьисключение датагод датамесяц датачисло добавитьмесяц завершитьработусистемы заголовоксистемы записьжурналарегистрации запуститьприложение зафиксироватьтранзакцию значениевстроку значениевстрокувнутр значениевфайл значениеизстроки значениеизстрокивнутр значениеизфайла имякомпьютера имяпользователя каталогвременныхфайлов каталогиб каталогпользователя каталогпрограммы кодсимв командасистемы конгода конецпериодаби конецрассчитанногопериодаби конецстандартногоинтервала конквартала конмесяца коннедели лев лог лог10 макс максимальноеколичествосубконто мин монопольныйрежим названиеинтерфейса названиенабораправ назначитьвид назначитьсчет найти найтипомеченныенаудаление найтиссылки началопериодаби началостандартногоинтервала начатьтранзакцию начгода начквартала начмесяца начнедели номерднягода номерднянедели номернеделигода нрег обработкаожидания окр описаниеошибки основнойжурналрасчетов основнойплансчетов основнойязык открытьформу открытьформумодально отменитьтранзакцию очиститьокносообщений периодстр полноеимяпользователя получитьвремята получитьдатута получитьдокументта получитьзначенияотбора получитьпозициюта получитьпустоезначение получитьта прав праводоступа предупреждение префиксавтонумерации пустаястрока пустоезначение рабочаядаттьпустоезначение рабочаядата разделительстраниц разделительстрок разм разобратьпозициюдокумента рассчитатьрегистрына рассчитатьрегистрыпо сигнал симв символтабуляции создатьобъект сокрл сокрлп сокрп сообщить состояние сохранитьзначение сред статусвозврата стрдлина стрзаменить стрколичествострок стрполучитьстроку  стрчисловхождений сформироватьпозициюдокумента счетпокоду текущаядата текущеевремя типзначения типзначениястр удалитьобъекты установитьтана установитьтапо фиксшаблон формат цел шаблон",
		e = {
			b: '""'
		},
		f = {
			cN: "string",
			b: '"',
			e: '"|$',
			c: [e]
		},
		g = {
			cN: "string",
			b: "\\|",
			e: '"|$',
			c: [e]
		};
	return {
		cI: !0,
		l: b,
		k: {
			keyword: c,
			built_in: d
		},
		c: [a.CLCM, a.NM, f, g, {
			cN: "function",
			b: "(процедура|функция)",
			e: "$",
			l: b,
			k: "процедура функция",
			c: [{
				b: "экспорт",
				eW: !0,
				l: b,
				k: "экспорт",
				c: [a.CLCM]
			}, {
				cN: "params",
				b: "\\(",
				e: "\\)",
				l: b,
				k: "знач",
				c: [f, g]
			}, a.CLCM, a.inherit(a.TM, {
				b: b
			})]
		}, {
			cN: "meta",
			b: "#",
			e: "$"
		}, {
			cN: "number",
			b: "'\\d{2}\\.\\d{2}\\.(\\d{2}|\\d{4})'"
		}]
	}
}), hljs.registerLanguage("vbnet", function(a) {
	return {
		aliases: ["vb"],
		cI: !0,
		k: {
			keyword: "addhandler addressof alias and andalso aggregate ansi as assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into is isfalse isnot istrue join key let lib like loop me mid mod module mustinherit mustoverride mybase myclass namespace narrowing new next not notinheritable notoverridable of off on operator option optional or order orelse overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim rem removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly xor",
			built_in: "boolean byte cbool cbyte cchar cdate cdec cdbl char cint clng cobj csbyte cshort csng cstr ctype date decimal directcast double gettype getxmlnamespace iif integer long object sbyte short single string trycast typeof uinteger ulong ushort",
			literal: "true false nothing"
		},
		i: "//|{|}|endif|gosub|variant|wend",
		c: [a.inherit(a.QSM, {
			c: [{
				b: '""'
			}]
		}), a.C("'", "$", {
			rB: !0,
			c: [{
				cN: "doctag",
				b: "'''|<!--|-->",
				c: [a.PWM]
			}, {
				cN: "doctag",
				b: "</?",
				e: ">",
				c: [a.PWM]
			}]
		}), a.CNM, {
			cN: "meta",
			b: "#",
			e: "$",
			k: {
				"meta-keyword": "if else elseif end region externalsource"
			}
		}]
	}
}), hljs.registerLanguage("profile", function(a) {
	return {
		c: [a.CNM, {
			b: "[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}",
			e: ":",
			eE: !0
		}, {
			b: "(ncalls|tottime|cumtime)",
			e: "$",
			k: "ncalls tottime|10 cumtime|10 filename",
			r: 10
		}, {
			b: "function calls",
			e: "$",
			c: [a.CNM],
			r: 10
		}, a.ASM, a.QSM, {
			cN: "string",
			b: "\\(",
			e: "\\)$",
			eB: !0,
			eE: !0,
			r: 0
		}]
	}
}), hljs.registerLanguage("xquery", function(a) {
	var b = "for let if while then else return where group by xquery encoding versionmodule namespace boundary-space preserve strip default collation base-uri orderingcopy-namespaces order declare import schema namespace function option in allowing emptyat tumbling window sliding window start when only end when previous next stable ascendingdescending empty greatest least some every satisfies switch case typeswitch try catch andor to union intersect instance of treat as castable cast map array delete insert intoreplace value rename copy modify update",
		c = "false true xs:string xs:integer element item xs:date xs:datetime xs:float xs:double xs:decimal QName xs:anyURI xs:long xs:int xs:short xs:byte attribute",
		d = {
			b: /\$[a-zA-Z0-9\-]+/
		},
		e = {
			cN: "number",
			b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
			r: 0
		},
		f = {
			cN: "string",
			v: [{
				b: /"/,
				e: /"/,
				c: [{
					b: /""/,
					r: 0
				}]
			}, {
				b: /'/,
				e: /'/,
				c: [{
					b: /''/,
					r: 0
				}]
			}]
		},
		g = {
			cN: "meta",
			b: "%\\w+"
		},
		h = {
			cN: "comment",
			b: "\\(:",
			e: ":\\)",
			r: 10,
			c: [{
				cN: "doctag",
				b: "@\\w+"
			}]
		},
		i = {
			b: "{",
			e: "}"
		},
		j = [d, f, e, h, g, i];
	return i.c = j, {
		aliases: ["xpath", "xq"],
		cI: !1,
		l: /[a-zA-Z\$][a-zA-Z0-9_:\-]*/,
		i: /(proc)|(abstract)|(extends)|(until)|(#)/,
		k: {
			keyword: b,
			literal: c
		},
		c: j
	}
}), hljs.registerLanguage("bash", function(a) {
	var b = {
			cN: "variable",
			v: [{
				b: /\$[\w\d#@][\w\d_]*/
			}, {
				b: /\$\{(.*?)}/
			}]
		},
		c = {
			cN: "string",
			b: /"/,
			e: /"/,
			c: [a.BE, b, {
				cN: "variable",
				b: /\$\(/,
				e: /\)/,
				c: [a.BE]
			}]
		},
		d = {
			cN: "string",
			b: /'/,
			e: /'/
		};
	return {
		aliases: ["sh", "zsh"],
		l: /-?[a-z\._]+/,
		k: {
			keyword: "if then else elif fi for while in do done case esac function",
			literal: "true false",
			built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
			_: "-ne -eq -lt -gt -f -d -e -s -l -a"
		},
		c: [{
			cN: "meta",
			b: /^#![^\n]+sh\s*$/,
			r: 10
		}, {
			cN: "function",
			b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
			rB: !0,
			c: [a.inherit(a.TM, {
				b: /\w[\w\d_]*/
			})],
			r: 0
		}, a.HCM, c, d, b]
	}
}), hljs.registerLanguage("dockerfile", function(a) {
	return {
		aliases: ["docker"],
		cI: !0,
		k: "from maintainer expose env user onbuild",
		c: [a.HCM, a.ASM, a.QSM, a.NM, {
			bK: "run cmd entrypoint volume add copy workdir label healthcheck",
			starts: {
				e: /[^\\]\n/,
				sL: "bash"
			}
		}],
		i: "</"
	}
}), hljs.registerLanguage("rust", function(a) {
	var b = "([uif](8|16|32|64|size))?",
		c = "alignof as be box break const continue crate do else enum extern false fn for if impl in let loop match mod mut offsetof once priv proc pub pure ref return self Self sizeof static struct super trait true type typeof unsafe unsized use virtual while where yield move default int i8 i16 i32 i64 isize uint u8 u32 u64 usize float f32 f64 str char bool",
		d = "Copy Send Sized Sync Drop Fn FnMut FnOnce drop Box ToOwned Clone PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator Option Result SliceConcatExt String ToString Vec assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln! macro_rules!";
	return {
		aliases: ["rs"],
		k: {
			keyword: c,
			literal: "true false Some None Ok Err",
			built_in: d
		},
		l: a.IR + "!?",
		i: "</",
		c: [a.CLCM, a.C("/\\*", "\\*/", {
			c: ["self"]
		}), a.inherit(a.QSM, {
			b: /b?"/,
			i: null
		}), {
			cN: "string",
			v: [{
				b: /r(#*)".*?"\1(?!#)/
			}, {
				b: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/
			}]
		}, {
			cN: "symbol",
			b: /'[a-zA-Z_][a-zA-Z0-9_]*/
		}, {
			cN: "number",
			v: [{
				b: "\\b0b([01_]+)" + b
			}, {
				b: "\\b0o([0-7_]+)" + b
			}, {
				b: "\\b0x([A-Fa-f0-9_]+)" + b
			}, {
				b: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + b
			}],
			r: 0
		}, {
			cN: "function",
			bK: "fn",
			e: "(\\(|<)",
			eE: !0,
			c: [a.UTM]
		}, {
			cN: "meta",
			b: "#\\!?\\[",
			e: "\\]",
			c: [{
				cN: "meta-string",
				b: /"/,
				e: /"/
			}]
		}, {
			cN: "class",
			bK: "type",
			e: ";",
			c: [a.inherit(a.UTM, {
				endsParent: !0
			})],
			i: "\\S"
		}, {
			cN: "class",
			bK: "trait enum struct",
			e: "{",
			c: [a.inherit(a.UTM, {
				endsParent: !0
			})],
			i: "[\\w\\d]"
		}, {
			b: a.IR + "::",
			k: {
				built_in: d
			}
		}, {
			b: "->"
		}]
	}
}), hljs.registerLanguage("cpp", function(a) {
	var b = {
			cN: "keyword",
			b: "\\b[a-z\\d_]*_t\\b"
		},
		c = {
			cN: "string",
			v: [{
				b: '(u8?|U)?L?"',
				e: '"',
				i: "\\n",
				c: [a.BE]
			}, {
				b: '(u8?|U)?R"',
				e: '"',
				c: [a.BE]
			}, {
				b: "'\\\\?.",
				e: "'",
				i: "."
			}]
		},
		d = {
			cN: "number",
			v: [{
				b: "\\b(0b[01']+)"
			}, {
				b: "\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
			}, {
				b: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
			}],
			r: 0
		},
		e = {
			cN: "meta",
			b: /#\s*[a-z]+\b/,
			e: /$/,
			k: {
				"meta-keyword": "if else elif endif define undef warning error line pragma ifdef ifndef include"
			},
			c: [{
				b: /\\\n/,
				r: 0
			}, a.inherit(c, {
				cN: "meta-string"
			}), {
				cN: "meta-string",
				b: "<",
				e: ">",
				i: "\\n"
			}, a.CLCM, a.CBCM]
		},
		f = a.IR + "\\s*\\(",
		g = {
			keyword: "int float while private char catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return",
			built_in: "std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",
			literal: "true false nullptr NULL"
		},
		h = [b, a.CLCM, a.CBCM, d, c];
	return {
		aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
		k: g,
		i: "</",
		c: h.concat([e, {
			b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
			e: ">",
			k: g,
			c: ["self", b]
		}, {
			b: a.IR + "::",
			k: g
		}, {
			v: [{
				b: /=/,
				e: /;/
			}, {
				b: /\(/,
				e: /\)/
			}, {
				bK: "new throw return else",
				e: /;/
			}],
			k: g,
			c: h.concat([{
				b: /\(/,
				e: /\)/,
				k: g,
				c: h.concat(["self"]),
				r: 0
			}]),
			r: 0
		}, {
			cN: "function",
			b: "(" + a.IR + "[\\*&\\s]+)+" + f,
			rB: !0,
			e: /[{;=]/,
			eE: !0,
			k: g,
			i: /[^\w\s\*&]/,
			c: [{
				b: f,
				rB: !0,
				c: [a.TM],
				r: 0
			}, {
				cN: "params",
				b: /\(/,
				e: /\)/,
				k: g,
				r: 0,
				c: [a.CLCM, a.CBCM, c, d, b]
			}, a.CLCM, a.CBCM, e]
		}]),
		exports: {
			preprocessor: e,
			strings: c,
			k: g
		}
	}
}), hljs.registerLanguage("sqf", function(a) {
	var b = a.getLanguage("cpp").exports,
		c = {
			cN: "string",
			v: [{
				b: '"',
				e: '"',
				c: [{
					b: '""',
					r: 0
				}]
			}, {
				b: "'",
				e: "'",
				c: [{
					b: "''",
					r: 0
				}]
			}]
		};
	return {
		aliases: ["sqf"],
		cI: !0,
		k: {
			keyword: "case catch default do else exit exitWith for forEach from if switch then throw to try while with",
			built_in: "or plus abs accTime acos action actionKeys actionKeysImages actionKeysNames actionKeysNamesArray actionName activateAddons activatedAddons activateKey addAction addBackpack addBackpackCargo addBackpackCargoGlobal addBackpackGlobal addCamShake addCuratorAddons addCuratorCameraArea addCuratorEditableObjects addCuratorEditingArea addCuratorPoints addEditorObject addEventHandler addGoggles addGroupIcon addHandgunItem addHeadgear addItem addItemCargo addItemCargoGlobal addItemPool addItemToBackpack addItemToUniform addItemToVest addLiveStats addMagazine addMagazine array addMagazineAmmoCargo addMagazineCargo addMagazineCargoGlobal addMagazineGlobal addMagazinePool addMagazines addMagazineTurret addMenu addMenuItem addMissionEventHandler addMPEventHandler addMusicEventHandler addPrimaryWeaponItem addPublicVariableEventHandler addRating addResources addScore addScoreSide addSecondaryWeaponItem addSwitchableUnit addTeamMember addToRemainsCollector addUniform addVehicle addVest addWaypoint addWeapon addWeaponCargo addWeaponCargoGlobal addWeaponGlobal addWeaponPool addWeaponTurret agent agents AGLToASL aimedAtTarget aimPos airDensityRTD airportSide AISFinishHeal alive allControls allCurators allDead allDeadMen allDisplays allGroups allMapMarkers allMines allMissionObjects allow3DMode allowCrewInImmobile allowCuratorLogicIgnoreAreas allowDamage allowDammage allowFileOperations allowFleeing allowGetIn allPlayers allSites allTurrets allUnits allUnitsUAV allVariables ammo and animate animateDoor animationPhase animationState append armoryPoints arrayIntersect asin ASLToAGL ASLToATL assert assignAsCargo assignAsCargoIndex assignAsCommander assignAsDriver assignAsGunner assignAsTurret assignCurator assignedCargo assignedCommander assignedDriver assignedGunner assignedItems assignedTarget assignedTeam assignedVehicle assignedVehicleRole assignItem assignTeam assignToAirport atan atan2 atg ATLToASL attachedObject attachedObjects attachedTo attachObject attachTo attackEnabled backpack backpackCargo backpackContainer backpackItems backpackMagazines backpackSpaceFor behaviour benchmark binocular blufor boundingBox boundingBoxReal boundingCenter breakOut breakTo briefingName buildingExit buildingPos buttonAction buttonSetAction cadetMode call callExtension camCommand camCommit camCommitPrepared camCommitted camConstuctionSetParams camCreate camDestroy cameraEffect cameraEffectEnableHUD cameraInterest cameraOn cameraView campaignConfigFile camPreload camPreloaded camPrepareBank camPrepareDir camPrepareDive camPrepareFocus camPrepareFov camPrepareFovRange camPreparePos camPrepareRelPos camPrepareTarget camSetBank camSetDir camSetDive camSetFocus camSetFov camSetFovRange camSetPos camSetRelPos camSetTarget camTarget camUseNVG canAdd canAddItemToBackpack canAddItemToUniform canAddItemToVest cancelSimpleTaskDestination canFire canMove canSlingLoad canStand canUnloadInCombat captive captiveNum cbChecked cbSetChecked ceil cheatsEnabled checkAIFeature civilian className clearAllItemsFromBackpack clearBackpackCargo clearBackpackCargoGlobal clearGroupIcons clearItemCargo clearItemCargoGlobal clearItemPool clearMagazineCargo clearMagazineCargoGlobal clearMagazinePool clearOverlay clearRadio clearWeaponCargo clearWeaponCargoGlobal clearWeaponPool closeDialog closeDisplay closeOverlay collapseObjectTree combatMode commandArtilleryFire commandChat commander commandFire commandFollow commandFSM commandGetOut commandingMenu commandMove commandRadio commandStop commandTarget commandWatch comment commitOverlay compile compileFinal completedFSM composeText configClasses configFile configHierarchy configName configProperties configSourceMod configSourceModList connectTerminalToUAV controlNull controlsGroupCtrl copyFromClipboard copyToClipboard copyWaypoints cos count countEnemy countFriendly countSide countType countUnknown createAgent createCenter createDialog createDiaryLink createDiaryRecord createDiarySubject createDisplay createGearDialog createGroup createGuardedPoint createLocation createMarker createMarkerLocal createMenu createMine createMissionDisplay createSimpleTask createSite createSoundSource createTask createTeam createTrigger createUnit createUnit array createVehicle createVehicle array createVehicleCrew createVehicleLocal crew ctrlActivate ctrlAddEventHandler ctrlAutoScrollDelay ctrlAutoScrollRewind ctrlAutoScrollSpeed ctrlChecked ctrlClassName ctrlCommit ctrlCommitted ctrlCreate ctrlDelete ctrlEnable ctrlEnabled ctrlFade ctrlHTMLLoaded ctrlIDC ctrlIDD ctrlMapAnimAdd ctrlMapAnimClear ctrlMapAnimCommit ctrlMapAnimDone ctrlMapCursor ctrlMapMouseOver ctrlMapScale ctrlMapScreenToWorld ctrlMapWorldToScreen ctrlModel ctrlModelDirAndUp ctrlModelScale ctrlParent ctrlPosition ctrlRemoveAllEventHandlers ctrlRemoveEventHandler ctrlScale ctrlSetActiveColor ctrlSetAutoScrollDelay ctrlSetAutoScrollRewind ctrlSetAutoScrollSpeed ctrlSetBackgroundColor ctrlSetChecked ctrlSetEventHandler ctrlSetFade ctrlSetFocus ctrlSetFont ctrlSetFontH1 ctrlSetFontH1B ctrlSetFontH2 ctrlSetFontH2B ctrlSetFontH3 ctrlSetFontH3B ctrlSetFontH4 ctrlSetFontH4B ctrlSetFontH5 ctrlSetFontH5B ctrlSetFontH6 ctrlSetFontH6B ctrlSetFontHeight ctrlSetFontHeightH1 ctrlSetFontHeightH2 ctrlSetFontHeightH3 ctrlSetFontHeightH4 ctrlSetFontHeightH5 ctrlSetFontHeightH6 ctrlSetFontP ctrlSetFontPB ctrlSetForegroundColor ctrlSetModel ctrlSetModelDirAndUp ctrlSetModelScale ctrlSetPosition ctrlSetScale ctrlSetStructuredText ctrlSetText ctrlSetTextColor ctrlSetTooltip ctrlSetTooltipColorBox ctrlSetTooltipColorShade ctrlSetTooltipColorText ctrlShow ctrlShown ctrlText ctrlTextHeight ctrlType ctrlVisible curatorAddons curatorCamera curatorCameraArea curatorCameraAreaCeiling curatorCoef curatorEditableObjects curatorEditingArea curatorEditingAreaType curatorMouseOver curatorPoints curatorRegisteredObjects curatorSelected curatorWaypointCost currentChannel currentCommand currentMagazine currentMagazineDetail currentMagazineDetailTurret currentMagazineTurret currentMuzzle currentNamespace currentTask currentTasks currentThrowable currentVisionMode currentWaypoint currentWeapon currentWeaponMode currentWeaponTurret currentZeroing cursorTarget customChat customRadio cutFadeOut cutObj cutRsc cutText damage date dateToNumber daytime deActivateKey debriefingText debugFSM debugLog deg deleteAt deleteCenter deleteCollection deleteEditorObject deleteGroup deleteIdentity deleteLocation deleteMarker deleteMarkerLocal deleteRange deleteResources deleteSite deleteStatus deleteTeam deleteVehicle deleteVehicleCrew deleteWaypoint detach detectedMines diag activeMissionFSMs diag activeSQFScripts diag activeSQSScripts diag captureFrame diag captureSlowFrame diag fps diag fpsMin diag frameNo diag log diag logSlowFrame diag tickTime dialog diarySubjectExists didJIP didJIPOwner difficulty difficultyEnabled difficultyEnabledRTD direction directSay disableAI disableCollisionWith disableConversation disableDebriefingStats disableSerialization disableTIEquipment disableUAVConnectability disableUserInput displayAddEventHandler displayCtrl displayNull displayRemoveAllEventHandlers displayRemoveEventHandler displaySetEventHandler dissolveTeam distance distance2D distanceSqr distributionRegion doArtilleryFire doFire doFollow doFSM doGetOut doMove doorPhase doStop doTarget doWatch drawArrow drawEllipse drawIcon drawIcon3D drawLine drawLine3D drawLink drawLocation drawRectangle driver drop east echo editObject editorSetEventHandler effectiveCommander emptyPositions enableAI enableAIFeature enableAttack enableCamShake enableCaustics enableCollisionWith enableCopilot enableDebriefingStats enableDiagLegend enableEndDialog enableEngineArtillery enableEnvironment enableFatigue enableGunLights enableIRLasers enableMimics enablePersonTurret enableRadio enableReload enableRopeAttach enableSatNormalOnDetail enableSaving enableSentences enableSimulation enableSimulationGlobal enableTeamSwitch enableUAVConnectability enableUAVWaypoints endLoadingScreen endMission engineOn enginesIsOnRTD enginesRpmRTD enginesTorqueRTD entities estimatedEndServerTime estimatedTimeLeft evalObjectArgument everyBackpack everyContainer exec execEditorScript execFSM execVM exp expectedDestination eyeDirection eyePos face faction fadeMusic fadeRadio fadeSound fadeSpeech failMission fillWeaponsFromPool find findCover findDisplay findEditorObject findEmptyPosition findEmptyPositionReady findNearestEnemy finishMissionInit finite fire fireAtTarget firstBackpack flag flagOwner fleeing floor flyInHeight fog fogForecast fogParams forceAddUniform forceEnd forceMap forceRespawn forceSpeed forceWalk forceWeaponFire forceWeatherChange forEachMember forEachMemberAgent forEachMemberTeam format formation formationDirection formationLeader formationMembers formationPosition formationTask formatText formLeader freeLook fromEditor fuel fullCrew gearSlotAmmoCount gearSlotData getAllHitPointsDamage getAmmoCargo getArray getArtilleryAmmo getArtilleryComputerSettings getArtilleryETA getAssignedCuratorLogic getAssignedCuratorUnit getBackpackCargo getBleedingRemaining getBurningValue getCargoIndex getCenterOfMass getClientState getConnectedUAV getDammage getDescription getDir getDirVisual getDLCs getEditorCamera getEditorMode getEditorObjectScope getElevationOffset getFatigue getFriend getFSMVariable getFuelCargo getGroupIcon getGroupIconParams getGroupIcons getHideFrom getHit getHitIndex getHitPointDamage getItemCargo getMagazineCargo getMarkerColor getMarkerPos getMarkerSize getMarkerType getMass getModelInfo getNumber getObjectArgument getObjectChildren getObjectDLC getObjectMaterials getObjectProxy getObjectTextures getObjectType getObjectViewDistance getOxygenRemaining getPersonUsedDLCs getPlayerChannel getPlayerUID getPos getPosASL getPosASLVisual getPosASLW getPosATL getPosATLVisual getPosVisual getPosWorld getRepairCargo getResolution getShadowDistance getSlingLoad getSpeed getSuppression getTerrainHeightASL getText getVariable getWeaponCargo getWPPos glanceAt globalChat globalRadio goggles goto group groupChat groupFromNetId groupIconSelectable groupIconsVisible groupId groupOwner groupRadio groupSelectedUnits groupSelectUnit grpNull gunner gusts halt handgunItems handgunMagazine handgunWeapon handsHit hasInterface hasWeapon hcAllGroups hcGroupParams hcLeader hcRemoveAllGroups hcRemoveGroup hcSelected hcSelectGroup hcSetGroup hcShowBar hcShownBar headgear hideBody hideObject hideObjectGlobal hint hintC hintCadet hintSilent hmd hostMission htmlLoad HUDMovementLevels humidity image importAllGroups importance in incapacitatedState independent inflame inflamed inGameUISetEventHandler inheritsFrom initAmbientLife inputAction inRangeOfArtillery insertEditorObject intersect isAbleToBreathe isAgent isArray isAutoHoverOn isAutonomous isAutotest isBleeding isBurning isClass isCollisionLightOn isCopilotEnabled isDedicated isDLCAvailable isEngineOn isEqualTo isFlashlightOn isFlatEmpty isForcedWalk isFormationLeader isHidden isInRemainsCollector isInstructorFigureEnabled isIRLaserOn isKeyActive isKindOf isLightOn isLocalized isManualFire isMarkedForCollection isMultiplayer isNil isNull isNumber isObjectHidden isObjectRTD isOnRoad isPipEnabled isPlayer isRealTime isServer isShowing3DIcons isSteamMission isStreamFriendlyUIEnabled isText isTouchingGround isTurnedOut isTutHintsEnabled isUAVConnectable isUAVConnected isUniformAllowed isWalking isWeaponDeployed isWeaponRested itemCargo items itemsWithMagazines join joinAs joinAsSilent joinSilent joinString kbAddDatabase kbAddDatabaseTargets kbAddTopic kbHasTopic kbReact kbRemoveTopic kbTell kbWasSaid keyImage keyName knowsAbout land landAt landResult language laserTarget lbAdd lbClear lbColor lbCurSel lbData lbDelete lbIsSelected lbPicture lbSelection lbSetColor lbSetCurSel lbSetData lbSetPicture lbSetPictureColor lbSetPictureColorDisabled lbSetPictureColorSelected lbSetSelectColor lbSetSelectColorRight lbSetSelected lbSetTooltip lbSetValue lbSize lbSort lbSortByValue lbText lbValue leader leaderboardDeInit leaderboardGetRows leaderboardInit leaveVehicle libraryCredits libraryDisclaimers lifeState lightAttachObject lightDetachObject lightIsOn lightnings limitSpeed linearConversion lineBreak lineIntersects lineIntersectsObjs lineIntersectsSurfaces lineIntersectsWith linkItem list listObjects ln lnbAddArray lnbAddColumn lnbAddRow lnbClear lnbColor lnbCurSelRow lnbData lnbDeleteColumn lnbDeleteRow lnbGetColumnsPosition lnbPicture lnbSetColor lnbSetColumnsPos lnbSetCurSelRow lnbSetData lnbSetPicture lnbSetText lnbSetValue lnbSize lnbText lnbValue load loadAbs loadBackpack loadFile loadGame loadIdentity loadMagazine loadOverlay loadStatus loadUniform loadVest local localize locationNull locationPosition lock lockCameraTo lockCargo lockDriver locked lockedCargo lockedDriver lockedTurret lockTurret lockWP log logEntities lookAt lookAtPos magazineCargo magazines magazinesAllTurrets magazinesAmmo magazinesAmmoCargo magazinesAmmoFull magazinesDetail magazinesDetailBackpack magazinesDetailUniform magazinesDetailVest magazinesTurret magazineTurretAmmo mapAnimAdd mapAnimClear mapAnimCommit mapAnimDone mapCenterOnCamera mapGridPosition markAsFinishedOnSteam markerAlpha markerBrush markerColor markerDir markerPos markerShape markerSize markerText markerType max members min mineActive mineDetectedBy missionConfigFile missionName missionNamespace missionStart mod modelToWorld modelToWorldVisual moonIntensity morale move moveInAny moveInCargo moveInCommander moveInDriver moveInGunner moveInTurret moveObjectToEnd moveOut moveTime moveTo moveToCompleted moveToFailed musicVolume name name location nameSound nearEntities nearestBuilding nearestLocation nearestLocations nearestLocationWithDubbing nearestObject nearestObjects nearObjects nearObjectsReady nearRoads nearSupplies nearTargets needReload netId netObjNull newOverlay nextMenuItemIndex nextWeatherChange nMenuItems not numberToDate objectCurators objectFromNetId objectParent objNull objStatus onBriefingGroup onBriefingNotes onBriefingPlan onBriefingTeamSwitch onCommandModeChanged onDoubleClick onEachFrame onGroupIconClick onGroupIconOverEnter onGroupIconOverLeave onHCGroupSelectionChanged onMapSingleClick onPlayerConnected onPlayerDisconnected onPreloadFinished onPreloadStarted onShowNewObject onTeamSwitch openCuratorInterface openMap openYoutubeVideo opfor or orderGetIn overcast overcastForecast owner param params parseNumber parseText parsingNamespace particlesQuality pi pickWeaponPool pitch playableSlotsNumber playableUnits playAction playActionNow player playerRespawnTime playerSide playersNumber playGesture playMission playMove playMoveNow playMusic playScriptedMission playSound playSound3D position positionCameraToWorld posScreenToWorld posWorldToScreen ppEffectAdjust ppEffectCommit ppEffectCommitted ppEffectCreate ppEffectDestroy ppEffectEnable ppEffectForceInNVG precision preloadCamera preloadObject preloadSound preloadTitleObj preloadTitleRsc preprocessFile preprocessFileLineNumbers primaryWeapon primaryWeaponItems primaryWeaponMagazine priority private processDiaryLink productVersion profileName profileNamespace profileNameSteam progressLoadingScreen progressPosition progressSetPosition publicVariable publicVariableClient publicVariableServer pushBack putWeaponPool queryItemsPool queryMagazinePool queryWeaponPool rad radioChannelAdd radioChannelCreate radioChannelRemove radioChannelSetCallSign radioChannelSetLabel radioVolume rain rainbow random rank rankId rating rectangular registeredTasks registerTask reload reloadEnabled remoteControl remoteExec remoteExecCall removeAction removeAllActions removeAllAssignedItems removeAllContainers removeAllCuratorAddons removeAllCuratorCameraAreas removeAllCuratorEditingAreas removeAllEventHandlers removeAllHandgunItems removeAllItems removeAllItemsWithMagazines removeAllMissionEventHandlers removeAllMPEventHandlers removeAllMusicEventHandlers removeAllPrimaryWeaponItems removeAllWeapons removeBackpack removeBackpackGlobal removeCuratorAddons removeCuratorCameraArea removeCuratorEditableObjects removeCuratorEditingArea removeDrawIcon removeDrawLinks removeEventHandler removeFromRemainsCollector removeGoggles removeGroupIcon removeHandgunItem removeHeadgear removeItem removeItemFromBackpack removeItemFromUniform removeItemFromVest removeItems removeMagazine removeMagazineGlobal removeMagazines removeMagazinesTurret removeMagazineTurret removeMenuItem removeMissionEventHandler removeMPEventHandler removeMusicEventHandler removePrimaryWeaponItem removeSecondaryWeaponItem removeSimpleTask removeSwitchableUnit removeTeamMember removeUniform removeVest removeWeapon removeWeaponGlobal removeWeaponTurret requiredVersion resetCamShake resetSubgroupDirection resistance resize resources respawnVehicle restartEditorCamera reveal revealMine reverse reversedMouseY roadsConnectedTo roleDescription ropeAttachedObjects ropeAttachedTo ropeAttachEnabled ropeAttachTo ropeCreate ropeCut ropeEndPosition ropeLength ropes ropeUnwind ropeUnwound rotorsForcesRTD rotorsRpmRTD round runInitScript safeZoneH safeZoneW safeZoneWAbs safeZoneX safeZoneXAbs safeZoneY saveGame saveIdentity saveJoysticks saveOverlay saveProfileNamespace saveStatus saveVar savingEnabled say say2D say3D scopeName score scoreSide screenToWorld scriptDone scriptName scriptNull scudState secondaryWeapon secondaryWeaponItems secondaryWeaponMagazine select selectBestPlaces selectDiarySubject selectedEditorObjects selectEditorObject selectionPosition selectLeader selectNoPlayer selectPlayer selectWeapon selectWeaponTurret sendAUMessage sendSimpleCommand sendTask sendTaskResult sendUDPMessage serverCommand serverCommandAvailable serverCommandExecutable serverName serverTime set setAccTime setAirportSide setAmmo setAmmoCargo setAperture setApertureNew setArmoryPoints setAttributes setAutonomous setBehaviour setBleedingRemaining setCameraInterest setCamShakeDefParams setCamShakeParams setCamUseTi setCaptive setCenterOfMass setCollisionLight setCombatMode setCompassOscillation setCuratorCameraAreaCeiling setCuratorCoef setCuratorEditingAreaType setCuratorWaypointCost setCurrentChannel setCurrentTask setCurrentWaypoint setDamage setDammage setDate setDebriefingText setDefaultCamera setDestination setDetailMapBlendPars setDir setDirection setDrawIcon setDropInterval setEditorMode setEditorObjectScope setEffectCondition setFace setFaceAnimation setFatigue setFlagOwner setFlagSide setFlagTexture setFog setFog array setFormation setFormationTask setFormDir setFriend setFromEditor setFSMVariable setFuel setFuelCargo setGroupIcon setGroupIconParams setGroupIconsSelectable setGroupIconsVisible setGroupId setGroupIdGlobal setGroupOwner setGusts setHideBehind setHit setHitIndex setHitPointDamage setHorizonParallaxCoef setHUDMovementLevels setIdentity setImportance setLeader setLightAmbient setLightAttenuation setLightBrightness setLightColor setLightDayLight setLightFlareMaxDistance setLightFlareSize setLightIntensity setLightnings setLightUseFlare setLocalWindParams setMagazineTurretAmmo setMarkerAlpha setMarkerAlphaLocal setMarkerBrush setMarkerBrushLocal setMarkerColor setMarkerColorLocal setMarkerDir setMarkerDirLocal setMarkerPos setMarkerPosLocal setMarkerShape setMarkerShapeLocal setMarkerSize setMarkerSizeLocal setMarkerText setMarkerTextLocal setMarkerType setMarkerTypeLocal setMass setMimic setMousePosition setMusicEffect setMusicEventHandler setName setNameSound setObjectArguments setObjectMaterial setObjectProxy setObjectTexture setObjectTextureGlobal setObjectViewDistance setOvercast setOwner setOxygenRemaining setParticleCircle setParticleClass setParticleFire setParticleParams setParticleRandom setPilotLight setPiPEffect setPitch setPlayable setPlayerRespawnTime setPos setPosASL setPosASL2 setPosASLW setPosATL setPosition setPosWorld setRadioMsg setRain setRainbow setRandomLip setRank setRectangular setRepairCargo setShadowDistance setSide setSimpleTaskDescription setSimpleTaskDestination setSimpleTaskTarget setSimulWeatherLayers setSize setSkill setSkill array setSlingLoad setSoundEffect setSpeaker setSpeech setSpeedMode setStatValue setSuppression setSystemOfUnits setTargetAge setTaskResult setTaskState setTerrainGrid setText setTimeMultiplier setTitleEffect setTriggerActivation setTriggerArea setTriggerStatements setTriggerText setTriggerTimeout setTriggerType setType setUnconscious setUnitAbility setUnitPos setUnitPosWeak setUnitRank setUnitRecoilCoefficient setUnloadInCombat setUserActionText setVariable setVectorDir setVectorDirAndUp setVectorUp setVehicleAmmo setVehicleAmmoDef setVehicleArmor setVehicleId setVehicleLock setVehiclePosition setVehicleTiPars setVehicleVarName setVelocity setVelocityTransformation setViewDistance setVisibleIfTreeCollapsed setWaves setWaypointBehaviour setWaypointCombatMode setWaypointCompletionRadius setWaypointDescription setWaypointFormation setWaypointHousePosition setWaypointLoiterRadius setWaypointLoiterType setWaypointName setWaypointPosition setWaypointScript setWaypointSpeed setWaypointStatements setWaypointTimeout setWaypointType setWaypointVisible setWeaponReloadingTime setWind setWindDir setWindForce setWindStr setWPPos show3DIcons showChat showCinemaBorder showCommandingMenu showCompass showCuratorCompass showGPS showHUD showLegend showMap shownArtilleryComputer shownChat shownCompass shownCuratorCompass showNewEditorObject shownGPS shownHUD shownMap shownPad shownRadio shownUAVFeed shownWarrant shownWatch showPad showRadio showSubtitles showUAVFeed showWarrant showWatch showWaypoint side sideChat sideEnemy sideFriendly sideLogic sideRadio sideUnknown simpleTasks simulationEnabled simulCloudDensity simulCloudOcclusion simulInClouds simulWeatherSync sin size sizeOf skill skillFinal skipTime sleep sliderPosition sliderRange sliderSetPosition sliderSetRange sliderSetSpeed sliderSpeed slingLoadAssistantShown soldierMagazines someAmmo sort soundVolume spawn speaker speed speedMode splitString sqrt squadParams stance startLoadingScreen step stop stopped str sunOrMoon supportInfo suppressFor surfaceIsWater surfaceNormal surfaceType swimInDepth switchableUnits switchAction switchCamera switchGesture switchLight switchMove synchronizedObjects synchronizedTriggers synchronizedWaypoints synchronizeObjectsAdd synchronizeObjectsRemove synchronizeTrigger synchronizeWaypoint synchronizeWaypoint trigger systemChat systemOfUnits tan targetKnowledge targetsAggregate targetsQuery taskChildren taskCompleted taskDescription taskDestination taskHint taskNull taskParent taskResult taskState teamMember teamMemberNull teamName teams teamSwitch teamSwitchEnabled teamType terminate terrainIntersect terrainIntersectASL text text location textLog textLogFormat tg time timeMultiplier titleCut titleFadeOut titleObj titleRsc titleText toArray toLower toString toUpper triggerActivated triggerActivation triggerArea triggerAttachedVehicle triggerAttachObject triggerAttachVehicle triggerStatements triggerText triggerTimeout triggerTimeoutCurrent triggerType turretLocal turretOwner turretUnit tvAdd tvClear tvCollapse tvCount tvCurSel tvData tvDelete tvExpand tvPicture tvSetCurSel tvSetData tvSetPicture tvSetPictureColor tvSetTooltip tvSetValue tvSort tvSortByValue tvText tvValue type typeName typeOf UAVControl uiNamespace uiSleep unassignCurator unassignItem unassignTeam unassignVehicle underwater uniform uniformContainer uniformItems uniformMagazines unitAddons unitBackpack unitPos unitReady unitRecoilCoefficient units unitsBelowHeight unlinkItem unlockAchievement unregisterTask updateDrawIcon updateMenuItem updateObjectTree useAudioTimeForMoves vectorAdd vectorCos vectorCrossProduct vectorDiff vectorDir vectorDirVisual vectorDistance vectorDistanceSqr vectorDotProduct vectorFromTo vectorMagnitude vectorMagnitudeSqr vectorMultiply vectorNormalized vectorUp vectorUpVisual vehicle vehicleChat vehicleRadio vehicles vehicleVarName velocity velocityModelSpace verifySignature vest vestContainer vestItems vestMagazines viewDistance visibleCompass visibleGPS visibleMap visiblePosition visiblePositionASL visibleWatch waitUntil waves waypointAttachedObject waypointAttachedVehicle waypointAttachObject waypointAttachVehicle waypointBehaviour waypointCombatMode waypointCompletionRadius waypointDescription waypointFormation waypointHousePosition waypointLoiterRadius waypointLoiterType waypointName waypointPosition waypoints waypointScript waypointsEnabledUAV waypointShow waypointSpeed waypointStatements waypointTimeout waypointTimeoutCurrent waypointType waypointVisible weaponAccessories weaponCargo weaponDirection weaponLowered weapons weaponsItems weaponsItemsCargo weaponState weaponsTurret weightRTD west WFSideText wind windDir windStr wingsForcesRTD worldName worldSize worldToModel worldToModelVisual worldToScreen _forEachIndex _this _x",
			literal: "true false nil"
		},
		c: [a.CLCM, a.CBCM, a.NM, c, b.preprocessor],
		i: /#/
	}
}), hljs.registerLanguage("ebnf", function(a) {
	var b = a.C(/\(\*/, /\*\)/),
		c = {
			cN: "attribute",
			b: /^[ ]*[a-zA-Z][a-zA-Z-]*([\s-]+[a-zA-Z][a-zA-Z]*)*/
		},
		d = {
			cN: "meta",
			b: /\?.*\?/
		},
		e = {
			b: /=/,
			e: /;/,
			c: [b, d, a.ASM, a.QSM]
		};
	return {
		i: /\S/,
		c: [b, c, e]
	}
}), hljs.registerLanguage("less", function(a) {
	var b = "[\\w-]+",
		c = "(" + b + "|@{" + b + "})",
		d = [],
		e = [],
		f = function(a) {
			return {
				cN: "string",
				b: "~?" + a + ".*?" + a
			}
		},
		g = function(a, b, c) {
			return {
				cN: a,
				b: b,
				r: c
			}
		},
		h = {
			b: "\\(",
			e: "\\)",
			c: e,
			r: 0
		};
	e.push(a.CLCM, a.CBCM, f("'"), f('"'), a.CSSNM, {
		b: "(url|data-uri)\\(",
		starts: {
			cN: "string",
			e: "[\\)\\n]",
			eE: !0
		}
	}, g("number", "#[0-9A-Fa-f]+\\b"), h, g("variable", "@@?" + b, 10), g("variable", "@{" + b + "}"), g("built_in", "~?`[^`]*?`"), {
		cN: "attribute",
		b: b + "\\s*:",
		e: ":",
		rB: !0,
		eE: !0
	}, {
		cN: "meta",
		b: "!important"
	});
	var i = e.concat({
			b: "{",
			e: "}",
			c: d
		}),
		j = {
			bK: "when",
			eW: !0,
			c: [{
				bK: "and not"
			}].concat(e)
		},
		k = {
			b: c + "\\s*:",
			rB: !0,
			e: "[;}]",
			r: 0,
			c: [{
				cN: "attribute",
				b: c,
				e: ":",
				eE: !0,
				starts: {
					eW: !0,
					i: "[<=$]",
					r: 0,
					c: e
				}
			}]
		},
		l = {
			cN: "keyword",
			b: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
			starts: {
				e: "[;{}]",
				rE: !0,
				c: e,
				r: 0
			}
		},
		m = {
			cN: "variable",
			v: [{
				b: "@" + b + "\\s*:",
				r: 15
			}, {
				b: "@" + b
			}],
			starts: {
				e: "[;}]",
				rE: !0,
				c: i
			}
		},
		n = {
			v: [{
				b: "[\\.#:&\\[>]",
				e: "[;{}]"
			}, {
				b: c,
				e: "{"
			}],
			rB: !0,
			rE: !0,
			i: "[<='$\"]",
			r: 0,
			c: [a.CLCM, a.CBCM, j, g("keyword", "all\\b"), g("variable", "@{" + b + "}"), g("selector-tag", c + "%?", 0), g("selector-id", "#" + c), g("selector-class", "\\." + c, 0), g("selector-tag", "&", 0), {
				cN: "selector-attr",
				b: "\\[",
				e: "\\]"
			}, {
				cN: "selector-pseudo",
				b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
			}, {
				b: "\\(",
				e: "\\)",
				c: i
			}, {
				b: "!important"
			}]
		};
	return d.push(a.CLCM, a.CBCM, l, m, k, n), {
		cI: !0,
		i: "[=>'/<($\"]",
		c: d
	}
}), hljs.registerLanguage("cmake", function(a) {
	return {
		aliases: ["cmake.in"],
		cI: !0,
		k: {
			keyword: "add_custom_command add_custom_target add_definitions add_dependencies add_executable add_library add_subdirectory add_test aux_source_directory break build_command cmake_minimum_required cmake_policy configure_file create_test_sourcelist define_property else elseif enable_language enable_testing endforeach endfunction endif endmacro endwhile execute_process export find_file find_library find_package find_path find_program fltk_wrap_ui foreach function get_cmake_property get_directory_property get_filename_component get_property get_source_file_property get_target_property get_test_property if include include_directories include_external_msproject include_regular_expression install link_directories load_cache load_command macro mark_as_advanced message option output_required_files project qt_wrap_cpp qt_wrap_ui remove_definitions return separate_arguments set set_directory_properties set_property set_source_files_properties set_target_properties set_tests_properties site_name source_group string target_link_libraries try_compile try_run unset variable_watch while build_name exec_program export_library_dependencies install_files install_programs install_targets link_libraries make_directory remove subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or equal less greater strless strgreater strequal matches"
		},
		c: [{
			cN: "variable",
			b: "\\${",
			e: "}"
		}, a.HCM, a.QSM, a.NM]
	}
}), hljs.registerLanguage("python", function(a) {
	var b = {
			cN: "meta",
			b: /^(>>>|\.\.\.) /
		},
		c = {
			cN: "string",
			c: [a.BE],
			v: [{
				b: /(u|b)?r?'''/,
				e: /'''/,
				c: [b],
				r: 10
			}, {
				b: /(u|b)?r?"""/,
				e: /"""/,
				c: [b],
				r: 10
			}, {
				b: /(u|r|ur)'/,
				e: /'/,
				r: 10
			}, {
				b: /(u|r|ur)"/,
				e: /"/,
				r: 10
			}, {
				b: /(b|br)'/,
				e: /'/
			}, {
				b: /(b|br)"/,
				e: /"/
			}, a.ASM, a.QSM]
		},
		d = {
			cN: "number",
			r: 0,
			v: [{
				b: a.BNR + "[lLjJ]?"
			}, {
				b: "\\b(0o[0-7]+)[lLjJ]?"
			}, {
				b: a.CNR + "[lLjJ]?"
			}]
		},
		e = {
			cN: "params",
			b: /\(/,
			e: /\)/,
			c: ["self", b, d, c]
		};
	return {
		aliases: ["py", "gyp"],
		k: {
			keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",
			built_in: "Ellipsis NotImplemented"
		},
		i: /(<\/|->|\?)/,
		c: [b, d, c, a.HCM, {
			v: [{
				cN: "function",
				bK: "def",
				r: 10
			}, {
				cN: "class",
				bK: "class"
			}],
			e: /:/,
			i: /[${=;\n,]/,
			c: [a.UTM, e, {
				b: /->/,
				eW: !0,
				k: "None"
			}]
		}, {
			cN: "meta",
			b: /^[\t ]*@/,
			e: /$/
		}, {
			b: /\b(print|exec)\(/
		}]
	}
}), hljs.registerLanguage("abnf", function(a) {
	var b = {
			ruleDeclaration: "^[a-zA-Z][a-zA-Z0-9-]*",
			unexpectedChars: "[!@#$^&',?+~`|:]"
		},
		c = ["ALPHA", "BIT", "CHAR", "CR", "CRLF", "CTL", "DIGIT", "DQUOTE", "HEXDIG", "HTAB", "LF", "LWSP", "OCTET", "SP", "VCHAR", "WSP"],
		d = a.C(";", "$"),
		e = {
			cN: "symbol",
			b: /%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/
		},
		f = {
			cN: "symbol",
			b: /%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/
		},
		g = {
			cN: "symbol",
			b: /%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/
		},
		h = {
			cN: "symbol",
			b: /%[si]/
		},
		i = {
			b: b.ruleDeclaration + "\\s*=",
			rB: !0,
			e: /=/,
			r: 0,
			c: [{
				cN: "attribute",
				b: b.ruleDeclaration
			}]
		};
	return {
		i: b.unexpectedChars,
		k: c.join(" "),
		c: [i, d, e, f, g, h, a.QSM, a.NM]
	}
}), hljs.registerLanguage("django", function(a) {
	var b = {
		b: /\|[A-Za-z]+:?/,
		k: {
			name: "truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone"
		},
		c: [a.QSM, a.ASM]
	};
	return {
		aliases: ["jinja"],
		cI: !0,
		sL: "xml",
		c: [a.C(/\{%\s*comment\s*%}/, /\{%\s*endcomment\s*%}/), a.C(/\{#/, /#}/), {
			cN: "template-tag",
			b: /\{%/,
			e: /%}/,
			c: [{
				cN: "name",
				b: /\w+/,
				k: {
					name: "comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim"
				},
				starts: {
					eW: !0,
					k: "in by as",
					c: [b],
					r: 0
				}
			}]
		}, {
			cN: "template-variable",
			b: /\{\{/,
			e: /}}/,
			c: [b]
		}]
	}
}), hljs.registerLanguage("applescript", function(a) {
	var b = a.inherit(a.QSM, {
			i: ""
		}),
		c = {
			cN: "params",
			b: "\\(",
			e: "\\)",
			c: ["self", a.CNM, b]
		},
		d = a.C("--", "$"),
		e = a.C("\\(\\*", "\\*\\)", {
			c: ["self", d]
		}),
		f = [d, e, a.HCM];
	return {
		aliases: ["osascript"],
		k: {
			keyword: "about above after against and around as at back before beginning behind below beneath beside between but by considering contain contains continue copy div does eighth else end equal equals error every exit fifth first for fourth from front get given global if ignoring in into is it its last local me middle mod my ninth not of on onto or over prop property put ref reference repeat returning script second set seventh since sixth some tell tenth that the|0 then third through thru timeout times to transaction try until where while whose with without",
			literal: "AppleScript false linefeed return pi quote result space tab true",
			built_in: "alias application boolean class constant date file integer list number real record string text activate beep count delay launch log offset read round run say summarize write character characters contents day frontmost id item length month name paragraph paragraphs rest reverse running time version weekday word words year"
		},
		c: [b, a.CNM, {
			cN: "built_in",
			b: "\\b(clipboard info|the clipboard|info for|list (disks|folder)|mount volume|path to|(close|open for) access|(get|set) eof|current date|do shell script|get volume settings|random number|set volume|system attribute|system info|time to GMT|(load|run|store) script|scripting components|ASCII (character|number)|localized string|choose (application|color|file|file name|folder|from list|remote application|URL)|display (alert|dialog))\\b|^\\s*return\\b"
		}, {
			cN: "literal",
			b: "\\b(text item delimiters|current application|missing value)\\b"
		}, {
			cN: "keyword",
			b: "\\b(apart from|aside from|instead of|out of|greater than|isn't|(doesn't|does not) (equal|come before|come after|contain)|(greater|less) than( or equal)?|(starts?|ends|begins?) with|contained by|comes (before|after)|a (ref|reference)|POSIX file|POSIX path|(date|time) string|quoted form)\\b"
		}, {
			bK: "on",
			i: "[${=;\\n]",
			c: [a.UTM, c]
		}].concat(f),
		i: "//|->|=>|\\[\\["
	}
}), hljs.registerLanguage("haml", function(a) {
	return {
		cI: !0,
		c: [{
			cN: "meta",
			b: "^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$",
			r: 10
		}, a.C("^\\s*(!=#|=#|-#|/).*$", !1, {
			r: 0
		}), {
			b: "^\\s*(-|=|!=)(?!#)",
			starts: {
				e: "\\n",
				sL: "ruby"
			}
		}, {
			cN: "tag",
			b: "^\\s*%",
			c: [{
				cN: "selector-tag",
				b: "\\w+"
			}, {
				cN: "selector-id",
				b: "#[\\w-]+"
			}, {
				cN: "selector-class",
				b: "\\.[\\w-]+"
			}, {
				b: "{\\s*",
				e: "\\s*}",
				c: [{
					b: ":\\w+\\s*=>",
					e: ",\\s+",
					rB: !0,
					eW: !0,
					c: [{
						cN: "attr",
						b: ":\\w+"
					}, a.ASM, a.QSM, {
						b: "\\w+",
						r: 0
					}]
				}]
			}, {
				b: "\\(\\s*",
				e: "\\s*\\)",
				eE: !0,
				c: [{
					b: "\\w+\\s*=",
					e: "\\s+",
					rB: !0,
					eW: !0,
					c: [{
						cN: "attr",
						b: "\\w+",
						r: 0
					}, a.ASM, a.QSM, {
						b: "\\w+",
						r: 0
					}]
				}]
			}]
		}, {
			b: "^\\s*[=~]\\s*"
		}, {
			b: "#{",
			starts: {
				e: "}",
				sL: "ruby"
			}
		}]
	}
}), hljs.registerLanguage("rib", function(a) {
	return {
		k: "ArchiveRecord AreaLightSource Atmosphere Attribute AttributeBegin AttributeEnd Basis Begin Blobby Bound Clipping ClippingPlane Color ColorSamples ConcatTransform Cone CoordinateSystem CoordSysTransform CropWindow Curves Cylinder DepthOfField Detail DetailRange Disk Displacement Display End ErrorHandler Exposure Exterior Format FrameAspectRatio FrameBegin FrameEnd GeneralPolygon GeometricApproximation Geometry Hider Hyperboloid Identity Illuminate Imager Interior LightSource MakeCubeFaceEnvironment MakeLatLongEnvironment MakeShadow MakeTexture Matte MotionBegin MotionEnd NuPatch ObjectBegin ObjectEnd ObjectInstance Opacity Option Orientation Paraboloid Patch PatchMesh Perspective PixelFilter PixelSamples PixelVariance Points PointsGeneralPolygons PointsPolygons Polygon Procedural Projection Quantize ReadArchive RelativeDetail ReverseOrientation Rotate Scale ScreenWindow ShadingInterpolation ShadingRate Shutter Sides Skew SolidBegin SolidEnd Sphere SubdivisionMesh Surface TextureCoordinates Torus Transform TransformBegin TransformEnd TransformPoints Translate TrimCurve WorldBegin WorldEnd",
		i: "</",
		c: [a.HCM, a.CNM, a.ASM, a.QSM]
	}
}), hljs.registerLanguage("mizar", function(a) {
	return {
		k: "environ vocabularies notations constructors definitions registrations theorems schemes requirements begin end definition registration cluster existence pred func defpred deffunc theorem proof let take assume then thus hence ex for st holds consider reconsider such that and in provided of as from be being by means equals implies iff redefine define now not or attr is mode suppose per cases set thesis contradiction scheme reserve struct correctness compatibility coherence symmetry assymetry reflexivity irreflexivity connectedness uniqueness commutativity idempotence involutiveness projectivity",
		c: [a.C("::", "$")]
	}
}), hljs.registerLanguage("go", function(a) {
	var b = {
		keyword: "break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
		literal: "true false iota nil",
		built_in: "append cap close complex copy imag len make new panic print println real recover delete"
	};
	return {
		aliases: ["golang"],
		k: b,
		i: "</",
		c: [a.CLCM, a.CBCM, {
			cN: "string",
			v: [a.QSM, {
				b: "'",
				e: "[^\\\\]'"
			}, {
				b: "`",
				e: "`"
			}]
		}, {
			cN: "number",
			v: [{
				b: a.CNR + "[dflsi]",
				r: 1
			}, a.CNM]
		}, {
			b: /:=/
		}, {
			cN: "function",
			bK: "func",
			e: /\s*\{/,
			eE: !0,
			c: [a.TM, {
				cN: "params",
				b: /\(/,
				e: /\)/,
				k: b,
				i: /["']/
			}]
		}]
	}
}), hljs.registerLanguage("prolog", function(a) {
	var b = {
			b: /[a-z][A-Za-z0-9_]*/,
			r: 0
		},
		c = {
			cN: "symbol",
			v: [{
				b: /[A-Z][a-zA-Z0-9_]*/
			}, {
				b: /_[A-Za-z0-9_]*/
			}],
			r: 0
		},
		d = {
			b: /\(/,
			e: /\)/,
			r: 0
		},
		e = {
			b: /\[/,
			e: /\]/
		},
		f = {
			cN: "comment",
			b: /%/,
			e: /$/,
			c: [a.PWM]
		},
		g = {
			cN: "string",
			b: /`/,
			e: /`/,
			c: [a.BE]
		},
		h = {
			cN: "string",
			b: /0\'(\\\'|.)/
		},
		i = {
			cN: "string",
			b: /0\'\\s/
		},
		j = {
			b: /:-/
		},
		k = [b, c, d, j, e, f, a.CBCM, a.QSM, a.ASM, g, h, i, a.CNM];
	return d.c = k, e.c = k, {
		c: k.concat([{
			b: /\.$/
		}])
	}
}), hljs.registerLanguage("perl", function(a) {
	var b = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
		c = {
			cN: "subst",
			b: "[$@]\\{",
			e: "\\}",
			k: b
		},
		d = {
			b: "->{",
			e: "}"
		},
		e = {
			v: [{
				b: /\$\d/
			}, {
				b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/
			}, {
				b: /[\$%@][^\s\w{]/,
				r: 0
			}]
		},
		f = [a.BE, c, e],
		g = [e, a.HCM, a.C("^\\=\\w", "\\=cut", {
			eW: !0
		}), d, {
			cN: "string",
			c: f,
			v: [{
				b: "q[qwxr]?\\s*\\(",
				e: "\\)",
				r: 5
			}, {
				b: "q[qwxr]?\\s*\\[",
				e: "\\]",
				r: 5
			}, {
				b: "q[qwxr]?\\s*\\{",
				e: "\\}",
				r: 5
			}, {
				b: "q[qwxr]?\\s*\\|",
				e: "\\|",
				r: 5
			}, {
				b: "q[qwxr]?\\s*\\<",
				e: "\\>",
				r: 5
			}, {
				b: "qw\\s+q",
				e: "q",
				r: 5
			}, {
				b: "'",
				e: "'",
				c: [a.BE]
			}, {
				b: '"',
				e: '"'
			}, {
				b: "`",
				e: "`",
				c: [a.BE]
			}, {
				b: "{\\w+}",
				c: [],
				r: 0
			}, {
				b: "-?\\w+\\s*\\=\\>",
				c: [],
				r: 0
			}]
		}, {
			cN: "number",
			b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
			r: 0
		}, {
			b: "(\\/\\/|" + a.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
			k: "split return print reverse grep",
			r: 0,
			c: [a.HCM, {
				cN: "regexp",
				b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
				r: 10
			}, {
				cN: "regexp",
				b: "(m|qr)?/",
				e: "/[a-z]*",
				c: [a.BE],
				r: 0
			}]
		}, {
			cN: "function",
			bK: "sub",
			e: "(\\s*\\(.*?\\))?[;{]",
			eE: !0,
			r: 5,
			c: [a.TM]
		}, {
			b: "-\\w\\b",
			r: 0
		}, {
			b: "^__DATA__$",
			e: "^__END__$",
			sL: "mojolicious",
			c: [{
				b: "^@@.*",
				e: "$",
				cN: "comment"
			}]
		}];
	return c.c = g, d.c = g, {
		aliases: ["pl", "pm"],
		l: /[\w\.]+/,
		k: b,
		c: g
	}
}), hljs.registerLanguage("mojolicious", function(a) {
	return {
		sL: "xml",
		c: [{
			cN: "meta",
			b: "^__(END|DATA)__$"
		}, {
			b: "^\\s*%{1,2}={0,2}",
			e: "$",
			sL: "perl"
		}, {
			b: "<%{1,2}={0,2}",
			e: "={0,1}%>",
			sL: "perl",
			eB: !0,
			eE: !0
		}]
	}
}), hljs.registerLanguage("lasso", function(a) {
	var b = "[a-zA-Z_][\\w.]*",
		c = "<\\?(lasso(script)?|=)",
		d = "\\]|\\?>",
		e = {
			literal: "true false none minimal full all void and or not bw nbw ew new cn ncn lt lte gt gte eq neq rx nrx ft",
			built_in: "array date decimal duration integer map pair string tag xml null boolean bytes keyword list locale queue set stack staticarray local var variable global data self inherited currentcapture givenblock",
			keyword: "cache database_names database_schemanames database_tablenames define_tag define_type email_batch encode_set html_comment handle handle_error header if inline iterate ljax_target link link_currentaction link_currentgroup link_currentrecord link_detail link_firstgroup link_firstrecord link_lastgroup link_lastrecord link_nextgroup link_nextrecord link_prevgroup link_prevrecord log loop namespace_using output_none portal private protect records referer referrer repeating resultset rows search_args search_arguments select sort_args sort_arguments thread_atomic value_list while abort case else fail_if fail_ifnot fail if_empty if_false if_null if_true loop_abort loop_continue loop_count params params_up return return_value run_children soap_definetag soap_lastrequest soap_lastresponse tag_name ascending average by define descending do equals frozen group handle_failure import in into join let match max min on order parent protected provide public require returnhome skip split_thread sum take thread to trait type where with yield yieldhome"
		},
		f = a.C("<!--", "-->", {
			r: 0
		}),
		g = {
			cN: "meta",
			b: "\\[noprocess\\]",
			starts: {
				e: "\\[/noprocess\\]",
				rE: !0,
				c: [f]
			}
		},
		h = {
			cN: "meta",
			b: "\\[/noprocess|" + c
		},
		i = {
			cN: "symbol",
			b: "'" + b + "'"
		},
		j = [a.CLCM, a.CBCM, a.inherit(a.CNM, {
			b: a.CNR + "|(-?infinity|NaN)\\b"
		}), a.inherit(a.ASM, {
			i: null
		}), a.inherit(a.QSM, {
			i: null
		}), {
			cN: "string",
			b: "`",
			e: "`"
		}, {
			v: [{
				b: "[#$]" + b
			}, {
				b: "#",
				e: "\\d+",
				i: "\\W"
			}]
		}, {
			cN: "type",
			b: "::\\s*",
			e: b,
			i: "\\W"
		}, {
			cN: "params",
			v: [{
				b: "-(?!infinity)" + b,
				r: 0
			}, {
				b: "(\\.\\.\\.)"
			}]
		}, {
			b: /(->|\.)\s*/,
			r: 0,
			c: [i]
		}, {
			cN: "class",
			bK: "define",
			rE: !0,
			e: "\\(|=>",
			c: [a.inherit(a.TM, {
				b: b + "(=(?!>))?|[-+*/%](?!>)"
			})]
		}];
	return {
		aliases: ["ls", "lassoscript"],
		cI: !0,
		l: b + "|&[lg]t;",
		k: e,
		c: [{
			cN: "meta",
			b: d,
			r: 0,
			starts: {
				e: "\\[|" + c,
				rE: !0,
				r: 0,
				c: [f]
			}
		}, g, h, {
			cN: "meta",
			b: "\\[no_square_brackets",
			starts: {
				e: "\\[/no_square_brackets\\]",
				l: b + "|&[lg]t;",
				k: e,
				c: [{
					cN: "meta",
					b: d,
					r: 0,
					starts: {
						e: "\\[noprocess\\]|" + c,
						rE: !0,
						c: [f]
					}
				}, g, h].concat(j)
			}
		}, {
			cN: "meta",
			b: "\\[",
			r: 0
		}, {
			cN: "meta",
			b: "^#!",
			e: "lasso9$",
			r: 10
		}].concat(j)
	}
}), hljs.registerLanguage("smalltalk", function(a) {
	var b = "[a-z][a-zA-Z0-9_]*",
		c = {
			cN: "string",
			b: "\\$.{1}"
		},
		d = {
			cN: "symbol",
			b: "#" + a.UIR
		};
	return {
		aliases: ["st"],
		k: "self super nil true false thisContext",
		c: [a.C('"', '"'), a.ASM, {
			cN: "type",
			b: "\\b[A-Z][A-Za-z0-9_]*",
			r: 0
		}, {
			b: b + ":",
			r: 0
		}, a.CNM, d, c, {
			b: "\\|[ ]*" + b + "([ ]+" + b + ")*[ ]*\\|",
			rB: !0,
			e: /\|/,
			i: /\S/,
			c: [{
				b: "(\\|[ ]*)?" + b
			}]
		}, {
			b: "\\#\\(",
			e: "\\)",
			c: [a.ASM, c, a.CNM, d]
		}]
	}
}), hljs.registerLanguage("asciidoc", function(a) {
	return {
		aliases: ["adoc"],
		c: [a.C("^/{4,}\\n", "\\n/{4,}$", {
			r: 10
		}), a.C("^//", "$", {
			r: 0
		}), {
			cN: "title",
			b: "^\\.\\w.*$"
		}, {
			b: "^[=\\*]{4,}\\n",
			e: "\\n^[=\\*]{4,}$",
			r: 10
		}, {
			cN: "section",
			r: 10,
			v: [{
				b: "^(={1,5}) .+?( \\1)?$"
			}, {
				b: "^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$"
			}]
		}, {
			cN: "meta",
			b: "^:.+?:",
			e: "\\s",
			eE: !0,
			r: 10
		}, {
			cN: "meta",
			b: "^\\[.+?\\]$",
			r: 0
		}, {
			cN: "quote",
			b: "^_{4,}\\n",
			e: "\\n_{4,}$",
			r: 10
		}, {
			cN: "code",
			b: "^[\\-\\.]{4,}\\n",
			e: "\\n[\\-\\.]{4,}$",
			r: 10
		}, {
			b: "^\\+{4,}\\n",
			e: "\\n\\+{4,}$",
			c: [{
				b: "<",
				e: ">",
				sL: "xml",
				r: 0
			}],
			r: 10
		}, {
			cN: "bullet",
			b: "^(\\*+|\\-+|\\.+|[^\\n]+?::)\\s+"
		}, {
			cN: "symbol",
			b: "^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+",
			r: 10
		}, {
			cN: "strong",
			b: "\\B\\*(?![\\*\\s])",
			e: "(\\n{2}|\\*)",
			c: [{
				b: "\\\\*\\w",
				r: 0
			}]
		}, {
			cN: "emphasis",
			b: "\\B'(?!['\\s])",
			e: "(\\n{2}|')",
			c: [{
				b: "\\\\'\\w",
				r: 0
			}],
			r: 0
		}, {
			cN: "emphasis",
			b: "_(?![_\\s])",
			e: "(\\n{2}|_)",
			r: 0
		}, {
			cN: "string",
			v: [{
				b: "``.+?''"
			}, {
				b: "`.+?'"
			}]
		}, {
			cN: "code",
			b: "(`.+?`|\\+.+?\\+)",
			r: 0
		}, {
			cN: "code",
			b: "^[ \\t]",
			e: "$",
			r: 0
		}, {
			b: "^'{3,}[ \\t]*$",
			r: 10
		}, {
			b: "(link:)?(http|https|ftp|file|irc|image:?):\\S+\\[.*?\\]",
			rB: !0,
			c: [{
				b: "(link|image:?):",
				r: 0
			}, {
				cN: "link",
				b: "\\w",
				e: "[^\\[]+",
				r: 0
			}, {
				cN: "string",
				b: "\\[",
				e: "\\]",
				eB: !0,
				eE: !0,
				r: 0
			}],
			r: 10
		}]
	}
}), hljs.registerLanguage("mel", function(a) {
	return {
		k: "int float string vector matrix if else switch case default while do for in break continue global proc return about abs addAttr addAttributeEditorNodeHelp addDynamic addNewShelfTab addPP addPanelCategory addPrefixToName advanceToNextDrivenKey affectedNet affects aimConstraint air alias aliasAttr align alignCtx alignCurve alignSurface allViewFit ambientLight angle angleBetween animCone animCurveEditor animDisplay animView annotate appendStringArray applicationName applyAttrPreset applyTake arcLenDimContext arcLengthDimension arclen arrayMapper art3dPaintCtx artAttrCtx artAttrPaintVertexCtx artAttrSkinPaintCtx artAttrTool artBuildPaintMenu artFluidAttrCtx artPuttyCtx artSelectCtx artSetPaintCtx artUserPaintCtx assignCommand assignInputDevice assignViewportFactories attachCurve attachDeviceAttr attachSurface attrColorSliderGrp attrCompatibility attrControlGrp attrEnumOptionMenu attrEnumOptionMenuGrp attrFieldGrp attrFieldSliderGrp attrNavigationControlGrp attrPresetEditWin attributeExists attributeInfo attributeMenu attributeQuery autoKeyframe autoPlace bakeClip bakeFluidShading bakePartialHistory bakeResults bakeSimulation basename basenameEx batchRender bessel bevel bevelPlus binMembership bindSkin blend2 blendShape blendShapeEditor blendShapePanel blendTwoAttr blindDataType boneLattice boundary boxDollyCtx boxZoomCtx bufferCurve buildBookmarkMenu buildKeyframeMenu button buttonManip CBG cacheFile cacheFileCombine cacheFileMerge cacheFileTrack camera cameraView canCreateManip canvas capitalizeString catch catchQuiet ceil changeSubdivComponentDisplayLevel changeSubdivRegion channelBox character characterMap characterOutlineEditor characterize chdir checkBox checkBoxGrp checkDefaultRenderGlobals choice circle circularFillet clamp clear clearCache clip clipEditor clipEditorCurrentTimeCtx clipSchedule clipSchedulerOutliner clipTrimBefore closeCurve closeSurface cluster cmdFileOutput cmdScrollFieldExecuter cmdScrollFieldReporter cmdShell coarsenSubdivSelectionList collision color colorAtPoint colorEditor colorIndex colorIndexSliderGrp colorSliderButtonGrp colorSliderGrp columnLayout commandEcho commandLine commandPort compactHairSystem componentEditor compositingInterop computePolysetVolume condition cone confirmDialog connectAttr connectControl connectDynamic connectJoint connectionInfo constrain constrainValue constructionHistory container containsMultibyte contextInfo control convertFromOldLayers convertIffToPsd convertLightmap convertSolidTx convertTessellation convertUnit copyArray copyFlexor copyKey copySkinWeights cos cpButton cpCache cpClothSet cpCollision cpConstraint cpConvClothToMesh cpForces cpGetSolverAttr cpPanel cpProperty cpRigidCollisionFilter cpSeam cpSetEdit cpSetSolverAttr cpSolver cpSolverTypes cpTool cpUpdateClothUVs createDisplayLayer createDrawCtx createEditor createLayeredPsdFile createMotionField createNewShelf createNode createRenderLayer createSubdivRegion cross crossProduct ctxAbort ctxCompletion ctxEditMode ctxTraverse currentCtx currentTime currentTimeCtx currentUnit curve curveAddPtCtx curveCVCtx curveEPCtx curveEditorCtx curveIntersect curveMoveEPCtx curveOnSurface curveSketchCtx cutKey cycleCheck cylinder dagPose date defaultLightListCheckBox defaultNavigation defineDataServer defineVirtualDevice deformer deg_to_rad delete deleteAttr deleteShadingGroupsAndMaterials deleteShelfTab deleteUI deleteUnusedBrushes delrandstr detachCurve detachDeviceAttr detachSurface deviceEditor devicePanel dgInfo dgdirty dgeval dgtimer dimWhen directKeyCtx directionalLight dirmap dirname disable disconnectAttr disconnectJoint diskCache displacementToPoly displayAffected displayColor displayCull displayLevelOfDetail displayPref displayRGBColor displaySmoothness displayStats displayString displaySurface distanceDimContext distanceDimension doBlur dolly dollyCtx dopeSheetEditor dot dotProduct doubleProfileBirailSurface drag dragAttrContext draggerContext dropoffLocator duplicate duplicateCurve duplicateSurface dynCache dynControl dynExport dynExpression dynGlobals dynPaintEditor dynParticleCtx dynPref dynRelEdPanel dynRelEditor dynamicLoad editAttrLimits editDisplayLayerGlobals editDisplayLayerMembers editRenderLayerAdjustment editRenderLayerGlobals editRenderLayerMembers editor editorTemplate effector emit emitter enableDevice encodeString endString endsWith env equivalent equivalentTol erf error eval evalDeferred evalEcho event exactWorldBoundingBox exclusiveLightCheckBox exec executeForEachObject exists exp expression expressionEditorListen extendCurve extendSurface extrude fcheck fclose feof fflush fgetline fgetword file fileBrowserDialog fileDialog fileExtension fileInfo filetest filletCurve filter filterCurve filterExpand filterStudioImport findAllIntersections findAnimCurves findKeyframe findMenuItem findRelatedSkinCluster finder firstParentOf fitBspline flexor floatEq floatField floatFieldGrp floatScrollBar floatSlider floatSlider2 floatSliderButtonGrp floatSliderGrp floor flow fluidCacheInfo fluidEmitter fluidVoxelInfo flushUndo fmod fontDialog fopen formLayout format fprint frameLayout fread freeFormFillet frewind fromNativePath fwrite gamma gauss geometryConstraint getApplicationVersionAsFloat getAttr getClassification getDefaultBrush getFileList getFluidAttr getInputDeviceRange getMayaPanelTypes getModifiers getPanel getParticleAttr getPluginResource getenv getpid glRender glRenderEditor globalStitch gmatch goal gotoBindPose grabColor gradientControl gradientControlNoAttr graphDollyCtx graphSelectContext graphTrackCtx gravity grid gridLayout group groupObjectsByName HfAddAttractorToAS HfAssignAS HfBuildEqualMap HfBuildFurFiles HfBuildFurImages HfCancelAFR HfConnectASToHF HfCreateAttractor HfDeleteAS HfEditAS HfPerformCreateAS HfRemoveAttractorFromAS HfSelectAttached HfSelectAttractors HfUnAssignAS hardenPointCurve hardware hardwareRenderPanel headsUpDisplay headsUpMessage help helpLine hermite hide hilite hitTest hotBox hotkey hotkeyCheck hsv_to_rgb hudButton hudSlider hudSliderButton hwReflectionMap hwRender hwRenderLoad hyperGraph hyperPanel hyperShade hypot iconTextButton iconTextCheckBox iconTextRadioButton iconTextRadioCollection iconTextScrollList iconTextStaticLabel ikHandle ikHandleCtx ikHandleDisplayScale ikSolver ikSplineHandleCtx ikSystem ikSystemInfo ikfkDisplayMethod illustratorCurves image imfPlugins inheritTransform insertJoint insertJointCtx insertKeyCtx insertKnotCurve insertKnotSurface instance instanceable instancer intField intFieldGrp intScrollBar intSlider intSliderGrp interToUI internalVar intersect iprEngine isAnimCurve isConnected isDirty isParentOf isSameObject isTrue isValidObjectName isValidString isValidUiName isolateSelect itemFilter itemFilterAttr itemFilterRender itemFilterType joint jointCluster jointCtx jointDisplayScale jointLattice keyTangent keyframe keyframeOutliner keyframeRegionCurrentTimeCtx keyframeRegionDirectKeyCtx keyframeRegionDollyCtx keyframeRegionInsertKeyCtx keyframeRegionMoveKeyCtx keyframeRegionScaleKeyCtx keyframeRegionSelectKeyCtx keyframeRegionSetKeyCtx keyframeRegionTrackCtx keyframeStats lassoContext lattice latticeDeformKeyCtx launch launchImageEditor layerButton layeredShaderPort layeredTexturePort layout layoutDialog lightList lightListEditor lightListPanel lightlink lineIntersection linearPrecision linstep listAnimatable listAttr listCameras listConnections listDeviceAttachments listHistory listInputDeviceAxes listInputDeviceButtons listInputDevices listMenuAnnotation listNodeTypes listPanelCategories listRelatives listSets listTransforms listUnselected listerEditor loadFluid loadNewShelf loadPlugin loadPluginLanguageResources loadPrefObjects localizedPanelLabel lockNode loft log longNameOf lookThru ls lsThroughFilter lsType lsUI Mayatomr mag makeIdentity makeLive makePaintable makeRoll makeSingleSurface makeTubeOn makebot manipMoveContext manipMoveLimitsCtx manipOptions manipRotateContext manipRotateLimitsCtx manipScaleContext manipScaleLimitsCtx marker match max memory menu menuBarLayout menuEditor menuItem menuItemToShelf menuSet menuSetPref messageLine min minimizeApp mirrorJoint modelCurrentTimeCtx modelEditor modelPanel mouse movIn movOut move moveIKtoFK moveKeyCtx moveVertexAlongDirection multiProfileBirailSurface mute nParticle nameCommand nameField namespace namespaceInfo newPanelItems newton nodeCast nodeIconButton nodeOutliner nodePreset nodeType noise nonLinear normalConstraint normalize nurbsBoolean nurbsCopyUVSet nurbsCube nurbsEditUV nurbsPlane nurbsSelect nurbsSquare nurbsToPoly nurbsToPolygonsPref nurbsToSubdiv nurbsToSubdivPref nurbsUVSet nurbsViewDirectionVector objExists objectCenter objectLayer objectType objectTypeUI obsoleteProc oceanNurbsPreviewPlane offsetCurve offsetCurveOnSurface offsetSurface openGLExtension openMayaPref optionMenu optionMenuGrp optionVar orbit orbitCtx orientConstraint outlinerEditor outlinerPanel overrideModifier paintEffectsDisplay pairBlend palettePort paneLayout panel panelConfiguration panelHistory paramDimContext paramDimension paramLocator parent parentConstraint particle particleExists particleInstancer particleRenderInfo partition pasteKey pathAnimation pause pclose percent performanceOptions pfxstrokes pickWalk picture pixelMove planarSrf plane play playbackOptions playblast plugAttr plugNode pluginInfo pluginResourceUtil pointConstraint pointCurveConstraint pointLight pointMatrixMult pointOnCurve pointOnSurface pointPosition poleVectorConstraint polyAppend polyAppendFacetCtx polyAppendVertex polyAutoProjection polyAverageNormal polyAverageVertex polyBevel polyBlendColor polyBlindData polyBoolOp polyBridgeEdge polyCacheMonitor polyCheck polyChipOff polyClipboard polyCloseBorder polyCollapseEdge polyCollapseFacet polyColorBlindData polyColorDel polyColorPerVertex polyColorSet polyCompare polyCone polyCopyUV polyCrease polyCreaseCtx polyCreateFacet polyCreateFacetCtx polyCube polyCut polyCutCtx polyCylinder polyCylindricalProjection polyDelEdge polyDelFacet polyDelVertex polyDuplicateAndConnect polyDuplicateEdge polyEditUV polyEditUVShell polyEvaluate polyExtrudeEdge polyExtrudeFacet polyExtrudeVertex polyFlipEdge polyFlipUV polyForceUV polyGeoSampler polyHelix polyInfo polyInstallAction polyLayoutUV polyListComponentConversion polyMapCut polyMapDel polyMapSew polyMapSewMove polyMergeEdge polyMergeEdgeCtx polyMergeFacet polyMergeFacetCtx polyMergeUV polyMergeVertex polyMirrorFace polyMoveEdge polyMoveFacet polyMoveFacetUV polyMoveUV polyMoveVertex polyNormal polyNormalPerVertex polyNormalizeUV polyOptUvs polyOptions polyOutput polyPipe polyPlanarProjection polyPlane polyPlatonicSolid polyPoke polyPrimitive polyPrism polyProjection polyPyramid polyQuad polyQueryBlindData polyReduce polySelect polySelectConstraint polySelectConstraintMonitor polySelectCtx polySelectEditCtx polySeparate polySetToFaceNormal polySewEdge polyShortestPathCtx polySmooth polySoftEdge polySphere polySphericalProjection polySplit polySplitCtx polySplitEdge polySplitRing polySplitVertex polyStraightenUVBorder polySubdivideEdge polySubdivideFacet polyToSubdiv polyTorus polyTransfer polyTriangulate polyUVSet polyUnite polyWedgeFace popen popupMenu pose pow preloadRefEd print progressBar progressWindow projFileViewer projectCurve projectTangent projectionContext projectionManip promptDialog propModCtx propMove psdChannelOutliner psdEditTextureFile psdExport psdTextureFile putenv pwd python querySubdiv quit rad_to_deg radial radioButton radioButtonGrp radioCollection radioMenuItemCollection rampColorPort rand randomizeFollicles randstate rangeControl readTake rebuildCurve rebuildSurface recordAttr recordDevice redo reference referenceEdit referenceQuery refineSubdivSelectionList refresh refreshAE registerPluginResource rehash reloadImage removeJoint removeMultiInstance removePanelCategory rename renameAttr renameSelectionList renameUI render renderGlobalsNode renderInfo renderLayerButton renderLayerParent renderLayerPostProcess renderLayerUnparent renderManip renderPartition renderQualityNode renderSettings renderThumbnailUpdate renderWindowEditor renderWindowSelectContext renderer reorder reorderDeformers requires reroot resampleFluid resetAE resetPfxToPolyCamera resetTool resolutionNode retarget reverseCurve reverseSurface revolve rgb_to_hsv rigidBody rigidSolver roll rollCtx rootOf rot rotate rotationInterpolation roundConstantRadius rowColumnLayout rowLayout runTimeCommand runup sampleImage saveAllShelves saveAttrPreset saveFluid saveImage saveInitialState saveMenu savePrefObjects savePrefs saveShelf saveToolSettings scale scaleBrushBrightness scaleComponents scaleConstraint scaleKey scaleKeyCtx sceneEditor sceneUIReplacement scmh scriptCtx scriptEditorInfo scriptJob scriptNode scriptTable scriptToShelf scriptedPanel scriptedPanelType scrollField scrollLayout sculpt searchPathArray seed selLoadSettings select selectContext selectCurveCV selectKey selectKeyCtx selectKeyframeRegionCtx selectMode selectPref selectPriority selectType selectedNodes selectionConnection separator setAttr setAttrEnumResource setAttrMapping setAttrNiceNameResource setConstraintRestPosition setDefaultShadingGroup setDrivenKeyframe setDynamic setEditCtx setEditor setFluidAttr setFocus setInfinity setInputDeviceMapping setKeyCtx setKeyPath setKeyframe setKeyframeBlendshapeTargetWts setMenuMode setNodeNiceNameResource setNodeTypeFlag setParent setParticleAttr setPfxToPolyCamera setPluginResource setProject setStampDensity setStartupMessage setState setToolTo setUITemplate setXformManip sets shadingConnection shadingGeometryRelCtx shadingLightRelCtx shadingNetworkCompare shadingNode shapeCompare shelfButton shelfLayout shelfTabLayout shellField shortNameOf showHelp showHidden showManipCtx showSelectionInTitle showShadingGroupAttrEditor showWindow sign simplify sin singleProfileBirailSurface size sizeBytes skinCluster skinPercent smoothCurve smoothTangentSurface smoothstep snap2to2 snapKey snapMode snapTogetherCtx snapshot soft softMod softModCtx sort sound soundControl source spaceLocator sphere sphrand spotLight spotLightPreviewPort spreadSheetEditor spring sqrt squareSurface srtContext stackTrace startString startsWith stitchAndExplodeShell stitchSurface stitchSurfacePoints strcmp stringArrayCatenate stringArrayContains stringArrayCount stringArrayInsertAtIndex stringArrayIntersector stringArrayRemove stringArrayRemoveAtIndex stringArrayRemoveDuplicates stringArrayRemoveExact stringArrayToString stringToStringArray strip stripPrefixFromName stroke subdAutoProjection subdCleanTopology subdCollapse subdDuplicateAndConnect subdEditUV subdListComponentConversion subdMapCut subdMapSewMove subdMatchTopology subdMirror subdToBlind subdToPoly subdTransferUVsToCache subdiv subdivCrease subdivDisplaySmoothness substitute substituteAllString substituteGeometry substring surface surfaceSampler surfaceShaderList swatchDisplayPort switchTable symbolButton symbolCheckBox sysFile system tabLayout tan tangentConstraint texLatticeDeformContext texManipContext texMoveContext texMoveUVShellContext texRotateContext texScaleContext texSelectContext texSelectShortestPathCtx texSmudgeUVContext texWinToolCtx text textCurves textField textFieldButtonGrp textFieldGrp textManip textScrollList textToShelf textureDisplacePlane textureHairColor texturePlacementContext textureWindow threadCount threePointArcCtx timeControl timePort timerX toNativePath toggle toggleAxis toggleWindowVisibility tokenize tokenizeList tolerance tolower toolButton toolCollection toolDropped toolHasOptions toolPropertyWindow torus toupper trace track trackCtx transferAttributes transformCompare transformLimits translator trim trunc truncateFluidCache truncateHairCache tumble tumbleCtx turbulence twoPointArcCtx uiRes uiTemplate unassignInputDevice undo undoInfo ungroup uniform unit unloadPlugin untangleUV untitledFileName untrim upAxis updateAE userCtx uvLink uvSnapshot validateShelfName vectorize view2dToolCtx viewCamera viewClipPlane viewFit viewHeadOn viewLookAt viewManip viewPlace viewSet visor volumeAxis vortex waitCursor warning webBrowser webBrowserPrefs whatIs window windowPref wire wireContext workspace wrinkle wrinkleContext writeTake xbmLangPathList xform",
		i: "</",
		c: [a.CNM, a.ASM, a.QSM, {
			cN: "string",
			b: "`",
			e: "`",
			c: [a.BE]
		}, {
			b: "[\\$\\%\\@](\\^\\w\\b|#\\w+|[^\\s\\w{]|{\\w+}|\\w+)"
		}, a.CLCM, a.CBCM]
	}
}), hljs.registerLanguage("irpf90", function(a) {
	var b = {
			cN: "params",
			b: "\\(",
			e: "\\)"
		},
		c = {
			literal: ".False. .True.",
			keyword: "kind do while private call intrinsic where elsewhere type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then public subroutine|10 function program .and. .or. .not. .le. .eq. .ge. .gt. .lt. goto save else use module select case access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit continue format pause cycle exit c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg synchronous nopass non_overridable pass protected volatile abstract extends import non_intrinsic value deferred generic final enumerator class associate bind enum c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous recursive pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure integer real character complex logical dimension allocatable|10 parameter external implicit|10 none double precision assign intent optional pointer target in out common equivalence data begin_provider &begin_provider end_provider begin_shell end_shell begin_template end_template subst assert touch soft_touch provide no_dep free irp_if irp_else irp_endif irp_write irp_read",
			built_in: "alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_ofacosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr num_images parity popcnt poppar shifta shiftl shiftr this_image IRP_ALIGN irp_here"
		};
	return {
		cI: !0,
		k: c,
		i: /\/\*/,
		c: [a.inherit(a.ASM, {
			cN: "string",
			r: 0
		}), a.inherit(a.QSM, {
			cN: "string",
			r: 0
		}), {
			cN: "function",
			bK: "subroutine function program",
			i: "[${=\\n]",
			c: [a.UTM, b]
		}, a.C("!", "$", {
			r: 0
		}), a.C("begin_doc", "end_doc", {
			r: 10
		}), {
			cN: "number",
			b: "(?=\\b|\\+|\\-|\\.)(?=\\.\\d|\\d)(?:\\d+)?(?:\\.?\\d*)(?:[de][+-]?\\d+)?\\b\\.?",
			r: 0
		}]
	}
}), hljs.registerLanguage("ldif", function(a) {
	return {
		c: [{
			cN: "attribute",
			b: "^dn",
			e: ": ",
			eE: !0,
			starts: {
				e: "$",
				r: 0
			},
			r: 10
		}, {
			cN: "attribute",
			b: "^\\w",
			e: ": ",
			eE: !0,
			starts: {
				e: "$",
				r: 0
			}
		}, {
			cN: "literal",
			b: "^-",
			e: "$"
		}, a.HCM]
	}
}), hljs.registerLanguage("step21", function(a) {
	var b = "[A-Z_][A-Z0-9_.]*",
		c = {
			keyword: "HEADER ENDSEC DATA"
		},
		d = {
			cN: "meta",
			b: "ISO-10303-21;",
			r: 10
		},
		e = {
			cN: "meta",
			b: "END-ISO-10303-21;",
			r: 10
		};
	return {
		aliases: ["p21", "step", "stp"],
		cI: !0,
		l: b,
		k: c,
		c: [d, e, a.CLCM, a.CBCM, a.C("/\\*\\*!", "\\*/"), a.CNM, a.inherit(a.ASM, {
			i: null
		}), a.inherit(a.QSM, {
			i: null
		}), {
			cN: "string",
			b: "'",
			e: "'"
		}, {
			cN: "symbol",
			v: [{
				b: "#",
				e: "\\d+",
				i: "\\W"
			}]
		}]
	}
}), hljs.registerLanguage("lisp", function(a) {
	var b = "[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*",
		c = "\\|[^]*?\\|",
		d = "(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|\\-)?\\d+)?",
		e = {
			cN: "meta",
			b: "^#!",
			e: "$"
		},
		f = {
			cN: "literal",
			b: "\\b(t{1}|nil)\\b"
		},
		g = {
			cN: "number",
			v: [{
				b: d,
				r: 0
			}, {
				b: "#(b|B)[0-1]+(/[0-1]+)?"
			}, {
				b: "#(o|O)[0-7]+(/[0-7]+)?"
			}, {
				b: "#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"
			}, {
				b: "#(c|C)\\(" + d + " +" + d,
				e: "\\)"
			}]
		},
		h = a.inherit(a.QSM, {
			i: null
		}),
		i = a.C(";", "$", {
			r: 0
		}),
		j = {
			b: "\\*",
			e: "\\*"
		},
		k = {
			cN: "symbol",
			b: "[:&]" + b
		},
		l = {
			b: b,
			r: 0
		},
		m = {
			b: c
		},
		n = {
			b: "\\(",
			e: "\\)",
			c: ["self", f, h, g, l]
		},
		o = {
			c: [g, h, j, k, n, l],
			v: [{
				b: "['`]\\(",
				e: "\\)"
			}, {
				b: "\\(quote ",
				e: "\\)",
				k: {
					name: "quote"
				}
			}, {
				b: "'" + c
			}]
		},
		p = {
			v: [{
				b: "'" + b
			}, {
				b: "#'" + b + "(::" + b + ")*"
			}]
		},
		q = {
			b: "\\(\\s*",
			e: "\\)"
		},
		r = {
			eW: !0,
			r: 0
		};
	return q.c = [{
		cN: "name",
		v: [{
			b: b
		}, {
			b: c
		}]
	}, r], r.c = [o, p, q, f, g, h, i, j, k, m, l], {
		i: /\S/,
		c: [g, e, f, h, i, o, p, q, l]
	}
}), hljs.registerLanguage("kotlin", function(a) {
	var b = {
			keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline interface annotation data sealed internal infix operator out by constructor super trait volatile transient native default",
			built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
			literal: "true false null"
		},
		c = {
			cN: "keyword",
			b: /\b(break|continue|return|this)\b/,
			starts: {
				c: [{
					cN: "symbol",
					b: /@\w+/
				}]
			}
		},
		d = {
			cN: "symbol",
			b: a.UIR + "@"
		},
		e = {
			cN: "subst",
			v: [{
				b: "\\$" + a.UIR
			}, {
				b: "\\${",
				e: "}",
				c: [a.ASM, a.CNM]
			}]
		},
		f = {
			cN: "string",
			v: [{
				b: '"""',
				e: '"""',
				c: [e]
			}, {
				b: "'",
				e: "'",
				i: /\n/,
				c: [a.BE]
			}, {
				b: '"',
				e: '"',
				i: /\n/,
				c: [a.BE, e]
			}]
		},
		g = {
			cN: "meta",
			b: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + a.UIR + ")?"
		},
		h = {
			cN: "meta",
			b: "@" + a.UIR,
			c: [{
				b: /\(/,
				e: /\)/,
				c: [a.inherit(f, {
					cN: "meta-string"
				})]
			}]
		};
	return {
		k: b,
		c: [a.C("/\\*\\*", "\\*/", {
			r: 0,
			c: [{
				cN: "doctag",
				b: "@[A-Za-z]+"
			}]
		}), a.CLCM, a.CBCM, c, d, g, h, {
			cN: "function",
			bK: "fun",
			e: "[(]|$",
			rB: !0,
			eE: !0,
			k: b,
			i: /fun\s+(<.*>)?[^\s\(]+(\s+[^\s\(]+)\s*=/,
			r: 5,
			c: [{
				b: a.UIR + "\\s*\\(",
				rB: !0,
				r: 0,
				c: [a.UTM]
			}, {
				cN: "type",
				b: /</,
				e: />/,
				k: "reified",
				r: 0
			}, {
				cN: "params",
				b: /\(/,
				e: /\)/,
				endsParent: !0,
				k: b,
				r: 0,
				c: [{
					b: /:/,
					e: /[=,\/]/,
					eW: !0,
					c: [{
						cN: "type",
						b: a.UIR
					}, a.CLCM, a.CBCM],
					r: 0
				}, a.CLCM, a.CBCM, g, h, f, a.CNM]
			}, a.CBCM]
		}, {
			cN: "class",
			bK: "class interface trait",
			e: /[:\{(]|$/,
			eE: !0,
			i: "extends implements",
			c: [{
				bK: "public protected internal private constructor"
			}, a.UTM, {
				cN: "type",
				b: /</,
				e: />/,
				eB: !0,
				eE: !0,
				r: 0
			}, {
				cN: "type",
				b: /[,:]\s*/,
				e: /[<\(,]|$/,
				eB: !0,
				rE: !0
			}, g, h]
		}, f, {
			cN: "meta",
			b: "^#!/usr/bin/env",
			e: "$",
			i: "\n"
		}, a.CNM]
	}
}), hljs.registerLanguage("dust", function(a) {
	var b = "if eq ne lt lte gt gte select default math sep";
	return {
		aliases: ["dst"],
		cI: !0,
		sL: "xml",
		c: [{
			cN: "template-tag",
			b: /\{[#\/]/,
			e: /\}/,
			i: /;/,
			c: [{
				cN: "name",
				b: /[a-zA-Z\.-]+/,
				starts: {
					eW: !0,
					r: 0,
					c: [a.QSM]
				}
			}]
		}, {
			cN: "template-variable",
			b: /\{/,
			e: /\}/,
			i: /;/,
			k: b
		}]
	}
}), hljs.registerLanguage("r", function(a) {
	var b = "([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";
	return {
		c: [a.HCM, {
			b: b,
			l: b,
			k: {
				keyword: "function if in break next repeat else for return switch while try tryCatch stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ...",
				literal: "NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10"
			},
			r: 0
		}, {
			cN: "number",
			b: "0[xX][0-9a-fA-F]+[Li]?\\b",
			r: 0
		}, {
			cN: "number",
			b: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
			r: 0
		}, {
			cN: "number",
			b: "\\d+\\.(?!\\d)(?:i\\b)?",
			r: 0
		}, {
			cN: "number",
			b: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
			r: 0
		}, {
			cN: "number",
			b: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
			r: 0
		}, {
			b: "`",
			e: "`",
			r: 0
		}, {
			cN: "string",
			c: [a.BE],
			v: [{
				b: '"',
				e: '"'
			}, {
				b: "'",
				e: "'"
			}]
		}]
	}
}), hljs.registerLanguage("coq", function(a) {
	return {
		k: {
			keyword: "_ as at cofix else end exists exists2 fix for forall fun if IF in let match mod Prop return Set then Type using where with Abort About Add Admit Admitted All Arguments Assumptions Axiom Back BackTo Backtrack Bind Blacklist Canonical Cd Check Class Classes Close Coercion Coercions CoFixpoint CoInductive Collection Combined Compute Conjecture Conjectures Constant constr Constraint Constructors Context Corollary CreateHintDb Cut Declare Defined Definition Delimit Dependencies DependentDerive Drop eauto End Equality Eval Example Existential Existentials Existing Export exporting Extern Extract Extraction Fact Field Fields File Fixpoint Focus for From Function Functional Generalizable Global Goal Grab Grammar Graph Guarded Heap Hint HintDb Hints Hypotheses Hypothesis ident Identity If Immediate Implicit Import Include Inductive Infix Info Initial Inline Inspect Instance Instances Intro Intros Inversion Inversion_clear Language Left Lemma Let Libraries Library Load LoadPath Local Locate Ltac ML Mode Module Modules Monomorphic Morphism Next NoInline Notation Obligation Obligations Opaque Open Optimize Options Parameter Parameters Parametric Path Paths pattern Polymorphic Preterm Print Printing Program Projections Proof Proposition Pwd Qed Quit Rec Record Recursive Redirect Relation Remark Remove Require Reserved Reset Resolve Restart Rewrite Right Ring Rings Save Scheme Scope Scopes Script Search SearchAbout SearchHead SearchPattern SearchRewrite Section Separate Set Setoid Show Solve Sorted Step Strategies Strategy Structure SubClass Table Tables Tactic Term Test Theorem Time Timeout Transparent Type Typeclasses Types Undelimit Undo Unfocus Unfocused Unfold Universe Universes Unset Unshelve using Variable Variables Variant Verbose Visibility where with",
			built_in: "abstract absurd admit after apply as assert assumption at auto autorewrite autounfold before bottom btauto by case case_eq cbn cbv change classical_left classical_right clear clearbody cofix compare compute congruence constr_eq constructor contradict contradiction cut cutrewrite cycle decide decompose dependent destruct destruction dintuition discriminate discrR do double dtauto eapply eassumption eauto ecase econstructor edestruct ediscriminate eelim eexact eexists einduction einjection eleft elim elimtype enough equality erewrite eright esimplify_eq esplit evar exact exactly_once exfalso exists f_equal fail field field_simplify field_simplify_eq first firstorder fix fold fourier functional generalize generalizing gfail give_up has_evar hnf idtac in induction injection instantiate intro intro_pattern intros intuition inversion inversion_clear is_evar is_var lapply lazy left lia lra move native_compute nia nsatz omega once pattern pose progress proof psatz quote record red refine reflexivity remember rename repeat replace revert revgoals rewrite rewrite_strat right ring ring_simplify rtauto set setoid_reflexivity setoid_replace setoid_rewrite setoid_symmetry setoid_transitivity shelve shelve_unifiable simpl simple simplify_eq solve specialize split split_Rabs split_Rmult stepl stepr subst sum swap symmetry tactic tauto time timeout top transitivity trivial try tryif unfold unify until using vm_compute with"
		},
		c: [a.QSM, a.C("\\(\\*", "\\*\\)"), a.CNM, {
			cN: "type",
			eB: !0,
			b: "\\|\\s*",
			e: "\\w+"
		}, {
			b: /[-=]>/
		}]
	}
}), hljs.registerLanguage("dart", function(a) {
	var b = {
			cN: "subst",
			b: "\\$\\{",
			e: "}",
			k: "true false null this is new super"
		},
		c = {
			cN: "string",
			v: [{
				b: "r'''",
				e: "'''"
			}, {
				b: 'r"""',
				e: '"""'
			}, {
				b: "r'",
				e: "'",
				i: "\\n"
			}, {
				b: 'r"',
				e: '"',
				i: "\\n"
			}, {
				b: "'''",
				e: "'''",
				c: [a.BE, b]
			}, {
				b: '"""',
				e: '"""',
				c: [a.BE, b]
			}, {
				b: "'",
				e: "'",
				i: "\\n",
				c: [a.BE, b]
			}, {
				b: '"',
				e: '"',
				i: "\\n",
				c: [a.BE, b]
			}]
		};
	b.c = [a.CNM, c];
	var d = {
		keyword: "assert async await break case catch class const continue default do else enum extends false final finally for if in is new null rethrow return super switch sync this throw true try var void while with yield abstract as dynamic export external factory get implements import library operator part set static typedef",
		built_in: "print Comparable DateTime Duration Function Iterable Iterator List Map Match Null Object Pattern RegExp Set Stopwatch String StringBuffer StringSink Symbol Type Uri bool double int num document window querySelector querySelectorAll Element ElementList"
	};
	return {
		k: d,
		c: [c, a.C("/\\*\\*", "\\*/", {
			sL: "markdown"
		}), a.C("///", "$", {
			sL: "markdown"
		}), a.CLCM, a.CBCM, {
			cN: "class",
			bK: "class interface",
			e: "{",
			eE: !0,
			c: [{
				bK: "extends implements"
			}, a.UTM]
		}, a.CNM, {
			cN: "meta",
			b: "@[A-Za-z]+"
		}, {
			b: "=>"
		}]
	}
}), hljs.registerLanguage("delphi", function(a) {
	var b = "exports register file shl array record property for mod while set ally label uses raise not stored class safecall var interface or private static exit index inherited to else stdcall override shr asm far resourcestring finalization packed virtual out and protected library do xorwrite goto near function end div overload object unit begin string on inline repeat until destructor write message program with read initialization except default nil if case cdecl in downto threadvar of try pascal const external constructor type public then implementation finally published procedure absolute reintroduce operator as is abstract alias assembler bitpacked break continue cppdecl cvar enumerator experimental platform deprecated unimplemented dynamic export far16 forward generic helper implements interrupt iochecks local name nodefault noreturn nostackframe oldfpccall otherwise saveregisters softfloat specialize strict unaligned varargs ",
		c = [a.CLCM, a.C(/\{/, /\}/, {
			r: 0
		}), a.C(/\(\*/, /\*\)/, {
			r: 10
		})],
		d = {
			cN: "string",
			b: /'/,
			e: /'/,
			c: [{
				b: /''/
			}]
		},
		e = {
			cN: "string",
			b: /(#\d+)+/
		},
		f = {
			b: a.IR + "\\s*=\\s*class\\s*\\(",
			rB: !0,
			c: [a.TM]
		},
		g = {
			cN: "function",
			bK: "function constructor destructor procedure",
			e: /[:;]/,
			k: "function constructor|10 destructor|10 procedure|10",
			c: [a.TM, {
				cN: "params",
				b: /\(/,
				e: /\)/,
				k: b,
				c: [d, e]
			}].concat(c)
		};
	return {
		aliases: ["dpr", "dfm", "pas", "pascal", "freepascal", "lazarus", "lpr", "lfm"],
		cI: !0,
		k: b,
		i: /"|\$[G-Zg-z]|\/\*|<\/|\|/,
		c: [d, e, a.NM, f, g].concat(c)
	}
}), hljs.registerLanguage("actionscript", function(a) {
	var b = "[a-zA-Z_$][a-zA-Z0-9_$]*",
		c = "([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)",
		d = {
			cN: "rest_arg",
			b: "[.]{3}",
			e: b,
			r: 10
		};
	return {
		aliases: ["as"],
		k: {
			keyword: "as break case catch class const continue default delete do dynamic each else extends final finally for function get if implements import in include instanceof interface internal is namespace native new override package private protected public return set static super switch this throw try typeof use var void while with",
			literal: "true false null undefined"
		},
		c: [a.ASM, a.QSM, a.CLCM, a.CBCM, a.CNM, {
			cN: "class",
			bK: "package",
			e: "{",
			c: [a.TM]
		}, {
			cN: "class",
			bK: "class interface",
			e: "{",
			eE: !0,
			c: [{
				bK: "extends implements"
			}, a.TM]
		}, {
			cN: "meta",
			bK: "import include",
			e: ";",
			k: {
				"meta-keyword": "import include"
			}
		}, {
			cN: "function",
			bK: "function",
			e: "[{;]",
			eE: !0,
			i: "\\S",
			c: [a.TM, {
				cN: "params",
				b: "\\(",
				e: "\\)",
				c: [a.ASM, a.QSM, a.CLCM, a.CBCM, d]
			}, {
				b: ":\\s*" + c
			}]
		}, a.METHOD_GUARD],
		i: /#/
	}
}), hljs.registerLanguage("nsis", function(a) {
	var b = {
			cN: "variable",
			b: "\\$(ADMINTOOLS|APPDATA|CDBURN_AREA|CMDLINE|COMMONFILES32|COMMONFILES64|COMMONFILES|COOKIES|DESKTOP|DOCUMENTS|EXEDIR|EXEFILE|EXEPATH|FAVORITES|FONTS|HISTORY|HWNDPARENT|INSTDIR|INTERNET_CACHE|LANGUAGE|LOCALAPPDATA|MUSIC|NETHOOD|OUTDIR|PICTURES|PLUGINSDIR|PRINTHOOD|PROFILE|PROGRAMFILES32|PROGRAMFILES64|PROGRAMFILES|QUICKLAUNCH|RECENT|RESOURCES_LOCALIZED|RESOURCES|SENDTO|SMPROGRAMS|SMSTARTUP|STARTMENU|SYSDIR|TEMP|TEMPLATES|VIDEOS|WINDIR)"
		},
		c = {
			cN: "variable",
			b: "\\$+{[a-zA-Z0-9_]+}"
		},
		d = {
			cN: "variable",
			b: "\\$+[a-zA-Z0-9_]+",
			i: "\\(\\){}"
		},
		e = {
			cN: "variable",
			b: "\\$+\\([a-zA-Z0-9_]+\\)"
		},
		f = {
			cN: "built_in",
			b: "(ARCHIVE|FILE_ATTRIBUTE_ARCHIVE|FILE_ATTRIBUTE_NORMAL|FILE_ATTRIBUTE_OFFLINE|FILE_ATTRIBUTE_READONLY|FILE_ATTRIBUTE_SYSTEM|FILE_ATTRIBUTE_TEMPORARY|HKCR|HKCU|HKDD|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_DYN_DATA|HKEY_LOCAL_MACHINE|HKEY_PERFORMANCE_DATA|HKEY_USERS|HKLM|HKPD|HKU|IDABORT|IDCANCEL|IDIGNORE|IDNO|IDOK|IDRETRY|IDYES|MB_ABORTRETRYIGNORE|MB_DEFBUTTON1|MB_DEFBUTTON2|MB_DEFBUTTON3|MB_DEFBUTTON4|MB_ICONEXCLAMATION|MB_ICONINFORMATION|MB_ICONQUESTION|MB_ICONSTOP|MB_OK|MB_OKCANCEL|MB_RETRYCANCEL|MB_RIGHT|MB_RTLREADING|MB_SETFOREGROUND|MB_TOPMOST|MB_USERICON|MB_YESNO|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY)"
		},
		g = {
			cN: "keyword",
			b: "\\!(addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversionsystem|ifdef|ifmacrodef|ifmacrondef|ifndef|if|include|insertmacro|macroend|macro|makensis|packhdr|searchparse|searchreplace|tempfile|undef|verbose|warning)"
		};
	return {
		cI: !1,
		k: {
			keyword: "Abort AddBrandingImage AddSize AllowRootDirInstall AllowSkipFiles AutoCloseWindow BGFont BGGradient BrandingText BringToFront Call CallInstDLL Caption ChangeUI CheckBitmap ClearErrors CompletedText ComponentText CopyFiles CRCCheck CreateDirectory CreateFont CreateShortCut Delete DeleteINISec DeleteINIStr DeleteRegKey DeleteRegValue DetailPrint DetailsButtonText DirText DirVar DirVerify EnableWindow EnumRegKey EnumRegValue Exch Exec ExecShell ExecWait ExpandEnvStrings File FileBufSize FileClose FileErrorText FileOpen FileRead FileReadByte FileReadUTF16LE FileReadWord FileSeek FileWrite FileWriteByte FileWriteUTF16LE FileWriteWord FindClose FindFirst FindNext FindWindow FlushINI FunctionEnd GetCurInstType GetCurrentAddress GetDlgItem GetDLLVersion GetDLLVersionLocal GetErrorLevel GetFileTime GetFileTimeLocal GetFullPathName GetFunctionAddress GetInstDirError GetLabelAddress GetTempFileName Goto HideWindow Icon IfAbort IfErrors IfFileExists IfRebootFlag IfSilent InitPluginsDir InstallButtonText InstallColors InstallDir InstallDirRegKey InstProgressFlags InstType InstTypeGetText InstTypeSetText IntCmp IntCmpU IntFmt IntOp IsWindow LangString LicenseBkColor LicenseData LicenseForceSelection LicenseLangString LicenseText LoadLanguageFile LockWindow LogSet LogText ManifestDPIAware ManifestSupportedOS MessageBox MiscButtonText Name Nop OutFile Page PageCallbacks PageExEnd Pop Push Quit ReadEnvStr ReadINIStr ReadRegDWORD ReadRegStr Reboot RegDLL Rename RequestExecutionLevel ReserveFile Return RMDir SearchPath SectionEnd SectionGetFlags SectionGetInstTypes SectionGetSize SectionGetText SectionGroupEnd SectionIn SectionSetFlags SectionSetInstTypes SectionSetSize SectionSetText SendMessage SetAutoClose SetBrandingImage SetCompress SetCompressor SetCompressorDictSize SetCtlColors SetCurInstType SetDatablockOptimize SetDateSave SetDetailsPrint SetDetailsView SetErrorLevel SetErrors SetFileAttributes SetFont SetOutPath SetOverwrite SetPluginUnload SetRebootFlag SetRegView SetShellVarContext SetSilent ShowInstDetails ShowUninstDetails ShowWindow SilentInstall SilentUnInstall Sleep SpaceTexts StrCmp StrCmpS StrCpy StrLen SubCaption SubSectionEnd Unicode UninstallButtonText UninstallCaption UninstallIcon UninstallSubCaption UninstallText UninstPage UnRegDLL Var VIAddVersionKey VIFileVersion VIProductVersion WindowIcon WriteINIStr WriteRegBin WriteRegDWORD WriteRegExpandStr WriteRegStr WriteUninstaller XPStyle",
			literal: "admin all auto both colored current false force hide highest lastused leave listonly none normal notset off on open print show silent silentlog smooth textonly true user "
		},
		c: [a.HCM, a.CBCM, {
			cN: "string",
			b: '"',
			e: '"',
			i: "\\n",
			c: [{
				b: "\\$(\\\\(n|r|t)|\\$)"
			}, b, c, d, e]
		}, a.C(";", "$", {
			r: 0
		}), {
			cN: "function",
			bK: "Function PageEx Section SectionGroup SubSection",
			e: "$"
		}, g, c, d, e, f, a.NM, {
			b: a.IR + "::" + a.IR
		}]
	}
}), hljs.registerLanguage("java", function(a) {
	var b = a.UIR + "(<" + a.UIR + "(\\s*,\\s*" + a.UIR + ")*>)?",
		c = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports",
		d = "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
		e = {
			cN: "number",
			b: d,
			r: 0
		};
	return {
		aliases: ["jsp"],
		k: c,
		i: /<\/|#/,
		c: [a.C("/\\*\\*", "\\*/", {
			r: 0,
			c: [{
				b: /\w+@/,
				r: 0
			}, {
				cN: "doctag",
				b: "@[A-Za-z]+"
			}]
		}), a.CLCM, a.CBCM, a.ASM, a.QSM, {
			cN: "class",
			bK: "class interface",
			e: /[{;=]/,
			eE: !0,
			k: "class interface",
			i: /[:"\[\]]/,
			c: [{
				bK: "extends implements"
			}, a.UTM]
		}, {
			bK: "new throw return else",
			r: 0
		}, {
			cN: "function",
			b: "(" + b + "\\s+)+" + a.UIR + "\\s*\\(",
			rB: !0,
			e: /[{;=]/,
			eE: !0,
			k: c,
			c: [{
				b: a.UIR + "\\s*\\(",
				rB: !0,
				r: 0,
				c: [a.UTM]
			}, {
				cN: "params",
				b: /\(/,
				e: /\)/,
				k: c,
				r: 0,
				c: [a.ASM, a.QSM, a.CNM, a.CBCM]
			}, a.CLCM, a.CBCM]
		}, e, {
			cN: "meta",
			b: "@[A-Za-z]+"
		}]
	}
}), hljs.registerLanguage("erlang-repl", function(a) {
	return {
		k: {
			built_in: "spawn spawn_link self",
			keyword: "after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor"
		},
		c: [{
			cN: "meta",
			b: "^[0-9]+> ",
			r: 10
		}, a.C("%", "$"), {
			cN: "number",
			b: "\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",
			r: 0
		}, a.ASM, a.QSM, {
			b: "\\?(::)?([A-Z]\\w*(::)?)+"
		}, {
			b: "->"
		}, {
			b: "ok"
		}, {
			b: "!"
		}, {
			b: "(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",
			r: 0
		}, {
			b: "[A-Z][a-zA-Z0-9_']*",
			r: 0
		}]
	}
}), hljs.registerLanguage("protobuf", function(a) {
	return {
		k: {
			keyword: "package import option optional required repeated group",
			built_in: "double float int32 int64 uint32 uint64 sint32 sint64 fixed32 fixed64 sfixed32 sfixed64 bool string bytes",
			literal: "true false"
		},
		c: [a.QSM, a.NM, a.CLCM, {
			cN: "class",
			bK: "message enum service",
			e: /\{/,
			i: /\n/,
			c: [a.inherit(a.TM, {
				starts: {
					eW: !0,
					eE: !0
				}
			})]
		}, {
			cN: "function",
			bK: "rpc",
			e: /;/,
			eE: !0,
			k: "rpc returns"
		}, {
			b: /^\s*[A-Z_]+/,
			e: /\s*=/,
			eE: !0
		}]
	}
}), hljs.registerLanguage("stata", function(a) {
	return {
		aliases: ["do", "ado"],
		cI: !0,
		k: "if else in foreach for forv forva forval forvalu forvalue forvalues by bys bysort xi quietly qui capture about ac ac_7 acprplot acprplot_7 adjust ado adopath adoupdate alpha ameans an ano anov anova anova_estat anova_terms anovadef aorder ap app appe appen append arch arch_dr arch_estat arch_p archlm areg areg_p args arima arima_dr arima_estat arima_p as asmprobit asmprobit_estat asmprobit_lf asmprobit_mfx__dlg asmprobit_p ass asse asser assert avplot avplot_7 avplots avplots_7 bcskew0 bgodfrey binreg bip0_lf biplot bipp_lf bipr_lf bipr_p biprobit bitest bitesti bitowt blogit bmemsize boot bootsamp bootstrap bootstrap_8 boxco_l boxco_p boxcox boxcox_6 boxcox_p bprobit br break brier bro brow brows browse brr brrstat bs bs_7 bsampl_w bsample bsample_7 bsqreg bstat bstat_7 bstat_8 bstrap bstrap_7 ca ca_estat ca_p cabiplot camat canon canon_8 canon_8_p canon_estat canon_p cap caprojection capt captu captur capture cat cc cchart cchart_7 cci cd censobs_table centile cf char chdir checkdlgfiles checkestimationsample checkhlpfiles checksum chelp ci cii cl class classutil clear cli clis clist clo clog clog_lf clog_p clogi clogi_sw clogit clogit_lf clogit_p clogitp clogl_sw cloglog clonevar clslistarray cluster cluster_measures cluster_stop cluster_tree cluster_tree_8 clustermat cmdlog cnr cnre cnreg cnreg_p cnreg_sw cnsreg codebook collaps4 collapse colormult_nb colormult_nw compare compress conf confi confir confirm conren cons const constr constra constrai constrain constraint continue contract copy copyright copysource cor corc corr corr2data corr_anti corr_kmo corr_smc corre correl correla correlat correlate corrgram cou coun count cox cox_p cox_sw coxbase coxhaz coxvar cprplot cprplot_7 crc cret cretu cretur creturn cross cs cscript cscript_log csi ct ct_is ctset ctst_5 ctst_st cttost cumsp cumsp_7 cumul cusum cusum_7 cutil d|0 datasig datasign datasigna datasignat datasignatu datasignatur datasignature datetof db dbeta de dec deco decod decode deff des desc descr descri describ describe destring dfbeta dfgls dfuller di di_g dir dirstats dis discard disp disp_res disp_s displ displa display distinct do doe doed doedi doedit dotplot dotplot_7 dprobit drawnorm drop ds ds_util dstdize duplicates durbina dwstat dydx e|0 ed edi edit egen eivreg emdef en enc enco encod encode eq erase ereg ereg_lf ereg_p ereg_sw ereghet ereghet_glf ereghet_glf_sh ereghet_gp ereghet_ilf ereghet_ilf_sh ereghet_ip eret eretu eretur ereturn err erro error est est_cfexist est_cfname est_clickable est_expand est_hold est_table est_unhold est_unholdok estat estat_default estat_summ estat_vce_only esti estimates etodow etof etomdy ex exi exit expand expandcl fac fact facto factor factor_estat factor_p factor_pca_rotated factor_rotate factormat fcast fcast_compute fcast_graph fdades fdadesc fdadescr fdadescri fdadescrib fdadescribe fdasav fdasave fdause fh_st file open file read file close file filefilter fillin find_hlp_file findfile findit findit_7 fit fl fli flis flist for5_0 form forma format fpredict frac_154 frac_adj frac_chk frac_cox frac_ddp frac_dis frac_dv frac_in frac_mun frac_pp frac_pq frac_pv frac_wgt frac_xo fracgen fracplot fracplot_7 fracpoly fracpred fron_ex fron_hn fron_p fron_tn fron_tn2 frontier ftodate ftoe ftomdy ftowdate g|0 gamhet_glf gamhet_gp gamhet_ilf gamhet_ip gamma gamma_d2 gamma_p gamma_sw gammahet gdi_hexagon gdi_spokes ge gen gene gener genera generat generate genrank genstd genvmean gettoken gl gladder gladder_7 glim_l01 glim_l02 glim_l03 glim_l04 glim_l05 glim_l06 glim_l07 glim_l08 glim_l09 glim_l10 glim_l11 glim_l12 glim_lf glim_mu glim_nw1 glim_nw2 glim_nw3 glim_p glim_v1 glim_v2 glim_v3 glim_v4 glim_v5 glim_v6 glim_v7 glm glm_6 glm_p glm_sw glmpred glo glob globa global glogit glogit_8 glogit_p gmeans gnbre_lf gnbreg gnbreg_5 gnbreg_p gomp_lf gompe_sw gomper_p gompertz gompertzhet gomphet_glf gomphet_glf_sh gomphet_gp gomphet_ilf gomphet_ilf_sh gomphet_ip gphdot gphpen gphprint gprefs gprobi_p gprobit gprobit_8 gr gr7 gr_copy gr_current gr_db gr_describe gr_dir gr_draw gr_draw_replay gr_drop gr_edit gr_editviewopts gr_example gr_example2 gr_export gr_print gr_qscheme gr_query gr_read gr_rename gr_replay gr_save gr_set gr_setscheme gr_table gr_undo gr_use graph graph7 grebar greigen greigen_7 greigen_8 grmeanby grmeanby_7 gs_fileinfo gs_filetype gs_graphinfo gs_stat gsort gwood h|0 hadimvo hareg hausman haver he heck_d2 heckma_p heckman heckp_lf heckpr_p heckprob hel help hereg hetpr_lf hetpr_p hetprob hettest hexdump hilite hist hist_7 histogram hlogit hlu hmeans hotel hotelling hprobit hreg hsearch icd9 icd9_ff icd9p iis impute imtest inbase include inf infi infil infile infix inp inpu input ins insheet insp inspe inspec inspect integ inten intreg intreg_7 intreg_p intrg2_ll intrg_ll intrg_ll2 ipolate iqreg ir irf irf_create irfm iri is_svy is_svysum isid istdize ivprob_1_lf ivprob_lf ivprobit ivprobit_p ivreg ivreg_footnote ivtob_1_lf ivtob_lf ivtobit ivtobit_p jackknife jacknife jknife jknife_6 jknife_8 jkstat joinby kalarma1 kap kap_3 kapmeier kappa kapwgt kdensity kdensity_7 keep ksm ksmirnov ktau kwallis l|0 la lab labe label labelbook ladder levels levelsof leverage lfit lfit_p li lincom line linktest lis list lloghet_glf lloghet_glf_sh lloghet_gp lloghet_ilf lloghet_ilf_sh lloghet_ip llogi_sw llogis_p llogist llogistic llogistichet lnorm_lf lnorm_sw lnorma_p lnormal lnormalhet lnormhet_glf lnormhet_glf_sh lnormhet_gp lnormhet_ilf lnormhet_ilf_sh lnormhet_ip lnskew0 loadingplot loc loca local log logi logis_lf logistic logistic_p logit logit_estat logit_p loglogs logrank loneway lookfor lookup lowess lowess_7 lpredict lrecomp lroc lroc_7 lrtest ls lsens lsens_7 lsens_x lstat ltable ltable_7 ltriang lv lvr2plot lvr2plot_7 m|0 ma mac macr macro makecns man manova manova_estat manova_p manovatest mantel mark markin markout marksample mat mat_capp mat_order mat_put_rr mat_rapp mata mata_clear mata_describe mata_drop mata_matdescribe mata_matsave mata_matuse mata_memory mata_mlib mata_mosave mata_rename mata_which matalabel matcproc matlist matname matr matri matrix matrix_input__dlg matstrik mcc mcci md0_ md1_ md1debug_ md2_ md2debug_ mds mds_estat mds_p mdsconfig mdslong mdsmat mdsshepard mdytoe mdytof me_derd mean means median memory memsize meqparse mer merg merge mfp mfx mhelp mhodds minbound mixed_ll mixed_ll_reparm mkassert mkdir mkmat mkspline ml ml_5 ml_adjs ml_bhhhs ml_c_d ml_check ml_clear ml_cnt ml_debug ml_defd ml_e0 ml_e0_bfgs ml_e0_cycle ml_e0_dfp ml_e0i ml_e1 ml_e1_bfgs ml_e1_bhhh ml_e1_cycle ml_e1_dfp ml_e2 ml_e2_cycle ml_ebfg0 ml_ebfr0 ml_ebfr1 ml_ebh0q ml_ebhh0 ml_ebhr0 ml_ebr0i ml_ecr0i ml_edfp0 ml_edfr0 ml_edfr1 ml_edr0i ml_eds ml_eer0i ml_egr0i ml_elf ml_elf_bfgs ml_elf_bhhh ml_elf_cycle ml_elf_dfp ml_elfi ml_elfs ml_enr0i ml_enrr0 ml_erdu0 ml_erdu0_bfgs ml_erdu0_bhhh ml_erdu0_bhhhq ml_erdu0_cycle ml_erdu0_dfp ml_erdu0_nrbfgs ml_exde ml_footnote ml_geqnr ml_grad0 ml_graph ml_hbhhh ml_hd0 ml_hold ml_init ml_inv ml_log ml_max ml_mlout ml_mlout_8 ml_model ml_nb0 ml_opt ml_p ml_plot ml_query ml_rdgrd ml_repor ml_s_e ml_score ml_searc ml_technique ml_unhold mleval mlf_ mlmatbysum mlmatsum mlog mlogi mlogit mlogit_footnote mlogit_p mlopts mlsum mlvecsum mnl0_ mor more mov move mprobit mprobit_lf mprobit_p mrdu0_ mrdu1_ mvdecode mvencode mvreg mvreg_estat n|0 nbreg nbreg_al nbreg_lf nbreg_p nbreg_sw nestreg net newey newey_7 newey_p news nl nl_7 nl_9 nl_9_p nl_p nl_p_7 nlcom nlcom_p nlexp2 nlexp2_7 nlexp2a nlexp2a_7 nlexp3 nlexp3_7 nlgom3 nlgom3_7 nlgom4 nlgom4_7 nlinit nllog3 nllog3_7 nllog4 nllog4_7 nlog_rd nlogit nlogit_p nlogitgen nlogittree nlpred no nobreak noi nois noisi noisil noisily note notes notes_dlg nptrend numlabel numlist odbc old_ver olo olog ologi ologi_sw ologit ologit_p ologitp on one onew onewa oneway op_colnm op_comp op_diff op_inv op_str opr opro oprob oprob_sw oprobi oprobi_p oprobit oprobitp opts_exclusive order orthog orthpoly ou out outf outfi outfil outfile outs outsh outshe outshee outsheet ovtest pac pac_7 palette parse parse_dissim pause pca pca_8 pca_display pca_estat pca_p pca_rotate pcamat pchart pchart_7 pchi pchi_7 pcorr pctile pentium pergram pergram_7 permute permute_8 personal peto_st pkcollapse pkcross pkequiv pkexamine pkexamine_7 pkshape pksumm pksumm_7 pl plo plot plugin pnorm pnorm_7 poisgof poiss_lf poiss_sw poisso_p poisson poisson_estat post postclose postfile postutil pperron pr prais prais_e prais_e2 prais_p predict predictnl preserve print pro prob probi probit probit_estat probit_p proc_time procoverlay procrustes procrustes_estat procrustes_p profiler prog progr progra program prop proportion prtest prtesti pwcorr pwd q\\s qby qbys qchi qchi_7 qladder qladder_7 qnorm qnorm_7 qqplot qqplot_7 qreg qreg_c qreg_p qreg_sw qu quadchk quantile quantile_7 que quer query range ranksum ratio rchart rchart_7 rcof recast reclink recode reg reg3 reg3_p regdw regr regre regre_p2 regres regres_p regress regress_estat regriv_p remap ren rena renam rename renpfix repeat replace report reshape restore ret retu retur return rm rmdir robvar roccomp roccomp_7 roccomp_8 rocf_lf rocfit rocfit_8 rocgold rocplot rocplot_7 roctab roctab_7 rolling rologit rologit_p rot rota rotat rotate rotatemat rreg rreg_p ru run runtest rvfplot rvfplot_7 rvpplot rvpplot_7 sa safesum sample sampsi sav save savedresults saveold sc sca scal scala scalar scatter scm_mine sco scob_lf scob_p scobi_sw scobit scor score scoreplot scoreplot_help scree screeplot screeplot_help sdtest sdtesti se search separate seperate serrbar serrbar_7 serset set set_defaults sfrancia sh she shel shell shewhart shewhart_7 signestimationsample signrank signtest simul simul_7 simulate simulate_8 sktest sleep slogit slogit_d2 slogit_p smooth snapspan so sor sort spearman spikeplot spikeplot_7 spikeplt spline_x split sqreg sqreg_p sret sretu sretur sreturn ssc st st_ct st_hc st_hcd st_hcd_sh st_is st_issys st_note st_promo st_set st_show st_smpl st_subid stack statsby statsby_8 stbase stci stci_7 stcox stcox_estat stcox_fr stcox_fr_ll stcox_p stcox_sw stcoxkm stcoxkm_7 stcstat stcurv stcurve stcurve_7 stdes stem stepwise stereg stfill stgen stir stjoin stmc stmh stphplot stphplot_7 stphtest stphtest_7 stptime strate strate_7 streg streg_sw streset sts sts_7 stset stsplit stsum sttocc sttoct stvary stweib su suest suest_8 sum summ summa summar summari summariz summarize sunflower sureg survcurv survsum svar svar_p svmat svy svy_disp svy_dreg svy_est svy_est_7 svy_estat svy_get svy_gnbreg_p svy_head svy_header svy_heckman_p svy_heckprob_p svy_intreg_p svy_ivreg_p svy_logistic_p svy_logit_p svy_mlogit_p svy_nbreg_p svy_ologit_p svy_oprobit_p svy_poisson_p svy_probit_p svy_regress_p svy_sub svy_sub_7 svy_x svy_x_7 svy_x_p svydes svydes_8 svygen svygnbreg svyheckman svyheckprob svyintreg svyintreg_7 svyintrg svyivreg svylc svylog_p svylogit svymarkout svymarkout_8 svymean svymlog svymlogit svynbreg svyolog svyologit svyoprob svyoprobit svyopts svypois svypois_7 svypoisson svyprobit svyprobt svyprop svyprop_7 svyratio svyreg svyreg_p svyregress svyset svyset_7 svyset_8 svytab svytab_7 svytest svytotal sw sw_8 swcnreg swcox swereg swilk swlogis swlogit swologit swoprbt swpois swprobit swqreg swtobit swweib symmetry symmi symplot symplot_7 syntax sysdescribe sysdir sysuse szroeter ta tab tab1 tab2 tab_or tabd tabdi tabdis tabdisp tabi table tabodds tabodds_7 tabstat tabu tabul tabula tabulat tabulate te tempfile tempname tempvar tes test testnl testparm teststd tetrachoric time_it timer tis tob tobi tobit tobit_p tobit_sw token tokeni tokeniz tokenize tostring total translate translator transmap treat_ll treatr_p treatreg trim trnb_cons trnb_mean trpoiss_d2 trunc_ll truncr_p truncreg tsappend tset tsfill tsline tsline_ex tsreport tsrevar tsrline tsset tssmooth tsunab ttest ttesti tut_chk tut_wait tutorial tw tware_st two twoway twoway__fpfit_serset twoway__function_gen twoway__histogram_gen twoway__ipoint_serset twoway__ipoints_serset twoway__kdensity_gen twoway__lfit_serset twoway__normgen_gen twoway__pci_serset twoway__qfit_serset twoway__scatteri_serset twoway__sunflower_gen twoway_ksm_serset ty typ type typeof u|0 unab unabbrev unabcmd update us use uselabel var var_mkcompanion var_p varbasic varfcast vargranger varirf varirf_add varirf_cgraph varirf_create varirf_ctable varirf_describe varirf_dir varirf_drop varirf_erase varirf_graph varirf_ograph varirf_rename varirf_set varirf_table varlist varlmar varnorm varsoc varstable varstable_w varstable_w2 varwle vce vec vec_fevd vec_mkphi vec_p vec_p_w vecirf_create veclmar veclmar_w vecnorm vecnorm_w vecrank vecstable verinst vers versi versio version view viewsource vif vwls wdatetof webdescribe webseek webuse weib1_lf weib2_lf weib_lf weib_lf0 weibhet_glf weibhet_glf_sh weibhet_glfa weibhet_glfa_sh weibhet_gp weibhet_ilf weibhet_ilf_sh weibhet_ilfa weibhet_ilfa_sh weibhet_ip weibu_sw weibul_p weibull weibull_c weibull_s weibullhet wh whelp whi which whil while wilc_st wilcoxon win wind windo window winexec wntestb wntestb_7 wntestq xchart xchart_7 xcorr xcorr_7 xi xi_6 xmlsav xmlsave xmluse xpose xsh xshe xshel xshell xt_iis xt_tis xtab_p xtabond xtbin_p xtclog xtcloglog xtcloglog_8 xtcloglog_d2 xtcloglog_pa_p xtcloglog_re_p xtcnt_p xtcorr xtdata xtdes xtfront_p xtfrontier xtgee xtgee_elink xtgee_estat xtgee_makeivar xtgee_p xtgee_plink xtgls xtgls_p xthaus xthausman xtht_p xthtaylor xtile xtint_p xtintreg xtintreg_8 xtintreg_d2 xtintreg_p xtivp_1 xtivp_2 xtivreg xtline xtline_ex xtlogit xtlogit_8 xtlogit_d2 xtlogit_fe_p xtlogit_pa_p xtlogit_re_p xtmixed xtmixed_estat xtmixed_p xtnb_fe xtnb_lf xtnbreg xtnbreg_pa_p xtnbreg_refe_p xtpcse xtpcse_p xtpois xtpoisson xtpoisson_d2 xtpoisson_pa_p xtpoisson_refe_p xtpred xtprobit xtprobit_8 xtprobit_d2 xtprobit_re_p xtps_fe xtps_lf xtps_ren xtps_ren_8 xtrar_p xtrc xtrc_p xtrchh xtrefe_p xtreg xtreg_be xtreg_fe xtreg_ml xtreg_pa_p xtreg_re xtregar xtrere_p xtset xtsf_ll xtsf_llti xtsum xttab xttest0 xttobit xttobit_8 xttobit_p xttrans yx yxview__barlike_draw yxview_area_draw yxview_bar_draw yxview_dot_draw yxview_dropline_draw yxview_function_draw yxview_iarrow_draw yxview_ilabels_draw yxview_normal_draw yxview_pcarrow_draw yxview_pcbarrow_draw yxview_pccapsym_draw yxview_pcscatter_draw yxview_pcspike_draw yxview_rarea_draw yxview_rbar_draw yxview_rbarm_draw yxview_rcap_draw yxview_rcapsym_draw yxview_rconnected_draw yxview_rline_draw yxview_rscatter_draw yxview_rspike_draw yxview_spike_draw yxview_sunflower_draw zap_s zinb zinb_llf zinb_plf zip zip_llf zip_p zip_plf zt_ct_5 zt_hc_5 zt_hcd_5 zt_is_5 zt_iss_5 zt_sho_5 zt_smp_5 ztbase_5 ztcox_5 ztdes_5 ztereg_5 ztfill_5 ztgen_5 ztir_5 ztjoin_5 ztnb ztnb_p ztp ztp_p zts_5 ztset_5 ztspli_5 ztsum_5 zttoct_5 ztvary_5 ztweib_5",
		c: [{
			cN: "symbol",
			b: /`[a-zA-Z0-9_]+'/
		}, {
			cN: "variable",
			b: /\$\{?[a-zA-Z0-9_]+\}?/
		}, {
			cN: "string",
			v: [{
				b: '`"[^\r\n]*?"\''
			}, {
				b: '"[^\r\n"]*"'
			}]
		}, {
			cN: "built_in",
			v: [{
				b: "\\b(abs|acos|asin|atan|atan2|atanh|ceil|cloglog|comb|cos|digamma|exp|floor|invcloglog|invlogit|ln|lnfact|lnfactorial|lngamma|log|log10|max|min|mod|reldif|round|sign|sin|sqrt|sum|tan|tanh|trigamma|trunc|betaden|Binomial|binorm|binormal|chi2|chi2tail|dgammapda|dgammapdada|dgammapdadx|dgammapdx|dgammapdxdx|F|Fden|Ftail|gammaden|gammap|ibeta|invbinomial|invchi2|invchi2tail|invF|invFtail|invgammap|invibeta|invnchi2|invnFtail|invnibeta|invnorm|invnormal|invttail|nbetaden|nchi2|nFden|nFtail|nibeta|norm|normal|normalden|normd|npnchi2|tden|ttail|uniform|abbrev|char|index|indexnot|length|lower|ltrim|match|plural|proper|real|regexm|regexr|regexs|reverse|rtrim|string|strlen|strlower|strltrim|strmatch|strofreal|strpos|strproper|strreverse|strrtrim|strtrim|strupper|subinstr|subinword|substr|trim|upper|word|wordcount|_caller|autocode|byteorder|chop|clip|cond|e|epsdouble|epsfloat|group|inlist|inrange|irecode|matrix|maxbyte|maxdouble|maxfloat|maxint|maxlong|mi|minbyte|mindouble|minfloat|minint|minlong|missing|r|recode|replay|return|s|scalar|d|date|day|dow|doy|halfyear|mdy|month|quarter|week|year|d|daily|dofd|dofh|dofm|dofq|dofw|dofy|h|halfyearly|hofd|m|mofd|monthly|q|qofd|quarterly|tin|twithin|w|weekly|wofd|y|yearly|yh|ym|yofd|yq|yw|cholesky|colnumb|colsof|corr|det|diag|diag0cnt|el|get|hadamard|I|inv|invsym|issym|issymmetric|J|matmissing|matuniform|mreldif|nullmat|rownumb|rowsof|sweep|syminv|trace|vec|vecdiag)(?=\\(|$)"
			}]
		}, a.C("^[ \t]*\\*.*$", !1), a.CLCM, a.CBCM]
	}
}), hljs.registerLanguage("tex", function(a) {
	var b = {
		cN: "tag",
		b: /\\/,
		r: 0,
		c: [{
			cN: "name",
			v: [{
				b: /[a-zA-Zа-яА-я]+[*]?/
			}, {
				b: /[^a-zA-Zа-яА-я0-9]/
			}],
			starts: {
				eW: !0,
				r: 0,
				c: [{
					cN: "string",
					v: [{
						b: /\[/,
						e: /\]/
					}, {
						b: /\{/,
						e: /\}/
					}]
				}, {
					b: /\s*=\s*/,
					eW: !0,
					r: 0,
					c: [{
						cN: "number",
						b: /-?\d*\.?\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?/
					}]
				}]
			}
		}]
	};
	return {
		c: [b, {
			cN: "formula",
			c: [b],
			r: 0,
			v: [{
				b: /\$\$/,
				e: /\$\$/
			}, {
				b: /\$/,
				e: /\$/
			}]
		}, a.C("%", "$", {
			r: 0
		})]
	}
}), hljs.registerLanguage("cs", function(a) {
	var b = {
			keyword: "abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while nameof add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield",
			literal: "null false true"
		},
		c = {
			cN: "string",
			b: '@"',
			e: '"',
			c: [{
				b: '""'
			}]
		},
		d = a.inherit(c, {
			i: /\n/
		}),
		e = {
			cN: "subst",
			b: "{",
			e: "}",
			k: b
		},
		f = a.inherit(e, {
			i: /\n/
		}),
		g = {
			cN: "string",
			b: /\$"/,
			e: '"',
			i: /\n/,
			c: [{
				b: "{{"
			}, {
				b: "}}"
			}, a.BE, f]
		},
		h = {
			cN: "string",
			b: /\$@"/,
			e: '"',
			c: [{
				b: "{{"
			}, {
				b: "}}"
			}, {
				b: '""'
			}, e]
		},
		i = a.inherit(h, {
			i: /\n/,
			c: [{
				b: "{{"
			}, {
				b: "}}"
			}, {
				b: '""'
			}, f]
		});
	e.c = [h, g, c, a.ASM, a.QSM, a.CNM, a.CBCM], f.c = [i, g, d, a.ASM, a.QSM, a.CNM, a.inherit(a.CBCM, {
		i: /\n/
	})];
	var j = {
			v: [h, g, c, a.ASM, a.QSM]
		},
		k = a.IR + "(<" + a.IR + "(\\s*,\\s*" + a.IR + ")*>)?(\\[\\])?";
	return {
		aliases: ["csharp"],
		k: b,
		i: /::/,
		c: [a.C("///", "$", {
			rB: !0,
			c: [{
				cN: "doctag",
				v: [{
					b: "///",
					r: 0
				}, {
					b: "<!--|-->"
				}, {
					b: "</?",
					e: ">"
				}]
			}]
		}), a.CLCM, a.CBCM, {
			cN: "meta",
			b: "#",
			e: "$",
			k: {
				"meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum"
			}
		}, j, a.CNM, {
			bK: "class interface",
			e: /[{;=]/,
			i: /[^\s:]/,
			c: [a.TM, a.CLCM, a.CBCM]
		}, {
			bK: "namespace",
			e: /[{;=]/,
			i: /[^\s:]/,
			c: [a.inherit(a.TM, {
				b: "[a-zA-Z](\\.?\\w)*"
			}), a.CLCM, a.CBCM]
		}, {
			bK: "new return throw await",
			r: 0
		}, {
			cN: "function",
			b: "(" + k + "\\s+)+" + a.IR + "\\s*\\(",
			rB: !0,
			e: /[{;=]/,
			eE: !0,
			k: b,
			c: [{
				b: a.IR + "\\s*\\(",
				rB: !0,
				c: [a.TM],
				r: 0
			}, {
				cN: "params",
				b: /\(/,
				e: /\)/,
				eB: !0,
				eE: !0,
				k: b,
				r: 0,
				c: [j, a.CNM, a.CBCM]
			}, a.CLCM, a.CBCM]
		}]
	}
}), hljs.registerLanguage("groovy", function(a) {
	return {
		k: {
			literal: "true false null",
			keyword: "byte short char int long boolean float double void def as in assert trait super this abstract static volatile transient public private protected synchronized final class interface enum if else for while switch case break default continue throw throws try catch finally implements extends new import package return instanceof"
		},
		c: [a.C("/\\*\\*", "\\*/", {
			r: 0,
			c: [{
				b: /\w+@/,
				r: 0
			}, {
				cN: "doctag",
				b: "@[A-Za-z]+"
			}]
		}), a.CLCM, a.CBCM, {
			cN: "string",
			b: '"""',
			e: '"""'
		}, {
			cN: "string",
			b: "'''",
			e: "'''"
		}, {
			cN: "string",
			b: "\\$/",
			e: "/\\$",
			r: 10
		}, a.ASM, {
			cN: "regexp",
			b: /~?\/[^\/\n]+\//,
			c: [a.BE]
		}, a.QSM, {
			cN: "meta",
			b: "^#!/usr/bin/env",
			e: "$",
			i: "\n"
		}, a.BNM, {
			cN: "class",
			bK: "class interface trait enum",
			e: "{",
			i: ":",
			c: [{
				bK: "extends implements"
			}, a.UTM]
		}, a.CNM, {
			cN: "meta",
			b: "@[A-Za-z]+"
		}, {
			cN: "string",
			b: /[^\?]{0}[A-Za-z0-9_$]+ *:/
		}, {
			b: /\?/,
			e: /\:/
		}, {
			cN: "symbol",
			b: "^\\s*[A-Za-z0-9_$]+:",
			r: 0
		}],
		i: /#|<\//
	}
}), hljs.registerLanguage("brainfuck", function(a) {
	var b = {
		cN: "literal",
		b: "[\\+\\-]",
		r: 0
	};
	return {
		aliases: ["bf"],
		c: [a.C("[^\\[\\]\\.,\\+\\-<> \r\n]", "[\\[\\]\\.,\\+\\-<> \r\n]", {
			rE: !0,
			r: 0
		}), {
			cN: "title",
			b: "[\\[\\]]",
			r: 0
		}, {
			cN: "string",
			b: "[\\.,]",
			r: 0
		}, {
			b: /\+\+|\-\-/,
			rB: !0,
			c: [b]
		}, b]
	}
}), hljs.registerLanguage("scala", function(a) {
	var b = {
			cN: "meta",
			b: "@[A-Za-z]+"
		},
		c = {
			cN: "subst",
			v: [{
				b: "\\$[A-Za-z0-9_]+"
			}, {
				b: "\\${",
				e: "}"
			}]
		},
		d = {
			cN: "string",
			v: [{
				b: '"',
				e: '"',
				i: "\\n",
				c: [a.BE]
			}, {
				b: '"""',
				e: '"""',
				r: 10
			}, {
				b: '[a-z]+"',
				e: '"',
				i: "\\n",
				c: [a.BE, c]
			}, {
				cN: "string",
				b: '[a-z]+"""',
				e: '"""',
				c: [c],
				r: 10
			}]
		},
		e = {
			cN: "symbol",
			b: "'\\w[\\w\\d_]*(?!')"
		},
		f = {
			cN: "type",
			b: "\\b[A-Z][A-Za-z0-9_]*",
			r: 0
		},
		g = {
			cN: "title",
			b: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
			r: 0
		},
		h = {
			cN: "class",
			bK: "class object trait type",
			e: /[:={\[\n;]/,
			eE: !0,
			c: [{
				bK: "extends with",
				r: 10
			}, {
				b: /\[/,
				e: /\]/,
				eB: !0,
				eE: !0,
				r: 0,
				c: [f]
			}, {
				cN: "params",
				b: /\(/,
				e: /\)/,
				eB: !0,
				eE: !0,
				r: 0,
				c: [f]
			}, g]
		},
		i = {
			cN: "function",
			bK: "def",
			e: /[:={\[(\n;]/,
			eE: !0,
			c: [g]
		};
	return {
		k: {
			literal: "true false null",
			keyword: "type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit"
		},
		c: [a.CLCM, a.CBCM, d, e, f, i, h, a.CNM, b]
	}
}), hljs.registerLanguage("arduino", function(a) {
	var b = a.getLanguage("cpp").exports;
	return {
		k: {
			keyword: "boolean byte word string String array " + b.k.keyword,
			built_in: "setup loop while catch for if do goto try switch case else default break continue return KeyboardController MouseController SoftwareSerial EthernetServer EthernetClient LiquidCrystal RobotControl GSMVoiceCall EthernetUDP EsploraTFT HttpClient RobotMotor WiFiClient GSMScanner FileSystem Scheduler GSMServer YunClient YunServer IPAddress GSMClient GSMModem Keyboard Ethernet Console GSMBand Esplora Stepper Process WiFiUDP GSM_SMS Mailbox USBHost Firmata PImage Client Server GSMPIN FileIO Bridge Serial EEPROM Stream Mouse Audio Servo File Task GPRS WiFi Wire TFT GSM SPI SD runShellCommandAsynchronously analogWriteResolution retrieveCallingNumber printFirmwareVersion analogReadResolution sendDigitalPortPair noListenOnLocalhost readJoystickButton setFirmwareVersion readJoystickSwitch scrollDisplayRight getVoiceCallStatus scrollDisplayLeft writeMicroseconds delayMicroseconds beginTransmission getSignalStrength runAsynchronously getAsynchronously listenOnLocalhost getCurrentCarrier readAccelerometer messageAvailable sendDigitalPorts lineFollowConfig countryNameWrite runShellCommand readStringUntil rewindDirectory readTemperature setClockDivider readLightSensor endTransmission analogReference detachInterrupt countryNameRead attachInterrupt encryptionType readBytesUntil robotNameWrite readMicrophone robotNameRead cityNameWrite userNameWrite readJoystickY readJoystickX mouseReleased openNextFile scanNetworks noInterrupts digitalWrite beginSpeaker mousePressed isActionDone mouseDragged displayLogos noAutoscroll addParameter remoteNumber getModifiers keyboardRead userNameRead waitContinue processInput parseCommand printVersion readNetworks writeMessage blinkVersion cityNameRead readMessage setDataMode parsePacket isListening setBitOrder beginPacket isDirectory motorsWrite drawCompass digitalRead clearScreen serialEvent rightToLeft setTextSize leftToRight requestFrom keyReleased compassRead analogWrite interrupts WiFiServer disconnect playMelody parseFloat autoscroll getPINUsed setPINUsed setTimeout sendAnalog readSlider analogRead beginWrite createChar motorsStop keyPressed tempoWrite readButton subnetMask debugPrint macAddress writeGreen randomSeed attachGPRS readString sendString remotePort releaseAll mouseMoved background getXChange getYChange answerCall getResult voiceCall endPacket constrain getSocket writeJSON getButton available connected findUntil readBytes exitValue readGreen writeBlue startLoop IPAddress isPressed sendSysex pauseMode gatewayIP setCursor getOemKey tuneWrite noDisplay loadImage switchPIN onRequest onReceive changePIN playFile noBuffer parseInt overflow checkPIN knobRead beginTFT bitClear updateIR bitWrite position writeRGB highByte writeRed setSpeed readBlue noStroke remoteIP transfer shutdown hangCall beginSMS endWrite attached maintain noCursor checkReg checkPUK shiftOut isValid shiftIn pulseIn connect println localIP pinMode getIMEI display noBlink process getBand running beginSD drawBMP lowByte setBand release bitRead prepare pointTo readRed setMode noFill remove listen stroke detach attach noTone exists buffer height bitSet circle config cursor random IRread setDNS endSMS getKey micros millis begin print write ready flush width isPIN blink clear press mkdir rmdir close point yield image BSSID click delay read text move peek beep rect line open seek fill size turn stop home find step tone sqrt RSSI SSID end bit tan cos sin pow map abs max min get run put",
			literal: "DIGITAL_MESSAGE FIRMATA_STRING ANALOG_MESSAGE REPORT_DIGITAL REPORT_ANALOG INPUT_PULLUP SET_PIN_MODE INTERNAL2V56 SYSTEM_RESET LED_BUILTIN INTERNAL1V1 SYSEX_START INTERNAL EXTERNAL DEFAULT OUTPUT INPUT HIGH LOW"
		},
		c: [b.preprocessor, a.CLCM, a.CBCM, a.ASM, a.QSM, a.CNM]
	}
}), hljs.registerLanguage("apache", function(a) {
	var b = {
		cN: "number",
		b: "[\\$%]\\d+"
	};
	return {
		aliases: ["apacheconf"],
		cI: !0,
		c: [a.HCM, {
			cN: "section",
			b: "</?",
			e: ">"
		}, {
			cN: "attribute",
			b: /\w+/,
			r: 0,
			k: {
				nomarkup: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
			},
			starts: {
				e: /$/,
				r: 0,
				k: {
					literal: "on off all"
				},
				c: [{
					cN: "meta",
					b: "\\s\\[",
					e: "\\]$"
				}, {
					cN: "variable",
					b: "[\\$%]\\{",
					e: "\\}",
					c: ["self", b]
				}, b, a.QSM]
			}
		}],
		i: /\S/
	}
}), hljs.registerLanguage("dsconfig", function(a) {
	var b = {
			cN: "string",
			b: /"/,
			e: /"/
		},
		c = {
			cN: "string",
			b: /'/,
			e: /'/
		},
		d = {
			cN: "string",
			b: "[\\w-?]+:\\w+",
			e: "\\W",
			r: 0
		},
		e = {
			cN: "string",
			b: "\\w+-?\\w+",
			e: "\\W",
			r: 0
		};
	return {
		k: "dsconfig",
		c: [{
			cN: "keyword",
			b: "^dsconfig",
			e: "\\s",
			eE: !0,
			r: 10
		}, {
			cN: "built_in",
			b: "(list|create|get|set|delete)-(\\w+)",
			e: "\\s",
			eE: !0,
			i: "!@#$%^&*()",
			r: 10
		}, {
			cN: "built_in",
			b: "--(\\w+)",
			e: "\\s",
			eE: !0
		}, b, c, d, e, a.HCM]
	}
}), hljs.registerLanguage("fortran", function(a) {
	var b = {
			cN: "params",
			b: "\\(",
			e: "\\)"
		},
		c = {
			literal: ".False. .True.",
			keyword: "kind do while private call intrinsic where elsewhere type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then public subroutine|10 function program .and. .or. .not. .le. .eq. .ge. .gt. .lt. goto save else use module select case access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit continue format pause cycle exit c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg synchronous nopass non_overridable pass protected volatile abstract extends import non_intrinsic value deferred generic final enumerator class associate bind enum c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous recursive pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure integer real character complex logical dimension allocatable|10 parameter external implicit|10 none double precision assign intent optional pointer target in out common equivalence data",
			built_in: "alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_ofacosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr num_images parity popcnt poppar shifta shiftl shiftr this_image"
		};
	return {
		cI: !0,
		aliases: ["f90", "f95"],
		k: c,
		i: /\/\*/,
		c: [a.inherit(a.ASM, {
			cN: "string",
			r: 0
		}), a.inherit(a.QSM, {
			cN: "string",
			r: 0
		}), {
			cN: "function",
			bK: "subroutine function program",
			i: "[${=\\n]",
			c: [a.UTM, b]
		}, a.C("!", "$", {
			r: 0
		}), {
			cN: "number",
			b: "(?=\\b|\\+|\\-|\\.)(?=\\.\\d|\\d)(?:\\d+)?(?:\\.?\\d*)(?:[de][+-]?\\d+)?\\b\\.?",
			r: 0
		}]
	}
}), hljs.registerLanguage("processing", function(a) {
	return {
		k: {
			keyword: "BufferedReader PVector PFont PImage PGraphics HashMap boolean byte char color double float int long String Array FloatDict FloatList IntDict IntList JSONArray JSONObject Object StringDict StringList Table TableRow XML false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
			literal: "P2D P3D HALF_PI PI QUARTER_PI TAU TWO_PI",
			title: "setup draw",
			built_in: "displayHeight displayWidth mouseY mouseX mousePressed pmouseX pmouseY key keyCode pixels focused frameCount frameRate height width size createGraphics beginDraw createShape loadShape PShape arc ellipse line point quad rect triangle bezier bezierDetail bezierPoint bezierTangent curve curveDetail curvePoint curveTangent curveTightness shape shapeMode beginContour beginShape bezierVertex curveVertex endContour endShape quadraticVertex vertex ellipseMode noSmooth rectMode smooth strokeCap strokeJoin strokeWeight mouseClicked mouseDragged mouseMoved mousePressed mouseReleased mouseWheel keyPressed keyPressedkeyReleased keyTyped print println save saveFrame day hour millis minute month second year background clear colorMode fill noFill noStroke stroke alpha blue brightness color green hue lerpColor red saturation modelX modelY modelZ screenX screenY screenZ ambient emissive shininess specular add createImage beginCamera camera endCamera frustum ortho perspective printCamera printProjection cursor frameRate noCursor exit loop noLoop popStyle pushStyle redraw binary boolean byte char float hex int str unbinary unhex join match matchAll nf nfc nfp nfs split splitTokens trim append arrayCopy concat expand reverse shorten sort splice subset box sphere sphereDetail createInput createReader loadBytes loadJSONArray loadJSONObject loadStrings loadTable loadXML open parseXML saveTable selectFolder selectInput beginRaw beginRecord createOutput createWriter endRaw endRecord PrintWritersaveBytes saveJSONArray saveJSONObject saveStream saveStrings saveXML selectOutput popMatrix printMatrix pushMatrix resetMatrix rotate rotateX rotateY rotateZ scale shearX shearY translate ambientLight directionalLight lightFalloff lights lightSpecular noLights normal pointLight spotLight image imageMode loadImage noTint requestImage tint texture textureMode textureWrap blend copy filter get loadPixels set updatePixels blendMode loadShader PShaderresetShader shader createFont loadFont text textFont textAlign textLeading textMode textSize textWidth textAscent textDescent abs ceil constrain dist exp floor lerp log mag map max min norm pow round sq sqrt acos asin atan atan2 cos degrees radians sin tan noise noiseDetail noiseSeed random randomGaussian randomSeed"
		},
		c: [a.CLCM, a.CBCM, a.ASM, a.QSM, a.CNM]
	}
}), hljs.registerLanguage("puppet", function(a) {
	var b = {
			keyword: "and case default else elsif false if in import enherits node or true undef unless main settings $string ",
			literal: "alias audit before loglevel noop require subscribe tag owner ensure group mode name|0 changes context force incl lens load_path onlyif provider returns root show_diff type_check en_address ip_address realname command environment hour monute month monthday special target weekday creates cwd ogoutput refresh refreshonly tries try_sleep umask backup checksum content ctime force ignore links mtime purge recurse recurselimit replace selinux_ignore_defaults selrange selrole seltype seluser source souirce_permissions sourceselect validate_cmd validate_replacement allowdupe attribute_membership auth_membership forcelocal gid ia_load_module members system host_aliases ip allowed_trunk_vlans description device_url duplex encapsulation etherchannel native_vlan speed principals allow_root auth_class auth_type authenticate_user k_of_n mechanisms rule session_owner shared options device fstype enable hasrestart directory present absent link atboot blockdevice device dump pass remounts poller_tag use message withpath adminfile allow_virtual allowcdrom category configfiles flavor install_options instance package_settings platform responsefile status uninstall_options vendor unless_system_user unless_uid binary control flags hasstatus manifest pattern restart running start stop allowdupe auths expiry gid groups home iterations key_membership keys managehome membership password password_max_age password_min_age profile_membership profiles project purge_ssh_keys role_membership roles salt shell uid baseurl cost descr enabled enablegroups exclude failovermethod gpgcheck gpgkey http_caching include includepkgs keepalive metadata_expire metalink mirrorlist priority protect proxy proxy_password proxy_username repo_gpgcheck s3_enabled skip_if_unavailable sslcacert sslclientcert sslclientkey sslverify mounted",
			built_in: "architecture augeasversion blockdevices boardmanufacturer boardproductname boardserialnumber cfkey dhcp_servers domain ec2_ ec2_userdata facterversion filesystems ldom fqdn gid hardwareisa hardwaremodel hostname id|0 interfaces ipaddress ipaddress_ ipaddress6 ipaddress6_ iphostnumber is_virtual kernel kernelmajversion kernelrelease kernelversion kernelrelease kernelversion lsbdistcodename lsbdistdescription lsbdistid lsbdistrelease lsbmajdistrelease lsbminordistrelease lsbrelease macaddress macaddress_ macosx_buildversion macosx_productname macosx_productversion macosx_productverson_major macosx_productversion_minor manufacturer memoryfree memorysize netmask metmask_ network_ operatingsystem operatingsystemmajrelease operatingsystemrelease osfamily partitions path physicalprocessorcount processor processorcount productname ps puppetversion rubysitedir rubyversion selinux selinux_config_mode selinux_config_policy selinux_current_mode selinux_current_mode selinux_enforced selinux_policyversion serialnumber sp_ sshdsakey sshecdsakey sshrsakey swapencrypted swapfree swapsize timezone type uniqueid uptime uptime_days uptime_hours uptime_seconds uuid virtual vlans xendomains zfs_version zonenae zones zpool_version"
		},
		c = a.C("#", "$"),
		d = "([A-Za-z_]|::)(\\w|::)*",
		e = a.inherit(a.TM, {
			b: d
		}),
		f = {
			cN: "variable",
			b: "\\$" + d
		},
		g = {
			cN: "string",
			c: [a.BE, f],
			v: [{
				b: /'/,
				e: /'/
			}, {
				b: /"/,
				e: /"/
			}]
		};
	return {
		aliases: ["pp"],
		c: [c, f, g, {
			bK: "class",
			e: "\\{|;",
			i: /=/,
			c: [e, c]
		}, {
			bK: "define",
			e: /\{/,
			c: [{
				cN: "section",
				b: a.IR,
				endsParent: !0
			}]
		}, {
			b: a.IR + "\\s+\\{",
			rB: !0,
			e: /\S/,
			c: [{
				cN: "keyword",
				b: a.IR
			}, {
				b: /\{/,
				e: /\}/,
				k: b,
				r: 0,
				c: [g, c, {
					b: "[a-zA-Z_]+\\s*=>",
					rB: !0,
					e: "=>",
					c: [{
						cN: "attr",
						b: a.IR
					}]
				}, {
					cN: "number",
					b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
					r: 0
				}, f]
			}],
			r: 0
		}]
	}
}), hljs.registerLanguage("clojure", function(a) {
	var b = {
			"builtin-name": "def defonce cond apply if-not if-let if not not= = < > <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"
		},
		c = "a-zA-Z_\\-!.?+*=<>&#'",
		d = "[" + c + "][" + c + "0-9/;:]*",
		e = "[-+]?\\d+(\\.\\d+)?",
		f = {
			b: d,
			r: 0
		},
		g = {
			cN: "number",
			b: e,
			r: 0
		},
		h = a.inherit(a.QSM, {
			i: null
		}),
		i = a.C(";", "$", {
			r: 0
		}),
		j = {
			cN: "literal",
			b: /\b(true|false|nil)\b/
		},
		k = {
			b: "[\\[\\{]",
			e: "[\\]\\}]"
		},
		l = {
			cN: "comment",
			b: "\\^" + d
		},
		m = a.C("\\^\\{", "\\}"),
		n = {
			cN: "symbol",
			b: "[:]{1,2}" + d
		},
		o = {
			b: "\\(",
			e: "\\)"
		},
		p = {
			eW: !0,
			r: 0
		},
		q = {
			k: b,
			l: d,
			cN: "name",
			b: d,
			starts: p
		},
		r = [o, h, l, m, i, n, k, g, j, f];
	return o.c = [a.C("comment", ""), q, p], p.c = r, k.c = r, {
		aliases: ["clj"],
		i: /\S/,
		c: [o, h, l, m, i, n, k, g, j]
	}
}), hljs.registerLanguage("objectivec", function(a) {
	var b = {
			cN: "built_in",
			b: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
		},
		c = {
			keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN",
			literal: "false true FALSE TRUE nil YES NO NULL",
			built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
		},
		d = /[a-zA-Z@][a-zA-Z0-9_]*/,
		e = "@interface @class @protocol @implementation";
	return {
		aliases: ["mm", "objc", "obj-c"],
		k: c,
		l: d,
		i: "</",
		c: [b, a.CLCM, a.CBCM, a.CNM, a.QSM, {
			cN: "string",
			v: [{
				b: '@"',
				e: '"',
				i: "\\n",
				c: [a.BE]
			}, {
				b: "'",
				e: "[^\\\\]'",
				i: "[^\\\\][^']"
			}]
		}, {
			cN: "meta",
			b: "#",
			e: "$",
			c: [{
				cN: "meta-string",
				v: [{
					b: '"',
					e: '"'
				}, {
					b: "<",
					e: ">"
				}]
			}]
		}, {
			cN: "class",
			b: "(" + e.split(" ").join("|") + ")\\b",
			e: "({|$)",
			eE: !0,
			k: e,
			l: d,
			c: [a.UTM]
		}, {
			b: "\\." + a.UIR,
			r: 0
		}]
	}
}), hljs.registerLanguage("vbscript", function(a) {
	return {
		aliases: ["vbs"],
		cI: !0,
		k: {
			keyword: "call class const dim do loop erase execute executeglobal exit for each next function if then else on error option explicit new private property let get public randomize redim rem select case set stop sub while wend with end to elseif is or xor and not class_initialize class_terminate default preserve in me byval byref step resume goto",
			built_in: "lcase month vartype instrrev ubound setlocale getobject rgb getref string weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency conversions csng timevalue second year space abs clng timeserial fixs len asc isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim strcomp int createobject loadpicture tan formatnumber mid scriptenginebuildversion scriptengine split scriptengineminorversion cint sin datepart ltrim sqr scriptenginemajorversion time derived eval date formatpercent exp inputbox left ascw chrw regexp server response request cstr err",
			literal: "true false null nothing empty"
		},
		i: "//",
		c: [a.inherit(a.QSM, {
			c: [{
				b: '""'
			}]
		}), a.C(/'/, /$/, {
			r: 0
		}), a.CNM]
	}
}), hljs.registerLanguage("vbscript-html", function(a) {
	return {
		sL: "xml",
		c: [{
			b: "<%",
			e: "%>",
			sL: "vbscript"
		}]
	}
}), hljs.registerLanguage("accesslog", function(a) {
	return {
		c: [{
			cN: "number",
			b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
		}, {
			cN: "number",
			b: "\\b\\d+\\b",
			r: 0
		}, {
			cN: "string",
			b: '"(GET|POST|HEAD|PUT|DELETE|CONNECT|OPTIONS|PATCH|TRACE)',
			e: '"',
			k: "GET POST HEAD PUT DELETE CONNECT OPTIONS PATCH TRACE",
			i: "\\n",
			r: 10
		}, {
			cN: "string",
			b: /\[/,
			e: /\]/,
			i: "\\n"
		}, {
			cN: "string",
			b: '"',
			e: '"',
			i: "\\n"
		}]
	}
}), hljs.registerLanguage("verilog", function(a) {
	var b = {
		keyword: "accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf|0 bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate|5 genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor",
		literal: "null",
		built_in: "$finish $stop $exit $fatal $error $warning $info $realtime $time $printtimescale $bitstoreal $bitstoshortreal $itor $signed $cast $bits $stime $timeformat $realtobits $shortrealtobits $rtoi $unsigned $asserton $assertkill $assertpasson $assertfailon $assertnonvacuouson $assertoff $assertcontrol $assertpassoff $assertfailoff $assertvacuousoff $isunbounded $sampled $fell $changed $past_gclk $fell_gclk $changed_gclk $rising_gclk $steady_gclk $coverage_control $coverage_get $coverage_save $set_coverage_db_name $rose $stable $past $rose_gclk $stable_gclk $future_gclk $falling_gclk $changing_gclk $display $coverage_get_max $coverage_merge $get_coverage $load_coverage_db $typename $unpacked_dimensions $left $low $increment $clog2 $ln $log10 $exp $sqrt $pow $floor $ceil $sin $cos $tan $countbits $onehot $isunknown $fatal $warning $dimensions $right $high $size $asin $acos $atan $atan2 $hypot $sinh $cosh $tanh $asinh $acosh $atanh $countones $onehot0 $error $info $random $dist_chi_square $dist_erlang $dist_exponential $dist_normal $dist_poisson $dist_t $dist_uniform $q_initialize $q_remove $q_exam $async$and$array $async$nand$array $async$or$array $async$nor$array $sync$and$array $sync$nand$array $sync$or$array $sync$nor$array $q_add $q_full $psprintf $async$and$plane $async$nand$plane $async$or$plane $async$nor$plane $sync$and$plane $sync$nand$plane $sync$or$plane $sync$nor$plane $system $display $displayb $displayh $displayo $strobe $strobeb $strobeh $strobeo $write $readmemb $readmemh $writememh $value$plusargs $dumpvars $dumpon $dumplimit $dumpports $dumpportson $dumpportslimit $writeb $writeh $writeo $monitor $monitorb $monitorh $monitoro $writememb $dumpfile $dumpoff $dumpall $dumpflush $dumpportsoff $dumpportsall $dumpportsflush $fclose $fdisplay $fdisplayb $fdisplayh $fdisplayo $fstrobe $fstrobeb $fstrobeh $fstrobeo $swrite $swriteb $swriteh $swriteo $fscanf $fread $fseek $fflush $feof $fopen $fwrite $fwriteb $fwriteh $fwriteo $fmonitor $fmonitorb $fmonitorh $fmonitoro $sformat $sformatf $fgetc $ungetc $fgets $sscanf $rewind $ftell $ferror"
	};
	return {
		aliases: ["v", "sv", "svh"],
		cI: !1,
		k: b,
		l: /[\w\$]+/,
		c: [a.CBCM, a.CLCM, a.QSM, {
			cN: "number",
			c: [a.BE],
			v: [{
				b: "\\b((\\d+'(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)"
			}, {
				b: "\\B(('(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)"
			}, {
				b: "\\b([0-9_])+",
				r: 0
			}]
		}, {
			cN: "variable",
			v: [{
				b: "#\\((?!parameter).+\\)"
			}, {
				b: "\\.\\w+",
				r: 0
			}]
		}, {
			cN: "meta",
			b: "`",
			e: "$",
			k: {
				"meta-keyword": "define __FILE__ __LINE__ begin_keywords celldefine default_nettype define else elsif end_keywords endcelldefine endif ifdef ifndef include line nounconnected_drive pragma resetall timescale unconnected_drive undef undefineall"
			},
			r: 0
		}]
	}
}), hljs.registerLanguage("parser3", function(a) {
	var b = a.C("{", "}", {
		c: ["self"]
	});
	return {
		sL: "xml",
		r: 0,
		c: [a.C("^#", "$"), a.C("\\^rem{", "}", {
			r: 10,
			c: [b]
		}), {
			cN: "meta",
			b: "^@(?:BASE|USE|CLASS|OPTIONS)$",
			r: 10
		}, {
			cN: "title",
			b: "@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$"
		}, {
			cN: "variable",
			b: "\\$\\{?[\\w\\-\\.\\:]+\\}?"
		}, {
			cN: "keyword",
			b: "\\^[\\w\\-\\.\\:]+"
		}, {
			cN: "number",
			b: "\\^#[0-9a-fA-F]+"
		}, a.CNM]
	}
}), hljs.registerLanguage("pony", function(a) {
	var b = {
			keyword: "actor addressof and as be break class compile_error compile_intrinsicconsume continue delegate digestof do else elseif embed end errorfor fun if ifdef in interface is isnt lambda let match new not objector primitive recover repeat return struct then trait try type until use var where while with xor",
			meta: "iso val tag trn box ref",
			literal: "this false true"
		},
		c = {
			cN: "string",
			b: '"""',
			e: '"""',
			r: 10
		},
		d = {
			cN: "string",
			b: '"',
			e: '"',
			c: [a.BE]
		},
		e = {
			cN: "string",
			b: "'",
			e: "'",
			c: [a.BE],
			r: 0
		},
		f = {
			cN: "type",
			b: "\\b_?[A-Z][\\w]*",
			r: 0
		},
		g = {
			b: a.IR + "'",
			r: 0
		},
		h = {
			cN: "class",
			bK: "class actor",
			e: "$",
			c: [a.TM, a.CLCM]
		},
		i = {
			cN: "function",
			bK: "new fun",
			e: "=>",
			c: [a.TM, {
				b: /\(/,
				e: /\)/,
				c: [f, g, a.CNM, a.CBCM]
			}, {
				b: /:/,
				eW: !0,
				c: [f]
			}, a.CLCM]
		};
	return {
		k: b,
		c: [h, i, f, c, d, e, g, a.CNM, a.CLCM, a.CBCM]
	}
}), hljs.registerLanguage("htmlbars", function(a) {
	var b = "action collection component concat debugger each each-in else get hash if input link-to loc log mut outlet partial query-params render textarea unbound unless with yield view",
		c = {
			i: /\}\}/,
			b: /[a-zA-Z0-9_]+=/,
			rB: !0,
			r: 0,
			c: [{
				cN: "attr",
				b: /[a-zA-Z0-9_]+/
			}]
		},
		d = ({
			i: /\}\}/,
			b: /\)/,
			e: /\)/,
			c: [{
				b: /[a-zA-Z\.\-]+/,
				k: {
					built_in: b
				},
				starts: {
					eW: !0,
					r: 0,
					c: [a.QSM]
				}
			}]
		}, {
			eW: !0,
			r: 0,
			k: {
				keyword: "as",
				built_in: b
			},
			c: [a.QSM, c, a.NM]
		});
	return {
		cI: !0,
		sL: "xml",
		c: [a.C("{{!(--)?", "(--)?}}"), {
			cN: "template-tag",
			b: /\{\{[#\/]/,
			e: /\}\}/,
			c: [{
				cN: "name",
				b: /[a-zA-Z\.\-]+/,
				k: {
					"builtin-name": b
				},
				starts: d
			}]
		}, {
			cN: "template-variable",
			b: /\{\{[a-zA-Z][a-zA-Z\-]+/,
			e: /\}\}/,
			k: {
				keyword: "as",
				built_in: b
			},
			c: [a.QSM]
		}]
	}
}), hljs.registerLanguage("stan", function(a) {
	return {
		c: [a.HCM, a.CLCM, a.CBCM, {
			b: a.UIR,
			l: a.UIR,
			k: {
				name: "for in while repeat until if then else",
				symbol: "bernoulli bernoulli_logit binomial binomial_logit beta_binomial hypergeometric categorical categorical_logit ordered_logistic neg_binomial neg_binomial_2 neg_binomial_2_log poisson poisson_log multinomial normal exp_mod_normal skew_normal student_t cauchy double_exponential logistic gumbel lognormal chi_square inv_chi_square scaled_inv_chi_square exponential inv_gamma weibull frechet rayleigh wiener pareto pareto_type_2 von_mises uniform multi_normal multi_normal_prec multi_normal_cholesky multi_gp multi_gp_cholesky multi_student_t gaussian_dlm_obs dirichlet lkj_corr lkj_corr_cholesky wishart inv_wishart",
				"selector-tag": "int real vector simplex unit_vector ordered positive_ordered row_vector matrix cholesky_factor_corr cholesky_factor_cov corr_matrix cov_matrix",
				title: "functions model data parameters quantities transformed generated",
				literal: "true false"
			},
			r: 0
		}, {
			cN: "number",
			b: "0[xX][0-9a-fA-F]+[Li]?\\b",
			r: 0
		}, {
			cN: "number",
			b: "0[xX][0-9a-fA-F]+[Li]?\\b",
			r: 0
		}, {
			cN: "number",
			b: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
			r: 0
		}, {
			cN: "number",
			b: "\\d+\\.(?!\\d)(?:i\\b)?",
			r: 0
		}, {
			cN: "number",
			b: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
			r: 0
		}, {
			cN: "number",
			b: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
			r: 0
		}]
	}
}), hljs.registerLanguage("stylus", function(a) {
	var b = {
			cN: "variable",
			b: "\\$" + a.IR
		},
		c = {
			cN: "number",
			b: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"
		},
		d = ["charset", "css", "debug", "extend", "font-face", "for", "import", "include", "media", "mixin", "page", "warn", "while"],
		e = ["after", "before", "first-letter", "first-line", "active", "first-child", "focus", "hover", "lang", "link", "visited"],
		f = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
		g = "[\\.\\s\\n\\[\\:,]",
		h = ["align-content", "align-items", "align-self", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "auto", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "clip-path", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-variant-ligatures", "font-weight", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inherit", "initial", "justify-content", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "mask", "max-height", "max-width", "min-height", "min-width", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index"],
		i = ["\\?", "(\\bReturn\\b)", "(\\bEnd\\b)", "(\\bend\\b)", "(\\bdef\\b)", ";", "#\\s", "\\*\\s", "===\\s", "\\|", "%"];
	return {
		aliases: ["styl"],
		cI: !1,
		k: "if else for in",
		i: "(" + i.join("|") + ")",
		c: [a.QSM, a.ASM, a.CLCM, a.CBCM, c, {
			b: "\\.[a-zA-Z][a-zA-Z0-9_-]*" + g,
			rB: !0,
			c: [{
				cN: "selector-class",
				b: "\\.[a-zA-Z][a-zA-Z0-9_-]*"
			}]
		}, {
			b: "\\#[a-zA-Z][a-zA-Z0-9_-]*" + g,
			rB: !0,
			c: [{
				cN: "selector-id",
				b: "\\#[a-zA-Z][a-zA-Z0-9_-]*"
			}]
		}, {
			b: "\\b(" + f.join("|") + ")" + g,
			rB: !0,
			c: [{
				cN: "selector-tag",
				b: "\\b[a-zA-Z][a-zA-Z0-9_-]*"
			}]
		}, {
			b: "&?:?:\\b(" + e.join("|") + ")" + g
		}, {
			b: "@(" + d.join("|") + ")\\b"
		}, b, a.CSSNM, a.NM, {
			cN: "function",
			b: "^[a-zA-Z][a-zA-Z0-9_-]*\\(.*\\)",
			i: "[\\n]",
			rB: !0,
			c: [{
				cN: "title",
				b: "\\b[a-zA-Z][a-zA-Z0-9_-]*"
			}, {
				cN: "params",
				b: /\(/,
				e: /\)/,
				c: [c, b, a.ASM, a.CSSNM, a.NM, a.QSM]
			}]
		}, {
			cN: "attribute",
			b: "\\b(" + h.reverse().join("|") + ")\\b",
			starts: {
				e: /;|$/,
				c: [c, b, a.ASM, a.QSM, a.CSSNM, a.NM, a.CBCM],
				i: /\./,
				r: 0
			}
		}]
	}
}), hljs.registerLanguage("crmsh", function(a) {
	var b = "primitive rsc_template",
		c = "group clone ms master location colocation order fencing_topology rsc_ticket acl_target acl_group user role tag xml",
		d = "property rsc_defaults op_defaults",
		e = "params meta operations op rule attributes utilization",
		f = "read write deny defined not_defined in_range date spec in ref reference attribute type xpath version and or lt gt tag lte gte eq ne \\",
		g = "number string",
		h = "Master Started Slave Stopped start promote demote stop monitor true false";
	return {
		aliases: ["crm", "pcmk"],
		cI: !0,
		k: {
			keyword: e + " " + f + " " + g,
			literal: h
		},
		c: [a.HCM, {
			bK: "node",
			starts: {
				e: "\\s*([\\w_-]+:)?",
				starts: {
					cN: "title",
					e: "\\s*[\\$\\w_][\\w_-]*"
				}
			}
		}, {
			bK: b,
			starts: {
				cN: "title",
				e: "\\s*[\\$\\w_][\\w_-]*",
				starts: {
					e: "\\s*@?[\\w_][\\w_\\.:-]*"
				}
			}
		}, {
			b: "\\b(" + c.split(" ").join("|") + ")\\s+",
			k: c,
			starts: {
				cN: "title",
				e: "[\\$\\w_][\\w_-]*"
			}
		}, {
			bK: d,
			starts: {
				cN: "title",
				e: "\\s*([\\w_-]+:)?"
			}
		}, a.QSM, {
			cN: "meta",
			b: "(ocf|systemd|service|lsb):[\\w_:-]+",
			r: 0
		}, {
			cN: "number",
			b: "\\b\\d+(\\.\\d+)?(ms|s|h|m)?",
			r: 0
		}, {
			cN: "literal",
			b: "[-]?(infinity|inf)",
			r: 0
		}, {
			cN: "attr",
			b: /([A-Za-z\$_\#][\w_-]+)=/,
			r: 0
		}, {
			cN: "tag",
			b: "</?",
			e: "/?>",
			r: 0
		}]
	}
}), hljs.registerLanguage("fsharp", function(a) {
	var b = {
		b: "<",
		e: ">",
		c: [a.inherit(a.TM, {
			b: /'[a-zA-Z0-9_]+/
		})]
	};
	return {
		aliases: ["fs"],
		k: "abstract and as assert base begin class default delegate do done downcast downto elif else end exception extern false finally for fun function global if in inherit inline interface internal lazy let match member module mutable namespace new null of open or override private public rec return sig static struct then to true try type upcast use val void when while with yield",
		i: /\/\*/,
		c: [{
			cN: "keyword",
			b: /\b(yield|return|let|do)!/
		}, {
			cN: "string",
			b: '@"',
			e: '"',
			c: [{
				b: '""'
			}]
		}, {
			cN: "string",
			b: '"""',
			e: '"""'
		}, a.C("\\(\\*", "\\*\\)"), {
			cN: "class",
			bK: "type",
			e: "\\(|=|$",
			eE: !0,
			c: [a.UTM, b]
		}, {
			cN: "meta",
			b: "\\[<",
			e: ">\\]",
			r: 10
		}, {
			cN: "symbol",
			b: "\\B('[A-Za-z])\\b",
			c: [a.BE]
		}, a.CLCM, a.inherit(a.QSM, {
			i: null
		}), a.CNM]
	}
}), hljs.registerLanguage("golo", function(a) {
	return {
		k: {
			keyword: "println readln print import module function local return let var while for foreach times in case when match with break continue augment augmentation each find filter reduce if then else otherwise try catch finally raise throw orIfNull DynamicObject|10 DynamicVariable struct Observable map set vector list array",
			literal: "true false null"
		},
		c: [a.HCM, a.QSM, a.CNM, {
			cN: "meta",
			b: "@[A-Za-z]+"
		}]
	}
}), hljs.registerLanguage("excel", function(a) {
	return {
		aliases: ["xlsx", "xls"],
		cI: !0,
		l: /[a-zA-Z][\w\.]*/,
		k: {
			built_in: "ABS ACCRINT ACCRINTM ACOS ACOSH ACOT ACOTH AGGREGATE ADDRESS AMORDEGRC AMORLINC AND ARABIC AREAS ASC ASIN ASINH ATAN ATAN2 ATANH AVEDEV AVERAGE AVERAGEA AVERAGEIF AVERAGEIFS BAHTTEXT BASE BESSELI BESSELJ BESSELK BESSELY BETADIST BETA.DIST BETAINV BETA.INV BIN2DEC BIN2HEX BIN2OCT BINOMDIST BINOM.DIST BINOM.DIST.RANGE BINOM.INV BITAND BITLSHIFT BITOR BITRSHIFT BITXOR CALL CEILING CEILING.MATH CEILING.PRECISE CELL CHAR CHIDIST CHIINV CHITEST CHISQ.DIST CHISQ.DIST.RT CHISQ.INV CHISQ.INV.RT CHISQ.TEST CHOOSE CLEAN CODE COLUMN COLUMNS COMBIN COMBINA COMPLEX CONCAT CONCATENATE CONFIDENCE CONFIDENCE.NORM CONFIDENCE.T CONVERT CORREL COS COSH COT COTH COUNT COUNTA COUNTBLANK COUNTIF COUNTIFS COUPDAYBS COUPDAYS COUPDAYSNC COUPNCD COUPNUM COUPPCD COVAR COVARIANCE.P COVARIANCE.S CRITBINOM CSC CSCH CUBEKPIMEMBER CUBEMEMBER CUBEMEMBERPROPERTY CUBERANKEDMEMBER CUBESET CUBESETCOUNT CUBEVALUE CUMIPMT CUMPRINC DATE DATEDIF DATEVALUE DAVERAGE DAY DAYS DAYS360 DB DBCS DCOUNT DCOUNTA DDB DEC2BIN DEC2HEX DEC2OCT DECIMAL DEGREES DELTA DEVSQ DGET DISC DMAX DMIN DOLLAR DOLLARDE DOLLARFR DPRODUCT DSTDEV DSTDEVP DSUM DURATION DVAR DVARP EDATE EFFECT ENCODEURL EOMONTH ERF ERF.PRECISE ERFC ERFC.PRECISE ERROR.TYPE EUROCONVERT EVEN EXACT EXP EXPON.DIST EXPONDIST FACT FACTDOUBLE FALSE|0 F.DIST FDIST F.DIST.RT FILTERXML FIND FINDB F.INV F.INV.RT FINV FISHER FISHERINV FIXED FLOOR FLOOR.MATH FLOOR.PRECISE FORECAST FORECAST.ETS FORECAST.ETS.CONFINT FORECAST.ETS.SEASONALITY FORECAST.ETS.STAT FORECAST.LINEAR FORMULATEXT FREQUENCY F.TEST FTEST FV FVSCHEDULE GAMMA GAMMA.DIST GAMMADIST GAMMA.INV GAMMAINV GAMMALN GAMMALN.PRECISE GAUSS GCD GEOMEAN GESTEP GETPIVOTDATA GROWTH HARMEAN HEX2BIN HEX2DEC HEX2OCT HLOOKUP HOUR HYPERLINK HYPGEOM.DIST HYPGEOMDIST IF|0 IFERROR IFNA IFS IMABS IMAGINARY IMARGUMENT IMCONJUGATE IMCOS IMCOSH IMCOT IMCSC IMCSCH IMDIV IMEXP IMLN IMLOG10 IMLOG2 IMPOWER IMPRODUCT IMREAL IMSEC IMSECH IMSIN IMSINH IMSQRT IMSUB IMSUM IMTAN INDEX INDIRECT INFO INT INTERCEPT INTRATE IPMT IRR ISBLANK ISERR ISERROR ISEVEN ISFORMULA ISLOGICAL ISNA ISNONTEXT ISNUMBER ISODD ISREF ISTEXT ISO.CEILING ISOWEEKNUM ISPMT JIS KURT LARGE LCM LEFT LEFTB LEN LENB LINEST LN LOG LOG10 LOGEST LOGINV LOGNORM.DIST LOGNORMDIST LOGNORM.INV LOOKUP LOWER MATCH MAX MAXA MAXIFS MDETERM MDURATION MEDIAN MID MIDBs MIN MINIFS MINA MINUTE MINVERSE MIRR MMULT MOD MODE MODE.MULT MODE.SNGL MONTH MROUND MULTINOMIAL MUNIT N NA NEGBINOM.DIST NEGBINOMDIST NETWORKDAYS NETWORKDAYS.INTL NOMINAL NORM.DIST NORMDIST NORMINV NORM.INV NORM.S.DIST NORMSDIST NORM.S.INV NORMSINV NOT NOW NPER NPV NUMBERVALUE OCT2BIN OCT2DEC OCT2HEX ODD ODDFPRICE ODDFYIELD ODDLPRICE ODDLYIELD OFFSET OR PDURATION PEARSON PERCENTILE.EXC PERCENTILE.INC PERCENTILE PERCENTRANK.EXC PERCENTRANK.INC PERCENTRANK PERMUT PERMUTATIONA PHI PHONETIC PI PMT POISSON.DIST POISSON POWER PPMT PRICE PRICEDISC PRICEMAT PROB PRODUCT PROPER PV QUARTILE QUARTILE.EXC QUARTILE.INC QUOTIENT RADIANS RAND RANDBETWEEN RANK.AVG RANK.EQ RANK RATE RECEIVED REGISTER.ID REPLACE REPLACEB REPT RIGHT RIGHTB ROMAN ROUND ROUNDDOWN ROUNDUP ROW ROWS RRI RSQ RTD SEARCH SEARCHB SEC SECH SECOND SERIESSUM SHEET SHEETS SIGN SIN SINH SKEW SKEW.P SLN SLOPE SMALL SQL.REQUEST SQRT SQRTPI STANDARDIZE STDEV STDEV.P STDEV.S STDEVA STDEVP STDEVPA STEYX SUBSTITUTE SUBTOTAL SUM SUMIF SUMIFS SUMPRODUCT SUMSQ SUMX2MY2 SUMX2PY2 SUMXMY2 SWITCH SYD T TAN TANH TBILLEQ TBILLPRICE TBILLYIELD T.DIST T.DIST.2T T.DIST.RT TDIST TEXT TEXTJOIN TIME TIMEVALUE T.INV T.INV.2T TINV TODAY TRANSPOSE TREND TRIM TRIMMEAN TRUE|0 TRUNC T.TEST TTEST TYPE UNICHAR UNICODE UPPER VALUE VAR VAR.P VAR.S VARA VARP VARPA VDB VLOOKUP WEBSERVICE WEEKDAY WEEKNUM WEIBULL WEIBULL.DIST WORKDAY WORKDAY.INTL XIRR XNPV XOR YEAR YEARFRAC YIELD YIELDDISC YIELDMAT Z.TEST ZTEST"
		},
		c: [{
			b: /^=/,
			e: /[^=]/,
			rE: !0,
			i: /=/,
			r: 10
		}, {
			cN: "symbol",
			b: /\b[A-Z]{1,2}\d+\b/,
			e: /[^\d]/,
			eE: !0,
			r: 0
		}, {
			cN: "symbol",
			b: /[A-Z]{0,2}\d*:[A-Z]{0,2}\d*/,
			r: 0
		}, a.BE, a.QSM, {
			cN: "number",
			b: a.NR + "(%)?",
			r: 0
		}, a.C(/\bN\(/, /\)/, {
			eB: !0,
			eE: !0,
			i: /\n/
		})]
	}
}), hljs.registerLanguage("ceylon", function(a) {
	var b = "assembly module package import alias class interface object given value assign void function new of extends satisfies abstracts in out return break continue throw assert dynamic if else switch case for while try catch finally then let this outer super is exists nonempty",
		c = "shared abstract formal default actual variable late native deprecatedfinal sealed annotation suppressWarnings small",
		d = "doc by license see throws tagged",
		e = {
			cN: "subst",
			eB: !0,
			eE: !0,
			b: /``/,
			e: /``/,
			k: b,
			r: 10
		},
		f = [{
			cN: "string",
			b: '"""',
			e: '"""',
			r: 10
		}, {
			cN: "string",
			b: '"',
			e: '"',
			c: [e]
		}, {
			cN: "string",
			b: "'",
			e: "'"
		}, {
			cN: "number",
			b: "#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?",
			r: 0
		}];
	return e.c = f, {
		k: {
			keyword: b + " " + c,
			meta: d
		},
		i: "\\$[^01]|#[^0-9a-fA-F]",
		c: [a.CLCM, a.C("/\\*", "\\*/", {
			c: ["self"]
		}), {
			cN: "meta",
			b: '@[a-z]\\w*(?:\\:"[^"]*")?'
		}].concat(f)
	}
}), hljs.registerLanguage("makefile", function(a) {
	var b = {
		cN: "variable",
		b: /\$\(/,
		e: /\)/,
		c: [a.BE]
	};
	return {
		aliases: ["mk", "mak"],
		c: [a.HCM, {
			b: /^\w+\s*\W*=/,
			rB: !0,
			r: 0,
			starts: {
				e: /\s*\W*=/,
				eE: !0,
				starts: {
					e: /$/,
					r: 0,
					c: [b]
				}
			}
		}, {
			cN: "section",
			b: /^[\w]+:\s*$/
		}, {
			cN: "meta",
			b: /^\.PHONY:/,
			e: /$/,
			k: {
				"meta-keyword": ".PHONY"
			},
			l: /[\.\w]+/
		}, {
			b: /^\t+/,
			e: /$/,
			r: 0,
			c: [a.QSM, b]
		}]
	}
}), hljs.registerLanguage("nimrod", function(a) {
	return {
		aliases: ["nim"],
		k: {
			keyword: "addr and as asm bind block break case cast const continue converter discard distinct div do elif else end enum except export finally for from generic if import in include interface is isnot iterator let macro method mixin mod nil not notin object of or out proc ptr raise ref return shl shr static template try tuple type using var when while with without xor yield",
			literal: "shared guarded stdin stdout stderr result true false",
			built_in: "int int8 int16 int32 int64 uint uint8 uint16 uint32 uint64 float float32 float64 bool char string cstring pointer expr stmt void auto any range array openarray varargs seq set clong culong cchar cschar cshort cint csize clonglong cfloat cdouble clongdouble cuchar cushort cuint culonglong cstringarray semistatic"
		},
		c: [{
			cN: "meta",
			b: /{\./,
			e: /\.}/,
			r: 10
		}, {
			cN: "string",
			b: /[a-zA-Z]\w*"/,
			e: /"/,
			c: [{
				b: /""/
			}]
		}, {
			cN: "string",
			b: /([a-zA-Z]\w*)?"""/,
			e: /"""/
		}, a.QSM, {
			cN: "type",
			b: /\b[A-Z]\w+\b/,
			r: 0
		}, {
			cN: "number",
			r: 0,
			v: [{
				b: /\b(0[xX][0-9a-fA-F][_0-9a-fA-F]*)('?[iIuU](8|16|32|64))?/
			}, {
				b: /\b(0o[0-7][_0-7]*)('?[iIuUfF](8|16|32|64))?/
			}, {
				b: /\b(0(b|B)[01][_01]*)('?[iIuUfF](8|16|32|64))?/
			}, {
				b: /\b(\d[_\d]*)('?[iIuUfF](8|16|32|64))?/
			}]
		}, a.HCM]
	}
}), hljs.registerLanguage("clojure-repl", function(a) {
	return {
		c: [{
			cN: "meta",
			b: /^([\w.-]+|\s*#_)=>/,
			starts: {
				e: /$/,
				sL: "clojure"
			}
		}]
	}
}), hljs.registerLanguage("vhdl", function(a) {
	var b = "\\d(_|\\d)*",
		c = "[eE][-+]?" + b,
		d = b + "(\\." + b + ")?(" + c + ")?",
		e = "\\w+",
		f = b + "#" + e + "(\\." + e + ")?#(" + c + ")?",
		g = "\\b(" + f + "|" + d + ")";
	return {
		cI: !0,
		k: {
			keyword: "abs access after alias all and architecture array assert assume assume_guarantee attribute begin block body buffer bus case component configuration constant context cover disconnect downto default else elsif end entity exit fairness file for force function generate generic group guarded if impure in inertial inout is label library linkage literal loop map mod nand new next nor not null of on open or others out package port postponed procedure process property protected pure range record register reject release rem report restrict restrict_guarantee return rol ror select sequence severity shared signal sla sll sra srl strong subtype then to transport type unaffected units until use variable vmode vprop vunit wait when while with xnor xor",
			built_in: "boolean bit character integer time delay_length natural positive string bit_vector file_open_kind file_open_status std_logic std_logic_vector unsigned signed boolean_vector integer_vector std_ulogic std_ulogic_vector unresolved_unsigned u_unsigned unresolved_signed u_signedreal_vector time_vector",
			literal: "false true note warning error failure line text side width"
		},
		i: "{",
		c: [a.CBCM, a.C("--", "$"), a.QSM, {
			cN: "number",
			b: g,
			r: 0
		}, {
			cN: "string",
			b: "'(U|X|0|1|Z|W|L|H|-)'",
			c: [a.BE]
		}, {
			cN: "symbol",
			b: "'[A-Za-z](_?[A-Za-z0-9])*",
			c: [a.BE]
		}]
	}
}), hljs.registerLanguage("smali", function(a) {
	var b = ["add", "and", "cmp", "cmpg", "cmpl", "const", "div", "double", "float", "goto", "if", "int", "long", "move", "mul", "neg", "new", "nop", "not", "or", "rem", "return", "shl", "shr", "sput", "sub", "throw", "ushr", "xor"],
		c = ["aget", "aput", "array", "check", "execute", "fill", "filled", "goto/16", "goto/32", "iget", "instance", "invoke", "iput", "monitor", "packed", "sget", "sparse"],
		d = ["transient", "constructor", "abstract", "final", "synthetic", "public", "private", "protected", "static", "bridge", "system"];
	return {
		aliases: ["smali"],
		c: [{
			cN: "string",
			b: '"',
			e: '"',
			r: 0
		}, a.C("#", "$", {
			r: 0
		}), {
			cN: "keyword",
			v: [{
				b: "\\s*\\.end\\s[a-zA-Z0-9]*"
			}, {
				b: "^[ ]*\\.[a-zA-Z]*",
				r: 0
			}, {
				b: "\\s:[a-zA-Z_0-9]*",
				r: 0
			}, {
				b: "\\s(" + d.join("|") + ")"
			}]
		}, {
			cN: "built_in",
			v: [{
				b: "\\s(" + b.join("|") + ")\\s"
			}, {
				b: "\\s(" + b.join("|") + ")((\\-|/)[a-zA-Z0-9]+)+\\s",
				r: 10
			}, {
				b: "\\s(" + c.join("|") + ")((\\-|/)[a-zA-Z0-9]+)*\\s",
				r: 10
			}]
		}, {
			cN: "class",
			b: "L[^(;:\n]*;",
			r: 0
		}, {
			b: "[vp][0-9]+"
		}]
	}
}), hljs.registerLanguage("haskell", function(a) {
	var b = {
			v: [a.C("--", "$"), a.C("{-", "-}", {
				c: ["self"]
			})]
		},
		c = {
			cN: "meta",
			b: "{-#",
			e: "#-}"
		},
		d = {
			cN: "meta",
			b: "^#",
			e: "$"
		},
		e = {
			cN: "type",
			b: "\\b[A-Z][\\w']*",
			r: 0
		},
		f = {
			b: "\\(",
			e: "\\)",
			i: '"',
			c: [c, d, {
				cN: "type",
				b: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"
			}, a.inherit(a.TM, {
				b: "[_a-z][\\w']*"
			}), b]
		},
		g = {
			b: "{",
			e: "}",
			c: f.c
		};
	return {
		aliases: ["hs"],
		k: "let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",
		c: [{
			bK: "module",
			e: "where",
			k: "module where",
			c: [f, b],
			i: "\\W\\.|;"
		}, {
			b: "\\bimport\\b",
			e: "$",
			k: "import qualified as hiding",
			c: [f, b],
			i: "\\W\\.|;"
		}, {
			cN: "class",
			b: "^(\\s*)?(class|instance)\\b",
			e: "where",
			k: "class family instance where",
			c: [e, f, b]
		}, {
			cN: "class",
			b: "\\b(data|(new)?type)\\b",
			e: "$",
			k: "data family type newtype deriving",
			c: [c, e, f, g, b]
		}, {
			bK: "default",
			e: "$",
			c: [e, f, b]
		}, {
			bK: "infix infixl infixr",
			e: "$",
			c: [a.CNM, b]
		}, {
			b: "\\bforeign\\b",
			e: "$",
			k: "foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",
			c: [e, a.QSM, b]
		}, {
			cN: "meta",
			b: "#!\\/usr\\/bin\\/env runhaskell",
			e: "$"
		}, c, d, a.QSM, a.CNM, e, a.inherit(a.TM, {
			b: "^[_a-z][\\w']*"
		}), b, {
			b: "->|<-"
		}]
	}
}), hljs.registerLanguage("ocaml", function(a) {
	return {
		aliases: ["ml"],
		k: {
			keyword: "and as assert asr begin class constraint do done downto else end exception external for fun function functor if in include inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method mod module mutable new object of open! open or private rec sig struct then to try type val! val virtual when while with parser value",
			built_in: "array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit in_channel out_channel ref",
			literal: "true false"
		},
		i: /\/\/|>>/,
		l: "[a-z_]\\w*!?",
		c: [{
			cN: "literal",
			b: "\\[(\\|\\|)?\\]|\\(\\)",
			r: 0
		}, a.C("\\(\\*", "\\*\\)", {
			c: ["self"]
		}), {
			cN: "symbol",
			b: "'[A-Za-z_](?!')[\\w']*"
		}, {
			cN: "type",
			b: "`[A-Z][\\w']*"
		}, {
			cN: "type",
			b: "\\b[A-Z][\\w']*",
			r: 0
		}, {
			b: "[a-z_]\\w*'[\\w']*",
			r: 0
		}, a.inherit(a.ASM, {
			cN: "string",
			r: 0
		}), a.inherit(a.QSM, {
			i: null
		}), {
			cN: "number",
			b: "\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
			r: 0
		}, {
			b: /[-=]>/
		}]
	}
}), hljs.registerLanguage("pf", function(a) {
	var b = {
			cN: "variable",
			b: /\$[\w\d#@][\w\d_]*/
		},
		c = {
			cN: "variable",
			b: /<(?!\/)/,
			e: />/
		};
	return {
		aliases: ["pf.conf"],
		l: /[a-z0-9_<>-]+/,
		k: {
			built_in: "block match pass load anchor|5 antispoof|10 set table",
			keyword: "in out log quick on rdomain inet inet6 proto from port os to routeallow-opts divert-packet divert-reply divert-to flags group icmp-typeicmp6-type label once probability recieved-on rtable prio queuetos tag tagged user keep fragment for os dropaf-to|10 binat-to|10 nat-to|10 rdr-to|10 bitmask least-stats random round-robinsource-hash static-portdup-to reply-to route-toparent bandwidth default min max qlimitblock-policy debug fingerprints hostid limit loginterface optimizationreassemble ruleset-optimization basic none profile skip state-defaultsstate-policy timeoutconst counters persistno modulate synproxy state|5 floating if-bound no-sync pflow|10 sloppysource-track global rule max-src-nodes max-src-states max-src-connmax-src-conn-rate overload flushscrub|5 max-mss min-ttl no-df|10 random-id",
			literal: "all any no-route self urpf-failed egress|5 unknown"
		},
		c: [a.HCM, a.NM, a.QSM, b, c]
	}
}), hljs.registerLanguage("mipsasm", function(a) {
	return {
		cI: !0,
		aliases: ["mips"],
		l: "\\.?" + a.IR,
		k: {
			meta: ".2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .ltorg ",
			built_in: "$0 $1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11 $12 $13 $14 $15 $16 $17 $18 $19 $20 $21 $22 $23 $24 $25 $26 $27 $28 $29 $30 $31 zero at v0 v1 a0 a1 a2 a3 a4 a5 a6 a7 t0 t1 t2 t3 t4 t5 t6 t7 t8 t9 s0 s1 s2 s3 s4 s5 s6 s7 s8 k0 k1 gp sp fp ra $f0 $f1 $f2 $f2 $f4 $f5 $f6 $f7 $f8 $f9 $f10 $f11 $f12 $f13 $f14 $f15 $f16 $f17 $f18 $f19 $f20 $f21 $f22 $f23 $f24 $f25 $f26 $f27 $f28 $f29 $f30 $f31 Context Random EntryLo0 EntryLo1 Context PageMask Wired EntryHi HWREna BadVAddr Count Compare SR IntCtl SRSCtl SRSMap Cause EPC PRId EBase Config Config1 Config2 Config3 LLAddr Debug DEPC DESAVE CacheErr ECC ErrorEPC TagLo DataLo TagHi DataHi WatchLo WatchHi PerfCtl PerfCnt "
		},
		c: [{
			cN: "keyword",
			b: "\\b(addi?u?|andi?|b(al)?|beql?|bgez(al)?l?|bgtzl?|blezl?|bltz(al)?l?|bnel?|cl[oz]|divu?|ext|ins|j(al)?|jalr(.hb)?|jr(.hb)?|lbu?|lhu?|ll|lui|lw[lr]?|maddu?|mfhi|mflo|movn|movz|move|msubu?|mthi|mtlo|mul|multu?|nop|nor|ori?|rotrv?|sb|sc|se[bh]|sh|sllv?|slti?u?|srav?|srlv?|subu?|sw[lr]?|xori?|wsbh|abs.[sd]|add.[sd]|alnv.ps|bc1[ft]l?|c.(s?f|un|u?eq|[ou]lt|[ou]le|ngle?|seq|l[et]|ng[et]).[sd]|(ceil|floor|round|trunc).[lw].[sd]|cfc1|cvt.d.[lsw]|cvt.l.[dsw]|cvt.ps.s|cvt.s.[dlw]|cvt.s.p[lu]|cvt.w.[dls]|div.[ds]|ldx?c1|luxc1|lwx?c1|madd.[sd]|mfc1|mov[fntz]?.[ds]|msub.[sd]|mth?c1|mul.[ds]|neg.[ds]|nmadd.[ds]|nmsub.[ds]|p[lu][lu].ps|recip.fmt|r?sqrt.[ds]|sdx?c1|sub.[ds]|suxc1|swx?c1|break|cache|d?eret|[de]i|ehb|mfc0|mtc0|pause|prefx?|rdhwr|rdpgpr|sdbbp|ssnop|synci?|syscall|teqi?|tgei?u?|tlb(p|r|w[ir])|tlti?u?|tnei?|wait|wrpgpr)",
			e: "\\s"
		}, a.C("[;#]", "$"), a.CBCM, a.QSM, {
			cN: "string",
			b: "'",
			e: "[^\\\\]'",
			r: 0
		}, {
			cN: "title",
			b: "\\|",
			e: "\\|",
			i: "\\n",
			r: 0
		}, {
			cN: "number",
			v: [{
				b: "0x[0-9a-f]+"
			}, {
				b: "\\b-?\\d+"
			}],
			r: 0
		}, {
			cN: "symbol",
			v: [{
				b: "^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:"
			}, {
				b: "^\\s*[0-9]+:"
			}, {
				b: "[0-9]+[bf]"
			}],
			r: 0
		}],
		i: "/"
	}
}), hljs.registerLanguage("lua", function(a) {
	var b = "\\[=*\\[",
		c = "\\]=*\\]",
		d = {
			b: b,
			e: c,
			c: ["self"]
		},
		e = [a.C("--(?!" + b + ")", "$"), a.C("--" + b, c, {
			c: [d],
			r: 10
		})];
	return {
		l: a.UIR,
		k: {
			keyword: "and break do else elseif end false for if in local nil not or repeat return then true until while",
			built_in: "_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"
		},
		c: e.concat([{
			cN: "function",
			bK: "function",
			e: "\\)",
			c: [a.inherit(a.TM, {
				b: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"
			}), {
				cN: "params",
				b: "\\(",
				eW: !0,
				c: e
			}].concat(e)
		}, a.CNM, a.ASM, a.QSM, {
			cN: "string",
			b: b,
			e: c,
			c: [d],
			r: 5
		}])
	}
}), hljs.registerLanguage("gherkin", function(a) {
	return {
		aliases: ["feature"],
		k: "Feature Background Ability Business Need Scenario Scenarios Scenario Outline Scenario Template Examples Given And Then But When",
		c: [{
			cN: "symbol",
			b: "\\*",
			r: 0
		}, {
			cN: "meta",
			b: "@[^@\\s]+"
		}, {
			b: "\\|",
			e: "\\|\\w*$",
			c: [{
				cN: "string",
				b: "[^|]+"
			}]
		}, {
			cN: "variable",
			b: "<",
			e: ">"
		}, a.HCM, {
			cN: "string",
			b: '"""',
			e: '"""'
		}, a.QSM]
	}
}), hljs.registerLanguage("tp", function(a) {
	var b = {
			cN: "number",
			b: "[1-9][0-9]*",
			r: 0
		},
		c = {
			cN: "symbol",
			b: ":[^\\]]+"
		},
		d = {
			cN: "built_in",
			b: "(AR|P|PAYLOAD|PR|R|SR|RSR|LBL|VR|UALM|MESSAGE|UTOOL|UFRAME|TIMER|    TIMER_OVERFLOW|JOINT_MAX_SPEED|RESUME_PROG|DIAG_REC)\\[",
			e: "\\]",
			c: ["self", b, c]
		},
		e = {
			cN: "built_in",
			b: "(AI|AO|DI|DO|F|RI|RO|UI|UO|GI|GO|SI|SO)\\[",
			e: "\\]",
			c: ["self", b, a.QSM, c]
		};
	return {
		k: {
			keyword: "ABORT ACC ADJUST AND AP_LD BREAK CALL CNT COL CONDITION CONFIG DA DB DIV DETECT ELSE END ENDFOR ERR_NUM ERROR_PROG FINE FOR GP GUARD INC IF JMP LINEAR_MAX_SPEED LOCK MOD MONITOR OFFSET Offset OR OVERRIDE PAUSE PREG PTH RT_LD RUN SELECT SKIP Skip TA TB TO TOOL_OFFSET Tool_Offset UF UT UFRAME_NUM UTOOL_NUM UNLOCK WAIT X Y Z W P R STRLEN SUBSTR FINDSTR VOFFSET PROG ATTR MN POS",
			literal: "ON OFF max_speed LPOS JPOS ENABLE DISABLE START STOP RESET"
		},
		c: [d, e, {
			cN: "keyword",
			b: "/(PROG|ATTR|MN|POS|END)\\b"
		}, {
			cN: "keyword",
			b: "(CALL|RUN|POINT_LOGIC|LBL)\\b"
		}, {
			cN: "keyword",
			b: "\\b(ACC|CNT|Skip|Offset|PSPD|RT_LD|AP_LD|Tool_Offset)"
		}, {
			cN: "number",
			b: "\\d+(sec|msec|mm/sec|cm/min|inch/min|deg/sec|mm|in|cm)?\\b",
			r: 0
		}, a.C("//", "[;$]"), a.C("!", "[;$]"), a.C("--eg:", "$"), a.QSM, {
			cN: "string",
			b: "'",
			e: "'"
		}, a.CNM, {
			cN: "variable",
			b: "\\$[A-Za-z0-9_]+"
		}]
	}
}), hljs.registerLanguage("dts", function(a) {
	var b = {
			cN: "string",
			v: [a.inherit(a.QSM, {
				b: '((u8?|U)|L)?"'
			}), {
				b: '(u8?|U)?R"',
				e: '"',
				c: [a.BE]
			}, {
				b: "'\\\\?.",
				e: "'",
				i: "."
			}]
		},
		c = {
			cN: "number",
			v: [{
				b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
			}, {
				b: a.CNR
			}],
			r: 0
		},
		d = {
			cN: "meta",
			b: "#",
			e: "$",
			k: {
				"meta-keyword": "if else elif endif define undef ifdef ifndef"
			},
			c: [{
				b: /\\\n/,
				r: 0
			}, {
				bK: "include",
				e: "$",
				k: {
					"meta-keyword": "include"
				},
				c: [a.inherit(b, {
					cN: "meta-string"
				}), {
					cN: "meta-string",
					b: "<",
					e: ">",
					i: "\\n"
				}]
			}, b, a.CLCM, a.CBCM]
		},
		e = {
			cN: "variable",
			b: "\\&[a-z\\d_]*\\b"
		},
		f = {
			cN: "meta-keyword",
			b: "/[a-z][a-z\\d-]*/"
		},
		g = {
			cN: "symbol",
			b: "^\\s*[a-zA-Z_][a-zA-Z\\d_]*:"
		},
		h = {
			cN: "params",
			b: "<",
			e: ">",
			c: [c, e]
		},
		i = {
			cN: "class",
			b: /[a-zA-Z_][a-zA-Z\d_@]*\s{/,
			e: /[{;=]/,
			rB: !0,
			eE: !0
		},
		j = {
			cN: "class",
			b: "/\\s*{",
			e: "};",
			r: 10,
			c: [e, f, g, i, h, a.CLCM, a.CBCM, c, b]
		};
	return {
		k: "",
		c: [j, e, f, g, i, h, a.CLCM, a.CBCM, c, b, d, {
			b: a.IR + "::",
			k: ""
		}]
	}
}), hljs.registerLanguage("twig", function(a) {
	var b = {
			cN: "params",
			b: "\\(",
			e: "\\)"
		},
		c = "attribute block constant cycle date dump include max min parent random range source template_from_string",
		d = {
			bK: c,
			k: {
				name: c
			},
			r: 0,
			c: [b]
		},
		e = {
			b: /\|[A-Za-z_]+:?/,
			k: "abs batch capitalize convert_encoding date date_modify default escape first format join json_encode keys last length lower merge nl2br number_format raw replace reverse round slice sort split striptags title trim upper url_encode",
			c: [d]
		},
		f = "autoescape block do embed extends filter flush for if import include macro sandbox set spaceless use verbatim";
	return f = f + " " + f.split(" ").map(function(a) {
		return "end" + a
	}).join(" "), {
		aliases: ["craftcms"],
		cI: !0,
		sL: "xml",
		c: [a.C(/\{#/, /#}/), {
			cN: "template-tag",
			b: /\{%/,
			e: /%}/,
			c: [{
				cN: "name",
				b: /\w+/,
				k: f,
				starts: {
					eW: !0,
					c: [e, d],
					r: 0
				}
			}]
		}, {
			cN: "template-variable",
			b: /\{\{/,
			e: /}}/,
			c: ["self", e, d]
		}]
	}
}), hljs.registerLanguage("q", function(a) {
	var b = {
		keyword: "do while select delete by update from",
		literal: "0b 1b",
		built_in: "neg not null string reciprocal floor ceiling signum mod xbar xlog and or each scan over prior mmu lsq inv md5 ltime gtime count first var dev med cov cor all any rand sums prds mins maxs fills deltas ratios avgs differ prev next rank reverse iasc idesc asc desc msum mcount mavg mdev xrank mmin mmax xprev rotate distinct group where flip type key til get value attr cut set upsert raze union inter except cross sv vs sublist enlist read0 read1 hopen hclose hdel hsym hcount peach system ltrim rtrim trim lower upper ssr view tables views cols xcols keys xkey xcol xasc xdesc fkeys meta lj aj aj0 ij pj asof uj ww wj wj1 fby xgroup ungroup ej save load rsave rload show csv parse eval min max avg wavg wsum sin cos tan sum",
		type: "`float `double int `timestamp `timespan `datetime `time `boolean `symbol `char `byte `short `long `real `month `date `minute `second `guid"
	};
	return {
		aliases: ["k", "kdb"],
		k: b,
		l: /(`?)[A-Za-z0-9_]+\b/,
		c: [a.CLCM, a.QSM, a.CNM]
	}
}), hljs.registerLanguage("coffeescript", function(a) {
	var b = {
			keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
			literal: "true false null undefined yes no on off",
			built_in: "npm require console print module global window document"
		},
		c = "[A-Za-z$_][0-9A-Za-z$_]*",
		d = {
			cN: "subst",
			b: /#\{/,
			e: /}/,
			k: b
		},
		e = [a.BNM, a.inherit(a.CNM, {
			starts: {
				e: "(\\s*/)?",
				r: 0
			}
		}), {
			cN: "string",
			v: [{
				b: /'''/,
				e: /'''/,
				c: [a.BE]
			}, {
				b: /'/,
				e: /'/,
				c: [a.BE]
			}, {
				b: /"""/,
				e: /"""/,
				c: [a.BE, d]
			}, {
				b: /"/,
				e: /"/,
				c: [a.BE, d]
			}]
		}, {
			cN: "regexp",
			v: [{
				b: "///",
				e: "///",
				c: [d, a.HCM]
			}, {
				b: "//[gim]*",
				r: 0
			}, {
				b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
			}]
		}, {
			b: "@" + c
		}, {
			b: "`",
			e: "`",
			eB: !0,
			eE: !0,
			sL: "javascript"
		}];
	d.c = e;
	var f = a.inherit(a.TM, {
			b: c
		}),
		g = "(\\(.*\\))?\\s*\\B[-=]>",
		h = {
			cN: "params",
			b: "\\([^\\(]",
			rB: !0,
			c: [{
				b: /\(/,
				e: /\)/,
				k: b,
				c: ["self"].concat(e)
			}]
		};
	return {
		aliases: ["coffee", "cson", "iced"],
		k: b,
		i: /\/\*/,
		c: e.concat([a.C("###", "###"), a.HCM, {
			cN: "function",
			b: "^\\s*" + c + "\\s*=\\s*" + g,
			e: "[-=]>",
			rB: !0,
			c: [f, h]
		}, {
			b: /[:\(,=]\s*/,
			r: 0,
			c: [{
				cN: "function",
				b: g,
				e: "[-=]>",
				rB: !0,
				c: [h]
			}]
		}, {
			cN: "class",
			bK: "class",
			e: "$",
			i: /[:="\[\]]/,
			c: [{
				bK: "extends",
				eW: !0,
				i: /[:="\[\]]/,
				c: [f]
			}, f]
		}, {
			b: c + ":",
			e: ":",
			rB: !0,
			rE: !0,
			r: 0
		}])
	}
}), hljs.registerLanguage("typescript", function(a) {
	var b = {
		keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract",
		literal: "true false null undefined NaN Infinity",
		built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void"
	};
	return {
		aliases: ["ts"],
		k: b,
		c: [{
			cN: "meta",
			b: /^\s*['"]use strict['"]/
		}, a.ASM, a.QSM, {
			cN: "string",
			b: "`",
			e: "`",
			c: [a.BE, {
				cN: "subst",
				b: "\\$\\{",
				e: "\\}"
			}]
		}, a.CLCM, a.CBCM, {
			cN: "number",
			v: [{
				b: "\\b(0[bB][01]+)"
			}, {
				b: "\\b(0[oO][0-7]+)"
			}, {
				b: a.CNR
			}],
			r: 0
		}, {
			b: "(" + a.RSR + "|\\b(case|return|throw)\\b)\\s*",
			k: "return throw case",
			c: [a.CLCM, a.CBCM, a.RM],
			r: 0
		}, {
			cN: "function",
			b: "function",
			e: /[\{;]/,
			eE: !0,
			k: b,
			c: ["self", a.inherit(a.TM, {
				b: /[A-Za-z$_][0-9A-Za-z$_]*/
			}), {
				cN: "params",
				b: /\(/,
				e: /\)/,
				eB: !0,
				eE: !0,
				k: b,
				c: [a.CLCM, a.CBCM],
				i: /["'\(]/
			}],
			i: /%/,
			r: 0
		}, {
			bK: "constructor",
			e: /\{/,
			eE: !0
		}, {
			b: /module\./,
			k: {
				built_in: "module"
			},
			r: 0
		}, {
			bK: "module",
			e: /\{/,
			eE: !0
		}, {
			bK: "interface",
			e: /\{/,
			eE: !0,
			k: "interface extends"
		}, {
			b: /\$[(.]/
		}, {
			b: "\\." + a.IR,
			r: 0
		}]
	}
}), hljs.registerLanguage("nix", function(a) {
	var b = {
			keyword: "rec with let in inherit assert if else then",
			literal: "true false or and null",
			built_in: "import abort baseNameOf dirOf isNull builtins map removeAttrs throw toString derivation"
		},
		c = {
			cN: "subst",
			b: /\$\{/,
			e: /}/,
			k: b
		},
		d = {
			b: /[a-zA-Z0-9-_]+(\s*=)/,
			rB: !0,
			r: 0,
			c: [{
				cN: "attr",
				b: /\S+/
			}]
		},
		e = {
			cN: "string",
			c: [c],
			v: [{
				b: "''",
				e: "''"
			}, {
				b: '"',
				e: '"'
			}]
		},
		f = [a.NM, a.HCM, a.CBCM, e, d];
	return c.c = f, {
		aliases: ["nixos"],
		k: b,
		c: f
	}
}), hljs.registerLanguage("diff", function(a) {
	return {
		aliases: ["patch"],
		c: [{
			cN: "meta",
			r: 10,
			v: [{
				b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/
			}, {
				b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
			}, {
				b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
			}]
		}, {
			cN: "comment",
			v: [{
				b: /Index: /,
				e: /$/
			}, {
				b: /={3,}/,
				e: /$/
			}, {
				b: /^\-{3}/,
				e: /$/
			}, {
				b: /^\*{3} /,
				e: /$/
			}, {
				b: /^\+{3}/,
				e: /$/
			}, {
				b: /\*{5}/,
				e: /\*{5}$/
			}]
		}, {
			cN: "addition",
			b: "^\\+",
			e: "$"
		}, {
			cN: "deletion",
			b: "^\\-",
			e: "$"
		}, {
			cN: "addition",
			b: "^\\!",
			e: "$"
		}]
	}
}), hljs.registerLanguage("http", function(a) {
	var b = "HTTP/[0-9\\.]+";
	return {
		aliases: ["https"],
		i: "\\S",
		c: [{
			b: "^" + b,
			e: "$",
			c: [{
				cN: "number",
				b: "\\b\\d{3}\\b"
			}]
		}, {
			b: "^[A-Z]+ (.*?) " + b + "$",
			rB: !0,
			e: "$",
			c: [{
				cN: "string",
				b: " ",
				e: " ",
				eB: !0,
				eE: !0
			}, {
				b: b
			}, {
				cN: "keyword",
				b: "[A-Z]+"
			}]
		}, {
			cN: "attribute",
			b: "^\\w",
			e: ": ",
			eE: !0,
			i: "\\n|\\s|=",
			starts: {
				e: "$",
				r: 0
			}
		}, {
			b: "\\n\\n",
			starts: {
				sL: [],
				eW: !0
			}
		}]
	}
}), hljs.registerLanguage("livescript", function(a) {
	var b = {
			keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger case default function var with then unless until loop of by when and or is isnt not it that otherwise from to til fallthrough super case default function var void const let enum export import native __hasProp __extends __slice __bind __indexOf",
			literal: "true false null undefined yes no on off it that void",
			built_in: "npm require console print module global window document"
		},
		c = "[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*",
		d = a.inherit(a.TM, {
			b: c
		}),
		e = {
			cN: "subst",
			b: /#\{/,
			e: /}/,
			k: b
		},
		f = {
			cN: "subst",
			b: /#[A-Za-z$_]/,
			e: /(?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,
			k: b
		},
		g = [a.BNM, {
			cN: "number",
			b: "(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)",
			r: 0,
			starts: {
				e: "(\\s*/)?",
				r: 0
			}
		}, {
			cN: "string",
			v: [{
				b: /'''/,
				e: /'''/,
				c: [a.BE]
			}, {
				b: /'/,
				e: /'/,
				c: [a.BE]
			}, {
				b: /"""/,
				e: /"""/,
				c: [a.BE, e, f]
			}, {
				b: /"/,
				e: /"/,
				c: [a.BE, e, f]
			}, {
				b: /\\/,
				e: /(\s|$)/,
				eE: !0
			}]
		}, {
			cN: "regexp",
			v: [{
				b: "//",
				e: "//[gim]*",
				c: [e, a.HCM]
			}, {
				b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
			}]
		}, {
			b: "@" + c
		}, {
			b: "``",
			e: "``",
			eB: !0,
			eE: !0,
			sL: "javascript"
		}];
	e.c = g;
	var h = {
		cN: "params",
		b: "\\(",
		rB: !0,
		c: [{
			b: /\(/,
			e: /\)/,
			k: b,
			c: ["self"].concat(g)
		}]
	};
	return {
		aliases: ["ls"],
		k: b,
		i: /\/\*/,
		c: g.concat([a.C("\\/\\*", "\\*\\/"), a.HCM, {
			cN: "function",
			c: [d, h],
			rB: !0,
			v: [{
				b: "(" + c + "\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B\\->\\*?",
				e: "\\->\\*?"
			}, {
				b: "(" + c + "\\s*(?:=|:=)\\s*)?!?(\\(.*\\))?\\s*\\B[-~]{1,2}>\\*?",
				e: "[-~]{1,2}>\\*?"
			}, {
				b: "(" + c + "\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B!?[-~]{1,2}>\\*?",
				e: "!?[-~]{1,2}>\\*?"
			}]
		}, {
			cN: "class",
			bK: "class",
			e: "$",
			i: /[:="\[\]]/,
			c: [{
				bK: "extends",
				eW: !0,
				i: /[:="\[\]]/,
				c: [d]
			}, d]
		}, {
			b: c + ":",
			e: ":",
			rB: !0,
			rE: !0,
			r: 0
		}])
	}
}), hljs.registerLanguage("dns", function(a) {
	return {
		aliases: ["bind", "zone"],
		k: {
			keyword: "IN A AAAA AFSDB APL CAA CDNSKEY CDS CERT CNAME DHCID DLV DNAME DNSKEY DS HIP IPSECKEY KEY KX LOC MX NAPTR NS NSEC NSEC3 NSEC3PARAM PTR RRSIG RP SIG SOA SRV SSHFP TA TKEY TLSA TSIG TXT"
		},
		c: [a.C(";", "$", {
			r: 0
		}), {
			cN: "meta",
			b: /^\$(TTL|GENERATE|INCLUDE|ORIGIN)\b/
		}, {
			cN: "number",
			b: "((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))\\b"
		}, {
			cN: "number",
			b: "((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b"
		}, a.inherit(a.NM, {
			b: /\b\d+[dhwm]?/
		})]
	}
}), hljs.registerLanguage("gauss", function(a) {
	var b = {
			keyword: "and bool break call callexe checkinterrupt clear clearg closeall cls comlog compile continue create debug declare delete disable dlibrary dllcall do dos ed edit else elseif enable end endfor endif endp endo errorlog errorlogat expr external fn for format goto gosub graph if keyword let lib library line load loadarray loadexe loadf loadk loadm loadp loads loadx local locate loopnextindex lprint lpwidth lshow matrix msym ndpclex new not open or output outwidth plot plotsym pop prcsn print printdos proc push retp return rndcon rndmod rndmult rndseed run save saveall screen scroll setarray show sparse stop string struct system trace trap threadfor threadendfor threadbegin threadjoin threadstat threadend until use while winprint",
			built_in: "abs acf aconcat aeye amax amean AmericanBinomCall AmericanBinomCall_Greeks AmericanBinomCall_ImpVol AmericanBinomPut AmericanBinomPut_Greeks AmericanBinomPut_ImpVol AmericanBSCall AmericanBSCall_Greeks AmericanBSCall_ImpVol AmericanBSPut AmericanBSPut_Greeks AmericanBSPut_ImpVol amin amult annotationGetDefaults annotationSetBkd annotationSetFont annotationSetLineColor annotationSetLineStyle annotationSetLineThickness annualTradingDays arccos arcsin areshape arrayalloc arrayindex arrayinit arraytomat asciiload asclabel astd astds asum atan atan2 atranspose axmargin balance band bandchol bandcholsol bandltsol bandrv bandsolpd bar base10 begwind besselj bessely beta box boxcox cdfBeta cdfBetaInv cdfBinomial cdfBinomialInv cdfBvn cdfBvn2 cdfBvn2e cdfCauchy cdfCauchyInv cdfChic cdfChii cdfChinc cdfChincInv cdfExp cdfExpInv cdfFc cdfFnc cdfFncInv cdfGam cdfGenPareto cdfHyperGeo cdfLaplace cdfLaplaceInv cdfLogistic cdfLogisticInv cdfmControlCreate cdfMvn cdfMvn2e cdfMvnce cdfMvne cdfMvt2e cdfMvtce cdfMvte cdfN cdfN2 cdfNc cdfNegBinomial cdfNegBinomialInv cdfNi cdfPoisson cdfPoissonInv cdfRayleigh cdfRayleighInv cdfTc cdfTci cdfTnc cdfTvn cdfWeibull cdfWeibullInv cdir ceil ChangeDir chdir chiBarSquare chol choldn cholsol cholup chrs close code cols colsf combinate combinated complex con cond conj cons ConScore contour conv convertsatostr convertstrtosa corrm corrms corrvc corrx corrxs cos cosh counts countwts crossprd crout croutp csrcol csrlin csvReadM csvReadSA cumprodc cumsumc curve cvtos datacreate datacreatecomplex datalist dataload dataloop dataopen datasave date datestr datestring datestrymd dayinyr dayofweek dbAddDatabase dbClose dbCommit dbCreateQuery dbExecQuery dbGetConnectOptions dbGetDatabaseName dbGetDriverName dbGetDrivers dbGetHostName dbGetLastErrorNum dbGetLastErrorText dbGetNumericalPrecPolicy dbGetPassword dbGetPort dbGetTableHeaders dbGetTables dbGetUserName dbHasFeature dbIsDriverAvailable dbIsOpen dbIsOpenError dbOpen dbQueryBindValue dbQueryClear dbQueryCols dbQueryExecPrepared dbQueryFetchAllM dbQueryFetchAllSA dbQueryFetchOneM dbQueryFetchOneSA dbQueryFinish dbQueryGetBoundValue dbQueryGetBoundValues dbQueryGetField dbQueryGetLastErrorNum dbQueryGetLastErrorText dbQueryGetLastInsertID dbQueryGetLastQuery dbQueryGetPosition dbQueryIsActive dbQueryIsForwardOnly dbQueryIsNull dbQueryIsSelect dbQueryIsValid dbQueryPrepare dbQueryRows dbQuerySeek dbQuerySeekFirst dbQuerySeekLast dbQuerySeekNext dbQuerySeekPrevious dbQuerySetForwardOnly dbRemoveDatabase dbRollback dbSetConnectOptions dbSetDatabaseName dbSetHostName dbSetNumericalPrecPolicy dbSetPort dbSetUserName dbTransaction DeleteFile delif delrows denseToSp denseToSpRE denToZero design det detl dfft dffti diag diagrv digamma doswin DOSWinCloseall DOSWinOpen dotfeq dotfeqmt dotfge dotfgemt dotfgt dotfgtmt dotfle dotflemt dotflt dotfltmt dotfne dotfnemt draw drop dsCreate dstat dstatmt dstatmtControlCreate dtdate dtday dttime dttodtv dttostr dttoutc dtvnormal dtvtodt dtvtoutc dummy dummybr dummydn eig eigh eighv eigv elapsedTradingDays endwind envget eof eqSolve eqSolvemt eqSolvemtControlCreate eqSolvemtOutCreate eqSolveset erf erfc erfccplx erfcplx error etdays ethsec etstr EuropeanBinomCall EuropeanBinomCall_Greeks EuropeanBinomCall_ImpVol EuropeanBinomPut EuropeanBinomPut_Greeks EuropeanBinomPut_ImpVol EuropeanBSCall EuropeanBSCall_Greeks EuropeanBSCall_ImpVol EuropeanBSPut EuropeanBSPut_Greeks EuropeanBSPut_ImpVol exctsmpl exec execbg exp extern eye fcheckerr fclearerr feq feqmt fflush fft ffti fftm fftmi fftn fge fgemt fgets fgetsa fgetsat fgetst fgt fgtmt fileinfo filesa fle flemt floor flt fltmt fmod fne fnemt fonts fopen formatcv formatnv fputs fputst fseek fstrerror ftell ftocv ftos ftostrC gamma gammacplx gammaii gausset gdaAppend gdaCreate gdaDStat gdaDStatMat gdaGetIndex gdaGetName gdaGetNames gdaGetOrders gdaGetType gdaGetTypes gdaGetVarInfo gdaIsCplx gdaLoad gdaPack gdaRead gdaReadByIndex gdaReadSome gdaReadSparse gdaReadStruct gdaReportVarInfo gdaSave gdaUpdate gdaUpdateAndPack gdaVars gdaWrite gdaWrite32 gdaWriteSome getarray getdims getf getGAUSShome getmatrix getmatrix4D getname getnamef getNextTradingDay getNextWeekDay getnr getorders getpath getPreviousTradingDay getPreviousWeekDay getRow getscalar3D getscalar4D getTrRow getwind glm gradcplx gradMT gradMTm gradMTT gradMTTm gradp graphprt graphset hasimag header headermt hess hessMT hessMTg hessMTgw hessMTm hessMTmw hessMTT hessMTTg hessMTTgw hessMTTm hessMTw hessp hist histf histp hsec imag indcv indexcat indices indices2 indicesf indicesfn indnv indsav indx integrate1d integrateControlCreate intgrat2 intgrat3 inthp1 inthp2 inthp3 inthp4 inthpControlCreate intquad1 intquad2 intquad3 intrleav intrleavsa intrsect intsimp inv invpd invswp iscplx iscplxf isden isinfnanmiss ismiss key keyav keyw lag lag1 lagn lapEighb lapEighi lapEighvb lapEighvi lapgEig lapgEigh lapgEighv lapgEigv lapgSchur lapgSvdcst lapgSvds lapgSvdst lapSvdcusv lapSvds lapSvdusv ldlp ldlsol linSolve listwise ln lncdfbvn lncdfbvn2 lncdfmvn lncdfn lncdfn2 lncdfnc lnfact lngammacplx lnpdfmvn lnpdfmvt lnpdfn lnpdft loadd loadstruct loadwind loess loessmt loessmtControlCreate log loglog logx logy lower lowmat lowmat1 ltrisol lu lusol machEpsilon make makevars makewind margin matalloc matinit mattoarray maxbytes maxc maxindc maxv maxvec mbesselei mbesselei0 mbesselei1 mbesseli mbesseli0 mbesseli1 meanc median mergeby mergevar minc minindc minv miss missex missrv moment momentd movingave movingaveExpwgt movingaveWgt nextindex nextn nextnevn nextwind ntos null null1 numCombinations ols olsmt olsmtControlCreate olsqr olsqr2 olsqrmt ones optn optnevn orth outtyp pacf packedToSp packr parse pause pdfCauchy pdfChi pdfExp pdfGenPareto pdfHyperGeo pdfLaplace pdfLogistic pdfn pdfPoisson pdfRayleigh pdfWeibull pi pinv pinvmt plotAddArrow plotAddBar plotAddBox plotAddHist plotAddHistF plotAddHistP plotAddPolar plotAddScatter plotAddShape plotAddTextbox plotAddTS plotAddXY plotArea plotBar plotBox plotClearLayout plotContour plotCustomLayout plotGetDefaults plotHist plotHistF plotHistP plotLayout plotLogLog plotLogX plotLogY plotOpenWindow plotPolar plotSave plotScatter plotSetAxesPen plotSetBar plotSetBarFill plotSetBarStacked plotSetBkdColor plotSetFill plotSetGrid plotSetLegend plotSetLineColor plotSetLineStyle plotSetLineSymbol plotSetLineThickness plotSetNewWindow plotSetTitle plotSetWhichYAxis plotSetXAxisShow plotSetXLabel plotSetXRange plotSetXTicInterval plotSetXTicLabel plotSetYAxisShow plotSetYLabel plotSetYRange plotSetZAxisShow plotSetZLabel plotSurface plotTS plotXY polar polychar polyeval polygamma polyint polymake polymat polymroot polymult polyroot pqgwin previousindex princomp printfm printfmt prodc psi putarray putf putvals pvCreate pvGetIndex pvGetParNames pvGetParVector pvLength pvList pvPack pvPacki pvPackm pvPackmi pvPacks pvPacksi pvPacksm pvPacksmi pvPutParVector pvTest pvUnpack QNewton QNewtonmt QNewtonmtControlCreate QNewtonmtOutCreate QNewtonSet QProg QProgmt QProgmtInCreate qqr qqre qqrep qr qre qrep qrsol qrtsol qtyr qtyre qtyrep quantile quantiled qyr qyre qyrep qz rank rankindx readr real reclassify reclassifyCuts recode recserar recsercp recserrc rerun rescale reshape rets rev rfft rffti rfftip rfftn rfftnp rfftp rndBernoulli rndBeta rndBinomial rndCauchy rndChiSquare rndCon rndCreateState rndExp rndGamma rndGeo rndGumbel rndHyperGeo rndi rndKMbeta rndKMgam rndKMi rndKMn rndKMnb rndKMp rndKMu rndKMvm rndLaplace rndLCbeta rndLCgam rndLCi rndLCn rndLCnb rndLCp rndLCu rndLCvm rndLogNorm rndMTu rndMVn rndMVt rndn rndnb rndNegBinomial rndp rndPoisson rndRayleigh rndStateSkip rndu rndvm rndWeibull rndWishart rotater round rows rowsf rref sampleData satostrC saved saveStruct savewind scale scale3d scalerr scalinfnanmiss scalmiss schtoc schur searchsourcepath seekr select selif seqa seqm setdif setdifsa setvars setvwrmode setwind shell shiftr sin singleindex sinh sleep solpd sortc sortcc sortd sorthc sorthcc sortind sortindc sortmc sortr sortrc spBiconjGradSol spChol spConjGradSol spCreate spDenseSubmat spDiagRvMat spEigv spEye spLDL spline spLU spNumNZE spOnes spreadSheetReadM spreadSheetReadSA spreadSheetWrite spScale spSubmat spToDense spTrTDense spTScalar spZeros sqpSolve sqpSolveMT sqpSolveMTControlCreate sqpSolveMTlagrangeCreate sqpSolveMToutCreate sqpSolveSet sqrt statements stdc stdsc stocv stof strcombine strindx strlen strput strrindx strsect strsplit strsplitPad strtodt strtof strtofcplx strtriml strtrimr strtrunc strtruncl strtruncpad strtruncr submat subscat substute subvec sumc sumr surface svd svd1 svd2 svdcusv svds svdusv sysstate tab tan tanh tempname threadBegin threadEnd threadEndFor threadFor threadJoin threadStat time timedt timestr timeutc title tkf2eps tkf2ps tocart todaydt toeplitz token topolar trapchk trigamma trimr trunc type typecv typef union unionsa uniqindx uniqindxsa unique uniquesa upmat upmat1 upper utctodt utctodtv utrisol vals varCovMS varCovXS varget vargetl varmall varmares varput varputl vartypef vcm vcms vcx vcxs vec vech vecr vector vget view viewxyz vlist vnamecv volume vput vread vtypecv wait waitc walkindex where window writer xlabel xlsGetSheetCount xlsGetSheetSize xlsGetSheetTypes xlsMakeRange xlsReadM xlsReadSA xlsWrite xlsWriteM xlsWriteSA xpnd xtics xy xyz ylabel ytics zeros zeta zlabel ztics",
			literal: "DB_AFTER_LAST_ROW DB_ALL_TABLES DB_BATCH_OPERATIONS DB_BEFORE_FIRST_ROW DB_BLOB DB_EVENT_NOTIFICATIONS DB_FINISH_QUERY DB_HIGH_PRECISION DB_LAST_INSERT_ID DB_LOW_PRECISION_DOUBLE DB_LOW_PRECISION_INT32 DB_LOW_PRECISION_INT64 DB_LOW_PRECISION_NUMBERS DB_MULTIPLE_RESULT_SETS DB_NAMED_PLACEHOLDERS DB_POSITIONAL_PLACEHOLDERS DB_PREPARED_QUERIES DB_QUERY_SIZE DB_SIMPLE_LOCKING DB_SYSTEM_TABLES DB_TABLES DB_TRANSACTIONS DB_UNICODE DB_VIEWS"
		},
		c = {
			cN: "meta",
			b: "#",
			e: "$",
			k: {
				"meta-keyword": "define definecs|10 undef ifdef ifndef iflight ifdllcall ifmac ifos2win ifunix else endif lineson linesoff srcfile srcline"
			},
			c: [{
				b: /\\\n/,
				r: 0
			}, {
				bK: "include",
				e: "$",
				k: {
					"meta-keyword": "include"
				},
				c: [{
					cN: "meta-string",
					b: '"',
					e: '"',
					i: "\\n"
				}]
			}, a.CLCM, a.CBCM]
		},
		d = a.UIR + "\\s*\\(?",
		e = [{
			cN: "params",
			b: /\(/,
			e: /\)/,
			k: b,
			r: 0,
			c: [a.CNM, a.CLCM, a.CBCM]
		}];
	return {
		aliases: ["gss"],
		cI: !0,
		k: b,
		i: "(\\{[%#]|[%#]\\})",
		c: [a.CNM, a.CLCM, a.CBCM, a.C("@", "@"), c, {
			cN: "string",
			b: '"',
			e: '"',
			c: [a.BE]
		}, {
			cN: "function",
			bK: "proc keyword",
			e: ";",
			eE: !0,
			k: b,
			c: [{
				b: d,
				rB: !0,
				c: [a.UTM],
				r: 0
			}, a.CNM, a.CLCM, a.CBCM, c].concat(e)
		}, {
			cN: "function",
			bK: "fn",
			e: ";",
			eE: !0,
			k: b,
			c: [{
				b: d + a.IR + "\\)?\\s*\\=\\s*",
				rB: !0,
				c: [a.UTM],
				r: 0
			}, a.CNM, a.CLCM, a.CBCM].concat(e)
		}, {
			cN: "function",
			b: "\\bexternal (proc|keyword|fn)\\s+",
			e: ";",
			eE: !0,
			k: b,
			c: [{
				b: d,
				rB: !0,
				c: [a.UTM],
				r: 0
			}, a.CLCM, a.CBCM]
		}, {
			cN: "function",
			b: "\\bexternal (matrix|string|array|sparse matrix|struct " + a.IR + ")\\s+",
			e: ";",
			eE: !0,
			k: b,
			c: [a.CLCM, a.CBCM]
		}]
	}
}), hljs.registerLanguage("aspectj", function(a) {
	var b = "false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else extends implements break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws privileged aspectOf adviceexecution proceed cflowbelow cflow initialization preinitialization staticinitialization withincode target within execution getWithinTypeName handler thisJoinPoint thisJoinPointStaticPart thisEnclosingJoinPointStaticPart declare parents warning error soft precedence thisAspectInstance",
		c = "get set args call";
	return {
		k: b,
		i: /<\/|#/,
		c: [a.C("/\\*\\*", "\\*/", {
			r: 0,
			c: [{
				b: /\w+@/,
				r: 0
			}, {
				cN: "doctag",
				b: "@[A-Za-z]+"
			}]
		}), a.CLCM, a.CBCM, a.ASM, a.QSM, {
			cN: "class",
			bK: "aspect",
			e: /[{;=]/,
			eE: !0,
			i: /[:;"\[\]]/,
			c: [{
				bK: "extends implements pertypewithin perthis pertarget percflowbelow percflow issingleton"
			}, a.UTM, {
				b: /\([^\)]*/,
				e: /[)]+/,
				k: b + " " + c,
				eE: !1
			}]
		}, {
			cN: "class",
			bK: "class interface",
			e: /[{;=]/,
			eE: !0,
			r: 0,
			k: "class interface",
			i: /[:"\[\]]/,
			c: [{
				bK: "extends implements"
			}, a.UTM]
		}, {
			bK: "pointcut after before around throwing returning",
			e: /[)]/,
			eE: !1,
			i: /["\[\]]/,
			c: [{
				b: a.UIR + "\\s*\\(",
				rB: !0,
				c: [a.UTM]
			}]
		}, {
			b: /[:]/,
			rB: !0,
			e: /[{;]/,
			r: 0,
			eE: !1,
			k: b,
			i: /["\[\]]/,
			c: [{
				b: a.UIR + "\\s*\\(",
				k: b + " " + c
			}, a.QSM]
		}, {
			bK: "new throw",
			r: 0
		}, {
			cN: "function",
			b: /\w+ +\w+(\.)?\w+\s*\([^\)]*\)\s*((throws)[\w\s,]+)?[\{;]/,
			rB: !0,
			e: /[{;=]/,
			k: b,
			eE: !0,
			c: [{
				b: a.UIR + "\\s*\\(",
				rB: !0,
				r: 0,
				c: [a.UTM]
			}, {
				cN: "params",
				b: /\(/,
				e: /\)/,
				r: 0,
				k: b,
				c: [a.ASM, a.QSM, a.CNM, a.CBCM]
			}, a.CLCM, a.CBCM]
		}, a.CNM, {
			cN: "meta",
			b: "@[A-Za-z]+"
		}]
	}
}), hljs.registerLanguage("julia", function(a) {
	var b = {
			keyword: "in abstract baremodule begin bitstype break catch ccall const continue do else elseif end export finally for function global if immutable import importall let local macro module quote return try type typealias using while",
			literal: "true false ARGS CPU_CORES C_NULL DL_LOAD_PATH DevNull ENDIAN_BOM ENV I|0 Inf Inf16 Inf32 InsertionSort JULIA_HOME LOAD_PATH MS_ASYNC MS_INVALIDATE MS_SYNC MergeSort NaN NaN16 NaN32 OS_NAME QuickSort RTLD_DEEPBIND RTLD_FIRST RTLD_GLOBAL RTLD_LAZY RTLD_LOCAL RTLD_NODELETE RTLD_NOLOAD RTLD_NOW RoundDown RoundFromZero RoundNearest RoundToZero RoundUp STDERR STDIN STDOUT VERSION WORD_SIZE catalan cglobal e|0 eu|0 eulergamma golden im nothing pi γ π φ Inf64 NaN64 RoundNearestTiesAway RoundNearestTiesUp ",
			built_in: "ANY ASCIIString AbstractArray AbstractRNG AbstractSparseArray Any ArgumentError Array Associative Base64Pipe Bidiagonal BigFloat BigInt BitArray BitMatrix BitVector Bool BoundsError Box CFILE Cchar Cdouble Cfloat Char CharString Cint Clong Clonglong ClusterManager Cmd Coff_t Colon Complex Complex128 Complex32 Complex64 Condition Cptrdiff_t Cshort Csize_t Cssize_t Cuchar Cuint Culong Culonglong Cushort Cwchar_t DArray DataType DenseArray Diagonal Dict DimensionMismatch DirectIndexString Display DivideError DomainError EOFError EachLine Enumerate ErrorException Exception Expr Factorization FileMonitor FileOffset Filter Float16 Float32 Float64 FloatRange FloatingPoint Function GetfieldNode GotoNode Hermitian IO IOBuffer IOStream IPv4 IPv6 InexactError Int Int128 Int16 Int32 Int64 Int8 IntSet Integer InterruptException IntrinsicFunction KeyError LabelNode LambdaStaticData LineNumberNode LoadError LocalProcess MIME MathConst MemoryError MersenneTwister Method MethodError MethodTable Module NTuple NewvarNode Nothing Number ObjectIdDict OrdinalRange OverflowError ParseError PollingFileWatcher ProcessExitedException ProcessGroup Ptr QuoteNode Range Range1 Ranges Rational RawFD Real Regex RegexMatch RemoteRef RepString RevString RopeString RoundingMode Set SharedArray Signed SparseMatrixCSC StackOverflowError Stat StatStruct StepRange String SubArray SubString SymTridiagonal Symbol SymbolNode Symmetric SystemError Task TextDisplay Timer TmStruct TopNode Triangular Tridiagonal Type TypeConstructor TypeError TypeName TypeVar UTF16String UTF32String UTF8String UdpSocket Uint Uint128 Uint16 Uint32 Uint64 Uint8 UndefRefError UndefVarError UniformScaling UnionType UnitRange Unsigned Vararg VersionNumber WString WeakKeyDict WeakRef Woodbury Zip AbstractChannel AbstractFloat AbstractString AssertionError Base64DecodePipe Base64EncodePipe BufferStream CapturedException CartesianIndex CartesianRange Channel Cintmax_t CompositeException Cstring Cuintmax_t Cwstring Date DateTime Dims Enum GenSym GlobalRef HTML InitError InvalidStateException Irrational LinSpace LowerTriangular NullException Nullable OutOfMemoryError Pair PartialQuickSort Pipe RandomDevice ReadOnlyMemoryError ReentrantLock Ref RemoteException SegmentationFault SerializationState SimpleVector TCPSocket Text Tuple UDPSocket UInt UInt128 UInt16 UInt32 UInt64 UInt8 UnicodeError Union UpperTriangular Val Void WorkerConfig AbstractMatrix AbstractSparseMatrix AbstractSparseVector AbstractVecOrMat AbstractVector DenseMatrix DenseVecOrMat DenseVector Matrix SharedMatrix SharedVector StridedArray StridedMatrix StridedVecOrMat StridedVector VecOrMat Vector "
		},
		c = "[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",
		d = {
			l: c,
			k: b,
			i: /<\//
		},
		e = {
			cN: "type",
			b: /::/
		},
		f = {
			cN: "type",
			b: /<:/
		},
		g = {
			cN: "number",
			b: /(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,
			r: 0
		},
		h = {
			cN: "string",
			b: /'(.|\\[xXuU][a-zA-Z0-9]+)'/
		},
		i = {
			cN: "subst",
			b: /\$\(/,
			e: /\)/,
			k: b
		},
		j = {
			cN: "variable",
			b: "\\$" + c
		},
		k = {
			cN: "string",
			c: [a.BE, i, j],
			v: [{
				b: /\w*"""/,
				e: /"""\w*/,
				r: 10
			}, {
				b: /\w*"/,
				e: /"\w*/
			}]
		},
		l = {
			cN: "string",
			c: [a.BE, i, j],
			b: "`",
			e: "`"
		},
		m = {
			cN: "meta",
			b: "@" + c
		},
		n = {
			cN: "comment",
			v: [{
				b: "#=",
				e: "=#",
				r: 10
			}, {
				b: "#",
				e: "$"
			}]
		};
	return d.c = [g, h, e, f, k, l, m, n, a.HCM], i.c = d.c, d
});