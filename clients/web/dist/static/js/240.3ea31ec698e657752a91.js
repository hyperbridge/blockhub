(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{1352:function(t,e,o){"use strict";o.r(e);var i={props:["product"],components:{"c-tags-list":function(t){return o.e(9).then(function(){var e=[o(1376)];t.apply(null,e)}.bind(this)).catch(o.oe)},"c-project-card":function(t){return o.e(23).then(function(){var e=[o(1322)];t.apply(null,e)}.bind(this)).catch(o.oe)}},computed:{projects:function(){return BlockHub.DB.funding.projects.find({targetId:{$eq:this.product.id}})||[]}}},s=(o(879),o(0)),n=Object(s.a)(i,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-12"},[o("div",{staticClass:"filter d-flex justify-content-between"},[t._m(0),t._v(" "),o("div",[t.developerMode?o("c-button",{attrs:{status:"info",iconHide:"",href:"#/project/new"}},[t._v("Propose Idea")]):t._e(),t._v(" "),t.developerMode?t._e():o("c-button",{attrs:{status:"info",iconHide:""},on:{click:function(e){t.$store.commit("application/activateModal","propose-idea")}}},[t._v("Propose Idea")])],1)])]),t._v(" "),o("div",{staticClass:"col-12"},[o("c-block",{attrs:{title:"Top 3 Ideas",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[o("div",{staticClass:"row"},[t.projects.length?o("div",{staticClass:"col-12 col-md-6 col-lg-3"},t._l(t.projects,function(e,i){return o("c-project-card",{key:i,staticClass:"margin-0 w-100",attrs:{image:e.images.mediumTile,description:e.description,funds:e.funds,name:e.name,developer:t.product.developer,id:e.id,showGame:!1}})})):o("div",{staticClass:"col-12"},[t._v("\n                    Nothing could be found. Want to "),o("c-button",{attrs:{status:"plain"},on:{click:function(e){t.$store.commit("application/activateModal","coming-soon")}}},[t._v("Check for updates")]),t._v("?\n                ")],1)])])],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("div",{staticClass:"input-group input-group-sm"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search","aria-label":"Search"}}),this._v(" "),e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text"},[e("i",{staticClass:"fas fa-search"})])])])])}],!1,null,"157108c4",null);e.default=n.exports},250:function(t,e){},879:function(t,e,o){"use strict";var i=o(250);o.n(i).a}}]);