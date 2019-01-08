<template>
    <div class="row">
        <div class="col-12 col-lg-8 col-xl-8">
            <div class="editor-container mb-4">
                <div class="editor" v-if="editing">
                    <button class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right"
                            @click="$emit('activateElement', 'description')"
                            v-if="!activeElement['description']">Change Description <span
                        class="fa fa-edit"></span></button>

                    <div class="form-control-element form-control-element--right"
                         v-if="activeElement['description']">
                        <input ref="description" name="description" type="text" class="form-control"
                               placeholder="Idea description..." v-model="idea.meta.description" />
                        <div class="form-control-element__box form-control-element__box--pretify bg-secondary">
                                <span class="fa fa-check"
                                        @click="$emit('deactivateElement', 'description')"></span>
                        </div>
                    </div>
                </div>
                <p class="idea__description">{{ idea.meta.description }}</p>
            </div>
            
            <div class="main-content" v-html="idea.value" v-if="!editing">
                {{ idea.value }}
            </div>

            <div class="content-editor" v-if="editing">
                <div id="summernote" v-html="idea.value">{{ idea.value }}</div>
            </div>
        </div>
        <div class="col-12 col-lg-4 col-xl-4" v-if="idea.rating">
            <c-rating-block class="margin-bottom-20" :items="[{ name: 'General', value: idea.rating.value }]"
                            :parentPath="`/idea/${idea.id}`" v-darklaunch="'RATINGS'" />
        </div>
    </div>
</template>

<script>
    export default {
        props: ['idea', 'editing', 'activeElement'],
        components: {
            'c-rating-block': (resolve) => require(['@/ui/components/rating-block'], resolve),
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
