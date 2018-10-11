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
                    on: this.listeners,
                    attrs: {
                        ...this.$attrs,
                        value: this.value
                    },
                    props: {
                        value: this.value
                    }
                }),
                h('c-icon', {
                    staticClass: 'input-searcher__icon',
                    on: { click: () => this.$emit('click') },
                    props: {
                        name: 'search'
                    }
                })
            ])
        },
        computed: {
            listeners() {
                const listeners = { ...this.$listeners };
                delete listeners.click;
                return listeners;
            }
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
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #fff;
            &:focus{
                outline: none;
                box-shadow: none;
            }
        }
        .input-searcher__icon {
            position: absolute;
            right: 0px;
            top: calc(50% - 11px);
            padding: 7px 9px;
            cursor: pointer;
        }
    }
</style>
