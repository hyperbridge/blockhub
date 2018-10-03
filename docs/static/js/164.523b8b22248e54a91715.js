(window.webpackJsonp=window.webpackJsonp||[]).push([[164,165],{213:function(t,e,s){"use strict";s.r(e);var i={name:"contribute-form",props:{active:{type:Boolean,default:!1},value:"",defaultValue:Number},data:function(){return{activeForm:!1,error:!1,mutableValue:this.value}},created:function(){this.activeForm=this.active,this.defaultValue&&(this.mutableValue=this.defaultValue)},methods:{changeData:function(){this.$emit("input",this.$refs.input.value),Number(this.$refs.input.value)<Number(this.defaultValue)?this.error=!0:this.error=!1}},watch:{mutableValue:function(t){this.$emit("input",t),Number(this.$refs.input.value)<Number(this.defaultValue)?this.error=!0:this.error=!1}}},a=(s(400),s(0)),n=Object(a.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contribute-form",on:{mouseover:function(e){t.activeForm=!0},mouseleave:function(e){t.activeForm=!1}}},[s("div",{staticClass:"input-group mb-4",class:[{active:t.activeForm},{"has-error":t.error}]},[t._m(0),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.mutableValue,expression:"mutableValue"}],ref:"input",staticClass:"form-control",attrs:{type:"text",placeholder:"0.00"},domProps:{value:t.mutableValue},on:{input:function(e){e.target.composing||(t.mutableValue=e.target.value)}}})]),t._v(" "),s("c-button",{staticClass:"justify-content-center",attrs:{status:"success",icon_hide:"",size:"xl"},on:{click:function(e){t.$emit("click")}}},[t._v("\n        Continue\n    ")])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("\n                $\n            ")])])}],!1,null,"87191008",null);e.default=n.exports},38:function(t,e){},400:function(t,e,s){"use strict";var i=s(38);s.n(i).a},427:function(t,e,s){"use strict";var i=s(65);s.n(i).a},65:function(t,e){},672:function(t,e,s){"use strict";s.r(e);var i=s(213),a=s(1),n=s.n(a),o={name:"",props:{price:Number,name:String,estimated_delivery:String,ships_to:String,backers:Number},components:{"c-contribute-form":i.default},data:function(){return{form:!1,showToggle:!1,toBePaid:""}},methods:{showFrom:function(){this.form=!0,this.showToggle=!1}},computed:{date:function(){return n()(this.estimated_delivery).format("DD MMMM, YYYY")}}},r=(s(427),s(0)),u=Object(r.a)(o,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pledge-item",on:{mouseover:function(e){t.showToggle=!0},mouseleave:function(e){t.showToggle=!1}}},[s("transition",{attrs:{name:"fade"}},[t.showToggle&&!t.form?s("div",{staticClass:"pledge-form-toggle",staticStyle:{"animation-duration":"0.5s"},on:{click:t.showFrom}},[t._v("\n            Select this reward\n        ")]):t._e()]),t._v(" "),s("h3",[t._v("Pledge US $"+t._s(t.price)+" or more")]),t._v(" "),t.name?s("h4",[t._v(t._s(t.name))]):t._e(),t._v(" "),s("div",{staticClass:"pledge-item__text"},[t._t("default")],2),t._v(" "),!t.form&&this.$slots.includes?s("div",{staticClass:"pledge-item__includes"},[s("h6",[t._v("Includes")]),t._v(" "),t._t("includes")],2):t._e(),t._v(" "),s("div",{staticClass:"pledge-item__info"},[t.estimated_delivery?s("div",[s("span",{staticClass:"h6"},[t._v("Estimated delivery")]),t._v("\n            "+t._s(t.date)+"\n        ")]):t._e(),t._v(" "),t.ships_to?s("div",[s("span",{staticClass:"h6"},[t._v("Ships to")]),t._v("\n            "+t._s(t.ships_to)+"\n        ")]):t._e(),t._v(" "),t.backers?s("div",{staticClass:"w-100 mt-5"},[s("span",{staticClass:"h6"},[t._v("\n                "+t._s(t.backers)+" backers\n            ")])]):t._e()]),t._v(" "),t.form?s("transition",{attrs:{name:"fade"}},[s("div",{staticClass:"mt-5"},[s("div",{staticClass:"h6 font-weight-bold text-uppercase mb-3"},[t._v("\n                Pledge amount\n            ")]),t._v(" "),s("c-contribute-form",{attrs:{defaultValue:t.price,active:!0},on:{click:function(e){t.$emit("click")}},model:{value:t.toBePaid,callback:function(e){t.toBePaid=e},expression:"toBePaid"}})],1)]):t._e()],1)},[],!1,null,"dbac6a36",null);e.default=u.exports}}]);