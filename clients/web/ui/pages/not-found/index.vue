<template>
    <Layout navigationKey="help">
        <BrokenPage :isError="errorData" />
    </Layout>
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
        'BrokenPage': () => import('@ericmuyser/hyper-ui').then(m => m.BrokenPage)
    },
    asyncData({ res }) {
        if (res) {
            res.statusCode = 404
        }

        return {
            errorData: {
                statusCode: 404,
                message: 'Page not found'
            }
        }
    }
}
</script>
