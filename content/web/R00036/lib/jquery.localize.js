(function() {
    var a, b;
    a = jQuery;
    b = function normaliseLang(a) {
        a = a.replace(/_/, "-").toLowerCase();
        if (3 < a.length) {
            a = a.substring(0, 3) + a.substring(3).toUpperCase()
        }
        return a
    }
    ;
    a.defaultLanguage = b(navigator.language || navigator.userLanguage);
    a.localize = function(c, d) {
        var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u;
        if (null == d) {
            d = {}
        }
        u = this;
        g = {};
        f = d.fileExtension || "";
        j = function loadLanguage(a, b, c) {
            var e;
            if (null == c) {
                c = 1
            }
            switch (c) {
            case 1:
                g = {};
                if (d.loadBase) {
                    e = a + ("." + f);
                    return h(e, a, b, c)
                } else {
                    return j(a, b, 2)
                }
                break;
            case 2:
                if (2 <= b.length) {
                    e = "/translate.php?d=" + a + "&l=" + b.substring(0, 2);
                    return h(e, a, b, c)
                }
                break;
            case 3:
                if (5 <= b.length) {
                    e = "/translate.php?d=" + a + "&l=" + b.substring(0, 5);
                    return h(e, a, b, c)
                }
            }
        }
        ;
        h = function jsonCall(b, c, e, f) {
            var h, i;
            if (null != d.pathPrefix) {
                b = "" + d.pathPrefix  + b				  
            }
            i = function successFunc(b) {
                a.extend(g, b);
                p(g);
                return j(c, e, f + 1)
            }
            ;
            h = {
                url: b,
                dataType: "json",
                async: !1,
                timeout: null != d.timeout ? d.timeout : 500,
                success: i
            };
            if ("file:" === window.location.protocol) {
                h.error = function(b) {
                    return i(a.parseJSON(b.responseText))
                }
            }
			  
            return a.ajax(h).fail(function() {
                if (null != d.failCallback)
                    d.failCallback()
            })
        }
        ;
        p = function notifyDelegateLanguageLoaded(a) {
            if (null != d.callback) {
                return d.callback(a, e)
            } else {
                return e(a)
            }
        }
        ;
        e = function defaultCallback(b) {
            a.localize.data[c] = b;
            return u.each(function() {
                var c, d, e;
                c = a(this);
                d = c.data("localize");
                d || (d = c.attr("rel").match(/localize\[(.*?)\]/)[1]);
                e = t(d, b);
                return k(c, d, e)
            })
        }
        ;
        k = function localizeElement(b, c, d) {
            if (null != d) {
                b.show();
                if (b.is("input")) {
                    n(b, c, d)
                } else if (b.is("img")) {
                    m(b, c, d)
                } else if (b.is("optgroup")) {
                    o(b, c, d)
                } else if (!a.isPlainObject(d)) {
                    b.html(d)
                }
                if (a.isPlainObject(d)) {
                    return l(b, d)
                }
            }
        }
        ;
        n = function localizeInputElement(a, b, c) {
            if (a.is("[placeholder]")) {
                return a.attr("placeholder", c)
            } else {
                return a.val(c)
            }
        }
        ;
        l = function localizeForSpecialKeys(a, b) {
            r(a, "title", b);
            return s(a, "text", b)
        }
        ;
        o = function localizeOptgroupElement(a, b, c) {
            return a.attr("label", c)
        }
        ;
        m = function localizeImageElement(a, b, c) {
            r(a, "alt", c);
            return r(a, "src", c)
        }
        ;
        t = function valueForKey(a, b) {
            var c, d, e, f;
            c = a.split(/\./);
            d = b;
            for (e = 0,
            f = c.length; e < f; e++) {
                a = c[e];
                d = null != d ? d[a] : null
            }
            return d
        }
        ;
        r = function setAttrFromValueForKey(a, b, c) {
            c = t(b, c);
            if (null != c) {
                return a.attr(b, c)
            }
        }
        ;
        s = function setTextFromValueForKey(a, b, c) {
            c = t(b, c);
            if (null != c) {
                return a.text(c)
            }
        }
        ;
        q = function regexify(a) {
            var b;
            if ("string" == typeof a) {
                return "^" + a + "$"
            } else if (null != a.length) {
                return function() {
                    var c, d, e;
                    e = [];
                    for (c = 0,
                    d = a.length; c < d; c++) {
                        b = a[c];
                        e.push(q(b))
                    }
                    return e
                }().join("|")
            } else {
                return a
            }
        }
        ;
        i = b(d.language ? d.language : a.defaultLanguage);
        if (!(d.skipLanguage && i.match(q(d.skipLanguage)))) {
            j(c, i, 1)
        }
        return u
    }
    ;
    a.fn.localize = a.localize;
    a.localize.data = {}
}
).call(this);
