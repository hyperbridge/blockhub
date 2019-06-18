<template>
    <c-layout navigationKey="help">
        <c-broken-page :error="error" />
    </c-layout>
</template>


<script>
export default {
    head() {
        return {
            title: `Error | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: 'BlockHub error' },
                { hid: 'keywords', name: 'keywords', content: 'error, blockhub' }
            ]
        }
    },
    components: {
        'c-broken-page': () => import('~/components/broken-page').then(m => m.default || m)
    },
    props: {
        error: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>
