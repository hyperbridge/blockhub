<template>
    <c-layout navigationKey="product-navigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <c-block title="Collections">

                        </c-block>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-layout': () => import('@/ui/layouts/default'),
            'c-content-navigation': () => import('@/ui/components/content-navigation'),
            'c-block': () => import('@/ui/components/block'),
            'c-collection-item': () => import('@/ui/components/collection'),
        },
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>
    .page_ttl {
        font-size: 30px;
        margin-bottom: 30px;
    }
    .licenses-list{
        border-radius: 5px;
        overflow: hidden;
        padding: 10px 20px 0;
        background: rgba(0, 0, 0, .15);
    }
    .licenses-list__item{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        padding: 10px 0;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        line-height: 17px;
        &:last-child{
            border-bottom: 0;
            margin-bottom: 10px;
        }
        .icon{
            width: 40px;
            margin-right: 10px;
            img{
                width: 100%;
                height: 40px;
                object-fit: cover;
            }
        }
        .name{
            width: 25%;
        }
        .expires_date,
        .sell_status,
        .trade_status{
            width: 18%;
        }
        .price{
            width: 13%;
        }
        strong{
            display: block;
            width: 100%;
        }
    }
</style>
