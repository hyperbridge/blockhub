(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{1049:function(t,i,s){"use strict";var n=s(302);s.n(n).a},1689:function(t,i,s){"use strict";s.r(i);var n={props:{id:Number,price:[Number,String],sold:[Number,String],left:[Number,String],tag:String,title:String,inList:{type:Boolean,default:!1}},methods:{purchase:function(){this.$store.commit("application/activateModal","project-participate")}}},a=(s(1049),s(0)),e=Object(a.a)(n,function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"participation-tier",class:{"in-the-list":t.inList}},[s("div",{staticClass:"participation-tier__stat"},[s("div",{staticClass:"font-weight-bold h5 p-0 m-0"},[t._v("\n            "+t._s(t._f("convertCurrency")(t.price))+"\n        ")]),t._v(" "),s("div",{staticClass:"p-0 my-1"},[t._v("\n            "+t._s(t.sold)+" Sold\n        ")]),t._v(" "),s("div",{staticClass:"font-weight-bold p-0 m-0"},[t._v("\n            "+t._s(t.left)+" Left\n        ")])]),t._v(" "),s("div",{staticClass:"participation-tier__info"},[s("div",{staticClass:"small text-uppercase"},[t._v("\n            "+t._s(t.tag)+"\n        ")]),t._v(" "),s("div",{staticClass:"h5 font-weight-bold mb-1-0 p-0"},[t._v("\n            "+t._s(t.title)+"\n        ")]),t._v(" "),s("c-button",{attrs:{status:"success",icon:"hand-holding-usd"},on:{click:t.purchase}},[t._v("\n            Participate\n        ")])],1)])},[],!1,null,"4dea1b9c",null);i.default=e.exports},302:function(t,i){}}]);