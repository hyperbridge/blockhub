(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{1049:function(t,a,n){"use strict";var e=n(328);n.n(e).a},1591:function(t,a,n){"use strict";n.r(a);var e={name:"language-support",props:{languages:{type:Array,required:!0}},data:function(){return{options_icons:{subtitles:"closed-captioning",interface:"language",fullAudio:"volume-off"},userLang:"",show:!1,langList:[]}},created:function(){var t=this,a=this.$store.state.application.account.language,n=this.languages;this.userLang=a.name.toLowerCase(),n.forEach(function(a){a.name?t.userLang.includes(a.name.toLowerCase())?(a.order=0,a.show="default",t.langList.push(a)):(a.order=1,t.langList.push(a)):("English"===a.name&&(a.order=0,a.show="default"),t.langList.push(a))})},methods:{toggleLang:function(){this.show=!this.show}},computed:{orderLang:function(){return this.langList.sort(function(t,a){return t.order-a.order})}},components:{"c-block":function(t){return Promise.resolve().then(function(){var a=[n(1755)];t.apply(null,a)}.bind(this)).catch(n.oe)}}},s=(n(1049),n(0)),o=Object(s.a)(e,function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("c-block",{attrs:{title:"Language Support",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[n("template",{slot:"heading-bar"},[n("i",{staticClass:"fas fa-laptop title-icon"})]),t._v(" "),n("table",{staticClass:"language-support__table"},[n("thead",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Interface")]),t._v(" "),n("th",[t._v("Audio")]),t._v(" "),n("th",[t._v("CC")])]),t._v(" "),n("tbody",[t._l(t.orderLang,function(a,e){return"default"==a.show||t.show||e<5?n("transition-group",{class:["tr-order-"+a.order],attrs:{name:"fadeLeft",tag:"tr"}},[t._l(a,function(a,e){return[n("td",{key:e},"name"==e?[t._v(t._s(a))]:[a?n("i",{staticClass:"fas",class:"fa-"+t.options_icons[e]}):t._e()])]})],2):t._e()}),t._v(" "),t.languages.length>5?n("tr",{staticStyle:{background:"transparent"}},[n("td",{staticClass:"text-center",attrs:{colspan:"10"}},[t.show?n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"language-support__toggle-btn",on:{click:t.toggleLang}},[t._v("\n                        Hide languages "),n("i",{staticClass:"fas fa-angle-double-up"})])]):n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"language-support__toggle-btn",on:{click:t.toggleLang}},[t._v("\n                        Show "+t._s(t.languages.length-5)+" more languages "),n("i",{staticClass:"fas fa-angle-double-down"})])])],1)]):t._e()],2)])],2)},[],!1,null,"5e7c84ae",null);a.default=o.exports},328:function(t,a){}}]);