<script>
export default {
    name: 'input-searcher',
    inheritAttrs: false,
    props: ['value'],
    render(h) {
        return h('div', {
            staticClass: 'input-searcher'
        }, [
            h('c-input', {
                on: this.$listeners,
                props: this.$props,
                attrs: this.$attrs
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
        display: flex;
        align-items: center;
        .c-input {
            padding-right: 25px;
            width: 100%;
        }
        .input-searcher__icon {
            position: absolute;
            right: 8px;
            top: calc(50% - 6.5px);
        }
    }
</style>
