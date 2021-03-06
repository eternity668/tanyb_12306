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
(function (dt, dX) {
    var dB,
    b7,
    cF = typeof dX,
    eA = dt.document,
    cu = dt.location,
    dD = dt.jQuery,
    cI = dt.$,
    cb = {
    },
    ep = [
    ],
    ej = '1.9.1',
    cx = ep.concat,
    et = ep.push,
    es = ep.slice,
    ct = ep.indexOf,
    e = cb.toString,
    cB = cb.hasOwnProperty,
    cm = ej.trim,
    dI = function (b, a) {
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
    dJ = function (b, a) {
        return a.toUpperCase()
    },
    dk = function (a) {
        if (eA.addEventListener || a.type === 'load' || eA.readyState === 'complete') {
            c4();
            dI.ready()
        }
    },
    c4 = function () {
        if (eA.addEventListener) {
            eA.removeEventListener('DOMContentLoaded', dk, false);
            dt.removeEventListener('load', dk, false)
        } else {
            eA.detachEvent('onreadystatechange', dk);
            dt.detachEvent('onload', dk)
        }
    };
    dI.fn = dI.prototype = {
        jquery: ej,
        constructor: dI,
        init: function (d, a, b) {
            var c,
            f;
            if (!d) {
                return this
            }
            if (typeof d === 'string') {
                if (d.charAt(0) === '<' && d.charAt(d.length - 1) === '>' && d.length >= 3) {
                    c = [
                        null,
                        d,
                        null
                    ]
                } else {
                    c = ec.exec(d)
                }
                if (c && (c[1] || !a)) {
                    if (c[1]) {
                        a = a instanceof dI ? a[0] : a;
                        dI.merge(this, dI.parseHTML(c[1], a && a.nodeType ? a.ownerDocument || a : eA, true));
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
                        return (a || b) .find(d)
                    } else {
                        return this.constructor(a) .find(d)
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
        selector: '',
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return es.call(this)
        },
        get: function (a) {
            return a == null ? this.toArray()  : (a < 0 ? this[this.length + a] : this[a])
        },
        pushStack: function (b) {
            var a = dI.merge(this.constructor(), b);
            a.prevObject = this;
            a.context = this.context;
            return a
        },
        each: function (a, b) {
            return dI.each(this, a, b)
        },
        ready: function (a) {
            dI.ready.promise() .done(a);
            return this
        },
        slice: function () {
            return this.pushStack(es.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq( - 1)
        },
        eq: function (b) {
            var a = this.length,
            c = + b + (b < 0 ? a : 0);
            return this.pushStack(c >= 0 && c < a ? [
                this[c]
            ] : [
            ])
        },
        map: function (a) {
            return this.pushStack(dI.map(this, function (c, b) {
                return a.call(c, b, c)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: et,
        sort: [
        ].sort,
        splice: [
        ].splice
    };
    dI.fn.init.prototype = dI.fn;
    dI.extend = dI.fn.extend = function () {
        var j,
        d,
        i,
        k,
        a,
        c,
        f = arguments[0] || {
        },
        g = 1,
        h = arguments.length,
        b = false;
        if (typeof f === 'boolean') {
            b = f;
            f = arguments[1] || {
            };
            g = 2
        }
        if (typeof f !== 'object' && !dI.isFunction(f)) {
            f = {
            }
        }
        if (h === g) {
            f = this;
            --g
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
                            c = j && dI.isArray(j) ? j : [
                            ]
                        } else {
                            c = j && dI.isPlainObject(j) ? j : {
                            }
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
        noConflict: function (a) {
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
        holdReady: function (a) {
            if (a) {
                dI.readyWait++
            } else {
                dI.ready(true)
            }
        },
        ready: function (a) {
            if (a === true ? --dI.readyWait : dI.isReady) {
                return
            }
            if (!eA.body) {
                return setTimeout(dI.ready)
            }
            dI.isReady = true;
            if (a !== true && --dI.readyWait > 0) {
                return
            }
            dB.resolveWith(eA, [
                dI
            ]);
            if (dI.fn.trigger) {
                dI(eA) .trigger('ready') .off('ready')
            }
        },
        isFunction: function (a) {
            return dI.type(a) === 'function'
        },
        isArray: Array.isArray || function (a) {
            return dI.type(a) === 'array'
        },
        isWindow: function (a) {
            return a != null && a == a.window
        },
        isNumeric: function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function (a) {
            if (a == null) {
                return String(a)
            }
            return typeof a === 'object' || typeof a === 'function' ? cb[e.call(a)] || 'object' : typeof a
        },
        isPlainObject: function (a) {
            if (!a || dI.type(a) !== 'object' || a.nodeType || dI.isWindow(a)) {
                return false
            }
            try {
                if (a.constructor && !cB.call(a, 'constructor') && !cB.call(a.constructor.prototype, 'isPrototypeOf')) {
                    return false
                }
            } catch (b) {
                return false
            }
            var c;
            for (c in a) {
            }
            return c === dX || cB.call(a, c)
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) {
                return false
            }
            return true
        },
        error: function (a) {
            throw new Error(a)
        },
        parseHTML: function (f, b, a) {
            if (!f || typeof f !== 'string') {
                return null
            }
            if (typeof b === 'boolean') {
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
                dI(d) .remove()
            }
            return dI.merge([], c.childNodes)
        },
        parseJSON: function (a) {
            if (dt.JSON && dt.JSON.parse) {
                return dt.JSON.parse(a)
            }
            if (a === null) {
                return a
            }
            if (typeof a === 'string') {
                a = dI.trim(a);
                if (a) {
                    if (dG.test(a.replace(cM, '@') .replace(cd, ']') .replace(dc, ''))) {
                        return (new Function('return ' + a)) ()
                    }
                }
            }
            dI.error('Invalid JSON: ' + a)
        },
        parseXML: function (a) {
            var c,
            b;
            if (!a || typeof a !== 'string') {
                return null
            }
            try {
                if (dt.DOMParser) {
                    b = new DOMParser();
                    c = b.parseFromString(a, 'text/xml')
                } else {
                    c = new ActiveXObject('Microsoft.XMLDOM');
                    c.async = 'false';
                    c.loadXML(a)
                }
            } catch (d) {
                c = dX
            }
            if (!c || !c.documentElement || c.getElementsByTagName('parsererror') .length) {
                dI.error('Invalid XML: ' + a)
            }
            return c
        },
        noop: function () {
        },
        globalEval: function (a) {
            if (a && dI.trim(a)) {
                (dt.execScript || function (b) {
                    dt['eval'].call(dt, b)
                }) (a)
            }
        },
        camelCase: function (a) {
            return a.replace(b6, 'ms-') .replace(ch, dJ)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (g, c, f) {
            var h,
            b = 0,
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
        trim: cm && !cm.call('﻿ ') ? function (a) {
            return a == null ? '' : cm.call(a)
        }
         : function (a) {
            return a == null ? '' : (a + '') .replace(c1, '')
        },
        makeArray: function (a, b) {
            var c = b || [];
            if (a != null) {
                if (dn(Object(a))) {
                    dI.merge(c, typeof a === 'string' ? [
                        a
                    ] : a)
                } else {
                    et.call(c, a)
                }
            }
            return c
        },
        inArray: function (a, c, b) {
            var d;
            if (c) {
                if (ct) {
                    return ct.call(c, a, b)
                }
                d = c.length;
                b = b ? b < 0 ? Math.max(0, d + b)  : b : 0;
                for (; b < d; b++) {
                    if (b in c && c[b] === a) {
                        return b
                    }
                }
            }
            return - 1
        },
        merge: function (f, b) {
            var d = b.length,
            a = f.length,
            c = 0;
            if (typeof d === 'number') {
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
        grep: function (f, c, g) {
            var d,
            b = [
            ],
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
        map: function (b, c, h) {
            var d,
            i = 0,
            g = b.length,
            f = dn(b),
            a = [
            ];
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
        proxy: function (f, a) {
            var d,
            b,
            c;
            if (typeof a === 'string') {
                c = f[a];
                a = f;
                f = c
            }
            if (!dI.isFunction(f)) {
                return dX
            }
            d = es.call(arguments, 2);
            b = function () {
                return f.apply(a || this, d.concat(es.call(arguments)))
            };
            b.guid = f.guid = f.guid || dI.guid++;
            return b
        },
        access: function (j, f, c, d, i, a, b) {
            var k = 0,
            h = j.length,
            g = c == null;
            if (dI.type(c) === 'object') {
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
                            f = function (n, l, m) {
                                return g.call(dI(n), m)
                            }
                        }
                    }
                    if (f) {
                        for (; k < h; k++) {
                            f(j[k], c, b ? d : d.call(j[k], k, f(j[k], c)))
                        }
                    }
                }
            }
            return i ? j : g ? f.call(j)  : h ? f(j[0], c)  : a
        },
        now: function () {
            return (new Date()) .getTime()
        }
    });
    dI.ready.promise = function (d) {
        if (!dB) {
            dB = dI.Deferred();
            if (eA.readyState === 'complete') {
                setTimeout(dI.ready)
            } else {
                if (eA.addEventListener) {
                    eA.addEventListener('DOMContentLoaded', dk, false);
                    dt.addEventListener('load', dk, false)
                } else {
                    eA.attachEvent('onreadystatechange', dk);
                    dt.attachEvent('onload', dk);
                    var a = false;
                    try {
                        a = dt.frameElement == null && eA.documentElement
                    } catch (b) {
                    }
                    if (a && a.doScroll) {
                        (function c() {
                            if (!dI.isReady) {
                                try {
                                    a.doScroll('left')
                                } catch (f) {
                                    return setTimeout(c, 50)
                                }
                                c4();
                                dI.ready()
                            }
                        }) ()
                    }
                }
            }
        }
        return dB.promise(d)
    };
    dI.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (a, b) {
        cb['[object ' + b + ']'] = b.toLowerCase()
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
        return a === 'array' || a !== 'function' && (c === 0 || typeof c === 'number' && c > 0 && (c - 1) in b)
    }
    b7 = dI(eA);
    var df = {
    };
    function cS(a) {
        var b = df[a] = {
        };
        dI.each(a.match(da) || [], function (c, d) {
            b[d] = true
        });
        return b
    }
    dI.Callbacks = function (a) {
        a = typeof a === 'string' ? (df[a] || cS(a))  : dI.extend({
        }, a);
        var h,
        j,
        k,
        g,
        f,
        l,
        d = [
        ],
        c = !a.once && [],
        i = function (m) {
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
                        d = [
                        ]
                    } else {
                        b.disable()
                    }
                }
            }
        },
        b = {
            add: function () {
                if (d) {
                    var n = d.length;
                    (function m(o) {
                        dI.each(o, function (q, r) {
                            var p = dI.type(r);
                            if (p === 'function') {
                                if (!a.unique || !b.has(r)) {
                                    d.push(r)
                                }
                            } else {
                                if (r && r.length && p !== 'string') {
                                    m(r)
                                }
                            }
                        })
                    }) (arguments);
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
            remove: function () {
                if (d) {
                    dI.each(arguments, function (o, n) {
                        var m;
                        while ((m = dI.inArray(n, d, m)) > - 1) {
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
            has: function (m) {
                return m ? dI.inArray(m, d) > - 1 : !!(d && d.length)
            },
            empty: function () {
                d = [
                ];
                return this
            },
            disable: function () {
                d = c = j = dX;
                return this
            },
            disabled: function () {
                return !d
            },
            lock: function () {
                c = dX;
                if (!j) {
                    b.disable()
                }
                return this
            },
            locked: function () {
                return !c
            },
            fireWith: function (n, m) {
                m = m || [];
                m = [
                    n,
                    m.slice ? m.slice()  : m
                ];
                if (d && (!k || c)) {
                    if (h) {
                        c.push(m)
                    } else {
                        i(m)
                    }
                }
                return this
            },
            fire: function () {
                b.fireWith(this, arguments);
                return this
            },
            fired: function () {
                return !!k
            }
        };
        return b
    };
    dI.extend({
        Deferred: function (b) {
            var c = [
                ['resolve',
                'done',
                dI.Callbacks('once memory'),
                'resolved'],
                [
                    'reject',
                    'fail',
                    dI.Callbacks('once memory'),
                    'rejected'
                ],
                [
                    'notify',
                    'progress',
                    dI.Callbacks('memory')
                ]
            ],
            a = 'pending',
            f = {
                state: function () {
                    return a
                },
                always: function () {
                    d.done(arguments) .fail(arguments);
                    return this
                },
                then: function () {
                    var g = arguments;
                    return dI.Deferred(function (h) {
                        dI.each(c, function (i, j) {
                            var k = j[0],
                            l = dI.isFunction(g[i]) && g[i];
                            d[j[1]](function () {
                                var m = l && l.apply(this, arguments);
                                if (m && dI.isFunction(m.promise)) {
                                    m.promise() .done(h.resolve) .fail(h.reject) .progress(h.notify)
                                } else {
                                    h[k + 'With'](this === f ? h.promise()  : this, l ? [
                                        m
                                    ] : arguments)
                                }
                            })
                        });
                        g = null
                    }) .promise()
                },
                promise: function (g) {
                    return g != null ? dI.extend(g, f)  : f
                }
            },
            d = {
            };
            f.pipe = f.then;
            dI.each(c, function (i, j) {
                var g = j[2],
                h = j[3];
                f[j[1]] = g.add;
                if (h) {
                    g.add(function () {
                        a = h
                    }, c[i ^ 1][2].disable, c[2][2].lock)
                }
                d[j[0]] = function () {
                    d[j[0] + 'With'](this === d ? f : this, arguments);
                    return this
                };
                d[j[0] + 'With'] = g.fireWith
            });
            f.promise(d);
            if (b) {
                b.call(d, d)
            }
            return d
        },
        when: function (g) {
            var k = 0,
            d = es.call(arguments),
            j = d.length,
            i = j !== 1 || (g && dI.isFunction(g.promise)) ? j : 0,
            a = i === 1 ? g : dI.Deferred(),
            h = function (n, m, l) {
                return function (o) {
                    m[n] = this;
                    l[n] = arguments.length > 1 ? es.call(arguments)  : o;
                    if (l === b) {
                        a.notifyWith(m, l)
                    } else {
                        if (!(--i)) {
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
                        d[k].promise() .done(h(k, c, d)) .fail(a.reject) .progress(h(k, f, b))
                    } else {
                        --i
                    }
                }
            }
            if (!i) {
                a.resolveWith(c, d)
            }
            return a.promise()
        }
    });
    dI.support = (function () {
        var a,
        b,
        d,
        f,
        c,
        g,
        l,
        i,
        m,
        k,
        j = eA.createElement('div');
        j.setAttribute('className', 't');
        j.innerHTML = '  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>';
        b = j.getElementsByTagName('*');
        d = j.getElementsByTagName('a') [0];
        if (!b || !d || !b.length) {
            return {
            }
        }
        c = eA.createElement('select');
        l = c.appendChild(eA.createElement('option'));
        f = j.getElementsByTagName('input') [0];
        d.style.cssText = 'top:1px;float:left;opacity:.5';
        a = {
            getSetAttribute: j.className !== 't',
            leadingWhitespace: j.firstChild.nodeType === 3,
            tbody: !j.getElementsByTagName('tbody') .length,
            htmlSerialize: !!j.getElementsByTagName('link') .length,
            style: /top/.test(d.getAttribute('style')),
            hrefNormalized: d.getAttribute('href') === '/a',
            opacity: /^0.5/.test(d.style.opacity),
            cssFloat: !!d.style.cssFloat,
            checkOn: !!f.value,
            optSelected: l.selected,
            enctype: !!eA.createElement('form') .enctype,
            html5Clone: eA.createElement('nav') .cloneNode(true) .outerHTML !== '<:nav></:nav>',
            boxModel: eA.compatMode === 'CSS1Compat',
            deleteExpando: true,
            noCloneEvent: true,
            inlineBlockNeedsLayout: false,
            shrinkWrapBlocks: false,
            reliableMarginRight: true,
            boxSizingReliable: true,
            pixelPosition: false
        };
        f.checked = true;
        a.noCloneChecked = f.cloneNode(true) .checked;
        c.disabled = true;
        a.optDisabled = !l.disabled;
        try {
            delete j.test
        } catch (h) {
            a.deleteExpando = false
        }
        f = eA.createElement('input');
        f.setAttribute('value', '');
        a.input = f.getAttribute('value') === '';
        f.value = 't';
        f.setAttribute('type', 'radio');
        a.radioValue = f.value === 't';
        f.setAttribute('checked', 't');
        f.setAttribute('name', 't');
        g = eA.createDocumentFragment();
        g.appendChild(f);
        a.appendChecked = f.checked;
        a.checkClone = g.cloneNode(true) .cloneNode(true) .lastChild.checked;
        if (j.attachEvent) {
            j.attachEvent('onclick', function () {
                a.noCloneEvent = false
            });
            j.cloneNode(true) .click()
        }
        for (k in {
            submit: true,
            change: true,
            focusin: true
        }) {
            j.setAttribute(i = 'on' + k, 't');
            a[k + 'Bubbles'] = i in dt || j.attributes[i].expando === false
        }
        j.style.backgroundClip = 'content-box';
        j.cloneNode(true) .style.backgroundClip = '';
        a.clearCloneStyle = j.style.backgroundClip === 'content-box';
        dI(function () {
            var q,
            n,
            o,
            p = 'padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;',
            r = eA.getElementsByTagName('body') [0];
            if (!r) {
                return
            }
            q = eA.createElement('div');
            q.style.cssText = 'border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px';
            r.appendChild(q) .appendChild(j);
            j.innerHTML = '<table><tr><td></td><td>t</td></tr></table>';
            o = j.getElementsByTagName('td');
            o[0].style.cssText = 'padding:0;margin:0;border:0;display:none';
            m = (o[0].offsetHeight === 0);
            o[0].style.display = '';
            o[1].style.display = 'none';
            a.reliableHiddenOffsets = m && (o[0].offsetHeight === 0);
            j.innerHTML = '';
            j.style.cssText = 'box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;';
            a.boxSizing = (j.offsetWidth === 4);
            a.doesNotIncludeMarginInBodyOffset = (r.offsetTop !== 1);
            if (dt.getComputedStyle) {
                a.pixelPosition = (dt.getComputedStyle(j, null) || {
                }) .top !== '1%';
                a.boxSizingReliable = (dt.getComputedStyle(j, null) || {
                    width: '4px'
                }) .width === '4px';
                n = j.appendChild(eA.createElement('div'));
                n.style.cssText = j.style.cssText = p;
                n.style.marginRight = n.style.width = '0';
                j.style.width = '1px';
                a.reliableMarginRight = !parseFloat((dt.getComputedStyle(n, null) || {
                }) .marginRight)
            }
            if (typeof j.style.zoom !== cF) {
                j.innerHTML = '';
                j.style.cssText = p + 'width:1px;padding:1px;display:inline;zoom:1';
                a.inlineBlockNeedsLayout = (j.offsetWidth === 3);
                j.style.display = 'block';
                j.innerHTML = '<div></div>';
                j.firstChild.style.width = '5px';
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
    }) ();
    var dW = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    cs = /([A-Z])/g;
    function cU(k, j, g, h) {
        if (!dI.acceptData(k)) {
            return
        }
        var f,
        c,
        b = dI.expando,
        d = typeof j === 'string',
        a = k.nodeType,
        i = a ? dI.cache : k,
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
            i[l] = {
            };
            if (!a) {
                i[l].toJSON = dI.noop
            }
        }
        if (typeof j === 'object' || typeof j === 'function') {
            if (h) {
                i[l] = dI.extend(i[l], j)
            } else {
                i[l].data = dI.extend(i[l].data, j)
            }
        }
        f = i[l];
        if (!h) {
            if (!f.data) {
                f.data = {
                }
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
        var c,
        d,
        b,
        a = g.nodeType,
        i = a ? dI.cache : g,
        j = a ? g[dI.expando] : dI.expando;
        if (!i[j]) {
            return
        }
        if (h) {
            b = f ? i[j] : i[j].data;
            if (b) {
                if (!dI.isArray(h)) {
                    if (h in b) {
                        h = [
                            h
                        ]
                    } else {
                        h = dI.camelCase(h);
                        if (h in b) {
                            h = [
                                h
                            ]
                        } else {
                            h = h.split(' ')
                        }
                    }
                } else {
                    h = h.concat(dI.map(h, dI.camelCase))
                }
                for (c = 0, d = h.length; c < d; c++) {
                    delete b[h[c]]
                }
                if (!(f ? dF : dI.isEmptyObject) (b)) {
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
        cache: {
        },
        expando: 'jQuery' + (ej + Math.random()) .replace(/\D/g, ''),
        noData: {
            embed: true,
            object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
            applet: true
        },
        hasData: function (a) {
            a = a.nodeType ? dI.cache[a[dI.expando]] : a[dI.expando];
            return !!a && !dF(a)
        },
        data: function (c, a, b) {
            return cU(c, a, b)
        },
        removeData: function (a, b) {
            return d3(a, b)
        },
        _data: function (c, a, b) {
            return cU(c, a, b, true)
        },
        _removeData: function (a, b) {
            return d3(a, b, true)
        },
        acceptData: function (a) {
            if (a.nodeType && a.nodeType !== 1 && a.nodeType !== 9) {
                return false
            }
            var b = a.nodeName && dI.noData[a.nodeName.toLowerCase()];
            return !b || b !== true && a.getAttribute('classid') === b
        }
    });
    dI.fn.extend({
        data: function (a, c) {
            var f,
            g,
            h = this[0],
            b = 0,
            d = null;
            if (a === dX) {
                if (this.length) {
                    d = dI.data(h);
                    if (h.nodeType === 1 && !dI._data(h, 'parsedAttrs')) {
                        f = h.attributes;
                        for (; b < f.length; b++) {
                            g = f[b].name;
                            if (!g.indexOf('data-')) {
                                g = dI.camelCase(g.slice(5));
                                dS(h, g, d[g])
                            }
                        }
                        dI._data(h, 'parsedAttrs', true)
                    }
                }
                return d
            }
            if (typeof a === 'object') {
                return this.each(function () {
                    dI.data(this, a)
                })
            }
            return dI.access(this, function (i) {
                if (i === dX) {
                    return h ? dS(h, a, dI.data(h, a))  : null
                }
                this.each(function () {
                    dI.data(this, a, i)
                })
            }, null, c, arguments.length > 1, null, true)
        },
        removeData: function (a) {
            return this.each(function () {
                dI.removeData(this, a)
            })
        }
    });
    function dS(a, b, f) {
        if (f === dX && a.nodeType === 1) {
            var c = 'data-' + b.replace(cs, '-$1') .toLowerCase();
            f = a.getAttribute(c);
            if (typeof f === 'string') {
                try {
                    f = f === 'true' ? true : f === 'false' ? false : f === 'null' ? null : + f + '' === f ? + f : dW.test(f) ? dI.parseJSON(f)  : f
                } catch (d) {
                }
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
            if (b === 'data' && dI.isEmptyObject(a[b])) {
                continue
            }
            if (b !== 'toJSON') {
                return false
            }
        }
        return true
    }
    dI.extend({
        queue: function (b, c, a) {
            var d;
            if (b) {
                c = (c || 'fx') + 'queue';
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
        dequeue: function (g, h) {
            h = h || 'fx';
            var f = dI.queue(g, h),
            c = f.length,
            a = f.shift(),
            d = dI._queueHooks(g, h),
            b = function () {
                dI.dequeue(g, h)
            };
            if (a === 'inprogress') {
                a = f.shift();
                c--
            }
            d.cur = a;
            if (a) {
                if (h === 'fx') {
                    f.unshift('inprogress')
                }
                delete d.stop;
                a.call(g, b, d)
            }
            if (!c && d) {
                d.empty.fire()
            }
        },
        _queueHooks: function (b, c) {
            var a = c + 'queueHooks';
            return dI._data(b, a) || dI._data(b, a, {
                empty: dI.Callbacks('once memory') .add(function () {
                    dI._removeData(b, c + 'queue');
                    dI._removeData(b, a)
                })
            })
        }
    });
    dI.fn.extend({
        queue: function (a, c) {
            var b = 2;
            if (typeof a !== 'string') {
                c = a;
                a = 'fx';
                b--
            }
            if (arguments.length < b) {
                return dI.queue(this[0], a)
            }
            return c === dX ? this : this.each(function () {
                var d = dI.queue(this, a, c);
                dI._queueHooks(this, a);
                if (a === 'fx' && d[0] !== 'inprogress') {
                    dI.dequeue(this, a)
                }
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                dI.dequeue(this, a)
            })
        },
        delay: function (a, b) {
            a = dI.fx ? dI.fx.speeds[a] || a : a;
            b = b || 'fx';
            return this.queue(b, function (c, d) {
                var f = setTimeout(c, a);
                d.stop = function () {
                    clearTimeout(f)
                }
            })
        },
        clearQueue: function (a) {
            return this.queue(a || 'fx', [
            ])
        },
        promise: function (b, d) {
            var g,
            a = 1,
            c = dI.Deferred(),
            h = this,
            f = this.length,
            i = function () {
                if (!(--a)) {
                    c.resolveWith(h, [
                        h
                    ])
                }
            };
            if (typeof b !== 'string') {
                d = b;
                b = dX
            }
            b = b || 'fx';
            while (f--) {
                g = dI._data(h[f], b + 'queueHooks');
                if (g && g.empty) {
                    a++;
                    g.empty.add(i)
                }
            }
            i();
            return c.promise(d)
        }
    });
    var di,
    db,
    eD = /[\t\r\n]/g,
    eH = /\r/g,
    d1 = /^(?:input|select|textarea|button|object)$/i,
    cZ = /^(?:a|area)$/i,
    dN = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
    ei = /^(?:checked|selected)$/i,
    eo = dI.support.getSetAttribute,
    cQ = dI.support.input;
    dI.fn.extend({
        attr: function (b, a) {
            return dI.access(this, dI.attr, b, a, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                dI.removeAttr(this, a)
            })
        },
        prop: function (b, a) {
            return dI.access(this, dI.prop, b, a, arguments.length > 1)
        },
        removeProp: function (a) {
            a = dI.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] = dX;
                    delete this[a]
                } catch (b) {
                }
            })
        },
        addClass: function (b) {
            var h,
            i,
            a,
            f,
            j,
            g = 0,
            d = this.length,
            c = typeof b === 'string' && b;
            if (dI.isFunction(b)) {
                return this.each(function (k) {
                    dI(this) .addClass(b.call(this, k, this.className))
                })
            }
            if (c) {
                h = (b || '') .match(da) || [];
                for (; g < d; g++) {
                    i = this[g];
                    a = i.nodeType === 1 && (i.className ? (' ' + i.className + ' ') .replace(eD, ' ')  : ' ');
                    if (a) {
                        j = 0;
                        while ((f = h[j++])) {
                            if (a.indexOf(' ' + f + ' ') < 0) {
                                a += f + ' '
                            }
                        }
                        i.className = dI.trim(a)
                    }
                }
            }
            return this
        },
        removeClass: function (b) {
            var h,
            i,
            a,
            f,
            j,
            g = 0,
            d = this.length,
            c = arguments.length === 0 || typeof b === 'string' && b;
            if (dI.isFunction(b)) {
                return this.each(function (k) {
                    dI(this) .removeClass(b.call(this, k, this.className))
                })
            }
            if (c) {
                h = (b || '') .match(da) || [];
                for (; g < d; g++) {
                    i = this[g];
                    a = i.nodeType === 1 && (i.className ? (' ' + i.className + ' ') .replace(eD, ' ')  : '');
                    if (a) {
                        j = 0;
                        while ((f = h[j++])) {
                            while (a.indexOf(' ' + f + ' ') >= 0) {
                                a = a.replace(' ' + f + ' ', ' ')
                            }
                        }
                        i.className = b ? dI.trim(a)  : ''
                    }
                }
            }
            return this
        },
        toggleClass: function (a, c) {
            var b = typeof a,
            d = typeof c === 'boolean';
            if (dI.isFunction(a)) {
                return this.each(function (f) {
                    dI(this) .toggleClass(a.call(this, f, this.className, c), c)
                })
            }
            return this.each(function () {
                if (b === 'string') {
                    var h,
                    i = 0,
                    j = dI(this),
                    g = c,
                    f = a.match(da) || [];
                    while ((h = f[i++])) {
                        g = d ? g : !j.hasClass(h);
                        j[g ? 'addClass' : 'removeClass'](h)
                    }
                } else {
                    if (b === cF || b === 'boolean') {
                        if (this.className) {
                            dI._data(this, '__className__', this.className)
                        }
                        this.className = this.className || a === false ? '' : dI._data(this, '__className__') || ''
                    }
                }
            })
        },
        hasClass: function (d) {
            var a = ' ' + d + ' ',
            b = 0,
            c = this.length;
            for (; b < c; b++) {
                if (this[b].nodeType === 1 && (' ' + this[b].className + ' ') .replace(eD, ' ') .indexOf(a) >= 0) {
                    return true
                }
            }
            return false
        },
        val: function (a) {
            var c,
            d,
            f,
            b = this[0];
            if (!arguments.length) {
                if (b) {
                    d = dI.valHooks[b.type] || dI.valHooks[b.nodeName.toLowerCase()];
                    if (d && 'get' in d && (c = d.get(b, 'value')) !== dX) {
                        return c
                    }
                    c = b.value;
                    return typeof c === 'string' ? c.replace(eH, '')  : c == null ? '' : c
                }
                return
            }
            f = dI.isFunction(a);
            return this.each(function (h) {
                var g,
                i = dI(this);
                if (this.nodeType !== 1) {
                    return
                }
                if (f) {
                    g = a.call(this, h, i.val())
                } else {
                    g = a
                }
                if (g == null) {
                    g = ''
                } else {
                    if (typeof g === 'number') {
                        g += ''
                    } else {
                        if (dI.isArray(g)) {
                            g = dI.map(g, function (j) {
                                return j == null ? '' : j + ''
                            })
                        }
                    }
                }
                d = dI.valHooks[this.type] || dI.valHooks[this.nodeName.toLowerCase()];
                if (!d || !('set' in d) || d.set(this, g, 'value') === dX) {
                    this.value = g
                }
            })
        }
    });
    dI.extend({
        valHooks: {
            option: {
                get: function (b) {
                    var a = b.attributes.value;
                    return !a || a.specified ? b.value : b.text
                }
            },
            select: {
                get: function (i) {
                    var c,
                    j,
                    a = i.options,
                    f = i.selectedIndex,
                    h = i.type === 'select-one' || f < 0,
                    b = h ? null : [
                    ],
                    d = h ? f + 1 : a.length,
                    g = f < 0 ? d : h ? f : 0;
                    for (; g < d; g++) {
                        j = a[g];
                        if ((j.selected || g === f) && (dI.support.optDisabled ? !j.disabled : j.getAttribute('disabled') === null) && (!j.parentNode.disabled || !dI.nodeName(j.parentNode, 'optgroup'))) {
                            c = dI(j) .val();
                            if (h) {
                                return c
                            }
                            b.push(c)
                        }
                    }
                    return b
                },
                set: function (c, b) {
                    var a = dI.makeArray(b);
                    dI(c) .find('option') .each(function () {
                        this.selected = dI.inArray(dI(this) .val(), a) >= 0
                    });
                    if (!a.length) {
                        c.selectedIndex = - 1
                    }
                    return a
                }
            }
        },
        attr: function (g, a, c) {
            var f,
            h,
            b,
            d = g.nodeType;
            if (!g || d === 3 || d === 8 || d === 2) {
                return
            }
            if (typeof g.getAttribute === cF) {
                return dI.prop(g, a, c)
            }
            h = d !== 1 || !dI.isXMLDoc(g);
            if (h) {
                a = a.toLowerCase();
                f = dI.attrHooks[a] || (dN.test(a) ? db : di)
            }
            if (c !== dX) {
                if (c === null) {
                    dI.removeAttr(g, a)
                } else {
                    if (f && h && 'set' in f && (b = f.set(g, c, a)) !== dX) {
                        return b
                    } else {
                        g.setAttribute(a, c + '');
                        return c
                    }
                }
            } else {
                if (f && h && 'get' in f && (b = f.get(g, a)) !== null) {
                    return b
                } else {
                    if (typeof g.getAttribute !== cF) {
                        b = g.getAttribute(a)
                    }
                    return b == null ? dX : b
                }
            }
        },
        removeAttr: function (b, g) {
            var f,
            a,
            d = 0,
            c = g && g.match(da);
            if (c && b.nodeType === 1) {
                while ((f = c[d++])) {
                    a = dI.propFix[f] || f;
                    if (dN.test(f)) {
                        if (!eo && ei.test(f)) {
                            b[dI.camelCase('default-' + f)] = b[a] = false
                        } else {
                            b[a] = false
                        }
                    } else {
                        dI.attr(b, f, '')
                    }
                    b.removeAttribute(eo ? f : a)
                }
            }
        },
        attrHooks: {
            type: {
                set: function (a, c) {
                    if (!dI.support.radioValue && c === 'radio' && dI.nodeName(a, 'input')) {
                        var b = a.value;
                        a.setAttribute('type', c);
                        if (b) {
                            a.value = b
                        }
                        return c
                    }
                }
            }
        },
        propFix: {
            tabindex: 'tabIndex',
            readonly: 'readOnly',
            'for': 'htmlFor',
            'class': 'className',
            maxlength: 'maxLength',
            cellspacing: 'cellSpacing',
            cellpadding: 'cellPadding',
            rowspan: 'rowSpan',
            colspan: 'colSpan',
            usemap: 'useMap',
            frameborder: 'frameBorder',
            contenteditable: 'contentEditable'
        },
        prop: function (g, a, c) {
            var b,
            f,
            h,
            d = g.nodeType;
            if (!g || d === 3 || d === 8 || d === 2) {
                return
            }
            h = d !== 1 || !dI.isXMLDoc(g);
            if (h) {
                a = dI.propFix[a] || a;
                f = dI.propHooks[a]
            }
            if (c !== dX) {
                if (f && 'set' in f && (b = f.set(g, c, a)) !== dX) {
                    return b
                } else {
                    return (g[a] = c)
                }
            } else {
                if (f && 'get' in f && (b = f.get(g, a)) !== null) {
                    return b
                } else {
                    return g[a]
                }
            }
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = a.getAttributeNode('tabindex');
                    return b && b.specified ? parseInt(b.value, 10)  : d1.test(a.nodeName) || cZ.test(a.nodeName) && a.href ? 0 : dX
                }
            }
        }
    });
    db = {
        get: function (a, c) {
            var f = dI.prop(a, c),
            d = typeof f === 'boolean' && a.getAttribute(c),
            b = typeof f === 'boolean' ? cQ && eo ? d != null : ei.test(c) ? a[dI.camelCase('default-' + c)] : !!d : a.getAttributeNode(c);
            return b && b.value !== false ? c.toLowerCase()  : dX
        },
        set: function (c, b, a) {
            if (b === false) {
                dI.removeAttr(c, a)
            } else {
                if (cQ && eo || !ei.test(a)) {
                    c.setAttribute(!eo && dI.propFix[a] || a, a)
                } else {
                    c[dI.camelCase('default-' + a)] = c[a] = true
                }
            }
            return a
        }
    };
    if (!cQ || !eo) {
        dI.attrHooks.value = {
            get: function (b, c) {
                var a = b.getAttributeNode(c);
                return dI.nodeName(b, 'input') ? b.defaultValue : a && a.specified ? a.value : dX
            },
            set: function (c, b, a) {
                if (dI.nodeName(c, 'input')) {
                    c.defaultValue = b
                } else {
                    return di && di.set(c, b, a)
                }
            }
        }
    }
    if (!eo) {
        di = dI.valHooks.button = {
            get: function (b, c) {
                var a = b.getAttributeNode(c);
                return a && (c === 'id' || c === 'name' || c === 'coords' ? a.value !== '' : a.specified) ? a.value : dX
            },
            set: function (b, a, c) {
                var d = b.getAttributeNode(c);
                if (!d) {
                    b.setAttributeNode((d = b.ownerDocument.createAttribute(c)))
                }
                d.value = a += '';
                return c === 'value' || a === b.getAttribute(c) ? a : dX
            }
        };
        dI.attrHooks.contenteditable = {
            get: di.get,
            set: function (c, b, a) {
                di.set(c, b === '' ? false : b, a)
            }
        };
        dI.each(['width',
        'height'], function (a, b) {
            dI.attrHooks[b] = dI.extend(dI.attrHooks[b], {
                set: function (d, c) {
                    if (c === '') {
                        d.setAttribute(b, 'auto');
                        return c
                    }
                }
            })
        })
    }
    if (!dI.support.hrefNormalized) {
        dI.each(['href',
        'src',
        'width',
        'height'], function (a, b) {
            dI.attrHooks[b] = dI.extend(dI.attrHooks[b], {
                get: function (c) {
                    var d = c.getAttribute(b, 2);
                    return d == null ? dX : d
                }
            })
        });
        dI.each(['href',
        'src'], function (a, b) {
            dI.propHooks[b] = {
                get: function (c) {
                    return c.getAttribute(b, 4)
                }
            }
        })
    }
    if (!dI.support.style) {
        dI.attrHooks.style = {
            get: function (a) {
                return a.style.cssText || dX
            },
            set: function (b, a) {
                return (b.style.cssText = a + '')
            }
        }
    }
    if (!dI.support.optSelected) {
        dI.propHooks.selected = dI.extend(dI.propHooks.selected, {
            get: function (a) {
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
        dI.propFix.enctype = 'encoding'
    }
    if (!dI.support.checkOn) {
        dI.each(['radio',
        'checkbox'], function () {
            dI.valHooks[this] = {
                get: function (a) {
                    return a.getAttribute('value') === null ? 'on' : a.value
                }
            }
        })
    }
    dI.each(['radio',
    'checkbox'], function () {
        dI.valHooks[this] = dI.extend(dI.valHooks[this], {
            set: function (b, a) {
                if (dI.isArray(a)) {
                    return (b.checked = dI.inArray(dI(b) .val(), a) >= 0)
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
        global: {
        },
        add: function (l, g, a, j, k) {
            var i,
            r,
            o,
            p,
            d,
            h,
            b,
            n,
            c,
            m,
            q,
            f = dI._data(l);
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
            if (!(r = f.events)) {
                r = f.events = {
                }
            }
            if (!(h = f.handle)) {
                h = f.handle = function (s) {
                    return typeof dI !== cF && (!s || dI.event.triggered !== s.type) ? dI.event.dispatch.apply(h.elem, arguments)  : dX
                };
                h.elem = l
            }
            g = (g || '') .match(da) || [''];
            o = g.length;
            while (o--) {
                i = d0.exec(g[o]) || [];
                c = q = i[1];
                m = (i[2] || '') .split('.') .sort();
                d = dI.event.special[c] || {
                };
                c = (k ? d.delegateType : d.bindType) || c;
                d = dI.event.special[c] || {
                };
                b = dI.extend({
                    type: c,
                    origType: q,
                    data: j,
                    handler: a,
                    guid: a.guid,
                    selector: k,
                    needsContext: k && dI.expr.match.needsContext.test(k),
                    namespace: m.join('.')
                }, p);
                if (!(n = r[c])) {
                    n = r[c] = [
                    ];
                    n.delegateCount = 0;
                    if (!d.setup || d.setup.call(l, j, m, h) === false) {
                        if (l.addEventListener) {
                            l.addEventListener(c, h, false)
                        } else {
                            if (l.attachEvent) {
                                l.attachEvent('on' + c, h)
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
        remove: function (n, g, o, l, h) {
            var j,
            b,
            i,
            k,
            r,
            a,
            d,
            p,
            c,
            m,
            q,
            f = dI.hasData(n) && dI._data(n);
            if (!f || !(a = f.events)) {
                return
            }
            g = (g || '') .match(da) || [''];
            r = g.length;
            while (r--) {
                i = d0.exec(g[r]) || [];
                c = q = i[1];
                m = (i[2] || '') .split('.') .sort();
                if (!c) {
                    for (c in a) {
                        dI.event.remove(n, c + g[r], o, l, true)
                    }
                    continue
                }
                d = dI.event.special[c] || {
                };
                c = (l ? d.delegateType : d.bindType) || c;
                p = a[c] || [];
                i = i[2] && new RegExp('(^|\.)' + m.join('\.(?:.*\.|)') + '(\.|$)');
                k = j = p.length;
                while (j--) {
                    b = p[j];
                    if ((h || q === b.origType) && (!o || o.guid === b.guid) && (!i || i.test(b.namespace)) && (!l || l === b.selector || l === '**' && b.selector)) {
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
                dI._removeData(n, 'events')
            }
        },
        trigger: function (n, i, m, a) {
            var h,
            o,
            c,
            b,
            f,
            j,
            k,
            l = [
                m || eA
            ],
            d = cB.call(n, 'type') ? n.type : n,
            p = cB.call(n, 'namespace') ? n.namespace.split('.')  : [
            ];
            c = j = m = m || eA;
            if (m.nodeType === 3 || m.nodeType === 8) {
                return
            }
            if (ca.test(d + dI.event.triggered)) {
                return
            }
            if (d.indexOf('.') >= 0) {
                p = d.split('.');
                d = p.shift();
                p.sort()
            }
            o = d.indexOf(':') < 0 && 'on' + d;
            n = n[dI.expando] ? n : new dI.Event(d, typeof n === 'object' && n);
            n.isTrigger = true;
            n.namespace = p.join('.');
            n.namespace_re = n.namespace ? new RegExp('(^|\.)' + p.join('\.(?:.*\.|)') + '(\.|$)')  : null;
            n.result = dX;
            if (!n.target) {
                n.target = m
            }
            i = i == null ? [
                n
            ] : dI.makeArray(i, [
                n
            ]);
            f = dI.event.special[d] || {
            };
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
                n.type = k > 1 ? b : f.bindType || d;
                h = (dI._data(c, 'events') || {
                }) [n.type] && dI._data(c, 'handle');
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
                if ((!f._default || f._default.apply(m.ownerDocument, i) === false) && !(d === 'click' && dI.nodeName(m, 'a')) && dI.acceptData(m)) {
                    if (o && m[d] && !dI.isWindow(m)) {
                        j = m[o];
                        if (j) {
                            m[o] = null
                        }
                        dI.event.triggered = d;
                        try {
                            m[d]()
                        } catch (g) {
                        }
                        dI.event.triggered = dX;
                        if (j) {
                            m[o] = j
                        }
                    }
                }
            }
            return n.result
        },
        dispatch: function (j) {
            j = dI.event.fix(j);
            var g,
            f,
            a,
            i,
            h,
            b = [
            ],
            c = es.call(arguments),
            k = (dI._data(this, 'events') || {
            }) [j.type] || [],
            d = dI.event.special[j.type] || {
            };
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
                        f = ((dI.event.special[a.origType] || {
                        }) .handle || a.handler) .apply(i.elem, c);
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
        handlers: function (i, j) {
            var h,
            b,
            d,
            f,
            c = [
            ],
            g = j.delegateCount,
            a = i.target;
            if (g && a.nodeType && (!i.button || i.type !== 'click')) {
                for (; a != this; a = a.parentNode || this) {
                    if (a.nodeType === 1 && (a.disabled !== true || i.type !== 'click')) {
                        d = [
                        ];
                        for (f = 0; f < g; f++) {
                            b = j[f];
                            h = b.selector + ' ';
                            if (d[h] === dX) {
                                d[h] = b.needsContext ? dI(h, this) .index(a) >= 0 : dI.find(h, this, null, [
                                    a
                                ]) .length
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
        fix: function (a) {
            if (a[dI.expando]) {
                return a
            }
            var f,
            c,
            g,
            b = a.type,
            d = a,
            h = this.fixHooks[b];
            if (!h) {
                this.fixHooks[b] = h = eB.test(b) ? this.mouseHooks : ds.test(b) ? this.keyHooks : {
                }
            }
            g = h.props ? this.props.concat(h.props)  : this.props;
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
            return h.filter ? h.filter(a, d)  : a
        },
        props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
        fixHooks: {
        },
        keyHooks: {
            props: 'char charCode key keyCode'.split(' '),
            filter: function (a, b) {
                if (a.which == null) {
                    a.which = b.charCode != null ? b.charCode : b.keyCode
                }
                return a
            }
        },
        mouseHooks: {
            props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
            filter: function (a, b) {
                var g,
                h,
                f,
                d = b.button,
                c = b.fromElement;
                if (a.pageX == null && b.clientX != null) {
                    h = a.target.ownerDocument || eA;
                    f = h.documentElement;
                    g = h.body;
                    a.pageX = b.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0);
                    a.pageY = b.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)
                }
                if (!a.relatedTarget && c) {
                    a.relatedTarget = c === a.target ? b.toElement : c
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
                trigger: function () {
                    if (dI.nodeName(this, 'input') && this.type === 'checkbox' && this.click) {
                        this.click();
                        return false
                    }
                }
            },
            focus: {
                trigger: function () {
                    if (this !== eA.activeElement && this.focus) {
                        try {
                            this.focus();
                            return false
                        } catch (a) {
                        }
                    }
                },
                delegateType: 'focusin'
            },
            blur: {
                trigger: function () {
                    if (this === eA.activeElement && this.blur) {
                        this.blur();
                        return false
                    }
                },
                delegateType: 'focusout'
            },
            beforeunload: {
                postDispatch: function (a) {
                    if (a.result !== dX) {
                        a.originalEvent.returnValue = a.result
                    }
                }
            }
        },
        simulate: function (b, f, a, c) {
            var d = dI.extend(new dI.Event(), a, {
                type: b,
                isSimulated: true,
                originalEvent: {
                }
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
    dI.removeEvent = eA.removeEventListener ? function (c, a, b) {
        if (c.removeEventListener) {
            c.removeEventListener(a, b, false)
        }
    }
     : function (b, c, a) {
        var d = 'on' + c;
        if (b.detachEvent) {
            if (typeof b[d] === cF) {
                b[d] = null
            }
            b.detachEvent(d, a)
        }
    };
    dI.Event = function (a, b) {
        if (!(this instanceof dI.Event)) {
            return new dI.Event(a, b)
        }
        if (a && a.type) {
            this.originalEvent = a;
            this.type = a.type;
            this.isDefaultPrevented = (a.defaultPrevented || a.returnValue === false || a.getPreventDefault && a.getPreventDefault()) ? c2 : ea
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
        preventDefault: function () {
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
        stopPropagation: function () {
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
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = c2;
            this.stopPropagation()
        }
    };
    dI.each({
        mouseenter: 'mouseover',
        mouseleave: 'mouseout'
    }, function (a, b) {
        dI.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (h) {
                var d,
                f = this,
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
            setup: function () {
                if (dI.nodeName(this, 'form')) {
                    return false
                }
                dI.event.add(this, 'click._submit keypress._submit', function (a) {
                    var b = a.target,
                    c = dI.nodeName(b, 'input') || dI.nodeName(b, 'button') ? b.form : dX;
                    if (c && !dI._data(c, 'submitBubbles')) {
                        dI.event.add(c, 'submit._submit', function (d) {
                            d._submit_bubble = true
                        });
                        dI._data(c, 'submitBubbles', true)
                    }
                })
            },
            postDispatch: function (a) {
                if (a._submit_bubble) {
                    delete a._submit_bubble;
                    if (this.parentNode && !a.isTrigger) {
                        dI.event.simulate('submit', this.parentNode, a, true)
                    }
                }
            },
            teardown: function () {
                if (dI.nodeName(this, 'form')) {
                    return false
                }
                dI.event.remove(this, '._submit')
            }
        }
    }
    if (!dI.support.changeBubbles) {
        dI.event.special.change = {
            setup: function () {
                if (cC.test(this.nodeName)) {
                    if (this.type === 'checkbox' || this.type === 'radio') {
                        dI.event.add(this, 'propertychange._change', function (a) {
                            if (a.originalEvent.propertyName === 'checked') {
                                this._just_changed = true
                            }
                        });
                        dI.event.add(this, 'click._change', function (a) {
                            if (this._just_changed && !a.isTrigger) {
                                this._just_changed = false
                            }
                            dI.event.simulate('change', this, a, true)
                        })
                    }
                    return false
                }
                dI.event.add(this, 'beforeactivate._change', function (a) {
                    var b = a.target;
                    if (cC.test(b.nodeName) && !dI._data(b, 'changeBubbles')) {
                        dI.event.add(b, 'change._change', function (c) {
                            if (this.parentNode && !c.isSimulated && !c.isTrigger) {
                                dI.event.simulate('change', this.parentNode, c, true)
                            }
                        });
                        dI._data(b, 'changeBubbles', true)
                    }
                })
            },
            handle: function (a) {
                var b = a.target;
                if (this !== b || a.isSimulated || a.isTrigger || (b.type !== 'radio' && b.type !== 'checkbox')) {
                    return a.handleObj.handler.apply(this, arguments)
                }
            },
            teardown: function () {
                dI.event.remove(this, '._change');
                return !cC.test(this.nodeName)
            }
        }
    }
    if (!dI.support.focusinBubbles) {
        dI.each({
            focus: 'focusin',
            blur: 'focusout'
        }, function (a, d) {
            var c = 0,
            b = function (f) {
                dI.event.simulate(d, f.target, dI.event.fix(f), true)
            };
            dI.event.special[d] = {
                setup: function () {
                    if (c++ === 0) {
                        eA.addEventListener(a, b, true)
                    }
                },
                teardown: function () {
                    if (--c === 0) {
                        eA.removeEventListener(a, b, true)
                    }
                }
            }
        })
    }
    dI.fn.extend({
        on: function (b, g, f, h, d) {
            var a,
            c;
            if (typeof b === 'object') {
                if (typeof g !== 'string') {
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
                    if (typeof g === 'string') {
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
                h = function (i) {
                    dI() .off(i);
                    return c.apply(this, arguments)
                };
                h.guid = c.guid || (c.guid = dI.guid++)
            }
            return this.each(function () {
                dI.event.add(this, b, h, f, g)
            })
        },
        one: function (c, d, a, b) {
            return this.on(c, d, a, b, 1)
        },
        off: function (b, d, f) {
            var c,
            a;
            if (b && b.preventDefault && b.handleObj) {
                c = b.handleObj;
                dI(b.delegateTarget) .off(c.namespace ? c.origType + '.' + c.namespace : c.origType, c.selector, c.handler);
                return this
            }
            if (typeof b === 'object') {
                for (a in b) {
                    this.off(a, d, b[a])
                }
                return this
            }
            if (d === false || typeof d === 'function') {
                f = d;
                d = dX
            }
            if (f === false) {
                f = ea
            }
            return this.each(function () {
                dI.event.remove(this, b, f, d)
            })
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (b, a) {
            return this.off(b, null, a)
        },
        delegate: function (d, c, a, b) {
            return this.on(c, d, a, b)
        },
        undelegate: function (a, c, b) {
            return arguments.length === 1 ? this.off(a, '**')  : this.off(c, a || '**', b)
        },
        trigger: function (b, a) {
            return this.each(function () {
                dI.event.trigger(b, a, this)
            })
        },
        triggerHandler: function (a, b) {
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
    (function (w, K) {
        var z,
        V,
        av,
        a,
        o,
        ag,
        af,
        q,
        ad,
        ai,
        au,
        R,
        Z,
        v,
        X,
        c,
        f,
        ao = 'sizzle' + - (new Date()),
        p = w.document,
        t = {
        },
        s = 0,
        I = 0,
        U = x(),
        ap = x(),
        b = x(),
        ak = typeof K,
        k = 1 << 31,
        am = [
        ],
        al = am.pop,
        W = am.push,
        aw = am.slice,
        M = am.indexOf || function (aA) {
            var aB = 0,
            aC = this.length;
            for (; aB < aC; aB++) {
                if (this[aB] === aA) {
                    return aB
                }
            }
            return - 1
        },
        at = '[\x20\t\r\n\f]',
        Y = '(?:\\.|[\w-]|[^\x00-\xa0])+',
        n = Y.replace('w', 'w#'),
        J = '([*^$|!~]?=)',
        ar = '\[' + at + '*(' + Y + ')' + at + '*(?:' + J + at + '*(?:(['"])((?:\\.|[^\\])*?)\3|(' + n + ')|)|)' + at + '*\]',
        ay = ':(' + Y + ')(?:\(((['"])((?:\\.|[^\\])*?)\3|((?:\\.|[^\\()[\]]|' + ar.replace(3, 8) + ')*)|.*)\)|)',
        F = new RegExp('^' + at + '+|((?:^|[^\\])(?:\\.)*)' + at + '+$', 'g'),
        C = new RegExp('^' + at + '*,' + at + '*'),
        aj = new RegExp('^' + at + '*([\x20\t\r\n\f>+~])' + at + '*'),
        i = new RegExp(ay),
        h = new RegExp('^' + n + '$'),
        aa = {
            ID: new RegExp('^#(' + Y + ')'),
            CLASS: new RegExp('^\.(' + Y + ')'),
            NAME: new RegExp('^\[name=['"]?(' + Y + ')['"]?\]'),
            TAG: new RegExp('^(' + Y.replace('w', 'w*') + ')'),
            ATTR: new RegExp('^' + ar),
            PSEUDO: new RegExp('^' + ay),
            CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\(' + at + '*(even|odd|(([+-]|)(\d*)n|)' + at + '*(?:([+-]|)' + at + '*(\d+)|))' + at + '*\)|)', 'i'),
            needsContext: new RegExp('^' + at + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\(' + at + '*((?:-\d)?\d*)' + at + '*\)|)(?=[^-]|$)', 'i')
        },
        ac = /[\x20\t\r\n\f]*[+~]/,
        l = /^[^{]+\{\s*\[native code/,
        j = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        O = /^(?:input|select|textarea|button)$/i,
        ax = /^h\d$/i,
        m = /'|\\/g,
        D = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
        E = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
        H = function (aC, aA) {
            var aB = '0x' + aA - 65536;
            return aB !== aB ? aA : aB < 0 ? String.fromCharCode(aB + 65536)  : String.fromCharCode(aB >> 10 | 55296, aB & 1023 | 56320)
        };
        try {
            aw.call(p.documentElement.childNodes, 0) [0].nodeType
        } catch (g) {
            aw = function (aB) {
                var aA,
                aC = [
                ];
                while ((aA = this[aB++])) {
                    aC.push(aA)
                }
                return aC
            }
        }
        function d(aA) {
            return l.test(aA + '')
        }
        function x() {
            var aB,
            aA = [
            ];
            return (aB = function (aD, aC) {
                if (aA.push(aD += ' ') > av.cacheLength) {
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
            var aA = ai.createElement('div');
            try {
                return aC(aA)
            } catch (aB) {
                return false
            } finally {
                aA = null
            }
        }
        function B(aL, aE, aH, aF) {
            var aG,
            aO,
            aN,
            aJ,
            aI,
            aA,
            aC,
            aB,
            aD,
            aK;
            if ((aE ? aE.ownerDocument || aE : p) !== ai) {
                ad(aE)
            }
            aE = aE || ai;
            aH = aH || [];
            if (!aL || typeof aL !== 'string') {
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
                    if (aJ === 1 && aE.nodeName.toLowerCase() !== 'object') {
                        aA = N(aL);
                        if ((aC = aE.getAttribute('id'))) {
                            aB = aC.replace(m, '\$&')
                        } else {
                            aE.setAttribute('id', aB)
                        }
                        aB = '[id='' + aB + ''] ';
                        aI = aA.length;
                        while (aI--) {
                            aA[aI] = aB + L(aA[aI])
                        }
                        aD = ac.test(aL) && aE.parentNode || aE;
                        aK = aA.join(',')
                    }
                    if (aK) {
                        try {
                            W.apply(aH, aw.call(aD.querySelectorAll(aK), 0));
                            return aH
                        } catch (aM) {
                        } finally {
                            if (!aC) {
                                aE.removeAttribute('id')
                            }
                        }
                    }
                }
            }
            return u(aL.replace(F, '$1'), aE, aH, aF)
        }
        o = B.isXML = function (aB) {
            var aA = aB && (aB.ownerDocument || aB) .documentElement;
            return aA ? aA.nodeName !== 'HTML' : false
        };
        ad = B.setDocument = function (aB) {
            var aA = aB ? aB.ownerDocument || aB : p;
            if (aA === ai || aA.nodeType !== 9 || !aA.documentElement) {
                return ai
            }
            ai = aA;
            au = aA.documentElement;
            R = o(aA);
            t.tagNameNoComments = T(function (aC) {
                aC.appendChild(aA.createComment(''));
                return !aC.getElementsByTagName('*') .length
            });
            t.attributes = T(function (aC) {
                aC.innerHTML = '<select></select>';
                var aD = typeof aC.lastChild.getAttribute('multiple');
                return aD !== 'boolean' && aD !== 'string'
            });
            t.getByClassName = T(function (aC) {
                aC.innerHTML = '<div class='hidden e'></div><div class='hidden'></div>';
                if (!aC.getElementsByClassName || !aC.getElementsByClassName('e') .length) {
                    return false
                }
                aC.lastChild.className = 'e';
                return aC.getElementsByClassName('e') .length === 2
            });
            t.getByName = T(function (aC) {
                aC.id = ao + 0;
                aC.innerHTML = '<a name='' + ao + ''></a><div name='' + ao + ''></div>';
                au.insertBefore(aC, au.firstChild);
                var aD = aA.getElementsByName && aA.getElementsByName(ao) .length === 2 + aA.getElementsByName(ao + 0) .length;
                t.getIdNotName = !aA.getElementById(ao);
                au.removeChild(aC);
                return aD
            });
            av.attrHandle = T(function (aC) {
                aC.innerHTML = '<a href='#'></a>';
                return aC.firstChild && typeof aC.firstChild.getAttribute !== ak && aC.firstChild.getAttribute('href') === '#'
            }) ? {
            }
             : {
                href: function (aC) {
                    return aC.getAttribute('href', 2)
                },
                type: function (aC) {
                    return aC.getAttribute('type')
                }
            };
            if (t.getIdNotName) {
                av.find.ID = function (aC, aD) {
                    if (typeof aD.getElementById !== ak && !R) {
                        var aE = aD.getElementById(aC);
                        return aE && aE.parentNode ? [
                            aE
                        ] : [
                        ]
                    }
                };
                av.filter.ID = function (aC) {
                    var aD = aC.replace(E, H);
                    return function (aE) {
                        return aE.getAttribute('id') === aD
                    }
                }
            } else {
                av.find.ID = function (aC, aD) {
                    if (typeof aD.getElementById !== ak && !R) {
                        var aE = aD.getElementById(aC);
                        return aE ? aE.id === aC || typeof aE.getAttributeNode !== ak && aE.getAttributeNode('id') .value === aC ? [
                            aE
                        ] : K : [
                        ]
                    }
                };
                av.filter.ID = function (aC) {
                    var aD = aC.replace(E, H);
                    return function (aE) {
                        var aF = typeof aE.getAttributeNode !== ak && aE.getAttributeNode('id');
                        return aF && aF.value === aD
                    }
                }
            }
            av.find.TAG = t.tagNameNoComments ? function (aD, aC) {
                if (typeof aC.getElementsByTagName !== ak) {
                    return aC.getElementsByTagName(aD)
                }
            }
             : function (aH, aD) {
                var aC,
                aE = [
                ],
                aF = 0,
                aG = aD.getElementsByTagName(aH);
                if (aH === '*') {
                    while ((aC = aG[aF++])) {
                        if (aC.nodeType === 1) {
                            aE.push(aC)
                        }
                    }
                    return aE
                }
                return aG
            };
            av.find.NAME = t.getByName && function (aD, aC) {
                if (typeof aC.getElementsByName !== ak) {
                    return aC.getElementsByName(name)
                }
            };
            av.find.CLASS = t.getByClassName && function (aC, aD) {
                if (typeof aD.getElementsByClassName !== ak && !R) {
                    return aD.getElementsByClassName(aC)
                }
            };
            v = [
            ];
            Z = [
                ':focus'
            ];
            if ((t.qsa = d(aA.querySelectorAll))) {
                T(function (aC) {
                    aC.innerHTML = '<select><option selected=''></option></select>';
                    if (!aC.querySelectorAll('[selected]') .length) {
                        Z.push('\[' + at + '*(?:checked|disabled|ismap|multiple|readonly|selected|value)')
                    }
                    if (!aC.querySelectorAll(':checked') .length) {
                        Z.push(':checked')
                    }
                });
                T(function (aC) {
                    aC.innerHTML = '<input type='hidden' i=''/>';
                    if (aC.querySelectorAll('[i^='']') .length) {
                        Z.push('[*^$]=' + at + '*(?:""|'')')
                    }
                    if (!aC.querySelectorAll(':enabled') .length) {
                        Z.push(':enabled', ':disabled')
                    }
                    aC.querySelectorAll('*,:x');
                    Z.push(',.*:')
                })
            }
            if ((t.matchesSelector = d((X = au.matchesSelector || au.mozMatchesSelector || au.webkitMatchesSelector || au.oMatchesSelector || au.msMatchesSelector)))) {
                T(function (aC) {
                    t.disconnectedMatch = X.call(aC, 'div');
                    X.call(aC, '[s!='']:x');
                    v.push('!=', ay)
                })
            }
            Z = new RegExp(Z.join('|'));
            v = new RegExp(v.join('|'));
            c = d(au.contains) || au.compareDocumentPosition ? function (aE, aF) {
                var aC = aE.nodeType === 9 ? aE.documentElement : aE,
                aD = aF && aF.parentNode;
                return aE === aD || !!(aD && aD.nodeType === 1 && (aC.contains ? aC.contains(aD)  : aE.compareDocumentPosition && aE.compareDocumentPosition(aD) & 16))
            }
             : function (aC, aD) {
                if (aD) {
                    while ((aD = aD.parentNode)) {
                        if (aD === aC) {
                            return true
                        }
                    }
                }
                return false
            };
            f = au.compareDocumentPosition ? function (aD, aE) {
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
                    return aC & 4 ? - 1 : 1
                }
                return aD.compareDocumentPosition ? - 1 : 1
            }
             : function (aG, aH) {
                var aI,
                aD = 0,
                aJ = aG.parentNode,
                aE = aH.parentNode,
                aF = [
                    aG
                ],
                aC = [
                    aH
                ];
                if (aG === aH) {
                    af = true;
                    return 0
                } else {
                    if (!aJ || !aE) {
                        return aG === aA ? - 1 : aH === aA ? 1 : aJ ? - 1 : aE ? 1 : 0
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
                return aD ? S(aF[aD], aC[aD])  : aF[aD] === p ? - 1 : aC[aD] === p ? 1 : 0
            };
            af = false;
            [
                0,
                0
            ].sort(f);
            t.detectDuplicates = af;
            return ai
        };
        B.matches = function (aA, aB) {
            return B(aA, null, null, aB)
        };
        B.matchesSelector = function (aC, aA) {
            if ((aC.ownerDocument || aC) !== ai) {
                ad(aC)
            }
            aA = aA.replace(D, '='$1']');
            if (t.matchesSelector && !R && (!v || !v.test(aA)) && !Z.test(aA)) {
                try {
                    var aD = X.call(aC, aA);
                    if (aD || t.disconnectedMatch || aC.document && aC.document.nodeType !== 11) {
                        return aD
                    }
                } catch (aB) {
                }
            }
            return B(aA, ai, null, [
                aC
            ]) .length > 0
        };
        B.contains = function (aB, aA) {
            if ((aB.ownerDocument || aB) !== ai) {
                ad(aB)
            }
            return c(aB, aA)
        };
        B.attr = function (aB, aC) {
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
            return ((aA = aB.getAttributeNode(aC)) || aB.getAttribute(aC)) && aB[aC] === true ? aC : aA && aA.specified ? aA.value : null
        };
        B.error = function (aA) {
            throw new Error('Syntax error, unrecognized expression: ' + aA)
        };
        B.uniqueSort = function (aC) {
            var aB,
            aA = [
            ],
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
            return aC ? 1 : - 1
        }
        function A(aA) {
            return function (aB) {
                var aC = aB.nodeName.toLowerCase();
                return aC === 'input' && aB.type === aA
            }
        }
        function Q(aA) {
            return function (aB) {
                var aC = aB.nodeName.toLowerCase();
                return (aC === 'input' || aC === 'button') && aB.type === aA
            }
        }
        function aq(aA) {
            return az(function (aB) {
                aB = + aB;
                return az(function (aG, aC) {
                    var aE,
                    aF = aA([], aG.length, aB),
                    aD = aF.length;
                    while (aD--) {
                        if (aG[(aE = aF[aD])]) {
                            aG[aE] = !(aC[aE] = aG[aE])
                        }
                    }
                })
            })
        }
        a = B.getText = function (aA) {
            var aB,
            aD = '',
            aC = 0,
            aE = aA.nodeType;
            if (!aE) {
                for (; (aB = aA[aC]); aC++) {
                    aD += a(aB)
                }
            } else {
                if (aE === 1 || aE === 9 || aE === 11) {
                    if (typeof aA.textContent === 'string') {
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
            find: {
            },
            relative: {
                '>': {
                    dir: 'parentNode',
                    first: true
                },
                ' ': {
                    dir: 'parentNode'
                },
                '+': {
                    dir: 'previousSibling',
                    first: true
                },
                '~': {
                    dir: 'previousSibling'
                }
            },
            preFilter: {
                ATTR: function (aA) {
                    aA[1] = aA[1].replace(E, H);
                    aA[3] = (aA[4] || aA[5] || '') .replace(E, H);
                    if (aA[2] === '~=') {
                        aA[3] = ' ' + aA[3] + ' '
                    }
                    return aA.slice(0, 4)
                },
                CHILD: function (aA) {
                    aA[1] = aA[1].toLowerCase();
                    if (aA[1].slice(0, 3) === 'nth') {
                        if (!aA[3]) {
                            B.error(aA[0])
                        }
                        aA[4] = + (aA[4] ? aA[5] + (aA[6] || 1)  : 2 * (aA[3] === 'even' || aA[3] === 'odd'));
                        aA[5] = + ((aA[7] + aA[8]) || aA[3] === 'odd')
                    } else {
                        if (aA[3]) {
                            B.error(aA[0])
                        }
                    }
                    return aA
                },
                PSEUDO: function (aB) {
                    var aC,
                    aA = !aB[5] && aB[2];
                    if (aa.CHILD.test(aB[0])) {
                        return null
                    }
                    if (aB[4]) {
                        aB[2] = aB[4]
                    } else {
                        if (aA && i.test(aA) && (aC = N(aA, true)) && (aC = aA.indexOf(')', aA.length - aC) - aA.length)) {
                            aB[0] = aB[0].slice(0, aC);
                            aB[2] = aA.slice(0, aC)
                        }
                    }
                    return aB.slice(0, 3)
                }
            },
            filter: {
                TAG: function (aA) {
                    if (aA === '*') {
                        return function () {
                            return true
                        }
                    }
                    aA = aA.replace(E, H) .toLowerCase();
                    return function (aB) {
                        return aB.nodeName && aB.nodeName.toLowerCase() === aA
                    }
                },
                CLASS: function (aB) {
                    var aA = U[aB + ' '];
                    return aA || (aA = new RegExp('(^|' + at + ')' + aB + '(' + at + '|$)')) && U(aB, function (aC) {
                        return aA.test(aC.className || (typeof aC.getAttribute !== ak && aC.getAttribute('class')) || '')
                    })
                },
                ATTR: function (aA, aB, aC) {
                    return function (aD) {
                        var aE = B.attr(aD, aA);
                        if (aE == null) {
                            return aB === '!='
                        }
                        if (!aB) {
                            return true
                        }
                        aE += '';
                        return aB === '=' ? aE === aC : aB === '!=' ? aE !== aC : aB === '^=' ? aC && aE.indexOf(aC) === 0 : aB === '*=' ? aC && aE.indexOf(aC) > - 1 : aB === '$=' ? aC && aE.slice( - aC.length) === aC : aB === '~=' ? (' ' + aE + ' ') .indexOf(aC) > - 1 : aB === '|=' ? aE === aC || aE.slice(0, aC.length + 1) === aC + '-' : false
                    }
                },
                CHILD: function (aG, aD, aE, aC, aF) {
                    var aA = aG.slice(0, 3) !== 'nth',
                    aH = aG.slice( - 4) !== 'last',
                    aB = aD === 'of-type';
                    return aC === 1 && aF === 0 ? function (aI) {
                        return !!aI.parentNode
                    }
                     : function (aQ, aR, aM) {
                        var aI,
                        aJ,
                        aO,
                        aK,
                        aN,
                        aS,
                        aP = aA !== aH ? 'nextSibling' : 'previousSibling',
                        aL = aQ.parentNode,
                        aT = aB && aQ.nodeName.toLowerCase(),
                        aU = !aM && !aB;
                        if (aL) {
                            if (aA) {
                                while (aP) {
                                    aO = aQ;
                                    while ((aO = aO[aP])) {
                                        if (aB ? aO.nodeName.toLowerCase() === aT : aO.nodeType === 1) {
                                            return false
                                        }
                                    }
                                    aS = aP = aG === 'only' && !aS && 'nextSibling'
                                }
                                return true
                            }
                            aS = [
                                aH ? aL.firstChild : aL.lastChild
                            ];
                            if (aH && aU) {
                                aJ = aL[ao] || (aL[ao] = {
                                });
                                aI = aJ[aG] || [];
                                aN = aI[0] === s && aI[1];
                                aK = aI[0] === s && aI[2];
                                aO = aN && aL.childNodes[aN];
                                while ((aO = ++aN && aO && aO[aP] || (aK = aN = 0) || aS.pop())) {
                                    if (aO.nodeType === 1 && ++aK && aO === aQ) {
                                        aJ[aG] = [
                                            s,
                                            aN,
                                            aK
                                        ];
                                        break
                                    }
                                }
                            } else {
                                if (aU && (aI = (aQ[ao] || (aQ[ao] = {
                                })) [aG]) && aI[0] === s) {
                                    aK = aI[1]
                                } else {
                                    while ((aO = ++aN && aO && aO[aP] || (aK = aN = 0) || aS.pop())) {
                                        if ((aB ? aO.nodeName.toLowerCase() === aT : aO.nodeType === 1) && ++aK) {
                                            if (aU) {
                                                (aO[ao] || (aO[ao] = {
                                                })) [aG] = [
                                                    s,
                                                    aK
                                                ]
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
                PSEUDO: function (aA, aB) {
                    var aD,
                    aC = av.pseudos[aA] || av.setFilters[aA.toLowerCase()] || B.error('unsupported pseudo: ' + aA);
                    if (aC[ao]) {
                        return aC(aB)
                    }
                    if (aC.length > 1) {
                        aD = [
                            aA,
                            aA,
                            '',
                            aB
                        ];
                        return av.setFilters.hasOwnProperty(aA.toLowerCase()) ? az(function (aF, aI) {
                            var aG,
                            aH = aC(aF, aB),
                            aE = aH.length;
                            while (aE--) {
                                aG = M.call(aF, aH[aE]);
                                aF[aG] = !(aI[aG] = aH[aE])
                            }
                        })  : function (aE) {
                            return aC(aE, 0, aD)
                        }
                    }
                    return aC
                }
            },
            pseudos: {
                not: az(function (aD) {
                    var aC = [
                    ],
                    aB = [
                    ],
                    aA = ag(aD.replace(F, '$1'));
                    return aA[ao] ? az(function (aG, aI, aK, aF) {
                        var aJ,
                        aH = aA(aG, null, aF, [
                        ]),
                        aE = aG.length;
                        while (aE--) {
                            if ((aJ = aH[aE])) {
                                aG[aE] = !(aI[aE] = aJ)
                            }
                        }
                    })  : function (aE, aF, aG) {
                        aC[0] = aE;
                        aA(aC, null, aG, aB);
                        return !aB.pop()
                    }
                }),
                has: az(function (aA) {
                    return function (aB) {
                        return B(aA, aB) .length > 0
                    }
                }),
                contains: az(function (aA) {
                    return function (aB) {
                        return (aB.textContent || aB.innerText || a(aB)) .indexOf(aA) > - 1
                    }
                }),
                lang: az(function (aA) {
                    if (!h.test(aA || '')) {
                        B.error('unsupported lang: ' + aA)
                    }
                    aA = aA.replace(E, H) .toLowerCase();
                    return function (aB) {
                        var aC;
                        do {
                            if ((aC = R ? aB.getAttribute('xml:lang') || aB.getAttribute('lang')  : aB.lang)) {
                                aC = aC.toLowerCase();
                                return aC === aA || aC.indexOf(aA + '-') === 0
                            }
                        } while ((aB = aB.parentNode) && aB.nodeType === 1);
                        return false
                    }
                }),
                target: function (aB) {
                    var aA = w.location && w.location.hash;
                    return aA && aA.slice(1) === aB.id
                },
                root: function (aA) {
                    return aA === au
                },
                focus: function (aA) {
                    return aA === ai.activeElement && (!ai.hasFocus || ai.hasFocus()) && !!(aA.type || aA.href || ~aA.tabIndex)
                },
                enabled: function (aA) {
                    return aA.disabled === false
                },
                disabled: function (aA) {
                    return aA.disabled === true
                },
                checked: function (aB) {
                    var aA = aB.nodeName.toLowerCase();
                    return (aA === 'input' && !!aB.checked) || (aA === 'option' && !!aB.selected)
                },
                selected: function (aA) {
                    if (aA.parentNode) {
                        aA.parentNode.selectedIndex
                    }
                    return aA.selected === true
                },
                empty: function (aA) {
                    for (aA = aA.firstChild; aA; aA = aA.nextSibling) {
                        if (aA.nodeName > '@' || aA.nodeType === 3 || aA.nodeType === 4) {
                            return false
                        }
                    }
                    return true
                },
                parent: function (aA) {
                    return !av.pseudos.empty(aA)
                },
                header: function (aA) {
                    return ax.test(aA.nodeName)
                },
                input: function (aA) {
                    return O.test(aA.nodeName)
                },
                button: function (aA) {
                    var aB = aA.nodeName.toLowerCase();
                    return aB === 'input' && aA.type === 'button' || aB === 'button'
                },
                text: function (aA) {
                    var aB;
                    return aA.nodeName.toLowerCase() === 'input' && aA.type === 'text' && ((aB = aA.getAttribute('type')) == null || aB.toLowerCase() === aA.type)
                },
                first: aq(function () {
                    return [0]
                }),
                last: aq(function (aB, aA) {
                    return [aA - 1]
                }),
                eq: aq(function (aC, aA, aB) {
                    return [aB < 0 ? aB + aA : aB]
                }),
                even: aq(function (aC, aA) {
                    var aB = 0;
                    for (; aB < aA; aB += 2) {
                        aC.push(aB)
                    }
                    return aC
                }),
                odd: aq(function (aC, aA) {
                    var aB = 1;
                    for (; aB < aA; aB += 2) {
                        aC.push(aB)
                    }
                    return aC
                }),
                lt: aq(function (aD, aA, aB) {
                    var aC = aB < 0 ? aB + aA : aB;
                    for (; --aC >= 0; ) {
                        aD.push(aC)
                    }
                    return aD
                }),
                gt: aq(function (aD, aA, aB) {
                    var aC = aB < 0 ? aB + aA : aB;
                    for (; ++aC < aA; ) {
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
            var aJ,
            aE,
            aC,
            aB,
            aD,
            aI,
            aH,
            aG = ap[aF + ' '];
            if (aG) {
                return aA ? 0 : aG.slice(0)
            }
            aD = aF;
            aI = [
            ];
            aH = av.preFilter;
            while (aD) {
                if (!aJ || (aE = C.exec(aD))) {
                    if (aE) {
                        aD = aD.slice(aE[0].length) || aD
                    }
                    aI.push(aC = [
                    ])
                }
                aJ = false;
                if ((aE = aj.exec(aD))) {
                    aJ = aE.shift();
                    aC.push({
                        value: aJ,
                        type: aE[0].replace(F, ' ')
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
            return aA ? aD.length : aD ? B.error(aF)  : ap(aF, aI) .slice(0)
        }
        function L(aA) {
            var aB = 0,
            aC = aA.length,
            aD = '';
            for (; aB < aC; aB++) {
                aD += aA[aB].value
            }
            return aD
        }
        function G(aB, aD, aC) {
            var aF = aD.dir,
            aA = aC && aF === 'parentNode',
            aE = I++;
            return aD.first ? function (aI, aG, aH) {
                while ((aI = aI[aF])) {
                    if (aI.nodeType === 1 || aA) {
                        return aB(aI, aG, aH)
                    }
                }
            }
             : function (aK, aM, aG) {
                var aI,
                aH,
                aL,
                aJ = s + ' ' + aE;
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
                            aL = aK[ao] || (aK[ao] = {
                            });
                            if ((aH = aL[aF]) && aH[0] === aJ) {
                                if ((aI = aH[1]) === true || aI === V) {
                                    return aI === true
                                }
                            } else {
                                aH = aL[aF] = [
                                    aJ
                                ];
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
            return aA.length > 1 ? function (aB, aC, aE) {
                var aD = aA.length;
                while (aD--) {
                    if (!aA[aD](aB, aC, aE)) {
                        return false
                    }
                }
                return true
            }
             : aA[0]
        }
        function ab(aG, aJ, aI, aH, aD) {
            var aF,
            aA = [
            ],
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
            return az(function (aL, aO, aG, aM) {
                var aJ,
                aN,
                aR,
                aS = [
                ],
                aK = [
                ],
                aH = aO.length,
                aI = aL || y(aE || '*', aG.nodeType ? [
                    aG
                ] : aG, [
                ]),
                aQ = aD && (aL || !aE) ? ab(aI, aS, aD, aG, aM)  : aI,
                aP = aB ? aA || (aL ? aD : aH || aC) ? [
                ] : aO : aQ;
                if (aB) {
                    aB(aQ, aP, aG, aM)
                }
                if (aC) {
                    aJ = ab(aP, aK);
                    aC(aJ, [
                    ], aG, aM);
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
                            aJ = [
                            ];
                            aN = aP.length;
                            while (aN--) {
                                if ((aR = aP[aN])) {
                                    aJ.push((aQ[aN] = aR))
                                }
                            }
                            aA(null, (aP = [
                            ]), aJ, aM)
                        }
                        aN = aP.length;
                        while (aN--) {
                            if ((aR = aP[aN]) && (aJ = aA ? M.call(aL, aR)  : aS[aN]) > - 1) {
                                aL[aJ] = !(aO[aJ] = aR)
                            }
                        }
                    }
                } else {
                    aP = ab(aP === aO ? aP.splice(aH, aP.length)  : aP);
                    if (aA) {
                        aA(null, aO, aP, aM)
                    } else {
                        W.apply(aO, aP)
                    }
                }
            })
        }
        function an(aF) {
            var aA,
            aH,
            aK,
            aG = aF.length,
            aC = av.relative[aF[0].type],
            aB = aC || av.relative[' '],
            aJ = aC ? 1 : 0,
            aE = G(function (aL) {
                return aL === aA
            }, aB, true),
            aD = G(function (aL) {
                return M.call(aA, aL) > - 1
            }, aB, true),
            aI = [
                function (aL, aM, aN) {
                    return (!aC && (aN || aM !== q)) || ((aA = aM) .nodeType ? aE(aL, aM, aN)  : aD(aL, aM, aN))
                }
            ];
            for (; aJ < aG; aJ++) {
                if ((aH = av.relative[aF[aJ].type])) {
                    aI = [
                        G(r(aI), aH)
                    ]
                } else {
                    aH = av.filter[aF[aJ].type].apply(null, aF[aJ].matches);
                    if (aH[ao]) {
                        aK = ++aJ;
                        for (; aK < aG; aK++) {
                            if (av.relative[aF[aK].type]) {
                                break
                            }
                        }
                        return P(aJ > 1 && r(aI), aJ > 1 && L(aF.slice(0, aJ - 1)) .replace(F, '$1'), aH, aJ < aK && an(aF.slice(aJ, aK)), aK < aG && an((aF = aF.slice(aK))), aK < aG && L(aF))
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
            aE = function (aM, aQ, aO, aR, aT) {
                var aP,
                aN,
                aL,
                aV = [
                ],
                aG = 0,
                aS = '0',
                aI = aM && [],
                aK = aT != null,
                aJ = q,
                aU = aM || aB && av.find.TAG('*', aT && aQ.parentNode || aQ),
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
                                if (!(aI[aS] || aV[aS])) {
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
            return aF ? az(aE)  : aE
        }
        ag = B.compile = function (aF, aA) {
            var aD,
            aE = [
            ],
            aB = [
            ],
            aC = b[aF + ' '];
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
            var aF,
            aB,
            aJ,
            aA,
            aC,
            aE = N(aI);
            if (!aD) {
                if (aE.length === 1) {
                    aB = aE[0] = aE[0].slice(0);
                    if (aB.length > 2 && (aJ = aB[0]) .type === 'ID' && aG.nodeType === 9 && !R && av.relative[aB[1].type]) {
                        aG = av.find.ID(aJ.matches[0].replace(E, H), aG) [0];
                        if (!aG) {
                            return aH
                        }
                        aI = aI.slice(aB.shift() .value.length)
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
            ag(aI, aE) (aD, aG, R, aH, ac.test(aI));
            return aH
        }
        av.pseudos.nth = av.pseudos.eq;
        function ah() {
        }
        av.filters = ah.prototype = av.pseudos;
        av.setFilters = new ah();
        ad();
        B.attr = dI.attr;
        dI.find = B;
        dI.expr = B.selectors;
        dI.expr[':'] = dI.expr.pseudos;
        dI.unique = B.uniqueSort;
        dI.text = B.getText;
        dI.isXMLDoc = B.isXML;
        dI.contains = B.contains
    }) (dt);
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
        find: function (c) {
            var f,
            a,
            b,
            d = this.length;
            if (typeof c !== 'string') {
                b = this;
                return this.pushStack(dI(c) .filter(function () {
                    for (f = 0; f < d; f++) {
                        if (dI.contains(b[f], this)) {
                            return true
                        }
                    }
                }))
            }
            a = [
            ];
            for (f = 0; f < d; f++) {
                dI.find(c, this[f], a)
            }
            a = this.pushStack(d > 1 ? dI.unique(a)  : a);
            a.selector = (this.selector ? this.selector + ' ' : '') + c;
            return a
        },
        has: function (a) {
            var b,
            c = dI(a, this),
            d = c.length;
            return this.filter(function () {
                for (b = 0; b < d; b++) {
                    if (dI.contains(this, c[b])) {
                        return true
                    }
                }
            })
        },
        not: function (a) {
            return this.pushStack(cq(this, a, false))
        },
        filter: function (a) {
            return this.pushStack(cq(this, a, true))
        },
        is: function (a) {
            return !!a && (typeof a === 'string' ? b3.test(a) ? dI(a, this.context) .index(this[0]) >= 0 : dI.filter(a, this) .length > 0 : this.filter(a) .length > 0)
        },
        closest: function (h, a) {
            var g,
            b = 0,
            f = this.length,
            d = [
            ],
            c = b3.test(h) || typeof h !== 'string' ? dI(h, a || this.context)  : 0;
            for (; b < f; b++) {
                g = this[b];
                while (g && g.ownerDocument && g !== a && g.nodeType !== 11) {
                    if (c ? c.index(g) > - 1 : dI.find.matchesSelector(g, h)) {
                        d.push(g);
                        break
                    }
                    g = g.parentNode
                }
            }
            return this.pushStack(d.length > 1 ? dI.unique(d)  : d)
        },
        index: function (a) {
            if (!a) {
                return (this[0] && this[0].parentNode) ? this.first() .prevAll() .length : - 1
            }
            if (typeof a === 'string') {
                return dI.inArray(this[0], dI(a))
            }
            return dI.inArray(a.jquery ? a[0] : a, this)
        },
        add: function (d, c) {
            var a = typeof d === 'string' ? dI(d, c)  : dI.makeArray(d && d.nodeType ? [
                d
            ] : d),
            b = dI.merge(this.get(), a);
            return this.pushStack(dI.unique(b))
        },
        addBack: function (a) {
            return this.add(a == null ? this.prevObject : this.prevObject.filter(a))
        }
    });
    dI.fn.andSelf = dI.fn.addBack;
    function cf(a, b) {
        do {
            a = a[b]
        } while (a && a.nodeType !== 1);
        return a
    }
    dI.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function (a) {
            return dI.dir(a, 'parentNode')
        },
        parentsUntil: function (c, a, b) {
            return dI.dir(c, 'parentNode', b)
        },
        next: function (a) {
            return cf(a, 'nextSibling')
        },
        prev: function (a) {
            return cf(a, 'previousSibling')
        },
        nextAll: function (a) {
            return dI.dir(a, 'nextSibling')
        },
        prevAll: function (a) {
            return dI.dir(a, 'previousSibling')
        },
        nextUntil: function (c, a, b) {
            return dI.dir(c, 'nextSibling', b)
        },
        prevUntil: function (c, a, b) {
            return dI.dir(c, 'previousSibling', b)
        },
        siblings: function (a) {
            return dI.sibling((a.parentNode || {
            }) .firstChild, a)
        },
        children: function (a) {
            return dI.sibling(a.firstChild)
        },
        contents: function (a) {
            return dI.nodeName(a, 'iframe') ? a.contentDocument || a.contentWindow.document : dI.merge([], a.childNodes)
        }
    }, function (b, a) {
        dI.fn[b] = function (f, d) {
            var c = dI.map(this, a, f);
            if (!dy.test(b)) {
                d = f
            }
            if (d && typeof d === 'string') {
                c = dI.filter(d, c)
            }
            c = this.length > 1 && !dU[b] ? dI.unique(c)  : c;
            if (this.length > 1 && d4.test(b)) {
                c = c.reverse()
            }
            return this.pushStack(c)
        }
    });
    dI.extend({
        filter: function (b, a, c) {
            if (c) {
                b = ':not(' + b + ')'
            }
            return a.length === 1 ? dI.find.matchesSelector(a[0], b) ? [
                a[0]
            ] : [
            ] : dI.find.matches(b, a)
        },
        dir: function (b, c, f) {
            var d = [
            ],
            a = b[c];
            while (a && a.nodeType !== 9 && (f === dX || a.nodeType !== 1 || !dI(a) .is(f))) {
                if (a.nodeType === 1) {
                    d.push(a)
                }
                a = a[c]
            }
            return d
        },
        sibling: function (b, c) {
            var a = [
            ];
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
            return dI.grep(a, function (g, h) {
                var f = !!b.call(g, h, g);
                return f === d
            })
        } else {
            if (b.nodeType) {
                return dI.grep(a, function (f) {
                    return (f === b) === d
                })
            } else {
                if (typeof b === 'string') {
                    var c = dI.grep(a, function (f) {
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
        return dI.grep(a, function (f) {
            return (dI.inArray(f, b) >= 0) === d
        })
    }
    function c6(a) {
        var b = dE.split('|'),
        c = a.createDocumentFragment();
        if (c.createElement) {
            while (b.length) {
                c.createElement(b.pop())
            }
        }
        return c
    }
    var dE = 'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video',
    cN = / jQuery\d+="(?:null|\d+)"/g,
    d6 = new RegExp('<(?:' + dE + ')[\s/>]', 'i'),
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
        option: [
            1,
            '<select multiple='multiple'>',
            '</select>'
        ],
        legend: [
            1,
            '<fieldset>',
            '</fieldset>'
        ],
        area: [
            1,
            '<map>',
            '</map>'
        ],
        param: [
            1,
            '<object>',
            '</object>'
        ],
        thead: [
            1,
            '<table>',
            '</table>'
        ],
        tr: [
            2,
            '<table><tbody>',
            '</tbody></table>'
        ],
        col: [
            2,
            '<table><tbody></tbody><colgroup>',
            '</colgroup></table>'
        ],
        td: [
            3,
            '<table><tbody><tr>',
            '</tr></tbody></table>'
        ],
        _default: dI.support.htmlSerialize ? [
            0,
            '',
            ''
        ] : [
            1,
            'X<div>',
            '</div>'
        ]
    },
    ck = c6(eA),
    eE = ck.appendChild(eA.createElement('div'));
    cK.optgroup = cK.option;
    cK.tbody = cK.tfoot = cK.colgroup = cK.caption = cK.thead;
    cK.th = cK.td;
    dI.fn.extend({
        text: function (a) {
            return dI.access(this, function (b) {
                return b === dX ? dI.text(this)  : this.empty() .append((this[0] && this[0].ownerDocument || eA) .createTextNode(b))
            }, null, a, arguments.length)
        },
        wrapAll: function (b) {
            if (dI.isFunction(b)) {
                return this.each(function (c) {
                    dI(this) .wrapAll(b.call(this, c))
                })
            }
            if (this[0]) {
                var a = dI(b, this[0].ownerDocument) .eq(0) .clone(true);
                if (this[0].parentNode) {
                    a.insertBefore(this[0])
                }
                a.map(function () {
                    var c = this;
                    while (c.firstChild && c.firstChild.nodeType === 1) {
                        c = c.firstChild
                    }
                    return c
                }) .append(this)
            }
            return this
        },
        wrapInner: function (a) {
            if (dI.isFunction(a)) {
                return this.each(function (b) {
                    dI(this) .wrapInner(a.call(this, b))
                })
            }
            return this.each(function () {
                var b = dI(this),
                c = b.contents();
                if (c.length) {
                    c.wrapAll(a)
                } else {
                    b.append(a)
                }
            })
        },
        wrap: function (b) {
            var a = dI.isFunction(b);
            return this.each(function (c) {
                dI(this) .wrapAll(a ? b.call(this, c)  : b)
            })
        },
        unwrap: function () {
            return this.parent() .each(function () {
                if (!dI.nodeName(this, 'body')) {
                    dI(this) .replaceWith(this.childNodes)
                }
            }) .end()
        },
        append: function () {
            return this.domManip(arguments, true, function (a) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    this.appendChild(a)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, true, function (a) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    this.insertBefore(a, this.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, false, function (a) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(a, this)
                }
            })
        },
        after: function () {
            return this.domManip(arguments, false, function (a) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                }
            })
        },
        remove: function (d, a) {
            var b,
            c = 0;
            for (; (b = this[c]) != null; c++) {
                if (!d || dI.filter(d, [
                    b
                ]) .length > 0) {
                    if (!a && b.nodeType === 1) {
                        dI.cleanData(eC(b))
                    }
                    if (b.parentNode) {
                        if (a && dI.contains(b.ownerDocument, b)) {
                            d9(eC(b, 'script'))
                        }
                        b.parentNode.removeChild(b)
                    }
                }
            }
            return this
        },
        empty: function () {
            var a,
            b = 0;
            for (; (a = this[b]) != null; b++) {
                if (a.nodeType === 1) {
                    dI.cleanData(eC(a, false))
                }
                while (a.firstChild) {
                    a.removeChild(a.firstChild)
                }
                if (a.options && dI.nodeName(a, 'select')) {
                    a.options.length = 0
                }
            }
            return this
        },
        clone: function (a, b) {
            a = a == null ? false : a;
            b = b == null ? a : b;
            return this.map(function () {
                return dI.clone(this, a, b)
            })
        },
        html: function (a) {
            return dI.access(this, function (g) {
                var b = this[0] || {
                },
                c = 0,
                d = this.length;
                if (g === dX) {
                    return b.nodeType === 1 ? b.innerHTML.replace(cN, '')  : dX
                }
                if (typeof g === 'string' && !eF.test(g) && (dI.support.htmlSerialize || !d6.test(g)) && (dI.support.leadingWhitespace || !cn.test(g)) && !cK[(ey.exec(g) || ['',
                '']) [1].toLowerCase()]) {
                    g = g.replace(eb, '<$1></$2>');
                    try {
                        for (; c < d; c++) {
                            b = this[c] || {
                            };
                            if (b.nodeType === 1) {
                                dI.cleanData(eC(b, false));
                                b.innerHTML = g
                            }
                        }
                        b = 0
                    } catch (f) {
                    }
                }
                if (b) {
                    this.empty() .append(g)
                }
            }, null, a, arguments.length)
        },
        replaceWith: function (a) {
            var b = dI.isFunction(a);
            if (!b && typeof a !== 'string') {
                a = dI(a) .not(this) .detach()
            }
            return this.domManip([a], true, function (f) {
                var c = this.nextSibling,
                d = this.parentNode;
                if (d) {
                    dI(this) .remove();
                    d.insertBefore(f, c)
                }
            })
        },
        detach: function (a) {
            return this.remove(a, true)
        },
        domManip: function (h, a, b) {
            h = cx.apply([], h);
            var j,
            p,
            o,
            l,
            d,
            i,
            k = 0,
            n = this.length,
            f = this,
            c = n - 1,
            g = h[0],
            m = dI.isFunction(g);
            if (m || !(n <= 1 || typeof g !== 'string' || dI.support.checkClone || !eI.test(g))) {
                return this.each(function (q) {
                    var r = f.eq(q);
                    if (m) {
                        h[0] = g.call(this, q, a ? r.html()  : dX)
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
                    a = a && dI.nodeName(j, 'tr');
                    l = dI.map(eC(i, 'script'), eh);
                    o = l.length;
                    for (; k < n; k++) {
                        p = i;
                        if (k !== c) {
                            p = dI.clone(p, true, true);
                            if (o) {
                                dI.merge(l, eC(p, 'script'))
                            }
                        }
                        b.call(a && dI.nodeName(this[k], 'table') ? b5(this[k], 'tbody')  : this[k], p, k)
                    }
                    if (o) {
                        d = l[l.length - 1].ownerDocument;
                        dI.map(l, ed);
                        for (k = 0; k < o; k++) {
                            p = l[k];
                            if (dT.test(p.type || '') && !dI._data(p, 'globalEval') && dI.contains(d, p)) {
                                if (p.src) {
                                    dI.ajax({
                                        url: p.src,
                                        type: 'GET',
                                        dataType: 'script',
                                        async: false,
                                        global: false,
                                        'throws': true
                                    })
                                } else {
                                    dI.globalEval((p.text || p.textContent || p.innerHTML || '') .replace(cv, ''))
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
        return a.getElementsByTagName(b) [0] || a.appendChild(a.ownerDocument.createElement(b))
    }
    function eh(a) {
        var b = a.getAttributeNode('type');
        a.type = (b && b.specified) + '/' + a.type;
        return a
    }
    function ed(a) {
        var b = b9.exec(a.type);
        if (b) {
            a.type = b[1]
        } else {
            a.removeAttribute('type')
        }
        return a
    }
    function d9(d, b) {
        var a,
        c = 0;
        for (; (a = d[c]) != null; c++) {
            dI._data(a, 'globalEval', !b || dI._data(b[c], 'globalEval'))
        }
    }
    function a8(c, g) {
        if (g.nodeType !== 1 || !dI.hasData(c)) {
            return
        }
        var i,
        a,
        h,
        d = dI._data(c),
        f = dI._data(g, d),
        b = d.events;
        if (b) {
            delete f.handle;
            f.events = {
            };
            for (i in b) {
                for (a = 0, h = b[i].length; a < h; a++) {
                    dI.event.add(g, i, b[i][a])
                }
            }
        }
        if (f.data) {
            f.data = dI.extend({
            }, f.data)
        }
    }
    function c8(f, c) {
        var d,
        a,
        b;
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
        if (d === 'script' && c.text !== f.text) {
            eh(c) .text = f.text;
            ed(c)
        } else {
            if (d === 'object') {
                if (c.parentNode) {
                    c.outerHTML = f.outerHTML
                }
                if (dI.support.html5Clone && (f.innerHTML && !dI.trim(c.innerHTML))) {
                    c.innerHTML = f.innerHTML
                }
            } else {
                if (d === 'input' && en.test(f.type)) {
                    c.defaultChecked = c.checked = f.checked;
                    if (c.value !== f.value) {
                        c.value = f.value
                    }
                } else {
                    if (d === 'option') {
                        c.defaultSelected = c.selected = f.defaultSelected
                    } else {
                        if (d === 'input' || d === 'textarea') {
                            c.defaultValue = f.defaultValue
                        }
                    }
                }
            }
        }
    }
    dI.each({
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
    }, function (b, a) {
        dI.fn[b] = function (d) {
            var c,
            h = 0,
            i = [
            ],
            f = dI(d),
            g = f.length - 1;
            for (; h <= g; h++) {
                c = h === g ? this : this.clone(true);
                dI(f[h]) [a](c);
                et.apply(i, c.get())
            }
            return this.pushStack(i)
        }
    });
    function eC(a, f) {
        var d,
        g,
        b = 0,
        c = typeof a.getElementsByTagName !== cF ? a.getElementsByTagName(f || '*')  : typeof a.querySelectorAll !== cF ? a.querySelectorAll(f || '*')  : dX;
        if (!c) {
            for (c = [
            ], d = a.childNodes || a; (g = d[b]) != null; b++) {
                if (!f || dI.nodeName(g, f)) {
                    c.push(g)
                } else {
                    dI.merge(c, eC(g, f))
                }
            }
        }
        return f === dX || f && dI.nodeName(a, f) ? dI.merge([a], c)  : c
    }
    function dm(a) {
        if (en.test(a.type)) {
            a.defaultChecked = a.checked
        }
    }
    dI.extend({
        clone: function (h, g, i) {
            var d,
            j,
            a,
            f,
            c,
            b = dI.contains(h.ownerDocument, h);
            if (dI.support.html5Clone || dI.isXMLDoc(h) || !d6.test('<' + h.nodeName + '>')) {
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
            d = eC(a, 'script');
            if (d.length > 0) {
                d9(d, !b && eC(h, 'script'))
            }
            d = c = j = null;
            return a
        },
        buildFragment: function (n, o, h, b) {
            var g,
            k,
            i,
            c,
            a,
            d,
            p,
            j = n.length,
            l = c6(o),
            m = [
            ],
            f = 0;
            for (; f < j; f++) {
                k = n[f];
                if (k || k === 0) {
                    if (dI.type(k) === 'object') {
                        dI.merge(m, k.nodeType ? [
                            k
                        ] : k)
                    } else {
                        if (!d8.test(k)) {
                            m.push(o.createTextNode(k))
                        } else {
                            c = c || l.appendChild(o.createElement('div'));
                            a = (ey.exec(k) || ['',
                            '']) [1].toLowerCase();
                            p = cK[a] || cK._default;
                            c.innerHTML = p[1] + k.replace(eb, '<$1></$2>') + p[2];
                            g = p[0];
                            while (g--) {
                                c = c.lastChild
                            }
                            if (!dI.support.leadingWhitespace && cn.test(k)) {
                                m.push(o.createTextNode(cn.exec(k) [0]))
                            }
                            if (!dI.support.tbody) {
                                k = a === 'table' && !dh.test(k) ? c.firstChild : p[1] === '<table>' && !dh.test(k) ? c : 0;
                                g = k && k.childNodes.length;
                                while (g--) {
                                    if (dI.nodeName((d = k.childNodes[g]), 'tbody') && !d.childNodes.length) {
                                        k.removeChild(d)
                                    }
                                }
                            }
                            dI.merge(m, c.childNodes);
                            c.textContent = '';
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
                dI.grep(eC(m, 'input'), dm)
            }
            f = 0;
            while ((k = m[f++])) {
                if (b && dI.inArray(k, b) !== - 1) {
                    continue
                }
                i = dI.contains(k.ownerDocument, k);
                c = eC(l.appendChild(k), 'script');
                if (i) {
                    d9(c)
                }
                if (h) {
                    g = 0;
                    while ((k = c[g++])) {
                        if (dT.test(k.type || '')) {
                            h.push(k)
                        }
                    }
                }
            }
            c = null;
            return l
        },
        cleanData: function (j, b) {
            var k,
            c,
            l,
            h,
            g = 0,
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
    var d5,
    cG,
    cY,
    dK = /alpha\([^)]*\)/i,
    cj = /opacity\s*=\s*([^)]*)/,
    cO = /^(top|right|bottom|left)$/,
    cV = /^(none|table(?!-c[ea]).+)/,
    ce = /^margin/,
    cP = new RegExp('^(' + cc + ')(.*)$', 'i'),
    cz = new RegExp('^(' + cc + ')(?!px)[a-z%]+$', 'i'),
    cW = new RegExp('^([+-])=(' + cc + ')', 'i'),
    dA = {
        BODY: 'block'
    },
    cL = {
        position: 'absolute',
        visibility: 'hidden',
        display: 'block'
    },
    dp = {
        letterSpacing: 0,
        fontWeight: 400
    },
    b4 = [
        'Top',
        'Right',
        'Bottom',
        'Left'
    ],
    dl = [
        'Webkit',
        'O',
        'Moz',
        'ms'
    ];
    function dL(a, c) {
        if (c in a) {
            return c
        }
        var f = c.charAt(0) .toUpperCase() + c.slice(1),
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
        return dI.css(a, 'display') === 'none' || !dI.contains(a.ownerDocument, a)
    }
    function er(d, h) {
        var c,
        i,
        g,
        f = [
        ],
        b = 0,
        a = d.length;
        for (; b < a; b++) {
            i = d[b];
            if (!i.style) {
                continue
            }
            f[b] = dI._data(i, 'olddisplay');
            c = i.style.display;
            if (h) {
                if (!f[b] && c === 'none') {
                    i.style.display = ''
                }
                if (i.style.display === '' && de(i)) {
                    f[b] = dI._data(i, 'olddisplay', c0(i.nodeName))
                }
            } else {
                if (!f[b]) {
                    g = de(i);
                    if (c && c !== 'none' || !g) {
                        dI._data(i, 'olddisplay', g ? c : dI.css(i, 'display'))
                    }
                }
            }
        }
        for (b = 0; b < a; b++) {
            i = d[b];
            if (!i.style) {
                continue
            }
            if (!h || i.style.display === 'none' || i.style.display === '') {
                i.style.display = h ? f[b] || '' : 'none'
            }
        }
        return d
    }
    dI.fn.extend({
        css: function (b, a) {
            return dI.access(this, function (h, c, g) {
                var d,
                i,
                f = {
                },
                j = 0;
                if (dI.isArray(c)) {
                    i = cG(h);
                    d = c.length;
                    for (; j < d; j++) {
                        f[c[j]] = dI.css(h, c[j], false, i)
                    }
                    return f
                }
                return g !== dX ? dI.style(h, c, g)  : dI.css(h, c)
            }, b, a, arguments.length > 1)
        },
        show: function () {
            return er(this, true)
        },
        hide: function () {
            return er(this)
        },
        toggle: function (a) {
            var b = typeof a === 'boolean';
            return this.each(function () {
                if (b ? a : de(this)) {
                    dI(this) .show()
                } else {
                    dI(this) .hide()
                }
            })
        }
    });
    dI.extend({
        cssHooks: {
            opacity: {
                get: function (b, c) {
                    if (c) {
                        var a = cY(b, 'opacity');
                        return a === '' ? '1' : a
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
            'float': dI.support.cssFloat ? 'cssFloat' : 'styleFloat'
        },
        style: function (j, k, b, i) {
            if (!j || j.nodeType === 3 || j.nodeType === 8 || !j.style) {
                return
            }
            var d,
            c,
            a,
            g = dI.camelCase(k),
            h = j.style;
            k = dI.cssProps[g] || (dI.cssProps[g] = dL(h, g));
            a = dI.cssHooks[k] || dI.cssHooks[g];
            if (b !== dX) {
                c = typeof b;
                if (c === 'string' && (d = cW.exec(b))) {
                    b = (d[1] + 1) * d[2] + parseFloat(dI.css(j, k));
                    c = 'number'
                }
                if (b == null || c === 'number' && isNaN(b)) {
                    return
                }
                if (c === 'number' && !dI.cssNumber[g]) {
                    b += 'px'
                }
                if (!dI.support.clearCloneStyle && b === '' && k.indexOf('background') === 0) {
                    h[k] = 'inherit'
                }
                if (!a || !('set' in a) || (b = a.set(j, b, i)) !== dX) {
                    try {
                        h[k] = b
                    } catch (f) {
                    }
                }
            } else {
                if (a && 'get' in a && (d = a.get(j, false, i)) !== dX) {
                    return d
                }
                return h[k]
            }
        },
        css: function (d, i, g, h) {
            var a,
            c,
            f,
            b = dI.camelCase(i);
            i = dI.cssProps[b] || (dI.cssProps[b] = dL(d.style, b));
            f = dI.cssHooks[i] || dI.cssHooks[b];
            if (f && 'get' in f) {
                c = f.get(d, true, g)
            }
            if (c === dX) {
                c = cY(d, i, h)
            }
            if (c === 'normal' && i in dp) {
                c = dp[i]
            }
            if (g === '' || g) {
                a = parseFloat(c);
                return g === true || dI.isNumeric(a) ? a || 0 : c
            }
            return c
        },
        swap: function (g, h, c, a) {
            var b,
            f,
            d = {
            };
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
        cG = function (a) {
            return dt.getComputedStyle(a, null)
        };
        cY = function (f, j, c) {
            var i,
            h,
            a,
            d = c || cG(f),
            b = d ? d.getPropertyValue(j) || d[j] : dX,
            g = f.style;
            if (d) {
                if (b === '' && !dI.contains(f.ownerDocument, f)) {
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
            cG = function (a) {
                return a.currentStyle
            };
            cY = function (i, h, c) {
                var j,
                d,
                b,
                f = c || cG(i),
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
                    g.left = h === 'fontSize' ? '1em' : a;
                    a = g.pixelLeft + 'px';
                    g.left = j;
                    if (b) {
                        d.left = b
                    }
                }
                return a === '' ? 'auto' : a
            }
        }
    }
    function cw(d, b, a) {
        var c = cP.exec(b);
        return c ? Math.max(0, c[1] - (a || 0)) + (c[2] || 'px')  : b
    }
    function dj(h, f, g, c, a) {
        var b = g === (c ? 'border' : 'content') ? 4 : f === 'width' ? 1 : 0,
        d = 0;
        for (; b < 4; b += 2) {
            if (g === 'margin') {
                d += dI.css(h, g + b4[b], true, a)
            }
            if (c) {
                if (g === 'content') {
                    d -= dI.css(h, 'padding' + b4[b], true, a)
                }
                if (g !== 'margin') {
                    d -= dI.css(h, 'border' + b4[b] + 'Width', true, a)
                }
            } else {
                d += dI.css(h, 'padding' + b4[b], true, a);
                if (g !== 'padding') {
                    d += dI.css(h, 'border' + b4[b] + 'Width', true, a)
                }
            }
        }
        return d
    }
    function ef(h, f, g) {
        var a = true,
        d = f === 'width' ? h.offsetWidth : h.offsetHeight,
        b = cG(h),
        c = dI.support.boxSizing && dI.css(h, 'boxSizing', false, b) === 'border-box';
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
        return (d + dj(h, f, g || (c ? 'border' : 'content'), a, b)) + 'px'
    }
    function c0(b) {
        var c = eA,
        a = dA[b];
        if (!a) {
            a = dw(b, c);
            if (a === 'none' || !a) {
                d5 = (d5 || dI('<iframe frameborder='0' width='0' height='0'/>') .css('cssText', 'display:block !important')) .appendTo(c.documentElement);
                c = (d5[0].contentWindow || d5[0].contentDocument) .document;
                c.write('<!doctype html><html><body>');
                c.close();
                a = dw(b, c);
                d5.detach()
            }
            dA[b] = a
        }
        return a
    }
    function dw(d, a) {
        var c = dI(a.createElement(d)) .appendTo(a.body),
        b = dI.css(c[0], 'display');
        c.remove();
        return b
    }
    dI.each(['height',
    'width'], function (a, b) {
        dI.cssHooks[b] = {
            get: function (f, c, d) {
                if (c) {
                    return f.offsetWidth === 0 && cV.test(dI.css(f, 'display')) ? dI.swap(f, cL, function () {
                        return ef(f, b, d)
                    })  : ef(f, b, d)
                }
            },
            set: function (g, f, d) {
                var c = d && cG(g);
                return cw(g, f, d ? dj(g, b, d, dI.support.boxSizing && dI.css(g, 'boxSizing', false, c) === 'border-box', c)  : 0)
            }
        }
    });
    if (!dI.support.opacity) {
        dI.cssHooks.opacity = {
            get: function (a, b) {
                return cj.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || '') ? (0.01 * parseFloat(RegExp.$1)) + '' : b ? '1' : ''
            },
            set: function (g, f) {
                var a = g.style,
                d = g.currentStyle,
                c = dI.isNumeric(f) ? 'alpha(opacity=' + f * 100 + ')' : '',
                b = d && d.filter || a.filter || '';
                a.zoom = 1;
                if ((f >= 1 || f === '') && dI.trim(b.replace(dK, '')) === '' && a.removeAttribute) {
                    a.removeAttribute('filter');
                    if (f === '' || d && !d.filter) {
                        return
                    }
                }
                a.filter = dK.test(b) ? b.replace(dK, c)  : b + ' ' + c
            }
        }
    }
    dI(function () {
        if (!dI.support.reliableMarginRight) {
            dI.cssHooks.marginRight = {
                get: function (a, b) {
                    if (b) {
                        return dI.swap(a, {
                            display: 'inline-block'
                        }, cY, [
                            a,
                            'marginRight'
                        ])
                    }
                }
            }
        }
        if (!dI.support.pixelPosition && dI.fn.position) {
            dI.each(['top',
            'left'], function (b, a) {
                dI.cssHooks[a] = {
                    get: function (c, d) {
                        if (d) {
                            d = cY(c, a);
                            return cz.test(d) ? dI(c) .position() [a] + 'px' : d
                        }
                    }
                }
            })
        }
    });
    if (dI.expr && dI.expr.filters) {
        dI.expr.filters.hidden = function (a) {
            return a.offsetWidth <= 0 && a.offsetHeight <= 0 || (!dI.support.reliableHiddenOffsets && ((a.style && a.style.display) || dI.css(a, 'display')) === 'none')
        };
        dI.expr.filters.visible = function (a) {
            return !dI.expr.filters.hidden(a)
        }
    }
    dI.each({
        margin: '',
        padding: '',
        border: 'Width'
    }, function (b, a) {
        dI.cssHooks[b + a] = {
            expand: function (g) {
                var c = 0,
                d = {
                },
                f = typeof g === 'string' ? g.split(' ')  : [
                    g
                ];
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
        serialize: function () {
            return dI.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = dI.prop(this, 'elements');
                return a ? dI.makeArray(a)  : this
            }) .filter(function () {
                var a = this.type;
                return this.name && !dI(this) .is(':disabled') && dg.test(this.nodeName) && !dH.test(a) && (this.checked || !en.test(a))
            }) .map(function (a, c) {
                var b = dI(this) .val();
                return b == null ? null : dI.isArray(b) ? dI.map(b, function (d) {
                    return {
                        name: c.name,
                        value: d.replace(cE, '
\n')
                    }
                })  : {
                    name: c.name,
                    value: b.replace(cE, '
\n')
                }
            }) .get()
        }
    });
    dI.param = function (d, b) {
        var a,
        c = [
        ],
        f = function (h, g) {
            g = dI.isFunction(g) ? g()  : (g == null ? '' : g);
            c[c.length] = encodeURIComponent(h) + '=' + encodeURIComponent(g)
        };
        if (b === dX) {
            b = dI.ajaxSettings && dI.ajaxSettings.traditional
        }
        if (dI.isArray(d) || (d.jquery && !dI.isPlainObject(d))) {
            dI.each(d, function () {
                f(this.name, this.value)
            })
        } else {
            for (a in d) {
                eG(a, d[a], b, f)
            }
        }
        return c.join('&') .replace(dZ, '+')
    };
    function eG(b, f, c, a) {
        var d;
        if (dI.isArray(f)) {
            dI.each(f, function (g, h) {
                if (c || cl.test(b)) {
                    a(b, h)
                } else {
                    eG(b + '[' + (typeof h === 'object' ? g : '') + ']', h, c, a)
                }
            })
        } else {
            if (!c && dI.type(f) === 'object') {
                for (d in f) {
                    eG(b + '[' + d + ']', f[d], c, a)
                }
            } else {
                a(b, f)
            }
        }
    }
    dI.each(('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu') .split(' '), function (a, b) {
        dI.fn[b] = function (c, d) {
            return arguments.length > 0 ? this.on(b, null, c, d)  : this.trigger(b)
        }
    });
    dI.fn.hover = function (b, a) {
        return this.mouseenter(b) .mouseleave(a || b)
    };
    var cp,
    d7,
    ex = dI.now(),
    c7 = /\?/,
    em = /#.*$/,
    dC = /([?&])_=[^&]*/,
    cD = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    c3 = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    eu = /^(?:GET|HEAD)$/,
    dV = /^\/\//,
    ci = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    cr = dI.fn.load,
    b8 = {
    },
    cy = {
    },
    cg = '*/'.concat('*');
    try {
        d7 = cu.href
    } catch (dP) {
        d7 = eA.createElement('a');
        d7.href = '';
        d7 = d7.href
    }
    cp = ci.exec(d7.toLowerCase()) || [];
    function dq(a) {
        return function (g, f) {
            if (typeof g !== 'string') {
                f = g;
                g = '*'
            }
            var d,
            c = 0,
            b = g.toLowerCase() .match(da) || [];
            if (dI.isFunction(f)) {
                while ((d = b[c++])) {
                    if (d[0] === '+') {
                        d = d.slice(1) || '*';
                        (a[d] = a[d] || []) .unshift(f)
                    } else {
                        (a[d] = a[d] || []) .push(f)
                    }
                }
            }
        }
    }
    function ew(g, b, c, a) {
        var f = {
        },
        h = (g === cy);
        function d(j) {
            var i;
            f[j] = true;
            dI.each(g[j] || [], function (k, l) {
                var m = l(b, c, a);
                if (typeof m === 'string' && !h && !f[m]) {
                    b.dataTypes.unshift(m);
                    d(m);
                    return false
                } else {
                    if (h) {
                        return !(i = m)
                    }
                }
            });
            return i
        }
        return d(b.dataTypes[0]) || !f['*'] && d('*')
    }
    function el(b, a) {
        var d,
        c,
        f = dI.ajaxSettings.flatOptions || {
        };
        for (c in a) {
            if (a[c] !== dX) {
                (f[c] ? b : (d || (d = {
                }))) [c] = a[c]
            }
        }
        if (d) {
            dI.extend(true, b, d)
        }
        return b
    }
    dI.fn.load = function (a, d, c) {
        if (typeof a !== 'string' && cr) {
            return cr.apply(this, arguments)
        }
        var h,
        b,
        i,
        g = this,
        f = a.indexOf(' ');
        if (f >= 0) {
            h = a.slice(f, a.length);
            a = a.slice(0, f)
        }
        if (dI.isFunction(d)) {
            c = d;
            d = dX
        } else {
            if (d && typeof d === 'object') {
                i = 'POST'
            }
        }
        if (g.length > 0) {
            dI.ajax({
                url: a,
                type: i,
                dataType: 'html',
                data: d
            }) .done(function (j) {
                b = arguments;
                g.html(h ? dI('<div>') .append(dI.parseHTML(j)) .find(h)  : j)
            }) .complete(c && function (j, k) {
                g.each(c, b || [j.responseText,
                k,
                j])
            })
        }
        return this
    };
    dI.each(['ajaxStart',
    'ajaxStop',
    'ajaxComplete',
    'ajaxError',
    'ajaxSuccess',
    'ajaxSend'], function (b, a) {
        dI.fn[a] = function (c) {
            return this.on(a, c)
        }
    });
    dI.each(['get',
    'post'], function (b, a) {
        dI[a] = function (d, g, f, c) {
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
        lastModified: {
        },
        etag: {
        },
        ajaxSettings: {
            url: d7,
            type: 'GET',
            isLocal: c3.test(cp[1]),
            global: true,
            processData: true,
            async: true,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
                '*': cg,
                text: 'text/plain',
                html: 'text/html',
                xml: 'application/xml, text/xml',
                json: 'application/json, text/javascript'
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: 'responseXML',
                text: 'responseText'
            },
            converters: {
                '* text': dt.String,
                'text html': true,
                'text json': dI.parseJSON,
                'text xml': dI.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function (a, b) {
            return b ? el(el(a, dI.ajaxSettings), b)  : el(dI.ajaxSettings, a)
        },
        ajaxPrefilter: dq(b8),
        ajaxTransport: dq(cy),
        ajax: function (k, n) {
            if (typeof k === 'object') {
                n = k;
                k = dX
            }
            n = n || {
            };
            var b,
            w,
            j,
            r,
            g,
            o,
            v,
            m,
            h = dI.ajaxSetup({
            }, n),
            p = h.context || h,
            d = h.context && (p.nodeType || p.jquery) ? dI(p)  : dI.event,
            q = dI.Deferred(),
            t = dI.Callbacks('once memory'),
            i = h.statusCode || {
            },
            c = {
            },
            s = {
            },
            l = 0,
            x = 'canceled',
            a = {
                readyState: 0,
                getResponseHeader: function (y) {
                    var z;
                    if (l === 2) {
                        if (!m) {
                            m = {
                            };
                            while ((z = cD.exec(r))) {
                                m[z[1].toLowerCase()] = z[2]
                            }
                        }
                        z = m[y.toLowerCase()]
                    }
                    return z == null ? null : z
                },
                getAllResponseHeaders: function () {
                    return l === 2 ? r : null
                },
                setRequestHeader: function (z, y) {
                    var A = z.toLowerCase();
                    if (!l) {
                        z = s[A] = s[A] || z;
                        c[z] = y
                    }
                    return this
                },
                overrideMimeType: function (y) {
                    if (!l) {
                        h.mimeType = y
                    }
                    return this
                },
                statusCode: function (y) {
                    var z;
                    if (y) {
                        if (l < 2) {
                            for (z in y) {
                                i[z] = [
                                    i[z],
                                    y[z]
                                ]
                            }
                        } else {
                            a.always(y[a.status])
                        }
                    }
                    return this
                },
                abort: function (y) {
                    var z = y || x;
                    if (v) {
                        v.abort(z)
                    }
                    f(0, z);
                    return this
                }
            };
            q.promise(a) .complete = t.add;
            a.success = a.done;
            a.error = a.fail;
            h.url = ((k || h.url || d7) + '') .replace(em, '') .replace(dV, cp[1] + '//');
            h.type = n.method || n.type || h.method || h.type;
            h.dataTypes = dI.trim(h.dataType || '*') .toLowerCase() .match(da) || [''];
            if (h.crossDomain == null) {
                b = ci.exec(h.url.toLowerCase());
                h.crossDomain = !!(b && (b[1] !== cp[1] || b[2] !== cp[2] || (b[3] || (b[1] === 'http:' ? 80 : 443)) != (cp[3] || (cp[1] === 'http:' ? 80 : 443))))
            }
            if (h.data && h.processData && typeof h.data !== 'string') {
                h.data = dI.param(h.data, h.traditional)
            }
            ew(b8, h, n, a);
            if (l === 2) {
                return a
            }
            o = h.global;
            if (o && dI.active++ === 0) {
                dI.event.trigger('ajaxStart')
            }
            h.type = h.type.toUpperCase();
            h.hasContent = !eu.test(h.type);
            j = h.url;
            if (!h.hasContent) {
                if (h.data) {
                    j = (h.url += (c7.test(j) ? '&' : '?') + h.data);
                    delete h.data
                }
                if (h.cache === false) {
                    h.url = dC.test(j) ? j.replace(dC, '$1_=' + ex++)  : j + (c7.test(j) ? '&' : '?') + '_=' + ex++
                }
            }
            if (h.ifModified) {
                if (dI.lastModified[j]) {
                    a.setRequestHeader('If-Modified-Since', dI.lastModified[j])
                }
                if (dI.etag[j]) {
                    a.setRequestHeader('If-None-Match', dI.etag[j])
                }
            }
            if (h.data && h.hasContent && h.contentType !== false || n.contentType) {
                a.setRequestHeader('Content-Type', h.contentType)
            }
            a.setRequestHeader('Accept', h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + (h.dataTypes[0] !== '*' ? ', ' + cg + '; q=0.01' : '')  : h.accepts['*']);
            for (w in h.headers) {
                a.setRequestHeader(w, h.headers[w])
            }
            if (h.beforeSend && (h.beforeSend.call(p, a, h) === false || l === 2)) {
                return a.abort()
            }
            x = 'abort';
            for (w in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                a[w](h[w])
            }
            v = ew(cy, h, n, a);
            if (!v) {
                f( - 1, 'No Transport')
            } else {
                a.readyState = 1;
                if (o) {
                    d.trigger('ajaxSend', [
                        a,
                        h
                    ])
                }
                if (h.async && h.timeout > 0) {
                    g = setTimeout(function () {
                        a.abort('timeout')
                    }, h.timeout)
                }
                try {
                    l = 1;
                    v.send(c, f)
                } catch (u) {
                    if (l < 2) {
                        f( - 1, u)
                    } else {
                        throw u
                    }
                }
            }
            function f(G, B, F, y) {
                var A,
                C,
                E,
                H,
                D,
                z = B;
                if (l === 2) {
                    return
                }
                l = 2;
                if (g) {
                    clearTimeout(g)
                }
                v = dX;
                r = y || '';
                a.readyState = G > 0 ? 4 : 0;
                if (F) {
                    H = du(h, a, F)
                }
                if (G >= 200 && G < 300 || G === 304) {
                    if (h.ifModified) {
                        D = a.getResponseHeader('Last-Modified');
                        if (D) {
                            dI.lastModified[j] = D
                        }
                        D = a.getResponseHeader('etag');
                        if (D) {
                            dI.etag[j] = D
                        }
                    }
                    if (G === 204) {
                        A = true;
                        z = 'nocontent'
                    } else {
                        if (G === 304) {
                            A = true;
                            z = 'notmodified'
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
                        z = 'error';
                        if (G < 0) {
                            G = 0
                        }
                    }
                }
                a.status = G;
                a.statusText = (B || z) + '';
                if (A) {
                    q.resolveWith(p, [
                        C,
                        z,
                        a
                    ])
                } else {
                    q.rejectWith(p, [
                        a,
                        z,
                        E
                    ])
                }
                a.statusCode(i);
                i = dX;
                if (o) {
                    d.trigger(A ? 'ajaxSuccess' : 'ajaxError', [
                        a,
                        h,
                        A ? C : E
                    ])
                }
                t.fireWith(p, [
                    a,
                    z
                ]);
                if (o) {
                    d.trigger('ajaxComplete', [
                        a,
                        h
                    ]);
                    if (!(--dI.active)) {
                        dI.event.trigger('ajaxStop')
                    }
                }
            }
            return a
        },
        getScript: function (b, a) {
            return dI.get(b, dX, a, 'script')
        },
        getJSON: function (a, c, b) {
            return dI.get(a, c, b, 'json')
        }
    });
    function du(a, b, f) {
        var j,
        g,
        h,
        d,
        i = a.contents,
        c = a.dataTypes,
        k = a.responseFields;
        for (d in k) {
            if (d in f) {
                b[k[d]] = f[d]
            }
        }
        while (c[0] === '*') {
            c.shift();
            if (g === dX) {
                g = a.mimeType || b.getResponseHeader('Content-Type')
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
                if (!c[0] || a.converters[d + ' ' + c[0]]) {
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
        var j,
        f,
        c,
        i,
        b = {
        },
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
        for (; (f = d[++h]); ) {
            if (f !== '*') {
                if (l !== '*' && l !== f) {
                    c = b[l + ' ' + f] || b['* ' + f];
                    if (!c) {
                        for (j in b) {
                            i = j.split(' ');
                            if (i[1] === f) {
                                c = b[l + ' ' + i[0]] || b['* ' + i[0]];
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
                        if (c && a['throws']) {
                            k = c(k)
                        } else {
                            try {
                                k = c(k)
                            } catch (g) {
                                return {
                                    state: 'parsererror',
                                    error: c ? g : 'No conversion from ' + l + ' to ' + f
                                }
                            }
                        }
                    }
                }
                l = f
            }
        }
        return {
            state: 'success',
            data: k
        }
    }
    dI.ajaxSetup({
        accepts: {
            script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            'text script': function (a) {
                dI.globalEval(a);
                return a
            }
        }
    });
    dI.ajaxPrefilter('script', function (a) {
        if (a.cache === dX) {
            a.cache = false
        }
        if (a.crossDomain) {
            a.type = 'GET';
            a.global = false
        }
    });
    dI.ajaxTransport('script', function (b) {
        if (b.crossDomain) {
            var a,
            c = eA.head || dI('head') [0] || eA.documentElement;
            return {
                send: function (f, d) {
                    a = eA.createElement('script');
                    a.async = true;
                    if (b.scriptCharset) {
                        a.charset = b.scriptCharset
                    }
                    a.src = b.url;
                    a.onload = a.onreadystatechange = function (g, h) {
                        if (h || !a.readyState || /loaded|complete/.test(a.readyState)) {
                            a.onload = a.onreadystatechange = null;
                            if (a.parentNode) {
                                a.parentNode.removeChild(a)
                            }
                            a = null;
                            if (!h) {
                                d(200, 'success')
                            }
                        }
                    };
                    c.insertBefore(a, c.firstChild)
                },
                abort: function () {
                    if (a) {
                        a.onload(dX, true)
                    }
                }
            }
        }
    });
    var ee = [
    ],
    eq = /(=)\?(?=&|$)|\?\?/;
    dI.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
            var a = ee.pop() || (dI.expando + '_' + (ex++));
            this[a] = true;
            return a
        }
    });
    dI.ajaxPrefilter('json jsonp', function (a, g, h) {
        var c,
        f,
        b,
        d = a.jsonp !== false && (eq.test(a.url) ? 'url' : typeof a.data === 'string' && !(a.contentType || '') .indexOf('application/x-www-form-urlencoded') && eq.test(a.data) && 'data');
        if (d || a.dataTypes[0] === 'jsonp') {
            c = a.jsonpCallback = dI.isFunction(a.jsonpCallback) ? a.jsonpCallback()  : a.jsonpCallback;
            if (d) {
                a[d] = a[d].replace(eq, '$1' + c)
            } else {
                if (a.jsonp !== false) {
                    a.url += (c7.test(a.url) ? '&' : '?') + a.jsonp + '=' + c
                }
            }
            a.converters['script json'] = function () {
                if (!b) {
                    dI.error(c + ' was not called')
                }
                return b[0]
            };
            a.dataTypes[0] = 'json';
            f = dt[c];
            dt[c] = function () {
                b = arguments
            };
            h.always(function () {
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
            return 'script'
        }
    });
    var dR,
    dd,
    c9 = 0,
    co = dt.ActiveXObject && function () {
        var a;
        for (a in dR) {
            dR[a](dX, true)
        }
    };
    function c5() {
        try {
            return new dt.XMLHttpRequest()
        } catch (a) {
        }
    }
    function d2() {
        try {
            return new dt.ActiveXObject('Microsoft.XMLHTTP')
        } catch (a) {
        }
    }
    dI.ajaxSettings.xhr = dt.ActiveXObject ? function () {
        return !this.isLocal && c5() || d2()
    }
     : c5;
    dd = dI.ajaxSettings.xhr();
    dI.support.cors = !!dd && ('withCredentials' in dd);
    dd = dI.support.ajax = !!dd;
    if (dd) {
        dI.ajaxTransport(function (b) {
            if (!b.crossDomain || dI.support.cors) {
                var a;
                return {
                    send: function (f, d) {
                        var h,
                        c,
                        g = b.xhr();
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
                        if (!b.crossDomain && !f['X-Requested-With']) {
                            f['X-Requested-With'] = 'XMLHttpRequest'
                        }
                        try {
                            for (c in f) {
                                g.setRequestHeader(c, f[c])
                            }
                        } catch (i) {
                        }
                        g.send((b.hasContent && b.data) || null);
                        a = function (o, p) {
                            var q,
                            n,
                            k,
                            m;
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
                                        m = {
                                        };
                                        q = g.status;
                                        n = g.getAllResponseHeaders();
                                        if (typeof g.responseText === 'string') {
                                            m.text = g.responseText
                                        }
                                        try {
                                            k = g.statusText
                                        } catch (l) {
                                            k = ''
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
                            } catch (j) {
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
                                        dR = {
                                        };
                                        dI(dt) .unload(co)
                                    }
                                    dR[h] = a
                                }
                                g.onreadystatechange = a
                            }
                        }
                    },
                    abort: function () {
                        if (a) {
                            a(dX, true)
                        }
                    }
                }
            }
        })
    }
    var dY,
    cX,
    eg = /^(?:toggle|show|hide)$/,
    dv = new RegExp('^(?:([+-])=|)(' + cc + ')([a-z%]*)$', 'i'),
    ek = /queueHooks$/,
    cJ = [
        dr
    ],
    dx = {
        '*': [
            function (j, c) {
                var h,
                b,
                a = this.createTween(j, c),
                g = dv.exec(c),
                f = a.cur(),
                i = + f || 0,
                k = 1,
                d = 20;
                if (g) {
                    h = + g[2];
                    b = g[3] || (dI.cssNumber[j] ? '' : 'px');
                    if (b !== 'px' && i) {
                        i = dI.css(a.elem, j, true) || h || 1;
                        do {
                            k = k || '.5';
                            i = i / k;
                            dI.style(a.elem, j, i + b)
                        } while (k !== (k = a.cur() / f) && k !== 1 && --d)
                    }
                    a.unit = b;
                    a.start = i;
                    a.end = g[1] ? i + (g[1] + 1) * h : h
                }
                return a
            }
        ]
    };
    function cT() {
        setTimeout(function () {
            dY = dX
        });
        return (dY = dI.now())
    }
    function dQ(a, b) {
        dI.each(b, function (f, h) {
            var g = (dx[f] || []) .concat(dx['*']),
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
        var a,
        k,
        g = 0,
        j = cJ.length,
        c = dI.Deferred() .always(function () {
            delete h.elem
        }),
        h = function () {
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
            c.notifyWith(l, [
                i,
                m,
                o
            ]);
            if (m < 1 && n) {
                return o
            } else {
                c.resolveWith(l, [
                    i
                ]);
                return false
            }
        },
        i = c.promise({
            elem: l,
            props: dI.extend({
            }, f),
            opts: dI.extend(true, {
                specialEasing: {
                }
            }, b),
            originalProperties: f,
            originalOptions: b,
            startTime: dY || cT(),
            duration: b.duration,
            tweens: [
            ],
            createTween: function (o, n) {
                var m = dI.Tween(l, i.opts, o, n, i.opts.specialEasing[o] || i.opts.easing);
                i.tweens.push(m);
                return m
            },
            stop: function (m) {
                var n = 0,
                o = m ? i.tweens.length : 0;
                if (k) {
                    return this
                }
                k = true;
                for (; n < o; n++) {
                    i.tweens[n].run(1)
                }
                if (m) {
                    c.resolveWith(l, [
                        i,
                        m
                    ])
                } else {
                    c.rejectWith(l, [
                        i,
                        m
                    ])
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
        return i.progress(i.opts.progress) .done(i.opts.done, i.opts.complete) .fail(i.opts.fail) .always(i.opts.always)
    }
    function ez(a, g) {
        var h,
        b,
        f,
        c,
        d;
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
            if (d && 'expand' in d) {
                h = d.expand(h);
                delete a[b];
                for (f in h) {
                    if (!(f in a)) {
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
        tweener: function (c, f) {
            if (dI.isFunction(c)) {
                f = c;
                c = [
                    '*'
                ]
            } else {
                c = c.split(' ')
            }
            var a,
            d = 0,
            b = c.length;
            for (; d < b; d++) {
                a = c[d];
                dx[a] = dx[a] || [];
                dx[a].unshift(f)
            }
        },
        prefilter: function (a, b) {
            if (b) {
                cJ.unshift(a)
            } else {
                cJ.push(a)
            }
        }
    });
    function dr(l, f, n) {
        var p,
        g,
        m,
        c,
        o,
        j,
        r,
        a,
        b,
        k = this,
        q = l.style,
        d = {
        },
        h = [
        ],
        i = l.nodeType && de(l);
        if (!n.queue) {
            a = dI._queueHooks(l, 'fx');
            if (a.unqueued == null) {
                a.unqueued = 0;
                b = a.empty.fire;
                a.empty.fire = function () {
                    if (!a.unqueued) {
                        b()
                    }
                }
            }
            a.unqueued++;
            k.always(function () {
                k.always(function () {
                    a.unqueued--;
                    if (!dI.queue(l, 'fx') .length) {
                        a.empty.fire()
                    }
                })
            })
        }
        if (l.nodeType === 1 && ('height' in f || 'width' in f)) {
            n.overflow = [
                q.overflow,
                q.overflowX,
                q.overflowY
            ];
            if (dI.css(l, 'display') === 'inline' && dI.css(l, 'float') === 'none') {
                if (!dI.support.inlineBlockNeedsLayout || c0(l.nodeName) === 'inline') {
                    q.display = 'inline-block'
                } else {
                    q.zoom = 1
                }
            }
        }
        if (n.overflow) {
            q.overflow = 'hidden';
            if (!dI.support.shrinkWrapBlocks) {
                k.always(function () {
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
                j = j || c === 'toggle';
                if (c === (i ? 'hide' : 'show')) {
                    continue
                }
                h.push(g)
            }
        }
        m = h.length;
        if (m) {
            o = dI._data(l, 'fxshow') || dI._data(l, 'fxshow', {
            });
            if ('hidden' in o) {
                i = o.hidden
            }
            if (j) {
                o.hidden = !i
            }
            if (i) {
                dI(l) .show()
            } else {
                k.done(function () {
                    dI(l) .hide()
                })
            }
            k.done(function () {
                var s;
                dI._removeData(l, 'fxshow');
                for (s in d) {
                    dI.style(l, s, d[s])
                }
            });
            for (g = 0; g < m; g++) {
                p = h[g];
                r = k.createTween(p, i ? o[p] : 0);
                d[p] = o[p] || dI.style(l, p);
                if (!(p in o)) {
                    o[p] = r.start;
                    if (i) {
                        r.end = r.start;
                        r.start = p === 'width' || p === 'height' ? 1 : 0
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
        init: function (a, d, f, c, g, b) {
            this.elem = a;
            this.prop = f;
            this.easing = g || 'swing';
            this.options = d;
            this.start = this.now = this.cur();
            this.end = c;
            this.unit = b || (dI.cssNumber[f] ? '' : 'px')
        },
        cur: function () {
            var a = cR.propHooks[this.prop];
            return a && a.get ? a.get(this)  : cR.propHooks._default.get(this)
        },
        run: function (b) {
            var c,
            a = cR.propHooks[this.prop];
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
            get: function (a) {
                var b;
                if (a.elem[a.prop] != null && (!a.elem.style || a.elem.style[a.prop] == null)) {
                    return a.elem[a.prop]
                }
                b = dI.css(a.elem, a.prop, '');
                return !b || b === 'auto' ? 0 : b
            },
            set: function (a) {
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
        set: function (a) {
            if (a.elem.nodeType && a.elem.parentNode) {
                a.elem[a.prop] = a.now
            }
        }
    };
    dI.each(['toggle',
    'show',
    'hide'], function (c, a) {
        var b = dI.fn[a];
        dI.fn[a] = function (g, d, f) {
            return g == null || typeof g === 'boolean' ? b.apply(this, arguments)  : this.animate(dM(a, true), g, d, f)
        }
    });
    dI.fn.extend({
        fadeTo: function (d, a, b, c) {
            return this.filter(de) .css('opacity', 0) .show() .end() .animate({
                opacity: a
            }, d, b, c)
        },
        animate: function (c, a, g, h) {
            var b = dI.isEmptyObject(c),
            f = dI.speed(a, g, h),
            d = function () {
                var i = dz(this, dI.extend({
                }, c), f);
                d.finish = function () {
                    i.stop(true)
                };
                if (b || dI._data(this, 'finish')) {
                    i.stop(true)
                }
            };
            d.finish = d;
            return b || f.queue === false ? this.each(d)  : this.queue(f.queue, d)
        },
        stop: function (b, c, d) {
            var a = function (g) {
                var f = g.stop;
                delete g.stop;
                f(d)
            };
            if (typeof b !== 'string') {
                d = c;
                c = b;
                b = dX
            }
            if (c && b !== false) {
                this.queue(b || 'fx', [
                ])
            }
            return this.each(function () {
                var f = true,
                i = b != null && b + 'queueHooks',
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
                for (i = g.length; i--; ) {
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
        finish: function (a) {
            if (a !== false) {
                a = a || 'fx'
            }
            return this.each(function () {
                var b,
                f = dI._data(this),
                c = f[a + 'queue'],
                d = f[a + 'queueHooks'],
                g = dI.timers,
                h = c ? c.length : 0;
                f.finish = true;
                dI.queue(this, a, [
                ]);
                if (d && d.cur && d.cur.finish) {
                    d.cur.finish.call(this)
                }
                for (b = g.length; b--; ) {
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
        var a,
        d = {
            height: b
        },
        c = 0;
        f = f ? 1 : 0;
        for (; c < 4; c += 2 - f) {
            a = b4[c];
            d['margin' + a] = d['padding' + a] = b
        }
        if (f) {
            d.opacity = d.width = b
        }
        return d
    }
    dI.each({
        slideDown: dM('show'),
        slideUp: dM('hide'),
        slideToggle: dM('toggle'),
        fadeIn: {
            opacity: 'show'
        },
        fadeOut: {
            opacity: 'hide'
        },
        fadeToggle: {
            opacity: 'toggle'
        }
    }, function (b, a) {
        dI.fn[b] = function (d, f, c) {
            return this.animate(a, d, f, c)
        }
    });
    dI.speed = function (b, a, c) {
        var d = b && typeof b === 'object' ? dI.extend({
        }, b)  : {
            complete: c || !c && a || dI.isFunction(b) && b,
            duration: b,
            easing: c && a || a && !dI.isFunction(a) && a
        };
        d.duration = dI.fx.off ? 0 : typeof d.duration === 'number' ? d.duration : d.duration in dI.fx.speeds ? dI.fx.speeds[d.duration] : dI.fx.speeds._default;
        if (d.queue == null || d.queue === true) {
            d.queue = 'fx'
        }
        d.old = d.complete;
        d.complete = function () {
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
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return 0.5 - Math.cos(a * Math.PI) / 2
        }
    };
    dI.timers = [
    ];
    dI.fx = cR.prototype.init;
    dI.fx.tick = function () {
        var b,
        c = dI.timers,
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
    dI.fx.timer = function (a) {
        if (a() && dI.timers.push(a)) {
            dI.fx.start()
        }
    };
    dI.fx.interval = 13;
    dI.fx.start = function () {
        if (!cX) {
            cX = setInterval(dI.fx.tick, dI.fx.interval)
        }
    };
    dI.fx.stop = function () {
        clearInterval(cX);
        cX = null
    };
    dI.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    dI.fx.step = {
    };
    if (dI.expr && dI.expr.filters) {
        dI.expr.filters.animated = function (a) {
            return dI.grep(dI.timers, function (b) {
                return a === b.elem
            }) .length
        }
    }
    dI.fn.offset = function (d) {
        if (arguments.length) {
            return d === dX ? this : this.each(function (h) {
                dI.offset.setOffset(this, d, h)
            })
        }
        var f,
        c,
        a = {
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
        setOffset: function (k, a, h) {
            var g = dI.css(k, 'position');
            if (g === 'static') {
                k.style.position = 'relative'
            }
            var i = dI(k),
            l = i.offset(),
            m = dI.css(k, 'top'),
            c = dI.css(k, 'left'),
            b = (g === 'absolute' || g === 'fixed') && dI.inArray('auto', [
                m,
                c
            ]) > - 1,
            d = {
            },
            f = {
            },
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
            if ('using' in a) {
                a.using.call(k, d)
            } else {
                i.css(d)
            }
        }
    };
    dI.fn.extend({
        position: function () {
            if (!this[0]) {
                return
            }
            var b,
            a,
            d = {
                top: 0,
                left: 0
            },
            c = this[0];
            if (dI.css(c, 'position') === 'fixed') {
                a = c.getBoundingClientRect()
            } else {
                b = this.offsetParent();
                a = this.offset();
                if (!dI.nodeName(b[0], 'html')) {
                    d = b.offset()
                }
                d.top += dI.css(b[0], 'borderTopWidth', true);
                d.left += dI.css(b[0], 'borderLeftWidth', true)
            }
            return {
                top: a.top - d.top - dI.css(c, 'marginTop', true),
                left: a.left - d.left - dI.css(c, 'marginLeft', true)
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || eA.documentElement;
                while (a && (!dI.nodeName(a, 'html') && dI.css(a, 'position') === 'static')) {
                    a = a.offsetParent
                }
                return a || eA.documentElement
            })
        }
    });
    dI.each({
        scrollLeft: 'pageXOffset',
        scrollTop: 'pageYOffset'
    }, function (b, c) {
        var a = /Y/.test(c);
        dI.fn[b] = function (d) {
            return dI.access(this, function (i, f, g) {
                var h = cA(i);
                if (g === dX) {
                    return h ? (c in h) ? h[c] : h.document.documentElement[f] : i[f]
                }
                if (h) {
                    h.scrollTo(!a ? g : dI(h) .scrollLeft(), a ? g : dI(h) .scrollTop())
                } else {
                    i[f] = g
                }
            }, b, d, arguments.length, null)
        }
    });
    function cA(a) {
        return dI.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : false
    }
    dI.each({
        Height: 'height',
        Width: 'width'
    }, function (b, a) {
        dI.each({
            padding: 'inner' + b,
            content: a,
            '': 'outer' + b
        }, function (d, c) {
            dI.fn[c] = function (f, g) {
                var h = arguments.length && (d || typeof f !== 'boolean'),
                i = d || (f === true || g === true ? 'margin' : 'border');
                return dI.access(this, function (l, m, k) {
                    var j;
                    if (dI.isWindow(l)) {
                        return l.document.documentElement['client' + b]
                    }
                    if (l.nodeType === 9) {
                        j = l.documentElement;
                        return Math.max(l.body['scroll' + b], j['scroll' + b], l.body['offset' + b], j['offset' + b], j['client' + b])
                    }
                    return k === dX ? dI.css(l, m, i)  : dI.style(l, m, k, i)
                }, a, h ? f : dX, h, null)
            }
        })
    });
    dt.jQuery = dt.$ = dI;
    if (typeof define === 'function' && define.amd && define.amd.jQuery) {
        define('jquery', [
        ], function () {
            return dI
        })
    }
}) (window);
(function (d) {
    d.chromatable = {
        defaults: {
            width: '900px',
            height: '300px',
            scrolling: 'yes'
        }
    };
    d.fn.chromatable = function (a) {
        var a = d.extend({
        }, d.chromatable.defaults, a);
        return this.each(function () {
            var f = d(this);
            var b = d(this) .attr('ID') + ('wrapper');
            d(this) .css('width', a.width) .addClass('_scrolling');
            d(this) .wrap('<div class="scrolling_outer"><div id="' + b + '" class="scrolling_inner"></div></div>');
            d('.scrolling_outer') .css({
                position: 'relative'
            });
            d('#' + b) .css({
                border: '1px solid #CCCCCC',
                'overflow-x': 'hidden',
                'overflow-y': 'auto',
                'padding-right': '17px'
            });
            d('#' + b) .css('height', a.height);
            d('#' + b) .css('width', a.width);
            d(this) .before(d(this) .clone() .attr('id', '') .addClass('_thead') .css({
                width: 'auto',
                display: 'block',
                position: 'absolute',
                border: 'none',
                'border-bottom': '1px solid #CCC',
                top: '1px'
            }));
            d('._thead') .children('tbody') .remove();
            d(this) .each(function (e) {
                if (a.width == '100%' || a.width == 'auto') {
                    d('#' + b) .css({
                        'padding-right': '0px'
                    })
                }
                if (a.scrolling == 'no') {
                    d('#' + b) .before('<a href="#" class="expander" style="width:100%;">Expand table</a>');
                    d('#' + b) .css({
                        'padding-right': '0px'
                    });
                    d('.expander') .each(function (h) {
                        d(this) .attr('ID', h);
                        d(this) .bind('click', function () {
                            d('#' + b) .css({
                                height: 'auto'
                            });
                            d('#' + b + ' ._thead') .remove();
                            d(this) .remove()
                        })
                    });
                    d('#' + b) .resizable({
                        handles: 's'
                    }) .css('overflow-y', 'hidden')
                }
            });
            $curr = f.prev();
            d('thead:eq(0)>tr th', this) .each(function (e) {
                d('thead:eq(0)>tr th:eq(' + e + ')', $curr) .width(d(this) .width())
            });
            if (a.width == '100%' || 'auto') {
                d(window) .resize(function () {
                    c(f)
                })
            }
        })
    };
    function c(a) {
        $curr = a.prev();
        d('thead:eq(0)>tr th', a) .each(function (b) {
            d('thead:eq(0)>tr th:eq(' + b + ')', $curr) .width(d(this) .width())
        })
    }
}) (jQuery);
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
(function (b) {
    b.jqPagination = function (f, a) {
        var e = this;
        e.$el = b(f);
        e.el = f;
        e.$input = e.$el.find('input');
        e.$el.data('jqPagination', e);
        e.init = function () {
            e.options = b.extend({
            }, b.jqPagination.defaultOptions, a);
            if (e.options.max_page === null) {
                if (e.$input.data('max-page') !== undefined) {
                    e.options.max_page = e.$input.data('max-page')
                } else {
                    e.options.max_page = 1
                }
            }
            if (e.$input.data('current-page') !== undefined && e.isNumber(e.$input.data('current-page'))) {
                e.options.current_page = e.$input.data('current-page')
            }
            e.$input.removeAttr('readonly');
            e.updateInput(true);
            e.$input.on('focus.jqPagination mouseup.jqPagination', function (d) {
                if (d.type === 'focus') {
                    var c = parseInt(e.options.current_page, 10);
                    b(this) .val(c) .select()
                }
                if (d.type === 'mouseup') {
                    return false
                }
            });
            e.$input.on('blur.jqPagination keydown.jqPagination', function (h) {
                var c = b(this),
                d = parseInt(e.options.current_page, 10);
                if (h.keyCode === 27) {
                    c.val(d);
                    c.blur()
                }
                if (h.keyCode === 13) {
                    c.blur()
                }
                if (h.type === 'blur') {
                    e.setPage(c.val())
                }
            });
            e.$el.on('click.jqPagination', 'a', function (d) {
                var c = b(this);
                if (c.hasClass('disabled')) {
                    return false
                }
                if (!d.metaKey && !d.ctrlKey) {
                    d.preventDefault();
                    e.setPage(c.data('action'))
                }
            })
        };
        e.setPage = function (d) {
            if (d === undefined) {
                return e.options.current_page
            }
            var c = parseInt(e.options.current_page, 10),
            h = parseInt(e.options.max_page, 10);
            if (isNaN(parseInt(d, 10))) {
                switch (d) {
                case 'first':
                    d = 1;
                    break;
                case 'prev':
                case 'previous':
                    d = c - 1;
                    break;
                case 'next':
                    d = c + 1;
                    break;
                case 'last':
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
            e.$input.data('current-page', d);
            e.updateInput()
        };
        e.setMaxPage = function (c) {
            if (c === undefined) {
                return e.options.max_page
            }
            if (!e.isNumber(c)) {
                console.error('jqPagination: max_page is not a number');
                return false
            }
            if (c < e.options.current_page) {
                console.error('jqPagination: max_page lower than current_page');
                return false
            }
            e.options.max_page = c;
            e.$input.data('max-page', c);
            e.updateInput()
        };
        e.updateInput = function (d) {
            var c = parseInt(e.options.current_page, 10);
            e.setInputValue(c);
            e.setLinks(c);
            if (d !== true) {
                e.options.paged(c)
            }
        };
        e.setInputValue = function (d) {
            var c = e.options.page_string,
            h = e.options.max_page;
            c = c.replace('{current_page}', d) .replace('{max_page}', h);
            e.$input.val(c)
        };
        e.isNumber = function (c) {
            return !isNaN(parseFloat(c)) && isFinite(c)
        };
        e.setLinks = function (l) {
            var c = e.options.link_string,
            k = parseInt(e.options.current_page, 10),
            d = parseInt(e.options.max_page, 10);
            if (c !== '') {
                var m = k - 1;
                if (m < 1) {
                    m = 1
                }
                var n = k + 1;
                if (n > d) {
                    n = d
                }
                e.$el.find('a.first') .attr('href', c.replace('{page_number}', '1'));
                e.$el.find('a.prev, a.previous') .attr('href', c.replace('{page_number}', m));
                e.$el.find('a.next') .attr('href', c.replace('{page_number}', n));
                e.$el.find('a.last') .attr('href', c.replace('{page_number}', d))
            }
            e.$el.find('a') .removeClass('disabled');
            if (k === d) {
                e.$el.find('.next, .last') .addClass('disabled')
            }
            if (k === 1) {
                e.$el.find('.previous, .first') .addClass('disabled')
            }
        };
        e.callMethod = function (c, h, d) {
            switch (c.toLowerCase()) {
            case 'option':
                switch (h.toLowerCase()) {
                case 'current_page':
                    return e.setPage(d);
                case 'max_page':
                    return e.setMaxPage(d)
                }
                console.error('jqPagination: cannot get / set option ' + h);
                return false;
                break;
            case 'destroy':
                e.$el.off('.jqPagination') .find('*') .off('.jqPagination');
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
        link_string: '',
        max_page: null,
        page_string: 'Page {current_page} of {max_page}',
        paged: function () {
        }
    };
    b.fn.jqPagination = function () {
        var a = this,
        f = Array.prototype.slice.call(arguments);
        if (typeof f[0] === 'string') {
            if (a.length > 1) {
                a = a.eq(0)
            }
            var e = b(a) .data('jqPagination');
            return e.callMethod(f[0], f[1], f[2])
        }
        return (new b.jqPagination(this, f[0]))
    }
}) (jQuery);
if (!console) {
    var console = {
    },
    func = function () {
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
(function (k) {
    var h = {
    };
    h.fileapi = k('<input type='file'/>') .get(0) .files !== undefined;
    h.formdata = window.FormData !== undefined;
    var l = !!k.fn.prop;
    k.fn.attr2 = function () {
        if (!l) {
            return this.attr.apply(this, arguments)
        }
        var a = this.prop.apply(this, arguments);
        if ((a && a.jquery) || typeof a === 'string') {
            return a
        }
        return this.attr.apply(this, arguments)
    };
    k.fn.ajaxSubmit = function (X) {
        if (!this.length) {
            g('ajaxSubmit: skipping submit process - no element selected');
            return this
        }
        var Y,
        N,
        V,
        T = this;
        if (typeof X == 'function') {
            X = {
                success: X
            }
        }
        Y = X.type || this.attr2('method');
        N = X.url || this.attr2('action');
        V = (typeof N === 'string') ? k.trim(N)  : '';
        V = V || window.location.href || '';
        if (V) {
            V = (V.match(/^([^#]+)/) || []) [1]
        }
        X = k.extend(true, {
            url: V,
            success: k.ajaxSettings.success,
            type: Y || 'GET',
            iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
        }, X);
        var c = {
        };
        this.trigger('form-pre-serialize', [
            this,
            X,
            c
        ]);
        if (c.veto) {
            g('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
            return this
        }
        if (X.beforeSerialize && X.beforeSerialize(this, X) === false) {
            g('ajaxSubmit: submit aborted via beforeSerialize callback');
            return this
        }
        var U = X.traditional;
        if (U === undefined) {
            U = k.ajaxSettings.traditional
        }
        var H = [
        ];
        var f,
        b = this.formToArray(X.semantic, H);
        if (X.data) {
            X.extraData = X.data;
            f = k.param(X.data, U)
        }
        if (X.beforeSubmit && X.beforeSubmit(b, this, X) === false) {
            g('ajaxSubmit: submit aborted via beforeSubmit callback');
            return this
        }
        this.trigger('form-submit-validate', [
            b,
            this,
            X,
            c
        ]);
        if (c.veto) {
            g('ajaxSubmit: submit vetoed via form-submit-validate trigger');
            return this
        }
        var I = k.param(b, U);
        if (f) {
            I = (I ? (I + '&' + f)  : f)
        }
        if (X.type.toUpperCase() == 'GET') {
            X.url += (X.url.indexOf('?') >= 0 ? '&' : '?') + I;
            X.data = null
        } else {
            X.data = I
        }
        var O = [
        ];
        if (X.resetForm) {
            O.push(function () {
                T.resetForm()
            })
        }
        if (X.clearForm) {
            O.push(function () {
                T.clearForm(X.includeHidden)
            })
        }
        if (!X.dataType && X.target) {
            var W = X.success || function () {
            };
            O.push(function (m) {
                var n = X.replaceTarget ? 'replaceWith' : 'html';
                k(X.target) [n](m) .each(W, arguments)
            })
        } else {
            if (X.success) {
                O.push(X.success)
            }
        }
        X.success = function (m, r, s) {
            var o = X.context || this;
            for (var p = 0, n = O.length; p < n; p++) {
                O[p].apply(o, [
                    m,
                    r,
                    s || T,
                    T
                ])
            }
        };
        if (X.error) {
            var q = X.error;
            X.error = function (m, p, o) {
                var n = X.context || this;
                q.apply(n, [
                    m,
                    p,
                    o,
                    T
                ])
            }
        }
        if (X.complete) {
            var Z = X.complete;
            X.complete = function (m, o) {
                var n = X.context || this;
                Z.apply(n, [
                    m,
                    o,
                    T
                ])
            }
        }
        var J = k('input[type=file]:enabled[value!=""]', this);
        var S = J.length > 0;
        var Q = 'multipart/form-data';
        var L = (T.attr('enctype') == Q || T.attr('encoding') == Q);
        var M = h.fileapi && h.formdata;
        g('fileAPI :' + M);
        var K = (S || L) && !M;
        var a;
        if (X.iframe !== false && (X.iframe || K)) {
            if (X.closeKeepAlive) {
                k.get(X.closeKeepAlive, function () {
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
        T.removeData('jqxhr') .data('jqxhr', a);
        for (var R = 0; R < H.length; R++) {
            H[R] = null
        }
        this.trigger('form-submit-notify', [
            this,
            X
        ]);
        return this;
        function e(m) {
            var s = k.param(m) .split('&');
            var r = s.length;
            var o = [
            ];
            var n,
            p;
            for (n = 0; n < r; n++) {
                s[n] = s[n].replace(/\+/g, ' ');
                p = s[n].split('=');
                o.push([decodeURIComponent(p[0]),
                decodeURIComponent(p[1])])
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
            var m = k.extend(true, {
            }, k.ajaxSettings, X, {
                contentType: false,
                processData: false,
                cache: false,
                type: Y || 'POST'
            });
            if (X.uploadProgress) {
                m.xhr = function () {
                    var t = jQuery.ajaxSettings.xhr();
                    if (t.upload) {
                        t.upload.addEventListener('progress', function (u) {
                            var v = 0;
                            var x = u.loaded || u.position;
                            var w = u.total;
                            if (u.lengthComputable) {
                                v = Math.ceil(x / w * 100)
                            }
                            X.uploadProgress(u, x, w, v)
                        }, false)
                    }
                    return t
                }
            }
            m.data = null;
            var n = m.beforeSend;
            m.beforeSend = function (t, u) {
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
                        s.prop('disabled', false)
                    } else {
                        s.removeAttr('disabled')
                    }
                }
            }
            r = k.extend(true, {
            }, k.ajaxSettings, X);
            r.context = r.context || r;
            ao = 'jqFormIO' + (new Date() .getTime());
            if (r.iframeTarget) {
                G = k(r.iframeTarget);
                am = G.attr2('name');
                if (!am) {
                    G.attr2('name', ao)
                } else {
                    ao = am
                }
            } else {
                G = k('<iframe name="' + ao + '" src="' + r.iframeSrc + '" />');
                G.css({
                    position: 'absolute',
                    top: '-1000px',
                    left: '-1000px'
                })
            }
            B = G[0];
            E = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: 'n/a',
                getAllResponseHeaders: function () {
                },
                getResponseHeader: function () {
                },
                setRequestHeader: function () {
                },
                abort: function (ab) {
                    var aa = (ab === 'timeout' ? 'timeout' : 'aborted');
                    g('aborting upload... ' + aa);
                    this.aborted = 1;
                    try {
                        if (B.contentWindow.document.execCommand) {
                            B.contentWindow.document.execCommand('Stop')
                        }
                    } catch (ac) {
                    }
                    G.attr('src', r.iframeSrc);
                    E.error = aa;
                    if (r.error) {
                        r.error.call(r.context, E, aa, ab)
                    }
                    if (al) {
                        k.event.trigger('ajaxError', [
                            E,
                            r,
                            aa
                        ])
                    }
                    if (r.complete) {
                        r.complete.call(r.context, E, aa)
                    }
                }
            };
            al = r.global;
            if (al && 0 === k.active++) {
                k.event.trigger('ajaxStart')
            }
            if (al) {
                k.event.trigger('ajaxSend', [
                    E,
                    r
                ])
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
                    r.extraData = r.extraData || {
                    };
                    r.extraData[am] = D.value;
                    if (D.type == 'image') {
                        r.extraData[am + '.x'] = p.clk_x;
                        r.extraData[am + '.y'] = p.clk_y
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
                } catch (ab) {
                    g('cannot get iframe.contentWindow document: ' + ab)
                }
                if (aa) {
                    return aa
                }
                try {
                    aa = ac.contentDocument ? ac.contentDocument : ac.document
                } catch (ab) {
                    g('cannot get iframe.contentDocument: ' + ab);
                    aa = ac.document
                }
                return aa
            }
            var u = k('meta[name=csrf-token]') .attr('content');
            var w = k('meta[name=csrf-param]') .attr('content');
            if (w && u) {
                r.extraData = r.extraData || {
                };
                r.extraData[w] = u
            }
            function ar() {
                var ag = T.attr2('target'),
                ab = T.attr2('action');
                p.setAttribute('target', ao);
                if (!Y) {
                    p.setAttribute('method', 'POST')
                }
                if (ab != r.url) {
                    p.setAttribute('action', r.url)
                }
                if (!r.skipEncodingOverride && (!Y || /post/i.test(Y))) {
                    T.attr({
                        encoding: 'multipart/form-data',
                        enctype: 'multipart/form-data'
                    })
                }
                if (r.timeout) {
                    v = setTimeout(function () {
                        an = true;
                        m(t)
                    }, r.timeout)
                }
                function af() {
                    try {
                        var ah = x(B) .readyState;
                        g('state = ' + ah);
                        if (ah && ah.toLowerCase() == 'uninitialized') {
                            setTimeout(af, 50)
                        }
                    } catch (aq) {
                        g('Server abort: ', aq, ' (', aq.name, ')');
                        m(z);
                        if (v) {
                            clearTimeout(v)
                        }
                        v = undefined
                    }
                }
                var aa = [
                ];
                try {
                    if (r.extraData) {
                        for (var ac in r.extraData) {
                            if (r.extraData.hasOwnProperty(ac)) {
                                if (k.isPlainObject(r.extraData[ac]) && r.extraData[ac].hasOwnProperty('name') && r.extraData[ac].hasOwnProperty('value')) {
                                    aa.push(k('<input type="hidden" name="' + r.extraData[ac].name + '">') .val(r.extraData[ac].value) .appendTo(p) [0])
                                } else {
                                    aa.push(k('<input type="hidden" name="' + ac + '">') .val(r.extraData[ac]) .appendTo(p) [0])
                                }
                            }
                        }
                    }
                    if (!r.iframeTarget) {
                        G.appendTo('body');
                        if (B.attachEvent) {
                            B.attachEvent('onload', m)
                        } else {
                            B.addEventListener('load', m, false)
                        }
                    }
                    setTimeout(af, 15);
                    try {
                        p.submit()
                    } catch (ae) {
                        var ad = document.createElement('form') .submit;
                        ad.apply(p)
                    }
                } finally {
                    p.setAttribute('action', ab);
                    if (ag) {
                        p.setAttribute('target', ag)
                    } else {
                        T.removeAttr('target')
                    }
                    k(aa) .remove()
                }
            }
            if (r.forceSync) {
                ar()
            } else {
                setTimeout(ar, 10)
            }
            var ai,
            F,
            ak = 50,
            n;
            function m(af) {
                if (E.aborted || n) {
                    return
                }
                F = x(B);
                if (!F) {
                    g('cannot access response document');
                    af = z
                }
                if (af === t && E) {
                    E.abort('timeout');
                    C.reject(E, 'timeout');
                    return
                } else {
                    if (af == z && E) {
                        E.abort('server abort');
                        C.reject(E, 'error', 'server abort');
                        return
                    }
                }
                if (!F || F.location.href == r.iframeSrc) {
                    if (!an) {
                        return
                    }
                }
                if (B.detachEvent) {
                    B.detachEvent('onload', m)
                } else {
                    B.removeEventListener('load', m, false)
                }
                var ah = 'success',
                ad;
                try {
                    if (an) {
                        throw 'timeout'
                    }
                    var aq = r.dataType == 'xml' || F.XMLDocument || k.isXMLDoc(F);
                    g('isXml=' + aq);
                    if (!aq && window.opera && (F.body === null || !F.body.innerHTML)) {
                        if (--ak) {
                            g('requeing onLoad callback, DOM not available');
                            setTimeout(m, 250);
                            return
                        }
                    }
                    var ac = F.body ? F.body : F.documentElement;
                    E.responseText = ac ? ac.innerHTML : null;
                    E.responseXML = F.XMLDocument ? F.XMLDocument : F;
                    if (aq) {
                        r.dataType = 'xml'
                    }
                    E.getResponseHeader = function (at) {
                        var au = {
                            'content-type': r.dataType
                        };
                        return au[at]
                    };
                    if (ac) {
                        E.status = Number(ac.getAttribute('status')) || E.status;
                        E.statusText = ac.getAttribute('statusText') || E.statusText
                    }
                    var aa = (r.dataType || '') .toLowerCase();
                    var ae = /(json|script|text)/.test(aa);
                    if (ae || r.textarea) {
                        var ag = F.getElementsByTagName('textarea') [0];
                        if (ag) {
                            E.responseText = ag.value;
                            E.status = Number(ag.getAttribute('status')) || E.status;
                            E.statusText = ag.getAttribute('statusText') || E.statusText
                        } else {
                            if (ae) {
                                var aw = F.getElementsByTagName('pre') [0];
                                var ab = F.getElementsByTagName('body') [0];
                                if (aw) {
                                    E.responseText = aw.textContent ? aw.textContent : aw.innerText
                                } else {
                                    if (ab) {
                                        E.responseText = ab.textContent ? ab.textContent : ab.innerText
                                    }
                                }
                            }
                        }
                    } else {
                        if (aa == 'xml' && !E.responseXML && E.responseText) {
                            E.responseXML = o(E.responseText)
                        }
                    }
                    try {
                        ai = A(E, aa, r)
                    } catch (av) {
                        ah = 'parsererror';
                        E.error = ad = (av || ah)
                    }
                } catch (av) {
                    g('error caught: ', av);
                    ah = 'error';
                    E.error = ad = (av || ah)
                }
                if (E.aborted) {
                    g('upload aborted');
                    ah = null
                }
                if (E.status) {
                    ah = (E.status >= 200 && E.status < 300 || E.status === 304) ? 'success' : 'error'
                }
                if (ah === 'success') {
                    if (r.success) {
                        r.success.call(r.context, ai, 'success', E)
                    }
                    C.resolve(E.responseText, 'success', E);
                    if (al) {
                        k.event.trigger('ajaxSuccess', [
                            E,
                            r
                        ])
                    }
                } else {
                    if (ah) {
                        if (ad === undefined) {
                            ad = E.statusText
                        }
                        if (r.error) {
                            r.error.call(r.context, E, ah, ad)
                        }
                        C.reject(E, 'error', ad);
                        if (al) {
                            k.event.trigger('ajaxError', [
                                E,
                                r,
                                ad
                            ])
                        }
                    }
                }
                if (al) {
                    k.event.trigger('ajaxComplete', [
                        E,
                        r
                    ])
                }
                if (al && !--k.active) {
                    k.event.trigger('ajaxStop')
                }
                if (r.complete) {
                    r.complete.call(r.context, E, ah)
                }
                n = true;
                if (r.timeout) {
                    clearTimeout(v)
                }
                setTimeout(function () {
                    if (!r.iframeTarget) {
                        G.remove()
                    }
                    E.responseXML = null
                }, 100)
            }
            var o = k.parseXML || function (ab, aa) {
                if (window.ActiveXObject) {
                    aa = new ActiveXObject('Microsoft.XMLDOM');
                    aa.async = 'false';
                    aa.loadXML(ab)
                } else {
                    aa = (new DOMParser()) .parseFromString(ab, 'text/xml')
                }
                return (aa && aa.documentElement && aa.documentElement.nodeName != 'parsererror') ? aa : null
            };
            var y = k.parseJSON || function (aa) {
                return window['eval']('(' + aa + ')')
            };
            var A = function (ac, ae, af) {
                var aa = ac.getResponseHeader('content-type') || '',
                ab = ae === 'xml' || !ae && aa.indexOf('xml') >= 0,
                ad = ab ? ac.responseXML : ac.responseText;
                if (ab && ad.documentElement.nodeName === 'parsererror') {
                    if (k.error) {
                        k.error('parsererror')
                    }
                }
                if (af && af.dataFilter) {
                    ad = af.dataFilter(ad, ae)
                }
                if (typeof ad === 'string') {
                    if (ae === 'json' || !ae && aa.indexOf('json') >= 0) {
                        ad = y(ad)
                    } else {
                        if (ae === 'script' || !ae && aa.indexOf('javascript') >= 0) {
                            k.globalEval(ad)
                        }
                    }
                }
                return ad
            };
            return C
        }
    };
    k.fn.ajaxForm = function (b) {
        b = b || {
        };
        b.delegation = b.delegation && k.isFunction(k.fn.on);
        if (!b.delegation && this.length === 0) {
            var a = {
                s: this.selector,
                c: this.context
            };
            if (!k.isReady && a.s) {
                g('DOM not ready, queuing ajaxForm');
                k(function () {
                    k(a.s, a.c) .ajaxForm(b)
                });
                return this
            }
            g('terminating; zero elements found by selector' + (k.isReady ? '' : ' (DOM not ready)'));
            return this
        }
        if (b.delegation) {
            k(document) .off('submit.form-plugin', this.selector, i) .off('click.form-plugin', this.selector, j) .on('submit.form-plugin', this.selector, b, i) .on('click.form-plugin', this.selector, b, j);
            return this
        }
        return this.ajaxFormUnbind() .bind('submit.form-plugin', b, i) .bind('click.form-plugin', b, j)
    };
    function i(a) {
        var b = a.data;
        if (!a.isDefaultPrevented()) {
            a.preventDefault();
            k(this) .ajaxSubmit(b)
        }
    }
    function j(f) {
        var a = f.target;
        var c = k(a);
        if (!(c.is('[type=submit],[type=image]'))) {
            var d = c.closest('[type=submit]');
            if (d.length === 0) {
                return
            }
            a = d[0]
        }
        var b = this;
        b.clk = a;
        if (a.type == 'image') {
            if (f.offsetX !== undefined) {
                b.clk_x = f.offsetX;
                b.clk_y = f.offsetY
            } else {
                if (typeof k.fn.offset == 'function') {
                    var e = c.offset();
                    b.clk_x = f.pageX - e.left;
                    b.clk_y = f.pageY - e.top
                } else {
                    b.clk_x = f.pageX - a.offsetLeft;
                    b.clk_y = f.pageY - a.offsetTop
                }
            }
        }
        setTimeout(function () {
            b.clk = b.clk_x = b.clk_y = null
        }, 100)
    }
    k.fn.ajaxFormUnbind = function () {
        return this.unbind('submit.form-plugin click.form-plugin')
    };
    k.fn.formToArray = function (x, b) {
        var y = [
        ];
        if (this.length === 0) {
            return y
        }
        var f = this[0];
        var c = x ? f.getElementsByTagName('*')  : f.elements;
        if (!c) {
            return y
        }
        var D,
        a,
        d,
        v,
        e,
        A,
        n;
        for (D = 0, A = c.length; D < A; D++) {
            e = c[D];
            d = e.name;
            if (!d || e.disabled) {
                continue
            }
            if (x && f.clk && e.type == 'image') {
                if (f.clk == e) {
                    y.push({
                        name: d,
                        value: k(e) .val(),
                        type: e.type
                    });
                    y.push({
                        name: d + '.x',
                        value: f.clk_x
                    }, {
                        name: d + '.y',
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
                if (h.fileapi && e.type == 'file') {
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
                            value: '',
                            type: e.type
                        })
                    }
                } else {
                    if (v !== null && typeof v != 'undefined') {
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
            if (d && !z.disabled && z.type == 'image') {
                y.push({
                    name: d,
                    value: B.val()
                });
                y.push({
                    name: d + '.x',
                    value: f.clk_x
                }, {
                    name: d + '.y',
                    value: f.clk_y
                })
            }
        }
        return y
    };
    k.fn.formSerialize = function (a) {
        return k.param(this.formToArray(a))
    };
    k.fn.fieldSerialize = function (a) {
        var b = [
        ];
        this.each(function () {
            var c = this.name;
            if (!c) {
                return
            }
            var e = k.fieldValue(this, a);
            if (e && e.constructor == Array) {
                for (var d = 0, f = e.length; d < f; d++) {
                    b.push({
                        name: c,
                        value: e[d]
                    })
                }
            } else {
                if (e !== null && typeof e != 'undefined') {
                    b.push({
                        name: this.name,
                        value: e
                    })
                }
            }
        });
        return k.param(b)
    };
    k.fn.fieldValue = function (e) {
        for (var f = [
        ], b = 0, d = this.length; b < d; b++) {
            var a = this[b];
            var c = k.fieldValue(a, e);
            if (c === null || typeof c == 'undefined' || (c.constructor == Array && !c.length)) {
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
    k.fieldValue = function (a, n) {
        var y = a.name,
        e = a.type,
        c = a.tagName.toLowerCase();
        if (n === undefined) {
            n = true
        }
        if (n && (!y || a.disabled || e == 'reset' || e == 'button' || (e == 'checkbox' || e == 'radio') && !a.checked || (e == 'submit' || e == 'image') && a.form && a.form.clk != a || c == 'select' && a.selectedIndex == - 1)) {
            return null
        }
        if (c == 'select') {
            var f = a.selectedIndex;
            if (f < 0) {
                return null
            }
            var b = [
            ],
            z = a.options;
            var v = (e == 'select-one');
            var d = (v ? f + 1 : z.length);
            for (var w = (v ? f : 0); w < d; w++) {
                var t = z[w];
                if (t.selected) {
                    var x = t.value;
                    if (!x) {
                        x = (t.attributes && t.attributes.value && !(t.attributes.value.specified)) ? t.text : t.value
                    }
                    if (v) {
                        return x
                    }
                    b.push(x)
                }
            }
            return b
        }
        return k(a) .val()
    };
    k.fn.clearForm = function (a) {
        return this.each(function () {
            k('input,select,textarea', this) .clearFields(a)
        })
    };
    k.fn.clearFields = k.fn.clearInputs = function (b) {
        var a = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var c = this.type,
            d = this.tagName.toLowerCase();
            if (a.test(c) || d == 'textarea') {
                this.value = ''
            } else {
                if (c == 'checkbox' || c == 'radio') {
                    this.checked = false
                } else {
                    if (d == 'select') {
                        this.selectedIndex = - 1
                    } else {
                        if (c == 'file') {
                            if (/MSIE/.test(navigator.userAgent)) {
                                k(this) .replaceWith(k(this) .clone(true))
                            } else {
                                k(this) .val('')
                            }
                        } else {
                            if (b) {
                                if ((b === true && /hidden/.test(c)) || (typeof b == 'string' && k(this) .is(b))) {
                                    this.value = ''
                                }
                            }
                        }
                    }
                }
            }
        })
    };
    k.fn.resetForm = function () {
        return this.each(function () {
            if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
                this.reset()
            }
        })
    };
    k.fn.enable = function (a) {
        if (a === undefined) {
            a = true
        }
        return this.each(function () {
            this.disabled = !a
        })
    };
    k.fn.selected = function (a) {
        if (a === undefined) {
            a = true
        }
        return this.each(function () {
            var b = this.type;
            if (b == 'checkbox' || b == 'radio') {
                this.checked = a
            } else {
                if (this.tagName.toLowerCase() == 'option') {
                    var c = k(this) .parent('select');
                    if (a && c[0] && c[0].type == 'select-one') {
                        c.find('option') .selected(false)
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
        var a = '[jquery.form] ' + Array.prototype.join.call(arguments, '');
        if (window.console && window.console.log) {
            window.console.log(a)
        } else {
            if (window.opera && window.opera.postError) {
                window.opera.postError(a)
            }
        }
    }
}) (jQuery);
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
(function (b) {
    b.extend(b.fn, {
        validate: function (a) {
            if (!this.length) {
                if (a && a.debug && window.console) {
                    console.warn('Nothing selected, can't validate, returning nothing.')
                }
                return
            }
            var d = b.data(this[0], 'validator');
            if (d) {
                return d
            }
            this['novalidate'] = 'novalidate';
            d = new b.validator(a, this[0]);
            b.data(this[0], 'validator', d);
            if (d.settings.onsubmit) {
                this.validateDelegate(':submit', 'click', function (c) {
                    if (d.settings.submitHandler) {
                        d.submitButton = c.target
                    }
                    if (b(c.target) .hasClass('cancel')) {
                        d.cancelSubmit = true
                    }
                    if (b(c.target) .attr('formnovalidate') !== undefined) {
                        d.cancelSubmit = true
                    }
                });
                this.submit(function (f) {
                    if (d.settings.debug) {
                        f.preventDefault()
                    }
                    function c() {
                        var e;
                        if (d.settings.submitHandler) {
                            if (d.submitButton) {
                                e = b('<input type='hidden'/>') .attr('name', d.submitButton.name) .val(b(d.submitButton) .val()) .appendTo(d.currentForm)
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
        valid: function () {
            if (b(this[0]) .is('form')) {
                return this.validate() .form()
            } else {
                var d = true;
                var a = b(this[0].form) .validate();
                this.each(function () {
                    d = d && a.element(this)
                });
                return d
            }
        },
        removeAttrs: function (e) {
            var a = {
            },
            f = this;
            b.each(e.split(/\s/), function (d, c) {
                a[c] = f.attr(c);
                f.removeAttr(c)
            });
            return a
        },
        rules: function (o, r) {
            var m = this[0];
            if (o) {
                var p = b.data(m.form, 'validator') .settings;
                var k = p.rules;
                var a = b.validator.staticRules(m);
                switch (o) {
                case 'add':
                    b.extend(a, b.validator.normalizeRule(r));
                    delete a.messages;
                    k[m.name] = a;
                    if (r.messages) {
                        p.messages[m.name] = b.extend(p.messages[m.name], r.messages)
                    }
                    break;
                case 'remove':
                    if (!r) {
                        delete k[m.name];
                        return a
                    }
                    var l = {
                    };
                    b.each(r.split(/\s/), function (d, c) {
                        l[c] = a[c];
                        delete a[c]
                    });
                    return l
                }
            }
            var n = b.validator.normalizeRules(b.extend({
            }, b.validator.classRules(m), b.validator.attributeRules(m), b.validator.dataRules(m), b.validator.staticRules(m)), m);
            if (n.required) {
                var q = n.required;
                delete n.required;
                n = b.extend({
                    required: q
                }, n)
            }
            return n
        }
    });
    b.extend(b.expr[':'], {
        blank: function (a) {
            return !b.trim('' + b(a) .val())
        },
        filled: function (a) {
            return !!b.trim('' + b(a) .val())
        },
        unchecked: function (a) {
            return !b(a) .prop('checked')
        }
    });
    b.validator = function (a, d) {
        this.settings = b.extend(true, {
        }, b.validator.defaults, a);
        this.currentForm = d;
        this.init()
    };
    b.validator.format = function (a, d) {
        if (arguments.length === 1) {
            return function () {
                var c = b.makeArray(arguments);
                c.unshift(a);
                return b.validator.format.apply(this, c)
            }
        }
        if (arguments.length > 2 && d.constructor !== Array) {
            d = b.makeArray(arguments) .slice(1)
        }
        if (d.constructor !== Array) {
            d = [
                d
            ]
        }
        b.each(d, function (f, c) {
            a = a.replace(new RegExp('\{' + f + '\}', 'g'), function () {
                return c
            })
        });
        return a
    };
    b.extend(b.validator, {
        defaults: {
            messages: {
            },
            groups: {
            },
            rules: {
            },
            errorClass: 'error',
            validClass: 'valid',
            errorElement: 'label',
            focusInvalid: true,
            errorContainer: b([]),
            errorLabelContainer: b([]),
            onsubmit: true,
            ignore: ':hidden',
            ignoreTitle: false,
            onfocusin: function (a, d) {
                this.lastActive = a;
                if (this.settings.focusCleanup && !this.blockFocusCleanup) {
                    if (this.settings.unhighlight) {
                        this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass)
                    }
                    this.addWrapper(this.errorsFor(a)) .hide()
                }
            },
            onfocusout: function (a, d) {
                if (!this.checkable(a) && (a.name in this.submitted || !this.optional(a))) {
                    this.element(a)
                }
            },
            onkeyup: function (a, d) {
                if (d.which === 9 && this.elementValue(a) === '') {
                    return
                } else {
                    if (a.name in this.submitted || a === this.lastElement) {
                        this.element(a)
                    }
                }
            },
            onclick: function (a, d) {
                if (a.name in this.submitted) {
                    this.element(a)
                } else {
                    if (a.parentNode.name in this.submitted) {
                        this.element(a.parentNode)
                    }
                }
            },
            highlight: function (e, a, f) {
                if (e.type === 'radio') {
                    this.findByName(e.name) .addClass(a) .removeClass(f)
                } else {
                    b(e) .addClass(a) .removeClass(f)
                }
            },
            unhighlight: function (e, a, f) {
                if (e.type === 'radio') {
                    this.findByName(e.name) .removeClass(a) .addClass(f)
                } else {
                    b(e) .removeClass(a) .addClass(f)
                }
            }
        },
        setDefaults: function (a) {
            b.extend(b.validator.defaults, a)
        },
        messages: {
            required: 'This field is required.',
            remote: 'Please fix this field.',
            email: 'Please enter a valid email address.',
            url: 'Please enter a valid URL.',
            date: 'Please enter a valid date.',
            dateISO: 'Please enter a valid date (ISO).',
            number: 'Please enter a valid number.',
            digits: 'Please enter only digits.',
            creditcard: 'Please enter a valid credit card number.',
            equalTo: 'Please enter the same value again.',
            maxlength: b.validator.format('Please enter no more than {0} characters.'),
            minlength: b.validator.format('Please enter at least {0} characters.'),
            rangelength: b.validator.format('Please enter a value between {0} and {1} characters long.'),
            range: b.validator.format('Please enter a value between {0} and {1}.'),
            max: b.validator.format('Please enter a value less than or equal to {0}.'),
            min: b.validator.format('Please enter a value greater than or equal to {0}.')
        },
        autoCreateRanges: false,
        prototype: {
            init: function () {
                this.labelContainer = b(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || b(this.currentForm);
                this.containers = b(this.settings.errorContainer) .add(this.settings.errorLabelContainer);
                this.submitted = {
                };
                this.valueCache = {
                };
                this.pendingRequest = 0;
                this.pending = {
                };
                this.invalid = {
                };
                this.reset();
                var a = (this.groups = {
                });
                b.each(this.settings.groups, function (d, c) {
                    if (typeof c === 'string') {
                        c = c.split(/\s/)
                    }
                    b.each(c, function (i, j) {
                        a[j] = d
                    })
                });
                var e = this.settings.rules;
                b.each(e, function (d, c) {
                    e[d] = b.validator.normalizeRule(c)
                });
                function f(c) {
                    var d = b.data(this[0].form, 'validator'),
                    h = 'on' + c.type.replace(/^validate/, '');
                    if (d.settings[h]) {
                        d.settings[h].call(d, this[0], c)
                    }
                }
                b(this.currentForm) .validateDelegate(':text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ', 'focusin focusout keyup', f) .validateDelegate('[type='radio'], [type='checkbox'], select, option', 'click', f);
                if (this.settings.invalidHandler) {
                    b(this.currentForm) .bind('invalid-form.validate', this.settings.invalidHandler)
                }
            },
            form: function () {
                this.checkForm();
                b.extend(this.submitted, this.errorMap);
                this.invalid = b.extend({
                }, this.errorMap);
                if (!this.valid()) {
                    b(this.currentForm) .triggerHandler('invalid-form', [
                        this
                    ])
                }
                this.showErrors();
                return this.valid()
            },
            checkForm: function () {
                this.prepareForm();
                for (var a = 0, d = (this.currentElements = this.elements()); d[a]; a++) {
                    this.check(d[a])
                }
                return this.valid()
            },
            element: function (d) {
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
            showErrors: function (d) {
                if (d) {
                    b.extend(this.errorMap, d);
                    this.errorList = [
                    ];
                    for (var a in d) {
                        this.errorList.push({
                            message: d[a],
                            element: this.findByName(a) [0]
                        })
                    }
                    this.successList = b.grep(this.successList, function (c) {
                        return !(c.name in d)
                    })
                }
                if (this.settings.showErrors) {
                    this.settings.showErrors.call(this, this.errorMap, this.errorList)
                } else {
                    this.defaultShowErrors()
                }
            },
            resetForm: function () {
                if (b.fn.resetForm) {
                    b(this.currentForm) .resetForm()
                }
                this.submitted = {
                };
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements() .removeClass(this.settings.errorClass) .removeData('previousValue')
            },
            numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            },
            objectLength: function (e) {
                var f = 0;
                for (var a in e) {
                    f++
                }
                return f
            },
            hideErrors: function () {
                this.addWrapper(this.toHide) .hide()
            },
            valid: function () {
                return this.size() === 0
            },
            size: function () {
                return this.errorList.length
            },
            focusInvalid: function () {
                if (this.settings.focusInvalid) {
                    try {
                        b(this.findLastActive() || this.errorList.length && this.errorList[0].element || []) .filter(':visible') .focus() .trigger('focusin')
                    } catch (a) {
                    }
                }
            },
            findLastActive: function () {
                var a = this.lastActive;
                return a && b.grep(this.errorList, function (d) {
                    return d.element.name === a.name
                }) .length === 1 && a
            },
            elements: function () {
                var d = this,
                a = {
                };
                return b(this.currentForm) .find('input, select, textarea') .not(':submit, :reset, :image, [disabled]') .not(this.settings.ignore) .filter(function () {
                    if (typeof this.name == undefined || typeof this.name == 'undefined' || this.name == '') {
                        return false
                    }
                    if (!this.name && d.settings.debug && window.console) {
                        console.error('%o has no name assigned', this)
                    }
                    if (this.name in a || !d.objectLength(b(this) .rules())) {
                        return false
                    }
                    a[this.name] = true;
                    return true
                })
            },
            clean: function (a) {
                return b(a) [0]
            },
            errors: function () {
                var a = this.settings.errorClass.replace(' ', '.');
                return b(this.settings.errorElement + '.' + a, this.errorContext)
            },
            reset: function () {
                this.successList = [
                ];
                this.errorList = [
                ];
                this.errorMap = {
                };
                this.toShow = b([]);
                this.toHide = b([]);
                this.currentElements = b([])
            },
            prepareForm: function () {
                this.reset();
                this.toHide = this.errors() .add(this.containers)
            },
            prepareElement: function (a) {
                this.reset();
                this.toHide = this.errorsFor(a)
            },
            elementValue: function (a) {
                var f = b(a) .attr('type'),
                e = b(a) .val();
                if (f === 'radio' || f === 'checkbox') {
                    return b('input[name='' + b(a) .attr('name') + '']:checked') .val()
                }
                if (typeof e === 'string') {
                    return e.replace(/\r/g, '')
                }
                return e
            },
            check: function (l) {
                l = this.validationTargetFor(this.clean(l));
                var n = b(l) .rules();
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
                        if (p === 'dependency-mismatch') {
                            k = true;
                            continue
                        }
                        k = false;
                        if (p === 'pending') {
                            this.toHide = this.toHide.not(this.errorsFor(l));
                            return
                        }
                        if (!p) {
                            this.formatAndAdd(l, a);
                            return false
                        }
                    } catch (e) {
                        if (this.settings.debug && window.console) {
                            console.log('Exception occurred when checking element ' + l.id + ', check the '' + a.method + '' method.', e)
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
            customDataMessage: function (a, d) {
                return b(a) .data('msg-' + d.toLowerCase()) || (a.attributes && b(a) .attr('data-msg-' + d.toLowerCase()))
            },
            customMessage: function (f, e) {
                var a = this.settings.messages[f];
                return a && (a.constructor === String ? a : a[e])
            },
            findDefined: function () {
                for (var a = 0; a < arguments.length; a++) {
                    if (arguments[a] !== undefined) {
                        return arguments[a]
                    }
                }
                return undefined
            },
            defaultMessage: function (a, d) {
                return this.findDefined(this.customMessage(a.name, d), this.customDataMessage(a, d), !this.settings.ignoreTitle && a.title || undefined, b.validator.messages[d], '<strong>Warning: No message defined for ' + a.name + '</strong>')
            },
            formatAndAdd: function (h, f) {
                var g = this.defaultMessage(h, f.method),
                a = /\$?\{(\d+)\}/g;
                if (typeof g === 'function') {
                    g = g.call(this, f.parameters, h)
                } else {
                    if (a.test(g)) {
                        g = b.validator.format(g.replace(a, '{$1}'), f.parameters)
                    }
                }
                this.errorList.push({
                    message: g,
                    element: h
                });
                this.errorMap[h.name] = g;
                this.submitted[h.name] = g
            },
            addWrapper: function (a) {
                if (this.settings.wrapper) {
                    a = a.add(a.parent(this.settings.wrapper))
                }
                return a
            },
            defaultShowErrors: function () {
                var f,
                e;
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
                this.addWrapper(this.toShow) .show()
            },
            validElements: function () {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function () {
                return b(this.errorList) .map(function () {
                    return this.element
                })
            },
            showLabel: function (f, e) {
                var a = this.errorsFor(f);
                if (a.length) {
                    a.removeClass(this.settings.validClass) .addClass(this.settings.errorClass);
                    a.html(e)
                } else {
                    a = b('<' + this.settings.errorElement + '>') .attr('for', this.idOrName(f)) .addClass(this.settings.errorClass) .html(e || '');
                    if (this.settings.wrapper) {
                        a = a.hide() .show() .wrap('<' + this.settings.wrapper + '/>') .parent()
                    }
                    if (!this.labelContainer.append(a) .length) {
                        if (this.settings.errorPlacement) {
                            this.settings.errorPlacement(a, b(f))
                        } else {
                            a.insertAfter(f)
                        }
                    }
                }
                if (!e && this.settings.success) {
                    a.text('');
                    if (typeof this.settings.success === 'string') {
                        a.addClass(this.settings.success)
                    } else {
                        this.settings.success(a, f)
                    }
                }
                this.toShow = this.toShow.add(a)
            },
            errorsFor: function (d) {
                var a = this.idOrName(d);
                return this.errors() .filter(function () {
                    return b(this) .attr('for') === a
                })
            },
            idOrName: function (a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function (a) {
                if (this.checkable(a)) {
                    a = this.findByName(a.name) .not(this.settings.ignore) [0]
                }
                return a
            },
            checkable: function (a) {
                return (/radio|checkbox/i) .test(a.type)
            },
            findByName: function (a) {
                return b(this.currentForm) .find('[name='' + a + '']')
            },
            getLength: function (d, a) {
                switch (a.nodeName.toLowerCase()) {
                case 'select':
                    return b('option:selected', a) .length;
                case 'input':
                    if (this.checkable(a)) {
                        return this.findByName(a.name) .filter(':checked') .length
                    }
                }
                return d.length
            },
            depend: function (d, a) {
                return this.dependTypes[typeof d] ? this.dependTypes[typeof d](d, a)  : true
            },
            dependTypes: {
                'boolean': function (d, a) {
                    return d
                },
                string: function (d, a) {
                    return !!b(d, a.form) .length
                },
                'function': function (d, a) {
                    return d(a)
                }
            },
            optional: function (a) {
                var d = this.elementValue(a);
                return !b.validator.methods.required.call(this, d, a) && 'dependency-mismatch'
            },
            startRequest: function (a) {
                if (!this.pending[a.name]) {
                    this.pendingRequest++;
                    this.pending[a.name] = true
                }
            },
            stopRequest: function (a, d) {
                this.pendingRequest--;
                if (this.pendingRequest < 0) {
                    this.pendingRequest = 0
                }
                delete this.pending[a.name];
                if (d && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
                    b(this.currentForm) .submit();
                    this.formSubmitted = false
                } else {
                    if (!d && this.pendingRequest === 0 && this.formSubmitted) {
                        b(this.currentForm) .triggerHandler('invalid-form', [
                            this
                        ]);
                        this.formSubmitted = false
                    }
                }
            },
            previousValue: function (a) {
                return b.data(a, 'previousValue') || b.data(a, 'previousValue', {
                    old: null,
                    valid: true,
                    message: this.defaultMessage(a, 'remote')
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
        addClassRules: function (a, d) {
            if (a.constructor === String) {
                this.classRuleSettings[a] = d
            } else {
                b.extend(this.classRuleSettings, a)
            }
        },
        classRules: function (f) {
            var e = {
            };
            var a = b(f) .attr('class');
            if (a) {
                b.each(a.split(' '), function () {
                    if (this in b.validator.classRuleSettings) {
                        b.extend(e, b.validator.classRuleSettings[this])
                    }
                })
            }
            return e
        },
        attributeRules: function (l) {
            var i = {
            };
            var a = b(l);
            var k = a[0].getAttribute('type');
            for (var h in b.validator.methods) {
                var j;
                if (h === 'required') {
                    j = a.get(0) .getAttribute(h);
                    if (j === '') {
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
                    if (k === h && k !== 'range') {
                        i[h] = true
                    }
                }
            }
            if (i.maxlength && /-1|2147483647|524288/.test(i.maxlength)) {
                delete i.maxlength
            }
            return i
        },
        dataRules: function (j) {
            var g,
            i,
            h = {
            },
            a = b(j);
            for (g in b.validator.methods) {
                i = a.data('rule-' + g.toLowerCase());
                if (i !== undefined) {
                    h[g] = i
                }
            }
            return h
        },
        staticRules: function (f) {
            var e = {
            };
            var a = b.data(f.form, 'validator');
            if (a.settings.rules) {
                e = b.validator.normalizeRule(a.settings.rules[f.name]) || {
                }
            }
            return e
        },
        normalizeRules: function (d, a) {
            b.each(d, function (c, g) {
                if (g === false) {
                    delete d[c];
                    return
                }
                if (g.param || g.depends) {
                    var h = true;
                    switch (typeof g.depends) {
                    case 'string':
                        h = !!b(g.depends, a.form) .length;
                        break;
                    case 'function':
                        h = g.depends.call(a, a);
                        break
                    }
                    if (h) {
                        d[c] = g.param !== undefined ? g.param : true
                    } else {
                        delete d[c]
                    }
                }
            });
            b.each(d, function (f, c) {
                d[f] = b.isFunction(c) ? c(a)  : c
            });
            b.each(['minlength',
            'maxlength'], function () {
                if (d[this]) {
                    d[this] = Number(d[this])
                }
            });
            b.each(['rangelength',
            'range'], function () {
                var c;
                if (d[this]) {
                    if (b.isArray(d[this])) {
                        d[this] = [
                            Number(d[this][0]),
                            Number(d[this][1])
                        ]
                    } else {
                        if (typeof d[this] === 'string') {
                            c = d[this].split(/[\s,]+/);
                            d[this] = [
                                Number(c[0]),
                                Number(c[1])
                            ]
                        }
                    }
                }
            });
            if (b.validator.autoCreateRanges) {
                if (d.min && d.max) {
                    d.range = [
                        d.min,
                        d.max
                    ];
                    delete d.min;
                    delete d.max
                }
                if (d.minlength && d.maxlength) {
                    d.rangelength = [
                        d.minlength,
                        d.maxlength
                    ];
                    delete d.minlength;
                    delete d.maxlength
                }
            }
            return d
        },
        normalizeRule: function (d) {
            if (typeof d === 'string') {
                var a = {
                };
                b.each(d.split(/\s/), function () {
                    a[this] = true
                });
                d = a
            }
            return d
        },
        addMethod: function (a, e, f) {
            b.validator.methods[a] = e;
            b.validator.messages[a] = f !== undefined ? f : b.validator.messages[a];
            if (e.length < 3) {
                b.validator.addClassRules(a, b.validator.normalizeRule(a))
            }
        },
        methods: {
            required: function (h, a, f) {
                if (!this.depend(f, a)) {
                    return 'dependency-mismatch'
                }
                if (a.nodeName.toLowerCase() === 'select') {
                    var g = b(a) .val();
                    return g && g.length > 0
                }
                if (this.checkable(a)) {
                    return this.getLength(h, a) > 0
                }
                return b.trim(h) .length > 0
            },
            email: function (d, a) {
                return this.optional(a) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(d)
            },
            url: function (d, a) {
                return this.optional(a) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(d)
            },
            date: function (d, a) {
                return this.optional(a) || !/Invalid|NaN/.test(new Date(d) .toString())
            },
            dateISO: function (d, a) {
                return this.optional(a) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(d)
            },
            number: function (d, a) {
                return this.optional(a) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(d)
            },
            digits: function (d, a) {
                return this.optional(a) || /^\d+$/.test(d)
            },
            creditcard: function (l, i) {
                if (this.optional(i)) {
                    return 'dependency-mismatch'
                }
                if (/[^0-9 \-]+/.test(l)) {
                    return false
                }
                var k = 0,
                m = 0,
                n = false;
                l = l.replace(/\D/g, '');
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
            minlength: function (g, a, f) {
                var h = b.isArray(g) ? g.length : this.getLength(b.trim(g), a);
                return this.optional(a) || h >= f
            },
            maxlength: function (g, a, f) {
                var h = b.isArray(g) ? g.length : this.getLength(b.trim(g), a);
                return this.optional(a) || h <= f
            },
            rangelength: function (g, a, f) {
                var h = b.isArray(g) ? g.length : this.getLength(b.trim(g), a);
                return this.optional(a) || (h >= f[0] && h <= f[1])
            },
            min: function (f, a, e) {
                return this.optional(a) || f >= e
            },
            max: function (f, a, e) {
                return this.optional(a) || f <= e
            },
            range: function (f, a, e) {
                return this.optional(a) || (f >= e[0] && f <= e[1])
            },
            equalTo: function (h, a, f) {
                var g = b(f);
                if (this.settings.onfocusout) {
                    g.unbind('.validate-equalTo') .bind('blur.validate-equalTo', function () {
                        b(a) .valid()
                    })
                }
                return h === g.val()
            },
            accept: function (f, a, e) {
                e = typeof e == 'string' ? e.replace(/,/g, '|')  : 'png|jpe?g|gif';
                return this.optional(a) || f.match(new RegExp('.(' + e + ')$', 'i'))
            },
            differentFrom: function (h, a, f) {
                var g = b(f) .unbind('.validate-equalTo') .bind('blur.validate-equalTo', function () {
                    b(a) .valid()
                });
                return h != g.val()
            },
            validatPwd: function (h, a) {
                var f = true;
                var g = new RegExp('(?![a-z]+$|[0-9]+$|_+$)^[a-zA-Z0-9_]{6,}$');
                if (g.test(h)) {
                    f = true
                } else {
                    f = false
                }
                return this.optional(a) || f
            },
            remote: function (i, l, h) {
                if (this.optional(l)) {
                    return 'dependency-mismatch'
                }
                var k = this.previousValue(l);
                if (!this.settings.messages[l.name]) {
                    this.settings.messages[l.name] = {
                    }
                }
                k.originalMessage = this.settings.messages[l.name].remote;
                this.settings.messages[l.name].remote = k.message;
                h = typeof h === 'string' && {
                    url: h
                }
                || h;
                if (k.old === i) {
                    return k.valid
                }
                k.old = i;
                var a = this;
                this.startRequest(l);
                var j = {
                };
                j[l.name] = i;
                b.ajax(b.extend(true, {
                    url: h,
                    mode: 'abort',
                    port: 'validate' + l.name,
                    dataType: 'json',
                    data: j,
                    success: function (f) {
                        a.settings.messages[l.name].remote = k.originalMessage;
                        var d = f === true || f === 'true';
                        if (d) {
                            var g = a.formSubmitted;
                            a.prepareElement(l);
                            a.formSubmitted = g;
                            a.successList.push(l);
                            delete a.invalid[l.name];
                            a.showErrors()
                        } else {
                            var c = {
                            };
                            var e = f || a.defaultMessage(l, 'remote');
                            c[l.name] = k.message = b.isFunction(e) ? e(i)  : e;
                            a.invalid[l.name] = true;
                            a.showErrors(c)
                        }
                        k.valid = d;
                        a.stopRequest(l, d)
                    }
                }, h));
                return 'pending'
            }
        }
    });
    b.format = b.validator.format
}(jQuery));
(function (e) {
    var d = {
    };
    if (e.ajaxPrefilter) {
        e.ajaxPrefilter(function (h, a, c) {
            var b = h.port;
            if (h.mode === 'abort') {
                if (d[b]) {
                    d[b].abort()
                }
                d[b] = c
            }
        })
    } else {
        var f = e.ajax;
        e.ajax = function (c) {
            var b = ('mode' in c ? c : e.ajaxSettings) .mode,
            a = ('port' in c ? c : e.ajaxSettings) .port;
            if (b === 'abort') {
                if (d[a]) {
                    d[a].abort()
                }
                d[a] = f.apply(this, arguments);
                return d[a]
            }
            return f.apply(this, arguments)
        }
    }
}(jQuery));
(function (b) {
    b.extend(b.fn, {
        validateDelegate: function (e, f, a) {
            return this.bind(f, function (d) {
                var c = b(d.target);
                if (c.is(e)) {
                    return a.apply(c, arguments)
                }
            })
        }
    })
}(jQuery));
var messages = {
    'message.confirm': '您确认吗？',
    'message.info': '信息提示',
    'button.ok': '确认',
    'message.error': '提示'
};
(function (b) {
    b.extend(b.validator.messages, {
        required: '必选字段',
        remote: '请修正该字段',
        email: '请输入正确格式的电子邮件',
        url: '请输入合法的网址',
        date: '请输入合法的日期',
        dateISO: '请输入合法的日期 (ISO).',
        number: '请输入合法的数字',
        digits: '只能输入整数',
        creditcard: '请输入合法的信用卡号',
        equalTo: '请再次输入相同的值',
        accept: '请输入拥有合法后缀名的字符串',
        maxlength: b.validator.format('请输入一个长度最多是 {0} 的字符串'),
        minlength: b.validator.format('请输入一个长度最少是 {0} 的字符串'),
        rangelength: b.validator.format('请输入一个长度介于 {0} 和 {1} 之间的字符串'),
        range: b.validator.format('请输入一个介于 {0} 和 {1} 之间的值'),
        max: b.validator.format('请输入一个最大为 {0} 的值'),
        min: b.validator.format('请输入一个最小为 {0} 的值')
    })
}(jQuery));
/*! JsRender v1.0pre: http://github.com/BorisMoore/jsrender */
(function (aS, aY, am) {
    if (aY && aY.views || aS.jsviews) {
        return
    }
    var az = 'v1.0pre',
    bg,
    aN,
    a2,
    aX,
    ao = '{',
    ap = '{',
    aH = '}',
    aJ = '}',
    a3 = '^',
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
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '