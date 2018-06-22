<template>
    <c-layout>
        <!-- PAGE CONTENT CONTAINER -->
        <div class="content" id="content">
            <!-- PAGE HEADING -->
            <div class="page-heading">
                <div class="page-heading__container">
                    <h1 class="title">Cards</h1>
                    <p class="caption">List of your active personal cards</p>
                </div>
                <c-heading />
            </div>
            <!-- //END PAGE HEADING -->
            
            <div class="container-fluid">  
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h1>{{ msg }}</h1>
                                <h2>Links</h2>
                                <ul>
                                  <li><a href="/#/store">Store</a></li>
                                  <li><a href="/#/news">News</a></li>
                                  <li><a href="/#/help">Help</a></li>
                                  <li><a href="/#/support">Support</a></li>
                                  <li><a href="/#/settings">Settings</a></li>
                                  <li><a href="/#/settings/profile">Settings > Profile</a></li>
                                  <li><a href="/#/settings/client">Settings > Client</a></li>
                                  <li><a href="/#/account">Account</a></li>
                                  <li><a href="/#/account/signup">Account > Sign Up</a></li>
                                  <li><a href="/#/account/signin">Account > Sign In</a></li>
                                  <li><a href="/#/account/wallets">Account > Wallets</a></li>
                                  <li><a href="/#/account/transactions">Account > Transactions</a></li>
                                  <li><a href="/#/account/identities">Account > Identities</a></li>
                                  <li><a href="/#/wallet/1">Wallet #1</a></li>
                                  <li><a href="/#/wallet/1/transactions">Wallet #1 > Transactions</a></li>
                                  <li><a href="/#/wallet/1/send">Wallet #1 > Send</a></li>
                                  <li><a href="/#/wallet/1/receive">Wallet #1 > Receive</a></li>
                                  <li><a href="/#/invoice/#1">Invoice #1</a></li>
                                  <li><a href="/#/identity/1">Identity #1</a></li>
                                  <li><a href="/#/identity/1/assets">Identity #1 > Digital Assets</a></li>
                                  <li><a href="/#/identity/1/contacts">Identity #1 > Contacts</a></li>
                                  <li><a href="/#/identity/1/projects">Identity #1 > Projects</a></li>
                                  <li><a href="/#/identity/1/bounties">Identity #1 > Bounties</a></li>
                                  <li><a href="/#/app/1">App #1</a></li>
                                  <li><a href="/#/app/1/community">App #1 > Community</a></li>
                                  <li><a href="/#/app/1/projects">App #1 > Projects</a></li>
                                  <li><a href="/#/app/1/assets">App #1 > Assets</a></li>
                                  <li><a href="/#/community">Community</a></li>
                                  <li><a href="/#/community/chat">Community > Chat</a></li>
                                  <li><a href="/#/assets">Digital Assets</a></li>
                                  <li><a href="/#/asset/1">Digital Asset #1</a></li>
                                  <li><a href="/#/projects">Projects</a></li>
                                  <li><a href="/#/project/1">Project #1</a></li>
                                  <li><a href="/#/project/1/bounties">Project #1 > Bounties</a></li>
                                  <li><a href="/#/project/1/discussion">Project #1 > Discussion</a></li>
                                  <li><a href="/#/project/1/contributers">Project #1 > Contributers</a></li>
                                  <li><a href="/#/curators">Curators</a></li>
                                  <li><a href="/#/curator/1">Curator #1</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: '',
    }
  },
  components: {
    'c-layout': () => import('@/layouts/default')
  },
  created() {

  }
}
</script>

<style>

</style>
