(window.webpackJsonp=window.webpackJsonp||[]).push([[285,286],{1157:function(e,t,a){"use strict";a.r(t);var i={name:"contribute-form",props:{active:{type:Boolean,default:!1},value:"",defaultValue:Number,current:String},data:function(){return{activeForm:!1,error:!1,mutableValue:this.value}},created:function(){this.activeForm=this.active,this.defaultValue&&(this.mutableValue=this.defaultValue)},methods:{changeData:function(){this.$emit("input",this.$refs.input.value),Number(this.$refs.input.value)<Number(this.defaultValue)?this.error=!0:this.error=!1}},watch:{mutableValue:function(e){this.$emit("input",e),Number(this.$refs.input.value)<Number(this.defaultValue)?this.error=!0:this.error=!1}}},o=(a(913),a(7)),n=Object(o.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contribute-form",on:{mouseover:function(t){e.activeForm=!0},mouseleave:function(t){e.activeForm=!1}}},[a("div",{staticClass:"input-group mb-4",class:[{active:e.activeForm},{"has-error":e.error}]},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[e._v("\n                "+e._s(e.currency)+"\n            ")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.mutableValue,expression:"mutableValue"}],ref:"input",staticClass:"form-control",attrs:{type:"text",placeholder:"0.00"},domProps:{value:e.mutableValue},on:{input:function(t){t.target.composing||(e.mutableValue=t.target.value)}}})]),e._v(" "),a("c-button",{staticClass:"justify-content-center",attrs:{status:"success",iconHide:"",size:"xl"},on:{click:function(t){e.$emit("click")}}},[e._v("\n        Continue\n    ")])],1)},[],!1,null,"2df0656e",null);t.default=n.exports},1522:function(e,t,a){(e.exports=a(15)(!1)).push([e.i,'.pledge-item[data-v-8e9e596a]{padding:15px;border-radius:5px;position:relative;overflow:hidden;color:#fff;background:rgba(0,0,0,.13);margin-bottom:30px}.pledge-item h3[data-v-8e9e596a],.pledge-item h4[data-v-8e9e596a]{font-size:24px;text-transform:uppercase;color:#fff;padding:0;margin-bottom:25px}.pledge-item h4[data-v-8e9e596a]{font-size:16px;margin:5px 0}.pledge-item__text[data-v-8e9e596a]{font-size:14px;margin:15px 0}.pledge-item__includes[data-v-8e9e596a]{font-size:14px;margin:30px 0}.pledge-item__includes h6[data-v-8e9e596a]{font-size:14px;text-transform:uppercase;color:#fff;font-weight:700}.pledge-item__includes ul[data-v-8e9e596a]{padding:0}.pledge-item__includes ul li[data-v-8e9e596a]{display:block;width:100%;margin:10px 0;position:relative;padding-left:20px}.pledge-item__includes ul li[data-v-8e9e596a]:before{width:5px;height:5px;border-radius:100%;background:#fff;position:absolute;top:8px;left:5px;content:""}.pledge-item__info[data-v-8e9e596a]{display:flex;justify-content:space-between;text-align:left;flex-wrap:wrap;width:100%}.pledge-item__info .h6[data-v-8e9e596a]{font-size:14px;text-transform:uppercase;color:#fff;font-weight:700;display:block}.pledge-item__info div[data-v-8e9e596a]{width:48%}.pledge-form-toggle[data-v-8e9e596a]{position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(93,117,247,.95);z-index:20;display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:700;text-transform:uppercase;font-size:1.5rem;cursor:pointer}',""])},1523:function(e,t,a){"use strict";var i=a(911);a.n(i).a},2162:function(e,t,a){"use strict";a.r(t);var i=a(1157),o=a(0),n=a.n(o),r={name:"pledge",props:["pledge","currency"],components:{"c-contribute-form":i.default},data:function(){return{form:!1,showToggle:!1,toBePaid:""}},methods:{showFrom:function(){this.form=!0,this.showToggle=!1}},computed:{date:function(){return n()(this.pledge.deliveryDate).format("DD MMMM, YYYY")}}},s=(a(1523),a(7)),l=Object(s.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pledge-item",on:{mouseover:function(t){e.showToggle=!0},mouseleave:function(t){e.showToggle=!1}}},[a("transition",{attrs:{name:"fade"}},[e.showToggle&&!e.form?a("div",{staticClass:"pledge-form-toggle",staticStyle:{"animation-duration":"0.5s"},on:{click:e.showFrom}},[e._v("\n            Select this reward\n        ")]):e._e()]),e._v(" "),a("h3",[e._v("Pledge US "+e._s(e._f("convertCurrency")(e.pledge.minPrice))+" or more")]),e._v(" "),e.pledge.title?a("h4",[e._v(e._s(e.pledge.title))]):e._e(),e._v(" "),a("div",{staticClass:"pledge-item__text"},[e._v("\n        "+e._s(e.pledge.description)+"\n    ")]),e._v(" "),!e.form&&e.pledge.includes.length>0?a("div",{staticClass:"pledge-item__includes"},[a("h6",[e._v("Includes")]),e._v(" "),a("ul",e._l(e.pledge.includes,function(t,i){return a("li",{key:i},[e._v("\n                "+e._s(t.text)+"\n            ")])}))]):e._e(),e._v(" "),a("div",{staticClass:"pledge-item__info"},[e.pledge.deliveryDate?a("div",[a("span",{staticClass:"h6"},[e._v("Estimated delivery")]),e._v("\n            "+e._s(e.date)+"\n        ")]):e._e(),e._v(" "),e.pledge.shipsTo?a("div",[a("span",{staticClass:"h6"},[e._v("Ships to")]),e._v("\n            "+e._s(e.pledge.shipsTo)+"\n        ")]):e._e(),e._v(" "),e.pledge.backers?a("div",{staticClass:"w-100 mt-5"},[a("span",{staticClass:"h6"},[e._v("\n                "+e._s(e.pledge.backers)+" backers\n            ")])]):e._e()]),e._v(" "),e.form?a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"mt-5"},[a("div",{staticClass:"h6 font-weight-bold text-uppercase mb-3"},[e._v("\n                Pledge amount\n            ")]),e._v(" "),a("c-contribute-form",{attrs:{defaultValue:e.pledge.minPrice,currency:e.currency,active:!0},on:{click:function(t){e.$emit("click")}},model:{value:e.toBePaid,callback:function(t){e.toBePaid=t},expression:"toBePaid"}})],1)]):e._e()],1)},[],!1,null,"8e9e596a",null);t.default=l.exports},728:function(e,t,a){var i=a(912);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(14)("9b44cb46",i,!0,{})},911:function(e,t,a){var i=a(1522);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(14)("084868db",i,!0,{})},912:function(e,t,a){(e.exports=a(15)(!1)).push([e.i,".contribute-form[data-v-2df0656e]{display:flex;flex-direction:column}.input-group[data-v-2df0656e]{border-radius:5px;overflow:hidden;border:1px solid transparent}.input-group input[data-v-2df0656e]{background:rgba(0,0,0,.13);color:#fff;border-color:rgba(0,0,0,.4)}.input-group input[data-v-2df0656e]:active,.input-group input[data-v-2df0656e]:focus{outline:none;box-shadow:none;border-color:rgba(0,0,0,.4)}.input-group .input-group-text[data-v-2df0656e]{background:#1d1e30;border-color:rgba(0,0,0,.4);color:#fff}.input-group.active[data-v-2df0656e]{border-color:#5ea72b}.input-group.has-error[data-v-2df0656e]{border-color:#f75d5d}",""])},913:function(e,t,a){"use strict";var i=a(728);a.n(i).a}}]);