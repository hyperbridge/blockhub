(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[144],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/store/games-explorer.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/store/games-explorer.vue?vue&type=script&lang=js ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'games-explorer',
    components: {
        'c-block': function cBlock(resolve) {
            return __webpack_require__.e(/*! AMD require */ 86).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/block */ "./src/ui/components/block/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-heading-bar': function cHeadingBar(resolve) {
            return Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/heading-bar */ "./src/ui/components/heading-bar/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-heading-bar-fields': function cHeadingBarFields(resolve) {
            return __webpack_require__.e(/*! AMD require */ 85).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/heading-bar/additional-action */ "./src/ui/components/heading-bar/additional-action.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-input-searcher': function cInputSearcher(resolve) {
            return __webpack_require__.e(/*! AMD require */ 134).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/inputs/searcher */ "./src/ui/components/inputs/searcher.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-dropdown': function cDropdown(resolve) {
            return __webpack_require__.e(/*! AMD require */ 141).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/dropdown-menu/type-2 */ "./src/ui/components/dropdown-menu/type-2.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-game-grid': function cGameGrid(resolve) {
            return __webpack_require__.e(/*! AMD require */ 94).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/games-grid/with-description */ "./src/ui/components/games-grid/with-description.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-content-navigation': function cContentNavigation(resolve) {
            return __webpack_require__.e(/*! AMD require */ 84).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/content-navigation */ "./src/ui/components/content-navigation/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-option-tag': function cOptionTag(resolve) {
            return __webpack_require__.e(/*! AMD require */ 145).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/option-tag */ "./src/ui/components/option-tag/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        }
    },
    data: function data() {
        return {
            category: 'top_selling_products',
            phrase: '',
            selectedGenres: [],
            sortBy: {
                property: null,
                asc: true
            },
            sortOptions: [{ title: 'Name', property: 'name', icon: 'language' }, { title: 'Price', property: 'price', icon: 'dollar-sign' }]
        };
    },

    methods: {
        setGenre: function setGenre(genre) {
            var genreKey = this.selectedGenres.indexOf(genre);
            genreKey > -1 ? this.selectedGenres.splice(genreKey, 1) : this.selectedGenres.push(genre);
        },
        clearFilters: function clearFilters() {
            this.selectedGenres = [];
            this.phrase = '';
            this.sortBy.property = null;
            this.sortBy.asc = true;
        },
        setSort: function setSort(prop, direction) {
            var _sortBy = this.sortBy,
                property = _sortBy.property,
                asc = _sortBy.asc;

            this.sortBy.property = property === prop && direction === asc ? null : prop;
            this.sortBy.asc = direction;
        }
    },
    computed: {
        products: function products() {
            return this.$store.state.marketplace[this.category];
        },
        filteredProducts: function filteredProducts() {
            var _this = this;

            var _sortBy2 = this.sortBy,
                property = _sortBy2.property,
                asc = _sortBy2.asc;

            var sortDir = function sortDir(dir) {
                return asc ? dir : dir * -1;
            };
            return this.products.filter(function (product) {
                return product.name.toLowerCase().includes(_this.phrase.toLowerCase());
            }).filter(function (product) {
                return _this.selectedGenres.length ? product.developer_tags.some(function (genre) {
                    return _this.selectedGenres.includes(genre);
                }) : true;
            }).sort(function (a, b) {
                return property ? a[property] > b[property] ? sortDir(1) : a[property] < b[property] ? sortDir(-1) : 0 : 0;
            });
        },
        availableGenres: function availableGenres() {
            return this.products.reduce(function (tags, product) {
                product.developer_tags.forEach(function (tag) {
                    if (!tags.includes(tag)) tags.push(tag);
                });
                return tags;
            }, []);
        },
        filtersActive: function filtersActive() {
            var phrase = this.phrase,
                selectedGenres = this.selectedGenres,
                property = this.sortBy.property;

            return phrase.length || selectedGenres.length || property;
        },
        sortProps: function sortProps() {
            return this.sortOptions.map(function (option) {
                return option.property;
            });
        }
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/store/games-explorer.vue?vue&type=style&index=0&id=75ab4072&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/store/games-explorer.vue?vue&type=style&index=0&id=75ab4072&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/store/games-explorer.vue?vue&type=template&id=75ab4072&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/store/games-explorer.vue?vue&type=template&id=75ab4072&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row product-grid"},[_c('c-block',{attrs:{"noGutter":true,"bgGradient":true,"onlyContentBg":true}},[_c('c-heading-bar',{staticClass:"mb-0",attrs:{"slot":"title","headingTabs":[
                { title: 'Top Selling', category: 'top_selling_products' },
                { title: 'New Releases', category: 'new_products' },
                { title: 'Upcoming', category: 'upcoming_products' }
            ]},on:{"changeTab":function($event){_vm.category = $event; _vm.clearFilters()}},slot:"title"},[_c('template',{slot:"additional-action"},[_c('span',{staticClass:"sort-title"},[_vm._v("Sort by:")]),_vm._v(" "),_vm._l((_vm.sortOptions),function(opt,index){return _c('c-heading-bar-fields',{key:index,attrs:{"name":opt.title,"icon":opt.icon,"activeUp":_vm.sortBy.property === opt.property ? _vm.sortBy.asc : null},on:{"clickUp":function($event){_vm.setSort(opt.property, true)},"clickDown":function($event){_vm.setSort(opt.property, false)}}})})],2)],2),_vm._v(" "),_c('div',{staticClass:"product-grid__filters"},[_c('div',{staticClass:"d-flex align-items-center"},[_c('c-dropdown',{staticClass:"product-genre",attrs:{"id":"products-genres","name":"Filter by Genre","showBg":true}},[_c('div',{staticClass:"product-genre__content"},_vm._l((_vm.availableGenres),function(genre){return _c('a',{key:genre,class:{ 'product-genre__btn--active': _vm.selectedGenres.includes(genre) },attrs:{"href":("#" + genre)},on:{"click":function($event){$event.preventDefault();_vm.setGenre(genre)}}},[_vm._v(_vm._s(genre))])}))]),_vm._v(" "),_c('c-input-searcher',{model:{value:(_vm.phrase),callback:function ($$v) {_vm.phrase=$$v},expression:"phrase"}})],1),_vm._v(" "),_c('c-button',{attrs:{"status":"info","icon_hide":""}},[_vm._v("All New Releases")])],1),_vm._v(" "),_c('transition',{attrs:{"name":"slide-in"}},[(_vm.filtersActive)?_c('div',{staticClass:"active-filters"},[_vm._v("\n                Active filters:\n                "),_c('div',{staticClass:"active-filters__content"},[(_vm.phrase.length)?_c('c-option-tag',{attrs:{"title":"Name:","text":_vm.phrase},on:{"delete":function($event){_vm.phrase = ''}}}):_vm._e(),_vm._v(" "),(_vm.selectedGenres.length)?_c('c-option-tag',{attrs:{"title":"Genres:"},on:{"delete":function($event){_vm.selectedGenres = []}}},_vm._l((_vm.selectedGenres),function(genre,index){return _c('c-option-tag',{key:index,attrs:{"text":genre,"isNested":""},on:{"delete":function($event){_vm.selectedGenres.splice(index, 1)}}})})):_vm._e(),_vm._v(" "),(_vm.sortBy.property)?_c('c-option-tag',{attrs:{"title":"Sort by:"},on:{"delete":function($event){_vm.sortBy.property = null}}},[_c('c-option-tag',{attrs:{"title":"Property:","isNested":""},on:{"delete":function($event){_vm.sortBy.property = null}}},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.sortBy.property),expression:"sortBy.property"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.sortBy, "property", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.sortProps),function(prop){return _c('option',{key:prop,domProps:{"value":prop}},[_vm._v("\n                                    "+_vm._s(_vm._f("upperFirstChar")(prop))+"\n                                ")])}))]),_vm._v(" "),_c('c-option-tag',{attrs:{"title":"Direction:","isNested":"","hideButton":""},on:{"delete":function($event){_vm.sortBy.asc = !_vm.sortBy.asc}}},[_vm._v("\n                            "+_vm._s(_vm.sortBy.asc ? 'Ascending' : 'Descending')+"\n                            "),_c('c-icon',{staticClass:"sort-button",class:{ 'desc': !_vm.sortBy.asc },attrs:{"name":"arrow-up"},on:{"click":function($event){_vm.sortBy.asc = !_vm.sortBy.asc}}})],1)],1):_vm._e()],1)]):_vm._e()]),_vm._v(" "),(_vm.filteredProducts.length)?_c('c-game-grid',{attrs:{"itemInRow":2,"showRating":false,"items":_vm.filteredProducts,"showTime":"","itemBg":"transparent"}}):(_vm.filtersActive)?_c('div',[_c('p',[_vm._v("No products were found for your filters")]),_vm._v(" "),_c('c-button',{attrs:{"status":"info","size":"md","icon_hide":""},on:{"click":function($event){_vm.clearFilters()}}},[_vm._v("Clear filters")])],1):_c('p',[_vm._v("\n            No products were found\n        ")]),_vm._v(" "),_c('c-content-navigation')],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/components/store/games-explorer.vue":
