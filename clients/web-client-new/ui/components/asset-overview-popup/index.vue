<template>
    <div class="asset-overview-popup">
        <div class="asset-overview-popup__head">
            <div class="link">
                <c-icon name="link"/>
            </div>
            <div class="img">
                <c-img :src="asset.image"/>
            </div>
            <div class="info">
                <h4>{{ asset.name }}</h4>
                <h6>{{ asset.productName }}</h6>
                <div class="description">
                    <h6>{{ asset.price['current'] | convertCurrency }}</h6>
                    <p>Based on 7461 other transactions</p>
                    <p >Lowest: {{ asset.price['min'] | convertCurrency }} Highest: {{ asset.price['max'] | convertCurrency }}</p>
                </div>
            </div>
        </div>
        <div class="asset-overview-popup__action">
            <div class="button-line d-flex w-100 justify-content-between">
                <c-button status="danger" iconHide>
                    <c-icon name="trash-alt"/>
                </c-button>
                <div class="text-right">
                    <c-button status="share">
                        Send
                    </c-button>
                    <c-button status="success">
                        Use
                    </c-button>
                </div>
            </div>
            <div class="w-100 py-4">
                <c-switch
                    label="Accept offers for this item?"
                    :checked="asset.acceptOffers"
                    label_size="18px"
                    size="sm"
                    label_position="left"
                    @change="$store.commit('assets/negateValue', { id: asset.id, iprop: 'acceptOffers' })"
                />
            </div>
        </div>
        <div class="asset-overview-popup__info-list">
            <div class="metadata">
                <c-heading-bar name="Game Metadata" :showArrows="false" :showBackground="false"/>
                <div class="metadata__table padding-bottom-10">
                    <div
                        v-for="(value, prop, index) in asset.metadata"
                        :key="index"
                        class="item-row"
                    >
                        <div class="item-label">
                            <i class="fas fa-file"></i>
                            {{ prop | space | upperFirstChar }}
                        </div>
                        <div class="item-description">
                            <ul v-if="typeof value === 'object'" class="margin-0">
                                <li v-for="(value, prop, index) in value" :key="index">
                                    {{ prop | space | upperFirstChar }}: {{ value }}
                                </li>
                            </ul>
                            <span v-else>
                                {{ value }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'asset-overview-popup',
        props: {
            asset: {
                type: Object
            }
        },
        components:{
            'c-heading-bar': (resolve) => require(['@/components/heading-bar'], resolve),
        }
    }
</script>

<style lang="scss" scoped>
    .asset-overview-popup{
        width: 550px;
        padding: 20px;
        border-radius: 5px;
        background: #3e3e5c;
        box-shadow: 0 0 15px rgba(0, 0, 0, .6);
        text-align: left;
    }
    .asset-overview-popup__head{
        display: flex;
        width: 100%;
        justify-content: space-between;
        color: #fff;
        position: relative;
        .link{
            position: absolute;
            top: 0;
            right: 0;
            font-size: 16px;
            color: #fff;
            opacity: .6;
            &:hover{
                cursor: pointer;
                opacity: 1;
            }
        }
        .img{
            width: 30%;
            img{
                width: 100%;
                border-radius: 5px;
            }
        }
        .info{
            width: calc( 70% - 20px );
            display: flex;
            flex-direction: column;
            padding: 5px 0;
            h4,h6{
                color: #fff;
            }
            h4{
                font-size: 22px;
                font-weight: bold;
            }
            h6{
                font-size: 17px;
            }
            .description{
                margin-top: auto;
                p{
                    padding: 0;
                    margin: 0;
                    line-height: 18px;
                }
            }
        }
    }
    .asset-overview-popup__action{
        margin-top: 25px;
    }

    .metadata__table{
        padding: 10px;
        background: rgba(0, 0, 0, .13);
        border: 1px solid rgba(70, 70, 70, 0.5);
        border-radius: 5px;
        overflow: hidden;
        .item-row{
            display: inline-block;
            width: 100%;
            float: left;
            margin-bottom: 5px;
            &:last-child{
                margin-bottom: 0;
            }
            .item-label{
                background: #3D3E5D;
                text-transform: uppercase;
                color: #C6C6D6;
                line-height: 16px;
                padding: 3px 4px;
                display: inline-block;
                width: 20%;
                float: left;
                font-weight: bold;
                border-radius: 3px;
                min-width: 160px;
                i{
                    margin-right: 10px;
                    font-size: 15px;
                }
            }
            .item-description{
                line-height: 22px;
                color: #fff;
                display: inline-block;
                float: right;
                text-align: left;
                width: calc( 100% - 160px );
                padding-left: 15px;
                max-width: 80%;
            }
        }
    }
</style>
