<template>
    <div class="pledge-item">
        <h3>Pledge US ${{ price }} or more</h3>
        <h4>{{ name }}</h4>
        <div class="pledge-item__text">
            <!--<slot name="text" />-->
            Choose ONE Drabblecast "Best of" Audio Anthology:
            "Best of Horror," "Best of Fantasy," "Best of Science Fiction,"
            each with new and original intro commentary by Norm.
        </div>
        <div class="pledge-item__includes">
            <h6>Includes</h6>
            <ul>
                <li class="list-disc">
                    Drabblecast Glow in the Dark Pin
                </li>
                <li>
                    (3) Audio Anthologies: Horror, Science Fiction AND Fantasy
                </li>
                <li>
                    Original Lovecraft mythos audio story by Frank Key
                </li>
                <li>
                    Digital Hugs, Name on Website
                </li>
            </ul>
            <!--<slot name="includes" />-->
        </div>
        <div class="pledge-item__info">
            <div v-if="estimated_delivery">
                <span class="h6">Estimated delivery</span>
                {{ estimated_delivery }}
            </div>
            <div v-if="ships_to">
                <span class="h6">Ships to</span>
                {{ ships_to }}
            </div>
            <div class="w-100 mt-5" v-if="backers">
                <span class="h6">
                    {{ backers }} backers
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        props: [],
        data(){
            return{
                price: '10',
                name: 'BLUE-HAIRED CATS',
                estimated_delivery: '12/01/2018',
                ships_to: 'Anywhere in the world',
                backers: 43
            }
        }
    }
</script>

<style lang="scss" scoped>
    .pledge-item{
        padding: 15px;
        border-radius: 5px;
        position: relative;
        color: #fff;
        background: rgba(0, 0, 0, .13);
        h3, h4{
            font-size: 24px;
            text-transform: uppercase;
            color: #fff;
            padding: 0;
            margin-bottom: 25px;
        }
        h4{
            font-size: 16px;
            margin: 5px 0;
        }
    }
    .pledge-item__text{
        font-size: 14px;
        margin: 15px 0;
    }
    .pledge-item__includes{
        font-size: 14px;
        margin: 30px 0;
        h6{
            font-size: 14px;
            text-transform: uppercase;
            color: #fff;
            font-weight: bold;
        }
        ul{
            padding: 0;
            li{
                display: block;
                width: 100%;
                margin: 10px 0;
                position: relative;
                padding-left: 20px;
                &:before{
                    width: 5px;
                    height: 5px;
                    border-radius: 100%;
                    background: #fff;
                    position: absolute;
                    top: 8px;
                    left: 5px;
                    content: "";
                }
            }
        }
    }
    .pledge-item__info{
        display: flex;
        justify-content: space-between;
        text-align: left;
        flex-wrap: wrap;
        width: 100%;
        .h6{
            font-size: 14px;
            text-transform: uppercase;
            color: #fff;
            font-weight: bold;
            display: block;
        }
        div{
            width: 48%;
        }
    }
</style>
