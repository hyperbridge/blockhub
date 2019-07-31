<template>
    <Layout navigationKey="help">
        <BrokenPage :isError="isError" />
    </Layout>
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
        'BrokenPage': () => import('~/components/broken-page')
    },
    props: {
        isError: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>
