<template>
    <c-layout navigationKey="account-navigation" :showLeftPanel="false" :showRightPanel="false">
        <div class="content login-container" id="content">
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
                                    </div>
                                    <div class="tab-card">
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
                                                    <label class="sr-only">Repeat Password</label>
                                                    <input type="password" class="form-control" placeholder="Password again"
                                                            name="repeat_password" v-model="account.repeat_password">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Secret Question</label>
                                                    <!-- http://goodsecurityquestions.com/examples/ -->
                                                    <select id="secret_question" name="secret_question" class="form-control" v-model="account.secret_question">
                                                        <option value="" selected>Choose Secret Question</option>
                                                        <option value="last_name_first_kissed">What is the first name of the person you first kissed?</option>
                                                        <option value="first_name_favorite_aunt_uncle">What is the first name of the your favorite aunt or uncle?</option>
                                                        <option value="favorite_high_school_teacher">What is the last name of your favorite teacher in high school?</option>
                                                        <option value="last_name_teacher_failing_grade">What is the last name of the teacher who gave you your first failing grade?</option>
                                                        <option value="wedding_reception">What is the name of the plac eyour wedding reception was held?</option>
                                                        <option value="city_sibling_live">In what city or town does your nearest sibling live?</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Answer #1</label>
                                                    <input type="text" class="form-control" placeholder="Your secret answer"
                                                            name="secret_answer" v-model="account.secret_answer">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <p>If you ever need to recover your password, you will need the answer to this secret question AND your birthday. With these two you will be able to recover your password, which will allow you to recover your account. If your account is compromised, you should transfer your funds immediately.</p>
                                            </div>
                                        </div>
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
                                            icon="angle-right"
                                        >NEXT</c-button>
                                    </div>
                                </div>
                            </c-tab>
                            <c-tab :tab_id="2" :showFooter="true">
                                <div class="tab-container">
                                    <div class="padding-40 loading-process" style="position: relative" v-if="!account.passphrase">
                                        <div class="loading loading--w-spinner"><div><div class="loading-spinner"></div></div></div>
                                    </div>
                                    <div class="padding-40" v-else>
                                        <h3>Welcome, {{ account.first_name }}!</h3>
                                        <p>Make sure to write down your keyphase, password, and secret answer and put it somewhere safe.</p>

                                        <br />
                                        <p v-if="!verifyingPassphrase">Lets verify you've stored your passphrase somewhere safely.</p>
                                        <p v-if="verifyingPassphrase">Please fill in the missing blanks below.</p>

                                        <br />
                                        <div class="passphrase" v-if="account.passphrase && !verifyingPassphrase">
                                            <input type="text" class="form-control" v-for="(word, index) in account.passphrase.split(' ')" :key="index" :value="word" disabled />
                                        </div>
                                        <div class="passphrase" ref="passphraseVerification" v-if="account.passphrase && verifyingPassphrase">
                                            <input type="text" class="form-control" v-for="(word, index) in account.passphrase.split(' ')" :key="index" :value="[2, 4, 8, 13].includes(index) ? '' : word" />
                                        </div>

                                        <br />
                                        <c-button class="c-btn-lg" v-if="!verifyingPassphrase" @click="verifyPassphrase()">Verify Now</c-button>
                                        <c-button class="c-btn-lg" v-if="verifyingPassphrase" @click="showPassphrase()">Show Passphrase Again</c-button>

                                        <br /><br />
                                        <p v-if="verifyingPassphrase">When you're ready proceed to the next step where we will build your public identity. After that you're off to the races!</p>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center margin-top-20" slot="footer">
                                    <c-switch
                                        v-model="account.stored_passphrase"
                                        label="I have safely stored my passphrase"
                                        label_position="right"
                                        v-if="verifyingPassphrase"
                                    />
                                    <c-switch
                                        v-model="account.encrypt_passphrase"
                                        label="I want to encrypt my passphrase with my password"
                                        label_position="right"
                                        v-if="verifyingPassphrase"
                                    />
                                    <c-button
                                        @click="checkForm()"
                                        icon="angle-right"
                                        v-if="verifyingPassphrase"
                                    >NEXT</c-button>
                                </div>
                            </c-tab>
                            <c-tab :tab_id="3">
                                <div class="tab-container">
                                    <div class="padding-20">
                                        <h3>Congratulations!</h3>
                                        <p>That's it. You're now a member of BlockHub, and the future of decentralized protocols.</p>
                                        <div class="verification-icon success">
                                            <i class="fas fa-lock"></i>
                                        </div>

                                        <h3>Now let's build your main identity. Don't worry, you can have more than one identity.</h3>
                                        <div class="row margin-top-40">
                                            <div class="col">
                                                <div class="tab-card">
                                                    <h4>Setup your identity</h4>
                                                    <c-user-card
                                                        :user="account.identity"
                                                        v-bind.sync="account.identity"
                                                    />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="tab-card">
                                                    <h4>Preview</h4>
                                                    <c-user-card
                                                        :user="account.identity"
                                                        previewMode
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-end margin-top-20" slot="footer">
                                    <c-button
                                        status="success"
                                        icon="check"
                                        icon_position="right"
                                    >COMPLETE</c-button>
                                </div>
                            </c-tab>
                        </c-tabs>
                    </form>
                </div>
            </div>
        </div>

        <c-popup title="Terms" :activated="terms" @close="terms = false" width="800">
            <div class="scroll_block">

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
        </c-popup>

        <c-popup title="Privacy policy" :activated="privacy_policy" @close="privacy_policy = false" width="800">
            <div class="scroll_block">

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
        </c-popup>

    </c-layout>
