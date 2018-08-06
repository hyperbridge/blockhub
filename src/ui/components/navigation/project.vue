
<template>
    <div class="navigation" id="navigation-default">
        <h3 style="margin-bottom: 58px">GAME</h3>
        <ul>
            <li class="title"><span class="icon fas fa-question-circle"></span>Help</li>
            <li>
                <a href="#">
                    Building Communities
                </a>
            </li>
            <li>
                <a href="#">
                    Suggesting Features
                </a>
            </li>
            <li>
                <a href="#">
                    Voting &amp; Curating Updates
                </a>
            </li>
            <li class="more">
                <a href="#">
                    MORE...
                </a>
            </li>
        </ul>

        <div class="sidebar-card margin-top-40">
            <h4>
                <i class="fas fa-check"></i>
                Content curated
            </h4>
            <p>This page has been curatedby 2041 users</p>
            <a href="#3" class="btn btn-sm btn-outline-white">
                Become a curator
            </a>
        </div>
        <div class="sidebar-card margin-top-40">
            <h4 class="warning-ttl">
                <i class="fas fa-exclamation-triangle"></i>
                Unclaimed Page
            </h4>
            <p>This page has been curatedby 2041 users</p>
            <a href="#3" class="btn btn-sm btn-warning">
                Become a curator
            </a>
        </div>
        <div class="sidebar-card margin-top-40">
            <h4 class="danger-ttl">
                <i class="fas fa-times"></i>
                Unclaimed Page
            </h4>
            <p>This page has been curatedby 2041 users</p>
            <div class="d-flex align-items-center">
                <label class="switch switch-sm my-0 mr-3">
                    <input type="checkbox" name="switch_8" checked="" value="false">
                    <span></span>
                </label>
                <span>Enable Curation Mode</span>
            </div>
        </div>
        <div class="sidebar-panel">
            <h3>Curator panel</h3>
            <p>Other 1023 curators have
            curated this products.</p>
            <ul>
                <li>
                    <strong>492</strong>
                    Approved with 0 changes
                </li>
                <li>
                    <strong>132</strong>
                    Approved with at least 1 change requested
                </li>
                <li>
                    <strong>32</strong>
                    Disapproved with requests
                </li>
                <li>
                    <strong>23</strong>
                    Disapproved with 0 changes
                </li>
            </ul>
        </div>
        <div class="sidebar-panel">
            <p>
                <strong>
                    You can view this game
                    because it was approved by
                    10 curators.
                </strong>
            </p>
            <p>
                <strong>
                    Want to become a curator?
                </strong>
                <br>
                Curation will become
                available to you once you
                have met certain reputation criteria:
            </p>
            <p>
                <strong>
                    40 Reviews
                </strong>
                <br>
                <strong>
                    1000 Reputation
                </strong>
            </p>
        </div>

    </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
    .sidebar-card{
        display: inline-block;
        width: 100%;
        float: left;
        overflow: hidden;
        h4{
            font-weight: bold;
            font-size: 14px;
            margin-bottom: 5px;
            i{
                margin-right: 5px;
            }
            &.warning-ttl{
                color: #FADC72;
            }
            &.danger-ttl{
                color: #F75D5D;
            }
        }
        p{
            line-height: 18px;
        }
        .btn-sm{
            padding: 2px 5px;
            line-height: 16px;
            font-size: 12px;
        }
        .btn-warning{
            background: #FADC72;
            color: #30304B;
            font-weight: bold;
            font-size: 13px;
            &:hover{
                background: #d2b95f;
                color: #30304B;
            }
        }
    }
    .sidebar-panel{
        display: inline-block;
        width: calc( 100% + 30px );
        margin: 40px 0 0 -30px;
        background: rgba(0, 0, 0, .13);
        border-radius: 0 5px 5px 0;
        border: 1px solid rgba(0, 0, 0, .5);
        padding: 15px 15px 15px 30px;
        overflow: hidden;
        border-left: none;
        h3{
            font-size: 21px;
            color: #FFFFFF;
            margin: 0;
            padding: 0 0 10px;
            opacity: 1;
            font-weight: bold;
        }
        ul{
            padding: 0;
            margin: 10px 0;
            width: 100%;
            li{
                list-style: none;
                display: block;
                padding: 2px 0;
                border-bottom: 1px solid rgba(255, 255, 255, .02);
            }
        }
    }
</style>
