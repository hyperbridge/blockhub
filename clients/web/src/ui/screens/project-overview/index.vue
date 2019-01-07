<template>
    <div class="row mx-0">
        <div class="col-12 col-lg-7 col-xl-8">
            <c-screen-gallery :items="project.images.preview" v-if="project.images && project.images.preview" />

            <div class="action" hidden>Currently crowdfunding</div>

            <c-block title="Participation Tiers" :noGutter="true" :onlyContentBg="true" :bgGradient="true">
                <c-participation-tier v-for="(item, index) in participationTiers" 
                    :key="index"
                    :id="item.id" 
                    :price="item.price" 
                    :sold="item.sold" 
                    :left="item.left" 
                    :title="item.title" 
                    :tag="item.tag"
                    :inList="(index < participationTiers.length-1) ? true : false"
                />
            </c-block>

            <div class="editor-container">
                <div class="editor" v-if="editing">
                    <button class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right"
                            @click="activateElement('description')"
                            v-if="!activeElement['description']">Change Description <span
                        class="fa fa-edit"></span></button>

                    <div class="form-control-element form-control-element--right"
                         v-if="activeElement['description']">
                        <input ref="description" name="name" type="text" class="form-control"
                               placeholder="Project description..." v-model="project.description"/>
                        <div class="form-control-element__box form-control-element__box--pretify bg-secondary">
                            <span class="fa fa-check"
                                    @click="deactivateElement('description')"></span>
                        </div>
                    </div>
                </div>
                <p class="project__description">{{ project.description }}</p>
            </div>

            <c-block title="About Game" class="margin-bottom-30" :noPadding="true" :noGutter="true" :bgGradient="true" :onlyContentBg="true" v-if="!editing">
                <div class="main-content" v-html="project.value">
                    {{ project.value }}
                </div>
            </c-block>

            <div class="content-editor" v-if="editing">
                <div id="summernote" v-html="project.value">{{ project.value }}</div>
            </div>
        </div>
        <div class="col-12 col-lg-5 col-xl-4">

            <div class="card invert" v-if="project.funding">
                <div class="card-body">
                    <a class="nav-link editor-container editor-container--style-2"
                       href="javascript:;" v-if="editing && !activeElement['campaign']"
                       @click="showTab('configure')">
                        <i class="fas fa-cog"></i>
                        <span>Configure Campaign</span>
                    </a>
                    <h2 class="title">Crowdfunding campaign</h2>
                    <c-button-fav
                        target="wishlist"
                        :active="!!wishlist[project.id]"
                        @click="$store.dispatch(
                            'community/updateWishlist',
                            ['project', project.id]
                        )"
                    />
                    <div class="project">
                        <div class="project__progress">
                            <div v-for="(stage, index) in project.funding.stages" :key="index"
                                 :class="stage.status"
                                 class="project__progress-stage">
                                <i class="fas fa-check" v-if="stage.status === 'Done'"></i>
                                <i class="fas fa-clock" v-if="stage.status === 'InProgress'"></i>
                                <span class="stage_line"></span>
                                <span class="name">{{ stage.text}}</span>
                            </div>
                        </div>
                        <div class="project__info">
                            <div class="funded">
                                <div class="text">114% Funded</div>
                                {{ project.funding.fundedAmount | convertCurrency }}
                            </div>
                            <div class="goal">
                                <div class="text">Goal</div>
                                {{ project.funding.goalAmount | convertCurrency }}
                            </div>
                            <div
                                v-for="(prop, index) in crowdfundingProps"
                                :key="index"
                                :class="prop"
                            >
                                <div class="progress-bar-vertical">
                                    <c-progress-bar
                                        :values="{
                                            reached: project.funding[prop + '_amount'],
                                            goal: project.funding.goalAmount
                                        }"
                                        direction="vertical"
                                    />
                                </div>
                                <div>
                                    <p class="text"><strong>{{ prop | upperFirstChar }}</strong></p>
                                    {{ project.funding[prop + '_amount'] | convertCurrency }}
                                </div>
                            </div>
                        </div>
                        <div class="project__action">
                            <c-button status="share" swapDirection>Share</c-button>
                            <c-button status="info" icon="check" swapDirection>Follow</c-button>
                            <c-button status="support" swapDirection>Support</c-button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card invert milestones" v-if="project.milestones">
                <div class="card-body">
                    <a href="#" class="editor-container editor-container--style-2"
                       v-if="editing && !activeElement['milestones']">
                        <i class="fas fa-cog"></i>
                        <span>Set Up Milestones</span>
                    </a>
                    <h2 class="title">Milestones</h2>
                    <ul class="milestones__list">
                        <li v-for="(item, index) in project.milestones.items"
                            v-bind:class="{ done: item.status === 'Done' }" :key="index">
                            <div class="stepNumber" v-if="item.status === 'Done'">
                                <i class="fas fa-check"></i>
                            </div>
                            <div class="stepNumber" v-else>
                                {{ item.stepNumber }}
                            </div>
                            <div class="text">
                                {{ item.title }}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <c-community-spotlight :discussions="project.community.discussions"
                                   :community_url="`#/project/${project.id}`" :editing="editing"
                                   :activeElement="activeElement['milestones']"
                                   class="margin-bottom-30" />

            <c-block title="Contribute" class="margin-bottom-30" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                <c-contribute-form @click="showContributeModal" />
            </c-block>

            <c-contribute-pledge @click="showContributeModal" v-for="(pledge, index) in project.pledges" :key="index" :pledge="pledge" :currency="project.meta.currency" />

            <c-decentralization-meter v-decentralized-mode />

            <c-basic-popup
                :activated="$store.state.application.activeModal === 'contribute'"
                @close="$store.commit('application/activateModal', null)"
            >
                <div class="h4" slot="header" style="text-align: left">Contribute</div>
                <template slot="body">
                    <div v-if="syncStep === 1">
                        <h3 class="margin-auto"><strong>Status:</strong> unsynced </h3>
                        Contract Address: 0xasdadas<br />

                        <c-button class="c-button--lg outline-white margin-top-20 margin-auto" @click="startSync">Start</c-button>
                    </div>
                    <div v-if="syncStep === 2">
                    
                    </div>
                    <br />
                    <div class="padding-40 loading-process" style="position: relative" v-if="syncing">
                        <div class="loading loading--w-spinner"><div><div class="loading-spinner"></div></div></div>
                    </div>
                </template>
                <p slot="footer" class="margin-top-20">
                    <c-button status="dark" to="/help">Need help? Check the Help Center</c-button>
                </p>
            </c-basic-popup>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        props: ['project', 'editing'],
        components: {
            'c-game-plan': (resolve) => require(['@/ui/components/game-plans/plan'], resolve),
            'c-screen-gallery': (resolve) => require(['@/ui/components/screen-gallery/gallery'], resolve),
            'c-tags': (resolve) => require(['@/ui/components/tags'], resolve),
            'c-rating-block': (resolve) => require(['@/ui/components/rating-block'], resolve),
            'c-frequently-traded-assets': (resolve) => require(['@/ui/components/frequently-traded-assets'], resolve),
            'c-community-spotlight': (resolve) => require(['@/ui/components/community-spotlight'], resolve),
            'c-participation-tier': (resolve) => require(['@/ui/components/participation-tier'], resolve),
            'c-heading-bar': (resolve) => require(['@/ui/components/heading-bar'], resolve),
            'c-progress-bar': (resolve) => require(['@/ui/components/progress-bar'], resolve),
            'c-contribute-form': (resolve) => require(['@/ui/components/contribute/form.vue'], resolve),
            'c-contribute-pledge': (resolve) => require(['@/ui/components/contribute/pledge.vue'], resolve),
            'c-badges': (resolve) => require(['@/ui/components/project/badges'], resolve),
            'c-decentralization-meter': (resolve) => require(['@/ui/components/decentralization-meter'], resolve),
            'c-button-fav': (resolve) => require(['@/ui/components/buttons/favorite'], resolve),
        },
        data() {
            let data = {
                errors: [],
                activeElement: {
                    name: false,
                    backgroundImage: false,
                    storeImage: false,
                    developerTags: false,
                    description: false,
                    content: false
                },
                authorTagOptions: [
                    'game',
                    'mod',
                    'other'
                ],
                crowdfundingProps: ['spent', 'locked', 'overflow']
            }

            if (this.$store.state.application.environmentMode !== 'production') {
                data = {...data, ...{
                    participationTiers: [
                        {
                            id: 1,
                            price: '29',
                            sold: '222',
                            left: '9',
                            tag: 'Combo',
                            title: 'Game Standard Edition'
                        },
                        {
                            id: 2,
                            price: '219',
                            sold: '32',
                            left: '1',
                            tag: 'Combo',
                            title: 'Game Standard Edition'
                        },
                        {
                            id: 3,
                            price: '9',
                            sold: '981',
                            left: '1',
                            tag: 'Combo',
                            title: 'Game Standard Edition'
                        }
                    ]
                }}
            }

            return data
        },
        methods:{
            showContributeModal() {
                this.$store.commit('application/activateModal', 'contribute')
                //this.$store.commit('application/showProfileChooser', true)
                //this.$store.dispatch('application/activateModal', 'send-funds')
            }
        },
        computed: {
            wishlist() {
                return this.$store.state.application.activeProfile && this.$store.state.application.activeProfile.productWishlist || {}
            }
        }
    }
