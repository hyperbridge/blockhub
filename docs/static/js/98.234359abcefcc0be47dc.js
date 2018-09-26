(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[98],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/download-block/index.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/download-block/index.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
    components: {},
    data: function data() {
        return {
            user_agent: '',
            showAll: false,
            downloading: null,
            defaultDownload: null,
            downloads: {
                'macos': {
                    default: {
                        text: 'MacOS',
                        subtext: '64-bit',
                        link: '/#/download/desktop/mac'
                    }
                },
                'windows': {
                    default: {
                        text: 'Windows',
                        subtext: '64-bit',
                        link: '/#/download/desktop/windows'
                    }
                },
                'linux': {
                    default: {
                        text: 'Linux',
                        subtext: '64-bit',
                        link: '/#/download/desktop/linux'
                    },
                    generic64: {
                        text: 'Linux',
                        subtext: '64-bit Generic',
                        link: '/#/download/desktop/linux'
                    },
                    generic32: {
                        text: 'Linux',
                        subtext: '32-bit Generic',
                        link: '/#/download/desktop/linux'
                    },
                    debian32: {
                        text: 'Linux',
                        subtext: '32-bit Debian',
                        link: '/#/download/desktop/linux'
                    },
                    debian64: {
                        text: 'Linux',
                        subtext: '64-bit Debian',
                        link: '/#/download/desktop/linux'
                    }
                }
            }
        };
    },
    created: function created() {
        this.getOS();
    },

    methods: {
        getOS: function getOS() {
            var userAgent = window.navigator.userAgent,
                platform = window.navigator.platform,
                macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
                windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
                iosPlatforms = ['iPhone', 'iPad', 'iPod'],
                os = null;

            if (macosPlatforms.indexOf(platform) !== -1) {
                this.user_agent = 'macos';
            } else if (iosPlatforms.indexOf(platform) !== -1) {
                this.user_agent = 'ios';
            } else if (windowsPlatforms.indexOf(platform) !== -1) {
                this.user_agent = 'windows';
            } else if (/Android/.test(userAgent)) {
                this.user_agent = 'android';
            } else if (!os && /Linux/.test(platform)) {
                this.user_agent = 'linux';
            }

            this.defaultDownload = this.downloads[this.user_agent]['default'];
        },
        showAllPlatforms: function showAllPlatforms() {
            this.showAll = !this.showAll;
        },
        startDownload: function startDownload(item) {
            this.downloading = item;
        }
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/download-block/index.vue?vue&type=style&index=0&id=301baf40&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/download-block/index.vue?vue&type=style&index=0&id=301baf40&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/download-block/index.vue?vue&type=template&id=301baf40&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/download-block/index.vue?vue&type=template&id=301baf40&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"info"},[_c('h3',{staticClass:"text-bold text-uppercase"},[_vm._v("OWN WHAT YOU PWN")]),_vm._v(" "),_c('h4',[_vm._v("Blockchain Based Content Listening for the Masses")]),_vm._v(" "),_c('div',{staticClass:"action d-flex align-items-center"},[(!_vm.downloading)?_c('a',{staticClass:"btn btn-outline-success",attrs:{"href":_vm.defaultDownload.link},on:{"click":function($event){_vm.startDownload(_vm.defaultDownload)}}},[_c('strong',[_vm._v("Download Now")]),_vm._v(" "),_c('small',[_vm._v("for "+_vm._s(_vm.defaultDownload.text))])]):_vm._e(),_vm._v(" "),(_vm.downloading)?_c('div',[_vm._v("\n                    Downloading now. "),_c('a',{attrs:{"href":_vm.downloading.link}},[_vm._v("Click here")]),_vm._v(" if it doesn't start in 10 seconds.\n                ")]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"download_info",on:{"click":_vm.showAllPlatforms}},[_c('h6',[_vm._v("Using another OS?")]),_vm._v(" "),_c('p',[_vm._v("Download for Mac, Windows and Linux")]),_vm._v(" "),_c('i',{staticClass:"fab fa-apple"}),_vm._v(" "),_c('i',{staticClass:"fab fa-linux"}),_vm._v(" "),_c('i',{staticClass:"fab fa-windows"})])])]),_vm._v(" "),(_vm.showAll)?_c('div',_vm._l((_vm.downloads),function(item,index){return _c('div',{key:index},_vm._l((item),function(item,index){return _c('a',{key:index,staticClass:"btn",attrs:{"href":item.link}},[_c('strong',[_vm._v(_vm._s(item.text))]),_vm._v(" "),_c('small',[_vm._v(_vm._s(item.subtext))])])}))})):_vm._e()])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-sub-bg position-relative"},[_c('img',{attrs:{"src":"/static/img/logo-white-text.png","alt":"Logo"}}),_vm._v(" "),_c('img',{staticClass:"absolute_img",attrs:{"src":__webpack_require__(/*! ../../../assets/img/monitor_temp.png */ "./src/assets/img/monitor_temp.png"),"alt":"Logo"}})])}]



/***/ }),

/***/ "./src/assets/img/monitor_temp.png":
/*!*****************************************!*\
  !*** ./src/assets/img/monitor_temp.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/monitor_temp.4c3a8de.png";

/***/ }),

/***/ "./src/ui/components/download-block/index.vue":
/*!****************************************************!*\
  !*** ./src/ui/components/download-block/index.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_301baf40_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=301baf40&scoped=true */ "./src/ui/components/download-block/index.vue?vue&type=template&id=301baf40&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/components/download-block/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_301baf40_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=301baf40&lang=scss&scoped=true */ "./src/ui/components/download-block/index.vue?vue&type=style&index=0&id=301baf40&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_301baf40_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_301baf40_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "301baf40",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/download-block/index.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./src/ui/components/download-block/index.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/download-block/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/components/download-block/index.vue?vue&type=style&index=0&id=301baf40&lang=scss&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./src/ui/components/download-block/index.vue?vue&type=style&index=0&id=301baf40&lang=scss&scoped=true ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_301baf40_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=301baf40&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/download-block/index.vue?vue&type=style&index=0&id=301baf40&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_301baf40_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_301baf40_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_301baf40_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_301baf40_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_301baf40_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/download-block/index.vue?vue&type=template&id=301baf40&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./src/ui/components/download-block/index.vue?vue&type=template&id=301baf40&scoped=true ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_301baf40_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=301baf40&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/download-block/index.vue?vue&type=template&id=301baf40&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_301baf40_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_301baf40_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=98.234359abcefcc0be47dc.js.map