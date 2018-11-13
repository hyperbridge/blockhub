(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{137:function(e,t){},138:function(e,t){},1399:function(e,t,n){"use strict";n.r(t);var i=n(2),s=n.n(i),a=n(10),r=n.n(a),c=n(49),o=n.n(c),l={components:{"c-block":function(e){return Promise.resolve().then(function(){var t=[n(1364)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-range-slider":function(e){return n.e(170).then(function(){var t=[n(1261)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-asset-preview":function(e){return n.e(164).then(function(){var t=[n(1270)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-asset-preview-price":function(e){return n.e(168).then(function(){var t=[n(1300)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-asset-grid":function(e){return n.e(165).then(function(){var t=[n(1313)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-content-navigation":function(e){return n.e(7).then(function(){var t=[n(1256)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-tab":function(e){return n.e(161).then(function(){var t=[n(1312)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-tabs":function(e){return n.e(162).then(function(){var t=[n(1318)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-datepicker":function(e){return n.e(183).then(function(){var t=[n(1474)];e.apply(null,t)}.bind(this)).catch(n.oe)}},data:function(){return{newSniper:{asset:null,priceMin:0,priceMax:0,expDate:""},edited:{},activeStep:1,errors:[]}},methods:{createSniper:function(e){var t=this,n=this.activeStep,i=this.newSniper,a=i.asset,c=o()(i,["asset"]);this.errors=[];var l=function(e){return t.errors.push(e)};if(1===n)null==a?l("Select an asset first."):this.activeStep=2;else if(e&&e<n)this.activeStep=e;else if(r()(c).some(function(e){return!e})){var p=c.priceMin,u=c.priceMax,d=c.expDate;p||l("Invalid minimum price range."),u||l("Invalid maximum price range."),d||l("Invalid expiration date.")}else this.$store.dispatch("assets/create",{prop:"snipers",data:s()({},this.newSniper)}),this.$snotify.success("Auction sniper has been successfully created","Created"),this.cancelCreation()},setEdited:function(e){this.edited=s()({},e)},updateSniper:function(e){var t=this.edited;this.$store.commit("assets/update",{id:e,prop:"snipers",data:s()({},t,{asset:t.asset.id})}),this.edited={}},deleteSniper:function(e){this.$store.commit("assets/delete",{id:e,prop:"snipers"})},cancelCreation:function(){this.activeStep=1,this.newSniper={asset:null,priceMin:0,priceMax:0,expDate:""},this.errors=[]},getPrice:function(e,t){return e&&Math.round(2*e.price[t])}},computed:{snipers:function(){return this.$store.getters["assets/snipers"]},assets:function(){return this.$store.getters["assets/assets"]},assetsArray:function(){return this.$store.getters["assets/assetsArray"]}}},p=(n(701),n(700),n(0)),u=Object(p.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("c-block",{attrs:{title:"Create new auction sniper",noGutter:"",onlyContentBg:"",bgGradient:""}},[e.errors.length?[n("p",[e._v("Correct following error(s):")]),e._v(" "),n("ul",e._l(e.errors,function(t,i){return n("li",{key:i},[e._v("\n                    "+e._s(t)+"\n                ")])}))]:e._e(),e._v(" "),n("c-tabs",{staticClass:"margin-bottom-100",attrs:{tabText:"Step",setActiveTab:e.activeStep},on:{click:e.createSniper}},[n("c-tab",{attrs:{tab_id:1}},[n("p",[e._v("Select asset that you are going to buy")]),e._v(" "),n("c-content-navigation",{attrs:{items:e.assetsArray,setLimits:10},scopedSlots:e._u([{key:"default",fn:function(t){return n("c-asset-grid",{attrs:{assets:t.items},on:{click:function(t){e.newSniper.asset=t.id,e.activeStep=2}}})}}])})],1),e._v(" "),n("c-tab",{attrs:{tab_id:2}},[n("h4",{staticClass:"text-align-center"},[e._v("Selected asset:")]),e._v(" "),n("c-asset-preview-price",{staticClass:"margin-auto margin-bottom-30 half-width",attrs:{asset:e.assets[e.newSniper.asset]}}),e._v(" "),n("p",[e._v("Select minimum price")]),e._v(" "),n("div",{staticClass:"flex-center-between margin-bottom-20"},[n("c-range-slider",{staticClass:"half-width margin-right-20",attrs:{max:e.getPrice(e.assets[e.newSniper.asset],"min")},model:{value:e.newSniper.priceMin,callback:function(t){e.$set(e.newSniper,"priceMin",t)},expression:"newSniper.priceMin"}}),e._v(" "),n("c-input",{staticClass:"half-width",model:{value:e.newSniper.priceMin,callback:function(t){e.$set(e.newSniper,"priceMin",t)},expression:"newSniper.priceMin"}})],1),e._v(" "),n("p",[e._v("Select maximum price")]),e._v(" "),n("div",{staticClass:"flex-center-between margin-bottom-20"},[n("c-range-slider",{staticClass:"half-width margin-right-20",attrs:{max:e.getPrice(e.assets[e.newSniper.asset],"max")},model:{value:e.newSniper.priceMax,callback:function(t){e.$set(e.newSniper,"priceMax",t)},expression:"newSniper.priceMax"}}),e._v(" "),n("c-input",{staticClass:"half-width",model:{value:e.newSniper.priceMax,callback:function(t){e.$set(e.newSniper,"priceMax",t)},expression:"newSniper.priceMax"}})],1),e._v(" "),n("p",[e._v("Select expiration date")]),e._v(" "),n("div",{staticClass:"flex-center margin-bottom-40"},[n("c-datepicker",{attrs:{placeholder:"Expiration date","input-class":"form-control form-calendar__text","calendar-class":"form-calendar"},model:{value:e.newSniper.expDate,callback:function(t){e.$set(e.newSniper,"expDate",t)},expression:"newSniper.expDate"}})],1),e._v(" "),n("div",{staticClass:"flex-center-between"},[n("c-button",{attrs:{status:"warning",icon:"trash-alt",size:"lg"},on:{click:function(t){e.cancelCreation()}}},[e._v("\n                        Cancel\n                    ")]),e._v(" "),n("c-button",{attrs:{status:"success",size:"lg"},on:{click:function(t){e.createSniper()}}},[e._v("\n                        Create\n                    ")])],1)],1)],1)],2),e._v(" "),n("c-block",{attrs:{title:"Created auction snipers",noGutter:"",onlyContentBg:"",bgGradient:""}},[n("table",{staticClass:"snipers-table"},[n("thead",[n("th",[e._v("ID")]),e._v(" "),n("th",[e._v("Asset")]),e._v(" "),n("th",[e._v("Minimum price")]),e._v(" "),n("th",[e._v("Maximum price")]),e._v(" "),n("th",[e._v("Expiration date")]),e._v(" "),n("th",[e._v("Edit")])]),e._v(" "),n("tbody",e._l(e.snipers,function(t,i){return n("tr",{key:i},[e.edited.id!=t.id?[n("td",[e._v(e._s(i))]),e._v(" "),n("td",[n("c-asset-preview",{attrs:{asset:t.asset,size:"sm"}})],1),e._v(" "),n("td",[e._v(e._s(t.priceMin)+" $")]),e._v(" "),n("td",[e._v(e._s(t.priceMax)+" $")]),e._v(" "),n("td",[e._v(e._s(e._f("timeAgo")(t.expDate)))]),e._v(" "),n("td",[n("c-button",{attrs:{status:"info",icon:"edit"},on:{click:function(n){e.setEdited(t)}}},[e._v("Edit")])],1)]:[n("td",[e._v(e._s(i))]),e._v(" "),n("td",[n("c-asset-preview",{attrs:{asset:t.asset,size:"sm"}})],1),e._v(" "),n("td",[n("c-input",{staticClass:"edit-input",model:{value:e.edited.priceMin,callback:function(t){e.$set(e.edited,"priceMin",t)},expression:"edited.priceMin"}})],1),e._v(" "),n("td",[n("c-input",{staticClass:"edit-input",model:{value:e.edited.priceMax,callback:function(t){e.$set(e.edited,"priceMax",t)},expression:"edited.priceMax"}})],1),e._v(" "),n("td",[n("c-datepicker",{attrs:{"input-class":"form-control form-calendar__text edit-input","calendar-class":"form-calendar"},model:{value:e.edited.expDate,callback:function(t){e.$set(e.edited,"expDate",t)},expression:"edited.expDate"}})],1),e._v(" "),n("td",[n("c-button",{attrs:{status:"warning",icon_hide:""},on:{click:function(t){e.edited={}}}},[e._v("Cancel")]),e._v(" "),n("c-button",{attrs:{status:"danger"},on:{click:function(t){e.deleteSniper(i)}}},[e._v("Delete")]),e._v(" "),n("c-button",{attrs:{status:"success"},on:{click:function(t){e.updateSniper(i)}}},[e._v("Save")])],1)]],2)}))])])],1)},[],!1,null,"27331417",null);t.default=u.exports},700:function(e,t,n){"use strict";var i=n(137);n.n(i).a},701:function(e,t,n){"use strict";var i=n(138);n.n(i).a}}]);