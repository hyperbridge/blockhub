(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1371:function(t,e,a){"use strict";a.r(e);var s=a(5),r=a.n(s),o=a(8),c=a.n(o),i=a(21),n=a.n(i),l={props:{id:[String,Number]},components:{"c-business-layout":function(t){return a.e(189).then(function(){var e=[a(1232)];t.apply(null,e)}.bind(this)).catch(a.oe)}},data:function(){return{loadingState:!0,creating:"new"===this.id,successfulCreationMessage:!1}},computed:{marketplace:function(){return this.$store.state.marketplace},product:function(){return"new"===this.id?this.marketplace.default_product:this.marketplace.products[this.id]}},methods:{transferOwnership:function(){var t=this,e={code:function(t,e,a,s,o,i,l,u,d,p,v){var m,f=this,_=v.product,h=v.profile;return new n.a((m=c()(r.a.mark(function t(e,a){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o.api.ethereum.state.contracts.MarketplaceStorage.deployed,t.next=3,marketplaceStorage.setDeveloperOwnsProduct(_.developer_id,_.id,!0,{from:h.public_address});case 3:return t.next=5,marketplaceStorage.pushDeveloperOwnedProduct(_.developer_id,_.id,{from:h.public_address});case 5:return t.next=7,marketplaceStorage.setProductDeveloper(_.id,_.developer,{from:h.public_address});case 7:return t.next=9,marketplaceStorage.setProductDeveloperId(_.id,_.developer_id,{from:h.public_address});case 9:e(_);case 10:case"end":return t.stop()}},t,f)})),function(t,e){return m.apply(this,arguments)}))}.toString(),params:{profile:this.$store.state.application.account.current_identity,product:this.product}};BlockHub.Bridge.sendCommand("eval",e).then(function(e){e.id&&(t.successfulCreationMessage="Product ownership has been changed")})},updateStatus:function(){var t=this,e={code:function(t,e,a,s,o,i,l,u,d,p,v){var m,f=this,_=v.product,h=v.profile;return new n.a((m=c()(r.a.mark(function t(e,a){var s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=o.api.ethereum.state.contracts.MarketplaceStorage.deployed,t.next=3,s.setProductStatus(productId,Number(_.status),{from:h.public_address});case 3:e(_);case 4:case"end":return t.stop()}},t,f)})),function(t,e){return m.apply(this,arguments)}))}.toString(),params:{profile:this.$store.state.application.account.current_identity,product:this.product}};BlockHub.Bridge.sendCommand("eval",e).then(function(e){e.id&&(t.successfulCreationMessage="Product status has been updated")})},create:function(){var t=this,e={code:function(t,e,a,s,o,i,l,u,d,p,v){var m,f=this,_=v.product,h=v.profile;return new n.a((m=c()(r.a.mark(function t(s,c){var i,n,l;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=o.api.ethereum.state.contracts.ProductRegistration.deployed,n=!1,l=i.ProductCreated().watch(function(t,r){if(!n){if(n=!0,t)return console.warn("[BlockHub][Marketplace] Error",t),c(t);_.$loki=void 0,_.id=r.args.productId.toNumber();try{e.marketplace.products.insert(_),console.log("after",_.id)}catch(t){try{e.marketplace.products.update(_)}catch(t){c(t)}}e.save(),a.sendCommand("updateState",{module:"marketplace",state:{products:e.marketplace.products.data}}),console.log("Product created"),s(_)}}),t.next=5,i.createProduct(_.name,_.type,_.content,{from:h.public_address});case 5:l.stopWatching(function(){});case 6:case"end":return t.stop()}},t,f)})),function(t,e){return m.apply(this,arguments)}))}.toString(),params:{profile:this.$store.state.application.account.current_identity,product:this.product}};BlockHub.Bridge.sendCommand("eval",e).then(function(e){e.id&&(t.product.id=e.id,t.successfulCreationMessage="Congratulations, your product has been created!",t.marketplace.products[t.product.id]=t.product,t.$router.push("/business/product/"+t.product.id))})},save:function(){var t=this,e={code:function(t,e,a,s,o,i,l,u,d,p,v){var m,f=this,_=v.product,h=v.profile;return new n.a((m=c()(r.a.mark(function t(e,a){var s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=o.api.ethereum.state.contracts.ProductRegistration.deployed,t.next=3,s.editProductInfo(_.id,_.name,_.type,_.content,{from:h.public_address});case 3:e(_);case 4:case"end":return t.stop()}},t,f)})),function(t,e){return m.apply(this,arguments)}))}.toString(),params:{profile:this.$store.state.application.account.current_identity,product:this.product}};BlockHub.Bridge.sendCommand("eval",e).then(function(e){e.id&&(t.successfulCreationMessage="Product has been saved")})}},mounted:function(){var t=this;this.$nextTick(function(){t.loadingState=!1,document.getElementById("startup-loader").style.display="none"})}},u=(a(734),a(0)),d=Object(u.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("c-business-layout",[a("div",[a("div",{staticClass:"page-heading"},[a("div",{staticClass:"page-heading__container",staticStyle:{float:"none"}},[a("h1",{staticClass:"title",staticStyle:{float:"left'"}},[t._v("Product Creation")]),t._v(" "),t.product.id?a("div",{staticClass:"float-right mb-3"},[a("a",{staticClass:"btn btn-primary",attrs:{href:"#/product/"+t.product.id}},[t._v("PREVIEW")])]):t._e()]),t._v(" "),a("nav",{attrs:{"aria-label":"breadcrumb",role:"navigation"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#/business"}},[t._v("Dashboard")])]),t._v(" "),a("li",{staticClass:"breadcrumb-item active"},[t._v("Product")])])])]),t._v(" "),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[t.successfulCreationMessage?a("div",{staticClass:"col-md-12"},[a("p",{staticClass:"alert alert-info"},[t._v(t._s(t.successfulCreationMessage))]),t._v(" "),a("br"),a("br")]):t._e(),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"switch switch-sm col-sm-3"},[a("label",[t._v("Change Status")])]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.product.status,expression:"product.status"}],staticClass:"form-control",attrs:{name:"change_status"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.product,"status",e.target.multiple?a:a[0])},t.updateStatus]}},[a("option",{attrs:{value:"",selected:""}},[t._v("Choose Status")]),t._v(" "),a("option",{attrs:{value:"0"}},[t._v("Inactive")]),t._v(" "),a("option",{attrs:{value:"1"}},[t._v("Draft")]),t._v(" "),a("option",{attrs:{value:"2"}},[t._v("Pending")]),t._v(" "),a("option",{attrs:{value:"3"}},[t._v("Published")]),t._v(" "),a("option",{attrs:{value:"4"}},[t._v("Rejected")])])])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"switch switch-sm col-sm-3"},[a("label",[t._v("Title")])]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.name,expression:"product.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:t.product.name},on:{input:function(e){e.target.composing||t.$set(t.product,"name",e.target.value)}}}),t._v(" "),a("span",{staticClass:"form-text"})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"switch switch-sm col-sm-3"},[a("label",[t._v("Type")])]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.type,expression:"product.type"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:t.product.type},on:{input:function(e){e.target.composing||t.$set(t.product,"type",e.target.value)}}}),t._v(" "),a("span",{staticClass:"form-text"})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"switch switch-sm col-sm-3"},[a("label",[t._v("Description")])]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.description,expression:"product.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:t.product.description},on:{input:function(e){e.target.composing||t.$set(t.product,"description",e.target.value)}}}),t._v(" "),a("span",{staticClass:"form-text"})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"switch switch-sm col-sm-3"},[a("label",[t._v("Content")])]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.product.content,expression:"product.content"}],staticClass:"form-control",domProps:{value:t.product.content},on:{input:function(e){e.target.composing||t.$set(t.product,"content",e.target.value)}}}),t._v(" "),a("span",{staticClass:"form-text"})])])]),t._v(" "),a("div",{staticClass:"col-md-6"})]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[t._v("\n                    Ownership\n                ")]),t._v(" "),a("div",{staticClass:"col-6"},[t._v("\n                    Owned by address: "+t._s(t.product.developer)),a("br"),t._v("\n                    Created by Developer ID: "+t._s(t.product.developerId)+"\n                ")]),t._v(" "),a("div",{staticClass:"col-12"},[a("h3",[t._v("Transfer Ownership")]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"switch switch-sm col-sm-3"},[a("label",[t._v("Developer Address")])]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.developer,expression:"product.developer"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:t.product.developer},on:{input:function(e){e.target.composing||t.$set(t.product,"developer",e.target.value)}}}),t._v(" "),a("span",{staticClass:"form-text"})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"switch switch-sm col-sm-3"},[a("label",[t._v("Developer ID")])]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.developer_id,expression:"product.developer_id"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:t.product.developer_id},on:{input:function(e){e.target.composing||t.$set(t.product,"developer_id",e.target.value)}}}),t._v(" "),a("span",{staticClass:"form-text"})])]),t._v(" "),a("c-button",{on:{click:t.transferOwnership}},[t._v("Transfer")])],1)]),t._v(" "),a("div",{staticClass:"row"},[t.product.id?a("div",{staticClass:"col-2 offset-10"},[a("a",{staticClass:"btn btn-primary",attrs:{href:"#",target:"_blank"},on:{click:function(e){return e.preventDefault(),t.save(e)}}},[t._v("SAVE")])]):t._e(),t._v(" "),t.product.id?t._e():a("div",{staticClass:"col-2 offset-10"},[a("a",{staticClass:"btn btn-primary",attrs:{href:"#",target:"_blank"},on:{click:function(e){return e.preventDefault(),t.create(e)}}},[t._v("CREATE")])])])])])])},[],!1,null,"5469a24a",null);e.default=d.exports},168:function(t,e){},734:function(t,e,a){"use strict";var s=a(168);a.n(s).a}}]);