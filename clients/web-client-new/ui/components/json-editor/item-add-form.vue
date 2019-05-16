<template>
    <div class="add-form">
        <div class="f-input">
            <input
                type="text"
                v-model="keyName"
                class="f-input-m"
                placeholder="key"
                v-if="needName"
                @keyup="checkName"
            >

            <select v-model="formatSelected" class="f-input-m" @change="checkName">
                <option :value="format" v-for="format in formats" :key="format">{{format}}</option>
            </select>

            <span class="f-input-m" v-show="showColon"><b>:</b></span>

            <template v-if="requireName">
                <input
                    type="text"
                    v-model="valName" class="f-input-m"
                    placeholder="value"
                    v-if="formatSelected === 'string'"
                >
                <input
                    type="number"
                    v-model="valName"
                    class="f-input-m"
                    placeholder="value"
                    v-if="formatSelected === 'number'" @change="numberType"
                >
                <select
                    name="value"
                    v-model="valName"
                    class="f-input-m"
                    v-if="formatSelected === 'boolean'"
                    @change="booleanType"
                >
                    <option :value="true">true</option>
                    <option :value="false">false</option>
                </select>
            </template>
        </div>

        <div class="f-btns">
            <button class="f-confirm" @click="confirm" :disabled="disableConfirm" :title="requireNameWarning">
                <i class="fa fa-check"></i>
            </button>
            <button class="f-cancel" @click="cancel" title="Cancel">
                <i class="fa fa-times"></i>
            </button>
        </div>
    </div>

</template>

<script>
export default {
    data: function() {
        return {
            formats: ['string', 'array', 'object', 'number', 'boolean', 'null'],
            valueFormats: ['string', 'number', 'boolean'],
            formatSelected: 'string',
            keyName: '',
            valName: '',
            disableConfirm: this.needName,
            showColon: true,
            requireNameWarning: 'A key is required',
        };
    },
    props: {
        needName: {
            default: true
        },
        existingNames: {
            default: function () { return [] }
        }
    },
    methods: {
        checkName: function()    {
            this.showColon = this.valueFormats.includes(this.formatSelected);

            // Check for a key
            this.disableConfirm = this.needName && this.keyName.length === 0;
            this.requireNameWarning = this.disableConfirm ? 'A key is required' : 'Add';

            // Check for duplicate keys
            if (this.keyName.length > 0 && this.existingNames.includes(this.keyName)) {
                this.disableConfirm = true;
                this.requireNameWarning = 'Duplicate key is not allowed';
            }

            // Check type for formatting
            if (this.formatSelected === 'boolean') {
                this.$emit('popoverView', 'boolean');
            } else {
                this.$emit('popoverView', this.showColon ? 'full' : 'array');
            }
        },

        requireName: function()    {
            return this.formatSelected !=='array' && this.formatSelected !== 'object'
        },

        confirm: function() {
            let val = null;
            if (this.formatSelected === 'array' || this.formatSelected === 'object') {
                val = [];
            } else if (this.formatSelected === 'null') {
                val = null
            } else {
                val = this.valName;
            }

            const objData = {
                key: this.needName ? this.keyName : null,
                val: val,
                type: this.formatSelected
            };

            this.$emit('confirm', objData);
            this.keyName = '';
            this.valName = '';
            this.formatSelected = 'string';

            this.$parent.hideEventListener(event)
        },

        cancel: function(event) {
            this.$parent.hideEventListener(event)
        },

        booleanType: function() {
            this.valName = Boolean(this.valName);
        },

        numberType: function()    {
            this.valName = Number(this.valName);
        }
    }
};
</script>

<style lang="scss" scoped>
    .f-input, .f-btns {
        display: inline-block;
    }

    .f-btns {
        display: inline-block;
        margin-top: 0.5em;
    }

    .f-confirm {
        width: 30px;
        color: #fff;
        background: #5cb85c;
        &:hover {
            cursor: pointer;
        }
    }

    .f-cancel {
        width: 30px;
        color: #fff;
        background: rgba(237, 28, 36, 0.56);
        &:hover {
            cursor: pointer;
        }
    }

    .add-form {
        padding: 5px 5px 10px;
        font-size: 0.8em;
    }
</style>