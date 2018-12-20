(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1043:function(e,t,n){"use strict";var r=n(359);n.n(r).a},1044:function(e,t){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";n(1);var r=n(6).createTemplate,i=n(8);e.exports=function(e){var t=e.env,n=e.apiKey,a=e.parentId,o=e.onSession;return{env:{ENV_MAP:{dev:{VERIFF_API_URL:"http://localhost:3000/v1"},test:{VERIFF_API_URL:"http://localhost:3000/v1"},sandbox:{VERIFF_API_URL:"https://sandbox.veriff.me/v1"},staging:{VERIFF_API_URL:"https://staging.veriff.me/v1"},production:{VERIFF_API_URL:"https://magic.veriff.me/v1"}}}.ENV,params:{person:{},features:["selfid"]},setParams:function(e){this.params=Object.assign({},this.params,e)},mount:function(){var e=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=s.formLabel,l=s.submitBtnText,u=void 0===l?"Start Verification":l,d=s.loadingText,f=void 0===d?"Loading...":d,p=r(a,{person:this.params.person,formLabel:c,submitBtnText:u});p.onsubmit=function(r){r.preventDefault();var a=p.givenName?p.givenName.value:e.params.person.givenName,s=p.lastName?p.lastName.value:e.params.person.lastName,c=p.idNumber?p.idNumber.value:e.params.person.idNumber;if(!(e.params.features&&e.params.features instanceof Array))throw new Error("Session features array is required");if(!a||!s)throw new Error("Required parameters givenName or lastName is missing");e.setParams({person:{givenName:a,lastName:s,idNumber:c}}),p.submitBtn.value=f,p.submitBtn.disabled=!0,i(t,n,e.params,function(e,t){o(e,t),p.submitBtn.value=u,p.submitBtn.disabled=!1})}}}}},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,i),r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".veriff-container {\n  margin-top: 80px;\n  width: 125px;\n}\n\n.veriff-label {\n  display: inline-block;\n  max-width: 100%;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.5);\n  font-weight: normal;\n  margin-bottom: 10px;\n}\n\n.veriff-text {\n    border: 0;\n    outline: 0;\n    background: transparent;\n    border-bottom: 2px solid rgba(0, 0, 0, 0.25);\n    width: 100%;\n    font-size: 14px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    color: black;\n    margin-bottom: 5px;\n}\n\n.veriff-submit {\n  display: inline-block;\n  align-items: center;\n  justify-content: center;\n  min-height: 16px;\n  margin-top: 10px;\n  padding: 5px 16px;\n  border-radius: 100px;\n  background-color: #4DD965;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  color: rgba(255, 255, 255, 0.8);\n}\n",""])},function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<e.length;i++){var o=e[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=f[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(u(r.parts[a],t))}else{var o=[];for(a=0;a<r.parts.length;a++)o.push(u(r.parts[a],t));f[r.id]={id:r.id,refs:1,parts:o}}}}function i(e,t){for(var n=[],r={},i=0;i<e.length;i++){var a=e[i],o=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):n.push(r[o]={id:o,parts:[s]})}return n}function a(e,t){var n=m(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=m(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,i)}}function o(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),l(t,e.attrs),a(e,t),t}function c(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",l(t,e.attrs),a(e,t),t}function l(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function u(e,t){var n,r,i,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var l=h++;n=v||(v=s(t)),r=d.bind(null,n,l,!1),i=d.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=function(e,t,n){var r=n.css,i=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||a)&&(r=g(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}.bind(null,n,t),i=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=function(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){o(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function d(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}var f={},p=function(e){var t;return function(){return void 0===t&&(t=function(){return window&&document&&document.all&&!window.atob}.apply(this,arguments)),t}}(),m=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),v=null,h=0,b=[],g=n(5);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=p()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=i(e,t);return r(n,t),function(e){for(var a=[],o=0;o<n.length;o++){var s=n[o];(c=f[s.id]).refs--,a.push(c)}e&&r(i(e,t),t);for(o=0;o<a.length;o++){var c;if(0===(c=a[o]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete f[c.id]}}}};var _=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(i=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,t,n){"use strict";var r=n(7).camelCaseToSlug,i=function(e){var t=e.type,n=e.value,i=e.name,a=e.required,o=document.createElement("input");return o.setAttribute("type",t),"submit"===t&&n&&(o.value=n),o.setAttribute("class","veriff-"+t),o.setAttribute("id","veriff-"+r(i)),o.setAttribute("name",i),o.required=a,o},a=function(e,t){var n=document.createElement("label");return n.setAttribute("class","veriff-label"),n.setAttribute("id","veriff-label-"+r(t)),n.setAttribute("htmlFor",t),n.innerHTML=e,n},o=function(e){var t=e.container,n=e.name,r=e.label,o=e.shouldRender,s=e.required;if(!o){var c=a(r,n),l=i({type:"text",name:n,required:s});t.appendChild(c),t.appendChild(l)}};e.exports={createTemplate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.formLabel,r=void 0===n?{givenName:"Given name",lastName:"Last name",idNumber:"Id number"}:n,a=t.person,s=void 0===a?{givenName:!1,lastName:!1,idNumber:!1}:a,c=t.submitBtnText,l=document.getElementById(e);l||new Error("Element "+e+" does not exists");var u=document.createDocumentFragment(),d=document.createElement("form");d.setAttribute("class","veriff-container"),d.setAttribute("name","veriff-form"),o({container:d,name:"givenName",label:r.givenName,shouldRender:s.givenName,required:!0}),o({container:d,name:"lastName",label:r.lastName,shouldRender:s.lastName,required:!0}),o({container:d,name:"idNumber",label:r.idNumber,shouldRender:s.idNumber,required:!1});var f=i({type:"submit",name:"submitBtn",value:c,required:!0});return d.appendChild(f),u.appendChild(d),l.appendChild(u),d}}},function(e,t,n){"use strict";var r=t;r.capitalize=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},r.camelCaseToSlug=function(e){return e.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase()},r.camelCaseHuminize=function(e){return r.capitalize(e.replace(/([a-zA-Z])(?=[A-Z])/g,"$1 ").toLowerCase())}},function(e,t,n){"use strict";var r={dev:{VERIFF_API_URL:"http://localhost:3000/v1"},test:{VERIFF_API_URL:"http://localhost:3000/v1"},sandbox:{VERIFF_API_URL:"https://sandbox.veriff.me/v1"},staging:{VERIFF_API_URL:"https://staging.veriff.me/v1"},production:{VERIFF_API_URL:"https://magic.veriff.me/v1"}};e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"production",t=arguments[1],n=arguments[2],i=arguments[3],a=r[e].VERIFF_API_URL+"/sessions",o=new XMLHttpRequest;o.open("POST",a,!0),o.setRequestHeader("Content-type","application/json"),o.setRequestHeader("x-auth-client",t),o.onreadystatechange=function(){if(4===o.readyState)if("201"==o.status){var e=JSON.parse(o.responseText);i(null,e)}else i({status:o.status,statusText:o.statusText},null)};var s={verification:{features:n.features,person:{firstName:n.person.givenName,lastName:n.person.lastName,idNumber:n.person.idNumber},timestamp:(new Date).toISOString()}},c=JSON.stringify(s);o.send(c)}}])},1594:function(e,t,n){"use strict";n.r(t);var r=n(31),i=n.n(r),a=n(2),o=n.n(a),s=(n(1044),n(35)),c=n.n(s),l={components:{"c-layout":function(e){return Promise.resolve().then(function(){var t=[n(1655)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-tab":function(e){return n.e(15).then(function(){var t=[n(143)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-tabs":function(e){return n.e(14).then(function(){var t=[n(144)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-user-card":function(e){return n.e(12).then(function(){var t=[n(1525)];e.apply(null,t)}.bind(this)).catch(n.oe)}},data:function(){var e=this.$store.state.application.account,t=!1;return e.verificationTimestamp&&(t=Math.abs(new Date-new Date(e.verificationTimestamp))/36e5>1),{errors:[],profiles:o()({},e.profiles),activeProfile:null,manual_override:!1,been1hour:t,document_type:"",document_number:"",email:e.email,firstName:e.firstName,lastName:e.lastName,address:e.address,account:e,isVerified:e.isVerified,isVerifying:e.isVerifying,verificationTimestamp:e.verificationTimestamp,verificationLink:null}},methods:{overrideForm:function(){this.manual_override=!0},chooseProfile:function(e){this.activeProfile&&(this.activeProfile.chosen=!1),e.chosen=!0},verifyProfile:function(){this.manual_override=!0},verifyAccount:function(){var e=this;if(this.firstName&&this.lastName&&this.email&&this.document_type&&this.document_number&&this.address){var t={verification:{features:["selfid"],callback:"https://blockhub.gg#/account/verification/callback",person:{firstName:this.firstName,lastName:this.lastName,idNumber:this.document_number},vendorData:this.email,additionalData:{eth:this.address,email:this.email,secret:this.account.secretAnswer2,profile:this.activeProfile&&this.activeProfile.address},timestamp:(new Date).toISOString()}};c()({method:"post",url:"https://magic.veriff.me/v1/sessions",data:t,headers:{"x-auth-client":"a5464742-28a4-42d0-8105-4ef414341214",Accept:"application/json, text/plain, */*"}}).then(function(t){BlockHub.DB.application.config.data[0].account.isVerifying=!0,BlockHub.DB.application.config.data[0].account.verificationTimestamp=new Date,BlockHub.DB.save(),e.verificationLink=t.data.verification.url}).catch(function(t){e.errors.push("Could not contact verification service. Please contact support with this error: "+i()(t))})}else this.firstName||this.errors.push("First Name required."),this.lastName||this.errors.push("Last Name required."),this.document_type||this.errors.push("Document Type required."),this.document_number||this.errors.push("Document Number required."),this.address||this.errors.push("Ethereum Public Address required.")}}},u=(n(1043),n(0)),d=Object(u.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("c-layout",{attrs:{navigationKey:"account",showLeftPanel:!1,showRightPanel:!1}},[n("div",{staticClass:"content login-container",attrs:{id:"content"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"col-12"},[n("c-tabs",{attrs:{currentStep:e.current_step}},[n("c-tab",{attrs:{name:"Account Verification",selected:!0,showFooter:!0}},[n("div",{staticClass:"tab-container"},[e.isVerified?n("div",{staticClass:"tab-card padding-20"},[n("p",[e._v("Your account has been verified. You can request approval for additional profiles below.")]),e._v(" "),n("div",{staticClass:"profile-picker"},e._l(e.profiles,function(t){return n("div",{key:t.id,staticClass:"profile-picker__profile"},[n("c-user-card",{class:{default:t.chosen},attrs:{user:t,previewMode:!0}}),e._v(" "),n("div",{staticClass:"profile__action"},[t.chosen?e._e():n("c-button",{attrs:{status:"info",icon:"check"},on:{click:function(n){e.chooseProfile(t)}}},[e._v("Choose")])],1)],1)})),e._v(" "),n("br"),e._v(" "),n("c-button",{on:{click:e.verifyProfile}},[e._v("\n                                    Send Again\n                                ")])],1):e._e(),e._v(" "),e.isVerifying?n("div",{staticClass:"tab-card padding-20"},[n("div",{staticClass:"col-12 mb-4 text-center"},[n("h2",[n("img",{staticStyle:{"max-width":"40px"},attrs:{src:"/static/img/success.png"}}),e._v(" Account Verification Requested")]),e._v(" "),n("p",[e._v("Account is undergoing verification. You can now close this browser tab.")]),e._v(" "),n("br"),e._v(" "),e.been1hour?e._e():n("p",[e._v("Something wrong? You can submit again in 1 hour")]),e._v(" "),e.been1hour?n("p",[e._v("Something wrong? "),n("c-button",{on:{click:e.overrideForm}},[e._v("Show Form")])],1):e._e()])]):e._e(),e._v(" "),!e.isVerified&&!e.isVerifying||e.been1hour||e.manual_override?n("div",{staticClass:"tab-card padding-20"},[e.verificationLink?e._e():n("div",[n("p",[e._v("\n                                        Submit proof of profile for KYC by providing your legal name, country of residence, and documentation."),n("br"),n("br"),e._v("\n                                        KYC stands for Know Your Customer. BlockHub is required by law to collect this information so that we know the source of money and comply with anti-money laundering laws by assessing potential risks of illegal intentions. As we are handling cryptocurrencies, account holders are entirely unknown, and we want to be very safe by following strict KYC procedure. We do anticipate these procedures can be relaxed post-launch, and will work with our lawyers on that, as our token represents the same utility as many existing point systems."),n("br"),n("br"),e._v("\n                                        Please fill in the fields below. Afterward you will be taken to our partner Veriff to complete your profile verification. You will need to use the same information as you've used here."),n("br"),n("br"),e._v(" "),n("strong",[e._v("Disclaimer:")]),e._v(" We're working with our lawyers in multiple jurisdictions to determine which countries can purchase. As of this moment we know for certain these countries cannot participate: China, Canada. We're very sorry and hope we can extend support worldwide in the future.\n                                    ")]),e._v(" "),n("br"),n("br"),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"form-group"},[n("label",{staticClass:"sr-only"},[e._v("Given Name (First + Middle)")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Given Name (First + Middle Name)",name:"firstName"},domProps:{value:e.firstName},on:{input:function(t){t.target.composing||(e.firstName=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"col"},[n("div",{staticClass:"form-group"},[n("label",{staticClass:"sr-only"},[e._v("Family Name")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Family Name (Last Name)",name:"lastName"},domProps:{value:e.lastName},on:{input:function(t){t.target.composing||(e.lastName=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"col"},[n("div",{staticClass:"form-group"},[n("label",{staticClass:"sr-only"},[e._v("E-mail")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"E-mail",name:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])])]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"form-group"},[n("label",{staticClass:"sr-only"},[e._v("Document Type")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.document_type,expression:"document_type"}],staticClass:"form-control",attrs:{id:"document_type",name:"document_type"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.document_type=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"",selected:""}},[e._v("Choose Document Type")]),e._v(" "),n("option",{attrs:{value:"government_id"}},[e._v("Government ID")]),e._v(" "),n("option",{attrs:{value:"passport"}},[e._v("Passport")]),e._v(" "),n("option",{attrs:{value:"drivers_license"}},[e._v("Drivers License")])])])]),e._v(" "),n("div",{staticClass:"col"},[n("div",{staticClass:"form-group"},[n("label",{staticClass:"sr-only"},[e._v("Document Number")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.document_number,expression:"document_number"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Document Number",name:"documentNumber"},domProps:{value:e.document_number},on:{input:function(t){t.target.composing||(e.document_number=t.target.value)}}})])])]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"form-group"},[n("label",{staticClass:"sr-only"},[e._v("Ethereum Public Address")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ethereum Public Address",name:"address"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}})])])]),e._v(" "),n("br"),e._v(" "),e.errors.length?n("p",{staticClass:"errors"},[n("strong",[e._v("Please correct the following error(s):")]),e._v(" "),n("ul",e._l(e.errors,function(t){return n("li",{key:t},[e._v(e._s(t))])}))]):e._e(),e._v(" "),n("br"),e._v(" "),n("c-button",{staticClass:"c-button--lg",on:{click:function(t){e.verifyAccount()}}},[e._v("Start Verification")])],1),e._v(" "),e.verificationLink?n("div",[n("p",[e._v("Great. We've told Veriff you're coming!")]),e._v(" "),e.verificationLink?n("c-button",{staticClass:"c-button--lg",attrs:{href:e.verificationLink}},[e._v("Continue to Veriff")]):e._e()],1):e._e()]):e._e()])])],1)],1)])])])},[],!1,null,null,null);t.default=d.exports},359:function(e,t){}}]);