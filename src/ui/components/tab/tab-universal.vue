<template>
    <transition name="tab-universal">
        <div v-show="tab_id == tab_data.active_tab">
            <slot/>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'tab-universal',
    props: {
        tab_id: {
            type: [Number, String],
            required: true
        }
    },
    inject: ['tab_data']
}
</script>


