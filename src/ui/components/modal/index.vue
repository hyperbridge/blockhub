<template>
    <div class="modal-light" @click.self="$emit('close')">
        <button
            @click="$emit('close')"
            class="modal-light__btn"
        >&times;</button>
        <div class="modal-light__content">
            <slot name="content">
                <div class="content__wrapper">
                    <div class="content__header">
                        <span class="title">{{ title }}</span>
                        <c-icon name="times"/>
                    </div>
                    <div class="content__body">
                        <slot/>
                    </div>
                </div>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'modal-light',
    props: ['title']
}
</script>

<style lang="scss" scoped>
    .modal-light {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1000;
        width: 100vw;
        height: 100vh;
        // background-color: rgba(1,1,1,.9);
        background: rgba(33, 33, 51, 0.9);
        animation: opacity .5s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-light__btn {
        position: absolute;
        right: 30px;
        top: 30px;
        font-size: 30px;
        border-radius: 50%;
        border: 1px solid rgba(255,255,255,.8);
        width: 50px;
        height: 50px;
        color: #fff;
        font-weight: normal;
        background-color: transparent;
        outline: none;
        transition: background-color .2s ease;
        &:hover {
            cursor: pointer;
            border-color: transparent;
            background-color: #ff4757;
        }
    }

    .modal-light__content {
        animation: slide-in .8s ease;
    }

    @keyframes opacity {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes slide-in {
        0% {
            transform: translateY(100vh) scale(0.8);
        }
        60% {
            transform: translateY(-5vh);
        }
        100% {
            transform: translateY(0) scale(1);
        }
    }

    .content__wrapper {
        background: #3E3E5C;
        max-width: 800px;
        border-radius: 4px;
        .content__body {
            padding: 20px;
        }
        .content__header {
            // background: #fff;
            // height: 20px;
            display: flex;
            justify-content: space-between;
            // padding: 5px 10px;
            position: relative;
            .title {
                font-size: 18px;
                font-weight: 400;
                color: #3D3E5D;
                background: #fff;
                border-radius: 4px 0 18px 0;
                padding: 5px 15px;
                position: relative;
                &:after {
                    content: "";
                    position: absolute;
                    border-width: 26px 0 26px 0;
                    border-style: solid;
                    border-color: #fff;
                    left: 100%;
                    top: 10px;
                }
            }
            .fas {
                background: #fff;
                padding: 6px;
                border-radius: 0 4px 0 18px;
                color: #F75D5D;
                font-size: 20px;
                cursor: pointer;
            }
            &:before {
                border-radius: 4px 4px 0 0;
                background: #fff;
                content: "";
                position: absolute;
                height: 8px;
                width: 100%;
            }
        }
    }
</style>

