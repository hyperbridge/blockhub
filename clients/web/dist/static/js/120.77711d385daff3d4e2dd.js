(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1014:function(s,e,t){"use strict";var r=t(324);t.n(r).a},1015:function(s,e,t){"use strict";var r=t(325);t.n(r).a},1560:function(s,e,t){"use strict";t.r(e);var r=t(2),a=t.n(r),i=t(11),n=t(1),c=t.n(n),o={components:{"c-layout":function(s){return Promise.resolve().then(function(){var e=[t(1648)];s.apply(null,e)}.bind(this)).catch(t.oe)},"c-datepicker":function(s){return t.e(209).then(function(){var e=[t(1684)];s.apply(null,e)}.bind(this)).catch(t.oe)},"c-user-card":function(s){return t.e(11).then(function(){var e=[t(1518)];s.apply(null,e)}.bind(this)).catch(t.oe)},"c-privacy-block":function(s){return t.e(193).then(function(){var e=[t(1404)];s.apply(null,e)}.bind(this)).catch(t.oe)},"c-terms-block":function(s){return t.e(194).then(function(){var e=[t(1457)];s.apply(null,e)}.bind(this)).catch(t.oe)},"c-popup":function(s){return t.e(8).then(function(){var e=[t(144)];s.apply(null,e)}.bind(this)).catch(t.oe)},"c-tabs":function(s){return t.e(183).then(function(){var e=[t(1535)];s.apply(null,e)}.bind(this)).catch(t.oe)},"c-tab":function(s){return t.e(182).then(function(){var e=[t(1484)];s.apply(null,e)}.bind(this)).catch(t.oe)}},data:function(){return{writtenDown:!1,verifyingPassphrase:!0,verifiedPassphrase:!0,agreeStoredPassphrase:!0,currentStep:1,finishedStep:1,steps:3,passphrase:[],repeatPassphrase:[],errors:[],account:{firstName:"",lastName:"",birthday:"",email:"",password:"",repeat_password:"",secretQuestion1:"",secretQuestion2:"",secret_answer_1:"",secret_answer_2:"",agreement:!1,newsletter:!0,passphrase:null,repeat_passphrase:null,encrypt_passphrase:!0,profile:{name:"",img:"https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1",wallet:""}},terms:!1,privacy_policy:!1}},methods:{checkForm:function(){var s=this;if(this.errors=[],1===this.currentStep)this.account.firstName&&this.account.lastName&&this.account.email&&this.account.birthday&&this.account.agreement?i.getPassphraseRequest({seed:13891737193}).then(function(e){s.passphrase=e.split(" "),s.repeatPassphrase=e.split(" "),s.finishedStep=1,s.currentStep=2}):(this.account.firstName||this.errors.push("First name required."),this.account.lastName||this.errors.push("Last name required."),this.account.birthday||this.errors.push("Birthday required."),this.account.email||this.errors.push("Email required."),this.account.agreement||this.errors.push("To continue using BlockHub, you will need to review and agree to the Terms & Service Agreement."));else if(2===this.currentStep){var e=this.passphrase.join(" "),t=this.repeatPassphrase.join(" ");this.account.secretQuestion1&&this.account.secret_answer_1&&this.account.secretQuestion2&&this.account.secret_answer_2&&this.account.password&&this.account.repeat_password&&this.account.password===this.account.repeat_password&&this.agreeStoredPassphrase&&!this.passphrase.includes("")&&!this.repeatPassphrase.includes("")&&e===t?i.createAccountRequest({seed:13891737193,firstName:this.account.firstName,lastName:this.account.lastName,email:this.account.email,birthday:c()(this.account.birthday).format("DD-MM-YYYY"),password:this.account.password,passphrase:e,encrypt_passphrase:this.account.encrypt_passphrase,secretQuestion1:this.account.secretQuestion1,secret_answer_1:this.account.secret_answer_1,secretQuestion2:this.account.secretQuestion2,secret_answer_2:this.account.secret_answer_2}).then(function(e){s.finishedStep=2,s.currentStep=3,s.$store.dispatch("application/updateState",{account:a()({},s.$store.state.application.account,e.account),locked:!1,signedIn:!0})}):(this.account.password||this.errors.push("Password required."),this.account.repeat_password||this.errors.push("Repeat password required."),this.account.password!==this.account.repeat_password&&this.errors.push("Passwords must match."),this.account.secretQuestion1||this.errors.push("Secret Question 1 required."),this.account.secret_answer_1||this.errors.push("Secret Answer 1 required."),this.account.secretQuestion2||this.errors.push("Secret Question 2 required."),this.account.secret_answer_2||this.errors.push("Secret Answer 2 required."),this.agreeStoredPassphrase||this.errors.push("Please agree that you've stored your passphrase somewhere safe."),(this.passphrase.includes("")||this.repeatPassphrase.includes(""))&&this.errors.push("Passphrase must be filled in."),e!==t&&this.errors.push("Passphrase does not match."))}else 3===this.currentStep&&(this.finishedStep=3,this.$router.push({path:"/"}))},changeTab:function(s){s>this.currentStep?this.checkForm():this.currentStep=s},customBirthdayFormatter:function(s){return c()(s).format("DD-MM-YYYY")},showPassphrase:function(){this.errors=[],this.verifyingPassphrase=!1},startVerification:function(){this.errors=[],this.verifyingPassphrase=!0},confirmVerification:function(){this.errors=[];var s=this.passphrase.join(" "),e=this.repeatPassphrase.join(" ");this.passphrase.includes("")||this.repeatPassphrase.includes("")||s!==e?((this.passphrase.includes("")||this.repeatPassphrase.includes(""))&&this.errors.push("Passphrase must be filled in."),s!==e&&this.errors.push("Passphrase does not match.")):this.verifiedPassphrase=!0}},created:function(){this.$store.commit("application/activateModal","register")}},h=(t(1015),t(1014),t(0)),u=Object(h.a)(o,function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("c-layout",{attrs:{navigationKey:"account",showLeftPanel:!1,showRightPanel:!1,showShortcuts:!1}},[t("c-popup",{attrs:{title:"Terms",activated:s.terms,width:"800"},on:{close:function(e){s.terms=!1}}},[t("div",{staticClass:"scroll_block"},[t("c-terms-block")],1)]),s._v(" "),t("c-popup",{attrs:{title:"Privacy policy",activated:s.privacy_policy,width:"800"},on:{close:function(e){s.privacy_policy=!1}}},[t("div",{staticClass:"scroll_block"},[t("c-privacy-block")],1)])],1)},[],!1,null,"9ba26e50",null);e.default=u.exports},324:function(s,e){},325:function(s,e){}}]);