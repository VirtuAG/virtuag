/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a
};

function ba(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
    }
    throw Error("Cannot find global object");
}
var ca = ba(this);

function da(a, b) {
    if (b) a: {
        var c = ca;a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e]
        }
        a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && aa(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
}

function ea(a) {
    function b(d) {
        return a.next(d)
    }

    function c(d) {
        return a.throw(d)
    }
    return new Promise(function(d, e) {
        function f(g) {
            g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
        }
        f(a.next())
    })
}

function q(a) {
    return ea(a())
}

function fa(a, b) {
    a instanceof String && (a += "");
    var c = 0,
        d = !1,
        e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
    e[Symbol.iterator] = function() {
        return e
    };
    return e
}
da("Array.prototype.values", function(a) {
    return a ? a : function() {
        return fa(this, function(b, c) {
            return c
        })
    }
});
da("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
        return c
    }
});
da("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0
        }
        return !1
    }
});
da("Object.values", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
        return c
    }
});
da("String.prototype.matchAll", function(a) {
    return a ? a : function(b) {
        if (b instanceof RegExp && !b.global) throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");
        var c = new RegExp(b, b instanceof RegExp ? void 0 : "g"),
            d = this,
            e = !1,
            f = {
                next: function() {
                    if (e) return {
                        value: void 0,
                        done: !0
                    };
                    var g = c.exec(d);
                    if (!g) return e = !0, {
                        value: void 0,
                        done: !0
                    };
                    "" === g[0] && (c.lastIndex += 1);
                    return {
                        value: g,
                        done: !1
                    }
                }
            };
        f[Symbol.iterator] = function() {
            return f
        };
        return f
    }
});
da("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
        return this.then(function(c) {
            return Promise.resolve(b()).then(function() {
                return c
            })
        }, function(c) {
            return Promise.resolve(b()).then(function() {
                throw c;
            })
        })
    }
});
var r = this || self;

function t(a, b, c) {
    a = a.split(".");
    c = c || r;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
}

function u(a, b) {
    a = a.split(".");
    b = b || r;
    for (var c = 0; c < a.length; c++)
        if (b = b[a[c]], null == b) return null;
    return b
}

function ha(a) {
    var b = typeof a;
    b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
    return "array" == b || "object" == b && "number" == typeof a.length
}

function ia(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}

function ja(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function ka(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(b, e)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function la(a, b, c) {
    la = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
    return la.apply(null, arguments)
}

function ma(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Xa = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Jb = function(d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g)
    }
};

function na(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, na);
    else {
        const c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b)
}
ma(na, Error);
na.prototype.name = "CustomError";

function oa() {};

function pa(a, b) {
    Array.prototype.forEach.call(a, b, void 0)
}

function qa(a, b) {
    return Array.prototype.map.call(a, b, void 0)
}

function ra(a, b) {
    b = Array.prototype.indexOf.call(a, b, void 0);
    0 <= b && Array.prototype.splice.call(a, b, 1)
}

function sa(a, b) {
    for (let c = 1; c < arguments.length; c++) {
        const d = arguments[c];
        if (ha(d)) {
            const e = a.length || 0,
                f = d.length || 0;
            a.length = e + f;
            for (let g = 0; g < f; g++) a[e + g] = d[g]
        } else a.push(d)
    }
};

function ta(a) {
    var b = ua;
    for (const c in b)
        if (a.call(void 0, b[c], c, b)) return c
}

function va(a) {
    for (const b in a) return !1;
    return !0
}

function wa(a) {
    if (!a || "object" !== typeof a) return a;
    if ("function" === typeof a.clone) return a.clone();
    if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
    if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
    if (a instanceof Date) return new Date(a.getTime());
    const b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length);
    for (const c in a) b[c] = wa(a[c]);
    return b
}
const xa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function ya(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (let f = 0; f < xa.length; f++) c = xa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};

function za() {}

function Aa(a) {
    return new za(Ba, a)
}
var Ba = {};
Aa("");
var Ca = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};
var Da, Ea = u("CLOSURE_FLAGS"),
    Fa = Ea && Ea[610401301];
Da = null != Fa ? Fa : !1;

function Ga() {
    var a = r.navigator;
    return a && (a = a.userAgent) ? a : ""
}
var Ha;
const Ia = r.navigator;
Ha = Ia ? Ia.userAgentData || null : null;

function Ja(a) {
    return Da ? Ha ? Ha.brands.some(({
        brand: b
    }) => b && -1 != b.indexOf(a)) : !1 : !1
}

function w(a) {
    return -1 != Ga().indexOf(a)
};

function Ka() {
    return Da ? !!Ha && 0 < Ha.brands.length : !1
}

function La() {
    return Ka() ? Ja("Chromium") : (w("Chrome") || w("CriOS")) && !(Ka() ? 0 : w("Edge")) || w("Silk")
};
var Ma = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

function Na(a) {
    return a ? decodeURI(a) : a
}

function Oa(a, b, c) {
    if (Array.isArray(b))
        for (var d = 0; d < b.length; d++) Oa(a, String(b[d]), c);
    else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
}

function Pa(a) {
    var b = [],
        c;
    for (c in a) Oa(c, a[c], b);
    return b.join("&")
};

function Qa(a, b) {
    return Error(`Invalid wire type: ${a} (at position ${b})`)
}

function Ra() {
    return Error("Failed to read varint, encoding is invalid.")
}

function Sa(a, b) {
    return Error(`Tried to read past the end of the data ${b} > ${a}`)
};

function Ta() {
    throw Error("Invalid UTF8");
}

function Va(a, b) {
    b = String.fromCharCode.apply(null, b);
    return null == a ? b : a + b
}
let Wa = void 0,
    Xa;
const Ya = "undefined" !== typeof TextDecoder;

function Za(a) {
    r.setTimeout(() => {
        throw a;
    }, 0)
};
var $a = Ka() ? !1 : w("Trident") || w("MSIE");
!w("Android") || La();
La();
var ab = w("Safari") && !(La() || (Ka() ? 0 : w("Coast")) || (Ka() ? 0 : w("Opera")) || (Ka() ? 0 : w("Edge")) || (Ka() ? Ja("Microsoft Edge") : w("Edg/")) || (Ka() ? Ja("Opera") : w("OPR")) || w("Firefox") || w("FxiOS") || w("Silk") || w("Android")) && !(w("iPhone") && !w("iPod") && !w("iPad") || w("iPad") || w("iPod"));
var bb = {},
    cb = null;

function db(a, b) {
    void 0 === b && (b = 0);
    eb();
    b = bb[b];
    const c = Array(Math.floor(a.length / 3)),
        d = b[64] || "";
    let e = 0,
        f = 0;
    for (; e < a.length - 2; e += 3) {
        var g = a[e],
            h = a[e + 1],
            k = a[e + 2],
            l = b[g >> 2];
        g = b[(g & 3) << 4 | h >> 4];
        h = b[(h & 15) << 2 | k >> 6];
        k = b[k & 63];
        c[f++] = "" + l + g + h + k
    }
    l = 0;
    k = d;
    switch (a.length - e) {
        case 2:
            l = a[e + 1], k = b[(l & 15) << 2] || d;
        case 1:
            a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
    }
    return c.join("")
}

function fb(a) {
    var b = a.length,
        c = 3 * b / 4;
    c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
    var d = new Uint8Array(c),
        e = 0;
    gb(a, function(f) {
        d[e++] = f
    });
    return e !== c ? d.subarray(0, e) : d
}

function gb(a, b) {
    function c(k) {
        for (; d < a.length;) {
            var l = a.charAt(d++),
                m = cb[l];
            if (null != m) return m;
            if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
        }
        return k
    }
    eb();
    for (var d = 0;;) {
        var e = c(-1),
            f = c(0),
            g = c(64),
            h = c(64);
        if (64 === h && -1 === e) break;
        b(e << 2 | f >> 4);
        64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
    }
}

function eb() {
    if (!cb) {
        cb = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
            var d = a.concat(b[c].split(""));
            bb[c] = d;
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                void 0 === cb[f] && (cb[f] = e)
            }
        }
    }
};
var hb = "undefined" !== typeof Uint8Array,
    ib = !$a && "function" === typeof btoa;

function jb(a) {
    if (!ib) return db(a);
    let b = "",
        c = 0;
    const d = a.length - 10240;
    for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
    return btoa(b)
}
const kb = /[-_.]/g,
    lb = {
        "-": "+",
        _: "/",
        ".": "="
    };

function mb(a) {
    return lb[a] || ""
}

function nb(a) {
    if (!ib) return fb(a);
    kb.test(a) && (a = a.replace(kb, mb));
    a = atob(a);
    const b = new Uint8Array(a.length);
    for (let c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
    return b
}

function ob(a) {
    return hb && null != a && a instanceof Uint8Array
}
let pb;
var qb = {};
let rb;

function sb(a) {
    if (a !== qb) throw Error("illegal external caller");
}

function tb() {
    return rb || (rb = new ub(null, qb))
}

function vb(a) {
    sb(qb);
    var b = a.h;
    b = null == b || ob(b) ? b : "string" === typeof b ? nb(b) : null;
    return null == b ? b : a.h = b
}
var ub = class {
    constructor(a, b) {
        sb(b);
        this.h = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }
    sizeBytes() {
        const a = vb(this);
        return a ? a.length : 0
    }
};

function wb(a) {
    if ("string" === typeof a) return {
        buffer: nb(a),
        J: !1
    };
    if (Array.isArray(a)) return {
        buffer: new Uint8Array(a),
        J: !1
    };
    if (a.constructor === Uint8Array) return {
        buffer: a,
        J: !1
    };
    if (a.constructor === ArrayBuffer) return {
        buffer: new Uint8Array(a),
        J: !1
    };
    if (a.constructor === ub) return {
        buffer: vb(a) || pb || (pb = new Uint8Array(0)),
        J: !0
    };
    if (a instanceof Uint8Array) return {
        buffer: new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
        J: !1
    };
    throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
};
const xb = "function" === typeof Uint8Array.prototype.slice;

function yb(a, b) {
    a.h = b;
    if (b > a.i) throw Sa(a.i, b);
}

function zb(a) {
    const b = a.j;
    let c = a.h,
        d = b[c++],
        e = d & 127;
    if (d & 128 && (d = b[c++], e |= (d & 127) << 7, d & 128 && (d = b[c++], e |= (d & 127) << 14, d & 128 && (d = b[c++], e |= (d & 127) << 21, d & 128 && (d = b[c++], e |= d << 28, d & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128))))) throw Ra();
    yb(a, c);
    return e
}

function Ab(a, b) {
    if (0 > b) throw Error(`Tried to read a negative byte length: ${b}`);
    const c = a.h,
        d = c + b;
    if (d > a.i) throw Sa(b, a.i - c);
    a.h = d;
    return c
}
var Bb = class {
        constructor(a, b) {
            this.j = null;
            this.m = !1;
            this.h = this.i = this.l = 0;
            this.init(a, void 0, void 0, b)
        }
        init(a, b, c, {
            ga: d = !1
        } = {}) {
            this.ga = d;
            a && (a = wb(a), this.j = a.buffer, this.m = a.J, this.l = b || 0, this.i = void 0 !== c ? this.l + c : this.j.length, this.h = this.l)
        }
        clear() {
            this.j = null;
            this.m = !1;
            this.h = this.i = this.l = 0;
            this.ga = !1
        }
        reset() {
            this.h = this.l
        }
        advance(a) {
            yb(this, this.h + a)
        }
    },
    Cb = [];

function Db(a, {
    ra: b = !1
} = {}) {
    a.ra = b
}

function Eb(a) {
    var b = a.h;
    if (b.h == b.i) return !1;
    a.j = a.h.h;
    var c = zb(a.h) >>> 0;
    b = c >>> 3;
    c &= 7;
    if (!(0 <= c && 5 >= c)) throw Qa(c, a.j);
    if (1 > b) throw Error(`Invalid field number: ${b} (at position ${a.j})`);
    a.l = b;
    a.i = c;
    return !0
}

function Fb(a) {
    switch (a.i) {
        case 0:
            if (0 != a.i) Fb(a);
            else a: {
                a = a.h;
                var b = a.h;
                const c = b + 10,
                    d = a.j;
                for (; b < c;)
                    if (0 === (d[b++] & 128)) {
                        yb(a, b);
                        break a
                    }
                throw Ra();
            }
            break;
        case 1:
            a.h.advance(8);
            break;
        case 2:
            2 != a.i ? Fb(a) : (b = zb(a.h) >>> 0, a.h.advance(b));
            break;
        case 5:
            a.h.advance(4);
            break;
        case 3:
            b = a.l;
            do {
                if (!Eb(a)) throw Error("Unmatched start-group tag: stream EOF");
                if (4 == a.i) {
                    if (a.l != b) throw Error("Unmatched end-group tag");
                    break
                }
                Fb(a)
            } while (1);
            break;
        default:
            throw Qa(a.i, a.j);
    }
}
var Gb = class {
        constructor(a, b) {
            if (Cb.length) {
                const c = Cb.pop();
                c.init(a, void 0, void 0, b);
                a = c
            } else a = new Bb(a, b);
            this.h = a;
            this.j = this.h.h;
            this.i = this.l = -1;
            Db(this, b)
        }
        reset() {
            this.h.reset();
            this.j = this.h.h;
            this.i = this.l = -1
        }
        advance(a) {
            this.h.advance(a)
        }
    },
    Hb = [];
const Ib = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0;

function Jb(a, b) {
    if (Ib) return a[Ib] |= b;
    if (void 0 !== a.G) return a.G |= b;
    Object.defineProperties(a, {
        G: {
            value: b,
            configurable: !0,
            writable: !0,
            enumerable: !1
        }
    });
    return b
}

function Kb(a, b) {
    Ib ? a[Ib] && (a[Ib] &= ~b) : void 0 !== a.G && (a.G &= ~b)
}

function x(a) {
    let b;
    Ib ? b = a[Ib] : b = a.G;
    return null == b ? 0 : b
}

function Lb(a, b) {
    Ib ? a[Ib] = b : void 0 !== a.G ? a.G = b : Object.defineProperties(a, {
        G: {
            value: b,
            configurable: !0,
            writable: !0,
            enumerable: !1
        }
    });
    return a
}

function Mb(a) {
    Jb(a, 1);
    return a
}

function Nb(a, b) {
    Lb(b, (a | 0) & -51)
}

function Ob(a, b) {
    Lb(b, (a | 18) & -41)
};
var Pb = {};

function Qb(a) {
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
}
let Rb;
var Sb = Object.freeze(Lb([], 23));

function Ub(a) {
    if (x(a.v) & 2) throw Error();
};

function Vb(a) {
    return a.displayName || a.name || "unknown type name"
}

function Wb(a, b) {
    if (!(a instanceof b)) throw Error(`Expected instanceof ${Vb(b)} but got ${a&&Vb(a.constructor)}`);
    return a
}

function Xb(a, b, c) {
    var d = !1;
    if (null != a && "object" === typeof a && !(d = Array.isArray(a)) && a.ka === Pb) return a;
    if (d) {
        var e = d = x(a);
        0 === e && (e |= c & 16);
        e |= c & 2;
        e !== d && Lb(a, e);
        return new b(a)
    }
};

function Yb(a) {
    const b = a.j + a.i;
    return a.I || (a.I = a.v[b] = {})
}

function y(a, b, c) {
    return -1 === b ? null : b >= a.j ? a.I ? a.I[b] : void 0 : c && a.I && (c = a.I[b], null != c) ? c : a.v[b + a.i]
}

function A(a, b, c, d) {
    Ub(a);
    return Zb(a, b, c, d)
}

function Zb(a, b, c, d) {
    a.m && (a.m = void 0);
    if (b >= a.j || d) return Yb(a)[b] = c, a;
    a.v[b + a.i] = c;
    (c = a.I) && b in c && delete c[b];
    return a
}

function $b(a, b, c, d, e) {
    let f = y(a, b, d);
    Array.isArray(f) || (f = Sb);
    const g = x(f);
    g & 1 || Mb(f);
    if (e) g & 2 || Jb(f, 18), c & 1 || Object.freeze(f);
    else {
        e = !(c & 2);
        const h = g & 2;
        c & 1 || !h ? e && g & 16 && !h && Kb(f, 16) : (f = Mb(Array.prototype.slice.call(f)), Zb(a, b, f, d))
    }
    return f
}

function ac(a, b, c, d) {
    Ub(a);
    (c = bc(a, c)) && c !== b && null != d && Zb(a, c, void 0, !1);
    return Zb(a, b, d)
}

function bc(a, b) {
    let c = 0;
    for (let d = 0; d < b.length; d++) {
        const e = b[d];
        null != y(a, e) && (0 !== c && Zb(a, c, void 0, !1), c = e)
    }
    return c
}

function cc(a, b, c) {
    var d = y(a, c, !1);
    b = Xb(d, b, x(a.v));
    b !== d && null != b && Zb(a, c, b, !1);
    d = b;
    if (null == d) return d;
    x(a.v) & 2 || (b = dc(d), b !== d && (d = b, Zb(a, c, d, !1)));
    return d
}

function ec(a, b, c, d, e, f) {
    var g = !!(f & 2),
        h = $b(a, c, 1, d, g);
    if (h === Sb || !(x(h) & 4)) {
        var k = h;
        h = !!(f & 2);
        var l = !!(x(k) & 2);
        g = k;
        !h && l && (k = Array.prototype.slice.call(k));
        var m = f | (l ? 2 : 0);
        f = l;
        let n = l = 0;
        for (; l < k.length; l++) {
            const v = Xb(k[l], b, m);
            void 0 !== v && (f = f || !!(2 & x(v.v)), k[n++] = v)
        }
        n < l && (k.length = n);
        b = k;
        k = x(b);
        m = k | 5;
        f = f ? m & -9 : m | 8;
        k != f && (Object.isFrozen(b) && (b = Array.prototype.slice.call(b)), Lb(b, f));
        k = b;
        g !== k && Zb(a, c, k, d);
        (h || 1 === e) && Object.freeze(k);
        return k
    }
    if (3 === e) return h;
    g || (g = Object.isFrozen(h), 1 === e ? g ||
        Object.freeze(h) : (e = x(h), b = e & -19, g && (h = Array.prototype.slice.call(h), e = 0, Zb(a, c, h, d)), e !== b && Lb(h, b)));
    return h
}

function fc(a) {
    var b = x(a.v),
        c = !!(b & 2);
    a = ec(a, gc, 1, void 0, c ? 1 : 2, b);
    if (!(c || x(a) & 8)) {
        for (c = 0; c < a.length; c++) {
            b = a[c];
            const d = dc(b);
            b !== d && (a[c] = d)
        }
        Jb(a, 8)
    }
    return a
}

function B(a, b, c, d) {
    Ub(a);
    null != d ? Wb(d, b) : d = void 0;
    return Zb(a, c, d)
}

function hc(a, b, c, d, e) {
    Ub(a);
    null != e ? Wb(e, b) : e = void 0;
    ac(a, c, d, e)
}

function ic(a, b, c, d) {
    const e = x(a.v);
    if (e & 2) throw Error();
    a = ec(a, c, b, void 0, 2, e);
    c = null != d ? Wb(d, c) : new c;
    a.push(c);
    c.J() && Kb(a, 8);
    return c
}

function jc(a, b) {
    return null == a ? b : a
}

function kc(a, b) {
    return jc(y(a, b), "")
};
let lc;

function mc(a, b) {
    return nc(b)
}

function nc(a) {
    switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (a && !Array.isArray(a)) {
                if (ob(a)) return jb(a);
                if (a instanceof ub) {
                    const b = a.h;
                    return null == b ? "" : "string" === typeof b ? b : a.h = jb(b)
                }
            }
    }
    return a
};

function oc(a, b) {
    const c = a.v;
    var d = c.length,
        e = [];
    Jb(e, 16);
    const f = a.constructor.h;
    f && e.push(f);
    const g = a.I;
    let h;
    g && (e.length = d, h = {}, e[d - 1] = h);
    var k = a.constructor;
    lc = e;
    k = new k(e);
    lc = void 0;
    a.aa && (k.aa = a.aa.slice());
    a = f ? 1 : 0;
    for (d = g ? d - 1 : d; a < d; a++) e[a] = b(c[a]);
    if (g)
        for (const l in g) h[l] = b(g[l]);
    return k
}

function pc(a, b, c, d, e, f) {
    if (null != a) {
        if (Array.isArray(a)) a = e && 0 == a.length && x(a) & 1 ? void 0 : f && x(a) & 2 ? a : qc(a, b, c, void 0 !== d, e, f);
        else if (Qb(a)) {
            const g = {};
            for (let h in a) g[h] = pc(a[h], b, c, d, e, f);
            a = g
        } else a = b(a, d);
        return a
    }
}

function qc(a, b, c, d, e, f) {
    const g = x(a);
    d = d ? !!(g & 16) : void 0;
    a = Array.prototype.slice.call(a);
    for (let h = 0; h < a.length; h++) a[h] = pc(a[h], b, c, d, e, f);
    c && c(g, a);
    return a
}

function rc(a) {
    return a.ka === Pb ? a.toJSON() : nc(a)
};

function sc(a, b, c = Ob) {
    if (null != a) {
        if (hb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
        if (Array.isArray(a)) {
            const d = x(a);
            if (d & 2) return a;
            if (b && !(d & 32) && (d & 16 || 0 === d)) return Lb(a, d | 18), a;
            a = qc(a, sc, d & 4 ? Ob : c, !0, !1, !0);
            b = x(a);
            b & 4 && b & 2 && Object.freeze(a);
            return a
        }
        a.ka === Pb && (x(a.v) & 2 || (a = tc(a, !0), Jb(a.v, 18)));
        return a
    }
}

function tc(a, b) {
    const c = a.v,
        d = b || a.J() ? Ob : Nb,
        e = !!(x(c) & 16);
    return oc(a, f => sc(f, e, d))
}

function dc(a) {
    if (!(x(a.v) & 2)) return a;
    const b = tc(a, !1);
    b.m = a;
    return b
};

function uc(a) {
    Rb = !0;
    try {
        return JSON.stringify(a.toJSON(), mc)
    } finally {
        Rb = !1
    }
}
var C = class {
    constructor(a, b, c) {
        null == a && (a = lc);
        lc = void 0;
        var d = this.constructor.h;
        if (null == a) {
            a = d ? [d] : [];
            var e = !0;
            Lb(a, 48)
        } else {
            if (!Array.isArray(a)) throw Error();
            if (d && d !== a[0]) throw Error();
            var f = Jb(a, 0) | 32;
            e = 0 !== (16 & f);
            Lb(a, f)
        }
        this.i = d ? 0 : -1;
        this.v = a;
        a: {
            f = this.v.length;d = f - 1;
            if (f && (f = this.v[d], Qb(f))) {
                this.I = f;
                this.j = d - this.i;
                break a
            }
            void 0 !== b && -1 < b ? (this.j = Math.max(b, d + 1 - this.i), this.I = void 0) : this.j = Number.MAX_VALUE
        }
        if (c) {
            b = e && !0;
            e = this.j;
            let h;
            for (d = 0; d < c.length; d++)
                if (f = c[d], f < e) {
                    f += this.i;
                    var g = a[f];
                    g ? vc(g, b) : a[f] = Sb
                } else h || (h = Yb(this)), (g = h[f]) ? vc(g, b) : h[f] = Sb
        }
    }
    toJSON() {
        const a = wc(this.v);
        var b;
        Rb ? b = a : b = qc(a, rc, void 0, void 0, !1, !1);
        return b
    }
    clone() {
        return tc(this, !1)
    }
    J() {
        return !!(x(this.v) & 2)
    }
};

function vc(a, b) {
    if (Array.isArray(a)) {
        var c = x(a),
            d = 1;
        !b || c & 2 || (d |= 16);
        (c & d) !== d && Lb(a, c | d)
    }
}
C.prototype.ka = Pb;

function wc(a) {
    let b, c = a.length,
        d = !1;
    for (let g = a.length; g--;) {
        let h = a[g];
        if (Array.isArray(h)) {
            var e = h;
            Array.isArray(h) && x(h) & 1 && !h.length ? h = null : h = wc(h);
            h != e && (d = !0)
        } else if (g === a.length - 1 && Qb(h)) {
            a: {
                var f = h;e = {};
                let k = !1;
                for (let l in f) {
                    let m = f[l];
                    if (Array.isArray(m)) {
                        let n = m;
                        Array.isArray(m) && x(m) & 1 && !m.length ? m = null : m = wc(m);
                        m != n && (k = !0)
                    }
                    null != m ? e[l] = m : k = !0
                }
                if (k) {
                    for (let l in e) {
                        f = e;
                        break a
                    }
                    f = null
                }
            }
            f != h && (d = !0);c--;
            continue
        }
        null == h && c == g + 1 ? (d = !0, c--) : d && (b || (b = Array.prototype.slice.call(a, 0, c)),
            b[g] = h)
    }
    if (!d) return a;
    b || (b = Array.prototype.slice.call(a, 0, c));
    f && b.push(f);
    return b
};
const xc = Symbol();

function yc(a, b, c) {
    return a[xc] || (a[xc] = (d, e) => b(d, e, c))
}

function zc(a) {
    let b = a[xc];
    if (!b) {
        const c = Ac(a);
        b = (d, e) => Bc(d, e, c);
        a[xc] = b
    }
    return b
}

function Cc(a) {
    var b = a.Kb;
    if (b) return zc(b);
    if (b = a.Sb) return yc(a.Ia.ha, b, a.Rb)
}

function Dc(a) {
    const b = Cc(a),
        c = a.Ia,
        d = a.Yb.da;
    return b ? (e, f) => d(e, f, c, b) : (e, f) => d(e, f, c)
}

function Ec(a, b) {
    let c = a[b];
    "function" == typeof c && 0 === c.length && (c = c(), a[b] = c);
    return Array.isArray(c) && (Fc in c || Gc in c || 0 < c.length && "function" == typeof c[0]) ? c : void 0
}
const Gc = Symbol(),
    Fc = Symbol();

function Hc(a, b) {
    a[0] = b
}

function Ic(a, b, c, d) {
    const e = c.da;
    a[b] = d ? (f, g, h) => e(f, g, h, d) : e
}

function Jc(a, b, c, d, e) {
    const f = c.da,
        g = zc(d),
        h = Ac(d).ha;
    a[b] = (k, l, m) => f(k, l, m, h, g, e)
}

function Kc(a, b, c, d, e, f, g) {
    const h = c.da,
        k = yc(d, e, f);
    a[b] = (l, m, n) => h(l, m, n, d, k, g)
}

function Ac(a) {
    var b = a[Fc];
    if (b) return b;
    b = a[Fc] = {};
    var c = Hc,
        d = Ic,
        e = Jc,
        f = Kc;
    b.ha = a[0];
    let g = 1;
    if (a.length > g && "number" !== typeof a[g]) {
        var h = a[g++];
        c(b, h)
    }
    for (; g < a.length;) {
        c = a[g++];
        for (var k = g + 1; k < a.length && "number" !== typeof a[k];) k++;
        h = a[g++];
        k -= g;
        switch (k) {
            case 0:
                d(b, c, h);
                break;
            case 1:
                (k = Ec(a, g)) ? (g++, e(b, c, h, k)) : d(b, c, h, a[g++]);
                break;
            case 2:
                k = b;
                var l = g++;
                l = Ec(a, l);
                e(k, c, h, l, a[g++]);
                break;
            case 3:
                f(b, c, h, a[g++], a[g++], a[g++]);
                break;
            case 4:
                f(b, c, h, a[g++], a[g++], a[g++], a[g++]);
                break;
            default:
                throw Error("unexpected number of binary field arguments: " +
                    k);
        }
    }
    Fc in a && Gc in a && (a.length = 0);
    return b
}

function Bc(a, b, c) {
    for (; Eb(b) && 4 != b.i;) {
        var d = b.l,
            e = c[d];
        if (!e) {
            var f = c[0];
            f && (f = f[d]) && (e = c[d] = Dc(f))
        }
        if (!e || !e(b, a, d))
            if (f = b, d = a, e = f.j, Fb(f), !f.ra) {
                var g = f.h.h - e;
                f.h.h = e;
                a: {
                    f = f.h;e = g;
                    if (0 == e) {
                        e = tb();
                        break a
                    }
                    const h = Ab(f, e);f.ga && f.m ? e = f.j.subarray(h, h + e) : (f = f.j, g = h, e = h + e, e = g === e ? pb || (pb = new Uint8Array(0)) : xb ? f.slice(g, e) : new Uint8Array(f.subarray(g, e)));e = 0 == e.length ? tb() : new ub(e, qb)
                }(f = d.aa) ? f.push(e) : d.aa = [e]
            }
    }
    return a
}

function Lc(a, b) {
    return {
        da: a,
        ic: b
    }
}
var Mc = Lc(function(a, b, c) {
        if (2 !== a.i) return !1;
        var d = zb(a.h) >>> 0;
        a = a.h;
        var e = Ab(a, d);
        a = a.j;
        if (Ya) {
            var f = a,
                g;
            (g = Xa) || (g = Xa = new TextDecoder("utf-8", {
                fatal: !0
            }));
            a = e + d;
            f = 0 === e && a === f.length ? f : f.subarray(e, a);
            try {
                var h = g.decode(f)
            } catch (l) {
                if (void 0 === Wa) {
                    try {
                        g.decode(new Uint8Array([128]))
                    } catch (m) {}
                    try {
                        g.decode(new Uint8Array([97])), Wa = !0
                    } catch (m) {
                        Wa = !1
                    }
                }!Wa && (Xa = void 0);
                throw l;
            }
        } else {
            h = e;
            d = h + d;
            e = [];
            let l = null;
            let m;
            for (; h < d;) {
                var k = a[h++];
                128 > k ? e.push(k) : 224 > k ? h >= d ? Ta() : (m = a[h++], 194 > k || 128 !== (m & 192) ?
                    (h--, Ta()) : e.push((k & 31) << 6 | m & 63)) : 240 > k ? h >= d - 1 ? Ta() : (m = a[h++], 128 !== (m & 192) || 224 === k && 160 > m || 237 === k && 160 <= m || 128 !== ((f = a[h++]) & 192) ? (h--, Ta()) : e.push((k & 15) << 12 | (m & 63) << 6 | f & 63)) : 244 >= k ? h >= d - 2 ? Ta() : (m = a[h++], 128 !== (m & 192) || 0 !== (k << 28) + (m - 144) >> 30 || 128 !== ((f = a[h++]) & 192) || 128 !== ((g = a[h++]) & 192) ? (h--, Ta()) : (k = (k & 7) << 18 | (m & 63) << 12 | (f & 63) << 6 | g & 63, k -= 65536, e.push((k >> 10 & 1023) + 55296, (k & 1023) + 56320))) : Ta();
                8192 <= e.length && (l = Va(l, e), e.length = 0)
            }
            h = Va(l, e)
        }
        A(b, c, h);
        return !0
    }, function(a, b, c) {
        a.i(c, y(b, c))
    }),
    Nc = Lc(function(a, b, c, d, e) {
        if (2 !== a.i) return !1;
        b = ic(b, c, d);
        c = a.h.i;
        d = zb(a.h) >>> 0;
        const f = a.h.h + d;
        let g = f - c;
        0 >= g && (a.h.i = f, e(b, a, void 0, void 0, void 0), g = f - a.h.h);
        if (g) throw Error("Message parsing ended unexpectedly. Expected to read " + `${d} bytes, instead read ${d-g} bytes, either the ` + "data ended unexpectedly or the message misreported its own length");
        a.h.h = f;
        a.h.i = c;
        return !0
    }, function(a, b, c, d, e) {
        var f = a.h;
        b = ec(b, d, c, !1, 1, x(b.v));
        f.call(a, c, b, e)
    });
Aa("csi.gstatic.com");
Aa("googleads.g.doubleclick.net");
Aa("partner.googleadservices.com");
Aa("pubads.g.doubleclick.net");
Aa("securepubads.g.doubleclick.net");
Aa("tpc.googlesyndication.com");

function Oc(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0
}
Oc.prototype.clone = function() {
    return new Oc(this.x, this.y)
};
Oc.prototype.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
Oc.prototype.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
Oc.prototype.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};

