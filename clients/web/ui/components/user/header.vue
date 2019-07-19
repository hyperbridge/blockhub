<template>
    <div class="row">
        <div class="col-5">
            <div class="profile__user-info">
                <div class="user_avatar">
                    <c-img
                        src="https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-04-512.png" />
                    <div class="us_icon">
                        <i class="fas fa-lock" />
                    </div>
                </div>
                <div class="user_info">
                    <h2 class="userName">
                        {{ profile.name }}
                    </h2>
                    <div
                        v-access="'reputation'"
                        class="user_status">
                        Trusted User
                    </div>
                    <div
                        v-access="'reputation'"
                        class="user_statistic">
                        <span>
                            12
                            <i class="fas fa-arrow-up" />
                        </span>
                        <span>
                            193
                            <i class="fas fa-arrow-down" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-7">
            <div
                v-access="'badge.read'"
                class="profile__user-medal">
                <c-img src="https://cdn3.iconfinder.com/data/icons/game-menu-control/512/Your-rank.png" />
                <c-img src="https://cdn3.iconfinder.com/data/icons/game-menu-control/512/Your-rank.png" />
                <c-img src="https://cdn3.iconfinder.com/data/icons/game-menu-control/512/Your-rank.png" />
                <c-img src="https://cdn3.iconfinder.com/data/icons/game-menu-control/512/Your-rank.png" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'c-button-arrows': () => import('~/components/buttons/arrows').then(m => m.default || m)
    },
    computed: {
        profile() {
            return this.$store.state.application.activeProfile
        }
    }
}
</script>

<style lang="scss" scoped>
    .profile__user-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .user_avatar {
            width: 114px;
            position: relative;
            img {
                width: 100%;
                border-radius: 100%;
            }
            .us_icon {
                position: absolute;
                bottom: 0;
                left: 0;
                border-radius: 100%;
                width: 32px;
                height: 32px;
                text-align: center;
                line-height: 31px;
                font-size: 19px;
                background: #43C981;
                color: #1C2032;
            }
        }
        .user_info {
            width: calc(100% - 130px);
            text-align: left;
            .userName {
                font-size: 32px;
                padding: 0;
                margin: 0;
            }
            .user_status {
                font-size: 14px;
                font-weight: bold;
            }
            .user_statistic {
                font-size: 24px;
                text-align: left;
                margin-top: 13px;
                span {
                    margin-right: 10px;
                    i {
                        margin-left: 3px;
                    }
                }
            }
        }
    }
    .profile__user-medal{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: nowrap;
        img{
            height: 40px;
            margin-left: 20px;
            width: auto;
        }
    }
</style>
