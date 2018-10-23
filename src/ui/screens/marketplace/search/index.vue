<template>
    <div>
        <h4>Saved filters</h4>
        <c-searcher
            @input="phrase = $event"
            :results="assetsFiltered"
        >
            <div slot="list">
                123123123123
            </div>
        </c-searcher>
        <c-block title="">
            <c-asset-list :assets="assets" :transition="true"/>
        </c-block>
    </div>
</template>

<script>
export default {
    components: {
        'c-block': (resolve) => require(['@/ui/components/block/index'], resolve),
        'c-asset-list': (resolve) => require(['@/ui/components/asset/list'], resolve),
        'c-searcher': (resolve) => require(['@/ui/components/searcher'], resolve),
    },
    computed: {
        assets() {
            return this.$store.getters['assets/assetsArray'];
        },
        assetsFiltered() {
            return this.$store.getters['assets/assetsByName'](this.phrase);
        }
    },
    data() {
        return {
            phrase: ''
        }
    },
    methods: {
    }
}
</script>

<style>

</style>
