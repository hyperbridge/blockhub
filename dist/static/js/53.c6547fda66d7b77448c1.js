(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./src/framework/chaos-monkey/index.js":
/*!*********************************************!*\
  !*** ./src/framework/chaos-monkey/index.js ***!
  \*********************************************/
/*! exports provided: init, random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });

var config = {
    CHAOS_MONKEY_STRENGTH: null
};

var init = function init(strength) {
    config.CHAOS_MONKEY_STRENGTH = strength;

    if (!config.CHAOS_MONKEY_STRENGTH) {
        config.CHAOS_MONKEY_STRENGTH = Math.floor(Math.random() * 10);
    }
};

var random = function random() {
    var spec = {
        0: (10 - config.CHAOS_MONKEY_STRENGTH) / 100,
        1: config.CHAOS_MONKEY_STRENGTH / 100
    };

    var i = void 0,
        sum = 0,
        r = Math.random();
    for (i in spec) {
        sum += spec[i];
        if (r <= sum) return i ? true : false;
    }
};

/***/ }),

/***/ "./src/framework/peer/index.js":
/*!*************************************!*\
  !*** ./src/framework/peer/index.js ***!
  \*************************************/
/*! exports provided: ID, getPeer, sendCommand, pageContentValidationRequest, pageContentDataRequest, addressBalanceRequest, runCommand, initClient, peerConnect, fetchPeers, monitorPeers, init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ID", function() { return ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPeer", function() { return getPeer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendCommand", function() { return sendCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageContentValidationRequest", function() { return pageContentValidationRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageContentDataRequest", function() { return pageContentDataRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addressBalanceRequest", function() { return addressBalanceRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runCommand", function() { return runCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initClient", function() { return initClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peerConnect", function() { return peerConnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPeers", function() { return fetchPeers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monitorPeers", function() { return monitorPeers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _chaos_monkey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chaos-monkey */ "./src/framework/chaos-monkey/index.js");
/* harmony import */ var _ethereum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ethereum */ "./src/framework/ethereum/index.js");






var _this = undefined;




// declare let require: any
// declare let Promise: any
// declare let window: any
// declare let window: {
//     web3: any;
//     peer: any;
//     pageContentDataRequest: any;
//     addressBalanceRequest: any;
//     peerConnect: any;
//     onunload: any;
//     config: any;
//     onbeforeunload: any;
// }


// declare global {
//     interface Window {
//         web3: any;
//         peer: any;
//         pageContentDataRequest: any;
//         addressBalanceRequest: any;
//         peerConnect: any;
//     }
// }


var Peer = __webpack_require__(/*! peerjs */ "./node_modules/peerjs/lib/peer.js");
var LifeRaft = __webpack_require__(/*! liferaft/index */ "./node_modules/liferaft/index.js");
var md5 = __webpack_require__(/*! js-md5 */ "./node_modules/js-md5/src/md5.js");

var config = {
    RAFT_ENABLED: true,
    ETHEREUM_ENABLED: true,
    DATA_RELAYER_ENABLED: true,
    CHAOS_MONKEY_ENABLED: true,
    CHAOS_MONKEY_STRENGTH: null,
    DARKLAUNCH: {
        NODE_OPERATORS: false
    }
};

var local = {
    raft: null,
    peer: null,
    connectedPeers: {},
    connectingPeers: {},
    peerId: null,
    requests: {},
    pendingData: '',
    peerHost: 'localhost', //'blockhub-peer-server.herokuapp.com',//'0.peerjs.com',
    peerPort: 9000, //80,//9000,
    peerKey: 'nodeOperator'
};

var ID = function ID() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};

var getPeer = function () {
    var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(peerId) {
        var peer;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        peer = local.connectedPeers[peerId];

                        if (peer.open) {
                            _context.next = 5;
                            break;
                        }

                        _context.next = 4;
                        return peerConnect(peerId);

                    case 4:
                        return _context.abrupt('return', new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve) {
                            resolve(peer);
                        }));

                    case 5:

                        babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(peer);

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    return function getPeer(_x) {
        return _ref.apply(this, arguments);
    };
}();