function Pc(a, b) {
    for (var c = 0; a;) {
        if (b(a)) return a;
        a = a.parentNode;
        c++
    }
    return null
};

function Qc(a) {
    var b = u("window.location.href");
    null == a && (a = 'Unknown Error of type "null/undefined"');
    if ("string" === typeof a) return {
        message: a,
        name: "Unknown error",
        lineNumber: "Not available",
        fileName: b,
        stack: "Not available"
    };
    var c = !1;
    try {
        var d = a.lineNumber || a.line || "Not available"
    } catch (g) {
        d = "Not available", c = !0
    }
    try {
        var e = a.fileName || a.filename || a.sourceURL || r.$googDebugFname || b
    } catch (g) {
        e = "Not available", c = !0
    }
    b = Rc(a);
    if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
        c = a.message;
        if (null ==
            c) {
            if (a.constructor && a.constructor instanceof Function) {
                if (a.constructor.name) c = a.constructor.name;
                else if (c = a.constructor, Sc[c]) c = Sc[c];
                else {
                    c = String(c);
                    if (!Sc[c]) {
                        var f = /function\s+([^\(]+)/m.exec(c);
                        Sc[c] = f ? f[1] : "[Anonymous]"
                    }
                    c = Sc[c]
                }
                c = 'Unknown Error of type "' + c + '"'
            } else c = "Unknown Error of unknown type";
            "function" === typeof a.toString && Object.prototype.toString !== a.toString && (c += ": " + a.toString())
        }
        return {
            message: c,
            name: a.name || "UnknownError",
            lineNumber: d,
            fileName: e,
            stack: b || "Not available"
        }
    }
    a.stack =
        b;
    return {
        message: a.message,
        name: a.name,
        lineNumber: a.lineNumber,
        fileName: a.fileName,
        stack: a.stack
    }
}

function Rc(a, b) {
    b || (b = {});
    b[Tc(a)] = !0;
    var c = a.stack || "";
    (a = a.cause) && !b[Tc(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += "string" === typeof a ? a : a.message + "\n"), c += Rc(a, b));
    return c
}

function Tc(a) {
    var b = "";
    "function" === typeof a.toString && (b = "" + a);
    return b + a.stack
}
var Sc = {};

function Uc(a) {
    if (!a) return "";
    if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
    a.startsWith("blob:") && (a = a.substring(5));
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c) throw Error("URI is missing protocol: " + a);
    if ("http" !== c && "https" !== c && "chrome-extension" !==
        c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c) throw Error("Invalid URI scheme in origin: " + c);
    a = "";
    var d = b.indexOf(":");
    if (-1 != d) {
        var e = b.substring(d + 1);
        b = b.substring(0, d);
        if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e
    }
    return c + "://" + b + a
};
var Vc = "client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" "),
    Wc = [...Vc, "client_dev_set_cookie"];

function Xc() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        m = l = 0
    }

    function b(n) {
        for (var v = g, p = 0; 64 > p; p += 4) v[p / 4] = n[p] << 24 | n[p + 1] << 16 | n[p + 2] << 8 | n[p + 3];
        for (p = 16; 80 > p; p++) n = v[p - 3] ^ v[p - 8] ^ v[p - 14] ^ v[p - 16], v[p] = (n << 1 | n >>> 31) & 4294967295;
        n = e[0];
        var z = e[1],
            H = e[2],
            F = e[3],
            hd = e[4];
        for (p = 0; 80 > p; p++) {
            if (40 > p)
                if (20 > p) {
                    var Ua = F ^ z & (H ^ F);
                    var Tb = 1518500249
                } else Ua = z ^ H ^ F, Tb = 1859775393;
            else 60 > p ? (Ua = z & H | F & (z | H), Tb = 2400959708) : (Ua = z ^ H ^ F, Tb = 3395469782);
            Ua = ((n << 5 | n >>> 27) & 4294967295) + Ua + hd + Tb + v[p] & 4294967295;
            hd = F;
            F = H;
            H = (z << 30 | z >>> 2) & 4294967295;
            z = n;
            n = Ua
        }
        e[0] = e[0] + n & 4294967295;
        e[1] = e[1] +
            z & 4294967295;
        e[2] = e[2] + H & 4294967295;
        e[3] = e[3] + F & 4294967295;
        e[4] = e[4] + hd & 4294967295
    }

    function c(n, v) {
        if ("string" === typeof n) {
            n = unescape(encodeURIComponent(n));
            for (var p = [], z = 0, H = n.length; z < H; ++z) p.push(n.charCodeAt(z));
            n = p
        }
        v || (v = n.length);
        p = 0;
        if (0 == l)
            for (; p + 64 < v;) b(n.slice(p, p + 64)), p += 64, m += 64;
        for (; p < v;)
            if (f[l++] = n[p++], m++, 64 == l)
                for (l = 0, b(f); p + 64 < v;) b(n.slice(p, p + 64)), p += 64, m += 64
    }

    function d() {
        var n = [],
            v = 8 * m;
        56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
        for (var p = 63; 56 <= p; p--) f[p] = v & 255, v >>>= 8;
        b(f);
        for (p = v = 0; 5 > p; p++)
            for (var z = 24; 0 <= z; z -= 8) n[v++] = e[p] >> z & 255;
        return n
    }
    for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
    var l, m;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        Ha: function() {
            for (var n = d(), v = "", p = 0; p < n.length; p++) v += "0123456789ABCDEF".charAt(Math.floor(n[p] / 16)) + "0123456789ABCDEF".charAt(n[p] % 16);
            return v
        }
    }
};

function Yc(a, b, c) {
    var d = String(r.location.href);
    return d && a && b ? [b, Zc(Uc(d), a, c || null)].join(" ") : null
}

