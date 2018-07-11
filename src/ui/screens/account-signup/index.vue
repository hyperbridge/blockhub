<template>
    <c-layout navigationKey="accountNavigation">
        <!-- PAGE LOGIN CONTAINER -->
        <div class="content login-container" id="content">
            <div class="container">
                <div class="col-12">

                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="step1-tab" data-toggle="tab" href="#step1" role="tab"
                               aria-controls="step1-tab" aria-expanded="true">Step 1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="step2-tab" data-toggle="tab" href="#step2" role="tab"
                               aria-controls="step2-tab">Step 2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="step3-tab" data-toggle="tab" href="#step3" role="tab"
                               aria-controls="step3-tab">Step 3</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade" id="step1" role="tabpanel" aria-labelledby="step1-tab">
                            <div class="tab-container">
                                <div class="tab-card">
                                    <h4>Personal Information</h4>
                                    <form action="/" method="post" class="form-inline">
                                        <div class="row">
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">First name</label>
                                                    <input type="text" class="form-control" placeholder="First name"
                                                           name="first_name">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Last name</label>
                                                    <input type="text" class="form-control" placeholder="Last name"
                                                           name="last_name">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Birthday</label>
                                                    <input type="text" class="form-control" placeholder="Birthday"
                                                           name="birthday">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Email</label>
                                                    <input type="email" class="form-control" placeholder="Email"
                                                           name="email">
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="tab-card">
                                    <h4>Agreement</h4>
                                    <div class="terms_block">

                                        <h1>Terms and Conditions for <span class="highlight preview_company_name">Company Name</span>
                                        </h1>

                                        <h2>Introduction</h2>

                                        <p>These Website Standard Terms and Conditions written on this webpage shall manage
                                            your use of our website, <span class="highlight preview_website_name">Webiste Name</span>
                                            accessible at <span class="highlight preview_website_url">Website.com</span>.
                                        </p>

                                        <p>These Terms will be applied fully and affect to your use of this Website. By
                                            using this Website, you agreed to accept all terms and conditions written in
                                            here. You must not use this Website if you disagree with any of these Website
                                            Standard Terms and Conditions.</p>

                                        <p>Minors or people below 18 years old are not allowed to use this Website.</p>

                                        <h2>Intellectual Property Rights</h2>

                                        <p>Other than the content you own, under these Terms, <span
                                            class="highlight preview_company_name">Company Name</span> and/or its licensors
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
                                            <li>using this Website in any way that is or may be damaging to this Website;
                                            </li>
                                            <li>using this Website in any way that impacts user access to this Website;</li>
                                            <li>using this Website contrary to applicable laws and regulations, or in any
                                                way may cause harm to the Website, or to any person or business entity;
                                            </li>
                                            <li>engaging in any data mining, data harvesting, data extracting or any other
                                                similar activity in relation to this Website;
                                            </li>
                                            <li>using this Website to engage in any advertising or marketing.</li>
                                        </ul>

                                        <p>Certain areas of this Website are restricted from being access by you and <span
                                            class="highlight preview_company_name">Company Name</span> may further restrict
                                            access by you to any areas of this Website, at any time, in absolute discretion.
                                            Any user ID and password you may have for this Website are confidential and you
                                            must maintain confidentiality as well.</p>

                                        <h2>Your Content</h2>

                                        <p>In these Website Standard Terms and Conditions, “Your Content” shall mean any
                                            audio, video text, images or other material you choose to display on this
                                            Website. By displaying Your Content, you grant <span
                                                class="highlight preview_company_name">Company Name</span> a non-exclusive,
                                            worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish,
                                            translate and distribute it in any and all media.</p>

                                        <p>Your Content must be your own and must not be invading any third-party's rights.
                                            <span class="highlight preview_company_name">Company Name</span> reserves the
                                            right to remove any of Your Content from this Website at any time without
                                            notice.</p>

                                        <h2>No warranties</h2>

                                        <p>This Website is provided “as is,” with all faults, and <span
                                            class="highlight preview_company_name">Company Name</span> express no
                                            representations or warranties, of any kind related to this Website or the
                                            materials contained on this Website. Also, nothing contained on this Website
                                            shall be interpreted as advising you.</p>

                                        <h2>Limitation of liability</h2>

                                        <p>In no event shall <span
                                            class="highlight preview_company_name">Company Name</span>, nor any of its
                                            officers, directors and employees, shall be held liable for anything arising out
                                            of or in any way connected with your use of this Website whether such liability
                                            is under contract. &nbsp;<span class="highlight preview_company_name">Company Name</span>,
                                            including its officers, directors and employees shall not be held liable for any
                                            indirect, consequential or special liability arising out of or in any way
                                            related to your use of this Website.</p>

                                        <h2>Indemnification<p></p>

                                            <p>You hereby indemnify to the fullest extent <span
                                                class="highlight preview_company_name">Company Name</span> from and against
                                                any and/or all liabilities, costs, demands, causes of action, damages and
                                                expenses arising in any way related to your breach of any of the provisions
                                                of these Terms.</p>

                                        </h2>
                                        <h2>Severability</h2>

                                        <p>If any provision of these Terms is found to be invalid under any applicable law,
                                            such provisions shall be deleted without affecting the remaining provisions
                                            herein.</p>

                                        <h2>Variation of Terms</h2>

                                        <p><span class="highlight preview_company_name">Company Name</span> is permitted to
                                            revise these Terms at any time as it sees fit, and by using this Website you are
                                            expected to review these Terms on a regular basis.</p>

                                        <h2>Assignment</h2>

                                        <p>The <span class="highlight preview_company_name">Company Name</span> is allowed
                                            to assign, transfer, and subcontract its rights and/or obligations under these
                                            Terms without any notification. However, you are not allowed to assign,
                                            transfer, or subcontract any of your rights and/or obligations under these
                                            Terms.</p>

                                        <h2>Entire Agreement</h2>

                                        <p>These Terms constitute the entire agreement between <span
                                            class="highlight preview_company_name">Company Name</span> and you in relation
                                            to your use of this Website, and supersede all prior agreements and
                                            understandings.</p>

                                        <h2>Governing Law &amp; Jurisdiction</h2>

                                        <p>These Terms will be governed by and interpreted in accordance with the laws of
                                            the State of <span class="highlight preview_country">Country</span>, and you
                                            submit to the non-exclusive jurisdiction of the state and federal courts located
                                            in <span class="highlight preview_country">Country</span> for the resolution of
                                            any disputes.</p>

                                    </div>
                                </div>
                            </div>
                            <div class="action">
                                <div>
                                    <label class="switch switch-sm">
                                        <input type="checkbox" name="switch_8" checked="" value="0">
                                        <span></span>
                                    </label>
                                    <span class="label">I agree to the
                                    <a href="#3">terms</a> and
                                    <a href="#3">privacy policy</a> </span>
                                </div>
                                <div>
                                    <label class="switch switch-sm">
                                        <input type="checkbox" name="switch_9" checked="" value="0">
                                        <span></span>
                                    </label>
                                    <span class="label">Sign up for our newsletter, get 100 HBX Bonus!</span>
                                </div>
                                <div>
                                    <a href="#3" class="btn btn-success">Next step</a>
                                </div>
                            </div>

                        </div>
                        <div class="tab-pane fade show active" id="step2" role="tabpanel" aria-labelledby="profile-tab">
                            <div class="tab-container">
                                <div class="padding-40">
                                    <h3>Welcome, UserName. Let's build your main identity.</h3>
                                    <p>Be aware that all your future identities will be tied to this one</p>
                                    <div class="row margin-top-40">
                                        <div class="col">
                                            <div class="tab-card">
                                                <h4>Please complete</h4>
                                                <div class="identity-block">
                                                    <div class="avatar">
                                                        <a href="#3" class="avatar_upload_btn">
                                                            <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxOS45ODIgMzE5Ljk4MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzE5Ljk4MiAzMTkuOTgyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCI+CjxnPgoJPHBhdGggZD0iTTIzNC45OTEsMzE5Ljk4MmMyLjYxOCwwLDUuMjItMS4wNzgsNy4wNzEtMi45MjlzMi45MjktNC40NTMsMi45MjktNy4wNzF2LTE0MGg2NSAgIGMzLjkyMi0wLjAwOCw3LjcyMS0yLjU1Miw5LjIyMS02LjE3NnMwLjYxLTguMTA5LTIuMTU5LTEwLjg4NmwtMTUwLTE1MEMxNjUuMjAyLDEuMDc0LDE2Mi42MDQsMCwxNTkuOTkxLDAgICBjLTIuNjE0LDAtNS4yMTIsMS4wNzQtNy4wNjIsMi45MmwtMTUwLDE1MGMtMi43NjksMi43NzctMy42NTksNy4yNjMtMi4xNTksMTAuODg2YzEuNSwzLjYyNCw1LjI5OSw2LjE2OCw5LjIyMSw2LjE3Nmg2NXYxNDAgICBjMCwyLjYxOCwxLjA3OCw1LjIyLDIuOTI5LDcuMDcxczQuNDUzLDIuOTI5LDcuMDcxLDIuOTI5SDIzNC45OTF6IiBmaWxsPSIjNjQ3M2Y0Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
                                                        </a>
                                                    </div>
                                                    <div class="user_info">
                                                        <div class="form-group margin-bottom-5">
                                                            <input type="text"
                                                                   class="form-control"
                                                                   name="profile_name"
                                                                   placeholder="Profile name"
                                                            />
                                                        </div>
                                                        <p>User</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="tab-card">
                                                <h4>Preview your identity</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="step3" role="tabpanel" aria-labelledby="profile-tab">
                            <h3>Verify your identity (Optional)</h3>
                            <p>Submit a proof of identity issued by your country of residence.
                                This is optional but allows you to start with 1000 trust after verification, allowing
                                you to
                                reassure reviews of other user’s proofs of identity. You can skip this and finish
                                later.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-layout': () => import('@/ui/layouts/default')
        },
        data: () => ({
            wallets: []
        })
    }
