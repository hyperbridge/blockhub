<template>
    <c-layout navigationKey="help">
        <c-broken-page :isError="isError" />
    </c-layout>
</template>


<script>
export default {
    head() {
        return {
            title: `Not Found | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: 'BlockHub page could not be found' },
                { hid: 'keywords', name: 'keywords', content: 'not found, blockhub' }
            ]
        }
    },
    components: {
        'c-broken-page': () => import('~/components/broken-page').then(m => m.default || m)
    },
    props: {
        isError: {
            type: Object,
            default: () => ({})
        }
    },
    asyncData({ res }) {
        if (res) {
            res.statusCode = 404
        }

        return {
            error: {
                statusCode: 404,
                message: 'Page not found'
            }
        }
    }
}
</script>
