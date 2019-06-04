<template>
    <div
        v-show="isActive"
        class="tab-item"
        :class="{'bg-transparent' : transparentBg}">
        <div class="tab-item__container">
            <slot />
        </div>
        <div
            v-if="showFooter"
            class="tab-item__footer">
            <slot name="footer" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        selected: {
            type: Boolean,
            default: false
        },
        showFooter: {
            type: Boolean,
            default: false
        },
        transparentBg: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isActive: false
        }
    },
    computed: {
        href() {
            return `#${this.name.toLowerCase().replace(/ /g, '-')}`
        }
    },
    mounted() {
        this.isActive = this.selected
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
        &.bg-transparent{
            &:before,
            .tab-item__container{
                background: transparent;
                box-shadow: none;
            }

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
