(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{1548:function(t,a,s){"use strict";s.r(a);var i={props:["id"],components:{"c-heading-bar":function(t){return Promise.resolve().then(function(){var a=[s(1608)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-content-navigation":function(t){return s.e(9).then(function(){var a=[s(1421)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-assets-grid":function(t){return s.e(199).then(function(){var a=[s(1501)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-featured-assets":function(t){return s.e(226).then(function(){var a=[s(1428)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-user-card":function(t){return s.e(11).then(function(){var a=[s(1518)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-button-arrows":function(t){return s.e(197).then(function(){var a=[s(1511)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-user-head":function(t){return s.e(228).then(function(){var a=[s(1424)];t.apply(null,a)}.bind(this)).catch(s.oe)}},data:function(){return{badge:{img:"https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Badges-and-Labels-PNG/Gold_Oval_Badge_Transparent_PNG_Clip_Art_Image.png?m=1507172108",title:"Protector of the Reign",product:"Product name"},game:{img:"http://via.placeholder.com/350x150",title:"Tibia MMORPG",developer:"CipSoft Entertainment GmbH",minutes_played:8931}}},computed:{signedIn:function(){return this.$store.state.application.signedIn},profile:function(){return this.$store.state.application.account.activeProfile}},methods:{showSendPopup:function(){this.$store.dispatch("application/activateModal","send-funds")}},created:function(){$(".rating_readonly").raty({readOnly:!0})}},n=(s(998),s(0)),o=Object(n.a)(i,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("c-layout",[s("c-user-head"),t._v(" "),s("div",{staticClass:"row justify-content-between align-items-center"},[s("div",{staticClass:"col-12 d-flex margin-top-30 justify-content-end"},[s("div",{staticClass:"profile__wallet"},[s("i",{staticClass:"fas fa-copy"}),t._v(" "),s("span",{attrs:{id:"walletNumber"}},[t._v(t._s(t.profile.address))])]),t._v(" "),s("div",{staticClass:"profile__action-group"},[s("c-button",{attrs:{status:"info",icon:"arrow-up"},on:{click:t.showSendPopup}},[t._v("Send")]),t._v(" "),s("c-button",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"SHARING",expression:"'SHARING'"}],attrs:{status:"share"}},[t._v("Share")]),t._v(" "),s("c-button",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"REPORTING",expression:"'REPORTING'"}],attrs:{status:"danger"}},[t._v("Report")])],1)]),t._v(" "),t.signedIn||t.$store.state.application.account.settings.client.hide_profile_signup?t._e():s("div",{staticClass:"col-12"},[s("div",{staticClass:"profile__user-notify"},[s("c-button",{staticClass:"btn-close",on:{click:function(a){t.$store.commit("application/updateClientSettings","hide_profile_signup",!0)}}},[s("i",{staticClass:"fas fa-times"})]),t._v(" "),s("h3",[t._v("Create your BlockHub Profile")]),t._v(" "),s("p",[t._v("BlockHub is the best place for curated community-driven game development,\n                    digital assets and micro-licensing. Sugn up for your own account and build\n                    the future of gaming.")]),t._v(" "),s("c-button",{attrs:{status:"success",size:"lg",iconHide:"",href:"#/download"}},[t._v("\n                    Sign Up\n                ")])],1)]),t._v(" "),s("div",{staticClass:"col-12 margin-top-40"},[s("div",{staticClass:"badges"},[s("c-heading-bar",{attrs:{name:"Badges",showArrows:!1,showBackground:!1}},[s("div",{staticClass:"additional-action margin-left-20",attrs:{slot:"additional-action"},slot:"additional-action"},[s("div",{staticClass:"text"},[t._v("\n                            Trust\n                            "),s("i",{staticClass:"fas fa-hand-holding-heart"})]),t._v(" "),s("c-button-arrows")],1),t._v(" "),s("div",{staticClass:"additional-action",attrs:{slot:"additional-action"},slot:"additional-action"},[s("div",{staticClass:"text"},[t._v("\n                            Rating\n                            "),s("i",{staticClass:"fas fa-trophy"})]),t._v(" "),s("c-button-arrows")],1)]),t._v(" "),s("div",{staticClass:"badges__list"},t._l(4,function(a){return s("div",{key:a,staticClass:"badges__item"},[s("div",{staticClass:"img"},[s("c-img",{attrs:{src:t.badge.img}})],1),t._v(" "),s("h3",[t._v(t._s(t.badge.title))]),t._v(" "),s("p",[t._v(t._s(t.badge.product))])])})),t._v(" "),s("c-content-navigation")],1)]),t._v(" "),s("div",{staticClass:"col-12 margin-top-40"},[s("div",{staticClass:"featured-assets"},[s("c-heading-bar",{attrs:{name:"Featured Assets",showArrows:!1,showBackground:!1}}),t._v(" "),s("c-featured-assets")],1)]),t._v(" "),s("div",{staticClass:"col-12 margin-top-40"},[s("div",{staticClass:"assets"},[s("c-heading-bar",{attrs:{name:"Assets",showArrows:!1,showBackground:!1}},[s("div",{staticClass:"additional-action margin-left-20",attrs:{slot:"additional-action"},slot:"additional-action"},[s("div",{staticClass:"text"},[t._v("\n                            Value\n                            "),s("i",{staticClass:"fas fa-dollar-sign"})]),t._v(" "),s("c-button-arrows")],1),t._v(" "),s("div",{staticClass:"additional-action",attrs:{slot:"additional-action"},slot:"additional-action"},[s("div",{staticClass:"text"},[t._v("\n                            Rating\n                            "),s("i",{staticClass:"fas fa-trophy"})]),t._v(" "),s("c-button-arrows")],1)]),t._v(" "),s("c-assets-grid"),t._v(" "),s("c-content-navigation")],1)]),t._v(" "),s("div",{staticClass:"col-12 margin-top-40"},[s("div",{staticClass:"games-list"},[s("c-heading-bar",{attrs:{name:"Games",showArrows:!1,showBackground:!1}},[s("div",{staticClass:"additional-action margin-left-20",attrs:{slot:"additional-action"},slot:"additional-action"},[s("div",{staticClass:"text"},[t._v("\n                            Price\n                            "),s("i",{staticClass:"fas fa-dollar-sign"})]),t._v(" "),s("c-button-arrows")],1),t._v(" "),s("div",{staticClass:"additional-action margin-left-20",attrs:{slot:"additional-action"},slot:"additional-action"},[s("div",{staticClass:"text"},[t._v("\n                            Play Time\n                            "),s("i",{staticClass:"fas fa-clock"})]),t._v(" "),s("c-button-arrows")],1),t._v(" "),s("div",{staticClass:"additional-action",attrs:{slot:"additional-action"},slot:"additional-action"},[s("div",{staticClass:"text"},[t._v("\n                            Purchase Date\n                            "),s("i",{staticClass:"fas fa-calendar"})]),t._v(" "),s("c-button-arrows")],1)]),t._v(" "),s("div",{staticClass:"games-list__grid"},t._l(6,function(a){return s("div",{key:a,staticClass:"games-list__grid-item"},[s("div",{staticClass:"img"},[s("c-img",{attrs:{src:t.game.img}})],1),t._v(" "),s("div",{staticClass:"info"},[s("h4",[t._v(t._s(t.game.title))]),t._v(" "),s("p",[t._v(t._s(t.game.developer))]),t._v(" "),s("div",{staticClass:"time"},[s("i",{staticClass:"fas fa-clock"}),t._v("\n                                "+t._s(Math.round(t.game.minutes_played/60))+"h played\n                            ")])])])})),t._v(" "),s("c-content-navigation")],1)]),t._v(" "),s("div",{staticClass:"col-12 margin-top-40 margin-bottom-40"},[s("div",{staticClass:"profile__user-notify-card"},[s("div",[s("c-user-card")],1),t._v(" "),t.signedIn?t._e():s("div",{staticClass:"text text-left"},[s("h3",[t._v("Create your BlockHub profile")]),t._v(" "),s("p",[t._v("BlockHub is the best place for curated community-driven game development,\n                        digital assets and micro-licensing. Sign up for your own account and build\n                        the future of gaming.")]),t._v(" "),s("c-button",{attrs:{href:"#/download",status:"success",size:"lg",iconHide:""}},[t._v("\n                        Sign Up\n                    ")])],1)])])]),t._v(" "),s("div",{staticClass:"row align-items-stretch"},[s("div",{staticClass:"col-12 col-md-8"},[s("div",{staticClass:"badges"},[s("c-heading-bar",{attrs:{name:"Badges",showArrows:!1,showBackground:!1}},[s("div",{staticClass:"additional-action margin-left-20",attrs:{slot:"additional-action"},slot:"additional-action"},[s("div",{staticClass:"text"},[t._v("\n                            Trust\n                            "),s("i",{staticClass:"fas fa-hand-holding-heart"})]),t._v(" "),s("c-button-arrows")],1),t._v(" "),s("div",{staticClass:"additional-action",attrs:{slot:"additional-action"},slot:"additional-action"},[s("div",{staticClass:"text"},[t._v("\n                            Rating\n                            "),s("i",{staticClass:"fas fa-trophy"})]),t._v(" "),s("c-button-arrows")],1)]),t._v(" "),s("div",{staticClass:"badges__list"},t._l(4,function(a){return s("div",{key:a,staticClass:"badges__item"},[s("div",{staticClass:"img"},[s("c-img",{attrs:{src:t.badge.img}})],1),t._v(" "),s("h3",[t._v(t._s(t.badge.title))]),t._v(" "),s("p",[t._v(t._s(t.badge.product))])])})),t._v(" "),s("c-content-navigation")],1)]),t._v(" "),s("div",{staticClass:"col-12 col-md-4"},[s("div",{staticClass:"basic-info"},[s("c-heading-bar",{attrs:{name:"Basic Information",showArrows:!1,showBackground:!1}})],1)])])],1)},[],!1,null,"6075890e",null);a.default=o.exports},309:function(t,a){},998:function(t,a,s){"use strict";var i=s(309);s.n(i).a}}]);