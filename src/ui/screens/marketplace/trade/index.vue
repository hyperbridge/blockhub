<template>
    <div>
        <!-- <button class="create-offer-btn">Create new offer</button> -->
        <c-block-menu :links="links">
            <router-view/>
        </c-block-menu>
    </div>
</template>

<script>
    export default {
        components: {
            'c-block-menu': (resolve) => require(['@/ui/components/block/menu'], resolve),
        },
        data() {
            return {
                links: [
                    { title: 'Manager', to: '/marketplace/trade' },
                    { title: 'Explorer', to: { name: 'Marketplace Trade Explorer' }},
                    { title: 'History', to: { name: 'Marketplace Trade History' }},
                    { title: 'Settings', to: { name: 'Marketplace Trade Settings' }}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .create-offer-btn {
        background: linear-gradient(to right,#65C7F7, #0052D4);
        border: 1px solid rgba(255,255,255,.4);
        padding: 20px 40px;
        width: 100%;
        max-width: 500px;
        color: #fff;
        margin: 0 auto;
        cursor: pointer;
        border-radius: 6px;
        outline: none;
        margin-bottom: 30px;
        // box-shadow: inset 0 0 20px -4px rgb(96, 155, 252);
        font-size: 16px;
        // font-weight: 500;
    }
</style>

