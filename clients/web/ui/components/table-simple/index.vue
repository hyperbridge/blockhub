<template>
    <div class="table__wrapper">
        <table
            class="table"
            :class="[{
                'c-table--stripped' : stripped,
                'c-table--bordered' : bordered,
            }, tableSize ]">
            <slot />
        </table>
    </div>
</template>

<script>
export default {
    props: {
        stripped: {
            type: Boolean,
            default: false
        },
        bordered: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'md'
        }
    },
    computed: {
        tableSize() {
            switch (this.size) {
            case 'sm':
                return 'c-table--size-sm'
            case 'md':
                return 'c-table--size-md'
            case 'lg':
                return 'c-table--size-lg'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .table__wrapper{
        width: 100%;
        display: block;
    }
    .table{
        color: #fff;
        width: 100%;
        th{
            font-weight: bold;
        }
    }
    .table--stripped{
        tbody{
            tr:nth-child(odd){
                background: rgba(0, 0, 0, .1);
                border-top: 1px solid rgba(0, 0, 0, .2);
                border-bottom: 1px solid rgba(0, 0, 0, .2);
            }
        }
    }
    .table--bordered{
        td,th{
            border: 1px solid rgba(255, 255, 255, .05);
        }
    }
    .table--size-sm{
        td,
        th{
            padding: 2px 5px;
            font-size: 12px;
        }
    }
    .table--size-md{
        td,
        th{
            padding: 5px 10px;
        }
    }
    .table--size-lg{
        td,
        th{
            padding: 8px 15px;
            font-size: 16px;
        }
    }
</style>
