<template>
    <c-layout navigationKey="store-navigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-8">
                        <h1 class="title editor-container margin-top-10">
                            <div class="editor" v-if="developer_mode">
                                <button class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right" @click="activateElement('name')" v-if="!activeElement['name']">Change Product Name <span class="fa fa-edit"></span></button>

                                <div class="form-group" v-if="activeElement['name']">
                                    <div class="form-control-element form-control-element--right">
                                        <input ref="name" name="name" type="text" class="form-control" placeholder="Product name..." v-model="product.name" />
                                        <div class="form-control-element__box form-control-element__box--pretify bg-secondary">
                                            <span class="fa fa-check" @click="deactivateElement('name')"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {{ product.name }}
                        </h1>
                        
                        <div class="product__tag" v-for="(tag, index) in product.author_tags" v-bind:key="index">
                            <a href="#" class="card-link" @click="filterTag(tag)">{{ tag }}</a>
                        </div>

                        <ul class="nav nav-tabs margin-bottom-50">
                            <li class="nav-item">
                                <a class="nav-link" :href="`#`">Overview</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-4">
                        <div class="editor" v-if="developer_mode">
                            <button class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right" @click="activateElement('background_image')" v-if="!activeElement['background_image']">Change Background Image <span class="fa fa-edit"></span></button>

                            <div class="form-group" v-if="activeElement['background_image']">
                                <div class="form-control-element form-control-element--right">
                                    <input ref="background_image" name="background_image" type="text" class="form-control" placeholder="Background image URL..." v-model="product.background_image" />
                                    <div class="form-control-element__box form-control-element__box--pretify bg-secondary">
                                        <span class="fa fa-check" @click="deactivateElement('background_image')"></span>
                                    </div>
                                </div>
                            </div>

                            <br />
                            <label>RECOMMENDED SIZE: 1120 x 524px</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-layout': () => import('@/ui/layouts/default')
    },
    data() {
        return {
            activeElement: {
                name: false,
                background_image: false
            },
            product: {
                name: 'My Product Name',
                author_tags: []
            }
        }
    },
    computed: {
        developer_mode() {
            if (!this.$store.state.marketplace.developer_mode) {
                for (let key in this.activeElement) {
                    this.activeElement[key] = false
                }
            }

            return this.$store.state.marketplace.developer_mode
        }
    },
    methods: {
        handleSubmit() {
        
        },
        deactivateElement(key) {
            this.activeElement[key] = false
        },
        activateElement(key) {
            for (let key in this.activeElement) {
                this.activeElement[key] = false
            }

            this.activeElement[key] = true

            setTimeout(() => {
                if (this.$refs[key])
                    this.$refs[key].focus()
            }, 10)
        },
        save() {
            this.$store.dispatch('marketplace/createProduct', this.product)
        }
    },
    mounted() {
        this.$store.dispatch('marketplace/setDeveloperMode', true)
    }
}
</script>

<style lang="scss" scoped>
    .editor {
        position: absolute;
        top: -45px;
        left: -5px;
        z-index: 10;

        .btn, input {
            border-color: #1b1c2b;
            background: #1B1C2B;
            border-radius: 6px;
            box-shadow: 1px 1px 0px #101010;
            font-size: 17px;

            span {
                font-size: 17px;
            }
        }
        .form-control-element .form-control-element__box--pretify {
            line-height: 11px;
        }
    }

    .editor-container {
        position: relative;
    }
</style>
