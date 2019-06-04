<template>
    <div class="block_content array">
        <ol class="array-ol">
            <li
                v-for="(member, index) in flowData"
                :key="index"
                :class="['array-item', {'hide-item': hideMyItem[index] === true}]">
                <p v-if="member.type !== 'object' && member.type !== 'array'">
                    <input
                        v-if="member.type === 'string'"
                        v-model="parsedData[index].remark"
                        type="text"
                        class="val-input"
                        placeholder="string">
                    <input
                        v-if="member.type === 'number'"
                        v-model.number="parsedData[index].remark"
                        type="number"
                        class="val-input"
                        placeholder="number">
                    <select
                        v-if="member.type === 'boolean'"
                        v-model="parsedData[index].remark"
                        name="value"
                        class="val-input">
                        <option :value="true">
                            true
                        </option>
                        <option :value="false">
                            false
                        </option>
                    </select>
                </p>
                <div v-else>
                    <span :class="['json-key', 'json-desc']">{{ parsedData[index].type.toUpperCase() }}
                        <i
                            v-if="member.type === 'object' || member.type === 'array'"
                            class="collapse-down"
                            @click="closeBlock(index, $event)">
                            <i class="fa fa-chevron-down" />
                        </i>
                        <i v-if="member.type === 'object'">
                            {{ '{' + parsedData[index].childParams.length + '}' }}
                        </i>
                        <i v-if="member.type === 'array'">
                            {{ '[' + parsedData[index].childParams.length + ']' }}
                        </i>
                    </span>

                    <span class="json-val">
                        <template v-if="member.type === 'array'">
                            <c-array-view
                                v-model="parsedData[index].childParams"
                                :parsedData="parsedData[index].childParams" />
                        </template>

                        <template v-if="member.type === 'object'">
                            <c-json-view
                                v-model="parsedData[index].childParams"
                                :parsedData="parsedData[index].childParams" />
                        </template>

                    </span>
                </div>

                <div class="del-btn"
                     @click="delItem(parsedData, member, index)">
                    <i class="fas fa-trash" />
                </div>
            </li>
        </ol>

        <div v-popover="{ name: popoverKey }"
             class="block add-key"
             @click="viewType = 'array-full'">
            <i class="fa fa-plus" />
        </div>
        <no-ssr>
            <popover :name="popoverKey"
                     :pointer="false"
                     :class="viewType"
                     style="position: fixed;left: 0px;top: 0px;">
                <c-item-add-form :needName="false"
                                 @confirm="newItem"
                                 @popoverView="popoverClass" />
            </popover>
        </no-ssr>
    </div>
</template>

<script>
import ItemAddForm from './item-add-form.vue'

export default {

    components: {
        'c-item-add-form': ItemAddForm
    },
    props: ['parsedData'],

    data() {
        return {
            flowData: this.parsedData,
            toAddItem: false,
            hideMyItem: {},
            popoverKey: null,
            viewType: 'array-full'
        }
    },

    beforeMount() {
        this.popoverKey = this.generateKey()
    },

    methods: {
        rmIndex(arr, index) {
            arr.splice(index, 1)
            return arr
        },
        delItem(parentDom, item, index) {
            this.flowData = this.rmIndex(this.flowData, index)
            if (this.hideMyItem[index]) this.hideMyItem[index] = false
            this.$emit('input', this.flowData)
        },

        closeBlock(index, e) {
            this.$set(this.hideMyItem, index, !this.hideMyItem[index])
        },

        newItem(obj) {
            this.toAddItem = false

            const oj = {
                'name': obj.key,
                'type': obj.type
            }
            if (obj.type === 'array' || obj.type === 'object') {
                oj.childParams = obj.val
                oj.remark = null
            } else {
                oj.childParams = null
                oj.remark = obj.val
            }

            this.flowData.push(oj)
            this.$emit('input', this.flowData)
        },

        generateKey() {
            return `_${Math.random().toString(36).substr(2, 9)}`
        },

        popoverClass(className) {
            this.viewType = `array-${className}`
        }
    }
}

</script>

<style scoped>

</style>
