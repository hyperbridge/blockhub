<template>
    <div class="asset-preview">
        <c-asset-preview-basic :asset="asset"/>
        <table class="asset-preview__table">
            <thead>
                <th>Property</th>
                <th>Value</th>
                <slot name="th"/>
            </thead>
            <tbody>
                <tr v-for="(val, prop, index) in asset.metadata" :key="index">
                    <td>
                        {{ prop | parseProp | upperFirstChar }}
                    </td>
                    <td v-if="typeof asset.metadata[prop] ===  'object'">
                        <ul class="margin-bottom-0">
                            <li v-for="(subprop, subval, index) in asset.metadata[prop]" :key="index">
                                {{ subprop }} {{ subval }}
                            </li>
                        </ul>
                    </td>
                    <td v-else>{{ asset.metadata[prop] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: ['asset'],
        components: {
            'c-asset-preview-basic': (resolve) => require(['@/ui/components/asset/preview-basic'], resolve),
        },
        filters: {
            parseProp(val) {
                return val.replace(/_/g, ' ');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .asset-preview {
        padding: 10px;
        border-radius: 4px;
        background: #1D1E2E;
        margin: 10px;
        min-height: 640px;
        min-width: 250px;
    }
    .asset-preview__table {
        width: 100%;
        td, th {
            padding: 5px;
        }

        tr:nth-child(odd) td {
            background: rgba(255,255,255,.01);
        }
        td:first-child {
            color: rgba(255,255,255,.6);
        }
    }
</style>
