<template>
    <div class="navigation">
        <c-menu-container :class="{'is-minimized' : minimized}">
            <li class="title">Main</li>
            <c-menu-item to="#" icon="home" :minimized="minimized">
                Marketplace
                <template slot="submenu">
                    <c-menu-item to="/business/product/new">
                        New Product
                    </c-menu-item>
                </template>
            </c-menu-item>
            <li class="title">Funding</li>
            <c-menu-item to="#" icon="file-alt" :minimized="minimized">
                Funding
                <template slot="submenu">
                    <c-menu-item to="/business/project/new">
                        New Crowdfund
                    </c-menu-item>
                </template>
            </c-menu-item>
        </c-menu-container>
    </div>
</template>

<script>
    export default {
        name: 'business-sidebar',
        props:['minimized'],
        components: {
            'c-menu-container': (resolve) => require(['@/ui/components/business/menu/menu-container'], resolve),
            'c-menu-item': (resolve) => require(['@/ui/components/business/menu/menu-item'], resolve)
        },
        data(){
            return{
                darkMode: false,
                isActive: false
            }
        },
        methods:{
            toggleColorMode(){
                if (this.darkMode)
                    this.$parent.$root.darkMode = true
                else
                    this.$parent.$root.darkMode = false
            }
        },
    }
</script>

<style lang="scss" scoped>
    .navigation{
        max-height: 100%;
        ul{
            display: flex;
            flex-direction: column;
            li{
                &.title{
                    text-transform: uppercase;
                    padding-left: 10px;
                    margin-top: 10px;
                    &:first-child{
                        margin-top: 0;
                    }
                }
            }
        }
        .is-minimized{
            width: 40px;
            float: left;
            li.title{
                display: none;
            }
        }
    }
</style>
