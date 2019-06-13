<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
                <h3>Whoops, not found!</h3>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
        this.$ga.page({
            page: '/404',
            title: 'Not Found',
            location: window.location.href
        })
    }
}
</script>

<style lang="scss" scoped>
	div.container {
		text-align: center;
	}
	h3 {
		font-weight: 100;
		color: #4a4a4a;
		font-size: 2em;
	}
</style>
