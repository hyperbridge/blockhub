(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-overview/index.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/project-overview/index.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        'c-game-plan': function cGamePlan(resolve) {
            return __webpack_require__.e(/*! AMD require */ 108).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/game-plans/plan */ "./src/ui/components/game-plans/plan.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-block-1': function cBlock1(resolve) {
            return __webpack_require__.e(/*! AMD require */ 86).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/block */ "./src/ui/components/block/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-screen-gallery': function cScreenGallery(resolve) {
            return __webpack_require__.e(/*! AMD require */ 109).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/screen-gallery/gallery */ "./src/ui/components/screen-gallery/gallery.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-tags-list': function cTagsList(resolve) {
            return __webpack_require__.e(/*! AMD require */ 96).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/tags */ "./src/ui/components/tags/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-rating-block': function cRatingBlock(resolve) {
            return __webpack_require__.e(/*! AMD require */ 110).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/rating-block */ "./src/ui/components/rating-block/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-frequently-traded-assets': function cFrequentlyTradedAssets(resolve) {
            return __webpack_require__.e(/*! AMD require */ 111).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/frequently-traded-assets */ "./src/ui/components/frequently-traded-assets/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-community-spotlight': function cCommunitySpotlight(resolve) {
            return __webpack_require__.e(/*! AMD require */ 112).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/community-spotlight */ "./src/ui/components/community-spotlight/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-heading-bar': function cHeadingBar(resolve) {
            return Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/heading-bar */ "./src/ui/components/heading-bar/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-review': function cReview(resolve) {
            return __webpack_require__.e(/*! AMD require */ 113).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/review */ "./src/ui/components/review/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-progress-bar': function cProgressBar(resolve) {
            return __webpack_require__.e(/*! AMD require */ 107).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/progress-bar */ "./src/ui/components/progress-bar/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-badges': function cBadges(resolve) {
            return __webpack_require__.e(/*! AMD require */ 99).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/projects/badges.vue */ "./src/ui/components/projects/badges.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        }
    },
    data: function data() {
        return {
            errors: [],
            activeElement: {
                name: false,
                background_image: false,
                store_image: false,
                author_tags: false,
                description: false,
                content: false
            },
            author_tag_options: ['game', 'mod', 'other'],
            review: {
                author: {
                    name: 'Satoshi San',
                    img: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1'
                },
                title: 'Good game with very nice graphics made by very smart people.',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut luctus ante, a volutpat velit. Cras in arcu a sem ultrices id luctus sem. Cras a venenatis mauris. Nullam non tortor nec neque accumsan euismod. Fusce tempus nunc ac varius gravida. Fusce at lacus pharetra, elementum risus a, bibendum ante. Morbi velit est, tincidunt id auctor sit amet, varius non nunc. Vestibulum elementum nulla et condimentum vulputate. Nullam id eleifend velit, quis aliquam elit. In maximus non orci eget maximus.',
                date: '2018-08-19T04:09:00.000Z',
                rating: 4.5,
                minutes_played: 1938,
                setup: { system: 'Windows 10', gpu: 'GTX 1080', cpu: 'Core i7 7980x', ram: '8 GB', storage: 'HyperX 1TB SSD' }
            },
            crowdfunding_props: ['spent', 'locked', 'overflow']
        };
    },

    methods: {
        showTab: function showTab(name) {
            $('.nav-tabs a[href="#' + name + '"]').tab('show');
        },
        showContributeModal: function showContributeModal() {
            if (this.$store.state.network.signed_in) {
                this.$store.commit('network/activateModal', 'send-funds');
            } else {
                this.$store.commit('network/activateModal', 'login');
            }
        },
        deactivateElement: function deactivateElement(key) {
            this.activeElement[key] = false;
        },
        activateElement: function activateElement(key) {
            var _this = this;

            for (var _key in this.activeElement) {
                this.activeElement[_key] = false;
            }

            this.activeElement[key] = true;

            setTimeout(function () {
                if (_this.$refs[key]) _this.$refs[key].focus();
            }, 10);
        },
        save: function save() {
            if (!this.checkForm()) {
                this.$store.dispatch('marketplace/setEditorMode', 'editing');

                return;
            }

            if (this.id === 'new') {
                this.$store.commit('funding/createProject', this.project);
                this.$store.dispatch('marketplace/setEditorMode', 'viewing');
            } else {
                this.$store.dispatch('funding/updateProject', this.project);
                this.$store.dispatch('marketplace/setEditorMode', 'viewing');
            }
        },
        checkForm: function checkForm(e) {
            this.errors = [];

            if (this.project.name && this.project.description) {
                return true;
            }

            if (!this.project.name) {
                this.errors.push('Project name required.');
            }
            if (!this.project.description) {
                this.errors.push('Project description required.');
            }
        }
    },
    computed: {
        project: updateProject,
        editing: function editing() {
            if (!this.$store.state.marketplace.editor_mode) {
                for (var key in this.activeElement) {
                    this.activeElement[key] = false;
                }
            }

            return this.$store.state.marketplace.editor_mode === 'editing';
        }
    },
    watch: {
        editing: function editing(newVal, oldVal) {
            if (this.$store.state.marketplace.editor_mode === 'publishing') {
                this.save();
            }
        }
    },
    created: function created() {
        //this.$store.dispatch('marketplace/setEditorMode', 'editing')
    },
    beforeDestroy: function beforeDestroy() {
        window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/products/default.png)';
    },
    updated: function updated() {
        var _this2 = this;

        $('#tag-editor').select2().on('select2:select', function (e) {
            var data = e.params.data;

            if (!_this2.project.author_tags.includes(data.text)) {
                _this2.project.author_tags.push(data.text);
            }

            vue__WEBPACK_IMPORTED_MODULE_0__["default"].set(_this2.project, 'author_tags', _this2.project.author_tags);
        }).on('select2:unselect', function (e) {
            var data = e.params.data;

            _this2.project.author_tags = _this2.project.author_tags.filter(function (e) {
                return e !== data.text;
            });

            vue__WEBPACK_IMPORTED_MODULE_0__["default"].set(_this2.project, 'author_tags', _this2.project.author_tags);
        });

        $('#summernote').summernote({
            placeholder: 'Type in your text',
            tabsize: 2,
            height: 300,
            callbacks: {
                onBlur: function onBlur() {
                    vue__WEBPACK_IMPORTED_MODULE_0__["default"].set(_this2.project, 'content', $('#summernote').summernote('code'));
                }
            }
        });

        $('#ise_default').ionRangeSlider({
            from: 15
        });
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-overview/index.vue?vue&type=style&index=0&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/project-overview/index.vue?vue&type=style&index=0&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-overview/index.vue?vue&type=style&index=1&id=45cf061c&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/project-overview/index.vue?vue&type=style&index=1&id=45cf061c&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-overview/index.vue?vue&type=template&id=45cf061c&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/project-overview/index.vue?vue&type=template&id=45cf061c&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-layout',{attrs:{"navigationKey":"project-navigation"}},[_c('div',{staticClass:"content",attrs:{"id":"content"}},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[(!_vm.project)?_c('div',{staticClass:"col-12"},[_vm._v("\n                    Project not found\n                ")]):_c('div',{staticClass:"col-12 tab-content"},[(_vm.errors.length)?_c('p',{staticClass:"errors"},[_c('strong',[_vm._v("Please correct the following error(s):")]),_vm._v(" "),_c('ul',_vm._l((_vm.errors),function(error){return _c('li',{key:error},[_vm._v(_vm._s(error))])}))]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"row justify-content-between"},[_c('div',{staticClass:"col-lg-4"},[_c('div',{staticClass:"editor-container"},[(_vm.editing)?_c('div',{staticClass:"editor"},[(!_vm.activeElement['name'])?_c('button',{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{"click":function($event){_vm.activateElement('name')}}},[_vm._v("Change\n                                        Project Name "),_c('span',{staticClass:"fa fa-edit"})]):_vm._e(),_vm._v(" "),(_vm.activeElement['name'])?_c('div',{staticClass:"form-control-element form-control-element--right"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.project.name),expression:"project.name"}],ref:"name",staticClass:"form-control",attrs:{"name":"name","type":"text","placeholder":"Project name..."},domProps:{"value":(_vm.project.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.project, "name", $event.target.value)}}}),_vm._v(" "),_c('div',{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[_c('span',{staticClass:"fa fa-check",on:{"click":function($event){_vm.deactivateElement('name')}}})])]):_vm._e()]):_vm._e(),_vm._v(" "),_c('h1',{staticClass:"title margin-top-10 margin-bottom-15"},[_vm._v(_vm._s(_vm.project.name))])]),_vm._v(" "),_c('div',{staticClass:"editor-container"},[(_vm.editing)?_c('div',{staticClass:"editor"},[(!_vm.activeElement['author_tags'])?_c('button',{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",staticStyle:{"margin-bottom":"20px"},on:{"click":function($event){_vm.activateElement('author_tags')}}},[_vm._v("Change\n                                        Tags "),_c('span',{staticClass:"fa fa-edit"})]):_vm._e(),_vm._v(" "),(_vm.activeElement['author_tags'])?_c('div',{staticClass:"form-control-element form-control-element--right"},[_c('select',{staticClass:"form-control",attrs:{"id":"tag-editor","multiple":"multiple"}},_vm._l((_vm.author_tag_options),function(tag,index){return _c('option',{key:index,domProps:{"selected":_vm.project.author_tags.includes(tag)}},[_vm._v(_vm._s(tag)+"\n                                            ")])})),_vm._v(" "),_c('div',{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[_c('span',{staticClass:"fa fa-check",on:{"click":function($event){_vm.deactivateElement('author_tags')}}})])]):_vm._e()]):_vm._e(),_vm._v(" "),(!_vm.editing || !_vm.activeElement['author_tags'])?_c('c-tags-list',{attrs:{"tags":_vm.project.author_tags}}):_vm._e()],1)]),_vm._v(" "),_c('div',{staticClass:"col-lg-4"},[_c('c-badges',{attrs:{"icons":['trophy','gem']}})],1),_vm._v(" "),_c('div',{staticClass:"col-lg-4"},[(_vm.editing)?_c('div',{staticClass:"editor text-right",staticStyle:{"margin-bottom":"30px"}},[(!_vm.activeElement['background_image'])?_c('button',{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{"click":function($event){_vm.activateElement('background_image')}}},[_vm._v("Change Background Image "),_c('span',{staticClass:"fa fa-edit"})]):_vm._e(),_vm._v(" "),(_vm.activeElement['background_image'])?_c('div',{},[_c('div',{staticClass:"form-control-element form-control-element--right"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.project.images.header),expression:"project.images.header"}],ref:"background_image",staticClass:"form-control",attrs:{"name":"background_image","type":"text","placeholder":"Background image URL..."},domProps:{"value":(_vm.project.images.header)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.project.images, "header", $event.target.value)}}}),_vm._v(" "),_c('div',{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[_c('span',{staticClass:"fa fa-check",on:{"click":function($event){_vm.deactivateElement('background_image')}}})])])]):_vm._e(),_vm._v(" "),_c('label',{staticStyle:{"display":"block"}},[_vm._v("RECOMMENDED SIZE: 1120 x 524px")])]):_vm._e(),_vm._v(" "),(_vm.editing)?_c('div',{staticClass:"editor text-right"},[(!_vm.activeElement['store_image'])?_c('button',{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{"click":function($event){_vm.activateElement('store_image')}}},[_vm._v("Change Store Image "),_c('span',{staticClass:"fa fa-edit"})]):_vm._e(),_vm._v(" "),(_vm.activeElement['store_image'])?_c('div',{},[_c('div',{staticClass:"form-control-element form-control-element--right"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.project.images.header),expression:"project.images.header"}],ref:"store_image",staticClass:"form-control",attrs:{"name":"store_image","type":"text","placeholder":"Background image URL..."},domProps:{"value":(_vm.project.images.header)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.project.images, "header", $event.target.value)}}}),_vm._v(" "),_c('div',{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[_c('span',{staticClass:"fa fa-check",on:{"click":function($event){_vm.deactivateElement('store_image')}}})])])]):_vm._e(),_vm._v(" "),_c('label',{staticStyle:{"display":"block"}},[_vm._v("RECOMMENDED SIZE: 2140 x 680px")])]):_vm._e()])]),_vm._v(" "),_c('ul',{staticClass:"nav nav-tabs margin-bottom-50 justify-content-between"},[_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link active",attrs:{"to":("/project/" + (_vm.project.id))}},[_vm._v("Overview")])],1),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":("/project/" + (_vm.project.id) + "/community")}},[_vm._v("Community")])],1),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":("/project/" + (_vm.project.id) + "/bounties")}},[_vm._v("Bounties")])],1),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":("/project/" + (_vm.project.id) + "/updates")}},[_vm._v("Updates")])],1),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":("/project/" + (_vm.project.id) + "/milestones")}},[_vm._v("Milestones")])],1),_vm._v(" "),(_vm.editing)?_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"data-toggle":"pill","href":"#configure","role":"tab","aria-controls":"configure","aria-selected":"true"}},[_vm._v("Configure")])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"row tab-pane fade",attrs:{"id":"configure","role":"tabpanel","aria-labelledby":"configure-tab"}},[_c('c-block-1',{attrs:{"title":"Campaign"}},[_c('form',[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"switch switch-sm col-sm-3"},[_c('label',[_vm._v("Minimum Contribution Goal")])]),_vm._v(" "),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","placeholder":"Example: 0"}}),_vm._v(" "),_c('span',{staticClass:"form-text"},[_vm._v("Projects with Overflow Enabled will accept more than the funding goal (over-contribution)")])])]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"switch switch-sm col-sm-3"},[_c('label',[_vm._v("Maximum Contribution Goal")])]),_vm._v(" "),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","placeholder":"Example: 1000"}}),_vm._v(" "),_c('span',{staticClass:"form-text"},[_vm._v("Projects with Overflow Enabled will accept more than the funding goal (over-contribution)")])])]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Support Email")])]),_vm._v(" "),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control",attrs:{"type":"email","placeholder":"Example: example@domain.com"}}),_vm._v(" "),_c('span',{staticClass:"form-text"},[_vm._v("Projects with Overflow Enabled will accept more than the funding goal (over-contribution)")])])]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Twitter Username")])]),_vm._v(" "),_c('div',{staticClass:"col-sm-9"},[_c('div',{staticClass:"input-group mb-2 mr-sm-2 mb-sm-0"},[_c('div',{staticClass:"input-group-prepend"},[_c('span',{staticClass:"input-group-text"},[_vm._v("@")])]),_vm._v(" "),_c('input',{staticClass:"form-control",attrs:{"type":"text","placeholder":"Example: @example"}})])])]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Share Text")])]),_vm._v(" "),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","placeholder":"Example: Join our crowdfund on BlockHub today!"}}),_vm._v(" "),_c('span',{staticClass:"form-text"},[_vm._v("Projects with Overflow Enabled will accept more than the funding goal (over-contribution)")])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"switch switch-sm col-sm-1"},[_c('input',{attrs:{"type":"checkbox","name":"switch_8","checked":"","value":"0"}}),_vm._v(" "),_c('span')]),_vm._v(" "),_c('div',{staticClass:"col-sm-11"},[_c('label',[_vm._v("Overflow")]),_vm._v(" "),_c('span',{staticClass:"form-text"},[_vm._v("Projects with Overflow enabled will accept more than the funding goal (over-contribution)")])])]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"switch switch-sm col-sm-1"},[_c('input',{attrs:{"type":"checkbox","name":"switch_8","checked":"","value":"0"}}),_vm._v(" "),_c('span')]),_vm._v(" "),_c('div',{staticClass:"col-sm-11"},[_c('label',[_vm._v("Timeline")]),_vm._v(" "),_c('span',{staticClass:"form-text"},[_vm._v("Projects with Timeline enabled will have a current timeline with associated milestones.")])])]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"switch switch-sm col-sm-1"},[_c('input',{attrs:{"type":"checkbox","name":"switch_8","checked":"","value":"0"}}),_vm._v(" "),_c('span')]),_vm._v(" "),_c('div',{staticClass:"col-sm-11"},[_c('label',[_vm._v("Refunds")]),_vm._v(" "),_c('span',{staticClass:"form-text"},[_vm._v("Projects with Refunds enabled will allow contributors to get partial or full refund if the project is deemed not successful (by community vote).")])])]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"switch switch-sm col-sm-1"},[_c('input',{attrs:{"type":"checkbox","name":"switch_8","checked":"","value":"0"}}),_vm._v(" "),_c('span')]),_vm._v(" "),_c('div',{staticClass:"col-sm-11"},[_c('label',[_vm._v("Curation")]),_vm._v(" "),_c('span',{staticClass:"form-text"},[_vm._v("Projects with Curation enabled will allow the community to curate the project and earn reputation for their actions.")])])]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"switch switch-sm col-sm-1"}),_vm._v(" "),_c('div',{staticClass:"col-sm-11"},[_c('input',{attrs:{"type":"text","id":"ise_default","name":"ise_default","value":""}}),_vm._v(" "),_c('label',[_vm._v("Contribution Period")]),_vm._v(" "),_c('span',{staticClass:"form-text"},[_vm._v("Projects with Curation Enabled will allow the community to curate the project and earn reputation for their actions.")])])]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"switch switch-sm col-sm-1"},[_c('input',{attrs:{"type":"checkbox","name":"switch_8","checked":"","value":"0"}}),_vm._v(" "),_c('span')]),_vm._v(" "),_c('div',{staticClass:"col-sm-11"},[_c('label',[_vm._v("No Contribution Period")]),_vm._v(" "),_c('span',{staticClass:"form-text"},[_vm._v("Projects with No Contribution Period will be open for contribution until the project is completed, allowing for contributions during the project.")])])])])])])])],1),_vm._v(" "),_c('div',{staticClass:"row tab-pane fade active show",attrs:{"id":"overview","role":"tabpanel","aria-labelledby":"overview-tab"}},[_c('div',{staticClass:"col-md-7 col-xl-8"},[_c('c-screen-gallery'),_vm._v(" "),_c('div',{staticClass:"editor-container"},[(_vm.editing)?_c('div',{staticClass:"editor"},[(!_vm.activeElement['description'])?_c('button',{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{"click":function($event){_vm.activateElement('description')}}},[_vm._v("Change Description "),_c('span',{staticClass:"fa fa-edit"})]):_vm._e(),_vm._v(" "),(_vm.activeElement['description'])?_c('div',{staticClass:"form-control-element form-control-element--right"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.project.description),expression:"project.description"}],ref:"description",staticClass:"form-control",attrs:{"name":"name","type":"text","placeholder":"Project description..."},domProps:{"value":(_vm.project.description)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.project, "description", $event.target.value)}}}),_vm._v(" "),_c('div',{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[_c('span',{staticClass:"fa fa-check",on:{"click":function($event){_vm.deactivateElement('description')}}})])]):_vm._e()]):_vm._e(),_vm._v(" "),_c('p',{staticClass:"project__description"},[_vm._v(_vm._s(_vm.project.description))])]),_vm._v(" "),(!_vm.editing)?_c('div',{staticClass:"main-content",domProps:{"innerHTML":_vm._s(_vm.project.content)}},[_vm._v("\n                                "+_vm._s(_vm.project.content)+"\n                            ")]):_vm._e(),_vm._v(" "),(_vm.editing)?_c('div',{staticClass:"content-editor"},[_c('div',{attrs:{"id":"summernote"},domProps:{"innerHTML":_vm._s(_vm.project.content)}},[_vm._v(_vm._s(_vm.project.content))])]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"col-md-5 col-xl-4"},[_c('c-block',{staticClass:"card invert purchase-block",attrs:{"title":"Contribute"}},[_c('c-button',{attrs:{"size":"lg"},on:{"click":_vm.showContributeModal}},[_vm._v("\n                                    Proceed to Purchase\n                                ")])],1),_vm._v(" "),(_vm.project.funding)?_c('div',{staticClass:"card invert"},[_c('div',{staticClass:"card-body"},[(_vm.editing && !_vm.activeElement['campaign'])?_c('a',{staticClass:"nav-link editor-container editor-container--style-2",attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.showTab('configure')}}},[_c('i',{staticClass:"fas fa-cog"}),_vm._v(" "),_c('span',[_vm._v("Configure Campaign")])]):_vm._e(),_vm._v(" "),_c('h2',{staticClass:"title"},[_vm._v("Crowndfunding campaign")]),_vm._v(" "),_c('div',{staticClass:"project"},[_c('div',{staticClass:"project__progress"},_vm._l((_vm.project.funding.stages),function(stage,index){return _c('div',{key:index,staticClass:"project__progress-stage",class:stage.status},[(stage.status === 'done')?_c('i',{staticClass:"fas fa-check"}):_vm._e(),_vm._v(" "),(stage.status === 'in_progress')?_c('i',{staticClass:"fas fa-clock"}):_vm._e(),_vm._v(" "),_c('span',{staticClass:"stage_line"}),_vm._v(" "),_c('span',{staticClass:"name"},[_vm._v(_vm._s(stage.text))])])})),_vm._v(" "),_c('div',{staticClass:"project__info"},[_c('div',{staticClass:"funded"},[_c('div',{staticClass:"text"},[_vm._v("114% Funded")]),_vm._v("\n                                                "+_vm._s(_vm.project.funding.funded_amount)+" USD\n                                            ")]),_vm._v(" "),_c('div',{staticClass:"goal"},[_c('div',{staticClass:"text"},[_vm._v("Goal")]),_vm._v("\n                                                "+_vm._s(_vm.project.funding.goal_amount)+" USD\n                                            ")]),_vm._v(" "),_vm._l((_vm.crowdfunding_props),function(prop,index){return _c('div',{key:index,class:prop},[_c('div',{staticClass:"progress-bar-vertical"},[_c('c-progress-bar',{attrs:{"values":{
                                                            reached: _vm.project.funding[prop + '_amount'],
                                                            goal: _vm.project.funding.goal_amount
                                                        },"direction":"vertical"}})],1),_vm._v(" "),_c('div',[_c('p',{staticClass:"text"},[_c('strong',[_vm._v(_vm._s(_vm._f("upperFirstChar")(prop)))])]),_vm._v("\n                                                    "+_vm._s(_vm.project.funding[prop + '_amount'])+" USD\n                                                ")])])})],2),_vm._v(" "),_c('div',{staticClass:"project__action"},[_c('c-button',{attrs:{"status":"share","swap_direction":""}},[_vm._v("Share")]),_vm._v(" "),_c('c-button',{attrs:{"status":"info","icon":"check","swap_direction":""}},[_vm._v("Follow")]),_vm._v(" "),_c('c-button',{attrs:{"status":"support","swap_direction":""}},[_vm._v("Support")])],1)])])]):_vm._e(),_vm._v(" "),(_vm.project.milestones)?_c('div',{staticClass:"card invert milestones"},[_c('div',{staticClass:"card-body"},[(_vm.editing && !_vm.activeElement['milestones'])?_c('a',{staticClass:"editor-container editor-container--style-2",attrs:{"href":"#"}},[_c('i',{staticClass:"fas fa-cog"}),_vm._v(" "),_c('span',[_vm._v("Set Up Milestones")])]):_vm._e(),_vm._v(" "),_c('h2',{staticClass:"title"},[_vm._v("Milestones")]),_vm._v(" "),_c('ul',{staticClass:"milestones__list"},_vm._l((_vm.project.milestones),function(item,index){return _c('li',{key:index,class:{ done: item.status }},[(item.step_number)?_c('div',{staticClass:"step_number"},[_vm._v("\n                                                "+_vm._s(item.step_number)+"\n                                            ")]):_c('div',{staticClass:"status_done"},[_c('i',{staticClass:"fas fa-check"})]),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v("\n                                                "+_vm._s(item.text)+"\n                                            ")])])}))])]):_vm._e(),_vm._v(" "),_c('c-community-spotlight',{attrs:{"discussions":_vm.project.community.discussions,"community_url":("/#/project/" + (_vm.project.id)),"editing":_vm.editing,"activeElement":_vm.activeElement['milestones']}})],1)]),_vm._v(" "),_c('div',{staticClass:"row reviews-blk margin-top-40"},[_c('div',{staticClass:"col-12"},[_c('c-heading-bar',{attrs:{"name":"Reviews","showArrows":false,"showBackground":false}})],1),_vm._v(" "),_c('div',{staticClass:"col-12 col-lg-6"},[_c('h3',{staticClass:"margin-vertical-20"},[_vm._v("Most Helpful")]),_vm._v(" "),_vm._l((3),function(index){return _c('c-review',{key:index,attrs:{"review":_vm.review}})})],2),_vm._v(" "),_c('div',{staticClass:"col-12 col-lg-6"},[_c('h3',{staticClass:"margin-vertical-20"},[_vm._v("Most Recent")]),_vm._v(" "),_vm._l((3),function(index){return _c('c-review',{key:index,attrs:{"review":_vm.review}})})],2)])])])])]),_vm._v(" "),_c('div',{staticClass:"modal fade",attrs:{"id":"invertFormExampleModal","tabindex":"-1","role":"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[_c('div',{staticClass:"modal-dialog",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content invert"},[_c('div',{staticClass:"modal-header"},[_c('h5',{staticClass:"modal-title",attrs:{"id":"exampleModalLabel"}},[_vm._v("Set Up Campaign")]),_vm._v(" "),_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])]),_vm._v(" "),_c('div',{staticClass:"modal-body"}),_vm._v(" "),_c('div',{staticClass:"modal-footer"},[_c('button',{staticClass:"btn btn-light",attrs:{"type":"button","data-dismiss":"modal"}},[_vm._v("Close")]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"type":"button"}},[_vm._v("Submit")])])])])])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/screens/project-overview/index.vue":
