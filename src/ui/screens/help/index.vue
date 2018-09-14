<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12 text-center">
                        <h2 class="m-0 p-o">Welcome to BlockHub Support</h2>
                    </div>
                    <div class="col-12 col-lg-9 text-center">
                        <div class="input-group input-group-lg my-5">
                            <input type="text" class="form-control" placeholder="Search query" aria-label="Search query" aria-describedby="button-addon">
                            <div class="input-group-append">
                                <c-button status="info" class="px-4" icon_hide style="border-radius: 0 5px 5px 0">Search</c-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <c-block title="Trending articles" class="margin-bottom-30">
                            <ul class="article-list">
                                <li>
                                    <a href="#3">
                                        I'm still seeing "You password has expired"
                                    </a>
                                </li>
                                <li>
                                    <a href="#3">
                                        Why am i seeing H12 request timeouts?
                                    </a>
                                </li>
                                <li>
                                    <a href="#3">
                                        Performing Load Tests on BlockHub
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        More running applications articles ...
                                    </a>
                                </li>
                            </ul>
                        </c-block>

                        <c-block title="Topics" class="margin-bottom-30">
                            <ul class="topics-list">
                                <li>
                                    <a href="#3">
                                        <i class="fas fa-cogs"></i>
                                        General Platform Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#3">
                                        <i class="fas fa-play"></i>
                                        Running applications
                                    </a>
                                </li>
                                <li>
                                    <a href="#3">
                                        <i class="fas fa-user"></i>
                                        Account Management
                                    </a>
                                </li>
                                <li>
                                    <a href="#3">
                                        <i class="fas fa-lock"></i>
                                        Security
                                    </a>
                                </li>
                                <li>
                                    <a href="#3">
                                        <i class="fas fa-credit-card"></i>
                                        Billing & Payments
                                    </a>
                                </li>
                                <li>
                                    <a href="#3">
                                        <i class="fas fa-globe"></i>
                                        Connect
                                    </a>
                                </li>
                                <li>
                                    <a href="#3">
                                        <i class="fas fa-window-restore"></i>
                                        Tools
                                    </a>
                                </li>
                            </ul>
                        </c-block>
                    </div>
                    <div class="col-12 col-lg-6">
                        <c-block title="Changelog">
                            <ul class="simple-list">
                                <li>
                                    <a href="#3">
                                        Build result API endpoint removal
                                    </a>
                                </li>
                                <li>
                                    <a href="#3">
                                        Private Space VPN and Internal Routing are now generally available
                                    </a>
                                </li>
                                <li>
                                    <a href="#3">
                                        Default Stack
                                    </a>
                                </li>
                                <li>
                                    <a href="#3">
                                        Images Updated
                                    </a>
                                </li>
                            </ul>
                        </c-block>
                    </div>
                    <div class="col-12 col-lg-6">
                        <c-block title="Common issues">
                            <ul class="simple-list">
                                <li>
                                    <a href="#3">
                                        Build result API endpoint removal
                                    </a>
                                </li>
                                <li>
                                    <a href="#3">
                                        Private Space VPN and Internal Routing are now generally available
                                    </a>
                                </li>
                                <li>
                                    <a href="#3">
                                        Default Stack
                                    </a>
                                </li>
                                <li>
                                    <a href="#3">
                                        Images Updated
                                    </a>
                                </li>
                            </ul>
                        </c-block>
                    </div>

                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
  components: {
      'c-layout': () => import('@/ui/layouts/default'),
      'c-block': () => import('@/ui/components/block')
  },
  data: () => ({
  })
}
</script>

