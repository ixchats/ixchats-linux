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
    localize(["tools"]),
    fetchPromo(),
    setLogo();
const a0_1x3fe99d = {
    search: false,
    animation: false,
};
var listener = a0_1x3fe99d;
let Commom = $("#CommonDiv").html();
$("#CommonDiv").html(""),
    (location.hash = "#" + GET.hash),
    $("#tabsearch,#tabanimation,#tabshuffle").click(function (event) {
        let path = event.currentTarget.id.substr(3);
        return DoTask(path), (location.hash = "#!" + path), false;
    });
let get = getGET();
let path = get.path;
function DoTask(key) {
    switch (key) {
        case "search":
            DoSearch(key);
            break;
        case "animation":
            DoAnimation(key);
            break;
        case "shuffle":
            DoShuffle(key);
            break;
        case "maintenance":
            DoMaintenance(key);
            break;
        case "terms":
            DoTerms(key);
            break;
        case "privacy":
            DoPrivacy(key);
            break;
        default:
            key = "search";
            DoSearch();
    }
    page = key;
    addRemoveClass(".NavTabs", "active", true);
    addRemoveClass("#tab" + key, "active", false);
}
function DoSearch() {
    Reset();
    handleSearch();
    addRemoveClass("#search", "d-none", true);
}
function DoAnimation() {
    Reset();
    handleAnimation();
    addRemoveClass("#animation", "d-none", true);
}
function DoShuffle() {
    const e = {
        XsPRi: '<label for="',
        VJyaw: '" class="custom-file-input" id="',
    };
    e.yHsgH = '            <div class="card">                <div class="card-header">                    <div class="clearfix">                        <img src="';
    e.NGMlY = '</a>                </div>            </div>            <br>      ';
    e.GdWHs = '{}.constructor("return this")( )';
    Reset();
    handleShuffle();
    addRemoveClass("#shuffle", "d-none", true);
}
function DoMaintenance() {
    Reset();
    addRemoveClass("#maintenance", "d-none", true);
    addRemoveClass("#checktools", "d-none", false);
    addRemoveClass("#pdtools", "d-none", false);
    addRemoveClass("#toolsbody", "toolsbody", false);
    addRemoveClass(".rhistory" + ((new Date().getTime() % 3) + 1), "d-none", true);
}
function DoTerms() {
    Reset();
    addRemoveClass("#terms", "d-none", true);
    addRemoveClass("#checktools", "d-none", false);
    addRemoveClass("#pdtools", "d-none", false);
}
function DoPrivacy() {
    Reset();
    addRemoveClass("#privacy", "d-none", true);
    addRemoveClass("#checktools", "d-none", false);
    addRemoveClass("#pdtools", "d-none", false);
}
["privacy", "privacy2"].indexOf(path) >= 0 && DoPrivacy(n),
    ["terms", "terms2"].indexOf(path) >= 0 && DoTerms(n),
    ["maintenance", "maintenance2"].indexOf(path) >= 0 && DoMaintenance(n),
    ["search"].indexOf(path) >= 0 && DoSearch(n),
    ["convertanimation"].indexOf(path) >= 0 && DoAnimation(n),
    ["convertshuffle"].indexOf(path) >= 0 && DoShuffle(n),
    $(".custom-file-input").on("change", function () {
        var formattedChosenQuestion = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(formattedChosenQuestion);
    });
