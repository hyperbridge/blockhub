<template>
    <div class="block_content">
        <span
            v-for="(item, index) in flowData"
            :key="index"
            :class="['block', 'clearfix', {'hide-block': hideMyBlock[index] === true}]">
            <span class="json-key">
                <input
                    v-if="typeof item.name === 'string'"
                    v-model="item.name"
                    type="text"
                    class="key-input"
                    @change="keyInputBlur(item, $event)">
                <i
                    v-if="item.type === 'object' || item.type === 'array'"
                    class="collapse-down"
                    @click="closeBlock(index, $event)">
                    <i class="fa fa-chevron-down" />
                </i>
                <div
                    class="del-btn"
                    @click="delItem(parsedData, item, index)">
                    <i class="fas fa-trash" />
                </div>

                <i
                    v-if="item.type === 'object'"
                    class="i-type">
                    {{ '{' + item.childParams.length + '}' }}
                </i>
                <i
                    v-if="item.type === 'array'"
                    class="i-type">
                    {{ '[' + item.childParams.length + ']' }}
                </i>

            </span>
            <span class="json-val">
                <template v-if="item.type === 'object'">
                    <c-json-view
                        v-model="item.childParams"
                        :parsedData="item.childParams" />
                </template>

                <template v-else-if="item.type === 'array'">
                    <c-array-view
                        v-model="item.childParams"
                        :parsedData="item.childParams" />
                </template>

                <template v-else>
                    <span class="val">
                        <input
                            v-if="item.type === 'string'"
                            v-model="item.remark"
                            type="text"
                            class="val-input">
                        <input
                            v-if="item.type === 'number'"
                            v-model.number="item.remark"
                            type="number"
                            class="val-input">
                        <select
                            v-if="item.type === 'boolean'"
                            v-model="item.remark"
                            name="value"
                            class="val-input">
                            <option :value="true">true</option>
                            <option :value="false">false</option>
                        </select>
                        <span
                            v-if="item.type === 'null'"
                            class="val-input">NULL</span>
                    </span>
                </template>
            </span>
        </span>

        <div
            v-popover="{ name: popoverKey }"
            class="block add-key"
            @click="viewType = 'full'">
            <i class="fa fa-plus" />
        </div>
        <no-ssr>
            <popover
                :name="popoverKey"
                :pointer="true"
                :class="viewType"
                style="position: fixed;left: 0px;top: 0px;">
                <c-item-add-form
                    :existingNames="flowDataKeys"
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
    props: { parsedData: {} },

    data() {
        return {
            flowData: [],
            toAddItem: false,
            hideMyBlock: {},
            popoverKey: null,
            viewType: 'full',
            flowDataKeys: []
        }
    },

    beforeMount() {
        this.popoverKey = this.generateKey()
        this.viewType = 'full'
    },

    created() {
        this.flowData = this.parsedData
        this.flowData.map(obj => {
            this.flowDataKeys.push(obj.name)
        })
    },

    methods: {
        rmIndex(arr, index) {
            arr.splice(index, 1)
            return arr
        },
        rmItem(arr, item) {
            const i = arr.indexOf(item)
            if (i !== -1) {
                this.rmIndex(arr, i)
            }
            return this
        },
        delItem(parentDom, item, index) {
            this.flowData = this.rmIndex(this.flowData, index)
            this.flowDataKeys = this.rmItem(this.flowDataKeys, item.name)
            if (this.hideMyBlock[index]) this.hideMyBlock[index] = false
            this.$emit('input', this.flowData)
        },
        closeBlock(index, e) {
            this.$set(this.hideMyBlock, index, !this.hideMyBlock[index])
        },
        generateKey() {
            return `_${Math.random().toString(36).substr(2, 9)}`
        },
        newItem(obj) {
            const oj = {
                'name': obj.key || 'null',
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

            if (oj.name) {
                this.flowDataKeys.push(oj.name)
            }

            this.$emit('input', this.flowData)
        },
        keyInputBlur(item, e) {
            if (item.name.length <= 0) {
                item.name = 'null'
                e.target.focus()
            }

            console.debug(item)
            console.debug(e)
        },
        popoverClass(className) {
            this.viewType = className
        }
    }
}

</script>
