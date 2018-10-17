<template>
    <c-layout :showLeftPanel="false" :showRightPanel="false" :slim-mode="true" headerText="BlockHub"></c-layout>
</template>

<script>
export default {
    components: {
        'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
    }
}
</script>