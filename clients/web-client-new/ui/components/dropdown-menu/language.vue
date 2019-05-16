<template>
    <div class="language-dropdown">
        <div class="language-dropdown__current" @click="toggleList">
            <c-country-flag :country="currentLanguage.code" size="small" v-if="currentLanguage" />
            <span class="language-name">
                {{ currentLanguage ? currentLanguage.name : 'Language' }}
            </span>
            <i class="fas " :class="showList ? 'fa-angle-up' : 'fa-angle-down' "></i>
        </div>
        <transition name="slide-in-top">
            <div class="language-dropdown__list" v-if="showList" v-click-outside.bool="showList">
                <ul :class="{'d-block' : showList}">
                    <li class="language-dropdown__list-item" v-for="(lang, index) in languages" @click="changeLanguage(lang)" :key="index">
                        <c-country-flag :country="lang.code" size="small" />
                        <span class="language-name">
                            {{ lang.name }} ({{ lang.native }})
                        </span>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'language-dropdown',
        props: {
            currentLanguage: Object,
            languages: Array
        },
        components: {
        },
        data() {
            return {
                showList: false,
            }
        },
        methods: {
            toggleList() {
                this.showList = !this.showList
            },
            changeLanguage(lang) {
                this.$emit('change', lang);
                this.toggleList();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .language-dropdown{
        position: relative;
        height: 22px;
        z-index: 99;
    }
    .language-dropdown__current{
        display: inline-flex;
        align-items: center;
        color: #fff;
        width: auto;
        padding: 5px;
        height: 22px;
        font-size: 14px;
        cursor: pointer;
        .language-name{
            margin: 0 8px;
        }
        i{
            margin-left: auto;
        }
    }
    .language-dropdown__list{
        position: absolute;
        overflow: hidden;
        left: 0;
        top: 100%;
        background: rgba(255, 255, 255, .75);
        border-radius: 10px;
        ul{
            padding: 0;
            margin: 0;
            left: 0;
            right: 0;
            min-width: unset;
            position: relative;
        }
    }
    .language-dropdown__list-item{
        list-style: none;
        display: flex;
        align-items: center;
        color: #2e3546;
        height: 25px;
        padding: 0 8px;
        font-size: 12px;
        background: transparent;
        white-space: nowrap;
        &:last-child{
            border-bottom: none;
        }
        .language-name{
            margin-left: 8px;
        }
        &:hover{
            cursor: pointer;
            background: rgba(0, 0, 0, .05);
        }
    }
</style>
