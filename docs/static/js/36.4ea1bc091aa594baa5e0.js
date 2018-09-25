(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/@veriff/js-sdk/lib/veriff.js":
/*!***************************************************!*\
  !*** ./node_modules/@veriff/js-sdk/lib/veriff.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";n(1);var r=n(6),i=r.createTemplate,a=n(8),o=function(e){var t=e.env,n=e.apiKey,r=e.parentId,o=e.onSession;return{env:{ENV_MAP:{dev:{VERIFF_API_URL:"http://localhost:3000/v1"},test:{VERIFF_API_URL:"http://localhost:3000/v1"},sandbox:{VERIFF_API_URL:"https://sandbox.veriff.me/v1"},staging:{VERIFF_API_URL:"https://staging.veriff.me/v1"},production:{VERIFF_API_URL:"https://magic.veriff.me/v1"}}}.ENV,params:{person:{},features:["selfid"]},setParams:function(e){this.params=Object.assign({},this.params,e)},mount:function(){var e=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=s.formLabel,l=s.submitBtnText,c=void 0===l?"Start Verification":l,f=s.loadingText,p=void 0===f?"Loading...":f,d=i(r,{person:this.params.person,formLabel:u,submitBtnText:c});d.onsubmit=function(r){r.preventDefault();var i=d.givenName?d.givenName.value:e.params.person.givenName,s=d.lastName?d.lastName.value:e.params.person.lastName,u=d.idNumber?d.idNumber.value:e.params.person.idNumber;if(!(e.params.features&&e.params.features instanceof Array))throw new Error("Session features array is required");if(!i||!s)throw new Error("Required parameters givenName or lastName is missing");e.setParams({person:{givenName:i,lastName:s,idNumber:u}}),d.submitBtn.value=p,d.submitBtn.disabled=!0,a(t,n,e.params,function(e,t){o(e,t),d.submitBtn.value=c,d.submitBtn.disabled=!1})}}}};e.exports=o},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0};i.transform=void 0,i.insertInto=void 0;n(4)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(3)(!1),t.push([e.i,".veriff-container {\n  margin-top: 80px;\n  width: 125px;\n}\n\n.veriff-label {\n  display: inline-block;\n  max-width: 100%;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.5);\n  font-weight: normal;\n  margin-bottom: 10px;\n}\n\n.veriff-text {\n    border: 0;\n    outline: 0;\n    background: transparent;\n    border-bottom: 2px solid rgba(0, 0, 0, 0.25);\n    width: 100%;\n    font-size: 14px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    color: black;\n    margin-bottom: 5px;\n}\n\n.veriff-submit {\n  display: inline-block;\n  align-items: center;\n  justify-content: center;\n  min-height: 16px;\n  margin-top: 10px;\n  padding: 5px 16px;\n  border-radius: 100px;\n  background-color: #4DD965;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  color: rgba(255, 255, 255, 0.8);\n}\n",""])},function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var a=r(i);return[n].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([a]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<e.length;i++){var o=e[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=m[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(c(r.parts[a],t))}else{for(var o=[],a=0;a<r.parts.length;a++)o.push(c(r.parts[a],t));m[r.id]={id:r.id,refs:1,parts:o}}}}function i(e,t){for(var n=[],r={},i=0;i<e.length;i++){var a=e[i],o=t.base?a[0]+t.base:a[0],s=a[1],u=a[2],l=a[3],c={css:s,media:u,sourceMap:l};r[o]?r[o].parts.push(c):n.push(r[o]={id:o,parts:[c]})}return n}function a(e,t){var n=h(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=x[x.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=h(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,i)}}function o(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function s(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),l(t,e.attrs),a(e,t),t}function u(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",l(t,e.attrs),a(e,t),t}function l(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function c(e,t){var n,r,i,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var l=y++;n=g||(g=s(t)),r=f.bind(null,n,l,!1),i=f.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=d.bind(null,n,t),i=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=p.bind(null,n),i=function(){o(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function f(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=R(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function p(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var r=n.css,i=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||a)&&(r=N(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}var m={},v=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),b=function(e){return document.querySelector(e)},h=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=b.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),g=null,y=0,x=[],N=n(5);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=v()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=i(e,t);return r(n,t),function(e){for(var a=[],o=0;o<n.length;o++){var s=n[o],u=m[s.id];u.refs--,a.push(u)}if(e){r(i(e,t),t)}for(var o=0;o<a.length;o++){var u=a[o];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete m[u.id]}}}};var R=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i))return e;var a;return a=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"})}},function(e,t,n){"use strict";var r=n(7),i=r.camelCaseToSlug,a=function(e){var t=e.type,n=e.value,r=e.name,a=e.required,o=document.createElement("input");return o.setAttribute("type",t),"submit"===t&&n&&(o.value=n),o.setAttribute("class","veriff-"+t),o.setAttribute("id","veriff-"+i(r)),o.setAttribute("name",r),o.required=a,o},o=function(e,t){var n=document.createElement("label");return n.setAttribute("class","veriff-label"),n.setAttribute("id","veriff-label-"+i(t)),n.setAttribute("htmlFor",t),n.innerHTML=e,n},s=function(e){var t=e.container,n=e.name,r=e.label,i=e.shouldRender,s=e.required;if(!i){var u=o(r,n),l=a({type:"text",name:n,required:s});t.appendChild(u),t.appendChild(l)}},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.formLabel,r=void 0===n?{givenName:"Given name",lastName:"Last name",idNumber:"Id number"}:n,i=t.person,o=void 0===i?{givenName:!1,lastName:!1,idNumber:!1}:i,u=t.submitBtnText,l=document.getElementById(e);l||new Error("Element "+e+" does not exists");var c=document.createDocumentFragment(),f=document.createElement("form");f.setAttribute("class","veriff-container"),f.setAttribute("name","veriff-form"),s({container:f,name:"givenName",label:r.givenName,shouldRender:o.givenName,required:!0}),s({container:f,name:"lastName",label:r.lastName,shouldRender:o.lastName,required:!0}),s({container:f,name:"idNumber",label:r.idNumber,shouldRender:o.idNumber,required:!1});var p=a({type:"submit",name:"submitBtn",value:u,required:!0});return f.appendChild(p),c.appendChild(f),l.appendChild(c),f};e.exports={createTemplate:u}},function(e,t,n){"use strict";var r=t;r.capitalize=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},r.camelCaseToSlug=function(e){return e.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase()},r.camelCaseHuminize=function(e){return r.capitalize(e.replace(/([a-zA-Z])(?=[A-Z])/g,"$1 ").toLowerCase())}},function(e,t,n){"use strict";var r={ENV_MAP:{dev:{VERIFF_API_URL:"http://localhost:3000/v1"},test:{VERIFF_API_URL:"http://localhost:3000/v1"},sandbox:{VERIFF_API_URL:"https://sandbox.veriff.me/v1"},staging:{VERIFF_API_URL:"https://staging.veriff.me/v1"},production:{VERIFF_API_URL:"https://magic.veriff.me/v1"}}}.ENV_MAP,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"production",t=arguments[1],n=arguments[2],i=arguments[3],a=r[e].VERIFF_API_URL,o=a+"/sessions",s=new XMLHttpRequest;s.open("POST",o,!0),s.setRequestHeader("Content-type","application/json"),s.setRequestHeader("x-auth-client",t),s.onreadystatechange=function(){if(4===s.readyState)if("201"==s.status){var e=JSON.parse(s.responseText);i(null,e)}else i({status:s.status,statusText:s.statusText},null)};var u={verification:{features:n.features,person:{firstName:n.person.givenName,lastName:n.person.lastName,idNumber:n.person.idNumber},timestamp:(new Date).toISOString()}},l=JSON.stringify(u);s.send(l)};e.exports=i}]);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-verification/index.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/account-verification/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _veriff_js_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @veriff/js-sdk */ "./node_modules/@veriff/js-sdk/lib/veriff.js");
