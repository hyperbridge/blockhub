(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[124],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/purchase-block/index.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/purchase-block/index.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'purchase-block',
    props: {
        tags: {
            type: Array
        },
        title: {
            type: String,
            default: null
        },
        price: {
            type: Number,
            default: null
        },
        eligibleTokens: {
            type: Number,
            default: 0
        },
        releaseDate: {
            type: String
        },
        offers_purchases: {
            type: Boolean,
            default: false
        },
        isUnavailable: {
            type: Boolean,
            default: false
        },
        isPurchased: {
            type: Boolean,
            default: false
        },
        isReleased: {
            type: Boolean,
            default: false
        },
        hasDemo: {
            type: Boolean,
            default: false
        },
        inWishlist: {
            type: Boolean,
            default: false
        },
        purchaseLink: String,
        fullReviewsLink: String,
        onClickPurchase: Function
    },
    components: {
        'c-block': function cBlock(resolve) {
            return __webpack_require__.e(/*! AMD require */ 86).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/block */ "./src/ui/components/block/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        }
    },
    methods: {
        dateFormat: function dateFormat(date) {
            return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format('MM/DD/YYYY');
        }
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/purchase-block/index.vue?vue&type=style&index=0&id=ec6c13cc&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/purchase-block/index.vue?vue&type=style&index=0&id=ec6c13cc&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/purchase-block/index.vue?vue&type=template&id=ec6c13cc&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/purchase-block/index.vue?vue&type=template&id=ec6c13cc&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-block',{staticClass:"card invert purchase-block",attrs:{"title":_vm.title}},[(_vm.tags)?_c('div',{staticClass:"purchase-block__tags"},_vm._l((_vm.tags),function(tag,index){return _c('div',{key:index},[_vm._v("\n            "+_vm._s(tag)+"\n        ")])})):_vm._e(),_vm._v(" "),_c('div',{staticClass:"purchase-block__price"},[(_vm.price)?_c('span',[_vm._v("$"+_vm._s(_vm.price))]):_c('span',[_vm._v("$0.00")])]),_vm._v(" "),_c('div',{staticClass:"purchase-block__info"},[(_vm.eligibleTokens)?_c('div',[_vm._v("Eligible for up to "),_c('i',{staticClass:"fas fa-coins mx-1",staticStyle:{"color":"#FADC72"}}),_vm._v(" HBX +"+_vm._s(_vm.eligibleTokens))]):_vm._e(),_vm._v(" "),(_vm.offers_purchases)?_c('div',[_vm._v("Offers In-Game Purchases")]):_vm._e(),_vm._v(" "),(_vm.releaseDate)?_c('div',{staticClass:"release-date"},[_vm._v("Release date: "+_vm._s(_vm.dateFormat(_vm.releaseDate)))]):_vm._e(),_vm._v(" "),(_vm.isPurchased)?_c('div',{staticClass:"purchased-status"},[_c('i',{staticClass:"fas fa-check"}),_vm._v("\n            Purchased\n        ")]):_vm._e(),_vm._v(" "),(_vm.isUnavailable)?_c('div',{staticClass:"unavailable-status"},[_c('i',{staticClass:"fas fa-ban"}),_vm._v("\n            Unavailable\n        ")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"purchase-block__buttons-group"},[(_vm.isReleased && _vm.price)?_c('c-button',{attrs:{"status":"success","href":_vm.purchaseLink,"icon":"shopping-cart","size":"lg"},on:{"click":_vm.onClickPurchase}},[_vm._v("\n            Proceed to Purchase\n        ")]):_vm._e(),_vm._v(" "),(!_vm.price)?_c('c-button',{attrs:{"status":"success","size":"lg","icon":"download","href":_vm.purchaseLink},on:{"click":_vm.onClickPurchase}},[_vm._v("\n            Free Download\n        ")]):_vm._e(),_vm._v(" "),(_vm.hasDemo)?_c('c-button',{attrs:{"icon_hide":"","icon":"download","href":_vm.fullReviewsLink}},[_vm._v("\n            Download Demo\n        ")]):_vm._e(),_vm._v(" "),(!_vm.inWishlist)?_c('button',{staticClass:"wishlist-btn",on:{"click":function($event){_vm.$emit('addToWishlist')}}},[_c('i',{staticClass:"far fa-heart mr-2"}),_vm._v("\n            Add to Wishlist\n        ")]):_vm._e(),_vm._v(" "),(_vm.inWishlist)?_c('button',{staticClass:"wishlist-btn is-in",on:{"click":function($event){_vm.$emit('removeFromWishlist')}}},[_c('i',{staticClass:"fas fa-heart mr-2"}),_vm._v("\n            Remove from Wishlist\n        ")]):_vm._e()],1)])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/components/purchase-block/index.vue":
/*!****************************************************!*\
  !*** ./src/ui/components/purchase-block/index.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_ec6c13cc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=ec6c13cc&scoped=true */ "./src/ui/components/purchase-block/index.vue?vue&type=template&id=ec6c13cc&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/components/purchase-block/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_ec6c13cc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=ec6c13cc&lang=scss&scoped=true */ "./src/ui/components/purchase-block/index.vue?vue&type=style&index=0&id=ec6c13cc&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_ec6c13cc_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_ec6c13cc_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ec6c13cc",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/purchase-block/index.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./src/ui/components/purchase-block/index.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/purchase-block/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/components/purchase-block/index.vue?vue&type=style&index=0&id=ec6c13cc&lang=scss&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./src/ui/components/purchase-block/index.vue?vue&type=style&index=0&id=ec6c13cc&lang=scss&scoped=true ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ec6c13cc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=ec6c13cc&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/purchase-block/index.vue?vue&type=style&index=0&id=ec6c13cc&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ec6c13cc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ec6c13cc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ec6c13cc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ec6c13cc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ec6c13cc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/purchase-block/index.vue?vue&type=template&id=ec6c13cc&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./src/ui/components/purchase-block/index.vue?vue&type=template&id=ec6c13cc&scoped=true ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ec6c13cc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=ec6c13cc&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/purchase-block/index.vue?vue&type=template&id=ec6c13cc&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ec6c13cc_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ec6c13cc_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=124.5a839f5171d07ea58e4b.js.map