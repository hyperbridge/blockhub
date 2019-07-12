const { ipcRenderer } = require('electron')

function initNetworkIntercept() {
    let send = XMLHttpRequest.prototype.send

    XMLHttpRequest.prototype.send = function(data) {
        let self = this
        let oldOnReadyStateChange

        function onReadyStateChange() {
            if(self.readyState == 4 /* complete */) {
                /* This is where you can put code that you want to execute post-complete*/
                /* URL is kept in this._url */

                // Get the raw header string
                let rawHeaders = self.getAllResponseHeaders()

                // Convert the header string into an array
                // of individual headers
                let headers = rawHeaders.trim().split(/[\r\n]+/)

                window.ipcRenderer.send('command', JSON.stringify({
                    key: 'interceptedRequest',
                    data: {
                        statusCode: self.status,
                        headers: headers,
                        url: self.responseURL,
                        body: self.responseText
                    }
                }))
            }

            if(oldOnReadyStateChange) {
                oldOnReadyStateChange()
            }
        }

        /* Set xhr.noIntercept to true to disable the interceptor for a particular call */
        if(!this.noIntercept) {
            if(this.addEventListener) {
                this.addEventListener("readystatechange", onReadyStateChange, false)
            } else {
                oldOnReadyStateChange = this.onreadystatechange
                this.onreadystatechange = onReadyStateChange
            }
        }

        send.call(this, data)
    }
}

function init() {
    // add global letiables to your web page
    window.isElectron = true
    window.ipcRenderer = ipcRenderer
    window.specialRequire = require

    let env = null

    window.ipcRenderer.on('command', (event, msg) => {
        const cmd = JSON.parse(msg)

        if (cmd.key === 'init') {
            env = cmd.env
        }
    })

    initNetworkIntercept()

    delete window.require
}

init()
