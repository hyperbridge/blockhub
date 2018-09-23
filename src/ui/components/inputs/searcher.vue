<script>
export default {
    name: 'input-searcher',
    props: ['value', 'placeholder'],
    render(h) {
        return h('div', {
            staticClass: 'input-searcher'
        }, [
            h('c-input', {
                on: { input: e => this.$emit('input', e) },
                props: this.props
            }),
            h('c-icon', {
                staticClass: 'input-searcher__icon',
                props: {
                    name: 'search'
                }
            })
        ])
    }
}
</script>

<style lang="scss" scoped>
    .input-searcher {
        position: relative;
        height: 36px;
        .c-input {
            padding-right: 25px;
        }
        .input-searcher__icon {
            position: absolute;
            right: 8px;
            top: calc(50% - 6.5px);
        }
    }
</style>


