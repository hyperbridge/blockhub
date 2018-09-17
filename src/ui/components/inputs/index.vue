<script>
    export default {
        name: 'c-input',
        props: [
            'value',
            'placeholder',
            'type'
        ],
        render(h) {
            return h('input', {
                staticClass: 'c-input',
                on: { input: e => this.$emit('input', e.target.value) },
                attrs: {
                    placeholder: this.placeholder ? this.placeholder : '',
                    type: this.type ? this.type : 'text'
                }
            });
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