</script>


<style lang="scss">
    .content-editor .note-editor.note-frame .note-editing-area .note-editable {
        background-color: transparent;
        color: inherit;
    }

    .content-editor .card {
        background: rgba(0, 0, 0, 0.13);
        color: #dfdfe9;
        border: 1px solid rgba(70, 70, 70, 0.5);
    }

    .content-editor .note-editor.note-frame .note-statusbar {
        background: transparent;
        border: 0 none;
    }

    #content > .container-fluid {
        padding-top: 0;
    }
</style>

<style lang="scss" scoped>
    .page__content > .content {
        width: calc(100% - 250px);
        padding-top: 0;
        margin: 0 0 0 auto;
    }

    .tab-content > .row.active {
        display: flex;
    }

    .errors {
        margin-bottom: 60px;
    }

    .form-group label {
        font-size: 18px;
        color: #C6C6D6;
    }

    .form-group .form-text {
        font-size: 14px;
        color: #A2A3BE;
    }

    .switch.switch-sm {
        margin: 0;
    }

    .editor {
        .btn, input {
            border-color: #1b1c2b;
            background: #1B1C2B;
            border-radius: 6px;
            box-shadow: 1px 1px 0px #101010;
            font-size: 17px;
            padding-top: 8px;

            span {
                font-size: 17px;
            }
        }
        .form-control-element .form-control-element__box--pretify {
            line-height: 11px;
        }
    }

    .editor.editor--offset-above {
        position: absolute;
        top: -45px;
        left: -5px;
        z-index: 10;
        text-align: right;
    }

    .editor-container {
        position: relative;
    }

    .editor-container--style-2 {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        background: rgba(0, 0, 0, 0.4);
        width: 100%;
        height: 100%;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
        text-align: center;
        font-weight: bold;
        color: #fff;

        i {
            font-size: 50px;
            margin-bottom: 20px;
        }

        span {
            font-size: 18px;
        }

        &:hover {
            text-decoration: none;
        }
    }

    .editor-container--style-2 ~ * {
        opacity: 0.3;
    }

    .main-content {
        padding: 15px;
        border-radius: 5px;
        overflow: hidden;
        color: #C6C6D6;
        font-size: 14px;
        h2 {
            font-size: 21px;
            margin-bottom: 30px;
        }
        p {
            margin-bottom: 20px;
        }
        img {
            max-width: 100%;
            height: auto;
        }
        &.with_bg {
            color: #1C2032;
            background: #FEEBCE;
        }
    }

    .project__description {
        padding: 15px;
        font-size: 16px;
    }

    .project__progress {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-wrap: nowrap;
        overflow: hidden;
        margin: 10px -6%;
    }

    .project__progress-stage {
        width: 50%;
        text-align: center;
        span {
            display: inline-block;
            width: 100%;
            position: relative;
            text-transform: uppercase;
            font-weight: bold;
            overflow: hidden;
            &.stage_line {
                background: #3D691F;
                height: 15px;
                float: left;
            }
            &.name {
                padding-top: 15px;
                &:after {
                    position: absolute;
                    top: 5px;
                    width: 2px;
                    content: "";
                    height: 8px;
                    left: calc(50% - 1px);
                    display: inline-block;
                    background: #fff;
                }
            }
        }
        i {
            margin-bottom: 7px;
            font-size: 10px;
            display: block;
            width: 100%;
        }
        &:first-child {
            .stage_line {
                border-radius: 5px 0 0 5px;
                width: 65%;
                float: right;
            }
            &.InProgress {
                .stage_line {
                    &:after {
                        left: 25%;
                    }
                }
            }
        }
        &:last-child {
            .stage_line {
                border-radius: 0 5px 5px 0;
                width: 65%;
                float: left;
            }
            &.InProgress {
                .stage_line {
                    &:after {
                        left: 75%;
                    }
                }
            }
        }
        &.done {
            span {
                &:before {
                    background: #3D691F;
                }
            }
            i {
                color: #3D691F;
            }
        }
        &.InProgress {
            .stage_line {
                &:after {
                    position: absolute;
                    background: #5EA72B;
                    height: 100%;
                    left: 0%;
                    right: 0;
                    content: "";
                    display: inline-block;
                }
            }
            i {
                color: #FADC72;
            }
        }
        &.awaiting {
            .stage_line {
                background: #5EA72B;
            }
        }
    }

    .project__info {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 10px 0;
        .funded,
        .goal {
            background: rgba(0, 0, 0, 0.16);
            border-radius: 5px;
            width: calc(50% - 5px);
            padding: 10px;
            color: #fff;
            font-size: 18px;
            .text {
                font-size: 14px;
                font-weight: bold;
                margin-bottom: 5px;
                text-transform: uppercase;
            }
        }
        .spent,
        .locked,
        .overflow {
            width: 32%;
            margin-top: 10px;
            font-size: 15px;
            position: relative;
            display: flex;
            .text {
                margin-bottom: 4px;
            }
            .progress-bar-vertical {
                width: 7px;
                min-height: calc(100% - 7px);
                display: flex;
                border-radius: 4px;
                align-items: flex-end;
                margin-right: 8px;
                border-radius: 4px;
                background-color: rgba(255,255,255,.3);
                overflow: hidden;
                .progress-bar {
                    width: 100%;
                    height: 0;
                    -webkit-transition: height 0.6s ease;
                    -o-transition: height 0.6s ease;
                    transition: height 0.6s ease;
                }
            }
        }
    }

    .project__action {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        margin-top: 15px;
        a {
            width: 31%;
            border-radius: 5px;
            color: #fff;
            font-size: 13px;
            text-transform: uppercase;
            text-align: center;
            box-shadow: 0 1px 3px rgba(0, 0, 0, .16);
            line-height: 24px;
            font-weight: bold;
            text-decoration: none;
            i {
                margin-right: 5px;
                font-size: 16px;
            }
            &.follow_link {
                background: #436CC9;
                &:hover {
                    background: #314e92;
                }
            }
            &.share_link {
                background: #43B4C9;
                &:hover {
                    background: #348b9b;
                }
            }
            &.support_link {
                background: #43C981;
                &:hover {
                    background: #2e8b59;
                }
            }
        }
    }

    .card {
        background: transparent;
        border: 0 none;
    }

    .milestones__list {
        padding: 0;
        margin: 0;
        li {
            list-style: none;
            font-size: 14px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 5px 5px 5px 0;
            border-radius: 5px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
            background: #27283E;
            margin-bottom: 10px;
            &:last-child {
                margin-bottom: 0;
            }
            &.done {
                border: 2px solid #5EA72B;
                i{
                    color: #5EA72B;
                }
            }
            .text {
                flex-basis: calc(100% - 40px);
                text-align: left;
            }
            .stepNumber {
                flex-basis: 40px;
                text-align: center;
                font-size: 22px;
            }
            .status_done {
                flex-basis: 40px;
                text-align: center;
                font-size: 22px;
                color: #5EA72B;
            }
        }
    }

</style>
