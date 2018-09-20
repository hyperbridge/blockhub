<template>
    <c-layout navigationKey="account-navigation">
        <div class="content login-container" id="content">
            <div class="container">
                <div class="col-12">
                    <div>
                        <h4>KYC Verification</h4>
                        <p>Below you will be able to KYC</p>
                        <div class="errors">
                            <div v-for="(error, index) in errors" :key="index">
                                {{ error }}
                            </div>
                        </div>
                        <div id="veriff-root"></div>
                        <iframe class="veriff-frame" id="veriff-frame"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>


<script>
    import Veriff from '@veriff/js-sdk'

    export default {
        components: {
            'c-layout': (resolve) => require(['@/ui/layouts/default'])
        },
        data() {
            return {
                errors: [],
                installed: {
                    veriff: false
                }
            }
        },
        methods: {
            signIn() {
                this.$store.dispatch('network/signIn')

                this.$router.push('/store')
            },
            installVeriff() {
                if (this.installed.veriff) return

                const veriff = Veriff({
                    env: 'production', // or 'staging'
                    apiKey: 'ceba96be-5fd6-48ed-87d6-e5aaf80f9718',
                    parentId: 'veriff-root',
                    onSession: (err, response) => {
                        if (!response || err) {
                            this.errors.push('Could not contact verification service. Please contact support. ' + JSON.stringify(err))
                        }

                        document.getElementById('veriff-frame').src = response.verification.url
                    }
                })

                veriff.mount()

                this.installed.veriff = true
            }
        },
        updated: function () {
            this.$nextTick(() => {
                this.installVeriff()
            })
        }
    }
</script>


<style lang="scss" scoped>
    .veriff-frame {
        width: 100%;
        height: 500px;
    }

    .nav-tabs {
        border-bottom: none;
        position: relative;
        .nav-item {
            border-radius: 8px 8px 0 0;
            a {
                color: #606079;
                background: #393955;
                padding: 0 15px;
                font-size: 16px;
                line-height: 32px;
                border: none;
                position: relative;
                box-shadow: 0 -1px 10px rgba(0, 0, 0, .2);
                &:before {
                    content: "";
                    position: absolute;
                    height: 23px;
                    bottom: 0;
                    left: -30px;
                    border: 15px solid transparent;
                    border-bottom: 15px solid #393955;
                    border-right: 15px solid #393955;
                    -webkit-filter: drop-shadow(-5px 0px 3px rgba(0, 0, 0, .15));
                    filter: drop-shadow(-5px 0px 3px rgba(0, 0, 0, .1));
                }
                &:after {
                    content: "";
                    position: absolute;
                    height: 23px;
                    bottom: 0;
                    right: -30px;
                    border: 15px solid transparent;
                    border-bottom: 15px solid #393955;
                    border-left: 15px solid #393955;
                    -webkit-filter: drop-shadow(5px 0px 3px rgba(0, 0, 0, .15));
                    filter: drop-shadow(5px 0px 3px rgba(0, 0, 0, .15));
                }
                &.active {
                    border-bottom: none;
                    background: #3e3e5c;
                    z-index: 8;
                    &:before {
                        border-bottom-color: #3e3e5c;
                        border-right-color: #3e3e5c;
                    }
                    &:after {
                        border-bottom-color: #3e3e5c;
                        border-left-color: #3e3e5c;
                    }
                }
            }
            &:first-child {
                a {
                    box-shadow: 0 0 20px rgba(0, 0, 0, .2);
                    &:before {
                        display: none;
                    }
                }
            }
        }
    }

    .tab-pane {
        position: relative;
        &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            right: 15px;
            height: 15px;
            background: #3e3e5c;
            z-index: 10;
        }
        .tab-container {
            background: #3e3e5c;
            padding: 15px;
            border-radius: 0 5px 5px 5px;
            border-top: none;
            box-shadow: 0 3px 20px rgba(0, 0, 0, .2);
            .tab-card {
                background: #383853;
                border-radius: 5px;
                padding: 8px 10px;
                border: 1px solid #373752;
                margin-bottom: 15px;
                &:last-child {
                    margin: 0;
                }
                input {
                    border: none;
                    box-shadow: 0 0 3px rgba(0, 0, 0, .4) inset;
                    background: #303049;
                }
                .terms_block {
                    background: #303049;
                    box-shadow: 0 0 3px rgba(0, 0, 0, .4) inset;
                    padding: 15px;
                    border-radius: 5px;
                    max-height: 250px;
                    overflow-y: auto;
                    h1, h2, h3, h4, h5 {
                        font-size: 18px;
                    }
                }
            }
        }
        .action {
            margin-top: 20px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex-wrap: nowrap;
            div {
                display: flex;
                align-items: center;
                width: auto;
                .switch {
                    margin: 0;
                }
                .label {
                    font-size: 16px;
                    margin-left: 10px;
                    a {
                        color: #fff;
                        text-decoration: underline;
                    }
                }
                .btn {
                    padding: 5px 10px;
                    font-size: 15px;
                    text-transform: uppercase;
                    font-weight: bold;
                }
            }
        }
    }

</style>


