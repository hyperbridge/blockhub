<template>
    <c-layout navigationKey="product-navigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12" v-if="!product">
                        Product not found
                    </div>
                    <div class="col-12" v-if="product">
                        <div class="row">
                            <div class="col-8">
                                <div class="editor-container">
                                    <div class="editor" v-if="editing">
                                        <button class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right" @click="activateElement('name')" v-if="!activeElement['name']">Change Product Name <span class="fa fa-edit"></span></button>

                                        <div class="form-group" v-if="activeElement['name']">
                                            <div class="form-control-element form-control-element--right">
                                                <input ref="name" name="name" type="text" class="form-control" placeholder="Product name..." v-model="product.name" />
                                                <div class="form-control-element__box form-control-element__box--pretify bg-secondary">
                                                    <span class="fa fa-check" @click="deactivateElement('name')"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h1 class="title margin-top-10 margin-bottom-15">{{ product.name }}</h1>
                                </div>

                                <div class="editor-container">
                                    <div class="" v-if="editing">
                                        <div class="form-group">
                                            <select id="tag-editor" class="form-control" multiple="multiple">
                                                <option v-for="(tag, index) in author_tag_options" :key="index" :selected="product.author_tags.includes(tag)">{{ tag }}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <c-tags-list :tags="product.author_tags" v-if="!editing"></c-tags-list>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="editor" v-if="editing">
                                    <button class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right" @click="activateElement('background_image')" v-if="!activeElement['background_image']">Change Background Image <span class="fa fa-edit"></span></button>

                                    <div class="form-group" v-if="activeElement['background_image']">
                                        <div class="form-control-element form-control-element--right">
                                            <input ref="background_image" name="background_image" type="text" class="form-control" placeholder="Background image URL..." v-model="product.images.header" />
                                            <div class="form-control-element__box form-control-element__box--pretify bg-secondary">
                                                <span class="fa fa-check" @click="deactivateElement('background_image')"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <br />
                                    <label>RECOMMENDED SIZE: 1120 x 524px</label>
                                </div>
                            </div>
                        </div>

                        <ul class="nav nav-tabs margin-bottom-50 justify-content-between">
                            <li class="nav-item">
                                <a class="nav-link active" :href="`/#/product/${product.id}`">Overview</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/product/${product.id}/community`">Community</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/product/${product.id}/projects`">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/product/${product.id}/assets`">Assets</a>
                            </li>
                        </ul>

                        <div class="row">
                            <div class="col-7">
                                <c-screen-gallery :main="product.images.main" :items="product.images.preview" />

                                <c-sale-box
                                    :sale_box="product.sale_box"
                                    v-if="product.sale_box"
                                />

                                <c-plan-list :items="product.plans" />

                                <div class="main-content" v-html="product.content" v-if="!editing">
                                    {{ product.content }}
                                </div>

                                <div class="content-editor" v-if="editing">
                                    <div id="summernote" v-html="product.content">{{ product.content }}</div>
                                </div>
                            </div>
                            <div class="col-5">
                                <c-rating-block :items="product.rating" :parent_url="`/#/product/${product.id}`" />

                                <c-frequently-traded-assets :items="product.frequently_traded_assets" :assets_url="`/#/product/${product.id}/assets`" />

                                <c-community-spotlight :discussions="product.community.discussions" :community_url="`/#/product/${product.id}/community`" />

                                <div class="card invert system-requirements" v-if="product.system_requirements">
                                    <div class="card-body">
                                        <h2 class="title">System Requirements <i class="fas fa-laptop title-icon"></i>
                                        </h2>
                                        <div class="system-requirements__item"
                                             v-for="(item, index) in product.system_requirements" :key="index">
                                            <h6>{{ item.system }} <i :class="item.icon"></i></h6>
                                            <p>{{ item.requirements }}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="card transparent languages-blk" v-if="product.language_support">
                                    <div class="card-body">
                                        <h2 class="title">Languages <i class="fas fa-laptop title-icon"></i></h2>
                                        <ul class="languages-list">
                                            <li class="languages-list__item"
                                                v-for="(item, index) in product.language_support"
                                                :key="index">
                                                <span class="languages-list__name">{{ item.name }}</span>
                                                <span class="languages-list__icon">
                                                    <i class="fas fa-closed-captioning"
                                                       v-if="item.closed_captioning"></i>
                                                    <i class="fas fa-audio-description"
                                                       v-if="item.audio_description"></i>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="row">
                            <c-heading-bar name="Reviews" :showArrows="true" :showBackground="false" />
                        </div>

                        <div class="row">
                            <div class="col-md-6 col-12">
                                <h2>Most helpful</h2>
                                <c-review
                                    v-for="(review, index) in reviews.helpful"
                                    :key="index"
                                    :review="review"
                                />
                            </div>
                            <div class="col-md-6 col-12">
                                <h2>Most recent</h2>
                                <c-review
                                    v-for="(review, index) in reviews.recent"
                                    :key="index"
                                    :review="review"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="modal fade" id="purchase-modal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog  modal-dialog-centered" role="document">
                <div class="modal-content send-funds-modal">
                    <h3>Sending Funds</h3>
                    <div class="">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="step1-tab" data-toggle="tab" href="#agreement_tab" role="tab"
                                   aria-controls="step1-tab" aria-expanded="true">Agreement</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="step2-tab" data-toggle="tab" href="#sending_tab" role="tab"
                                   aria-controls="step2-tab">Sending</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane show active" id="agreement_tab" role="tabpanel" aria-labelledby="agreement-tab">
                                <div class="tab-container">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <h4>Crowdfunding Campaign Agreement</h4>
                                    </div>
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
                                <div class="action justify-content-between">
                                    <div>
                                        <label class="switch switch-sm">
                                            <input type="checkbox" name="switch_9" checked="" value="0">
                                            <span></span>
                                        </label>
                                        <span class="label">I agree with the terms.</span>
                                    </div>
                                    <div class="align-self-end">
                                        <a href="#3" class="btn btn-danger"><i class="fas fa-times"></i> Cancel</a>
                                        <a href="#3" class="btn btn-success"><i class="fas fa-arrow-right"></i> Next</a>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="sending_tab" role="tabpanel" aria-labelledby="sending-tab">
                                <div class="tab-container">
                                    <div class="sending-blk">
                                        <div class="clmn-1">
                                            <div class="grid">
                                                <div class="grid-item">
                                                    <div>
                                                        <img src="https://www.touchtapplay.com/wp-content/uploads/2017/12/bitcoin-game-cheats-ketchapp.jpg"/>
                                                    </div>
                                                </div>
                                                <div class="grid-item">
                                                    <div></div>
                                                </div>
                                                <div class="grid-item">
                                                    <div></div>
                                                </div>
                                                <div class="grid-item">
                                                    <div></div>
                                                </div>
                                                <div class="grid-item">
                                                    <div></div>
                                                </div>
                                                <div class="grid-item">
                                                    <div></div>
                                                </div>
                                                <div class="grid-item">
                                                    <div></div>
                                                </div>
                                                <div class="grid-item">
                                                    <div></div>
                                                </div>
                                                <div class="grid-item">
                                                    <div></div>
                                                </div>
                                                <div class="grid-item">
                                                    <div></div>
                                                </div>
                                                <div class="grid-item">
                                                    <div></div>
                                                </div>
                                                <div class="grid-item">
                                                    <div></div>
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
                                                    <div class="progress"></div>
                                                </div>
                                                <div class="left-arrow">
                                                    <div class="progress" style="width: 45%"></div>
                                                </div>
                                            </div>
                                            <div class="time">
                                                <i class="fas fa-clock"></i>
                                                15 seconds
                                            </div>
                                            <div class="info text-center">
                                                1 <strong>hbx</strong> - 0.02 <strong>usd</strong>
                                            </div>
                                        </div>
                                        <div class="clmn-3">
                                            <div class="grid">
                                                <div class="grid-item">
                                                    <div></div>
                                                </div>
                                                <div class="grid-item">
                                                    <div></div>
                                                </div>
                                                <div class="grid-item">
                                                    <div></div>
                                                </div>
                                                <div class="grid-item">
                                                    <div></div>
                                                </div>
                                                <div class="grid-item">
                                                    <div></div>
                                                </div>
                                                <div class="grid-item">
                                                    <div></div>
                                                </div>
                                                <div class="grid-item">
                                                    <div></div>
                                                </div>
                                                <div class="grid-item">
                                                    <div></div>
                                                </div>
                                                <div class="grid-item">
                                                    <div></div>
                                                </div>
                                                <div class="grid-item">
                                                    <div></div>
                                                </div>
                                                <div class="grid-item">
                                                    <div></div>
                                                </div>
                                                <div class="grid-item">
                                                    <div></div>
                                                </div>
                                            </div>
                                            <div class="info text-left">
                                                <strong>SatoshiStudios</strong>
                                                <span class="float-right up">+$14.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="action justify-content-end">
                                    <div class="align-self-end">
                                        <a href="#3" class="btn btn-danger"><i class="fas fa-times"></i> Cancel</a>
                                        <a href="#3" class="btn btn-success"><i class="fas fa-check"></i> Complete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </c-layout>
