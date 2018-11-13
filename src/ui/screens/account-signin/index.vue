<template>
    <c-layout navigationKey="account" :showLeftPanel="false" :showRightPanel="false">
        <div class="content login-container" id="content">
            <div class="container">
                <div class="col-12">
                    <p class="errors" v-if="errors.length">
                        <strong>Please correct the following error(s):</strong>
                        <ul>
                            <li v-for="error in errors" :key="error">{{ error }}</li>
                        </ul>
                    </p>
                    <div class="chosen-box">
                        <div class="chosen-box__container">
                            <div class="h1 mb-4">Already have an account?</div>
                            <c-button status="outline-success" size="lg" @click="importAccountFile">Import Account</c-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="content login-container" id="content">
            <div class="container">
                <div class="col-12">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="step1-tab" data-toggle="tab" href="#step1" role="tab"
                               aria-controls="step1-tab" aria-expanded="true">Sign In</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane show active" id="step1" role="tabpanel" aria-labelledby="step1-tab">
                            <div class="tab-container">
                                <div class="tab-card">
                                    <h4>Account Information</h4>
                                    <form action="/" method="post">
                                        <div class="row">
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Email</label>
                                                    <input type="email" class="form-control" placeholder="Email"
                                                           name="email">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Password</label>
                                                    <input type="password" class="form-control" placeholder="Password"
                                                           name="password">
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="action">
                                <div>
                                    <a href="#" class="btn btn-success" @click="signIn()">Go</a>
                                </div>
                            </div>
                                        <c-button @click="exportAccountFile">Download Account File</c-button>
                                        <c-button @click="importAccountFile">Import Account File</c-button>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </c-layout>
</template>


<script>
    import * as Bridge from '@/framework/desktop-bridge'

    export default {
        components: {
            'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve)
        },
        data() {
            return {
                errors: []
            }
        },
        methods: {
            signIn() {
                this.$store.dispatch('application/signIn')

                this.$router.push('/')
            },
            importAccountFile() {
                Bridge.sendCommand('importAccountFileRequest').then(() => {
                    window.location.reload()
                })
            }
        }
    }
</script>


<style lang="scss" scoped>

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
