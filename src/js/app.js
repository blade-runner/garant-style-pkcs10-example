var app = new App();

$(document).ready(function(){

  
    var BrowserDetect = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
            this.OS = this.searchString(this.dataOS) || "an unknown OS";
        },
        searchString: function (data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1)
                        return data[i].identity;
                } else if (dataProp)
                    return data[i].identity;
            }
        },
        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index == -1) return;
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        },
        dataBrowser: [
            {
                string: navigator.userAgent,
                subString: "Edge",
                identity: "Edge",
                versionSearch: "Edge"
            },
            {
                string: navigator.userAgent,
                subString: "Chrome",
                identity: "Chrome"
            }, {
                string: navigator.userAgent,
                subString: "OmniWeb",
                versionSearch: "OmniWeb/",
                identity: "OmniWeb"
            }, {
                string: navigator.vendor,
                subString: "Apple",
                identity: "Safari",
                versionSearch: "Version"
            }, {
                prop: window.opera,
                identity: "Opera",
                versionSearch: "Version"
            }, {
                string: navigator.vendor,
                subString: "iCab",
                identity: "iCab"
            }, {
                string: navigator.vendor,
                subString: "KDE",
                identity: "Konqueror"
            }, {
                string: navigator.userAgent,
                subString: "Firefox",
                identity: "Firefox",
                versionSearch: "fox"
            }, {
                string: navigator.vendor,
                subString: "Camino",
                identity: "Camino"
            }, { // for newer Netscapes (6+)
                string: navigator.userAgent,
                subString: "Netscape",
                identity: "Netscape"
            },
            {
                string: navigator.userAgent,
                subString: ".NET",
                identity: "Explorer",
                versionSearch: "rv"
            },
            {
                string: navigator.userAgent,
                subString: "MSIE",
                identity: "Explorer",
                versionSearch: "MSIE"
            }, {
                string: navigator.userAgent,
                subString: "Gecko",
                identity: "Mozilla",
                versionSearch: "rv"
            }, { // for older Netscapes (4-)
                string: navigator.userAgent,
                subString: "Mozilla",
                identity: "Netscape",
                versionSearch: "Mozilla"
            }],
        dataOS: [{
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        }, {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        }, {
            string: navigator.userAgent,
            subString: "iPhone",
            identity: "iPhone/iPod"
        }, {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }]

    };
    BrowserDetect.init();

    var noSupportYet = (BrowserDetect.OS.indexOf('Mac') >= 0 || BrowserDetect.OS.indexOf('Linux') >= 0) && BrowserDetect.browser.indexOf('Chrome') >= 0;

    var installNode = document.getElementById('installNode'),
        installreason = document.getElementById('installreason');


    var isFirefox = typeof InstallTrigger !== 'undefined';


    rutoken.ready.then(function () {
        var isChrome = !!window.chrome;
        var verOffset, fullVersion, majorVerison;
        var performCheck = true;
        if (BrowserDetect.browser == 'Edge') throw 'Браузер временно не поддерживается.'
        if (BrowserDetect.browser == 'Firefox') {

            if (!BrowserDetect.OS === "Windows" && BrowserDetect.version >= 53) {
                throw "Firefox 53+ не поддерживается плагином на mac/linux";
            }
            if (BrowserDetect.OS === "Mac" && BrowserDetect.version >= 47) {
                throw "Opera 47+ не поддерживается плагином на MacOS";
            }
            if (BrowserDetect.version < 50)
                performCheck = false;
        }
        if (performCheck && (BrowserDetect.browser == 'Chrome' || BrowserDetect.browser == 'Firefox') && BrowserDetect.OS === "Windows") {//for firefox 50+ only
            return rutoken.isExtensionInstalled();
        } else {
            return Promise.resolve(true);
        }
    }).then(function (result) {
        if (result) {
            return rutoken.isPluginInstalled();
        } else {
            if (noSupportYet) {
                throw "Браузер временно не поддерживается. Пожалуйста, воспользуйтесь браузером Apple Safari или Mozilla Firefox.";
            }
            else if ((BrowserDetect.OS === "Windows" || BrowserDetect.OS === "Mac") && BrowserDetect.browser === "Opera") {
                throw "Установите <a href='https://addons.opera.com/ru/extensions/details/adapter-rutoken-plagin/'>расширение для Opera</a> или убедитесь, что оно активно.";
            } else if (BrowserDetect.browser == 'Firefox' && BrowserDetect.OS === "Windows") {
                throw "Если Рутокен Плагин установлен, включите расширение в настройках браузера. Если нет, установите <a href='http://www.rutoken.ru/support/download/rutoken-plugin/'>Рутокен Плагин</a>.";
            }
            else {
                throw "Установите <a href='https://chrome.google.com/webstore/detail/%D0%B0%D0%B4%D0%B0%D0%BF%D1%82%D0%B5%D1%80-%D1%80%D1%83%D1%82%D0%BE%D0%BA%D0%B5%D0%BD-%D0%BF%D0%BB%D0%B0%D0%B3%D0%B8%D0%BD/ohedcglhbbfdgaogjhcclacoccbagkjg'>расширение для Google Chrome</a> или убедитесь, что оно активно. Если вы используете локальную версию страницы, включите возможность открывать локальные файлы по ссылкам. Это можно сделать в настройках свойста расширения (chrome://extensions)";
            }

        }
    }).then(function (result) {
        if (result) {
            return rutoken.loadPlugin();
        } else {
            if (noSupportYet) {
                throw "Браузер временно не поддерживается. Пожалуйста, воспользуйтесь браузером Apple Safari или Mozilla Firefox.";
            }
            else if ((BrowserDetect.OS === "Windows" || BrowserDetect.OS === "Mac") && BrowserDetect.browser === "Opera") {
                throw "Установите <a href='http://www.rutoken.ru/support/download/rutoken-plugin/'>Рутокен Плагин</a>.";
            }
            else {
                throw "Установите <a href='http://www.rutoken.ru/support/download/rutoken-plugin/'>Рутокен Плагин</a>";
            }
        }
    }).then(function (plugin) {
        app.init(plugin);
    }).then(undefined, function (reason) {
        app.showInfo(reason, true);
    });


});
