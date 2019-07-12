exports.command = function(selector, callback) {
    var client = this;
    /*
    / Use Javascript's click when Selenium's does not register.
    */
    client.execute("document.querySelector('" + selector + "').click();", function(result) {
        if (typeof callback === 'function') {
            callback.call(client, result);
        }
    });

    return this;
};

// const EventEmitter = require('events');

// class TriggerClick extends EventEmitter {
//     command(selector, cb) {
//         if (!selector) {
//             return this;
//         }

//         this.api.execute('document.querySelector("' + selector + '").click();', (result) => {
//             if (cb) {
//                 cb.call(this.api, result);
//             }

//             this.emit('complete');
//         });

//         return this;

//     }
// }


// module.exports = TriggerClick;