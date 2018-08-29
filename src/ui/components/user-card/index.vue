<template>
    <div class="identity-block" :class="status">
        <div class="block-icon" :class="icon_color" v-if="user">
            <i :class="icon_class"></i>
        </div>
        <div class="avatar" v-if="!user">
            <a href="#3" class="avatar_upload_btn">
                <img
                    src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxOS45ODIgMzE5Ljk4MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzE5Ljk4MiAzMTkuOTgyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCI+CjxnPgoJPHBhdGggZD0iTTIzNC45OTEsMzE5Ljk4MmMyLjYxOCwwLDUuMjItMS4wNzgsNy4wNzEtMi45MjlzMi45MjktNC40NTMsMi45MjktNy4wNzF2LTE0MGg2NSAgIGMzLjkyMi0wLjAwOCw3LjcyMS0yLjU1Miw5LjIyMS02LjE3NnMwLjYxLTguMTA5LTIuMTU5LTEwLjg4NmwtMTUwLTE1MEMxNjUuMjAyLDEuMDc0LDE2Mi42MDQsMCwxNTkuOTkxLDAgICBjLTIuNjE0LDAtNS4yMTIsMS4wNzQtNy4wNjIsMi45MmwtMTUwLDE1MGMtMi43NjksMi43NzctMy42NTksNy4yNjMtMi4xNTksMTAuODg2YzEuNSwzLjYyNCw1LjI5OSw2LjE2OCw5LjIyMSw2LjE3Nmg2NXYxNDAgICBjMCwyLjYxOCwxLjA3OCw1LjIyLDIuOTI5LDcuMDcxczQuNDUzLDIuOTI5LDcuMDcxLDIuOTI5SDIzNC45OTF6IiBmaWxsPSIjNjQ3M2Y0Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="/>
            </a>
        </div>
        <div class="avatar" v-else>
            <img
                src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"/>
        </div>

        <div class="user_info">
            <div class="form-group margin-bottom-5">
                <input type="text"
                       class="form-control"
                       name="profile_name"
                       placeholder="Profile name"
                       v-if="!user"
                />
                <input type="text"
                       class="form-control"
                       name="profile_name"
                       placeholder="Profile name"
                       readonly
                       v-else
                />
            </div>
            <p>User</p>
        </div>
        <div class="unknown_blk">
            <a href="#3">
                <i class="fas fa-plus"></i>
            </a>
            <a href="#3">
                <i class="fas fa-plus"></i>
            </a>
            <a href="#3">
                <i class="fas fa-plus"></i>
            </a>
            <a href="#3">
                <i class="fas fa-plus"></i>
            </a>
            <div class="counts" v-if="user">
                <span>
                    0 <i class="fas fa-long-arrow-alt-down"></i>
                </span>
                    <span>
                    0 <i class="fas fa-long-arrow-alt-up"></i>
                </span>
            </div>
        </div>
        <div class="wallet_number">
            <div class="form-group">
                <input type="text" class="form-control" name="wallet_number"
                       placeholder="Wallet number" v-if="!user"/>
                <input type="text" class="form-control" name="wallet_number"
                       placeholder="Wallet number" readonly v-else/>
            </div>

            <button v-if="!user">
                <i class="fas fa-redo-alt"></i>
            </button>

            <button v-else>
                <i class="fas fa-copy"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['user', 'status','icon_color', 'icon_class']
}
</script>

<style lang="scss" scoped>
    .identity-block {
        padding: 10px;
        background: #303046;
        border-radius: 5px;
        border: 1px solid #28273a;
        display: inline-block;
        overflow: hidden;
        width: 100%;
        position: relative;
        .block-icon {
            position: absolute;
            top: 10px;
            right: 10px;
            color: #303046;
            font-size: 16px;
            text-align: center;
            line-height: 25px;
            border-radius: 100%;
            width: 25px;
            height: 25px;
            &.green {
                background: #43C981;
            }
            &.red {
                background: #ff6c5e;
                font-size: 13px;
            }
        }
        .avatar {
            width: 60px;
            height: 60px;
            display: inline-block;
            float: left;
            font-size: 60px;
            text-align: center;
            background: #1f202f;
            border-radius: 100%;
            border: 1px solid #1c1c2a;
            img {
                width: 60px;
                height: 60px;
                object-fit: cover;
            }
            a {
                img {
                    width: 28px;
                    height: auto;
                    vertical-align: middle;
                    margin-top: 12px;
                }
            }
        }
        .user_info {
            display: inline-block;
            float: right;
            width: calc(100% - 75px);
        }
        .unknown_blk {
            display: inline-block;
            float: left;
            width: 100%;
            margin: 10px 0;
            a {
                width: 35px;
                height: 35px;
                display: inline-block;
                float: left;
                border-radius: 100%;
                text-align: center;
                line-height: 33px;
                font-size: 16px;
                border: 1px solid #3b3b55;
                background: transparent;
                margin: 5px 10px 5px 0;
                color: rgba(255, 255, 255, 0);
                &:hover,
                &:first-child {
                    color: #6473f4;
                    background: #222131;
                    border: 1px solid #1b1b28;
                }
            }
        }
        .wallet_number {
            .form-group {
                display: inline-block;
                width: calc(100% - 40px);
                float: left;
                margin-bottom: 0;
            }
            button {
                display: inline-block;
                float: right;
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
        &.finish {
            background: #1d2031;
            input:read-only {
                border: none;
                background: transparent;
                box-shadow: none;
                color: #fff;
                padding: 9px 0;
            }
            .unknown_blk {
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
                color: #fff;
            }
        }
    }
</style>
