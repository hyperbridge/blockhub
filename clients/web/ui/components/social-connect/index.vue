<template>
    <div class="social-connect__item">
        <div class="social-connect__item-icon">
            <img :src="icon">
        </div>
        <div class="social-connect__item-text">
            <div class="h5 font-weight-bold mb-0 pb-0">
                {{ name }}
            </div>
            <div v-if="description">
                {{ description }}
            </div>
        </div>
        <div class="social-connect__item-action">
            <c-button
                v-if="connected"
                status="second-warning"
                @click="disconnect">
                Disconnect
            </c-button>
            <c-button
                status="second-info"
                @click="connect">
                Connect
            </c-button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['icon', 'name', 'description', 'connected'],
    methods: {
        connect() {
            this.$store.commit('application/activeModal', 'coming-soon')
        },
        disconnect() {
            this.$store.commit('application/activeModal', 'coming-soon')
        }
    }
}
</script>

<style lang="scss" scoped>
    .social-connect__item{
        display: flex;
        width: 100%;
        align-items: center;
    }
    .social-connect__item-icon{
        width: 40px;
        img{
            width: 100%;
            border-radius: 4px;
            overflow: hidden;
        }
    }
    .social-connect__item-text{
        padding: 0 15px;
        display: flex;
        flex-direction: column;
        width: 50%;
    }
    .social-connect__item-action{
        margin-left: auto;
    }
</style>
