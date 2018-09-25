(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-wallets/index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/account-wallets/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    name: 'wallets',
    data: function data() {
        return {
            new_wallets: {
                "id": "",
                "name": "--",
                "icon": "",
                "short_name": "--",
                "count": "--",
                "history": [{
                    "time": "00:00",
                    "percent": "0.00",
                    "direction": "up"
                }, {
                    "time": "00:00",
                    "percent": "0.00",
                    "direction": "up"
                }, {
                    "time": "00:00",
                    "percent": "0.00",
                    "direction": "up"
                }],
                "wallet_number": "xxxxxxxxxxxxxxxxxxxx",
                "preferred_switcher": true
            },
            set_new_wallets: false,
            set_new_wallets_step_1: false,
            set_new_wallets_step_2: false,
            search_blk: false,
            currency_choices: [{
                name: 'Bitcoin',
                short_name: 'BTC'
            }, {
                name: 'Ethereum',
                short_name: 'ETH'
            }, {
                name: 'Ripple',
                short_name: 'XRP'
            }, {
                name: 'Cardano',
                short_name: 'CDA'
            }, {
                name: 'Thron',
                short_name: 'TRX'
            }, {
                name: 'Bitcoin Cash',
                short_name: 'BCH'
            }]
        };
    },
    components: {
        'c-layout': function cLayout(resolve) {
            return Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/layouts/default */ "./src/ui/layouts/default/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        }
    },
    computed: {
        wallets: function wallets() {
            return this.$store.state.network.wallets;
        }
    },
    methods: {
        copyWalletNumber: function copyWalletNumber(number) {
            alert('You have copy wallet number - ' + number);
        },
        addNewWallet: function addNewWallet() {
            this.set_new_wallets = true;
            this.set_new_wallets_step_1 = true;
        },
        nextStep: function nextStep() {
            this.set_new_wallets_step_1 = false;
            this.set_new_wallets_step_2 = true;
        },
        generateNewWalletNumber: function generateNewWalletNumber() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < 25; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }this.new_wallets['wallet_number'] = text;
        },
        showCurrencyList: function showCurrencyList() {
            this.search_blk = true;
        },
        choseCurrency: function choseCurrency(name, short_name) {
            this.search_blk = false;
            this.new_wallets['name'] = name;
            this.new_wallets['short_name'] = short_name;
            this.generateNewWalletNumber();
        }
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-wallets/index.vue?vue&type=style&index=0&id=ed95fcd6&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/account-wallets/index.vue?vue&type=style&index=0&id=ed95fcd6&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-wallets/index.vue?vue&type=template&id=ed95fcd6&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/account-wallets/index.vue?vue&type=template&id=ed95fcd6&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-layout',{attrs:{"navigationKey":"account-navigation"}},[_c('div',{staticClass:"content",attrs:{"id":"content"}},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('ul',{staticClass:"nav nav-tabs justify-content-between"},[_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link active",attrs:{"href":"#"}},[_vm._v("Overview")])])]),_vm._v(" "),_c('div',{staticClass:"filter-line"},[_c('div',{staticClass:"filter-line__search"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","placeholder":"Term Search"}})]),_vm._v(" "),_c('div',{staticClass:"filter-line__filter"},[_vm._v("\n                            Filter by:\n                            "),_c('div',{staticClass:"dropdown"},[_c('a',{staticClass:"btn dropdown-toggle",attrs:{"href":"#","role":"button","id":"filtering_type","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[_vm._v("\n                                    Type\n                                ")]),_vm._v(" "),_c('div',{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuLink"}},[_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v("Action")]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v("Another action")]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v("Something else here")])])]),_vm._v(" "),_c('a',{staticClass:"btn btn-sm btn-danger text-uppercase font-weight-bold",attrs:{"href":"#3"}},[_vm._v("clear "),_c('i',{staticClass:"fas fa-times"})]),_vm._v(" "),_c('a',{staticClass:"btn btn-sm btn-info text-uppercase font-weight-bold",attrs:{"href":"#3"}},[_vm._v("more filters")])]),_vm._v(" "),_c('div',{staticClass:"filter-line__sorting"},[_vm._v("\n                            Sort by:\n                            "),_c('div',{staticClass:"dropdown"},[_c('a',{staticClass:"btn dropdown-toggle",attrs:{"href":"#","role":"button","id":"sorting_value","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[_vm._v("\n                                    Value\n                                ")]),_vm._v(" "),_c('div',{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuLink"}},[_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v("Action")]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v("Another action")]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v("Something else here")])])]),_vm._v(" "),_c('a',{staticClass:"btn btn-link",attrs:{"href":"#3"}},[_c('i',{staticClass:"fas fa-sort-numeric-up"})]),_vm._v(" "),_c('a',{staticClass:"btn btn-link",attrs:{"href":"#3"}},[_c('i',{staticClass:"fas fa-sort-amount-up"})])])]),_vm._v(" "),_c('div',{staticClass:"wallets-list"},[_vm._l((_vm.wallets),function(wallet,index){return _c('div',{key:index,staticClass:"wallet-item"},[_c('a',{staticClass:"wallet-item__info",attrs:{"href":("/#/wallet/" + (wallet.id))}},[_c('div',{staticClass:"wallet-item__head"},[_c('div',{staticClass:"wallet-item__name",class:{ preferred: wallet.preferred_switcher }},[_c('i',{staticClass:"fab fa-bitcoin"}),_vm._v("\n                                        "+_vm._s(wallet.name)+"\n                                    ")]),_vm._v(" "),_c('div',{staticClass:"wallet-item__count"},[_c('span',[_vm._v("\n                                            "+_vm._s(wallet.short_name)+"\n                                        ")]),_vm._v(" "),_c('span',[_vm._v("\n                                            "+_vm._s(wallet.count)+"\n                                        ")])])]),_vm._v(" "),_c('div',{staticClass:"wallet-item__body"},[_c('div',{staticClass:"wallet-item__graph"}),_vm._v(" "),_c('div',{staticClass:"wallet-item__history"},[_c('ul',_vm._l((wallet.history),function(item,index){return _c('li',{key:index,class:item.direction},[_c('span',{staticClass:"time"},[_vm._v("\n                                                    "+_vm._s(item.time)+"\n                                                ")]),_vm._v(" "),_c('span',{staticClass:"percent"},[_vm._v("\n                                                    "+_vm._s(item.percent)+"%\n                                                ")]),_vm._v(" "),_c('span',{staticClass:"icon"},[(item.direction === 'up')?_c('i',{staticClass:"fas fa-arrow-up"}):_c('i',{staticClass:"fas fa-arrow-down"})])])}))]),_vm._v(" "),_c('div',{staticClass:"wallet-item__wallet_address",on:{"click":function($event){_vm.copyWalletNumber(wallet.wallet_number)}}},[_c('span',[_vm._v(_vm._s(wallet.wallet_number))]),_vm._v(" "),_c('i',{staticClass:"fas fa-copy"})])])]),_vm._v(" "),_c('div',{staticClass:"wallet-item__footer"},[_c('div',{staticClass:"wallet-item__preferred_switcher"},[_c('label',{staticClass:"switch switch-sm"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(wallet.preferred_switcher),expression:"wallet.preferred_switcher"}],attrs:{"type":"checkbox","name":"preeferred","checked":"","value":"0"},domProps:{"checked":Array.isArray(wallet.preferred_switcher)?_vm._i(wallet.preferred_switcher,"0")>-1:(wallet.preferred_switcher)},on:{"change":function($event){var $$a=wallet.preferred_switcher,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v="0",$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(wallet, "preferred_switcher", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(wallet, "preferred_switcher", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(wallet, "preferred_switcher", $$c)}}}}),_vm._v(" "),_c('span',[_vm._v("Preferred")])])]),_vm._v(" "),_c('div',{staticClass:"wallet-item__action"},[_c('a',{staticClass:"btn btn-sm btn-info"},[_vm._v("\n                                        Send\n                                        "),_c('i',{staticClass:"fas fa-arrow-right"})])])])])}),_vm._v(" "),(!_vm.set_new_wallets)?_c('div',{staticClass:"wallet-item empty-item new-wallet",on:{"click":_vm.addNewWallet}},[_c('div',{staticClass:"empty-overlay"},[_c('i',{staticClass:"fas fa-plus"}),_vm._v("\n                                New Wallet\n                            ")])]):_vm._e(),_vm._v(" "),(_vm.set_new_wallets)?_c('div',{staticClass:"wallet-item"},[(!_vm.search_blk)?_c('div',{staticClass:"wallet-item__info"},[(_vm.set_new_wallets_step_1)?_c('div',{staticClass:"wallet-item__head"},[_c('div',{staticClass:"wallet-item__name"},[_c('a',{staticClass:"btn btn-sm wallet-item__toggle-search",attrs:{"href":"#3"},on:{"click":_vm.showCurrencyList}},[_c('i',{staticClass:"fas fa-angle-down"})]),_vm._v("\n                                        "+_vm._s(_vm.new_wallets.name)+"\n                                    ")]),_vm._v(" "),_c('div',{staticClass:"wallet-item__count"},[_c('span',[_vm._v("\n                                            "+_vm._s(_vm.new_wallets.short_name)+"\n                                        ")]),_vm._v(" "),_c('span',[_vm._v("\n                                            "+_vm._s(_vm.new_wallets.count)+"\n                                        ")])])]):_vm._e(),_vm._v(" "),(_vm.set_new_wallets_step_2)?_c('div',{staticClass:"wallet-item__head"},[_c('div',{staticClass:"wallet-item__name",class:{ preferred: _vm.new_wallets.preferred_switcher }},[_c('i',{staticClass:"fab fa-bitcoin"}),_vm._v("\n                                        "+_vm._s(_vm.new_wallets.name)+"\n                                    ")]),_vm._v(" "),_c('div',{staticClass:"wallet-item__count"},[_c('span',[_vm._v("\n                                            "+_vm._s(_vm.new_wallets.short_name)+"\n                                        ")]),_vm._v(" "),_c('span',[_vm._v("\n                                            "+_vm._s(_vm.new_wallets.count)+"\n                                        ")])])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"wallet-item__body"},[_c('div',{staticClass:"wallet-item__graph"}),_vm._v(" "),_c('div',{staticClass:"wallet-item__history"},[_c('ul',_vm._l((_vm.new_wallets.history),function(item,index){return _c('li',{key:index,class:item.direction},[_c('span',{staticClass:"time"},[_vm._v("\n                                                    "+_vm._s(item.time)+"\n                                                ")]),_vm._v(" "),_c('span',{staticClass:"percent"},[_vm._v("\n                                                    "+_vm._s(item.percent)+"%\n                                                ")]),_vm._v(" "),_c('span',{staticClass:"icon"},[(item.direction === 'up')?_c('i',{staticClass:"fas fa-arrow-up"}):_c('i',{staticClass:"fas fa-arrow-down"})])])}))]),_vm._v(" "),_c('div',{staticClass:"wallet-item__wallet_address"},[_c('span',{attrs:{"id":"new_wallet_number"}},[_vm._v(_vm._s(_vm.new_wallets.wallet_number))]),_vm._v(" "),(_vm.set_new_wallets_step_1)?_c('i',{staticClass:"fas fa-redo",staticStyle:{"color":"#c25a5c"},on:{"click":_vm.generateNewWalletNumber}}):_c('i',{staticClass:"fas fa-copy",on:{"click":function($event){_vm.copyWalletNumber(_vm.new_wallets.wallet_number)}}})])])]):_vm._e(),_vm._v(" "),(_vm.search_blk)?_c('div',{staticClass:"wallet-item__search-blk"},[_c('div',{staticClass:"input-group input-group-sm"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","placeholder":"Search","aria-label":"Search"}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text"},[_c('i',{staticClass:"fas fa-search"})])])]),_vm._v(" "),_c('ul',_vm._l((_vm.currency_choices),function(currency,index){return _c('li',{key:index,on:{"click":function($event){_vm.choseCurrency(currency.name, currency.short_name)}}},[_c('div',{staticClass:"float-left"},[_c('i',{staticClass:"fab fa-btc"}),_vm._v("\n                                            "+_vm._s(currency.short_name)+"\n                                        ")]),_vm._v(" "),_c('div',{staticClass:"float-right"},[_vm._v("\n                                            "+_vm._s(currency.name)+"\n                                        ")])])}))]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"wallet-item__footer"},[_c('div',{staticClass:"wallet-item__preferred_switcher"},[_c('label',{staticClass:"switch switch-sm"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.new_wallets.preferred_switcher),expression:"new_wallets.preferred_switcher"}],attrs:{"type":"checkbox","name":"preeferred","checked":"","value":"0"},domProps:{"checked":Array.isArray(_vm.new_wallets.preferred_switcher)?_vm._i(_vm.new_wallets.preferred_switcher,"0")>-1:(_vm.new_wallets.preferred_switcher)},on:{"change":function($event){var $$a=_vm.new_wallets.preferred_switcher,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v="0",$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.new_wallets, "preferred_switcher", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.new_wallets, "preferred_switcher", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.new_wallets, "preferred_switcher", $$c)}}}}),_vm._v(" "),_c('span',[_vm._v("Preferred")])])]),_vm._v(" "),(_vm.set_new_wallets_step_1)?_c('div',{staticClass:"wallet-item__action"},[_c('a',{staticClass:"btn btn-sm btn-success",on:{"click":_vm.nextStep}},[_vm._v("\n                                        Done\n                                        "),_c('i',{staticClass:"fas fa-check"})])]):_c('div',{staticClass:"wallet-item__action"},[_c('a',{staticClass:"btn btn-sm btn-info"},[_c('i',{staticClass:"fas fa-list ml-0"})]),_vm._v(" "),_c('a',{staticClass:"btn btn-sm btn-info"},[_c('i',{staticClass:"fas fa-cog ml-0"})]),_vm._v(" "),_c('a',{staticClass:"btn btn-sm btn-info"},[_vm._v("\n                                        Send\n                                        "),_c('i',{staticClass:"fas fa-arrow-right"})])])])]):_vm._e()],2)])])])])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/screens/account-wallets/index.vue":
/*!**************************************************!*\
  !*** ./src/ui/screens/account-wallets/index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_ed95fcd6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=ed95fcd6&scoped=true */ "./src/ui/screens/account-wallets/index.vue?vue&type=template&id=ed95fcd6&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/screens/account-wallets/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_ed95fcd6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=ed95fcd6&lang=scss&scoped=true */ "./src/ui/screens/account-wallets/index.vue?vue&type=style&index=0&id=ed95fcd6&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_ed95fcd6_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_ed95fcd6_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ed95fcd6",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/screens/account-wallets/index.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./src/ui/screens/account-wallets/index.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-wallets/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/screens/account-wallets/index.vue?vue&type=style&index=0&id=ed95fcd6&lang=scss&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./src/ui/screens/account-wallets/index.vue?vue&type=style&index=0&id=ed95fcd6&lang=scss&scoped=true ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ed95fcd6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=ed95fcd6&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-wallets/index.vue?vue&type=style&index=0&id=ed95fcd6&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ed95fcd6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ed95fcd6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ed95fcd6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ed95fcd6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ed95fcd6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/account-wallets/index.vue?vue&type=template&id=ed95fcd6&scoped=true":
/*!********************************************************************************************!*\
  !*** ./src/ui/screens/account-wallets/index.vue?vue&type=template&id=ed95fcd6&scoped=true ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ed95fcd6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=ed95fcd6&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-wallets/index.vue?vue&type=template&id=ed95fcd6&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ed95fcd6_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ed95fcd6_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=37.32411833257354328ea5.js.map