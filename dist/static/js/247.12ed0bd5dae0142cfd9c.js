(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{1312:function(t,e,a){"use strict";a.r(e);var n={name:"expand-block",props:{image:String,icon:String,title:String,description:String,rating:Number,content:String,actionText:String,relatedItems:Array,relatedText:String},components:{"c-rating-stars":function(t){return a.e(167).then(function(){var e=[a(1192)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-button":function(t){return a.e(213).then(function(){var e=[a(1190)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-heading-bar-color":function(t){return Promise.resolve().then(function(){var e=[a(402)];t.apply(null,e)}.bind(this)).catch(a.oe)}},data:function(){return{expanded:!1}}},i=(a(738),a(0)),s=Object(i.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"expand-block"},[t.image?a("c-img",{staticClass:"expand-block__img",attrs:{src:t.image}}):t._e(),t._v(" "),a("div",{staticClass:"expand-block__header"},[t.title?a("span",{staticClass:"title"},[t.icon?a("c-img",{staticClass:"title__img",attrs:{src:t.icon}}):t._e(),t._v("\n            "+t._s(t.title)+"\n        ")],1):t._e(),t._v(" "),t.rating?a("span",{staticStyle:{"font-size":"22px"}},[a("i",{staticClass:"fas fa-star"}),t._v(" "),a("strong",[t._v(t._s(t.rating))])]):t._e()]),t._v(" "),a("transition",{attrs:{name:"fade-scale"}},[t.expanded?a("p",{key:1,domProps:{innerHTML:t._s(t.content)}},[t._v(t._s(t.content))]):a("p",[t._v(t._s(t.description)+"...")])]),t._v(" "),a("a",{staticClass:"text-white font-weight-bold",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.expanded=!t.expanded}}},[t._v("\n        "+t._s(t.expanded?"SHOW LESS":"MORE...")+"\n    ")]),t._v(" "),t.relatedText?a("h4",{staticClass:"expand-block__more-header"},[t._v(t._s(t.relatedText))]):t._e(),t._v(" "),t.relatedItems?a("ul",{staticClass:"related"},t._l(t.relatedItems,function(e,n){return a("li",{key:n,staticClass:"related__item"},[a("c-img",{staticClass:"related__item__img",attrs:{src:e.image}}),t._v(" "),a("div",{staticClass:"related__item__details"},[a("h5",{staticClass:"margin-bottom-5"},[a("a",{staticClass:"text-white font-weight-bold",attrs:{href:"#"}},[t._v(t._s(e.title))])]),t._v(" "),a("div",{staticClass:"text-white font-weight-bold"},[a("span",{staticStyle:{"font-size":"22px"}},[t._v(t._s(e.rating))])])])],1)})):t._e(),t._v(" "),t.actionText?a("c-button",[a("strong",[t._v(t._s(t.actionText))])]):t._e()],1)},[],!1,null,"4ba8f16e",null);e.default=s.exports},176:function(t,e){},738:function(t,e,a){"use strict";var n=a(176);a.n(n).a}}]);