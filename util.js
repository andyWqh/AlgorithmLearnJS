/// <reference path="jquery-1.11.0.min.js" />

String.prototype.replaceAll = function (s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2);
};
String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
};
String.prototype.CleanHtmlTag = function () {
    return this.replace(/<[^<>]*>/g, "");
};
String.prototype.lenCn = function () {
    return this.replace(/[^\x00-\xff]/g, 'xx').length;
};
String.prototype.subCn = function (sublen) {
    var lc = this.lenCn();
    if (lc > 2 * sublen) {
        return this.substr(0, this.length - (lc - 2 * sublen) / 2);
    }
    return this;
};
String.prototype.Cut = function (sublen) {
    if (this.length > sublen) {
        return this.substr(0, sublen);
    }
    return this;
};
String.prototype.format = function (args) {
    if (arguments.length > 0) {
        var result = this;
        var reg;
        if (arguments.length == 1 && args != null && typeof (args) == "object") {
            for (var key in args) {
                reg = new RegExp("([{]" + key + "[}])", "g");
                result = result.replace(reg, args[key] == null ? "" : args[key]);
            }
        } else {
            for (var i = 0; i < arguments.length; i++) {
                reg = new RegExp("([{]" + i + "[}])", "g");
                result = result.replace(reg, arguments[i] == null ? "" : arguments[i]);
            }
        }
        return result;
    } else {
        return this;
    }
};
String.prototype.contains = function (str) {
    return this.indexOf(str) > -1 ? true : false;
};
String.prototype.endWith = function (str) {
    if (str == null || str == "" || this.length == 0 || str.length > this.length)
        return false;
    if (this.substring(this.length - str.length) == str)
        return true;
    else
        return false;
};
String.prototype.startWith = function (str) {
    if (str == null || str == "" || this.length == 0 || str.length > this.length)
        return false;
    if (this.substr(0, str.length) == str)
        return true;
    else
        return false;
};
String.prototype.isEmail = function () {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
    return reg.test(this);
};
String.prototype.isUrl = function () {
    var reg = /http:\/\/.+/;
    return reg.test(this);
};
String.prototype.isMobile = function () {
    var reg = /^1[3456789]\d{9}$/;
    return reg.test(this);
};
String.prototype.isDateTime = function () {
    var reg = /^((20)|(19))\d{2}[-]((0[1-9])|(1[0-2]))[-]((0[1-9])|([1-2][0-9])|(3[0-1]))\s(([0-1][0-9])|(2[0-3])):(([0-4][0-9])|(5[0-9])):(([0-4][0-9])|(5[0-9]))$/;
    return reg.test(this);
};
String.prototype.encode = function () {
    var monyer = [];
    for (var i = 0; i < this.length; i++) {
        monyer.push(this.charCodeAt(i).toString(10));
    }
    return monyer.join("l");
};
String.prototype.decode = function () {
    var monyer = [];
    var s = this.split("l");
    for (var i = 0; i < s.length; i++) {
        monyer.push(String.fromCharCode(parseInt(s[i], 10)));
    }
    return monyer.join("");
};

Array.max = function (array) {
    return Math.max.apply(Math, array);
};
Array.min = function (array) {
    return Math.min.apply(Math, array);
};
Array.prototype.contains = function (element) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == element) {
            return true;
        }
    }
    return false;
};
Array.prototype.select = Array.prototype.map || function (fn) {
    var r = [];
    for (var i = 0; i < this.length; i++)
        r[i] = fn(this[i]);
    return r;
};
Array.prototype.where = function (fn, isIndex) {
    if (fn == undefined)
        return this;
    isIndex = isIndex || false;
    var r = [];
    for (var i = 0; i < this.length; i++)
        if (fn(this[i])) {
            r.push(isIndex ? i : this[i]);
        }
    return r;
};
Array.prototype.distinct = function (fn) {
    var r = [];
    var s = fn == undefined ? this : this.select(fn);
    var str = s.select(function (a) { return "§" + a + "§" }).join("");
    for (var i = 0; i < s.length; i++) {
        if (str.indexOf(s[i]) > -1) {
            r.push(this[i]);
            str = str.replaceAll(s[i], "");
        }
    }
    return r;
};
Date.prototype.format = function (args) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(),    //day
        "H+": this.getHours(),   //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "S": this.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(args))
        args = args.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) if (new RegExp("(" + k + ")").test(args))
        args = args.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    return args;
};

function combination(arr, num) {
    var r = [];
    (function f(t, a, n) {
        if (n == 0) return r.push(t);
        for (var i = 0, l = a.length; i <= l - n; i++) {
            f(t.concat(a[i]), a.slice(i + 1), n - 1);
        }
    })([], arr, num);
    return r;
}
function getUrlParameters() {
    var e,
        a = /\+/g,
        r = /([^&;=]+)=?([^&;]*)/g,
        d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
        q = window.location.search.replace(/^\?/ig, "");

    var urlParams = {};
    while (e = r.exec(q))
        urlParams[d(e[1]).toLowerCase()] = d(e[2]);

    return urlParams;
}
function getQueryString(paramName) {
    paramName = paramName.toLowerCase();
    var urlParams = getUrlParameters();
    return urlParams[paramName];
}

