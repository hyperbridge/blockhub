<template>
    <ul>
        <li v-for="(value, prop) in list" :key="prop">
            <span>{{ prop }}</span> -
            <span>{{ subListLength(value) }}</span>
            <slot
                :listLength="subListLength(value)"
                :title="prop"
                :item="value"
            >
                <!-- {{ value }} -->
                <list-submenu-v2
                    v-if="value instanceof Object && !Array.isArray(value)"
                    v-for="(value, prop) in value"
                    :key="prop"
                    :list="value"
                />
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
