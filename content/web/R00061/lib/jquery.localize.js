(function() {
    var n, t;
    n = jQuery,
    t = function(n) {
        return (n = n.replace(/_/, "-").toLowerCase()).length > 3 && (n = n.substring(0, 3) + n.substring(3).toUpperCase()),
        n
    }
    ,
    n.defaultLanguage = t(navigator.language || navigator.userLanguage),
    n.localize = function(a, e) {
        var l, r, u, i, o, c, s, f, g, h, p, b, d, v, x, j, k;
        return null == e && (e = {}),
        k = this,
        u = {},
        r = e.fileExtension || "json",
        c = function(n, t, a) {
            var l;
            switch (null == a && (a = 1),
            a) {
            case 1:
                return u = {},
                e.loadBase ? i(l = n + "." + r, n, t, a) : c(n, t, 2);
            case 2:
                if (t.length >= 2)
                    return l = n + "-" + t.substring(0, 2) + "." + r,
                    i(l, n, t, a);
                break;
            case 3:
                if (t.length >= 5)
                    return l = n + "-" + t.substring(0, 5) + "." + r,
                    i(l, n, t, a)
            }
        }
        ,
        i = function(t, a, l, r) {
            var i, o;
            return null != e.pathPrefix && (t = e.pathPrefix + "/" + t),
            o = function(t) {
                return n.extend(u, t),
                b(u),
                c(a, l, r + 1)
            }
            ,
            i = {
                url: t,
                dataType: "json",
                async: !1,
                timeout: null != e.timeout ? e.timeout : 500,
                success: o
            },
            "file:" === window.location.protocol && (i.error = function(t) {
                return o(n.parseJSON(t.responseText))
            }
            ),
            n.ajax(i).fail((function() {
                null != e.failCallback && e.failCallback()
            }
            ))
        }
        ,
        b = function(n) {
            return null != e.callback ? e.callback(n, l) : l(n)
        }
        ,
        l = function(t) {
            return n.localize.data[a] = t,
            k.each((function() {
                var a, e, l;
                return (e = (a = n(this)).data("localize")) || (e = a.attr("rel").match(/localize\[(.*?)\]/)[1]),
                l = j(e, t),
                s(a, e, l)
            }
            ))
        }
        ,
        s = function(t, a, e) {
            if (null != e && (t.show(),
            t.is("input") ? h(t, a, e) : t.is("img") ? g(t, a, e) : t.is("optgroup") ? p(t, a, e) : n.isPlainObject(e) || t.html(e),
            n.isPlainObject(e)))
                return f(t, e)
        }
        ,
        h = function(n, t, a) {
            return n.is("[placeholder]") ? n.attr("placeholder", a) : n.val(a)
        }
        ,
        f = function(n, t) {
            return v(n, "title", t),
            x(n, "text", t)
        }
        ,
        p = function(n, t, a) {
            return n.attr("label", a)
        }
        ,
        g = function(n, t, a) {
            return v(n, "alt", a),
            v(n, "src", a)
        }
        ,
        j = function(n, t) {
            var a, e, l, r;
            for (e = t,
            l = 0,
            r = (a = n.split(/\./)).length; l < r; l++)
                n = a[l],
                e = null != e ? e[n] : null;
            return e
        }
        ,
        v = function(n, t, a) {
            if (null != (a = j(t, a)))
                return n.attr(t, a)
        }
        ,
        x = function(n, t, a) {
            if (null != (a = j(t, a)))
                return n.text(a)
        }
        ,
        d = function(n) {
            var t;
            return "string" == typeof n ? "^" + n + "$" : null != n.length ? function() {
                var a, e, l;
                for (l = [],
                a = 0,
                e = n.length; a < e; a++)
                    t = n[a],
                    l.push(d(t));
                return l
            }().join("|") : n
        }
        ,
        o = t(e.language ? e.language : n.defaultLanguage),
        e.skipLanguage && o.match(d(e.skipLanguage)) || c(a, o, 1),
        k
    }
    ,
    n.fn.localize = n.localize,
    n.localize.data = {}
}
).call(this);
