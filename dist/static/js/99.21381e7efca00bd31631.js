(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1472:function(t,a,i){"use strict";i.r(a);var s={props:["id"],components:{"c-heading-bar":function(t){return Promise.resolve().then(function(){var a=[i(1439)];t.apply(null,a)}.bind(this)).catch(i.oe)},"c-content-navigation":function(t){return i.e(8).then(function(){var a=[i(1332)];t.apply(null,a)}.bind(this)).catch(i.oe)},"c-assets-grid":function(t){return i.e(184).then(function(){var a=[i(1408)];t.apply(null,a)}.bind(this)).catch(i.oe)},"c-featured-assets":function(t){return i.e(212).then(function(){var a=[i(1429)];t.apply(null,a)}.bind(this)).catch(i.oe)},"c-user-card":function(t){return i.e(10).then(function(){var a=[i(1432)];t.apply(null,a)}.bind(this)).catch(i.oe)},"c-button-arrows":function(t){return i.e(182).then(function(){var a=[i(1314)];t.apply(null,a)}.bind(this)).catch(i.oe)},"c-user-head":function(t){return i.e(214).then(function(){var a=[i(1430)];t.apply(null,a)}.bind(this)).catch(i.oe)}},data:function(){return{badge:{img:"https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Badges-and-Labels-PNG/Gold_Oval_Badge_Transparent_PNG_Clip_Art_Image.png?m=1507172108",title:"Protector of the Reign",product:"Product name"},game:{img:"http://via.placeholder.com/350x150",title:"Tibia MMORPG",developer:"CipSoft Entertainment GmbH",minutes_played:8931}}},computed:{signed_in:function(){return this.$store.state.application.signed_in},profile:function(){return this.$store.state.application.account.activeProfile}},methods:{showSendPopup:function(){this.$store.dispatch("application/activateModal","send-funds")}},created:function(){$(".rating_readonly").raty({readOnly:!0})}},n=(i(915),i(0)),e=Object(n.a)(s,function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("c-layout",[i("c-user-head"),t._v(" "),i("div",{staticClass:"row justify-content-between align-items-center"},[i("div",{staticClass:"col-12 d-flex margin-top-30 justify-content-end"},[i("div",{staticClass:"profile__wallet"},[i("i",{staticClass:"fas fa-copy"}),t._v(" "),i("span",{attrs:{id:"wallet_number"}},[t._v(t._s(t.profile.public_address))])]),t._v(" "),i("div",{staticClass:"profile__action-group"},[i("c-button",{attrs:{status:"info",icon:"arrow-up"},on:{click:t.showSendPopup}},[t._v("Send")]),t._v(" "),i("c-button",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"SHARING",expression:"'SHARING'"}],attrs:{status:"share"}},[t._v("Share")]),t._v(" "),i("c-button",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"REPORTING",expression:"'REPORTING'"}],attrs:{status:"danger"}},[t._v("Report")])],1)]),t._v(" "),t.signed_in||t.$store.state.application.account.settings.client.hide_profile_signup?t._e():i("div",{staticClass:"col-12"},[i("div",{staticClass:"profile__user-notify"},[i("c-button",{staticClass:"btn-close",on:{click:function(a){t.$store.commit("application/UPDATE_CLIENT_SETTINGS","hide_profile_signup",!0)}}},[i("i",{staticClass:"fas fa-times"})]),t._v(" "),i("h3",[t._v("Create your BlockHub Profile")]),t._v(" "),i("p",[t._v("BlockHub is the best place for curated community-driven game development,\n                    digital assets and micro-licensing. Sugn up for your own account and build\n                    the future of gaming.")]),t._v(" "),i("c-button",{attrs:{status:"success",size:"lg",icon_hide:"",href:"#/download"}},[t._v("\n                    Sign Up\n                ")])],1)]),t._v(" "),i("div",{staticClass:"col-12 margin-top-40"},[i("div",{staticClass:"badges"},[i("c-heading-bar",{attrs:{name:"Badges",showArrows:!1,showBackground:!1}},[i("div",{staticClass:"additional-action margin-left-20",attrs:{slot:"additional-action"},slot:"additional-action"},[i("div",{staticClass:"text"},[t._v("\n                            Trust\n                            "),i("i",{staticClass:"fas fa-hand-holding-heart"})]),t._v(" "),i("c-button-arrows")],1),t._v(" "),i("div",{staticClass:"additional-action",attrs:{slot:"additional-action"},slot:"additional-action"},[i("div",{staticClass:"text"},[t._v("\n                            Rating\n                            "),i("i",{staticClass:"fas fa-trophy"})]),t._v(" "),i("c-button-arrows")],1)]),t._v(" "),i("div",{staticClass:"badges__list"},t._l(4,function(a){return i("div",{key:a,staticClass:"badges__item"},[i("div",{staticClass:"img"},[i("c-img",{attrs:{src:t.badge.img}})],1),t._v(" "),i("h3",[t._v(t._s(t.badge.title))]),t._v(" "),i("p",[t._v(t._s(t.badge.product))])])})),t._v(" "),i("c-content-navigation")],1)]),t._v(" "),i("div",{staticClass:"col-12 margin-top-40"},[i("div",{staticClass:"featured-assets"},[i("c-heading-bar",{attrs:{name:"Featured Assets",showArrows:!1,showBackground:!1}}),t._v(" "),i("c-featured-assets")],1)]),t._v(" "),i("div",{staticClass:"col-12 margin-top-40"},[i("div",{staticClass:"assets"},[i("c-heading-bar",{attrs:{name:"Assets",showArrows:!1,showBackground:!1}},[i("div",{staticClass:"additional-action margin-left-20",attrs:{slot:"additional-action"},slot:"additional-action"},[i("div",{staticClass:"text"},[t._v("\n                            Value\n                            "),i("i",{staticClass:"fas fa-dollar-sign"})]),t._v(" "),i("c-button-arrows")],1),t._v(" "),i("div",{staticClass:"additional-action",attrs:{slot:"additional-action"},slot:"additional-action"},[i("div",{staticClass:"text"},[t._v("\n                            Rating\n                            "),i("i",{staticClass:"fas fa-trophy"})]),t._v(" "),i("c-button-arrows")],1)]),t._v(" "),i("c-assets-grid"),t._v(" "),i("c-content-navigation")],1)]),t._v(" "),i("div",{staticClass:"col-12 margin-top-40"},[i("div",{staticClass:"games-list"},[i("c-heading-bar",{attrs:{name:"Games",showArrows:!1,showBackground:!1}},[i("div",{staticClass:"additional-action margin-left-20",attrs:{slot:"additional-action"},slot:"additional-action"},[i("div",{staticClass:"text"},[t._v("\n                            Price\n                            "),i("i",{staticClass:"fas fa-dollar-sign"})]),t._v(" "),i("c-button-arrows")],1),t._v(" "),i("div",{staticClass:"additional-action margin-left-20",attrs:{slot:"additional-action"},slot:"additional-action"},[i("div",{staticClass:"text"},[t._v("\n                            Play Time\n                            "),i("i",{staticClass:"fas fa-clock"})]),t._v(" "),i("c-button-arrows")],1),t._v(" "),i("div",{staticClass:"additional-action",attrs:{slot:"additional-action"},slot:"additional-action"},[i("div",{staticClass:"text"},[t._v("\n                            Purchase Date\n                            "),i("i",{staticClass:"fas fa-calendar"})]),t._v(" "),i("c-button-arrows")],1)]),t._v(" "),i("div",{staticClass:"games-list__grid"},t._l(6,function(a){return i("div",{key:a,staticClass:"games-list__grid-item"},[i("div",{staticClass:"img"},[i("c-img",{attrs:{src:t.game.img}})],1),t._v(" "),i("div",{staticClass:"info"},[i("h4",[t._v(t._s(t.game.title))]),t._v(" "),i("p",[t._v(t._s(t.game.developer))]),t._v(" "),i("div",{staticClass:"time"},[i("i",{staticClass:"fas fa-clock"}),t._v("\n                                "+t._s(Math.round(t.game.minutes_played/60))+"h played\n                            ")])])])})),t._v(" "),i("c-content-navigation")],1)]),t._v(" "),i("div",{staticClass:"col-12 margin-top-40 margin-bottom-40"},[i("div",{staticClass:"profile__user-notify-card"},[i("div",[i("c-user-card")],1),t._v(" "),t.signed_in?t._e():i("div",{staticClass:"text text-left"},[i("h3",[t._v("Create your BlockHub profile")]),t._v(" "),i("p",[t._v("BlockHub is the best place for curated community-driven game development,\n                        digital assets and micro-licensing. Sign up for your own account and build\n                        the future of gaming.")]),t._v(" "),i("c-button",{attrs:{href:"#/download",status:"success",size:"lg",icon_hide:""}},[t._v("\n                        Sign Up\n                    ")])],1)])])]),t._v(" "),i("div",{staticClass:"row align-items-stretch"},[i("div",{staticClass:"col-12 col-md-8"},[i("div",{staticClass:"badges"},[i("c-heading-bar",{attrs:{name:"Badges",showArrows:!1,showBackground:!1}},[i("div",{staticClass:"additional-action margin-left-20",attrs:{slot:"additional-action"},slot:"additional-action"},[i("div",{staticClass:"text"},[t._v("\n                            Trust\n                            "),i("i",{staticClass:"fas fa-hand-holding-heart"})]),t._v(" "),i("c-button-arrows")],1),t._v(" "),i("div",{staticClass:"additional-action",attrs:{slot:"additional-action"},slot:"additional-action"},[i("div",{staticClass:"text"},[t._v("\n                            Rating\n                            "),i("i",{staticClass:"fas fa-trophy"})]),t._v(" "),i("c-button-arrows")],1)]),t._v(" "),i("div",{staticClass:"badges__list"},t._l(4,function(a){return i("div",{key:a,staticClass:"badges__item"},[i("div",{staticClass:"img"},[i("c-img",{attrs:{src:t.badge.img}})],1),t._v(" "),i("h3",[t._v(t._s(t.badge.title))]),t._v(" "),i("p",[t._v(t._s(t.badge.product))])])})),t._v(" "),i("c-content-navigation")],1)]),t._v(" "),i("div",{staticClass:"col-12 col-md-4"},[i("div",{staticClass:"basic-info"},[i("c-heading-bar",{attrs:{name:"Basic Information",showArrows:!1,showBackground:!1}})],1)])])],1)},[],!1,null,"2d181b33",null);a.default=e.exports},286:function(t,a){},915:function(t,a,i){"use strict";var s=i(286);i.n(s).a}}]);