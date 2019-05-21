<template>
    <c-block title="Language Support" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
        <template slot="heading-bar">
            <i class="fas fa-laptop title-icon"></i>
        </template>
        <table class="language-support__table">
            <thead>
                <th>Name</th>
                <th>Interface</th>
                <th>Audio</th>
                <th>CC</th>
            </thead>
            <tbody>
                <transition-group name="fadeLeft" tag="tr" v-for="(lang, index) in orderLang" :class="['tr-order-' + lang.order]" v-if="lang.show == 'default' || show || index < 5" :key="index">
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
                </transition-group>
                <tr style="background: transparent" v-if="languages.length > 5">
                    <td colspan="10" class="text-center">
                        <transition name="fade" v-if="!show">
                            <div class="language-support__toggle-btn" @click="toggleLang">
                                Show {{ languages.length - 5 }} more languages <i class="fas fa-angle-double-down"></i>
                            </div>
                        </transition>
                        <transition name="fade" v-else>
                            <div class="language-support__toggle-btn" @click="toggleLang">
                                Hide languages <i class="fas fa-angle-double-up"></i>
                            </div>
                        </transition>
                    </td>
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
                    fullAudio: 'volume-off',
                },
                userLang: '',
                show: false,
                langList: []
            }
        },
        created() {
            let lang = (this.$store.state.application.account && this.$store.state.application.account.meta ? this.$store.state.application.account.meta.language : {name: "English"}),
                arr = this.languages
            
            this.userLang = lang.name.toLowerCase()
            arr.forEach((el) => {
                if (el.name) {
                    if (this.userLang.includes(el.name.toLowerCase())) {
                        el.order = 0
                        el.show = 'default'
                        this.langList.push(el)
                    } else {
                        el.order = 1
                        this.langList.push(el)
                    }
                }
                else {
                    if (el.name === 'English') {
                        el.order = 0
                        el.show = 'default'
                    }
                    this.langList.push(el)
                }
            })
        },
        methods: {
            toggleLang() {
                this.show = !this.show
            }
        },
        computed: {
            orderLang() {
                return this.langList.sort((a, b) => a.order - b.order)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .language-support__table {
        width: 100%;
        th:first-child{
            width: 60%;
        }
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
        tr{
            &.hide-tr{
                display: none;
            }
        }
    }
    .language-support__toggle-btn{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        padding: 5px 10px;
        position: relative;
        margin-top: 5px;
        transition: all 200ms cubic-bezier(0.34, 1.01, 0.8, 0.24);
        &:before{
            content: "";
            position: absolute;
            top: 50%;
            left: -20px;
            height: 1px;
            width: 20px;
            background: #fff;
        }
        &:after{
            content: "";
            position: absolute;
            top: 50%;
            right: -20px;
            height: 1px;
            width: 20px;
            background: #fff;
        }
        i{
            margin-left: 10px;
        }
        &:hover{
            cursor: pointer;
            transition: all 200ms cubic-bezier(0.34, 1.01, 0.8, 0.24);
            padding: 5px 20px;
        }
    }
</style>
