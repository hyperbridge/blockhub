<template>
    <c-layout navigationKey="store">
            <div class="container-fluid">
                <div class="row justify-content-center margin-bottom-50">
                    <div class="col-12 col-md-4 col-lg-3">
                        <c-topic-item
                            :link="`/#/community/forums`"
                            size="lg"
                            icon="users"
                            class="padding-10">
                            Forums
                        </c-topic-item>
                    </div>
                    <div class="col-12 col-md-4 col-lg-3">
                        <c-topic-item
                            :link="`/#/projects`"
                            icon="hand-holding-heart"
                            size="lg"
                            class="padding-10">
                            Crowdfunds
                        </c-topic-item>
                    </div>
                </div>
            </div>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-topic-item': (resolve) => require(['@/ui/components/help/topic-item'], resolve),
        }
    }
</script>

<style lang="scss" scoped>
</style>
