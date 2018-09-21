<template>
    <div class="navigation" id="navigation-default">

        <c-sidebar-menu title="STORE" sub_title="Store Home" mClass="margin-bottom-20">
            <c-sidebar-menu-link url="/#/store" link_text="My Store" />
            <c-sidebar-menu-link url="/#/dashboard" link_text="Friends Store" />
        </c-sidebar-menu>

        <c-sidebar-menu sub_title="Browse By Genre" sub_icon="fas fa-gamepad" mClass="margin-bottom-20">
            <c-sidebar-menu-link url="#3" click="filter({genre: 'action'})" link_text="Action" />
            <c-sidebar-menu-link url="#3" click="filter({genre: 'adventure'})" link_text="Adventure" />
            <c-sidebar-menu-link url="#3" click="filter({genre: 'rpg'})" link_text="RPG" />
            <c-sidebar-menu-link url="#3" click="filter({genre: 'racing'})" link_text="Racing" />
            <c-sidebar-menu-link url="#3" click="filter({genre: 'fighting'})" link_text="Fighting" />
            <c-sidebar-menu-link url="#3" click="filter({genre: 'vr'})" link_text="VR" />
            <c-sidebar-menu-link url="#3" aClass="font-weight-bold" link_text="MORE ..." />
        </c-sidebar-menu>


        <h3 class="text-uppercase">Search</h3>
        <div class="filter-blk">
            <c-searcher class="margin-bottom-20" />

            <c-range-slider label="Community size" :min="1" :max="10000" sClass="margin-bottom-20" />

            <c-range-slider label="Activity User" :min="1" :max="5000" sClass="margin-bottom-20" />

            <div class="form-group platform-chose">
                <label>Platform Availability</label>
                <a href="#3">
                    <i class="fab fa-windows"></i>
                </a>
                <a href="#3">
                    <i class="fab fa-apple"></i>
                </a>
                <a href="#3">
                    <i class="fab fa-linux"></i>
                </a>
            </div>
            <div class="action">
                <a href="#3" class="btn btn-filter">
                    <i class="fas fa-filter"></i>
                    Filter
                </a>
                <a href="#3" class="btn btn-link">
                    More filters ...
                </a>
            </div>
        </div>


        <ul class="help-block">
            <li class="title">
                <i class="fas fa-question-circle"></i>
                Help
            </li>
            <li>
                Buying with Cryptocurrency
                Content Availability byCountry
                Becoming a Store Curator
                18+ Games and Indentity Proof
                Report Misleading Content
            </li>
            <li>
                <a href="#3" class="btn btn-link">
                    More ...
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        components: {
            'c-sidebar-menu-link': (resolve) => require(['@/ui/components/sidebar-menu/menu_item'], resolve),
            'c-sidebar-menu': (resolve) => require(['@/ui/components/sidebar-menu/index'], resolve),
            'c-searcher': (resolve) => require(['@/ui/components/searcher'], resolve),
            'c-range-slider': (resolve) => require(['@/ui/components/range-slider'], resolve)
        },
        data() {
            return {}
        },
        methods:{
            filter: function () {
                alert('Click')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .filter-blk {
        .form-group{
            margin-bottom: 10px;
        }
        label {
            font-size: 14px;
            font-weight: bold;
            color: #fff;
        }
        .result {
            font-size: 14px;
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
                width: 8px;
                height: 8px;
                background: #FFFFFF;
                cursor: pointer;
                box-shadow: 0 0 2px rgba(0, 0, 0, .6);
            }

            &::-moz-range-thumb {
                width: 8px;
                height: 8px;
                background: #FFFFFF;
                cursor: pointer;
                box-shadow: 0 0 2px rgba(0, 0, 0, .6);
            }
        }
        .platform-chose{
            margin-bottom: 15px;
            display: block;
            text-align: left;
            label{
                display: block;
                margin-bottom: 13px;
            }
            a{
                display: inline-block;
                font-size: 22px;
                color: #fff;
                margin-right: 10px;
            }
        }
        .action{
            margin: 20px 0;
            a{
                text-transform: uppercase;
                font-weight: bold;
                color: #fff;
                padding: 4px 10px;
                &.btn-filter{
                    background: #5D75F7;
                    color: #fff;
                    border-radius: 3px;
                }
                &:first-child{
                    margin-right: 15px;
                }
            }
        }
    }
    .help-block{
        li{
            .btn-link{
                color: #fff;
                text-transform: uppercase;
                padding: 3px 0;
                width: auto;
                font-weight: bold;
                font-size: 13px;
                &:hover{
                    background: transparent;
                    color: #fff;
                }
            }
        }
    }
</style>
