(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{465:function(t,s,a){"use strict";var i=a(79);a.n(i).a},748:function(t,s,a){"use strict";a.r(s);var i={props:["id"],components:{"c-layout":function(t){return Promise.resolve().then(function(){var s=[a(806)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-block":function(t){return a.e(95).then(function(){var s=[a(675)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-heading-bar":function(t){return Promise.resolve().then(function(){var s=[a(254)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-heading-bar-fields":function(t){return a.e(100).then(function(){var s=[a(684)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-pagination":function(t){return a.e(101).then(function(){var s=[a(697)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-collection-item":function(t){return a.e(107).then(function(){var s=[a(730)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-popup":function(t){return a.e(1).then(function(){var s=[a(21)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-asset-popup":function(t){return a.e(162).then(function(){var s=[a(696)];t.apply(null,s)}.bind(this)).catch(a.oe)}},data:function(){return{totalOwned:3,show_popup:!1,tmpItem:{},sales:!1}},methods:{numberFormat:function(t){return Math.log(t)/Math.log(10)},closePopup:function(){this.show_popup=!1,this.tmpItem={}},openPopup:function(t){this.tmpItem=t,this.show_popup=!0}},computed:{asset:function(){return this.$store.state.marketplace.assets[this.id]||null},offers:function(){var t=this.$store.state.marketplace.assets[this.id].offers_list,s=this.$store.state.marketplace.assets,a=[];return t.forEach(function(t,i){s[t]&&a.push(s[t])}),a},inventory:function(){var t=this.$store.state.marketplace.assets[this.id].inventory_list,s=this.$store.state.marketplace.assets,a=[];return t.forEach(function(t,i){s[t]&&a.push(s[t])}),a},collections:function(){var t=this.$store.state.marketplace.assets[this.id].collections,s=this.$store.state.marketplace.collections,a=[];return console.log(t),console.log("-------"),console.log(s),t.forEach(function(t,i){s[t]&&a.push(s[t])}),a}}},n=(a(465),a(0)),e=Object(n.a)(i,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("c-layout",{attrs:{navigationKey:"asset-navigation"}},[a("div",{staticClass:"content",attrs:{id:"content"}},[a("div",{staticClass:"container-fluid"},[t.asset?t._e():a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[t._v("\n                    Asset not found\n                ")])]),t._v(" "),t.asset?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-8 col-xl-9 margin-bottom-15"},[a("div",{staticClass:"asset-head"},[a("div",{staticClass:"asset-head__asset-title"},[a("div",{staticClass:"title-thumb"},[a("c-img",{attrs:{src:t.asset.image}})],1),t._v(" "),a("div",{staticClass:"title-text"},[a("h1",[t._v(t._s(t.asset.name))]),t._v(" "),a("span",[a("strong",[t._v(t._s(t.asset.game_name))])]),t._v(" "),a("span",{staticClass:"company"},[t._v(t._s(t.asset.product_name))])])]),t._v(" "),a("div",{staticClass:"asset-head__icons"},[a("div",{staticClass:"icon_item"},[a("div",{staticClass:"icon"},[a("i",{staticClass:"fas fa-box"})]),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"h5 mb-0 font-weight-bold"},[t._v(t._s(t._f("numeralFormat")(t.asset.inventory_count,"0 a")))]),t._v(" "),a("p",{staticClass:"p-0"},[t._v("Your Inventory")])])]),t._v(" "),a("div",{staticClass:"icon_item"},[a("div",{staticClass:"icon"},[a("i",{staticClass:"fas fa-shopping-basket"})]),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"h5 mb-0 font-weight-bold"},[t._v(t._s(t._f("numeralFormat")(t.asset.existing_count,"0.0 a")))]),t._v(" "),a("p",{staticClass:"p-0"},[t._v("For Sale")])])]),t._v(" "),a("div",{staticClass:"icon_item"},[a("div",{staticClass:"icon"},[a("i",{staticClass:"fas fa-globe"})]),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"h5 mb-0 font-weight-bold"},[t._v(t._s(t._f("numeralFormat")(t.asset.for_sale_count,"0.0 a")))]),t._v(" "),a("p",{staticClass:"p-0"},[t._v("Existing")])])])])])]),t._v(" "),a("div",{staticClass:"col-12 col-lg-4 col-xl-3 margin-bottom-15"},[a("div",{staticClass:"asset-head__company-logo"},[a("c-img",{staticClass:"img-fluid",attrs:{src:"https://i.imgur.com/BngHC98.png"}})],1)]),t._v(" "),a("div",{staticClass:"col-12 col-lg-6 margin-top-15 margin-bottom-15"},[a("c-block",{staticClass:"h-100",attrs:{title:"Attributes",noGutter:!0,onlyContentBg:!0,bgGradient:!0}},[a("template",{slot:"additional-action"},[a("a",{staticClass:"font-weight-bold text-uppercase text-white",attrs:{href:"#3"}},[t._v("\n                                    Game View\n                                ")]),t._v(" "),a("a",{staticClass:"font-weight-bold text-uppercase text-white ml-4",attrs:{href:"#3"}},[t._v("\n                                    Chart\n                                ")])]),t._v(" "),a("div",{staticClass:"metadata__table padding-bottom-10"},t._l(t.asset.metadata,function(s,i){return a("div",{key:i,staticClass:"item-row"},[a("div",{staticClass:"item-label"},[a("i",{staticClass:"fas fa-file"}),t._v("\n                                    "+t._s(s.label)+"\n                                ")]),t._v(" "),a("div",{staticClass:"item-description"},[t._v("\n                                    "+t._s(s.text)+"\n                                ")])])}))],2)],1),t._v(" "),a("div",{staticClass:"col-12 col-lg-6 margin-top-15 margin-bottom-15"},[a("c-block",{staticClass:"h-100",attrs:{title:"Sales",noGutter:!0,onlyContentBg:!0,bgGradient:!0}},[a("template",{slot:"additional-action"},[a("a",{staticClass:"font-weight-bold text-uppercase text-white",attrs:{href:"#3"}},[t._v("\n                                    History\n                                ")]),t._v(" "),a("a",{staticClass:"font-weight-bold text-uppercase text-white ml-4",attrs:{href:"#3"}},[t._v("\n                                    Chart\n                                ")])]),t._v(" "),t.sales?a("div"):a("p",[t._v("\n                            Nothing to show for now\n                        ")])],2)],1),t._v(" "),a("div",{staticClass:"col-12 margin-top-15 margin-bottom-15"},[a("c-block",{staticClass:"padding-bottom-0",attrs:{title:"Offers",noGutter:!0,onlyContentBg:!0,bgGradient:!0}},[a("template",{slot:"additional-action"},[a("c-heading-bar-fields",{attrs:{name:"Rarity",icon:"fas fa-trophy"},on:{click_up:function(t){},click_down:function(t){}}}),t._v(" "),a("c-heading-bar-fields",{attrs:{name:"Value",icon:"fas fa-dollar"},on:{click_up:function(t){},click_down:function(t){}}})],1),t._v(" "),a("div",{staticClass:"offers__list"},t._l(t.offers,function(s,i){return a("div",{key:i,staticClass:"list-item"},[a("div",{staticClass:"item-name-img"},[a("c-img",{attrs:{src:s.image}}),t._v(" "),a("h4",[t._v(t._s(s.name))])],1),t._v(" "),a("div",{staticClass:"item-company text-center"},[t._v("\n                                    "+t._s(s.company_name)+"\n                                ")]),t._v(" "),a("div",{staticClass:"item-info"},[a("span",{staticClass:"user_name"},[t._v("\n                                        "+t._s(s.user_name)+"\n                                    ")]),t._v(" "),a("span",{staticClass:"price"},[t._v("\n                                        $ "+t._s(s.price.current)+"\n                                    ")]),t._v(" "),a("a",{staticClass:"btn btn-success float-right",attrs:{href:"#3"}},[a("i",{staticClass:"fas fa-cart-plus"}),t._v(" Proceed to Purchase\n                                    ")])])])})),t._v(" "),a("c-pagination",{attrs:{pages:5,showBg:!1}},[a("template",{staticClass:"text-left",slot:"left-content"},[a("strong",[t._v("245345")]),t._v(" Available on the market\n                            ")]),t._v(" "),a("template",{staticClass:"text-right",slot:"right-content"},[a("strong",[t._v("319")]),t._v(" On the list\n                                "),a("a",{staticClass:"text-white mx-2",attrs:{href:"#3"}},[a("i",{staticClass:"fas fa-reply"})]),t._v(" "),a("a",{staticClass:"text-white",attrs:{href:"#3"}},[a("i",{staticClass:"fas fa-bookmark"})])])],2)],2)],1),t._v(" "),a("div",{staticClass:"col-12 margin-top-15 margin-bottom-15"},[a("c-block",{staticClass:"padding-bottom-0",attrs:{title:"Yours Inventory",noGutter:!0,onlyContentBg:!0,bgGradient:!0}},[a("div",{staticClass:"my-assets__list"},t._l(t.inventory,function(s,i){return a("div",{key:i,staticClass:"item"},[a("c-button",{attrs:{status:"plain"},on:{click:function(a){t.openPopup(s)}}},[a("i",{staticClass:"fas fa-external-link-alt"})]),t._v(" "),a("div",{staticClass:"item_thumb"},[a("c-img",{attrs:{src:s.image}})],1),t._v(" "),a("div",{staticClass:"item_info"},[a("h5",[t._v(t._s(s.name))]),t._v(" "),a("span",{staticClass:"price"},[t._v("\n                                        $ "+t._s(s.price.current)+"\n                                    ")]),t._v(" "),a("div",{staticClass:"switcher"},[a("c-switch",{attrs:{label:"Accept offers",checked:s.accept_offers,size:"sm",label_position:"left"}})],1)])],1)})),t._v(" "),a("c-pagination",{attrs:{pages:5,showBg:!1}})],1)],1),t._v(" "),a("div",{staticClass:"col-12 margin-top-15 margin-bottom-15"},[a("c-block",{staticClass:"pb-0",attrs:{title:"Collections Containing this Item",noGutter:!0,onlyContentBg:!0,bgGradient:!0}},[a("div",{staticClass:"collections-container"},t._l(t.collections,function(s,i){return t.collections?a("div",{key:i,staticClass:"item"},[a("c-collection-item",{attrs:{item:s}})],1):a("p",[t._v("\n                                Nothing to show for now\n                            ")])})),t._v(" "),t.collections?a("c-pagination",{attrs:{pages:5,showBg:!1}}):t._e()],1)],1)]):t._e()])]),t._v(" "),a("c-popup",{attrs:{activated:t.show_popup,width:550},on:{close:t.closePopup}},[a("c-asset-popup",{attrs:{slot:"custom_content",asset:t.tmpItem},slot:"custom_content"})],1)],1)},[],!1,null,"5bfdc4b6",null);s.default=e.exports},79:function(t,s){}}]);