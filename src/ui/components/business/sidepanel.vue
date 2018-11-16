<template>
    <div class="navigation">
        <c-menu-container>
            <li class="title">Main</li>
            <c-menu-item to="#" icon="home">
                Marketplace
                <template slot="submenu">
                    <c-menu-item to="/business/product/new">
                        New Product
                    </c-menu-item>
                </template>
            </c-menu-item>
            <li class="title">Funding</li>
            <c-menu-item to="#" icon="file-alt">
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
                console.log(this.$parent.$root.darkMode)
                if (this.darkMode)
                    this.$parent.$root.darkMode = true
                else
                    this.$parent.$root.darkMode = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .navigation{
        max-height: 100%;
        overflow-y: auto;
        ul{
            display: flex;
            flex-direction: column;
            li{
                &.title{
                    text-transform: uppercase;
                    padding-left: 10px;
                }
            }
        }
    }
</style>
