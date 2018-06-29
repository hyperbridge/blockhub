<template>
    <!-- Header Module -->
    <header class="appHeader">
        <div class="appHeader-barLeft">
            <a href="#/store">
                <span class="fa fa-home"></span>
            </a>
            <a @click="$router.go(-1)">
                <span class="fa fa-arrow-left"></span>
            </a>
            <a @click="$router.go(+1)">
                <span class="fa fa-arrow-right"></span>
            </a>
        </div>
        <div class="appHeader-barCenter"><!-- add icons --></div>
        <div class="appHeader-barRight"><!-- add icons --></div>
        <nav class="appHeader-nav">
            <nav class="horizontal-navigation appHeader-navLeft">
                <button class="btn btn-light btn--icon" data-action="horizontal-show"><span class="fa fa-bars"></span> Toggle navigation</button>
                <ul>
                    <li>
                        <a href="#/store">
                            <span class="icon fa fa-shopping-bag"></span>
                            <span class="text">Store</span>
                        </a>
                    </li>
                    <li>
                        <a href="#/account/wallets">
                            <span class="icon fa fa-wallet"></span>
                            <span class="text">Wallets</span>
                        </a>
                    </li>
                    <li>
                        <a href="#/account/identities">
                            <span class="icon fa fa-id-card"></span>
                            <span class="text">Identities</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <a class="appHeader-navCenter" href="#/home">A</a>
            <nav class="horizontal-navigation appHeader-navRight">
                <button class="btn btn-light btn--icon" data-action="horizontal-show"><span class="fa fa-bars"></span> Toggle navigation</button>
                <ul>
                    <li>
                        <a href="#/identity/1">
                            <span class="icon fa fa-user"></span>
                            <span class="text">Satoshi</span>
                        </a>
                    </li>
                    <li>
                        <a href="#/identity/1/contacts">
                            <span class="icon fa fa-users"></span>
                            <span class="text">Contacts</span>
                        </a>
                    </li>
                    <li>
                        <a href="#/settings">
                            <span class="icon fa fa-cog"></span>
                            <span class="text">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#/account/signout">
                            <span class="icon fa fa-sign-out-alt"></span>
                            <span class="text">Sign Out</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </nav>
    </header>
    <!-- End Header Module -->
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
    .appHeader {
        position: fixed;
        top: 0;
        left: 0;
        background: none;
        padding: 0;
        z-index: 100;
        filter: drop-shadow(0 0px 15px rgba(48, 49, 76, 1));

        &::before {
            height: 10px;
            width: 100vw;
            display: block;
            content: '';
            background: #fff;
        }

        a {
            color: #fff;

            &:hover {
                text-decoration: none;
            }
        }

        i {
            display: inline-block;
            margin-right: 10px;
        }

        .horizontal-navigation > ul > li > a {
            padding: 0;
            margin: 0 0 0 17px;

            & > span.text {
                font-size: 16px;
                padding: 0;
                color: #fff;
            }
        }

        .horizontal-navigation > ul .icon {
            color: #fff;
            &.fa::before{
                font-size: 16px;
            }
        }
    }

    .appHeader-navCenter {
        position: absolute;
        top: -20px;
        left: 40%;
        width: 250px;
        height: 50px;
        text-indent: -9999px;
    }

    .appHeader-barLeft {
        position: absolute;
        top: 0;
        left: 0;
        height: 30px;
        width: 118px;
        padding-left: 10px;
        background: url(../../../assets/SVG/left-bar.svg) no-repeat top left;
        a{
            color:#30314C;
            display: inline-block;
            &:first-of-type{
                margin-right:15px;
            }
            &:last-of-type{
                margin-left:5px;
            }
        }
        .fa{
            line-height: 30px;
            font-size: 16px;
            
        }
    }

    .appHeader-barCenter {
        margin: -10px auto 0 auto;
        height: 50px;
        width: 258px;
        background: url(../../../assets/SVG/logo.svg) no-repeat center center/135px, url(../../../assets/SVG/center-bar.svg) no-repeat top left;
    }

    .appHeader-barRight {
        position: absolute;
        top: 0;
        right: 0;
        height: 30px;
        width: 66px;
        background: url(../../../assets/SVG/right-bar.svg) no-repeat top right;
    }

    .appHeader-nav {
        position: absolute;
        top: 20px;
        width: 100%;
        font-size: 15px;
        z-index: inherit;

        ul {
            padding: 0;
            display: inline;
            list-style: none;
        }
    }

    .appHeader-navLeft {
        float: left;
        margin: 0 0 0 95px;
    }

    .appHeader-navRight {
        float: right;
        margin: 0 65px 0 0;
    }

    .appHeader-navItem {
        display: inline-block;
        padding: 0;
        margin-right: 20px;
        font-weight: 100;
    }


    @media screen and (max-width: 1140px) {
        .appHeader-navItem span {
            display: none;
        }
    }

</style>