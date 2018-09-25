(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings-client/index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/settings-client/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var funding_protocol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! funding-protocol */ "../funding-protocol/index.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        'c-layout': function cLayout(resolve) {
            return Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/layouts/default */ "./src/ui/layouts/default/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-switch': function cSwitch(resolve) {
            return Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/switch */ "./src/ui/components/switch/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        }
    },
    data: function data() {
        return {
            selected: []
        };
    },

    computed: {
        selectAll: {
            get: function get() {
                return this.selected.length == this.protocols.map(function (protocol) {
                    return protocol.contracts.length;
                }).reduce(function (prev, cur) {
                    return prev + cur;
                });
            },
            set: function set(value) {
                if (!value) {
                    this.selected = [];
                    return;
                }

                this.selected = this.protocols.map(function (protocol) {
                    return protocol.contracts.map(function (contract) {
                        return protocol.id + '.' + contract.name;
                    });
                }).reduce(function (prev, cur) {
                    return prev.concat(cur);
                });
            }
        },
        protocols: function protocols() {
            return [{
                id: 'network',
                name: 'Token',
                link: 'https://github.com/hyperbridge/token',
                contracts: [{
                    name: 'Token',
                    link: 'https://github.com/hyperbridge/token/blob/master/smart-contracts/ethereum/contracts/Token.sol',
                    created_at: this.$store.state.network.ethereum[this.$store.state.network.current_ethereum_network].contracts.Token.created_at,
                    address: this.$store.state.network.ethereum[this.$store.state.network.current_ethereum_network].contracts.Token.address,
                    links: []
                }, {
                    name: 'TokenDelegate',
                    link: 'https://github.com/hyperbridge/token/blob/master/smart-contracts/ethereum/contracts/TokenDelegate.sol',
                    created_at: this.$store.state.network.ethereum[this.$store.state.network.current_ethereum_network].contracts.TokenDelegate.created_at,
                    address: this.$store.state.network.ethereum[this.$store.state.network.current_ethereum_network].contracts.TokenDelegate.address,
                    links: []
                }, {
                    name: 'EternalStorage',
                    link: 'https://github.com/hyperbridge/token/blob/master/smart-contracts/ethereum/contracts/EternalStorage.sol',
                    created_at: this.$store.state.network.ethereum[this.$store.state.network.current_ethereum_network].contracts.EternalStorage.created_at,
                    address: this.$store.state.network.ethereum[this.$store.state.network.current_ethereum_network].contracts.EternalStorage.address,
                    links: []
                }]
            }, {
                id: 'marketplace',
                name: 'Marketplace Protocol',
                link: 'https://github.com/hyperbridge/marketplace-protocol',
                contracts: [{
                    name: 'Marketplace',
                    link: 'https://github.com/hyperbridge/marketplace-protocol/blob/master/smart-contracts/ethereum/contracts/Marketplace.sol',
                    created_at: this.$store.state.marketplace.ethereum[this.$store.state.marketplace.current_ethereum_network].contracts.Marketplace.created_at,
                    address: this.$store.state.marketplace.ethereum[this.$store.state.marketplace.current_ethereum_network].contracts.Marketplace.address,
                    links: []
                }]
            }, {
                id: 'funding',
                name: 'Funding Protocol',
                link: 'https://github.com/hyperbridge/funding-protocol',
                contracts: [{
                    name: 'FundingStorage',
                    link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/FundingStorage.sol',
                    created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.FundingStorage.created_at,
                    address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.FundingStorage.address,
                    links: funding_protocol__WEBPACK_IMPORTED_MODULE_2__["default"].api.ethereum.state.contracts.FundingStorage.links
                }, {
                    name: 'DeveloperStorageAccess',
                    link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/DeveloperStorageAccess.sol',
                    created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.DeveloperStorageAccess.created_at,
                    address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.DeveloperStorageAccess.address,
                    links: funding_protocol__WEBPACK_IMPORTED_MODULE_2__["default"].api.ethereum.state.contracts.DeveloperStorageAccess.links
                }, {
                    name: 'ContributionStorageAccess',
                    link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/ContributionStorageAccess.sol',
                    created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ContributionStorageAccess.created_at,
                    address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ContributionStorageAccess.address,
                    links: funding_protocol__WEBPACK_IMPORTED_MODULE_2__["default"].api.ethereum.state.contracts.ContributionStorageAccess.links
                }, {
                    name: 'ProjectStorageAccess',
                    link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/ProjectStorageAccess.sol',
                    created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectStorageAccess.created_at,
                    address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectStorageAccess.address,
                    links: funding_protocol__WEBPACK_IMPORTED_MODULE_2__["default"].api.ethereum.state.contracts.ProjectStorageAccess.links
                }, {
                    name: 'CurationStorageAccess',
                    link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/CurationStorageAccess.sol',
                    created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.CurationStorageAccess.created_at,
                    address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.CurationStorageAccess.address,
                    links: funding_protocol__WEBPACK_IMPORTED_MODULE_2__["default"].api.ethereum.state.contracts.CurationStorageAccess.links
                }, {
                    name: 'FundingVault',
                    link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/FundingVault.sol',
                    created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.FundingVault.created_at,
                    address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.FundingVault.address,
                    links: funding_protocol__WEBPACK_IMPORTED_MODULE_2__["default"].api.ethereum.state.contracts.FundingVault.links
                }, {
                    name: 'Developer',
                    link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/Developer.sol',
                    created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.Developer.created_at,
                    address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.Developer.address,
                    links: funding_protocol__WEBPACK_IMPORTED_MODULE_2__["default"].api.ethereum.state.contracts.Developer.links
                }, {
                    name: 'Contribution',
                    link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/Contribution.sol',
                    created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.Contribution.created_at,
                    address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.Contribution.address,
                    links: funding_protocol__WEBPACK_IMPORTED_MODULE_2__["default"].api.ethereum.state.contracts.Contribution.links
                }, {
                    name: 'ProjectTimeline',
                    link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/ProjectTimeline.sol',
                    created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectTimeline.created_at,
                    address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectTimeline.address,
                    links: funding_protocol__WEBPACK_IMPORTED_MODULE_2__["default"].api.ethereum.state.contracts.ProjectTimeline.links
                }, {
                    name: 'ProjectTimelineHelpersLibrary',
                    link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/libraries/ProjectTimelineHelpersLibrary.sol',
                    created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectTimelineHelpersLibrary.created_at,
                    address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectTimelineHelpersLibrary.address,
                    links: funding_protocol__WEBPACK_IMPORTED_MODULE_2__["default"].api.ethereum.state.contracts.ProjectTimelineHelpersLibrary.links
                }, {
                    name: 'ProjectTimelineProposal',
                    link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/ProjectTimelineProposal.sol',
                    created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectTimelineProposal.created_at,
                    address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectTimelineProposal.address,
                    links: funding_protocol__WEBPACK_IMPORTED_MODULE_2__["default"].api.ethereum.state.contracts.ProjectTimelineProposal.links
                }, {
                    name: 'ProjectContributionTierHelpersLibrary',
                    link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/libraries/ProjectContributionTierHelpersLibrary.sol',
                    created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectContributionTierHelpersLibrary.created_at,
                    address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectContributionTierHelpersLibrary.address,
                    links: funding_protocol__WEBPACK_IMPORTED_MODULE_2__["default"].api.ethereum.state.contracts.ProjectContributionTierHelpersLibrary.links
                }, {
                    name: 'ProjectMilestoneCompletion',
                    link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/libraries/ProjectMilestoneCompletion.sol',
                    created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectMilestoneCompletion.created_at,
                    address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectMilestoneCompletion.address,
                    links: funding_protocol__WEBPACK_IMPORTED_MODULE_2__["default"].api.ethereum.state.contracts.ProjectMilestoneCompletion.links
                }, {
                    name: 'ProjectRegistrationHelpersLibrary',
                    link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/ProjectRegistrationHelpersLibrary.sol',
                    created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectRegistrationHelpersLibrary.created_at,
                    address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectRegistrationHelpersLibrary.address,
                    links: funding_protocol__WEBPACK_IMPORTED_MODULE_2__["default"].api.ethereum.state.contracts.ProjectRegistrationHelpersLibrary.links
                }, {
                    name: 'ProjectRegistration',
                    link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/ProjectRegistration.sol',
                    created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectRegistration.created_at,
                    address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectRegistration.address,
                    links: funding_protocol__WEBPACK_IMPORTED_MODULE_2__["default"].api.ethereum.state.contracts.ProjectRegistration.links
                }, {
                    name: 'Curation',
                    link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/Curation.sol',
                    created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.Curation.created_at,
                    address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.Curation.address,
                    links: funding_protocol__WEBPACK_IMPORTED_MODULE_2__["default"].api.ethereum.state.contracts.Curation.links
                }]
            }];
        }
    },
    methods: {
        cleanDatabase: function cleanDatabase() {
            this.$store.dispatch('database/clean');
        },
        reloadDatabase: function reloadDatabase() {
            this.$store.dispatch('database/reload');
        },
        deployContract: function deployContract(protocolId, contractName) {
            this.$store.dispatch(protocolId + '/deployContract', { contractName: contractName });
        },
        deployAll: function deployAll() {
            var _this = this;

            return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                var i, protocol, j, contract, _;

                return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.t0 = babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(_this.protocols);

                            case 1:
                                if ((_context.t1 = _context.t0()).done) {
                                    _context.next = 20;
                                    break;
                                }

                                i = _context.t1.value;
                                protocol = _this.protocols[i];
                                _context.t2 = babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(protocol.contracts);

                            case 5:
                                if ((_context.t3 = _context.t2()).done) {
                                    _context.next = 18;
                                    break;
                                }

                                j = _context.t3.value;
                                contract = _this.protocols[i].contracts[j];
                                _context.prev = 8;
                                _context.next = 11;
                                return _this.$store.dispatch(protocol.id + '/deployContract', { contractName: contract.name });

                            case 11:
                                _ = _context.sent;
                                _context.next = 16;
                                break;

                            case 14:
                                _context.prev = 14;
                                _context.t4 = _context['catch'](8);

                            case 16:
                                _context.next = 5;
                                break;

                            case 18:
                                _context.next = 1;
                                break;

                            case 20:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this, [[8, 14]]);
            }))();
        },
        deploySelected: function deploySelected() {
            var _this2 = this;

            return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
                var i, protocolId, contractName;
                return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.t0 = babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(_this2.selected);

                            case 1:
                                if ((_context2.t1 = _context2.t0()).done) {
                                    _context2.next = 9;
                                    break;
                                }

                                i = _context2.t1.value;
                                protocolId = _this2.selected[i].split('.')[0];
                                contractName = _this2.selected[i].split('.')[1];
                                _context2.next = 7;
                                return _this2.$store.dispatch(protocolId + '/deployContract', { contractName: contractName });

                            case 7:
                                _context2.next = 1;
                                break;

                            case 9:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }))();
        }
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings-client/index.vue?vue&type=style&index=0&id=192270f2&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/settings-client/index.vue?vue&type=style&index=0&id=192270f2&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings-client/index.vue?vue&type=template&id=192270f2&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/settings-client/index.vue?vue&type=template&id=192270f2&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-layout',{attrs:{"navigationKey":"settings-navigation"}},[_c('div',{staticClass:"content",attrs:{"id":"content"}},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('h3',[_vm._v("Client Settings")]),_vm._v(" "),_c('div',{staticClass:"card invert"},[_c('div',{staticClass:"page-heading"},[_c('div',{staticClass:"page-heading__container"},[_c('h1',{staticClass:"title"},[_vm._v("Protocol Settings")]),_vm._v(" "),_c('p',{staticClass:"caption"},[_vm._v("Select protocol contracts to deploy")])]),_vm._v(" "),_c('div',{staticClass:"page-heading__container float-right d-none d-md-block"},[(_vm.selected.length)?_c('button',{staticClass:"btn btn-outline-secondary",on:{"click":_vm.deploySelected}},[_vm._v("Deploy selected")]):_vm._e(),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-secondary",on:{"click":_vm.deployAll}},[_vm._v("Deploy all")])])]),_vm._v(" "),_c('div',{},[_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"table table-dark margin-bottom-0"},[_c('thead',[_c('tr',[_c('th',{attrs:{"scope":"col","width":"40"}},[_c('label',{staticClass:"custom-control custom-checkbox"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.selectAll),expression:"selectAll"}],staticClass:"custom-control-input",attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.selectAll)?_vm._i(_vm.selectAll,null)>-1:(_vm.selectAll)},on:{"change":function($event){var $$a=_vm.selectAll,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.selectAll=$$a.concat([$$v]))}else{$$i>-1&&(_vm.selectAll=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.selectAll=$$c}}}}),_vm._v(" "),_c('span',{staticClass:"custom-control-label"})])]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("Name")]),_vm._v(" "),_c('th',{attrs:{"scope":"col","width":"160"}},[_vm._v("Status")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("Address")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}})])]),_vm._v(" "),_c('tbody',[_vm._l((_vm.protocols),function(protocol){return [_c('tr',{key:protocol.id},[_c('td',{staticClass:"margin-top-0 margin-bottom-0",staticStyle:{"background":"rgba(255, 255, 255, 0.01)"},attrs:{"colspan":"5"}},[_c('a',{attrs:{"href":protocol.link}},[_c('strong',[_vm._v(_vm._s(protocol.name))])])])]),_vm._v(" "),_vm._l((protocol.contracts),function(contract){return _c('tr',{key:contract.name},[_c('td',[_c('label',{staticClass:"custom-control custom-checkbox"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.selected),expression:"selected"}],staticClass:"custom-control-input",attrs:{"type":"checkbox","number":""},domProps:{"value":((protocol.id) + "." + (contract.name)),"checked":Array.isArray(_vm.selected)?_vm._i(_vm.selected,((protocol.id) + "." + (contract.name)))>-1:(_vm.selected)},on:{"change":function($event){var $$a=_vm.selected,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=(protocol.id) + "." + (contract.name),$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.selected=$$a.concat([$$v]))}else{$$i>-1&&(_vm.selected=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.selected=$$c}}}}),_vm._v(" "),_c('span',{staticClass:"custom-control-label"})])]),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":contract.link}},[_vm._v(_vm._s(contract.name))]),_vm._v(" "),_c('br'),_vm._v(" "),(contract.links && contract.links.length)?_c('p',[_c('strong',[_vm._v("Dependencies:")]),_vm._v(" "),_vm._l((contract.links),function(link){return _c('em',{key:link.name},[_vm._v(_vm._s(link.name)+" ")])})],2):_vm._e()]),_vm._v(" "),_c('td',[(contract.created_at)?_c('span',{staticClass:"badge badge-success"},[_vm._v("Deployed")]):_vm._e(),_vm._v(" "),(!contract.created_at)?_c('span',{staticClass:"badge badge-warning"},[_vm._v("Undeployed")]):_vm._e(),_vm._v(" "),(contract.created_at)?_c('div',[_c('strong',[_vm._v(_vm._s(_vm._f("formatDate")(contract.created_at)))]),_c('br'),_vm._v(" "),_c('span',{staticClass:"text-muted"},[_vm._v(_vm._s(_vm._f("formatTime")(contract.created_at)))])]):_vm._e()]),_vm._v(" "),_c('td',[_c('div',{staticClass:"input-group"},[_c('input',{staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":contract.address}}),_vm._v(" "),_c('span',{staticClass:"input-group-append"},[_c('button',{staticClass:"btn btn-light",attrs:{"type":"button"}},[_vm._v("Copy")])])])]),_vm._v(" "),_c('td',[_c('button',{staticClass:"btn btn-light btn-sm",on:{"click":function($event){$event.preventDefault();_vm.deployContract(protocol.id, contract.name)}}},[_vm._v("Deploy")])])])})]})],2)])])])]),_vm._v(" "),_c('div',{staticClass:"card invert"},[_c('div',{staticClass:"page-heading"},[_c('div',{staticClass:"page-heading__container"},[_c('h1',{staticClass:"title"},[_vm._v("Database Settings")]),_vm._v(" "),_c('p',{staticClass:"caption"})]),_vm._v(" "),_c('div',{staticClass:"page-heading__container float-right d-none d-md-block"},[_c('button',{staticClass:"btn btn-outline-secondary",on:{"click":function($event){_vm.cleanDatabase()}}},[_vm._v("Clean")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-secondary",on:{"click":function($event){_vm.reloadDatabase()}}},[_vm._v("Reload initial data")])])]),_vm._v(" "),_c('div',{})])])])])])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/screens/settings-client/index.vue":
/*!**************************************************!*\
  !*** ./src/ui/screens/settings-client/index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_192270f2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=192270f2&scoped=true */ "./src/ui/screens/settings-client/index.vue?vue&type=template&id=192270f2&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/screens/settings-client/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_192270f2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=192270f2&lang=scss&scoped=true */ "./src/ui/screens/settings-client/index.vue?vue&type=style&index=0&id=192270f2&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_192270f2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_192270f2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "192270f2",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/screens/settings-client/index.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./src/ui/screens/settings-client/index.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings-client/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/screens/settings-client/index.vue?vue&type=style&index=0&id=192270f2&lang=scss&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./src/ui/screens/settings-client/index.vue?vue&type=style&index=0&id=192270f2&lang=scss&scoped=true ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_192270f2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=192270f2&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings-client/index.vue?vue&type=style&index=0&id=192270f2&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_192270f2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_192270f2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_192270f2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_192270f2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_192270f2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/settings-client/index.vue?vue&type=template&id=192270f2&scoped=true":
/*!********************************************************************************************!*\
  !*** ./src/ui/screens/settings-client/index.vue?vue&type=template&id=192270f2&scoped=true ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_192270f2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=192270f2&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings-client/index.vue?vue&type=template&id=192270f2&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_192270f2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_192270f2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=52.9891aa13e8895532ed08.js.map