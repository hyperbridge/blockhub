(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/product-overview/index.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/product-overview/index.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************/
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

var updateProduct = function updateProduct() {
    if (!this.$store.state.marketplace.entities.products) return;

    var product = this.$store.state.marketplace.entities.products[this.id];

    if (!product) return;

    if (product.images && product.images.headerUrl) window.document.body.style['background-image'] = 'url(' + product.images.headerUrl + ')';

    return product;
};

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['id'],
    components: {
        'c-layout': function cLayout() {
            return __webpack_require__.e(/*! import() */ 44).then(__webpack_require__.bind(null, /*! @/ui/layouts/default */ "./src/ui/layouts/default/index.vue"));
        }
    },
    data: function data() {
        return {};
    },

    methods: {
        save: function save() {
            this.$store.dispatch('marketplace/updateProduct', this.product);
        }
    },
    computed: {
        product: updateProduct
    },
    mounted: updateProduct,
    created: updateProduct,
    beforeDestroy: function beforeDestroy() {
        window.document.body.style['background-image'] = 'url(/static/img/products/default.png)';
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/product-overview/index.vue?vue&type=style&index=0&id=87dacfcc&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/product-overview/index.vue?vue&type=style&index=0&id=87dacfcc&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/product-overview/index.vue?vue&type=template&id=87dacfcc&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/product-overview/index.vue?vue&type=template&id=87dacfcc&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-layout',{attrs:{"navigationKey":"productNavigation"}},[_c('div',{staticClass:"content",attrs:{"id":"content"}},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[(!_vm.product)?_c('div',{staticClass:"col-12"},[_vm._v("\n                    Product not found\n                ")]):_vm._e(),_vm._v(" "),(_vm.product)?_c('div',{staticClass:"col-12"},[_c('h1',{staticClass:"title margin-top-10"},[_vm._v(_vm._s(_vm.product.name))]),_vm._v(" "),_vm._l((_vm.product.authorTags),function(tag,index){return _c('div',{key:index,staticClass:"product__tag"},[_c('a',{staticClass:"card-link",attrs:{"href":"#"},on:{"click":function($event){_vm.filterTag(tag)}}},[_vm._v(_vm._s(tag))])])}),_vm._v(" "),_c('ul',{staticClass:"nav nav-tabs margin-bottom-50"},[_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link active",attrs:{"href":("/#/product/" + (_vm.product.id))}},[_vm._v("Overview")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":("/#/product/" + (_vm.product.id) + "/community")}},[_vm._v("Community")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":("/#/product/" + (_vm.product.id) + "/projects")}},[_vm._v("Projects")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":("/#/product/" + (_vm.product.id) + "/assets")}},[_vm._v("Assets")])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-7"},[_vm._v("\n                            SCREENSHOT GALLERY\n\n                            SALE PRICE BOX\n\n                            ITEM PRICE BOX\n                            ITEM PRICE BOX\n                            ITEM PRICE BOX\n\n                            "),_c('h2',[_vm._v("An adventure of a lifetime...")]),_vm._v(" "),_c('p',[_vm._v("Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.")]),_vm._v(" "),_c('p',[_vm._v("Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and services to you.")]),_vm._v("\n\n\n                            IMAGE LIST\n                        ")]),_vm._v(" "),_c('div',{staticClass:"col-5"},[_c('div',{staticClass:"card invert"},[_c('h2',{staticClass:"title"},[_vm._v("Rating")])]),_vm._v(" "),_c('div',{staticClass:"card invert"},[_c('h2',{staticClass:"title"},[_vm._v("Frequently Traded Assets")])]),_vm._v(" "),_c('div',{staticClass:"card invert"},[_c('h2',{staticClass:"title"},[_vm._v("Community Spotlight")])]),_vm._v(" "),_c('div',{staticClass:"card invert"},[_c('h2',{staticClass:"title"},[_vm._v("System Requirements")]),_vm._v(" "),_c('div',{staticClass:"form-group margin-bottom-10"},[_c('div',{staticClass:"form-row"},[_c('div',{staticClass:"col-7"},[_vm._v("\n                                            Microsoft Windows\n                                            "),_c('br'),_vm._v("\n                                            8GB storage space, 4GB RAM, GTX 1050, or equivalent\n                                        ")]),_vm._v(" "),_c('div',{staticClass:"col-5 text-right"},[_c('div',{staticClass:"icon-box icon-box--sm margin-right-5"},[_c('span',{staticClass:"fa fa-clock-o"})])])])])]),_vm._v(" "),_c('h2',{staticClass:"title"},[_vm._v("Languages")]),_vm._v(" "),_c('div',{staticClass:"form-group margin-bottom-10"},[_c('div',{staticClass:"form-row"},[_c('div',{staticClass:"col-7"},[_vm._v("\n                                        English\n                                    ")]),_vm._v(" "),_c('div',{staticClass:"col-5 text-right"},[_c('div',{staticClass:"icon-box icon-box--sm margin-right-5"},[_c('span',{staticClass:"fa fa-clock-o"})])])])])])]),_vm._v("\n\n\n\n\n                    "+_vm._s(_vm.product.author)+"\n                    "+_vm._s(_vm.product.images)+"\n\n                    "),_c('div',{domProps:{"innerHTML":_vm._s(_vm.product.content)}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model.lazy",value:(_vm.product.name),expression:"product.name",modifiers:{"lazy":true}}],attrs:{"type":"text","name":"name"},domProps:{"value":(_vm.product.name)},on:{"change":function($event){_vm.$set(_vm.product, "name", $event.target.value)}}}),_vm._v(" "),_c('button',{staticClass:"btn",on:{"click":function($event){_vm.save()}}},[_vm._v("Save")]),_vm._v("\n                    view: https://user-images.githubusercontent.com/156768/41747362-8f17d1e8-7562-11e8-8c42-72a78233f921.png\n                    create: https://user-images.githubusercontent.com/156768/41747248-230a0142-7562-11e8-919f-41d8dd97cea6.png\n                ")],2):_vm._e()])])])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/screens/product-overview/index.vue":
/*!***************************************************!*\
  !*** ./src/ui/screens/product-overview/index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_87dacfcc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=87dacfcc&scoped=true */ "./src/ui/screens/product-overview/index.vue?vue&type=template&id=87dacfcc&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/screens/product-overview/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_87dacfcc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=87dacfcc&lang=scss&scoped=true */ "./src/ui/screens/product-overview/index.vue?vue&type=style&index=0&id=87dacfcc&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_87dacfcc_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_87dacfcc_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "87dacfcc",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/screens/product-overview/index.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./src/ui/screens/product-overview/index.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/product-overview/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/screens/product-overview/index.vue?vue&type=style&index=0&id=87dacfcc&lang=scss&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./src/ui/screens/product-overview/index.vue?vue&type=style&index=0&id=87dacfcc&lang=scss&scoped=true ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_87dacfcc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=87dacfcc&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/product-overview/index.vue?vue&type=style&index=0&id=87dacfcc&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_87dacfcc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_87dacfcc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_87dacfcc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_87dacfcc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_87dacfcc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/product-overview/index.vue?vue&type=template&id=87dacfcc&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./src/ui/screens/product-overview/index.vue?vue&type=template&id=87dacfcc&scoped=true ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_87dacfcc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=87dacfcc&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/product-overview/index.vue?vue&type=template&id=87dacfcc&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_87dacfcc_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_87dacfcc_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=27.da17b946476030cc065b.js.map