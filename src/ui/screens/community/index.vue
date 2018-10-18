<template>
    <c-layout navigationKey="store">
            <div class="container-fluid">
                <div class="row margin-bottom-50">
                    <div class="col">
                        <c-topic-item
                            :link="`/#/community/forums`"
                            icon="users"
                            class="padding-10">
                            Forums
                        </c-topic-item>
                    </div>
                    <div class="col">
                        <c-topic-item
                            :link="`/#/projects`"
                            icon="hand-holding-heart"
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
