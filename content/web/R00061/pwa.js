"use strict";
var _JSON$parse;
let xjson = document.getElementById("xjson");
let jdir = (xjson = JSON.parse(xjson.innerHTML)).dir;
var deferredPrompt;
var sendStuff;
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        let arg = jdir.split("/");
        arg = arg[arg.length - 2];
        navigator.serviceWorker.register("/sw" + arg + ".js").then(
            function (canCreateDiscussions) {},
            function (contextReference) {
                console.log("ServiceWorker registration failed: ", contextReference);
            }
        );
    });
}
var isPWA = window.location.href.search("PWA=1") > 0;
function PWAinstall() {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        let inlineEditor2 = window.open("https://util.rxat.ro/pwa");
        if (inlineEditor2) {
            inlineEditor2.focus();
        }
    } else {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((result) => {
                result.outcome;
                deferredPrompt = null;
            });
        }
    }
}
function appMode() {
    document.body.innerHTML = '<iframe src="' + jdir + "box/embed.html#!&app=1&n=" + xjson.g + '" class="embediframe"></iframe>';
}
function directMode() {
    loadStyles("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css")
        .then((canCreateDiscussions) => {
            return loadStyles(jdir + "direct.css");
        })
        .then((canCreateDiscussions) => {
            return fetch(jdir + "direct.html")
                .then((e) => {
                    return e.text();
                })
                .then((html) => {
                    html = html.replace(/\.\.\/src\//g, jdir);
                    const domParser = new DOMParser();
                    document.body.appendChild(domParser.parseFromString(html, "text/html").body.firstChild);
                });
        })
        .then((canCreateDiscussions) => {
            return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js");
        })
        .then((canCreateDiscussions) => {
            return Promise.all([
                loadScript("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.bundle.min.js"),
                loadScript("https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.runtime.js"),
                loadScript(jdir + "common.js"),
            ]);
        })
        .then((canCreateDiscussions) => {
            return loadScript(jdir + "lib/jquery.localize.js");
        })
        .then((canCreateDiscussions) => {
            return loadScript(jdir + "direct.js");
        });
}
function loadScript(src) {
    return new Promise(function (adjustUI, down) {
        const s = document.createElement("script");
        s.async = true;
        s.src = src;
        s.onload = adjustUI;
        s.onerror = down;
        document.head.appendChild(s);
    });
}
function loadStyles(script) {
    return new Promise(function (adjustUI, onError) {
        const el = document.createElement("link");
        el.rel = "stylesheet";
        el.href = script;
        el.onload = adjustUI;
        el.onerror = onError;
        document.head.appendChild(el);
    });
}
window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    if (!isPWA) {
        deferredPrompt = event;
        if (sendStuff) {
            sendStuff(-999);
        }
    }
}),
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|BB10|Silk|Mobi/i.test(navigator.userAgent) && "enable" != (null == (_JSON$parse = JSON.parse(localStorage.getItem("Settings"))) ? void 0 : _JSON$parse.classic)
        ? appMode()
        : directMode();