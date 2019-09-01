<template>
    <div class="row">
        <div class="col-12 col-lg-8 col-xl-8">
            <div class="editor-container mb-4">
                <div
                    v-if="editing"
                    class="editor">
                    <button
                        v-if="!activeElement['description']"
                        class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right"
                        @click="$emit('activateElement', 'description')">
                        Change Description <span
                            class="fa fa-edit" />
                    </button>

                    <div
                        v-if="activeElement['description']"
                        class="form-control-element form-control-element--right">
                        <input
                            ref="description"
                            v-model="idea.meta.description"
                            name="description"
                            type="text"
                            class="form-control"
                            placeholder="Idea description...">
                        <div class="form-control-element__box form-control-element__box--pretify bg-secondary">
                            <span
                                class="fa fa-check"
                                @click="$emit('deactivateElement', 'description')" />
                        </div>
                    </div>
                </div>
                <p class="idea__description">
                    {{ idea.meta.description }}
                </p>
            </div>

            <div
                v-if="!editing"
                class="main-content"
                v-html="idea.value">
                {{ idea.value }}
            </div>

            <div
                v-if="editing"
                class="content-editor">
                <div
                    id="summernote"
                    v-html="idea.value">
                    {{ idea.value }}
                </div>
            </div>
        </div>
        <div
            v-if="idea.rating"
            class="col-12 col-lg-4 col-xl-4">
            <RatingBlock
                v-access="'rating.read'"
                class="margin-bottom-20"
                :items="[{ name: 'General', value: idea.rating.value }]"
                :parentPath="`/idea/${idea.id}`" />
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'RatingBlock': () => import('@ericmuyser/hyper-ui').then(m => m.RatingBlock),
        'DiscussionItem': () => import('@ericmuyser/hyper-ui').then(m => m.DiscussionItem)
    },
    props: ['idea', 'editing', 'activeElement'],
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
