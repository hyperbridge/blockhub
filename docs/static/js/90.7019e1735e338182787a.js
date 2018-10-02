(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/search/index.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/search/index.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/mixins */ "./src/mixins.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        'c-checkbox': function cCheckbox(resolve) {
            return __webpack_require__.e(/*! AMD require */ 100).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/checkbox/ */ "./src/ui/components/checkbox/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-block': function cBlock(resolve) {
            return __webpack_require__.e(/*! AMD require */ 95).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/block */ "./src/ui/components/block/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-searcher': function cSearcher(resolve) {
            return __webpack_require__.e(/*! AMD require */ 25).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/searcher */ "./src/ui/components/searcher/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-input-searcher': function cInputSearcher(resolve) {
            return __webpack_require__.e(/*! AMD require */ 24).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/inputs/searcher */ "./src/ui/components/inputs/searcher.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-game-grid': function cGameGrid(resolve) {
            return __webpack_require__.e(/*! AMD require */ 101).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/game-grid/with-description */ "./src/ui/components/game-grid/with-description.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-spinner': function cSpinner(resolve) {
            return __webpack_require__.e(/*! AMD require */ 102).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/spinner */ "./src/ui/components/spinner/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-option-tag': function cOptionTag(resolve) {
            return __webpack_require__.e(/*! AMD require */ 103).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/option-tag */ "./src/ui/components/option-tag/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-range-slider': function cRangeSlider(resolve) {
            return __webpack_require__.e(/*! AMD require */ 104).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/range-slider/pure */ "./src/ui/components/range-slider/pure.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-list': function cList(resolve) {
            return __webpack_require__.e(/*! AMD require */ 105).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/list */ "./src/ui/components/list/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-content-navigation': function cContentNavigation(resolve) {
            return __webpack_require__.e(/*! AMD require */ 93).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/content-navigation */ "./src/ui/components/content-navigation/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        }
    },
    mixins: [_mixins__WEBPACK_IMPORTED_MODULE_4__["debouncer"]],
    data: function data() {
        return {
            systemTags: [{ value: "featured", selected: false }, { value: "new", selected: false }, { value: "sale", selected: false }, { value: "specials", selected: false }, { value: "top_seller", selected: false }, { value: "trending", selected: false }, { value: "upcoming", selected: false }],
            phrase: '',
            results: [],
            isTyping: false,
            selectableTags: [],
            selectableLanguages: [],
            price: {
                min: 0,
                max: 0
            },
            expandFilters: false,
            timeout2: 0
        };
    },

    methods: {
        search: function search() {
            var _this = this;

            this.debounce(function () {
                if (!_this.isTyping) _this.isTyping = true;
                if (_this.filtersActive) {
                    _this.debounce(function () {
                        _this.isTyping = false;
                        _this.results = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(_this.getProductsQuery(_this.query)));
                    }, 200, 'timeout2');
                } else {
                    _this.isTyping = false;
                    _this.results = _this.products;
                }
                _this.$router.replace({ name: 'Search Page', query: _this.urlQuery });
            }, 500);
        },
        clearFilters: function clearFilters() {
            var phrase = this.phrase,
                selectedSpecials = this.selectedSpecials,
                selectedGenres = this.selectedGenres,
                selectedLanguages = this.selectedLanguages,
                price = this.price;

            if (phrase.length) this.phrase = '';
            if (selectedSpecials.length) this.selectedSpecials.forEach(function (tag) {
                return tag.selected = false;
            });
            if (selectedGenres.length) this.selectedGenres.forEach(function (tag) {
                return tag.selected = false;
            });
            if (selectedLanguages.length) this.selectedLanguages.forEach(function (lang) {
                return lang.selected = false;
            });
            if (price.min || price.max) {
                this.price.min = 0;this.price.max = 0;
            };
        }
    },
    computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])({
        getProductsQuery: 'marketplace/getProductsQuery',
        products: 'marketplace/productsArray',
        productsTags: 'marketplace/productsTags',
        languages: 'marketplace/productsLanguages'
    }), {
        query: function query() {
            var phrase = this.phrase,
                selectedSpecials = this.selectedSpecials,
                selectedGenres = this.selectedGenres,
                selectedLanguages = this.selectedLanguages,
                price = this.price;

            var query = {};
            if (phrase.length) query['name'] = { '$eq': phrase };
            if (selectedSpecials.length) query['system_tags'] = { '$contains': selectedSpecials.map(function (tag) {
                    return tag.value;
                }) };
            if (selectedGenres.length) query['developer_tags'] = { '$contains': selectedGenres.map(function (tag) {
                    return tag.name;
                }) };
            // if (selectedLanguages.length) query['language_support'] = {
            //     '$contains': { name: selectedLanguages.map(lang => lang.name) }
            // }
            if (price.min || price.max) query['price'] = { '$between': [price.min, price.max | 300] };
            return query;
        },
        resultsFiltered: function resultsFiltered() {
            var _this2 = this;

            return this.selectedLanguagesNames.length ? this.results.filter(function (product) {
                return product.language_support.filter(function (lang) {
                    return _this2.selectedLanguagesNames.includes(lang.name);
                }).length;
            }) : this.results;
        },
        searchingFilters: function searchingFilters() {
            var phrase = this.phrase,
                selectedSpecials = this.selectedSpecials,
                selectedGenres = this.selectedGenres,
                selectedLanguages = this.selectedLanguages,
                price = this.price;

            return {
                phrase: phrase,
                selectedSpecials: selectedSpecials,
                selectedGenres: selectedGenres,
                selectedLanguages: selectedLanguages,
                price: price
            };
        },
        selectedGenres: function selectedGenres() {
            return this.selectableTags.filter(function (tag) {
                return tag.selected;
            });
        },
        selectedSpecials: function selectedSpecials() {
            return this.systemTags.filter(function (tag) {
                return tag.selected;
            });
        },
        selectedLanguages: function selectedLanguages() {
            return this.selectableLanguages.filter(function (lang) {
                return lang.selected;
            });
        },
        selectedLanguagesNames: function selectedLanguagesNames() {
            return this.selectedLanguages.map(function (lang) {
                return lang.name;
            });
        },
        filtersActive: function filtersActive() {
            return !!(this.selectedGenres.length || this.phrase.length || this.selectedSpecials.length || this.price.max || this.price.min || this.selectedLanguages.length);
        },
        urlQuery: function urlQuery() {
            var urlQuery = {};
            var phrase = this.phrase,
                selectedSpecials = this.selectedSpecials,
                selectedGenres = this.selectedGenres,
                selectedLanguages = this.selectedLanguages,
                price = this.price;

            if (phrase.length) urlQuery.name = phrase;
            if (price.min) urlQuery.priceMin = price.min;
            if (price.max) urlQuery.priceMax = price.max;
            if (selectedSpecials.length) urlQuery.specials = selectedSpecials.map(function (tag) {
                return tag.value;
            });
            if (selectedGenres.length) urlQuery.tags = selectedGenres.map(function (tag) {
                return tag.name;
            });
            if (selectedLanguages.length) urlQuery.langs = selectedLanguages.map(function (tag) {
                return tag.name;
            });
            return urlQuery;
        }
    }),
    mounted: function mounted() {
        if (!babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.$route.query).length) {
            this.results = this.products;
        } else {

            this.isTyping = true;
            var _$route$query = this.$route.query,
                tags = _$route$query.tags,
                langs = _$route$query.langs,
                name = _$route$query.name,
                priceMin = _$route$query.priceMin,
                priceMax = _$route$query.priceMax,
                specials = _$route$query.specials;


            if (name) this.phrase = name;
            if (priceMin) this.price.min = priceMin;
            if (priceMax) this.price.max = priceMax;

            this.selectableTags = this.productsTags.map(function (tag) {
                return {
                    name: tag, selected: tags && tags.includes(tag)
                };
            });

            this.selectableLanguages = this.languages.map(function (lang) {
                return {
                    name: lang, selected: !!(langs && langs.includes(lang))
                };
            });

            if (specials) {
                this.systemTags.forEach(function (tag) {
                    if (specials.includes(tag.value)) tag.selected = true;
                });
            }
        }
    },

    watch: {
        searchingFilters: {
            handler: 'search',
            deep: true
        }
    },
    filters: {
        replaceLoDash: function replaceLoDash(val) {
            return val.replace(/_/g, ' ');
        }
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/search/index.vue?vue&type=style&index=0&id=19bb3586&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/search/index.vue?vue&type=style&index=0&id=19bb3586&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/search/index.vue?vue&type=template&id=19bb3586&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/search/index.vue?vue&type=template&id=19bb3586&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-layout',[_c('div',{staticClass:"content",attrs:{"id":"content"}},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('c-block',{staticClass:"searching-box",attrs:{"title":"Search"}},[_c('div',{staticClass:"search__main"},[_c('c-input-searcher',{attrs:{"placeholder":"Search for games","aria-placeholder":"Search for games"},model:{value:(_vm.phrase),callback:function ($$v) {_vm.phrase=$$v},expression:"phrase"}}),_vm._v(" "),_c('c-button',{attrs:{"status":"success","size":"lg","icon":"sliders-h","data-toggle":"collapse","data-target":"#expand-filters","aria-expanded":"false","aria-controls":"collapseFilters"},on:{"click":function($event){_vm.expandFilters = !_vm.expandFilters}}},[_vm._v("Filters")])],1),_vm._v(" "),_c('transition',{attrs:{"name":"slide-in-top"}},[(_vm.expandFilters)?_c('div',{staticClass:"search-filters__container"},[_c('div',{staticClass:"filter-box"},[_c('h4',[_vm._v("\n                                    Specials:\n                                    "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.selectedSpecials.length),expression:"selectedSpecials.length"}]},[_vm._v("\n                                        ("+_vm._s(_vm.selectedSpecials.length)+")\n                                    ")])]),_vm._v(" "),_vm._l((_vm.systemTags),function(tag,index){return _c('c-checkbox',{key:index,attrs:{"id":("specials-" + (tag.value))},model:{value:(tag.selected),callback:function ($$v) {_vm.$set(tag, "selected", $$v)},expression:"tag.selected"}},[_vm._v("\n                                    "+_vm._s(_vm._f("upperFirstChar")(_vm._f("replaceLoDash")(tag.value)))+"\n                                ")])})],2),_vm._v(" "),_c('div',{staticClass:"filter-box"},[_c('h4',[_vm._v("\n                                    Price range:\n                                    "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.price.min && _vm.price.max),expression:"price.min && price.max"}]},[_vm._v("\n                                        ("+_vm._s(_vm.price.min)+" - "+_vm._s(_vm.price.max)+")\n                                    ")])]),_vm._v(" "),_c('p',{staticClass:"margin-top-20"},[_vm._v("Minimum:")]),_vm._v(" "),_c('c-range-slider',{attrs:{"min":0,"max":60},model:{value:(_vm.price.min),callback:function ($$v) {_vm.$set(_vm.price, "min", _vm._n($$v))},expression:"price.min"}}),_vm._v(" "),_c('p',{staticClass:"margin-top-20"},[_vm._v("Maximum:")]),_vm._v(" "),_c('c-range-slider',{attrs:{"max":300},model:{value:(_vm.price.max),callback:function ($$v) {_vm.$set(_vm.price, "max", _vm._n($$v))},expression:"price.max"}})],1),_vm._v(" "),_c('div',{staticClass:"filter-box"},[_c('h4',[_vm._v("\n                                    Genres:\n                                    "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.selectedGenres.length),expression:"selectedGenres.length"}]},[_vm._v("\n                                        ("+_vm._s(_vm.selectedGenres.length)+")\n                                    ")])]),_vm._v(" "),_c('c-list',{attrs:{"items":_vm.selectableTags},on:{"click":function (tag) { return tag.selected = !tag.selected; }}})],1),_vm._v(" "),_c('div',{staticClass:"filter-box"},[_c('h4',[_vm._v("\n                                    Languages:\n                                    "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.selectedLanguages.length),expression:"selectedLanguages.length"}]},[_vm._v("\n                                        ("+_vm._s(_vm.selectedLanguages.length)+")\n                                    ")])]),_vm._v(" "),_c('div',[_c('c-list',{attrs:{"items":_vm.selectableLanguages},on:{"click":function (item) { return item.selected = !item.selected; }}})],1)])]):_vm._e()])],1),_vm._v(" "),_c('transition',{attrs:{"name":"slide-in-top"}},[(_vm.filtersActive)?_c('div',{staticClass:"active-filters"},[_c('h3',[_vm._v("Active filters")]),_vm._v(" "),_c('div',{staticClass:"active-filters__content"},[(_vm.phrase.length)?_c('c-option-tag',{attrs:{"title":"NAME:","text":_vm.phrase},on:{"delete":function($event){_vm.phrase = ''}}}):_vm._e(),_vm._v(" "),(_vm.selectedGenres.length)?_c('c-option-tag',{attrs:{"title":"GENRES:"},on:{"delete":function($event){_vm.selectedGenres.forEach(function (genre) { return genre.selected = false; })}}},_vm._l((_vm.selectedGenres),function(genre,index){return _c('c-option-tag',{key:index,attrs:{"text":genre.name,"isChildren":""},on:{"delete":function($event){genre.selected = false}}})})):_vm._e(),_vm._v(" "),(_vm.selectedSpecials.length)?_c('c-option-tag',{attrs:{"title":"SPECIALS:"},on:{"delete":function($event){_vm.selectedSpecials.forEach(function (tag) { return tag.selected = false; })}}},_vm._l((_vm.selectedSpecials),function(tag,index){return _c('c-option-tag',{key:index,attrs:{"text":_vm._f("upperFirstChar")(_vm._f("replaceLoDash")(tag.value)),"isChildren":""},on:{"delete":function($event){tag.selected = false}}})})):_vm._e(),_vm._v(" "),(_vm.price.min > 0 || _vm.price.max > 0)?_c('c-option-tag',{attrs:{"title":"PRICE RANGE:"},on:{"delete":function($event){_vm.price.min = 0; _vm.price.max = 0}}},[(_vm.price.min)?_c('c-option-tag',{attrs:{"title":"Minimum:","text":_vm.price.min,"isChildren":""},on:{"delete":function($event){_vm.price.min = 0}}}):_vm._e(),_vm._v(" "),(_vm.price.max)?_c('c-option-tag',{attrs:{"title":"Maximum:","text":_vm.price.max,"isChildren":""},on:{"delete":function($event){_vm.price.max = 0}}}):_vm._e()],1):_vm._e(),_vm._v(" "),(_vm.selectedLanguages.length)?_c('c-option-tag',{attrs:{"title":"LANGUAGES:"},on:{"delete":function($event){_vm.selectableLanguages.forEach(function (lang) { return lang.selected = false; })}}},_vm._l((_vm.selectedLanguages),function(lang,index){return _c('c-option-tag',{key:index,attrs:{"text":lang.name,"isChildren":""},on:{"delete":function($event){lang.selected = false}}})})):_vm._e()],1)]):_vm._e()]),_vm._v(" "),_c('h3',[_vm._v("Results")]),_vm._v(" "),_c('div',{staticClass:"results__container"},[_c('div',{staticClass:"results"},[(_vm.isTyping)?_c('c-spinner'):(!_vm.resultsFiltered.length)?_c('div',[_c('p',[_vm._v("No results were found for provided filters")]),_vm._v(" "),_c('c-button',{attrs:{"status":"info"},on:{"click":function($event){_vm.clearFilters()}}},[_vm._v("Clear filters")]),_vm._v(" "),_c('c-button',[_vm._v("Check for updates")])],1):_c('c-content-navigation',{attrs:{"items":_vm.resultsFiltered,"setItemsLimit":12,"setItemsPerPage":12},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var items = ref.items;
return [_c('c-game-grid',{attrs:{"itemInRow":2,"showRating":false,"items":items,"itemBg":"transparent","showTime":""}})]}}])})],1)])],1)])])])])}
var staticRenderFns = []



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

