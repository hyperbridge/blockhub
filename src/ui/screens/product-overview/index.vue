<template>
    <c-layout navigationKey="productNavigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12" v-if="!product">
                        Product not found
                    </div>
                    <div class="col-12" v-if="product">
                        <h1 class="title margin-top-10 margin-bottom-15">{{ product.name }}</h1>

                        <div class="product__tag" v-for="(tag, index) in product.authorTags" v-bind:key="index">
                            <a href="#" class="tag-link" @click="filterTag(tag)">{{ tag }}</a>
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
                                SCREENSHOT GALLERY

                                SALE PRICE BOX

                                <plan-list></plan-list>
                                <div class="main_content">
                                    <h2>An adventure of a lifetime...</h2>

                                    <p>Any new features or tools which are added to the current store shall also be
                                        subject to the Terms of Service. You can review the most current version of the
                                        Terms of Service at any time on this page. We reserve the right to update,
                                        change or replace any part of these Terms of Service by posting updates and/or
                                        changes to our website. It is your responsibility to check this page
                                        periodically for changes. Your continued use of or access to the website
                                        following the posting of any changes constitutes acceptance of those
                                        changes.</p>

                                    <p>Our store is hosted on Shopify Inc. They provide us with the online e-commerce
                                        platform that allows us to sell our products and services to you.</p>

                                    IMAGE LIST
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="card invert crowndfunding-campaing-blk" v-if="crowndfunding_data">
                                    <div class="card-body">
                                        <h2 class="title">Crowndfunding campaing</h2>
                                        <div class="crowndfunding-campaing">
                                            <div class="crowndfunding-campaing__progress">
                                                <div v-for="(stage, index) in crowndfunding_data.stages" :key="index"
                                                     :class="stage.status"
                                                     class="crowndfunding-campaing_progress-stage">
                                                    <i class="fas fa-check" v-if="stage.status === 'done'"></i>
                                                    <i class="fas fa-clock" v-if="stage.status === 'in_progress'"></i>
                                                    <span class="stage_line"></span>
                                                    <span class="name">{{ stage.text}}</span>
                                                </div>
                                            </div>
                                            <div class="crowndfunding-campaing__info">
                                                <div class="funded">
                                                    <div class="text">114% Funded</div>
                                                    $ {{ crowndfunding_data.funded_amount }}
                                                </div>
                                                <div class="goal">
                                                    <div class="text">Goal</div>
                                                    $ {{ crowndfunding_data.goal_amount }}
                                                </div>
                                                <div class="spent_blk">
                                                    <div class="progress progress-bar-vertical">
                                                        <div class="progress-bar bg-success" role="progressbar"
                                                             :aria-valuenow="crowndfunding_data.spent_amount['percent']"
                                                             aria-valuemin="0" aria-valuemax="100"
                                                             :style="{ height: crowndfunding_data.spent_amount['percent'] + '%' }">
                                                            <span class="sr-only">{{ crowndfunding_data.spent_amount['percent'] }}% Complete</span>
                                                        </div>
                                                    </div>
                                                    <div class="text">Spent</div>
                                                    $ {{ crowndfunding_data.spent_amount['amount'] }}
                                                </div>
                                                <div class="locked_blk">
                                                    <div class="progress progress-bar-vertical">
                                                        <div class="progress-bar bg-success" role="progressbar"
                                                             :aria-valuenow="crowndfunding_data.locked_amount['percent']"
                                                             aria-valuemin="0" aria-valuemax="100"
                                                             :style="{ height: crowndfunding_data.locked_amount['percent'] + '%' }">
                                                            <span class="sr-only">{{ crowndfunding_data.locked_amount['percent'] }}% Complete</span>
                                                        </div>
                                                    </div>
                                                    <div class="text">Locked</div>
                                                    $ {{ crowndfunding_data.locked_amount['amount'] }}
                                                </div>
                                                <div class="overflow_blk">
                                                    <div class="progress progress-bar-vertical">
                                                        <div class="progress-bar bg-success" role="progressbar"
                                                             :aria-valuenow="crowndfunding_data.overflow_amount['percent']"
                                                             aria-valuemin="0" aria-valuemax="100"
                                                             :style="{ height: crowndfunding_data.overflow_amount['percent'] + '%' }">
                                                            <span class="sr-only">{{ crowndfunding_data.overflow_amount['percent'] }}% Complete</span>
                                                        </div>
                                                    </div>
                                                    <div class="text">Overflow</div>
                                                    $ {{ crowndfunding_data.overflow_amount['amount'] }}
                                                </div>
                                            </div>
                                            <div class="crowndfunding-campaing__action">
                                                <a href="#3" class="follow_link">
                                                    <i class="fas fa-check"></i>
                                                    Follow
                                                </a>
                                                <a href="#3" class="share_link">
                                                    <i class="fas fa-share"></i>
                                                    Share
                                                </a>
                                                <a href="#3" class="support_link">
                                                    <i class="fas fa-life-ring"></i>
                                                    Support
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card invert milestones-blk" v-if="milestones_data">
                                    <div class="card-body">
                                        <h2 class="title">Milestones</h2>
                                        <ul class="milestones-blk__list">
                                            <li v-for="(item, index) in milestones_data"
                                                v-bind:class="{ done: item.status }" :key="index">
                                                <div class="step_number" v-if="item.step_number">
                                                    {{ item.step_number}}
                                                </div>
                                                <div class="status_done" v-else>
                                                    <i class="fas fa-check"></i>
                                                </div>
                                                <div class="text">
                                                    {{ item.text}}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="card invert rating-blk" v-if="rating_data">
                                    <div class="card-body">
                                        <h2 class="title">Rating</h2>
                                        <ul class="rating-blk__list">
                                            <li v-for="(item, index) in rating_data" :key="index">
                                                <div class="rating-blk__info">
                                                    <span class="rating-blk__name">{{ item.name }}</span>
                                                    <span class="rating-blk__number">{{ item.number }}</span>
                                                </div>
                                                <span class="rating-blk__stars">
                                                    <i class="fas fa-star" v-for="num in Math.floor(item.number)"></i>
                                                    <i class="fas fa-star-half"
                                                       v-if="Number.isInteger(item.number) === false"></i>
                                                </span>
                                            </li>
                                        </ul>
                                        <a href="#3" class="btn btn-outline-white">See Full Reviews</a>
                                        <a href="#3" class="btn btn-outline-white">Rate the game</a>
                                    </div>
                                </div>

                                <div class="card invert traded-assets" v-if="assets_data">
                                    <div class="card-body">
                                        <h2 class="title">Frequently Traded Assets</h2>
                                        <div class="traded-assets__filter">
                                            <div class="dropdown">
                                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button"
                                                   id="mostMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                                   aria-expanded="false">
                                                    Most valuable
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                    <a class="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </div>
                                            <div class="dropdown">
                                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button"
                                                   id="rarityMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                                   aria-expanded="false">
                                                    Rarity
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                    <a class="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </div>
                                        </div>
                                        <ul class="traded-assets__list">
                                            <li class="traded-assets__item">
                                                <a href="#3">
                                                    <img
                                                        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxMjcuNzgyIDEyNy43ODIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyNy43ODIgMTI3Ljc4MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPGc+CgkJPGc+CgkJCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGRkQ0MDA7IiBwb2ludHM9IjkwLjY4NSw1LjkyNyA2NC42OSw1LjkyNyA1MC4zNjUsMzEuMDY2IDYyLjAwNSwzMS4wNjYgNDYuNzM1LDYyLjA5MSA4Ni44NjQsMjYuMTgzICAgICAgNzMuODI3LDI2LjE4MyAgICAiLz4KCQk8L2c+CgkJPGc+CgkJCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGRkIwMDA7IiBwb2ludHM9IjU5LjcyNCwxNC42NDIgNTAuMzY1LDMxLjA2NiA2Mi4wMDUsMzEuMDY2IDQ2LjczNSw2Mi4wOTEgNzcuMTI0LDM0Ljg5OCA2Ni45OTUsMzQuODk4ICAgICAgNzQuMjQ3LDI2LjE4MyA3My44MjcsMjYuMTgzIDgzLjQzMSwxNC42NDIgICAgIi8+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTQ2LjczNCw2My41OTFjLTAuMzE4LDAtMC42MzgtMC4xMDEtMC45MDYtMC4zMDVjLTAuNTcyLTAuNDM1LTAuNzU3LTEuMjEzLTAuNDM5LTEuODU3ICAgICBsMTQuMjA2LTI4Ljg2M2gtOS4yMjljLTAuNTM0LDAtMS4wMjgtMC4yODQtMS4yOTctMC43NDZzLTAuMjcxLTEuMDMyLTAuMDA3LTEuNDk2TDYzLjM4Niw1LjE4NSAgICAgYzAuMjY4LTAuNDY5LDAuNzY1LTAuNzU4LDEuMzA0LTAuNzU4aDI1Ljk5NWMwLjU4MiwwLDEuMTExLDAuMzM3LDEuMzU4LDAuODYzYzAuMjQ3LDAuNTI3LDAuMTY3LDEuMTQ5LTAuMjA1LDEuNTk3ICAgICBMNzcuMDI3LDI0LjY4M2g5LjgzN2MwLjYyMiwwLDEuMTgsMC4zODQsMS40MDEsMC45NjVzMC4wNjMsMS4yMzgtMC40MDEsMS42NTNsLTQwLjEzLDM1LjkwOCAgICAgQzQ3LjQ1MSw2My40NjMsNDcuMDkzLDYzLjU5MSw0Ni43MzQsNjMuNTkxeiBNNTIuOTQ2LDI5LjU2Nmg5LjA1OWMwLjUxOSwwLDEsMC4yNjgsMS4yNzMsMC43MDcgICAgIGMwLjI3MywwLjQ0LDAuMzAxLDAuOTksMC4wNzIsMS40NTVMNTEuNDkyLDU1LjgyMWwzMS40NDYtMjguMTM4aC05LjExMWMtMC41ODIsMC0xLjExMS0wLjMzNy0xLjM1OC0wLjg2MyAgICAgYy0wLjI0Ny0wLjUyNy0wLjE2Ny0xLjE0OSwwLjIwNS0xLjU5N0w4Ny40ODQsNy40MjdINjUuNTYyTDUyLjk0NiwyOS41NjZ6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkY4MDA7IiBkPSJNMTEzLjEsODQuNDEzYzAsMjAuNjc2LTIyLjAzMiwzNy40NDEtNDkuMjA5LDM3LjQ0MWMtMjcuMTc4LDAtNDkuMjA5LTE2Ljc2Ni00OS4yMDktMzcuNDQxICAgICBjMC0yMC42OCwyMi4wMzEtNDUuNDU5LDQ5LjIwOS00NS40NTlDOTEuMDY4LDM4Ljk1NCwxMTMuMSw2My43MzQsMTEzLjEsODQuNDEzeiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDQwMDsiIGQ9Ik0xMTMuMSw4NC40MTNjMCwyMC42NzYtMjIuMDMyLDM3LjQ0MS00OS4yMDksMzcuNDQxYy0yNy4xNzgsMC00OS4yMDktMTYuNzY2LTQ5LjIwOS0zNy40NDEgICAgIGMwLTIwLjY4LDIyLjAzMS0zNC45MjgsNDkuMjA5LTM0LjkyOEM5MS4wNjgsNDkuNDg2LDExMy4xLDYzLjczNCwxMTMuMSw4NC40MTN6Ii8+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZGODAwOyIgZD0iTTc0LjM3LDc0LjYxNWMwLDEuMzkzLTQuNjkxLDEuNjQzLTEwLjQ3OSwxLjY0M3MtMTAuNDc5LTAuMjUtMTAuNDc5LTEuNjQzICAgICBjMC0xLjM5NSw0LjY5MS01LjAzNywxMC40NzktNS4wMzdTNzQuMzcsNzMuMjIsNzQuMzcsNzQuNjE1eiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGQjAwMDsiIGQ9Ik0xMTMuMSw4NC40MTNjMCwyMC42NzYtMjIuMDMyLDM3LjQ0MS00OS4yMDksMzcuNDQxYy0yNy4xNzgsMC00OS4yMDktMTYuNzY2LTQ5LjIwOS0zNy40NDEgICAgIGMwLTIwLjY4Miw2LjI2MSwxOC4zNCw0OS4yMDksMTguMzRTMTEzLjEsNjMuNzMyLDExMy4xLDg0LjQxM3oiLz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNNjMuODkxLDEyMy4zNTVjLTI3Ljk2MSwwLTUwLjcwOS0xNy40NjktNTAuNzA5LTM4Ljk0MWMwLTIxLjI3LDIyLjYxOS00Ni45NTksNTAuNzA5LTQ2Ljk1OSAgICAgUzExNC42LDYzLjE0NCwxMTQuNiw4NC40MTNDMTE0LjYsMTA1Ljg4Niw5MS44NTIsMTIzLjM1NSw2My44OTEsMTIzLjM1NXogTTYzLjg5MSw0MC40NTRjLTI2LjQyOCwwLTQ3LjcwOSwyNC4wNDgtNDcuNzA5LDQzLjk1OSAgICAgYzAsMTkuODE4LDIxLjQwMiwzNS45NDEsNDcuNzA5LDM1Ljk0MVMxMTEuNiwxMDQuMjMyLDExMS42LDg0LjQxM0MxMTEuNiw2NC41MDIsOTAuMzE4LDQwLjQ1NCw2My44OTEsNDAuNDU0eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8Zz4KCQkJCTxnPgoJCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkQ0MDA7IiBkPSJNOS4xOTcsNDcuMjczYzYuMzg1LDEwLjU0MSwxNS4zMzEsMTYuNzM4LDIzLjk4NSwxNy44MTEgICAgICAgYzEuNDkyLTEwLjc1NC0wLjg3Mi0yMy4yMzItNy4yNTgtMzMuNzczQzE5LjUzOSwyMC43NjcsMTAuNTkzLDE0LjU3LDEuOTQsMTMuNTAxQzAuNDQ3LDI0LjI1MSwyLjgxMiwzNi43MzIsOS4xOTcsNDcuMjczeiIvPgoJCQkJPC9nPgoJCQkJPGc+CgkJCQkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGQjAwMDsiIGQ9Ik0xLjk0LDEzLjUwMWMtMS40OTIsMTAuNzUsMC44NzIsMjMuMjMsNy4yNTgsMzMuNzcxYzYuMzg1LDEwLjU0MSwxNS4zMzEsMTYuNzM4LDIzLjk4NSwxNy44MTEgICAgICAgTDEuOTQsMTMuNTAxeiIvPgoJCQkJPC9nPgoJCQkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik0zNC41ODcsNTEuMjk2Yy0xLjA0MS03LjMzNC0zLjU5My0xNC41MTQtNy4zNzktMjAuNzY0Yy02LjQxNy0xMC41OTQtMTUuNTYtMTcuMzQ0LTI1LjA4NS0xOC41MiAgICAgIGMtMC44MTYtMC4xMDEtMS41NTcsMC40Ny0xLjY2OSwxLjI4MmMtMS42MTEsMTEuNjAyLDEuMTA4LDI0LjI3LDcuNDYsMzQuNzU1YzQuMzM5LDcuMTY2LDkuOTYxLDEyLjYyMiwxNi4yNTksMTUuNzc4ICAgICAgYzAuMjE2LDAuMTA4LDAuNDQ0LDAuMTU5LDAuNjcxLDAuMTU5YzAuNTUsMCwxLjA3OS0wLjMwMywxLjM0Mi0wLjgyOGMwLjM3MS0wLjc0LDAuMDcyLTEuNjQyLTAuNjY5LTIuMDEzICAgICAgYy01Ljc5MS0yLjkwMy0xMC45OS03Ljk2OS0xNS4wMzYtMTQuNjUxYy0xLjg2MS0zLjA3MS0zLjM4NS02LjM0LTQuNTY3LTkuNzEzYzYuMS0xLDEzLjE1NywyLjExNywxMi4zMTQtMTIuOTg3ICAgICAgYzIuMzM4LDIuMzYyLDQuNTAzLDUuMTM3LDYuNDE0LDguMjkyYzMuNTc5LDUuOTA2LDUuOTksMTIuNjk0LDYuOTc1LDE5LjYzMWMwLjExNywwLjgyLDAuODc5LDEuMzg1LDEuNjk2LDEuMjc0ICAgICAgQzM0LjEzMyw1Mi44NzYsMzQuNzAzLDUyLjExNywzNC41ODcsNTEuMjk2eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnPgoJCQk8Zz4KCQkJCTxnPgoJCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkQ0MDA7IiBkPSJNMTE4LjU4NCw0Ny4yNzNjLTYuMzg1LDEwLjU0MS0xNS4zMzEsMTYuNzM4LTIzLjk4NSwxNy44MTEgICAgICAgYy0xLjQ5Mi0xMC43NTQsMC44NzEtMjMuMjMyLDcuMjU4LTMzLjc3M2M2LjM4Ni0xMC41NDMsMTUuMzMyLTE2Ljc0LDIzLjk4Ni0xNy44MDggICAgICAgQzEyNy4zMzQsMjQuMjUxLDEyNC45NzEsMzYuNzMyLDExOC41ODQsNDcuMjczeiIvPgoJCQkJPC9nPgoJCQkJPGc+CgkJCQkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGQjAwMDsiIGQ9Ik0xMjUuODQzLDEzLjUwMWMxLjQ5MSwxMC43NS0wLjg3MiwyMy4yMy03LjI1OSwzMy43NzEgICAgICAgYy02LjM4NSwxMC41NDEtMTUuMzMxLDE2LjczOC0yMy45ODUsMTcuODExTDEyNS44NDMsMTMuNTAxeiIvPgoJCQkJPC9nPgoJCQkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik0xMjcuMzI4LDEzLjI5NWMtMC4xMTItMC44MTMtMC44NTctMS4zODItMS42NjktMS4yODJjLTkuNTI1LDEuMTc2LTE4LjY2OSw3LjkyNi0yNS4wODYsMTguNTIgICAgICBjLTMuNzg3LDYuMjUzLTYuMzM5LDEzLjQzNC03LjM3OCwyMC43NjRjLTAuMTE2LDAuODIsMC40NTQsMS41OCwxLjI3NCwxLjY5NmMwLjgzMiwwLjExNCwxLjU4LTAuNDU1LDEuNjk2LTEuMjc0ICAgICAgYzAuOTgyLTYuOTM0LDMuMzk1LTEzLjcyMiw2Ljk3NC0xOS42MzFjMS45MTEtMy4xNTUsNC4wNzYtNS45Myw2LjQxNC04LjI5MmMtMC44NDQsMTUuMTA0LDYuMjE0LDExLjk4NywxMi4zMTUsMTIuOTg3ICAgICAgYy0xLjE4MiwzLjM3My0yLjcwNiw2LjY0Mi00LjU2Nyw5LjcxM2MtNC4wNDgsNi42ODQtOS4yNDcsMTEuNzUtMTUuMDM2LDE0LjY1MWMtMC43NDEsMC4zNzEtMS4wNCwxLjI3Mi0wLjY2OSwyLjAxMyAgICAgIGMwLjI2MywwLjUyNSwwLjc5MiwwLjgyOCwxLjM0MiwwLjgyOGMwLjIyNiwwLDAuNDU1LTAuMDUxLDAuNjcxLTAuMTU5YzYuMjk2LTMuMTU1LDExLjkxOC04LjYxMSwxNi4yNTktMTUuNzc4ICAgICAgQzEyNi4yMTksMzcuNTY3LDEyOC45MzksMjQuODk5LDEyNy4zMjgsMTMuMjk1eiIvPgoJCQk8L2c+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGMUExQTsiIGN4PSIzMi44ODkiIGN5PSI4Ny43NzUiIHI9IjcuMDEzIi8+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRDYxRDFEOyIgZD0iTTM5LjkwMiw4Ny43NzVjMCwzLjg3MS0zLjE0LDcuMDEyLTcuMDEzLDcuMDEyYy0zLjg3NCwwLTcuMDE0LTMuMTQxLTcuMDE0LTcuMDEyIi8+CgkJPC9nPgoJCTxnPgoJCQk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRjFBMUE7IiBjeD0iOTQuODkyIiBjeT0iODcuNzc1IiByPSI3LjAxNCIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6I0Q2MUQxRDsiIGQ9Ik0xMDEuOTA1LDg3Ljc3NWMwLDMuODcxLTMuMTQxLDcuMDEyLTcuMDE0LDcuMDEyYy0zLjg3MywwLTcuMDE0LTMuMTQxLTcuMDE0LTcuMDEyIi8+CgkJPC9nPgoJPC9nPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik03My41MjgsODAuMjgxYy0wLjgyOCwwLTEuNSwwLjY3Mi0xLjUsMS41YzAsMS40MjctMS4xNjIsMi41ODgtMi41OTEsMi41ODhoLTEuNDU2ICAgYy0xLjQyOCwwLTIuNTktMS4xNjEtMi41OS0yLjU4OHYtMS40NTVjMC0wLjA3My0wLjAxMS0wLjE0My0wLjAyMS0wLjIxM2wzLjExLTEuNTU2YzAuNjIyLTAuMzEyLDAuOTQ5LTEuMDEsMC43ODktMS42ODcgICBzLTAuNzY1LTEuMTU1LTEuNDYtMS4xNTVoLTcuODM3Yy0wLjY5NSwwLTEuMywwLjQ3OS0xLjQ2LDEuMTU1czAuMTY3LDEuMzc1LDAuNzg5LDEuNjg3bDMuMTA5LDEuNTU2ICAgYy0wLjAxLDAuMDctMC4wMjEsMC4xNC0wLjAyMSwwLjIxM3YxLjQ1NWMwLDEuNDI3LTEuMTYxLDIuNTg4LTIuNTg5LDIuNTg4aC0xLjQ1N2MtMS40MjksMC0yLjU5MS0xLjE2MS0yLjU5MS0yLjU4OCAgIGMwLTAuODI4LTAuNjcyLTEuNS0xLjUtMS41cy0xLjUsMC42NzItMS41LDEuNWMwLDMuMDgxLDIuNTA4LDUuNTg4LDUuNTkxLDUuNTg4aDEuNDU3YzEuNjE2LDAsMy4wNjktMC42OTMsNC4wOS0xLjc5MiAgIGMxLjAyMSwxLjA5OSwyLjQ3NSwxLjc5Miw0LjA5MSwxLjc5MmgxLjQ1NmMzLjA4MywwLDUuNTkxLTIuNTA3LDUuNTkxLTUuNTg4Qzc1LjAyOCw4MC45NTMsNzQuMzU3LDgwLjI4MSw3My41MjgsODAuMjgxeiIvPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzZENUM0RDsiIGQ9Ik00Ny43MjksNzAuMTQ0YzAsNC40NDktMy42MDUsOC4wNTEtOC4wNTMsOC4wNTFjLTQuNDQ2LDAtOC4wNTEtMy42MDItOC4wNTEtOC4wNTEgICAgYzAtNC40NDcsMy42MDQtOC4wNTMsOC4wNTEtOC4wNTNDNDQuMTIzLDYyLjA5MSw0Ny43MjksNjUuNjk3LDQ3LjcyOSw3MC4xNDR6Ii8+Cgk8L2c+Cgk8Zz4KCQk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBjeD0iMzUuNjcyIiBjeT0iNjcuNTI3IiByPSIzLjI4MSIvPgoJPC9nPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik0zOS42NzYsNjAuNTkxYy0zLjI0NSwwLTYuMTEzLDEuNjMtNy44NCw0LjExMWMtMC4xMDUsMC4xNDMtMC4xOTcsMC4yOTMtMC4yODYsMC40NDcgICBjLTAuODk3LDEuNDU1LTEuNDI1LDMuMTYzLTEuNDI1LDQuOTk1YzAsNS4yNjcsNC4yODQsOS41NTEsOS41NTEsOS41NTFjNS4yNjgsMCw5LjU1My00LjI4NCw5LjU1My05LjU1MSAgIEM0OS4yMjksNjQuODc2LDQ0Ljk0Myw2MC41OTEsMzkuNjc2LDYwLjU5MXogTTM5LjY3Niw3Ni42OTVjLTIuNzIxLDAtNS4wNTgtMS42NjgtNi4wNDctNC4wMzVjMC42ODEtMC4wMTgsMS41MTEtMC4yMDIsMi40NC0wLjM5NCAgIGMwLjM1Ni0wLjAzLDAuNjk5LTAuMDk3LDEuMDI5LTAuMjAxYzAuODA5LTAuMTQ1LDEuNjc1LTAuMjU5LDIuNTc3LTAuMjU5YzIuNDEzLDAsNC41NzMsMC44MTQsNi4wNDksMC44NTQgICBDNDQuNzM2LDc1LjAyNyw0Mi4zOTgsNzYuNjk1LDM5LjY3Niw3Ni42OTV6Ii8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBjeD0iMzUuNjcyIiBjeT0iNjcuNTI3IiByPSIxLjc3OSIvPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzZENUM0RDsiIGQ9Ik05Ni4xNTUsNzAuMTQ0YzAsNC40NDktMy42MDQsOC4wNTEtOC4wNTEsOC4wNTFjLTQuNDQ3LDAtOC4wNTItMy42MDItOC4wNTItOC4wNTEgICAgYzAtNC40NDcsMy42MDQtOC4wNTMsOC4wNTItOC4wNTNDOTIuNTUxLDYyLjA5MSw5Ni4xNTUsNjUuNjk3LDk2LjE1NSw3MC4xNDR6Ii8+Cgk8L2c+Cgk8Zz4KCQk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBjeD0iODQuMSIgY3k9IjY3LjUyNyIgcj0iMy4yOCIvPgoJPC9nPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik04OC4xMDUsNjAuNTkxYy0zLjI0MywwLTYuMTEsMS42MjktNy44MzcsNC4xMDhjLTAuMTA3LDAuMTQ1LTAuMjAxLDAuMjk4LTAuMjkyLDAuNDU1ICAgYy0wLjg5NiwxLjQ1NC0xLjQyMywzLjE2LTEuNDIzLDQuOTljMCw1LjI2Nyw0LjI4NSw5LjU1MSw5LjU1Miw5LjU1MXM5LjU1MS00LjI4NCw5LjU1MS05LjU1MSAgIEM5Ny42NTUsNjQuODc2LDkzLjM3MSw2MC41OTEsODguMTA1LDYwLjU5MXogTTg4LjEwNSw3Ni42OTVjLTIuNzIxLDAtNS4wNTktMS42NjgtNi4wNDgtNC4wMzUgICBjMC42ODktMC4wMTksMS41MjctMC4yMDEsMi40NzEtMC4zOTdjMC4zMzUtMC4wMywwLjY1OC0wLjA5MywwLjk3LTAuMTg5YzAuODE5LTAuMTQ4LDEuNjkzLTAuMjY4LDIuNjA3LTAuMjY4ICAgYzIuNDEzLDAsNC41NzEsMC44MTQsNi4wNDcsMC44NTRDOTMuMTYzLDc1LjAyNyw5MC44MjYsNzYuNjk1LDg4LjEwNSw3Ni42OTV6Ii8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBjeD0iODQuMTAxIiBjeT0iNjcuNTI3IiByPSIxLjc3OSIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="/>
                                                </a>
                                            </li>
                                            <li class="traded-assets__item">
                                                <a href="#3">
                                                    <img
                                                        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxMjcuNTQzIDEyNy41NDMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyNy41NDMgMTI3LjU0MzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPGc+CgkJPGc+CgkJCTxnPgoJCQkJPHBhdGggc3R5bGU9ImZpbGw6IzBENUM5RTsiIGQ9Ik0xMS41NzMsMTUuMjY4Yy03LjA0Nyw5LjY4LTguNTIzLDIyLjg4MS0yLjY1NSwzNC4yNDZjNS44NjcsMTEuMzcxLDE3LjQ4MSwxNy44MSwyOS40NTgsMTcuNjc4ICAgICAgYzcuMDQ3LTkuNjg0LDguNTIyLTIyLjg4MSwyLjY1NC0zNC4yNUMzNS4xNjIsMjEuNTc0LDIzLjU1MSwxNS4xMzMsMTEuNTczLDE1LjI2OHoiLz4KCQkJPC9nPgoJCQk8Zz4KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMDlCRTg7IiBkPSJNMzguMzc2LDY3LjE5MWM3LjA0Ny05LjY4NCw4LjUyMi0yMi44ODEsMi42NTQtMzQuMjVjLTUuODY4LTExLjM2Ny0xNy40NzktMTcuODA5LTI5LjQ1Ny0xNy42NzQgICAgICAiLz4KCQkJPC9nPgoJCQk8Zz4KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNMzguMDAxLDY4LjY5M2MtMTIuODg4LDAtMjQuNTE3LTcuMDU4LTMwLjQxNi0xOC40OTJjLTUuOTYzLTExLjU0OS00LjktMjUuMjczLDIuNzc1LTM1LjgxNiAgICAgIGMwLjI3OS0wLjM4MywwLjcyMi0wLjYxMSwxLjE5Ni0wLjYxN2MwLjEzMi0wLjAwMSwwLjI2Ni0wLjAwMiwwLjM5Ny0wLjAwMmMxMi44ODMsMCwyNC41MDgsNy4wNTYsMzAuNDEsMTguNDg3ICAgICAgYzUuOTYyLDExLjU1MSw0Ljg5OSwyNS4yNzYtMi43NzQsMzUuODIxYy0wLjI3OSwwLjM4My0wLjcyMiwwLjYxMi0xLjE5NiwwLjYxN0MzOC4yNjIsNjguNjkyLDM4LjEzMSw2OC42OTMsMzguMDAxLDY4LjY5M3ogICAgICAgTTEyLjM0OCwxNi43NjhjLTYuNjA0LDkuNTM0LTcuNDIxLDIxLjc0Ny0yLjA5NywzMi4wNThjNS4zMiwxMC4zMTIsMTUuNzUxLDE2LjcyMSwyNy4zNTEsMTYuODY2ICAgICAgYzYuNjAyLTkuNTM2LDcuNDE4LTIxLjc1LDIuMDk2LTMyLjA2MkMzNC4zNzUsMjMuMzE5LDIzLjk0NCwxNi45MTEsMTIuMzQ4LDE2Ljc2OHoiLz4KCQkJPC9nPgoJCTwvZz4KCQk8Zz4KCQkJPGc+CgkJCQk8cGF0aCBzdHlsZT0iZmlsbDojMEQ1QzlFOyIgZD0iTTExNS45NywxNS4yNjhjNy4wNDcsOS42OCw4LjUyMywyMi44ODEsMi42NTUsMzQuMjQ2Yy01Ljg2NywxMS4zNzEtMTcuNDgsMTcuODEtMjkuNDU4LDE3LjY3OCAgICAgIGMtNy4wNDctOS42ODQtOC41MjItMjIuODgxLTIuNjU0LTM0LjI1QzkyLjM4MSwyMS41NzQsMTAzLjk5MiwxNS4xMzMsMTE1Ljk3LDE1LjI2OHoiLz4KCQkJPC9nPgoJCQk8Zz4KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMDlCRTg7IiBkPSJNODkuMTY3LDY3LjE5MWMtNy4wNDctOS42ODQtOC41MjItMjIuODgxLTIuNjU0LTM0LjI1YzUuODY4LTExLjM2NywxNy40NzktMTcuODA5LDI5LjQ1Ny0xNy42NzQgICAgICAiLz4KCQkJPC9nPgoJCQk8Zz4KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNODkuNTQyLDY4LjY5M2MtMC4xMzEsMC0wLjI2LTAuMDAxLTAuMzkyLTAuMDAyYy0wLjQ3NC0wLjAwNS0wLjkxNy0wLjIzNC0xLjE5Ni0wLjYxNyAgICAgIGMtNy42NzMtMTAuNTQ1LTguNzM2LTI0LjI3MS0yLjc3NC0zNS44MmM1LjkwMS0xMS40MzIsMTcuNTI4LTE4LjQ4OCwzMC40MS0xOC40ODhjMC4xMzIsMCwwLjI2NCwwLjAwMSwwLjM5NywwLjAwMiAgICAgIGMwLjQ3NCwwLjAwNiwwLjkxNywwLjIzNCwxLjE5NiwwLjYxN2M3LjY3NSwxMC41NDMsOC43MzksMjQuMjY4LDIuNzc1LDM1LjgxN0MxMTQuMDU5LDYxLjYzNSwxMDIuNDI5LDY4LjY5Myw4OS41NDIsNjguNjkzeiAgICAgICBNMTE1LjE5NSwxNi43NjhjLTExLjU5NywwLjE0My0yMi4wMjcsNi41NTEtMjcuMzUsMTYuODYycy00LjUwNiwyMi41MjUsMi4wOTYsMzIuMDYyYzExLjYtMC4xNDUsMjIuMDMtNi41NTUsMjcuMzUxLTE2Ljg2NSAgICAgIEMxMjIuNjE2LDM4LjUxNSwxMjEuNzk5LDI2LjMwMiwxMTUuMTk1LDE2Ljc2OHoiLz4KCQkJPC9nPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8Zz4KCQkJCTxnPgoJCQkJCTxnPgoJCQkJCQk8Zz4KCQkJCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMDlCRTg7IiBkPSJNMTI2LjA0Myw2OC44NDRjMCwyNi4xNjYtMjcuODgsNDcuMzgxLTYyLjI3MSw0Ny4zODFTMS41LDk1LjAxLDEuNSw2OC44NDQgICAgICAgICBjMC0yNi4xNjgsMjcuODgtNTcuNTI1LDYyLjI3MS01Ny41MjVTMTI2LjA0Myw0Mi42NzYsMTI2LjA0Myw2OC44NDR6Ii8+CgkJCQkJCTwvZz4KCQkJCQkJPGc+CgkJCQkJCQk8cGF0aCBzdHlsZT0iZmlsbDojMEQ1QzlFOyIgZD0iTTEyNi4wNDMsNjguODQ0YzAsMjYuMTY2LTI3Ljg4LDQ3LjM4MS02Mi4yNzEsNDcuMzgxUzEuNSw5NS4wMSwxLjUsNjguODQ0ICAgICAgICAgYzAtMjYuMTY4LDI3Ljg4LTQ0LjE5OSw2Mi4yNzEtNDQuMTk5UzEyNi4wNDMsNDIuNjc2LDEyNi4wNDMsNjguODQ0eiIvPgoJCQkJCQk8L2c+CgkJCQkJCTxnPgoJCQkJCQkJPHBhdGggc3R5bGU9ImZpbGw6IzA2M0I2NjsiIGQ9Ik0xMjYuMDQzLDY4Ljg0NGMwLDI2LjE2Ni0yNy44OCw0Ny4zODEtNjIuMjcxLDQ3LjM4MVMxLjUsOTUuMDEsMS41LDY4Ljg0NCAgICAgICAgIGMwLTI2LjE3LDcuOTIzLDIzLjIwOSw2Mi4yNzEsMjMuMjA5UzEyNi4wNDMsNDIuNjc0LDEyNi4wNDMsNjguODQ0eiIvPgoJCQkJCQk8L2c+CgkJCQkJCTxnPgoJCQkJCQkJPHBhdGggc3R5bGU9ImZpbGw6I0Y0RDdCODsiIGQ9Ik04MS44OCwzOC41NDFMNjMuNzcxLDU2LjY1TDQ1LjY2MywzOC41NDFjLTIyLjk2OCwzLjU1MS0zOS41NDcsMTQuNC0zOS41NDcsMzMuODE0ICAgICAgICAgYzAsMjQuMjI3LDI1LjgxMiw0My44NjksNTcuNjU1LDQzLjg2OXM1Ny42NTUtMTkuNjQzLDU3LjY1NS00My44NjlDMTIxLjQyNyw1Mi45NDMsMTA0Ljg0OCw0Mi4wOTIsODEuODgsMzguNTQxeiIvPgoJCQkJCQk8L2c+CgkJCQkJCTxnPgoJCQkJCQkJPHBhdGggc3R5bGU9ImZpbGw6I0ZDRTZDODsiIGQ9Ik0xMDQuMTg2LDQ1LjUyNWMtNi4yMjUtMy4zNjUtMTMuODI4LTUuNjc0LTIyLjMwNy02Ljk4NEw2My43NzEsNTYuNjVMNDUuNjYzLDM4LjU0MSAgICAgICAgIGMtOC40NzksMS4zMTEtMTYuMDgyLDMuNjE5LTIyLjMwNyw2Ljk4NGMxMC40MDQsNy43ODMsMjQuNjY5LDEyLjU5Miw0MC40MTUsMTIuNTkyICAgICAgICAgQzc5LjUxNyw1OC4xMTcsOTMuNzgyLDUzLjMwOSwxMDQuMTg2LDQ1LjUyNXoiLz4KCQkJCQkJPC9nPgoJCQkJCQk8Zz4KCQkJCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiNFQUM3OUQ7IiBkPSJNMTIxLjQyNyw3Mi4zNTVjMC0yLjY1Ni0wLjMyMS01LjE0OC0wLjkxNi03LjQ4OGMtNy4xNzMsOC4xOC0yMy4wMTgsMjcuMTg2LTU2LjczOSwyNy4xODYgICAgICAgICBTMTQuMjA1LDczLjA0Nyw3LjAzMiw2NC44NjdjLTAuNTk2LDIuMzQtMC45MTYsNC44MzItMC45MTYsNy40ODhjMCwyMy40NjksMjQuMjI1LDQyLjYzNyw1NC42ODcsNDMuODExICAgICAgICAgYzAuOTg0LDAuMDM1LDEuOTczLDAuMDU5LDIuOTY4LDAuMDU5YzAuOTk1LDAsMS45ODMtMC4wMjMsMi45NjgtMC4wNTlDOTcuMjAyLDExNC45OTIsMTIxLjQyNyw5NS44MjQsMTIxLjQyNyw3Mi4zNTV6Ii8+CgkJCQkJCTwvZz4KCQkJCQkJPGc+CgkJCQkJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTYzLjc3MSwxMTcuNzI1Yy0zMi42MTgsMC01OS4xNTUtMjAuMzUzLTU5LjE1NS00NS4zNjljMC0xOC42OTIsMTQuNDk2LTMxLjIyOCw0MC44MTgtMzUuMjk3ICAgICAgICAgYzAuNDczLTAuMDcsMC45NTIsMC4wODQsMS4yOSwwLjQyMmwxNy4wNDgsMTcuMDQ5TDgwLjgxOSwzNy40OGMwLjMzNy0wLjMzOSwwLjgxOS0wLjQ5NiwxLjI5LTAuNDIyICAgICAgICAgYzI2LjMyMiw0LjA2OSw0MC44MTgsMTYuNjA0LDQwLjgxOCwzNS4yOTdDMTIyLjkyNyw5Ny4zNzIsOTYuMzksMTE3LjcyNSw2My43NzEsMTE3LjcyNXogTTQ1LjE0Myw0MC4xNDMgICAgICAgICBDMzAuNzc2LDQyLjQ4NCw3LjYxNiw0OS43Nyw3LjYxNiw3Mi4zNTVjMCwyMy4zNjIsMjUuMTkxLDQyLjM2OSw1Ni4xNTUsNDIuMzY5czU2LjE1NS0xOS4wMDcsNTYuMTU1LTQyLjM2OSAgICAgICAgIGMwLTIyLjU4Ni0yMy4xNi0yOS44NzEtMzcuNTI3LTMyLjIxM0w2NC44MzIsNTcuNzExYy0wLjU2MywwLjU2My0xLjU1OSwwLjU2My0yLjEyMSwwTDQ1LjE0Myw0MC4xNDN6Ii8+CgkJCQkJCTwvZz4KCQkJCQkJPGc+CgkJCQkJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTYzLjc3MSwxMTcuNzI1QzI4LjYwOCwxMTcuNzI1LDAsOTUuNzk3LDAsNjguODQ0QzAsNDIuMTA4LDI4LjQ0Niw5LjgxOCw2My43NzEsOS44MTggICAgICAgICBzNjMuNzcxLDMyLjI5LDYzLjc3MSw1OS4wMjVDMTI3LjU0Myw5NS43OTcsOTguOTM1LDExNy43MjUsNjMuNzcxLDExNy43MjV6IE02My43NzEsMTIuODE4QzMwLjEwOCwxMi44MTgsMyw0My40NjgsMyw2OC44NDQgICAgICAgICBjMCwyNS4yOTksMjcuMjYyLDQ1Ljg4MSw2MC43NzEsNDUuODgxczYwLjc3MS0yMC41ODIsNjAuNzcxLTQ1Ljg4MUMxMjQuNTQzLDQzLjQ2OCw5Ny40MzUsMTIuODE4LDYzLjc3MSwxMi44MTh6Ii8+CgkJCQkJCTwvZz4KCQkJCQk8L2c+CgkJCQk8L2c+CgkJCTwvZz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiNGQ0U2Qzg7IiBkPSJNNzYuMTg3LDgyLjAyMWMwLDIuNjEzLTUuNTU5LDEuMTQ2LTEyLjQxNiwxLjE0NnMtMTIuNDE2LDEuNDY3LTEyLjQxNi0xLjE0NiAgICAgczUuNTU5LTQuNzM0LDEyLjQxNi00LjczNFM3Ni4xODcsNzkuNDA4LDc2LjE4Nyw4Mi4wMjF6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxnPgoJCQkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik01My42MDgsNzMuMzA5Yy0wLjYxNiwwLTEuMTk0LTAuMzgzLTEuNDEzLTAuOTk2Yy0xLjAzMi0yLjg5Ni0zLjA3MS00Ljc3MS02LjA1OS01LjU3ICAgICAgYy0yLjc4MS0wLjc0NS02LjIxLTAuNDc2LTkuNjU4LDAuNzU1Yy0wLjc4MywwLjI3OC0xLjYzOS0wLjEyOS0xLjkxNy0wLjkwOWMtMC4yNzktMC43OCwwLjEyOC0xLjYzOCwwLjkwOC0xLjkxNyAgICAgIGM0LjAxNi0xLjQzMyw4LjA3OS0xLjcyOCwxMS40NDItMC44MjdjMy45NDIsMS4wNTUsNi43NDYsMy42MzUsOC4xMSw3LjQ2MWMwLjI3OCwwLjc4LTAuMTI5LDEuNjM5LTAuOTEsMS45MTcgICAgICBDNTMuOTQ1LDczLjI4MSw1My43NzUsNzMuMzA5LDUzLjYwOCw3My4zMDl6Ii8+CgkJCTwvZz4KCQkJPGc+CgkJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTczLjkzNCw3My4zMDljLTAuMTY3LDAtMC4zMzctMC4wMjctMC41MDQtMC4wODdjLTAuNzgtMC4yNzgtMS4xODctMS4xMzctMC45MDktMS45MTcgICAgICBjMS4zNjQtMy44MjYsNC4xNjktNi40MDYsOC4xMTEtNy40NjFjMy4zNjItMC45LDcuNDI2LTAuNjA1LDExLjQ0MiwwLjgyN2MwLjc4LDAuMjc5LDEuMTg3LDEuMTM3LDAuOTA4LDEuOTE3ICAgICAgYy0wLjI3OCwwLjc4MS0xLjEzNSwxLjE4OC0xLjkxNywwLjkwOWMtMy40NDgtMS4yMzEtNi44NzgtMS41MDEtOS42NTgtMC43NTVjLTIuOTg5LDAuOC01LjAyOCwyLjY3NC02LjA2LDUuNTcgICAgICBDNzUuMTI3LDcyLjkyNiw3NC41NSw3My4zMDksNzMuOTM0LDczLjMwOXoiLz4KCQkJPC9nPgoJCTwvZz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTg0LjYyNyw4MS4xNDRjLTAuMTI0LTAuMDYtMC4yNTQtMC4xMDktMC4zOTctMC4xMzRsLTMuNTE0LTAuNjAyICAgIGMtMC4zOTEtMC4wNy0wLjc5NSwwLjAyMy0xLjEyLDAuMjU0cy0wLjU0NSwwLjU4LTAuNjEyLDAuOTczbC0wLjU4MSwzLjQwNmMtMy4yMjksMC45NDUtOC4xNDIsMS43NTQtMTQuNjMzLDEuNzU0ICAgIHMtMTEuNDA0LTAuODEtMTQuNjMzLTEuNzU0bC0wLjU4MS0zLjQwNmMtMC4wNjctMC4zOTMtMC4yODctMC43NDItMC42MTItMC45NzNzLTAuNzMtMC4zMjMtMS4xMi0wLjI1NGwtMy41MTQsMC42MDIgICAgYy0wLjE0MywwLjAyNC0wLjI3MywwLjA3NC0wLjM5NywwLjEzNGMtMC43MjEsMC4xMDktMS4yNzYsMC43MjYtMS4yNzYsMS40NzdjMCw0LjkyOSwxMS40NzMsNy4xNzQsMjIuMTMyLDcuMTc0ICAgIHMyMi4xMzItMi4yNDUsMjIuMTMyLTcuMTc0Qzg1LjkwMyw4MS44Nyw4NS4zNDksODEuMjUzLDg0LjYyNyw4MS4xNDR6IE00NS44ODEsODMuNzg0Yy0wLjA4My0wLjA0Ni0wLjE0NC0wLjA4OS0wLjIyLTAuMTMzICAgIGwwLjE5MS0wLjAzM0w0NS44ODEsODMuNzg0eiBNODEuNjksODMuNjE4bDAuMTkxLDAuMDMzYy0wLjA3NSwwLjA0NS0wLjEzNiwwLjA4OC0wLjIyLDAuMTMzTDgxLjY5LDgzLjYxOHoiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"/>
                                                </a>
                                            </li>
                                            <li class="traded-assets__item">
                                                <a href="#3">
                                                    <img
                                                        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxMjcuNTg0IDEyNy41ODQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyNy41ODQgMTI3LjU4NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPGc+CgkJPGc+CgkJCTxnPgoJCQkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDQwMDsiIGQ9Ik0zOS4xMzYsMTMuMzc3Yy0yLjk2NSw1LjEzMy0zLjAxOCwxMS4xNDQtMC42OCwxNi4xMzVjNS40OS0wLjQ3MSwxMC42Ny0zLjUyMSwxMy42MzUtOC42NTYgICAgICBjMi45NjMtNS4xMzMsMy4wMTgtMTEuMTQ1LDAuNjgtMTYuMTM1QzQ3LjI4MSw1LjE4OSw0Mi4wOTksOC4yNDQsMzkuMTM2LDEzLjM3N3oiLz4KCQkJPC9nPgoJCQk8Zz4KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkMyMDA7IiBkPSJNMzguNDU3LDI5LjUxMmM1LjQ5LTAuNDcxLDEwLjY3LTMuNTIxLDEzLjYzNS04LjY1NmMyLjk2My01LjEzMywzLjAxOC0xMS4xNDUsMC42OC0xNi4xMzUiLz4KCQkJPC9nPgoJCQk8Zz4KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRjVCMDA7IiBkPSJNMzkuMzQzLDE3Ljg3M2MtMi4wMDQsMy40NjktMi4wMzksNy41MjktMC40NTksMTAuOWMzLjcwNy0wLjMxOCw3LjIwNS0yLjM3OSw5LjIwOS01Ljg0OCAgICAgIGMyLTMuNDY3LDIuMDM3LTcuNTI3LDAuNDU3LTEwLjg5N0M0NC44NDMsMTIuMzQ2LDQxLjM0MywxNC40MDYsMzkuMzQzLDE3Ljg3M3oiLz4KCQkJPC9nPgoJCQk8Zz4KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRjc5MDA7IiBkPSJNMzguODg0LDI4Ljc3M2MzLjcwNy0wLjMxOCw3LjIwNS0yLjM3OSw5LjIwOS01Ljg0OGMyLTMuNDY3LDIuMDM3LTcuNTI3LDAuNDU3LTEwLjg5NyIvPgoJCQk8L2c+CgkJCTxnPgoJCQkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik0zOC40NTYsMzEuMDEyYy0wLjU3OCwwLTEuMTA5LTAuMzMzLTEuMzU4LTAuODYzYy0yLjYzMS01LjYxNi0yLjM1NC0xMi4xNjYsMC43MzktMTcuNTIxaDAgICAgICBjMy4wOTQtNS4zNTksOC42MjktOC44NzMsMTQuODA3LTkuNGMwLjYyMS0wLjA1NywxLjIxOSwwLjI4OSwxLjQ4NiwwLjg1N2MyLjYzLDUuNjE0LDIuMzU0LDEyLjE2NC0wLjczOSwxNy41MjEgICAgICBjLTMuMDkzLDUuMzU2LTguNjI4LDguODcxLTE0LjgwNiw5LjRDMzguNTQyLDMxLjAxLDM4LjQ5OSwzMS4wMTIsMzguNDU2LDMxLjAxMnogTTUxLjgzNCw2LjM0MiAgICAgIGMtNC43NjcsMC43MzEtOC45NzUsMy41ODUtMTEuMzk5LDcuNzg1YzAsMCwwLDAsMCwwYy0yLjQyNCw0LjE5Ny0yLjc5Miw5LjI2OC0xLjA0MiwxMy43NjNjNC43NjgtMC43MzIsOC45NzYtMy41ODYsMTEuNC03Ljc4NCAgICAgIEM1My4yMTYsMTUuOTA2LDUzLjU4NCwxMC44MzYsNTEuODM0LDYuMzQyeiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnPgoJCQk8Zz4KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkQ0MDA7IiBkPSJNNDcuNTQxLDE2LjExNWMtNS4xMzUsMi45NjMtOC4xODYsOC4xNDMtOC42NTYsMTMuNjMzYzQuOTksMi4zMzgsMTEuMDAyLDIuMjg1LDE2LjEzNy0wLjY3OCAgICAgIGM1LjEzMy0yLjk2NSw4LjE4Ni04LjE0NCw4LjY1Ni0xMy42MzVDNTguNjg3LDEzLjA5OCw1Mi42NzMsMTMuMTUsNDcuNTQxLDE2LjExNXoiLz4KCQkJPC9nPgoJCQk8Zz4KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkMyMDA7IiBkPSJNMzguODg0LDI5Ljc0OGM0Ljk5LDIuMzM4LDExLjAwMiwyLjI4NSwxNi4xMzctMC42NzhjNS4xMzMtMi45NjUsOC4xODYtOC4xNDQsOC42NTYtMTMuNjM1Ii8+CgkJCTwvZz4KCQkJPGc+CgkJCQk8cGF0aCBzdHlsZT0iZmlsbDojRkY1QjAwOyIgZD0iTTQ1LjQ3LDIwLjExM2MtMy40NjksMi4wMDItNS41MjksNS41LTUuODQ2LDkuMjA5YzMuMzY5LDEuNTc4LDcuNDMsMS41NDMsMTAuODk4LTAuNDU5ICAgICAgYzMuNDY1LTIuMDAyLDUuNTI3LTUuNSw1Ljg0NC05LjIwOUM1MywxOC4wNzYsNDguOTM3LDE4LjEwOSw0NS40NywyMC4xMTN6Ii8+CgkJCTwvZz4KCQkJPGc+CgkJCQk8cGF0aCBzdHlsZT0iZmlsbDojRkY3OTAwOyIgZD0iTTM5LjYyNSwyOS4zMjJjMy4zNjksMS41NzgsNy40MywxLjU0MywxMC44OTgtMC40NTljMy40NjUtMi4wMDIsNS41MjctNS41LDUuODQ0LTkuMjA5Ii8+CgkJCTwvZz4KCQkJPGc+CgkJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTQ2LjMwNywzMi45Yy0yLjc0NywwLTUuNS0wLjU5NS04LjA1OS0xLjc5NGMtMC41NjktMC4yNjctMC45MTItMC44Ni0wLjg1OC0xLjQ4NiAgICAgIGMwLjUzLTYuMTc5LDQuMDQ0LTExLjcxMyw5LjQtMTQuODA0bDAsMGM1LjM1Ny0zLjA5NCwxMS45MDctMy4zNzEsMTcuNTIzLTAuNzM5YzAuNTY5LDAuMjY3LDAuOTEyLDAuODYsMC44NTgsMS40ODYgICAgICBjLTAuNTMsNi4xNzctNC4wNDQsMTEuNzEyLTkuNCwxNC44MDZDNTIuODU1LDMyLjA1Miw0OS41ODYsMzIuOSw0Ni4zMDcsMzIuOXogTTQwLjUwNiwyOC44MTIgICAgICBjNC40OTQsMS43NDksOS41NjUsMS4zODIsMTMuNzY2LTEuMDRjNC4xOTgtMi40MjUsNy4wNTEtNi42MzMsNy43ODQtMTEuMzk5Yy00LjQ5Ny0xLjc1MS05LjU2Ny0xLjM4My0xMy43NjUsMS4wNDIgICAgICBjMCwwLDAsMC0wLjAwMSwwQzQ0LjA5MiwxOS44MzcsNDEuMjM5LDI0LjA0NCw0MC41MDYsMjguODEyeiIvPgoJCQk8L2c+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiNFODYyMDc7IiBkPSJNNjMuMjQyLDgwLjg0QzQ1LjI3MSw3OS40MzYsMzEuODQzLDYzLjcyOCwzMy4yNSw0NS43NThjMC40NjMtNS45MzksMi41MTYtMTEuMzY1LDUuNjcxLTE1Ljk0MSAgICAgQzI2LjYyLDMzLjcxMywxNy4yODcsNDQuNzI1LDE2LjIxOCw1OC4zODFDMTQuODE0LDc2LjM1LDI4LjI0Miw5Mi4wNTcsNDYuMjEyLDkzLjQ2M2MxMi4wMjksMC45MzksMjMuMDE5LTQuNzg3LDI5LjQxLTE0LjA1MyAgICAgQzcxLjczNiw4MC42NDEsNjcuNTU4LDgxLjE3OCw2My4yNDIsODAuODR6Ii8+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRjc3ODE5OyIgZD0iTTMwLjkxNSwzMy42MzdjLTMuMDI3LDQuNTAyLTQuOTgyLDkuODE0LTUuNDM2LDE1LjYxM2MtMS40MDUsMTcuOTY5LDEyLjAyMywzMy42NzYsMjkuOTkzLDM1LjA4ICAgICBjNy4xNjQsMC41NjEsMTMuOTUtMS4yNTgsMTkuNjI1LTQuNzY4Yy0zLjczOCwxLjExNS03LjczMiwxLjYtMTEuODU2LDEuMjc3QzQ1LjI3MSw3OS40MzYsMzEuODQzLDYzLjcyOCwzMy4yNSw0NS43NTggICAgIGMwLjQ2My01LjkzOSwyLjUxNi0xMS4zNjUsNS42NzEtMTUuOTQxQzM2LjA2OCwzMC43MjMsMzMuMzgyLDMyLjAyMSwzMC45MTUsMzMuNjM3eiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik00OC43MTgsOTUuMDYxYy0wLjg3MiwwLTEuNzQ2LTAuMDM0LTIuNjIzLTAuMTAzQzI3LjMzLDkzLjQ5LDEzLjI1Niw3Ny4wMjksMTQuNzIzLDU4LjI2NCAgICAgYzEuMDktMTMuOTI2LDEwLjQxLTI1LjY1MywyMy43NDUtMjkuODc3YzAuNjEyLTAuMTk2LDEuMjc4LDAuMDIyLDEuNjU5LDAuNTM3YzAuMzgxLDAuNTE2LDAuMzkzLDEuMjE3LDAuMDI5LDEuNzQ0ICAgICBjLTMuMTE2LDQuNTItNC45ODcsOS43NzgtNS40MSwxNS4yMDZjLTAuNjQ5LDguMjkzLDEuOTcsMTYuMzQxLDcuMzc1LDIyLjY2MmM1LjQwNCw2LjMyMiwxMi45NDcsMTAuMTYsMjEuMjM5LDEwLjgwOWgwICAgICBjMy45ODgsMC4zMTMsNy45NjQtMC4xNDYsMTEuODExLTEuMzY0YzAuNjEtMC4xOTYsMS4yNzcsMC4wMjIsMS42NTksMC41MzhjMC4zODEsMC41MTUsMC4zOTMsMS4yMTYsMC4wMjksMS43NDMgICAgIEM3MC40NTYsODkuNTQzLDU5Ljg1Miw5NS4wNiw0OC43MTgsOTUuMDYxeiBNMzUuMzg5LDMyLjgxMUMyNS4zOCwzNy41NDcsMTguNTk1LDQ3LjIzMywxNy43MTQsNTguNDk4ICAgICBjLTEuMzM4LDE3LjExNSwxMS40OTksMzIuMTMsMjguNjE2LDMzLjQ3YzkuNTc4LDAuNzUsMTguOTU4LTMuMDQzLDI1LjM4My0xMC4wNTJjLTIuODMxLDAuNTA0LTUuNzA1LDAuNjQ2LTguNTg4LDAuNDE5ICAgICBjLTkuMDktMC43MS0xNy4zNi00LjkxOC0yMy4yODYtMTEuODQ5Yy01LjkyNS02LjkzMS04Ljc5Ni0xNS43NTUtOC4wODUtMjQuODQ2QzMyLjEwMyw0MS4xNywzMy4zNDYsMzYuODA2LDM1LjM4OSwzMi44MTF6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkFENDA7IiBkPSJNMTA3LjkwMyw4OC42NDNjMCwyMC42NzYtMjIuMDMyLDM3LjQ0MS00OS4yMDksMzcuNDQxYy0yNy4xNzgsMC00OS4yMDktMTYuNzY2LTQ5LjIwOS0zNy40NDEgICAgIGMwLTIwLjY4LDIyLjAzMS00NS40NTksNDkuMjA5LTQ1LjQ1OUM4NS44NzEsNDMuMTg0LDEwNy45MDMsNjcuOTYzLDEwNy45MDMsODguNjQzeiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6I0Y3NzgxOTsiIGQ9Ik0xMDcuOTAzLDg4LjY0M2MwLDIwLjY3Ni0yMi4wMzIsMzcuNDQxLTQ5LjIwOSwzNy40NDFjLTI3LjE3OCwwLTQ5LjIwOS0xNi43NjYtNDkuMjA5LTM3LjQ0MSAgICAgYzAtMjAuNjgsMjIuMDMxLTM0LjkyOCw0OS4yMDktMzQuOTI4Qzg1Ljg3MSw1My43MTUsMTA3LjkwMyw2Ny45NjMsMTA3LjkwMyw4OC42NDN6Ii8+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZBRDQwOyIgZD0iTTY5LjEzLDgyLjc4N2MwLDEuMzk1LTQuNjkxLDEuNjQ1LTEwLjQ3OCwxLjY0NWMtNS43ODcsMC0xMC40NzktMC4yNS0xMC40NzktMS42NDUgICAgIGMwLTEuMzkzLDQuNjkxLTUuMDM1LDEwLjQ3OS01LjAzNUM2NC40MzksNzcuNzUyLDY5LjEzLDgxLjM5NCw2OS4xMyw4Mi43ODd6Ii8+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRTg2MjA3OyIgZD0iTTEwNy45MDMsODguNjQzYzAsMjAuNjc2LTIyLjAzMiwzNy40NDEtNDkuMjA5LDM3LjQ0MWMtMjcuMTc4LDAtNDkuMjA5LTE2Ljc2Ni00OS4yMDktMzcuNDQxICAgICBjMC0yMC42ODIsNi4yNjEsMTguMzQsNDkuMjA5LDE4LjM0QzEwMS42NDIsMTA2Ljk4MiwxMDcuOTAzLDY3Ljk2MSwxMDcuOTAzLDg4LjY0M3oiLz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNNTguNjk0LDEyNy41ODRjLTI3Ljk2MSwwLTUwLjcwOS0xNy40NjktNTAuNzA5LTM4Ljk0MWMwLTIxLjI3LDIyLjYyLTQ2Ljk1OSw1MC43MDktNDYuOTU5ICAgICBzNTAuNzA5LDI1LjY4OSw1MC43MDksNDYuOTU5QzEwOS40MDMsMTEwLjExNSw4Ni42NTUsMTI3LjU4NCw1OC42OTQsMTI3LjU4NHogTTU4LjY5NCw0NC42ODQgICAgIGMtMjYuNDI4LDAtNDcuNzA5LDI0LjA0OC00Ny43MDksNDMuOTU5YzAsMTkuODE4LDIxLjQwMiwzNS45NDEsNDcuNzA5LDM1Ljk0MXM0Ny43MDktMTYuMTIzLDQ3LjcwOS0zNS45NDEgICAgIEMxMDYuNDAzLDY4LjczMSw4NS4xMjIsNDQuNjg0LDU4LjY5NCw0NC42ODR6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzEzNjJBODsiIGQ9Ik00Mi41MzIsNzQuNTQ5YzAsNC40NDktMy42MDUsOC4wNTEtOC4wNTIsOC4wNTFjLTQuNDQ3LDAtOC4wNTEtMy42MDItOC4wNTEtOC4wNTEgICAgYzAtNC40NDcsMy42MDQtOC4wNTEsOC4wNTEtOC4wNTFDMzguOTI2LDY2LjQ5OCw0Mi41MzIsNzAuMTAyLDQyLjUzMiw3NC41NDl6Ii8+Cgk8L2c+Cgk8Zz4KCQk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBjeD0iMzAuNDc2IiBjeT0iNzEuOTMyIiByPSIzLjI4MSIvPgoJPC9nPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik0zNC40OCw2NC45OThjLTMuMjMzLDAtNi4wOTIsMS42MTktNy44Miw0LjA4NWMtMC4xMTksMC4xNTgtMC4yMjIsMC4zMjUtMC4zMjEsMC40OTggICBjLTAuODg4LDEuNDUtMS40MSwzLjE0Ny0xLjQxLDQuOTY4YzAsNS4yNjcsNC4yODUsOS41NTEsOS41NTEsOS41NTFjNS4yNjcsMCw5LjU1Mi00LjI4NCw5LjU1Mi05LjU1MVMzOS43NDcsNjQuOTk4LDM0LjQ4LDY0Ljk5OHogICAgTTM0LjQ4LDgxLjFjLTIuNzIxLDAtNS4wNTgtMS42NjgtNi4wNDYtNC4wMzRjMC42ODgtMC4wMTgsMS41MjUtMC4yLDIuNDY4LTAuMzk2YzAuMzM1LTAuMDMsMC42NTgtMC4wOTMsMC45Ny0wLjE4OSAgIGMwLjgxOS0wLjE0OCwxLjY5NC0wLjI2OCwyLjYwOC0wLjI2OGMyLjQxMiwwLDQuNTcxLDAuODEzLDYuMDQ3LDAuODUzQzM5LjUzOSw3OS40MzIsMzcuMjAxLDgxLjEsMzQuNDgsODEuMXoiLz4KCTxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGN4PSIzMC40NzUiIGN5PSI3MS45MzMiIHI9IjEuNzgiLz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiMxMzYyQTg7IiBkPSJNOTAuOTU5LDc0LjU0OWMwLDQuNDQ5LTMuNjA1LDguMDUxLTguMDUxLDguMDUxYy00LjQ0NywwLTguMDUyLTMuNjAyLTguMDUyLTguMDUxICAgIGMwLTQuNDQ3LDMuNjA0LTguMDUxLDguMDUyLTguMDUxQzg3LjM1NCw2Ni40OTgsOTAuOTU5LDcwLjEwMiw5MC45NTksNzQuNTQ5eiIvPgoJPC9nPgoJPGc+CgkJPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZGRkZGOyIgY3g9Ijc4LjkwMyIgY3k9IjcxLjkzMiIgcj0iMy4yOCIvPgoJPC9nPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik04Mi45MDgsNjQuOTk4Yy0zLjI0LDAtNi4xMDQsMS42MjUtNy44MzIsNC4wOTljLTAuMTExLDAuMTQ5LTAuMjA3LDAuMzA1LTAuMywwLjQ2NiAgIGMtMC44OTQsMS40NTMtMS40MiwzLjE1Ny0xLjQyLDQuOTg1YzAsNS4yNjcsNC4yODUsOS41NTEsOS41NTIsOS41NTFjNS4yNjYsMCw5LjU1MS00LjI4NCw5LjU1MS05LjU1MSAgIFM4OC4xNzQsNjQuOTk4LDgyLjkwOCw2NC45OTh6IE04Mi45MDgsODEuMWMtMi43MjEsMC01LjA1OS0xLjY2OC02LjA0Ny00LjAzNGMwLjY4OC0wLjAxOCwxLjUyNS0wLjIsMi40NjgtMC4zOTYgICBjMC4zMzYtMC4wMywwLjY2LTAuMDkzLDAuOTczLTAuMTljMC44MTktMC4xNDgsMS42OTMtMC4yNjcsMi42MDctMC4yNjdjMi40MTIsMCw0LjU3MSwwLjgxMyw2LjA0NiwwLjg1MyAgIEM4Ny45NjYsNzkuNDMyLDg1LjYyOCw4MS4xLDgyLjkwOCw4MS4xeiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik03OC45MDQsNzAuMTUyYy0wLjk4MiwwLTEuNzgxLDAuNzk4LTEuNzgxLDEuNzc5YzAsMC45ODIsMC43OTksMS43ODEsMS43ODEsMS43ODEgICBjMC45ODEsMCwxLjc3OS0wLjc5OSwxLjc3OS0xLjc4MUM4MC42ODMsNzAuOTUsNzkuODg1LDcwLjE1Miw3OC45MDQsNzAuMTUyeiIvPgoJPGc+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNNTYuMjI3LDkwLjg0Yy0wLjM5OCwwLTAuNzk2LTAuMTU3LTEuMDkxLTAuNDdsLTEuNS0xLjU4OGMtMC41NjktMC42MDMtMC41NDItMS41NTIsMC4wNi0yLjEyMSAgICAgYzAuNjAzLTAuNTY5LDEuNTUyLTAuNTQyLDIuMTIxLDAuMDYxbDEuNSwxLjU4OGMwLjU2OSwwLjYwMywwLjU0MiwxLjU1Mi0wLjA2LDIuMTIxQzU2Ljk2Niw5MC43MDQsNTYuNTk2LDkwLjg0LDU2LjIyNyw5MC44NHoiLz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNNjEuMTYxLDkwLjg0Yy0wLjM3LDAtMC43NC0wLjEzNi0xLjAzLTAuNDA5Yy0wLjYwMi0wLjU2OS0wLjYyOS0xLjUxOS0wLjA2LTIuMTIxbDEuNS0xLjU4OCAgICAgYzAuNTY5LTAuNjAzLDEuNTE4LTAuNjI5LDIuMTIxLTAuMDYxYzAuNjAyLDAuNTY5LDAuNjI5LDEuNTE5LDAuMDYsMi4xMjFsLTEuNSwxLjU4OEM2MS45NTcsOTAuNjgzLDYxLjU2LDkwLjg0LDYxLjE2MSw5MC44NHoiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8cG9seWxpbmUgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHBvaW50cz0iMzYuNDU4LDk0LjI5MSAzMS40MDQsOTcuMjY2IDMxLjA0Niw5MS40MTQgICAiLz4KCTwvZz4KCTxnPgoJCTxwb2x5bGluZSBzdHlsZT0iZmlsbDojRkZGRkZGOyIgcG9pbnRzPSI4MC45Myw5NC4yOTEgODUuOTg0LDk3LjI2NiA4Ni4zNDEsOTEuNDE0ICAgIi8+Cgk8L2c+Cgk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTg5LjU4Niw4NS40OTJjLTAuNzQ2LTAuMzYyLTEuNjQzLTAuMDU3LTIuMDA3LDAuNjg4Yy0wLjAzMywwLjA2OS0zLjQ1Myw2Ljc4NC0xNC45NTgsNi43ODQgICBjLTAuMTU3LDAtMC4zMTUtMC4wMDEtMC40NzUtMC4wMDRjLTguMDQxLTAuMTI1LTExLjc0NSwxLjUyMi0xMy40NTMsMy4xMDFjLTEuNzA3LTEuNTc4LTUuNDExLTMuMjI0LTEzLjQ1My0zLjEwMSAgIGMtMTEuNzQ0LDAuMjA4LTE1LjI4My02LjQ4My0xNS40MzctNi43ODhjLTAuMzY2LTAuNzM4LTEuMjYyLTEuMDQyLTIuMDAzLTAuNjgxYy0wLjc0NCwwLjM2NC0xLjA1MiwxLjI2My0wLjY4OCwyLjAwNyAgIGMwLjA3LDAuMTQzLDAuODI2LDEuNTk5LDIuNTksMy4yNjJjLTAuMTEsMC4yMjUtMC4xNzEsMC40NzctMC4xNTQsMC43NDVsMC4zNTcsNS44NTJjMC4wMzIsMC41MjEsMC4zMzIsMC45ODcsMC43OTIsMS4yMzIgICBjMC4yMjEsMC4xMTcsMC40NjMsMC4xNzYsMC43MDUsMC4xNzZjMC4yNjMsMCwwLjUyNi0wLjA2OSwwLjc2MS0wLjIwN2w1LjA1NC0yLjk3NWMwLjIxNi0wLjEyNywwLjM4Mi0wLjMwMywwLjUwNi0wLjUwMSAgIGMyLjEyOSwwLjU3NSw0LjYxNywwLjkzMiw3LjU2NSwwLjg3OGM5LjA4NS0wLjE0NiwxMS42NTgsMi4xNjEsMTEuODgzLDMuMDYzYy0wLjAxNi0wLjA2NS0wLjAxNC0wLjEwMy0wLjAxNC0wLjEwM2wxLjUzNi0wLjE0ICAgbDEuNTM2LDAuMTRjMCwwLDAuMDAyLDAuMDM3LTAuMDE0LDAuMTAzYzAuMjI2LTAuOTAxLDIuODE3LTMuMjM0LDExLjg4NC0zLjA2M2MyLjk0OSwwLjA1Miw1LjQzNy0wLjMwNCw3LjU2NS0wLjg3OCAgIGMwLjEyNCwwLjE5OCwwLjI5LDAuMzc0LDAuNTA1LDAuNTAxbDUuMDU0LDIuOTc1YzAuMjM0LDAuMTM4LDAuNDk4LDAuMjA3LDAuNzYxLDAuMjA3YzAuMjQyLDAsMC40ODQtMC4wNTksMC43MDUtMC4xNzYgICBjMC40Ni0wLjI0NSwwLjc2MS0wLjcxMiwwLjc5Mi0xLjIzMmwwLjM1Ny01Ljg1MmMwLjAxNi0wLjI2Ny0wLjA0NC0wLjUxOC0wLjE1My0wLjc0MmMxLjc2NC0xLjY2NCwyLjUxOS0zLjEyMSwyLjU4OS0zLjI2NSAgIEM5MC42MzksODYuNzU1LDkwLjMzMSw4NS44NTYsODkuNTg2LDg1LjQ5MnogTTMyLjc1Miw5NC43MzFsLTAuMTA4LTEuNzY0YzAuNTAzLDAuMzAxLDEuMDUsMC41ODksMS42MzUsMC44NjVMMzIuNzUyLDk0LjczMXogICAgTTg0LjYzNiw5NC43MzFsLTEuNTI1LTAuODk4YzAuNTg0LTAuMjc1LDEuMTMxLTAuNTYzLDEuNjMzLTAuODYzTDg0LjYzNiw5NC43MzF6Ii8+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDQwMDsiIGQ9Ik00Ni4yOTgsMTUuODE0YzAsNS45MjgtMi45NiwxMS4xNi03LjQ4LDE0LjMxMmMtNC41Mi0zLjE1Mi03LjQ3OS04LjM4NS03LjQ3OS0xNC4zMTIgICAgIGMwLTUuOTI4LDIuOTYtMTEuMTYyLDcuNDc5LTE0LjMxNEM0My4zMzgsNC42NTIsNDYuMjk4LDkuODg3LDQ2LjI5OCwxNS44MTR6Ii8+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZDMjAwOyIgZD0iTTM4LjgxOCwzMC4xMjdjLTQuNTItMy4xNTItNy40NzktOC4zODUtNy40NzktMTQuMzEyYzAtNS45MjgsMi45Ni0xMS4xNjIsNy40NzktMTQuMzE0Ii8+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRkY1QjAwOyIgZD0iTTQzLjg3MSwxOS42MDVjMCw0LjAwNi0yLDcuNTM5LTUuMDUzLDkuNjY4Yy0zLjA1My0yLjEyOS01LjA1MS01LjY2Mi01LjA1MS05LjY2OCAgICAgYzAtNC4wMDIsMS45OTgtNy41MzcsNS4wNTEtOS42NjRDNDEuODcxLDEyLjA2OCw0My44NzEsMTUuNjAzLDQzLjg3MSwxOS42MDV6Ii8+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRkY3OTAwOyIgZD0iTTM4LjgxOCwyOS4yNzNjLTMuMDUzLTIuMTI5LTUuMDUxLTUuNjYyLTUuMDUxLTkuNjY4YzAtNC4wMDIsMS45OTgtNy41MzcsNS4wNTEtOS42NjQiLz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNMzguODE4LDMxLjYyN2MtMC4zLDAtMC42LTAuMDktMC44NTgtMC4yN2MtNS4wODUtMy41NDctOC4xMjItOS4zNTctOC4xMjItMTUuNTQzICAgICBjMC02LjE4NywzLjAzNi0xMS45OTgsOC4xMjItMTUuNTQ1YzAuNTE1LTAuMzU5LDEuMi0wLjM1OSwxLjcxNiwwYzUuMDg2LDMuNTQ3LDguMTIzLDkuMzU4LDguMTIzLDE1LjU0NSAgICAgYzAsNi4xODYtMy4wMzcsMTEuOTk2LTguMTIzLDE1LjU0M0MzOS40MTgsMzEuNTM3LDM5LjExOCwzMS42MjcsMzguODE4LDMxLjYyN3ogTTM4LjgxOCwzLjM3MiAgICAgYy0zLjc2MywzLjAxOS01Ljk3OSw3LjU5NC01Ljk3OSwxMi40NDJjMCw0Ljg0OCwyLjIxNyw5LjQyMiw1Ljk3OSwxMi40NGMzLjc2My0zLjAxOCw1Ljk4LTcuNTkzLDUuOTgtMTIuNDQgICAgIEM0NC43OTgsMTAuOTY2LDQyLjU4MSw2LjM5MSwzOC44MTgsMy4zNzJ6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkQ0MDA7IiBkPSJNOTguNDM5LDI1LjA0OWMwLDUuOTI4LTIuOTYsMTEuMTYtNy40OCwxNC4zMTNjLTQuNTItMy4xNTItNy40OC04LjM4NS03LjQ4LTE0LjMxMyAgICAgYzAtNS45MjgsMi45Ni0xMS4xNjIsNy40OC0xNC4zMTRDOTUuNDc5LDEzLjg4Nyw5OC40MzksMTkuMTIxLDk4LjQzOSwyNS4wNDl6Ii8+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZDMjAwOyIgZD0iTTkwLjk1OSwzOS4zNjFjLTQuNTItMy4xNTItNy40OC04LjM4NS03LjQ4LTE0LjMxM2MwLTUuOTI4LDIuOTYtMTEuMTYyLDcuNDgtMTQuMzE0Ii8+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRkY1QjAwOyIgZD0iTTk2LjAxMSwyOC44NGMwLDQuMDA2LTIsNy41MzktNS4wNTMsOS42NjhjLTMuMDUzLTIuMTI5LTUuMDUxLTUuNjYyLTUuMDUxLTkuNjY4ICAgICBjMC00LjAwMiwxLjk5OC03LjUzNyw1LjA1MS05LjY2NEM5NC4wMTEsMjEuMzAzLDk2LjAxMSwyNC44MzgsOTYuMDExLDI4Ljg0eiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGNzkwMDsiIGQ9Ik05MC45NTksMzguNTA4Yy0zLjA1My0yLjEyOS01LjA1MS01LjY2Mi01LjA1MS05LjY2OGMwLTQuMDAyLDEuOTk4LTcuNTM3LDUuMDUxLTkuNjY0Ii8+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTkwLjk1OCw0MC44NjFjLTAuMywwLTAuNi0wLjA5LTAuODU4LTAuMjdjLTUuMDg1LTMuNTQ3LTguMTIyLTkuMzU3LTguMTIyLTE1LjU0MyAgICAgYzAtNi4xODcsMy4wMzYtMTEuOTk4LDguMTIyLTE1LjU0NWMwLjUxNS0wLjM1OSwxLjItMC4zNTksMS43MTYsMGM1LjA4NiwzLjU0Nyw4LjEyMyw5LjM1OCw4LjEyMywxNS41NDUgICAgIGMwLDYuMTg2LTMuMDM3LDExLjk5Ni04LjEyMywxNS41NDNDOTEuNTU5LDQwLjc3MSw5MS4yNTksNDAuODYxLDkwLjk1OCw0MC44NjF6IE05MC45NTgsMTIuNjA2ICAgICBjLTMuNzYzLDMuMDE5LTUuOTc5LDcuNTk0LTUuOTc5LDEyLjQ0MmMwLDQuODQ4LDIuMjE3LDkuNDIyLDUuOTc5LDEyLjQ0YzMuNzYzLTMuMDE4LDUuOTgtNy41OTMsNS45OC0xMi40NCAgICAgQzk2LjkzOSwyMC4yLDk0LjcyMiwxNS42MjUsOTAuOTU4LDEyLjYwNnoiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDQwMDsiIGQ9Ik0xMTguMDk5LDQ4Ljc0NGMwLDUuOTI4LTIuOTYxLDExLjE2LTcuNDgxLDE0LjMxM2MtNC41Mi0zLjE1Mi03LjQ3OS04LjM4NS03LjQ3OS0xNC4zMTMgICAgIGMwLTUuOTI4LDIuOTYtMTEuMTYyLDcuNDc5LTE0LjMxNEMxMTUuMTM4LDM3LjU4MiwxMTguMDk5LDQyLjgxNiwxMTguMDk5LDQ4Ljc0NHoiLz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkMyMDA7IiBkPSJNMTEwLjYxOCw2My4wNTdjLTQuNTItMy4xNTItNy40NzktOC4zODUtNy40NzktMTQuMzEzYzAtNS45MjgsMi45Ni0xMS4xNjIsNy40NzktMTQuMzE0Ii8+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRkY1QjAwOyIgZD0iTTExNS42NjksNTIuNTM1YzAsNC4wMDYtMS45OTksNy41MzktNS4wNTIsOS42NjhjLTMuMDUyLTIuMTI5LTUuMDUyLTUuNjYyLTUuMDUyLTkuNjY4ICAgICBjMC00LjAwMiwyLTcuNTM3LDUuMDUyLTkuNjY0QzExMy42Nyw0NC45OTgsMTE1LjY2OSw0OC41MzMsMTE1LjY2OSw1Mi41MzV6Ii8+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRkY3OTAwOyIgZD0iTTExMC42MTgsNjIuMjAzYy0zLjA1Mi0yLjEyOS01LjA1Mi01LjY2Mi01LjA1Mi05LjY2OGMwLTQuMDAyLDItNy41MzcsNS4wNTItOS42NjQiLz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNMTEwLjYxOCw2NC41NTdjLTAuMywwLTAuNi0wLjA5LTAuODU4LTAuMjdjLTUuMDg1LTMuNTQ3LTguMTIyLTkuMzU3LTguMTIyLTE1LjU0MyAgICAgYzAtNi4xODcsMy4wMzYtMTEuOTk4LDguMTIyLTE1LjU0NWMwLjUxNS0wLjM1OSwxLjItMC4zNTksMS43MTYsMGM1LjA4NywzLjU0Nyw4LjEyNCw5LjM1OCw4LjEyNCwxNS41NDUgICAgIGMwLDYuMTg2LTMuMDM3LDExLjk5Ni04LjEyNCwxNS41NDNDMTExLjIxOCw2NC40NjcsMTEwLjkxOCw2NC41NTcsMTEwLjYxOCw2NC41NTd6IE0xMTAuNjE4LDM2LjMwMiAgICAgYy0zLjc2MywzLjAxOS01Ljk3OSw3LjU5NC01Ljk3OSwxMi40NDJjMCw0Ljg0OCwyLjIxNyw5LjQyMiw1Ljk3OSwxMi40NGMzLjc2NC0zLjAxOSw1Ljk4MS03LjU5Myw1Ljk4MS0xMi40NCAgICAgQzExNi41OTksNDMuODk2LDExNC4zODEsMzkuMzIsMTEwLjYxOCwzNi4zMDJ6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="/>
                                                </a>
                                            </li>
                                            <li class="traded-assets__item">
                                                <a href="#3">
                                                    <img
                                                        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxMjguMDQxIDEyOC4wNDEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyOC4wNDEgMTI4LjA0MTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiM0M0I1MzA7IiBkPSJNMTEyLjc2NywzOC40OTFjMTguMzYzLDE4LjM2MywxOC4zNjUsMzUuNjU4LDAuMDAyLDU0LjAyMmMtMTguMzY1LDE4LjM2Ny03OS4xMzMsMTguMzY1LTk3LjQ5NiwwICAgICBjLTE4LjM2My0xOC4zNjMtMTguMzY1LTM1LjY1OCwwLTU0LjAyMkM2My44Mi0xMC4wNTcsNjQuMjItMTAuMDU3LDExMi43NjcsMzguNDkxeiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzEwNzUxMDsiIGQ9Ik0xNS4yNzMsNDUuMTE2QzcuMjI4LDUzLjE1OSwyLjcwOCw2MC45OTksMS43MTIsNjguODE0YzAuOTk2LDcuODE0LDUuNTE2LDE1LjY1NCwxMy41NjEsMjMuNjk5ICAgICBjMTguMzYzLDE4LjM2NSw3OS4xMzEsMTguMzY3LDk3LjQ5NiwwYzguMDQzLTguMDQzLDEyLjU2My0xNS44ODMsMTMuNTU5LTIzLjY5N2MtMC45OTYtNy44MTQtNS41MTYtMTUuNjU0LTEzLjU2LTIzLjY5OSAgICAgQzY0LjIyLTMuNDMyLDYzLjgyLTMuNDMyLDE1LjI3Myw0NS4xMTZ6Ii8+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojMUE4RTFDOyIgZD0iTTE1LjI3Myw0NS4xMTZjLTUuMDA2LDUuMDA0LTguNjQ1LDkuOTMtMTAuOTIsMTQuODE4YzIuMjc1LDQuODkxLDUuOTE1LDkuODE2LDEwLjkyLDE0LjgyICAgICBjMTguMzYzLDE4LjM2NSw3OS4xMzEsMTguMzY3LDk3LjQ5NiwwYzUuMDA0LTUuMDA0LDguNjQzLTkuOTMsMTAuOTE5LTE0LjgxOGMtMi4yNzYtNC44OTEtNS45MTYtOS44MTYtMTAuOTIxLTE0LjgyICAgICBDNjQuMjItMy40MzIsNjMuODItMy40MzIsMTUuMjczLDQ1LjExNnoiLz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNNjQuMDIyLDEwNy43ODdjLTAuMDAxLDAsMCwwLTAuMDAyLDBjLTIxLjk1NiwwLTQxLjA0Mi01LjQ0Ni00OS44MDgtMTQuMjE0ICAgICBDNC42NDksODQuMDEsMCw3NC44MjgsMCw2NS41MDJjMC05LjMyNiw0LjY0OC0xOC41MDksMTQuMjEyLTI4LjA3MUMzOC43NDcsMTIuODk1LDUxLjA2MiwwLjU4LDY0LjAyLDAuNTggICAgIHMyNS4yNzMsMTIuMzE0LDQ5LjgwOCwzNi44NTFjOS41NjMsOS41NjMsMTQuMjEyLDE4Ljc0NSwxNC4yMTMsMjguMDcxcy00LjY0OCwxOC41MDktMTQuMjExLDI4LjA3MSAgICAgQzEwNS4wNjMsMTAyLjM0MSw4NS45NzcsMTA3Ljc4Nyw2NC4wMjIsMTA3Ljc4N3ogTTY0LjAyLDMuNThjLTExLjcxNiwwLTI0LjQ5MiwxMi43NzYtNDcuNjg3LDM1Ljk3MiAgICAgQzcuMzYxLDQ4LjUyNCwzLDU3LjAxMiwzLDY1LjUwMmMwLDguNDg5LDQuMzYxLDE2Ljk3OCwxMy4zMzMsMjUuOTVjOC4yMjUsOC4yMjYsMjYuNDk3LDEzLjMzNSw0Ny42ODcsMTMuMzM1ICAgICBjMjEuMTksMC4wMDEsMzkuNDYzLTUuMTA5LDQ3LjY4OC0xMy4zMzVjOC45NzItOC45NzIsMTMuMzMzLTE3LjQ2LDEzLjMzMi0yNS45NWMwLTguNDg5LTQuMzYyLTE2Ljk3OS0xMy4zMzQtMjUuOTVsMCwwICAgICBDODguNTEyLDE2LjM1Nyw3NS43MzYsMy41OCw2NC4wMiwzLjU4eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojNDNCNTMwOyIgZD0iTTg2Ljg0NCwzOC40OTFjOC41OTksMTguMzYzLDguNTk5LDM1LjY1OCwwLjAwMSw1NC4wMjJjLTguNTk5LDE4LjM2Ny0zNy4wNTEsMTguMzY1LTQ1LjY0OCwwICAgICBjLTguNTk5LTE4LjM2My04LjYtMzUuNjU4LTAuMDAxLTU0LjAyMkM2My45MjctMTAuMDU3LDY0LjExNC0xMC4wNTcsODYuODQ0LDM4LjQ5MXoiLz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMxQThFMUM7IiBkPSJNNDMuNjk2LDQ1LjExNmMtMy43NjcsOC4wNDMtOC4zODMsMTUuODgzLTguODQ5LDIzLjY5N2MwLjQ2Niw3LjgxNCwyLjU4MiwxNS42NTQsNi4zNSwyMy42OTkgICAgIGM4LjU5OCwxOC4zNjUsMzcuMDUsMTguMzY3LDQ1LjY0OCwwYzMuNzY2LTguMDQzLDUuODgzLTE1Ljg4Myw2LjM0OS0yMy42OTdjLTAuNDY2LTcuODE0LTUuMDgzLTE1LjY1NC04Ljg1LTIzLjY5OSAgICAgQzYxLjYxNC0zLjQzMiw2Ni40MjctMy40MzIsNDMuNjk2LDQ1LjExNnoiLz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNNjQuMDIxLDEwNy43ODdDNjQuMDIxLDEwNy43ODcsNjQuMDIyLDEwNy43ODcsNjQuMDIxLDEwNy43ODcgICAgIGMtMTAuNjg5LDAtMTkuOTU2LTUuNjA5LTI0LjE4My0xNC42MzljLTguODMzLTE4Ljg2Mi04LjgzMy0zNi40MzMtMC4wMDEtNTUuMjkzQzUxLjgyLDEyLjI2Myw1Ny4yOTEsMC41OCw2NC4wMjEsMC41OCAgICAgYzAsMCwwLDAsMCwwYzYuNzMsMCwxMi4xOTksMTEuNjgxLDI0LjE4MiwzNy4yNzVjOC44MzIsMTguODYxLDguODMzLDM2LjQzMSwwLjAwMSw1NS4yOTMgICAgIEM4My45NzcsMTAyLjE3OCw3NC43MDksMTA3Ljc4Nyw2NC4wMjEsMTA3Ljc4N3ogTTY0LjAyMSwzLjU4Yy00LjgyMi0wLjAwMS0xMS4wODcsMTMuMzgtMjEuNDY2LDM1LjU0NyAgICAgYy04LjQyNSwxNy45OTMtOC40MjUsMzQuNzU1LDAuMDAxLDUyLjc1YzMuNzI4LDcuOTYzLDExLjk1NCwxMi45MSwyMS40NjYsMTIuOTFjOS41MTIsMCwxNy43MzctNC45NDcsMjEuNDY1LTEyLjkxICAgICBjOC40MjUtMTcuOTk0LDguNDI0LTM0Ljc1Ni0wLjAwMS01Mi43NWwwLDBDNzUuMTA3LDE2Ljk2LDY4Ljg0MiwzLjU4LDY0LjAyMSwzLjU4eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiM4MEVEQUM7IiBkPSJNMTEzLjIyOSw4OC41MTljMCwyMC42NzYtMjIuMDMyLDM3LjQ0MS00OS4yMDksMzcuNDQxYy0yNy4xNzgsMC00OS4yMDktMTYuNzY2LTQ5LjIwOS0zNy40NDEgICAgYzAtMjAuNjgsMjIuMDMxLTQ1LjQ1OSw0OS4yMDktNDUuNDU5QzkxLjE5Nyw0My4wNiwxMTMuMjI5LDY3LjgzOSwxMTMuMjI5LDg4LjUxOXoiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiM2QURCOUE7IiBkPSJNMTEzLjIyOSw4OC41MTljMCwyMC42NzYtMjIuMDMyLDM3LjQ0MS00OS4yMDksMzcuNDQxYy0yNy4xNzgsMC00OS4yMDktMTYuNzY2LTQ5LjIwOS0zNy40NDEgICAgYzAtMjAuNjgsMjIuMDMxLTM0LjkyOCw0OS4yMDktMzQuOTI4QzkxLjE5Nyw1My41OTEsMTEzLjIyOSw2Ny44MzksMTEzLjIyOSw4OC41MTl6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojODBFREFDOyIgZD0iTTc0LjQ1Nyw5MS41OTNjMCwxLjM5My00LjY5MSwxLjY0My0xMC40NzksMS42NDNTNTMuNSw5Mi45ODYsNTMuNSw5MS41OTMgICAgYzAtMS4zOTQsNC42OTEtNS4wMzcsMTAuNDc5LTUuMDM3Uzc0LjQ1Nyw5MC4xOTgsNzQuNDU3LDkxLjU5M3oiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiM0N0M2N0I7IiBkPSJNMTEzLjIyOSw4OC41MTljMCwyMC42NzYtMjIuMDMyLDM3LjQ0MS00OS4yMDksMzcuNDQxYy0yNy4xNzgsMC00OS4yMDktMTYuNzY2LTQ5LjIwOS0zNy40NDEgICAgYzAtMjAuNjgyLDYuMjYxLDE4LjM0LDQ5LjIwOSwxOC4zNFMxMTMuMjI5LDY3LjgzNywxMTMuMjI5LDg4LjUxOXoiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNCQTUwM0E7IiBkPSJNNzcuNjAzLDEwMy4wODFjMCwzLjg5My02LjA4Miw3LjA0Ny0xMy41ODMsNy4wNDdzLTEzLjU4My0zLjE1NC0xMy41ODMtNy4wNDciLz4KCTwvZz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNNjQuMDIsMTI3LjQ2Yy0yNy45NjEsMC01MC43MDktMTcuNDY5LTUwLjcwOS0zOC45NDFjMC0yMS4yNywyMi42Mi00Ni45NTksNTAuNzA5LTQ2Ljk1OSAgICBzNTAuNzA5LDI1LjY4OSw1MC43MDksNDYuOTU5QzExNC43MjksMTA5Ljk5MSw5MS45ODEsMTI3LjQ2LDY0LjAyLDEyNy40NnogTTY0LjAyLDQ0LjU2Yy0yNi40MjgsMC00Ny43MDksMjQuMDQ4LTQ3LjcwOSw0My45NTkgICAgYzAsMTkuODE4LDIxLjQwMiwzNS45NDEsNDcuNzA5LDM1Ljk0MXM0Ny43MDktMTYuMTIzLDQ3LjcwOS0zNS45NDFDMTExLjcyOSw2OC42MDgsOTAuNDQ4LDQ0LjU2LDY0LjAyLDQ0LjU2eiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6I0FEMjcwNzsiIGQ9Ik00Ny44NTgsODQuNjc1YzAsNC40NDktMy42MDUsOC4wNTEtOC4wNTIsOC4wNTFjLTQuNDQ3LDAtOC4wNTEtMy42MDItOC4wNTEtOC4wNTEgICAgYzAtNC40NDcsMy42MDQtOC4wNTEsOC4wNTEtOC4wNTFDNDQuMjUyLDc2LjYyNCw0Ny44NTgsODAuMjI4LDQ3Ljg1OCw4NC42NzV6Ii8+Cgk8L2c+Cgk8Zz4KCQk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBjeD0iMzUuODAyIiBjeT0iODIuMDU4IiByPSIzLjI4MSIvPgoJPC9nPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik0zOS44MDYsNzUuMTI0Yy0zLjIzMywwLTYuMDkyLDEuNjE5LTcuODIsNC4wODVjLTAuMTE5LDAuMTU4LTAuMjIyLDAuMzI1LTAuMzIxLDAuNDk4ICAgYy0wLjg4OCwxLjQ1LTEuNDEsMy4xNDctMS40MSw0Ljk2OGMwLDUuMjY3LDQuMjg1LDkuNTUxLDkuNTUxLDkuNTUxYzUuMjY3LDAsOS41NTItNC4yODQsOS41NTItOS41NTFTNDUuMDczLDc1LjEyNCwzOS44MDYsNzUuMTI0ICAgeiBNMzkuODA2LDkxLjIyNmMtMi43MjEsMC01LjA1OC0xLjY2OC02LjA0Ni00LjAzNGMwLjY4OC0wLjAxOCwxLjUyNS0wLjIsMi40NjgtMC4zOTZjMC4zMzYtMC4wMywwLjY1OS0wLjA5MywwLjk3MS0wLjE5ICAgYzAuODE5LTAuMTQ4LDEuNjk0LTAuMjY3LDIuNjA4LTAuMjY3YzIuNDEzLDAsNC41NzIsMC44MTMsNi4wNDcsMC44NTNDNDQuODY1LDg5LjU1OCw0Mi41MjcsOTEuMjI2LDM5LjgwNiw5MS4yMjZ6Ii8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBjeD0iMzUuODAxIiBjeT0iODIuMDU5IiByPSIxLjc4Ii8+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojQUQyNzA3OyIgZD0iTTk2LjI4NSw4NC42NzVjMCw0LjQ0OS0zLjYwNCw4LjA1MS04LjA1MSw4LjA1MWMtNC40NDcsMC04LjA1Mi0zLjYwMi04LjA1Mi04LjA1MSAgICBjMC00LjQ0NywzLjYwNC04LjA1MSw4LjA1Mi04LjA1MUM5Mi42OCw3Ni42MjQsOTYuMjg1LDgwLjIyOCw5Ni4yODUsODQuNjc1eiIvPgoJPC9nPgoJPGc+CgkJPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZGRkZGOyIgY3g9Ijg0LjIyOSIgY3k9IjgyLjA1OCIgcj0iMy4yOCIvPgoJPC9nPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik04OC4yMzQsNzUuMTI0Yy0zLjI0LDAtNi4xMDQsMS42MjUtNy44MzIsNC4wOTljLTAuMTExLDAuMTQ5LTAuMjA3LDAuMzA1LTAuMywwLjQ2NiAgIGMtMC44OTQsMS40NTMtMS40MiwzLjE1Ny0xLjQyLDQuOTg1YzAsNS4yNjcsNC4yODUsOS41NTEsOS41NTIsOS41NTFjNS4yNjYsMCw5LjU1MS00LjI4NCw5LjU1MS05LjU1MVM5My41LDc1LjEyNCw4OC4yMzQsNzUuMTI0eiAgICBNODguMjM0LDkxLjIyNmMtMi43MjEsMC01LjA1OS0xLjY2OC02LjA0Ny00LjAzNGMwLjY4OC0wLjAxOCwxLjUyNC0wLjIsMi40NjctMC4zOTZjMC4zMzctMC4wMywwLjY2MS0wLjA5MywwLjk3NC0wLjE5ICAgYzAuODE4LTAuMTQ4LDEuNjkzLTAuMjY3LDIuNjA2LTAuMjY3YzIuNDEyLDAsNC41NzEsMC44MTMsNi4wNDYsMC44NTNDOTMuMjkyLDg5LjU1OCw5MC45NTUsOTEuMjI2LDg4LjIzNCw5MS4yMjZ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTg0LjIzLDgwLjI3OWMtMC45ODIsMC0xLjc4MSwwLjc5OC0xLjc4MSwxLjc3OWMwLDAuOTgyLDAuNzk5LDEuNzgxLDEuNzgxLDEuNzgxICAgYzAuOTgxLDAsMS43NzktMC43OTksMS43NzktMS43ODFDODYuMDA5LDgxLjA3Niw4NS4yMTEsODAuMjc5LDg0LjIzLDgwLjI3OXoiLz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTYxLjU1Myw5OC4yMTZjLTAuMzk4LDAtMC43OTYtMC4xNTctMS4wOTEtMC40N2wtMS41LTEuNTg4Yy0wLjU2OS0wLjYwMy0wLjU0Mi0xLjU1MiwwLjA2LTIuMTIxICAgICBjMC42MDMtMC41NjgsMS41NTItMC41NDIsMi4xMjEsMC4wNjFsMS41LDEuNTg4YzAuNTY5LDAuNjAzLDAuNTQyLDEuNTUyLTAuMDYsMi4xMjFDNjIuMjkyLDk4LjA4LDYxLjkyMiw5OC4yMTYsNjEuNTUzLDk4LjIxNnoiLz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNNjYuNDg3LDk4LjIxNmMtMC4zNywwLTAuNzQtMC4xMzYtMS4wMy0wLjQwOWMtMC42MDItMC41NjktMC42MjktMS41MTktMC4wNi0yLjEyMWwxLjUtMS41ODggICAgIGMwLjU2OS0wLjYwMiwxLjUxOC0wLjYyOCwyLjEyMS0wLjA2MWMwLjYwMiwwLjU2OSwwLjYyOSwxLjUxOSwwLjA2LDIuMTIxbC0xLjUsMS41ODhDNjcuMjgzLDk4LjA1OSw2Ni44ODYsOTguMjE2LDY2LjQ4Nyw5OC4yMTYgICAgIHoiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPGc+CgkJCQk8cGF0aCBzdHlsZT0iZmlsbDojOUNGRkM0OyIgZD0iTTMzLjU1LDU3LjI0M2MyLjYtMS44Myw1LjM2OS0zLjA2NCw4LjA1Ny0zLjcyM2MwLjQxOC0yLjQ4LDAuMDMzLTQuODQ0LTEuMzA1LTYuNzQ0ICAgICAgYy0yLjkwMS00LjEyMy05LjMyOC00LjgwNy0xNS41OTYtMi4xMDRjLTQuNjYyLDQuOTg4LTYuMTg4LDExLjI3LTMuMjg3LDE1LjM5MWMxLjMzOCwxLjkwMiwzLjQzMiwzLjA2Myw1LjkwOSwzLjUwNiAgICAgIEMyOC44NTUsNjEuMjYxLDMwLjk1Miw1OS4wNzIsMzMuNTUsNTcuMjQzeiIvPgoJCQk8L2c+CgkJCTxnPgoJCQkJPHBhdGggc3R5bGU9ImZpbGw6IzgwRURBQzsiIGQ9Ik0zNi43MTgsNDkuNDQ1Yy0yLjU5Ni0zLjY4OS04LjAxNi00LjYxNy0xMy42MTgtMi44MzZjLTMuMzY4LDQuNTk4LTQuMjE2LDkuODUxLTEuNjgxLDEzLjQ1NSAgICAgIGMxLjExMiwxLjU4MiwyLjc1MSwyLjY0Myw0LjY5MywzLjIxM2MxLjEyNi0xLjIwNSwyLjY1Ni0wLjE5MSw0LjEwNy0xLjIxM2MwLjQyNS0wLjI5OSwwLjYwNy0yLjcxMSwxLjA0MS0yLjk3OSAgICAgIGMwLjcxOC0wLjY0MSwxLjQ2OS0xLjI2NCwyLjI4OS0xLjg0MmMxLjQ5OS0xLjA1NSwzLjA1NS0xLjg4OSw0LjYxOC0yLjU1MUMzOC4yMzYsNTIuNzY3LDM3Ljc4NSw1MC45NTYsMzYuNzE4LDQ5LjQ0NXoiLz4KCQkJPC9nPgoJCQk8Zz4KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNMjcuMzMxLDY1LjA3Yy0wLjA4OCwwLTAuMTc3LTAuMDA4LTAuMjY2LTAuMDIzYy0yLjk3NS0wLjUzMi01LjM1MS0xLjk1Ny02Ljg3Mi00LjExOSAgICAgIGMtMy4yNzEtNC42NDctMS44OTctMTEuNTkxLDMuNDE4LTE3LjI3OGMwLjE0MS0wLjE1LDAuMzEyLTAuMjcxLDAuNTAxLTAuMzUzYzcuMTQ4LTMuMDgzLDE0LjE0Ni0yLjAzLDE3LjQxNywyLjYxNyAgICAgIGMxLjUyMSwyLjE2LDIuMDYsNC44NzcsMS41NTcsNy44NTZjLTAuMTM3LDAuODE2LTAuOTE2LDEuMzYtMS43MjgsMS4yM2MtMC44MTctMC4xMzgtMS4zNjgtMC45MTItMS4yMy0xLjcyOSAgICAgIGMwLjM2OC0yLjE4NCwwLjAwNC00LjEzMS0xLjA1Mi01LjYzMmMtMi4zNTQtMy4zNDQtNy44NjctNC4wMzItMTMuNDg2LTEuNzEyYy00LjA4Myw0LjUwNi01LjI5Nyw5LjkyOS0yLjk0NCwxMy4yNzIgICAgICBjMS4wNTcsMS41MDIsMi43NjcsMi41MDMsNC45NDcsMi44OTNjMC44MTUsMC4xNDYsMS4zNTgsMC45MjYsMS4yMTIsMS43NDFDMjguNjc1LDY0LjU2LDI4LjA0Myw2NS4wNywyNy4zMzEsNjUuMDd6Ii8+CgkJCTwvZz4KCQk8L2c+CgkJPGc+CgkJCTxnPgoJCQkJPHBhdGggc3R5bGU9ImZpbGw6IzlDRkZDNDsiIGQ9Ik05NC40OSw1Ny4yNDNjLTIuNjAxLTEuODMtNS4zNjktMy4wNjQtOC4wNTctMy43MjNjLTAuNDE5LTIuNDgtMC4wMzQtNC44NDQsMS4zMDUtNi43NDQgICAgICBjMi45LTQuMTIzLDkuMzI4LTQuODA3LDE1LjU5Ni0yLjEwNGM0LjY2MSw0Ljk4OCw2LjE4OCwxMS4yNywzLjI4NywxNS4zOTFjLTEuMzM5LDEuOTAyLTMuNDMyLDMuMDYzLTUuOTEsMy41MDYgICAgICBDOTkuMTg1LDYxLjI2MSw5Ny4wODcsNTkuMDcyLDk0LjQ5LDU3LjI0M3oiLz4KCQkJPC9nPgoJCQk8Zz4KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiM4MEVEQUM7IiBkPSJNOTEuMzIyLDQ5LjQ0NWMyLjU5Ni0zLjY4OSw4LjAxNi00LjYxNywxMy42MTctMi44MzZjMy4zNjksNC41OTgsNC4yMTcsOS44NTEsMS42ODIsMTMuNDU1ICAgICAgYy0xLjExMywxLjU4Mi0yLjc1MiwyLjY0My00LjY5MywzLjIxM2MtMS4xMjctMS4yMDUtMi42NTYtMC4xOTEtNC4xMDctMS4yMTNjLTAuNDI2LTAuMjk5LTAuNjA3LTIuNzExLTEuMDQxLTIuOTc5ICAgICAgYy0wLjcxOS0wLjY0MS0xLjQ2OS0xLjI2NC0yLjI4OS0xLjg0MmMtMS41LTEuMDU1LTMuMDU1LTEuODg5LTQuNjE5LTIuNTUxQzg5LjgwNCw1Mi43NjcsOTAuMjU1LDUwLjk1Niw5MS4zMjIsNDkuNDQ1eiIvPgoJCQk8L2c+CgkJCTxnPgoJCQkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik0xMDAuNzA4LDY1LjA3Yy0wLjcxMiwwLTEuMzQ1LTAuNTEtMS40NzUtMS4yMzZjLTAuMTQ2LTAuODE1LDAuMzk3LTEuNTk1LDEuMjEyLTEuNzQgICAgICBjMi4xNzktMC4zOSwzLjg5LTEuMzksNC45NDgtMi44OTNjMi4zNTMtMy4zNDMsMS4xMzgtOC43NjctMi45NDQtMTMuMjcyYy01LjYxOS0yLjMyLTExLjEzMy0xLjYzMy0xMy40ODUsMS43MTIgICAgICBjLTEuMDU4LDEuNTAxLTEuNDIxLDMuNDQ3LTEuMDUzLDUuNjMxQzg4LjA1LDU0LjA4OCw4Ny41LDU0Ljg2Miw4Ni42ODMsNTVjLTAuODE3LDAuMTMtMS41OTEtMC40MTMtMS43MjktMS4yMjkgICAgICBjLTAuNTAzLTIuOTgsMC4wMzUtNS42OTcsMS41NTgtNy44NThjMy4yNjktNC42NDYsMTAuMjY5LTUuNjk4LDE3LjQxNi0yLjYxNmMwLjE4OSwwLjA4MSwwLjM2LDAuMjAyLDAuNTAyLDAuMzUzICAgICAgYzUuMzE0LDUuNjg4LDYuNjg4LDEyLjYzMiwzLjQxNywxNy4yNzhjLTEuNTIyLDIuMTYzLTMuODk4LDMuNTg3LTYuODczLDQuMTE5QzEwMC44ODUsNjUuMDYyLDEwMC43OTYsNjUuMDcsMTAwLjcwOCw2NS4wN3oiLz4KCQkJPC9nPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiM0N0M2N0I7IiBkPSJNNTcuNTU2LDY5LjAyOWMtNC4xODYsMC03LjU4MS0zLjM5NC03LjU4MS03LjU4MmMwLTQuMTg2LDUuMjc4LTUuNjk3LDkuNDY1LTUuNjk3ICAgIHM1LjY5NywxLjUxMiw1LjY5Nyw1LjY5N0M2NS4xMzcsNjUuNjM0LDYxLjc0Myw2OS4wMjksNTcuNTU2LDY5LjAyOXoiLz4KCTwvZz4KCTxnPgoJCTxjaXJjbGUgc3R5bGU9ImZpbGw6IzQ3QzY3QjsiIGN4PSI3Mi41NDciIGN5PSI2Ni4zNjEiIHI9IjIuNjY3Ii8+Cgk8L2c+Cgk8Zz4KCQk8Y2lyY2xlIHN0eWxlPSJmaWxsOiM0N0M2N0I7IiBjeD0iODIuOTM1IiBjeT0iNjQuMzc2IiByPSIxLjk4NiIvPgoJPC9nPgoJPGc+CgkJPGNpcmNsZSBzdHlsZT0iZmlsbDojNDdDNjdCOyIgY3g9IjY5LjI5NiIgY3k9IjgwLjYxNiIgcj0iMS4zMDgiLz4KCTwvZz4KCTxnPgoJCTxjaXJjbGUgc3R5bGU9ImZpbGw6IzQ3QzY3QjsiIGN4PSI0Ni4zODEiIGN5PSI2Ni44NzYiIHI9IjIuNTAxIi8+Cgk8L2c+Cgk8Zz4KCQk8cG9seWxpbmUgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHBvaW50cz0iNDEuNzg0LDEwMS41MDkgMzYuNzMsMTA0LjQ4NCAzNi4zNzMsOTguNjMyICAgIi8+Cgk8L2c+Cgk8Zz4KCQk8cG9seWxpbmUgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHBvaW50cz0iODYuMjU2LDEwMS41MDkgOTEuMzEsMTA0LjQ4NCA5MS42NjgsOTguNjMyICAgIi8+Cgk8L2c+Cgk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTk0LjkxMyw5Mi44NjhjLTAuNzQ1LTAuMzYzLTEuNjQzLTAuMDU3LTIuMDA3LDAuNjg4Yy0wLjAzNCwwLjA3LTMuNTU4LDcuMDA1LTE1LjQzMiw2Ljc4ICAgYy04LjA0My0wLjE0MS0xMS43NDcsMS41MDktMTMuNDU1LDMuMDk0Yy0xLjcwOC0xLjU4MS01LjQxMS0zLjIyNi0xMy40NTItMy4wOTRjLTExLjc2LDAuMjIzLTE1LjI4My02LjQ4NC0xNS40MzctNi43ODggICBjLTAuMzY2LTAuNzM4LTEuMjYyLTEuMDQyLTIuMDAzLTAuNjgxYy0wLjc0NCwwLjM2NC0xLjA1MiwxLjI2My0wLjY4OCwyLjAwN2MwLjA2OSwwLjE0MiwwLjgxMywxLjU2OCwyLjU0MiwzLjIwNyAgIGMtMC4wNzksMC4xOTgtMC4xMiwwLjQxNC0wLjEwNiwwLjY0MmwwLjM1Nyw1Ljg1MmMwLjAzMiwwLjUyMSwwLjMzMiwwLjk4NywwLjc5MiwxLjIzMmMwLjIyMSwwLjExNywwLjQ2MywwLjE3NiwwLjcwNSwwLjE3NiAgIGMwLjI2MywwLDAuNTI2LTAuMDY5LDAuNzYxLTAuMjA3bDUuMDU0LTIuOTc1YzAuMTctMC4xLDAuMzExLTAuMjMsMC40MjQtMC4zNzdjMS43MzEsMC40NzYsMy43MTcsMC43OTMsNS45ODcsMC44NzUgICBjMC4yMDEsNC42ODcsNi43MzcsOC4zMjgsMTUuMDY0LDguMzI4YzguMzI4LDAsMTQuODY2LTMuNjQyLDE1LjA2NC04LjMzYzIuMjY5LTAuMDg1LDQuMjUzLTAuNDAzLDUuOTgyLTAuODc4ICAgYzAuMTE0LDAuMTQ5LDAuMjU3LDAuMjgxLDAuNDI5LDAuMzgybDUuMDU0LDIuOTc1YzAuMjM0LDAuMTM4LDAuNDk4LDAuMjA3LDAuNzYxLDAuMjA3YzAuMjQyLDAsMC40ODQtMC4wNTksMC43MDUtMC4xNzYgICBjMC40Ni0wLjI0NSwwLjc2MS0wLjcxMiwwLjc5Mi0xLjIzMmwwLjM1Ny01Ljg1MmMwLjAxNC0wLjIyNy0wLjAyNy0wLjQ0My0wLjEwNi0wLjY0MmMxLjczMS0xLjYzOSwyLjQ3My0zLjA2NSwyLjU0My0zLjIwNyAgIEM5NS45NjUsOTQuMTMxLDk1LjY1Nyw5My4yMzMsOTQuOTEzLDkyLjg2OHogTTM4LjA3OCwxMDEuOTQ5bC0wLjA5OS0xLjYxM2MwLjQ2MSwwLjI3NiwwLjk1OSwwLjU0LDEuNDg5LDAuNzk1TDM4LjA3OCwxMDEuOTQ5eiAgICBNNjQuMDIsMTA4LjYyOGMtNi44OSwwLTExLjc0Ni0yLjczNi0xMi4wNTMtNS4yOTFjNy45ODIsMC4wOTEsMTAuMzE4LDIuMjA4LDEwLjUzMiwzLjA2M2MtMC4wMTYtMC4wNjUtMC4wMTQtMC4xMDMtMC4wMTQtMC4xMDMgICBsMS41MzYtMC4xNGwxLjUzNiwwLjE0YzAsMCwwLjAwMiwwLjAzNy0wLjAxNCwwLjEwM2MwLjIxNC0wLjg1NCwyLjU2Ny0yLjk5MiwxMC41MzItMy4wNjYgICBDNzUuNzcsMTA1Ljg5LDcwLjkxMywxMDguNjI4LDY0LjAyLDEwOC42Mjh6IE04OS45NjIsMTAxLjk0OWwtMS4zOTUtMC44MjFjMC41MzItMC4yNTUsMS4wMzItMC41MiwxLjQ5NC0wLjc5Nkw4OS45NjIsMTAxLjk0OXoiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"/>
                                                </a>
                                            </li>
                                            <li class="traded-assets__item">
                                                <a href="#3">
                                                    <img
                                                        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxMjkuNDA0IDEyOS40MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyOS40MDQgMTI5LjQwNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPGc+CgkJPGc+CgkJCTxnPgoJCQkJPHBhdGggc3R5bGU9ImZpbGw6I0VBODFCRDsiIGQ9Ik0yOS44NjksNzkuNzg2YzAsMy4xODgtNi4zNTIsNS43NzEtMTQuMTg0LDUuNzcxYy03LjgzNCwwLTE0LjE4Ni0yLjU4NC0xNC4xODYtNS43NzEgICAgICBzMTIuNDY3LTEyLjYsMjAuMzAxLTEyLjZDMjkuNjM1LDY3LjE4NywyOS44NjksNzYuNTk5LDI5Ljg2OSw3OS43ODZ6Ii8+CgkJCTwvZz4KCQkJPGc+CgkJCQk8cGF0aCBzdHlsZT0iZmlsbDojRDM2M0E5OyIgZD0iTTI5Ljg2OSw3OS43ODZjMCwzLjE4OC02LjM1Miw1Ljc3MS0xNC4xODQsNS43NzFjLTcuODM0LDAtMTQuMTg2LTIuNTg0LTE0LjE4Ni01Ljc3MSAgICAgIHMxMy4xMjktMS44NTUsMjAuOTYzLTEuODU1QzMwLjI5Nyw3Ny45MzEsMjkuODY5LDc2LjU5OSwyOS44NjksNzkuNzg2eiIvPgoJCQk8L2c+CgkJCTxnPgoJCQkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik0xNS42ODYsODcuMDU4QzguMDgyLDg3LjA1OCwwLDg0LjUwOSwwLDc5Ljc4NmMwLTQuNDg4LDEzLjY4Ny0xNC4xLDIxLjgwMS0xNC4xICAgICAgYzMuNTczLDAsOS41NjgsMS44MzIsOS41NjgsMTQuMUMzMS4zNjksODQuNTA5LDIzLjI4OSw4Ny4wNTgsMTUuNjg2LDg3LjA1OHogTTIxLjgwMSw2OC42ODcgICAgICBjLTcuMjk5LDAtMTguNTU1LDguODU1LTE4LjgwMSwxMS4xMTZjMCwxLjcyNSw0Ljk0Miw0LjI1NSwxMi42ODYsNC4yNTVjNy43NDMsMCwxMi42ODQtMi41MywxMi42ODQtNC4yNzEgICAgICBDMjguMzY5LDcyLjQyMSwyNi4xNTksNjguNjg3LDIxLjgwMSw2OC42ODd6Ii8+CgkJCTwvZz4KCQk8L2c+CgkJPGc+CgkJCTxnPgoJCQkJPHBhdGggc3R5bGU9ImZpbGw6I0VBODFCRDsiIGQ9Ik05OS41MzcsNzkuNzg2YzAsMy4xODgsNi4zNSw1Ljc3MSwxNC4xODQsNS43NzFzMTQuMTg0LTIuNTg0LDE0LjE4NC01Ljc3MSAgICAgIHMtMTIuNDY3LTEyLjYtMjAuMzAxLTEyLjZDOTkuNzcxLDY3LjE4Nyw5OS41MzcsNzYuNTk5LDk5LjUzNyw3OS43ODZ6Ii8+CgkJCTwvZz4KCQkJPGc+CgkJCQk8cGF0aCBzdHlsZT0iZmlsbDojRDM2M0E5OyIgZD0iTTk5LjUzNyw3OS43ODZjMCwzLjE4OCw2LjM1LDUuNzcxLDE0LjE4NCw1Ljc3MXMxNC4xODQtMi41ODQsMTQuMTg0LTUuNzcxICAgICAgcy0xMy4xMjktMS44NTUtMjAuOTYzLTEuODU1Uzk5LjUzNyw3Ni41OTksOTkuNTM3LDc5Ljc4NnoiLz4KCQkJPC9nPgoJCQk8Zz4KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNMTEzLjcyMSw4Ny4wNThjLTcuNjAzLDAtMTUuNjg0LTIuNTQ5LTE1LjY4NC03LjI3MWMwLTEyLjI2OCw1Ljk5NC0xNC4xLDkuNTY2LTE0LjEgICAgICBjOC4xMTQsMCwyMS44MDEsOS42MTEsMjEuODAxLDE0LjFDMTI5LjQwNCw4NC41MDksMTIxLjMyNCw4Ny4wNTgsMTEzLjcyMSw4Ny4wNTh6IE0xMDcuNjA0LDY4LjY4NyAgICAgIGMtNC4zNTcsMC02LjU2NiwzLjczNC02LjU2NiwxMS4xYzAsMS43NDEsNC45NDEsNC4yNzEsMTIuNjg0LDQuMjcxczEyLjY4NC0yLjUzLDEyLjY4NC00LjI3MSAgICAgIEMxMjYuMTU4LDc3LjU0MiwxMTQuOTAzLDY4LjY4NywxMDcuNjA0LDY4LjY4N3oiLz4KCQkJPC9nPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8Zz4KCQkJCTxlbGxpcHNlIHN0eWxlPSJmaWxsOiNFQTgxQkQ7IiBjeD0iNDIuMTMiIGN5PSIxMDUuODEyIiByeD0iMjEuNjU1IiByeT0iNi41NDEiLz4KCQkJPC9nPgoJCQk8Zz4KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiNEMzYzQTk7IiBkPSJNNjMuNzg1LDEwNS44MTJjMCwzLjYxMS05LjY5NSwwLTIxLjY1NCwwYy0xMS45NiwwLTIxLjY1NSwzLjYxMS0yMS42NTUsMCAgICAgIGMwLTMuNjEzLDkuNjk1LTYuNTQxLDIxLjY1NS02LjU0MUM1NC4wOSw5OS4yNzEsNjMuNzg1LDEwMi4xOTksNjMuNzg1LDEwNS44MTJ6Ii8+CgkJCTwvZz4KCQkJPGc+CgkJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTQyLjEzMSwxMTMuODUzYy0xMS41MDcsMC0yMy4xNTUtMi43NjItMjMuMTU1LTguMDQxczExLjY0OC04LjA0MSwyMy4xNTUtOC4wNDEgICAgICBjMTEuNTA2LDAsMjMuMTU0LDIuNzYyLDIzLjE1NCw4LjA0MVM1My42MzcsMTEzLjg1Myw0Mi4xMzEsMTEzLjg1M3ogTTQyLjEzMSwxMDAuNzcxYy0xMy4wNDEsMC0yMC4xNTUsMy4zMy0yMC4xNTUsNS4wNDEgICAgICBzNy4xMTQsNS4wNDEsMjAuMTU1LDUuMDQxYzEzLjA0MSwwLDIwLjE1NC0zLjMzLDIwLjE1NC01LjA0MVM1NS4xNzEsMTAwLjc3MSw0Mi4xMzEsMTAwLjc3MXoiLz4KCQkJPC9nPgoJCTwvZz4KCQk8Zz4KCQkJPGc+CgkJCQk8ZWxsaXBzZSBzdHlsZT0iZmlsbDojRUE4MUJEOyIgY3g9Ijg3LjI3NSIgY3k9IjEwNS44MTIiIHJ4PSIyMS42NTUiIHJ5PSI2LjU0MSIvPgoJCQk8L2c+CgkJCTxnPgoJCQkJPHBhdGggc3R5bGU9ImZpbGw6I0QzNjNBOTsiIGQ9Ik02NS42MiwxMDUuODEyYzAsMy42MTEsOS42OTUsMCwyMS42NTUsMGMxMS45NTksMCwyMS42NTQsMy42MTEsMjEuNjU0LDAgICAgICBjMC0zLjYxMy05LjY5NS02LjU0MS0yMS42NTQtNi41NDFDNzUuMzE1LDk5LjI3MSw2NS42MiwxMDIuMTk5LDY1LjYyLDEwNS44MTJ6Ii8+CgkJCTwvZz4KCQkJPGc+CgkJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTg3LjI3NSwxMTMuODUzYy0xMS41MDcsMC0yMy4xNTUtMi43NjItMjMuMTU1LTguMDQxczExLjY0OC04LjA0MSwyMy4xNTUtOC4wNDEgICAgICBjMTEuNTA2LDAsMjMuMTU0LDIuNzYyLDIzLjE1NCw4LjA0MVM5OC43ODIsMTEzLjg1Myw4Ny4yNzUsMTEzLjg1M3ogTTg3LjI3NSwxMDAuNzcxYy0xMy4wNDEsMC0yMC4xNTUsMy4zMy0yMC4xNTUsNS4wNDEgICAgICBzNy4xMTQsNS4wNDEsMjAuMTU1LDUuMDQxYzEzLjA0MSwwLDIwLjE1NC0zLjMzLDIwLjE1NC01LjA0MVMxMDAuMzE2LDEwMC43NzEsODcuMjc1LDEwMC43NzF6Ii8+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojOUUzMjU2OyIgZD0iTTIwLjE4OCwxNy4wNTRjLTUuNjU2LDcuNzcxLTYuODQyLDE4LjM2Ny0yLjEzMSwyNy40OWM0LjcwOSw5LjEyNywxNC4wMzEsMTQuMjk3LDIzLjY0NCwxNC4xODggICAgYzUuNjU2LTcuNzcxLDYuODQyLTE4LjM2NSwyLjEzMS0yNy40OUMzOS4xMjIsMjIuMTE3LDI5LjgwMiwxNi45NDcsMjAuMTg4LDE3LjA1NHoiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkNBRTg7IiBkPSJNMjAuMTg4LDE3LjA1NGMtNS42NTYsNy43NzEsNC42ODEsMTYuNzQ0LDkuMzkyLDI1Ljg2N2M0LjcwOSw5LjEyNywyLjUwOSwxNS45MiwxMi4xMjIsMTUuODExICAgIGM1LjY1Ni03Ljc3MSw2Ljg0Mi0xOC4zNjUsMi4xMzEtMjcuNDlDMzkuMTIyLDIyLjExNywyOS44MDIsMTYuOTQ3LDIwLjE4OCwxNy4wNTR6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRUZBM0NDOyIgZD0iTTIwLjE4OCwxNy4wNTRjLTUuNjU2LDcuNzcxLDQuNjgxLDE2Ljc0NCw5LjM5MiwyNS44NjdjNC43MDksOS4xMjcsMi41MDksMTUuOTIsMTIuMTIyLDE1LjgxMSAgICBjNS42NTYtNy43NzEsMy4yMDEtMTEuNzEzLTEuNTEtMjAuODM4QzM1LjQ4MiwyOC43NjcsMjkuODAyLDE2Ljk0NywyMC4xODgsMTcuMDU0eiIvPgoJPC9nPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik00NS4xNjUsMzAuNTUzYy00LjgzNy05LjM3LTE0LjQwNC0xNS4xNDEtMjQuOTk0LTE0Ljk5OWMtMC40NzQsMC4wMDYtMC45MTcsMC4yMzQtMS4xOTYsMC42MTcgICBjLTYuMjI3LDguNTU2LTcuMDg5LDE5LjY5MS0yLjI1MSwyOS4wNjFjNC43ODYsOS4yNzYsMTQuMjE2LDE1LjAwMiwyNC42NjgsMTUuMDAyYzAuMTA4LDAsMC4yMTgtMC4wMDEsMC4zMjYtMC4wMDIgICBjMC40NzQtMC4wMDYsMC45MTctMC4yMzQsMS4xOTYtMC42MTdDNDkuMTQsNTEuMDYsNTAuMDAzLDM5LjkyNCw0NS4xNjUsMzAuNTUzeiBNNDUuMDMzLDM5Ljg4MSAgIGMwLjAwOCwwLjA1OCwwLjAxMSwwLjExNiwwLjAxOCwwLjE3NGMwLjEzNiwxLjAzMiwwLjIxMiwyLjA2OCwwLjIxNiwzLjEwNGMwLjAwMSwwLjI4Ny0wLjAxNiwwLjU3NC0wLjAyNSwwLjg2MSAgIGMtMC4wMDgsMC4yNTktMC4wMDYsMC41MTktMC4wMjMsMC43NzdjLTAuMDIxLDAuMzM1LTAuMDYyLDAuNjY4LTAuMDk2LDEuMDAxYy0wLjAyMiwwLjIxLTAuMDM0LDAuNDIyLTAuMDYxLDAuNjMxICAgYy0wLjEyOSwwLjk4OS0wLjMyNiwxLjk2OS0wLjU3NSwyLjkzOWMtMC4wMjQsMC4wOTQtMC4wNDEsMC4xOS0wLjA2NiwwLjI4NGMtMC4xMzksMC41MTQtMC4yOTYsMS4wMjUtMC40NjksMS41MzEgICBjLTAuMDA1LDAuMDE2LTAuMDA5LDAuMDMyLTAuMDE1LDAuMDQ4Yy0wLjE3NywwLjUxNy0wLjM3MywxLjAyOS0wLjU4NSwxLjUzNmMtMC4wMDIsMC4wMDUtMC4wMDQsMC4wMTEtMC4wMDYsMC4wMTYgICBjLTAuNjQ1LDEuNTM3LTEuNDUyLDMuMDI0LTIuNDE4LDQuNDM5Yy00Ljg0NS0wLjE1LTUuNTQyLTIuNDE2LTYuOTg2LTcuMTE2Yy0wLjcxMi0yLjMxOS0xLjUyLTQuOTQ4LTMuMDMtNy44NzYgICBjLTEuMzM1LTIuNTg2LTMuMDk1LTUuMTQxLTQuNzk2LTcuNjExYy00LjIwOS02LjExMi03Ljg2OC0xMS40MjYtNS4xMjYtMTYuMDYzYzAuNDY0LDAuMDA5LDAuOTI1LDAuMDM4LDEuMzg0LDAuMDcyICAgYzAuMDk4LDAuMDA3LDAuMTk3LDAuMDA3LDAuMjk0LDAuMDE2YzAuNDgsMC4wNDEsMC45NTUsMC4xMDMsMS40MjgsMC4xNzFjMC4wODIsMC4wMTIsMC4xNjUsMC4wMTcsMC4yNDYsMC4wMyAgIGMwLjQ4NCwwLjA3NSwwLjk2MiwwLjE2OSwxLjQzNywwLjI3MmMwLjA2OCwwLjAxNSwwLjEzOCwwLjAyNCwwLjIwNiwwLjAzOWMwLjUwNSwwLjExMywxLjAwMywwLjI0NSwxLjQ5NywwLjM4OCAgIGMwLjAzNywwLjAxMSwwLjA3NCwwLjAxOCwwLjExMSwwLjAyOWMwLjQ3OSwwLjE0MiwwLjk1MSwwLjMwMiwxLjQxOCwwLjQ3MWMwLjA1LDAuMDE4LDAuMTAyLDAuMDMyLDAuMTUxLDAuMDUgICBjMC40NiwwLjE3LDAuOTEzLDAuMzU5LDEuMzYxLDAuNTU2YzAuMDU0LDAuMDI0LDAuMTEsMC4wNDMsMC4xNjQsMC4wNjdjMC40MzQsMC4xOTQsMC44NTgsMC40MDYsMS4yNzksMC42MjUgICBjMC4wNjUsMC4wMzQsMC4xMzIsMC4wNjIsMC4xOTcsMC4wOTZjMC40MSwwLjIxOCwwLjgxMSwwLjQ1MywxLjIwOCwwLjY5NGMwLjA3LDAuMDQzLDAuMTQ0LDAuMDgsMC4yMTUsMC4xMjMgICBjMC4zNTksMC4yMjMsMC43MDcsMC40NjIsMS4wNTQsMC43MDNjMC4xMDMsMC4wNzEsMC4yMSwwLjEzNSwwLjMxMSwwLjIwOGMwLjM0NiwwLjI0OCwwLjY4LDAuNTEzLDEuMDEzLDAuNzc5ICAgYzAuMDk1LDAuMDc2LDAuMTk1LDAuMTQ1LDAuMjg5LDAuMjIyYzAuMzA5LDAuMjU1LDAuNjA2LDAuNTI2LDAuOTAzLDAuNzk3YzAuMTA5LDAuMDk5LDAuMjI0LDAuMTkxLDAuMzMyLDAuMjkzICAgYzAuMjcyLDAuMjU3LDAuNTMsMC41MjksMC43OTEsMC43OTljMC4xMjMsMC4xMjcsMC4yNTIsMC4yNDYsMC4zNzIsMC4zNzZjMC4yMTEsMC4yMjgsMC40MDksMC40NywwLjYxMSwwLjcwNiAgIGMwLjE1OCwwLjE4NCwwLjMyMywwLjM2MiwwLjQ3NywwLjU1MWMwLjE5NiwwLjI0MiwwLjM3NywwLjQ5OCwwLjU2NCwwLjc0OWMwLjE0NywwLjE5NiwwLjMwMSwwLjM4NSwwLjQ0MiwwLjU4NiAgIGMwLjI4OSwwLjQxMSwwLjU2MiwwLjgzNiwwLjgyNywxLjI2OGMwLjAzLDAuMDQ5LDAuMDY0LDAuMDk1LDAuMDk0LDAuMTQ1YzAuMjkzLDAuNDg0LDAuNTcxLDAuOTgsMC44MzMsMS40ODggICBDNDMuODExLDM0LjQ3MSw0NC42NTMsMzcuMTU4LDQ1LjAzMywzOS44ODF6IE0xOS4zOSw0My44NTZjLTIuOTc1LTUuNzYxLTMuNTItMTIuMjY3LTEuNzU5LTE4LjI1NiAgIGMxLjEwNSwzLjU3MiwzLjU3NSw3LjE3OSw2LjAxNSwxMC43MjNjMS42NDgsMi4zOTUsMy4zNTMsNC44Nyw0LjYwMSw3LjI4NmMxLjM4NywyLjY4OSwyLjE1Myw1LjE4MiwyLjgyOSw3LjM4MiAgIGMwLjUyNiwxLjcxMiwxLjAzMywzLjMzOCwxLjc3Nyw0Ljc0MkMyNy4xMjQsNTMuNjQ4LDIyLjI5NSw0OS40ODgsMTkuMzksNDMuODU2eiIvPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzlFMzI1NjsiIGQ9Ik0xMDkuMjE3LDE3LjA1NGM1LjY1Niw3Ljc3MSw2Ljg0MiwxOC4zNjcsMi4xMzEsMjcuNDljLTQuNzA5LDkuMTI3LTE0LjAzLDE0LjI5Ny0yMy42NDQsMTQuMTg4ICAgIGMtNS42NTctNy43NzEtNi44NDItMTguMzY1LTIuMTMxLTI3LjQ5QzkwLjI4MywyMi4xMTcsOTkuNjA0LDE2Ljk0NywxMDkuMjE3LDE3LjA1NHoiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkNBRTg7IiBkPSJNMTA5LjIxNywxNy4wNTRjNS42NTYsNy43NzEtNC42OCwxNi43NDQtOS4zOTEsMjUuODY3Yy00LjcwOSw5LjEyNy0yLjUwOSwxNS45Mi0xMi4xMjIsMTUuODExICAgIGMtNS42NTctNy43NzEtNi44NDItMTguMzY1LTIuMTMxLTI3LjQ5QzkwLjI4MywyMi4xMTcsOTkuNjA0LDE2Ljk0NywxMDkuMjE3LDE3LjA1NHoiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNFRkEzQ0M7IiBkPSJNMTA5LjIxNywxNy4wNTRjNS42NTYsNy43NzEtNC42OCwxNi43NDQtOS4zOTEsMjUuODY3Yy00LjcwOSw5LjEyNy0yLjUwOSwxNS45Mi0xMi4xMjIsMTUuODExICAgIGMtNS42NTctNy43NzEtMy4yMDItMTEuNzEzLDEuNTA5LTIwLjgzOEM5My45MjIsMjguNzY3LDk5LjYwNCwxNi45NDcsMTA5LjIxNywxNy4wNTR6Ii8+Cgk8L2c+Cgk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTExMC40MywxNi4xNzFjLTAuMjc5LTAuMzgzLTAuNzIyLTAuNjExLTEuMTk2LTAuNjE3Yy0xMC41NDItMC4xMzUtMjAuMTU2LDUuNjMtMjQuOTkzLDE0Ljk5OSAgIGMtNC44MzgsOS4zNzItMy45NzYsMjAuNTA4LDIuMjUxLDI5LjA2MmMwLjI3OSwwLjM4MywwLjcyMiwwLjYxMSwxLjE5NiwwLjYxN2MwLjEwOSwwLjAwMSwwLjIxNywwLjAwMiwwLjMyNiwwLjAwMiAgIGMxMC40NTEsMCwxOS44ODItNS43MjYsMjQuNjY3LTE1LjAwMUMxMTcuNTE5LDM1Ljg2MywxMTYuNjU2LDI0LjcyNywxMTAuNDMsMTYuMTcxeiBNODcuNzM5LDMwLjQ0MiAgIEM4Ny43NCwzMC40NDEsODcuNzQsMzAuNDQxLDg3LjczOSwzMC40NDJjMC4yOTMtMC40ODQsMC42MDEtMC45NTUsMC45MjItMS40MTRjMC4wMDYtMC4wMDgsMC4wMTMtMC4wMTYsMC4wMTktMC4wMjUgICBjMC42MzktMC45MDgsMS4zMzMtMS43NjYsMi4wNzctMi41NjljMC4wMDYtMC4wMDcsMC4wMTMtMC4wMTMsMC4wMTktMC4wMTljMC4zNy0wLjM5OCwwLjc1MS0wLjc4NCwxLjE0NS0xLjE1NiAgIGMwLjAwNS0wLjAwNSwwLjAxMS0wLjAwOSwwLjAxNi0wLjAxNGMwLjM5NS0wLjM3MiwwLjgwMS0wLjczMSwxLjIxOS0xLjA3NWMwLjAxLTAuMDA4LDAuMDIxLTAuMDE2LDAuMDMyLTAuMDI0ICAgYzAuNDEzLTAuMzM5LDAuODM2LTAuNjY1LDEuMjY5LTAuOTc2YzAuMDQ2LTAuMDMzLDAuMDk1LTAuMDYyLDAuMTQyLTAuMDk1YzAuNC0wLjI4MywwLjgwNi0wLjU1OCwxLjIyMi0wLjgxNiAgIGMwLjA3NC0wLjA0NiwwLjE1Mi0wLjA4NSwwLjIyNi0wLjEzYzAuMzkzLTAuMjM4LDAuNzg5LTAuNDcxLDEuMTk1LTAuNjg3YzAuMDk0LTAuMDUsMC4xOTMtMC4wOTIsMC4yODgtMC4xNDEgICBjMC4zOTEtMC4yMDEsMC43ODQtMC40LDEuMTg3LTAuNThjMC4xMi0wLjA1NCwwLjI0NS0wLjA5OCwwLjM2NS0wLjE1YzAuMzgzLTAuMTY0LDAuNzY2LTAuMzI4LDEuMTU4LTAuNDczICAgYzAuMTQyLTAuMDUzLDAuMjg5LTAuMDk0LDAuNDMyLTAuMTQ0YzAuMzc2LTAuMTMxLDAuNzUyLTAuMjY0LDEuMTM2LTAuMzc3YzAuMTQ3LTAuMDQzLDAuMjk4LTAuMDc1LDAuNDQ2LTAuMTE2ICAgYzAuMzg1LTAuMTA2LDAuNzctMC4yMTQsMS4xNjItMC4zMDFjMC4xNTItMC4wMzQsMC4zMDctMC4wNTYsMC40NTktMC4wODdjMC4zOTMtMC4wOCwwLjc4NS0wLjE2MiwxLjE4NC0wLjIyNCAgIGMwLjE1LTAuMDIzLDAuMzAzLTAuMDM0LDAuNDU0LTAuMDU1YzAuNDA2LTAuMDU1LDAuODExLTAuMTExLDEuMjIyLTAuMTQ3YzAuMTI3LTAuMDExLDAuMjU2LTAuMDExLDAuMzg0LTAuMDIgICBjMC40My0wLjAzMSwwLjg2MS0wLjA1OSwxLjI5Ni0wLjA2OGMyLjc0Miw0LjYzNy0wLjkxNyw5Ljk1MS01LjEyNSwxNi4wNjRjLTEuNzAxLDIuNDcxLTMuNDYsNS4wMjUtNC43OTUsNy42MTEgICBjLTEuNTEsMi45MjctMi4zMTgsNS41NTYtMy4wMyw3Ljg3NWMtMS40NDQsNC43LTIuMTQsNi45NjctNi45ODYsNy4xMTZjLTAuOTY2LTEuNDE0LTEuNzczLTIuOTAxLTIuNDE4LTQuNDM4ICAgYy0wLjAxNi0wLjAzOS0wLjAyOS0wLjA3OS0wLjA0NS0wLjExOGMtMi43NDUtNi42MzEtMi40OTgtMTQuMTcxLDAuODkyLTIwLjczOUM4Ny4xNjksMzEuNDIyLDg3LjQ0NywzMC45MjUsODcuNzM5LDMwLjQ0MnogICAgTTExMC4wMTUsNDMuODU3Yy0yLjkwNiw1LjYzMi03LjczNCw5Ljc5Mi0xMy40NjEsMTEuODc2YzAuNzQ0LTEuNDAzLDEuMjUxLTMuMDMsMS43NzctNC43NDJjMC42NzUtMi4yLDEuNDQxLTQuNjkyLDIuODI5LTcuMzgxICAgYzEuMjQ4LTIuNDE3LDIuOTUyLTQuODkzLDQuNi03LjI4NmMyLjQ0LTMuNTQ0LDQuOTEtNy4xNTEsNi4wMTUtMTAuNzI0QzExMy41MzUsMzEuNTg5LDExMi45ODksMzguMDk2LDExMC4wMTUsNDMuODU3eiIvPgoJPGc+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkNBRTg7IiBkPSJNMTEzLjkxMiw3MC4xMTdjMCwyMC42NzYtMjIuMDMyLDM3LjQ0MS00OS4yMDksMzcuNDQxYy0yNy4xNzgsMC00OS4yMDktMTYuNzY2LTQ5LjIwOS0zNy40NDEgICAgIGMwLTIwLjY4LDIyLjAzMS00NS40NTksNDkuMjA5LTQ1LjQ1OUM5MS44OCwyNC42NTgsMTEzLjkxMiw0OS40MzcsMTEzLjkxMiw3MC4xMTd6Ii8+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRUZBM0NDOyIgZD0iTTExMy45MTIsNzAuMTE3YzAsMjAuNjc2LTIyLjAzMiwzNy40NDEtNDkuMjA5LDM3LjQ0MWMtMjcuMTc4LDAtNDkuMjA5LTE2Ljc2Ni00OS4yMDktMzcuNDQxICAgICBjMC0yMC42OCwyMi4wMzEtMzQuOTI4LDQ5LjIwOS0zNC45MjhDOTEuODgsMzUuMTg5LDExMy45MTIsNDkuNDM3LDExMy45MTIsNzAuMTE3eiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6I0VBODFCRDsiIGQ9Ik0xMTMuOTEyLDcwLjExN2MwLDIwLjY3Ni0yMi4wMzIsMzcuNDQxLTQ5LjIwOSwzNy40NDFjLTI3LjE3OCwwLTQ5LjIwOS0xNi43NjYtNDkuMjA5LTM3LjQ0MSAgICAgYzAtMjAuNjgyLDYuMjYxLDE4LjM0LDQ5LjIwOSwxOC4zNEMxMDcuNjUsODguNDU2LDExMy45MTIsNDkuNDM1LDExMy45MTIsNzAuMTE3eiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik02NC43MDMsMTA5LjA1OGMtMjcuOTYxLDAtNTAuNzA5LTE3LjQ2OS01MC43MDktMzguOTQxYzAtMjEuMjcsMjIuNjItNDYuOTU5LDUwLjcwOS00Ni45NTkgICAgIHM1MC43MDksMjUuNjg5LDUwLjcwOSw0Ni45NTlDMTE1LjQxMiw5MS41ODksOTIuNjY0LDEwOS4wNTgsNjQuNzAzLDEwOS4wNTh6IE02NC43MDMsMjYuMTU4ICAgICBjLTI2LjQyOCwwLTQ3LjcwOSwyNC4wNDgtNDcuNzA5LDQzLjk1OWMwLDE5LjgxOCwyMS40MDIsMzUuOTQxLDQ3LjcwOSwzNS45NDFzNDcuNzA5LTE2LjEyMyw0Ny43MDktMzUuOTQxICAgICBDMTEyLjQxMiw1MC4yMDUsOTEuMTMxLDI2LjE1OCw2NC43MDMsMjYuMTU4eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiMxNEE1OTQ7IiBkPSJNNDguNTQxLDY3Ljk1OGMwLDQuNDQ5LTMuNjA1LDguMDUxLTguMDUzLDguMDUxYy00LjQ0NiwwLTguMDUxLTMuNjAyLTguMDUxLTguMDUxICAgIGMwLTQuNDQ3LDMuNjA0LTguMDUxLDguMDUxLTguMDUxQzQ0LjkzNiw1OS45MDgsNDguNTQxLDYzLjUxMSw0OC41NDEsNjcuOTU4eiIvPgoJPC9nPgoJPGc+CgkJPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZGRkZGOyIgY3g9IjM2LjQ4NSIgY3k9IjY1LjM0MSIgcj0iMy4yODEiLz4KCTwvZz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNNDAuNDg4LDU4LjQwOGMtMy4yMzksMC02LjEwMiwxLjYyNC03LjgzLDQuMDk3Yy0wLjExMSwwLjE1LTAuMjA5LDAuMzA3LTAuMzAyLDAuNDcgICBjLTAuODk0LDEuNDUzLTEuNDE5LDMuMTU2LTEuNDE5LDQuOTgzYzAsNS4yNjcsNC4yODUsOS41NTEsOS41NTEsOS41NTFjNS4yNjgsMCw5LjU1My00LjI4NCw5LjU1My05LjU1MSAgIFM0NS43NTYsNTguNDA4LDQwLjQ4OCw1OC40MDh6IE00MC40ODgsNzQuNTA5Yy0yLjcyMSwwLTUuMDU4LTEuNjY4LTYuMDQ2LTQuMDM0YzAuNjg4LTAuMDE4LDEuNTI1LTAuMiwyLjQ2OC0wLjM5NiAgIGMwLjMzNi0wLjAzLDAuNjYtMC4wOTMsMC45NzMtMC4xOWMwLjgxOC0wLjE0OCwxLjY5Mi0wLjI2NywyLjYwNi0wLjI2N2MyLjQxMywwLDQuNTcyLDAuODEzLDYuMDQ4LDAuODUzICAgQzQ1LjU0OCw3Mi44NDEsNDMuMjEsNzQuNTA5LDQwLjQ4OCw3NC41MDl6Ii8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBjeD0iMzYuNDg0IiBjeT0iNjUuMzQyIiByPSIxLjc4Ii8+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojMTRBNTk0OyIgZD0iTTk2Ljk2OCw2Ny45NThjMCw0LjQ0OS0zLjYwNCw4LjA1MS04LjA1MSw4LjA1MWMtNC40NDcsMC04LjA1Mi0zLjYwMi04LjA1Mi04LjA1MSAgICBjMC00LjQ0NywzLjYwNC04LjA1MSw4LjA1Mi04LjA1MUM5My4zNjMsNTkuOTA4LDk2Ljk2OCw2My41MTEsOTYuOTY4LDY3Ljk1OHoiLz4KCTwvZz4KCTxnPgoJCTxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGN4PSI4NC45MTIiIGN5PSI2NS4zNDEiIHI9IjMuMjgiLz4KCTwvZz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNODguOTE3LDU4LjQwOGMtMy4yNCwwLTYuMTAzLDEuNjI0LTcuODMxLDQuMDk3Yy0wLjExMSwwLjE1LTAuMjA5LDAuMzA3LTAuMzAyLDAuNDcgICBjLTAuODk0LDEuNDUzLTEuNDE5LDMuMTU2LTEuNDE5LDQuOTgzYzAsNS4yNjcsNC4yODUsOS41NTEsOS41NTIsOS41NTFjNS4yNjYsMCw5LjU1MS00LjI4NCw5LjU1MS05LjU1MSAgIFM5NC4xODMsNTguNDA4LDg4LjkxNyw1OC40MDh6IE04OC45MTcsNzQuNTA5Yy0yLjcyMSwwLTUuMDU5LTEuNjY4LTYuMDQ3LTQuMDM0YzAuNjg4LTAuMDE4LDEuNTI1LTAuMiwyLjQ2OC0wLjM5NiAgIGMwLjMzNi0wLjAzLDAuNjU5LTAuMDkzLDAuOTcxLTAuMTg5YzAuODE5LTAuMTQ4LDEuNjk0LTAuMjY4LDIuNjA4LTAuMjY4YzIuNDEyLDAsNC41NzEsMC44MTMsNi4wNDYsMC44NTMgICBDOTMuOTc1LDcyLjg0MSw5MS42MzgsNzQuNTA5LDg4LjkxNyw3NC41MDl6Ii8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBjeD0iODQuOTEyIiBjeT0iNjUuMzQyIiByPSIxLjc4Ii8+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZDQUU4OyIgZD0iTTcyLjI2Niw2OS44MTZjMCwxLjAxMi0zLjQwNCwxLjE5My03LjYwNiwxLjE5M2MtNC4yLDAtNy42MDUtMC4xODItNy42MDUtMS4xOTMgICAgYzAtMS4wMSwzLjQwNS0zLjY1NCw3LjYwNS0zLjY1NEM2OC44NjEsNjYuMTYxLDcyLjI2Niw2OC44MDYsNzIuMjY2LDY5LjgxNnoiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiM5RTMyNTY7IiBkPSJNNTUuODA3LDc3LjkzMWMwLDQuOTEyLDMuOTgyLDguODk1LDguODk1LDguODk1YzQuOTE0LDAsOC44OTctMy45ODIsOC44OTctOC44OTVINTUuODA3eiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik02NC43MDIsODguMzI1Yy01LjczMiwwLTEwLjM5Ni00LjY2My0xMC4zOTYtMTAuMzk1YzAtMC44MjgsMC42NzEtMS41LDEuNS0xLjVoMTcuNzkyICAgIGMwLjgyOSwwLDEuNSwwLjY3MiwxLjUsMS41Qzc1LjA5OSw4My42NjIsNzAuNDM1LDg4LjMyNSw2NC43MDIsODguMzI1eiBNNTcuNDU5LDc5LjQzMWMwLjY5NSwzLjM2LDMuNjc5LDUuODk1LDcuMjQzLDUuODk1ICAgIGMzLjU2NCwwLDYuNTQ4LTIuNTM0LDcuMjQ0LTUuODk1SDU3LjQ1OXoiLz4KCTwvZz4KCTxnPgoJCTxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGQ0FFODsiIGN4PSI2NC43MDIiIGN5PSIzNi4yNjUiIHI9IjE5LjIxIi8+Cgk8L2c+Cgk8Zz4KCQk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNFRkEzQ0M7IiBjeD0iNjQuNzAyIiBjeT0iNDMuODY4IiByPSIxOS4yMSIvPgoJPC9nPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik02NC43MDMsMTUuNTU0Yy01LjMzOSwwLTEwLjE5NywyLjA0OC0xMy44NzQsNS4zNzhjLTAuMTAxLDAuMDU2LTAuMjA3LDAuMDk3LTAuMjk2LDAuMTc4ICAgYy04LjMzOSw3LjY0MS04LjkwOCwyMC42NDQtMS4yNjksMjguOTg2YzMuMDE3LDMuMjkxLDcuMTM1LDUuMjExLDExLjU5NSw1LjQwN2MwLjI1MSwwLjAxMSwwLjUwMSwwLjAxNywwLjc1LDAuMDE3ICAgYzQuMTg4LDAsOC4xNjctMS41NDUsMTEuMjczLTQuMzkyYzIuNjkyLTIuNDY2LDQuMjYzLTUuODMzLDQuNDIyLTkuNDgxYzAuMTYtMy42NDktMS4xMTItNy4xNDMtMy41OC05LjgzNiAgIGMtNC4xODYtNC41NjgtMTEuMzA5LTQuODgtMTUuODc4LTAuNjk1Yy0zLjc3NiwzLjQ2Ni00LjAzNCw5LjM1NS0wLjU3NSwxMy4xMzFjMC41NiwwLjYxLDEuNTA5LDAuNjU0LDIuMTE5LDAuMDkyICAgYzAuNjExLTAuNTYsMC42NTItMS41MDgsMC4wOTMtMi4xMTljLTIuMzQyLTIuNTU2LTIuMTY3LTYuNTQ1LDAuMzktOC44OTJjMy4zNS0zLjA2Nyw4LjU3Mi0yLjgzNywxMS42MzksMC41MTEgICBjMS45MjcsMi4xMDMsMi45MTksNC44MjksMi43OTUsNy42NzhjLTAuMTI0LDIuODQ4LTEuMzUsNS40NzYtMy40NTIsNy40Yy0yLjcsMi40NzUtNi4yMDIsMy43NDYtOS44NjUsMy41OSAgIGMtMy42NjEtMC4xNjEtNy4wNC0xLjczNi05LjUxNS00LjQzN2MtMi45NTQtMy4yMjYtNC40NTYtNy4yNjctNC41Ny0xMS4zM2MwLjA1MS0wLjE1LDAuMDg0LTAuMzA5LDAuMDg0LTAuNDc2ICAgYzAtOS43NjYsNy45NDUtMTcuNzExLDE3LjcxMS0xNy43MTFjOS43NjUsMCwxNy43MDksNy45NDUsMTcuNzA5LDE3LjcxMWMwLDAuODI4LDAuNjcxLDEuNSwxLjUsMS41czEuNS0wLjY3MiwxLjUtMS41ICAgQzg1LjQxMiwyNC44NDUsNzYuMTIyLDE1LjU1NCw2NC43MDMsMTUuNTU0eiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="/>
                                                </a>
                                            </li>
                                            <li class="traded-assets__item">
                                                <a href="#3">
                                                    <img
                                                        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxMjYuNDQzIDEyNi40NDMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyNi40NDMgMTI2LjQ0MzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNNjMuMjIyLDIzLjMzNmMtMS42NTcsMC0zLTEuMzQzLTMtM1YzYzAtMS42NTcsMS4zNDMtMywzLTNzMywxLjM0MywzLDN2MTcuMzM2ICAgICBDNjYuMjIyLDIxLjk5Myw2NC44NzksMjMuMzM2LDYzLjIyMiwyMy4zMzZ6Ii8+CgkJPC9nPgoJCTxnPgoJCQk8Zz4KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNNjAuMDQ0LDI2LjMwMWMtMC45NjksMC0xLjkxOS0wLjQ2OC0yLjQ5Ny0xLjMzM2wtOS42MzYtMTQuNDE2ICAgICAgYy0wLjkyMS0xLjM3Ny0wLjU1MS0zLjI0LDAuODI3LTQuMTYxYzEuMzc3LTAuOTIyLDMuMjQxLTAuNTUsNC4xNjEsMC44MjdsOS42MzYsMTQuNDE2YzAuOTIxLDEuMzc3LDAuNTUxLDMuMjQtMC44MjcsNC4xNjEgICAgICBDNjEuMTk2LDI2LjEzOCw2MC42MTcsMjYuMzAxLDYwLjA0NCwyNi4zMDF6Ii8+CgkJCTwvZz4KCQkJPGc+CgkJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTY2LjM5OSwyNi4zMDFjLTAuNTczLDAtMS4xNTItMC4xNjMtMS42NjQtMC41MDZjLTEuMzc4LTAuOTIxLTEuNzQ4LTIuNzg0LTAuODI3LTQuMTYxICAgICAgbDkuNjM2LTE0LjQxNmMwLjkyLTEuMzc3LDIuNzg0LTEuNzQ5LDQuMTYxLTAuODI3YzEuMzc4LDAuOTIxLDEuNzQ4LDIuNzg0LDAuODI3LDQuMTYxbC05LjYzNiwxNC40MTYgICAgICBDNjguMzE4LDI1LjgzMyw2Ny4zNjgsMjYuMzAxLDY2LjM5OSwyNi4zMDF6Ii8+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZGODAwOyIgZD0iTTExMi40MzEsNjkuNTFjMCwyMC42NzYtMjIuMDMyLDM3LjQ0MS00OS4yMDksMzcuNDQxYy0yNy4xNzgsMC00OS4yMDktMTYuNzY2LTQ5LjIwOS0zNy40NDEgICAgYzAtMjAuNjgsMjIuMDMxLTQ1LjQ1OSw0OS4yMDktNDUuNDU5QzkwLjM5OCwyNC4wNTEsMTEyLjQzMSw0OC44MywxMTIuNDMxLDY5LjUxeiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDQwMDsiIGQ9Ik0xMTIuNDMxLDY5LjUxYzAsMjAuNjc2LTIyLjAzMiwzNy40NDEtNDkuMjA5LDM3LjQ0MWMtMjcuMTc4LDAtNDkuMjA5LTE2Ljc2Ni00OS4yMDktMzcuNDQxICAgIGMwLTIwLjY4LDIyLjAzMS0zNC45MjgsNDkuMjA5LTM0LjkyOEM5MC4zOTgsMzQuNTgyLDExMi40MzEsNDguODMsMTEyLjQzMSw2OS41MXoiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkY4MDA7IiBkPSJNNzMuNzAxLDU4LjM2N2MwLDEuMzk1LTQuNjkxLDEuNjQ1LTEwLjQ3OSwxLjY0NXMtMTAuNDc5LTAuMjUtMTAuNDc5LTEuNjQ1ICAgIGMwLTEuMzkzLDQuNjkxLTUuMDM1LDEwLjQ3OS01LjAzNVM3My43MDEsNTYuOTc1LDczLjcwMSw1OC4zNjd6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZCMDAwOyIgZD0iTTExMi40MzEsNjkuNTFjMCwyMC42NzYtMjIuMDMyLDM3LjQ0MS00OS4yMDksMzcuNDQxYy0yNy4xNzgsMC00OS4yMDktMTYuNzY2LTQ5LjIwOS0zNy40NDEgICAgYzAtMjAuNjgyLDYuMjYxLDE4LjM0LDQ5LjIwOSwxOC4zNFMxMTIuNDMxLDQ4LjgyOCwxMTIuNDMxLDY5LjUxeiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik02My4yMjIsMTA4LjQ1MWMtMjcuOTYxLDAtNTAuNzA5LTE3LjQ2OS01MC43MDktMzguOTQxYzAtMjEuMjcsMjIuNjE5LTQ2Ljk1OSw1MC43MDktNDYuOTU5ICAgIHM1MC43MDksMjUuNjg5LDUwLjcwOSw0Ni45NTlDMTEzLjkzMSw5MC45ODIsOTEuMTgzLDEwOC40NTEsNjMuMjIyLDEwOC40NTF6IE02My4yMjIsMjUuNTUxICAgIGMtMjYuNDI4LDAtNDcuNzA5LDI0LjA0OC00Ny43MDksNDMuOTU5YzAsMTkuODE4LDIxLjQwMiwzNS45NDEsNDcuNzA5LDM1Ljk0MXM0Ny43MDktMTYuMTIzLDQ3LjcwOS0zNS45NDEgICAgQzExMC45MzEsNDkuNTk5LDg5LjY0OSwyNS41NTEsNjMuMjIyLDI1LjU1MXoiLz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8Zz4KCQkJCTxnPgoJCQkJCTxnPgoJCQkJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTQ3LjA2LDYwLjgyMmMtMC44MjgsMC0xLjUtMC42NzItMS41LTEuNWMwLTAuODctMi40ODctMi40NjktNi41NTItMi40NjkgICAgICAgIGMtNC4wNjMsMC02LjU1MSwxLjU5OS02LjU1MSwyLjQ2OWMwLDAuODI4LTAuNjcyLDEuNS0xLjUsMS41cy0xLjUtMC42NzItMS41LTEuNWMwLTMuMTE4LDQuMTA1LTUuNDY5LDkuNTUxLTUuNDY5ICAgICAgICBzOS41NTIsMi4zNTEsOS41NTIsNS40NjlDNDguNTYsNjAuMTUsNDcuODg4LDYwLjgyMiw0Ny4wNiw2MC44MjJ6Ii8+CgkJCQkJPC9nPgoJCQkJPC9nPgoJCQk8L2c+CgkJCTxnPgoJCQkJPGc+CgkJCQkJPGc+CgkJCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNOTUuNDg2LDYwLjgyMmMtMC44MjgsMC0xLjUtMC42NzItMS41LTEuNWMwLTAuODctMi40ODctMi40NjktNi41NTEtMi40NjkgICAgICAgIGMtNC4wNjQsMC02LjU1MiwxLjU5OS02LjU1MiwyLjQ2OWMwLDAuODI4LTAuNjcyLDEuNS0xLjUsMS41cy0xLjUtMC42NzItMS41LTEuNWMwLTMuMTE4LDQuMTA2LTUuNDY5LDkuNTUyLTUuNDY5ICAgICAgICBzOS41NTEsMi4zNTEsOS41NTEsNS40NjlDOTYuOTg2LDYwLjE1LDk2LjMxNCw2MC44MjIsOTUuNDg2LDYwLjgyMnoiLz4KCQkJCQk8L2c+CgkJCQk8L2c+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZGNEM3OyIgZD0iTTEwMi42MzYsMTAxLjc1OGMwLTEyLjY5Ny0xMS41NzMtMTYuODMtMjAuMTc2LTIzLjcxM2MtMTQuMzkzLTEyLjM4My05LjY2My0yMC4yNzMtMTguNjQxLTIwLjg4OSAgICB2LTAuMDQzYy0wLjIwOSwwLTAuNDAxLDAuMDA4LTAuNTk4LDAuMDE0Yy0wLjE5Ni0wLjAwNi0wLjM4OS0wLjAxNC0wLjU5OC0wLjAxNHYwLjA0M2MtOC45NzgsMC42MTUtNC4yNDgsOC41MDYtMTguNjQxLDIwLjg4OSAgICBjLTguNjAzLDYuODgzLTIwLjE3NiwxMS4wMTYtMjAuMTc2LDIzLjcxM2MwLDIwLjUwNiwyMC4zMTksMjIuMjk3LDM4LjgxNiwyMy4xNDV2MC4wNDFjMC4xOTgsMCwwLjM5OC0wLjAxNiwwLjU5OC0wLjAyICAgIGMwLjE5OSwwLjAwNCwwLjM5OSwwLjAyLDAuNTk4LDAuMDJ2LTAuMDQxQzgyLjMxNiwxMjQuMDU1LDEwMi42MzYsMTIyLjI2NCwxMDIuNjM2LDEwMS43NTh6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRTBENUE0OyIgZD0iTTEwMi4wNTEsMTAxLjkxNEM5OS42MDQsOTAuMjA3LDg5LjkxOCw4OS40MTIsODIuNDYsODMuNDQ1ICAgIGMtMTQuMzkzLTEyLjM4My05LjY2My0yMC4yNzItMTguNjQxLTIwLjg4OXYtMC4wNDNjLTAuMjA5LDAtMC40MDEsMC4wMS0wLjU5OCwwLjAxNmMtMC4xOTYtMC4wMDYtMC4zODktMC4wMTYtMC41OTgtMC4wMTZ2MC4wNDMgICAgYy04Ljk3OCwwLjYxNy00LjI0OCw4LjUwNi0xOC42NDEsMjAuODg5Yy03LjQ1OCw1Ljk2Ny0xNy4xNDQsNi43NjItMTkuNTkxLDE4LjQ2OWMzLjQzNSwxNS4yODcsMjEuNTY4LDE2LjgyMiwzOC4yMzEsMTcuNTg4ICAgIHYwLjA0MWMwLjE5OCwwLDAuMzk4LTAuMDE2LDAuNTk4LTAuMDIxYzAuMTk5LDAuMDA2LDAuMzk5LDAuMDIxLDAuNTk4LDAuMDIxdi0wLjA0MSAgICBDODAuNDgyLDExOC43MzYsOTguNjE2LDExNy4yMDEsMTAyLjA1MSwxMDEuOTE0eiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik02My44MTksMTI2LjQ0M2MtMC4xMzYsMC0wLjI3MS0wLjAwNi0wLjQwOC0wLjAxMmwtMC4yMTktMC4wMDhsLTAuMTYsMC4wMDggICAgYy0wLjI4MiwwLjAxMy0wLjU2OCwwLjAyNy0wLjgyNC0wLjA0N2MtMTYuMDI3LTAuNzM1LTM5LjktMS45OTItMzkuOS0yNC42MjdjMC0xMC42MzcsNy40OTUtMTUuNzAxLDE0Ljc0My0yMC41OTkgICAgYzIuMDItMS4zNjQsNC4xMDctMi43NzQsNS45OTUtNC4yODVjNi44NjEtNS45MDUsOS4xOTMtMTAuNzI5LDEwLjg5Ni0xNC4yNTNjMS43NC0zLjYwMSwzLjEyMy02LjQ2Miw4LjIyNi02LjkzMyAgICBjMC4zMS0wLjEwNCwwLjY2NC0wLjA3NSwwLjk4NC0wLjA2NGwwLjExNCwwLjAwNGwwLjAyNC0wLjAwNGMwLjMyNy0wLjAxMSwwLjY4OC0wLjAzOCwxLjAwMywwLjA2NSAgICBjNS4wODcsMC40NzcsNi40NjksMy4zMzUsOC4yMDcsNi45MzJjMS43MDMsMy41MjMsNC4wMzUsOC4zNDgsMTAuOTM4LDE0LjI4N2MxLjg0NywxLjQ3NywzLjkzNSwyLjg4Nyw1Ljk1NCw0LjI1MSAgICBjNy4yNDgsNC44OTcsMTQuNzQzLDkuOTYyLDE0Ljc0MywyMC41OTljMCwyMi42NC0yMy44ODYsMjMuODkyLTM5LjkxMywyNC42MjhDNjQuMDk1LDEyNi40MjMsNjMuOTU5LDEyNi40NDMsNjMuODE5LDEyNi40NDN6ICAgICBNNjMuMTkyLDEyMy40MjRsMC4zMjUsMC4wMWMwLjA3Ni0wLjAxNiwwLjE1My0wLjAyNiwwLjIzMy0wLjAyOWMyMC40NTQtMC45MzgsMzcuMzg1LTMuMjE0LDM3LjM4NS0yMS42NDYgICAgYzAtOS4wNDMtNi41Mi0xMy40NDgtMTMuNDIzLTE4LjExMmMtMi4wNjgtMS4zOTctNC4yMDctMi44NDMtNi4xOS00LjQzQzc0LjEwNiw3Mi44MzcsNzEuNTE1LDY3LjQ3NSw2OS44LDYzLjkyNyAgICBjLTEuNzE3LTMuNTUzLTIuNDI4LTUuMDIzLTYuMDgzLTUuMjc0Yy0wLjA3OC0wLjAwNS0wLjE1NC0wLjAxNy0wLjIyOS0wLjAzM2MtMC4wMzQsMC4wMDEtMC4wNjgsMC4wMDItMC4xMDIsMC4wMDNsLTAuMTIsMC4wMDQgICAgbC0wLjIxLTAuMDA0Yy0wLjAzNS0wLjAwMS0wLjA3LTAuMDAyLTAuMTA1LTAuMDAzYy0wLjA3MywwLjAxNy0wLjE0OCwwLjAyOC0wLjIyNSwwLjAzM2MtMy42NTUsMC4yNTEtNC4zNjYsMS43MjItNi4wODMsNS4yNzQgICAgYy0xLjcxNSwzLjU0OC00LjMwNyw4LjkxLTExLjY4MiwxNS4yNTVjLTIuMDI0LDEuNjIxLTQuMTYzLDMuMDY2LTYuMjMxLDQuNDY0Yy02LjkwMyw0LjY2NC0xMy40MjMsOS4wNjktMTMuNDIzLDE4LjExMiAgICBjMCwxOC40MzMsMTYuOTMxLDIwLjcwOSwzNy4zODUsMjEuNjQ2YzAuMDgxLDAuMDAzLDAuMTYsMC4wMTQsMC4yMzcsMC4wMjlMNjMuMTkyLDEyMy40MjR6Ii8+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik01OS4wNzcsNzYuMjEzYy0wLjU3MywwLTEuMTItMC4zMy0xLjM3LTAuODg3bC0xLjEwMi0yLjQ1N2MtMC4zMzktMC43NTYsMC0xLjY0NCwwLjc1Ni0xLjk4MiAgICAgYzAuNzU1LTAuMzM4LDEuNjQzLDAsMS45ODIsMC43NTZsMS4xMDIsMi40NTdjMC4zMzksMC43NTYsMCwxLjY0NC0wLjc1NiwxLjk4MkM1OS40OSw3Ni4xNzEsNTkuMjgyLDc2LjIxMyw1OS4wNzcsNzYuMjEzeiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik02Ny4zNjYsNzYuMjEzYy0wLjIwNSwwLTAuNDEzLTAuMDQyLTAuNjEyLTAuMTMxYy0wLjc1Ni0wLjMzOS0xLjA5NS0xLjIyNy0wLjc1Ni0xLjk4MiAgICAgbDEuMTAyLTIuNDU3YzAuMzQtMC43NTYsMS4yMjctMS4wOTMsMS45ODItMC43NTZjMC43NTYsMC4zMzksMS4wOTUsMS4yMjcsMC43NTYsMS45ODJsLTEuMTAyLDIuNDU3ICAgICBDNjguNDg2LDc1Ljg4Myw2Ny45MzksNzYuMjEzLDY3LjM2Niw3Ni4yMTN6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="/>
                                                </a>
                                            </li>
                                        </ul>
                                        <a href="#3" class="btn btn-outline-white">Go To Assets</a>
                                    </div>
                                </div>

                                <div class="card invert community-spotlight" v-if="community_data">
                                    <div class="card-body">
                                        <h2 class="title">Community Spotlight
                                            <a href="#3" class="title-icon">
                                                <i class="fas fa-comments"></i>
                                                <i class="fas fa-arrow-up"></i>
                                            </a>
                                        </h2>
                                        <ul class="community-spotlight__list">
                                            <li v-for="(item, index) in community_data" :key="index">
                                                <a :href="item.link">
                                                    <span class="community-spotlight__name">{{ item.name }}</span>
                                                    <span class="community-spotlight__count">{{ item.count }}</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <a href="#3" class="btn btn-outline-white">Go To Forums</a>
                                    </div>
                                </div>

                                <div class="card invert system-requirements" v-if="system_requirements_data">
                                    <div class="card-body">
                                        <h2 class="title">System Requirements <i class="fas fa-laptop title-icon"></i>
                                        </h2>
                                        <div class="system-requirements__item"
                                             v-for="(item, index) in system_requirements_data" :key="index">
                                            <h6>{{ item.system }} <i :class="item.icon"></i></h6>
                                            <p>{{ item.requirements }}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="card transparent languages-blk" v-if="languages_data">
                                    <div class="card-body">
                                        <h2 class="title">Languages <i class="fas fa-laptop title-icon"></i></h2>
                                        <ul class="languages-list">
                                            <li class="languages-list__item" v-for="(item, index) in languages_data"
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

                        {{ product.author }}
                        {{ product.images }}

                        <div v-html="product.content"></div>

                        <input type="text" name="name" v-model.lazy="product.name"/>

                        <button class="btn" @click="save()">Save</button>
                        view:
                        https://user-images.githubusercontent.com/156768/41747362-8f17d1e8-7562-11e8-8c42-72a78233f921.png
                        create:
                        https://user-images.githubusercontent.com/156768/41747248-230a0142-7562-11e8-919f-41d8dd97cea6.png
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    const updateProduct = function () {
        if (!this.$store.state.marketplace.entities.products)
            return

        const product = this.$store.state.marketplace.entities.products[this.id]

        if (!product)
            return

        if (product.images && product.images.headerUrl)
            window.document.body.style['background-image'] = 'url(' + product.images.headerUrl + ')'

        return product
    }

    export default {
        props: ['id'],
        components: {
            'c-layout': () => import('@/ui/layouts/default'),
            'plan-list': () => import('@/ui/components/game-plans/list.vue')
        },
        data() {
            return {
                crowndfunding_data: {
                    stages: [
                        {
                            status: 'in_progress',
                            text: 'm1'
                        },
                        {
                            status: 'awaiting',
                            text: 'm2'
                        },
                        {
                            status: 'awaiting',
                            text: 'm3'
                        },
                        {
                            status: 'awaiting',
                            text: 'm4'
                        },
                        {
                            status: 'awaiting',
                            text: 'm5'
                        },
                        {
                            status: 'awaiting',
                            text: 'm6'
                        },
                    ],
                    funded_amount: '202,190.63',
                    goal_amount: '200,000.00',
                    spent_amount: {
                        amount: '32,000',
                        percent: '37'
                    },
                    locked_amount: {
                        amount: '182,242',
                        percent: '71'
                    },
                    overflow_amount: {
                        amount: '17,342',
                        percent: '12'
                    },
                },
                milestones_data: [
                    {
                        text: 'Create the base game with 2 dungeons',
                        status: 'done',
                    },
                    {
                        text: 'New Class, storyline and weapons type',
                        status: 'done',
                    },
                    {
                        text: 'Level cap updated to 90 with new set of armors and weapons.',
                        step_number: '3',
                    },
                    {
                        text: 'Add 3 extra dungeons',
                        step_number: '4',
                    }
                ],
                rating_data: [
                    {
                        name: 'Game',
                        number: 2.3
                    },
                    {
                        name: 'Developer',
                        number: 5
                    },
                    {
                        name: 'Market',
                        number: 3.5
                    }
                ],
                assets_data: {},
                community_data: [
                    {
                        name: '[GUIDE] Short Title',
                        count: '381',
                        link: '#3'
                    },
                    {
                        name: 'Just Title',
                        count: '31',
                        link: '#4'
                    },
                    {
                        name: 'Just Some a Little bit long Title',
                        count: '1701',
                        link: '#5'
                    }
                ],
                system_requirements_data: [
                    {
                        system: 'Microsoft Windows',
                        requirements: '8GB storage space, 4GB RAM, GTX 1050, or equivalent',
                        icon: 'fab fa-windows'

                    },
                    {
                        system: 'Linux/Debian',
                        requirements: '8GB storage space, 4GB RAM, GTX 1050, or equivalent',
                        icon: 'fab fa-linux'

                    },
                    {
                        system: 'MacOS',
                        requirements: 'macOS Hight Sierra, 8GB storage space, 8GB RAM, GTX 1050, or equivalent',
                        icon: 'fab fa-apple'

                    }
                ],
                languages_data: [
                    {
                        name: 'English',
                        closed_captioning: true,
                        audio_description: true
                    },
                    {
                        name: 'Spanish',
                        closed_captioning: true,
                        audio_description: true
                    },
                    {
                        name: 'French',
                        closed_captioning: true,
                        audio_description: true
                    },
                    {
                        name: 'Portuguese',
                        closed_captioning: true,
                        audio_description: true
                    }
                ]
            }
        },
        methods: {
            save() {
                this.$store.dispatch('marketplace/updateProduct', this.product)
            }
        },
        computed: {
            product: updateProduct
        },
        mounted: updateProduct,
        created: {
            updateProduct
        },
        beforeDestroy() {
            window.document.body.style['background-image'] = 'url(/static/img/products/default.png)'
        }
    }
