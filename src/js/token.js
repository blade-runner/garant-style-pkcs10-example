var App = (function () {
    function App() {
        var _this = this;
        this.ctrls = {};
        this.device = {};
        $('[id]').each(function (i, item) {
            _this.ctrls[item.id] = $(item);
        });
        this.console = this.ctrls.console;
        this.ctrls.generate.click(function () {
            _this.generate();
        });
        this.ctrls.loginbtn.click(function () {
            _this.login();
        });
        this.ctrls.import.click(function () {
            _this.import();
        });
        this.ctrls.parse.click(function () {
            _this.parse();
        });
        this.ctrls.save.click(function () {
            _this.save();
        });
        this.ctrls.genkey.click(function () {
            _this.genkey();
        });
        this.Oids = new Oids();
        this.FileSave = new FileSave();

        $(".section").tabs({
            select: function () {

            }
        });

        $(".section").tabs("option", "active", 1);

    }
    App.prototype.fromHex = function (str) {
        return (":" + str).split(':').reduce(function (str, i) {
            return str + String.fromCharCode('0x' + i);
        });
    };

    App.prototype.toHex = function (str) {
        var hex = [];
        for (var i = 0; i < str.length; i++) {
            hex.push(str.charCodeAt(i).toString(16));
        }
        return hex.join(':');
    };

    App.prototype.showInfo = function (text, isError) {
        text = text.message ? (this.errorDescription[text.message] || text.message) : ((this.errorDescription && this.errorDescription[text]) || text);
        var str = '<span class=" ' + (isError ? 'error' : '') + ' ">' + (text + '').replace(/\n/g, "<br>") + '</span><br />';
        this.console.html(this.console.html() + str);
        this.console.scrollTop(this.console[0].scrollHeight);
    };
    App.prototype.init = function (plugin) {
        this.plugin = plugin;
        this.errorDescription = [];
        this.errorCodes = this.plugin.errorCodes;
        this.errorDescription[this.errorCodes.UNKNOWN_ERROR] = "Неизвестная ошибка";
        this.errorDescription[this.errorCodes.BAD_PARAMS] = "Неправильные параметры";
        this.errorDescription[this.errorCodes.NOT_ENOUGH_MEMORY] = "Недостаточно памяти";
        this.errorDescription[this.errorCodes.DEVICE_NOT_FOUND] = "Устройство не найдено";
        this.errorDescription[this.errorCodes.DEVICE_ERROR] = "Ошибка устройства";
        this.errorDescription[this.errorCodes.TOKEN_INVALID] = "Ошибка чтения/записи устройства. Возможно, устройство было извлечено. Попробуйте выполнить enumerate";
        this.errorDescription[this.errorCodes.CERTIFICATE_CATEGORY_BAD] = "Недопустимый тип сертификата";
        this.errorDescription[this.errorCodes.CERTIFICATE_EXISTS] = "Сертификат уже существует на устройстве";
        this.errorDescription[this.errorCodes.CERTIFICATE_NOT_FOUND] = "Сертификат не найден";
        this.errorDescription[this.errorCodes.CERTIFICATE_HASH_NOT_UNIQUE] = "Хэш сертификата не уникален";
        this.errorDescription[this.errorCodes.CA_CERTIFICATES_NOT_FOUND] = "Корневые сертификаты не найдены";
        this.errorDescription[this.errorCodes.CERTIFICATE_VERIFICATION_ERROR] = "Ошибка проверки сертификата";
        this.errorDescription[this.errorCodes.PKCS11_LOAD_FAILED] = "Не удалось загрузить PKCS#11 библиотеку";
        this.errorDescription[this.errorCodes.PIN_LENGTH_INVALID] = "Некорректная длина PIN-кода";
        this.errorDescription[this.errorCodes.PIN_INCORRECT] = "Некорректный PIN-код";
        this.errorDescription[this.errorCodes.PIN_LOCKED] = "PIN-код заблокирован";
        this.errorDescription[this.errorCodes.PIN_CHANGED] = "PIN-код был изменен";
        this.errorDescription[this.errorCodes.SESSION_INVALID] = "Состояние токена изменилось";
        this.errorDescription[this.errorCodes.USER_NOT_LOGGED_IN] = "Выполните вход на устройство";
        this.errorDescription[this.errorCodes.ALREADY_LOGGED_IN] = "Вход на устройство уже был выполнен";
        this.errorDescription[this.errorCodes.ATTRIBUTE_READ_ONLY] = "Свойство не может быть изменено";
        this.errorDescription[this.errorCodes.KEY_NOT_FOUND] = "Соответствующая сертификату ключевая пара не найдена";
        this.errorDescription[this.errorCodes.KEY_ID_NOT_UNIQUE] = "Идентификатор ключевой пары не уникален";
        this.errorDescription[this.errorCodes.CEK_NOT_AUTHENTIC] = "Выбран неправильный ключ";
        this.errorDescription[this.errorCodes.KEY_LABEL_NOT_UNIQUE] = "Метка ключевой пары не уникальна";
        this.errorDescription[this.errorCodes.WRONG_KEY_TYPE] = "Неправильный тип ключа";
        this.errorDescription[this.errorCodes.LICENCE_READ_ONLY] = "Лицензия доступна только для чтения";
        this.errorDescription[this.errorCodes.DATA_INVALID] = "Неверные данные";
        this.errorDescription[this.errorCodes.UNSUPPORTED_BY_TOKEN] = "Операция не поддерживается токеном";
        this.errorDescription[this.errorCodes.KEY_FUNCTION_NOT_PERMITTED] = "Операция запрещена для данного типа ключа";
        this.errorDescription[this.errorCodes.BASE64_DECODE_FAILED] = "Ошибка декодирования даных из BASE64";
        this.errorDescription[this.errorCodes.PEM_ERROR] = "Ошибка разбора PEM";
        this.errorDescription[this.errorCodes.ASN1_ERROR] = "Ошибка декодирования ASN1 структуры";
        this.errorDescription[this.errorCodes.FUNCTION_REJECTED] = "Операция отклонена пользователем";
        this.errorDescription[this.errorCodes.FUNCTION_FAILED] = "Невозможно выполнить операцию";
        this.errorDescription[this.errorCodes.MECHANISM_INVALID] = "Указан неправильный механизм";
        this.errorDescription[this.errorCodes.ATTRIBUTE_VALUE_INVALID] = "Передан неверный атрибут";
        this.errorDescription[this.errorCodes.X509_UNABLE_TO_GET_ISSUER_CERT] = "Невозможно получить сертификат подписанта";
        this.errorDescription[this.errorCodes.X509_UNABLE_TO_GET_CRL] = "Невозможно получить CRL";
        this.errorDescription[this.errorCodes.X509_UNABLE_TO_DECRYPT_CERT_SIGNATURE] = "Невозможно расшифровать подпись сертификата";
        this.errorDescription[this.errorCodes.X509_UNABLE_TO_DECRYPT_CRL_SIGNATURE] = "Невозможно расшифровать подпись CRL";
        this.errorDescription[this.errorCodes.X509_UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY] = "Невозможно раскодировать открытый ключ эмитента";
        this.errorDescription[this.errorCodes.X509_CERT_SIGNATURE_FAILURE] = "Неверная подпись сертификата";
        this.errorDescription[this.errorCodes.X509_CRL_SIGNATURE_FAILURE] = "Неверная подпись CRL";
        this.errorDescription[this.errorCodes.X509_CERT_NOT_YET_VALID] = "Срок действия сертификата еще не начался";
        this.errorDescription[this.errorCodes.X509_CRL_NOT_YET_VALID] = "Срок действия CRL еще не начался";
        this.errorDescription[this.errorCodes.X509_CERT_HAS_EXPIRED] = "Срок действия сертификата истек";
        this.errorDescription[this.errorCodes.X509_CRL_HAS_EXPIRED] = "Срок действия CRL истек";
        this.errorDescription[this.errorCodes.X509_ERROR_IN_CERT_NOT_BEFORE_FIELD] = "Некорректные данные в поле \"notBefore\" у сертификата";
        this.errorDescription[this.errorCodes.X509_ERROR_IN_CERT_NOT_AFTER_FIELD] = "Некорректные данные в поле \"notAfter\" у сертификата";
        this.errorDescription[this.errorCodes.X509_ERROR_IN_CRL_LAST_UPDATE_FIELD] = "Некорректные данные в поле \"lastUpdate\" у CRL";
        this.errorDescription[this.errorCodes.X509_ERROR_IN_CRL_NEXT_UPDATE_FIELD] = "Некорректные данные в поле \"nextUpdate\" у CRL";
        this.errorDescription[this.errorCodes.X509_OUT_OF_MEM] = "Нехватает памяти";
        this.errorDescription[this.errorCodes.X509_DEPTH_ZERO_SELF_SIGNED_CERT] = "Недоверенный самоподписанный сертификат";
        this.errorDescription[this.errorCodes.X509_SELF_SIGNED_CERT_IN_CHAIN] = "В цепочке обнаружен недоверенный самоподписанный сертификат";
        this.errorDescription[this.errorCodes.X509_UNABLE_TO_GET_ISSUER_CERT_LOCALLY] = "Невозможно получить локальный сертификат подписанта";
        this.errorDescription[this.errorCodes.X509_UNABLE_TO_VERIFY_LEAF_SIGNATURE] = "Невозможно проверить первый сертификат";
        this.errorDescription[this.errorCodes.X509_CERT_CHAIN_TOO_LONG] = "Слишком длинная цепочка сертификатов";
        this.errorDescription[this.errorCodes.X509_CERT_REVOKED] = "Сертификат отозван";
        this.errorDescription[this.errorCodes.X509_INVALID_CA] = "Неверный корневой сертификат";
        this.errorDescription[this.errorCodes.X509_INVALID_NON_CA] = "Неверный некорневой сертфикат, помеченный как корневой";
        this.errorDescription[this.errorCodes.X509_PATH_LENGTH_EXCEEDED] = "Превышена длина пути";
        this.errorDescription[this.errorCodes.X509_PROXY_PATH_LENGTH_EXCEEDED] = "Превышина длина пути прокси";
        this.errorDescription[this.errorCodes.X509_PROXY_CERTIFICATES_NOT_ALLOWED] = "Проксирующие сертификаты недопустимы";
        this.errorDescription[this.errorCodes.X509_INVALID_PURPOSE] = "Неподдерживаемое назначение сертификата";
        this.errorDescription[this.errorCodes.X509_CERT_UNTRUSTED] = "Недоверенный сертификат";
        this.errorDescription[this.errorCodes.X509_CERT_REJECTED] = "Сертифкат отклонен";
        this.errorDescription[this.errorCodes.X509_APPLICATION_VERIFICATION] = "Ошибка проверки приложения";
        this.errorDescription[this.errorCodes.X509_SUBJECT_ISSUER_MISMATCH] = "Несовпадения субьекта и эмитента";
        this.errorDescription[this.errorCodes.X509_AKID_SKID_MISMATCH] = "Несовпадение идентификатора ключа у субьекта и доверенного центра";
        this.errorDescription[this.errorCodes.X509_AKID_ISSUER_SERIAL_MISMATCH] = "Несовпадение серийного номера субьекта и доверенного центра";
        this.errorDescription[this.errorCodes.X509_KEYUSAGE_NO_CERTSIGN] = "Ключ не может быть использован для подписи сертификатов";
        this.errorDescription[this.errorCodes.X509_UNABLE_TO_GET_CRL_ISSUER] = "Невозможно получить CRL подписанта";
        this.errorDescription[this.errorCodes.X509_UNHANDLED_CRITICAL_EXTENSION] = "Неподдерживаемое расширение";
        this.errorDescription[this.errorCodes.X509_KEYUSAGE_NO_CRL_SIGN] = "Ключ не может быть использован для подписи CRL";
        this.errorDescription[this.errorCodes.X509_KEYUSAGE_NO_DIGITAL_SIGNATURE] = "Ключ не может быть использован для цифровой подписи";
        this.errorDescription[this.errorCodes.X509_UNHANDLED_CRITICAL_CRL_EXTENSION] = "Неподдерживаемое расширение CRL";
        this.errorDescription[this.errorCodes.X509_INVALID_EXTENSION] = "Неверное или некорректное расширение сертификата";
        this.errorDescription[this.errorCodes.X509_INVALID_POLICY_EXTENSION] = "Неверное или некорректное расширение политик сертификата";
        this.errorDescription[this.errorCodes.X509_NO_EXPLICIT_POLICY] = "Явные политики отсутствуют";
        this.errorDescription[this.errorCodes.X509_DIFFERENT_CRL_SCOPE] = "Другая область CRL";
        this.errorDescription[this.errorCodes.X509_UNSUPPORTED_EXTENSION_FEATURE] = "Неподдерживаемое расширение возможностей";
        this.errorDescription[this.errorCodes.X509_UNNESTED_RESOURCE] = "RFC 3779 неправильное наследование ресурсов";
        this.errorDescription[this.errorCodes.X509_PERMITTED_VIOLATION] = "Неправильная структура сертифката";
        this.errorDescription[this.errorCodes.X509_EXCLUDED_VIOLATION] = "Неправильная структура сертфиката";
        this.errorDescription[this.errorCodes.X509_SUBTREE_MINMAX] = "Неправильная структура сертифката";
        this.errorDescription[this.errorCodes.X509_UNSUPPORTED_CONSTRAINT_TYPE] = "Неправильная структура сертфиката";
        this.errorDescription[this.errorCodes.X509_UNSUPPORTED_CONSTRAINT_SYNTAX] = "Неправильная структура сертифката";
        this.errorDescription[this.errorCodes.X509_UNSUPPORTED_NAME_SYNTAX] = "Неправильная структура сертфиката";
        this.errorDescription[this.errorCodes.X509_CRL_PATH_VALIDATION_ERROR] = "Неправильный путь CRL";
        this.errorDescription[this.errorCodes.CMS_CERTIFICATE_ALREADY_PRESENT] = "Сертификат уже используется";
        this.errorDescription[this.errorCodes.CANT_HARDWARE_VERIFY_CMS] = "Проверка множественной подписи с вычислением хеша на устройстве не поддерживается";
        this.showInfo('Ищем устройства');
        this.enumerateDevices(0);
    };
    App.prototype.enumerateDevices = function (times) {
        var _this = this;
        times = +times + 1;
        this.plugin.enumerateDevices().then(function (ids) {
            if (ids.length === 0) {
                if (times == 1) {
                    _this.showInfo('<div class="loader">Ожидаем подключения устройства<span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span></div>');
                }
                setTimeout(function () {
                    _this.enumerateDevices(times);
                }, 1000);
            } else {
                _this.showInfo('Найдено устройств - ' + ids.length);
                _this.getDevicesInfo(ids);
            }
        }).then(undefined, function (err) {
            _this.showInfo(err, true);
        });
    };
    App.prototype.getDevicesInfo = function (ids) {
        var _this = this;
        ids.forEach(function (id) {
            _this.plugin.getDeviceInfo(id, _this.plugin.TOKEN_INFO_LABEL).then(function (label) {
                if (label == "Rutoken ECP <no label>") {
                    label = "Rutoken ECP #" + id.toString();
                }
                _this.ctrls.devSelect.append($("<option>", {
                    'value': id
                }).text(label));
            });
        });
        this.ctrls.step1.removeClass('invisible');
    };
    App.prototype.genkey = function () {
        var _this = this;
        if (_this.ctrls.ckaidlabel.val().trim() == '' || _this.ctrls.keylabel.val().trim() == '') {
            _this.showInfo('Поля Id ключа и Маркер ключа не могут быть пустыми', true);
            return;
        }
        var marker = _this.ctrls.keylabel.val();
        var options = {
            publicKeyAlgorithm: _this.plugin.PUBLIC_KEY_ALGORITHM_GOST3410_2001,
            paramset: 'A',
            signatureSize: 512,
            id: _this.toHex(_this.ctrls.ckaidlabel.val())
        };
        _this.ctrls.keylabel.val('');
        _this.ctrls.ckaidlabel.val('');
        this.showInfo('Генерируем ключ...');
        this.plugin.generateKeyPair(_this.device.id, undefined, marker, options)
            .then(function (res) {
                _this.showInfo('Сгенерирован ключ с id ' + res);
                _this.login();
            })
            .then(undefined, function (err) {
                _this.showInfo(err, true);
            });


    };
    App.prototype.login = function () {
        var _this = this;
        this.ctrls.keySelect.empty();
        var pincode = this.ctrls.pincode.val();
        if (pincode == '') {
            this.showInfo('Введите PIN-код', true);
            return;
        }
        this.ctrls.loginbtn.prop("disabled", true);
        this.showInfo('Выполняем вход на устройство');
        this.device.id = this.ctrls.devSelect.val();
        this.plugin.getDeviceInfo(this.device.id, this.plugin.TOKEN_INFO_IS_LOGGED_IN)
            .then(function (result) {
                if (result) {
                    return _this.plugin.logout(_this.device.id);
                } else {
                    return true;
                }
            })
            .then(function (result) {
                return _this.plugin.removePin(_this.device.id);
            })
            .then(function (result) {
                return _this.plugin.login(_this.device.id, pincode);
            })
            .then(function () {
                _this.showInfo('Читаем ключи на устройстве...');
                return _this.plugin.enumerateKeys(_this.device.id, '');
            })
            .then(function (keys) {

                if (keys.length > 0) {
                    _this.showInfo('Выберите ключ для создания запроса');
                    $(".section").tabs("option", "disabled", false);
                } else {
                    _this.showInfo('На выбранном устройстве нет ключей', true);
                    $(".section").tabs("option", "active", 0);
                    $(".section").tabs("option", "disabled", [1, 2]);
                    _this.showInfo('На устройстве нет ключей.', true);
                }

                keys.forEach(function (key) {
                    _this.ctrls.keySelect.append($("<option>", {
                        'value': key
                    }).text(_this.fromHex(key)));
                });

                _this.ctrls.loginbtn.prop("disabled", false);
                _this.ctrls.step2.removeClass('invisible');
            }).then(undefined, function (err) {
                _this.ctrls.loginbtn.prop("disabled", false);
                _this.showInfo(err, true);
            });
    };
    App.prototype.generate = function () {
        var _this = this;
        this.showInfo('Генерируем запрос...');
        this.device.keyid = this.ctrls.keySelect.val();

        this.ctrls.iCRR.val('');
        var subj, eku;
        var subject = [],
            extensions = {
                keyUsage: [],
                extKeyUsage: [],
                certificatePolicies: []
            },
            options = {
                'hashAlgorithm': this.plugin.HASH_TYPE_GOST3411_94
            };
        try {
            subj = Decoder.base64Decode(this.ctrls.iCRS.val());
        } catch (error) {
            this.showInfo('Ошибка декодирования данных SUBJECT', true);
            return;
        }
        subject = subj.split(';').map(function (s) {
            var subItem = s.split(/=(.+)/);
            return {
                'rdn': subItem[0].trim().replace('OID.', ''),
                'value': subItem[1].replace(/(^\"|\"$)/mg, '')
            };
        });
        try {
            eku = Decoder.base64Decode(this.ctrls.iCRE.val());
        } catch (error) {
            this.showInfo('Ошибка декодирования данных EKU', true);
            return;
        }
        extensions.extKeyUsage = eku.split(',');
        this.plugin.createPkcs10(this.device.id, this.device.keyid, subject, extensions, options)
            .then(function (res) {
                _this.showInfo('Запрос сгенерирован');
                _this.ctrls.iCRR.val(res);
            }, function (err, a, b) {
                _this.showInfo(err, true);
            });
    };
    App.prototype.import = function () {
        var _this = this;
        this.showInfo('Импортируем сертификат');
        var value = $(".radio-input:radio[name=certificate-category]:checked").val();
        var certType;
        switch (value) {
            case "user":
                certType = this.plugin.CERT_CATEGORY_USER;
                break;
            case "ca":
                certType = this.plugin.CERT_CATEGORY_CA;
                break;
            case "other":
                certType = this.plugin.CERT_CATEGORY_OTHER;
                break;
        }
        this.plugin.importCertificate(this.device.id, this.ctrls.certForImport.val(), certType).then(function (certId) {
            _this.showInfo('Сертификат успешно импортирован. Id = ' + certId);
        }).then(undefined, function (err) {
            _this.showInfo(err, true);
        });
    };
    App.prototype.parse = function () {
        var _this = this;
        this.showInfo('Парсим сертификат');
        this.ctrls.certPrint.empty();
        this.plugin.parseCertificateFromString(this.ctrls.certForImport.val()).then(function (res) {
            _this.ctrls.certPrint.html(_this.Oids.parseCertRt(res).htmlplain);
            _this.showInfo('Успешно');
        }).then(undefined, function (err) {
            _this.showInfo(err, true);
        });
    };
    App.prototype.save = function () {
        var _this = this;
        this.showInfo('Парсим сертификат  и сохраняем в файл');
        this.ctrls.certPrint.empty();
        this.plugin.parseCertificateFromString(this.ctrls.certForImport.val()).then(function (res) {
            var result = _this.Oids.parseCertRt(res);
            _this.ctrls.certPrint.html(result.htmlplain);
            var printForm = [
                '<html>    <head>        <meta http-equiv="Content-Type" content="text/html;" />        <title>Сертификат</title>                    <style type="text/css">                body {                    font-family: Arial;                }            </style>            </head>    <body>                    <style type="text/css">        h1 {        	font-size: 9pt;             margin: 0px;             font-family: verdana;             text-align: center        }                h2 {        	font-size: 7pt;             margin: 0px;             font-family: verdana;             text-align: center        }                .foot {        	font-size: 7pt;             font-family: verdana;             text-align: right        }                .note {        	font-size: 7pt;             margin: 0px;             font-family: verdana;             text-decoration: underline        }                p {        	font-size: 6pt;             margin: 0px;             font-family: verdana        }                pre {        	font-size: 6pt;             margin: 0px;             font-family: verdana        }                .left {            float: left;        }                .right {            float: right;        }                .clear {            clear: both;        }    </style><div class="clear"></div><h1><b>Удостоверяющий центр ООО "Электронный экспресс" (УЦ ГАРАНТ)</b></h1><h2><b>Бланк сертификата ключа подписи</b></h2><hr />',
                result.htmlplain,
                '<div class="left"><p class="foot">Подпись уполномоченного лица УЦ ГАРАНТ: ___________/_______________</p><br><p class="foot">"___" ________ 20__ г.</p><br><p class="foot">М. П.</p></div>',
                '<div class="right"><p class="foot">Подпись владельца сертификата: ___________/_______________</p><br><p class="foot">"<u>27</u>" <u>ноября</u> <u>2017</u> г.</p></div>',
            ];
            _this.FileSave.saveFile(printForm.join(''), 'certPrintForm.html');
            _this.showInfo('Успешно');
        }).then(undefined, function (err) {
            _this.showInfo(err, true);
        });
    };
    return App;
}());