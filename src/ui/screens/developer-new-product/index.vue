<template>
    <c-layout navigationKey="store-navigation">
        <div class="option-panel">
            <button class="edit-btn btn btn-secondary btn-block margin-top-10" @click="clickEdit()" v-if="!editMode">Edit</button>
            <button class="remove-btn btn btn-secondary btn-block margin-top-10" @click="clickRemove()" v-if="editMode">Remove</button>
            <button class="publish-btn btn btn-secondary btn-block margin-top-10" @click="clickPublish()" v-if="editMode">Publish</button>
            <button class="exit-btn btn btn-secondary btn-block margin-top-10" @click="clickExit()" v-if="editMode">Exit</button>
        </div>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <h1 class="title editor-container margin-top-10">
                            <div class="editor" v-if="editMode">
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
                name: false
            },
            product: {
                name: 'My Product Name',
                author_tags: []
            },
            editMode: false
        }
    },
    methods: {
        handleSubmit() {
        
        },
        clickEdit() {
            this.editMode = true
        },
        clickRemove() {

        },
        clickPublish() {

        },
        clickExit() {
            this.editMode = false
            
            for (let key in this.activeElement) {
                this.activeElement[key] = false
            }
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

    .option-panel {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 100;

        .btn {
            width: 100px;
        }
    }
</style>