function Zc(a, b, c) {
    var d = [],
        e = [];
    if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], pa(d, function(h) {
        e.push(h)
    }), $c(e.join(" "));
    var f = [],
        g = [];
    pa(c, function(h) {
        g.push(h.key);
        f.push(h.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
    pa(d, function(h) {
        e.push(h)
    });
    a = $c(e.join(" "));
    a = [c, a];
    0 == g.length || a.push(g.join(""));
    return a.join("_")
}

function $c(a) {
    var b = Xc();
    b.update(a);
    return b.Ha().toLowerCase()
};
const ad = {};

function bd() {
    this.h = document || {
        cookie: ""
    }
}
bd.prototype.isEnabled = function() {
    if (!r.navigator.cookieEnabled) return !1;
    if (this.h.cookie) return !0;
    this.set("TESTCOOKIESENABLED", "1", {
        va: 60
    });
    if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0
};
bd.prototype.set = function(a, b, c) {
    let d, e, f, g = !1,
        h;
    "object" === typeof c && (h = c.bc, g = c.cc || !1, f = c.domain || void 0, e = c.path || void 0, d = c.va);
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === d && (d = -1);
    this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
};
bd.prototype.get = function(a, b) {
    const c = a + "=",
        d = (this.h.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
        f = Ca(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
        if (f == a) return ""
    }
    return b
};
bd.prototype.remove = function(a, b, c) {
    const d = void 0 !== this.get(a);
    this.set(a, "", {
        va: 0,
        path: b,
        domain: c
    });
    return d
};
bd.prototype.clear = function() {
    var a = (this.h.cookie || "").split(";");
    const b = [],
        c = [];
    let d, e;
    for (let f = 0; f < a.length; f++) e = Ca(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
};

function cd() {
    return !!ad.FPA_SAMESITE_PHASE2_MOD || !1
}

function dd(a, b, c, d) {
    (a = r[a]) || "undefined" === typeof document || (a = (new bd).get(b));
    return a ? Yc(a, c, d) : null
};
"undefined" !== typeof TextDecoder && new TextDecoder;
"undefined" !== typeof TextEncoder && new TextEncoder;

function ed() {
    this.l = this.l;
    this.m = this.m
}
ed.prototype.l = !1;
ed.prototype.dispose = function() {
    this.l || (this.l = !0, this.j())
};
ed.prototype.j = function() {
    if (this.m)
        for (; this.m.length;) this.m.shift()()
};
const fd = self;

function gd(a, b) {
    a.l(b);
    100 > a.i && (a.i++, b.next = a.h, a.h = b)
}
class id {
    constructor(a, b) {
        this.j = a;
        this.l = b;
        this.i = 0;
        this.h = null
    }
    get() {
        let a;
        0 < this.i ? (this.i--, a = this.h, this.h = a.next, a.next = null) : a = this.j();
        return a
    }
};
class jd {
    constructor() {
        this.i = this.h = null
    }
    add(a, b) {
        const c = kd.get();
        c.set(a, b);
        this.i ? this.i.next = c : this.h = c;
        this.i = c
    }
    remove() {
        let a = null;
        this.h && (a = this.h, this.h = this.h.next, this.h || (this.i = null), a.next = null);
        return a
    }
}
var kd = new id(() => new ld, a => a.reset());
class ld {
    constructor() {
        this.next = this.scope = this.h = null
    }
    set(a, b) {
        this.h = a;
        this.scope = b;
        this.next = null
    }
    reset() {
        this.next = this.scope = this.h = null
    }
};
let md, nd = !1,
    od = new jd,
    qd = (a, b) => {
        md || pd();
        nd || (md(), nd = !0);
        od.add(a, b)
    },
    pd = () => {
        const a = r.Promise.resolve(void 0);
        md = () => {
            a.then(rd)
        }
    };
var rd = () => {
    let a;
    for (; a = od.remove();) {
        try {
            a.h.call(a.scope)
        } catch (b) {
            Za(b)
        }
        gd(kd, a)
    }
    nd = !1
};
class sd {
    constructor() {
        this.promise = new Promise(a => {
            this.resolve = a
        })
    }
};

function D(a) {
    this.h = 0;
    this.s = void 0;
    this.l = this.i = this.j = null;
    this.m = this.o = !1;
    if (a != oa) try {
        var b = this;
        a.call(void 0, function(c) {
            td(b, 2, c)
        }, function(c) {
            td(b, 3, c)
        })
    } catch (c) {
        td(this, 3, c)
    }
}

function ud() {
    this.next = this.context = this.i = this.j = this.h = null;
    this.l = !1
}
ud.prototype.reset = function() {
    this.context = this.i = this.j = this.h = null;
    this.l = !1
};
var vd = new id(function() {
    return new ud
}, function(a) {
    a.reset()
});

function wd(a, b, c) {
    var d = vd.get();
    d.j = a;
    d.i = b;
    d.context = c;
    return d
}

function xd(a) {
    if (a instanceof D) return a;
    var b = new D(oa);
    td(b, 2, a);
    return b
}
D.prototype.then = function(a, b, c) {
    return yd(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
};
D.prototype.$goog_Thenable = !0;
D.prototype.A = function(a, b) {
    return yd(this, null, a, b)
};
D.prototype.catch = D.prototype.A;
D.prototype.cancel = function(a) {
    if (0 == this.h) {
        var b = new zd(a);
        qd(function() {
            Ad(this, b)
        }, this)
    }
};

function Ad(a, b) {
    if (0 == a.h)
        if (a.j) {
            var c = a.j;
            if (c.i) {
                for (var d = 0, e = null, f = null, g = c.i; g && (g.l || (d++, g.h == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                e && (0 == c.h && 1 == d ? Ad(c, b) : (f ? (d = f, d.next == c.l && (c.l = d), d.next = d.next.next) : Bd(c), Cd(c, e, 3, b)))
            }
            a.j = null
        } else td(a, 3, b)
}

function Dd(a, b) {
    a.i || 2 != a.h && 3 != a.h || Ed(a);
    a.l ? a.l.next = b : a.i = b;
    a.l = b
}

function yd(a, b, c, d) {
    var e = wd(null, null, null);
    e.h = new D(function(f, g) {
        e.j = b ? function(h) {
            try {
                var k = b.call(d, h);
                f(k)
            } catch (l) {
                g(l)
            }
        } : f;
        e.i = c ? function(h) {
            try {
                var k = c.call(d, h);
                void 0 === k && h instanceof zd ? g(h) : f(k)
            } catch (l) {
                g(l)
            }
        } : g
    });
    e.h.j = a;
    Dd(a, e);
    return e.h
}
D.prototype.C = function(a) {
    this.h = 0;
    td(this, 2, a)
};
D.prototype.D = function(a) {
    this.h = 0;
    td(this, 3, a)
};

function td(a, b, c) {
    if (0 == a.h) {
        a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
        a.h = 1;
        a: {
            var d = c,
                e = a.C,
                f = a.D;
            if (d instanceof D) {
                Dd(d, wd(e || oa, f || null, a));
                var g = !0
            } else {
                if (d) try {
                    var h = !!d.$goog_Thenable
                } catch (l) {
                    h = !1
                } else h = !1;
                if (h) d.then(e, f, a), g = !0;
                else {
                    if (ia(d)) try {
                        var k = d.then;
                        if ("function" === typeof k) {
                            Fd(d, k, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (l) {
                        f.call(a, l);
                        g = !0;
                        break a
                    }
                    g = !1
                }
            }
        }
        g || (a.s = c, a.h = b, a.j = null, Ed(a), 3 != b || c instanceof zd || Gd(a, c))
    }
}

function Fd(a, b, c, d, e) {
    function f(k) {
        h || (h = !0, d.call(e, k))
    }

    function g(k) {
        h || (h = !0, c.call(e, k))
    }
    var h = !1;
    try {
        b.call(a, g, f)
    } catch (k) {
        f(k)
    }
}

function Ed(a) {
    a.o || (a.o = !0, qd(a.u, a))
}

function Bd(a) {
    var b = null;
    a.i && (b = a.i, a.i = b.next, b.next = null);
    a.i || (a.l = null);
    return b
}
D.prototype.u = function() {
    for (var a; a = Bd(this);) Cd(this, a, this.h, this.s);
    this.o = !1
};

function Cd(a, b, c, d) {
    if (3 == c && b.i && !b.l)
        for (; a && a.m; a = a.j) a.m = !1;
    if (b.h) b.h.j = null, Hd(b, c, d);
    else try {
        b.l ? b.j.call(b.context) : Hd(b, c, d)
    } catch (e) {
        Id.call(null, e)
    }
    gd(vd, b)
}

function Hd(a, b, c) {
    2 == b ? a.j.call(a.context, c) : a.i && a.i.call(a.context, c)
}

function Gd(a, b) {
    a.m = !0;
    qd(function() {
        a.m && Id.call(null, b)
    })
}
var Id = Za;

function zd(a) {
    na.call(this, a)
}
ma(zd, na);
zd.prototype.name = "cancel";

function E(a) {
    ed.call(this);
    this.C = 1;
    this.o = [];
    this.s = 0;
    this.h = [];
    this.i = {};
    this.N = !!a
}
ma(E, ed);
E.prototype.D = function(a, b, c) {
    var d = this.i[a];
    d || (d = this.i[a] = []);
    var e = this.C;
    this.h[e] = a;
    this.h[e + 1] = b;
    this.h[e + 2] = c;
    this.C = e + 3;
    d.push(e);
    return e
};
E.prototype.A = function(a) {
    var b = this.h[a];
    if (b) {
        var c = this.i[b];
        0 != this.s ? (this.o.push(a), this.h[a + 1] = () => {}) : (c && ra(c, a), delete this.h[a], delete this.h[a + 1], delete this.h[a + 2])
    }
    return !!b
};
E.prototype.u = function(a, b) {
    var c = this.i[a];
    if (c) {
        for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
        if (this.N)
            for (e = 0; e < c.length; e++) {
                var g = c[e];
                Jd(this.h[g + 1], this.h[g + 2], d)
            } else {
                this.s++;
                try {
                    for (e = 0, f = c.length; e < f && !this.l; e++) g = c[e], this.h[g + 1].apply(this.h[g + 2], d)
                } finally {
                    if (this.s--, 0 < this.o.length && 0 == this.s)
                        for (; c = this.o.pop();) this.A(c)
                }
            }
        return 0 != e
    }
    return !1
};

function Jd(a, b, c) {
    qd(function() {
        a.apply(b, c)
    })
}
E.prototype.clear = function(a) {
    if (a) {
        var b = this.i[a];
        b && (b.forEach(this.A, this), delete this.i[a])
    } else this.h.length = 0, this.i = {}
};
E.prototype.j = function() {
    E.Xa.j.call(this);
    this.clear();
    this.o.length = 0
};
/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
let G = {};
var Kd = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Int32Array;
G.assign = function(a) {
    for (var b = Array.prototype.slice.call(arguments, 1); b.length;) {
        var c = b.shift();
        if (c) {
            if ("object" !== typeof c) throw new TypeError(c + "must be non-object");
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
        }
    }
    return a
};
G.ec = function(a, b) {
    if (a.length === b) return a;
    if (a.subarray) return a.subarray(0, b);
    a.length = b;
    return a
};
var Ld = {
        Da: function(a, b, c, d, e) {
            if (b.subarray && a.subarray) a.set(b.subarray(c, c + d), e);
            else
                for (var f = 0; f < d; f++) a[e + f] = b[c + f]
        },
        Ja: function(a) {
            var b, c;
            var d = c = 0;
            for (b = a.length; d < b; d++) c += a[d].length;
            var e = new Uint8Array(c);
            d = c = 0;
            for (b = a.length; d < b; d++) {
                var f = a[d];
                e.set(f, c);
                c += f.length
            }
            return e
        }
    },
    Md = {
        Da: function(a, b, c, d, e) {
            for (var f = 0; f < d; f++) a[e + f] = b[c + f]
        },
        Ja: function(a) {
            return [].concat.apply([], a)
        }
    };
G.Wa = function() {
    Kd ? (G.Aa = Uint8Array, G.ya = Uint16Array, G.za = Int32Array, G.assign(G, Ld)) : (G.Aa = Array, G.ya = Array, G.za = Array, G.assign(G, Md))
};
G.Wa();
try {
    new Uint8Array(1)
} catch (a) {};

function Nd(a) {
    for (var b = a.length; 0 <= --b;) a[b] = 0
}
Nd(Array(576));
Nd(Array(60));
Nd(Array(512));
Nd(Array(256));
Nd(Array(29));
Nd(Array(30));
/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Od = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
var Pd = class {
    constructor(a) {
        this.name = a
    }
};
var Qd = new Pd("rawColdConfigGroup");
var Rd = new Pd("rawHotConfigGroup");

function Sd(a, b) {
    return A(a, 1, b)
}
var Td = class extends C {
    constructor(a) {
        super(a)
    }
};
var Ud = class extends C {
    constructor(a) {
        super(a, -1, Ud.i)
    }
};
Ud.i = [1];
var Vd = class extends C {
    constructor(a) {
        super(a)
    }
};
var Wd = class extends C {
    constructor(a) {
        super(a)
    }
};
var Xd = class extends C {
    constructor(a) {
        super(a, -1, Xd.i)
    }
};
Xd.i = [2];
var Yd = class extends C {
    constructor(a) {
        super(a, -1, Yd.i)
    }
    getPlayerType() {
        return jc(y(this, 36), 0)
    }
    setHomeGroupInfo(a) {
        return B(this, Xd, 81, a)
    }
    clearLocationPlayabilityToken() {
        return A(this, 89, void 0, !1)
    }
};
Yd.i = [9, 66, 24, 32, 86, 100, 101];
var $d = class extends C {
        constructor(a) {
            super(a)
        }
        getKey() {
            return kc(this, 1)
        }
        O() {
            return kc(this, 2 === bc(this, Zd) ? 2 : -1)
        }
    },
    Zd = [2, 3, 4, 5, 6];
var ae = class extends C {
    constructor(a) {
        super(a, -1, ae.i)
    }
};
ae.i = [15, 26, 28];
var be = class extends C {
    constructor(a) {
        super(a, -1, be.i)
    }
};
be.i = [5];
var ce = class extends C {
    constructor(a) {
        super(a)
    }
};
var de = class extends C {
    constructor(a) {
        super(a, -1, de.i)
    }
    setSafetyMode(a) {
        return A(this, 5, a)
    }
};
de.i = [12];
var ee = class extends C {
    constructor(a) {
        super(a, -1, ee.i)
    }
    l(a) {
        return B(this, Yd, 1, a)
    }
};
ee.i = [12];
var fe = class extends C {
    constructor(a) {
        super(a)
    }
    getKey() {
        return kc(this, 1)
    }
    O() {
        return kc(this, 2)
    }
};
var ge = class extends C {
    constructor(a) {
        super(a, -1, ge.i)
    }
};
ge.i = [4, 5];
var he = class extends C {
    constructor(a) {
        super(a)
    }
};
var ie = class extends C {
        constructor(a) {
            super(a)
        }
    },
    je = [2, 3, 4, 5];
var ke = class extends C {
    constructor(a) {
        super(a)
    }
};
var le = class extends C {
    constructor(a) {
        super(a)
    }
};
var me = class extends C {
    constructor(a) {
        super(a)
    }
};
var ne = class extends C {
    constructor(a) {
        super(a, -1, ne.i)
    }
};
ne.i = [10, 17];
var oe = class extends C {
    constructor(a) {
        super(a)
    }
};
var I = class extends C {
    constructor(a) {
        super(a)
    }
};
var pe = class extends C {
    constructor(a) {
        super(a)
    }
};
var qe = class extends C {
    constructor(a) {
        super(a)
    }
};
var re = class extends C {
    constructor(a) {
        super(a, -1, re.i)
    }
    getVideoData() {
        return cc(this, qe, 15)
    }
};
re.i = [4];

function se(a, b) {
    B(a, I, 1, b)
}
var te = class extends C {
    constructor(a) {
        super(a)
    }
};

function ue(a, b) {
    return B(a, I, 1, b)
}
var ve = class extends C {
    constructor(a) {
        super(a)
    }
    h(a) {
        return A(this, 2, a)
    }
};

function we(a, b) {
    return B(a, I, 2, b)
}
var xe = class extends C {
    constructor(a) {
        super(a, -1, xe.i)
    }
    h(a) {
        return A(this, 1, a)
    }
};
xe.i = [3];
var ye = class extends C {
    constructor(a) {
        super(a)
    }
    h(a) {
        return A(this, 1, a)
    }
};
var ze = class extends C {
    constructor(a) {
        super(a)
    }
    h(a) {
        return A(this, 1, a)
    }
};
var Ae = class extends C {
    constructor(a) {
        super(a)
    }
    h(a) {
        return A(this, 1, a)
    }
};
var Be = class extends C {
    constructor(a) {
        super(a)
    }
    h(a) {
        return A(this, 1, a)
    }
};
var Ce = class extends C {
    constructor(a) {
        super(a)
    }
};
var De = class extends C {
    constructor(a) {
        super(a)
    }
};
var J = class extends C {
        constructor(a) {
            super(a, 475)
        }
    },
    Ee = [2, 3, 5, 6, 7, 11, 13, 20, 21, 22, 23, 24, 28, 32, 37, 45, 59, 72, 73, 74, 76, 78, 79, 80, 85, 91, 97, 100, 102, 105, 111, 117, 119, 126, 127, 136, 146, 148, 151, 156, 157, 158, 159, 163, 164, 168, 176, 177, 178, 179, 184, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 208, 209, 215, 219, 222, 225, 226, 227, 229, 232, 233, 234, 240, 241, 244, 247, 248, 249, 251, 254, 255, 256, 257, 258, 259, 260, 261, 266, 270, 272, 278, 288, 291, 293, 300, 304, 308, 309, 310, 311, 313, 314, 319, 320, 321, 323, 324, 327, 328, 330, 331,
        332, 334, 337, 338, 340, 344, 348, 350, 351, 352, 353, 354, 355, 356, 357, 358, 361, 363, 364, 368, 369, 370, 373, 374, 375, 378, 380, 381, 383, 388, 389, 402, 403, 410, 411, 412, 413, 414, 415, 416, 417, 418, 423, 424, 425, 426, 427, 429, 430, 431, 439, 441, 444, 448, 458, 469, 471, 473, 474
    ];
var Fe = {
    Ab: 0,
    hb: 1,
    nb: 2,
    ob: 4,
    ub: 8,
    pb: 16,
    qb: 32,
    zb: 64,
    yb: 128,
    jb: 256,
    lb: 512,
    sb: 1024,
    kb: 2048,
    mb: 4096,
    ib: 8192,
    rb: 16384,
    vb: 32768,
    tb: 65536,
    wb: 131072,
    xb: 262144
};
var Ge = class extends C {
    constructor(a) {
        super(a)
    }
};
var Ie = class extends C {
        constructor(a) {
            super(a)
        }
        setVideoId(a) {
            return ac(this, 1, He, a)
        }
        getPlaylistId() {
            var a = 2 === bc(this, He) ? 2 : -1;
            return y(this, a)
        }
    },
    He = [1, 2];
var Je = class extends C {
    constructor(a) {
        super(a, -1, Je.i)
    }
};
Je.i = [3];
var Ke = new Pd("recordNotificationInteractionsEndpoint");
var Le = ["notification/convert_endpoint_to_url"],
    Me = ["notification/record_interactions"],
    Ne = ["notification_registration/set_registration"];
var Oe = a => self.btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(a)))).replace(/\+/g, "-").replace(/\//g, "_");
var Pe = ["notifications_register", "notifications_check_registration"];
var K = class extends Error {
    constructor(a, ...b) {
        super(a);
        this.args = [...b]
    }
};
let Qe = null;

function L(a, b) {
    const c = {};
    c.key = a;
    c.value = b;
    return Re().then(d => new Promise((e, f) => {
        try {
            const g = d.transaction("swpushnotificationsstore", "readwrite").objectStore("swpushnotificationsstore").put(c);
            g.onsuccess = () => {
                e()
            };
            g.onerror = () => {
                f()
            }
        } catch (g) {
            f(g)
        }
    }))
}

function Se() {
    return L("IndexedDBCheck", "testing IndexedDB").then(() => Te("IndexedDBCheck")).then(a => "testing IndexedDB" === a ? Promise.resolve() : Promise.reject()).then(() => !0).catch(() => !1)
}

function Te(a) {
    const b = new K("Error accessing DB");
    return Re().then(c => new Promise((d, e) => {
        try {
            const f = c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);
            f.onsuccess = () => {
                const g = f.result;
                d(g ? g.value : null)
            };
            f.onerror = () => {
                b.params = {
                    key: a,
                    source: "onerror"
                };
                e(b)
            }
        } catch (f) {
            b.params = {
                key: a,
                thrownError: String(f)
            }, e(b)
        }
    }), () => null)
}

function Re() {
    return Qe ? Promise.resolve(Qe) : new Promise((a, b) => {
        const c = self.indexedDB.open("swpushnotificationsdb");
        c.onerror = b;
        c.onsuccess = () => {
            const d = c.result;
            if (d.objectStoreNames.contains("swpushnotificationsstore")) Qe = d, a(Qe);
            else return self.indexedDB.deleteDatabase("swpushnotificationsdb"), Re()
        };
        c.onupgradeneeded = Ue
    })
}

function Ue(a) {
    a = a.target.result;
    a.objectStoreNames.contains("swpushnotificationsstore") && a.deleteObjectStore("swpushnotificationsstore");
    a.createObjectStore("swpushnotificationsstore", {
        keyPath: "key"
    })
};
const Ve = {
    WEB_UNPLUGGED: "^unplugged/",
    WEB_UNPLUGGED_ONBOARDING: "^unplugged/",
    WEB_UNPLUGGED_OPS: "^unplugged/",
    WEB_UNPLUGGED_PUBLIC: "^unplugged/",
    WEB_CREATOR: "^creator/",
    WEB_KIDS: "^kids/",
    WEB_EXPERIMENTS: "^experiments/",
    WEB_MUSIC: "^music/",
    WEB_REMIX: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^main_app/|^sfv/"
};

function We(a) {
    if (1 === a.length) return a[0];
    var b = Ve.UNKNOWN_INTERFACE;
    if (b) {
        b = new RegExp(b);
        for (var c of a)
            if (b.exec(c)) return c
    }
    const d = [];
    Object.entries(Ve).forEach(([e, f]) => {
        "UNKNOWN_INTERFACE" !== e && d.push(f)
    });
    c = new RegExp(d.join("|"));
    a.sort((e, f) => e.length - f.length);
    for (const e of a)
        if (!c.exec(e)) return e;
    return a[0]
}

function Xe(a) {
    return `/youtubei/v1/${We(a)}`
};
const Ye = r.window;
let Ze, $e;
const af = (null == Ye ? void 0 : null == (Ze = Ye.yt) ? void 0 : Ze.config_) || (null == Ye ? void 0 : null == ($e = Ye.ytcfg) ? void 0 : $e.data_) || {};
t("yt.config_", af);

function M(...a) {
    a = arguments;
    1 < a.length ? af[a[0]] = a[1] : 1 === a.length && Object.assign(af, a[0])
}

function N(a, b) {
    return a in af ? af[a] : b
}

function bf() {
    return N("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")
}

function cf() {
    const a = af.EXPERIMENT_FLAGS;
    return a ? a.web_disable_gel_stp_ecatcher_killswitch : void 0
};
const df = [];

function ef(a) {
    df.forEach(b => b(a))
}

function O(a) {
    return a && window.yterr ? function() {
        try {
            return a.apply(this, arguments)
        } catch (b) {
            ff(b)
        }
    } : a
}

function ff(a) {
    var b = u("yt.logging.errors.log");
    b ? b(a, "ERROR", void 0, void 0, void 0, void 0, void 0) : (b = N("ERRORS", []), b.push([a, "ERROR", void 0, void 0, void 0, void 0, void 0]), M("ERRORS", b));
    ef(a)
}

function gf(a) {
    var b = u("yt.logging.errors.log");
    b ? b(a, "WARNING", void 0, void 0, void 0, void 0, void 0) : (b = N("ERRORS", []), b.push([a, "WARNING", void 0, void 0, void 0, void 0, void 0]), M("ERRORS", b))
};

function P(a) {
    a = hf(a);
    return "string" === typeof a && "false" === a ? !1 : !!a
}

function jf(a, b) {
    a = hf(a);
    return void 0 === a && void 0 !== b ? b : Number(a || 0)
}

function kf() {
    return N("EXPERIMENTS_TOKEN", "")
}

function hf(a) {
    const b = N("EXPERIMENTS_FORCED_FLAGS", {}) || {};
    return void 0 !== b[a] ? b[a] : N("EXPERIMENT_FLAGS", {})[a]
}

function lf() {
    const a = [],
        b = N("EXPERIMENTS_FORCED_FLAGS", {});
    for (var c of Object.keys(b)) a.push({
        key: c,
        value: String(b[c])
    });
    c = N("EXPERIMENT_FLAGS", {});
    for (const d of Object.keys(c)) d.startsWith("force_") && void 0 === b[d] && a.push({
        key: d,
        value: String(c[d])
    });
    return a
};

function mf(a, b) {
    if (a) return a[b.name]
};
let nf = 0;
t("ytDomDomGetNextId", u("ytDomDomGetNextId") || (() => ++nf));

function of (a) {
    this.version = 1;
    this.args = a
};

function pf() {
    var a = qf;
    this.topic = "screen-created";
    this.h = a
}
pf.prototype.toString = function() {
    return this.topic
};

function rf(a, b) {
    "function" === typeof a && (a = O(a));
    return window.setTimeout(a, b)
};

function sf(a, b) {
    return tf(a, 0, b)
}
var uf = class {
    h(a, b) {
        tf(a, 1, b)
    }
};

function tf(a, b, c) {
    void 0 !== c && Number.isNaN(Number(c)) && (c = void 0);
    const d = u("yt.scheduler.instance.addJob");
    return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : rf(a, c || 0)
}
var vf = class extends uf {
    i(a) {
        if (void 0 === a || !Number.isNaN(Number(a))) {
            var b = u("yt.scheduler.instance.cancelJob");
            b ? b(a) : window.clearTimeout(a)
        }
    }
    start() {
        const a = u("yt.scheduler.instance.start");
        a && a()
    }
};
vf.h || (vf.h = new vf);
var wf = vf.h;
const xf = u("ytPubsub2Pubsub2Instance") || new E;
E.prototype.subscribe = E.prototype.D;
E.prototype.unsubscribeByKey = E.prototype.A;
E.prototype.publish = E.prototype.u;
E.prototype.clear = E.prototype.clear;
t("ytPubsub2Pubsub2Instance", xf);
const yf = u("ytPubsub2Pubsub2SubscribedKeys") || {};
t("ytPubsub2Pubsub2SubscribedKeys", yf);
const zf = u("ytPubsub2Pubsub2TopicToKeys") || {};
t("ytPubsub2Pubsub2TopicToKeys", zf);
const Af = u("ytPubsub2Pubsub2IsAsync") || {};
t("ytPubsub2Pubsub2IsAsync", Af);
t("ytPubsub2Pubsub2SkipSubKey", null);

function Bf(a, b) {
    const c = Cf();
    c && c.publish.call(c, a.toString(), a, b)
}

function Df(a) {
    var b = Ef;
    const c = Cf();
    if (!c) return 0;
    const d = c.subscribe(b.toString(), (e, f) => {
        var g = u("ytPubsub2Pubsub2SkipSubKey");
        g && g == d || (g = () => {
            if (yf[d]) try {
                if (f && b instanceof pf && b != e) try {
                    var h = b.h,
                        k = f;
                    if (!k.args || !k.version) throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
                    try {
                        if (!h.xa) {
                            const p = new h;
                            h.xa = p.version
                        }
                        var l = h.xa
                    } catch (p) {}
                    if (!l || k.version != l) throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");
                    try {
                        l = Reflect;
                        var m = l.construct; {
                            var n = k.args;
                            const p = n.length;
                            if (0 < p) {
                                const z = Array(p);
                                for (k = 0; k < p; k++) z[k] = n[k];
                                var v = z
                            } else v = []
                        }
                        f = m.call(l, h, v)
                    } catch (p) {
                        throw p.message = "yt.pubsub2.Data.deserialize(): " + p.message, p;
                    }
                } catch (p) {
                    throw p.message = "yt.pubsub2.pubsub2 cross-binary conversion error for " + b.toString() + ": " + p.message, p;
                }
                a.call(window, f)
            } catch (p) {
                ff(p)
            }
        }, Af[b.toString()] ? u("yt.scheduler.instance") ? wf.h(g) : rf(g, 0) : g())
    });
    yf[d] = !0;
    zf[b.toString()] || (zf[b.toString()] = []);
    zf[b.toString()].push(d);
    return d
}

function Ff() {
    var a = Gf;
    const b = Df(function(c) {
        a.apply(void 0, arguments);
        Hf(b)
    });
    return b
}

function Hf(a) {
    const b = Cf();
    b && ("number" === typeof a && (a = [a]), pa(a, c => {
        b.unsubscribeByKey(c);
        delete yf[c]
    }))
}

function Cf() {
    return u("ytPubsub2Pubsub2Instance")
};
let If = Date.now().toString();

function Jf() {
    const a = Array(16);
    for (var b = 0; 16 > b; b++) {
        var c = Date.now();
        for (let d = 0; d < c % 23; d++) a[b] = Math.random();
        a[b] = Math.floor(256 * Math.random())
    }
    if (If)
        for (b = 1, c = 0; c < If.length; c++) a[b % 16] = a[b % 16] ^ a[(b - 1) % 16] / 4 ^ If.charCodeAt(c), b++;
    return a
}

function Kf() {
    if (window.crypto && window.crypto.getRandomValues) try {
        const a = Array(16),
            b = new Uint8Array(16);
        window.crypto.getRandomValues(b);
        for (let c = 0; c < a.length; c++) a[c] = b[c];
        return a
    } catch (a) {}
    return Jf()
};
const Lf = window;
var Q = Lf.ytcsi && Lf.ytcsi.now ? Lf.ytcsi.now : Lf.performance && Lf.performance.timing && Lf.performance.now && Lf.performance.timing.navigationStart ? () => Lf.performance.timing.navigationStart + Lf.performance.now() : () => (new Date).getTime();
const Mf = /^[\w.]*$/,
    Nf = {
        q: !0,
        search_query: !0
    };

function Of(a, b) {
    b = a.split(b);
    const c = {};
    for (let f = 0, g = b.length; f < g; f++) {
        const h = b[f].split("=");
        if (1 == h.length && h[0] || 2 == h.length) try {
            const k = Pf(h[0] || ""),
                l = Pf(h[1] || "");
            k in c ? Array.isArray(c[k]) ? sa(c[k], l) : c[k] = [c[k], l] : c[k] = l
        } catch (k) {
            var d = k,
                e = h[0];
            const l = String(Of);
            d.args = [{
                key: e,
                value: h[1],
                query: a,
                method: Qf == l ? "unchanged" : l
            }];
            Nf.hasOwnProperty(e) || gf(d)
        }
    }
    return c
}
const Qf = String(Of);

function Rf(a) {
    "?" == a.charAt(0) && (a = a.substr(1));
    return Of(a, "&")
}

function Sf(a, b, c) {
    var d = a.split("#", 2);
    a = d[0];
    d = 1 < d.length ? "#" + d[1] : "";
    var e = a.split("?", 2);
    a = e[0];
    e = Rf(e[1] || "");
    for (var f in b) !c && null !== e && f in e || (e[f] = b[f]);
    b = a;
    a = Pa(e);
    a ? (c = b.indexOf("#"), 0 > c && (c = b.length), f = b.indexOf("?"), 0 > f || f > c ? (f = c, e = "") : e = b.substring(f + 1, c), b = [b.slice(0, f), e, b.slice(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
    return a + d
}

function Tf(a) {
    if (!b) var b = window.location.href;
    const c = a.match(Ma)[1] || null,
        d = Na(a.match(Ma)[3] || null);
    c && d ? (a = a.match(Ma), b = b.match(Ma), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? Na(b.match(Ma)[3] || null) == d && (Number(b.match(Ma)[4] || null) || null) == (Number(a.match(Ma)[4] || null) || null) : !0;
    return a
}

function Pf(a) {
    return a && a.match(Mf) ? a : decodeURIComponent(a.replace(/\+/g, " "))
};
[...Vc];
let Uf = !1;

function Vf(a, b) {
    const c = {
        method: b.method || "GET",
        credentials: "same-origin"
    };
    b.headers && (c.headers = b.headers);
    a = Wf(a, b);
    const d = Xf(a, b);
    d && (c.body = d);
    b.withCredentials && (c.credentials = "include");
    const e = b.context || r;
    let f = !1,
        g;
    fetch(a, c).then(h => {
        if (!f) {
            f = !0;
            g && window.clearTimeout(g);
            var k = h.ok,
                l = m => {
                    m = m || {};
                    k ? b.onSuccess && b.onSuccess.call(e, m, h) : b.onError && b.onError.call(e, m, h);
                    b.onFinish && b.onFinish.call(e, m, h)
                };
            "JSON" == (b.format || "JSON") && (k || 400 <= h.status && 500 > h.status) ? h.json().then(l, function() {
                l(null)
            }): l(null)
        }
    }).catch(() => {
        b.onError && b.onError.call(e, {}, {})
    });
    a = b.timeout || 0;
    b.onFetchTimeout && 0 < a && (g = rf(() => {
        f || (f = !0, window.clearTimeout(g), b.onFetchTimeout.call(b.context || r))
    }, a))
}

function Wf(a, b) {
    b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
    const c = N("XSRF_FIELD_NAME");
    if (b = b.urlParams) b[c] && delete b[c], a = Sf(a, b || {}, !0);
    return a
}

function Xf(a, b) {
    const c = N("XSRF_FIELD_NAME"),
        d = N("XSRF_TOKEN");
    var e = b.postBody || "",
        f = b.postParams;
    const g = N("XSRF_FIELD_NAME");
    let h;
    b.headers && (h = b.headers["Content-Type"]);
    b.excludeXsrf || Na(a.match(Ma)[3] || null) && !b.withCredentials && Na(a.match(Ma)[3] || null) != document.location.hostname || "POST" != b.method || h && "application/x-www-form-urlencoded" != h || b.postParams && b.postParams[g] || (f || (f = {}), f[c] = d);
    (P("ajax_parse_query_data_only_when_filled") && f && 0 < Object.keys(f).length || f) && "string" === typeof e &&
        (e = Rf(e), ya(e, f), e = b.postBodyFormat && "JSON" == b.postBodyFormat ? JSON.stringify(e) : Pa(e));
    f = e || f && !va(f);
    !Uf && f && "POST" != b.method && (Uf = !0, ff(Error("AJAX request with postData should use POST")));
    return e
};
const Yf = [{
    ja: a => `Cannot read property '${a.key}'`,
    ca: {
        Error: [{
            B: /(Permission denied) to access property "([^']+)"/,
            groups: ["reason", "key"]
        }],
        TypeError: [{
            B: /Cannot read property '([^']+)' of (null|undefined)/,
            groups: ["key", "value"]
        }, {
            B: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
            groups: ["value", "key"]
        }, {
            B: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
            groups: ["value", "key"]
        }, {
            B: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
            groups: ["key"]
        }, {
            B: /Unable to get property '([^']+)' of (undefined or null) reference/,
            groups: ["key", "value"]
        }, {
            B: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
            groups: ["value", "base", "key"]
        }]
    }
}, {
    ja: a => `Cannot call '${a.key}'`,
    ca: {
        TypeError: [{
                B: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
                groups: ["base", "key"]
            }, {
                B: /([^ ]+) called on (null or undefined)/,
                groups: ["key", "value"]
            }, {
                B: /Object (.*) has no method '([^ ]+)'/,
                groups: ["base", "key"]
            }, {
                B: /Object doesn't support property or method '([^ ]+)'/,
                groups: ["key"]
            }, {
                B: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
                groups: ["key"]
            },
            {
                B: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
                groups: ["key"]
            }
        ]
    }
}, {
    ja: a => `${a.key} is not defined`,
    ca: {
        ReferenceError: [{
            B: /(.*) is not defined/,
            groups: ["key"]
        }, {
            B: /Can't find variable: (.*)/,
            groups: ["key"]
        }]
    }
}];
var $f = {
    K: [],
    H: [{
        callback: Zf,
        weight: 500
    }]
};

function Zf(a) {
    if ("JavaException" === a.name) return !0;
    a = a.stack;
    return a.includes("chrome://") || a.includes("chrome-extension://") || a.includes("moz-extension://")
};

function ag() {
    if (!bg) {
        var a = bg = new cg;
        a.K.length = 0;
        a.H.length = 0;
        dg(a, $f)
    }
    return bg
}

function dg(a, b) {
    b.K && a.K.push.apply(a.K, b.K);
    b.H && a.H.push.apply(a.H, b.H)
}
var cg = class {
        constructor() {
            this.H = [];
            this.K = []
        }
    },
    bg;
const eg = new E;

function fg(a) {
    const b = a.length;
    let c = 0;
    const d = () => a.charCodeAt(c++);
    do {
        var e = gg(d);
        if (Infinity === e) break;
        const f = e >> 3;
        switch (e & 7) {
            case 0:
                e = gg(d);
                if (2 === f) return e;
                break;
            case 1:
                if (2 === f) return;
                c += 8;
                break;
            case 2:
                e = gg(d);
                if (2 === f) return a.substr(c, e);
                c += e;
                break;
            case 5:
                if (2 === f) return;
                c += 4;
                break;
            default:
                return
        }
    } while (c < b)
}

function gg(a) {
    let b = a(),
        c = b & 127;
    if (128 > b) return c;
    b = a();
    c |= (b & 127) << 7;
    if (128 > b) return c;
    b = a();
    c |= (b & 127) << 14;
    if (128 > b) return c;
    b = a();
    return 128 > b ? c | (b & 127) << 21 : Infinity
};

function hg(a, b, c, d) {
    if (a)
        if (Array.isArray(a)) {
            var e = d;
            for (d = 0; d < a.length && !(a[d] && (e += ig(d, a[d], b, c), 500 < e)); d++);
            d = e
        } else if ("object" === typeof a)
        for (e in a) {
            if (a[e]) {
                var f = e;
                var g = a[e],
                    h = b,
                    k = c;
                f = "string" !== typeof g || "clickTrackingParams" !== f && "trackingParams" !== f ? 0 : (g = fg(atob(g.replace(/-/g, "+").replace(/_/g, "/")))) ? ig(`${f}.ve`, g, h, k) : 0;
                d += f;
                d += ig(e, a[e], b, c);
                if (500 < d) break
            }
        } else c[b] = jg(a), d += c[b].length;
    else c[b] = jg(a), d += c[b].length;
    return d
}

function ig(a, b, c, d) {
    c += `.${a}`;
    a = jg(b);
    d[c] = a;
    return c.length + a.length
}

function jg(a) {
    try {
        return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(0, 500)
    } catch (b) {
        return `unable to serialize ${typeof a} (${b.message})`
    }
};

function kg() {
    lg.h || (lg.h = new lg);
    return lg.h
}

function mg(a, b) {
    a = {};
    var c = [],
        d = Uc(String(r.location.href));
    var e = [];
    var f = r.__SAPISID || r.__APISID || r.__3PSAPISID || r.__OVERRIDE_SID;
    cd() && (f = f || r.__1PSAPISID);
    if (f) f = !0;
    else {
        if ("undefined" !== typeof document) {
            var g = new bd;
            f = g.get("SAPISID") || g.get("APISID") || g.get("__Secure-3PAPISID") || g.get("SID") || g.get("OSID");
            cd() && (f = f || g.get("__Secure-1PAPISID"))
        }
        f = !!f
    }
    f && (g = (f = d = 0 == d.indexOf("https:") || 0 == d.indexOf("chrome-extension:") || 0 == d.indexOf("moz-extension:")) ? r.__SAPISID : r.__APISID, g || "undefined" ===
        typeof document || (g = new bd, g = g.get(f ? "SAPISID" : "APISID") || g.get("__Secure-3PAPISID")), (f = g ? Yc(g, f ? "SAPISIDHASH" : "APISIDHASH", c) : null) && e.push(f), d && cd() && ((d = dd("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", c)) && e.push(d), (c = dd("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", c)) && e.push(c)));
    if (e = 0 == e.length ? null : e.join(" ")) a.Authorization = e, e = b = null == b ? void 0 : b.sessionIndex, void 0 === e && (e = Number(N("SESSION_INDEX", 0)), e = isNaN(e) ? 0 : e), P("voice_search_auth_header_removal") || (a["X-Goog-AuthUser"] =
        e.toString()), "INNERTUBE_HOST_OVERRIDE" in af || (a["X-Origin"] = window.location.origin), void 0 === b && "DELEGATED_SESSION_ID" in af && (a["X-Goog-PageId"] = N("DELEGATED_SESSION_ID"));
    return a
}
var lg = class {
    constructor() {
        this.Ya = !0
    }
};
var ng = {
    identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"
};
t("ytglobal.prefsUserPrefsPrefs_", u("ytglobal.prefsUserPrefsPrefs_") || {});

function og() {
    if (void 0 !== N("DATASYNC_ID")) return N("DATASYNC_ID");
    throw new K("Datasync ID not set", "unknown");
};
const pg = [];
let qg, rg = !1;

function sg(a) {
    rg || (qg ? qg.handleError(a) : (pg.push({
        type: "ERROR",
        payload: a
    }), 10 < pg.length && pg.shift()))
}

function tg(a, b) {
    rg || (qg ? qg.ba(a, b) : (pg.push({
        type: "EVENT",
        eventType: a,
        payload: b
    }), 10 < pg.length && pg.shift()))
};

function ug(a) {
    if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
}

function vg(a) {
    return a.substr(0, a.indexOf(":")) || a
};
const wg = {
        AUTH_INVALID: "No user identifier specified.",
        EXPLICIT_ABORT: "Transaction was explicitly aborted.",
        IDB_NOT_SUPPORTED: "IndexedDB is not supported.",
        MISSING_INDEX: "Index not created.",
        MISSING_OBJECT_STORES: "Object stores not created.",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "Database is deleted because expected object stores were not created.",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "Database is reopened because expected object stores were not created.",
        UNKNOWN_ABORT: "Transaction was aborted for unknown reasons.",
        QUOTA_EXCEEDED: "The current transaction exceeded its quota limitations.",
        QUOTA_MAYBE_EXCEEDED: "The current transaction may have failed because of exceeding quota limitations.",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "Can't start a transaction on a closed database",
        INCOMPATIBLE_DB_VERSION: "The binary is incompatible with the database version"
    },
    xg = {
        AUTH_INVALID: "ERROR",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "WARNING",
        EXPLICIT_ABORT: "IGNORED",
        IDB_NOT_SUPPORTED: "ERROR",
        MISSING_INDEX: "WARNING",
        MISSING_OBJECT_STORES: "ERROR",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "WARNING",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "WARNING",
        QUOTA_EXCEEDED: "WARNING",
        QUOTA_MAYBE_EXCEEDED: "WARNING",
        UNKNOWN_ABORT: "WARNING",
        INCOMPATIBLE_DB_VERSION: "WARNING"
    },
    yg = {
        AUTH_INVALID: !1,
        EXECUTE_TRANSACTION_ON_CLOSED_DB: !1,
        EXPLICIT_ABORT: !1,
        IDB_NOT_SUPPORTED: !1,
        MISSING_INDEX: !1,
        MISSING_OBJECT_STORES: !1,
        DB_DELETED_BY_MISSING_OBJECT_STORES: !1,
        DB_REOPENED_BY_MISSING_OBJECT_STORES: !1,
        QUOTA_EXCEEDED: !1,
        QUOTA_MAYBE_EXCEEDED: !0,
        UNKNOWN_ABORT: !0,
        INCOMPATIBLE_DB_VERSION: !1
    };
var R = class extends K {
        constructor(a, b = {}, c = wg[a], d = xg[a], e = yg[a]) {
            super(c, Object.assign({}, {
                name: "YtIdbKnownError",
                isSw: void 0 === self.document,
                isIframe: self !== self.top,
                type: a
            }, b));
            this.type = a;
            this.message = c;
            this.level = d;
            this.h = e;
            Object.setPrototypeOf(this, R.prototype)
        }
    },
    zg = class extends R {
        constructor(a, b) {
            super("MISSING_OBJECT_STORES", {
                expectedObjectStores: b,
                foundObjectStores: a
            }, wg.MISSING_OBJECT_STORES);
            Object.setPrototypeOf(this, zg.prototype)
        }
    },
    Ag = class extends Error {
        constructor(a, b) {
            super();
            this.index =
                a;
            this.objectStore = b;
            Object.setPrototypeOf(this, Ag.prototype)
        }
    };
const Bg = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

function Cg(a, b, c, d) {
    b = vg(b);
    let e;
    e = a instanceof Error ? a : Error(`Unexpected error: ${a}`);
    if (e instanceof R) return e;
    a = {
        objectStoreNames: c,
        dbName: b,
        dbVersion: d
    };
    if ("QuotaExceededError" === e.name) return new R("QUOTA_EXCEEDED", a);
    if (ab && "UnknownError" === e.name) return new R("QUOTA_MAYBE_EXCEEDED", a);
    if (e instanceof Ag) return new R("MISSING_INDEX", Object.assign({}, a, {
        objectStore: e.objectStore,
        index: e.index
    }));
    if ("InvalidStateError" === e.name && Bg.some(f => e.message.includes(f))) return new R("EXECUTE_TRANSACTION_ON_CLOSED_DB",
        a);
    if ("AbortError" === e.name) return new R("UNKNOWN_ABORT", a, e.message);
    e.args = [Object.assign({}, a, {
        name: "IdbError",
        Ub: e.name
    })];
    e.level = "WARNING";
    return e
}

function Dg(a, b, c) {
    return new R("IDB_NOT_SUPPORTED", {
        context: {
            caller: a,
            publicName: b,
            version: c,
            hasSucceededOnce: void 0
        }
    })
};

function Eg(a) {
    if (!a) throw Error();
    throw a;
}

function Fg(a) {
    return a
}
var Gg = class {
    constructor(a) {
        this.h = a
    }
};

function Hg(a, b, c, d, e) {
    try {
        if ("FULFILLED" !== a.state.status) throw Error("calling handleResolve before the promise is fulfilled.");
        const f = c(a.state.value);
        f instanceof Ig ? Jg(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function Kg(a, b, c, d, e) {
    try {
        if ("REJECTED" !== a.state.status) throw Error("calling handleReject before the promise is rejected.");
        const f = c(a.state.reason);
        f instanceof Ig ? Jg(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function Jg(a, b, c, d, e) {
    b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(f => {
        f instanceof Ig ? Jg(a, b, f, d, e) : d(f)
    }, f => {
        e(f)
    })
}
var Ig = class {
    constructor(a) {
        this.state = {
            status: "PENDING"
        };
        this.h = [];
        this.i = [];
        a = a.h;
        const b = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "FULFILLED",
                        value: d
                    };
                    for (const e of this.h) e()
                }
            },
            c = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "REJECTED",
                        reason: d
                    };
                    for (const e of this.i) e()
                }
            };
        try {
            a(b, c)
        } catch (d) {
            c(d)
        }
    }
    static all(a) {
        return new Ig(new Gg((b, c) => {
            const d = [];
            let e = a.length;
            0 === e && b(d);
            for (let f = 0; f < a.length; ++f) Ig.resolve(a[f]).then(g => {
                d[f] = g;
                e--;
                0 === e && b(d)
            }).catch(g => {
                c(g)
            })
        }))
    }
    static resolve(a) {
        return new Ig(new Gg((b, c) => {
            a instanceof Ig ? a.then(b, c) : b(a)
        }))
    }
    then(a, b) {
        const c = null != a ? a : Fg,
            d = null != b ? b : Eg;
        return new Ig(new Gg((e, f) => {
            "PENDING" === this.state.status ? (this.h.push(() => {
                Hg(this, this, c, e, f)
            }), this.i.push(() => {
                Kg(this, this, d, e, f)
            })) : "FULFILLED" === this.state.status ? Hg(this, this, c, e, f) : "REJECTED" === this.state.status && Kg(this, this, d, e, f)
        }))
    } catch (a) {
        return this.then(void 0, a)
    }
};

function Lg(a, b, c) {
    const d = () => {
            try {
                a.removeEventListener("success", e), a.removeEventListener("error", f)
            } catch (g) {}
        },
        e = () => {
            b(a.result);
            d()
        },
        f = () => {
            c(a.error);
            d()
        };
    a.addEventListener("success", e);
    a.addEventListener("error", f)
}

function Mg(a) {
    return new Promise((b, c) => {
        Lg(a, b, c)
    })
}

function S(a) {
    return new Ig(new Gg((b, c) => {
        Lg(a, b, c)
    }))
};

function Ng(a, b) {
    return new Ig(new Gg((c, d) => {
        const e = () => {
            const f = a ? b(a) : null;
            f ? f.then(g => {
                a = g;
                e()
            }, d) : c()
        };
        e()
    }))
};

function T(a, b, c, d) {
    return q(function*() {
        const e = {
            mode: "readonly",
            F: !1,
            tag: "IDB_TRANSACTION_TAG_UNKNOWN"
        };
        "string" === typeof c ? e.mode = c : Object.assign(e, c);
        a.transactionCount++;
        const f = e.F ? 3 : 1;
        let g = 0,
            h;
        for (; !h;) {
            g++;
            const l = Math.round(Q());
            try {
                const m = a.h.transaction(b, e.mode);
                var k = d;
                const n = new Og(m),
                    v = yield Pg(n, k), p = Math.round(Q());
                Qg(a, l, p, g, void 0, b.join(), e);
                return v
            } catch (m) {
                k = Math.round(Q());
                const n = Cg(m, a.h.name, b.join(), a.h.version);
                if (n instanceof R && !n.h || g >= f) Qg(a, l, k, g, n, b.join(), e),
                    h = n
            }
        }
        return Promise.reject(h)
    })
}

function Rg(a, b, c) {
    a = a.h.createObjectStore(b, c);
    return new Sg(a)
}

function Tg(a, b, c, d) {
    return T(a, [b], {
        mode: "readwrite",
        F: !0
    }, e => {
        e = e.objectStore(b);
        return S(e.h.put(c, d))
    })
}

function Qg(a, b, c, d, e, f, g) {
    b = c - b;
    e ? (e instanceof R && ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) && tg("QUOTA_EXCEEDED", {
        dbName: vg(a.h.name),
        objectStoreNames: f,
        transactionCount: a.transactionCount,
        transactionMode: g.mode
    }), e instanceof R && "UNKNOWN_ABORT" === e.type && (c -= a.j, 0 > c && c >= Math.pow(2, 31) && (c = 0), tg("TRANSACTION_UNEXPECTEDLY_ABORTED", {
        objectStoreNames: f,
        transactionDuration: b,
        transactionCount: a.transactionCount,
        dbDuration: c
    }), a.i = !0), Ug(a, !1, d, f, b, g.tag), sg(e)) : Ug(a, !0, d, f, b, g.tag)
}

function Ug(a, b, c, d, e, f = "IDB_TRANSACTION_TAG_UNKNOWN") {
    tg("TRANSACTION_ENDED", {
        objectStoreNames: d,
        connectionHasUnknownAbortedTransaction: a.i,
        duration: e,
        isSuccessful: b,
        tryCount: c,
        tag: f
    })
}
var Vg = class {
    constructor(a, b) {
        this.h = a;
        this.options = b;
        this.transactionCount = 0;
        this.j = Math.round(Q());
        this.i = !1
    }
    add(a, b, c) {
        return T(this, [a], {
            mode: "readwrite",
            F: !0
        }, d => d.objectStore(a).add(b, c))
    }
    clear(a) {
        return T(this, [a], {
            mode: "readwrite",
            F: !0
        }, b => b.objectStore(a).clear())
    }
    close() {
        this.h.close();
        let a;
        (null == (a = this.options) ? 0 : a.closed) && this.options.closed()
    }
    count(a, b) {
        return T(this, [a], {
            mode: "readonly",
            F: !0
        }, c => c.objectStore(a).count(b))
    }
    delete(a, b) {
        return T(this, [a], {
            mode: "readwrite",
            F: !0
        }, c => c.objectStore(a).delete(b))
    }
    get(a, b) {
        return T(this, [a], {
            mode: "readonly",
            F: !0
        }, c => c.objectStore(a).get(b))
    }
    getAll(a, b, c) {
        return T(this, [a], {
            mode: "readonly",
            F: !0
        }, d => d.objectStore(a).getAll(b, c))
    }
    objectStoreNames() {
        return Array.from(this.h.objectStoreNames)
    }
    getName() {
        return this.h.name
    }
};

function Wg(a, b, c) {
    a = a.h.openCursor(b.query, b.direction);
    return Xg(a).then(d => Ng(d, c))
}

function Yg(a, b) {
    return Wg(a, {
        query: b
    }, c => c.delete().then(() => c.continue())).then(() => {})
}

function Zg(a, b, c) {
    const d = [];
    return Wg(a, {
        query: b
    }, e => {
        if (!(void 0 !== c && d.length >= c)) return d.push(e.O()), e.continue()
    }).then(() => d)
}
var Sg = class {
    constructor(a) {
        this.h = a
    }
    add(a, b) {
        return S(this.h.add(a, b))
    }
    autoIncrement() {
        return this.h.autoIncrement
    }
    clear() {
        return S(this.h.clear()).then(() => {})
    }
    count(a) {
        return S(this.h.count(a))
    }
    delete(a) {
        return a instanceof IDBKeyRange ? Yg(this, a) : S(this.h.delete(a))
    }
    get(a) {
        return S(this.h.get(a))
    }
    getAll(a, b) {
        return "getAll" in IDBObjectStore.prototype ? S(this.h.getAll(a, b)) : Zg(this, a, b)
    }
    index(a) {
        try {
            return new $g(this.h.index(a))
        } catch (b) {
            if (b instanceof Error && "NotFoundError" === b.name) throw new Ag(a,
                this.h.name);
            throw b;
        }
    }
    getName() {
        return this.h.name
    }
    keyPath() {
        return this.h.keyPath
    }
};

function Pg(a, b) {
    const c = new Promise((d, e) => {
        try {
            b(a).then(f => {
                d(f)
            }).catch(e)
        } catch (f) {
            e(f), a.abort()
        }
    });
    return Promise.all([c, a.done]).then(([d]) => d)
}
var Og = class {
    constructor(a) {
        this.h = a;
        this.j = new Map;
        this.i = !1;
        this.done = new Promise((b, c) => {
            this.h.addEventListener("complete", () => {
                b()
            });
            this.h.addEventListener("error", d => {
                d.currentTarget === d.target && c(this.h.error)
            });
            this.h.addEventListener("abort", () => {
                var d = this.h.error;
                if (d) c(d);
                else if (!this.i) {
                    d = R;
                    var e = this.h.objectStoreNames;
                    const f = [];
                    for (let g = 0; g < e.length; g++) {
                        const h = e.item(g);
                        if (null === h) throw Error("Invariant: item in DOMStringList is null");
                        f.push(h)
                    }
                    d = new d("UNKNOWN_ABORT", {
                        objectStoreNames: f.join(),
                        dbName: this.h.db.name,
                        mode: this.h.mode
                    });
                    c(d)
                }
            })
        })
    }
    abort() {
        this.h.abort();
        this.i = !0;
        throw new R("EXPLICIT_ABORT");
    }
    objectStore(a) {
        a = this.h.objectStore(a);
        let b = this.j.get(a);
        b || (b = new Sg(a), this.j.set(a, b));
        return b
    }
};

function ah(a, b, c) {
    const {
        query: d = null,
        direction: e = "next"
    } = b;
    a = a.h.openCursor(d, e);
    return Xg(a).then(f => Ng(f, c))
}

function bh(a, b, c) {
    const d = [];
    return ah(a, {
        query: b
    }, e => {
        if (!(void 0 !== c && d.length >= c)) return d.push(e.O()), e.continue()
    }).then(() => d)
}
var $g = class {
    constructor(a) {
        this.h = a
    }
    count(a) {
        return S(this.h.count(a))
    }
    delete(a) {
        return ah(this, {
            query: a
        }, b => b.delete().then(() => b.continue()))
    }
    get(a) {
        return S(this.h.get(a))
    }
    getAll(a, b) {
        return "getAll" in IDBIndex.prototype ? S(this.h.getAll(a, b)) : bh(this, a, b)
    }
    getKey(a) {
        return S(this.h.getKey(a))
    }
    keyPath() {
        return this.h.keyPath
    }
    unique() {
        return this.h.unique
    }
};

function Xg(a) {
    return S(a).then(b => b ? new ch(a, b) : null)
}
var ch = class {
    constructor(a, b) {
        this.request = a;
        this.cursor = b
    }
    advance(a) {
        this.cursor.advance(a);
        return Xg(this.request)
    }
    continue (a) {
        this.cursor.continue(a);
        return Xg(this.request)
    }
    delete() {
        return S(this.cursor.delete()).then(() => {})
    }
    getKey() {
        return this.cursor.key
    }
    O() {
        return this.cursor.value
    }
    update(a) {
        return S(this.cursor.update(a))
    }
};

function dh(a, b, c) {
    return new Promise((d, e) => {
        let f;
        f = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
        const g = c.Ea,
            h = c.blocking,
            k = c.Za,
            l = c.upgrade,
            m = c.closed;
        let n;
        const v = () => {
            n || (n = new Vg(f.result, {
                closed: m
            }));
            return n
        };
        f.addEventListener("upgradeneeded", p => {
            try {
                if (null === p.newVersion) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
                if (null === f.transaction) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
                p.dataLoss && "none" !== p.dataLoss && tg("IDB_DATA_CORRUPTED", {
                    reason: p.dataLossMessage || "unknown reason",
                    dbName: vg(a)
                });
                const z = v(),
                    H = new Og(f.transaction);
                l && l(z, F => p.oldVersion < F && p.newVersion >= F, H);
                H.done.catch(F => {
                    e(F)
                })
            } catch (z) {
                e(z)
            }
        });
        f.addEventListener("success", () => {
            const p = f.result;
            h && p.addEventListener("versionchange", () => {
                h(v())
            });
            p.addEventListener("close", () => {
                tg("IDB_UNEXPECTEDLY_CLOSED", {
                    dbName: vg(a),
                    dbVersion: p.version
                });
                k && k()
            });
            d(v())
        });
        f.addEventListener("error", () => {
            e(f.error)
        });
        g && f.addEventListener("blocked", () => {
            g()
        })
    })
}

function eh(a, b, c = {}) {
    return dh(a, b, c)
}

function fh(a, b = {}) {
    return q(function*() {
        try {
            const c = self.indexedDB.deleteDatabase(a),
                d = b.Ea;
            d && c.addEventListener("blocked", () => {
                d()
            });
            yield Mg(c)
        } catch (c) {
            throw Cg(c, a, "", -1);
        }
    })
};

function gh(a, b) {
    return new R("INCOMPATIBLE_DB_VERSION", {
        dbName: a.name,
        oldVersion: a.options.version,
        newVersion: b
    })
}

function hh(a, b) {
    if (!b) throw Dg("openWithToken", vg(a.name));
    return a.open()
}
var ih = class {
    constructor(a, b) {
        this.name = a;
        this.options = b;
        this.j = !0;
        this.m = this.l = 0
    }
    i(a, b, c = {}) {
        return eh(a, b, c)
    }
    delete(a = {}) {
        return fh(this.name, a)
    }
    open() {
        if (!this.j) throw gh(this);
        if (this.h) return this.h;
        let a;
        const b = () => {
                this.h === a && (this.h = void 0)
            },
            c = {
                blocking: e => {
                    e.close()
                },
                closed: b,
                Za: b,
                upgrade: this.options.upgrade
            },
            d = () => {
                const e = this;
                return q(function*() {
                    var f, g = null != (f = Error().stack) ? f : "";
                    try {
                        const k = yield e.i(e.name, e.options.version, c);
                        f = k;
                        var h = e.options;
                        const l = [];
                        for (const m of Object.keys(h.R)) {
                            const {
                                P: n,
                                Zb: v = Number.MAX_VALUE
                            } = h.R[m];
                            !(f.h.version >= n) || f.h.version >= v || f.h.objectStoreNames.contains(m) || l.push(m)
                        }
                        if (0 !== l.length) {
                            const m = Object.keys(e.options.R),
                                n = k.objectStoreNames();
                            if (e.m < jf("ytidb_reopen_db_retries", 0)) return e.m++, k.close(), sg(new R("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                                dbName: e.name,
                                expectedObjectStores: m,
                                foundObjectStores: n
                            })), d();
                            if (e.l < jf("ytidb_remake_db_retries", 1)) return e.l++, yield e.delete(), sg(new R("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                                dbName: e.name,
                                expectedObjectStores: m,
                                foundObjectStores: n
                            })), d();
                            throw new zg(n, m);
                        }
                        return k
                    } catch (k) {
                        if (k instanceof DOMException ? "VersionError" === k.name : "DOMError" in self && k instanceof DOMError ? "VersionError" === k.name : k instanceof Object && "message" in k && "An attempt was made to open a database using a lower version than the existing version." ===
                            k.message) {
                            g = yield e.i(e.name, void 0, Object.assign({}, c, {
                                upgrade: void 0
                            }));
                            h = g.h.version;
                            if (void 0 !== e.options.version && h > e.options.version + 1) throw g.close(), e.j = !1, gh(e, h);
                            return g
                        }
                        b();
                        k instanceof Error && !P("ytidb_async_stack_killswitch") && (k.stack = `${k.stack}\n${g.substring(g.indexOf("\n")+1)}`);
                        let l;
                        throw Cg(k, e.name, "", null != (l = e.options.version) ? l : -1);
                    }
                })
            };
        return this.h = a = d()
    }
};
const jh = new ih("YtIdbMeta", {
    R: {
        databases: {
            P: 1
        }
    },
    upgrade(a, b) {
        b(1) && Rg(a, "databases", {
            keyPath: "actualName"
        })
    }
});

function kh(a, b) {
    return q(function*() {
        return T(yield hh(jh, b), ["databases"], {
            F: !0,
            mode: "readwrite"
        }, c => {
            const d = c.objectStore("databases");
            return d.get(a.actualName).then(e => {
                if (e ? a.actualName !== e.actualName || a.publicName !== e.publicName || a.userIdentifier !== e.userIdentifier : 1) return S(d.h.put(a, void 0)).then(() => {})
            })
        })
    })
}

function lh(a, b) {
    return q(function*() {
        if (a) return (yield hh(jh, b)).delete("databases", a)
    })
};
let mh;
const nh = new class {
    constructor() {}
}(new class {
    constructor() {}
});

function oh() {
    return q(function*() {
        return !0
    })
}

function ph() {
    if (void 0 !== mh) return mh;
    rg = !0;
    return mh = oh().then(a => {
        rg = !1;
        return a
    })
}

function qh() {
    return u("ytglobal.idbToken_") || void 0
}

function rh() {
    const a = qh();
    return a ? Promise.resolve(a) : ph().then(b => {
        (b = b ? nh : void 0) && t("ytglobal.idbToken_", b);
        return b
    })
};
new sd;

function sh(a) {
    try {
        og();
        var b = !0
    } catch (c) {
        b = !1
    }
    if (!b) throw a = new R("AUTH_INVALID", {
        dbName: a
    }), sg(a), a;
    b = og();
    return {
        actualName: `${a}:${b}`,
        publicName: a,
        userIdentifier: b
    }
}

function th(a, b, c, d) {
    return q(function*() {
        var e, f = null != (e = Error().stack) ? e : "";
        e = yield rh();
        if (!e) throw e = Dg("openDbImpl", a, b), P("ytidb_async_stack_killswitch") || (e.stack = `${e.stack}\n${f.substring(f.indexOf("\n")+1)}`), sg(e), e;
        ug(a);
        f = c ? {
            actualName: a,
            publicName: a,
            userIdentifier: void 0
        } : sh(a);
        try {
            return yield kh(f, e), yield eh(f.actualName, b, d)
        } catch (g) {
            try {
                yield lh(f.actualName, e)
            } catch (h) {}
            throw g;
        }
    })
}

function uh(a, b, c = {}) {
    return th(a, b, !1, c)
}

function vh(a, b, c = {}) {
    return th(a, b, !0, c)
}

function wh(a, b = {}) {
    return q(function*() {
        const c = yield rh();
        if (c) {
            ug(a);
            var d = sh(a);
            yield fh(d.actualName, b);
            yield lh(d.actualName, c)
        }
    })
}

function xh(a, b = {}) {
    return q(function*() {
        const c = yield rh();
        c && (ug(a), yield fh(a, b), yield lh(a, c))
    })
};

function yh(a, b) {
    let c;
    return () => {
        c || (c = new zh(a, b));
        return c
    }
}
var zh = class extends ih {
    constructor(a, b) {
        super(a, b);
        this.options = b;
        ug(a)
    }
    i(a, b, c = {}) {
        return (this.options.ea ? vh : uh)(a, b, Object.assign({}, c))
    }
    delete(a = {}) {
        return (this.options.ea ? xh : wh)(this.name, a)
    }
};

function Ah(a, b) {
    return yh(a, b)
};
var Bh = Ah("ytGcfConfig", {
    R: {
        coldConfigStore: {
            P: 1
        },
        hotConfigStore: {
            P: 1
        }
    },
    ea: !1,
    upgrade(a, b) {
        b(1) && (Rg(a, "hotConfigStore", {
            keyPath: "key",
            autoIncrement: !0
        }).h.createIndex("hotTimestampIndex", "timestamp", {
            unique: !1
        }), Rg(a, "coldConfigStore", {
            keyPath: "key",
            autoIncrement: !0
        }).h.createIndex("coldTimestampIndex", "timestamp", {
            unique: !1
        }))
    },
    version: 1
});

function Ch(a) {
    return hh(Bh(), a)
}

function Dh(a, b, c) {
    return q(function*() {
        const d = {
                config: a,
                hashData: b,
                timestamp: Q()
            },
            e = yield Ch(c);
        yield e.clear("hotConfigStore");
        return yield Tg(e, "hotConfigStore", d)
    })
}

function Eh(a, b, c, d) {
    return q(function*() {
        const e = {
                config: a,
                hashData: b,
                configData: c,
                timestamp: Q()
            },
            f = yield Ch(d);
        yield f.clear("coldConfigStore");
        return yield Tg(f, "coldConfigStore", e)
    })
}

function Fh(a) {
    return q(function*() {
        let b = void 0;
        yield T(yield Ch(a), ["coldConfigStore"], {
            mode: "readwrite",
            F: !0
        }, c => ah(c.objectStore("coldConfigStore").index("coldTimestampIndex"), {
            direction: "prev"
        }, d => {
            b = d.O()
        }));
        return b
    })
}

function Gh(a) {
    return q(function*() {
        let b = void 0;
        yield T(yield Ch(a), ["hotConfigStore"], {
            mode: "readwrite",
            F: !0
        }, c => ah(c.objectStore("hotConfigStore").index("hotTimestampIndex"), {
            direction: "prev"
        }, d => {
            b = d.O()
        }));
        return b
    })
};
var Hh = class extends ed {
    constructor() {
        super(...arguments);
        this.h = []
    }
    j() {
        this.h.length = 0;
        super.j()
    }
};

function Ih(a, b, c) {
    return q(function*() {
        if (P("update_log_event_config")) {
            c && (a.j = c, t("yt.gcf.config.hotConfigGroup", a.j));
            a.hotHashData = b;
            t("yt.gcf.config.hotHashData", a.hotHashData);
            var d = qh();
            if (d) {
                if (!c) {
                    var e;
                    c = null == (e = yield Gh(d)) ? void 0 : e.config
                }
                yield Dh(c, b, d)
            }
            if (c) {
                d = a.i;
                e = c;
                for (const f of d.h) f(e)
            }
        }
    })
}

function Jh(a, b, c) {
    return q(function*() {
        if (P("update_log_event_config")) {
            a.coldHashData = b;
            t("yt.gcf.config.coldHashData", a.coldHashData);
            const d = qh();
            if (d) {
                if (!c) {
                    let e;
                    c = null == (e = yield Fh(d)) ? void 0 : e.config
                }
                c && (yield Eh(c, b, c.configData, d))
            }
        }
    })
}
var Kh = class {
    constructor() {
        this.h = 0;
        this.i = new Hh
    }
};

function Lh() {
    return "INNERTUBE_API_KEY" in af && "INNERTUBE_API_VERSION" in af
}

function Mh() {
    return {
        innertubeApiKey: N("INNERTUBE_API_KEY"),
        innertubeApiVersion: N("INNERTUBE_API_VERSION"),
        ia: N("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
        La: N("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
        Ma: N("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
        innertubeContextClientVersion: N("INNERTUBE_CONTEXT_CLIENT_VERSION"),
        ta: N("INNERTUBE_CONTEXT_HL"),
        sa: N("INNERTUBE_CONTEXT_GL"),
        Na: N("INNERTUBE_HOST_OVERRIDE") || "",
        Pa: !!N("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
        Oa: !!N("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
        appInstallData: N("SERIALIZED_CLIENT_CONFIG_DATA")
    }
}

function Nh(a) {
    const b = {
        client: {
            hl: a.ta,
            gl: a.sa,
            clientName: a.La,
            clientVersion: a.innertubeContextClientVersion,
            configInfo: a.ia
        }
    };
    navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
    var c = r.devicePixelRatio;
    c && 1 != c && (b.client.screenDensityFloat = String(c));
    c = kf();
    "" !== c && (b.client.experimentsToken = c);
    c = lf();
    0 < c.length && (b.request = {
        internalExperimentFlags: c
    });
    Oh(void 0, b);
    Ph(a, void 0, b);
    P("start_sending_config_hash") && Qh(void 0, b);
    N("DELEGATED_SESSION_ID") && !P("pageid_as_header_web") &&
        (b.user = {
            onBehalfOfUser: N("DELEGATED_SESSION_ID")
        });
    a = Object;
    c = a.assign;
    var d = b.client,
        e = N("DEVICE", "");
    const f = {};
    for (const [g, h] of Object.entries(Rf(e))) {
        e = g;
        const k = h;
        "cbrand" === e ? f.deviceMake = k : "cmodel" === e ? f.deviceModel = k : "cbr" === e ? f.browserName = k : "cbrver" === e ? f.browserVersion = k : "cos" === e ? f.osName = k : "cosver" === e ? f.osVersion = k : "cplatform" === e && (f.platform = k)
    }
    b.client = c.call(a, d, f);
    return b
}

function Rh(a) {
    const b = new ee,
        c = new Yd;
    A(c, 1, a.ta);
    A(c, 2, a.sa);
    A(c, 16, a.Ma);
    A(c, 17, a.innertubeContextClientVersion);
    if (a.ia) {
        var d = a.ia,
            e = new Wd;
        d.coldConfigData && A(e, 1, d.coldConfigData);
        d.appInstallData && A(e, 6, d.appInstallData);
        d.coldHashData && A(e, 3, d.coldHashData);
        d.hotHashData && A(e, 5, d.hotHashData);
        B(c, Wd, 62, e)
    }
    if ((d = r.devicePixelRatio) && 1 != d) {
        if (null != d && "number" !== typeof d) throw Error(`Value of float/double field must be a number|null|undefined, found ${typeof d}: ${d}`);
        A(c, 65, d)
    }
    d = kf();
    "" !==
    d && A(c, 54, d);
    d = lf();
    if (0 < d.length) {
        e = new ae;
        for (let f = 0; f < d.length; f++) {
            const g = new $d;
            A(g, 1, d[f].key);
            ac(g, 2, Zd, d[f].value);
            ic(e, 15, $d, g)
        }
        B(b, ae, 5, e)
    }
    Oh(b);
    Ph(a, c);
    P("start_sending_config_hash") && Qh(c);
    N("DELEGATED_SESSION_ID") && !P("pageid_as_header_web") && (a = new de, A(a, 3, N("DELEGATED_SESSION_ID")));
    a = N("DEVICE", "");
    for (const [f, g] of Object.entries(Rf(a))) a = f, d = g, "cbrand" === a ? A(c, 12, d) : "cmodel" === a ? A(c, 13, d) : "cbr" === a ? A(c, 87, d) : "cbrver" === a ? A(c, 88, d) : "cos" === a ? A(c, 18, d) : "cosver" === a ? A(c, 19, d) : "cplatform" ===
        a && A(c, 42, d);
    b.l(c);
    return b
}

function Oh(a, b) {
    const c = u("yt.embedded_player.embed_url");
    c && (a ? (b = cc(a, be, 7) || new be, A(b, 4, c), B(a, be, 7, b)) : b && (b.thirdParty = {
        embedUrl: c
    }))
}

function Ph(a, b, c) {
    if (a.appInstallData)
        if (b) {
            let d;
            c = null != (d = cc(b, Wd, 62)) ? d : new Wd;
            A(c, 6, a.appInstallData);
            B(b, Wd, 62, c)
        } else c && (c.client.configInfo = c.client.configInfo || {}, c.client.configInfo.appInstallData = a.appInstallData)
}

function Sh(a, b, c = {}) {
    let d = {};
    N("EOM_VISITOR_DATA") ? d = {
        "X-Goog-EOM-Visitor-Id": N("EOM_VISITOR_DATA")
    } : d = {
        "X-Goog-Visitor-Id": c.visitorData || N("VISITOR_DATA", "")
    };
    if (b && b.includes("www.youtube-nocookie.com")) return d;
    b = c.Ib || N("AUTHORIZATION");
    b || (a ? b = `Bearer ${u("gapi.auth.getToken")().Hb}` : (a = mg(kg()), P("pageid_as_header_web") || delete a["X-Goog-PageId"], d = Object.assign({}, d, a)));
    b && (d.Authorization = b);
    return d
}

function Qh(a, b) {
    if (!Kh.h) {
        var c = new Kh;
        Kh.h = c
    }
    c = Kh.h;
    var d = Q() - c.h;
    if (0 !== c.h && d < jf("send_config_hash_timer")) c = void 0;
    else {
        d = u("yt.gcf.config.coldConfigData");
        var e = u("yt.gcf.config.hotHashData"),
            f = u("yt.gcf.config.coldHashData");
        d && e && f && (c.h = Q());
        c = {
            coldConfigData: d,
            hotHashData: e,
            coldHashData: f
        }
    }
    if (e = c)
        if (c = e.coldConfigData, d = e.coldHashData, e = e.hotHashData, c && d && e)
            if (a) {
                let g;
                b = null != (g = cc(a, Wd, 62)) ? g : new Wd;
                A(b, 1, c);
                A(b, 3, d);
                A(b, 5, e);
                B(a, Wd, 62, b)
            } else b && (b.client.configInfo = b.client.configInfo || {}, b.client.configInfo.coldConfigData = c, b.client.configInfo.coldHashData = d, b.client.configInfo.hotHashData = e)
};
const Th = ["client.name", "client.version"];

function Uh(a) {
    if (!a.errorMetadata || !a.errorMetadata.kvPairs) return a;
    a.errorMetadata.kvPairs = a.errorMetadata.kvPairs.filter(b => b.key ? Th.includes(b.key) : !1);
    return a
};
var Vh = Ah("ServiceWorkerLogsDatabase", {
    R: {
        SWHealthLog: {
            P: 1
        }
    },
    ea: !0,
    upgrade: (a, b) => {
        b(1) && Rg(a, "SWHealthLog", {
            keyPath: "id",
            autoIncrement: !0
        }).h.createIndex("swHealthNewRequest", ["interface", "timestamp"], {
            unique: !1
        })
    },
    version: 1
});

function Wh(a, b) {
    return q(function*() {
        var c = yield hh(Vh(), b), d = N("INNERTUBE_CONTEXT_CLIENT_NAME", 0);
        const e = Object.assign({}, a);
        e.clientError && (e.clientError = Uh(e.clientError));
        e.interface = d;
        return Tg(c, "SWHealthLog", e)
    })
};
t("ytNetworklessLoggingInitializationOptions", r.ytNetworklessLoggingInitializationOptions || {
    isNwlInitialized: !1
});

function Xh(a, b, c) {
    !N("VISITOR_DATA") && .01 > Math.random() && gf(new K("Missing VISITOR_DATA when sending innertube request.", "log_event", b, c));
    if (!a.isReady()) throw a = new K("innertube xhrclient not ready", "log_event", b, c), ff(a), a;
    b = {
        headers: c.headers || {},
        method: "POST",
        postParams: b,
        postBody: c.postBody,
        postBodyFormat: c.postBodyFormat || "JSON",
        onTimeout: () => {
            c.onTimeout()
        },
        onFetchTimeout: c.onTimeout,
        onSuccess: (k, l) => {
            if (c.onSuccess) c.onSuccess(l)
        },
        onFetchSuccess: k => {
            if (c.onSuccess) c.onSuccess(k)
        },
        onError: (k, l) => {
            if (c.onError) c.onError(l)
        },
        onFetchError: k => {
            if (c.onError) c.onError(k)
        },
        timeout: c.timeout,
        withCredentials: !0,
        compress: c.compress
    };
    b.headers["Content-Type"] || (b.headers["Content-Type"] = "application/json");
    let d = "";
    var e = a.config_.Na;
    e && (d = e);
    var f = a.config_.Pa || !1;
    e = Sh(f, d, c);
    Object.assign(b.headers, e);
    (e = b.headers.Authorization) && !d && f && (b.headers["x-origin"] = window.location.origin);
    f = `/${"youtubei"}/${a.config_.innertubeApiVersion}/${"log_event"}`;
    let g = {
            alt: "json"
        },
        h = a.config_.Oa && e;
    h = h && e.startsWith("Bearer");
    h || (g.key = a.config_.innertubeApiKey);
    a = Sf(`${d}${f}`, g || {}, !0);
    try {
        Vf(a, b)
    } catch (k) {
        if ("InvalidAccessError" == k.name) gf(Error("An extension is blocking network request."));
        else throw k;
    }
}
class Yh {
    constructor(a) {
        this.config_ = null;
        a ? this.config_ = a : Lh() && (this.config_ = Mh())
    }
    isReady() {
        !this.config_ && Lh() && (this.config_ = Mh());
        return !!this.config_
    }
};
const Zh = {
    stopImmediatePropagation: 1,
    stopPropagation: 1,
    preventMouseEvent: 1,
    preventManipulation: 1,
    preventDefault: 1,
    layerX: 1,
    layerY: 1,
    screenX: 1,
    screenY: 1,
    scale: 1,
    rotation: 1,
    webkitMovementX: 1,
    webkitMovementY: 1
};

function $h(a) {
    if (document.body && document.documentElement) {
        const b = document.body.scrollTop + document.documentElement.scrollTop;
        a.h = a.clientX + (document.body.scrollLeft + document.documentElement.scrollLeft);
        a.i = a.clientY + b
    }
}
class ai {
    constructor(a) {
        this.type = "";
        this.state = this.source = this.data = this.currentTarget = this.relatedTarget = this.target = null;
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.ctrlKey = this.altKey = !1;
        this.rotation = this.clientY = this.clientX = 0;
        this.changedTouches = this.touches = null;
        try {
            if (a = a || window.event) {
                this.event = a;
                for (let d in a) d in Zh || (this[d] = a[d]);
                this.rotation = a.rotation;
                var b = a.target || a.srcElement;
                b && 3 == b.nodeType && (b = b.parentNode);
                this.target = b;
                var c = a.relatedTarget;
                if (c) try {
                    c =
                        c.nodeName ? c : null
                } catch (d) {
                    c = null
                } else "mouseover" == this.type ? c = a.fromElement : "mouseout" == this.type && (c = a.toElement);
                this.relatedTarget = c;
                this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
                this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
                this.keyCode = a.keyCode ? a.keyCode : a.which;
                this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
                this.altKey = a.altKey;
                this.ctrlKey = a.ctrlKey;
                this.shiftKey = a.shiftKey;
                this.metaKey = a.metaKey;
                this.h = a.pageX;
                this.i = a.pageY
            }
        } catch (d) {}
    }
    preventDefault() {
        this.event &&
            (this.event.returnValue = !1, this.event.preventDefault && this.event.preventDefault())
    }
    stopPropagation() {
        this.event && (this.event.cancelBubble = !0, this.event.stopPropagation && this.event.stopPropagation())
    }
    stopImmediatePropagation() {
        this.event && (this.event.cancelBubble = !0, this.event.stopImmediatePropagation && this.event.stopImmediatePropagation())
    }
};
const ua = r.ytEventsEventsListeners || {};
t("ytEventsEventsListeners", ua);
const bi = r.ytEventsEventsCounter || {
    count: 0
};
t("ytEventsEventsCounter", bi);

function ci(a, b, c, d = {}) {
    a.addEventListener && ("mouseenter" != b || "onmouseenter" in document ? "mouseleave" != b || "onmouseenter" in document ? "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll") : b = "mouseout" : b = "mouseover");
    return ta(e => {
        const f = "boolean" === typeof e[4] && e[4] == !!d;
        var g;
        if (g = ia(e[4]) && ia(d)) a: {
            g = e[4];
            for (const h in g)
                if (!(h in d) || g[h] !== d[h]) {
                    g = !1;
                    break a
                }
            for (const h in d)
                if (!(h in g)) {
                    g = !1;
                    break a
                }
            g = !0
        }
        return !!e.length && e[0] == a && e[1] == b && e[2] == c && (f || g)
    })
}
const di = function(a) {
    let b = !1,
        c;
    return function() {
        b || (c = a(), b = !0);
        return c
    }
}(function() {
    let a = !1;
    try {
        const b = Object.defineProperty({}, "capture", {
            get: function() {
                a = !0
            }
        });
        window.addEventListener("test", null, b)
    } catch (b) {}
    return a
});

function ei(a, b, c, d = {}) {
    if (!a || !a.addEventListener && !a.attachEvent) return "";
    let e = ci(a, b, c, d);
    if (e) return e;
    e = ++bi.count + "";
    const f = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in document);
    let g;
    g = f ? h => {
        h = new ai(h);
        if (!Pc(h.relatedTarget, k => k == a)) return h.currentTarget = a, h.type = b, c.call(a, h)
    } : h => {
        h = new ai(h);
        h.currentTarget = a;
        return c.call(a, h)
    };
    g = O(g);
    a.addEventListener ? ("mouseenter" == b && f ? b = "mouseover" : "mouseleave" == b && f ? b = "mouseout" : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll"), di() || "boolean" === typeof d ? a.addEventListener(b, g, d) : a.addEventListener(b, g, !!d.capture)) : a.attachEvent(`on${b}`, g);
    ua[e] = [a, b, c, g, d];
    return e
}

function fi(a) {
    a && ("string" == typeof a && (a = [a]), pa(a, b => {
        if (b in ua) {
            var c = ua[b];
            const d = c[0],
                e = c[1],
                f = c[3];
            c = c[4];
            d.removeEventListener ? di() || "boolean" === typeof c ? d.removeEventListener(e, f, c) : d.removeEventListener(e, f, !!c.capture) : d.detachEvent && d.detachEvent(`on${e}`, f);
            delete ua[b]
        }
    }))
};

function gi(a) {
    this.C = a;
    this.h = null;
    this.s = 0;
    this.A = null;
    this.u = 0;
    this.i = [];
    for (a = 0; 4 > a; a++) this.i.push(0);
    this.o = 0;
    this.N = ei(window, "mousemove", la(this.T, this));
    a = la(this.D, this);
    "function" === typeof a && (a = O(a));
    this.U = window.setInterval(a, 25)
}
ma(gi, ed);
gi.prototype.T = function(a) {
    void 0 === a.h && $h(a);
    var b = a.h;
    void 0 === a.i && $h(a);
    this.h = new Oc(b, a.i)
};
gi.prototype.D = function() {
    if (this.h) {
        var a = Q();
        if (0 != this.s) {
            var b = this.A,
                c = this.h,
                d = b.x - c.x;
            b = b.y - c.y;
            d = Math.sqrt(d * d + b * b) / (a - this.s);
            this.i[this.o] = .5 < Math.abs((d - this.u) / this.u) ? 1 : 0;
            for (c = b = 0; 4 > c; c++) b += this.i[c] || 0;
            3 <= b && this.C();
            this.u = d
        }
        this.s = a;
        this.A = this.h;
        this.o = (this.o + 1) % 4
    }
};
gi.prototype.j = function() {
    window.clearInterval(this.U);
    fi(this.N)
};
const hi = new Set([174, 173, 175]),
    ii = {};

function ji() {
    var {
        Vb: a = !1,
        Ob: b = !0
    } = {};
    if (null == u("_lact", window)) {
        var c = parseInt(N("LACT"), 10);
        c = isFinite(c) ? Date.now() - Math.max(c, 0) : -1;
        t("_lact", c, window);
        t("_fact", c, window); - 1 == c && ki();
        ei(document, "keydown", ki);
        ei(document, "keyup", ki);
        ei(document, "mousedown", ki);
        ei(document, "mouseup", ki);
        a ? ei(window, "touchmove", () => {
            li("touchmove", 200)
        }, {
            passive: !0
        }) : (ei(window, "resize", () => {
            li("resize", 200)
        }), b && ei(window, "scroll", () => {
            li("scroll", 200)
        }));
        new gi(() => {
            li("mouse", 100)
        });
        ei(document, "touchstart", ki, {
            passive: !0
        });
        ei(document, "touchend", ki, {
            passive: !0
        })
    }
}

function li(a, b) {
    ii[a] || (ii[a] = !0, wf.h(() => {
        ki();
        ii[a] = !1
    }, b))
}

function ki(a) {
    let b;
    if (null != (b = u("experiment.flags", window)) && b.enable_lact_reset_by_volume_buttons || !hi.has(null == a ? void 0 : a.keyCode)) null == u("_lact", window) && ji(), a = Date.now(), t("_lact", a, window), -1 == u("_fact", window) && t("_fact", a, window), (a = u("ytglobal.ytUtilActivityCallback_")) && a()
}

function mi() {
    const a = u("_lact", window);
    return null == a ? -1 : Math.max(Date.now() - a, 0)
};
r.ytPubsubPubsubInstance || new E;
var ni = Symbol("injectionDeps"),
    oi = class {
        constructor() {
            this.name = "INNERTUBE_TRANSPORT_TOKEN"
        }
        toString() {
            return `InjectionToken(${this.name})`
        }
    },
    pi = class {
        constructor() {
            this.key = Kh
        }
    };

function qi(a) {
    var b = {
        Ta: ri,
        wa: si.h
    };
    a.i.set(b.Ta, b)
}

function ti(a, b, c, d = !1) {
    if (-1 < c.indexOf(b)) throw Error(`Deps cycle for: ${b}`);
    if (a.h.has(b)) return a.h.get(b);
    if (!a.i.has(b)) {
        if (d) return;
        throw Error(`No provider for: ${b}`);
    }
    d = a.i.get(b);
    c.push(b);
    if (void 0 !== d.wa) var e = d.wa;
    else if (d.bb) e = d[ni] ? ui(a, d[ni], c) : [], e = d.bb(...e);
    else if (d.ab) {
        e = d.ab;
        const f = e[ni] ? ui(a, e[ni], c) : [];
        e = new e(...f)
    } else throw Error(`Could not resolve providers for: ${b}`);
    c.pop();
    d.fc || a.h.set(b, e);
    return e
}

function ui(a, b, c) {
    return b ? b.map(d => d instanceof pi ? ti(a, d.key, c, !0) : ti(a, d, c)) : []
}
var vi = class {
    constructor() {
        this.i = new Map;
        this.h = new Map
    }
    resolve(a) {
        return a instanceof pi ? ti(this, a.key, [], !0) : ti(this, a, [])
    }
};
let wi;

function xi() {
    wi || (wi = new vi);
    return wi
};

function yi(a, b) {
    const c = zi(b);
    if (a.h[c]) return a.h[c];
    const d = Object.keys(a.store) || [];
    if (1 >= d.length && zi(b) === d[0]) return d;
    const e = [];
    for (let g = 0; g < d.length; g++) {
        const h = d[g].split("/");
        if (Ai(b.auth, h[0])) {
            var f = b.isJspb;
            Ai(void 0 === f ? "undefined" : f ? "true" : "false", h[1]) && Ai(b.cttAuthInfo, h[2]) && (f = b.tier, f = void 0 === f ? "undefined" : JSON.stringify(f), Ai(f, h[3]) && e.push(d[g]))
        }
    }
    return a.h[c] = e
}

function Ai(a, b) {
    return void 0 === a || "undefined" === a ? !0 : a === b
}
var Bi = class {
    constructor() {
        this.store = {};
        this.h = {}
    }
    storePayload(a, b) {
        a = zi(a);
        this.store[a] ? this.store[a].push(b) : (this.h = {}, this.store[a] = [b]);
        return a
    }
    smartExtractMatchingEntries(a) {
        if (!a.keys.length) return [];
        const b = yi(this, a.keys.splice(0, 1)[0]),
            c = [];
        for (let d = 0; d < b.length; d++) this.store[b[d]] && a.sizeLimit && (this.store[b[d]].length <= a.sizeLimit ? (c.push(...this.store[b[d]]), delete this.store[b[d]]) : c.push(...this.store[b[d]].splice(0, a.sizeLimit)));
        (null == a ? 0 : a.sizeLimit) && c.length < (null == a ? void 0 :
            a.sizeLimit) && (a.sizeLimit -= c.length, c.push(...this.smartExtractMatchingEntries(a)));
        return c
    }
    extractMatchingEntries(a) {
        a = yi(this, a);
        const b = [];
        for (let c = 0; c < a.length; c++) this.store[a[c]] && (b.push(...this.store[a[c]]), delete this.store[a[c]]);
        return b
    }
    getSequenceCount(a) {
        a = yi(this, a);
        let b = 0;
        for (let c = 0; c < a.length; c++) {
            let d;
            b += (null == (d = this.store[a[c]]) ? void 0 : d.length) || 0
        }
        return b
    }
};
Bi.prototype.getSequenceCount = Bi.prototype.getSequenceCount;
Bi.prototype.extractMatchingEntries = Bi.prototype.extractMatchingEntries;
Bi.prototype.smartExtractMatchingEntries = Bi.prototype.smartExtractMatchingEntries;
Bi.prototype.storePayload = Bi.prototype.storePayload;

function zi(a) {
    return [void 0 === a.auth ? "undefined" : a.auth, void 0 === a.isJspb ? "undefined" : a.isJspb, void 0 === a.cttAuthInfo ? "undefined" : a.cttAuthInfo, void 0 === a.tier ? "undefined" : a.tier].join("/")
};
const Ci = jf("initial_gel_batch_timeout", 2E3),
    Di = jf("gel_queue_timeout_max_ms", 6E4),
    Ei = Math.pow(2, 16) - 1;
let U = void 0;
class Fi {
    constructor() {
        this.j = this.h = this.i = 0
    }
}
const Gi = new Fi,
    Hi = new Fi,
    Ii = new Fi,
    Ji = new Fi;
let Ki, Li = !0;
const Mi = r.ytLoggingTransportTokensToCttTargetIds_ || {},
    Ni = r.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
let Oi = {};

function Pi() {
    let a = u("yt.logging.ims");
    a || (a = new Bi, t("yt.logging.ims", a));
    return a
}

function Qi(a, b) {
    if ("log_event" === a.endpoint) {
        var c = Ri(a),
            d = P("enable_web_tiered_gel") ? 200 : void 0;
        Oi[c] = !0;
        d = {
            cttAuthInfo: c,
            isJspb: !1,
            tier: d
        };
        Pi().storePayload(d, a.payload);
        Si(b, c, !1, d)
    }
}

function Ti(a, b) {
    if ("log_event" === a.endpoint) {
        var c = Ri(a, !0),
            d = P("enable_web_tiered_gel") ? 200 : void 0;
        Oi[c] = !0;
        d = {
            cttAuthInfo: c,
            isJspb: !0,
            tier: d
        };
        Pi().storePayload(d, a.payload.toJSON());
        Si(b, c, !0, d)
    }
}

function Si(a, b, c = !1, d) {
    a && (U = new a);
    a = Ui();
    const e = Q(),
        f = Vi(c, d.tier),
        g = f.j;
    let h = 0;
    d && (h = Pi().getSequenceCount(d));
    h >= a ? Ki || (Ki = Wi(() => {
        Xi({
            writeThenSend: !0
        }, P("flush_only_full_queue") ? b : void 0, c, d.tier);
        Ki = void 0
    }, 0)) : 10 <= e - g && (Yi(c, d.tier), f.j = e)
}

function Zi(a, b) {
    if ("log_event" === a.endpoint) {
        var c = Ri(a),
            d = new Map;
        d.set(c, [a.payload]);
        b && (U = new b);
        return new D((e, f) => {
            U && U.isReady() ? $i(d, U, e, f, {
                bypassNetworkless: !0
            }, !0) : e()
        })
    }
}

function aj(a, b) {
    if ("log_event" === a.endpoint) {
        var c = Ri(a, !0),
            d = new Map;
        d.set(c, [a.payload.toJSON()]);
        b && (U = new b);
        return new D(e => {
            U && U.isReady() ? bj(d, U, e, {
                bypassNetworkless: !0
            }, !0) : e()
        })
    }
}

function Ri(a, b = !1) {
    var c = "";
    if (a.dangerousLogToVisitorSession) c = "visitorOnlyApprovedKey";
    else if (a.cttAuthInfo) {
        if (b) {
            b = a.cttAuthInfo.token;
            c = a.cttAuthInfo;
            const d = new Ie;
            c.videoId ? d.setVideoId(c.videoId) : c.playlistId && ac(d, 2, He, c.playlistId);
            Ni[b] = d
        } else b = a.cttAuthInfo, c = {}, b.videoId ? c.videoId = b.videoId : b.playlistId && (c.playlistId = b.playlistId), Mi[a.cttAuthInfo.token] = c;
        c = a.cttAuthInfo.token
    }
    return c
}

function Xi(a = {}, b, c = !1, d) {
    new D((e, f) => {
        const g = Vi(c, d);
        cj(g.i);
        cj(g.h);
        g.h = 0;
        U && U.isReady() ? void 0 === d && P("enable_web_tiered_gel") ? (dj(e, f, a, b, c, 300), dj(e, f, a, b, c, 200)) : dj(e, f, a, b, c, d) : (Yi(c, d), e())
    })
}

function dj(a, b, c = {}, d, e = !1, f = 200) {
    var g = U,
        h = new Map;
    const k = new Map,
        l = {
            isJspb: e,
            cttAuthInfo: d,
            tier: f
        },
        m = {
            isJspb: e,
            cttAuthInfo: d
        };
    if (void 0 !== d) e ? (b = P("enable_web_tiered_gel") ? Pi().smartExtractMatchingEntries({
        keys: [l, m],
        sizeLimit: Ui()
    }) : Pi().extractMatchingEntries(m), h.set(d, b), bj(h, g, a, c)) : (h = P("enable_web_tiered_gel") ? Pi().smartExtractMatchingEntries({
        keys: [l, m],
        sizeLimit: Ui()
    }) : Pi().extractMatchingEntries(m), k.set(d, h), $i(k, g, a, b, c));
    else if (e) {
        for (const n of Object.keys(Oi)) b = P("enable_web_tiered_gel") ?
            Pi().smartExtractMatchingEntries({
                keys: [l, m],
                sizeLimit: Ui()
            }) : Pi().extractMatchingEntries({
                isJspb: !0,
                cttAuthInfo: n
            }), 0 < b.length && h.set(n, b), delete Oi[n];
        bj(h, g, a, c)
    } else {
        for (const n of Object.keys(Oi)) d = P("enable_web_tiered_gel") ? Pi().smartExtractMatchingEntries({
            keys: [{
                isJspb: !1,
                cttAuthInfo: n,
                tier: f
            }, {
                isJspb: !1,
                cttAuthInfo: n
            }],
            sizeLimit: Ui()
        }) : Pi().extractMatchingEntries({
            isJspb: !1,
            cttAuthInfo: n
        }), 0 < d.length && k.set(n, d), delete Oi[n];
        $i(k, g, a, b, c)
    }
}

function Yi(a = !1, b = 200) {
    const c = Vi(a, b);
    var d = c === Ji || c === Ii ? 5E3 : Di;
    P("web_gel_timeout_cap") && !c.h && (d = Wi(() => {
        Xi({
            writeThenSend: !0
        }, void 0, a, b)
    }, d), c.h = d);
    cj(c.i);
    d = N("LOGGING_BATCH_TIMEOUT", jf("web_gel_debounce_ms", 1E4));
    P("shorten_initial_gel_batch_timeout") && Li && (d = Ci);
    d = Wi(() => {
        Xi({
            writeThenSend: !0
        }, void 0, a, b)
    }, d);
    c.i = d
}

function $i(a, b, c, d, e = {}, f) {
    const g = Math.round(Q());
    let h = a.size;
    for (const [l, m] of a) {
        a = l;
        var k = m;
        const n = wa({
            context: Nh(b.config_ || Mh())
        });
        if (!ha(k) && !P("throw_err_when_logevent_malformed_killswitch")) {
            d();
            break
        }
        n.events = k;
        (k = Mi[a]) && ej(n, a, k);
        delete Mi[a];
        const v = "visitorOnlyApprovedKey" === a;
        fj(n, g, v);
        gj(e);
        const p = F => {
            P("update_log_event_config") && wf.h(() => q(function*() {
                yield hj(F)
            }));
            h--;
            h || c()
        };
        let z = 0;
        const H = () => {
            z++;
            if (e.bypassNetworkless && 1 === z) try {
                Xh(b, n, ij({
                    writeThenSend: !0
                }, v, p, H, f)), Li = !1
            } catch (F) {
                ff(F), d()
            }
            h--;
            h || c()
        };
        try {
            Xh(b, n, ij(e, v, p, H, f)), Li = !1
        } catch (F) {
            ff(F), d()
        }
    }
}

function bj(a, b, c, d = {}, e) {
    const f = Math.round(Q());
    let g = a.size;
    var h = new Map([...a]);
    for (const [m] of h) {
        var k = m,
            l = a.get(k);
        h = new Je;
        const n = Rh(b.config_ || Mh());
        B(h, ee, 1, n);
        l = l ? jj(l) : [];
        for (const v of l) ic(h, 3, J, v);
        (l = Ni[k]) && kj(h, k, l);
        delete Ni[k];
        k = "visitorOnlyApprovedKey" === k;
        lj(h, f, k);
        gj(d);
        l = {
            startTime: Q(),
            ticks: {},
            infos: {}
        };
        h = uc(h);
        l.ticks.geljspc = Q();
        P("log_jspb_serialize_latency") && .001 > Math.random() && Bf("meta_logging_csi_event", {
            timerName: "gel_jspb_serialize",
            hc: l
        });
        k = ij(d, k, v => {
            P("update_log_event_config") &&
                wf.h(() => q(function*() {
                    yield hj(v)
                }));
            g--;
            g || c()
        }, () => {
            g--;
            g || c()
        }, e);
        k.headers["Content-Type"] = "application/json+protobuf";
        k.postBodyFormat = "JSPB";
        k.postBody = h;
        Xh(b, "", k);
        Li = !1
    }
}

function gj(a) {
    P("always_send_and_write") && (a.writeThenSend = !1)
}

function ij(a, b, c, d, e) {
    a = {
        retry: !0,
        onSuccess: c,
        onError: d,
        Tb: a,
        dangerousLogToVisitorSession: b,
        Lb: !!e,
        headers: {},
        postBodyFormat: "",
        postBody: "",
        compress: P("compress_gel") || P("compress_gel_lr")
    };
    mj() && (a.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(Q())));
    return a
}

function fj(a, b, c) {
    mj() || (a.requestTimeMs = String(b));
    P("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
    !c && (b = N("EVENT_ID")) && (c = nj(), a.serializedClientEventId = {
        serializedEventId: b,
        clientCounter: String(c)
    })
}

function lj(a, b, c) {
    mj() || A(a, 2, b);
    if (!c && (b = N("EVENT_ID"))) {
        c = nj();
        const d = new Ge;
        A(d, 1, b);
        A(d, 2, c);
        B(a, Ge, 5, d)
    }
}

function nj() {
    let a = N("BATCH_CLIENT_COUNTER") || 0;
    a || (a = Math.floor(Math.random() * Ei / 2));
    a++;
    a > Ei && (a = 1);
    M("BATCH_CLIENT_COUNTER", a);
    return a
}

function ej(a, b, c) {
    let d;
    if (c.videoId) d = "VIDEO";
    else if (c.playlistId) d = "PLAYLIST";
    else return;
    a.credentialTransferTokenTargetId = c;
    a.context = a.context || {};
    a.context.user = a.context.user || {};
    a.context.user.credentialTransferTokens = [{
        token: b,
        scope: d
    }]
}

function kj(a, b, c) {
    var d = 1 === bc(c, He) ? 1 : -1;
    if (y(c, d)) d = 1;
    else if (c.getPlaylistId()) d = 2;
    else return;
    B(a, Ie, 4, c);
    a = cc(a, ee, 1) || new ee;
    c = cc(a, de, 3) || new de;
    const e = new ce;
    A(e, 2, b);
    A(e, 1, d);
    ic(c, 12, ce, e);
    B(a, de, 3, c)
}

function jj(a) {
    const b = [];
    for (let c = 0; c < a.length; c++) try {
        b.push(new J(a[c]))
    } catch (d) {
        ff(new K("Transport failed to deserialize " + String(a[c])))
    }
    return b
}

function mj() {
    return P("use_request_time_ms_header") || P("lr_use_request_time_ms_header")
}

function Wi(a, b) {
    return P("transport_use_scheduler") ? sf(a, b) : rf(a, b)
}

function cj(a) {
    P("transport_use_scheduler") ? wf.i(a) : window.clearTimeout(a)
}

function hj(a) {
    return q(function*() {
        var b, c = null == a ? void 0 : null == (b = a.responseContext) ? void 0 : b.globalConfigGroup;
        b = mf(c, Rd);
        const d = null == c ? void 0 : c.hotHashData,
            e = mf(c, Qd);
        c = null == c ? void 0 : c.coldHashData;
        var f = xi();
        if (f = f.resolve.call(f, new pi)) d && (b ? yield Ih(f, d, b): yield Ih(f, d)), c && (e ? yield Jh(f, c, e): yield Jh(f, c))
    })
}

function Vi(a, b = 200) {
    return a ? 300 === b ? Ji : Hi : 300 === b ? Ii : Gi
}

function Ui() {
    return jf("tvhtml5_logging_max_batch_ads_fork") || jf("web_logging_max_batch") || 100
};
const oj = r.ytLoggingGelSequenceIdObj_ || {};

function pj(a, b, c, d = {}) {
    const e = {},
        f = Math.round(d.timestamp || Q());
    e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
    e[a] = b;
    P("enable_unknown_lact_fix_on_html5") && ji();
    a = mi();
    e.context = {
        lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
    };
    P("log_sequence_info_on_gel_web") && d.sequenceGroup && (a = e.context, b = d.sequenceGroup, b = {
        index: qj(b),
        groupKey: b
    }, a.sequence = b, d.endOfSequence && delete oj[d.sequenceGroup]);
    (d.sendIsolatedPayload ? Zi : Qi)({
            endpoint: "log_event",
            payload: e,
            cttAuthInfo: d.cttAuthInfo,
            dangerousLogToVisitorSession: d.dangerousLogToVisitorSession
        },
        c)
}

function rj(a = !1) {
    Xi(void 0, void 0, a)
}

function qj(a) {
    oj[a] = a in oj ? oj[a] + 1 : 0;
    return oj[a]
};
let sj = Yh,
    tj = [];

function V(a, b, c = {}) {
    let d = sj;
    N("ytLoggingEventsDefaultDisabled", !1) && sj === Yh && (d = null);
    P("web_all_payloads_via_jspb") && !c.timestamp && (c.timestamp = Q());
    pj(a, b, d, c)
};
const uj = r.ytLoggingGelSequenceIdObj_ || {};

function vj(a, b, c = {}) {
    var d = Math.round(c.timestamp || Q());
    A(a, 1, d < Number.MAX_SAFE_INTEGER ? d : 0);
    var e = mi();
    d = new De;
    A(d, 1, c.timestamp || !isFinite(e) ? -1 : e);
    if (P("log_sequence_info_on_gel_web") && c.sequenceGroup) {
        e = c.sequenceGroup;
        const f = qj(e),
            g = new Ce;
        A(g, 2, f);
        A(g, 1, e);
        B(d, Ce, 3, g);
        c.endOfSequence && delete uj[c.sequenceGroup]
    }
    B(a, De, 33, d);
    (c.sendIsolatedPayload ? aj : Ti)({
        endpoint: "log_event",
        payload: a,
        cttAuthInfo: c.cttAuthInfo,
        dangerousLogToVisitorSession: c.dangerousLogToVisitorSession
    }, b)
};

function wj(a, b = {}) {
    let c = !1;
    N("ytLoggingEventsDefaultDisabled", !1) && (c = !0);
    vj(a, c ? null : Yh, b)
};

function xj(a, b, c) {
    const d = P("jspb_sparse_encoded_pivot") ? new J([{}]) : new J;
    hc(d, Ae, 72, Ee, a);
    c ? vj(d, c, b) : wj(d, b)
}

function yj(a, b, c) {
    const d = P("jspb_sparse_encoded_pivot") ? new J([{}]) : new J;
    hc(d, ze, 73, Ee, a);
    c ? vj(d, c, b) : wj(d, b)
}

function zj(a, b, c) {
    const d = P("jspb_sparse_encoded_pivot") ? new J([{}]) : new J;
    hc(d, ye, 78, Ee, a);
    c ? vj(d, c, b) : wj(d, b)
}

function Aj(a, b, c) {
    const d = P("jspb_sparse_encoded_pivot") ? new J([{}]) : new J;
    hc(d, Be, 208, Ee, a);
    c ? vj(d, c, b) : wj(d, b)
}

function Bj(a, b, c) {
    const d = P("jspb_sparse_encoded_pivot") ? new J([{}]) : new J;
    hc(d, ve, 156, Ee, a);
    c ? vj(d, c, b) : wj(d, b)
}

function Cj(a, b, c) {
    const d = P("jspb_sparse_encoded_pivot") ? new J([{}]) : new J;
    hc(d, xe, 215, Ee, a);
    c ? vj(d, c, b) : wj(d, b)
};
var Dj = new Set,
    Ej = 0,
    Fj = 0,
    Gj = 0,
    Hj = [];
const Ij = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];

function Jj(a) {
    W(a)
}

function Kj(a) {
    W(a, "WARNING")
}

function W(a, b = "ERROR") {
    var c = {};
    c.name = N("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
    c.version = N("INNERTUBE_CONTEXT_CLIENT_VERSION");
    Lj(a, c, b)
}

function Lj(a, b, c = "ERROR") {
    if (a) {
        a.hasOwnProperty("level") && a.level && (c = a.level);
        if (P("console_log_js_exceptions")) {
            var d = [];
            d.push(`Name: ${a.name}`);
            d.push(`Message: ${a.message}`);
            a.hasOwnProperty("params") && d.push(`Error Params: ${JSON.stringify(a.params)}`);
            a.hasOwnProperty("args") && d.push(`Error args: ${JSON.stringify(a.args)}`);
            d.push(`File name: ${a.fileName}`);
            d.push(`Stacktrace: ${a.stack}`);
            window.console.log(d.join("\n"), a)
        }
        if (!(5 <= Ej)) {
            d = Hj;
            var e = Qc(a);
            const n = e.message || "Unknown Error",
                v = e.name || "UnknownError";
            var f = e.stack || a.i || "Not available";
            if (f.startsWith(`${v}: ${n}`)) {
                var g = f.split("\n");
                g.shift();
                f = g.join("\n")
            }
            g = e.lineNumber || "Not available";
            e = e.fileName || "Not available";
            let p = 0;
            if (a.hasOwnProperty("args") && a.args && a.args.length)
                for (var h = 0; h < a.args.length && !(p = hg(a.args[h], `params.${h}`, b, p), 500 <= p); h++);
            else if (a.hasOwnProperty("params") && a.params) {
                const z = a.params;
                if ("object" === typeof a.params)
                    for (h in z) {
                        if (!z[h]) continue;
                        const H = `params.${h}`,
                            F = jg(z[h]);
                        b[H] = F;
                        p +=
                            H.length + F.length;
                        if (500 < p) break
                    } else b.params = jg(z)
            }
            if (d.length)
                for (h = 0; h < d.length && !(p = hg(d[h], `params.context.${h}`, b, p), 500 <= p); h++);
            navigator.vendor && !b.hasOwnProperty("vendor") && (b["device.vendor"] = navigator.vendor);
            b = {
                message: n,
                name: v,
                lineNumber: g,
                fileName: e,
                stack: f,
                params: b,
                sampleWeight: 1
            };
            d = Number(a.columnNumber);
            isNaN(d) || (b.lineNumber = `${b.lineNumber}:${d}`);
            if ("IGNORED" === a.level) var k = 0;
            else a: {
                a = ag();d = b;
                for (k of a.K)
                    if (d.message && d.message.match(k.Qa)) {
                        k = k.weight;
                        break a
                    }
                for (var l of a.H)
                    if (l.callback(d)) {
                        k =
                            l.weight;
                        break a
                    }
                k = 1
            }
            b.sampleWeight = k;
            k = b;
            for (var m of Yf)
                if (m.ca[k.name]) {
                    l = m.ca[k.name];
                    for (const z of l)
                        if (l = k.message.match(z.B)) {
                            k.params["params.error.original"] = l[0];
                            a = z.groups;
                            b = {};
                            for (d = 0; d < a.length; d++) b[a[d]] = l[d + 1], k.params[`params.error.${a[d]}`] = l[d + 1];
                            k.message = m.ja(b);
                            break
                        }
                }
            k.params || (k.params = {});
            m = ag();
            k.params["params.errorServiceSignature"] = `msg=${m.K.length}&cb=${m.H.length}`;
            k.params["params.serviceWorker"] = "true";
            r.document && r.document.querySelectorAll && (k.params["params.fscripts"] =
                String(document.querySelectorAll("script:not([nonce])").length));
            Aa("sample").constructor !== za && (k.params["params.fconst"] = "true");
            window.yterr && "function" === typeof window.yterr && window.yterr(k);
            0 === k.sampleWeight || Dj.has(k.message) || Mj(k, c)
        }
    }
}

function Mj(a, b = "ERROR") {
    if ("ERROR" === b) {
        eg.u("handleError", a);
        if (P("record_app_crashed_web") && 0 === Gj && 1 === a.sampleWeight)
            if (Gj++, P("errors_via_jspb")) {
                var c = new oe;
                c = A(c, 1, 1);
                if (!P("report_client_error_with_app_crash_ks")) {
                    var d = new ne;
                    var e = new me;
                    var f = new le;
                    var g = new ke;
                    g = A(g, 1, a.message);
                    f = B(f, ke, 3, g);
                    e = B(e, le, 5, f);
                    d = B(d, me, 9, e);
                    B(c, ne, 4, d)
                }
                d = P("jspb_sparse_encoded_pivot") ? new J([{}]) : new J;
                hc(d, oe, 20, Ee, c);
                wj(d)
            } else c = {
                    appCrashType: "APP_CRASH_TYPE_BREAKPAD"
                }, P("report_client_error_with_app_crash_ks") ||
                (c.systemHealth = {
                    crashData: {
                        clientError: {
                            logMessage: {
                                message: a.message
                            }
                        }
                    }
                }), V("appCrashed", c);
        Fj++
    } else "WARNING" === b && eg.u("handleWarning", a);
    a: {
        if (P("errors_via_jspb")) {
            if (Nj()) var h = void 0;
            else {
                c = new he;
                A(c, 1, a.stack);
                a.fileName && A(c, 4, a.fileName);
                var k = a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
                0 !== k.length && (1 !== k.length || isNaN(Number(k[0])) ? 2 !== k.length || isNaN(Number(k[0])) || isNaN(Number(k[1])) || (A(c, 2, Number(k[0])), A(c, 3, Number(k[1]))) : A(c, 2, Number(k[0])));
                k = new ke;
                A(k, 1, a.message);
                A(k, 3, a.name);
                A(k, 6, a.sampleWeight);
                "ERROR" === b ? A(k, 2, 2) : "WARNING" === b ? A(k, 2, 1) : A(k, 2, 0);
                var l = new ie;
                A(l, 1, !0);
                hc(l, he, 3, je, c);
                c = new ge;
                A(c, 3, window.location.href);
                d = N("FEXP_EXPERIMENTS", []);
                for (g = 0; g < d.length; g++) e = c, f = d[g], Ub(e), $b(e, 5, 2, !1, !1).push(f);
                d = bf();
                if (!cf() && d)
                    for (var m of Object.keys(d)) e = new fe, A(e, 1, m), A(e, 2, String(d[m])), ic(c, 4, fe, e);
                if (m = a.params)
                    for (h of Object.keys(m)) d = new fe, A(d, 1, `client.${h}`), A(d, 2, String(m[h])), ic(c, 4, fe, d);
                m = N("SERVER_NAME");
                h = N("SERVER_VERSION");
                m && h &&
                    (d = new fe, A(d, 1, "server.name"), A(d, 2, m), ic(c, 4, fe, d), m = new fe, A(m, 1, "server.version"), A(m, 2, h), ic(c, 4, fe, m));
                h = new le;
                B(h, ge, 1, c);
                B(h, ie, 2, l);
                B(h, ke, 3, k)
            }
            if (!h) break a;
            m = P("jspb_sparse_encoded_pivot") ? new J([{}]) : new J;
            hc(m, le, 163, Ee, h);
            wj(m)
        } else {
            if (Nj()) h = void 0;
            else {
                m = {
                    stackTrace: a.stack
                };
                a.fileName && (m.filename = a.fileName);
                h = a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
                0 !== h.length && (1 !== h.length || isNaN(Number(h[0])) ? 2 !== h.length || isNaN(Number(h[0])) || isNaN(Number(h[1])) || (m.lineNumber =
                    Number(h[0]), m.columnNumber = Number(h[1])) : m.lineNumber = Number(h[0]));
                h = {
                    level: "ERROR_LEVEL_UNKNOWN",
                    message: a.message,
                    errorClassName: a.name,
                    sampleWeight: a.sampleWeight
                };
                "ERROR" === b ? h.level = "ERROR_LEVEL_ERROR" : "WARNING" === b && (h.level = "ERROR_LEVEL_WARNNING");
                m = {
                    isObfuscated: !0,
                    browserStackInfo: m
                };
                c = {
                    pageUrl: window.location.href,
                    kvPairs: []
                };
                N("FEXP_EXPERIMENTS") && (c.experimentIds = N("FEXP_EXPERIMENTS"));
                d = bf();
                if (!cf() && d)
                    for (l of Object.keys(d)) c.kvPairs.push({
                        key: l,
                        value: String(d[l])
                    });
                if (l = a.params)
                    for (k of Object.keys(l)) c.kvPairs.push({
                        key: `client.${k}`,
                        value: String(l[k])
                    });
                k = N("SERVER_NAME");
                l = N("SERVER_VERSION");
                k && l && (c.kvPairs.push({
                    key: "server.name",
                    value: k
                }), c.kvPairs.push({
                    key: "server.version",
                    value: l
                }));
                h = {
                    errorMetadata: c,
                    stackTrace: m,
                    logMessage: h
                }
            }
            if (!h) break a;
            V("clientError", h)
        }
        if ("ERROR" === b || P("errors_flush_gel_always_killswitch")) b: {
            if (P("web_fp_via_jspb")) {
                b = tj;
                tj = [];
                if (b)
                    for (const n of b) pj(n.S, n.payload, sj, n.options);
                rj(!0);
                if (!P("web_fp_via_jspb_and_json")) break b
            }
            rj()
        }
    }
    try {
        Dj.add(a.message)
    } catch (n) {}
    Ej++
}

function Nj() {
    for (const a of Ij) {
        const b = Ga();
        if (b && 0 <= b.toLowerCase().indexOf(a.toLowerCase())) return !0
    }
    return !1
}

function Oj(a, ...b) {
    a.args || (a.args = []);
    a.args.push(...b)
};
t("ytLoggingLatencyUsageStats_", r.ytLoggingLatencyUsageStats_ || {});
const Pj = window;
class Qj {
    constructor() {
        this.timing = {};
        this.clearResourceTimings = () => {};
        this.webkitClearResourceTimings = () => {};
        this.mozClearResourceTimings = () => {};
        this.msClearResourceTimings = () => {};
        this.oClearResourceTimings = () => {}
    }
}
var Rj = Pj.performance || Pj.mozPerformance || Pj.msPerformance || Pj.webkitPerformance || new Qj;
let Sj = r.ytLoggingDocDocumentNonce_;
if (!Sj) {
    const a = Kf(),
        b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] & 63));
    Sj = b.join("")
}
var Tj = Sj;
var Uj = {
    fb: 0,
    cb: 1,
    eb: 2,
    Bb: 3,
    gb: 4,
    Gb: 5,
    Cb: 6,
    Fb: 7,
    Db: 8,
    Eb: 9,
    0: "DEFAULT",
    1: "CHAT",
    2: "CONVERSATIONS",
    3: "MINIPLAYER",
    4: "DIALOG",
    5: "VOZ",
    6: "MUSIC_WATCH_TABS",
    7: "SHARE",
    8: "PUSH_NOTIFICATIONS",
    9: "RICH_GRID_WATCH"
};
let Vj = 1;

function Wj(a) {
    return new Xj({
        trackingParams: a
    })
}

function Yj(a) {
    const b = Vj++;
    return new Xj({
        veType: a,
        veCounter: b,
        elementIndex: void 0,
        dataElement: void 0,
        youtubeData: void 0,
        jspbYoutubeData: void 0
    })
}
var Xj = class {
    constructor(a) {
        this.h = a
    }
    getAsJson() {
        const a = {};
        void 0 !== this.h.trackingParams ? a.trackingParams = this.h.trackingParams : (a.veType = this.h.veType, void 0 !== this.h.veCounter && (a.veCounter = this.h.veCounter), void 0 !== this.h.elementIndex && (a.elementIndex = this.h.elementIndex));
        void 0 !== this.h.dataElement && (a.dataElement = this.h.dataElement.getAsJson());
        void 0 !== this.h.youtubeData && (a.youtubeData = this.h.youtubeData);
        this.h.isCounterfactual && (a.isCounterfactual = !0);
        return a
    }
    getAsJspb() {
        const a = new I;
        if (void 0 !== this.h.trackingParams) {
            var b = this.h.trackingParams;
            if (null != b)
                if ("string" === typeof b) b = b ? new ub(b, qb) : tb();
                else if (b.constructor !== ub)
                if (ob(b)) b = b.length ? new ub(new Uint8Array(b), qb) : tb();
                else throw Error();
            A(a, 1, b)
        } else void 0 !== this.h.veType && A(a, 2, this.h.veType), void 0 !== this.h.veCounter && A(a, 6, this.h.veCounter), void 0 !== this.h.elementIndex && A(a, 3, this.h.elementIndex), this.h.isCounterfactual && A(a, 5, !0);
        void 0 !== this.h.dataElement && (b = this.h.dataElement.getAsJspb(), B(a, I, 7, b));
        void 0 !==
            this.h.youtubeData && B(a, Vd, 8, this.h.jspbYoutubeData);
        return a
    }
    toString() {
        return JSON.stringify(this.getAsJson())
    }
    isClientVe() {
        return !this.h.trackingParams && !!this.h.veType
    }
};

function Zj(a = 0) {
    return 0 === a ? "client-screen-nonce" : `${"client-screen-nonce"}.${a}`
}

function ak(a = 0) {
    return P("new_csn_storage_design") ? N("client-screen-nonce-store", {})[a] : N(Zj(a))
}

function bk(a, b = 0) {
    if (P("new_csn_storage_design")) {
        let c = N("client-screen-nonce-store");
        c || (c = {}, M("client-screen-nonce-store", c));
        c[b] = a
    }
    M(Zj(b), a)
}

function ck(a = 0) {
    return 0 === a ? "ROOT_VE_TYPE" : `${"ROOT_VE_TYPE"}.${a}`
}

function dk(a = 0) {
    return N(ck(a))
}

function ek(a = 0) {
    return (a = dk(a)) ? new Xj({
        veType: a,
        youtubeData: void 0,
        jspbYoutubeData: void 0
    }) : null
}

function fk() {
    let a = N("csn-to-ctt-auth-info");
    a || (a = {}, M("csn-to-ctt-auth-info", a));
    return a
}

function gk() {
    return Object.values(N("client-screen-nonce-store", {})).filter(a => void 0 !== a)
}

function X(a = 0) {
    a = ak(a);
    if (!a && !N("USE_CSN_FALLBACK", !0)) return null;
    a || (a = "UNDEFINED_CSN");
    return a ? a : null
}

function hk(a) {
    for (const b of Object.values(Uj))
        if (X(b) === a) return !0;
    return !1
}

function ik(a, b, c) {
    const d = fk();
    (c = X(c)) && delete d[c];
    b && (d[a] = b)
}

function jk(a) {
    return fk()[a]
}

function kk(a, b, c = 0, d) {
    if (a !== ak(c) || b !== N(ck(c)))
        if (ik(a, d, c), bk(a, c), M(ck(c), b), b = () => {
                setTimeout(() => {
                    if (a)
                        if (P("web_time_via_jspb")) {
                            var e = new pe;
                            A(e, 1, Tj);
                            A(e, 2, a);
                            const f = P("jspb_sparse_encoded_pivot") ? new J([{}]) : new J;
                            hc(f, pe, 111, Ee, e);
                            wj(f)
                        } else V("foregroundHeartbeatScreenAssociated", {
                            clientDocumentNonce: Tj,
                            clientScreenNonce: a
                        })
                }, 0)
            }, "requestAnimationFrame" in window) try {
            window.requestAnimationFrame(b)
        } catch (e) {
            b()
        } else b()
};
la(Rj.clearResourceTimings || Rj.webkitClearResourceTimings || Rj.mozClearResourceTimings || Rj.msClearResourceTimings || Rj.oClearResourceTimings || oa, Rj);

function lk(a = !0) {
    a = a ? Kf() : Jf();
    const b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] & 63));
    return b.join("")
};
class qf extends of {
    constructor(a) {
        super(arguments);
        this.csn = a
    }
}
const Ef = new pf,
    mk = [];
let ok = nk,
    pk = 0;

function qk(a, b, c, d, e, f, g, h) {
    const k = ok(),
        l = new Xj({
            veType: b,
            youtubeData: f,
            jspbYoutubeData: void 0
        });
    f = {
        sequenceGroup: k
    };
    e && (f.cttAuthInfo = e);
    var m = () => {
        Kj(new K("newScreen() parent element does not have a VE - rootVe", b))
    };
    if (P("il_via_jspb")) {
        e = ue((new ve).h(k), l.getAsJspb());
        c && c.visualElement ? (m = new te, c.clientScreenNonce && A(m, 2, c.clientScreenNonce), se(m, c.visualElement.getAsJspb()), g && A(m, 4, Fe[g]), B(e, te, 5, m)) : c && m();
        d && A(e, 3, d);
        if (P("expectation_logging") && h && h.screenCreatedLoggingExpectations) {
            c = new Ud;
            h = h.screenCreatedLoggingExpectations.expectedParentScreens || [];
            for (var n of h) n.screenVeType && (h = Sd(new Td, n.screenVeType), ic(c, 1, Td, h));
            B(e, Ud, 7, c)
        }
        Bj(e, f, a)
    } else n = {
            csn: k,
            pageVe: l.getAsJson()
        }, P("expectation_logging") &&
        h && h.screenCreatedLoggingExpectations && (n.screenCreatedLoggingExpectations = h.screenCreatedLoggingExpectations), c && c.visualElement ? (n.implicitGesture = {
            parentCsn: c.clientScreenNonce,
            gesturedVe: c.visualElement.getAsJson()
        }, g && (n.implicitGesture.gestureType = g)) : c && m(), d && (n.cloneCsn = d), a ? pj("screenCreated", n, a, f) : V("screenCreated", n, f);
    Bf(Ef, new qf(k));
    return k
}

function rk(a, b, c, d) {
    const e = d.filter(g => {
            g.csn !== b ? (g.csn = b, g = !0) : g = !1;
            return g
        }),
        f = {
            cttAuthInfo: jk(b) || void 0,
            sequenceGroup: b
        };
    for (const g of d) d = g.getAsJson(), (va(d) || !d.trackingParams && !d.veType) && Kj(Error("Child VE logged with no data"));
    if (P("il_via_jspb")) {
        const g = we((new xe).h(b), c.getAsJspb());
        qa(e, h => {
            h = h.getAsJspb();
            ic(g, 3, I, h)
        });
        "UNDEFINED_CSN" === b ? Y("visualElementAttached", f, void 0, g) : Cj(g, f, a)
    } else c = {
        csn: b,
        parentVe: c.getAsJson(),
        childVes: qa(e, g => g.getAsJson())
    }, "UNDEFINED_CSN" === b ? Y("visualElementAttached", f, c) : a ? pj("visualElementAttached", c, a, f) : V("visualElementAttached", c, f)
}

function sk(a, b, c, d, e, f) {
    tk(a, b, c, e, f)
}

function tk(a, b, c, d, e) {
    const f = {
        cttAuthInfo: jk(b) || void 0,
        sequenceGroup: b
    };
    P("il_via_jspb") ? (d = (new Ae).h(b), c = c.getAsJspb(), c = B(d, I, 2, c), c = A(c, 4, 1), e && B(c, re, 3, e), "UNDEFINED_CSN" === b ? Y("visualElementShown", f, void 0, c) : xj(c, f, a)) : (e = {
        csn: b,
        ve: c.getAsJson(),
        eventType: 1
    }, d && (e.clientData = d), "UNDEFINED_CSN" === b ? Y("visualElementShown", f, e) : a ? pj("visualElementShown", e, a, f) : V("visualElementShown", e, f))
}

function uk(a, b, c, d = !1) {
    var e = d ? 16 : 8;
    const f = {
        cttAuthInfo: jk(b) || void 0,
        sequenceGroup: b,
        endOfSequence: d
    };
    P("il_via_jspb") ? (e = (new ze).h(b), c = c.getAsJspb(), c = B(e, I, 2, c), A(c, 4, d ? 16 : 8), "UNDEFINED_CSN" === b ? Y("visualElementHidden", f, void 0, c) : yj(c, f, a)) : (d = {
        csn: b,
        ve: c.getAsJson(),
        eventType: e
    }, "UNDEFINED_CSN" === b ? Y("visualElementHidden", f, d) : a ? pj("visualElementHidden", d, a, f) : V("visualElementHidden", d, f))
}

function vk(a, b, c, d) {
    const e = {
        cttAuthInfo: jk(b) || void 0,
        sequenceGroup: b
    };
    P("il_via_jspb") ? (d = (new ye).h(b), c = c.getAsJspb(), c = B(d, I, 2, c), A(c, 4, Fe.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK), "UNDEFINED_CSN" === b ? Y("visualElementGestured", e, void 0, c) : zj(c, e, a)) : (c = {
        csn: b,
        ve: c.getAsJson(),
        gestureType: "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"
    }, d && (c.clientData = d), "UNDEFINED_CSN" === b ? Y("visualElementGestured", e, c) : a ? pj("visualElementGestured", c, a, e) : V("visualElementGestured", c, e))
}

function wk(a, b, c, d) {
    const e = {
        cttAuthInfo: jk(b) || void 0,
        sequenceGroup: b
    };
    P("il_via_jspb") ? (d = new Be, d.h(b), c = c.getAsJspb(), B(d, I, 2, c), "UNDEFINED_CSN" === b ? Y("visualElementStateChanged", e, void 0, d) : Aj(d, e, a)) : (c = {
        csn: b,
        ve: c.getAsJson(),
        clientData: d
    }, "UNDEFINED_CSN" === b ? Y("visualElementStateChanged", e, c) : a ? pj("visualElementStateChanged", c, a, e) : V("visualElementStateChanged", c, e))
}

function nk() {
    if (P("enable_web_96_bit_csn")) var a = lk();
    else if (P("enable_web_96_bit_csn_no_crypto")) a = lk(!1);
    else {
        a = Math.random() + "";
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        a = db(b, 3)
    }
    return a
}

function Y(a, b, c, d) {
    mk.push({
        S: a,
        payload: c,
        M: d,
        options: b
    });
    pk || (pk = Ff())
}

function Gf(a) {
    if (mk) {
        for (const b of mk)
            if (P("il_via_jspb") && b.M) switch (b.M.h(a.csn), b.S) {
                case "screenCreated":
                    Bj(b.M, b.options);
                    break;
                case "visualElementAttached":
                    Cj(b.M, b.options);
                    break;
                case "visualElementShown":
                    xj(b.M, b.options);
                    break;
                case "visualElementHidden":
                    yj(b.M, b.options);
                    break;
                case "visualElementGestured":
                    zj(b.M, b.options);
                    break;
                case "visualElementStateChanged":
                    Aj(b.M, b.options);
                    break;
                default:
                    Kj(new K("flushQueue unable to map payloadName to JSPB setter"))
            } else b.payload && (b.payload.csn =
                a.csn, V(b.S, b.payload, b.options));
        mk.length = 0
    }
    pk = 0
};

function xk(a, b) {
    O(sk)(void 0, a, b, void 0, void 0, void 0)
};

function Z() {
    yk.h || (yk.h = new yk);
    return yk.h
}

function zk(a, b, c) {
    const d = X(c);
    return null === a.csn || d === a.csn || c ? d : (a = new K("VisibilityLogger called before newScreen", {
        caller: b.tagName,
        previous_csn: a.csn,
        current_csn: d
    }), Kj(a), null)
}

function Ak(a) {
    return Math.floor(Number(a.data && a.data.loggingDirectives && a.data.loggingDirectives.visibility && a.data.loggingDirectives.visibility.types || "")) || 1
}
var yk = class {
    constructor() {
        this.m = new Set;
        this.j = new Set;
        this.h = new Map;
        this.client = void 0;
        this.csn = null
    }
    l(a) {
        this.client = a
    }
    s() {
        this.clear();
        this.csn = X()
    }
    clear() {
        this.m.clear();
        this.j.clear();
        this.h.clear();
        this.csn = null
    }
    u(a, b, c) {
        b = this.i(a);
        var d = a.visualElement ? a.visualElement : b,
            e = this.m.has(d),
            f = this.h.get(d);
        this.m.add(d);
        this.h.set(d, !0);
        a.impressionLog && !e && a.impressionLog();
        if (b || a.visualElement)
            if (c = zk(this, a, c)) {
                var g = !(!a.data || !a.data.loggingDirectives);
                if (Ak(a) || g) {
                    d = a.visualElement ? a.visualElement :
                        Wj(b);
                    var h = a.interactionLoggingClientData;
                    b = a.interactionLoggingClientDataJspbType;
                    g || e ? Ak(a) & 4 ? f || (a = this.client, e = {
                        cttAuthInfo: jk(c) || void 0,
                        sequenceGroup: c
                    }, P("il_via_jspb") ? (f = (new Ae).h(c), d = d.getAsJspb(), f = B(f, I, 2, d), f = A(f, 4, 4), b && B(f, re, 3, b), "UNDEFINED_CSN" === c ? Y("visualElementShown", e, void 0, f) : xj(f, e, a)) : (b = {
                        csn: c,
                        ve: d.getAsJson(),
                        eventType: 4
                    }, h && (b.clientData = h), "UNDEFINED_CSN" === c ? Y("visualElementShown", e, b) : a ? pj("visualElementShown", b, a, e) : V("visualElementShown", b, e))) : Ak(a) & 1 && !e && tk(this.client,
                        c, d, h, b) : tk(this.client, c, d, h, b)
                }
            }
    }
    o(a, b, c) {
        var d = this.i(a),
            e = a.visualElement ? a.visualElement : d;
        b = this.j.has(e);
        const f = this.h.get(e);
        this.j.add(e);
        this.h.set(e, !1);
        if (!1 === f) return !0;
        if (!d && !a.visualElement) return !1;
        c = zk(this, a, c);
        if (!c || !Ak(a) && a.data && a.data.loggingDirectives) return !1;
        d = a.visualElement ? a.visualElement : Wj(d);
        Ak(a) & 8 ? uk(this.client, c, d) : Ak(a) & 2 && !b && (a = this.client, b = {
            cttAuthInfo: jk(c) || void 0,
            sequenceGroup: c
        }, P("il_via_jspb") ? (e = (new ze).h(c), d = d.getAsJspb(), d = B(e, I, 2, d), d = A(d, 4,
            2), "UNDEFINED_CSN" === c ? Y("visualElementHidden", b, void 0, d) : yj(d, b, a)) : (d = {
            csn: c,
            ve: d.getAsJson(),
            eventType: 2
        }, "UNDEFINED_CSN" === c ? Y("visualElementHidden", b, d) : a ? pj("visualElementHidden", d, a, b) : V("visualElementHidden", d, b)));
        return !0
    }
    i(a) {
        let b, c, d;
        return P("il_use_view_model_logging_context") && (null == (b = a.data) ? 0 : null == (c = b.context) ? 0 : null == (d = c.loggingContext) ? 0 : d.loggingDirectives) ? a.data.context.loggingContext.loggingDirectives.trackingParams || "" : a.data && a.data.loggingDirectives ? a.data.loggingDirectives.trackingParams ||
            "" : a.veContainer && a.veContainer.trackingParams ? a.veContainer.trackingParams : a.data && a.data.trackingParams || ""
    }
};

function Bk() {
    Ck.h || (Ck.h = new Ck);
    return Ck.h
}

function Dk() {
    Bk();
    O(Z().s).bind(Z())()
}

function Ek(a, b) {
    O(Z().u).bind(Z())(b, void 0, 8)
}

function Fk(a, b) {
    return O(Z().i).bind(Z())(b)
}
var Ck = class {
    l(a) {
        O(Z().l).bind(Z())(a)
    }
    clear() {
        O(Z().clear).bind(Z())()
    }
};

function Gk(a, b, c, d = {}) {
    a.j.add(d.layer || 0);
    a.s = () => {
        Hk(a, b, c, d);
        const e = ek(d.layer);
        if (e) {
            for (const f of a.C) a.h(f[0], f[1] || e, d.layer);
            for (const f of a.D) Ik(a, f[0], f[1])
        }
    };
    c || X(d.layer) || a.s();
    if (d.Y)
        for (const e of d.Y) a.U(e, d.layer);
    else W(Error("Delayed screen needs a data promise."))
}

function Hk(a, b, c, d = {}) {
    var e = void 0;
    d.layer || (d.layer = 0);
    e = void 0 !== d.la ? d.la : d.layer;
    const f = X(e);
    e = ek(e);
    var g = c || e;
    let h;
    g && (void 0 !== d.parentCsn ? h = {
        clientScreenNonce: d.parentCsn,
        visualElement: g
    } : f && "UNDEFINED_CSN" !== f && (h = {
        clientScreenNonce: f,
        visualElement: g
    }));
    let k;
    g = N("EVENT_ID");
    "UNDEFINED_CSN" === f && g && (k = {
        servletData: {
            serializedServletEventId: g
        }
    });
    P("combine_ve_grafts") && f && Jk(a, f);
    let l;
    try {
        l = qk(a.client, b, h, d.X, d.cttAuthInfo, k, d.Ka, d.loggingExpectations)
    } catch (v) {
        Oj(v, {
            Va: b,
            rootVe: e,
            Sa: c,
            Ga: f,
            Ra: h,
            X: d.X
        });
        W(v);
        return
    }
    kk(l, b, d.layer, d.cttAuthInfo);
    f && "UNDEFINED_CSN" !== f && e && !hk(f) && uk(a.client, f, e, !0);
    a.i[a.i.length - 1] && !a.i[a.i.length - 1].csn && (a.i[a.i.length - 1].csn = l || "");
    Dk();
    const m = ek(d.layer);
    f && "UNDEFINED_CSN" !== f && m && (P("web_mark_root_visible") || P("music_web_mark_root_visible")) && xk(l, m);
    a.j.delete(d.layer || 0);
    a.s = void 0;
    let n;
    null == (n = a.fa.get(d.layer)) || n.forEach((v, p) => {
        v ? a.h(p, v, d.layer) : m && a.h(p, m, d.layer)
    });
    Kk(a)
}

function Jk(a, b) {
    if (void 0 === b) {
        const c = gk();
        for (let d = 0; d < c.length; d++) void 0 !== c[d] && Jk(a, c[d])
    } else a.o.forEach((c, d) => {
        (d = a.A.get(d)) && rk(a.client, b, d, c)
    }), a.o.clear(), a.A.clear(), a.W = void 0
}

function Ik(a, b, c, d = 0) {
    const e = X(d);
    b = b || ek(d);
    e && b && wk(a.client, e, b, c)
}

function Kk(a) {
    for (var b = 0; b < a.u.length; b++) {
        var c = a.u[b];
        try {
            c()
        } catch (d) {
            W(d)
        }
    }
    a.u.length = 0;
    for (b = 0; b < a.V.length; b++) {
        c = a.V[b];
        try {
            c()
        } catch (d) {
            W(d)
        }
    }
}
var Lk = class {
    constructor() {
        this.C = [];
        this.D = [];
        this.i = [];
        this.u = [];
        this.V = [];
        this.o = new Map;
        this.A = new Map;
        this.j = new Set;
        this.fa = new Map
    }
    l(a) {
        this.client = a
    }
    na(a, b, c = {}) {
        O(() => {
            [28631].includes(a) || (Kj(new K("createClientScreen() called with a non-page VE", a)), a = 83769);
            c.isHistoryNavigation || this.i.push({
                rootVe: a,
                key: c.key || ""
            });
            this.C = [];
            this.D = [];
            c.Y ? Gk(this, a, b, c) : Hk(this, a, b, c)
        })()
    }
    U(a, b = 0) {
        O(() => {
            a.then(c => {
                this.j.has(b) && this.s && this.s();
                const d = X(b),
                    e = ek(b);
                if (d && e) {
                    var f;
                    (null == c ? 0 : null == (f = c.response) ? 0 : f.trackingParams) && rk(this.client, d, e, [Wj(c.response.trackingParams)]);
                    var g;
                    (null == c ? 0 : null == (g = c.playerResponse) ? 0 : g.trackingParams) && rk(this.client, d, e, [Wj(c.playerResponse.trackingParams)])
                }
            })
        })()
    }
    oa(a, b, c) {
        return O(() => {
            const d = Wj(a);
            this.h(d, b, c);
            return d
        })()
    }
    h(a, b, c = 0) {
        O(() => {
            if (this.j.has(c)) return this.C.push([a,
                b
            ]), !0;
            const d = X(c),
                e = b || ek(c);
            if (d && e) {
                if (P("combine_ve_grafts")) {
                    const f = this.o.get(e.toString());
                    f ? f.push(a) : (this.A.set(e.toString(), e), this.o.set(e.toString(), [a]));
                    this.W || (this.W = sf(() => {
                        Jk(this, d)
                    }, 1200))
                } else rk(this.client, d, e, [a]);
                return !0
            }
            return !1
        })()
    }
    T(a, b, c = 0) {
        (c = X(c)) && vk(this.client, c, a, b)
    }
    m(a, b, c = 0) {
        if (!a) return !1;
        c = X(c);
        if (!c) return !1;
        vk(this.client, c, Wj(a), b);
        return !0
    }
    N(a) {
        const b = a.getScreenLayer && a.getScreenLayer();
        a.visualElement ? this.T(a.visualElement, void 0, b) : (a = Fk(Bk(), a), this.m(a, void 0, b))
    }
    clickCommand(a, b, c = 0) {
        return this.m(a.clickTrackingParams, b, c)
    }
    visualElementStateChanged(a, b, c = 0) {
        0 === c && this.j.has(c) ? this.D.push([a, b]) : Ik(this, a, b, c)
    }
};

function Mk() {
    if (P("use_core_sm")) return Lk.h || (Lk.h = new Lk), Lk.h;
    Nk.h || (Nk.h = new Nk);
    return Nk.h
}

function Ok(a, b, c, d = {}) {
    a.j.add(d.layer || 0);
    a.s = () => {
        Pk(a, b, c, d);
        const e = ek(d.layer);
        if (e) {
            for (const f of a.C) a.h(f[0], f[1] || e, d.layer);
            for (const f of a.D) Qk(a, f[0], f[1])
        }
    };
    c || X(d.layer) || a.s();
    if (d.Y)
        for (const e of d.Y) a.U(e, d.layer);
    else W(Error("Delayed screen needs a data promise."))
}

function Pk(a, b, c, d = {}) {
    var e = void 0;
    d.layer || (d.layer = 0);
    e = void 0 !== d.la ? d.la : d.layer;
    const f = X(e);
    e = ek(e);
    var g = c || e;
    let h;
    g && (void 0 !== d.parentCsn ? h = {
        clientScreenNonce: d.parentCsn,
        visualElement: g
    } : f && "UNDEFINED_CSN" !== f && (h = {
        clientScreenNonce: f,
        visualElement: g
    }));
    let k;
    g = N("EVENT_ID");
    "UNDEFINED_CSN" === f && g && (k = {
        servletData: {
            serializedServletEventId: g
        }
    });
    P("combine_ve_grafts") && f && Rk(a, f);
    let l;
    try {
        l = qk(a.client, b, h, d.X, d.cttAuthInfo, k, d.Ka, d.loggingExpectations)
    } catch (v) {
        Oj(v, {
            Va: b,
            rootVe: e,
            Sa: c,
            Ga: f,
            Ra: h,
            X: d.X
        });
        W(v);
        return
    }
    kk(l, b, d.layer, d.cttAuthInfo);
    f && "UNDEFINED_CSN" !== f && e && !hk(f) && uk(a.client, f, e, !0);
    a.i[a.i.length - 1] && !a.i[a.i.length - 1].csn && (a.i[a.i.length - 1].csn = l || "");
    Dk();
    const m = ek(d.layer);
    f && "UNDEFINED_CSN" !== f && m && (P("web_mark_root_visible") || P("music_web_mark_root_visible")) && xk(l, m);
    a.j.delete(d.layer || 0);
    a.s = void 0;
    let n;
    null == (n = a.fa.get(d.layer)) || n.forEach((v, p) => {
        v ? a.h(p, v, d.layer) : m && a.h(p, m, d.layer)
    });
    Sk(a)
}

function Rk(a, b) {
    if (void 0 === b) {
        const c = gk();
        for (let d = 0; d < c.length; d++) void 0 !== c[d] && Rk(a, c[d])
    } else a.o.forEach((c, d) => {
        (d = a.A.get(d)) && rk(a.client, b, d, c)
    }), a.o.clear(), a.A.clear(), a.W = void 0
}

function Qk(a, b, c, d = 0) {
    const e = X(d);
    b = b || ek(d);
    e && b && wk(a.client, e, b, c)
}

function Sk(a) {
    for (var b = 0; b < a.u.length; b++) {
        var c = a.u[b];
        try {
            c()
        } catch (d) {
            W(d)
        }
    }
    a.u.length = 0;
    for (b = 0; b < a.V.length; b++) {
        c = a.V[b];
        try {
            c()
        } catch (d) {
            W(d)
        }
    }
}
var Nk = class {
    constructor() {
        this.C = [];
        this.D = [];
        this.i = [];
        this.u = [];
        this.V = [];
        this.o = new Map;
        this.A = new Map;
        this.j = new Set;
        this.fa = new Map
    }
    l(a) {
        this.client = a
    }
    na(a, b, c = {}) {
        O(() => {
            [28631].includes(a) || (Kj(new K("createClientScreen() called with a non-page VE", a)), a = 83769);
            c.isHistoryNavigation || this.i.push({
                rootVe: a,
                key: c.key || ""
            });
            this.C = [];
            this.D = [];
            c.Y ? Ok(this, a, b, c) : Pk(this, a, b, c)
        })()
    }
    U(a, b = 0) {
        O(() => {
            a.then(c => {
                this.j.has(b) && this.s && this.s();
                const d = X(b),
                    e = ek(b);
                if (d && e) {
                    var f;
                    (null == c ? 0 : null == (f = c.response) ? 0 : f.trackingParams) && rk(this.client, d, e, [Wj(c.response.trackingParams)]);
                    var g;
                    (null == c ? 0 : null == (g = c.playerResponse) ? 0 : g.trackingParams) && rk(this.client, d, e, [Wj(c.playerResponse.trackingParams)])
                }
            })
        })()
    }
    oa(a, b, c) {
        return O(() => {
            const d = Wj(a);
            this.h(d, b, c);
            return d
        })()
    }
    h(a, b, c = 0) {
        O(() => {
            if (this.j.has(c)) return this.C.push([a,
                b
            ]), !0;
            const d = X(c),
                e = b || ek(c);
            if (d && e) {
                if (P("combine_ve_grafts")) {
                    const f = this.o.get(e.toString());
                    f ? f.push(a) : (this.A.set(e.toString(), e), this.o.set(e.toString(), [a]));
                    this.W || (this.W = sf(() => {
                        Rk(this, d)
                    }, 1200))
                } else rk(this.client, d, e, [a]);
                return !0
            }
            return !1
        })()
    }
    T(a, b, c = 0) {
        (c = X(c)) && vk(this.client, c, a, b)
    }
    m(a, b, c = 0) {
        if (!a) return !1;
        c = X(c);
        if (!c) return !1;
        vk(this.client, c, Wj(a), b);
        return !0
    }
    N(a) {
        const b = a.getScreenLayer && a.getScreenLayer();
        a.visualElement ? this.T(a.visualElement, void 0, b) : (a = Fk(Bk(), a), this.m(a, void 0, b))
    }
    clickCommand(a, b, c = 0) {
        return this.m(a.clickTrackingParams, b, c)
    }
    visualElementStateChanged(a, b, c = 0) {
        0 === c && this.j.has(c) ? this.D.push([a, b]) : Qk(this, a, b, c)
    }
};
var Tk = class extends C {
    constructor(a) {
        super(a)
    }
};
var Uk = class extends C {
    constructor(a) {
        super(a)
    }
};
Uk.h = "yt.sw.adr";

function Vk(a) {
    return q(function*() {
        var b = yield r.fetch(a.i);
        if (200 !== b.status) return Promise.reject("Server error when retrieving AmbientData");
        b = yield b.text();
        if (!b.startsWith(")]}'\n")) return Promise.reject("Incorrect JSPB formatting");
        a: {
            b = JSON.parse(b.substring(5));
            for (let c = 0; c < b.length; c++)
                if (b[c][0] === (new Uk).constructor.h) {
                    b = new Uk(b[c]);
                    break a
                }
            b = null
        }
        return b ? b : Promise.reject("AmbientData missing from response")
    })
}

function Wk(a = !1) {
    const b = Xk.h;
    return q(function*() {
        if (a || !b.h) b.h = Vk(b).then(b.j).catch(c => {
            delete b.h;
            W(c)
        });
        return b.h
    })
}
var Xk = class {
    constructor() {
        this.i = Yk("/sw.js_data")
    }
    j(a) {
        const b = cc(a, Tk, 2);
        if (b) {
            var c = kc(b, 5);
            c && (r.__SAPISID = c);
            null != y(b, 10) ? M("EOM_VISITOR_DATA", kc(b, 10)) : null != y(b, 7) && M("VISITOR_DATA", kc(b, 7));
            a: if (c = y(b, 4), null != c) {
                switch (typeof c) {
                    case "string":
                        c = +c;
                        break a;
                    case "number":
                        break a
                }
                c = void 0
            }
            null != c && M("SESSION_INDEX", String(jc(y(b, 4), 0)));
            null != y(b, 8) && M("DELEGATED_SESSION_ID", kc(b, 8));
            null != y(b, 11) && M("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT", kc(b, 11))
        }
        return a
    }
};

function Zk(a, b) {
    b.encryptedTokenJarContents && (a.h[b.encryptedTokenJarContents] = b, "string" === typeof b.expirationSeconds && setTimeout(() => {
        delete a.h[b.encryptedTokenJarContents]
    }, 1E3 * Number(b.expirationSeconds)))
}
var $k = class {
    constructor() {
        this.h = {}
    }
    handleResponse(a, b) {
        if (!b) throw Error("request needs to be passed into ConsistencyService");
        let c, d;
        b = (null == (c = b.L.context) ? void 0 : null == (d = c.request) ? void 0 : d.consistencyTokenJars) || [];
        let e;
        if (a = null == (e = a.responseContext) ? void 0 : e.consistencyTokenJar) {
            for (const f of b) delete this.h[f.encryptedTokenJarContents];
            Zk(this, a)
        }
    }
};

function al() {
    var a = N("INNERTUBE_CONTEXT");
    if (!a) return W(Error("Error: No InnerTubeContext shell provided in ytconfig.")), {};
    a = wa(a);
    P("web_no_tracking_params_in_shell_killswitch") || delete a.clickTracking;
    a.client || (a.client = {});
    var b = a.client;
    b.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset());
    var c = kf();
    c ? b.experimentsToken = c : delete b.experimentsToken;
    $k.h || ($k.h = new $k);
    b = $k.h.h;
    c = [];
    let d = 0;
    for (var e in b) c[d++] = b[e];
    a.request = Object.assign({}, a.request, {
        consistencyTokenJars: c
    });
    a.user =
        Object.assign({}, a.user);
    if (e = N("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) a.user.serializedDelegationContext = e;
    return a
};

function bl(a) {
    var b = a;
    if (a = N("INNERTUBE_HOST_OVERRIDE")) {
        a = String(a);
        var c = String,
            d = b.match(Ma);
        b = d[5];
        var e = d[6];
        d = d[7];
        var f = "";
        b && (f += b);
        e && (f += "?" + e);
        d && (f += "#" + d);
        b = a + c(f)
    }
    return b
};
var cl = class {};
const dl = {
    GET_DATASYNC_IDS: function(a) {
        return () => new a
    }(class extends cl {})
};
const el = ["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];

function fl(a) {
    var b = {
            Nb: {}
        },
        c = kg();
    if (void 0 !== si.h) {
        const d = si.h;
        a = [b !== d.m, a !== d.l, c !== d.j, !1, !1, void 0 !== d.i];
        if (a.some(e => e)) throw new K("InnerTubeTransportService is already initialized", a);
    } else si.h = new si(b, a, c)
}

function gl(a, b) {
    return q(function*() {
        var c, d = {
            sessionIndex: null == a ? void 0 : null == (c = a.qa) ? void 0 : c.sessionIndex
        };
        c = yield xd(mg(0, d));
        return Promise.resolve(Object.assign({}, hl(b), c))
    })
}

function il(a, b, c) {
    return q(function*() {
        var d;
        if (null == b ? 0 : null == (d = b.L) ? 0 : d.context) {
            const m = b.L.context;
            if (P("web_async_context_processor")) yield [].reduce((n, v) => n.then(() => v.Wb(m)), Promise.resolve());
            else
                for (const n of []) n.Xb(m)
        }
        var e;
        if (null == (e = a.i) ? 0 : e.dc(b.input, b.L)) return yield a.i.Qb(b.input, b.L);
        var f;
        if ((d = null == (f = b.config) ? void 0 : f.ac) && a.h.has(d) && P("web_memoize_inflight_requests")) var g = a.h.get(d);
        else {
            f = JSON.stringify(b.L);
            let m;
            e = null != (m = null == (g = b.Z) ? void 0 : g.headers) ? m : {};
            b.Z = Object.assign({}, b.Z, {
                headers: Object.assign({}, e, c)
            });
            g = Object.assign({}, b.Z);
            "POST" === b.Z.method && (g = Object.assign({}, g, {
                body: f
            }));
            g = a.l.fetch(b.input, g, b.config);
            d && a.h.set(d, g)
        }
        g = yield g;
        var h;
        let k;
        if (g && "error" in g && (null == (h = g) ? 0 : null == (k = h.error) ? 0 : k.details)) {
            h = g.error.details;
            for (const m of h)(h = m["@type"]) && -1 < el.indexOf(h) && (delete m["@type"], g = m)
        }
        d && a.h.has(d) && a.h.delete(d);
        let l;
        !g && (null == (l = a.i) ? 0 : l.Mb(b.input, b.L)) && (g = yield a.i.Pb(b.input, b.L));
        return g || void 0
    })
}

function jl(a, b, c) {
    var d = {
        qa: {
            identity: ng
        }
    };
    b.context || (b.context = al());
    return new D(e => q(function*() {
        var f = bl(c);
        f = Tf(f) ? "same-origin" : "cors";
        if (a.j.Ya) {
            var g, h = null == d ? void 0 : null == (g = d.qa) ? void 0 : g.sessionIndex;
            g = mg(0, {
                sessionIndex: h
            });
            f = Object.assign({}, hl(f), g)
        } else f = yield gl(d, f);
        g = bl(c);
        h = {};
        N("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT") && (null == f ? 0 : f.Authorization) || (h.key = N("INNERTUBE_API_KEY"));
        P("json_condensed_response") && (h.prettyPrint = "false");
        g = Sf(g, h || {}, !1);
        h = {
            method: "POST",
            mode: Tf(g) ? "same-origin" : "cors",
            credentials: Tf(g) ? "same-origin" : "include"
        };
        var k = {};
        const l = {};
        for (const m of Object.keys(k)) k[m] && (l[m] = k[m]);
        0 < Object.keys(l).length && (h.headers = l);
        e(il(a, {
            input: g,
            Z: h,
            L: b,
            config: d
        }, f))
    }))
}

function hl(a) {
    const b = {
        "Content-Type": "application/json"
    };
    N("EOM_VISITOR_DATA") ? b["X-Goog-EOM-Visitor-Id"] = N("EOM_VISITOR_DATA") : N("VISITOR_DATA") && (b["X-Goog-Visitor-Id"] = N("VISITOR_DATA"));
    b["X-Youtube-Bootstrap-Logged-In"] = N("LOGGED_IN", !1);
    "cors" !== a && ((a = N("INNERTUBE_CONTEXT_CLIENT_NAME")) && (b["X-Youtube-Client-Name"] = a), (a = N("INNERTUBE_CONTEXT_CLIENT_VERSION")) && (b["X-Youtube-Client-Version"] = a), (a = N("CHROME_CONNECTED_HEADER")) && (b["X-Youtube-Chrome-Connected"] = a), (a = N("DOMAIN_ADMIN_STATE")) &&
        (b["X-Youtube-Domain-Admin-State"] = a));
    return b
}
var si = class {
    constructor(a, b, c) {
        this.m = a;
        this.l = b;
        this.j = c;
        this.i = void 0;
        this.h = new Map;
        a.ma || (a.ma = {});
        a.ma = Object.assign({}, dl, a.ma)
    }
};
var ri = new oi;
let kl;

function ll() {
    if (!kl) {
        const a = xi();
        fl({
            fetch: (b, c) => xd(fetch(new Request(b, c)))
        });
        qi(a);
        kl = a.resolve(ri)
    }
    return kl
};

function ml(a) {
    return q(function*() {
        yield nl();
        Kj(a)
    })
}

function ol(a) {
    return q(function*() {
        yield nl();
        W(a)
    })
}

function pl(a) {
    q(function*() {
        var b = yield rh();
        b ? yield Wh(a, b): (yield Wk(), b = {
            timestamp: a.timestamp
        }, b = a.appShellAssetLoadReport ? {
            S: "appShellAssetLoadReport",
            payload: a.appShellAssetLoadReport,
            options: b
        } : a.clientError ? {
            S: "clientError",
            payload: a.clientError,
            options: b
        } : void 0, b && V(b.S, b.payload))
    })
}

function nl() {
    return q(function*() {
        try {
            yield Wk()
        } catch (a) {}
    })
};
const ql = {
        granted: "GRANTED",
        denied: "DENIED",
        unknown: "UNKNOWN"
    },
    rl = RegExp("^(?:[a-z]+:)?//", "i");

function sl(a) {
    var b = a.data;
    a = b.type;
    b = b.data;
    "notifications_register" === a ? (L("IDToken", b), tl()) : "notifications_check_registration" === a && ul(b)
}

function vl() {
    return self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    }).then(a => {
        if (a)
            for (const b of a) b.postMessage({
                type: "update_unseen_notifications_count_signal"
            })
    })
}

function wl(a) {
    const b = [];
    a.forEach(c => {
        b.push({
            key: c.key,
            value: c.value
        })
    });
    return b
}

function xl(a) {
    return q(function*() {
        const b = wl(a.payload.chrome.extraUrlParams),
            c = {
                recipientId: a.recipientId,
                endpoint: a.payload.chrome.endpoint,
                extraUrlParams: b
            },
            d = Xe(Le);
        return yl().then(e => jl(e, c, d).then(f => {
            f.json().then(g => g && g.endpointUrl ? zl(a, g.endpointUrl) : Promise.resolve()).catch(g => {
                ol(g);
                Promise.reject(g)
            })
        }))
    })
}

function Al(a, b) {
    var c = X(8);
    if (null == c || !b) return a;
    a = rl.test(a) ? new URL(a) : new URL(a, self.registration.scope);
    a.searchParams.set("parentCsn", c);
    a.searchParams.set("parentTrackingParams", b);
    return a.toString()
}

function zl(a, b) {
    a.deviceId && L("DeviceId", a.deviceId);
    a.timestampSec && L("TimestampLowerBound", a.timestampSec);
    const c = a.payload.chrome,
        d = Mk();
    d.na(28631, void 0, {
        layer: 8
    });
    var e;
    const f = null == (e = c.postedEndpoint) ? void 0 : e.clickTrackingParams;
    e = c.title;
    const g = {
        body: c.body,
        icon: c.iconUrl,
        data: {
            nav: Al(b, f),
            id: c.notificationId,
            attributionTag: c.attributionTag,
            clickEndpoint: c.clickEndpoint,
            postedEndpoint: c.postedEndpoint,
            clickTrackingParams: f,
            isDismissed: !0
        },
        tag: c.notificationTag || c.title + c.body + c.iconUrl,
        requireInteraction: !0
    };
    return self.registration.showNotification(e, g).then(() => {
        var h;
        (null == (h = g.data) ? 0 : h.postedEndpoint) && Bl(g.data.postedEndpoint);
        let k;
        if (null == (k = g.data) ? 0 : k.clickTrackingParams) h = {
            screenLayer: 8,
            visualElement: d.oa(g.data.clickTrackingParams, void 0, 8)
        }, Ek(Bk(), h);
        Cl(a.displayCap)
    }).catch(() => {})
}

function Bl(a) {
    if (!mf(a, Ke)) return Promise.reject();
    const b = {
            serializedRecordNotificationInteractionsRequest: mf(a, Ke).serializedInteractionsRequest
        },
        c = Xe(Me);
    return yl().then(d => jl(d, b, c)).then(d => d)
}

function Cl(a) {
    -1 !== a && self.registration.getNotifications().then(b => {
        for (let e = 0; e < b.length - a; e++) {
            b[e].data.isDismissed = !1;
            b[e].close();
            let f;
            if (null == (f = b[e].data) ? 0 : f.clickTrackingParams) {
                let g;
                var c = Wj(null == (g = b[e].data) ? void 0 : g.clickTrackingParams),
                    d = {
                        screenLayer: 8,
                        visualElement: c
                    };
                const h = Yj(82046),
                    k = Mk();
                k.h(h, c, 8);
                c = {
                    screenLayer: 8,
                    visualElement: h
                };
                Ek(Bk(), c);
                k.N(c);
                Bk();
                O(Z().o).bind(Z())(d, void 0, 8)
            }
        }
    })
}

function ul(a) {
    const b = [Dl(a), Te("RegistrationTimestamp").then(El), Fl(), Gl(), Hl()];
    Promise.all(b).catch(() => {
        L("IDToken", a);
        tl();
        return Promise.resolve()
    })
}

function El(a) {
    return 9E7 >= Date.now() - (a || 0) ? Promise.resolve() : Promise.reject()
}

function Dl(a) {
    return Te("IDToken").then(b => a === b ? Promise.resolve() : Promise.reject())
}

function Fl() {
    return Te("Permission").then(a => Notification.permission === a ? Promise.resolve() : Promise.reject())
}

function Gl() {
    return Te("Endpoint").then(a => Il().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function Hl() {
    return Te("application_server_key").then(a => Jl().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function Kl() {
    var a = Notification.permission;
    if (ql[a]) return ql[a]
}

function tl() {
    L("RegistrationTimestamp", 0);
    Promise.all([Il(), Ll(), Ml(), Jl()]).then(([a, b, c, d]) => {
        b = b ? Oe(b) : null;
        c = c ? Oe(c) : null;
        d = d ? db(new Uint8Array(d), 4) : null;
        Nl(a, b, c, d)
    }).catch(() => {
        Nl()
    })
}

function Nl(a = null, b = null, c = null, d = null) {
    Se().then(e => {
        e && (L("Endpoint", a), L("P256dhKey", b), L("AuthKey", c), L("application_server_key", d), L("Permission", Notification.permission), Promise.all([Te("DeviceId"), Te("NotificationsDisabled")]).then(([f, g]) => {
            if (null != f) var h = f;
            else {
                f = [];
                var k;
                h = h || Od.length;
                for (k = 0; 256 > k; k++) f[k] = Od[0 | Math.random() * h];
                h = f.join("")
            }
            Ol(h, null != a ? a : void 0, null != b ? b : void 0, null != c ? c : void 0, null != d ? d : void 0, null != g ? g : void 0)
        }))
    })
}

function Ol(a, b, c, d, e, f) {
    q(function*() {
        const g = {
                notificationRegistration: {
                    chromeRegistration: {
                        deviceId: a,
                        pushParams: {
                            applicationServerKey: e,
                            authKey: d,
                            p256dhKey: c,
                            browserEndpoint: b
                        },
                        notificationsDisabledInApp: f,
                        permission: Kl()
                    }
                }
            },
            h = Xe(Ne);
        return yl().then(k => jl(k, g, h).then(() => {
            L("DeviceId", a);
            L("RegistrationTimestamp", Date.now());
            L("TimestampLowerBound", Date.now())
        }, l => {
            ml(l)
        }))
    })
}

function Il() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.endpoint) : Promise.resolve(null))
}

function Ll() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("p256dh")) : Promise.resolve(null))
}

function Ml() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("auth")) : Promise.resolve(null))
}