var sendCommand = function () {
    var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(key) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var peer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var responseId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var cb = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        var cmd, peers;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        cmd = {
                            key: key,
                            responseId: responseId,
                            requestId: ID(),
                            data: data
                        };


                        console.log('[PeerService] Sending command', cmd);

                        if (cb) {
                            local.requests[cmd.requestId] = cb;
                        }

                        if (peer) {
                            _context2.next = 8;
                            break;
                        }

                        peers = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(local.connectedPeers);
                        _context2.next = 7;
                        return getPeer(peers[0]);

                    case 7:
                        peer = _context2.sent;

                    case 8:

                        if (!peer) {
                            console.warn('[PeerService] Not connected to peer. This shouldnt happen.');
                        }

                        peer.send(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(cmd));

                    case 10:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, _this);
    }));

    return function sendCommand(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

var pageContentValidationRequest = function () {
    var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(path, content, peer) {
        var hashedContent, data, packet;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        hashedContent = md5(content);
                        data = {
                            path: path
                        };
                        _context3.next = 4;
                        return sendCommand('pageContentValidationRequest', data, peer, null, function (data) {
                            console.log('Page content validation response', data.hash);

                            if (data.hash === hashedContent) {
                                console.log('Successful validation');
                            } else {
                                console.log('Failed validation');
                            }
                        });

                    case 4:

                        if (config.RAFT_ENABLED) {
                            packet = local.raft.packet('vote', data);


                            local.raft.message(LifeRaft.FOLLOWER, packet, function () {
                                console.log('[PeerService] Vote request sent', data);
                            });
                        }

                    case 5:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, _this);
    }));

    return function pageContentValidationRequest(_x7, _x8, _x9) {
        return _ref3.apply(this, arguments);
    };
}();

var pageContentDataRequest = function () {
    var _ref4 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(path, params) {
        var data, peers, peer;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        data = {
                            path: path
                        };
                        peers = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(local.connectedPeers);
                        peer = local.connectedPeers[peers[0]];
                        _context4.next = 5;
                        return sendCommand('pageContentDataRequest', data, null, null, function (data) {
                            console.log('Page content data response', data.content);

                            var peers = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(local.connectedPeers);
                            var dataRelayer = local.connectedPeers[peers[0]];

                            pageContentValidationRequest('/', data.content, dataRelayer);
                        });

                    case 5:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, _this);
    }));

    return function pageContentDataRequest(_x10, _x11) {
        return _ref4.apply(this, arguments);
    };
}();

var addressBalanceRequest = function () {
    var _ref5 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee6(address) {
        var balance, data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        if (!(config.ETHEREUM_ENABLED && config.DATA_RELAYER_ENABLED && _ethereum__WEBPACK_IMPORTED_MODULE_6__["isConnected"]())) {
                            _context6.next = 8;
                            break;
                        }

                        _context6.next = 3;
                        return _ethereum__WEBPACK_IMPORTED_MODULE_6__["getUserBalance"]();

                    case 3:
                        balance = _context6.sent;
                        data = {
                            balance: balance
                        };
                        return _context6.abrupt('return', babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(data));

                    case 8:
                        return _context6.abrupt('return', new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function () {
                            var _ref6 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5(resolve) {
                                var data;
                                return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
                                    while (1) {
                                        switch (_context5.prev = _context5.next) {
                                            case 0:
                                                data = {
                                                    address: address
                                                };
                                                _context5.next = 3;
                                                return sendCommand('addressBalanceRequest', data, null, null, function (data) {
                                                    resolve(data);
                                                });

                                            case 3:
                                            case 'end':
                                                return _context5.stop();
                                        }
                                    }
                                }, _callee5, _this);
                            }));

                            return function (_x13) {
                                return _ref6.apply(this, arguments);
                            };
                        }()));

                    case 9:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, _this);
    }));

    return function addressBalanceRequest(_x12) {
        return _ref5.apply(this, arguments);
    };
}();

