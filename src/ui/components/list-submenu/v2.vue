<template>
    <ul>
        <li v-for="(value, prop) in list" :key="prop">
            <slot
                :listLength="subListLength(value)"
                :title="prop"
                :item="value"
            >
                <span>{{ prop }}</span>
            </slot>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'list-submenu-v2',
        props: ['list'],
        methods: {
            subListLength: val => Array.isArray(val) ? val.length : Object.keys(val).length
        }
    }
</script>

<style>

</style>
