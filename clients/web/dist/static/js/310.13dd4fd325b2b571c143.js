(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{1033:function(t,e,i){"use strict";var s=i(288);i.n(s).a},1833:function(t,e,i){"use strict";i.r(e);var s=i(1),n=i.n(s),o={name:"timeline-item",props:["item","index","projectID"],methods:{dateFormat:function(t){return n()(t).format("DD MMMM, YYYY")}},computed:{itemPosition:function(){return this.index%2?"right-side":"left-side"}},filters:{stringLength:function(t){if(t.length>250){var e=t.substr(0,250);return e.substr(0,Math.min(e.length,e.lastIndexOf(" "))).concat("...")}return t}}},a=(i(1033),i(0)),r=Object(a.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"posts-timeline__post-item",class:t.itemPosition},[i("div",{staticClass:"posts-timeline__post--content"},[i("div",{staticClass:"post-date"},[t._v("\n            "+t._s(t.dateFormat(t.item.date))+"\n        ")]),t._v(" "),i("a",{attrs:{href:"#"}},[i("h3",[t._v(t._s(t.item.title))])]),t._v(" "),i("p",{staticClass:"mb-4"},[t._v(t._s(t._f("stringLength")(t.item.text)))]),t._v(" "),i("c-button",{attrs:{status:"info",to:"/project/"+t.projectID+"/updates/"+t.item.id,iconHide:""}},[t._v("Read more")])],1)])},[],!1,null,null,null);e.default=r.exports},288:function(t,e){}}]);