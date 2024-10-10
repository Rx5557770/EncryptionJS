var encryption_obj;
var window = global;

(function(t) {
    function e(e) {
        for (var i, a, r = e[0], c = e[1], u = e[2], p = 0, l = []; p < r.length; p++)
            a = r[p],
            Object.prototype.hasOwnProperty.call(n, a) && n[a] && l.push(n[a][0]),
            n[a] = 0;
        for (i in c)
            Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
        h && h(e);
        while (l.length)
            l.shift()();
        return s.push.apply(s, u || []),
        o()
    }
    function o() {
        for (var t, e = 0; e < s.length; e++) {
            for (var o = s[e], i = !0, r = 1; r < o.length; r++) {
                var c = o[r];
                0 !== n[c] && (i = !1)
            }
            i && (s.splice(e--, 1),
            t = a(a.s = o[0]))
        }
        return t
    }
    var i = {}
      , n = {
        login: 0
    }
      , s = [];
    function a(e) {
        if (i[e])
            return i[e].exports;
        var o = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };

        return t[e].call(o.exports, o, o.exports, a),
        o.l = !0,
        o.exports
    }
    a.m = t,
    a.c = i,
    a.d = function(t, e, o) {
        a.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }
    ,
    a.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    a.t = function(t, e) {
        if (1 & e && (t = a(t)),
        8 & e)
            return t;
        if (4 & e && "object" === typeof t && t && t.__esModule)
            return t;
        var o = Object.create(null);
        if (a.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                a.d(o, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return o
    }
    ,
    a.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        }
        : function() {
            return t
        }
        ;
        return a.d(e, "a", e),
        e
    }
    ,
    a.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    a.p = "/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || []
      , c = r.push.bind(r);
    r.push = e,
    r = r.slice();
    for (var u = 0; u < r.length; u++)
        e(r[u]);
    var h = c;
    s.push([2, "chunk-vendors", "chunk-common"]),
    o()

    encryption_obj=a
}
)({
    2: function(t, e, o) {
        t.exports = o("2ce0")
    },
    "00d8": function(e, t) {
        (function() {
            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
              , n = {
                rotl: function(e, t) {
                    return e << t | e >>> 32 - t
                },
                rotr: function(e, t) {
                    return e << 32 - t | e >>> t
                },
                endian: function(e) {
                    if (e.constructor == Number)
                        return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                    for (var t = 0; t < e.length; t++)
                        e[t] = n.endian(e[t]);
                    return e
                },
                randomBytes: function(e) {
                    for (var t = []; e > 0; e--)
                        t.push(Math.floor(256 * Math.random()));
                    return t
                },
                bytesToWords: function(e) {
                    for (var t = [], n = 0, i = 0; n < e.length; n++,
                    i += 8)
                        t[i >>> 5] |= e[n] << 24 - i % 32;
                    return t
                },
                wordsToBytes: function(e) {
                    for (var t = [], n = 0; n < 32 * e.length; n += 8)
                        t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                    return t
                },
                bytesToHex: function(e) {
                    for (var t = [], n = 0; n < e.length; n++)
                        t.push((e[n] >>> 4).toString(16)),
                        t.push((15 & e[n]).toString(16));
                    return t.join("")
                },
                hexToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n += 2)
                        t.push(parseInt(e.substr(n, 2), 16));
                    return t
                },
                bytesToBase64: function(e) {
                    for (var n = [], i = 0; i < e.length; i += 3)
                        for (var r = e[i] << 16 | e[i + 1] << 8 | e[i + 2], o = 0; o < 4; o++)
                            8 * i + 6 * o <= 8 * e.length ? n.push(t.charAt(r >>> 6 * (3 - o) & 63)) : n.push("=");
                    return n.join("")
                },
                base64ToBytes: function(e) {
                    e = e.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var n = [], i = 0, r = 0; i < e.length; r = ++i % 4)
                        0 != r && n.push((t.indexOf(e.charAt(i - 1)) & Math.pow(2, -2 * r + 8) - 1) << 2 * r | t.indexOf(e.charAt(i)) >>> 6 - 2 * r);
                    return n
                }
            };
            e.exports = n
        }
        )()
    },
    "9a63": function(e, t) {
        var n = {
            utf8: {
                stringToBytes: function(e) {
                    return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
                },
                bytesToString: function(e) {
                    return decodeURIComponent(escape(n.bin.bytesToString(e)))
                }
            },
            bin: {
                stringToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n++)
                        t.push(255 & e.charCodeAt(n));
                    return t
                },
                bytesToString: function(e) {
                    for (var t = [], n = 0; n < e.length; n++)
                        t.push(String.fromCharCode(e[n]));
                    return t.join("")
                }
            }
        };
        e.exports = n
    },
    "044b": function(e, t) {
        function n(e) {
            return !!e.constructor && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }
        function i(e) {
            return "function" === typeof e.readFloatLE && "function" === typeof e.slice && n(e.slice(0, 0))
        }
        /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
        e.exports = function(e) {
            return null != e && (n(e) || i(e) || !!e._isBuffer)
        }
    },
    "2ce0": function(t, e, o) {
        "use strict";
        o.r(e);
        o("7f7f"),
        o("ac6a"),
        o("55dd"),
        o("6b54"),
        o("be4f"),
        o("450d");
        var i, n = o("896a"), s = o.n(n), a = (o("016f"),
        o("486c")), r = o.n(a), c = (o("6611"),
        o("e772")), u = o.n(c), h = (o("1f1a"),
        o("4e4b")), p = o.n(h), l = (o("9e1f"),
        o("6ed5")), g = o.n(l), d = (o("46a1"),
        o("e5f2")), _ = o.n(d), f = (o("cadf"),
        o("551c"),
        o("f751"),
        o("097d"),
        o("9ab4")), y = (o("76ca"),
        o("db4d"),
        o("60a3")), m = o("65d9"), b = o.n(m), T = o("abf2"), E = function() {
            var t = this
              , e = t._self._c;
            t._self._setupProxy;
            return e("div", {
                staticClass: "flex_column_center",
                staticStyle: {
                    "z-index": "999"
                }
            }, [e("p", {
                staticClass: "pos_warm_txt",
                staticStyle: {
                    color: "#fff"
                }
            }, [t._v(t._s(t.$t("public.share37")))]), t.ispopwindow ? e("div", {
                staticClass: "mar_t10"
            }, [e("a", {
                attrs: {
                    href: "javascript:void(0)"
                },
                on: {
                    click: function(e) {
                        return t.setbindurltype("wechart")
                    }
                }
            }, [e("i", {
                staticClass: "iconfont icon-weixin"
            })]), e("a", {
                attrs: {
                    href: "javascript:void(0)"
                },
                on: {
                    click: function(e) {
                        return t.setbindurltype("qq")
                    }
                }
            }, [e("i", {
                staticClass: "iconfont icon-QQ mar_l20"
            })]), e("a", {
                attrs: {
                    href: "javascript:void(0)"
                },
                on: {
                    click: function(e) {
                        return t.setbindurltype("weibo")
                    }
                }
            }, [e("i", {
                staticClass: "iconfont icon-weibo mar_l20"
            })])]) : t._e(), t.ispopwindow ? t._e() : e("ul", {
                staticClass: "flex_row_around",
                staticStyle: {
                    width: "240px",
                    margin: "0 auto"
                }
            }, [e("li", {
                on: {
                    click: t.setbindurltype
                }
            }, [e("a", {
                staticClass: "binding_wechat",
                attrs: {
                    href: t.wechart_url
                }
            })]), e("li", {
                on: {
                    click: t.setbindurltype
                }
            }, [e("a", {
                staticClass: "binding_qq",
                attrs: {
                    href: t.qq_url
                }
            })]), e("li", {
                on: {
                    click: t.setbindurltype
                }
            }, [e("a", {
                staticClass: "binding_weibo",
                attrs: {
                    href: t.weibo_url
                }
            })])])])
        }, O = [], S = function() {
            function t() {
                this.open_id = "",
                this.state = "",
                this.open_type = 0
            }
            return t.OPEN_TYPE_QQ = 1,
            t.OPEN_TYPE_WEXIN = 2,
            t.OPEN_TYPE_ALIPAY = 3,
            t.OPEN_TYPE_GOOGLE = 8,
            t.OPEN_TYPE_TWITTER = 9,
            t.OPEN_TYPE_FACEBOOK = 10,
            t
        }(), w = (function() {
            function t() {
                this.open_id = "",
                this.union_id = "",
                this.account_token = "",
                this.open_type = 0
            }
            t.OPEN_TYPE_GOOGLE = 8,
            t.OPEN_TYPE_TWITTER = 9,
            t.OPEN_TYPE_FACEBOOK = 10
        }(),
        function() {
            function t() {}
        }(),
        o("1831")), P = o("1157"), v = o.n(P), I = o("463f"), C = (o("386d"),
        o("28a5"),
        function() {
            function t() {
                this.authorize_url = "https://api.twitter.com/oauth/authenticate?oauth_token=",
                this.step1_method = "POST",
                this.step1_url = "https://twitter.com/oauth/request_token",
                this.step1_nonce = Math.ceil(100 * Math.random()).toString(),
                this.step1_timestamp = Math.floor((new Date).getTime() / 1e3).toString()
            }
            return t.prototype.init = function(t, e) {
                var o = this.getOAuthStr(t, e)
                  , i = null
                  , n = new XMLHttpRequest;
                n.withCredentials = !0,
                n.addEventListener("readystatechange", (function() {
                    4 === this.readyState && console.log(this.responseText)
                }
                )),
                n.open("POST", "https://twitter.com/oauth/request_token"),
                n.setRequestHeader("Authorization", o),
                n.setRequestHeader("cache-control", "no-cache"),
                n.send(i)
            }
            ,
            t.prototype.getSignature = function(t, e) {
                this.step1_nonce,
                this.step1_timestamp;
                var o = "";
                return o
            }
            ,
            t.prototype.getOAuthStr = function(t, e) {
                var o = this.getSignature(t, e)
                  , i = 'OAuth oauth_consumer_key=\\"' + t + '\\",oauth_signature_method=\\"HMAC-SHA1\\"';
                return i += ',oauth_timestamp=\\"' + this.step1_timestamp + '\\",oauth_nonce=\\"' + this.step1_nonce,
                i += '\\",oauth_version=\\"1.0\\",oauth_signature=\\"' + o + '\\"',
                i
            }
            ,
            t.prototype.closePopup = function() {
                this.popup && !this.popup.closed && this.popup.close()
            }
            ,
            t.prototype.getUrlQueryObject = function(t) {
                var e, o = {};
                if (!t)
                    return !1;
                for (var i = t.slice(1).split("&"), n = 0; n < i.length; n++)
                    e = i[n].split("="),
                    o[e[0]] = e[1];
                return o
            }
            ,
            t.prototype.sendError = function(t, e) {
                var o = {
                    success: !1,
                    message: t || "Some Error Occurred"
                };
                "function" === typeof e && e(o)
            }
            ,
            t.prototype.getOAuthToken = function(t) {
                var e = new XMLHttpRequest;
                e.onreadystatechange = function() {
                    if (4 != this.readyState)
                        ;
                    else {
                        if (0 === this.status)
                            return t("Internet Disconnected/Connection Timeout");
                        try {
                            var e = JSON.parse(this.response);
                            t(null, e)
                        } catch (o) {
                            t(o.message)
                        }
                    }
                }
                ,
                e.open("GET", this.request_url, !0),
                e.send()
            }
            ,
            t.prototype.authorize = function(t) {
                if (!this.popup)
                    return t("Popup Not initialized");
                this.popup.location.href = this.authorize_url + this.oauth_token;
                var e = function e() {
                    setTimeout((function() {
                        return this.popup.closed ? t(null, this.getUrlQueryObject(this.popup.location.search)) : e()
                    }
                    ), 25)
                };
                e()
            }
            ,
            t.prototype.connect = function(t) {
                if (!this.request_url)
                    return this.sendError("Request URL not provided", t);
                this.popup = window.open(null, "_blank", "height=400,width=800,left=250,top=100,resizable=yes", !0),
                this.getOAuthToken((function(e, o) {
                    return e ? (this.closePopup(),
                    this.sendError(e, t)) : o.success ? (this.oauth_token = o.oauth_token,
                    void this.authorize((function(e, o) {
                        return e ? (this.closePopup(),
                        this.sendError(e, t)) : o && o.oauth_token ? o.oauth_token !== this.oauth_token ? this.sendError("Invalid OAuth Token received from Twitter.", t) : void t({
                            success: !0,
                            oauth_token: o.oauth_token,
                            oauth_verifier: o.oauth_verifier
                        }) : (this.closePopup(),
                        this.sendError("OAuth Token not Found", t))
                    }
                    ))) : (this.closePopup(),
                    this.sendError(o.message, t))
                }
                ))
            }
            ,
            t
        }()), k = C, R = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.facebookIsInit = !1,
                e.googleIsInit = !1,
                e.twitterUtil = null,
                e.http = new w["a"],
                e.isLoading = !1,
                e
            }
            return Object(f["d"])(e, t),
            e.prototype.execute = function() {}
            ,
            e.prototype.setBaseUrl = function(t) {
                this.http.setBaseUrl(t)
            }
            ,
            e.prototype.init = function() {}
            ,
            e.prototype.initFaceBookSdk = function(t) {
                I["a"].log("facebook初始化...");
                var e = this;
                v()(document).ready((function() {
                    v.a.ajaxSetup({
                        cache: !0
                    }),
                    v.a.getScript("https://connect.facebook.net/en_US/sdk.js", (function() {
                        FB.init({
                            appId: t,
                            version: "v3.2"
                        }),
                        I["a"].log("facebook初始化完成!"),
                        e.facebookIsInit = !0,
                        e.sdkInitSuccess(S.OPEN_TYPE_FACEBOOK)
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.onOpenFacebook = function() {
                if (this.facebookIsInit) {
                    var t = this;
                    FB.login((function(e) {
                        e.authResponse ? (I["a"].log("face登录成功!", e),
                        t.loginSuccess(e.authResponse.userID, S.OPEN_TYPE_FACEBOOK)) : alert("login error!")
                    }
                    ))
                }
            }
            ,
            e.prototype.initTwitterSdk = function(t, e) {
                null == this.twitterUtil && (this.twitterUtil = new k),
                this.twitterUtil.init(t, e)
            }
            ,
            e.prototype.initGoogleSdk = function(t) {
                I["a"].log("google sdk初始化...");
                var e = this;
                v()(document).ready((function() {
                    v.a.ajaxSetup({
                        cache: !0
                    }),
                    v.a.getScript("https://apis.google.com/js/api:client.js", (function() {
                        gapi.load("auth2", (function() {
                            e.googleAuth2 = gapi.auth2.init({
                                client_id: t,
                                cookiepolicy: "single_host_origin",
                                scope: "profile"
                            }),
                            e.onOpenGoogle(document.getElementById("googleBtn")),
                            I["a"].log("google初始化完成!"),
                            e.googleIsInit = !0,
                            e.sdkInitSuccess(S.OPEN_TYPE_GOOGLE)
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.sdkInitSuccess = function(t) {}
            ,
            e.prototype.onOpenGoogle = function(t) {
                var e = this;
                this.googleAuth2.attachClickHandler(t, {}, (function(t) {
                    var o = e.googleAuth2.currentUser.get().getBasicProfile();
                    I["a"].log("google登录成功!", o),
                    e.loginSuccess(o.getId(), S.OPEN_TYPE_GOOGLE)
                }
                ), (function(t) {
                    console.log(t)
                }
                ))
            }
            ,
            e.prototype.loginSuccess = function(t, e) {}
            ,
            e.prototype.autoForeignlogin = function(t, e) {
                return Object(f["b"])(this, void 0, void 0, (function() {
                    var o;
                    return Object(f["e"])(this, (function(i) {
                        return o = t,
                        o += "?open_id=" + e.open_id,
                        o += "&state=" + e.state,
                        o += "&open_type=" + e.open_type,
                        window.location.href = o,
                        [2]
                    }
                    ))
                }
                ))
            }
            ,
            e = Object(f["c"])([b.a], e),
            e
        }(y["c"]), L = R, N = o("9453"), M = o("9347"), A = o("dfdf"), U = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.webParam = A["a"].getInstace(),
                e.base_url = "",
                e.languageType = "",
                e.qq_url = "",
                e.wechart_url = "",
                e.weibo_url = "",
                e.facebook_appId = "182452479351836",
                e.twitter_appId = "15926672",
                e.twitter_secret = "MVA4G99tUJ1FRpierp3I5KLmknBTxQqMMXv5FhV7hLOKf",
                e.google_appId = "356035932087-e3rp0iottdavj4b09sgjo9kmc3887ov8.apps.googleusercontent.com",
                e
            }
            return Object(f["d"])(e, t),
            e.prototype.created = function() {
                this.languageType = M["a"].getLanguageType(this.webParam.language),
                this.setBaseUrl(N["a"].getBaseUrl()),
                this.base_url = N["a"].getBaseUrl(),
                this.webParam.region_code,
                M["a"].REGION_CODE_0,
                this.weibo_url = "https://api.weibo.com/oauth2/authorize?client_id=825933425&response_type=code&redirect_uri=https://webapi.nn.com/api/auth/open/sina&state=" + this.webParam.region_code + "_0_" + this.languageType + "_2",
                this.wechart_url = "https://open.weixin.qq.com/connect/qrconnect?appid=wx99a90917c0647828&redirect_uri=https://webapi.leigod.com/api/auth/open/wx&response_type=code&scope=snsapi_login&state=" + this.webParam.region_code + "_0_" + this.languageType + "_2&connect_redirect=1#wechat_redirect",
                this.qq_url = "https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=101523719&redirect_uri=https://webapi.nn.com/api/auth/open/qq&state=" + this.webParam.region_code + "_0_" + this.languageType + "_2&scope=get_user_info"
            }
            ,
            e.prototype.onClickOpenFacebook = function() {
                this.facebookIsInit && this.onOpenFacebook()
            }
            ,
            e.prototype.onClickOpenGoogle = function() {}
            ,
            e.prototype.loginSuccess = function(t, e) {
                if ("" != t && null != t) {
                    I["a"].log("授权userId:" + t);
                    var o = new S;
                    o.open_id = t,
                    o.open_type = e,
                    o.state = this.webParam.region_code + "_0";
                    var i = N["a"].getBaseUrl() + w["a"].URL_AUTH_FOREIGN_LOGIN;
                    this.autoForeignlogin(i, o)
                } else
                    alert("authorization failed!!")
            }
            ,
            e.prototype.setbindurltype = function(t) {
                if (this.ispopwindow) {
                    var e = document.body.clientWidth / 2 + v()("#userLoginRegisterFind .el-dialog").width() / 2;
                    switch (t) {
                    case "qq":
                        window.open(this.qq_url, "leigod_three_login", "height=630, width=460, top=100, left=" + e + ",toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, status=no");
                        break;
                    case "wechart":
                        window.open(this.wechart_url, "leigod_three_login", "height=630, width=460, top=100, left=" + e + ",toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, status=no");
                        break;
                    case "weibo":
                        window.open(this.weibo_url, "leigod_three_login", "height=630, width=630, top=100, left=" + e + ",toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, status=no");
                        break
                    }
                }
                this.$emit("setbindurltype")
            }
            ,
            Object(f["c"])([Object(y["b"])(Boolean)], e.prototype, "ispopwindow", void 0),
            e = Object(f["c"])([y["a"]], e),
            e
        }(L), G = U, D = G, j = o("0c7c"), F = Object(j["a"])(D, E, O, !1, null, null, null), Y = F.exports, H = o("a925"), K = o("b724"), q = o("7d83"), B = o("3c6c"), x = o("9d9a"), $ = o("6821f"), W = o.n($), V = o("255e"), z = o("04bd"), J = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.errorMsg = "",
                e.loginType = 0,
                e.country_code_list = [],
                e.countryCode = {
                    code: "",
                    group: "",
                    ico: "",
                    iso_code: "",
                    name: ""
                },
                e.country_code = "",
                e.phone = "",
                e.email = "",
                e.phonePassword = "",
                e.emailPassword = "",
                e.isKeepPw = !1,
                e.isPwMd5 = !1,
                e.areaCodeList = [],
                e.areaCodeListArr = [],
                e.username = "",
                e.commonPsaaword = "",
                e.smsType = 0,
                e.http = new w["a"],
                e.isLoading = !1,
                e.loadingMsg = "",
                e.notifTitle = x["a"].getTipsMsg(x["a"].KEY_NOTIF_SUCCESS_TITLE),
                e.notifMessage = "",
                e.notifType = "success",
                e.notifNum = 0,
                e.imgCaptchaCode = "",
                e.isimgVerification = 0,
                e.imgCaptchaM = new K["c"],
                e.smscode = "",
                e.smsCapchaM = new K["e"],
                e.bind_status = "",
                e.voiceShow = !1,
                e.smsCountDownNum = 0,
                e
            }
            return Object(f["d"])(e, t),
            e.prototype.init = function() {
                var t = localStorage.getItem(q["a"].STORAGES_PHONE);
                null != t && "undefined" != t && (this.phone = t,
                this.username = t);
                var e = localStorage.getItem(q["a"].STORAGES_EMAIL);
                null != e && "undefined" != e && (this.email = e,
                this.username = e),
                this.changeLoginType(0)
            }
            ,
            e.prototype.execute = function() {}
            ,
            e.prototype.setBaseUrl = function(t) {
                this.http.setBaseUrl(t)
            }
            ,
            e.prototype.getAreaCodeList = function() {
                return Object(f["b"])(this, void 0, void 0, (function() {
                    var t, e, o, i, n;
                    return Object(f["e"])(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            return t = w["a"].URL_AUTH_COUNTRY,
                            e = {},
                            o = this,
                            [4, this.http.get(t, e)];
                        case 1:
                            if (o.backData = s.sent(),
                            this.backData.code == w["a"].HTTP_SUCCESS_NET_CODE)
                                for (n in this.country_code = this.backData.data.now_country,
                                i = localStorage.getItem(q["a"].STORAGES_PHONE_REGION),
                                null != i && void 0 != i && (this.country_code = i),
                                this.backData.data.list_country)
                                    this.areaCodeList.push(this.backData.data.list_country[n]);
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.getAreaCodeInfoList = function(t) {
                return Object(f["b"])(this, void 0, void 0, (function() {
                    var e, o, i, n, s, a, r, c, u, h = this;
                    return Object(f["e"])(this, (function(p) {
                        switch (p.label) {
                        case 0:
                            return [4, V["a"].getInstance().getRegincode(t)];
                        case 1:
                            return e = p.sent(),
                            o = this,
                            [4, V["a"].getInstance().getCounteyCode(t)];
                        case 2:
                            if (o.backData = p.sent(),
                            this.backData.code == w["a"].HTTP_SUCCESS_NET_CODE) {
                                for (this.areaCodeListArr = [],
                                this.countryCode = this.backData.data.list_country.filter((function(t) {
                                    return t.code == e.mobile_code
                                }
                                ))[0],
                                i = localStorage.getItem(q["a"].STORAGES_PHONE_REGION),
                                null != i && "undefined" != i && (this.countryCode = this.backData.data.list_country.filter((function(t) {
                                    return t.code == i
                                }
                                ))[0]),
                                this.country_code = this.countryCode.code,
                                this.backData.data.list_country.map((function(t) {
                                    for (var e = !1, o = 0; o < h.backData.data.top_country.length; o++)
                                        t.code == h.backData.data.top_country[o].code && (e = !0);
                                    e || h.areaCodeListArr.push(t)
                                }
                                )),
                                n = 0,
                                s = [],
                                a = {
                                    label: "",
                                    options: []
                                },
                                r = 0; r < this.areaCodeListArr.length; r++)
                                    r == this.areaCodeListArr.length - 1 ? (c = {
                                        label: "",
                                        options: []
                                    },
                                    c.label = this.areaCodeListArr[r].group,
                                    c.options = this.areaCodeListArr.slice(n, r + 1),
                                    s.push(c)) : this.areaCodeListArr[r].group != this.areaCodeListArr[r + 1].group && (u = {
                                        label: "",
                                        options: []
                                    },
                                    u.label = this.areaCodeListArr[r].group,
                                    u.options = this.areaCodeListArr.slice(n, r + 1),
                                    s.push(u),
                                    n = r + 1);
                                a.options = this.backData.data.top_country,
                                s.unshift(a),
                                this.country_code_list = s
                            }
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.changeLoginType = function(t) {
                this.loginType = t;
                var e = null;
                0 != t || this.isPwMd5 || (e = localStorage.getItem(q["a"].STORAGES_PHONE_PW),
                null == e && (e = "")),
                1 != t || this.isPwMd5 || (e = localStorage.getItem(q["a"].STORAGES_EMAIL_PW),
                null == e && (e = "")),
                this.isKeepPw = "" != e,
                this.isPwMd5 = !1,
                0 == t && (this.phonePassword = e),
                1 == t && (this.emailPassword = e)
            }
            ,
            e.prototype.onPasswordInput = function(t) {
                if (0 == t) {
                    var e = localStorage.getItem(q["a"].STORAGES_PHONE_PW);
                    if (this.phonePassword == e)
                        return
                }
                if (1 == t) {
                    e = localStorage.getItem(q["a"].STORAGES_EMAIL_PW);
                    if (this.emailPassword == e)
                        return
                }
                this.isPwMd5 = !0
            }
            ,
            e.prototype.onPhoneLogin = function() {
                var t = w["a"].URL_AUTH_LOGIN_V1
                  , e = this.phonePassword;
                this.isPwMd5 && (e = W()(this.phonePassword).toString());
                var o = new B["m"];
                o.country_code = this.country_code,
                o.username = this.phone,
                o.password = e,
                o.src_channel = q["a"].getSrcChannel(),
                localStorage.setItem(q["a"].STORAGES_PHONE, this.phone),
                localStorage.setItem(q["a"].STORAGES_USERNAME, this.phone),
                localStorage.setItem(q["a"].STORAGES_PHONE_REGION, this.country_code),
                this.isKeepPw ? (localStorage.setItem(q["a"].STORAGES_PHONE_PW, e),
                localStorage.setItem(q["a"].STORAGES_PW, e)) : (localStorage.removeItem(q["a"].STORAGES_PHONE_PW),
                localStorage.removeItem(q["a"].STORAGES_PHONE_REGION)),
                this.loginIn(t, o, {
                    isSign: !0
                })
            }
            ,
            e.prototype.onEmaillLogin = function() {
                var t = w["a"].URL_AUTH_LOGIN_V1
                  , e = this.emailPassword;
                this.isPwMd5 && (e = W()(this.emailPassword).toString());
                var o = new B["m"];
                o.username = this.email,
                o.password = e,
                o.src_channel = q["a"].getSrcChannel(),
                localStorage.setItem(q["a"].STORAGES_EMAIL, this.email),
                localStorage.setItem(q["a"].STORAGES_USERNAME, this.email),
                this.isKeepPw ? (localStorage.setItem(q["a"].STORAGES_EMAIL_PW, e),
                localStorage.setItem(q["a"].STORAGES_PW, e)) : localStorage.removeItem(q["a"].STORAGES_EMAIL_PW),
                this.loginIn(t, o, {
                    isSign: !0
                })
            }
            ,
            e.prototype.loginIn = function(t, e, o) {
                return Object(f["b"])(this, void 0, void 0, (function() {
                    var i, n;
                    return Object(f["e"])(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            return this.isLoading = !0,
                            this.loadingMsg = x["a"].getTipsMsg(x["a"].KEY_LOADING),
                            i = this,
                            [4, this.http.post(t, e, o)];
                        case 1:
                            return i.backData = s.sent(),
                            this.backData.code == w["a"].HTTP_SUCCESS_NET_CODE ? (this.isLoading = !1,
                            n = this.backData.data,
                            q["a"].addUserToken(n.login_info),
                            q["a"].addUserInfo(n.user_info),
                            this.onLoginSuccess()) : (this.isLoading = !1,
                            this.onLoginFaild(this.backData)),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.onLoginSuccess = function() {}
            ,
            e.prototype.onLoginFaild = function(t) {}
            ,
            e.prototype.registerIsCaptcha = function() {
                return Object(f["b"])(this, void 0, void 0, (function() {
                    return Object(f["e"])(this, (function(t) {
                        return this.getGeetest(),
                        [2]
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.onGetCaptcha = function() {
                return Object(f["b"])(this, void 0, void 0, (function() {
                    var t, e, o;
                    return Object(f["e"])(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return this.isimgVerification = 1,
                            t = w["a"].URL_CODE_CAPTCHA,
                            e = new K["d"],
                            o = this,
                            [4, this.http.get(t, e)];
                        case 1:
                            return o.backData = i.sent(),
                            this.backData.code == w["a"].HTTP_SUCCESS_NET_CODE && (this.imgCaptchaM = this.backData.data),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.onGetSmscode = function(t, e) {
                return Object(f["b"])(this, void 0, void 0, (function() {
                    var o, i, n;
                    return Object(f["e"])(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            return o = "",
                            0 == t ? o = w["a"].URL_CODE_SMSCODE : 1 == t && (o = w["a"].URL_CODE_VOICE),
                            i = new K["f"],
                            i.phone = this.phone,
                            i.country_code = this.country_code,
                            i.state = e,
                            i.checkcode = this.imgCaptchaCode,
                            i.checkcode_key = this.imgCaptchaM.key,
                            0 == this.ValidType && (i.geetest_validate = this.GeetModel),
                            this.isLoading = !0,
                            this.loadingMsg = x["a"].getTipsMsg(x["a"].KEY_LOADING),
                            n = this,
                            [4, this.http.post(o, i)];
                        case 1:
                            return n.backData = s.sent(),
                            this.isLoading = !1,
                            this.backData.code == w["a"].HTTP_SUCCESS_NET_CODE ? (this.smsCapchaM = this.backData.data,
                            this.bind_status = this.backData.data.bind_status,
                            this.voiceShow = !0,
                            this.onGetSmscodeSuccess()) : (this.onGetSmscodeFaild(this.backData),
                            1 == this.ValidType && this.onGetCaptcha()),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.onGetSmscodeSuccess = function() {
                this.smsCountDownNum = 60;
                var t = this;
                M["a"].countDown(this.smsCountDownNum, 1, (function(e) {
                    t.smsCountDownNum = e
                }
                )),
                this.SmscodeSuccessTip()
            }
            ,
            e.prototype.SmscodeSuccessTip = function() {}
            ,
            e.prototype.onGetSmscodeFaild = function(t) {}
            ,
            e.prototype.bindPhone = function() {
                return Object(f["b"])(this, void 0, void 0, (function() {
                    var t, e, o, i;
                    return Object(f["e"])(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return this.isLoading = !0,
                            t = q["a"].getUserToken().account_token,
                            e = w["a"].URL_USER_BIND_PHONE,
                            o = new B["e"],
                            o.account_token = t,
                            o.phone = this.phone,
                            o.smscode = this.smscode,
                            o.smscode_key = this.smsCapchaM.smscode_key,
                            o.country_code = this.country_code,
                            i = this,
                            [4, this.http.post(e, o)];
                        case 1:
                            return i.backData = n.sent(),
                            this.isLoading = !1,
                            this.backData.code == w["a"].HTTP_SUCCESS_NET_CODE ? this.bindPhoneSuccess(this.backData.msg) : this.bindPhoneFaild(this.backData),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.bindPhoneSuccess = function(t) {}
            ,
            e.prototype.bindPhoneFaild = function(t) {}
            ,
            e.prototype.tokenExpired = function(t) {
                void 0 === t && (t = "")
            }
            ,
            e = Object(f["c"])([y["a"]], e),
            e
        }(z["a"]), Q = o("d939"), X = o("b971"), Z = o("5f2d"), tt = o("a306"), et = o("e6ff"), ot = o("01ce");
        y["c"].prototype.$notify = _.a,
        y["c"].prototype.$msgbox = g.a,
        y["c"].prototype.$alert = g.a.alert,
        y["c"].use(p.a),
        y["c"].use(u.a),
        y["c"].use(r.a),
        y["c"].use(s.a),
        y["c"].use(H["a"]);
        A["a"].getInstace(M["a"].REGION_CODE_1, M["a"].ZH_CN);
        var it = Z["a"].getInstance();
        it.init();
        var nt = new H["a"](it)
          , st = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.webParam = A["a"].getInstace(),
                e.activityInfo = new tt["a"],
                e.bannerImg = "",
                e.activeLink = "",
                e.imageHeadUrl = "",
                e.isshowLogin = !0,
                e
            }
            return Object(f["d"])(e, t),
            e.prototype.created = function() {
                N["a"].log("注册log"),
                q["a"].saveParam(),
                this.setBaseUrl(N["a"].getBaseUrl()),
                this.imageHeadUrl = N["a"].getImgBaseUrl(),
                this.init(),
                this.getActivityInfo(),
                this.getAreaCodeInfoList(N["a"].getGEOIPUrl()),
                this.getDownloadUrl();
                var t = M["a"].getUrlParam("bind");
                "bindMobile" == t && (this.isshowLogin = !1,
                this.registerIsCaptcha())
            }
            ,
            e.prototype.onChecked = function(t) {
                if (0 == this.loginType) {
                    var e = "$virtualNum_" + this.phone;
                    sessionStorage.setItem(e, 1)
                }
                this.clickLogin()
            }
            ,
            e.prototype.onChangeLanguage = function(t) {
                it.changeLanguage(t),
                nt.locale = it.locale,
                this.webParam.language = t
            }
            ,
            e.prototype.getDownloadUrl = function() {
                return Object(f["b"])(this, void 0, void 0, (function() {
                    return Object(f["e"])(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, V["a"].getInstance().download(!0)];
                        case 1:
                            return t.sent(),
                            q["a"].getRegionCodes(),
                            q["a"].getLanguage(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.onSelectCountryCode = function(t) {
                var e = this;
                this.country_code_list.map((function(o) {
                    for (var i = 0; i < o.options.length; i++)
                        t == o.options[i].code && (e.countryCode = Object.assign({}, o.options[i]),
                        e.country_code = t.toString())
                }
                ))
            }
            ,
            e.prototype.goForgetPwd = function() {
                Q["a"].wapJump(N["a"].getUserBaseUrl(), Q["a"].HTML_NAME_FORGETPWD)
            }
            ,
            e.prototype.goRegister = function() {
                Q["a"].wapJump(N["a"].getUserBaseUrl(), Q["a"].HTML_NAME_REGISTER)
            }
            ,
            e.prototype.goHome = function() {
                Q["a"].userGotoWeb(N["a"].getWebBaseUrl(), Q["a"].HTML_NAME_INDEX)
            }
            ,
            e.prototype.goActivityDetail = function(t) {
                1 == t.url_type ? window.open(t.url) : Q["a"].userGotoWeb(N["a"].getWebBaseUrl(), Q["a"].HTML_NAME_DETAILS_ACTIVITY + t.id + ".html")
            }
            ,
            e.prototype.getActivityInfo = function() {
                return Object(f["b"])(this, void 0, void 0, (function() {
                    var t, e, o, i, n, s;
                    return Object(f["e"])(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            t = w["a"].URL_AD,
                            e = this.webParam.region_code,
                            o = {
                                group: "vip_jiasu_login",
                                region_codes: e
                            },
                            a.label = 1;
                        case 1:
                            return a.trys.push([1, 3, , 4]),
                            [4, this.http.get(t, o)];
                        case 2:
                            return i = a.sent(),
                            i.code == w["a"].HTTP_SUCCESS_NET_CODE && (n = i.data.sort((function(t, e) {
                                return t.pay_status - e.pay_status
                            }
                            ))[0],
                            n && n.img_url && (this.bannerImg = N["a"].getImgBaseUrl() + n.img_url,
                            this.activeLink = n.url)),
                            [3, 4];
                        case 3:
                            return s = a.sent(),
                            console.error(s),
                            [3, 4];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.clickLogin = function() {
                return Object(f["b"])(this, void 0, void 0, (function() {
                    var t, e, o, i, n;
                    return Object(f["e"])(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            return t = !0,
                            e = "",
                            0 != this.loginType ? [3, 4] : ("86" == this.country_code && !X["a"].checkPhone(this.phone) && t && (e = x["a"].getTipsMsg(x["a"].KEY_NOTIF_PHONE_ERROR),
                            t = !1,
                            "" == this.phone && (e = x["a"].getTipsMsg(x["a"].KEY_NOTIF_PHONE_EMPTY),
                            t = !1)),
                            this.isPwMd5 ? "" == this.phonePassword && (e = x["a"].getTipsMsg(x["a"].KEY_NOTIF_PASSWORD_EMPTY),
                            t = !1) : !X["a"].checkRemberPwd(this.phonePassword) && t && (e = x["a"].getTipsMsg(x["a"].KEY_NOTIF_PASSWORD_ERROR),
                            t = !1,
                            "" == this.phonePassword && (e = x["a"].getTipsMsg(x["a"].KEY_NOTIF_PASSWORD_EMPTY),
                            t = !1)),
                            t ? (o = "$virtualNum_" + this.phone,
                            !this.virtualNum(this.phone) || sessionStorage[o] ? [3, 3] : [4, this.http.post(w["a"].URL_SMSCODE_WHITE, {
                                mobile_num: this.phone
                            })]) : (this.$notify({
                                title: x["a"].getTipsMsg(x["a"].KEY_NOTIF_ERROR_TITLE),
                                message: e,
                                type: "warning"
                            }),
                            [2]));
                        case 1:
                            return i = s.sent(),
                            0 != i.code ? [2, this.$notify({
                                title: x["a"].getTipsMsg(x["a"].KEY_NOTIF_ERROR_TITLE),
                                message: i.msg,
                                type: "warning"
                            })] : 0 != i.code || 0 != i.data.is_white ? [3, 3] : [4, this.http.post(w["a"].URL_SMSCODE_SEND, {
                                mobile_num: this.phone,
                                country_code: this.country_code
                            })];
                        case 2:
                            return n = s.sent().data,
                            this.$refs.alert.setPayload(n),
                            this.$refs.alert.openAlert(),
                            [2];
                        case 3:
                            return this.setLoadingStatuas(!0),
                            this.onPhoneLogin(),
                            [3, 5];
                        case 4:
                            if (!X["a"].checkEmail(this.email) && t && (X["a"].checkAccount(this.email) || (e = x["a"].getTipsMsg(x["a"].KEY_NOTIF_ACCOUNT_ERROR),
                            t = !1),
                            "" == this.email && (e = x["a"].getTipsMsg(x["a"].KEY_NOTIF_ACCOUNT_EMPTY),
                            t = !1)),
                            this.isPwMd5 ? "" == this.emailPassword && (e = x["a"].getTipsMsg(x["a"].KEY_NOTIF_PASSWORD_EMPTY),
                            t = !1) : !X["a"].checkRemberPwd(this.emailPassword) && t && (e = x["a"].getTipsMsg(x["a"].KEY_NOTIF_PASSWORD_ERROR),
                            t = !1,
                            "" == this.emailPassword && (e = x["a"].getTipsMsg(x["a"].KEY_NOTIF_PASSWORD_EMPTY),
                            t = !1)),
                            !t)
                                return this.$notify({
                                    title: x["a"].getTipsMsg(x["a"].KEY_NOTIF_ERROR_TITLE),
                                    message: e,
                                    type: "warning"
                                }),
                                [2];
                            this.setLoadingStatuas(!0),
                            this.onEmaillLogin(),
                            s.label = 5;
                        case 5:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.onLoginSuccess = function() {
                var t = this;
                this.$notify({
                    title: x["a"].getTipsMsg(x["a"].KEY_NOTIF_SUCCESS_TITLE),
                    message: x["a"].getTipsMsg(x["a"].KEY_NOTIF_LOGIN),
                    type: "success"
                });
                if (0 == this.loginType) {
                    var e = "$virtualNum_" + this.phone;
                    sessionStorage.removeItem(e)
                }
                this.isLoading = !0;
                var o = M["a"].getUrlParam("callback");
                if (o)
                    return o += o.indexOf("?") > -1 ? "&" : "?",
                    o += "account_token=" + q["a"].getUserToken().account_token,
                    void (window.location.href = o);
                var i = M["a"].getUrlParam("to");
                if ("" != i) {
                    var n = parseInt(M["a"].getUrlParam("page"))
                      , s = parseInt(M["a"].getUrlParam("id"));
                    setTimeout((function() {
                        Q["a"].toPage(i, n, s)
                    }
                    ), 1e3)
                } else {
                    var a = q["a"].getUserInfo();
                    if (1 == a.region_code && "" == a.mobile) {
                        this.isLoading = !1;
                        var r = this.$t("public.share67").toString()
                          , c = this.$t("public.share68").toString()
                          , u = this.$t("public.share69").toString();
                        this.$alert(c, r, {
                            confirmButtonText: u,
                            showClose: !1,
                            customClass: "llz_bindMobile bindPhoneZindex",
                            callback: function(e) {
                                t.isshowLogin = !1
                            }
                        })
                    } else
                        setTimeout((function() {
                            var t = window.location.protocol + "//" + window.location.host;
                            Q["a"].wapJump(t, Q["a"].HTML_NAME_USER)
                        }
                        ), 1e3)
                }
            }
            ,
            e.prototype.onLoginFaild = function(t) {
                this.setLoadingStatuas(!1),
                400976 == t.code && (this.$refs.alert.setPayload(t.data),
                this.$refs.alert.openAlert()),
                this.$notify({
                    title: x["a"].getTipsMsg(x["a"].KEY_NOTIF_ERROR_TITLE),
                    message: t.msg,
                    type: "warning"
                })
            }
            ,
            e.prototype.passwordInput = function(t) {
                this.onPasswordInput(t)
            }
            ,
            e.prototype.setLoadingStatuas = function(t) {
                this.isLoading = t,
                this.loadingMsg = x["a"].getTipsMsg(x["a"].KEY_LOADING)
            }
            ,
            e.prototype.setBindUrlTYype = function() {
                q["a"].addthreeBindSource("1")
            }
            ,
            e.prototype.getSmscode = function(t) {
                if ("86" == this.country_code && !X["a"].checkPhone(this.phone))
                    return "" == this.phone ? void this.$notify({
                        title: x["a"].getTipsMsg(x["a"].KEY_NOTIF_ERROR_TITLE),
                        message: x["a"].getTipsMsg(x["a"].KEY_NOTIF_PHONE_EMPTY),
                        type: "warning"
                    }) : void this.$notify({
                        title: x["a"].getTipsMsg(x["a"].KEY_NOTIF_ERROR_TITLE),
                        message: x["a"].getTipsMsg(x["a"].KEY_NOTIF_PHONE_ERROR),
                        type: "warning"
                    });
                this.onGetSmscode(t, 4)
            }
            ,
            e.prototype.SmscodeSuccessTip = function() {
                this.$notify({
                    title: x["a"].getTipsMsg(x["a"].KEY_NOTIF_SUCCESS_TITLE),
                    message: x["a"].getTipsMsg(x["a"].KEY_NOTIF_SMS),
                    type: "success"
                })
            }
            ,
            e.prototype.onGetSmscodeFaild = function(t) {
                this.$notify({
                    title: x["a"].getTipsMsg(x["a"].KEY_NOTIF_ERROR_TITLE),
                    message: t.msg,
                    type: "warning"
                })
            }
            ,
            e.prototype.bindPhoneSuccess = function(t) {
                this.$notify({
                    title: x["a"].getTipsMsg(x["a"].KEY_NOTIF_SUCCESS_TITLE),
                    message: t,
                    type: "success"
                });
                var e = M["a"].getUrlParam("callback");
                if (e)
                    return e += e.indexOf("?") > -1 ? "&" : "?",
                    e += "account_token=" + q["a"].getUserToken().account_token,
                    void (window.location.href = e);
                var o = M["a"].getUrlParam("to");
                if ("" != o) {
                    var i = "" == M["a"].getUrlParam("page") ? -1 : parseInt(M["a"].getUrlParam("page"))
                      , n = "" == M["a"].getUrlParam("id") ? -1 : parseInt(M["a"].getUrlParam("id"));
                    setTimeout((function() {
                        Q["a"].toPage(o, i, n)
                    }
                    ), 1e3)
                } else
                    setTimeout((function() {
                        var t = window.location.protocol + "//" + window.location.host;
                        Q["a"].wapJump(t, Q["a"].HTML_NAME_USER)
                    }
                    ), 1e3)
            }
            ,
            e.prototype.bindPhoneFaild = function(t) {
                this.$notify({
                    title: x["a"].getTipsMsg(x["a"].KEY_NOTIF_ERROR_TITLE),
                    message: t.msg,
                    type: "warning"
                })
            }
            ,
            e.prototype.sendCode = function(t, e) {
                var o = !0
                  , i = "";
                if ("86" == this.countryCode && !X["a"].checkPhone(this.phone) && o && (i = x["a"].getTipsMsg(x["a"].KEY_NOTIF_PHONE_ERROR),
                o = !1,
                "" == this.phone && (i = x["a"].getTipsMsg(x["a"].KEY_NOTIF_PHONE_EMPTY),
                o = !1)),
                !o)
                    return this.$notify({
                        title: x["a"].getTipsMsg(x["a"].KEY_NOTIF_ERROR_TITLE),
                        message: i,
                        type: "warning"
                    }),
                    void (e && e.srcElement.setAttribute("verify", "0"));
                e && e.srcElement.setAttribute("verify", "1"),
                this.smsType = t,
                1 == this.ValidType && 0 == this.smsType ? this.getSmscode(0) : 1 == this.ValidType && 1 == this.smsType && this.getSmscode(1)
            }
            ,
            e.prototype.ongetGeetestSuccess = function(t) {
                return Object(f["b"])(this, void 0, Promise, (function() {
                    var e, o;
                    return Object(f["e"])(this, (function(i) {
                        return e = this,
                        o = t.data,
                        initGeetest({
                            gt: o.gt,
                            challenge: o.challenge,
                            offline: !o.success,
                            new_captcha: o.new_captcha,
                            https: !1,
                            product: "bind"
                        }, (function(t) {
                            t.onReady((function() {
                                var e = document.querySelectorAll(".jy_smsbtn");
                                e.forEach((function(e) {
                                    e.addEventListener("click", (function() {
                                        console.log(1111),
                                        setTimeout((function() {
                                            "0" !== e.getAttribute("verify") && t.verify()
                                        }
                                        ), 1e3)
                                    }
                                    ))
                                }
                                ))
                            }
                            )).onSuccess((function() {
                                var o = t.getValidate();
                                e.GeetModel.geetest_challenge = o.geetest_challenge,
                                e.GeetModel.geetest_seccode = o.geetest_seccode,
                                e.GeetModel.geetest_validate = o.geetest_validate,
                                o ? (console.log("ok"),
                                0 == e.smsType ? e.getSmscode(0) : 1 == e.smsType && e.getSmscode(1)) : console.log("出错啦，请先完成验证！")
                            }
                            )).onError((function() {
                                console.log("出错啦，请稍后重试！")
                            }
                            )).onClose((function() {}
                            ))
                        }
                        )),
                        [2]
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.ongetGeetestFaildAndOurs = function(t) {
                return Object(f["b"])(this, void 0, void 0, (function() {
                    return Object(f["e"])(this, (function(t) {
                        return this.isimgVerification = 1,
                        this.ValidType = 1,
                        this.onGetCaptcha(),
                        [2]
                    }
                    ))
                }
                ))
            }
            ,
            e = Object(f["c"])([Object(y["a"])({
                components: (i = {
                    "foot-nav-two": T["a"],
                    "oauth-login": Y
                },
                i[et["a"].name] = et["a"],
                i)
            })], e),
            e
        }(Object(m["mixins"])(J, ot["a"]));
        new st({
            i18n: nt
        }).$mount("#app")
    },
    "6821f": function(e, t, n) {
        (function() {
            var t = n("00d8")
              , i = n("9a63").utf8
              , r = n("044b")
              , o = n("9a63").bin
              , a = function(e, n) {
                e.constructor == String ? e = n && "binary" === n.encoding ? o.stringToBytes(e) : i.stringToBytes(e) : r(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());
                for (var s = t.bytesToWords(e), l = 8 * e.length, c = 1732584193, u = -271733879, f = -1732584194, d = 271733878, h = 0; h < s.length; h++)
                    s[h] = 16711935 & (s[h] << 8 | s[h] >>> 24) | 4278255360 & (s[h] << 24 | s[h] >>> 8);
                s[l >>> 5] |= 128 << l % 32,
                s[14 + (l + 64 >>> 9 << 4)] = l;
                var p = a._ff
                  , v = a._gg
                  , m = a._hh
                  , g = a._ii;
                for (h = 0; h < s.length; h += 16) {
                    var b = c
                      , y = u
                      , _ = f
                      , x = d;
                    c = p(c, u, f, d, s[h + 0], 7, -680876936),
                    d = p(d, c, u, f, s[h + 1], 12, -389564586),
                    f = p(f, d, c, u, s[h + 2], 17, 606105819),
                    u = p(u, f, d, c, s[h + 3], 22, -1044525330),
                    c = p(c, u, f, d, s[h + 4], 7, -176418897),
                    d = p(d, c, u, f, s[h + 5], 12, 1200080426),
                    f = p(f, d, c, u, s[h + 6], 17, -1473231341),
                    u = p(u, f, d, c, s[h + 7], 22, -45705983),
                    c = p(c, u, f, d, s[h + 8], 7, 1770035416),
                    d = p(d, c, u, f, s[h + 9], 12, -1958414417),
                    f = p(f, d, c, u, s[h + 10], 17, -42063),
                    u = p(u, f, d, c, s[h + 11], 22, -1990404162),
                    c = p(c, u, f, d, s[h + 12], 7, 1804603682),
                    d = p(d, c, u, f, s[h + 13], 12, -40341101),
                    f = p(f, d, c, u, s[h + 14], 17, -1502002290),
                    u = p(u, f, d, c, s[h + 15], 22, 1236535329),
                    c = v(c, u, f, d, s[h + 1], 5, -165796510),
                    d = v(d, c, u, f, s[h + 6], 9, -1069501632),
                    f = v(f, d, c, u, s[h + 11], 14, 643717713),
                    u = v(u, f, d, c, s[h + 0], 20, -373897302),
                    c = v(c, u, f, d, s[h + 5], 5, -701558691),
                    d = v(d, c, u, f, s[h + 10], 9, 38016083),
                    f = v(f, d, c, u, s[h + 15], 14, -660478335),
                    u = v(u, f, d, c, s[h + 4], 20, -405537848),
                    c = v(c, u, f, d, s[h + 9], 5, 568446438),
                    d = v(d, c, u, f, s[h + 14], 9, -1019803690),
                    f = v(f, d, c, u, s[h + 3], 14, -187363961),
                    u = v(u, f, d, c, s[h + 8], 20, 1163531501),
                    c = v(c, u, f, d, s[h + 13], 5, -1444681467),
                    d = v(d, c, u, f, s[h + 2], 9, -51403784),
                    f = v(f, d, c, u, s[h + 7], 14, 1735328473),
                    u = v(u, f, d, c, s[h + 12], 20, -1926607734),
                    c = m(c, u, f, d, s[h + 5], 4, -378558),
                    d = m(d, c, u, f, s[h + 8], 11, -2022574463),
                    f = m(f, d, c, u, s[h + 11], 16, 1839030562),
                    u = m(u, f, d, c, s[h + 14], 23, -35309556),
                    c = m(c, u, f, d, s[h + 1], 4, -1530992060),
                    d = m(d, c, u, f, s[h + 4], 11, 1272893353),
                    f = m(f, d, c, u, s[h + 7], 16, -155497632),
                    u = m(u, f, d, c, s[h + 10], 23, -1094730640),
                    c = m(c, u, f, d, s[h + 13], 4, 681279174),
                    d = m(d, c, u, f, s[h + 0], 11, -358537222),
                    f = m(f, d, c, u, s[h + 3], 16, -722521979),
                    u = m(u, f, d, c, s[h + 6], 23, 76029189),
                    c = m(c, u, f, d, s[h + 9], 4, -640364487),
                    d = m(d, c, u, f, s[h + 12], 11, -421815835),
                    f = m(f, d, c, u, s[h + 15], 16, 530742520),
                    u = m(u, f, d, c, s[h + 2], 23, -995338651),
                    c = g(c, u, f, d, s[h + 0], 6, -198630844),
                    d = g(d, c, u, f, s[h + 7], 10, 1126891415),
                    f = g(f, d, c, u, s[h + 14], 15, -1416354905),
                    u = g(u, f, d, c, s[h + 5], 21, -57434055),
                    c = g(c, u, f, d, s[h + 12], 6, 1700485571),
                    d = g(d, c, u, f, s[h + 3], 10, -1894986606),
                    f = g(f, d, c, u, s[h + 10], 15, -1051523),
                    u = g(u, f, d, c, s[h + 1], 21, -2054922799),
                    c = g(c, u, f, d, s[h + 8], 6, 1873313359),
                    d = g(d, c, u, f, s[h + 15], 10, -30611744),
                    f = g(f, d, c, u, s[h + 6], 15, -1560198380),
                    u = g(u, f, d, c, s[h + 13], 21, 1309151649),
                    c = g(c, u, f, d, s[h + 4], 6, -145523070),
                    d = g(d, c, u, f, s[h + 11], 10, -1120210379),
                    f = g(f, d, c, u, s[h + 2], 15, 718787259),
                    u = g(u, f, d, c, s[h + 9], 21, -343485551),
                    c = c + b >>> 0,
                    u = u + y >>> 0,
                    f = f + _ >>> 0,
                    d = d + x >>> 0
                }
                return t.endian([c, u, f, d])
            };
            a._ff = function(e, t, n, i, r, o, a) {
                var s = e + (t & n | ~t & i) + (r >>> 0) + a;
                return (s << o | s >>> 32 - o) + t
            }
            ,
            a._gg = function(e, t, n, i, r, o, a) {
                var s = e + (t & i | n & ~i) + (r >>> 0) + a;
                return (s << o | s >>> 32 - o) + t
            }
            ,
            a._hh = function(e, t, n, i, r, o, a) {
                var s = e + (t ^ n ^ i) + (r >>> 0) + a;
                return (s << o | s >>> 32 - o) + t
            }
            ,
            a._ii = function(e, t, n, i, r, o, a) {
                var s = e + (n ^ (t | ~i)) + (r >>> 0) + a;
                return (s << o | s >>> 32 - o) + t
            }
            ,
            a._blocksize = 16,
            a._digestsize = 16,
            e.exports = function(e, n) {
                if (void 0 === e || null === e)
                    throw new Error("Illegal argument " + e);
                var i = t.wordsToBytes(a(e, n));
                return n && n.asBytes ? i : n && n.asString ? o.bytesToString(i) : t.bytesToHex(i)
            }
        }
        )()
    },
});


var t = encryption_obj("6821f")

console.log(t("code=&lang=zh_CN&os_type=4&password=21383a7f858df60af90f511d4cb2bd81&src_channel=guanwang&ts=1728407624&user_type=0&username=11012013014&key=5C5A639C20665313622F51E93E3F2783"))
