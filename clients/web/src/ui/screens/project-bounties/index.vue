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
                <c-icon-block icon="users" class="ml-5">
                    <div class="h6 p-0 m-0 text-white font-weight-bold">
                        81
                    </div>
                    Contributors
                </c-icon-block>
                <c-icon-block icon="arrow-right" class="ml-5">
                    <div class="h6 p-0 m-0 text-white font-weight-bold">
                        81
                    </div>
                    Submissions
                </c-icon-block>
            </div>
            <div class="bounties-header__action">
                <c-button status="dark" icon_hide size="lg" fontSize="14" class="text-uppercase with-label">
                                <span class="btn-label">
                                    <i class="fas fa-lock"></i>
                                </span>
                    Management
                </c-button>
                <c-button status="info" icon_hide size="lg" fontSize="14" class="text-uppercase ml-3">
                    My bounties
                </c-button>
            </div>
        </div>

        <div v-for="(item, index) in bounties" :key="index" class="bounties_item margin-bottom-30">
            <div class="bountie__head d-flex justify-content-between align-items-center">
                <div class="bountie__head-stat">
                    <div>
                        <h4 class="mb-0">Prize</h4>
                        <span>{{ item.prize | numeralFormat('0,0') }} HBX</span>
                    </div>
                    <div>
                        <h4 class="mb-0">Submited</h4>
                        <span>{{ item.submited }}</span>
                    </div>
                    <div>
                        <h4 class="mb-0">Approved</h4>
                        <span>{{ item.approved }}</span>
                    </div>
                </div>
                <c-button status="success" fontSize="14" icon_hide @click=" showDownload = !showDownload " size="lg" class="text-uppercase">
                    Claim Bounty
                </c-button>
            </div>
            <div class="bountie__text padding-left-15 padding-right-15">
                <h4>{{ item.title }}</h4>
                <p>{{ item.text }}</p>
            </div>
            <transition name="fade">
                <div class="bountie__bottom" v-if="showDownload">
                    <div class="file_upload">
                        <i class="fas fa-download"></i>
                        Select a Dossier File
                    </div>
                    <span>or</span>
                    <input v-model="item.explain_text" class="explain_input" type="text" placeholder="Explain your findings"/>
                    <c-button status="success" icon="arrow-right" size="md">Submit</c-button>
                </div>
            </transition>
        </div>
    </div>
    </div>
</template>

<script>

    export default {
        props: ['project', 'editing'],
        data: function () {
            return{
                "bounties": [
                    {
                        "title": "Find a bug, behind the word mountains, far from the countries Vokalia and Consonantia, there live.",
                        "submited": "2851",
                        "approved": "408",
                        "prize": "30000",
                        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu nulla sed urna malesuada ornare nec ac risus. Nam vehicula mauris ac augue finibus finibus non et erat. Integer malesuada rutrum elit non hendrerit. Nam volutpat scelerisque magna, in lacinia nulla consectetur eget. Nunc feugiat egestas arcu id lobortis. Proin rhoncus viverra mi, ac bibendum ligula molestie eget. Vivamus a tempor ligula.",
                        "explain_text": "",
                        "file_src": ""

                    },
                    {
                        "title": "Find a bug, behind the word mountains, far from the countries Vokalia and Consonantia, there live.",
                        "submited": "2851",
                        "approved": "408",
                        "prize": "30000",
                        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu nulla sed urna malesuada ornare nec ac risus. Nam vehicula mauris ac augue finibus finibus non et erat. Integer malesuada rutrum elit non hendrerit. Nam volutpat scelerisque magna, in lacinia nulla consectetur eget. Nunc feugiat egestas arcu id lobortis. Proin rhoncus viverra mi, ac bibendum ligula molestie eget. Vivamus a tempor ligula.",
                        "explain_text": "",
                        "file_src": ""

                    }
                ],
                showDownload: false
            }
        },
        components: {
            'c-icon-block': (resolve) => require(['@/ui/components/block/with-icon'], resolve)
        },
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
        .c-btn{
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
