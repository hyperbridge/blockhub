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
                default: 'fas'
            }
        },
        render(h) {
            return h('i', {
                class: `${this.cat} fa-${this.name}`,
                on: { click: () => this.$emit('click') }
            });
        }
    }
</script>