function Jl() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.options.applicationServerKey) : Promise.resolve(null))
}

function yl() {
    return q(function*() {
        try {
            return yield Wk(!0), ll()
        } catch (a) {
            return yield ml(a), Promise.reject(a)
        }
    })
};
let Pl = self.location.origin + "/";

function Yk(a) {
    let b = "undefined" !== typeof ServiceWorkerGlobalScope && self instanceof ServiceWorkerGlobalScope ? fd.registration.scope : Pl;
    b.endsWith("/") && (b = b.slice(0, -1));
    return b + a
};
let Ql = void 0;

function Rl(a) {
    return q(function*() {
        Ql || (Ql = yield a.open("yt-appshell-assets"));
        return Ql
    })
}

function Sl(a, b) {
    return q(function*() {
        const c = yield Rl(a), d = b.map(e => Tl(c, e));
        return Promise.all(d)
    })
}

function Ul(a, b) {
    return q(function*() {
        let c;
        try {
            c = yield a.match(b, {
                cacheName: "yt-appshell-assets"
            })
        } catch (d) {}
        return c
    })
}

function Vl(a, b) {
    return q(function*() {
        const c = yield Rl(a), d = (yield c.keys()).filter(e => !b.includes(e.url)).map(e => c.delete(e));
        return Promise.all(d)
    })
}

