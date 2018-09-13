<template>
    <c-layout navigationKey="account-navigation">
        <div class="content login-container" id="content">
            <div class="container">
                <div class="col-12">
                    <p class="errors" v-if="errors.length">
                        <strong>Please correct the following error(s):</strong>
                        <ul>
                            <li v-for="error in errors" :key="error">{{ error }}</li>
                        </ul>
                    </p>
                    <c-tabs :currentStep="current_step">
                        <c-tab name="Step 1" :selected="true" :showFooter="true">
                            <div class="tab-container">
                                <div class="tab-card">
                                    <h4>Personal Information</h4>
                                    <form action="/" method="post">
                                        <div class="row">
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">First name</label>
                                                    <input type="text" class="form-control" placeholder="First name"
                                                           name="first_name" v-model="account.first_name">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Last name</label>
                                                    <input type="text" class="form-control" placeholder="Last name"
                                                           name="last_name" v-model="account.last_name">
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
                                                    />
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">
                                                            <i class="fas fa-calendar-alt"></i>
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Email</label>
                                                    <input type="email" class="form-control" placeholder="Email"
                                                           name="email" v-model="account.email">
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="tab-card">
                                    <h4>Agreement</h4>
                                    <div class="terms_block">

                                        <h1>Terms and Conditions for <span class="highlight preview_company_name">BlockHub</span>
                                        </h1>

                                        <h2>Introduction</h2>

                                        <p>These Website Standard Terms and Conditions written on this webpage shall
                                            manage
                                            your use of our website, <span class="highlight preview_website_name">BlockHub</span>
                                            accessible at <span class="highlight preview_website_url">BlockHub.gg</span>.
                                        </p>

                                        <p>These Terms will be applied fully and affect to your use of this Website. By
                                            using this Website, you agreed to accept all terms and conditions written in
                                            here. You must not use this Website if you disagree with any of these
                                            Website
                                            Standard Terms and Conditions.</p>

                                        <p>Minors or people below 18 years old are not allowed to use this Website.</p>

                                        <h2>Intellectual Property Rights</h2>

                                        <p>Other than the content you own, under these Terms, <span
                                            class="highlight preview_company_name">Hyperbridge Technology Inc.</span> and/or its
                                            licensors
                                            own all the intellectual property rights and materials contained in this
                                            Website.</p>

                                        <p>You are granted limited license only for purposes of viewing the material
                                            contained on this Website.</p>

                                        <h2>Restrictions</h2>

                                        <p>You are specifically restricted from all of the following:</p>

                                        <ul>
                                            <li>publishing any Website material in any other media;</li>
                                            <li>selling, sublicensing and/or otherwise commercializing any Website
                                                material;
                                            </li>
                                            <li>publicly performing and/or showing any Website material;</li>
                                            <li>using this Website in any way that is or may be damaging to this
                                                Website;
                                            </li>
                                            <li>using this Website in any way that impacts user access to this
                                                Website;
                                            </li>
                                            <li>using this Website contrary to applicable laws and regulations, or in
                                                any
                                                way may cause harm to the Website, or to any person or business entity;
                                            </li>
                                            <li>engaging in any data mining, data harvesting, data extracting or any
                                                other
                                                similar activity in relation to this Website;
                                            </li>
                                            <li>using this Website to engage in any advertising or marketing.</li>
                                        </ul>

                                        <p>Certain areas of this Website are restricted from being access by you and
                                            <span
                                                class="highlight preview_company_name">Hyperbridge Technology Inc.</span> may further
                                            restrict
                                            access by you to any areas of this Website, at any time, in absolute
                                            discretion.
                                            Any user ID and password you may have for this Website are confidential and
                                            you
                                            must maintain confidentiality as well.</p>

                                        <h2>Your Content</h2>

                                        <p>In these Website Standard Terms and Conditions, “Your Content” shall mean any
                                            audio, video text, images or other material you choose to display on this
                                            Website. By displaying Your Content, you grant <span
                                                class="highlight preview_company_name">Hyperbridge Technology Inc.</span> a
                                            non-exclusive,
                                            worldwide irrevocable, sub licensable license to use, reproduce, adapt,
                                            publish,
                                            translate and distribute it in any and all media.</p>

                                        <p>Your Content must be your own and must not be invading any third-party's
                                            rights.
                                            <span class="highlight preview_company_name">Hyperbridge Technology Inc.</span> reserves
                                            the
                                            right to remove any of Your Content from this Website at any time without
                                            notice.</p>

                                        <h2>No warranties</h2>

                                        <p>This Website is provided “as is,” with all faults, and <span
                                            class="highlight preview_company_name">Hyperbridge Technology Inc.</span> express no
                                            representations or warranties, of any kind related to this Website or the
                                            materials contained on this Website. Also, nothing contained on this Website
                                            shall be interpreted as advising you.</p>

                                        <h2>Limitation of liability</h2>

                                        <p>In no event shall <span
                                            class="highlight preview_company_name">Hyperbridge Technology Inc.</span>, nor any of its
                                            officers, directors and employees, shall be held liable for anything arising
                                            out
                                            of or in any way connected with your use of this Website whether such
                                            liability
                                            is under contract. &nbsp;<span class="highlight preview_company_name">Hyperbridge Technology Inc.</span>,
                                            including its officers, directors and employees shall not be held liable for
                                            any
                                            indirect, consequential or special liability arising out of or in any way
                                            related to your use of this Website.</p>

                                        <h2>Indemnification<p></p>

                                            <p>You hereby indemnify to the fullest extent <span
                                                class="highlight preview_company_name">Hyperbridge Technology Inc.</span> from and
                                                against
                                                any and/or all liabilities, costs, demands, causes of action, damages
                                                and
                                                expenses arising in any way related to your breach of any of the
                                                provisions
                                                of these Terms.</p>

                                        </h2>
                                        <h2>Severability</h2>

                                        <p>If any provision of these Terms is found to be invalid under any applicable
                                            law,
                                            such provisions shall be deleted without affecting the remaining provisions
                                            herein.</p>

                                        <h2>Variation of Terms</h2>

                                        <p><span class="highlight preview_company_name">Hyperbridge Technology Inc.</span> is permitted
                                            to
                                            revise these Terms at any time as it sees fit, and by using this Website you
                                            are
                                            expected to review these Terms on a regular basis.</p>

                                        <h2>Assignment</h2>

                                        <p>The <span class="highlight preview_company_name">Hyperbridge Technology Inc.</span> is
                                            allowed
                                            to assign, transfer, and subcontract its rights and/or obligations under
                                            these
                                            Terms without any notification. However, you are not allowed to assign,
                                            transfer, or subcontract any of your rights and/or obligations under these
                                            Terms.</p>

                                        <h2>Entire Agreement</h2>

                                        <p>These Terms constitute the entire agreement between <span
                                            class="highlight preview_company_name">Hyperbridge Technology Inc.</span> and you in
                                            relation
                                            to your use of this Website, and supersede all prior agreements and
                                            understandings.</p>

                                        <h2>Governing Law &amp; Jurisdiction</h2>

                                        <p>These Terms will be governed by and interpreted in accordance with the laws
                                            of
                                            the State of <span class="highlight preview_country">Country</span>, and you
                                            submit to the non-exclusive jurisdiction of the state and federal courts
                                            located
                                            in <span class="highlight preview_country">Country</span> for the resolution
                                            of
                                            any disputes.</p>

                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center" slot="footer">
                                <c-switch
                                    :value="account.agreement"
                                    @change="account.agreement = !account.agreement"
                                    label_position="right"
                                    :customLabel="true"
                                >
                                    <template slot="label">
                                        I agree to the
                                        <a href="#" data-toggle="modal" data-target="#terms-modal">terms</a> and
                                        <a href="#" data-toggle="modal" data-target="#privacy-policy-modal">privacy policy</a>
                                    </template>
                                </c-switch>
                                <c-switch
                                    :value="account.newsletter"
                                    @change="account.newsletter = !account.newsletter"
                                    label="Sign up for our newsletter, get 100 HBX Bonus!"
                                    label_position="right"
                                />
                                <div>
                                    <c-button
                                        @click="checkForm"
                                        icon="angle-right"
                                    ></c-button>
                                </div>
                            </div>
                        </c-tab>
                        <c-tab name="Step 2" :showFooter="true">
                            <div class="tab-container">
                                <div class="padding-40">
                                    <h3>Welcome, {{ account.first_name }}. Let's build your main identity.</h3>
                                    <p>Be aware that all your future identities will be tied to this one</p>
                                    <div class="row margin-top-40">
                                        <div class="col">
                                            <div class="tab-card">
                                                <h4>Please complete</h4>
                                                <c-user-card/>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="tab-card">
                                                <h4>Preview your identity</h4>
                                                <c-user-card status="success" :user="{}"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-end" slot="footer">
                                <c-button variant="success" text="Next step" icon="fas fa-angle-right" icon_position="right" />
                            </div>
                        </c-tab>
                        <c-tab name="Step 3" :showFooter="true">
                            <div class="tab-container">
                                <div class="padding-20">
                                    <h3>Verify your identity (Optional)</h3>
                                    <p>Submit a proof of identity by your country of residence.<br>
                                        This is optional but allows you to start with 1000 trust after verification,
                                        allowing you to reassure reviews of other user's proofs of identity.
                                        You can skip and finish later.</p>
                                    <div class="row margin-top-40">
                                        <div class="col">
                                            <div class="identity-block finish">
                                                <div class="block-icon warning">
                                                    <i class="fas fa-exclamation-triangle"></i>
                                                </div>
                                                <div class="avatar">
                                                    <img src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"/>
                                                </div>
                                                <div class="user_info">
                                                    <div class="form-group margin-bottom-5">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            name="profile_name"
                                                            placeholder="Profile name"
                                                            readonly
                                                        />
                                                    </div>
                                                    <p>User</p>
                                                </div>
                                                <div class="unknown_blk">
                                                    <a href="#3">
                                                        <i class="fas fa-plus"></i>
                                                    </a>
                                                    <a href="#3">
                                                        <i class="fas fa-plus"></i>
                                                    </a>
                                                    <a href="#3">
                                                        <i class="fas fa-plus"></i>
                                                    </a>
                                                    <a href="#3">
                                                        <i class="fas fa-plus"></i>
                                                    </a>
                                                    <div class="counts">
                                                            <span>
                                                                0 <i class="fas fa-long-arrow-alt-down"></i>
                                                            </span>
                                                        <span>
                                                                0 <i class="fas fa-long-arrow-alt-up"></i>
                                                            </span>
                                                    </div>
                                                </div>
                                                <div class="wallet_number">
                                                    <div class="form-group">
                                                        <input type="text"
                                                               class="form-control"
                                                               name="wallet_number"
                                                               placeholder="Wallet number"
                                                               readonly
                                                        />
                                                    </div>
                                                    <button>
                                                        <i class="fas fa-copy"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="tab-card margin-top-5 margin-bottom-15">
                                                <div class="button_blk">
                                                    <div class="button">
                                                        select file
                                                    </div>
                                                    <div class="description">
                                                        <h5>Govermment Issued ID</h5>
                                                        <p>Maximum file size is 8mb</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-card">
                                                <div class="button_blk">
                                                    <div class="button">
                                                        select file
                                                    </div>
                                                    <div class="description">
                                                        <h5>Govermment Issued ID</h5>
                                                        <p>Maximum file size is 8mb</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row margin-top-40">
                                        <div class="col">
                                            <div class="verification-info">
                                                <div class="verification-icon success">
                                                    <i class="fas fa-lock"></i>
                                                </div>
                                                <div class="verification-text">
                                                    <h4>ID Verification Pending</h4>
                                                    <p>Identity Proof reviewed and approved by a high
                                                        trust profile. Gains 15% more trust for interactions.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="verification-info">
                                                <div class="verification-icon warning">
                                                    <i class="fas fa-exclamation-triangle"></i>
                                                </div>
                                                <div class="verification-text">
                                                    <h4>ID Verification Pending</h4>
                                                    <p>Identity Proof submited but not yet reviewed. Trust bonus of 5%
                                                        is activated</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="verification-info">
                                                <div class="verification-icon danger">
                                                    <i class="fas fa-exclamation-triangle"></i>
                                                </div>
                                                <div class="verification-text">
                                                    <h4>ID Verification Pending</h4>
                                                    <p>Identity Proof not submitted at all, trust must be gained by
                                                        simple interactions</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-end" slot="footer">
                                <c-button variant="success" text="Complete" icon="fas fa-check" icon_position="right" />
                            </div>
                        </c-tab>
                    </c-tabs>

                </div>
            </div>
        </div>

    </c-layout>
