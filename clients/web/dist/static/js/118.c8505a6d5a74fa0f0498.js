(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{1053:function(t,i,e){"use strict";var o=e(354);e.n(o).a},1621:function(t,i,e){"use strict";e.r(i);var o=e(2),a=e.n(o),s={components:{"c-heading-bar":function(t){return Promise.resolve().then(function(){var i=[e(1643)];t.apply(null,i)}.bind(this)).catch(e.oe)},"c-user-card":function(t){return e.e(12).then(function(){var i=[e(1488)];t.apply(null,i)}.bind(this)).catch(e.oe)},"c-button-arrows":function(t){return e.e(207).then(function(){var i=[e(1527)];t.apply(null,i)}.bind(this)).catch(e.oe)},"c-modal-light":function(t){return e.e(255).then(function(){var i=[e(1536)];t.apply(null,i)}.bind(this)).catch(e.oe)},"c-input-searcher":function(t){return Promise.resolve().then(function(){var i=[e(1382)];t.apply(null,i)}.bind(this)).catch(e.oe)}},data:function(){return{newProfile:{name:"Default",wallet:"",img:"/static/img/new-profile.png",default:!1,edit:!1},profileCopy:{},editedProfile:null,removeProfile:null,filterPhrase:"",sortAsc:!0}},methods:{setDefault:function(t){this.$store.state.application.activeProfile=t,this.$store.state.application.developerMode="developer"===t.role,this.saveProfiles()},editProfile:function(t){this.editedProfile?this.$snotify.warning("You must finish editing the current profile"):(t.edit=!0,this.editedProfile=t)},cancelEditProfile:function(t){t.edit=!1,this.editedProfile=null},saveProfile:function(t){for(var i in t)t[i]=this.profileClone[i];t.name||(t.name="Default"),t.edit=!1,this.editedProfile=null,this.$store.dispatch("profiles/update",[t.id,{name:t.name,avatar:t.img,address:t.wallet}])},deleteProfile:function(t){this.removeProfile?(this.$store.dispatch("profiles/remove",this.removeProfile.id),this.removeProfile.edit=!1,this.removeProfile.removing=!0,this.removeProfile=null):this.removeProfile=t,this.editedProfile=null},createProfile:function(){var t=this.newProfile;this.$store.dispatch("profiles/create",{name:t.name,avatar:t.img,address:t.wallet})},saveProfiles:function(){this.$store.dispatch("application/updateState")}},created:function(){this.$store.dispatch("profiles/find",{query:{accountId:this.$store.state.auth.user.id,$sort:{createdAt:-1},$limit:25}})},computed:{profiles:function(){return this.$store.getters["profiles/list"]},activeProfile:function(){return this.$store.state.application.activeProfile},profileClone:function(){return this.editedProfile?a()({},this.editedProfile):{}},isEditing:function(){return this.profiles&&this.profiles.find(function(t){return t.edit})},filteredProfiles:function(){var t=this;return this.profiles&&this.profiles.filter(function(i){return!i.name||i.name.toLowerCase().includes(t.filterPhrase.toLowerCase())}).sort(function(i,e){return i.name>e.name?t.sortAsc?1:-1:0})}},watch:{"$store.state.application.initialized":function(){},"$store.state.profiles.isCreatePending":function(t,i){var e=this;!1===t&&this.editProfile(this.profiles.find(function(t){return t.id===e.$store.state.profiles.currentId}))},"$store.state.profiles.list":function(t,i){Object.values(this.$store.state.profiles.keyedById)=this.$store.state.profiles.list}}},n=(e(1053),e(0)),r=Object(n.a)(s,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("c-layout",{attrs:{navigationKey:"account"}},[t.profiles?e("div",{staticClass:"row align-items-stretch justify-content-center margin-bottom-40"},[e("div",{staticClass:"col-12"},[e("c-heading-bar",{attrs:{name:"My Profile",showArrows:!1,showBackground:!1}})],1),t._v(" "),e("div",{staticClass:"col-12 col-md-6 col-lg-4 my_profile"},[t.activeProfile?e("div",[e("c-user-card",{attrs:{user:t.activeProfile,previewMode:!0},on:{updateProfile:function(i,e){return t.activeProfile[i]=e}}}),t._v(" "),e("br"),t._v(" "),e("c-button",{attrs:{status:"info",icon:"download"},on:{click:function(i){t.$store.commit("application/activateModal","deposit")}}},[t._v("Deposit")]),t._v(" "),e("c-button",{attrs:{status:"info",icon:"upload"},on:{click:function(i){t.$store.commit("application/activateModal","withdraw")}}},[t._v("Withdraw")])],1):t.profiles.length?e("p",[t._v("\n                You don't have a default profile.\n            ")]):e("p",[t._v("\n                You don't have any profiles yet.\n            ")])]),t._v(" "),t.activeProfile?e("div",{staticClass:"col-12 col-md-6 col-lg-4",attrs:{hidden:""}},[e("div",{staticClass:"verification-blk text-center"},[e("h3",{staticClass:"text-white"},[t._v("Verify Your Profile")]),t._v(" "),t.activeProfile.isVerified?e("div",{staticClass:"status"},[e("i",{staticClass:"fas fa-check"}),t._v("\n                    Verified\n                ")]):t.activeProfile.isVerifying?e("div",{staticClass:"status"},[e("i",{staticClass:"fas fa-hourglass"}),t._v("\n                    Verifying\n                ")]):e("c-button",{staticClass:"mt-3",attrs:{status:"outline-success",href:"#/account/verification"}},[t._v("\n                    Click here to verify\n                ")]),t._v(" "),t.activeProfile.isVerified?e("div",{staticClass:"date"},[t._v("\n                    Valid up to $7,500 USD\n                ")]):t._e()],1)]):t._e()]):t._e(),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 mb-4"}),t._v(" "),e("div",{staticClass:"col-12"},[e("c-heading-bar",{attrs:{name:"All Profiles",showArrows:!1,showBackground:!1,showActions:""}},[e("div",{staticClass:"additional-action margin-left-20",attrs:{slot:"additional-action"},slot:"additional-action"},[e("span",{staticClass:"text"},[t._v("Name "),e("c-icon",{attrs:{name:"user"}})],1),t._v(" "),e("c-button-arrows",{attrs:{activeUp:t.sortAsc},on:{clickUp:function(i){t.sortAsc=!0},clickDown:function(i){t.sortAsc=!1}}})],1),t._v(" "),e("div",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"REPUTATION",expression:"'REPUTATION'"}],staticClass:"additional-action margin-left-20",attrs:{slot:"additional-action"},slot:"additional-action"},[e("span",{staticClass:"text"},[t._v("Rating "),e("c-icon",{attrs:{name:"trophy"}})],1),t._v(" "),e("c-button-arrows")],1),t._v(" "),e("div",{staticClass:"additional-action margin-left-20 padding-5",attrs:{slot:"additional-action"},slot:"additional-action"},[e("c-input-searcher",{attrs:{placeholder:"Search"},model:{value:t.filterPhrase,callback:function(i){t.filterPhrase=i},expression:"filterPhrase"}})],1),t._v(" "),e("div",{staticClass:"additional-action margin-left-10",attrs:{slot:"additional-action"},slot:"additional-action"},[e("c-button",{attrs:{status:"outline-white",icon:"user-plus"},on:{click:t.createProfile}},[t._v("New Profile")])],1)])],1),t._v(" "),e("c-loading",{key:"loading",attrs:{enabled:!t.filteredProfiles.length}}),t._v(" "),t.filteredProfiles.length?e("div",{staticClass:"profile-picker"},t._l(t.filteredProfiles,function(i){return e("div",{key:i.id,staticClass:"profile-picker__profile",class:{edit:i.edit,"default-type":i.id==(t.activeProfile&&t.activeProfile.id)}},[e("c-user-card",t._b({staticClass:"margin-bottom-30",class:{default:i.id==(t.activeProfile&&t.activeProfile.id)},attrs:{user:i,previewMode:!i.edit,removing:i.removing}},"c-user-card",t.profileClone,!1,!0)),t._v(" "),e("div",{staticClass:"profile__action"},[i.edit||i.id==(t.activeProfile&&t.activeProfile.id)?t._e():e("c-button",{attrs:{status:"info",icon:"check"},on:{click:function(e){t.setDefault(i)}}},[t._v("Set default")]),t._v(" "),i.edit?t._e():e("c-button",{attrs:{status:"share",icon:"pen"},on:{click:function(e){t.editProfile(i)}}},[t._v("Edit")]),t._v(" "),i.edit?e("c-button",{attrs:{status:"share",icon:"pen"},on:{click:function(e){t.saveProfile(i)}}},[t._v("Save")]):t._e(),t._v(" "),i.edit?e("c-button",{attrs:{status:"danger",icon:"trash"},on:{click:function(e){t.deleteProfile(i)}}},[t._v("Delete")]):t._e(),t._v(" "),i.edit?e("c-button",{attrs:{icon:"times"},on:{click:function(e){t.cancelEditProfile(i)}}},[t._v("Cancel")]):t._e()],1)],1)})):t._e(),t._v(" "),t.removeProfile?e("c-modal-light",{on:{close:function(i){t.removeProfile=null}}},[e("h4",[t._v("Are you sure that you want to delete this profile?")]),t._v(" "),e("p",[t._v("This operation can not be reversed")]),t._v(" "),e("c-user-card",{attrs:{user:t.removeProfile,previewMode:""}}),t._v(" "),e("div",[e("div",{staticClass:"profile-remove__buttons"},[e("c-button",{attrs:{size:"md"},on:{click:function(i){t.removeProfile=null}}},[t._v("Cancel")]),t._v(" "),e("c-button",{attrs:{size:"md"},on:{click:function(i){t.deleteProfile()}}},[t._v("Confirm")])],1)])],1):t._e()],1)])},[],!1,null,"3f4b07d5",null);i.default=r.exports},354:function(t,i){}}]);