</template>

<script>
    import Vue from 'vue'

    const updateProduct = function () {
        let product = null

        if (this.id === 'new') {
            product = this.$store.state.marketplace.default_product
        }

        if (this.$store.state.marketplace.products && this.$store.state.marketplace.products[this.id]) {
            product = this.$store.state.marketplace.products[this.id]
        }

        if (product && product.images && product.images.header) {
            window.document.body.style['background-image'] = 'url(' + product.images.header + ')'
        }

        if (!product.community)
            product.community = {
                discussions: []
            }

        return product
    }

    export default {
        props: ['id'],
        components: {
            'c-layout': () => import('@/ui/layouts/default'),
            'c-plan-list': () => import('@/ui/components/game-plans/list'),
            'c-screen-gallery': () => import('@/ui/components/screen-gallery/gallery'),
            'c-sale-box': () => import('@/ui/components/sale-box/box'),
            'c-tags-list': () => import('@/ui/components/tags'),
            'c-rating-block': () => import('@/ui/components/rating-block'),
            'c-frequently-traded-assets': () => import('@/ui/components/frequently-traded-assets'),
            'c-community-spotlight': () => import('@/ui/components/community-spotlight'),
            'c-heading-bar': () => import('@/ui/components/heading-bar'),
            'c-review': () => import('@/ui/components/product-overview/review')
        },
        data() {
            const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut luctus ante, a volutpat velit. Cras in arcu a sem ultrices id luctus sem. Cras a venenatis mauris. Nullam non tortor nec neque accumsan euismod. Fusce tempus nunc ac varius gravida. Fusce at lacus pharetra, elementum risus a, bibendum ante. Morbi velit est, tincidunt id auctor sit amet, varius non nunc. Vestibulum elementum nulla et condimentum vulputate. Nullam id eleifend velit, quis aliquam elit. In maximus non orci eget maximus.';
            const title = 'Good game with very nice graphics made by very smart people.';
            const setup = { system: 'Windows 10', gpu: 'GTX 1080', cpu: 'Core i7 7980x', ram: '8 GB', storage: 'HyperX 1TB SSD' };
            const author = { name: 'Nakatochi', img: 'https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png' };
            return {
                activeElement: {
                    name: false,
                    background_image: false,
                    tags: false
                },
                author_tag_options: [
                    'rpg',
                    'adventure',
                    'racing',
                    'action'
                ],
                reviews: {
                    helpful: [
                        { author, title: title, text, date: '2018-08-19T04:09:00.000Z', rating: 4.5, minutes_played: 1938, setup },
                        { author, title: title, text, date: '2018-08-16T04:09:00.000Z', rating: 1.5, minutes_played: 414, setup },
                        { author, title: title, text, date: '2018-08-18T04:09:00.000Z', rating: 3.5, minutes_played: 71, setup }
                    ],
                    recent: [
                        { author, title: title, text, date: '2018-08-20T04:09:00.000Z', rating: 1.5, minutes_played: 13, setup },
                        { author, title: title, text, date: '2018-03-21T04:09:00.000Z', rating: 5, minutes_played: 241, setup },
                        { author, title: title, text, date: '2018-08-11T04:09:00.000Z', rating: 3, minutes_played: 2941, setup }
                    ]
                }
            }
        },
        methods: {
            deactivateElement(key) {
                this.activeElement[key] = false
            },
            activateElement(key) {
                for (let key in this.activeElement) {
                    this.activeElement[key] = false
                }

                this.activeElement[key] = true

                setTimeout(() => {
                    if (this.$refs[key])
                        this.$refs[key].focus()
                }, 10)
            },
            save() {
                if (this.id === 'new') {
                    this.$store.commit('marketplace/createProduct', this.product)
                } else {
                    this.$store.dispatch('marketplace/updateProduct', this.product)
                }
            }
        },
        computed: {
            product: updateProduct,
            editing() {
                if (!this.$store.state.marketplace.editor_mode) {
                    for (let key in this.activeElement) {
                        this.activeElement[key] = false
                    }
                }

                return this.$store.state.marketplace.editor_mode === 'editing'
            }
        },
        mounted: updateProduct,
        created: updateProduct,
        beforeDestroy() {
            window.document.body.style['background-image'] = 'url(/static/img/products/default.png)'
        },
        updated() {
            $('#tag-editor').select2()
                .on('select2:select', (e) => {
                    let data = e.params.data

                    if (!this.product.author_tags.includes(data.text)) {
                        this.product.author_tags.push(data.text)
                    }

                    Vue.set(this.product, 'author_tags', this.product.author_tags)
                })
                .on('select2:unselect', (e) => {
                    let data = e.params.data

                    this.product.author_tags = this.product.author_tags.filter(e => e !== data.text)

                    Vue.set(this.product, 'author_tags', this.product.author_tags)
                })

            $('#summernote').summernote({
                placeholder: 'Type in your text',
                tabsize: 2,
                height: 300,
                callbacks: {
                    onBlur: () => {
                        Vue.set(this.product, 'content', $('#summernote').summernote('code'))
                    }
                }
            });

        }
    }
