(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-signup/index.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/account-signup/index.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        'c-tab': function cTab(resolve) {
            return __webpack_require__.e(/*! AMD require */ 135).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/tab/tab */ "./src/ui/components/tab/tab.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-tabs': function cTabs(resolve) {
            return __webpack_require__.e(/*! AMD require */ 136).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/tab/tabs */ "./src/ui/components/tab/tabs.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-datepicker': function cDatepicker(resolve) {
            return __webpack_require__.e(/*! AMD require */ 153).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-user-card': function cUserCard(resolve) {
            return __webpack_require__.e(/*! AMD require */ 132).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/user-card */ "./src/ui/components/user-card/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        }
    },
    data: function data() {
        return {
            current_step: 1,
            steps: 3,
            errors: [],
            account: {
                first_name: 'A',
                last_name: 'c',
                birthday: '03 Sep 2018',
                email: 'www',
                agreement: true,
                newsletter: false,
                identity: {
                    name: '',
                    img: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
                    wallet: ''
                }
            }
        };
    },

    methods: {
        checkForm: function checkForm(e) {
            this.errors = [];

            if (this.current_step === 1) {
                if (this.account.first_name && this.account.last_name && this.account.email && this.account.agreement) {
                    this.current_step = 2;
                } else {

                    if (!this.account.first_name) {
                        this.errors.push('First name required.');
                    }
                    if (!this.account.last_name) {
                        this.errors.push('Last name required.');
                    }
                    if (!this.account.birthday) {
                        this.errors.push('Birthday required.');
                    }
                    if (!this.account.email) {
                        this.errors.push('Email required.');
                    }
                    if (!this.account.agreement) {
                        this.errors.push('You must agree to the terms & conditions to use BlockHub.');
                    }
                }
            } else if (this.current_step === 2) {
                this.current_step = 3;
            } else if (this.current_step === 3) {}
        }
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-signup/index.vue?vue&type=style&index=0&id=03028d60&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/account-signup/index.vue?vue&type=style&index=0&id=03028d60&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-signup/index.vue?vue&type=style&index=1&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/account-signup/index.vue?vue&type=style&index=1&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-signup/index.vue?vue&type=template&id=03028d60&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/account-signup/index.vue?vue&type=template&id=03028d60&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-layout',{attrs:{"navigationKey":"account-navigation"}},[_c('div',{staticClass:"content login-container",attrs:{"id":"content"}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"col-12"},[(_vm.errors.length)?_c('p',{staticClass:"errors"},[_c('strong',[_vm._v("Please correct the following error(s):")]),_vm._v(" "),_c('ul',_vm._l((_vm.errors),function(error){return _c('li',{key:error},[_vm._v(_vm._s(error))])}))]):_vm._e(),_vm._v(" "),_c('c-tabs',{attrs:{"currentStep":_vm.current_step}},[_c('c-tab',{attrs:{"name":"Step 1","selected":true,"showFooter":true}},[_c('div',{staticClass:"tab-container"},[_c('div',{staticClass:"tab-card"},[_c('h4',[_vm._v("Personal Information")]),_vm._v(" "),_c('form',{attrs:{"action":"/","method":"post"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"sr-only"},[_vm._v("First name")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.account.first_name),expression:"account.first_name"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"First name","name":"first_name"},domProps:{"value":(_vm.account.first_name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.account, "first_name", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col"},[_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"sr-only"},[_vm._v("Last name")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.account.last_name),expression:"account.last_name"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Last name","name":"last_name"},domProps:{"value":(_vm.account.last_name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.account, "last_name", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col"},[_c('div',{staticClass:"input-group"},[_c('label',{staticClass:"sr-only"},[_vm._v("Birthday")]),_vm._v(" "),_c('c-datepicker',{attrs:{"placeholder":"Birthday","input-class":"form-control form-calendar__text","name":"birthday","calendar-class":"form-calendar"},model:{value:(_vm.account.birthday),callback:function ($$v) {_vm.$set(_vm.account, "birthday", $$v)},expression:"account.birthday"}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text"},[_c('i',{staticClass:"fas fa-calendar-alt"})])])],1)]),_vm._v(" "),_c('div',{staticClass:"col"},[_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"sr-only"},[_vm._v("Email")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.account.email),expression:"account.email"}],staticClass:"form-control",attrs:{"type":"email","placeholder":"Email","name":"email"},domProps:{"value":(_vm.account.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.account, "email", $event.target.value)}}})])])])])]),_vm._v(" "),_c('div',{staticClass:"tab-card"},[_c('h4',[_vm._v("Agreement")]),_vm._v(" "),_c('div',{staticClass:"terms_block"},[_c('h1',[_vm._v("Terms and Conditions for "),_c('span',{staticClass:"highlight preview_company_name"},[_vm._v("BlockHub")])]),_vm._v(" "),_c('h2',[_vm._v("Introduction")]),_vm._v(" "),_c('p',[_vm._v("These Website Standard Terms and Conditions written on this webpage shall\n                                        manage\n                                        your use of our website, "),_c('span',{staticClass:"highlight preview_website_name"},[_vm._v("BlockHub")]),_vm._v("\n                                        accessible at "),_c('span',{staticClass:"highlight preview_website_url"},[_vm._v("BlockHub.gg")]),_vm._v(".\n                                    ")]),_vm._v(" "),_c('p',[_vm._v("These Terms will be applied fully and affect to your use of this Website. By\n                                        using this Website, you agreed to accept all terms and conditions written in\n                                        here. You must not use this Website if you disagree with any of these\n                                        Website\n                                        Standard Terms and Conditions.")]),_vm._v(" "),_c('p',[_vm._v("Minors or people below 18 years old are not allowed to use this Website.")]),_vm._v(" "),_c('h2',[_vm._v("Intellectual Property Rights")]),_vm._v(" "),_c('p',[_vm._v("Other than the content you own, under these Terms, "),_c('span',{staticClass:"highlight preview_company_name"},[_vm._v("Hyperbridge Technology Inc.")]),_vm._v(" and/or its\n                                        licensors\n                                        own all the intellectual property rights and materials contained in this\n                                        Website.")]),_vm._v(" "),_c('p',[_vm._v("You are granted limited license only for purposes of viewing the material\n                                        contained on this Website.")]),_vm._v(" "),_c('h2',[_vm._v("Restrictions")]),_vm._v(" "),_c('p',[_vm._v("You are specifically restricted from all of the following:")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("publishing any Website material in any other media;")]),_vm._v(" "),_c('li',[_vm._v("selling, sublicensing and/or otherwise commercializing any Website\n                                            material;\n                                        ")]),_vm._v(" "),_c('li',[_vm._v("publicly performing and/or showing any Website material;")]),_vm._v(" "),_c('li',[_vm._v("using this Website in any way that is or may be damaging to this\n                                            Website;\n                                        ")]),_vm._v(" "),_c('li',[_vm._v("using this Website in any way that impacts user access to this\n                                            Website;\n                                        ")]),_vm._v(" "),_c('li',[_vm._v("using this Website contrary to applicable laws and regulations, or in\n                                            any\n                                            way may cause harm to the Website, or to any person or business entity;\n                                        ")]),_vm._v(" "),_c('li',[_vm._v("engaging in any data mining, data harvesting, data extracting or any\n                                            other\n                                            similar activity in relation to this Website;\n                                        ")]),_vm._v(" "),_c('li',[_vm._v("using this Website to engage in any advertising or marketing.")])]),_vm._v(" "),_c('p',[_vm._v("Certain areas of this Website are restricted from being access by you and\n                                        "),_c('span',{staticClass:"highlight preview_company_name"},[_vm._v("Hyperbridge Technology Inc.")]),_vm._v(" may further\n                                        restrict\n                                        access by you to any areas of this Website, at any time, in absolute\n                                        discretion.\n                                        Any user ID and password you may have for this Website are confidential and\n                                        you\n                                        must maintain confidentiality as well.")]),_vm._v(" "),_c('h2',[_vm._v("Your Content")]),_vm._v(" "),_c('p',[_vm._v("In these Website Standard Terms and Conditions, “Your Content” shall mean any\n                                        audio, video text, images or other material you choose to display on this\n                                        Website. By displaying Your Content, you grant "),_c('span',{staticClass:"highlight preview_company_name"},[_vm._v("Hyperbridge Technology Inc.")]),_vm._v(" a\n                                        non-exclusive,\n                                        worldwide irrevocable, sub licensable license to use, reproduce, adapt,\n                                        publish,\n                                        translate and distribute it in any and all media.")]),_vm._v(" "),_c('p',[_vm._v("Your Content must be your own and must not be invading any third-party's\n                                        rights.\n                                        "),_c('span',{staticClass:"highlight preview_company_name"},[_vm._v("Hyperbridge Technology Inc.")]),_vm._v(" reserves\n                                        the\n                                        right to remove any of Your Content from this Website at any time without\n                                        notice.")]),_vm._v(" "),_c('h2',[_vm._v("No warranties")]),_vm._v(" "),_c('p',[_vm._v("This Website is provided “as is,” with all faults, and "),_c('span',{staticClass:"highlight preview_company_name"},[_vm._v("Hyperbridge Technology Inc.")]),_vm._v(" express no\n                                        representations or warranties, of any kind related to this Website or the\n                                        materials contained on this Website. Also, nothing contained on this Website\n                                        shall be interpreted as advising you.")]),_vm._v(" "),_c('h2',[_vm._v("Limitation of liability")]),_vm._v(" "),_c('p',[_vm._v("In no event shall "),_c('span',{staticClass:"highlight preview_company_name"},[_vm._v("Hyperbridge Technology Inc.")]),_vm._v(", nor any of its\n                                        officers, directors and employees, shall be held liable for anything arising\n                                        out\n                                        of or in any way connected with your use of this Website whether such\n                                        liability\n                                        is under contract.  "),_c('span',{staticClass:"highlight preview_company_name"},[_vm._v("Hyperbridge Technology Inc.")]),_vm._v(",\n                                        including its officers, directors and employees shall not be held liable for\n                                        any\n                                        indirect, consequential or special liability arising out of or in any way\n                                        related to your use of this Website.")]),_vm._v(" "),_c('h2',[_vm._v("Indemnification"),_c('p'),_vm._v(" "),_c('p',[_vm._v("You hereby indemnify to the fullest extent "),_c('span',{staticClass:"highlight preview_company_name"},[_vm._v("Hyperbridge Technology Inc.")]),_vm._v(" from and\n                                            against\n                                            any and/or all liabilities, costs, demands, causes of action, damages\n                                            and\n                                            expenses arising in any way related to your breach of any of the\n                                            provisions\n                                            of these Terms.")])]),_vm._v(" "),_c('h2',[_vm._v("Severability")]),_vm._v(" "),_c('p',[_vm._v("If any provision of these Terms is found to be invalid under any applicable\n                                        law,\n                                        such provisions shall be deleted without affecting the remaining provisions\n                                        herein.")]),_vm._v(" "),_c('h2',[_vm._v("Variation of Terms")]),_vm._v(" "),_c('p',[_c('span',{staticClass:"highlight preview_company_name"},[_vm._v("Hyperbridge Technology Inc.")]),_vm._v(" is permitted\n                                        to\n                                        revise these Terms at any time as it sees fit, and by using this Website you\n                                        are\n                                        expected to review these Terms on a regular basis.")]),_vm._v(" "),_c('h2',[_vm._v("Assignment")]),_vm._v(" "),_c('p',[_vm._v("The "),_c('span',{staticClass:"highlight preview_company_name"},[_vm._v("Hyperbridge Technology Inc.")]),_vm._v(" is\n                                        allowed\n                                        to assign, transfer, and subcontract its rights and/or obligations under\n                                        these\n                                        Terms without any notification. However, you are not allowed to assign,\n                                        transfer, or subcontract any of your rights and/or obligations under these\n                                        Terms.")]),_vm._v(" "),_c('h2',[_vm._v("Entire Agreement")]),_vm._v(" "),_c('p',[_vm._v("These Terms constitute the entire agreement between "),_c('span',{staticClass:"highlight preview_company_name"},[_vm._v("Hyperbridge Technology Inc.")]),_vm._v(" and you in\n                                        relation\n                                        to your use of this Website, and supersede all prior agreements and\n                                        understandings.")]),_vm._v(" "),_c('h2',[_vm._v("Governing Law & Jurisdiction")]),_vm._v(" "),_c('p',[_vm._v("These Terms will be governed by and interpreted in accordance with the laws\n                                        of\n                                        the State of "),_c('span',{staticClass:"highlight preview_country"},[_vm._v("Country")]),_vm._v(", and you\n                                        submit to the non-exclusive jurisdiction of the state and federal courts\n                                        located\n                                        in "),_c('span',{staticClass:"highlight preview_country"},[_vm._v("Country")]),_vm._v(" for the resolution\n                                        of\n                                        any disputes.")])])])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between align-items-center",attrs:{"slot":"footer"},slot:"footer"},[_c('c-switch',{attrs:{"value":_vm.account.agreement,"label_position":"right","customLabel":true},on:{"change":function($event){_vm.account.agreement = !_vm.account.agreement}}},[_c('template',{slot:"label"},[_vm._v("\n                                    I agree to the\n                                    "),_c('a',{attrs:{"href":"#","data-toggle":"modal","data-target":"#terms-modal"}},[_vm._v("terms")]),_vm._v(" and\n                                    "),_c('a',{attrs:{"href":"#","data-toggle":"modal","data-target":"#privacy-policy-modal"}},[_vm._v("privacy policy")])])],2),_vm._v(" "),_c('c-switch',{attrs:{"value":_vm.account.newsletter,"label":"Sign up for our newsletter, get 100 HBX Bonus!","label_position":"right"},on:{"change":function($event){_vm.account.newsletter = !_vm.account.newsletter}}}),_vm._v(" "),_c('div',[_c('c-button',{attrs:{"icon":"angle-right"},on:{"click":_vm.checkForm}})],1)],1)]),_vm._v(" "),_c('c-tab',{attrs:{"name":"Step 2","showFooter":true}},[_c('div',{staticClass:"tab-container"},[_c('div',{staticClass:"padding-40"},[_c('h3',[_vm._v("Welcome, "+_vm._s(_vm.account.first_name)+". Let's build your main identity.")]),_vm._v(" "),_c('p',[_vm._v("Be aware that all your future identities will be tied to this one")]),_vm._v(" "),_c('div',{staticClass:"row margin-top-40"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"tab-card"},[_c('h4',[_vm._v("Please complete")]),_vm._v(" "),_c('c-user-card',{attrs:{"user":_vm.account.identity},on:{"updateIdentity":function (prop, val) { return _vm.account.identity[prop] = val; }}})],1)]),_vm._v(" "),_c('div',{staticClass:"col"},[_c('div',{staticClass:"tab-card"},[_c('h4',[_vm._v("Preview your identity")]),_vm._v(" "),_c('c-user-card',{attrs:{"user":_vm.account.identity,"previewMode":""}})],1)])])])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-end",attrs:{"slot":"footer"},slot:"footer"},[_c('c-button',{attrs:{"icon":"angle-right"},on:{"click":_vm.checkForm}})],1)]),_vm._v(" "),_c('c-tab',{attrs:{"name":"Step 3","showFooter":true}},[_c('div',{staticClass:"tab-container"},[_c('div',{staticClass:"padding-20"},[_c('h3',[_vm._v("Verify your identity (Optional)")]),_vm._v(" "),_c('p',[_vm._v("Submit a proof of identity by your country of residence."),_c('br'),_vm._v("\n                                    This is optional but allows you to start with 1000 trust after verification,\n                                    allowing you to reassure reviews of other user's proofs of identity.\n                                    You can skip and finish later.")]),_vm._v(" "),_c('div',{staticClass:"row margin-top-40"},[_c('c-user-card',{staticClass:"col",attrs:{"user":_vm.account.identity,"previewMode":""}}),_vm._v(" "),_c('div',{staticClass:"col"},[_c('div',{staticClass:"tab-card margin-top-5 margin-bottom-15"},[_c('div',{staticClass:"button_blk"},[_c('div',{staticClass:"button"},[_vm._v("\n                                                    select file\n                                                ")]),_vm._v(" "),_c('div',{staticClass:"description"},[_c('h5',[_vm._v("Govermment Issued ID")]),_vm._v(" "),_c('p',[_vm._v("Maximum file size is 8mb")])])])]),_vm._v(" "),_c('div',{staticClass:"tab-card"},[_c('div',{staticClass:"button_blk"},[_c('div',{staticClass:"button"},[_vm._v("\n                                                    select file\n                                                ")]),_vm._v(" "),_c('div',{staticClass:"description"},[_c('h5',[_vm._v("Govermment Issued ID")]),_vm._v(" "),_c('p',[_vm._v("Maximum file size is 8mb")])])])])])],1),_vm._v(" "),_c('div',{staticClass:"row margin-top-40"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"verification-info"},[_c('div',{staticClass:"verification-icon success"},[_c('i',{staticClass:"fas fa-lock"})]),_vm._v(" "),_c('div',{staticClass:"verification-text"},[_c('h4',[_vm._v("ID Verification Pending")]),_vm._v(" "),_c('p',[_vm._v("Identity Proof reviewed and approved by a high\n                                                    trust profile. Gains 15% more trust for interactions.")])])])]),_vm._v(" "),_c('div',{staticClass:"col"},[_c('div',{staticClass:"verification-info"},[_c('div',{staticClass:"verification-icon warning"},[_c('i',{staticClass:"fas fa-exclamation-triangle"})]),_vm._v(" "),_c('div',{staticClass:"verification-text"},[_c('h4',[_vm._v("ID Verification Pending")]),_vm._v(" "),_c('p',[_vm._v("Identity Proof submited but not yet reviewed. Trust bonus of 5%\n                                                    is activated")])])])]),_vm._v(" "),_c('div',{staticClass:"col"},[_c('div',{staticClass:"verification-info"},[_c('div',{staticClass:"verification-icon danger"},[_c('i',{staticClass:"fas fa-exclamation-triangle"})]),_vm._v(" "),_c('div',{staticClass:"verification-text"},[_c('h4',[_vm._v("ID Verification Pending")]),_vm._v(" "),_c('p',[_vm._v("Identity Proof not submitted at all, trust must be gained by\n                                                    simple interactions")])])])])])])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-end",attrs:{"slot":"footer"},slot:"footer"},[_c('c-button',{attrs:{"status":"success","text":"Complete","icon":"fas fa-check","icon_position":"right"}})],1)])],1)],1)])])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/screens/account-signup/index.vue":
/*!*************************************************!*\
  !*** ./src/ui/screens/account-signup/index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_03028d60_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=03028d60&scoped=true */ "./src/ui/screens/account-signup/index.vue?vue&type=template&id=03028d60&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/screens/account-signup/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_03028d60_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=03028d60&lang=scss&scoped=true */ "./src/ui/screens/account-signup/index.vue?vue&type=style&index=0&id=03028d60&lang=scss&scoped=true");
