(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{167:function(t,a){},168:function(t,a){},594:function(t,a,s){"use strict";var i=s(167);s.n(i).a},595:function(t,a,s){"use strict";var i=s(168);s.n(i).a},874:function(t,a,s){"use strict";s.r(a);var i=s(12),c=s.n(i),n=s(11),e={components:{"c-layout":function(t){return Promise.resolve().then(function(){var a=[s(890)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-block":function(t){return s.e(112).then(function(){var a=[s(740)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-heading-bar":function(t){return Promise.resolve().then(function(){var a=[s(462)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-custom-modal":function(t){return s.e(152).then(function(){var a=[s(788)];t.apply(null,a)}.bind(this)).catch(s.oe)}},computed:{identityCount:function(){return c()(this.$store.state.application.identities).length},account:function(){return this.$store.state.application.account}},data:function(){return{wallets:[],expert_mode:!1}},methods:{exportAccountFile:function(){n.h("exportAccountFileRequest")},importAccountFile:function(){n.h("importAccountFileRequest")}}},o=(s(595),s(594),s(0)),l=Object(o.a)(e,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("c-layout",{attrs:{navigationKey:"account"}},[s("div",{staticClass:"content",attrs:{id:"content"}},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("c-block",{attrs:{title:"Account Information"}},[s("form",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-10"},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-3"},[s("label",[t._v("Email Address")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Email",readonly:""},domProps:{value:t.account.email}}),t._v(" "),s("span",{staticClass:"form-text"},[t._v("This field cannot be changed at this time.")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-3"},[s("label",[t._v("First Name")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"First name",readonly:""},domProps:{value:t.account.first_name}}),t._v(" "),s("span",{staticClass:"form-text"},[t._v("This field cannot be changed at this time.")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-3"},[s("label",[t._v("Public Address")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Public address",readonly:""},domProps:{value:t.account.public_address}}),t._v(" "),s("span",{staticClass:"form-text"},[t._v("Your account is an Ethereum wallet, and can be "),s("a",{attrs:{href:"https://etherscan.io/address/"+t.account.public_address}},[t._v("found on the blockchain using the Public Address")])])])])]),t._v(" "),s("div",{staticClass:"col-12"},[s("c-button",{on:{click:t.exportAccountFile}},[t._v("Download Account File")]),t._v(" "),s("c-button",{on:{click:t.importAccountFile}},[t._v("Import Account File")])],1)])])]),t._v(" "),s("c-block",{attrs:{title:"Overview"}},[s("div",{staticClass:"stat-card-container"},[s("div",{staticClass:"stat-card-list"},[s("router-link",{staticClass:"route stat-card",attrs:{tag:"div",to:"/account/identities"}},[s("div",{staticClass:"icon"},[s("i",{staticClass:"fas fa-id-card"})]),t._v(" "),s("div",{staticClass:"info"},[s("h4",[t._v("Identities")]),t._v(" "),s("div",{staticClass:"stat"},[s("div",[t._v("\n                                                "+t._s(t.account.identities.length)+" owned by your account\n                                            ")])]),t._v(" "),s("p",[t._v("\n                                            View and manage identities on this account.\n                                        ")])])]),t._v(" "),s("div",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"TICKETS",expression:"'TICKETS'"}],staticClass:"stat-card"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"fas fa-question-circle"})]),t._v(" "),s("div",{staticClass:"info"},[s("h4",[t._v("Support Tickets")]),t._v(" "),s("div",{staticClass:"stat"},[s("div",[s("i",{staticClass:"fa fa-clock"}),t._v("\n                                                35\n                                            ")]),t._v(" "),s("div",[s("i",{staticClass:"fas fa-exclamation-triangle",staticStyle:{color:"#FADC72"}}),t._v("\n                                                12\n                                            ")]),t._v(" "),s("div",[s("i",{staticClass:"fas fa-check",staticStyle:{color:"#43C981"}}),t._v("\n                                                5\n                                            ")])]),t._v(" "),s("p",[t._v("\n                                            Viev and Manage Identities on this account.\n                                        ")])])]),t._v(" "),s("div",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"PAYMENTS",expression:"'PAYMENTS'"}],staticClass:"stat-card"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"fas fa-dollar-sign"})]),t._v(" "),s("div",{staticClass:"info"},[s("h4",[t._v("Open Payments")]),t._v(" "),s("div",{staticClass:"stat"},[s("div",[t._v("\n                                                $ 2,345,00 om 6 Payments\n                                            ")])]),t._v(" "),s("p",[t._v("\n                                            Viev and Manage Identities on this account.\n                                        ")])])]),t._v(" "),s("div",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"USER_ACTIVITY",expression:"'USER_ACTIVITY'"}],staticClass:"stat-card"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"fas fa-users"})]),t._v(" "),s("div",{staticClass:"info"},[s("h4",[t._v("User Activity")]),t._v(" "),s("div",{staticClass:"stat"},[s("div",[s("i",{staticClass:"fas fa-circle",staticStyle:{color:"#43C981"}}),t._v("\n                                                3\n                                            ")]),t._v(" "),s("div",[s("i",{staticClass:"fas fa-circle",staticStyle:{color:"#FADC72"}}),t._v("\n                                                1\n                                            ")]),t._v(" "),s("div",[s("i",{staticClass:"fas fa-circle",staticStyle:{color:"#F75D5D"}}),t._v("\n                                                0\n                                            ")]),t._v(" "),s("div",[s("i",{staticClass:"fas fa-circle",staticStyle:{color:"#A2A3BE"}}),t._v("\n                                                5\n                                            ")])]),t._v(" "),s("p",[t._v("\n                                            Viev and Manage Identities on this account.\n                                        ")])])])],1)])])],1)])])])])},[],!1,null,"f9c85a8a",null);a.default=l.exports}}]);