let countBox = 3;
const boxTitle = 3;
const boxName = 3;
let last = 0;
let didEvents = false;
function addInput() {
    const e = {
        QyxoY: '<label for="',
        NOUUb: '" class="custom-file-input" id="',
    };
    const n = e;
    if ((8 == countBox && showAddField("none"), countBox <= 8)) {
        var a = "inputGroupFile" + countBox;
        var bigdialogbox = '<div class="mb-3" id="field_' + countBox + '">';
        bigdialogbox =
            (bigdialogbox =
                (bigdialogbox = bigdialogbox + (n.QyxoY + "imgname") + countBox + '" data-localize=tools.image>image (' + countBox + "):</label>") +
                '<div class="custom-file"><input type="file" name="file' +
                countBox +
                n.NOUUb +
                a +
                '"/>') +
            '<label class="custom-file-label" for="' +
            a +
            '" data-localize=tools.selectimg>Select image</label></div></div>';
        document.getElementById("addfield").innerHTML += bigdialogbox;
        localize();
    }
    last = 3 == countBox ? countBox : countBox - 1;
    countBox = countBox + 1;
    updateBin();
}
function updateBin() {
    var fieldName = countBox - 1;
    var oCalen = document.getElementById("field_" + fieldName);
    var ast = document.getElementById("field_" + last);
    if (ast) {
        var tokens;
        var exMap = document.getElementById("bin_" + last);
        (tokens = ast.children)[1].classList.remove("customWidth");
        if (exMap) {
            exMap.remove();
        }
    }
    if (oCalen) {
        (tokens = oCalen.children[1]).classList += " customWidth";
        tokens.innerHTML += '<a id="bin_' + fieldName + '" class="bin" onclick="removeField(' + fieldName + ')"><img src="../src/img/navbar/remove.svg"></a>';
    }
}
function removeField(fieldName) {
    var exMap = document.getElementById("field_" + fieldName);
    if (exMap) {
        exMap.remove();
        last = countBox = countBox - 1;
        updateBin();
        if (countBox <= 8) {
            showAddField("");
        }
    }
}
function showAddField(val) {
    document.getElementById("add_field").style.display = val;
}
let uri = "https://rxat.ro/web_gear/chat/search2.php?cb=" + Math.random();
let previousTime = 0;
let previousValue = null;
function handleSearch() {
    if ((resetSearch(), listener.search)) {
        return;
    }
    let doc = document.getElementById("searchValue");
    let el_form_login_form = document.getElementById("searchSubmit");
    let openLoginScreenBtn = document.getElementById("butpreviousresults");
    if (null != el_form_login_form) {
        el_form_login_form.addEventListener("submit", (event) => {
            event.preventDefault();
            if (doc.value) {
                sendSearchParams(filter(doc.value), true);
            }
        });
    }
    if (null != openLoginScreenBtn) {
        openLoginScreenBtn.addEventListener("click", (event) => {
            event.preventDefault();
            if (doc.value) {
                sendSearchParams(filter(previousValue), false);
            }
        });
    }
    listener.search = true;
}
function resetSearch() {
    previousTime = 0;
    previousValue = null;
    let uiMsg = document.getElementById("searchValue");
    document.querySelector("[data-search-results] div").innerHTML = "";
    uiMsg.value = "";
    addRemoveClass("[data-search-results]", "d-none", false);
    addRemoveClass("#butpreviousresults", "d-none", false);
    addRemoveClass("[data-no-result-div]", "d-none", false);
    addRemoveClass("#searcherror", "d-none", false);
    addRemoveClass("#searchloading", "d-none", false);
}
function sendSearchParams(currentValue, min) {
    if (!currentValue) {
        return;
    }
    let requestToFetch = uri + "&search=" + currentValue;
    if (previousTime > 0 && currentValue == previousValue && !min) {
        requestToFetch = requestToFetch + "&from=" + (previousTime + 1);
    }
    addRemoveClass("#searchloading", "d-none", true);
    addRemoveClass("[data-no-result-div]", "d-none", false);
    fetch(requestToFetch)
        .then(function (rawResp) {
            return rawResp.json();
        })
        .then(function ($sub) {
            setTimeout(function () {
                handleSearchResults($sub.Err);
                addRemoveClass("#searchloading", "d-none", false);
            }, 1e3);
        })
        .catch((canCreateDiscussions) => {
            addRemoveClass("#searcherror", "d-none", true);
            addRemoveClass("#searchloading", "d-none", false);
        });
    previousValue = currentValue;
}
function handleSearchResults(res) {
    const n = {};
    n.LUjqv = '            <div class="card">                <div class="card-header">                    <div class="clearfix">                        <img src="';
    n.OZqop = '</a>                </div>            </div>            <br>        ';
    const frame = n;
    var err;
    var first_close_delims;
    if (!res) {
        return;
    }
    let lines = res.results || [];
    let onPlanet = document.querySelector("[data-search-results] div");
    if (
        ((onPlanet.innerHTML = ""),
        addRemoveClass("[data-search-results]", "d-none", !res.nores && !(null == res || null == (err = res.Err) ? void 0 : err.search2)),
        addRemoveClass("#butpreviousresults", "d-none", !(lines && lines.length < 5)),
        addRemoveClass("[data-no-result-div]", "d-none", !!res.nores),
        null == res || null == (first_close_delims = res.Err) ? void 0 : first_close_delims.search2)
    ) {
        addRemoveClass("#searcherror", "d-none", true);
    } else {
        if (!res.nores) {
            for (let i = 0; i < lines.length; i++) {
                var tempProp;
                const props = lines[i].split(",");
                let cap = props[6].split("##");
                let asciiBuffer = props[5].split("##")[0];
                if (asciiBuffer) {
                    asciiBuffer = asciiBuffer.replace(/ *\([^)]*\) */g, "").replace(/\((.+)$/, "");
                }
                let _variableCollection = GetTimeToGo(1e3 * props[1]);
                let d = null == (tempProp = props[4]) ? void 0 : tempProp.split(";");
                let c = d[1] > 0 ? " (" + d[1] + ")" : "";
                let lw = "https://images.weserv.nl/?q=100&url=" + encodeURIComponent(cap) + "&default=" + xConfig.origin + xConfig.dir + "img/xatspace/default.png";
                if (cap[0] > 0 && cap[0] <= 1758) {
                    lw = "https://rxat.ro/web_gear/chat/av/" + cap[0] + ".png";
                }
                if (cap[0] && "(" == cap[0].charAt(0)) {
                    lw = xConfig.dir + "img/xatspace/default.png";
                }
                onPlanet.innerHTML +=
                    frame.LUjqv + lw + '" width="30" height="30" class="pull-left img-responsive mr-2">                        <span>' + filter(asciiBuffer.length > 0 ? asciiBuffer : d[0]) + " <small>[" + d[0] + c + ']</small></span>                    </div>                </div>                <div class="card-block px-2">                    <p class="card-text mt-2 mb-2">' + filter(props[7]) + '</p>                </div>                <div class="w-100"></div>                <div class="card-footer w-100 text-muted">                   <span data-localize="' + _variableCollection[0] + '">' + _variableCollection[1].replace("$1", _variableCollection[2]) + '</span> @ <a href="' + xConfig.origin + "/" + props[2] + '" target="_blank">' + xConfig.origin.replace("https://", "") + "/" + props[2] + frame.OZqop;
                if (i + 1 == lines.length) {
                    previousTime = parseInt(props[1]);
                }
            }
            document.querySelector("#searchSubmit").scrollIntoView({
                behavior: "smooth",
            });
        }
    }
}
function handleAnimation() {
    const e = {};
    e.YzjCd = '            <div class="card">                <div class="card-header">                    <div class="clearfix">                        <img src="';
    e.geVey = '</a>                </div>            </div>            <br>        ';
    const evenHead = e;
    if (listener.animation) {
        return;
    }
    let openLoginScreenBtn = document.querySelector("#animation #convert");
    let doc = document.querySelector("#animateName");
    let fileButtonElement = document.querySelector("#animateFile");
    let content = false;
    if (null != fileButtonElement) {
        fileButtonElement.addEventListener("change", (event) => {
            var fileNameInput;
            content = false;
            addRemoveClass("#animation_error", "d-none", false);
            let files = null == event || null == (fileNameInput = event.target) ? void 0 : fileNameInput.files;
            if (files.length) {
                if (files[0].type && "image/gif" !== files[0].type) {
                    addRemoveClass("#animation_error", "d-none", true);
                } else {
                    const reader = new FileReader();
                    reader.onload =
                        (files[0],
                        (reader) => {
                            content = reader.target;
                        });
                    reader.readAsDataURL(files[0]);
                }
            }
        });
    }
    if (null != openLoginScreenBtn) {
        openLoginScreenBtn.addEventListener("click", (event) => {
            const oddList = {};
            if (((oddList.ySmdC = evenHead.YzjCd), (oddList.iwzuW = evenHead.geVey), event.preventDefault(), !content)) {
                return;
            }
            let params = content.result.split(",");
            const media = {};
            media.gif = params[1];
            addRemoveClass("#animationloading", "d-none", true);
            addRemoveClass("#animationreqerror", "d-none", false);
            urlPost("https://web.rxat.ro/web_gear/chat/ConvertAnimation2.php", media)
                .then(function (data) {
                    if ((addRemoveClass("#animationloading", "d-none", false), data.Err.Error)) {
                        return doErrorMsg($("#animationerror"), data.Err.Error);
                    }
                    if (data.Err.data) {
                        params[1] = data.Err.data;
                        let templink = document.createElement("a");
                        templink.href = params.join(",");
                        templink.download = doc.value.length > 0 ? filter(doc.value) : "My Avatar";
                        templink.click();
                    }
                })
                .catch(function (canCreateDiscussions) {
                    addRemoveClass("#animationloading", "d-none", false);
                    addRemoveClass("#animationreqerror", "d-none", true);
                });
        });
    }
    listener.animation = true;
}
function handleShuffle() {
    initInputEvents();
}
function GetTimeToGo(date, length) {
    if (0 == date) {
        return "";
    }
    let begin = Math.floor((new Date() - date) / 1e3);
    return (begin = parseInt(begin)) <= 0
        ? ["tools.justnow", "just now"]
        : begin < 60
        ? ["tools.secsago", "$1 secs ago", begin]
        : begin < 120
        ? ["tools.minago", "$1 min ago", 1]
        : begin < 3600
        ? ["tools.minsago", "$1 mins ago", parseInt(begin / 60)]
        : begin < 86400
        ? ["tools.hoursago", "$1 hours ago", parseInt(begin / 3600)]
        : length
        ? new Date(date).toUTCString()
        : ["tools.daysago", "$1 days ago", parseInt(begin / 86400)];
}
function addRemoveClass(element, string, node) {
    if (!element) {
        return;
    }
    let prettyPrintButton = document.querySelector(element);
    return prettyPrintButton ? (node ? prettyPrintButton.classList.remove(string) : prettyPrintButton.classList.add(string)) : void 0;
}
function initInputEvents() {
    if (!didEvents) {
        document.getElementById("add_field").addEventListener("click", function (event) {
            event.preventDefault();
            addInput();
        });
        didEvents = true;
    }
}
DoTask(location.hash.substr(2));