function Wl(a, b, c) {
    return q(function*() {
        yield(yield Rl(a)).put(b, c)
    })
}

function Xl(a, b) {
    q(function*() {
        yield(yield Rl(a)).delete(b)
    })
}

function Tl(a, b) {
    return q(function*() {
        return (yield a.match(b)) ? Promise.resolve() : a.add(b)
    })
};
var Yl = Ah("yt-serviceworker-metadata", {
    R: {
        auth: {
            P: 1
        },
        ["resource-manifest-assets"]: {
            P: 2
        }
    },
    ea: !0,
    upgrade(a, b) {
        b(1) && Rg(a, "resource-manifest-assets");
        b(2) && Rg(a, "auth")
    },
    version: 2
});
let Zl = null;

function $l(a) {
    return hh(Yl(), a)
}

function am() {
    return q(function*() {
        const a = yield rh();
        if (a) return bm.h || (bm.h = new bm(a)), bm.h
    })
}

function cm(a, b) {
    return q(function*() {
        yield T(yield $l(a.token), ["resource-manifest-assets"], "readwrite", c => {
            const d = c.objectStore("resource-manifest-assets"),
                e = Date.now();
            return S(d.h.put(b, e)).then(() => {
                Zl = e;
                let f = !0;
                return Wg(d, {
                    query: IDBKeyRange.bound(0, Date.now()),
                    direction: "prev"
                }, g => f ? (f = !1, g.advance(5)) : d.delete(g.getKey()).then(() => g.continue()))
            })
        })
    })
}

