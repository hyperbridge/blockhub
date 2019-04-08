<template>
    <c-layout navigationKey="store">
        <div class="row">
            <div class="col-12">
                <c-block title="Learn more" class="margin-bottom-30" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                    Learn
                </c-block>
            </div>
            <div class="col-12">
                <c-block title="FAQ" class="margin-bottom-30" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                    FAQ
                </c-block>
            </div>
            <div class="col-12">
                <c-block title="Apply" class="margin-bottom-30" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                    Apply
                </c-block>
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
