(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-milestones/index.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/project-milestones/index.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************/
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

var updateProject = function updateProject() {
    if (!this.$store.state.funding.projects) return;

    var project = this.$store.state.funding.projects[this.id];

    if (!project) return;

    if (project.images && project.images.header) window.document.getElementById('header-bg').style['background-image'] = 'url(' + project.images.header + ')';

    return project;
};
/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['id'],
    data: function data() {
        return {
            timeline: {
                timeline_progress: 24,
                timeline_periods: [{
                    number: "1",
                    description: "some text about this period",
                    progress: {
                        days_amouth: "97",
                        days_percent: 15,
                        done_percent: 38,
                        spent_percent: 25
                    }
                }, {
                    number: "2",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " + "Proin efficitur consequat turpis, ac tincidunt turpis " + "venenatis fermentum. Suspendisse dignissim scelerisque nisi et rutrum.",
                    progress: {
                        days_amouth: "133",
                        days_percent: 94,
                        done_percent: 8,
                        spent_percent: 95
                    }
                }, {
                    number: "3",
                    description: "Curabitur eget felis nulla. Aliquam erat volutpat. Suspendisse dictum sed nisi quis placerat.",
                    progress: {
                        days_amouth: "92",
                        days_percent: 29,
                        done_percent: 58,
                        spent_percent: 75
                    }
                }]
            },
            milestones: [{
                img: 'http://via.placeholder.com/350x250',
                title: 'Milestone 1',
                short_description: 'For far away, behind the word mountains, far from the countries Vokalia\n' + '                                                and Consonatia, there live.',
                full_text: 'Aenean eu tellus vel tortor tincidunt pharetra. Aenean mattis, sapien vel\n' + '                                            lacinia accumsan, justo mi venenatis justo, ut accumsan diam mauris sit amet\n' + '                                            ipsum. Vivamus iaculis lectus vel egestas vehicula. Phasellus in lacus nunc.\n' + '                                            Curabitur lobortis arcu neque, non rutrum elit placerat eget.',
                progress: {
                    days_amouth: "133",
                    days_percent: 94,
                    done_percent: 8,
                    spent_percent: 95
                }

            }, {
                img: 'http://via.placeholder.com/350x250',
                title: 'Milestone 2',
                short_description: 'For far away, behind the word mountains, far from the countries Vokalia\n' + '                                                and Consonatia, there live.',
                full_text: 'Aenean eu tellus vel tortor tincidunt pharetra. Aenean mattis, sapien vel\n' + '                                            lacinia accumsan, justo mi venenatis justo, ut accumsan diam mauris sit amet\n' + '                                            ipsum. Vivamus iaculis lectus vel egestas vehicula. Phasellus in lacus nunc.\n' + '                                            Curabitur lobortis arcu neque, non rutrum elit placerat eget.',
                progress: {
                    days_amouth: "171",
                    days_percent: 4,
                    done_percent: 38,
                    spent_percent: 61
                }

            }]
        };
    },
    components: {
        'c-layout': function cLayout(resolve) {
            return Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/layouts/default */ "./src/ui/layouts/default/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-milestone': function cMilestone(resolve) {
            return __webpack_require__.e(/*! AMD require */ 106).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/projects/milestone */ "./src/ui/components/projects/milestone.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-progress-bar': function cProgressBar(resolve) {
            return __webpack_require__.e(/*! AMD require */ 107).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/progress-bar */ "./src/ui/components/progress-bar/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-badges': function cBadges(resolve) {
            return __webpack_require__.e(/*! AMD require */ 99).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/projects/badges.vue */ "./src/ui/components/projects/badges.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        }
    },
    computed: {
        project: updateProject
    },
    beforeDestroy: function beforeDestroy() {
        window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/products/default.png)';
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-milestones/index.vue?vue&type=style&index=0&id=eefd8c4e&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/project-milestones/index.vue?vue&type=style&index=0&id=eefd8c4e&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-milestones/index.vue?vue&type=template&id=eefd8c4e&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/project-milestones/index.vue?vue&type=template&id=eefd8c4e&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-layout',{attrs:{"navigationKey":"project-navigation"}},[_c('div',{staticClass:"content",attrs:{"id":"content"}},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[(!_vm.project)?_c('div',{staticClass:"col-12"},[_vm._v("\n                    Project not found\n                ")]):_vm._e()]),_vm._v(" "),(_vm.project)?_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-4"},[_c('div',{staticClass:"editor-container"},[(_vm.editing)?_c('div',{staticClass:"editor"},[(!_vm.activeElement['name'])?_c('button',{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{"click":function($event){_vm.activateElement('name')}}},[_vm._v("Change\n                                Project Name "),_c('span',{staticClass:"fa fa-edit"})]):_vm._e(),_vm._v(" "),(_vm.activeElement['name'])?_c('div',{staticClass:"form-control-element form-control-element--right"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.project.name),expression:"project.name"}],ref:"name",staticClass:"form-control",attrs:{"name":"name","type":"text","placeholder":"Project name..."},domProps:{"value":(_vm.project.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.project, "name", $event.target.value)}}}),_vm._v(" "),_c('div',{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[_c('span',{staticClass:"fa fa-check",on:{"click":function($event){_vm.deactivateElement('name')}}})])]):_vm._e()]):_vm._e(),_vm._v(" "),_c('h1',{staticClass:"title margin-top-10 margin-bottom-15"},[_vm._v(_vm._s(_vm.project.name))])]),_vm._v(" "),_c('div',{staticClass:"editor-container"},[(_vm.editing)?_c('div',{staticClass:"editor"},[(!_vm.activeElement['author_tags'])?_c('button',{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",staticStyle:{"margin-bottom":"20px"},on:{"click":function($event){_vm.activateElement('author_tags')}}},[_vm._v("Change\n                                Tags "),_c('span',{staticClass:"fa fa-edit"})]):_vm._e(),_vm._v(" "),(_vm.activeElement['author_tags'])?_c('div',{staticClass:"form-control-element form-control-element--right"},[_c('select',{staticClass:"form-control",attrs:{"id":"tag-editor","multiple":"multiple"}},_vm._l((_vm.author_tag_options),function(tag,index){return _c('option',{key:index,domProps:{"selected":_vm.project.author_tags.includes(tag)}},[_vm._v(_vm._s(tag)+"\n                                    ")])})),_vm._v(" "),_c('div',{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[_c('span',{staticClass:"fa fa-check",on:{"click":function($event){_vm.deactivateElement('author_tags')}}})])]):_vm._e()]):_vm._e(),_vm._v(" "),(!_vm.editing || !_vm.activeElement['author_tags'])?_c('c-tags-list',{attrs:{"tags":_vm.project.author_tags}}):_vm._e()],1)]),_vm._v(" "),_c('div',{staticClass:"col-lg-4"},[_c('c-badges',{attrs:{"icons":['trophy','gem']}})],1),_vm._v(" "),_c('div',{staticClass:"col-lg-4"},[(_vm.editing)?_c('div',{staticClass:"editor text-right",staticStyle:{"margin-bottom":"30px"}},[(!_vm.activeElement['background_image'])?_c('button',{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{"click":function($event){_vm.activateElement('background_image')}}},[_vm._v("Change Background Image "),_c('span',{staticClass:"fa fa-edit"})]):_vm._e(),_vm._v(" "),(_vm.activeElement['background_image'])?_c('div',{},[_c('div',{staticClass:"form-control-element form-control-element--right"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.project.images.header),expression:"project.images.header"}],ref:"background_image",staticClass:"form-control",attrs:{"name":"background_image","type":"text","placeholder":"Background image URL..."},domProps:{"value":(_vm.project.images.header)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.project.images, "header", $event.target.value)}}}),_vm._v(" "),_c('div',{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[_c('span',{staticClass:"fa fa-check",on:{"click":function($event){_vm.deactivateElement('background_image')}}})])])]):_vm._e(),_vm._v(" "),_c('label',{staticStyle:{"display":"block"}},[_vm._v("RECOMMENDED SIZE: 1120 x 524px")])]):_vm._e(),_vm._v(" "),(_vm.editing)?_c('div',{staticClass:"editor text-right"},[(!_vm.activeElement['store_image'])?_c('button',{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{"click":function($event){_vm.activateElement('store_image')}}},[_vm._v("Change Store Image "),_c('span',{staticClass:"fa fa-edit"})]):_vm._e(),_vm._v(" "),(_vm.activeElement['store_image'])?_c('div',{},[_c('div',{staticClass:"form-control-element form-control-element--right"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.project.images.header),expression:"project.images.header"}],ref:"store_image",staticClass:"form-control",attrs:{"name":"store_image","type":"text","placeholder":"Background image URL..."},domProps:{"value":(_vm.project.images.header)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.project.images, "header", $event.target.value)}}}),_vm._v(" "),_c('div',{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[_c('span',{staticClass:"fa fa-check",on:{"click":function($event){_vm.deactivateElement('store_image')}}})])])]):_vm._e(),_vm._v(" "),_c('label',{staticStyle:{"display":"block"}},[_vm._v("RECOMMENDED SIZE: 2140 x 680px")])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-12"},[_c('ul',{staticClass:"nav nav-tabs margin-bottom-50 justify-content-between"},[_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":("/project/" + (_vm.project.id))}},[_vm._v("Overview")])],1),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":("/project/" + (_vm.project.id) + "/community")}},[_vm._v("Community")])],1),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":("/project/" + (_vm.project.id) + "/bounties")}},[_vm._v("Bounties")])],1),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":("/project/" + (_vm.project.id) + "/updates")}},[_vm._v("Updates")])],1),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link active",attrs:{"to":("/project/" + (_vm.project.id) + "/milestones")}},[_vm._v("Milestones")])],1)]),_vm._v(" "),(_vm.timeline)?_c('div',{staticClass:"timeline-blk position-relative"},[_c('div',{staticClass:"progress main_timeline",staticStyle:{"height":"15px"}},[_c('c-progress-bar',{attrs:{"percentages":_vm.timeline.timeline_progress}})],1),_vm._v(" "),(_vm.timeline)?_c('div',{staticClass:"period-container"},_vm._l((_vm.timeline.timeline_periods),function(period,index){return _c('div',{key:index,staticClass:"period"},[_c('div',{staticClass:"number"},[_vm._v(_vm._s(period.number))]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('div',{staticClass:"title"},[_vm._v("\n                                        "+_vm._s(period.description)+"\n                                    ")]),_vm._v(" "),_c('div',{staticClass:"progress_line"},[_c('i',{staticClass:"fas fa-clock icon"}),_vm._v(" "),_c('c-progress-bar',{attrs:{"percentages":period.progress['days_percent']}}),_vm._v("\n                                        "+_vm._s(period.progress['days_amouth'])+" days left\n                                    ")],1),_vm._v(" "),_c('div',{staticClass:"progress_line"},[_c('i',{staticClass:"fas fa-check icon"}),_vm._v(" "),_c('c-progress-bar',{attrs:{"percentages":period.progress['done_percent']}}),_vm._v("\n                                        "+_vm._s(period.progress['done_percent'])+"% Done\n                                    ")],1),_vm._v(" "),_c('div',{staticClass:"progress_line"},[_c('i',{staticClass:"fas fa-dollar-sign icon"}),_vm._v(" "),_c('c-progress-bar',{attrs:{"percentages":period.progress['spent_percent']}}),_vm._v("\n                                        "+_vm._s(period.progress['spent_percent'])+"% Spent\n                                    ")],1)])])})):_vm._e()]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"milestones-list"},_vm._l((_vm.milestones),function(milestone,index){return _c('c-milestone',{key:index,attrs:{"milestone":milestone}})}))])]):_vm._e()])])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/screens/project-milestones/index.vue":
/*!*****************************************************!*\
  !*** ./src/ui/screens/project-milestones/index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_eefd8c4e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=eefd8c4e&scoped=true */ "./src/ui/screens/project-milestones/index.vue?vue&type=template&id=eefd8c4e&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/screens/project-milestones/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_eefd8c4e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=eefd8c4e&lang=scss&scoped=true */ "./src/ui/screens/project-milestones/index.vue?vue&type=style&index=0&id=eefd8c4e&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_eefd8c4e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_eefd8c4e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "eefd8c4e",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/screens/project-milestones/index.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./src/ui/screens/project-milestones/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-milestones/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/screens/project-milestones/index.vue?vue&type=style&index=0&id=eefd8c4e&lang=scss&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./src/ui/screens/project-milestones/index.vue?vue&type=style&index=0&id=eefd8c4e&lang=scss&scoped=true ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_eefd8c4e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=eefd8c4e&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-milestones/index.vue?vue&type=style&index=0&id=eefd8c4e&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_eefd8c4e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_eefd8c4e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_eefd8c4e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_eefd8c4e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_eefd8c4e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/project-milestones/index.vue?vue&type=template&id=eefd8c4e&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./src/ui/screens/project-milestones/index.vue?vue&type=template&id=eefd8c4e&scoped=true ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_eefd8c4e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=eefd8c4e&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-milestones/index.vue?vue&type=template&id=eefd8c4e&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_eefd8c4e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_eefd8c4e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=72.f4cf5253fb532ef55fe1.js.map