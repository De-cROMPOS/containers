(self.webpackChunkdo = self.webpackChunkdo || []).push([[887], {
    2653: e => {
        e.exports = function e(t) {
            return Object.freeze(t),
            Object.getOwnPropertyNames(t).forEach((function(o) {
                !t.hasOwnProperty(o) || null === t[o] || "object" != typeof t[o] && "function" != typeof t[o] || Object.isFrozen(t[o]) || e(t[o])
            }
            )),
            t
        }
    }
    ,
    2434: (e, t, o) => {
        e.exports = function() {
            return new Promise((function(e) {
                o.e(4692).then(function(t) {
                    e(o(4692))
                }
                .bind(null, o)).catch(o.oe)
            }
            ))
        }
    }
    ,
    1906: (e, t, o) => {
        "use strict";
        o.r(t),
        o.d(t, {
            default: () => a
        });
        var i = function(e, t, o, i) {
            return new (o || (o = Promise))((function(n, a) {
                function r(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        a(e)
                    }
                }
                function s(e) {
                    try {
                        d(i.throw(e))
                    } catch (e) {
                        a(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? n(e.value) : (t = e.value,
                    t instanceof o ? t : new o((function(e) {
                        e(t)
                    }
                    ))).then(r, s)
                }
                d((i = i.apply(e, t || [])).next())
            }
            ))
        }
          , n = function(e, t) {
            var o, i, n, a, r = {
                label: 0,
                sent: function() {
                    if (1 & n[0])
                        throw n[1];
                    return n[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }
            ),
            a;
            function s(s) {
                return function(d) {
                    return function(s) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; a && (a = 0,
                        s[0] && (r = 0)),
                        r; )
                            try {
                                if (o = 1,
                                i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i),
                                0) : i.next) && !(n = n.call(i, s[1])).done)
                                    return n;
                                switch (i = 0,
                                n && (s = [2 & s[0], n.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    n = s;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    i = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (!(n = r.trys,
                                    (n = n.length > 0 && n[n.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                        r.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && r.label < n[1]) {
                                        r.label = n[1],
                                        n = s;
                                        break
                                    }
                                    if (n && r.label < n[2]) {
                                        r.label = n[2],
                                        r.ops.push(s);
                                        break
                                    }
                                    n[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                s = t.call(e, r)
                            } catch (e) {
                                s = [6, e],
                                i = 0
                            } finally {
                                o = n = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, d])
                }
            }
        };
        function a(e) {
            return i(this, void 0, void 0, (function() {
                var t, i, a, r, s, d;
                return n(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, o(2434)()];
                    case 1:
                        return t = n.sent(),
                        [4, o(1207)];
                    case 2:
                        return i = n.sent(),
                        [4, o(6696)];
                    case 3:
                        return a = n.sent(),
                        r = a.default("data-do-popup", e),
                        i.default(t),
                        s = r(),
                        Object.keys(s).length && (d = parseInt(s.delay, 10),
                        t(e).mosaicPopup(),
                        "auto" === s.autoShow && (d > 0 ? t(e).mosaicPopup("delayOpen", d) : t(e).mosaicPopup("open"))),
                        [2]
                    }
                }
                ))
            }
            ))
        }
    }
    ,
    8610: (e, t, o) => {
        "use strict";
        o.d(t, {
            $U: () => i,
            Ay: () => d,
            QF: () => a,
            Yb: () => s
        });
        var i, n = o(2653), a = "screen", r = o.n(n)()(["(min-width: 1920px)", "(min-width: 1440px)", "(min-width: 1280px)", a, "(max-width: 991px)", "(max-width: 767px)", "(max-width: 479px)"]), s = r.indexOf(a);
        !function(e) {
            e.BIG_SCREEN3 = 0,
            e.BIG_SCREEN2 = 1,
            e.BIG_SCREEN1 = 2,
            e.SCREEN = 3,
            e.TABLET_LANDSCAPE = 4,
            e.TABLET_PORTRAIT = 5,
            e.MOBILE = 6
        }(i || (i = {}));
        const d = r
    }
    ,
    1207: (e, t, o) => {
        "use strict";
        function i(e) {
            let t = {
                init: function() {
                    let t = this
                      , o = this.find(".mosaic-popup__inner-bg");
                    this.find(".mosaic-popup__close").on("click", (function() {
                        t.mosaicPopup("close")
                    }
                    )),
                    o.on("mousedown", (function(o) {
                        e(o.target).hasClass("mosaic-popup__inner-bg") && t.mosaicPopup("close")
                    }
                    )),
                    o.on("transitionend", (function(t) {
                        e(t.target).hasClass("mosaic-popup__inner-bg") && 0 === parseFloat(e(t.target).css("opacity")) && e(t.target).css("display", "none")
                    }
                    )),
                    e(document).on("keyup", (function(e) {
                        "Escape" === e.originalEvent.code && t.mosaicPopup("close")
                    }
                    ))
                },
                open: function(e="", t=!1) {
                    let o = this.find(".mosaic-popup__inner-bg")
                      , i = this.find(".mosaic-form");
                    if (i) {
                        let e = i.find("form")
                          , t = e.attr("data-s3-anketa-id");
                        e.attr("data-success") && window.mosaicS3Form && window.mosaicS3Form[t] && window.mosaicS3Form[t].resetForm(i)
                    }
                    this.mosaicPopup("setDefaultValues", e, t),
                    o.css({
                        display: "flex"
                    }),
                    setTimeout((function() {
                        o.css({
                            opacity: "1"
                        })
                    }
                    ), 40)
                },
                delayOpen: function(e) {
                    setTimeout(t.open.bind(this), e)
                },
                close: function() {
                    let e = this.find(".mosaic-popup__inner-bg");
                    e.css({
                        opacity: "0"
                    }),
                    setTimeout((function() {
                        e.css({
                            display: "none"
                        })
                    }
                    ), 40)
                },
                setDefaultValues: function(t, o) {
                    if (t && !1 !== o) {
                        const i = this.find("[data-do-input], [data-do-input_hidden]");
                        i.length && i.each((function() {
                            const i = e(this)
                              , n = i.data("type-field");
                            let a = "data-do-input";
                            "input_hidden" === n && (a = "data-do-input_hidden");
                            const r = JSON.parse(i.attr(a)).screen.value_from;
                            if (r && r.hasOwnProperty(t)) {
                                let e = 'input[type="text"]';
                                "input_hidden" === n && (e = 'input[type="hidden"]');
                                const a = r[t]
                                  , s = a.id
                                  , d = a.type
                                  , c = s + "_" + o
                                  , l = document.getElementById(c);
                                if (l) {
                                    const t = i.find(e);
                                    let o = "";
                                    "text" === d && l.innerText && (o = l.innerText),
                                    "link" === d && l.getAttribute("href") && (o = l.getAttribute("href")),
                                    "image" === d && l.getAttribute("src") && (o = location.origin + l.getAttribute("src")),
                                    t.val(o)
                                }
                            }
                        }
                        ))
                    }
                }
            };
            e.fn.mosaicPopup = function(o) {
                return t[o] ? t[o].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof o && o ? void e.error("Метод с именем " + o + " не существует для jQuery.mosaicPopup") : t.init.apply(this, arguments)
            }
        }
        o.r(t),
        o.d(t, {
            default: () => i
        })
    }
    ,
    6696: (e, t, o) => {
        "use strict";
        o.r(t),
        o.d(t, {
            default: () => r
        });
        var i = o(8610)
          , n = {
            "data-do-accordion": ["isOpened", "closeOther", "childrenAsync"],
            "data-do-auth_popup_btn": ["showUserName", "showSettings", "showOrders", "showLogout", "popupAfterAuthorized"],
            "data-do-form_auth": ["isNativeStyle", "isDrop", "otherHeaderAfterAuth", "showUserName", "isToggle", "isHeader", "isRemember", "isRegistration", "isForgot", "showSocial"],
            "data-do-blocklist": ["slider", "loop", "returnToFirst", "swipe", "lastSlideArrow", "center", "controlsGroup", "autoplay", "childrenAsync", "isMarquee", "hoverStop"],
            "data-do-tt_blocklist": ["slider", "loop", "returnToFirst", "swipe", "lastSlideArrow", "center", "controlsGroup", "autoplay", "childrenAsync", "isMarquee", "hoverStop"],
            "data-do-checkbox": ["required"],
            "data-do-checkbox_group": ["required"],
            "data-do-content": ["image", "gallery", "text", "headers"],
            "data-do-countdown": ["isEnabledDays", "isEnabledHours", "isEnabledMinutes", "isEnabledSeconds"],
            "data-do-form": ["nativeStyle", "showTitleAfterSend", "disabledNativeStyleSelect"],
            "data-do-image": ["scrollZoom", "zoomOnClick"],
            "data-do-input": ["required"],
            "data-do-input_date": ["required"],
            "data-do-input_date_interval": ["required"],
            "data-do-input_email": ["required"],
            "data-do-input_phone": ["required"],
            "data-do-link_universal": ["blank", "sidepanel"],
            "data-do-link_universal_block": ["blank", "sidepanel"],
            "data-do-link_universal_button": ["blank", "sidepanel"],
            "data-do-popup": ["wmshowpopup"],
            "data-do-radio_group": ["required"],
            "data-do-marquee": ["circular", "hoverStop", "invertHover"],
            "data-do-menu_column": ["dropdown", "more", "cancelForward", "firstClick"],
            "data-do-menu_horizontal": ["cancelForward", "more", "firstClickOpen"],
            "data-do-menu_vertical": ["cancelForward", "firstClickOpen"],
            "data-do-s3_article": ["isHeadBlock", "isAllLink", "isImage", "isDate", "isAnnounce", "isLinkMore", "isDay", "isMonth", "isYear"],
            "data-do-s3_article2": ["isHeadBlock", "isAllLink", "isImage", "isDate", "isAnnounce", "isLinkMore", "isDay", "isYear"],
            "data-do-s3_board": ["isDate", "isDay", "isMonth", "isYear"],
            "data-do-s3_news_constructor": ["isHeadNews", "isAllNews", "isImage", "isDate", "isAnnounce", "isLinkMore", "isDay", "isYear"],
            "data-do-s3_unified_news_constructor": ["isHeadBlock", "isAllLink", "isImage", "isDate", "isAnnouncement", "isLinkMore", "isDay", "isYear", "isTime", "isMonthFirst", "isDelimiterDayMonth", "isDelimiterMonthYear", "isDelimiterYearTime", "isCustomDateFormat", "isTags", "isDelimiterTag"],
            "data-do-s3_vote_constructor": ["isResults", "isResultsInfo", "isNativeStyle", "isHideTextResult", "isOtherAnswer"],
            "data-do-section": ["scroll", "smooth"],
            "data-do-select": ["required"],
            "data-do-select_multiple": ["required"],
            "data-do-slider": ["loop", "returnToFirst", "lastSlideArrow", "controlsGroup", "swipe", "autoplay", "childrenAsync", "previews", "thumbs", "thumbsSlider", "independentScrolling", "thumbsCenterMode"],
            "data-do-spoiler": ["isOpened"],
            "data-do-svg_image": ["stretch"],
            "data-do-tabs": ["childrenAsync"],
            "data-do-textarea": ["required"],
            "data-do-upload_file": ["required"],
            "data-do-video": ["viewportAutoPlay"],
            "data-do-video2": ["viewportAutoPlay"],
            "data-do-shop2_cart": ["products", "amountBtn"],
            "data-do-shop2_search": ["nativeStyles", "price", "name", "article", "text", "folders", "vendors", "flags", "perpage"],
            "data-do-shop2_folders": ["cancelForward", "firstClickOpen", "icon", "more", "dropdown"],
            "data-do-shop2_vendors": ["controlsGroup", "loop", "center", "lastSlideArrow", "swipe", "autoplay", "marqueeHoverStop"],
            "data-do-shop2_products_list": ["nativeStyles", "flags", "price", "anonce", "vendor", "rating", "amount", "actions", "buttons", "article", "options", "compare", "favorite", "controlsGroup", "loop", "slidesToScroll", "center", "lastSlideArrow", "draggable", "autoplay", "pauseOnHover"]
        };
        const a = function(e, t) {
            if (e in n) {
                var o = n[e]
                  , i = function(e) {
                    for (var t in e)
                        if (t in e) {
                            var n = e[t];
                            o.includes(t) && "boolean" != typeof n ? e[t] = "0" !== n && Boolean(n) : "string" != typeof n || Number.isNaN(+n) || (e[t] = Number(n)),
                            "object" == typeof n && i(n)
                        }
                };
                i(t)
            }
        };
        function r(e, t) {
            let o = {};
            try {
                o = JSON.parse(t.getAttribute(e) || "")
            } catch (o) {
                return void console.warn(`Error media: ${e} - ${t}`)
            }
            const n = i.Ay.slice(0, 3)
              , r = i.Ay.slice(4).reverse();
            return function(t) {
                const s = i.Ay[t] || n.find((e => window.matchMedia(e).matches)) || r.find((e => window.matchMedia(e).matches)) || i.QF;
                let d = {};
                const c = i.Ay.indexOf(s);
                let l = c > i.Yb ? i.Ay.slice(i.Yb) : i.Ay.slice(c, i.Yb + 1).reverse();
                for (let e = 0; e < l.length; e++) {
                    const t = l[e];
                    if (Object.assign(d, o[t]),
                    t === s)
                        break
                }
                return a(e, d),
                d
            }
        }
    }
}]);
