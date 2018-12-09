(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{1586:function(e,t,o){"use strict";o.r(t);var n={components:{"c-user-card":function(e){return o.e(11).then(function(){var t=[o(1518)];e.apply(null,t)}.bind(this)).catch(o.oe)}},data:function(){return{errors:[]}},computed:{developerMode:function(){return this.$store.state.application.developerMode}},methods:{convertProfile:function(){var e=this.$store.state.application.activeProfile.id;BlockHub.feathersClient.service("/profiles/:id/convert").update(e,{role:"developer"}).then(function(){})}},watch:{"$store.state.application.activeProfile.role":function(e){"developer"===e&&(this.$store.state.application.developerMode=!0)}}},r=(o(978),o(0)),a=Object(r.a)(n,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("c-layout",{attrs:{navigationKey:"store"}},[e.$store.state.application.signedIn?e._e():o("div",{staticClass:"row"},[o("p",[e._v("Interested in developing with BlockHub? Please contact us at developers@hyperbridge.org")])]),e._v(" "),e.$store.state.application.signedIn?o("div",{staticClass:"row"},[e.developerMode?e._e():o("div",{staticClass:"col-12"},[o("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Business Manager",noGutter:!0,bgGradient:!0,onlyContentBg:!0,hidden:""}},[o("p",[e._v("We're still working on our Business Manager. If you want a sneak preview, "),o("a",{attrs:{href:"#/business"}},[e._v("it's over here")]),e._v(". In the meantime, you can contact us directly at "),o("a",{attrs:{href:"mailto:business@hyperbridge.org"}},[o("strong",[e._v("business@hyperbridge.org")])])])]),e._v(" "),o("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Why Community-Driven Development?",noGutter:!0,bgGradient:!0,onlyContentBg:!0,hidden:""}},[o("p",[e._v("You might initially think that community-driven feature development could lead to bad game design. And in ordinary circumstances that's correct. But don't worry, BlockHub is not an ordinary platform. We know the reason why forum feedback is often mostly negative. It's because people enjoying the game aren't there, "),o("strong",[e._v("they're playing the game")]),e._v(". That's why we need to use "),o("strong",[e._v("comparison")]),e._v(" metrics to determine the state of your feedback to other games. This, along with the reputations system, will greatly improve the feedback loop to your internal testers. We want to make it super easy to understand your community. For the growth of your game, both the developer and the community need to work together, it's a symbiotic relationship. And we're to help nurture it.")])]),e._v(" "),e.developerMode?e._e():o("div",{staticStyle:{"text-align":"center"}},[o("c-user-card",{staticClass:"col-3 margin-auto",class:{default:!0},attrs:{user:e.$store.state.application.activeProfile,previewMode:!0}}),e._v(" "),o("br"),e._v(" "),o("c-button",{staticClass:"underline",on:{click:function(t){e.$store.commit("application/showProfileChooser",!0)}}},[e._v("Choose Different Profile")]),e._v(" "),o("br"),o("br"),e._v(" "),o("c-button",{staticClass:"c-btn-lg outline-white margin-top-20",on:{click:e.convertProfile}},[e._v("Convert to Developer")])],1)],1),e._v(" "),e.developerMode?o("div",{staticClass:"col-12"},[o("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Congratulations",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[e._v("\n                Your profile is all setup. You are Developer #"+e._s(e.activeProfile.developerId)+"\n\n                "),o("br"),o("br"),e._v(" "),o("c-button",{attrs:{href:"#/developer"}},[e._v("Go to dashboard")])],1)],1):e._e()]):e._e()])},[],!1,null,"5e4023ee",null);t.default=a.exports},289:function(e,t){},978:function(e,t,o){"use strict";var n=o(289);o.n(n).a}}]);