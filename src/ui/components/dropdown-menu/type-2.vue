<template>
    <div class="dropdown">
        <a class="btn dropdown-toggle" href="#" role="button"
           :id="id" data-toggle="dropdown" aria-haspopup="true"
           aria-expanded="false">
            {{ name }}
        </a>
        <div class="dropdown-menu" :aria-labelledby="[ id + 'Button']">
            <slot name="links"></slot>
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            name: String,
            id: String
        },
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
        }
        .dropdown-menu {
            .dropdown-item {
                padding-left: 15px;
                &:after {
                    display: none;
                }
            }
        }
    }
</style>
