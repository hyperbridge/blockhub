<template>
    <div>
        <div ref="qart" />
    </div>
</template>

<script>
import QArt from 'qartjs'
export default {
    name: 'VueQart',
    props: {
        config: {
            type: Object
        },
        download: {
            type: Object,
            default() {
                return {
                    visible: false
                }
            }
        }
    },
    data() {
        return {}
    },
    watch: {
        'config.value'(val, oldVal) {
            this.config.value = val
            this.renderQrcode(this.config)
        }
    },
    mounted() {
        this.renderQrcode(this.config)
    },
    methods: {
        renderQrcode(config) {
            this.qart = new QArt(config)
            this.qart.make(this.$refs.qart)
            // this.$refs.qart.appendChild(this.qart.make())
        },
        convertToImage(e) {
            const { type = 'image/png', filename = 'download.png' } = this.download
            const myCanvas = this.$refs.qart.children[0]
            e.target.href = myCanvas.toDataURL(type)
            e.target.download = filename
        }
    }
}
</script>
