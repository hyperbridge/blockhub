exports.command = function(selector, callback) {
    var client = this;
    /*
    / Use Javascript's click when Selenium's does not register.
    */
    client.execute(`
var dateTile     = document.querySelector('${selector}'),
datePosition = dateTile.getBoundingClientRect();

var event = new MouseEvent('mousedown', {
    'view': window,
    'bubbles': true,
    'cancelable': true,
    'screenX': datePosition.left,
    'screenY': datePosition.top
});

dateTile.dispatchEvent(event);
`, function(result) {
        if (typeof callback === 'function') {
            callback.call(client, result);
        }
    });

    return this;
};
