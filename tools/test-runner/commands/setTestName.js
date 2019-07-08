exports.command = function(name, callback) {
    var client = this;
    /*
    / Use Javascript's click when Selenium's does not register.
    */
    client.execute(`
        window.ipcRenderer.send('command', JSON.stringify({
            key: 'setTestName',
            data: '${name}'
        }));
    `, function(result) {
        if (typeof callback === 'function') {
            callback.call(client, result);
        }
    });

    return this;
};
