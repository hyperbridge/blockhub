(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1501:function(t,e,i){"use strict";i.r(e);var s=i(460),a=i.n(s),o=(i(523),{props:{id:[String,Number],section:{type:String,default:"overview"}},components:{"c-tags-list":function(t){return i.e(9).then(function(){var e=[i(1376)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-badges":function(t){return i.e(197).then(function(){var e=[i(1334)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-rating-block":function(t){return i.e(196).then(function(){var e=[i(1375)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-project-overview":function(t){return i.e(257).then(function(){var e=[i(1340)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-project-milestones":function(t){return i.e(256).then(function(){var e=[i(1341)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-project-discussion":function(t){return i.e(25).then(function(){var e=[i(1409)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-project-contributors":function(t){return i.e(26).then(function(){var e=[i(1502)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-project-community":function(t){return i.e(255).then(function(){var e=[i(1346)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-project-bounties":function(t){return i.e(254).then(function(){var e=[i(1348)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-project-updates":function(t){return i.e(253).then(function(){var e=[i(1351)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-updates-count":function(t){return i.e(252).then(function(){var e=[i(1353)];t.apply(null,e)}.bind(this)).catch(i.oe)},Multiselect:a.a},data:function(){return{errors:[],activeElement:{name:!1,background_image:!1,store_image:!1,developer_tags:!1,description:!1,content:!1},author_tag_options:["game","mod","other"],crowdfunding_props:["spent","locked","overflow"]}},methods:{showTab:function(t){$('.nav-tabs a[href="#'+t+'"]').tab("show")},showContributeModal:function(){this.$store.dispatch("application/activateModal","send-funds")},deactivateElement:function(t){this.activeElement[t]=!1},activateElement:function(t){var e=this;for(var i in this.activeElement)this.activeElement[i]=!1;this.activeElement[t]=!0,setTimeout(function(){e.$refs[t]&&e.$refs[t].focus()},10)},save:function(){var t=this;this.checkForm()?"new"===this.id?(this.$store.dispatch("application/setEditorMode","publishing"),BlockHub.DesktopBridge.createFundingProject({title:this.project.name,description:this.project.description,about:this.project.content}).then(function(e){store.state.projects[e.id]=e,store.dispatch("updateState"),t.$store.dispatch("application/setEditorMode","viewing")})):(this.$store.dispatch("funding/updateProject",this.project),this.$store.dispatch("application/setEditorMode","publishing")):this.$store.dispatch("application/setEditorMode","editing")},checkForm:function(){if(this.errors=[],this.project.name&&this.project.description)return!0;this.project.name||this.errors.push("Project name required."),this.project.description||this.errors.push("Project description required.")},updateSection:function(){this.section||(this.section=this.$route.meta.section)}},computed:{project:function(){var t=null;return"new"===this.id&&(t=this.$store.state.funding.defaultProject,this.$store.state.application.developer_mode=!0,this.$store.dispatch("application/setEditorMode","editing")),this.$store.state.funding.projects&&this.$store.state.funding.projects[this.id]&&(t=this.$store.state.funding.projects[this.id]),t&&t.images&&t.images.header&&(window.document.getElementById("header-bg").style["background-image"]="url("+t.images.header+")"),t&&!t.community&&(t.community={discussions:[]}),t},editing:function(){if(!this.$store.state.application.editor_mode)for(var t in this.activeElement)this.activeElement[t]=!1;return"editing"===this.$store.state.application.editor_mode},breadcrumbLinks:function(){var t=[{to:{path:"/"},title:"Store"},{to:{path:"/project/"+this.project.id},title:this.project.name}];return"community"===this.section?t.push({to:{path:""},title:"Community"}):"bounties"===this.section?t.push({to:{path:""},title:"Bounties"}):"updates"===this.section?t.push({to:{path:""},title:"Updates"}):"milestones"===this.section&&t.push({to:{path:""},title:"Milestones"}),t}},watch:{editing:function(t,e){"publishing"===this.$store.state.application.editor_mode&&this.save()},$route:function(){this.updateSection()}},created:function(){console.log(this,this.$parent),this.updateSection()},beforeDestroy:function(){window.document.getElementById("header-bg").style["background-image"]="url(/static/img/backgrounds/1.jpg)"},updated:function(){var t=this;$("#tag-editor").select2().on("select2:select",function(e){var i=e.params.data;t.project.developer_tags.includes(i.text)||t.project.developer_tags.push(i.text),Vue.set(t.project,"developer_tags",t.project.developer_tags)}).on("select2:unselect",function(e){var i=e.params.data;t.project.developer_tags=t.project.developer_tags.filter(function(t){return t!==i.text}),Vue.set(t.project,"developer_tags",t.project.developer_tags)}),$("#summernote").summernote({placeholder:"Type in your text",tabsize:2,height:300,callbacks:{onBlur:function(){Vue.set(t.project,"content",$("#summernote").summernote("code"))}}})}}),n=(i(840),i(839),i(0)),c=Object(n.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("c-layout",{staticClass:"project-single-page",attrs:{navigationKey:"project",showRightPanel:!1,breadcrumbLinks:t.breadcrumbLinks}},[t.project?t._e():i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[t._v("\n                Project not found\n            ")])]),t._v(" "),t.project?i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[t.errors.length?i("div",{staticClass:"errors"},[i("strong",[t._v("Please correct the following error(s):")]),t._v(" "),i("ul",t._l(t.errors,function(e){return i("li",{key:e},[t._v(t._s(e))])}))]):t._e(),t._v(" "),i("div",{staticClass:"row justify-content-between"},[i("div",{staticClass:"col-12 col-md-4 text-center text-md-left"},[i("div",{staticClass:"editor-container"},[t.editing?i("div",{staticClass:"editor"},[t.activeElement.name?t._e():i("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("name")}}},[t._v("Change\n                                    Project Name "),i("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.name?i("div",{staticClass:"form-control-element form-control-element--right"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.project.name,expression:"project.name"}],ref:"name",staticClass:"form-control",attrs:{name:"name",type:"text",placeholder:"Project name..."},domProps:{value:t.project.name},on:{input:function(e){e.target.composing||t.$set(t.project,"name",e.target.value)}}}),t._v(" "),i("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[i("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("name")}}})])]):t._e()]):t._e(),t._v(" "),i("h1",{staticClass:"title margin-top-10 margin-bottom-15"},[t._v(t._s(t.project.name))])]),t._v(" "),i("div",{staticClass:"editor-container"},[t.editing?i("div",{staticClass:"editor"},[t.activeElement.developer_tags?t._e():i("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",staticStyle:{"margin-bottom":"20px"},on:{click:function(e){t.activateElement("developer_tags")}}},[t._v("Change\n                                    Tags "),i("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.developer_tags?i("div",{staticClass:"form-control-element tag-editor form-control-element--right"},[i("multiselect",{staticClass:"dark-mode",attrs:{multiple:!0,taggable:!0,options:t.author_tag_options},model:{value:t.project.developer_tags,callback:function(e){t.$set(t.project,"developer_tags",e)},expression:"project.developer_tags"}}),t._v(" "),i("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[i("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("developer_tags")}}})])],1):t._e()]):t._e(),t._v(" "),t.editing&&t.activeElement.developer_tags?t._e():i("c-tags-list",{attrs:{tags:t.project.developer_tags}})],1)]),t._v(" "),i("div",{staticClass:"col-12 col-md-4"},[i("c-badges",{attrs:{icons:["trophy","gem"]}})],1),t._v(" "),i("div",{staticClass:"col-12 col-md-4"},[t.editing?i("div",{staticClass:"editor text-right",staticStyle:{"margin-bottom":"30px"}},[t.activeElement.background_image?t._e():i("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("background_image")}}},[t._v("Change Background Image "),i("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.background_image?i("div",{},[i("div",{staticClass:"form-control-element form-control-element--right"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.project.images.header,expression:"project.images.header"}],ref:"background_image",staticClass:"form-control",attrs:{name:"background_image",type:"text",placeholder:"Background image URL..."},domProps:{value:t.project.images.header},on:{input:function(e){e.target.composing||t.$set(t.project.images,"header",e.target.value)}}}),t._v(" "),i("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[i("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("background_image")}}})])])]):t._e(),t._v(" "),i("label",{staticStyle:{display:"block"}},[t._v("RECOMMENDED SIZE: 1120 x 524px")])]):t._e(),t._v(" "),t.editing?i("div",{staticClass:"editor text-right"},[t.activeElement.store_image?t._e():i("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("store_image")}}},[t._v("Change Project Image "),i("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.store_image?i("div",{},[i("div",{staticClass:"form-control-element form-control-element--right"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.project.images.header,expression:"project.images.header"}],ref:"store_image",staticClass:"form-control",attrs:{name:"store_image",type:"text",placeholder:"Background image URL..."},domProps:{value:t.project.images.header},on:{input:function(e){e.target.composing||t.$set(t.project.images,"header",e.target.value)}}}),t._v(" "),i("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[i("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("store_image")}}})])])]):t._e(),t._v(" "),i("label",{staticStyle:{display:"block"}},[t._v("RECOMMENDED SIZE: 2140 x 680px")])]):t._e()])]),t._v(" "),i("c-button",{staticClass:"w-100 d-flex d-md-none justify-content-center my-4",attrs:{status:"dark",size:"lg","data-toggle":"collapse","data-target":"#project_nav","aria-expanded":"false","aria-controls":"project_nav"}},[t._v("\n                    Menu\n                ")]),t._v(" "),i("div",{staticClass:"collapse show project_nav",attrs:{id:"project_nav"}},[i("ul",{staticClass:"nav nav-tabs margin-bottom-40 justify-content-between"},[i("li",{staticClass:"nav-item",on:{click:function(e){t.section="overview"}}},[i("router-link",{staticClass:"nav-link",class:{active:"overview"===t.section},attrs:{to:"/project/"+t.project.id}},[t._v("\n                                Overview\n                            ")])],1),t._v(" "),i("li",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"COMMUNITY",expression:"'COMMUNITY'"}],staticClass:"nav-item",on:{click:function(e){t.section="community"}}},[i("router-link",{staticClass:"nav-link",class:{active:"community"===t.section},attrs:{to:"/project/"+t.project.id+"/community"}},[t._v("\n                                Community\n                                "),i("c-updates-count",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"UPDATE-COUNTER",expression:"'UPDATE-COUNTER'"}]},[t._v("\n                                    0\n                                ")])],1)],1),t._v(" "),i("li",{staticClass:"nav-item",on:{click:function(e){t.section="bounties"}}},[i("router-link",{staticClass:"nav-link",class:{active:"bounties"===t.section},attrs:{to:"/project/"+t.project.id+"/bounties"}},[t._v("\n                                Bounties\n                            ")])],1),t._v(" "),i("li",{staticClass:"nav-item",on:{click:function(e){t.section="updates"}}},[i("router-link",{staticClass:"nav-link",class:{active:"updates"===t.section},attrs:{to:"/project/"+t.project.id+"/updates"}},[t._v("\n                                Updates\n                                "),i("c-updates-count",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"UPDATE-COUNTER",expression:"'UPDATE-COUNTER'"}]},[t._v("\n                                    0\n                                ")])],1)],1),t._v(" "),i("li",{staticClass:"nav-item",on:{click:function(e){t.section="milestones"}}},[i("router-link",{staticClass:"nav-link",class:{active:"milestones"===t.section},attrs:{to:"/project/"+t.project.id+"/milestones"}},[t._v("\n                                Milestones\n                            ")])],1),t._v(" "),t.editing?i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",class:{active:"configure"===t.section},on:{click:function(e){t.section="configure"}}},[t._v("Configure")])]):t._e()])]),t._v(" "),"configure"===t.section?i("div",{staticClass:"row",attrs:{id:"configure",editing:t.editing}},[i("c-block",{attrs:{title:"Campaign"}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group row"},[i("label",{staticClass:"switch switch-sm col-sm-3"},[i("label",[t._v("Minimum Contribution Goal")])]),t._v(" "),i("div",{staticClass:"col-sm-9"},[i("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Example: 0"}}),t._v(" "),i("span",{staticClass:"form-text"},[t._v("Projects with Overflow Enabled will accept more than the funding goal (over-contribution)")])])]),t._v(" "),i("div",{staticClass:"form-group row"},[i("label",{staticClass:"switch switch-sm col-sm-3"},[i("label",[t._v("Maximum Contribution Goal")])]),t._v(" "),i("div",{staticClass:"col-sm-9"},[i("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Example: 1000"}}),t._v(" "),i("span",{staticClass:"form-text"},[t._v("Projects with Overflow Enabled will accept more than the funding goal (over-contribution)")])])]),t._v(" "),i("div",{staticClass:"form-group row"},[i("div",{staticClass:"col-sm-3"},[i("label",[t._v("Support Email")])]),t._v(" "),i("div",{staticClass:"col-sm-9"},[i("input",{staticClass:"form-control",attrs:{type:"email",placeholder:"Example: example@domain.com"}}),t._v(" "),i("span",{staticClass:"form-text"},[t._v("Projects with Overflow Enabled will accept more than the funding goal (over-contribution)")])])]),t._v(" "),i("div",{staticClass:"form-group row"},[i("div",{staticClass:"col-sm-3"},[i("label",[t._v("Twitter Username")])]),t._v(" "),i("div",{staticClass:"col-sm-9"},[i("div",{staticClass:"input-group mb-2 mr-sm-2 mb-sm-0"},[i("div",{staticClass:"input-group-prepend"},[i("span",{staticClass:"input-group-text"},[t._v("@")])]),t._v(" "),i("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Example: @example"}})])])]),t._v(" "),i("div",{staticClass:"form-group row"},[i("div",{staticClass:"col-sm-3"},[i("label",[t._v("Share Text")])]),t._v(" "),i("div",{staticClass:"col-sm-9"},[i("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Example: Join our crowdfund on BlockHub today!"}}),t._v(" "),i("span",{staticClass:"form-text"},[t._v("Projects with Overflow Enabled will accept more than the funding goal (over-contribution)")])])])]),t._v(" "),i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group row"},[i("label",{staticClass:"switch switch-sm col-sm-1"},[i("input",{attrs:{type:"checkbox",name:"switch_8",checked:"",value:"0"}}),t._v(" "),i("span")]),t._v(" "),i("div",{staticClass:"col-sm-11"},[i("label",[t._v("Overflow")]),t._v(" "),i("span",{staticClass:"form-text"},[t._v("Projects with Overflow enabled will accept more than the funding goal (over-contribution)")])])]),t._v(" "),i("div",{staticClass:"form-group row"},[i("label",{staticClass:"switch switch-sm col-sm-1"},[i("input",{attrs:{type:"checkbox",name:"switch_8",checked:"",value:"0"}}),t._v(" "),i("span")]),t._v(" "),i("div",{staticClass:"col-sm-11"},[i("label",[t._v("Timeline")]),t._v(" "),i("span",{staticClass:"form-text"},[t._v("Projects with Timeline enabled will have a current timeline with associated milestones.")])])]),t._v(" "),i("div",{staticClass:"form-group row"},[i("label",{staticClass:"switch switch-sm col-sm-1"},[i("input",{attrs:{type:"checkbox",name:"switch_8",checked:"",value:"0"}}),t._v(" "),i("span")]),t._v(" "),i("div",{staticClass:"col-sm-11"},[i("label",[t._v("Refunds")]),t._v(" "),i("span",{staticClass:"form-text"},[t._v("Projects with Refunds enabled will allow contributors to get partial or full refund if the project is deemed not successful (by community vote).")])])]),t._v(" "),i("div",{staticClass:"form-group row"},[i("label",{staticClass:"switch switch-sm col-sm-1"},[i("input",{attrs:{type:"checkbox",name:"switch_8",checked:"",value:"0"}}),t._v(" "),i("span")]),t._v(" "),i("div",{staticClass:"col-sm-11"},[i("label",[t._v("Curation")]),t._v(" "),i("span",{staticClass:"form-text"},[t._v("Projects with Curation enabled will allow the community to curate the project and earn reputation for their actions.")])])]),t._v(" "),i("div",{staticClass:"form-group row"},[i("label",{staticClass:"switch switch-sm col-sm-1"}),t._v(" "),i("div",{staticClass:"col-sm-11"},[i("input",{attrs:{type:"text",id:"ise_default",name:"ise_default",value:""}}),t._v(" "),i("label",[t._v("Contribution Period")]),t._v(" "),i("span",{staticClass:"form-text"},[t._v("Projects with Curation Enabled will allow the community to curate the project and earn reputation for their actions.")])])]),t._v(" "),i("div",{staticClass:"form-group row"},[i("label",{staticClass:"switch switch-sm col-sm-1"},[i("input",{attrs:{type:"checkbox",name:"switch_8",checked:"",value:"0"}}),t._v(" "),i("span")]),t._v(" "),i("div",{staticClass:"col-sm-11"},[i("label",[t._v("No Contribution Period")]),t._v(" "),i("span",{staticClass:"form-text"},[t._v("Projects with No Contribution Period will be open for contribution until the project is completed, allowing for contributions during the project.")])])])])]),t._v(" "),i("div",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"GOVERNANCE",expression:"'GOVERNANCE'"}],staticClass:"row"},[i("div",{staticClass:"col-12"},[t._v("\n                                    Choose your governance system\n                                ")]),t._v(" "),i("div",{staticClass:"col-4"},[i("i",{staticClass:"fas first-order"})])])])],1):t._e()],1),t._v(" "),i("div",{staticClass:"col-12",attrs:{id:"overview"}},[i("transition",{attrs:{name:"page",mode:"out-in"}},["overview"===t.section?i("c-project-overview",{attrs:{project:t.project,editing:t.editing}}):t._e(),t._v(" "),"community"===t.section?i("c-project-community",{attrs:{project:t.project,editing:t.editing}}):t._e(),t._v(" "),"bounties"===t.section?i("c-project-bounties",{attrs:{project:t.project,editing:t.editing}}):t._e(),t._v(" "),"contributors"===t.section?i("c-project-contributors",{attrs:{project:t.project,editing:t.editing}}):t._e(),t._v(" "),"discussion"===t.section?i("c-project-discussion",{attrs:{project:t.project,editing:t.editing}}):t._e(),t._v(" "),"milestones"===t.section?i("c-project-milestones",{attrs:{project:t.project,editing:t.editing}}):t._e(),t._v(" "),"updates"===t.section?i("c-project-updates",{attrs:{project:t.project,editing:t.editing}}):t._e()],1)],1)]):t._e()])},[],!1,null,"05ab5257",null);e.default=c.exports},210:function(t,e){},211:function(t,e){},839:function(t,e,i){"use strict";var s=i(210);i.n(s).a},840:function(t,e,i){"use strict";var s=i(211);i.n(s).a}}]);