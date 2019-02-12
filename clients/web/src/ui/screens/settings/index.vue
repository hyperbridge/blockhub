<template>
    <c-layout navigationKey="settings">
        <c-settings />
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-settings' : (resolve) => require(['@/ui/components/settings'], resolve),
        }
    }
</script>
