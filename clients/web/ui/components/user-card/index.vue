<template>
    <div
        v-if="user"
        class="user-data"
        :class="{ 'preview-mode': previewMode }">
        <c-loading
            :enabled="removing"
            size="lg" />

        <div
            v-if="!removing"
            class="user-data__container">
            <div
                v-if="previewMode"
                class="user-data__icon"
                :class="{ 'verified': user.verified }"
                hidden>
                <i
                    class="fas"
                    :class="{ 'fa-check': user.verified, 'fa-times': !user.verified }" />
            </div>
            <div
                v-if="previewMode"
                class="user-data__avatar">
                <c-button
                    status="none"
                    :to="`/profiles/${user.id}`"
                    class="user-data__avatar-upload-btn">
                    <c-img
                        v-if="user.img"
                        class="user-data__avatar no-avatar"
                        :src="user.img" />
                    <c-img
                        v-else
                        class="user-data__avatar user-avatar"
                        src="../../static/img/user.png" />
                </c-button>
            </div>
            <div
                v-if="!previewMode"
                class="user-data__avatar">
                <a
                    v-if="!user.img"
                    href="#"
                    class="user-data__avatar-upload-btn">
                    <c-img src="https://via.placeholder.com/150" />
                </a>
                <c-img
                    v-else
                    src="../../static/img/user.png" />
            </div>

            <div style="text-align: left;">
                <input
                    v-focus="!previewMode"
                    type="text"
                    class="form-control margin-bottom-5"
                    placeholder="Profile name"
                    :value="user.name"
                    :readonly="previewMode"
                    @input="$emit('update:name', $event.target.value)">

                <p v-if="user.role === 'user'">
                    <em>Gamer</em>
                </p>
                <p v-if="user.role === 'developer'">
                    <em>Developer</em>
                </p>
                <p v-if="user.role === 'curator'">
                    <em>Curator</em>
                </p>
            </div>
        </div>

        <div
            v-darklaunch="'BADGES'"
            class="user-data__unknown-block">
            <button
                v-for="index in 4"
                :key="index"
                class="btn">
                <i class="fas fa-plus" />
            </button>
            <div
                v-if="previewMode"
                class="counts">
                <span>
                    0 <i class="fas fa-long-arrow-alt-down" />
                </span>
                <span>
                    0 <i class="fas fa-long-arrow-alt-up" />
                </span>
            </div>
        </div>

        <div
            v-if="previewMode && user.address"
            class="user-data__public-address">
            <input
                type="text"
                class="form-control"
                name="user-data__public-address"
                placeholder="Public address"
                :value="user.address"
                readonly="readonly"
                @input="$emit('update:wallet', $event.target.value)">
            <button @click="copyToClipboard(user.address)">
                <i :class="`fas fa-${previewMode ? 'copy' : 'redo-alt'}`" />
            </button>
        </div>
        <div v-if="previewMode && !user.address">
            <c-button
                status="dark"
                size="small"
                @click="generateAddress(user.id)">
                Generate Address
            </c-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default: null
        },
        user: {
            img: {
                type: String,
                default: null
            },
            name: {
                type: String,
                default: null
            },
            wallet: {
                type: String,
                default: null
            }
        },
        status: {
            type: String,
            default: 'success',
            validator(val) {
                return ['info', 'success', 'warning', 'danger'].includes(val)
            }
        },
        iconColor: {
            type: String,
            default: null
        },
        iconClass: {
            type: String,
            default: null
        },
        previewMode: Boolean,
        removing: Boolean
    },
    methods: {
        async generateAddress(profileId) {
            if (!this.$store.state.application.desktopMode) {
                this.$store.commit('application/activeModal', 'welcome')
                return
            }

            const chosenProfile = this.$store.state.profiles.keyedById[profileId]

            if (!chosenProfile.meta) {
                chosenProfile.meta = {}
            }

            if (!chosenProfile.meta.walletIndex) {
                chosenProfile.meta.walletIndex = Object.values(this.$store.state.profiles.keyedById).indexOf(chosenProfile)
            }

            const index = chosenProfile.meta.walletIndex

            const res = await this.$desktop.sendCommand('generateAddress', { index })
            const profile = await this.$store.dispatch('profiles/update', [chosenProfile.id, {
                address: res.address
            },
            {
                query: {}
            }])

            chosenProfile.address = res.address

            this.$snotify.success('', 'Address generated', { timeout: 3000 })

            // Update local
            this.$store.commit('application/updateState')

            // Update server
            this.$store.dispatch('profiles/update', [
                chosenProfile.id,
                {
                    address: chosenProfile.address,
                    meta: chosenProfile.meta
                }
            ])

            // Update desktop
            await this.$desktop.updateState({
                module: 'application',
                state: {
                    profiles: Object.values(this.$store.state.profiles.keyedById)
                }
            })
        },
        copyToClipboard(value) {
            this.$desktop.sendCommand('writeToClipboard', value)

            this.$snotify.success('Address copied to clipboard')
        }
    }
}
</script>

