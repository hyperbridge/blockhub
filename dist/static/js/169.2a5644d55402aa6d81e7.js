(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{1122:function(t,n,r){var e=r(68),s=Math.floor;t.exports=function(t){return!e(t)&&isFinite(t)&&s(t)===t}},1123:function(t,n,r){var e=r(44);e(e.S,"Number",{isInteger:r(1122)})},1124:function(t,n,r){r(1123),t.exports=r(26).Number.isInteger},1218:function(t,n,r){"use strict";r.r(n);var e=r(531),s=r.n(e),u={name:"c-rating-stars",props:{number:{required:!0}},computed:{stars:function(){for(var t=[],n=Number(this.number),r=Math.floor(n).toString(),e=0;e<r;e++)t.push("star");return s()(n)?t:[].concat(t,["star-half"])}}},o=r(0),i=Object(o.a)(u,function(){var t=this.$createElement,n=this._self._c||t;return n("span",this._l(this.stars,function(t,r){return n("c-icon",{key:r,attrs:{name:t}})}))},[],!1,null,null,null);n.default=i.exports},531:function(t,n,r){t.exports={default:r(1124),__esModule:!0}}}]);