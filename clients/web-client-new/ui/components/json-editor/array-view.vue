<template>
    <div class="block_content array">
        <ol class="array-ol">
            <li
                v-for="(member, index) in flowData"
                :key="index"
                :class="['array-item', {'hide-item': hideMyItem[index] === true}]"
            >
                <p v-if="member.type !== 'object' && member.type !== 'array'">
                    <input
                        type="text"
                        v-model="parsedData[index].remark"
                        class="val-input"
                        v-if="member.type === 'string'"
                        placeholder="string">
                    <input
                        type="number"
                        v-model.number="parsedData[index].remark"
                        class="val-input"
                        v-if="member.type === 'number'"
                        placeholder="number"
                    >
                    <select
                        name="value" v-model="parsedData[index].remark"
                        class="val-input"
                        v-if="member.type === 'boolean'"
                    >
                        <option :value="true">true</option>
                        <option :value="false">false</option>
                    </select>
                </p>
                <div v-else>
                    <span :class="['json-key', 'json-desc']">{{parsedData[index].type.toUpperCase()}}
                        <i
                            class="collapse-down"
                            v-if="member.type === 'object' || member.type === 'array'"
                            @click="closeBlock(index, $event)"
                        >
                            <i class="fa fa-chevron-down"></i>
                        </i>
                        <i v-if="member.type === 'object'">
                            {{'{' + parsedData[index].childParams.length + '}'}}
                        </i>
                        <i v-if="member.type === 'array'">
                            {{'[' + parsedData[index].childParams.length + ']'}}
                        </i>
                    </span>

                    <span class="json-val">
                        <template v-if="member.type === 'array'">
                            <c-array-view
                                :parsedData="parsedData[index].childParams"
                                v-model="parsedData[index].childParams">
                            </c-array-view>
                        </template>

                        <template v-if="member.type === 'object'">
                            <c-json-view
                                :parsedData="parsedData[index].childParams"
                                v-model="parsedData[index].childParams">
                            </c-json-view>
                        </template>

                    </span>
                </div>

                <div class="del-btn" @click="delItem(parsedData, member, index)">
                    <i class="fas fa-trash"></i>
                </div>
            </li>
        </ol>

        <div class="block add-key" v-popover="{ name: popoverKey }" @click="viewType = 'array-full'">
            <i class="fa fa-plus"></i>
        </div>
        <no-ssr>
            <popover :name="popoverKey" :pointer="false" :class="viewType" style="position: fixed;left: 0px;top: 0px;">
                <c-item-add-form @confirm="newItem" @popoverView="popoverClass" :needName="false"></c-item-add-form>
            </popover>
        </no-ssr>
    </div>
</template>

<script>
import ItemAddForm from './item-add-form.vue'

export default {
    props: ['parsedData'],

    data: function () {
        return {
            flowData: this.parsedData,
            toAddItem: false,
            hideMyItem: {},
            popoverKey: null,
            viewType: 'array-full'
        }
    },

    components: {
        'c-item-add-form': ItemAddForm
    },

    beforeMount: function() {
        this.popoverKey = this.generateKey();
    },

    methods: {
            rmIndex: function (arr, index) {
                    arr.splice(index, 1);
                    return arr
            },
        delItem: function (parentDom, item, index) {
            this.flowData = this.rmIndex(this.flowData, index);
            if (this.hideMyItem[index]) this.hideMyItem[index] = false;
            this.$emit('input', this.flowData)
        },

        closeBlock: function (index, e) {
            this.$set(this.hideMyItem, index, !this.hideMyItem[index])
        },

        newItem: function (obj) {
            this.toAddItem = false;

            let oj = {
                'name': obj.key,
                'type': obj.type
            };
            if (obj.type === 'array' || obj.type === 'object') {
                oj.childParams = obj.val;
                oj.remark = null
            } else {
                oj.childParams = null;
                oj.remark = obj.val
            }

            this.flowData.push(oj);
            this.$emit('input', this.flowData);
        },

        generateKey: function () {
            return '_' + Math.random().toString(36).substr(2, 9);
        },

        popoverClass: function (className) {
            this.viewType = 'array-' + className;
        },
    }
}

</script>

<style scoped>
    
</style>
