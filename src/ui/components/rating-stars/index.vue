<template>
    <span>
        <i
            v-for="(star, index) in stars"
            :key="index"
            class="fas"
            :class="`fa-${star}`"
        ></i>
    </span>
</template>

<script>
export default {
    name: 'rating-stars',
    props: {
        number: {
            required: true
        }
    },
    computed: {
        stars() {
            const stars = [];
            let number = Number(this.number)
            const parsed_number = Math.floor(number).toString();
            for (let i = 0; i < parsed_number; i++) {
                stars.push('star');
            }
            return Number.isInteger(number) ? stars : [...stars, 'star-half'];
        }
    }
}
</script>



