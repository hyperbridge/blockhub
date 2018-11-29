<template>
    <div class="dropdown dropmenu_container" :class="{ 'show' : show }">
        <div class="rw-btn rw-btn--card" @click="toggleMenu" v-if="!$slots.title">
            <div></div>
        </div>
        <div class="dropdown__title" @click="toggleMenu" v-else>
            <slot name="title" />
        </div>
        <div
            v-if="show"
            class="dropdown-menu"
            v-click-outside:self="closeMenu"
            :class="dropdownPosition"
        >
            <div class="position-relative" style="z-index: 4">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            position:{
                type: String,
                default: 'left'
            }
        },
        data() {
            return {
                show: false
            }
        },
        methods:{
            toggleMenu() {
                this.show = !this.show;
            },
            closeMenu() {
                this.show = false;
            }
        },
        computed:{
            dropdownPosition(){
                console.log('run switch', this.position)
                switch (this.position) {
                    case 'left':
                        return 'dropdown-menu-left';
                    case 'right':
                        return 'dropdown-menu-right';
                }
            }
        }
    }
</script>


<style lang="scss" scoped>
    .dropmenu_container {
        position: relative;
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
        .dropdown__title{
            color: #fff;
            white-space: nowrap;
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
            .dropdown-menu{
                display: flex;
                flex-direction: column;
            }
        }
        .dropdown-menu {
            width: auto;
            padding: 10px;
            border-radius: 5px;
            /*overflow: hidden;*/
            border: none;
            background: rgba(255, 255, 255, .75);
            &.dropdown-menu-left{
                left: 0;
            }
            &.dropdown-menu-right{
                right: 0;
                left: unset;
            }
        }
    }
</style>

