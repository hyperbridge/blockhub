(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1345:function(t,n,e){"use strict";var i=e(410);e.n(i).a},410:function(t,n){},639:function(t,n,e){"use strict";e.r(n);var i={props:["id","slug"],components:{"c-article-item":function(t){return e.e(220).then(function(){var n=[e(1636)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-topic-item":function(t){return e.e(196).then(function(){var n=[e(1637)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-list-item":function(t){return e.e(219).then(function(){var n=[e(1638)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-card":function(t){return e.e(218).then(function(){var n=[e(1640)];t.apply(null,n)}.bind(this)).catch(e.oe)}},computed:{article:function(){var t=void 0,n=void 0;n=this.$store.state.marketplace.help.articles;for(var e=0;e<n.length;e++)n[e].slug.includes(this.slug)&&(t=n[e]);return t}}},c=(e(1345),e(0)),a=Object(c.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("c-layout",{attrs:{navigationKey:"help"}},[t.article?e("div",{staticClass:"container-fluid"},[e("h2",[t._v(t._s(t.article.title))]),t._v(" "),e("div",{staticClass:"article-content"},[e("div",{domProps:{innerHTML:t._s(t.article.text)}})])]):t._e(),t._v(" "),t.article?t._e():e("div",[t._v("\n            Oh no, that post wasn't found! Would you "),e("c-button",{attrs:{to:"/post/create",status:"underline"}},[t._v("like to create it")]),t._v("?\n        ")],1)])},[],!1,null,"5c3a18f4",null);n.default=a.exports}}]);