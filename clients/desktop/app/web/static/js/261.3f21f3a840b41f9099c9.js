(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{1404:function(t,a,s){"use strict";s.r(a);var i={name:"game-library-item",props:["game","isLoading","online","favorites"],data:function(){return{shareList:!1,active:!1}},components:{"c-dropdown":function(t){return s.e(200).then(function(){var a=[s(1285)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-share-list":function(t){return s.e(213).then(function(){var a=[s(1301)];t.apply(null,a)}.bind(this)).catch(s.oe)}},methods:{toggleList:function(){this.shareList=!this.shareList},activeMenu:function(){console.log(this.active),this.active=!this.active}},watch:{active:function(){this.active||(this.shareList=!1)}}},n=(s(820),s(0)),e=Object(n.a)(i,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"game-library__item",class:{"is-active":t.active}},[s("div",{staticClass:"item-img loading--w-spinner"},[s("c-img",{attrs:{src:t.game.images.mediumTile}}),t._v(" "),t.isLoading?s("div",{staticClass:"loader-block"},[s("div",{staticClass:"loading-spinner"})]):t._e()],1),t._v(" "),s("div",{staticClass:"item-name"},[t._v("\n        "+t._s(t.game.name)+"\n    ")]),t._v(" "),s("div",{staticClass:"item-action"},[t._m(0),t._v(" "),s("div",{staticStyle:{height:"20px",width:"20px","margin-right":"-5px"}},[s("c-dropdown",{class:{"no-right-border":t.shareList},on:{click:t.activeMenu}},[s("ul",{staticClass:"item-dropdown"},[s("li",[s("a",{attrs:{href:"#3"}},[s("i",{staticClass:"fas fa-list-alt"}),t._v("\n                            Add to Collection\n                        ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#3"}},[s("i",{staticClass:"fas fa-shopping-basket"}),t._v("\n                            Market page\n                        ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#3"}},[s("i",{staticClass:"fas fa-th"}),t._v("\n                            Inventory\n                        ")])]),t._v(" "),s("hr"),t._v(" "),s("li",{on:{click:t.toggleList}},[s("i",{staticClass:"fas fa-share"}),t._v("\n                        Share\n                        "),s("c-share-list",{staticClass:"in-dropdown",attrs:{onlineList:t.online,favoritesList:t.favorites,show:t.shareList}})],1),t._v(" "),s("li",[s("a",{attrs:{href:"#3"}},[s("i",{staticClass:"fas fa-link"}),t._v("\n                            Copy Link\n                        ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#3"}},[s("i",{staticClass:"fab fa-facebook"}),t._v("\n                            Share on Facebook\n                        ")])])])])],1)])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("span",{staticClass:"has-new"},[a("i",{staticClass:"fas fa-cog"})]),this._v(" "),a("span",[a("i",{staticClass:"fas fa-camera"})]),this._v(" "),a("span",[a("i",{staticClass:"fas fa-star"})]),this._v(" "),a("span",[a("i",{staticClass:"fas fa-play"})])])}],!1,null,"85eff89a",null);a.default=e.exports},191:function(t,a){},820:function(t,a,s){"use strict";var i=s(191);s.n(i).a}}]);