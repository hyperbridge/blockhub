<template>
    <div class="user-data" :class="{ 'preview-mode': previewMode }">
        <c-loading :enabled="removing" />
        
        <div class="user-data__container" v-if="!removing">
            <div
                v-if="previewMode"
                class="user-data__icon"
                :class="{ 'verified': user.verified }"
                hidden
            >
                <i class="fas" :class="{ 'fa-check': user.verified, 'fa-times': !user.verified }"></i>
            </div>
            <div class="user-data__avatar" v-if="previewMode">
                <c-button
                    status="none"
                    :to="`/profiles/${user.id}`"
                    class="user-data__avatar-upload-btn"
                >
                    <c-img v-if="user.img" :src="user.img" />
                    <c-img v-else src="../../../../static/img/user.png"/>
                </c-button>
            </div>
            <div class="user-data__avatar" v-if="!previewMode">
                <a
                    v-if="!user.img"
                    href="#"
                    class="user-data__avatar-upload-btn"
                >
                    <c-img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxOS45ODIgMzE5Ljk4MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzE5Ljk4MiAzMTkuOTgyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCI+CjxnPgoJPHBhdGggZD0iTTIzNC45OTEsMzE5Ljk4MmMyLjYxOCwwLDUuMjItMS4wNzgsNy4wNzEtMi45MjlzMi45MjktNC40NTMsMi45MjktNy4wNzF2LTE0MGg2NSAgIGMzLjkyMi0wLjAwOCw3LjcyMS0yLjU1Miw5LjIyMS02LjE3NnMwLjYxLTguMTA5LTIuMTU5LTEwLjg4NmwtMTUwLTE1MEMxNjUuMjAyLDEuMDc0LDE2Mi42MDQsMCwxNTkuOTkxLDAgICBjLTIuNjE0LDAtNS4yMTIsMS4wNzQtNy4wNjIsMi45MmwtMTUwLDE1MGMtMi43NjksMi43NzctMy42NTksNy4yNjMtMi4xNTksMTAuODg2YzEuNSwzLjYyNCw1LjI5OSw2LjE2OCw5LjIyMSw2LjE3Nmg2NXYxNDAgICBjMCwyLjYxOCwxLjA3OCw1LjIyLDIuOTI5LDcuMDcxczQuNDUzLDIuOTI5LDcuMDcxLDIuOTI5SDIzNC45OTF6IiBmaWxsPSIjNjQ3M2Y0Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="/>
                </a>
                <c-img v-else src="../../../../static/img/user.png"/>
            </div>

            <div style="text-align: left;">
                <input
                    type="text"
                    class="form-control margin-bottom-5"
                    placeholder="Profile name"
                    :value="user.name"
                    @input="$emit('update:name', $event.target.value)"
                    :readonly="previewMode"
                    v-focus="!previewMode"
                />

                <p v-if="user.role === 'user'"><em>Gamer</em></p>
                <p v-if="user.role === 'developer'"><em>Developer</em></p>
                <p v-if="user.role === 'curator'"><em>Curator</em></p>
            </div>
        </div>

        <div class="user-data__unknown-blk" v-darklaunch="'BADGES'">
            <button v-for="index in 4" :key="index" class="btn">
                <i class="fas fa-plus"></i>
            </button>
            <div class="counts" v-if="previewMode">
                <span>
                    0 <i class="fas fa-long-arrow-alt-down"></i>
                </span>
                    <span>
                    0 <i class="fas fa-long-arrow-alt-up"></i>
                </span>
            </div>
        </div>

        <div class="user-data__public-address" v-if="previewMode && user.address">
            <input
                type="text"
                class="form-control"
                name="user-data__public-address"
                placeholder="Public address"
                :value="user.address"
                @input="$emit('update:wallet', $event.target.value)"
                readonly="readonly"
            />
            <button @click="copyToClipboard(user.address)">
                <i :class="`fas fa-${previewMode ? 'copy' : 'redo-alt'}`"></i>
            </button>
        </div>
        <div v-if="previewMode && !user.address">
            <c-button status="dark" size="small" @click="generateAddress(user.id)">Generate Address</c-button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            id: String,
            type: String,
            user: {
                img: String,
                name: String,
                wallet: String
            },
            status: {
                type: String,
                default: 'success',
                validator(val) {
                    return ['info', 'success', 'warning', 'danger'].includes(val)
                }
            },
            iconColor: String,
            iconClass: String,
            previewMode: Boolean,
            removing: Boolean
        },
        methods: {
            generateAddress(profileId) {
                if (!this.$store.state.application.desktopMode) {
                    this.$store.commit('application/activateModal', 'welcome')
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

                window.BlockHub.Bridge.sendCommand('generateAddress', { index }).then((res) => {
                    chosenProfile.address = res.address

                    this.$snotify.success('Address generated')

                    this.$store.commit('application/updateState')
                })
            },
            copyToClipboard(value) {
                window.BlockHub.Bridge.sendCommand('writeToClipboard', value)

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
            .user-data__unknown-blk {
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
    .user-data__unknown-blk {
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
