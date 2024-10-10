    var Qe = {
        exports: {}
    };
    (function(t) {
        (function() {
            var e = "input is invalid type"
              , n = "finalize already called"
              , o = typeof window == "object"
              , r = o ? window : {};
            r.JS_MD5_NO_WINDOW && (o = !1);
            var a = !o && typeof self == "object"
              , l = !r.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
            l ? r = qn : a && (r = self);
            var d = !r.JS_MD5_NO_COMMON_JS && !0 && t.exports, h = !r.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", f = "0123456789abcdef".split(""), C = [128, 32768, 8388608, -2147483648], p = [0, 8, 16, 24], E = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), S = [], I;
            if (h) {
                var O = new ArrayBuffer(68);
                I = new Uint8Array(O),
                S = new Uint32Array(O)
            }
            var F = Array.isArray;
            (r.JS_MD5_NO_NODE_JS || !F) && (F = function(i) {
                return Object.prototype.toString.call(i) === "[object Array]"
            }
            );
            var A = ArrayBuffer.isView;
            h && (r.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !A) && (A = function(i) {
                return typeof i == "object" && i.buffer && i.buffer.constructor === ArrayBuffer
            }
            );
            var v = function(i) {
                var u = typeof i;
                if (u === "string")
                    return [i, !0];
                if (u !== "object" || i === null)
                    throw new Error(e);
                if (h && i.constructor === ArrayBuffer)
                    return [new Uint8Array(i), !1];
                if (!F(i) && !A(i))
                    throw new Error(e);
                return [i, !1]
            }
              , w = function(i) {
                return function(u) {
                    return new N(!0).update(u)[i]()
                }
            }
                
              , L = function() {
                var i = w("hex");
                l && (i = P(i)),
                i.create = function() {
                    return new N
                }
                ,
                i.update = function(s) {
                    return i.create().update(s)
                }
                ;
                for (var u = 0; u < E.length; ++u) {
                    var c = E[u];
                    i[c] = w(c)
                }
                return i
            }
              , P = function(i) {
                var u = Xe, c = Xe.Buffer, s;
                c.from && !r.JS_MD5_NO_BUFFER_FROM ? s = c.from : s = function(g) {
                    return new c(g)
                }
                ;
                var b = function(g) {
                    if (typeof g == "string")
                        return u.createHash("md5").update(g, "utf8").digest("hex");
                    if (g == null)
                        throw new Error(e);
                    return g.constructor === ArrayBuffer && (g = new Uint8Array(g)),
                    F(g) || A(g) || g.constructor === c ? u.createHash("md5").update(s(g)).digest("hex") : i(g)
                };
                return b
            }
              , W = function(i) {
                return function(u, c) {
                    return new z(u,!0).update(c)[i]()
                }
            }
              , G = function() {
                var i = W("hex");
                i.create = function(s) {
                    return new z(s)
                }
                ,
                i.update = function(s, b) {
                    return i.create(s).update(b)
                }
                ;
                for (var u = 0; u < E.length; ++u) {
                    var c = E[u];
                    i[c] = W(c)
                }
                return i
            };
            function N(i) {
                if (i)
                    S[0] = S[16] = S[1] = S[2] = S[3] = S[4] = S[5] = S[6] = S[7] = S[8] = S[9] = S[10] = S[11] = S[12] = S[13] = S[14] = S[15] = 0,
                    this.blocks = S,
                    this.buffer8 = I;
                else if (h) {
                    var u = new ArrayBuffer(68);
                    this.buffer8 = new Uint8Array(u),
                    this.blocks = new Uint32Array(u)
                } else
                    this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0,
                this.finalized = this.hashed = !1,
                this.first = !0
            }
            N.prototype.update = function(i) {
                if (this.finalized)
                    throw new Error(n);
                var u = v(i);
                i = u[0];
                for (var c = u[1], s, b = 0, g, _ = i.length, k = this.blocks, R = this.buffer8; b < _; ) {
                    if (this.hashed && (this.hashed = !1,
                    k[0] = k[16],
                    k[16] = k[1] = k[2] = k[3] = k[4] = k[5] = k[6] = k[7] = k[8] = k[9] = k[10] = k[11] = k[12] = k[13] = k[14] = k[15] = 0),
                    c)
                        if (h)
                            for (g = this.start; b < _ && g < 64; ++b)
                                s = i.charCodeAt(b),
                                s < 128 ? R[g++] = s : s < 2048 ? (R[g++] = 192 | s >>> 6,
                                R[g++] = 128 | s & 63) : s < 55296 || s >= 57344 ? (R[g++] = 224 | s >>> 12,
                                R[g++] = 128 | s >>> 6 & 63,
                                R[g++] = 128 | s & 63) : (s = 65536 + ((s & 1023) << 10 | i.charCodeAt(++b) & 1023),
                                R[g++] = 240 | s >>> 18,
                                R[g++] = 128 | s >>> 12 & 63,
                                R[g++] = 128 | s >>> 6 & 63,
                                R[g++] = 128 | s & 63);
                        else
                            for (g = this.start; b < _ && g < 64; ++b)
                                s = i.charCodeAt(b),
                                s < 128 ? k[g >>> 2] |= s << p[g++ & 3] : s < 2048 ? (k[g >>> 2] |= (192 | s >>> 6) << p[g++ & 3],
                                k[g >>> 2] |= (128 | s & 63) << p[g++ & 3]) : s < 55296 || s >= 57344 ? (k[g >>> 2] |= (224 | s >>> 12) << p[g++ & 3],
                                k[g >>> 2] |= (128 | s >>> 6 & 63) << p[g++ & 3],
                                k[g >>> 2] |= (128 | s & 63) << p[g++ & 3]) : (s = 65536 + ((s & 1023) << 10 | i.charCodeAt(++b) & 1023),
                                k[g >>> 2] |= (240 | s >>> 18) << p[g++ & 3],
                                k[g >>> 2] |= (128 | s >>> 12 & 63) << p[g++ & 3],
                                k[g >>> 2] |= (128 | s >>> 6 & 63) << p[g++ & 3],
                                k[g >>> 2] |= (128 | s & 63) << p[g++ & 3]);
                    else if (h)
                        for (g = this.start; b < _ && g < 64; ++b)
                            R[g++] = i[b];
                    else
                        for (g = this.start; b < _ && g < 64; ++b)
                            k[g >>> 2] |= i[b] << p[g++ & 3];
                    this.lastByteIndex = g,
                    this.bytes += g - this.start,
                    g >= 64 ? (this.start = g - 64,
                    this.hash(),
                    this.hashed = !0) : this.start = g
                }
                return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0,
                this.bytes = this.bytes % 4294967296),
                this
            }
            ,
            N.prototype.finalize = function() {
                if (!this.finalized) {
                    this.finalized = !0;
                    var i = this.blocks
                      , u = this.lastByteIndex;
                    i[u >>> 2] |= C[u & 3],
                    u >= 56 && (this.hashed || this.hash(),
                    i[0] = i[16],
                    i[16] = i[1] = i[2] = i[3] = i[4] = i[5] = i[6] = i[7] = i[8] = i[9] = i[10] = i[11] = i[12] = i[13] = i[14] = i[15] = 0),
                    i[14] = this.bytes << 3,
                    i[15] = this.hBytes << 3 | this.bytes >>> 29,
                    this.hash()
                }
            }
            ,
            N.prototype.hash = function() {
                var i, u, c, s, b, g, _ = this.blocks;
                this.first ? (i = _[0] - 680876937,
                i = (i << 7 | i >>> 25) - 271733879 << 0,
                s = (-1732584194 ^ i & 2004318071) + _[1] - 117830708,
                s = (s << 12 | s >>> 20) + i << 0,
                c = (-271733879 ^ s & (i ^ -271733879)) + _[2] - 1126478375,
                c = (c << 17 | c >>> 15) + s << 0,
                u = (i ^ c & (s ^ i)) + _[3] - 1316259209,
                u = (u << 22 | u >>> 10) + c << 0) : (i = this.h0,
                u = this.h1,
                c = this.h2,
                s = this.h3,
                i += (s ^ u & (c ^ s)) + _[0] - 680876936,
                i = (i << 7 | i >>> 25) + u << 0,
                s += (c ^ i & (u ^ c)) + _[1] - 389564586,
                s = (s << 12 | s >>> 20) + i << 0,
                c += (u ^ s & (i ^ u)) + _[2] + 606105819,
                c = (c << 17 | c >>> 15) + s << 0,
                u += (i ^ c & (s ^ i)) + _[3] - 1044525330,
                u = (u << 22 | u >>> 10) + c << 0),
                i += (s ^ u & (c ^ s)) + _[4] - 176418897,
                i = (i << 7 | i >>> 25) + u << 0,
                s += (c ^ i & (u ^ c)) + _[5] + 1200080426,
                s = (s << 12 | s >>> 20) + i << 0,
                c += (u ^ s & (i ^ u)) + _[6] - 1473231341,
                c = (c << 17 | c >>> 15) + s << 0,
                u += (i ^ c & (s ^ i)) + _[7] - 45705983,
                u = (u << 22 | u >>> 10) + c << 0,
                i += (s ^ u & (c ^ s)) + _[8] + 1770035416,
                i = (i << 7 | i >>> 25) + u << 0,
                s += (c ^ i & (u ^ c)) + _[9] - 1958414417,
                s = (s << 12 | s >>> 20) + i << 0,
                c += (u ^ s & (i ^ u)) + _[10] - 42063,
                c = (c << 17 | c >>> 15) + s << 0,
                u += (i ^ c & (s ^ i)) + _[11] - 1990404162,
                u = (u << 22 | u >>> 10) + c << 0,
                i += (s ^ u & (c ^ s)) + _[12] + 1804603682,
                i = (i << 7 | i >>> 25) + u << 0,
                s += (c ^ i & (u ^ c)) + _[13] - 40341101,
                s = (s << 12 | s >>> 20) + i << 0,
                c += (u ^ s & (i ^ u)) + _[14] - 1502002290,
                c = (c << 17 | c >>> 15) + s << 0,
                u += (i ^ c & (s ^ i)) + _[15] + 1236535329,
                u = (u << 22 | u >>> 10) + c << 0,
                i += (c ^ s & (u ^ c)) + _[1] - 165796510,
                i = (i << 5 | i >>> 27) + u << 0,
                s += (u ^ c & (i ^ u)) + _[6] - 1069501632,
                s = (s << 9 | s >>> 23) + i << 0,
                c += (i ^ u & (s ^ i)) + _[11] + 643717713,
                c = (c << 14 | c >>> 18) + s << 0,
                u += (s ^ i & (c ^ s)) + _[0] - 373897302,
                u = (u << 20 | u >>> 12) + c << 0,
                i += (c ^ s & (u ^ c)) + _[5] - 701558691,
                i = (i << 5 | i >>> 27) + u << 0,
                s += (u ^ c & (i ^ u)) + _[10] + 38016083,
                s = (s << 9 | s >>> 23) + i << 0,
                c += (i ^ u & (s ^ i)) + _[15] - 660478335,
                c = (c << 14 | c >>> 18) + s << 0,
                u += (s ^ i & (c ^ s)) + _[4] - 405537848,
                u = (u << 20 | u >>> 12) + c << 0,
                i += (c ^ s & (u ^ c)) + _[9] + 568446438,
                i = (i << 5 | i >>> 27) + u << 0,
                s += (u ^ c & (i ^ u)) + _[14] - 1019803690,
                s = (s << 9 | s >>> 23) + i << 0,
                c += (i ^ u & (s ^ i)) + _[3] - 187363961,
                c = (c << 14 | c >>> 18) + s << 0,
                u += (s ^ i & (c ^ s)) + _[8] + 1163531501,
                u = (u << 20 | u >>> 12) + c << 0,
                i += (c ^ s & (u ^ c)) + _[13] - 1444681467,
                i = (i << 5 | i >>> 27) + u << 0,
                s += (u ^ c & (i ^ u)) + _[2] - 51403784,
                s = (s << 9 | s >>> 23) + i << 0,
                c += (i ^ u & (s ^ i)) + _[7] + 1735328473,
                c = (c << 14 | c >>> 18) + s << 0,
                u += (s ^ i & (c ^ s)) + _[12] - 1926607734,
                u = (u << 20 | u >>> 12) + c << 0,
                b = u ^ c,
                i += (b ^ s) + _[5] - 378558,
                i = (i << 4 | i >>> 28) + u << 0,
                s += (b ^ i) + _[8] - 2022574463,
                s = (s << 11 | s >>> 21) + i << 0,
                g = s ^ i,
                c += (g ^ u) + _[11] + 1839030562,
                c = (c << 16 | c >>> 16) + s << 0,
                u += (g ^ c) + _[14] - 35309556,
                u = (u << 23 | u >>> 9) + c << 0,
                b = u ^ c,
                i += (b ^ s) + _[1] - 1530992060,
                i = (i << 4 | i >>> 28) + u << 0,
                s += (b ^ i) + _[4] + 1272893353,
                s = (s << 11 | s >>> 21) + i << 0,
                g = s ^ i,
                c += (g ^ u) + _[7] - 155497632,
                c = (c << 16 | c >>> 16) + s << 0,
                u += (g ^ c) + _[10] - 1094730640,
                u = (u << 23 | u >>> 9) + c << 0,
                b = u ^ c,
                i += (b ^ s) + _[13] + 681279174,
                i = (i << 4 | i >>> 28) + u << 0,
                s += (b ^ i) + _[0] - 358537222,
                s = (s << 11 | s >>> 21) + i << 0,
                g = s ^ i,
                c += (g ^ u) + _[3] - 722521979,
                c = (c << 16 | c >>> 16) + s << 0,
                u += (g ^ c) + _[6] + 76029189,
                u = (u << 23 | u >>> 9) + c << 0,
                b = u ^ c,
                i += (b ^ s) + _[9] - 640364487,
                i = (i << 4 | i >>> 28) + u << 0,
                s += (b ^ i) + _[12] - 421815835,
                s = (s << 11 | s >>> 21) + i << 0,
                g = s ^ i,
                c += (g ^ u) + _[15] + 530742520,
                c = (c << 16 | c >>> 16) + s << 0,
                u += (g ^ c) + _[2] - 995338651,
                u = (u << 23 | u >>> 9) + c << 0,
                i += (c ^ (u | ~s)) + _[0] - 198630844,
                i = (i << 6 | i >>> 26) + u << 0,
                s += (u ^ (i | ~c)) + _[7] + 1126891415,
                s = (s << 10 | s >>> 22) + i << 0,
                c += (i ^ (s | ~u)) + _[14] - 1416354905,
                c = (c << 15 | c >>> 17) + s << 0,
                u += (s ^ (c | ~i)) + _[5] - 57434055,
                u = (u << 21 | u >>> 11) + c << 0,
                i += (c ^ (u | ~s)) + _[12] + 1700485571,
                i = (i << 6 | i >>> 26) + u << 0,
                s += (u ^ (i | ~c)) + _[3] - 1894986606,
                s = (s << 10 | s >>> 22) + i << 0,
                c += (i ^ (s | ~u)) + _[10] - 1051523,
                c = (c << 15 | c >>> 17) + s << 0,
                u += (s ^ (c | ~i)) + _[1] - 2054922799,
                u = (u << 21 | u >>> 11) + c << 0,
                i += (c ^ (u | ~s)) + _[8] + 1873313359,
                i = (i << 6 | i >>> 26) + u << 0,
                s += (u ^ (i | ~c)) + _[15] - 30611744,
                s = (s << 10 | s >>> 22) + i << 0,
                c += (i ^ (s | ~u)) + _[6] - 1560198380,
                c = (c << 15 | c >>> 17) + s << 0,
                u += (s ^ (c | ~i)) + _[13] + 1309151649,
                u = (u << 21 | u >>> 11) + c << 0,
                i += (c ^ (u | ~s)) + _[4] - 145523070,
                i = (i << 6 | i >>> 26) + u << 0,
                s += (u ^ (i | ~c)) + _[11] - 1120210379,
                s = (s << 10 | s >>> 22) + i << 0,
                c += (i ^ (s | ~u)) + _[2] + 718787259,
                c = (c << 15 | c >>> 17) + s << 0,
                u += (s ^ (c | ~i)) + _[9] - 343485551,
                u = (u << 21 | u >>> 11) + c << 0,
                this.first ? (this.h0 = i + 1732584193 << 0,
                this.h1 = u - 271733879 << 0,
                this.h2 = c - 1732584194 << 0,
                this.h3 = s + 271733878 << 0,
                this.first = !1) : (this.h0 = this.h0 + i << 0,
                this.h1 = this.h1 + u << 0,
                this.h2 = this.h2 + c << 0,
                this.h3 = this.h3 + s << 0)
            }
            ,
            N.prototype.hex = function() {
                this.finalize();
                var i = this.h0
                  , u = this.h1
                  , c = this.h2
                  , s = this.h3;
                return f[i >>> 4 & 15] + f[i & 15] + f[i >>> 12 & 15] + f[i >>> 8 & 15] + f[i >>> 20 & 15] + f[i >>> 16 & 15] + f[i >>> 28 & 15] + f[i >>> 24 & 15] + f[u >>> 4 & 15] + f[u & 15] + f[u >>> 12 & 15] + f[u >>> 8 & 15] + f[u >>> 20 & 15] + f[u >>> 16 & 15] + f[u >>> 28 & 15] + f[u >>> 24 & 15] + f[c >>> 4 & 15] + f[c & 15] + f[c >>> 12 & 15] + f[c >>> 8 & 15] + f[c >>> 20 & 15] + f[c >>> 16 & 15] + f[c >>> 28 & 15] + f[c >>> 24 & 15] + f[s >>> 4 & 15] + f[s & 15] + f[s >>> 12 & 15] + f[s >>> 8 & 15] + f[s >>> 20 & 15] + f[s >>> 16 & 15] + f[s >>> 28 & 15] + f[s >>> 24 & 15]
            }
            ,
            N.prototype.toString = N.prototype.hex,
            N.prototype.digest = function() {
                this.finalize();
                var i = this.h0
                  , u = this.h1
                  , c = this.h2
                  , s = this.h3;
                return [i & 255, i >>> 8 & 255, i >>> 16 & 255, i >>> 24 & 255, u & 255, u >>> 8 & 255, u >>> 16 & 255, u >>> 24 & 255, c & 255, c >>> 8 & 255, c >>> 16 & 255, c >>> 24 & 255, s & 255, s >>> 8 & 255, s >>> 16 & 255, s >>> 24 & 255]
            }
            ,
            N.prototype.array = N.prototype.digest,
            N.prototype.arrayBuffer = function() {
                this.finalize();
                var i = new ArrayBuffer(16)
                  , u = new Uint32Array(i);
                return u[0] = this.h0,
                u[1] = this.h1,
                u[2] = this.h2,
                u[3] = this.h3,
                i
            }
            ,
            N.prototype.buffer = N.prototype.arrayBuffer,
            N.prototype.base64 = function() {
                for (var i, u, c, s = "", b = this.array(), g = 0; g < 15; )
                    i = b[g++],
                    u = b[g++],
                    c = b[g++],
                    s += y[i >>> 2] + y[(i << 4 | u >>> 4) & 63] + y[(u << 2 | c >>> 6) & 63] + y[c & 63];
                return i = b[g],
                s += y[i >>> 2] + y[i << 4 & 63] + "==",
                s
            }
            ;
            function z(i, u) {
                var c, s = v(i);
                if (i = s[0],
                s[1]) {
                    var b = [], g = i.length, _ = 0, k;
                    for (c = 0; c < g; ++c)
                        k = i.charCodeAt(c),
                        k < 128 ? b[_++] = k : k < 2048 ? (b[_++] = 192 | k >>> 6,
                        b[_++] = 128 | k & 63) : k < 55296 || k >= 57344 ? (b[_++] = 224 | k >>> 12,
                        b[_++] = 128 | k >>> 6 & 63,
                        b[_++] = 128 | k & 63) : (k = 65536 + ((k & 1023) << 10 | i.charCodeAt(++c) & 1023),
                        b[_++] = 240 | k >>> 18,
                        b[_++] = 128 | k >>> 12 & 63,
                        b[_++] = 128 | k >>> 6 & 63,
                        b[_++] = 128 | k & 63);
                    i = b
                }
                i.length > 64 && (i = new N(!0).update(i).array());
                var R = []
                  , ht = [];
                for (c = 0; c < 64; ++c) {
                    var St = i[c] || 0;
                    R[c] = 92 ^ St,
                    ht[c] = 54 ^ St
                }
                N.call(this, u),
                this.update(ht),
                this.oKeyPad = R,
                this.inner = !0,
                this.sharedMemory = u
            }
            z.prototype = new N,
            z.prototype.finalize = function() {
                if (N.prototype.finalize.call(this),
                this.inner) {
                    this.inner = !1;
                    var i = this.array();
                    N.call(this, this.sharedMemory),
                    this.update(this.oKeyPad),
                    this.update(i),
                    N.prototype.finalize.call(this)
                }
            }
            ;
            var H = L();
            H.md5 = H,
            H.md5.hmac = G(),
            d ? t.exports = H : r.md5 = H
        }
        )()
    }
    )(Qe);
    var tn = Qe.exports;


On = {
    "auth_type": "password",
    "brand": "xy",
    "client_mac": "web",
    "client_ver": "7.0",
    "entry_id": "web",
    "login_id": "USER",
    "sales_id": "0",
    "spid": "0000",
    "timestamp": 1728228337,
    "user_type": "zf"
}

we = tn.md5("PASS").toString().toUpperCase()
const ur = `${Object.entries(On).map( ([J,lr]) => `${J}=${lr}`).join("&")}&${we}`, cr = tn.md5(ur).toString()
console.log(cr)
