var Oids = (function () {
    function Oids() {
        var _this = this;
        var oids = {
            '1.3.6.1.5.5.7.3.2': { 'd': 'clientAuth', 'c': 'ssl client certificate' },
            '1.2.643.2.2.3': { 'd': 'gostSignature', 'c': 'ГОСТ Р 34.10-2001 / ГОСТ Р 34.11-1994 (256)' },
            '1.2.643.2.2.4': { 'd': 'gost94Signature', 'c': 'ГОСТ Р 34.10-94 / ГОСТ Р 34.11-94' },
            '1.2.643.2.2.19': { 'd': 'gostPublicKey', 'c': 'ГОСТ Р 34.10-2001' },
            '1.2.643.2.2.20': { 'd': 'gost94PublicKey', 'c': 'ГОСТ Р 34.10-94' },
            '1.2.643.2.2.21': { 'd': 'gostCipher', 'c': 'ГОСТ 28147-89' },
            '1.2.643.7.1.1.1.1': { 'd': 'id-tc26-gost3410-12-256', 'c': 'ГОСТ Р 34.10-2012 с ключом 256' },
            '1.2.643.7.1.1.1.2': { 'd': 'id-tc26-gost3410-12-512', 'c': 'ГОСТ Р 34.10-2012 с ключом 512' },
            '1.2.643.7.1.1.3.2': { 'd': 'id-tc26-signwithdigest-gost3410-12-256', 'c': 'ГОСТ Р 34.10-2012 с ключом 256 с хэшированием по ГОСТ Р 34.11-2012' },
            '1.2.643.7.1.1.3.3': { 'd': 'id-tc26-signwithdigest-gost3410-12-512', 'c': 'ГОСТ Р 34.10-2012 с ключом 512 с хэшированием по ГОСТ Р 34.11-2012' },
            '1.2.643.2.2.31.0': { 'd': 'testCipherParams', 'c': 'Test params for GOST 28147-89' },
            '1.2.643.2.2.31.1': { 'd': 'cryptoProCipherA', 'c': 'CryptoPro params A for GOST 28147-89' },
            '1.2.643.2.2.31.2': { 'd': 'cryptoProCipherB', 'c': 'CryptoPro params B for GOST 28147-89' },
            '1.2.643.2.2.31.3': { 'd': 'cryptoProCipherC', 'c': 'CryptoPro params C for GOST 28147-89' },
            '1.2.643.2.2.31.4': { 'd': 'cryptoProCipherD', 'c': 'CryptoPro params D for GOST 28147-89' },
            '1.2.643.2.2.9': { 'd': 'gostDigest', 'c': 'GOST R 34.11-94 digest' },
            '1.2.643.2.2.30.1': { 'd': 'cryptoProDigestA', 'c': 'CryptoPro digest params for GOST R 34.11-94' },
            '1.2.643.2.2.35.1': { 'd': 'cryptoProSignA', 'c': 'CryptoPro ell.curve A for GOST R 34.11-2001' },
            '1.2.643.2.2.35.2': { 'd': 'cryptoProSignB', 'c': 'CryptoPro ell.curve B for GOST R 34.11-2001' },
            '1.2.643.2.2.35.3': { 'd': 'cryptoProSignC', 'c': 'CryptoPro ell.curve C for GOST R 34.11-2001' },
            '1.2.643.2.2.36.0': { 'd': 'cryptoProSignXA', 'c': 'CryptoPro ell.curve XA for GOST R 34.11-2001' },
            '1.2.643.2.2.36.1': { 'd': 'cryptoProSignXB', 'c': 'CryptoPro ell.curve XB for GOST R 34.11-2001' },
            '1.2.643.100.5': { 'd': 'OGRNIP', 'c': 'ОГРНИП', t: 'NUMERICSTRING' },
            '1.2.643.100.1': { 'd': 'OGRN', 'c': 'ОГРН', t: 'NUMERICSTRING' },
            '1.2.643.100.3': { 'd': 'SNILS', 'c': 'СНИЛС', t: 'NUMERICSTRING' },
            '1.2.643.3.131.1.1': { 'd': 'INN', 'c': 'ИНН', t: 'NUMERICSTRING' },
            '2.5.4.0': { 'd': 'objectClass', 'c': 'Класс объекта' },
            '2.5.4.1': { 'd': 'aliasedEntryName', 'c': 'Алиас' },
            '2.5.4.2': { 'd': 'knowledgeInformation', 'c': 'X.520 DN component' },
            '2.5.4.3': { 'd': 'commonName', 'c': 'CN', t: 'UTF8STRING' },
            '2.5.4.4': { 'd': 'surname', 'c': 'SN', t: 'UTF8STRING' },
            '2.5.4.5': { 'd': 'serialNumber', 'c': 'serialNumber' },
            '2.5.4.6': { 'd': 'countryName', 'c': 'C', t: 'PRINTABLESTRING' },
            '2.5.4.7': { 'd': 'localityName', 'c': 'L', t: 'UTF8STRING' },
            '2.5.4.7.1': { 'd': 'collectiveLocalityName', 'CL': 'X.520 DN component' },
            '2.5.4.8': { 'd': 'stateOrProvinceName', 'c': 'ST', t: 'UTF8STRING' },
            '2.5.4.8.1': { 'd': 'collectiveStateOrProvinceName', 'CST': 'X.520 DN component' },
            '2.5.4.9': { 'd': 'streetAddress', 'c': 'STREET', t: 'UTF8STRING' },
            '2.5.4.9.1': { 'd': 'collectiveStreetAddress', 'CSTREET': 'X.520 DN component' },
            '2.5.4.10': { 'd': 'organizationName', 'c': 'O', t: 'UTF8STRING' },
            '2.5.4.10.1': { 'd': 'collectiveOrganizationName', 'c': 'CO', t: 'UTF8STRING' },
            '2.5.4.11': { 'd': 'organizationalUnitName', 'c': 'OU', t: 'UTF8STRING' },
            '2.5.4.11.1': { 'd': 'collectiveOrganizationalUnitName', 'c': 'COU', t: 'UTF8STRING' },
            '2.5.4.12': { 'd': 'title', 'c': 'T', t: 'UTF8STRING' },
            '2.5.4.13': { 'd': 'description', 'c': 'D' },
            '2.5.4.32': { 'd': 'owner', 'c': 'OWNER' },
            '2.5.4.33': { 'd': 'roleOccupant', 'c': 'RO' },
            '2.5.4.34': { 'd': 'seeAlso', 'c': 'X.520 DN component' },
            '2.5.4.39': { 'd': 'certificateRevocationList', 'c': 'CRL' },
            '2.5.4.40': { 'd': 'crossCertificatePair', 'c': 'X.520 DN component' },
            '2.5.4.41': { 'd': 'name', 'c': 'X.520 DN component', t: 'UTF8STRING' },
            '2.5.4.42': { 'd': 'givenName', 'c': 'GN', t: 'UTF8STRING' },
            '2.5.4.43': { 'd': 'initials', 'c': 'X.520 DN component', t: 'UTF8STRING' },
            '0.2.262.1.10.7.28': { 'd': 'emailAddress', 'c': 'E' },
            '2.5.29.14': { 'd': 'subjectKeyIdentifier', 'c': 'X.509 extension' },
            '1.2.840.113549.1.9.1': { 'd': 'emailAddress', 'c': 'E', t: 'IA5STRING' },
            '2.5.29.15': { 'd': 'keyUsage', 'c': 'X.509 extension' },
            '2.5.29.16': { 'd': 'privateKeyUsagePeriod', 'c': 'X.509 extension' },
            '2.5.29.17': { 'd': 'subjectAltName', 'c': 'X.509 extension' },
            '2.5.29.18': { 'd': 'issuerAltName', 'c': 'X.509 extension' },
            '2.5.29.19': { 'd': 'basicConstraints', 'c': 'X.509 extension' },
            '2.5.29.20': { 'd': 'cRLNumber', 'c': 'X.509 extension' },
            '2.5.29.21': { 'd': 'cRLReason', 'c': 'X.509 extension' },
            '2.5.29.22': { 'd': 'expirationDate', 'c': 'X.509 extension.' },
            '2.5.29.23': { 'd': 'instructionCode', 'c': 'X.509 extension' },
            '2.5.29.24': { 'd': 'invalidityDate', 'c': 'X.509 extension' },
            '2.5.29.25': { 'd': 'cRLDistributionPoints', 'c': 'X.509 extension.  Deprecated, use 2 5 29 31 instead' },
            '2.5.29.26': { 'd': 'issuingDistributionPoint', 'c': 'X.509 extension.  Deprecated, use 2 5 29 28 instead' },
            '2.5.29.27': { 'd': 'deltaCRLIndicator', 'c': 'X.509 extension' },
            '2.5.29.28': { 'd': 'issuingDistributionPoint', 'c': 'X.509 extension' },
            '2.5.29.29': { 'd': 'certificateIssuer', 'c': 'X.509 extension' },
            '2.5.29.30': { 'd': 'nameConstraints', 'c': 'X.509 extension' },
            '2.5.29.31': { 'd': 'cRLDistributionPoints', 'c': 'X.509 extension' },
            '2.5.29.32': { 'd': 'certificatePolicies', 'c': 'X.509 extension' },
            '2.5.29.32.0': { 'd': 'anyPolicy', 'c': 'X.509 certificate policy' },
            '2.5.29.33': { 'd': 'policyMappings', 'c': 'X.509 extension' },
            '2.5.29.34': { 'd': 'policyConstraints', 'c': 'X.509 extension.  Deprecated, use 2 5 29 36 instead' },
            '2.5.29.35': { 'd': 'authorityKeyIdentifier', 'c': 'X.509 extension' },
            '2.5.29.36': { 'd': 'policyConstraints', 'c': 'X.509 extension' },
            '2.5.29.37': { 'd': 'extKeyUsage', 'c': 'X.509 extension' },
            '2.5.29.37.0': { 'd': 'anyExtendedKeyUsage', 'c': 'X.509 extended key usage' },
            '2.5.29.38': { 'd': 'authorityAttributeIdentifier', 'c': 'X.509 extension' },
            '2.5.29.39': { 'd': 'roleSpecCertIdentifier', 'c': 'X.509 extension' },
            '2.5.29.40': { 'd': 'cRLStreamIdentifier', 'c': 'X.509 extension' },
            '2.5.29.41': { 'd': 'basicAttConstraints', 'c': 'X.509 extension' },
            '2.5.29.42': { 'd': 'delegatedNameConstraints', 'c': 'X.509 extension' },
            '2.5.29.43': { 'd': 'timeSpecification', 'c': 'X.509 extension' },
            '2.5.29.44': { 'd': 'cRLScope', 'c': 'X.509 extension' },
            '2.5.29.45': { 'd': 'statusReferrals', 'c': 'X.509 extension' },
            '2.5.29.46': { 'd': 'freshestCRL', 'c': 'X.509 extension' },
            '2.5.29.47': { 'd': 'orderedList', 'c': 'X.509 extension' },
            '2.5.29.48': { 'd': 'attributeDescriptor', 'c': 'X.509 extension' },
            '2.5.29.49': { 'd': 'userNotice', 'c': 'X.509 extension' },
            '2.5.29.50': { 'd': 'sOAIdentifier', 'c': 'X.509 extension' },
            '2.5.29.51': { 'd': 'baseUpdateTime', 'c': 'X.509 extension' },
            '2.5.29.52': { 'd': 'acceptableCertPolicies', 'c': 'X.509 extension' },
            '2.5.29.53': { 'd': 'deltaInfo', 'c': 'X.509 extension' },
            '2.5.29.54': { 'd': 'inhibitAnyPolicy', 'c': 'X.509 extension' },
            '2.5.29.55': { 'd': 'targetInformation', 'c': 'X.509 extension' },
            '2.5.29.56': { 'd': 'noRevAvail', 'c': 'X.509 extension' },
            '2.5.29.57': { 'd': 'acceptablePrivilegePolicies', 'c': 'X.509 extension' },
            '2.5.29.58': { 'd': 'toBeRevoked', 'c': 'X.509 extension' },
            '2.5.29.59': { 'd': 'revokedGroups', 'c': 'X.509 extension' },
            '2.5.29.60': { 'd': 'expiredCertsOnCRL', 'c': 'X.509 extension' },
            '2.5.29.61': { 'd': 'indirectIssuer', 'c': 'X.509 extension' },
            '2.5.29.62': { 'd': 'noAssertion', 'c': 'X.509 extension' },
            '2.5.29.63': { 'd': 'aAissuingDistributionPoint', 'c': 'X.509 extension' },
            '2.5.29.64': { 'd': 'issuedOnBehalfOf', 'c': 'X.509 extension' },
            '2.5.29.65': { 'd': 'singleUse', 'c': 'X.509 extension' },
            '2.5.29.66': { 'd': 'groupAC', 'c': 'X.509 extension' },
            '2.5.29.67': { 'd': 'allowedAttAss', 'c': 'X.509 extension' },
            '2.5.29.68': { 'd': 'attributeMappings', 'c': 'X.509 extension' },
            '2.5.29.69': { 'd': 'holderNameConstraints', 'c': 'X.509 extension' },
            '1.2.840.113549.1.7': { 'd': 'pkcs-7', 'c': '' },
            '1.2.840.113549.1.7.1': { 'd': 'data', 'c': 'PKCS #7' },
            '1.2.840.113549.1.7.2': { 'd': 'signedData', 'c': 'PKCS #7' },
            '1.2.840.113549.1.7.3': { 'd': 'envelopedData', 'c': 'PKCS #7' },
            '1.2.840.113549.1.7.4': { 'd': 'signedAndEnvelopedData', 'c': 'PKCS #7' },
            '1.2.840.113549.1.7.5': { 'd': 'digestedData', 'c': 'PKCS #7' },
            '1.2.840.113549.1.7.6': { 'd': 'encryptedData', 'c': 'PKCS #7' },
            '1.2.840.113549.1.7.7': { 'd': 'dataWithAttributes', 'c': 'PKCS #7 experimental' },
            '1.2.840.113549.1.7.8': { 'd': 'encryptedPrivateKeyInfo', 'c': 'PKCS #7 experimental' },
            '1.2.840.113549.1.9.14': { 'd': 'extensionRequest', 'c': 'PKCS #9 via CRMF' },
            '1.2.840.113549.1.9.16.1': { 'd': 'contentType', 'c': 'S/MIME' },
            '1.2.840.113549.1.9.2': { 'd': 'unstructuredName', 'c': 'PKCS #9' },
            '1.2.840.113549.1.9.3': { 'd': 'contentType', 'c': 'PKCS #9' },
            '1.2.840.113549.1.9.4': { 'd': 'messageDigest', 'c': 'PKCS #9' },
            '1.2.840.113549.1.9.5': { 'd': 'signingTime', 'c': 'PKCS #9' },
            '1.2.840.113549.1.9.6': { 'd': 'countersignature', 'c': 'PKCS #9' },
            '1.2.840.113549.1.9.7': { 'd': 'challengePassword', 'c': 'PKCS #9' },
            '1.2.840.113549.1.9.8': { 'd': 'unstructuredAddress', 'c': 'PKCS #9' },
            '1.2.840.113549.1.9.9': { 'd': 'extendedCertificateAttributes', 'c': 'PKCS #9' },
            '1.2.840.113549.1.9.10': { 'd': 'issuerAndSerialNumber', 'c': 'PKCS #9 experimental' },
            '1.2.840.113549.1.9.11': { 'd': 'passwordCheck', 'c': 'PKCS #9 experimental' },
            '1.2.840.113549.1.9.12': { 'd': 'publicKey', 'c': 'PKCS #9 experimental' },
            '1.2.840.113549.1.9.13': { 'd': 'signingDescription', 'c': 'PKCS #9' },
            '2.16.840.1.113730.1.1': { 'd': 'netscape-cert-type', 'c': 'Netscape certificate extension' }
        };
        var keyUsages = {
            'digitalSignature': 'Цифровая подпись',
            'nonRepudiation': 'Неотрекаемость',
            'contentCommitment': 'Неотрекаемость',
            'keyEncipherment': 'Шифрование ключей',
            'dataEncipherment': 'Шифрование данных',
            'keyAgreement': 'Согласование ключей',
            'keyCertSign': 'Проверка подписей',
            'cRLSign': 'Проверка подписей CRL',
            'encipherOnly': 'Зашифрование',
            'decipherOnly': 'Расшифрование'
        };
        for (var oid in oids) {
            oids[oids[oid].d] = oids[oid];
        }
        this.info = function (oidid) {
            return oids[oidid] || { 'd': 'unknownOid', 'c': 'Неизвестное использование ключа (' + oidid + ')' };
        };
        var pad = function (s) { return (s < 10) ? '0' + s : s; };
        var getDateFormated = function (dateText) {
            var d = new Date(dateText);
            return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('-') + ' ' + [pad(d.getHours()), pad(d.getMinutes())].join(':');
        };
        this.parseCertRt = function (cert) {
            var result = {};
            var html = ['<ul class=certForPrint>'];
            var pk = (cert.text.match(/X:(.*)/i)[1] + cert.text.match(/Y:(.*)/i)[1]);
            result.version = {
                text: 'Версия',
                value: cert.text.match(/Version: (\d+)/i)[1]
            };
            result.signalgorithm = {
                text: 'Алгоритм подписи',
                value: cert.text.match(/Signature Algorithm: (.*)/i)[1]
            };
            result.pubKeyAlgorithm = {
                text: 'Алгоритм открытого ключа',
                value: cert.text.match(/Public Key Algorithm: (.*)/i)[1],
                sub: {
                    text: 'Параметры открытого ключа',
                    value: cert.text.match(/Parameter set: (.*)/i)[1]
                }
            };
            result.pubKeyLength = {
                text: 'Длина открытого ключа',
                value: pk.length * 8 + ' бит'
            };
            result.pubKey = {
                text: 'Открытый ключ',
                value: pk.match(/.{2}/g).join(' ')
            };
            var certplain = cert.text.replace(/\n/g, '');
            result.crl = {
                text: 'Точки распространения списков отзыва',
                value: cert.text.substr(cert.text.lastIndexOf('CRL Distribution Points:')).split(/\n/).map(function (el) { return el.trim().toLowerCase(); }).filter(function (el) { return el.indexOf('.crl') == el.length - 4; })
            };
            result.signature = {
                text: 'Подпись',
                value: cert.text.substr(cert.text.lastIndexOf('Signature Algorithm:')).split(/\n/).splice(1).map(function (el) { return el.trim(); }).join('')
            };
            result.valid = {};
            for (var prop in cert) {
                switch (prop) {
                    case 'serialNumber':
                        result.serialNumber = {
                            text: 'Серийный номер',
                            value: cert[prop]
                        };
                        break;
                    case 'issuer':
                        result.isuuer = {
                            text: 'Поставщик',
                            value: cert[prop].map(function (dn) { return ({
                                rdn: dn.rdn,
                                value: dn.value,
                                text: _this.info(dn.rdn).c
                            }); })
                        };
                        break;
                    case 'subject':
                        result.subject = {
                            text: 'Субъект',
                            value: cert[prop].map(function (dn) { return ({
                                rdn: dn.rdn,
                                value: dn.value,
                                text: _this.info(dn.rdn).c
                            }); })
                        };
                        break;
                    case 'validNotAfter':
                        result.valid.notAfter = {
                            text: 'Дата окончания действия',
                            value: getDateFormated(cert[prop])
                        };
                        break;
                    case 'validNotBefore':
                        result.valid.notBefore = {
                            text: 'Дата начала действия',
                            value: getDateFormated(cert[prop])
                        };
                        break;
                    case 'extensions':
                        result.extensions = {
                            text: 'Расширения сертификата',
                            keyUsage: {
                                text: 'Использование ключа',
                                value: cert[prop].keyUsage ? cert[prop].keyUsage.map(function (ku) { return keyUsages[ku]; }) : []
                            },
                            extKeyUsage: {
                                text: 'Улучшенный ключ',
                                value: cert[prop].extKeyUsage ? cert[prop].extKeyUsage.map(function (ku) { return _this.info(ku).c; }) : []
                            },
                            certificatePolicies: {
                                text: 'Класс СКЗИ',
                                value: cert[prop].certificatePolicies ? cert[prop].certificatePolicies.map(function (ku) { return _this.info(ku).c; }) : []
                            },
                            subjectSignTool: {
                                text: 'Средство электронной подписи владельца',
                                value: cert[prop].subjectSignTool
                            }
                        };
                        break;
                    default:
                        break;
                }
            }
            if (result.version)
                html.push('<li><b>' + result.version.text + '</b><br />' + result.version.value + '</li>');
            if (result.serialNumber)
                html.push('<li><b>' + result.serialNumber.text + '</b><br />' + result.serialNumber.value + '</li>');
            if (result.signalgorithm)
                html.push('<li><b>' + result.signalgorithm.text + '</b><br />' + result.signalgorithm.value + '</li>');
            html.push('<li><b>' + result.isuuer.text + '</b>');
            html.push('<ul>');
            result.isuuer.value.forEach(function (dn) {
                html.push('<li><b>' + dn.text + '</b>=' + dn.value + '</li>');
            });
            html.push('</ul></li>');
            html.push('<li><b>' + result.valid.notBefore.text + '</b> ' + result.valid.notBefore.value + '</li>');
            html.push('<li><b>' + result.valid.notAfter.text + '</b> ' + result.valid.notAfter.value + '</li>');
            html.push('<li><b>' + result.subject.text + '</b>');
            html.push('<ul>');
            result.subject.value.forEach(function (dn) {
                html.push('<li><b>' + dn.text + '</b>=' + dn.value + '</li>');
            });
            html.push('</ul></li>');
            if (result.pubKeyAlgorithm)
                html.push('<li><b>' + result.pubKeyAlgorithm.text + '</b><br />' + result.pubKeyAlgorithm.value + '<ul><li><b>' + result.pubKeyAlgorithm.sub.text + '</b><br />' + result.pubKeyAlgorithm.sub.value + '</li></ul></li>');
            if (result.pubKeyLength)
                html.push('<li><b>' + result.pubKeyLength.text + '</b><br />' + result.pubKeyLength.value + '</li>');
            if (result.pubKey)
                html.push('<li><b>' + result.pubKey.text + '</b><br />' + result.pubKey.value + '</li>');
            if (result.extensions) {
                html.push('<li><b>' + result.extensions.text + '</b>');
                html.push('<ul>');
                if (result.extensions.keyUsage) {
                    html.push('<li><b>' + result.extensions.keyUsage.text + '</b><br />');
                    result.extensions.keyUsage.value.forEach(function (ku) {
                        html.push(ku);
                        html.push(', ');
                    });
                    html.pop();
                    html.push('</li>');
                }
                if (result.extensions.extKeyUsage) {
                    html.push('<li><b>' + result.extensions.extKeyUsage.text + '</b>');
                    html.push('<ul>');
                    result.extensions.extKeyUsage.value.forEach(function (ku) {
                        html.push('<li>' + ku + '</li>');
                    });
                    html.push('</ul></li>');
                }
                if (result.extensions.certificatePolicies) {
                    html.push('<li><b>' + result.extensions.certificatePolicies.text + '</b>');
                    html.push('<ul>');
                    result.extensions.certificatePolicies.value.forEach(function (ku) {
                        html.push('<li>' + ku + '</li>');
                    });
                    html.push('</ul></li>');
                }
                if (result.extensions.subjectSignTool.value) {
                    html.push('<li><b>' + result.extensions.subjectSignTool.text + '</b> ' + result.extensions.subjectSignTool.value + '</li>');
                }
            }
            if (result.crl.value.length > 0) {
                html.push('<li><b>' + result.extensions.extKeyUsage.text + '</b>');
                html.push('<ul>');
                result.extensions.extKeyUsage.value.forEach(function (ku) {
                    html.push('<li>' + ku + '</li>');
                });
                html.push('</ul></li>');
            }
            html.push('</ul></li>');
            if (result.signature)
                html.push('<li><b>' + result.signature.text + '</b><br />' + result.signature.value + '</li>');
            html.push('</ul>');
            var htmlplain = html.join('');
            return { result: result, htmlplain: htmlplain };
        };
    }
    return Oids;
}());