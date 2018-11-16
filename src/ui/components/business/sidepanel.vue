<template>
    <div class="navigation">
        <ul>
            <li class="title">Main</li>
            <li class="openable" @click="isActive = !isActive" :class="{ open: isActive }">
                <a href="#" class="no-icon">
                    <span class="icon li-home"></span>
                    <span class="text">Marketplace</span>
                </a>
                <ul>
                    <li>
                        <a href="#/business/product/new" class="no-icon">
                            <span class="text">New Product</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="title">Funding</li>
            <li class="openable">
                <a href="#">
                    <span class="icon li-document"></span>
                    <span class="text">Funding</span>
                </a>
                <ul>
                    <li class="openable" @click="isActive = !isActive" :class="{ open: isActive }">
                        <a href="#" class="no-icon">
                            <span class="text">Crowdfunds</span>
                        </a>
                        <ul>
                            <li>
                                <a href="#/business/project/new" class="no-icon">
                                    <span class="text">New Crowdfund</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'business-sidebar',
        components:{
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
        ul{
            display: flex;
            flex-direction: column;
            li{
                a{
                    height: 40px;
                    padding: 0 10px;
                    display: flex;
                    align-items: center;
                }
                &:before{
                    font-family: 'Font Awesome 5 Free';
                }
                ul{
                    li{
                        a{
                            &.no-icon {
                                padding-left: 40px;
                                &:after{
                                    background: rgba(0, 0, 0, .4);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
