(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1532:function(t,e,n){"use strict";n.r(e);var i={data:function(){return{val:"m",timeout:null,add:0}},mixins:[n(29).b],components:{"c-test":function(t){return n.e(267).then(function(){var e=[n(1398)];t.apply(null,e)}.bind(this)).catch(n.oe)}},computed:{account:function(){return this.$store.getters["application/account"]},identity:function(){return this.account.active_identity},tradeURL:function(){var t=this.account.tradeURLId,e=this.identity.id;return window.location.origin+"#/tradeoffer/new/?partner="+e+"&id="+t},assets:function(){return this.$store.state.assets.assets}},methods:{storeTest:function(){this.$store.dispatch("create",{module:"assets",target:"assets",data:{id:30,name:"New asset"}})},copyTradeURL:function(){var t=this;navigator.clipboard.writeText(this.tradeURL).then(function(){return t.$snotify.info("TradeURL has been copied")}).catch(function(e){return t.$snotify.warning("TradeURL could not be copied")})},updateVal:function(t){console.log(t)}}},a=(n(790),n(0)),o=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("section",{staticClass:"trade-settings__url"},[n("h3",[t._v("Your trade URL")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")]),t._v(" "),n("div",{staticClass:"trade-settings__url-form"},[n("c-icon",{attrs:{name:"copy"}}),t._v(" "),n("c-input",{staticClass:"trade-settings__url-input",attrs:{value:t.tradeURL,readonly:""},on:{click:function(e){t.copyTradeURL()}}})],1),t._v(" "),n("c-button",{attrs:{status:"info",iconHide:""},on:{click:function(e){t.$store.dispatch("application/createTradeUrl")}}},[t._v("\n            Generate new trade URL\n        ")])],1)])},[],!1,null,"77211bd3",null);e.default=o.exports},161:function(t,e){},790:function(t,e,n){"use strict";var i=n(161);n.n(i).a}}]);