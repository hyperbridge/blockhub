(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1012:function(e,t,n){"use strict";var s=n(267);n.n(s).a},1553:function(e,t,n){"use strict";n.r(t);var s=n(25),i=n.n(s),a=n(3),c=n.n(a),r=n(23),l={components:{"c-searcher":function(e){return n.e(10).then(function(){var t=[n(1768)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-input-searcher":function(e){return Promise.resolve().then(function(){var t=[n(1616)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-game-grid":function(e){return n.e(26).then(function(){var t=[n(1777)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-project-card":function(e){return n.e(24).then(function(){var t=[n(1794)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-option-tag":function(e){return n.e(241).then(function(){var t=[n(1676)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-range-slider":function(e){return n.e(222).then(function(){var t=[n(1734)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-list":function(e){return n.e(227).then(function(){var t=[n(1677)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-content-navigation":function(e){return n.e(13).then(function(){var t=[n(1806)];e.apply(null,t)}.bind(this)).catch(n.oe)}},mixins:[n(29).b],data:function(){return{tags:[{value:"featured",selected:!1},{value:"new",selected:!1},{value:"sale",selected:!1},{value:"specials",selected:!1},{value:"topSeller",selected:!1},{value:"trending",selected:!1},{value:"upcoming",selected:!1}],phrase:"",results:[],loading:!1,selectableTags:[],selectableLanguages:[],price:{min:0,max:0},expandFilters:!0,timeout2:0,communitySize:0,activeUsers:0,platforms:[{prop:"win",icon:"windows",name:"Windows",selected:!1},{prop:"mac",icon:"apple",name:"macOS",selected:!1},{prop:"linux",icon:"linux",name:"Linux",selected:!1}]}},methods:{search:function(){var e=this;this.debounce(function(){e.loading||(e.loading=!0),e.loading=!0,e.filtersActive?e.debounce(function(){window.BlockHub.WebClient.service("/search").find({query:e.query}).then(function(t){e.results=t.projects.data,e.loading=!1}).catch(function(t){e.results=[],e.loading=!1})},250,"timeout2"):(e.loading=!1,e.results=e.products),e.$router.replace({name:"Search",query:e.urlQuery})},500)},clearFilters:function(){var e=this.phrase,t=this.selectedTags,n=this.selectedGenres,s=this.selectedLanguages,i=this.price,a=this.communitySize,c=this.activeUsers,r=this.selectedPlatforms;e.length&&(this.phrase=""),t.length&&this.selectedTags.forEach(function(e){return e.selected=!1}),n.length&&this.selectedGenres.forEach(function(e){return e.selected=!1}),s.length&&this.selectedLanguages.forEach(function(e){return e.selected=!1}),(i.min||i.max)&&(this.price.min=0,this.price.max=0),(a||c)&&(this.communitySize=0,this.activeUsers=0),r.length&&this.selectedPlatforms.forEach(function(e){return e.selected=!1})}},computed:c()({},Object(r.c)({getProductsQuery:"marketplace/getProductsQuery",products:"marketplace/productsArray",productsTags:"marketplace/productsTags",languages:"marketplace/productsLanguages"}),{query:function(){var e=this.phrase,t=this.selectedTags,n=this.selectedGenres,s=(this.selectedLanguages,this.price),i=this.communitySize,a=this.activeUsers,c={};return e.length&&(c.name={$eq:e}),t.length&&(c.tags={$contains:t.map(function(e){return e.value})}),n.length&&(c.genres={$contains:n.map(function(e){return e.name})}),(s.min||s.max)&&(c.price={$between:[s.min,300|s.max]}),i&&(c.communitySize={$between:[i,999999999]}),a&&(c.activeUsers={$between:[a,999999999]}),c},resultsFiltered:function(){var e=this.selectedLanguagesNames,t=this.selectedPlatformsNames;return this.results.filter(function(t){return!e.length||t.languageSupport.filter(function(t){return e.includes(t.name)}).length}).filter(function(e){return!t.length||e.systemRequirements.filter(function(e){return t.includes(e.os)}).length})},selectedGenres:function(){return this.selectableTags.filter(function(e){return e.selected})},selectedTags:function(){return this.tags.filter(function(e){return e.selected})},selectedLanguages:function(){return this.selectableLanguages.filter(function(e){return e.selected})},selectedLanguagesNames:function(){return this.selectedLanguages.map(function(e){return e.name})},selectedPlatforms:function(){return this.platforms.filter(function(e){return e.selected})},selectedPlatformsNames:function(){return this.selectedPlatforms.map(function(e){return e.prop})},filtersActive:function(){return!!(this.selectedGenres.length||this.phrase.length||this.selectedTags.length||this.price.max||this.price.min||this.selectedLanguages.length||this.communitySize||this.activeUsers||this.selectedPlatforms.length)},urlQuery:function(){var e={},t=this.phrase,n=this.selectedTags,s=this.selectedGenres,i=this.selectedLanguages,a=this.price,c=this.communitySize,r=this.activeUsers,l=this.selectedPlatforms;return t.length&&(e.name=t),a.min&&(e.priceMin=a.min),a.max&&(e.priceMax=a.max),n.length&&(e.specials=n.map(function(e){return e.value})),s.length&&(e.tags=s.map(function(e){return e.name})),i.length&&(e.langs=this.selectedLanguagesNames),c&&(e.communitySize=c),r&&(e.activeUsers=r),l.length&&(e.platforms=this.selectedPlatformsNames),e}}),mounted:function(){if(i()(this.$route.query).length){this.loading=!0;var e=this.$route.query,t=e.tags,n=e.langs,s=e.name,a=e.priceMin,c=e.priceMax,r=e.specials,l=e.showFilters,o=e.activeUsers,u=e.communitySize,d=e.platforms;s&&(this.phrase=s),a&&(this.price.min=a),c&&(this.price.max=c),this.selectableTags=this.productsTags.map(function(e){return{name:e,selected:t&&t.includes(e)}}),this.selectableLanguages=this.languages.map(function(e){return{name:e,selected:!(!n||!n.includes(e))}}),l&&(this.expandFilters=!0),o&&(this.activeUsers=o),u&&(this.communitySize=u),d&&this.platforms.forEach(function(e){d.includes(e.prop)&&(e.selected=!0)}),r&&this.tags.forEach(function(e){r.includes(e.value)&&(e.selected=!0)})}else this.results=this.products},watch:{urlQuery:{handler:"search",deep:!0}},filters:{replaceLoDash:function(e){return e.replace(/_/g," ")}}},o=(n(1012),n(0)),u=Object(o.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("c-layout",[n("template",{slot:"left-sidebar"},[n("div",{staticClass:"navigation container",attrs:{id:"navigation-default"}},[n("h3",[e._v("\n                SEARCH\n            ")]),e._v(" "),n("div",{staticClass:"search__main"},[n("c-input-searcher",{staticClass:"w-100",attrs:{placeholder:"Search for games","aria-placeholder":"Search for games"},model:{value:e.phrase,callback:function(t){e.phrase=t},expression:"phrase"}})],1),e._v(" "),n("transition",{attrs:{name:"slide-in-top"}},[e.expandFilters?n("div",{staticClass:"search-filters__container"},[n("div",{staticClass:"filter-box"},[n("h4",[e._v("\n                            Specials:\n                            "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.selectedTags.length,expression:"selectedTags.length"}]},[e._v("\n                                ("+e._s(e.selectedTags.length)+")\n                            ")])]),e._v(" "),e._l(e.tags,function(t,s){return n("c-checkbox",{key:s,attrs:{id:"specials-"+t.value},model:{value:t.selected,callback:function(n){e.$set(t,"selected",n)},expression:"tag.selected"}},[e._v("\n                            "+e._s(e._f("upperFirstChar")(e._f("replaceLoDash")(t.value)))+"\n                        ")])})],2),e._v(" "),n("div",{staticClass:"filter-box"},[n("h4",[e._v("\n                            Price range:\n                            "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.price.min&&e.price.max,expression:"price.min && price.max"}]},[e._v("\n                                ("+e._s(e.price.min)+" - "+e._s(e.price.max)+")\n                            ")])]),e._v(" "),n("p",{staticClass:"margin-top-20"},[e._v("Minimum:")]),e._v(" "),n("c-range-slider",{attrs:{min:0,max:60},model:{value:e.price.min,callback:function(t){e.$set(e.price,"min",e._n(t))},expression:"price.min"}}),e._v(" "),n("p",{staticClass:"margin-top-20"},[e._v("Maximum:")]),e._v(" "),n("c-range-slider",{attrs:{max:300},model:{value:e.price.max,callback:function(t){e.$set(e.price,"max",e._n(t))},expression:"price.max"}})],1),e._v(" "),n("div",{staticClass:"filter-box"},[n("h4",[e._v("\n                            Genres:\n                            "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.selectedGenres.length,expression:"selectedGenres.length"}]},[e._v("\n                                ("+e._s(e.selectedGenres.length)+")\n                            ")])]),e._v(" "),n("c-list",{attrs:{items:e.selectableTags},on:{click:function(e){return e.selected=!e.selected}}})],1),e._v(" "),n("div",{staticClass:"filter-box"},[n("h4",[e._v("\n                            Languages:\n                            "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.selectedLanguages.length,expression:"selectedLanguages.length"}]},[e._v("\n                                ("+e._s(e.selectedLanguages.length)+")\n                            ")])]),e._v(" "),n("div",[n("c-list",{attrs:{items:e.selectableLanguages},on:{click:function(e){return e.selected=!e.selected}}})],1)]),e._v(" "),n("div",{staticClass:"filter-box"},[n("h4",[e._v("Community:")]),e._v(" "),n("p",{staticClass:"margin-top-20"},[e._v("Size:")]),e._v(" "),n("c-range-slider",{attrs:{max:1e3},model:{value:e.communitySize,callback:function(t){e.communitySize=e._n(t)},expression:"communitySize"}}),e._v(" "),n("p",{staticClass:"margin-top-20"},[e._v("Active Users:")]),e._v(" "),n("c-range-slider",{attrs:{max:5e3},model:{value:e.activeUsers,callback:function(t){e.activeUsers=e._n(t)},expression:"activeUsers"}})],1),e._v(" "),n("div",{staticClass:"filter-box"},[n("h4",[e._v("System:")]),e._v(" "),e._l(e.platforms,function(t){return n("c-checkbox",{key:t.prop,attrs:{id:"specials-"+t.prop},model:{value:t.selected,callback:function(n){e.$set(t,"selected",n)},expression:"os.selected"}},[n("c-icon",{staticClass:"platform-icon",class:[t.selected?"icon--active":"icon--inactive"],attrs:{cat:"fab",name:t.icon}}),e._v("\n                            "+e._s(t.name)+"\n                        ")],1)})],2)]):e._e()])],1)]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("transition",{attrs:{name:"slide-in-top"}},[e.filtersActive?n("div",{staticClass:"active-filters"},[n("div",{staticClass:"active-filters__content"},[e.phrase.length?n("c-option-tag",{attrs:{title:"NAME:",text:e.phrase},on:{delete:function(t){e.phrase=""}}}):e._e(),e._v(" "),e.selectedGenres.length?n("c-option-tag",{attrs:{title:"GENRES:"},on:{delete:function(t){e.selectedGenres.forEach(function(e){return e.selected=!1})}}},e._l(e.selectedGenres,function(e,t){return n("c-option-tag",{key:t,attrs:{text:e.name,isChildren:""},on:{delete:function(t){e.selected=!1}}})})):e._e(),e._v(" "),e.selectedTags.length?n("c-option-tag",{attrs:{title:"SPECIALS:"},on:{delete:function(t){e.selectedTags.forEach(function(e){return e.selected=!1})}}},e._l(e.selectedTags,function(t,s){return n("c-option-tag",{key:s,attrs:{text:e._f("upperFirstChar")(e._f("replaceLoDash")(t.value)),isChildren:""},on:{delete:function(e){t.selected=!1}}})})):e._e(),e._v(" "),e.price.min>0||e.price.max>0?n("c-option-tag",{attrs:{title:"PRICE RANGE:"},on:{delete:function(t){e.price.min=0,e.price.max=0}}},[e.price.min?n("c-option-tag",{attrs:{title:"Minimum:",text:e.price.min,isChildren:""},on:{delete:function(t){e.price.min=0}}}):e._e(),e._v(" "),e.price.max?n("c-option-tag",{attrs:{title:"Maximum:",text:e.price.max,isChildren:""},on:{delete:function(t){e.price.max=0}}}):e._e()],1):e._e(),e._v(" "),e.selectedLanguages.length?n("c-option-tag",{attrs:{title:"LANGUAGES:"},on:{delete:function(t){e.selectableLanguages.forEach(function(e){return e.selected=!1})}}},e._l(e.selectedLanguages,function(e,t){return n("c-option-tag",{key:t,attrs:{text:e.name,isChildren:""},on:{delete:function(t){e.selected=!1}}})})):e._e(),e._v(" "),e.communitySize||e.activeUsers?n("c-option-tag",{attrs:{title:"COMMUNITY:"},on:{delete:function(t){e.communitySize=0,e.activeUsers=0}}},[e.communitySize?n("c-option-tag",{attrs:{title:"Size:",text:e.communitySize,isChildren:""},on:{delete:function(t){e.communitySize=0}}}):e._e(),e._v(" "),e.activeUsers?n("c-option-tag",{attrs:{title:"Active users:",text:e.activeUsers,isChildren:""},on:{delete:function(t){e.activeUsers=0}}}):e._e()],1):e._e(),e._v(" "),e.selectedPlatforms.length?n("c-option-tag",{attrs:{title:"PLATFORMS:"},on:{delete:function(t){e.selectedPlatforms.forEach(function(e){return e.selected=!1})}}},e._l(e.selectedPlatforms,function(t,s){return n("c-option-tag",{key:s,attrs:{text:e._f("upperFirstChar")(t.name),isChildren:""},on:{delete:function(e){t.selected=!1}}})})):e._e(),e._v(" "),n("c-option-tag",{attrs:{title:"Clear All"},on:{delete:function(t){e.clearFilters()}}})],1)]):e._e()]),e._v(" "),n("c-content-navigation",{staticClass:"results__container row",attrs:{loading:e.loading,items:e.resultsFiltered,setItemsLimit:12,setItemsPerPage:12}},e._l(e.resultsFiltered,function(e,t){return n("div",{key:t,staticClass:"p-2 col-12 col-md-6 col-lg-4 col-xl-3"},[n("c-project-card",{staticClass:"p-0",attrs:{image:e.meta.images&&e.meta.images.mediumTile,description:e.description,funds:e.meta.funds,parentName:e.product&&e.product.name,parentDeveloper:e.product&&e.product.developer,parentImage:e.product&&e.product.meta.images.mediumTile,id:e.id}})],1)}))],1)])],2)},[],!1,null,"0ca0c247",null);t.default=u.exports},267:function(e,t){}}]);