"use strict";
let LastApp, sideFrame, lcFrame, sbe, directListener = [], boxdir = "box", captcha = !1, iframeStorage = "iframe_v2", defaultwidth = 650, defaultheight = 486, update = null, cn = Math.floor(Math.random() * Math.floor(2147483647)), trace = console.log, shimFrame = document.getElementById("shim"), appID = 0;
switch (n = GET.params.n,
n || (n = GET.path),
n || (n = "rxat"),
json.type) {
case "home":
    Home = 1;
    break;
default:
    Direct = 1
}
function newstuff(e) {
    var _0x4dcd30 = new Date(2021,5,16,0,0,0,0)
      , _0x16ab0e = new Date(2021,5,29,0,0,0,0);
    let t = document.querySelector("#newStf")
      , n = document.querySelector("#newV");
    var o, a;
    _0x4dcd30 <= e && e <= _0x16ab0e ? (null == t || null == (o = t.classList) || o.remove("d-none"),
    n.innerHTML += " <small>(v1.55)</small>") : null == t || null == (a = t.classList) || a.add("d-none")
}
function loadHash(e) {
    if (!Home)
        return;
    let t = e || location.hash;
    if (t && ["featured", "popular", "supported", "games"].indexOf(t) >= 0 && location.hash.length > 0) {
        let e = document.querySelector("#groups");
        e && e.scrollIntoView({
            behavior: "smooth"
        })
    }
}
function DoSendMessage(e) {
    e.preventDefault();
    let t = $("#sendmsgerr")
      , n = document.querySelector("#sendmsg")
      , o = document.querySelector("#createcap")
      , a = xConfig.gn
      , i = {}
      , l = document.querySelector("#sndemail")
      , r = document.querySelector("#sndfeedback");
    t.addClass("d-none"),
    i.GroupName = filter(a),
    i.email = filter(null == l ? void 0 : l.value),
    i.feedback = filter(null == r ? void 0 : r.value),
    i.submit = "Send",
    captcha && (i["g-recaptcha-response"] = grecaptcha.getResponse()),
    bodyCursor("wait"),
    urlPost("https://rxat.ro/web_gear/chat/ownerfeedback2.php", filter(i)).then(function(e) {
        var a, i, l, r;
        if (bodyCursor("default"),
        allErrsOff(),
        null == o || null == (a = o.classList) || a.remove("d-none"),
        e.Err.captcha)
            return captcha = !0,
            AddCap("createcap"),
            void (null == o || null == (l = o.classList) || l.add("capspace"));
        e.Err.ownerfeedback ? (n.reset(),
        doSuccessMsg(t, '<span data-localize="web.msgsent">Your message has been sent.</span>', !0),
        null == o || null == (r = o.classList) || r.add("d-none")) : DoErrs(e),
        captcha = !1,
        null == o || null == (i = o.classList) || i.remove("capspace"),
        localize(["chat", "web", "chats"])
    })
}
function doEmbed() {
    if (directListener.embed)
        return;
    $("#embedmodal").modal();
    let e = document.querySelector("#embed_width")
      , t = document.querySelector("#embed_height")
      , n = document.querySelector("#embed_code")
      , o = $("#copy")
      , a = 0
      , i = 0
      , l = xConfig.gn
      , r = xConfig.gid
      , s = document.querySelector("#notrecomW")
      , d = document.querySelector("#notrecomH")
      , c = document.querySelector("#embFooter")
      , u = document.querySelector("#preview");
    t.value = defaultheight,
    e.value = defaultwidth,
    n.innerHTML = getEmbed(l, r, defaultwidth, defaultheight),
    [e, t].forEach(o=>{
        null == o || o.addEventListener("keydown", ()=>{
            clearTimeout(update)
        }
        ),
        null == o || o.addEventListener("keyup", u=>{
            null == c || c.classList.add("d-none"),
            clearTimeout(update),
            update = setTimeout(function() {
                _0x5cedf0 = o.id;
                let g = "embed_width" == _0x5cedf0 ? 600 : 465
                  , m = u.target.value;
                (isNaN(m) || m > 2e3 || m < g) && (m = "embed_width" == _0x5cedf0 ? defaultwidth : defaultheight,
                "embed_width" == _0x5cedf0 ? (null == s || s.classList.remove("d-none"),
                null == e || e.classList.add("inpshake"),
                setTimeout(function() {
                    null == e || e.classList.remove("inpshake")
                }, 1e3),
                setTimeout(function() {
                    null == s || s.classList.add("d-none")
                }, 3e3)) : (null == d || d.classList.remove("d-none"),
                null == t || t.classList.add("inpshake"),
                setTimeout(function() {
                    null == t || t.classList.remove("inpshake")
                }, 1e3),
                setTimeout(function() {
                    null == d || d.classList.add("d-none")
                }, 3e3))),
                null == c || c.classList.remove("d-none"),
                m = parseInt(m),
                a = "embed_width" == _0x5cedf0 ? m : calculateProp(m, !1),
                i = "embed_height" == _0x5cedf0 ? m : calculateProp(m, !1),
                e.value = a,
                t.value = i,
                n.innerHTML = "embed_width" == _0x5cedf0 ? getEmbed(l, r, m, 0 == i ? t.value : i) : getEmbed(l, r, 0 == a ? e.value : a, m)
            }, 1e3)
        }
        )
    }
    ),
    o.tooltip({
        trigger: "click",
        placetop: "top"
    }),
    o.off("click").on("click", function(e) {
        e.preventDefault();
        const t = document.getElementById("embed_code");
        t.select(),
        t.setSelectionRange(0, 99999),
        document.execCommand("copy"),
        o.tooltip("show"),
        setTimeout(function() {
            o.tooltip("hide")
        }, 1e3),
        localize(["chats"])
    }),
    null == u || u.addEventListener("click", n=>{
        a = a || e.value,
        i = i || t.value,
        a <= 650 && getEmbed(l, r, a, i, !0),
        a > 650 && getEmbed(l, r, a, i, !1, !0)
    }
    ),
    directListener.embed = !0
}
function main() {
    if (Direct) {
        var e;
        document.getElementById("closeColLeft").classList.remove("d-none"),
        sideBut(),
        document.body.style.backgroundColor = "black",
        handleSideBars(),
        null == (e = document.querySelector("#navxatApps")) || e.classList.add("d-none")
    } else {
        document.body.style.backgroundColor = "white",
        document.getElementById("navLogo").src = "/content/img/xatsat.svg";
        let e = document.querySelector("#rankdrop");
        null == e || e.classList.remove("d-block"),
        null == e || e.classList.add("d-none")
    }
    if (newstuff(new Date),
    setupConsoleLogging(),
    initLanguage(),
    initAuser3(),
    setLogo(),
    xConfig.debugMainTemplate) {
        let e = ""
          , t = document.createElement("style");
        t.appendChild(document.createTextNode(e)),
        document.head.insertBefore(t, null);
        let n = "";
        document.body.innerHTML = n
    }
    if (readUser(),
    fetchPromo().then(function(e) {
        !Direct && e && (xConfig.gn = e.n,
        xConfig.debugBox = "box/embed.html?n=" + e.n,
        Home && doHome(e)),
        fetchGroupData().then(function() {
            localize(),
            lookupForEmbed()
        })
    }),
    xConfig.username)
        document.getElementById("navLogin").addEventListener("click", function() {
            directConfig("login")
        }),
        directConfig("login");
    else {
        let e = document.getElementById("navLogin");
        e.href = "/login",
        e.removeAttribute("data-toggle"),
        e.removeAttribute("data-target"),
        e.addEventListener("click", function() {
            window.location.href = "https://rxat.ro/login"
        })
    }
    xConfig.debugMainOwner && directConfig("mainowner"),
    Direct && directConfig("background"),
    directConfig("landscape"),
    navClickHandlers(),
    window.addEventListener("message", onMessage, !1),
    xConfig.debugWorkbox && "serviceWorker"in navigator && window.addEventListener(" load ", ()=>{
        navigator.serviceWorker.register(" / sw.js ")
    }
    );
    try {
        2 & xConfig.cookies || (t = window,
        n = document,
        " script ",
        " ga ",
        t.GoogleAnalyticsObject = " ga ",
        t.ga = t.ga || function() {
            (t.ga.q = t.ga.q || []).push(arguments)
        }
        ,
        t.ga.l = 1 * new Date,
        o = n.createElement(" script "),
        a = n.getElementsByTagName(" script ")[0],
        o.async = 1,
        o.src = " https: //www.google-analytics.com/analytics.js",
        a.parentNode.insertBefore(o, a),
        ga("create", "UA-165559524", "auto"),
        ga("send", "pageview"))
    } catch (e) {}
    var t, n, o, a;
    let i = {
        30008: "trade",
        20010: "fourinrow",
        60002: "canvas",
        10001: "media",
        20047: "xavi"
    };
    var l, r;
    window.setTimeout(()=>{
        let e = new URLSearchParams(window.location.search).get("open");
        e && i.hasOwnProperty(e) && startSide(i[e])
    }
    , 1500),
    window.innerWidth < 450 && (null == (l = document.querySelector("#promoframe")) || null == (r = l.classList) || r.remove("d-none"));
    let s = document.getElementById("copyrightyear");
    s && s.appendChild(document.createTextNode((new Date).getFullYear()));
    let d = document.getElementById("navEmbedGrp");
    d && d.addEventListener("click", doEmbed);
    let c = document.getElementById("navEmbedBottom");
    c && c.addEventListener("click", doEmbed);
    let u = document.getElementById("sendmsg");
    u && u.addEventListener("submit", DoSendMessage);
    let g = document.querySelector("#navIframe");
    g && g.addEventListener("click", doIframeModal),
    localize(["chat", "web", "chats"])
}
function lookupForEmbed() {
    let e = getGET();
    if (e.hash)
        return "!embed" == e.hash && doEmbed()
}
function handleSideBars() {
    let e = document.querySelector(".sidebar")
      , t = document.querySelectorAll("[data-app]");
    t.length > 0 && t.forEach(t=>{
        t.addEventListener("click", t=>{
            "IMG" == t.target.nodeName && (t = t.target.parentElement || t.target.parentNode);
            let n = t.target.dataset || t.dataset;
            if (n && (n = n.app))
                switch (n) {
                case "media":
                    startSide("media", null, null, null);
                    break;
                case "xavi":
                case "snakerace":
                    startSide(n, 0, 600);
                    break;
                default:
                    startSide(n, 0),
                    "apps" == n && e.classList.add("d-none")
                }
        }
        )
    }
    )
}
function fetchGroupData() {
    return new Promise((e,t)=>{
        if (xConfig.debugJsonGroup) {
            const e = JSON.parse(document.getElementById("xjson").innerHTML);
            void 0 !== e.id && void 0 !== e.g && void 0 !== e.d && void 0 !== e.a ? (xConfig.gid = e.id,
            xConfig.gn = null == e.g ? "rxat" : e.g,
            xConfig.gd = e.d.replace(/\\u00A0/g, ""),
            xConfig.type = e.t,
            xConfig.background = e.gb,
            xConfig.tabs = e.tabs,
            null == e.g && (xConfig.groupNoName = !0),
            updatePage()) : console.error("invalid embedded json")
        } else {
            if (xConfig.debugFetchGroup) {
                let t, n = "https://rxat.ro/web_gear/chat/roomid.php?d=" + xConfig.gn;
                return (t = GET.params.cb) && (n += "&cb=" + t),
                void fetch(n).then(function(e) {
                    return e.json()
                }).then(function(t) {
                    if (void 0 !== t.id && void 0 !== t.g && void 0 !== t.d && void 0 !== t.a) {
                        xConfig.gid = t.id,
                        xConfig.gn = null == t.g ? "rxat" : t.g,
                        xConfig.gd = t.d.replace(/\\u00A0/g, ""),
                        xConfig.type = t.t,
                        xConfig.background = t.gb,
                        xConfig.if = t.if || !1,
                        null == t.g && (xConfig.groupNoName = !0);
                        let e = guessIfXatFrame();
                        if (t.if && e) {
                            let e = document.querySelector("#groupBackgroundFrame");
                            e && (e.src = t.if),
                            displayXatFrameAlert()
                        } else
                            xConfig.background = t.gb;
                        if (xConfig.tabs = t.tabs,
                        GET.params.x && Direct && t.a) {
                            let e = t.a.split(";=");
                            xConfig.chatBg = e[0] || ""
                        }
                        let n = t.a ? t.a.split(";=") : []
                          , o = n[8]
                          , a = n[9]
                          , i = n[10]
                          , l = n[11]
                          , r = n[12]
                          , s = t[636] ? t[636] : "";
                        if (s && s >= 1 && Direct) {
                            let e = document.getElementById("setflag");
                            o && e && (e.classList.remove("d-none"),
                            e.src = "rxat" == o ? "https://rxat.ro/images/smw/flag.png" : "https://rxat.ro/images/smw/flag/" + o + ".png",
                            a && (e.title = a));
                            let t = document.getElementById("navTop").style
                              , n = document.getElementById("navBottom").style;
                            "navdefault" == i ? (t.cssText = "background: linear-gradient(#040404, #191919)",
                            n.cssText = "background: linear-gradient(#040404, #191919) !important") : "navplanet" == i ? (t.cssText = "background: linear-gradient(#006279, #02a9d2)",
                            n.cssText = "background: linear-gradient(#007a97, #02a9d2) !important") : "navspace" == i && (t.cssText = "background: linear-gradient(#004, #008)",
                            n.cssText = "background: linear-gradient(#004, #008) !important")
                        }
                        s && s >= 2 && l && (document.getElementById("groupName").style.fontFamily = l,
                        document.getElementById("groupDescription").style.fontFamily = l),
                        s && s >= 3 && r && (document.getElementById("groupName").style.textShadow = "1px 1px 5px" + r + ", 1px 1px 5px" + r,
                        document.getElementById("groupDescription").style.textShadow = "1px 1px 5px" + r + ", 1px 1px 5px" + r),
                        updatePage()
                    } else
                        console.error("invalid fetched json");
                    e()
                })
            }
            xConfig.gid = 42,
            xConfig.gn = "phoenix",
            xConfig.gd = "arising from the ashes of its predecessor",
            xConfig.background = "http://i47.tinypic.com/34hdvrn.png"
        }
        e()
    }
    )
}
function displayXatFrameAlert() {
    let e = localStorage.getItem("xatframe_declined");
    if (e && "1" == e || isMobile)
        return;
    let t = document.querySelector("#xatFrameSet")
      , n = document.querySelector("#xatframeAlert")
      , o = document.querySelector("#xatframe_alert_close");
    null == n || n.classList.remove("d-none"),
    o && o.addEventListener("click", e=>{
        localStorage.setItem("xatframe_declined", "1")
    }
    ),
    t && t.addEventListener("click", doIframeModal)
}
function guessIfXatFrame(e) {
    let t = getIndividualiFrames()
      , n = e || xConfig.gn;
    return t.list || (t.list = []),
    t.disabled || (t.disabled = []),
    t.list.indexOf(n) >= 0 || !(t.disabled.indexOf(n) >= 0) && !!(t.global || -1 != t.list.indexOf(n) && -1 != t.disabled.indexOf(n))
}
function updatePage() {
    document.documentElement.setAttribute("lang", xConfig.lang),
    Direct && (document.title = xConfig.gn,
    document.querySelector('meta[name="description"]').setAttribute("content", xConfig.gd),
    xConfig.background && ("#" == xConfig.background.charAt(0) ? document.body.style.background = xConfig.background : document.body.style.backgroundImage = "url('" + SafeImage(xConfig.background) + "')"),
    document.getElementById("groupName") && document.getElementById("groupName").appendChild(document.createTextNode(xConfig.gn)),
    document.getElementById("groupDescription") && document.getElementById("groupDescription").appendChild(document.createTextNode(xConfig.gd))),
    Home && (document.querySelector('meta[name="description"]').setAttribute("content", "rxat.ro is a fun social networking site, join a group, make friends, create your own rxat group"),
    document.title = "rxat");
    let e = document.getElementById("embedframe");
    if (e)
        if (xConfig.chatBg && "#" !== xConfig.chatBg.charAt(0)) {
            let t = document.createElement("img");
            t.width = 728,
            t.height = 486,
            t.src = xConfig.chatBg,
            e.classList.add("d-none"),
            e.parentNode.insertBefore(t, e)
        } else
            e.src = dir + "box/embed.html?n=" + xConfig.gn;
    if (Direct && document.getElementById("bottomNavGroupName") && document.getElementById("bottomNavGroupName").appendChild(document.createTextNode(xConfig.gn)),
    readUser(),
    setUser(),
    Direct) {
        let e = document.querySelector("#navBottomTabs")
          , t = document.querySelector("#navBottom");
        if (e.innerHTML = "",
        xConfig.groupNoName || !xConfig.tabs || 0 == xConfig.tabs.length || 1 == xConfig.tabs.length && "Comments" == xConfig.tabs[0].label)
            null == t || t.classList.add("d-none");
        else {
            let t, n;
            if (void 0 !== xConfig.tabs && xConfig.tabs.length > 0) {
                let o = xConfig.tabs;
                for (let a = 0; a < o.length; a++) {
                    if ("Comments" == o[a].label)
                        continue;
                    let i = String(o[a].url);
                    -1 != i.search(/^http:\/\/[\.a-z]*rxat.ro\//) && (i = i.replace("http:", "https:")),
                    (i = i.replace("http://rxat.ro", "https://rxat.ro")) > 0 && (i = "https://rxat.ro/web_gear/chat/media.php?d=" + xConfig.gn + "&p=" + (i - 1) + "&id=" + xConfig.gid),
                    (n = GET.params.cb) && (i += "&cb=" + n),
                    createTab({
                        navBottom: e,
                        index: a,
                        url: i,
                        json: o[a]
                    }),
                    0 == localStorage.getItem("TabsClosed") && 0 == a && (t = tabPress(0, i, 1))
                }
            }
            createTab({
                navBottom: e,
                url: "close",
                json: {
                    label: "close"
                },
                close: t
            })
        }
    }
    xConfig.debugTooltips && $(function() {
        $('[data-toggle="tooltip"]').tooltip({
            trigger: "hover"
        })
    }),
    legacyLinks(),
    cookieBar()
}
function createTab(e) {
    let t = makeElement(e.navBottom, "li", "nav-item")
      , n = makeElement(t, "a");
    n.className = "nav-link" + ("close" == e.url ? e.close ? "" : " d-none" : ""),
    n.id = "close" == e.url ? "navClose" : "navTab" + e.index,
    n.href = "#/",
    n.dataset.url = e.url,
    n.addEventListener("click", tabPress);
    let o = makeElement(n, "img", "mr-1");
    o.src = xConfig.dir + "img/navbar/" + ("close" == e.url ? "close" : "userframe") + ".svg",
    o.alt = "userframe",
    n.innerHTML += e.json.label
}
function tabPress(e, t, n) {
    var o, a, i, l;
    if (t || (t = e.target.dataset.url),
    !t)
        return 0;
    let r = document.querySelector("#navBottom")
      , s = document.querySelector("#navClose")
      , d = document.querySelector("#navBottomTabs")
      , c = document.querySelector("#groupUserFrame")
      , u = document.querySelector("#privacyGroupUrl")
      , g = document.querySelector("#privacyGroupFrame");
    if (localStorage.setItem("TabsClosed", "0"),
    "close" == t) {
        var m, f, p;
        localStorage.setItem("TabsClosed", "1"),
        document.getElementById("groupUserFrame") && (document.getElementById("groupUserFrame").src = ""),
        null == r || null == (m = r.classList) || m.add("fixed-bottom"),
        null == s || null == (f = s.classList) || f.add("d-none");
        let e = d.querySelectorAll('[id^="navTab"]');
        return e.length && e.forEach(e=>{
            var t;
            null == e || null == (t = e.classList) || t.remove("active")
        }
        ),
        null == c || null == (p = c.classList) || p.add("d-none"),
        0
    }
    let x = 0;
    var h;
    return x = 4 & xConfig.cookies,
    n && 256 & xConfig.type && (x = 1),
    x || (x = -1 != t.search(/^https:\/\/rxat.ro\//)),
    x || (x = -1 != t.search(/^https:\/\/[a-z]*\.rxat.ro\//)),
    x || (x = -1 != t.search(/^https:\/\/rxat.ro\//)),
    x || (x = -1 != t.search(/^https:\/\/util.rxat.ro\//)),
    x || (x = -1 != t.search(/^https:\/\/[a-z]*\.util.rxat.ro\//)),
    n || e || (x = 1),
    e && !x ? (u.innerText = t,
    null == g || null == (h = g.classList) || h.remove("d-none"),
    $("#privacyModal").modal("show"),
    0) : x ? n || "http:" != t.substr(0, 5) ? (document.getElementById("groupUserFrame") && (document.getElementById("groupUserFrame").src = t),
    null == r || null == (o = r.classList) || o.remove("fixed-bottom"),
    null == s || null == (a = s.classList) || a.remove("d-none"),
    null == (i = e.target) || i.classList.add("active"),
    null == c || null == (l = c.classList) || l.remove("d-none"),
    1) : (window.open(t, "_blank"),
    0) : 0
}
function sideBut(e) {
    const _0x9ef897 = document.getElementById("closeApp");
    let t = document.querySelector(".sidebar");
    _0x9ef897.style.display = e ? "block" : "none",
    "none" == _0x9ef897.style.display && t && t.classList.remove("d-none"),
    sbe || _0x9ef897.addEventListener("click", function() {
        startSide("")
    }),
    sbe = 1
}
function startSide(e, t, n, o) {
    n || (n = 425),
    shimFrame && (shimFrame.style.display = "none");
    let a = xConfig.dir + "apps/" + e + "/" + e + ".html";
    if (o && "media" == e ? a += "?link=" + o : o && (a += "#" + o),
    "shim" == e)
        return lcFrame = shimFrame,
        shimFrame.style.width = n + 16 + "px",
        shimFrame.style.display = "block",
        shimFrame.src = a,
        void sideBut(1);
    if (shimFrame.style.width = "16px",
    shimFrame.src = "",
    "" === e)
        return sideFrame && (sideFrame.style.display = "none",
        sideFrame.src = ""),
        lcFrame = null,
        sideBut(0),
        void (appID = 0);
    if (sideFrame = document.getElementById(t ? "rightsideframe" : "sideframe"),
    lcFrame = sideFrame,
    sideFrame) {
        if (sideFrame.style.width = n + "px",
        sideFrame.style.display = "block",
        sideFrame.style.height = "media" == e ? "576px" : "600px",
        "fshim" === e)
            sideFrame.src == a ? sideFrame.contentWindow.postMessage(JSON.stringify({
                OpenByN: LastApp,
                cn: cn
            }), xConfig.origin) : sideFrame.src = a;
        else {
            let e = sideFrame.src.split("#")
              , t = a.split("#");
            sideFrame.src = a,
            e[1] == t[0] && sideFrame.contentDocument.location.reload(!0)
        }
        sideBut(1)
    }
}
function onMessage(e) {
    if (e.origin !== xConfig.origin)
        return;
    let t = JSON.parse(e.data);
    if ("sideload" != t.action)
        return t.tobox ? lcFrame && 13 == t.channel ? void (lcFrame.style.width = (600 == t.msg ? 600 : 425) + "px") : void window.box.postMessage(e.data, xConfig.origin) : "4" != t.channel || lcFrame && 20034 == appID && "]" != t.msg.charAt(t.msg.length - 1) ? void (lcFrame && lcFrame.contentWindow.postMessage(e.data, xConfig.origin)) : (t.channel = 10,
        t.msg = "",
        void window.box.postMessage(JSON.stringify(t), xConfig.origin));
    if (t.o) {
        sideFrame && (sideFrame.src = "",
        sideFrame.style.display = "none");
        let e = 425;
        return 1 & t.i && (e = 600),
        appID = t.i,
        startSide("shim", 0, e),
        void (shimFrame.onload = function(e) {
            let n = t.i;
            t.f && (n = t.f),
            shimFrame.parentElement && shimFrame.parentElement.classList.remove("d-none"),
            shimFrame.contentWindow.postMessage(JSON.stringify({
                channel: "startUp",
                id: n,
                cn: cn
            }), xConfig.origin)
        }
        )
    }
    "media" == t.n ? startSide(t.n, null, null, t.l) : "xavi" == t.n || "60" == t.i.toString().substr(0, 2) ? startSide(t.n, 0, 600) : startSide(t.n, 0)
}
function setupConsoleLogging() {
    console.log = (console.log.bind(console),
    xConfig.name,
    xConfig.debugLogIgnore,
    function() {
        xConfig.debugNoLogs
    }
    ),
    trace = console.log
}
function SelectAll(e) {
    document.getElementById(e).focus(),
    document.getElementById(e).select()
}
function xInt(e) {
    return e = parseInt(e),
    isNaN(e) ? 0 : e
}
function xpromo(e, t) {
    let n = '\n    <a href="//rxat.ro/' + e + '">' + e + '</a> \n        <small>(<span data-localize="index.notrun">Note: this chat is not run by rxat</span>)</small><br>\n        <span data-localize="index.promotedgroups">Promoted groups</span>: \n    ';
    for (let e in xConfig.xpromo)
        n += '<a href="//rxat.ro/' + xConfig.xpromo[e].n + '">' + xConfig.xpromo[e].n + "</a> | ";
    let o = '\n\t\t<div class="col-12 mb-2" id="mobpromo">\n\t\t\t<div class="card h-100 border mb-2">\n\t\t\t\t<a class="overlayLink" href="https://rxat.ro/' + e + '"></a>\n\t\t\t\t<div class="card-body p-2">\n\t\t\t\t\t<img class="card-img-top img-fluid promoImg" loading="lazy" src="' + GetImageToNl(t) + '" alt="' + e + '">\n\t\t\t\t\t<div class="centered"><img class="mb-1 mr-1 promostar" width="19" src="' + xConfig.dir + 'img/navbar/star.svg" alt="star">' + e + "</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
    window.matchMedia("(max-width: 540px)").matches && isMobile && document.querySelector(".hmemb").remove(),
    n += '<a href="//rxat.ro/promotion"><span data-localize="index.promomine">Promote my group</span></a>',
    document.querySelector("#promo").innerHTML = o + n
}
function pmain() {
    let e = document.querySelector("#groups")
      , t = ["featured", "popular", "supported", "games"]
      , n = ["p1", "p2", "p3", "p4", "p5", "pp1", "pp2", "pp3", "pp4", "pp5"]
      , o = ["prev", "xprev", "next", "xnext"];
    for (let e in t) {
        let n = document.querySelector("#x" + t[e]);
        null == n || n.addEventListener("click", e=>(e.preventDefault(),
        clist(e.currentTarget, "p1", e.currentTarget.id),
        location.hash = "#" + e.currentTarget.id.substr(1),
        !1))
    }
    for (let t in n) {
        let o = document.querySelector("#" + n[t]);
        null == o || o.addEventListener("click", t=>(t.preventDefault(),
        clist(this, t.target.id),
        null == e || e.scrollIntoView({
            behavior: "smooth"
        }),
        !1))
    }
    for (let t in o) {
        let n = document.querySelector("#" + o[t]);
        null == n || n.addEventListener("click", t=>(t.preventDefault(),
        clist(this, t.currentTarget.id),
        null == e || e.scrollIntoView({
            behavior: "smooth"
        }),
        !1))
    }
}
function prender() {
    xConfig.xlist && xlist("#thumbs", xConfig.xlist)
}
function pupdate() {
    if (xConfig.lang && xConfig.loadlist) {
        let e = "https://rxat.ro/json/lists/";
        "games" == xConfig.list ? e += xConfig.list : e += parseInt(xConfig.page) + "_" + (xConfig.loadlistfail ? "en" : xConfig.lang.substr(0, 2)) + "_" + xConfig.list,
        e += ".php",
        fetch(e).then(function(e) {
            if (200 === e.status)
                e.json().then(function(e) {
                    xConfig.loadlist = !1,
                    xConfig.loadlistfail = !1,
                    xConfig.xlist = e,
                    prender()
                });
            else if (!xConfig.loadlistfail && "en" != xConfig.lang.substr(0, 2))
                throw Error(e.status)
        }).catch(function(e) {
            xConfig.loadlistfail || "en" == xConfig.lang.substr(0, 2) || (xConfig.loadlistfail = !0,
            xConfig.loadlist = !0,
            pupdate())
        })
    }
}
function clist(e, t, n) {
    var o, a;
    const i = {
        p1: 0,
        p2: 1,
        p3: 2,
        p4: 3,
        p5: 4,
        prev: "-",
        xprev: "-",
        next: "+",
        xnext: "+"
    };
    var l, r;
    null != n && (null == (l = document.querySelector("#x" + xConfig.list)) || null == (r = l.classList) || r.remove("active"),
    xConfig.list = n.substr(1),
    xConfig.page = 0),
    "pp" == t.substr(0, 2) && (t = t.substr(1)),
    "+" == i[t] ? xConfig.page++ : "-" == i[t] ? xConfig.page-- : xConfig.page = i[t],
    xConfig.page < 0 ? xConfig.page = xConfig.numPages - 1 : xConfig.page > xConfig.numPages - 1 && (xConfig.page = 0),
    e && e[0] && (e = e[0]),
    null == (o = e) || null == (a = o.classList) || a.add("active"),
    $("#p" + (xConfig.page + 1)).parent().addClass("active").siblings().removeClass("active"),
    $("#pp" + (xConfig.page + 1)).parent().addClass("active").siblings().removeClass("active"),
    xConfig.loadlist = !0,
    pupdate()
}
function GetImageToNl(e) {
    if (!e)
        return xConfig.dir + "img/bluebox.png";
    let t = e.split("&U=");
    if (t[1]) {
        if ("#" == t[1].charAt(0))
            return xConfig.dir + "img/bluebox.png";
        e = t[1]
    }
    return "https://images.weserv.nl/?output=jpg&w=200&h=134&q=80&t=absolute&url=" + encodeURIComponent(e) + "&default=" + xConfig.origin + xConfig.dir + "img/bluebox.png"
}
function xlist(e, t) {
    let n = '<div class="container-fluid p-0"><div class="row ml-0 mr-0">'
      , o = "groups";
    if ("supported" == xConfig.list && (o = "supported"),
    ["supported", "popular"].indexOf(xConfig.list) >= 0 && (t = t.sort(function(e, t) {
        return t.n - e.n
    })),
    t.length > 0)
        for (let e in t)
            if (null == t[e].l)
                t[e].g = t[e].g.replace(/\s/g, ""),
                n += '\n          <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4">\n            <div class="card h-100">\n              <a class="overlayLink" href="/' + t[e].g + '"></a>\n                            <div class="card-header text-center font-weight-bold text-truncate p-2">' + t[e].g + '</div>\n              <div class="card-body p-2">\n                <img class="card-img-top img-fluid mb-2" loading="lazy" src="' + GetImageToNl(t[e].a) + '" alt="' + t[e].g + '">\n                <p class="card-text">' + t[e].d + (null != t[e].t ? "<br><b>(" + t[e].t + ")</b>" : "") + '</p>\n              </div>\n              <div class="card-footer bg-transparent p-2">\n                <p class="card-text text-muted float-right">' + t[e].n + '\n                  <img class="ml-1" src="' + xConfig.dir + "img/navbar/" + o + '.svg" alt="">\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                ';
            else {
                xConfig.numPages = t[e].l;
                for (let e = 1; e <= 5; e++) {
                    let t = document.querySelector("#p" + e)
                      , n = document.querySelector("#pp" + e);
                    e > xConfig.numPages ? (null == t || t.classList.add("d-none"),
                    null == n || n.classList.add("d-none")) : (null == t || t.classList.remove("d-none"),
                    null == n || n.classList.remove("d-none"))
                }
            }
    n += "</div></div>",
    document.querySelector(e).innerHTML = n,
    xConfig.list && loadHash(xConfig.list)
}
function doHome(e) {
    xpromo(e.n, e.a),
    xConfig.page = 0;
    let t = "featured";
    switch (GET.hash) {
    case "popular":
    case "promoted":
    case "supported":
    case "games":
        t = GET.hash
    }
    t = "x" + t,
    clist(document.querySelector("#" + t), "p1", t),
    pmain()
}
function doIframeModal() {
    let e = xConfig.gn
      , t = getIndividualiFrames()
      , n = document.querySelector("#groupsList")
      , o = document.querySelector("#groupListSpan")
      , a = document.querySelector("#iframeSave")
      , i = document.querySelector("#globalIframe")
      , l = document.querySelector("#IndividualIframe");
    t.disabled || (t.disabled = []),
    t.list || (t.list = []),
    i.checked = t.global,
    l.checked = guessIfXatFrame(e),
    t.list && t.list.length > 0 ? (n.classList.remove("d-none"),
    o.innerHTML = t.list.join(", ")) : n.classList.add("d-none"),
    a.addEventListener("click", n=>{
        if (n.preventDefault(),
        t.global = i.checked,
        t.list) {
            let n = t.list.indexOf(e);
            l.checked ? -1 == n && (t.list.push(e),
            t.disabled && t.disabled.indexOf(e) >= 0 && t.disabled.splice(t.disabled.indexOf(e), 1)) : (t.list.indexOf(e) >= 0 && -1 !== n && t.list.splice(n, 1),
            t.disabled && -1 == t.disabled.indexOf(e) && t.disabled.push(e))
        }
        localStorage.setItem(iframeStorage, JSON.stringify(t)),
        updateIframe()
    }
    ),
    localize(["web", "chats"])
}
function updateIframe() {
    let e = guessIfXatFrame()
      , t = document.querySelector("#groupBackgroundFrame");
    e ? xConfig.if && t && t.setAttribute("src", xConfig.if) : (t && t.removeAttribute("src"),
    xConfig.background && ("#" == xConfig.background.charAt(0) ? document.body.style.background = xConfig.background : document.body.style.backgroundImage = "url('" + xConfig.background + "')"))
}
function getIndividualiFrames() {
    let e = {
        global: !0,
        list: [xConfig.gn],
        disabled: []
    };
    try {
        let t = localStorage.getItem(iframeStorage);
        return null == t ? e : t = JSON.parse(t)
    } catch (t) {
        return e
    }
    localize(["web", "chats"])
}
mDirect || (initConfig(),
main()),
xConfig.debugBox = "box/embed.html?n=" + n,
xConfig.gn = n,
xConfig.debugNoLogs = !0,
xConfig.debugFetchGroup = !0,
xConfig.debugTooltips = !0;
var prevSpos = window.pageYOffset;
window.onscroll = function() {
    var e = window.pageYOffset;
    let t = document.getElementById("navTop");
    window.matchMedia("(max-width: 992px)").matches && (t.style.top = prevSpos > e ? "0" : "-75px"),
    prevSpos = e
}
;
