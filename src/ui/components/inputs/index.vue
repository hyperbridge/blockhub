<script>
    export default {
        name: 'c-input',
        props: ['value'],
        render(h) {
            return h('input', {
                staticClass: 'c-input',
                on: this.listeners,
                attrs: this.$attrs,
                props: this.$props
            });
        },
        computed: {
            listeners() {
                return {
                    ...this.$listeners,
                    input: e => this.$emit('input', e.target.value)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .c-input {
        background: #222235;
        border-radius: 3px;
        padding: 0 10px;
        height: 33px;
    }
</style>
