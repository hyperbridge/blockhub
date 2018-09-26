(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        'c-block': function cBlock(resolve) {
            return __webpack_require__.e(/*! AMD require */ 86).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/block */ "./src/ui/components/block/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-benchmark': function cBenchmark(resolve) {
            return __webpack_require__.e(/*! AMD require */ 131).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/benchmark */ "./src/ui/components/benchmark/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        }
    },
    data: function data() {
        return {
            systemPermissions: false
        };
    },

    methods: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapMutations"])(['UPDATE_CLIENT_SETTINGS']), {
        updateClientSettings: function updateClientSettings(prop) {
            this.$store.commit('network/UPDATE_CLIENT_SETTINGS', prop);
        },
        clearDatabase: function clearDatabase() {
            debugger;
            var DBDeleteRequest = window.indexedDB.deleteDatabase("LokiCatalog");

            DBDeleteRequest.onerror = function (event) {
                console.log("Error deleting database.");
            };

            DBDeleteRequest.onsuccess = function (event) {
                console.log("Database deleted successfully.");

                console.log(event.result); // should be undefined
            };
        },
        requestNotifPerm: function requestNotifPerm() {
            var _this = this;

            return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                var permission;
                return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return Notification.requestPermission();

                            case 2:
                                permission = _context.sent;

                                if (permission === 'granted') _this.systemPermissions = true;

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }))();
        }
    }),
    mounted: function mounted() {
        this.systemPermissions = Notification.permission === 'granted';
    },

    computed: {
        settings: function settings() {
            return this.$store.state.network.account.settings;
        }
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=style&index=0&id=1eaa9f92&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=style&index=0&id=1eaa9f92&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=template&id=1eaa9f92&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=template&id=1eaa9f92&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-layout',{attrs:{"navigationKey":"settings-navigation"}},[_c('div',{staticClass:"content",attrs:{"id":"content"}},[_c('c-block',{staticClass:"margin-bottom-30",attrs:{"title":"Client Settings"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-md-6 col-lg-6"},[_c('div',{staticClass:"settings_item"},[_c('c-switch'),_vm._v(" "),_c('div',{staticClass:"text"},[_c('h4',[_vm._v("Open BlockHub on system startup")]),_vm._v(" "),_c('p',[_vm._v("Turn on if you want the application to load automatically\n                            when you turn on your computer")])])],1)]),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-6 col-lg-6"},[_c('div',{staticClass:"settings_item"},[_c('c-switch'),_vm._v(" "),_c('div',{staticClass:"text"},[_c('h4',[_vm._v("Show system warnings")]),_vm._v(" "),_c('p',[_vm._v("Queues for games that mickey nex to Ogopogo in freezie Serviette, eh?")])])],1)]),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-6 col-lg-6"},[_c('div',{staticClass:"settings_item"},[_c('c-switch'),_vm._v(" "),_c('div',{staticClass:"text"},[_c('h4',[_vm._v("Enable Ethereum connection")]),_vm._v(" "),_c('p',[_vm._v("Turn on if you want the application to enable Ethereum connection")])])],1)]),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-6 col-lg-6"},[_c('div',{staticClass:"settings_item"},[_c('c-switch',{attrs:{"checked":_vm.settings.client.pagination},on:{"change":function($event){_vm.updateClientSettings('pagination')}}}),_vm._v(" "),_c('div',{staticClass:"text"},[_c('h4',[_vm._v("Pagination Mode")]),_vm._v(" "),_c('p',[_vm._v("Turn on if you want to switch between "),_c('i',[_vm._v("pagination")]),_vm._v(" or "),_c('i',[_vm._v("load more")]),_vm._v(" navigation mode")])])],1)]),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-6 col-lg-6"},[_c('div',{staticClass:"settings_item"},[_c('c-switch',{attrs:{"checked":_vm.systemPermissions},on:{"change":function($event){_vm.requestNotifPerm()}}}),_vm._v(" "),_c('div',{staticClass:"text"},[_c('h4',[_vm._v("System notifications")]),_vm._v(" "),_c('p',[_vm._v("Enable system notifications from BlockHub App")])])],1)])])]),_vm._v(" "),_c('c-block',{staticClass:"margin-bottom-30",attrs:{"title":"Performance Settings"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-md-6 col-lg-6"},[_c('div',{staticClass:"settings_item"},[_c('c-switch',{attrs:{"checked":_vm.settings.client.animations},on:{"change":function($event){_vm.updateClientSettings('animations')}}}),_vm._v(" "),_c('div',{staticClass:"text"},[_c('h4',[_vm._v("Enable animations")]),_vm._v(" "),_c('p',[_vm._v("Turn on if you want to enable animations and transitions")])])],1)]),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-6 col-lg-6"},[_c('div',{staticClass:"settings_item"},[_c('c-switch',{attrs:{"checked":_vm.settings.client.autoplay},on:{"change":function($event){_vm.updateClientSettings('autoplay')}}}),_vm._v(" "),_c('div',{staticClass:"text"},[_c('h4',[_vm._v("Enable autoplay")]),_vm._v(" "),_c('p',[_vm._v("Turn on if you want to play videos automatically")])])],1)]),_vm._v(" "),_c('c-benchmark',{staticClass:"col-12 d-flex justify-content-between align-items-center",attrs:{"settings":_vm.settings}})],1)]),_vm._v(" "),_c('c-block',{staticClass:"margin-bottom-30",attrs:{"title":"Advanced"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 d-flex justify-content-between align-items-center"},[_c('div',[_vm._v("\n                        Advanced settings can be managed here. These are primarily for developers @BlockHub.\n                        "),_c('br'),_c('strong',[_vm._v("Warning:")]),_vm._v(" Only use these if you know what you're doing.\n                    ")]),_vm._v(" "),_c('div',[_c('c-button',{attrs:{"status":"warning"},on:{"click":_vm.clearDatabase}},[_vm._v("DELETE DATABASE")])],1)])])])],1)])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/screens/settings/index.vue":
/*!*******************************************!*\
  !*** ./src/ui/screens/settings/index.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_1eaa9f92_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1eaa9f92&scoped=true */ "./src/ui/screens/settings/index.vue?vue&type=template&id=1eaa9f92&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/screens/settings/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_1eaa9f92_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=1eaa9f92&lang=scss&scoped=true */ "./src/ui/screens/settings/index.vue?vue&type=style&index=0&id=1eaa9f92&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1eaa9f92_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_1eaa9f92_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1eaa9f92",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/screens/settings/index.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./src/ui/screens/settings/index.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/screens/settings/index.vue?vue&type=style&index=0&id=1eaa9f92&lang=scss&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./src/ui/screens/settings/index.vue?vue&type=style&index=0&id=1eaa9f92&lang=scss&scoped=true ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1eaa9f92_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=1eaa9f92&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=style&index=0&id=1eaa9f92&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1eaa9f92_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1eaa9f92_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1eaa9f92_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1eaa9f92_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1eaa9f92_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/settings/index.vue?vue&type=template&id=1eaa9f92&scoped=true":
/*!*************************************************************************************!*\
  !*** ./src/ui/screens/settings/index.vue?vue&type=template&id=1eaa9f92&scoped=true ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1eaa9f92_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1eaa9f92&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=template&id=1eaa9f92&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1eaa9f92_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1eaa9f92_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=50.f3856b68a23c4c1094b1.js.map