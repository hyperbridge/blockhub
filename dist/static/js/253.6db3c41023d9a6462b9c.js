(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{1272:function(t,i,s){"use strict";s.r(i);var e=s(9),n=s.n(e),o={props:{items:Array,autoSlide:Boolean,limitTo:{type:Number,default:3}},data:function(){return{slides:this.items,interval:null}},methods:{next:function(){this.$refs.carousel.focus();var t=this.slides.shift();this.slides=[].concat(n()(this.slides),[t])},previous:function(){var t=this.slides.pop();this.slides=[t].concat(n()(this.slides))}},computed:{visible:function(){return this.slides.slice(0,this.limitTo)}},mounted:function(){this.autoSlide&&(this.interval=setInterval(this.next,2e3))},beforeDestroy:function(){clearInterval(this.interval)}},r=(s(724),s(0)),a=Object(r.a)(o,function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{ref:"carousel",staticClass:"carousel-3d",on:{keyup:function(i){return"button"in i||!t._k(i.keyCode,"right",39,i.key,["Right","ArrowRight"])?"button"in i&&2!==i.button?null:void t.next():null}}},[s("c-icon",{staticClass:"carousel-3d__btn",attrs:{name:"arrow-circle-left"},on:{click:function(i){t.previous()}}}),t._v(" "),s("transition-group",{staticClass:"carousel-wrapper",attrs:{name:"carousel-3d-transition",tag:"div"}},[t._t("default",null,{items:t.visible})],2),t._v(" "),s("c-icon",{staticClass:"carousel-3d__btn",attrs:{name:"arrow-circle-right"},on:{click:function(i){t.next()}}})],1)},[],!1,null,"2da44e90",null);i.default=a.exports},162:function(t,i){},724:function(t,i,s){"use strict";var e=s(162);s.n(e).a}}]);