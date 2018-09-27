<template>
    <div class="curator-panel">
        <c-claim title="Content curated" type="success">
            <p>This page has been curatedby 2041 users</p>
            <a href="#3" class="btn btn-sm btn-outline-white">
                Become a curator
            </a>
        </c-claim>
        <c-claim title="Unclaimed Page" type="warning">
            <p>This page has been curatedby 2041 users</p>
            <c-switch label="Enable Curation Mode"/>
        </c-claim>
        <c-claim title="Some info">
            <p>This page has been curatedby 2041 users</p>
        </c-claim>
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
            'c-switch': (resolve) => require(['@/ui/components/switch'], resolve),
            'c-claim': (resolve) => require(['@/ui/components/curator-panel/claim.vue'], resolve)
        },
    }
</script>

<style lang="scss" scoped>
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
        color: #fff;
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
