(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{1120:function(r,e,s){"use strict";var t=s(342);s.n(t).a},1195:function(r,e,s){"use strict";s.r(e);var t={name:"progress-bar",props:{percentages:[String,Number],values:Object,direction:{type:String,default:"horizontal",validator:function(r){return["horizontal","vertical"].includes(r)}},show_text:Boolean},computed:{progress:function(){var r=this.values;return r?parseFloat(r.reached)/parseFloat(r.goal)*100:this.percentages},direction_prop:function(){return"horizontal"==this.direction?"width":"height"}}},a=(s(1120),s(0)),o=Object(a.a)(t,function(){var r,e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"progress",class:["progress-bar-"+e.direction]},[t("div",{staticClass:"progress-bar",style:(r={},r[e.direction_prop]=e.progress+"%",r),attrs:{role:"progressbar","aria-valuenow":e.progress,"aria-valuemin":"0","aria-valuemax":"100"}},[e._v("\n        "+e._s(e.show_text&&e.progress>8?e.progress:"")+"\n        "),t("span",{staticClass:"sr-only"},[e._v(e._s(e.progress))])])])},[],!1,null,"4b531ace",null);e.default=o.exports},342:function(r,e){}}]);