/*!***************************************************!*\
  !*** ./src/ui/screens/project-overview/index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_45cf061c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=45cf061c&scoped=true */ "./src/ui/screens/project-overview/index.vue?vue&type=template&id=45cf061c&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/screens/project-overview/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss */ "./src/ui/screens/project-overview/index.vue?vue&type=style&index=0&lang=scss");
/* harmony import */ var _index_vue_vue_type_style_index_1_id_45cf061c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&id=45cf061c&lang=scss&scoped=true */ "./src/ui/screens/project-overview/index.vue?vue&type=style&index=1&id=45cf061c&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_45cf061c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_45cf061c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "45cf061c",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/screens/project-overview/index.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./src/ui/screens/project-overview/index.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-overview/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/screens/project-overview/index.vue?vue&type=style&index=0&lang=scss":
/*!************************************************************************************!*\
  !*** ./src/ui/screens/project-overview/index.vue?vue&type=style&index=0&lang=scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-overview/index.vue?vue&type=style&index=0&lang=scss");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/project-overview/index.vue?vue&type=style&index=1&id=45cf061c&lang=scss&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./src/ui/screens/project-overview/index.vue?vue&type=style&index=1&id=45cf061c&lang=scss&scoped=true ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_45cf061c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&id=45cf061c&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-overview/index.vue?vue&type=style&index=1&id=45cf061c&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_45cf061c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_45cf061c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_45cf061c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_45cf061c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_45cf061c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/project-overview/index.vue?vue&type=template&id=45cf061c&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./src/ui/screens/project-overview/index.vue?vue&type=template&id=45cf061c&scoped=true ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_45cf061c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=45cf061c&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-overview/index.vue?vue&type=template&id=45cf061c&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_45cf061c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_45cf061c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=68.0170cba3c36aa5e23219.js.map