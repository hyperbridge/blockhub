(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1421:function(t,s,a){(t.exports=a(15)(!1)).push([t.i,"",""])},1422:function(t,s,a){"use strict";var i=a(861);a.n(i).a},582:function(t,s,a){"use strict";a.r(s);var i={components:{"c-business-layout":function(t){return a.e(207).then(function(){var s=[a(2238)];t.apply(null,s)}.bind(this)).catch(a.oe)}},data:function(){return{loadingState:!0}},computed:{projects:function(){return this.$store.getters["projects/list"]},products:function(){return this.$store.getters["products/list"]}},created:function(){this.$store.dispatch("projects/find",{query:{$sort:{createdAt:-1},$limit:25}}),this.$store.dispatch("products/find",{query:{$sort:{createdAt:-1},$limit:25}})},mounted:function(){var t=this;this.$nextTick(function(){t.loadingState=!1,document.getElementById("startup-loader").style.display="none"})}},e=(a(1422),a(7)),c=Object(e.a)(i,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-3"},[a("div",{staticClass:"widget"},[a("c-button",{staticStyle:{display:"block"},attrs:{to:"/business/products",status:"none"}},[a("div",{staticClass:"widget__icon_layer widget__icon_layer--right"},[a("span",{staticClass:"li-window"})]),t._v(" "),a("div",{staticClass:"widget__container"},[a("div",{staticClass:"widget__line"},[a("div",{staticClass:"widget__icon"},[a("span",{staticClass:"li-window"})]),t._v(" "),a("div",{staticClass:"widget__title"},[t._v("Products")]),t._v(" "),a("div",{staticClass:"widget__subtitle"})]),t._v(" "),a("div",{staticClass:"widget__box widget__box--left"},[a("div",{staticClass:"widget__informer"},[t._v(t._s(t.products.length)+" games")])])])])],1)]),t._v(" "),a("div",{staticClass:"col-12 col-lg-3"},[a("div",{staticClass:"widget"},[a("c-button",{staticStyle:{display:"block"},attrs:{to:"/business/projects",status:"none"}},[a("div",{staticClass:"widget__icon_layer widget__icon_layer--right"},[a("span",{staticClass:"li-window"})]),t._v(" "),a("div",{staticClass:"widget__container"},[a("div",{staticClass:"widget__line"},[a("div",{staticClass:"widget__icon"},[a("span",{staticClass:"li-window"})]),t._v(" "),a("div",{staticClass:"widget__title"},[t._v("Projects")]),t._v(" "),a("div",{staticClass:"widget__subtitle"})]),t._v(" "),a("div",{staticClass:"widget__box widget__box--left"},[a("div",{staticClass:"widget__informer"},[t._v(t._s(t.projects.length)+" crowdfunds")])])])])],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),a("div",{staticClass:"card margin-bottom-0",attrs:{hidden:""}},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"form-row"},[t._m(3),t._v(" "),t._m(4),t._v(" "),a("div",{staticClass:"col-6 col-lg-4 d-none d-md-block"}),t._v(" "),t._m(5),t._v(" "),a("div",{staticClass:"col-6 col-lg-2 d-none d-md-block"},[a("c-button",{staticClass:"w-100 justify-content-center h-100",attrs:{status:"dark",icon:"plus",size:"mg"}},[t._v("\n                                New project\n                            ")])],1)]),t._v(" "),t._m(6)])])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-12 col-lg-3",attrs:{hidden:""}},[s("div",{staticClass:"widget"},[s("div",{staticClass:"widget__icon_layer widget__icon_layer--right"},[s("span",{staticClass:"li-users"})]),this._v(" "),s("div",{staticClass:"widget__container"},[s("div",{staticClass:"widget__line"},[s("div",{staticClass:"widget__icon"},[s("span",{staticClass:"li-users"})]),this._v(" "),s("div",{staticClass:"widget__title"},[this._v("Users activity")]),this._v(" "),s("div",{staticClass:"widget__subtitle"},[this._v("Online operators")])]),this._v(" "),s("div",{staticClass:"widget__box widget__box--left"},[s("div",{staticClass:"widget__informer"},[this._v("12 operators")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-12 col-lg-3",attrs:{hidden:""}},[s("div",{staticClass:"widget"},[s("div",{staticClass:"widget__icon_layer widget__icon_layer--right"},[s("span",{staticClass:"li-receipt"})]),this._v(" "),s("div",{staticClass:"widget__container"},[s("div",{staticClass:"widget__line"},[s("div",{staticClass:"widget__icon"},[s("span",{staticClass:"li-receipt"})]),this._v(" "),s("div",{staticClass:"widget__title"},[this._v("Open payments")]),this._v(" "),s("div",{staticClass:"widget__subtitle"},[this._v("Payments summary")])]),this._v(" "),s("div",{staticClass:"widget__box widget__box--left"},[s("div",{staticClass:"widget__informer"},[this._v("6 payments for $2,485.00")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-12 col-lg-3",attrs:{hidden:""}},[s("div",{staticClass:"widget"},[s("div",{staticClass:"widget__icon_layer widget__icon_layer--right"},[s("span",{staticClass:"li-lifebuoy"})]),this._v(" "),s("div",{staticClass:"widget__container"},[s("div",{staticClass:"widget__line"},[s("div",{staticClass:"widget__icon"},[s("span",{staticClass:"li-lifebuoy"})]),this._v(" "),s("div",{staticClass:"widget__title"},[this._v("Support tickets")]),this._v(" "),s("div",{staticClass:"widget__subtitle"},[this._v("Count of opened tickets")])]),this._v(" "),s("div",{staticClass:"widget__box widget__box--left"},[s("div",{staticClass:"widget__informer"},[this._v("5 of 2,133")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-6 col-lg-2"},[s("select",{staticClass:"form-control actionWithSelected",attrs:{tabindex:"-1","aria-hidden":"true"}},[s("option"),this._v(" "),s("option",{attrs:{value:"1"}},[this._v("Set as readed")]),this._v(" "),s("option",{attrs:{value:"2"}},[this._v("Remove")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-6 col-lg-2 d-none d-md-block"},[s("select",{staticClass:"form-control customPeriod",attrs:{tabindex:"-1","aria-hidden":"true"}},[s("option"),this._v(" "),s("option",{attrs:{value:"1"}},[this._v("This month")]),this._v(" "),s("option",{attrs:{value:"2"}},[this._v("Prev month")]),this._v(" "),s("option",{attrs:{value:"3"}},[this._v("Other")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-6 col-lg-2"},[a("select",{staticClass:"form-control orderByStatus",attrs:{tabindex:"-1","aria-hidden":"true"}},[a("option"),t._v(" "),a("option",{attrs:{value:"1"}},[t._v("New")]),t._v(" "),a("option",{attrs:{value:"2"}},[t._v("Active")]),t._v(" "),a("option",{attrs:{value:"3"}},[t._v("Closed")]),t._v(" "),a("option",{attrs:{value:"3"}},[t._v("Denied")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"table-responsive margin-top-20 margin-bottom-0"},[a("table",{staticClass:"table table-striped table-bordered margin-bottom-0",staticStyle:{"min-width":"800px"}},[a("thead",[a("tr",[a("th",{attrs:{width:"30"}},[a("label",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox"}}),t._v(" "),a("span",{staticClass:"custom-control-label"})])]),t._v(" "),a("th",{attrs:{width:"100"}},[t._v("ID")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Date")]),t._v(" "),a("th",[t._v("Manager")]),t._v(" "),a("th",[t._v("Operators")]),t._v(" "),a("th",[t._v("Price")]),t._v(" "),a("th",{attrs:{width:"100"}},[t._v("Status")]),t._v(" "),a("th",{attrs:{width:"30"}})])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("label",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox"}}),t._v(" "),a("span",{staticClass:"custom-control-label"})])]),t._v(" "),a("td",[t._v("1442")]),t._v(" "),a("td",[a("a",{staticClass:"text-secondary text-bold",attrs:{href:"#"}},[t._v("Logo design for Company")])]),t._v(" "),a("td",[t._v("10.04.18")]),t._v(" "),a("td",[a("div",{staticClass:"user user--bordered"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}}),t._v(" "),a("div",{staticClass:"user__name"},[a("strong",[t._v("Dmitry Ivaniuk")])])])]),t._v(" "),a("td",[a("div",{staticClass:"user-group user-group--bordered"},[a("div",{staticClass:"user"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}})]),t._v(" "),a("div",{staticClass:"user"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}})]),t._v(" "),a("div",{staticClass:"user"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}})])])]),t._v(" "),a("td",[t._v("\n                                    $200.00\n                                ")]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-outline-success btn-block btn-sm"},[t._v("New")])]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-secondary btn-icon btn-sm"},[a("span",{staticClass:"fa fa-pencil"})])])]),t._v(" "),a("tr",[a("td",[a("label",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox"}}),t._v(" "),a("span",{staticClass:"custom-control-label"})])]),t._v(" "),a("td",[t._v("1441")]),t._v(" "),a("td",[a("a",{staticClass:"text-secondary text-bold",attrs:{href:"#"}},[t._v("Website development")])]),t._v(" "),a("td",[t._v("09.04.18")]),t._v(" "),a("td",[a("div",{staticClass:"user user--bordered"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}}),t._v(" "),a("div",{staticClass:"user__name"},[a("strong",[t._v("Francisco Dero")])])])]),t._v(" "),a("td",[a("div",{staticClass:"user-group user-group--bordered"},[a("div",{staticClass:"user"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}})]),t._v(" "),a("div",{staticClass:"user"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}})]),t._v(" "),a("div",{staticClass:"user"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}})])])]),t._v(" "),a("td",[t._v("\n                                    $1,850.00\n                                ")]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-light btn-block btn-sm"},[t._v("Active")])]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-secondary btn-icon btn-sm"},[a("span",{staticClass:"fa fa-pencil"})])])]),t._v(" "),a("tr",[a("td",[a("label",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox"}}),t._v(" "),a("span",{staticClass:"custom-control-label"})])]),t._v(" "),a("td",[t._v("1440")]),t._v(" "),a("td",[a("a",{staticClass:"text-secondary text-bold",attrs:{href:"#"}},[t._v("UI/UX design for backend panel")])]),t._v(" "),a("td",[t._v("09.04.18")]),t._v(" "),a("td",[a("div",{staticClass:"user user--bordered"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}}),t._v(" "),a("div",{staticClass:"user__name"},[a("strong",[t._v("Dmitry Ivaniuk")])])])]),t._v(" "),a("td",[a("div",{staticClass:"user-group user-group--bordered"},[a("div",{staticClass:"user"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}})]),t._v(" "),a("div",{staticClass:"user"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}})])])]),t._v(" "),a("td",[t._v("\n                                    $990.00\n                                ")]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-light btn-block btn-sm"},[t._v("Active")])]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-secondary btn-icon btn-sm"},[a("span",{staticClass:"fa fa-pencil"})])])]),t._v(" "),a("tr",[a("td",[a("label",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox"}}),t._v(" "),a("span",{staticClass:"custom-control-label"})])]),t._v(" "),a("td",[t._v("1438")]),t._v(" "),a("td",[a("a",{staticClass:"text-secondary text-bold",attrs:{href:"#"}},[t._v("Texts for personal website")])]),t._v(" "),a("td",[t._v("08.04.18")]),t._v(" "),a("td",[a("div",{staticClass:"user user--bordered"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}}),t._v(" "),a("div",{staticClass:"user__name"},[a("strong",[t._v("Julia Comporova")])])])]),t._v(" "),a("td",[a("div",{staticClass:"user-group user-group--bordered"},[a("div",{staticClass:"user"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}})])])]),t._v(" "),a("td",[t._v("\n                                    $437.30\n                                ")]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-outline-secondary btn-block btn-sm"},[t._v("Finished")])]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-secondary btn-icon btn-sm"},[a("span",{staticClass:"fa fa-pencil"})])])]),t._v(" "),a("tr",[a("td",[a("label",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox"}}),t._v(" "),a("span",{staticClass:"custom-control-label"})])]),t._v(" "),a("td",[t._v("1435")]),t._v(" "),a("td",[a("a",{staticClass:"text-secondary text-bold",attrs:{href:"#"}},[t._v("Content menagement")])]),t._v(" "),a("td",[t._v("08.04.18")]),t._v(" "),a("td",[a("div",{staticClass:"user user--bordered"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}}),t._v(" "),a("div",{staticClass:"user__name"},[a("strong",[t._v("Andrew Conor")])])])]),t._v(" "),a("td",[a("div",{staticClass:"user-group user-group--bordered"},[a("div",{staticClass:"user"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}})]),t._v(" "),a("div",{staticClass:"user"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}})])])]),t._v(" "),a("td",[t._v("\n                                    $1,600.00\n                                ")]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-outline-warning btn-block btn-sm"},[t._v("Denied")])]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-secondary btn-icon btn-sm"},[a("span",{staticClass:"fa fa-pencil"})])])]),t._v(" "),a("tr",[a("td",[a("label",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox"}}),t._v(" "),a("span",{staticClass:"custom-control-label"})])]),t._v(" "),a("td",[t._v("1433")]),t._v(" "),a("td",[a("a",{staticClass:"text-secondary text-bold",attrs:{href:"#"}},[t._v("Marketing strategy")])]),t._v(" "),a("td",[t._v("05.04.18")]),t._v(" "),a("td",[a("div",{staticClass:"user user--bordered"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}}),t._v(" "),a("div",{staticClass:"user__name"},[a("strong",[t._v("Dmitry Ivaniuk")])])])]),t._v(" "),a("td",[a("div",{staticClass:"user-group user-group--bordered"},[a("div",{staticClass:"user"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}})]),t._v(" "),a("div",{staticClass:"user"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}})]),t._v(" "),a("div",{staticClass:"user"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}})]),t._v(" "),a("div",{staticClass:"user"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}})])])]),t._v(" "),a("td",[t._v("\n                                    $8,000.00\n                                ")]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-outline-secondary btn-block btn-sm"},[t._v("Finished")])]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-secondary btn-icon btn-sm"},[a("span",{staticClass:"fa fa-pencil"})])])]),t._v(" "),a("tr",[a("td",[a("label",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox"}}),t._v(" "),a("span",{staticClass:"custom-control-label"})])]),t._v(" "),a("td",[t._v("1431")]),t._v(" "),a("td",[a("a",{staticClass:"text-secondary text-bold",attrs:{href:"#"}},[t._v("Website markup")])]),t._v(" "),a("td",[t._v("03.04.18")]),t._v(" "),a("td",[a("div",{staticClass:"user user--bordered"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}}),t._v(" "),a("div",{staticClass:"user__name"},[a("strong",[t._v("Alex Donorsky")])])])]),t._v(" "),a("td",[a("div",{staticClass:"user-group user-group--bordered"},[a("div",{staticClass:"user"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}})])])]),t._v(" "),a("td",[t._v("\n                                    $510.00\n                                ")]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-outline-danger btn-block btn-sm"},[t._v("Closed")])]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-secondary btn-icon btn-sm"},[a("span",{staticClass:"fa fa-pencil"})])])]),t._v(" "),a("tr",[a("td",[a("label",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox"}}),t._v(" "),a("span",{staticClass:"custom-control-label"})])]),t._v(" "),a("td",[t._v("1429")]),t._v(" "),a("td",[a("a",{staticClass:"text-secondary text-bold",attrs:{href:"#"}},[t._v("Adsense adv company")])]),t._v(" "),a("td",[t._v("03.04.18")]),t._v(" "),a("td",[a("div",{staticClass:"user user--bordered"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}}),t._v(" "),a("div",{staticClass:"user__name"},[a("strong",[t._v("Dmitry Ivaniuk")])])])]),t._v(" "),a("td",[a("div",{staticClass:"user-group user-group--bordered"},[a("div",{staticClass:"user"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}})]),t._v(" "),a("div",{staticClass:"user"},[a("img",{attrs:{src:"http://via.placeholder.com/128x128"}})])])]),t._v(" "),a("td",[t._v("\n                                    $1000.00\n                                ")]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-outline-success btn-block btn-sm"},[t._v("Done")])]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-secondary btn-icon btn-sm"},[a("span",{staticClass:"fa fa-pencil"})])])])])])])}],!1,null,"63ca314e",null);s.default=c.exports},861:function(t,s,a){var i=a(1421);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(14)("0a6fbf3e",i,!0,{})}}]);