var runCommand = function () {
    var _ref7 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee8(cmd) {
        var meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        var data, _data, _data2;

        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        console.log('[PeerService] Running command', cmd.key);

                        if (!cmd.responseId) {
                            _context8.next = 4;
                            break;
                        }

                        if (local.requests[cmd.responseId]) {
                            console.log('[PeerService] Running response callback', cmd.responseId);

                            local.requests[cmd.responseId](cmd.data);

                            delete local.requests[cmd.responseId];
                        }

                        return _context8.abrupt('return');

                    case 4:
                        if (!(cmd.key === 'pageContentValidationRequest')) {
                            _context8.next = 11;
                            break;
                        }

                        data = {
                            hash: md5(document.getElementById('main_navbar').innerHTML)
                        };


                        if (config.CHAOS_MONKEY_ENABLED && _chaos_monkey__WEBPACK_IMPORTED_MODULE_5__["random"]()) {
                            data.hash = 'chaos';
                        }

                        _context8.next = 9;
                        return sendCommand('pageContentValidationResponse', data, meta.client, cmd.requestId);

                    case 9:
                        _context8.next = 27;
                        break;

                    case 11:
                        if (!(cmd.key === 'pageContentDataRequest')) {
                            _context8.next = 17;
                            break;
                        }

                        _data = {
                            content: document.getElementById('main_navbar').innerHTML
                        };
                        _context8.next = 15;
                        return sendCommand('pageContentDataResponse', _data, meta.client, cmd.requestId);

                    case 15:
                        _context8.next = 27;
                        break;

                    case 17:
                        if (!(cmd.key === 'raft')) {
                            _context8.next = 21;
                            break;
                        }

                        local.raft.emit('data', cmd.data, function () {
                            var _ref8 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee7(data) {
                                return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee7$(_context7) {
                                    while (1) {
                                        switch (_context7.prev = _context7.next) {
                                            case 0:
                                                console.log('[PeerService] Packet reply from ' + local.raft.address, data);

                                                _context7.next = 3;
                                                return sendCommand('raft', data, meta.client, cmd.requestId);

                                            case 3:
                                            case 'end':
                                                return _context7.stop();
                                        }
                                    }
                                }, _callee7, _this);
                            }));

                            return function (_x16) {
                                return _ref8.apply(this, arguments);
                            };
                        }());
                        _context8.next = 27;
                        break;

                    case 21:
                        if (!(cmd.key === 'addressBalanceRequest')) {
                            _context8.next = 27;
                            break;
                        }

                        _context8.next = 24;
                        return addressBalanceRequest(cmd.address);

                    case 24:
                        _data2 = _context8.sent;
                        _context8.next = 27;
                        return sendCommand('addressBalanceResponse', _data2, meta.client, cmd.requestId);

                    case 27:
                    case 'end':
                        return _context8.stop();
                }
            }
        }, _callee8, _this);
    }));

    return function runCommand(_x14) {
        return _ref7.apply(this, arguments);
    };
}();

var initClient = function initClient(client) {
    var pendingData = '';

    client.on('call', function (call) {
        console.log('[PeerService] Received call', call);
    });

    client.on('data', function (data) {
        console.log('[PeerService] Received data from', client.peer, data);

        if (data[data.length - 1] === '}') {
            var cmd = JSON.parse(pendingData + data);

            pendingData = '';

            runCommand(cmd, { client: client });
        } else {
            pendingData += data;
        }
    });

    client.on('close', function () {
        console.log('[PeerService] Peer has left', client.peer);

        delete local.connectedPeers[client.peer];

        local.raft.leave(client.peer);
    });

    client.on('error', function (err) {
        console.log('[PeerService] Error', err);
    });
};

var peerConnect = function () {
    var _ref9 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee10(peerId) {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee10$(_context10) {
            while (1) {
                switch (_context10.prev = _context10.next) {
                    case 0:
                        console.log('[PeerService] Connecting to', peerId);

                        local.connectingPeers[peerId] = true;

                        return _context10.abrupt('return', new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve) {
                            var client = local.peer.connect(peerId, {
                                label: 'chat',
                                serialization: 'none',
                                metadata: { message: 'Lets connect' }
                            });

                            client.on('open', function () {
                                console.log('[PeerService] Connected to', peerId);

                                client.open = true;

                                delete local.connectingPeers[peerId];

                                local.connectedPeers[peerId] = client;

                                if (config.RAFT_ENABLED) {
                                    local.raft.join(peerId, function () {
                                        var _ref10 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee9(cmd, cb) {
                                            return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee9$(_context9) {
                                                while (1) {
                                                    switch (_context9.prev = _context9.next) {
                                                        case 0:
                                                            if (!cmd.key) // If no key, then this is a native raft command, so lets wrap it
                                                                cmd = { key: 'raft', data: cmd };

                                                            _context9.next = 3;
                                                            return sendCommand(cmd.key, cmd.data, client, null, cb);

                                                        case 3:
                                                        case 'end':
                                                            return _context9.stop();
                                                    }
                                                }
                                            }, _callee9, _this);
                                        }));

                                        return function (_x18, _x19) {
                                            return _ref10.apply(this, arguments);
                                        };
                                    }());
                                }

                                resolve(client);
                            });

                            initClient(client);
                        }));

                    case 3:
                    case 'end':
                        return _context10.stop();
                }
            }
        }, _callee10, _this);
    }));

    return function peerConnect(_x17) {
        return _ref9.apply(this, arguments);
    };
}();

