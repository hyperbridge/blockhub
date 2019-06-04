<template>
    <div class="dropdown">
        <a
            :id="id"
            class="btn dropdown-toggle"
            :class="{ 'show-bg' : showBg}"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            {{ name }}
        </a>
        <div
            class="dropdown-menu"
            :aria-labelledby="[ id + '_button']">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        id: String,
        showBg: Boolean
    }
}
</script>

<style lang="scss" scoped>
    .dropdown {
        display: inline-block;
        float: left;
        margin-right: 20px;
        &:last-child {
            margin-right: 0;
        }
        a.dropdown-toggle {
            padding: 0;
            background: transparent;
            border: none;
            font-size: 11px;
            text-transform: uppercase;
            color: #fff;
            &:active,
            &:focus {
                box-shadow: none;
                border: none;
                background: transparent;
            }
            &:after {
                margin-left: 18px;
            }
            &.show-bg{
                background-color: #24253B;
                padding: 4px 9px;
                border-radius: 5px;
            }
        }
        .dropdown-menu {
            background-color: #24253B;
            border: 1px solid rgba(0, 0, 0, .4);
            a {
                padding: 5px 10px;
                color: #fff;
                display: block;
                width: 100%;
                outline: none;
                position: relative;
                -moz-transition: all 200ms ease-in-out;
                -o-transition: all 200ms ease-in-out;
                -webkit-transition: all 200ms ease-in-out;
                transition: all 200ms ease-in-out;
                border-bottom: 1px solid rgba(0, 0, 0, .2);
                text-decoration: none;
                &:hover{
                    background: rgba(0, 0, 0, .1);
                }
                &:last-child {
                    border: none;
                }
            }
        }
    }
</style>
