(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1541:function(t,i,e){"use strict";e.r(i);var s={props:["type"],components:{},data:function(){return{initialized:!1,satisfied:!1}},created:function(){var t=this;this.$store.state.auth.accessToken?this.authenticate():this.$store.dispatch("auth/authenticate").then(function(){t.authenticate()}).catch(function(t){t&&!t.message.includes("Could not find stored JWT")&&console.error(t)}),setTimeout(this.initialize.bind(this),3e3)},watch:{"$store.state.auth.user":function(t){t&&"user"===this.type&&(this.satisfied=!0)},"$store.state.auth.accessToken":function(){newVal&&this.authenticate()}},computed:{},methods:{authenticate:function(){"authenticated"===this.type&&(this.satisfied=!0)},initialize:function(){this.initialized||(this.initialized=BlockHub.initialized=!0,this.$store.commit("updateSingle",["application/initialized",!0]),"initialized"===this.type&&(this.satisfied=!0))}}},n=e(0),a=Object(n.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("div",[this.satisfied?this._t("default"):this._e()],2)},[],!1,null,null,null);i.default=a.exports}}]);