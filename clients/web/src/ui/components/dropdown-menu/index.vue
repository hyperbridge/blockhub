<template>
    <div
        class="dropdown dropmenu_container"
        :class="[ dropPosition ? 'drop' + dropPosition : '', isActive ? 'show' : '' ]"
    >
        <div class="rw-btn rw-btn--card" @click=" isActive = !isActive ">
            <div></div>
        </div>
        <div class="dropdown-menu">
            <ul class="list-unstyled">
                <li v-for="(item, index) in menuItems" :key="index">
                    <a
                        href="#"
                        class="btn btn-sm"
                        :class="item | btnDynamicClass"
                    >{{ item }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dropPosition: String,
        menuItems: {
            type: Array,
            default: () => ['Save', 'Share', 'Report']
        }
    },
    data(){
        return{
            isActive: false
        }
    },
    filters: {
        btnDynamicClass(menuItem) {
            let class_name = 'btn-'
            switch(menuItem) {
                case 'Save':
                    return class_name += 'success'
                case 'Report':
                    return class_name += 'danger'
                default:
                    return class_name += 'info'
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
                    background: #fff;
                    &:before,
                    &:after {
                        background: #fff;
                    }
                }
            }
            .dropdown-menu{
                display: block;
            }
        }
        .dropdown-menu {
            width: auto;
            min-width: 80px;
            padding: 0;
            background: #151824;
            border-color: rgba(255, 255, 255, .5);
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

