(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1522:function(t,e,s){"use strict";s.r(e);var a=s(5),o=s.n(a),i=s(8),c=s.n(i),n=s(20),r=s.n(n),l={props:{id:[String,Number]},components:{"c-business-layout":function(t){return s.e(170).then(function(){var e=[s(1423)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-html-editor":function(t){return s.e(262).then(function(){var e=[s(1434)];t.apply(null,e)}.bind(this)).catch(s.oe)}},data:function(){return{loadingState:!0,advanced:!1}},computed:{funding:function(){return this.$store.state.funding},project:function(){return"new"===this.id?this.funding.defaultProject:this.funding.projects[this.id]}},methods:{toggleAdvanced:function(){this.advanced=!this.advanced},create:function(){var t=this,e={code:function(t,e,s,a,i,n,l,d,u,p,v){var m,f=this,h=v.project,C=v.profile;return new r.a((m=c()(o.a.mark(function t(i,c){var n,r,l;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.api.ethereum.state.contracts.ProjectRegistration.deployed,r=!1,l=n.ProjectCreated().watch(function(t,a){if(!r){if(r=!0,t)return console.warn("[BlockHub][Marketplace] Error",t),c(t);h.$loki=void 0,h.id=a.args.projectId.toNumber();try{e.funding.projects.insert(h),console.log("after",h.id)}catch(t){try{e.funding.projects.update(h)}catch(t){c(t)}}e.save(),s.sendCommand("updateState",{module:"funding",state:{projects:e.funding.projects.data}}),console.log("Project created"),i(h)}}),t.next=5,n.createProject(h.name,h.description,h.content,{from:C.address});case 5:l.stopWatching(function(){});case 6:case"end":return t.stop()}},t,f)})),function(t,e){return m.apply(this,arguments)}))}.toString(),params:{profile:this.$store.state.application.account.activeProfile,project:this.project}};BlockHub.Bridge.sendCommand("eval",e).then(function(e){e.id&&(t.project.id=e.id,t.successfulCreationMessage="Congratulations, your project has been created!",t.funding.projects[t.project.id]=t.project,t.$router.push("/business/project/"+t.project.id))})},save:function(){BlockHub.Bridge.sendCommand("eval",function(t,e,s,a,i,n,l,d,u,p,v){var m=this;return new r.a(c()(o.a.mark(function t(){var s,i,c,n,l,d,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s={title:"test",description:"test",about:"test",minContributionGoal:1e3,maxContributionGoal:1e4,contributionPeriod:4,noRefunds:!1,noTimeline:!0},i=a.api.ethereum.state.contracts.ProjectRegistration.deployed,c=null,n=new r.a(function(t){c=t}),l=i.ProjectCreated().watch(function(t,a){if(t)return console.warn("[BlockHub][Funding] Error",t),reject(t);s.$loki=void 0,s.id=a.args.projectId.toNumber();try{e.funding.projects.insert(s)}catch(t){try{e.funding.projects.update(s)}catch(t){reject(t)}}c(s.id)}),t.next=7,i.createProject(s.title,s.description,s.about);case 7:return l.stopWatching(),t.next=10,n;case 10:return d=t.sent,t.next=13,i.setProjectContributionGoals(d,s.minContributionGoal,s.maxContributionGoal,s.contributionPeriod,{from:developerAccount});case 13:return t.next=15,i.setProjectTerms(d,s.noRefunds,s.noTimeline,{from:developerAccount});case 15:return t.next=17,i.getProject(d);case 17:u=t.sent,console.log(u);case 19:case"end":return t.stop()}},t,m)})))}.toString())}},mounted:function(){var t=this;this.$nextTick(function(){t.loadingState=!1,document.getElementById("startup-loader").style.display="none"})}},d=(s(810),s(0)),u=Object(d.a)(l,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("c-business-layout",{attrs:{title:"Crowdfund Creation"}},[s("div",[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-3"},[s("label",[t._v("Title")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.project.name,expression:"project.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:t.project.name},on:{input:function(e){e.target.composing||t.$set(t.project,"name",e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-text"})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-3"},[s("label",[t._v("Description")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.project.description,expression:"project.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:t.project.description},on:{input:function(e){e.target.composing||t.$set(t.project,"description",e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-text"})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-3"},[s("label",[t._v("About")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("c-html-editor",{attrs:{height:"200",model:t.project.content},on:{"update:model":function(e){t.$set(t.project,"content",e)}}}),t._v(" "),s("span",{staticClass:"form-text"})],1)])]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-3"},[s("label",[t._v("Tags")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:""}}),t._v(" "),s("span",{staticClass:"form-text"})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-3"},[s("label",[t._v("Minimum Contribution Goal")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Example: 0"}}),t._v(" "),s("span",{staticClass:"form-text"},[t._v("Projects with Overflow Enabled will accept more than the funding goal (over-contribution)")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-3"},[s("label",[t._v("Maximum Contribution Goal")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Example: 1000"}}),t._v(" "),s("span",{staticClass:"form-text"},[t._v("Projects with Overflow Enabled will accept more than the funding goal (over-contribution)")])])])])]),t._v(" "),s("div",{staticClass:"page-heading"},[s("div",{staticClass:"page-heading__container",staticStyle:{float:"none"}},[s("a",{staticClass:"title",staticStyle:{float:"left'"},attrs:{href:"#"},on:{click:t.toggleAdvanced}},[t._v(t._s(t.advanced?"Hide":"Show")+" Advanced")])])]),t._v(" "),t.advanced?s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-sm-3"},[s("label",[t._v("Support Email")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{staticClass:"form-control",attrs:{type:"email",placeholder:"Example: example@domain.com"}}),t._v(" "),s("span",{staticClass:"form-text"},[t._v("Projects with Overflow Enabled will accept more than the funding goal (over-contribution)")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-sm-3"},[s("label",[t._v("Twitter Username")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("div",{staticClass:"input-group mb-2 mr-sm-2 mb-sm-0"},[s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[t._v("@")])]),t._v(" "),s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Example: @example"}})])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-sm-3"},[s("label",[t._v("Share Text")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Example: Join our crowdfund on BlockHub today!"}}),t._v(" "),s("span",{staticClass:"form-text"},[t._v("Projects with Overflow Enabled will accept more than the funding goal (over-contribution)")])])])]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-1"},[s("input",{attrs:{type:"checkbox",name:"switch_8",checked:"",value:"0"}}),t._v(" "),s("span")]),t._v(" "),s("div",{staticClass:"col-sm-11"},[s("label",[t._v("Overflow")]),t._v(" "),s("span",{staticClass:"form-text"},[t._v("Projects with Overflow enabled will accept more than the funding goal (over-contribution)")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-1"},[s("input",{attrs:{type:"checkbox",name:"switch_8",checked:"",value:"0"}}),t._v(" "),s("span")]),t._v(" "),s("div",{staticClass:"col-sm-11"},[s("label",[t._v("Timeline")]),t._v(" "),s("span",{staticClass:"form-text"},[t._v("Projects with Timeline enabled will have a current timeline with associated milestones.")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-1"},[s("input",{attrs:{type:"checkbox",name:"switch_8",checked:"",value:"0"}}),t._v(" "),s("span")]),t._v(" "),s("div",{staticClass:"col-sm-11"},[s("label",[t._v("Refunds")]),t._v(" "),s("span",{staticClass:"form-text"},[t._v("Projects with Refunds enabled will allow contributors to get partial or full refund if the project is deemed not successful (by community vote).")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-1"},[s("input",{attrs:{type:"checkbox",name:"switch_8",checked:"",value:"0"}}),t._v(" "),s("span")]),t._v(" "),s("div",{staticClass:"col-sm-11"},[s("label",[t._v("Curation")]),t._v(" "),s("span",{staticClass:"form-text"},[t._v("Projects with Curation enabled will allow the community to curate the project and earn reputation for their actions.")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-1"}),t._v(" "),s("div",{staticClass:"col-sm-11"},[s("input",{attrs:{type:"text",id:"ise_default",name:"ise_default",value:""}}),t._v(" "),s("label",[t._v("Contribution Period")]),t._v(" "),s("span",{staticClass:"form-text"},[t._v("Projects with Curation Enabled will allow the community to curate the project and earn reputation for their actions.")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-1"},[s("input",{attrs:{type:"checkbox",name:"switch_8",checked:"",value:"0"}}),t._v(" "),s("span")]),t._v(" "),s("div",{staticClass:"col-sm-11"},[s("label",[t._v("No Contribution Period")]),t._v(" "),s("span",{staticClass:"form-text"},[t._v("Projects with No Contribution Period will be open for contribution until the project is completed, allowing for contributions during the project.")])])])])]):t._e(),t._v(" "),s("div",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"GOVERNANCE",expression:"'GOVERNANCE'"}],staticClass:"row"},[s("div",{staticClass:"col-12"},[t._v("\n                    Choose your governance system\n                ")]),t._v(" "),s("div",{staticClass:"col-4"},[s("i",{staticClass:"fas first-order"})])]),t._v(" "),s("div",{staticClass:"row"},[t.project.id?s("div",{staticClass:"col-2 offset-10"},[s("a",{staticClass:"btn btn-primary",attrs:{href:"#",target:"_blank"},on:{click:function(e){return e.preventDefault(),t.save(e)}}},[t._v("SAVE")])]):t._e(),t._v(" "),t.project.id?t._e():s("div",{staticClass:"col-2 offset-10"},[s("a",{staticClass:"btn btn-primary",attrs:{href:"#",target:"_blank"},on:{click:function(e){return e.preventDefault(),t.create(e)}}},[t._v("CREATE")])])])])])])},[],!1,null,"7e0204c8",null);e.default=u.exports},181:function(t,e){},810:function(t,e,s){"use strict";var a=s(181);s.n(a).a}}]);