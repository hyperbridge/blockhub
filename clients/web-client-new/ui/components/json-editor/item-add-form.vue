<template>
    <div class="add-form">
        <div class="f-input">
            <input
                v-if="needName"
                v-model="keyName"
                type="text"
                class="f-input-m"
                placeholder="key"
                @keyup="checkName">

            <select v-model="formatSelected"
                    class="f-input-m"
                    @change="checkName">
                <option v-for="format in formats"
                        :key="format"
                        :value="format">
                    {{ format }}
                </option>
            </select>

            <span v-show="showColon"
                  class="f-input-m"><b>:</b></span>

            <template v-if="requireName">
                <input
                    v-if="formatSelected === 'string'"
                    v-model="valName"
                    type="text"
                    class="f-input-m"
                    placeholder="value">
                <input
                    v-if="formatSelected === 'number'"
                    v-model="valName"
                    type="number"
                    class="f-input-m"
                    placeholder="value"
                    @change="numberType">
                <select
                    v-if="formatSelected === 'boolean'"
                    v-model="valName"
                    name="value"
                    class="f-input-m"
                    @change="booleanType">
                    <option :value="true">
                        true
                    </option>
                    <option :value="false">
                        false
                    </option>
                </select>
            </template>
        </div>

        <div class="f-btns">
            <button class="f-confirm"
                    :disabled="disableConfirm"
                    :title="requireNameWarning"
                    @click="confirm">
                <i class="fa fa-check" />
            </button>
            <button class="f-cancel"
                    title="Cancel"
                    @click="cancel">
                <i class="fa fa-times" />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        needName: {
            default: true
        },
        existingNames: {
            default() { return [] }
        }
    },
    data() {
        return {
            formats: ['string', 'array', 'object', 'number', 'boolean', 'null'],
            valueFormats: ['string', 'number', 'boolean'],
            formatSelected: 'string',
            keyName: '',
            valName: '',
            disableConfirm: this.needName,
            showColon: true,
            requireNameWarning: 'A key is required'
        }
    },
    methods: {
        checkName() {
            this.showColon = this.valueFormats.includes(this.formatSelected)

            // Check for a key
            this.disableConfirm = this.needName && this.keyName.length === 0
            this.requireNameWarning = this.disableConfirm ? 'A key is required' : 'Add'

            // Check for duplicate keys
            if (this.keyName.length > 0 && this.existingNames.includes(this.keyName)) {
                this.disableConfirm = true
                this.requireNameWarning = 'Duplicate key is not allowed'
            }

            // Check type for formatting
            if (this.formatSelected === 'boolean') {
                this.$emit('popoverView', 'boolean')
            } else {
                this.$emit('popoverView', this.showColon ? 'full' : 'array')
            }
        },

        requireName() {
            return this.formatSelected !== 'array' && this.formatSelected !== 'object'
        },

        confirm() {
            let val = null
            if (this.formatSelected === 'array' || this.formatSelected === 'object') {
                val = []
            } else if (this.formatSelected === 'null') {
                val = null
            } else {
                val = this.valName
            }

            const objData = {
                key: this.needName ? this.keyName : null,
                val,
                type: this.formatSelected
            }

            this.$emit('confirm', objData)
            this.keyName = ''
            this.valName = ''
            this.formatSelected = 'string'

            this.$parent.hideEventListener(event)
        },

        cancel(event) {
            this.$parent.hideEventListener(event)
        },

        booleanType() {
            this.valName = Boolean(this.valName)
        },

        numberType() {
            this.valName = Number(this.valName)
        }
    }
}
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
