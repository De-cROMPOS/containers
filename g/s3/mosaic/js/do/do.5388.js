(self.webpackChunkdo = self.webpackChunkdo || []).push([[5388], {
    5388: function(e, t, n) {
        var i, o;
        i = function() {
            "use strict";
            var e = function(e, t, n, i) {
                var o = {
                    features: null,
                    bind: function(e, t, n, i) {
                        var o = (i ? "remove" : "add") + "EventListener";
                        t = t.split(" ");
                        for (var a = 0; a < t.length; a++)
                            t[a] && e[o](t[a], n, !1)
                    },
                    isArray: function(e) {
                        return e instanceof Array
                    },
                    createEl: function(e, t) {
                        var n = document.createElement(t || "div");
                        return e && (n.className = e),
                        n
                    },
                    getScrollY: function() {
                        var e = window.pageYOffset;
                        return void 0 !== e ? e : document.documentElement.scrollTop
                    },
                    unbind: function(e, t, n) {
                        o.bind(e, t, n, !0)
                    },
                    removeClass: function(e, t) {
                        var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                        e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                    },
                    addClass: function(e, t) {
                        o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
                    },
                    hasClass: function(e, t) {
                        return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
                    },
                    getChildByClass: function(e, t) {
                        for (var n = e.firstChild; n; ) {
                            if (o.hasClass(n, t))
                                return n;
                            n = n.nextSibling
                        }
                    },
                    arraySearch: function(e, t, n) {
                        for (var i = e.length; i--; )
                            if (e[i][n] === t)
                                return i;
                        return -1
                    },
                    extend: function(e, t, n) {
                        for (var i in t)
                            if (t.hasOwnProperty(i)) {
                                if (n && e.hasOwnProperty(i))
                                    continue;
                                e[i] = t[i]
                            }
                    },
                    easing: {
                        sine: {
                            out: function(e) {
                                return Math.sin(e * (Math.PI / 2))
                            },
                            inOut: function(e) {
                                return -(Math.cos(Math.PI * e) - 1) / 2
                            }
                        },
                        cubic: {
                            out: function(e) {
                                return --e * e * e + 1
                            }
                        }
                    },
                    detectFeatures: function() {
                        if (o.features)
                            return o.features;
                        var e = o.createEl().style
                          , t = ""
                          , n = {};
                        if (n.oldIE = document.all && !document.addEventListener,
                        n.touch = "ontouchstart"in window,
                        window.requestAnimationFrame && (n.raf = window.requestAnimationFrame,
                        n.caf = window.cancelAnimationFrame),
                        n.pointerEvent = !!window.PointerEvent || navigator.msPointerEnabled,
                        !n.pointerEvent) {
                            var i = navigator.userAgent;
                            if (/iP(hone|od)/.test(navigator.platform)) {
                                var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                                a && a.length > 0 && (a = parseInt(a[1], 10)) >= 1 && a < 8 && (n.isOldIOSPhone = !0)
                            }
                            var r = i.match(/Android\s([0-9\.]*)/)
                              , l = r ? r[1] : 0;
                            (l = parseFloat(l)) >= 1 && (l < 4.4 && (n.isOldAndroid = !0),
                            n.androidVersion = l),
                            n.isMobileOpera = /opera mini|opera mobi/i.test(i)
                        }
                        for (var s, u, c = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], p = 0; p < 4; p++) {
                            t = d[p];
                            for (var m = 0; m < 3; m++)
                                s = c[m],
                                u = t + (t ? s.charAt(0).toUpperCase() + s.slice(1) : s),
                                !n[s] && u in e && (n[s] = u);
                            t && !n.raf && (t = t.toLowerCase(),
                            n.raf = window[t + "RequestAnimationFrame"],
                            n.raf && (n.caf = window[t + "CancelAnimationFrame"] || window[t + "CancelRequestAnimationFrame"]))
                        }
                        if (!n.raf) {
                            var f = 0;
                            n.raf = function(e) {
                                var t = (new Date).getTime()
                                  , n = Math.max(0, 16 - (t - f))
                                  , i = window.setTimeout((function() {
                                    e(t + n)
                                }
                                ), n);
                                return f = t + n,
                                i
                            }
                            ,
                            n.caf = function(e) {
                                clearTimeout(e)
                            }
                        }
                        return n.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
                        o.features = n,
                        n
                    }
                };
                o.detectFeatures(),
                o.features.oldIE && (o.bind = function(e, t, n, i) {
                    t = t.split(" ");
                    for (var o, a = (i ? "detach" : "attach") + "Event", r = function() {
                        n.handleEvent.call(n)
                    }, l = 0; l < t.length; l++)
                        if (o = t[l])
                            if ("object" == typeof n && n.handleEvent) {
                                if (i) {
                                    if (!n["oldIE" + o])
                                        return !1
                                } else
                                    n["oldIE" + o] = r;
                                e[a]("on" + o, n["oldIE" + o])
                            } else
                                e[a]("on" + o, n)
                }
                );
                var a = this
                  , r = 25
                  , l = 3
                  , s = {
                    allowPanToNext: !0,
                    spacing: .12,
                    bgOpacity: 1,
                    mouseUsed: !1,
                    loop: !0,
                    pinchToClose: !0,
                    closeOnScroll: !0,
                    closeOnVerticalDrag: !0,
                    verticalDragRange: .75,
                    hideAnimationDuration: 333,
                    showAnimationDuration: 333,
                    showHideOpacity: !1,
                    focus: !0,
                    escKey: !0,
                    arrowKeys: !0,
                    mainScrollEndFriction: .35,
                    panEndFriction: .35,
                    isClickableElement: function(e) {
                        return "A" === e.tagName
                    },
                    getDoubleTapZoom: function(e, t) {
                        return e || t.initialZoomLevel < .7 ? 1 : 1.33
                    },
                    maxSpreadZoom: 1.33,
                    modal: !0,
                    scaleMode: "fit"
                };
                o.extend(s, i);
                var u, c, d, p, m, f, h, y, x, v, g, w, b, I, C, D, T, M, S, A, k, E, O, R, Z, P, F, L, z, _, N, U, H, Y, W, B, G, X, V, K, q, $, j, J, Q, ee, te, ne, ie, oe, ae, re, le, se, ue, ce, de = function() {
                    return {
                        x: 0,
                        y: 0
                    }
                }, pe = de(), me = de(), fe = de(), he = {}, ye = 0, xe = {}, ve = de(), ge = 0, we = !0, be = [], Ie = {}, Ce = !1, De = function(e, t) {
                    o.extend(a, t.publicMethods),
                    be.push(e)
                }, Te = function(e) {
                    var t = Qt();
                    return e > t - 1 ? e - t : e < 0 ? t + e : e
                }, Me = {}, Se = function(e, t) {
                    return Me[e] || (Me[e] = []),
                    Me[e].push(t)
                }, Ae = function(e) {
                    var t = Me[e];
                    if (t) {
                        var n = Array.prototype.slice.call(arguments);
                        n.shift();
                        for (var i = 0; i < t.length; i++)
                            t[i].apply(a, n)
                    }
                }, ke = function() {
                    return (new Date).getTime()
                }, Ee = function(e) {
                    se = e,
                    a.bg.style.opacity = e * s.bgOpacity
                }, Oe = function(e, t, n, i, o) {
                    (!Ce || o && o !== a.currItem) && (i /= o ? o.fitRatio : a.currItem.fitRatio),
                    e[E] = w + t + "px, " + n + "px" + b + " scale(" + i + ")"
                }, Re = function(e) {
                    ie && (e && (v > a.currItem.fitRatio ? Ce || (dn(a.currItem, !1, !0),
                    Ce = !0) : Ce && (dn(a.currItem),
                    Ce = !1)),
                    Oe(ie, fe.x, fe.y, v))
                }, Ze = function(e) {
                    e.container && Oe(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
                }, Pe = function(e, t) {
                    t[E] = w + e + "px, 0px" + b
                }, Fe = function(e, t) {
                    if (!s.loop && t) {
                        var n = p + (ve.x * ye - e) / ve.x
                          , i = Math.round(e - vt.x);
                        (n < 0 && i > 0 || n >= Qt() - 1 && i < 0) && (e = vt.x + i * s.mainScrollEndFriction)
                    }
                    vt.x = e,
                    Pe(e, m)
                }, Le = function(e, t) {
                    var n = gt[e] - xe[e];
                    return me[e] + pe[e] + n - n * (t / g)
                }, ze = function(e, t) {
                    e.x = t.x,
                    e.y = t.y,
                    t.id && (e.id = t.id)
                }, _e = function(e) {
                    e.x = Math.round(e.x),
                    e.y = Math.round(e.y)
                }, Ne = null, Ue = function() {
                    Ne && (o.unbind(document, "mousemove", Ue),
                    o.addClass(e, "pswp--has_mouse"),
                    s.mouseUsed = !0,
                    Ae("mouseUsed")),
                    Ne = setTimeout((function() {
                        Ne = null
                    }
                    ), 100)
                }, He = function() {
                    o.bind(document, "keydown", a),
                    N.transform && o.bind(a.scrollWrap, "click", a),
                    s.mouseUsed || o.bind(document, "mousemove", Ue),
                    o.bind(window, "resize scroll orientationchange", a),
                    Ae("bindEvents")
                }, Ye = function() {
                    o.unbind(window, "resize scroll orientationchange", a),
                    o.unbind(window, "scroll", x.scroll),
                    o.unbind(document, "keydown", a),
                    o.unbind(document, "mousemove", Ue),
                    N.transform && o.unbind(a.scrollWrap, "click", a),
                    V && o.unbind(window, h, a),
                    clearTimeout(U),
                    Ae("unbindEvents")
                }, We = function(e, t) {
                    var n = ln(a.currItem, he, e);
                    return t && (ne = n),
                    n
                }, Be = function(e) {
                    return e || (e = a.currItem),
                    e.initialZoomLevel
                }, Ge = function(e) {
                    return e || (e = a.currItem),
                    e.w > 0 ? s.maxSpreadZoom : 1
                }, Xe = function(e, t, n, i) {
                    return i === a.currItem.initialZoomLevel ? (n[e] = a.currItem.initialPosition[e],
                    !0) : (n[e] = Le(e, i),
                    n[e] > t.min[e] ? (n[e] = t.min[e],
                    !0) : n[e] < t.max[e] && (n[e] = t.max[e],
                    !0))
                }, Ve = function() {
                    if (E) {
                        var t = N.perspective && !R;
                        return w = "translate" + (t ? "3d(" : "("),
                        void (b = N.perspective ? ", 0px)" : ")")
                    }
                    E = "left",
                    o.addClass(e, "pswp--ie"),
                    Pe = function(e, t) {
                        t.left = e + "px"
                    }
                    ,
                    Ze = function(e) {
                        var t = e.fitRatio > 1 ? 1 : e.fitRatio
                          , n = e.container.style
                          , i = t * e.w
                          , o = t * e.h;
                        n.width = i + "px",
                        n.height = o + "px",
                        n.left = e.initialPosition.x + "px",
                        n.top = e.initialPosition.y + "px"
                    }
                    ,
                    Re = function() {
                        if (ie) {
                            var e = ie
                              , t = a.currItem
                              , n = t.fitRatio > 1 ? 1 : t.fitRatio
                              , i = n * t.w
                              , o = n * t.h;
                            e.width = i + "px",
                            e.height = o + "px",
                            e.left = fe.x + "px",
                            e.top = fe.y + "px"
                        }
                    }
                }, Ke = function(e) {
                    var t = "";
                    s.escKey && 27 === e.keyCode ? t = "close" : s.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")),
                    t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                    a[t]()))
                }, qe = function(e) {
                    e && ($ || q || oe || G) && (e.preventDefault(),
                    e.stopPropagation())
                }, $e = function() {
                    a.setScrollOffset(0, o.getScrollY())
                }, je = {}, Je = 0, Qe = function(e) {
                    je[e] && (je[e].raf && P(je[e].raf),
                    Je--,
                    delete je[e])
                }, et = function(e) {
                    je[e] && Qe(e),
                    je[e] || (Je++,
                    je[e] = {})
                }, tt = function() {
                    for (var e in je)
                        je.hasOwnProperty(e) && Qe(e)
                }, nt = function(e, t, n, i, o, a, r) {
                    var l, s = ke();
                    et(e);
                    var u = function() {
                        if (je[e]) {
                            if ((l = ke() - s) >= i)
                                return Qe(e),
                                a(n),
                                void (r && r());
                            a((n - t) * o(l / i) + t),
                            je[e].raf = Z(u)
                        }
                    };
                    u()
                }, it = {
                    shout: Ae,
                    listen: Se,
                    viewportSize: he,
                    options: s,
                    isMainScrollAnimating: function() {
                        return oe
                    },
                    getZoomLevel: function() {
                        return v
                    },
                    getCurrentIndex: function() {
                        return p
                    },
                    isDragging: function() {
                        return V
                    },
                    isZooming: function() {
                        return ee
                    },
                    setScrollOffset: function(e, t) {
                        xe.x = e,
                        _ = xe.y = t,
                        Ae("updateScrollOffset", xe)
                    },
                    applyZoomPan: function(e, t, n, i) {
                        fe.x = t,
                        fe.y = n,
                        v = e,
                        Re(i)
                    },
                    init: function() {
                        if (!u && !c) {
                            var n;
                            a.framework = o,
                            a.template = e,
                            a.bg = o.getChildByClass(e, "pswp__bg"),
                            F = e.className,
                            u = !0,
                            N = o.detectFeatures(),
                            Z = N.raf,
                            P = N.caf,
                            E = N.transform,
                            z = N.oldIE,
                            a.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap"),
                            a.container = o.getChildByClass(a.scrollWrap, "pswp__container"),
                            m = a.container.style,
                            a.itemHolders = D = [{
                                el: a.container.children[0],
                                wrap: 0,
                                index: -1
                            }, {
                                el: a.container.children[1],
                                wrap: 0,
                                index: -1
                            }, {
                                el: a.container.children[2],
                                wrap: 0,
                                index: -1
                            }],
                            D[0].el.style.display = D[2].el.style.display = "none",
                            Ve(),
                            x = {
                                resize: a.updateSize,
                                orientationchange: function() {
                                    clearTimeout(U),
                                    U = setTimeout((function() {
                                        he.x !== a.scrollWrap.clientWidth && a.updateSize()
                                    }
                                    ), 500)
                                },
                                scroll: $e,
                                keydown: Ke,
                                click: qe
                            };
                            var i = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;
                            for (N.animationName && N.transform && !i || (s.showAnimationDuration = s.hideAnimationDuration = 0),
                            n = 0; n < be.length; n++)
                                a["init" + be[n]]();
                            t && (a.ui = new t(a,o)).init(),
                            Ae("firstUpdate"),
                            p = p || s.index || 0,
                            (isNaN(p) || p < 0 || p >= Qt()) && (p = 0),
                            a.currItem = Jt(p),
                            (N.isOldIOSPhone || N.isOldAndroid) && (we = !1),
                            e.setAttribute("aria-hidden", "false"),
                            s.modal && (we ? e.style.position = "fixed" : (e.style.position = "absolute",
                            e.style.top = o.getScrollY() + "px")),
                            void 0 === _ && (Ae("initialLayout"),
                            _ = L = o.getScrollY());
                            var r = "pswp--open ";
                            for (s.mainClass && (r += s.mainClass + " "),
                            s.showHideOpacity && (r += "pswp--animate_opacity "),
                            r += R ? "pswp--touch" : "pswp--notouch",
                            r += N.animationName ? " pswp--css_animation" : "",
                            r += N.svg ? " pswp--svg" : "",
                            o.addClass(e, r),
                            a.updateSize(),
                            f = -1,
                            ge = null,
                            n = 0; n < l; n++)
                                Pe((n + f) * ve.x, D[n].el.style);
                            z || o.bind(a.scrollWrap, y, a),
                            Se("initialZoomInEnd", (function() {
                                a.setContent(D[0], p - 1),
                                a.setContent(D[2], p + 1),
                                D[0].el.style.display = D[2].el.style.display = "block",
                                s.focus && e.focus(),
                                He()
                            }
                            )),
                            a.setContent(D[1], p),
                            a.updateCurrItem(),
                            Ae("afterInit"),
                            we || (I = setInterval((function() {
                                Je || V || ee || v !== a.currItem.initialZoomLevel || a.updateSize()
                            }
                            ), 1e3)),
                            o.addClass(e, "pswp--visible")
                        }
                    },
                    close: function() {
                        u && (u = !1,
                        c = !0,
                        Ae("close"),
                        Ye(),
                        en(a.currItem, null, !0, a.destroy))
                    },
                    destroy: function() {
                        Ae("destroy"),
                        Kt && clearTimeout(Kt),
                        e.setAttribute("aria-hidden", "true"),
                        e.className = F,
                        I && clearInterval(I),
                        o.unbind(a.scrollWrap, y, a),
                        o.unbind(window, "scroll", a),
                        Dt(),
                        tt(),
                        Me = null
                    },
                    panTo: function(e, t, n) {
                        n || (e > ne.min.x ? e = ne.min.x : e < ne.max.x && (e = ne.max.x),
                        t > ne.min.y ? t = ne.min.y : t < ne.max.y && (t = ne.max.y)),
                        fe.x = e,
                        fe.y = t,
                        Re()
                    },
                    handleEvent: function(e) {
                        e = e || window.event,
                        x[e.type] && x[e.type](e)
                    },
                    goTo: function(e) {
                        var t = (e = Te(e)) - p;
                        ge = t,
                        p = e,
                        a.currItem = Jt(p),
                        ye -= t,
                        Fe(ve.x * ye),
                        tt(),
                        oe = !1,
                        a.updateCurrItem()
                    },
                    next: function() {
                        a.goTo(p + 1)
                    },
                    prev: function() {
                        a.goTo(p - 1)
                    },
                    updateCurrZoomItem: function(e) {
                        if (e && Ae("beforeChange", 0),
                        D[1].el.children.length) {
                            var t = D[1].el.children[0];
                            ie = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                        } else
                            ie = null;
                        ne = a.currItem.bounds,
                        g = v = a.currItem.initialZoomLevel,
                        fe.x = ne.center.x,
                        fe.y = ne.center.y,
                        e && Ae("afterChange")
                    },
                    invalidateCurrItems: function() {
                        C = !0;
                        for (var e = 0; e < l; e++)
                            D[e].item && (D[e].item.needsUpdate = !0)
                    },
                    updateCurrItem: function(e) {
                        if (0 !== ge) {
                            var t, n = Math.abs(ge);
                            if (!(e && n < 2)) {
                                a.currItem = Jt(p),
                                Ce = !1,
                                Ae("beforeChange", ge),
                                n >= l && (f += ge + (ge > 0 ? -l : l),
                                n = l);
                                for (var i = 0; i < n; i++)
                                    ge > 0 ? (t = D.shift(),
                                    D[l - 1] = t,
                                    f++,
                                    Pe((f + 2) * ve.x, t.el.style),
                                    a.setContent(t, p - n + i + 1 + 1)) : (t = D.pop(),
                                    D.unshift(t),
                                    f--,
                                    Pe(f * ve.x, t.el.style),
                                    a.setContent(t, p + n - i - 1 - 1));
                                if (ie && 1 === Math.abs(ge)) {
                                    var o = Jt(T);
                                    o.initialZoomLevel !== v && (ln(o, he),
                                    dn(o),
                                    Ze(o))
                                }
                                ge = 0,
                                a.updateCurrZoomItem(),
                                T = p,
                                Ae("afterChange")
                            }
                        }
                    },
                    updateSize: function(t) {
                        if (!we && s.modal) {
                            var n = o.getScrollY();
                            if (_ !== n && (e.style.top = n + "px",
                            _ = n),
                            !t && Ie.x === window.innerWidth && Ie.y === window.innerHeight)
                                return;
                            Ie.x = window.innerWidth,
                            Ie.y = window.innerHeight,
                            e.style.height = Ie.y + "px"
                        }
                        if (he.x = a.scrollWrap.clientWidth,
                        he.y = a.scrollWrap.clientHeight,
                        $e(),
                        ve.x = he.x + Math.round(he.x * s.spacing),
                        ve.y = he.y,
                        Fe(ve.x * ye),
                        Ae("beforeResize"),
                        void 0 !== f) {
                            for (var i, r, u, c = 0; c < l; c++)
                                i = D[c],
                                Pe((c + f) * ve.x, i.el.style),
                                u = p + c - 1,
                                s.loop && Qt() > 2 && (u = Te(u)),
                                (r = Jt(u)) && (C || r.needsUpdate || !r.bounds) ? (a.cleanSlide(r),
                                a.setContent(i, u),
                                1 === c && (a.currItem = r,
                                a.updateCurrZoomItem(!0)),
                                r.needsUpdate = !1) : -1 === i.index && u >= 0 && a.setContent(i, u),
                                r && r.container && (ln(r, he),
                                dn(r),
                                Ze(r));
                            C = !1
                        }
                        g = v = a.currItem.initialZoomLevel,
                        (ne = a.currItem.bounds) && (fe.x = ne.center.x,
                        fe.y = ne.center.y,
                        Re(!0)),
                        Ae("resize")
                    },
                    zoomTo: function(e, t, n, i, a) {
                        t && (g = v,
                        gt.x = Math.abs(t.x) - fe.x,
                        gt.y = Math.abs(t.y) - fe.y,
                        ze(me, fe));
                        var r = We(e, !1)
                          , l = {};
                        Xe("x", r, l, e),
                        Xe("y", r, l, e);
                        var s = v
                          , u = {
                            x: fe.x,
                            y: fe.y
                        };
                        _e(l);
                        var c = function(t) {
                            1 === t ? (v = e,
                            fe.x = l.x,
                            fe.y = l.y) : (v = (e - s) * t + s,
                            fe.x = (l.x - u.x) * t + u.x,
                            fe.y = (l.y - u.y) * t + u.y),
                            a && a(t),
                            Re(1 === t)
                        };
                        n ? nt("customZoomTo", 0, 1, n, i || o.easing.sine.inOut, c) : c(1)
                    }
                }, ot = 30, at = 10, rt = {}, lt = {}, st = {}, ut = {}, ct = {}, dt = [], pt = {}, mt = [], ft = {}, ht = 0, yt = de(), xt = 0, vt = de(), gt = de(), wt = de(), bt = function(e, t) {
                    return e.x === t.x && e.y === t.y
                }, It = function(e, t) {
                    return Math.abs(e.x - t.x) < r && Math.abs(e.y - t.y) < r
                }, Ct = function(e, t) {
                    return ft.x = Math.abs(e.x - t.x),
                    ft.y = Math.abs(e.y - t.y),
                    Math.sqrt(ft.x * ft.x + ft.y * ft.y)
                }, Dt = function() {
                    j && (P(j),
                    j = null)
                }, Tt = function() {
                    V && (j = Z(Tt),
                    Ht())
                }, Mt = function() {
                    return !("fit" === s.scaleMode && v === a.currItem.initialZoomLevel)
                }, St = function(e, t) {
                    return !(!e || e === document) && !(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : St(e.parentNode, t))
                }, At = {}, kt = function(e, t) {
                    return At.prevent = !St(e.target, s.isClickableElement),
                    Ae("preventDragEvent", e, t, At),
                    At.prevent
                }, Et = function(e, t) {
                    return t.x = e.pageX,
                    t.y = e.pageY,
                    t.id = e.identifier,
                    t
                }, Ot = function(e, t, n) {
                    n.x = .5 * (e.x + t.x),
                    n.y = .5 * (e.y + t.y)
                }, Rt = function(e, t, n) {
                    if (e - Y > 50) {
                        var i = mt.length > 2 ? mt.shift() : {};
                        i.x = t,
                        i.y = n,
                        mt.push(i),
                        Y = e
                    }
                }, Zt = function() {
                    var e = fe.y - a.currItem.initialPosition.y;
                    return 1 - Math.abs(e / (he.y / 2))
                }, Pt = {}, Ft = {}, Lt = [], zt = function(e) {
                    for (; Lt.length > 0; )
                        Lt.pop();
                    return O ? (ce = 0,
                    dt.forEach((function(e) {
                        0 === ce ? Lt[0] = e : 1 === ce && (Lt[1] = e),
                        ce++
                    }
                    ))) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Lt[0] = Et(e.touches[0], Pt),
                    e.touches.length > 1 && (Lt[1] = Et(e.touches[1], Ft))) : (Pt.x = e.pageX,
                    Pt.y = e.pageY,
                    Pt.id = "",
                    Lt[0] = Pt),
                    Lt
                }, _t = function(e, t) {
                    var n, i, o, r, l = fe[e] + t[e], u = t[e] > 0, c = vt.x + t.x, d = vt.x - pt.x;
                    if (n = l > ne.min[e] || l < ne.max[e] ? s.panEndFriction : 1,
                    l = fe[e] + t[e] * n,
                    (s.allowPanToNext || v === a.currItem.initialZoomLevel) && (ie ? "h" !== ae || "x" !== e || q || (u ? (l > ne.min[e] && (n = s.panEndFriction,
                    ne.min[e],
                    i = ne.min[e] - me[e]),
                    (i <= 0 || d < 0) && Qt() > 1 ? (r = c,
                    d < 0 && c > pt.x && (r = pt.x)) : ne.min.x !== ne.max.x && (o = l)) : (l < ne.max[e] && (n = s.panEndFriction,
                    ne.max[e],
                    i = me[e] - ne.max[e]),
                    (i <= 0 || d > 0) && Qt() > 1 ? (r = c,
                    d > 0 && c < pt.x && (r = pt.x)) : ne.min.x !== ne.max.x && (o = l))) : r = c,
                    "x" === e))
                        return void 0 !== r && (Fe(r, !0),
                        J = r !== pt.x),
                        ne.min.x !== ne.max.x && (void 0 !== o ? fe.x = o : J || (fe.x += t.x * n)),
                        void 0 !== r;
                    oe || J || v > a.currItem.fitRatio && (fe[e] += t[e] * n)
                }, Nt = function(e) {
                    if (!("mousedown" === e.type && e.button > 0))
                        if (jt)
                            e.preventDefault();
                        else if (!X || "mousedown" !== e.type) {
                            if (kt(e, !0) && e.preventDefault(),
                            Ae("pointerDown"),
                            O) {
                                var t = o.arraySearch(dt, e.pointerId, "id");
                                t < 0 && (t = dt.length),
                                dt[t] = {
                                    x: e.pageX,
                                    y: e.pageY,
                                    id: e.pointerId
                                }
                            }
                            var n = zt(e)
                              , i = n.length;
                            Q = null,
                            tt(),
                            V && 1 !== i || (V = re = !0,
                            o.bind(window, h, a),
                            B = ue = le = G = J = $ = K = q = !1,
                            ae = null,
                            Ae("firstTouchStart", n),
                            ze(me, fe),
                            pe.x = pe.y = 0,
                            ze(ut, n[0]),
                            ze(ct, ut),
                            pt.x = ve.x * ye,
                            mt = [{
                                x: ut.x,
                                y: ut.y
                            }],
                            Y = H = ke(),
                            We(v, !0),
                            Dt(),
                            Tt()),
                            !ee && i > 1 && !oe && !J && (g = v,
                            q = !1,
                            ee = K = !0,
                            pe.y = pe.x = 0,
                            ze(me, fe),
                            ze(rt, n[0]),
                            ze(lt, n[1]),
                            Ot(rt, lt, wt),
                            gt.x = Math.abs(wt.x) - fe.x,
                            gt.y = Math.abs(wt.y) - fe.y,
                            te = Ct(rt, lt))
                        }
                }, Ut = function(e) {
                    if (e.preventDefault(),
                    O) {
                        var t = o.arraySearch(dt, e.pointerId, "id");
                        if (t > -1) {
                            var n = dt[t];
                            n.x = e.pageX,
                            n.y = e.pageY
                        }
                    }
                    if (V) {
                        var i = zt(e);
                        if (ae || $ || ee)
                            Q = i;
                        else if (vt.x !== ve.x * ye)
                            ae = "h";
                        else {
                            var a = Math.abs(i[0].x - ut.x) - Math.abs(i[0].y - ut.y);
                            Math.abs(a) >= at && (ae = a > 0 ? "h" : "v",
                            Q = i)
                        }
                    }
                }, Ht = function() {
                    if (Q) {
                        var e = Q.length;
                        if (0 !== e)
                            if (ze(rt, Q[0]),
                            st.x = rt.x - ut.x,
                            st.y = rt.y - ut.y,
                            ee && e > 1) {
                                if (ut.x = rt.x,
                                ut.y = rt.y,
                                !st.x && !st.y && bt(Q[1], lt))
                                    return;
                                ze(lt, Q[1]),
                                q || (q = !0,
                                Ae("zoomGestureStarted"));
                                var t = Ct(rt, lt)
                                  , n = Xt(t);
                                n > a.currItem.initialZoomLevel + a.currItem.initialZoomLevel / 15 && (ue = !0);
                                var i = 1
                                  , o = Be()
                                  , r = Ge();
                                if (n < o)
                                    if (s.pinchToClose && !ue && g <= a.currItem.initialZoomLevel) {
                                        var l = 1 - (o - n) / (o / 1.2);
                                        Ee(l),
                                        Ae("onPinchClose", l),
                                        le = !0
                                    } else
                                        (i = (o - n) / o) > 1 && (i = 1),
                                        n = o - i * (o / 3);
                                else
                                    n > r && ((i = (n - r) / (6 * o)) > 1 && (i = 1),
                                    n = r + i * o);
                                i < 0 && (i = 0),
                                Ot(rt, lt, yt),
                                pe.x += yt.x - wt.x,
                                pe.y += yt.y - wt.y,
                                ze(wt, yt),
                                fe.x = Le("x", n),
                                fe.y = Le("y", n),
                                B = n > v,
                                v = n,
                                Re()
                            } else {
                                if (!ae)
                                    return;
                                if (re && (re = !1,
                                Math.abs(st.x) >= at && (st.x -= Q[0].x - ct.x),
                                Math.abs(st.y) >= at && (st.y -= Q[0].y - ct.y)),
                                ut.x = rt.x,
                                ut.y = rt.y,
                                0 === st.x && 0 === st.y)
                                    return;
                                if ("v" === ae && s.closeOnVerticalDrag && !Mt()) {
                                    pe.y += st.y,
                                    fe.y += st.y;
                                    var u = Zt();
                                    return G = !0,
                                    Ae("onVerticalDrag", u),
                                    Ee(u),
                                    void Re()
                                }
                                Rt(ke(), rt.x, rt.y),
                                $ = !0,
                                ne = a.currItem.bounds,
                                _t("x", st) || (_t("y", st),
                                _e(fe),
                                Re())
                            }
                    }
                }, Yt = function(e) {
                    if (N.isOldAndroid) {
                        if (X && "mouseup" === e.type)
                            return;
                        e.type.indexOf("touch") > -1 && (clearTimeout(X),
                        X = setTimeout((function() {
                            X = 0
                        }
                        ), 600))
                    }
                    var t;
                    if (Ae("pointerUp"),
                    kt(e, !1) && e.preventDefault(),
                    O) {
                        var n = o.arraySearch(dt, e.pointerId, "id");
                        if (n > -1)
                            if (t = dt.splice(n, 1)[0],
                            navigator.msPointerEnabled) {
                                var i = {
                                    4: "mouse",
                                    2: "touch",
                                    3: "pen"
                                };
                                t.type = i[e.pointerType],
                                t.type || (t.type = e.pointerType || "mouse")
                            } else
                                t.type = e.pointerType || "mouse"
                    }
                    var r, l = zt(e), u = l.length;
                    if ("mouseup" === e.type && (u = 0),
                    2 === u)
                        return Q = null,
                        !0;
                    1 === u && ze(ct, l[0]),
                    0 !== u || ae || oe || (t || ("mouseup" === e.type ? t = {
                        x: e.pageX,
                        y: e.pageY,
                        type: "mouse"
                    } : e.changedTouches && e.changedTouches[0] && (t = {
                        x: e.changedTouches[0].pageX,
                        y: e.changedTouches[0].pageY,
                        type: "touch"
                    })),
                    Ae("touchRelease", e, t));
                    var c = -1;
                    if (0 === u && (V = !1,
                    o.unbind(window, h, a),
                    Dt(),
                    ee ? c = 0 : -1 !== xt && (c = ke() - xt)),
                    xt = 1 === u ? ke() : -1,
                    r = -1 !== c && c < 150 ? "zoom" : "swipe",
                    ee && u < 2 && (ee = !1,
                    1 === u && (r = "zoomPointerUp"),
                    Ae("zoomGestureEnded")),
                    Q = null,
                    $ || q || oe || G)
                        if (tt(),
                        W || (W = Wt()),
                        W.calculateSwipeSpeed("x"),
                        G)
                            if (Zt() < s.verticalDragRange)
                                a.close();
                            else {
                                var d = fe.y
                                  , p = se;
                                nt("verticalDrag", 0, 1, 300, o.easing.cubic.out, (function(e) {
                                    fe.y = (a.currItem.initialPosition.y - d) * e + d,
                                    Ee((1 - p) * e + p),
                                    Re()
                                }
                                )),
                                Ae("onVerticalDrag", 1)
                            }
                        else {
                            if ((J || oe) && 0 === u) {
                                if (Gt(r, W))
                                    return;
                                r = "zoomPointerUp"
                            }
                            oe || ("swipe" === r ? !J && v > a.currItem.fitRatio && Bt(W) : Vt())
                        }
                }, Wt = function() {
                    var e, t, n = {
                        lastFlickOffset: {},
                        lastFlickDist: {},
                        lastFlickSpeed: {},
                        slowDownRatio: {},
                        slowDownRatioReverse: {},
                        speedDecelerationRatio: {},
                        speedDecelerationRatioAbs: {},
                        distanceOffset: {},
                        backAnimDestination: {},
                        backAnimStarted: {},
                        calculateSwipeSpeed: function(i) {
                            mt.length > 1 ? (e = ke() - Y + 50,
                            t = mt[mt.length - 2][i]) : (e = ke() - H,
                            t = ct[i]),
                            n.lastFlickOffset[i] = ut[i] - t,
                            n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]),
                            n.lastFlickDist[i] > 20 ? n.lastFlickSpeed[i] = n.lastFlickOffset[i] / e : n.lastFlickSpeed[i] = 0,
                            Math.abs(n.lastFlickSpeed[i]) < .1 && (n.lastFlickSpeed[i] = 0),
                            n.slowDownRatio[i] = .95,
                            n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i],
                            n.speedDecelerationRatio[i] = 1
                        },
                        calculateOverBoundsAnimOffset: function(e, t) {
                            n.backAnimStarted[e] || (fe[e] > ne.min[e] ? n.backAnimDestination[e] = ne.min[e] : fe[e] < ne.max[e] && (n.backAnimDestination[e] = ne.max[e]),
                            void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7,
                            n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e],
                            n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0,
                            n.backAnimStarted[e] = !0,
                            nt("bounceZoomPan" + e, fe[e], n.backAnimDestination[e], t || 300, o.easing.sine.out, (function(t) {
                                fe[e] = t,
                                Re()
                            }
                            )))))
                        },
                        calculateAnimOffset: function(e) {
                            n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10),
                            n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]),
                            n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff,
                            fe[e] += n.distanceOffset[e])
                        },
                        panAnimLoop: function() {
                            if (je.zoomPan && (je.zoomPan.raf = Z(n.panAnimLoop),
                            n.now = ke(),
                            n.timeDiff = n.now - n.lastNow,
                            n.lastNow = n.now,
                            n.calculateAnimOffset("x"),
                            n.calculateAnimOffset("y"),
                            Re(),
                            n.calculateOverBoundsAnimOffset("x"),
                            n.calculateOverBoundsAnimOffset("y"),
                            n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05))
                                return fe.x = Math.round(fe.x),
                                fe.y = Math.round(fe.y),
                                Re(),
                                void Qe("zoomPan")
                        }
                    };
                    return n
                }, Bt = function(e) {
                    if (e.calculateSwipeSpeed("y"),
                    ne = a.currItem.bounds,
                    e.backAnimDestination = {},
                    e.backAnimStarted = {},
                    Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05)
                        return e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0,
                        e.calculateOverBoundsAnimOffset("x"),
                        e.calculateOverBoundsAnimOffset("y"),
                        !0;
                    et("zoomPan"),
                    e.lastNow = ke(),
                    e.panAnimLoop()
                }, Gt = function(e, t) {
                    var n, i, r;
                    if (oe || (ht = p),
                    "swipe" === e) {
                        var l = ut.x - ct.x
                          , u = t.lastFlickDist.x < 10;
                        l > ot && (u || t.lastFlickOffset.x > 20) ? i = -1 : l < -ot && (u || t.lastFlickOffset.x < -20) && (i = 1)
                    }
                    i && ((p += i) < 0 ? (p = s.loop ? Qt() - 1 : 0,
                    r = !0) : p >= Qt() && (p = s.loop ? 0 : Qt() - 1,
                    r = !0),
                    r && !s.loop || (ge += i,
                    ye -= i,
                    n = !0));
                    var c, d = ve.x * ye, m = Math.abs(d - vt.x);
                    return n || d > vt.x == t.lastFlickSpeed.x > 0 ? (c = Math.abs(t.lastFlickSpeed.x) > 0 ? m / Math.abs(t.lastFlickSpeed.x) : 333,
                    c = Math.min(c, 400),
                    c = Math.max(c, 250)) : c = 333,
                    ht === p && (n = !1),
                    oe = !0,
                    Ae("mainScrollAnimStart"),
                    nt("mainScroll", vt.x, d, c, o.easing.cubic.out, Fe, (function() {
                        tt(),
                        oe = !1,
                        ht = -1,
                        (n || ht !== p) && a.updateCurrItem(),
                        Ae("mainScrollAnimComplete")
                    }
                    )),
                    n && a.updateCurrItem(!0),
                    n
                }, Xt = function(e) {
                    return 1 / te * e * g
                }, Vt = function() {
                    var e = v
                      , t = Be()
                      , n = Ge();
                    v < t ? e = t : v > n && (e = n);
                    var i, r = 1, l = se;
                    return le && !B && !ue && v < t ? (a.close(),
                    !0) : (le && (i = function(e) {
                        Ee((r - l) * e + l)
                    }
                    ),
                    a.zoomTo(e, 0, 200, o.easing.cubic.out, i),
                    !0)
                };
                De("Gestures", {
                    publicMethods: {
                        initGestures: function() {
                            var e = function(e, t, n, i, o) {
                                M = e + t,
                                S = e + n,
                                A = e + i,
                                k = o ? e + o : ""
                            };
                            (O = N.pointerEvent) && N.touch && (N.touch = !1),
                            O ? navigator.msPointerEnabled ? e("MSPointer", "Down", "Move", "Up", "Cancel") : e("pointer", "down", "move", "up", "cancel") : N.touch ? (e("touch", "start", "move", "end", "cancel"),
                            R = !0) : e("mouse", "down", "move", "up"),
                            h = S + " " + A + " " + k,
                            y = M,
                            O && !R && (R = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1),
                            a.likelyTouchDevice = R,
                            x[M] = Nt,
                            x[S] = Ut,
                            x[A] = Yt,
                            k && (x[k] = x[A]),
                            N.touch && (y += " mousedown",
                            h += " mousemove mouseup",
                            x.mousedown = x[M],
                            x.mousemove = x[S],
                            x.mouseup = x[A]),
                            R || (s.allowPanToNext = !1)
                        }
                    }
                });
                var Kt, qt, $t, jt, Jt, Qt, en = function(t, n, i, r) {
                    var l;
                    Kt && clearTimeout(Kt),
                    jt = !0,
                    $t = !0,
                    t.initialLayout ? (l = t.initialLayout,
                    t.initialLayout = null) : l = s.getThumbBoundsFn && s.getThumbBoundsFn(p);
                    var u, c, m = i ? s.hideAnimationDuration : s.showAnimationDuration, f = function() {
                        Qe("initialZoom"),
                        i ? (a.template.removeAttribute("style"),
                        a.bg.removeAttribute("style")) : (Ee(1),
                        n && (n.style.display = "block"),
                        o.addClass(e, "pswp--animated-in"),
                        Ae("initialZoom" + (i ? "OutEnd" : "InEnd"))),
                        r && r(),
                        jt = !1
                    };
                    if (!m || !l || void 0 === l.x)
                        return Ae("initialZoom" + (i ? "Out" : "In")),
                        v = t.initialZoomLevel,
                        ze(fe, t.initialPosition),
                        Re(),
                        e.style.opacity = i ? 0 : 1,
                        Ee(1),
                        void (m ? setTimeout((function() {
                            f()
                        }
                        ), m) : f());
                    u = d,
                    c = !a.currItem.src || a.currItem.loadError || s.showHideOpacity,
                    t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"),
                    i || (v = l.w / t.w,
                    fe.x = l.x,
                    fe.y = l.y - L,
                    a[c ? "template" : "bg"].style.opacity = .001,
                    Re()),
                    et("initialZoom"),
                    i && !u && o.removeClass(e, "pswp--animated-in"),
                    c && (i ? o[(u ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout((function() {
                        o.addClass(e, "pswp--animate_opacity")
                    }
                    ), 30)),
                    Kt = setTimeout((function() {
                        if (Ae("initialZoom" + (i ? "Out" : "In")),
                        i) {
                            var n = l.w / t.w
                              , a = {
                                x: fe.x,
                                y: fe.y
                            }
                              , r = v
                              , s = se
                              , d = function(t) {
                                1 === t ? (v = n,
                                fe.x = l.x,
                                fe.y = l.y - _) : (v = (n - r) * t + r,
                                fe.x = (l.x - a.x) * t + a.x,
                                fe.y = (l.y - _ - a.y) * t + a.y),
                                Re(),
                                c ? e.style.opacity = 1 - t : Ee(s - t * s)
                            };
                            u ? nt("initialZoom", 0, 1, m, o.easing.cubic.out, d, f) : (d(1),
                            Kt = setTimeout(f, m + 20))
                        } else
                            v = t.initialZoomLevel,
                            ze(fe, t.initialPosition),
                            Re(),
                            Ee(1),
                            c ? e.style.opacity = 1 : Ee(1),
                            Kt = setTimeout(f, m + 20)
                    }
                    ), i ? 25 : 90)
                }, tn = {}, nn = [], on = {
                    index: 0,
                    errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                    forceProgressiveLoading: !1,
                    preload: [1, 1],
                    getNumItemsFn: function() {
                        return qt.length
                    }
                }, an = function() {
                    return {
                        center: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        },
                        min: {
                            x: 0,
                            y: 0
                        }
                    }
                }, rn = function(e, t, n) {
                    var i = e.bounds;
                    i.center.x = Math.round((tn.x - t) / 2),
                    i.center.y = Math.round((tn.y - n) / 2) + e.vGap.top,
                    i.max.x = t > tn.x ? Math.round(tn.x - t) : i.center.x,
                    i.max.y = n > tn.y ? Math.round(tn.y - n) + e.vGap.top : i.center.y,
                    i.min.x = t > tn.x ? 0 : i.center.x,
                    i.min.y = n > tn.y ? e.vGap.top : i.center.y
                }, ln = function(e, t, n) {
                    if (e.src && !e.loadError) {
                        var i = !n;
                        if (i && (e.vGap || (e.vGap = {
                            top: 0,
                            bottom: 0
                        }),
                        Ae("parseVerticalMargin", e)),
                        tn.x = t.x,
                        tn.y = t.y - e.vGap.top - e.vGap.bottom,
                        i) {
                            var o = tn.x / e.w
                              , a = tn.y / e.h;
                            e.fitRatio = o < a ? o : a;
                            var r = s.scaleMode;
                            "orig" === r ? n = 1 : "fit" === r && (n = e.fitRatio),
                            n > 1 && (n = 1),
                            e.initialZoomLevel = n,
                            e.bounds || (e.bounds = an())
                        }
                        if (!n)
                            return;
                        return rn(e, e.w * n, e.h * n),
                        i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center),
                        e.bounds
                    }
                    return e.w = e.h = 0,
                    e.initialZoomLevel = e.fitRatio = 1,
                    e.bounds = an(),
                    e.initialPosition = e.bounds.center,
                    e.bounds
                }, sn = function(e, t, n, i, o, r) {
                    t.loadError || i && (t.imageAppended = !0,
                    dn(t, i, t === a.currItem && Ce),
                    n.appendChild(i),
                    r && setTimeout((function() {
                        t && t.loaded && t.placeholder && (t.placeholder.style.display = "none",
                        t.placeholder = null)
                    }
                    ), 500))
                }, un = function(e) {
                    e.loading = !0,
                    e.loaded = !1;
                    var t = e.img = o.createEl("pswp__img", "img")
                      , n = function() {
                        e.loading = !1,
                        e.loaded = !0,
                        e.loadComplete ? e.loadComplete(e) : e.img = null,
                        t.onload = t.onerror = null,
                        t = null
                    };
                    return t.onload = n,
                    t.onerror = function() {
                        e.loadError = !0,
                        n()
                    }
                    ,
                    t.src = e.src,
                    t
                }, cn = function(e, t) {
                    if (e.src && e.loadError && e.container)
                        return t && (e.container.innerHTML = ""),
                        e.container.innerHTML = s.errorMsg.replace("%url%", e.src),
                        !0
                }, dn = function(e, t, n) {
                    if (e.src) {
                        t || (t = e.container.lastChild);
                        var i = n ? e.w : Math.round(e.w * e.fitRatio)
                          , o = n ? e.h : Math.round(e.h * e.fitRatio);
                        e.placeholder && !e.loaded && (e.placeholder.style.width = i + "px",
                        e.placeholder.style.height = o + "px"),
                        t.style.width = i + "px",
                        t.style.height = o + "px"
                    }
                }, pn = function() {
                    if (nn.length) {
                        for (var e, t = 0; t < nn.length; t++)
                            (e = nn[t]).holder.index === e.index && sn(e.index, e.item, e.baseDiv, e.img, !1, e.clearPlaceholder);
                        nn = []
                    }
                };
                De("Controller", {
                    publicMethods: {
                        lazyLoadItem: function(e) {
                            e = Te(e);
                            var t = Jt(e);
                            t && (!t.loaded && !t.loading || C) && (Ae("gettingData", e, t),
                            t.src && un(t))
                        },
                        initController: function() {
                            o.extend(s, on, !0),
                            a.items = qt = n,
                            Jt = a.getItemAt,
                            Qt = s.getNumItemsFn,
                            s.loop,
                            Qt() < 3 && (s.loop = !1),
                            Se("beforeChange", (function(e) {
                                var t, n = s.preload, i = null === e || e >= 0, o = Math.min(n[0], Qt()), r = Math.min(n[1], Qt());
                                for (t = 1; t <= (i ? r : o); t++)
                                    a.lazyLoadItem(p + t);
                                for (t = 1; t <= (i ? o : r); t++)
                                    a.lazyLoadItem(p - t)
                            }
                            )),
                            Se("initialLayout", (function() {
                                a.currItem.initialLayout = s.getThumbBoundsFn && s.getThumbBoundsFn(p)
                            }
                            )),
                            Se("mainScrollAnimComplete", pn),
                            Se("initialZoomInEnd", pn),
                            Se("destroy", (function() {
                                for (var e, t = 0; t < qt.length; t++)
                                    (e = qt[t]).container && (e.container = null),
                                    e.placeholder && (e.placeholder = null),
                                    e.img && (e.img = null),
                                    e.preloader && (e.preloader = null),
                                    e.loadError && (e.loaded = e.loadError = !1);
                                nn = null
                            }
                            ))
                        },
                        getItemAt: function(e) {
                            return e >= 0 && void 0 !== qt[e] && qt[e]
                        },
                        allowProgressiveImg: function() {
                            return s.forceProgressiveLoading || !R || s.mouseUsed || screen.width > 1200
                        },
                        setContent: function(e, t) {
                            s.loop && (t = Te(t));
                            var n = a.getItemAt(e.index);
                            n && (n.container = null);
                            var i, r = a.getItemAt(t);
                            if (r) {
                                Ae("gettingData", t, r),
                                e.index = t,
                                e.item = r;
                                var l = r.container = o.createEl("pswp__zoom-wrap");
                                if (!r.src && r.html && (r.html.tagName ? l.appendChild(r.html) : l.innerHTML = r.html),
                                cn(r),
                                ln(r, he),
                                !r.src || r.loadError || r.loaded)
                                    r.src && !r.loadError && ((i = o.createEl("pswp__img", "img")).style.opacity = 1,
                                    i.src = r.src,
                                    dn(r, i),
                                    sn(t, r, l, i, !0));
                                else {
                                    if (r.loadComplete = function(n) {
                                        if (u) {
                                            if (e && e.index === t) {
                                                if (cn(n, !0))
                                                    return n.loadComplete = n.img = null,
                                                    ln(n, he),
                                                    Ze(n),
                                                    void (e.index === p && a.updateCurrZoomItem());
                                                n.imageAppended ? !jt && n.placeholder && (n.placeholder.style.display = "none",
                                                n.placeholder = null) : N.transform && (oe || jt) ? nn.push({
                                                    item: n,
                                                    baseDiv: l,
                                                    img: n.img,
                                                    index: t,
                                                    holder: e,
                                                    clearPlaceholder: !0
                                                }) : sn(t, n, l, n.img, oe || jt, !0)
                                            }
                                            n.loadComplete = null,
                                            n.img = null,
                                            Ae("imageLoadComplete", t, n)
                                        }
                                    }
                                    ,
                                    o.features.transform) {
                                        var c = "pswp__img pswp__img--placeholder";
                                        c += r.msrc ? "" : " pswp__img--placeholder--blank";
                                        var d = o.createEl(c, r.msrc ? "img" : "");
                                        r.msrc && (d.src = r.msrc),
                                        dn(r, d),
                                        l.appendChild(d),
                                        r.placeholder = d
                                    }
                                    r.loading || un(r),
                                    a.allowProgressiveImg() && (!$t && N.transform ? nn.push({
                                        item: r,
                                        baseDiv: l,
                                        img: r.img,
                                        index: t,
                                        holder: e
                                    }) : sn(t, r, l, r.img, !0, !0))
                                }
                                $t || t !== p ? Ze(r) : (ie = l.style,
                                en(r, i || r.img)),
                                e.el.innerHTML = "",
                                e.el.appendChild(l)
                            } else
                                e.el.innerHTML = ""
                        },
                        cleanSlide: function(e) {
                            e.img && (e.img.onload = e.img.onerror = null),
                            e.loaded = e.loading = e.img = e.imageAppended = !1
                        }
                    }
                });
                var mn, fn, hn = {}, yn = function(e, t, n) {
                    var i = document.createEvent("CustomEvent")
                      , o = {
                        origEvent: e,
                        target: e.target,
                        releasePoint: t,
                        pointerType: n || "touch"
                    };
                    i.initCustomEvent("pswpTap", !0, !0, o),
                    e.target.dispatchEvent(i)
                };
                De("Tap", {
                    publicMethods: {
                        initTap: function() {
                            Se("firstTouchStart", a.onTapStart),
                            Se("touchRelease", a.onTapRelease),
                            Se("destroy", (function() {
                                hn = {},
                                mn = null
                            }
                            ))
                        },
                        onTapStart: function(e) {
                            e.length > 1 && (clearTimeout(mn),
                            mn = null)
                        },
                        onTapRelease: function(e, t) {
                            if (t && !$ && !K && !Je) {
                                var n = t;
                                if (mn && (clearTimeout(mn),
                                mn = null,
                                It(n, hn)))
                                    return void Ae("doubleTap", n);
                                if ("mouse" === t.type)
                                    return void yn(e, t, "mouse");
                                if ("BUTTON" === e.target.tagName.toUpperCase() || o.hasClass(e.target, "pswp__single-tap"))
                                    return void yn(e, t);
                                ze(hn, n),
                                mn = setTimeout((function() {
                                    yn(e, t),
                                    mn = null
                                }
                                ), 300)
                            }
                        }
                    }
                }),
                De("DesktopZoom", {
                    publicMethods: {
                        initDesktopZoom: function() {
                            z || (R ? Se("mouseUsed", (function() {
                                a.setupDesktopZoom()
                            }
                            )) : a.setupDesktopZoom(!0))
                        },
                        setupDesktopZoom: function(t) {
                            fn = {};
                            var n = "wheel mousewheel DOMMouseScroll";
                            Se("bindEvents", (function() {
                                o.bind(e, n, a.handleMouseWheel)
                            }
                            )),
                            Se("unbindEvents", (function() {
                                fn && o.unbind(e, n, a.handleMouseWheel)
                            }
                            )),
                            a.mouseZoomedIn = !1;
                            var i, r = function() {
                                a.mouseZoomedIn && (o.removeClass(e, "pswp--zoomed-in"),
                                a.mouseZoomedIn = !1),
                                v < 1 ? o.addClass(e, "pswp--zoom-allowed") : o.removeClass(e, "pswp--zoom-allowed"),
                                l()
                            }, l = function() {
                                i && (o.removeClass(e, "pswp--dragging"),
                                i = !1)
                            };
                            Se("resize", r),
                            Se("afterChange", r),
                            Se("pointerDown", (function() {
                                a.mouseZoomedIn && (i = !0,
                                o.addClass(e, "pswp--dragging"))
                            }
                            )),
                            Se("pointerUp", l),
                            t || r()
                        },
                        handleMouseWheel: function(e) {
                            if (v <= a.currItem.fitRatio)
                                return s.modal && (!s.closeOnScroll || Je || V ? e.preventDefault() : E && Math.abs(e.deltaY) > 2 && (d = !0,
                                a.close())),
                                !0;
                            if (e.stopPropagation(),
                            fn.x = 0,
                            "deltaX"in e)
                                1 === e.deltaMode ? (fn.x = 18 * e.deltaX,
                                fn.y = 18 * e.deltaY) : (fn.x = e.deltaX,
                                fn.y = e.deltaY);
                            else if ("wheelDelta"in e)
                                e.wheelDeltaX && (fn.x = -.16 * e.wheelDeltaX),
                                e.wheelDeltaY ? fn.y = -.16 * e.wheelDeltaY : fn.y = -.16 * e.wheelDelta;
                            else {
                                if (!("detail"in e))
                                    return;
                                fn.y = e.detail
                            }
                            We(v, !0);
                            var t = fe.x - fn.x
                              , n = fe.y - fn.y;
                            (s.modal || t <= ne.min.x && t >= ne.max.x && n <= ne.min.y && n >= ne.max.y) && e.preventDefault(),
                            a.panTo(t, n)
                        },
                        toggleDesktopZoom: function(t) {
                            t = t || {
                                x: he.x / 2 + xe.x,
                                y: he.y / 2 + xe.y
                            };
                            var n = s.getDoubleTapZoom(!0, a.currItem)
                              , i = v === n;
                            a.mouseZoomedIn = !i,
                            a.zoomTo(i ? a.currItem.initialZoomLevel : n, t, 333),
                            o[(i ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                        }
                    }
                });
                var xn, vn, gn, wn, bn, In, Cn, Dn, Tn, Mn, Sn, An, kn = {
                    history: !0,
                    galleryUID: 1
                }, En = function() {
                    return Sn.hash.substring(1)
                }, On = function() {
                    xn && clearTimeout(xn),
                    gn && clearTimeout(gn)
                }, Rn = function() {
                    var e = En()
                      , t = {};
                    if (e.length < 5)
                        return t;
                    var n, i = e.split("&");
                    for (n = 0; n < i.length; n++)
                        if (i[n]) {
                            var o = i[n].split("=");
                            o.length < 2 || (t[o[0]] = o[1])
                        }
                    if (s.galleryPIDs) {
                        var a = t.pid;
                        for (t.pid = 0,
                        n = 0; n < qt.length; n++)
                            if (qt[n].pid === a) {
                                t.pid = n;
                                break
                            }
                    } else
                        t.pid = parseInt(t.pid, 10) - 1;
                    return t.pid < 0 && (t.pid = 0),
                    t
                }, Zn = function() {
                    if (gn && clearTimeout(gn),
                    Je || V)
                        gn = setTimeout(Zn, 500);
                    else {
                        wn ? clearTimeout(vn) : wn = !0;
                        var e = p + 1
                          , t = Jt(p);
                        t.hasOwnProperty("pid") && (e = t.pid);
                        var n = Cn + "&gid=" + s.galleryUID + "&pid=" + e;
                        Dn || -1 === Sn.hash.indexOf(n) && (Mn = !0);
                        var i = Sn.href.split("#")[0] + "#" + n;
                        An ? "#" + n !== window.location.hash && history[Dn ? "replaceState" : "pushState"]("", document.title, i) : Dn ? Sn.replace(i) : Sn.hash = n,
                        Dn = !0,
                        vn = setTimeout((function() {
                            wn = !1
                        }
                        ), 60)
                    }
                };
                De("History", {
                    publicMethods: {
                        initHistory: function() {
                            if (o.extend(s, kn, !0),
                            s.history) {
                                Sn = window.location,
                                Mn = !1,
                                Tn = !1,
                                Dn = !1,
                                Cn = En(),
                                An = "pushState"in history,
                                Cn.indexOf("gid=") > -1 && (Cn = (Cn = Cn.split("&gid=")[0]).split("?gid=")[0]),
                                Se("afterChange", a.updateURL),
                                Se("unbindEvents", (function() {
                                    o.unbind(window, "hashchange", a.onHashChange)
                                }
                                ));
                                var e = function() {
                                    In = !0,
                                    Tn || (Mn ? history.back() : Cn ? Sn.hash = Cn : An ? history.pushState("", document.title, Sn.pathname + Sn.search) : Sn.hash = ""),
                                    On()
                                };
                                Se("unbindEvents", (function() {
                                    d && e()
                                }
                                )),
                                Se("destroy", (function() {
                                    In || e()
                                }
                                )),
                                Se("firstUpdate", (function() {
                                    p = Rn().pid
                                }
                                ));
                                var t = Cn.indexOf("pid=");
                                t > -1 && "&" === (Cn = Cn.substring(0, t)).slice(-1) && (Cn = Cn.slice(0, -1)),
                                setTimeout((function() {
                                    u && o.bind(window, "hashchange", a.onHashChange)
                                }
                                ), 40)
                            }
                        },
                        onHashChange: function() {
                            if (En() === Cn)
                                return Tn = !0,
                                void a.close();
                            wn || (bn = !0,
                            a.goTo(Rn().pid),
                            bn = !1)
                        },
                        updateURL: function() {
                            On(),
                            bn || (Dn ? xn = setTimeout(Zn, 800) : Zn())
                        }
                    }
                }),
                o.extend(a, it)
            };
            return e
        }
        ,
        void 0 === (o = "function" == typeof i ? i.call(t, n, t, e) : i) || (e.exports = o)
    }
}]);
