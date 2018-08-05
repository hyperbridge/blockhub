<template>
    <div class="assets-list__item">
        <div class="thumb">
            <img src="https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png" />
        </div>
        <div class="info">
            <h5>Magic Plate Armor</h5>
            <span class="float-left price">
                                    <i class="fas fa-dollar-sign"></i>
                                    1.99
                                </span>
            <span class="float-right box">
                                    <i class="fas fa-box"></i>
                                    350. 000
                                </span>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    .assets-list__item{
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.07);
        background: #1C2032;
        padding: 10px;
        width: 100%;
        box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
        display: flex;
        justify-content: space-between;
        align-items: center;
        .thumb{
            display: inline-block;
            float: left;
            width: 25%;
            img{
                width: 100%;
                height: auto;
            }
        }
        .info{
            display: inline-block;
            width: 70%;
            float: right;
            span{
                i{
                    margin-right: 5px;
                }
            }
        }
    }
</style>
