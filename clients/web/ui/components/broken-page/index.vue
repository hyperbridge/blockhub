<template>
    <div class="row">
        <div
            class="col-12"
            style="text-align: center">
            <br><br><br><br><br><br><br><br><br>
            <div v-if="!haiku">
                <h1 v-if="isError.statusCode === 404">
                    <strong>GG.</strong> Page not found.
                </h1>
                <h1 v-else>
                    <strong>GG.</strong> You broke it.
                </h1>
                <h3>Maybe there was an error in the spacetime continuum. <br>You better get home quick.</h3>
                <br><br>
                <p class="error">
                    Error status: {{ isError.statusCode }}<br>
                    Error message: {{ isError.message }}
                </p>
            </div>
            <div v-else class="haiku">
                <h2>{{ haiku[0] }}</h2>
                <h2>{{ haiku[1] }}</h2>
                <h2>{{ haiku[2] }}</h2>
            </div>
            <br />
            <c-button
                class="c-button--xl go-home"
                status="gradient-info"
                @click="goHome">
                Go Home
            </c-button>
            <br />
            <p class="error">
                Error status: {{ isError.statusCode }}<br>
                Error message: {{ isError.message }}
            </p>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        isError: {
            type: Object,
            default: () => ({})
        }
    },
    watch: {
        '$route'() {
            if (process.client) {
                this.$('body').removeClass('screen--not-found')
            }
        }
    },
    data() {
        let haikus = {
            general: [
                ['Page you are seeking', 'From your path it is fleeing', 'Its winter has come.'],
                ['The web page you seek', 'Lies beyond our perception', 'But others await.'],
                ['Cables have been cut', 'Southwest of Northeast somewhere', 'We are not amused.'],
            ],
            404: [
                ['Not a pretty sight', 'When the web dies screaming loud', 'The page is not found.'],
                ['With searching comes loss', 'And the presence of absence:', 'The page is not found.'],
                ['Mourning and sorrow', 'Page not with us now', 'Lost in 404.'],
                ['Rather than a beep', 'Or a rude error message,', `These words: 'Page not found.'`],
                ['These three are certain:', 'Death, taxes, and page not found.', 'You, victim of one.'],
                ['Click exciting link', 'Silicon holds you back', '404 not found.'],
            ],
            500: [
                ['Error reduces', 'Your expensive computer', 'To a simple stone.'],
                ['Aborted effort:', 'The site, passed this veil of tears.', 'You ask way too much.'],
                ['Chaos reigns within.', 'Reflect, repent, and retry.', 'Server shall return.'],
                [`Won't you please observe`, 'A brief moment of silence', 'For the dead page'],
                ['To have no errors', 'Would be life without meaning', 'No struggle, no joy'],
                ['First snow, then silence.', 'This expensive server dies', 'So beautifully.'],
                ['Silicon shudders', 'The page is down for the count', 'One big knockout punch.'],
                ['Errors have occurred.', `We won't tell you where or why.`, 'Lazy programmers.'],
                ['Yesterday it worked', 'Today it is not working', 'The web is like that.'],
                ['The code was willing', 'It considered your request,', 'But the proposal was weak.']
            ],
            700: [
                [`Server's poor response`, 'Not quick enough for browser.', 'Timed out, plum blossom.']
            ]
        }

        haikus = [...haikus['general'], ...(haikus[this.isError.statusCode] || [])]

        return {
            haiku: haikus[Math.floor(Math.random() * haikus.length)]
        }
    },
    created() {
        if (process.client) {
            this.$('body').addClass('screen--not-found')
        }
    },
    mounted() {
        if (this.$ga){
            this.$ga.page({
                page: '/404',
                title: 'Not Found',
                location: window.location.href
            })
        }
    },
    beforeDestroy() {
        if (process.client) {
            this.$('body').removeClass('screen--not-found')
        }
    },
    methods: {
        goHome() {
            // Dont use route, reload because there might be an error
            window.location.href = '/'
        }
    }
}
</script>


<style lang="scss">
    body.screen--not-found {
        .app-header {
            transform: rotate(-20deg) translateX(-5%) translateY(-70%) !important;
            width: 140%;
            overflow: hidden;

            &:before {
                position: absolute;
                top: 0;
                left: 0;
                content: " ";
                z-index: 120;
                background: url("/img/cracked-glass.png") no-repeat 0% 30%;
                width: 1000px;
                height: 1000px;
                background-size: contain;
                /*filter: drop-shadow(0 0 0px #fff);*/
                opacity: 0.5;
            }
        }
        .app-header__top-bar {
            height: 600px !important;
            max-height: 600px !important;
            width: 100%;
        }
        .quick-launch {
            display: none;
        }
        .haiku {
            display: inline-block;
            text-align: left;
            margin: 80px 0 50px;
            h2 {
                margin-left: 25px;
                margin-bottom: 10px;

                &:first-child {
                    margin-left: 0;
                }
            }
        }
        .error {
            margin-top: 80px;
            display: inline-block;
            text-align: left;
            margin-left: 30px;
            font-style: italic;
            max-width: 500px;
        }
    }
</style>
