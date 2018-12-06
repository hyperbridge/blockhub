(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1620:function(t,e,s){"use strict";s.r(e);var a=s(6),r=s.n(a),o=s(8),n=s.n(o),c=s(26),i=s.n(c),l={props:{id:[String,Number]},components:{"c-business-layout":function(t){return s.e(185).then(function(){var e=[s(1472)];t.apply(null,e)}.bind(this)).catch(s.oe)}},data:function(){return{loadingState:!0,creating:"new"===this.id,successfulCreationMessage:!1}},computed:{marketplace:function(){return this.$store.state.marketplace},product:function(){var t=this;return"new"===this.id?this.marketplace.defaultProduct:this.marketplace.products.find(function(e){return e.id==t.id})}},methods:{transferOwnership:function(){var t=this,e={code:function(t,e,s,a,o,c,l,u,d,p,v){var m,f=this,h=v.product,_=v.profile;return new i.a((m=n()(r.a.mark(function t(e,s){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o.api.ethereum.state.contracts.MarketplaceStorage.deployed,t.next=3,marketplaceStorage.setDeveloperOwnsProduct(h.developerId,h.id,!0,{from:_.address});case 3:return t.next=5,marketplaceStorage.pushDeveloperOwnedProduct(h.developerId,h.id,{from:_.address});case 5:return t.next=7,marketplaceStorage.setProductDeveloper(h.id,h.developer,{from:_.address});case 7:return t.next=9,marketplaceStorage.setProductDeveloperId(h.id,h.developerId,{from:_.address});case 9:e(h);case 10:case"end":return t.stop()}},t,f)})),function(t,e){return m.apply(this,arguments)}))}.toString(),params:{profile:this.$store.state.application.activeProfile,product:this.product}};BlockHub.Bridge.sendCommand("eval",e).then(function(e){e.id&&(t.successfulCreationMessage="Product ownership has been changed")})},updateStatus:function(){var t=this,e={code:function(t,e,s,a,o,c,l,u,d,p,v){var m,f=this,h=v.product,_=v.profile;return new i.a((m=n()(r.a.mark(function t(e,s){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=o.api.ethereum.state.contracts.MarketplaceStorage.deployed,t.next=3,a.setProductStatus(productId,Number(h.status),{from:_.address});case 3:e(h);case 4:case"end":return t.stop()}},t,f)})),function(t,e){return m.apply(this,arguments)}))}.toString(),params:{profile:this.$store.state.application.activeProfile,product:this.product}};BlockHub.Bridge.sendCommand("eval",e).then(function(e){e.id&&(t.successfulCreationMessage="Product status has been updated")})},create:function(){var t=this,e={code:function(t,e,s,a,o,c,l,u,d,p,v){var m,f=this,h=v.product,_=v.profile;return new i.a((m=n()(r.a.mark(function t(a,n){var c,i,l;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=o.api.ethereum.state.contracts.ProductRegistration.deployed,i=!1,l=c.ProductCreated().watch(function(t,r){if(!i){if(i=!0,t)return console.warn("[BlockHub][Marketplace] Error",t),n(t);h.$loki=void 0,h.id=r.args.productId.toNumber();try{e.marketplace.products.insert(h),console.log("after",h.id)}catch(t){try{e.marketplace.products.update(h)}catch(t){n(t)}}e.save(),s.sendCommand("updateState",{module:"marketplace",state:{products:e.marketplace.products.data}}),console.log("Product created"),a(h)}}),t.next=5,c.createProduct(h.name,h.type,h.content,{from:_.address});case 5:l.stopWatching(function(){});case 6:case"end":return t.stop()}},t,f)})),function(t,e){return m.apply(this,arguments)}))}.toString(),params:{profile:this.$store.state.application.activeProfile,product:this.product}};BlockHub.Bridge.sendCommand("eval",e).then(function(e){e.id&&(t.product.id=e.id,t.successfulCreationMessage="Congratulations, your product has been created!",t.marketplace.products[t.product.id]=t.product,t.$router.push("/business/product/"+t.product.id))})},save:function(){var t=this,e={code:function(t,e,s,a,o,c,l,u,d,p,v){var m,f=this,h=v.product,_=v.profile;return new i.a((m=n()(r.a.mark(function t(e,s){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=o.api.ethereum.state.contracts.ProductRegistration.deployed,t.next=3,a.editProductInfo(h.id,h.name,h.type,h.content,{from:_.address});case 3:e(h);case 4:case"end":return t.stop()}},t,f)})),function(t,e){return m.apply(this,arguments)}))}.toString(),params:{profile:this.$store.state.application.activeProfile,product:this.product}};BlockHub.Bridge.sendCommand("eval",e).then(function(e){e.id&&(t.successfulCreationMessage="Product has been saved")})}},mounted:function(){var t=this;this.$nextTick(function(){t.loadingState=!1,document.getElementById("startup-loader").style.display="none"})}},u=(s(890),s(0)),d=Object(u.a)(l,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[t.successfulCreationMessage?s("div",{staticClass:"col-md-12"},[s("p",{staticClass:"alert alert-info"},[t._v(t._s(t.successfulCreationMessage))]),t._v(" "),s("br"),s("br")]):t._e(),t._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group row align-items-center"},[t._m(0),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.product.status,expression:"product.status"}],staticClass:"form-control",attrs:{name:"change_status"},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.product,"status",e.target.multiple?s:s[0])},t.updateStatus]}},[s("option",{attrs:{value:"",selected:""}},[t._v("Choose Status")]),t._v(" "),s("option",{attrs:{value:"0"}},[t._v("Inactive")]),t._v(" "),s("option",{attrs:{value:"1"}},[t._v("Draft")]),t._v(" "),s("option",{attrs:{value:"2"}},[t._v("Pending")]),t._v(" "),s("option",{attrs:{value:"3"}},[t._v("Published")]),t._v(" "),s("option",{attrs:{value:"4"}},[t._v("Rejected")])])])]),t._v(" "),s("div",{staticClass:"form-group row align-items-center"},[t._m(1),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.product.name,expression:"product.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:t.product.name},on:{input:function(e){e.target.composing||t.$set(t.product,"name",e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-text"})])]),t._v(" "),s("div",{staticClass:"form-group row align-items-center"},[t._m(2),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.product.type,expression:"product.type"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:t.product.type},on:{input:function(e){e.target.composing||t.$set(t.product,"type",e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-text"})])]),t._v(" "),s("div",{staticClass:"form-group row align-items-center"},[t._m(3),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.product.description,expression:"product.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:t.product.description},on:{input:function(e){e.target.composing||t.$set(t.product,"description",e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-text"})])]),t._v(" "),s("div",{staticClass:"form-group row align-items-center"},[t._m(4),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.product.content,expression:"product.content"}],staticClass:"form-control",domProps:{value:t.product.content},on:{input:function(e){e.target.composing||t.$set(t.product,"content",e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-text"})])])]),t._v(" "),s("div",{staticClass:"col-md-6"}),t._v(" "),s("div",{staticClass:"col-12"},[t.product.id?s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[t._v("\n                    Ownership\n                ")]),t._v(" "),s("div",{staticClass:"col-6"},[t._v("\n                    Owned by address: "+t._s(t.product.developer)),s("br"),t._v("\n                    Created by Developer ID: "+t._s(t.product.developerId)+"\n                ")]),t._v(" "),s("div",{staticClass:"col-12"},[s("h3",[t._v("Transfer Ownership")]),t._v(" "),s("div",{staticClass:"form-group row align-items-center"},[t._m(5),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.product.developer,expression:"product.developer"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:t.product.developer},on:{input:function(e){e.target.composing||t.$set(t.product,"developer",e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-text"})])]),t._v(" "),s("div",{staticClass:"form-group row align-items-center"},[t._m(6),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.product.developerId,expression:"product.developerId"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:t.product.developerId},on:{input:function(e){e.target.composing||t.$set(t.product,"developerId",e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-text"})])]),t._v(" "),s("c-button",{on:{click:t.transferOwnership}},[t._v("Transfer")])],1)]):t._e(),t._v(" "),s("div",{staticClass:"row"},[t.product.id?s("div",{staticClass:"col-12 text-right"},[s("c-button",{attrs:{status:"success",icon:"save"},on:{click:function(e){return e.preventDefault(),t.save(e)}}},[t._v("\n                        Save\n                    ")])],1):t._e(),t._v(" "),t.product.id?t._e():s("div",{staticClass:"col-12 text-right"},[s("c-button",{attrs:{status:"success",icon:"plus"},on:{click:function(e){return e.preventDefault(),t.create(e)}}},[t._v("\n                        Create\n                    ")])],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"col-sm-3"},[e("label",[this._v("Change Status")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"col-sm-3"},[e("label",[this._v("Title")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"col-sm-3"},[e("label",[this._v("Type")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"col-sm-3"},[e("label",[this._v("Description")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"col-sm-3"},[e("label",[this._v("Content")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"col-sm-3"},[e("label",[this._v("Developer Address")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"col-sm-3"},[e("label",[this._v("Developer ID")])])}],!1,null,"05da459a",null);e.default=d.exports},201:function(t,e){},890:function(t,e,s){"use strict";var a=s(201);s.n(a).a}}]);