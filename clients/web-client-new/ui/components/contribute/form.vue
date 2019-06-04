<template>
    <div class="contribute-form"
@mouseover="activeForm = true" @mouseleave=" activeForm = false">
        <div class="input-group mb-4"
:class="[{ 'active' : activeForm }, { 'has-error' : error }]">
            <div class="input-group-prepend">
                <span class="input-group-text">
                    {{ currency }}
                </span>
            </div>
            <input type="text"
ref="input" class="form-control" v-model="mutableValue" placeholder="0.00" >
        </div>
        <c-button status="success"
class="justify-content-center" iconHide size="xl" @click="$emit('click')">
            Continue
        </c-button>
    </div>
</template>

<script>
export default {
    name: 'ContributeForm',
    props: {
        active: {
            type: Boolean,
            default: false
        },
        value: ,
        defaultValue: Number,
        currency: String
    },
    data() {
        return {
            activeForm: false,
            error: false,
            mutableValue: this.value
        }
    },
        watch: {
            mutableValue(val) {
                this.$emit('input', val);
                if ( Number(this.$refs.input.value) < Number(this.defaultValue) )
                    this.error = true
                else
                    this.error = false
            }
        },
        created() {
            this.activeForm = this.active
            if ( this.defaultValue )
                this.mutableValue = this.defaultValue
        },
        methods: {
            changeData() {
                this.$emit('input', this.$refs.input.value)
                if ( Number(this.$refs.input.value) < Number(this.defaultValue) )
                    this.error = true
                else
                    this.error = false
            }
        }
}
</script>

<style lang="scss" scoped>
    .contribute-form{
        display: flex;
        flex-direction: column;
    }
    .input-group{
        border-radius: 5px;
        overflow: hidden;
        border: 1px solid transparent;
        input{
            background: rgba(0, 0, 0, .13);
            color: #fff;
            border-color: rgba(0, 0, 0, .4);
            &:active,
            &:focus{
                outline: none;
                box-shadow: none;
                border-color: rgba(0, 0, 0, .4);
            }
        }
        .input-group-text{
            background: #1d1e30;
            border-color: rgba(0, 0, 0, .4);
            color: #fff;
        }
        &.active{
            border-color: #5EA72B;
        }
        &.has-error{
            border-color: #F75D5D;
        }
    }
</style>
