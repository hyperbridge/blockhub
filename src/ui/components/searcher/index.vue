<template>
    <div class="form-group">
        <div class="input-group">
            <input
                type="text"
                class="form-control"
                placeholder="Search"
                aria-label="Search"
                v-model="phrase"
                @input="search"
            />
            <div class="input-group-append">
                <span class="input-group-text">
                    <i class="fas fa-search"></i>
                </span>
            </div>
        </div>
        <div v-if="results.length && phrase.length > 0" class="results-wrapper">
            <transition-group tag="ul" class="results">
                <li
                    v-for="(result, index) in results"
                    :key="index"
                    class="result"
                >
                    <a href="#" @click.prevent>{{ result.title }}</a>
                </li>
            </transition-group>
        </div>
    </div>
</template>

<script>
export default {
    name: 'searcher',
    data() {
        return {
            timeout: null,
            phrase: '',
            results: [
                { title: 'Gym with Tim' },
                { title: 'The Mission' },
                { title: `Joe's Adventure` }
            ]
        }
    },
    methods: {
        search() {
            this.timeout = setTimeout(() => {

            }, 200);
        }
    }
}
</script>

<style lang="scss" scoped>
.input-group {
    border-color: rgba(0, 0, 0, .7);
    border-radius: 5px;
    overflow: hidden;
    .input-group-append {
        margin: 0;
        .input-group-text {
            border: none;
        }
    }
    input {
        border: none;
        &:active,
        &:focus {
            border: unset;
            box-shadow: none;
        }
    }
}

.results-wrapper {
    position: relative;
}

.results {
    margin: 0;
    padding: 0;
    list-style-type: none;
    position: absolute;
    z-index: 5;
    top: 5px;
    width: 100%;
    background-color: #24253B;
    border-radius: 4px;
    animation: rotate-in .3s ease;
}

.result {
    padding: 8px;
    border-radius: 4px;
    perspective: 200;
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
