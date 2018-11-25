<template>
    <div class="tab-item" v-show="isActive">
        <div class="tab-item__container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'c-tab',
        props: {
            name: {
                type: String,
                required: true
            },
            selected: {
                type: Boolean,
                default: false
            },
        },
        data() {
            return {
                isActive: false
            };
        },
        computed: {
            href() {
                return '#' + this.name.toLowerCase().replace(/ /g, '-');
            }
        },
        mounted() {
            this.isActive = this.selected;
        }
    }
</script>

<style lang="scss" scoped>
    .tab-item {
        position: relative;
        color: #fff;
    }
    .tab-item__container {
        padding: 15px;
        text-align: center;
    }
</style>
