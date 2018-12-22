<script>
    export default {
        name: 'input-searcher',
        inheritAttrs: false,
        props: ['value'],
        render(h) {
            return h('div', {
                staticClass: 'input-searcher'
            }, [
                h('input', {
                    on: this.listeners,
                    staticClass: 'c-input',
                    attrs: this.$attrs,
                    domProps: {
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
                const listeners = {
                    ...this.$listeners,
                    input: e => this.$emit('input', e.target.value)
                };
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
            background: rgba(0, 0, 0, 0.3);
            border-radius: 3px;
            padding: 0 10px;
            height: 33px;

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
