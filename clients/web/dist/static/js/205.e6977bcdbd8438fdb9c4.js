(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{1110:function(t,n,r){var e=r(79),s=Math.floor;t.exports=function(t){return!e(t)&&isFinite(t)&&s(t)===t}},1111:function(t,n,r){var e=r(51);e(e.S,"Number",{isInteger:r(1110)})},1112:function(t,n,r){r(1111),t.exports=r(30).Number.isInteger},1568:function(t,n,r){"use strict";r.r(n);var e=r(648),s=r.n(e),u={name:"c-rating-stars",props:{number:{required:!0}},computed:{stars:function(){for(var t=[],n=Number(this.number),r=Math.floor(n).toString(),e=0;e<r;e++)t.push("star");return s()(n)?t:[].concat(t,["star-half"])}}},o=r(0),i=Object(o.a)(u,function(){var t=this.$createElement,n=this._self._c||t;return n("span",this._l(this.stars,function(t,r){return n("c-icon",{key:r,attrs:{name:t}})}))},[],!1,null,null,null);n.default=i.exports},648:function(t,n,r){t.exports={default:r(1112),__esModule:!0}}}]);