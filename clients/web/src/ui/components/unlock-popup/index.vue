<template>
    <c-popup :activated="activated" type="custom" ref="modal" width="250">
        <div slot="custom_close" hidden></div>
        <div class="unlock-modal" slot="custom_content">
            <div class="tab-container">
                <div class="tab-card">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <h3>Password</h3>
                                <label class="sr-only">Password</label>
                                <input type="password" name="password" ref="password" placeholder="Password" class="form-control" @keyup.enter="unlock()" v-focus />
                                <br />
                                <c-button ref="submit" class="c-btn-lg" @click="unlock()">Unlock</c-button>
                                <br />
                                <p class="margin-top-20"><span style="color: #aaa">Can't remember?</span> <c-button class="plain" @click="recovery = true">Recover your account</c-button></p>
                                <div class="row recovery-box" v-if="recovery">
                                    <div class="col-12" v-if="!password">
                                        <div class="form-group">
                                            <label class="sr-only">Enter your secret question #1</label>
                                            <!-- http://goodsecurityquestions.com/examples/ -->
                                            <p>{{ secretQuestion1 }}</p>
                                            <div class="input-group mb-4">
                                                <input type="text" class="form-control" placeholder="Secret Answer"
                                                        name="secretAnswer1" v-model="secretAnswer1">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12" v-if="!password">
                                        <div class="input-group">
                                            <p>What is your birthday?</p>
                                            <label class="sr-only">Enter your birthday</label>
                                            <c-datepicker
                                                v-model="birthday"
                                                placeholder="Birthday"
                                                input-class="form-control form-calendar__text"
                                                name="birthday"
                                                calendar-class="form-calendar"
                                                minimumView="day"
                                                maximumView="year"
                                                initialView="year"
                                                :format="customBirthdayFormatter"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-12 margin-bottom-20" v-if="!password">
                                        <c-button class="outline-green" @click="recoverPassword">Submit</c-button>
                                    </div>
                                    <div class="col-12" v-if="recoveryError">
                                        <div class="alert alert-danger mb-4">{{ recoveryError }}</div>
                                    </div>
                                    <p class="col-12" v-if="password">
                                        <strong>Success!</strong>
                                        <br /> 
                                        Your password has been recovered without a third-party. It was all you. Isn't that awesome? Now don't lose it!
                                        <br /><br />
                                        <strong>Your password is:</strong>
                                        <br />
                                        {{ password }}
                                        <br /><br />
                                        <c-button @click="recovery = false">I Understand</c-button>
                                    </p>
                                    <div class="col-12" v-if="!password">
                                        <p><strong>Can't remember?</strong></p>
                                        <p><em>If you can't remember, you can download your account file, reset your account and try again later.</em></p>
                                        <p><c-button @click="exportAccount">Export Saved Account</c-button></p>
                                        <p><c-button @click="clearAccount">Clear Saved Account</c-button></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </c-popup>
</template>

<script>
    import * as Bridge from '@/framework/desktop-bridge'
    import * as DB from '@/db'
    import moment from 'moment'

    export default {
        props: ['activated'],
        components: {
            'c-popup': (resolve) => require(['@/ui/components/popups'], resolve),
            'c-datepicker': (resolve) => require(['vuejs-datepicker'], resolve),
            'c-tabs': (resolve) => require(['@/ui/components/tab/tabs'], resolve),
            'c-tab': (resolve) => require(['@/ui/components/tab/tab'], resolve),
        },
        methods: {
            unlock() {
                $(this.$refs.submit.$el).removeClass('wrong')

                this.$store.dispatch('application/unlockAccount', { password: this.$refs.password })
            },
            recoverPassword() {
                this.recoveryError = null

                Bridge.sendCommand('recoverPasswordRequest', {
                    secretQuestion1: this.secretQuestion1,
                    secretAnswer1: this.secretAnswer1.toLowerCase(),
                    birthday: moment(this.birthday).format('DD-MM-YYYY'),
                }).then((data) => {
                    if (data.error) {
                        this.recoveryError = data.error.message

                        return
                    }

                    this.recoveryError = null
                    this.password = data.password
                })
            },
            customBirthdayFormatter(date) {
                return moment(date).format('DD-MM-YYYY')
            },
            exportAccount() {
                Bridge.sendCommand('exportAccountFileRequest')
            },
            clearAccount() {
                Bridge.sendCommand('deleteAccountRequest')
            }
        },
        computed: {
            secretQuestion1() {
                if (!DB.application.config.data[0].account.secretQuestion1) return "Secret question not found"

                const expanded = {}
                expanded["lastName_first_kissed"] = "What is the first name of the person you first kissed?"
                expanded["firstName_favorite_aunt_uncle"] = "What is the first name of the your favorite aunt or uncle?"
                expanded["favorite_high_school_teacher"] = "What is the last name of your favorite teacher in high school?"
                expanded["lastName_teacher_failing_grade"] = "What is the last name of the teacher who gave you your first failing grade?"
                expanded["wedding_reception"] = "What is the name of the plac eyour wedding reception was held?"
                expanded["city_sibling_live"] = "In what city or town does your nearest sibling live?"

                return expanded[DB.application.config.data[0].account.secretQuestion1]
            }
        },
        data() {
            return {
                recovery: false,
                password: null,
                secretAnswer1: null,
                birthday: null,
                recoveryError: null
            }
        },
        created() {
            Bridge.on('promptPasswordRequest', (data) => {
                if (data.error) {
                    $(this.$refs.submit.$el).addClass('wrong')

                    setTimeout(() => {
                        $(this.$refs.submit.$el).removeClass('wrong')
                    }, 350)
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .c-popup {
        background: #383853 !important;
    }
    .unlock-modal{
        background: transparent;
        color: #fff;
    }
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
        .c-btn {
            border: 2px solid transparent;

            &.wrong {
                position: relative;
                left: 0;
                border-color: #ed1c24;
                animation: wrong-log 0.3s;
            }
        }
    }

    .recovery-box {
        border: 3px dashed rgba(0, 0, 0, .4);
        padding: 20px;
        margin-top: 20px;
        background: #515171;
    }

    @keyframes wrong-log {
        0%, 100% {left: 0px;}
        20%, 60% {left: 15px;}
        40% , 80% {left: -15px;}
    }
</style>

<style lang="scss">
    .vdp-datepicker {
        width: 100%;
    }

    .form-calendar {
        background-color: #27273A !important;
        border-color: rgba(255,255,255,.2) !important;
        box-shadow: 0 0 15px rgba(1, 1, 1, .35);
        .up:hover, .up:focus {
            color: black !important;
        }
    }
    .form-calendar__text, .form-calendar__text:focus {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.4) inset;
        border: none !important;
        background-color: #303049 !important;
    }
</style>
