(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{1125:function(t,e,o){var a=o(2094);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o(14)("20dd8e86",a,!0,{})},2094:function(t,e,o){(t.exports=o(15)(!1)).push([t.i,".c-terms-popup[data-v-7650266c]{display:flex;width:100%;height:100vh;position:fixed;justify-content:center;align-items:center;top:0;left:0;right:0;bottom:0;z-index:99;background:rgba(0,0,0,.7)}@media (max-width:768px){.c-terms-popup[data-v-7650266c]{max-width:80%!important;max-height:70vh}}.c-terms-popup__close[data-v-7650266c]{position:absolute;top:10px;right:10px;opacity:.7;-webkit-transition:.2s ease-out;-moz-transition:.2s ease-out;transition:.2s ease-out;font-size:22px;z-index:999}.c-terms-popup__close img[data-v-7650266c]{width:24px}.c-terms-popup__close[data-v-7650266c]:hover{opacity:1;cursor:pointer;-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);transform:rotate(180deg)}.c-terms-popup__item[data-v-7650266c]{display:flex;position:relative;z-index:30;flex-direction:column;width:400px;max-width:90%;color:#fff}.c-terms-popup__content[data-v-7650266c]{background:#1c2032;padding:20px;border-radius:5px;width:100%;box-shadow:0 0 10px rgba(0,0,0,.3)}.c-terms-popup__header[data-v-7650266c]{padding-bottom:10px;margin-bottom:10px;border-bottom:1px solid hsla(0,0%,100%,.1);width:100%;padding-right:100px;display:block;color:#fff}.c-terms-popup__header .h2[data-v-7650266c],.c-terms-popup__header .h3[data-v-7650266c],.c-terms-popup__header .h4[data-v-7650266c],.c-terms-popup__header .h5[data-v-7650266c],.c-terms-popup__header h2[data-v-7650266c],.c-terms-popup__header h3[data-v-7650266c],.c-terms-popup__header h4[data-v-7650266c],.c-terms-popup__header h5[data-v-7650266c]{color:#fff;padding:0;margin:0}.c-terms-popup__body[data-v-7650266c]{display:flex;flex-direction:column;overflow-y:auto;height:auto;color:#fff;max-height:60vh;margin:20px 0;background:hsla(0,0%,100%,.03);padding:10px}.c-terms-popup__footer[data-v-7650266c]{display:flex;justify-content:flex-end;align-items:center;margin-top:30px}.c-terms-popup__footer .c-button.color-red[data-v-7650266c]{color:#f75d5d}.c-terms-popup__footer .c-button.color-red[data-v-7650266c]:hover{color:#cb4d4d}.c-terms-popup__footer .not-accept[data-v-7650266c]{pointer-events:none;opacity:.5}",""])},2095:function(t,e,o){"use strict";var a=o(1125);o.n(a).a},2186:function(t,e,o){"use strict";o.r(e);var a={props:{activated:{type:Boolean,default:!1},width:String},data:function(){return{isRead:!1}},methods:{checkReadState:function(){$("#terms-popup__body").scrollTop()+$("#terms-popup__body").innerHeight()>=$("#terms-popup__body")[0].scrollHeight?(console.log("1"),this.isRead=!0):this.isRead=!1}}},p=(o(2095),o(7)),s=Object(p.a)(a,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"fade",duration:100}},[t.activated?o("div",{staticClass:"c-terms-popup",on:{click:function(e){if(e.target!==e.currentTarget)return null;e.preventDefault(),t.$emit("close")}}},[o("div",{staticClass:"c-terms-popup__item",style:{width:+t.width+"px"}},[o("div",{staticClass:"position-relative"},[o("div",{staticClass:"c-terms-popup__content"},[o("div",{staticClass:"c-terms-popup__close",on:{click:function(e){t.$emit("close")}}},[o("i",{staticClass:"fas fa-times"})]),t._v(" "),o("div",{staticClass:"c-terms-popup__header"},[t._t("header")],2),t._v(" "),o("div",{staticClass:"c-terms-popup__body",attrs:{id:"terms-popup__body"},on:{scroll:t.checkReadState}},[t._t("body")],2),t._v(" "),o("div",{staticClass:"c-terms-popup__footer"},[o("c-button",{staticClass:"color-red",attrs:{status:"plain"}},[t._v("\n                            Cancel\n                        ")]),t._v(" "),o("c-button",{staticClass:"ml-3",class:{"not-accept":!t.isRead},attrs:{status:"gradient-info"}},[t._v("\n                            I Agree\n                        ")])],1)])])])]):t._e()])},[],!1,null,"7650266c",null);e.default=s.exports}}]);