</template>


<script>
import * as DesktopBridge from '@/framework/desktop-bridge'

export default {
    components: {
        'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
        'c-tab': (resolve) => require(['@/ui/components/tab/tab'], resolve),
        'c-tabs': (resolve) => require(['@/ui/components/tab/tabs'], resolve),
        'c-datepicker': (resolve) => require(['vuejs-datepicker'], resolve),
        'c-user-card': (resolve) => require(['@/ui/components/user-card'], resolve),
        'c-popup': (resolve) => require(['@/ui/components/popups'], resolve),
        'c-tabs': (resolve) => require(['@/ui/components/tab/tabs-universal'], resolve),
        'c-tab': (resolve) => require(['@/ui/components/tab/tab-universal'], resolve),
    },
    data() {
        return {
            verifyingPassphrase: false,
            currentStep: 1,
            finishedStep: 1,
            steps: 3,
            errors: [],
            account: {
                first_name: 'Eric',
                last_name: 'Muyser',
                birthday: '03 Mar 1987',
                email: 'eric@muyser.com',
                password: '1234',
                repeat_password: '1234',
                secret_question: 'first_name_favorite_aunt_uncle',
                secret_answer: 'shelly',
                agreement: true,
                newsletter: false,
                passphrase: null,
                stored_passphrase: false,
                encrypt_passphrase: true,
                identity: {
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
                    this.account.first_name
                    && this.account.last_name
                    && this.account.email
                    && this.account.birthday
                    && this.account.agreement
                    && this.account.secret_question
                    && this.account.secret_answer
                    && this.account.password
                    && this.account.repeat_password
                    && this.account.password === this.account.repeat_password
                ) {
                    DesktopBridge.createAccountRequest({
                        seed: 13891737193, // TODO:  remove hardcode. should derived from input data + mouse movement
                        first_name: this.account.first_name,
                        last_name: this.account.last_name,
                        email: this.account.email,
                        password: this.account.password,
                        birthday: this.account.birthday,
                        secret_question: this.account.secret_question,
                        secret_answer: this.account.secret_answer
                    }).then((res) => {
                        this.account = { ...this.account, ...res.account }

                        this.finishedStep = 1;
                        this.currentStep = 2;
                    })
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
                        this.errors.push('To continue using BlockHub, you will need to review and agree to the Terms & Service Agreement.')
                    }
                    if (!this.account.password) {
                        this.errors.push('Password required.')
                    }
                    if (!this.account.repeat_password) {
                        this.errors.push('Repeat password required.')
                    }
                    if (this.account.password !== this.account.repeat_password) {
                        this.errors.push('Passwords must match.')
                    }
                }
            } else if (this.currentStep === 2) {
                const passphraseVerification = $.map($(this.$refs.passphraseVerification).find('input'), (item) => $(item).val()).join(' ')

                if (this.account.passphrase === passphraseVerification) {
                    DesktopBridge.updateAccountRequest({
                        passphrase: this.account.passphrase,
                        encrypt_passphrase: this.account.encrypt_passphrase,
                    }).then((res) => {
                        this.finishedStep = 2;
                        this.currentStep = 3;

                        this.account.passphrase = 'HIDDEN'

                        this.$store.state.application.account = { ...this.$store.state.application.account, ...this.account }
                        this.$store.state.application.signed_in = true
                    })
                }

                if (this.account.passphrase !== passphraseVerification) {
                    this.errors.push('Passphrase does not match.')
                }
                
            } else if (this.currentStep === 3) {
                if (this.account.identity.wallet && this.account.identity.name) {
                    this.finishedStep = 3;
                    this.currentStep = 3;
                } else {
                    if (!this.account.identity.wallet) {
                        this.errors.push('Wallet number required.');
                    }
                    if (!this.account.identity.name) {
                        this.errors.push('Identity name required.');
                    }
                }
            }
        },
        changeTab(step) {
            if (step > this.currentStep) {
                this.checkForm();
            } else {
                this.currentStep = step;
            }
        },
        showPassphrase() {
            this.verifyingPassphrase = false
        },
        verifyPassphrase() {
            this.verifyingPassphrase = true
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
            width: 80px;
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
