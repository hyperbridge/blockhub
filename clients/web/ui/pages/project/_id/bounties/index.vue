<template>
    <div class="row">
        <div class="col-12">
            <div class="bounties-header margin-bottom-20">
                <div class="bounties-header__info">
                    <div class="h3 text-white font-weight-bold mb-0">
                        {{ bounties.length }} Bounties available
                    </div>
                </div>
                <div class="bounties-header__stat">
                    <Icon-block
                        icon="users"
                        class="ml-5">
                        <div class="h6 p-0 m-0 text-white font-weight-bold">
                            {{ contributors }}
                        </div>
                        Contributors
                    </Icon-block>
                    <Icon-block
                        icon="arrow-right"
                        class="ml-5">
                        <div class="h6 p-0 m-0 text-white font-weight-bold">
                            {{ submissions }}
                        </div>
                        Submissions
                    </Icon-block>
                </div>
                <div class="bounties-header__action">
                    <Button
                        :to="`/business/projects/${project.id}`"
                        status="dark"
                        iconHide
                        size="lg"
                        fontSize="14"
                        class="text-uppercase with-label">
                        <span class="btn-label">
                            <i class="fas fa-lock" />
                        </span>
                        Management
                    </Button>
                    <Button
                        :to="`/profile/${$store.state.application.activeProfile.id}/bounties`"
                        status="info"
                        iconHide
                        size="lg"
                        fontSize="14"
                        class="text-uppercase ml-3">
                        My bounties
                    </Button>
                </div>
            </div>

            <div
                v-for="(item, index) in bounties"
                :key="index"
                class="bounties_item margin-bottom-30">
                <div class="bountie__head d-flex justify-content-between align-items-center">
                    <div class="bountie__head-stat">
                        <div>
                            <h4 class="mb-0">
                                Prize
                            </h4>
                            <span>{{ item.prize | numeralFormat('0,0') }} HBX</span>
                        </div>
                        <div>
                            <h4 class="mb-0">
                                Submited
                            </h4>
                            <span>{{ item.submited }}</span>
                        </div>
                        <div>
                            <h4 class="mb-0">
                                Approved
                            </h4>
                            <span>{{ item.approved }}</span>
                        </div>
                    </div>
                    <Button
                        status="success"
                        fontSize="14"
                        iconHide
                        size="lg"
                        class="text-uppercase"
                        @click=" showDownload = !showDownload ">
                        Claim Bounty
                    </Button>
                </div>
                <div class="bountie__text padding-left-15 padding-right-15">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.text }}</p>
                </div>
                <transition name="fade">
                    <div
                        v-if="showDownload"
                        class="bountie__bottom">
                        <div class="file_upload">
                            <i class="fas fa-download" />
                            Select a Dossier File
                        </div>
                        <span>or</span>
                        <input
                            v-model="item.explainText"
                            class="explain_input"
                            type="text"
                            placeholder="Explain your findings">
                        <Button
                            status="success"
                            icon="arrow-right"
                            size="md">
                            Submit
                        </Button>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'Icon-block': () => import('@ericmuyser/hyper-ui').then(m => m.Icon - block)
    },
    props: ['project', 'editing'],
    data() {
        let data = {
            contributors: 0,
            submissions: 0,
            bounties: [],
            showDownload: false
        }

        if (this.$store.state.application.environmentMode !== 'production') {
            data = {
                ...data, ...{
                    contributors: 81,
                    submissions: 81,
                    bounties: [
                        {
                            'title': 'Find a bug, behind the word mountains, far from the countries Vokalia and Consonantia, there live.',
                            'submited': '2851',
                            'approved': '408',
                            'prize': '30000',
                            'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu nulla sed urna malesuada ornare nec ac risus. Nam vehicula mauris ac augue finibus finibus non et erat. Integer malesuada rutrum elit non hendrerit. Nam volutpat scelerisque magna, in lacinia nulla consectetur eget. Nunc feugiat egestas arcu id lobortis. Proin rhoncus viverra mi, ac bibendum ligula molestie eget. Vivamus a tempor ligula.',
                            'explainText': '',
                            'fileSrc': ''

                        },
                        {
                            'title': 'Find a bug, behind the word mountains, far from the countries Vokalia and Consonantia, there live.',
                            'submited': '2851',
                            'approved': '408',
                            'prize': '30000',
                            'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu nulla sed urna malesuada ornare nec ac risus. Nam vehicula mauris ac augue finibus finibus non et erat. Integer malesuada rutrum elit non hendrerit. Nam volutpat scelerisque magna, in lacinia nulla consectetur eget. Nunc feugiat egestas arcu id lobortis. Proin rhoncus viverra mi, ac bibendum ligula molestie eget. Vivamus a tempor ligula.',
                            'explainText': '',
                            'fileSrc': ''

                        }
                    ]
                }
            }
        }

        return data
    }
}
</script>

<style lang="scss" scoped>
    .bounties-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (max-width: 768px) {
            flex-direction: column;
            text-align: center;
            div{
                width: 100%;
            }
            .bounties-header__stat{
                display: flex;
                flex-wrap: nowrap;
                justify-content: center;
                margin: 20px 0 25px 0;
                .block-icon{
                    display: inline-flex;
                    margin: 0 10px!important;
                    width: auto;
                    text-align: left;
                }
            }
        }
    }
    .bounties_item {
        border-radius: 5px;
        overflow: hidden;
        color: #fff;
        margin-bottom: 25px;
        display: block;
    }
    .bountie__head {
        font-size: 18px;
        font-weight: bold;
        text-align: left;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #222638;
        padding: 15px;
    }
    .bountie__head-stat{
        width: 60%;
        display: flex;
        align-items: center;
        div{
            margin-right: 35px;
        }
        @media (max-width: 767px) {
            flex-direction: column;
            align-self: flex-start;
            div{
                display: flex;
                justify-content: space-between;
                margin: 0;
                width: 100%;
            }
        }
    }
    .bountie__text{
        background: #60617c;
        padding: 15px;
        h4{
            font-size: 18px;
            font-weight: bold;
        }
    }
    .bountie__bottom{
        background: #4e4f65;
        padding: 15px;
        .file_upload,
        input{
            display: inline-block;
            border: 1px solid #161722;
            background: #212135;
            padding: 5px 10px;
            border-radius: 5px;
        }
        .file_upload{
            width: 170px;
            i{
                margin-right: 10px;
                color: #526af6;
            }
        }
        input{
            width: calc( 100% - 340px );
        }
        span{
            width: 35px;
            text-align: center;
            display: inline-block;
        }
        .button{
            float: right;
            width: 90px;
        }
    }
    .with-label{
        position: relative;
        .btn-label{
            position: absolute;
            top: 0px;
            left: 0px;
            width: 25px;
            padding: 2px;
            border-radius: 5px 0 0 0;
            font-size: 10px;
            background: #FADC72;
            height: 25px;
            color: #30304B;
            line-height: 10px;
            -webkit-clip-path: polygon(0 0, 0% 100%, 100% 0);
            clip-path: polygon(0 0, 0% 100%, 100% 0);
        }
    }
</style>
