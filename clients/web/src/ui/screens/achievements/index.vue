<template>
    <c-layout>
        <div class="row">
            <div class="col-12 margin-top-10">
                <div>
                    Total achievements: {{ achievements.length }}
                </div>
                <div>
                    Your achievement progress: 0/{{ achievements.length }}  (0%)
                </div>
            </div>
            <div class="col-12 margin-top-30">
                <div class="achievements-item" v-for="item in achievements">
                    <div class="achievements-item__img margin-right-10" v-if="item.img">
                        <img :src="item.img"/>
                    </div>
                    <div class="achievements-item__info">
                        <div class="achievements-item__info-progress" :style="`width: ${item.percent}%`"></div>
                        <div class="achievements-item__info-text">
                            <div class="h4 pb-0 mb-0">
                                {{ item.title }}
                            </div>
                            <div>
                                {{ item.description }}
                            </div>
                        </div>
                        <div class="achievements-item__info-percent" v-if="item.percent && !item.unlocked && !item.completed">
                            {{ item.percent }}%
                        </div>
                        <div class="achievements-item__info-status text-right" v-if="item.unlocked || item.completed">
                            <div class="h5 pb-0 mb-0" style="color: #00aeff" v-if="item.unlocked">
                                Unlocked
                            </div>
                            <div class="h5 pb-0 mb-0" style="color: #1bb934" v-if="item.completed">
                                <i class="fas fa-check mr-2"></i> Completed
                            </div>
                            <div>
                                April 22, 2018
                            </div>
                        </div>
                    </div>
                    <div class="achievements-item__img margin-left-10" v-if="item.img">
                        <img :src="item.img"/>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        data(){
            return{
                achievements:[
                    {
                        img: 'https://blog.captainup.com/wp-content/uploads/2014/12/Start-a-game_4.png',
                        percent: '16',
                        title: 'Ring the Till',
                        description: 'Have a credit balance +1000',
                        completed: false,
                        unlocked: true
                    },
                    {
                        img: 'https://png.pngtree.com/element_origin_min_pic/17/04/12/c5490bc7210a7eb88f22804682570e9b.jpg',
                        percent: '22',
                        title: 'Closing the Circuit',
                        description: 'Produce +1000 energy in a single sector',
                        completed: false,
                        unlocked: false
                    },
                    {
                        img: 'https://blog.captainup.com/wp-content/uploads/2014/12/Start-a-game_4.png',
                        percent: '16',
                        title: 'Ring the Till',
                        description: 'Have a credit balance +1000',
                        completed: true,
                        unlocked: false
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .achievements-item{
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
    }
    .achievements-item__img{
        flex: 0 0 65px;
        height: 65px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            max-width: 100%;
            max-height: 100%;
        }
        &:last-child{
            img{
                filter: grayscale(100%);
            }
        }
    }
    .achievements-item__info{
        position: relative;
        padding: 10px;
        border: 1px solid #0194ef;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .achievements-item__info-progress{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        display: block;
        background: rgba(1,148,239,.2);
        z-index: 3;
    }
    .achievements-item__info-text{
        position: relative;
        z-index: 5;
    }
    .achievements-item__info-percent{
        position: relative;
        z-index: 5;
        font-size: 16px;
        margin-right: 10px;
    }
</style>
