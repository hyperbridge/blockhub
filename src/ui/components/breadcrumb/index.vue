<template>
<div class="page-heading invert">
    <ol class="breadcrumb">
        <li v-for="(link, index) in links" class="breadcrumb-item" :class="{ 'active': index == links.length-1 }" :key="index">
            <router-link :to="link.to.path">{{ link.title }}</router-link>
        </li>
    </ol>
</div>
</template>

<script>
export default {
    props: {
        links: Array
    }
}
</script>
