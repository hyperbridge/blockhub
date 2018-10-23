<template>
    <c-layout navigationKey="account">
                <div class="row">
                    <div class="col-12">
                        <c-heading-bar name="My Profile" :showArrows="false" :showBackground="false"/>
                    </div>
                    <div class="col-6 margin-bottom-40 my_identity">
                        <c-user-card
                            v-if="defaultIdentity"
                            :user="defaultIdentity"
                            @updateIdentity="(prop, val) => defaultIdentity[prop] = val"
                            :previewMode="true"
                        />
                        <p v-else-if="!identities.length">
                            You don't have any profiles yet.
                        </p>
                        <p v-else>
                            You don't have a default profile.
                        </p>
                    </div>
                    <div class="col-6" v-if="defaultIdentity">
                        <div class="verification-blk">
                            <h3>Verify Your Profile</h3>
                            <div class="status" v-if="defaultIdentity.is_verified">
                                <i class="fas fa-check"></i>
                                Verified
                            </div>
                            <div class="status" v-else-if="defaultIdentity.is_verifying">
                                <i class="fas fa-hourglass"></i>
                                Verifying
                            </div>
                            <router-link to="/account/verification" v-else>
                                Click here to verify
                            </router-link>
                            <div class="date" v-if="defaultIdentity.is_verified">
                                Valid up to $7,500 USD
                            </div>
                        </div>
                    </div>

                    <div class="col-12 mb-4">
                        <c-button
                            status="info"
                            icon="user-plus"
                            @click="createIdentity"
                        > New Profile</c-button>
                    </div>

                    <div class="col-12">
                        <c-heading-bar name="All Identities" :showArrows="false" :showBackground="false">
                            <div class="additional-action margin-left-20" slot="additional-action">
                                <span class="text">Name <c-icon name="user" /></span>
                                <c-button-arrows
                                    :activeUp="sortAsc"
                                    @clickUp="sortAsc = true"
                                    @clickDown="sortAsc = false"
                                />
                            </div>
                            <div class="additional-action margin-left-20" slot="additional-action" v-darklaunch="'REPUTATION'">
                                <span class="text">Rating <c-icon name="trophy" /></span>
                                <c-button-arrows />
                            </div>
                            <div class="additional-action margin-left-20 padding-5" slot="additional-action">
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
                        :duration="100"
                    >
                        <div
                            class="profile-picker__profile"
                            :class="{ 'edit': identity.edit }"
                            v-for="identity in filteredIdentities"
                            :key="identity.id"
                        >
                            <c-user-card
                                :user="identity"
                                :previewMode="!identity.edit"
                                :type="identity.developer_id ? 'developer' : 'user'"
                                :class="{ 'default': identity.id == (defaultIdentity && defaultIdentity.id) }"
                                v-bind.sync="identityClone"
                            />
                            <div class="profile__action">
                                <c-button
                                    status="info"
                                    icon="check"
                                    @click="setDefault(identity)"
                                    v-if="!identity.edit && identity.id != (defaultIdentity && defaultIdentity.id)"
                                >Set default</c-button>
                                <c-button
                                    status="share"
                                    icon="pen"
                                    @click="editIdentity(identity)"
                                    v-if="!identity.edit"
                                >Edit</c-button>
                                <c-button
                                    status="share"
                                    icon="pen"
                                    @click="saveIdentity(identity)"
                                    v-if="identity.edit"
                                >Save</c-button>
                                <c-button
                                    status="danger"
                                    icon="trash"
                                    @click="deleteIdentity(identity)"
                                    v-if="identity.edit"
                                >Delete</c-button>
                                <c-button
                                    @click="cancelEditIdentity(identity)"
                                    icon="times"
                                    v-if="identity.edit"
                                >Cancel</c-button>
                            </div>
                        </div>
                    </transition-group>


                    <c-modal-light
                        v-if="removeIdentity"
                        @close="removeIdentity = null"
                    >
                        <h4>Are you sure that you want to delete this profile?</h4>
                        <p>This operation can not be reversed</p>
                        <c-user-card
                            :user="removeIdentity"
                            previewMode
                        />
                        <div>
                            <div class="profile-remove__buttons">
                                <c-button
                                    size="md"
                                    @click="removeIdentity = null"
                                >Cancel</c-button>
                                <c-button
                                    size="md"
                                    @click="deleteIdentity()"
                                >Confirm</c-button>
                            </div>
                        </div>
                    </c-modal-light>

                </div>
    </c-layout>
</template>

