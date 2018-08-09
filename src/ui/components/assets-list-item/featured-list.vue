<template>
    <div class="featured-assets__list">
        <div class="featured-assets__list-item">
            <div class="img">
                <img src="https://vignette.wikia.nocookie.net/elderscrolls2/images/0/07/Lederr%C3%BCstung2.png/revision/latest?cb=20131219143228&path-prefix=de" />
            </div>
            <h3>Magic Plate Armor</h3>
            <p>Tibia MMORPG</p>
        </div>
        <div class="featured-assets__list-item">
            <div class="img">
                <img src="https://vignette.wikia.nocookie.net/elderscrolls2/images/0/07/Lederr%C3%BCstung2.png/revision/latest?cb=20131219143228&path-prefix=de" />
            </div>
            <h3>Magic Plate Armor</h3>
            <p>Tibia MMORPG</p>
        </div>
        <div class="featured-assets__list-item">
            <div class="img">
                <img src="https://vignette.wikia.nocookie.net/elderscrolls2/images/0/07/Lederr%C3%BCstung2.png/revision/latest?cb=20131219143228&path-prefix=de" />
            </div>
            <h3>Magic Plate Armor</h3>
            <p>Tibia MMORPG</p>
        </div>
        <div class="featured-assets__list-item">
            <div class="img">
                <img src="https://vignette.wikia.nocookie.net/elderscrolls2/images/0/07/Lederr%C3%BCstung2.png/revision/latest?cb=20131219143228&path-prefix=de" />
            </div>
            <h3>Magic Plate Armor</h3>
            <p>Tibia MMORPG</p>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    .featured-assets__list{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .featured-assets__list-item{
        display: inline-block;
        padding: 25px;
        width: 22%;
        border-radius: 5px;
        background: #27283E;
        text-align: center;
        color: #C6C6D6;
        margin-top: 2%;
        .img{
            position: relative;
            margin-bottom: 20px;
            padding-bottom: 30px;
            display: inline-block;
            width: 100%;
            max-width: 160px;
            img{
                width: 100%;
            }
            &:after{
                position: absolute;
                bottom: 10px;
                width: 80%;
                left: 10%;
                content: "";
                height: 3px;
                background: rgba(0, 0, 0, .2);
                border-radius: 100%;
                box-shadow: 0 0 20px rgba(0, 0, 0, .9);
            }
        }
        h3{
            font-weight: bold;
            font-size: 18px;
            color: #C6C6D6;
            padding: 0px;
            margin: 0px;
        }
        p{
            margin: 0;
        }
    }
</style>
