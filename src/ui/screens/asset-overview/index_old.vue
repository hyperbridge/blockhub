<template>
    <c-layout navigationKey="asset-navigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row" v-if="!asset">
                    <div class="col-12">
                        Asset not found
                    </div>
                </div>
                <div class="row" v-if="asset">
                    <div class="col-12 ">
                        <div class="assets-title">
                            <div class="title-thumb">
                                <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxMjYuNDQzIDEyNi40NDMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyNi40NDMgMTI2LjQ0MzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNNjMuMjIyLDIzLjMzNmMtMS42NTcsMC0zLTEuMzQzLTMtM1YzYzAtMS42NTcsMS4zNDMtMywzLTNzMywxLjM0MywzLDN2MTcuMzM2ICAgICBDNjYuMjIyLDIxLjk5Myw2NC44NzksMjMuMzM2LDYzLjIyMiwyMy4zMzZ6Ii8+CgkJPC9nPgoJCTxnPgoJCQk8Zz4KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNNjAuMDQ0LDI2LjMwMWMtMC45NjksMC0xLjkxOS0wLjQ2OC0yLjQ5Ny0xLjMzM2wtOS42MzYtMTQuNDE2ICAgICAgYy0wLjkyMS0xLjM3Ny0wLjU1MS0zLjI0LDAuODI3LTQuMTYxYzEuMzc3LTAuOTIyLDMuMjQxLTAuNTUsNC4xNjEsMC44MjdsOS42MzYsMTQuNDE2YzAuOTIxLDEuMzc3LDAuNTUxLDMuMjQtMC44MjcsNC4xNjEgICAgICBDNjEuMTk2LDI2LjEzOCw2MC42MTcsMjYuMzAxLDYwLjA0NCwyNi4zMDF6Ii8+CgkJCTwvZz4KCQkJPGc+CgkJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTY2LjM5OSwyNi4zMDFjLTAuNTczLDAtMS4xNTItMC4xNjMtMS42NjQtMC41MDZjLTEuMzc4LTAuOTIxLTEuNzQ4LTIuNzg0LTAuODI3LTQuMTYxICAgICAgbDkuNjM2LTE0LjQxNmMwLjkyLTEuMzc3LDIuNzg0LTEuNzQ5LDQuMTYxLTAuODI3YzEuMzc4LDAuOTIxLDEuNzQ4LDIuNzg0LDAuODI3LDQuMTYxbC05LjYzNiwxNC40MTYgICAgICBDNjguMzE4LDI1LjgzMyw2Ny4zNjgsMjYuMzAxLDY2LjM5OSwyNi4zMDF6Ii8+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZGODAwOyIgZD0iTTExMi40MzEsNjkuNTFjMCwyMC42NzYtMjIuMDMyLDM3LjQ0MS00OS4yMDksMzcuNDQxYy0yNy4xNzgsMC00OS4yMDktMTYuNzY2LTQ5LjIwOS0zNy40NDEgICAgYzAtMjAuNjgsMjIuMDMxLTQ1LjQ1OSw0OS4yMDktNDUuNDU5QzkwLjM5OCwyNC4wNTEsMTEyLjQzMSw0OC44MywxMTIuNDMxLDY5LjUxeiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDQwMDsiIGQ9Ik0xMTIuNDMxLDY5LjUxYzAsMjAuNjc2LTIyLjAzMiwzNy40NDEtNDkuMjA5LDM3LjQ0MWMtMjcuMTc4LDAtNDkuMjA5LTE2Ljc2Ni00OS4yMDktMzcuNDQxICAgIGMwLTIwLjY4LDIyLjAzMS0zNC45MjgsNDkuMjA5LTM0LjkyOEM5MC4zOTgsMzQuNTgyLDExMi40MzEsNDguODMsMTEyLjQzMSw2OS41MXoiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkY4MDA7IiBkPSJNNzMuNzAxLDU4LjM2N2MwLDEuMzk1LTQuNjkxLDEuNjQ1LTEwLjQ3OSwxLjY0NXMtMTAuNDc5LTAuMjUtMTAuNDc5LTEuNjQ1ICAgIGMwLTEuMzkzLDQuNjkxLTUuMDM1LDEwLjQ3OS01LjAzNVM3My43MDEsNTYuOTc1LDczLjcwMSw1OC4zNjd6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZCMDAwOyIgZD0iTTExMi40MzEsNjkuNTFjMCwyMC42NzYtMjIuMDMyLDM3LjQ0MS00OS4yMDksMzcuNDQxYy0yNy4xNzgsMC00OS4yMDktMTYuNzY2LTQ5LjIwOS0zNy40NDEgICAgYzAtMjAuNjgyLDYuMjYxLDE4LjM0LDQ5LjIwOSwxOC4zNFMxMTIuNDMxLDQ4LjgyOCwxMTIuNDMxLDY5LjUxeiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik02My4yMjIsMTA4LjQ1MWMtMjcuOTYxLDAtNTAuNzA5LTE3LjQ2OS01MC43MDktMzguOTQxYzAtMjEuMjcsMjIuNjE5LTQ2Ljk1OSw1MC43MDktNDYuOTU5ICAgIHM1MC43MDksMjUuNjg5LDUwLjcwOSw0Ni45NTlDMTEzLjkzMSw5MC45ODIsOTEuMTgzLDEwOC40NTEsNjMuMjIyLDEwOC40NTF6IE02My4yMjIsMjUuNTUxICAgIGMtMjYuNDI4LDAtNDcuNzA5LDI0LjA0OC00Ny43MDksNDMuOTU5YzAsMTkuODE4LDIxLjQwMiwzNS45NDEsNDcuNzA5LDM1Ljk0MXM0Ny43MDktMTYuMTIzLDQ3LjcwOS0zNS45NDEgICAgQzExMC45MzEsNDkuNTk5LDg5LjY0OSwyNS41NTEsNjMuMjIyLDI1LjU1MXoiLz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8Zz4KCQkJCTxnPgoJCQkJCTxnPgoJCQkJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTQ3LjA2LDYwLjgyMmMtMC44MjgsMC0xLjUtMC42NzItMS41LTEuNWMwLTAuODctMi40ODctMi40NjktNi41NTItMi40NjkgICAgICAgIGMtNC4wNjMsMC02LjU1MSwxLjU5OS02LjU1MSwyLjQ2OWMwLDAuODI4LTAuNjcyLDEuNS0xLjUsMS41cy0xLjUtMC42NzItMS41LTEuNWMwLTMuMTE4LDQuMTA1LTUuNDY5LDkuNTUxLTUuNDY5ICAgICAgICBzOS41NTIsMi4zNTEsOS41NTIsNS40NjlDNDguNTYsNjAuMTUsNDcuODg4LDYwLjgyMiw0Ny4wNiw2MC44MjJ6Ii8+CgkJCQkJPC9nPgoJCQkJPC9nPgoJCQk8L2c+CgkJCTxnPgoJCQkJPGc+CgkJCQkJPGc+CgkJCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNOTUuNDg2LDYwLjgyMmMtMC44MjgsMC0xLjUtMC42NzItMS41LTEuNWMwLTAuODctMi40ODctMi40NjktNi41NTEtMi40NjkgICAgICAgIGMtNC4wNjQsMC02LjU1MiwxLjU5OS02LjU1MiwyLjQ2OWMwLDAuODI4LTAuNjcyLDEuNS0xLjUsMS41cy0xLjUtMC42NzItMS41LTEuNWMwLTMuMTE4LDQuMTA2LTUuNDY5LDkuNTUyLTUuNDY5ICAgICAgICBzOS41NTEsMi4zNTEsOS41NTEsNS40NjlDOTYuOTg2LDYwLjE1LDk2LjMxNCw2MC44MjIsOTUuNDg2LDYwLjgyMnoiLz4KCQkJCQk8L2c+CgkJCQk8L2c+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZGNEM3OyIgZD0iTTEwMi42MzYsMTAxLjc1OGMwLTEyLjY5Ny0xMS41NzMtMTYuODMtMjAuMTc2LTIzLjcxM2MtMTQuMzkzLTEyLjM4My05LjY2My0yMC4yNzMtMTguNjQxLTIwLjg4OSAgICB2LTAuMDQzYy0wLjIwOSwwLTAuNDAxLDAuMDA4LTAuNTk4LDAuMDE0Yy0wLjE5Ni0wLjAwNi0wLjM4OS0wLjAxNC0wLjU5OC0wLjAxNHYwLjA0M2MtOC45NzgsMC42MTUtNC4yNDgsOC41MDYtMTguNjQxLDIwLjg4OSAgICBjLTguNjAzLDYuODgzLTIwLjE3NiwxMS4wMTYtMjAuMTc2LDIzLjcxM2MwLDIwLjUwNiwyMC4zMTksMjIuMjk3LDM4LjgxNiwyMy4xNDV2MC4wNDFjMC4xOTgsMCwwLjM5OC0wLjAxNiwwLjU5OC0wLjAyICAgIGMwLjE5OSwwLjAwNCwwLjM5OSwwLjAyLDAuNTk4LDAuMDJ2LTAuMDQxQzgyLjMxNiwxMjQuMDU1LDEwMi42MzYsMTIyLjI2NCwxMDIuNjM2LDEwMS43NTh6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRTBENUE0OyIgZD0iTTEwMi4wNTEsMTAxLjkxNEM5OS42MDQsOTAuMjA3LDg5LjkxOCw4OS40MTIsODIuNDYsODMuNDQ1ICAgIGMtMTQuMzkzLTEyLjM4My05LjY2My0yMC4yNzItMTguNjQxLTIwLjg4OXYtMC4wNDNjLTAuMjA5LDAtMC40MDEsMC4wMS0wLjU5OCwwLjAxNmMtMC4xOTYtMC4wMDYtMC4zODktMC4wMTYtMC41OTgtMC4wMTZ2MC4wNDMgICAgYy04Ljk3OCwwLjYxNy00LjI0OCw4LjUwNi0xOC42NDEsMjAuODg5Yy03LjQ1OCw1Ljk2Ny0xNy4xNDQsNi43NjItMTkuNTkxLDE4LjQ2OWMzLjQzNSwxNS4yODcsMjEuNTY4LDE2LjgyMiwzOC4yMzEsMTcuNTg4ICAgIHYwLjA0MWMwLjE5OCwwLDAuMzk4LTAuMDE2LDAuNTk4LTAuMDIxYzAuMTk5LDAuMDA2LDAuMzk5LDAuMDIxLDAuNTk4LDAuMDIxdi0wLjA0MSAgICBDODAuNDgyLDExOC43MzYsOTguNjE2LDExNy4yMDEsMTAyLjA1MSwxMDEuOTE0eiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik02My44MTksMTI2LjQ0M2MtMC4xMzYsMC0wLjI3MS0wLjAwNi0wLjQwOC0wLjAxMmwtMC4yMTktMC4wMDhsLTAuMTYsMC4wMDggICAgYy0wLjI4MiwwLjAxMy0wLjU2OCwwLjAyNy0wLjgyNC0wLjA0N2MtMTYuMDI3LTAuNzM1LTM5LjktMS45OTItMzkuOS0yNC42MjdjMC0xMC42MzcsNy40OTUtMTUuNzAxLDE0Ljc0My0yMC41OTkgICAgYzIuMDItMS4zNjQsNC4xMDctMi43NzQsNS45OTUtNC4yODVjNi44NjEtNS45MDUsOS4xOTMtMTAuNzI5LDEwLjg5Ni0xNC4yNTNjMS43NC0zLjYwMSwzLjEyMy02LjQ2Miw4LjIyNi02LjkzMyAgICBjMC4zMS0wLjEwNCwwLjY2NC0wLjA3NSwwLjk4NC0wLjA2NGwwLjExNCwwLjAwNGwwLjAyNC0wLjAwNGMwLjMyNy0wLjAxMSwwLjY4OC0wLjAzOCwxLjAwMywwLjA2NSAgICBjNS4wODcsMC40NzcsNi40NjksMy4zMzUsOC4yMDcsNi45MzJjMS43MDMsMy41MjMsNC4wMzUsOC4zNDgsMTAuOTM4LDE0LjI4N2MxLjg0NywxLjQ3NywzLjkzNSwyLjg4Nyw1Ljk1NCw0LjI1MSAgICBjNy4yNDgsNC44OTcsMTQuNzQzLDkuOTYyLDE0Ljc0MywyMC41OTljMCwyMi42NC0yMy44ODYsMjMuODkyLTM5LjkxMywyNC42MjhDNjQuMDk1LDEyNi40MjMsNjMuOTU5LDEyNi40NDMsNjMuODE5LDEyNi40NDN6ICAgICBNNjMuMTkyLDEyMy40MjRsMC4zMjUsMC4wMWMwLjA3Ni0wLjAxNiwwLjE1My0wLjAyNiwwLjIzMy0wLjAyOWMyMC40NTQtMC45MzgsMzcuMzg1LTMuMjE0LDM3LjM4NS0yMS42NDYgICAgYzAtOS4wNDMtNi41Mi0xMy40NDgtMTMuNDIzLTE4LjExMmMtMi4wNjgtMS4zOTctNC4yMDctMi44NDMtNi4xOS00LjQzQzc0LjEwNiw3Mi44MzcsNzEuNTE1LDY3LjQ3NSw2OS44LDYzLjkyNyAgICBjLTEuNzE3LTMuNTUzLTIuNDI4LTUuMDIzLTYuMDgzLTUuMjc0Yy0wLjA3OC0wLjAwNS0wLjE1NC0wLjAxNy0wLjIyOS0wLjAzM2MtMC4wMzQsMC4wMDEtMC4wNjgsMC4wMDItMC4xMDIsMC4wMDNsLTAuMTIsMC4wMDQgICAgbC0wLjIxLTAuMDA0Yy0wLjAzNS0wLjAwMS0wLjA3LTAuMDAyLTAuMTA1LTAuMDAzYy0wLjA3MywwLjAxNy0wLjE0OCwwLjAyOC0wLjIyNSwwLjAzM2MtMy42NTUsMC4yNTEtNC4zNjYsMS43MjItNi4wODMsNS4yNzQgICAgYy0xLjcxNSwzLjU0OC00LjMwNyw4LjkxLTExLjY4MiwxNS4yNTVjLTIuMDI0LDEuNjIxLTQuMTYzLDMuMDY2LTYuMjMxLDQuNDY0Yy02LjkwMyw0LjY2NC0xMy40MjMsOS4wNjktMTMuNDIzLDE4LjExMiAgICBjMCwxOC40MzMsMTYuOTMxLDIwLjcwOSwzNy4zODUsMjEuNjQ2YzAuMDgxLDAuMDAzLDAuMTYsMC4wMTQsMC4yMzcsMC4wMjlMNjMuMTkyLDEyMy40MjR6Ii8+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik01OS4wNzcsNzYuMjEzYy0wLjU3MywwLTEuMTItMC4zMy0xLjM3LTAuODg3bC0xLjEwMi0yLjQ1N2MtMC4zMzktMC43NTYsMC0xLjY0NCwwLjc1Ni0xLjk4MiAgICAgYzAuNzU1LTAuMzM4LDEuNjQzLDAsMS45ODIsMC43NTZsMS4xMDIsMi40NTdjMC4zMzksMC43NTYsMCwxLjY0NC0wLjc1NiwxLjk4MkM1OS40OSw3Ni4xNzEsNTkuMjgyLDc2LjIxMyw1OS4wNzcsNzYuMjEzeiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik02Ny4zNjYsNzYuMjEzYy0wLjIwNSwwLTAuNDEzLTAuMDQyLTAuNjEyLTAuMTMxYy0wLjc1Ni0wLjMzOS0xLjA5NS0xLjIyNy0wLjc1Ni0xLjk4MiAgICAgbDEuMTAyLTIuNDU3YzAuMzQtMC43NTYsMS4yMjctMS4wOTMsMS45ODItMC43NTZjMC43NTYsMC4zMzksMS4wOTUsMS4yMjcsMC43NTYsMS45ODJsLTEuMTAyLDIuNDU3ICAgICBDNjguNDg2LDc1Ljg4Myw2Ny45MzksNzYuMjEzLDY3LjM2Niw3Ni4yMTN6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="/>
                            </div>
                            <div class="title-text">
                                <h1>{{ asset.name }}</h1>
                                <span class="company">{{ asset.product_name }}</span>
                                <span class="count_in_wallet"><strong>{{ totalOwned }}</strong> in your wallet</span>
                            </div>
                            <div class="company-logo-big">
                                <img src="https://i.imgur.com/BngHC98.png"/>
                            </div>
                        </div>

                        <div class="top-picks">
                            <div class="top-picks__title">
                                <h3>Top Picks</h3>
                            </div>
                            <div class="top-picks__list">
                                <div class="item" v-for="(item, index) in asset.top_picks_list" :key="index">
                                    <div class="item_thumb">
                                        <img :src="item.image"/>
                                    </div>
                                    <div class="item_info">
                                        <h5>{{ item.title }}</h5>
                                        <span class="price">$ {{ item.price }}</span>
                                        <a href="#3" class="btn btn-success float-right">
                                            <i class="fas fa-cart-plus"></i> Add to cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="offers">
                            <div class="offers__header">
                                <h3>Offers</h3>
                                <div class="offers__info">
                                    <span>
                                        <strong>9,483</strong>
                                        Offers available
                                    </span>
                                    <span>
                                        <strong>32</strong>
                                        Sold Today
                                    </span>
                                    <span>
                                        <strong>27</strong>
                                        Offers Today
                                    </span>
                                </div>
                                <div class="offers__pagination">
                                    <a href="#3">1</a>
                                    <a href="#3">2</a>
                                    <a href="#3" class="current">3</a>
                                    <a href="#3">4</a>
                                    <a href="#3">5</a>
                                    <a href="#3">6</a>
                                </div>
                                <div class="offers__nav">
                                    <a href="#3" class="nav-prev">
                                        <i class="fas fa-arrow-left"></i>
                                    </a>
                                    <a href="#3" class="nav-next">
                                        <i class="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="offers__list">
                                <div v-for="(item, index) in asset.offers_list"
                                     :key="index"
                                     class="list-item">
                                    <div class="item-name-img">
                                        <img :src="item.image"/>
                                        <h4>{{ item.name }}</h4>
                                    </div>
                                    <div class="item-company text-center">
                                        {{ item.company_name }}
                                    </div>
                                    <div class="item-info">
                                        <span class="user_name">
                                            {{ item.user_name }}
                                        </span>
                                        <span class="price">
                                            $ {{ item.price }}
                                        </span>
                                        <a href="#3" class="btn btn-success float-right">
                                            <i class="fas fa-cart-plus"></i> Add to cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="metadata">

                            <div class="metadata__title">
                                <h3>Metadata</h3>
                            </div>

                            <div class="metadata__table">
                                <div class="item-row"
                                     v-for="(item, index) in asset.metadata"
                                     :key="index">
                                    <div class="item-label">
                                        <i class="fas fa-file"></i>
                                        {{ item.label }}
                                    </div>
                                    <div class="item-description">
                                        {{ item.text }}
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="my-assets">
                            <div class="my-assets__title">
                                <h3>Yours</h3>
                            </div>
                            <div class="my-assets__list">
                                <div class="item"
                                     v-for="(item, index) in my_assets"
                                     :key="index">
                                    <a href="#3" data-toggle="modal" data-target="#assetModal">
                                        <i class="fas fa-external-link-alt"></i>
                                    </a>
                                    <div class="item_thumb">
                                        <img :src="item.image"/>
                                    </div>
                                    <div class="item_info">
                                        <h5>{{ item.name }}</h5>
                                        <span class="price">
                                            $ {{ item.price }}
                                        </span>
                                        <div class="switcher">
                                            <span class="label">Accept offers</span>
                                            <label class="switch switch-sm">
                                                <input type="checkbox" v-model="item.offers_accept" name="switch_8" checked="" value="0">
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal fade asset-modal" id="assetModal" tabindex="-1" role="dialog" aria-labelledby="assetModal" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <a href="#3" class="asset-link">
                                            <i class="fas fa-link"></i>
                                        </a>
                                        <div class="asset-info d-flex justify-content-between align-items-stretch">
                                            <div class="thumb">
                                                <img src="http://via.placeholder.com/150x150"/>
                                            </div>
                                            <div class="info">
                                                <div class="w-100 align-self-start">
                                                    <h3>Sword of Pain</h3>
                                                    <h4>Diablo III</h4>
                                                </div>
                                                <div class="w-100 align-self-end">
                                                    <h4 class="mb-2">1512 GOV</h4>
                                                    <p>Based on 7461 other transactions</p>
                                                    <span class="mr-2">Lowest: 32 GOV</span>
                                                    <span>Highest: 7850 GOV</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="action text-right my-4">
                                            <a href="#3" class="btn btn-sm btn-danger float-left">
                                                <i class="fas fa-trash-alt"></i>
                                            </a>
                                            <a href="#3" class="btn btn-sm btn-info">
                                                Send
                                                <i class="fas fa-share"></i>
                                            </a>
                                            <a href="#3" class="btn btn-sm btn-success ml-2">
                                                Use
                                                <i class="fas fa-chevron-down"></i>
                                            </a>
                                        </div>
                                        <div class="offer-switch d-flex w-100 align-items-center mb-4">
                                            <h3 class="my-0">
                                                Accept offers for this item?
                                            </h3>
                                            <label class="switch switch-sm py-0 my-0 ml-4">
                                                <input type="checkbox" name="switch_modal" checked="" value="0">
                                                <span></span>
                                            </label>
                                        </div>
                                        <div class="threshold mt-1 mb-4">
                                            <h3>
                                                Price Trechold
                                            </h3>
                                            <input type="range" class="form-control-range" id="priceTrechold">
                                            <div class="d-flex justify-content-between">
                                                <div class="text-left">
                                                    <div>0%</div>
                                                    <div>0.00</div>
                                                </div>
                                                <div class="text-center">
                                                    <div>50%</div>
                                                    <div>250</div>
                                                </div>
                                                <div class="text-right">
                                                    <div>100%</div>
                                                    <div>500</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="game-metadata w-100">
                                            <div class="metadata-line">
                                                <div>
                                                    Type
                                                </div>
                                                <div>
                                                    Legendary Two Handed Sword
                                                </div>
                                            </div>
                                            <div class="metadata-line">
                                                <div>
                                                    Damage per Second
                                                </div>
                                                <div>
                                                    2.905.8
                                                </div>
                                            </div>
                                            <div class="metadata-line">
                                                <div>
                                                    Damage
                                                </div>
                                                <div>
                                                    2193-2880
                                                </div>
                                            </div>
                                            <div class="metadata-line">
                                                <div>
                                                    Attacks per Second
                                                </div>
                                                <div>
                                                    1.15
                                                </div>
                                            </div>
                                            <div class="metadata-line">
                                                <div>
                                                    Primary
                                                </div>
                                                <div>
                                                    +1379-1679 Damage, +9% Damage, +1121 Strenght,
                                                    Reduced Cooldown of all skills by 10%
                                                </div>
                                            </div>
                                            <div class="metadata-line">
                                                <div>
                                                    Secondary
                                                </div>
                                                <div>
                                                    Monster kills grant +151 experience, all condemned
                                                    enemies also trigger condemn's explosion
                                                </div>
                                            </div>
                                            <div class="metadata-line">
                                                <div>
                                                    Required Level
                                                </div>
                                                <div>
                                                    70
                                                </div>
                                            </div>
                                            <div class="metadata-line">
                                                <div>
                                                    Durability
                                                </div>
                                                <div>
                                                    40/41
                                                </div>
                                            </div>
                                        </div>
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
    export default {
        props: ['id'],
        components: {
            'c-layout': () => import('@/ui/layouts/default')
        },
        data() {
            return {
                totalOwned: 3,
                my_assets: [
                    {
                        image: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxMjYuNDQzIDEyNi40NDMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyNi40NDMgMTI2LjQ0MzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNNjMuMjIyLDIzLjMzNmMtMS42NTcsMC0zLTEuMzQzLTMtM1YzYzAtMS42NTcsMS4zNDMtMywzLTNzMywxLjM0MywzLDN2MTcuMzM2ICAgICBDNjYuMjIyLDIxLjk5Myw2NC44NzksMjMuMzM2LDYzLjIyMiwyMy4zMzZ6Ii8+CgkJPC9nPgoJCTxnPgoJCQk8Zz4KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNNjAuMDQ0LDI2LjMwMWMtMC45NjksMC0xLjkxOS0wLjQ2OC0yLjQ5Ny0xLjMzM2wtOS42MzYtMTQuNDE2ICAgICAgYy0wLjkyMS0xLjM3Ny0wLjU1MS0zLjI0LDAuODI3LTQuMTYxYzEuMzc3LTAuOTIyLDMuMjQxLTAuNTUsNC4xNjEsMC44MjdsOS42MzYsMTQuNDE2YzAuOTIxLDEuMzc3LDAuNTUxLDMuMjQtMC44MjcsNC4xNjEgICAgICBDNjEuMTk2LDI2LjEzOCw2MC42MTcsMjYuMzAxLDYwLjA0NCwyNi4zMDF6Ii8+CgkJCTwvZz4KCQkJPGc+CgkJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTY2LjM5OSwyNi4zMDFjLTAuNTczLDAtMS4xNTItMC4xNjMtMS42NjQtMC41MDZjLTEuMzc4LTAuOTIxLTEuNzQ4LTIuNzg0LTAuODI3LTQuMTYxICAgICAgbDkuNjM2LTE0LjQxNmMwLjkyLTEuMzc3LDIuNzg0LTEuNzQ5LDQuMTYxLTAuODI3YzEuMzc4LDAuOTIxLDEuNzQ4LDIuNzg0LDAuODI3LDQuMTYxbC05LjYzNiwxNC40MTYgICAgICBDNjguMzE4LDI1LjgzMyw2Ny4zNjgsMjYuMzAxLDY2LjM5OSwyNi4zMDF6Ii8+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZGODAwOyIgZD0iTTExMi40MzEsNjkuNTFjMCwyMC42NzYtMjIuMDMyLDM3LjQ0MS00OS4yMDksMzcuNDQxYy0yNy4xNzgsMC00OS4yMDktMTYuNzY2LTQ5LjIwOS0zNy40NDEgICAgYzAtMjAuNjgsMjIuMDMxLTQ1LjQ1OSw0OS4yMDktNDUuNDU5QzkwLjM5OCwyNC4wNTEsMTEyLjQzMSw0OC44MywxMTIuNDMxLDY5LjUxeiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDQwMDsiIGQ9Ik0xMTIuNDMxLDY5LjUxYzAsMjAuNjc2LTIyLjAzMiwzNy40NDEtNDkuMjA5LDM3LjQ0MWMtMjcuMTc4LDAtNDkuMjA5LTE2Ljc2Ni00OS4yMDktMzcuNDQxICAgIGMwLTIwLjY4LDIyLjAzMS0zNC45MjgsNDkuMjA5LTM0LjkyOEM5MC4zOTgsMzQuNTgyLDExMi40MzEsNDguODMsMTEyLjQzMSw2OS41MXoiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkY4MDA7IiBkPSJNNzMuNzAxLDU4LjM2N2MwLDEuMzk1LTQuNjkxLDEuNjQ1LTEwLjQ3OSwxLjY0NXMtMTAuNDc5LTAuMjUtMTAuNDc5LTEuNjQ1ICAgIGMwLTEuMzkzLDQuNjkxLTUuMDM1LDEwLjQ3OS01LjAzNVM3My43MDEsNTYuOTc1LDczLjcwMSw1OC4zNjd6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZCMDAwOyIgZD0iTTExMi40MzEsNjkuNTFjMCwyMC42NzYtMjIuMDMyLDM3LjQ0MS00OS4yMDksMzcuNDQxYy0yNy4xNzgsMC00OS4yMDktMTYuNzY2LTQ5LjIwOS0zNy40NDEgICAgYzAtMjAuNjgyLDYuMjYxLDE4LjM0LDQ5LjIwOSwxOC4zNFMxMTIuNDMxLDQ4LjgyOCwxMTIuNDMxLDY5LjUxeiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik02My4yMjIsMTA4LjQ1MWMtMjcuOTYxLDAtNTAuNzA5LTE3LjQ2OS01MC43MDktMzguOTQxYzAtMjEuMjcsMjIuNjE5LTQ2Ljk1OSw1MC43MDktNDYuOTU5ICAgIHM1MC43MDksMjUuNjg5LDUwLjcwOSw0Ni45NTlDMTEzLjkzMSw5MC45ODIsOTEuMTgzLDEwOC40NTEsNjMuMjIyLDEwOC40NTF6IE02My4yMjIsMjUuNTUxICAgIGMtMjYuNDI4LDAtNDcuNzA5LDI0LjA0OC00Ny43MDksNDMuOTU5YzAsMTkuODE4LDIxLjQwMiwzNS45NDEsNDcuNzA5LDM1Ljk0MXM0Ny43MDktMTYuMTIzLDQ3LjcwOS0zNS45NDEgICAgQzExMC45MzEsNDkuNTk5LDg5LjY0OSwyNS41NTEsNjMuMjIyLDI1LjU1MXoiLz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8Zz4KCQkJCTxnPgoJCQkJCTxnPgoJCQkJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTQ3LjA2LDYwLjgyMmMtMC44MjgsMC0xLjUtMC42NzItMS41LTEuNWMwLTAuODctMi40ODctMi40NjktNi41NTItMi40NjkgICAgICAgIGMtNC4wNjMsMC02LjU1MSwxLjU5OS02LjU1MSwyLjQ2OWMwLDAuODI4LTAuNjcyLDEuNS0xLjUsMS41cy0xLjUtMC42NzItMS41LTEuNWMwLTMuMTE4LDQuMTA1LTUuNDY5LDkuNTUxLTUuNDY5ICAgICAgICBzOS41NTIsMi4zNTEsOS41NTIsNS40NjlDNDguNTYsNjAuMTUsNDcuODg4LDYwLjgyMiw0Ny4wNiw2MC44MjJ6Ii8+CgkJCQkJPC9nPgoJCQkJPC9nPgoJCQk8L2c+CgkJCTxnPgoJCQkJPGc+CgkJCQkJPGc+CgkJCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNOTUuNDg2LDYwLjgyMmMtMC44MjgsMC0xLjUtMC42NzItMS41LTEuNWMwLTAuODctMi40ODctMi40NjktNi41NTEtMi40NjkgICAgICAgIGMtNC4wNjQsMC02LjU1MiwxLjU5OS02LjU1MiwyLjQ2OWMwLDAuODI4LTAuNjcyLDEuNS0xLjUsMS41cy0xLjUtMC42NzItMS41LTEuNWMwLTMuMTE4LDQuMTA2LTUuNDY5LDkuNTUyLTUuNDY5ICAgICAgICBzOS41NTEsMi4zNTEsOS41NTEsNS40NjlDOTYuOTg2LDYwLjE1LDk2LjMxNCw2MC44MjIsOTUuNDg2LDYwLjgyMnoiLz4KCQkJCQk8L2c+CgkJCQk8L2c+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZGNEM3OyIgZD0iTTEwMi42MzYsMTAxLjc1OGMwLTEyLjY5Ny0xMS41NzMtMTYuODMtMjAuMTc2LTIzLjcxM2MtMTQuMzkzLTEyLjM4My05LjY2My0yMC4yNzMtMTguNjQxLTIwLjg4OSAgICB2LTAuMDQzYy0wLjIwOSwwLTAuNDAxLDAuMDA4LTAuNTk4LDAuMDE0Yy0wLjE5Ni0wLjAwNi0wLjM4OS0wLjAxNC0wLjU5OC0wLjAxNHYwLjA0M2MtOC45NzgsMC42MTUtNC4yNDgsOC41MDYtMTguNjQxLDIwLjg4OSAgICBjLTguNjAzLDYuODgzLTIwLjE3NiwxMS4wMTYtMjAuMTc2LDIzLjcxM2MwLDIwLjUwNiwyMC4zMTksMjIuMjk3LDM4LjgxNiwyMy4xNDV2MC4wNDFjMC4xOTgsMCwwLjM5OC0wLjAxNiwwLjU5OC0wLjAyICAgIGMwLjE5OSwwLjAwNCwwLjM5OSwwLjAyLDAuNTk4LDAuMDJ2LTAuMDQxQzgyLjMxNiwxMjQuMDU1LDEwMi42MzYsMTIyLjI2NCwxMDIuNjM2LDEwMS43NTh6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRTBENUE0OyIgZD0iTTEwMi4wNTEsMTAxLjkxNEM5OS42MDQsOTAuMjA3LDg5LjkxOCw4OS40MTIsODIuNDYsODMuNDQ1ICAgIGMtMTQuMzkzLTEyLjM4My05LjY2My0yMC4yNzItMTguNjQxLTIwLjg4OXYtMC4wNDNjLTAuMjA5LDAtMC40MDEsMC4wMS0wLjU5OCwwLjAxNmMtMC4xOTYtMC4wMDYtMC4zODktMC4wMTYtMC41OTgtMC4wMTZ2MC4wNDMgICAgYy04Ljk3OCwwLjYxNy00LjI0OCw4LjUwNi0xOC42NDEsMjAuODg5Yy03LjQ1OCw1Ljk2Ny0xNy4xNDQsNi43NjItMTkuNTkxLDE4LjQ2OWMzLjQzNSwxNS4yODcsMjEuNTY4LDE2LjgyMiwzOC4yMzEsMTcuNTg4ICAgIHYwLjA0MWMwLjE5OCwwLDAuMzk4LTAuMDE2LDAuNTk4LTAuMDIxYzAuMTk5LDAuMDA2LDAuMzk5LDAuMDIxLDAuNTk4LDAuMDIxdi0wLjA0MSAgICBDODAuNDgyLDExOC43MzYsOTguNjE2LDExNy4yMDEsMTAyLjA1MSwxMDEuOTE0eiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik02My44MTksMTI2LjQ0M2MtMC4xMzYsMC0wLjI3MS0wLjAwNi0wLjQwOC0wLjAxMmwtMC4yMTktMC4wMDhsLTAuMTYsMC4wMDggICAgYy0wLjI4MiwwLjAxMy0wLjU2OCwwLjAyNy0wLjgyNC0wLjA0N2MtMTYuMDI3LTAuNzM1LTM5LjktMS45OTItMzkuOS0yNC42MjdjMC0xMC42MzcsNy40OTUtMTUuNzAxLDE0Ljc0My0yMC41OTkgICAgYzIuMDItMS4zNjQsNC4xMDctMi43NzQsNS45OTUtNC4yODVjNi44NjEtNS45MDUsOS4xOTMtMTAuNzI5LDEwLjg5Ni0xNC4yNTNjMS43NC0zLjYwMSwzLjEyMy02LjQ2Miw4LjIyNi02LjkzMyAgICBjMC4zMS0wLjEwNCwwLjY2NC0wLjA3NSwwLjk4NC0wLjA2NGwwLjExNCwwLjAwNGwwLjAyNC0wLjAwNGMwLjMyNy0wLjAxMSwwLjY4OC0wLjAzOCwxLjAwMywwLjA2NSAgICBjNS4wODcsMC40NzcsNi40NjksMy4zMzUsOC4yMDcsNi45MzJjMS43MDMsMy41MjMsNC4wMzUsOC4zNDgsMTAuOTM4LDE0LjI4N2MxLjg0NywxLjQ3NywzLjkzNSwyLjg4Nyw1Ljk1NCw0LjI1MSAgICBjNy4yNDgsNC44OTcsMTQuNzQzLDkuOTYyLDE0Ljc0MywyMC41OTljMCwyMi42NC0yMy44ODYsMjMuODkyLTM5LjkxMywyNC42MjhDNjQuMDk1LDEyNi40MjMsNjMuOTU5LDEyNi40NDMsNjMuODE5LDEyNi40NDN6ICAgICBNNjMuMTkyLDEyMy40MjRsMC4zMjUsMC4wMWMwLjA3Ni0wLjAxNiwwLjE1My0wLjAyNiwwLjIzMy0wLjAyOWMyMC40NTQtMC45MzgsMzcuMzg1LTMuMjE0LDM3LjM4NS0yMS42NDYgICAgYzAtOS4wNDMtNi41Mi0xMy40NDgtMTMuNDIzLTE4LjExMmMtMi4wNjgtMS4zOTctNC4yMDctMi44NDMtNi4xOS00LjQzQzc0LjEwNiw3Mi44MzcsNzEuNTE1LDY3LjQ3NSw2OS44LDYzLjkyNyAgICBjLTEuNzE3LTMuNTUzLTIuNDI4LTUuMDIzLTYuMDgzLTUuMjc0Yy0wLjA3OC0wLjAwNS0wLjE1NC0wLjAxNy0wLjIyOS0wLjAzM2MtMC4wMzQsMC4wMDEtMC4wNjgsMC4wMDItMC4xMDIsMC4wMDNsLTAuMTIsMC4wMDQgICAgbC0wLjIxLTAuMDA0Yy0wLjAzNS0wLjAwMS0wLjA3LTAuMDAyLTAuMTA1LTAuMDAzYy0wLjA3MywwLjAxNy0wLjE0OCwwLjAyOC0wLjIyNSwwLjAzM2MtMy42NTUsMC4yNTEtNC4zNjYsMS43MjItNi4wODMsNS4yNzQgICAgYy0xLjcxNSwzLjU0OC00LjMwNyw4LjkxLTExLjY4MiwxNS4yNTVjLTIuMDI0LDEuNjIxLTQuMTYzLDMuMDY2LTYuMjMxLDQuNDY0Yy02LjkwMyw0LjY2NC0xMy40MjMsOS4wNjktMTMuNDIzLDE4LjExMiAgICBjMCwxOC40MzMsMTYuOTMxLDIwLjcwOSwzNy4zODUsMjEuNjQ2YzAuMDgxLDAuMDAzLDAuMTYsMC4wMTQsMC4yMzcsMC4wMjlMNjMuMTkyLDEyMy40MjR6Ii8+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik01OS4wNzcsNzYuMjEzYy0wLjU3MywwLTEuMTItMC4zMy0xLjM3LTAuODg3bC0xLjEwMi0yLjQ1N2MtMC4zMzktMC43NTYsMC0xLjY0NCwwLjc1Ni0xLjk4MiAgICAgYzAuNzU1LTAuMzM4LDEuNjQzLDAsMS45ODIsMC43NTZsMS4xMDIsMi40NTdjMC4zMzksMC43NTYsMCwxLjY0NC0wLjc1NiwxLjk4MkM1OS40OSw3Ni4xNzEsNTkuMjgyLDc2LjIxMyw1OS4wNzcsNzYuMjEzeiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik02Ny4zNjYsNzYuMjEzYy0wLjIwNSwwLTAuNDEzLTAuMDQyLTAuNjEyLTAuMTMxYy0wLjc1Ni0wLjMzOS0xLjA5NS0xLjIyNy0wLjc1Ni0xLjk4MiAgICAgbDEuMTAyLTIuNDU3YzAuMzQtMC43NTYsMS4yMjctMS4wOTMsMS45ODItMC43NTZjMC43NTYsMC4zMzksMS4wOTUsMS4yMjcsMC43NTYsMS45ODJsLTEuMTAyLDIuNDU3ICAgICBDNjguNDg2LDc1Ljg4Myw2Ny45MzksNzYuMjEzLDY3LjM2Niw3Ni4yMTN6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=',
                        name: 'Some short title',
                        price: '0.99',
                        offers_accept: true
                    },
                    {
                        image: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxMjYuNDQzIDEyNi40NDMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyNi40NDMgMTI2LjQ0MzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNNjMuMjIyLDIzLjMzNmMtMS42NTcsMC0zLTEuMzQzLTMtM1YzYzAtMS42NTcsMS4zNDMtMywzLTNzMywxLjM0MywzLDN2MTcuMzM2ICAgICBDNjYuMjIyLDIxLjk5Myw2NC44NzksMjMuMzM2LDYzLjIyMiwyMy4zMzZ6Ii8+CgkJPC9nPgoJCTxnPgoJCQk8Zz4KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNNjAuMDQ0LDI2LjMwMWMtMC45NjksMC0xLjkxOS0wLjQ2OC0yLjQ5Ny0xLjMzM2wtOS42MzYtMTQuNDE2ICAgICAgYy0wLjkyMS0xLjM3Ny0wLjU1MS0zLjI0LDAuODI3LTQuMTYxYzEuMzc3LTAuOTIyLDMuMjQxLTAuNTUsNC4xNjEsMC44MjdsOS42MzYsMTQuNDE2YzAuOTIxLDEuMzc3LDAuNTUxLDMuMjQtMC44MjcsNC4xNjEgICAgICBDNjEuMTk2LDI2LjEzOCw2MC42MTcsMjYuMzAxLDYwLjA0NCwyNi4zMDF6Ii8+CgkJCTwvZz4KCQkJPGc+CgkJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTY2LjM5OSwyNi4zMDFjLTAuNTczLDAtMS4xNTItMC4xNjMtMS42NjQtMC41MDZjLTEuMzc4LTAuOTIxLTEuNzQ4LTIuNzg0LTAuODI3LTQuMTYxICAgICAgbDkuNjM2LTE0LjQxNmMwLjkyLTEuMzc3LDIuNzg0LTEuNzQ5LDQuMTYxLTAuODI3YzEuMzc4LDAuOTIxLDEuNzQ4LDIuNzg0LDAuODI3LDQuMTYxbC05LjYzNiwxNC40MTYgICAgICBDNjguMzE4LDI1LjgzMyw2Ny4zNjgsMjYuMzAxLDY2LjM5OSwyNi4zMDF6Ii8+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZGODAwOyIgZD0iTTExMi40MzEsNjkuNTFjMCwyMC42NzYtMjIuMDMyLDM3LjQ0MS00OS4yMDksMzcuNDQxYy0yNy4xNzgsMC00OS4yMDktMTYuNzY2LTQ5LjIwOS0zNy40NDEgICAgYzAtMjAuNjgsMjIuMDMxLTQ1LjQ1OSw0OS4yMDktNDUuNDU5QzkwLjM5OCwyNC4wNTEsMTEyLjQzMSw0OC44MywxMTIuNDMxLDY5LjUxeiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDQwMDsiIGQ9Ik0xMTIuNDMxLDY5LjUxYzAsMjAuNjc2LTIyLjAzMiwzNy40NDEtNDkuMjA5LDM3LjQ0MWMtMjcuMTc4LDAtNDkuMjA5LTE2Ljc2Ni00OS4yMDktMzcuNDQxICAgIGMwLTIwLjY4LDIyLjAzMS0zNC45MjgsNDkuMjA5LTM0LjkyOEM5MC4zOTgsMzQuNTgyLDExMi40MzEsNDguODMsMTEyLjQzMSw2OS41MXoiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkY4MDA7IiBkPSJNNzMuNzAxLDU4LjM2N2MwLDEuMzk1LTQuNjkxLDEuNjQ1LTEwLjQ3OSwxLjY0NXMtMTAuNDc5LTAuMjUtMTAuNDc5LTEuNjQ1ICAgIGMwLTEuMzkzLDQuNjkxLTUuMDM1LDEwLjQ3OS01LjAzNVM3My43MDEsNTYuOTc1LDczLjcwMSw1OC4zNjd6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZCMDAwOyIgZD0iTTExMi40MzEsNjkuNTFjMCwyMC42NzYtMjIuMDMyLDM3LjQ0MS00OS4yMDksMzcuNDQxYy0yNy4xNzgsMC00OS4yMDktMTYuNzY2LTQ5LjIwOS0zNy40NDEgICAgYzAtMjAuNjgyLDYuMjYxLDE4LjM0LDQ5LjIwOSwxOC4zNFMxMTIuNDMxLDQ4LjgyOCwxMTIuNDMxLDY5LjUxeiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik02My4yMjIsMTA4LjQ1MWMtMjcuOTYxLDAtNTAuNzA5LTE3LjQ2OS01MC43MDktMzguOTQxYzAtMjEuMjcsMjIuNjE5LTQ2Ljk1OSw1MC43MDktNDYuOTU5ICAgIHM1MC43MDksMjUuNjg5LDUwLjcwOSw0Ni45NTlDMTEzLjkzMSw5MC45ODIsOTEuMTgzLDEwOC40NTEsNjMuMjIyLDEwOC40NTF6IE02My4yMjIsMjUuNTUxICAgIGMtMjYuNDI4LDAtNDcuNzA5LDI0LjA0OC00Ny43MDksNDMuOTU5YzAsMTkuODE4LDIxLjQwMiwzNS45NDEsNDcuNzA5LDM1Ljk0MXM0Ny43MDktMTYuMTIzLDQ3LjcwOS0zNS45NDEgICAgQzExMC45MzEsNDkuNTk5LDg5LjY0OSwyNS41NTEsNjMuMjIyLDI1LjU1MXoiLz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8Zz4KCQkJCTxnPgoJCQkJCTxnPgoJCQkJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTQ3LjA2LDYwLjgyMmMtMC44MjgsMC0xLjUtMC42NzItMS41LTEuNWMwLTAuODctMi40ODctMi40NjktNi41NTItMi40NjkgICAgICAgIGMtNC4wNjMsMC02LjU1MSwxLjU5OS02LjU1MSwyLjQ2OWMwLDAuODI4LTAuNjcyLDEuNS0xLjUsMS41cy0xLjUtMC42NzItMS41LTEuNWMwLTMuMTE4LDQuMTA1LTUuNDY5LDkuNTUxLTUuNDY5ICAgICAgICBzOS41NTIsMi4zNTEsOS41NTIsNS40NjlDNDguNTYsNjAuMTUsNDcuODg4LDYwLjgyMiw0Ny4wNiw2MC44MjJ6Ii8+CgkJCQkJPC9nPgoJCQkJPC9nPgoJCQk8L2c+CgkJCTxnPgoJCQkJPGc+CgkJCQkJPGc+CgkJCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNOTUuNDg2LDYwLjgyMmMtMC44MjgsMC0xLjUtMC42NzItMS41LTEuNWMwLTAuODctMi40ODctMi40NjktNi41NTEtMi40NjkgICAgICAgIGMtNC4wNjQsMC02LjU1MiwxLjU5OS02LjU1MiwyLjQ2OWMwLDAuODI4LTAuNjcyLDEuNS0xLjUsMS41cy0xLjUtMC42NzItMS41LTEuNWMwLTMuMTE4LDQuMTA2LTUuNDY5LDkuNTUyLTUuNDY5ICAgICAgICBzOS41NTEsMi4zNTEsOS41NTEsNS40NjlDOTYuOTg2LDYwLjE1LDk2LjMxNCw2MC44MjIsOTUuNDg2LDYwLjgyMnoiLz4KCQkJCQk8L2c+CgkJCQk8L2c+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZGNEM3OyIgZD0iTTEwMi42MzYsMTAxLjc1OGMwLTEyLjY5Ny0xMS41NzMtMTYuODMtMjAuMTc2LTIzLjcxM2MtMTQuMzkzLTEyLjM4My05LjY2My0yMC4yNzMtMTguNjQxLTIwLjg4OSAgICB2LTAuMDQzYy0wLjIwOSwwLTAuNDAxLDAuMDA4LTAuNTk4LDAuMDE0Yy0wLjE5Ni0wLjAwNi0wLjM4OS0wLjAxNC0wLjU5OC0wLjAxNHYwLjA0M2MtOC45NzgsMC42MTUtNC4yNDgsOC41MDYtMTguNjQxLDIwLjg4OSAgICBjLTguNjAzLDYuODgzLTIwLjE3NiwxMS4wMTYtMjAuMTc2LDIzLjcxM2MwLDIwLjUwNiwyMC4zMTksMjIuMjk3LDM4LjgxNiwyMy4xNDV2MC4wNDFjMC4xOTgsMCwwLjM5OC0wLjAxNiwwLjU5OC0wLjAyICAgIGMwLjE5OSwwLjAwNCwwLjM5OSwwLjAyLDAuNTk4LDAuMDJ2LTAuMDQxQzgyLjMxNiwxMjQuMDU1LDEwMi42MzYsMTIyLjI2NCwxMDIuNjM2LDEwMS43NTh6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRTBENUE0OyIgZD0iTTEwMi4wNTEsMTAxLjkxNEM5OS42MDQsOTAuMjA3LDg5LjkxOCw4OS40MTIsODIuNDYsODMuNDQ1ICAgIGMtMTQuMzkzLTEyLjM4My05LjY2My0yMC4yNzItMTguNjQxLTIwLjg4OXYtMC4wNDNjLTAuMjA5LDAtMC40MDEsMC4wMS0wLjU5OCwwLjAxNmMtMC4xOTYtMC4wMDYtMC4zODktMC4wMTYtMC41OTgtMC4wMTZ2MC4wNDMgICAgYy04Ljk3OCwwLjYxNy00LjI0OCw4LjUwNi0xOC42NDEsMjAuODg5Yy03LjQ1OCw1Ljk2Ny0xNy4xNDQsNi43NjItMTkuNTkxLDE4LjQ2OWMzLjQzNSwxNS4yODcsMjEuNTY4LDE2LjgyMiwzOC4yMzEsMTcuNTg4ICAgIHYwLjA0MWMwLjE5OCwwLDAuMzk4LTAuMDE2LDAuNTk4LTAuMDIxYzAuMTk5LDAuMDA2LDAuMzk5LDAuMDIxLDAuNTk4LDAuMDIxdi0wLjA0MSAgICBDODAuNDgyLDExOC43MzYsOTguNjE2LDExNy4yMDEsMTAyLjA1MSwxMDEuOTE0eiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik02My44MTksMTI2LjQ0M2MtMC4xMzYsMC0wLjI3MS0wLjAwNi0wLjQwOC0wLjAxMmwtMC4yMTktMC4wMDhsLTAuMTYsMC4wMDggICAgYy0wLjI4MiwwLjAxMy0wLjU2OCwwLjAyNy0wLjgyNC0wLjA0N2MtMTYuMDI3LTAuNzM1LTM5LjktMS45OTItMzkuOS0yNC42MjdjMC0xMC42MzcsNy40OTUtMTUuNzAxLDE0Ljc0My0yMC41OTkgICAgYzIuMDItMS4zNjQsNC4xMDctMi43NzQsNS45OTUtNC4yODVjNi44NjEtNS45MDUsOS4xOTMtMTAuNzI5LDEwLjg5Ni0xNC4yNTNjMS43NC0zLjYwMSwzLjEyMy02LjQ2Miw4LjIyNi02LjkzMyAgICBjMC4zMS0wLjEwNCwwLjY2NC0wLjA3NSwwLjk4NC0wLjA2NGwwLjExNCwwLjAwNGwwLjAyNC0wLjAwNGMwLjMyNy0wLjAxMSwwLjY4OC0wLjAzOCwxLjAwMywwLjA2NSAgICBjNS4wODcsMC40NzcsNi40NjksMy4zMzUsOC4yMDcsNi45MzJjMS43MDMsMy41MjMsNC4wMzUsOC4zNDgsMTAuOTM4LDE0LjI4N2MxLjg0NywxLjQ3NywzLjkzNSwyLjg4Nyw1Ljk1NCw0LjI1MSAgICBjNy4yNDgsNC44OTcsMTQuNzQzLDkuOTYyLDE0Ljc0MywyMC41OTljMCwyMi42NC0yMy44ODYsMjMuODkyLTM5LjkxMywyNC42MjhDNjQuMDk1LDEyNi40MjMsNjMuOTU5LDEyNi40NDMsNjMuODE5LDEyNi40NDN6ICAgICBNNjMuMTkyLDEyMy40MjRsMC4zMjUsMC4wMWMwLjA3Ni0wLjAxNiwwLjE1My0wLjAyNiwwLjIzMy0wLjAyOWMyMC40NTQtMC45MzgsMzcuMzg1LTMuMjE0LDM3LjM4NS0yMS42NDYgICAgYzAtOS4wNDMtNi41Mi0xMy40NDgtMTMuNDIzLTE4LjExMmMtMi4wNjgtMS4zOTctNC4yMDctMi44NDMtNi4xOS00LjQzQzc0LjEwNiw3Mi44MzcsNzEuNTE1LDY3LjQ3NSw2OS44LDYzLjkyNyAgICBjLTEuNzE3LTMuNTUzLTIuNDI4LTUuMDIzLTYuMDgzLTUuMjc0Yy0wLjA3OC0wLjAwNS0wLjE1NC0wLjAxNy0wLjIyOS0wLjAzM2MtMC4wMzQsMC4wMDEtMC4wNjgsMC4wMDItMC4xMDIsMC4wMDNsLTAuMTIsMC4wMDQgICAgbC0wLjIxLTAuMDA0Yy0wLjAzNS0wLjAwMS0wLjA3LTAuMDAyLTAuMTA1LTAuMDAzYy0wLjA3MywwLjAxNy0wLjE0OCwwLjAyOC0wLjIyNSwwLjAzM2MtMy42NTUsMC4yNTEtNC4zNjYsMS43MjItNi4wODMsNS4yNzQgICAgYy0xLjcxNSwzLjU0OC00LjMwNyw4LjkxLTExLjY4MiwxNS4yNTVjLTIuMDI0LDEuNjIxLTQuMTYzLDMuMDY2LTYuMjMxLDQuNDY0Yy02LjkwMyw0LjY2NC0xMy40MjMsOS4wNjktMTMuNDIzLDE4LjExMiAgICBjMCwxOC40MzMsMTYuOTMxLDIwLjcwOSwzNy4zODUsMjEuNjQ2YzAuMDgxLDAuMDAzLDAuMTYsMC4wMTQsMC4yMzcsMC4wMjlMNjMuMTkyLDEyMy40MjR6Ii8+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik01OS4wNzcsNzYuMjEzYy0wLjU3MywwLTEuMTItMC4zMy0xLjM3LTAuODg3bC0xLjEwMi0yLjQ1N2MtMC4zMzktMC43NTYsMC0xLjY0NCwwLjc1Ni0xLjk4MiAgICAgYzAuNzU1LTAuMzM4LDEuNjQzLDAsMS45ODIsMC43NTZsMS4xMDIsMi40NTdjMC4zMzksMC43NTYsMCwxLjY0NC0wLjc1NiwxLjk4MkM1OS40OSw3Ni4xNzEsNTkuMjgyLDc2LjIxMyw1OS4wNzcsNzYuMjEzeiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik02Ny4zNjYsNzYuMjEzYy0wLjIwNSwwLTAuNDEzLTAuMDQyLTAuNjEyLTAuMTMxYy0wLjc1Ni0wLjMzOS0xLjA5NS0xLjIyNy0wLjc1Ni0xLjk4MiAgICAgbDEuMTAyLTIuNDU3YzAuMzQtMC43NTYsMS4yMjctMS4wOTMsMS45ODItMC43NTZjMC43NTYsMC4zMzksMS4wOTUsMS4yMjcsMC43NTYsMS45ODJsLTEuMTAyLDIuNDU3ICAgICBDNjguNDg2LDc1Ljg4Myw2Ny45MzksNzYuMjEzLDY3LjM2Niw3Ni4yMTN6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=',
                        name: 'Some title',
                        price: '3.99',
                        offers_accept: true
                    },
                    {
                        image: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxMjYuNDQzIDEyNi40NDMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyNi40NDMgMTI2LjQ0MzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNNjMuMjIyLDIzLjMzNmMtMS42NTcsMC0zLTEuMzQzLTMtM1YzYzAtMS42NTcsMS4zNDMtMywzLTNzMywxLjM0MywzLDN2MTcuMzM2ICAgICBDNjYuMjIyLDIxLjk5Myw2NC44NzksMjMuMzM2LDYzLjIyMiwyMy4zMzZ6Ii8+CgkJPC9nPgoJCTxnPgoJCQk8Zz4KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNNjAuMDQ0LDI2LjMwMWMtMC45NjksMC0xLjkxOS0wLjQ2OC0yLjQ5Ny0xLjMzM2wtOS42MzYtMTQuNDE2ICAgICAgYy0wLjkyMS0xLjM3Ny0wLjU1MS0zLjI0LDAuODI3LTQuMTYxYzEuMzc3LTAuOTIyLDMuMjQxLTAuNTUsNC4xNjEsMC44MjdsOS42MzYsMTQuNDE2YzAuOTIxLDEuMzc3LDAuNTUxLDMuMjQtMC44MjcsNC4xNjEgICAgICBDNjEuMTk2LDI2LjEzOCw2MC42MTcsMjYuMzAxLDYwLjA0NCwyNi4zMDF6Ii8+CgkJCTwvZz4KCQkJPGc+CgkJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTY2LjM5OSwyNi4zMDFjLTAuNTczLDAtMS4xNTItMC4xNjMtMS42NjQtMC41MDZjLTEuMzc4LTAuOTIxLTEuNzQ4LTIuNzg0LTAuODI3LTQuMTYxICAgICAgbDkuNjM2LTE0LjQxNmMwLjkyLTEuMzc3LDIuNzg0LTEuNzQ5LDQuMTYxLTAuODI3YzEuMzc4LDAuOTIxLDEuNzQ4LDIuNzg0LDAuODI3LDQuMTYxbC05LjYzNiwxNC40MTYgICAgICBDNjguMzE4LDI1LjgzMyw2Ny4zNjgsMjYuMzAxLDY2LjM5OSwyNi4zMDF6Ii8+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZGODAwOyIgZD0iTTExMi40MzEsNjkuNTFjMCwyMC42NzYtMjIuMDMyLDM3LjQ0MS00OS4yMDksMzcuNDQxYy0yNy4xNzgsMC00OS4yMDktMTYuNzY2LTQ5LjIwOS0zNy40NDEgICAgYzAtMjAuNjgsMjIuMDMxLTQ1LjQ1OSw0OS4yMDktNDUuNDU5QzkwLjM5OCwyNC4wNTEsMTEyLjQzMSw0OC44MywxMTIuNDMxLDY5LjUxeiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDQwMDsiIGQ9Ik0xMTIuNDMxLDY5LjUxYzAsMjAuNjc2LTIyLjAzMiwzNy40NDEtNDkuMjA5LDM3LjQ0MWMtMjcuMTc4LDAtNDkuMjA5LTE2Ljc2Ni00OS4yMDktMzcuNDQxICAgIGMwLTIwLjY4LDIyLjAzMS0zNC45MjgsNDkuMjA5LTM0LjkyOEM5MC4zOTgsMzQuNTgyLDExMi40MzEsNDguODMsMTEyLjQzMSw2OS41MXoiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkY4MDA7IiBkPSJNNzMuNzAxLDU4LjM2N2MwLDEuMzk1LTQuNjkxLDEuNjQ1LTEwLjQ3OSwxLjY0NXMtMTAuNDc5LTAuMjUtMTAuNDc5LTEuNjQ1ICAgIGMwLTEuMzkzLDQuNjkxLTUuMDM1LDEwLjQ3OS01LjAzNVM3My43MDEsNTYuOTc1LDczLjcwMSw1OC4zNjd6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZCMDAwOyIgZD0iTTExMi40MzEsNjkuNTFjMCwyMC42NzYtMjIuMDMyLDM3LjQ0MS00OS4yMDksMzcuNDQxYy0yNy4xNzgsMC00OS4yMDktMTYuNzY2LTQ5LjIwOS0zNy40NDEgICAgYzAtMjAuNjgyLDYuMjYxLDE4LjM0LDQ5LjIwOSwxOC4zNFMxMTIuNDMxLDQ4LjgyOCwxMTIuNDMxLDY5LjUxeiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik02My4yMjIsMTA4LjQ1MWMtMjcuOTYxLDAtNTAuNzA5LTE3LjQ2OS01MC43MDktMzguOTQxYzAtMjEuMjcsMjIuNjE5LTQ2Ljk1OSw1MC43MDktNDYuOTU5ICAgIHM1MC43MDksMjUuNjg5LDUwLjcwOSw0Ni45NTlDMTEzLjkzMSw5MC45ODIsOTEuMTgzLDEwOC40NTEsNjMuMjIyLDEwOC40NTF6IE02My4yMjIsMjUuNTUxICAgIGMtMjYuNDI4LDAtNDcuNzA5LDI0LjA0OC00Ny43MDksNDMuOTU5YzAsMTkuODE4LDIxLjQwMiwzNS45NDEsNDcuNzA5LDM1Ljk0MXM0Ny43MDktMTYuMTIzLDQ3LjcwOS0zNS45NDEgICAgQzExMC45MzEsNDkuNTk5LDg5LjY0OSwyNS41NTEsNjMuMjIyLDI1LjU1MXoiLz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8Zz4KCQkJCTxnPgoJCQkJCTxnPgoJCQkJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTQ3LjA2LDYwLjgyMmMtMC44MjgsMC0xLjUtMC42NzItMS41LTEuNWMwLTAuODctMi40ODctMi40NjktNi41NTItMi40NjkgICAgICAgIGMtNC4wNjMsMC02LjU1MSwxLjU5OS02LjU1MSwyLjQ2OWMwLDAuODI4LTAuNjcyLDEuNS0xLjUsMS41cy0xLjUtMC42NzItMS41LTEuNWMwLTMuMTE4LDQuMTA1LTUuNDY5LDkuNTUxLTUuNDY5ICAgICAgICBzOS41NTIsMi4zNTEsOS41NTIsNS40NjlDNDguNTYsNjAuMTUsNDcuODg4LDYwLjgyMiw0Ny4wNiw2MC44MjJ6Ii8+CgkJCQkJPC9nPgoJCQkJPC9nPgoJCQk8L2c+CgkJCTxnPgoJCQkJPGc+CgkJCQkJPGc+CgkJCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNOTUuNDg2LDYwLjgyMmMtMC44MjgsMC0xLjUtMC42NzItMS41LTEuNWMwLTAuODctMi40ODctMi40NjktNi41NTEtMi40NjkgICAgICAgIGMtNC4wNjQsMC02LjU1MiwxLjU5OS02LjU1MiwyLjQ2OWMwLDAuODI4LTAuNjcyLDEuNS0xLjUsMS41cy0xLjUtMC42NzItMS41LTEuNWMwLTMuMTE4LDQuMTA2LTUuNDY5LDkuNTUyLTUuNDY5ICAgICAgICBzOS41NTEsMi4zNTEsOS41NTEsNS40NjlDOTYuOTg2LDYwLjE1LDk2LjMxNCw2MC44MjIsOTUuNDg2LDYwLjgyMnoiLz4KCQkJCQk8L2c+CgkJCQk8L2c+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZGNEM3OyIgZD0iTTEwMi42MzYsMTAxLjc1OGMwLTEyLjY5Ny0xMS41NzMtMTYuODMtMjAuMTc2LTIzLjcxM2MtMTQuMzkzLTEyLjM4My05LjY2My0yMC4yNzMtMTguNjQxLTIwLjg4OSAgICB2LTAuMDQzYy0wLjIwOSwwLTAuNDAxLDAuMDA4LTAuNTk4LDAuMDE0Yy0wLjE5Ni0wLjAwNi0wLjM4OS0wLjAxNC0wLjU5OC0wLjAxNHYwLjA0M2MtOC45NzgsMC42MTUtNC4yNDgsOC41MDYtMTguNjQxLDIwLjg4OSAgICBjLTguNjAzLDYuODgzLTIwLjE3NiwxMS4wMTYtMjAuMTc2LDIzLjcxM2MwLDIwLjUwNiwyMC4zMTksMjIuMjk3LDM4LjgxNiwyMy4xNDV2MC4wNDFjMC4xOTgsMCwwLjM5OC0wLjAxNiwwLjU5OC0wLjAyICAgIGMwLjE5OSwwLjAwNCwwLjM5OSwwLjAyLDAuNTk4LDAuMDJ2LTAuMDQxQzgyLjMxNiwxMjQuMDU1LDEwMi42MzYsMTIyLjI2NCwxMDIuNjM2LDEwMS43NTh6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRTBENUE0OyIgZD0iTTEwMi4wNTEsMTAxLjkxNEM5OS42MDQsOTAuMjA3LDg5LjkxOCw4OS40MTIsODIuNDYsODMuNDQ1ICAgIGMtMTQuMzkzLTEyLjM4My05LjY2My0yMC4yNzItMTguNjQxLTIwLjg4OXYtMC4wNDNjLTAuMjA5LDAtMC40MDEsMC4wMS0wLjU5OCwwLjAxNmMtMC4xOTYtMC4wMDYtMC4zODktMC4wMTYtMC41OTgtMC4wMTZ2MC4wNDMgICAgYy04Ljk3OCwwLjYxNy00LjI0OCw4LjUwNi0xOC42NDEsMjAuODg5Yy03LjQ1OCw1Ljk2Ny0xNy4xNDQsNi43NjItMTkuNTkxLDE4LjQ2OWMzLjQzNSwxNS4yODcsMjEuNTY4LDE2LjgyMiwzOC4yMzEsMTcuNTg4ICAgIHYwLjA0MWMwLjE5OCwwLDAuMzk4LTAuMDE2LDAuNTk4LTAuMDIxYzAuMTk5LDAuMDA2LDAuMzk5LDAuMDIxLDAuNTk4LDAuMDIxdi0wLjA0MSAgICBDODAuNDgyLDExOC43MzYsOTguNjE2LDExNy4yMDEsMTAyLjA1MSwxMDEuOTE0eiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik02My44MTksMTI2LjQ0M2MtMC4xMzYsMC0wLjI3MS0wLjAwNi0wLjQwOC0wLjAxMmwtMC4yMTktMC4wMDhsLTAuMTYsMC4wMDggICAgYy0wLjI4MiwwLjAxMy0wLjU2OCwwLjAyNy0wLjgyNC0wLjA0N2MtMTYuMDI3LTAuNzM1LTM5LjktMS45OTItMzkuOS0yNC42MjdjMC0xMC42MzcsNy40OTUtMTUuNzAxLDE0Ljc0My0yMC41OTkgICAgYzIuMDItMS4zNjQsNC4xMDctMi43NzQsNS45OTUtNC4yODVjNi44NjEtNS45MDUsOS4xOTMtMTAuNzI5LDEwLjg5Ni0xNC4yNTNjMS43NC0zLjYwMSwzLjEyMy02LjQ2Miw4LjIyNi02LjkzMyAgICBjMC4zMS0wLjEwNCwwLjY2NC0wLjA3NSwwLjk4NC0wLjA2NGwwLjExNCwwLjAwNGwwLjAyNC0wLjAwNGMwLjMyNy0wLjAxMSwwLjY4OC0wLjAzOCwxLjAwMywwLjA2NSAgICBjNS4wODcsMC40NzcsNi40NjksMy4zMzUsOC4yMDcsNi45MzJjMS43MDMsMy41MjMsNC4wMzUsOC4zNDgsMTAuOTM4LDE0LjI4N2MxLjg0NywxLjQ3NywzLjkzNSwyLjg4Nyw1Ljk1NCw0LjI1MSAgICBjNy4yNDgsNC44OTcsMTQuNzQzLDkuOTYyLDE0Ljc0MywyMC41OTljMCwyMi42NC0yMy44ODYsMjMuODkyLTM5LjkxMywyNC42MjhDNjQuMDk1LDEyNi40MjMsNjMuOTU5LDEyNi40NDMsNjMuODE5LDEyNi40NDN6ICAgICBNNjMuMTkyLDEyMy40MjRsMC4zMjUsMC4wMWMwLjA3Ni0wLjAxNiwwLjE1My0wLjAyNiwwLjIzMy0wLjAyOWMyMC40NTQtMC45MzgsMzcuMzg1LTMuMjE0LDM3LjM4NS0yMS42NDYgICAgYzAtOS4wNDMtNi41Mi0xMy40NDgtMTMuNDIzLTE4LjExMmMtMi4wNjgtMS4zOTctNC4yMDctMi44NDMtNi4xOS00LjQzQzc0LjEwNiw3Mi44MzcsNzEuNTE1LDY3LjQ3NSw2OS44LDYzLjkyNyAgICBjLTEuNzE3LTMuNTUzLTIuNDI4LTUuMDIzLTYuMDgzLTUuMjc0Yy0wLjA3OC0wLjAwNS0wLjE1NC0wLjAxNy0wLjIyOS0wLjAzM2MtMC4wMzQsMC4wMDEtMC4wNjgsMC4wMDItMC4xMDIsMC4wMDNsLTAuMTIsMC4wMDQgICAgbC0wLjIxLTAuMDA0Yy0wLjAzNS0wLjAwMS0wLjA3LTAuMDAyLTAuMTA1LTAuMDAzYy0wLjA3MywwLjAxNy0wLjE0OCwwLjAyOC0wLjIyNSwwLjAzM2MtMy42NTUsMC4yNTEtNC4zNjYsMS43MjItNi4wODMsNS4yNzQgICAgYy0xLjcxNSwzLjU0OC00LjMwNyw4LjkxLTExLjY4MiwxNS4yNTVjLTIuMDI0LDEuNjIxLTQuMTYzLDMuMDY2LTYuMjMxLDQuNDY0Yy02LjkwMyw0LjY2NC0xMy40MjMsOS4wNjktMTMuNDIzLDE4LjExMiAgICBjMCwxOC40MzMsMTYuOTMxLDIwLjcwOSwzNy4zODUsMjEuNjQ2YzAuMDgxLDAuMDAzLDAuMTYsMC4wMTQsMC4yMzcsMC4wMjlMNjMuMTkyLDEyMy40MjR6Ii8+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik01OS4wNzcsNzYuMjEzYy0wLjU3MywwLTEuMTItMC4zMy0xLjM3LTAuODg3bC0xLjEwMi0yLjQ1N2MtMC4zMzktMC43NTYsMC0xLjY0NCwwLjc1Ni0xLjk4MiAgICAgYzAuNzU1LTAuMzM4LDEuNjQzLDAsMS45ODIsMC43NTZsMS4xMDIsMi40NTdjMC4zMzksMC43NTYsMCwxLjY0NC0wLjc1NiwxLjk4MkM1OS40OSw3Ni4xNzEsNTkuMjgyLDc2LjIxMyw1OS4wNzcsNzYuMjEzeiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik02Ny4zNjYsNzYuMjEzYy0wLjIwNSwwLTAuNDEzLTAuMDQyLTAuNjEyLTAuMTMxYy0wLjc1Ni0wLjMzOS0xLjA5NS0xLjIyNy0wLjc1Ni0xLjk4MiAgICAgbDEuMTAyLTIuNDU3YzAuMzQtMC43NTYsMS4yMjctMS4wOTMsMS45ODItMC43NTZjMC43NTYsMC4zMzksMS4wOTUsMS4yMjcsMC43NTYsMS45ODJsLTEuMTAyLDIuNDU3ICAgICBDNjguNDg2LDc1Ljg4Myw2Ny45MzksNzYuMjEzLDY3LjM2Niw3Ni4yMTN6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=',
                        name: 'Some little bit longer title',
                        price: '39.99',
                        offers_accept: false
                    },
                    {
                        image: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxMjYuNDQzIDEyNi40NDMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyNi40NDMgMTI2LjQ0MzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNNjMuMjIyLDIzLjMzNmMtMS42NTcsMC0zLTEuMzQzLTMtM1YzYzAtMS42NTcsMS4zNDMtMywzLTNzMywxLjM0MywzLDN2MTcuMzM2ICAgICBDNjYuMjIyLDIxLjk5Myw2NC44NzksMjMuMzM2LDYzLjIyMiwyMy4zMzZ6Ii8+CgkJPC9nPgoJCTxnPgoJCQk8Zz4KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNNjAuMDQ0LDI2LjMwMWMtMC45NjksMC0xLjkxOS0wLjQ2OC0yLjQ5Ny0xLjMzM2wtOS42MzYtMTQuNDE2ICAgICAgYy0wLjkyMS0xLjM3Ny0wLjU1MS0zLjI0LDAuODI3LTQuMTYxYzEuMzc3LTAuOTIyLDMuMjQxLTAuNTUsNC4xNjEsMC44MjdsOS42MzYsMTQuNDE2YzAuOTIxLDEuMzc3LDAuNTUxLDMuMjQtMC44MjcsNC4xNjEgICAgICBDNjEuMTk2LDI2LjEzOCw2MC42MTcsMjYuMzAxLDYwLjA0NCwyNi4zMDF6Ii8+CgkJCTwvZz4KCQkJPGc+CgkJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTY2LjM5OSwyNi4zMDFjLTAuNTczLDAtMS4xNTItMC4xNjMtMS42NjQtMC41MDZjLTEuMzc4LTAuOTIxLTEuNzQ4LTIuNzg0LTAuODI3LTQuMTYxICAgICAgbDkuNjM2LTE0LjQxNmMwLjkyLTEuMzc3LDIuNzg0LTEuNzQ5LDQuMTYxLTAuODI3YzEuMzc4LDAuOTIxLDEuNzQ4LDIuNzg0LDAuODI3LDQuMTYxbC05LjYzNiwxNC40MTYgICAgICBDNjguMzE4LDI1LjgzMyw2Ny4zNjgsMjYuMzAxLDY2LjM5OSwyNi4zMDF6Ii8+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZGODAwOyIgZD0iTTExMi40MzEsNjkuNTFjMCwyMC42NzYtMjIuMDMyLDM3LjQ0MS00OS4yMDksMzcuNDQxYy0yNy4xNzgsMC00OS4yMDktMTYuNzY2LTQ5LjIwOS0zNy40NDEgICAgYzAtMjAuNjgsMjIuMDMxLTQ1LjQ1OSw0OS4yMDktNDUuNDU5QzkwLjM5OCwyNC4wNTEsMTEyLjQzMSw0OC44MywxMTIuNDMxLDY5LjUxeiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDQwMDsiIGQ9Ik0xMTIuNDMxLDY5LjUxYzAsMjAuNjc2LTIyLjAzMiwzNy40NDEtNDkuMjA5LDM3LjQ0MWMtMjcuMTc4LDAtNDkuMjA5LTE2Ljc2Ni00OS4yMDktMzcuNDQxICAgIGMwLTIwLjY4LDIyLjAzMS0zNC45MjgsNDkuMjA5LTM0LjkyOEM5MC4zOTgsMzQuNTgyLDExMi40MzEsNDguODMsMTEyLjQzMSw2OS41MXoiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkY4MDA7IiBkPSJNNzMuNzAxLDU4LjM2N2MwLDEuMzk1LTQuNjkxLDEuNjQ1LTEwLjQ3OSwxLjY0NXMtMTAuNDc5LTAuMjUtMTAuNDc5LTEuNjQ1ICAgIGMwLTEuMzkzLDQuNjkxLTUuMDM1LDEwLjQ3OS01LjAzNVM3My43MDEsNTYuOTc1LDczLjcwMSw1OC4zNjd6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZCMDAwOyIgZD0iTTExMi40MzEsNjkuNTFjMCwyMC42NzYtMjIuMDMyLDM3LjQ0MS00OS4yMDksMzcuNDQxYy0yNy4xNzgsMC00OS4yMDktMTYuNzY2LTQ5LjIwOS0zNy40NDEgICAgYzAtMjAuNjgyLDYuMjYxLDE4LjM0LDQ5LjIwOSwxOC4zNFMxMTIuNDMxLDQ4LjgyOCwxMTIuNDMxLDY5LjUxeiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik02My4yMjIsMTA4LjQ1MWMtMjcuOTYxLDAtNTAuNzA5LTE3LjQ2OS01MC43MDktMzguOTQxYzAtMjEuMjcsMjIuNjE5LTQ2Ljk1OSw1MC43MDktNDYuOTU5ICAgIHM1MC43MDksMjUuNjg5LDUwLjcwOSw0Ni45NTlDMTEzLjkzMSw5MC45ODIsOTEuMTgzLDEwOC40NTEsNjMuMjIyLDEwOC40NTF6IE02My4yMjIsMjUuNTUxICAgIGMtMjYuNDI4LDAtNDcuNzA5LDI0LjA0OC00Ny43MDksNDMuOTU5YzAsMTkuODE4LDIxLjQwMiwzNS45NDEsNDcuNzA5LDM1Ljk0MXM0Ny43MDktMTYuMTIzLDQ3LjcwOS0zNS45NDEgICAgQzExMC45MzEsNDkuNTk5LDg5LjY0OSwyNS41NTEsNjMuMjIyLDI1LjU1MXoiLz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8Zz4KCQkJCTxnPgoJCQkJCTxnPgoJCQkJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTQ3LjA2LDYwLjgyMmMtMC44MjgsMC0xLjUtMC42NzItMS41LTEuNWMwLTAuODctMi40ODctMi40NjktNi41NTItMi40NjkgICAgICAgIGMtNC4wNjMsMC02LjU1MSwxLjU5OS02LjU1MSwyLjQ2OWMwLDAuODI4LTAuNjcyLDEuNS0xLjUsMS41cy0xLjUtMC42NzItMS41LTEuNWMwLTMuMTE4LDQuMTA1LTUuNDY5LDkuNTUxLTUuNDY5ICAgICAgICBzOS41NTIsMi4zNTEsOS41NTIsNS40NjlDNDguNTYsNjAuMTUsNDcuODg4LDYwLjgyMiw0Ny4wNiw2MC44MjJ6Ii8+CgkJCQkJPC9nPgoJCQkJPC9nPgoJCQk8L2c+CgkJCTxnPgoJCQkJPGc+CgkJCQkJPGc+CgkJCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNOTUuNDg2LDYwLjgyMmMtMC44MjgsMC0xLjUtMC42NzItMS41LTEuNWMwLTAuODctMi40ODctMi40NjktNi41NTEtMi40NjkgICAgICAgIGMtNC4wNjQsMC02LjU1MiwxLjU5OS02LjU1MiwyLjQ2OWMwLDAuODI4LTAuNjcyLDEuNS0xLjUsMS41cy0xLjUtMC42NzItMS41LTEuNWMwLTMuMTE4LDQuMTA2LTUuNDY5LDkuNTUyLTUuNDY5ICAgICAgICBzOS41NTEsMi4zNTEsOS41NTEsNS40NjlDOTYuOTg2LDYwLjE1LDk2LjMxNCw2MC44MjIsOTUuNDg2LDYwLjgyMnoiLz4KCQkJCQk8L2c+CgkJCQk8L2c+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZGNEM3OyIgZD0iTTEwMi42MzYsMTAxLjc1OGMwLTEyLjY5Ny0xMS41NzMtMTYuODMtMjAuMTc2LTIzLjcxM2MtMTQuMzkzLTEyLjM4My05LjY2My0yMC4yNzMtMTguNjQxLTIwLjg4OSAgICB2LTAuMDQzYy0wLjIwOSwwLTAuNDAxLDAuMDA4LTAuNTk4LDAuMDE0Yy0wLjE5Ni0wLjAwNi0wLjM4OS0wLjAxNC0wLjU5OC0wLjAxNHYwLjA0M2MtOC45NzgsMC42MTUtNC4yNDgsOC41MDYtMTguNjQxLDIwLjg4OSAgICBjLTguNjAzLDYuODgzLTIwLjE3NiwxMS4wMTYtMjAuMTc2LDIzLjcxM2MwLDIwLjUwNiwyMC4zMTksMjIuMjk3LDM4LjgxNiwyMy4xNDV2MC4wNDFjMC4xOTgsMCwwLjM5OC0wLjAxNiwwLjU5OC0wLjAyICAgIGMwLjE5OSwwLjAwNCwwLjM5OSwwLjAyLDAuNTk4LDAuMDJ2LTAuMDQxQzgyLjMxNiwxMjQuMDU1LDEwMi42MzYsMTIyLjI2NCwxMDIuNjM2LDEwMS43NTh6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRTBENUE0OyIgZD0iTTEwMi4wNTEsMTAxLjkxNEM5OS42MDQsOTAuMjA3LDg5LjkxOCw4OS40MTIsODIuNDYsODMuNDQ1ICAgIGMtMTQuMzkzLTEyLjM4My05LjY2My0yMC4yNzItMTguNjQxLTIwLjg4OXYtMC4wNDNjLTAuMjA5LDAtMC40MDEsMC4wMS0wLjU5OCwwLjAxNmMtMC4xOTYtMC4wMDYtMC4zODktMC4wMTYtMC41OTgtMC4wMTZ2MC4wNDMgICAgYy04Ljk3OCwwLjYxNy00LjI0OCw4LjUwNi0xOC42NDEsMjAuODg5Yy03LjQ1OCw1Ljk2Ny0xNy4xNDQsNi43NjItMTkuNTkxLDE4LjQ2OWMzLjQzNSwxNS4yODcsMjEuNTY4LDE2LjgyMiwzOC4yMzEsMTcuNTg4ICAgIHYwLjA0MWMwLjE5OCwwLDAuMzk4LTAuMDE2LDAuNTk4LTAuMDIxYzAuMTk5LDAuMDA2LDAuMzk5LDAuMDIxLDAuNTk4LDAuMDIxdi0wLjA0MSAgICBDODAuNDgyLDExOC43MzYsOTguNjE2LDExNy4yMDEsMTAyLjA1MSwxMDEuOTE0eiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik02My44MTksMTI2LjQ0M2MtMC4xMzYsMC0wLjI3MS0wLjAwNi0wLjQwOC0wLjAxMmwtMC4yMTktMC4wMDhsLTAuMTYsMC4wMDggICAgYy0wLjI4MiwwLjAxMy0wLjU2OCwwLjAyNy0wLjgyNC0wLjA0N2MtMTYuMDI3LTAuNzM1LTM5LjktMS45OTItMzkuOS0yNC42MjdjMC0xMC42MzcsNy40OTUtMTUuNzAxLDE0Ljc0My0yMC41OTkgICAgYzIuMDItMS4zNjQsNC4xMDctMi43NzQsNS45OTUtNC4yODVjNi44NjEtNS45MDUsOS4xOTMtMTAuNzI5LDEwLjg5Ni0xNC4yNTNjMS43NC0zLjYwMSwzLjEyMy02LjQ2Miw4LjIyNi02LjkzMyAgICBjMC4zMS0wLjEwNCwwLjY2NC0wLjA3NSwwLjk4NC0wLjA2NGwwLjExNCwwLjAwNGwwLjAyNC0wLjAwNGMwLjMyNy0wLjAxMSwwLjY4OC0wLjAzOCwxLjAwMywwLjA2NSAgICBjNS4wODcsMC40NzcsNi40NjksMy4zMzUsOC4yMDcsNi45MzJjMS43MDMsMy41MjMsNC4wMzUsOC4zNDgsMTAuOTM4LDE0LjI4N2MxLjg0NywxLjQ3NywzLjkzNSwyLjg4Nyw1Ljk1NCw0LjI1MSAgICBjNy4yNDgsNC44OTcsMTQuNzQzLDkuOTYyLDE0Ljc0MywyMC41OTljMCwyMi42NC0yMy44ODYsMjMuODkyLTM5LjkxMywyNC42MjhDNjQuMDk1LDEyNi40MjMsNjMuOTU5LDEyNi40NDMsNjMuODE5LDEyNi40NDN6ICAgICBNNjMuMTkyLDEyMy40MjRsMC4zMjUsMC4wMWMwLjA3Ni0wLjAxNiwwLjE1My0wLjAyNiwwLjIzMy0wLjAyOWMyMC40NTQtMC45MzgsMzcuMzg1LTMuMjE0LDM3LjM4NS0yMS42NDYgICAgYzAtOS4wNDMtNi41Mi0xMy40NDgtMTMuNDIzLTE4LjExMmMtMi4wNjgtMS4zOTctNC4yMDctMi44NDMtNi4xOS00LjQzQzc0LjEwNiw3Mi44MzcsNzEuNTE1LDY3LjQ3NSw2OS44LDYzLjkyNyAgICBjLTEuNzE3LTMuNTUzLTIuNDI4LTUuMDIzLTYuMDgzLTUuMjc0Yy0wLjA3OC0wLjAwNS0wLjE1NC0wLjAxNy0wLjIyOS0wLjAzM2MtMC4wMzQsMC4wMDEtMC4wNjgsMC4wMDItMC4xMDIsMC4wMDNsLTAuMTIsMC4wMDQgICAgbC0wLjIxLTAuMDA0Yy0wLjAzNS0wLjAwMS0wLjA3LTAuMDAyLTAuMTA1LTAuMDAzYy0wLjA3MywwLjAxNy0wLjE0OCwwLjAyOC0wLjIyNSwwLjAzM2MtMy42NTUsMC4yNTEtNC4zNjYsMS43MjItNi4wODMsNS4yNzQgICAgYy0xLjcxNSwzLjU0OC00LjMwNyw4LjkxLTExLjY4MiwxNS4yNTVjLTIuMDI0LDEuNjIxLTQuMTYzLDMuMDY2LTYuMjMxLDQuNDY0Yy02LjkwMyw0LjY2NC0xMy40MjMsOS4wNjktMTMuNDIzLDE4LjExMiAgICBjMCwxOC40MzMsMTYuOTMxLDIwLjcwOSwzNy4zODUsMjEuNjQ2YzAuMDgxLDAuMDAzLDAuMTYsMC4wMTQsMC4yMzcsMC4wMjlMNjMuMTkyLDEyMy40MjR6Ii8+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik01OS4wNzcsNzYuMjEzYy0wLjU3MywwLTEuMTItMC4zMy0xLjM3LTAuODg3bC0xLjEwMi0yLjQ1N2MtMC4zMzktMC43NTYsMC0xLjY0NCwwLjc1Ni0xLjk4MiAgICAgYzAuNzU1LTAuMzM4LDEuNjQzLDAsMS45ODIsMC43NTZsMS4xMDIsMi40NTdjMC4zMzksMC43NTYsMCwxLjY0NC0wLjc1NiwxLjk4MkM1OS40OSw3Ni4xNzEsNTkuMjgyLDc2LjIxMyw1OS4wNzcsNzYuMjEzeiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzYzQTsiIGQ9Ik02Ny4zNjYsNzYuMjEzYy0wLjIwNSwwLTAuNDEzLTAuMDQyLTAuNjEyLTAuMTMxYy0wLjc1Ni0wLjMzOS0xLjA5NS0xLjIyNy0wLjc1Ni0xLjk4MiAgICAgbDEuMTAyLTIuNDU3YzAuMzQtMC43NTYsMS4yMjctMS4wOTMsMS45ODItMC43NTZjMC43NTYsMC4zMzksMS4wOTUsMS4yMjcsMC43NTYsMS45ODJsLTEuMTAyLDIuNDU3ICAgICBDNjguNDg2LDc1Ljg4Myw2Ny45MzksNzYuMjEzLDY3LjM2Niw3Ni4yMTN6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=',
                        name: 'Some short title',
                        price: '0.99',
                        offers_accept: true
                    },
                ]
            }
        },
        methods: {
        },
        computed: {
            asset: function () {
                return this.$store.state.marketplace.assets[this.id] || null;
                if (!this.$store.state.marketplace.assets)
                    return

                return this.$store.state.marketplace.assets[this.id]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .assets-title{
        display: flex;
        align-items: center;
        padding-right: 25%;
        padding-bottom: 60px;
        position: relative;
        .company-logo-big{
            img{
                position: absolute;
                top: 15px;
                right: 15px;
                width: auto;
                height: auto;
                max-width: 140px;
                max-height: 90px;
            }
        }
        .title-thumb{
            display: inline-block;
            float: left;
            width: 50px;
            img{
                width: 100%;
            }
        }
        .title-text{
            display: inline-block;
            float: left;
            width: auto;
            max-width: calc( 100% - 65px );
            margin-left: 15px;
            min-width: 30%;
            h1{
                width: 100%;
                padding: 0 0 5px 0;
                margin: 0;
                font-size: 30px;
            }
            span{
                font-size: 14px;
                line-height: 20px;
                &.company{
                    img{
                        height: 16px;
                        width: auto;
                        margin-right: 8px;
                    }
                }
                strong{
                    font-weight: bold;
                }
                &.count_in_wallet{
                    float: right;
                }
            }
        }
    }

    .top-picks__title {
        width: 100%;
        display: inline-block;
        float: left;
        border-bottom: 2px solid #fff;
        h3 {
            color: #fff;
            border-bottom: 5px solid #fff;
            padding: 0 5px 0 0;
            margin: 0;
            display: inline-block;
            font-size: 21px;
            line-height: 36px;
            float: left;
            max-width: calc(100% - 95px);
            position: relative;
            &:after {
                content: "";
                position: absolute;
                bottom: -5px;
                right: -5px;
                height: 5px;
                border: 3px solid transparent;
                border-bottom: 3px solid #fff;
                border-left: 3px solid #fff;
            }
        }
    }
    .top-picks__list{
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 30px;
        .item{
            display: flex;
            width: 32%;
            margin-top: 20px;
            float: left;
            padding: 10px;
            background: rgba(0, 0, 0, .13);
            border: 1px solid rgba(70, 70, 70, 0.5);
            border-radius: 5px;
            align-items: center;
            justify-content: space-between;
            .item_thumb{
                display: inline-block;
                width: 45px;
                float: left;
                img{
                    width: 100%;
                    height: auto;
                }
            }
            .item_info{
                display: inline-block;
                width: calc( 100% - 55px );
                float: right;
                h5{
                    font-size: 13px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }
                .price{
                    line-height: 26px;
                    font-size: 14px;
                }
                a{
                    padding: 2px 7px;
                    text-transform: uppercase;
                    font-size: 13px;
                    font-weight: bold;
                    i{
                        margin-right: 5px;
                    }
                }
            }
        }
    }

    .offers__header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        float: left;
        border-bottom: 2px solid #fff;
        flex-wrap: nowrap;
        overflow: hidden;
        margin-bottom: 20px;
        h3 {
            color: #fff;
            border-bottom: 5px solid #fff;
            padding: 0 5px 0 0;
            margin: 0;
            display: inline-block;
            font-size: 21px;
            line-height: 36px;
            float: left;
            width: auto;
            position: relative;
            &:after {
                content: "";
                position: absolute;
                bottom: -5px;
                right: -5px;
                height: 5px;
                border: 3px solid transparent;
                border-bottom: 3px solid #fff;
                border-left: 3px solid #fff;
            }
        }
    }
    .offers__info{
        font-size: 14px;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
        width: 400px;
        strong{
            font-weight: bold;
        }
    }
    .offers__pagination{
        a{
            display: inline-block;
            padding: 3px 12px 6px;
            margin: 0 5px;
            position: relative;
            background: #343555;
            border-radius: 10px 10px 0 0;
            z-index: 3;
            font-size: 16px;
            box-shadow: 0 -1px 1px rgba(0, 0, 0, .2);
            color: #fff;
            font-weight: bold;
            cursor: pointer;
            &:before{
                content: "";
                position: absolute;
                height: 23px;
                bottom: 0;
                left: -23px;
                border: 13px solid transparent;
                border-bottom: 13px solid #343555;
                border-right: 13px solid #343555;
                -webkit-filter: drop-shadow(-2px 0px 1px rgba(0,0,0,.2));
                filter: drop-shadow(-2px 0px 1px rgba(0,0,0,.2));
            }
            &:after{
                content: "";
                position: absolute;
                height: 23px;
                bottom: 0;
                right: -23px;
                border: 13px solid transparent;
                border-bottom: 13px solid #343555;
                border-left: 13px solid #343555;
                -webkit-filter: drop-shadow(2px 0px 1px rgba(0,0,0,.2));
                filter: drop-shadow(2px 0px 1px rgba(0,0,0,.2));
            }
            &.current{
                background: #fff;
                color: #343555;
                z-index: 10!important;
                font-weight: bold;
                text-decoration: none;
                &:before{
                    border-bottom-color: #fff;
                    border-right-color: #fff;
                    z-index: 10!important;
                }
                &:after{
                    border-bottom-color: #fff;
                    border-left-color: #fff;
                    z-index: 10!important;
                }
            }
            &:hover:not(.current){
                background: #42436c;
                color: #fff;
                z-index: 10!important;
                font-weight: bold;
                text-decoration: none;
                &:before{
                    border-bottom-color: #42436c;
                    border-right-color: #42436c;
                }
                &:after{
                    border-bottom-color: #42436c;
                    border-left-color: #42436c;
                }
            }
        }
    }
    .offers__nav{
        display: inline-block;
        width: 60px;
        float: right;
        text-align: right;
        margin-bottom: 10px;
        a{
            display: inline-block;
            width: 30px;
            color: #fff;
            float: left;
            line-height: 40px;
            font-size: 20px;
        }
    }
    .offers__list{
        padding: 10px;
        background: rgba(0, 0, 0, .13);
        border: 1px solid rgba(70, 70, 70, 0.5);
        border-radius: 5px;
        overflow: hidden;
        margin-bottom: 30px;
        .list-item{
            display: flex;
            width: 100%;
            justify-content: space-between;
            flex-wrap: nowrap;
            align-items: center;
            padding: 10px;
            margin-bottom: 15px;
            background: #343555;
            box-shadow: 0 3px 6px rgba(0, 0, 0, .2);
            &:last-child{
                margin: 0;
            }
            .item-name-img{
                width: 300px;
                img{
                    display: inline-block;
                    height: 30px;
                    width: auto;
                    margin-right: 10px;
                }
                h4{
                    display: inline-block;
                    font-size: 14px;
                    font-weight: bold;
                    padding: 0;
                    margin: 0;
                    vertical-align: middle;
                }
            }
            .item-info{
                width: 300px;
                text-align: right;
                span{
                    line-height: 26px;
                    font-size: 14px;
                    margin-right: 20px;
                    &.user_name{
                        font-weight: bold;
                    }
                }
                a{
                    padding: 2px 7px;
                    text-transform: uppercase;
                    font-size: 13px;
                    font-weight: bold;
                    i{
                        margin-right: 5px;
                    }
                }
            }
        }
    }

    .metadata__title {
        width: 100%;
        display: inline-block;
        float: left;
        border-bottom: 2px solid #fff;
        margin-bottom: 30px;
        h3 {
            color: #fff;
            border-bottom: 5px solid #fff;
            padding: 0 5px 0 0;
            margin: 0;
            display: inline-block;
            font-size: 21px;
            line-height: 36px;
            float: left;
            max-width: calc(100% - 95px);
            position: relative;
            &:after {
                content: "";
                position: absolute;
                bottom: -5px;
                right: -5px;
                height: 5px;
                border: 3px solid transparent;
                border-bottom: 3px solid #fff;
                border-left: 3px solid #fff;
            }
        }
    }
    .metadata__table{
        padding: 10px;
        background: rgba(0, 0, 0, .13);
        border: 1px solid rgba(70, 70, 70, 0.5);
        border-radius: 5px;
        overflow: hidden;
        margin-bottom: 30px;
        .item-row{
            display: inline-block;
            width: 100%;
            float: left;
            margin-bottom: 5px;
            &:last-child{
                margin-bottom: 0;
            }
            .item-label{
                background: #3D3E5D;
                text-transform: uppercase;
                color: #C6C6D6;
                line-height: 16px;
                padding: 3px 4px;
                display: inline-block;
                width: 20%;
                float: left;
                font-weight: bold;
                border-radius: 3px;
                min-width: 160px;
                i{
                    margin-right: 10px;
                    font-size: 15px;
                }
            }
            .item-description{
                line-height: 22px;
                color: #fff;
                display: inline-block;
                float: right;
                text-align: left;
                width: calc( 100% - 160px );
                padding-left: 15px;
                max-width: 80%;
            }
        }
    }

    .my-assets__title {
        width: 100%;
        display: inline-block;
        float: left;
        border-bottom: 2px solid #fff;
        margin-bottom: 30px;
        h3 {
            color: #fff;
            border-bottom: 5px solid #fff;
            padding: 0 5px 0 0;
            margin: 0;
            display: inline-block;
            font-size: 21px;
            line-height: 36px;
            float: left;
            max-width: calc(100% - 95px);
            position: relative;
            &:after {
                content: "";
                position: absolute;
                bottom: -5px;
                right: -5px;
                height: 5px;
                border: 3px solid transparent;
                border-bottom: 3px solid #fff;
                border-left: 3px solid #fff;
            }
        }
    }
    .my-assets__list{
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 10px;
        .item{
            padding: 10px;
            background: rgba(0, 0, 0, .13);
            border: 1px solid rgba(70, 70, 70, 0.5);
            border-radius: 5px;
            overflow: hidden;
            margin-bottom: 20px;
            width: 49%;
            color: #fff;
            position: relative;
            a{
                position: absolute;
                top: 10px;
                right: 10px;
                font-size: 16px;
                color: #fff;
                text-decoration: none;
            }
            .item_thumb{
                width: 50px;
                display: inline-block;
                float: left;
                img{
                    width: 100%;
                    height: auto;
                }
            }
            .item_info{
                display: inline-block;
                float: right;
                width: calc( 100% - 65px );
                h5{
                    width: 100%;
                    margin-bottom: 10px;
                    font-size: 16px;
                    font-weight: bold;
                    padding-right: 30px;
                }
                span{
                    float: left;
                    line-height: 20px;
                }
                .switcher{
                    display: inline-block;
                    float: right;
                    line-height: 20px;
                    .label{
                        margin-right: 10px;
                    }
                    .switch{
                        margin: 0;
                    }
                }
            }
        }
    }

    .asset-modal{
        .modal-content{
            background: #27283E;
            border-radius: 5px;
            padding: 20px;
            position: relative;
            .asset-link{
                position: absolute;
                top: 10px;
                right: 10px;
                font-size: 16px;
                color: #C6C6D6;
            }
            .asset-info{
                .thumb{
                    width: 150px;
                    img{
                        width: 100%;
                        height: auto;
                    }
                }
                .info{
                    width: calc( 100% - 165px );
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    h3,
                    h4,
                    h5{
                        padding: 0;
                        margin: 0;
                    }
                    h3{
                        font-size: 23px;
                    }
                    h4{
                        font-size: 17px;
                    }
                    p{
                        margin-bottom: 0px;
                    }
                }
            }
            .action{
                a{
                    font-size: 12px;
                    padding: 0 5px;
                    i{
                        font-size: 14px;
                    }
                }
            }
            .metadata-line{
                display: inline-block;
                float: left;
                width: 100%;
                padding: 3px 10px;
                border-bottom: 1px solid rgba(255, 255, 255, .3);
                div{
                    display: inline-block;
                    &:first-child{
                        float: left;
                        width: 30%;
                        font-weight: bold;
                    }
                    &:last-child{
                        float: right;
                        padding-left: 10px;
                        width: 70%;
                        text-align: left;
                    }
                }
            }
        }
    }
    .form-control-range{
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 3px;
        background: #d3d3d3;
        outline: none;
        opacity: 0.7;
        margin: 10px 0;
        border-radius: 3px;
        -webkit-transition: .2s;
        transition: opacity .2s;
        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            border-radius: 100%;
            width: 14px;
            height: 14px;
            background: #FFFFFF;
            cursor: pointer;
            box-shadow: 0 0 2px rgba(0, 0, 0, .6);
        }

        &::-moz-range-thumb {
            width: 14px;
            height: 14px;
            background: #FFFFFF;
            cursor: pointer;
            box-shadow: 0 0 2px rgba(0, 0, 0, .6);
        }
    }
</style>
