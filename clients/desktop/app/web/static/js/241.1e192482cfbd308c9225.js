(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{1393:function(t,e,n){"use strict";n.r(e);n(59);var r=n(17),s={props:["product","editing"],components:{"c-game-plan":function(t){return n.e(209).then(function(){var e=[n(1300)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-screen-gallery":function(t){return n.e(208).then(function(){var e=[n(1296)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-promotion-box":function(t){return n.e(237).then(function(){var e=[n(1284)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-rating-block":function(t){return n.e(196).then(function(){var e=[n(1375)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-purchase-block":function(t){return n.e(236).then(function(){var e=[n(1282)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-frequently-traded-assets":function(t){return n.e(207).then(function(){var e=[n(1279)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-community-spotlight":function(t){return n.e(206).then(function(){var e=[n(1278)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-heading-bar":function(t){return Promise.resolve().then(function(){var e=[n(1439)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-review":function(t){return n.e(235).then(function(){var e=[n(1287)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-system-requirements":function(t){return n.e(234).then(function(){var e=[n(1288)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-language-support":function(t){return n.e(233).then(function(){var e=[n(1418)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-stream-item":function(t){return n.e(232).then(function(){var e=[n(1311)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-modal":function(t){return n.e(179).then(function(){var e=[n(1384)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-game-installer":function(t){return n.e(231).then(function(){var e=[n(1412)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-swiper":r.swiper,"c-slide":r.swiperSlide},data:function(){return{promotionSections:null,sliderOptions:{slidesPerView:4,spaceBetween:20,breakpoints:{1200:{slidesPerView:3,spaceBetween:20},768:{slidesPerView:1,spaceBetween:0}}},streamersList:8,showInstaller:!1}},methods:{showPurchaseModal:function(){this.$store.dispatch("application/activateModal","purchase")},showArrowsState:function(t,e){return t.length>e}},computed:{streamsSlider:function(){return this.$refs.streamsSlider.swiper},wishlist:function(){return this.$store.getters["application/identity"].productWishlist||{}},streams:function(){return this.product.streams},reviews:function(){return this.product.reviews},currentRelease:function(){var t=this;return this.product.releases&&this.product.releases.find(function(e){return t.product.currentVersion===e.version})},helpfulReviews:function(){if(!this.reviews)return[];var t=[];return this.reviews.forEach(function(e){e.helpful&&t.push(e)}),t},recentReviews:function(){if(!this.reviews)return[];var t=[];return this.reviews.forEach(function(e){e.recent&&t.push(e)}),t}}},i=(n(880),n(0)),c=Object(i.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-lg-8 col-xl-8"},[n("c-screen-gallery",{attrs:{items:[t.product.images.mediumTile].concat(t.product.images.preview),video_url:t.product.video}}),t._v(" "),t._l(t.promotionSections,function(e,r){return t.promotionSections?n("div",{key:r},[r?n("h3",{staticStyle:{"margin-top":"20px"}},[t._v(t._s(r))]):t._e(),t._v(" "),t._l(e,function(e,r){return t.product.promotions?n("c-promotion-box",{key:r,attrs:{title:e.title,price:e.price}}):t._e()})],2):t._e()}),t._v(" "),n("div",{staticClass:"overflow-hidden"},t._l(t.product.plans,function(t,e){return n("c-game-plan",{key:e,attrs:{plan:t}})})),t._v(" "),t.editing?t._e():n("div",{staticClass:"main-content",domProps:{innerHTML:t._s(t.product.content)}},[t._v("\n            "+t._s(t.product.content)+"\n        ")]),t._v(" "),t.editing?n("div",{staticClass:"content-editor"},[n("div",{attrs:{id:"summernote"},domProps:{innerHTML:t._s(t.product.content)}},[t._v(t._s(t.product.content))])]):t._e()],2),t._v(" "),n("div",{staticClass:"col-12 col-lg-4 col-xl-4"},[n("c-purchase-block",{staticClass:"margin-bottom-15",attrs:{isUnavailable:!t.currentRelease,price:t.product.price,tags:["New"],onClickPurchase:t.showPurchaseModal,inWishlist:!!t.wishlist[t.product.id],inShortcut:t.$store.state.application.shortcuts.find(function(e){return e.id=="product"+t.product.id}),releaseDate:t.product.releaseDate,playLink:t.currentRelease&&t.currentRelease.play_link},on:{addToWishlist:function(e){t.$store.dispatch("community/updateWishlist",["product",t.product.id])},addToShortcut:function(e){t.$store.commit("application/updateShortcut",{id:"product"+t.product.id,type:"product",text:t.product.name,link:"#/product/"+t.product.id,image:t.product.images.mediumTile})}}}),t._v(" "),n("c-button",{attrs:{iconHide:"",hidden:""},on:{click:function(e){t.showInstaller=!t.showInstaller}}},[t._v("Open installer")]),t._v(" "),n("c-rating-block",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"RATINGS",expression:"'RATINGS'"}],staticClass:"margin-bottom-20",attrs:{items:t.product.rating,parent_url:"#/product/"+t.product.id}}),t._v(" "),n("c-frequently-traded-assets",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"ASSETS",expression:"'ASSETS'"}],staticClass:"margin-bottom-20",attrs:{items:t.product.frequentlyTradedAssets,assetsUrl:"#/product/"+t.product.id+"/assets"}}),t._v(" "),n("c-community-spotlight",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"COMMUNITY",expression:"'COMMUNITY'"}],staticClass:"margin-bottom-20",attrs:{discussions:t.product.community.discussions,communityUrl:"#/product/"+t.product.id+"/community"}}),t._v(" "),n("c-system-requirements",{staticClass:"margin-bottom-20",attrs:{requirements:t.product.systemRequirements}}),t._v(" "),n("c-language-support",{attrs:{languages:t.product.languageSupport}})],1),t._v(" "),n("div",{staticClass:"col-12"},[n("c-block",{ref:"streamsSlider",staticClass:"margin-top-30 margin-bottom-20",attrs:{title:"TWITCH STREAMS - "+t.product.name,noGutter:!0,bgGradient:!0,onlyContentBg:!0,showArrows:!0,showBackground:!0},on:{prevClick:function(e){t.streamsSlider.slidePrev()},nextClick:function(e){t.streamsSlider.slideNext()}}},[t.streams?n("c-swiper",{attrs:{options:t.sliderOptions}},t._l(t.streams,function(e,r){return n("c-slide",{key:r},[n("c-stream-item",{attrs:{streamGame:t.product.name,streamName:e.userName,streamAvatar:e.userAvatar,streamImg:e.previews,streamSrc:e.src,streamViews:e.views}})],1)})):n("div",{staticClass:"h5"},[t._v("\n                Twitch streams were not found.\n            ")])],1)],1),t._v(" "),n("div",{staticClass:"col-12"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("c-heading-bar",{attrs:{name:"Reviews",showArrows:!0,showBackground:!1}})],1),t._v(" "),t.helpfulReviews.length||t.recentReviews.length?t._e():n("div",{staticClass:"col-12 h5"},[t._v("\n                No reviews found.\n            ")]),t._v(" "),t.helpfulReviews.length?n("div",{staticClass:"col-md-6 col-12"},[n("h3",{staticClass:"margin-vertical-20"},[t._v("Most helpful")]),t._v(" "),t._l(t.helpfulReviews,function(t,e){return n("c-review",{key:e,attrs:{review:t}})})],2):t._e(),t._v(" "),t.recentReviews.length?n("div",{staticClass:"col-md-6 col-12"},[n("h3",{staticClass:"margin-vertical-20"},[t._v("Most recent")]),t._v(" "),t._l(t.recentReviews,function(t,e){return n("c-review",{key:e,attrs:{review:t}})})],2):t._e()])]),t._v(" "),t.showInstaller?n("c-modal",{attrs:{title:t.product.name},on:{close:function(e){t.showInstaller=!1}}},[n("c-game-installer",{attrs:{slot:"body",product:t.product},on:{cancel:function(e){t.showInstaller=!1}},slot:"body"})],1):t._e()],1)},[],!1,null,null,null);e.default=c.exports},251:function(t,e){},880:function(t,e,n){"use strict";var r=n(251);n.n(r).a}}]);