</script>

<style lang="scss" scoped>
    .product__tag {
        margin-bottom: 25px;
        .tag-link {
            background: #fbe17d;
            border-radius: 3px;
            padding: 2px 5px;
            margin-right: 8px;
            color: #000;
            text-transform: lowercase;
            font-size: 13px;
            font-weight: bold;
            &:hover {
                text-decoration: none;
                background: #d8c26c;
            }
            &:last-child {
                margin: 0;
            }
        }
    }

    .main_content {
        margin-top: 15px;
        padding: 15px;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.07);
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
    }

    .card {
        background: rgba(0, 0, 0, .13);
        border: 1px solid rgba(70, 70, 70, 0.5);
        border-radius: 5px;
        margin-bottom: 15px;
        h2 {
            color: #fff;
            font-size: 21px;
            text-align: left;
            margin-bottom: 15px;
            font-weight: bold;
            .title-icon {
                float: right;
                vertical-align: text-bottom;
                font-size: 15px;
                margin-top: 6px;
                color: #fff;
                text-decoration: none;
            }
        }
        .card-body {
            padding: 10px;
        }
        &.transparent {
            border: none;
            background: transparent;
        }
    }

    .crowndfunding-campaing {
        .crowndfunding-campaing__progress {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            flex-wrap: nowrap;
            overflow: hidden;
            margin: 10px -6%;
            .crowndfunding-campaing_progress-stage {
                width: 50%;
                text-align: center;
                span {
                    display: inline-block;
                    width: 100%;
                    position: relative;
                    text-transform: uppercase;
                    font-weight: bold;
                    overflow: hidden;
                    &.stage_line{
                        background: #3D691F;
                        height: 15px;
                        float: left;
                    }
                    &.name{
                        padding-top: 15px;
                        &:after {
                            position: absolute;
                            top: 5px;
                            width: 2px;
                            content: "";
                            height: 8px;
                            left: calc( 50% - 1px );
                            display: inline-block;
                            background: #fff;
                        }
                    }
                }
                i {
                    margin-bottom: 7px;
                    font-size: 10px;
                    display: block;
                    width: 100%;
                }
                &:first-child {
                    .stage_line {
                        border-radius: 5px 0 0 5px;
                        width: 65%;
                        float: right;
                    }
                    &.in_progress {
                        .stage_line {
                            &:after {
                                left: 25%;
                            }
                        }
                    }
                }
                &:last-child {
                    .stage_line {
                        border-radius: 0 5px 5px 0;
                        width: 65%;
                        float: left;
                    }
                    &.in_progress {
                        .stage_line {
                            &:after {
                                left: 75%;
                            }
                        }
                    }
                }
                &.done {
                    span {
                        &:before {
                            background: #3D691F;
                        }
                    }
                    i {
                        color: #3D691F;
                    }
                }
                &.in_progress {
                    .stage_line {
                        &:after {
                            position: absolute;
                            background: #5EA72B;
                            height: 100%;
                            left: 50%;
                            right: 0;
                            content: "";
                            display: inline-block;
                        }
                    }
                    i {
                        color: #FADC72;
                    }
                }
                &.awaiting {
                    .stage_line {
                        background: #5EA72B;
                    }
                }
            }
        }
        .crowndfunding-campaing__info {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin: 10px 0;
            .funded,
            .goal {
                background: rgba(0, 0, 0, 0.16);
                border-radius: 5px;
                width: calc(50% - 5px);
                padding: 10px;
                color: #fff;
                font-size: 18px;
                .text {
                    font-size: 14px;
                    font-weight: bold;
                    margin-bottom: 5px;
                    text-transform: uppercase;
                }
            }
            .spent_blk,
            .locked_blk,
            .overflow_blk {
                width: 32%;
                margin-top: 10px;
                font-size: 15px;
                position: relative;
                .text {
                    font-weight: bold;
                    margin-bottom: 4px;
                }
                .progress-bar-vertical {
                    width: 5px;
                    min-height: calc( 100% - 7px );
                    display: flex;
                    align-items: flex-end;
                    margin: 4px 8px 3px 0;
                    float: left;
                    border-radius: 0;
                    background: #fff;
                    .progress-bar {
                        width: 100%;
                        height: 0;
                        -webkit-transition: height 0.6s ease;
                        -o-transition: height 0.6s ease;
                        transition: height 0.6s ease;
                    }
                }
            }
        }
        .crowndfunding-campaing__action{
            display: flex;
            justify-content: space-between;
            flex-wrap: nowrap;
            margin-top: 15px;
            a{
                width: 31%;
                border-radius: 5px;
                color: #fff;
                font-size: 13px;
                text-transform: uppercase;
                text-align: center;
                box-shadow: 0 1px 3px rgba(0, 0, 0, .16);
                line-height: 24px;
                font-weight: bold;
                text-decoration: none;
                i{
                    margin-right: 5px;
                    font-size: 16px;
                }
                &.follow_link{
                    background: #436CC9;
                    &:hover{
                        background: #314e92;
                    }
                }
                &.share_link{
                    background: #43B4C9;
                    &:hover{
                        background: #348b9b;
                    }
                }
                &.support_link{
                    background: #43C981;
                    &:hover{
                        background: #2e8b59;
                    }
                }
            }
        }
    }

    .milestones-blk__list {
        padding: 0;
        margin: 0;
        li {
            list-style: none;
            font-size: 14px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 5px 5px 5px 0;
            border-radius: 5px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
            background: #27283E;
            margin-bottom: 10px;
            &:last-child {
                margin-bottom: 0;
            }
            &.done {
                border: 2px solid #5EA72B;
            }
            .text {
                flex-basis: calc(100% - 40px);
                text-align: left;
            }
            .step_number {
                flex-basis: 40px;
                text-align: center;
                font-size: 22px;
            }
            .status_done {
                flex-basis: 40px;
                text-align: center;
                font-size: 22px;
                color: #5EA72B;
            }
        }
    }

    .rating-blk {
        .rating-blk__list {
            padding: 0;
            li {
                list-style: none;
                display: block;
                overflow: hidden;
                font-size: 14px;
                margin-bottom: 8px;
                color: #fff;
                .rating-blk__info {
                    display: inline-block;
                    float: left;
                    width: calc(100% - 90px);
                    .rating-blk__name {
                        float: left;
                        width: 80%;
                        font-weight: bold;
                    }
                    .rating-blk__number {
                        float: right;
                        width: 20%;
                        text-align: right;
                    }
                }
                .rating-blk__stars {
                    float: right;
                    text-align: left;
                    width: 80px;
                }
            }
        }
        a.btn-outline-white {
            font-size: 12px;
            text-transform: uppercase;
            color: #fff;
            border: 1px solid #fff;
            border-radius: 5px;
            font-weight: bold;
            display: inline-block;
            float: left;
            line-height: 24px;
            padding: 0 8px;
            width: auto;
            margin: 5px 10px 3px 0;
            &:last-child {
                margin-right: 0;
            }
            &:hover {
                background: #fff;
                color: #000;
                text-decoration: none;
            }
        }
    }

    .traded-assets {
        .traded-assets__filter {
            .dropdown {
                display: inline-block;
                float: left;
                margin-right: 20px;
                &:last-child {
                    margin-right: 0;
                }
                a.dropdown-toggle {
                    padding: 0;
                    background: transparent;
                    border: none;
                    font-size: 11px;
                    text-transform: uppercase;
                    &:active,
                    &:focus {
                        box-shadow: none;
                        border: none;
                        background: transparent;
                    }
                    &:after {
                        margin-left: 18px;
                    }
                }
                .dropdown-menu {
                    .dropdown-item {
                        padding-left: 15px;
                        &:after {
                            display: none;
                        }
                    }
                }
            }
        }
        .traded-assets__list {
            padding: 0;
            display: block;
            width: 100%;
            overflow: hidden;
            margin: 10px -10px;
            .traded-assets__item {
                list-style: none;
                display: inline-block;
                float: left;
                width: 25%;
                padding: 10px;
                img {
                    /*height: 60px;*/
                    width: auto;
                    max-width: 100%;
                    max-height: 100%;
                }
            }
        }
        a.btn-outline-white {
            font-size: 12px;
            text-transform: uppercase;
            color: #fff;
            border: 1px solid #fff;
            border-radius: 5px;
            font-weight: bold;
            display: inline-block;
            float: left;
            line-height: 24px;
            padding: 0 8px;
            width: auto;
            margin: 5px 10px 3px 0;
            &:last-child {
                margin-right: 0;
            }
            &:hover {
                background: #fff;
                color: #000;
                text-decoration: none;
            }
        }
    }

    .community-spotlight {
        .community-spotlight__list {
            padding: 0;
            margin: 10px 0;
            display: block;
            width: 100%;
            overflow: hidden;
            li {
                display: block;
                width: 100%;
                overflow: hidden;
                margin: 5px 0;
                padding-right: 20px;
                position: relative;
                &:after {
                    position: absolute;
                    right: 0px;
                    top: 1px;
                    bottom: 0;
                    width: 20px;
                    content: "\f086";
                    font-family: 'Font Awesome 5 Free';
                    color: #fff;
                    text-align: right;
                }
                a {
                    color: #fff;
                    .community-spotlight__name {
                        float: left;
                        max-width: 70%;
                        font-weight: bold;
                    }
                    .community-spotlight__count {
                        float: right;
                        max-width: 30px;
                    }
                }

            }
        }
        a.btn-outline-white {
            font-size: 12px;
            text-transform: uppercase;
            color: #fff;
            border: 1px solid #fff;
            border-radius: 5px;
            font-weight: bold;
            display: inline-block;
            float: left;
            line-height: 24px;
            padding: 0 8px;
            width: auto;
            margin: 5px 10px 3px 0;
            &:last-child {
                margin-right: 0;
            }
            &:hover {
                background: #fff;
                color: #000;
                text-decoration: none;
            }
        }
    }

    .system-requirements {
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
    }

    .languages-list {
        padding: 0;
        .languages-list__item {
            list-style: none;
            display: block;
            margin: 5px 0;
            width: 100%;
            overflow: hidden;
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
        }
    }
</style>
