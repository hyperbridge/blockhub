<template>
    <div class="table-simple__wrapper">
        <table
            class="table-simple"
            :class="[{
                'table-simple--stripped' : stripped,
                'table-simple--bordered' : bordered,
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
                return 'table-simple--size-sm'
            case 'md':
                return 'table-simple--size-md'
            case 'lg':
                return 'table-simple--size-lg'
            }
        }
    }
}
</script>

<style lang="scss">
    .table-simple__wrapper{
        width: 100%;
        display: block;
    }
    .table-simple{
        color: #fff;
        width: 100%;
        th{
            font-weight: bold;
        }
    }
    .table-simple--stripped{
        tbody{
            tr:nth-child(odd){
                background: rgba(0, 0, 0, .1);
                border-top: 1px solid rgba(0, 0, 0, .2);
                border-bottom: 1px solid rgba(0, 0, 0, .2);
            }
        }
    }
    .table-simple--bordered{
        td,th{
            border: 1px solid rgba(255, 255, 255, .05);
        }
    }
    .table-simple--size-sm{
        td,
        th{
            padding: 2px 5px;
            font-size: 12px;
        }
    }
    .table-simple--size-md{
        td,
        th{
            padding: 5px 10px;
        }
    }
    .table-simple--size-lg{
        td,
        th{
            padding: 8px 15px;
            font-size: 16px;
        }
    }
    .table-img{
        max-width: 30px;
        max-height: 30px;
        margin-right: 10px;
    }
</style>
