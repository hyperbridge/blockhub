(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1068:function(e,t,s){"use strict";var i=s(315);s.n(i).a},1592:function(e,t,s){"use strict";s.r(t);var i={components:{"c-idea-card":function(e){return s.e(306).then(function(){var t=[s(1760)];e.apply(null,t)}.bind(this)).catch(s.oe)}},created:function(){this.$store.dispatch("ideas/find",{query:{$sort:{createdAt:-1},$limit:25}})},computed:{ideas:function(){return this.$store.getters["ideas/list"]},list:function(){var e=[];return e.push({type:"trendingProjectsRow",data:{title:"Trending Ideas",options:{slidesPerView:3,spaceBetween:15,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},projects:this.$store.state.funding.trendingProjects||[]}}),e.push({type:"trendingProjectsRow",data:{title:"Most Popular Ideas",options:{slidesPerView:3,spaceBetween:15,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},projects:this.$store.state.funding.trendingProjects||[]}}),e.push({type:"trendingProjectsRow",data:{title:"Top Game Ideas",options:{slidesPerView:3,spaceBetween:15,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},projects:this.$store.state.funding.topGameIdeas||[]}}),e.push({type:"trendingProjectsRow",data:{title:"Top Content Ideas",options:{slidesPerView:3,spaceBetween:15,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},projects:this.$store.state.funding.topContentIdeas||[]}}),e.push({type:"trendingProjectsRow",data:{title:"Top Item Ideas",options:{slidesPerView:3,spaceBetween:15,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},projects:this.$store.state.funding.topItemIdeas||[]}}),e}}},a=(s(1068),s(0)),n=Object(a.a)(i,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("c-layout",{attrs:{navigationKey:"idea"}},[s("div",{staticClass:"row"},[e.$store.state.application.settings.client.hide_crowdfund_game_notice?e._e():s("div",{staticClass:"crowdfund-notice col-12 col-md-6 offset-md-3",staticStyle:{"text-align":"center",width:"100%","margin-top":"30px","margin-bottom":"30px",padding:"20px",border:"3px dashed rgba(0,0,0,0.1)","border-radius":"7px",background:"rgba(0,0,0,0.2)"}},[s("c-button",{staticClass:"btn-close",on:{click:function(t){e.$store.commit("application/updateClientSettings",{key:"hide_crowdfund_game_notice",value:!0})}}},[s("i",{staticClass:"fas fa-times"})]),e._v(" "),s("h2",[e._v("Create Idea")]),e._v(" "),s("div",{staticStyle:{"text-align":"left"}},[s("p",[e._v("Got ideas for your favorite game? We're here to help.")]),e._v(" "),s("p",[e._v("Want to inspire your favourite dev studio to continue a series? Let's do it.")]),e._v(" "),s("p",[e._v("Maybe some day we'll get a Half-life 3 or HL2 Episode 3.")])]),e._v(" "),s("br"),e._v(" "),s("p",[s("c-button",{staticClass:"c-button--lg outline-white",attrs:{to:"/idea/new"}},[e._v("Get Started")])],1)],1)]),e._v(" "),s("c-block",{attrs:{noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[s("c-heading-bar",{staticClass:"mb-0",attrs:{slot:"title",name:"Browse All Ideas"},slot:"title"}),e._v(" "),s("div",{staticClass:"row"},[s("c-loading",{attrs:{enabled:!e.ideas.length,size:"lg"}}),e._v(" "),e._l(e.ideas,function(e,t){return s("c-idea-card",{key:t,staticClass:"p-2 col-3",attrs:{description:e.description,parentName:e.name,parentDeveloperId:e.meta.owner&&e.meta.owner.id,parentDeveloperName:e.meta.owner&&e.meta.owner.name,id:e.id}})})],2)],1),e._v(" "),s("c-infinite-content",{attrs:{list:e.list}})],1)},[],!1,null,"46fc1f1a",null);t.default=n.exports},315:function(e,t){}}]);