</script>

<style lang="scss" scoped>
    .modal-backdrop{
        background-color: #30304B!important;
        -webkit-filter: blur(10px);
        filter: blur(10px);
    }
    .modal-dialog{
        width: 650px;
        max-width: 650px;
    }
    .send-funds-modal{
        background: transparent;
        h3{
            font-size: 30px;
            color: #C6C6D6;
            margin-bottom: 40px;
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
                        color: #C6C6D6;
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
                padding: 15px 10px 10px;
                border-radius: 0 5px 5px 5px;
                border-top: none;
                box-shadow: 0 3px 20px rgba(0, 0, 0, .2);
                .terms_block {
                    background: #46466a;
                    color: #C6C6D6;
                    box-shadow: 0 0 3px rgba(0, 0, 0, .5) inset;
                    padding: 15px;
                    border-radius: 5px;
                    max-height: 250px;
                    overflow-y: auto;
                    h1, h2, h3, h4, h5 {
                        font-size: 18px;
                        color: #C6C6D6;
                    }
                }
            }
            .action {
                margin-top: 15px;
                display: flex;
                justify-content: space-between;
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
                        font-size: 13px;
                        text-transform: uppercase;
                        font-weight: bold;
                        margin-left: 10px;
                        i{
                            margin-right: 5px;
                        }
                    }
                }
            }
        }

        .sending-blk{
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
</style>

<style lang="scss">
    .content-editor .note-editor.note-frame .note-editing-area .note-editable {
        background-color: transparent;
        color: inherit;
    }

    .content-editor .card {
        background: rgba(0, 0, 0, 0.13);
        color: #dfdfe9;
        border: 1px solid rgba(70, 70, 70, 0.5);
    }

    .content-editor .note-editor.note-frame .note-statusbar {
        background: transparent;
        border: 0 none;
    }
</style>

<style lang="scss" scoped>
    .editor {
        position: absolute;
        top: -45px;
        left: -5px;
        z-index: 10;

        .btn, input {
            border-color: #1b1c2b;
            background: #1B1C2B;
            border-radius: 6px;
            box-shadow: 1px 1px 0px #101010;
            font-size: 17px;
            padding-top: 8px;

            span {
                font-size: 17px;
            }
        }
        .form-control-element .form-control-element__box--pretify {
            line-height: 11px;
        }
    }

    .editor-container {
        position: relative;
    }

    .main-content {
        margin-top: 15px;
        padding: 15px;
        border-radius: 5px;
        overflow: hidden;
        color: #C6C6D6;
        font-size: 14px;
        h2 {
            font-size: 21px;
            margin-bottom: 30px;
        }
        p {
            margin-bottom: 20px;
        }
        img{
            max-width: 100%;
            height: auto;
        }
        &.with_bg{
            color: #1C2032;
            background: #FEEBCE;
        }
    }

    .system-requirements__item {
        display: block;
        width: 100%;
        margin-bottom: 10px;
        background: rgba(0, 0, 0, .13);
        border: 1px solid rgba(70, 70, 70, 0.5);
        border-radius: 5px;
        padding: 5px;
        position: relative;
        &:last-child {
            margin-bottom: 0;
        }
        h6 {
            font-weight: bold;
            font-size: 14px;
            padding-bottom: 0;
            i {
                float: right;
            }
        }
        p {
            margin: 0;
        }
    }

    .languages-list {
        padding: 0;
    }
    .languages-list__item {
        list-style: none;
        display: block;
        margin: 5px 0;
        width: 100%;
        overflow: hidden;
    }
    .languages-list__name {
        float: left;
        max-width: 80%;
        font-size: 14px;
        font-weight: bold;
    }
    .languages-list__icon {
        float: right;
        max-width: 20%;
        text-align: right;
        i {
            margin-right: 5px;
            &:last-child {
                margin-right: 0;
            }
        }
    }
</style>
