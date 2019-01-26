<template>
    <c-layout :showLeftPanel="false" :showRightPanel="false">
        <div class="row justify-content-center">
            <div class="col-12 py-5 text-center">
                <c-button status="second-info" size="lg">
                    Go to Blog
                </c-button>
            </div>
            <div class="col-12 col-lg-2">
                <c-sidebar-menu sub_title="Tools" mClass="margin-bottom-20">
                    <c-sidebar-menu-link to="/">Bridge</c-sidebar-menu-link>
                    <c-sidebar-menu-link to="/">Mixer</c-sidebar-menu-link>
                    <c-sidebar-menu-link to="/">Suite</c-sidebar-menu-link>
                </c-sidebar-menu>
            </div>
            <div class="col-12 col-lg-2">
                <c-sidebar-menu sub_title="Company" mClass="margin-bottom-20">
                    <c-sidebar-menu-link to="/">Press</c-sidebar-menu-link>
                    <c-sidebar-menu-link to="/">Jobs</c-sidebar-menu-link>
                    <c-sidebar-menu-link to="/">Pricing</c-sidebar-menu-link>
                </c-sidebar-menu>
            </div>
            <div class="col-12 col-lg-2">
                <c-sidebar-menu sub_title="Inspiration & Learning" mClass="margin-bottom-20">
                    <c-sidebar-menu-link to="/">Blog</c-sidebar-menu-link>
                    <c-sidebar-menu-link to="/">Gallery</c-sidebar-menu-link>
                    <c-sidebar-menu-link to="/">Tutorials</c-sidebar-menu-link>
                </c-sidebar-menu>
            </div>
            <div class="col-12 col-lg-2">
                <c-sidebar-menu sub_title="Community & Support" mClass="margin-bottom-20">
                    <c-sidebar-menu-link to="/">Artist Community</c-sidebar-menu-link>
                    <c-sidebar-menu-link to="/">Get Help</c-sidebar-menu-link>
                    <c-sidebar-menu-link to="/">FAQ</c-sidebar-menu-link>
                </c-sidebar-menu>
            </div>
            <div class="col-12 col-lg-4">
                <div class="h5 text-uppercase text-white font-weight-bold p-0 margin-bottom-10 margin-top-10">
                    Connect
                </div>
                <div class="d-flex justify-content-between align-items-stretch mt-3 mb-4">
                    <c-input placeholder="Join our mailing list" />
                    <c-button status="second-info" size="sm" class="ml-3 px-4">
                        Join
                    </c-button>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        components:{
            'c-sidebar-menu-link': (resolve) => require(['@/ui/components/sidebar-menu/menu_item'], resolve),
            'c-sidebar-menu': (resolve) => require(['@/ui/components/sidebar-menu/index'], resolve),
        }
    }
</script>

<style lang="scss" scoped>
</style>
