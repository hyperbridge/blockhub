<template>
    <div
        class="progress-bar"
        role="progressbar"
        :style="{ width: progress + '%' }"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
    >{{ show_text && progress > 8 ? progress : '' }}</div>
</template>

<script>
export default {
    name: 'progress-bar',
    props: {
        percentages: [String, Number],
        values: Object,
        show_text: Boolean
    },
    computed: {
        progress() {
            const { values } = this;
            return values ? values.reached / values.goal * 100 : this.percentages;
        }
    }
}
</script>

<style lang="scss" scoped>
    .progress-bar {
        height: 7px;
        border-radius: 4px;
        background: #2abaf3;
        background: -moz-linear-gradient(left, #2abaf3 0%, #63ec48 100%);
        background: -webkit-linear-gradient(left, #2abaf3 0%, #63ec48 100%);
        background: linear-gradient(to right, #2abaf3 0%, #63ec48 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#2abaf3', endColorstr='#63ec48', GradientType=1);
        font-size: 13px;
        text-shadow: 0px 0px 4px #000;
    }
</style>
