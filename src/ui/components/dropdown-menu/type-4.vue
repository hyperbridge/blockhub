<template>
    <div
        class="dropdown dropmenu_container"
        :class="[ dropPosition ? 'drop' + dropPosition : '' ]"
    >
        <div class="rw-btn rw-btn--card" data-toggle="dropdown" aria-expanded="false">
            <div></div>
        </div>
        <div class="dropdown-menu">
            <!--<frosted-glass-container>-->
                <!--<frosted-glass>-->
            <div class="position-relative" style="z-index: 4">
                <slot />
            </div>
                <!--</frosted-glass>-->
            <!--</frosted-glass-container>-->
        </div>
    </div>
</template>

<script>
    // import { frostedGlassContainer, frostedGlass } from 'frosted-glass/dist/frostedglass.js';
export default {
    props: {
        dropPosition: String,
    },
    components:{
        // 'frosted-glass-container': frostedGlassContainer,
        // 'frosted-glass': frostedGlass
    }
}
</script>


<style lang="scss" scoped>
    .dropmenu_container {
        position: absolute;
        .rw-btn--card {
            padding: 0;
            border: none;
            width: 20px;
            height: 20px;
            div {
                border-color: #fff;
                &:before,
                &:after {
                    border-color: #fff;
                }
            }
            &:hover {
                background: transparent;
            }
        }
        &.show {
            .rw-btn--card {
                background: transparent;
                color: #fff;
                div {
                    border-color: #fff;
                    background: #fff;
                    &:before,
                    &:after {
                        background: #fff;
                    }
                }
            }
        }
        .dropdown-menu {
            width: auto;
            padding: 10px;
            border-radius: 5px;
            overflow: hidden;
            border: none;
            background: transparent;
            &:before{
                content: '';
                background: rgba(0, 0, 0, .7);
                opacity: .9;
                position: absolute;
                left: -25px;
                right: -25px;
                top: -25px;
                bottom: -25px;
                z-index: 1;
            }
        }
    }
</style>

