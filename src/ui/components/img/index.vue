<script>
export default {
    name: 'c-img',
    props: {
        src: String,
        alt: String
    },
    data() {
        return {
            blank: 'https://www.golositadelsalento.it/wp-content/uploads/2018/07/No_Image_Available-21-1.jpg',
            source: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'
        }
    },
    render(h) {
        return h('img', {
            on: {
                error: () => this.source = this.blank,
                load: () => this.source = this.src
            },
            attrs: {
                src: this.source,
                alt: this.alt
            }
        });
    }
}
</script>
