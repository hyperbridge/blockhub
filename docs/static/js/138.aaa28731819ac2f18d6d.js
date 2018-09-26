(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[138],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/store/product-card-dynamic.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/store/product-card-dynamic.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mixins */ "./src/mixins.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'product-card-dynamic',
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    components: {
        'c-tags': function cTags(resolve) {
            return __webpack_require__.e(/*! AMD require */ 96).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/tags */ "./src/ui/components/tags/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        }
    },
    mixins: [_mixins__WEBPACK_IMPORTED_MODULE_0__["debouncer"]],
    data: function data() {
        return {
            display_preview: false,
            interval: null,
            current_image: 0
        };
    },

    methods: {
        show_preview: function show_preview(status) {
            var _this = this;

            clearTimeout(this.timeout);
            this.debounce(function () {
                if (!status) clearInterval(_this.interval);
                if (status && !_this.display_preview && (!_this.product.video || !_this.autoplay)) _this.slider();
                _this.display_preview = status;
            }, status ? 250 : 0);
        },
        slider: function slider() {
            var _this2 = this;

            this.interval = setInterval(function () {
                var current_image = _this2.current_image,
                    images = _this2.product.images;

                _this2.current_image = current_image === images.preview.length - 1 ? 0 : current_image + 1;
            }, 1600);
        }
    },
    computed: {
        autoplay: function autoplay() {
            return this.$store.state.network.account.settings.client.autoplay;
        }
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/store/product-card-dynamic.vue?vue&type=style&index=0&id=ee3926b2&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/store/product-card-dynamic.vue?vue&type=style&index=0&id=ee3926b2&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/store/product-card-dynamic.vue?vue&type=template&id=ee3926b2&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/store/product-card-dynamic.vue?vue&type=template&id=ee3926b2&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"product-grid__item",on:{"mouseover":function($event){_vm.show_preview(true)},"mouseout":function($event){_vm.show_preview(false)}}},[_c('a',{staticClass:"card-img-top",attrs:{"href":("/#/product/" + (_vm.product.id))}},[_c('transition',{attrs:{"name":"fade"}},[(!_vm.display_preview)?_c('c-img',{staticClass:"card-img-top",attrs:{"src":_vm.product.images.medium_tile}}):[(_vm.product.video && _vm.autoplay)?_c('video',{staticClass:"card-img-top",attrs:{"width":"100%","autoplay":""}},[_c('source',{attrs:{"src":_vm.product.video,"type":"video/mp4"}})]):_c('transition-group',{attrs:{"tag":"div","name":"slide-left"}},_vm._l((_vm.product.images.preview),function(image,index){return (index === _vm.current_image)?_c('c-img',{key:image,staticClass:"card-img-top",attrs:{"src":_vm.product.images.preview[index]}}):_vm._e()}))]],2)],1),_vm._v(" "),_c('h4',[_c('a',{attrs:{"href":("/#/product/" + (_vm.product.id))}},[_vm._v(_vm._s(_vm.product.name))])]),_vm._v(" "),_c('p',{staticClass:"card-text",attrs:{"hidden":""}},[_vm._v(_vm._s(_vm.product.short_description)+" ")]),_vm._v(" "),_c('c-tags',{attrs:{"tags":_vm.product.developer_tags.slice(0,3)}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "./src/mixins.js":
/*!***********************!*\
  !*** ./src/mixins.js ***!
  \***********************/
/*! exports provided: debouncer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debouncer", function() { return debouncer; });
var debouncer = {
    data: function data() {
        return {
            timeout: null
        };
    },

    methods: {
        debounce: function debounce(fn) {
            var debounceTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
            var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.timeout;

            clearTimeout(timeout);
            timeout = setTimeout(fn, debounceTime);
        }
    }
};

/***/ }),

/***/ "./src/ui/components/store/product-card-dynamic.vue":
/*!**********************************************************!*\
  !*** ./src/ui/components/store/product-card-dynamic.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_card_dynamic_vue_vue_type_template_id_ee3926b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-card-dynamic.vue?vue&type=template&id=ee3926b2&scoped=true */ "./src/ui/components/store/product-card-dynamic.vue?vue&type=template&id=ee3926b2&scoped=true");
/* harmony import */ var _product_card_dynamic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-card-dynamic.vue?vue&type=script&lang=js */ "./src/ui/components/store/product-card-dynamic.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _product_card_dynamic_vue_vue_type_style_index_0_id_ee3926b2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-card-dynamic.vue?vue&type=style&index=0&id=ee3926b2&lang=scss&scoped=true */ "./src/ui/components/store/product-card-dynamic.vue?vue&type=style&index=0&id=ee3926b2&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _product_card_dynamic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_card_dynamic_vue_vue_type_template_id_ee3926b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_card_dynamic_vue_vue_type_template_id_ee3926b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ee3926b2",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/store/product-card-dynamic.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./src/ui/components/store/product-card-dynamic.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_dynamic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./product-card-dynamic.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/store/product-card-dynamic.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_dynamic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/components/store/product-card-dynamic.vue?vue&type=style&index=0&id=ee3926b2&lang=scss&scoped=true":
/*!*******************************************************************************************************************!*\
  !*** ./src/ui/components/store/product-card-dynamic.vue?vue&type=style&index=0&id=ee3926b2&lang=scss&scoped=true ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_dynamic_vue_vue_type_style_index_0_id_ee3926b2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./product-card-dynamic.vue?vue&type=style&index=0&id=ee3926b2&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/store/product-card-dynamic.vue?vue&type=style&index=0&id=ee3926b2&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_dynamic_vue_vue_type_style_index_0_id_ee3926b2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_dynamic_vue_vue_type_style_index_0_id_ee3926b2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_dynamic_vue_vue_type_style_index_0_id_ee3926b2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_dynamic_vue_vue_type_style_index_0_id_ee3926b2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_dynamic_vue_vue_type_style_index_0_id_ee3926b2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/store/product-card-dynamic.vue?vue&type=template&id=ee3926b2&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./src/ui/components/store/product-card-dynamic.vue?vue&type=template&id=ee3926b2&scoped=true ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_dynamic_vue_vue_type_template_id_ee3926b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./product-card-dynamic.vue?vue&type=template&id=ee3926b2&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/store/product-card-dynamic.vue?vue&type=template&id=ee3926b2&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_dynamic_vue_vue_type_template_id_ee3926b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_dynamic_vue_vue_type_template_id_ee3926b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=138.aaa28731819ac2f18d6d.js.map