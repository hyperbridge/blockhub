<template>
  <div id="app" :class="{ 'disable-animations': !disableAnimations }">
    <router-view></router-view>
    <div class="fixed-panel invert" id="fixed_panel">
        <div class="fixed-panel__content scroll">
          <h5>Your Realms</h5>

          <a href="/#/realm/1">
              <span class="icon icon-letter-circle">C</span>
              <span class="text">Continuum</span>
          </a>
          <a href="/#/realm/1">
              <span class="icon icon-letter-circle">H</span>
              <span class="text">Hyperbridge</span>
          </a>
          <a href="/#/realm/1">
              <span class="icon icon-letter-circle">R</span>
              <span class="text">Ready Block One</span>
          </a>

          <a href="/#/profile/1/realms">See More...</a>

          <hr />

          <h5>Your Products</h5>
          <a href="/#/product/1">
              <span class="icon icon-letter-circle">B</span>
              <span class="text">BlockHub</span>
          </a>
          <a href="/#/product/1">
              <span class="icon icon-letter-circle">D</span>
              <span class="text">Dataforce</span>
          </a>
          <a href="/#/product/1">
              <span class="icon icon-letter-circle">R</span>
              <span class="text">Republic</span>
          </a>

          <a href="/#/profile/1/realms">See More...</a>

          <hr />

          <a href="/#/developer">
              <span class="icon fa fa-wrench"></span>
              <span class="text">Developer Area</span>
          </a>
          <a href="/#/realm/new">
              <span class="icon fa fa-plus"></span>
              <span class="text">New Realm</span>
          </a>
          <a href="/#/product/new">
              <span class="icon fa fa-plus"></span>
              <span class="text">New Product</span>
          </a>
          <a href="/#/project/new">
              <span class="icon fa fa-plus"></span>
              <span class="text">New Project</span>
          </a>

          <hr />

          <a href="/#/account">
              <span class="icon fa fa-user"></span>
              <span class="text">Account</span>
          </a>
          <a href="/#/account/identities">
              <span class="icon fa fa-id-card"></span>
              <span class="text">Identities</span>
          </a>
          <a href="/#/account/wallets">
              <span class="icon fa fa-credit-card"></span>
              <span class="text">Wallets</span>
          </a>

          <hr />

          <a href="/#/identity/1">
              <span class="icon fa fa-user"></span>
              <span class="text">Current Profile</span>
          </a>
          <a href="/#/identity/1/contacts">
              <span class="icon fa fa-users"></span>
              <span class="text">Contacts</span>
          </a>
          <a href="/#/account/activity">
              <span class="icon fa fa-list-alt"></span>
              <span class="text">Activity Log</span>
          </a>

          <hr />

          <a href="/#/settings">
              <span class="icon fa fa-cog"></span>
              <span class="text">Settings</span>
          </a>
          <a href="/#/account/signout">
              <span class="icon fa fa-sign-out-alt"></span>
              <span class="text">Sign Out</span>
          </a>

            <!--Global Bottom banner-->
            <div class="developer_banner">
                <div class="img">
                    <img src="data:image/png;base64,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" />
                </div>
                <div class="text">
                    <h3>Are you a developer?</h3>
                    <p>Start developing for blockchain with BlockHub SDK</p>
                    <a href="#3" class="btn btn-sm btn-info">Start Developing</a>
                    <a href="#3" class="btn btn-sm btn-default">Start Developing</a>
                </div>
            </div>
            <div class="d-flex justify-content-start">
                <div class="dev_blk become_dev active">
                    <h5><i class="fas fa-code"></i>Become Developer</h5>
                    <ul>
                        <li>
                            <a href="#">
                                <i class="fas fa-list-alt"></i>
                                Fill the Applocation
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-info-circle"></i>
                                Developer F.A.Q.
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="dev_blk is_dev">
                    <h5><i class="fas fa-code"></i>Developer</h5>
                    <ul>
                        <li>
                            <a href="#">
                                <i class="fas fa-list-alt"></i>
                                My Content
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-info-circle"></i>
                                Payment Settings
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-users"></i>
                                User Inquiries
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-table"></i>
                                QoS Dashboard
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
      </div>
    </div>
    <div id="backdrop" class="backdrop"></div>
    <vue-snotify></vue-snotify>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

  export default {
    name: 'app',
    props: ['data'],
    updated() {
      $('body').off('click').on('click', "[data-action='fixedpanel-toggle']", (e) => {
        let panel = $('#fixed_panel')
        let backdrop = $('#backdrop')

        this.$snotify.info("Test", "Sidebar toggled", {})

        if ($('body').hasClass('show-sidebar')) {
          $('body').removeClass('show-sidebar')
          $(e.target).removeClass('fa-times').addClass('fa-cog')
        }
        else {
          $('body').addClass('show-sidebar')
          $(e.target).removeClass('fa-cog').addClass('fa-times')
        }
      })
    },
    computed: {
        disableAnimations() {
            return this.$store.state.user.settings.animations;
        }
    },
    methods: mapActions(['loadSettings']),
    mounted() {
        this.loadSettings();
    },
    watch: {
      $route (to, from) {
          $('body').removeClass('show-sidebar')
          $('[data-action="fixedpanel-toggle"] span').removeClass('fa-times').addClass('fa-cog')
      }
    }
  }
</script>

<style lang="scss" scoped>
    .fixed-panel{
        width: 540px;
        right: -540px;
        overflow-y: auto;
        min-height: 100%;
    }
    .developer_banner{
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#f9d972+0,f7bf77+100 */
        background: #f9d972; /* Old browsers */
        background: -moz-linear-gradient(left, #f9d972 0%, #f7bf77 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(left, #f9d972 0%,#f7bf77 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to right, #f9d972 0%,#f7bf77 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f9d972', endColorstr='#f7bf77',GradientType=1 ); /* IE6-9 */
        display: flex;
        padding: 20px;
        width: 500px;
        justify-content: space-between;
        align-items: center;
        color: #3D3E5D;
        font-size: 14px;
        margin: 25px 0;
        overflow: hidden;
        .img{
            margin-right: 15px;
            img{
                height: 80px;
                width: auto;
            }
        }
        h3{
            font-size: 21px;
            padding: 0;
            margin: 0 0 3px;
            color: #3D3E5D;
        }
        .btn{
            text-transform: uppercase;
            font-weight: bold;
            border-radius: 3px;
            border: none;
            margin-right: 10px;
            &.btn-default{
                background: #3D3E5D;
                color: #fff;
                &:hover{
                    background: #50527b;
                }
            }
        }
    }
    .dev_blk{
        display: inline-block;
        float: left;
        width: auto;
        max-width: 50%;
        opacity: .3;
        pointer-events: none;
        margin-right: 35px;
        &.active{
            pointer-events: unset;
            opacity: 1;
        }
        h5{
            font-weight: bold;
            padding: 0;
            margin: 0;
            i{
                margin-right: 5px;
            }
        }
        ul{
            padding: 0;
            margin: 5px 0 10px 0;
            display: inline-block;
            li{
                list-style: none;
                display: block;
                width: 100%;
                a{
                    color: #fff;
                    text-decoration: none;
                    i{
                        color: #A2A3BE;
                        margin-right: 3px;
                        width: 18px;
                    }
                }
            }
        }
    }
</style>

<style lang="scss">
    .disable-animations {
        *, *::before, *::after {
            transition: none !important;
            transform: none !important;
            animation: none !important;
        }
    }
</style>
