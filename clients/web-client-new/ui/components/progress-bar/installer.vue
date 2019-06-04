<template>
    <div class="installer-bar">
        <div
            class="installer-bar__progress"
            :style="`width: ${progress}%`">
            {{ progress }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        progress: {
            type: [Number, String],
            default: 0
        }
    }
}
</script>

<style lang="scss" scoped>
    .installer-bar {
        border-radius: 5px;
        background: rgb(26, 47, 71);
        padding: 2px;
    }
    .installer-bar__progress {
        border-radius: 5px;
        background: linear-gradient(to right, #2CBBFF, #3CFAFF);
        // background: linear-gradient(to right, rgb(42, 173, 233), #3CFAFF);
        // background: linear-gradient(to right, #FFA5C2, #FF68F9);
        position: relative;
        border: 1px solid rgba(255,255,255,.15);
        transition: width .2s ease;
        &:after {
            position: absolute;
            height: 100%;
            width: 150px;
            max-width: 90%;
            border-radius: 50% 5px 5px 50%;
            content: "";
            right: 0;
            box-shadow: 0 0 23px -1px #3CFAFF;
            animation: glow 3s ease infinite;
            @keyframes glow {
                0% {
                    opacity: 1;
                }
                25% {
                    opacity: .7;
                }
                50% {
                    opacity: .9;
                }
                75% {
                    opacity: .4;
                }
                100% {
                    opacity: 1;
                }
            }
        }
    }
</style>

