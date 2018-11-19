<template>
    <c-business-layout>
        <div class="container-fluid">

            <div class="row">
                <div class="col-12">
                    <c-button status="outline-success" size="lg" :shadow="false" icon_hide>
                        Releases
                    </c-button>
                    <c-button status="outline-info" size="lg" class="margin-left-10" :shadow="false" icon_hide>
                        Tags
                    </c-button>
                </div>
                <div class="col-12">
                    <div class="history-list">
                        <div class="history-list__item">
                            <div class="history-list__item-date">
                        <span>
                            10 days ago
                        </span>
                                <span>
                            v.0.7.1
                        </span>
                            </div>
                            <div class="history-list__item-info">
                                <div class="h3">
                                    v.0.7.1
                                </div>
                                <div>
                                    Josh Doel released this this version 5 days ago
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </c-business-layout>
</template>

<script>
    export default {
        components: {
            'c-business-layout': (resolve) => require(['@/ui/layouts/business'], resolve)
        },
        data() {
            return {
                loadingState: true,
                breadcrumbLinks: [
                    { to: { path: '/business' }, title: 'Dashboard' },
                    { to: { path: '/business/release-history/' }, title: 'Release history' }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .history-list {
        display: flex;
        flex-direction: column;
        margin: 30px 0;
        border-top: 1px solid #d4d4d4;
    }

    .history-list__item {
        display: flex;
        align-items: stretch;
        flex-wrap: nowrap;
    }

    .history-list__item-date {
        display: flex;
        flex-direction: column;
        text-align: right;
        padding: 20px 20px 20px 0;
        margin-right: 20px;
        width: 150px;
        font-size: 14px;
        border-right: 2px solid #d4d4d4;
    }

    .history-list__item-info {
        padding: 20px 0;
    }
</style>
