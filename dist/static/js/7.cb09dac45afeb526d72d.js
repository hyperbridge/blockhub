(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{28:function(t,a,n){"use strict";n.r(a);var e={name:"c-tabs",props:{variant:{type:String,default:"default"},currentStep:[Number,String]},data:function(){return{tabs:[]}},created:function(){this.tabs=this.$children},methods:{selectTab:function(t,a){this.currentStep?a+1<=this.currentStep&&this.tabs.forEach(function(t,n){t.isActive=a==n}):this.tabs.forEach(function(a){a.isActive=a.name==t})}}},s=(n(473),n(0)),i=Object(s.a)(e,function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("div",{staticClass:"tabs-nav",class:t.variant},[n("ul",t._l(t.tabs,function(a,e){return n("li",{key:e,class:"nav-item layer"+(e+1)},[n("a",{class:{active:a.isActive},attrs:{href:a.href},on:{click:function(n){n.preventDefault(),t.selectTab(a.name,e)}}},[t._v(t._s(a.name))])])})),t._v(" "),t._t("tabs-nav")],2),t._v(" "),n("div",{ref:"tabs",staticClass:"tabs-container"},[t._t("default",null,{tabs:t.tabs})],2)])},[],!1,null,"5fd8794a",null);a.default=i.exports},47:function(t,a){},473:function(t,a,n){"use strict";var e=n(47);n.n(e).a}}]);