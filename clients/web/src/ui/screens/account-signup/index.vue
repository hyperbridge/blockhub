<template>
    <c-layout navigationKey="account" :showLeftPanel="false" :showRightPanel="false" :showShortcuts="false">
        <!-- <div class="content login-container" id="content">
            <div class="container">
                <div class="col-12">
                    <p class="errors" v-if="errors.length">
                        <strong>Please correct the following error(s):</strong>
                        <ul>
                            <li v-for="error in errors" :key="error">{{ error }}</li>
                        </ul>
                    </p>
                    <form action="/" method="post">
                        <c-tabs
                            :active_tab_prop="currentStep"
                            :lockedStep="finishedStep"
                            @click="changeTab($event)"
                            tabText="Step"
                            styled
                        >
                            <c-tab :tab_id="1" :selected="true" :showFooter="true">
                                <div class="tab-container">
                                    <div class="tab-card">
                                        <h4>Personal Information</h4>
                                        <div class="row">
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Email</label>
                                                    <input type="email" class="form-control" placeholder="Email"
                                                            name="email" v-model="account.email">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Given Name</label>
                                                    <input type="text" class="form-control" placeholder="Given Name"
                                                            name="firstName" v-model="account.firstName">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Family Name</label>
                                                    <input type="text" class="form-control" placeholder="Family Name"
                                                            name="lastName" v-model="account.lastName">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="input-group">
                                                    <label class="sr-only">Birthday</label>
                                                    <c-datepicker
                                                        v-model="account.birthday"
                                                        placeholder="Birthday"
                                                        input-class="form-control form-calendar__text"
                                                        name="birthday"
                                                        calendar-class="form-calendar"
                                                        minimumView="day"
                                                        maximumView="year"
                                                        initialView="year"
                                                        :format="customBirthdayFormatter"
                                                    />
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">
                                                            <i class="fas fa-calendar-alt"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-card">
                                        <h4>Agreement</h4>
                                        <div class="terms_block">
                                            <c-terms-block />
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center margin-top-20" slot="footer">
                                    <c-switch
                                        v-model="account.agreement"
                                        label_position="right"
                                        :customLabel="true"
                                    >
                                        <template slot="label">
                                            I agree to the
                                            <c-button status="plain" @click="terms = true">terms</c-button> and
                                            <c-button status="plain" @click="privacy_policy = true">privacy policy</c-button>
                                        </template>
                                    </c-switch>
                                    <c-switch
                                        v-model="account.newsletter"
                                        label="Sign up for our newsletter, get 100 HBX Bonus!"
                                        label_position="right"
                                    />
                                    <div>
                                        <c-button
                                            @click="checkForm()"
                                            :class="{'disabled': !account.agreement}"
                                        >CONTINUE</c-button>
                                    </div>
                                </div>
                            </c-tab>
                            <c-tab :tab_id="2" :showFooter="true">
                                <div class="tab-container">
                                    <div class="padding-40 loading-process" style="position: relative" v-if="!passphrase">
                                        <div class="loading loading--w-spinner"><div><div class="loading-spinner"></div></div></div>
                                    </div>
                                    <div class="tab-card" v-if="passphrase">
                                        <h4>Security</h4>
                                        
                                        <div class="row">
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Password</label>
                                                    <input type="password" class="form-control" placeholder="Password"
                                                            name="password" v-model="account.password">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Secret Question #1</label>
                                                    <select id="secretQuestion1" name="secretQuestion1" class="form-control" v-model="account.secretQuestion1">
                                                        <option value="" selected>Choose Secret Question</option>
                                                        <option value="lastName_first_kissed">What is the first name of the person you first kissed?</option>
                                                        <option value="firstName_favorite_aunt_uncle">What is the first name of the your favorite aunt or uncle?</option>
                                                        <option value="favorite_high_school_teacher">What is the last name of your favorite teacher in high school?</option>
                                                        <option value="lastName_teacher_failing_grade">What is the last name of the teacher who gave you your first failing grade?</option>
                                                        <option value="wedding_reception">What is the name of the plac eyour wedding reception was held?</option>
                                                        <option value="city_sibling_live">In what city or town does your nearest sibling live?</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Secret Question #2</label>
                                                    <select id="secretQuestion2" name="secretQuestion2" class="form-control" v-model="account.secretQuestion2">
                                                        <option value="" selected>Choose Secret Question</option>
                                                        <option value="lastName_first_kissed">What is the first name of the person you first kissed?</option>
                                                        <option value="firstName_favorite_aunt_uncle">What is the first name of the your favorite aunt or uncle?</option>
                                                        <option value="favorite_high_school_teacher">What is the last name of your favorite teacher in high school?</option>
                                                        <option value="lastName_teacher_failing_grade">What is the last name of the teacher who gave you your first failing grade?</option>
                                                        <option value="wedding_reception">What is the name of the plac eyour wedding reception was held?</option>
                                                        <option value="city_sibling_live">In what city or town does your nearest sibling live?</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Repeat Password</label>
                                                    <input type="password" class="form-control" placeholder="Password again"
                                                            name="repeat_password" v-model="account.repeat_password">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Answer #1</label>
                                                    <input type="text" class="form-control" placeholder="Secret Answer #1"
                                                            name="secret_answer_1" v-model="account.secret_answer_1">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Answer #2</label>
                                                    <input type="text" class="form-control" placeholder="Secret Answer #2"
                                                            name="secret_answer_2" v-model="account.secret_answer_2">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-card" v-if="!verifyingPassphrase" hidden>
                                    <p>We've generated a passphrase for you. You can change it, but it's not recommended. This is used to access, create &amp; change your data. If you ever need to recover it, you can use your password. If you forget your password, you can use your secret question AND your birthday. We do this to protect you against hackers, however don't lose them, otherwise it will be impossible to recover the account.</p>

                                    <p>Make sure to write down your passphase, password, and secret answers and put it somewhere safe.</p>

                                    <div class="passphrase">
                                        <input type="text" class="form-control" v-for="(word, index) in passphrase" :key="index" :value="word" @keyup="passphrase[index] = $event.target.value" />
                                    </div>

                                    <c-button class="plain" @click="showPassphrase()" v-if="verifyingPassphrase"> </c-button> 
                                    <br /><br />

                                    <c-button class="c-btn-lg" @click="startVerification()">Got it</c-button>
                                </div>
                                <div class="tab-card" v-if="verifyingPassphrase" hidden>
                                    <p>We've generated a passphrase for you. You can change it, but it's not recommended. This is used to access, create &amp; change your data. If you ever need to recover it, you can use your password. If you forget your password, you can use your secret question AND your birthday. We do this to protect you against hackers, however don't lose them, otherwise it will be impossible to recover the account.</p>

                                    <p>Make sure to write down your passphase, password, and secret answers and put it somewhere safe.</p>

                                    <div class="passphrase" ref="passphraseVerification">
                                        <input type="text" class="form-control" v-for="(word, index) in repeatPassphrase" :key="index" :value="word" @keyup="repeatPassphrase[index] = $event.target.value" />
                                    </div>

                                    <c-button class="plain" @click="showPassphrase()" v-if="verifyingPassphrase">Show Passphrase Again</c-button> 
                                    <br /><br />

                                    <c-button class="c-btn-lg" @click="confirmVerification()" v-if="verifyingPassphrase">Verify Now</c-button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center margin-top-20" slot="footer" v-if="verifiedPassphrase">
                                    <c-switch
                                        v-model="agreeStoredPassphrase"
                                        label="I have safely stored my passphrase"
                                        label_position="right"
                                        v-if="false && verifiedPassphrase"
                                    />
                                    <c-switch
                                        v-model="account.encrypt_passphrase"
                                        label="I want to encrypt my passphrase with my password"
                                        label_position="right"
                                        v-if="false && verifiedPassphrase"
                                    />
                                    <div>
                                        <c-button
                                            @click="checkForm()"
                                            v-if="verifiedPassphrase"
                                        >CONTINUE</c-button>
                                    </div>
                                </div>
                            </c-tab>
                            <c-tab :tab_id="3">
                                <div class="tab-container">
                                    <div class="tab-card">
                                        <h3>Congratulations!</h3>
                                        <p>That's it! You're now a member of BlockHub, and the future of decentralized protocols.<br />
                                        We hope you enjoy many years of success with BlockHub and the Hyperbridge family!</p>

                                        <br />
                                        <c-button
                                            class="c-btn-lg outline-green"
                                            @click="checkForm()"
                                        >Continue to BlockHub</c-button>
                                    </div>
                                </div>
                            </c-tab>
                        </c-tabs>
                    </form>
                </div>
            </div>
        </div> -->

        <c-popup title="Terms" :activated="terms" @close="terms = false" width="800">
            <div class="scroll_block">
                <c-terms-block />
            </div>
        </c-popup>

        <c-popup title="Privacy policy" :activated="privacy_policy" @close="privacy_policy = false" width="800">
            <div class="scroll_block">
                <c-privacy-block />
            </div>
        </c-popup>

    </c-layout>