<script>
    import * as Bridge from '@/framework/desktop-bridge'

    export default {
        components: {
            'c-heading-bar': (resolve) => require(['@/ui/components/heading-bar'], resolve),
            'c-user-card': (resolve) => require(['@/ui/components/user-card'], resolve),
            'c-button-arrows': (resolve) => require(['@/ui/components/buttons/arrows'], resolve),
            'c-modal-light': (resolve) => require(['@/ui/components/modal-light'], resolve),
            'c-checkbox': (resolve) => require(['@/ui/components/checkbox'], resolve),
            'c-input-searcher': (resolve) => require(['@/ui/components/inputs/searcher'], resolve)
        },
        data() {
            return {
                newIdentity: {
                    name: '',
                    wallet: '',
                    img: '/static/img/new-identity.png',
                    default: false,
                    edit: false
                },
                identityCopy: {},
                editedIdentity: null,
                removeIdentity: null,
                filterPhrase: '',
                sortAsc: true
            }
        },
        methods: {
            setDefault(identity) {
                this.$store.state.application.account.current_identity = identity
                // if (this.defaultIdentity) this.defaultIdentity.default = false
                // identity.default = true

                this.saveIdentities()
            },
            editIdentity(identity) {console.log(identity, this.editedIdentity, this.filteredIdentities)
                if (!this.editedIdentity) {
                    identity.edit = true
                    this.editedIdentity = identity
                } else {
                    this.$snotify.warning('You must finish editing the current profile')
                }
            },
            cancelEditIdentity(identity) {
                identity.edit = false
                this.editedIdentity = null
            },
            saveIdentity(identity) {
                for (let key in identity) {
                    identity[key] = this.identityClone[key]
                }

                if (!identity.name)
                    identity.name = 'Default'

                identity.edit = false
                this.editedIdentity = null
                
                Bridge.sendCommand('saveIdentityRequest', identity).then((identity) => {
                    this.saveIdentities()
                })
            },
            deleteIdentity(identity) {
                if (this.removeIdentity) {
                    Bridge.sendCommand('removeIdentityRequest', this.removeIdentity).then(() => {
                        const index = this.identities.indexOf(this.removeIdentity)
                        this.identities.splice(index, 1)
                        this.removeIdentity.edit = false
                        this.removeIdentity = null

                        this.saveIdentities()
                    })
                } else {
                    this.removeIdentity = identity
                }

                this.editedIdentity = null

                this.saveIdentities()
            },
            createIdentity() {
                const { newIdentity } = this

                const id = Math.floor(Math.random() * 100)

                Bridge.sendCommand('createIdentityRequest', newIdentity).then((identity) => {
                    newIdentity.id = identity.id
                    newIdentity.public_address = identity.public_address

                    if (!newIdentity.name)
                        newIdentity.name = 'Default'

                    this.identities.push({ ...newIdentity, edit: true })

                    this.editedIdentity = newIdentity

                    this.saveIdentities()
                })
                /*
                    //  Form check logic

                if (!Object.values(newIdentity).some(val => val == null || !val.toString().length)) {
                    if (newIdentity.default && this.defaultIdentity) {
                        this.defaultIdentity.default = false
                    }
                    this.identities.push({ ...newIdentity })
                    this.newIdentity.name = ''
                    this.newIdentity.wallet = ''
                    this.newIdentity.default = false
                }
                */
            },
            saveIdentities() {
                this.$store.state.application.account.identities = this.identities
                this.$store.dispatch('application/updateState')
            }
        },
        computed: {
            identities() {
                for(let i in this.$store.state.application.account.identities) {
                    if (!this.$store.state.application.account.identities[i].name)
                        this.$store.state.application.account.identities[i].name = 'Default'
                }
                
                return this.$store.state.application.account.identities
            },
            defaultIdentity() {
                return this.identities.find(identity => this.$store.state.application.account.current_identity ? identity.id == this.$store.state.application.account.current_identity.id : null)
            },
            identityClone() {
                return this.editedIdentity ? { ...this.editedIdentity } : {}
            },
            isEditing() {
                return this.identities.find(identity => identity.edit)
            },
            filteredIdentities() {
                return this.identities
                    .filter(identity => !identity.name || identity.name.toLowerCase().includes(this.filterPhrase.toLowerCase()))
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
        .text {
            margin-right: 5px;
            i {
                font-size: 16px;
                margin-left: 5px;
                margin-right: 3px;
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
        width: 260px;
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
            width: 90px;
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
        &:hover .profile__action, &.edit .profile__action {
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
