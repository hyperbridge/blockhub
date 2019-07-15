<template>
    <div>
        <div id="left-bg" />
        <div id="right-bg" />
        <div id="header-bg">
            <div class="header-bg__layer-1" />
            <div class="header-bg__layer-2" />
            <div class="header-bg__layer-3" />
        </div>

        <div
            class="page page--w-header page--w-container"
            :class="{'page__with-left-sidebar': showLeftPanel, 'page__with-right-sidebar': showRightPanel }">
            <transition name="slideDown">
                <c-header
                    v-if="!slimMode"
                    :isLoader="loadingState" />
                <c-slim-header
                    v-if="slimMode"
                    :isLoader="loadingState"
                    :title="headerText" />
            </transition>

            <div
                id="page-content"
                class="page__content page__content-invert invert"
                :class="{'make-it-blur': bluredBg, 'with-shortcuts': showShortcuts}"
                :style="bgImage ? `background: url(${bgImage}) top center no-repeat;background-size: cover;` : ''">
                <div v-if="!isConnected" class="loader-block">
                    <div class="loader-block__container">
                        <div class="loader-block__spinner" />

                        <p class="loader-block__message">
                            {{ userSubmittedConnectionMessage.message }}
                        </p>
                        <p class="loader-block__user">
                            Submitted by <a
                                :href="`/profile/${userSubmittedConnectionMessage.user.id}`">@{{ userSubmittedConnectionMessage.user.name }}</a>
                        </p>

                        <h1 v-if="connectionStatus.code" class="loader-block__status-code">
                            ERROR {{ connectionStatus.code }}
                        </h1>

                        <div v-if="connectionStatus.message" class="loader-block__status-message">
                            <p hidden>
                                {{ connectionStatus.message }}
                            </p>
                            <div>
                                Internet Connection <span
                                    class="fa"
                                    :class="{'fa-check-circle': $store.state.application.connection.internet, 'fa-times-circle': !$store.state.application.connection.internet }" />
                            </div>
                            <div>
                                Server Connection <span
                                    class="fa"
                                    :class="{'fa-check-circle': $store.state.application.connection.datasource, 'fa-times-circle': !$store.state.application.connection.datasource }" />
                            </div>
                        </div>

                        <div class="loader-block__links">
                            <p>Connection problems? Let us know!</p>
                            <a href="https://twitter.com/hyperbridge"><span class="fab fa-twitter" /> Tweet Us</a>
                            <a href="https://hyperbridge.org/status"><span class="fas fa-globe-americas" /> Server
                                Status</a>
                        </div>
                    </div>
                </div>

                <div
                    v-if="showShortcuts"
                    class="page-shortcuts invert">
                    <c-shortcut-sidebar :items="customShortcuts ? customShortcuts : shortcuts" />
                </div>

                <div
                    v-if="!loadingState && showLeftPanel"
                    id="page-aside"
                    class="page-aside invert left-sidebar"
                    style="max-width: 250px">
                    <div
                        id="scroll_sidebar"
                        ref="scroll_sidebar"
                        class="left-sidebar__content">
                        <slot name="left-sidebar" />
                        <component
                            :is="`c-${navigationKey}-navigation`"
                            v-if="navigationKey"
                            ref="scroll_sidebar_content"
                            :title="navigationTitle" />
                    </div>
                    <div v-if="scrollMoreDirection == 'down'">
                        <c-load-more
                            :fixed="true"
                            @click="scrollSidebarDown">
                            <div class="load-more-slot">
                                More
                                <i class="fas fa-sort-down" />
                            </div>
                        </c-load-more>
                    </div>
                    <div v-if="scrollMoreDirection == 'up'">
                        <c-load-more
                            :fixed="true"
                            @click="scrollSidebarUp">
                            <div class="load-more-slot">
                                <i class="fas fa-sort-up" />
                                Up
                            </div>
                        </c-load-more>
                    </div>
                </div>

                <div
                    id="content"
                    class="content"
                    :class="{'w-100': !showRightPanel && !showLeftPanel}">
                    <c-breadcrumb
                        v-if="showBreadcrumbs"
                        ref="breadcrumb"
                        :links="breadcrumbLinksData" />
                    <div
                        class="container-fluid"
                        style="padding-top: 0!important;">
                        <div v-if="isConnected" class="content-body">
                            <slot />
                        </div>
                    </div>
                </div>

                <transition
                    v-if="showRightPanel"
                    name="slideRight"
                    style="max-width: 250px">
                    <c-sidepanel
                        class="right-sidebar"
                        style="max-width: 250px"
                        :navigationKey="navigationKey" />
                </transition>

                <c-welcome-popup
                    :activated="$store.state.application.activeModal === 'welcome'"
                    @close="$store.state.application.activeModal = null" />
                <c-download-popup
                    :activated="$store.state.application.activeModal === 'download'"
                    @close="$store.state.application.activeModal = null" />
                <c-unlock-popup
                    :activated="$store.state.application.activeModal === 'unlock'"
                    @close="$store.state.application.activeModal = null" />
                <c-send-funds-popup
                    :activated="$store.state.application.activeModal === 'send-funds'"
                    @close="$store.state.application.activeModal = null" />
                <c-purchase-popup
                    :activated="$store.state.application.activeModal === 'purchase'"
                    @close="$store.state.application.activeModal = null" />
                <c-claim-popup
                    :activated="$store.state.application.activeModal === 'claim'"
                    @close="$store.state.application.activeModal = null" />
                <c-login-popup
                    :activated="$store.state.application.activeModal === 'login'"
                    @close="$store.state.application.activeModal = null" />
                <c-register-popup
                    :activated="$store.state.application.activeModal === 'register'"
                    @close="$store.state.application.activeModal = null" />
                <c-privacy-popup
                    :activated="$store.state.application.activeModal === 'privacy'"
                    @close="$store.state.application.activeModal = null" />
                <c-terms-popup
                    :activated="$store.state.application.activeModal === 'terms'"
                    @close="$store.state.application.activeModal = null" />
                <c-mission-control-popup
                    :activated="$store.state.application.activeModal === 'mission-control'"
                    @close="$store.state.application.activeModal = null" />
                <c-add-collection-popup
                    v-if="$store.state.application.activeModal === 'add-collection'"
                    :activated="$store.state.application.activeModal === 'add-collection'"
                    :image="$store.state.marketplace.activeCollectionModal && $store.state.marketplace.activeCollectionModal.image"
                    :name="$store.state.marketplace.activeCollectionModal && $store.state.marketplace.activeCollectionModal.name"
                    :description="$store.state.marketplace.activeCollectionModal && $store.state.marketplace.activeCollectionModal.description"
                    :collections="$store.state.marketplace.activeCollectionModal && $store.state.marketplace.activeCollectionModal.collections"
                    @close="$store.state.application.activeModal = null" />

                <c-basic-popup
                    :activated="$store.state.application.activeModal === 'connect-network'"
                    style="text-align: left;"
                    @close="$store.state.application.activeModal = null">
                    <div
                        slot="header"
                        class="h4">
                        Connect
                    </div>
                    <template slot="body">
                        <c-social-connect
                            v-for="(item, index) in socials"
                            :key="index"
                            :class="index + 1 == socials.length ? 'margin-bottom-0' : 'margin-bottom-20'"
                            :icon="item.icon"
                            :name="item.name"
                            :description="item.description"
                            :connected="item.connected" />
                    </template>
                    <p slot="footer">
                        <c-button
                            status="dark"
                            to="/help">
                            Need help? Check the Help Center
                        </c-button>
                    </p>
                </c-basic-popup>

                <c-basic-popup
                    :activated="$store.state.application.editorMode === 'editing' && !$store.state.application.settings.client['hideEditorWelcomeModal']"
                    style="text-align: left;"
                    @close="$store.commit('application/updateClientSettings', { key: 'hideEditorWelcomeModal', value: true })">
                    <div
                        slot="header"
                        class="h4">
                        Welcome to the editor
                    </div>
                    <template slot="body">
                        <p v-if="!voteCasted">
                            The goal of BlockHub is everything is editable and curatable through community vote. Like a super-charged Wikipedia-infused entertainment platform. But we aren't quite there yet! So for now, you can cast votes old school.
                        </p>
                        <p v-if="!voteCasted">
                            Want this to be the next section we make editable?
                            <br>
                            <c-button
                                class="underline"
                                @click="vote">
                                Cast your vote by clicking here!
                            </c-button>
                        </p>
                        <p v-if="voteCasted">
                            Your vote has been cast. Thank you!
                        </p>
                    </template>
                    <p slot="footer">
                        <c-button
                            status="dark"
                            to="/help">
                            Need help? Check the Help Center
                        </c-button>
                    </p>
                </c-basic-popup>

                <!--create-shortcut popup-->
                <c-basic-popup
                    :activated="$store.state.application.activeModal === 'create-shortcut'"
                    style="text-align: left;"
                    @close="$store.state.application.activeModal = null">
                    <div
                        slot="header"
                        class="h4">
                        Oh, another creation?
                    </div>
                    <template slot="body">
                        <div class="row padding-bottom-30">
                            <div class="col-3 text-center">
                                <c-button
                                    status="none"
                                    class="create-shortcut__block w-100"
                                    to="/idea/new">
                                    <c-icon
                                        name="plus-circle"
                                        class="padding-bottom-10 padding-top-10"
                                        style="font-size: 50px;" />
                                    <div style="display: block">
                                        Create<br>
                                        Idea
                                    </div>
                                </c-button>
                            </div>
                            <div class="col-3 text-center">
                                <c-button
                                    status="none"
                                    class="create-shortcut__block w-100"
                                    to="/business/project/new">
                                    <c-icon
                                        name="plus-circle"
                                        class="padding-bottom-10 padding-top-10"
                                        style="font-size: 50px;" />
                                    <div style="display: block">
                                        Create<br>
                                        Crowdfund
                                    </div>
                                </c-button>
                            </div>
                            <div class="col-3 text-center">
                                <c-button
                                    status="none"
                                    class="create-shortcut__block w-100"
                                    to="/business/product/new">
                                    <c-icon
                                        name="plus-circle"
                                        class="padding-bottom-10 padding-top-10"
                                        style="font-size: 50px;" />
                                    <div style="display: block">
                                        Create<br>
                                        Game
                                    </div>
                                </c-button>
                            </div>
                            <div class="col-3 text-center">
                                <c-button
                                    status="none"
                                    class="create-shortcut__block w-100"
                                    to="/business/realm/new">
                                    <c-icon
                                        name="plus-circle"
                                        class="padding-bottom-10 padding-top-10"
                                        style="font-size: 50px;" />
                                    <div style="display: block">
                                        Create<br>
                                        Realm
                                    </div>
                                </c-button>
                            </div>
                        </div>
                    </template>
                    <p slot="footer" />
                </c-basic-popup>

                <!--coming-soon popup-->
                <c-basic-popup
                    :activated="$store.state.application.activeModal === 'coming-soon'"
                    style="text-align: left;"
                    @close="$store.state.application.activeModal = null">
                    <div
                        slot="header"
                        class="h4">
                        Coming Soon!
                    </div>
                    <template slot="body">
                        <div class="row">
                            <p class="col-6">
                                Stealth mode engage! <br>
                                &nbsp; &nbsp; &lt;explosion&gt; &nbsp; <br>
                                &nbsp; &nbsp; &nbsp; &nbsp; Dang, didn't work.<br><br>
                                You caught us, we're still working on this feature, but we'll rush as finish it like a warrior in battle!
                                <br><br>
                            </p>
                            <div class="col-6">
                                <img src="/img/hh/Asset 3.svg">
                            </div>
                            <p class="col-12 margin-top-20">
                                We believe in transparency and community-driven development, so why don't you check out the <a href="https://preview.blockhub.gg">Preview Build</a> and let us know what you think!
                            </p>
                            <p class="col-12 margin-bottom-20">
                                To make things simple, hold ALT and click anywhere to send us feedback/bug reports!
                            </p>
                        </div>
                    </template>
                    <p slot="footer" />
                </c-basic-popup>
                <!--token-contract popup-->
                <c-basic-popup
                    :activated="$store.state.application.activeModal === 'token-contract'"
                    style="text-align: left;"
                    @close="$store.state.application.activeModal = null">
                    <div
                        slot="header"
                        class="h4">
                        Token Purchase Contract Address
                    </div>
                    <template slot="body">
                        <div class="input-group mb-4">
                            <input
                                ref="input"
                                type="text"
                                class="form-control"
                                value="0xebf0027ef3b4b7a742a148cddb0f2b14e5d8f0e9">
                        </div>
                        <p>
                            You should confirm the contract address <a
                                href="https://t.me/hyperbridgechat"
                                target="_blank">in our Telegram</a>.
                        </p>
                    </template>
                    <p slot="footer" />
                </c-basic-popup>

                <!--report popup-->
                <c-basic-popup
                    :activated="$store.state.application.activeModal === 'report'"
                    style="text-align: left;"
                    @close="$store.state.application.activeModal = null">
                    <div
                        slot="header"
                        class="h4">
                        Feedback/Report
                    </div>
                    <template slot="body">
                        <p>
                            Our goal at BlockHub is to be hyper-focused on the community. That's why we've created this handy way for you to give us feedback or report issues. Simply hold ALT and click somewhere. It will send us the location of what you're looking at. Report a problem or suggest something at the click of a button! So, what's up?
                        </p>
                        <br>
                        <div class="form-group">
                            <input
                                ref="reportText"
                                v-focus
                                type="text"
                                class="form-control"
                                placeholder="Report..."
                                @keyup.enter="sendReport()">
                        </div>
                        <br>
                        <p><em>Hit ENTER when done</em></p>
                    </template>
                    <p slot="footer" />
                </c-basic-popup>

                <!--propose-idea popup-->
                <c-basic-popup
                    :activated="$store.state.application.activeModal === 'propose-idea'"
                    @close="$store.commit('application/activeModal', null)">
                    <div
                        slot="header"
                        class="h4">
                        Propose Idea
                    </div>
                    <template slot="body">
                        <div v-if="activeProfile && activeProfile.role === 'curator'">
                            <p>
                                Great, you're a curator. <c-button
                                    class="underline"
                                    href="/project/new">
                                    Click here to continue
                                </c-button>.
                            </p>
                        </div>
                        <div v-else>
                            <p>
                                To propose ideas you must sign up for a Curator Profile. Don't worry, the process is simple!
                            </p>
                            <p hidden>
                                Tell people about yourself<br>
                                <textarea />
                            </p>
                            <c-user-card
                                class="col-8 margin-auto"
                                :user="activeProfile"
                                :previewMode="true"
                                :class="{ 'default': true }" />
                            <br>
                            <c-button
                                class="underline"
                                @click="$store.commit('application/showProfileChooser', true)">
                                Choose Different Profile
                            </c-button>

                            <br><br>

                            <c-button
                                class="button--lg outline-white margin-top-20"
                                @click="$store.commit('application/convertCurator', { profile: activeProfile })">
                                Convert to Curator
                            </c-button>
                        </div>
                    </template>
                    <p slot="footer">
                        <c-button
                            status="dark"
                            to="/help">
                            Need help? Check the Help Center
                        </c-button>
                    </p>
                </c-basic-popup>

                <!--notification popup-->
                <c-basic-popup
                    :activated="$store.state.application.activeModal === 'notification'"
                    style="text-align: left;"
                    @close="$store.state.application.activeModal = null">
                    <div
                        slot="header"
                        class="h4">
                        {{ activeNotification.title }}
                    </div>
                    <template slot="body">
                        <p>{{ activeNotification.text }}</p>
                    </template>
                    <p slot="footer" />
                </c-basic-popup>

                <!--addition-details popup-->
                <c-basic-popup
                    :activated="$store.state.application.activeModal === 'addition-details'"
                    style="text-align: left;"
                    @close="$store.state.application.activeModal = null">
                    <div
                        slot="header"
                        class="h4" />
                    <template slot="body">
                        <p>
                            secret question / answer

                            My familiarity with gaming platforms is...

                            My familiarity with blockchain is...
                        </p>
                    </template>
                    <p slot="footer" />
                </c-basic-popup>

                <!--connection-status popup-->
                <c-basic-popup
                    :activated="$store.state.application.activeModal === 'connection-status'"
                    style="text-align: left;"
                    @close="$store.state.application.activeModal = null">
                    <div
                        slot="header"
                        class="h4">
                        Connection Status
                    </div>
                    <template slot="body">
                        <div class="connection-status__status-items">
                            <div>
                                Internet Connection <span
                                    class="fa"
                                    :class="{'fa-check-circle': $store.state.application.connection.internet, 'fa-times-circle': !$store.state.application.connection.internet }" />
                            </div>
                            <div>
                                Web Server Connection <span
                                    class="fa"
                                    :class="{'fa-check-circle': $store.state.application.connection.datasource, 'fa-times-circle': !$store.state.application.connection.datasource }" />
                            </div>
                            <div>
                                Real-time Server Connection <span
                                    class="fa"
                                    :class="{'fa-check-circle': $store.state.application.connection.datasource, 'fa-times-circle': !$store.state.application.connection.datasource }" />
                            </div>
                            <div v-decentralized-mode>
                                Ethereum Connection <span
                                    class="fa"
                                    :class="{'fa-check-circle': $store.state.application.connection.ethereum, 'fa-times-circle': !$store.state.application.connection.ethereum }" />
                            </div>
                        </div>

                        <h1
                            v-if="connectionStatus.code"
                            class="connection-status__status-code">
                            ERROR {{ connectionStatus.code }}
                        </h1>
                        <p
                            v-if="connectionStatus.message"
                            class="connection-status__status-message"
                            hidden>
                            {{ connectionStatus.message }}
                        </p>
                    </template>
                    <p slot="footer" />
                </c-basic-popup>

                <!--withdraw popup-->
                <c-basic-popup
                    :activated="$store.state.application.activeModal === 'withdraw'"
                    style="text-align: left;"
                    @close="$store.state.application.activeModal = null">
                    <div
                        slot="header"
                        class="h4">
                        Withdraw
                    </div>
                    <template
                        v-if="activeProfile"
                        slot="body">
                        <c-loading
                            :enabled="withdrawRequest.processing"
                            size="lg" />
                        <div v-if="!withdrawRequest.processing && !activeProfile.address">
                            <p>No address found for this profile. You'll need to generate one within the desktop app.</p>
                        </div>
                        <div v-if="!withdrawRequest.processing && activeProfile.address">
                            <p hidden>
                                Current Profile: {{ activeProfile.name }}
                            </p>
                            <p style="text-align: center">
                                {{ activeProfile.address }}
                            </p>

                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label>Type</label>
                                        <select
                                            v-model="withdrawRequest.type"
                                            class="form-control actionWithSelected"
                                            tabindex="-1"
                                            aria-hidden="true">
                                            <option />
                                            <option value="ETH">
                                                ETH
                                            </option>
                                            <option value="HBX">
                                                HBX
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label>Amount</label>
                                        <input
                                            v-model="withdrawRequest.amount"
                                            type="text"
                                            class="form-control"
                                            placeholder="Amount">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label>Address</label>
                                        <input
                                            v-model="withdrawRequest.toAddress"
                                            type="text"
                                            class="form-control"
                                            placeholder="Address">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <p
                        v-if="!withdrawRequest.processing"
                        slot="footer">
                        <c-button
                            status="plain"
                            class="color-red"
                            @click="$store.state.application.activeModal = null">
                            Cancel
                        </c-button>
                        <c-button
                            v-if="!activeProfile.address"
                            status="second-info"
                            class="ml-3"
                            @click="$store.state.application.activeModal = null">
                            OK
                        </c-button>
                        <c-button
                            v-if="activeProfile.address"
                            status="second-info"
                            class="ml-3"
                            @click="withdraw">
                            Send
                        </c-button>
                    </p>
                </c-basic-popup>

                <!--deposit popup-->
                <c-basic-popup
                    :activated="$store.state.application.activeModal === 'deposit'"
                    style="text-align: left;"
                    @close="$store.state.application.activeModal = null">
                    <div
                        slot="header"
                        class="h4">
                        Deposit
                    </div>
                    <template slot="body">
                        <div v-if="!activeProfile.address">
                            <p>No address found for this profile. You'll need to generate one within the desktop app.</p>
                        </div>
                        <div v-if="activeProfile.address">
                            <h3>Deposit Address: {{ activeProfile.address }}</h3>
                            <br>
                            <div style="text-align: center;">
                                <c-qr-code
                                    style="display: inline-block; background: #fff;"
                                    :config="{
                                        value: activeProfile.address,
                                        imagePath: 'http://localhost:8000/static/img/logo-only.png',
                                        filter: 'threshold',
                                        size: 400,
                                    }" />
                            </div>
                            <br><br>
                            <p>You can send Ethereum or Hyperbridge Tokens to this address and they will become available by this profile</p>
                            <p>For a guide on where to purchase Ethereum, please see <a href="#">this link</a>.</p>
                            <p>If you're using an external wallet, such as Jaxx, please see their documentation.</p>
                        </div>
                    </template>
                    <p slot="footer">
                        <c-button
                            status="plain"
                            class="color-red"
                            @click="$store.state.application.activeModal = null">
                            Cancel
                        </c-button>
                        <c-button
                            status="second-info"
                            class="ml-3"
                            @click="$store.state.application.activeModal = null">
                            OK
                        </c-button>
                    </p>
                </c-basic-popup>

                <!--create article popup-->
                <c-basic-popup
                    :activated="$store.state.application.activeModal === 'create-article'"
                    style="text-align: left;"
                    @close="$store.state.application.activeModal = null">
                    <div
                        slot="header"
                        class="h4">
                        Create Article
                    </div>
                    <template slot="body">
                        <div>
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label>Slug</label>
                                        <input
                                            v-model="createArticleRequest.key"
                                            type="text"
                                            class="form-control"
                                            placeholder="Slug">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label>Title</label>
                                        <input
                                            v-model="createArticleRequest.name"
                                            type="text"
                                            class="form-control"
                                            placeholder="Title">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label>Text</label>
                                        <textarea
                                            v-model="createArticleRequest.value"
                                            class="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <p slot="footer">
                        <c-button
                            status="plain"
                            class="color-red"
                            @click="$store.state.application.activeModal = null">
                            Cancel
                        </c-button>
                        <c-button
                            status="second-info"
                            class="ml-3"
                            @click="createArticle(createArticleRequest)">
                            OK
                        </c-button>
                    </p>
                </c-basic-popup>

                <!--new discussion popup-->
                <c-basic-popup
                    :activated="$store.state.application.activeModal === 'new-discussion'"
                    style="text-align: left;"
                    @close="$store.state.application.activeModal = null">
                    <div
                        slot="header"
                        class="h4">
                        New Discussion
                    </div>
                    <template slot="body">
                        <div>
                            <!--
                            TODO: For the time being the communityId is being passed from the context that called the popup
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label>Community</label>
                                        <select
                                            v-model="newDiscussionRequest.communityId"
                                            class="form-control actionWithSelected"
                                            tabindex="-1"
                                            aria-hidden="true">
                                            <option />
                                            <option
                                                v-for="(community, index) in communities"
                                                :key="index"
                                                :value="community.id">
                                                {{ community.name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            -->
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label>Title</label>
                                        <input
                                            v-model="newDiscussionRequest.name"
                                            type="text"
                                            class="form-control"
                                            placeholder="Title">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label>Text</label>
                                        <textarea
                                            v-model="newDiscussionRequest.value"
                                            class="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <p slot="footer">
                        <c-button
                            status="plain"
                            class="color-red"
                            @click="$store.state.application.activeModal = null">
                            Cancel
                        </c-button>
                        <c-button
                            status="second-info"
                            class="ml-3"
                            @click="submitNewDiscussion(newDiscussionRequest)">
                            OK
                        </c-button>
                    </p>
                </c-basic-popup>

                <!--settings popup-->
                <c-basic-popup
                    width="1000"
                    :activated="$store.state.application.activeModal === 'settings'"
                    @close="$store.state.application.activeModal = null">
                    <template slot="body">
                        <c-settings />
                    </template>
                </c-basic-popup>

                <c-cookie-policy v-if="!desktopMode" />

                <c-clock v-if="desktopMode" />

                <div
                    class="status-bar"
                    @click="$store.commit('application/activeModal', 'connection-status')">
                    <c-status-dot :status="this.$store.state.application.connection.internet ? 'connected' : 'disconnected'" />
                    OK
                </div>

                <div
                    v-if="desktopMode"
                    class="version">
                    v{{ $store.state.application.version }}
                </div>
            </div>

            <c-profile-chooser v-if="profileChooser && signedIn" />

            <c-draggable-video
                v-if="video"
                :active="video.showPopup"
                :videoUrl="video.url"
                :setTime="video.currentTime"
                @close=" video.showPopup = false" />
        </div>
    </div>
</template>

<script>
import { debounce } from '@/mixins'

import 'swiper/dist/css/swiper.css'
import 'vue-multiselect/dist/vue-multiselect.min.css'

export default {
    components: {
        'c-header': () => import('~/components/headers/basic').then(m => m.default || m),
        'c-slim-header': () => import('~/components/headers/slim').then(m => m.default || m),
        'c-popup': () => import('~/components/popups').then(m => m.default || m),
        'c-basic-popup': () => import('~/components/popups/basic').then(m => m.default || m),
        'c-custom-modal': () => import('~/components/modal/custom').then(m => m.default || m),
        'c-terms-popup': () => import('~/components/terms-popup').then(m => m.default || m),
        'c-privacy-popup': () => import('~/components/privacy-popup').then(m => m.default || m),
        'c-collection-navigation': () => import('~/components/navigation/collection').then(m => m.default || m),
        'c-wallet-navigation': () => import('~/components/navigation/wallet').then(m => m.default || m),
        'c-account-navigation': () => import('~/components/navigation/account').then(m => m.default || m),
        'c-settings-navigation': () => import('~/components/navigation/settings').then(m => m.default || m),
        'c-help-navigation': () => import('~/components/navigation/help').then(m => m.default || m),
        'c-funding-navigation': () => import('~/components/navigation/funding').then(m => m.default || m),
        'c-store-navigation': () => import('~/components/navigation/store').then(m => m.default || m),
        'c-asset-navigation': () => import('~/components/navigation/asset').then(m => m.default || m),
        'c-product-navigation': () => import('~/components/navigation/product').then(m => m.default || m),
        'c-project-navigation': () => import('~/components/navigation/project').then(m => m.default || m),
        'c-chat-navigation': () => import('~/components/navigation/chat').then(m => m.default || m),
        'c-idea-navigation': () => import('~/components/navigation/idea').then(m => m.default || m),
        'c-community-navigation': () => import('~/components/navigation/community').then(m => m.default || m),
        'c-welcome-popup': () => import('~/components/welcome-popup').then(m => m.default || m),
        'c-download-popup': () => import('~/components/download-popup').then(m => m.default || m),
        'c-unlock-popup': () => import('~/components/unlock-popup').then(m => m.default || m),
        'c-claim-popup': () => import('~/components/claim-popup').then(m => m.default || m),
        'c-login-popup': () => import('~/components/login-popup').then(m => m.default || m),
        'c-register-popup': () => import('~/components/register-popup').then(m => m.default || m),
        'c-send-funds-popup': () => import('~/components/send-funds-popup').then(m => m.default || m),
        'c-purchase-popup': () => import('~/components/purchase-popup').then(m => m.default || m),
        'c-mission-control-popup': () => import('~/components/mission-control-popup').then(m => m.default || m),
        'c-add-collection-popup': () => import('~/components/popups/add-collection').then(m => m.default || m),
        'c-user-card': () => import('~/components/user-card').then(m => m.default || m),
        'c-clock': () => import('~/components/clock').then(m => m.default || m),
        'c-status-dot': () => import('~/components/status-dot').then(m => m.default || m),
        'c-sidepanel': () => import('~/components/sidepanel').then(m => m.default || m),
        'c-cookie-policy': () => import('~/components/cookie-policy').then(m => m.default || m),
        'c-qr-code': () => import('~/components/qr-code').then(m => m.default || m),
        'c-shortcut-sidebar': () => import('~/components/shortcut-sidebar').then(m => m.default || m),
        'c-load-more': () => import('~/components/buttons/load-more').then(m => m.default || m),
        'c-sidebar-menu-link': () => import('~/components/sidebar-menu/menu-item').then(m => m.default || m),
        'c-profile-chooser': () => import('~/components/profile-chooser').then(m => m.default || m),
        'c-settings': () => import('~/components/settings').then(m => m.default || m),
        'c-social-connect': () => import('~/components/social-connect').then(m => m.default || m),
        'c-draggable-video': () => import('~/components/draggable-video').then(m => m.default || m),
        'c-video': () => import('~/components/draggable-video').then(m => m.default || m)
    },
    mixins: [debounce],
    props: {
        navigationKey: {
            type: String,
            default: null,
            required: false
        },
        navigationTitle: {
            type: String,
            default: null,
            required: false
        },
        showLeftPanel: {
            type: Boolean,
            default: true,
            required: false
        },
        showRightPanel: {
            type: Boolean,
            default: true,
            required: false
        },
        showShortcuts: {
            type: Boolean,
            default: true,
            required: false
        },
        showBreadcrumbs: {
            type: Boolean,
            default: true,
            required: false
        },
        headerText: {
            type: String,
            default: 'BlockHub',
            required: false
        },
        breadcrumbLinks: {
            type: [Array, Boolean],
            default: () => []
        },
        bgImage: {
            type: String,
            default: null
        },
        customShortcuts: {
            type: [Array, Object],
            default: () => []
        }
    },
    data() {
        const self = this

        return {
            loadingState: true,
            userSubmittedConnectionMessage: this.$store.state.application.userSubmittedConnectionMessages[Math.floor(Math.random() * Math.floor(this.$store.state.application.userSubmittedConnectionMessages.length))],
            panelOption: {
                spaceBetween: 0,
                loop: false
            },
            scrollMoreDirection: null,
            slimMode: false,
            mobileMode: false,
            bluredBg: false,
            voteCasted: false,
            reportCoords: null,
            breadcrumbLinksData: this.breadcrumbLinks,
            shortcutItems: [],
            withdrawRequest: {
                type: 'ETH',
                amount: 0,
                address: null,
                processing: false
            },
            newDiscussionRequest: {
                name: '',
                value: '',
                meta: {}
            },
            createArticleRequest: {
                communityId: 1,
                key: '',
                name: '',
                value: '',
                meta: {}
            },
            dragOptions: {
                dropzoneSelector: '.does-not-exist',
                draggableSelector: 'a',
                excludeOlderBrowsers: true,
                showDropzoneAreas: true,
                multipleDropzonesItemsDraggingEnabled: true,
                onDrop: event => {},
                onDragstart: event => {
                    const $target = this.$(event.nativeEvent.target)

                    if ($target.parents('.page-shortcuts').length) {
                        event.stop()
                    }
                },
                onDragend: event => {
                    const $target = this.$(event.nativeEvent.target)
                    let $link = null
                    let $image = null
                    let link = null
                    let image = null
                    let text = null

                    if ($target.is('a')) {
                        $link = $target
                    } else if ($target.is('img')) {
                        $image = $target
                        $link = $target.parents('a').length ? $target.parents('a').first() : null
                    } else {
                        $link = $target.parents('a').length ? $target.parents('a').first() : null
                        $image = $target.parents('a').length ? $target.parents('a').first() : null
                    }

                    if (!$link && $image) {
                        link = $image.data('link')
                    }

                    if (!$image && $link) {
                        image = $link.data('image')
                    }

                    if (!$image && $link) {
                        $image = $link.find('img').length ? $link.find('img').first() : null
                    }

                    // Set text
                    if ($image) {
                        text = $image.attr('alt')
                    } else if ($link) {
                        text = $link.text()
                    }

                    if ($link) {
                        link = $link.attr('href')
                    }

                    if ($image) {
                        image = $image.attr('src')
                    }

                    if (link) {
                        self.$store.commit('application/addShortcut', {
                            r: null,
                            g: null,
                            b: null,
                            text,
                            link,
                            image
                        })
                    }

                    event.stop()
                }
            },
            socials: [
                {
                    name: 'Facebook',
                    description: 'Shares achievements to your news feed.',
                    icon: '/img/icons/facebook.svg',
                    connected: false
                },
                {
                    name: 'Twitter',
                    description: 'Shares achievements to your Twitter feed.',
                    icon: '/img/icons/twitter.svg',
                    connected: false
                },
                {
                    name: 'Twitch',
                    description: 'Lets you contribute to streamers.',
                    icon: '/img/icons/twitch-large.png',
                    connected: false
                },
                {
                    name: 'Discord',
                    description: 'Lets you connect to your Discord voice/chat channels.',
                    icon: '/img/icons/discord.png',
                    connected: false
                },
                {
                    name: 'Steam',
                    description: 'Lets you connect to your Steam account.',
                    icon: '/img/icons/steam.png',
                    connected: false
                }
            ]
        }
    },
    computed: {
        communities() {
            return this.$store.getters['communities/list']
        },
        collections() {
            return this.$store.getters['collections/list']
        },
        isConnected() {
            return this.$store.state.application.connection.internet && this.$store.state.application.connection.datasource
        },
        activeProfile() {
            return this.$store.state.application.activeProfile
        },
        shortcuts() {
            return this.$store.state.application.shortcuts
        },
        connectionStatus() {
            return this.$store.state.application.connection.status
        },
        desktopMode() {
            return this.$store.state.application.desktopMode
        },
        signedIn() {
            return this.$store.state.application.signedIn
        },
        activeNotification() {
            return this.$store.state.application.activeNotification || {}
        },
        dynamicLinks() {
            const [empty, ...links] = this.$route.path.split('/')
            // const names = links.filter()
            const names = links

            return names.map((name, i) => ({
                title: this.$options.filters.upperFirstChar(name),
                to: names.reduce((to, name, index) => index < i + 1 ? to += `/${name}` : to, '')
            }))
        },
        profileChooser() {
            return this.$store.state.application.profileChooser
        },
        video() {
            return this.$store.state.application.video
        }
    },
    watch: {
        'profileChooser'() {
            if (this.signedIn) {
                this.bluredBg = Boolean(this.profileChooser)
            }
        },
        async '$store.state.application.activeProfile'() {
            if (!this.$store.state.application.activeProfile.key) return

            this.$store.state.application.tokenCount = null

            const res = await this.$api.service('profiles/balance').find({
                query: {
                    type: 'HBX',
                    address: this.$store.state.application.activeProfile.key
                }
            })

            this.$store.state.application.tokenCount = res.balance
        }
    },
    asyncData() {
        this.$store.dispatch('communities/find', {
            query: {
                $sort: {
                    createdAt: -1
                },
                $limit: 25
            }
        })

        this.$store.dispatch('collections/find', {
            query: {
                $sort: {
                    createdAt: -1
                },
                $limit: 25
            }
        })
    },
    updated() {
        this.userSubmittedConnectionMessage = this.$store.state.application.userSubmittedConnectionMessages[Math.floor(Math.random() * Math.floor(this.$store.state.application.userSubmittedConnectionMessages.length))]
        this.checkScrollButton()
    },
    created() {
        this.handleResize()
        this.checkScrollButton()

        if (process.client) {
            window.addEventListener('resize', this.handleResize())
        }

        this.updateBreadcrumbLinks()

        // setTimeout(() => {
        //     $(this.$refs.poweredBy).fadeOut(400)
        // }, 10 * 1000)

        const fractionCountMap = {
            'BTC': 6,
            'ETH': 6,
            'DAI': 2
        }

        this.$CurrencyFilter.setConfig({
            symbol: this.$store.state.application.account.currency.symbol,
            thousandsSeparator: ',',
            fractionCount: fractionCountMap[this.$store.state.application.account.currency.code] || 2,
            fractionSeparator: '.',
            symbolPosition: 'front',
            symbolSpacing: true
        })
    },
    mounted() {
        this.$nextTick(() => {
            this.loadingState = false

            if (process.client) {
                if (document.getElementById('startup-loader')) {
                    document.getElementById('startup-loader').style.display = 'none'
                }

                // check sidebar button
                this.$(this.$refs.scroll_sidebar).scroll(() => {
                    this.debounce(() => {
                        this.checkScrollButton()
                    }, 250)
                })
                // this.checkScrollButton()

                // setTimeout(() => {
                //     this.checkScrollButton()
                // }, 1000)
                setInterval(() => {
                    this.checkScrollButton()
                }, 500)
            }
        })

        if (process.client) {
            window.onmousemove = e => { // TODO replace?
                document.body.style.cursor = e.altKey ? 'crosshair' : 'default'
            }

            this.$(document).on('click', e => {
                if (e.altKey) {
                    e.preventDefault()

                    this.reportCoords = {
                        x: e.clientX,
                        y: e.clientY
                    }

                    this.$store.state.application.activeModal = 'report'

                    return false
                }

                return true
            })
        }
    },
    methods: {
        sendDesktopMessage() {
            if (!window.isElectron) {
                return window.alert('Not on desktop')
            }

            this.$desktop.sendCommand('ping', this.$refs.desktopMessage.value)
            this.$desktop.on('pong', (event, msg) => console.log('Message from desktop: ', msg))
        },
        createArticle(request) {
            request.ownerId = this.$store.state.application.activeProfile.id

            this.$store.dispatch('discussions/create', request).then(res => {
                this.$router.push(`/help/${res.id}/article/${request.key}`)
            })

            this.$store.state.application.activeModal = null
        },
        async submitNewDiscussion(request) {
            request.community = { id: this.$store.state.application.activeModalData.community.id }
            request.owner = { id: this.$store.state.application.activeProfile.id }

            const result = await this.$store.dispatch('discussions/create', [request, {
                query: {
                    $eager: '[community, owner]'
                }
            }])

            // this.notice = "Congratulations, your discussion has been created!"

            this.$store.state.application.activeModal = null
            this.$router.push(`/community/discussion/${result.id}`)
        },
        deposit() {

        },
        async withdraw() {
            const fromAddress = this.$store.state.application.activeProfile.address
            let { type, toAddress, amount } = this.withdrawRequest

            amount = Number(amount)

            this.withdrawRequest.processing = true

            await this.$desktop.sendCommand('transferTokens', {
                type,
                fromAddress,
                toAddress,
                amount
            })

            this.withdrawRequest = { ...this.withdrawRequest, processing: false }
        },
        onSwipeLeft() {
            this.showRightPanel = true
        },
        onSwipeRight() {
            this.showLeftPanel = true
        },
        vote() {
            this.$store.commit('application/entry', { key: 'editable_page', value: window.location.hash, user: this.$store.state.application.account.address })
            this.voteCasted = true
        },
        sendReport() {
            if (this.reportCoords) {
                const getPathTo = element => {
                    if (element.tagName === 'HTML') return '/html[1]'
                    if (element === document.body) return '/html[1]/body[1]'

                    let ix = 0
                    const siblings = element.parentNode.childNodes
                    for (let i = 0; i < siblings.length; i++) {
                        const sibling = siblings[i]
                        if (sibling === element) return `${getPathTo(element.parentNode)}/${element.tagName.toLowerCase()}[${ix + 1}]`
                        if (sibling.nodeType === 1 && sibling.tagName === element.tagName) ix++
                    }
                }

                const cmd = {
                    key: 'report',
                    data: {
                        coords: { x: this.reportCoords.x, y: this.reportCoords.y },
                        path: this.$router.currentRoute.fullPath,
                        element: getPathTo(document.elementFromPoint(this.reportCoords.x, this.reportCoords.y)),
                        message: this.$refs.reportText.value
                    }
                }

                this.$store.commit('application/entry', { key: 'report', value: JSON.stringify(cmd), user: this.$store.state.application.account.address })
            }

            this.$store.commit('application/activeModal', null)
        },
        scrollSidebarDown() {
            this.$('#scroll_sidebar').animate({ scrollTop: '+=100', duration: '150' })
            this.checkScrollButton()
        },
        scrollSidebarUp() {
            this.$('#scroll_sidebar').animate({ scrollTop: '-=500', duration: '150' })
            this.checkScrollButton()
        },
        checkScrollButton() {
            // console.log('Checking scroll')
            try {
                if (this.$('#scroll_sidebar').children().height() > this.$('#scroll_sidebar').height()) {
                    // Change the scroll direction when it hits the last 10px of the sidebar
                    if ((this.$('#scroll_sidebar').scrollTop() + this.$('#scroll_sidebar').innerHeight()) >= (this.$('#scroll_sidebar')[0].scrollHeight - 10)) {
                        this.scrollMoreDirection = 'up'
                    } else {
                        this.scrollMoreDirection = 'down'
                    }
                } else {
                    this.scrollMoreDirection = null
                }
            } catch (e) {

            }
        },
        updateBreadcrumbLinks() {
            if (this.breadcrumbLinksData.length === 0) {
                if (this.$route.meta.breadcrumb) {
                    this.breadcrumbLinksData = this.$route.meta.breadcrumb
                } else if (this.$route.meta.breadcrumb === false) {
                    this.breadcrumbLinksData = []
                } else if (this.$route.name !== 'Home') {
                    this.breadcrumbLinksData = [
                        { to: { path: '/' }, title: 'Home' },
                        { to: { path: this.$route.path }, title: this.$route.name }
                    ]
                }
            }
        },
        handleResize(event) {
            if (!process.client) return

            this.mobileMode = document.documentElement.clientWidth < 768 ? true : false
        }
    }
}
</script>

    <style>
/*------------------------------------------------------------------

  [Custom font styles for Barlow]

  Project:        BlockHub
  Version:        v1.0.0
  Last change:    17/05/18 [Release]

-------------------------------------------------------------------*/

/* latin-ext */
@font-face {
  font-family: 'Barlow';
  font-style: italic;
  font-weight: 300;
  src: local('Barlow Light Italic'), local('Barlow-LightItalic'),url('../../assets/fonts/barlow/Barlow-LightItalic.woff2') format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Barlow';
  font-style: italic;
  font-weight: 300;
  src: local('Barlow Light Italic'), local('Barlow-LightItalic'),url('../../assets/fonts/barlow/Barlow-LightItalic.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Barlow';
  font-style: italic;
  font-weight: 400;
  src: local('Barlow Italic'), local('Barlow-Italic'),url('../../assets/fonts/barlow/Barlow-Italic.woff2') format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Barlow';
  font-style: italic;
  font-weight: 400;
  src: local('Barlow Italic'), local('Barlow-Italic'),url('../../assets/fonts/barlow/Barlow-Italic.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Barlow';
  font-style: italic;
  font-weight: 500;
  src: local('Barlow Medium Italic'), local('Barlow-MediumItalic'),url('../../assets/fonts/barlow/Barlow-MediumItalic.woff2') format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Barlow';
  font-style: italic;
  font-weight: 500;
  src: local('Barlow Medium Italic'), local('Barlow-MediumItalic'),url('../../assets/fonts/barlow/Barlow-MediumItalic.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Barlow';
  font-style: italic;
  font-weight: 700;
  src: local('Barlow Bold Italic'), local('Barlow-BoldItalic'),url('../../assets/fonts/barlow/Barlow-BoldItalic.woff2') format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Barlow';
  font-style: italic;
  font-weight: 700;
  src: local('Barlow Bold Italic'), local('Barlow-BoldItalic'),url('../../assets/fonts/barlow/Barlow-BoldItalic.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 300;
  src: local('Barlow Light'), local('Barlow-Light'), url("/fonts/barlow/Barlow-Light.woff2") format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 300;
  src: local('Barlow Light'), local('Barlow-Light'), url("/fonts/barlow/Barlow-Light.woff2") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 400;
  src: local('Barlow Regular'), local('Barlow-Regular'),url('../../assets/fonts/barlow/Barlow-Regular.woff2') format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 400;
  src: local('Barlow Regular'), local('Barlow-Regular'),url('../../assets/fonts/barlow/Barlow-Regular.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 500;
  src: local('Barlow Medium'), local('Barlow-Medium'), url("/fonts/barlow/Barlow-Medium.woff2") format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 500;
  src: local('Barlow Medium'), local('Barlow-Medium'), url("/fonts/barlow/Barlow-Medium.woff2") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 700;
  src: local('Barlow Bold'), local('Barlow-Bold'), url("/fonts/barlow/Barlow-Bold.woff2") format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 700;
  src: local('Barlow Bold'), local('Barlow-Bold'), url("/fonts/barlow/Barlow-Bold.woff2") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
    </style>
    <style>
#left-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 247px;
    height: 100%;
    content: ' ';
    background: url(/img/body-left-bg.png);
    background-size: 247px 100%;
    background-repeat: no-repeat;
    z-index: 1;
    opacity: 0.7;
    animation: pulse-opacity ease-in-out 2s infinite alternate;
}

#right-bg {
    position: fixed;
    top: 0;
    right: 0;
    width: 247px;
    height: 100%;
    content: ' ';
    background: url(/img/body-right-bg.png);
    background-size: 247px 100%;
    background-repeat: no-repeat;
    z-index: 1;
    opacity: 0.7;
    animation: pulse-opacity ease-in-out 2s infinite alternate;
}

#header-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 382px;
    content: ' ';
    background: url(/img/backgrounds/1.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-color: #30314c;
    z-index: 0;
}

.header-bg__layer-1, .header-bg__layer-2, .header-bg__layer-3 {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 383px;
    z-index: 0;
}

.header-bg__layer-1 {
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#30314d+0,30314d+100&0.34+0,1+100 */
    background: linear-gradient(to bottom, rgba(48, 49, 77, 0.34) 0%, rgba(48, 49, 77, 1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}

@keyframes pulse-opacity {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

    </style>

<style>
    #fixed-panel {
        display: block;
    }

    .header-bg__layer-2 {
        position: fixed;
    /* background: rgba(34, 30, 58, 1);
    box-shadow: inset 0 0 3px #000; */
        height: 48px;
    }
</style>

<style lang="scss" scoped>
    .page{
        min-height: unset; // Test
    }
    [v-cloak] {
        display: none;
    }
    .make-it-blur {
        filter: blur(5px);

    }
    .content {
        padding: 20px 0 20px 0;
        z-index: 2;
    }
    .content > * {
        padding: 20px 30px !important;
    }
    .version {
        position: fixed;
        bottom: 10px;
        right: 24px;
        font-size: 16px;
        font-family: 'Barlow', sans-serif;
        color: rgba(255, 255, 255, 0.2);
    }

    .page-sidepanel {
        text-align: right;
        padding-right: 30px;
    }

    .navigation {
        margin-bottom: 50px;
    }

    .navigation .text {
        float: right;
    }

    #powered-by {
        position: fixed;
        bottom: 10px;
        right: 10px;
        width: 200px;
        height: 50px;
        opacity: 0.85;
        z-index: 100;

        animation: badgeGlimmer ease-out;
        animation-fill-mode: forwards;
        animation-duration: 1s;
        animation-delay: .2s
    }

    @keyframes badgeGlimmer {
        0% {
            left: -100%;
            opacity: .3
        }

        100% {
            left: 200%;
            opacity: 1
        }
    }

    .cookie-policy {
        display: none !important;
    }

    .slide-chooser {
        margin-bottom: 50px;

        .c-button {
            background: transparent;
            opacity: 0.5;
            color: #fff;
            padding: 6px 6px;

            &.active {
                opacity: 1;
            }

            &:hover {
                background: transparent;
                opacity: 1;
            }

            span {
                font-size: 16px;
            }
        }
    }

    .clock {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: -1;
    }

    .status-bar {
        display: flex;
        justify-content: center;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 70px;
        padding: 0 0 6px 0;
        color: #fff;
        z-index: 120;
        cursor: pointer;

        &.bad {
            background: #48171D;
            border-top: 2px solid #48171D;
        }

        &.expanded {
            width: 100%;
        }

        .status-dot {
            display: inline-block;
            padding: 6px;
        }
    }

    .quick-launch {
        position: fixed;
        top: 14px;
        right: 230px;
        z-index: 102;
    }

    .loader-block {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        z-index: 20;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #dfdfe9;
        background: rgba(0, 0, 0, 0.3);
    }

    .loader-block .loader-block__container {
        width: 100%;
        height: 100%;
        position: relative;
        text-align: center;
        padding-top: 100px;
        font-size: 14px;
    }

    .loader-block .loader-block__spinner {
        left: 0px;
        top: 0px;
        width: 20px;
        height: 20px;
        animation: rotate 500ms infinite linear;
        position: relative;
        zoom: 4;
        margin: 0 auto;
        &:before{
            position: absolute;
            left: 3px;
            top: 3px;
            content: " ";
            width: 14px;
            height: 14px;
            border: 2px solid #fff;
            border-right-color: transparent;
            border-radius: 7px;
        }
    }

    .loader-block__message {
        color: #fff;
        font-size: 20px;
        font-style: italic;
        text-transform: uppercase;
        margin: 40px auto 10px;
    }

    .loader-block__user {
        color: #999;
        text-transform: uppercase;

        a {
            color: #ddd;
            font-weight: bold;
        }
    }

    .loader-block__status-code {
        margin-top: 80px;
    }

    .loader-block__status-message {
        color: #ddd;
        font-size: 16px;
        margin-top: 30px;

        p {
            text-transform: uppercase;
            margin-bottom: 20px;
        }

        div {
            margin: 5px 0;
        }
    }

    .loader-block__links {
        position: absolute;
        bottom: 30px;
        left: 0;
        text-align: center;
        width: 100%;
        font-size: 16px;

        p {
            color: #999;
        }

        a {
            margin-right: 20px;
            font-size: 18px;
            font-weight: bold;
            color: #fff;

            span {
                color: #fff;
                margin-right: 5px;
            }
        }
    }

    .connection-status {

    }

    .connection-status__status-code {
        margin-top: 80px;
    }

    .connection-status__status-items {
        color: #ddd;
        font-size: 16px;
        margin-top: 30px;
        text-align: center;

        p {
            text-transform: uppercase;
            margin-bottom: 20px;
        }

        div {
            margin: 15px 0;

            span {
                margin-left: 5px;
            }
        }
    }

    .messages-action {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        a {
            padding: 3px;
            background: #5D75F7;
            border-radius: 3px;
            color: #fff;
            font-size: 14px;
            &:hover {
                background: #5065d4;
            }
        }
        @media (max-width: 1400px) {
            flex-direction: column;
            a:nth-child(1){
                margin-bottom: 10px;
            }
        }
    }

    .message-list__item {
        background: rgba(0, 0, 0, .5);
        border-radius: 5px;
        padding: 6px;
        color: #fff;
        text-align: left;
        position: relative;
        margin-bottom: 10px;
        &:last-child {
            margin-bottom: 0;
        }
        h5 {
            max-width: calc(100% - 20px);
        }
        i {
            position: absolute;
            top: 6px;
            right: 6px;
            font-size: 16px;
            color: #fff;
        }
    }

    .page .page__content {
        padding-top: 100px;
        position: relative;
        &.with-shortcuts {
            padding-left: 70px;
            .page-aside {
                left: 70px;
            }
        }

        .page-aside,
        .page-sidepanel {
            height: 100%;
            top: 0;
            padding-top: 100px;
            padding-right: 20px;
            background: rgba(48, 47, 76, 1);
            background: linear-gradient(to right, rgba(0, 0, 0, 0.2) 88%, rgba(0, 0, 0, 0.2) 91%, rgba(0, 0, 0, 0) 100%);
            /*box-shadow: inset 0 0 3px #000;*/
            border: 0 none;
        }

        .page-sidepanel {
            background: linear-gradient(to left, rgba(0, 0, 0, 0.2) 88%, rgba(0, 0, 0, 0.2) 91%, rgba(0, 0, 0, 0) 100%);
        }
    }

    .left-sidebar {
        overflow: hidden;
        height: calc(100% - 100px);
        .load-more-slot{
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            line-height: 18px;
        }

        .navigation {
            padding-bottom: 80px;
        }
    }
    .left-sidebar__content{
        overflow-y: scroll;
        overflow-x: hidden;
        height: calc(100% - 60px);
    }
    .col-lg-6{
        @media (max-width: 1500px){
        }
    }

    .page-shortcuts {
        position: fixed;
        top: 0px;
        left: 0;
        width: 70px;
        padding: 40px 10px 10px;
        z-index: 99;
        background: rgba(0, 0, 0, 0.5);
        bottom: 0;
        height: 100%;
        padding-bottom: 50px;
    }

    .page {
        &:after {
            content: '';
            position: fixed;
            bottom: 0;
            left: 0;
            width: 246px;
            height: 182px;
            z-index: 1;
            background: url("../../assets/img/left-fade.png") bottom left no-repeat;
            background-size: 100% auto;
            pointer-events: none;
        }

    }

    .create-shortcut__block {
        /*height: 200px;*/
        text-align: center;
        transition: all .3s ease;
        &:hover{
            cursor: pointer;
            transform: scale(1.1);
        }
    }

    .content {
        width: 100%;
        padding-top: 0;
        margin: 0 auto;

    }

    .page__with-left-sidebar .content, .page__with-right-sidebar .content {
        width: calc(100% - 250px);
        margin: 0 0 0 auto;
    }

    .page__with-left-sidebar.page__with-right-sidebar .content {
        width: calc(100% - 500px);
        margin: 0 auto;
    }
    .right-sidebar,
    .left-sidebar{
        z-index: 98;
    }

    @media (max-width: 575px) {
        #content {
            padding-top: 50px;
        }
    }

    @media (max-width: 768px) {
        .clock, .version {
            display: none;
        }
    }

    @media (max-width: 991px) {

    }

    @media (max-width: 1200px) {
        .page .page__content{
            padding-top: 100px!important;
        }
        .right-sidebar,
        .left-sidebar{
            background: #30314b!important;
            min-height: 100%;
            top: 0!important;
            padding-top: 120px;
            display: none!important;
        }
        .content {
            width: 100%!important;
            .container-fluid{
                padding: 20px;
            }
        }
        .page:before {
            display: none;
        }

    }
    @media (max-width: 1400px) {
        .page-aside,
        .page-sidepanel{
            width: 220px!important;
        }
        .page-aside .navigation{
            padding-left: 15px;
        }
        .page-sidepanel{
            padding-right: 15px;
            .page-sidepanel{
                width: 100%!important;
            }
        }
        .content {
            width: 100%;
        }

        .page__with-left-sidebar .content, .page__with-right-sidebar .content {
            width: calc(100% - 200px);
            margin: 0 0 0 auto;
        }

        .page__with-left-sidebar.page__with-right-sidebar .content {
            width: calc(100% - 400px);
            margin: 0 auto;
        }
        .load-more.fixed{
            span{
                font-size: 14px!important;
            }
        }
    }
</style>

<style lang="scss">
    .swiper-button-prev,
    .swiper-button-next{
        user-select: none;
        outline: none;
        box-shadow: none;
    }
    .snotify{
        width: 360px!important;
        .snotifyToast{
            border-radius: 5px;
            position: relative;
            font-size: 14px;
            color: #f4d76f;
            border-color: rgba(250, 216, 93, .4);
            &:after{
                content: "";
                position: absolute;
                top: 13px;
                right: 13px;
                background: url("../../static/img/snotifi-act.png") no-repeat right top;
                width: 100px;
                height: 16px;
                background-size: 100% auto;
            }
            .snotifyToast__inner{
                display: flex;
                padding: 13px 13px 15px 63px;
                min-height: 50px;
                font-size: 12px;
                min-height: 65px;
                .snotify-icon{
                    right: unset;
                    left: 13px;
                }
            }
            .snotifyToast__title{
                font-size: 14px;
                font-weight: bold;
                text-transform: uppercase;
            }
            .snotifyToast__body{
                line-height: 14px;
            }
            &.snotifyToast{
                background-color: rgba(28, 32, 50, .8);
                border: 1px solid #535358;
            }
            &.snotify-warning{
                .snotify-icon--warning{
                    background-image: url("../../static/img/snotify-warning-icon.png");
                    background-size: 100% auto;
                    background-position: center;
                    background-repeat: no-repeat;
                }
            }
            .snotify-icon{
                height: 40px;
                width: 40px;
            }
        }
        .snotifyToast__progressBar{
            display: none;
        }
        &.snotify-leftTop,
        &.snotify-centerTop,
        &.snotify-rightTop {
            top: 70px;
        }
    }
    .page-aside .navigation, .page-sidepanel .navigation{
        padding: 10px 10px 10px 20px!important;
    }

</style>
