(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{1384:function(t,i,s){"use strict";var c=s(423);s.n(c).a},1532:function(t,i,s){"use strict";s.r(i);var c=s(8),a=s.n(c),e={props:["id"],components:{"c-article-item":function(t){return s.e(233).then(function(){var i=[s(1724)];t.apply(null,i)}.bind(this)).catch(s.oe)},"c-topic-item":function(t){return s.e(208).then(function(){var i=[s(1725)];t.apply(null,i)}.bind(this)).catch(s.oe)},"c-list-item":function(t){return s.e(232).then(function(){var i=[s(1726)];t.apply(null,i)}.bind(this)).catch(s.oe)},"c-card":function(t){return s.e(231).then(function(){var i=[s(1727)];t.apply(null,i)}.bind(this)).catch(s.oe)}},data:function(){return{showArticles:!1,topic_id:(void 0).id}},methods:{showByTopic:function(t){for(var i=[],s=a()(this.$store.state.marketplace.help.topics[t].articles||[]),c=0;c<s.length;c++)i.push(this.$store.state.marketplace.help.articles[s[c]]);return i}},computed:{topic:function(){return this.$store.state.marketplace.help.topics[this.id]},articles:function(){return this.$store.state.marketplace.help.articles}}},o=(s(1384),s(0)),n=Object(o.a)(e,function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("c-layout",{attrs:{navigationKey:"help"}},[t.topic?t._e():s("div",{staticClass:"row margin-bottom-30"},[s("div",{staticClass:"col-12"},[s("c-card",{staticClass:"text-center"},[s("p",[t._v("Oh no! That topic was not found!")])])],1)]),t._v(" "),t.topic?s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h3",{staticClass:"topic-ttl margin-bottom-30"},[s("i",{class:["fas fa-"+t.topic.icon]}),t._v("\n                "+t._s(t.topic.label)+"\n            ")]),t._v(" "),t.topic.subTopics?s("c-block",{staticClass:"margin-bottom-30 padding-top-5 padding-bottom-5"},[s("div",{staticClass:"topics-list"},t._l(t.topic.subTopics,function(i,c){return s("c-topic-item",{key:c,staticClass:"padding-10",attrs:{to:"/help/"+i.id,icon:i.icon}},[t._v("\n                        "+t._s(i.label)+"\n                    ")])}))]):t._e(),t._v(" "),s("c-block",{staticClass:"margin-bottom-30 padding-bottom-5"},[t.showByTopic(t.topic.id).length?s("div",{staticClass:"article-list"},t._l(t.showByTopic(t.topic.id),function(i,c){return s("c-article-item",{key:c,attrs:{to:"/help/"+t.topic.id+"/article/"+i.slug}},[t._v("\n                        "+t._s(i.title)+"\n                    ")])})):s("h3",[t._v("No articles yet")])])],1),t._v(" "),s("div",{staticClass:"col-12 col-lg-6 mb-4 mb-lg-0"},[s("c-card",{staticClass:"text-center"},[s("h4",{staticClass:"h2"},[t._v("Community")]),t._v(" "),s("p",[t._v("Engage with a community of passionate experts to get the answers you need")]),t._v(" "),s("c-button",{staticClass:"width-auto margin-top-10",attrs:{iconHide:"",href:"https://github.com/hyperbridge/blockhub-desktop-client",target:"_blank"}},[t._v("Visit GitHub\n                ")])],1)],1),t._v(" "),s("div",{staticClass:"col-12 col-lg-6 mb-4 mb-lg-0"},[s("c-card",{staticClass:"text-center"},[s("h4",{staticClass:"h2"},[t._v("BlockHub Support")]),t._v(" "),s("p",[t._v("Create a support ticket and our support experts will get back to you")]),t._v(" "),s("c-button",{staticClass:"width-auto margin-top-10",attrs:{href:"https://hyperbridge.zendesk.com/",status:"info",iconHide:""}},[t._v("Create a ticket\n                ")])],1)],1)]):t._e()])},[],!1,null,"882d5ab6",null);i.default=n.exports},423:function(t,i){}}]);