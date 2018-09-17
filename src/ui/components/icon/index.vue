<script>
    export default {
        name: 'icon',
        props: {
            name: {
                type: String,
                required: true
            },
            cat: {
                type: String,
                default: 'fa'
            }
        },
        render(h) {
            return h('i', {
                class: `fas ${this.cat}-${this.name}`,
                on: { click: () => this.$emit('click') }
            });
        }
    }
</script>
