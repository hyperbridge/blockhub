(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{187:function(t,n){},553:function(t,n,e){"use strict";var o=e(187);e.n(o).a},668:function(t,n,e){"use strict";e.r(n);var o=e(5),s=e.n(o),i=e(8),c={name:"cookie-policy",components:{"c-popup":function(t){return e.e(2).then(function(){var n=[e(11)];t.apply(null,n)}.bind(this)).catch(e.oe)}},data:function(){return{show:!1}},methods:s()({},Object(i.d)(["UPDATE_CLIENT_SETTINGS"]),{updateClientSettings:function(){this.$store.commit("network/UPDATE_CLIENT_SETTINGS","cookie_policy_accepted"),this.show=!1},showPopup:function(){this.show=!0},closePopup:function(){this.show=!1}}),computed:{settings:function(){return this.$store.state.application.account.settings}}},a=(e(553),e(0)),u=Object(a.a)(c,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"fade"}},[t.settings.client.cookie_policy_accepted?t._e():e("div",{staticClass:"cookie-policy"},[e("p",{staticClass:"p-0 m-0"},[t._v("\n            By using this website, you agree to our\n            "),e("c-button",{staticClass:"p-0 m-0",attrs:{status:"plain"},on:{click:t.showPopup}},[t._v("cookie policy")])],1),t._v(" "),e("c-button",{staticClass:"margin-left-20",attrs:{status:"info",icon_hide:""},on:{click:function(n){t.updateClientSettings()}}},[t._v("\n            Dismiss\n        ")]),t._v(" "),e("c-popup",{attrs:{activated:t.show,title:"Cookie Policy"},on:{close:t.closePopup}},[e("p",[t._v("\n                We use cookies to make interactions with our websites and services easy and meaningful,\n                to better understand how they are used and to tailor advertising.")]),t._v(" "),e("p",[t._v("\n                You can "),e("c-button",{attrs:{status:"plain",href:"#3"}},[t._v("read more")]),t._v("\n                and "),e("c-button",{attrs:{status:"plain",href:"#4"}},[t._v("make you cookies choices here")]),t._v(".\n            ")],1),t._v(" "),e("p",[t._v("\n                By continuing to use this site you are giving\n                us your consent to do this.\n            ")]),e("template",{slot:"footer"},[e("div",{staticClass:"text-right w-100"},[e("c-button",{attrs:{status:"success",icon_hide:""},on:{click:function(n){t.updateClientSettings()}}},[t._v("\n                    Accept\n                ")])],1)])],2)],1)])},[],!1,null,null,null);n.default=u.exports}}]);