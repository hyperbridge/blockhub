(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1606:function(t,o,e){"use strict";e.r(o);var r=e(11),i=(e(3),{components:{"c-user-card":function(t){return e.e(11).then(function(){var o=[e(1518)];t.apply(null,o)}.bind(this)).catch(e.oe)}},data:function(){var t=this,o=this.$store.state.application.account.profiles.find(function(t){return void 0!==t.curatorId}),e=this.$store.state.application.account.profiles.find(function(o){return o.id==t.$store.state.application.activeProfile.id});return!e&&this.$store.state.application.account.profiles.length&&(e=this.$store.state.application.account.profiles[0]),{profiles:this.$store.state.application.account.profiles,chosenProfile:e,developerProfile:o,errors:[]}},methods:{convertProfile:function(){var t=this;r.sendCommand("createCuratorRequest",this.chosenProfile).then(function(o){t.chosenProfile.curatorId=o,t.developerProfile=t.chosenProfile,t.$store.state.application.curatorMode=!0})},chooseProfile:function(t){this.chosenProfile=t}}}),n=(e(915),e(0)),a=Object(n.a)(i,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("c-layout",{attrs:{navigationKey:"store"}},[e("div",{staticClass:"row"},[t.curatorMode?t._e():e("div",{staticClass:"col-12"},[e("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Curator Application",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[e("p",[t._v("Welcome")])]),t._v(" "),t.curatorMode?t._e():e("div",{staticStyle:{"text-align":"center"}},[e("c-user-card",{staticClass:"col-3 margin-auto",class:{default:!0},attrs:{user:t.chosenProfile,previewMode:!0}}),t._v(" "),e("br"),t._v(" "),e("c-button",{staticClass:"underline",on:{click:function(o){t.$store.commit("application/showProfileChooser",!0)}}},[t._v("Choose Different Profile")]),t._v(" "),e("br"),e("br"),t._v(" "),e("c-button",{staticClass:"c-btn-lg outline-white margin-top-20",on:{click:t.convertProfile}},[t._v("Convert to Curator")])],1)],1),t._v(" "),t.curatorMode?e("div",{staticClass:"col-12"},[e("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Congratulations",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[t._v("\n                Your profile is all setup. You are Curator #"+t._s(t.chosenProfile.developerId)+"\n\n                "),e("br"),e("br"),t._v(" "),e("c-button",{attrs:{href:"#/meta"}},[t._v("Go to dashboard")])],1)],1):t._e()])])},[],!1,null,"100a58dc",null);o.default=a.exports},226:function(t,o){},915:function(t,o,e){"use strict";var r=e(226);e.n(r).a}}]);