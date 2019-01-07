<template>
    <div class="c-table__wrapper">
        <table class="c-table"
               :class="`{
               'c-table--stripped' : ${stripped},
               'c-table--hovered' : ${hovered},
               'c-table--bordered' : ${bordered},
               'c-table--size-${size}'
               }`">
            <thead class="c-table__head">
                <tr class="c-table-tr">
                    <th class="c-table-th" v-for="field in fields" :class="field.class">
                        {{ field.label }}
                    </th>
                </tr>
            </thead>
            <tbody class="c-table__body">
                <tr class="c-table-tr" v-for="row in rows">
                    <td class="c-table-td" v-for="data in row" :class="['row-varaint-' + row._rowVariant]">
                        <slot name="">
                            {{ data }}
                        </slot>
                    </td>
                </tr>
            </tbody>
            <tfoot class="c-table__footer">
                <tr class="c-table-tr">
                    <th class="c-table-th" v-for="field in fields">
                        {{ field.label }}
                    </th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
    export default {
        props:{
            fields:{
                type: Array
            },
            rows:{
                type: Array
            },
            stripped:{
                type: Boolean,
                default: true
            },
            hovered:{
                type: Boolean,
                default: false
            },
            bordered:{
                type: Boolean,
                default: false
            },
            size:{
                type: String,
                default: 'md'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .c-table__wrapper{
        width: 100%;
        display: block;
    }
    .c-table{
        color: #fff;
        width: 100%;
    }
    .c-table-th{
        font-weight: bold;
    }
    .c-table--stripped{
        tr:nth-child(even){
            background: rgba(0, 0, 0, .1);
        }
    }
    .c-table--bordered{
        td,th{
            border: 1px solid rgba(255, 255, 255, .15);
        }
    }
    .c-table--size-sm{
        .c-table-td,
        .c-table-th{
            padding: 2px 5px;
            font-size: 12px;
        }
    }
    .c-table--size-md{
        .c-table-td,
        .c-table-th{
            padding: 5px 10px;
        }
    }
    .c-table--size-lg{
        .c-table-td,
        .c-table-th{
            padding: 8px 15px;
            font-size: 16px;
        }
    }
</style>
