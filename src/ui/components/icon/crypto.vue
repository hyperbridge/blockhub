<script>
    export default {
        name: 'crypto-icon',
        props: {
            name: {
                type: String,
                required: true
            },
            cat: {
                type: String,
                default: 'colored'
            },
            size: {
                type: String,
                default: 'sm'
            }
        },
        computed:{
            background(){
                let coin = this.name.toLowerCase();
                return 'background-image: url("/static/crypto_svg/' + coin + '.svg");'
            }
        },
        render(h) {
            return h('i', {
                class: `crypto-icon ${this.cat} ci-${this.name} icon-${this.size}`,
                style: `${this.background}`,
                on: { click: () => this.$emit('click') }
            });
        }
    }
</script>

<style lang="scss" scoped>
    .crypto-icon{
        display: inline-flex;
        align-items: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        &.icon-sm{
            width: 16px;
            height: 16px;
        }
        &.icon-md{
            width: 32px;
            height: 32px;
        }
        &.icon-md{
            width: 64px;
            height: 64px;
        }
    }
</style>