function dm(a, b) {
    return q(function*() {
        let c = !1,
            d = 0;
        yield T(yield $l(a.token), ["resource-manifest-assets"], "readonly", e => Wg(e.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, f => {
            if (f.O().includes(b)) c = !0;
            else return d += 1, f.continue()
        }));
        return c ? d : -1
    })
}

function em(a) {
    return q(function*() {
        Zl || (yield T(yield $l(a.token), ["resource-manifest-assets"], "readonly", b => Wg(b.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, c => {
            Zl = c.getKey()
        })));
        return Zl
    })
}
var bm = class {
    constructor(a) {
        this.token = a
    }
};

function fm() {
    return q(function*() {
        const a = yield rh();
        if (a) return gm.h || (gm.h = new gm(a)), gm.h
    })
}

function hm(a, b) {
    return q(function*() {
        yield Tg(yield $l(a.token), "auth", b, "shell_identifier_key")
    })
}

function im(a) {
    return q(function*() {
        return (yield(yield $l(a.token)).get("auth", "shell_identifier_key")) || ""
    })
}

function jm(a) {
    return q(function*() {
        yield(yield $l(a.token)).clear("auth")
    })
}
var gm = class {
    constructor(a) {
        this.token = a
    }
};

function km() {
    q(function*() {
        const a = yield fm();
        a && (yield jm(a))
    })
};
var gc = class extends C {
        constructor(a) {
            super(a)
        }
    },
    lm = [gc, 1, Mc];
