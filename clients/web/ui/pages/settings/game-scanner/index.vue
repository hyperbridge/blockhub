<template>
    <Layout navigationKey="settings">
        <Block title="Scan for Game">
            <p class="mb-0">
                We found the following games on your system.
            </p>
            <p>Check the ones you want us to update automatically</p>
            <div class="scanning-list margin-top-30 margin-bottom-30">
                <div class="scanning-list__item">
                    <div class="img">
                        <Img
                            src="https://cdn.freebiesupply.com/logos/large/2x/world-of-warcraft-logo-png-transparent.png"
                            class="img-fluid" />
                    </div>
                    <div class="info w-100">
                        <h3 class="p-0 m-0">
                            World of Warcraft
                        </h3>
                        <div class="text-muted">
                            /Volume/Untitled/World of Warcraft
                            <Button status="link">
                                <i class="fas fa-edit" />
                            </Button>
                        </div>
                    </div>
                    <div class="float-right">
                        <Toggle />
                    </div>
                </div>
                <div class="scanning-list__item">
                    <div class="img">
                        <Img
                            src="https://www.gezginler.net/indir/resim-grafik/dota-2-1484294880.png"
                            class="img-fluid" />
                    </div>
                    <div class="info w-100">
                        <h3 class="p-0 m-0">
                            Dota 2
                        </h3>
                        <div class="text-muted">
                            /Volume/Untitled/Dota 2
                            <Button status="link">
                                <i class="fas fa-edit" />
                            </Button>
                        </div>
                    </div>
                    <div class="float-right">
                        <Toggle />
                    </div>
                </div>
                <div class="scanning-list__item">
                    <div class="img">
                        <Img
                            src="https://upload.wikimedia.org/wikipedia/ru/0/04/Heroes_of_the_Storm_logo.png"
                            class="img-fluid" />
                    </div>
                    <div class="info w-100">
                        <h3 class="p-0 m-0">
                            Heroes of the Storm
                        </h3>
                        <div class="text-muted">
                            /Volume/Untitled/Heroes
                            <Button status="link">
                                <i class="fas fa-edit" />
                            </Button>
                        </div>
                    </div>
                    <div class="float-right">
                        <Toggle />
                    </div>
                </div>
            </div>
            <InlineNotification type="info">
                <div class="d-flex align-items-center justify-content-between">
                    <div>
                        <div class="h3 m-0 p-0 font-weight-bold">
                            Did we miss one?
                        </div>
                        <div class="h5 m-0 p-0">
                            Show us where it's installed!
                        </div>
                    </div>
                    <Button
                        status="dark"
                        size="lg">
                        Locate
                    </Button>
                </div>
            </InlineNotification>
        </Block>
    </Layout>
</template>

<script>
export default {
    components: {
        'InlineNotification': () => import('@ericmuyser/hyper-ui').then(m => m.InlineNotification)
    },
    data() {
        return {
            systemPermissions: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .scanning-list__item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        .img{
            width: 50px;
            margin-right: 15px;
        }
        &:hover{
            border-color: #43C981;
        }
        &:last-child{
            margin: 0;
            padding: 0;
            border: none;
        }
    }
</style>
