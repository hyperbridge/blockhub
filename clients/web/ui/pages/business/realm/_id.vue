<template>
    <Layout>
        <div class="row">
            <div
                v-if="notice"
                class="col-md-12">
                <p class="alert alert-info">
                    {{ notice }}
                </p>
                <br><br>
            </div>
            <div class="col-md-7">
                <div class="form-group row">
                    <label class="switch switch-sm col-sm-3">
                        <label>Title</label>
                    </label>
                    <div class="col-sm-9">
                        <input
                            v-model="realm.name"
                            type="text"
                            class="form-control"
                            placeholder="">
                        <span class="form-text" />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="switch switch-sm col-sm-3">
                        <label>Description</label>
                    </label>
                    <div class="col-sm-9">
                        <input
                            v-model="realm.description"
                            type="text"
                            class="form-control"
                            placeholder="">
                        <span class="form-text" />
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <div class="form-group row">
                    <label class="switch switch-sm col-sm-4">
                        <label>Tags</label>
                    </label>
                    <div class="col-sm-8">
                        <Multiselect
                            v-model="realm.tags"
                            tag-placeholder="Add this as new tag"
                            placeholder="Search or add a tag"
                            label="value"
                            track-by="key"
                            :options="tagOptions"
                            :multiple="true"
                            :taggable="true"
                            @tag="addTag" />
                        <span class="form-text" />
                    </div>
                </div>
            </div>

            <div class="col-12">
                <HtmlEditor
                    height="200"
                    :model.sync="realm.value" />

                <span class="form-text" />
            </div>

            <div class="col-12">
                <HeadingBarWithSimpleColor
                    class="mt-4 mb-4"
                    colorCode="#444"
                    textAlign="center"
                    hidden>
                    Advanced Options
                </HeadingBarWithSimpleColor>

                <div @click="toggleAdvanced">
                    <i
                        class="mr-2 fas"
                        :class="advanced ? 'fa-angle-up' : 'fa-angle-down'" />
                    {{ advanced ? 'Hide' : 'Show' }} Advanced
                </div>
            </div>

            <div
                v-if="advanced"
                class="col-12">
                <hr>
            </div>

            <div
                v-if="advanced"
                class="col-md-6" />

            <div
                v-if="advanced"
                class="col-md-6" />

            <div
                v-if="advanced"
                class="col-md-12">
                <div
                    class="form-group row"
                    style="text-align: center">
                    <br>
                    <h3 style="width: 100%">
                        Raw Data Editor
                    </h3>
                    <br><br>
                    <textarea
                        :value="JSON.stringify(realm)"
                        rows="10"
                        cols="50"
                        @input="updateRealmRaw($event.target.value)" />
                    <br><br>
                    <span class="form-text" />
                    <JsonEditor
                        v-model="realm"
                        :objData="realm"
                        style="margin: 0 auto" />
                </div>
            </div>
        </div>

        <template slot="menu">
            <div class="row">
                <div
                    v-if="realm.id"
                    class="col-12 text-right">
                    <Button
                        status="info"
                        :href="`/realm/${realm.id}`"
                        target="_blank"
                        icon="open">
                        View Page
                    </Button>
                    <Button
                        status="success"
                        icon="save"
                        @click="save">
                        Save
                    </Button>
                </div>
                <div
                    v-if="!realm.id"
                    class="col-12 text-right">
                    <Button
                        status="success"
                        size="md"
                        icon="plus"
                        @click="create">
                        Create
                    </Button>
                </div>
            </div>
        </template>
    </Layout>
</template>

<script>
export default {
    components: {
        'Layout': () => import('@ericmuyser/hyper-ui').then(m => m.Layout),
        'HtmlEditor': () => import('@ericmuyser/hyper-ui').then(m => m.HtmlEditor),
        'JsonEditor': () => import('@ericmuyser/hyper-ui').then(m => m.JsonEditor),
        'Multiselect': () => import('vue-multiselect').then(m => m.default)
    },
    props: {
    },
    data() {
        let realm = this.id === 'new' ? this.$store.state.marketplace.defaultRealm : this.$store.getters['realms/get'](this.id)

        if (!realm) {
            realm = this.$store.state.marketplace.defaultRealm
        }

        return {
            loadingState: true,
            notice: '',
            advanced: false,
            realm,
            blockchain: false,
            tagOptions: []
        }
    },
    computed: {
        originalRealm() {
            return this.id === 'new' ? this.$store.state.marketplace.defaultRealm : this.$store.getters['realms/get'](this.id)
        }
    },
    watch: {
        originalRealm() {
            this.realm = { ...this.realm, ...this.originalRealm }
        }
    },
    created() {
        if (this.id !== 'new') {
            this.$store.dispatch('realms/find', {
                query: {
                    id: Number(this.id),
                    $eager: 'tags'
                }
            })
        }
    },
    methods: {
        updateRealmRaw(realm) {
            this.realm = JSON.parse(realm)
        },
        addTag(newTag) {
            const tag = {
                key: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
                value: newTag
            }

            this.tagOptions.push(tag)
            this.realm.tags.push(tag)
        },
        viewPage() {

        },
        toggleAdvanced() {
            this.advanced = !this.advanced
        },
        async create() {
            this.realm.ownerId = this.$store.state.application.activeProfile.id

            const res = await this.$store.dispatch('realms/create', this.realm)

            this.realm.id = res.id
            this.notice = 'Congratulations, your realm has been created!'

            this.$router.push(`/business/realm/${this.realm.id}`)
        },
        async save() {
            this.realm.ownerId = this.$store.state.application.activeProfile.id

            const res = await this.$store.dispatch('realms/update', [this.realm.id, this.realm, {
                query: {
                    $eager: 'tags'
                }
            }])

            this.notice = 'Realm has been saved.'
        }
    }
}
</script>

<style lang="scss">
.note-editor.note-frame .note-editing-area .note-editable {
    background: #30314d !important;
    color: #fff;
}
</style>