/*!****************************************************!*\
  !*** ./src/ui/components/store/games-explorer.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _games_explorer_vue_vue_type_template_id_75ab4072_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./games-explorer.vue?vue&type=template&id=75ab4072&scoped=true */ "./src/ui/components/store/games-explorer.vue?vue&type=template&id=75ab4072&scoped=true");
/* harmony import */ var _games_explorer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./games-explorer.vue?vue&type=script&lang=js */ "./src/ui/components/store/games-explorer.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _games_explorer_vue_vue_type_style_index_0_id_75ab4072_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./games-explorer.vue?vue&type=style&index=0&id=75ab4072&lang=scss&scoped=true */ "./src/ui/components/store/games-explorer.vue?vue&type=style&index=0&id=75ab4072&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _games_explorer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _games_explorer_vue_vue_type_template_id_75ab4072_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _games_explorer_vue_vue_type_template_id_75ab4072_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "75ab4072",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/store/games-explorer.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./src/ui/components/store/games-explorer.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_games_explorer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./games-explorer.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/store/games-explorer.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_games_explorer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/components/store/games-explorer.vue?vue&type=style&index=0&id=75ab4072&lang=scss&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./src/ui/components/store/games-explorer.vue?vue&type=style&index=0&id=75ab4072&lang=scss&scoped=true ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_games_explorer_vue_vue_type_style_index_0_id_75ab4072_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./games-explorer.vue?vue&type=style&index=0&id=75ab4072&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/store/games-explorer.vue?vue&type=style&index=0&id=75ab4072&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_games_explorer_vue_vue_type_style_index_0_id_75ab4072_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_games_explorer_vue_vue_type_style_index_0_id_75ab4072_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_games_explorer_vue_vue_type_style_index_0_id_75ab4072_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_games_explorer_vue_vue_type_style_index_0_id_75ab4072_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_games_explorer_vue_vue_type_style_index_0_id_75ab4072_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/store/games-explorer.vue?vue&type=template&id=75ab4072&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./src/ui/components/store/games-explorer.vue?vue&type=template&id=75ab4072&scoped=true ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_games_explorer_vue_vue_type_template_id_75ab4072_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./games-explorer.vue?vue&type=template&id=75ab4072&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/store/games-explorer.vue?vue&type=template&id=75ab4072&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_games_explorer_vue_vue_type_template_id_75ab4072_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_games_explorer_vue_vue_type_template_id_75ab4072_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=144.21e72f5060c805ebd319.js.map