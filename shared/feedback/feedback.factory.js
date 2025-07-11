!function(t) {
    function n(e) {
        if (o[e])
            return o[e].exports;
        var r = o[e] = {
            exports: {},
            id: e,
            loaded: !1
        };
        return t[e].call(r.exports, r, r.exports, n),
        r.loaded = !0,
        r.exports
    }
    var o = {};
    return n.m = t,
    n.c = o,
    n.p = "/shared/feedback/",
    n(0)
}({
    0: function(t, n, o) {
        t.exports = o(55)
    },
    55: function(t, n, o) {
        "use strict";
        var e = window.FeedbackFactory = t.exports = {
            version: "2.7.9",
            options: {
                sources: ".",
                url: "feedback.php",
                extraKey: "altKey",
                key: 66
            },
            data: {},
            scripts: [],
            html2canvasOptions: {
                letterRendering: !0
            },
            setOption: function(t, n) {
                return this.options.hasOwnProperty(t) ? e.options[t] = n : console.error('Опция "' + t + '" не поддерживается'),
                e
            },
            setOptions: function(t) {
                for (var n in t)
                    t.hasOwnProperty(n) && this.setOption(n, t[n]);
                return e
            },
            setData: function(t, n) {
                return e.data[t] = n,
                e
            },
            addScript: function(t) {
                return e.scripts.push(t),
                e
            },
            init: function() {
                var t = this;
                addEventListener("keydown", function(n) {
                    n[t.options.extraKey] && n.keyCode == t.options.key && e.run()
                })
            },
            run: function() {
                function t() {
                    r--,
                    0 === r && o()
                }
                function n(t, n) {
                    r++;
                    var o = document.createElement("script");
                    o.onload = n,
                    o.onerror = n,
                    o.async = !0,
                    o.src = t,
                    (document.head || document.body).appendChild(o)
                }
                function o() {
                    try {
                        Feedback.init({
                            options: e.options,
                            html2canvasOptions: e.html2canvasOptions,
                            data: e.data
                        })
                    } catch (t) {
                        console.error(t)
                    }
                }
                if (window.Feedback)
                    return void o();
                var r = 0;
                n(e.options.sources + "/feedback.js?v" + e.version, t),
                e.scripts.forEach(function(o) {
                    n(o, t)
                })
            }
        };
        e.init()
    }
});
//# sourceMappingURL=feedback.factory.js.map
