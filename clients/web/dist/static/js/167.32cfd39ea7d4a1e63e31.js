(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{1414:function(e,t,n){"use strict";var i=n(439);n.n(i).a},1800:function(e,t,n){"use strict";n.r(t);var i={props:{items:Array},components:{"c-grid":function(e){return n.e(368).then(function(){var t=[n(1844)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-icon":function(e){return n.e(273).then(function(){var t=[n(1656)];e.apply(null,t)}.bind(this)).catch(n.oe)}},data:function(){return{selected:null,fixedItems:[{r:null,g:null,b:null,image:"/static/img/icons/twitch.png",eventKey:"application/activateModal",eventValue:"connect-network",unread:!1,text:"Go to Twitch",sort:1,removable:!1},{r:null,g:null,b:null,image:"/static/img/icons/discord.png",eventKey:"application/activateModal",eventValue:"connect-network",unread:!1,text:"Go to Discord",sort:2,removable:!1},{r:null,g:null,b:null,image:"/static/img/icons/steam.png",eventKey:"application/activateModal",eventValue:"connect-network",unread:!1,text:"Go to BlockHub",sort:3,removable:!1},{r:null,g:null,b:null,image:"/static/img/icons/instagram.png",eventKey:"application/activateModal",eventValue:"connect-network",unread:!1,text:"Go to Instagram",sort:5,removable:!1},{r:null,g:null,b:null,image:"/static/img/icons/youtube.png",eventKey:"application/activateModal",eventValue:"connect-network",unread:!1,text:"Go to Youtube",sort:6,removable:!1}]}},methods:{showGrid:function(){},click:function(e){var t=e.items,n=e.index,i=t.find(function(e){return e.index===n});this.selected=i.item,console.log(this.selected)},change:function(e){console.log("change",e)},remove:function(e){this.$store.commit("application/removeShortcut",e.index)},sort:function(e){console.log("sort",e)}}},o=(n(1414),n(0)),c=Object(o.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"100%"}},[n("a",{staticClass:"shortcut-sidebar__grid",attrs:{href:"#",hidden:""},on:{click:function(t){return t.preventDefault(),e.showGrid(t)}}}),e._v(" "),n("c-grid",{attrs:{center:!1,draggable:!0,sortable:!0,items:e.items,fixedItems:e.fixedItems,cellWidth:50,cellHeight:65,gridWidth:200},on:{change:e.change,remove:e.remove,click:e.click,sort:e.sort},scopedSlots:e._u([{key:"cell",fn:function(e){return[n("c-icon",{attrs:{color:e.item,index:e.index,withButton:!0,image:e.item.image,text:e.item.text,href:e.item.href,to:e.item.to,eventKey:e.item.eventKey,eventValue:e.item.eventValue,textColor:e.item.textColor,icon:e.item.icon,removable:e.item.removable,unread:e.item.unread,percent:e.item.percent,active:e.item.active},on:{remove:function(t){e.remove()}}})]}}])})],1)},[],!1,null,"29d00b58",null);t.default=c.exports},439:function(e,t){}}]);