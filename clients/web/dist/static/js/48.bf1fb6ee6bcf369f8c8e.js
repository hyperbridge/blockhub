(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1635:function(t,n,s){"use strict";s.r(n);var e=s(10),r=s.n(e),i={props:["id","trxa","trx"],mixins:[s(30).a],components:{"c-block":function(t){return Promise.resolve().then(function(){var n=[s(1603)];t.apply(null,n)}.bind(this)).catch(s.oe)},"c-block-menu":function(t){return s.e(213).then(function(){var n=[s(1359)];t.apply(null,n)}.bind(this)).catch(s.oe)},"c-list":function(t){return s.e(198).then(function(){var n=[s(1506)];t.apply(null,n)}.bind(this)).catch(s.oe)},"c-list-submenu":function(t){return s.e(290).then(function(){var n=[s(1512)];t.apply(null,n)}.bind(this)).catch(s.oe)},"c-list-submenu-2":function(t){return s.e(289).then(function(){var n=[s(1513)];t.apply(null,n)}.bind(this)).catch(s.oe)},"c-tooltip":function(t){return s.e(195).then(function(){var n=[s(1412)];t.apply(null,n)}.bind(this)).catch(s.oe)},"c-asset-preview":function(t){return s.e(190).then(function(){var n=[s(1532)];t.apply(null,n)}.bind(this)).catch(s.oe)},"c-asset-preview-small":function(t){return s.e(288).then(function(){var n=[s(1516)];t.apply(null,n)}.bind(this)).catch(s.oe)},"c-exchange-bar":function(t){return s.e(287).then(function(){var n=[s(1522)];t.apply(null,n)}.bind(this)).catch(s.oe)},"c-author":function(t){return s.e(184).then(function(){var n=[s(1452)];t.apply(null,n)}.bind(this)).catch(s.oe)},"c-assets-grid":function(t){return s.e(187).then(function(){var n=[s(1523)];t.apply(null,n)}.bind(this)).catch(s.oe)}},data:function(){return{yoursOffer:[].concat(r()(this.trx.yourOffer)),theirOffer:[].concat(r()(this.trx.contractorOffer))}},methods:{updateTransaction:function(t,n){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"create";this.$store.dispatch(s+"WeakRel",["assets/transactions/"+t+"Offer",this.id,n.id])},updateTrx:function(){var t=this.yoursOffer,n=this.theirOffer;this.$store.dispatch("updateV2",["assets/transactions",this.id,{yourOffer:t.map(function(t){return t.id}),theirOffer:n.map(function(t){return t.id})}])},addTransactionAsset:function(t,n){var s=this.tradeId;this.$store.commit("addTransactionAsset",{asset:t,target:n,tradeId:s})},deleteAsset:function(t,n){this[t+"Offer"].splice()}},computed:{price:function(){var t=this.yoursOffer,n=this.theirOffer,s=function(t){return Math.round(100*t)/100},e=s(t.reduce(function(t,n){return t+n.price.current},0)),r=s(n.reduce(function(t,n){return t+n.price.current},0));return{yours:e,their:r,sum:s(e-r)}}}},a=(s(856),s(0)),c=Object(a.a)(i,function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("article",[s("c-block",{staticClass:"transaction",attrs:{title:"Trading with "+t.trx.contractor.name}},[s("div",{staticClass:"transaction__block"},[s("div",{staticClass:"transaction__headings"},[s("h4",[t._v("You offered")]),t._v(" "),s("h4",[t._v("Your inventory")])]),t._v(" "),s("div",{staticClass:"transaction__management"},[s("div",{staticClass:"management__selected-assets"},[s("c-assets-grid",{staticClass:"management__assets-grid",attrs:{assets:t.yoursOffer},on:{click:function(n){t.handleArray(n,"yoursOffer")}}})],1),t._v(" "),s("div",{staticClass:"management__inventory-explorer"},[s("c-list-submenu",{attrs:{items:t.trx.you.inventoryGrouped,isParent:""},scopedSlots:t._u([{key:"sublist",fn:function(n){var e=n.sublist;return s("c-list-submenu",{attrs:{items:e},scopedSlots:t._u([{key:"default",fn:function(n){return s("div",{staticClass:"sublist-menu__assets"},[s("c-asset-preview-small",{attrs:{slot:"item-content",asset:n.list},nativeOn:{click:function(s){t.yoursOffer.push(n.list)}},slot:"item-content"})],1)}}])})}}])})],1)])]),t._v(" "),s("c-exchange-bar",{attrs:{price:t.price,yours:t.yoursOffer.length,their:t.theirOffer.length}}),t._v(" "),s("div",{staticClass:"transaction__block"},[s("div",{staticClass:"transaction__headings"},[s("h4",[t._v("For "+t._s(t.trx.contractor.name)+"'s")]),t._v(" "),s("c-author",{attrs:{author:t.trx.contractor}}),t._v(" "),s("h4",[t._v(t._s(t.trx.contractor.name)+"'s inventory")])],1),t._v(" "),s("div",{staticClass:"transaction__management"},[s("div",{staticClass:"management__selected-assets"},[s("c-assets-grid",{staticClass:"management__assets-grid",attrs:{assets:t.theirOffer},on:{click:function(n){t.handleArray(n,"theirOffer")}}})],1),t._v(" "),s("div",{staticClass:"management__inventory-explorer"},[s("c-list-submenu",{attrs:{items:t.trx.contractor.inventoryGrouped,isParent:""},scopedSlots:t._u([{key:"sublist",fn:function(n){var e=n.sublist;return s("c-list-submenu",{attrs:{items:e},scopedSlots:t._u([{key:"default",fn:function(n){return s("div",{staticClass:"sublist-menu__assets"},[s("c-asset-preview-small",{attrs:{slot:"item-content",asset:n.list},nativeOn:{click:function(s){t.theirOffer.push(n.list)}},slot:"item-content"})],1)}}])})}}])})],1)])]),t._v(" "),s("div",{staticClass:"transaction__actions"},[s("c-button",{attrs:{status:"info",iconHide:""},on:{click:function(n){t.updateTrx()}}},[t._v("Update transaction")])],1)],1)],1)},[],!1,null,"6b78d5c2",null);n.default=c.exports},167:function(t,n){},856:function(t,n,s){"use strict";var e=s(167);s.n(e).a}}]);