/* harmony import */ var _index_vue_vue_type_style_index_1_lang_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&lang=scss */ "./src/ui/screens/account-signup/index.vue?vue&type=style&index=1&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_03028d60_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_03028d60_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "03028d60",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/screens/account-signup/index.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./src/ui/screens/account-signup/index.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-signup/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/screens/account-signup/index.vue?vue&type=style&index=0&id=03028d60&lang=scss&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./src/ui/screens/account-signup/index.vue?vue&type=style&index=0&id=03028d60&lang=scss&scoped=true ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_03028d60_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=03028d60&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-signup/index.vue?vue&type=style&index=0&id=03028d60&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_03028d60_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_03028d60_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_03028d60_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_03028d60_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_03028d60_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/account-signup/index.vue?vue&type=style&index=1&lang=scss":
/*!**********************************************************************************!*\
  !*** ./src/ui/screens/account-signup/index.vue?vue&type=style&index=1&lang=scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=scss */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-signup/index.vue?vue&type=style&index=1&lang=scss");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/account-signup/index.vue?vue&type=template&id=03028d60&scoped=true":
/*!*******************************************************************************************!*\
  !*** ./src/ui/screens/account-signup/index.vue?vue&type=template&id=03028d60&scoped=true ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_03028d60_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=03028d60&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-signup/index.vue?vue&type=template&id=03028d60&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_03028d60_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_03028d60_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=33.ac1ba09b755b46bb5509.js.map