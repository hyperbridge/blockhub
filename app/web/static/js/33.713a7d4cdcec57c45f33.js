(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1283:function(t,e,n){"use strict";n.r(e);var s={props:["id"],components:{"c-block":function(t){return Promise.resolve().then(function(){var e=[n(1307)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-asset-list":function(t){return n.e(175).then(function(){var e=[n(1127)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-asset-preview-basic":function(t){return n.e(153).then(function(){var e=[n(1250)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-content-navigation":function(t){return n.e(7).then(function(){var e=[n(1212)];t.apply(null,e)}.bind(this)).catch(n.oe)}},data:function(){return{openedOffer:null,bidValue:0}},methods:{openOffer:function(t){0!=this.bidValue&&(this.bidValue=0),this.openedOffer==t?this.openedOffer=null:this.openedOffer=t},createAuction:function(t){var e=this.bidValue;if(e){var n={offerId:t,bid:e,user:{name:"Me"},date:moment()};this.$store.dispatch("assets/createAuction",n),this.$snotify.success("You have successfully created an auction bid for "+e+" $","Created"),this.bidValue=0}}},computed:{assets:function(){return this.$store.getters["assets/assetsArray"]},offers:function(){return this.$store.getters["assets/offersArray"]}}},i=(n(653),n(0)),a=Object(i.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("c-content-navigation",{attrs:{items:t.offers,setLimits:7},scopedSlots:t._u([{key:"default",fn:function(e){return n("table",{staticClass:"offers-table"},[n("thead",[n("th",[t._v("Item")]),t._v(" "),n("th",[t._v("Auctions")]),t._v(" "),n("th",[t._v("Time left")]),t._v(" "),n("th",[t._v("Seller")]),t._v(" "),n("th",[t._v("Auction bid")]),t._v(" "),n("th",[t._v("Auction buyout")]),t._v(" "),n("th",[t._v("Market value")]),t._v(" "),n("th",[t._v("Show auctions")])]),t._v(" "),n("tbody",t._l(e.items,function(e,s){return n("tr",{key:s},[t.openedOffer!=e.id?[n("td",[n("c-asset-preview-basic",{attrs:{asset:t.assets[s],size:"sm",horizontal:"",hideGame:""}})],1),t._v(" "),n("td",[t._v(t._s(e.auctions.length))]),t._v(" "),n("td",[t._v(t._s(t._f("timeAgoShort")(e.expDate)))]),t._v(" "),n("td",[t._v(t._s(e.seller.name))]),t._v(" "),n("td",[t._v(t._s(e.auctions[0].bid)+" $")]),t._v(" "),n("td",[t._v(t._s(e.buyout)+" $")]),t._v(" "),n("td",[t._v(t._s(e.marketValue)+" %")]),t._v(" "),n("td",[n("c-button",{attrs:{icon_hide:"",status:"info"},on:{click:function(e){t.openOffer(s)}}},[n("c-icon",{attrs:{name:"arrow-circle-down"}})],1)],1)]:[n("td",{staticClass:"offers-table--opened",attrs:{colspan:"7"},on:{click:function(e){if(e.target!==e.currentTarget)return null;t.openOffer(s)}}},[n("table",{staticClass:"auctions-table"},[n("thead",[n("tr",[n("th",[t._v("Buyer")]),t._v(" "),n("th",[t._v("Bid")]),t._v(" "),n("th",[t._v("Date")])])]),t._v(" "),n("tbody",[e.auctions.length?t._l(e.auctions,function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.user.name))]),t._v(" "),n("td",[t._v(t._s(e.bid)+" $")]),t._v(" "),n("td",[t._v(t._s(t._f("formatTime")(e.date))+" ("+t._s(t._f("timeAgoSShort")(e.date))+")")])])}):n("tr",[n("td",{attrs:{colspan:"3"}},[t._v("\n                                            This offer doesn't contain any auctions yet\n                                        ")])])],2),t._v(" "),n("tfoot",[n("tr",[n("td",{attrs:{colspan:"3"}},[n("div",{staticClass:"auctions-table__bid-asset"},[n("c-input",{model:{value:t.bidValue,callback:function(e){t.bidValue=e},expression:"bidValue"}}),t._v(" "),n("c-button",{attrs:{status:"success",icon:"gavel"},on:{click:function(n){t.createAuction(e.id)}}},[t._v("\n                                                    Bid the asset for "+t._s(t.bidValue)+"$\n                                                ")])],1)])])])])]),t._v(" "),n("td",[n("c-button",{attrs:{icon_hide:"",status:"info"},on:{click:function(e){t.openOffer(s)}}},[n("c-icon",{attrs:{name:"arrow-circle-up"}})],1)],1)]],2)}))])}}])})],1)},[],!1,null,"423e74c7",null);e.default=a.exports},131:function(t,e){},653:function(t,e,n){"use strict";var s=n(131);n.n(s).a}}]);