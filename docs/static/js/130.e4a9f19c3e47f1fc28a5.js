(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[130],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/tab/tabs-universal.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/tab/tabs-universal.vue?vue&type=script&lang=js ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'tabs-universal',
    props: {
        tab_names: Array,
        active_tab_prop: [Number, String],
        locked_step: Number,
        locked_tab: Number
    },
    data: function data() {
        return {
            tabs: [],
            active_tab_data: 0
        };
    },

    methods: {
        is_tab_locked: function is_tab_locked(index) {
            var locked_step = this.locked_step,
                locked_tab = this.locked_tab;

            return locked_tab != null && locked_tab == index || locked_step != null && !(index < locked_step);
        }
    },
    computed: {
        dynamic_tabs: function dynamic_tabs() {
            return this.tab_names ? this.tab_names : this.tabs.map(function (tab, index) {
                return 'TAB ' + ++index;
            });
        },
        active_tab: function active_tab() {
            return this.active_tab_prop ? this.active_tab_prop : this.active_tab_data;
        }
    },
    provide: function provide() {
        var _this = this;

        var tab_data = {};
        Object.defineProperty(tab_data, 'active_tab', {
            enumerable: true,
            get: function get() {
                return _this.active_tab;
            }
        });
        return { tab_data: tab_data };
    },
    mounted: function mounted() {
        this.tabs = this.$children;
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/tab/tabs-universal.vue?vue&type=style&index=0&id=46279781&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/tab/tabs-universal.vue?vue&type=style&index=0&id=46279781&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/tab/tabs-universal.vue?vue&type=template&id=46279781&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/tab/tabs-universal.vue?vue&type=template&id=46279781&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('nav',[_vm._t("nav",[_c('ul',{staticClass:"tabs-universal__list"},_vm._l((_vm.dynamic_tabs),function(tab,index){return _c('li',{key:index,staticClass:"tabs-universal__list-item"},[_c('a',{staticClass:"list-item__link",class:{
                            'active': _vm.active_tab == index,
                            'avoid-clicks locked': _vm.is_tab_locked(index)
                        },attrs:{"aria-selected":_vm.active_tab == index,"role":"tab"},on:{"click":function($event){$event.preventDefault();_vm.active_tab_data = index}}},[_vm._v(_vm._s(tab))])])}))])],2),_vm._v(" "),_c('div',{staticClass:"tabs-universal__content"},[_vm._t("default")],2)])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/components/tab/tabs-universal.vue":
/*!**************************************************!*\
  !*** ./src/ui/components/tab/tabs-universal.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs_universal_vue_vue_type_template_id_46279781_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-universal.vue?vue&type=template&id=46279781&scoped=true */ "./src/ui/components/tab/tabs-universal.vue?vue&type=template&id=46279781&scoped=true");
/* harmony import */ var _tabs_universal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs-universal.vue?vue&type=script&lang=js */ "./src/ui/components/tab/tabs-universal.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _tabs_universal_vue_vue_type_style_index_0_id_46279781_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs-universal.vue?vue&type=style&index=0&id=46279781&lang=scss&scoped=true */ "./src/ui/components/tab/tabs-universal.vue?vue&type=style&index=0&id=46279781&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tabs_universal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _tabs_universal_vue_vue_type_template_id_46279781_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _tabs_universal_vue_vue_type_template_id_46279781_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "46279781",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/tab/tabs-universal.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./src/ui/components/tab/tabs-universal.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_universal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./tabs-universal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/tab/tabs-universal.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_universal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/components/tab/tabs-universal.vue?vue&type=style&index=0&id=46279781&lang=scss&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./src/ui/components/tab/tabs-universal.vue?vue&type=style&index=0&id=46279781&lang=scss&scoped=true ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_universal_vue_vue_type_style_index_0_id_46279781_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./tabs-universal.vue?vue&type=style&index=0&id=46279781&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/tab/tabs-universal.vue?vue&type=style&index=0&id=46279781&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_universal_vue_vue_type_style_index_0_id_46279781_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_universal_vue_vue_type_style_index_0_id_46279781_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_universal_vue_vue_type_style_index_0_id_46279781_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_universal_vue_vue_type_style_index_0_id_46279781_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_universal_vue_vue_type_style_index_0_id_46279781_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/tab/tabs-universal.vue?vue&type=template&id=46279781&scoped=true":
/*!********************************************************************************************!*\
  !*** ./src/ui/components/tab/tabs-universal.vue?vue&type=template&id=46279781&scoped=true ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_universal_vue_vue_type_template_id_46279781_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./tabs-universal.vue?vue&type=template&id=46279781&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/tab/tabs-universal.vue?vue&type=template&id=46279781&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_universal_vue_vue_type_template_id_46279781_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_universal_vue_vue_type_template_id_46279781_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=130.e4a9f19c3e47f1fc28a5.js.map