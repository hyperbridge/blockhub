<template>
    <div
        class="dropdown dropmenu_container"
        :class="[ dropPosition ? 'drop' + dropPosition : '' ]"
        :style="style"
    >
        <div class="rw-btn rw-btn--card" data-toggle="dropdown" aria-expanded="false">
            <div></div>
        </div>
        <div class="dropdown-menu">
            <ul class="list-unstyled">
                <li v-for="(item, index) in menuItems" :key="index">
                    <a
                        href="#"
                        class="btn btn-sm"
                        :class="item | btn_dynamic_class"
                    >{{ item }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dropdown-menu',
    props: {
        dropPosition: String,
        menuItems: {
            type: Array,
            default: () => ['Save', 'Share', 'Report']
        }
    },
    filters: {
        btn_dynamic_class(menuItem) {
            let class_name = 'btn-';
            switch(menuItem) {
                case 'Save':
                    return class_name += 'success';
                case 'Report':
                    return class_name += 'danger';
                default:
                    return class_name += 'info';
            }
        }
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
                &:before,
                &:after {
                    background: #fff;
                }
            }
        }
    }
    .dropdown-menu {
        width: auto;
        min-width: 80px;
        padding: 0;
        background: #151824;
        &:before {
            width: 10px;
            height: 10px;
            display: inline-block;
            content: "";
            position: absolute;
            top: -5px;
            right: 5px;
        }
        ul {
            padding: 0;
            margin: 0;
            li {
                width: 100%;
                padding: 3px;
                a {
                    width: 100%;
                    text-align: center;
                    text-transform: uppercase;
                    color: #fff;
                    padding: 0;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>

