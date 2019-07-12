<template>
    <div class="profile-picker">
        <div
            v-for="profile in profiles"
            :key="profile.id"
            class="profile-picker__profile">
            <c-user-card
                :user="profile"
                :previewMode="true"
                :class="{ 'default': profile.chosen }" />
            <div class="profile__action">
                <slot>
                    <c-button
                        v-if="!profile.chosen"
                        status="info"
                        icon="check"
                        @click="$emit('chooseProfile', profile)">
                        Choose
                    </c-button>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'c-user-card': () => import('~/components/user-card').then(m => m.default || m)
    },
    props: {
        profiles: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>

    .profile-picker {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 20px;
        align-items: center;
        justify-content: center;
    }

    .profile-picker__profile {
        position: relative;
        margin: 10px 2%;
        width: 46%;
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
                content: "CHOSEN \F14A";
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
        .c-button {
            margin: 0 5px;
        }
    }
</style>
