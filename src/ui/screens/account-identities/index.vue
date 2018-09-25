<template>
    <c-layout navigationKey="account-navigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <c-heading-bar name="My identity" :showArrows="false" :showBackground="false"/>
                    </div>
                    <div class="col-12 margin-bottom-40 my_identity">
                        <c-user-card
                            v-if="defaultIdentity"
                            :user="defaultIdentity"
                            @updateIdentity="(prop, val) => defaultIdentity[prop] = val"
                        />
                        <p v-else-if="!identities.length">
                            You don't have any identities. Create a new one.
                        </p>
                        <p v-else>
                            You don't have default identity.
                        </p>
                        <div class="user-info">
                            <h3>Mr. Satoshi Nakamoto</h3>
                            <h4>Osaka, Japan</h4>
                        </div>
                        <div>
                            <div class="verification-blk">
                                <h3>Verify Your Identity</h3>
                                <div class="status">
                                    <i class="fas fa-check"></i>
                                    Approved
                                </div>
                                <div class="date">
                                    Valid Until
                                    Jul 2021
                                </div>
                            </div>
                            <div class="verification-blk">
                                <h3>Verify Your Location</h3>
                                <div class="status">
                                    <i class="fas fa-check"></i>
                                    Approved
                                </div>
                                <div class="date">
                                    Valid Until
                                    Jul 2021
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <c-button
                            status="info"
                            icon="user-plus"
                            @click="createIdentity"
                        > Add new</c-button>
                    </div>

                    <div class="col-12">
                        <c-heading-bar name="Profile Picker" :showArrows="false" :showBackground="false">
                            <div class="additional-action margin-left-20" slot="additional-action">
                                <span class="text">Name</span>
                                <c-icon name="user"/>
                                <c-button-arrows
                                    :activeUp="sortAsc"
                                    @clickUp="sortAsc = true"
                                    @clickDown="sortAsc = false"
                                />
                            </div>
                            <div class="additional-action margin-left-20" slot="additional-action">
                                <span class="text">Rating</span>
                                <c-icon name="trophy"/>
                                <c-button-arrows/>
                            </div>
                            <div class="additional-action margin-left-20 padding-10" slot="additional-action">
                                <c-input-searcher
                                    placeholder="Search"
                                    v-model="filterPhrase"
                                />
                            </div>
                        </c-heading-bar>
                    </div>

                    <transition-group
                        tag="div"
                        class="profile-picker"
                        name="item"
                    >
                        <div
                            class="profile-picker__profile"
                            v-for="identity in filteredIdentities"
                            :key="identity.id"
                        >
                            <c-user-card
                                :user="identity"
                                :previewMode="!identity.edit"
                                :class="{ 'default': identity.default }"
                                v-bind.sync="identityClone"
                            />
                            <div class="profile__action">
                                <c-button
                                    v-if="!identity.default"
                                    status="info"
                                    icon="check"
                                    @click="setDefault(identity)"
                                >Set default</c-button>
                                <template v-if="identity.edit">
                                    <c-button
                                        status="share"
                                        icon="pen"
                                        @click="saveIdentity(identity)"
                                    >Save</c-button>
                                    <c-button
                                        @click="identity.edit = false"
                                    >Cancel</c-button>
                                </template>
                                <c-button
                                    v-else
                                    status="share"
                                    icon="pen"
                                    @click="editIdentity(identity)"
                                >Edit</c-button>
                                <c-button
                                    status="danger"
                                    @click="deleteIdentity(identity)"
                                >Delete</c-button>
                            </div>
                        </div>
                    </transition-group>


                    <c-modal-light
                        v-if="removeIdentity"
                        @close="removeIdentity = null"
                    >
                        <h4>Are you sure that you want to delete this identity?</h4>
                        <p>This operation can not be reversed</p>
                        <c-user-card
                            :user="removeIdentity"
                            previewMode
                        />
                        <div>
                            <div class="profile-remove__buttons">
                                <c-button
                                    status="danger"
                                    size="md"
                                    @click="deleteIdentity()"
                                >Yes</c-button>
                                <c-button
                                    status="success"
                                    size="md"
                                    @click="removeIdentity = null"
                                >Cancel</c-button>
                            </div>
                        </div>
                    </c-modal-light>

                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
            'c-heading-bar': (resolve) => require(['@/ui/components/heading-bar'], resolve),
            'c-user-card': (resolve) => require(['@/ui/components/user-card'], resolve),
            'c-button-arrows': (resolve) => require(['@/ui/components/buttons/arrows'], resolve),
            'c-modal-light': (resolve) => require(['@/ui/components/modal-light'], resolve),
            'c-checkbox': (resolve) => require(['@/ui/components/checkbox'], resolve),
            'c-input-searcher': (resolve) => require(['@/ui/components/inputs/searcher'], resolve)
        },
        data() {
            return {
                wallets: [],
                user: {},
                identities: [
                    {
                        id: 1,
                        name: 'Mr. Satoshi',
                        wallet: '0x6cc5f688a315f3dc28a7781717a',
                        img: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
                        default: false,
                        edit: false
                    },
                    {
                        id: 2,
                        name: 'Nakamoto',
                        wallet: '0x233c5f688a315f3dc28a419189b',
                        img: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
                        default: true,
                        edit: false
                    }
                ],
                newIdentity: {
                    name: '',
                    wallet: '',
                    img: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
                    default: false,
                    edit: false
                },
                identityCopy: {},
                removeIdentity: null,
                filterPhrase: '',
                sortAsc: true
            }
        },
        methods: {
            setDefault(identity) {
                if (this.defaultIdentity) this.defaultIdentity.default = false;
                identity.default = true;
            },
            editIdentity(identity) {
                if (!this.editedIdentity) {
                    identity.edit = true;
                } else {
                    this.$snotify.warning('Stop editing the current identity before editing the next one');
                }
            },
            saveIdentity(identity)  {
                for (let key in identity) {
                    identity[key] = this.identityClone[key];
                }
                identity.edit = false;
            },
            deleteIdentity(identity) {
                const { removeIdentity } = this;
                if (removeIdentity) {
                    const index = this.identities.indexOf(removeIdentity);
                    this.identities.splice(index, 1);
                    this.removeIdentity = null;
                } else {
                    this.removeIdentity = identity;
                }
            },
            createIdentity() {
                const { newIdentity } = this;
                this.identities.push({ ...newIdentity, id: Math.floor(Math.random() * 100) });
                /*
                    //  Form check logic

                if (!Object.values(newIdentity).some(val => val == null || !val.toString().length)) {
                    if (newIdentity.default && this.defaultIdentity) {
                        this.defaultIdentity.default = false;
                    }
                    this.identities.push({ ...newIdentity });
                    this.newIdentity.name = '';
                    this.newIdentity.wallet = '';
                    this.newIdentity.default = false;
                }
                */
            }
        },
        computed: {
            networkIdentites() {
                return this.$store.state.network.identities;
            },
            defaultIdentity() {
                return this.identities.find(identity => identity.default);
            },
            editedIdentity() {
                return this.identities.find(identity => identity.edit);
            },
            identityClone() {
                return this.editedIdentity ? { ...this.editedIdentity } : {};
            },
            isEditing() {
                return this.identities.find(identity => identity.edit);
            },
            filteredIdentities() {
                return this.identities
                    .filter(identity => identity.name.toLowerCase().includes(this.filterPhrase.toLowerCase()))
                    .sort((a, b) => (a.name > b.name) ? (this.sortAsc ? 1 : -1) : 0)
            }
        }
    }
