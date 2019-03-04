(window.webpackJsonp=window.webpackJsonp||[]).push([[102,280],{1066:function(e,s,t){"use strict";var a=t(321);t.n(a).a},138:function(e,s){},139:function(e,s){},140:function(e,s){},1518:function(e,s,t){"use strict";t.r(s);var a={components:{"c-chat":t(588).default},computed:{messages:function(){return this.$store.getters["messages/list"]}},data:function(){return{}}},n=(t(1066),t(0)),r=Object(n.a)(a,function(){var e=this.$createElement,s=this._self._c||e;return s("c-layout",{attrs:{navigationKey:"chat"}},[s("c-chat",{attrs:{messages:this.messages}})],1)},[],!1,null,"73de1a40",null);s.default=r.exports},321:function(e,s){},588:function(e,s,t){"use strict";t.r(s);var a=t(3),n=t.n(a),r=t(23),l={props:{users:Array,logout:Function},data:function(){return{dummyUser:[{email:"noemail",avatar:"https://s.gravatar.com/avatar/7eb0f9eac6df7e6be3971144999a2152?s=200"}]}},computed:{plural:function(){return 1===this.users.length?"user":"users"}}},c=(t(861),t(0)),i=Object(c.a)(l,function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("aside",{staticClass:"sidebar col col-3 flex flex-column flex-space-between"},[t("header",{staticClass:"flex flex-row flex-center"},[t("h4",{staticClass:"font-300 text-center"},[t("span",{staticClass:"font-600 online-count"},[e._v(e._s(e.users.length))]),e._v(" "+e._s(e.plural)+"\n    ")])]),e._v(" "),t("ul",{staticClass:"flex flex-column flex-1 list-unstyled user-list"},e._l(e.users,function(s,a){return t("li",{key:a},[t("a",{staticClass:"block relative",attrs:{href:"javascript://"}},[t("img",{staticClass:"avatar",attrs:{src:s.avatar||e.dummyUser.avatar,alt:""}}),e._v(" "),t("span",{staticClass:"absolute username"},[e._v(e._s(s.email||e.dummyUser.email))])])])})),e._v(" "),t("footer",{staticClass:"flex flex-row flex-center"})])},[],!1,null,null,null).exports,o={data:function(){return{newMessage:""}},props:{createMessage:Function},methods:{addMessage:function(){this.createMessage({text:this.newMessage}).then(this.clearMessage)},clearMessage:function(){this.newMessage=""}}},u=Object(c.a)(o,function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("form",{staticClass:"flex flex-row flex-space-between",attrs:{id:"send-message"},on:{submit:function(e){e.preventDefault()}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.newMessage,expression:"newMessage"}],staticClass:"flex flex-1",attrs:{type:"text",name:"text"},domProps:{value:e.newMessage},on:{input:function(s){s.target.composing||(e.newMessage=s.target.value)}}}),e._v(" "),t("button",{staticClass:"button-primary",attrs:{type:"submit"},on:{click:e.addMessage}},[e._v("Send")])])},[],!1,null,null,null).exports,m={props:["message","index"],computed:{formattedDate:function(){return this.message.createdAt.toString()}}},f=Object(c.a)(m,function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"message flex flex-row"},[t("img",{staticClass:"avatar",attrs:{src:e.message.user.avatar||e.placeholder,alt:e.message.user.email}}),e._v(" "),t("div",{staticClass:"message-wrapper"},[t("p",{staticClass:"message-header"},[t("span",{staticClass:"username font-600"},[e._v(e._s(e.message.user.email))]),e._v(" "),t("span",{staticClass:"sent-date font-300"},[e._v(e._s(e.formattedDate))])]),e._v(" "),t("p",{staticClass:"message-content font-300"},[e._v(e._s(e.message.text))])])])},[],!1,null,null,null).exports,g={props:{messages:Array,createMessage:Function},data:function(){return{}},methods:{scrollToBottom:function(){var e=this;this.$nextTick(function(){var s=e.$el.getElementsByClassName("chat")[0];s.scrollTop=s.scrollHeight})}},watch:{messages:function(){this.messages.length&&this.scrollToBottom()}},components:{"c-compose-message":u,"c-single-message":f}},d=(t(860),Object(c.a)(g,function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"flex flex-column col col-9"},[s("main",{staticClass:"chat flex flex-column flex-1 clear"},this._l(this.messages,function(e){return s("c-single-message",{key:e._id,attrs:{message:e}})})),this._v(" "),s("c-compose-message",{attrs:{createMessage:this.createMessage}})],1)},[],!1,null,null,null).exports),p={props:{messages:Array},computed:n()({},Object(r.e)("auth",["user"]),Object(r.c)("users",{users:"list"})),methods:n()({},Object(r.b)("messages",{createMessage:"create"}),Object(r.b)("users",{findUsers:"find"}),Object(r.b)("messages",{findMessages:"find"}),Object(r.b)("auth",["logout"])),created:function(){this.findMessages({query:{$sort:{createdAt:1},$limit:25}}),this.findUsers({query:{$sort:{email:1},$limit:25}})},components:{"c-user-list":i,"c-message-list":d}},h=(t(859),Object(c.a)(p,function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("main",{staticClass:"flex flex-column",attrs:{id:"chat"}},[e._m(0),e._v(" "),e.user?t("div",{staticClass:"flex flex-row flex-1 clear"},[t("c-user-list",{attrs:{users:e.users,logout:e.logout}}),e._v(" "),t("c-message-list",{attrs:{messages:e.messages,createMessage:e.createMessage}})],1):e._e()])},[function(){var e=this.$createElement,s=this._self._c||e;return s("header",{staticClass:"title-bar flex flex-row flex-center"},[s("div",{staticClass:"title-wrapper block center-element"},[s("span",{staticClass:"title"},[this._v("Chat")])])])}],!1,null,"2c5820ad",null));s.default=h.exports},859:function(e,s,t){"use strict";var a=t(138);t.n(a).a},860:function(e,s,t){"use strict";var a=t(139);t.n(a).a},861:function(e,s,t){"use strict";var a=t(140);t.n(a).a}}]);