(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1628:function(t,e,n){"use strict";n.r(e);var s={components:{"c-asset-preview":function(t){return n.e(186).then(function(){var e=[n(1492)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-asset-list":function(t){return n.e(234).then(function(){var e=[n(1363)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-content-navigation":function(t){return n.e(9).then(function(){var e=[n(1421)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-block":function(t){return Promise.resolve().then(function(){var e=[n(1603)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-asset-store-card":function(t){return n.e(231).then(function(){var e=[n(1540)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-carousel-3d":function(t){return n.e(230).then(function(){var e=[n(1408)];t.apply(null,e)}.bind(this)).catch(n.oe)},"carousel-3d-v2":function(t){return n.e(284).then(function(){var e=[n(1367)];t.apply(null,e)}.bind(this)).catch(n.oe)}},data:function(){return{recentlySold:[],counter:4,interval:null}},computed:{assets:function(){return this.$store.getters["assets/assetsArray"]}},mounted:function(){var t=this,e=this.assets,n=this.counter;this.recentlySold=e.slice(0,n);this.interval=setInterval(function(){t.recentlySold.splice(0,1),t.counter===e.length-1&&(t.counter=1),t.recentlySold.push(e[t.counter]),t.counter++},2e3)}},c=(n(874),n(0)),a=Object(c.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"text-align-center margin-bottom-10"},[t._v("Picks of the week")]),t._v(" "),n("div",{staticClass:"carousel-wrapper"},[n("c-carousel-3d",{attrs:{items:t.assets,limitTo:3},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.items,function(t,s){return n("router-link",{key:t.id,class:e.css[s],attrs:{to:"/marketplace/asset/"+t.id}},[n("c-asset-store-card",{attrs:{asset:t}})],1)})}}])})],1),t._v(" "),n("c-block",{staticClass:"margin-bottom-40",attrs:{title:"Recently sold"}},[n("c-asset-list",{attrs:{assets:t.recentlySold,transition:!0}})],1),t._v(" "),n("c-block",{attrs:{title:"Explore available assets",noGutter:"",onlyContentBg:"",bgGradient:""}},[n("c-content-navigation",{staticClass:"assets-block",attrs:{items:t.assets},scopedSlots:t._u([{key:"default",fn:function(t){return n("c-asset-list",{attrs:{assets:t.items}})}}])})],1)],1)},[],!1,null,"7668f8ee",null);e.default=a.exports},185:function(t,e){},874:function(t,e,n){"use strict";var s=n(185);n.n(s).a}}]);