<style lang="scss" scoped>
    .article-list{
        padding: 0;
        margin: 0;
        li{
            list-style: none;
            padding: 0;
            margin-bottom: 15px;
            display: block;
            &:last-child{
                margin-bottom: 0;
            }
            a{
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #fff;
                padding: 5px 15px 5px 40px;
                border-radius: 5px;
                box-shadow: 0 3px 6px rgba(0, 0, 0, .3);
                line-height: 30px;
                background: url("data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDQ3MC41ODYgNDcwLjU4NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcwLjU4NiA0NzAuNTg2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTMyNy4wODEsMEg5MC4yMzRDNzQuMzMxLDAsNjEuMzgxLDEyLjk1OSw2MS4zODEsMjguODU5djQxMi44NjNjMCwxNS45MjQsMTIuOTUsMjguODYzLDI4Ljg1MywyOC44NjNIMzgwLjM1ICAgYzE1LjkxNywwLDI4Ljg1NS0xMi45MzksMjguODU1LTI4Ljg2M1Y4OS4yMzRMMzI3LjA4MSwweiBNMzMzLjg5MSw0My4xODRsMzUuOTk2LDM5LjEyMWgtMzUuOTk2VjQzLjE4NHogTTM4NC45NzIsNDQxLjcyMyAgIGMwLDIuNTQyLTIuMDgxLDQuNjI5LTQuNjM1LDQuNjI5SDkwLjIzNGMtMi41NSwwLTQuNjE5LTIuMDg3LTQuNjE5LTQuNjI5VjI4Ljg1OWMwLTIuNTQ4LDIuMDY5LTQuNjEzLDQuNjE5LTQuNjEzaDIxOS40MTF2NzAuMTgxICAgYzAsNi42ODIsNS40NDMsMTIuMDk5LDEyLjEyOSwxMi4wOTloNjMuMTk4VjQ0MS43MjN6IE0xMjguMzY0LDEyOC44OUgzMzQuMTVjNS4wMTMsMCw5LjA3OSw0LjA2Niw5LjA3OSw5LjA3OSAgIGMwLDUuMDEzLTQuMDY2LDkuMDc5LTkuMDc5LDkuMDc5SDEyOC4zNjRjLTUuMDEyLDAtOS4wNzktNC4wNjYtOS4wNzktOS4wNzlDMTE5LjI4NSwxMzIuOTU3LDEyMy4zNTIsMTI4Ljg5LDEyOC4zNjQsMTI4Ljg5eiAgICBNMzQzLjIyOSwxOTguOThjMCw1LjAxMi00LjA2Niw5LjA3OS05LjA3OSw5LjA3OUgxMjguMzY0Yy01LjAxMiwwLTkuMDc5LTQuMDY2LTkuMDc5LTkuMDc5czQuMDY3LTkuMDc5LDkuMDc5LTkuMDc5SDMzNC4xNSAgIEMzMzkuMTYzLDE4OS45MDEsMzQzLjIyOSwxOTMuOTY4LDM0My4yMjksMTk4Ljk4eiBNMzQzLjIyOSwyNTcuOTkzYzAsNS4wMTMtNC4wNjYsOS4wNzktOS4wNzksOS4wNzlIMTI4LjM2NCAgIGMtNS4wMTIsMC05LjA3OS00LjA2Ni05LjA3OS05LjA3OXM0LjA2Ny05LjA3OSw5LjA3OS05LjA3OUgzMzQuMTVDMzM5LjE2MywyNDguOTE0LDM0My4yMjksMjUyLjk4LDM0My4yMjksMjU3Ljk5M3ogICAgTTM0My4yMjksMzE4LjAxMWMwLDUuMDEzLTQuMDY2LDkuMDc5LTkuMDc5LDkuMDc5SDEyOC4zNjRjLTUuMDEyLDAtOS4wNzktNC4wNjYtOS4wNzktOS4wNzlzNC4wNjctOS4wNzksOS4wNzktOS4wNzlIMzM0LjE1ICAgQzMzOS4xNjMsMzA4LjkzMiwzNDMuMjI5LDMxMi45OTgsMzQzLjIyOSwzMTguMDExeiIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=") rgba(0, 0, 0, .13) no-repeat;
                background-position: 6px;
                background-size: 21px;
                &:hover{
                    text-decoration: none;
                    background-color: rgba(0, 0, 0, .3);
                }
            }
        }
    }
    .topics-list{
        margin: 0 -8px;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        li{
            width: calc( 100%/4);
            padding: 7px;
            list-style: none;
            a{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 15px;
                text-align: center;
                color: #fff;
                font-weight: bold;
                height: 100%;
                font-size: 16px;
                background: rgba(0, 0, 0, .13);
                border-radius: 5px;
                box-shadow: 0 3px 6px rgba(0, 0, 0, .3);
                i{
                    font-size: 22px;
                    margin-bottom: 15px;
                }
                &:hover{
                    text-decoration: none;
                    background-color: rgba(0, 0, 0, .3);
                }
            }
        }
    }
    .simple-list{
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        li{
            list-style: none;
            padding: 5px 0;
            width: 100%;
            a{
                color: #fff;
            }
        }
    }
</style>
