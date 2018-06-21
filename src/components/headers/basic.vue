<template>
    <!-- Header Module -->
    <header class="appHeader">
        <div class="appHeader-barLeft"><!-- add icons --></div>
        <div class="appHeader-barCenter"><!-- add icons --></div>
        <div class="appHeader-barRight"><!-- add icons --></div>
        <nav class="appHeader-nav">
            
            <nav class="horizontal-navigation appHeader-navLeft">
                <button class="btn btn-light btn--icon" data-action="horizontal-show"><span class="fa fa-bars"></span> Toggle navigation</button>
                
                <ul>
                    <li>
                        <a href="solutions-banking-main.html">
                            <span class="icon li-man"></span>
                            <span class="text">Store</span>
                        </a>
                    </li>
                    <li>
                        <a href="solutions-banking-cards.html">
                            <span class="icon li-credit-card"></span>
                            <span class="text">Contacts</span>
                        </a>
                    </li>
                    <li>
                        <a href="solutions-banking-activity.html">
                            <span class="icon li-sync"></span>
                            <span class="text">Wallets</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="icon li-wallet"></span>
                            <span class="text">Identities</span>
                        </a>
                    </li>
                </ul>
                
            </nav>


            <nav class="horizontal-navigation appHeader-navRight">
                <button class="btn btn-light btn--icon" data-action="horizontal-show"><span class="fa fa-bars"></span> Toggle navigation</button>
                
                <ul>
                    <li>
                        <a href="solutions-banking-main.html">
                            <span class="icon li-man"></span>
                            <span class="text">Store</span>
                        </a>
                    </li>
                    <li>
                        <a href="solutions-banking-cards.html">
                            <span class="icon li-credit-card"></span>
                            <span class="text">Contacts</span>
                        </a>
                    </li>
                    <li>
                        <a href="solutions-banking-activity.html">
                            <span class="icon li-sync"></span>
                            <span class="text">@JohnDoe</span>
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
            margin: 0;

            & > span.text {
                font-size: 16px;
                padding: 0;
                color: #fff;
            }
        }
    }

    .appHeader-barLeft {
        position: absolute;
        top: 0;
        left: 0;
        height: 30px;
        width: 118px;
        background: url(../../assets/SVG/left-bar.svg) no-repeat top left;
    }

    .appHeader-barCenter {
        margin: -10px auto 0 auto;
        height: 50px;
        width: 258px;
        background: url(../../assets/SVG/logo.svg) no-repeat center center/135px, url(../../assets/SVG/center-bar.svg) no-repeat top left;
    }

    .appHeader-barRight {
        position: absolute;
        top: 0;
        right: 0;
        height: 30px;
        width: 66px;
        background: url(../../assets/SVG/right-bar.svg) no-repeat top right;
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
        margin: 0 0 0 90px;
    }

    .appHeader-navRight {
        float: right;
        margin: 0 50px 0 0;
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