</template>


<script>
import * as Bridge from '@/framework/desktop-bridge'
import moment from 'moment'

export default {
    components: {
        'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
        'c-datepicker': (resolve) => require(['vuejs-datepicker'], resolve),
        'c-user-card': (resolve) => require(['@/ui/components/user-card'], resolve),
        'c-privacy-block': (resolve) => require(['@/ui/components/privacy-block'], resolve),
        'c-terms-block': (resolve) => require(['@/ui/components/terms-block'], resolve),
        'c-popup': (resolve) => require(['@/ui/components/popups'], resolve),
        'c-tabs': (resolve) => require(['@/ui/components/tab/tabs-universal'], resolve),
        'c-tab': (resolve) => require(['@/ui/components/tab/tab-universal'], resolve),
    },
    data() {
        return {
            writtenDown: false,
            verifyingPassphrase: true,
            verifiedPassphrase: true,
            agreeStoredPassphrase: true,
            currentStep: 1,
            finishedStep: 1,
            steps: 3,
            passphrase: [],
            repeatPassphrase: [],
            errors: [],
            account: {
                firstName: '',
                lastName: '',
                birthday: '',
                email: '',
                password: '',
                repeat_password: '',
                secretQuestion1: '',
                secretQuestion2: '',
                secret_answer_1: '',
                secret_answer_2: '',
                agreement: false,

                // firstName: 'Eric',
                // lastName: 'Muyser',
                // birthday: '26 Mar 1952',
                // email: 'eric@muyser.com',
                // password: '1234',
                // repeat_password: '1234',
                // secretQuestion1: 'firstName_favorite_aunt_uncle',
                // secretQuestion2: 'firstName_favorite_aunt_uncle',
                // secret_answer_1: 'larry',
                // secret_answer_2: 'larry',
                // agreement: true,

                newsletter: true,
                passphrase: null,
                repeat_passphrase: null,
                encrypt_passphrase: true,
                profile: {
                    name: '',
                    img: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
                    wallet: ''
                }
            },
            terms: false,
            privacy_policy: false
        }
    },
    methods: {
        checkForm() {
            this.errors = [];

            if (this.currentStep === 1) {
                if (
                    this.account.firstName
                    && this.account.lastName
                    && this.account.email
                    && this.account.birthday
                    && this.account.agreement
                ) {
                    Bridge.getPassphraseRequest({
                        seed: 13891737193, // TODO:  remove hardcode. should derived from input data + mouse movement
                    }).then((res) => {
                        this.passphrase = res.split(' ')
                        this.repeatPassphrase = res.split(' ')
                        // this.repeatPassphrase[2] = ''
                        // this.repeatPassphrase[4] = ''
                        // this.repeatPassphrase[8] = ''

                        this.finishedStep = 1;
                        this.currentStep = 2;
                    })
                } else {
                    if (!this.account.firstName) {
                        this.errors.push('First name required.')
                    }
                    if (!this.account.lastName) {
                        this.errors.push('Last name required.')
                    }
                    if (!this.account.birthday) {
                        this.errors.push('Birthday required.')
                    }
                    if (!this.account.email) {
                        this.errors.push('Email required.')
                    }
                    if (!this.account.agreement) {
                        this.errors.push('To continue using BlockHub, you will need to review and agree to the Terms & Service Agreement.')
                    }
                    
                }
            } else if (this.currentStep === 2) {
                const passphraseOriginal = this.passphrase.join(' ')
                const passphraseVerification = this.repeatPassphrase.join(' ')

                if (this.account.secretQuestion1
                    && this.account.secret_answer_1
                    && this.account.secretQuestion2
                    && this.account.secret_answer_2
                    && this.account.password
                    && this.account.repeat_password
                    && this.account.password === this.account.repeat_password
                    && this.agreeStoredPassphrase
                    && !this.passphrase.includes('')
                    && !this.repeatPassphrase.includes('')
                    && passphraseOriginal === passphraseVerification) {
                        Bridge.createAccountRequest({
                            seed: 13891737193, // TODO:  remove hardcode. should derived from input data + mouse movement
                            firstName: this.account.firstName,
                            lastName: this.account.lastName,
                            email: this.account.email,
                            birthday: moment(this.account.birthday).format('DD-MM-YYYY'),
                            password: this.account.password,
                            passphrase: passphraseOriginal,
                            encrypt_passphrase: this.account.encrypt_passphrase,
                            secretQuestion1: this.account.secretQuestion1,
                            secret_answer_1: this.account.secret_answer_1,
                            secretQuestion2: this.account.secretQuestion2,
                            secret_answer_2: this.account.secret_answer_2
                        }).then((res) => {
                            this.finishedStep = 2;
                            this.currentStep = 3;

                            this.$store.dispatch('application/updateState', {
                                account: { ...this.$store.state.application.account, ...res.account },
                                locked: false,
                                signedIn: true
                            })
                        })
                } else {
                    if (!this.account.password) {
                        this.errors.push('Password required.')
                    }
                    if (!this.account.repeat_password) {
                        this.errors.push('Repeat password required.')
                    }
                    if (this.account.password !== this.account.repeat_password) {
                        this.errors.push('Passwords must match.')
                    }
                    if (!this.account.secretQuestion1) {
                        this.errors.push('Secret Question 1 required.')
                    }
                    if (!this.account.secret_answer_1) {
                        this.errors.push('Secret Answer 1 required.')
                    }
                    if (!this.account.secretQuestion2) {
                        this.errors.push('Secret Question 2 required.')
                    }
                    if (!this.account.secret_answer_2) {
                        this.errors.push('Secret Answer 2 required.')
                    }
                    if (!this.agreeStoredPassphrase) {
                        this.errors.push('Please agree that you\'ve stored your passphrase somewhere safe.')
                    }
                    if (this.passphrase.includes('') || this.repeatPassphrase.includes('')) {
                        this.errors.push('Passphrase must be filled in.')
                    }
                    if (passphraseOriginal !== passphraseVerification) {
                        this.errors.push('Passphrase does not match.')
                    }
                }
                
            } else if (this.currentStep === 3) {
                this.finishedStep = 3;
                this.$router.push({ path: '/' })
            }
        },
        changeTab(step) {
            if (step > this.currentStep) {
                this.checkForm();
            } else {
                this.currentStep = step;
            }
        },
        customBirthdayFormatter(date) {
            return moment(date).format('DD-MM-YYYY')
        },
        showPassphrase() {
            this.errors = []

            this.verifyingPassphrase = false
        },
        startVerification() {
            this.errors = []

            this.verifyingPassphrase = true
        },
        confirmVerification() {
            this.errors = []

            const passphraseOriginal = this.passphrase.join(' ')
            const passphraseVerification = this.repeatPassphrase.join(' ')//$.map($(this.$refs.passphraseVerification).find('input'), (item) => $(item).val()).join(' ')

            if (!this.passphrase.includes('')
                && !this.repeatPassphrase.includes('')
                && passphraseOriginal === passphraseVerification) {
                this.verifiedPassphrase = true
                return
            }

            if (this.passphrase.includes('') || this.repeatPassphrase.includes('')) {
                this.errors.push('Passphrase must be filled in.')
            }
            if (passphraseOriginal !== passphraseVerification) {
                this.errors.push('Passphrase does not match.')
            }
        }
    },
    created() {
        this.$store.commit('application/activateModal', 'register')
    }
}
</script>


