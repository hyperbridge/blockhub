<template>
    <div class="c-checkbox">
        <input
            type="checkbox"
            :id="id"
            :checked="checked"
            v-bind="$attrs"
            :class="type"
            @change="$emit('change', $event.target.checked)"
        >
        <label :for="id">
            <slot/>
        </label>
    </div>
</template>

<script>
    export default {
        name: 'c-checkbox',
        model: {
            prop: 'checked',
            event: 'change'
        },
        inheritAttrs: false,
        props: {
            id: {
                type: [String, Number],
                default() {
                    return 'checkbox-' + parseInt(Math.random() * new Date().getUTCMilliseconds() * 5);
                }
            },
            checked: [Boolean, String],
            type: {
                type: String,
                default: 'square',
                validator: val => ['circle', 'square'].includes(val)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .c-checkbox {
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
                    width: 19px;
                    height: 19px;
                    border: 1px solid rgba(255, 255, 255, .2);
                    background: rgba(0, 0, 0, .3);
                    position: absolute;
                    border-radius: 2px;
                    left: 0;
                    top: 0;
                    -webkit-transition: all .12s, border-color .08s;
                    transition: all .12s, border-color .08s;
                }
                &:after {
                    content: '';
                    display: block;
                    position: absolute;
                    width: 13px;
                    height: 13px;
                    left: 3px;
                    top: 3px;
                    -webkit-transition: all .12s, border-color .08s;
                    transition: all .12s, border-color .08s;
                }
            }
            &.circle {
                & + label {
                    &:before, &:after {
                        border-radius: 100%;
                    }
                }
            }
            &:checked + label{
                &:before {
                    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#d639e4+0,23aee0+100 */
                    /*background: rgb(214,57,228); !* Old browsers *!*/
                    /*background: -moz-linear-gradient(top, rgba(214,57,228,1) 0%, rgba(35,174,224,1) 100%); !* FF3.6-15 *!*/
                    /*background: -webkit-linear-gradient(top, rgba(214,57,228,1) 0%,rgba(35,174,224,1) 100%); !* Chrome10-25,Safari5.1-6 *!*/
                    /*background: linear-gradient(to bottom, rgba(214,57,228,1) 0%,rgba(35,174,224,1) 100%); !* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ *!*/
                }
                &:after {
                    background: url("../../../assets/SVG/checked.svg") center no-repeat;
                    background-size: cover;
                }
            }
        }
    }
</style>
