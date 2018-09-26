(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[147],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/store/curator-review.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/store/curator-review.vue?vue&type=script&lang=js ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'curator-review',
    props: {
        review: {
            type: Object,
            required: true
        }
    },
    components: {
        'c-author': function cAuthor(resolve) {
            return __webpack_require__.e(/*! AMD require */ 114).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/author */ "./src/ui/components/author/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-rating-stars': function cRatingStars(resolve) {
            return __webpack_require__.e(/*! AMD require */ 97).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/rating-stars */ "./src/ui/components/rating-stars/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-button': function cButton(resolve) {
            return __webpack_require__.e(/*! AMD require */ 148).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/buttons/wide */ "./src/ui/components/buttons/wide.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        }
    },
    data: function data() {
        return {
            read_more: false
        };
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/store/curator-review.vue?vue&type=style&index=0&id=48a883e4&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/store/curator-review.vue?vue&type=style&index=0&id=48a883e4&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/store/curator-review.vue?vue&type=template&id=48a883e4&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/store/curator-review.vue?vue&type=template&id=48a883e4&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"curator-review"},[_c('img',{staticClass:"curator-review__img",attrs:{"src":_vm.review.game.img}}),_vm._v(" "),_c('div',{staticClass:"curator-review__header"},[_c('c-author',{attrs:{"author":_vm.review.author}}),_vm._v(" "),_c('span',{staticStyle:{"font-size":"22px"}},[_c('i',{staticClass:"fas fa-star"}),_vm._v(" "),_c('strong',[_vm._v(_vm._s(_vm.review.rate))])])],1),_vm._v(" "),_c('transition',{attrs:{"name":"fade-scale"}},[(_vm.read_more)?_c('p',{key:1},[_vm._v(_vm._s(_vm.review.text))]):_c('p',[_vm._v(_vm._s(_vm.review.text.substring(0, 240))+"...")])]),_vm._v(" "),_c('a',{staticClass:"text-white font-weight-bold",attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();_vm.read_more = !_vm.read_more}}},[_vm._v("\n        "+_vm._s(_vm.read_more ? 'SHOW LESS' : 'MORE...')+"\n    ")]),_vm._v(" "),_c('h4',{staticClass:"curator-review__more-header"},[_vm._v("More curated by "+_vm._s(_vm.review.author.name))]),_vm._v(" "),_c('ul',{staticClass:"more_reviews"},_vm._l((_vm.review.more_reviews),function(sub_review,index){return _c('li',{key:index,staticClass:"sub-review"},[_c('img',{staticClass:"sub-review__img",attrs:{"src":sub_review.game.img}}),_vm._v(" "),_c('div',{staticClass:"sub-review__details"},[_c('h5',{staticClass:"margin-bottom-5"},[_c('a',{staticClass:"text-white font-weight-bold",attrs:{"href":"#"}},[_vm._v(_vm._s(sub_review.game.title))])]),_vm._v(" "),_c('div',{staticClass:"text-white font-weight-bold"},[_c('span',{staticStyle:{"font-size":"22px"}},[_vm._v(_vm._s(sub_review.rate))])])])])})),_vm._v(" "),_c('c-button',[_c('strong',[_vm._v("VIEW CURATOR PAGE")])])],1)}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/components/store/curator-review.vue":
/*!****************************************************!*\
  !*** ./src/ui/components/store/curator-review.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curator_review_vue_vue_type_template_id_48a883e4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curator-review.vue?vue&type=template&id=48a883e4&scoped=true */ "./src/ui/components/store/curator-review.vue?vue&type=template&id=48a883e4&scoped=true");
/* harmony import */ var _curator_review_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curator-review.vue?vue&type=script&lang=js */ "./src/ui/components/store/curator-review.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _curator_review_vue_vue_type_style_index_0_id_48a883e4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curator-review.vue?vue&type=style&index=0&id=48a883e4&lang=scss&scoped=true */ "./src/ui/components/store/curator-review.vue?vue&type=style&index=0&id=48a883e4&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _curator_review_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _curator_review_vue_vue_type_template_id_48a883e4_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _curator_review_vue_vue_type_template_id_48a883e4_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "48a883e4",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/store/curator-review.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./src/ui/components/store/curator-review.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_curator_review_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./curator-review.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/store/curator-review.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_curator_review_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/components/store/curator-review.vue?vue&type=style&index=0&id=48a883e4&lang=scss&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./src/ui/components/store/curator-review.vue?vue&type=style&index=0&id=48a883e4&lang=scss&scoped=true ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_curator_review_vue_vue_type_style_index_0_id_48a883e4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./curator-review.vue?vue&type=style&index=0&id=48a883e4&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/store/curator-review.vue?vue&type=style&index=0&id=48a883e4&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_curator_review_vue_vue_type_style_index_0_id_48a883e4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_curator_review_vue_vue_type_style_index_0_id_48a883e4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_curator_review_vue_vue_type_style_index_0_id_48a883e4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_curator_review_vue_vue_type_style_index_0_id_48a883e4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_curator_review_vue_vue_type_style_index_0_id_48a883e4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/store/curator-review.vue?vue&type=template&id=48a883e4&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./src/ui/components/store/curator-review.vue?vue&type=template&id=48a883e4&scoped=true ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_curator_review_vue_vue_type_template_id_48a883e4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./curator-review.vue?vue&type=template&id=48a883e4&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/store/curator-review.vue?vue&type=template&id=48a883e4&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_curator_review_vue_vue_type_template_id_48a883e4_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_curator_review_vue_vue_type_template_id_48a883e4_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=147.8284f5082a80e7f4e5f5.js.map