function addBookmark(title, url) {
    if (window.sidebar) {
        window.sidebar.addPanel(title, url, "");
    } else if (document.all) {
        window.external.AddFavorite(url, title);
    } else {
        alert("您的浏览器不支持自动加入收藏夹，请使用浏览器菜单手动加入");
    }
};

jQuery.ajaxReq = function (opt) {
    var defaults = { url: "test.html", timeout: 10000, type: "post", async: true, inModified: false };
    var param = $.extend(defaults, opt);
    $.ajax(param);
};

function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) {
        return unescape(arr[2]);
    } else {
        return "";
    }
}

function setCookie(name, value, seconds) {
    if (seconds != undefined && seconds > 0) {
        var date = new Date();
        date.setTime(date.getTime() + seconds * 1000);
        document.cookie = name + "=" + value + "; path=/; expires=" + date.toGMTString();
    } else {
        document.cookie = name + "=" + value + "; path=/;";
    }
}

function getCookieEnable() {
    return navigator.cookieEnabled;
}

var ajaxTimeOut = 120000;
function showProcess(info) {
    var h = document.documentElement.clientHeight;
    var h2 = document.body.scrollHeight;
    h = h > h2 ? h : h2;
    h -= 220;
    if (info == undefined) {
        info = "正在加载数据...";
    }
    var p = $("<div style=\"position:absolute;top:0px;left:0px;width:100%;z-index:99999;padding-top:200px;text-align:center;background-color:#eee;opacity:0.6;filter:'progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75';\"></div>");
    p.css("height", h + "px");
    p.append("<img src='Images/loader.gif'/><span id='processInfo'>" + info + "</span>");
    var t = $("<span>0</span>");
    p.append(t);
    $(document.body).append(p);
    return [setInterval(function () {
        t.text(parseInt(t.text()) + 1);
    }, 1000), p];
}

function Pagebars(jq, totalpage, pageSize, pageIndex, callback) {
    if (window.lastPageIndex && totalpage > window.lastPageIndex) {
        window.lastPageIndex = totalpage;
    }

    var pagebar = "<table border='0' cellpadding='0' cellspacing='0' class='pg-pagebars'><tr>";
    pagebar += "<td><a href='javascript:void(0)' class='pg-pagefirst'{0}></a></td><td><a href='javascript:void(0)' class='pg-pageup'{1}></a></td>".format(totalpage > 0 && pageIndex != 1 ? " index='1'" : "", pageIndex > 1 ? " index='{0}'".format(pageIndex - 1) : "");
    if (totalpage == 1) {
        pagebar += "<td><a href='javascript:void(0)' class='pg-pagenum1'>1</a></td>";
    }
    else if (totalpage > 1 && totalpage < 6) {
        for (var i = 1; i <= totalpage; i++) {
            pagebar += "<td><a href='javascript:void(0)' {0}>{1}</a></td>".format(pageIndex == i ? "class='pg-pagenum1'" : "class='pg-pagenum' index='{0}'".format(i), i);
        }
    }
    else if (totalpage >= 6) {
        var end = pageIndex <= 3 ? 5 : pageIndex * 1 + 2;
        end = end > totalpage ? totalpage : end;

        for (var i = end - 4; i <= end; i++) {
            pagebar += "<td><a href='javascript:void(0)' {0}>{1}</a></td>".format(pageIndex == i ? "class='pg-pagenum1'" : "class='pg-pagenum' index='{0}'".format(i), i);
        }
    }
    pagebar += "<td><input type='text' name='textfield' class='pg-pageinput' /></td><td><a href='javascript:void(0)' class='pg-pagego'>GO</a></td>";
    pagebar += "<td><a href='javascript:void(0)' class='pg-pagedown'{0}></a></td><td><a href='javascript:void(0)' class='pg-pagelast'{1}></a></td>".format(totalpage > pageIndex ? " index='{0}'".format(pageIndex + 1) : "", totalpage > 0 && totalpage != pageIndex ? " index='{0}'".format(totalpage) : "");
    pagebar += "<td><a href='javascript:void(0)'>每页{0}条,共{1}页</a></td>".format(pageSize, totalpage);
    pagebar += "</tr></table>";
    jq.html(pagebar);

    jq.find(".pg-pageinput").keyup(function () {
        var valText = isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        if (valText < 1) valText = 1;
        if (valText > totalpage) valText = totalpage;
        $(this).val(totalpage > 0 ? valText : "");
    });
    jq.find("a[index]").click(function () {
        var pageIndex = $(this).attr("index");
        window.lastPageIndex = pageIndex;
        callback(pageIndex, pageSize);
    }).each(function () {
        var img = $(this).css("background-image");
        if (img != "none") $(this).css("background-image", img.replace(".gif", "1.gif"));
    });
    jq.find("a.pg-pagego").click(function () {
        var valText = isNaN(parseInt(jq.find(".pg-pageinput").val())) ? 0 : parseInt(jq.find(".pg-pageinput").val());
        window.lastPageIndex = valText;
        if (valText > 0 && valText <= totalpage && pageIndex != valText) callback(valText, pageSize);
    });
}

