<template>
    <div>
        <div v-if="asset" class="asset__wrapper">
            <!-- <h1 class="asset__name">{{ asset.name }}</h1> -->

            <canvas ref="canv" width="400" height="400" class="canv-bord"/>


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
                    10,
                    14.2,
                    13
                ]
            }
        },
        methods: {
            draw() {
                requestAnimationFrame(this.draw);
                const { ctx, cw, ch, priceHistory: data } = this;
                const dataLength = data.length;
                const lineWidth = cw / dataLength;

                // ctx.beginPath();
                // ctx.moveTo(0, ch);
                // ctx.lineTo(300,150);
                // ctx.stroke();

                let xPos = 0;


                for (let value of data) {
                    ctx.beginPath();
                    ctx.moveTo(xPos, ch);

                    xPos += lineWidth;

                    ctx.lineTo(xPos, 150);
                    ctx.stroke();
                }




                ctx.strokeStyle = '#2ECB71';




                // ctx.strokeStyle = '#2ECB71';

                // this.ctx.fillStyle = '#2EC76F';
                // this.ctx.lineWidth = '2';
                // this.ctx.fillRect(0, 0, 123, 312);
            }
        },
        mounted() {
            const canvas = this.$refs.canv
            this.ctx = canvas.getContext('2d');
            this.cw = canvas.width;
            this.ch = canvas.height;
            this.draw();
        },
        computed: {
            asset() {
                return this.$store.getters['assets/assets'][this.id];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .asset__wrapper {
        position: relative;
    }
    .asset__name {
        font-size: 160px !important;
        z-index: -1;
        opacity: .2;
        position: absolute;
        color: #000;
        // display: block;
        white-space: nowrap;
    }
    .canv-bord {
        border: 1px solid #fff;
    }
</style>
