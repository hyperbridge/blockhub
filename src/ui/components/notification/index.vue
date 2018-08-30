<template>
    <div class="navigation">
        <ul class="notifications-list">
            <li class="notifi_item info" >
                <div class="title">
                    <h5 class="text-left">
                        <i class="fas fa-info"></i>
                        You should know ...
                        <a href="#3" class="close">
                            <i class="fas fa-times"></i>
                        </a>
                    </h5>
                </div>
                <div class="text">
                    Something is changed in our privace policy,
                    please view this notification. Click to view full.
                </div>
            </li>
            <li class="notifi_item success">
                <div class="title">
                    <h5 class="text-left">
                        <i class="fas fa-check-circle"></i>
                        You should know ...
                        <a href="#3" class="close">
                            <i class="fas fa-times"></i>
                        </a>
                    </h5>
                </div>
                <div class="text">
                    Something is changed in our privace policy,
                    please view this notification. Click to view full.
                </div>
            </li>
            <li class="notifi_item warning">
                <div class="title">
                    <h5 class="text-left">
                        <i class="fas fa-exclamation-triangle"></i>
                        You should know ...
                        <a href="#3" class="close">
                            <i class="fas fa-times"></i>
                        </a>
                    </h5>
                </div>
                <div class="text">
                    Something is changed in our privace policy,
                    please view this notification. Click to view full.
                </div>
            </li>
            <li class="notifi_item danger">
                <div class="title">
                    <h5 class="text-left">
                        <i class="fas fa-times-circle"></i>
                        You should know ...
                        <a href="#3" class="close">
                            <i class="fas fa-times"></i>
                        </a>
                    </h5>
                </div>
                <div class="text">
                    Something is changed in our privace policy,
                    please view this notification. Click to view full.
                </div>
            </li>
            <li class="notifi_item">
                <div class="title">
                    <h5 class="text-left">
                        <i class="fas fa-cog"></i>
                        You should know ...
                        <a href="#3" class="close">
                            <i class="fas fa-times"></i>
                        </a>
                    </h5>
                </div>
                <div class="text">
                    Something is changed in our privace policy,
                    please view this notification. Click to view full.
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['items']
}
</script>

<style lang="scss" scoped>
   

</style>
