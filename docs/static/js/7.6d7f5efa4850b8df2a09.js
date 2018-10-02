(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/navigation/store.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/navigation/store.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/mixins */ "./src/mixins.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            return __webpack_require__.e(/*! AMD require */ 25).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/searcher */ "./src/ui/components/searcher/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-range-slider': function cRangeSlider(resolve) {
            return __webpack_require__.e(/*! AMD require */ 26).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/range-slider */ "./src/ui/components/range-slider/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-input-searcher': function cInputSearcher(resolve) {
            return __webpack_require__.e(/*! AMD require */ 24).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/inputs/searcher */ "./src/ui/components/inputs/searcher.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        }
    },
    mixins: [_mixins__WEBPACK_IMPORTED_MODULE_2__["arrayHandler"]],
    data: function data() {
        return {
            phrase: '',
            results: [],
            platforms: [{ name: 'windows', prop: 'win' }, { name: 'apple', prop: 'mac' }, { name: 'linux', prop: 'linux' }],
            choosenPlatforms: []
        };
    },

    methods: {
        filter: function filter() {
            alert('Click');
        },
        search: function search() {
            this.results = this.phrase.length ? this.getProductsByName(this.phrase) : [];
        },
        goToSearchPage: function goToSearchPage() {
            this.$router.push({
                name: 'Search Page',
                query: this.phrase.length ? { name: this.phrase } : {}
            });
        }
    },
    computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
        getProductsByName: 'marketplace/getProductsByName'
    }), {
        filteredResults: function filteredResults() {
            var _this = this;

            return this.choosenPlatforms.length ? this.results.filter(function (result) {
                return result.system_requirements.some(function (req) {
                    return _this.choosenPlatforms.includes(req.os);
                });
            }) : this.results;
        }
    })
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/navigation/store.vue?vue&type=style&index=0&id=35e92310&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/navigation/store.vue?vue&type=style&index=0&id=35e92310&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/navigation/store.vue?vue&type=template&id=35e92310&scoped=true":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/navigation/store.vue?vue&type=template&id=35e92310&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navigation",attrs:{"id":"navigation-default"}},[_c('c-sidebar-menu',{attrs:{"title":"STORE","sub_title":"General","mClass":"margin-bottom-20"}},_vm._l((['Home', 'Curators', 'Collections', 'Items']),function(page){return _c('c-sidebar-menu-link',{key:page,attrs:{"to":{ name: page }}},[_vm._v("\n            "+_vm._s(page === 'Home' ? page : 'Browse ' + page)+"\n        ")])})),_vm._v(" "),_c('c-sidebar-menu',{attrs:{"sub_title":"Browse By Genre","sub_icon":"fas fa-gamepad","mClass":"margin-bottom-20"}},_vm._l((['Action', 'Adventure', 'RPG', 'Co-op', 'Multiplayer', 'Sports']),function(param){return _c('c-sidebar-menu-link',{key:param,attrs:{"to":{ name: 'Search Page', query: { tags: param } }}},[_vm._v("\n            "+_vm._s(param)+"\n        ")])})),_vm._v(" "),_c('h3',{staticClass:"text-uppercase"},[_vm._v("Search")]),_vm._v(" "),_c('div',{staticClass:"filter-blk"},[_c('c-searcher',{staticClass:"margin-bottom-20",attrs:{"results":_vm.filteredResults,"resultUrl":"/product/","resultUrlProp":"id","resultTextProp":"name","resultsCount":_vm.filteredResults.length},on:{"input":_vm.search,"click":function($event){_vm.goToSearchPage()}},nativeOn:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.goToSearchPage()}},model:{value:(_vm.phrase),callback:function ($$v) {_vm.phrase=$$v},expression:"phrase"}}),_vm._v(" "),_c('c-range-slider',{attrs:{"label":"Community size","min":1,"max":10000,"sClass":"margin-bottom-20"}}),_vm._v(" "),_c('c-range-slider',{attrs:{"label":"Activity User","min":1,"max":5000,"sClass":"margin-bottom-20"}}),_vm._v(" "),_c('div',{staticClass:"form-group platform-chose"},[_c('label',[_vm._v("Platform Availability")]),_vm._v(" "),_vm._l((_vm.platforms),function(os){return _c('a',{key:os.prop,attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();_vm.handleArray(os.prop, 'choosenPlatforms')}}},[_c('c-icon',{staticClass:"platform-icon",class:[ _vm.choosenPlatforms.includes(os.prop)
                        ? 'platform-icon--active'
                        : 'platform-icon--inactive'
                    ],attrs:{"cat":"fab","name":os.name}})],1)})],2),_vm._v(" "),_vm._m(0)],1),_vm._v(" "),_vm._m(1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"action"},[_c('a',{staticClass:"btn btn-filter",attrs:{"href":"#3"}},[_vm._v("\n                Search\n            ")]),_vm._v(" "),_c('a',{staticClass:"btn btn-link",attrs:{"href":"#3"}},[_vm._v("\n                More filters ...\n            ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"help-block",attrs:{"hidden":""}},[_c('li',{staticClass:"title"},[_c('i',{staticClass:"fas fa-question-circle"}),_vm._v("\n            Help\n        ")]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"/#/help/1/article/purchasing-with-cryptocurrency"}},[_vm._v("Purchasing with Cryptocurrency")]),_vm._v(" "),_c('a',{attrs:{"href":"/#/help/1/article/content-availability-by-country"}},[_vm._v("Content Availability by Country")]),_vm._v(" "),_c('a',{attrs:{"href":"/#/help/1/article/becoming-a-community-curator"}},[_vm._v("Becoming a Community Curator")]),_vm._v(" "),_c('a',{attrs:{"href":"/#/help/1/article/18-plus-games-and-verification"}},[_vm._v("18+ Games and Verification")]),_vm._v(" "),_c('a',{attrs:{"href":"/#/help/1/article/recporting-misleading-content"}},[_vm._v("Reporting Misleading Content")])]),_vm._v(" "),_c('li',[_c('a',{staticClass:"btn btn-link",attrs:{"href":"/#/help/1"}},[_vm._v("\n                More...\n            ")])])])}]



/***/ }),

/***/ "./src/mixins.js":
/*!***********************!*\
  !*** ./src/mixins.js ***!
  \***********************/
/*! exports provided: debouncer, arrayHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debouncer", function() { return debouncer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayHandler", function() { return arrayHandler; });
var debouncer = {
    data: function data() {
        return {
            timeout: 0
        };
    },

    methods: {
        debounce: function debounce(fn) {
            var debounceTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
            var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'timeout';

            clearTimeout(this[timeout]);
            this[timeout] = setTimeout(fn, debounceTime);
        }
    }
};

var arrayHandler = {
    methods: {
        handleArray: function handleArray(val, arrayName) {
            var itemIndex = this[arrayName].indexOf(val);
            itemIndex > -1 ? this[arrayName].splice(itemIndex, 1) : this[arrayName].push(val);
        }
    }
};

/***/ }),

