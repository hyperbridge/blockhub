<script>
function isVisible(availableFlags, userFlags, code, variant, data) {
    return availableFlags.map(flag => flag.code).includes(code) && userFlags.map(flag => flag.enabled ? flag.code : null).includes(code)
}

export default {
    name: 'Darklaunch',
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
            type: [Object, String]
        },
        tag: {
            type: String,
            default: 'div'
        }
    },
    data() {
        return {
            isVisible: isVisible(this.$store.state.application.darklaunchFlags, this.$store.state.application.account.darklaunchFlags, this.code, this.variant, this.data)
        }
    },
    methods: {
        _isVisible(code, variant, data) {
            return isVisible(this.$store.state.application.darklaunchFlags, this.$store.state.application.account.darklaunchFlags, code, variant, data)
        }
    },
    render(createElement) {
        if (this.isVisible) {
            return createElement(this.tag, {
                'darklaunch': this.code
            }, this.$slots.default)
        }
    }
}
</script>

<style scoped>
</style>
