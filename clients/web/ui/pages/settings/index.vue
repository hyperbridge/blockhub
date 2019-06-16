<template>
    <c-layout navigationKey="settings">
        <c-settings />
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-settings': () => import('~/components/settings').then(m => m.default || m)
    }
}
</script>
