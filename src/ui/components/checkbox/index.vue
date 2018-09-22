<template>
    <div class="c-checkbox">
        <input
            type="checkbox"
            :id="id"
            :checked="value"
            @change="$emit('input', !value)"
        >
        <label :for="id">
            <slot/>
        </label>
    </div>
</template>

<script>
    export default {
        props: {
            id: {
                type: [String, Number],
                default() {
                    return new Date().getUTCMilliseconds();
                }
            },
            value: Boolean
        }
    }
</script>

<style lang="scss" scoped>
    .c-checkbox{
        display: inline-flex;
        overflow: hidden;
        input[type=checkbox] {
            display: none;
            & + label {
                display: block;
                position: relative;
                padding-left: 25px;
                margin-bottom: 5px;
                font-size: 14px;
                color: #ddd;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;


                &:last-child {
                    margin-bottom: 0;
                }
                &:before {
                    content: '';
                    display: block;
                    width: 15px;
                    height: 15px;
                    border: 1px solid #fff;
                    border-radius: 100%;
                    position: absolute;
                    left: 0;
                    top: 3px;
                    -webkit-transition: all .12s, border-color .08s;
                    transition: all .12s, border-color .08s;
                }
                &:after {
                    content: '';
                    display: block;
                    width: 7px;
                    height: 7px;
                    border-radius: 100%;
                    position: absolute;
                    left: 4px;
                    top: 7px;
                    -webkit-transition: all .12s, border-color .08s;
                    transition: all .12s, border-color .08s;
                }
            }
            &:checked + label{
                &:before {
                    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#d639e4+0,23aee0+100 */
                    background: rgb(214,57,228); /* Old browsers */
                    background: -moz-linear-gradient(top, rgba(214,57,228,1) 0%, rgba(35,174,224,1) 100%); /* FF3.6-15 */
                    background: -webkit-linear-gradient(top, rgba(214,57,228,1) 0%,rgba(35,174,224,1) 100%); /* Chrome10-25,Safari5.1-6 */
                    background: linear-gradient(to bottom, rgba(214,57,228,1) 0%,rgba(35,174,224,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d639e4', endColorstr='#23aee0',GradientType=0 ); /* IE6-9 */
                }
                &:after {
                    background: #fff;
                }
            }
        }
    }
</style>
