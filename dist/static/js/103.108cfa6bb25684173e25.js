(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1468:function(e,t,n){"use strict";n.r(t);n(10);var s=n(461),a={components:{"c-user-card":function(e){return n.e(10).then(function(){var t=[n(1432)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-popup":function(e){return n.e(7).then(function(){var t=[n(102)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-tabs":function(e){return n.e(11).then(function(){var t=[n(100)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-tab":function(e){return n.e(12).then(function(){var t=[n(101)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-welcome-box":function(e){return n.e(191).then(function(){var t=[n(1339)];e.apply(null,t)}.bind(this)).catch(n.oe)}},data:function(){var e=this;return Object(s.setInterval)(function(){e.useMetamask&&((e.desktop_mode||"undefined"!=typeof web3&&!0===web3.currentProvider.isMetaMask)&&(e.ethereum_connected=!0),void 0!==window.web3&&window.web3.eth.getAccounts(function(t,n){e.ethereum_unlocked=n.length>0,e.purchaseAddress=n[0]}))},2e3),{purchaseAddress:null,useMetamask:!1,ethereum_connected:!1,ethereum_unlocked:!1,errors:[]}},computed:{desktop_mode:function(){return this.$store.state.application.desktop_mode},canContinue:function(){return this.purchaseAddress}},methods:{unlockWallet:function(){if(void 0!==window.web3)if(window.ethereum)try{window.ethereum.enable().then(function(){window.web3=new Web3(window.ethereum),checkEthereumConnection()})}catch(e){}else window.web3&&(window.web3=new Web3(window.web3.currentProvider),checkEthereumConnection())},proceed:function(){if(this.errors=[],this.canContinue)return this.$store.state.application.account.address=this.purchaseAddress,void this.$router.push("/account/verification");this.purchaseAddress||this.errors.push("You must specify your Ethereum public address or hook up MetaMask.")}}},o=(n(921),n(0)),r=Object(o.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("c-layout",{attrs:{showLeftPanel:!1,showRightPanel:!1}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 offset-md-3 col-sm-12 offset-sm-0 mb-4"},[n("c-block",{staticClass:"margin-bottom-30",attrs:{title:"KYC",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[n("p",[e._v("Welcome to the KYC portal. "),e.desktop_mode?e._e():n("span",[e._v("BlockHub Desktop is the recommended way to KYC, purchase & use tokens. You can also KYC on web and create your account in BlockHub later.")])]),e._v(" "),e.desktop_mode?e._e():n("div",[n("div",{staticClass:"text-center alert alert-info",staticStyle:{"font-weight":"bold","font-size":"11px"}},[n("p",[e._v(" BlockHub, the first platform powered by Hyperbridge protocols has been released. "),n("c-button",{staticClass:"outline-white",attrs:{href:"#/download"}},[e._v("Download it now")])],1)])])]),e._v(" "),n("br"),n("br"),e._v(" "),n("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Your Address",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[n("p",[e._v("Enter your Ethereum public address:")]),e._v(" "),n("div",{staticClass:"input-group mb-4 margin-bottom-10"},[n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text"},[e._v("\n                                Public Address\n                            ")])]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.purchaseAddress,expression:"purchaseAddress"}],ref:"input",staticClass:"form-control",attrs:{type:"text",placeholder:"Public Ethereum address...."},domProps:{value:e.purchaseAddress},on:{input:function(t){t.target.composing||(e.purchaseAddress=t.target.value)}}})]),e._v(" "),n("p",[n("em",[e._v("Tip: it looks something like this - 0x04AE72Cd525b66bc3D1241a311EE6990AD1F64a9")])]),e._v(" "),e.desktop_mode?e._e():n("c-checkbox",{attrs:{id:"useMetamask",checked:!1,type:"square"},model:{value:e.useMetamask,callback:function(t){e.useMetamask=t},expression:"useMetamask"}},[e._v("\n                        Use MetaMask\n                    ")]),e._v(" "),e.useMetamask&&!e.ethereum_connected?n("div",{staticClass:"col-12 margin-top-30 margin-bottom-30",staticStyle:{"text-align":"center",width:"100%"}},[n("a",{attrs:{href:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"}},[n("img",{staticStyle:{"max-width":"350px",margin:"0 auto"},attrs:{src:"/static/img/metamask.png"}})]),e._v(" "),n("br"),n("br"),e._v(" "),n("p",[e._v("The BlockHub desktop client is the recommended way to load up on tokens, but you can also purchase using the MetaMask web wallet. Come back to this page within BlockHub, or when you've installed MetaMask.")])]):e._e(),e._v(" "),e.useMetamask&&e.ethereum_connected&&!e.ethereum_unlocked?n("div",{staticClass:"col-12 margin-top-30 margin-bottom-30",staticStyle:{"text-align":"center",width:"100%",padding:"20px",border:"3px dashed rgba(0,0,0,0.1)","border-radius":"7px",background:"rgba(0,0,0,0.2)"}},[n("img",{staticStyle:{"max-width":"150px",margin:"0 auto",opacity:"0.3",filter:"grayscale(1)"},attrs:{src:"/static/img/metamask-logo.png"}}),e._v(" "),n("br"),n("br"),e._v(" "),n("p",[e._v("The BlockHub desktop client is the recommended way to load up on tokens, but if you'd like to purchase with MetaMask, open the extension to unlock your web wallet.")]),e._v(" "),n("br"),n("br"),e._v(" "),n("c-button",{staticClass:"c-btn-lg ",on:{click:e.unlockWallet}},[e._v("Unlock Wallet")])],1):e._e(),e._v(" "),e.useMetamask&&e.ethereum_connected&&e.ethereum_unlocked?n("div",{staticClass:"col-12 margin-top-30 margin-bottom-30",staticStyle:{"text-align":"center",width:"100%","margin-bottom":"30px",padding:"20px",border:"3px dashed rgba(0,0,0,0.1)","border-radius":"7px",background:"rgba(0,0,0,0.2)"}},[n("img",{staticStyle:{"max-width":"150px",margin:"0 auto"},attrs:{src:"/static/img/metamask-logo.png"}}),e._v(" "),n("br"),n("br"),e._v(" "),n("h2",[e._v("Connected to MetaMask "),n("span",{staticClass:"fa fa-check-circle"})])]):e._e(),e._v(" "),e.errors.length?n("p",{staticClass:"alert alert-danger errors"},[n("ul",e._l(e.errors,function(t){return n("li",{key:t},[e._v(e._s(t))])}))]):e._e(),e._v(" "),n("div",{staticClass:"margin-top-30",staticStyle:{"text-align":"center"}},[n("c-button",{staticClass:"c-btn-lg justify-content-center",class:{disabled:!e.canContinue},attrs:{status:"success",icon_hide:"",size:"xl"},on:{click:e.proceed}},[e._v("\n                            Continue\n                        ")])],1)],1)],1)])])])},[],!1,null,"32dc871b",null);t.default=r.exports},292:function(e,t){},921:function(e,t,n){"use strict";var s=n(292);n.n(s).a}}]);