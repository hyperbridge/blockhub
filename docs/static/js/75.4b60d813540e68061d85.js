(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-community/index.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/project-community/index.vue?vue&type=script&lang=js ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var updateProject = function updateProject() {
    var project = null;

    if (this.id === 'new') {
        project = this.$store.state.funding.default_project;
    }

    if (this.$store.state.funding.projects && this.$store.state.funding.projects[this.id]) {
        project = this.$store.state.funding.projects[this.id];
    }

    if (project && project.images && project.images.header) {
        window.document.getElementById('header-bg').style['background-image'] = 'url(' + project.images.header + ')';
    }

    return project;
};

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['id'],
    components: {
        'c-layout': function cLayout(resolve) {
            return Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/layouts/default */ "./src/ui/layouts/default/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-tags-list': function cTagsList(resolve) {
            return __webpack_require__.e(/*! AMD require */ 96).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/tags */ "./src/ui/components/tags/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-badges': function cBadges(resolve) {
            return __webpack_require__.e(/*! AMD require */ 99).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/projects/badges.vue */ "./src/ui/components/projects/badges.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-item': function cItem(resolve) {
            return __webpack_require__.e(/*! AMD require */ 100).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/product-community/item */ "./src/ui/components/product-community/item.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-post-comment': function cPostComment(resolve) {
            return __webpack_require__.e(/*! AMD require */ 101).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/product-community/comment */ "./src/ui/components/product-community/comment.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        }
    },
    data: function data() {
        var authors = [{ name: 'Nakatochi', img: 'https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png' }, { name: 'Nakatochi', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL' }, { name: 'SatoshiSan', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL' }];
        var dates = ['2018-07-24T04:09:00.000Z', '2017-07-24T04:09:00.000Z', '2018-08-12T04:09:00.000Z', '2018-08-14T04:09:00.000Z', '2018-04-14T04:09:00.000Z', '2018-04-17T04:09:00.000Z'];
        var placeholderText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non maximus tellus, eu lacinia justo. Cras semper vestibulum est. Donec a massa vitae nibh consectetur efficitur non in erat. Morbi id dapibus tortor. Praesent sit amet vulputate leo, eu posuere neque. In id ante scelerisque, commodo nisi non, eleifend mauris. Pellentesque massa elit, semper non libero nec, interdum aliquet dolor.';
        return {
            errors: [],
            community_1: false,
            community_2: true,
            posts: [{
                title: 'This post has been pinned and the title is a single line of text',
                date: dates[0],
                rate: -319,
                comments_count: 3019,
                status: 'pinned',
                author: authors[0]
            }, {
                title: 'The previous title doesn\'t have it\'s single line aligned vertically because XD does not have this functionality.',
                date: dates[1],
                rate: 232,
                comments_count: 3019,
                status: 'locked',
                author: authors[1]
            }, {
                title: 'The previous title doesn\'t have it\'s single line aligned vertically because XD does not have this functionality.',
                date: dates[2],
                rate: 103,
                comments_count: 894391,
                status: 'starred',
                author: authors[1],
                content: {
                    img: 'http://memesbams.com/wp-content/uploads/2017/08/2.3-Delightful-cheer-up-cat-meme.jpg',
                    text: placeholderText
                }
            }, {
                title: 'Actually all the boxes with the titles here are the same size',
                date: dates[3],
                rate: 103,
                comments_count: 894391,
                author: authors[0]
            }],
            post: {
                title: 'The previous title doesn\'t have it\'s single line aligned vertically because XD does not have this functionality.',
                date: dates[3],
                rate: 1391,
                comments_count: 894391,
                status: 'starred',
                author: authors[0],
                content: {
                    img: 'http://memesbams.com/wp-content/uploads/2017/08/2.3-Delightful-cheer-up-cat-meme.jpg',
                    text: placeholderText,
                    comments: [{ author: authors[1], text: placeholderText, rate: 319, date: dates[4] }, { author: authors[0], text: placeholderText, rate: 932, date: dates[1], replies: [{ author: authors[1], text: placeholderText, rate: 318, date: dates[0] }, { author: authors[0], text: placeholderText, rate: -49, date: dates[2] }, { author: authors[1], text: placeholderText, rate: 442, date: dates[1] }, { author: authors[0], text: placeholderText, rate: 1239, date: dates[5] }] }, { author: authors[0], text: placeholderText, rate: -51, date: dates[2] }]
                }
            }
        };
    },

    methods: {},
    computed: {
        project: updateProject
    },
    watch: {},
    created: function created() {
        //this.$store.dispatch('marketplace/setEditorMode', 'editing')
    },
    beforeDestroy: function beforeDestroy() {
        window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/products/default.png)';
    },
    updated: function updated() {}
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-community/index.vue?vue&type=style&index=0&id=8719962e&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/project-community/index.vue?vue&type=style&index=0&id=8719962e&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-community/index.vue?vue&type=template&id=8719962e&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/project-community/index.vue?vue&type=template&id=8719962e&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-layout',{attrs:{"navigationKey":"store-navigation"}},[_c('div',{staticClass:"content",attrs:{"id":"content"}},[_c('div',{staticClass:"container-fluid"},[(!_vm.project)?_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_vm._v("\n                    Project not found\n                ")])]):_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-4"},[_c('div',{staticClass:"editor-container"},[(_vm.editing)?_c('div',{staticClass:"editor"},[(!_vm.activeElement['name'])?_c('button',{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{"click":function($event){_vm.activateElement('name')}}},[_vm._v("Change\n                                Project Name "),_c('span',{staticClass:"fa fa-edit"})]):_vm._e(),_vm._v(" "),(_vm.activeElement['name'])?_c('div',{staticClass:"form-control-element form-control-element--right"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.project.name),expression:"project.name"}],ref:"name",staticClass:"form-control",attrs:{"name":"name","type":"text","placeholder":"Project name..."},domProps:{"value":(_vm.project.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.project, "name", $event.target.value)}}}),_vm._v(" "),_c('div',{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[_c('span',{staticClass:"fa fa-check",on:{"click":function($event){_vm.deactivateElement('name')}}})])]):_vm._e()]):_vm._e(),_vm._v(" "),_c('h1',{staticClass:"title margin-top-10 margin-bottom-15"},[_vm._v(_vm._s(_vm.project.name))])]),_vm._v(" "),_c('div',{staticClass:"editor-container"},[(_vm.editing)?_c('div',{staticClass:"editor"},[(!_vm.activeElement['author_tags'])?_c('button',{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",staticStyle:{"margin-bottom":"20px"},on:{"click":function($event){_vm.activateElement('author_tags')}}},[_vm._v("Change\n                                Tags "),_c('span',{staticClass:"fa fa-edit"})]):_vm._e(),_vm._v(" "),(_vm.activeElement['author_tags'])?_c('div',{staticClass:"form-control-element form-control-element--right"},[_c('select',{staticClass:"form-control",attrs:{"id":"tag-editor","multiple":"multiple"}},_vm._l((_vm.author_tag_options),function(tag,index){return _c('option',{key:index,domProps:{"selected":_vm.project.author_tags.includes(tag)}},[_vm._v(_vm._s(tag)+"\n                                    ")])})),_vm._v(" "),_c('div',{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[_c('span',{staticClass:"fa fa-check",on:{"click":function($event){_vm.deactivateElement('author_tags')}}})])]):_vm._e()]):_vm._e(),_vm._v(" "),(!_vm.editing || !_vm.activeElement['author_tags'])?_c('c-tags-list',{attrs:{"tags":_vm.project.author_tags}}):_vm._e()],1)]),_vm._v(" "),_c('div',{staticClass:"col-lg-4"},[_c('c-badges',{attrs:{"icons":['trophy','gem']}})],1),_vm._v(" "),_c('div',{staticClass:"col-lg-4"},[(_vm.editing)?_c('div',{staticClass:"editor text-right",staticStyle:{"margin-bottom":"30px"}},[(!_vm.activeElement['background_image'])?_c('button',{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{"click":function($event){_vm.activateElement('background_image')}}},[_vm._v("Change Background Image "),_c('span',{staticClass:"fa fa-edit"})]):_vm._e(),_vm._v(" "),(_vm.activeElement['background_image'])?_c('div',{},[_c('div',{staticClass:"form-control-element form-control-element--right"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.project.images.header),expression:"project.images.header"}],ref:"background_image",staticClass:"form-control",attrs:{"name":"background_image","type":"text","placeholder":"Background image URL..."},domProps:{"value":(_vm.project.images.header)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.project.images, "header", $event.target.value)}}}),_vm._v(" "),_c('div',{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[_c('span',{staticClass:"fa fa-check",on:{"click":function($event){_vm.deactivateElement('background_image')}}})])])]):_vm._e(),_vm._v(" "),_c('label',{staticStyle:{"display":"block"}},[_vm._v("RECOMMENDED SIZE: 1120 x 524px")])]):_vm._e(),_vm._v(" "),(_vm.editing)?_c('div',{staticClass:"editor text-right"},[(!_vm.activeElement['store_image'])?_c('button',{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{"click":function($event){_vm.activateElement('store_image')}}},[_vm._v("Change Store Image "),_c('span',{staticClass:"fa fa-edit"})]):_vm._e(),_vm._v(" "),(_vm.activeElement['store_image'])?_c('div',{},[_c('div',{staticClass:"form-control-element form-control-element--right"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.project.images.header),expression:"project.images.header"}],ref:"store_image",staticClass:"form-control",attrs:{"name":"store_image","type":"text","placeholder":"Background image URL..."},domProps:{"value":(_vm.project.images.header)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.project.images, "header", $event.target.value)}}}),_vm._v(" "),_c('div',{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[_c('span',{staticClass:"fa fa-check",on:{"click":function($event){_vm.deactivateElement('store_image')}}})])])]):_vm._e(),_vm._v(" "),_c('label',{staticStyle:{"display":"block"}},[_vm._v("RECOMMENDED SIZE: 2140 x 680px")])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-12 tab-content"},[_c('ul',{staticClass:"nav nav-tabs margin-bottom-50 justify-content-between"},[_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":("/project/" + (_vm.project.id))}},[_vm._v("Overview")])],1),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link active",attrs:{"to":("/project/" + (_vm.project.id) + "/community")}},[_vm._v("Community")])],1),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":("/project/" + (_vm.project.id) + "/bounties")}},[_vm._v("Bounties")])],1),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":("/project/" + (_vm.project.id) + "/updates")}},[_vm._v("Updates")])],1),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":("/project/" + (_vm.project.id) + "/milestones")}},[_vm._v("Milestones")])],1),_vm._v(" "),(_vm.editing)?_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"data-toggle":"pill","href":"#configure","role":"tab","aria-controls":"configure","aria-selected":"true"}},[_vm._v("Configure")])]):_vm._e()]),_vm._v(" "),(_vm.community_1)?_c('div',_vm._l((_vm.posts),function(post,index){return _c('c-item',{key:index,attrs:{"post":post}})})):(_vm.community_2)?_c('div',[_c('c-item',{attrs:{"post":_vm.post}})],1):_vm._e()])])])]),_vm._v(" "),_c('div',{staticClass:"modal fade",attrs:{"id":"invertFormExampleModal","tabindex":"-1","role":"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[_c('div',{staticClass:"modal-dialog",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content invert"},[_c('div',{staticClass:"modal-header"},[_c('h5',{staticClass:"modal-title",attrs:{"id":"exampleModalLabel"}},[_vm._v("Set Up Campaign")]),_vm._v(" "),_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])]),_vm._v(" "),_c('div',{staticClass:"modal-body"}),_vm._v(" "),_c('div',{staticClass:"modal-footer"},[_c('button',{staticClass:"btn btn-light",attrs:{"type":"button","data-dismiss":"modal"}},[_vm._v("Close")]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"type":"button"}},[_vm._v("Submit")])])])])])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/screens/project-community/index.vue":
/*!****************************************************!*\
  !*** ./src/ui/screens/project-community/index.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_8719962e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=8719962e&scoped=true */ "./src/ui/screens/project-community/index.vue?vue&type=template&id=8719962e&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/screens/project-community/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_8719962e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=8719962e&lang=scss&scoped=true */ "./src/ui/screens/project-community/index.vue?vue&type=style&index=0&id=8719962e&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_8719962e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_8719962e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8719962e",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/screens/project-community/index.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./src/ui/screens/project-community/index.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-community/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/screens/project-community/index.vue?vue&type=style&index=0&id=8719962e&lang=scss&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./src/ui/screens/project-community/index.vue?vue&type=style&index=0&id=8719962e&lang=scss&scoped=true ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8719962e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=8719962e&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-community/index.vue?vue&type=style&index=0&id=8719962e&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8719962e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8719962e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8719962e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8719962e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8719962e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/project-community/index.vue?vue&type=template&id=8719962e&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./src/ui/screens/project-community/index.vue?vue&type=template&id=8719962e&scoped=true ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8719962e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=8719962e&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-community/index.vue?vue&type=template&id=8719962e&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8719962e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8719962e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=75.4b60d813540e68061d85.js.map