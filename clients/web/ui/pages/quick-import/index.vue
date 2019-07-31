<template>
    <Layout navigationKey="store">
        <div class="row">
            <div
                v-if="!quickImport && !integrateLocally"
                class="col-12 col-lg-6">
                <Block
                    title="Quick import"
                    bgGradient
                    noGutter
                    onlyContentBg>
                    <div class="text-center pb-4">
                        <p>Sed posuere varius ex id ullamcorper. Donec et aliquet mi, in tincidunt massa. Maecenas ornare, elit nec condimentum semper</p>
                        <Button
                            status="second-info"
                            size="md"
                            class="mt-3 px-5"
                            @click=" quickImport = true">
                            Continue
                        </Button>
                        <small class="text-muted d-block text-center mt-2">
                            <i class="fas fa-lock mr-2" />Authentication required
                        </small>
                    </div>
                </Block>
            </div>
            <div
                v-if="!quickImport && !integrateLocally"
                class="col-12 col-lg-6">
                <Block
                    title="Integrate locally"
                    bgGradient
                    noGutter
                    onlyContentBg>
                    <div class="text-center pb-4">
                        <p>Sed posuere varius ex id ullamcorper. Donec et aliquet mi, in tincidunt massa. Maecenas ornare, elit nec condimentum semper</p>
                        <Button
                            status="second-info"
                            size="md"
                            class="mt-3 px-5"
                            @click=" integrateLocally = true">
                            View Guide
                        </Button>
                        <small class="text-success d-block text-center mt-2">
                            <i class="fas fa-eye-slash mr-2" /> No Auth / Code Access
                        </small>
                    </div>
                </Block>
            </div>

            <div
                v-if="signedIn && quickImport"
                class="col-12">
                <Block
                    title="Quick import"
                    bgGradient
                    noGutter
                    onlyContentBg>
                    <p class="mb-2">
                        Automatically analyze from code host for easy initial result.
                    </p>
                    <Button
                        status="plain"
                        icon="arrow-left"
                        class="mb-3"
                        @click=" quickImport=false ">
                        Go Back
                    </Button>
                    <div class="row">
                        <div
                            v-for="service in services"
                            :key="service.name"
                            class="col-12 col-md-6 col-lg-4 mb-4">
                            <Icon-block
                                :icon="service.icon"
                                iconType="fab"
                                size="md"
                                class="icon-block-border w-100">
                                <div class="h4 p-0">
                                    {{ service.name }}
                                </div>
                            </Icon-block>
                        </div>
                        <div
                            class="col-12 mb-4"
                            hidden>
                            <div
                                id="drag-zone"
                                class="file-drag-zone"
                                @drop="dropHandler(event)"
                                @dragover="dragOverHandler(event)">
                                Drag zone
                            </div>
                        </div>
                    </div>
                </Block>
            </div>
            <div
                v-if="!signedIn && quickImport"
                class="col-12">
                <div class="h6">
                    You are not signed in. Please
                    <Button
                        status="plain"
                        @click="$store.commit('application/activeModal', 'login')">
                        Sign In
                    </Button>
                    to continue.
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    components: {
        'Icon-block': () => import('@ericmuyser/hyper-ui').then(m => m.Icon-block)
    },
    data() {
        return {
            quickImport: false,
            integrateLocally: false,
            services: [
                {
                    name: 'GitHub',
                    icon: 'github'
                },
                {
                    name: 'BitBucket',
                    icon: 'bitbucket'
                },
                {
                    name: 'GitKraken',
                    icon: 'gitkraken'
                },
                {
                    name: 'GitHub',
                    icon: 'github'
                },
                {
                    name: 'BitBucket',
                    icon: 'bitbucket'
                },
                {
                    name: 'GitKraken',
                    icon: 'gitkraken'
                }
            ]
        }
    },
    computed: {
        signedIn() {
            return this.$store.state.application.signedIn
        }
    },
    methods: {
        dropHandler(ev) {
            console.log('File(s) dropped')

            // Prevent default behavior (Prevent file from being opened)
            ev.preventDefault()

            if (ev.dataTransfer.items) {
                // Use DataTransferItemList interface to access the file(s)
                for (let i = 0; i < ev.dataTransfer.items.length; i++) {
                    // If dropped items aren't files, reject them
                    if (ev.dataTransfer.items[i].kind === 'file') {
                        const file = ev.dataTransfer.items[i].getAsFile()
                        console.log(`... file[${i}].name = ${file.name}`)
                    }
                }
            } else {
                // Use DataTransfer interface to access the file(s)
                for (let i = 0; i < ev.dataTransfer.files.length; i++) {
                    console.log(`... file[${i}].name = ${ev.dataTransfer.files[i].name}`)
                }
            }
        },
        dragOverHandler(ev) {
            console.log('File(s) in drop zone')
            ev.preventDefault()
        }
    }
}
</script>

<style lang="scss" scoped>
    .icon-block-border{
        border: 1px solid rgba( 255, 255, 255, .15);
        border-top: 4px solid rgba( 255, 255, 255, .3);
        padding: 15px;
        border-radius: 5px;
        transition: all 200ms ease-in-out;
        &:hover{
            background: rgba(1,148,239,.4);
            border-color: #0194ef;
            cursor: pointer;
        }
    }
    .file-drag-zone{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        border: 1px dashed rgba( 255, 255, 255, .15 );
        padding: 30px;
        text-align: center;
        color: rgba( 255, 255, 255, .4 );
        border-radius: 5px;
    }
</style>
