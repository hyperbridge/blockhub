(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1544:function(n,t,e){"use strict";e.r(t);var r=e(5),i=e.n(r),a=e(2),o=e.n(a),u=e(20),c=e.n(u),s=e(8),f=e.n(s),d=e(484),l=e(48),p=e(483),m=e(60),h=d.map(function(n){return o()({},n,{contractorOffer:n.contractorOffer.map(function(n){return m.find(function(t){return t.id==n})}),yourOffer:n.yourOffer.map(function(n){return m.find(function(t){return t.id==n})}),contractor:l.find(function(t){return t.id===n.contractor}),you:l.find(function(t){return t.id===n.you}),messages:n.messages.map(function(n){return p.find(function(t){return t.id==n})}).map(function(n){return o()({},n,{author:l.find(function(t){return t.id==n.author})})})})}),k=e(1),y=e.n(k),w={props:["profileId"],components:{"c-block-menu":function(n){return e.e(198).then(function(){var t=[e(1274)];n.apply(null,t)}.bind(this)).catch(e.oe)},"c-spinner":function(n){return e.e(217).then(function(){var t=[e(1379)];n.apply(null,t)}.bind(this)).catch(e.oe)}},data:function(){return{links:[{title:"Manager",to:"/marketplace/trade"},{title:"Explorer",to:{name:"Marketplace Trade Explorer"}},{title:"History",to:{name:"Marketplace Trade History"}},{title:"Settings",to:{name:"Marketplace Trade Settings"}}],results:[],isLoading:!0}},methods:{loadData:function(){var n=this;return f()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.isLoading=!0,t.next=3,new c.a(function(n){return setTimeout(n,2e3)});case 3:n.results=h.filter(function(t){return t.you.id==n.profileId}).map(function(n){return o()({},n,{createdAt:y()()})}),n.isLoading=!1;case 5:case"end":return t.stop()}},t,n)}))()}},watch:{profileId:{handler:"loadData",immediate:!0}}},g=(e(799),e(0)),v=Object(g.a)(w,function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("c-block-menu",{attrs:{links:this.links}},[this.isLoading?t("c-spinner"):t("router-view",{attrs:{transactions:this.results}})],1)],1)},[],!1,null,"b2cea86a",null);t.default=v.exports},170:function(n,t){},799:function(n,t,e){"use strict";var r=e(170);e.n(r).a}}]);