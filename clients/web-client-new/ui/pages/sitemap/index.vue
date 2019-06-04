<template>
    <c-layout navigationKey="settings">
        <c-block
            class="margin-bottom-30"
            title="Sitemap"
            :noGutter="true"
            :onlyContentBg="true"
            :bgGradient="true">
            <div class="row">
                <div class="col-12 col-md-4">
                    <h2>General</h2>
                    <ul>
                        <li>
                            <c-button
                                status="none"
                                to="/download">
                                Download
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/news">
                                News
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/help">
                                Help
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/search">
                                Search
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/support">
                                Support
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/updates">
                                Updates
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/welcome">
                                Welcome
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/plans">
                                Plans
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/redeem">
                                Redeem
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/token">
                                Token
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/go/do-something">
                                Go [do-something]
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/privacy">
                                Privacy Policy
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/terms">
                                Terms &amp; Conditions
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/unlock">
                                Unlock
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/monitor">
                                Monitor
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/chat">
                                Chat
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/verification-assistant">
                                Verification Assistant
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/not-found">
                                Not Found
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/unknown">
                                Unknown
                            </c-button>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-4">
                    <h2>Account</h2>
                    <ul>
                        <li>
                            <c-button
                                status="none"
                                to="/account">
                                Account
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/account/signup">
                                Account > Sign Up
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/account/signin">
                                Account > Sign In
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/account/backup">
                                Account > Backup
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/account/wallets">
                                Account > Wallets
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/account/new-wallet">
                                Account > New Wallet
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/account/profiles">
                                Account > Profiles
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/account/new-profile">
                                Account > New Profile
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/account/verification">
                                Account > Verification
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/account/verification/callback">
                                Account > Verification Callback
                            </c-button>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-4">
                    <h2>Settings</h2>
                    <ul>
                        <li>
                            <c-button
                                status="none"
                                to="/settings">
                                Settings
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/settings/profile">
                                Settings > Profile
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/settings/protocol">
                                Settings > Protocol
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/settings/darklaunch">
                                Settings > Darklaunch
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/settings/activity">
                                Settings > Activity
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/settings/debug">
                                Settings > Debug
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/settings/game-scanner">
                                Settings > Game Scanner
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/settings/extensions">
                                Settings > Extensions
                            </c-button>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-4">
                    <h2>Wallets</h2>
                    <ul>
                        <li>
                            <c-button
                                status="none"
                                to="/wallet/1">
                                Wallet #1
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/wallet/1/transactions">
                                Wallet #1 > Transactions
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/wallet/1/tokens">
                                Wallet #1 > Tokens
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/wallet/1/send">
                                Wallet #1 > Send
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/wallet/1/receive">
                                Wallet #1 > Receive
                            </c-button>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-4">
                    <h2>Profiles</h2>
                    <ul>
                        <li>
                            <c-button
                                status="none"
                                to="/profile/1">
                                Profile #1
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/profile/1/assets">
                                Profile #1 > Digital Assets
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/profile/1/contacts">
                                Profile #1 > Contacts
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/profile/1/projects">
                                Profile #1 > Projects
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/profile/1/bounties">
                                Profile #1 > Bounties
                            </c-button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-4">
                    <h2>Store</h2>
                    <ul>
                        <li>
                            <c-button
                                status="none"
                                to="/store">
                                Store
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/store/cart">
                                Store Cart
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/store/checkout">
                                Store Checkout
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/store/invoices">
                                Store Invoices
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/store/invoice/1">
                                Store Invoice #1
                            </c-button>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-4">
                    <h2>Realms</h2>
                    <ul>
                        <li>
                            <c-button
                                status="none"
                                to="/realms">
                                Realms
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/realm/new">
                                New Realm
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/realm/1">
                                Realm #1
                            </c-button>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-4">
                    <h2>Ideas</h2>
                    <ul>
                        <li>
                            <c-button
                                status="none"
                                to="/idea/new">
                                New Idea
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/idea/1">
                                Idea #1
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/idea/1/community">
                                Idea #1 > Community
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/idea/1/projects">
                                Idea #1 > Projects
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/idea/1/assets">
                                Idea #1 > Assets
                            </c-button>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-4">
                    <h2>Projects</h2>
                    <ul>
                        <li>
                            <c-button
                                status="none"
                                to="/projects">
                                Projects
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/project/new">
                                New Project
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/project/1">
                                Project #1
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/project/1/bounties">
                                Project #1 > Bounties
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/project/1/community">
                                Project #1 > Community
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/project/1/contributers">
                                Project #1 > Contributers
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/project/1/milestones">
                                Project #1 > Milestones
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/project/1/updates">
                                Project #1 > Updates
                            </c-button>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-4">
                    <h2>Products</h2>
                    <ul>
                        <li>
                            <c-button
                                status="none"
                                to="/product/1">
                                Product #1
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/product/1/community">
                                Product #1 > Community
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/product/1/projects">
                                Product #1 > Projects
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/product/1/assets">
                                Product #1 > Assets
                            </c-button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-4">
                    <h2>Community</h2>
                    <ul>
                        <li>
                            <c-button
                                status="none"
                                to="/communities">
                                Communities
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/community/new">
                                New Community
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/community/1">
                                Community #1
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/community/forum/1">
                                Community #1 > Forum #1
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/community/discussion/1">
                                Community #1 > Discussion #1
                            </c-button>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-4">
                    <h2>Curators</h2>
                    <ul>
                        <li>
                            <c-button
                                status="none"
                                to="/curators">
                                Curators
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/curator/1">
                                Curator #1
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/curator/application">
                                Curator Application
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/meta">
                                Meta
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/meta/presets">
                                Meta > Presets
                            </c-button>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-4">
                    <h2>Collections</h2>
                    <ul>
                        <li>
                            <c-button
                                status="none"
                                to="/collections">
                                Collections
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/collection/1">
                                Collection #1
                            </c-button>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-4">
                    <h2>Streams</h2>
                    <ul>
                        <li>
                            <c-button
                                status="none"
                                to="/streams">
                                Streams
                            </c-button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-4">
                    <h2>Marketplace</h2>
                    <ul>
                        <li>
                            <c-button
                                status="none"
                                to="/marketplace">
                                Marketplace
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/marketplace/inventory">
                                Marketplace Inventory
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/marketplace/trade">
                                Marketplace Trade
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/marketplace/trade/507f191e810c19729de860ea">
                                Marketplace Trade ID 507f191e810c19729de860ea
                            </c-button>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-4">
                    <h2>Digital Assets</h2>
                    <ul>
                        <li>
                            <c-button
                                status="none"
                                to="/assets">
                                Digital Assets
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/asset/1">
                                Digital Asset #1
                            </c-button>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-4">
                    <h2>Stash</h2>
                    <ul>
                        <li>
                            <c-button
                                status="none"
                                to="/stash">
                                Stash
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/chest">
                                Chest
                            </c-button>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-4">
                    <h2>Business Manager</h2>
                    <ul>
                        <li>
                            <c-button
                                status="none"
                                to="/business">
                                Business Manager
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/business/projects">
                                Business > All Crowdfunds
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/business/project/new">
                                Business > New Crowdfund
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/business/products">
                                Business > All Products
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/business/product/new">
                                Business > New Product
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/business/assets">
                                Business > All Assets
                            </c-button>
                        </li>
                        <li>
                            <c-button
                                status="none"
                                to="/business/asset/new">
                                Business > New Digital Asset
                            </c-button>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-4">
                    <h2>Admin</h2>
                    <ul>
                        <li>
                            <c-button
                                status="none"
                                to="/admin">
                                Admin
                            </c-button>
                        </li>
                    </ul>
                </div>
            </div>
        </c-block>
    </c-layout>
</template>

<script>
export default {
    components: {
    }
}
</script>

<style>

</style>