</template>


<script>
    export default {
        components: {
            'c-layout': () => import('@/ui/layouts/default'),
            'c-tab': () => import('@/ui/components/tab/tab'),
            'c-tabs': () => import('@/ui/components/tab/tabs'),
            'c-datepicker': () => import('vuejs-datepicker'),
            'c-user-card': () => import('@/ui/components/user-card')
        },
        data() {
            return {
                current_step: 1,
                steps: 3,
                errors: [],
                account: {
                    first_name: '',
                    last_name: '',
                    birthday: '',
                    email: '',
                    agreement: false,
                    newsletter: false,
                    img: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1'
                }
            }
        },
        methods: {
            checkForm(e) {
                this.errors = []

                if (this.current_step === 1) {
                    if (this.account.first_name && this.account.last_name && this.account.email && this.account.agreement) {
                        this.current_step = 2;
                    } else {

                        if (!this.account.first_name) {
                            this.errors.push('First name required.')
                        }
                        if (!this.account.last_name) {
                            this.errors.push('Last name required.')
                        }
                        if (!this.account.birthday) {
                            this.errors.push('Birthday required.')
                        }
                        if (!this.account.email) {
                            this.errors.push('Email required.')
                        }
                        if (!this.account.agreement) {
                            this.errors.push('You must agree to the terms & conditions to use BlockHub.')
                        }

                    }
                } else if (this.current_step === 2) {
                    this.current_step = 3;
                } else if (this.current_step === 3) {

                }
            }
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

    .identity-block {
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
        .wallet_number {
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
