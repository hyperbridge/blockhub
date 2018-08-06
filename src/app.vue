<template>
  <div id="app">
    <router-view></router-view>
    <div class="fixed-panel invert" id="fixed_panel">
        <div class="fixed-panel__content scroll" style="max-height: 100%">
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
      </div>
    </div>
    <div id="backdrop" class="backdrop"></div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    props: ['data'],
    updated() {
      $('body').off('click').on('click', "[data-action='fixedpanel-toggle']", function(e) {
        let panel = $('#fixed_panel')
        let backdrop = $('#backdrop')

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
    watch: {
      $route (to, from) {
          $('body').removeClass('show-sidebar')
          $('[data-action="fixedpanel-toggle"] span').removeClass('fa-times').addClass('fa-cog')
      }
    } 
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Barlow', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 926px;
      background: url(/static/img/product-bg-fade.png);
      background-size: contain;
      background-position: 0 383px;
      z-index: 0;
    }
  }

  #fixed_panel {
    z-index: 12;
    background: #1C2032;
    border: 0 none;
    border-left: 1px solid rgba(255, 255, 255, 0.07);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

    .fixed-panel__content {
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      padding-top: 60px;

      > p {
          color: #fff;
      }

      > a {
          display: block;
          margin-left: 10px;
          margin-bottom: 5px;
          font-size: 15px;
          color: #fff;
      }

      h5 {
          font-size: 15px;
      }

      hr {
          border-top: 1px solid #fff !important;
          width: 100%;
          margin: 10px 0;
      }
    }

    body.show-sidebar & {
      right: 0px;
    }
  }

  .icon {
    width: 20px;
    height: 20px;
    text-align: center;
    margin-right: 5px;
    float: left;
  }

  .icon-letter-circle {
    background: #3f87b8;
    border-radius: 20px;
    color: #fff;
    font-weight: bold;
    font-size: 11px;
  }

  #backdrop {
    z-index: 11;
    display: none;
    background: rgba(0, 0, 0, 0.5);

    body.show-sidebar & {
      display: block;
    }
  }

  .page .page__content {
    body.show-sidebar & {
      filter: blur(5px);
    }
  }


</style>
