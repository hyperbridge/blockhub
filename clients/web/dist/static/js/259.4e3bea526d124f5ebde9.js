(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{132:function(t,n){},594:function(t,n,e){"use strict";e.r(n);e(1);var c={name:"comment",props:{comment:{type:Object,required:!0},canReply:{type:Boolean,default:!0}},components:{"c-dropdown-menu":function(t){return e.e(316).then(function(){var n=[e(1641)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-reply":function(t){return e.e(264).then(function(){var n=[e(1643)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-button-arrows":function(t){return e.e(231).then(function(){var n=[e(1750)];t.apply(null,n)}.bind(this)).catch(e.oe)}},data:function(){return{reply:!1}}},o=(e(863),e(0)),a=Object(o.a)(c,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"community-item__comment",class:{"is-reply":t.reply}},[t.comment.rate?e("c-button-arrows",{attrs:{size:"xl",colored:""}},[e("span",{class:{up:t.comment.rate>400,down:t.comment.rate<0}},[t._v(t._s(t.comment.rate))])]):t._e(),t._v(" "),e("div",{staticClass:"comment-container",class:{"w-100":!t.comment.rate}},[e("c-dropdown-menu",{staticStyle:{right:"5px",top:"10px"},attrs:{dropPosition:"right"}}),t._v(" "),e("div",{staticClass:"comment-content"},[e("div",{staticClass:"user-info"},[e("c-img",{attrs:{src:t.comment.author.img}}),t._v(" "),e("div",[e("h6",[t._v(t._s(t.comment.author.name))]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t._f("timeAgoShort")(t.comment.date)))])])],1),t._v(" "),e("div",{staticClass:"text"},[t._v(t._s(t.comment.text))])]),t._v(" "),e("div",{staticClass:"sub-comments-list"},[t._t("default")],2)],1)],1),t._v(" "),t.canReply?e("c-reply",{staticClass:"margin-bottom-10",on:{replyMode:function(n){t.reply=n}}}):t._e()],1)},[],!1,null,"8a03dd6c",null);n.default=a.exports},863:function(t,n,e){"use strict";var c=e(132);e.n(c).a}}]);