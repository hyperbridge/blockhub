<template>
    <div class="identity-block" :class="{ 'preview-mode': previewMode }">
        <div class="identity-block__user-data">
            <div
                v-if="previewMode"
                class="user-data__icon"
                :class="iconClass"
            >
                <i class="fas" :class="status | statusIcon"></i>
            </div>
            <div class="user-data__avatar">
                <a
                    v-if="!user.img"
                    href="#3"
                    class="user-data__avatar-upload-btn"
                >
                    <c-img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxOS45ODIgMzE5Ljk4MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzE5Ljk4MiAzMTkuOTgyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCI+CjxnPgoJPHBhdGggZD0iTTIzNC45OTEsMzE5Ljk4MmMyLjYxOCwwLDUuMjItMS4wNzgsNy4wNzEtMi45MjlzMi45MjktNC40NTMsMi45MjktNy4wNzF2LTE0MGg2NSAgIGMzLjkyMi0wLjAwOCw3LjcyMS0yLjU1Miw5LjIyMS02LjE3NnMwLjYxLTguMTA5LTIuMTU5LTEwLjg4NmwtMTUwLTE1MEMxNjUuMjAyLDEuMDc0LDE2Mi42MDQsMCwxNTkuOTkxLDAgICBjLTIuNjE0LDAtNS4yMTIsMS4wNzQtNy4wNjIsMi45MmwtMTUwLDE1MGMtMi43NjksMi43NzctMy42NTksNy4yNjMtMi4xNTksMTAuODg2YzEuNSwzLjYyNCw1LjI5OSw2LjE2OCw5LjIyMSw2LjE3Nmg2NXYxNDAgICBjMCwyLjYxOCwxLjA3OCw1LjIyLDIuOTI5LDcuMDcxczQuNDUzLDIuOTI5LDcuMDcxLDIuOTI5SDIzNC45OTF6IiBmaWxsPSIjNjQ3M2Y0Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="/>
                </a>
                <c-img v-else src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"/>
            </div>

            <div>
                <input
                    type="text"
                    class="form-control margin-bottom-5"
                    name="profile_name"
                    placeholder="Profile name"
                    :value="user.name"
                    @input="$emit('update:name', $event.target.value)"
                    :readonly="previewMode"
                />
                <p>User</p>
            </div>
        </div>

        <div class="identity-block__unknown-blk">
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

        <div class="wallet_number">
            <input
                type="text"
                class="form-control"
                name="wallet_number"
                placeholder="Wallet number"
                :value="user.wallet"
                @input="$emit('update:wallet', $event.target.value)"
                :readonly="previewMode"
            />
            <button>
                <i :class="`fas fa-${previewMode ? 'copy' : 'redo-alt'}`"></i>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'user-card',
        props: {
            user: Object,
            status: {
                type: String,
                default: 'success',
                validator(val) {
                    return ['info', 'success', 'warning', 'danger'].includes(val);
                }
            },
            iconColor: String,
            iconClass: String,
            previewMode: Boolean
        }
    }
</script>

<style lang="scss" scoped>
    .identity-block {
        padding: 10px;
        background-color: #303046;
        border-radius: 5px;
        border: 1px solid #28273a;
        width: 100%;
        position: relative;
        color: #fff;
        .wallet_number {
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
    }
    .identity-block__text {
        border: none;
        box-shadow: 0 0 3px rgba(0, 0, 0, .4) inset;
        background: #303049;
        color: rgba(255, 255, 255, .5);
    }
    .identity-block__user-data {
        display: flex;
        align-items: center;
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
        min-width: 60px;
        width: 60px;
        height: 60px;
        box-sizing: border-box;
        font-size: 60px;
        text-align: center;
        background: #1f202f;
        border-radius: 50%;
        border: 1px solid #1c1c2a;
        margin-right: 15px;
        img {
            object-fit: cover;
            max-height: 64px;
        }
        .user-data__avatar-upload-btn img {
            max-height: 32px;
        }
    }
    .user-data__avatar, .user-data__avatar-upload-btn {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .identity-block__unknown-blk {
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

    .preview-mode {
        background: #1d2031;
        .user-data__icon {
            background: #43C981;
        }
        input:read-only {
            border: none;
            background: transparent;
            box-shadow: none;
            color: #fff;
            padding: 9px 0;
        }
        .identity-block__unknown-blk {
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
    .warning {
        background: #ff5454;
    }
</style>
