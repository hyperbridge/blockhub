(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{1078:function(t,i,c){"use strict";var s=c(303);c.n(s).a},1409:function(t,i,c){"use strict";c.r(i);var s=c(10),a=c.n(s),e={props:["id"],components:{"c-article-item":function(t){return c.e(177).then(function(){var i=[c(1262)];t.apply(null,i)}.bind(this)).catch(c.oe)},"c-topic-item":function(t){return c.e(160).then(function(){var i=[c(1258)];t.apply(null,i)}.bind(this)).catch(c.oe)},"c-list-item":function(t){return c.e(176).then(function(){var i=[c(1253)];t.apply(null,i)}.bind(this)).catch(c.oe)},"c-card":function(t){return c.e(175).then(function(){var i=[c(1248)];t.apply(null,i)}.bind(this)).catch(c.oe)}},data:function(){return{showArticles:!1,topic_id:(void 0).id}},methods:{showByTopic:function(t){for(var i=[],c=a()(this.$store.state.marketplace.help.topics[t].articles||[]),s=0;s<c.length;s++)i.push(this.$store.state.marketplace.help.articles[c[s]]);return i}},computed:{topic:function(){return this.$store.state.marketplace.help.topics[this.id]},articles:function(){return this.$store.state.marketplace.help.articles}}},o=(c(1078),c(0)),n=Object(o.a)(e,function(){var t=this,i=t.$createElement,c=t._self._c||i;return c("c-layout",{attrs:{navigationKey:"help"}},[t.topic?t._e():c("div",{staticClass:"row margin-bottom-30"},[c("div",{staticClass:"col-12"},[c("c-card",{staticClass:"text-center"},[c("p",[t._v("Oh no! That topic was not found!")])])],1)]),t._v(" "),t.topic?c("div",{staticClass:"row"},[c("div",{staticClass:"col-12"},[c("h3",{staticClass:"topic-ttl margin-bottom-30"},[c("i",{class:["fas fa-"+t.topic.icon]}),t._v("\n                    "+t._s(t.topic.label)+"\n                ")]),t._v(" "),t.topic.sub_topics?c("c-block",{staticClass:"margin-bottom-30 padding-top-5 padding-bottom-5"},[c("div",{staticClass:"topics-list"},t._l(t.topic.sub_topics,function(i,s){return c("c-topic-item",{key:s,staticClass:"padding-10",attrs:{link:"/#/help/"+i.id,icon:i.icon}},[t._v("\n                            "+t._s(i.label)+"\n                        ")])}))]):t._e(),t._v(" "),c("c-block",{staticClass:"margin-bottom-30 padding-bottom-5"},[t.showByTopic(t.topic.id).length?c("div",{staticClass:"article-list"},t._l(t.showByTopic(t.topic.id),function(i,s){return c("c-article-item",{key:s,attrs:{link:"/#/help/"+t.topic.id+"/article/"+i.slug}},[t._v("\n                            "+t._s(i.title)+"\n                        ")])})):c("h3",[t._v("No articles yet")])])],1),t._v(" "),c("div",{staticClass:"col-12 col-lg-6 mb-4 mb-lg-0"},[c("c-card",{staticClass:"text-center"},[c("h4",{staticClass:"h2"},[t._v("Community")]),t._v(" "),c("p",[t._v("Engage with a community of passionate experts to get the answers you need")]),t._v(" "),c("c-button",{staticClass:"width-auto margin-top-10",attrs:{icon_hide:"",href:"https://github.com/hyperbridge/blockhub-desktop-client",target:"_blank"}},[t._v("Visit GitHub\n                    ")])],1)],1),t._v(" "),c("div",{staticClass:"col-12 col-lg-6 mb-4 mb-lg-0"},[c("c-card",{staticClass:"text-center"},[c("h4",{staticClass:"h2"},[t._v("BlockHub Support")]),t._v(" "),c("p",[t._v("Create a support ticket and our support experts will get back to you")]),t._v(" "),c("c-button",{staticClass:"width-auto margin-top-10",attrs:{href:"https://hyperbridge.zendesk.com/",status:"info",icon_hide:""}},[t._v("Create a ticket\n                    ")])],1)],1)]):t._e()])},[],!1,null,"906c141a",null);i.default=n.exports},303:function(t,i){}}]);