/***/ "./src/ui/components/navigation/store.vue":
/*!************************************************!*\
  !*** ./src/ui/components/navigation/store.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_vue_vue_type_template_id_35e92310_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.vue?vue&type=template&id=35e92310&scoped=true */ "./src/ui/components/navigation/store.vue?vue&type=template&id=35e92310&scoped=true");
/* harmony import */ var _store_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.vue?vue&type=script&lang=js */ "./src/ui/components/navigation/store.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _store_vue_vue_type_style_index_0_id_35e92310_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store.vue?vue&type=style&index=0&id=35e92310&lang=scss&scoped=true */ "./src/ui/components/navigation/store.vue?vue&type=style&index=0&id=35e92310&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _store_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _store_vue_vue_type_template_id_35e92310_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _store_vue_vue_type_template_id_35e92310_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "35e92310",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/navigation/store.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./src/ui/components/navigation/store.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_store_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./store.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/navigation/store.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_store_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/components/navigation/store.vue?vue&type=style&index=0&id=35e92310&lang=scss&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./src/ui/components/navigation/store.vue?vue&type=style&index=0&id=35e92310&lang=scss&scoped=true ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_store_vue_vue_type_style_index_0_id_35e92310_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./store.vue?vue&type=style&index=0&id=35e92310&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/navigation/store.vue?vue&type=style&index=0&id=35e92310&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_store_vue_vue_type_style_index_0_id_35e92310_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_store_vue_vue_type_style_index_0_id_35e92310_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_store_vue_vue_type_style_index_0_id_35e92310_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_store_vue_vue_type_style_index_0_id_35e92310_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_store_vue_vue_type_style_index_0_id_35e92310_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/navigation/store.vue?vue&type=template&id=35e92310&scoped=true":
/*!******************************************************************************************!*\
  !*** ./src/ui/components/navigation/store.vue?vue&type=template&id=35e92310&scoped=true ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_store_vue_vue_type_template_id_35e92310_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./store.vue?vue&type=template&id=35e92310&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/navigation/store.vue?vue&type=template&id=35e92310&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_store_vue_vue_type_template_id_35e92310_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_store_vue_vue_type_template_id_35e92310_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=7.6d7f5efa4850b8df2a09.js.map