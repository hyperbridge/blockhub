(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{1122:function(t,e,s){"use strict";s.r(e);var a={name:"review",props:{review:{type:Object,required:!0}},components:{"c-rating-stars":function(t){return s.e(162).then(function(){var e=[s(1134)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-author":function(t){return s.e(153).then(function(){var e=[s(1177)];t.apply(null,e)}.bind(this)).catch(s.oe)}},data:function(){return{show_more:!1,setup_params:["System","GPU","CPU","RAM","Storage"]}},computed:{time_played:function(){var t=this.review.minutes_played,e=Math.floor(t/60);return e+"h "+(t-60*e)+"m"}}},r=(s(729),s(0)),i=Object(r.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"review"},[s("div",{staticClass:"review__header"},[s("c-img",{staticClass:"review__author-img",attrs:{src:t.review.author.img}}),t._v(" "),s("div",{staticClass:"review__author"},[s("h5",{staticClass:"review__author-name"},[t._v(t._s(t.review.author.name))]),t._v(" "),s("span",{staticClass:"review__author-date"},[t._v(t._s(t._f("timeAgo")(t.review.date)))])]),t._v(" "),s("div",{staticClass:"review__rating"},[s("i",{staticClass:"review__rating-score"},[t._v(t._s(t.review.rating))]),t._v(" "),s("div",[s("c-rating-stars",{attrs:{number:t.review.rating}}),t._v(" "),s("div",[s("strong",[t._v("Played for "+t._s(t.time_played))])])],1)])],1),t._v(" "),s("h4",[t._v(t._s(t.review.title))]),t._v(" "),s("transition",{attrs:{name:"fade-scale"}},[t.show_more?s("p",{key:t.show_more},[t._v(t._s(t.review.text))]):s("p",[t._v(t._s(t.review.text.substring(0,200)))])]),t._v(" "),s("transition",{attrs:{name:"fade-scale"}},[t.show_more?s("div",{staticClass:"review__user-setup"},t._l(t.setup_params,function(e,a){return s("div",{key:a,staticClass:"param"},[s("strong",{staticClass:"param-title"},[t._v(t._s(e))]),t._v("\n                "+t._s(t.review.setup[e.toLowerCase()])+"\n            ")])})):t._e()]),t._v(" "),s("div",{staticClass:"review__action"},[t._m(0),t._v(" "),s("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.show_more=!t.show_more}}},[t._v("\n            "+t._s(t.show_more?"HIDE REVIEW":"READ MORE...")+"\n        ")])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"review__action-rate"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-thumbs-up up"}),this._v("HELPFUL\n            ")]),this._v(" "),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-thumbs-down down"}),this._v("NOT HELPFUL\n            ")])])}],!1,null,"df1c265c",null);e.default=i.exports},216:function(t,e){},729:function(t,e,s){"use strict";var a=s(216);s.n(a).a}}]);