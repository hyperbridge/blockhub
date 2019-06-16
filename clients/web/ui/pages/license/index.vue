<template>
    <c-layout navigationKey="store">
        <div class="row">
            <div class="col-12">
                <div class="license-content text-dark">
                    <div class="license-content__header">
                        <div class="h3 p-0 m-0 text-dark">
                            License passed
                        </div>
                        <div>
                            <c-button status="second-success" size="sm">
                                45 dependencies
                            </c-button>
                            <c-button status="second-info" size="sm" class="margin-left-10 margin-right-10">
                                7 licenses
                            </c-button>
                            <c-button status="second-danger" size="sm">
                                11 obligations
                            </c-button>
                        </div>
                    </div>
                    <div class="license-content__body margin-top-30">
                        <div class="row">
                            <div class="col-12 col-lg-8">
                                <div class="h4">
                                    Scan details
                                </div>
                                <ul class="p-0 m-0">
                                    <li class="d-flex justify-content-between py-2 border-bottom">
                                        <span>
                                            Issues found
                                        </span>
                                        <span>
                                            0
                                        </span>
                                    </li>
                                    <li class="d-flex justify-content-between py-2 border-bottom">
                                        <span>
                                            License check performed
                                        </span>
                                        <span>
                                            20
                                        </span>
                                    </li>
                                    <li class="d-flex justify-content-between py-2 border-bottom">
                                        <span>
                                            Dependencies scanned
                                        </span>
                                        <span>
                                            12
                                        </span>
                                    </li>
                                    <li class="d-flex justify-content-between py-2 border-bottom">
                                        <span>
                                            Scan type
                                        </span>
                                        <span>
                                            Limited
                                        </span>
                                    </li>
                                    <li class="d-flex justify-content-between py-2 border-bottom">
                                        <span>
                                            Deepest dependency level
                                        </span>
                                        <span>
                                            3
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-12 col-lg-4">
                                <div class="h4">
                                    Sed a ornare nisl, quis dapibus mi.
                                </div>
                                <p>
                                    Phasellus ligula eros, gravida id metus ac, facilisis scelerisque quam. Vestibulum
                                    ullamcorper, est vitae volutpat viverra, orci dolor eleifend dolor, a facilisis
                                    mauris odio vitae neque.
                                </p>
                                <c-button status="outline-info" size="sm" class="margin-top-5 margin-bottom-20">
                                    View details
                                </c-button>
                                <div class="h4">
                                    Curabitur aliquam viverra nulla
                                </div>
                                <p>
                                    Phasellus tempor nisi sed est consequat blandit. Suspendisse potenti.
                                    Phasellus vitae bibendum nisi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>
<script>
    export default {}
</script>

<style lang="scss" scoped>
    .license-content {
        padding: 20px;
        background: #fff;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, .4);
    }

    .license-content__header {
        padding: 10px 0 30px;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
