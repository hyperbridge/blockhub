<template>
    <c-layout navigationKey="account">
        <div class="row">
            <div class="col-12">
                <c-block title="Thanks for your order!">
                    <div class="order-info">
                        <div class="order-info__number">
                            Order #23543422234234234
                        </div>
                    </div>
                </c-block>
            </div>
        </div>
    </c-layout>
</template>

<style lang="scss" scoped>
    .order-info{
        display: flex;
        align-items: center;
    }
    .order-info__number{
        padding-right: 20px;
        padding-left: 20px;
        border-right: 1px solid rgba(255, 255, 255, .2);
    }
</style>