<style lang="scss" scoped>
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

    .profile-block {
        padding: 10px;
        background: #303046;
        border-radius: 5px;
        border: 1px solid #28273a;
        display: inline-block;
        overflow: hidden;
        width: 100%;
        position: relative;
        .block-icon {
            position: absolute;
            top: 10px;
            right: 10px;
            color: #303046;
            font-size: 16px;
            text-align: center;
            line-height: 25px;
            border-radius: 100%;
            width: 25px;
            height: 25px;
            &.done {
                background: #00a100;
            }
            &.warning {
                background: #ff6c5e;
                font-size: 13px;
            }
        }
        .avatar {
            width: 60px;
            height: 60px;
            display: inline-block;
            float: left;
            font-size: 60px;
            text-align: center;
            background: #1f202f;
            border-radius: 100%;
            border: 1px solid #1c1c2a;
            img {
                width: 60px;
                height: 60px;
                object-fit: cover;
            }
            a {
                img {
                    width: 28px;
                    height: auto;
                    vertical-align: middle;
                    margin-top: 12px;
                }
            }
        }
        .user_info {
            display: inline-block;
            float: right;
            width: calc(100% - 75px);
        }
        .unknown_blk {
            display: inline-block;
            float: left;
            width: 100%;
            margin: 10px 0;
            a {
                width: 35px;
                height: 35px;
                display: inline-block;
                float: left;
                border-radius: 100%;
                text-align: center;
                line-height: 33px;
                font-size: 16px;
                border: 1px solid #3b3b55;
                background: transparent;
                margin: 5px 10px 5px 0;
                color: rgba(255, 255, 255, 0);
                &:hover,
                &:first-child {
                    color: #6473f4;
                    background: #222131;
                    border: 1px solid #1b1b28;
                }
            }
        }
        .walletNumber {
            .form-group {
                display: inline-block;
                width: calc(100% - 40px);
                float: left;
                margin-bottom: 0;
            }
            button {
                display: inline-block;
                float: right;
                width: 30px;
                font-size: 18px;
                color: #ff5454;
                padding: 0;
                border: none;
                height: 38px;
                background: transparent;
                &:focus,
                &:active {
                    box-shadow: none;
                    outline: none;
                }
            }
        }
        &.finish {
            background: #1d2031;
            input:read-only {
                border: none;
                background: transparent;
                box-shadow: none;
                color: #fff;
                padding: 9px 0;
            }
            .unknown_blk {
                a {
                    border-color: #404354;
                    color: #404354;
                }
                .counts {
                    display: inline-block;
                    float: right;
                    span {
                        width: 45px;
                        font-size: 15px;
                        color: #fff;
                        line-height: 45px;
                        display: inline-block;
                        text-align: right;
                        i {
                            font-size: 18px;
                            margin-left: 5px;
                        }

                    }
                }
            }
            button {
                color: #fff;
            }
        }
    }

    .button_blk {
        overflow: hidden;
        display: block;
        .button {
            display: inline-block;
            width: 120px;
            padding: 20px;
            text-transform: uppercase;
            border-radius: 5px;
            background: #5b67db;
            color: #fff;
            border: none;
            float: left;
            cursor: pointer;
        }
        .description {
            display: inline-block;
            float: right;
            width: calc(100% - 135px);
            font-size: 14px;
            h5 {
                margin-bottom: 5px;
                font-size: 14px;
            }
        }
    }

    .verification-info {
        display: inline-block;
        width: 100%;
        float: left;
        .verification-icon {
            display: inline-block;
            width: 30px;
            height: 30px;
            text-align: center;
            line-height: 28px;
            color: #1d2031;
            font-size: 15px;
            border-radius: 100%;
            &.success {
                background: #43ca85;
            }
            &.warning {
                background: #f8dc78;
            }
            &.danger {
                background: #f5595d;
            }
        }
        .verification-text {
            display: inline-block;
            float: right;
            width: calc(100% - 45px);
        }
    }

    .input-group {
        flex-wrap: nowrap;
    }

    .c-popup{
        .scroll_block{
            max-height: 500px;
            overflow-y: auto;
            padding: 20px;
            text-align: left;
        }
    }

    .passphrase {
        input {
            display: inline;
            margin-right: 5px;
            margin-top: 5px;
            width: 7.8%;
        }
    }

</style>

<style lang="scss">
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
