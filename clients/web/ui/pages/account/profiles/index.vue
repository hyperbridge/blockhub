<template>
    <Layout navigationKey="account">
        <div
            v-if="profiles"
            class="row align-items-stretch justify-content-center margin-bottom-40">
            <div class="col-12">
                <HeadingBar
                    name="My Profile"
                    :showArrows="false"
                    :showBackground="false" />
            </div>
            <div class="col-12 col-md-6 col-lg-4 my_profile">
                <div
                    v-if="activeProfile">
                    <UserCard
                        :user="activeProfile"
                        :previewMode="true"
                        @updateProfile="(prop, val) => activeProfile[prop] = val" />
                    <br>
                    <Button
                        status="info"
                        icon="download"
                        @click="$store.commit('application/activeModal', 'deposit')">
                        Deposit
                    </Button>
                    <Button
                        status="info"
                        icon="upload"
                        @click="$store.commit('application/activeModal', 'withdraw')">
                        Withdraw
                    </Button>
                </div>
                <p v-else-if="!profiles.length">
                    You don't have any profiles yet.
                </p>
                <p v-else>
                    You don't have a default profile.
                </p>
            </div>
            <div
                v-if="activeProfile"
                class="col-12 col-md-6 col-lg-4"
                hidden>
                <div class="verification-block text-center">
                    <h3 class="text-white">
                        Verify Your Profile
                    </h3>
                    <div
                        v-if="activeProfile.isVerified"
                        class="status">
                        <i class="fas fa-check" />
                        Verified
                    </div>
                    <div
                        v-else-if="activeProfile.isVerifying"
                        class="status">
                        <i class="fas fa-hourglass" />
                        Verifying
                    </div>
                    <Button
                        v-else
                        status="outline-success"
                        class="mt-3"
                        to="/account/verification">
                        Click here to verify
                    </Button>
                    <div
                        v-if="activeProfile.isVerified"
                        class="date">
                        Valid up to $7,500 USD
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 mb-4" />

            <div class="col-12">
                <HeadingBar
                    name="All Profiles"
                    :showArrows="false"
                    :showBackground="false"
                    showActions>
                    <div
                        slot="additional-action"
                        class="additional-action margin-left-20">
                        <span class="text">Name <Icon name="user" /></span>
                        <ButtonArrows
                            :activeUp="sortAsc"
                            @clickUp="sortAsc = true"
                            @clickDown="sortAsc = false" />
                    </div>
                    <div
                        slot="additional-action"
                        v-access="'reputation'"
                        class="additional-action margin-left-20">
                        <span class="text">Rating <Icon name="trophy" /></span>
                        <ButtonArrows />
                    </div>
                    <div
                        slot="additional-action"
                        class="additional-action margin-left-20 padding-5">
                        <InputSearcher
                            v-model="filterPhrase"
                            placeholder="Search" />
                    </div>
                    <div
                        slot="additional-action"
                        class="additional-action margin-left-10">
                        <Button
                            status="outline-white"
                            icon="user-plus"
                            @click="createProfile">
                            New Profile
                        </Button>
                    </div>
                </HeadingBar>
            </div>

            <Loading
                key="loading"
                :enabled="!filteredProfiles.length"
                size="lg" />

            <div
                v-if="filteredProfiles.length"
                class="profile-picker">
                <div
                    v-for="profile in filteredProfiles"
                    :key="profile.id"
                    class="profile-picker__profile"
                    :class="{ 'edit': profile.edit, 'default-type': profile.id == (activeProfile && activeProfile.id) }">
                    <UserCard
                        :user="profile"
                        :previewMode="!profile.edit"
                        :removing="profile.removing"
                        class="margin-bottom-30"
                        :class="{ 'default': profile.id == (activeProfile && activeProfile.id) }"
                        v-bind.sync="profileClone" />
                    <div class="profile__action">
                        <Button
                            v-if="!profile.edit && profile.id != (activeProfile && activeProfile.id)"
                            status="info"
                            icon="check"
                            @click="setDefault(profile)">
                            Set default
                        </Button>
                        <Button
                            v-if="!profile.edit"
                            status="share"
                            icon="pen"
                            @click="editProfile(profile)">
                            Edit
                        </Button>
                        <Button
                            v-if="profile.edit"
                            status="share"
                            icon="pen"
                            @click="saveProfile(profile)">
                            Save
                        </Button>
                        <Button
                            v-if="profile.edit"
                            status="danger"
                            icon="trash"
                            @click="deleteProfile(profile)">
                            Delete
                        </Button>
                        <Button
                            v-if="profile.edit"
                            icon="times"
                            @click="cancelEditProfile(profile)">
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>

            <Modal-light
                v-if="removeProfile"
                @close="removeProfile = null">
                <h4>Are you sure that you want to delete this profile?</h4>
                <p>This operation can not be reversed</p>
                <UserCard
                    :user="removeProfile"
                    previewMode />
                <div>
                    <div class="profile-remove__buttons">
                        <Button
                            size="md"
                            @click="removeProfile = null">
                            Cancel
                        </Button>
                        <Button
                            size="md"
                            @click="deleteProfile()">
                            Confirm
                        </Button>
                    </div>
                </div>
            </Modal-light>
        </div>
    </Layout>
