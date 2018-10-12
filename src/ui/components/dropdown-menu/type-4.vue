<template>
    <div class="dropdown dropmenu_container" :class="{'show' : show}">
        <div class="rw-btn rw-btn--card" @click="toggleMenu">
            <div></div>
        </div>
        <div class="dropdown-menu dropdown-menu-left"
             :class="{'show' : show}">
            <div class="position-relative" style="z-index: 4">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                show: false
            }
        },
        methods:{
            toggleMenu(){
                this.show = !this.show
            },
            closeMenu(){
                this.show = false
            }
        }
    }
</script>


<style lang="scss" scoped>
    .dropmenu_container {
        position: absolute;
        display: inline-block;
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
            /*overflow: hidden;*/
            border: none;
            background: rgba(255, 255, 255, .75);
        }
    }
</style>

