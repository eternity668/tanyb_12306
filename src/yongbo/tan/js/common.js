/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */
(function(dt, dX) {
	var dB, b7, cF = typeof dX,
	eA = dt.document,
	cu = dt.location,
	dD = dt.jQuery,
	cI = dt.$,
	cb = {},
	ep = [],
	ej = "1.9.1",
	cx = ep.concat,
	et = ep.push,
	es = ep.slice,
	ct = ep.indexOf,
	e = cb.toString,
	cB = cb.hasOwnProperty,
	cm = ej.trim,
	dI = function(b, a) {
		return new dI.fn.init(b, a, b7)
	},
	cc = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	da = /\S+/g,
	c1 = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	ec = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	dO = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	dG = /^[\],:{}\s]*$/,
	dc = /(?:^|:|,)(?:\s*\[)+/g,
	cM = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
	cd = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
	b6 = /^-ms-/,
	ch = /-([\da-z])/gi,
	dJ = function(b, a) {
		return a.toUpperCase()
	},
	dk = function(a) {
		if (eA.addEventListener || a.type === "load" || eA.readyState === "complete") {
			c4();
			dI.ready()
		}
	},
	c4 = function() {
		if (eA.addEventListener) {
			eA.removeEventListener("DOMContentLoaded", dk, false);
			dt.removeEventListener("load", dk, false)
		} else {
			eA.detachEvent("onreadystatechange", dk);
			dt.detachEvent("onload", dk)
		}
	};
	dI.fn = dI.prototype = {
		jquery: ej,
		constructor: dI,
		init: function(d, a, b) {
			var c, f;
			if (!d) {
				return this
			}
			if (typeof d === "string") {
				if (d.charAt(0) === "<" && d.charAt(d.length - 1) === ">" && d.length >= 3) {
					c = [null, d, null]
				} else {
					c = ec.exec(d)
				}
				if (c && (c[1] || !a)) {
					if (c[1]) {
						a = a instanceof dI ? a[0] : a;
						dI.merge(this, dI.parseHTML(c[1], a && a.nodeType ? a.ownerDocument || a: eA, true));
						if (dO.test(c[1]) && dI.isPlainObject(a)) {
							for (c in a) {
								if (dI.isFunction(this[c])) {
									this[c](a[c])
								} else {
									this.attr(c, a[c])
								}
							}
						}
						return this
					} else {
						f = eA.getElementById(c[2]);
						if (f && f.parentNode) {
							if (f.id !== c[2]) {
								return b.find(d)
							}
							this.length = 1;
							this[0] = f
						}
						this.context = eA;
						this.selector = d;
						return this
					}
				} else {
					if (!a || a.jquery) {
						return (a || b).find(d)
					} else {
						return this.constructor(a).find(d)
					}
				}
			} else {
				if (d.nodeType) {
					this.context = this[0] = d;
					this.length = 1;
					return this
				} else {
					if (dI.isFunction(d)) {
						return b.ready(d)
					}
				}
			}
			if (d.selector !== dX) {
				this.selector = d.selector;
				this.context = d.context
			}
			return dI.makeArray(d, this)
		},
		selector: "",
		length: 0,
		size: function() {
			return this.length
		},
		toArray: function() {
			return es.call(this)
		},
		get: function(a) {
			return a == null ? this.toArray() : (a < 0 ? this[this.length + a] : this[a])
		},
		pushStack: function(b) {
			var a = dI.merge(this.constructor(), b);
			a.prevObject = this;
			a.context = this.context;
			return a
		},
		each: function(a, b) {
			return dI.each(this, a, b)
		},
		ready: function(a) {
			dI.ready.promise().done(a);
			return this
		},
		slice: function() {
			return this.pushStack(es.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq( - 1)
		},
		eq: function(b) {
			var a = this.length,
			c = +b + (b < 0 ? a: 0);
			return this.pushStack(c >= 0 && c < a ? [this[c]] : [])
		},
		map: function(a) {
			return this.pushStack(dI.map(this,
			function(c, b) {
				return a.call(c, b, c)
			}))
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: et,
		sort: [].sort,
		splice: [].splice
	};
	dI.fn.init.prototype = dI.fn;
	dI.extend = dI.fn.extend = function() {
		var j, d, i, k, a, c, f = arguments[0] || {},
		g = 1,
		h = arguments.length,
		b = false;
		if (typeof f === "boolean") {
			b = f;
			f = arguments[1] || {};
			g = 2
		}
		if (typeof f !== "object" && !dI.isFunction(f)) {
			f = {}
		}
		if (h === g) {
			f = this; --g
		}
		for (; g < h; g++) {
			if ((a = arguments[g]) != null) {
				for (k in a) {
					j = f[k];
					i = a[k];
					if (f === i) {
						continue
					}
					if (b && i && (dI.isPlainObject(i) || (d = dI.isArray(i)))) {
						if (d) {
							d = false;
							c = j && dI.isArray(j) ? j: []
						} else {
							c = j && dI.isPlainObject(j) ? j: {}
						}
						f[k] = dI.extend(b, c, i)
					} else {
						if (i !== dX) {
							f[k] = i
						}
					}
				}
			}
		}
		return f
	};
	dI.extend({
		noConflict: function(a) {
			if (dt.$ === dI) {
				dt.$ = cI
			}
			if (a && dt.jQuery === dI) {
				dt.jQuery = dD
			}
			return dI
		},
		isReady: false,
		readyWait: 1,
		holdReady: function(a) {
			if (a) {
				dI.readyWait++
			} else {
				dI.ready(true)
			}
		},
		ready: function(a) {
			if (a === true ? --dI.readyWait: dI.isReady) {
				return
			}
			if (!eA.body) {
				return setTimeout(dI.ready)
			}
			dI.isReady = true;
			if (a !== true && --dI.readyWait > 0) {
				return
			}
			dB.resolveWith(eA, [dI]);
			if (dI.fn.trigger) {
				dI(eA).trigger("ready").off("ready")
			}
		},
		isFunction: function(a) {
			return dI.type(a) === "function"
		},
		isArray: Array.isArray ||
		function(a) {
			return dI.type(a) === "array"
		},
		isWindow: function(a) {
			return a != null && a == a.window
		},
		isNumeric: function(a) {
			return ! isNaN(parseFloat(a)) && isFinite(a)
		},
		type: function(a) {
			if (a == null) {
				return String(a)
			}
			return typeof a === "object" || typeof a === "function" ? cb[e.call(a)] || "object": typeof a
		},
		isPlainObject: function(a) {
			if (!a || dI.type(a) !== "object" || a.nodeType || dI.isWindow(a)) {
				return false
			}
			try {
				if (a.constructor && !cB.call(a, "constructor") && !cB.call(a.constructor.prototype, "isPrototypeOf")) {
					return false
				}
			} catch(b) {
				return false
			}
			var c;
			for (c in a) {}
			return c === dX || cB.call(a, c)
		},
		isEmptyObject: function(a) {
			var b;
			for (b in a) {
				return false
			}
			return true
		},
		error: function(a) {
			throw new Error(a)
		},
		parseHTML: function(f, b, a) {
			if (!f || typeof f !== "string") {
				return null
			}
			if (typeof b === "boolean") {
				a = b;
				b = false
			}
			b = b || eA;
			var c = dO.exec(f),
			d = !a && [];
			if (c) {
				return [b.createElement(c[1])]
			}
			c = dI.buildFragment([f], b, d);
			if (d) {
				dI(d).remove()
			}
			return dI.merge([], c.childNodes)
		},
		parseJSON: function(a) {
			if (dt.JSON && dt.JSON.parse) {
				return dt.JSON.parse(a)
			}
			if (a === null) {
				return a
			}
			if (typeof a === "string") {
				a = dI.trim(a);
				if (a) {
					if (dG.test(a.replace(cM, "@").replace(cd, "]").replace(dc, ""))) {
						return (new Function("return " + a))()
					}
				}
			}
			dI.error("Invalid JSON: " + a)
		},
		parseXML: function(a) {
			var c, b;
			if (!a || typeof a !== "string") {
				return null
			}
			try {
				if (dt.DOMParser) {
					b = new DOMParser();
					c = b.parseFromString(a, "text/xml")
				} else {
					c = new ActiveXObject("Microsoft.XMLDOM");
					c.async = "false";
					c.loadXML(a)
				}
			} catch(d) {
				c = dX
			}
			if (!c || !c.documentElement || c.getElementsByTagName("parsererror").length) {
				dI.error("Invalid XML: " + a)
			}
			return c
		},
		noop: function() {},
		globalEval: function(a) {
			if (a && dI.trim(a)) { (dt.execScript ||
				function(b) {
					dt["eval"].call(dt, b)
				})(a)
			}
		},
		camelCase: function(a) {
			return a.replace(b6, "ms-").replace(ch, dJ)
		},
		nodeName: function(a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		},
		each: function(g, c, f) {
			var h, b = 0,
			a = g.length,
			d = dn(g);
			if (f) {
				if (d) {
					for (; b < a; b++) {
						h = c.apply(g[b], f);
						if (h === false) {
							break
						}
					}
				} else {
					for (b in g) {
						h = c.apply(g[b], f);
						if (h === false) {
							break
						}
					}
				}
			} else {
				if (d) {
					for (; b < a; b++) {
						h = c.call(g[b], b, g[b]);
						if (h === false) {
							break
						}
					}
				} else {
					for (b in g) {
						h = c.call(g[b], b, g[b]);
						if (h === false) {
							break
						}
					}
				}
			}
			return g
		},
		trim: cm && !cm.call("\uFEFF\xA0") ?
		function(a) {
			return a == null ? "": cm.call(a)
		}: function(a) {
			return a == null ? "": (a + "").replace(c1, "")
		},
		makeArray: function(a, b) {
			var c = b || [];
			if (a != null) {
				if (dn(Object(a))) {
					dI.merge(c, typeof a === "string" ? [a] : a)
				} else {
					et.call(c, a)
				}
			}
			return c
		},
		inArray: function(a, c, b) {
			var d;
			if (c) {
				if (ct) {
					return ct.call(c, a, b)
				}
				d = c.length;
				b = b ? b < 0 ? Math.max(0, d + b) : b: 0;
				for (; b < d; b++) {
					if (b in c && c[b] === a) {
						return b
					}
				}
			}
			return - 1
		},
		merge: function(f, b) {
			var d = b.length,
			a = f.length,
			c = 0;
			if (typeof d === "number") {
				for (; c < d; c++) {
					f[a++] = b[c]
				}
			} else {
				while (b[c] !== dX) {
					f[a++] = b[c++]
				}
			}
			f.length = a;
			return f
		},
		grep: function(f, c, g) {
			var d, b = [],
			a = 0,
			h = f.length;
			g = !!g;
			for (; a < h; a++) {
				d = !!c(f[a], a);
				if (g !== d) {
					b.push(f[a])
				}
			}
			return b
		},
		map: function(b, c, h) {
			var d, i = 0,
			g = b.length,
			f = dn(b),
			a = [];
			if (f) {
				for (; i < g; i++) {
					d = c(b[i], i, h);
					if (d != null) {
						a[a.length] = d
					}
				}
			} else {
				for (i in b) {
					d = c(b[i], i, h);
					if (d != null) {
						a[a.length] = d
					}
				}
			}
			return cx.apply([], a)
		},
		guid: 1,
		proxy: function(f, a) {
			var d, b, c;
			if (typeof a === "string") {
				c = f[a];
				a = f;
				f = c
			}
			if (!dI.isFunction(f)) {
				return dX
			}
			d = es.call(arguments, 2);
			b = function() {
				return f.apply(a || this, d.concat(es.call(arguments)))
			};
			b.guid = f.guid = f.guid || dI.guid++;
			return b
		},
		access: function(j, f, c, d, i, a, b) {
			var k = 0,
			h = j.length,
			g = c == null;
			if (dI.type(c) === "object") {
				i = true;
				for (k in c) {
					dI.access(j, f, k, c[k], true, a, b)
				}
			} else {
				if (d !== dX) {
					i = true;
					if (!dI.isFunction(d)) {
						b = true
					}
					if (g) {
						if (b) {
							f.call(j, d);
							f = null
						} else {
							g = f;
							f = function(n, l, m) {
								return g.call(dI(n), m)
							}
						}
					}
					if (f) {
						for (; k < h; k++) {
							f(j[k], c, b ? d: d.call(j[k], k, f(j[k], c)))
						}
					}
				}
			}
			return i ? j: g ? f.call(j) : h ? f(j[0], c) : a
		},
		now: function() {
			return (new Date()).getTime()
		}
	});
	dI.ready.promise = function(d) {
		if (!dB) {
			dB = dI.Deferred();
			if (eA.readyState === "complete") {
				setTimeout(dI.ready)
			} else {
				if (eA.addEventListener) {
					eA.addEventListener("DOMContentLoaded", dk, false);
					dt.addEventListener("load", dk, false)
				} else {
					eA.attachEvent("onreadystatechange", dk);
					dt.attachEvent("onload", dk);
					var a = false;
					try {
						a = dt.frameElement == null && eA.documentElement
					} catch(b) {}
					if (a && a.doScroll) { (function c() {
							if (!dI.isReady) {
								try {
									a.doScroll("left")
								} catch(f) {
									return setTimeout(c, 50)
								}
								c4();
								dI.ready()
							}
						})()
					}
				}
			}
		}
		return dB.promise(d)
	};
	dI.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
	function(a, b) {
		cb["[object " + b + "]"] = b.toLowerCase()
	});
	function dn(b) {
		var c = b.length,
		a = dI.type(b);
		if (dI.isWindow(b)) {
			return false
		}
		if (b.nodeType === 1 && c) {
			return true
		}
		return a === "array" || a !== "function" && (c === 0 || typeof c === "number" && c > 0 && (c - 1) in b)
	}
	b7 = dI(eA);
	var df = {};
	function cS(a) {
		var b = df[a] = {};
		dI.each(a.match(da) || [],
		function(c, d) {
			b[d] = true
		});
		return b
	}
	dI.Callbacks = function(a) {
		a = typeof a === "string" ? (df[a] || cS(a)) : dI.extend({},
		a);
		var h, j, k, g, f, l, d = [],
		c = !a.once && [],
		i = function(m) {
			j = a.memory && m;
			k = true;
			f = l || 0;
			l = 0;
			g = d.length;
			h = true;
			for (; d && f < g; f++) {
				if (d[f].apply(m[0], m[1]) === false && a.stopOnFalse) {
					j = false;
					break
				}
			}
			h = false;
			if (d) {
				if (c) {
					if (c.length) {
						i(c.shift())
					}
				} else {
					if (j) {
						d = []
					} else {
						b.disable()
					}
				}
			}
		},
		b = {
			add: function() {
				if (d) {
					var n = d.length; (function m(o) {
						dI.each(o,
						function(q, r) {
							var p = dI.type(r);
							if (p === "function") {
								if (!a.unique || !b.has(r)) {
									d.push(r)
								}
							} else {
								if (r && r.length && p !== "string") {
									m(r)
								}
							}
						})
					})(arguments);
					if (h) {
						g = d.length
					} else {
						if (j) {
							l = n;
							i(j)
						}
					}
				}
				return this
			},
			remove: function() {
				if (d) {
					dI.each(arguments,
					function(o, n) {
						var m;
						while ((m = dI.inArray(n, d, m)) > -1) {
							d.splice(m, 1);
							if (h) {
								if (m <= g) {
									g--
								}
								if (m <= f) {
									f--
								}
							}
						}
					})
				}
				return this
			},
			has: function(m) {
				return m ? dI.inArray(m, d) > -1 : !!(d && d.length)
			},
			empty: function() {
				d = [];
				return this
			},
			disable: function() {
				d = c = j = dX;
				return this
			},
			disabled: function() {
				return ! d
			},
			lock: function() {
				c = dX;
				if (!j) {
					b.disable()
				}
				return this
			},
			locked: function() {
				return ! c
			},
			fireWith: function(n, m) {
				m = m || [];
				m = [n, m.slice ? m.slice() : m];
				if (d && (!k || c)) {
					if (h) {
						c.push(m)
					} else {
						i(m)
					}
				}
				return this
			},
			fire: function() {
				b.fireWith(this, arguments);
				return this
			},
			fired: function() {
				return !! k
			}
		};
		return b
	};
	dI.extend({
		Deferred: function(b) {
			var c = [["resolve", "done", dI.Callbacks("once memory"), "resolved"], ["reject", "fail", dI.Callbacks("once memory"), "rejected"], ["notify", "progress", dI.Callbacks("memory")]],
			a = "pending",
			f = {
				state: function() {
					return a
				},
				always: function() {
					d.done(arguments).fail(arguments);
					return this
				},
				then: function() {
					var g = arguments;
					return dI.Deferred(function(h) {
						dI.each(c,
						function(i, j) {
							var k = j[0],
							l = dI.isFunction(g[i]) && g[i];
							d[j[1]](function() {
								var m = l && l.apply(this, arguments);
								if (m && dI.isFunction(m.promise)) {
									m.promise().done(h.resolve).fail(h.reject).progress(h.notify)
								} else {
									h[k + "With"](this === f ? h.promise() : this, l ? [m] : arguments)
								}
							})
						});
						g = null
					}).promise()
				},
				promise: function(g) {
					return g != null ? dI.extend(g, f) : f
				}
			},
			d = {};
			f.pipe = f.then;
			dI.each(c,
			function(i, j) {
				var g = j[2],
				h = j[3];
				f[j[1]] = g.add;
				if (h) {
					g.add(function() {
						a = h
					},
					c[i ^ 1][2].disable, c[2][2].lock)
				}
				d[j[0]] = function() {
					d[j[0] + "With"](this === d ? f: this, arguments);
					return this
				};
				d[j[0] + "With"] = g.fireWith
			});
			f.promise(d);
			if (b) {
				b.call(d, d)
			}
			return d
		},
		when: function(g) {
			var k = 0,
			d = es.call(arguments),
			j = d.length,
			i = j !== 1 || (g && dI.isFunction(g.promise)) ? j: 0,
			a = i === 1 ? g: dI.Deferred(),
			h = function(n, m, l) {
				return function(o) {
					m[n] = this;
					l[n] = arguments.length > 1 ? es.call(arguments) : o;
					if (l === b) {
						a.notifyWith(m, l)
					} else {
						if (! (--i)) {
							a.resolveWith(m, l)
						}
					}
				}
			},
			b,
			f,
			c;
			if (j > 1) {
				b = new Array(j);
				f = new Array(j);
				c = new Array(j);
				for (; k < j; k++) {
					if (d[k] && dI.isFunction(d[k].promise)) {
						d[k].promise().done(h(k, c, d)).fail(a.reject).progress(h(k, f, b))
					} else {--i
					}
				}
			}
			if (!i) {
				a.resolveWith(c, d)
			}
			return a.promise()
		}
	});
	dI.support = (function() {
		var a, b, d, f, c, g, l, i, m, k, j = eA.createElement("div");
		j.setAttribute("className", "t");
		j.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		b = j.getElementsByTagName("*");
		d = j.getElementsByTagName("a")[0];
		if (!b || !d || !b.length) {
			return {}
		}
		c = eA.createElement("select");
		l = c.appendChild(eA.createElement("option"));
		f = j.getElementsByTagName("input")[0];
		d.style.cssText = "top:1px;float:left;opacity:.5";
		a = {
			getSetAttribute: j.className !== "t",
			leadingWhitespace: j.firstChild.nodeType === 3,
			tbody: !j.getElementsByTagName("tbody").length,
			htmlSerialize: !!j.getElementsByTagName("link").length,
			style: /top/.test(d.getAttribute("style")),
			hrefNormalized: d.getAttribute("href") === "/a",
			opacity: /^0.5/.test(d.style.opacity),
			cssFloat: !!d.style.cssFloat,
			checkOn: !!f.value,
			optSelected: l.selected,
			enctype: !!eA.createElement("form").enctype,
			html5Clone: eA.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",
			boxModel: eA.compatMode === "CSS1Compat",
			deleteExpando: true,
			noCloneEvent: true,
			inlineBlockNeedsLayout: false,
			shrinkWrapBlocks: false,
			reliableMarginRight: true,
			boxSizingReliable: true,
			pixelPosition: false
		};
		f.checked = true;
		a.noCloneChecked = f.cloneNode(true).checked;
		c.disabled = true;
		a.optDisabled = !l.disabled;
		try {
			delete j.test
		} catch(h) {
			a.deleteExpando = false
		}
		f = eA.createElement("input");
		f.setAttribute("value", "");
		a.input = f.getAttribute("value") === "";
		f.value = "t";
		f.setAttribute("type", "radio");
		a.radioValue = f.value === "t";
		f.setAttribute("checked", "t");
		f.setAttribute("name", "t");
		g = eA.createDocumentFragment();
		g.appendChild(f);
		a.appendChecked = f.checked;
		a.checkClone = g.cloneNode(true).cloneNode(true).lastChild.checked;
		if (j.attachEvent) {
			j.attachEvent("onclick",
			function() {
				a.noCloneEvent = false
			});
			j.cloneNode(true).click()
		}
		for (k in {
			submit: true,
			change: true,
			focusin: true
		}) {
			j.setAttribute(i = "on" + k, "t");
			a[k + "Bubbles"] = i in dt || j.attributes[i].expando === false
		}
		j.style.backgroundClip = "content-box";
		j.cloneNode(true).style.backgroundClip = "";
		a.clearCloneStyle = j.style.backgroundClip === "content-box";
		dI(function() {
			var q, n, o, p = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
			r = eA.getElementsByTagName("body")[0];
			if (!r) {
				return
			}
			q = eA.createElement("div");
			q.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
			r.appendChild(q).appendChild(j);
			j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			o = j.getElementsByTagName("td");
			o[0].style.cssText = "padding:0;margin:0;border:0;display:none";
			m = (o[0].offsetHeight === 0);
			o[0].style.display = "";
			o[1].style.display = "none";
			a.reliableHiddenOffsets = m && (o[0].offsetHeight === 0);
			j.innerHTML = "";
			j.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
			a.boxSizing = (j.offsetWidth === 4);
			a.doesNotIncludeMarginInBodyOffset = (r.offsetTop !== 1);
			if (dt.getComputedStyle) {
				a.pixelPosition = (dt.getComputedStyle(j, null) || {}).top !== "1%";
				a.boxSizingReliable = (dt.getComputedStyle(j, null) || {
					width: "4px"
				}).width === "4px";
				n = j.appendChild(eA.createElement("div"));
				n.style.cssText = j.style.cssText = p;
				n.style.marginRight = n.style.width = "0";
				j.style.width = "1px";
				a.reliableMarginRight = !parseFloat((dt.getComputedStyle(n, null) || {}).marginRight)
			}
			if (typeof j.style.zoom !== cF) {
				j.innerHTML = "";
				j.style.cssText = p + "width:1px;padding:1px;display:inline;zoom:1";
				a.inlineBlockNeedsLayout = (j.offsetWidth === 3);
				j.style.display = "block";
				j.innerHTML = "<div></div>";
				j.firstChild.style.width = "5px";
				a.shrinkWrapBlocks = (j.offsetWidth !== 3);
				if (a.inlineBlockNeedsLayout) {
					r.style.zoom = 1
				}
			}
			r.removeChild(q);
			q = j = o = n = null
		});
		b = c = g = l = d = f = null;
		return a
	})();
	var dW = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	cs = /([A-Z])/g;
	function cU(k, j, g, h) {
		if (!dI.acceptData(k)) {
			return
		}
		var f, c, b = dI.expando,
		d = typeof j === "string",
		a = k.nodeType,
		i = a ? dI.cache: k,
		l = a ? k[b] : k[b] && b;
		if ((!l || !i[l] || (!h && !i[l].data)) && d && g === dX) {
			return
		}
		if (!l) {
			if (a) {
				k[b] = l = ep.pop() || dI.guid++
			} else {
				l = b
			}
		}
		if (!i[l]) {
			i[l] = {};
			if (!a) {
				i[l].toJSON = dI.noop
			}
		}
		if (typeof j === "object" || typeof j === "function") {
			if (h) {
				i[l] = dI.extend(i[l], j)
			} else {
				i[l].data = dI.extend(i[l].data, j)
			}
		}
		f = i[l];
		if (!h) {
			if (!f.data) {
				f.data = {}
			}
			f = f.data
		}
		if (g !== dX) {
			f[dI.camelCase(j)] = g
		}
		if (d) {
			c = f[j];
			if (c == null) {
				c = f[dI.camelCase(j)]
			}
		} else {
			c = f
		}
		return c
	}
	function d3(g, h, f) {
		if (!dI.acceptData(g)) {
			return
		}
		var c, d, b, a = g.nodeType,
		i = a ? dI.cache: g,
		j = a ? g[dI.expando] : dI.expando;
		if (!i[j]) {
			return
		}
		if (h) {
			b = f ? i[j] : i[j].data;
			if (b) {
				if (!dI.isArray(h)) {
					if (h in b) {
						h = [h]
					} else {
						h = dI.camelCase(h);
						if (h in b) {
							h = [h]
						} else {
							h = h.split(" ")
						}
					}
				} else {
					h = h.concat(dI.map(h, dI.camelCase))
				}
				for (c = 0, d = h.length; c < d; c++) {
					delete b[h[c]]
				}
				if (! (f ? dF: dI.isEmptyObject)(b)) {
					return
				}
			}
		}
		if (!f) {
			delete i[j].data;
			if (!dF(i[j])) {
				return
			}
		}
		if (a) {
			dI.cleanData([g], true)
		} else {
			if (dI.support.deleteExpando || i != i.window) {
				delete i[j]
			} else {
				i[j] = null
			}
		}
	}
	dI.extend({
		cache: {},
		expando: "jQuery" + (ej + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: true,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: true
		},
		hasData: function(a) {
			a = a.nodeType ? dI.cache[a[dI.expando]] : a[dI.expando];
			return !! a && !dF(a)
		},
		data: function(c, a, b) {
			return cU(c, a, b)
		},
		removeData: function(a, b) {
			return d3(a, b)
		},
		_data: function(c, a, b) {
			return cU(c, a, b, true)
		},
		_removeData: function(a, b) {
			return d3(a, b, true)
		},
		acceptData: function(a) {
			if (a.nodeType && a.nodeType !== 1 && a.nodeType !== 9) {
				return false
			}
			var b = a.nodeName && dI.noData[a.nodeName.toLowerCase()];
			return ! b || b !== true && a.getAttribute("classid") === b
		}
	});
	dI.fn.extend({
		data: function(a, c) {
			var f, g, h = this[0],
			b = 0,
			d = null;
			if (a === dX) {
				if (this.length) {
					d = dI.data(h);
					if (h.nodeType === 1 && !dI._data(h, "parsedAttrs")) {
						f = h.attributes;
						for (; b < f.length; b++) {
							g = f[b].name;
							if (!g.indexOf("data-")) {
								g = dI.camelCase(g.slice(5));
								dS(h, g, d[g])
							}
						}
						dI._data(h, "parsedAttrs", true)
					}
				}
				return d
			}
			if (typeof a === "object") {
				return this.each(function() {
					dI.data(this, a)
				})
			}
			return dI.access(this,
			function(i) {
				if (i === dX) {
					return h ? dS(h, a, dI.data(h, a)) : null
				}
				this.each(function() {
					dI.data(this, a, i)
				})
			},
			null, c, arguments.length > 1, null, true)
		},
		removeData: function(a) {
			return this.each(function() {
				dI.removeData(this, a)
			})
		}
	});
	function dS(a, b, f) {
		if (f === dX && a.nodeType === 1) {
			var c = "data-" + b.replace(cs, "-$1").toLowerCase();
			f = a.getAttribute(c);
			if (typeof f === "string") {
				try {
					f = f === "true" ? true: f === "false" ? false: f === "null" ? null: +f + "" === f ? +f: dW.test(f) ? dI.parseJSON(f) : f
				} catch(d) {}
				dI.data(a, b, f)
			} else {
				f = dX
			}
		}
		return f
	}
	function dF(a) {
		var b;
		for (b in a) {
			if (b === "data" && dI.isEmptyObject(a[b])) {
				continue
			}
			if (b !== "toJSON") {
				return false
			}
		}
		return true
	}
	dI.extend({
		queue: function(b, c, a) {
			var d;
			if (b) {
				c = (c || "fx") + "queue";
				d = dI._data(b, c);
				if (a) {
					if (!d || dI.isArray(a)) {
						d = dI._data(b, c, dI.makeArray(a))
					} else {
						d.push(a)
					}
				}
				return d || []
			}
		},
		dequeue: function(g, h) {
			h = h || "fx";
			var f = dI.queue(g, h),
			c = f.length,
			a = f.shift(),
			d = dI._queueHooks(g, h),
			b = function() {
				dI.dequeue(g, h)
			};
			if (a === "inprogress") {
				a = f.shift();
				c--
			}
			d.cur = a;
			if (a) {
				if (h === "fx") {
					f.unshift("inprogress")
				}
				delete d.stop;
				a.call(g, b, d)
			}
			if (!c && d) {
				d.empty.fire()
			}
		},
		_queueHooks: function(b, c) {
			var a = c + "queueHooks";
			return dI._data(b, a) || dI._data(b, a, {
				empty: dI.Callbacks("once memory").add(function() {
					dI._removeData(b, c + "queue");
					dI._removeData(b, a)
				})
			})
		}
	});
	dI.fn.extend({
		queue: function(a, c) {
			var b = 2;
			if (typeof a !== "string") {
				c = a;
				a = "fx";
				b--
			}
			if (arguments.length < b) {
				return dI.queue(this[0], a)
			}
			return c === dX ? this: this.each(function() {
				var d = dI.queue(this, a, c);
				dI._queueHooks(this, a);
				if (a === "fx" && d[0] !== "inprogress") {
					dI.dequeue(this, a)
				}
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				dI.dequeue(this, a)
			})
		},
		delay: function(a, b) {
			a = dI.fx ? dI.fx.speeds[a] || a: a;
			b = b || "fx";
			return this.queue(b,
			function(c, d) {
				var f = setTimeout(c, a);
				d.stop = function() {
					clearTimeout(f)
				}
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		},
		promise: function(b, d) {
			var g, a = 1,
			c = dI.Deferred(),
			h = this,
			f = this.length,
			i = function() {
				if (! (--a)) {
					c.resolveWith(h, [h])
				}
			};
			if (typeof b !== "string") {
				d = b;
				b = dX
			}
			b = b || "fx";
			while (f--) {
				g = dI._data(h[f], b + "queueHooks");
				if (g && g.empty) {
					a++;
					g.empty.add(i)
				}
			}
			i();
			return c.promise(d)
		}
	});
	var di, db, eD = /[\t\r\n]/g,
	eH = /\r/g,
	d1 = /^(?:input|select|textarea|button|object)$/i,
	cZ = /^(?:a|area)$/i,
	dN = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
	ei = /^(?:checked|selected)$/i,
	eo = dI.support.getSetAttribute,
	cQ = dI.support.input;
	dI.fn.extend({
		attr: function(b, a) {
			return dI.access(this, dI.attr, b, a, arguments.length > 1)
		},
		removeAttr: function(a) {
			return this.each(function() {
				dI.removeAttr(this, a)
			})
		},
		prop: function(b, a) {
			return dI.access(this, dI.prop, b, a, arguments.length > 1)
		},
		removeProp: function(a) {
			a = dI.propFix[a] || a;
			return this.each(function() {
				try {
					this[a] = dX;
					delete this[a]
				} catch(b) {}
			})
		},
		addClass: function(b) {
			var h, i, a, f, j, g = 0,
			d = this.length,
			c = typeof b === "string" && b;
			if (dI.isFunction(b)) {
				return this.each(function(k) {
					dI(this).addClass(b.call(this, k, this.className))
				})
			}
			if (c) {
				h = (b || "").match(da) || [];
				for (; g < d; g++) {
					i = this[g];
					a = i.nodeType === 1 && (i.className ? (" " + i.className + " ").replace(eD, " ") : " ");
					if (a) {
						j = 0;
						while ((f = h[j++])) {
							if (a.indexOf(" " + f + " ") < 0) {
								a += f + " "
							}
						}
						i.className = dI.trim(a)
					}
				}
			}
			return this
		},
		removeClass: function(b) {
			var h, i, a, f, j, g = 0,
			d = this.length,
			c = arguments.length === 0 || typeof b === "string" && b;
			if (dI.isFunction(b)) {
				return this.each(function(k) {
					dI(this).removeClass(b.call(this, k, this.className))
				})
			}
			if (c) {
				h = (b || "").match(da) || [];
				for (; g < d; g++) {
					i = this[g];
					a = i.nodeType === 1 && (i.className ? (" " + i.className + " ").replace(eD, " ") : "");
					if (a) {
						j = 0;
						while ((f = h[j++])) {
							while (a.indexOf(" " + f + " ") >= 0) {
								a = a.replace(" " + f + " ", " ")
							}
						}
						i.className = b ? dI.trim(a) : ""
					}
				}
			}
			return this
		},
		toggleClass: function(a, c) {
			var b = typeof a,
			d = typeof c === "boolean";
			if (dI.isFunction(a)) {
				return this.each(function(f) {
					dI(this).toggleClass(a.call(this, f, this.className, c), c)
				})
			}
			return this.each(function() {
				if (b === "string") {
					var h, i = 0,
					j = dI(this),
					g = c,
					f = a.match(da) || [];
					while ((h = f[i++])) {
						g = d ? g: !j.hasClass(h);
						j[g ? "addClass": "removeClass"](h)
					}
				} else {
					if (b === cF || b === "boolean") {
						if (this.className) {
							dI._data(this, "__className__", this.className)
						}
						this.className = this.className || a === false ? "": dI._data(this, "__className__") || ""
					}
				}
			})
		},
		hasClass: function(d) {
			var a = " " + d + " ",
			b = 0,
			c = this.length;
			for (; b < c; b++) {
				if (this[b].nodeType === 1 && (" " + this[b].className + " ").replace(eD, " ").indexOf(a) >= 0) {
					return true
				}
			}
			return false
		},
		val: function(a) {
			var c, d, f, b = this[0];
			if (!arguments.length) {
				if (b) {
					d = dI.valHooks[b.type] || dI.valHooks[b.nodeName.toLowerCase()];
					if (d && "get" in d && (c = d.get(b, "value")) !== dX) {
						return c
					}
					c = b.value;
					return typeof c === "string" ? c.replace(eH, "") : c == null ? "": c
				}
				return
			}
			f = dI.isFunction(a);
			return this.each(function(h) {
				var g, i = dI(this);
				if (this.nodeType !== 1) {
					return
				}
				if (f) {
					g = a.call(this, h, i.val())
				} else {
					g = a
				}
				if (g == null) {
					g = ""
				} else {
					if (typeof g === "number") {
						g += ""
					} else {
						if (dI.isArray(g)) {
							g = dI.map(g,
							function(j) {
								return j == null ? "": j + ""
							})
						}
					}
				}
				d = dI.valHooks[this.type] || dI.valHooks[this.nodeName.toLowerCase()];
				if (!d || !("set" in d) || d.set(this, g, "value") === dX) {
					this.value = g
				}
			})
		}
	});
	dI.extend({
		valHooks: {
			option: {
				get: function(b) {
					var a = b.attributes.value;
					return ! a || a.specified ? b.value: b.text
				}
			},
			select: {
				get: function(i) {
					var c, j, a = i.options,
					f = i.selectedIndex,
					h = i.type === "select-one" || f < 0,
					b = h ? null: [],
					d = h ? f + 1 : a.length,
					g = f < 0 ? d: h ? f: 0;
					for (; g < d; g++) {
						j = a[g];
						if ((j.selected || g === f) && (dI.support.optDisabled ? !j.disabled: j.getAttribute("disabled") === null) && (!j.parentNode.disabled || !dI.nodeName(j.parentNode, "optgroup"))) {
							c = dI(j).val();
							if (h) {
								return c
							}
							b.push(c)
						}
					}
					return b
				},
				set: function(c, b) {
					var a = dI.makeArray(b);
					dI(c).find("option").each(function() {
						this.selected = dI.inArray(dI(this).val(), a) >= 0
					});
					if (!a.length) {
						c.selectedIndex = -1
					}
					return a
				}
			}
		},
		attr: function(g, a, c) {
			var f, h, b, d = g.nodeType;
			if (!g || d === 3 || d === 8 || d === 2) {
				return
			}
			if (typeof g.getAttribute === cF) {
				return dI.prop(g, a, c)
			}
			h = d !== 1 || !dI.isXMLDoc(g);
			if (h) {
				a = a.toLowerCase();
				f = dI.attrHooks[a] || (dN.test(a) ? db: di)
			}
			if (c !== dX) {
				if (c === null) {
					dI.removeAttr(g, a)
				} else {
					if (f && h && "set" in f && (b = f.set(g, c, a)) !== dX) {
						return b
					} else {
						g.setAttribute(a, c + "");
						return c
					}
				}
			} else {
				if (f && h && "get" in f && (b = f.get(g, a)) !== null) {
					return b
				} else {
					if (typeof g.getAttribute !== cF) {
						b = g.getAttribute(a)
					}
					return b == null ? dX: b
				}
			}
		},
		removeAttr: function(b, g) {
			var f, a, d = 0,
			c = g && g.match(da);
			if (c && b.nodeType === 1) {
				while ((f = c[d++])) {
					a = dI.propFix[f] || f;
					if (dN.test(f)) {
						if (!eo && ei.test(f)) {
							b[dI.camelCase("default-" + f)] = b[a] = false
						} else {
							b[a] = false
						}
					} else {
						dI.attr(b, f, "")
					}
					b.removeAttribute(eo ? f: a)
				}
			}
		},
		attrHooks: {
			type: {
				set: function(a, c) {
					if (!dI.support.radioValue && c === "radio" && dI.nodeName(a, "input")) {
						var b = a.value;
						a.setAttribute("type", c);
						if (b) {
							a.value = b
						}
						return c
					}
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(g, a, c) {
			var b, f, h, d = g.nodeType;
			if (!g || d === 3 || d === 8 || d === 2) {
				return
			}
			h = d !== 1 || !dI.isXMLDoc(g);
			if (h) {
				a = dI.propFix[a] || a;
				f = dI.propHooks[a]
			}
			if (c !== dX) {
				if (f && "set" in f && (b = f.set(g, c, a)) !== dX) {
					return b
				} else {
					return (g[a] = c)
				}
			} else {
				if (f && "get" in f && (b = f.get(g, a)) !== null) {
					return b
				} else {
					return g[a]
				}
			}
		},
		propHooks: {
			tabIndex: {
				get: function(a) {
					var b = a.getAttributeNode("tabindex");
					return b && b.specified ? parseInt(b.value, 10) : d1.test(a.nodeName) || cZ.test(a.nodeName) && a.href ? 0 : dX
				}
			}
		}
	});
	db = {
		get: function(a, c) {
			var f = dI.prop(a, c),
			d = typeof f === "boolean" && a.getAttribute(c),
			b = typeof f === "boolean" ? cQ && eo ? d != null: ei.test(c) ? a[dI.camelCase("default-" + c)] : !!d: a.getAttributeNode(c);
			return b && b.value !== false ? c.toLowerCase() : dX
		},
		set: function(c, b, a) {
			if (b === false) {
				dI.removeAttr(c, a)
			} else {
				if (cQ && eo || !ei.test(a)) {
					c.setAttribute(!eo && dI.propFix[a] || a, a)
				} else {
					c[dI.camelCase("default-" + a)] = c[a] = true
				}
			}
			return a
		}
	};
	if (!cQ || !eo) {
		dI.attrHooks.value = {
			get: function(b, c) {
				var a = b.getAttributeNode(c);
				return dI.nodeName(b, "input") ? b.defaultValue: a && a.specified ? a.value: dX
			},
			set: function(c, b, a) {
				if (dI.nodeName(c, "input")) {
					c.defaultValue = b
				} else {
					return di && di.set(c, b, a)
				}
			}
		}
	}
	if (!eo) {
		di = dI.valHooks.button = {
			get: function(b, c) {
				var a = b.getAttributeNode(c);
				return a && (c === "id" || c === "name" || c === "coords" ? a.value !== "": a.specified) ? a.value: dX
			},
			set: function(b, a, c) {
				var d = b.getAttributeNode(c);
				if (!d) {
					b.setAttributeNode((d = b.ownerDocument.createAttribute(c)))
				}
				d.value = a += "";
				return c === "value" || a === b.getAttribute(c) ? a: dX
			}
		};
		dI.attrHooks.contenteditable = {
			get: di.get,
			set: function(c, b, a) {
				di.set(c, b === "" ? false: b, a)
			}
		};
		dI.each(["width", "height"],
		function(a, b) {
			dI.attrHooks[b] = dI.extend(dI.attrHooks[b], {
				set: function(d, c) {
					if (c === "") {
						d.setAttribute(b, "auto");
						return c
					}
				}
			})
		})
	}
	if (!dI.support.hrefNormalized) {
		dI.each(["href", "src", "width", "height"],
		function(a, b) {
			dI.attrHooks[b] = dI.extend(dI.attrHooks[b], {
				get: function(c) {
					var d = c.getAttribute(b, 2);
					return d == null ? dX: d
				}
			})
		});
		dI.each(["href", "src"],
		function(a, b) {
			dI.propHooks[b] = {
				get: function(c) {
					return c.getAttribute(b, 4)
				}
			}
		})
	}
	if (!dI.support.style) {
		dI.attrHooks.style = {
			get: function(a) {
				return a.style.cssText || dX
			},
			set: function(b, a) {
				return (b.style.cssText = a + "")
			}
		}
	}
	if (!dI.support.optSelected) {
		dI.propHooks.selected = dI.extend(dI.propHooks.selected, {
			get: function(a) {
				var b = a.parentNode;
				if (b) {
					b.selectedIndex;
					if (b.parentNode) {
						b.parentNode.selectedIndex
					}
				}
				return null
			}
		})
	}
	if (!dI.support.enctype) {
		dI.propFix.enctype = "encoding"
	}
	if (!dI.support.checkOn) {
		dI.each(["radio", "checkbox"],
		function() {
			dI.valHooks[this] = {
				get: function(a) {
					return a.getAttribute("value") === null ? "on": a.value
				}
			}
		})
	}
	dI.each(["radio", "checkbox"],
	function() {
		dI.valHooks[this] = dI.extend(dI.valHooks[this], {
			set: function(b, a) {
				if (dI.isArray(a)) {
					return (b.checked = dI.inArray(dI(b).val(), a) >= 0)
				}
			}
		})
	});
	var cC = /^(?:input|select|textarea)$/i,
	ds = /^key/,
	eB = /^(?:mouse|contextmenu)|click/,
	ca = /^(?:focusinfocus|focusoutblur)$/,
	d0 = /^([^.]*)(?:\.(.+)|)$/;
	function c2() {
		return true
	}
	function ea() {
		return false
	}
	dI.event = {
		global: {},
		add: function(l, g, a, j, k) {
			var i, r, o, p, d, h, b, n, c, m, q, f = dI._data(l);
			if (!f) {
				return
			}
			if (a.handler) {
				p = a;
				a = p.handler;
				k = p.selector
			}
			if (!a.guid) {
				a.guid = dI.guid++
			}
			if (! (r = f.events)) {
				r = f.events = {}
			}
			if (! (h = f.handle)) {
				h = f.handle = function(s) {
					return typeof dI !== cF && (!s || dI.event.triggered !== s.type) ? dI.event.dispatch.apply(h.elem, arguments) : dX
				};
				h.elem = l
			}
			g = (g || "").match(da) || [""];
			o = g.length;
			while (o--) {
				i = d0.exec(g[o]) || [];
				c = q = i[1];
				m = (i[2] || "").split(".").sort();
				d = dI.event.special[c] || {};
				c = (k ? d.delegateType: d.bindType) || c;
				d = dI.event.special[c] || {};
				b = dI.extend({
					type: c,
					origType: q,
					data: j,
					handler: a,
					guid: a.guid,
					selector: k,
					needsContext: k && dI.expr.match.needsContext.test(k),
					namespace: m.join(".")
				},
				p);
				if (! (n = r[c])) {
					n = r[c] = [];
					n.delegateCount = 0;
					if (!d.setup || d.setup.call(l, j, m, h) === false) {
						if (l.addEventListener) {
							l.addEventListener(c, h, false)
						} else {
							if (l.attachEvent) {
								l.attachEvent("on" + c, h)
							}
						}
					}
				}
				if (d.add) {
					d.add.call(l, b);
					if (!b.handler.guid) {
						b.handler.guid = a.guid
					}
				}
				if (k) {
					n.splice(n.delegateCount++, 0, b)
				} else {
					n.push(b)
				}
				dI.event.global[c] = true
			}
			l = null
		},
		remove: function(n, g, o, l, h) {
			var j, b, i, k, r, a, d, p, c, m, q, f = dI.hasData(n) && dI._data(n);
			if (!f || !(a = f.events)) {
				return
			}
			g = (g || "").match(da) || [""];
			r = g.length;
			while (r--) {
				i = d0.exec(g[r]) || [];
				c = q = i[1];
				m = (i[2] || "").split(".").sort();
				if (!c) {
					for (c in a) {
						dI.event.remove(n, c + g[r], o, l, true)
					}
					continue
				}
				d = dI.event.special[c] || {};
				c = (l ? d.delegateType: d.bindType) || c;
				p = a[c] || [];
				i = i[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)");
				k = j = p.length;
				while (j--) {
					b = p[j];
					if ((h || q === b.origType) && (!o || o.guid === b.guid) && (!i || i.test(b.namespace)) && (!l || l === b.selector || l === "**" && b.selector)) {
						p.splice(j, 1);
						if (b.selector) {
							p.delegateCount--
						}
						if (d.remove) {
							d.remove.call(n, b)
						}
					}
				}
				if (k && !p.length) {
					if (!d.teardown || d.teardown.call(n, m, f.handle) === false) {
						dI.removeEvent(n, c, f.handle)
					}
					delete a[c]
				}
			}
			if (dI.isEmptyObject(a)) {
				delete f.handle;
				dI._removeData(n, "events")
			}
		},
		trigger: function(n, i, m, a) {
			var h, o, c, b, f, j, k, l = [m || eA],
			d = cB.call(n, "type") ? n.type: n,
			p = cB.call(n, "namespace") ? n.namespace.split(".") : [];
			c = j = m = m || eA;
			if (m.nodeType === 3 || m.nodeType === 8) {
				return
			}
			if (ca.test(d + dI.event.triggered)) {
				return
			}
			if (d.indexOf(".") >= 0) {
				p = d.split(".");
				d = p.shift();
				p.sort()
			}
			o = d.indexOf(":") < 0 && "on" + d;
			n = n[dI.expando] ? n: new dI.Event(d, typeof n === "object" && n);
			n.isTrigger = true;
			n.namespace = p.join(".");
			n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
			n.result = dX;
			if (!n.target) {
				n.target = m
			}
			i = i == null ? [n] : dI.makeArray(i, [n]);
			f = dI.event.special[d] || {};
			if (!a && f.trigger && f.trigger.apply(m, i) === false) {
				return
			}
			if (!a && !f.noBubble && !dI.isWindow(m)) {
				b = f.delegateType || d;
				if (!ca.test(b + d)) {
					c = c.parentNode
				}
				for (; c; c = c.parentNode) {
					l.push(c);
					j = c
				}
				if (j === (m.ownerDocument || eA)) {
					l.push(j.defaultView || j.parentWindow || dt)
				}
			}
			k = 0;
			while ((c = l[k++]) && !n.isPropagationStopped()) {
				n.type = k > 1 ? b: f.bindType || d;
				h = (dI._data(c, "events") || {})[n.type] && dI._data(c, "handle");
				if (h) {
					h.apply(c, i)
				}
				h = o && c[o];
				if (h && dI.acceptData(c) && h.apply && h.apply(c, i) === false) {
					n.preventDefault()
				}
			}
			n.type = d;
			if (!a && !n.isDefaultPrevented()) {
				if ((!f._default || f._default.apply(m.ownerDocument, i) === false) && !(d === "click" && dI.nodeName(m, "a")) && dI.acceptData(m)) {
					if (o && m[d] && !dI.isWindow(m)) {
						j = m[o];
						if (j) {
							m[o] = null
						}
						dI.event.triggered = d;
						try {
							m[d]()
						} catch(g) {}
						dI.event.triggered = dX;
						if (j) {
							m[o] = j
						}
					}
				}
			}
			return n.result
		},
		dispatch: function(j) {
			j = dI.event.fix(j);
			var g, f, a, i, h, b = [],
			c = es.call(arguments),
			k = (dI._data(this, "events") || {})[j.type] || [],
			d = dI.event.special[j.type] || {};
			c[0] = j;
			j.delegateTarget = this;
			if (d.preDispatch && d.preDispatch.call(this, j) === false) {
				return
			}
			b = dI.event.handlers.call(this, j, k);
			g = 0;
			while ((i = b[g++]) && !j.isPropagationStopped()) {
				j.currentTarget = i.elem;
				h = 0;
				while ((a = i.handlers[h++]) && !j.isImmediatePropagationStopped()) {
					if (!j.namespace_re || j.namespace_re.test(a.namespace)) {
						j.handleObj = a;
						j.data = a.data;
						f = ((dI.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, c);
						if (f !== dX) {
							if ((j.result = f) === false) {
								j.preventDefault();
								j.stopPropagation()
							}
						}
					}
				}
			}
			if (d.postDispatch) {
				d.postDispatch.call(this, j)
			}
			return j.result
		},
		handlers: function(i, j) {
			var h, b, d, f, c = [],
			g = j.delegateCount,
			a = i.target;
			if (g && a.nodeType && (!i.button || i.type !== "click")) {
				for (; a != this; a = a.parentNode || this) {
					if (a.nodeType === 1 && (a.disabled !== true || i.type !== "click")) {
						d = [];
						for (f = 0; f < g; f++) {
							b = j[f];
							h = b.selector + " ";
							if (d[h] === dX) {
								d[h] = b.needsContext ? dI(h, this).index(a) >= 0 : dI.find(h, this, null, [a]).length
							}
							if (d[h]) {
								d.push(b)
							}
						}
						if (d.length) {
							c.push({
								elem: a,
								handlers: d
							})
						}
					}
				}
			}
			if (g < j.length) {
				c.push({
					elem: this,
					handlers: j.slice(g)
				})
			}
			return c
		},
		fix: function(a) {
			if (a[dI.expando]) {
				return a
			}
			var f, c, g, b = a.type,
			d = a,
			h = this.fixHooks[b];
			if (!h) {
				this.fixHooks[b] = h = eB.test(b) ? this.mouseHooks: ds.test(b) ? this.keyHooks: {}
			}
			g = h.props ? this.props.concat(h.props) : this.props;
			a = new dI.Event(d);
			f = g.length;
			while (f--) {
				c = g[f];
				a[c] = d[c]
			}
			if (!a.target) {
				a.target = d.srcElement || eA
			}
			if (a.target.nodeType === 3) {
				a.target = a.target.parentNode
			}
			a.metaKey = !!a.metaKey;
			return h.filter ? h.filter(a, d) : a
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(a, b) {
				if (a.which == null) {
					a.which = b.charCode != null ? b.charCode: b.keyCode
				}
				return a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(a, b) {
				var g, h, f, d = b.button,
				c = b.fromElement;
				if (a.pageX == null && b.clientX != null) {
					h = a.target.ownerDocument || eA;
					f = h.documentElement;
					g = h.body;
					a.pageX = b.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0);
					a.pageY = b.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)
				}
				if (!a.relatedTarget && c) {
					a.relatedTarget = c === a.target ? b.toElement: c
				}
				if (!a.which && d !== dX) {
					a.which = (d & 1 ? 1 : (d & 2 ? 3 : (d & 4 ? 2 : 0)))
				}
				return a
			}
		},
		special: {
			load: {
				noBubble: true
			},
			click: {
				trigger: function() {
					if (dI.nodeName(this, "input") && this.type === "checkbox" && this.click) {
						this.click();
						return false
					}
				}
			},
			focus: {
				trigger: function() {
					if (this !== eA.activeElement && this.focus) {
						try {
							this.focus();
							return false
						} catch(a) {}
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if (this === eA.activeElement && this.blur) {
						this.blur();
						return false
					}
				},
				delegateType: "focusout"
			},
			beforeunload: {
				postDispatch: function(a) {
					if (a.result !== dX) {
						a.originalEvent.returnValue = a.result
					}
				}
			}
		},
		simulate: function(b, f, a, c) {
			var d = dI.extend(new dI.Event(), a, {
				type: b,
				isSimulated: true,
				originalEvent: {}
			});
			if (c) {
				dI.event.trigger(d, null, f)
			} else {
				dI.event.dispatch.call(f, d)
			}
			if (d.isDefaultPrevented()) {
				a.preventDefault()
			}
		}
	};
	dI.removeEvent = eA.removeEventListener ?
	function(c, a, b) {
		if (c.removeEventListener) {
			c.removeEventListener(a, b, false)
		}
	}: function(b, c, a) {
		var d = "on" + c;
		if (b.detachEvent) {
			if (typeof b[d] === cF) {
				b[d] = null
			}
			b.detachEvent(d, a)
		}
	};
	dI.Event = function(a, b) {
		if (! (this instanceof dI.Event)) {
			return new dI.Event(a, b)
		}
		if (a && a.type) {
			this.originalEvent = a;
			this.type = a.type;
			this.isDefaultPrevented = (a.defaultPrevented || a.returnValue === false || a.getPreventDefault && a.getPreventDefault()) ? c2: ea
		} else {
			this.type = a
		}
		if (b) {
			dI.extend(this, b)
		}
		this.timeStamp = a && a.timeStamp || dI.now();
		this[dI.expando] = true
	};
	dI.Event.prototype = {
		isDefaultPrevented: ea,
		isPropagationStopped: ea,
		isImmediatePropagationStopped: ea,
		preventDefault: function() {
			var a = this.originalEvent;
			this.isDefaultPrevented = c2;
			if (!a) {
				return
			}
			if (a.preventDefault) {
				a.preventDefault()
			} else {
				a.returnValue = false
			}
		},
		stopPropagation: function() {
			var a = this.originalEvent;
			this.isPropagationStopped = c2;
			if (!a) {
				return
			}
			if (a.stopPropagation) {
				a.stopPropagation()
			}
			a.cancelBubble = true
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = c2;
			this.stopPropagation()
		}
	};
	dI.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	},
	function(a, b) {
		dI.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function(h) {
				var d, f = this,
				g = h.relatedTarget,
				c = h.handleObj;
				if (!g || (g !== f && !dI.contains(f, g))) {
					h.type = c.origType;
					d = c.handler.apply(this, arguments);
					h.type = b
				}
				return d
			}
		}
	});
	if (!dI.support.submitBubbles) {
		dI.event.special.submit = {
			setup: function() {
				if (dI.nodeName(this, "form")) {
					return false
				}
				dI.event.add(this, "click._submit keypress._submit",
				function(a) {
					var b = a.target,
					c = dI.nodeName(b, "input") || dI.nodeName(b, "button") ? b.form: dX;
					if (c && !dI._data(c, "submitBubbles")) {
						dI.event.add(c, "submit._submit",
						function(d) {
							d._submit_bubble = true
						});
						dI._data(c, "submitBubbles", true)
					}
				})
			},
			postDispatch: function(a) {
				if (a._submit_bubble) {
					delete a._submit_bubble;
					if (this.parentNode && !a.isTrigger) {
						dI.event.simulate("submit", this.parentNode, a, true)
					}
				}
			},
			teardown: function() {
				if (dI.nodeName(this, "form")) {
					return false
				}
				dI.event.remove(this, "._submit")
			}
		}
	}
	if (!dI.support.changeBubbles) {
		dI.event.special.change = {
			setup: function() {
				if (cC.test(this.nodeName)) {
					if (this.type === "checkbox" || this.type === "radio") {
						dI.event.add(this, "propertychange._change",
						function(a) {
							if (a.originalEvent.propertyName === "checked") {
								this._just_changed = true
							}
						});
						dI.event.add(this, "click._change",
						function(a) {
							if (this._just_changed && !a.isTrigger) {
								this._just_changed = false
							}
							dI.event.simulate("change", this, a, true)
						})
					}
					return false
				}
				dI.event.add(this, "beforeactivate._change",
				function(a) {
					var b = a.target;
					if (cC.test(b.nodeName) && !dI._data(b, "changeBubbles")) {
						dI.event.add(b, "change._change",
						function(c) {
							if (this.parentNode && !c.isSimulated && !c.isTrigger) {
								dI.event.simulate("change", this.parentNode, c, true)
							}
						});
						dI._data(b, "changeBubbles", true)
					}
				})
			},
			handle: function(a) {
				var b = a.target;
				if (this !== b || a.isSimulated || a.isTrigger || (b.type !== "radio" && b.type !== "checkbox")) {
					return a.handleObj.handler.apply(this, arguments)
				}
			},
			teardown: function() {
				dI.event.remove(this, "._change");
				return ! cC.test(this.nodeName)
			}
		}
	}
	if (!dI.support.focusinBubbles) {
		dI.each({
			focus: "focusin",
			blur: "focusout"
		},
		function(a, d) {
			var c = 0,
			b = function(f) {
				dI.event.simulate(d, f.target, dI.event.fix(f), true)
			};
			dI.event.special[d] = {
				setup: function() {
					if (c++===0) {
						eA.addEventListener(a, b, true)
					}
				},
				teardown: function() {
					if (--c === 0) {
						eA.removeEventListener(a, b, true)
					}
				}
			}
		})
	}
	dI.fn.extend({
		on: function(b, g, f, h, d) {
			var a, c;
			if (typeof b === "object") {
				if (typeof g !== "string") {
					f = f || g;
					g = dX
				}
				for (a in b) {
					this.on(a, g, f, b[a], d)
				}
				return this
			}
			if (f == null && h == null) {
				h = g;
				f = g = dX
			} else {
				if (h == null) {
					if (typeof g === "string") {
						h = f;
						f = dX
					} else {
						h = f;
						f = g;
						g = dX
					}
				}
			}
			if (h === false) {
				h = ea
			} else {
				if (!h) {
					return this
				}
			}
			if (d === 1) {
				c = h;
				h = function(i) {
					dI().off(i);
					return c.apply(this, arguments)
				};
				h.guid = c.guid || (c.guid = dI.guid++)
			}
			return this.each(function() {
				dI.event.add(this, b, h, f, g)
			})
		},
		one: function(c, d, a, b) {
			return this.on(c, d, a, b, 1)
		},
		off: function(b, d, f) {
			var c, a;
			if (b && b.preventDefault && b.handleObj) {
				c = b.handleObj;
				dI(b.delegateTarget).off(c.namespace ? c.origType + "." + c.namespace: c.origType, c.selector, c.handler);
				return this
			}
			if (typeof b === "object") {
				for (a in b) {
					this.off(a, d, b[a])
				}
				return this
			}
			if (d === false || typeof d === "function") {
				f = d;
				d = dX
			}
			if (f === false) {
				f = ea
			}
			return this.each(function() {
				dI.event.remove(this, b, f, d)
			})
		},
		bind: function(a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind: function(b, a) {
			return this.off(b, null, a)
		},
		delegate: function(d, c, a, b) {
			return this.on(c, d, a, b)
		},
		undelegate: function(a, c, b) {
			return arguments.length === 1 ? this.off(a, "**") : this.off(c, a || "**", b)
		},
		trigger: function(b, a) {
			return this.each(function() {
				dI.event.trigger(b, a, this)
			})
		},
		triggerHandler: function(a, b) {
			var c = this[0];
			if (c) {
				return dI.event.trigger(a, b, c, true)
			}
		}
	});
	/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
	(function(w, K) {
		var z, V, av, a, o, ag, af, q, ad, ai, au, R, Z, v, X, c, f, ao = "sizzle" + -(new Date()),
		p = w.document,
		t = {},
		s = 0,
		I = 0,
		U = x(),
		ap = x(),
		b = x(),
		ak = typeof K,
		k = 1 << 31,
		am = [],
		al = am.pop,
		W = am.push,
		aw = am.slice,
		M = am.indexOf ||
		function(aA) {
			var aB = 0,
			aC = this.length;
			for (; aB < aC; aB++) {
				if (this[aB] === aA) {
					return aB
				}
			}
			return - 1
		},
		at = "[\\x20\\t\\r\\n\\f]",
		Y = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
		n = Y.replace("w", "w#"),
		J = "([*^$|!~]?=)",
		ar = "\\[" + at + "*(" + Y + ")" + at + "*(?:" + J + at + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + n + ")|)|)" + at + "*\\]",
		ay = ":(" + Y + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ar.replace(3, 8) + ")*)|.*)\\)|)",
		F = new RegExp("^" + at + "+|((?:^|[^\\\\])(?:\\\\.)*)" + at + "+$", "g"),
		C = new RegExp("^" + at + "*," + at + "*"),
		aj = new RegExp("^" + at + "*([\\x20\\t\\r\\n\\f>+~])" + at + "*"),
		i = new RegExp(ay),
		h = new RegExp("^" + n + "$"),
		aa = {
			ID: new RegExp("^#(" + Y + ")"),
			CLASS: new RegExp("^\\.(" + Y + ")"),
			NAME: new RegExp("^\\[name=['\"]?(" + Y + ")['\"]?\\]"),
			TAG: new RegExp("^(" + Y.replace("w", "w*") + ")"),
			ATTR: new RegExp("^" + ar),
			PSEUDO: new RegExp("^" + ay),
			CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + at + "*(even|odd|(([+-]|)(\\d*)n|)" + at + "*(?:([+-]|)" + at + "*(\\d+)|))" + at + "*\\)|)", "i"),
			needsContext: new RegExp("^" + at + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + at + "*((?:-\\d)?\\d*)" + at + "*\\)|)(?=[^-]|$)", "i")
		},
		ac = /[\x20\t\r\n\f]*[+~]/,
		l = /^[^{]+\{\s*\[native code/,
		j = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		O = /^(?:input|select|textarea|button)$/i,
		ax = /^h\d$/i,
		m = /'|\\/g,
		D = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
		E = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
		H = function(aC, aA) {
			var aB = "0x" + aA - 65536;
			return aB !== aB ? aA: aB < 0 ? String.fromCharCode(aB + 65536) : String.fromCharCode(aB >> 10 | 55296, aB & 1023 | 56320)
		};
		try {
			aw.call(p.documentElement.childNodes, 0)[0].nodeType
		} catch(g) {
			aw = function(aB) {
				var aA, aC = [];
				while ((aA = this[aB++])) {
					aC.push(aA)
				}
				return aC
			}
		}
		function d(aA) {
			return l.test(aA + "")
		}
		function x() {
			var aB, aA = [];
			return (aB = function(aD, aC) {
				if (aA.push(aD += " ") > av.cacheLength) {
					delete aB[aA.shift()]
				}
				return (aB[aD] = aC)
			})
		}
		function az(aA) {
			aA[ao] = true;
			return aA
		}
		function T(aC) {
			var aA = ai.createElement("div");
			try {
				return aC(aA)
			} catch(aB) {
				return false
			} finally {
				aA = null
			}
		}
		function B(aL, aE, aH, aF) {
			var aG, aO, aN, aJ, aI, aA, aC, aB, aD, aK;
			if ((aE ? aE.ownerDocument || aE: p) !== ai) {
				ad(aE)
			}
			aE = aE || ai;
			aH = aH || [];
			if (!aL || typeof aL !== "string") {
				return aH
			}
			if ((aJ = aE.nodeType) !== 1 && aJ !== 9) {
				return []
			}
			if (!R && !aF) {
				if ((aG = j.exec(aL))) {
					if ((aN = aG[1])) {
						if (aJ === 9) {
							aO = aE.getElementById(aN);
							if (aO && aO.parentNode) {
								if (aO.id === aN) {
									aH.push(aO);
									return aH
								}
							} else {
								return aH
							}
						} else {
							if (aE.ownerDocument && (aO = aE.ownerDocument.getElementById(aN)) && c(aE, aO) && aO.id === aN) {
								aH.push(aO);
								return aH
							}
						}
					} else {
						if (aG[2]) {
							W.apply(aH, aw.call(aE.getElementsByTagName(aL), 0));
							return aH
						} else {
							if ((aN = aG[3]) && t.getByClassName && aE.getElementsByClassName) {
								W.apply(aH, aw.call(aE.getElementsByClassName(aN), 0));
								return aH
							}
						}
					}
				}
				if (t.qsa && !Z.test(aL)) {
					aC = true;
					aB = ao;
					aD = aE;
					aK = aJ === 9 && aL;
					if (aJ === 1 && aE.nodeName.toLowerCase() !== "object") {
						aA = N(aL);
						if ((aC = aE.getAttribute("id"))) {
							aB = aC.replace(m, "\\$&")
						} else {
							aE.setAttribute("id", aB)
						}
						aB = "[id='" + aB + "'] ";
						aI = aA.length;
						while (aI--) {
							aA[aI] = aB + L(aA[aI])
						}
						aD = ac.test(aL) && aE.parentNode || aE;
						aK = aA.join(",")
					}
					if (aK) {
						try {
							W.apply(aH, aw.call(aD.querySelectorAll(aK), 0));
							return aH
						} catch(aM) {} finally {
							if (!aC) {
								aE.removeAttribute("id")
							}
						}
					}
				}
			}
			return u(aL.replace(F, "$1"), aE, aH, aF)
		}
		o = B.isXML = function(aB) {
			var aA = aB && (aB.ownerDocument || aB).documentElement;
			return aA ? aA.nodeName !== "HTML": false
		};
		ad = B.setDocument = function(aB) {
			var aA = aB ? aB.ownerDocument || aB: p;
			if (aA === ai || aA.nodeType !== 9 || !aA.documentElement) {
				return ai
			}
			ai = aA;
			au = aA.documentElement;
			R = o(aA);
			t.tagNameNoComments = T(function(aC) {
				aC.appendChild(aA.createComment(""));
				return ! aC.getElementsByTagName("*").length
			});
			t.attributes = T(function(aC) {
				aC.innerHTML = "<select></select>";
				var aD = typeof aC.lastChild.getAttribute("multiple");
				return aD !== "boolean" && aD !== "string"
			});
			t.getByClassName = T(function(aC) {
				aC.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
				if (!aC.getElementsByClassName || !aC.getElementsByClassName("e").length) {
					return false
				}
				aC.lastChild.className = "e";
				return aC.getElementsByClassName("e").length === 2
			});
			t.getByName = T(function(aC) {
				aC.id = ao + 0;
				aC.innerHTML = "<a name='" + ao + "'></a><div name='" + ao + "'></div>";
				au.insertBefore(aC, au.firstChild);
				var aD = aA.getElementsByName && aA.getElementsByName(ao).length === 2 + aA.getElementsByName(ao + 0).length;
				t.getIdNotName = !aA.getElementById(ao);
				au.removeChild(aC);
				return aD
			});
			av.attrHandle = T(function(aC) {
				aC.innerHTML = "<a href='#'></a>";
				return aC.firstChild && typeof aC.firstChild.getAttribute !== ak && aC.firstChild.getAttribute("href") === "#"
			}) ? {}: {
				href: function(aC) {
					return aC.getAttribute("href", 2)
				},
				type: function(aC) {
					return aC.getAttribute("type")
				}
			};
			if (t.getIdNotName) {
				av.find.ID = function(aC, aD) {
					if (typeof aD.getElementById !== ak && !R) {
						var aE = aD.getElementById(aC);
						return aE && aE.parentNode ? [aE] : []
					}
				};
				av.filter.ID = function(aC) {
					var aD = aC.replace(E, H);
					return function(aE) {
						return aE.getAttribute("id") === aD
					}
				}
			} else {
				av.find.ID = function(aC, aD) {
					if (typeof aD.getElementById !== ak && !R) {
						var aE = aD.getElementById(aC);
						return aE ? aE.id === aC || typeof aE.getAttributeNode !== ak && aE.getAttributeNode("id").value === aC ? [aE] : K: []
					}
				};
				av.filter.ID = function(aC) {
					var aD = aC.replace(E, H);
					return function(aE) {
						var aF = typeof aE.getAttributeNode !== ak && aE.getAttributeNode("id");
						return aF && aF.value === aD
					}
				}
			}
			av.find.TAG = t.tagNameNoComments ?
			function(aD, aC) {
				if (typeof aC.getElementsByTagName !== ak) {
					return aC.getElementsByTagName(aD)
				}
			}: function(aH, aD) {
				var aC, aE = [],
				aF = 0,
				aG = aD.getElementsByTagName(aH);
				if (aH === "*") {
					while ((aC = aG[aF++])) {
						if (aC.nodeType === 1) {
							aE.push(aC)
						}
					}
					return aE
				}
				return aG
			};
			av.find.NAME = t.getByName &&
			function(aD, aC) {
				if (typeof aC.getElementsByName !== ak) {
					return aC.getElementsByName(name)
				}
			};
			av.find.CLASS = t.getByClassName &&
			function(aC, aD) {
				if (typeof aD.getElementsByClassName !== ak && !R) {
					return aD.getElementsByClassName(aC)
				}
			};
			v = [];
			Z = [":focus"];
			if ((t.qsa = d(aA.querySelectorAll))) {
				T(function(aC) {
					aC.innerHTML = "<select><option selected=''></option></select>";
					if (!aC.querySelectorAll("[selected]").length) {
						Z.push("\\[" + at + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
					}
					if (!aC.querySelectorAll(":checked").length) {
						Z.push(":checked")
					}
				});
				T(function(aC) {
					aC.innerHTML = "<input type='hidden' i=''/>";
					if (aC.querySelectorAll("[i^='']").length) {
						Z.push("[*^$]=" + at + "*(?:\"\"|'')")
					}
					if (!aC.querySelectorAll(":enabled").length) {
						Z.push(":enabled", ":disabled")
					}
					aC.querySelectorAll("*,:x");
					Z.push(",.*:")
				})
			}
			if ((t.matchesSelector = d((X = au.matchesSelector || au.mozMatchesSelector || au.webkitMatchesSelector || au.oMatchesSelector || au.msMatchesSelector)))) {
				T(function(aC) {
					t.disconnectedMatch = X.call(aC, "div");
					X.call(aC, "[s!='']:x");
					v.push("!=", ay)
				})
			}
			Z = new RegExp(Z.join("|"));
			v = new RegExp(v.join("|"));
			c = d(au.contains) || au.compareDocumentPosition ?
			function(aE, aF) {
				var aC = aE.nodeType === 9 ? aE.documentElement: aE,
				aD = aF && aF.parentNode;
				return aE === aD || !!(aD && aD.nodeType === 1 && (aC.contains ? aC.contains(aD) : aE.compareDocumentPosition && aE.compareDocumentPosition(aD) & 16))
			}: function(aC, aD) {
				if (aD) {
					while ((aD = aD.parentNode)) {
						if (aD === aC) {
							return true
						}
					}
				}
				return false
			};
			f = au.compareDocumentPosition ?
			function(aD, aE) {
				var aC;
				if (aD === aE) {
					af = true;
					return 0
				}
				if ((aC = aE.compareDocumentPosition && aD.compareDocumentPosition && aD.compareDocumentPosition(aE))) {
					if (aC & 1 || aD.parentNode && aD.parentNode.nodeType === 11) {
						if (aD === aA || c(p, aD)) {
							return - 1
						}
						if (aE === aA || c(p, aE)) {
							return 1
						}
						return 0
					}
					return aC & 4 ? -1 : 1
				}
				return aD.compareDocumentPosition ? -1 : 1
			}: function(aG, aH) {
				var aI, aD = 0,
				aJ = aG.parentNode,
				aE = aH.parentNode,
				aF = [aG],
				aC = [aH];
				if (aG === aH) {
					af = true;
					return 0
				} else {
					if (!aJ || !aE) {
						return aG === aA ? -1 : aH === aA ? 1 : aJ ? -1 : aE ? 1 : 0
					} else {
						if (aJ === aE) {
							return S(aG, aH)
						}
					}
				}
				aI = aG;
				while ((aI = aI.parentNode)) {
					aF.unshift(aI)
				}
				aI = aH;
				while ((aI = aI.parentNode)) {
					aC.unshift(aI)
				}
				while (aF[aD] === aC[aD]) {
					aD++
				}
				return aD ? S(aF[aD], aC[aD]) : aF[aD] === p ? -1 : aC[aD] === p ? 1 : 0
			};
			af = false; [0, 0].sort(f);
			t.detectDuplicates = af;
			return ai
		};
		B.matches = function(aA, aB) {
			return B(aA, null, null, aB)
		};
		B.matchesSelector = function(aC, aA) {
			if ((aC.ownerDocument || aC) !== ai) {
				ad(aC)
			}
			aA = aA.replace(D, "='$1']");
			if (t.matchesSelector && !R && (!v || !v.test(aA)) && !Z.test(aA)) {
				try {
					var aD = X.call(aC, aA);
					if (aD || t.disconnectedMatch || aC.document && aC.document.nodeType !== 11) {
						return aD
					}
				} catch(aB) {}
			}
			return B(aA, ai, null, [aC]).length > 0
		};
		B.contains = function(aB, aA) {
			if ((aB.ownerDocument || aB) !== ai) {
				ad(aB)
			}
			return c(aB, aA)
		};
		B.attr = function(aB, aC) {
			var aA;
			if ((aB.ownerDocument || aB) !== ai) {
				ad(aB)
			}
			if (!R) {
				aC = aC.toLowerCase()
			}
			if ((aA = av.attrHandle[aC])) {
				return aA(aB)
			}
			if (R || t.attributes) {
				return aB.getAttribute(aC)
			}
			return ((aA = aB.getAttributeNode(aC)) || aB.getAttribute(aC)) && aB[aC] === true ? aC: aA && aA.specified ? aA.value: null
		};
		B.error = function(aA) {
			throw new Error("Syntax error, unrecognized expression: " + aA)
		};
		B.uniqueSort = function(aC) {
			var aB, aA = [],
			aD = 1,
			aE = 0;
			af = !t.detectDuplicates;
			aC.sort(f);
			if (af) {
				for (; (aB = aC[aD]); aD++) {
					if (aB === aC[aD - 1]) {
						aE = aA.push(aD)
					}
				}
				while (aE--) {
					aC.splice(aA[aE], 1)
				}
			}
			return aC
		};
		function S(aC, aD) {
			var aA = aD && aC,
			aB = aA && (~aD.sourceIndex || k) - (~aC.sourceIndex || k);
			if (aB) {
				return aB
			}
			if (aA) {
				while ((aA = aA.nextSibling)) {
					if (aA === aD) {
						return - 1
					}
				}
			}
			return aC ? 1 : -1
		}
		function A(aA) {
			return function(aB) {
				var aC = aB.nodeName.toLowerCase();
				return aC === "input" && aB.type === aA
			}
		}
		function Q(aA) {
			return function(aB) {
				var aC = aB.nodeName.toLowerCase();
				return (aC === "input" || aC === "button") && aB.type === aA
			}
		}
		function aq(aA) {
			return az(function(aB) {
				aB = +aB;
				return az(function(aG, aC) {
					var aE, aF = aA([], aG.length, aB),
					aD = aF.length;
					while (aD--) {
						if (aG[(aE = aF[aD])]) {
							aG[aE] = !(aC[aE] = aG[aE])
						}
					}
				})
			})
		}
		a = B.getText = function(aA) {
			var aB, aD = "",
			aC = 0,
			aE = aA.nodeType;
			if (!aE) {
				for (; (aB = aA[aC]); aC++) {
					aD += a(aB)
				}
			} else {
				if (aE === 1 || aE === 9 || aE === 11) {
					if (typeof aA.textContent === "string") {
						return aA.textContent
					} else {
						for (aA = aA.firstChild; aA; aA = aA.nextSibling) {
							aD += a(aA)
						}
					}
				} else {
					if (aE === 3 || aE === 4) {
						return aA.nodeValue
					}
				}
			}
			return aD
		};
		av = B.selectors = {
			cacheLength: 50,
			createPseudo: az,
			match: aa,
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: true
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: true
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(aA) {
					aA[1] = aA[1].replace(E, H);
					aA[3] = (aA[4] || aA[5] || "").replace(E, H);
					if (aA[2] === "~=") {
						aA[3] = " " + aA[3] + " "
					}
					return aA.slice(0, 4)
				},
				CHILD: function(aA) {
					aA[1] = aA[1].toLowerCase();
					if (aA[1].slice(0, 3) === "nth") {
						if (!aA[3]) {
							B.error(aA[0])
						}
						aA[4] = +(aA[4] ? aA[5] + (aA[6] || 1) : 2 * (aA[3] === "even" || aA[3] === "odd"));
						aA[5] = +((aA[7] + aA[8]) || aA[3] === "odd")
					} else {
						if (aA[3]) {
							B.error(aA[0])
						}
					}
					return aA
				},
				PSEUDO: function(aB) {
					var aC, aA = !aB[5] && aB[2];
					if (aa.CHILD.test(aB[0])) {
						return null
					}
					if (aB[4]) {
						aB[2] = aB[4]
					} else {
						if (aA && i.test(aA) && (aC = N(aA, true)) && (aC = aA.indexOf(")", aA.length - aC) - aA.length)) {
							aB[0] = aB[0].slice(0, aC);
							aB[2] = aA.slice(0, aC)
						}
					}
					return aB.slice(0, 3)
				}
			},
			filter: {
				TAG: function(aA) {
					if (aA === "*") {
						return function() {
							return true
						}
					}
					aA = aA.replace(E, H).toLowerCase();
					return function(aB) {
						return aB.nodeName && aB.nodeName.toLowerCase() === aA
					}
				},
				CLASS: function(aB) {
					var aA = U[aB + " "];
					return aA || (aA = new RegExp("(^|" + at + ")" + aB + "(" + at + "|$)")) && U(aB,
					function(aC) {
						return aA.test(aC.className || (typeof aC.getAttribute !== ak && aC.getAttribute("class")) || "")
					})
				},
				ATTR: function(aA, aB, aC) {
					return function(aD) {
						var aE = B.attr(aD, aA);
						if (aE == null) {
							return aB === "!="
						}
						if (!aB) {
							return true
						}
						aE += "";
						return aB === "=" ? aE === aC: aB === "!=" ? aE !== aC: aB === "^=" ? aC && aE.indexOf(aC) === 0 : aB === "*=" ? aC && aE.indexOf(aC) > -1 : aB === "$=" ? aC && aE.slice( - aC.length) === aC: aB === "~=" ? (" " + aE + " ").indexOf(aC) > -1 : aB === "|=" ? aE === aC || aE.slice(0, aC.length + 1) === aC + "-": false
					}
				},
				CHILD: function(aG, aD, aE, aC, aF) {
					var aA = aG.slice(0, 3) !== "nth",
					aH = aG.slice( - 4) !== "last",
					aB = aD === "of-type";
					return aC === 1 && aF === 0 ?
					function(aI) {
						return !! aI.parentNode
					}: function(aQ, aR, aM) {
						var aI, aJ, aO, aK, aN, aS, aP = aA !== aH ? "nextSibling": "previousSibling",
						aL = aQ.parentNode,
						aT = aB && aQ.nodeName.toLowerCase(),
						aU = !aM && !aB;
						if (aL) {
							if (aA) {
								while (aP) {
									aO = aQ;
									while ((aO = aO[aP])) {
										if (aB ? aO.nodeName.toLowerCase() === aT: aO.nodeType === 1) {
											return false
										}
									}
									aS = aP = aG === "only" && !aS && "nextSibling"
								}
								return true
							}
							aS = [aH ? aL.firstChild: aL.lastChild];
							if (aH && aU) {
								aJ = aL[ao] || (aL[ao] = {});
								aI = aJ[aG] || [];
								aN = aI[0] === s && aI[1];
								aK = aI[0] === s && aI[2];
								aO = aN && aL.childNodes[aN];
								while ((aO = ++aN && aO && aO[aP] || (aK = aN = 0) || aS.pop())) {
									if (aO.nodeType === 1 && ++aK && aO === aQ) {
										aJ[aG] = [s, aN, aK];
										break
									}
								}
							} else {
								if (aU && (aI = (aQ[ao] || (aQ[ao] = {}))[aG]) && aI[0] === s) {
									aK = aI[1]
								} else {
									while ((aO = ++aN && aO && aO[aP] || (aK = aN = 0) || aS.pop())) {
										if ((aB ? aO.nodeName.toLowerCase() === aT: aO.nodeType === 1) && ++aK) {
											if (aU) { (aO[ao] || (aO[ao] = {}))[aG] = [s, aK]
											}
											if (aO === aQ) {
												break
											}
										}
									}
								}
							}
							aK -= aF;
							return aK === aC || (aK % aC === 0 && aK / aC >= 0)
						}
					}
				},
				PSEUDO: function(aA, aB) {
					var aD, aC = av.pseudos[aA] || av.setFilters[aA.toLowerCase()] || B.error("unsupported pseudo: " + aA);
					if (aC[ao]) {
						return aC(aB)
					}
					if (aC.length > 1) {
						aD = [aA, aA, "", aB];
						return av.setFilters.hasOwnProperty(aA.toLowerCase()) ? az(function(aF, aI) {
							var aG, aH = aC(aF, aB),
							aE = aH.length;
							while (aE--) {
								aG = M.call(aF, aH[aE]);
								aF[aG] = !(aI[aG] = aH[aE])
							}
						}) : function(aE) {
							return aC(aE, 0, aD)
						}
					}
					return aC
				}
			},
			pseudos: {
				not: az(function(aD) {
					var aC = [],
					aB = [],
					aA = ag(aD.replace(F, "$1"));
					return aA[ao] ? az(function(aG, aI, aK, aF) {
						var aJ, aH = aA(aG, null, aF, []),
						aE = aG.length;
						while (aE--) {
							if ((aJ = aH[aE])) {
								aG[aE] = !(aI[aE] = aJ)
							}
						}
					}) : function(aE, aF, aG) {
						aC[0] = aE;
						aA(aC, null, aG, aB);
						return ! aB.pop()
					}
				}),
				has: az(function(aA) {
					return function(aB) {
						return B(aA, aB).length > 0
					}
				}),
				contains: az(function(aA) {
					return function(aB) {
						return (aB.textContent || aB.innerText || a(aB)).indexOf(aA) > -1
					}
				}),
				lang: az(function(aA) {
					if (!h.test(aA || "")) {
						B.error("unsupported lang: " + aA)
					}
					aA = aA.replace(E, H).toLowerCase();
					return function(aB) {
						var aC;
						do {
							if ((aC = R ? aB.getAttribute("xml:lang") || aB.getAttribute("lang") : aB.lang)) {
								aC = aC.toLowerCase();
								return aC === aA || aC.indexOf(aA + "-") === 0
							}
						} while (( aB = aB . parentNode ) && aB.nodeType === 1);
						return false
					}
				}),
				target: function(aB) {
					var aA = w.location && w.location.hash;
					return aA && aA.slice(1) === aB.id
				},
				root: function(aA) {
					return aA === au
				},
				focus: function(aA) {
					return aA === ai.activeElement && (!ai.hasFocus || ai.hasFocus()) && !!(aA.type || aA.href || ~aA.tabIndex)
				},
				enabled: function(aA) {
					return aA.disabled === false
				},
				disabled: function(aA) {
					return aA.disabled === true
				},
				checked: function(aB) {
					var aA = aB.nodeName.toLowerCase();
					return (aA === "input" && !!aB.checked) || (aA === "option" && !!aB.selected)
				},
				selected: function(aA) {
					if (aA.parentNode) {
						aA.parentNode.selectedIndex
					}
					return aA.selected === true
				},
				empty: function(aA) {
					for (aA = aA.firstChild; aA; aA = aA.nextSibling) {
						if (aA.nodeName > "@" || aA.nodeType === 3 || aA.nodeType === 4) {
							return false
						}
					}
					return true
				},
				parent: function(aA) {
					return ! av.pseudos.empty(aA)
				},
				header: function(aA) {
					return ax.test(aA.nodeName)
				},
				input: function(aA) {
					return O.test(aA.nodeName)
				},
				button: function(aA) {
					var aB = aA.nodeName.toLowerCase();
					return aB === "input" && aA.type === "button" || aB === "button"
				},
				text: function(aA) {
					var aB;
					return aA.nodeName.toLowerCase() === "input" && aA.type === "text" && ((aB = aA.getAttribute("type")) == null || aB.toLowerCase() === aA.type)
				},
				first: aq(function() {
					return [0]
				}),
				last: aq(function(aB, aA) {
					return [aA - 1]
				}),
				eq: aq(function(aC, aA, aB) {
					return [aB < 0 ? aB + aA: aB]
				}),
				even: aq(function(aC, aA) {
					var aB = 0;
					for (; aB < aA; aB += 2) {
						aC.push(aB)
					}
					return aC
				}),
				odd: aq(function(aC, aA) {
					var aB = 1;
					for (; aB < aA; aB += 2) {
						aC.push(aB)
					}
					return aC
				}),
				lt: aq(function(aD, aA, aB) {
					var aC = aB < 0 ? aB + aA: aB;
					for (; --aC >= 0;) {
						aD.push(aC)
					}
					return aD
				}),
				gt: aq(function(aD, aA, aB) {
					var aC = aB < 0 ? aB + aA: aB;
					for (; ++aC < aA;) {
						aD.push(aC)
					}
					return aD
				})
			}
		};
		for (z in {
			radio: true,
			checkbox: true,
			file: true,
			password: true,
			image: true
		}) {
			av.pseudos[z] = A(z)
		}
		for (z in {
			submit: true,
			reset: true
		}) {
			av.pseudos[z] = Q(z)
		}
		function N(aF, aA) {
			var aJ, aE, aC, aB, aD, aI, aH, aG = ap[aF + " "];
			if (aG) {
				return aA ? 0 : aG.slice(0)
			}
			aD = aF;
			aI = [];
			aH = av.preFilter;
			while (aD) {
				if (!aJ || (aE = C.exec(aD))) {
					if (aE) {
						aD = aD.slice(aE[0].length) || aD
					}
					aI.push(aC = [])
				}
				aJ = false;
				if ((aE = aj.exec(aD))) {
					aJ = aE.shift();
					aC.push({
						value: aJ,
						type: aE[0].replace(F, " ")
					});
					aD = aD.slice(aJ.length)
				}
				for (aB in av.filter) {
					if ((aE = aa[aB].exec(aD)) && (!aH[aB] || (aE = aH[aB](aE)))) {
						aJ = aE.shift();
						aC.push({
							value: aJ,
							type: aB,
							matches: aE
						});
						aD = aD.slice(aJ.length)
					}
				}
				if (!aJ) {
					break
				}
			}
			return aA ? aD.length: aD ? B.error(aF) : ap(aF, aI).slice(0)
		}
		function L(aA) {
			var aB = 0,
			aC = aA.length,
			aD = "";
			for (; aB < aC; aB++) {
				aD += aA[aB].value
			}
			return aD
		}
		function G(aB, aD, aC) {
			var aF = aD.dir,
			aA = aC && aF === "parentNode",
			aE = I++;
			return aD.first ?
			function(aI, aG, aH) {
				while ((aI = aI[aF])) {
					if (aI.nodeType === 1 || aA) {
						return aB(aI, aG, aH)
					}
				}
			}: function(aK, aM, aG) {
				var aI, aH, aL, aJ = s + " " + aE;
				if (aG) {
					while ((aK = aK[aF])) {
						if (aK.nodeType === 1 || aA) {
							if (aB(aK, aM, aG)) {
								return true
							}
						}
					}
				} else {
					while ((aK = aK[aF])) {
						if (aK.nodeType === 1 || aA) {
							aL = aK[ao] || (aK[ao] = {});
							if ((aH = aL[aF]) && aH[0] === aJ) {
								if ((aI = aH[1]) === true || aI === V) {
									return aI === true
								}
							} else {
								aH = aL[aF] = [aJ];
								aH[1] = aB(aK, aM, aG) || V;
								if (aH[1] === true) {
									return true
								}
							}
						}
					}
				}
			}
		}
		function r(aA) {
			return aA.length > 1 ?
			function(aB, aC, aE) {
				var aD = aA.length;
				while (aD--) {
					if (!aA[aD](aB, aC, aE)) {
						return false
					}
				}
				return true
			}: aA[0]
		}
		function ab(aG, aJ, aI, aH, aD) {
			var aF, aA = [],
			aE = 0,
			aC = aG.length,
			aB = aJ != null;
			for (; aE < aC; aE++) {
				if ((aF = aG[aE])) {
					if (!aI || aI(aF, aH, aD)) {
						aA.push(aF);
						if (aB) {
							aJ.push(aE)
						}
					}
				}
			}
			return aA
		}
		function P(aD, aE, aB, aC, aA, aF) {
			if (aC && !aC[ao]) {
				aC = P(aC)
			}
			if (aA && !aA[ao]) {
				aA = P(aA, aF)
			}
			return az(function(aL, aO, aG, aM) {
				var aJ, aN, aR, aS = [],
				aK = [],
				aH = aO.length,
				aI = aL || y(aE || "*", aG.nodeType ? [aG] : aG, []),
				aQ = aD && (aL || !aE) ? ab(aI, aS, aD, aG, aM) : aI,
				aP = aB ? aA || (aL ? aD: aH || aC) ? [] : aO: aQ;
				if (aB) {
					aB(aQ, aP, aG, aM)
				}
				if (aC) {
					aJ = ab(aP, aK);
					aC(aJ, [], aG, aM);
					aN = aJ.length;
					while (aN--) {
						if ((aR = aJ[aN])) {
							aP[aK[aN]] = !(aQ[aK[aN]] = aR)
						}
					}
				}
				if (aL) {
					if (aA || aD) {
						if (aA) {
							aJ = [];
							aN = aP.length;
							while (aN--) {
								if ((aR = aP[aN])) {
									aJ.push((aQ[aN] = aR))
								}
							}
							aA(null, (aP = []), aJ, aM)
						}
						aN = aP.length;
						while (aN--) {
							if ((aR = aP[aN]) && (aJ = aA ? M.call(aL, aR) : aS[aN]) > -1) {
								aL[aJ] = !(aO[aJ] = aR)
							}
						}
					}
				} else {
					aP = ab(aP === aO ? aP.splice(aH, aP.length) : aP);
					if (aA) {
						aA(null, aO, aP, aM)
					} else {
						W.apply(aO, aP)
					}
				}
			})
		}
		function an(aF) {
			var aA, aH, aK, aG = aF.length,
			aC = av.relative[aF[0].type],
			aB = aC || av.relative[" "],
			aJ = aC ? 1 : 0,
			aE = G(function(aL) {
				return aL === aA
			},
			aB, true),
			aD = G(function(aL) {
				return M.call(aA, aL) > -1
			},
			aB, true),
			aI = [function(aL, aM, aN) {
				return (!aC && (aN || aM !== q)) || ((aA = aM).nodeType ? aE(aL, aM, aN) : aD(aL, aM, aN))
			}];
			for (; aJ < aG; aJ++) {
				if ((aH = av.relative[aF[aJ].type])) {
					aI = [G(r(aI), aH)]
				} else {
					aH = av.filter[aF[aJ].type].apply(null, aF[aJ].matches);
					if (aH[ao]) {
						aK = ++aJ;
						for (; aK < aG; aK++) {
							if (av.relative[aF[aK].type]) {
								break
							}
						}
						return P(aJ > 1 && r(aI), aJ > 1 && L(aF.slice(0, aJ - 1)).replace(F, "$1"), aH, aJ < aK && an(aF.slice(aJ, aK)), aK < aG && an((aF = aF.slice(aK))), aK < aG && L(aF))
					}
					aI.push(aH)
				}
			}
			return r(aI)
		}
		function ae(aC, aD) {
			var aA = 0,
			aF = aD.length > 0,
			aB = aC.length > 0,
			aE = function(aM, aQ, aO, aR, aT) {
				var aP, aN, aL, aV = [],
				aG = 0,
				aS = "0",
				aI = aM && [],
				aK = aT != null,
				aJ = q,
				aU = aM || aB && av.find.TAG("*", aT && aQ.parentNode || aQ),
				aH = (s += aJ == null ? 1 : Math.random() || 0.1);
				if (aK) {
					q = aQ !== ai && aQ;
					V = aA
				}
				for (; (aP = aU[aS]) != null; aS++) {
					if (aB && aP) {
						aN = 0;
						while ((aL = aC[aN++])) {
							if (aL(aP, aQ, aO)) {
								aR.push(aP);
								break
							}
						}
						if (aK) {
							s = aH;
							V = ++aA
						}
					}
					if (aF) {
						if ((aP = !aL && aP)) {
							aG--
						}
						if (aM) {
							aI.push(aP)
						}
					}
				}
				aG += aS;
				if (aF && aS !== aG) {
					aN = 0;
					while ((aL = aD[aN++])) {
						aL(aI, aV, aQ, aO)
					}
					if (aM) {
						if (aG > 0) {
							while (aS--) {
								if (! (aI[aS] || aV[aS])) {
									aV[aS] = al.call(aR)
								}
							}
						}
						aV = ab(aV)
					}
					W.apply(aR, aV);
					if (aK && !aM && aV.length > 0 && (aG + aD.length) > 1) {
						B.uniqueSort(aR)
					}
				}
				if (aK) {
					s = aH;
					q = aJ
				}
				return aI
			};
			return aF ? az(aE) : aE
		}
		ag = B.compile = function(aF, aA) {
			var aD, aE = [],
			aB = [],
			aC = b[aF + " "];
			if (!aC) {
				if (!aA) {
					aA = N(aF)
				}
				aD = aA.length;
				while (aD--) {
					aC = an(aA[aD]);
					if (aC[ao]) {
						aE.push(aC)
					} else {
						aB.push(aC)
					}
				}
				aC = b(aF, ae(aB, aE))
			}
			return aC
		};
		function y(aD, aA, aB) {
			var aC = 0,
			aE = aA.length;
			for (; aC < aE; aC++) {
				B(aD, aA[aC], aB)
			}
			return aB
		}
		function u(aI, aG, aH, aD) {
			var aF, aB, aJ, aA, aC, aE = N(aI);
			if (!aD) {
				if (aE.length === 1) {
					aB = aE[0] = aE[0].slice(0);
					if (aB.length > 2 && (aJ = aB[0]).type === "ID" && aG.nodeType === 9 && !R && av.relative[aB[1].type]) {
						aG = av.find.ID(aJ.matches[0].replace(E, H), aG)[0];
						if (!aG) {
							return aH
						}
						aI = aI.slice(aB.shift().value.length)
					}
					aF = aa.needsContext.test(aI) ? 0 : aB.length;
					while (aF--) {
						aJ = aB[aF];
						if (av.relative[(aA = aJ.type)]) {
							break
						}
						if ((aC = av.find[aA])) {
							if ((aD = aC(aJ.matches[0].replace(E, H), ac.test(aB[0].type) && aG.parentNode || aG))) {
								aB.splice(aF, 1);
								aI = aD.length && L(aB);
								if (!aI) {
									W.apply(aH, aw.call(aD, 0));
									return aH
								}
								break
							}
						}
					}
				}
			}
			ag(aI, aE)(aD, aG, R, aH, ac.test(aI));
			return aH
		}
		av.pseudos.nth = av.pseudos.eq;
		function ah() {}
		av.filters = ah.prototype = av.pseudos;
		av.setFilters = new ah();
		ad();
		B.attr = dI.attr;
		dI.find = B;
		dI.expr = B.selectors;
		dI.expr[":"] = dI.expr.pseudos;
		dI.unique = B.uniqueSort;
		dI.text = B.getText;
		dI.isXMLDoc = B.isXML;
		dI.contains = B.contains
	})(dt);
	var dy = /Until$/,
	d4 = /^(?:parents|prev(?:Until|All))/,
	ev = /^.[^:#\[\.,]*$/,
	b3 = dI.expr.match.needsContext,
	dU = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};
	dI.fn.extend({
		find: function(c) {
			var f, a, b, d = this.length;
			if (typeof c !== "string") {
				b = this;
				return this.pushStack(dI(c).filter(function() {
					for (f = 0; f < d; f++) {
						if (dI.contains(b[f], this)) {
							return true
						}
					}
				}))
			}
			a = [];
			for (f = 0; f < d; f++) {
				dI.find(c, this[f], a)
			}
			a = this.pushStack(d > 1 ? dI.unique(a) : a);
			a.selector = (this.selector ? this.selector + " ": "") + c;
			return a
		},
		has: function(a) {
			var b, c = dI(a, this),
			d = c.length;
			return this.filter(function() {
				for (b = 0; b < d; b++) {
					if (dI.contains(this, c[b])) {
						return true
					}
				}
			})
		},
		not: function(a) {
			return this.pushStack(cq(this, a, false))
		},
		filter: function(a) {
			return this.pushStack(cq(this, a, true))
		},
		is: function(a) {
			return !! a && (typeof a === "string" ? b3.test(a) ? dI(a, this.context).index(this[0]) >= 0 : dI.filter(a, this).length > 0 : this.filter(a).length > 0)
		},
		closest: function(h, a) {
			var g, b = 0,
			f = this.length,
			d = [],
			c = b3.test(h) || typeof h !== "string" ? dI(h, a || this.context) : 0;
			for (; b < f; b++) {
				g = this[b];
				while (g && g.ownerDocument && g !== a && g.nodeType !== 11) {
					if (c ? c.index(g) > -1 : dI.find.matchesSelector(g, h)) {
						d.push(g);
						break
					}
					g = g.parentNode
				}
			}
			return this.pushStack(d.length > 1 ? dI.unique(d) : d)
		},
		index: function(a) {
			if (!a) {
				return (this[0] && this[0].parentNode) ? this.first().prevAll().length: -1
			}
			if (typeof a === "string") {
				return dI.inArray(this[0], dI(a))
			}
			return dI.inArray(a.jquery ? a[0] : a, this)
		},
		add: function(d, c) {
			var a = typeof d === "string" ? dI(d, c) : dI.makeArray(d && d.nodeType ? [d] : d),
			b = dI.merge(this.get(), a);
			return this.pushStack(dI.unique(b))
		},
		addBack: function(a) {
			return this.add(a == null ? this.prevObject: this.prevObject.filter(a))
		}
	});
	dI.fn.andSelf = dI.fn.addBack;
	function cf(a, b) {
		do {
			a = a[b]
		} while ( a && a . nodeType !== 1 );
		return a
	}
	dI.each({
		parent: function(a) {
			var b = a.parentNode;
			return b && b.nodeType !== 11 ? b: null
		},
		parents: function(a) {
			return dI.dir(a, "parentNode")
		},
		parentsUntil: function(c, a, b) {
			return dI.dir(c, "parentNode", b)
		},
		next: function(a) {
			return cf(a, "nextSibling")
		},
		prev: function(a) {
			return cf(a, "previousSibling")
		},
		nextAll: function(a) {
			return dI.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return dI.dir(a, "previousSibling")
		},
		nextUntil: function(c, a, b) {
			return dI.dir(c, "nextSibling", b)
		},
		prevUntil: function(c, a, b) {
			return dI.dir(c, "previousSibling", b)
		},
		siblings: function(a) {
			return dI.sibling((a.parentNode || {}).firstChild, a)
		},
		children: function(a) {
			return dI.sibling(a.firstChild)
		},
		contents: function(a) {
			return dI.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: dI.merge([], a.childNodes)
		}
	},
	function(b, a) {
		dI.fn[b] = function(f, d) {
			var c = dI.map(this, a, f);
			if (!dy.test(b)) {
				d = f
			}
			if (d && typeof d === "string") {
				c = dI.filter(d, c)
			}
			c = this.length > 1 && !dU[b] ? dI.unique(c) : c;
			if (this.length > 1 && d4.test(b)) {
				c = c.reverse()
			}
			return this.pushStack(c)
		}
	});
	dI.extend({
		filter: function(b, a, c) {
			if (c) {
				b = ":not(" + b + ")"
			}
			return a.length === 1 ? dI.find.matchesSelector(a[0], b) ? [a[0]] : [] : dI.find.matches(b, a)
		},
		dir: function(b, c, f) {
			var d = [],
			a = b[c];
			while (a && a.nodeType !== 9 && (f === dX || a.nodeType !== 1 || !dI(a).is(f))) {
				if (a.nodeType === 1) {
					d.push(a)
				}
				a = a[c]
			}
			return d
		},
		sibling: function(b, c) {
			var a = [];
			for (; b; b = b.nextSibling) {
				if (b.nodeType === 1 && b !== c) {
					a.push(b)
				}
			}
			return a
		}
	});
	function cq(a, b, d) {
		b = b || 0;
		if (dI.isFunction(b)) {
			return dI.grep(a,
			function(g, h) {
				var f = !!b.call(g, h, g);
				return f === d
			})
		} else {
			if (b.nodeType) {
				return dI.grep(a,
				function(f) {
					return (f === b) === d
				})
			} else {
				if (typeof b === "string") {
					var c = dI.grep(a,
					function(f) {
						return f.nodeType === 1
					});
					if (ev.test(b)) {
						return dI.filter(b, c, !d)
					} else {
						b = dI.filter(b, c)
					}
				}
			}
		}
		return dI.grep(a,
		function(f) {
			return (dI.inArray(f, b) >= 0) === d
		})
	}
	function c6(a) {
		var b = dE.split("|"),
		c = a.createDocumentFragment();
		if (c.createElement) {
			while (b.length) {
				c.createElement(b.pop())
			}
		}
		return c
	}
	var dE = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	cN = / jQuery\d+="(?:null|\d+)"/g,
	d6 = new RegExp("<(?:" + dE + ")[\\s/>]", "i"),
	cn = /^\s+/,
	eb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	ey = /<([\w:]+)/,
	dh = /<tbody/i,
	d8 = /<|&#?\w+;/,
	eF = /<(?:script|style|link)/i,
	en = /^(?:checkbox|radio)$/i,
	eI = /checked\s*(?:[^=]|=\s*.checked.)/i,
	dT = /^$|\/(?:java|ecma)script/i,
	b9 = /^true\/(.*)/,
	cv = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	cK = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: dI.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	},
	ck = c6(eA),
	eE = ck.appendChild(eA.createElement("div"));
	cK.optgroup = cK.option;
	cK.tbody = cK.tfoot = cK.colgroup = cK.caption = cK.thead;
	cK.th = cK.td;
	dI.fn.extend({
		text: function(a) {
			return dI.access(this,
			function(b) {
				return b === dX ? dI.text(this) : this.empty().append((this[0] && this[0].ownerDocument || eA).createTextNode(b))
			},
			null, a, arguments.length)
		},
		wrapAll: function(b) {
			if (dI.isFunction(b)) {
				return this.each(function(c) {
					dI(this).wrapAll(b.call(this, c))
				})
			}
			if (this[0]) {
				var a = dI(b, this[0].ownerDocument).eq(0).clone(true);
				if (this[0].parentNode) {
					a.insertBefore(this[0])
				}
				a.map(function() {
					var c = this;
					while (c.firstChild && c.firstChild.nodeType === 1) {
						c = c.firstChild
					}
					return c
				}).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			if (dI.isFunction(a)) {
				return this.each(function(b) {
					dI(this).wrapInner(a.call(this, b))
				})
			}
			return this.each(function() {
				var b = dI(this),
				c = b.contents();
				if (c.length) {
					c.wrapAll(a)
				} else {
					b.append(a)
				}
			})
		},
		wrap: function(b) {
			var a = dI.isFunction(b);
			return this.each(function(c) {
				dI(this).wrapAll(a ? b.call(this, c) : b)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				if (!dI.nodeName(this, "body")) {
					dI(this).replaceWith(this.childNodes)
				}
			}).end()
		},
		append: function() {
			return this.domManip(arguments, true,
			function(a) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					this.appendChild(a)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, true,
			function(a) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					this.insertBefore(a, this.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, false,
			function(a) {
				if (this.parentNode) {
					this.parentNode.insertBefore(a, this)
				}
			})
		},
		after: function() {
			return this.domManip(arguments, false,
			function(a) {
				if (this.parentNode) {
					this.parentNode.insertBefore(a, this.nextSibling)
				}
			})
		},
		remove: function(d, a) {
			var b, c = 0;
			for (; (b = this[c]) != null; c++) {
				if (!d || dI.filter(d, [b]).length > 0) {
					if (!a && b.nodeType === 1) {
						dI.cleanData(eC(b))
					}
					if (b.parentNode) {
						if (a && dI.contains(b.ownerDocument, b)) {
							d9(eC(b, "script"))
						}
						b.parentNode.removeChild(b)
					}
				}
			}
			return this
		},
		empty: function() {
			var a, b = 0;
			for (; (a = this[b]) != null; b++) {
				if (a.nodeType === 1) {
					dI.cleanData(eC(a, false))
				}
				while (a.firstChild) {
					a.removeChild(a.firstChild)
				}
				if (a.options && dI.nodeName(a, "select")) {
					a.options.length = 0
				}
			}
			return this
		},
		clone: function(a, b) {
			a = a == null ? false: a;
			b = b == null ? a: b;
			return this.map(function() {
				return dI.clone(this, a, b)
			})
		},
		html: function(a) {
			return dI.access(this,
			function(g) {
				var b = this[0] || {},
				c = 0,
				d = this.length;
				if (g === dX) {
					return b.nodeType === 1 ? b.innerHTML.replace(cN, "") : dX
				}
				if (typeof g === "string" && !eF.test(g) && (dI.support.htmlSerialize || !d6.test(g)) && (dI.support.leadingWhitespace || !cn.test(g)) && !cK[(ey.exec(g) || ["", ""])[1].toLowerCase()]) {
					g = g.replace(eb, "<$1></$2>");
					try {
						for (; c < d; c++) {
							b = this[c] || {};
							if (b.nodeType === 1) {
								dI.cleanData(eC(b, false));
								b.innerHTML = g
							}
						}
						b = 0
					} catch(f) {}
				}
				if (b) {
					this.empty().append(g)
				}
			},
			null, a, arguments.length)
		},
		replaceWith: function(a) {
			var b = dI.isFunction(a);
			if (!b && typeof a !== "string") {
				a = dI(a).not(this).detach()
			}
			return this.domManip([a], true,
			function(f) {
				var c = this.nextSibling,
				d = this.parentNode;
				if (d) {
					dI(this).remove();
					d.insertBefore(f, c)
				}
			})
		},
		detach: function(a) {
			return this.remove(a, true)
		},
		domManip: function(h, a, b) {
			h = cx.apply([], h);
			var j, p, o, l, d, i, k = 0,
			n = this.length,
			f = this,
			c = n - 1,
			g = h[0],
			m = dI.isFunction(g);
			if (m || !(n <= 1 || typeof g !== "string" || dI.support.checkClone || !eI.test(g))) {
				return this.each(function(q) {
					var r = f.eq(q);
					if (m) {
						h[0] = g.call(this, q, a ? r.html() : dX)
					}
					r.domManip(h, a, b)
				})
			}
			if (n) {
				i = dI.buildFragment(h, this[0].ownerDocument, false, this);
				j = i.firstChild;
				if (i.childNodes.length === 1) {
					i = j
				}
				if (j) {
					a = a && dI.nodeName(j, "tr");
					l = dI.map(eC(i, "script"), eh);
					o = l.length;
					for (; k < n; k++) {
						p = i;
						if (k !== c) {
							p = dI.clone(p, true, true);
							if (o) {
								dI.merge(l, eC(p, "script"))
							}
						}
						b.call(a && dI.nodeName(this[k], "table") ? b5(this[k], "tbody") : this[k], p, k)
					}
					if (o) {
						d = l[l.length - 1].ownerDocument;
						dI.map(l, ed);
						for (k = 0; k < o; k++) {
							p = l[k];
							if (dT.test(p.type || "") && !dI._data(p, "globalEval") && dI.contains(d, p)) {
								if (p.src) {
									dI.ajax({
										url: p.src,
										type: "GET",
										dataType: "script",
										async: false,
										global: false,
										"throws": true
									})
								} else {
									dI.globalEval((p.text || p.textContent || p.innerHTML || "").replace(cv, ""))
								}
							}
						}
					}
					i = j = null
				}
			}
			return this
		}
	});
	function b5(a, b) {
		return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
	}
	function eh(a) {
		var b = a.getAttributeNode("type");
		a.type = (b && b.specified) + "/" + a.type;
		return a
	}
	function ed(a) {
		var b = b9.exec(a.type);
		if (b) {
			a.type = b[1]
		} else {
			a.removeAttribute("type")
		}
		return a
	}
	function d9(d, b) {
		var a, c = 0;
		for (; (a = d[c]) != null; c++) {
			dI._data(a, "globalEval", !b || dI._data(b[c], "globalEval"))
		}
	}
	function a8(c, g) {
		if (g.nodeType !== 1 || !dI.hasData(c)) {
			return
		}
		var i, a, h, d = dI._data(c),
		f = dI._data(g, d),
		b = d.events;
		if (b) {
			delete f.handle;
			f.events = {};
			for (i in b) {
				for (a = 0, h = b[i].length; a < h; a++) {
					dI.event.add(g, i, b[i][a])
				}
			}
		}
		if (f.data) {
			f.data = dI.extend({},
			f.data)
		}
	}
	function c8(f, c) {
		var d, a, b;
		if (c.nodeType !== 1) {
			return
		}
		d = c.nodeName.toLowerCase();
		if (!dI.support.noCloneEvent && c[dI.expando]) {
			b = dI._data(c);
			for (a in b.events) {
				dI.removeEvent(c, a, b.handle)
			}
			c.removeAttribute(dI.expando)
		}
		if (d === "script" && c.text !== f.text) {
			eh(c).text = f.text;
			ed(c)
		} else {
			if (d === "object") {
				if (c.parentNode) {
					c.outerHTML = f.outerHTML
				}
				if (dI.support.html5Clone && (f.innerHTML && !dI.trim(c.innerHTML))) {
					c.innerHTML = f.innerHTML
				}
			} else {
				if (d === "input" && en.test(f.type)) {
					c.defaultChecked = c.checked = f.checked;
					if (c.value !== f.value) {
						c.value = f.value
					}
				} else {
					if (d === "option") {
						c.defaultSelected = c.selected = f.defaultSelected
					} else {
						if (d === "input" || d === "textarea") {
							c.defaultValue = f.defaultValue
						}
					}
				}
			}
		}
	}
	dI.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	},
	function(b, a) {
		dI.fn[b] = function(d) {
			var c, h = 0,
			i = [],
			f = dI(d),
			g = f.length - 1;
			for (; h <= g; h++) {
				c = h === g ? this: this.clone(true);
				dI(f[h])[a](c);
				et.apply(i, c.get())
			}
			return this.pushStack(i)
		}
	});
	function eC(a, f) {
		var d, g, b = 0,
		c = typeof a.getElementsByTagName !== cF ? a.getElementsByTagName(f || "*") : typeof a.querySelectorAll !== cF ? a.querySelectorAll(f || "*") : dX;
		if (!c) {
			for (c = [], d = a.childNodes || a; (g = d[b]) != null; b++) {
				if (!f || dI.nodeName(g, f)) {
					c.push(g)
				} else {
					dI.merge(c, eC(g, f))
				}
			}
		}
		return f === dX || f && dI.nodeName(a, f) ? dI.merge([a], c) : c
	}
	function dm(a) {
		if (en.test(a.type)) {
			a.defaultChecked = a.checked
		}
	}
	dI.extend({
		clone: function(h, g, i) {
			var d, j, a, f, c, b = dI.contains(h.ownerDocument, h);
			if (dI.support.html5Clone || dI.isXMLDoc(h) || !d6.test("<" + h.nodeName + ">")) {
				a = h.cloneNode(true)
			} else {
				eE.innerHTML = h.outerHTML;
				eE.removeChild(a = eE.firstChild)
			}
			if ((!dI.support.noCloneEvent || !dI.support.noCloneChecked) && (h.nodeType === 1 || h.nodeType === 11) && !dI.isXMLDoc(h)) {
				d = eC(a);
				c = eC(h);
				for (f = 0; (j = c[f]) != null; ++f) {
					if (d[f]) {
						c8(j, d[f])
					}
				}
			}
			if (g) {
				if (i) {
					c = c || eC(h);
					d = d || eC(a);
					for (f = 0; (j = c[f]) != null; f++) {
						a8(j, d[f])
					}
				} else {
					a8(h, a)
				}
			}
			d = eC(a, "script");
			if (d.length > 0) {
				d9(d, !b && eC(h, "script"))
			}
			d = c = j = null;
			return a
		},
		buildFragment: function(n, o, h, b) {
			var g, k, i, c, a, d, p, j = n.length,
			l = c6(o),
			m = [],
			f = 0;
			for (; f < j; f++) {
				k = n[f];
				if (k || k === 0) {
					if (dI.type(k) === "object") {
						dI.merge(m, k.nodeType ? [k] : k)
					} else {
						if (!d8.test(k)) {
							m.push(o.createTextNode(k))
						} else {
							c = c || l.appendChild(o.createElement("div"));
							a = (ey.exec(k) || ["", ""])[1].toLowerCase();
							p = cK[a] || cK._default;
							c.innerHTML = p[1] + k.replace(eb, "<$1></$2>") + p[2];
							g = p[0];
							while (g--) {
								c = c.lastChild
							}
							if (!dI.support.leadingWhitespace && cn.test(k)) {
								m.push(o.createTextNode(cn.exec(k)[0]))
							}
							if (!dI.support.tbody) {
								k = a === "table" && !dh.test(k) ? c.firstChild: p[1] === "<table>" && !dh.test(k) ? c: 0;
								g = k && k.childNodes.length;
								while (g--) {
									if (dI.nodeName((d = k.childNodes[g]), "tbody") && !d.childNodes.length) {
										k.removeChild(d)
									}
								}
							}
							dI.merge(m, c.childNodes);
							c.textContent = "";
							while (c.firstChild) {
								c.removeChild(c.firstChild)
							}
							c = l.lastChild
						}
					}
				}
			}
			if (c) {
				l.removeChild(c)
			}
			if (!dI.support.appendChecked) {
				dI.grep(eC(m, "input"), dm)
			}
			f = 0;
			while ((k = m[f++])) {
				if (b && dI.inArray(k, b) !== -1) {
					continue
				}
				i = dI.contains(k.ownerDocument, k);
				c = eC(l.appendChild(k), "script");
				if (i) {
					d9(c)
				}
				if (h) {
					g = 0;
					while ((k = c[g++])) {
						if (dT.test(k.type || "")) {
							h.push(k)
						}
					}
				}
			}
			c = null;
			return l
		},
		cleanData: function(j, b) {
			var k, c, l, h, g = 0,
			a = dI.expando,
			i = dI.cache,
			f = dI.support.deleteExpando,
			d = dI.event.special;
			for (; (k = j[g]) != null; g++) {
				if (b || dI.acceptData(k)) {
					l = k[a];
					h = l && i[l];
					if (h) {
						if (h.events) {
							for (c in h.events) {
								if (d[c]) {
									dI.event.remove(k, c)
								} else {
									dI.removeEvent(k, c, h.handle)
								}
							}
						}
						if (i[l]) {
							delete i[l];
							if (f) {
								delete k[a]
							} else {
								if (typeof k.removeAttribute !== cF) {
									k.removeAttribute(a)
								} else {
									k[a] = null
								}
							}
							ep.push(l)
						}
					}
				}
			}
		}
	});
	var d5, cG, cY, dK = /alpha\([^)]*\)/i,
	cj = /opacity\s*=\s*([^)]*)/,
	cO = /^(top|right|bottom|left)$/,
	cV = /^(none|table(?!-c[ea]).+)/,
	ce = /^margin/,
	cP = new RegExp("^(" + cc + ")(.*)$", "i"),
	cz = new RegExp("^(" + cc + ")(?!px)[a-z%]+$", "i"),
	cW = new RegExp("^([+-])=(" + cc + ")", "i"),
	dA = {
		BODY: "block"
	},
	cL = {
		position: "absolute",
		visibility: "hidden",
		display: "block"
	},
	dp = {
		letterSpacing: 0,
		fontWeight: 400
	},
	b4 = ["Top", "Right", "Bottom", "Left"],
	dl = ["Webkit", "O", "Moz", "ms"];
	function dL(a, c) {
		if (c in a) {
			return c
		}
		var f = c.charAt(0).toUpperCase() + c.slice(1),
		d = c,
		b = dl.length;
		while (b--) {
			c = dl[b] + f;
			if (c in a) {
				return c
			}
		}
		return d
	}
	function de(a, b) {
		a = b || a;
		return dI.css(a, "display") === "none" || !dI.contains(a.ownerDocument, a)
	}
	function er(d, h) {
		var c, i, g, f = [],
		b = 0,
		a = d.length;
		for (; b < a; b++) {
			i = d[b];
			if (!i.style) {
				continue
			}
			f[b] = dI._data(i, "olddisplay");
			c = i.style.display;
			if (h) {
				if (!f[b] && c === "none") {
					i.style.display = ""
				}
				if (i.style.display === "" && de(i)) {
					f[b] = dI._data(i, "olddisplay", c0(i.nodeName))
				}
			} else {
				if (!f[b]) {
					g = de(i);
					if (c && c !== "none" || !g) {
						dI._data(i, "olddisplay", g ? c: dI.css(i, "display"))
					}
				}
			}
		}
		for (b = 0; b < a; b++) {
			i = d[b];
			if (!i.style) {
				continue
			}
			if (!h || i.style.display === "none" || i.style.display === "") {
				i.style.display = h ? f[b] || "": "none"
			}
		}
		return d
	}
	dI.fn.extend({
		css: function(b, a) {
			return dI.access(this,
			function(h, c, g) {
				var d, i, f = {},
				j = 0;
				if (dI.isArray(c)) {
					i = cG(h);
					d = c.length;
					for (; j < d; j++) {
						f[c[j]] = dI.css(h, c[j], false, i)
					}
					return f
				}
				return g !== dX ? dI.style(h, c, g) : dI.css(h, c)
			},
			b, a, arguments.length > 1)
		},
		show: function() {
			return er(this, true)
		},
		hide: function() {
			return er(this)
		},
		toggle: function(a) {
			var b = typeof a === "boolean";
			return this.each(function() {
				if (b ? a: de(this)) {
					dI(this).show()
				} else {
					dI(this).hide()
				}
			})
		}
	});
	dI.extend({
		cssHooks: {
			opacity: {
				get: function(b, c) {
					if (c) {
						var a = cY(b, "opacity");
						return a === "" ? "1": a
					}
				}
			}
		},
		cssNumber: {
			columnCount: true,
			fillOpacity: true,
			fontWeight: true,
			lineHeight: true,
			opacity: true,
			orphans: true,
			widows: true,
			zIndex: true,
			zoom: true
		},
		cssProps: {
			"float": dI.support.cssFloat ? "cssFloat": "styleFloat"
		},
		style: function(j, k, b, i) {
			if (!j || j.nodeType === 3 || j.nodeType === 8 || !j.style) {
				return
			}
			var d, c, a, g = dI.camelCase(k),
			h = j.style;
			k = dI.cssProps[g] || (dI.cssProps[g] = dL(h, g));
			a = dI.cssHooks[k] || dI.cssHooks[g];
			if (b !== dX) {
				c = typeof b;
				if (c === "string" && (d = cW.exec(b))) {
					b = (d[1] + 1) * d[2] + parseFloat(dI.css(j, k));
					c = "number"
				}
				if (b == null || c === "number" && isNaN(b)) {
					return
				}
				if (c === "number" && !dI.cssNumber[g]) {
					b += "px"
				}
				if (!dI.support.clearCloneStyle && b === "" && k.indexOf("background") === 0) {
					h[k] = "inherit"
				}
				if (!a || !("set" in a) || (b = a.set(j, b, i)) !== dX) {
					try {
						h[k] = b
					} catch(f) {}
				}
			} else {
				if (a && "get" in a && (d = a.get(j, false, i)) !== dX) {
					return d
				}
				return h[k]
			}
		},
		css: function(d, i, g, h) {
			var a, c, f, b = dI.camelCase(i);
			i = dI.cssProps[b] || (dI.cssProps[b] = dL(d.style, b));
			f = dI.cssHooks[i] || dI.cssHooks[b];
			if (f && "get" in f) {
				c = f.get(d, true, g)
			}
			if (c === dX) {
				c = cY(d, i, h)
			}
			if (c === "normal" && i in dp) {
				c = dp[i]
			}
			if (g === "" || g) {
				a = parseFloat(c);
				return g === true || dI.isNumeric(a) ? a || 0 : c
			}
			return c
		},
		swap: function(g, h, c, a) {
			var b, f, d = {};
			for (f in h) {
				d[f] = g.style[f];
				g.style[f] = h[f]
			}
			b = c.apply(g, a || []);
			for (f in h) {
				g.style[f] = d[f]
			}
			return b
		}
	});
	if (dt.getComputedStyle) {
		cG = function(a) {
			return dt.getComputedStyle(a, null)
		};
		cY = function(f, j, c) {
			var i, h, a, d = c || cG(f),
			b = d ? d.getPropertyValue(j) || d[j] : dX,
			g = f.style;
			if (d) {
				if (b === "" && !dI.contains(f.ownerDocument, f)) {
					b = dI.style(f, j)
				}
				if (cz.test(b) && ce.test(j)) {
					i = g.width;
					h = g.minWidth;
					a = g.maxWidth;
					g.minWidth = g.maxWidth = g.width = b;
					b = d.width;
					g.width = i;
					g.minWidth = h;
					g.maxWidth = a
				}
			}
			return b
		}
	} else {
		if (eA.documentElement.currentStyle) {
			cG = function(a) {
				return a.currentStyle
			};
			cY = function(i, h, c) {
				var j, d, b, f = c || cG(i),
				a = f ? f[h] : dX,
				g = i.style;
				if (a == null && g && g[h]) {
					a = g[h]
				}
				if (cz.test(a) && !cO.test(h)) {
					j = g.left;
					d = i.runtimeStyle;
					b = d && d.left;
					if (b) {
						d.left = i.currentStyle.left
					}
					g.left = h === "fontSize" ? "1em": a;
					a = g.pixelLeft + "px";
					g.left = j;
					if (b) {
						d.left = b
					}
				}
				return a === "" ? "auto": a
			}
		}
	}
	function cw(d, b, a) {
		var c = cP.exec(b);
		return c ? Math.max(0, c[1] - (a || 0)) + (c[2] || "px") : b
	}
	function dj(h, f, g, c, a) {
		var b = g === (c ? "border": "content") ? 4 : f === "width" ? 1 : 0,
		d = 0;
		for (; b < 4; b += 2) {
			if (g === "margin") {
				d += dI.css(h, g + b4[b], true, a)
			}
			if (c) {
				if (g === "content") {
					d -= dI.css(h, "padding" + b4[b], true, a)
				}
				if (g !== "margin") {
					d -= dI.css(h, "border" + b4[b] + "Width", true, a)
				}
			} else {
				d += dI.css(h, "padding" + b4[b], true, a);
				if (g !== "padding") {
					d += dI.css(h, "border" + b4[b] + "Width", true, a)
				}
			}
		}
		return d
	}
	function ef(h, f, g) {
		var a = true,
		d = f === "width" ? h.offsetWidth: h.offsetHeight,
		b = cG(h),
		c = dI.support.boxSizing && dI.css(h, "boxSizing", false, b) === "border-box";
		if (d <= 0 || d == null) {
			d = cY(h, f, b);
			if (d < 0 || d == null) {
				d = h.style[f]
			}
			if (cz.test(d)) {
				return d
			}
			a = c && (dI.support.boxSizingReliable || d === h.style[f]);
			d = parseFloat(d) || 0
		}
		return (d + dj(h, f, g || (c ? "border": "content"), a, b)) + "px"
	}
	function c0(b) {
		var c = eA,
		a = dA[b];
		if (!a) {
			a = dw(b, c);
			if (a === "none" || !a) {
				d5 = (d5 || dI("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(c.documentElement);
				c = (d5[0].contentWindow || d5[0].contentDocument).document;
				c.write("<!doctype html><html><body>");
				c.close();
				a = dw(b, c);
				d5.detach()
			}
			dA[b] = a
		}
		return a
	}
	function dw(d, a) {
		var c = dI(a.createElement(d)).appendTo(a.body),
		b = dI.css(c[0], "display");
		c.remove();
		return b
	}
	dI.each(["height", "width"],
	function(a, b) {
		dI.cssHooks[b] = {
			get: function(f, c, d) {
				if (c) {
					return f.offsetWidth === 0 && cV.test(dI.css(f, "display")) ? dI.swap(f, cL,
					function() {
						return ef(f, b, d)
					}) : ef(f, b, d)
				}
			},
			set: function(g, f, d) {
				var c = d && cG(g);
				return cw(g, f, d ? dj(g, b, d, dI.support.boxSizing && dI.css(g, "boxSizing", false, c) === "border-box", c) : 0)
			}
		}
	});
	if (!dI.support.opacity) {
		dI.cssHooks.opacity = {
			get: function(a, b) {
				return cj.test((b && a.currentStyle ? a.currentStyle.filter: a.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "": b ? "1": ""
			},
			set: function(g, f) {
				var a = g.style,
				d = g.currentStyle,
				c = dI.isNumeric(f) ? "alpha(opacity=" + f * 100 + ")": "",
				b = d && d.filter || a.filter || "";
				a.zoom = 1;
				if ((f >= 1 || f === "") && dI.trim(b.replace(dK, "")) === "" && a.removeAttribute) {
					a.removeAttribute("filter");
					if (f === "" || d && !d.filter) {
						return
					}
				}
				a.filter = dK.test(b) ? b.replace(dK, c) : b + " " + c
			}
		}
	}
	dI(function() {
		if (!dI.support.reliableMarginRight) {
			dI.cssHooks.marginRight = {
				get: function(a, b) {
					if (b) {
						return dI.swap(a, {
							display: "inline-block"
						},
						cY, [a, "marginRight"])
					}
				}
			}
		}
		if (!dI.support.pixelPosition && dI.fn.position) {
			dI.each(["top", "left"],
			function(b, a) {
				dI.cssHooks[a] = {
					get: function(c, d) {
						if (d) {
							d = cY(c, a);
							return cz.test(d) ? dI(c).position()[a] + "px": d
						}
					}
				}
			})
		}
	});
	if (dI.expr && dI.expr.filters) {
		dI.expr.filters.hidden = function(a) {
			return a.offsetWidth <= 0 && a.offsetHeight <= 0 || (!dI.support.reliableHiddenOffsets && ((a.style && a.style.display) || dI.css(a, "display")) === "none")
		};
		dI.expr.filters.visible = function(a) {
			return ! dI.expr.filters.hidden(a)
		}
	}
	dI.each({
		margin: "",
		padding: "",
		border: "Width"
	},
	function(b, a) {
		dI.cssHooks[b + a] = {
			expand: function(g) {
				var c = 0,
				d = {},
				f = typeof g === "string" ? g.split(" ") : [g];
				for (; c < 4; c++) {
					d[b + b4[c] + a] = f[c] || f[c - 2] || f[0]
				}
				return d
			}
		};
		if (!ce.test(b)) {
			dI.cssHooks[b + a].set = cw
		}
	});
	var dZ = /%20/g,
	cl = /\[\]$/,
	cE = /\r?\n/g,
	dH = /^(?:submit|button|image|reset|file)$/i,
	dg = /^(?:input|select|textarea|keygen)/i;
	dI.fn.extend({
		serialize: function() {
			return dI.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var a = dI.prop(this, "elements");
				return a ? dI.makeArray(a) : this
			}).filter(function() {
				var a = this.type;
				return this.name && !dI(this).is(":disabled") && dg.test(this.nodeName) && !dH.test(a) && (this.checked || !en.test(a))
			}).map(function(a, c) {
				var b = dI(this).val();
				return b == null ? null: dI.isArray(b) ? dI.map(b,
				function(d) {
					return {
						name: c.name,
						value: d.replace(cE, "\r\n")
					}
				}) : {
					name: c.name,
					value: b.replace(cE, "\r\n")
				}
			}).get()
		}
	});
	dI.param = function(d, b) {
		var a, c = [],
		f = function(h, g) {
			g = dI.isFunction(g) ? g() : (g == null ? "": g);
			c[c.length] = encodeURIComponent(h) + "=" + encodeURIComponent(g)
		};
		if (b === dX) {
			b = dI.ajaxSettings && dI.ajaxSettings.traditional
		}
		if (dI.isArray(d) || (d.jquery && !dI.isPlainObject(d))) {
			dI.each(d,
			function() {
				f(this.name, this.value)
			})
		} else {
			for (a in d) {
				eG(a, d[a], b, f)
			}
		}
		return c.join("&").replace(dZ, "+")
	};
	function eG(b, f, c, a) {
		var d;
		if (dI.isArray(f)) {
			dI.each(f,
			function(g, h) {
				if (c || cl.test(b)) {
					a(b, h)
				} else {
					eG(b + "[" + (typeof h === "object" ? g: "") + "]", h, c, a)
				}
			})
		} else {
			if (!c && dI.type(f) === "object") {
				for (d in f) {
					eG(b + "[" + d + "]", f[d], c, a)
				}
			} else {
				a(b, f)
			}
		}
	}
	dI.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),
	function(a, b) {
		dI.fn[b] = function(c, d) {
			return arguments.length > 0 ? this.on(b, null, c, d) : this.trigger(b)
		}
	});
	dI.fn.hover = function(b, a) {
		return this.mouseenter(b).mouseleave(a || b)
	};
	var cp, d7, ex = dI.now(),
	c7 = /\?/,
	em = /#.*$/,
	dC = /([?&])_=[^&]*/,
	cD = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
	c3 = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	eu = /^(?:GET|HEAD)$/,
	dV = /^\/\//,
	ci = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
	cr = dI.fn.load,
	b8 = {},
	cy = {},
	cg = "*/".concat("*");
	try {
		d7 = cu.href
	} catch(dP) {
		d7 = eA.createElement("a");
		d7.href = "";
		d7 = d7.href
	}
	cp = ci.exec(d7.toLowerCase()) || [];
	function dq(a) {
		return function(g, f) {
			if (typeof g !== "string") {
				f = g;
				g = "*"
			}
			var d, c = 0,
			b = g.toLowerCase().match(da) || [];
			if (dI.isFunction(f)) {
				while ((d = b[c++])) {
					if (d[0] === "+") {
						d = d.slice(1) || "*"; (a[d] = a[d] || []).unshift(f)
					} else { (a[d] = a[d] || []).push(f)
					}
				}
			}
		}
	}
	function ew(g, b, c, a) {
		var f = {},
		h = (g === cy);
		function d(j) {
			var i;
			f[j] = true;
			dI.each(g[j] || [],
			function(k, l) {
				var m = l(b, c, a);
				if (typeof m === "string" && !h && !f[m]) {
					b.dataTypes.unshift(m);
					d(m);
					return false
				} else {
					if (h) {
						return ! (i = m)
					}
				}
			});
			return i
		}
		return d(b.dataTypes[0]) || !f["*"] && d("*")
	}
	function el(b, a) {
		var d, c, f = dI.ajaxSettings.flatOptions || {};
		for (c in a) {
			if (a[c] !== dX) { (f[c] ? b: (d || (d = {})))[c] = a[c]
			}
		}
		if (d) {
			dI.extend(true, b, d)
		}
		return b
	}
	dI.fn.load = function(a, d, c) {
		if (typeof a !== "string" && cr) {
			return cr.apply(this, arguments)
		}
		var h, b, i, g = this,
		f = a.indexOf(" ");
		if (f >= 0) {
			h = a.slice(f, a.length);
			a = a.slice(0, f)
		}
		if (dI.isFunction(d)) {
			c = d;
			d = dX
		} else {
			if (d && typeof d === "object") {
				i = "POST"
			}
		}
		if (g.length > 0) {
			dI.ajax({
				url: a,
				type: i,
				dataType: "html",
				data: d
			}).done(function(j) {
				b = arguments;
				g.html(h ? dI("<div>").append(dI.parseHTML(j)).find(h) : j)
			}).complete(c &&
			function(j, k) {
				g.each(c, b || [j.responseText, k, j])
			})
		}
		return this
	};
	dI.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
	function(b, a) {
		dI.fn[a] = function(c) {
			return this.on(a, c)
		}
	});
	dI.each(["get", "post"],
	function(b, a) {
		dI[a] = function(d, g, f, c) {
			if (dI.isFunction(g)) {
				c = c || f;
				f = g;
				g = dX
			}
			return dI.ajax({
				url: d,
				type: a,
				dataType: c,
				data: g,
				success: f
			})
		}
	});
	dI.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: d7,
			type: "GET",
			isLocal: c3.test(cp[1]),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": cg,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": dt.String,
				"text html": true,
				"text json": dI.parseJSON,
				"text xml": dI.parseXML
			},
			flatOptions: {
				url: true,
				context: true
			}
		},
		ajaxSetup: function(a, b) {
			return b ? el(el(a, dI.ajaxSettings), b) : el(dI.ajaxSettings, a)
		},
		ajaxPrefilter: dq(b8),
		ajaxTransport: dq(cy),
		ajax: function(k, n) {
			if (typeof k === "object") {
				n = k;
				k = dX
			}
			n = n || {};
			var b, w, j, r, g, o, v, m, h = dI.ajaxSetup({},
			n),
			p = h.context || h,
			d = h.context && (p.nodeType || p.jquery) ? dI(p) : dI.event,
			q = dI.Deferred(),
			t = dI.Callbacks("once memory"),
			i = h.statusCode || {},
			c = {},
			s = {},
			l = 0,
			x = "canceled",
			a = {
				readyState: 0,
				getResponseHeader: function(y) {
					var z;
					if (l === 2) {
						if (!m) {
							m = {};
							while ((z = cD.exec(r))) {
								m[z[1].toLowerCase()] = z[2]
							}
						}
						z = m[y.toLowerCase()]
					}
					return z == null ? null: z
				},
				getAllResponseHeaders: function() {
					return l === 2 ? r: null
				},
				setRequestHeader: function(z, y) {
					var A = z.toLowerCase();
					if (!l) {
						z = s[A] = s[A] || z;
						c[z] = y
					}
					return this
				},
				overrideMimeType: function(y) {
					if (!l) {
						h.mimeType = y
					}
					return this
				},
				statusCode: function(y) {
					var z;
					if (y) {
						if (l < 2) {
							for (z in y) {
								i[z] = [i[z], y[z]]
							}
						} else {
							a.always(y[a.status])
						}
					}
					return this
				},
				abort: function(y) {
					var z = y || x;
					if (v) {
						v.abort(z)
					}
					f(0, z);
					return this
				}
			};
			q.promise(a).complete = t.add;
			a.success = a.done;
			a.error = a.fail;
			h.url = ((k || h.url || d7) + "").replace(em, "").replace(dV, cp[1] + "//");
			h.type = n.method || n.type || h.method || h.type;
			h.dataTypes = dI.trim(h.dataType || "*").toLowerCase().match(da) || [""];
			if (h.crossDomain == null) {
				b = ci.exec(h.url.toLowerCase());
				h.crossDomain = !!(b && (b[1] !== cp[1] || b[2] !== cp[2] || (b[3] || (b[1] === "http:" ? 80 : 443)) != (cp[3] || (cp[1] === "http:" ? 80 : 443))))
			}
			if (h.data && h.processData && typeof h.data !== "string") {
				h.data = dI.param(h.data, h.traditional)
			}
			ew(b8, h, n, a);
			if (l === 2) {
				return a
			}
			o = h.global;
			if (o && dI.active++===0) {
				dI.event.trigger("ajaxStart")
			}
			h.type = h.type.toUpperCase();
			h.hasContent = !eu.test(h.type);
			j = h.url;
			if (!h.hasContent) {
				if (h.data) {
					j = (h.url += (c7.test(j) ? "&": "?") + h.data);
					delete h.data
				}
				if (h.cache === false) {
					h.url = dC.test(j) ? j.replace(dC, "$1_=" + ex++) : j + (c7.test(j) ? "&": "?") + "_=" + ex++
				}
			}
			if (h.ifModified) {
				if (dI.lastModified[j]) {
					a.setRequestHeader("If-Modified-Since", dI.lastModified[j])
				}
				if (dI.etag[j]) {
					a.setRequestHeader("If-None-Match", dI.etag[j])
				}
			}
			if (h.data && h.hasContent && h.contentType !== false || n.contentType) {
				a.setRequestHeader("Content-Type", h.contentType)
			}
			a.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + (h.dataTypes[0] !== "*" ? ", " + cg + "; q=0.01": "") : h.accepts["*"]);
			for (w in h.headers) {
				a.setRequestHeader(w, h.headers[w])
			}
			if (h.beforeSend && (h.beforeSend.call(p, a, h) === false || l === 2)) {
				return a.abort()
			}
			x = "abort";
			for (w in {
				success: 1,
				error: 1,
				complete: 1
			}) {
				a[w](h[w])
			}
			v = ew(cy, h, n, a);
			if (!v) {
				f( - 1, "No Transport")
			} else {
				a.readyState = 1;
				if (o) {
					d.trigger("ajaxSend", [a, h])
				}
				if (h.async && h.timeout > 0) {
					g = setTimeout(function() {
						a.abort("timeout")
					},
					h.timeout)
				}
				try {
					l = 1;
					v.send(c, f)
				} catch(u) {
					if (l < 2) {
						f( - 1, u)
					} else {
						throw u
					}
				}
			}
			function f(G, B, F, y) {
				var A, C, E, H, D, z = B;
				if (l === 2) {
					return
				}
				l = 2;
				if (g) {
					clearTimeout(g)
				}
				v = dX;
				r = y || "";
				a.readyState = G > 0 ? 4 : 0;
				if (F) {
					H = du(h, a, F)
				}
				if (G >= 200 && G < 300 || G === 304) {
					if (h.ifModified) {
						D = a.getResponseHeader("Last-Modified");
						if (D) {
							dI.lastModified[j] = D
						}
						D = a.getResponseHeader("etag");
						if (D) {
							dI.etag[j] = D
						}
					}
					if (G === 204) {
						A = true;
						z = "nocontent"
					} else {
						if (G === 304) {
							A = true;
							z = "notmodified"
						} else {
							A = cH(h, H);
							z = A.state;
							C = A.data;
							E = A.error;
							A = !E
						}
					}
				} else {
					E = z;
					if (G || !z) {
						z = "error";
						if (G < 0) {
							G = 0
						}
					}
				}
				a.status = G;
				a.statusText = (B || z) + "";
				if (A) {
					q.resolveWith(p, [C, z, a])
				} else {
					q.rejectWith(p, [a, z, E])
				}
				a.statusCode(i);
				i = dX;
				if (o) {
					d.trigger(A ? "ajaxSuccess": "ajaxError", [a, h, A ? C: E])
				}
				t.fireWith(p, [a, z]);
				if (o) {
					d.trigger("ajaxComplete", [a, h]);
					if (! (--dI.active)) {
						dI.event.trigger("ajaxStop")
					}
				}
			}
			return a
		},
		getScript: function(b, a) {
			return dI.get(b, dX, a, "script")
		},
		getJSON: function(a, c, b) {
			return dI.get(a, c, b, "json")
		}
	});
	function du(a, b, f) {
		var j, g, h, d, i = a.contents,
		c = a.dataTypes,
		k = a.responseFields;
		for (d in k) {
			if (d in f) {
				b[k[d]] = f[d]
			}
		}
		while (c[0] === "*") {
			c.shift();
			if (g === dX) {
				g = a.mimeType || b.getResponseHeader("Content-Type")
			}
		}
		if (g) {
			for (d in i) {
				if (i[d] && i[d].test(g)) {
					c.unshift(d);
					break
				}
			}
		}
		if (c[0] in f) {
			h = c[0]
		} else {
			for (d in f) {
				if (!c[0] || a.converters[d + " " + c[0]]) {
					h = d;
					break
				}
				if (!j) {
					j = d
				}
			}
			h = h || j
		}
		if (h) {
			if (h !== c[0]) {
				c.unshift(h)
			}
			return f[h]
		}
	}
	function cH(a, k) {
		var j, f, c, i, b = {},
		h = 0,
		d = a.dataTypes.slice(),
		l = d[0];
		if (a.dataFilter) {
			k = a.dataFilter(k, a.dataType)
		}
		if (d[1]) {
			for (c in a.converters) {
				b[c.toLowerCase()] = a.converters[c]
			}
		}
		for (; (f = d[++h]);) {
			if (f !== "*") {
				if (l !== "*" && l !== f) {
					c = b[l + " " + f] || b["* " + f];
					if (!c) {
						for (j in b) {
							i = j.split(" ");
							if (i[1] === f) {
								c = b[l + " " + i[0]] || b["* " + i[0]];
								if (c) {
									if (c === true) {
										c = b[j]
									} else {
										if (b[j] !== true) {
											f = i[0];
											d.splice(h--, 0, f)
										}
									}
									break
								}
							}
						}
					}
					if (c !== true) {
						if (c && a["throws"]) {
							k = c(k)
						} else {
							try {
								k = c(k)
							} catch(g) {
								return {
									state: "parsererror",
									error: c ? g: "No conversion from " + l + " to " + f
								}
							}
						}
					}
				}
				l = f
			}
		}
		return {
			state: "success",
			data: k
		}
	}
	dI.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(a) {
				dI.globalEval(a);
				return a
			}
		}
	});
	dI.ajaxPrefilter("script",
	function(a) {
		if (a.cache === dX) {
			a.cache = false
		}
		if (a.crossDomain) {
			a.type = "GET";
			a.global = false
		}
	});
	dI.ajaxTransport("script",
	function(b) {
		if (b.crossDomain) {
			var a, c = eA.head || dI("head")[0] || eA.documentElement;
			return {
				send: function(f, d) {
					a = eA.createElement("script");
					a.async = true;
					if (b.scriptCharset) {
						a.charset = b.scriptCharset
					}
					a.src = b.url;
					a.onload = a.onreadystatechange = function(g, h) {
						if (h || !a.readyState || /loaded|complete/.test(a.readyState)) {
							a.onload = a.onreadystatechange = null;
							if (a.parentNode) {
								a.parentNode.removeChild(a)
							}
							a = null;
							if (!h) {
								d(200, "success")
							}
						}
					};
					c.insertBefore(a, c.firstChild)
				},
				abort: function() {
					if (a) {
						a.onload(dX, true)
					}
				}
			}
		}
	});
	var ee = [],
	eq = /(=)\?(?=&|$)|\?\?/;
	dI.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var a = ee.pop() || (dI.expando + "_" + (ex++));
			this[a] = true;
			return a
		}
	});
	dI.ajaxPrefilter("json jsonp",
	function(a, g, h) {
		var c, f, b, d = a.jsonp !== false && (eq.test(a.url) ? "url": typeof a.data === "string" && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") && eq.test(a.data) && "data");
		if (d || a.dataTypes[0] === "jsonp") {
			c = a.jsonpCallback = dI.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback;
			if (d) {
				a[d] = a[d].replace(eq, "$1" + c)
			} else {
				if (a.jsonp !== false) {
					a.url += (c7.test(a.url) ? "&": "?") + a.jsonp + "=" + c
				}
			}
			a.converters["script json"] = function() {
				if (!b) {
					dI.error(c + " was not called")
				}
				return b[0]
			};
			a.dataTypes[0] = "json";
			f = dt[c];
			dt[c] = function() {
				b = arguments
			};
			h.always(function() {
				dt[c] = f;
				if (a[c]) {
					a.jsonpCallback = g.jsonpCallback;
					ee.push(c)
				}
				if (b && dI.isFunction(f)) {
					f(b[0])
				}
				b = f = dX
			});
			return "script"
		}
	});
	var dR, dd, c9 = 0,
	co = dt.ActiveXObject &&
	function() {
		var a;
		for (a in dR) {
			dR[a](dX, true)
		}
	};
	function c5() {
		try {
			return new dt.XMLHttpRequest()
		} catch(a) {}
	}
	function d2() {
		try {
			return new dt.ActiveXObject("Microsoft.XMLHTTP")
		} catch(a) {}
	}
	dI.ajaxSettings.xhr = dt.ActiveXObject ?
	function() {
		return ! this.isLocal && c5() || d2()
	}: c5;
	dd = dI.ajaxSettings.xhr();
	dI.support.cors = !!dd && ("withCredentials" in dd);
	dd = dI.support.ajax = !!dd;
	if (dd) {
		dI.ajaxTransport(function(b) {
			if (!b.crossDomain || dI.support.cors) {
				var a;
				return {
					send: function(f, d) {
						var h, c, g = b.xhr();
						if (b.username) {
							g.open(b.type, b.url, b.async, b.username, b.password)
						} else {
							g.open(b.type, b.url, b.async)
						}
						if (b.xhrFields) {
							for (c in b.xhrFields) {
								g[c] = b.xhrFields[c]
							}
						}
						if (b.mimeType && g.overrideMimeType) {
							g.overrideMimeType(b.mimeType)
						}
						if (!b.crossDomain && !f["X-Requested-With"]) {
							f["X-Requested-With"] = "XMLHttpRequest"
						}
						try {
							for (c in f) {
								g.setRequestHeader(c, f[c])
							}
						} catch(i) {}
						g.send((b.hasContent && b.data) || null);
						a = function(o, p) {
							var q, n, k, m;
							try {
								if (a && (p || g.readyState === 4)) {
									a = dX;
									if (h) {
										g.onreadystatechange = dI.noop;
										if (co) {
											delete dR[h]
										}
									}
									if (p) {
										if (g.readyState !== 4) {
											g.abort()
										}
									} else {
										m = {};
										q = g.status;
										n = g.getAllResponseHeaders();
										if (typeof g.responseText === "string") {
											m.text = g.responseText
										}
										try {
											k = g.statusText
										} catch(l) {
											k = ""
										}
										if (!q && b.isLocal && !b.crossDomain) {
											q = m.text ? 200 : 404
										} else {
											if (q === 1223) {
												q = 204
											}
										}
									}
								}
							} catch(j) {
								if (!p) {
									d( - 1, j)
								}
							}
							if (m) {
								d(q, k, m, n)
							}
						};
						if (!b.async) {
							a()
						} else {
							if (g.readyState === 4) {
								setTimeout(a)
							} else {
								h = ++c9;
								if (co) {
									if (!dR) {
										dR = {};
										dI(dt).unload(co)
									}
									dR[h] = a
								}
								g.onreadystatechange = a
							}
						}
					},
					abort: function() {
						if (a) {
							a(dX, true)
						}
					}
				}
			}
		})
	}
	var dY, cX, eg = /^(?:toggle|show|hide)$/,
	dv = new RegExp("^(?:([+-])=|)(" + cc + ")([a-z%]*)$", "i"),
	ek = /queueHooks$/,
	cJ = [dr],
	dx = {
		"*": [function(j, c) {
			var h, b, a = this.createTween(j, c),
			g = dv.exec(c),
			f = a.cur(),
			i = +f || 0,
			k = 1,
			d = 20;
			if (g) {
				h = +g[2];
				b = g[3] || (dI.cssNumber[j] ? "": "px");
				if (b !== "px" && i) {
					i = dI.css(a.elem, j, true) || h || 1;
					do {
						k = k || ".5";
						i = i / k;
						dI.style(a.elem, j, i + b)
					} while ( k !== ( k = a . cur () / f) && k !== 1 && --d)
				}
				a.unit = b;
				a.start = i;
				a.end = g[1] ? i + (g[1] + 1) * h: h
			}
			return a
		}]
	};
	function cT() {
		setTimeout(function() {
			dY = dX
		});
		return (dY = dI.now())
	}
	function dQ(a, b) {
		dI.each(b,
		function(f, h) {
			var g = (dx[f] || []).concat(dx["*"]),
			d = 0,
			c = g.length;
			for (; d < c; d++) {
				if (g[d].call(a, f, h)) {
					return
				}
			}
		})
	}
	function dz(l, f, b) {
		var a, k, g = 0,
		j = cJ.length,
		c = dI.Deferred().always(function() {
			delete h.elem
		}),
		h = function() {
			if (k) {
				return false
			}
			var r = dY || cT(),
			o = Math.max(0, i.startTime + i.duration - r),
			q = o / i.duration || 0,
			m = 1 - q,
			p = 0,
			n = i.tweens.length;
			for (; p < n; p++) {
				i.tweens[p].run(m)
			}
			c.notifyWith(l, [i, m, o]);
			if (m < 1 && n) {
				return o
			} else {
				c.resolveWith(l, [i]);
				return false
			}
		},
		i = c.promise({
			elem: l,
			props: dI.extend({},
			f),
			opts: dI.extend(true, {
				specialEasing: {}
			},
			b),
			originalProperties: f,
			originalOptions: b,
			startTime: dY || cT(),
			duration: b.duration,
			tweens: [],
			createTween: function(o, n) {
				var m = dI.Tween(l, i.opts, o, n, i.opts.specialEasing[o] || i.opts.easing);
				i.tweens.push(m);
				return m
			},
			stop: function(m) {
				var n = 0,
				o = m ? i.tweens.length: 0;
				if (k) {
					return this
				}
				k = true;
				for (; n < o; n++) {
					i.tweens[n].run(1)
				}
				if (m) {
					c.resolveWith(l, [i, m])
				} else {
					c.rejectWith(l, [i, m])
				}
				return this
			}
		}),
		d = i.props;
		ez(d, i.opts.specialEasing);
		for (; g < j; g++) {
			a = cJ[g].call(i, l, d, i.opts);
			if (a) {
				return a
			}
		}
		dQ(i, d);
		if (dI.isFunction(i.opts.start)) {
			i.opts.start.call(l, i)
		}
		dI.fx.timer(dI.extend(h, {
			elem: l,
			anim: i,
			queue: i.opts.queue
		}));
		return i.progress(i.opts.progress).done(i.opts.done, i.opts.complete).fail(i.opts.fail).always(i.opts.always)
	}
	function ez(a, g) {
		var h, b, f, c, d;
		for (f in a) {
			b = dI.camelCase(f);
			c = g[b];
			h = a[f];
			if (dI.isArray(h)) {
				c = h[1];
				h = a[f] = h[0]
			}
			if (f !== b) {
				a[b] = h;
				delete a[f]
			}
			d = dI.cssHooks[b];
			if (d && "expand" in d) {
				h = d.expand(h);
				delete a[b];
				for (f in h) {
					if (! (f in a)) {
						a[f] = h[f];
						g[f] = c
					}
				}
			} else {
				g[b] = c
			}
		}
	}
	dI.Animation = dI.extend(dz, {
		tweener: function(c, f) {
			if (dI.isFunction(c)) {
				f = c;
				c = ["*"]
			} else {
				c = c.split(" ")
			}
			var a, d = 0,
			b = c.length;
			for (; d < b; d++) {
				a = c[d];
				dx[a] = dx[a] || [];
				dx[a].unshift(f)
			}
		},
		prefilter: function(a, b) {
			if (b) {
				cJ.unshift(a)
			} else {
				cJ.push(a)
			}
		}
	});
	function dr(l, f, n) {
		var p, g, m, c, o, j, r, a, b, k = this,
		q = l.style,
		d = {},
		h = [],
		i = l.nodeType && de(l);
		if (!n.queue) {
			a = dI._queueHooks(l, "fx");
			if (a.unqueued == null) {
				a.unqueued = 0;
				b = a.empty.fire;
				a.empty.fire = function() {
					if (!a.unqueued) {
						b()
					}
				}
			}
			a.unqueued++;
			k.always(function() {
				k.always(function() {
					a.unqueued--;
					if (!dI.queue(l, "fx").length) {
						a.empty.fire()
					}
				})
			})
		}
		if (l.nodeType === 1 && ("height" in f || "width" in f)) {
			n.overflow = [q.overflow, q.overflowX, q.overflowY];
			if (dI.css(l, "display") === "inline" && dI.css(l, "float") === "none") {
				if (!dI.support.inlineBlockNeedsLayout || c0(l.nodeName) === "inline") {
					q.display = "inline-block"
				} else {
					q.zoom = 1
				}
			}
		}
		if (n.overflow) {
			q.overflow = "hidden";
			if (!dI.support.shrinkWrapBlocks) {
				k.always(function() {
					q.overflow = n.overflow[0];
					q.overflowX = n.overflow[1];
					q.overflowY = n.overflow[2]
				})
			}
		}
		for (g in f) {
			c = f[g];
			if (eg.exec(c)) {
				delete f[g];
				j = j || c === "toggle";
				if (c === (i ? "hide": "show")) {
					continue
				}
				h.push(g)
			}
		}
		m = h.length;
		if (m) {
			o = dI._data(l, "fxshow") || dI._data(l, "fxshow", {});
			if ("hidden" in o) {
				i = o.hidden
			}
			if (j) {
				o.hidden = !i
			}
			if (i) {
				dI(l).show()
			} else {
				k.done(function() {
					dI(l).hide()
				})
			}
			k.done(function() {
				var s;
				dI._removeData(l, "fxshow");
				for (s in d) {
					dI.style(l, s, d[s])
				}
			});
			for (g = 0; g < m; g++) {
				p = h[g];
				r = k.createTween(p, i ? o[p] : 0);
				d[p] = o[p] || dI.style(l, p);
				if (! (p in o)) {
					o[p] = r.start;
					if (i) {
						r.end = r.start;
						r.start = p === "width" || p === "height" ? 1 : 0
					}
				}
			}
		}
	}
	function cR(b, c, f, d, a) {
		return new cR.prototype.init(b, c, f, d, a)
	}
	dI.Tween = cR;
	cR.prototype = {
		constructor: cR,
		init: function(a, d, f, c, g, b) {
			this.elem = a;
			this.prop = f;
			this.easing = g || "swing";
			this.options = d;
			this.start = this.now = this.cur();
			this.end = c;
			this.unit = b || (dI.cssNumber[f] ? "": "px")
		},
		cur: function() {
			var a = cR.propHooks[this.prop];
			return a && a.get ? a.get(this) : cR.propHooks._default.get(this)
		},
		run: function(b) {
			var c, a = cR.propHooks[this.prop];
			if (this.options.duration) {
				this.pos = c = dI.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration)
			} else {
				this.pos = c = b
			}
			this.now = (this.end - this.start) * c + this.start;
			if (this.options.step) {
				this.options.step.call(this.elem, this.now, this)
			}
			if (a && a.set) {
				a.set(this)
			} else {
				cR.propHooks._default.set(this)
			}
			return this
		}
	};
	cR.prototype.init.prototype = cR.prototype;
	cR.propHooks = {
		_default: {
			get: function(a) {
				var b;
				if (a.elem[a.prop] != null && (!a.elem.style || a.elem.style[a.prop] == null)) {
					return a.elem[a.prop]
				}
				b = dI.css(a.elem, a.prop, "");
				return ! b || b === "auto" ? 0 : b
			},
			set: function(a) {
				if (dI.fx.step[a.prop]) {
					dI.fx.step[a.prop](a)
				} else {
					if (a.elem.style && (a.elem.style[dI.cssProps[a.prop]] != null || dI.cssHooks[a.prop])) {
						dI.style(a.elem, a.prop, a.now + a.unit)
					} else {
						a.elem[a.prop] = a.now
					}
				}
			}
		}
	};
	cR.propHooks.scrollTop = cR.propHooks.scrollLeft = {
		set: function(a) {
			if (a.elem.nodeType && a.elem.parentNode) {
				a.elem[a.prop] = a.now
			}
		}
	};
	dI.each(["toggle", "show", "hide"],
	function(c, a) {
		var b = dI.fn[a];
		dI.fn[a] = function(g, d, f) {
			return g == null || typeof g === "boolean" ? b.apply(this, arguments) : this.animate(dM(a, true), g, d, f)
		}
	});
	dI.fn.extend({
		fadeTo: function(d, a, b, c) {
			return this.filter(de).css("opacity", 0).show().end().animate({
				opacity: a
			},
			d, b, c)
		},
		animate: function(c, a, g, h) {
			var b = dI.isEmptyObject(c),
			f = dI.speed(a, g, h),
			d = function() {
				var i = dz(this, dI.extend({},
				c), f);
				d.finish = function() {
					i.stop(true)
				};
				if (b || dI._data(this, "finish")) {
					i.stop(true)
				}
			};
			d.finish = d;
			return b || f.queue === false ? this.each(d) : this.queue(f.queue, d)
		},
		stop: function(b, c, d) {
			var a = function(g) {
				var f = g.stop;
				delete g.stop;
				f(d)
			};
			if (typeof b !== "string") {
				d = c;
				c = b;
				b = dX
			}
			if (c && b !== false) {
				this.queue(b || "fx", [])
			}
			return this.each(function() {
				var f = true,
				i = b != null && b + "queueHooks",
				g = dI.timers,
				h = dI._data(this);
				if (i) {
					if (h[i] && h[i].stop) {
						a(h[i])
					}
				} else {
					for (i in h) {
						if (h[i] && h[i].stop && ek.test(i)) {
							a(h[i])
						}
					}
				}
				for (i = g.length; i--;) {
					if (g[i].elem === this && (b == null || g[i].queue === b)) {
						g[i].anim.stop(d);
						f = false;
						g.splice(i, 1)
					}
				}
				if (f || !d) {
					dI.dequeue(this, b)
				}
			})
		},
		finish: function(a) {
			if (a !== false) {
				a = a || "fx"
			}
			return this.each(function() {
				var b, f = dI._data(this),
				c = f[a + "queue"],
				d = f[a + "queueHooks"],
				g = dI.timers,
				h = c ? c.length: 0;
				f.finish = true;
				dI.queue(this, a, []);
				if (d && d.cur && d.cur.finish) {
					d.cur.finish.call(this)
				}
				for (b = g.length; b--;) {
					if (g[b].elem === this && g[b].queue === a) {
						g[b].anim.stop(true);
						g.splice(b, 1)
					}
				}
				for (b = 0; b < h; b++) {
					if (c[b] && c[b].finish) {
						c[b].finish.call(this)
					}
				}
				delete f.finish
			})
		}
	});
	function dM(b, f) {
		var a, d = {
			height: b
		},
		c = 0;
		f = f ? 1 : 0;
		for (; c < 4; c += 2 - f) {
			a = b4[c];
			d["margin" + a] = d["padding" + a] = b
		}
		if (f) {
			d.opacity = d.width = b
		}
		return d
	}
	dI.each({
		slideDown: dM("show"),
		slideUp: dM("hide"),
		slideToggle: dM("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	},
	function(b, a) {
		dI.fn[b] = function(d, f, c) {
			return this.animate(a, d, f, c)
		}
	});
	dI.speed = function(b, a, c) {
		var d = b && typeof b === "object" ? dI.extend({},
		b) : {
			complete: c || !c && a || dI.isFunction(b) && b,
			duration: b,
			easing: c && a || a && !dI.isFunction(a) && a
		};
		d.duration = dI.fx.off ? 0 : typeof d.duration === "number" ? d.duration: d.duration in dI.fx.speeds ? dI.fx.speeds[d.duration] : dI.fx.speeds._default;
		if (d.queue == null || d.queue === true) {
			d.queue = "fx"
		}
		d.old = d.complete;
		d.complete = function() {
			if (dI.isFunction(d.old)) {
				d.old.call(this)
			}
			if (d.queue) {
				dI.dequeue(this, d.queue)
			}
		};
		return d
	};
	dI.easing = {
		linear: function(a) {
			return a
		},
		swing: function(a) {
			return 0.5 - Math.cos(a * Math.PI) / 2
		}
	};
	dI.timers = [];
	dI.fx = cR.prototype.init;
	dI.fx.tick = function() {
		var b, c = dI.timers,
		a = 0;
		dY = dI.now();
		for (; a < c.length; a++) {
			b = c[a];
			if (!b() && c[a] === b) {
				c.splice(a--, 1)
			}
		}
		if (!c.length) {
			dI.fx.stop()
		}
		dY = dX
	};
	dI.fx.timer = function(a) {
		if (a() && dI.timers.push(a)) {
			dI.fx.start()
		}
	};
	dI.fx.interval = 13;
	dI.fx.start = function() {
		if (!cX) {
			cX = setInterval(dI.fx.tick, dI.fx.interval)
		}
	};
	dI.fx.stop = function() {
		clearInterval(cX);
		cX = null
	};
	dI.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	};
	dI.fx.step = {};
	if (dI.expr && dI.expr.filters) {
		dI.expr.filters.animated = function(a) {
			return dI.grep(dI.timers,
			function(b) {
				return a === b.elem
			}).length
		}
	}
	dI.fn.offset = function(d) {
		if (arguments.length) {
			return d === dX ? this: this.each(function(h) {
				dI.offset.setOffset(this, d, h)
			})
		}
		var f, c, a = {
			top: 0,
			left: 0
		},
		b = this[0],
		g = b && b.ownerDocument;
		if (!g) {
			return
		}
		f = g.documentElement;
		if (!dI.contains(f, b)) {
			return a
		}
		if (typeof b.getBoundingClientRect !== cF) {
			a = b.getBoundingClientRect()
		}
		c = cA(g);
		return {
			top: a.top + (c.pageYOffset || f.scrollTop) - (f.clientTop || 0),
			left: a.left + (c.pageXOffset || f.scrollLeft) - (f.clientLeft || 0)
		}
	};
	dI.offset = {
		setOffset: function(k, a, h) {
			var g = dI.css(k, "position");
			if (g === "static") {
				k.style.position = "relative"
			}
			var i = dI(k),
			l = i.offset(),
			m = dI.css(k, "top"),
			c = dI.css(k, "left"),
			b = (g === "absolute" || g === "fixed") && dI.inArray("auto", [m, c]) > -1,
			d = {},
			f = {},
			n,
			j;
			if (b) {
				f = i.position();
				n = f.top;
				j = f.left
			} else {
				n = parseFloat(m) || 0;
				j = parseFloat(c) || 0
			}
			if (dI.isFunction(a)) {
				a = a.call(k, h, l)
			}
			if (a.top != null) {
				d.top = (a.top - l.top) + n
			}
			if (a.left != null) {
				d.left = (a.left - l.left) + j
			}
			if ("using" in a) {
				a.using.call(k, d)
			} else {
				i.css(d)
			}
		}
	};
	dI.fn.extend({
		position: function() {
			if (!this[0]) {
				return
			}
			var b, a, d = {
				top: 0,
				left: 0
			},
			c = this[0];
			if (dI.css(c, "position") === "fixed") {
				a = c.getBoundingClientRect()
			} else {
				b = this.offsetParent();
				a = this.offset();
				if (!dI.nodeName(b[0], "html")) {
					d = b.offset()
				}
				d.top += dI.css(b[0], "borderTopWidth", true);
				d.left += dI.css(b[0], "borderLeftWidth", true)
			}
			return {
				top: a.top - d.top - dI.css(c, "marginTop", true),
				left: a.left - d.left - dI.css(c, "marginLeft", true)
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var a = this.offsetParent || eA.documentElement;
				while (a && (!dI.nodeName(a, "html") && dI.css(a, "position") === "static")) {
					a = a.offsetParent
				}
				return a || eA.documentElement
			})
		}
	});
	dI.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	},
	function(b, c) {
		var a = /Y/.test(c);
		dI.fn[b] = function(d) {
			return dI.access(this,
			function(i, f, g) {
				var h = cA(i);
				if (g === dX) {
					return h ? (c in h) ? h[c] : h.document.documentElement[f] : i[f]
				}
				if (h) {
					h.scrollTo(!a ? g: dI(h).scrollLeft(), a ? g: dI(h).scrollTop())
				} else {
					i[f] = g
				}
			},
			b, d, arguments.length, null)
		}
	});
	function cA(a) {
		return dI.isWindow(a) ? a: a.nodeType === 9 ? a.defaultView || a.parentWindow: false
	}
	dI.each({
		Height: "height",
		Width: "width"
	},
	function(b, a) {
		dI.each({
			padding: "inner" + b,
			content: a,
			"": "outer" + b
		},
		function(d, c) {
			dI.fn[c] = function(f, g) {
				var h = arguments.length && (d || typeof f !== "boolean"),
				i = d || (f === true || g === true ? "margin": "border");
				return dI.access(this,
				function(l, m, k) {
					var j;
					if (dI.isWindow(l)) {
						return l.document.documentElement["client" + b]
					}
					if (l.nodeType === 9) {
						j = l.documentElement;
						return Math.max(l.body["scroll" + b], j["scroll" + b], l.body["offset" + b], j["offset" + b], j["client" + b])
					}
					return k === dX ? dI.css(l, m, i) : dI.style(l, m, k, i)
				},
				a, h ? f: dX, h, null)
			}
		})
	});
	dt.jQuery = dt.$ = dI;
	if (typeof define === "function" && define.amd && define.amd.jQuery) {
		define("jquery", [],
		function() {
			return dI
		})
	}
})(window); (function(d) {
	d.chromatable = {
		defaults: {
			width: "900px",
			height: "300px",
			scrolling: "yes"
		}
	};
	d.fn.chromatable = function(a) {
		var a = d.extend({},
		d.chromatable.defaults, a);
		return this.each(function() {
			var f = d(this);
			var b = d(this).attr("ID") + ("wrapper");
			d(this).css("width", a.width).addClass("_scrolling");
			d(this).wrap('<div class="scrolling_outer"><div id="' + b + '" class="scrolling_inner"></div></div>');
			d(".scrolling_outer").css({
				position: "relative"
			});
			d("#" + b).css({
				border: "1px solid #CCCCCC",
				"overflow-x": "hidden",
				"overflow-y": "auto",
				"padding-right": "17px"
			});
			d("#" + b).css("height", a.height);
			d("#" + b).css("width", a.width);
			d(this).before(d(this).clone().attr("id", "").addClass("_thead").css({
				width: "auto",
				display: "block",
				position: "absolute",
				border: "none",
				"border-bottom": "1px solid #CCC",
				top: "1px"
			}));
			d("._thead").children("tbody").remove();
			d(this).each(function(e) {
				if (a.width == "100%" || a.width == "auto") {
					d("#" + b).css({
						"padding-right": "0px"
					})
				}
				if (a.scrolling == "no") {
					d("#" + b).before('<a href="#" class="expander" style="width:100%;">Expand table</a>');
					d("#" + b).css({
						"padding-right": "0px"
					});
					d(".expander").each(function(h) {
						d(this).attr("ID", h);
						d(this).bind("click",
						function() {
							d("#" + b).css({
								height: "auto"
							});
							d("#" + b + " ._thead").remove();
							d(this).remove()
						})
					});
					d("#" + b).resizable({
						handles: "s"
					}).css("overflow-y", "hidden")
				}
			});
			$curr = f.prev();
			d("thead:eq(0)>tr th", this).each(function(e) {
				d("thead:eq(0)>tr th:eq(" + e + ")", $curr).width(d(this).width())
			});
			if (a.width == "100%" || "auto") {
				d(window).resize(function() {
					c(f)
				})
			}
		})
	};
	function c(a) {
		$curr = a.prev();
		d("thead:eq(0)>tr th", a).each(function(b) {
			d("thead:eq(0)>tr th:eq(" + b + ")", $curr).width(d(this).width())
		})
	}
})(jQuery);
/*!
 * jqPagination, a jQuery pagination plugin (obviously)
 *
 * Copyright (C) 2011 Ben Everard
 *
 * http://beneverard.github.com/jqPagination
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *     
 */
(function(b) {
	b.jqPagination = function(f, a) {
		var e = this;
		e.$el = b(f);
		e.el = f;
		e.$input = e.$el.find("input");
		e.$el.data("jqPagination", e);
		e.init = function() {
			e.options = b.extend({},
			b.jqPagination.defaultOptions, a);
			if (e.options.max_page === null) {
				if (e.$input.data("max-page") !== undefined) {
					e.options.max_page = e.$input.data("max-page")
				} else {
					e.options.max_page = 1
				}
			}
			if (e.$input.data("current-page") !== undefined && e.isNumber(e.$input.data("current-page"))) {
				e.options.current_page = e.$input.data("current-page")
			}
			e.$input.removeAttr("readonly");
			e.updateInput(true);
			e.$input.on("focus.jqPagination mouseup.jqPagination",
			function(d) {
				if (d.type === "focus") {
					var c = parseInt(e.options.current_page, 10);
					b(this).val(c).select()
				}
				if (d.type === "mouseup") {
					return false
				}
			});
			e.$input.on("blur.jqPagination keydown.jqPagination",
			function(h) {
				var c = b(this),
				d = parseInt(e.options.current_page, 10);
				if (h.keyCode === 27) {
					c.val(d);
					c.blur()
				}
				if (h.keyCode === 13) {
					c.blur()
				}
				if (h.type === "blur") {
					e.setPage(c.val())
				}
			});
			e.$el.on("click.jqPagination", "a",
			function(d) {
				var c = b(this);
				if (c.hasClass("disabled")) {
					return false
				}
				if (!d.metaKey && !d.ctrlKey) {
					d.preventDefault();
					e.setPage(c.data("action"))
				}
			})
		};
		e.setPage = function(d) {
			if (d === undefined) {
				return e.options.current_page
			}
			var c = parseInt(e.options.current_page, 10),
			h = parseInt(e.options.max_page, 10);
			if (isNaN(parseInt(d, 10))) {
				switch (d) {
				case "first":
					d = 1;
					break;
				case "prev":
				case "previous":
					d = c - 1;
					break;
				case "next":
					d = c + 1;
					break;
				case "last":
					d = h;
					break
				}
			}
			d = parseInt(d, 10);
			if (isNaN(d) || d < 1 || d > h || d === c) {
				e.setInputValue(c);
				return false
			}
			e.options.current_page = d;
			e.$input.data("current-page", d);
			e.updateInput()
		};
		e.setMaxPage = function(c) {
			if (c === undefined) {
				return e.options.max_page
			}
			if (!e.isNumber(c)) {
				console.error("jqPagination: max_page is not a number");
				return false
			}
			if (c < e.options.current_page) {
				console.error("jqPagination: max_page lower than current_page");
				return false
			}
			e.options.max_page = c;
			e.$input.data("max-page", c);
			e.updateInput()
		};
		e.updateInput = function(d) {
			var c = parseInt(e.options.current_page, 10);
			e.setInputValue(c);
			e.setLinks(c);
			if (d !== true) {
				e.options.paged(c)
			}
		};
		e.setInputValue = function(d) {
			var c = e.options.page_string,
			h = e.options.max_page;
			c = c.replace("{current_page}", d).replace("{max_page}", h);
			e.$input.val(c)
		};
		e.isNumber = function(c) {
			return ! isNaN(parseFloat(c)) && isFinite(c)
		};
		e.setLinks = function(l) {
			var c = e.options.link_string,
			k = parseInt(e.options.current_page, 10),
			d = parseInt(e.options.max_page, 10);
			if (c !== "") {
				var m = k - 1;
				if (m < 1) {
					m = 1
				}
				var n = k + 1;
				if (n > d) {
					n = d
				}
				e.$el.find("a.first").attr("href", c.replace("{page_number}", "1"));
				e.$el.find("a.prev, a.previous").attr("href", c.replace("{page_number}", m));
				e.$el.find("a.next").attr("href", c.replace("{page_number}", n));
				e.$el.find("a.last").attr("href", c.replace("{page_number}", d))
			}
			e.$el.find("a").removeClass("disabled");
			if (k === d) {
				e.$el.find(".next, .last").addClass("disabled")
			}
			if (k === 1) {
				e.$el.find(".previous, .first").addClass("disabled")
			}
		};
		e.callMethod = function(c, h, d) {
			switch (c.toLowerCase()) {
			case "option":
				switch (h.toLowerCase()) {
				case "current_page":
					return e.setPage(d);
				case "max_page":
					return e.setMaxPage(d)
				}
				console.error("jqPagination: cannot get / set option " + h);
				return false;
				break;
			case "destroy":
				e.$el.off(".jqPagination").find("*").off(".jqPagination");
				break;
			default:
				console.error('jqPagination: method "' + c + '" does not exist');
				return false
			}
		};
		e.init();
		return e
	};
	b.jqPagination.defaultOptions = {
		current_page: 1,
		link_string: "",
		max_page: null,
		page_string: "Page {current_page} of {max_page}",
		paged: function() {}
	};
	b.fn.jqPagination = function() {
		var a = this,
		f = Array.prototype.slice.call(arguments);
		if (typeof f[0] === "string") {
			if (a.length > 1) {
				a = a.eq(0)
			}
			var e = b(a).data("jqPagination");
			return e.callMethod(f[0], f[1], f[2])
		}
		return (new b.jqPagination(this, f[0]))
	}
})(jQuery);
if (!console) {
	var console = {},
	func = function() {
		return false
	};
	console.log = func;
	console.info = func;
	console.warn = func;
	console.error = func
};
/*!
 * jQuery Form Plugin
 * version: 3.34.0-2013.05.17
 * @requires jQuery v1.5 or later
 * Copyright (c) 2013 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
(function(k) {
	var h = {};
	h.fileapi = k("<input type='file'/>").get(0).files !== undefined;
	h.formdata = window.FormData !== undefined;
	var l = !!k.fn.prop;
	k.fn.attr2 = function() {
		if (!l) {
			return this.attr.apply(this, arguments)
		}
		var a = this.prop.apply(this, arguments);
		if ((a && a.jquery) || typeof a === "string") {
			return a
		}
		return this.attr.apply(this, arguments)
	};
	k.fn.ajaxSubmit = function(X) {
		if (!this.length) {
			g("ajaxSubmit: skipping submit process - no element selected");
			return this
		}
		var Y, N, V, T = this;
		if (typeof X == "function") {
			X = {
				success: X
			}
		}
		Y = X.type || this.attr2("method");
		N = X.url || this.attr2("action");
		V = (typeof N === "string") ? k.trim(N) : "";
		V = V || window.location.href || "";
		if (V) {
			V = (V.match(/^([^#]+)/) || [])[1]
		}
		X = k.extend(true, {
			url: V,
			success: k.ajaxSettings.success,
			type: Y || "GET",
			iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false": "about:blank"
		},
		X);
		var c = {};
		this.trigger("form-pre-serialize", [this, X, c]);
		if (c.veto) {
			g("ajaxSubmit: submit vetoed via form-pre-serialize trigger");
			return this
		}
		if (X.beforeSerialize && X.beforeSerialize(this, X) === false) {
			g("ajaxSubmit: submit aborted via beforeSerialize callback");
			return this
		}
		var U = X.traditional;
		if (U === undefined) {
			U = k.ajaxSettings.traditional
		}
		var H = [];
		var f, b = this.formToArray(X.semantic, H);
		if (X.data) {
			X.extraData = X.data;
			f = k.param(X.data, U)
		}
		if (X.beforeSubmit && X.beforeSubmit(b, this, X) === false) {
			g("ajaxSubmit: submit aborted via beforeSubmit callback");
			return this
		}
		this.trigger("form-submit-validate", [b, this, X, c]);
		if (c.veto) {
			g("ajaxSubmit: submit vetoed via form-submit-validate trigger");
			return this
		}
		var I = k.param(b, U);
		if (f) {
			I = (I ? (I + "&" + f) : f)
		}
		if (X.type.toUpperCase() == "GET") {
			X.url += (X.url.indexOf("?") >= 0 ? "&": "?") + I;
			X.data = null
		} else {
			X.data = I
		}
		var O = [];
		if (X.resetForm) {
			O.push(function() {
				T.resetForm()
			})
		}
		if (X.clearForm) {
			O.push(function() {
				T.clearForm(X.includeHidden)
			})
		}
		if (!X.dataType && X.target) {
			var W = X.success ||
			function() {};
			O.push(function(m) {
				var n = X.replaceTarget ? "replaceWith": "html";
				k(X.target)[n](m).each(W, arguments)
			})
		} else {
			if (X.success) {
				O.push(X.success)
			}
		}
		X.success = function(m, r, s) {
			var o = X.context || this;
			for (var p = 0,
			n = O.length; p < n; p++) {
				O[p].apply(o, [m, r, s || T, T])
			}
		};
		if (X.error) {
			var q = X.error;
			X.error = function(m, p, o) {
				var n = X.context || this;
				q.apply(n, [m, p, o, T])
			}
		}
		if (X.complete) {
			var Z = X.complete;
			X.complete = function(m, o) {
				var n = X.context || this;
				Z.apply(n, [m, o, T])
			}
		}
		var J = k('input[type=file]:enabled[value!=""]', this);
		var S = J.length > 0;
		var Q = "multipart/form-data";
		var L = (T.attr("enctype") == Q || T.attr("encoding") == Q);
		var M = h.fileapi && h.formdata;
		g("fileAPI :" + M);
		var K = (S || L) && !M;
		var a;
		if (X.iframe !== false && (X.iframe || K)) {
			if (X.closeKeepAlive) {
				k.get(X.closeKeepAlive,
				function() {
					a = P(b)
				})
			} else {
				a = P(b)
			}
		} else {
			if ((S || L) && M) {
				a = d(b)
			} else {
				a = k.ajax(X)
			}
		}
		T.removeData("jqxhr").data("jqxhr", a);
		for (var R = 0; R < H.length; R++) {
			H[R] = null
		}
		this.trigger("form-submit-notify", [this, X]);
		return this;
		function e(m) {
			var s = k.param(m).split("&");
			var r = s.length;
			var o = [];
			var n, p;
			for (n = 0; n < r; n++) {
				s[n] = s[n].replace(/\+/g, " ");
				p = s[n].split("=");
				o.push([decodeURIComponent(p[0]), decodeURIComponent(p[1])])
			}
			return o
		}
		function d(r) {
			var o = new FormData();
			for (var p = 0; p < r.length; p++) {
				o.append(r[p].name, r[p].value)
			}
			if (X.extraData) {
				var s = e(X.extraData);
				for (p = 0; p < s.length; p++) {
					if (s[p]) {
						o.append(s[p][0], s[p][1])
					}
				}
			}
			X.data = null;
			var m = k.extend(true, {},
			k.ajaxSettings, X, {
				contentType: false,
				processData: false,
				cache: false,
				type: Y || "POST"
			});
			if (X.uploadProgress) {
				m.xhr = function() {
					var t = jQuery.ajaxSettings.xhr();
					if (t.upload) {
						t.upload.addEventListener("progress",
						function(u) {
							var v = 0;
							var x = u.loaded || u.position;
							var w = u.total;
							if (u.lengthComputable) {
								v = Math.ceil(x / w * 100)
							}
							X.uploadProgress(u, x, w, v)
						},
						false)
					}
					return t
				}
			}
			m.data = null;
			var n = m.beforeSend;
			m.beforeSend = function(t, u) {
				u.data = o;
				if (n) {
					n.call(this, t, u)
				}
			};
			return k.ajax(m)
		}
		function P(aj) {
			var p = T[0],
			s,
			ap,
			r,
			al,
			ao,
			G,
			B,
			E,
			D,
			am,
			an,
			v;
			var C = k.Deferred();
			if (aj) {
				for (ap = 0; ap < H.length; ap++) {
					s = k(H[ap]);
					if (l) {
						s.prop("disabled", false)
					} else {
						s.removeAttr("disabled")
					}
				}
			}
			r = k.extend(true, {},
			k.ajaxSettings, X);
			r.context = r.context || r;
			ao = "jqFormIO" + (new Date().getTime());
			if (r.iframeTarget) {
				G = k(r.iframeTarget);
				am = G.attr2("name");
				if (!am) {
					G.attr2("name", ao)
				} else {
					ao = am
				}
			} else {
				G = k('<iframe name="' + ao + '" src="' + r.iframeSrc + '" />');
				G.css({
					position: "absolute",
					top: "-1000px",
					left: "-1000px"
				})
			}
			B = G[0];
			E = {
				aborted: 0,
				responseText: null,
				responseXML: null,
				status: 0,
				statusText: "n/a",
				getAllResponseHeaders: function() {},
				getResponseHeader: function() {},
				setRequestHeader: function() {},
				abort: function(ab) {
					var aa = (ab === "timeout" ? "timeout": "aborted");
					g("aborting upload... " + aa);
					this.aborted = 1;
					try {
						if (B.contentWindow.document.execCommand) {
							B.contentWindow.document.execCommand("Stop")
						}
					} catch(ac) {}
					G.attr("src", r.iframeSrc);
					E.error = aa;
					if (r.error) {
						r.error.call(r.context, E, aa, ab)
					}
					if (al) {
						k.event.trigger("ajaxError", [E, r, aa])
					}
					if (r.complete) {
						r.complete.call(r.context, E, aa)
					}
				}
			};
			al = r.global;
			if (al && 0 === k.active++) {
				k.event.trigger("ajaxStart")
			}
			if (al) {
				k.event.trigger("ajaxSend", [E, r])
			}
			if (r.beforeSend && r.beforeSend.call(r.context, E, r) === false) {
				if (r.global) {
					k.active--
				}
				C.reject();
				return C
			}
			if (E.aborted) {
				C.reject();
				return C
			}
			D = p.clk;
			if (D) {
				am = D.name;
				if (am && !D.disabled) {
					r.extraData = r.extraData || {};
					r.extraData[am] = D.value;
					if (D.type == "image") {
						r.extraData[am + ".x"] = p.clk_x;
						r.extraData[am + ".y"] = p.clk_y
					}
				}
			}
			var t = 1;
			var z = 2;
			function x(ac) {
				var aa = null;
				try {
					if (ac.contentWindow) {
						aa = ac.contentWindow.document
					}
				} catch(ab) {
					g("cannot get iframe.contentWindow document: " + ab)
				}
				if (aa) {
					return aa
				}
				try {
					aa = ac.contentDocument ? ac.contentDocument: ac.document
				} catch(ab) {
					g("cannot get iframe.contentDocument: " + ab);
					aa = ac.document
				}
				return aa
			}
			var u = k("meta[name=csrf-token]").attr("content");
			var w = k("meta[name=csrf-param]").attr("content");
			if (w && u) {
				r.extraData = r.extraData || {};
				r.extraData[w] = u
			}
			function ar() {
				var ag = T.attr2("target"),
				ab = T.attr2("action");
				p.setAttribute("target", ao);
				if (!Y) {
					p.setAttribute("method", "POST")
				}
				if (ab != r.url) {
					p.setAttribute("action", r.url)
				}
				if (!r.skipEncodingOverride && (!Y || /post/i.test(Y))) {
					T.attr({
						encoding: "multipart/form-data",
						enctype: "multipart/form-data"
					})
				}
				if (r.timeout) {
					v = setTimeout(function() {
						an = true;
						m(t)
					},
					r.timeout)
				}
				function af() {
					try {
						var ah = x(B).readyState;
						g("state = " + ah);
						if (ah && ah.toLowerCase() == "uninitialized") {
							setTimeout(af, 50)
						}
					} catch(aq) {
						g("Server abort: ", aq, " (", aq.name, ")");
						m(z);
						if (v) {
							clearTimeout(v)
						}
						v = undefined
					}
				}
				var aa = [];
				try {
					if (r.extraData) {
						for (var ac in r.extraData) {
							if (r.extraData.hasOwnProperty(ac)) {
								if (k.isPlainObject(r.extraData[ac]) && r.extraData[ac].hasOwnProperty("name") && r.extraData[ac].hasOwnProperty("value")) {
									aa.push(k('<input type="hidden" name="' + r.extraData[ac].name + '">').val(r.extraData[ac].value).appendTo(p)[0])
								} else {
									aa.push(k('<input type="hidden" name="' + ac + '">').val(r.extraData[ac]).appendTo(p)[0])
								}
							}
						}
					}
					if (!r.iframeTarget) {
						G.appendTo("body");
						if (B.attachEvent) {
							B.attachEvent("onload", m)
						} else {
							B.addEventListener("load", m, false)
						}
					}
					setTimeout(af, 15);
					try {
						p.submit()
					} catch(ae) {
						var ad = document.createElement("form").submit;
						ad.apply(p)
					}
				} finally {
					p.setAttribute("action", ab);
					if (ag) {
						p.setAttribute("target", ag)
					} else {
						T.removeAttr("target")
					}
					k(aa).remove()
				}
			}
			if (r.forceSync) {
				ar()
			} else {
				setTimeout(ar, 10)
			}
			var ai, F, ak = 50,
			n;
			function m(af) {
				if (E.aborted || n) {
					return
				}
				F = x(B);
				if (!F) {
					g("cannot access response document");
					af = z
				}
				if (af === t && E) {
					E.abort("timeout");
					C.reject(E, "timeout");
					return
				} else {
					if (af == z && E) {
						E.abort("server abort");
						C.reject(E, "error", "server abort");
						return
					}
				}
				if (!F || F.location.href == r.iframeSrc) {
					if (!an) {
						return
					}
				}
				if (B.detachEvent) {
					B.detachEvent("onload", m)
				} else {
					B.removeEventListener("load", m, false)
				}
				var ah = "success",
				ad;
				try {
					if (an) {
						throw "timeout"
					}
					var aq = r.dataType == "xml" || F.XMLDocument || k.isXMLDoc(F);
					g("isXml=" + aq);
					if (!aq && window.opera && (F.body === null || !F.body.innerHTML)) {
						if (--ak) {
							g("requeing onLoad callback, DOM not available");
							setTimeout(m, 250);
							return
						}
					}
					var ac = F.body ? F.body: F.documentElement;
					E.responseText = ac ? ac.innerHTML: null;
					E.responseXML = F.XMLDocument ? F.XMLDocument: F;
					if (aq) {
						r.dataType = "xml"
					}
					E.getResponseHeader = function(at) {
						var au = {
							"content-type": r.dataType
						};
						return au[at]
					};
					if (ac) {
						E.status = Number(ac.getAttribute("status")) || E.status;
						E.statusText = ac.getAttribute("statusText") || E.statusText
					}
					var aa = (r.dataType || "").toLowerCase();
					var ae = /(json|script|text)/.test(aa);
					if (ae || r.textarea) {
						var ag = F.getElementsByTagName("textarea")[0];
						if (ag) {
							E.responseText = ag.value;
							E.status = Number(ag.getAttribute("status")) || E.status;
							E.statusText = ag.getAttribute("statusText") || E.statusText
						} else {
							if (ae) {
								var aw = F.getElementsByTagName("pre")[0];
								var ab = F.getElementsByTagName("body")[0];
								if (aw) {
									E.responseText = aw.textContent ? aw.textContent: aw.innerText
								} else {
									if (ab) {
										E.responseText = ab.textContent ? ab.textContent: ab.innerText
									}
								}
							}
						}
					} else {
						if (aa == "xml" && !E.responseXML && E.responseText) {
							E.responseXML = o(E.responseText)
						}
					}
					try {
						ai = A(E, aa, r)
					} catch(av) {
						ah = "parsererror";
						E.error = ad = (av || ah)
					}
				} catch(av) {
					g("error caught: ", av);
					ah = "error";
					E.error = ad = (av || ah)
				}
				if (E.aborted) {
					g("upload aborted");
					ah = null
				}
				if (E.status) {
					ah = (E.status >= 200 && E.status < 300 || E.status === 304) ? "success": "error"
				}
				if (ah === "success") {
					if (r.success) {
						r.success.call(r.context, ai, "success", E)
					}
					C.resolve(E.responseText, "success", E);
					if (al) {
						k.event.trigger("ajaxSuccess", [E, r])
					}
				} else {
					if (ah) {
						if (ad === undefined) {
							ad = E.statusText
						}
						if (r.error) {
							r.error.call(r.context, E, ah, ad)
						}
						C.reject(E, "error", ad);
						if (al) {
							k.event.trigger("ajaxError", [E, r, ad])
						}
					}
				}
				if (al) {
					k.event.trigger("ajaxComplete", [E, r])
				}
				if (al && !--k.active) {
					k.event.trigger("ajaxStop")
				}
				if (r.complete) {
					r.complete.call(r.context, E, ah)
				}
				n = true;
				if (r.timeout) {
					clearTimeout(v)
				}
				setTimeout(function() {
					if (!r.iframeTarget) {
						G.remove()
					}
					E.responseXML = null
				},
				100)
			}
			var o = k.parseXML ||
			function(ab, aa) {
				if (window.ActiveXObject) {
					aa = new ActiveXObject("Microsoft.XMLDOM");
					aa.async = "false";
					aa.loadXML(ab)
				} else {
					aa = (new DOMParser()).parseFromString(ab, "text/xml")
				}
				return (aa && aa.documentElement && aa.documentElement.nodeName != "parsererror") ? aa: null
			};
			var y = k.parseJSON ||
			function(aa) {
				return window["eval"]("(" + aa + ")")
			};
			var A = function(ac, ae, af) {
				var aa = ac.getResponseHeader("content-type") || "",
				ab = ae === "xml" || !ae && aa.indexOf("xml") >= 0,
				ad = ab ? ac.responseXML: ac.responseText;
				if (ab && ad.documentElement.nodeName === "parsererror") {
					if (k.error) {
						k.error("parsererror")
					}
				}
				if (af && af.dataFilter) {
					ad = af.dataFilter(ad, ae)
				}
				if (typeof ad === "string") {
					if (ae === "json" || !ae && aa.indexOf("json") >= 0) {
						ad = y(ad)
					} else {
						if (ae === "script" || !ae && aa.indexOf("javascript") >= 0) {
							k.globalEval(ad)
						}
					}
				}
				return ad
			};
			return C
		}
	};
	k.fn.ajaxForm = function(b) {
		b = b || {};
		b.delegation = b.delegation && k.isFunction(k.fn.on);
		if (!b.delegation && this.length === 0) {
			var a = {
				s: this.selector,
				c: this.context
			};
			if (!k.isReady && a.s) {
				g("DOM not ready, queuing ajaxForm");
				k(function() {
					k(a.s, a.c).ajaxForm(b)
				});
				return this
			}
			g("terminating; zero elements found by selector" + (k.isReady ? "": " (DOM not ready)"));
			return this
		}
		if (b.delegation) {
			k(document).off("submit.form-plugin", this.selector, i).off("click.form-plugin", this.selector, j).on("submit.form-plugin", this.selector, b, i).on("click.form-plugin", this.selector, b, j);
			return this
		}
		return this.ajaxFormUnbind().bind("submit.form-plugin", b, i).bind("click.form-plugin", b, j)
	};
	function i(a) {
		var b = a.data;
		if (!a.isDefaultPrevented()) {
			a.preventDefault();
			k(this).ajaxSubmit(b)
		}
	}
	function j(f) {
		var a = f.target;
		var c = k(a);
		if (! (c.is("[type=submit],[type=image]"))) {
			var d = c.closest("[type=submit]");
			if (d.length === 0) {
				return
			}
			a = d[0]
		}
		var b = this;
		b.clk = a;
		if (a.type == "image") {
			if (f.offsetX !== undefined) {
				b.clk_x = f.offsetX;
				b.clk_y = f.offsetY
			} else {
				if (typeof k.fn.offset == "function") {
					var e = c.offset();
					b.clk_x = f.pageX - e.left;
					b.clk_y = f.pageY - e.top
				} else {
					b.clk_x = f.pageX - a.offsetLeft;
					b.clk_y = f.pageY - a.offsetTop
				}
			}
		}
		setTimeout(function() {
			b.clk = b.clk_x = b.clk_y = null
		},
		100)
	}
	k.fn.ajaxFormUnbind = function() {
		return this.unbind("submit.form-plugin click.form-plugin")
	};
	k.fn.formToArray = function(x, b) {
		var y = [];
		if (this.length === 0) {
			return y
		}
		var f = this[0];
		var c = x ? f.getElementsByTagName("*") : f.elements;
		if (!c) {
			return y
		}
		var D, a, d, v, e, A, n;
		for (D = 0, A = c.length; D < A; D++) {
			e = c[D];
			d = e.name;
			if (!d || e.disabled) {
				continue
			}
			if (x && f.clk && e.type == "image") {
				if (f.clk == e) {
					y.push({
						name: d,
						value: k(e).val(),
						type: e.type
					});
					y.push({
						name: d + ".x",
						value: f.clk_x
					},
					{
						name: d + ".y",
						value: f.clk_y
					})
				}
				continue
			}
			v = k.fieldValue(e, true);
			if (v && v.constructor == Array) {
				if (b) {
					b.push(e)
				}
				for (a = 0, n = v.length; a < n; a++) {
					y.push({
						name: d,
						value: v[a]
					})
				}
			} else {
				if (h.fileapi && e.type == "file") {
					if (b) {
						b.push(e)
					}
					var C = e.files;
					if (C.length) {
						for (a = 0; a < C.length; a++) {
							y.push({
								name: d,
								value: C[a],
								type: e.type
							})
						}
					} else {
						y.push({
							name: d,
							value: "",
							type: e.type
						})
					}
				} else {
					if (v !== null && typeof v != "undefined") {
						if (b) {
							b.push(e)
						}
						y.push({
							name: d,
							value: v,
							type: e.type,
							required: e.required
						})
					}
				}
			}
		}
		if (!x && f.clk) {
			var B = k(f.clk),
			z = B[0];
			d = z.name;
			if (d && !z.disabled && z.type == "image") {
				y.push({
					name: d,
					value: B.val()
				});
				y.push({
					name: d + ".x",
					value: f.clk_x
				},
				{
					name: d + ".y",
					value: f.clk_y
				})
			}
		}
		return y
	};
	k.fn.formSerialize = function(a) {
		return k.param(this.formToArray(a))
	};
	k.fn.fieldSerialize = function(a) {
		var b = [];
		this.each(function() {
			var c = this.name;
			if (!c) {
				return
			}
			var e = k.fieldValue(this, a);
			if (e && e.constructor == Array) {
				for (var d = 0,
				f = e.length; d < f; d++) {
					b.push({
						name: c,
						value: e[d]
					})
				}
			} else {
				if (e !== null && typeof e != "undefined") {
					b.push({
						name: this.name,
						value: e
					})
				}
			}
		});
		return k.param(b)
	};
	k.fn.fieldValue = function(e) {
		for (var f = [], b = 0, d = this.length; b < d; b++) {
			var a = this[b];
			var c = k.fieldValue(a, e);
			if (c === null || typeof c == "undefined" || (c.constructor == Array && !c.length)) {
				continue
			}
			if (c.constructor == Array) {
				k.merge(f, c)
			} else {
				f.push(c)
			}
		}
		return f
	};
	k.fieldValue = function(a, n) {
		var y = a.name,
		e = a.type,
		c = a.tagName.toLowerCase();
		if (n === undefined) {
			n = true
		}
		if (n && (!y || a.disabled || e == "reset" || e == "button" || (e == "checkbox" || e == "radio") && !a.checked || (e == "submit" || e == "image") && a.form && a.form.clk != a || c == "select" && a.selectedIndex == -1)) {
			return null
		}
		if (c == "select") {
			var f = a.selectedIndex;
			if (f < 0) {
				return null
			}
			var b = [],
			z = a.options;
			var v = (e == "select-one");
			var d = (v ? f + 1 : z.length);
			for (var w = (v ? f: 0); w < d; w++) {
				var t = z[w];
				if (t.selected) {
					var x = t.value;
					if (!x) {
						x = (t.attributes && t.attributes.value && !(t.attributes.value.specified)) ? t.text: t.value
					}
					if (v) {
						return x
					}
					b.push(x)
				}
			}
			return b
		}
		return k(a).val()
	};
	k.fn.clearForm = function(a) {
		return this.each(function() {
			k("input,select,textarea", this).clearFields(a)
		})
	};
	k.fn.clearFields = k.fn.clearInputs = function(b) {
		var a = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
		return this.each(function() {
			var c = this.type,
			d = this.tagName.toLowerCase();
			if (a.test(c) || d == "textarea") {
				this.value = ""
			} else {
				if (c == "checkbox" || c == "radio") {
					this.checked = false
				} else {
					if (d == "select") {
						this.selectedIndex = -1
					} else {
						if (c == "file") {
							if (/MSIE/.test(navigator.userAgent)) {
								k(this).replaceWith(k(this).clone(true))
							} else {
								k(this).val("")
							}
						} else {
							if (b) {
								if ((b === true && /hidden/.test(c)) || (typeof b == "string" && k(this).is(b))) {
									this.value = ""
								}
							}
						}
					}
				}
			}
		})
	};
	k.fn.resetForm = function() {
		return this.each(function() {
			if (typeof this.reset == "function" || (typeof this.reset == "object" && !this.reset.nodeType)) {
				this.reset()
			}
		})
	};
	k.fn.enable = function(a) {
		if (a === undefined) {
			a = true
		}
		return this.each(function() {
			this.disabled = !a
		})
	};
	k.fn.selected = function(a) {
		if (a === undefined) {
			a = true
		}
		return this.each(function() {
			var b = this.type;
			if (b == "checkbox" || b == "radio") {
				this.checked = a
			} else {
				if (this.tagName.toLowerCase() == "option") {
					var c = k(this).parent("select");
					if (a && c[0] && c[0].type == "select-one") {
						c.find("option").selected(false)
					}
					this.selected = a
				}
			}
		})
	};
	k.fn.ajaxSubmit.debug = false;
	function g() {
		if (!k.fn.ajaxSubmit.debug) {
			return
		}
		var a = "[jquery.form] " + Array.prototype.join.call(arguments, "");
		if (window.console && window.console.log) {
			window.console.log(a)
		} else {
			if (window.opera && window.opera.postError) {
				window.opera.postError(a)
			}
		}
	}
})(jQuery);
/*!
 * jQuery Validation Plugin 1.11.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 Jörn Zaefferer
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
(function(b) {
	b.extend(b.fn, {
		validate: function(a) {
			if (!this.length) {
				if (a && a.debug && window.console) {
					console.warn("Nothing selected, can't validate, returning nothing.")
				}
				return
			}
			var d = b.data(this[0], "validator");
			if (d) {
				return d
			}
			this["novalidate"] = "novalidate";
			d = new b.validator(a, this[0]);
			b.data(this[0], "validator", d);
			if (d.settings.onsubmit) {
				this.validateDelegate(":submit", "click",
				function(c) {
					if (d.settings.submitHandler) {
						d.submitButton = c.target
					}
					if (b(c.target).hasClass("cancel")) {
						d.cancelSubmit = true
					}
					if (b(c.target).attr("formnovalidate") !== undefined) {
						d.cancelSubmit = true
					}
				});
				this.submit(function(f) {
					if (d.settings.debug) {
						f.preventDefault()
					}
					function c() {
						var e;
						if (d.settings.submitHandler) {
							if (d.submitButton) {
								e = b("<input type='hidden'/>").attr("name", d.submitButton.name).val(b(d.submitButton).val()).appendTo(d.currentForm)
							}
							d.settings.submitHandler.call(d, d.currentForm, f);
							if (d.submitButton) {
								e.remove()
							}
							return false
						}
						return true
					}
					if (d.cancelSubmit) {
						d.cancelSubmit = false;
						return c()
					}
					if (d.form()) {
						if (d.pendingRequest) {
							d.formSubmitted = true;
							return false
						}
						return c()
					} else {
						d.focusInvalid();
						return false
					}
				})
			}
			return d
		},
		valid: function() {
			if (b(this[0]).is("form")) {
				return this.validate().form()
			} else {
				var d = true;
				var a = b(this[0].form).validate();
				this.each(function() {
					d = d && a.element(this)
				});
				return d
			}
		},
		removeAttrs: function(e) {
			var a = {},
			f = this;
			b.each(e.split(/\s/),
			function(d, c) {
				a[c] = f.attr(c);
				f.removeAttr(c)
			});
			return a
		},
		rules: function(o, r) {
			var m = this[0];
			if (o) {
				var p = b.data(m.form, "validator").settings;
				var k = p.rules;
				var a = b.validator.staticRules(m);
				switch (o) {
				case "add":
					b.extend(a, b.validator.normalizeRule(r));
					delete a.messages;
					k[m.name] = a;
					if (r.messages) {
						p.messages[m.name] = b.extend(p.messages[m.name], r.messages)
					}
					break;
				case "remove":
					if (!r) {
						delete k[m.name];
						return a
					}
					var l = {};
					b.each(r.split(/\s/),
					function(d, c) {
						l[c] = a[c];
						delete a[c]
					});
					return l
				}
			}
			var n = b.validator.normalizeRules(b.extend({},
			b.validator.classRules(m), b.validator.attributeRules(m), b.validator.dataRules(m), b.validator.staticRules(m)), m);
			if (n.required) {
				var q = n.required;
				delete n.required;
				n = b.extend({
					required: q
				},
				n)
			}
			return n
		}
	});
	b.extend(b.expr[":"], {
		blank: function(a) {
			return ! b.trim("" + b(a).val())
		},
		filled: function(a) {
			return !! b.trim("" + b(a).val())
		},
		unchecked: function(a) {
			return ! b(a).prop("checked")
		}
	});
	b.validator = function(a, d) {
		this.settings = b.extend(true, {},
		b.validator.defaults, a);
		this.currentForm = d;
		this.init()
	};
	b.validator.format = function(a, d) {
		if (arguments.length === 1) {
			return function() {
				var c = b.makeArray(arguments);
				c.unshift(a);
				return b.validator.format.apply(this, c)
			}
		}
		if (arguments.length > 2 && d.constructor !== Array) {
			d = b.makeArray(arguments).slice(1)
		}
		if (d.constructor !== Array) {
			d = [d]
		}
		b.each(d,
		function(f, c) {
			a = a.replace(new RegExp("\\{" + f + "\\}", "g"),
			function() {
				return c
			})
		});
		return a
	};
	b.extend(b.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			validClass: "valid",
			errorElement: "label",
			focusInvalid: true,
			errorContainer: b([]),
			errorLabelContainer: b([]),
			onsubmit: true,
			ignore: ":hidden",
			ignoreTitle: false,
			onfocusin: function(a, d) {
				this.lastActive = a;
				if (this.settings.focusCleanup && !this.blockFocusCleanup) {
					if (this.settings.unhighlight) {
						this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass)
					}
					this.addWrapper(this.errorsFor(a)).hide()
				}
			},
			onfocusout: function(a, d) {
				if (!this.checkable(a) && (a.name in this.submitted || !this.optional(a))) {
					this.element(a)
				}
			},
			onkeyup: function(a, d) {
				if (d.which === 9 && this.elementValue(a) === "") {
					return
				} else {
					if (a.name in this.submitted || a === this.lastElement) {
						this.element(a)
					}
				}
			},
			onclick: function(a, d) {
				if (a.name in this.submitted) {
					this.element(a)
				} else {
					if (a.parentNode.name in this.submitted) {
						this.element(a.parentNode)
					}
				}
			},
			highlight: function(e, a, f) {
				if (e.type === "radio") {
					this.findByName(e.name).addClass(a).removeClass(f)
				} else {
					b(e).addClass(a).removeClass(f)
				}
			},
			unhighlight: function(e, a, f) {
				if (e.type === "radio") {
					this.findByName(e.name).removeClass(a).addClass(f)
				} else {
					b(e).removeClass(a).addClass(f)
				}
			}
		},
		setDefaults: function(a) {
			b.extend(b.validator.defaults, a)
		},
		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date (ISO).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			creditcard: "Please enter a valid credit card number.",
			equalTo: "Please enter the same value again.",
			maxlength: b.validator.format("Please enter no more than {0} characters."),
			minlength: b.validator.format("Please enter at least {0} characters."),
			rangelength: b.validator.format("Please enter a value between {0} and {1} characters long."),
			range: b.validator.format("Please enter a value between {0} and {1}."),
			max: b.validator.format("Please enter a value less than or equal to {0}."),
			min: b.validator.format("Please enter a value greater than or equal to {0}.")
		},
		autoCreateRanges: false,
		prototype: {
			init: function() {
				this.labelContainer = b(this.settings.errorLabelContainer);
				this.errorContext = this.labelContainer.length && this.labelContainer || b(this.currentForm);
				this.containers = b(this.settings.errorContainer).add(this.settings.errorLabelContainer);
				this.submitted = {};
				this.valueCache = {};
				this.pendingRequest = 0;
				this.pending = {};
				this.invalid = {};
				this.reset();
				var a = (this.groups = {});
				b.each(this.settings.groups,
				function(d, c) {
					if (typeof c === "string") {
						c = c.split(/\s/)
					}
					b.each(c,
					function(i, j) {
						a[j] = d
					})
				});
				var e = this.settings.rules;
				b.each(e,
				function(d, c) {
					e[d] = b.validator.normalizeRule(c)
				});
				function f(c) {
					var d = b.data(this[0].form, "validator"),
					h = "on" + c.type.replace(/^validate/, "");
					if (d.settings[h]) {
						d.settings[h].call(d, this[0], c)
					}
				}
				b(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", f).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", f);
				if (this.settings.invalidHandler) {
					b(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
				}
			},
			form: function() {
				this.checkForm();
				b.extend(this.submitted, this.errorMap);
				this.invalid = b.extend({},
				this.errorMap);
				if (!this.valid()) {
					b(this.currentForm).triggerHandler("invalid-form", [this])
				}
				this.showErrors();
				return this.valid()
			},
			checkForm: function() {
				this.prepareForm();
				for (var a = 0,
				d = (this.currentElements = this.elements()); d[a]; a++) {
					this.check(d[a])
				}
				return this.valid()
			},
			element: function(d) {
				d = this.validationTargetFor(this.clean(d));
				this.lastElement = d;
				this.prepareElement(d);
				this.currentElements = b(d);
				var a = this.check(d) !== false;
				if (a) {
					delete this.invalid[d.name]
				} else {
					this.invalid[d.name] = true
				}
				if (!this.numberOfInvalids()) {
					this.toHide = this.toHide.add(this.containers)
				}
				this.showErrors();
				return a
			},
			showErrors: function(d) {
				if (d) {
					b.extend(this.errorMap, d);
					this.errorList = [];
					for (var a in d) {
						this.errorList.push({
							message: d[a],
							element: this.findByName(a)[0]
						})
					}
					this.successList = b.grep(this.successList,
					function(c) {
						return ! (c.name in d)
					})
				}
				if (this.settings.showErrors) {
					this.settings.showErrors.call(this, this.errorMap, this.errorList)
				} else {
					this.defaultShowErrors()
				}
			},
			resetForm: function() {
				if (b.fn.resetForm) {
					b(this.currentForm).resetForm()
				}
				this.submitted = {};
				this.lastElement = null;
				this.prepareForm();
				this.hideErrors();
				this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
			},
			numberOfInvalids: function() {
				return this.objectLength(this.invalid)
			},
			objectLength: function(e) {
				var f = 0;
				for (var a in e) {
					f++
				}
				return f
			},
			hideErrors: function() {
				this.addWrapper(this.toHide).hide()
			},
			valid: function() {
				return this.size() === 0
			},
			size: function() {
				return this.errorList.length
			},
			focusInvalid: function() {
				if (this.settings.focusInvalid) {
					try {
						b(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
					} catch(a) {}
				}
			},
			findLastActive: function() {
				var a = this.lastActive;
				return a && b.grep(this.errorList,
				function(d) {
					return d.element.name === a.name
				}).length === 1 && a
			},
			elements: function() {
				var d = this,
				a = {};
				return b(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
					if (typeof this.name == undefined || typeof this.name == "undefined" || this.name == "") {
						return false
					}
					if (!this.name && d.settings.debug && window.console) {
						console.error("%o has no name assigned", this)
					}
					if (this.name in a || !d.objectLength(b(this).rules())) {
						return false
					}
					a[this.name] = true;
					return true
				})
			},
			clean: function(a) {
				return b(a)[0]
			},
			errors: function() {
				var a = this.settings.errorClass.replace(" ", ".");
				return b(this.settings.errorElement + "." + a, this.errorContext)
			},
			reset: function() {
				this.successList = [];
				this.errorList = [];
				this.errorMap = {};
				this.toShow = b([]);
				this.toHide = b([]);
				this.currentElements = b([])
			},
			prepareForm: function() {
				this.reset();
				this.toHide = this.errors().add(this.containers)
			},
			prepareElement: function(a) {
				this.reset();
				this.toHide = this.errorsFor(a)
			},
			elementValue: function(a) {
				var f = b(a).attr("type"),
				e = b(a).val();
				if (f === "radio" || f === "checkbox") {
					return b("input[name='" + b(a).attr("name") + "']:checked").val()
				}
				if (typeof e === "string") {
					return e.replace(/\r/g, "")
				}
				return e
			},
			check: function(l) {
				l = this.validationTargetFor(this.clean(l));
				var n = b(l).rules();
				var k = false;
				var o = this.elementValue(l);
				var p;
				for (var m in n) {
					var a = {
						method: m,
						parameters: n[m]
					};
					try {
						p = b.validator.methods[m].call(this, o, l, a.parameters);
						if (p === "dependency-mismatch") {
							k = true;
							continue
						}
						k = false;
						if (p === "pending") {
							this.toHide = this.toHide.not(this.errorsFor(l));
							return
						}
						if (!p) {
							this.formatAndAdd(l, a);
							return false
						}
					} catch(e) {
						if (this.settings.debug && window.console) {
							console.log("Exception occurred when checking element " + l.id + ", check the '" + a.method + "' method.", e)
						}
						throw e
					}
				}
				if (k) {
					return
				}
				if (this.objectLength(n)) {
					this.successList.push(l)
				}
				return true
			},
			customDataMessage: function(a, d) {
				return b(a).data("msg-" + d.toLowerCase()) || (a.attributes && b(a).attr("data-msg-" + d.toLowerCase()))
			},
			customMessage: function(f, e) {
				var a = this.settings.messages[f];
				return a && (a.constructor === String ? a: a[e])
			},
			findDefined: function() {
				for (var a = 0; a < arguments.length; a++) {
					if (arguments[a] !== undefined) {
						return arguments[a]
					}
				}
				return undefined
			},
			defaultMessage: function(a, d) {
				return this.findDefined(this.customMessage(a.name, d), this.customDataMessage(a, d), !this.settings.ignoreTitle && a.title || undefined, b.validator.messages[d], "<strong>Warning: No message defined for " + a.name + "</strong>")
			},
			formatAndAdd: function(h, f) {
				var g = this.defaultMessage(h, f.method),
				a = /\$?\{(\d+)\}/g;
				if (typeof g === "function") {
					g = g.call(this, f.parameters, h)
				} else {
					if (a.test(g)) {
						g = b.validator.format(g.replace(a, "{$1}"), f.parameters)
					}
				}
				this.errorList.push({
					message: g,
					element: h
				});
				this.errorMap[h.name] = g;
				this.submitted[h.name] = g
			},
			addWrapper: function(a) {
				if (this.settings.wrapper) {
					a = a.add(a.parent(this.settings.wrapper))
				}
				return a
			},
			defaultShowErrors: function() {
				var f, e;
				for (f = 0; this.errorList[f]; f++) {
					var a = this.errorList[f];
					if (this.settings.highlight) {
						this.settings.highlight.call(this, a.element, this.settings.errorClass, this.settings.validClass)
					}
					this.showLabel(a.element, a.message)
				}
				if (this.errorList.length) {
					this.toShow = this.toShow.add(this.containers)
				}
				if (this.settings.success) {
					for (f = 0; this.successList[f]; f++) {
						this.showLabel(this.successList[f])
					}
				}
				if (this.settings.unhighlight) {
					for (f = 0, e = this.validElements(); e[f]; f++) {
						this.settings.unhighlight.call(this, e[f], this.settings.errorClass, this.settings.validClass)
					}
				}
				this.toHide = this.toHide.not(this.toShow);
				this.hideErrors();
				this.addWrapper(this.toShow).show()
			},
			validElements: function() {
				return this.currentElements.not(this.invalidElements())
			},
			invalidElements: function() {
				return b(this.errorList).map(function() {
					return this.element
				})
			},
			showLabel: function(f, e) {
				var a = this.errorsFor(f);
				if (a.length) {
					a.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
					a.html(e)
				} else {
					a = b("<" + this.settings.errorElement + ">").attr("for", this.idOrName(f)).addClass(this.settings.errorClass).html(e || "");
					if (this.settings.wrapper) {
						a = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()
					}
					if (!this.labelContainer.append(a).length) {
						if (this.settings.errorPlacement) {
							this.settings.errorPlacement(a, b(f))
						} else {
							a.insertAfter(f)
						}
					}
				}
				if (!e && this.settings.success) {
					a.text("");
					if (typeof this.settings.success === "string") {
						a.addClass(this.settings.success)
					} else {
						this.settings.success(a, f)
					}
				}
				this.toShow = this.toShow.add(a)
			},
			errorsFor: function(d) {
				var a = this.idOrName(d);
				return this.errors().filter(function() {
					return b(this).attr("for") === a
				})
			},
			idOrName: function(a) {
				return this.groups[a.name] || (this.checkable(a) ? a.name: a.id || a.name)
			},
			validationTargetFor: function(a) {
				if (this.checkable(a)) {
					a = this.findByName(a.name).not(this.settings.ignore)[0]
				}
				return a
			},
			checkable: function(a) {
				return (/radio|checkbox/i).test(a.type)
			},
			findByName: function(a) {
				return b(this.currentForm).find("[name='" + a + "']")
			},
			getLength: function(d, a) {
				switch (a.nodeName.toLowerCase()) {
				case "select":
					return b("option:selected", a).length;
				case "input":
					if (this.checkable(a)) {
						return this.findByName(a.name).filter(":checked").length
					}
				}
				return d.length
			},
			depend: function(d, a) {
				return this.dependTypes[typeof d] ? this.dependTypes[typeof d](d, a) : true
			},
			dependTypes: {
				"boolean": function(d, a) {
					return d
				},
				string: function(d, a) {
					return !! b(d, a.form).length
				},
				"function": function(d, a) {
					return d(a)
				}
			},
			optional: function(a) {
				var d = this.elementValue(a);
				return ! b.validator.methods.required.call(this, d, a) && "dependency-mismatch"
			},
			startRequest: function(a) {
				if (!this.pending[a.name]) {
					this.pendingRequest++;
					this.pending[a.name] = true
				}
			},
			stopRequest: function(a, d) {
				this.pendingRequest--;
				if (this.pendingRequest < 0) {
					this.pendingRequest = 0
				}
				delete this.pending[a.name];
				if (d && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
					b(this.currentForm).submit();
					this.formSubmitted = false
				} else {
					if (!d && this.pendingRequest === 0 && this.formSubmitted) {
						b(this.currentForm).triggerHandler("invalid-form", [this]);
						this.formSubmitted = false
					}
				}
			},
			previousValue: function(a) {
				return b.data(a, "previousValue") || b.data(a, "previousValue", {
					old: null,
					valid: true,
					message: this.defaultMessage(a, "remote")
				})
			}
		},
		classRuleSettings: {
			required: {
				required: true
			},
			email: {
				email: true
			},
			url: {
				url: true
			},
			date: {
				date: true
			},
			dateISO: {
				dateISO: true
			},
			number: {
				number: true
			},
			digits: {
				digits: true
			},
			creditcard: {
				creditcard: true
			}
		},
		addClassRules: function(a, d) {
			if (a.constructor === String) {
				this.classRuleSettings[a] = d
			} else {
				b.extend(this.classRuleSettings, a)
			}
		},
		classRules: function(f) {
			var e = {};
			var a = b(f).attr("class");
			if (a) {
				b.each(a.split(" "),
				function() {
					if (this in b.validator.classRuleSettings) {
						b.extend(e, b.validator.classRuleSettings[this])
					}
				})
			}
			return e
		},
		attributeRules: function(l) {
			var i = {};
			var a = b(l);
			var k = a[0].getAttribute("type");
			for (var h in b.validator.methods) {
				var j;
				if (h === "required") {
					j = a.get(0).getAttribute(h);
					if (j === "") {
						j = true
					}
					j = !!j
				} else {
					j = a.attr(h)
				}
				if (/min|max/.test(h) && (k === null || /number|range|text/.test(k))) {
					j = Number(j)
				}
				if (j) {
					i[h] = j
				} else {
					if (k === h && k !== "range") {
						i[h] = true
					}
				}
			}
			if (i.maxlength && /-1|2147483647|524288/.test(i.maxlength)) {
				delete i.maxlength
			}
			return i
		},
		dataRules: function(j) {
			var g, i, h = {},
			a = b(j);
			for (g in b.validator.methods) {
				i = a.data("rule-" + g.toLowerCase());
				if (i !== undefined) {
					h[g] = i
				}
			}
			return h
		},
		staticRules: function(f) {
			var e = {};
			var a = b.data(f.form, "validator");
			if (a.settings.rules) {
				e = b.validator.normalizeRule(a.settings.rules[f.name]) || {}
			}
			return e
		},
		normalizeRules: function(d, a) {
			b.each(d,
			function(c, g) {
				if (g === false) {
					delete d[c];
					return
				}
				if (g.param || g.depends) {
					var h = true;
					switch (typeof g.depends) {
					case "string":
						h = !!b(g.depends, a.form).length;
						break;
					case "function":
						h = g.depends.call(a, a);
						break
					}
					if (h) {
						d[c] = g.param !== undefined ? g.param: true
					} else {
						delete d[c]
					}
				}
			});
			b.each(d,
			function(f, c) {
				d[f] = b.isFunction(c) ? c(a) : c
			});
			b.each(["minlength", "maxlength"],
			function() {
				if (d[this]) {
					d[this] = Number(d[this])
				}
			});
			b.each(["rangelength", "range"],
			function() {
				var c;
				if (d[this]) {
					if (b.isArray(d[this])) {
						d[this] = [Number(d[this][0]), Number(d[this][1])]
					} else {
						if (typeof d[this] === "string") {
							c = d[this].split(/[\s,]+/);
							d[this] = [Number(c[0]), Number(c[1])]
						}
					}
				}
			});
			if (b.validator.autoCreateRanges) {
				if (d.min && d.max) {
					d.range = [d.min, d.max];
					delete d.min;
					delete d.max
				}
				if (d.minlength && d.maxlength) {
					d.rangelength = [d.minlength, d.maxlength];
					delete d.minlength;
					delete d.maxlength
				}
			}
			return d
		},
		normalizeRule: function(d) {
			if (typeof d === "string") {
				var a = {};
				b.each(d.split(/\s/),
				function() {
					a[this] = true
				});
				d = a
			}
			return d
		},
		addMethod: function(a, e, f) {
			b.validator.methods[a] = e;
			b.validator.messages[a] = f !== undefined ? f: b.validator.messages[a];
			if (e.length < 3) {
				b.validator.addClassRules(a, b.validator.normalizeRule(a))
			}
		},
		methods: {
			required: function(h, a, f) {
				if (!this.depend(f, a)) {
					return "dependency-mismatch"
				}
				if (a.nodeName.toLowerCase() === "select") {
					var g = b(a).val();
					return g && g.length > 0
				}
				if (this.checkable(a)) {
					return this.getLength(h, a) > 0
				}
				return b.trim(h).length > 0
			},
			email: function(d, a) {
				return this.optional(a) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(d)
			},
			url: function(d, a) {
				return this.optional(a) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(d)
			},
			date: function(d, a) {
				return this.optional(a) || !/Invalid|NaN/.test(new Date(d).toString())
			},
			dateISO: function(d, a) {
				return this.optional(a) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(d)
			},
			number: function(d, a) {
				return this.optional(a) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(d)
			},
			digits: function(d, a) {
				return this.optional(a) || /^\d+$/.test(d)
			},
			creditcard: function(l, i) {
				if (this.optional(i)) {
					return "dependency-mismatch"
				}
				if (/[^0-9 \-]+/.test(l)) {
					return false
				}
				var k = 0,
				m = 0,
				n = false;
				l = l.replace(/\D/g, "");
				for (var j = l.length - 1; j >= 0; j--) {
					var a = l.charAt(j);
					m = parseInt(a, 10);
					if (n) {
						if ((m *= 2) > 9) {
							m -= 9
						}
					}
					k += m;
					n = !n
				}
				return (k % 10) === 0
			},
			minlength: function(g, a, f) {
				var h = b.isArray(g) ? g.length: this.getLength(b.trim(g), a);
				return this.optional(a) || h >= f
			},
			maxlength: function(g, a, f) {
				var h = b.isArray(g) ? g.length: this.getLength(b.trim(g), a);
				return this.optional(a) || h <= f
			},
			rangelength: function(g, a, f) {
				var h = b.isArray(g) ? g.length: this.getLength(b.trim(g), a);
				return this.optional(a) || (h >= f[0] && h <= f[1])
			},
			min: function(f, a, e) {
				return this.optional(a) || f >= e
			},
			max: function(f, a, e) {
				return this.optional(a) || f <= e
			},
			range: function(f, a, e) {
				return this.optional(a) || (f >= e[0] && f <= e[1])
			},
			equalTo: function(h, a, f) {
				var g = b(f);
				if (this.settings.onfocusout) {
					g.unbind(".validate-equalTo").bind("blur.validate-equalTo",
					function() {
						b(a).valid()
					})
				}
				return h === g.val()
			},
			accept: function(f, a, e) {
				e = typeof e == "string" ? e.replace(/,/g, "|") : "png|jpe?g|gif";
				return this.optional(a) || f.match(new RegExp(".(" + e + ")$", "i"))
			},
			differentFrom: function(h, a, f) {
				var g = b(f).unbind(".validate-equalTo").bind("blur.validate-equalTo",
				function() {
					b(a).valid()
				});
				return h != g.val()
			},
			validatPwd: function(h, a) {
				var f = true;
				var g = new RegExp("(?![a-z]+$|[0-9]+$|_+$)^[a-zA-Z0-9_]{6,}$");
				if (g.test(h)) {
					f = true
				} else {
					f = false
				}
				return this.optional(a) || f
			},
			remote: function(i, l, h) {
				if (this.optional(l)) {
					return "dependency-mismatch"
				}
				var k = this.previousValue(l);
				if (!this.settings.messages[l.name]) {
					this.settings.messages[l.name] = {}
				}
				k.originalMessage = this.settings.messages[l.name].remote;
				this.settings.messages[l.name].remote = k.message;
				h = typeof h === "string" && {
					url: h
				} || h;
				if (k.old === i) {
					return k.valid
				}
				k.old = i;
				var a = this;
				this.startRequest(l);
				var j = {};
				j[l.name] = i;
				b.ajax(b.extend(true, {
					url: h,
					mode: "abort",
					port: "validate" + l.name,
					dataType: "json",
					data: j,
					success: function(f) {
						a.settings.messages[l.name].remote = k.originalMessage;
						var d = f === true || f === "true";
						if (d) {
							var g = a.formSubmitted;
							a.prepareElement(l);
							a.formSubmitted = g;
							a.successList.push(l);
							delete a.invalid[l.name];
							a.showErrors()
						} else {
							var c = {};
							var e = f || a.defaultMessage(l, "remote");
							c[l.name] = k.message = b.isFunction(e) ? e(i) : e;
							a.invalid[l.name] = true;
							a.showErrors(c)
						}
						k.valid = d;
						a.stopRequest(l, d)
					}
				},
				h));
				return "pending"
			}
		}
	});
	b.format = b.validator.format
} (jQuery)); (function(e) {
	var d = {};
	if (e.ajaxPrefilter) {
		e.ajaxPrefilter(function(h, a, c) {
			var b = h.port;
			if (h.mode === "abort") {
				if (d[b]) {
					d[b].abort()
				}
				d[b] = c
			}
		})
	} else {
		var f = e.ajax;
		e.ajax = function(c) {
			var b = ("mode" in c ? c: e.ajaxSettings).mode,
			a = ("port" in c ? c: e.ajaxSettings).port;
			if (b === "abort") {
				if (d[a]) {
					d[a].abort()
				}
				d[a] = f.apply(this, arguments);
				return d[a]
			}
			return f.apply(this, arguments)
		}
	}
} (jQuery)); (function(b) {
	b.extend(b.fn, {
		validateDelegate: function(e, f, a) {
			return this.bind(f,
			function(d) {
				var c = b(d.target);
				if (c.is(e)) {
					return a.apply(c, arguments)
				}
			})
		}
	})
} (jQuery));
var messages = {
	"message.confirm": "您确认吗？",
	"message.info": "信息提示",
	"button.ok": "确认",
	"message.error": "提示"
}; (function(b) {
	b.extend(b.validator.messages, {
		required: "必选字段",
		remote: "请修正该字段",
		email: "请输入正确格式的电子邮件",
		url: "请输入合法的网址",
		date: "请输入合法的日期",
		dateISO: "请输入合法的日期 (ISO).",
		number: "请输入合法的数字",
		digits: "只能输入整数",
		creditcard: "请输入合法的信用卡号",
		equalTo: "请再次输入相同的值",
		accept: "请输入拥有合法后缀名的字符串",
		maxlength: b.validator.format("请输入一个长度最多是 {0} 的字符串"),
		minlength: b.validator.format("请输入一个长度最少是 {0} 的字符串"),
		rangelength: b.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
		range: b.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
		max: b.validator.format("请输入一个最大为 {0} 的值"),
		min: b.validator.format("请输入一个最小为 {0} 的值")
	})
} (jQuery));
/*! JsRender v1.0pre: http://github.com/BorisMoore/jsrender */
(function(aS, aY, am) {
	if (aY && aY.views || aS.jsviews) {
		return
	}
	var az = "v1.0pre",
	bg, aN, a2, aX, ao = "{",
	ap = "{",
	aH = "}",
	aJ = "}",
	a3 = "^",
	aW = /^(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
	aV = /(\()(?=\s*\()|(?:([([])\s*)?(?:([#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*!:?\/]|(=))\s*|([#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*\.|\s*\^)|[)\]])([([]?))|(\s+)/g,
	a8 = /\s*\n/g,
	aL = /\\(['"])/g,
	aD = /['"\\]/g,
	an = /\x08(~)?([^\x08]+)\x08/g,
	at = /^if\s/,
	ak = /<(\w+)[>\s]/,
	be = /<(\w+)[^>\/]*>[^>]*$/,
	bd = /[\x00`><"'&]/g,
	bi = bd,
	ax = 0,
	aB = 0,
	bh = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\x00": "&#0;",
		"'": "&#39;",
		'"': "&#34;",
		"`": "&#96;"
	},
	a5 = "data-jsv-tmpl",
	aj = [].slice,
	bc = {},
	a9 = {
		template: {
			compile: aR
		},
		tag: {
			compile: al
		},
		helper: {},
		converter: {}
	},
	bf = {
		jsviews: az,
		render: bc,
		settings: {
			delimiters: a0,
			debugMode: true,
			tryCatch: true
		},
		sub: {
			View: aI,
			Error: aF,
			tmplFn: aK,
			parse: aZ,
			extend: a1,
			error: ay,
			syntaxError: ba
		},
		_cnvt: aw,
		_tag: aP,
		_err: function(a) {
			return a7.debugMode ? ("Error: " + (a.message || a)) + ". ": ""
		}
	};
	function aF(a, b) {
		if (b && b.onError) {
			if (b.onError(a) === false) {
				return
			}
		}
		this.name = "JsRender Error";
		this.message = a || "JsRender error"
	}
	function a1(b, c) {
		var a;
		b = b || {};
		for (a in c) {
			b[a] = c[a]
		}
		return b
	} (aF.prototype = new Error()).constructor = aF;
	function a0(a, b, c) {
		if (!a6.rTag || arguments.length) {
			ao = a ? a.charAt(0) : ao;
			ap = a ? a.charAt(1) : ap;
			aH = b ? b.charAt(0) : aH;
			aJ = b ? b.charAt(1) : aJ;
			a3 = c || a3;
			a = "\\" + ao + "(\\" + a3 + ")?\\" + ap;
			b = "\\" + aH + "\\" + aJ;
			a2 = "(?:(?:(\\w+(?=[\\/\\s\\" + aH + "]))|(?:(\\w+)?(:)|(>)|!--((?:[^-]|-(?!-))*)--|(\\*)))\\s*((?:[^\\" + aH + "]|\\" + aH + "(?!\\" + aJ + "))*?)";
			a6.rTag = a2 + ")";
			a2 = new RegExp(a + a2 + "(\\/)?|(?:\\/(\\w+)))" + b, "g");
			aX = new RegExp("<.*>|([^\\\\]|^)[{}]|" + a + ".*" + b)
		}
		return [ao, ap, aH, aJ, a3]
	}
	function au(b, h) {
		if (!h) {
			h = b;
			b = am
		}
		var c, a, d, g, e = this,
		f = !h || h === "root";
		if (b) {
			g = e.type === h ? e: am;
			if (!g) {
				c = e.views;
				if (e._.useKey) {
					for (a in c) {
						if (g = c[a].get(b, h)) {
							break
						}
					}
				} else {
					for (a = 0, d = c.length; ! g && a < d; a++) {
						g = c[a].get(b, h)
					}
				}
			}
		} else {
			if (f) {
				while (e.parent.parent) {
					g = e = e.parent
				}
			} else {
				while (e && !g) {
					g = e.type === h ? e: am;
					e = e.parent
				}
			}
		}
		return g
	}
	function av() {
		var a = this.get("item");
		return a ? a.index: am
	}
	av.depends = function() {
		return [this.get("item"), "index"]
	};
	function a4(c) {
		var a, b = this,
		d = (b.ctx || {})[c];
		d = d === am ? b.getRsc("helpers", c) : d;
		if (d) {
			if (typeof d === "function") {
				a = function() {
					return d.apply(b, arguments)
				};
				a1(a, d)
			}
		}
		return a || d
	}
	function aw(a, c, b) {
		var d, e, g, h = +b === b && b,
		f = c.linkCtx;
		if (h) {
			b = (h = c.tmpl.bnds[h - 1])(c.data, c, bf)
		}
		g = b.args[0];
		if (a || h) {
			e = f && f.tag || {
				_: {
					inline: !f
				},
				tagName: a + ":",
				flow: true,
				_is: "tag"
			};
			e._.bnd = h;
			if (f) {
				f.tag = e;
				e.linkCtx = f;
				b.ctx = aO(b.ctx, f.view.ctx)
			}
			e.tagCtx = b;
			b.view = c;
			e.ctx = b.ctx || {};
			delete b.ctx;
			c._.tag = e;
			a = a !== "true" && a;
			if (a && ((d = c.getRsc("converters", a)) || ay("Unknown converter: {{" + a + ":"))) {
				e.depends = d.depends;
				g = d.apply(e, b.args)
			}
			g = h && c._.onRender ? c._.onRender(g, c, h) : g;
			c._.tag = am
		}
		return g
	}
	function aU(e, d) {
		var a, c = this,
		b = bf[e];
		a = b && b[d];
		while ((a === am) && c) {
			b = c.tmpl[e];
			a = b && b[d];
			c = c.parent
		}
		return a
	}
	function aP(w, u, o, j) {
		var m, g, a, i, r, l, h, c, b, d, y, s, f, q, p, n = "",
		t = +j === j && j,
		v = u.linkCtx || 0,
		e = u.ctx,
		x = o || u.tmpl,
		k = u._;
		if (w._is === "tag") {
			g = w;
			w = g.tagName
		}
		if (t) {
			j = (f = x.bnds[t - 1])(u.data, u, bf)
		}
		c = j.length;
		g = g || v.tag;
		for (h = 0; h < c; h++) {
			d = j[h];
			s = d.tmpl;
			s = d.content = s && x.tmpls[s - 1];
			o = d.props.tmpl;
			if (!h && (!o || !g)) {
				q = u.getRsc("tags", w) || ay("Unknown tag: {{" + w + "}}")
			}
			o = o || (g ? g._def: q).template || s;
			o = "" + o === o ? u.getRsc("templates", o) || aA(o) : o;
			a1(d, {
				tmpl: o,
				render: aq,
				index: h,
				view: u,
				ctx: aO(d.ctx, e)
			});
			if (!g) {
				if (q._ctr) {
					g = new q._ctr();
					p = !!g.init;
					g.attr = g.attr || q.attr || am
				} else {
					g = {
						render: q.render
					}
				}
				g._ = {
					inline: !v
				};
				if (v) {
					v.attr = g.attr = v.attr || g.attr;
					v.tag = g;
					g.linkCtx = v
				}
				if (g._.bnd = f || v) {
					g._.arrVws = {}
				}
				g.tagName = w;
				g.parent = l = e && e.tag,
				g._is = "tag";
				g._def = q
			}
			k.tag = g;
			d.tag = g;
			g.tagCtxs = j;
			if (!g.flow) {
				y = d.ctx = d.ctx || {};
				a = g.parents = y.parentTags = e && aO(y.parentTags, e.parentTags) || {};
				if (l) {
					a[l.tagName] = l
				}
				y.tag = g
			}
		}
		g.rendering = {};
		for (h = 0; h < c; h++) {
			d = g.tagCtx = j[h];
			g.ctx = d.ctx;
			if (!h && p) {
				g.init(d, v, g.ctx);
				p = am
			}
			if (m = g.render) {
				b = m.apply(g, d.args)
			}
			n += b !== am ? b: d.tmpl ? d.render() : ""
		}
		delete g.rendering;
		g.tagCtx = g.tagCtxs[0];
		g.ctx = g.tagCtx.ctx;
		if (g._.inline && (i = g.attr) && i !== "html") {
			n = i === "text" ? aT.html(n) : ""
		}
		return n = t && u._.onRender ? u._.onRender(n, u, t) : n
	}
	function aI(n, i, c, m, h, g, d, a) {
		var f, j, b, k = i === "array",
		l = {
			key: 0,
			useKey: k ? 0 : 1,
			id: "" + aB++,
			onRender: a,
			bnds: {}
		},
		e = {
			data: m,
			tmpl: h,
			content: d,
			views: k ? [] : {},
			parent: c,
			ctx: n,
			type: i,
			get: au,
			getIndex: av,
			getRsc: aU,
			hlp: a4,
			_: l,
			_is: "view"
		};
		if (c) {
			f = c.views;
			j = c._;
			if (j.useKey) {
				f[l.key = "_" + j.useKey++] = e;
				b = j.tag;
				l.bnd = k && (!b || !!b._.bnd && b)
			} else {
				f.splice(l.key = e.index = g !== am ? g: f.length, 0, e)
			}
			e.ctx = n || c.ctx
		}
		return e
	}
	function ar(f) {
		var d, e, c, b, a;
		for (d in a9) {
			b = a9[d];
			if ((a = b.compile) && (e = f[d + "s"])) {
				for (c in e) {
					e[c] = a(c, e[c], f, d, b)
				}
			}
		}
	}
	function al(b, e, a) {
		var d, c;
		if (typeof e === "function") {
			e = {
				depends: e.depends,
				render: e
			}
		} else {
			if (c = e.template) {
				e.template = "" + c === c ? (aA[c] || aA(c)) : c
			}
			if (e.init !== false) {
				d = e._ctr = function(f) {}; (d.prototype = e).constructor = d
			}
		}
		if (a) {
			e._parentTmpl = a
		}
		return e
	}
	function aR(i, c, b, d, h, a) {
		function f(k) {
			if (("" + k === k) || k.nodeType > 0) {
				try {
					g = k.nodeType > 0 ? k: !aX.test(k) && aY && aY(aS.document).find(k)[0]
				} catch(j) {}
				if (g) {
					k = g.getAttribute(a5);
					i = i || k;
					k = aA[k];
					if (!k) {
						i = i || "_" + ax++;
						g.setAttribute(a5, i);
						k = aA[i] = aR(i, g.innerHTML, b, d, h, a)
					}
				}
				return k
			}
		}
		var e, g;
		c = c || "";
		e = f(c);
		a = a || (c.markup ? c: {});
		a.tmplName = i;
		if (b) {
			a._parentTmpl = b
		}
		if (!e && c.markup && (e = f(c.markup))) {
			if (e.fn && (e.debug !== c.debug || e.allowCode !== c.allowCode)) {
				e = e.markup
			}
		}
		if (e !== am) {
			if (i && !b) {
				bc[i] = function() {
					return c.render.apply(c, arguments)
				}
			}
			if (e.fn || c.fn) {
				if (e.fn) {
					if (i && i !== e.tmplName) {
						c = aO(a, e)
					} else {
						c = e
					}
				}
			} else {
				c = aE(e, a);
				aK(e, c)
			}
			ar(a);
			return c
		}
	}
	function aE(e, d) {
		var c, b = a7.wrapMap || {},
		a = a1({
			markup: e,
			tmpls: [],
			links: {},
			tags: {},
			bnds: [],
			_is: "template",
			render: aq
		},
		d);
		if (!d.htmlTag) {
			c = ak.exec(e);
			a.htmlTag = c ? c[1].toLowerCase() : ""
		}
		c = b[a.htmlTag];
		if (c && c !== b.div) {
			a.markup = bg.trim(a.markup);
			a._elCnt = true
		}
		return a
	}
	function aM(d, a) {
		function c(i, g, j) {
			var h, k, e, f;
			if (i && "" + i !== i && !i.nodeType && !i.markup) {
				for (e in i) {
					c(e, i[e], g)
				}
				return bf
			}
			if (g === am) {
				g = i;
				i = am
			}
			if (i && "" + i !== i) {
				j = g;
				g = i;
				i = am
			}
			f = j ? j[b] = j[b] || {}: c;
			k = a.compile;
			if (h = a6.onBeforeStoreItem) {
				k = h(f, i, g, k) || k
			}
			if (!i) {
				g = k(am, g)
			} else {
				if (g === null) {
					delete f[i]
				} else {
					f[i] = k ? (g = k(i, g, j, d, a)) : g
				}
			}
			if (g) {
				g._is = d
			}
			if (h = a6.onStoreItem) {
				h(f, i, g, k)
			}
			return g
		}
		var b = d + "s";
		bf[b] = c;
		a9[d] = a
	}
	function aq(c, t, s, a, q, r) {
		var f, h, l, i, d, k, n, g, u, e, p, v, m, j = this,
		o = !j.attr || j.attr === "html",
		b = "";
		if (a === true) {
			n = true;
			a = 0
		}
		if (j.tag) {
			g = j;
			j = j.tag;
			e = j._;
			v = j.tagName;
			m = g.tmpl;
			t = aO(t, j.ctx);
			u = g.content;
			if (g.props.link === false) {
				t = t || {};
				t.link = false
			}
			s = s || g.view;
			c = c === am ? s: c
		} else {
			m = j.jquery && (j[0] || ay('Unknown template: "' + j.selector + '"')) || j
		}
		if (m) {
			if (!s && c && c._is === "view") {
				s = c
			}
			if (s) {
				u = u || s.content;
				r = r || s._.onRender;
				if (c === s) {
					c = s.data;
					q = true
				}
				t = aO(t, s.ctx)
			}
			if (!s || s.data === am) { (t = t || {}).root = c
			}
			if (!m.fn) {
				m = aA[m] || aA(m)
			}
			if (m) {
				r = (t && t.link) !== false && o && r;
				p = r;
				if (r === true) {
					p = am;
					r = s._.onRender
				}
				if (bg.isArray(c) && !q) {
					i = n ? s: (a !== am && s) || aI(t, "array", s, c, m, a, u, r);
					for (f = 0, h = c.length; f < h; f++) {
						l = c[f];
						d = aI(t, "item", i, l, m, (a || 0) + f, u, r);
						k = m.fn(l, d, bf);
						b += i._.onRender ? i._.onRender(k, d) : k
					}
				} else {
					i = n ? s: aI(t, v || "data", s, c, m, a, u, r);
					if (e && !j.flow) {
						i.tag = j
					}
					b += m.fn(c, i, bf)
				}
				return p ? p(b, i) : b
			}
		}
		return ""
	}
	function ay(a) {
		throw new bf.sub.Error(a)
	}
	function ba(a) {
		ay("Syntax error\n" + a)
	}
	function aK(a, e, b, i) {
		function l(o) {
			o -= j;
			if (o) {
				g.push(a.substr(j, o).replace(a8, "\\n"))
			}
		}
		function c(o) {
			o && ba('Unmatched or missing tag: "{{/' + o + '}}" in template:\n' + a)
		}
		function n(A, o, x, t, z, q, E, B, y, v, p, u) {
			if (q) {
				z = ":";
				t = "html"
			}
			v = v || b;
			var G, w, r = o && [],
			D = "",
			C = "",
			F = "",
			s = !v && !z && !E;
			x = x || z;
			l(u);
			j = u + A.length;
			if (B) {
				if (k) {
					g.push(["*", "\n" + y.replace(aL, "$1") + "\n"])
				}
			} else {
				if (x) {
					if (x === "else") {
						if (at.test(y)) {
							ba('for "{{else if expr}}" use "{{else expr}}"')
						}
						r = h[6];
						h[7] = a.substring(h[7], u);
						h = f.pop();
						g = h[3];
						s = true
					}
					if (y) {
						y = y.replace(a8, " ");
						D = aZ(y, r, e).replace(an,
						function(H, J, I) {
							if (J) {
								F += I + ","
							} else {
								C += I + ","
							}
							return ""
						})
					}
					C = C.slice(0, -1);
					D = D.slice(0, -1);
					G = C && (C.indexOf("noerror:true") + 1) && C || "";
					d = [x, t || !!i || "", D, s && [], 'params:"' + y + '",props:{' + C + "}" + (F ? ",ctx:{" + F.slice(0, -1) + "}": ""), G, r || 0];
					g.push(d);
					if (s) {
						f.push(h);
						h = d;
						h[7] = j
					}
				} else {
					if (p) {
						w = h[0];
						c(p !== w && w !== "else" && p);
						h[7] = a.substring(h[7], u);
						h = f.pop()
					}
				}
			}
			c(!h && p);
			g = h[3]
		}
		var d, k = e && e.allowCode,
		m = [],
		j = 0,
		f = [],
		g = m,
		h = [, , , m];
		a = a.replace(aD, "\\$&");
		c(f[0] && f[0][3].pop()[0]);
		a.replace(a2, n);
		l(a.length);
		if (j = m[m.length - 1]) {
			c("" + j !== j && ( + j[7] === j[7]) && j[0])
		}
		return aQ(m, b ? a: e, b)
	}
	function aQ(F, s, y) {
		var K, m, r, o, C, e, L, l, B, J, D, f, p, x, u, t, h, A, n, i, w, g, E, G, k, H, q, j, a, v = 0,
		z = "",
		d = "",
		b = {},
		c = F.length;
		if ("" + s === s) {
			h = y ? 'data-link="' + s.replace(a8, " ").slice(1, -1) + '"': s;
			s = 0
		} else {
			h = s.tmplName || "unnamed";
			if (i = s.allowCode) {
				b.allowCode = true
			}
			if (s.debug) {
				b.debug = true
			}
			f = s.bnds;
			t = s.tmpls
		}
		for (K = 0; K < c; K++) {
			m = F[K];
			if ("" + m === m) {
				z += '\nret+="' + m + '";'
			} else {
				r = m[0];
				if (r === "*") {
					z += "" + m[1]
				} else {
					o = m[1];
					C = m[2];
					w = m[3];
					e = m[4];
					d = m[5];
					g = m[7];
					if (! (H = r === "else")) {
						v = 0;
						if (f && (p = m[6])) {
							v = f.push(p)
						}
					}
					if (q = r === ":") {
						if (o) {
							r = o === "html" ? ">": o + r
						}
						if (d) {
							j = "prm" + K;
							d = "try{var " + j + "=[" + C + "][0];}catch(e){" + j + '="";}\n';
							C = j
						}
					} else {
						if (w) {
							A = aE(g, b);
							A.tmplName = h + "/" + r;
							aQ(w, A);
							t.push(A)
						}
						if (!H) {
							n = r;
							k = z;
							z = "";
							x = K
						}
						G = F[K + 1];
						G = G && G[0] === "else"
					}
					e += ",args:[" + C + "]}";
					if (q && p || o && r !== ">") {
						a = new Function("data,view,j,u", " // " + h + " " + v + " " + r + "\n" + d + "return {" + e + ";");
						a.paths = p;
						a._ctxs = r;
						if (y) {
							return a
						}
						D = 1
					}
					z += (q ? "\n" + (p ? "": d) + (y ? "return ": "ret+=") + (D ? (D = 0, J = true, 'c("' + o + '",view,' + (p ? ((f[v - 1] = a), v) : "{" + e) + ");") : r === ">" ? (l = true, "h(" + C + ");") : (B = true, "(v=" + C + ")!=" + (y ? "=": "") + 'u?v:"";')) : (L = true, "{tmpl:" + (w ? t.length: "0") + "," + e + ","));
					if (n && !G) {
						z = "[" + z.slice(0, -1) + "]";
						if (y || p) {
							z = new Function("data,view,j,u", " // " + h + " " + v + " " + n + "\nreturn " + z + ";");
							if (p) { (f[v - 1] = z).paths = p
							}
							z._ctxs = r;
							if (y) {
								return z
							}
						}
						z = k + '\nret+=t("' + n + '",view,this,' + (v || z) + ");";
						p = 0;
						n = 0
					}
				}
			}
		}
		z = "// " + h + "\nvar j=j||" + (aY ? "jQuery.": "js") + "views" + (B ? ",v": "") + (L ? ",t=j._tag": "") + (J ? ",c=j._cnvt": "") + (l ? ",h=j.converters.html": "") + (y ? ";\n": ',ret="";\n') + (a7.tryCatch ? "try{\n": "") + (b.debug ? "debugger;": "") + z + (y ? "\n": "\nreturn ret;\n") + (a7.tryCatch ? "\n}catch(e){return j._err(e);}": "");
		try {
			z = new Function("data,view,j,u", z)
		} catch(I) {
			ba("Compiled template code:\n\n" + z, I)
		}
		if (s) {
			s.fn = z
		}
		return z
	}
	function aZ(g, k, b) {
		function a(D, n, G, x, t, E, m, z, q, o, p, F, r, y, A, B, v, C, w) {
			var u;
			t = t || "";
			G = G || n || p;
			x = x || z;
			q = q || B || "";
			function s(K, L, I, N, O, H, J) {
				if (L) {
					k && !e && k.push(x);
					if (L !== ".") {
						var M = (I ? 'view.hlp("' + I + '")': N ? "view": "data") + (J ? (O ? "." + O: I ? "": (N ? "": "." + L)) + (H || "") : (J = I ? "": N ? O || "": L, ""));
						M = M + (J ? "." + J: "");
						return M.slice(0, 9) === "view.data" ? M.slice(5) : M
					}
				}
				return K
			}
			if (E) {
				ba(g)
			} else {
				if (k && A) {
					u = c[j];
					if (w.length - 2 > C - u) {
						u = w.slice(u, C + 1);
						A = ap + ":" + u + aH;
						A = i[A] = i[A] || aK(ao + A + aJ, b, true);
						if (!A.paths) {
							aZ(u, A.paths = [], b)
						}
						k.push({
							_jsvOb: A
						})
					}
				}
				return (d ? (d = !F, (d ? D: '"')) : h ? (h = !r, (h ? D: '"')) : ((G ? (j++, c[j] = C++, G) : "") + (v ? (j ? "": f ? (f = e = false, "\b") : ",") : m ? (j && ba(g), f = x, e = x.charAt(0) === "~", "\b" + x + ":") : x ? (x.split("^").join(".").replace(aW, s) + (q ? (l[++j] = true, x.charAt(0) !== "." && (c[j] = C), q) : t)) : t ? t: y ? ((l[j--] = false, y) + (q ? (l[++j] = true, q) : "")) : o ? (l[j] || ba(g), ",") : n ? "": (d = F, h = r, '"'))))
			}
		}
		var f, e, i = b.links,
		l = {},
		c = {
			0 : -1
		},
		j = 0,
		h = false,
		d = false;
		return (g + " ").replace(aV, a)
	}
	function aO(a, b) {
		return a && a !== b ? (b ? a1(a1({},
		b), a) : a) : b && a1({},
		b)
	}
	function aC(a) {
		return bh[a] || (bh[a] = "&#" + a.charCodeAt(0) + ";")
	}
	for (aN in a9) {
		aM(aN, a9[aN])
	}
	var aA = bf.templates,
	aT = bf.converters,
	aG = bf.helpers,
	bb = bf.tags,
	a6 = bf.sub,
	a7 = bf.settings;
	if (aY) {
		bg = aY;
		bg.fn.render = aq
	} else {
		bg = aS.jsviews = {};
		bg.isArray = Array && Array.isArray ||
		function(a) {
			return Object.prototype.toString.call(a) === "[object Array]"
		}
	}
	bg.render = bc;
	bg.views = bf;
	bg.templates = aA = bf.templates;
	bb({
		"else": function() {},
		"if": {
			render: function(b) {
				var a = this,
				c = (a.rendering.done || !b && (arguments.length || !a.tagCtx.index)) ? "": (a.rendering.done = true, a.selected = a.tagCtx.index, a.tagCtx.render());
				return c
			},
			onUpdate: function(f, a, b) {
				var c, d, e;
				for (c = 0; (d = this.tagCtxs[c]) && d.args.length; c++) {
					d = d.args[0];
					e = !d !== !b[c].args[0];
					if ( !! d || e) {
						return e
					}
				}
				return false
			},
			flow: true
		},
		"for": {
			render: function(g) {
				var h, e, b = this,
				c = b.tagCtx,
				a = !arguments.length,
				f = "",
				d = a || 0;
				if (!b.rendering.done) {
					if (a) {
						f = am
					} else {
						if (g !== am) {
							f += c.render(g);
							d += bg.isArray(g) ? g.length: 1
						}
					}
					if (b.rendering.done = d) {
						b.selected = c.index
					}
				}
				return f
			},
			onUpdate: function(b, c, a) {},
			onArrayChange: function(e, b) {
				var a, c = this,
				d = b.change;
				if (this.tagCtxs[1] && (d === "insert" && e.target.length === b.items.length || d === "remove" && !e.target.length || d === "refresh" && !b.oldItems.length !== !e.target.length)) {
					this.refresh()
				} else {
					for (a in c._.arrVws) {
						a = c._.arrVws[a];
						if (a.data === e.target) {
							a._.onArrayChange.apply(a, arguments)
						}
					}
				}
				e.done = true
			},
			flow: true
		},
		include: {
			flow: true
		},
		"*": {
			render: function(a) {
				return a
			},
			flow: true
		}
	});
	aT({
		html: function(a) {
			return a != am ? String(a).replace(bi, aC) : ""
		},
		attr: function(a) {
			return a != am ? String(a).replace(bd, aC) : a === null ? null: ""
		},
		url: function(a) {
			return a != am ? encodeURI(String(a)) : a === null ? null: ""
		}
	});
	a0()
})(this, this.jQuery);
dhtmlx = function(a) {
	for (var b in a) {
		dhtmlx[b] = a[b]
	}
	return dhtmlx
};
dhtmlx.extend_api = function(a, b, c) {
	var d = window[a];
	if (d) {
		window[a] = function(g) {
			if (g && typeof g == "object" && !g.tagName) {
				var e = d.apply(this, b._init ? b._init(g) : arguments),
				f;
				for (f in dhtmlx) {
					if (b[f]) {
						this[b[f]](dhtmlx[f])
					}
				}
				for (f in g) {
					if (b[f]) {
						this[b[f]](g[f])
					} else {
						f.indexOf("on") == 0 && this.attachEvent(f, g[f])
					}
				}
			} else {
				e = d.apply(this, arguments)
			}
			b._patch && b._patch(this);
			return e || this
		},
		window[a].prototype = d.prototype,
		c && dhtmlXHeir(window[a].prototype, c)
	}
};
dhtmlxAjax = {
	get: function(c, a) {
		var b = new dtmlXMLLoaderObject(!0);
		b.async = arguments.length < 3;
		b.waitCall = a;
		b.loadXML(c);
		return b
	},
	post: function(a, b, c) {
		var d = new dtmlXMLLoaderObject(!0);
		d.async = arguments.length < 4;
		d.waitCall = c;
		d.loadXML(a, !0, b);
		return d
	},
	getSync: function(a) {
		return this.get(a, null, !0)
	},
	postSync: function(a, b) {
		return this.post(a, b, null, !0)
	}
};
function dtmlXMLLoaderObject(a, b, c, d) {
	this.xmlDoc = "";
	this.async = typeof c != "undefined" ? c: !0;
	this.onloadAction = a || null;
	this.mainObject = b || null;
	this.waitCall = null;
	this.rSeed = d || !1;
	return this
}
dtmlXMLLoaderObject.count = 0;
dtmlXMLLoaderObject.prototype.waitLoadFunction = function(a) {
	var b = !0;
	return this.check = function() {
		if (a && a.onloadAction != null && (!a.xmlDoc.readyState || a.xmlDoc.readyState == 4) && b) {
			b = !1;
			dtmlXMLLoaderObject.count++;
			if (typeof a.onloadAction == "function") {
				a.onloadAction(a.mainObject, null, null, null, a)
			}
			if (a.waitCall) {
				a.waitCall.call(this, a),
				a.waitCall = null
			}
		}
	}
};
dtmlXMLLoaderObject.prototype.getXMLTopNode = function(a, b) {
	if (this.xmlDoc.responseXML) {
		var c = this.xmlDoc.responseXML.getElementsByTagName(a);
		c.length == 0 && a.indexOf(":") != -1 && (c = this.xmlDoc.responseXML.getElementsByTagName(a.split(":")[1]));
		var d = c[0]
	} else {
		d = this.xmlDoc.documentElement
	}
	if (d) {
		return this._retry = !1,
		d
	}
	if (!this._retry && _isIE) {
		return this._retry = !0,
		b = this.xmlDoc,
		this.loadXMLString(this.xmlDoc.responseText.replace(/^[\s]+/, ""), !0),
		this.getXMLTopNode(a, b)
	}
	dhtmlxError.throwError("LoadXML", "Incorrect XML", [b || this.xmlDoc, this.mainObject]);
	return document.createElement("DIV")
};
dtmlXMLLoaderObject.prototype.loadXMLString = function(c, a) {
	if (_isIE) {
		this.xmlDoc = new ActiveXObject("Microsoft.XMLDOM"),
		this.xmlDoc.async = this.async,
		this.xmlDoc.onreadystatechange = function() {},
		this.xmlDoc.loadXML(c)
	} else {
		var b = new DOMParser;
		this.xmlDoc = b.parseFromString(c, "text/xml")
	}
	if (!a) {
		if (this.onloadAction) {
			this.onloadAction(this.mainObject, null, null, null, this)
		}
		if (this.waitCall) {
			this.waitCall(),
			this.waitCall = null
		}
	}
};
dtmlXMLLoaderObject.prototype.loadXML = function(a, b, c, d) {
	this.rSeed && (a += (a.indexOf("?") != -1 ? "&": "?") + "a_dhx_rSeed=" + (new Date).valueOf());
	this.filePath = a;
	this.xmlDoc = !_isIE && window.XMLHttpRequest ? new XMLHttpRequest: new ActiveXObject("Microsoft.XMLHTTP");
	if (this.async) {
		this.xmlDoc.onreadystatechange = new this.waitLoadFunction(this)
	}
	this.xmlDoc.open(b ? "POST": "GET", a, this.async);
	d ? (this.xmlDoc.setRequestHeader("User-Agent", "dhtmlxRPC v0.1 (" + navigator.userAgent + ")"), this.xmlDoc.setRequestHeader("Content-type", "text/xml")) : b && this.xmlDoc.setRequestHeader("Content-type", this.contenttype || "application/x-www-form-urlencoded");
	this.xmlDoc.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	this.xmlDoc.send(c);
	this.async || (new this.waitLoadFunction(this))()
};
dtmlXMLLoaderObject.prototype.destructor = function() {
	return this.setXSLParamValue = this.getXMLTopNode = this.xmlNodeToJSON = this.doSerialization = this.loadXMLString = this.loadXML = this.doXSLTransToString = this.doXSLTransToObject = this.doXPathOpera = this.doXPath = this.xmlDoc = this.mainObject = this.onloadAction = this.filePath = this.rSeed = this.async = this._retry = this._getAllNamedChilds = this._filterXPath = null
};
dtmlXMLLoaderObject.prototype.xmlNodeToJSON = function(a) {
	for (var b = {},
	c = 0; c < a.attributes.length; c++) {
		b[a.attributes[c].name] = a.attributes[c].value
	}
	b._tagvalue = a.firstChild ? a.firstChild.nodeValue: "";
	for (c = 0; c < a.childNodes.length; c++) {
		var d = a.childNodes[c].tagName;
		d && (b[d] || (b[d] = []), b[d].push(this.xmlNodeToJSON(a.childNodes[c])))
	}
	return b
};
function callerFunction(a, b) {
	return this.handler = function(c) {
		if (!c) {
			c = window.event
		}
		a(c, b);
		return ! 0
	}
}
function getAbsoluteLeft(a) {
	return getOffset(a).left
}
function getAbsoluteTop(a) {
	return getOffset(a).top
}
function getOffsetSum(c) {
	for (var a = 0,
	b = 0; c;) {
		a += parseInt(c.offsetTop),
		b += parseInt(c.offsetLeft),
		c = c.offsetParent
	}
	return {
		top: a,
		left: b
	}
}
function getOffsetRect(e) {
	var f = e.getBoundingClientRect(),
	g = document.body,
	h = document.documentElement,
	i = window.pageYOffset || h.scrollTop || g.scrollTop,
	a = window.pageXOffset || h.scrollLeft || g.scrollLeft,
	k = h.clientTop || g.clientTop || 0,
	b = h.clientLeft || g.clientLeft || 0,
	c = f.top + i - k,
	d = f.left + a - b;
	return {
		top: Math.round(c),
		left: Math.round(d)
	}
}
function getOffset(a) {
	return a.getBoundingClientRect ? getOffsetRect(a) : getOffsetSum(a)
}
function convertStringToBoolean(a) {
	typeof a == "string" && (a = a.toLowerCase());
	switch (a) {
	case "1":
	case "true":
	case "yes":
	case "y":
	case 1:
	case ! 0 : return ! 0;
	default:
		return ! 1
	}
}
function getUrlSymbol(a) {
	return a.indexOf("?") != -1 ? "&": "?"
}
function dhtmlDragAndDropObject() {
	if (window.dhtmlDragAndDrop) {
		return window.dhtmlDragAndDrop
	}
	this.dragStartObject = this.dragStartNode = this.dragNode = this.lastLanding = 0;
	this.tempDOMM = this.tempDOMU = null;
	this.waitDrag = 0;
	window.dhtmlDragAndDrop = this;
	return this
}
dhtmlDragAndDropObject.prototype.removeDraggableItem = function(a) {
	a.onmousedown = null;
	a.dragStarter = null;
	a.dragLanding = null
};
dhtmlDragAndDropObject.prototype.addDraggableItem = function(a, b) {
	a.onmousedown = this.preCreateDragCopy;
	a.dragStarter = b;
	this.addDragLanding(a, b)
};
dhtmlDragAndDropObject.prototype.addDragLanding = function(a, b) {
	a.dragLanding = b
};
dhtmlDragAndDropObject.prototype.preCreateDragCopy = function(a) {
	if (! ((a || window.event) && (a || event).button == 2)) {
		if (window.dhtmlDragAndDrop.waitDrag) {
			return window.dhtmlDragAndDrop.waitDrag = 0,
			document.body.onmouseup = window.dhtmlDragAndDrop.tempDOMU,
			document.body.onmousemove = window.dhtmlDragAndDrop.tempDOMM,
			!1
		}
		window.dhtmlDragAndDrop.dragNode && window.dhtmlDragAndDrop.stopDrag(a);
		window.dhtmlDragAndDrop.waitDrag = 1;
		window.dhtmlDragAndDrop.tempDOMU = document.body.onmouseup;
		window.dhtmlDragAndDrop.tempDOMM = document.body.onmousemove;
		window.dhtmlDragAndDrop.dragStartNode = this;
		window.dhtmlDragAndDrop.dragStartObject = this.dragStarter;
		document.body.onmouseup = window.dhtmlDragAndDrop.preCreateDragCopy;
		document.body.onmousemove = window.dhtmlDragAndDrop.callDrag;
		window.dhtmlDragAndDrop.downtime = (new Date).valueOf();
		a && a.preventDefault && a.preventDefault();
		return ! 1
	}
};
dhtmlDragAndDropObject.prototype.callDrag = function(b) {
	if (!b) {
		b = window.event
	}
	dragger = window.dhtmlDragAndDrop;
	if (! ((new Date).valueOf() - dragger.downtime < 100)) {
		if (!dragger.dragNode) {
			if (dragger.waitDrag) {
				dragger.dragNode = dragger.dragStartObject._createDragNode(dragger.dragStartNode, b);
				if (!dragger.dragNode) {
					return dragger.stopDrag()
				}
				dragger.dragNode.onselectstart = function() {
					return ! 1
				};
				dragger.gldragNode = dragger.dragNode;
				document.body.appendChild(dragger.dragNode);
				document.body.onmouseup = dragger.stopDrag;
				dragger.waitDrag = 0;
				dragger.dragNode.pWindow = window;
				dragger.initFrameRoute()
			} else {
				return dragger.stopDrag(b, !0)
			}
		}
		if (dragger.dragNode.parentNode != window.document.body && dragger.gldragNode) {
			var c = dragger.gldragNode;
			if (dragger.gldragNode.old) {
				c = dragger.gldragNode.old
			}
			c.parentNode.removeChild(c);
			var d = dragger.dragNode.pWindow;
			c.pWindow && c.pWindow.dhtmlDragAndDrop.lastLanding && c.pWindow.dhtmlDragAndDrop.lastLanding.dragLanding._dragOut(c.pWindow.dhtmlDragAndDrop.lastLanding);
			if (_isIE) {
				var e = document.createElement("Div");
				e.innerHTML = dragger.dragNode.outerHTML;
				dragger.dragNode = e.childNodes[0]
			} else {
				dragger.dragNode = dragger.dragNode.cloneNode(!0)
			}
			dragger.dragNode.pWindow = window;
			dragger.gldragNode.old = dragger.dragNode;
			document.body.appendChild(dragger.dragNode);
			d.dhtmlDragAndDrop.dragNode = dragger.dragNode
		}
		dragger.dragNode.style.left = b.clientX + 15 + (dragger.fx ? dragger.fx * -1 : 0) + (document.body.scrollLeft || document.documentElement.scrollLeft) + "px";
		dragger.dragNode.style.top = b.clientY + 3 + (dragger.fy ? dragger.fy * -1 : 0) + (document.body.scrollTop || document.documentElement.scrollTop) + "px";
		var a = b.srcElement ? b.srcElement: b.target;
		dragger.checkLanding(a, b)
	}
};
dhtmlDragAndDropObject.prototype.calculateFramePosition = function(b) {
	if (window.name) {
		for (var c = parent.frames[window.name].frameElement.offsetParent, d = 0, e = 0; c;) {
			d += c.offsetLeft,
			e += c.offsetTop,
			c = c.offsetParent
		}
		if (parent.dhtmlDragAndDrop) {
			var a = parent.dhtmlDragAndDrop.calculateFramePosition(1);
			d += a.split("_")[0] * 1;
			e += a.split("_")[1] * 1
		}
		if (b) {
			return d + "_" + e
		} else {
			this.fx = d
		}
		this.fy = e
	}
	return "0_0"
};
dhtmlDragAndDropObject.prototype.checkLanding = function(a, b) {
	a && a.dragLanding ? (this.lastLanding && this.lastLanding.dragLanding._dragOut(this.lastLanding), this.lastLanding = a, this.lastLanding = this.lastLanding.dragLanding._dragIn(this.lastLanding, this.dragStartNode, b.clientX, b.clientY, b), this.lastLanding_scr = _isIE ? b.srcElement: b.target) : a && a.tagName != "BODY" ? this.checkLanding(a.parentNode, b) : (this.lastLanding && this.lastLanding.dragLanding._dragOut(this.lastLanding, b.clientX, b.clientY, b), this.lastLanding = 0, this._onNotFound && this._onNotFound())
};
dhtmlDragAndDropObject.prototype.stopDrag = function(c, a) {
	dragger = window.dhtmlDragAndDrop;
	if (!a) {
		dragger.stopFrameRoute();
		var b = dragger.lastLanding;
		dragger.lastLanding = null;
		b && b.dragLanding._drag(dragger.dragStartNode, dragger.dragStartObject, b, _isIE ? event.srcElement: c.target)
	}
	dragger.lastLanding = null;
	dragger.dragNode && dragger.dragNode.parentNode == document.body && dragger.dragNode.parentNode.removeChild(dragger.dragNode);
	dragger.dragNode = 0;
	dragger.gldragNode = 0;
	dragger.fx = 0;
	dragger.fy = 0;
	dragger.dragStartNode = 0;
	dragger.dragStartObject = 0;
	document.body.onmouseup = dragger.tempDOMU;
	document.body.onmousemove = dragger.tempDOMM;
	dragger.tempDOMU = null;
	dragger.tempDOMM = null;
	dragger.waitDrag = 0
};
dhtmlDragAndDropObject.prototype.stopFrameRoute = function(a) {
	a && window.dhtmlDragAndDrop.stopDrag(1, 1);
	for (var b = 0; b < window.frames.length; b++) {
		try {
			window.frames[b] != a && window.frames[b].dhtmlDragAndDrop && window.frames[b].dhtmlDragAndDrop.stopFrameRoute(window)
		} catch(c) {}
	}
	try {
		parent.dhtmlDragAndDrop && parent != window && parent != a && parent.dhtmlDragAndDrop.stopFrameRoute(window)
	} catch(d) {}
};
dhtmlDragAndDropObject.prototype.initFrameRoute = function(b, c) {
	if (b) {
		window.dhtmlDragAndDrop.preCreateDragCopy(),
		window.dhtmlDragAndDrop.dragStartNode = b.dhtmlDragAndDrop.dragStartNode,
		window.dhtmlDragAndDrop.dragStartObject = b.dhtmlDragAndDrop.dragStartObject,
		window.dhtmlDragAndDrop.dragNode = b.dhtmlDragAndDrop.dragNode,
		window.dhtmlDragAndDrop.gldragNode = b.dhtmlDragAndDrop.dragNode,
		window.document.body.onmouseup = window.dhtmlDragAndDrop.stopDrag,
		window.waitDrag = 0,
		!_isIE && c && (!_isFF || _FFrv < 1.8) && window.dhtmlDragAndDrop.calculateFramePosition()
	}
	try {
		parent.dhtmlDragAndDrop && parent != window && parent != b && parent.dhtmlDragAndDrop.initFrameRoute(window)
	} catch(d) {}
	for (var e = 0; e < window.frames.length; e++) {
		try {
			window.frames[e] != b && window.frames[e].dhtmlDragAndDrop && window.frames[e].dhtmlDragAndDrop.initFrameRoute(window, !b || c ? 1 : 0)
		} catch(a) {}
	}
};
_OperaRv = _KHTMLrv = _FFrv = _isChrome = _isMacOS = _isKHTML = _isOpera = _isIE = _isFF = !1;
navigator.userAgent.indexOf("Macintosh") != -1 && (_isMacOS = !0);
navigator.userAgent.toLowerCase().indexOf("chrome") > -1 && (_isChrome = !0);
if (navigator.userAgent.indexOf("Safari") != -1 || navigator.userAgent.indexOf("Konqueror") != -1) {
	_KHTMLrv = parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf("Safari") + 7, 5)),
	_KHTMLrv > 525 ? (_isFF = !0, _FFrv = 1.9) : _isKHTML = !0
} else {
	if (navigator.userAgent.indexOf("Opera") != -1) {
		_isOpera = !0,
		_OperaRv = parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf("Opera") + 6, 3))
	} else {
		if (navigator.appName.indexOf("Microsoft") != -1) {
			if (_isIE = !0, (navigator.appVersion.indexOf("MSIE 8.0") != -1 || navigator.appVersion.indexOf("MSIE 9.0") != -1 || navigator.appVersion.indexOf("MSIE 10.0") != -1) && document.compatMode != "BackCompat") {
				_isIE = 8
			}
		} else {
			_isFF = !0,
			_FFrv = parseFloat(navigator.userAgent.split("rv:")[1])
		}
	}
}
dtmlXMLLoaderObject.prototype.doXPath = function(h, i, a, b) {
	if (_isKHTML || !_isIE && !window.XPathResult) {
		return this.doXPathOpera(h, i)
	}
	if (_isIE) {
		return i || (i = this.xmlDoc.nodeName ? this.xmlDoc: this.xmlDoc.responseXML),
		i || dhtmlxError.throwError("LoadXML", "Incorrect XML", [i || this.xmlDoc, this.mainObject]),
		a != null && i.setProperty("SelectionNamespaces", "xmlns:xsl='" + a + "'"),
		b == "single" ? i.selectSingleNode(h) : i.selectNodes(h) || []
	} else {
		var c = i;
		i || (i = this.xmlDoc.nodeName ? this.xmlDoc: this.xmlDoc.responseXML);
		i || dhtmlxError.throwError("LoadXML", "Incorrect XML", [i || this.xmlDoc, this.mainObject]);
		i.nodeName.indexOf("document") != -1 ? c = i: (c = i, i = i.ownerDocument);
		var e = XPathResult.ANY_TYPE;
		if (b == "single") {
			e = XPathResult.FIRST_ORDERED_NODE_TYPE
		}
		var d = [],
		f = i.evaluate(h, c,
		function() {
			return a
		},
		e, null);
		if (e == XPathResult.FIRST_ORDERED_NODE_TYPE) {
			return f.singleNodeValue
		}
		for (var g = f.iterateNext(); g;) {
			d[d.length] = g,
			g = f.iterateNext()
		}
		return d
	}
};
function j() {
	if (!this.catches) {
		this.catches = []
	}
	return this
}
j.prototype.catchError = function(a, b) {
	this.catches[a] = b
};
j.prototype.throwError = function(c, a, b) {
	if (this.catches[c]) {
		return this.catches[c](c, a, b)
	}
	if (this.catches.ALL) {
		return this.catches.ALL(c, a, b)
	}
	alert("Error type: " + c + "\nDescription: " + a);
	return null
};
window.dhtmlxError = new j;
dtmlXMLLoaderObject.prototype.doXPathOpera = function(b, c) {
	var d = b.replace(/[\/]+/gi, "/").split("/"),
	e = null,
	a = 1;
	if (!d.length) {
		return []
	}
	if (d[0] == ".") {
		e = [c]
	} else {
		if (d[0] == "") {
			e = (this.xmlDoc.responseXML || this.xmlDoc).getElementsByTagName(d[a].replace(/\[[^\]]*\]/g, "")),
			a++
		} else {
			return []
		}
	}
	for (; a < d.length; a++) {
		e = this._getAllNamedChilds(e, d[a])
	}
	d[a - 1].indexOf("[") != -1 && (e = this._filterXPath(e, d[a - 1]));
	return e
};
dtmlXMLLoaderObject.prototype._filterXPath = function(a, b) {
	for (var c = [], b = b.replace(/[^\[]*\[\@/g, "").replace(/[\[\]\@]*/g, ""), d = 0; d < a.length; d++) {
		a[d].getAttribute(b) && (c[c.length] = a[d])
	}
	return c
};
dtmlXMLLoaderObject.prototype._getAllNamedChilds = function(b, c) {
	var d = [];
	_isKHTML && (c = c.toUpperCase());
	for (var e = 0; e < b.length; e++) {
		for (var a = 0; a < b[e].childNodes.length; a++) {
			_isKHTML ? b[e].childNodes[a].tagName && b[e].childNodes[a].tagName.toUpperCase() == c && (d[d.length] = b[e].childNodes[a]) : b[e].childNodes[a].tagName == c && (d[d.length] = b[e].childNodes[a])
		}
	}
	return d
};
function dhtmlXHeir(c, a) {
	for (var b in a) {
		typeof a[b] == "function" && (c[b] = a[b])
	}
	return c
}
function dhtmlxEvent(c, a, b) {
	c.addEventListener ? c.addEventListener(a, b, !1) : c.attachEvent && c.attachEvent("on" + a, b)
}
dtmlXMLLoaderObject.prototype.xslDoc = null;
dtmlXMLLoaderObject.prototype.setXSLParamValue = function(a, b, c) {
	if (!c) {
		c = this.xslDoc
	}
	if (c.responseXML) {
		c = c.responseXML
	}
	var d = this.doXPath("/xsl:stylesheet/xsl:variable[@name='" + a + "']", c, "http://www.w3.org/1999/XSL/Transform", "single");
	if (d != null) {
		d.firstChild.nodeValue = b
	}
};
dtmlXMLLoaderObject.prototype.doXSLTransToObject = function(a, b) {
	if (!a) {
		a = this.xslDoc
	}
	if (a.responseXML) {
		a = a.responseXML
	}
	if (!b) {
		b = this.xmlDoc
	}
	if (b.responseXML) {
		b = b.responseXML
	}
	if (_isIE) {
		d = new ActiveXObject("Msxml2.DOMDocument.3.0");
		try {
			b.transformNodeToObject(a, d)
		} catch(c) {
			d = b.transformNode(a)
		}
	} else {
		if (!this.XSLProcessor) {
			this.XSLProcessor = new XSLTProcessor,
			this.XSLProcessor.importStylesheet(a)
		}
		var d = this.XSLProcessor.transformToDocument(b)
	}
	return d
};
dtmlXMLLoaderObject.prototype.doXSLTransToString = function(c, a) {
	var b = this.doXSLTransToObject(c, a);
	return typeof b == "string" ? b: this.doSerialization(b)
};
dtmlXMLLoaderObject.prototype.doSerialization = function(a) {
	if (!a) {
		a = this.xmlDoc
	}
	if (a.responseXML) {
		a = a.responseXML
	}
	if (_isIE) {
		return a.xml
	} else {
		var b = new XMLSerializer;
		return b.serializeToString(a)
	}
};
dhtmlxEventable = function(a) {
	a.attachEvent = function(a, c, d) {
		a = "ev_" + a.toLowerCase();
		this[a] || (this[a] = new this.eventCatcher(d || this));
		return a + ":" + this[a].addEvent(c)
	};
	a.callEvent = function(a, c) {
		a = "ev_" + a.toLowerCase();
		return this[a] ? this[a].apply(this, c) : !0
	};
	a.checkEvent = function(a) {
		return !! this["ev_" + a.toLowerCase()]
	};
	a.eventCatcher = function(a) {
		var c = [],
		d = function() {
			for (var d = !0,
			g = 0; g < c.length; g++) {
				if (c[g] != null) {
					var f = c[g].apply(a, arguments),
					d = d && f
				}
			}
			return d
		};
		d.addEvent = function(a) {
			typeof a != "function" && (a = eval(a));
			return a ? c.push(a) - 1 : !1
		};
		d.removeEvent = function(a) {
			c[a] = null
		};
		return d
	};
	a.detachEvent = function(a) {
		if (a != !1) {
			var c = a.split(":");
			this[c[0]].removeEvent(c[1])
		}
	};
	a.detachAllEvents = function() {
		for (var a in this) {
			a.indexOf("ev_") == 0 && (this.detachEvent(a), this[a] = null)
		}
	};
	a = null
};
function dhtmlXWindowsSngl() {}
function dhtmlXWindowsBtn() {}
function dhtmlXWindows() {
	if (!window.dhtmlXContainer) {
		alert(this.i18n.dhx);
		return
	}
	this.engine = "dhx";
	var e = "_" + this.engine + "_Engine";
	if (!this[e]) {
		alert(this.i18n.noenginealert);
		return
	} else {
		this[e]()
	}
	this._isIPad = (navigator.userAgent.search(/iPad/gi) >= 0);
	var f = this;
	this.pathPrefix = "dhxwins_";
	this.imagePath = dhtmlx.image_path || "codebase/imgs/";
	this.setImagePath = function(b) {
		this.imagePath = b
	};
	this.skin = (typeof(dhtmlx) != "undefined" && typeof(dhtmlx.skin) == "string" ? dhtmlx.skin: "dhx_skyblue");
	this.skinParams = {
		dhx_black: {
			header_height: 21,
			border_left_width: 2,
			border_right_width: 2,
			border_bottom_height: 2
		},
		dhx_blue: {
			header_height: 21,
			border_left_width: 2,
			border_right_width: 2,
			border_bottom_height: 2
		},
		dhx_skyblue: {
			header_height: 21,
			border_left_width: 2,
			border_right_width: 2,
			border_bottom_height: 2
		}
	};
	this.setSkin = function(b) {
		this.skin = b;
		this._engineRedrawSkin()
	};
	this.isWindow = function(c) {
		var b = (this.wins[c] != null);
		return b
	};
	this.findByText = function(b) {
		var c = new Array();
		for (var d in this.wins) {
			if (this.wins[d].getText().search(b, "gi") >= 0) {
				c[c.length] = this.wins[d]
			}
		}
		return c
	};
	this.window = function(c) {
		var b = null;
		if (this.wins[c] != null) {
			b = this.wins[c]
		}
		return b
	};
	this.forEachWindow = function(b) {
		for (var c in this.wins) {
			b(this.wins[c])
		}
	};
	this.getBottommostWindow = function() {
		var c = this.getTopmostWindow();
		for (var b in this.wins) {
			if (this.wins[b].zi < c.zi) {
				c = this.wins[b]
			}
		}
		return (c.zi != 0 ? c: null)
	};
	this.getTopmostWindow = function(b) {
		var c = {
			zi: 0
		};
		for (var d in this.wins) {
			if (this.wins[d].zi > c.zi) {
				if (b == true && !this._isWindowHidden(this.wins[d])) {
					c = this.wins[d]
				}
				if (b != true) {
					c = this.wins[d]
				}
			}
		}
		return (c.zi != 0 ? c: null)
	};
	this.wins = {};
	for (var a in this.wins) {
		delete this.wins[a]
	}
	this.autoViewport = true;
	this._createViewport = function() {
		this.vp = document.body;
		this._clearVPCss();
		this.vp._css = (String(this.vp.className).length > 0 ? this.vp.className: "");
		this.vp.className += " dhtmlx_skin_" + this.skin + (this._r ? " dhx_wins_rtl": "");
		this.modalCoverI = document.createElement("IFRAME");
		this.modalCoverI.frameBorder = "0";
		this.modalCoverI.className = "dhx_modal_cover_ifr";
		this.modalCoverI.setAttribute("src", "javascript:false;");
		this.modalCoverI.style.display = "none";
		this.modalCoverI.style.zIndex = 0;
		this.vp.appendChild(this.modalCoverI);
		this.modalCoverD = document.createElement("DIV");
		this.modalCoverD.className = "dhx_modal_cover_dv";
		this.modalCoverD.style.display = "none";
		this.modalCoverD.style.zIndex = 0;
		this.vp.appendChild(this.modalCoverD);
		this._vpcover = document.createElement("DIV");
		this._vpcover.className = "dhx_content_vp_cover";
		this._vpcover.style.display = "none";
		this.vp.appendChild(this._vpcover);
		this._carcass = document.createElement("DIV");
		this._carcass.className = "dhx_carcass_resmove";
		this._carcass.style.display = "none";
		if (_isIE) {
			this._carcass.innerHTML = "<iframe border=0 frameborder=0 style='filter: alpha(opacity=0); width: 100%; height:100%; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; z-index:1;'></iframe><div style='position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;z-index:2;background:white;filter:alpha(opacity=0);opacity:0;'></div>";
			if (navigator.userAgent.indexOf("MSIE 10") >= 0) {} else {
				this._carcass.childNodes[0].setAttribute("src", "javascript:false;")
			}
		}
		this._carcass.onselectstart = function(b) {
			b = b || event;
			b.returnValue = false
		};
		this.vp.appendChild(this._carcass)
	};
	this._clearVPCss = function(b) {
		this.vp.className = String(this.vp.className).replace(/[a-z_]{1,}/gi,
		function(c) {
			return ({
				dhtmlx_skin_dhx_skyblue: 1,
				dhtmlx_skin_dhx_blue: 1,
				dhtmlx_skin_dhx_black: 1,
				dhtmlx_skin_dhx_web: 1,
				dhtmlx_skin_dhx_terrace: 1
			} [c] == 1 ? "": c)
		})
	};
	this._autoResizeViewport = function() {
		for (var j in this.wins) {
			if (this.wins[j]._isFullScreened) {
				this.wins[j].adjustContent(document.body, 0, 0, false, 0);
				this.wins[j].updateNestedObjects()
			}
			if (this.wins[j]._isMaximized && this.wins[j].style.display != "none") {
				this._restoreWindow(j);
				this._maximizeWindow(j)
			}
		}
		if (this.vp == document.body) {
			return
		}
		if (this.autoViewport == false) {
			return
		}
		this.vp.style.width = (_isIE ? document.body.offsetWidth - 4 : window.innerWidth) + "px";
		this.vp.style.height = (_isIE ? document.body.offsetHeight - 4 : window.innerHeight) + "px";
		for (var j in this.wins) {
			var b = this.wins[j];
			var c = false;
			var i = false;
			if (b.x > this.vp.offsetWidth - 10) {
				b.x = this.vp.offsetWidth - 10;
				c = true
			}
			var d = (b._skinParams != null ? b._skinParams: this.skinParams[this.skin]);
			if (b.y + d.header_height > this.vp.offsetHeight) {
				b.y = this.vp.offsetHeight - d.header_height;
				i = true
			}
			if (c || i) {
				this._engineRedrawWindowPos(b)
			}
		}
	};
	this.enableAutoViewport = function(b) {
		if (this.vp != document.body) {
			return
		}
		this.autoViewport = b;
		if (b == false) {
			if (this.vp == document.body) {
				document.body.className = this.vp._css
			}
			this.vp.removeChild(this.modalCoverI);
			this.vp.removeChild(this.modalCoverD);
			this.vp.removeChild(this._vpcover);
			this.vp.removeChild(this._carcass);
			this.vp = null;
			this.vp = document.createElement("DIV");
			this.vp.autocreated = true;
			this.vp.className = "dhtmlx_winviewport dhtmlx_skin_" + this.skin + (this._r ? " dhx_wins_rtl": "");
			this.vp.style.left = "0px";
			this.vp.style.top = "0px";
			document.body.appendChild(this.vp);
			this.vp.ax = 0;
			this.vp.ay = 0;
			this._autoResizeViewport();
			this.vp.appendChild(this.modalCoverI);
			this.vp.appendChild(this.modalCoverD);
			this.vp.appendChild(this._vpcover);
			this.vp.appendChild(this._carcass)
		}
	};
	this.attachViewportTo = function(b) {
		if (this.autoViewport == false) {
			this.vp.removeChild(this.modalCoverI);
			this.vp.removeChild(this.modalCoverD);
			this.vp.removeChild(this._vpcover);
			this.vp.removeChild(this._carcass);
			if (this.vp != document.body) {
				this.vp.parentNode.removeChild(this.vp)
			}
			this.vp = null;
			this.vp = (typeof(b) == "string" ? document.getElementById(b) : b);
			this.vp.autocreated = false;
			this._clearVPCss();
			this.vp.className += " dhtmlx_skin_" + this.skin + (this._r ? " dhx_wins_rtl": "");
			this.vp.style.position = "relative";
			this.vp.style.overflow = "hidden";
			this.vp.ax = 0;
			this.vp.ay = 0;
			this.vp.appendChild(this.modalCoverI);
			this.vp.appendChild(this.modalCoverD);
			this.vp.appendChild(this._vpcover);
			this.vp.appendChild(this._carcass)
		}
	};
	this.setViewport = function(j, c, i, b, d) {
		if (this.autoViewport == false) {
			this.vp.style.left = j + "px";
			this.vp.style.top = c + "px";
			this.vp.style.width = i + "px";
			this.vp.style.height = b + "px";
			if (d != null) {
				d.appendChild(this.vp)
			}
			this.vp.ax = getAbsoluteLeft(this.vp);
			this.vp.ay = getAbsoluteTop(this.vp)
		}
	};
	this._effects = {
		move: false,
		resize: false
	};
	this.setEffect = function(c, b) {
		if ((this._effects[c] != null) && (typeof(b) == "boolean")) {
			this._effects[c] = b
		}
	};
	this.getEffect = function(b) {
		return this._effects[b]
	};
	this.createWindow = function(p, n, c, d, o) {
		var l = document.createElement("DIV");
		l.className = "dhtmlx_window_inactive";
		l.dir = "ltr";
		for (var m in this.wins) {
			this.wins[m].zi += this.zIndexStep;
			this.wins[m].style.zIndex = this.wins[m].zi;
			if (this.iframeMode && this.wins[m].ifr) {
				this.wins[m].ifr.style.zIndex = this.wins[m].style.zIndex - 1
			}
		}
		l.zi = this.zIndexStep;
		l.style.zIndex = l.zi;
		l.active = false;
		l._isWindow = true;
		l.isWindow = true;
		l.w = Number(d);
		l.h = Number(o);
		l.x = n;
		l.y = c;
		this._engineFixWindowPosInViewport(l);
		l._isModal = false;
		l._allowResize = true;
		l.maxW = "auto";
		l.maxH = "auto";
		l.minW = 200;
		l.minH = 140;
		l.iconsPresent = true;
		l.icons = new Array(this.imagePath + this.pathPrefix + this.skin + "/active/icon_normal.gif", this.imagePath + this.pathPrefix + this.skin + "/inactive/icon_normal.gif");
		l._allowMove = true;
		l._allowMoveGlobal = true;
		l._allowResizeGlobal = true;
		l._keepInViewport = false;
		var b = this.skinParams[this.skin];
		l.idd = p;
		this.vp.appendChild(l);
		this._engineSetWindowBody(l);
		this._engineRedrawWindowPos(l);
		this._engineRedrawWindowSize(l);
		this._engineUpdateWindowIcon(l, l.icons[0]);
		this._engineDiableOnSelectInWindow(l, true);
		this.wins[p] = l;
		dhtmlxEventable(l);
		this._engineGetWindowHeader(l)[this._isIPad ? "ontouchstart": "onmousedown"] = function(g) {
			g = g || event;
			var h = f.wins[this.idd];
			if (!h.isOnTop()) {
				h.bringToTop()
			}
			if (f._engineGetWindowHeaderState(h)) {
				return
			}
			if (!f._engineCheckHeaderMouseDown(h, g)) {
				return
			}
			if (!h._allowMove || !h._allowMoveGlobal) {
				return
			}
			f._wasMoved = false;
			h.moveOffsetX = h.x - (f._isIPad ? g.touches[0].clientX: g.clientX);
			h.moveOffsetY = h.y - (f._isIPad ? g.touches[0].clientY: g.clientY);
			f.movingWin = h;
			if (f._effects.move == false) {
				f._carcass.x = f.movingWin.x;
				f._carcass.y = f.movingWin.y;
				f._carcass.w = parseInt(f.movingWin.style.width) + (_isIE ? 0 : -2);
				f._carcass.h = parseInt(f.movingWin.style.height) + (_isIE ? 0 : -2);
				f._carcass.style.left = f._carcass.x + "px";
				f._carcass.style.top = f._carcass.y + "px";
				f._carcass.style.width = f._carcass.w + "px";
				f._carcass.style.height = f._carcass.h + "px";
				f._carcass.style.zIndex = f._getTopZIndex(true) + 1;
				f._carcass._keepInViewport = l._keepInViewport
			}
			f._blockSwitcher(true);
			f._vpcover.style.zIndex = f.movingWin.style.zIndex - 1;
			f._vpcover.style.display = "";
			g.returnValue = false;
			g.cancelBubble = true;
			return false
		};
		this._engineGetWindowHeader(l).ondblclick = function(g) {
			var h = f.wins[this.idd];
			if (!f._engineCheckHeaderMouseDown(h, g || event)) {
				return
			}
			if (h._allowResizeGlobal && !h._isParked) {
				if (h._isMaximized == true) {
					f._restoreWindow(h.idd)
				} else {
					f._maximizeWindow(h.idd)
				}
			}
			h = null
		};
		l.setText = function(g) {
			f._engineGetWindowLabel(this).innerHTML = g
		};
		l.getText = function() {
			return f._engineGetWindowLabel(this).innerHTML
		};
		l.getId = function() {
			return this.idd
		};
		l.show = function() {
			f._showWindow(this)
		};
		l.hide = function() {
			f._hideWindow(this)
		};
		l.minimize = function() {
			f._restoreWindow(this.idd)
		};
		l.maximize = function() {
			f._maximizeWindow(this.idd)
		};
		l.close = function() {
			f._closeWindow(this.idd)
		};
		l.park = function() {
			if (this._isParkedAllowed) {
				f._parkWindow(this.idd)
			}
		};
		l.stick = function() {
			f._stickWindow(this.idd)
		};
		l.unstick = function() {
			f._unstickWindow(this.idd)
		};
		l.isSticked = function() {
			return this._isSticked
		};
		l.setIcon = function(g, h) {
			f._setWindowIcon(l, g, h)
		};
		l.getIcon = function() {
			return f._getWindowIcon(this)
		};
		l.clearIcon = function() {
			f._clearWindowIcons(this)
		};
		l.restoreIcon = function() {
			f._restoreWindowIcons(this)
		};
		l.keepInViewport = function(g) {
			this._keepInViewport = g
		};
		l.setModal = function(g) {
			if (g == true) {
				if (f.modalWin != null || f.modalWin == this) {
					return
				}
				f._setWindowModal(this, true)
			} else {
				if (f.modalWin != this) {
					return
				}
				f._setWindowModal(this, false)
			}
		};
		l.isModal = function() {
			return this._isModal
		};
		l.isHidden = function() {
			return f._isWindowHidden(this)
		};
		l.isMaximized = function() {
			return this._isMaximized
		};
		l.isParked = function() {
			return this._isParked
		};
		l.allowPark = function() {
			f._allowParking(this)
		};
		l.denyPark = function() {
			f._denyParking(this)
		};
		l.isParkable = function() {
			return this._isParkedAllowed
		};
		l.allowResize = function() {
			f._allowReszieGlob(this)
		};
		l.denyResize = function() {
			f._denyResize(this)
		};
		l.isResizable = function() {
			return this._allowResizeGlobal
		};
		l.allowMove = function() {
			if (!this._isMaximized) {
				this._allowMove = true
			}
			this._allowMoveGlobal = true
		};
		l.denyMove = function() {
			this._allowMoveGlobal = false
		};
		l.isMovable = function() {
			return this._allowMoveGlobal
		};
		l.bringToTop = function() {
			f._bringOnTop(this);
			f._makeActive(this)
		};
		l.bringToBottom = function() {
			f._bringOnBottom(this)
		};
		l.isOnTop = function() {
			return f._isWindowOnTop(this)
		};
		l.isOnBottom = function() {
			return f._isWindowOnBottom(this)
		};
		l.setPosition = function(h, g) {
			this.x = h;
			this.y = g;
			f._engineFixWindowPosInViewport(this);
			f._engineRedrawWindowPos(this)
		};
		l.getPosition = function() {
			return new Array(this.x, this.y)
		};
		l.setDimension = function(g, h) {
			if (g != null) {
				if (this.maxW != "auto") {
					if (g > this.maxW) {
						g = this.maxW
					}
				}
				if (g < this.minW) {
					g = this.minW
				}
				this.w = g
			}
			if (h != null) {
				if (this.maxH != "auto") {
					if (h > this.maxH) {
						h = this.maxH
					}
				}
				if (h < this.minH) {
					h = this.minH
				}
				this.h = h
			}
			f._fixWindowDimensionInViewport(this);
			f._engineFixWindowPosInViewport(this);
			f._engineRedrawWindowSize(this);
			this.updateNestedObjects()
		};
		l.getDimension = function() {
			return new Array(this.w, this.h)
		};
		l.setMaxDimension = function(g, h) {
			this.maxW = (isNaN(g) ? "auto": g);
			this.maxH = (isNaN(h) ? "auto": h);
			f._engineRedrawWindowSize(this)
		};
		l.getMaxDimension = function() {
			return new Array(this.maxW, this.maxH)
		};
		l.setMinDimension = function(h, g) {
			if (h != null) {
				this.minW = h
			}
			if (g != null) {
				this.minH = g
			}
			f._fixWindowDimensionInViewport(this);
			f._engineRedrawWindowPos(this)
		};
		l.getMinDimension = function() {
			return new Array(this.minW, this.minH)
		};
		l._adjustToContent = function(h, g) {
			f._engineAdjustWindowToContent(this, h, g)
		};
		l._doOnAttachMenu = function() {
			f._engineRedrawWindowSize(this);
			this.updateNestedObjects()
		};
		l._doOnAttachToolbar = function() {
			f._engineRedrawWindowSize(this);
			this.updateNestedObjects()
		};
		l._doOnAttachStatusBar = function() {
			f._engineRedrawWindowSize(this);
			this.updateNestedObjects()
		};
		l._doOnFrameMouseDown = function() {
			this.bringToTop()
		};
		l._doOnFrameContentLoaded = function() {
			f.callEvent("onContentLoaded", [this])
		};
		l.addUserButton = function(k, g, h, j) {
			var i = f._addUserButton(this, k, g, h, j);
			return i
		};
		l.removeUserButton = function(g) {
			g = String(g).toLowerCase();
			if (! ((g == "minmax1") || (g == "minmax2") || (g == "park") || (g == "close") || (g == "stick") || (g == "unstick") || (g == "help"))) {
				if (btn != null) {
					f._removeUserButton(this, g)
				}
			}
		};
		l.progressOn = function() {
			f._engineSwitchWindowProgress(this, true)
		};
		l.progressOff = function() {
			f._engineSwitchWindowProgress(this, false)
		};
		l.setToFullScreen = function(g) {
			f._setWindowToFullScreen(this, g)
		};
		l.showHeader = function() {
			f._engineSwitchWindowHeader(this, true)
		};
		l.hideHeader = function() {
			f._engineSwitchWindowHeader(this, false)
		};
		l.progressOff();
		l.canStartResize = false;
		l.onmousemove = function(j) {
			if (_isIE && this._isMaximized) {
				return true
			}
			j = j || event;
			var g = j.target || j.srcElement;
			if (String(g.className).search("dhtmlx_wins_resizer") < 0) {
				g = null
			}
			if (!this._allowResize || this._allowResizeGlobal == false || !g) {
				if (g) {
					if (g.style.cursor != "default") {
						g.style.cursor = "default"
					}
				}
				if (this.style.cursor != "default") {
					this.style.cursor = "default"
				}
				this.canStartResize = false;
				return true
			}
			if (f.resizingWin != null) {
				return
			}
			if (f.movingWin != null) {
				return
			}
			if (this._isParked) {
				return
			}
			if (f._isIPad) {
				var h = j.touches[0].clientX;
				var i = j.touches[0].clientY
			} else {
				var h = (_isIE || _isOpera ? j.offsetX: j.layerX);
				var i = (_isIE || _isOpera ? j.offsetY: j.layerY)
			}
			var s = f._engineAllowWindowResize(l, g, h, i);
			if (s == null) {
				this.canStartResize = false;
				if (g.style.cursor != "default") {
					g.style.cursor = "default"
				}
				if (this.style.cursor != "default") {
					this.style.cursor = "default"
				}
				return
			}
			f.resizingDirs = s;
			var k = {
				x: j.clientX,
				y: j.clientY
			};
			switch (f.resizingDirs) {
			case "border_left":
				g.style.cursor = "w-resize";
				this.resizeOffsetX = this.x - k.x;
				break;
			case "border_right":
				g.style.cursor = "e-resize";
				this.resizeOffsetXW = this.x + this.w - k.x;
				break;
			case "border_top":
				g.style.cursor = "n-resize";
				this.resizeOffsetY = this.y - k.y;
				break;
			case "border_bottom":
				g.style.cursor = "n-resize";
				this.resizeOffsetYH = this.y + this.h - k.y;
				break;
			case "corner_left":
				g.style.cursor = "sw-resize";
				this.resizeOffsetX = this.x - j.clientX;
				this.resizeOffsetYH = this.y + this.h - k.y;
				break;
			case "corner_up_left":
				g.style.cursor = "nw-resize";
				this.resizeOffsetY = this.y - k.y;
				this.resizeOffsetX = this.x - k.x;
				break;
			case "corner_right":
				g.style.cursor = "nw-resize";
				this.resizeOffsetXW = this.x + this.w - k.x;
				this.resizeOffsetYH = this.y + this.h - k.y;
				break;
			case "corner_up_right":
				g.style.cursor = "sw-resize";
				this.resizeOffsetY = this.y - k.y;
				this.resizeOffsetXW = this.x + this.w - k.x;
				break
			}
			this.canStartResize = true;
			this.style.cursor = g.style.cursor;
			j.cancelBubble = true;
			j.returnValue = false;
			return false
		};
		l.onmousedown = function(g) {
			if (f._getActive() != this) {
				f._makeActive(this)
			}
			f._bringOnTop(this);
			if (this.canStartResize) {
				f._blockSwitcher(true);
				f.resizingWin = this;
				if (!f._effects.resize) {
					f._carcass.x = f.resizingWin.x;
					f._carcass.y = f.resizingWin.y;
					f._carcass.w = Number(f.resizingWin.w) + (_isIE ? 0 : -2);
					f._carcass.h = Number(f.resizingWin.h) + (_isIE ? 0 : -2);
					f._carcass.style.left = f._carcass.x + "px";
					f._carcass.style.top = f._carcass.y + "px";
					f._carcass.style.width = f._carcass.w + "px";
					f._carcass.style.height = f._carcass.h + "px";
					f._carcass.style.zIndex = f._getTopZIndex(true) + 1;
					f._carcass.style.cursor = this.style.cursor;
					f._carcass._keepInViewport = this._keepInViewport;
					f._carcass.style.display = ""
				}
				f._vpcover.style.zIndex = f.resizingWin.style.zIndex - 1;
				f._vpcover.style.display = "";
				if (this.vs[this.av].layout) {
					this.callEvent("_onBeforeTryResize", [this])
				}
				g = g || event
			}
		};
		this._addDefaultButtons(l.idd);
		l.button = function(g) {
			g = String(g).toLowerCase();
			var h = null;
			if (this.btns[g] != null) {
				h = this.btns[g]
			}
			return h
		};
		l.center = function() {
			f._centerWindow(this, false)
		};
		l.centerOnScreen = function() {
			f._centerWindow(this, true)
		};
		l._attachContent("empty", null);
		l._redraw = function() {
			f._engineRedrawWindowSize(this)
		};
		l.bringToTop();
		this._engineRedrawWindowSize(l);
		return this.wins[p]
	};
	this.zIndexStep = 2000;
	this._getTopZIndex = function(c) {
		var b = 0;
		for (var d in this.wins) {
			if (c == true) {
				if (this.wins[d].zi > b) {
					b = this.wins[d].zi
				}
			} else {
				if (this.wins[d].zi > b && !this.wins[d]._isSticked) {
					b = this.wins[d].zi
				}
			}
		}
		return b
	};
	this.movingWin = null;
	this._moveWindow = function(c) {
		if (this.movingWin != null) {
			if (!this.movingWin._allowMove || !this.movingWin._allowMoveGlobal) {
				return
			}
			if (this._effects.move == true) {
				if (this._engineGetWindowHeader(this.movingWin).style.cursor != "move") {
					this._engineGetWindowHeader(this.movingWin).style.cursor = "move"
				}
				this._wasMoved = true;
				this.movingWin.x = (this._isIPad ? c.touches[0].clientX: c.clientX) + this.movingWin.moveOffsetX;
				this.movingWin.y = (this._isIPad ? c.touches[0].clientY: c.clientY) + this.movingWin.moveOffsetY;
				this._engineFixWindowPosInViewport(this.movingWin);
				this._engineRedrawWindowPos(this.movingWin)
			} else {
				if (this._carcass.style.display != "") {
					this._carcass.style.display = ""
				}
				if (this._carcass.style.cursor != "move") {
					this._carcass.style.cursor = "move"
				}
				if (this._engineGetWindowHeader(this.movingWin).style.cursor != "move") {
					this._engineGetWindowHeader(this.movingWin).style.cursor = "move"
				}
				this._carcass.x = (this._isIPad ? c.touches[0].clientX: c.clientX) + this.movingWin.moveOffsetX;
				this._carcass.y = (this._isIPad ? c.touches[0].clientY: c.clientY) + this.movingWin.moveOffsetY;
				this._wasMoved = true;
				this._engineFixWindowPosInViewport(this._carcass);
				this._carcass.style.left = this._carcass.x + "px";
				this._carcass.style.top = this._carcass.y + "px"
			}
		}
		if (this.resizingWin != null) {
			if (!this.resizingWin._allowResize) {
				return
			}
			var d = {
				x: c.clientX,
				y: c.clientY
			};
			if (this.resizingDirs == "border_left" || this.resizingDirs == "corner_left" || this.resizingDirs == "corner_up_left") {
				if (this._effects.resize) {
					var h = d.x + this.resizingWin.resizeOffsetX;
					var b = (h > this.resizingWin.x ? -1 : 1);
					newW = this.resizingWin.w + Math.abs(h - this.resizingWin.x) * b;
					if ((newW < this.resizingWin.minW) && (b < 0)) {
						this.resizingWin.x = this.resizingWin.x + this.resizingWin.w - this.resizingWin.minW;
						this.resizingWin.w = this.resizingWin.minW
					} else {
						this.resizingWin.w = newW;
						this.resizingWin.x = h
					}
					this._engineRedrawWindowPos(this.resizingWin);
					this._engineRedrawWindowSize(this.resizingWin)
				} else {
					var h = d.x + this.resizingWin.resizeOffsetX;
					var b = (h > this._carcass.x ? -1 : 1);
					newW = this._carcass.w + Math.abs(h - this._carcass.x) * b;
					if (newW > this.resizingWin.maxW) {
						newW = this.resizingWin.maxW;
						h = this._carcass.x + this._carcass.w - this.resizingWin.maxW
					}
					if ((newW < this.resizingWin.minW) && (b < 0)) {
						this._carcass.x = this._carcass.x + this._carcass.w - this.resizingWin.minW;
						this._carcass.w = this.resizingWin.minW
					} else {
						this._carcass.w = newW;
						this._carcass.x = h
					}
					this._carcass.style.left = this._carcass.x + "px";
					this._carcass.style.width = this._carcass.w + "px"
				}
			}
			if (this.resizingDirs == "border_right" || this.resizingDirs == "corner_right" || this.resizingDirs == "corner_up_right") {
				if (this._effects.resize) {
					var h = d.x - (this.resizingWin.x + this.resizingWin.w) + this.resizingWin.resizeOffsetXW;
					newW = this.resizingWin.w + h;
					if (newW < this.resizingWin.minW) {
						newW = this.resizingWin.minW
					}
					this.resizingWin.w = newW;
					this._engineRedrawWindowPos(this.resizingWin);
					this._engineRedrawWindowSize(this.resizingWin)
				} else {
					var h = d.x - (this._carcass.x + this._carcass.w) + this.resizingWin.resizeOffsetXW;
					newW = this._carcass.w + h;
					if (newW < this.resizingWin.minW) {
						newW = this.resizingWin.minW
					}
					if (this.resizingWin.maxW != "auto") {
						if (newW > this.resizingWin.maxW) {
							newW = this.resizingWin.maxW
						}
					}
					this._carcass.w = newW;
					this._carcass.style.width = this._carcass.w + "px"
				}
			}
			if (this.resizingDirs == "border_bottom" || this.resizingDirs == "corner_left" || this.resizingDirs == "corner_right") {
				if (this._effects.resize) {
					var h = d.y - (this.resizingWin.y + this.resizingWin.h) + this.resizingWin.resizeOffsetYH;
					newH = this.resizingWin.h + h;
					if (newH < this.resizingWin.minH) {
						newH = this.resizingWin.minH
					}
					this.resizingWin.h = newH;
					this._engineRedrawWindowPos(this.resizingWin);
					this._engineRedrawWindowSize(this.resizingWin)
				} else {
					var h = d.y - (this._carcass.y + this._carcass.h) + this.resizingWin.resizeOffsetYH;
					newH = this._carcass.h + h;
					if (newH < this.resizingWin.minH) {
						newH = this.resizingWin.minH
					}
					if (newH > this.resizingWin.maxH) {
						newH = this.resizingWin.maxH
					}
					this._carcass.h = newH;
					this._carcass.style.height = this._carcass.h + "px"
				}
			}
			if (this.resizingDirs == "border_top" || this.resizingDirs == "corner_up_right" || this.resizingDirs == "corner_up_left") {
				if (this._effects.resize) {} else {
					var h = d.y + this.resizingWin.resizeOffsetY;
					var b = (h > this.resizingWin.y ? -1 : 1);
					newH = this.resizingWin.h + Math.abs(h - this.resizingWin.y) * b;
					if (newH > this.resizingWin.maxH) {
						newH = this.resizingWin.maxH;
						h = this.resizingWin.y + this.resizingWin.h - this.resizingWin.maxH
					}
					if ((newH < this.resizingWin.minH) && (b < 0)) {
						this._carcass.y = this._carcass.y + this._carcass.h - this.resizingWin.minH;
						this._carcass.h = this.resizingWin.minH
					} else {
						this._carcass.h = newH + (_isIE ? 0 : -2);
						this._carcass.y = h
					}
					this._carcass.style.top = this._carcass.y + "px";
					this._carcass.style.height = this._carcass.h + "px"
				}
			}
		}
	};
	this._stopMove = function() {
		if (this.movingWin != null) {
			if (this._effects.move) {
				var b = this.movingWin;
				this.movingWin = null;
				this._blockSwitcher(false);
				this._engineGetWindowHeader(b).style.cursor = "";
				if (_isFF) {
					b.h++;
					f._engineRedrawWindowPos(b);
					b.h--;
					f._engineRedrawWindowPos(b)
				}
			} else {
				this._carcass.style.cursor = "";
				this._carcass.style.display = "none";
				var b = this.movingWin;
				this._engineGetWindowHeader(b).style.cursor = "";
				this.movingWin = null;
				this._blockSwitcher(false);
				b.setPosition(parseInt(this._carcass.style.left), parseInt(this._carcass.style.top))
			}
			this._vpcover.style.display = "none";
			if (this._wasMoved) {
				if (b.checkEvent("onMoveFinish")) {
					b.callEvent("onMoveFinish", [b])
				} else {
					this.callEvent("onMoveFinish", [b])
				}
			}
			this._wasMoved = false
		}
		if (this.resizingWin != null) {
			var b = this.resizingWin;
			this.resizingWin = null;
			this._blockSwitcher(false);
			if (!this._effects.resize) {
				this._carcass.style.display = "none";
				b.setDimension(this._carcass.w + (_isIE ? 0 : 2), this._carcass.h + (_isIE ? 0 : 2));
				b.setPosition(this._carcass.x, this._carcass.y)
			} else {
				b.updateNestedObjects()
			}
			if (b.vs[b.av].layout) {
				b.vs[b.av].layout.callEvent("onResize", [])
			}
			this._vpcover.style.display = "none";
			if (b.checkEvent("onResizeFinish")) {
				b.callEvent("onResizeFinish", [b])
			} else {
				this.callEvent("onResizeFinish", [b])
			}
		}
	};
	this._fixWindowDimensionInViewport = function(b) {
		if (b.w < b.minW) {
			b.w = b.minW
		}
		if (b._isParked) {
			return
		}
		if (b.h < b.minH) {
			b.h = b.minH
		}
	};
	this._bringOnTop = function(b) {
		var d = b.zi;
		var c = this._getTopZIndex(b._isSticked);
		for (var h in this.wins) {
			if (this.wins[h] != b) {
				if (b._isSticked || (!b._isSticked && !this.wins[h]._isSticked)) {
					if (this.wins[h].zi > d) {
						this.wins[h].zi = this.wins[h].zi - this.zIndexStep;
						this.wins[h].style.zIndex = this.wins[h].zi;
						if (this.iframeMode && this.wins[h].ifr) {
							this.wins[h].ifr.style.zIndex = this.wins[h].style.zIndex - 1
						}
					}
				}
			}
		}
		b.zi = c;
		b.style.zIndex = b.zi;
		if (this.iframeMode && b.ifr) {
			b.ifr.style.zIndex = c - 1
		}
	};
	this._makeActive = function(c, d) {
		for (var h in this.wins) {
			if (this.wins[h] == c) {
				var b = false;
				if (this.wins[h].className != "dhtmlx_window_active" && !d) {
					b = true
				}
				this.wins[h].className = "dhtmlx_window_active";
				this._engineUpdateWindowIcon(this.wins[h], this.wins[h].icons[0]);
				if (b == true) {
					if (c.checkEvent("onFocus")) {
						c.callEvent("onFocus", [c])
					} else {
						this.callEvent("onFocus", [c])
					}
				}
			} else {
				this.wins[h].className = "dhtmlx_window_inactive";
				this._engineUpdateWindowIcon(this.wins[h], this.wins[h].icons[1])
			}
		}
	};
	this._getActive = function() {
		var b = null;
		for (var c in this.wins) {
			if (this.wins[c].className == "dhtmlx_window_active") {
				b = this.wins[c]
			}
		}
		return b
	};
	this._centerWindow = function(j, b) {
		if (j._isMaximized == true) {
			return
		}
		if (b == true) {
			var l = (_isIE ? document.body.offsetWidth: window.innerWidth);
			var c = (_isIE ? document.body.offsetHeight: window.innerHeight)
		} else {
			var l = (this.vp == document.body ? document.body.offsetWidth: (Number(parseInt(this.vp.style.width)) && String(this.vp.style.width).search("%") == -1 ? parseInt(this.vp.style.width) : this.vp.offsetWidth));
			var c = (this.vp == document.body ? document.body.offsetHeight: (Number(parseInt(this.vp.style.height)) && String(this.vp.style.height).search("%") == -1 ? parseInt(this.vp.style.height) : this.vp.offsetHeight))
		}
		var d = Math.round((l / 2) - (j.w / 2));
		var k = Math.round((c / 2) - (j.h / 2));
		j.x = d;
		j.y = k;
		this._engineFixWindowPosInViewport(j);
		this._engineRedrawWindowPos(j)
	};
	this._addDefaultButtons = function(u) {
		var t = this.wins[u];
		var v = this._engineGetWindowButton(t, "stick");
		v.title = this.i18n.stick;
		v.isVisible = false;
		v.style.display = "none";
		v._isEnabled = true;
		v.isPressed = false;
		v.label = "stick";
		v._doOnClick = function() {
			this.isPressed = true;
			f._stickWindow(this.winId)
		};
		var d = this._engineGetWindowButton(t, "sticked");
		d.title = this.i18n.unstick;
		d.isVisible = false;
		d.style.display = "none";
		d._isEnabled = true;
		d.isPressed = false;
		d.label = "sticked";
		d._doOnClick = function() {
			this.isPressed = false;
			f._unstickWindow(this.winId)
		};
		var p = this._engineGetWindowButton(t, "help");
		p.title = this.i18n.help;
		p.isVisible = false;
		p.style.display = "none";
		p._isEnabled = true;
		p.isPressed = false;
		p.label = "help";
		p._doOnClick = function() {
			f._needHelp(this.winId)
		};
		var b = this._engineGetWindowButton(t, "park");
		b.titleIfParked = this.i18n.parkdown;
		b.titleIfNotParked = this.i18n.parkup;
		b.title = b.titleIfNotParked;
		b.isVisible = true;
		b._isEnabled = true;
		b.isPressed = false;
		b.label = "park";
		b._doOnClick = function() {
			f._parkWindow(this.winId)
		};
		var c = this._engineGetWindowButton(t, "minmax1");
		c.title = this.i18n.maximize;
		c.isVisible = true;
		c._isEnabled = true;
		c.isPressed = false;
		c.label = "minmax1";
		c._doOnClick = function() {
			f._maximizeWindow(this.winId)
		};
		var o = this._engineGetWindowButton(t, "minmax2");
		o.title = this.i18n.restore;
		o.isVisible = false;
		o.style.display = "none";
		o._isEnabled = true;
		o.isPressed = false;
		o.label = "minmax2";
		o._doOnClick = function() {
			f._restoreWindow(this.winId)
		};
		var r = this._engineGetWindowButton(t, "close");
		r.title = this.i18n.close;
		r.isVisible = true;
		r._isEnabled = true;
		r.isPressed = false;
		r.label = "close";
		r._doOnClick = function() {
			f._closeWindow(this.winId)
		};
		var s = this._engineGetWindowButton(t, "dock");
		s.title = this.i18n.dock;
		s.style.display = "none";
		s.isVisible = false;
		s._isEnabled = true;
		s.isPressed = false;
		s.label = "dock";
		s._doOnClick = function() {};
		t._isSticked = false;
		t._isParked = false;
		t._isParkedAllowed = true;
		t._isMaximized = false;
		t._isDocked = false;
		t.btns = {};
		t.btns.stick = v;
		t.btns.sticked = d;
		t.btns.help = p;
		t.btns.park = b;
		t.btns.minmax1 = c;
		t.btns.minmax2 = o;
		t.btns.close = r;
		t.btns.dock = s;
		for (var q in t.btns) {
			t.btns[q].winId = t.idd;
			this._attachEventsOnButton(t.idd, q)
		}
		t = v = d = p = b = c = o = r = s = null
	};
	this._attachEventsOnButton = function(d, c) {
		var b = this.wins[d].btns[c];
		if (!this._isIPad) {
			b.onmouseover = function() {
				if (this._isEnabled) {
					this.className = "dhtmlx_wins_btns_button dhtmlx_button_" + this.label + "_over_" + (this.isPressed ? "pressed": "default")
				} else {
					this.className = "dhtmlx_wins_btns_button dhtmlx_button_" + this.label + "_disabled"
				}
			};
			b.onmouseout = function() {
				if (this._isEnabled) {
					this.isPressed = false;
					this.className = "dhtmlx_wins_btns_button dhtmlx_button_" + this.label + "_default"
				} else {
					this.className = "dhtmlx_wins_btns_button dhtmlx_button_" + this.label + "_disabled"
				}
			};
			b.onmousedown = function() {
				if (this._isEnabled) {
					this.isPressed = true;
					this.className = "dhtmlx_wins_btns_button dhtmlx_button_" + this.label + "_over_pressed"
				} else {
					this.className = "dhtmlx_wins_btns_button dhtmlx_button_" + this.label + "_disabled"
				}
			};
			b.onmouseup = function() {
				if (this._isEnabled) {
					var h = this.isPressed;
					this.isPressed = false;
					this.className = "dhtmlx_wins_btns_button dhtmlx_button_" + this.label + "_over_default";
					if (h) {
						if (this.checkEvent("onClick")) {
							this.callEvent("onClick", [f.wins[this.winId], this])
						} else {
							this._doOnClick()
						}
					}
				} else {
					this.className = "dhtmlx_wins_btns_button dhtmlx_button_" + this.label + "_disabled"
				}
			}
		} else {
			b.ontouchstart = function(h) {
				h.cancelBubble = true;
				h.returnValue = false;
				return false
			};
			b.ontouchend = function(h) {
				h.cancelBubble = true;
				h.returnValue = false;
				if (!this._isEnabled) {
					return false
				}
				if (this.checkEvent("onClick")) {
					this.callEvent("onClick", [f.wins[this.winId], this])
				} else {
					this._doOnClick()
				}
				return false
			}
		}
		b.show = function() {
			f._showButton(f.wins[this.winId], this.label, true)
		};
		b.hide = function() {
			f._hideButton(f.wins[this.winId], this.label, true)
		};
		b.enable = function() {
			f._enableButton(f.wins[this.winId], this.label)
		};
		b.disable = function() {
			f._disableButton(f.wins[this.winId], this.label)
		};
		b.isEnabled = function() {
			return this._isEnabled
		};
		b.isHidden = function() {
			return (!this.isVisible)
		};
		dhtmlxEventable(b);
		b = null
	};
	this._parkWindow = function(h, c) {
		var d = this.wins[h];
		if (!d._isParkedAllowed && !c) {
			return
		}
		if (this.enableParkEffect && d.parkBusy) {
			return
		}
		if (d._isParked) {
			if (this.enableParkEffect && !c) {
				d.parkBusy = true;
				this._doParkDown(d)
			} else {
				d.h = d.lastParkH;
				this._engineRedrawWindowSize(d);
				this._engineDoOnWindowParkDown(d);
				d.updateNestedObjects();
				d.btns.park.title = d.btns.park.titleIfNotParked;
				if (d._allowResizeGlobal == true) {
					this._enableButton(d, "minmax1");
					this._enableButton(d, "minmax2")
				}
				d._isParked = false;
				if (!c) {
					if (d.checkEvent("onParkDown")) {
						d.callEvent("onParkDown", [d])
					} else {
						this.callEvent("onParkDown", [d])
					}
				}
			}
		} else {
			if (this.enableParkEffect && !c) {
				d.lastParkH = (String(d.h).search(/\%$/) == -1 ? d.h: d.offsetHeight);
				if (d._allowResizeGlobal == true) {
					this._disableButton(d, "minmax1");
					this._disableButton(d, "minmax2")
				}
				if (this.enableParkEffect) {
					d.parkBusy = true;
					this._doParkUp(d)
				} else {
					var b = (d._skinParams != null ? d._skinParams: this.skinParams[this.skin]);
					d.h = b.header_height + b.border_bottom_height;
					d.btns.park.title = d.btns.park.titleIfParked
				}
			} else {
				d.lastParkH = (String(d.h).search(/\%$/) == -1 ? d.h: d.offsetHeight);
				d.h = this._engineGetWindowParkedHeight(d);
				this._engineRedrawWindowSize(d);
				this._engineDoOnWindowParkUp(d);
				d.btns.park.title = d.btns.park.titleIfParked;
				d._isParked = true;
				if (!c) {
					if (d.checkEvent("onParkUp")) {
						d.callEvent("onParkUp", [d])
					} else {
						this.callEvent("onParkUp", [d])
					}
				}
			}
		}
		d = null
	};
	this._allowParking = function(b) {
		b._isParkedAllowed = true;
		this._enableButton(b, "park")
	};
	this._denyParking = function(b) {
		b._isParkedAllowed = false;
		this._disableButton(b, "park")
	};
	this.enableParkEffect = false;
	this.parkStartSpeed = 80;
	this.parkSpeed = this.parkStartSpeed;
	this.parkTM = null;
	this.parkTMTime = 5;
	this._doParkUp = function(c) {
		if (String(c.h).search(/\%$/) != -1) {
			c.h = c.offsetHeight
		}
		c.h -= this.parkSpeed;
		var b = this._engineGetWindowParkedHeight(c);
		if (c.h <= b) {
			c.h = b;
			this._engineGetWindowButton(c, "park").title = this._engineGetWindowButton(c, "park").titleIfParked;
			c._isParked = true;
			c.parkBusy = false;
			this._engineRedrawWindowSize(c);
			this._engineDoOnWindowParkUp(c);
			if (c.checkEvent("onParkUp")) {
				c.callEvent("onParkUp", [c])
			} else {
				this.callEvent("onParkUp", [c])
			}
		} else {
			this._engineRedrawWindowSize(c);
			this.parkTM = window.setTimeout(function() {
				f._doParkUp(c)
			},
			this.parkTMTime)
		}
	};
	this._doParkDown = function(b) {
		b.h += this.parkSpeed;
		if (b.h >= b.lastParkH) {
			b.h = b.lastParkH;
			this._engineGetWindowButton(b, "park").title = this._engineGetWindowButton(b, "park").titleIfNotParked;
			if (b._allowResizeGlobal == true) {
				this._enableButton(b, "minmax1");
				this._enableButton(b, "minmax2")
			}
			b._isParked = false;
			b.parkBusy = false;
			this._engineRedrawWindowSize(b);
			b.updateNestedObjects();
			this._engineDoOnWindowParkDown(b);
			if (b.checkEvent("onParkDown")) {
				b.callEvent("onParkDown", [b])
			} else {
				this.callEvent("onParkDown", [b])
			}
		} else {
			this._engineRedrawWindowSize(b);
			this.parkTM = window.setTimeout(function() {
				f._doParkDown(b)
			},
			this.parkTMTime)
		}
	};
	this._enableButton = function(c, d) {
		var b = this._engineGetWindowButton(c, d);
		if (!b) {
			return
		}
		b._isEnabled = true;
		b.className = "dhtmlx_wins_btns_button dhtmlx_button_" + b.label + "_default";
		b = null
	};
	this._disableButton = function(c, d) {
		var b = this._engineGetWindowButton(c, d);
		if (!b) {
			return
		}
		b._isEnabled = false;
		b.className = "dhtmlx_wins_btns_button dhtmlx_button_" + c.btns[d].label + "_disabled";
		b = null
	};
	this._allowReszieGlob = function(b) {
		b._allowResizeGlobal = true;
		this._enableButton(b, "minmax1");
		this._enableButton(b, "minmax2")
	};
	this._denyResize = function(b) {
		b._allowResizeGlobal = false;
		this._disableButton(b, "minmax1");
		this._disableButton(b, "minmax2")
	};
	this._maximizeWindow = function(b) {
		var c = this.wins[b];
		if (c._allowResizeGlobal == false) {
			return
		}
		var d = c._isParked;
		if (d) {
			this._parkWindow(c.idd, true)
		}
		c.lastMaximizeX = c.x;
		c.lastMaximizeY = c.y;
		c.lastMaximizeW = c.w;
		c.lastMaximizeH = c.h;
		if (c.maxW != "auto" && c.maxW != "auto") {
			c.x = Math.round(c.x + (c.w - c.maxW) / 2);
			c.y = Math.round(c.y + (c.h - c.maxH) / 2);
			c._allowMove = true
		} else {
			c.x = 0;
			c.y = 0;
			c._allowMove = false
		}
		c._isMaximized = true;
		c._allowResize = false;
		c.w = (c.maxW == "auto" ? (this.vp == document.body ? "100%": (this.vp.style.width != "" && String(this.vp.style.width).search("%") == -1 ? parseInt(this.vp.style.width) : this.vp.offsetWidth)) : c.maxW);
		c.h = (c.maxH == "auto" ? (this.vp == document.body ? "100%": (this.vp.style.height != "" && String(this.vp.style.width).search("%") == -1 ? parseInt(this.vp.style.height) : this.vp.offsetHeight)) : c.maxH);
		this._hideButton(c, "minmax1");
		this._showButton(c, "minmax2");
		this._engineRedrawWindowPos(c);
		if (d) {
			this._parkWindow(c.idd, true)
		} else {
			this._engineRedrawWindowSize(c);
			c.updateNestedObjects()
		}
		if (c.checkEvent("onMaximize")) {
			c.callEvent("onMaximize", [c])
		} else {
			this.callEvent("onMaximize", [c])
		}
		c = null
	};
	this._restoreWindow = function(b) {
		var c = this.wins[b];
		if (c._allowResizeGlobal == false) {
			return
		}
		if (c.layout) {
			c.layout._defineWindowMinDimension(c)
		}
		var d = c._isParked;
		if (d) {
			this._parkWindow(c.idd, true)
		}
		if (c.maxW != "auto" && c.maxW != "auto") {
			c.x = Math.round(c.x + (c.w - c.lastMaximizeW) / 2);
			c.y = Math.round(c.y + (c.h - c.lastMaximizeH) / 2)
		} else {
			c.x = c.lastMaximizeX;
			c.y = c.lastMaximizeY
		}
		c.w = c.lastMaximizeW;
		c.h = c.lastMaximizeH;
		c._isMaximized = false;
		c._allowMove = c._allowMoveGlobal;
		c._allowResize = true;
		this._fixWindowDimensionInViewport(c);
		this._hideButton(c, "minmax2");
		this._showButton(c, "minmax1");
		this._engineRedrawWindowPos(c);
		if (d) {
			this._parkWindow(c.idd, true)
		} else {
			this._engineRedrawWindowSize(c);
			c.updateNestedObjects()
		}
		if (c.checkEvent("onMinimize")) {
			c.callEvent("onMinimize", [c])
		} else {
			this.callEvent("onMinimize", [c])
		}
		c = null
	};
	this._showButton = function(c, h, d) {
		var b = this._engineGetWindowButton(c, h);
		if (!b) {
			return
		}
		if ((!d && b._userHide) || b.isVisible === true) {
			return
		}
		b.isVisible = true;
		b.style.display = "";
		b.style.visibility = "visible";
		b._userHide = !(d == true);
		this._engineRedrawWindowTitle(c);
		b = null
	};
	this._hideButton = function(c, h, d) {
		var b = this._engineGetWindowButton(c, h);
		if (!b || (!d && b.isVisible === false)) {
			return
		}
		b.isVisible = false;
		b.style.display = "none";
		b.style.visibility = "hidden";
		b._userHide = (d == true);
		this._engineRedrawWindowTitle(c);
		b = null
	};
	this._showWindow = function(c) {
		c.style.display = "";
		if (c.checkEvent("onShow")) {
			c.callEvent("onShow", [c])
		} else {
			this.callEvent("onShow", [c])
		}
		var b = this._getActive();
		if (b == null) {
			this._bringOnTop(c);
			this._makeActive(c)
		} else {
			if (this._isWindowHidden(b)) {
				this._bringOnTop(c);
				this._makeActive(c)
			}
		}
		if (this.iframeMode && c.ifr) {
			c.ifr.style.display = ""
		}
	};
	this._hideWindow = function(c) {
		c.style.display = "none";
		if (c.checkEvent("onHide")) {
			c.callEvent("onHide", [c])
		} else {
			this.callEvent("onHide", [c])
		}
		var b = this.getTopmostWindow(true);
		if (b != null) {
			this._bringOnTop(b);
			this._makeActive(b)
		}
		if (this.iframeMode && c.ifr) {
			c.ifr.style.display = "none"
		}
	};
	this._isWindowHidden = function(c) {
		var b = (c.style.display == "none");
		return b
	};
	this._closeWindow = function(c) {
		var b = this.wins[c];
		if (this._focusFixIE) {
			this._focusFixIE.style.top = (this.vp == document.body ? 0 : getAbsoluteTop(this.vp)) + Number(b.y) + "px";
			this._focusFixIE.focus()
		}
		if (b.checkEvent("onClose")) {
			if (!b.callEvent("onClose", [b])) {
				return
			}
		} else {
			if (!this.callEvent("onClose", [b])) {
				return
			}
		}
		b = null;
		this._removeWindowGlobal(c);
		var d = {
			zi: 0
		};
		for (var h in this.wins) {
			if (this.wins[h].zi > d.zi) {
				d = this.wins[h]
			}
		}
		if (d != null) {
			this._makeActive(d)
		}
	};
	this._needHelp = function(b) {
		var c = this.wins[b];
		if (c.checkEvent("onHelp")) {
			c.callEvent("onHelp", [c])
		} else {
			this.callEvent("onHelp", [c])
		}
		c = null
	};
	this._setWindowIcon = function(c, d, b) {
		c.iconsPresent = true;
		c.icons[0] = this.imagePath + d;
		c.icons[1] = this.imagePath + b;
		this._engineUpdateWindowIcon(c, c.icons[c.isOnTop() ? 0 : 1])
	};
	this._getWindowIcon = function(b) {
		if (b.iconsPresent) {
			return new Array(b.icons[0], b.icons[1])
		} else {
			return new Array(null, null)
		}
	};
	this._clearWindowIcons = function(b) {
		b.iconsPresent = false;
		b.icons[0] = this.imagePath + this.pathPrefix + this.skin + "/active/icon_blank.gif";
		b.icons[1] = this.imagePath + this.pathPrefix + this.skin + "/inactive/icon_blank.gif";
		this._engineUpdateWindowIcon(b, b.icons[b.isOnTop() ? 0 : 1])
	};
	this._restoreWindowIcons = function(b) {
		b.iconsPresent = true;
		b.icons[0] = this.imagePath + this.pathPrefix + this.skin + "/active/icon_normal.gif";
		b.icons[1] = this.imagePath + this.pathPrefix + this.skin + "/inactive/icon_normal.gif";
		this._engineUpdateWindowIcon(b, b.icons[b.className == "dhtmlx_window_active" ? 0 : 1])
	};
	this._attachWindowContentTo = function(c, d, b, j) {
		var h = this._engineGetWindowContent(c).parentNode;
		h.parentNode.removeChild(h);
		c.hide();
		h.style.left = "0px";
		h.style.top = "0px";
		h.style.width = (b != null ? b: d.offsetWidth) + "px";
		h.style.height = (j != null ? j: d.offsetHeight) + "px";
		h.style.position = "relative";
		d.appendChild(h);
		this._engineGetWindowContent(c).style.width = h.style.width;
		this._engineGetWindowContent(c).style.height = h.style.height
	};
	this._setWindowToFullScreen = function(c, b) {
		if (b == true && !c._isFullScreened) {
			c._p1 = c.vs[c.av].dhxcont.nextSibling;
			c._p1.parentNode.removeChild(c.vs[c.av].dhxcont);
			c.hide();
			c._isFullScreened = true;
			c._FSoffsetHeight = c._offsetHeight;
			c._FSoffsetHeightSaved = c._offsetHeightSaved;
			c._FSoffsetLeft = c._offsetLeft;
			c._FSoffsetWidth = c._offsetWidth;
			c._offsetHeight = 0;
			c._offsetHeightSaved = 0;
			c._offsetLeft = 0;
			c._offsetWidth = 0;
			c.vs[c.av].dhxcont.style.position = "absolute";
			document.body.appendChild(c.vs[c.av].dhxcont);
			c.adjustContent(document.body, 0, 0, false, 0);
			c.updateNestedObjects()
		}
		if (b == false && c._isFullScreened) {
			c._p1.parentNode.insertBefore(c.vs[c.av].dhxcont, c._p1);
			c._p1 = null;
			c._isFullScreened = false;
			c._offsetHeight = c._FSoffsetHeight;
			c._offsetHeightSaved = c._FSoffsetHeightSaved;
			c._offsetLeft = c._FSoffsetLeft;
			c._offsetWidth = c._FSoffsetWidth;
			c._FSoffsetHeight = c._FSoffsetHeightSaved = c._FSoffsetLeft = c._FSoffsetWidth = null;
			c.show();
			c.setDimension(c.w, c.h);
			c.bringToTop()
		}
	};
	this._isWindowOnTop = function(c) {
		var b = (this.getTopmostWindow() == c);
		return b
	};
	this._bringOnBottom = function(b) {
		for (var c in this.wins) {
			if (this.wins[c].zi < b.zi) {
				this.wins[c].zi += this.zIndexStep;
				this.wins[c].style.zIndex = this.wins[c].zi
			}
		}
		b.zi = 50;
		b.style.zIndex = b.zi;
		this._makeActive(this.getTopmostWindow())
	};
	this._isWindowOnBottom = function(b) {
		var c = true;
		for (var d in this.wins) {
			if (this.wins[d] != b) {
				c = c && (this.wins[d].zi > b.zi)
			}
		}
		return c
	};
	this._stickWindow = function(b) {
		var c = this.wins[b];
		c._isSticked = true;
		this._hideButton(c, "stick");
		this._showButton(c, "sticked");
		this._bringOnTop(c);
		c = null
	};
	this._unstickWindow = function(b) {
		var c = this.wins[b];
		c._isSticked = false;
		this._hideButton(c, "sticked");
		this._showButton(c, "stick");
		this._bringOnTopAnyStickedWindows();
		c = null
	};
	this._addUserButton = function(j, c, d, i) {
		c = String(c).toLowerCase();
		var b = this._engineAddUserButton(j, c, d);
		b.title = i;
		b.isVisible = true;
		b._isEnabled = true;
		b.isPressed = false;
		b.label = c;
		j.btns[c] = b;
		j.btns[c].winId = j.idd;
		j.btns[c]._doOnClick = function() {};
		this._attachEventsOnButton(j.idd, c);
		b = null
	};
	this._removeUserButton = function(c, b) {
		this._removeButtonGlobal(c, b)
	};
	this._blockSwitcher = function(b) {
		for (var c in this.wins) {
			if (b == true) {
				this.wins[c].showCoverBlocker()
			} else {
				this.wins[c].hideCoverBlocker()
			}
		}
	};
	this.resizingWin = null;
	this.modalWin = null;
	this.resizingDirs = "none";
	if (_isIE) {
		this._focusFixIE = document.createElement("INPUT");
		this._focusFixIE.className = "dhx_windows_ieonclosefocusfix";
		this._focusFixIE.style.position = "absolute";
		this._focusFixIE.style.width = "1px";
		this._focusFixIE.style.height = "1px";
		this._focusFixIE.style.border = "none";
		this._focusFixIE.style.background = "none";
		this._focusFixIE.style.left = "-10px";
		this._focusFixIE.style.fontSize = "1px";
		document.body.appendChild(this._focusFixIE)
	}
	this._createViewport();
	this._doOnMouseUp = function() {
		if (f != null) {
			f._stopMove()
		}
	};
	this._doOnMoseMove = function(b) {
		b = b || event;
		if (f != null) {
			f._moveWindow(b)
		}
	};
	this._resizeTM = null;
	this._resizeTMTime = 200;
	this._lw = null;
	this._doOnResize = function() {
		if (f._lw != document.documentElement.clientHeight) {
			window.clearTimeout(f._resizeTM);
			f._resizeTM = window.setTimeout(function() {
				f._autoResizeViewport()
			},
			f._resizeTMTime)
		}
		f._lw = document.documentElement.clientHeight
	};
	this._doOnUnload = function() {
		f.unload()
	};
	this._doOnSelectStart = function(b) {
		b = b || event;
		if (f.movingWin != null || f.resizingWin != null) {
			b.returnValue = false
		}
	};
	if (_isIE) {
		document.body.attachEvent("onselectstart", this._doOnSelectStart)
	}
	dhtmlxEvent(window, "resize", this._doOnResize);
	dhtmlxEvent(document.body, "unload", this._doOnUnload);
	if (this._isIPad) {
		document.addEventListener("touchmove", this._doOnMoseMove, false);
		document.addEventListener("touchend", this._doOnMouseUp, false)
	} else {
		dhtmlxEvent(document.body, "mouseup", this._doOnMouseUp);
		dhtmlxEvent(this.vp, "mousemove", this._doOnMoseMove);
		dhtmlxEvent(this.vp, "mouseup", this._doOnMouseUp)
	}
	this._setWindowModal = function(c, b) {
		if (b == true) {
			this._makeActive(c);
			this._bringOnTop(c);
			this.modalWin = c;
			c._isModal = true;
			this.modalCoverI.style.zIndex = c.zi - 2;
			this.modalCoverI.style.display = "";
			this.modalCoverD.style.zIndex = c.zi - 2;
			this.modalCoverD.style.display = ""
		} else {
			this.modalWin = null;
			c._isModal = false;
			this.modalCoverI.style.zIndex = 0;
			this.modalCoverI.style.display = "none";
			this.modalCoverD.style.zIndex = 0;
			this.modalCoverD.style.display = "none"
		}
	};
	this._bringOnTopAnyStickedWindows = function() {
		var b = new Array();
		for (var d in this.wins) {
			if (this.wins[d]._isSticked) {
				b[b.length] = this.wins[d]
			}
		}
		for (var c = 0; c < b.length; c++) {
			this._bringOnTop(b[c])
		}
		if (b.length == 0) {
			for (var d in this.wins) {
				if (this.wins[d].className == "dhtmlx_window_active") {
					this._bringOnTop(this.wins[d])
				}
			}
		}
	};
	this.unload = function() {
		this._clearAll()
	};
	this._removeButtonGlobal = function(d, c) {
		if (!this.wins[d]) {
			return
		}
		if (!this.wins[d].btns[c]) {
			return
		}
		var b = this.wins[d].btns[c];
		b.title = null;
		b.isVisible = null;
		b._isEnabled = null;
		b.isPressed = null;
		b.label = null;
		b._doOnClick = null;
		b.detachAllEvents();
		b.attachEvent = null;
		b.callEvent = null;
		b.checkEvent = null;
		b.detachEvent = null;
		b.detachAllEvents = null;
		b.disable = null;
		b.enable = null;
		b.eventCatcher = null;
		b.hide = null;
		b.isEnabled = null;
		b.isHidden = null;
		b.show = null;
		b.onmousedown = null;
		b.onmouseout = null;
		b.onmouseover = null;
		b.onmouseup = null;
		b.ontouchstart = null;
		b.ontouchend = null;
		if (b.parentNode) {
			b.parentNode.removeChild(b)
		}
		b = null;
		this.wins[d].btns[c] = null;
		delete this.wins[d].btns[c]
	};
	this._removeWindowGlobal = function(c) {
		var b = this.wins[c];
		if (this.modalWin == b) {
			this._setWindowModal(b, false)
		}
		if (this.iframeMode && b.ifr) {
			b.ifr.parentNode.removeChild(b.ifr);
			b.ifr = null
		}
		var d = b.coverBlocker();
		d.onselectstart = null;
		d = null;
		this._engineDiableOnSelectInWindow(b, false);
		b._dhxContDestruct();
		this._engineGetWindowHeader(b).onmousedown = null;
		this._engineGetWindowHeader(b).ondblclick = null;
		this.movingWin = null;
		this.resizingWin = null;
		for (var h in b.btns) {
			this._removeButtonGlobal(b, h)
		}
		b.btns = null;
		b.detachAllEvents();
		b._adjustToContent = null;
		b._doOnAttachMenu = null;
		b._doOnAttachStatusBar = null;
		b._doOnAttachToolbar = null;
		b._doOnFrameMouseDown = null;
		b._doOnFrameContentLoaded = null;
		b._redraw = null;
		b.addUserButton = null;
		b.allowMove = null;
		b.allowPark = null;
		b.allowResize = null;
		b.attachEvent = null;
		b.bringToBottom = null;
		b.bringToTop = null;
		b.callEvent = null;
		b.center = null;
		b.centerOnScreen = null;
		b.checkEvent = null;
		b.clearIcon = null;
		b.close = null;
		b.denyMove = null;
		b.denyPark = null;
		b.denyResize = null;
		b.detachEvent = null;
		b.detachAllEvents = null;
		b.eventCatcher = null;
		b.getDimension = null;
		b.getIcon = null;
		b.getId = null;
		b.getMaxDimension = null;
		b.getMinDimension = null;
		b.getPosition = null;
		b.getText = null;
		b.hide = null;
		b.hideHeader = null;
		b.isHidden = null;
		b.isMaximized = null;
		b.isModal = null;
		b.isMovable = null;
		b.isOnBottom = null;
		b.isOnTop = null;
		b.isParkable = null;
		b.isParked = null;
		b.isResizable = null;
		b.isSticked = null;
		b.keepInViewport = null;
		b.maximize = null;
		b.minimize = null;
		b.park = null;
		b.progressOff = null;
		b.progressOn = null;
		b.removeUserButton = null;
		b.restoreIcon = null;
		b.setDimension = null;
		b.setIcon = null;
		b.setMaxDimension = null;
		b.setMinDimension = null;
		b.setModal = null;
		b.setPosition = null;
		b.setText = null;
		b.setToFullScreen = null;
		b.show = null;
		b.showHeader = null;
		b.stick = null;
		b.unstick = null;
		b.onmousemove = null;
		b.onmousedown = null;
		b.icons = null;
		b.button = null;
		b._dhxContDestruct = null;
		b.dhxContGlobal.obj = null;
		b.dhxContGlobal.setContent = null;
		b.dhxContGlobal.dhxcont = null;
		b.dhxContGlobal = null;
		if (b._frame) {
			while (b._frame.childNodes.length > 0) {
				b._frame.removeChild(b._frame.childNodes[0])
			}
			b._frame = null
		}
		this._parseNestedForEvents(b);
		b._content = null;
		b.innerHTML = "";
		b.parentNode.removeChild(b);
		b = null;
		this.wins[c] = null;
		delete this.wins[c]
	};
	this._removeEvents = function(b) {
		b.onmouseover = null;
		b.onmouseout = null;
		b.onmousemove = null;
		b.onclick = null;
		b.ondblclick = null;
		b.onmouseenter = null;
		b.onmouseleave = null;
		b.onmouseup = null;
		b.onmousewheel = null;
		b.onmousedown = null;
		b.onselectstart = null;
		b.onfocus = null;
		b.style.display = "";
		b = null
	};
	this._parseNestedForEvents = function(c) {
		this._removeEvents(c);
		for (var b = 0; b < c.childNodes.length; b++) {
			if (c.childNodes[b].tagName != null) {
				this._parseNestedForEvents(c.childNodes[b])
			}
		}
		c = null
	};
	this._clearAll = function() {
		this._clearDocumentEvents();
		for (var b in this.wins) {
			this._removeWindowGlobal(b)
		}
		this.wins = null;
		this._parseNestedForEvents(this._carcass);
		while (this._carcass.childNodes.length > 0) {
			this._carcass.removeChild(this._carcass.childNodes[0])
		}
		this._carcass.onselectstart = null;
		this._carcass.parentNode.removeChild(this._carcass);
		this._carcass = null;
		this._parseNestedForEvents(this._vpcover);
		this._vpcover.parentNode.removeChild(this._vpcover);
		this._vpcover = null;
		this._parseNestedForEvents(this.modalCoverD);
		this.modalCoverD.parentNode.removeChild(this.modalCoverD);
		this.modalCoverD = null;
		this._parseNestedForEvents(this.modalCoverI);
		this.modalCoverI.parentNode.removeChild(this.modalCoverI);
		this.modalCoverI = null;
		if (this.vp.autocreated == true) {
			this.vp.parentNode.removeChild(this.vp)
		}
		this.vp = null;
		for (var b in this.skinParams) {
			delete this.skinParams[b]
		}
		this.skinParams = null;
		this._effects = null;
		this._engineSkinParams = null;
		this._addDefaultButtons = null;
		this._addUserButton = null;
		this._allowParking = null;
		this._allowReszieGlob = null;
		this._attachEventsOnButton = null;
		this._attachWindowContentTo = null;
		this._autoResizeViewport = null;
		this._blockSwitcher = null;
		this._bringOnBottom = null;
		this._bringOnTop = null;
		this._bringOnTopAnyStickedWindows = null;
		this._centerWindow = null;
		this._clearAll = null;
		this._clearDocumentEvents = null;
		this._clearWindowIcons = null;
		this._closeWindow = null;
		this._createViewport = null;
		this._denyParking = null;
		this._denyResize = null;
		this._dhx_Engine = null;
		this._disableButton = null;
		this._doOnMoseMove = null;
		this._doOnMouseUp = null;
		this._doOnResize = null;
		this._doOnSelectStart = null;
		this._doOnUnload = null;
		this._doParkDown = null;
		this._doParkUp = null;
		this._enableButton = null;
		this._engineAddUserButton = null;
		this._engineAdjustWindowToContent = null;
		this._engineAllowWindowResize = null;
		this._engineCheckHeaderMouseDown = null;
		this._engineDiableOnSelectInWindow = null;
		this._engineDoOnWindowParkDown = null;
		this._engineDoOnWindowParkUp = null;
		this._engineFixWindowPosInViewport = null;
		this._engineGetWindowButton = null;
		this._engineGetWindowContent = null;
		this._engineGetWindowHeader = null;
		this._engineGetWindowHeaderState = null;
		this._engineGetWindowLabel = null;
		this._engineGetWindowParkedHeight = null;
		this._engineRedrawSkin = null;
		this._engineRedrawWindowPos = null;
		this._engineRedrawWindowSize = null;
		this._engineRedrawWindowTitle = null;
		this._engineSetWindowBody = null;
		this._engineSwitchWindowHeader = null;
		this._engineSwitchWindowProgress = null;
		this._engineUpdateWindowIcon = null;
		this._fixWindowDimensionInViewport = null;
		this._genStr = null;
		this._getActive = null;
		this._getTopZIndex = null;
		this._getWindowIcon = null;
		this._hideButton = null;
		this._hideWindow = null;
		this._isWindowHidden = null;
		this._isWindowOnBottom = null;
		this._isWindowOnTop = null;
		this._makeActive = null;
		this._maximizeWindow = null;
		this._moveWindow = null;
		this._needHelp = null;
		this._parkWindow = null;
		this._parseNestedForEvents = null;
		this._removeButtonGlobal = null;
		this._removeEvents = null;
		this._removeUserButton = null;
		this._removeWindowGlobal = null;
		this._restoreWindow = null;
		this._restoreWindowIcons = null;
		this._setWindowIcon = null;
		this._setWindowModal = null;
		this._setWindowToFullScreen = null;
		this._showButton = null;
		this._showWindow = null;
		this._stickWindow = null;
		this._stopMove = null;
		this._unstickWindow = null;
		this.attachEvent = null;
		this.attachViewportTo = null;
		this.callEvent = null;
		this.checkEvent = null;
		this.createWindow = null;
		this.detachEvent = null;
		this.enableAutoViewport = null;
		this.eventCatcher = null;
		this.findByText = null;
		this.forEachWindow = null;
		this.getBottommostWindow = null;
		this.getEffect = null;
		this.getTopmostWindow = null;
		this.isWindow = null;
		this.setEffect = null;
		this.setImagePath = null;
		this.setSkin = null;
		this.setViewport = null;
		this.unload = null;
		this.window = null;
		f = null
	};
	this._clearDocumentEvents = function() {
		if (_isIE) {
			window.detachEvent("onresize", this._doOnResize);
			document.body.detachEvent("onselectstart", this._doOnSelectStart);
			document.body.detachEvent("onmouseup", this._doOnMouseUp);
			document.body.detachEvent("onunload", this._doOnUnload);
			this.vp.detachEvent("onmousemove", this._doOnMoseMove);
			this.vp.detachEvent("onmouseup", this._doOnMouseUp)
		} else {
			window.removeEventListener("resize", this._doOnResize, false);
			document.body.removeEventListener("mouseup", this._doOnMouseUp, false);
			document.body.removeEventListener("unload", this._doOnUnload, false);
			this.vp.removeEventListener("mousemove", this._doOnMoseMove, false);
			this.vp.removeEventListener("mouseup", this._doOnMouseUp, false)
		}
	};
	this._genStr = function(b) {
		var h = "";
		var c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		for (var d = 0; d < b; d++) {
			h += c.charAt(Math.round(Math.random() * (c.length - 1)))
		}
		return h
	};
	dhtmlxEventable(this);
	return this
}
dhtmlXWindows.prototype._dhx_Engine = function() {
	this._engineEnabled = true;
	this._engineName = "dhx";
	this._engineSkinParams = {
		dhx_blue: {
			hh: 21,
			lbw: 2,
			rbw: 2,
			lch: 2,
			lcw: 14,
			rch: 14,
			rcw: 14,
			bbh: 2,
			mnh: 23,
			tbh: 25,
			sbh: 20,
			noh_t: null,
			noh_h: null
		},
		dhx_black: {
			hh: 21,
			lbw: 2,
			rbw: 2,
			lch: 2,
			lcw: 14,
			rch: 14,
			rcw: 14,
			bbh: 2,
			mnh: 23,
			tbh: 25,
			sbh: 20,
			noh_t: null,
			noh_h: null
		},
		dhx_skyblue: {
			hh: 29,
			lbw: 2,
			rbw: 2,
			lch: 2,
			lcw: 14,
			rch: 14,
			rcw: 14,
			bbh: 2,
			mnh: 23,
			tbh: 25,
			sbh: 20,
			noh_t: 5,
			noh_h: -10
		},
		dhx_web: {
			hh: 27,
			lbw: 5,
			rbw: 5,
			lch: 5,
			lcw: 14,
			rch: 14,
			rcw: 14,
			bbh: 5,
			mnh: 23,
			tbh: 25,
			sbh: 20,
			noh_t: 5,
			noh_h: -10
		},
		dhx_terrace: {
			hh: 37,
			lbw: 5,
			rbw: 5,
			lch: 5,
			lcw: 14,
			rch: 14,
			rcw: 14,
			bbh: 5,
			mnh: 23,
			tbh: 25,
			sbh: 20,
			noh_t: 0,
			noh_h: -10
		}
	};
	this._isIE6 = false;
	if (_isIE) {
		this._isIE6 = (window.XMLHttpRequest == null ? true: false)
	}
	this._engineSetWindowBody = function(c) {
		c.innerHTML = "<div iswin='1' class='dhtmlx_wins_body_outer' style='position: relative;'>" + (this._isIE6 ? "<iframe src='javascript:false;' frameborder='0' class='dhtmlx_wins_ie6_cover_fix' onload='this.contentWindow.document.body.style.overflow=\"hidden\";'></iframe>": "") + "<div class='dhtmlx_wins_icon'></div><div class='dhtmlx_wins_progress'></div><div class='dhtmlx_wins_title'>dhtmlxWindow</div><div class='dhtmlx_wins_btns'><div class='dhtmlx_wins_btns_button dhtmlx_button_sticked_default'></div><div class='dhtmlx_wins_btns_button dhtmlx_button_stick_default'></div><div class='dhtmlx_wins_btns_button dhtmlx_button_help_default'></div><div class='dhtmlx_wins_btns_button dhtmlx_button_park_default'></div><div class='dhtmlx_wins_btns_button dhtmlx_button_minmax2_default'></div><div class='dhtmlx_wins_btns_button dhtmlx_button_minmax1_default'></div><div class='dhtmlx_wins_btns_button dhtmlx_button_close_default'></div><div class='dhtmlx_wins_btns_button dhtmlx_button_dock_default'></div></div><div class='dhtmlx_wins_body_inner'></div><div winResT='yes' class='dhtmlx_wins_resizer_t' style='display:none;'></div><div winResL='yes' class='dhtmlx_wins_resizer_l'></div><div winResR='yes' class='dhtmlx_wins_resizer_r'></div><div winResB='yes' class='dhtmlx_wins_resizer_b'></div><div class='white_line'></div><div class='white_line2'></div></div>";
		c.dhxContGlobal = new dhtmlXContainer(c);
		if (this.skin == "dhx_skyblue") {
			c.dhxContGlobal.obj._offsetWidth = -10;
			c.dhxContGlobal.obj._offsetHeight = -5;
			c.dhxContGlobal.obj._offsetLeft = 5;
			c.dhxContGlobal.obj._offsetHeightSaved = c.dhxContGlobal.obj._offsetHeight
		}
		if (this.skin == "dhx_web") {
			c.dhxContGlobal.obj._offsetWidth = -10;
			c.dhxContGlobal.obj._offsetHeight = -5;
			c.dhxContGlobal.obj._offsetLeft = 5;
			c.dhxContGlobal.obj._offsetHeightSaved = c.dhxContGlobal.obj._offsetHeight
		}
		c.skin = this.skin;
		c.dhxContGlobal.setContent(c.childNodes[0].childNodes[(this._isIE6 ? 5 : 4)]);
		var d = c.coverBlocker();
		d.onselectstart = function(a) {
			a = a || event;
			a.returnValue = false;
			a.cancelBubble = true
		};
		d = null;
		if (this.iframeMode) {
			c.ifr = document.createElement("IFRAME");
			c.ifr.style.position = "absolute";
			c.ifr.style.left = c.style.left;
			c.ifr.style.top = c.style.top;
			c.ifr.style.width = c.style.width;
			c.ifr.style.height = c.style.height;
			c.ifr.style.zIndex = c.style.zIndex - 1;
			c.ifr.style.backgroundColor = "white";
			c.ifr.frameBorder = 0;
			c.ifr.setAttribute("src", "javascript:false;");
			c.parentNode.appendChild(c.ifr)
		}
	};
	this._engineDiableOnSelectInWindow = function(e, f) {
		var g = new Array();
		g[0] = e.childNodes[0].childNodes[(this._isIE6 ? 1 : 0)];
		g[1] = e.childNodes[0].childNodes[(this._isIE6 ? 2 : 1)];
		g[2] = e.childNodes[0].childNodes[(this._isIE6 ? 3 : 2)];
		g[3] = e.childNodes[0].childNodes[(this._isIE6 ? 4 : 3)];
		g[4] = e.childNodes[0].childNodes[(this._isIE6 ? 6 : 5)];
		g[5] = e.childNodes[0].childNodes[(this._isIE6 ? 7 : 6)];
		g[6] = e.childNodes[0].childNodes[(this._isIE6 ? 8 : 7)];
		g[7] = e.childNodes[0].childNodes[(this._isIE6 ? 9 : 8)];
		for (var h = 0; h < g.length; h++) {
			g[h].onselectstart = (f ?
			function(a) {
				a = a || event;
				a.returnValue = false;
				return false
			}: null);
			g[h] = null
		}
		g = null
	};
	this._engineGetWindowHeader = function(b) {
		b.childNodes[0].idd = b.idd;
		return b.childNodes[0]
	};
	this._engineRedrawWindowSize = function(e) {
		e.style.width = (String(e.w).search("%") == -1 ? e.w + "px": e.w);
		e.style.height = (String(e.h).search("%") == -1 ? e.h + "px": e.h);
		var h = e.childNodes[0];
		h.style.width = e.clientWidth + "px";
		h.style.height = e.clientHeight + "px";
		if (h.offsetWidth > e.clientWidth) {
			h.style.width = e.clientWidth * 2 - h.offsetWidth + "px"
		}
		if (h.offsetHeight > e.clientHeight) {
			var f = e.clientHeight * 2 - h.offsetHeight;
			if (f < 0) {
				f = 0
			}
			h.style.height = f + "px"
		}
		var g = (e._noHeader == true ? e._hdrSize: this._engineSkinParams[this.skin]["hh"]);
		if (this.iframeMode && e.ifr) {
			e.ifr.style.width = e.style.width;
			e.ifr.style.height = e.style.height
		}
		this._engineRedrawWindowTitle(e);
		e.adjustContent(h, g)
	};
	this._engineRedrawWindowPos = function(b) {
		if (b._isFullScreened) {
			return
		}
		b.style.left = b.x + "px";
		b.style.top = b.y + "px";
		if (this.iframeMode && b.ifr) {
			b.ifr.style.top = b.style.top;
			b.ifr.style.left = b.style.left
		}
	};
	this._engineFixWindowPosInViewport = function(c) {
		var d = (c._noHeader == true ? c._hdrSize: this._engineSkinParams[this.skin]["hh"]);
		if (c._keepInViewport) {
			if (c.x < 0) {
				c.x = 0
			}
			if (c.x + c.w > this.vp.offsetWidth) {
				c.x = this.vp.offsetWidth - c.w
			}
			if (c.y + c.h > this.vp.offsetHeight) {
				c.y = this.vp.offsetHeight - c.h
			}
			if (c.y < 0) {
				c.y = 0
			}
		} else {
			if (c.y + d > this.vp.offsetHeight) {
				c.y = this.vp.offsetHeight - d
			}
			if (c.y < 0) {
				c.y = 0
			}
			if (c.x + c.w - 10 < 0) {
				c.x = 10 - c.w
			}
			if (c.x > this.vp.offsetWidth - 10) {
				c.x = this.vp.offsetWidth - 10
			}
		}
	};
	this._engineCheckHeaderMouseDown = function(l, h) {
		if (this._isIPad) {
			var j = h.touches[0].clientX;
			var k = h.touches[0].clientY;
			var g = h.target || h.srcElement;
			if (g == l.childNodes[0] || g == l.childNodes[0].childNodes[0] || g == l.childNodes[0].childNodes[2] || g == l.childNodes[0].childNodes[3]) {
				return true
			}
			return false
		} else {
			var j = (_isIE || _isOpera ? h.offsetX: h.layerX);
			var k = (_isIE || _isOpera ? h.offsetY: h.layerY);
			var g = h.target || h.srcElement
		}
		var i = (l._noHeader == true ? l._hdrSize: this._engineSkinParams[this.skin]["hh"]);
		if (k <= i && (g == l.childNodes[0] || g == l.childNodes[0].childNodes[(this._isIE6 ? 1 : 0)] || g == l.childNodes[0].childNodes[(this._isIE6 ? 3 : 2)] || g == l.childNodes[0].childNodes[(this._isIE6 ? 4 : 3)])) {
			return true
		}
		return false
	};
	this._engineGetWindowContent = function(b) {
		alert("_engineGetWindowContent")
	};
	this._engineGetWindowButton = function(g, j) {
		j = String(j).toLowerCase();
		var i = null;
		var k = "dhtmlx_button_" + j + "_";
		for (var h = 0; h < g.childNodes[0].childNodes[(this._isIE6 ? 4 : 3)].childNodes.length; h++) {
			var l = g.childNodes[0].childNodes[(this._isIE6 ? 4 : 3)].childNodes[h];
			if (String(l.className).search(k) != -1) {
				i = l
			}
			l = null
		}
		return i
	};
	this._engineAddUserButton = function(j, i, f) {
		if (isNaN(f)) {
			f = 0
		}
		var g = document.createElement("DIV");
		g.className = "dhtmlx_wins_btns_button dhtmlx_button_" + i + "_default";
		var h = j.childNodes[0].childNodes[(this._isIE6 ? 4 : 3)];
		f = h.childNodes.length - f;
		if (f < 0) {
			f = 0
		}
		if (f >= h.childNodes.length) {
			h.appendChild(g)
		} else {
			h.insertBefore(g, h.childNodes[f])
		}
		this._engineRedrawWindowTitle(j);
		return g
	};
	this._engineGetWindowParkedHeight = function(b) {
		return this._engineSkinParams[this.skin]["hh"] + 1
	};
	this._engineDoOnWindowParkDown = function(b) {
		b.childNodes[0].childNodes[(this._isIE6 ? 6 : 5)].style.display = (b._noHeader == true ? "": "none");
		b.childNodes[0].childNodes[(this._isIE6 ? 7 : 6)].style.display = "";
		b.childNodes[0].childNodes[(this._isIE6 ? 8 : 7)].style.display = "";
		b.childNodes[0].childNodes[(this._isIE6 ? 9 : 8)].style.display = ""
	};
	this._engineDoOnWindowParkUp = function(b) {
		b.childNodes[0].childNodes[(this._isIE6 ? 6 : 5)].style.display = "none";
		b.childNodes[0].childNodes[(this._isIE6 ? 7 : 6)].style.display = "none";
		b.childNodes[0].childNodes[(this._isIE6 ? 8 : 7)].style.display = "none";
		b.childNodes[0].childNodes[(this._isIE6 ? 9 : 8)].style.display = "none"
	};
	this._engineUpdateWindowIcon = function(c, d) {
		c.childNodes[0].childNodes[(this._isIE6 ? 1 : 0)].style.backgroundImage = "url('" + d + "')"
	};
	this._engineAllowWindowResize = function(k, l, g, i) {
		if (!l.getAttribute) {
			return
		}
		var j = this._engineSkinParams[this.skin];
		var h = (k._noHeader == true ? k._hdrSize: this._engineSkinParams[this.skin]["hh"]);
		if (l.getAttribute("winResL") != null) {
			if (l.getAttribute("winResL") == "yes") {
				if (i >= h) {
					if (i >= k.h - j.lch) {
						return "corner_left"
					}
					if (i <= j.lch && k._noHeader == true) {
						return "corner_up_left"
					}
					return "border_left"
				}
			}
		}
		if (l.getAttribute("winResR") != null) {
			if (l.getAttribute("winResR") == "yes") {
				if (i >= h) {
					if (i >= k.h - j.rch) {
						return "corner_right"
					}
					if (i <= j.rch && k._noHeader == true) {
						return "corner_up_right"
					}
					return "border_right"
				}
			}
		}
		if (l.getAttribute("winResT") != null) {
			if (l.getAttribute("winResT") == "yes" && k._noHeader == true) {
				if (g <= j.lcw) {
					return "corner_up_left"
				}
				if (g >= k.w - j.rcw) {
					return "corner_up_right"
				}
				return "border_top"
			}
		}
		if (l.getAttribute("winResB") != null) {
			if (l.getAttribute("winResB") == "yes") {
				if (g <= j.lcw) {
					return "corner_left"
				}
				if (g >= k.w - j.rcw) {
					return "corner_right"
				}
				return "border_bottom"
			}
		}
		return null
	};
	this._engineAdjustWindowToContent = function(f, i, g) {
		var j = i + f.w - f.vs[f.av].dhxcont.clientWidth;
		var h = g + f.h - f.vs[f.av].dhxcont.clientHeight;
		f.setDimension(j, h)
	};
	this._engineRedrawSkin = function() {
		this.vp.className = (this.vp == document.body && this.vp._css ? this.vp._css + " ": "") + "dhtmlx_winviewport dhtmlx_skin_" + this.skin + (this._r ? " dhx_wins_rtl": "");
		var d = this._engineSkinParams[this.skin];
		for (var a in this.wins) {
			if (this.skin == "dhx_skyblue") {
				this.wins[a].dhxContGlobal.obj._offsetTop = (this.wins[a]._noHeader ? d.noh_t: null);
				this.wins[a].dhxContGlobal.obj._offsetWidth = -10;
				this.wins[a].dhxContGlobal.obj._offsetHeight = (this.wins[a]._noHeader ? d.noh_h: -5);
				this.wins[a].dhxContGlobal.obj._offsetLeft = 5;
				this.wins[a].dhxContGlobal.obj._offsetHeightSaved = -5
			} else {
				this.wins[a].dhxContGlobal.obj._offsetWidth = null;
				this.wins[a].dhxContGlobal.obj._offsetHeight = null;
				this.wins[a].dhxContGlobal.obj._offsetLeft = null;
				this.wins[a].dhxContGlobal.obj._offsetTop = null;
				this.wins[a].dhxContGlobal.obj._offsetHeightSaved = null
			}
			this.wins[a].skin = this.skin;
			this._restoreWindowIcons(this.wins[a]);
			this._engineRedrawWindowSize(this.wins[a])
		}
	};
	this._engineSwitchWindowProgress = function(c, d) {
		if (d == true) {
			c.childNodes[0].childNodes[(this._isIE6 ? 1 : 0)].style.display = "none";
			c.childNodes[0].childNodes[(this._isIE6 ? 2 : 1)].style.display = ""
		} else {
			c.childNodes[0].childNodes[(this._isIE6 ? 2 : 1)].style.display = "none";
			c.childNodes[0].childNodes[(this._isIE6 ? 1 : 0)].style.display = ""
		}
	};
	this._engineSwitchWindowHeader = function(e, f) {
		if (!e._noHeader) {
			e._noHeader = false
		}
		if (f != e._noHeader) {
			return
		}
		e._noHeader = (f == true ? false: true);
		e._hdrSize = 0;
		e.childNodes[0].childNodes[(this._isIE6 ? 5 : 4)].className = "dhtmlx_wins_body_inner" + (e._noHeader ? " dhtmlx_wins_no_header": "");
		e.childNodes[0].childNodes[(this._isIE6 ? 6 : 5)].style.display = (e._noHeader ? "": "none");
		e.childNodes[0].childNodes[(this._isIE6 ? 1 : 0)].style.display = (e._noHeader ? "none": "");
		e.childNodes[0].childNodes[(this._isIE6 ? 3 : 2)].style.display = (e._noHeader ? "none": "");
		e.childNodes[0].childNodes[(this._isIE6 ? 4 : 3)].style.display = (e._noHeader ? "none": "");
		var d = this._engineSkinParams[this.skin];
		if (e._noHeader) {
			e.dhxContGlobal.obj._offsetHeightSaved = e.dhxContGlobal.obj._offsetHeight;
			e.dhxContGlobal.obj._offsetHeight = d.noh_h;
			e.dhxContGlobal.obj._offsetTop = d.noh_t
		} else {
			e.dhxContGlobal.obj._offsetHeight = e.dhxContGlobal.obj._offsetHeightSaved;
			e.dhxContGlobal.obj._offsetTop = null
		}
		this._engineRedrawWindowSize(e)
	};
	this._engineGetWindowHeaderState = function(b) {
		return (b._noHeader ? true: false)
	};
	this._engineGetWindowLabel = function(b) {
		return b.childNodes[0].childNodes[(this._isIE6 ? 3 : 2)]
	};
	this._engineRedrawWindowTitle = function(f) {
		if (f._noHeader !== true) {
			var g = f.childNodes[0].childNodes[(this._isIE6 ? 1 : 0)].offsetWidth;
			var h = f.childNodes[0].childNodes[(this._isIE6 ? 4 : 3)].offsetWidth;
			var e = f.offsetWidth - g - h - 24;
			if (e < 0) {
				e = "100%"
			} else {
				e += "px"
			}
			f.childNodes[0].childNodes[(this._isIE6 ? 3 : 2)].style.width = e
		}
	}
};
dhtmlXWindows.prototype.i18n = {
	dhxcontaler: "dhtmlxcontainer.js is missed on the page",
	noenginealert: "No dhtmlxWindows engine was found.",
	stick: "Stick",
	unstick: "Unstick",
	help: "Help",
	parkdown: "Park Down",
	parkup: "Park Up",
	maximize: "Maximize",
	restore: "Restore",
	close: "Close",
	dock: "Dock"
}; (function() {
	dhtmlx.extend_api("dhtmlXWindows", {
		_init: function(a) {
			return []
		},
		_patch: function(a) {
			a.old_createWindow = a.createWindow;
			a.createWindow = function(f) {
				if (arguments.length > 1) {
					return this.old_createWindow.apply(this, arguments)
				}
				var g = this.old_createWindow(f.id, (f.x || f.left), (f.y || f.top), f.width, f.height);
				g.allowMoveA = function(c) {
					if (c) {
						this.allowMove()
					} else {
						this.denyMove()
					}
				};
				g.allowParkA = function(c) {
					if (c) {
						this.allowPark()
					} else {
						this.denyPark()
					}
				};
				g.allowResizeA = function(c) {
					if (c) {
						this.allowResize()
					} else {
						this.denyResize()
					}
				};
				for (var h in f) {
					if (b[h]) {
						g[b[h]](f[h])
					} else {
						if (h.indexOf("on") == 0) {
							g.attachEvent(h, f[h])
						}
					}
				}
				return g
			}
		},
		animation: "setEffect",
		image_path: "setImagePath",
		skin: "setSkin",
		viewport: "_viewport",
		wins: "_wins"
	},
	{
		_viewport: function(a) {
			if (a.object) {
				this.enableAutoViewport(false);
				this.attachViewportTo(a.object)
			} else {
				this.enableAutoViewport(false);
				this.setViewport(a.left, a.top, a.width, a.height, a.parent)
			}
		},
		_wins: function(a) {
			for (var f = 0; f < a.length; f++) {
				var e = a[f];
				this.createWindow(e.id, e.left, e.top, e.width, e.height);
				if (e.text) {
					this.window(e.id).setText(e.text)
				}
				if (e.keep_in_viewport) {
					this.window(e.id).keepInViewport(true)
				}
				if (e.deny_resize) {
					this.window(e.id).denyResize()
				}
				if (e.deny_park) {
					this.window(e.id).denyPark()
				}
				if (e.deny_move) {
					this.window(e.id).denyMove()
				}
			}
		}
	});
	var b = {
		move: "allowMoveA",
		park: "allowParkA",
		resize: "allowResizeA",
		center: "center",
		modal: "setModal",
		caption: "setText",
		header: "showHeader"
	}
})();
function dhtmlXContainer(i) {
	var g = this;
	this.obj = i;
	i = null;
	this.obj._padding = !0;
	this.dhxcont = null;
	this.st = document.createElement("DIV");
	this.st.style.position = "absolute";
	this.st.style.left = "-200px";
	this.st.style.top = "0px";
	this.st.style.width = "100px";
	this.st.style.height = "1px";
	this.st.style.visibility = "hidden";
	this.st.style.overflow = "hidden";
	document.body.insertBefore(this.st, document.body.childNodes[0]);
	this.obj._getSt = function() {
		return g.st
	};
	this.obj.dv = "def";
	this.obj.av = this.obj.dv;
	this.obj.cv = this.obj.av;
	this.obj.vs = {};
	this.obj.vs[this.obj.av] = {};
	this.obj.view = function(b) {
		if (!this.vs[b]) {
			this.vs[b] = {};
			this.vs[b].dhxcont = this.vs[this.dv].dhxcont;
			var a = document.createElement("DIV");
			a.style.position = "relative";
			a.style.left = "0px";
			a.style.width = "200px";
			a.style.height = "200px";
			a.style.overflow = "hidden";
			a.style.visibility = "";
			g.st.appendChild(a);
			this.vs[b].dhxcont.mainCont[b] = a;
			a = null
		}
		this.avt = this.av;
		this.av = b;
		return this
	};
	this.obj.setActive = function() {
		if (this.vs[this.av]) {
			this.cv = this.av,
			this.vs[this.avt].dhxcont == this.vs[this.avt].dhxcont.mainCont[this.avt].parentNode && (g.st.appendChild(this.vs[this.avt].dhxcont.mainCont[this.avt]), this.vs[this.avt].menu && g.st.appendChild(document.getElementById(this.vs[this.avt].menuId)), this.vs[this.avt].toolbar && g.st.appendChild(document.getElementById(this.vs[this.avt].toolbarId)), this.vs[this.avt].sb && g.st.appendChild(document.getElementById(this.vs[this.avt].sbId))),
			this.vs[this.av].dhxcont != this.vs[this.av].dhxcont.mainCont[this.av].parentNode && (this.vs[this.av].dhxcont.insertBefore(this.vs[this.av].dhxcont.mainCont[this.av], this.vs[this.av].dhxcont.childNodes[this.vs[this.av].dhxcont.childNodes.length - 1]), this.vs[this.av].menu && this.vs[this.av].dhxcont.insertBefore(document.getElementById(this.vs[this.av].menuId), this.vs[this.av].dhxcont.childNodes[0]), this.vs[this.av].toolbar && this.vs[this.av].dhxcont.insertBefore(document.getElementById(this.vs[this.av].toolbarId), this.vs[this.av].dhxcont.childNodes[this.vs[this.av].menu ? 1 : 0]), this.vs[this.av].sb && this.vs[this.av].dhxcont.insertBefore(document.getElementById(this.vs[this.av].sbId), this.vs[this.av].dhxcont.childNodes[this.vs[this.av].dhxcont.childNodes.length - 1])),
			this._doOnResize && this._doOnResize(),
			this._isWindow && this.updateNestedObjects(),
			this.avt = null
		}
	};
	this.obj._viewRestore = function() {
		var b = this.av;
		if (this.avt) {
			this.av = this.avt,
			this.avt = null
		}
		return b
	};
	this.setContent = function(b) {
		this.obj.vs[this.obj.av].dhxcont = b;
		this.obj._init();
		b = null
	};
	this.obj._init = function() {
		this.vs[this.av].dhxcont.innerHTML = "<div ida='dhxMainCont' style='position: relative; left: 0px; top: 0px; overflow: hidden;'></div><div class='dhxcont_content_blocker' style='display: none;'></div>";
		this.vs[this.av].dhxcont.mainCont = {};
		this.vs[this.av].dhxcont.mainCont[this.av] = this.vs[this.av].dhxcont.childNodes[0]
	};
	this.obj._genStr = function(b) {
		for (var a = "",
		c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
		d = 0; d < b; d++) {
			a += c.charAt(Math.round(Math.random() * (c.length - 1)))
		}
		return a
	};
	this.obj.setMinContentSize = function(b, a) {
		this.vs[this.av]._minDataSizeW = b;
		this.vs[this.av]._minDataSizeH = a
	};
	this.obj._setPadding = function(b, a) {
		typeof b == "object" ? (this._offsetTop = b[0], this._offsetLeft = b[1], this._offsetWidth = b[2], this._offsetHeight = b[3], b = null) : (this._offsetLeft = this._offsetTop = b, this._offsetWidth = -b * 2, this._offsetHeight = -b * 2);
		this.vs[this.av].dhxcont.className = "dhxcont_global_content_area " + (a || "")
	};
	this.obj.moveContentTo = function(b) {
		for (var a in this.vs) {
			b.view(a).setActive();
			var c = null;
			this.vs[a].grid && (c = "grid");
			this.vs[a].tree && (c = "tree");
			this.vs[a].tabbar && (c = "tabbar");
			this.vs[a].folders && (c = "folders");
			this.vs[a].layout && (c = "layout");
			c != null && (b.view(a).attachObject(this.vs[a][c + "Id"], !1, !0, !1), b.vs[a][c] = this.vs[a][c], b.vs[a][c + "Id"] = this.vs[a][c + "Id"], b.vs[a][c + "Obj"] = this.vs[a][c + "Obj"], this.vs[a][c] = null, this.vs[a][c + "Id"] = null, this.vs[a][c + "Obj"] = null);
			if (this.vs[a]._frame) {
				b.vs[a]._frame = this.vs[a]._frame,
				this.vs[a]._frame = null
			}
			if (this.vs[a].menu != null) {
				if (b.cv == b.av) {
					b.vs[b.av].dhxcont.insertBefore(document.getElementById(this.vs[a].menuId), b.vs[b.av].dhxcont.childNodes[0])
				} else {
					var d = b._getSt();
					d.appendChild(document.getElementById(this.vs[a].menuId));
					d = null
				}
				b.vs[a].menu = this.vs[a].menu;
				b.vs[a].menuId = this.vs[a].menuId;
				b.vs[a].menuHeight = this.vs[a].menuHeight;
				this.vs[a].menu = null;
				this.vs[a].menuId = null;
				this.vs[a].menuHeight = null;
				this.cv == this.av && this._doOnAttachMenu && this._doOnAttachMenu("unload");
				b.cv == b.av && b._doOnAttachMenu && b._doOnAttachMenu("move")
			}
			if (this.vs[a].toolbar != null) {
				b.cv == b.av ? b.vs[b.av].dhxcont.insertBefore(document.getElementById(this.vs[a].toolbarId), b.vs[b.av].dhxcont.childNodes[b.vs[b.av].menu != null ? 1 : 0]) : (d = b._getSt(), d.appendChild(document.getElementById(this.vs[a].toolbarId)), d = null),
				b.vs[a].toolbar = this.vs[a].toolbar,
				b.vs[a].toolbarId = this.vs[a].toolbarId,
				b.vs[a].toolbarHeight = this.vs[a].toolbarHeight,
				this.vs[a].toolbar = null,
				this.vs[a].toolbarId = null,
				this.vs[a].toolbarHeight = null,
				this.cv == this.av && this._doOnAttachToolbar && this._doOnAttachToolbar("unload"),
				b.cv == b.av && b._doOnAttachToolbar && b._doOnAttachToolbar("move")
			}
			if (this.vs[a].sb != null) {
				if (b.cv == b.av) {
					b.vs[b.av].dhxcont.insertBefore(document.getElementById(this.vs[a].sbId), b.vs[b.av].dhxcont.childNodes[b.vs[b.av].dhxcont.childNodes.length - 1])
				} else {
					return d = b._getSt(),
					d.appendChild(document.getElementById(this.vs[a].sbId)),
					d
				}
				b.vs[a].sb = this.vs[a].sb;
				b.vs[a].sbId = this.vs[a].sbId;
				b.vs[a].sbHeight = this.vs[a].sbHeight;
				this.vs[a].sb = null;
				this.vs[a].sbId = null;
				this.vs[a].sbHeight = null;
				this.cv == this.av && this._doOnAttachStatusBar && this._doOnAttachStatusBar("unload");
				b.cv == b.av && b._doOnAttachStatusBar && b._doOnAttachStatusBar("move")
			}
			for (var e = this.vs[a].dhxcont.mainCont[a], f = b.vs[a].dhxcont.mainCont[a]; e.childNodes.length > 0;) {
				f.appendChild(e.childNodes[0])
			}
		}
		b.view(this.av).setActive();
		b = null
	};
	this.obj.adjustContent = function(b, a, c, d, e) {
		var f = this.vs[this.av].dhxcont,
		h = f.mainCont[this.av];
		f.style.left = (this._offsetLeft || 0) + "px";
		f.style.top = (this._offsetTop || 0) + a + "px";
		var g = b.clientWidth + (this._offsetWidth || 0);
		if (d !== !0) {
			f.style.width = Math.max(0, g) + "px"
		}
		if (d !== !0 && f.offsetWidth > g) {
			f.style.width = Math.max(0, g * 2 - f.offsetWidth) + "px"
		}
		var k = b.clientHeight + (this._offsetHeight || 0);
		f.style.height = Math.max(0, k - a) + (c != null ? c: 0) + "px";
		if (f.offsetHeight > k - a) {
			f.style.height = Math.max(0, (k - a) * 2 - f.offsetHeight) + "px"
		}
		if (e && !isNaN(e)) {
			f.style.height = Math.max(0, parseInt(f.style.height) - e) + "px"
		}
		if (this.vs[this.av]._minDataSizeH != null && parseInt(f.style.height) < this.vs[this.av]._minDataSizeH) {
			f.style.height = this.vs[this.av]._minDataSizeH + "px"
		}
		if (this.vs[this.av]._minDataSizeW != null && parseInt(f.style.width) < this.vs[this.av]._minDataSizeW) {
			f.style.width = this.vs[this.av]._minDataSizeW + "px"
		}
		if (d !== !0 && (h.style.width = f.clientWidth + "px", h.offsetWidth > f.clientWidth)) {
			h.style.width = Math.max(0, f.clientWidth * 2 - h.offsetWidth) + "px"
		}
		var i = this.vs[this.av].menu != null ? !this.vs[this.av].menuHidden ? this.vs[this.av].menuHeight: 0 : 0,
		j = this.vs[this.av].toolbar != null ? !this.vs[this.av].toolbarHidden ? this.vs[this.av].toolbarHeight: 0 : 0,
		l = this.vs[this.av].sb != null ? !this.vs[this.av].sbHidden ? this.vs[this.av].sbHeight: 0 : 0;
		h.style.height = f.clientHeight + "px";
		if (h.offsetHeight > f.clientHeight) {
			h.style.height = Math.max(0, f.clientHeight * 2 - h.offsetHeight) + "px"
		}
		h.style.height = Math.max(0, parseInt(h.style.height) - i - j - l) + "px";
		b = f = h = null
	};
	this.obj.coverBlocker = function() {
		return this.vs[this.av].dhxcont.childNodes[this.vs[this.av].dhxcont.childNodes.length - 1]
	};
	this.obj.showCoverBlocker = function() {
		var b = this.coverBlocker();
		b.style.display = "";
		b = null
	};
	this.obj.hideCoverBlocker = function() {
		var b = this.coverBlocker();
		b.style.display = "none";
		b = null
	};
	this.obj.updateNestedObjects = function(b) {
		if (this.skin == "dhx_terrace") {
			var a = this.vs[this.av].menu != null || this.vs[this.av].toolbar != null;
			if (this.vs[this.av].grid) {
				var c = a || this._isWindow ? 14 : 0,
				d = this._isWindow ? 14 : 0,
				e = this._isWindow ? 14 : 0;
				if (b) {
					if (!this._isWindow) {
						this.vs[this.av].grid.entBox.style.border = "0px solid white",
						this.vs[this.av].grid.skin_h_correction = -2
					}
					this.vs[this.av].grid.dontSetSizes = !0;
					this.vs[this.av].gridObj.style.position = "absolute"
				}
				this.vs[this.av].gridObj.style.top = c + "px";
				this.vs[this.av].gridObj.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) - c - d + "px";
				this.vs[this.av].gridObj.style.left = e + "px";
				this.vs[this.av].gridObj.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) - e * 2 + "px";
				this.vs[this.av].grid.setSizes()
			}
			if (this.vs[this.av].tree) {
				c = a || this._isWindow ? 14 : 0;
				d = this._isWindow ? 14 : 0;
				e = this._isWindow ? 14 : 0;
				if (b) {
					this.vs[this.av].treeObj.style.position = "absolute"
				}
				this.vs[this.av].treeObj.style.top = c + "px";
				this.vs[this.av].treeObj.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) - c - d + "px";
				this.vs[this.av].treeObj.style.left = e + "px";
				this.vs[this.av].treeObj.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) - e * 2 + "px"
			}
			if (this.vs[this.av].form) {
				c = a || this._isWindow ? 14 : 0;
				d = this._isWindow ? 14 : 0;
				e = this._isWindow ? 14 : 0;
				if (b) {
					this.vs[this.av].formObj.style.position = "absolute"
				}
				this.vs[this.av].formObj.style.top = c + "px";
				this.vs[this.av].formObj.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) - c - d + "px";
				this.vs[this.av].formObj.style.left = e + "px";
				this.vs[this.av].formObj.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) - e * 2 + "px";
				this.vs[this.av].form.setSizes()
			}
			if (this.vs[this.av].layout) {
				b && !this._isWindow && !this._isCell && this.vs[this.av].layout._hideBorders(),
				c = this._isCell && this._noHeader && !a ? 0 : 14,
				d = this._isCell && this._noHeader ? 0 : 14,
				e = this._isCell && this._noHeader ? 0 : 14,
				this.vs[this.av].layoutObj.style.top = c + "px",
				this.vs[this.av].layoutObj.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) - c - d + "px",
				this.vs[this.av].layoutObj.style.left = e + "px",
				this.vs[this.av].layoutObj.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) - e * 2 + "px",
				this.vs[this.av].layout.setSizes()
			}
			if (this.vs[this.av].accordion) {
				if (b) {
					this.vs[this.av].accordion._hideBorders = !0
				}
				c = this._isCell && this._noHeader && !a ? 0 : 14;
				d = this._isCell && this._noHeader ? 0 : 14;
				e = this._isCell && this._noHeader ? 0 : 14;
				this.vs[this.av].accordionObj.style.top = c + "px";
				this.vs[this.av].accordionObj.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) - c - d + "px";
				this.vs[this.av].accordionObj.style.left = e + "px";
				this.vs[this.av].accordionObj.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) - e * 2 + "px";
				this.vs[this.av].accordion.setSizes()
			}
			if (this.vs[this.av].tabbar != null) {
				c = !a && this._isCell && this._noHeader ? 0 : 14,
				d = this._isCell && this._noHeader ? c: 28,
				e = this._isCell && this._noHeader ? 0 : 14,
				this.vs[this.av].tabbarObj.style.top = c + "px",
				this.vs[this.av].tabbarObj.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) - d + "px",
				this.vs[this.av].tabbarObj.style.left = e + "px",
				this.vs[this.av].tabbarObj.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) - e * 2 + "px",
				this.vs[this.av].tabbar.adjustOuterSize()
			}
			if (this.vs[this.av].editor) {
				e = c = 14,
				this.vs[this.av].editorObj.style.top = c + "px",
				this.vs[this.av].editorObj.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) - c * 2 + "px",
				this.vs[this.av].editorObj.style.left = e + "px",
				this.vs[this.av].editorObj.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) - e * 2 + "px",
				_isIE || this.vs[this.av].editor._prepareContent(!0),
				this.vs[this.av].editor.setSizes()
			}
			this.vs[this.av].sched && this.vs[this.av].sched.setSizes();
			this.vs[this.av].dockedCell && this.vs[this.av].dockedCell.updateNestedObjects()
		} else {
			this.vs[this.av].grid && this.vs[this.av].grid.setSizes();
			this.vs[this.av].sched && this.vs[this.av].sched.setSizes();
			this.vs[this.av].tabbar && this.vs[this.av].tabbar.adjustOuterSize();
			this.vs[this.av].folders && this.vs[this.av].folders.setSizes();
			this.vs[this.av].editor && (_isIE || this.vs[this.av].editor._prepareContent(!0), this.vs[this.av].editor.setSizes());
			if (this.vs[this.av].layout) { (this._isAcc || this._isTabbarCell) && this.skin == "dhx_skyblue" ? (this.vs[this.av].layoutObj.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) + 2 + "px", this.vs[this.av].layoutObj.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) + 2 + "px") : (this.vs[this.av].layoutObj.style.width = this.vs[this.av].dhxcont.mainCont[this.av].style.width, this.vs[this.av].layoutObj.style.height = this.vs[this.av].dhxcont.mainCont[this.av].style.height),
				this.vs[this.av].layout.setSizes()
			}
			if (this.vs[this.av].accordion != null) {
				this.skin == "dhx_web" ? (this.vs[this.av].accordionObj.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) + "px", this.vs[this.av].accordionObj.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) + "px") : (this.vs[this.av].accordionObj.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) + 2 + "px", this.vs[this.av].accordionObj.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) + 2 + "px"),
				this.vs[this.av].accordion.setSizes()
			}
			this.vs[this.av].dockedCell && this.vs[this.av].dockedCell.updateNestedObjects();
			this.vs[this.av].form && this.vs[this.av].form.setSizes();
			this.vs[this.av].carousel && this.vs[this.av].carousel.setSizes()
		}
	};
	this.obj.attachStatusBar = function() {
		if (!this.vs[this.av].sb) {
			var b = document.createElement("DIV");
			b.className = this._isCell ? "dhxcont_sb_container_layoutcell": "dhxcont_sb_container";
			b.id = "sbobj_" + this._genStr(12);
			b.innerHTML = "<div class='dhxcont_statusbar'></div>";
			this.cv == this.av ? this.vs[this.av].dhxcont.insertBefore(b, this.vs[this.av].dhxcont.childNodes[this.vs[this.av].dhxcont.childNodes.length - 1]) : g.st.appendChild(b);
			b.setText = function(a) {
				this.childNodes[0].innerHTML = a
			};
			b.getText = function() {
				return this.childNodes[0].innerHTML
			};
			b.onselectstart = function(a) {
				a = a || event;
				return a.returnValue = !1
			};
			this.vs[this.av].sb = b;
			this.vs[this.av].sbHeight = this.skin == "dhx_web" ? 41 : this.skin == "dhx_skyblue" ? 23 : b.offsetHeight;
			this.vs[this.av].sbId = b.id;
			this._doOnAttachStatusBar && this._doOnAttachStatusBar("init");
			this.adjust();
			return this.vs[this._viewRestore()].sb
		}
	};
	this.obj.detachStatusBar = function(b) {
		if (this.vs[this.av].sb) {
			this.vs[this.av].sb.setText = null,
			this.vs[this.av].sb.getText = null,
			this.vs[this.av].sb.onselectstart = null,
			this.vs[this.av].sb.parentNode.removeChild(this.vs[this.av].sb),
			this.vs[this.av].sb = null,
			this.vs[this.av].sbHeight = null,
			this.vs[this.av].sbId = null,
			this._viewRestore(),
			this._doOnAttachStatusBar && !b && this._doOnAttachStatusBar("unload")
		}
	};
	this.obj.getFrame = function() {
		return this.getView()._frame
	};
	this.obj.getView = function(b) {
		return this.vs[b || this.av]
	};
	this.obj.attachMenu = function(b) {
		if (!this.vs[this.av].menu) {
			var a = document.createElement("DIV");
			a.style.position = "relative";
			a.style.overflow = "hidden";
			a.id = "dhxmenu_" + this._genStr(12);
			this.cv == this.av ? this.vs[this.av].dhxcont.insertBefore(a, this.vs[this.av].dhxcont.childNodes[0]) : g.st.appendChild(a);
			typeof b != "object" ? this.vs[this.av].menu = new dhtmlXMenuObject(a.id, b || this.skin) : (b.parent = a.id, this.vs[this.av].menu = new dhtmlXMenuObject(b));
			this.vs[this.av].menuHeight = this.skin == "dhx_web" ? 29 : a.offsetHeight;
			this.vs[this.av].menuId = a.id;
			this._doOnAttachMenu && this._doOnAttachMenu("init");
			this.adjust();
			return this.vs[this._viewRestore()].menu
		}
	};
	this.obj.detachMenu = function(b) {
		if (this.vs[this.av].menu) {
			var a = document.getElementById(this.vs[this.av].menuId);
			this.vs[this.av].menu.unload();
			this.vs[this.av].menu = null;
			this.vs[this.av].menuId = null;
			this.vs[this.av].menuHeight = null;
			a && a.parentNode.removeChild(a);
			a = null;
			this._viewRestore();
			this._doOnAttachMenu && !b && this._doOnAttachMenu("unload")
		}
	};
	this.obj.attachToolbar = function(b) {
		if (!this.vs[this.av].toolbar) {
			var a = document.createElement("DIV");
			a.style.position = "relative";
			a.style.overflow = "hidden";
			a.id = "dhxtoolbar_" + this._genStr(12);
			this.cv == this.av ? this.vs[this.av].dhxcont.insertBefore(a, this.vs[this.av].dhxcont.childNodes[this.vs[this.av].menu != null ? 1 : 0]) : g.st.appendChild(a);
			typeof b != "object" ? this.vs[this.av].toolbar = new dhtmlXToolbarObject(a.id, b || this.skin) : (b.parent = a.id, this.vs[this.av].toolbar = new dhtmlXToolbarObject(b));
			this.vs[this.av].toolbarHeight = a.offsetHeight;
			this.vs[this.av].toolbarId = a.id;
			this._doOnAttachToolbar && this._doOnAttachToolbar("init");
			this.adjust();
			var c = this;
			this.vs[this.av].toolbar.attachEvent("_onIconSizeChange",
			function() {
				c.vs[c.av].toolbarHeight = this.cont.offsetHeight;
				c.vs[c.av].toolbarId = this.cont.id;
				c.adjust();
				c._doOnAttachToolbar && c._doOnAttachToolbar("iconSizeChange")
			});
			this.skin != "dhx_terrace" && this.vs[this.av].toolbar.callEvent("_onIconSizeChange", []);
			return this.vs[this._viewRestore()].toolbar
		}
	};
	this.obj.detachToolbar = function(b) {
		if (this.vs[this.av].toolbar) {
			var a = document.getElementById(this.vs[this.av].toolbarId);
			this.vs[this.av].toolbar.unload();
			this.vs[this.av].toolbar = null;
			this.vs[this.av].toolbarId = null;
			this.vs[this.av].toolbarHeight = null;
			a && a.parentNode.removeChild(a);
			a = null;
			this._viewRestore();
			this._doOnAttachToolbar && !b && this._doOnAttachToolbar("unload")
		}
	};
	this.obj.attachGrid = function() {
		if (this._isWindow && this.skin == "dhx_skyblue") {
			this.vs[this.av].dhxcont.mainCont[this.av].style.border = "#a4bed4 1px solid",
			this._redraw()
		}
		var b = document.createElement("DIV");
		b.id = "dhxGridObj_" + this._genStr(12);
		b.style.width = "100%";
		b.style.height = "100%";
		b.cmp = "grid";
		document.body.appendChild(b);
		this.attachObject(b.id, !1, !0, !1);
		this.vs[this.av].grid = new dhtmlXGridObject(b.id);
		this.vs[this.av].grid.setSkin(this.skin);
		if (this.skin == "dhx_skyblue" || this.skin == "dhx_black" || this.skin == "dhx_blue") {
			this.vs[this.av].grid.entBox.style.border = "0px solid white",
			this.vs[this.av].grid._sizeFix = 2
		}
		this.vs[this.av].gridId = b.id;
		this.vs[this.av].gridObj = b;
		this.skin == "dhx_terrace" && (this.adjust(), this.updateNestedObjects(!0));
		return this.vs[this._viewRestore()].grid
	};
	this.obj.attachScheduler = function(b, a, c, d) {
		var d = d || window.scheduler,
		e = 0;
		c && (h = document.getElementById(c)) && (e = 1);
		if (!e) {
			var f = c || '<div class="dhx_cal_tab" name="day_tab" style="right:204px;"></div><div class="dhx_cal_tab" name="week_tab" style="right:140px;"></div><div class="dhx_cal_tab" name="month_tab" style="right:76px;"></div>',
			h = document.createElement("DIV");
			h.id = "dhxSchedObj_" + this._genStr(12);
			h.innerHTML = '<div id="' + h.id + '" class="dhx_cal_container" style="width:100%; height:100%;"><div class="dhx_cal_navline"><div class="dhx_cal_prev_button">&nbsp;</div><div class="dhx_cal_next_button">&nbsp;</div><div class="dhx_cal_today_button"></div><div class="dhx_cal_date"></div>' + f + '</div><div class="dhx_cal_header"></div><div class="dhx_cal_data"></div></div>';
			document.body.appendChild(h.firstChild)
		}
		this.attachObject(h.id, !1, !0, !1);
		this.vs[this.av].sched = d;
		this.vs[this.av].schedId = h.id;
		d.setSizes = d.update_view;
		d.destructor = function() {};
		d.init(h.id, b, a);
		return this.vs[this._viewRestore()].sched
	};
	this.obj.attachTree = function(b) {
		if (this._isWindow && this.skin == "dhx_skyblue") {
			this.vs[this.av].dhxcont.mainCont[this.av].style.border = "#a4bed4 1px solid",
			this._redraw()
		}
		var a = document.createElement("DIV");
		a.id = "dhxTreeObj_" + this._genStr(12);
		a.style.width = "100%";
		a.style.height = "100%";
		a.cmp = "tree";
		document.body.appendChild(a);
		this.attachObject(a.id, !1, !0, !1);
		this.vs[this.av].tree = new dhtmlXTreeObject(a.id, "100%", "100%", b || 0);
		this.vs[this.av].tree.setSkin(this.skin);
		this.vs[this.av].tree.allTree.childNodes[0].style.marginTop = "2px";
		this.vs[this.av].tree.allTree.childNodes[0].style.marginBottom = "2px";
		this.vs[this.av].treeId = a.id;
		this.vs[this.av].treeObj = a;
		this.skin == "dhx_terrace" && (this.adjust(), this.updateNestedObjects(!0));
		return this.vs[this._viewRestore()].tree
	};
	this.obj.attachTabbar = function(b) {
		if (this._isWindow && this.skin == "dhx_skyblue") {
			this.vs[this.av].dhxcont.style.border = "none",
			this.setDimension(this.w, this.h)
		}
		var a = document.createElement("DIV");
		a.id = "dhxTabbarObj_" + this._genStr(12);
		a.style.width = "100%";
		a.style.height = "100%";
		a.style.overflow = "hidden";
		a.cmp = "tabbar";
		if (!this._isWindow) {
			a._hideBorders = !0
		}
		document.body.appendChild(a);
		this.attachObject(a.id, !1, !0, !1);
		if (this._isCell) {
			this.hideHeader(),
			this._padding = a._hideBorders = !1
		}
		this.vs[this.av].tabbar = new dhtmlXTabBar(a.id, b || "top", this.skin == "dhx_terrace" ? null: 20);
		if (!this._isWindow && this.skin != "dhx_terrace") {
			this.vs[this.av].tabbar._s.expand = !0
		}
		this.vs[this.av].tabbar.setSkin(this.skin);
		this.vs[this.av].tabbar.adjustOuterSize();
		this.vs[this.av].tabbarId = a.id;
		this.vs[this.av].tabbarObj = a;
		this.skin == "dhx_terrace" && (this.adjust(), this.updateNestedObjects(!0));
		return this.vs[this._viewRestore()].tabbar
	};
	this.obj.attachFolders = function() {
		if (this._isWindow && this.skin == "dhx_skyblue") {
			this.vs[this.av].dhxcont.mainCont[this.av].style.border = "#a4bed4 1px solid",
			this._redraw()
		}
		var b = document.createElement("DIV");
		b.id = "dhxFoldersObj_" + this._genStr(12);
		b.style.width = "100%";
		b.style.height = "100%";
		b.style.overflow = "hidden";
		b.cmp = "folders";
		document.body.appendChild(b);
		this.attachObject(b.id, !1, !0, !1);
		this.vs[this.av].folders = new dhtmlxFolders(b.id);
		this.vs[this.av].folders.setSizes();
		this.vs[this.av].foldersId = b.id;
		this.vs[this.av].foldersObj = b;
		return this.vs[this._viewRestore()].folders
	};
	this.obj.attachAccordion = function() {
		if (this._isWindow && this.skin == "dhx_skyblue") {
			this.vs[this.av].dhxcont.mainCont[this.av].style.border = "#a4bed4 1px solid",
			this._redraw()
		}
		var b = document.createElement("DIV");
		b.id = "dhxAccordionObj_" + this._genStr(12);
		this._padding = !0;
		if (this.skin == "dhx_web") {
			b.style.left = "0px",
			b.style.top = "0px",
			b.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) + "px",
			b.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) + "px"
		} else {
			if (this.skin != "dhx_terrace") {
				b.style.left = "-1px",
				b.style.top = "-1px",
				b.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) + 2 + "px",
				b.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) + 2 + "px"
			}
		}
		b.style.position = "relative";
		b.cmp = "accordion";
		document.body.appendChild(b);
		this.attachObject(b.id, !1, !0, !1);
		this.vs[this.av].accordion = new dhtmlXAccordion(b.id, this.skin);
		this.vs[this.av].accordion.setSizes();
		this.vs[this.av].accordionId = b.id;
		this.vs[this.av].accordionObj = b;
		this.skin == "dhx_terrace" && (this.adjust(), this.updateNestedObjects(!0));
		return this.vs[this._viewRestore()].accordion
	};
	this.obj.attachLayout = function(b, a) {
		if (this._isCell && this.skin == "dhx_skyblue") {
			this.hideHeader(),
			this.vs[this.av].dhxcont.style.border = "0px solid white",
			this.adjustContent(this.childNodes[0], 0)
		}
		this._isCell && this.skin == "dhx_web" && this.hideHeader();
		this._padding = !0;
		var c = document.createElement("DIV");
		c.id = "dhxLayoutObj_" + this._genStr(12);
		c.style.overflow = "hidden";
		c.style.position = "absolute";
		c.style.left = "0px";
		c.style.top = "0px";
		c.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) + "px";
		c.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) + "px";
		if ((this._isTabbarCell || this._isAcc) && this.skin == "dhx_skyblue") {
			c.style.left = "-1px",
			c.style.top = "-1px",
			c.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) + 2 + "px",
			c.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) + 2 + "px"
		}
		c.dhxContExists = !0;
		c.cmp = "layout";
		document.body.appendChild(c);
		this.attachObject(c.id, !1, !0, !1);
		this.vs[this.av].layout = new dhtmlXLayoutObject(c, b, a || this.skin);
		this._isWindow && this.attachEvent("_onBeforeTryResize", this.vs[this.av].layout._defineWindowMinDimension);
		this.vs[this.av].layoutId = c.id;
		this.vs[this.av].layoutObj = c;
		if (this.skin == "dhx_terrace") {
			if (this._isCell) {
				this.style.backgroundColor = "transparent",
				this.vs[this.av].dhxcont.style.backgroundColor = "transparent",
				this.hideHeader()
			}
			this.adjust();
			this.updateNestedObjects(!0)
		}
		return this.vs[this._viewRestore()].layout
	};
	this.obj.attachEditor = function(b) {
		if (this._isWindow && this.skin == "dhx_skyblue") {
			this.vs[this.av].dhxcont.mainCont[this.av].style.border = "#a4bed4 1px solid",
			this._redraw()
		}
		var a = document.createElement("DIV");
		a.id = "dhxEditorObj_" + this._genStr(12);
		a.style.position = "relative";
		a.style.display = "none";
		a.style.overflow = "hidden";
		a.style.width = "100%";
		a.style.height = "100%";
		a.cmp = "editor";
		document.body.appendChild(a);
		if (this.skin == "dhx_terrace") {
			a._attached = !0
		}
		this.attachObject(a.id, !1, !0, !1);
		this.vs[this.av].editor = new dhtmlXEditor(a.id, b || this.skin);
		this.vs[this.av].editorId = a.id;
		this.vs[this.av].editorObj = a;
		this.skin == "dhx_terrace" && (this.adjust(), this.updateNestedObjects(!0));
		return this.vs[this._viewRestore()].editor
	};
	this.obj.attachMap = function(b) {
		var a = document.createElement("DIV");
		a.id = "GMapsObj_" + this._genStr(12);
		a.style.position = "relative";
		a.style.display = "none";
		a.style.overflow = "hidden";
		a.style.width = "100%";
		a.style.height = "100%";
		a.cmp = "gmaps";
		document.body.appendChild(a);
		this.attachObject(a.id, !1, !0, !0);
		b || (b = {
			center: new google.maps.LatLng(40.719837, -73.992348),
			zoom: 11,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});
		this.vs[this.av].gmaps = new google.maps.Map(a, b);
		return this.vs[this.av].gmaps
	};
	this.obj.attachObject = function(b, a, c, d) {
		typeof b == "string" && (b = document.getElementById(b));
		if (a) {
			b.style.visibility = "hidden";
			b.style.display = "";
			var e = b.offsetWidth,
			f = b.offsetHeight
		}
		this._attachContent("obj", b);
		if (a && this._isWindow) {
			b.style.visibility = "",
			this._adjustToContent(e, f)
		}
		if (this.skin == "dhx_terrace" && (this.vs[this.av].menu != null || this.vs[this.av].toolbar != null)) {
			this.adjust(typeof d == "undefined" || d == !0),
			this.updateNestedObjects(!0)
		}
		c || this._viewRestore()
	};
	this.obj.detachObject = function(b, a) {
		for (var c = null,
		d = null,
		e = "tree,grid,layout,tabbar,accordion,folders,form".split(","), f = 0; f < e.length; f++) {
			if (this.vs[this.av][e[f]]) {
				c = this.vs[this.av][e[f]];
				d = this.vs[this.av][e[f] + "Obj"];
				if (b) {
					c.unload && c.unload();
					for (c.destructor && c.destructor(); d.childNodes.length > 0;) {
						d.removeChild(d.childNodes[0])
					}
					d.parentNode.removeChild(d);
					c = d = null
				} else {
					document.body.appendChild(d),
					d.style.display = "none"
				}
				this.vs[this.av][e[f]] = null;
				this.vs[this.av][e[f] + "Id"] = null;
				this.vs[this.av][e[f] + "Obj"] = null
			}
		}
		if (c != null && d != null) {
			return [c, d]
		}
		if (b && this.vs[this.av]._frame) {
			this._detachURLEvents(),
			this.vs[this.av]._frame = null
		}
		for (var h = this.vs[this.av].dhxcont.mainCont[this.av]; h.childNodes.length > 0;) {
			if (b == !0) {
				h.removeChild(h.childNodes[0])
			} else {
				var g = h.childNodes[0];
				a != null ? (typeof a != "object" && (a = document.getElementById(a)), a.appendChild(g)) : document.body.appendChild(g);
				g.style.display = "none"
			}
		}
		h = a = null
	};
	this.obj.appendObject = function(b) {
		typeof b == "string" && (b = document.getElementById(b));
		this._attachContent("obj", b, !0)
	};
	this.obj.attachHTMLString = function(b) {
		this._attachContent("str", b);
		for (var a = b.match(/<script[^>]*>[^\f]*?<\/script>/g) || [], c = 0; c < a.length; c++) {
			var d = a[c].replace(/<([\/]{0,1})script[^>]*>/g, "");
			d && (window.execScript ? window.execScript(d) : window.eval(d))
		}
	};
	this.obj.attachURL = function(b, a) {
		this._attachContent(a == !0 ? "urlajax": "url", b, !1);
		if (this.skin == "dhx_terrace" && (this.vs[this.av].menu != null || this.vs[this.av].toolbar != null)) {
			this.adjust(!0),
			this.updateNestedObjects(!0)
		}
		this._viewRestore()
	};
	this.obj.adjust = function(b) {
		if (this.skin == "dhx_skyblue") {
			if (this.vs[this.av].menu) {
				if (this._isWindow || this._isLayout) {
					this.vs[this.av].menu._topLevelOffsetLeft = 0,
					document.getElementById(this.vs[this.av].menuId).style.height = "26px",
					this.vs[this.av].menuHeight = document.getElementById(this.vs[this.av].menuId).offsetHeight,
					this._doOnAttachMenu && this._doOnAttachMenu("show")
				}
				if (this._isCell) {
					document.getElementById(this.vs[this.av].menuId).className += " in_layoutcell",
					this.vs[this.av].menuHeight = 25
				}
				if (this._isAcc) {
					document.getElementById(this.vs[this.av].menuId).className += " in_acccell",
					this.vs[this.av].menuHeight = 25
				}
				this._doOnAttachMenu && this._doOnAttachMenu("adjust")
			}
			this.vs[this.av].toolbar && (this._isWindow && (document.getElementById(this.vs[this.av].toolbarId).className += " in_window"), this._isLayout && (document.getElementById(this.vs[this.av].toolbarId).className += " in_layout"), this._isCell && (document.getElementById(this.vs[this.av].toolbarId).className += " in_layoutcell"), this._isAcc && (document.getElementById(this.vs[this.av].toolbarId).className += " in_acccell"), this._isTabbarCell && (document.getElementById(this.vs[this.av].toolbarId).className += " in_tabbarcell"))
		}
		this.skin == "dhx_web" && this.vs[this.av].toolbar && (this._isWindow && (document.getElementById(this.vs[this.av].toolbarId).className += " in_window"), this._isLayout && (document.getElementById(this.vs[this.av].toolbarId).className += " in_layout"), this._isCell && (document.getElementById(this.vs[this.av].toolbarId).className += " in_layoutcell"), this._isAcc && (document.getElementById(this.vs[this.av].toolbarId).className += " in_acccell"), this._isTabbarCell && (document.getElementById(this.vs[this.av].toolbarId).className += " in_tabbarcell"));
		if (this.skin == "dhx_terrace") {
			var a = 0;
			if (this._isWindow || this._isCell || this._isAcc || this._isTabbarCell) {
				a = 14
			}
			this._isCell && this._noHeader && (a = 0);
			var c = 0;
			if (this._isWindow || this._isCell || this._isAcc || this._isTabbarCell) {
				c = 14
			}
			this._isCell && this._noHeader && (c = 0);
			var d = b == !0 && !this.vs[this.av].toolbar || this._isLayout ? 14 : 0,
			e = b == !0 || this._isLayout ? 14 : 0,
			f = !1;
			if (this.vs[this.av].menu) {
				document.getElementById(this.vs[this.av].menuId).style.marginLeft = a + "px",
				document.getElementById(this.vs[this.av].menuId).style.marginRight = a + "px",
				document.getElementById(this.vs[this.av].menuId).style.marginTop = c + "px",
				document.getElementById(this.vs[this.av].menuId).style.marginBottom = d + "px",
				this.vs[this.av].menuHeight = 32 + c + d,
				this._doOnAttachMenu && this._doOnAttachMenu("show"),
				f = !0
			}
			if (this.vs[this.av].toolbar) {
				c == 0 && this.vs[this.av].menu != null & this._isCell && (c = 14),
				document.getElementById(this.vs[this.av].toolbarId).style.marginLeft = a + "px",
				document.getElementById(this.vs[this.av].toolbarId).style.marginRight = a + "px",
				document.getElementById(this.vs[this.av].toolbarId).style.marginTop = c + "px",
				document.getElementById(this.vs[this.av].toolbarId).style.marginBottom = e + "px",
				this.vs[this.av].toolbarHeight = this.vs[this.av].toolbar.cont.offsetHeight + c + e,
				this._doOnAttachToolbar && this._doOnAttachToolbar("show"),
				f = !0
			}
		}
	};
	this.obj._attachContent = function(b, a, c) {
		if (c !== !0) {
			if (this.vs[this.av]._frame) {
				this._detachURLEvents(),
				this.vs[this.av]._frame = null
			}
			for (; this.vs[this.av].dhxcont.mainCont[this.av].childNodes.length > 0;) {
				this.vs[this.av].dhxcont.mainCont[this.av].removeChild(this.vs[this.av].dhxcont.mainCont[this.av].childNodes[0])
			}
		}
		if (b == "url") {
			if (this._isWindow && a.cmp == null && this.skin == "dhx_skyblue") {
				this.vs[this.av].dhxcont.mainCont[this.av].style.border = "#a4bed4 1px solid",
				this._redraw()
			}
			var d = document.createElement("IFRAME");
			d.frameBorder = 0;
			d.border = 0;
			d.style.width = "100%";
			d.style.height = "100%";
			d.setAttribute("src", "javascript:false;");
			this.vs[this.av].dhxcont.mainCont[this.av].appendChild(d);
			d.src = a;
			this.vs[this.av]._frame = d;
			this._attachURLEvents()
		} else {
			if (b == "urlajax") {
				if (this._isWindow && a.cmp == null && this.skin == "dhx_skyblue") {
					this.vs[this.av].dhxcont.mainCont[this.av].style.border = "#a4bed4 1px solid",
					this.vs[this.av].dhxcont.mainCont[this.av].style.backgroundColor = "#FFFFFF",
					this._redraw()
				}
				var e = this,
				f = String(this.av).valueOf(),
				h = function() {
					var a = e.av;
					e.av = f;
					e.attachHTMLString(this.xmlDoc.responseText, this);
					e.av = a;
					e._doOnFrameContentLoaded && e._doOnFrameContentLoaded();
					this.destructor()
				},
				g = new dtmlXMLLoaderObject(h, window);
				g.dhxWindowObject = this;
				g.loadXML(a)
			} else {
				if (b == "obj") {
					if (this._isWindow && a.cmp == null && this.skin == "dhx_skyblue") {
						this.vs[this.av].dhxcont.mainCont[this.av].style.border = "#a4bed4 1px solid",
						this.vs[this.av].dhxcont.mainCont[this.av].style.backgroundColor = "#FFFFFF",
						this._redraw()
					}
					this.vs[this.av].dhxcont._frame = null;
					this.vs[this.av].dhxcont.mainCont[this.av].appendChild(a);
					this.vs[this.av].dhxcont.mainCont[this.av].style.overflow = c === !0 ? "auto": "hidden";
					a.style.display = ""
				} else {
					if (b == "str") {
						if (this._isWindow && a.cmp == null && this.skin == "dhx_skyblue") {
							this.vs[this.av].dhxcont.mainCont[this.av].style.border = "#a4bed4 1px solid",
							this.vs[this.av].dhxcont.mainCont[this.av].style.backgroundColor = "#FFFFFF",
							this._redraw()
						}
						this.vs[this.av].dhxcont._frame = null;
						this.vs[this.av].dhxcont.mainCont[this.av].innerHTML = a
					}
				}
			}
		}
	};
	this.obj._attachURLEvents = function() {
		var b = this,
		a = this.vs[this.av]._frame;
		_isIE ? a.onreadystatechange = function() {
			if (a.readyState == "complete") {
				try {
					a.contentWindow.document.body.onmousedown = function() {
						b._doOnFrameMouseDown && b._doOnFrameMouseDown()
					}
				} catch(c) {}
				try {
					b._doOnFrameContentLoaded && b._doOnFrameContentLoaded()
				} catch(d) {}
			}
		}: a.onload = function() {
			try {
				a.contentWindow.onmousedown = function() {
					b._doOnFrameMouseDown && b._doOnFrameMouseDown()
				}
			} catch(c) {}
			try {
				b._doOnFrameContentLoaded && b._doOnFrameContentLoaded()
			} catch(d) {}
		}
	};
	this.obj._detachURLEvents = function() {
		if (_isIE) {
			try {
				this.vs[this.av]._frame.onreadystatechange = null,
				this.vs[this.av]._frame.contentWindow.document.body.onmousedown = null,
				this.vs[this.av]._frame.onload = null
			} catch(b) {}
		} else {
			try {
				this.vs[this.av]._frame.contentWindow.onmousedown = null,
				this.vs[this.av]._frame.onload = null
			} catch(a) {}
		}
	};
	this.obj.showMenu = function() {
		if (this.vs[this.av].menu && this.vs[this.av].menuId && document.getElementById(this.vs[this.av].menuId).style.display == "none") {
			this.vs[this.av].menuHidden = !1,
			this._doOnAttachMenu && this._doOnAttachMenu("show"),
			document.getElementById(this.vs[this.av].menuId).style.display = "",
			this._viewRestore()
		}
	};
	this.obj.hideMenu = function() {
		if (this.vs[this.av].menu && this.vs[this.av].menuId && document.getElementById(this.vs[this.av].menuId).style.display != "none") {
			document.getElementById(this.vs[this.av].menuId).style.display = "none",
			this.vs[this.av].menuHidden = !0,
			this._doOnAttachMenu && this._doOnAttachMenu("hide"),
			this._viewRestore()
		}
	};
	this.obj.showToolbar = function() {
		if (this.vs[this.av].toolbar && this.vs[this.av].toolbarId && document.getElementById(this.vs[this.av].toolbarId).style.display == "none") {
			this.vs[this.av].toolbarHidden = !1,
			this._doOnAttachToolbar && this._doOnAttachToolbar("show"),
			document.getElementById(this.vs[this.av].toolbarId).style.display = "",
			this._viewRestore()
		}
	};
	this.obj.hideToolbar = function() {
		if (this.vs[this.av].toolbar && this.vs[this.av].toolbarId && document.getElementById(this.vs[this.av].toolbarId).style.display != "none") {
			this.vs[this.av].toolbarHidden = !0,
			document.getElementById(this.vs[this.av].toolbarId).style.display = "none",
			this._doOnAttachToolbar && this._doOnAttachToolbar("hide"),
			this._viewRestore()
		}
	};
	this.obj.showStatusBar = function() {
		if (this.vs[this.av].sb && this.vs[this.av].sbId && document.getElementById(this.vs[this.av].sbId).style.display == "none") {
			this.vs[this.av].sbHidden = !1,
			this._doOnAttachStatusBar && this._doOnAttachStatusBar("show"),
			document.getElementById(this.vs[this.av].sbId).style.display = "",
			this._viewRestore()
		}
	};
	this.obj.hideStatusBar = function() {
		if (this.vs[this.av].sb && this.vs[this.av].sbId && document.getElementById(this.vs[this.av].sbId).style.display != "none") {
			this.vs[this.av].sbHidden = !0,
			document.getElementById(this.vs[this.av].sbId).style.display = "none",
			this._doOnAttachStatusBar && this._doOnAttachStatusBar("hide"),
			this._viewRestore()
		}
	};
	this.obj._dhxContDestruct = function() {
		var b = this.av,
		a;
		for (a in this.vs) {
			this.av = a,
			this.detachMenu(!0),
			this.detachToolbar(!0),
			this.detachStatusBar(!0),
			this.detachObject(!0),
			this.vs[a].dhxcont.mainCont[a] = null
		}
		for (a in this.vs) {
			this.vs[a].dhxcont.mainCont = null,
			this.vs[a].dhxcont.innerHTML = "",
			this.vs[a].dhxcont = null,
			this.vs[a] = null
		}
		this.setActive = this.getView = this.getFrame = this._getSt = this._dhxContDestruct = this._genStr = this._init = this._setPadding = this._viewRestore = this._detachURLEvents = this._attachURLEvents = this._attachContent = this.updateNestedObjects = this.hideCoverBlocker = this.showCoverBlocker = this.coverBlocker = this.adjustContent = this.moveContentTo = this.setMinContentSize = this.adjust = this.show = this.view = this.attachMap = this.attachURL = this.attachHTMLString = this.appendObject = this.detachObject = this.attachObject = this.attachEditor = this.attachLayout = this.attachAccordion = this.attachFolders = this.attachTabbar = this.attachTree = this.attachScheduler = this.attachGrid = this.hideStatusBar = this.hideToolbar = this.hideMenu = this.showStatusBar = this.showToolbar = this.showMenu = this.detachStatusBar = this.detachToolbar = this.detachMenu = this.attachStatusBar = this.attachToolbar = this.attachMenu = this.vs = null;
		g.st.innerHTML = "";
		g.st.parentNode.removeChild(g.st);
		g.st = null;
		g.setContent = null;
		g.dhxcont = null;
		g = g.obj = null;
		if (dhtmlx.detaches) {
			for (a in dhtmlx.detaches) {
				dhtmlx.detaches[a](this)
			}
		}
	};
	if (dhtmlx.attaches) {
		for (var j in dhtmlx.attaches) {
			this.obj[j] = dhtmlx.attaches[j]
		}
	}
	return this
};
function dhtmlXComboFromSelect(o, m) {
	if (typeof(o) == "string") {
		o = document.getElementById(o)
	}
	m = m || o.getAttribute("width") || (window.getComputedStyle ? window.getComputedStyle(o, null)["width"] : (o.currentStyle ? o.currentStyle.width: 0));
	if ((!m) || (m == "auto")) {
		m = o.offsetWidth || 100
	}
	var s = document.createElement("SPAN");
	o.parentNode.insertBefore(s, o);
	o.style.display = "none";
	var r = o.getAttribute("opt_type");
	var n = new dhtmlXCombo(s, o.name, m, r, o.tabIndex);
	var p = new Array();
	var l = -1;
	for (var t = 0; t < o.options.length; t++) {
		if (o.options[t].selected) {
			l = t
		}
		var q = o.options[t].innerHTML;
		var i = o.options[t].getAttribute("value");
		if ((typeof(i) == "undefined") || (i === null)) {
			i = q
		}
		p[t] = {
			value: i,
			text: q,
			img_src: o.options[t].getAttribute("img_src")
		}
	}
	if (p.length) {
		n.addOption(p)
	}
	o.parentNode.removeChild(o);
	if (l >= 0) {
		n.selectOption(l, null, true)
	}
	if (o.onchange) {
		n.attachEvent("onChange", o.onchange)
	}
	if (o.style.direction == "rtl" && n.setRTL) {
		n.setRTL(true)
	}
	return n
}
var dhtmlXCombo_optionTypes = [];
function dhtmlXCombo(f, h, g, j, i) {
	if (typeof(f) == "string") {
		f = document.getElementById(f)
	}
	this.dhx_Event();
	this.optionType = (j != window.undefined && dhtmlXCombo_optionTypes[j]) ? j: "default";
	this._optionObject = dhtmlXCombo_optionTypes[this.optionType];
	this._disabled = false;
	this.readonlyDelay = 750;
	this.filterEntities = ["[", "]", "{", "}", "(", ")", "+", "*", "\\", "?", ".", "$", "^"];
	if (!window.dhx_glbSelectAr) {
		window.dhx_glbSelectAr = new Array();
		window.dhx_openedSelect = null;
		window.dhx_SelectId = 1;
		dhtmlxEvent(document.body, "click", this.closeAll);
		dhtmlxEvent(document.body, "keydown",
		function(a) {
			try {
				if ((a || event).keyCode == 9) {
					window.dhx_glbSelectAr[0].closeAll()
				}
			} catch(a) {}
			return true
		})
	}
	if (f.tagName == "SELECT") {
		return dhtmlXComboFromSelect(f)
	} else {
		this._createSelf(f, h, g, i)
	}
	dhx_glbSelectAr.push(this)
}
dhtmlXCombo.prototype.setSize = function(b) {
	this.DOMlist.style.width = b + "px";
	if (this.DOMlistF) {
		this.DOMlistF.style.width = b + "px"
	}
	this.DOMelem.style.width = b + "px";
	this.DOMelem_input.style.width = Math.max(0, (b - 19)) + "px"
};
dhtmlXCombo.prototype.enableFilteringMode = function(e, f, g, h) {
	if (e == "between") {
		this._filter = true;
		this._anyPosition = true;
		this._autoDisabled = true
	} else {
		this._filter = convertStringToBoolean(e)
	}
	if (f) {
		this._xml = f;
		this._autoxml = convertStringToBoolean(h)
	}
	if (convertStringToBoolean(g)) {
		this._xmlCache = []
	}
};
dhtmlXCombo.prototype.setFilteringParam = function(d, c) {
	if (!this._prs) {
		this._prs = []
	}
	this._prs.push([d, c])
};
dhtmlXCombo.prototype.disable = function(c) {
	var d = convertStringToBoolean(c);
	if (this._disabled == d) {
		return
	}
	this.DOMelem_input.disabled = d;
	this._disabled = d
};
dhtmlXCombo.prototype.readonly = function(f, e) {
	this.DOMelem_input.readOnly = f ? true: false;
	if (e === false || f === false) {
		this.DOMelem.onkeyup = function(a) {}
	} else {
		var d = this;
		this.DOMelem.onkeyup = function(c) {
			c = c || window.event;
			if (d._searchTimeout) {
				window.clearTimeout(d._searchTimeout)
			}
			if (c.keyCode != 9) {
				c.cancelBubble = true
			}
			if ((c.keyCode >= 48 && c.keyCode <= 57) || (c.keyCode >= 65 && c.keyCode <= 90)) {
				if (!d._searchText) {
					d._searchText = ""
				}
				d._searchText += String.fromCharCode(c.keyCode);
				for (var a = 0; a < d.optionsArr.length; a++) {
					var b = d.optionsArr[a].text;
					if (b.toString().toUpperCase().indexOf(d._searchText) == 0) {
						d.selectOption(a);
						break
					}
				}
				d._searchTimeout = window.setTimeout(function() {
					d._searchText = ""
				},
				d.readonlyDelay);
				c.cancelBubble = true
			}
		}
	}
};
dhtmlXCombo.prototype.getOption = function(c) {
	for (var d = 0; d < this.optionsArr.length; d++) {
		if (this.optionsArr[d].value == c) {
			return this.optionsArr[d]
		}
	}
	return null
};
dhtmlXCombo.prototype.getOptionByLabel = function(c) {
	for (var d = 0; d < this.optionsArr.length; d++) {
		if (this.optionsArr[d].text.toUpperCase() == c.toUpperCase() || this.optionsArr[d]._ctext.toUpperCase() == c.toUpperCase()) {
			return this.optionsArr[d]
		}
	}
	return null
};
dhtmlXCombo.prototype.getOptionByIndex = function(b) {
	return this.optionsArr[b]
};
dhtmlXCombo.prototype.clearAll = function(b) {
	if (b) {
		this.setComboText("")
	}
	this.optionsArr = new Array();
	this.redrawOptions();
	if (b) {
		if (this._selOption) {
			this._selOption.RedrawHeader(this, true)
		}
		this._confirmSelection()
	}
};
dhtmlXCombo.prototype.deleteOption = function(c) {
	var d = this.getIndexByValue(c);
	if (d < 0) {
		return
	}
	if (this.optionsArr[d] == this._selOption) {
		this._selOption = null
	}
	this.optionsArr.splice(d, 1);
	this.redrawOptions()
};
dhtmlXCombo.prototype.render = function(b) {
	this._skiprender = (!convertStringToBoolean(b));
	this.redrawOptions()
};
dhtmlXCombo.prototype.updateOption = function(f, i, g, j) {
	var h = this.getOption(f);
	if (typeof(i) != "object") {
		i = {
			text: g,
			value: i,
			css: j
		}
	}
	h.setValue(i);
	this.redrawOptions()
};
dhtmlXCombo.prototype.addOption = function(f) {
	if (!arguments[0].length || typeof(arguments[0]) != "object") {
		args = [arguments]
	} else {
		args = f
	}
	this.render(false);
	for (var e = 0; e < args.length; e++) {
		var d = args[e];
		if (d.length) {
			d.value = d[0] || "";
			d.text = d[1] || "";
			d.css = d[2] || ""
		}
		this._addOption(d)
	}
	this.render(true)
};
dhtmlXCombo.prototype._addOption = function(b) {
	dOpt = new this._optionObject();
	this.optionsArr.push(dOpt);
	dOpt.setValue.apply(dOpt, [b]);
	this.redrawOptions()
};
dhtmlXCombo.prototype.getIndexByValue = function(c) {
	for (var d = 0; d < this.optionsArr.length; d++) {
		if (this.optionsArr[d].value == c) {
			return d
		}
	}
	return - 1
};
dhtmlXCombo.prototype.getSelectedValue = function() {
	return (this._selOption ? this._selOption.value: null)
};
dhtmlXCombo.prototype.getComboText = function() {
	return this.DOMelem_input.value
};
dhtmlXCombo.prototype.setComboText = function(b) {
	this.DOMelem_input.value = b
};
dhtmlXCombo.prototype.setComboValue = function(c) {
	this.setComboText(c);
	for (var d = 0; d < this.optionsArr.length; d++) {
		if (this.optionsArr[d].data()[0] == c) {
			return this.selectOption(d, null, true)
		}
	}
	this.DOMelem_hidden_input.value = c
};
dhtmlXCombo.prototype.getActualValue = function() {
	return this.DOMelem_hidden_input.value
};
dhtmlXCombo.prototype.getSelectedText = function() {
	return (this._selOption ? this._selOption.text: "")
};
dhtmlXCombo.prototype.getSelectedIndex = function() {
	for (var b = 0; b < this.optionsArr.length; b++) {
		if (this.optionsArr[b] == this._selOption) {
			return b
		}
	}
	return - 1
};
dhtmlXCombo.prototype.setName = function(b) {
	this.DOMelem_hidden_input.name = b;
	this.DOMelem_hidden_input2 = b.replace(/(\]?)$/, "_new_value$1");
	this.name = b
};
dhtmlXCombo.prototype.show = function(b) {
	if (convertStringToBoolean(b)) {
		this.DOMelem.style.display = ""
	} else {
		this.DOMelem.style.display = "none"
	}
};
dhtmlXCombo.prototype.destructor = function() {
	this.DOMParent.removeChild(this.DOMelem);
	this.DOMlist.parentNode.removeChild(this.DOMlist);
	if (this.DOMlistF) {
		this.DOMlistF.parentNode.removeChild(this.DOMlistF)
	}
	var c = dhx_glbSelectAr;
	this.DOMParent = this.DOMlist = this.DOMlistF = this.DOMelem = 0;
	this.DOMlist.combo = this.DOMelem.combo = 0;
	for (var d = 0; d < c.length; d++) {
		if (c[d] == this) {
			c[d] = null;
			c.splice(d, 1);
			return
		}
	}
};
dhtmlXCombo.prototype._createSelf = function(i, k, m, n) {
	if (m.toString().indexOf("%") != -1) {
		var l = this;
		var h = parseInt(m) / 100;
		window.setInterval(function() {
			if (!i.parentNode) {
				return
			}
			var a = i.parentNode.offsetWidth * h - 2;
			if (a < 0) {
				return
			}
			if (a == l._lastTs) {
				return
			}
			l.setSize(l._lastTs = a)
		},
		500);
		var m = parseInt(i.offsetWidth)
	}
	var m = parseInt(m || 100);
	this.ListPosition = "Bottom";
	this.DOMParent = i;
	this._inID = null;
	this.name = k;
	this._selOption = null;
	this.optionsArr = Array();
	var j = new this._optionObject();
	j.DrawHeader(this, k, m, n);
	this.DOMlist = document.createElement("DIV");
	this.DOMlist.className = "dhx_combo_list " + (dhtmlx.skin ? dhtmlx.skin + "_list": "");
	this.DOMlist.style.width = m - (_isIE ? 0 : 0) + "px";
	if (_isOpera || _isKHTML) {
		this.DOMlist.style.overflow = "auto"
	}
	this.DOMlist.style.display = "none";
	document.body.insertBefore(this.DOMlist, document.body.firstChild);
	if (_isIE) {
		this.DOMlistF = document.createElement("IFRAME");
		this.DOMlistF.style.border = "0px";
		this.DOMlistF.className = "dhx_combo_list";
		this.DOMlistF.style.width = m - (_isIE ? 0 : 0) + "px";
		this.DOMlistF.style.display = "none";
		this.DOMlistF.src = "javascript:false;";
		document.body.insertBefore(this.DOMlistF, document.body.firstChild)
	}
	this.DOMlist.combo = this.DOMelem.combo = this;
	this.DOMelem_input.onkeydown = this._onKey;
	this.DOMelem_input.onkeypress = this._onKeyF;
	this.DOMelem_input.onblur = this._onBlur;
	this.DOMelem.onclick = this._toggleSelect;
	this.DOMlist.onclick = this._selectOption;
	this.DOMlist.onmousedown = function() {
		this._skipBlur = true
	};
	this.DOMlist.onkeydown = function(a) { (a || event).cancelBubble = true;
		this.combo.DOMelem_input.onkeydown(a)
	};
	this.DOMlist.onmouseover = this._listOver
};
dhtmlXCombo.prototype._listOver = function(e) {
	e = e || event;
	e.cancelBubble = true;
	var g = (_isIE ? event.srcElement: e.target);
	var h = this.combo;
	if (g.parentNode == h.DOMlist) {
		if (h._selOption) {
			h._selOption.deselect()
		}
		if (h._tempSel) {
			h._tempSel.deselect()
		}
		var i = 0;
		for (i; i < h.DOMlist.childNodes.length; i++) {
			if (h.DOMlist.childNodes[i] == g) {
				break
			}
		}
		var j = h.optionsArr[i];
		h._tempSel = j;
		h._tempSel.select();
		if ((h._autoxml) && ((i + 1) == h._lastLength)) {
			h._fetchOptions(i + 1, h._lasttext || "")
		}
	}
};
dhtmlXCombo.prototype._positList = function() {
	var b = this.getPosition(this.DOMelem);
	if (this.ListPosition == "Bottom") {
		this.DOMlist.style.top = b[1] + this.DOMelem.offsetHeight - 1 + "px";
		this.DOMlist.style.left = b[0] + "px"
	} else {
		if (this.ListPosition == "Top") {
			this.DOMlist.style.top = b[1] - this.DOMlist.offsetHeight + "px";
			this.DOMlist.style.left = b[0] + "px"
		} else {
			this.DOMlist.style.top = b[1] + "px";
			this.DOMlist.style.left = b[0] + this.DOMelem.offsetWidth + "px"
		}
	}
};
dhtmlXCombo.prototype.getPosition = function(l, i) {
	if (_isIE && _isIE < 8) {
		if (!i) {
			i = document.body
		}
		var j = l;
		var g = 0;
		var h = 0;
		while ((j) && (j != i)) {
			g += j.offsetLeft - j.scrollLeft + j.clientLeft;
			h += j.offsetTop - j.scrollTop + j.clientTop;
			j = j.offsetParent
		}
		if (document.documentElement.scrollTop) {
			h += document.documentElement.scrollTop
		}
		if (document.documentElement.scrollLeft) {
			g += document.documentElement.scrollLeft
		}
		return new Array(g, h)
	}
	var k = getOffset(l);
	return [k.left, k.top]
};
dhtmlXCombo.prototype._correctSelection = function() {
	if (this.getComboText() != "") {
		for (var b = 0; b < this.optionsArr.length; b++) {
			if (!this.optionsArr[b].isHidden()) {
				return this.selectOption(b, true, false)
			}
		}
	}
	this.unSelectOption()
};
dhtmlXCombo.prototype.selectNext = function(d) {
	var c = this.getSelectedIndex() + d;
	while (this.optionsArr[c]) {
		if (!this.optionsArr[c].isHidden()) {
			return this.selectOption(c, false, false)
		}
		c += d
	}
};
dhtmlXCombo.prototype._onKeyF = function(e) {
	var f = this.parentNode.combo;
	var d = e || event;
	d.cancelBubble = true;
	if (d.keyCode == "13" || d.keyCode == "9") {
		f._confirmSelection();
		f.closeAll()
	} else {
		if (d.keyCode == "27") {
			f._resetSelection();
			f.closeAll()
		} else {
			f._activeMode = true
		}
	}
	if (d.keyCode == "13" || d.keyCode == "27") {
		f.callEvent("onKeyPressed", [d.keyCode]);
		return false
	}
	return true
};
dhtmlXCombo.prototype._onKey = function(e) {
	var f = this.parentNode.combo; (e || event).cancelBubble = true;
	var d = (e || event).keyCode;
	if (d > 15 && d < 19) {
		return true
	}
	if (d == 27) {
		return true
	}
	if ((f.DOMlist.style.display != "block") && (d != "13") && (d != "9") && ((!f._filter) || (f._filterAny))) {
		f.DOMelem.onclick(e || event)
	}
	if ((d != "13") && (d != "9")) {
		window.setTimeout(function() {
			f._onKeyB(d)
		},
		1);
		if (d == "40" || d == "38") {
			return false
		}
	} else {
		if (d == 9) {
			f._confirmSelection();
			f.closeAll(); (e || event).cancelBubble = false
		}
	}
};
dhtmlXCombo.prototype._onKeyB = function(f) {
	if (f == "40") {
		var e = this.selectNext(1)
	} else {
		if (f == "38") {
			this.selectNext( - 1)
		} else {
			this.callEvent("onKeyPressed", [f]);
			if (this._filter) {
				return this.filterSelf((f == 8) || (f == 46))
			}
			for (var d = 0; d < this.optionsArr.length; d++) {
				if (this.optionsArr[d].data()[1] == this.DOMelem_input.value) {
					this.selectOption(d, false, false);
					return false
				}
			}
			this.unSelectOption()
		}
	}
	return true
};
dhtmlXCombo.prototype._onBlur = function() {
	var b = this.parentNode._self;
	window.setTimeout(function() {
		if (b.DOMlist._skipBlur) {
			return ! (b.DOMlist._skipBlur = false)
		}
		b._skipFocus = true;
		b._confirmSelection();
		b.callEvent("onBlur", [])
	},
	100)
};
dhtmlXCombo.prototype.redrawOptions = function() {
	if (this._skiprender) {
		return
	}
	for (var b = this.DOMlist.childNodes.length - 1; b >= 0; b--) {
		this.DOMlist.removeChild(this.DOMlist.childNodes[b])
	}
	for (var b = 0; b < this.optionsArr.length; b++) {
		this.DOMlist.appendChild(this.optionsArr[b].render())
	}
};
dhtmlXCombo.prototype.loadXML = function(g, e) {
	this._load = true;
	this.callEvent("onXLS", []);
	if (this._prs) {
		for (var f = 0; f < this._prs.length; f++) {
			g += [getUrlSymbol(g), escape(this._prs[f][0]), "=", escape(this._prs[f][1])].join("")
		}
	}
	if ((this._xmlCache) && (this._xmlCache[g])) {
		this._fillFromXML(this, null, null, null, this._xmlCache[g]);
		if (e) {
			e()
		}
	} else {
		var h = (new dtmlXMLLoaderObject(this._fillFromXML, this, true, true));
		if (e) {
			h.waitCall = e
		}
		h._cPath = g;
		h.loadXML(g)
	}
};
dhtmlXCombo.prototype.loadXMLString = function(d) {
	var c = (new dtmlXMLLoaderObject(this._fillFromXML, this, true, true));
	c.loadXMLString(d)
};
dhtmlXCombo.prototype._fillFromXML = function(a, d, w, x, B) {
	if (a._xmlCache) {
		a._xmlCache[B._cPath] = B
	}
	var v = B.getXMLTopNode("complete");
	if (v.tagName != "complete") {
		a._load = false;
		return
	}
	var j = B.doXPath("//complete");
	var y = B.doXPath("//option");
	var z = false;
	a.render(false);
	if ((!j[0]) || (!j[0].getAttribute("add"))) {
		a.clearAll();
		a._lastLength = y.length;
		if (a._xml) {
			if ((!y) || (!y.length)) {
				a.closeAll()
			} else {
				if (a._activeMode) {
					a._positList();
					a.DOMlist.style.display = "block";
					if (_isIE) {
						a._IEFix(true)
					}
				}
			}
		}
	} else {
		a._lastLength += y.length || Infinity;
		z = true
	}
	for (var b = 0; b < y.length; b++) {
		var A = new Object();
		A.text = y[b].firstChild ? y[b].firstChild.nodeValue: "";
		for (var i = 0; i < y[b].attributes.length; i++) {
			var c = y[b].attributes[i];
			if (c) {
				A[c.nodeName] = c.nodeValue
			}
		}
		a._addOption(A)
	}
	a.render(z != true || ( !! y.length));
	if ((a._load) && (a._load !== true)) {
		a.loadXML(a._load)
	} else {
		a._load = false;
		if ((!a._lkmode) && (a._filter) && !a._autoDisabled) {
			a._correctSelection()
		}
	}
	var u = B.doXPath("//option[@selected]");
	if (u.length) {
		a.selectOption(a.getIndexByValue(u[0].getAttribute("value")), false, true)
	}
	a.callEvent("onXLE", [])
};
dhtmlXCombo.prototype.unSelectOption = function() {
	if (this._selOption) {
		this._selOption.deselect()
	}
	if (this._tempSel) {
		this._tempSel.deselect()
	}
	this._tempSel = this._selOption = null
};
dhtmlXCombo.prototype.confirmValue = function() {
	this._confirmSelection()
};
dhtmlXCombo.prototype._confirmSelection = function(g, i) {
	var j = this.getComboText();
	this.setComboText("");
	this.setComboText(j);
	if (arguments.length == 0) {
		var f = this.getOptionByLabel(this.DOMelem_input.value);
		g = f ? f.value: this.DOMelem_input.value;
		i = (f == null);
		if (g == this.getActualValue()) {
			return this._skipFocus = false
		}
	}
	if (!this._skipFocus && !this._disabled) {
		try {
			this.DOMelem_input.focus()
		} catch(h) {}
	}
	this._skipFocus = false;
	this.DOMelem_hidden_input.value = g;
	this.DOMelem_hidden_input2.value = (i ? "true": "false");
	this.callEvent("onChange", []);
	this._activeMode = false
};
dhtmlXCombo.prototype._resetSelection = function(f, d) {
	var e = this.getOption(this.DOMelem_hidden_input.value);
	this.setComboValue(e ? e.data()[0] : this.DOMelem_hidden_input.value);
	this.setComboText(e ? e.data()[1] : this.DOMelem_hidden_input.value)
};
dhtmlXCombo.prototype.selectOption = function(i, k, l) {
	if (arguments.length < 3) {
		l = true
	}
	this.unSelectOption();
	var n = this.optionsArr[i];
	if (!n) {
		return
	}
	this._selOption = n;
	this._selOption.select();
	var m = this._selOption.content.offsetTop + this._selOption.content.offsetHeight - this.DOMlist.scrollTop - this.DOMlist.offsetHeight;
	if (m > 0) {
		this.DOMlist.scrollTop += m
	}
	m = this.DOMlist.scrollTop - this._selOption.content.offsetTop;
	if (m > 0) {
		this.DOMlist.scrollTop -= m
	}
	var j = this._selOption.data();
	if (l) {
		this.setComboText(j[1]);
		this._confirmSelection(j[0], false);
		if ((this._autoxml) && ((i + 1) == this._lastLength)) {
			this._fetchOptions(i + 1, this._lasttext || "")
		}
	}
	if (k) {
		var h = this.getComboText();
		if (h != j[1]) {
			this.setComboText(j[1]);
			dhtmlXRange(this.DOMelem_input, h.length + 1, j[1].length)
		}
	} else {
		this.setComboText(j[1])
	}
	this._selOption.RedrawHeader(this);
	this.callEvent("onSelectionChange", [])
};
dhtmlXCombo.prototype._selectOption = function(e) { (e || event).cancelBubble = true;
	var f = (_isIE ? event.srcElement: e.target);
	var g = this.combo;
	while (!f._self) {
		f = f.parentNode;
		if (!f) {
			return
		}
	}
	var h = 0;
	for (h; h < g.DOMlist.childNodes.length; h++) {
		if (g.DOMlist.childNodes[h] == f) {
			break
		}
	}
	g.selectOption(h, false, true);
	g.closeAll();
	g.callEvent("onBlur", []);
	g._activeMode = false
};
dhtmlXCombo.prototype.openSelect = function() {
	if (this._disabled) {
		return
	}
	this.closeAll();
	this.DOMlist.style.display = "block";
	this._positList();
	this.callEvent("onOpen", []);
	if (this._tempSel) {
		this._tempSel.deselect()
	}
	if (this._selOption) {
		this._selOption.select()
	}
	if (this._selOption) {
		var b = this._selOption.content.offsetTop + this._selOption.content.offsetHeight - this.DOMlist.scrollTop - this.DOMlist.offsetHeight;
		if (b > 0) {
			this.DOMlist.scrollTop += b
		}
		b = this.DOMlist.scrollTop - this._selOption.content.offsetTop;
		if (b > 0) {
			this.DOMlist.scrollTop -= b
		}
	}
	if (_isIE) {
		this._IEFix(true)
	}
	this.DOMelem_input.focus();
	if (this._filter) {
		this.filterSelf()
	}
};
dhtmlXCombo.prototype._toggleSelect = function(c) {
	var d = this.combo;
	if (d.DOMlist.style.display == "block") {
		d.closeAll()
	} else {
		d.openSelect()
	} (c || event).cancelBubble = true
};
dhtmlXCombo.prototype._fetchOptions = function(f, e) {
	if (e == "") {
		this.closeAll();
		return this.clearAll()
	}
	var d = this._xml + ((this._xml.indexOf("?") != -1) ? "&": "?") + "pos=" + f + "&mask=" + encodeURIComponent(e);
	this._lasttext = e;
	if (this._load) {
		this._load = d
	} else {
		if (!this.callEvent("onDynXLS", [e, f])) {
			return
		}
		this.loadXML(d)
	}
};
dhtmlXCombo.prototype.disableAutocomplete = function() {
	this._autoDisabled = true
};
dhtmlXCombo.prototype.filterSelf = function(n) {
	var h = this.getComboText();
	if (this._xml) {
		this._lkmode = n;
		this._fetchOptions(0, h)
	}
	var j = new RegExp("([" + this.filterEntities.join("\\") + "])", "g");
	h = h.replace(j, "\\$1");
	var m = (this._anyPosition ? "": "^") + h;
	var k = new RegExp(m, "i");
	this.filterAny = false;
	for (var l = 0; l < this.optionsArr.length; l++) {
		var i = k.test(this.optionsArr[l].content ? this.optionsArr[l].data()[1] : this.optionsArr[l].text);
		this.filterAny |= i;
		this.optionsArr[l].hide(!i)
	}
	if (!this.filterAny) {
		this.closeAll();
		this._activeMode = true
	} else {
		if (this.DOMlist.style.display != "block") {
			this.openSelect()
		}
		if (_isIE) {
			this._IEFix(true)
		}
	}
	if (!n && !this._autoDisabled) {
		this._correctSelection()
	} else {
		this.unSelectOption()
	}
};
dhtmlXCombo.prototype._IEFix = function(b) {
	this.DOMlistF.style.display = (b ? "block": "none");
	this.DOMlistF.style.top = this.DOMlist.style.top;
	this.DOMlistF.style.left = this.DOMlist.style.left;
	this.DOMlistF.style.width = this.DOMlist.offsetWidth + "px";
	this.DOMlistF.style.height = this.DOMlist.offsetHeight + "px"
};
dhtmlXCombo.prototype.closeAll = function() {
	if (window.dhx_glbSelectAr) {
		for (var b = 0; b < dhx_glbSelectAr.length; b++) {
			if (dhx_glbSelectAr[b].DOMlist.style.display == "block") {
				dhx_glbSelectAr[b].DOMlist.style.display = "none";
				if (_isIE) {
					dhx_glbSelectAr[b]._IEFix(false)
				}
			}
			dhx_glbSelectAr[b]._activeMode = false
		}
	}
};
dhtmlXCombo.prototype.changeOptionId = function(c, d) { (this.getOption(c) || {}).value = d
};
function dhtmlXRange(l, i, m) {
	var n = typeof(l) == "object" ? l: document.getElementById(l);
	try {
		n.focus()
	} catch(e) {}
	var j = n.value.length;
	i--;
	if (i < 0 || i > m || i > j) {
		i = 0
	}
	if (m > j) {
		m = j
	}
	if (i == m) {
		return
	}
	if (n.setSelectionRange) {
		n.setSelectionRange(i, m)
	} else {
		if (n.createTextRange) {
			var k = n.createTextRange();
			k.moveStart("character", i);
			k.moveEnd("character", m - j);
			try {
				k.select()
			} catch(e) {}
		}
	}
}
dhtmlXCombo_defaultOption = function() {
	this.init()
};
dhtmlXCombo_defaultOption.prototype.init = function() {
	this.value = null;
	this.text = "";
	this.selected = false;
	this.css = ""
};
dhtmlXCombo_defaultOption.prototype.select = function() {
	if (this.content) {
		this.content.className = "dhx_selected_option" + (dhtmlx.skin ? " combo_" + dhtmlx.skin + "_sel": "")
	}
};
dhtmlXCombo_defaultOption.prototype.hide = function(b) {
	this.render().style.display = b ? "none": ""
};
dhtmlXCombo_defaultOption.prototype.isHidden = function() {
	return (this.render().style.display == "none")
};
dhtmlXCombo_defaultOption.prototype.deselect = function() {
	if (this.content) {
		this.render()
	}
	this.content.className = ""
};
dhtmlXCombo_defaultOption.prototype.setValue = function(b) {
	this.value = b.value || "";
	this.text = b.text || "";
	this.css = b.css || "";
	this.content = null
};
dhtmlXCombo_defaultOption.prototype.render = function() {
	if (!this.content) {
		this.content = document.createElement("DIV");
		this.content._self = this;
		this.content.style.cssText = "width:100%; overflow:hidden;" + this.css;
		if (_isOpera || _isKHTML) {
			this.content.style.padding = "2px 0px 2px 0px"
		}
		this.content.innerHTML = this.text;
		this._ctext = (typeof this.content.textContent != "undefined") ? this.content.textContent: this.content.innerText
	}
	return this.content
};
dhtmlXCombo_defaultOption.prototype.data = function() {
	if (this.content) {
		return [this.value, this._ctext ? this._ctext: this.text]
	}
};
dhtmlXCombo_defaultOption.prototype.DrawHeader = function(i, h, f, g) {
	var j = document.createElement("DIV");
	j.style.width = f + "px";
	j.className = "dhx_combo_box " + (dhtmlx.skin || "");
	j._self = i;
	i.DOMelem = j;
	this._DrawHeaderInput(i, h, f, g);
	this._DrawHeaderButton(i, h, f);
	i.DOMParent.appendChild(i.DOMelem)
};
dhtmlXCombo_defaultOption.prototype._DrawHeaderInput = function(i, h, f, g) {
	var j = document.createElement("input");
	j.setAttribute("autocomplete", "off");
	j.type = "text";
	j.className = "dhx_combo_input";
	if (g) {
		j.tabIndex = g
	}
	j.style.width = f - 19 - (document.compatMode == "BackCompat" ? 0 : 3) + "px";
	i.DOMelem.appendChild(j);
	i.DOMelem_input = j;
	j = document.createElement("input");
	j.type = "hidden";
	j.name = h;
	i.DOMelem.appendChild(j);
	i.DOMelem_hidden_input = j;
	j = document.createElement("input");
	j.type = "hidden";
	j.name = (h || "").replace(/(\]?)$/, "_new_value$1");
	j.value = "true";
	i.DOMelem.appendChild(j);
	i.DOMelem_hidden_input2 = j
};
dhtmlXCombo_defaultOption.prototype._DrawHeaderButton = function(h, g, f) {
	var e = document.createElement("img");
	e.className = "dhx_combo_img";
	if (dhtmlx.image_path) {
		dhx_globalImgPath = dhtmlx.image_path
	}
	e.src = (window.dhx_globalImgPath ? dhx_globalImgPath: "") + "combo_select" + (dhtmlx.skin ? "_" + dhtmlx.skin: "") + ".gif";
	h.DOMelem.appendChild(e);
	h.DOMelem_button = e
};
dhtmlXCombo_defaultOption.prototype.RedrawHeader = function(b) {};
dhtmlXCombo_optionTypes["default"] = dhtmlXCombo_defaultOption;
dhtmlXCombo.prototype.dhx_Event = function() {
	this.dhx_SeverCatcherPath = "";
	this.attachEvent = function(original, catcher, CallObj) {
		CallObj = CallObj || this;
		original = "ev_" + original;
		if ((!this[original]) || (!this[original].addEvent)) {
			var z = new this.eventCatcher(CallObj);
			z.addEvent(this[original]);
			this[original] = z
		}
		return (original + ":" + this[original].addEvent(catcher))
	};
	this.callEvent = function(name, arg0) {
		if (this["ev_" + name]) {
			return this["ev_" + name].apply(this, arg0)
		}
		return true
	};
	this.checkEvent = function(name) {
		if (this["ev_" + name]) {
			return true
		}
		return false
	};
	this.eventCatcher = function(obj) {
		var dhx_catch = new Array();
		var m_obj = obj;
		var func_server = function(catcher, rpc) {
			catcher = catcher.split(":");
			var postVar = "";
			var postVar2 = "";
			var target = catcher[1];
			if (catcher[1] == "rpc") {
				postVar = '<?xml version="1.0"?><methodCall><methodName>' + catcher[2] + "</methodName><params>";
				postVar2 = "</params></methodCall>";
				target = rpc
			}
			var z = function() {};
			return z
		};
		var z = function() {
			if (dhx_catch) {
				var res = true
			}
			for (var i = 0; i < dhx_catch.length; i++) {
				if (dhx_catch[i] != null) {
					var zr = dhx_catch[i].apply(m_obj, arguments);
					res = res && zr
				}
			}
			return res
		};
		z.addEvent = function(ev) {
			if (typeof(ev) != "function") {
				if (ev && ev.indexOf && ev.indexOf("server:") == 0) {
					ev = new func_server(ev, m_obj.rpcServer)
				} else {
					ev = eval(ev)
				}
			}
			if (ev) {
				return dhx_catch.push(ev) - 1
			}
			return false
		};
		z.removeEvent = function(id) {
			dhx_catch[id] = null
		};
		return z
	};
	this.detachEvent = function(id) {
		if (id != false) {
			var list = id.split(":");
			this[list[0]].removeEvent(list[1])
		}
	}
}; (function() {
	dhtmlx.extend_api("dhtmlXCombo", {
		_init: function(b) {
			if (b.image_path) {
				dhx_globalImgPath = b.image_path
			}
			return [b.parent, b.name, (b.width || "100%"), b.type, b.index]
		},
		filter: "filter_command",
		auto_height: "enableOptionAutoHeight",
		auto_position: "enableOptionAutoPositioning",
		auto_width: "enableOptionAutoWidth",
		xml: "loadXML",
		readonly: "readonly",
		items: "addOption"
	},
	{
		filter_command: function(b) {
			if (typeof b == "string") {
				this.enableFilteringMode(true, b)
			} else {
				this.enableFilteringMode(b)
			}
		}
	})
})();
dhtmlXCombo.prototype.enableOptionAutoPositioning = function(a) {
	if (!this.ListAutoPosit) {
		this.ListAutoPosit = 1
	}
	this.attachEvent("onOpen",
	function() {
		this._setOptionAutoPositioning(a)
	});
	this.attachEvent("onXLE",
	function() {
		this._setOptionAutoPositioning(a)
	})
};
dhtmlXCombo.prototype._setOptionAutoPositioning = function(a) {
	if (typeof a != "undefined" && !convertStringToBoolean(a)) {
		return this.ListPosition = "Bottom",
		this.ListAutoPosit = 0,
		!0
	}
	var b = this.getPosition(this.DOMelem),
	c = this._getClientHeight() - b[1] - this.DOMelem.offsetHeight,
	d = this.autoHeight ? this.DOMlist.scrollHeight: parseInt(this.DOMlist.offsetHeight);
	this.ListPosition = c < d && b[1] > d ? "Top": "Bottom";
	this._positList();
	_isIE && this._IEFix(!0)
};
dhtmlXCombo.prototype._getClientHeight = function() {
	return document.compatMode == "CSS1Compat" && !window.opera ? document.documentElement.clientHeight: document.body.clientHeight
};
dhtmlXCombo.prototype.setOptionWidth = function(a) {
	if (arguments.length > 0 && (this.DOMlist.style.width = a + "px", this.DOMlistF)) {
		this.DOMlistF.style.width = a + "px"
	}
};
dhtmlXCombo.prototype.setOptionHeight = function(a) {
	if (arguments.length > 0) {
		this.DOMlist.style.height = _isIE ? this.DOMlistF.style.height = a + "px": a + "px";
		if (this.DOMlistF) {
			this.DOMlistF.style.height = this.DOMlist.style.height
		}
		this._positList();
		_isIE && this._IEFix(!0)
	}
};
dhtmlXCombo.prototype.enableOptionAutoWidth = function(a) {
	if (!this._listWidthConf) {
		this._listWidthConf = this.DOMlist.offsetWidth
	}
	arguments.length == 0 && (a = 1);
	if (convertStringToBoolean(a)) {
		this.autoOptionWidth = 1,
		this.awOnOpen = this.attachEvent("onOpen",
		function() {
			this._setOptionAutoWidth()
		}),
		this.awOnXLE = this.attachEvent("onXLE",
		function() {
			this._setOptionAutoWidth()
		})
	} else {
		if (typeof this.awOnOpen != "undefined") {
			this.autoOptionWidth = 0,
			this.detachEvent(this.awOnOpen),
			this.detachEvent(this.awOnXLE),
			this.setOptionWidth(this._listWidthConf)
		}
	}
};
dhtmlXCombo.prototype._setOptionAutoWidth = function() {
	var a = !this.ahOnOpen && this.DOMlist.scrollHeight > this.DOMlist.offsetHeight;
	this.setOptionWidth(1);
	for (var b = this.DOMlist.offsetWidth,
	c = 0; c < this.optionsArr.length; c++) {
		var d = _isFF ? this.DOMlist.childNodes[c].scrollWidth - 2 : this.DOMlist.childNodes[c].scrollWidth;
		if (d > b) {
			b = this.DOMlist.childNodes[c].scrollWidth
		}
	}
	b += a ? 18 : 0;
	this.setOptionWidth(this.DOMelem.offsetWidth > b ? this.DOMelem.offsetWidth: b + 2)
};
dhtmlXCombo.prototype.enableOptionAutoHeight = function(b, c) {
	if (!this._listHeightConf) {
		this._listHeightConf = this.DOMlist.style.height == "" ? 100 : parseInt(this.DOMlist.style.height)
	}
	arguments.length == 0 && (b = 1);
	this.autoHeight = convertStringToBoolean(b);
	var d = this;
	if (this.autoHeight) {
		var e = function() {
			window.setTimeout(function() {
				d._setOptionAutoHeight(b, c)
			},
			1)
		};
		this.ahOnOpen = this.attachEvent("onOpen", e);
		if (!this.awOnOpen) {
			this.ahOnXLE = this.attachEvent("onXLE", e)
		}
		var a;
		this.ahOnKey = this.attachEvent("onKeyPressed",
		function() {
			this._filter && (a && window.clearTimeout(a), window.setTimeout(function() {
				d.DOMlist.style.display == "block" && d._setOptionAutoHeight(b, c)
			},
			50))
		})
	} else {
		typeof this.ahOnOpen != "undefined" && (this.detachEvent(this.ahOnOpen), this.ahOnXLE && this.detachEvent(this.ahOnXLE), this.ahOnKey && this.detachEvent(this.ahOnKey), this.setOptionHeight(this._listHeightConf))
	}
};
dhtmlXCombo.prototype._setOptionAutoHeight = function(c, a) {
	if (convertStringToBoolean(c)) {
		this.setOptionHeight(1);
		var b = 0;
		this.optionsArr.length > 0 ? (b = this.DOMlist.scrollHeight > this.DOMlist.offsetHeight ? this.DOMlist.scrollHeight + 2 : this.DOMlist.offsetHeight, arguments.length > 1 && a && (a = parseInt(a), b = b > a ? a: b), this.setOptionHeight(b)) : this.DOMlist.style.display = "none"
	}
};
if (!window.dhtmlx) {
	dhtmlx = {}
}
dhtmlx.Template = {
	_cache: {},
	empty: function() {
		return ""
	},
	setter: function(b) {
		return dhtmlx.Template.fromHTML(b)
	},
	obj_setter: function(f) {
		var d = dhtmlx.Template.setter(f);
		var e = this;
		return function() {
			return d.apply(e, arguments)
		}
	},
	fromHTML: function(b) {
		if (typeof b == "function") {
			return b
		}
		if (this._cache[b]) {
			return this._cache[b]
		}
		b = (b || "").toString();
		b = b.replace(/[\r\n]+/g, "\\n");
		b = b.replace(/\{obj\.([^}?]+)\?([^:]*):([^}]*)\}/g, '"+(obj.$1?"$2":"$3")+"');
		b = b.replace(/\{common\.([^}\(]*)\}/g, '"+common.$1+"');
		b = b.replace(/\{common\.([^\}\(]*)\(\)\}/g, '"+(common.$1?common.$1(obj):"")+"');
		b = b.replace(/\{obj\.([^}]*)\}/g, '"+obj.$1+"');
		b = b.replace(/#([a-z0-9_]+)#/gi, '"+obj.$1+"');
		b = b.replace(/\{obj\}/g, '"+obj+"');
		b = b.replace(/\{-obj/g, "{obj");
		b = b.replace(/\{-common/g, "{common");
		b = 'return "' + b + '";';
		return this._cache[b] = Function("obj", "common", b)
	}
};
dhtmlXCombo_htmlOption = function() {
	this.init()
};
dhtmlXCombo_htmlOption.prototype = new dhtmlXCombo_defaultOption;
dhtmlXCombo_htmlOption.prototype.setValue = function(b) {
	this.value = b.value || "";
	this.text = b.text || "";
	this.css = b.css || "";
	this.htmltemplate = b.htmltemplate || "";
	this.inputTextTemplate = b.inputTextTemplate || ""
};
dhtmlXCombo_htmlOption.prototype.render = function() {
	if (!this.content) {
		this.content = document.createElement("DIV");
		this.content._self = this;
		this.content.style.cssText = "width:100%; overflow:hidden;white-space:nowrap; " + this.css;
		var d = "";
		var c = this.text;
		if (this.htmltemplate) {
			c = dhtmlx.Template.obj_setter(this.htmltemplate).call(this.text, this.text)
		}
		d += '<div style="display:inline;vertical-align:middle;">' + c + "</div>";
		this.content.innerHTML = d;
		if (this.inputTextTemplate) {
			this._ctext = dhtmlx.Template.obj_setter(this.inputTextTemplate).call(this.text, this.text)
		} else {
			this._ctext = (typeof this.content.textContent != "undefined") ? this.content.textContent: this.content.innerText
		}
	}
	return this.content
};
dhtmlXCombo.prototype.setHTMLTemplate = function(b) {
	this.htmltemplate = b
};
dhtmlXCombo.prototype.setInputTextTemplate = function(b) {
	this.inputTextTemplate = b
};
dhtmlXCombo.prototype._addOption = function(b) {
	dOpt = new this._optionObject();
	this.optionsArr.push(dOpt);
	b.htmltemplate = this.htmltemplate;
	b.inputTextTemplate = this.inputTextTemplate;
	dOpt.setValue.apply(dOpt, [b]);
	this.redrawOptions()
};
dhtmlXCombo.prototype.setFilterNames = function(b) {
	if (b && b.length) {
		this.filterNames = b
	} else {
		alert(" dhtmlXCombo.dhtmlXCombo filtersName must be an array")
	}
};
dhtmlXCombo.prototype.getFilterNames = function() {
	return this.filterNames || []
};
dhtmlXCombo_optionTypes.html = dhtmlXCombo_htmlOption;
dhtmlXCombo.prototype.filterSelf = function(i) {
	var j = this.getComboText();
	if (this._xml) {
		this._lkmode = i;
		this._fetchOptions(0, j)
	}
	var l = new RegExp("([" + this.filterEntities.join("\\") + "])", "g");
	j = j.replace(l, "\\$1");
	var p = (this._anyPosition ? "": "^") + j;
	var m = new RegExp(p, "i");
	this.filterAny = false;
	for (var n = 0; n < this.optionsArr.length; n++) {
		var k = null;
		if (typeof this.optionsArr[0].text == "object" && this.filterNames) {
			k = false;
			for (var o = 0; o < this.filterNames.length; o++) {
				k = m.test(this.optionsArr[n].text[this.filterNames[o]]);
				if (k) {
					break
				}
			}
		} else {
			k = m.test(this.optionsArr[n].content ? this.optionsArr[n].data()[1] : this.optionsArr[n].text)
		}
		this.filterAny |= k;
		this.optionsArr[n].hide(!k)
	}
	if (!this.filterAny) {
		this.closeAll();
		this._activeMode = true
	} else {
		if (this.DOMlist.style.display != "block") {
			this.openSelect()
		}
		if (_isIE) {
			this._IEFix(true)
		}
	}
	this.unSelectOption()
};
if (!window.dhtmlx) {
	window.dhtmlx = {}
} (function() {
	var z = null;
	function t(b, a) {
		var c = b.callback;
		v(false);
		if (b.box.parentNode) {
			b.box.parentNode.removeChild(b.box)
		}
		z = b.box = null;
		if (c) {
			c(a)
		}
	}
	function x(a) {
		if (z) {
			a = a || event;
			var b = a.which || event.keyCode;
			if (dhtmlx.message.keyboard) {
				if (b == 13 || b == 32) {
					t(z, true)
				}
				if (b == 27) {
					t(z, false)
				}
			}
			if (a.preventDefault) {
				a.preventDefault()
			}
			return ! (a.cancelBubble = true)
		}
	}
	if (document.attachEvent) {
		document.attachEvent("onkeydown", x)
	} else {
		document.addEventListener("keydown", x, true)
	}
	function v(a) {
		if (!v.cover) {
			v.cover = document.createElement("DIV");
			v.cover.onkeydown = x;
			v.cover.className = "dhx_modal_cover";
			document.body.appendChild(v.cover)
		}
		var b = document.body.scrollHeight;
		v.cover.style.display = a ? "inline-block": "none"
	}
	function F(a, b) {
		return "<div class='dhtmlx_popup_button' result='" + b + "' ><div>" + a + "</div></div>"
	}
	function u(a) {
		if (!s.area) {
			s.area = document.createElement("DIV");
			s.area.className = "dhtmlx_message_area";
			s.area.style[s.position] = "5px";
			document.body.appendChild(s.area)
		}
		s.hide(a.id);
		var b = document.createElement("DIV");
		b.innerHTML = "<div>" + a.text + "</div>";
		b.className = "dhtmlx-info dhtmlx-" + a.type;
		b.onclick = function() {
			s.hide(a.id);
			a = null
		};
		if (s.position == "bottom" && s.area.firstChild) {
			s.area.insertBefore(b, s.area.firstChild)
		} else {
			s.area.appendChild(b)
		}
		if (a.expire > 0) {
			s.timers[a.id] = window.setTimeout(function() {
				s.hide(a.id)
			},
			a.expire)
		}
		s.pull[a.id] = b;
		b = null;
		return a.id
	}
	function D(d, b, f) {
		var g = document.createElement("DIV");
		g.className = " dhtmlx_modal_box dhtmlx-" + d.type;
		g.setAttribute("dhxbox", 1);
		var e = "";
		if (d.width) {
			g.style.width = d.width
		}
		if (d.height) {
			g.style.height = d.height
		}
		if (d.title) {
			e += '<div class="dhtmlx_popup_title">' + d.title + "</div>"
		}
		e += '<div class="dhtmlx_popup_text"><span>' + (d.content ? "": d.text) + '</span></div><div  class="dhtmlx_popup_controls">';
		if (b) {
			e += F(d.ok || "OK", true)
		}
		if (f) {
			e += F(d.cancel || "Cancel", false)
		}
		if (d.buttons) {
			for (var c = 0; c < d.buttons.length; c++) {
				e += F(d.buttons[c], c)
			}
		}
		e += "</div>";
		g.innerHTML = e;
		if (d.content) {
			var a = d.content;
			if (typeof a == "string") {
				a = document.getElementById(a)
			}
			if (a.style.display == "none") {
				a.style.display = ""
			}
			g.childNodes[d.title ? 1 : 0].appendChild(a)
		}
		g.onclick = function(h) {
			h = h || event;
			var i = h.target || h.srcElement;
			if (!i.className) {
				i = i.parentNode
			}
			if (i.className == "dhtmlx_popup_button") {
				var j = i.getAttribute("result");
				j = (j == "true") || (j == "false" ? false: j);
				t(d, j)
			}
		};
		d.box = g;
		if (b || f) {
			z = d
		}
		return g
	}
	function G(c, b, e) {
		var d = $("#defaultwarningAlert_id")[0];
		var a = null;
		if (d) {
			a = d;
			$("#content_defaultwarningAlert_title").html(c.title || "");
			$("#content_defaultwarningAlert_hearder").html(c.text || "");
			$("#content_defaultwarningAlert_body").html(c.body || "");
			$("#qd_closeDefaultWarningWindowDialog_id").html(c.ok || "确定")
		} else {
			a = $('<div id="defaultwarningAlert_id"><div class="mark"></div><div class="up-box w600" id="content_defaultwarningAlert_id" style="border:#909090 0 solid;color:#333;box-shadow:2px 2px 10px #909090;"><div class="up-box-hd" ><span id="content_defaultwarningAlert_title">' + (c.title || "") + '</span><a href="javascript:"id="gb_closeDefaultWarningWindowDialog_id">关闭</a></div><div class="up-box-bd"><div class="up-con clearfix"><span class="icon i-warn"></span> <div class="r-txt"><div class="tit" id="content_defaultwarningAlert_hearder" >' + (c.text || "") + '</div><P  id="content_defaultwarningAlert_body">' + (c.body || "") + '</P></div></div> <div class="lay-btn"><a href="javascript:" id="qd_closeDefaultWarningWindowDialog_id" class="btn92s">' + (c.ok || "确定") + "</a></div></div></div></div>")[0]
		}
		a.setAttribute("dhxbox", 1);
		$(a).css("z-index", "20000");
		if (navigator.appVersion.indexOf("MSIE 6") > -1) {} else {
			$(a).css("position", "fixed")
		}
		c.box = a;
		if (!c.hidden) {
			v(true)
		}
		document.body.appendChild(a);
		$(a).css({
			left: ($(window).width() - $(a).outerWidth()) / 2 - 300,
			top: ($(window).height() - $(a).outerHeight()) / 2 - 110
		});
		if (navigator.appVersion.indexOf("MSIE 6") > -1) {
			$("#content_defaultwarningAlert_id").css({
				"margin-left": "-300px",
				left: "50%",
				"margin-top": "-110px",
				top: ($(window).height() - $(a).outerHeight()) / 2
			})
		}
		a.onkeydown = x;
		a.focus();
		if (c.hidden) {
			dhtmlx.modalbox.hide(a)
		}
		$("#qd_closeDefaultWarningWindowDialog_id").on("click",
		function(f) {
			t(c);
			if (f && f.preventDefault) {
				f.preventDefault()
			} else {
				window.event.returnValue = false
			}
		});
		$("#gb_closeDefaultWarningWindowDialog_id").on("click",
		function(f) {
			t(c);
			if (f && f.preventDefault) {
				f.preventDefault()
			} else {
				window.event.returnValue = false
			}
		});
		if (b || e) {
			z = c
		}
		return a
	}
	function A() {
		if ("pageYOffset" in window) {
			return window.pageYOffset
		} else {
			if (document.compatMode == "BackCompat") {
				return document.body.scrollTop
			} else {
				return document.documentElement.scrollTop
			}
		}
	}
	function B(a) {
		return G(a, true, false)
	}
	function w(a) {
		return G(a, true, true)
	}
	function H(a) {
		return E(a)
	}
	function E(b) {
		var a = $(b.targSrc)[0];
		a.setAttribute("dhxbox", 1);
		$(a).css("z-index", "20000");
		b.box = a;
		if (!b.hidden) {
			v(true)
		}
		document.body.appendChild(a);
		if (navigator.appVersion.indexOf("MSIE 6") > -1) {
			$(a).css("position", "absolute");
			$(a).css({
				"margin-left": "-300px",
				left: "50%",
				"margin-top": "-110px",
				top: ($(window).height() - $(a).outerHeight()) / 2
			})
		} else {
			$(a).css("position", "fixed");
			$(a).css({
				left: ($(window).width() - $(a).outerWidth()) / 2,
				top: ($(window).height() - $(a).outerHeight()) / 2
			})
		}
		a.onkeydown = x;
		a.focus();
		if (b.hidden) {
			dhtmlx.modalbox.hide(a)
		}
		return a
	}
	function C(c, a, b) {
		if (typeof c != "object") {
			if (typeof a == "function") {
				b = a;
				a = ""
			}
			c = {
				text: c,
				type: a,
				callback: b
			}
		}
		return c
	}
	function r(d, a, b, c) {
		if (typeof d != "object") {
			d = {
				text: d,
				type: a,
				expire: b,
				id: c
			}
		}
		d.id = d.id || s.uid();
		d.expire = d.expire || s.expire;
		return d
	}
	dhtmlx.alert = function() {
		var a = C.apply(this, arguments);
		a.type = a.type || "confirm";
		return B(a)
	};
	dhtmlx.confirm = function() {
		var a = C.apply(this, arguments);
		a.type = a.type || "alert";
		return w(a)
	};
	dhtmlx.modalbox = function() {
		var a = C.apply(this, arguments);
		a.type = a.type || "alert";
		return H(a)
	};
	dhtmlx.createWin = function() {
		var a = C.apply(this, arguments);
		a.type = a.type || "win";
		return y(a)
	};
	dhtmlx.modality = function(a) {
		v(a)
	};
	function y(b) {
		var a = $("#" + b.winId)[0];
		a.setAttribute("dhxbox", 1);
		$(a).css("z-index", "20000");
		if (navigator.appVersion.indexOf("MSIE 6") > -1) {} else {
			$(a).css("position", "fixed")
		}
		b.box = a;
		if (!b.hidden) {
			v(true)
		}
		document.body.appendChild(a);
		var d = $(window).width() / 2 - 300;
		var e = 0;
		if (A() > 0) {
			e = ($(window).height() / 2) - A() / 2
		} else {
			e = $(window).height() / 2 - 150
		}
		$(a).css("left", d + "px");
		$(a).css("top", e + "px");
		a.onkeydown = x;
		$(a).show();
		if (b.hidden) {
			dhtmlx.modalbox.hide(a)
		}
		if (b.closeWinId) {
			var f = b.closeWinId.length;
			for (var c = 0; c < f; c++) {
				$("#" + b.closeWinId[c]).unbind("click");
				$("#" + b.closeWinId[c]).on("click",
				function(g) {
					var h = b.callback;
					v(false);
					$(b.box).hide();
					z = b.box = null;
					if (h) {
						h()
					}
					if (g && g.preventDefault) {
						g.preventDefault()
					} else {
						window.event.returnValue = false
					}
				})
			}
		}
		if (b.okId) {
			$("#" + b.okId).unbind("click");
			$("#" + b.okId).on("click",
			function(g) {
				if (b.checkConfirm) {
					if (b.checkConfirm()) {
						var h = b.okCallBack;
						v(false);
						$(b.box).hide();
						z = b.box = null;
						if (h) {
							h()
						}
					}
				} else {
					var h = b.okCallBack;
					v(false);
					$(b.box).hide();
					z = b.box = null;
					if (h) {
						h()
					}
				}
				if (g && g.preventDefault) {
					g.preventDefault()
				} else {
					window.event.returnValue = false
				}
			})
		}
		return a
	}
	dhtmlx.modalbox.hide = function(a) {
		while (a && a.getAttribute && !a.getAttribute("dhxbox")) {
			a = a.parentNode
		}
		if (a) {
			a.parentNode.removeChild(a);
			v(false)
		}
	};
	var s = dhtmlx.message = function(e, a, b, d) {
		e = r.apply(this, arguments);
		e.type = e.type || "info";
		var c = e.type.split("-")[0];
		switch (c) {
		case "alert":
			return B(e);
		case "confirm":
			return w(e);
		case "modalbox":
			return H(e);
		case "win":
			return y(e);
		default:
			return u(e);
			break
		}
	};
	s.seed = (new Date()).valueOf();
	s.uid = function() {
		return s.seed++
	};
	s.expire = 4000;
	s.keyboard = true;
	s.position = "top";
	s.pull = {};
	s.timers = {};
	s.hideAll = function() {
		for (var a in s.pull) {
			s.hide(a)
		}
	};
	s.hide = function(a) {
		var b = s.pull[a];
		if (b && b.parentNode) {
			window.setTimeout(function() {
				b.parentNode.removeChild(b);
				b = null
			},
			2000);
			b.className += " hidden";
			if (s.timers[a]) {
				window.clearTimeout(s.timers[a])
			}
			delete s.pull[a]
		}
	}
})();
/*!
 * 对jquery的ajax的封装，支持请求本地数据和请求远程http服务 该js必须放在jquery.js后面 同时还负责初始化各种js变量
 * ots_global.calendarLang 初始化calendar组件的国际化信息。
 */
var alertWarningMsg;
var alertWarningMsgByHeader;
var alertWarningMsgByTit_header; (function() {
	var n = null;
	$(document).ready(function() {
		n = q()
	});
	var r = null;
	if (typeof globalRepeatSubmitToken != "undefined") {
		r = globalRepeatSubmitToken
	}
	var u = null;
	var s = "_json_att";
	var o = "_es_hiddenform";
	var t = "<form  method='post' id='" + o + "'><input type='hidden' name='" + s + "'></input></form>";
	var w = $.ajax;
	ots_global = {};
	$.ajax = function(d, e) {
		if (typeof d == "object") {
			e = d;
			d = undefined
		}
		e = e || {};
		var f = e.isAlert || true;
		if (e.success) {
			var c = e.success;
			e.success = function(A, k, B) {
				if (A && A.c_url) {
					window[A.c_name] = A.c_url
				}
				if (A && A.validateMessagesShowId) {
					var g = A.messages;
					if (g && g.length > 0) {
						var h = "";
						for (var i = 0; i < g.length; i++) {
							h += g[i] + "\n"
						}
						dhtmlx.alert({
							title: g["message.info"],
							ok: g["button.ok"],
							text: h,
							callback: function() {
								if (A.url) {
									window.location = ctx + A.url
								}
							}
						})
					}
					var l = A.validateMessages;
					var h = "";
					for (var j in l) {
						h += j + " :" + l[j] + "</br>"
					}
					if (A.attributes) {
						u = A.attributes
					}
					if (A.repeatSubmitToken && A.repeatSubmitToken != "") {
						r = A.repeatSubmitToken
					}
					if (h) {
						if (f) {
							dhtmlx.alert({
								title: g["message.info"],
								ok: g["button.ok"],
								text: h,
								callback: function() {
									c.call(this, A, k, B)
								}
							})
						} else {
							$("#" + A.validateMessagesShowId).html(h).show();
							c.call(this, A, k, B)
						}
					} else {
						$("#" + A.validateMessagesShowId).html("").hide();
						c.call(this, A, k, B)
					}
				} else {
					c.call(this, A, k, B)
				}
			}
		}
		var a = e.data || {};
		var b = true;
		if (e.isTakeParam == false) {
			b = false
		}
		if (b) {
			if (u) {
				a[s] = u
			} else {
				a[s] = $("input[name=_json_att]").val()
			}
		}
		if ("undefined" != typeof(r) && r != null) {
			a.REPEAT_SUBMIT_TOKEN = r
		}
		e.data = a;
		w.call(this, d, e)
	};
	if (typeof otsRedirect == "undefined") {
		otsRedirect = function(a, d, c, b) {
			c = c || {};
			if (a && a == "post") {
				if ($("#" + o).length == 0) {
					$(document.body).append(t)
				}
				if (u) {
					$("#" + o + " input[name='" + s + "']").val(u)
				}
				$("#" + o + " input[name='" + s + "'] ~ input").remove();
				if (r != null) {
					$("#" + o).append("<input type='hidden' name='REPEAT_SUBMIT_TOKEN'></input>");
					$("#" + o + " input[name='REPEAT_SUBMIT_TOKEN']").val(r)
				}
				if (c) {
					for (var e in c) {
						var f = "<input type='hidden' name='" + e + "'></input>";
						$("#" + o).append(f);
						$("#" + o + " input[name='" + e + "']").val(c[e])
					}
				}
				if (b != null) {
					$("#" + o).attr("target", b)
				} else {
					$("#" + o).removeAttr("target")
				}
				$("#" + o).attr("action", d);
				$("#" + o).submit()
			} else {
				if (u) {
					if (d.indexOf("?") > 0) {
						d += "&" + s + "=" + u
					} else {
						d += "?" + s + "=" + u
					}
				}
				if (c) {
					for (var e in c) {
						if (d.indexOf("?") > 0) {
							d += "&" + e + "=" + c[e]
						} else {
							d += "?" + e + "=" + c[e]
						}
					}
				}
				switch (b) {
				case "_blank":
					window.open(d);
					break;
				default:
					window.location.href = d
				}
			}
		}
	} (function() {
		var a = {
			dateformat: "%Y-%m-%d",
			monthesFNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
			monthesSNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
			daysFNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
			daysSNames: ["日", "一", "二", "三", "四", "五", "六"],
			weekstart: 1
		};
		ots_global.calendarLang = ots_global.calendarLang || {};
		ots_global.calendarLang.zh_CN = a
	})();
	function q() {
		var a = new dhtmlXWindows();
		a.enableAutoViewport(true);
		a.setSkin("dhx_terrace");
		a.setImagePath(ctx + "resources/js/rich/windows/imgs/");
		return a
	}
	alertWarningMsgByHeader = function(a) {
		alertWarningMsg(messages["message.info"], a, "", messages["button.ok"])
	};
	alertWarningMsgByTit_header = function(b, a) {
		alertWarningMsg(b, a, "", messages["button.ok"])
	};
	alertWarningMsg = function(d, a, f) {
		v(d, a, f, messages["button.ok"]);
		$("#qd_closeDefaultWarningWindowDialog_id").click(function() {
			m()
		});
		$("#gb_closeDefaultWarningWindowDialog_id").click(function() {
			m()
		});
		var b = "defaultwarningAlert_id";
		var e = p(b);
		var g = $(window).width() / 2 - 300;
		var c = x() + ($(window).height() / 2 - 200);
		e.setDimension($("#content_" + b).width(), $("#content_" + b).height() + 10);
		$(".dhtmlx_window_active").height($("#content_" + b).height());
		$(".dhtmlx_window_active").css({
			left: g + "px",
			top: c + "px"
		})
	};
	function x() {
		if ("pageYOffset" in window) {
			return window.pageYOffset
		} else {
			if (document.compatMode == "BackCompat") {
				return document.body.scrollTop
			} else {
				return document.documentElement.scrollTop
			}
		}
	}
	function v(c, a, e, b) {
		var d = '<div id="defaultwarningAlert_id" style="display:none;" ><div class="mark"></div><div class="up-box w600" id="content_defaultwarningAlert_id"><div class="up-box-hd" ><span id="content_defaultwarningAlert_title">' + c + '</span><a href="#nogo"id="gb_closeDefaultWarningWindowDialog_id">关闭</a></div><div class="up-box-bd"><div class="up-con clearfix"><span class="icon i-warn"></span> <div class="r-txt"><div class="tit" id="content_defaultwarningAlert_hearder" >' + a + '</div><P  id="content_defaultwarningAlert_body">' + e + '</P></div></div> <div class="lay-btn"><a href="#nogo" id="qd_closeDefaultWarningWindowDialog_id" class="btn92s">' + b + "</a></div></div></div></div>";
		$("body").append(d)
	}
	function p(a) {
		var b = n.createWindow(a + "_", 50, 10, 660, 100);
		b.attachObject(a);
		b.clearIcon();
		b.denyResize();
		b.setModal(true);
		b.center();
		b.button("park").hide();
		b.button("minmax1").hide();
		b.hideHeader();
		return b
	}
	function m() {
		var a = "defaultwarningAlert_id";
		if (n.isWindow(a + "_")) {
			n.window(a + "_").close()
		}
	}
})();
var refreshImg = null;
var _top_;
var isDebug = false;
var two_isOpenClick = ["93", "95", "97", "99"];
var other_isOpenClick = ["93", "98", "99", "91", "95", "97"];
isCanGP = function(f, g) {
	if ("1" == f) {
		var h = two_isOpenClick.length;
		for (var e = 0; e < h; e++) {
			if (g == two_isOpenClick[e]) {
				return true
			}
		}
		return false
	} else {
		var h = other_isOpenClick.length;
		for (var e = 0; e < h; e++) {
			if (g == other_isOpenClick[e]) {
				return true
			}
		}
		return false
	}
};
function isLogin() {
	if ("undefined" != typeof(sessionInit) && (sessionInit) && (null != sessionInit)) {
		$("#login_user").attr("href", ctx + "index/initMy12306");
		$("#login_user").prev("span").html("您好，");
		$("#login_user").html(sessionInit);
		$("#regist_out").attr("href", ctx + "login/loginOut");
		$("#regist_out").html("退出")
	} else {
		$("#login_user").attr("href", ctx + "login/init");
		$("#login_user").prev("span").html("您好，请&nbsp");
		$("#login_user").html("登录");
		$("#regist_out").attr("href", ctx + "regist/init");
		$("#regist_out").html("注册")
	}
}
function loginAsyn(b) {
	if (b != null) {
		$("#login_user").attr("href", ctx + "index/initMy12306");
		$("#login_user").prev("span").html("意见反馈:<a class='cursor colorA' href='mailto:12306yjfk@rails.com.cn'>12306yjfk@rails.com.cn</a> 您好，");
		$("#login_user").html(b);
		$("#regist_out").attr("href", ctx + "login/loginOut");
		$("#regist_out").html("退出")
	} else {
		$("#login_user").attr("href", ctx + "login/init");
		$("#login_user").prev("span").html("意见反馈:<a class='cursor colorA' href='mailto:12306yjfk@rails.com.cn'>12306yjfk@rails.com.cn</a> 您好，请&nbsp");
		$("#login_user").html("登录");
		$("#regist_out").attr("href", ctx + "regist/init");
		$("#regist_out").html("注册")
	}
}
function _initGuideShow(c) {
	var d = $(".nav-list a");
	d.removeClass("on");
	$("#js-xd").find(".nav-list").show();
	$("#js-xd").unbind("mouseout");
	$("#js-xd").unbind("mouseover");
	$.each(d,
	function(a) {
		if (a == c) {
			$(d[a]).addClass("on");
			return
		}
	})
}
function checkHover(c, d) {
	if (getEvent(c).type == "mouseover") {
		return ! contains(d, getEvent(c).relatedTarget || getEvent(c).fromElement) && !((getEvent(c).relatedTarget || getEvent(c).fromElement) === d)
	} else {
		return ! contains(d, getEvent(c).relatedTarget || getEvent(c).toElement) && !((getEvent(c).relatedTarget || getEvent(c).toElement) === d)
	}
}
function getEvent(b) {
	return b || window.event
}
function contains(d, c) {
	if (d.contains) {
		return d != c && d.contains(c)
	} else {
		return !! (d.compareDocumentPosition(c) & 16)
	}
}
function initPageTitle(f) {
	$(".nav ul li").not("#js-xd li").eq(f).children("a").addClass("current");
	var e = $(".nav ul li a").not(".nav-list a");
	for (var d = 0; d < e.length; d++) {
		if (f != d) {
			e.eq(d).on("mouseenter",
			function() {
				$(this).addClass("current")
			}).on("mouseleave",
			function() {
				$(this).removeClass("current")
			})
		}
	}
}
function initNameNotice() {
	$("#name_rule").mouseenter(function(e) {
		var d = e.pageY + 10;
		var f = e.pageX;
		$(".name-tips").eq(0).css({
			top: d,
			left: f
		});
		$(".name-tips").eq(0).show()
	});
	$("#name_rule").mouseleave(function() {
		$(".name-tips").hide()
	})
}
clickCheckBoxName = function() {
	$("input[class='check']").each(function() {
		var e = $(this);
		var d = e.next("label").attr("for");
		var f = e.attr("id");
		if (null == f || "" == f || "undefined" == f) {
			var f = "checkbox_" + generateMixed();
			e.attr("id", f)
		}
		e.next("label").attr("for", f).css("cursor", "pointer")
	})
};
function generateMixed() {
	var g = "";
	var f = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	for (var h = 0; h < 10; h++) {
		var e = Math.ceil(Math.random() * 61);
		g += f[e]
	}
	return g
}
function showHelpName() {
	$.ajax({
		url: "../login/existUser",
		type: "POST",
		success: function(b) {
			if (b.success) {
				sessionInit = b.name;
				if ("undefined" != typeof(sessionInit) && (sessionInit) && (null != sessionInit)) {
					$("#login_user").attr("href", "../index/initMy12306");
					$("#login_user").prev("span").html("意见反馈:<a class='cursor colorA' href='mailto:12306yjfk@rails.com.cn'>12306yjfk@rails.com.cn</a> 您好，");
					$("#login_user").html(sessionInit);
					$("#regist_out").attr("href", "../login/loginOut");
					$("#regist_out").html("退出")
				} else {
					$("#login_user").attr("href", "../login/init");
					$("#login_user").prev("span").html("意见反馈:<a class='cursor colorA' href='mailto:12306yjfk@rails.com.cn'>12306yjfk@rails.com.cn</a> 您好，请&nbsp");
					$("#login_user").html("登录");
					$("#regist_out").attr("href", "../regist/init");
					$("#regist_out").html("注册")
				}
			}
		}
	})
}
function controContentHeight() {
	var j = 0;
	var h = 0;
	if (window.attachEvent) {
		var i = navigator.appVersion;
		if (i.indexOf("MSIE 7.0") >= 0) {
			j = 53
		} else {
			j = 80;
			if (!document.getElementById("forget_password_id")) {
				h = 12
			}
		}
	} else {
		j = 78;
		if (!document.getElementById("forget_password_id")) {
			h = 15
		}
	}
	var g = 0;
	if (!$(".nav-list").is(":hidden")) {
		g = $(".nav-list").height()
	}
	var f = $(window).height() - $(".header").height() - $(".footer").height() - j + h - g;
	if (f > 400) {
		if ($("#scroll").css("display") == "block") {
			$(".content").css("min-height", f - 30)
		} else {
			$(".content").css("min-height", f)
		}
	}
}
jQuery.extend({
	showNotice: function() {
		if ("undefined" == typeof(isShowNotice) || "N" != isShowNotice) {
			$("#scroll").css("display", "block");
			var e = "<li><a >“网上购票”可购买预售期内不晚于开车前2小时的列车车票；“网上订票”可预订4至20日列车车票。</a></li>";
			if (noticeContent && "undefined" != typeof(noticeContent)) {
				var f = noticeContent.length;
				if (f > 0) {
					for (var d = 0; d < f; d++) {
						e += "<li><a>" + noticeContent[d] + "</a></li>"
					}
				}
			}
			$("#scroll .notice_in ul").html(e)
		} else {
			if ("N" == isShowNotice) {
				$("#scroll").hide();
				$("div.ban-area").hide()
			}
		}
	}
});
$(function() {
	var e = 0;
	$(document).ready(function() {
		if ("undefined" == typeof(sessionInit)) {
			showHelpName()
		} else {}
		controContentHeight();
		$(".menu-list").on("mouseover",
		function(a) {
			if (checkHover(a, this)) {
				e = 1
			}
		}).on("mouseleave",
		function() {
			e = 0;
			$(".menu-list").hide()
		});
		$(".nav>ul>li>a").click(function() {
			$(".nav>ul>li").removeClass();
			$(this).parent().addClass("current")
		});
		$(".notice_in ul a").click(function() {
			otsRedirect("post", ctx + "index/showAnnouncement")
		});
		if ($(".phone-link").html() == undefined) {
			$(".login-info").prepend("<div class='phone-link'><a href='../appDownload/init'>手机版</a></div>")
		}
		g()
	});
	function g() {
		document.body.appendChild($('<a href="#" id="_return_top" class="return-top" title="返回顶部" style="display: block;"></a>')[0]);
		var a = !window.XMLHttpRequest;
		$("#_return_top").css({
			position: a ? "absolute": "fixed",
			bottom: "30px",
			right: "30px"
		}).goToTop(5);
		$(window).on("scroll resize",
		function() {
			$("#_return_top").goToTop(5)
		})
	}
	$("#js-my").on("mouseover",
	function() {
		if (h) {
			clearTimeout(h)
		}
		$(".menu-list").show()
	});
	var h = null;
	$("#js-my").on("mouseout",
	function() {
		h = setTimeout(function() {
			if (e != 1) {
				e = 0;
				$(".menu-list").hide()
			}
		},
		120)
	});
	$("#js-xd").on("mouseover",
	function() {
		if (f) {
			clearTimeout(f)
		}
		$("#js-xd").addClass("nav-guide");
		$(this).find(".nav-list").show()
	});
	var f = null;
	$("#js-xd").on("mouseout",
	function(b) {
		var a = $(this);
		f = setTimeout(function() {
			a.find(".nav-list").hide()
		},
		120)
	});
	$(".pos-rel input").focus(function() {
		$(this).next().show();
		$(this).css("border", "1px solid #2D8DCF")
	});
	$(".pos-rel input").blur(function() {
		$(this).next().hide();
		$(this).css("border", "1px solid #CFCDC7")
	});
	$("#scroll>a:last").click(function() {
		$.ajax({
			url: ctx + "Notice/showNotice",
			type: "POST",
			success: function(a) {
				if (a.status) {
					$("#scroll").hide();
					$("div.ban-area").hide()
				}
			}
		})
	});
	if (!window.debug) {
		window.debug = function(b) {
			try {
				if (!window.console) {
					window.console = {};
					window.console.log = function() {
						return
					}
				}
				if (isDebug) {
					window.console.log(b + " ")
				}
			} catch(a) {}
		}
	}
}); (function(b) {
	b.fn.goToTop = function(g) {
		var f = b(window);
		var h = b(this);
		var a = (f.scrollTop() > g) ? true: false;
		if (a) {
			h.stop().show()
		} else {
			h.stop().hide()
		}
		return this
	};
	b.fn.headerFloat = function() {
		var a = function(f) {
			var e = false;
			b(window).on("scroll resize",
			function() {
				var c = b(this).scrollTop();
				if (!e) {
					e = f.position().left - 1
				}
				_top_ = f.position().top;
				if (c > _top_ + 30) {
					if (! (navigator.appVersion.indexOf("MSIE 6") > -1)) {
						b("#floatTable")[0].style.position = "fixed";
						b("#floatTable")[0].style.top = 0;
						b("#floatTable").css("z-index", "1900");
						b("#floatTable").css("left", e)
					} else {
						b("#floatTable").css({
							position: "absolute",
							top: c,
							left: e
						})
					}
					b("#floatTable").show()
				} else {
					b("#floatTable").css({
						top: _top_
					});
					b("#floatTable").hide()
				}
			})
		};
		return b(this).each(function() {
			a(b(this))
		})
	}
})(jQuery);