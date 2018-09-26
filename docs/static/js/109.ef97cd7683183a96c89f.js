(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/screen-gallery/gallery.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/screen-gallery/gallery.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "./node_modules/babel-runtime/helpers/slicedToArray.js");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'screen-gallery',
    props: {
        main: {
            type: String
        },
        items: {
            type: Array,
            required: true
        },
        name_url: String,
        video_url: String
    },
    components: {
        'c-modal': function cModal(resolve) {
            return __webpack_require__.e(/*! AMD require */ 115).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/modal */ "./src/ui/components/modal/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-images-explorer': function cImagesExplorer(resolve) {
            return __webpack_require__.e(/*! AMD require */ 116).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/images-explorer */ "./src/ui/components/images-explorer/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        }
    },
    data: function data() {
        return {
            active_item: 0,
            random_item: 0,
            show_modal: false,
            interval: null,
            run_slideshow: true,
            play_video: false
        };
    },

    methods: {
        slideshow: function slideshow() {
            var _this = this;

            this.interval = setInterval(function () {
                _this.active_item < _this.items.length - 1 ? _this.active_item++ : _this.active_item = 0;

                var _$refs$ = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_this.$refs['thumb-' + _this.active_item], 1),
                    child = _$refs$[0];

                var parent = _this.$refs['thumb-nav'];
                _this.scrollParentToChild(parent, child);
            }, 4000);
        },
        enableSlideshow: function enableSlideshow(status) {
            clearInterval(this.interval);
            this.run_slideshow = status;
            if (status && !this.play_video) this.slideshow();
        },
        enableVideoPlay: function enableVideoPlay() {
            this.enableSlideshow(false);
            this.play_video = true;
        },
        changeActiveItem: function changeActiveItem(index) {
            if (this.play_video) {
                this.play_video = false;
            }
            this.active_item = index;
        },
        mouseOut: function mouseOut() {
            if (!this.play_video) this.enableSlideshow(true);
        },
        scrollParentToChild: function scrollParentToChild(parent, child) {
            var parentRect = parent.getBoundingClientRect();

            var parentViewableArea = {
                height: parent.clientHeight,
                width: parent.clientWidth
            };

            var childRect = child.getBoundingClientRect();
            var isViewable = childRect.top >= parentRect.top && childRect.top <= parentRect.top + parentViewableArea.height;

            if (!isViewable) {
                parent.scrollTop = childRect.top + parent.scrollTop - parentRect.top;
            }
            if (status) this.slideshow();
        }
    },
    mounted: function mounted() {
        if (this.items && this.items.length) {
            this.slideshow();
            if (this.video_url) {
                this.random_item = Math.floor(Math.random() * this.items.length);
            }
        }
    },
    beforeDestroy: function beforeDestroy() {
        this.enableSlideshow(false);
    },

    watch: {
        $route: function $route() {
            this.active_item = 0;
            this.play_video = false;
            this.enableSlideshow(true);
        }
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/screen-gallery/gallery.vue?vue&type=style&index=0&id=c2b47faa&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/screen-gallery/gallery.vue?vue&type=style&index=0&id=c2b47faa&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/screen-gallery/gallery.vue?vue&type=template&id=c2b47faa&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/screen-gallery/gallery.vue?vue&type=template&id=c2b47faa&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"screen-gallery",on:{"mouseover":function($event){_vm.enableSlideshow(false)},"mouseout":function($event){_vm.mouseOut()}}},[_c('div',{staticClass:"screen-gallery__main-img"},[_c('i',{directives:[{name:"show",rawName:"v-show",value:(_vm.run_slideshow),expression:"run_slideshow"}],staticClass:"fas fa-expand"}),_vm._v(" "),(!_vm.play_video)?_c('c-img',{attrs:{"src":_vm.items[_vm.active_item]},on:{"click":function($event){_vm.show_modal = true}}}):(_vm.play_video)?_c('video',{attrs:{"controls":"","autoplay":""}},[_c('source',{attrs:{"src":_vm.video_url,"type":"video/mp4"}})]):_vm._e(),_vm._v(" "),(_vm.run_slideshow)?_c('div',{staticClass:"screen-gallery__progress-bar"}):_vm._e()],1),_vm._v(" "),_c('ul',{ref:"thumb-nav",staticClass:"screen-gallery__thumb-nav"},[(_vm.video_url)?_c('li',{staticClass:"thumb-nav__video-thumb",class:{ 'inactive-item': !_vm.play_video },style:({
                backgroundSize: 'cover',
                background: ("black url(" + (_vm.items[_vm.random_item]) + ") no-repeat center")
            }),on:{"click":function($event){_vm.enableVideoPlay()}}},[_c('i',{staticClass:"fas fa-play"})]):_vm._e(),_vm._v(" "),_vm._l((_vm.items),function(url,index){return _c('li',{key:index,ref:("thumb-" + index),refInFor:true},[_c('c-img',{class:{ 'inactive-item': index !== _vm.active_item || _vm.play_video },attrs:{"src":url},on:{"click":function($event){_vm.changeActiveItem(index)}}})],1)})],2),_vm._v(" "),(_vm.show_modal)?_c('c-modal',{on:{"close":function($event){_vm.show_modal=false}}},[_c('c-images-explorer',{attrs:{"images":_vm.items,"start_from":_vm.active_item}})],1):_vm._e()],1)}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/components/screen-gallery/gallery.vue":
/*!******************************************************!*\
  !*** ./src/ui/components/screen-gallery/gallery.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gallery_vue_vue_type_template_id_c2b47faa_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery.vue?vue&type=template&id=c2b47faa&scoped=true */ "./src/ui/components/screen-gallery/gallery.vue?vue&type=template&id=c2b47faa&scoped=true");
/* harmony import */ var _gallery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.vue?vue&type=script&lang=js */ "./src/ui/components/screen-gallery/gallery.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _gallery_vue_vue_type_style_index_0_id_c2b47faa_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery.vue?vue&type=style&index=0&id=c2b47faa&lang=scss&scoped=true */ "./src/ui/components/screen-gallery/gallery.vue?vue&type=style&index=0&id=c2b47faa&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _gallery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _gallery_vue_vue_type_template_id_c2b47faa_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _gallery_vue_vue_type_template_id_c2b47faa_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c2b47faa",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/screen-gallery/gallery.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./src/ui/components/screen-gallery/gallery.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./gallery.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/screen-gallery/gallery.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/components/screen-gallery/gallery.vue?vue&type=style&index=0&id=c2b47faa&lang=scss&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./src/ui/components/screen-gallery/gallery.vue?vue&type=style&index=0&id=c2b47faa&lang=scss&scoped=true ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_c2b47faa_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./gallery.vue?vue&type=style&index=0&id=c2b47faa&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/screen-gallery/gallery.vue?vue&type=style&index=0&id=c2b47faa&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_c2b47faa_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_c2b47faa_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_c2b47faa_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_c2b47faa_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_c2b47faa_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/screen-gallery/gallery.vue?vue&type=template&id=c2b47faa&scoped=true":
/*!************************************************************************************************!*\
  !*** ./src/ui/components/screen-gallery/gallery.vue?vue&type=template&id=c2b47faa&scoped=true ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_template_id_c2b47faa_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./gallery.vue?vue&type=template&id=c2b47faa&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/screen-gallery/gallery.vue?vue&type=template&id=c2b47faa&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_template_id_c2b47faa_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_template_id_c2b47faa_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=109.ef97cd7683183a96c89f.js.map