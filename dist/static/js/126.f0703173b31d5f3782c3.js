(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{1172:function(t,e,s){"use strict";var a=s(397);s.n(a).a},1436:function(t,e,s){"use strict";s.r(e);var a=s(10),o=s.n(a),r=s(2),i=s.n(r),l=s(25),c=function(){var t=this.$store.state.marketplace.frontpage_product;if(t&&t.images){var e=window.document.getElementById("header-bg"),s=Math.floor(Math.random()*t.images.preview.length);e.style["background-image"]="url("+t.images.preview[s]+")",e.style["background-size"]="cover"}},n={components:{"c-banner":function(t){return s.e(20).then(function(){var e=[s(1334)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-custom-modal":function(t){return s.e(179).then(function(){var e=[s(1313)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-download-block":function(t){return s.e(14).then(function(){var e=[s(1277)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-welcome-box":function(t){return s.e(181).then(function(){var e=[s(1287)];t.apply(null,e)}.bind(this)).catch(s.oe)}},data:function(){return{showWelcomeModal:["preview","staging","local"].includes(this.$store.state.application.environment_mode)&&!this.$store.state.application.account.settings.client.hide_welcome_modal}},computed:i()({},Object(l.c)({assets:"marketplace/assetsArray"}),{list:function(){var t=this,e=[];this.$store.state.marketplace.frontpage_product&&this.$store.state.marketplace.frontpage_product.id&&e.push({type:"frontpage_product",data:this.$store.state.marketplace.frontpage_product}),this.$store.state.marketplace.featured_products.length&&e.push({type:"featured_product_gallery",data:{title:"Featured",ref:"featured_product_gallery_sl",swiper:this.$refs.featured_product_gallery_sl&&this.$refs.featured_product_gallery_sl.swiper,products:this.$store.state.marketplace.featured_products,slides:[{image:{src:this.$store.state.marketplace.featured_products[0].images.preview[0],position:"center"},logo:{src:this.$store.state.marketplace.featured_products[0].images.icon,position:"left bottom",size:"lg"},title:this.$store.state.marketplace.featured_products[0].name,buttonText:"Check it out",id:this.$store.state.marketplace.featured_products[0].id},{image:{src:this.$store.state.marketplace.featured_products[1].images.preview[0],position:"center"},logo:{src:this.$store.state.marketplace.featured_products[1].images.icon,position:"left bottom",size:"lg"},title:this.$store.state.marketplace.featured_products[1].name,buttonText:"Check it out",id:this.$store.state.marketplace.featured_products[1].id},{image:{src:this.$store.state.marketplace.featured_products[2].images.preview[0],position:"center"},logo:{src:this.$store.state.marketplace.featured_products[2].images.icon,position:"left bottom",size:"lg"},title:this.$store.state.marketplace.featured_products[2].name,buttonText:"Check it out",id:this.$store.state.marketplace.featured_products[2].id}]}}),e.push({type:"collections_list",data:{collections_list:Array.isArray(this.$store.state.marketplace.collections)?this.$store.state.marketplace.collections:o()(this.$store.state.marketplace.collections),ref:"collections_sl",swiper:this.$refs.collections_sl&&this.$refs.collections_sl.swiper}}),e.push({type:"product_slider",data:{title:"New Releases",slidesPerView:3,products:this.$store.state.marketplace.new_products}}),e.push({type:"banners",data:{banners:[{type:3,class:"col-12 col-md-7 col-lg-8",image:"/static/img/banners/banner-3.png",title:"Item Marketplace",subtitle:"All-in-one spot for games assets",buttonText:"GAME ON",link:"/#/marketplace"},{type:4,class:"col-12 col-md-5 col-lg-7",image:"/static/img/banners/banner-4.png",title:"Top Collections",subtitle:"Our community has curated the best ones for you",link:"/#/collections"}]}}),e.push({type:"games_explorer",data:{}}),e.push({type:"product_slider",data:{title:"Summer Sale",slidesPerView:3,products:this.$store.state.marketplace.sale_products}}),e.push({type:"asset_grid",data:{assets:this.assets}}),e.push({type:"curator_reviews",data:{title:"From our curators",ref:"curator_reviews_sl",swiper:this.$refs.curator_reviews_sl&&this.$refs.curator_reviews_sl.swiper,options:{slidesPerView:3,spaceBetween:0,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},reviews:this.$store.state.marketplace.curator_reviews}});var s=function(t,e){return t.reduce(function(t,s){return s[e]?((t[s[e]]=t[s[e]]||[]).push(s),t):t},{})||null};return e.push({type:"product_news",data:{headings:o()(s(this.$store.state.marketplace.posts,"target_id")).map(function(e){if("product"===e[0].target_type){var s=t.$store.state.marketplace.products[e[0].target_id];return{image:s.images.medium_tile,title:s.name,developer:s.developer}}}),lists:o()(s(this.$store.state.marketplace.posts,"target_id"))}}),e.push({type:"trending_projects_row",data:{title:"Trending Crowdfunds",options:{slidesPerView:3,spaceBetween:15,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},projects:this.$store.state.funding.trending_projects}}),e.push({type:"game_series",data:{list:this.$store.state.marketplace.game_series,showNumber:3}}),e}}),methods:{closeModal:function(){this.showWelcomeModal=!1,this.$store.commit("application/UPDATE_CLIENT_SETTINGS","hide_welcome_modal",!0)}},mounted:function(){c.call(this)},created:function(){c.call(this)},beforeDestroy:function(){window.document.getElementById("header-bg").style["background-image"]="url(/static/img/backgrounds/1.jpg)"}},d=(s(1172),s(0)),p=Object(d.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("c-layout",{attrs:{navigationKey:"store"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 mb-4"},[s("c-banner",{attrs:{imgSrc:"/static/img/banners/banner-3.png",link:"/#/token"}},[s("div",{staticClass:"d-flex justify-content-between align-items-center"},[s("div",[s("h3",{staticClass:"text-yellow"},[t._v("Launch Sale")]),t._v(" "),s("p",[t._v("BlockHub will begin selling the HBX token on November 10, 2018")])]),t._v(" "),s("div",{staticClass:"banner-action"},[s("c-button",{attrs:{tag:"div",tatus:"info",icon_hide:"",size:"lg",href:"/#/token"}},[t._v("JOIN NOW")])],1)])])],1)]),t._v(" "),s("div",{staticClass:"row"},[t.$store.state.application.desktop_mode?t._e():s("div",{staticClass:"col-12 mb-4"},[s("c-welcome-box")],1)]),t._v(" "),s("c-infinite-content",{attrs:{list:t.list}}),t._v(" "),t.showWelcomeModal?s("c-custom-modal",{attrs:{title:"BlockHub Preview"},on:{close:t.closeModal}},[s("div",{staticClass:"help-modal__content",staticStyle:{"max-width":"500px"},attrs:{slot:"modal_body"},slot:"modal_body"},[s("h4",{staticClass:"h2 mb-3"},[t._v("Welcome")]),t._v(" "),s("p",[t._v("Welcome to the the nightly BlockHub Preview Build. All features are enabled, with or without bugs. Gotta catch 'em all! 🐛")]),t._v(" "),s("p",[t._v("These features are still in active development, and may not functional properly and may not make it into production.")]),t._v(" "),s("p",[t._v("Thanks for visiting and joining us on the journey to a decentralized future!")]),t._v(" "),s("p",{attrs:{hidden:""}},[t._v("We're a platform built by the community, for the community.")]),t._v(" "),s("p",{attrs:{hidden:""}},[s("a",{attrs:{href:"/#/help",target:"_blank"}},[t._v("Check out the BlockHub crowdfund")])])]),t._v(" "),s("div",{staticClass:"text-right w-100",attrs:{slot:"modal_footer"},slot:"modal_footer"},[s("c-button",{attrs:{size:"md"},on:{click:t.closeModal}},[t._v("Got it")])],1)]):t._e()],1)},[],!1,null,null,null);e.default=p.exports},397:function(t,e){}}]);