var mm = class extends C {
    constructor(a) {
        super(a, -1, mm.i)
    }
};
mm.i = [1];
var nm = function(a) {
    return (b, c) => {
        a: {
            if (Hb.length) {
                const f = Hb.pop();
                Db(f, c);
                f.h.init(b, void 0, void 0, c);
                b = f
            } else b = new Gb(b, c);
            try {
                var d = Ac(a);
                var e = Bc(new d.ha, b, d);
                break a
            } finally {
                d = b, d.h.clear(), d.l = -1, d.i = -1, 100 > Hb.length && Hb.push(d)
            }
            e = void 0
        }
        return e
    }
}([mm,
    1, Nc, lm
]);

function om(a) {
    return q(function*() {
        const b = a.headers.get("X-Resource-Manifest");
        return b ? Promise.resolve(pm(b)) : Promise.reject(Error("No resource manifest header"))
    })
}

function pm(a) {
    return fc(nm(decodeURIComponent(a))).reduce((b, c) => {
        (c = kc(c, 1)) && b.push(c);
        return b
    }, [])
};

function qm(a) {
    return q(function*() {
        const b = yield Wk();
        if (b && null != y(b, 3)) {
            var c = yield fm();
            c && (c = yield im(c), y(b, 3) !== c && (Xl(a.caches, a.h), km()))
        }
    })
}

