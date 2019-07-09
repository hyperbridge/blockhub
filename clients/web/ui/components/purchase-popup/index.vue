<template>
    <c-popup
        ref="modal"
        :activated="activated"
        type="custom"
        title=""
        width="650"
        @close="$emit('close')">
        <div
            slot="customClose"
            class="popup__close"
            @click="$emit('close')">
            <i class="fas fa-times" />
        </div>
        <div
            slot="customContent"
            class="purchase-modal">
            <c-tabs>
                <c-tab
                    name="Agreement"
                    :selected="agreement"
                    :showFooter="true">
                    <div>
                        <div class="d-flex justify-content-between align-items-center">
                            <h4>Purchase Agreement</h4>
                        </div>
                        <div class="termsBlock">
                            <slot name="agreementText">
                                <h1>Terms and Conditions for <span class="highlight preview_company_name">BlockHub</span></h1>

                                <h2>Introduction</h2>

                                <p>
                                    These Website Standard Terms and Conditions written on this webpage shall
                                    manage
                                    your use of our website, <span class="highlight preview_website_name">BlockHub</span>
                                    accessible at <span class="highlight preview_website_url">BlockHub.gg</span>.
                                </p>

                                <p>
                                    These Terms will be applied fully and affect to your use of this Website. By
                                    using this Website, you agreed to accept all terms and conditions written in
                                    here. You must not use this Website if you disagree with any of these
                                    Website
                                    Standard Terms and Conditions.
                                </p>

                                <p>Minors or people below 18 years old are not allowed to use this Website.</p>

                                <h2>Intellectual Property Rights</h2>

                                <p>
                                    Other than the content you own, under these Terms, <span
                                        class="highlight preview_company_name">Hyperbridge Technology Inc.</span> and/or its
                                    licensors
                                    own all the intellectual property rights and materials contained in this
                                    Website.
                                </p>

                                <p>
                                    You are granted limited license only for purposes of viewing the material
                                    contained on this Website.
                                </p>

                                <h2>Restrictions</h2>

                                <p>You are specifically restricted from all of the following:</p>

                                <ul>
                                    <li>publishing any Website material in any other media;</li>
                                    <li>
                                        selling, sublicensing and/or otherwise commercializing any Website
                                        material;
                                    </li>
                                    <li>publicly performing and/or showing any Website material;</li>
                                    <li>
                                        using this Website in any way that is or may be damaging to this
                                        Website;
                                    </li>
                                    <li>
                                        using this Website in any way that impacts user access to this
                                        Website;
                                    </li>
                                    <li>
                                        using this Website contrary to applicable laws and regulations, or in
                                        any
                                        way may cause harm to the Website, or to any person or business entity;
                                    </li>
                                    <li>
                                        engaging in any data mining, data harvesting, data extracting or any
                                        other
                                        similar activity in relation to this Website;
                                    </li>
                                    <li>using this Website to engage in any advertising or marketing.</li>
                                </ul>

                                <p>
                                    Certain areas of this Website are restricted from being access by you and
                                    <span
                                        class="highlight preview_company_name">Hyperbridge Technology Inc.</span> may further
                                    restrict
                                    access by you to any areas of this Website, at any time, in absolute
                                    discretion.
                                    Any user ID and password you may have for this Website are confidential and
                                    you
                                    must maintain confidentiality as well.
                                </p>

                                <h2>Your Content</h2>

                                <p>
                                    In these Website Standard Terms and Conditions, “Your Content” shall mean any
                                    audio, video text, images or other material you choose to display on this
                                    Website. By displaying Your Content, you grant <span
                                        class="highlight preview_company_name">Hyperbridge Technology Inc.</span> a
                                    non-exclusive,
                                    worldwide irrevocable, sub licensable license to use, reproduce, adapt,
                                    publish,
                                    translate and distribute it in any and all media.
                                </p>

                                <p>
                                    Your Content must be your own and must not be invading any third-party's
                                    rights.
                                    <span class="highlight preview_company_name">Hyperbridge Technology Inc.</span> reserves
                                    the
                                    right to remove any of Your Content from this Website at any time without
                                    notice.
                                </p>

                                <h2>No warranties</h2>

                                <p>
                                    This Website is provided “as is,” with all faults, and <span
                                        class="highlight preview_company_name">Hyperbridge Technology Inc.</span> express no
                                    representations or warranties, of any kind related to this Website or the
                                    materials contained on this Website. Also, nothing contained on this Website
                                    shall be interpreted as advising you.
                                </p>

                                <h2>Limitation of liability</h2>

                                <p>
                                    In no event shall <span
                                        class="highlight preview_company_name">Hyperbridge Technology Inc.</span>, nor any of its
                                    officers, directors and employees, shall be held liable for anything arising
                                    out
                                    of or in any way connected with your use of this Website whether such
                                    liability
                                    is under contract. &nbsp;<span class="highlight preview_company_name">Hyperbridge Technology Inc.</span>,
                                    including its officers, directors and employees shall not be held liable for
                                    any
                                    indirect, consequential or special liability arising out of or in any way
                                    related to your use of this Website.
                                </p>

                                <h2>
                                    Indemnification<p />

                                    <p>
                                        You hereby indemnify to the fullest extent <span
                                            class="highlight preview_company_name">Hyperbridge Technology Inc.</span> from and
                                        against
                                        any and/or all liabilities, costs, demands, causes of action, damages
                                        and
                                        expenses arising in any way related to your breach of any of the
                                        provisions
                                        of these Terms.
                                    </p>
                                </h2>
                                <h2>Severability</h2>

                                <p>
                                    If any provision of these Terms is found to be invalid under any applicable
                                    law,
                                    such provisions shall be deleted without affecting the remaining provisions
                                    herein.
                                </p>

                                <h2>Variation of Terms</h2>

                                <p>
                                    <span class="highlight preview_company_name">Hyperbridge Technology Inc.</span> is permitted
                                    to
                                    revise these Terms at any time as it sees fit, and by using this Website you
                                    are
                                    expected to review these Terms on a regular basis.
                                </p>

                                <h2>Assignment</h2>

                                <p>
                                    The <span class="highlight preview_company_name">Hyperbridge Technology Inc.</span> is
                                    allowed
                                    to assign, transfer, and subcontract its rights and/or obligations under
                                    these
                                    Terms without any notification. However, you are not allowed to assign,
                                    transfer, or subcontract any of your rights and/or obligations under these
                                    Terms.
                                </p>

                                <h2>Entire Agreement</h2>

                                <p>
                                    These Terms constitute the entire agreement between <span
                                        class="highlight preview_company_name">Hyperbridge Technology Inc.</span> and you in
                                    relation
                                    to your use of this Website, and supersede all prior agreements and
                                    understandings.
                                </p>

                                <h2>Governing Law &amp; Jurisdiction</h2>

                                <p>
                                    These Terms will be governed by and interpreted in accordance with the laws
                                    of
                                    the State of <span class="highlight preview_country">Country</span>, and you
                                    submit to the non-exclusive jurisdiction of the state and federal courts
                                    located
                                    in <span class="highlight preview_country">Country</span> for the resolution
                                    of
                                    any disputes.
                                </p>
                            </slot>
                        </div>
                    </div>
                    <div
                        slot="footer"
                        class="d-flex justify-content-between align-items-center">
                        <div>
                            <c-switch
                                size="sm"
                                :value="true"
                                label="I agree with the terms" />
                        </div>
                        <div>
                            <c-button
                                status="danger"
                                c_class="mx-1"
                                @click="">
                                Cancel
                            </c-button>
                            <c-button
                                status="success"
                                @click="toggleSteps">
                                Next
                            </c-button>
                        </div>
                    </div>
                </c-tab>
                <c-tab
                    name="Sending"
                    :selected="sending"
                    :showFooter="true">
                    <div class="sending-block">
                        <div class="clmn-1">
                            <div class="grid">
                                <div class="grid-item">
                                    <div>
                                        <c-img src="https://www.touchtapplay.com/wp-content/uploads/2017/12/bitcoin-game-cheats-ketchapp.jpg" />
                                    </div>
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                            </div>
                            <div class="info text-left">
                                <strong>SatoSama</strong>
                                <span class="float-right down">-$14.00</span>
                            </div>
                        </div>
                        <div class="clmn-2">
                            <div class="directions">
                                <div class="right-arrow">
                                    <div class="progress" />
                                </div>
                                <div class="left-arrow">
                                    <div
                                        class="progress"
                                        style="width: 45%" />
                                </div>
                            </div>
                            <div class="time">
                                <i class="fas fa-clock" />
                                15 seconds
                            </div>
                            <div class="info text-center">
                                1 <strong>hbx</strong> - 0.02 <strong>usd</strong>
                            </div>
                        </div>
                        <div class="clmn-3">
                            <div class="grid">
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                            </div>
                            <div class="info text-left">
                                <strong>SatoshiStudios</strong>
                                <span class="float-right up">+$14.00</span>
                            </div>
                        </div>
                    </div>
                    <div
                        slot="footer"
                        class="d-flex align-items-center justify-content-end">
                        <div>
                            <c-button
                                status="danger"
                                @click="">
                                Cancel
                            </c-button>
                            <c-button
                                status="success"
                                @click="">
                                Complete
                            </c-button>
                        </div>
                    </div>
                </c-tab>
            </c-tabs>
        </div>
    </c-popup>
