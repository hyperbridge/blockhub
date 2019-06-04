<template>
    <textarea class="form-control" />
</template>
<script>
export default {
    props: {
        model: {
            required: true
        },

        height: {
            type: String,
            default: '150'
        }
    },

    mounted() {
        const config = {
            height: this.height
        }

        const vm = this

        config.callbacks = {

            onInit() {
                $(vm.$el).summernote('code', vm.model)
            },

            onChange() {
                vm.$emit('update:model', $(vm.$el).summernote('code'))
                vm.$emit('change', $(vm.$el).summernote('code'))
            },

            onBlur() {
                vm.$emit('update:model', $(vm.$el).summernote('code'))
                vm.$emit('change', $(vm.$el).summernote('code'))
            }
        }

        $(this.$el).summernote(config)
    }
}
</script>
