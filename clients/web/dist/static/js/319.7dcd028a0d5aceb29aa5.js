(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{1023:function(t,n,s){"use strict";var i=s(276);s.n(i).a},1721:function(t,n,s){"use strict";s.r(n);var i={name:"game-grid",props:{items:{type:Array,require:!0},itemInRow:{default:"4"}},components:{"c-tags":function(t){return s.e(12).then(function(){var n=[s(1773)];t.apply(null,n)}.bind(this)).catch(s.oe)}}},a=(s(1023),s(0)),e=Object(a.a)(i,function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"product-grid__container"},[t._l(t.items,function(n,i){return t.items.length?s("div",{key:i,staticClass:"product-grid__item-container",style:{width:"calc(100% / "+t.itemInRow+")"}},[s("div",{staticClass:"product-grid__item"},[t.$slots.block?s("div",[t._t("block")],2):s("div",{staticClass:"card-body padding-0"},[s("c-button",{attrs:{status:"none",to:"/product/"+n.id}},[s("c-img",{staticClass:"card-img-top",attrs:{src:n.meta.images.mediumTile}})],1),t._v(" "),s("h4",[s("c-button",{attrs:{status:"none",to:"/product/"+n.id}},[t._v(t._s(n.name))])],1),t._v(" "),s("p",{staticClass:"card-text",attrs:{hidden:""}},[t._v(t._s(n.shortDescription)+" ")]),t._v(" "),s("c-tags",{attrs:{tags:n.tags.map(function(t){return t.value})}})],1)])]):t._e()}),t._v(" "),t.items.length?t._e():s("p",[t._v("\n        Nothing could be found. Want to "),s("c-button",{attrs:{status:"plain"},on:{click:function(n){t.$store.commit("application/activateModal","coming-soon")}}},[t._v("Check for updates")]),t._v("?\n    ")],1)],2)},[],!1,null,"fde00ec6",null);n.default=e.exports},276:function(t,n){}}]);