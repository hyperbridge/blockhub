(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{1217:function(t,e,i){"use strict";var s=i(373);i.n(s).a},1388:function(t,e,i){"use strict";i.r(e);i(10);var s=i(17),o=(i(59),{components:{"c-swiper":s.swiper,"c-slide":s.swiperSlide,"c-user-card":function(t){return i.e(10).then(function(){var e=[i(1432)];t.apply(null,e)}.bind(this)).catch(i.oe)}},data:function(){return{options:{slidesPerView:3,spaceBetween:0,navigation:{nextEl:".profile-chooser__wrapper .swiper-button-next",prevEl:".profile-chooser__wrapper .swiper-button-prev"},breakpoints:{1024:{slidesPerView:2},768:{slidesPerView:1,spaceBetween:0}}}}},computed:{profiles:function(){for(var t in this.$store.state.application.account.profiles)this.$store.state.application.account.profiles[t].name||(this.$store.state.application.account.profiles[t].name="Default");return this.$store.state.application.account.profiles},currentProfile:function(){return this.$store.getters["application/profile"]}},methods:{closeProfileChooser:function(){this.$store.commit("application/showProfileChooser",!1)},setDefault:function(t){this.$store.commit("updateSingle",["application/account",{active_profile:t.id}]),this.$store.state.application.developer_mode=!!t.developer_id}}}),n=(i(1217),i(0)),r=Object(n.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"profile-chooser"},[i("div",{staticClass:"profile-chooser__overlay",on:{click:t.closeProfileChooser}}),t._v(" "),i("div",{staticClass:"profile-chooser__wrapper"},[i("div",{staticClass:"profile-chooser__content"},[i("c-heading-bar",{staticClass:"mb-0",attrs:{slot:"title",name:"Choose Profile",showBackground:!1},slot:"title"}),t._v(" "),i("div",{staticClass:"profile-slider"},[i("c-swiper",{attrs:{options:t.options}},t._l(t.profiles,function(e){return i("c-slide",{key:e.id},[i("div",{staticClass:"user-card__container-link",on:{click:function(i){t.setDefault(e)}}},[i("c-user-card",{class:{default:t.currentProfile&&e.id==t.currentProfile.id},attrs:{user:e,previewMode:!e.edit}})],1)])})),t._v(" "),i("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),i("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],1),t._v(" "),i("c-heading-bar",{staticClass:"mb-0",attrs:{slot:"title",name:"",showBackground:!1},slot:"title"}),t._v(" "),i("div",{staticClass:"profile-chooser__actions"},[i("c-button",{staticClass:"profile-chooser__back-button c-btn-lg outline-white",on:{click:t.closeProfileChooser}},[t._v("Back")]),t._v(" "),i("c-button",{staticClass:"profile-chooser__ok-button c-btn-lg outline-white",on:{click:t.closeProfileChooser}},[t._v("OK")])],1)],1)])])},[],!1,null,"961e35e0",null);e.default=r.exports},373:function(t,e){}}]);