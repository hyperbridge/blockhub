<template>
    <div class="searcher__wrapper">
        <transition name="slide-in">
            <span
                v-if="resultsCount && phrase.length"
                class="searcher__results-count">
                Results: {{ resultsCount }}
            </span>
        </transition>
        <c-input-searcher
            :value="phrase"
            placeholder="Search"
            aria-label="Search"
            @input="search"
            @click="$emit('click')" />
        <div
            v-if="phrase.length"
            class="results__wrapper">
            <div class="results__content">
                <p
                    v-if="isTyping"
                    class="results__text">
                    Searching...
                </p>
                <p
                    v-else-if="resultsCount != null && !resultsCount"
                    class="results__text">
                    Nothing could be found. Want to <c-button
                        status="plain"
                        @click="$store.commit('application/activeModal', 'comingSoon')">
                        Check for updates
                    </c-button>?
                </p>
                <ul
                    v-else
                    class="results__list">
                    <slot name="list">
                        <li
                            v-for="(result, index) in results"
                            :key="index"
                            class="list__result">
                            <slot :result="result" />
                        </li>
                    </slot>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { debounce } from '@/mixins'

export default {
    components: {
        'c-input-searcher': () => import('~/components/inputs/searcher').then(m => m.default || m)
    },
    mixins: [debounce],
    inheritAttrs: false,
    props: {
        size: {
            type: String,
            default: 'md',
            validator(val) {
                return ['md', 'lg'].includes(val)
            }
        },
        resultsCount: {
            type: Number,
            default: null
        },
        delay: {
            type: Number,
            default: 250
        },
        results: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            phrase: '',
            isTyping: false
        }
    },
    methods: {
        search(phrase) {
            this.phrase = phrase
            if (!this.isTyping) this.isTyping = true

            this.debounce(() => {
                this.isTyping = false
                this.$emit('input', phrase)
            }, this.delay)
        }
    }
}
</script>

<style lang="scss" scoped>
    .searcher__wrapper, .results__wrapper {
        position: relative;
    }
    .searcher__results-count {
        position: absolute;
        top: -20px;
        right: 0;
    }
    .results__content {
        background-color: #30314c;
        border-radius: 0;
        position: absolute;
        z-index: 5;
        top: 0;
        width: 100%;
        animation: rotate-in .3s ease;
        max-height: 180px;
        overflow-y: auto;
        &:hover {
            border-radius: 0;
        }
    }
    .results__text {
        padding: 8px;
        border-radius: 4px;
    }
    .results__list {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    /deep/ .list__result {
        @extend .results__text;
        &:hover {
            background-color: #444670;
        }
        a {
            color: #fff;
        }
    }

    @keyframes rotate-in {
        0% {
            transform: rotateX(90deg);
        }
        100% {
            transform: rotateX(0);
        }
    }
</style>
