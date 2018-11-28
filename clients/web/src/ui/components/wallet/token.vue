<template>
    <div class="token-search">
        <c-tabs>
            <c-tab name="Search" :selected="true">
            </c-tab>
            <c-tab name="Add custom">
            </c-tab>
        </c-tabs>
    </div>
</template>

<script>
    export default {
        components:{
            'c-tabs' : (resolve) => require(['@/ui/components/tab/tabs'], resolve),
            'c-tab' : (resolve) => require(['@/ui/components/tab/tab'], resolve),
        }
    }
</script>
