(function(g) {
    var window = this;
    'use strict';
    var P7 = function(a) {
            g.Nk(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.Va()).toString(36));
            return a
        },
        Q7 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.Kga(a.u, b, c)
        },
        mnb = function(a) {
            if (a instanceof g.Pn) return a;
            if ("function" == typeof a.nk) return a.nk(!1);
            if (g.Oa(a)) {
                var b = 0,
                    c = new g.Pn;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.i3;
                        if (b in a) return g.Qn(a[b++]);
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        nnb = function(a, b, c) {
            if (g.Oa(a)) g.Ub(a, b, c);
            else
                for (a = mnb(a);;) {
                    var d = a.next();
                    if (d.done) break;
                    b.call(c, d.value, void 0, a)
                }
        },
        onb = function(a, b) {
            var c = [];
            nnb(b, function(d) {
                try {
                    var e = g.nq.prototype.u.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                void 0 === e ? c.push(d) : g.qla(e) && c.push(d)
            }, a);
            return c
        },
        pnb = function(a, b) {
            onb(a, b).forEach(function(c) {
                g.nq.prototype.remove.call(this, c)
            }, a)
        },
        qnb = function(a) {
            if (a.Z) {
                if (a.Z.locationOverrideToken) return {
                    locationOverrideToken: a.Z.locationOverrideToken
                };
                if (null != a.Z.latitudeE7 && null != a.Z.longitudeE7) return {
                    latitudeE7: a.Z.latitudeE7,
                    longitudeE7: a.Z.longitudeE7
                }
            }
            return null
        },
        rnb = function(a, b) {
            g.wb(a, b) || a.push(b)
        },
        snb = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        tnb = function(a, b) {
            return g.cd(a, b)
        },
        unb = function(a) {
            try {
                return g.Ja.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        R7 = function(a) {
            if (g.Ja.JSON) try {
                return g.Ja.JSON.parse(a)
            } catch (b) {}
            return unb(a)
        },
        vnb = function(a, b, c, d) {
            var e = new g.Fk(null);
            a && g.Gk(e, a);
            b && g.Hk(e, b);
            c && g.Ik(e, c);
            d && (e.B = d);
            return e
        },
        S7 = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.compatibleSenderThemes = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.Xp;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type =
                a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", wnb(this, a.capabilities || ""), xnb(this, a.compatibleSenderThemes || ""), ynb(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand =
                a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        wnb = function(a, b) {
            a.capabilities.clear();
            g.Un(b.split(","), g.Ua(tnb, znb)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        xnb = function(a, b) {
            a.compatibleSenderThemes.clear();
            g.Un(b.split(","), g.Ua(tnb, Anb)).forEach(function(c) {
                a.compatibleSenderThemes.add(c)
            })
        },
        ynb = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        T7 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        U7 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        Bnb = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        Cnb = function(a) {
            return new T7(a)
        },
        Dnb = function(a) {
            return Array.isArray(a) ? g.fm(a, Cnb) : []
        },
        V7 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        Enb = function(a) {
            return Array.isArray(a) ? "[" + g.fm(a, V7).join(",") + "]" : "null"
        },
        Fnb = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
        },
        Gnb = function(a) {
            return g.fm(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        Hnb = function(a, b) {
            return g.sb(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        W7 = function(a, b) {
            return g.sb(a, function(c) {
                return U7(c, b)
            })
        },
        Inb = function() {
            var a = (0, g.Qz)();
            a && pnb(a, a.j.nk(!0))
        },
        X7 = function() {
            var a = g.Tz("yt-remote-connected-devices") || [];
            g.Rb(a);
            return a
        },
        Jnb = function(a) {
            if (g.xb(a)) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return g.fm(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        Knb = function(a) {
            g.Sz("yt-remote-connected-devices", a, 86400)
        },
        Y7 = function() {
            if (Lnb) return Lnb;
            var a = g.Tz("yt-remote-device-id");
            a || (a = Fnb(), g.Sz("yt-remote-device-id", a, 31536E3));
            for (var b = X7(), c = 1, d = a; g.wb(b, d);) c++, d = a + "#" + c;
            return Lnb = d
        },
        Mnb = function() {
            var a = X7(),
                b = Y7();
            g.Vz() && g.Tb(a, b);
            a = Jnb(a);
            if (g.xb(a)) try {
                g.Wy("remote_sid")
            } catch (c) {} else try {
                g.Uy("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        Nnb = function() {
            return g.Tz("yt-remote-session-browser-channel")
        },
        Onb = function() {
            return g.Tz("yt-remote-local-screens") || []
        },
        Pnb = function() {
            g.Sz("yt-remote-lounge-token-expiration", !0, 86400)
        },
        Qnb = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = g.fm(Onb(), function(d) {
                    return d.loungeToken
                }),
                c = g.fm(a, function(d) {
                    return d.loungeToken
                });
            g.gm(c, function(d) {
                return !g.wb(b, d)
            }) && Pnb();
            g.Sz("yt-remote-local-screens", a, 31536E3)
        },
        Z7 = function(a) {
            a || (g.Uz("yt-remote-session-screen-id"), g.Uz("yt-remote-session-video-id"));
            Mnb();
            a = X7();
            g.Ab(a, Y7());
            Knb(a)
        },
        Rnb = function() {
            if (!$7) {
                var a = g.wq();
                a && ($7 = new g.kq(a))
            }
        },
        Snb = function() {
            Rnb();
            return $7 ? !!$7.get("yt-remote-use-staging-server") : !1
        },
        a8 = function(a, b) {
            g.rC[a] = !0;
            var c = g.pC();
            c && c.publish.apply(c, arguments);
            g.rC[a] = !1
        },
        Tnb = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        Unb = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        Vnb = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        b8 = function(a) {
            a.length ? Wnb(a.shift(), function() {
                b8(a)
            }) : Xnb()
        },
        Ynb = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        Wnb = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.jk(d, g.vr(a));
            (document.head || document.documentElement).appendChild(d)
        },
        Znb = function() {
            var a = Tnb(),
                b = [];
            if (1 < a) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        Xnb = function() {
            var a = Vnb();
            a && a(!1, "No cast extension found")
        },
        aob = function() {
            if ($nb) {
                var a = 2,
                    b = Vnb(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                Wnb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", Xnb, c)
            }
        },
        bob = function() {
            aob();
            var a = Znb();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            b8(a)
        },
        dob = function() {
            aob();
            var a = Znb();
            a.push.apply(a, g.la(cob.map(Ynb)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            b8(a)
        },
        eob = function() {
            this.j = c8();
            this.j.pk("/client_streamz/youtube/living_room/mdx/channel/opened", {
                Ye: 3,
                Xe: "channel_type"
            })
        },
        fob = function(a, b) {
            a.j.zl("/client_streamz/youtube/living_room/mdx/channel/opened", b)
        },
        gob = function() {
            this.j = c8();
            this.j.pk("/client_streamz/youtube/living_room/mdx/channel/closed", {
                Ye: 3,
                Xe: "channel_type"
            })
        },
        hob = function(a, b) {
            a.j.zl("/client_streamz/youtube/living_room/mdx/channel/closed", b)
        },
        iob = function() {
            this.j = c8();
            this.j.pk("/client_streamz/youtube/living_room/mdx/channel/message_received", {
                Ye: 3,
                Xe: "channel_type"
            })
        },
        job = function(a, b) {
            a.j.zl("/client_streamz/youtube/living_room/mdx/channel/message_received", b)
        },
        kob = function() {
            this.j = c8();
            this.j.pk("/client_streamz/youtube/living_room/mdx/channel/error", {
                Ye: 3,
                Xe: "channel_type"
            })
        },
        lob = function(a, b) {
            a.j.zl("/client_streamz/youtube/living_room/mdx/channel/error", b)
        },
        mob = function() {
            this.j = c8();
            this.j.pk("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        nob = function() {
            this.j = c8();
            this.j.pk("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        d8 = function(a, b, c) {
            g.E.call(this);
            this.I = null != c ? (0, g.Ta)(a, c) : a;
            this.Hi = b;
            this.D = (0, g.Ta)(this.k_, this);
            this.j = !1;
            this.u = 0;
            this.B = this.Gc = null;
            this.C = []
        },
        e8 = function(a, b, c) {
            g.E.call(this);
            this.C = null != c ? a.bind(c) : a;
            this.Hi = b;
            this.B = null;
            this.j = !1;
            this.u = 0;
            this.Gc = null
        },
        oob = function(a) {
            a.Gc = g.Mf(function() {
                a.Gc = null;
                a.j && !a.u && (a.j = !1, oob(a))
            }, a.Hi);
            var b = a.B;
            a.B = null;
            a.C.apply(null, b)
        },
        f8 = function() {},
        pob = function() {
            g.pb.call(this, "p")
        },
        qob = function() {
            g.pb.call(this, "o")
        },
        sob = function() {
            return rob = rob || new g.Cd
        },
        tob = function(a) {
            g.pb.call(this, "serverreachability", a)
        },
        g8 = function(a) {
            var b = sob();
            b.dispatchEvent(new tob(b, a))
        },
        uob = function(a) {
            g.pb.call(this, "statevent", a)
        },
        h8 = function(a) {
            var b = sob();
            b.dispatchEvent(new uob(b, a))
        },
        vob = function(a, b, c, d) {
            g.pb.call(this, "timingevent", a);
            this.size = b;
            this.Hz = d
        },
        i8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.Ja.setTimeout(function() {
                a()
            }, b)
        },
        wob = function() {},
        j8 = function(a, b, c, d) {
            this.D = a;
            this.C = b;
            this.kd = c;
            this.Ic = d || 1;
            this.jb = new g.$k(this);
            this.Ob = 45E3;
            a = g.SK ? 125 : void 0;
            this.qb = new g.Lf(a);
            this.Ma = null;
            this.B = !1;
            this.T = this.Za = this.J = this.Pa = this.ya = this.Gb = this.ea = null;
            this.oa = [];
            this.j = null;
            this.Z = 0;
            this.I = this.Aa = null;
            this.Vb = -1;
            this.Ka = !1;
            this.ub = 0;
            this.bb = null;
            this.Dc = this.Xa = this.lc = this.Ga = !1;
            this.u = new xob
        },
        xob = function() {
            this.B = null;
            this.j = "";
            this.u = !1
        },
        zob = function(a, b, c) {
            a.Pa = 1;
            a.J = P7(b.clone());
            a.T = c;
            a.Ga = !0;
            yob(a, null)
        },
        yob = function(a, b) {
            a.ya = Date.now();
            k8(a);
            a.Za = a.J.clone();
            Q7(a.Za, "t", a.Ic);
            a.Z = 0;
            var c = a.D.Pa;
            a.u = new xob;
            a.j = Aob(a.D, c ? b : null, !a.T);
            0 < a.ub && (a.bb = new e8((0, g.Ta)(a.NQ, a, a.j), a.ub));
            a.jb.Sa(a.j, "readystatechange", a.n_);
            b = a.Ma ? g.jd(a.Ma) : {};
            a.T ? (a.Aa || (a.Aa = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.Za, a.Aa, a.T, b)) : (a.Aa = "GET", a.j.send(a.Za, a.Aa, null, b));
            g8(1)
        },
        Bob = function(a) {
            return a.j ? "GET" == a.Aa && 2 != a.Pa && a.D.uf : !1
        },
        Fob = function(a, b, c) {
            for (var d = !0, e; !a.Ka && a.Z < c.length;)
                if (e = Cob(a, c), e == l8) {
                    4 == b &&
                        (a.I = 4, h8(14), d = !1);
                    break
                } else if (e == Dob) {
                a.I = 4;
                h8(15);
                d = !1;
                break
            } else Eob(a, e);
            Bob(a) && e != l8 && e != Dob && (a.u.j = "", a.Z = 0);
            4 != b || 0 != c.length || a.u.u || (a.I = 1, h8(16), d = !1);
            a.B = a.B && d;
            d ? 0 < c.length && !a.Dc && (a.Dc = !0, a.D.KN(a)) : (m8(a), n8(a))
        },
        Cob = function(a, b) {
            var c = a.Z,
                d = b.indexOf("\n", c);
            if (-1 == d) return l8;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return Dob;
            d += 1;
            if (d + c > b.length) return l8;
            b = b.slice(d, d + c);
            a.Z = d + c;
            return b
        },
        k8 = function(a) {
            a.Gb = Date.now() + a.Ob;
            Gob(a, a.Ob)
        },
        Gob = function(a, b) {
            if (null != a.ea) throw Error("WatchDog timer not null");
            a.ea = i8((0, g.Ta)(a.l_, a), b)
        },
        o8 = function(a) {
            a.ea && (g.Ja.clearTimeout(a.ea), a.ea = null)
        },
        n8 = function(a) {
            a.D.Wg() || a.Ka || Hob(a.D, a)
        },
        m8 = function(a) {
            o8(a);
            g.gb(a.bb);
            a.bb = null;
            a.qb.stop();
            a.jb.Ff();
            if (a.j) {
                var b = a.j;
                a.j = null;
                b.abort();
                b.dispose()
            }
        },
        Eob = function(a, b) {
            try {
                var c = a.D;
                if (0 != c.ph && (c.j == a || Iob(c.u, a)))
                    if (!a.Xa && Iob(c.u, a) && 3 == c.ph) {
                        try {
                            var d = c.vf.j.parse(b)
                        } catch (C) {
                            d = null
                        }
                        if (Array.isArray(d) && 3 == d.length) {
                            var e = d;
                            if (0 == e[0]) a: {
                                if (!c.T) {
                                    if (c.j)
                                        if (c.j.ya + 3E3 < a.ya) p8(c), q8(c);
                                        else break a;
                                    Job(c);
                                    h8(18)
                                }
                            }
                            else c.Yd = e[1], 0 < c.Yd - c.bb && 37500 > e[2] && c.Xa && 0 == c.oa && !c.Z && (c.Z = i8((0, g.Ta)(c.o_, c), 6E3));
                            if (1 >= Kob(c.u) && c.Wc) {
                                try {
                                    c.Wc()
                                } catch (C) {}
                                c.Wc = void 0
                            }
                        } else r8(c, 11)
                    } else if ((a.Xa || c.j == a) && p8(c), !g.$b(b))
                    for (e = c.vf.j.parse(b), b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.bb = f[0];
                        f = f[1];
                        if (2 == c.ph)
                            if ("c" == f[0]) {
                                c.C = f[1];
                                c.Dc = f[2];
                                var h = f[3];
                                null != h && (c.OQ = h);
                                var l = f[5];
                                null != l && "number" === typeof l && 0 < l && (c.jb = 1.5 * l);
                                d = c;
                                var m = a.eM();
                                if (m) {
                                    var n = g.uj(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.u;
                                        !p.j && (g.cc(n, "spdy") || g.cc(n, "quic") || g.cc(n, "h2")) && (p.C = p.D, p.j = new Set, p.u && (Lob(p, p.u), p.u = null))
                                    }
                                    if (d.Ga) {
                                        var q = g.uj(m, "X-HTTP-Session-Id");
                                        q && (d.oe = q, g.Nk(d.Ma, d.Ga, q))
                                    }
                                }
                                c.ph = 3;
                                c.D && c.D.UQ();
                                c.Mc && (c.ud = Date.now() - a.ya);
                                d = c;
                                var t = a;
                                d.Jd = Mob(d, d.Pa ? d.Dc : null, d.Ic);
                                if (t.Xa) {
                                    Nob(d.u,
                                        t);
                                    var w = t,
                                        z = d.jb;
                                    z && w.setTimeout(z);
                                    w.ea && (o8(w), k8(w));
                                    d.j = t
                                } else Oob(d);
                                0 < c.B.length && s8(c)
                            } else "stop" != f[0] && "close" != f[0] || r8(c, 7);
                        else 3 == c.ph && ("stop" == f[0] || "close" == f[0] ? "stop" == f[0] ? r8(c, 7) : c.disconnect() : "noop" != f[0] && c.D && c.D.TQ(f), c.oa = 0)
                    }
                g8(4)
            } catch (C) {}
        },
        Pob = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        Qob = function(a) {
            this.D = a || 10;
            g.Ja.PerformanceNavigationTiming ? (a = g.Ja.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(g.Ja.chrome && g.Ja.chrome.loadTimes && g.Ja.chrome.loadTimes() && g.Ja.chrome.loadTimes().wasFetchedViaSpdy);
            this.C = a ? this.D : 1;
            this.j = null;
            1 < this.C && (this.j = new Set);
            this.u = null;
            this.B = []
        },
        Rob = function(a) {
            return a.u ? !0 : a.j ? a.j.size >= a.C : !1
        },
        Kob = function(a) {
            return a.u ? 1 : a.j ? a.j.size : 0
        },
        Iob = function(a, b) {
            return a.u ? a.u == b : a.j ? a.j.has(b) : !1
        },
        Lob =
        function(a, b) {
            a.j ? a.j.add(b) : a.u = b
        },
        Nob = function(a, b) {
            a.u && a.u == b ? a.u = null : a.j && a.j.has(b) && a.j.delete(b)
        },
        Sob = function(a) {
            if (null != a.u) return a.B.concat(a.u.oa);
            if (null != a.j && 0 !== a.j.size) {
                var b = a.B;
                a = g.v(a.j.values());
                for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.oa);
                return b
            }
            return g.Db(a.B)
        },
        Tob = function(a, b) {
            var c = new wob;
            if (g.Ja.Image) {
                var d = new Image;
                d.onload = g.Ua(t8, c, d, "TestLoadImage: loaded", !0, b);
                d.onerror = g.Ua(t8, c, d, "TestLoadImage: error", !1, b);
                d.onabort = g.Ua(t8, c, d, "TestLoadImage: abort", !1, b);
                d.ontimeout = g.Ua(t8, c, d, "TestLoadImage: timeout", !1, b);
                g.Ja.setTimeout(function() {
                    if (d.ontimeout) d.ontimeout()
                }, 1E4);
                d.src = a
            } else b(!1)
        },
        t8 = function(a, b, c, d, e) {
            try {
                b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d)
            } catch (f) {}
        },
        Uob = function() {
            this.j = new f8
        },
        Vob = function(a, b, c) {
            var d = c || "";
            try {
                g.Ek(a, function(e, f) {
                    var h = e;
                    g.Pa(e) && (h = g.Ki(e));
                    b.push(d + f + "=" + encodeURIComponent(h))
                })
            } catch (e) {
                throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
            }
        },
        u8 = function(a, b, c) {
            return c && c.p4 ? c.p4[a] || b : b
        },
        Wob = function(a) {
            this.B = [];
            this.Dc = this.Jd = this.Ma = this.Ic = this.j = this.oe = this.Ga = this.Ka = this.J = this.Gb = this.ea = null;
            this.Vf = this.Za = 0;
            this.Tf = u8("failFast", !1, a);
            this.Xa = this.Z = this.T = this.I = this.D = null;
            this.kd = !0;
            this.Yd = this.bb = -1;
            this.lc = this.oa = this.ya = 0;
            this.If = u8("baseRetryDelayMs", 5E3, a);
            this.Wf = u8("retryDelaySeedMs", 1E4, a);
            this.Uf = u8("forwardChannelMaxRetries", 2, a);
            this.Xd = u8("forwardChannelRequestTimeoutMs", 2E4, a);
            this.me = a && a.o9a || void 0;
            this.uf = a && a.l9a || !1;
            this.jb = void 0;
            this.Pa = a && a.t9 || !1;
            this.C = "";
            this.u = new Qob(a &&
                a.V6a);
            this.vf = new Uob;
            this.Ob = a && a.l7a || !1;
            this.ub = a && a.b7a || !1;
            this.Ob && this.ub && (this.ub = !1);
            this.Xf = a && a.O6a || !1;
            a && a.n7a && (this.kd = !1);
            this.Mc = !this.Ob && this.kd && a && a.Y6a || !1;
            this.wd = void 0;
            a && a.wV && 0 < a.wV && (this.wd = a.wV);
            this.Wc = void 0;
            this.ud = 0;
            this.qb = !1;
            this.Vb = this.Aa = null
        },
        q8 = function(a) {
            a.j && (Xob(a), a.j.cancel(), a.j = null)
        },
        Yob = function(a) {
            q8(a);
            a.T && (g.Ja.clearTimeout(a.T), a.T = null);
            p8(a);
            a.u.cancel();
            a.I && ("number" === typeof a.I && g.Ja.clearTimeout(a.I), a.I = null)
        },
        s8 = function(a) {
            Rob(a.u) || a.I || (a.I = !0, g.Af(a.QQ, a), a.ya = 0)
        },
        $ob = function(a, b) {
            if (Kob(a.u) >= a.u.C - (a.I ? 1 : 0)) return !1;
            if (a.I) return a.B = b.oa.concat(a.B), !0;
            if (1 == a.ph || 2 == a.ph || a.ya >= (a.Tf ? 0 : a.Uf)) return !1;
            a.I = i8((0, g.Ta)(a.QQ, a, b), Zob(a, a.ya));
            a.ya++;
            return !0
        },
        bpb = function(a, b) {
            var c;
            b ? c = b.kd : c = a.Za++;
            var d = a.Ma.clone();
            g.Nk(d, "SID", a.C);
            g.Nk(d, "RID", c);
            g.Nk(d, "AID", a.bb);
            v8(a, d);
            a.J && a.ea && g.Zk(d, a.J, a.ea);
            c = new j8(a, a.C, c, a.ya + 1);
            null === a.J && (c.Ma = a.ea);
            b && (a.B = b.oa.concat(a.B));
            b = apb(a, c, 1E3);
            c.setTimeout(Math.round(.5 * a.Xd) + Math.round(.5 * a.Xd * Math.random()));
            Lob(a.u, c);
            zob(c, d, b)
        },
        v8 = function(a, b) {
            a.Ka && g.Vc(a.Ka, function(c, d) {
                g.Nk(b, d, c)
            });
            a.D && g.Ek({}, function(c, d) {
                g.Nk(b, d, c)
            })
        },
        apb = function(a, b, c) {
            c = Math.min(a.B.length, c);
            var d = a.D ? (0, g.Ta)(a.D.p_, a.D, a) : null;
            a: for (var e = a.B, f = -1;;) {
                var h = ["count=" + c]; - 1 == f ? 0 < c ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
                for (var l = !0, m = 0; m < c; m++) {
                    var n = e[m].j,
                        p = e[m].map;
                    n -= f;
                    if (0 > n) f = Math.max(0, e[m].j - 100), l = !1;
                    else try {
                        Vob(p, h, "req" + n + "_")
                    } catch (q) {
                        d && d(p)
                    }
                }
                if (l) {
                    d = h.join("&");
                    break a
                }
            }
            a = a.B.splice(0, c);
            b.oa = a;
            return d
        },
        Oob = function(a) {
            a.j || a.T || (a.lc = 1, g.Af(a.PQ, a), a.oa = 0)
        },
        Job = function(a) {
            if (a.j || a.T || 3 <= a.oa) return !1;
            a.lc++;
            a.T = i8((0, g.Ta)(a.PQ, a), Zob(a, a.oa));
            a.oa++;
            return !0
        },
        Xob = function(a) {
            null != a.Aa && (g.Ja.clearTimeout(a.Aa), a.Aa = null)
        },
        cpb = function(a) {
            a.j = new j8(a, a.C, "rpc", a.lc);
            null === a.J && (a.j.Ma = a.ea);
            a.j.ub = 0;
            var b = a.Jd.clone();
            g.Nk(b, "RID", "rpc");
            g.Nk(b, "SID", a.C);
            g.Nk(b, "AID", a.bb);
            g.Nk(b, "CI", a.Xa ? "0" : "1");
            !a.Xa && a.wd && g.Nk(b, "TO", a.wd);
            g.Nk(b, "TYPE", "xmlhttp");
            v8(a, b);
            a.J && a.ea && g.Zk(b, a.J, a.ea);
            a.jb && a.j.setTimeout(a.jb);
            var c = a.j;
            a = a.Dc;
            c.Pa = 1;
            c.J = P7(b.clone());
            c.T = null;
            c.Ga = !0;
            yob(c, a)
        },
        p8 = function(a) {
            null != a.Z && (g.Ja.clearTimeout(a.Z), a.Z = null)
        },
        Hob = function(a, b) {
            var c = null;
            if (a.j == b) {
                p8(a);
                Xob(a);
                a.j = null;
                var d = 2
            } else if (Iob(a.u, b)) c = b.oa, Nob(a.u, b), d = 1;
            else return;
            if (0 != a.ph)
                if (b.B)
                    if (1 == d) {
                        c = b.T ? b.T.length : 0;
                        b = Date.now() - b.ya;
                        var e = a.ya;
                        d = sob();
                        d.dispatchEvent(new vob(d, c, b, e));
                        s8(a)
                    } else Oob(a);
            else {
                var f = b.Vb;
                e = b.getLastError();
                if (3 == e || 0 == e && 0 < f || !(1 == d && $ob(a, b) || 2 == d && Job(a))) switch (c && 0 < c.length && (b = a.u, b.B = b.B.concat(c)), e) {
                    case 1:
                        r8(a, 5);
                        break;
                    case 4:
                        r8(a, 10);
                        break;
                    case 3:
                        r8(a, 6);
                        break;
                    default:
                        r8(a, 2)
                }
            }
        },
        Zob = function(a, b) {
            var c = a.If + Math.floor(Math.random() *
                a.Wf);
            a.isActive() || (c *= 2);
            return c * b
        },
        r8 = function(a, b) {
            if (2 == b) {
                var c = null;
                a.D && (c = null);
                var d = (0, g.Ta)(a.z9, a);
                c || (c = new g.Fk("//www.google.com/images/cleardot.gif"), g.Ja.location && "http" == g.Ja.location.protocol || g.Gk(c, "https"), P7(c));
                Tob(c.toString(), d)
            } else h8(2);
            a.ph = 0;
            a.D && a.D.SQ(b);
            dpb(a);
            Yob(a)
        },
        dpb = function(a) {
            a.ph = 0;
            a.Vb = [];
            if (a.D) {
                var b = Sob(a.u);
                if (0 != b.length || 0 != a.B.length) g.Fb(a.Vb, b), g.Fb(a.Vb, a.B), a.u.B.length = 0, g.Db(a.B), a.B.length = 0;
                a.D.RQ()
            }
        },
        epb = function(a) {
            if (0 == a.ph) return a.Vb;
            var b = [];
            g.Fb(b, Sob(a.u));
            g.Fb(b, a.B);
            return b
        },
        Mob = function(a, b, c) {
            var d = g.Wk(c);
            "" != d.j ? (b && g.Hk(d, b + "." + d.j), g.Ik(d, d.C)) : (d = g.Ja.location, d = vnb(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
            b = a.Ga;
            c = a.oe;
            b && c && g.Nk(d, b, c);
            g.Nk(d, "VER", a.OQ);
            v8(a, d);
            return d
        },
        Aob = function(a, b, c) {
            if (b && !a.Pa) throw Error("Can't create secondary domain capable XhrIo object.");
            b = c && a.uf && !a.me ? new g.aj(new g.Ak({
                aY: !0
            })) : new g.aj(a.me);
            b.I = a.Pa;
            return b
        },
        fpb = function() {},
        gpb = function() {
            if (g.Ve && !g.Mc(10)) throw Error("Environmental error: no available transport.");
        },
        x8 = function(a, b) {
            g.Cd.call(this);
            this.j = new Wob(b);
            this.D = a;
            this.u = b && b.W4 || null;
            a = b && b.V4 || null;
            b && b.U6a && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
                "X-Client-Protocol": "webchannel"
            });
            this.j.ea = a;
            a = b && b.Z7a || null;
            b && b.EV && (a ? a["X-WebChannel-Content-Type"] = b.EV : a = {
                "X-WebChannel-Content-Type": b.EV
            });
            b && b.ZS && (a ? a["X-WebChannel-Client-Profile"] = b.ZS : a = {
                "X-WebChannel-Client-Profile": b.ZS
            });
            this.j.Gb = a;
            (a = b && b.Y7a) && !g.$b(a) && (this.j.J = a);
            this.I = b && b.t9 || !1;
            this.C = b && b.M8a || !1;
            (b = b && b.l4) && !g.$b(b) && (this.j.Ga = b, g.bd(this.u, b) && g.gd(this.u,
                b));
            this.B = new w8(this)
        },
        hpb = function(a) {
            pob.call(this);
            a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
            var b = a.__sm__;
            b ? this.data = (this.j = g.Zc(b)) ? g.hd(b, this.j) : b : this.data = a
        },
        ipb = function(a) {
            qob.call(this);
            this.status = 1;
            this.errorCode = a
        },
        w8 = function(a) {
            this.j = a
        },
        jpb = function(a, b) {
            this.u = a;
            this.j = b
        },
        kpb = function(a) {
            return epb(a.j).map(function(b) {
                b = b.map;
                "__data__" in b && (b = b.__data__, b = a.u.C ? unb(b) : b);
                return b
            })
        },
        y8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.Ja.setTimeout(function() {
                a()
            }, b)
        },
        A8 = function(a) {
            z8.dispatchEvent(new lpb(z8, a))
        },
        lpb = function(a) {
            g.pb.call(this, "statevent", a)
        },
        B8 = function(a, b, c, d) {
            this.j = a;
            this.C = b;
            this.J = c;
            this.I = d || 1;
            this.u = 45E3;
            this.B = new g.$k(this);
            this.D = new g.Lf;
            this.D.setInterval(250)
        },
        npb = function(a, b, c) {
            a.Yw = 1;
            a.zr = P7(b.clone());
            a.du = c;
            a.Ga = !0;
            mpb(a, null)
        },
        opb = function(a, b, c, d, e) {
            a.Yw = 1;
            a.zr = P7(b.clone());
            a.du = null;
            a.Ga = c;
            e && (a.EX = !1);
            mpb(a, d)
        },
        mpb = function(a, b) {
            a.Xw = Date.now();
            C8(a);
            a.Br = a.zr.clone();
            Q7(a.Br, "t", a.I);
            a.HE = 0;
            a.Si = a.j.oJ(a.j.DA() ? b : null);
            0 < a.mJ && (a.FE = new e8((0, g.Ta)(a.VQ, a, a.Si), a.mJ));
            a.B.Sa(a.Si, "readystatechange", a.r_);
            b = a.au ? g.jd(a.au) : {};
            a.du ? (a.GE = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.Si.send(a.Br, a.GE, a.du, b)) : (a.GE = "GET", a.EX && !g.Nc && (b.Connection = "close"), a.Si.send(a.Br, a.GE, null, b));
            a.j.un(1)
        },
        rpb = function(a, b) {
            var c = a.HE,
                d = b.indexOf("\n", c);
            if (-1 == d) return ppb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return qpb;
            d += 1;
            if (d + c > b.length) return ppb;
            b = b.slice(d, d + c);
            a.HE = d + c;
            return b
        },
        tpb = function(a, b) {
            a.Xw = Date.now();
            C8(a);
            var c = b ? window.location.hostname : "";
            a.Br = a.zr.clone();
            g.Nk(a.Br, "DOMAIN", c);
            g.Nk(a.Br, "t", a.I);
            try {
                a.In = new ActiveXObject("htmlfile")
            } catch (m) {
                D8(a);
                a.Ar = 7;
                A8(22);
                E8(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                var e = "";
                for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b);
                    if ("<" == f) f = e + "\\x3c";
                    else if (">" == f) f = e + "\\x3e";
                    else {
                        if (f in F8) f = F8[f];
                        else if (f in spb) f = F8[f] = spb[f];
                        else {
                            var h = f.charCodeAt(0);
                            if (31 < h && 127 > h) var l = f;
                            else {
                                if (256 > h) {
                                    if (l = "\\x", 16 > h || 256 < h) l += "0"
                                } else l = "\\u", 4096 > h && (l += "0");
                                l += h.toString(16).toUpperCase()
                            }
                            f =
                                F8[f] = l
                        }
                        f = e + f
                    }
                    e = f
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            d += "</body></html>";
            g.Sd("b/12014412");
            c = g.me(d);
            a.In.open();
            a.In.write(g.fe(c));
            a.In.close();
            a.In.parentWindow.m = (0, g.Ta)(a.T7, a);
            a.In.parentWindow.d = (0, g.Ta)(a.HW, a, !0);
            a.In.parentWindow.rpcClose = (0, g.Ta)(a.HW, a, !1);
            c = a.In.createElement("DIV");
            a.In.parentWindow.document.body.appendChild(c);
            d = g.$d(a.Br.toString());
            d = g.Ge(g.Yd(d));
            g.Sd("b/12014412");
            d = g.me('<iframe src="' + d + '"></iframe>');
            g.Zba(c, d);
            a.j.un(1)
        },
        C8 = function(a) {
            a.nJ =
                Date.now() + a.u;
            upb(a, a.u)
        },
        upb = function(a, b) {
            if (null != a.Zw) throw Error("WatchDog timer not null");
            a.Zw = y8((0, g.Ta)(a.q_, a), b)
        },
        vpb = function(a) {
            a.Zw && (g.Ja.clearTimeout(a.Zw), a.Zw = null)
        },
        E8 = function(a) {
            a.j.Wg() || a.Zt || a.j.IE(a)
        },
        D8 = function(a) {
            vpb(a);
            g.gb(a.FE);
            a.FE = null;
            a.D.stop();
            a.B.Ff();
            if (a.Si) {
                var b = a.Si;
                a.Si = null;
                b.abort();
                b.dispose()
            }
            a.In && (a.In = null)
        },
        wpb = function(a, b) {
            try {
                a.j.WQ(a, b), a.j.un(4)
            } catch (c) {}
        },
        ypb = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                xpb(a, b, function(h) {
                    h ? c(!0) : g.Ja.setTimeout(function() {
                        ypb(a, b, c, d, f)
                    }, f)
                })
            }
        },
        xpb = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    G8(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    G8(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    G8(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    G8(d), c(!1)
                } catch (e) {}
            };
            g.Ja.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            d.src = a
        },
        G8 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        zpb = function(a) {
            this.j = a;
            this.u = new f8
        },
        Apb = function(a) {
            var b = H8(a.j, a.aB, "/mail/images/cleardot.gif");
            P7(b);
            ypb(b.toString(), 5E3, (0, g.Ta)(a.h2, a), 3, 2E3);
            a.un(1)
        },
        Bpb = function(a) {
            var b = a.j.I;
            if (null != b) A8(5), b ? (A8(11), I8(a.j, a, !1)) : (A8(12), I8(a.j, a, !0));
            else if (a.vj = new B8(a), a.vj.au = a.pJ, b = a.j, b = H8(b, b.DA() ? a.CA : null, a.qJ), A8(5), !g.Ve || g.Mc(10)) Q7(b, "TYPE", "xmlhttp"), opb(a.vj, b, !1, a.CA, !1);
            else {
                Q7(b, "TYPE", "html");
                var c = a.vj;
                a = !!a.CA;
                c.Yw = 3;
                c.zr = P7(b.clone());
                tpb(c, a)
            }
        },
        Cpb = function(a, b, c) {
            this.j = 1;
            this.u = [];
            this.B = [];
            this.D = new f8;
            this.ea = a || null;
            this.I = null != b ? b : null;
            this.T = c || !1
        },
        Dpb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        Epb = function(a, b, c, d) {
            g.pb.call(this, "timingevent", a);
            this.size = b;
            this.Hz = d
        },
        Fpb = function(a) {
            g.pb.call(this, "serverreachability", a)
        },
        Hpb = function(a) {
            a.s_(1, 0);
            a.JE = H8(a, null, a.rJ);
            Gpb(a)
        },
        Ipb = function(a) {
            a.Pr && (a.Pr.abort(), a.Pr = null);
            a.Hg && (a.Hg.cancel(), a.Hg = null);
            a.Hp && (g.Ja.clearTimeout(a.Hp), a.Hp = null);
            J8(a);
            a.Ej && (a.Ej.cancel(), a.Ej = null);
            a.Cr && (g.Ja.clearTimeout(a.Cr), a.Cr = null)
        },
        Jpb = function(a, b) {
            if (0 == a.j) throw Error("Invalid operation: sending map when state is closed");
            a.u.push(new Dpb(a.t_++, b));
            2 != a.j && 3 != a.j || Gpb(a)
        },
        Kpb = function(a) {
            var b = 0;
            a.Hg && b++;
            a.Ej && b++;
            return b
        },
        Gpb = function(a) {
            a.Ej || a.Cr || (a.Cr = y8((0, g.Ta)(a.aR, a), 0), a.bx = 0)
        },
        Npb = function(a, b) {
            if (1 == a.j) {
                if (!b) {
                    a.FA = Math.floor(1E5 * Math.random());
                    b = a.FA++;
                    var c = new B8(a, "", b);
                    c.au = a.Nn;
                    var d = Lpb(a),
                        e = a.JE.clone();
                    g.Nk(e, "RID", b);
                    g.Nk(e, "CVER", "1");
                    K8(a, e);
                    npb(c, e, d);
                    a.Ej = c;
                    a.j = 2
                }
            } else 3 == a.j && (b ? Mpb(a, b) : 0 == a.u.length || a.Ej || Mpb(a))
        },
        Mpb = function(a, b) {
            if (b)
                if (6 < a.fu) {
                    a.u = a.B.concat(a.u);
                    a.B.length = 0;
                    var c = a.FA - 1;
                    b = Lpb(a)
                } else c = b.J, b = b.du;
            else c = a.FA++, b = Lpb(a);
            var d = a.JE.clone();
            g.Nk(d, "SID", a.C);
            g.Nk(d, "RID", c);
            g.Nk(d, "AID", a.ex);
            K8(a, d);
            c = new B8(a, a.C, c, a.bx + 1);
            c.au = a.Nn;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.Ej = c;
            npb(c, d, b)
        },
        K8 = function(a, b) {
            a.ri && (a = a.ri.eR()) && g.Vc(a, function(c, d) {
                g.Nk(b, d, c)
            })
        },
        Lpb = function(a) {
            var b = Math.min(a.u.length, 1E3),
                c = ["count=" + b];
            if (6 < a.fu && 0 < b) {
                var d = a.u[0].j;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    Iw: e.Iw
                }, f++) {
                e.Iw = a.u[f].j;
                var h = a.u[f].map;
                e.Iw = 6 >= a.fu ? f : e.Iw - d;
                try {
                    g.Vc(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.Iw + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.Iw + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.B = a.B.concat(a.u.splice(0, b));
            return c.join("&")
        },
        Opb = function(a) {
            a.Hg || a.Hp || (a.J = 1, a.Hp = y8((0, g.Ta)(a.ZQ, a), 0), a.ax = 0)
        },
        Qpb = function(a) {
            if (a.Hg || a.Hp || 3 <= a.ax) return !1;
            a.J++;
            a.Hp = y8((0, g.Ta)(a.ZQ, a), Ppb(a, a.ax));
            a.ax++;
            return !0
        },
        I8 = function(a, b, c) {
            a.zI = null == a.I ? c : !a.I;
            a.On = b.Gp;
            a.T || Hpb(a)
        },
        J8 = function(a) {
            null != a.ju && (g.Ja.clearTimeout(a.ju), a.ju = null)
        },
        Ppb = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        L8 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.ri && (c = null);
                var d = (0, g.Ta)(a.y9, a);
                c || (c = new g.Fk("//www.google.com/images/cleardot.gif"), P7(c));
                xpb(c.toString(), 1E4, d)
            } else A8(2);
            Rpb(a, b)
        },
        Rpb = function(a, b) {
            a.j = 0;
            a.ri && a.ri.bR(b);
            Spb(a);
            Ipb(a)
        },
        Spb = function(a) {
            a.j = 0;
            a.On = -1;
            if (a.ri)
                if (0 == a.B.length && 0 == a.u.length) a.ri.sJ();
                else {
                    var b = g.Db(a.B),
                        c = g.Db(a.u);
                    a.B.length = 0;
                    a.u.length = 0;
                    a.ri.sJ(b, c)
                }
        },
        H8 = function(a, b, c) {
            var d = g.Wk(c);
            if ("" != d.j) b && g.Hk(d, b + "." + d.j), g.Ik(d, d.C);
            else {
                var e = window.location;
                d = vnb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.EA && g.Vc(a.EA, function(f, h) {
                g.Nk(d, h, f)
            });
            g.Nk(d, "VER", a.fu);
            K8(a, d);
            return d
        },
        Tpb = function() {},
        Upb = function() {
            this.j = [];
            this.u = []
        },
        Vpb = function(a) {
            g.pb.call(this, "channelMessage");
            this.message = a
        },
        Wpb = function(a) {
            g.pb.call(this, "channelError");
            this.error = a
        },
        Xpb = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        M8 = function(a, b) {
            g.E.call(this);
            this.j = new g.Gp(this.L7, 0, this);
            g.I(this, this.j);
            this.Hi = 5E3;
            this.u = 0;
            if ("function" === typeof a) b && (a = (0, g.Ta)(a, b));
            else if (a && "function" === typeof a.handleEvent) a = (0, g.Ta)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.B = a
        },
        Ypb = function() {},
        c8 = function() {
            if (!N8) {
                N8 = new g.Of(new Ypb);
                var a = g.ky("client_streamz_web_flush_count", -1); - 1 !== a && (N8.C = a)
            }
            return N8
        },
        Zpb = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function() {
                return ""
            } : d;
            e = void 0 === e ? !1 : e;
            this.ya = a;
            this.J = b;
            this.B = new g.jq;
            this.u = new M8(this.U8, this);
            this.j = null;
            this.Z = !1;
            this.I = null;
            this.ea = "";
            this.T = this.D = 0;
            this.C = [];
            this.Pa = c;
            this.oa = d;
            this.Xa = e;
            this.Ma = new eob;
            this.Aa = new gob;
            this.Ka = new iob;
            this.Ga = new kob;
            this.bb = new mob;
            this.Za = new nob
        },
        $pb = function(a) {
            if (a.j) {
                var b = a.oa(),
                    c = a.j.Nn || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.j.Nn = c
            }
        },
        O8 = function(a) {
            this.port = this.domain = "";
            this.j = "/api/lounge";
            this.u = !0;
            a = a || document.location.href;
            var b = Number(g.Ri(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.Si(a) || "";
            a = g.hc();
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.gc(a, "10.0") && (this.u = !1))
        },
        P8 = function(a, b) {
            var c = a.j;
            a.u && (c = "https://" + a.domain + a.port + a.j);
            return g.Xi(c + b, {})
        },
        aqb = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.Ua(a.C, d, !0),
                onError: g.Ua(a.B, e),
                onTimeout: g.Ua(a.D, e)
            };
            c && (a.postParams = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.Ky(b, a)
        },
        bqb = function(a, b) {
            g.Cd.call(this);
            var c = this;
            this.yd = a();
            this.yd.subscribe("handlerOpened", this.x_, this);
            this.yd.subscribe("handlerClosed", this.v_, this);
            this.yd.subscribe("handlerError", function(d, e) {
                c.onError(e)
            });
            this.yd.subscribe("handlerMessage", this.w_, this);
            this.j = b
        },
        cqb = function(a, b, c) {
            var d = this;
            c = void 0 === c ? function() {
                return ""
            } : c;
            var e = void 0 === e ? new gpb : e;
            var f = void 0 === f ? new g.jq : f;
            this.pathPrefix = a;
            this.j = b;
            this.ya = c;
            this.D = f;
            this.T = null;
            this.ea = this.J = 0;
            this.channel = null;
            this.I = 0;
            this.B = new M8(function() {
                d.B.isActive();
                var h;
                0 === (null == (h = d.channel) ? void 0 : Kob((new jpb(h, h.j)).j.u)) && d.connect(d.T, d.J)
            });
            this.C = {};
            this.u = {};
            this.Z = !1;
            this.logger = null;
            this.oa = [];
            this.Lg = void 0;
            this.Ma = new eob;
            this.Aa = new gob;
            this.Ka = new iob;
            this.Ga = new kob
        },
        dqb = function(a) {
            g.sd(a.channel, "m", function() {
                a.I = 3;
                a.B.reset();
                a.T = null;
                a.J = 0;
                for (var b = g.v(a.oa), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
                a.oa = [];
                a.ma("webChannelOpened");
                fob(a.Ma, "WEB_CHANNEL")
            });
            g.sd(a.channel, "n", function() {
                a.I = 0;
                a.B.isActive() || a.ma("webChannelClosed");
                var b, c = null == (b = a.channel) ? void 0 : kpb(new jpb(b, b.j));
                c && (a.oa = [].concat(g.la(c)));
                hob(a.Aa, "WEB_CHANNEL")
            });
            g.sd(a.channel, "p", function(b) {
                var c = b.data;
                "gracefulReconnect" === c[0] ? (a.B.start(), a.channel && a.channel.close()) : a.ma("webChannelMessage", new Xpb(c[0], c[1]));
                a.Lg = b.statusCode;
                job(a.Ka, "WEB_CHANNEL")
            });
            g.sd(a.channel, "o", function() {
                401 === a.Lg || a.B.start();
                a.ma("webChannelError");
                lob(a.Ga, "WEB_CHANNEL")
            })
        },
        eqb = function(a) {
            var b = a.ya();
            b ? a.C["x-youtube-lounge-xsrf-token"] = b : delete a.C["x-youtube-lounge-xsrf-token"]
        },
        fqb = function(a) {
            g.Cd.call(this);
            this.j = a();
            this.j.subscribe("webChannelOpened", this.A_, this);
            this.j.subscribe("webChannelClosed", this.y_, this);
            this.j.subscribe("webChannelError", this.onError, this);
            this.j.subscribe("webChannelMessage", this.z_, this)
        },
        gqb = function(a, b, c, d, e) {
            function f() {
                return new Zpb(P8(a, "/bc"), b, !1, c, d)
            }
            c = void 0 === c ? function() {
                return ""
            } : c;
            return g.jy("enable_mdx_web_channel_desktop") ? new fqb(function() {
                return new cqb(P8(a, "/wc"), b, c)
            }) : new bqb(f, e)
        },
        kqb = function() {
            var a = hqb;
            iqb();
            Q8.push(a);
            jqb()
        },
        R8 = function(a, b) {
            iqb();
            var c = lqb(a, String(b));
            g.xb(Q8) ? mqb(c) : (jqb(), g.Ub(Q8, function(d) {
                d(c)
            }))
        },
        S8 = function(a) {
            R8("CP", a)
        },
        iqb = function() {
            Q8 || (Q8 = g.La("yt.mdx.remote.debug.handlers_") || [], g.Ka("yt.mdx.remote.debug.handlers_", Q8))
        },
        mqb = function(a) {
            var b = (T8 + 1) % 50;
            T8 = b;
            U8[b] = a;
            V8 || (V8 = 49 == b)
        },
        jqb = function() {
            var a = Q8;
            if (U8[0]) {
                var b = V8 ? T8 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = U8[b];
                    g.Ub(a, function(d) {
                        d(c)
                    })
                } while (b != T8);
                U8 = Array(50);
                T8 = -1;
                V8 = !1
            }
        },
        lqb = function(a, b) {
            var c = (Date.now() - nqb) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        W8 = function(a) {
            g.iE.call(this);
            this.I = a;
            this.screens = []
        },
        oqb = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        pqb = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.Un(a.screens, function(f) {
                return !!Hnb(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = oqb(a, b[d]) || c;
            return c
        },
        qqb = function(a, b) {
            var c = a.screens.length;
            a.screens = g.Un(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        rqb = function(a, b, c, d, e) {
            g.iE.call(this);
            this.B = a;
            this.J = b;
            this.C = c;
            this.I = d;
            this.D = e;
            this.u = 0;
            this.j = null;
            this.Gc = NaN
        },
        Y8 = function(a) {
            W8.call(this, "LocalScreenService");
            this.u = a;
            this.j = NaN;
            X8(this);
            this.info("Initializing with " + Enb(this.screens))
        },
        sqb = function(a) {
            if (a.screens.length) {
                var b = g.fm(a.screens, function(d) {
                        return d.id
                    }),
                    c = P8(a.u, "/pairing/get_lounge_token_batch");
                aqb(a.u, c, {
                    screen_ids: b.join(",")
                }, (0, g.Ta)(a.L3, a), (0, g.Ta)(a.K3, a))
            }
        },
        X8 = function(a) {
            if (g.jy("deprecate_pair_servlet_enabled")) return pqb(a, []);
            var b = Dnb(Onb());
            b = g.Un(b, function(c) {
                return !c.uuid
            });
            return pqb(a, b)
        },
        Z8 = function(a, b) {
            Qnb(g.fm(a.screens, Bnb));
            b && Pnb()
        },
        uqb = function(a, b) {
            g.iE.call(this);
            this.I = b;
            b = (b = g.Tz("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.I(), e = d.length, f = 0; f < e; ++f) {
                var h = d[f].id;
                c[h] = g.wb(b, h)
            }
            this.j = c;
            this.D = a;
            this.B = this.C = NaN;
            this.u = null;
            tqb("Initialized with " + g.Ki(this.j))
        },
        vqb = function(a, b, c) {
            var d = P8(a.D, "/pairing/get_screen_availability");
            aqb(a.D, d, {
                lounge_token: b.token
            }, (0, g.Ta)(function(e) {
                e = e.screens || [];
                for (var f = e.length, h = 0; h < f; ++h)
                    if (e[h].loungeToken == b.token) {
                        c("online" == e[h].status);
                        return
                    }
                c(!1)
            }, a), (0, g.Ta)(function() {
                c(!1)
            }, a))
        },
        xqb = function(a, b) {
            a: if (snb(b) != snb(a.j)) var c = !1;
                else {
                    c = g.ad(b);
                    for (var d = c.length, e = 0; e < d; ++e)
                        if (!a.j[c[e]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (tqb("Updated online screens: " + g.Ki(a.j)), a.j = b, a.ma("screenChange"));wqb(a)
        },
        $8 = function(a) {
            isNaN(a.B) || g.Hy(a.B);
            a.B = g.Fy((0, g.Ta)(a.SO, a), 0 < a.C && a.C < g.Va() ? 2E4 : 1E4)
        },
        tqb = function(a) {
            R8("OnlineScreenService", a)
        },
        yqb = function(a) {
            var b = {};
            g.Ub(a.I(), function(c) {
                c.token ? b[c.token] = c.id : this.Sf("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        wqb = function(a) {
            a = g.ad(g.Wc(a.j, function(b) {
                return b
            }));
            g.Rb(a);
            a.length ? g.Sz("yt-remote-online-screen-ids", a.join(","), 60) : g.Uz("yt-remote-online-screen-ids")
        },
        a9 = function(a, b) {
            b = void 0 === b ? !1 : b;
            W8.call(this, "ScreenService");
            this.C = a;
            this.J = b;
            this.j = this.u = null;
            this.B = [];
            this.D = {};
            zqb(this)
        },
        Bqb = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.D[b]);
            var h = a.Bk(),
                l = c ? W7(h, c) : null;
            c && (a.J || l) || (l = W7(h, b));
            if (l) {
                l.uuid = b;
                var m = b9(a, l);
                vqb(a.j, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? Aqb(a, c, (0, g.Ta)(function(n) {
                var p = b9(this, new T7({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                vqb(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        Cqb = function(a, b) {
            for (var c = a.screens.length, d = 0; d < c; ++d)
                if (a.screens[d].name == b) return a.screens[d];
            return null
        },
        Dqb = function(a, b, c) {
            vqb(a.j, b, c)
        },
        Aqb = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.Ky(P8(a.C, "/pairing/get_lounge_token_batch"), e)
        },
        Eqb = function(a) {
            a.screens = a.u.Bk();
            var b = a.D,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = a.screens.length;
            for (d = 0; d < b; ++d) {
                var e = a.screens[d];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + Enb(a.screens))
        },
        zqb = function(a) {
            Fqb(a);
            a.u = new Y8(a.C);
            a.u.subscribe("screenChange", (0, g.Ta)(a.U3, a));
            Eqb(a);
            a.J || (a.B = Dnb(g.Tz("yt-remote-automatic-screen-cache") || []));
            Fqb(a);
            a.info("Initializing automatic screens: " + Enb(a.B));
            a.j = new uqb(a.C, (0, g.Ta)(a.Bk, a, !0));
            a.j.subscribe("screenChange", (0, g.Ta)(function() {
                this.ma("onlineScreenChange")
            }, a))
        },
        b9 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = W7(a.B, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.B.push(b), a.J || Gqb(a));
            Fqb(a);
            a.D[b.uuid] = b.id;
            g.Sz("yt-remote-device-id-map", a.D, 31536E3);
            return b
        },
        Gqb = function(a) {
            a = g.Un(a.B, function(b) {
                return "shortLived" != b.idType
            });
            g.Sz("yt-remote-automatic-screen-cache", g.fm(a, Bnb))
        },
        Fqb = function(a) {
            a.D = g.Tz("yt-remote-device-id-map") || {}
        },
        c9 = function(a, b, c) {
            g.iE.call(this);
            this.Ga = c;
            this.C = a;
            this.u = b;
            this.j = null
        },
        d9 = function(a, b) {
            a.j = b;
            a.ma("sessionScreen", a.j)
        },
        Hqb = function(a, b) {
            a.j && (a.j.token = b, b9(a.C, a.j));
            a.ma("sessionScreen", a.j)
        },
        e9 = function(a, b) {
            R8(a.Ga, b)
        },
        f9 = function(a, b, c) {
            c9.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.B = null;
            this.oa = (0, g.Ta)(this.F_, this);
            this.Aa = (0, g.Ta)(this.d8, this);
            this.Z = g.Fy(function() {
                Iqb(d, null)
            }, 12E4);
            this.J = this.D = this.I = this.T = 0;
            this.ya = !1;
            this.ea = "unknown"
        },
        Kqb = function(a, b) {
            g.Hy(a.J);
            a.J = 0;
            0 == b ? Jqb(a) : a.J = g.Fy(function() {
                Jqb(a)
            }, b)
        },
        Jqb = function(a) {
            Lqb(a, "getLoungeToken");
            g.Hy(a.D);
            a.D = g.Fy(function() {
                Mqb(a, null)
            }, 3E4)
        },
        Lqb = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Ki());
            var c = {};
            c.type = b;
            a.B ? a.B.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0, g.Ta)(function() {
                e9(this, "Failed to send message: " + b + ".")
            }, a)) : e9(a, "Sending yt message without session: " + g.Ki(c))
        },
        Nqb = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.j && a.j.id == b || a.dU(b, function(c) {
                d9(a, c)
            }, function() {
                return a.lj()
            }, 5)) : a.lj(Error("Waiting for session status timed out."))
        },
        Pqb = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new T7(b);
            Oqb(a, d, function(e) {
                e ? (a.ya = !0, b9(a.C, d), d9(a, d), a.ea = "unknown", Kqb(a, c)) : (g.oy(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.lj())
            }, 5)
        },
        Iqb = function(a, b) {
            g.Hy(a.Z);
            a.Z = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? Pqb(a, {
                    name: a.u.friendlyName,
                    screenId: b.screenId,
                    loungeToken: b.loungeToken,
                    dialId: b.deviceId,
                    screenIdType: "shortLived"
                }, b.loungeTokenRefreshIntervalMs) : (g.oy(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), Nqb(a, b.screenId))) : (g.oy(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), Nqb(a, b.screenId)) :
                Nqb(a, b.screenId) : a.lj(Error("Waiting for session status timed out."))
        },
        Mqb = function(a, b) {
            g.Hy(a.D);
            a.D = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.ea = c, Kqb(a, 3E4)) : (Hqb(a, b.loungeToken), a.ya = !1, a.ea = "unknown", Kqb(a, b.loungeTokenRefreshIntervalMs))
        },
        Oqb = function(a, b, c, d) {
            g.Hy(a.I);
            a.I = 0;
            Dqb(a.C, b, function(e) {
                e || 0 > d ? c(e) : a.I = g.Fy(function() {
                    Oqb(a, b, c, d - 1)
                }, 300)
            })
        },
        Qqb = function(a) {
            g.Hy(a.T);
            a.T = 0;
            g.Hy(a.I);
            a.I = 0;
            g.Hy(a.Z);
            a.Z = 0;
            g.Hy(a.D);
            a.D = 0;
            g.Hy(a.J);
            a.J = 0
        },
        g9 = function(a, b, c, d) {
            c9.call(this, a, b, "DialSession");
            this.config_ = d;
            this.B = this.T = null;
            this.Aa = "";
            this.Pa = c;
            this.Ma = null;
            this.Z = function() {};
            this.ea = NaN;
            this.Ka = (0, g.Ta)(this.G_, this);
            this.D = function() {};
            this.J = this.I = 0;
            this.oa = !1;
            this.ya = "unknown"
        },
        h9 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && (null == (b = a.B) ? 0 : b.getDialAppInfo))
        },
        Rqb = function(a) {
            a.D = a.C.gR(a.Aa, a.u.label, a.u.friendlyName, h9(a), function(b, c) {
                a.D = function() {};
                a.oa = !0;
                d9(a, b);
                "shortLived" == b.idType && 0 < c && i9(a, c)
            }, function(b) {
                a.D = function() {};
                a.lj(b)
            })
        },
        Sqb = function(a) {
            var b = {};
            b.pairingCode = a.Aa;
            b.theme = a.Pa;
            Snb() && (b.env_useStageMdx = 1);
            return g.Wi(b)
        },
        Tqb = function(a) {
            return new Promise(function(b) {
                a.Aa = Fnb();
                if (a.Ma) {
                    var c = new chrome.cast.DialLaunchResponse(!0, Sqb(a));
                    b(c);
                    Rqb(a)
                } else a.Z = function() {
                    g.Hy(a.ea);
                    a.Z = function() {};
                    a.ea = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, Sqb(a));
                    b(d);
                    Rqb(a)
                }, a.ea = g.Fy(function() {
                    a.Z()
                }, 100)
            })
        },
        Vqb = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new T7(b);
            return (new Promise(function(e) {
                Uqb(a, d, function(f) {
                    f ? (a.oa = !0, b9(a.C, d), d9(a, d), i9(a, c)) : g.oy(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : Tqb(a)
            })
        },
        Wqb = function(a, b) {
            var c = a.T.receiver.label,
                d = a.u.friendlyName;
            return (new Promise(function(e) {
                Bqb(a.C, c, b, d, function(f) {
                    f && f.token && d9(a, f);
                    e(f)
                }, function(f) {
                    e9(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : Tqb(a)
            })
        },
        Uqb = function(a, b, c, d) {
            g.Hy(a.I);
            a.I = 0;
            Dqb(a.C, b, function(e) {
                e || 0 > d ? c(e) : a.I = g.Fy(function() {
                    Uqb(a, b, c, d - 1)
                }, 300)
            })
        },
        i9 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            h9(a) && (g.Hy(a.J), a.J = 0, 0 == b ? Xqb(a) : a.J = g.Fy(function() {
                Xqb(a)
            }, b))
        },
        Xqb = function(a) {
            h9(a) && a.B.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.ya = c, i9(a, 3E4)) : (a.oa = !1, a.ya = "unknown", Hqb(a, b.loungeToken), i9(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.ya = "noLoungeTokenResponse";
                i9(a, 3E4)
            })
        },
        Yqb = function(a) {
            g.Hy(a.I);
            a.I = 0;
            g.Hy(a.J);
            a.J = 0;
            a.D();
            a.D = function() {};
            g.Hy(a.ea)
        },
        j9 = function(a, b) {
            c9.call(this, a, b, "ManualSession");
            this.B = g.Fy((0, g.Ta)(this.Yy, this, null), 150)
        },
        k9 = function(a, b) {
            g.iE.call(this);
            this.config_ = b;
            this.u = a;
            this.T = b.appId || "233637DE";
            this.C = b.theme || "cl";
            this.ea = b.disableCastApi || !1;
            this.I = b.forceMirroring || !1;
            this.j = null;
            this.J = !1;
            this.B = [];
            this.D = (0, g.Ta)(this.Y6, this)
        },
        Zqb = function(a, b) {
            return b ? g.sb(a.B, function(c) {
                return U7(b, c.label)
            }, a) : null
        },
        l9 = function(a) {
            R8("Controller", a)
        },
        hqb = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        m9 = function(a) {
            return a.J || !!a.B.length || !!a.j
        },
        n9 = function(a, b, c) {
            b != a.j && (g.gb(a.j), (a.j = b) ? (c ? a.ma("yt-remote-cast2-receiver-resumed",
                b.u) : a.ma("yt-remote-cast2-receiver-selected", b.u), b.subscribe("sessionScreen", (0, g.Ta)(a.FW, a, b)), b.subscribe("sessionFailed", function() {
                return $qb(a, b)
            }), b.j ? a.ma("yt-remote-cast2-session-change", b.j) : c && a.j.Yy(null)) : a.ma("yt-remote-cast2-session-change", null))
        },
        $qb = function(a, b) {
            a.j == b && a.ma("yt-remote-cast2-session-failed")
        },
        arb = function(a) {
            var b = a.u.fR(),
                c = a.j && a.j.u;
            a = g.fm(b, function(d) {
                c && U7(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = Zqb(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        hrb = function(a, b, c, d) {
            d.disableCastApi ? o9("Cannot initialize because disabled by Mdx config.") : brb() ? crb(b, d) && (drb(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? erb(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? erb(a, c) : (p9("Failed to load cast API: " + f), frb(!1), drb(!1), g.Uz("yt-remote-cast-available"), g.Uz("yt-remote-cast-receiver"),
                    grb(), c(!1))
            }, d.loadCastApiSetupScript ? g.wC("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= Tnb() && bob() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? Xnb() : 89 <= Tnb() ? dob() : (aob(), b8(cob.map(Ynb))))) : o9("Cannot initialize because not running Chrome")
        },
        grb = function() {
            o9("dispose");
            var a = q9();
            a && a.dispose();
            g.Ka("yt.mdx.remote.cloudview.instance_", null);
            irb(!1);
            g.uC(jrb);
            jrb.length = 0
        },
        r9 = function() {
            return !!g.Tz("yt-remote-cast-installed")
        },
        krb = function() {
            var a = g.Tz("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        lrb = function() {
            o9("clearCurrentReceiver");
            g.Uz("yt-remote-cast-receiver")
        },
        mrb = function() {
            return r9() ? q9() ? q9().getCastSession() : (p9("getCastSelector: Cast is not initialized."), null) : (p9("getCastSelector: Cast API is not installed!"), null)
        },
        nrb = function() {
            r9() ? q9() ? s9() ? (o9("Requesting cast selector."), q9().requestSession()) : (o9("Wait for cast API to be ready to request the session."), jrb.push(g.tC("yt-remote-cast2-api-ready", nrb))) : p9("requestCastSelector: Cast is not initialized.") : p9("requestCastSelector: Cast API is not installed!")
        },
        t9 = function(a, b) {
            s9() ? q9().setConnectedScreenStatus(a, b) : p9("setConnectedScreenStatus called before ready.")
        },
        brb = function() {
            var a = 0 <= g.hc().search(/ (CrMo|Chrome|CriOS)\//);
            return g.$H || a
        },
        orb = function(a, b) {
            q9().init(a, b)
        },
        crb = function(a, b) {
            var c = !1;
            q9() || (a = new k9(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.Sz("yt-remote-cast-available", d);
                a8("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                o9("onReceiverSelected: " + d.friendlyName);
                g.Sz("yt-remote-cast-receiver", d);
                a8("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                o9("onReceiverResumed: " + d.friendlyName);
                g.Sz("yt-remote-cast-receiver", d);
                a8("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                o9("onSessionChange: " + V7(d));
                d || g.Uz("yt-remote-cast-receiver");
                a8("yt-remote-cast2-session-change", d)
            }), g.Ka("yt.mdx.remote.cloudview.instance_", a), c = !0);
            o9("cloudview.createSingleton_: " + c);
            return c
        },
        q9 = function() {
            return g.La("yt.mdx.remote.cloudview.instance_")
        },
        erb = function(a, b) {
            frb(!0);
            drb(!1);
            orb(a, function(c) {
                c ? (irb(!0), g.vC("yt-remote-cast2-api-ready")) : (p9("Failed to initialize cast API."), frb(!1), g.Uz("yt-remote-cast-available"), g.Uz("yt-remote-cast-receiver"), grb());
                b(c)
            })
        },
        o9 = function(a) {
            R8("cloudview", a)
        },
        p9 = function(a) {
            R8("cloudview", a)
        },
        frb = function(a) {
            o9("setCastInstalled_ " + a);
            g.Sz("yt-remote-cast-installed", a)
        },
        s9 = function() {
            return !!g.La("yt.mdx.remote.cloudview.apiReady_")
        },
        irb = function(a) {
            o9("setApiReady_ " + a);
            g.Ka("yt.mdx.remote.cloudview.apiReady_", a)
        },
        drb = function(a) {
            g.Ka("yt.mdx.remote.cloudview.initializing_", a)
        },
        u9 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.I = this.J = 0;
            this.trackData = null;
            this.Fk = this.Oo = !1;
            this.T = this.D = this.j = this.C = 0;
            this.B = NaN;
            this.u = !1;
            this.reset(a)
        },
        prb = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.Oo = !1;
            a.Fk = !1;
            a.J = 0;
            a.I = g.Va();
            a.C = 0;
            a.j = 0;
            a.D = 0;
            a.T = 0;
            a.B = NaN;
            a.u = !1
        },
        v9 = function(a) {
            return a.bd() ? (g.Va() - a.I) / 1E3 : 0
        },
        w9 = function(a, b) {
            a.J = b;
            a.I = g.Va()
        },
        x9 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.Va() - a.I) / 1E3 + a.J;
                case -1E3:
                    return 0
            }
            return a.J
        },
        y9 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && prb(a)
        },
        qrb = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.kd(a.trackData);
            b.hasPrevious = a.Oo;
            b.hasNext = a.Fk;
            b.playerTime = a.J;
            b.playerTimeAt = a.I;
            b.seekableStart = a.C;
            b.seekableEnd = a.j;
            b.duration = a.D;
            b.loadedTime = a.T;
            b.liveIngestionTime = a.B;
            return b
        },
        A9 = function(a, b) {
            g.iE.call(this);
            this.B = 0;
            this.C = a;
            this.I = [];
            this.D = new Upb;
            this.u = this.j = null;
            this.ea = (0, g.Ta)(this.M5, this);
            this.J = (0, g.Ta)(this.VC, this);
            this.T = (0, g.Ta)(this.L5, this);
            this.Z = (0, g.Ta)(this.R5, this);
            var c = 0;
            a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.kP, this), rrb(this))) : c = 3;
            0 != c && (b ? this.kP(c) : g.Fy((0, g.Ta)(function() {
                this.kP(c)
            }, this), 0));
            (a = mrb()) && z9(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.Z)
        },
        B9 = function(a) {
            return new u9(a.C.getPlayerContextData())
        },
        rrb = function(a) {
            g.Ub("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.I.push(this.C.subscribe(b, g.Ua(this.W6, b), this))
            }, a)
        },
        srb = function(a) {
            g.Ub(a.I, function(b) {
                this.C.unsubscribeByKey(b)
            }, a);
            a.I.length = 0
        },
        C9 = function(a) {
            return 1 == a.getState()
        },
        D9 = function(a, b) {
            var c = a.D;
            50 > c.j.length + c.u.length && a.D.u.push(b)
        },
        trb = function(a, b, c) {
            var d = B9(a);
            w9(d, c); - 1E3 != d.playerState && (d.playerState = b);
            P9(a, d)
        },
        R9 = function(a, b, c) {
            a.C.sendMessage(b, c)
        },
        P9 = function(a, b) {
            srb(a);
            a.C.setPlayerContextData(qrb(b));
            rrb(a)
        },
        z9 = function(a, b) {
            a.u && (a.u.removeUpdateListener(a.ea), a.u.removeMediaListener(a.J), a.VC(null));
            a.u = b;
            a.u && (S8("Setting cast session: " + a.u.sessionId), a.u.addUpdateListener(a.ea), a.u.addMediaListener(a.J), a.u.media.length && a.VC(a.u.media[0]))
        },
        urb = function(a) {
            var b = a.j.media,
                c = a.j.customData;
            if (b && c) {
                var d = B9(a);
                b.contentId != d.videoId && S8("Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                w9(d, a.j.getEstimatedTime());
                P9(a, d)
            } else S8("No cast media video. Ignoring state update.")
        },
        S9 = function(a, b, c) {
            return (0, g.Ta)(function(d) {
                this.Sf("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.Sf("Retrying " + b + " using MDx browser channel."), R9(this, b, c))
            }, a)
        },
        V9 = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.iE.call(this);
            var e = this;
            this.I = NaN;
            this.Aa = !1;
            this.ea = this.T = this.oa = this.ya = NaN;
            this.Z = [];
            this.D = this.J = this.C = this.j = this.u = null;
            this.Ma = a;
            this.Ka = d;
            this.Z.push(g.Hz(window, "beforeunload", function() {
                e.py(2)
            }));
            this.B = [];
            this.j = new u9;
            this.Pa = b.id;
            this.Ga = b.idType;
            this.u = gqb(this.Ma, c, this.kR, "shortLived" == this.Ga, this.Pa);
            this.u.Sa("channelOpened", function() {
                vrb(e)
            });
            this.u.Sa("channelClosed", function() {
                T9("Channel closed");
                isNaN(e.I) ? Z7(!0) : Z7();
                e.dispose()
            });
            this.u.Sa("channelError", function(f) {
                Z7();
                isNaN(e.UB()) ? (1 == f && "shortLived" == e.Ga && e.ma("browserChannelAuthError", f), T9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.Aa = !0, T9("Channel error: " + f + " with reconnection in " + e.UB() + " ms"), U9(e, 2))
            });
            this.u.Sa("channelMessage", function(f) {
                wrb(e, f)
            });
            this.u.Vq(b.token);
            this.subscribe("remoteQueueChange", function() {
                var f = e.j.videoId;
                g.Vz() && g.Sz("yt-remote-session-video-id", f)
            })
        },
        xrb = function(a) {
            return g.sb(a.B, function(b) {
                return "LOUNGE_SCREEN" == b.type
            })
        },
        T9 = function(a) {
            R8("conn", a)
        },
        U9 = function(a, b) {
            a.ma("proxyStateChange", b)
        },
        yrb = function(a) {
            a.I = g.Fy(function() {
                T9("Connecting timeout");
                a.py(1)
            }, 2E4)
        },
        zrb = function(a) {
            g.Hy(a.I);
            a.I = NaN
        },
        Arb = function(a) {
            g.Hy(a.ya);
            a.ya = NaN
        },
        Crb = function(a) {
            Brb(a);
            a.oa = g.Fy(function() {
                W9(a, "getNowPlaying")
            }, 2E4)
        },
        Brb = function(a) {
            g.Hy(a.oa);
            a.oa = NaN
        },
        vrb = function(a) {
            T9("Channel opened");
            a.Aa && (a.Aa = !1, Arb(a), a.ya = g.Fy(function() {
                T9("Timing out waiting for a screen.");
                a.py(1)
            }, 15E3))
        },
        Erb = function(a, b) {
            var c = null;
            if (b) {
                var d = xrb(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Ka("yt.mdx.remote.remoteClient_", c);
            b && (zrb(a), Arb(a));
            c = a.u.Py() && isNaN(a.I);
            b == c ? b && (U9(a, 1), W9(a, "getSubtitlesTrack")) : b ? (a.bU() && a.j.reset(), U9(a, 1), W9(a, "getNowPlaying"), Drb(a)) : a.py(1)
        },
        Frb = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.j.videoId && (g.fd(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.ma("remotePlayerChange"))
        },
        Grb = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId;
            y9(a.j, d, e);
            a.ma("remoteQueueChange", c)
        },
        Irb = function(a, b) {
            b.params = b.params || {};
            Grb(a, b, "NOW_PLAYING_MAY_CHANGE");
            Hrb(a, b);
            a.ma("autoplayDismissed")
        },
        Hrb = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            w9(a.j, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.j.playerState && (c = -1E3);
            a.j.playerState = c;
            c = Number(b.params.loadedTime);
            a.j.T = isNaN(c) ? 0 : c;
            a.j.Uk(Number(b.params.duration));
            c = a.j;
            var d = Number(b.params.liveIngestionTime);
            c.B = d;
            c.u = isNaN(d) ? !1 : !0;
            c = a.j;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.C = isNaN(d) ? 0 : d;
            c.j = isNaN(b) ? 0 : b;
            1 == a.j.playerState ? Crb(a) : Brb(a);
            a.ma("remotePlayerChange")
        },
        Jrb = function(a, b) {
            if (-1E3 != a.j.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.j.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                w9(a.j, isNaN(b) ? 0 : b);
                a.ma("remotePlayerChange")
            }
        },
        Krb = function(a, b) {
            var c = "true" == b.params.muted;
            a.j.volume = parseInt(b.params.volume, 10);
            a.j.muted = c;
            a.ma("remotePlayerChange")
        },
        Lrb = function(a, b) {
            a.J = b.params.videoId;
            a.ma("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        Mrb = function(a, b) {
            a.J = b.params.videoId || null;
            a.ma("autoplayUpNext", a.J)
        },
        Nrb = function(a, b) {
            a.D = b.params.autoplayMode;
            a.ma("autoplayModeChange", a.D);
            "DISABLED" == a.D && a.ma("autoplayDismissed")
        },
        Orb = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.j.Oo = "true" == b.params.hasPrevious;
            a.j.Fk = c;
            a.ma("previousNextChange")
        },
        wrb = function(a, b) {
            b = b.message;
            b.params ? T9("Received: action=" + b.action + ", params=" + g.Ki(b.params)) : T9("Received: action=" + b.action + " {}");
            switch (b.action) {
                case "loungeStatus":
                    b = R7(b.params.devices);
                    a.B = g.fm(b, function(d) {
                        return new S7(d)
                    });
                    b = !!g.sb(a.B, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    Erb(a, b);
                    b = a.UU("mlm");
                    a.ma("multiStateLoopEnabled", b);
                    break;
                case "loungeScreenDisconnected":
                    g.Bb(a.B, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    Erb(a, !1);
                    break;
                case "remoteConnected":
                    var c = new S7(R7(b.params.device));
                    g.sb(a.B, function(d) {
                        return d.equals(c)
                    }) || rnb(a.B, c);
                    break;
                case "remoteDisconnected":
                    c = new S7(R7(b.params.device));
                    g.Bb(a.B, function(d) {
                        return d.equals(c)
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    Grb(a, b, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    Irb(a, b);
                    break;
                case "onStateChange":
                    Hrb(a, b);
                    break;
                case "onAdStateChange":
                    Jrb(a, b);
                    break;
                case "onVolumeChanged":
                    Krb(a, b);
                    break;
                case "onSubtitlesTrackChanged":
                    Frb(a, b);
                    break;
                case "nowAutoplaying":
                    Lrb(a, b);
                    break;
                case "autoplayDismissed":
                    a.ma("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    Mrb(a, b);
                    break;
                case "onAutoplayModeChanged":
                    Nrb(a, b);
                    break;
                case "onHasPreviousNextChanged":
                    Orb(a, b);
                    break;
                case "requestAssistedSignIn":
                    a.ma("assistedSignInRequested", b.params.authCode);
                    break;
                case "onLoopModeChanged":
                    a.ma("loopModeChange", b.params.loopMode);
                    break;
                default:
                    T9("Unrecognized action: " + b.action)
            }
        },
        Drb = function(a) {
            g.Hy(a.ea);
            a.ea = g.Fy(function() {
                a.py(1)
            }, 864E5)
        },
        W9 = function(a, b, c) {
            c ? T9("Sending: action=" + b + ", params=" + g.Ki(c)) : T9("Sending: action=" + b);
            a.u.sendMessage(b, c)
        },
        Prb = function(a) {
            W8.call(this, "ScreenServiceProxy");
            this.Vg = a;
            this.j = [];
            this.j.push(this.Vg.$_s("screenChange", (0, g.Ta)(this.K_, this)));
            this.j.push(this.Vg.$_s("onlineScreenChange", (0, g.Ta)(this.E6, this)))
        },
        Urb = function(a, b) {
            Rnb();
            if (!$7 || !$7.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.hy("MDX_CONFIG") || b;
                Inb();
                Mnb();
                X9 || (X9 = new O8(b ? b.loungeApiHost : void 0), Snb() && (X9.j = "/api/loungedev"));
                Y9 || (Y9 = g.La("yt.mdx.remote.deferredProxies_") || [], g.Ka("yt.mdx.remote.deferredProxies_", Y9));
                Qrb();
                var c = Z9();
                if (!c) {
                    var d = new a9(X9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Ka("yt.mdx.remote.screenService_", d);
                    c = Z9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Ka("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                    hrb(a, d, function(f) {
                        f ? $9() && t9($9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            a8("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.La("yt.mdx.remote.initialized_") && (g.Ka("yt.mdx.remote.initialized_", !0), a$("Initializing: " + g.Ki(b)),
                    b$.push(g.tC("yt-remote-cast2-api-ready", function() {
                        a8("yt-remote-api-ready")
                    })), b$.push(g.tC("yt-remote-cast2-availability-change", function() {
                        a8("yt-remote-receiver-availability-change")
                    })), b$.push(g.tC("yt-remote-cast2-receiver-selected", function() {
                        c$(null);
                        a8("yt-remote-auto-connect", "cast-selector-receiver")
                    })), b$.push(g.tC("yt-remote-cast2-receiver-resumed", function() {
                        a8("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), b$.push(g.tC("yt-remote-cast2-session-change", Rrb)), b$.push(g.tC("yt-remote-connection-change", function(f) {
                        f ? t9($9(), "YouTube TV") : d$() || (t9(null, null), lrb())
                    })), b$.push(g.tC("yt-remote-cast2-session-failed", function() {
                        a8("yt-remote-connection-failed")
                    })), a = Srb(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.jy("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), a$(" -- with channel params: " + g.Ki(a)), a ? (g.Sz("yt-remote-session-app", a.app), g.Sz("yt-remote-session-name", a.name)) : (g.Uz("yt-remote-session-app"), g.Uz("yt-remote-session-name")), g.Ka("yt.mdx.remote.channelParams_", a), c.start(), $9() || Trb())
            }
        },
        Vrb = function() {
            var a = Z9().Vg.$_gos();
            var b = e$();
            b && f$() && (Hnb(a, b) || a.push(b));
            return Gnb(a)
        },
        Xrb = function() {
            var a = Wrb();
            !a && r9() && krb() && (a = {
                key: "cast-selector-receiver",
                name: krb()
            });
            return a
        },
        Wrb = function() {
            var a = Vrb(),
                b = e$();
            b || (b = d$());
            return g.sb(a, function(c) {
                return b && U7(b, c.key) ? !0 : !1
            })
        },
        e$ = function() {
            var a = $9();
            if (!a) return null;
            var b = Z9().Bk();
            return W7(b, a)
        },
        Rrb = function(a) {
            a$("remote.onCastSessionChange_: " + V7(a));
            if (a) {
                var b = e$();
                if (b && b.id == a.id) {
                    if (t9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) g$ && (g$.token = a), (b = f$()) && b.Vq(a)
                } else b && h$(), i$(a, 1)
            } else f$() && h$()
        },
        h$ = function() {
            s9() ? q9().stopSession() : p9("stopSession called before API ready.");
            var a = f$();
            a && (a.disconnect(1), Yrb(null))
        },
        Zrb = function() {
            var a = f$();
            return !!a && 3 != a.getProxyState()
        },
        a$ = function(a) {
            R8("remote", a)
        },
        Z9 = function() {
            if (!$rb) {
                var a = g.La("yt.mdx.remote.screenService_");
                $rb = a ? new Prb(a) : null
            }
            return $rb
        },
        $9 = function() {
            return g.La("yt.mdx.remote.currentScreenId_")
        },
        asb = function(a) {
            g.Ka("yt.mdx.remote.currentScreenId_", a)
        },
        bsb = function() {
            return g.La("yt.mdx.remote.connectData_")
        },
        c$ = function(a) {
            g.Ka("yt.mdx.remote.connectData_", a)
        },
        f$ = function() {
            return g.La("yt.mdx.remote.connection_")
        },
        Yrb = function(a) {
            var b = f$();
            c$(null);
            a || asb("");
            g.Ka("yt.mdx.remote.connection_", a);
            Y9 && (g.Ub(Y9, function(c) {
                c(a)
            }), Y9.length = 0);
            b && !a ? a8("yt-remote-connection-change", !1) : !b && a && a8("yt-remote-connection-change", !0)
        },
        d$ = function() {
            var a = g.Vz();
            if (!a) return null;
            var b = Z9();
            if (!b) return null;
            b = b.Bk();
            return W7(b, a)
        },
        i$ = function(a, b) {
            $9();
            e$() && e$();
            if (j$) g$ = a;
            else {
                asb(a.id);
                var c = g.La("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new V9(X9, a, Srb(), c);
                a.connect(b, bsb());
                a.subscribe("beforeDisconnect", function(d) {
                    a8("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    f$() && (f$(), Yrb(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = e$();
                    d && "shortLived" == d.idType && (s9() ? q9().handleBrowserChannelAuthError() : p9("refreshLoungeToken called before API ready."))
                });
                Yrb(a)
            }
        },
        Trb = function() {
            var a = d$();
            a ? (a$("Resume connection to: " + V7(a)), i$(a, 0)) : (Z7(), lrb(), a$("Skipping connecting because no session screen found."))
        },
        Qrb = function() {
            var a = Srb();
            if (g.fd(a)) {
                a = Y7();
                var b = g.Tz("yt-remote-session-name") || "",
                    c = g.Tz("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                a.authuser = String(g.hy("SESSION_INDEX", "0"));
                (b = g.hy("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
                g.Ka("yt.mdx.remote.channelParams_", a)
            }
        },
        Srb = function() {
            return g.La("yt.mdx.remote.channelParams_") || {}
        },
        esb = function(a, b, c) {
            g.E.call(this);
            var d = this;
            this.module = a;
            this.F = b;
            this.Bc = c;
            this.events = new g.XH(this);
            this.ea = this.events.S(this.F, "onVolumeChange", function(e) {
                csb(d, e)
            });
            this.C = !1;
            this.D = new g.XO(64);
            this.j = new g.Gp(this.WX, 500, this);
            this.u = new g.Gp(this.XX, 1E3, this);
            this.J = new d8(this.T9, 0, this);
            this.B = {};
            this.T = new g.Gp(this.MY, 1E3, this);
            this.I = new e8(this.seekTo, 1E3, this);
            g.I(this, this.events);
            this.events.S(b, "onCaptionsTrackListChanged", this.p6);
            this.events.S(b, "captionschanged", this.J5);
            this.events.S(b, "captionssettingschanged", this.gY);
            this.events.S(b, "videoplayerreset", this.jH);
            this.events.S(b, "mdxautoplaycancel", function() {
                d.Bc.lT()
            });
            b.K("enable_mdx_video_play_directly") && this.events.S(b, "videodatachange", function() {
                dsb(d.module) || k$(d) || l$(d, 0)
            });
            a = this.Bc;
            a.isDisposed();
            a.subscribe("proxyStateChange", this.BW, this);
            a.subscribe("remotePlayerChange", this.bD, this);
            a.subscribe("remoteQueueChange", this.jH, this);
            a.subscribe("previousNextChange", this.xW, this);
            a.subscribe("nowAutoplaying", this.sW, this);
            a.subscribe("autoplayDismissed", this.WV, this);
            g.I(this, this.j);
            g.I(this, this.u);
            g.I(this, this.J);
            g.I(this, this.T);
            g.I(this, this.I);
            this.gY();
            this.jH();
            this.bD()
        },
        csb = function(a, b) {
            if (k$(a)) {
                a.Bc.unsubscribe("remotePlayerChange", a.bD, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = B9(a.Bc);
                if (c !== d.volume || b !== d.muted) a.Bc.setVolume(c, b), a.T.start();
                a.Bc.subscribe("remotePlayerChange", a.bD, a)
            }
        },
        fsb = function(a) {
            a.zc(0);
            a.j.stop();
            a.qc(new g.XO(64))
        },
        gsb = function(a, b) {
            if (k$(a) && !a.C) {
                var c = null;
                b && (c = {
                    style: a.F.getSubtitlesUserSettings()
                }, g.ld(c, b));
                a.Bc.jR(a.F.getVideoData(1).videoId, c);
                a.B = B9(a.Bc).trackData
            }
        },
        l$ = function(a, b) {
            var c = a.F.getPlaylist();
            if (null == c ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.F.getVideoData(1);
            a.Bc.playVideo(c.videoId, b, d, e, c.playerParams, c.ya, qnb(c));
            a.qc(new g.XO(1))
        },
        hsb = function(a, b) {
            if (b) {
                var c = a.F.getOption("captions", "tracklist", {
                    KU: 1
                });
                c && c.length ? (a.F.setOption("captions", "track", b), a.C = !1) : (a.F.loadModule("captions"), a.C = !0)
            } else a.F.setOption("captions", "track", {})
        },
        k$ = function(a) {
            return B9(a.Bc).videoId === a.F.getVideoData(1).videoId
        },
        m$ = function() {
            g.V.call(this, {
                G: "div",
                N: "ytp-mdx-popup-dialog",
                X: {
                    role: "dialog"
                },
                W: [{
                    G: "div",
                    N: "ytp-mdx-popup-dialog-inner-content",
                    W: [{
                        G: "div",
                        N: "ytp-mdx-popup-title",
                        ra: "You're signed out"
                    }, {
                        G: "div",
                        N: "ytp-mdx-popup-description",
                        ra: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        G: "div",
                        N: "ytp-mdx-privacy-popup-buttons",
                        W: [{
                            G: "button",
                            Ja: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            ra: "Cancel"
                        }, {
                            G: "button",
                            Ja: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            ra: "Confirm"
                        }]
                    }]
                }]
            });
            this.j = new g.aR(this, 250);
            this.cancelButton = this.Da("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Da("ytp-mdx-privacy-popup-confirm");
            g.I(this, this.j);
            this.S(this.cancelButton, "click", this.u);
            this.S(this.confirmButton, "click", this.B)
        },
        n$ = function(a) {
            g.V.call(this, {
                G: "div",
                N: "ytp-remote",
                W: [{
                    G: "div",
                    N: "ytp-remote-display-status",
                    W: [{
                        G: "div",
                        N: "ytp-remote-display-status-icon",
                        W: [g.dDa()]
                    }, {
                        G: "div",
                        N: "ytp-remote-display-status-text",
                        ra: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.j = new g.aR(this, 250);
            g.I(this, this.j);
            this.S(a, "presentingplayerstatechange", this.onStateChange);
            this.uc(a.Db())
        },
        o$ = function(a, b) {
            g.zV.call(this, "Play on", 1, a, b);
            this.F = a;
            this.zt = {};
            this.S(a, "onMdxReceiversChange", this.C);
            this.S(a, "presentingplayerstatechange", this.C);
            this.C()
        },
        isb = function(a) {
            g.tT.call(this, a);
            this.Zo = {
                key: Fnb(),
                name: "This computer"
            };
            this.Al = null;
            this.subscriptions = [];
            this.xO = this.Bc = null;
            this.zt = [this.Zo];
            this.Sr = this.Zo;
            this.Ue = new g.XO(64);
            this.hV = 0;
            this.Bh = -1;
            this.qD = !1;
            this.oD = this.Bz = null;
            if (!g.xK(this.player.V()) && !g.yK(this.player.V())) {
                a = this.player;
                var b = g.iS(a);
                b && (b = b.Qm()) && (b = new o$(a, b), g.I(this, b));
                b = new n$(a);
                g.I(this, b);
                g.yS(a, b.element, 4);
                this.Bz = new m$;
                g.I(this, this.Bz);
                g.yS(a, this.Bz.element, 4);
                this.qD = !!d$()
            }
        },
        p$ = function(a) {
            a.oD && (a.player.removeEventListener("presentingplayerstatechange",
                a.oD), a.oD = null)
        },
        jsb = function(a, b, c) {
            a.Ue = c;
            a.player.ma("presentingplayerstatechange", new g.iO(c, b))
        },
        q$ = function(a, b) {
            if (b.key !== a.Sr.key)
                if (b.key === a.Zo.key) h$();
                else if (dsb(a) && ksb(a), a.Sr = b, !a.player.V().K("disable_mdx_connection_in_mdx_module_for_music_web") || !g.yK(a.player.V())) {
                var c = a.player.getPlaylistId();
                var d = a.player.getVideoData(1);
                var e = d.videoId;
                if (!c && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.V().K("should_clear_video_data_on_player_cued_unstarted")) d = null;
                else {
                    var f = a.player.getPlaylist();
                    if (f) {
                        var h = [];
                        for (var l = 0; l < f.length; l++) h[l] = g.qT(f, l).videoId
                    } else h = [e];
                    f = a.player.getCurrentTime(1);
                    a = {
                        videoIds: h,
                        listId: c,
                        videoId: e,
                        playerParams: d.playerParams,
                        clickTrackingParams: d.ya,
                        index: Math.max(a.player.getPlaylistIndex(), 0),
                        currentTime: 0 === f ? void 0 : f
                    };
                    (d = qnb(d)) && (a.locationInfo = d);
                    d = a
                }
                a$("Connecting to: " + g.Ki(b));
                "cast-selector-receiver" == b.key ? (c$(d || null), b = d || null, s9() ? q9().setLaunchParams(b) : p9("setLaunchParams called before ready.")) : !d && Zrb() && $9() == b.key ? a8("yt-remote-connection-change", !0) : (h$(), c$(d || null), d = Z9().Bk(), (b = W7(d, b.key)) && i$(b, 1))
            }
        },
        dsb = function(a) {
            var b;
            (b = !a.player.V().K("mdx_enable_privacy_disclosure_ui")) || (b = ((b = g.hy("PLAYER_CONFIG")) && b.args && void 0 !== b.args.authuser ? !0 : !(!g.hy("SESSION_INDEX") && !g.hy("LOGGED_IN"))) || a.qD || !a.Bz);
            return b ? !1 : g.OK(a.player.V()) || g.RK(a.player.V())
        },
        ksb = function(a) {
            a.player.Db().bd() ? a.player.pauseVideo() : (a.oD = function(b) {
                !a.qD && g.kO(b, 8) && (a.player.pauseVideo(), p$(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.oD));
            a.Bz && a.Bz.pd();
            f$() || (j$ = !0)
        };
    g.Us.prototype.ws = g.ba(0, function() {
        return g.Oh(this, 6)
    });
    var spb = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        F8 = {
            "'": "\\'"
        },
        znb = {
            Aia: "atp",
            rUa: "ska",
            FRa: "que",
            RJa: "mus",
            qUa: "sus",
            nwa: "dsp",
            JSa: "seq",
            KIa: "mic",
            Voa: "dpa",
            xja: "cds",
            HJa: "mlm",
            Joa: "dsdtr",
            sKa: "ntb",
            A3a: "vsp",
            Mpa: "scn",
            TRa: "rpe"
        },
        Anb = {
            u1: "u",
            CLASSIC: "cl",
            R0: "k",
            KZ: "i",
            tZ: "cr",
            X0: "m",
            HZ: "g",
            kS: "up"
        };
    S7.prototype.equals = function(a) {
        return a ? this.id == a.id : !1
    };
    var $7, Lnb = "",
        $nb = Unb("loadCastFramework") || Unb("loadCastApplicationFramework"),
        cob = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.Ya(d8, g.E);
    g.k = d8.prototype;
    g.k.j_ = function(a) {
        this.C = arguments;
        this.j = !1;
        this.Gc ? this.B = g.Va() + this.Hi : this.Gc = g.Mf(this.D, this.Hi)
    };
    g.k.stop = function() {
        this.Gc && (g.Ja.clearTimeout(this.Gc), this.Gc = null);
        this.B = null;
        this.j = !1;
        this.C = []
    };
    g.k.pause = function() {
        ++this.u
    };
    g.k.resume = function() {
        this.u && (--this.u, !this.u && this.j && (this.j = !1, this.I.apply(null, this.C)))
    };
    g.k.qa = function() {
        this.stop();
        d8.Hf.qa.call(this)
    };
    g.k.k_ = function() {
        this.Gc && (g.Ja.clearTimeout(this.Gc), this.Gc = null);
        this.B ? (this.Gc = g.Mf(this.D, this.B - g.Va()), this.B = null) : this.u ? this.j = !0 : (this.j = !1, this.I.apply(null, this.C))
    };
    g.x(e8, g.E);
    g.k = e8.prototype;
    g.k.lJ = function(a) {
        this.B = arguments;
        this.Gc || this.u ? this.j = !0 : oob(this)
    };
    g.k.stop = function() {
        this.Gc && (g.Ja.clearTimeout(this.Gc), this.Gc = null, this.j = !1, this.B = null)
    };
    g.k.pause = function() {
        this.u++
    };
    g.k.resume = function() {
        this.u--;
        this.u || !this.j || this.Gc || (this.j = !1, oob(this))
    };
    g.k.qa = function() {
        g.E.prototype.qa.call(this);
        this.stop()
    };
    f8.prototype.stringify = function(a) {
        return g.Ja.JSON.stringify(a, void 0)
    };
    f8.prototype.parse = function(a) {
        return g.Ja.JSON.parse(a, void 0)
    };
    g.Ya(pob, g.pb);
    g.Ya(qob, g.pb);
    var rob = null;
    g.Ya(tob, g.pb);
    g.Ya(uob, g.pb);
    g.Ya(vob, g.pb);
    wob.prototype.info = function() {};
    wob.prototype.warning = function() {};
    var Dob = {},
        l8 = {};
    g.k = j8.prototype;
    g.k.setTimeout = function(a) {
        this.Ob = a
    };
    g.k.n_ = function(a) {
        a = a.target;
        var b = this.bb;
        b && 3 == g.qj(a) ? b.lJ() : this.NQ(a)
    };
    g.k.NQ = function(a) {
        try {
            if (a == this.j) a: {
                var b = g.qj(this.j),
                    c = this.j.u,
                    d = this.j.getStatus();
                if (!(3 > b) && (3 != b || g.SK || this.j && (this.u.u || g.sj(this.j) || g.tj(this.j)))) {
                    this.Ka || 4 != b || 7 == c || (8 == c || 0 >= d ? g8(3) : g8(2));
                    o8(this);
                    var e = this.j.getStatus();
                    this.Vb = e;
                    b: if (Bob(this)) {
                        var f = g.tj(this.j);
                        a = "";
                        var h = f.length,
                            l = 4 == g.qj(this.j);
                        if (!this.u.B) {
                            if ("undefined" === typeof TextDecoder) {
                                m8(this);
                                n8(this);
                                var m = "";
                                break b
                            }
                            this.u.B = new g.Ja.TextDecoder
                        }
                        for (c = 0; c < h; c++) this.u.u = !0, a += this.u.B.decode(f[c], {
                            stream: l &&
                                c == h - 1
                        });
                        f.splice(0, h);
                        this.u.j += a;
                        this.Z = 0;
                        m = this.u.j
                    } else m = g.sj(this.j);
                    if (this.B = 200 == e) {
                        if (this.lc && !this.Xa) {
                            b: {
                                if (this.j) {
                                    var n = g.uj(this.j, "X-HTTP-Initial-Response");
                                    if (n && !g.$b(n)) {
                                        var p = n;
                                        break b
                                    }
                                }
                                p = null
                            }
                            if (e = p) this.Xa = !0,
                            Eob(this, e);
                            else {
                                this.B = !1;
                                this.I = 3;
                                h8(12);
                                m8(this);
                                n8(this);
                                break a
                            }
                        }
                        this.Ga ? (Fob(this, b, m), g.SK && this.B && 3 == b && (this.jb.Sa(this.qb, "tick", this.m_), this.qb.start())) : Eob(this, m);
                        4 == b && m8(this);
                        this.B && !this.Ka && (4 == b ? Hob(this.D, this) : (this.B = !1, k8(this)))
                    } else g.Dfa(this.j),
                        400 == e && 0 < m.indexOf("Unknown SID") ? (this.I = 3, h8(12)) : (this.I = 0, h8(13)), m8(this), n8(this)
                }
            }
        } catch (q) {} finally {}
    };
    g.k.m_ = function() {
        if (this.j) {
            var a = g.qj(this.j),
                b = g.sj(this.j);
            this.Z < b.length && (o8(this), Fob(this, a, b), this.B && 4 != a && k8(this))
        }
    };
    g.k.cancel = function() {
        this.Ka = !0;
        m8(this)
    };
    g.k.l_ = function() {
        this.ea = null;
        var a = Date.now();
        0 <= a - this.Gb ? (2 != this.Pa && (g8(3), h8(17)), m8(this), this.I = 2, n8(this)) : Gob(this, this.Gb - a)
    };
    g.k.getLastError = function() {
        return this.I
    };
    g.k.eM = function() {
        return this.j
    };
    Qob.prototype.cancel = function() {
        this.B = Sob(this);
        if (this.u) this.u.cancel(), this.u = null;
        else if (this.j && 0 !== this.j.size) {
            for (var a = g.v(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
            this.j.clear()
        }
    };
    g.k = Wob.prototype;
    g.k.OQ = 8;
    g.k.ph = 1;
    g.k.connect = function(a, b, c, d) {
        h8(0);
        this.Ic = a;
        this.Ka = b || {};
        c && void 0 !== d && (this.Ka.OSID = c, this.Ka.OAID = d);
        this.Xa = this.kd;
        this.Ma = Mob(this, null, this.Ic);
        s8(this)
    };
    g.k.disconnect = function() {
        Yob(this);
        if (3 == this.ph) {
            var a = this.Za++,
                b = this.Ma.clone();
            g.Nk(b, "SID", this.C);
            g.Nk(b, "RID", a);
            g.Nk(b, "TYPE", "terminate");
            v8(this, b);
            a = new j8(this, this.C, a);
            a.Pa = 2;
            a.J = P7(b.clone());
            b = !1;
            if (g.Ja.navigator && g.Ja.navigator.sendBeacon) try {
                b = g.Ja.navigator.sendBeacon(a.J.toString(), "")
            } catch (c) {}!b && g.Ja.Image && ((new Image).src = a.J, b = !0);
            b || (a.j = Aob(a.D, null), a.j.send(a.J));
            a.ya = Date.now();
            k8(a)
        }
        dpb(this)
    };
    g.k.Wg = function() {
        return 0 == this.ph
    };
    g.k.getState = function() {
        return this.ph
    };
    g.k.QQ = function(a) {
        if (this.I)
            if (this.I = null, 1 == this.ph) {
                if (!a) {
                    this.Za = Math.floor(1E5 * Math.random());
                    a = this.Za++;
                    var b = new j8(this, "", a),
                        c = this.ea;
                    this.Gb && (c ? (c = g.jd(c), g.ld(c, this.Gb)) : c = this.Gb);
                    null !== this.J || this.ub || (b.Ma = c, c = null);
                    var d;
                    if (this.Ob) a: {
                        for (var e = d = 0; e < this.B.length; e++) {
                            b: {
                                var f = this.B[e];
                                if ("__data__" in f.map && (f = f.map.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b
                                }
                                f = void 0
                            }
                            if (void 0 === f) break;d += f;
                            if (4096 < d) {
                                d = e;
                                break a
                            }
                            if (4096 === d || e === this.B.length - 1) {
                                d = e + 1;
                                break a
                            }
                        }
                        d =
                        1E3
                    }
                    else d = 1E3;
                    d = apb(this, b, d);
                    e = this.Ma.clone();
                    g.Nk(e, "RID", a);
                    g.Nk(e, "CVER", 22);
                    this.Ga && g.Nk(e, "X-HTTP-Session-Id", this.Ga);
                    v8(this, e);
                    c && (this.ub ? d = "headers=" + g.Ee(g.Lga(c)) + "&" + d : this.J && g.Zk(e, this.J, c));
                    Lob(this.u, b);
                    this.Xf && g.Nk(e, "TYPE", "init");
                    this.Ob ? (g.Nk(e, "$req", d), g.Nk(e, "SID", "null"), b.lc = !0, zob(b, e, null)) : zob(b, e, d);
                    this.ph = 2
                }
            } else 3 == this.ph && (a ? bpb(this, a) : 0 == this.B.length || Rob(this.u) || bpb(this))
    };
    g.k.PQ = function() {
        this.T = null;
        cpb(this);
        if (this.Mc && !(this.qb || null == this.j || 0 >= this.ud)) {
            var a = 2 * this.ud;
            this.Aa = i8((0, g.Ta)(this.I5, this), a)
        }
    };
    g.k.I5 = function() {
        this.Aa && (this.Aa = null, this.Xa = !1, this.qb = !0, h8(10), q8(this), cpb(this))
    };
    g.k.KN = function(a) {
        this.j == a && this.Mc && !this.qb && (Xob(this), this.qb = !0, h8(11))
    };
    g.k.o_ = function() {
        null != this.Z && (this.Z = null, q8(this), Job(this), h8(19))
    };
    g.k.z9 = function(a) {
        a ? h8(2) : h8(1)
    };
    g.k.isActive = function() {
        return !!this.D && this.D.isActive(this)
    };
    g.k = fpb.prototype;
    g.k.UQ = function() {};
    g.k.TQ = function() {};
    g.k.SQ = function() {};
    g.k.RQ = function() {};
    g.k.isActive = function() {
        return !0
    };
    g.k.p_ = function() {};
    g.Ya(x8, g.Cd);
    x8.prototype.open = function() {
        this.j.D = this.B;
        this.I && (this.j.Pa = !0);
        this.j.connect(this.D, this.u || void 0)
    };
    x8.prototype.close = function() {
        this.j.disconnect()
    };
    x8.prototype.send = function(a) {
        var b = this.j;
        if ("string" === typeof a) {
            var c = {};
            c.__data__ = a;
            a = c
        } else this.C && (c = {}, c.__data__ = g.Ki(a), a = c);
        b.B.push(new Pob(b.Vf++, a));
        3 == b.ph && s8(b)
    };
    x8.prototype.qa = function() {
        this.j.D = null;
        delete this.B;
        this.j.disconnect();
        delete this.j;
        x8.Hf.qa.call(this)
    };
    g.Ya(hpb, pob);
    g.Ya(ipb, qob);
    g.Ya(w8, fpb);
    w8.prototype.UQ = function() {
        this.j.dispatchEvent("m")
    };
    w8.prototype.TQ = function(a) {
        this.j.dispatchEvent(new hpb(a))
    };
    w8.prototype.SQ = function(a) {
        this.j.dispatchEvent(new ipb(a))
    };
    w8.prototype.RQ = function() {
        this.j.dispatchEvent("n")
    };
    var z8 = new g.Cd;
    g.x(lpb, g.pb);
    g.k = B8.prototype;
    g.k.au = null;
    g.k.Fp = !1;
    g.k.Zw = null;
    g.k.nJ = null;
    g.k.Xw = null;
    g.k.Yw = null;
    g.k.zr = null;
    g.k.Br = null;
    g.k.du = null;
    g.k.Si = null;
    g.k.HE = 0;
    g.k.In = null;
    g.k.GE = null;
    g.k.Ar = null;
    g.k.BA = -1;
    g.k.EX = !0;
    g.k.Zt = !1;
    g.k.mJ = 0;
    g.k.FE = null;
    var qpb = {},
        ppb = {};
    g.k = B8.prototype;
    g.k.setTimeout = function(a) {
        this.u = a
    };
    g.k.r_ = function(a) {
        a = a.target;
        var b = this.FE;
        b && 3 == g.qj(a) ? b.lJ() : this.VQ(a)
    };
    g.k.VQ = function(a) {
        try {
            if (a == this.Si) a: {
                var b = g.qj(this.Si),
                    c = this.Si.u,
                    d = this.Si.getStatus();
                if (g.Ve && !g.Mc(10) || g.Nc && !g.Lc("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.sj(this.Si)) break a;this.Zt || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.un(3) : this.j.un(2));vpb(this);
                var e = this.Si.getStatus();this.BA = e;
                var f = g.sj(this.Si);
                if (this.Fp = 200 == e) {
                    4 == b && D8(this);
                    if (this.Ga) {
                        for (a = !0; !this.Zt && this.HE < f.length;) {
                            var h = rpb(this, f);
                            if (h == ppb) {
                                4 == b && (this.Ar = 4, A8(15), a = !1);
                                break
                            } else if (h == qpb) {
                                this.Ar = 4;
                                A8(16);
                                a = !1;
                                break
                            } else wpb(this, h)
                        }
                        4 == b && 0 == f.length && (this.Ar = 1, A8(17), a = !1);
                        this.Fp = this.Fp && a;
                        a || (D8(this), E8(this))
                    } else wpb(this, f);
                    this.Fp && !this.Zt && (4 == b ? this.j.IE(this) : (this.Fp = !1, C8(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.Ar = 3, A8(13)) : (this.Ar = 0, A8(14)),
                D8(this),
                E8(this)
            }
        } catch (l) {} finally {}
    };
    g.k.T7 = function(a) {
        y8((0, g.Ta)(this.S7, this, a), 0)
    };
    g.k.S7 = function(a) {
        this.Zt || (vpb(this), wpb(this, a), C8(this))
    };
    g.k.HW = function(a) {
        y8((0, g.Ta)(this.R7, this, a), 0)
    };
    g.k.R7 = function(a) {
        this.Zt || (D8(this), this.Fp = a, this.j.IE(this), this.j.un(4))
    };
    g.k.cancel = function() {
        this.Zt = !0;
        D8(this)
    };
    g.k.q_ = function() {
        this.Zw = null;
        var a = Date.now();
        0 <= a - this.nJ ? (2 != this.Yw && this.j.un(3), D8(this), this.Ar = 2, A8(18), E8(this)) : upb(this, this.nJ - a)
    };
    g.k.getLastError = function() {
        return this.Ar
    };
    g.k = zpb.prototype;
    g.k.pJ = null;
    g.k.vj = null;
    g.k.HH = !1;
    g.k.YX = null;
    g.k.GF = null;
    g.k.YM = null;
    g.k.qJ = null;
    g.k.xl = null;
    g.k.Gp = -1;
    g.k.CA = null;
    g.k.aB = null;
    g.k.connect = function(a) {
        this.qJ = a;
        a = H8(this.j, null, this.qJ);
        A8(3);
        this.YX = Date.now();
        var b = this.j.ea;
        null != b ? (this.CA = b[0], (this.aB = b[1]) ? (this.xl = 1, Apb(this)) : (this.xl = 2, Bpb(this))) : (Q7(a, "MODE", "init"), this.vj = new B8(this), this.vj.au = this.pJ, opb(this.vj, a, !1, null, !0), this.xl = 0)
    };
    g.k.h2 = function(a) {
        if (a) this.xl = 2, Bpb(this);
        else {
            A8(4);
            var b = this.j;
            b.On = b.Pr.Gp;
            L8(b, 9)
        }
        a && this.un(2)
    };
    g.k.oJ = function(a) {
        return this.j.oJ(a)
    };
    g.k.abort = function() {
        this.vj && (this.vj.cancel(), this.vj = null);
        this.Gp = -1
    };
    g.k.Wg = function() {
        return !1
    };
    g.k.WQ = function(a, b) {
        this.Gp = a.BA;
        if (0 == this.xl)
            if (b) {
                try {
                    var c = this.u.parse(b)
                } catch (d) {
                    a = this.j;
                    a.On = this.Gp;
                    L8(a, 2);
                    return
                }
                this.CA = c[0];
                this.aB = c[1]
            } else a = this.j, a.On = this.Gp, L8(a, 2);
        else if (2 == this.xl)
            if (this.HH) A8(7), this.YM = Date.now();
            else if ("11111" == b) {
            if (A8(6), this.HH = !0, this.GF = Date.now(), a = this.GF - this.YX, !g.Ve || g.Mc(10) || 500 > a) this.Gp = 200, this.vj.cancel(), A8(12), I8(this.j, this, !0)
        } else A8(8), this.GF = this.YM = Date.now(), this.HH = !1
    };
    g.k.IE = function() {
        this.Gp = this.vj.BA;
        if (this.vj.Fp) 0 == this.xl ? this.aB ? (this.xl = 1, Apb(this)) : (this.xl = 2, Bpb(this)) : 2 == this.xl && ((!g.Ve || g.Mc(10) ? !this.HH : 200 > this.YM - this.GF) ? (A8(11), I8(this.j, this, !1)) : (A8(12), I8(this.j, this, !0)));
        else {
            0 == this.xl ? A8(9) : 2 == this.xl && A8(10);
            var a = this.j;
            this.vj.getLastError();
            a.On = this.Gp;
            L8(a, 2)
        }
    };
    g.k.DA = function() {
        return this.j.DA()
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.un = function(a) {
        this.j.un(a)
    };
    g.k = Cpb.prototype;
    g.k.Nn = null;
    g.k.EA = null;
    g.k.Ej = null;
    g.k.Hg = null;
    g.k.rJ = null;
    g.k.JE = null;
    g.k.XQ = null;
    g.k.KE = null;
    g.k.FA = 0;
    g.k.t_ = 0;
    g.k.ri = null;
    g.k.Cr = null;
    g.k.Hp = null;
    g.k.ju = null;
    g.k.Pr = null;
    g.k.zI = null;
    g.k.ex = -1;
    g.k.YQ = -1;
    g.k.On = -1;
    g.k.bx = 0;
    g.k.ax = 0;
    g.k.fu = 8;
    g.Ya(Epb, g.pb);
    g.Ya(Fpb, g.pb);
    g.k = Cpb.prototype;
    g.k.connect = function(a, b, c, d, e) {
        A8(0);
        this.rJ = b;
        this.EA = c || {};
        d && void 0 !== e && (this.EA.OSID = d, this.EA.OAID = e);
        this.T ? (y8((0, g.Ta)(this.bT, this, a), 100), Hpb(this)) : this.bT(a)
    };
    g.k.disconnect = function() {
        Ipb(this);
        if (3 == this.j) {
            var a = this.FA++,
                b = this.JE.clone();
            g.Nk(b, "SID", this.C);
            g.Nk(b, "RID", a);
            g.Nk(b, "TYPE", "terminate");
            K8(this, b);
            a = new B8(this, this.C, a);
            a.Yw = 2;
            a.zr = P7(b.clone());
            (new Image).src = a.zr.toString();
            a.Xw = Date.now();
            C8(a)
        }
        Spb(this)
    };
    g.k.bT = function(a) {
        this.Pr = new zpb(this);
        this.Pr.pJ = this.Nn;
        this.Pr.u = this.D;
        this.Pr.connect(a)
    };
    g.k.Wg = function() {
        return 0 == this.j
    };
    g.k.getState = function() {
        return this.j
    };
    g.k.aR = function(a) {
        this.Cr = null;
        Npb(this, a)
    };
    g.k.ZQ = function() {
        this.Hp = null;
        this.Hg = new B8(this, this.C, "rpc", this.J);
        this.Hg.au = this.Nn;
        this.Hg.mJ = 0;
        var a = this.XQ.clone();
        g.Nk(a, "RID", "rpc");
        g.Nk(a, "SID", this.C);
        g.Nk(a, "CI", this.zI ? "0" : "1");
        g.Nk(a, "AID", this.ex);
        K8(this, a);
        if (!g.Ve || g.Mc(10)) g.Nk(a, "TYPE", "xmlhttp"), opb(this.Hg, a, !0, this.KE, !1);
        else {
            g.Nk(a, "TYPE", "html");
            var b = this.Hg,
                c = !!this.KE;
            b.Yw = 3;
            b.zr = P7(a.clone());
            tpb(b, c)
        }
    };
    g.k.WQ = function(a, b) {
        if (0 != this.j && (this.Hg == a || this.Ej == a))
            if (this.On = a.BA, this.Ej == a && 3 == this.j)
                if (7 < this.fu) {
                    try {
                        var c = this.D.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c, 0 == a[0]) a: {
                            if (!this.Hp) {
                                if (this.Hg)
                                    if (this.Hg.Xw + 3E3 < this.Ej.Xw) J8(this), this.Hg.cancel(), this.Hg = null;
                                    else break a;
                                Qpb(this);
                                A8(19)
                            }
                        }
                    else this.YQ = a[1], 0 < this.YQ - this.ex && 37500 > a[2] && this.zI && 0 == this.ax && !this.ju && (this.ju = y8((0, g.Ta)(this.u_, this), 6E3));
                    else L8(this, 11)
                } else null != b && L8(this, 11);
        else if (this.Hg ==
            a && J8(this), !g.$b(b))
            for (a = this.D.parse(b), b = 0; b < a.length; b++) c = a[b], this.ex = c[0], c = c[1], 2 == this.j ? "c" == c[0] ? (this.C = c[1], this.KE = c[2], c = c[3], null != c ? this.fu = c : this.fu = 6, this.j = 3, this.ri && this.ri.dR(), this.XQ = H8(this, this.DA() ? this.KE : null, this.rJ), Opb(this)) : "stop" == c[0] && L8(this, 7) : 3 == this.j && ("stop" == c[0] ? L8(this, 7) : "noop" != c[0] && this.ri && this.ri.cR(c), this.ax = 0)
    };
    g.k.u_ = function() {
        null != this.ju && (this.ju = null, this.Hg.cancel(), this.Hg = null, Qpb(this), A8(20))
    };
    g.k.IE = function(a) {
        if (this.Hg == a) {
            J8(this);
            this.Hg = null;
            var b = 2
        } else if (this.Ej == a) this.Ej = null, b = 1;
        else return;
        this.On = a.BA;
        if (0 != this.j)
            if (a.Fp)
                if (1 == b) {
                    b = Date.now() - a.Xw;
                    var c = z8;
                    c.dispatchEvent(new Epb(c, a.du ? a.du.length : 0, b, this.bx));
                    Gpb(this);
                    this.B.length = 0
                } else Opb(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.On)) {
                if (d = 1 == b) this.Ej || this.Cr || 1 == this.j || 2 <= this.bx ? d = !1 : (this.Cr = y8((0, g.Ta)(this.aR, this, a), Ppb(this, this.bx)), this.bx++, d = !0);
                d = !(d || 2 == b && Qpb(this))
            }
            if (d) switch (c) {
                case 1:
                    L8(this,
                        5);
                    break;
                case 4:
                    L8(this, 10);
                    break;
                case 3:
                    L8(this, 6);
                    break;
                case 7:
                    L8(this, 12);
                    break;
                default:
                    L8(this, 2)
            }
        }
    };
    g.k.s_ = function(a) {
        if (!g.wb(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
    };
    g.k.y9 = function(a) {
        a ? A8(2) : (A8(1), Rpb(this, 8))
    };
    g.k.oJ = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.aj;
        a.I = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.ri && this.ri.isActive(this)
    };
    g.k.un = function(a) {
        var b = z8;
        b.dispatchEvent(new Fpb(b, a))
    };
    g.k.DA = function() {
        return !(!g.Ve || g.Mc(10))
    };
    g.k = Tpb.prototype;
    g.k.dR = function() {};
    g.k.cR = function() {};
    g.k.bR = function() {};
    g.k.sJ = function() {};
    g.k.eR = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = Upb.prototype;
    g.k.isEmpty = function() {
        return 0 === this.j.length && 0 === this.u.length
    };
    g.k.clear = function() {
        this.j = [];
        this.u = []
    };
    g.k.contains = function(a) {
        return g.wb(this.j, a) || g.wb(this.u, a)
    };
    g.k.remove = function(a) {
        var b = this.j;
        var c = (0, g.X7a)(b, a);
        0 <= c ? (g.zb(b, c), b = !0) : b = !1;
        return b || g.Ab(this.u, a)
    };
    g.k.Ol = function() {
        for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
        var c = this.u.length;
        for (b = 0; b < c; ++b) a.push(this.u[b]);
        return a
    };
    g.x(Vpb, g.pb);
    g.x(Wpb, g.pb);
    g.Ya(M8, g.E);
    g.k = M8.prototype;
    g.k.L7 = function() {
        this.Hi = Math.min(3E5, 2 * this.Hi);
        this.B();
        this.u && this.start()
    };
    g.k.start = function() {
        var a = this.Hi + 15E3 * Math.random();
        g.Hp(this.j, a);
        this.u = Date.now() + a
    };
    g.k.stop = function() {
        this.j.stop();
        this.u = 0
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.reset = function() {
        this.j.stop();
        this.Hi = 5E3
    };
    Ypb.prototype.flush = function(a, b) {
        a = void 0 === a ? [] : a;
        b = void 0 === b ? !1 : b;
        if (g.jy("enable_client_streamz_web")) {
            a = g.v(a);
            for (var c = a.next(); !c.done; c = a.next()) c = g.Xea(c.value), c = {
                serializedIncrementBatch: g.Zf(c.j())
            }, g.uA("streamzIncremented", c, {
                sendIsolatedPayload: b
            })
        }
    };
    var N8;
    g.Ya(Zpb, Tpb);
    g.k = Zpb.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.B.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.B.unsubscribe(a, b, c)
    };
    g.k.Hh = function(a) {
        return this.B.Hh(a)
    };
    g.k.ma = function(a, b) {
        return this.B.ma.apply(this.B, arguments)
    };
    g.k.dispose = function() {
        this.Z || (this.Z = !0, g.gb(this.B), this.disconnect(), g.gb(this.u), this.u = null, this.oa = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.Z
    };
    g.k.connect = function(a, b, c) {
        if (!this.j || 2 != this.j.getState()) {
            this.ea = "";
            this.u.stop();
            this.I = a || null;
            this.D = b || 0;
            a = this.ya + "/test";
            b = this.ya + "/bind";
            var d = new Cpb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Pa),
                e = this.j;
            e && (e.ri = null);
            d.ri = this;
            this.j = d;
            $pb(this);
            if (this.j) {
                d = g.hy("ID_TOKEN");
                var f = this.j.Nn || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.Nn = f
            }
            e ? (3 != e.getState() && 0 == Kpb(e) || e.getState(), this.j.connect(a, b, this.J, e.C, e.ex)) : c ? this.j.connect(a,
                b, this.J, c.sessionId, c.arrayId) : this.j.connect(a, b, this.J)
        }
    };
    g.k.disconnect = function(a) {
        this.T = a || 0;
        this.u.stop();
        $pb(this);
        this.j && (3 == this.j.getState() && Npb(this.j), this.j.disconnect());
        this.T = 0
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.ld(a, b);
        this.u.isActive() || 2 == (this.j ? this.j.getState() : 0) ? this.C.push(a) : this.Py() && ($pb(this), Jpb(this.j, a))
    };
    g.k.dR = function() {
        this.u.reset();
        this.I = null;
        this.D = 0;
        if (this.C.length) {
            var a = this.C;
            this.C = [];
            for (var b = 0, c = a.length; b < c; ++b) Jpb(this.j, a[b])
        }
        this.ma("handlerOpened");
        fob(this.Ma, "BROWSER_CHANNEL")
    };
    g.k.bR = function(a) {
        var b = 2 == a && 401 == this.j.On;
        4 == a || b || this.u.start();
        this.ma("handlerError", a, b);
        lob(this.Ga, "BROWSER_CHANNEL")
    };
    g.k.sJ = function(a, b) {
        if (!this.u.isActive()) this.ma("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.C.push(e)
            }
        hob(this.Aa, "BROWSER_CHANNEL");
        a && this.bb.j.vJ("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.Za.j.vJ("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    };
    g.k.eR = function() {
        var a = {
            v: 2
        };
        this.ea && (a.gsessionid = this.ea);
        0 != this.D && (a.ui = "" + this.D);
        0 != this.T && (a.ui = "" + this.T);
        this.I && g.ld(a, this.I);
        return a
    };
    g.k.cR = function(a) {
        "S" == a[0] ? this.ea = a[1] : "gracefulReconnect" == a[0] ? (this.u.start(), this.j.disconnect()) : this.ma("handlerMessage", new Xpb(a[0], a[1]));
        job(this.Ka, "BROWSER_CHANNEL")
    };
    g.k.Py = function() {
        return !!this.j && 3 == this.j.getState()
    };
    g.k.Vq = function(a) {
        (this.J.loungeIdToken = a) || this.u.stop();
        if (this.Xa && this.j) {
            var b = this.j.Nn || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.Nn = b
        }
    };
    g.k.ws = function() {
        return this.J.id
    };
    g.k.Fs = function() {
        return this.u.isActive() ? this.u.u - Date.now() : NaN
    };
    g.k.Yv = function() {
        var a = this.u;
        g.Ip(a.j);
        a.start()
    };
    g.k.U8 = function() {
        this.u.isActive();
        0 == Kpb(this.j) && this.connect(this.I, this.D)
    };
    O8.prototype.C = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    O8.prototype.B = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    O8.prototype.D = function(a) {
        a(Error("request timed out"))
    };
    g.x(bqb, g.Cd);
    g.k = bqb.prototype;
    g.k.connect = function(a, b, c) {
        this.yd.connect(a, b, c)
    };
    g.k.disconnect = function(a) {
        this.yd.disconnect(a)
    };
    g.k.Yv = function() {
        this.yd.Yv()
    };
    g.k.ws = function() {
        return this.yd.ws()
    };
    g.k.Fs = function() {
        return this.yd.Fs()
    };
    g.k.Py = function() {
        return this.yd.Py()
    };
    g.k.x_ = function() {
        this.dispatchEvent("channelOpened");
        var a = this.yd,
            b = this.j;
        g.Sz("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.zI,
            sessionId: a.j.C,
            arrayId: a.j.ex
        });
        g.Sz("yt-remote-session-screen-id", b);
        a = X7();
        b = Y7();
        g.wb(a, b) || a.push(b);
        Knb(a);
        Mnb()
    };
    g.k.v_ = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.w_ = function(a) {
        this.dispatchEvent(new Vpb(a))
    };
    g.k.onError = function(a) {
        this.dispatchEvent(new Wpb(a ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.yd.sendMessage(a, b)
    };
    g.k.Vq = function(a) {
        this.yd.Vq(a)
    };
    g.k.dispose = function() {
        this.yd.dispose()
    };
    g.k = cqb.prototype;
    g.k.connect = function(a, b) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? 0 : b;
        2 !== this.I && (this.B.stop(), this.T = a, this.J = b, eqb(this), (a = g.hy("ID_TOKEN")) ? this.C["x-youtube-identity-token"] = a : delete this.C["x-youtube-identity-token"], this.j && (this.u.device = this.j.device, this.u.name = this.j.name, this.u.app = this.j.app, this.u.id = this.j.id, this.j.R4 && (this.u.mdxVersion = "" + this.j.R4), this.j.theme && (this.u.theme = this.j.theme), this.j.capabilities && (this.u.capabilities = this.j.capabilities), this.j.F2 && (this.u.cst = this.j.F2),
            this.j.authuser && (this.u.authuser = this.j.authuser), this.j.pageId && (this.u.pageId = this.j.pageId)), 0 !== this.J ? this.u.ui = "" + this.J : delete this.u.ui, Object.assign(this.u, this.T), this.channel = new x8(this.pathPrefix, {
            l4: "gsessionid",
            V4: this.C,
            W4: this.u
        }), this.channel.open(), this.I = 2, dqb(this))
    };
    g.k.disconnect = function(a) {
        this.ea = void 0 === a ? 0 : a;
        this.B.stop();
        eqb(this);
        this.channel && (0 !== this.ea ? this.u.ui = "" + this.ea : delete this.u.ui, this.channel.close());
        this.ea = 0
    };
    g.k.Fs = function() {
        return this.B.isActive() ? this.B.u - Date.now() : NaN
    };
    g.k.Yv = function() {
        var a = this.B;
        g.Ip(a.j);
        a.start()
    };
    g.k.sendMessage = function(a, b) {
        this.channel && (eqb(this), a = Object.assign({}, {
            _sc: a
        }, b), this.channel.send(a))
    };
    g.k.Vq = function(a) {
        a || this.B.stop();
        a ? this.C["X-YouTube-LoungeId-Token"] = a : delete this.C["X-YouTube-LoungeId-Token"]
    };
    g.k.ws = function() {
        return this.j ? this.j.id : ""
    };
    g.k.ma = function(a) {
        return this.D.ma.apply(this.D, [a].concat(g.la(g.Ca.apply(1, arguments))))
    };
    g.k.subscribe = function(a, b, c) {
        return this.D.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.D.unsubscribe(a, b, c)
    };
    g.k.Hh = function(a) {
        return this.D.Hh(a)
    };
    g.k.dispose = function() {
        this.Z || (this.Z = !0, g.gb(this.D), this.disconnect(), g.gb(this.B), this.ya = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.Z
    };
    g.x(fqb, g.Cd);
    g.k = fqb.prototype;
    g.k.connect = function(a, b) {
        this.j.connect(a, b)
    };
    g.k.disconnect = function(a) {
        this.j.disconnect(a)
    };
    g.k.Yv = function() {
        this.j.Yv()
    };
    g.k.ws = function() {
        return this.j.ws()
    };
    g.k.Fs = function() {
        return this.j.Fs()
    };
    g.k.Py = function() {
        return 3 === this.j.I
    };
    g.k.A_ = function() {
        this.dispatchEvent("channelOpened")
    };
    g.k.y_ = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.z_ = function(a) {
        this.dispatchEvent(new Vpb(a))
    };
    g.k.onError = function() {
        this.dispatchEvent(new Wpb(401 === this.j.Lg ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    };
    g.k.Vq = function(a) {
        this.j.Vq(a)
    };
    g.k.dispose = function() {
        this.j.dispose()
    };
    var nqb = Date.now(),
        Q8 = null,
        U8 = Array(50),
        T8 = -1,
        V8 = !1;
    g.Ya(W8, g.iE);
    W8.prototype.Bk = function() {
        return this.screens
    };
    W8.prototype.contains = function(a) {
        return !!Hnb(this.screens, a)
    };
    W8.prototype.get = function(a) {
        return a ? W7(this.screens, a) : null
    };
    W8.prototype.info = function(a) {
        R8(this.I, a)
    };
    g.x(rqb, g.iE);
    g.k = rqb.prototype;
    g.k.start = function() {
        !this.j && isNaN(this.Gc) && this.VW()
    };
    g.k.stop = function() {
        this.j && (this.j.abort(), this.j = null);
        isNaN(this.Gc) || (g.Hy(this.Gc), this.Gc = NaN)
    };
    g.k.qa = function() {
        this.stop();
        g.iE.prototype.qa.call(this)
    };
    g.k.VW = function() {
        this.Gc = NaN;
        this.j = g.Ky(P8(this.B, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.J
            },
            timeout: 5E3,
            onSuccess: (0, g.Ta)(this.C_, this),
            onError: (0, g.Ta)(this.B_, this),
            onTimeout: (0, g.Ta)(this.D_, this)
        })
    };
    g.k.C_ = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.C;
        a.name = this.I;
        b = -1;
        this.D && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.ma("pairingComplete", new T7(a), b)
    };
    g.k.B_ = function(a) {
        this.j = null;
        a.status && 404 == a.status ? this.u >= lsb.length ? this.ma("pairingFailed", Error("DIAL polling timed out")) : (a = lsb[this.u], this.Gc = g.Fy((0, g.Ta)(this.VW, this), a), this.u++) : this.ma("pairingFailed", Error("Server error " + a.status))
    };
    g.k.D_ = function() {
        this.j = null;
        this.ma("pairingFailed", Error("Server not responding"))
    };
    var lsb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.Ya(Y8, W8);
    g.k = Y8.prototype;
    g.k.start = function() {
        X8(this) && this.ma("screenChange");
        !g.Tz("yt-remote-lounge-token-expiration") && sqb(this);
        g.Hy(this.j);
        this.j = g.Fy((0, g.Ta)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        X8(this);
        oqb(this, a);
        Z8(this, !1);
        this.ma("screenChange");
        b(a);
        a.token || sqb(this)
    };
    g.k.remove = function(a, b) {
        var c = X8(this);
        qqb(this, a) && (Z8(this, !1), c = !0);
        b(a);
        c && this.ma("screenChange")
    };
    g.k.yI = function(a, b, c, d) {
        var e = X8(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, Z8(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.ma("screenChange")
    };
    g.k.qa = function() {
        g.Hy(this.j);
        Y8.Hf.qa.call(this)
    };
    g.k.L3 = function(a) {
        X8(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        Z8(this, !b);
        b && R8(this.I, "Missed " + b + " lounge tokens.")
    };
    g.k.K3 = function(a) {
        R8(this.I, "Requesting lounge tokens failed: " + a)
    };
    g.x(uqb, g.iE);
    g.k = uqb.prototype;
    g.k.start = function() {
        var a = parseInt(g.Tz("yt-remote-fast-check-period") || "0", 10);
        (this.C = g.Va() - 144E5 < a ? 0 : a) ? $8(this): (this.C = g.Va() + 3E5, g.Sz("yt-remote-fast-check-period", this.C), this.SO())
    };
    g.k.isEmpty = function() {
        return g.fd(this.j)
    };
    g.k.update = function() {
        tqb("Updating availability on schedule.");
        var a = this.I(),
            b = g.Wc(this.j, function(c, d) {
                return c && !!W7(a, d)
            }, this);
        xqb(this, b)
    };
    g.k.qa = function() {
        g.Hy(this.B);
        this.B = NaN;
        this.u && (this.u.abort(), this.u = null);
        g.iE.prototype.qa.call(this)
    };
    g.k.SO = function() {
        g.Hy(this.B);
        this.B = NaN;
        this.u && this.u.abort();
        var a = yqb(this);
        if (snb(a)) {
            var b = P8(this.D, "/pairing/get_screen_availability");
            this.u = aqb(this.D, b, {
                lounge_token: g.ad(a).join(",")
            }, (0, g.Ta)(this.r7, this, a), (0, g.Ta)(this.q7, this))
        } else xqb(this, {}), $8(this)
    };
    g.k.r7 = function(a, b) {
        this.u = null;
        var c = g.ad(yqb(this));
        if (g.Sb(c, g.ad(a))) {
            b = b.screens || [];
            c = {};
            for (var d = b.length, e = 0; e < d; ++e) c[a[b[e].loungeToken]] = "online" == b[e].status;
            xqb(this, c);
            $8(this)
        } else this.Sf("Changing Screen set during request."), this.SO()
    };
    g.k.q7 = function(a) {
        this.Sf("Screen availability failed: " + a);
        this.u = null;
        $8(this)
    };
    g.k.Sf = function(a) {
        R8("OnlineScreenService", a)
    };
    g.Ya(a9, W8);
    g.k = a9.prototype;
    g.k.start = function() {
        this.u.start();
        this.j.start();
        this.screens.length && (this.ma("screenChange"), this.j.isEmpty() || this.ma("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.u.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.u.remove(a, b, c);
        this.j.update()
    };
    g.k.yI = function(a, b, c, d) {
        this.u.contains(a) ? this.u.yI(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, R8(this.I, a), d(Error(a)))
    };
    g.k.Bk = function(a) {
        return a ? this.screens : g.Cb(this.screens, g.Un(this.B, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.fR = function() {
        return g.Un(this.Bk(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    };
    g.k.gR = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new rqb(this.C, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.gb(l);
            e(b9(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.gb(l);
            f(m)
        });
        l.start();
        return (0, g.Ta)(l.stop, l)
    };
    g.k.E_ = function(a, b, c, d) {
        g.Ky(P8(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.Ta)(function(e, f) {
                e = new T7(f.screen || {});
                if (!e.name || Cqb(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); Cqb(this, l);) {
                            h++;
                            if (20 < h) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(b9(this, e))
            }, this),
            onError: (0, g.Ta)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.Ta)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.qa = function() {
        g.gb(this.u);
        g.gb(this.j);
        a9.Hf.qa.call(this)
    };
    g.k.U3 = function() {
        Eqb(this);
        this.ma("screenChange");
        this.j.update()
    };
    a9.prototype.dispose = a9.prototype.dispose;
    g.Ya(c9, g.iE);
    g.k = c9.prototype;
    g.k.lj = function(a) {
        this.isDisposed() || (a && (e9(this, "" + a), this.ma("sessionFailed")), this.j = null, this.ma("sessionScreen", null))
    };
    g.k.info = function(a) {
        R8(this.Ga, a)
    };
    g.k.hR = function() {
        return null
    };
    g.k.hP = function(a) {
        var b = this.u;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.Ta)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.Ta)(function() {
            e9(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.qa = function() {
        this.hP("");
        c9.Hf.qa.call(this)
    };
    g.x(f9, c9);
    g.k = f9.prototype;
    g.k.gP = function(a) {
        if (this.B) {
            if (this.B == a) return;
            e9(this, "Overriding cast session with new session object");
            Qqb(this);
            this.ya = !1;
            this.ea = "unknown";
            this.B.removeUpdateListener(this.oa);
            this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Aa)
        }
        this.B = a;
        this.B.addUpdateListener(this.oa);
        this.B.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Aa);
        Lqb(this, "getMdxSessionStatus")
    };
    g.k.Yy = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Ki(a))
    };
    g.k.stop = function() {
        this.B ? this.B.stop((0, g.Ta)(function() {
            this.lj()
        }, this), (0, g.Ta)(function() {
            this.lj(Error("Failed to stop receiver app."))
        }, this)) : this.lj(Error("Stopping cast device without session."))
    };
    g.k.hP = function() {};
    g.k.qa = function() {
        this.info("disposeInternal");
        Qqb(this);
        this.B && (this.B.removeUpdateListener(this.oa), this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Aa));
        this.B = null;
        c9.prototype.qa.call(this)
    };
    g.k.d8 = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = R7(b), g.Pa(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Ki(b)), a) {
                    case "mdxSessionStatus":
                        Iqb(this, b);
                        break;
                    case "loungeToken":
                        Mqb(this, b);
                        break;
                    default:
                        e9(this, "Unknown youtube message: " + a)
                } else e9(this, "Unable to parse message.");
                else e9(this, "No data in message.")
    };
    g.k.dU = function(a, b, c, d) {
        g.Hy(this.T);
        this.T = 0;
        Bqb(this.C, this.u.label, a, this.u.friendlyName, (0, g.Ta)(function(e) {
            e ? b(e) : 0 <= d ? (e9(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.T = g.Fy((0, g.Ta)(this.dU, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.hR = function() {
        return this.B
    };
    g.k.F_ = function(a) {
        this.isDisposed() || a || (e9(this, "Cast session died."), this.lj())
    };
    g.x(g9, c9);
    g.k = g9.prototype;
    g.k.gP = function(a) {
        this.B = a;
        this.B.addUpdateListener(this.Ka)
    };
    g.k.Yy = function(a) {
        this.Ma = a;
        this.Z()
    };
    g.k.stop = function() {
        Yqb(this);
        this.B ? this.B.stop((0, g.Ta)(this.lj, this, null), (0, g.Ta)(this.lj, this, "Failed to stop DIAL device.")) : this.lj()
    };
    g.k.qa = function() {
        Yqb(this);
        this.B && this.B.removeUpdateListener(this.Ka);
        this.B = null;
        c9.prototype.qa.call(this)
    };
    g.k.G_ = function(a) {
        this.isDisposed() || a || (e9(this, "DIAL session died."), this.D(), this.D = function() {}, this.lj())
    };
    g.x(j9, c9);
    j9.prototype.stop = function() {
        this.lj()
    };
    j9.prototype.gP = function() {};
    j9.prototype.Yy = function() {
        g.Hy(this.B);
        this.B = NaN;
        var a = W7(this.C.Bk(), this.u.label);
        a ? d9(this, a) : this.lj(Error("No such screen"))
    };
    j9.prototype.qa = function() {
        g.Hy(this.B);
        this.B = NaN;
        c9.prototype.qa.call(this)
    };
    g.x(k9, g.iE);
    g.k = k9.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.T, [chrome.cast.Capability.AUDIO_OUT]);
        this.ea || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.I ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.Ta)(this.b7, this);
        c = new chrome.cast.ApiConfig(c, (0, g.Ta)(this.DW, this), e, d, a);
        c.customDialLaunchCallback = (0, g.Ta)(this.Z5, this);
        chrome.cast.initialize(c, (0, g.Ta)(function() {
            this.isDisposed() || (chrome.cast.addReceiverActionListener(this.D), kqb(), this.u.subscribe("onlineScreenChange", (0, g.Ta)(this.iR, this)), this.B = arb(this), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Ta)(function(f) {
                this.Sf("Failed to set initial custom receivers: " + g.Ki(f))
            }, this)), this.ma("yt-remote-cast2-availability-change", m9(this)), b(!0))
        }, this), (0, g.Ta)(function(f) {
            this.Sf("Failed to initialize API: " + g.Ki(f));
            b(!1)
        }, this))
    };
    g.k.a9 = function(a, b) {
        l9("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.j;
            if (!a || c && c.id != a) l9("Unsetting old screen status: " + this.j.u.friendlyName), n9(this, null)
        }
        if (a && b) {
            if (!this.j) {
                c = W7(this.u.Bk(), a);
                if (!c) {
                    l9("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == c.idType) {
                    l9("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                a = Zqb(this, c);
                a || (l9("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ?
                    c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.B.push(a), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Ta)(function(d) {
                    this.Sf("Failed to set initial custom receivers: " + g.Ki(d))
                }, this)));
                l9("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
                n9(this, new j9(this.u, a), !0)
            }
            this.j.hP(b)
        } else l9("setConnectedScreenStatus: no screen.")
    };
    g.k.c9 = function(a) {
        this.isDisposed() ? this.Sf("Setting connection data on disposed cast v2") : this.j ? this.j.Yy(a) : this.Sf("Setting connection data without a session")
    };
    g.k.I_ = function() {
        this.isDisposed() ? this.Sf("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), n9(this, null)) : l9("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.Ta)(this.DW, this), (0, g.Ta)(this.u7, this))
    };
    g.k.qa = function() {
        this.u.unsubscribe("onlineScreenChange", (0, g.Ta)(this.iR, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.D);
        var a = hqb,
            b = g.La("yt.mdx.remote.debug.handlers_");
        g.Ab(b || [], a);
        g.gb(this.j);
        g.iE.prototype.qa.call(this)
    };
    g.k.Sf = function(a) {
        R8("Controller", a)
    };
    g.k.FW = function(a, b) {
        this.j == a && (b || n9(this, null), this.ma("yt-remote-cast2-session-change", b))
    };
    g.k.Y6 = function(a, b) {
        if (!this.isDisposed())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), l9("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.u.label != a.label) l9("onReceiverAction_: Stopping active receiver: " + this.j.u.friendlyName), this.j.stop();
                        else {
                            l9("onReceiverAction_: Casting to active receiver.");
                            this.j.j && this.ma("yt-remote-cast2-session-change", this.j.j);
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            n9(this,
                                new j9(this.u, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            n9(this, new g9(this.u, a, this.C, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            n9(this, new f9(this.u, a, this.config_));
                            break;
                        default:
                            this.Sf("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.u.label == a.label ? this.j.stop() : this.Sf("Stopping receiver w/o session: " + a.friendlyName)
            } else this.Sf("onReceiverAction_ called without receiver.")
    };
    g.k.Z5 = function(a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.Sf("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.u : null;
        if (!c || c.label != b.label) return this.Sf("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.j) return l9("Reselecting dial screen."),
                this.ma("yt-remote-cast2-session-change", this.j.j), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.Sf('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            n9(this, new g9(this.u, b, this.C, this.config_))
        }
        b = this.j;
        b.T = a;
        b.T.appState == chrome.cast.DialAppState.RUNNING ? (a = b.T.extraData || {}, c = a.screenId || null, h9(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = Vqb(b, {
                name: b.u.friendlyName,
                screenId: a.screenId,
                loungeToken: a.loungeToken,
                dialId: b.T.receiver.label,
                screenIdType: "shortLived"
            },
            a.loungeTokenRefreshIntervalMs) : (g.oy(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = Wqb(b, c)) : a = Wqb(b, c)) : a = Tqb(b);
        return a
    };
    g.k.DW = function(a) {
        var b = this;
        if (!this.isDisposed() && !this.I) {
            l9("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) l9("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), n9(this, new f9(this.u, c, this.config_), !0);
                    else {
                        this.Sf("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.u,
                    e = W7(this.u.Bk(),
                        d.label);
                e && U7(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (l9("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.gb(this.j), this.j = new f9(this.u, c, this.config_), this.j.subscribe("sessionScreen", (0, g.Ta)(this.FW, this, this.j)), this.j.subscribe("sessionFailed", function() {
                    return $qb(b, b.j)
                }), this.j.Yy(null));
                this.j.gP(a)
            }
        }
    };
    g.k.H_ = function() {
        return this.j ? this.j.hR() : null
    };
    g.k.u7 = function(a) {
        this.isDisposed() || (this.Sf("Failed to estabilish a session: " + g.Ki(a)), a.code != chrome.cast.ErrorCode.CANCEL && n9(this, null), this.ma("yt-remote-cast2-session-failed"))
    };
    g.k.b7 = function(a) {
        l9("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = m9(this);
            this.J = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            m9(this) != b && this.ma("yt-remote-cast2-availability-change", m9(this))
        }
    };
    g.k.iR = function() {
        this.isDisposed() || (this.B = arb(this), l9("Updating custom receivers: " + g.Ki(this.B)), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Ta)(function() {
            this.Sf("Failed to set custom receivers.")
        }, this)), this.ma("yt-remote-cast2-availability-change", m9(this)))
    };
    k9.prototype.setLaunchParams = k9.prototype.c9;
    k9.prototype.setConnectedScreenStatus = k9.prototype.a9;
    k9.prototype.stopSession = k9.prototype.I_;
    k9.prototype.getCastSession = k9.prototype.H_;
    k9.prototype.requestSession = k9.prototype.requestSession;
    k9.prototype.init = k9.prototype.init;
    k9.prototype.dispose = k9.prototype.dispose;
    var jrb = [];
    g.k = u9.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        prb(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.Oo = a.hasPrevious, this.Fk = a.hasNext, this.J = a.playerTime, this.I = a.playerTimeAt, this.C = a.seekableStart, this.j = a.seekableEnd, this.D = a.duration, this.T = a.loadedTime, this.B = a.liveIngestionTime, this.u = !isNaN(this.B))
    };
    g.k.bd = function() {
        return 1 == this.playerState
    };
    g.k.Uk = function(a) {
        this.D = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.u ? this.D + v9(this) : this.D
    };
    g.k.clone = function() {
        return new u9(qrb(this))
    };
    g.x(A9, g.iE);
    g.k = A9.prototype;
    g.k.getState = function() {
        return this.B
    };
    g.k.Fs = function() {
        return this.C.getReconnectTimeout()
    };
    g.k.Yv = function() {
        this.C.reconnect()
    };
    g.k.play = function() {
        C9(this) ? (this.j ? this.j.play(null, g.Hd, S9(this, "play")) : R9(this, "play"), trb(this, 1, x9(B9(this))), this.ma("remotePlayerChange")) : D9(this, this.play)
    };
    g.k.pause = function() {
        C9(this) ? (this.j ? this.j.pause(null, g.Hd, S9(this, "pause")) : R9(this, "pause"), trb(this, 2, x9(B9(this))), this.ma("remotePlayerChange")) : D9(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (C9(this)) {
            if (this.j) {
                var b = B9(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.bd() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.Hd, S9(this, "seekTo", {
                    newTime: a
                }))
            } else R9(this, "seekTo", {
                newTime: a
            });
            trb(this, 3, a);
            this.ma("remotePlayerChange")
        } else D9(this, g.Ua(this.seekTo, a))
    };
    g.k.stop = function() {
        if (C9(this)) {
            this.j ? this.j.stop(null, g.Hd, S9(this, "stopVideo")) : R9(this, "stopVideo");
            var a = B9(this);
            a.index = -1;
            a.videoId = "";
            prb(a);
            P9(this, a);
            this.ma("remotePlayerChange")
        } else D9(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (C9(this)) {
            var c = B9(this);
            if (this.u) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.u.setReceiverVolumeLevel(d, (0, g.Ta)(function() {
                        S8("set receiver volume: " + d)
                    }, this), (0, g.Ta)(function() {
                        this.Sf("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.u.setReceiverMuted(b, (0, g.Ta)(function() {
                    S8("set receiver muted: " + b)
                }, this), (0, g.Ta)(function() {
                    this.Sf("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                R9(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            P9(this, c)
        } else D9(this, g.Ua(this.setVolume, a, b))
    };
    g.k.jR = function(a, b) {
        if (C9(this)) {
            var c = B9(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Ki(b.style), g.ld(a, c.trackData));
            R9(this, "setSubtitlesTrack", a);
            P9(this, c)
        } else D9(this, g.Ua(this.jR, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        C9(this) ? (b = b.getLanguageInfo().getId(), R9(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = B9(this), a.audioTrackId = b, P9(this, a)) : D9(this, g.Ua(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        h = void 0 === h ? null : h;
        var l = B9(this),
            m = {
                videoId: a
            };
        void 0 !== c && (m.currentIndex = c);
        y9(l, a, c || 0);
        void 0 !== b && (w9(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.Ki(h));
        R9(this, "setPlaylist", m);
        d || P9(this, l)
    };
    g.k.zH = function(a, b) {
        if (C9(this)) {
            if (a && b) {
                var c = B9(this);
                y9(c, a, b);
                P9(this, c)
            }
            R9(this, "previous")
        } else D9(this, g.Ua(this.zH, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (C9(this)) {
            if (a && b) {
                var c = B9(this);
                y9(c, a, b);
                P9(this, c)
            }
            R9(this, "next")
        } else D9(this, g.Ua(this.nextVideo, a, b))
    };
    g.k.iF = function() {
        if (C9(this)) {
            R9(this, "clearPlaylist");
            var a = B9(this);
            a.reset();
            P9(this, a);
            this.ma("remotePlayerChange")
        } else D9(this, this.iF)
    };
    g.k.lT = function() {
        C9(this) ? R9(this, "dismissAutoplay") : D9(this, this.lT)
    };
    g.k.dispose = function() {
        if (3 != this.B) {
            var a = this.B;
            this.B = 3;
            this.ma("proxyStateChange", a, this.B)
        }
        g.iE.prototype.dispose.call(this)
    };
    g.k.qa = function() {
        srb(this);
        this.C = null;
        this.D.clear();
        z9(this, null);
        g.iE.prototype.qa.call(this)
    };
    g.k.kP = function(a) {
        if ((a != this.B || 2 == a) && 3 != this.B && 0 != a) {
            var b = this.B;
            this.B = a;
            this.ma("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.D.isEmpty();) b = a = this.D, 0 === b.j.length && (b.j = b.u, b.j.reverse(), b.u = []), a.j.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.k.W6 = function(a, b) {
        this.ma(a, b)
    };
    g.k.M5 = function(a) {
        if (!a) this.VC(null), z9(this, null);
        else if (this.u.receiver.volume) {
            a = this.u.receiver.volume;
            var b = B9(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) S8("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, P9(this, b)
        }
    };
    g.k.VC = function(a) {
        S8("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.T);
        if (this.j = a) this.j.addUpdateListener(this.T), urb(this), this.ma("remotePlayerChange")
    };
    g.k.L5 = function(a) {
        a ? (urb(this), this.ma("remotePlayerChange")) : this.VC(null)
    };
    g.k.HP = function() {
        R9(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.R5 = function() {
        var a = mrb();
        a && z9(this, a)
    };
    g.k.Sf = function(a) {
        R8("CP", a)
    };
    g.x(V9, g.iE);
    g.k = V9.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && 0 < e.length && (m.videoIds = e.join(","));
            void 0 !== l && (m.currentIndex = l);
            this.Ka && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            w9(this.j,
                n);
            this.D = "UNSUPPORTED";
            c = this.Ka ? "setInitialState" : "setPlaylist";
            T9("Connecting with " + c + " and params: " + g.Ki(m));
            this.u.connect({
                method: c,
                params: g.Ki(m)
            }, a, Nnb())
        } else T9("Connecting without params"), this.u.connect({}, a, Nnb());
        yrb(this)
    };
    g.k.Vq = function(a) {
        this.u.Vq(a)
    };
    g.k.dispose = function() {
        this.isDisposed() || (g.Ka("yt.mdx.remote.remoteClient_", null), this.ma("beforeDispose"), U9(this, 3));
        g.iE.prototype.dispose.call(this)
    };
    g.k.qa = function() {
        zrb(this);
        Brb(this);
        Arb(this);
        g.Hy(this.T);
        this.T = NaN;
        g.Hy(this.ea);
        this.ea = NaN;
        this.C = null;
        g.Iz(this.Z);
        this.Z.length = 0;
        this.u.dispose();
        g.iE.prototype.qa.call(this);
        this.D = this.J = this.B = this.j = this.u = null
    };
    g.k.UU = function(a) {
        if (!this.B || 0 === this.B.length) return !1;
        for (var b = g.v(this.B), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.A3 = function() {
        var a = 3;
        this.isDisposed() || (a = 0, isNaN(this.UB()) ? this.u.Py() && isNaN(this.I) && (a = 1) : a = 2);
        return a
    };
    g.k.py = function(a) {
        T9("Disconnecting with " + a);
        g.Ka("yt.mdx.remote.remoteClient_", null);
        zrb(this);
        this.ma("beforeDisconnect", a);
        1 == a && Z7();
        this.u.disconnect(a);
        this.dispose()
    };
    g.k.y3 = function() {
        var a = this.j;
        this.C && (a = this.j.clone(), y9(a, this.C, a.index));
        return qrb(a)
    };
    g.k.d9 = function(a) {
        var b = this,
            c = new u9(a);
        c.videoId && c.videoId != this.j.videoId && (this.C = c.videoId, g.Hy(this.T), this.T = g.Fy(function() {
            if (b.C) {
                var e = b.C;
                b.C = null;
                b.j.videoId != e && W9(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && x9(this.j) == x9(c) && g.Ki(this.j.trackData) == g.Ki(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.Ub(d, function(e) {
            this.ma(e)
        }, this)
    };
    g.k.bU = function() {
        var a = this.u.ws(),
            b = g.sb(this.B, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.UB = function() {
        return this.u.Fs()
    };
    g.k.t3 = function() {
        return this.D || "UNSUPPORTED"
    };
    g.k.u3 = function() {
        return this.J || ""
    };
    g.k.J_ = function() {
        !isNaN(this.UB()) && this.u.Yv()
    };
    g.k.Z8 = function(a, b) {
        W9(this, a, b);
        Drb(this)
    };
    g.k.kR = function() {
        var a = g.Vy("SID", "") || "",
            b = g.Vy("SAPISID", "") || "",
            c = g.Vy("__Secure-3PAPISID", "") || "";
        if (!a && !b && !c) return "";
        a = g.Zf(g.Yf(a), 2);
        b = g.Zf(g.Yf(b), 2);
        c = g.Zf(g.Yf(c), 2);
        return g.Zf(g.Yf(a + "," + b + "," + c), 2)
    };
    V9.prototype.subscribe = V9.prototype.subscribe;
    V9.prototype.unsubscribeByKey = V9.prototype.Hh;
    V9.prototype.getProxyState = V9.prototype.A3;
    V9.prototype.disconnect = V9.prototype.py;
    V9.prototype.getPlayerContextData = V9.prototype.y3;
    V9.prototype.setPlayerContextData = V9.prototype.d9;
    V9.prototype.getOtherConnectedRemoteId = V9.prototype.bU;
    V9.prototype.getReconnectTimeout = V9.prototype.UB;
    V9.prototype.getAutoplayMode = V9.prototype.t3;
    V9.prototype.getAutoplayVideoId = V9.prototype.u3;
    V9.prototype.reconnect = V9.prototype.J_;
    V9.prototype.sendMessage = V9.prototype.Z8;
    V9.prototype.getXsrfToken = V9.prototype.kR;
    V9.prototype.isCapabilitySupportedOnConnectedDevices = V9.prototype.UU;
    g.x(Prb, W8);
    g.k = Prb.prototype;
    g.k.Bk = function(a) {
        return this.Vg.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.Vg.$_c(a)
    };
    g.k.get = function(a) {
        return this.Vg.$_g(a)
    };
    g.k.start = function() {
        this.Vg.$_st()
    };
    g.k.add = function(a, b, c) {
        this.Vg.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.Vg.$_r(a, b, c)
    };
    g.k.yI = function(a, b, c, d) {
        this.Vg.$_un(a, b, c, d)
    };
    g.k.qa = function() {
        for (var a = 0, b = this.j.length; a < b; ++a) this.Vg.$_ubk(this.j[a]);
        this.j.length = 0;
        this.Vg = null;
        W8.prototype.qa.call(this)
    };
    g.k.K_ = function() {
        this.ma("screenChange")
    };
    g.k.E6 = function() {
        this.ma("onlineScreenChange")
    };
    a9.prototype.$_st = a9.prototype.start;
    a9.prototype.$_gspc = a9.prototype.E_;
    a9.prototype.$_gsppc = a9.prototype.gR;
    a9.prototype.$_c = a9.prototype.contains;
    a9.prototype.$_g = a9.prototype.get;
    a9.prototype.$_a = a9.prototype.add;
    a9.prototype.$_un = a9.prototype.yI;
    a9.prototype.$_r = a9.prototype.remove;
    a9.prototype.$_gs = a9.prototype.Bk;
    a9.prototype.$_gos = a9.prototype.fR;
    a9.prototype.$_s = a9.prototype.subscribe;
    a9.prototype.$_ubk = a9.prototype.Hh;
    var g$ = null,
        j$ = !1,
        X9 = null,
        Y9 = null,
        $rb = null,
        b$ = [];
    g.x(esb, g.E);
    g.k = esb.prototype;
    g.k.qa = function() {
        g.E.prototype.qa.call(this);
        this.j.stop();
        this.u.stop();
        this.J.stop();
        var a = this.Bc;
        a.unsubscribe("proxyStateChange", this.BW, this);
        a.unsubscribe("remotePlayerChange", this.bD, this);
        a.unsubscribe("remoteQueueChange", this.jH, this);
        a.unsubscribe("previousNextChange", this.xW, this);
        a.unsubscribe("nowAutoplaying", this.sW, this);
        a.unsubscribe("autoplayDismissed", this.WV, this);
        this.Bc = this.module = null
    };
    g.k.Ek = function(a) {
        var b = g.Ca.apply(1, arguments);
        if (2 != this.Bc.B)
            if (k$(this)) {
                if (1081 != B9(this.Bc).playerState || "control_seek" !== a) switch (a) {
                    case "control_toggle_play_pause":
                        B9(this.Bc).bd() ? this.Bc.pause() : this.Bc.play();
                        break;
                    case "control_play":
                        this.Bc.play();
                        break;
                    case "control_pause":
                        this.Bc.pause();
                        break;
                    case "control_seek":
                        this.I.lJ(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        gsb(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.F.getCurrentTime();
                    l$(this, 0 === b ? void 0 : b);
                    break;
                case "control_seek":
                    l$(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    gsb(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.k.J5 = function(a) {
        this.J.j_(a)
    };
    g.k.T9 = function(a) {
        this.Ek("control_subtitles_set_track", g.fd(a) ? null : a)
    };
    g.k.gY = function() {
        var a = this.F.getOption("captions", "track");
        g.fd(a) || gsb(this, a)
    };
    g.k.zc = function(a) {
        this.module.zc(a, this.F.getVideoData().lengthSeconds)
    };
    g.k.p6 = function() {
        g.fd(this.B) || hsb(this, this.B);
        this.C = !1
    };
    g.k.BW = function(a, b) {
        this.u.stop();
        2 === b && this.XX()
    };
    g.k.bD = function() {
        if (k$(this)) {
            this.j.stop();
            var a = B9(this.Bc);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.module.Bh = 1;
                    break;
                case 1082:
                case 1083:
                    this.module.Bh = 0;
                    break;
                default:
                    this.module.Bh = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.qc(new g.XO(8));
                    this.WX();
                    break;
                case 1085:
                case 3:
                    this.qc(new g.XO(9));
                    break;
                case 1083:
                case 0:
                    this.qc(new g.XO(2));
                    this.I.stop();
                    this.zc(this.F.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.qc(new g.XO(4));
                    break;
                case 2:
                    this.qc(new g.XO(4));
                    this.zc(x9(a));
                    break;
                case -1:
                    this.qc(new g.XO(64));
                    break;
                case -1E3:
                    this.qc(new g.XO(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback.",
                        BF: 2
                    }))
            }
            a = B9(this.Bc).trackData;
            var b = this.B;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.B = a, hsb(this, a));
            a = B9(this.Bc); - 1 === a.volume || Math.round(this.F.getVolume()) === a.volume && this.F.isMuted() === a.muted || this.T.isActive() || this.MY()
        } else fsb(this)
    };
    g.k.xW = function() {
        this.F.ma("mdxpreviousnextchange")
    };
    g.k.jH = function() {
        k$(this) || fsb(this)
    };
    g.k.sW = function(a) {
        isNaN(a) || this.F.ma("mdxnowautoplaying", a)
    };
    g.k.WV = function() {
        this.F.ma("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        k$(this) && this.Bc.setAudioTrack(this.F.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        -1 === B9(this.Bc).playerState ? l$(this, a) : b && this.Bc.seekTo(a)
    };
    g.k.MY = function() {
        var a = this;
        if (k$(this)) {
            var b = B9(this.Bc);
            this.events.Hc(this.ea);
            b.muted ? this.F.mute() : this.F.unMute();
            this.F.setVolume(b.volume);
            this.ea = this.events.S(this.F, "onVolumeChange", function(c) {
                csb(a, c)
            })
        }
    };
    g.k.WX = function() {
        this.j.stop();
        if (!this.Bc.isDisposed()) {
            var a = B9(this.Bc);
            a.bd() && this.qc(new g.XO(8));
            this.zc(x9(a));
            this.j.start()
        }
    };
    g.k.XX = function() {
        this.u.stop();
        this.j.stop();
        var a = this.Bc.Fs();
        2 == this.Bc.B && !isNaN(a) && this.u.start()
    };
    g.k.qc = function(a) {
        this.u.stop();
        var b = this.D;
        if (!g.bP(b, a)) {
            var c = g.cO(a, 2);
            c !== g.cO(this.D, 2) && this.F.Rz(c);
            this.D = a;
            jsb(this.module, b, a)
        }
    };
    g.x(m$, g.V);
    m$.prototype.pd = function() {
        this.j.show()
    };
    m$.prototype.Hb = function() {
        this.j.hide()
    };
    m$.prototype.u = function() {
        a8("mdx-privacy-popup-cancel");
        this.Hb()
    };
    m$.prototype.B = function() {
        a8("mdx-privacy-popup-confirm");
        this.Hb()
    };
    g.x(n$, g.V);
    n$.prototype.onStateChange = function(a) {
        this.uc(a.state)
    };
    n$.prototype.uc = function(a) {
        if (3 === this.api.getPresentingPlayerType()) {
            var b = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            a = g.cO(a, 128) ? g.yO("Error on $RECEIVER_NAME", b) : a.bd() || g.cP(a) ? g.yO("Playing on $RECEIVER_NAME", b) : g.yO("Connected to $RECEIVER_NAME", b);
            this.updateValue("statustext", a);
            this.j.show()
        } else this.j.hide()
    };
    g.x(o$, g.zV);
    o$.prototype.C = function() {
        var a = this.F.getOption("remote", "receivers");
        a && 1 < a.length && !this.F.getOption("remote", "quickCast") ? (this.zt = g.Vb(a, this.j, this), g.AV(this, g.fm(a, this.j)), a = this.F.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.xj(a), this.enable(!0)) : this.enable(!1)
    };
    o$.prototype.j = function(a) {
        return a.key
    };
    o$.prototype.jk = function(a) {
        return "cast-selector-receiver" === a ? "Cast..." : this.zt[a].name
    };
    o$.prototype.fh = function(a) {
        g.zV.prototype.fh.call(this, a);
        this.F.setOption("remote", "currentReceiver", this.zt[a]);
        this.Fb.Hb()
    };
    g.x(isb, g.tT);
    g.k = isb.prototype;
    g.k.create = function() {
        var a = this.player.V(),
            b = g.wK(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.K("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.K("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.K("enable_cast_short_lived_lounge_token")
        };
        Urb(b, a);
        this.subscriptions.push(g.tC("yt-remote-before-disconnect", this.H5, this));
        this.subscriptions.push(g.tC("yt-remote-connection-change", this.c7, this));
        this.subscriptions.push(g.tC("yt-remote-receiver-availability-change", this.zW,
            this));
        this.subscriptions.push(g.tC("yt-remote-auto-connect", this.a7, this));
        this.subscriptions.push(g.tC("yt-remote-receiver-resumed", this.Z6, this));
        this.subscriptions.push(g.tC("mdx-privacy-popup-confirm", this.w8, this));
        this.subscriptions.push(g.tC("mdx-privacy-popup-cancel", this.v8, this));
        this.zW()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.tT.prototype.load.call(this);
        this.Al = new esb(this, this.player, this.Bc);
        var a = (a = bsb()) ? a.currentTime : 0;
        var b = Zrb() ? new A9(f$(), void 0) : null;
        0 == a && b && (a = x9(B9(b)));
        0 !== a && this.zc(a);
        jsb(this, this.Ue, this.Ue);
        this.player.qp(6)
    };
    g.k.unload = function() {
        this.player.ma("mdxautoplaycanceled");
        this.Sr = this.Zo;
        g.ib(this.Al, this.Bc);
        this.Bc = this.Al = null;
        g.tT.prototype.unload.call(this);
        this.player.qp(5);
        p$(this)
    };
    g.k.qa = function() {
        g.uC(this.subscriptions);
        g.tT.prototype.qa.call(this)
    };
    g.k.ep = function(a) {
        var b = g.Ca.apply(1, arguments);
        this.loaded && this.Al.Ek.apply(this.Al, [a].concat(g.la(b)))
    };
    g.k.getAdState = function() {
        return this.Bh
    };
    g.k.Oo = function() {
        return this.Bc ? B9(this.Bc).Oo : !1
    };
    g.k.Fk = function() {
        return this.Bc ? B9(this.Bc).Fk : !1
    };
    g.k.zc = function(a, b) {
        this.hV = a || 0;
        this.player.ma("progresssync", a, b);
        this.player.Oa("onVideoProgress", a || 0)
    };
    g.k.getCurrentTime = function() {
        return this.hV
    };
    g.k.getProgressState = function() {
        var a = B9(this.Bc),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: 1081 != a.playerState && this.player.Ah(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.u ? a.B + v9(a) : a.B,
            isAtLiveHead: 1 >= (a.u ? a.j + v9(a) : a.j) - this.getCurrentTime(),
            loaded: a.T,
            seekableEnd: a.u ? a.j + v9(a) : a.j,
            seekableStart: 0 < a.C ? a.C + v9(a) : a.C,
            offset: 0,
            viewerLivestreamJoinTime: b.viewerLivestreamJoinTime
        }
    };
    g.k.nextVideo = function() {
        this.Bc && this.Bc.nextVideo()
    };
    g.k.zH = function() {
        this.Bc && this.Bc.zH()
    };
    g.k.H5 = function(a) {
        1 === a && (this.xO = this.Bc ? B9(this.Bc) : null)
    };
    g.k.c7 = function() {
        var a = Zrb() ? new A9(f$(), void 0) : null;
        if (a) {
            var b = this.Sr;
            this.loaded && this.unload();
            this.Bc = a;
            this.xO = null;
            b.key !== this.Zo.key && (this.Sr = b, this.load())
        } else g.gb(this.Bc), this.Bc = null, this.loaded && (this.unload(), (a = this.xO) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, x9(a)));
        this.player.ma("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.zW = function() {
        var a = [this.Zo],
            b = a.concat,
            c = Vrb();
        r9() && g.Tz("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.zt = b.call(a, c);
        a = Xrb() || this.Zo;
        q$(this, a);
        this.player.Oa("onMdxReceiversChange")
    };
    g.k.a7 = function() {
        var a = Xrb();
        q$(this, a)
    };
    g.k.Z6 = function() {
        this.Sr = Xrb()
    };
    g.k.w8 = function() {
        this.qD = !0;
        p$(this);
        j$ = !1;
        g$ && i$(g$, 1);
        g$ = null
    };
    g.k.v8 = function() {
        this.qD = !1;
        p$(this);
        q$(this, this.Zo);
        this.Sr = this.Zo;
        j$ = !1;
        g$ = null;
        this.player.playVideo()
    };
    g.k.rh = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.zt;
            case "currentReceiver":
                return b && ("cast-selector-receiver" === b.key ? nrb() : q$(this, b)), this.loaded ? this.Sr : this.Zo;
            case "quickCast":
                return 2 === this.zt.length && "cast-selector-receiver" === this.zt[1].key ? (b && nrb(), !0) : !1
        }
    };
    g.k.HP = function() {
        this.Bc.HP()
    };
    g.k.Vk = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.sT("remote", isb);
})(_yt_player);