function rm(a) {
    return q(function*() {
        let b, c;
        try {
            c = yield sm(a.i), b = yield om(c), yield Sl(a.caches, b)
        } catch (d) {
            return Promise.reject(d)
        }
        try {
            yield tm(), yield Wl(a.caches, a.h, c)
        } catch (d) {
            return Promise.reject(d)
        }
        if (b) try {
            yield um(a, b, a.h)
        } catch (d) {}
        return Promise.resolve()
    })
}

function vm(a) {
    return q(function*() {
        yield qm(a);
        return rm(a)
    })
}

function sm(a) {
    return q(function*() {
        try {
            return yield r.fetch(new Request(a))
        } catch (b) {
            return Promise.reject(b)
        }
    })
}

function tm() {
    return q(function*() {
        var a = yield Wk();
        let b;
        a && null != y(a, 3) && (b = kc(a, 3));
        return b ? (a = yield fm()) ? Promise.resolve(hm(a, b)) : Promise.reject(Error("Could not get AuthMonitor instance")) : Promise.reject(Error("Could not get datasync ID"))
    })
}

function um(a, b, c) {
    return q(function*() {
        const d = yield am();
        if (d) try {
            yield cm(d, b)
        } catch (e) {
            yield ml(e)
        }
        b.push(c);
        try {
            yield Vl(a.caches, b)
        } catch (e) {
            yield ml(e)
        }
        return Promise.resolve()
    })
}

function wm(a, b) {
    return q(function*() {
        return Ul(a.caches, b)
    })
}

function xm(a) {
    return q(function*() {
        return Ul(a.caches, a.h)
    })
}
var ym = class {
    constructor() {
        var a = self.caches;
        let b = Yk("/app_shell");
        P("service_worker_forward_exp_params") && (b += self.location.search);
        var c = Yk("/app_shell_home");
        this.caches = a;
        this.i = b;
        this.h = c
    }
};
var zm = class {
    constructor() {
        const a = this;
        this.stream = new ReadableStream({
            start(b) {
                a.close = () => void b.close();
                a.h = c => {
                    const d = c.getReader();
                    return d.read().then(function h({
                        done: f,
                        value: g
                    }) {
                        if (f) return Promise.resolve();
                        b.enqueue(g);
                        return d.read().then(h)
                    })
                };
                a.i = () => {
                    const c = (new TextEncoder).encode("<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>");
                    b.enqueue(c)
                }
            }
        })
    }
};

function Am(a, b) {
    return q(function*() {
        const c = b.request,
            d = yield wm(a.h, c.url);
        if (d) return pl({
            appShellAssetLoadReport: {
                assetPath: c.url,
                cacheHit: !0
            },
            timestamp: Q()
        }), d;
        Bm(c);
        return Cm(b)
    })
}

function Dm(a, b) {
    return q(function*() {
        const c = yield Em(b);
        if (c.response && (c.response.ok || "opaqueredirect" === c.response.type || 429 === c.response.status || 303 === c.response.status || 300 <= c.response.status && 400 > c.response.status)) return c.response;
        const d = yield xm(a.h);
        if (d) return Fm(a), Gm(d, b);
        Hm(a);
        return c.response ? c.response : Promise.reject(c.error)
    })
}

function Im(a, b) {
    b = new URL(b);
    if (!a.config.pa.includes(b.pathname)) return !1;
    if (!b.search) return !0;
    b = new URLSearchParams(b.search);
    for (const c of a.config.Ca)
        if (a = b.get(c.key), void 0 === c.value || a === c.value)
            if (b.delete(c.key), !b.toString()) return !0;
    return !1
}

function Jm(a, b) {
    return q(function*() {
        const c = yield xm(a.h);
        if (!c) return Hm(a), Cm(b);
        Fm(a);
        var d;
        a: {
            if (c.headers && (d = c.headers.get("date")) && (d = Date.parse(d), !isNaN(d))) {
                d = Math.round(Q() - d);
                break a
            }
            d = -1
        }
        if (!(-1 < d && 7 <= d / 864E5)) return Gm(c, b);
        d = yield Em(b);
        return d.response && d.response.ok ? d.response : Gm(c, b)
    })
}

function Cm(a) {
    return Promise.resolve(a.preloadResponse).then(b => b && !Km(b) ? b : r.fetch(a.request))
}

function Bm(a) {
    const b = {
        assetPath: a.url,
        cacheHit: !1
    };
    am().then(c => {
        if (c) {
            var d = em(c).then(e => {
                e && (b.currentAppBundleTimestampSec = String(Math.floor(e / 1E3)))
            });
            c = dm(c, a.url).then(e => {
                b.appBundleVersionDiffCount = e
            });
            Promise.all([d, c]).catch(e => {
                ml(e)
            }).finally(() => {
                pl({
                    appShellAssetLoadReport: b,
                    timestamp: Q()
                })
            })
        } else pl({
            appShellAssetLoadReport: b,
            timestamp: Q()
        })
    })
}

function Fm(a) {
    pl({
        appShellAssetLoadReport: {
            assetPath: a.h.h,
            cacheHit: !0
        },
        timestamp: Q()
    })
}

function Hm(a) {
    pl({
        appShellAssetLoadReport: {
            assetPath: a.h.h,
            cacheHit: !1
        },
        timestamp: Q()
    })
}

function Gm(a, b) {
    if (!P("sw_nav_preload_pbj")) return a;
    const c = new zm,
        d = c.h(a.body);
    Promise.resolve(b.preloadResponse).then(e => {
        if (!e || !Km(e)) throw Error("no pbj preload response available");
        d.then(() => c.h(e.body)).then(() => void c.close())
    }).catch(() => {
        d.then(() => {
            c.i();
            c.close()
        })
    });
    return new Response(c.stream, {
        status: a.status,
        statusText: a.statusText,
        headers: a.headers
    })
}

function Em(a) {
    return q(function*() {
        try {
            return {
                response: yield Cm(a)
            }
        } catch (b) {
            return {
                error: b
            }
        }
    })
}

function Km(a) {
    return "pbj" === a.headers.get("x-navigation-preload-response-type")
}
var Tm = class {
    constructor() {
        var a = Lm;
        var b = {
            Fa: Mm,
            Ua: Nm([Om, /\/signin/, /\/logout/]),
            pa: ["/", "/feed/downloads"],
            Ca: Pm([{
                key: "feature",
                value: "ytca"
            }]),
            Ba: Qm(P("kevlar_sw_app_wide_fallback") ? Rm : Sm)
        };
        this.h = a;
        this.config = b
    }
};
const Um = /^\/$/,
    Sm = [Um, /^\/feed\/downloads$/],
    Rm = [Um, /^\/feed\/\w*/, /^\/results$/, /^\/playlist$/, /^\/watch$/, /^\/channel\/\w*/];

function Qm(a) {
    return new RegExp(a.map(b => b.source).join("|"))
}
const Vm = /^https:\/\/([\w-]*\.)*youtube\.com.*/;

function Nm(a) {
    a = Qm(a);
    return new RegExp(`${Vm.source}(${a.source})`)
}
const Wm = Qm([/\.css$/, /\.js$/, /\.ico$/, /\/ytmweb\/_\/js\//, /\/ytmweb\/_\/ss\//, /\/kabuki\/_\/js\//, /\/kabuki\/_\/ss\//, /\/ytmainappweb\/_\/ss\//]),
    Mm = new RegExp(`${Vm.source}(${Wm.source})`),
    Om = /purge_shell=1/;

function Pm(a = []) {
    const b = [];
    for (const c of Wc) b.push({
        key: c
    });
    for (const c of a) b.push(c);
    return b
}
Nm([Om]);
Pm();
var Ym = class {
    constructor() {
        var a = Lm,
            b = Xm;
        this.h = self;
        this.i = a;
        this.m = b;
        this.u = Pe
    }
    init() {
        this.h.oninstall = this.o.bind(this);
        this.h.onactivate = this.j.bind(this);
        this.h.onfetch = this.l.bind(this);
        this.h.onmessage = this.s.bind(this)
    }
    o(a) {
        this.h.skipWaiting();
        const b = vm(this.i).catch(c => {
            ml(c);
            return Promise.resolve()
        });
        a.waitUntil(b)
    }
    j(a) {
        const b = [this.h.clients.claim()],
            c = this.h.registration;
        c.navigationPreload && (b.push(c.navigationPreload.enable()), P("sw_nav_preload_pbj") && b.push(c.navigationPreload.setHeaderValue("pbj")));
        a.waitUntil(Promise.all(b))
    }
    l(a) {
        const b = this;
        return q(function*() {
            var c = b.m,
                d = !!b.h.registration.navigationPreload;
            const e = a.request;
            if (c.config.Ua.test(e.url)) Xk.h && (delete Xk.h.h, r.__SAPISID = void 0, M("VISITOR_DATA", void 0), M("SESSION_INDEX", void 0), M("DELEGATED_SESSION_ID", void 0), M("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",
                void 0)), d = a.respondWith, c = c.h, Xl(c.caches, c.h), km(), c = Cm(a), d.call(a, c);
            else if (c.config.Fa.test(e.url)) a.respondWith(Am(c, a));
            else if ("navigate" === e.mode) {
                const f = new URL(e.url),
                    g = c.config.pa;
                (!P("sw_nav_request_network_first") && g.includes(f.pathname) ? 0 : c.config.Ba.test(f.pathname)) ? a.respondWith(Dm(c, a)): Im(c, e.url) ? a.respondWith(Jm(c, a)) : d && a.respondWith(Cm(a))
            }
        })
    }
    s(a) {
        const b = a.data;
        this.u.includes(b.type) ? sl(a) : "refresh_shell" === b.type && rm(this.i).catch(c => {
            ml(c)
        })
    }
};

function Zm() {
    let a = u("ytglobal.storage_");
    a || (a = new $m, t("ytglobal.storage_", a));
    return a
}
var $m = class {
    estimate() {
        return q(function*() {
            const a = navigator;
            let b;
            if (null == (b = a.storage) ? 0 : b.estimate) return a.storage.estimate();
            let c;
            if (null == (c = a.webkitTemporaryStorage) ? 0 : c.queryUsageAndQuota) return an()
        })
    }
};

function an() {
    const a = navigator;
    return new Promise((b, c) => {
        let d;
        null != (d = a.webkitTemporaryStorage) && d.queryUsageAndQuota ? a.webkitTemporaryStorage.queryUsageAndQuota((e, f) => {
            b({
                usage: e,
                quota: f
            })
        }, e => {
            c(e)
        }) : c(Error("webkitTemporaryStorage is not supported."))
    })
}
t("ytglobal.storageClass_", $m);

function bn(a, b) {
    Zm().estimate().then(c => {
        c = Object.assign({}, b, {
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            deviceStorageUsageMbytes: cn(null == c ? void 0 : c.usage),
            deviceStorageQuotaMbytes: cn(null == c ? void 0 : c.quota)
        });
        a.h("idbQuotaExceeded", c)
    })
}
class dn {
    constructor() {
        var a = en;
        this.handleError = fn;
        this.h = a;
        this.i = !1;
        void 0 === self.document || self.addEventListener("beforeunload", () => {
            this.i = !0
        });
        this.j = Math.random() <= jf("ytidb_transaction_ended_event_rate_limit_session", .2)
    }
    ba(a, b) {
        switch (a) {
            case "IDB_DATA_CORRUPTED":
                P("idb_data_corrupted_killswitch") || this.h("idbDataCorrupted", b);
                break;
            case "IDB_UNEXPECTEDLY_CLOSED":
                this.h("idbUnexpectedlyClosed", b);
                break;
            case "IS_SUPPORTED_COMPLETED":
                P("idb_is_supported_completed_killswitch") || this.h("idbIsSupportedCompleted", b);
                break;
            case "QUOTA_EXCEEDED":
                bn(this, b);
                break;
            case "TRANSACTION_ENDED":
                this.j && Math.random() <= jf("ytidb_transaction_ended_event_rate_limit_transaction",
                    .1) && this.h("idbTransactionEnded", b);
                break;
            case "TRANSACTION_UNEXPECTEDLY_ABORTED":
                a = Object.assign({}, b, {
                    hasWindowUnloaded: this.i
                }), this.h("idbTransactionAborted", a)
        }
    }
}

function cn(a) {
    return "undefined" === typeof a ? "-1" : String(Math.ceil(a / 1048576))
};
dg(ag(), {
    K: [{
        Qa: /Failed to fetch/,
        weight: 500
    }],
    H: []
});
var {
    handleError: fn = Jj,
    ba: en = V
} = {
    handleError: ol,
    ba: function(a, b) {
        return q(function*() {
            yield nl();
            V(a, b)
        })
    }
};
for (qg = new dn; 0 < pg.length;) {
    const a = pg.shift();
    switch (a.type) {
        case "ERROR":
            qg.handleError(a.payload);
            break;
        case "EVENT":
            qg.ba(a.eventType, a.payload)
    }
}
Xk.h = new Xk;
self.onnotificationclick = function(a) {
    a.notification.close();
    const b = a.notification.data;
    b.isDismissed = !1;
    const c = self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    });
    c.then(d => {
        a: {
            var e = b.nav;
            for (const f of d)
                if (f.url === e) {
                    f.focus();
                    break a
                }
            self.clients.openWindow(e)
        }
    });
    a.waitUntil(c);
    a.waitUntil(Bl(b.clickEndpoint))
};
self.onnotificationclose = function(a) {
    var b = a.notification.data;
    if (null == b ? 0 : b.clickTrackingParams) {
        var c = Wj(b.clickTrackingParams);
        a = {
            screenLayer: 8,
            visualElement: c
        };
        if (b.isDismissed) {
            const d = Yj(74726);
            b = Mk();
            b.h(d, c, 8);
            c = {
                screenLayer: 8,
                visualElement: d
            };
            Ek(Bk(), c);
            b.N(c)
        }
        Bk();
        O(Z().o).bind(Z())(a, void 0, 8)
    }
};
self.onpush = function(a) {
    a.waitUntil(Te("NotificationsDisabled").then(b => {
        if (b) return Promise.resolve();
        if (a.data && a.data.text().length) try {
            return xl(a.data.json())
        } catch (c) {
            return Promise.resolve(c.message)
        }
        return Promise.resolve()
    }));
    a.waitUntil(vl())
};
self.onpushsubscriptionchange = function() {
    tl()
};
const Lm = new ym,
    Xm = new Tm;
(new Ym).init();