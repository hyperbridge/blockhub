(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[131],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/benchmark/index.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/benchmark/index.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'benchmark',
    props: {
        settings: Object
    },
    data: function data() {
        return {
            fps: 0,
            fpsVals: [],
            running: false,
            finished: false,
            results: {
                avgFps: 0,
                grade: ''
            },
            btnMsg: 'UPDATE SETTINGS AUTOMATICALLY'
        };
    },

    methods: {
        benchmark: function benchmark() {
            var _this = this;

            this.running = true;
            this.finished = false;
            this.fpsVals = [];

            var times = [];
            var fps = 0;
            var loop = 0;

            var refreshLoop = function refreshLoop() {
                window.requestAnimationFrame(function () {
                    loop++;
                    var now = performance.now();
                    while (times.length > 0 && times[0] <= now - 1000) {
                        times.shift();
                    }
                    times.push(now);
                    fps = times.length;
                    _this.fps = fps;

                    if (loop > 60) _this.fpsVals.push(fps);

                    if (loop > 500) {
                        _this.running = false;
                        _this.finished = true;
                        _this.getResults();
                    } else {
                        refreshLoop();
                    }
                });
            };

            refreshLoop();
        },
        getResults: function getResults() {
            var avgFps = Math.round(this.fpsVals.reduce(function (sum, fps) {
                return sum += fps;
            }, 0) / this.fpsVals.length);
            var grade = 'good';
            if (avgFps < 50 && avgFps > 30) {
                grade = 'avg';
            } else if (avgFps < 30) {
                grade = 'bad';
            }
            this.results.avgFps = avgFps;
            this.results.grade = grade;
            this.results.text = grade == 'good' ? 'There is no need to lower your settings' : 'You should consider lowering your settings (preferably by auto-update option)';
        },
        updateSettings: function updateSettings(prop) {
            this.$store.commit('UPDATE_CLIENT_SETTINGS', prop);
        },
        autoUpdateSettings: function autoUpdateSettings() {
            var _this2 = this;

            if (!this.finished || this.running) {
                this.btnMsg = 'YOU NEED TO START A BENCHMARK FIRST';
                setTimeout(function () {
                    return _this2.btnMsg = 'UPDATE SETTINGS AUTOMATICALLY';
                }, 2000);
            } else {
                var grade = this.results.grade;
                var settings = this.settings;


                var perfProps = ['autoplay', 'animations'];
                var enableAll = function enableAll(boolean) {
                    return perfProps.forEach(function (prop) {
                        if (settings[prop] != boolean) _this2.updateSettings(prop);
                    });
                };

                if (grade == 'good') {
                    enableAll(true);
                } else if (grade == 'avg') {
                    if (!settings.autoplay) this.updateSettings('autoplay');
                    if (settings.animations) this.updateSettings('animations');
                } else {
                    enableAll(false);
                }

                this.$snotify.success('Settings were successfully updated', 'Settings updated', {
                    timeout: 2500,
                    pauseOnHover: true
                });
                this.$notif({ title: 'Saved', body: 'Settings were saved successfully' });
            }
        }
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/benchmark/index.vue?vue&type=style&index=0&id=3b3b3f41&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/benchmark/index.vue?vue&type=style&index=0&id=3b3b3f41&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/benchmark/index.vue?vue&type=template&id=3b3b3f41&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/benchmark/index.vue?vue&type=template&id=3b3b3f41&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',[_c('c-button',{class:{ 'avoid-clicks': _vm.running },attrs:{"icon_hide":""},on:{"click":_vm.benchmark}},[_vm._v("\n            "+_vm._s(_vm.finished ? 'Try again' : _vm.running ? 'Running...' : 'Start')+"\n        ")]),_vm._v(" "),_c('p',{staticClass:"benchmark__status"},[_vm._v("STATUS: "+_vm._s(_vm.running ? 'Running' : _vm.finished ? 'Finished' : 'Waiting to start'))]),_vm._v(" "),(_vm.running)?_c('p',[_vm._v("FPS: "+_vm._s(_vm.fps))]):(_vm.finished)?_c('p',[_vm._v("\n            Average fps: "),_c('strong',{staticClass:"benchmark__fps",class:_vm.results.grade},[_vm._v(_vm._s(_vm.results.avgFps))]),_c('br'),_vm._v("\n            "+_vm._s(_vm.results.text)+"\n        ")]):_c('p',[_vm._v("Run this benchmark to check your performance")])],1),_vm._v(" "),_c('div',[_c('c-button',{attrs:{"status":"success"},on:{"click":_vm.autoUpdateSettings}},[_vm._v(_vm._s(_vm.btnMsg))])],1)])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/components/benchmark/index.vue":
/*!***********************************************!*\
  !*** ./src/ui/components/benchmark/index.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3b3b3f41_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3b3b3f41&scoped=true */ "./src/ui/components/benchmark/index.vue?vue&type=template&id=3b3b3f41&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/components/benchmark/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_3b3b3f41_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=3b3b3f41&lang=scss&scoped=true */ "./src/ui/components/benchmark/index.vue?vue&type=style&index=0&id=3b3b3f41&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3b3b3f41_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3b3b3f41_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3b3b3f41",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/benchmark/index.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./src/ui/components/benchmark/index.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/benchmark/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/components/benchmark/index.vue?vue&type=style&index=0&id=3b3b3f41&lang=scss&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./src/ui/components/benchmark/index.vue?vue&type=style&index=0&id=3b3b3f41&lang=scss&scoped=true ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3b3b3f41_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=3b3b3f41&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/benchmark/index.vue?vue&type=style&index=0&id=3b3b3f41&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3b3b3f41_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3b3b3f41_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3b3b3f41_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3b3b3f41_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3b3b3f41_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/benchmark/index.vue?vue&type=template&id=3b3b3f41&scoped=true":
/*!*****************************************************************************************!*\
  !*** ./src/ui/components/benchmark/index.vue?vue&type=template&id=3b3b3f41&scoped=true ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3b3b3f41_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3b3b3f41&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/benchmark/index.vue?vue&type=template&id=3b3b3f41&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3b3b3f41_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3b3b3f41_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=131.3deca0c6ec2ff787596c.js.map