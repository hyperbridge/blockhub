<template>
    <span>
        <c-icon
            v-for="(star, index) in stars"
            :key="index"
            :name="star"
        />
    </span>
</template>

<script>
    export default {
        name: 'rating-stars',
        props: {
            number: {
                type: Number,
                required: true
            }
        },
        computed: {
            stars() {
                const stars = [];
                const parsed_number = Math.floor(this.number).toString();
                for (let i = 0; i < parsed_number; i++) {
                    stars.push('star');
                }
                return Number.isInteger(this.number) ? stars : [...stars, 'star-half'];
            }
        }
    }
</script>



