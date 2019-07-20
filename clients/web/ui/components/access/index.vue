<script>
export default {
    props: {
        code: {
            type: String,
            default: null
        },
        variant: {
            type: String,
            default: null
        },
        data: {
            type: Object
        },
        tag: {
            type: String,
            default: 'div'
        }
    },
    data() {
        return {
            isVisible: this.$access(this.code, this.data)
        }
    },
    methods: {
    },
    render(createElement) {
        if (this.isVisible) {
            return createElement(this.tag, {
                'access': this.code
            }, this.$slots.default)
        }
    }
}
</script>

<style scoped>
</style>