</template>

<script>
export default {
    components: {
        'HeadingBar': () => import('@ericmuyser/hyper-ui').then(m => m.HeadingBar),
        'UserCard': () => import('@ericmuyser/hyper-ui').then(m => m.UserCard),
        'ButtonArrows': () => import('@ericmuyser/hyper-ui').then(m => m.ButtonArrows),
        'Modal-light': () => import('@ericmuyser/hyper-ui').then(m => m.Modal - light),
        'InputSearcher': () => import('@ericmuyser/hyper-ui').then(m => m.InputSearcher)
    },
    data() {
        return {
            newProfile: {
                name: 'Default',
                wallet: '',
                img: '/img/new-profile.png',
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
    computed: {
        profiles() {
            return this.$store.getters['profiles/list']
        },
        activeProfile() {
            return this.$store.state.application.activeProfile
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
                .sort((a, b) => a.name > b.name ? this.sortAsc ? 1 : -1 : 0)
        }
    },
    watch: {
        '$store.state.profiles.isCreatePending'(newVal, oldVal) {
            if (newVal === false) {
                this.editProfile(this.profiles.find(p => p.id === this.$store.state.profiles.currentId))
            }
        }
    },
    created() {
    },
    methods: {
        setDefault(profile) {
            this.$store.state.application.activeProfile = profile
            this.$store.state.application.developerMode = profile.role === 'developer'
            // if (this.activeProfile) this.activeProfile.default = false
            // profile.default = true

            this.saveProfiles()
        },
        editProfile(profile) {
            if (this.editedProfile) {
                this.$snotify.warning('You must finish editing the current profile')
            } else {
                profile.edit = true
                this.editedProfile = profile
            }
        },
        cancelEditProfile(profile) {
            profile.edit = false
            this.editedProfile = null
        },
        getRandomName() {
            const firstNames = ['Aiden', 'Jackson', 'Mason', 'Liam', 'Jacob', 'Jayden', 'Ethan', 'Noah', 'Lucas', 'Logan', 'Caleb', 'Caden', 'Jack', 'Ryan', 'Connor', 'Michael', 'Elijah', 'Brayden', 'Benjamin', 'Nicholas', 'Alexander', 'William', 'Matthew', 'James', 'Landon', 'Nathan', 'Dylan', 'Evan', 'Luke', 'Andrew', 'Gabriel', 'Gavin', 'Joshua', 'Owen', 'Daniel', 'Carter', 'Tyler', 'Cameron', 'Christian', 'Wyatt', 'Henry', 'Eli', 'Joseph', 'Max', 'Isaac', 'Samuel', 'Anthony', 'Grayson', 'Zachary', 'David', 'Christopher', 'John', 'Isaiah', 'Levi', 'Jonathan', 'Oliver', 'Chase', 'Cooper', 'Tristan', 'Colton', 'Austin', 'Colin', 'Charlie', 'Dominic', 'Parker', 'Hunter', 'Thomas', 'Alex', 'Ian', 'Jordan', 'Cole', 'Julian', 'Aaron', 'Carson', 'Miles', 'Blake', 'Brody', 'Adam', 'Sebastian', 'Adrian', 'Nolan', 'Sean', 'Riley', 'Bentley', 'Xavier', 'Hayden', 'Jeremiah', 'Jason', 'Jake', 'Asher', 'Micah', 'Jace', 'Brandon', 'Josiah', 'Hudson', 'Nathaniel', 'Bryson', 'Ryder', 'Justin', 'Bryce', 'Sophia', 'Emma', 'Isabella', 'Olivia', 'Ava', 'Lily', 'Chloe', 'Madison', 'Emily', 'Abigail', 'Addison', 'Mia', 'Madelyn', 'Ella', 'Hailey', 'Kaylee', 'Avery', 'Kaitlyn', 'Riley', 'Aubrey', 'Brooklyn', 'Peyton', 'Layla', 'Hannah', 'Charlotte', 'Bella', 'Natalie', 'Sarah', 'Grace', 'Amelia', 'Kylie', 'Arianna', 'Anna', 'Elizabeth', 'Sophie', 'Claire', 'Lila', 'Aaliyah', 'Gabriella', 'Elise', 'Lillian', 'Samantha', 'Makayla', 'Audrey', 'Alyssa', 'Ellie', 'Alexis', 'Isabelle', 'Savannah', 'Evelyn', 'Leah', 'Keira', 'Allison', 'Maya', 'Lucy', 'Sydney', 'Taylor', 'Molly', 'Lauren', 'Harper', 'Scarlett', 'Brianna', 'Victoria', 'Liliana', 'Aria', 'Kayla', 'Annabelle', 'Gianna', 'Kennedy', 'Stella', 'Reagan', 'Julia', 'Bailey', 'Alexandra', 'Jordyn', 'Nora', 'Carolin', 'Mackenzie', 'Jasmine', 'Jocelyn', 'Kendall', 'Morgan', 'Nevaeh', 'Maria', 'Eva', 'Juliana', 'Abby', 'Alexa', 'Summer', 'Brooke', 'Penelope', 'Violet', 'Kate', 'Hadley', 'Ashlyn', 'Sadie', 'Paige', 'Katherine', 'Sienna', 'Piper', 'Eric']
            const titleNames = ['the Death Dealer', 'the Forsaken', 'the Lustful', 'the Machine', 'the Striker', 'the Constructed', 'the Firey', 'the Cold', 'the Destroyer', 'the Slayer', 'the Impaler', 'the Sword', 'the Sly', 'the Mad', 'the Swift', 'the Morbid', 'the Insane', 'the Furious', 'the Bloody', 'the Brutal', 'the Vicious', 'the Bitter', 'the Gruesome', 'the Curious', 'the Invoker', 'the Master', 'the Righteous', 'the Devoted']

            return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${titleNames[Math.floor(Math.random() * titleNames.length)]}`
        },
        saveProfile(profile) {
            for (const key in profile) {
                profile[key] = this.profileClone[key]
            }

            if (!profile.name) { profile.name = 'Default' }

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
        },
        deleteProfile(profile) {
            if (this.removeProfile) {
                this.$store.dispatch('profiles/remove', this.removeProfile.id)
                this.removeProfile.edit = false
                this.removeProfile.removing = true
                this.removeProfile = null
            } else {
                this.removeProfile = profile
            }

            this.editedProfile = null
        },
        createProfile() {
            const { newProfile } = this

            this.$store.dispatch('profiles/create', {
                name: this.getRandomName(),
                avatar: newProfile.img,
                address: newProfile.wallet
            })
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

    .verification-block {
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
        .button {
            margin: 0 5px;
        }
    }

    .profile-remove__buttons {
        display: flex;
        margin-top: 20px;
        justify-content: space-between;
    }
</style>
