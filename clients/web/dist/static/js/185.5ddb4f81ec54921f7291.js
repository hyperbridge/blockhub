(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{1449:function(t,e,a){"use strict";a.r(e);var r={name:"curator-review",props:{review:{type:Object,required:!0}},components:{"c-author":function(t){return a.e(192).then(function(){var e=[a(1493)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-rating-stars":function(t){return a.e(198).then(function(){var e=[a(1404)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-button":function(t){return a.e(250).then(function(){var e=[a(1396)];t.apply(null,e)}.bind(this)).catch(a.oe)}},data:function(){return{read_more:!1}}},s=(a(816),a(0)),i=Object(s.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"curator-review"},[a("c-img",{staticClass:"curator-review__img",attrs:{src:t.review.game.img}}),t._v(" "),a("div",{staticClass:"curator-review__header"},[a("c-author",{attrs:{author:t.review.author}}),t._v(" "),a("span",{staticStyle:{"font-size":"22px"}},[a("i",{staticClass:"fas fa-star"}),t._v(" "),a("strong",[t._v(t._s(t.review.rate))])])],1),t._v(" "),a("transition",{attrs:{name:"fade-scale"}},[t.read_more?a("p",{key:1},[t._v(t._s(t.review.text))]):a("p",[t._v(t._s(t.review.text.substring(0,240))+"...")])]),t._v(" "),a("a",{staticClass:"text-white font-weight-bold",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.read_more=!t.read_more}}},[t._v("\n        "+t._s(t.read_more?"SHOW LESS":"MORE...")+"\n    ")]),t._v(" "),a("h4",{staticClass:"curator-review__more-header"},[t._v("More curated by "+t._s(t.review.author.name))]),t._v(" "),a("ul",{staticClass:"moreReviews"},t._l(t.review.moreReviews,function(e,r){return a("li",{key:r,staticClass:"sub-review"},[a("c-img",{staticClass:"sub-review__img",attrs:{src:e.game.img}}),t._v(" "),a("div",{staticClass:"sub-review__details"},[a("h5",{staticClass:"margin-bottom-5"},[a("a",{staticClass:"text-white font-weight-bold",attrs:{href:"#"}},[t._v(t._s(e.game.title))])]),t._v(" "),a("div",{staticClass:"text-white font-weight-bold"},[a("span",{staticStyle:{"font-size":"22px"}},[t._v(t._s(e.rate))])])])],1)})),t._v(" "),a("c-button",[a("strong",[t._v("VIEW CURATOR PAGE")])])],1)},[],!1,null,"381018f2",null);e.default=i.exports},158:function(t,e){},816:function(t,e,a){"use strict";var r=a(158);a.n(r).a}}]);