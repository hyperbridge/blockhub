<template>
    <c-layout navigationKey="account">
        <div class="row align-items-stretch justify-content-center margin-bottom-40" v-if="profiles">
            <div class="col-12">
                <c-heading-bar name="My Profile" :showArrows="false" :showBackground="false"/>
            </div>
            <div class="col-12 col-md-6 col-lg-4 my_profile">
                <c-user-card
                    v-if="defaultProfile"
                    :user="defaultProfile"
                    @updateProfile="(prop, val) => defaultProfile[prop] = val"
                    :previewMode="true"
                />
                <p v-else-if="!profiles.length">
                    You don't have any profiles yet.
                </p>
                <p v-else>
                    You don't have a default profile.
                </p>
            </div>
            <div class="col-12 col-md-6 col-lg-4" v-if="defaultProfile" hidden>
                <div class="verification-blk text-center">
                    <h3 class="text-white">Verify Your Profile</h3>
                    <div class="status" v-if="defaultProfile.isVerified">
                        <i class="fas fa-check"></i>
                        Verified
                    </div>
                    <div class="status" v-else-if="defaultProfile.isVerifying">
                        <i class="fas fa-hourglass"></i>
                        Verifying
                    </div>
                    <c-button status="outline-success" class="mt-3" href="#/account/verification" v-else>
                        Click here to verify
                    </c-button>
                    <div class="date" v-if="defaultProfile.isVerified">
                        Valid up to $7,500 USD
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 mb-4">
                <c-button
                    status="info"
                    icon="user-plus"
                    @click="createProfile"
                > New Profile</c-button>
            </div>

            <div class="col-12">
                <c-heading-bar name="All Profiles" :showArrows="false" :showBackground="false" showActions>
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
                    :class="{ 'edit': profile.edit, 'default-type': profile.id == (defaultProfile && defaultProfile.id) }"
                    v-for="profile in filteredProfiles"
                    :key="profile.id"
                >
                    <c-user-card
                        :user="profile"
                        :previewMode="!profile.edit"
                        class="margin-bottom-30"
                        :class="{ 'default': profile.id == (defaultProfile && defaultProfile.id) }"
                        v-bind.sync="profileClone"
                    />
                    <div class="profile__action">
                        <c-button
                            status="info"
                            icon="check"
                            @click="setDefault(profile)"
                            v-if="!profile.edit && profile.id != (defaultProfile && defaultProfile.id)"
                        >Set default</c-button>
                        <c-button
                            status="share"
                            icon="pen"
                            @click="editProfile(profile)"
                            v-if="!profile.edit"
                        >Edit</c-button>
                        <c-button
                            status="share"
                            icon="pen"
                            @click="saveProfile(profile)"
                            v-if="profile.edit"
                        >Save</c-button>
                        <c-button
                            status="danger"
                            icon="trash"
                            @click="deleteProfile(profile)"
                            v-if="profile.edit"
                        >Delete</c-button>
                        <c-button
                            @click="cancelEditProfile(profile)"
                            icon="times"
                            v-if="profile.edit"
                        >Cancel</c-button>
                    </div>
                </div>
            </transition-group>


            <c-modal-light
                v-if="removeProfile"
                @close="removeProfile = null"
            >
                <h4>Are you sure that you want to delete this profile?</h4>
                <p>This operation can not be reversed</p>
                <c-user-card
                    :user="removeProfile"
                    previewMode
                />
                <div>
                    <div class="profile-remove__buttons">
                        <c-button
                            size="md"
                            @click="removeProfile = null"
                        >Cancel</c-button>
                        <c-button
                            size="md"
                            @click="deleteProfile()"
                        >Confirm</c-button>
                    </div>
                </div>
            </c-modal-light>

        </div>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-heading-bar': (resolve) => require(['@/ui/components/heading-bar'], resolve),
            'c-user-card': (resolve) => require(['@/ui/components/user-card'], resolve),
            'c-button-arrows': (resolve) => require(['@/ui/components/buttons/arrows'], resolve),
            'c-modal-light': (resolve) => require(['@/ui/components/modal-light'], resolve),
            'c-input-searcher': (resolve) => require(['@/ui/components/inputs/searcher'], resolve)
        },
        data() {
            return {
                newProfile: {
                    name: 'Default',
                    wallet: '',
                    img: '/static/img/new-profile.png',
                    default: false,
                    edit: false
                },
                profileCopy: {},
                editedProfile: null,
                removeProfile: null,
                filterPhrase: '',
                sortAsc: true
            }
        },
        methods: {
            setDefault(profile) {
                this.$store.state.application.account.activeProfile = profile
                //this.$store.state.application.developerMode = !!profile.developerId
                // if (this.defaultProfile) this.defaultProfile.default = false
                // profile.default = true

                this.saveProfiles()
            },
            editProfile(profile) {
                if (!this.editedProfile) {
                    profile.edit = true
                    this.editedProfile = profile
                } else {
                    this.$snotify.warning('You must finish editing the current profile')
                }
            },
            cancelEditProfile(profile) {
                profile.edit = false
                this.editedProfile = null
            },
            saveProfile(profile) {
                for (let key in profile) {
                    profile[key] = this.profileClone[key]
                }

                if (!profile.name)
                    profile.name = 'Default'

                profile.edit = false
                this.editedProfile = null
                
                this.$store.dispatch('profiles/update', [
                    profile.id, 
                    {
                        name: profile.name,
                        avatar: profile.img,
                        address: profile.wallet
                    }
                ])

                // Bridge.sendCommand('saveProfileRequest', profile).then((profile) => {
                //     this.saveProfiles()
                // })
            },
            deleteProfile(profile) {
                if (this.removeProfile) {
                    this.$store.dispatch('profiles/remove', this.removeProfile.id)
                    // Bridge.sendCommand('removeProfileRequest', this.removeProfile).then(() => {
                    //     const index = this.profiles.indexOf(this.removeProfile)
                    //     this.profiles.splice(index, 1)
                    //     this.removeProfile.edit = false
                    //     this.removeProfile = null

                    //     this.saveProfiles()
                    // })
                } else {
                    this.removeProfile = profile
                }

                this.editedProfile = null

                //this.saveProfiles()
            },
            createProfile() {
                const { newProfile } = this

                this.$store.dispatch('profiles/create', {
                    name: newProfile.name,
                    avatar: newProfile.img,
                    address: newProfile.wallet
                })
            },
            // saveProfiles() {
            //     this.$store.state.application.account.profiles = this.profiles
            //     this.$store.dispatch('application/updateState')
            // }
        },
        created() {
            this.$store.dispatch('profiles/find', {
                query: {
                    accountId: this.$store.state.application.account.id,
                    $sort: {
                        createdAt: -1
                    },
                    $limit: 25
                }
            })
        },
        computed: {
            profiles() {
                return this.$store.getters['profiles/list']
            },
            defaultProfile() {
                return this.$store.state.application.account.activeProfile
            },
            profileClone() {
                return this.editedProfile ? { ...this.editedProfile } : {}
            },
            isEditing() {
                return this.profiles && this.profiles.find(profile => profile.edit)
            },
            filteredProfiles() {
                return this.profiles && this.profiles
                    .filter(profile => !profile.name || profile.name.toLowerCase().includes(this.filterPhrase.toLowerCase()))
                    .sort((a, b) => (a.name > b.name) ? (this.sortAsc ? 1 : -1) : 0)
            }
        },
        watch: {
            '$store.state.application.initialized'() {
            },
            '$store.state.profiles.isCreatePending'(newVal, oldVal) {
                if (newVal === false) {
                    this.editProfile(this.profiles.find(p => p.id === this.$store.state.profiles.currentId))
                }
            }
        },
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
        height: 100%;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 5px 15px 10px;
        border: 1px solid rgba(255, 255, 255, .1);
        background: rgba(0, 0, 0, .3);
        border-radius: 5px;
        margin-bottom: 10px;
        &:last-child {
            margin: 0;
        }
        h3 {
            font-size: 18px;
            width: 100%;
            margin-bottom: 5px;
            color: #C6C6D6;
            font-weight: bold;
        }
        .status {
            width: 110px;
            text-align: center;
            padding: 5px 10px;
            border-radius: 5px;
            border: 1px solid #43C981;
            font-size: 14px;
            margin-top: 15px;
            i {
                color: #43C981;
                margin-right: 5px;
            }
        }
        .date {
            width: 90px;
            margin-top: 15px;
        }

    }

    .my_profile {
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
        width: 100%;
    }

    .profile-picker__profile {
        position: relative;
        padding: 0 15px;
        width: calc( 100% / 3 );
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
                left: -0px;
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
                left: -28px;
            }
        }
    }

    .profile__action {
        display: none;
        position: absolute;
        justify-content: center;
        bottom: 18px;
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
