<script>
export default {
    props: ['src'],
    data() {
        return {
            blank: '/img/no_img.jpg',
            loader: '/img/loader.gif',
            error: false,
            loaded: false
        }
    },
    computed: {
        dynamicSrc() {
            return !this.src || this.error ? this.loaded ? this.blank : this.loader : this.src
        },
        listeners() {
            return {
                ...this.$listeners,
                error: () => {
                    if (!this.error) this.error = true
                },
                load: () => this.loaded = true
            }
        }
    },
    render(h) {
        return h('img', {
            on: this.listeners,
            attrs: {
                src: this.dynamicSrc
            }
        })
    }
}
</script>
