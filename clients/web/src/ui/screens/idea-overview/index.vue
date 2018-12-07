<template>
    <div class="row">
        <div class="col-12 col-lg-8 col-xl-8">
            <div class="main-content" v-html="idea.value" v-if="!editing">
                {{ idea.value }}
            </div>

            <div class="content-editor" v-if="editing">
                <div id="summernote" v-html="idea.value">{{ idea.value }}</div>
            </div>
        </div>
        <div class="col-12 col-lg-4 col-xl-4">
            <c-rating-block class="margin-bottom-20" :items="idea.rating"
                            :parentUrl="`#/idea/${idea.id}`" v-darklaunch="'RATINGS'" />
        </div>
    </div>
</template>

<script>
    export default {
        props: ['idea', 'editing'],
        components: {
            'c-item': (resolve) => require(['@/ui/components/community/post-item'], resolve)
        },
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
