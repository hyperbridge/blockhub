(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1017:function(t,e,n){"use strict";var s=n(264);n.n(s).a},133:function(t,e){},264:function(t,e){},584:function(t,e,n){"use strict";n.r(e);var s={},r=(n(864),n(0)),o=Object(r.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("ul",{staticClass:"doted-list-container"},[this._t("default")],2)},[],!1,null,"6271eca6",null);e.default=o.exports},676:function(t,e,n){"use strict";n.r(e);var s=n(31),r=n.n(s),o=n(37),i=n.n(o),c=n(6),a=n(589),l=n(584),u={components:{"c-expand-block":function(t){return n.e(326).then(function(){var e=[n(1708)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-heading-bar-color":function(t){return Promise.resolve().then(function(){var e=[n(589)];t.apply(null,e)}.bind(this)).catch(n.oe)}},computed:{},data:function(){return{errors:[],updateExpanded:null,updates:[],entries:[]}},created:function(){var t=this;i()({method:"get",url:"https://spreadsheets.google.com/feeds/list/1Ndg4etkvLQZKeTcPfP1L1nJiMWn6UkwFd9RVSMcltp4/1/public/values?alt=json"}).then(function(e){t.entries=e.data.feed.entry;try{for(var n in t.entries){var s=t.entries[n],r=c.default.compile("<div>"+s.gsx$content.$t+"</div>");r=new c.default({components:{"c-heading-bar-color":a.default,"c-dotted-list":l.default},render:r.render,staticRenderFns:r.staticRenderFns}).$mount(),t.$store.state.application.updates.push({version:s.gsx$version.$t,title:s.gsx$title.$t,description:s.gsx$description.$t,content:r.$el.innerHTML})}}catch(t){console.log(t)}}).catch(function(e){t.errors.push("Could not contact update service. Please contact support with this error: "+r()(e))})}},d=(n(1017),n(0)),p=Object(d.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("c-layout",{attrs:{navigationKey:"help"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 mb-4"},[n("c-block",{attrs:{title:"Updates",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[t.errors.length?n("p",{staticClass:"errors"},[n("strong",[t._v("Please correct the following error(s):")]),t._v(" "),n("ul",t._l(t.errors,function(e){return n("li",{key:e},[t._v(t._s(e))])}))]):t._e(),t._v(" "),n("div",{staticClass:"row"},[n("c-loading",{attrs:{enabled:!this.$store.state.application.updates.length,size:"lg"}}),t._v(" "),t._l(this.$store.state.application.updates,function(t,e){return n("div",{key:e,staticClass:"col-md-6 col-sm-12"},[n("c-expand-block",{attrs:{title:t.title,description:t.description,content:t.content}})],1)})],2)])],1)])])},[],!1,null,"3079c7cd",null);e.default=p.exports},864:function(t,e,n){"use strict";var s=n(133);n.n(s).a}}]);