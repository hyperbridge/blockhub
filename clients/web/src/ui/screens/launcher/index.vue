<template>
    <c-layout :showLeftPanel="false"
              :showRightPanel="false"
              bgImage="https://www.gamekings.tv/wp-content/uploads/20170227_shadowofwar.jpg"
              :showBreadcrumbs="false"
              :customShortcuts="gamesShortcuts">
        <div></div>
    </c-layout>
</template>

<script>
    export default {
        data(){
            return{
                gamesShortcuts: [
                    {
                        "r": null,
                        "g": null,
                        "b": null,
                        "image": "https://i.pinimg.com/564x/08/f0/79/08f079b6aefc47ab8c894009e30a60ef.jpg",
                        "eventKey": "application/activateModal",
                        "eventValue": "connect-network",
                        "unread": false,
                        "text": "Go to Twitch",
                        "sort": 1,
                        "removable": false
                    },
                    {
                        "r": null,
                        "g": null,
                        "b": null,
                        "image": "https://i.pinimg.com/564x/76/27/c3/7627c3c285ee472fc8d58a828572ad5e.jpg",
                        "eventKey": "application/activateModal",
                        "eventValue": "connect-network",
                        "unread": false,
                        "text": "Go to Discord",
                        "sort": 2,
                        "removable": false
                    },
                    {
                        "r": null,
                        "g": null,
                        "b": null,
                        "image": "https://i.pinimg.com/564x/d7/ad/19/d7ad19e707765e4f977057507f8a0593.jpg",
                        "eventKey": "application/activateModal",
                        "eventValue": "connect-network",
                        "unread": false,
                        "text": "Go to Steam",
                        "sort": 3,
                        "removable": false
                    },
                    {
                        "r": null,
                        "g": null,
                        "b": null,
                        "image": "https://i.pinimg.com/564x/41/91/88/4191888f472dc3351107dbb26283abf5.jpg",
                        "eventKey": "application/activateModal",
                        "eventValue": "connect-network",
                        "unread": false,
                        "text": "Go to Instagram",
                        "sort": 5,
                        "removable": false
                    },
                    {
                        "r": null,
                        "g": null,
                        "b": null,
                        "image": "https://i.pinimg.com/564x/e8/55/bf/e855bf14c4cc4cf452e38948b0d0689f.jpg",
                        "eventKey": "application/activateModal",
                        "eventValue": "connect-network",
                        "unread": false,
                        "text": "Go to Youtube",
                        "sort": 6,
                        "removable": false
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
