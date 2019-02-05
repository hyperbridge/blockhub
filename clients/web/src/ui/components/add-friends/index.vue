<template>
    <div class="add-friends">
        <div class="add-friends__nav">
            <div>
                Blizzard
            </div>
            <div class="active">
                Facebook
            </div>
        </div>
        <div class="add-friends__content">
            <template>
                <div class="h5 text-white font-weight-bold text-center w-100">
                    Your permission is needed to add friends from Facebook.
                </div>
                <div class="icons-block margin-top-40 margin-bottom-40">
                    <div>
                        <i class="fas fa-key"></i>
                    </div>
                    <div>
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 455.73 455.73" fill="#fff" style="enable-background:new 0 0 455.73 455.73; background: #fff" xml:space="preserve">
<path style="fill:#3A559F;" d="M0,0v455.73h242.704V279.691h-59.33v-71.864h59.33v-60.353c0-43.893,35.582-79.475,79.475-79.475
	h62.025v64.622h-44.382c-13.947,0-25.254,11.307-25.254,25.254v49.953h68.521l-9.47,71.864h-59.051V455.73H455.73V0H0z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
                    </div>
                </div>
                <div class="text-center margin-bottom-30">
                    You will need to update your permission so we can find your Facebook
                    friends who play Blizzard games.
                </div>
                <div class="text-center">
                    <c-button status="second-info" size="md">
                        Update Permission
                    </c-button>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    .add-friends__nav {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        div {
            text-align: center;
            color: #fff;
            font-weight: bold;
            width: 50%;
            padding: 10px 0;
            &.active {
                background: rgba(0, 0, 0, .3);
                border-radius: 5px 5px 0 0;
            }
            &:not(.active):hover {
                cursor: pointer;
                background: rgba(0, 0, 0, .15);
            }
        }
    }

    .add-friends__content {
        padding: 40px;
        background: rgba(0, 0, 0, .3);
        color: #fff;
    }

    .icons-block {
        display: flex;
        align-items: center;
        justify-content: center;
        div {
            margin: 0 25px;
            i {
                font-size: 52px;
                color: #fff;
            }
            img,
            svg{
                width: auto;
                height: 50px;
            }
        }
    }
</style>
