<script>
export default {
    name: 'c-img',
    props: {
        src: String,
        alt: String
    },
    data() {
        return {
            blank: '/static/img/no_img.jpg',
            loader: '/static/img/loader.gif',
            error: false,
            loaded: false
        }
    },
    render(h) {
        return h('img', {
            on: {
                error: () => {
                    if (!this.error) this.error = true;
                },
                load: () => this.loaded = true
            },
            attrs: {
                src: this.dynamicSrc,
                alt: this.alt,
            }
        });
    },
    computed: {
        dynamicSrc() {
            return !this.src || this.error ? (this.loaded ? this.blank : this.loader) : this.src;
        }
    }
}
</script>
