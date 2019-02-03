<template>
    <c-layout navigationKey="store">
        <div class="row">
            <div class="col-12 col-lg-6" v-if="!quickImport && !integrateLocally">
                <c-block title="Quick import" bgGradient noGutter onlyContentBg>
                    <div class="text-center pb-4">
                        <p>Sed posuere varius ex id ullamcorper. Donec et aliquet mi, in tincidunt massa. Maecenas ornare, elit nec condimentum semper</p>
                        <c-button status="second-info" size="md" class="mt-3 px-5" @click=" quickImport = true">
                            Continue
                        </c-button>
                        <small class="text-muted d-block text-center mt-2">
                            <i class="fas fa-lock mr-2"></i>Authentication required
                        </small>
                    </div>
                </c-block>
            </div>
            <div class="col-12 col-lg-6" v-if="!quickImport && !integrateLocally">
                <c-block title="Integrate locally" bgGradient noGutter onlyContentBg>
                    <div class="text-center pb-4">
                        <p>Sed posuere varius ex id ullamcorper. Donec et aliquet mi, in tincidunt massa. Maecenas ornare, elit nec condimentum semper</p>
                        <c-button status="second-info" size="md" class="mt-3 px-5" @click=" integrateLocally = true">
                            View Guide
                        </c-button>
                        <small class="text-success d-block text-center mt-2">
                            <i class="fas fa-eye-slash mr-2"></i> No Auth / Code Access
                        </small>
                    </div>
                </c-block>
            </div>
            
            <!--Second step on Quick import-->
            <div class="col-12" v-if="signedIn && quickImport">
                <c-block title="Quick import" bgGradient noGutter onlyContentBg>
                    <p class="mb-2">
                        Automatically analyze from code host for easy initial result.
                    </p>
                    <c-button status="plain" icon="arrow-left" class="mb-3" @click=" quickImport=false ">
                        Go Back
                    </c-button>
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-4 mb-4" v-for="service in services">
                            <c-icon-block :icon="service.icon" iconType="fab" size="md" class="icon-block-border w-100">
                                <div class="h4 p-0">
                                    {{ service.name }}
                                </div>
                            </c-icon-block>
                        </div>
                        <div class="col-12 mb-4" hidden>
                            <div class="file-drag-zone" id="drag-zone" @drop="dropHandler(event)" @dragover="dragOverHandler(event)">
                                Drag zone
                            </div>
                        </div>
                    </div>
                </c-block>
            </div>
            <div class="col-12" v-if="!signedIn && quickImport">
                <div class="h6">
                    You are not signed in. Please
                    <c-button status="plain" @click="$store.commit('application/activateModal', 'login')">
                        Sign In
                    </c-button>
                    to continue.
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-icon-block': (resolve) => require(['@/ui/components/block/with-icon'], resolve)
        },
        data(){
            return{
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
            },
        },
        methods: {
            dropHandler(ev) {
                console.log('File(s) dropped');

                // Prevent default behavior (Prevent file from being opened)
                ev.preventDefault();

                if (ev.dataTransfer.items) {
                    // Use DataTransferItemList interface to access the file(s)
                    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
                        // If dropped items aren't files, reject them
                        if (ev.dataTransfer.items[i].kind === 'file') {
                            var file = ev.dataTransfer.items[i].getAsFile();
                            console.log('... file[' + i + '].name = ' + file.name);
                        }
                    }
                } else {
                    // Use DataTransfer interface to access the file(s)
                    for (var i = 0; i < ev.dataTransfer.files.length; i++) {
                        console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
                    }
                }
            },
            dragOverHandler(ev) {
                console.log('File(s) in drop zone');
                ev.preventDefault();
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
