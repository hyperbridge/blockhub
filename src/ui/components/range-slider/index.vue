<template>
    <div class="range-slider-container">
        <h5>Default</h5>
        <p class="subtitle">Start without params</p>
        <div class="form-group margin-bottom-30">
            <input type="text" id="ise_default" name="ise_default" value="">
        </div>
    </div>
</template>

<script>
    // import $ from '../../../../static/js/vendors/jquery/jquery.min';
    // import '../../../../static/js/vendors/ionrangeslider/ion.rangeSlider.min';

    export default {
        mounted: function () {
            $("#ise_default").ionRangeSlider({
                from: 15
            });
        }
    }
</script>
