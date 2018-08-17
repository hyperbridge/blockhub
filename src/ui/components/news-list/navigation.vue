<template>
    <li class="nav-item">
        <a
            class="nav-link"
            :class="[ index === 1 ? 'active' : '' ]"
            :id="`step${index}-tab`"
            :href="`#tab_${index}`"
            :aria-controls="`step${index}-tab`"
            aria-expanded="true"
            data-toggle="tab"
        >
            <div class="img">
                <img :src="game.img"/>
            </div>
            <div class="text">
                <h4>{{ game.title }}</h4>
                <p>{{ game.developer }}</p>
            </div>
        </a>
    </li>
</template>

<script>
export default {
    name: 'c-news-list-navigation',
    props: ['game', 'index']
}
</script>
