<template>
    <div class="searcher__wrapper">
        <transition name="slide-in">
            <span v-if="resultsCount && phrase.length" class="searcher__results-count">
                Results: {{ resultsCount }}
            </span>
        </transition>
        <c-input-searcher
            @input="search"
            placeholder="Search"
            aria-label="Search"
        />
        <div class="results__wrapper" v-if="phrase.length">
            <div class="results__content">
                <p v-if="isTyping" class="results__text">Searching...</p>
                <p v-else-if="resultsCount != null && !resultsCount" class="results__text">
                    No products were found
                </p>
                <ul v-else class="results__list">
                    <slot>
                        <li v-for="(result, index) in results" :key="index" class="list__result">
                            <router-link
                                v-if="disableDecoration"
                                :to="`${resultUrl}${result[resultUrlProp]}`"
                            >
                                {{ result[resultTextProp] }}
                            </router-link>
                            <router-link
                                v-else
                                :to="`${resultUrl}${result[resultUrlProp]}`"
                                v-html="$options.filters.highlightPhrase(result[resultTextProp], phrase, 'u')"
                            />
                        </li>
                    </slot>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { debouncer } from '@/mixins';

    export default {
        name: 'searcher',
        components: {
            'c-input-searcher': (resolve) => require(['@/ui/components/inputs/searcher'], resolve),
        },
        mixins: [debouncer],
        props: {
            size: {
                type: String,
                default: 'md',
                validator(val) {
                    return ['md', 'lg'].includes(val);
                }
            },
            resultsCount: Number,
            delay: {
                type: Number,
                default: 250
            },
            results: Array,
            resultUrl: String,
            resultUrlProp: String,
            resultTextProp: String,
            disableDecoration: Boolean
        },
        data() {
            return {
                phrase: '',
                isTyping: false
            }
        },
        methods: {
            search(phrase) {
                this.phrase = phrase;
                if (!this.isTyping) this.isTyping = true;

                this.debounce(() => {
                    this.isTyping = false;
                    this.$emit('input', phrase);
                }, this.delay);
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
        background-color: #24253B;
        border-radius: 4px;
        position: absolute;
        z-index: 5;
        top: 5px;
        width: 100%;
        animation: rotate-in .3s ease;
        max-height: 180px;
        overflow-y: auto;
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
