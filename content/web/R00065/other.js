"use strict";
let page;
let tab;
let tempFeature = [];
(document.body.style.backgroundColor = "white"),
    document.body.classList.remove("invisible"),
    $("#navGroup,#navxatApps").addClass("d-none"),
    Reset(),
    initConfig(),
    readUser(),
    setUser(),
    initLanguage(),
    initAuser3(),
    navClickHandlers(),
    startAnalytics(),
    setLoggedin(),
    legacyLinks(),
    cookieBar(),
    localize(["buy"]),
    fetchPromo(),
    setLogo();
let Commom = $("#CommonDiv").html();
$("#CommonDiv").html("");
