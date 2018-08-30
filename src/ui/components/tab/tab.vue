<template>
    <div class="tab-item" v-show="isActive">
        <div class="tab-item__container">
            <slot></slot>
        </div>
        <div class="tab-item__footer" v-if="showFooter">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            name: { required: true },
            selected: { default: false},
            showFooter : { default: false}
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
        &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            right: 15px;
            height: 15px;
            background: #3e3e5c;
            z-index: 10;
        }
    }
    .tab-item__container {
        background: #3e3e5c;
        padding: 15px;
        border-radius: 0 5px 5px 5px;
        border-top: none;
        box-shadow: 0 3px 20px rgba(0, 0, 0, .2);
    }
    .tab-item__footer{
        margin-top: 15px;
        width: 100%;
    }
</style>
