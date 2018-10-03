<script>
function isVisible(availableFlags, userFlags, code, variant, data) {
    return availableFlags.map(flag => flag.code).includes(code) && userFlags.map(flag => flag.enabled ? flag.code : null).includes(code)
}

export default {
    props: {
        code: {
            type: String
        },
        variant: {
            type: String
        },
        data: {
            type: [Object, String]
        },
        tag: { 
            type:String,
            default:'div'
        }
    },
    name: 'darklaunch',
    data() {
        return {
            isVisible: isVisible(this.$store.state.application.darklaunch_flags, this.$store.state.application.account.darklaunch_flags, this.code, this.variant, this.data)
        }
    },
    render: function (createElement) {
        if (this.isVisible) {
            return createElement(this.tag, {
                'darklaunch': this.code
            }, this.$slots.default)
        }
    },
    methods: {
        _isVisible: function(code, variant, data) {
            return isVisible(this.$store.state.application.darklaunch_flags, this.$store.state.application.account.darklaunch_flags, code, variant, data)
        }
    }
}
</script>

<style scoped>
</style>