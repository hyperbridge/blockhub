<script>
export default {
    name: 'InputSearcher',
    inheritAttrs: false,
    props: ['value', 'bgColor', 'textColor'],
    computed: {
        listeners() {
            const listeners = {
                ...this.$listeners,
                input: e => this.$emit('input', e.target.value)
            }
            delete listeners.click
            return listeners
        }
    },
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
                },
                style: {
                    'background': this.bgColor,
                    'color': this.textColor
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
            background: #222235;
            border-radius: 3px;
            padding: 0 25px 0 10px;
            height: 33px;
            width: 100%;
            border: unset;
            color: #fff;
            &:focus{
                outline: none;
                box-shadow: none;
            }
            &::placeholder{
                color: rgba(255, 255, 255, .7);
            }
        }
        .input-searcher__icon {
            position: absolute;
            right: 0px;
            top: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 7px 9px;
            cursor: pointer;
        }
    }
</style>