var fetchPeers = function () {
    var _ref11 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee11() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee11$(_context11) {
            while (1) {
                switch (_context11.prev = _context11.next) {
                    case 0:
                        return _context11.abrupt('return', new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve) {
                            var req = new XMLHttpRequest();

                            req.open('GET', 'http://' + local.peerHost + ':' + local.peerPort + '/' + local.peerKey + '/peers');

                            req.onload = function () {
                                var result = JSON.parse(req.response);

                                console.log('[PeerService] Peers found', result);

                                resolve(result);
                            };

                            req.send();
                        }));

                    case 1:
                    case 'end':
                        return _context11.stop();
                }
            }
        }, _callee11, _this);
    }));

    return function fetchPeers() {
        return _ref11.apply(this, arguments);
    };
}();

var monitorPeers = function monitorPeers() {
    var check = function () {
        var _ref12 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee12() {
            var peers, i, peerId;
            return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee12$(_context12) {
                while (1) {
                    switch (_context12.prev = _context12.next) {
                        case 0:
                            _context12.next = 2;
                            return fetchPeers();

                        case 2:
                            peers = _context12.sent;
                            _context12.t0 = babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.keys(peers);

                        case 4:
                            if ((_context12.t1 = _context12.t0()).done) {
                                _context12.next = 17;
                                break;
                            }

                            i = _context12.t1.value;
                            peerId = peers[i];

                            if (!(peerId == local.peerId)) {
                                _context12.next = 9;
                                break;
                            }

                            return _context12.abrupt('continue', 4);

                        case 9:
                            if (!local.connectedPeers[peerId]) {
                                _context12.next = 11;
                                break;
                            }

                            return _context12.abrupt('continue', 4);

                        case 11:
                            if (!local.connectingPeers[peerId]) {
                                _context12.next = 13;
                                break;
                            }

                            return _context12.abrupt('continue', 4);

                        case 13:
                            _context12.next = 15;
                            return peerConnect(peerId);

                        case 15:
                            _context12.next = 4;
                            break;

                        case 17:

                            setTimeout(check, 2000);

                        case 18:
                        case 'end':
                            return _context12.stop();
                    }
                }
            }, _callee12, _this);
        }));

        return function check() {
            return _ref12.apply(this, arguments);
        };
    }();

    check();
};

var init = function init() {
    console.log('[PeerService] Initializing');

    _chaos_monkey__WEBPACK_IMPORTED_MODULE_5__["init"](config.CHAOS_MONKEY_STRENGTH);

    if (_chaos_monkey__WEBPACK_IMPORTED_MODULE_5__["random"]()) {
        config.DATA_RELAYER_ENABLED = false;
    }

    local.peer = new Peer({
        host: local.peerHost,
        port: local.peerPort,
        secure: false,
        key: local.peerKey,
        debug: 3,
        allow_discovery: true,
        logFunction: function logFunction() {
            var copy = Array.prototype.slice.call(arguments).join(' ');
            console.log(copy);

            if (copy == 'ERROR Error: Lost connection to server.') {
                local.peer.disconnect();
                setTimeout(function () {
                    return local.peer.reconnect();
                }, 200);
            }
        }
    });

    local.peer.on('open', function (id) {
        console.log('[PeerService] Connected', id);

        local.peerId = id;

        local.raft = new LifeRaft(local.peerId, {
            'election min': 2000,
            'election max': 4000,
            'heartbeat min': 1000,
            'heartbeat max': 2000,
            'socket': null
        });

        monitorPeers();
    });

    local.peer.on('call', function (call) {
        console.log('[PeerService] Received call', call);
    });

    local.peer.on('data', function (data) {
        console.log('[PeerService] Received data', data);

        if (data[data.length - 1] === '}') {
            var cmd = JSON.parse(local.pendingData + data);

            local.pendingData = '';

            runCommand(cmd);
        } else {
            local.pendingData += data;
        }
    });

    local.peer.on('connection', function (client) {
        console.log('[PeerService] New connection', client);

        local.connectedPeers[client.peer] = client;

        initClient(client);
    });

    local.peer.on('error', function (err) {
        console.log('[PeerService] Error', err);
    });

    window.config = config;
    window.peerConnect = peerConnect;
    window.pageContentDataRequest = pageContentDataRequest;
    window.addressBalanceRequest = addressBalanceRequest;

    // Make sure things clean up properly.
    window.onunload = window.onbeforeunload = function (e) {
        if (!!local.peer && !local.peer.destroyed) {
            local.peer.destroy();
        }
    };

    console.log('[PeerService] Configuration set', config);
};

/***/ })

}]);
//# sourceMappingURL=53.c6547fda66d7b77448c1.js.map