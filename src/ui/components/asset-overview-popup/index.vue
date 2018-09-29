<template>
    <div class="asset-overview-popup">
        <div class="asset-overview-popup__head">
            <div class="link">
                <i class="fas fa-link"></i>
            </div>
            <div class="img">
                <c-img src="https://via.placeholder.com/250x250" />
            </div>
            <div class="info">
                <h4>Sword of Pain</h4>
                <h6>Diablo III</h6>
                <div class="description">
                    <h6>1512 GOV</h6>
                    <p>Based on 7461 other transactions</p>
                    <p>Lowest: 32 GOV Highest: 7850 GOV</p>
                </div>
            </div>
        </div>
        <div class="asset-overview-popup__action">
            <div class="button-line d-flex w-100 justify-content-between">
                <c-button variant="danger"
                          icon_position="left"
                          icon="fas fa-trash-alt"
                ></c-button>
                <div class="text-right">
                    <c-button variant="info"
                              icon_position="right"
                              text="Send"
                              icon="fas fa-share"
                    ></c-button>
                    <c-button variant="success"
                              icon_position="right"
                              text="Use"
                              icon="fas fa-chevron-down"
                    ></c-button>
                </div>

            </div>
            <div class="w-100 py-4">
                <c-switch label="Accept offers for this item?" label_size="18px" size="sm" label_position="left" />
            </div>
        </div>
        <div class="asset-overview-popup__info-list">
            <div class="metadata">
                <c-heading-bar name="Game Metadata" :showArrows="false" :showBackground="false">
                </c-heading-bar>
                <div class="metadata__table">
                    <div class="item-row"
                         v-for="(item, index) in asset.metadata"
                         :key="index">
                        <div class="item-label">
                            <i class="fas fa-file"></i>
                            {{ item.label }}
                        </div>
                        <div class="item-description">
                            {{ item.text }}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import Buttons from '../buttons/index';
    import Switch from '../switch/index';
    import HeadingBar from '../heading-bar/index';

    export default {
        props: ['asset'],
        components:{
            'c-button': Buttons,
            'c-switch': Switch,
            'c-heading-bar': HeadingBar
        },
    }
</script>

<style lang="scss">
    .asset-overview-popup{
        width: 550px;
        padding: 20px;
        border-radius: 5px;
        background: rgba(0, 0, 0, .24);
        box-shadow: 0 0 15px rgba(0, 0, 0, .6);
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