</template>

<script>
import Switch from '../switch/index'
import Buttons from '../buttons/index.vue'
import PopUp from '../popups/index'

export default {
    components: {
        'c-switch': Switch,
        'c-button': Buttons,
        'c-popup': PopUp
    },
    props: ['activated'],
    data() {
        return {
            agreement: true,
            sending: false
        }
    },
    methods: {
        toggleSteps() {
            this.agreement = false
            this.sending = true
        }
    }
}

</script>

<style lang="scss" scoped>
    .purchase-modal{
        background: transparent;
        color: #fff;
        h4{
            color: #fff;
        }
        h3{
            font-size: 30px;
            color: #C6C6D6;
            margin-bottom: 40px;
        }
        .termsBlock {
            background: #46466a;
            color: #C6C6D6;
            box-shadow: 0 0 3px rgba(0, 0, 0, .5) inset;
            padding: 15px;
            border-radius: 5px;
            max-height: 250px;
            overflow-y: auto;
            text-align: left;
            h1, h2, h3, h4, h5 {
                font-size: 18px;
                color: #C6C6D6;
            }
        }

        .sending-block{
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            .clmn-1,
            .clmn-3{
                width: 35%;
                padding: 0 5px;
                .grid{
                    border: 1px solid rgba(255, 255, 255, .1);
                    border-radius: 5px;
                    margin-bottom: 15px;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    padding: 5px;
                    .grid-item{
                        width: 33.3%;
                        padding: 5px;
                        position: relative;
                        div{
                            border: 1px solid #30304B;
                            background: rgba(255, 255, 255, .07);
                            border-radius: 5px;
                            position: relative;
                            display: inline-block;
                            width: 100%;
                            float: left;
                            overflow: hidden;
                            img{
                                display: block;
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                height: 100%;
                                width: 100%;
                                object-fit: cover;
                                transform: translate(-50%, -50%);
                            }
                            &:before{
                                content: "";
                                padding-top: 100%;
                                float: left;
                            }
                            &:hover{
                                cursor: pointer;
                                background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQyIDQyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MiA0MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiPgo8cGF0aCBkPSJNMzcuMDU5LDE2SDI2VjQuOTQxQzI2LDIuMjI0LDIzLjcxOCwwLDIxLDBzLTUsMi4yMjQtNSw0Ljk0MVYxNkg0Ljk0MUMyLjIyNCwxNiwwLDE4LjI4MiwwLDIxczIuMjI0LDUsNC45NDEsNUgxNnYxMS4wNTkgIEMxNiwzOS43NzYsMTguMjgyLDQyLDIxLDQyczUtMi4yMjQsNS00Ljk0MVYyNmgxMS4wNTlDMzkuNzc2LDI2LDQyLDIzLjcxOCw0MiwyMVMzOS43NzYsMTYsMzcuMDU5LDE2eiIgZmlsbD0iIzJhMzA0ZCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
                                background-position: center;
                                background-size: 16px;
                                background-repeat: no-repeat;
                            }
                        }
                    }
                }
                .info{
                    span{
                        &.down{
                            color: #F75D5D
                        }
                        &.up{
                            color: #43C981
                        }
                    }
                }
            }
            .clmn-2{
                width: 30%;
                padding: 0 5px;
                text-align: center;
                .time{
                    padding: 20px 0 30px;
                    i{
                        display: block;
                        font-size: 18px;
                        margin-bottom: 4px;
                    }
                }
                .directions{
                    width: 100px;
                    display: block;
                    margin: auto auto 20px;
                    .right-arrow{
                        width: 100%;
                        height: 35px;
                        position: relative;
                        -webkit-clip-path: polygon(0% 35%, 70% 35%, 70% 0%, 100% 50%, 70% 100%, 70% 65%, 0% 65%);
                        clip-path: polygon(0% 35%, 70% 35%, 70% 0%, 100% 50%, 70% 100%, 70% 65%, 0% 65%);
                        background: #30304B;
                        margin-bottom: 4px;
                        .progress{
                            left: 0;
                        }
                    }
                    .left-arrow{
                        width: 100%;
                        height: 35px;
                        position: relative;
                        -webkit-clip-path: polygon(0% 35%, 70% 35%, 70% 0%, 100% 50%, 70% 100%, 70% 65%, 0% 65%);
                        clip-path: polygon(0% 35%, 70% 35%, 70% 0%, 100% 50%, 70% 100%, 70% 65%, 0% 65%);
                        background: #30304B;
                        transform: rotate(180deg);
                        .progress{
                            left: 0;
                        }
                    }
                    .progress{
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        background: #5EA72B;
                        margin: 0;
                        padding: 0;
                        border-radius: 0;
                        height: 100%;
                    }
                }
            }
            .clmn-1,
            .clmn-2,
            .clmn-3{
                .info{
                    border: 1px solid rgba(255, 255, 255, .1);
                    border-radius: 5px;
                    padding: 5px;
                    width: 100%;
                }
            }
        }

    }

    .popup__close {
        position: absolute;
        top: 0px;
        right: 0px;
        opacity: .7;
        -webkit-transition: 0.6s ease-out;
        -moz-transition:  0.6s ease-out;
        transition:  0.6s ease-out;
        font-size: 22px;
        z-index: 999;
        img {
            width: 24px;
        }
        &:hover {
            opacity: 1;
            cursor: pointer;
            -webkit-transform: rotateZ(180deg);
            -moz-transform: rotateZ(180deg);
            transform: rotateZ(180deg);
        }
    }
</style>
