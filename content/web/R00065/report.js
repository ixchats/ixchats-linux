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
    localize(["chat", "chats", "report", "buy"]),
    fetchPromo(),
    setLogo();
let Commom = $("#CommonDiv").html();
function DoTask(i) {
    switch (i) {
        case "group":
            DoReportGroup(i);
            break;
        case "user":
            DoReportUser(i);
            break;
        default:
            i = "group";
            DoReportGroup();
    }
    page = i;
    $(".NavTabs").removeClass("active");
    $("#tab" + i).addClass("active");
}
function DoReportGroup() {
    Reset();
    $(".repusr").addClass("d-none");
    $("#group").removeClass("d-none");
    let data = getGET();
    let r = false;
    let detailViewItem = $("#reportgrouperr");
    let t = $("#sendgrpyes");
    let s = data.params.id;
    let o = data.params.GroupName;
    $(".reportgroupcol #GroupName").html(filter(o));
    t.off("submit").submit(function (event) {
        event.preventDefault();
        let self = {};
        let newFName = $("#selectcomplaint").val();
        let p = $("#yourname").val();
        let node = $("#email").val();
        let i = $("#why").val();
        $("html, body").animate(
            {
                scrollTop: $(document).height(),
            },
            "slow"
        );
        detailViewItem.addClass("d-none");
        self.id = filter(s);
        self.GroupName = filter(o);
        self.Type = filter(newFName);
        self.YourName = filter(p);
        self.email = filter(node);
        self.why = filter(i);
        self.submit = "Send";
        if (r) {
            self["g-recaptcha-response"] = grecaptcha.getResponse();
        }
        $(document.body).css({
            cursor: "wait",
        });
        urlPost("https://rxat.ro/web_gear/chat/reportgroup.php", filter(self)).then(function (formData) {
            if (
                ($(document.body).css({
                    cursor: "default",
                }),
                allErrsOff(),
                formData.Err.captcha)
            ) {
                return (r = true), AddCap("createcap"), void $("#createcap").addClass("capspace");
            }
            if (formData.Err.reportgroup) {
                t.addClass("d-none");
                doSuccessMsg(detailViewItem, '<span data-localize="report.reportsent">Your report has been submitted.</span>', false);
            } else {
                DoErrs(formData);
            }
            r = false;
            $("#createcap").removeClass("capspace");
            localize(["chat", "report"]);
        });
    });
}
function DoReportUser() {
    Reset();
    $(".repgrp").addClass("d-none");
    $("#user").removeClass("d-none");
    let req = getGET();
    let r = false;
    let artistTrack = $("#reportusererr");
    let detailViewItem = $("#sendusryes");
    let v = req.params.UserName;
    let o = req.params.id;
    let c = v;
    if (!v && o) {
        c = o;
    }
    $(".reportusercol #UserName").html(filter(c));
    $("#sendusryes")
        .off("submit")
        .submit(function (event) {
            event.preventDefault();
            let self = {};
            let newFName = $("#selectcomplaintUsr").val();
            let p = $("#YourNameUsr").val();
            let node = $("#emailUsr").val();
            let i = $("#whyUsr").val();
            $("html, body").animate(
                {
                    scrollTop: $(document).height(),
                },
                "slow"
            );
            self.id = filter(o);
            self.UserName = filter(v);
            self.Type = filter(newFName);
            self.YourName = filter(p);
            self.email = filter(node);
            self.why = filter(i);
            self.submit = "Send";
            if (r) {
                self["g-recaptcha-response"] = grecaptcha.getResponse();
            }
            $(document.body).css({
                cursor: "wait",
            });
            urlPost("https://rxat.ro/web_gear/chat/reportuser.php", filter(self)).then(function (formData) {
                if (
                    ($(document.body).css({
                        cursor: "default",
                    }),
                    allErrsOff(),
                    formData.Err.captcha)
                ) {
                    return (r = true), AddCap("createcap2"), void $("#createcap2").addClass("capspace");
                }
                if (formData.Err.reportuser) {
                    detailViewItem.addClass("d-none");
                    doSuccessMsg(artistTrack, '<span data-localize="report.reportsent">Your report has been submitted.</span>', false);
                } else {
                    DoErrs(formData);
                }
                r = false;
                $("#createcap2").removeClass("capspace");
                localize(["chat", "report"]);
            });
        });
}
const a0_1x5c4b42 = {
    select: "#selectcomplaint",
    showSearch: false,
    closeOnSelect: true,
    placeholder: " ",
};
const a0_1x226e5c = {
    select: "#selectcomplaintUsr",
    showSearch: false,
    closeOnSelect: true,
    placeholder: " ",
};
$("#CommonDiv").html(""),
    GET.hash && 0 == GET.params.length && (location.hash = "#" + GET.hash),
    $("#tabgroup,#tabuser").click(function (event) {
        let defaultTargetId = event.currentTarget.id.substr(3);
        return DoTask(defaultTargetId), (location.hash = "#!" + defaultTargetId), false;
    }),
    DoTask(getRealHash()),
    new SlimSelect(a0_1x5c4b42),
    new SlimSelect(a0_1x226e5c);
