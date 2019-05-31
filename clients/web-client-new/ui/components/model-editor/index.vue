<template>
    <div class="model-editor">
        <div class="row margin-bottom-40" v-if="model">
            <div class="col-md-12" v-if="notice">
                <p class="alert alert-info">{{ notice }}</p>
                <br /><br />
            </div>
            <div class="col-md-6">
                <div class="form-group row">
                    <label class="switch switch-sm col-sm-4">
                        <label>Tags</label>
                    </label>
                    <div class="col-sm-8">
                        <c-multiselect v-model="model.tags"
                            tag-placeholder="Add this as new tag"
                            placeholder="Search or add a tag"
                            label="value"
                            track-by="key"
                            :options="tagOptions"
                            :multiple="true"
                            :taggable="true"
                            @tag="addTag">
                        </c-multiselect>
                        <span class="form-text"></span>
                    </div>
                </div>
            </div>

            <div class="col-12">
                <c-html-editor height="200" :model.sync="model.value" />

                <span class="form-text"></span>
            </div>

            <div class="col-12 margin-top-10">
                <c-heading-bar-color class="mt-4 mb-4" colorCode="#444" textAlign="center" hidden>Advanced Options</c-heading-bar-color>

                <div @click="toggleAdvanced">
                    <i class="mr-2 fas" :class="advanced ? 'fa-angle-up' : 'fa-angle-down'"></i>
                    {{ advanced ? 'Hide' : 'Show' }} Advanced
                </div>
            </div>

            <div class="col-12" v-if="advanced">
                <hr />
            </div>

            <div class="col-md-12" v-if="advanced">
                <div class="form-group row" style="text-align: center">
                    <br />
                    <h3 style="width: 100%">Raw Data Editor</h3>
                    <br /><br />
                    <textarea :value="modelJson" @input="updateModelRaw($event.target.value)" rows="10" cols="50"></textarea>
                    <br /><br />
                    <span class="form-text"></span>
                    <c-json-editor :objData="model" v-model="model" style="margin: 0 auto"></c-json-editor>
                </div>
            </div>

        </div>

        <div class="row" slot="menu">
            <div class="col-12 text-right" v-if="model.id">
                <c-button status="info" size="lg" :href="`/model/${model.id}`" target="_blank" icon="eye">
                    View Community
                </c-button>
                <c-button status="success" size="lg" @click="save" icon="save">
                    Save
                </c-button>
            </div>
            <div class="col-12 text-right" v-if="!model.id">
                <c-button status="success" size="lg" @click="create" icon="plus">
                    Create
                </c-button>
            </div>
        </div>
    </div>
</template>

<script>
    import beautify from 'json-beautify'

    export default {
        props: {
            serviceKey: String
        },
        components: {
            'c-html-editor': () => import('~/components/html-editor').then(m => m.default || m),
            'c-json-editor': () => import('~/components/json-editor').then(m => m.default || m),
            'c-multiselect': (resolve) => require(['vue-multiselect'], resolve),
        },
        data() {
            return {
                loadingState: true,
                notice: "",
                model: this.$route.params.id === 'new' ? this.$store.state.funding.defaultModel : this.$store.getters['models/get'](this.$route.params.id),
                advanced: false,
                tagOptions: []
            }
        },
        computed: {
            savedModel() {
                return this.$store.getters[this.serviceKey + '/get'](this.$route.params.id)
            },
            modelJson() {
                return beautify(this.model, null, 2, 100)
            }
        },
        watch: {
            savedModel() {
                this.model = { ...this.model, ...this.savedModel }
            }
        },
        created() {
            if (this.$route.params.id !== 'new') {
                this.$store.dispatch(this.serviceKey + '/find', {
                    query: {
                        id: Number(this.$route.params.id),
                        $eager: 'tags',
                    }
                })
            }
        },
        methods: {
            updateModelRaw(model) {
                this.model = JSON.parse(model)
            },
            addTag (newTag) {
                const tag = {
                    key: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000)),
                    value: newTag
                }

                this.tagOptions.push(tag)
                this.model.tags.push(tag)
            },
            toggleAdvanced() {
                this.advanced = !this.advanced
            },
            async create() {
                this.model.ownerId = this.$store.state.application.activeProfile.id

                const res = await this.$store.dispatch(this.serviceKey + '/create', this.model)

                this.model.id = res.id
                this.notice = "Congratulations, your community has been created!"

                this.$router.push('/business/' + this.serviceKey + '/' + this.model.id)
            },
            async save() {
                this.model.ownerId = this.$store.state.application.activeProfile.id
                
                await this.$store.dispatch(this.serviceKey + '/update', [this.model.id, this.model, {
                    query: {
                        $eager: 'tags'
                    }
                }])

                this.notice = "Community has been saved."

                window.scrollTo(0, 0)
                //this.model.id = modelResult.id
                //this.successfulCreationMessage = "Congratulations, your model has been created!"

                //this.$router.push('/business/model/' + this.model.id)
            }
        },
    }
</script>

<style lang="scss" scoped>
    .note-editor.note-frame .note-editing-area .note-editable {
        background: #30314d !important;
        color: #fff;
    }
</style>
