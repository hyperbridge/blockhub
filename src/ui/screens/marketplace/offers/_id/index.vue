<template>
    <div>
        <div v-if="asset" class="asset__wrapper">
            <h1 class="asset__name">{{ asset.name }}</h1>

            <!-- <canvas ref="canv" width="400" height="400" class="canv-bord"/> -->
            <c-line-chart/>

            <div>
                <c-img :src="asset.image"/>
            </div>



        </div>
        <p v-else>Asset with id {{ id }} doesn't exist</p>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        data() {
            return {
                ctx: null,
                cw: 0,
                ch: 0,
                priceHistory: [
                    1,
                    300,
                    10,
                    20
                ]
            }
        },
        components: {
            'c-line-chart': (resolve) => require(['@/ui/components/charts/line'], resolve),
        },
        methods: {
            draw() {
                requestAnimationFrame(this.draw);
                const { ctx, cw, ch, priceHistory: data, diffs } = this;
                const dataLength = data.length;
                const lineWidth = cw / dataLength;

                ctx.lineCap = 'round';
                ctx.lineJoin = 'round'

                let xPos = 0;
                let yPos = 0;

                let prevY = 400;

                for (let value of diffs) {

                    yPos = ch - (ch * value / 100);
                    ctx.beginPath();
                    ctx.moveTo(xPos, prevY);

                    xPos += lineWidth;

                    ctx.lineTo(xPos, yPos);
                    ctx.stroke();

                    prevY = yPos;
                }

                ctx.strokeStyle = '#2ECB71';
            }
        },
        mounted() {
            const canvas = this.$refs.canv
            this.ctx = canvas.getContext('2d');
            this.cw = canvas.width;
            this.ch = canvas.height;
            // this.draw();
        },
        computed: {
            asset() {
                return this.$store.getters['assets/assets'][this.id];
            },
            diffs() {
                const data = this.priceHistory.sort();
                const min = data[0];
                const max = data[data.length - 1];

                return data.map((value, index) => value / max * 100);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .asset__wrapper {
        position: relative;
    }
    .asset__name {
        font-size: 110px !important;
        z-index: -1;
        opacity: .15;
        position: absolute;
        color: #000;
        // display: block;
        white-space: nowrap;
    }
    .canv-bord {
        border: 1px solid #fff;
    }
</style>
