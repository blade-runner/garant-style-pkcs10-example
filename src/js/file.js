var FileSave = (function () {
    function FileSave() {
        var showSave, blob, dlattr = 'download' in document.createElement('a');
        var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
        navigator.saveBlob = navigator.saveBlob || navigator.msSaveBlob || navigator.mozSaveBlob || navigator.webkitSaveBlob;
        function getBinaryContent(text) {
            var saveType = 'text/plain';
            return new Blob([text], {
                type: saveType
            });
        }
        // ie
        if (window.Blob && navigator.saveBlob) {
            showSave = function (text, name, type) {
                name = name || 'certificate.txt';
                navigator.saveBlob(getBinaryContent(text, type), name);
            };
        }
        else if (window.Blob && URL) {
            showSave = function (text, name, type) {
                blob = getBinaryContent(text, type);
                var url;
                if (dlattr) {
                    url = URL.createObjectURL(blob);
                    var link = document.createElement("a");
                    link.setAttribute("href", url);
                    link.setAttribute("download", name || "certificate.txt");
                    var event = document.createEvent('MouseEvents');
                    event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
                    link.dispatchEvent(event);
                }
                else {
                    url = URL.createObjectURL(blob);
                    window.open(url, '_blank', '');
                }
                setTimeout(function () {
                    URL.revokeObjectURL(url);
                }, 200);
            };
        }
        else {
            showSave = function (text, name, type) {
                var frame = document.createElement('iframe');
                document.body.appendChild(frame);
                frame.contentWindow.document.open("text/html", "replace");
                frame.contentWindow.document.write(text);
                frame.contentWindow.document.close();
                frame.contentWindow.focus();
                frame.contentWindow.document.execCommand('SaveAs', true, name);
                document.body.removeChild(frame);
            };
        }
        this.saveFile = function (text, filename) {
            showSave(text, (filename || 'certificate' + '_' + (new Date()).getMilliseconds()));
        };
    }
    return FileSave;
}());