/***/ "./src/ui/screens/search/index.vue":
/*!*****************************************!*\
  !*** ./src/ui/screens/search/index.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_19bb3586_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=19bb3586&scoped=true */ "./src/ui/screens/search/index.vue?vue&type=template&id=19bb3586&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/screens/search/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_19bb3586_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=19bb3586&lang=scss&scoped=true */ "./src/ui/screens/search/index.vue?vue&type=style&index=0&id=19bb3586&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_19bb3586_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_19bb3586_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "19bb3586",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/screens/search/index.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./src/ui/screens/search/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/search/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/screens/search/index.vue?vue&type=style&index=0&id=19bb3586&lang=scss&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./src/ui/screens/search/index.vue?vue&type=style&index=0&id=19bb3586&lang=scss&scoped=true ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_19bb3586_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=19bb3586&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/search/index.vue?vue&type=style&index=0&id=19bb3586&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_19bb3586_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_19bb3586_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_19bb3586_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_19bb3586_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_19bb3586_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/search/index.vue?vue&type=template&id=19bb3586&scoped=true":
/*!***********************************************************************************!*\
  !*** ./src/ui/screens/search/index.vue?vue&type=template&id=19bb3586&scoped=true ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_19bb3586_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=19bb3586&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/search/index.vue?vue&type=template&id=19bb3586&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_19bb3586_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_19bb3586_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=90.7019e1735e338182787a.js.map