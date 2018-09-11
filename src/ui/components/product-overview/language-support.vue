<template>
    <div class="card transparent">
        <div class="card-body">
            <h2 class="title">Languages <i class="fas fa-laptop title-icon"></i></h2>
            <table class="language-support__table">
                <thead>
                    <th>Name</th>
                    <th>Interface</th>
                    <th>Audio</th>
                    <th>CC</th>
                </thead>
                <tbody>
                    <tr v-for="lang in languages" :key="lang.name">
                        <template v-for="(value, property) in lang">
                            <td v-if="property == 'name'" :key="property">{{ value }}</td>
                            <td v-else :key="property">
                                <i
                                    v-if="value"
                                    class="fas"
                                    :class="`fa-${options_icons[property]}`"
                                ></i>
                            </td>
                        </template>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'language-support',
    props: {
        languages: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            options_icons: {
                subtitles: 'closed-captioning',
                interface: 'language',
                full_audio: 'volume-off'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .language-support__table {
        width: 100%;
        th:not(:first-child), td:not(:first-child) {
            text-align: center;
        }
        th:not(:first-child):not(:last-child) {
            padding: 0 5px;
        }
        tbody tr:nth-child(even) {
            background-color: #363650;
        }
    }
</style>
