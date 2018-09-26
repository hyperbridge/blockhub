(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-identities/index.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/account-identities/index.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        'c-heading-bar': function cHeadingBar(resolve) {
            return Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/heading-bar */ "./src/ui/components/heading-bar/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-user-card': function cUserCard(resolve) {
            return __webpack_require__.e(/*! AMD require */ 132).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/user-card */ "./src/ui/components/user-card/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-button-arrows': function cButtonArrows(resolve) {
            return __webpack_require__.e(/*! AMD require */ 89).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/buttons/arrows */ "./src/ui/components/buttons/arrows.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-modal-light': function cModalLight(resolve) {
            return __webpack_require__.e(/*! AMD require */ 133).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/modal-light */ "./src/ui/components/modal-light/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-checkbox': function cCheckbox(resolve) {
            return __webpack_require__.e(/*! AMD require */ 91).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/checkbox */ "./src/ui/components/checkbox/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-input-searcher': function cInputSearcher(resolve) {
            return __webpack_require__.e(/*! AMD require */ 134).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/inputs/searcher */ "./src/ui/components/inputs/searcher.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        }
    },
    data: function data() {
        return {
            wallets: [],
            user: {},
            identities: [{
                id: 1,
                name: 'Mr. Satoshi',
                wallet: '0x6cc5f688a315f3dc28a7781717a',
                img: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
                default: false,
                edit: false
            }, {
                id: 2,
                name: 'Nakamoto',
                wallet: '0x233c5f688a315f3dc28a419189b',
                img: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
                default: true,
                edit: false
            }],
            newIdentity: {
                name: '',
                wallet: '',
                img: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
                default: false,
                edit: false
            },
            identityCopy: {},
            removeIdentity: null,
            filterPhrase: '',
            sortAsc: true
        };
    },

    methods: {
        setDefault: function setDefault(identity) {
            if (this.defaultIdentity) this.defaultIdentity['default'] = false;
            identity['default'] = true;
        },
        editIdentity: function editIdentity(identity) {
            if (!this.editedIdentity) {
                identity.edit = true;
            } else {
                this.$snotify.warning('Stop editing the current identity before editing the next one');
            }
        },
        saveIdentity: function saveIdentity(identity) {
            for (var key in identity) {
                identity[key] = this.identityClone[key];
            }
            identity.edit = false;
        },
        deleteIdentity: function deleteIdentity(identity) {
            var removeIdentity = this.removeIdentity;

            if (removeIdentity) {
                var index = this.identities.indexOf(removeIdentity);
                this.identities.splice(index, 1);
                this.removeIdentity = null;
            } else {
                this.removeIdentity = identity;
            }
        },
        createIdentity: function createIdentity() {
            var newIdentity = this.newIdentity;

            this.identities.push(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, newIdentity, { id: Math.floor(Math.random() * 100) }));
            /*
                //  Form check logic
             if (!Object.values(newIdentity).some(val => val == null || !val.toString().length)) {
                if (newIdentity.default && this.defaultIdentity) {
                    this.defaultIdentity.default = false;
                }
                this.identities.push({ ...newIdentity });
                this.newIdentity.name = '';
                this.newIdentity.wallet = '';
                this.newIdentity.default = false;
            }
            */
        }
    },
    computed: {
        networkIdentites: function networkIdentites() {
            return this.$store.state.network.identities;
        },
        defaultIdentity: function defaultIdentity() {
            return this.identities.find(function (identity) {
                return identity['default'];
            });
        },
        editedIdentity: function editedIdentity() {
            return this.identities.find(function (identity) {
                return identity.edit;
            });
        },
        identityClone: function identityClone() {
            return this.editedIdentity ? babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.editedIdentity) : {};
        },
        isEditing: function isEditing() {
            return this.identities.find(function (identity) {
                return identity.edit;
            });
        },
        filteredIdentities: function filteredIdentities() {
            var _this = this;

            return this.identities.filter(function (identity) {
                return identity.name.toLowerCase().includes(_this.filterPhrase.toLowerCase());
            }).sort(function (a, b) {
                return a.name > b.name ? _this.sortAsc ? 1 : -1 : 0;
            });
        }
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-identities/index.vue?vue&type=style&index=0&id=f2ec4922&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/account-identities/index.vue?vue&type=style&index=0&id=f2ec4922&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-identities/index.vue?vue&type=template&id=f2ec4922&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/account-identities/index.vue?vue&type=template&id=f2ec4922&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-layout',{attrs:{"navigationKey":"account-navigation"}},[_c('div',{staticClass:"content",attrs:{"id":"content"}},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('c-heading-bar',{attrs:{"name":"My identity","showArrows":false,"showBackground":false}})],1),_vm._v(" "),_c('div',{staticClass:"col-12 margin-bottom-40 my_identity"},[(_vm.defaultIdentity)?_c('c-user-card',{attrs:{"user":_vm.defaultIdentity},on:{"updateIdentity":function (prop, val) { return _vm.defaultIdentity[prop] = val; }}}):(!_vm.identities.length)?_c('p',[_vm._v("\n                        You don't have any identities. Create a new one.\n                    ")]):_c('p',[_vm._v("\n                        You don't have default identity.\n                    ")]),_vm._v(" "),_c('div',{staticClass:"user-info"},[_c('h3',[_vm._v("Mr. Satoshi Nakamoto")]),_vm._v(" "),_c('h4',[_vm._v("Osaka, Japan")])]),_vm._v(" "),_c('div',[_c('div',{staticClass:"verification-blk"},[_c('h3',[_vm._v("Verify Your Identity")]),_vm._v(" "),_c('div',{staticClass:"status"},[_c('i',{staticClass:"fas fa-check"}),_vm._v("\n                                Approved\n                            ")]),_vm._v(" "),_c('div',{staticClass:"date"},[_vm._v("\n                                Valid Until\n                                Jul 2021\n                            ")])]),_vm._v(" "),_c('div',{staticClass:"verification-blk"},[_c('h3',[_vm._v("Verify Your Location")]),_vm._v(" "),_c('div',{staticClass:"status"},[_c('i',{staticClass:"fas fa-check"}),_vm._v("\n                                Approved\n                            ")]),_vm._v(" "),_c('div',{staticClass:"date"},[_vm._v("\n                                Valid Until\n                                Jul 2021\n                            ")])])])],1),_vm._v(" "),_c('div',{staticClass:"col-12"},[_c('c-button',{attrs:{"status":"info","icon":"user-plus"},on:{"click":_vm.createIdentity}},[_vm._v(" Add new")])],1),_vm._v(" "),_c('div',{staticClass:"col-12"},[_c('c-heading-bar',{attrs:{"name":"Profile Picker","showArrows":false,"showBackground":false}},[_c('div',{staticClass:"additional-action margin-left-20",attrs:{"slot":"additional-action"},slot:"additional-action"},[_c('span',{staticClass:"text"},[_vm._v("Name")]),_vm._v(" "),_c('c-icon',{attrs:{"name":"user"}}),_vm._v(" "),_c('c-button-arrows',{attrs:{"activeUp":_vm.sortAsc},on:{"clickUp":function($event){_vm.sortAsc = true},"clickDown":function($event){_vm.sortAsc = false}}})],1),_vm._v(" "),_c('div',{staticClass:"additional-action margin-left-20",attrs:{"slot":"additional-action"},slot:"additional-action"},[_c('span',{staticClass:"text"},[_vm._v("Rating")]),_vm._v(" "),_c('c-icon',{attrs:{"name":"trophy"}}),_vm._v(" "),_c('c-button-arrows')],1),_vm._v(" "),_c('div',{staticClass:"additional-action margin-left-20 padding-10",attrs:{"slot":"additional-action"},slot:"additional-action"},[_c('c-input-searcher',{attrs:{"placeholder":"Search"},model:{value:(_vm.filterPhrase),callback:function ($$v) {_vm.filterPhrase=$$v},expression:"filterPhrase"}})],1)])],1),_vm._v(" "),_c('transition-group',{staticClass:"profile-picker",attrs:{"tag":"div","name":"item"}},_vm._l((_vm.filteredIdentities),function(identity){return _c('div',{key:identity.id,staticClass:"profile-picker__profile"},[_c('c-user-card',_vm._b({class:{ 'default': identity.default },attrs:{"user":identity,"previewMode":!identity.edit}},'c-user-card',_vm.identityClone,false,true)),_vm._v(" "),_c('div',{staticClass:"profile__action"},[(!identity.default)?_c('c-button',{attrs:{"status":"info","icon":"check"},on:{"click":function($event){_vm.setDefault(identity)}}},[_vm._v("Set default")]):_vm._e(),_vm._v(" "),(identity.edit)?[_c('c-button',{attrs:{"status":"share","icon":"pen"},on:{"click":function($event){_vm.saveIdentity(identity)}}},[_vm._v("Save")]),_vm._v(" "),_c('c-button',{on:{"click":function($event){identity.edit = false}}},[_vm._v("Cancel")])]:_c('c-button',{attrs:{"status":"share","icon":"pen"},on:{"click":function($event){_vm.editIdentity(identity)}}},[_vm._v("Edit")]),_vm._v(" "),_c('c-button',{attrs:{"status":"danger"},on:{"click":function($event){_vm.deleteIdentity(identity)}}},[_vm._v("Delete")])],2)],1)})),_vm._v(" "),(_vm.removeIdentity)?_c('c-modal-light',{on:{"close":function($event){_vm.removeIdentity = null}}},[_c('h4',[_vm._v("Are you sure that you want to delete this identity?")]),_vm._v(" "),_c('p',[_vm._v("This operation can not be reversed")]),_vm._v(" "),_c('c-user-card',{attrs:{"user":_vm.removeIdentity,"previewMode":""}}),_vm._v(" "),_c('div',[_c('div',{staticClass:"profile-remove__buttons"},[_c('c-button',{attrs:{"status":"danger","size":"md"},on:{"click":function($event){_vm.deleteIdentity()}}},[_vm._v("Yes")]),_vm._v(" "),_c('c-button',{attrs:{"status":"success","size":"md"},on:{"click":function($event){_vm.removeIdentity = null}}},[_vm._v("Cancel")])],1)])],1):_vm._e()],1)])])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/screens/account-identities/index.vue":
/*!*****************************************************!*\
  !*** ./src/ui/screens/account-identities/index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_f2ec4922_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=f2ec4922&scoped=true */ "./src/ui/screens/account-identities/index.vue?vue&type=template&id=f2ec4922&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/screens/account-identities/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_f2ec4922_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=f2ec4922&lang=scss&scoped=true */ "./src/ui/screens/account-identities/index.vue?vue&type=style&index=0&id=f2ec4922&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_f2ec4922_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_f2ec4922_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f2ec4922",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/screens/account-identities/index.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./src/ui/screens/account-identities/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-identities/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/screens/account-identities/index.vue?vue&type=style&index=0&id=f2ec4922&lang=scss&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./src/ui/screens/account-identities/index.vue?vue&type=style&index=0&id=f2ec4922&lang=scss&scoped=true ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f2ec4922_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=f2ec4922&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-identities/index.vue?vue&type=style&index=0&id=f2ec4922&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f2ec4922_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f2ec4922_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f2ec4922_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f2ec4922_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f2ec4922_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/account-identities/index.vue?vue&type=template&id=f2ec4922&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./src/ui/screens/account-identities/index.vue?vue&type=template&id=f2ec4922&scoped=true ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_f2ec4922_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=f2ec4922&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-identities/index.vue?vue&type=template&id=f2ec4922&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_f2ec4922_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_f2ec4922_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=39.2030ec1814026a794c22.js.map