<style lang="scss" scoped>
    .user-data {
        padding: 10px;
        background-color: #303046;
        border-radius: 5px;
        border: 1px solid #28273a;
        width: 100%;
        min-height: 100px;
        position: relative;
        color: #fff;
        .user-data__public-address {
            display: flex;
            justify-content: space-between;
            .form-control {
                margin-right: 10px;
            }
            button {
                width: 30px;
                font-size: 18px;
                color: #ff5454;
                padding: 0;
                border: none;
                height: 38px;
                background: transparent;
                &:focus,
                &:active {
                    box-shadow: none;
                    outline: none;
                }
            }
        }
        &.preview-mode {
            background: rgba(0, 0, 0, 0.3); /* was 1d2031 */
            .user-data__icon {
                background: #c94343;
                &.verified {
                    background: #43C981;
                }
            }
            .user-data__unknown-block {
                a {
                    border-color: #404354;
                    color: #404354;
                }
                .counts {
                    display: inline-block;
                    float: right;
                    span {
                        width: 45px;
                        font-size: 15px;
                        color: #fff;
                        line-height: 45px;
                        display: inline-block;
                        text-align: right;
                        i {
                            font-size: 18px;
                            margin-left: 5px;
                        }

                    }
                }
            }
            button {
                color: #fff !important;
            }
        }
        &.default {
            $defColor: #43C981;
            border-color: $defColor !important;
            padding-left: 38px;
            &:before {
                content: "";
                width: 26px;
                position: absolute;
                border-radius: 5px 0 0 5px;
                left: 0px;
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
                left: -30px;
            }
        }
    }
    .user-data__text {
        border: none;
        box-shadow: 0 0 3px rgba(0, 0, 0, .4) inset;
        background: #303049;
        color: rgba(255, 255, 255, .5);
    }
    .user-data__container {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
    }
    .user-data__icon {
        position: absolute;
        top: 10px;
        right: 10px;
        color: #303046;
        font-size: 16px;
        text-align: center;
        line-height: 25px;
        border-radius: 50%;
        width: 25px;
        height: 25px;
    }
    .user-data__avatar {
        min-width: 64px;
        width: 64px;
        height: 64px;
        box-sizing: border-box;
        font-size: 60px;
        text-align: center;
        background: transparent;
        border-radius: 50%;
        border: 0 none;
        margin-right: 15px;
        img {
            object-fit: cover;
            max-height: 64px;
        }
        .user-data__avatar-upload-btn img {
            max-height: 42px;
        }
    }
    .user-data__avatar, .user-data__avatar-upload-btn {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .user-data__unknown-block {
        display: flex;
        align-items: center;
        margin: 20px 0;
        .btn {
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            text-align: center;
            font-size: 16px;
            border: 1px solid #3b3b55;
            background: transparent;
            color: rgba(255, 255, 255, 0);
            &:not(:last-child) {
                margin-right: 10px;
            }
            &:hover,
            &:first-child {
                color: #6473f4;
                background: #222131;
                border: 1px solid #1b1b28;
            }
        }
    }
    input:read-only {
        border: none;
        background: transparent;
        box-shadow: none;
        color: #fff;
        padding: 4px 0;
    }
    .warning {
        background: #ff5454;
    }
</style>