/* harmony import */ var _veriff_js_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_veriff_js_sdk__WEBPACK_IMPORTED_MODULE_1__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        }
    },
    data: function data() {
        return {
            errors: [],
            installed: {
                veriff: false
            }
        };
    },

    methods: {
        signIn: function signIn() {
            this.$store.dispatch('network/signIn');

            this.$router.push('/store');
        },
        installVeriff: function installVeriff() {
            var _this = this;

            if (this.installed.veriff) return;

            var veriff = _veriff_js_sdk__WEBPACK_IMPORTED_MODULE_1___default()({
                env: 'production', // or 'staging'
                apiKey: 'ceba96be-5fd6-48ed-87d6-e5aaf80f9718',
                parentId: 'veriff-root',
                onSession: function onSession(err, response) {
                    if (!response || err) {
                        _this.errors.push('Could not contact verification service. Please contact support. ' + babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(err));
                    }

                    document.getElementById('veriff-frame').src = response.verification.url;
                }
            });

            veriff.mount();

            this.installed.veriff = true;
        }
    },
    updated: function updated() {
        var _this2 = this;

        this.$nextTick(function () {
            _this2.installVeriff();
        });
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-verification/index.vue?vue&type=style&index=0&id=2b4b1215&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/account-verification/index.vue?vue&type=style&index=0&id=2b4b1215&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-verification/index.vue?vue&type=template&id=2b4b1215&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/account-verification/index.vue?vue&type=template&id=2b4b1215&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-layout',{attrs:{"navigationKey":"account-navigation"}},[_c('div',{staticClass:"content login-container",attrs:{"id":"content"}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"col-12"},[_c('div',[_c('h4',[_vm._v("KYC Verification")]),_vm._v(" "),_c('p',[_vm._v("Below you will be able to KYC")]),_vm._v(" "),_c('div',{staticClass:"errors"},_vm._l((_vm.errors),function(error,index){return _c('div',{key:index},[_vm._v("\n                            "+_vm._s(error)+"\n                        ")])})),_vm._v(" "),_c('div',{attrs:{"id":"veriff-root"}}),_vm._v(" "),_c('iframe',{staticClass:"veriff-frame",attrs:{"id":"veriff-frame"}})])])])])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/screens/account-verification/index.vue":
/*!*******************************************************!*\
  !*** ./src/ui/screens/account-verification/index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2b4b1215_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2b4b1215&scoped=true */ "./src/ui/screens/account-verification/index.vue?vue&type=template&id=2b4b1215&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/screens/account-verification/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_2b4b1215_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=2b4b1215&lang=scss&scoped=true */ "./src/ui/screens/account-verification/index.vue?vue&type=style&index=0&id=2b4b1215&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2b4b1215_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2b4b1215_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2b4b1215",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/screens/account-verification/index.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./src/ui/screens/account-verification/index.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-verification/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/screens/account-verification/index.vue?vue&type=style&index=0&id=2b4b1215&lang=scss&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./src/ui/screens/account-verification/index.vue?vue&type=style&index=0&id=2b4b1215&lang=scss&scoped=true ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2b4b1215_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=2b4b1215&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-verification/index.vue?vue&type=style&index=0&id=2b4b1215&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2b4b1215_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2b4b1215_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2b4b1215_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2b4b1215_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2b4b1215_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/account-verification/index.vue?vue&type=template&id=2b4b1215&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./src/ui/screens/account-verification/index.vue?vue&type=template&id=2b4b1215&scoped=true ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2b4b1215_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2b4b1215&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-verification/index.vue?vue&type=template&id=2b4b1215&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2b4b1215_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2b4b1215_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=36.4ea1bc091aa594baa5e0.js.map