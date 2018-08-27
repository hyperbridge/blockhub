<template>
    <div class="navigation" id="navigation-default">

        <h3 class="text-uppercase">STORE</h3>
        <ul class="store-menu margin-bottom-15">
            <li class="title">Store Home</li>
            <li>
                <a href="/#/store">
                    My Store
                </a>
            </li>
            <li>
                <a href="/#/dashboard">
                    Friends Store
                </a>
            </li>
        </ul>
        <ul class="genre-menu margin-bottom-15">
            <li class="title">
                <i class="fas fa-gamepad"></i>
                Browse By Genre
            </li>
            <li>
                <a onclick="filter({genre: 'action'})">
                    Action
                </a>
            </li>
            <li>
                <a href="filter({genre: 'adventure'})">
                    Adventure
                </a>
            </li>
            <li>
                <a href="filter({genre: 'rpg'})">
                    RPG
                </a>
            </li>
            <li>
                <a href="filter({genre: 'racing'})">
                    Racing
                </a>
            </li>
            <li>
                <a href="filter({genre: 'simulation'})">
                    Simulation
                </a>
            </li>
            <li>
                <a href="filter({genre: 'fighting'})">
                    Fighting
                </a>
            </li>
            <li>
                <a href="filter({genre: 'vr'})">
                    VR
                </a>
            </li>
            <li class="more">
                <a href="#">
                    MORE...
                </a>
            </li>
        </ul>

        <h3 class="text-uppercase">Search</h3>
        <div class="filter-blk">
            <c-searcher />
            <div class="form-group range-slider">
                <label for="communitySize">Community size</label>
                <input type="range" class="form-control-range" id="communitySize">
                <span class="result">Over 100.000 users</span>
            </div>
            <div class="form-group range-slider">
                <label for="activityUser">Activity User</label>
                <input type="range" class="form-control-range" id="activityUser">
                <span class="result">38%</span>
            </div>
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
            'c-searcher': () => import('@/ui/components/searcher')
        },
        data() {
            return {}
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
