(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{502:function(t,e,s){"use strict";var a=s(94);s.n(a).a},503:function(t,e,s){"use strict";var a=s(95);s.n(a).a},813:function(t,e,s){"use strict";s.r(e);var a=s(3),i={props:["id"],components:{"c-layout":function(t){return Promise.resolve().then(function(){var e=[s(890)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-game-plan":function(t){return s.e(157).then(function(){var e=[s(743)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-block":function(t){return s.e(112).then(function(){var e=[s(740)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-screen-gallery":function(t){return s.e(156).then(function(){var e=[s(744)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-tags-list":function(t){return s.e(113).then(function(){var e=[s(775)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-rating-block":function(t){return s.e(155).then(function(){var e=[s(752)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-frequently-traded-assets":function(t){return s.e(154).then(function(){var e=[s(754)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-community-spotlight":function(t){return s.e(153).then(function(){var e=[s(755)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-heading-bar":function(t){return Promise.resolve().then(function(){var e=[s(462)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-progress-bar":function(t){return s.e(142).then(function(){var e=[s(787)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-contribute-form":function(t){return s.e(189).then(function(){var e=[s(40)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-contribute-pledge":function(t){return s.e(188).then(function(){var e=[s(789)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-badges":function(t){return s.e(119).then(function(){var e=[s(790)];t.apply(null,e)}.bind(this)).catch(s.oe)}},data:function(){return{errors:[],activeElement:{name:!1,background_image:!1,store_image:!1,developer_tags:!1,description:!1,content:!1},author_tag_options:["game","mod","other"],crowdfunding_props:["spent","locked","overflow"]}},methods:{showTab:function(t){$('.nav-tabs a[href="#'+t+'"]').tab("show")},showContributeModal:function(){this.$store.dispatch("application/activateModal","send-funds")},deactivateElement:function(t){this.activeElement[t]=!1},activateElement:function(t){var e=this;for(var s in this.activeElement)this.activeElement[s]=!1;this.activeElement[t]=!0,setTimeout(function(){e.$refs[t]&&e.$refs[t].focus()},10)},save:function(){this.checkForm()?"new"===this.id?(this.$store.commit("funding/createProject",this.project),this.$store.dispatch("application/setEditorMode","viewing")):(this.$store.dispatch("funding/updateProject",this.project),this.$store.dispatch("application/setEditorMode","viewing")):this.$store.dispatch("application/setEditorMode","editing")},checkForm:function(t){if(this.errors=[],this.project.name&&this.project.description)return!0;this.project.name||this.errors.push("Project name required."),this.project.description||this.errors.push("Project description required.")}},computed:{project:function(){var t=null;return"new"===this.id&&(t=this.$store.state.funding.default_project),this.$store.state.funding.projects&&this.$store.state.funding.projects[this.id]&&(t=this.$store.state.funding.projects[this.id]),t&&t.images&&t.images.header&&(window.document.getElementById("header-bg").style["background-image"]="url("+t.images.header+")"),t&&!t.community&&(t.community={discussions:[]}),t},editing:function(){if(!this.$store.state.application.editor_mode)for(var t in this.activeElement)this.activeElement[t]=!1;return"editing"===this.$store.state.application.editor_mode}},watch:{editing:function(t,e){"publishing"===this.$store.state.application.editor_mode&&this.save()}},created:function(){},beforeDestroy:function(){window.document.getElementById("header-bg").style["background-image"]="url(/static/img/backgrounds/1.jpg)"},updated:function(){var t=this;$("#tag-editor").select2().on("select2:select",function(e){var s=e.params.data;t.project.developer_tags.includes(s.text)||t.project.developer_tags.push(s.text),a.a.set(t.project,"developer_tags",t.project.developer_tags)}).on("select2:unselect",function(e){var s=e.params.data;t.project.developer_tags=t.project.developer_tags.filter(function(t){return t!==s.text}),a.a.set(t.project,"developer_tags",t.project.developer_tags)}),$("#summernote").summernote({placeholder:"Type in your text",tabsize:2,height:300,callbacks:{onBlur:function(){a.a.set(t.project,"content",$("#summernote").summernote("code"))}}}),$("#ise_default").ionRangeSlider({from:15})}},o=(s(503),s(502),s(0)),n=Object(o.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("c-layout",{attrs:{navigationKey:"project",showRightPanel:!1}},[s("div",{staticClass:"content",attrs:{id:"content"}},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[t.project?s("div",{staticClass:"col-12 tab-content"},[t.errors.length?s("p",{staticClass:"errors"},[s("strong",[t._v("Please correct the following error(s):")]),t._v(" "),s("ul",t._l(t.errors,function(e){return s("li",{key:e},[t._v(t._s(e))])}))]):t._e(),t._v(" "),s("div",{staticClass:"row justify-content-between"},[s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"editor-container"},[t.editing?s("div",{staticClass:"editor"},[t.activeElement.name?t._e():s("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("name")}}},[t._v("Change\n                                        Project Name "),s("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.name?s("div",{staticClass:"form-control-element form-control-element--right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.project.name,expression:"project.name"}],ref:"name",staticClass:"form-control",attrs:{name:"name",type:"text",placeholder:"Project name..."},domProps:{value:t.project.name},on:{input:function(e){e.target.composing||t.$set(t.project,"name",e.target.value)}}}),t._v(" "),s("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[s("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("name")}}})])]):t._e()]):t._e(),t._v(" "),s("h1",{staticClass:"title margin-top-10 margin-bottom-15"},[t._v(t._s(t.project.name))])]),t._v(" "),s("div",{staticClass:"editor-container"},[t.editing?s("div",{staticClass:"editor"},[t.activeElement.developer_tags?t._e():s("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",staticStyle:{"margin-bottom":"20px"},on:{click:function(e){t.activateElement("developer_tags")}}},[t._v("Change\n                                        Tags "),s("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.developer_tags?s("div",{staticClass:"form-control-element form-control-element--right"},[s("select",{staticClass:"form-control",attrs:{id:"tag-editor",multiple:"multiple"}},t._l(t.author_tag_options,function(e,a){return s("option",{key:a,domProps:{selected:t.project.developer_tags.includes(e)}},[t._v(t._s(e)+"\n                                            ")])})),t._v(" "),s("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[s("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("developer_tags")}}})])]):t._e()]):t._e(),t._v(" "),t.editing&&t.activeElement.developer_tags?t._e():s("c-tags-list",{attrs:{tags:t.project.developer_tags}})],1)]),t._v(" "),s("div",{staticClass:"col-lg-4"},[s("c-badges",{attrs:{icons:["trophy","gem"]}})],1),t._v(" "),s("div",{staticClass:"col-lg-4"},[t.editing?s("div",{staticClass:"editor text-right",staticStyle:{"margin-bottom":"30px"}},[t.activeElement.background_image?t._e():s("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("background_image")}}},[t._v("Change Background Image "),s("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.background_image?s("div",{},[s("div",{staticClass:"form-control-element form-control-element--right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.project.images.header,expression:"project.images.header"}],ref:"background_image",staticClass:"form-control",attrs:{name:"background_image",type:"text",placeholder:"Background image URL..."},domProps:{value:t.project.images.header},on:{input:function(e){e.target.composing||t.$set(t.project.images,"header",e.target.value)}}}),t._v(" "),s("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[s("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("background_image")}}})])])]):t._e(),t._v(" "),s("label",{staticStyle:{display:"block"}},[t._v("RECOMMENDED SIZE: 1120 x 524px")])]):t._e(),t._v(" "),t.editing?s("div",{staticClass:"editor text-right"},[t.activeElement.store_image?t._e():s("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("store_image")}}},[t._v("Change Store Image "),s("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.store_image?s("div",{},[s("div",{staticClass:"form-control-element form-control-element--right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.project.images.header,expression:"project.images.header"}],ref:"store_image",staticClass:"form-control",attrs:{name:"store_image",type:"text",placeholder:"Background image URL..."},domProps:{value:t.project.images.header},on:{input:function(e){e.target.composing||t.$set(t.project.images,"header",e.target.value)}}}),t._v(" "),s("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[s("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("store_image")}}})])])]):t._e(),t._v(" "),s("label",{staticStyle:{display:"block"}},[t._v("RECOMMENDED SIZE: 2140 x 680px")])]):t._e()])]),t._v(" "),s("ul",{staticClass:"nav nav-tabs margin-bottom-50 justify-content-between"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link active",attrs:{to:"/project/"+t.project.id}},[t._v("Overview")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/project/"+t.project.id+"/community"}},[t._v("Community")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/project/"+t.project.id+"/bounties"}},[t._v("Bounties")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/project/"+t.project.id+"/updates"}},[t._v("Updates")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/project/"+t.project.id+"/milestones"}},[t._v("Milestones")])],1),t._v(" "),t.editing?s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{"data-toggle":"pill",href:"#configure",role:"tab","aria-controls":"configure","aria-selected":"true"}},[t._v("Configure")])]):t._e()]),t._v(" "),s("div",{staticClass:"row tab-pane fade",attrs:{id:"configure",role:"tabpanel","aria-labelledby":"configure-tab"}},[s("c-block",{attrs:{title:"Campaign"}},[s("form",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-3"},[s("label",[t._v("Minimum Contribution Goal")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Example: 0"}}),t._v(" "),s("span",{staticClass:"form-text"},[t._v("Projects with Overflow Enabled will accept more than the funding goal (over-contribution)")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-3"},[s("label",[t._v("Maximum Contribution Goal")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Example: 1000"}}),t._v(" "),s("span",{staticClass:"form-text"},[t._v("Projects with Overflow Enabled will accept more than the funding goal (over-contribution)")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-sm-3"},[s("label",[t._v("Support Email")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{staticClass:"form-control",attrs:{type:"email",placeholder:"Example: example@domain.com"}}),t._v(" "),s("span",{staticClass:"form-text"},[t._v("Projects with Overflow Enabled will accept more than the funding goal (over-contribution)")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-sm-3"},[s("label",[t._v("Twitter Username")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("div",{staticClass:"input-group mb-2 mr-sm-2 mb-sm-0"},[s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[t._v("@")])]),t._v(" "),s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Example: @example"}})])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-sm-3"},[s("label",[t._v("Share Text")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Example: Join our crowdfund on BlockHub today!"}}),t._v(" "),s("span",{staticClass:"form-text"},[t._v("Projects with Overflow Enabled will accept more than the funding goal (over-contribution)")])])])]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-1"},[s("input",{attrs:{type:"checkbox",name:"switch_8",checked:"",value:"0"}}),t._v(" "),s("span")]),t._v(" "),s("div",{staticClass:"col-sm-11"},[s("label",[t._v("Overflow")]),t._v(" "),s("span",{staticClass:"form-text"},[t._v("Projects with Overflow enabled will accept more than the funding goal (over-contribution)")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-1"},[s("input",{attrs:{type:"checkbox",name:"switch_8",checked:"",value:"0"}}),t._v(" "),s("span")]),t._v(" "),s("div",{staticClass:"col-sm-11"},[s("label",[t._v("Timeline")]),t._v(" "),s("span",{staticClass:"form-text"},[t._v("Projects with Timeline enabled will have a current timeline with associated milestones.")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-1"},[s("input",{attrs:{type:"checkbox",name:"switch_8",checked:"",value:"0"}}),t._v(" "),s("span")]),t._v(" "),s("div",{staticClass:"col-sm-11"},[s("label",[t._v("Refunds")]),t._v(" "),s("span",{staticClass:"form-text"},[t._v("Projects with Refunds enabled will allow contributors to get partial or full refund if the project is deemed not successful (by community vote).")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-1"},[s("input",{attrs:{type:"checkbox",name:"switch_8",checked:"",value:"0"}}),t._v(" "),s("span")]),t._v(" "),s("div",{staticClass:"col-sm-11"},[s("label",[t._v("Curation")]),t._v(" "),s("span",{staticClass:"form-text"},[t._v("Projects with Curation enabled will allow the community to curate the project and earn reputation for their actions.")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-1"}),t._v(" "),s("div",{staticClass:"col-sm-11"},[s("input",{attrs:{type:"text",id:"ise_default",name:"ise_default",value:""}}),t._v(" "),s("label",[t._v("Contribution Period")]),t._v(" "),s("span",{staticClass:"form-text"},[t._v("Projects with Curation Enabled will allow the community to curate the project and earn reputation for their actions.")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-1"},[s("input",{attrs:{type:"checkbox",name:"switch_8",checked:"",value:"0"}}),t._v(" "),s("span")]),t._v(" "),s("div",{staticClass:"col-sm-11"},[s("label",[t._v("No Contribution Period")]),t._v(" "),s("span",{staticClass:"form-text"},[t._v("Projects with No Contribution Period will be open for contribution until the project is completed, allowing for contributions during the project.")])])])])])])])],1),t._v(" "),s("div",{staticClass:"row tab-pane fade active show",attrs:{id:"overview",role:"tabpanel","aria-labelledby":"overview-tab"}},[s("div",{staticClass:"col-md-7 col-xl-8"},[s("c-screen-gallery",{attrs:{items:t.project.images.preview}}),t._v(" "),s("div",{staticClass:"editor-container"},[t.editing?s("div",{staticClass:"editor"},[t.activeElement.description?t._e():s("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("description")}}},[t._v("Change Description "),s("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.description?s("div",{staticClass:"form-control-element form-control-element--right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.project.description,expression:"project.description"}],ref:"description",staticClass:"form-control",attrs:{name:"name",type:"text",placeholder:"Project description..."},domProps:{value:t.project.description},on:{input:function(e){e.target.composing||t.$set(t.project,"description",e.target.value)}}}),t._v(" "),s("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[s("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("description")}}})])]):t._e()]):t._e(),t._v(" "),s("p",{staticClass:"project__description"},[t._v(t._s(t.project.description))])]),t._v(" "),t.editing?t._e():s("div",{staticClass:"main-content",domProps:{innerHTML:t._s(t.project.content)}},[t._v("\n                                "+t._s(t.project.content)+"\n                            ")]),t._v(" "),t.editing?s("div",{staticClass:"content-editor"},[s("div",{attrs:{id:"summernote"},domProps:{innerHTML:t._s(t.project.content)}},[t._v(t._s(t.project.content))])]):t._e()],1),t._v(" "),s("div",{staticClass:"col-md-5 col-xl-4"},[t.project.funding?s("div",{staticClass:"card invert"},[s("div",{staticClass:"card-body"},[t.editing&&!t.activeElement.campaign?s("a",{staticClass:"nav-link editor-container editor-container--style-2",attrs:{href:"javascript:;"},on:{click:function(e){t.showTab("configure")}}},[s("i",{staticClass:"fas fa-cog"}),t._v(" "),s("span",[t._v("Configure Campaign")])]):t._e(),t._v(" "),s("h2",{staticClass:"title"},[t._v("Crowndfunding campaign")]),t._v(" "),s("div",{staticClass:"project"},[s("div",{staticClass:"project__progress"},t._l(t.project.funding.stages,function(e,a){return s("div",{key:a,staticClass:"project__progress-stage",class:e.status},["done"===e.status?s("i",{staticClass:"fas fa-check"}):t._e(),t._v(" "),"in_progress"===e.status?s("i",{staticClass:"fas fa-clock"}):t._e(),t._v(" "),s("span",{staticClass:"stage_line"}),t._v(" "),s("span",{staticClass:"name"},[t._v(t._s(e.text))])])})),t._v(" "),s("div",{staticClass:"project__info"},[s("div",{staticClass:"funded"},[s("div",{staticClass:"text"},[t._v("114% Funded")]),t._v("\n                                                "+t._s(t.project.funding.funded_amount)+" USD\n                                            ")]),t._v(" "),s("div",{staticClass:"goal"},[s("div",{staticClass:"text"},[t._v("Goal")]),t._v("\n                                                "+t._s(t.project.funding.goal_amount)+" USD\n                                            ")]),t._v(" "),t._l(t.crowdfunding_props,function(e,a){return s("div",{key:a,class:e},[s("div",{staticClass:"progress-bar-vertical"},[s("c-progress-bar",{attrs:{values:{reached:t.project.funding[e+"_amount"],goal:t.project.funding.goal_amount},direction:"vertical"}})],1),t._v(" "),s("div",[s("p",{staticClass:"text"},[s("strong",[t._v(t._s(t._f("upperFirstChar")(e)))])]),t._v("\n                                                    "+t._s(t.project.funding[e+"_amount"])+" USD\n                                                ")])])})],2),t._v(" "),s("div",{staticClass:"project__action"},[s("c-button",{attrs:{status:"share",swap_direction:""}},[t._v("Share")]),t._v(" "),s("c-button",{attrs:{status:"info",icon:"check",swap_direction:""}},[t._v("Follow")]),t._v(" "),s("c-button",{attrs:{status:"support",swap_direction:""}},[t._v("Support")])],1)])])]):t._e(),t._v(" "),t.project.milestones?s("div",{staticClass:"card invert milestones"},[s("div",{staticClass:"card-body"},[t.editing&&!t.activeElement.milestones?s("a",{staticClass:"editor-container editor-container--style-2",attrs:{href:"#"}},[s("i",{staticClass:"fas fa-cog"}),t._v(" "),s("span",[t._v("Set Up Milestones")])]):t._e(),t._v(" "),s("h2",{staticClass:"title"},[t._v("Milestones")]),t._v(" "),s("ul",{staticClass:"milestones__list"},t._l(t.project.milestones.items,function(e,a){return s("li",{key:a,class:{done:"done"===e.status}},["done"===e.status?s("div",{staticClass:"step_number"},[s("i",{staticClass:"fas fa-check"})]):s("div",{staticClass:"step_number"},[t._v("\n                                                "+t._s(e.step_number)+"\n                                            ")]),t._v(" "),s("div",{staticClass:"text"},[t._v("\n                                                "+t._s(e.title)+"\n                                            ")])])}))])]):t._e(),t._v(" "),s("c-community-spotlight",{staticClass:"margin-bottom-30",attrs:{discussions:t.project.community.discussions,community_url:"/#/project/"+t.project.id,editing:t.editing,activeElement:t.activeElement.milestones}}),t._v(" "),s("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Contribute"}},[s("c-contribute-form",{on:{click:t.showContributeModal}})],1),t._v(" "),t._l(t.project.pledges,function(e,a){return s("c-contribute-pledge",{key:a,attrs:{pledge:e},on:{click:t.showContributeModal}})})],2)])]):s("div",{staticClass:"col-12"},[t._v("\n                    Project not found\n                ")])])])])])},[],!1,null,"3f326c0c",null);e.default=n.exports},94:function(t,e){},95:function(t,e){}}]);