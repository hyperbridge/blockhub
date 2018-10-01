(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/navigation/asset.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/navigation/asset.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        'c-sidebar-menu-link': function cSidebarMenuLink(resolve) {
            return __webpack_require__.e(/*! AMD require */ 18).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/sidebar-menu/menu_item */ "./src/ui/components/sidebar-menu/menu_item.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-sidebar-menu': function cSidebarMenu(resolve) {
            return __webpack_require__.e(/*! AMD require */ 19).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/sidebar-menu/index */ "./src/ui/components/sidebar-menu/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-searcher': function cSearcher(resolve) {
            return __webpack_require__.e(/*! AMD require */ 20).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/searcher */ "./src/ui/components/searcher/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        }
    },
    data: function data() {
        return {
            links: {
                assetManager: [{ to: { path: '/' }, title: 'Top Picks' }, { to: { path: '/' }, title: 'Offers' }, { to: { path: '/' }, title: 'Metadata' }, { to: { path: '/' }, title: 'Owned (13)' }],
                help: [{ to: { path: '/' }, title: 'Buying and Selling Assets' }, { to: { path: '/' }, title: 'How Top Picks are selected' }, { to: { path: '/' }, title: 'Accepting offers' }, { to: { path: '/' }, title: 'General' }, { to: { path: '/assets' }, title: 'Asset Browser' }, { to: { path: '/' }, title: 'MORE ...' }]
            }
        };
    }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/navigation/asset.vue?vue&type=template&id=baa89e22":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/navigation/asset.vue?vue&type=template&id=baa89e22 ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navigation",attrs:{"id":"navigation-default"}},[_c('c-sidebar-menu',{attrs:{"title":"ASSET MANAGER","mClass":"margin-bottom-20","links":_vm.links.assetManager}}),_vm._v(" "),_c('c-sidebar-menu',{attrs:{"sub_title":"Help","mClass":"margin-bottom-20","sub_icon":"fas fa-question-circle","links":_vm.links.help}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/components/navigation/asset.vue":
/*!************************************************!*\
  !*** ./src/ui/components/navigation/asset.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asset_vue_vue_type_template_id_baa89e22__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset.vue?vue&type=template&id=baa89e22 */ "./src/ui/components/navigation/asset.vue?vue&type=template&id=baa89e22");
/* harmony import */ var _asset_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset.vue?vue&type=script&lang=js */ "./src/ui/components/navigation/asset.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _asset_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _asset_vue_vue_type_template_id_baa89e22__WEBPACK_IMPORTED_MODULE_0__["render"],
  _asset_vue_vue_type_template_id_baa89e22__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/navigation/asset.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./src/ui/components/navigation/asset.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_asset_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./asset.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/navigation/asset.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_asset_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/components/navigation/asset.vue?vue&type=template&id=baa89e22":
/*!******************************************************************************!*\
  !*** ./src/ui/components/navigation/asset.vue?vue&type=template&id=baa89e22 ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_asset_vue_vue_type_template_id_baa89e22__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./asset.vue?vue&type=template&id=baa89e22 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/navigation/asset.vue?vue&type=template&id=baa89e22");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_asset_vue_vue_type_template_id_baa89e22__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_asset_vue_vue_type_template_id_baa89e22__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=8.7eb7ad452310d74d884f.js.map