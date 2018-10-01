<template>
    <c-block title="Language Support" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
        <template slot="heading-bar">
            <a :href="communityUrl" class="title-icon text-white">
                <i class="fas fa-comments" v-if="!activateElement"></i>
                <i class="fas fa-cog" v-else></i>
            </a>
        </template>
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
    </c-block>
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
    },
    components: {
        'c-block': (resolve) => require(['@/ui/components/block'], resolve),
    }
}
</script>

<style lang="scss" scoped>
    .language-support__table {
        width: 100%;
        th:not(:first-child), td:not(:first-child) {
            text-align: center;
            width: 15%;
        }
        th:not(:first-child):not(:last-child) {
            padding: 0 5px;
        }
        tbody tr:nth-child(even) {
            background-color: #353551;
        }
    }
</style>
