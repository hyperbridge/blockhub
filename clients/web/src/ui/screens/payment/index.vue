<template>
    <c-layout>
        <div class="row">
            <div class="col-12 col-md-8">
                <c-block title="Payment method">
                    <div class="form-group">
                        <label>
                            Choose payment system
                        </label>
                        <c-multiselect v-model="paymentSystem"
                                       class="dark-mode"
                                       label="label"
                                       :options="paymentSystems">
                        </c-multiselect>
                    </div>
                </c-block>
            </div>
            <div class="col-12 col-md-4">
                <c-block title="Payment methods">
                    Choose Methods
                </c-block>
            </div>
        </div>
    </c-layout>
</template>

<script>
    import 'vue-multiselect/dist/vue-multiselect.min.css'

    export default {
        components: {
            'c-multiselect': (resolve) => require(['vue-multiselect'], resolve),
        },
        data() {
            return {
                paymentSystem: null,
                paymentSystems:[
                    {
                        label: 'Vise',
                        key: 'visa'
                    },
                    {
                        label: 'MasterCard',
                        key: 'mastercard'
                    },
                    {
                        label: 'Bank USA',
                        key: 'bank-usa'
                    },
                ]
            }
        },
    }
</script>