</script>

<style lang="scss" scoped>

    .additional-action {
        float: right;
        display: flex;
        width: auto;
        align-items: center;
        font-size: 14px;
        margin-top: 6px;
        .text {
            margin-right: 5px;
            i {
                font-size: 16px;
                margin-left: 5px;
            }
        }
        .arrow_container {
            width: 20px;
            position: relative;
            display: inline-block;
            text-align: center;
            height: 25px;
            i {
                font-size: 18px;
                position: absolute;
                opacity: .7;
                left: 0;
                right: 0;
                &:first-child {
                    top: 0;
                    height: 50%;
                    z-index: 3;
                }
                &:last-child {
                    bottom: 0px;
                    height: 18px;
                    z-index: 1;
                }
                &:hover {
                    opacity: 1;
                    cursor: pointer;
                }
            }
        }
        .input-group {
            border-color: rgba(0, 0, 0, .7);
            border-radius: 5px;
            overflow: hidden;
            .input-group-append {
                margin: 0;
                .input-group-text {
                    border: none;
                }
            }
            input {
                border: none;
                padding: 4px 8px;
                width: 90px;
                &:active,
                &:focus {
                    border: unset;
                    box-shadow: none;
                }
            }
        }
        .btn{
            padding: 0 10px;
            line-height: 26px;
            font-weight: bold;
            font-size: 14px;
        }
    }

    .verification-blk {
        width: 220px;
        color: #C6C6D6;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 5px 15px 10px;
        border: 1px solid #707070;
        background: rgba(0, 0, 0, .2);
        border-radius: 5px;
        margin-bottom: 10px;
        &:last-child {
            margin: 0;
        }
        h3 {
            font-size: 17px;
            width: 100%;
            margin-bottom: 5px;
            color: #C6C6D6;
        }
        .status {
            width: 110px;
            text-align: center;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #43C981;
            font-size: 14px;
            i {
                color: #43C981;
                margin-right: 5px;
            }
        }
        .date {
            width: 70px;
        }

    }

    .my_identity {
        display: flex;
        width: 100%;
        justify-content: space-between;
        h3 {
            font-size: 21px;
            padding-bottom: 5px;
            margin-bottom: 0;
        }
        .user-info {
            width: calc(100% - 540px);
            padding: 0 10px;
        }
    }

    .item-move {
        transition: all 1s !important;
    }
    .item-enter {
        transform: scale(0) !important;
        opacity: 0;
    }
    .item-leave-active {
        position: absolute !important;
        opacity: 0;
    }

    .profile-picker {
        display: flex;
        flex-wrap: wrap;
        padding: 20px;
    }

    .profile-picker__profile {
        position: relative;
        margin: 20px;
        width: 300px;
        &:hover .profile__action {
            display: flex;
        }
        >.default {
            $defColor: #43C981;
            border-color: $defColor !important;
            &:before {
                content: "";
                width: 26px;
                position: absolute;
                border-radius: 5px 0 0 5px;
                left: -22px;
                bottom: -1px;
                height: calc(100% + 2px);
                background: $defColor;
            }
            &:after {
                font-family: 'Font Awesome 5 Free', 'Barlow', sans-serif;
                content: "DEFAULT \F14A";
                color: #1C2032;
                font-weight: bold;
                font-size: 16px;
                position: absolute;
                transform: rotate(-90deg);
                top: 40px;
                left: -50px;
            }
        }
    }

    .profile__action {
        display: none;
        position: absolute;
        justify-content: center;
        bottom: -20px;
        width: 100%;
        height: 26px;
        .c-btn {
            margin: 0 5px;
        }
    }

    .profile-remove__buttons {
        display: flex;
        margin-top: 20px;
        justify-content: space-between;
    }
</style>