</script>

<style lang="scss" scoped>
    .nav-tabs{
        border-bottom: none;
        position: relative;
        .nav-item{
            border-radius: 8px 8px 0 0;
            a{
                color: #606079;
                background: #393955;
                padding: 0 15px;
                font-size: 16px;
                line-height: 32px;
                border: none;
                position: relative;
                box-shadow: 0 -1px 10px rgba(0, 0, 0, .2);
                &:before{
                    content: "";
                    position: absolute;
                    height: 23px;
                    bottom: 0;
                    left: -30px;
                    border: 15px solid transparent;
                    border-bottom: 15px solid #393955;
                    border-right: 15px solid #393955;
                    -webkit-filter: drop-shadow(-5px 0px 3px rgba(0,0,0,.15));
                    filter: drop-shadow(-5px 0px 3px rgba(0,0,0,.1));
                }
                &:after{
                    content: "";
                    position: absolute;
                    height: 23px;
                    bottom: 0;
                    right: -30px;
                    border: 15px solid transparent;
                    border-bottom: 15px solid #393955;
                    border-left: 15px solid #393955;
                    -webkit-filter: drop-shadow(5px 0px 3px rgba(0,0,0,.15));
                    filter: drop-shadow(5px 0px 3px rgba(0,0,0,.15));
                }
                &.active{
                    border-bottom: none;
                    background: #3e3e5c;
                    z-index: 8;
                    &:before{
                        border-bottom-color: #3e3e5c;
                        border-right-color: #3e3e5c;
                    }
                    &:after{
                        border-bottom-color: #3e3e5c;
                        border-left-color: #3e3e5c;
                    }
                }
            }
            &:first-child{
                a{
                    box-shadow: 0 0 20px rgba(0,0,0,.2);
                    &:before{
                        display: none;
                    }
                }
            }
        }
    }
    .tab-pane{
        position: relative;
        &:before{
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
                padding: 10px;
                border: 1px solid #373752;
                margin-bottom: 15px;
                &:last-child{
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
        .action{
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: nowrap;
            div{
                display: flex;
                align-items: center;
                width: auto;
                .switch{
                    margin: 0;
                }
                .label{
                    font-size: 16px;
                    margin-left: 10px;
                    a{
                        color: #fff;
                        text-decoration: underline;
                    }
                }
                .btn{
                    padding: 5px 10px;
                    font-size: 15px;
                    text-transform: uppercase;
                    font-weight: bold;
                }
            }
        }
    }

    .identity-block{
        padding: 10px;
        background: #303046;
        border-radius: 5px;
        border: 1px solid #28273a;
        display: inline-block;
        overflow: hidden;
        width: 100%;
        .avatar{
            width: 60px;
            height: 60px;
            display: inline-block;
            float: left;
            font-size: 60px;
            text-align: center;
            background: #1f202f;
            border-radius: 100%;
            border: 1px solid #1c1c2a;
            img{
                width: 28px;
                vertical-align: middle;
                margin-top: 12px;
            }
        }
        .user_info{
            display: inline-block;
            float: right;
            width: calc( 100% - 75px );
        }
    }
</style>
