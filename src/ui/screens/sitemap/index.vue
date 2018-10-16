<template>
    <c-layout navigationKey="settings">
        <div class="content" id="content">
            <c-block class="margin-bottom-30" title="Sitemap" :noGutter="true" :onlyContentBg="true" :bgGradient="true">
                <div class="row">
                    <div class="col">
                        <h2>General</h2>
                        <ul>
                          <li><a href="#/download">Download</a></li>
                          <li><a href="#/news">News</a></li>
                          <li><a href="#/help">Help</a></li>
                          <li><a href="#/search">Search</a></li>
                          <li><a href="#/support">Support</a></li>
                          <li><a href="#/changelog">Changelog</a></li>
                          <li><a href="#/welcome">Welcome</a></li>
                          <li><a href="#/redeem">Redeem</a></li>
                          <li><a href="#/token">Token</a></li>
                          <li><a href="#/go/do-something">Go [do-something]</a></li>
                          <li><a href="#/privacy">Privacy Policy</a></li>
                          <li><a href="#/terms">Terms &amp; Conditions</a></li>
                          <li><a href="#/unlock">Unlock</a></li>
                          <li><a href="#/monitor">Monitor</a></li>
                          <li><a href="#/not-found">Not Found</a></li>
                          <li><a href="#/unknown">Unknown</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2>Account</h2>
                        <ul>
                          <li><a href="#/account">Account</a></li>
                          <li><a href="#/account/signup">Account > Sign Up</a></li>
                          <li><a href="#/account/signin">Account > Sign In</a></li>
                          <li><a href="#/account/wallets">Account > Wallets</a></li>
                          <li><a href="#/account/new-wallet">Account > New Wallet</a></li>
                          <li><a href="#/account/identities">Account > Identities</a></li>
                          <li><a href="#/account/new-identity">Account > New Identity</a></li>
                          <li><a href="#/account/verification">Account > Verification</a></li>
                          <li><a href="#/account/verification/callback">Account > Verification Callback</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2>Settings</h2>
                        <ul>
                          <li><a href="#/settings">Settings</a></li>
                          <li><a href="#/settings/profile">Settings > Profile</a></li>
                          <li><a href="#/settings/protocol">Settings > Protocol</a></li>
                          <li><a href="#/settings/darklaunch">Settings > Darklaunch</a></li>
                          <li><a href="#/settings/activity">Settings > Activity</a></li>
                          <li><a href="#/settings/debug">Settings > Debug</a></li>
                          <li><a href="#/settings/game-scanner">Settings > Game Scanner</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2>Wallets</h2>
                        <ul>
                          <li><a href="#/wallet/1">Wallet #1</a></li>
                          <li><a href="#/wallet/1/transactions">Wallet #1 > Transactions</a></li>
                          <li><a href="#/wallet/1/tokens">Wallet #1 > Tokens</a></li>
                          <li><a href="#/wallet/1/send">Wallet #1 > Send</a></li>
                          <li><a href="#/wallet/1/receive">Wallet #1 > Receive</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2>Identities</h2>
                        <ul>
                          <li><a href="#/identity/1">Identity #1</a></li>
                          <li><a href="#/identity/1/assets">Identity #1 > Digital Assets</a></li>
                          <li><a href="#/identity/1/contacts">Identity #1 > Contacts</a></li>
                          <li><a href="#/identity/1/projects">Identity #1 > Projects</a></li>
                          <li><a href="#/identity/1/bounties">Identity #1 > Bounties</a></li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h2>Store</h2>
                        <ul>
                          <li><a href="#/store">Store</a></li>
                          <li><a href="#/store/cart">Store Cart</a></li>
                          <li><a href="#/store/checkout">Store Checkout</a></li>
                          <li><a href="#/store/invoices">Store Invoices</a></li>
                          <li><a href="#/store/invoice/1">Store Invoice #1</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2>Realms</h2>
                        <ul>
                          <li><a href="#/realms">Realms</a></li>
                          <li><a href="#/realm/1">Realm #1</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2>Products</h2>
                        <ul>
                          <li><a href="#/product/1">Product #1</a></li>
                          <li><a href="#/product/1/community">Product #1 > Community</a></li>
                          <li><a href="#/product/1/projects">Product #1 > Projects</a></li>
                          <li><a href="#/product/1/assets">Product #1 > Assets</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2>Projects</h2>
                        <ul>
                          <li><a href="#/projects">Projects</a></li>
                          <li><a href="#/project/1">Project #1</a></li>
                          <li><a href="#/project/1/bounties">Project #1 > Bounties</a></li>
                          <li><a href="#/project/1/community">Project #1 > Community</a></li>
                          <li><a href="#/project/1/contributers">Project #1 > Contributers</a></li>
                          <li><a href="#/project/1/milestones">Project #1 > Milestones</a></li>
                          <li><a href="#/project/1/updates">Project #1 > Updates</a></li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h2>Community</h2>
                        <ul>
                          <li><a href="#/community">Community</a></li>
                          <li><a href="#/community/forum/1">Community > Forum #1</a></li>
                          <li><a href="#/community/discussion/1">Community > Discussion #1</a></li>
                          <li><a href="#/community/chat">Community > Chat</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2>Curators</h2>
                        <ul>
                          <li><a href="#/curators">Curators</a></li>
                          <li><a href="#/curator/1">Curator #1</a></li>
                          <li><a href="#/meta">Meta</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2>Collections</h2>
                        <ul>
                          <li><a href="#/collections">Collections</a></li>
                          <li><a href="#/collection/1">Collection #1</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2>Streams</h2>
                        <ul>
                          <li><a href="#/streams">Streams</a></li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h2>Marketplace</h2>
                        <ul>
                          <li><a href="#/marketplace">Marketplace</a></li>
                          <li><a href="#/marketplace/inventory">Marketplace Inventory</a></li>
                          <li><a href="#/marketplace/trade">Marketplace Trade</a></li>
                          <li><a href="#/marketplace/trade/507f191e810c19729de860ea">Marketplace Trade ID 507f191e810c19729de860ea</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2>Digital Assets</h2>
                        <ul>
                          <li><a href="#/assets">Digital Assets</a></li>
                          <li><a href="#/asset/1">Digital Asset #1</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2>Stash</h2>
                        <ul>
                          <li><a href="#/stash">Stash</a></li>
                          <li><a href="#/game-library">Game Library</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2>Developer Area</h2>
                        <ul>
                          <li><a href="#/developer">Developer Area</a></li>
                          <li><a href="#/developer/new-product">Developer > New Product</a></li>
                          <li><a href="#/developer/new-asset">Developer > New Digital Asset</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2>Business Manager</h2>
                        <ul>
                          <li><a href="#/business">Business Manager</a></li>
                        </ul>
                    </div>
                </div>
            </c-block>
        </div>
    </c-layout>
</template>

<script>
export default {
  components: {
    'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve)
  }
}
</script>

<style>

</style>
