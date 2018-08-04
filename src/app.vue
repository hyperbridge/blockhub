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

          <a href="/#/account">
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


<!--           
          <p class="margin-bottom-20">Use this panel to configure template settings and layout options.</p>
          <div class="form-group">
              <div class="custom-control custom-checkbox margin-bottom-30"><input type="checkbox" class="custom-control-input" id="rw_settings_show"><label class="custom-control-label" for="rw_settings_show">Disable auto show template settings</label></div>
          </div>
          <div class="divider divider--sm"></div>
          <h5 class="margin-top-30">Layout option</h5>
          <div class="form-group"><select class="custom-select margin-bottom-20" id="rw_settings_layout"><option value="default">Default</option><option value="boxed">Boxed</option><option value="indent">Indent</option></select></div>
          <div class="d-none" id="rw_settings_layout_boxed_group">
              <div class="custom-control custom-checkbox margin-bottom-10"><input type="checkbox" class="custom-control-input" id="rw_settings_layout_boxed_vspace"><label class="custom-control-label" for="rw_settings_layout_boxed_vspace">Vertical spacing</label></div>
              <div class="custom-control custom-checkbox margin-bottom-10"><input type="checkbox" class="custom-control-input" id="rw_settings_layout_boxed_rounded"><label class="custom-control-label" for="rw_settings_layout_boxed_rounded">Rounded corners</label></div>
              <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="rw_settings_layout_boxed_shadowed"><label class="custom-control-label" for="rw_settings_layout_boxed_shadowed">Add shadows</label></div>
          </div>
          <div class="d-none" id="rw_settings_layout_indent_group">
              <div class="d-none" id="rw_settings_layout_indent_header_group">
                  <div class="custom-control custom-checkbox margin-bottom-10"><input type="checkbox" class="custom-control-input" id="rw_settings_layout_indent_header"><label class="custom-control-label" for="rw_settings_layout_indent_header">Single header</label></div>
                  <div class="custom-control custom-checkbox margin-bottom-10"><input type="checkbox" class="custom-control-input" id="rw_settings_layout_indent_header_relative"><label class="custom-control-label" for="rw_settings_layout_indent_header_relative">Relative header</label></div>
              </div>
              <div class="d-none" id="rw_settings_layout_indent_container">
                  <div class="custom-control custom-checkbox margin-bottom-10"><input type="checkbox" class="custom-control-input" id="rw_settings_layout_indent_container_single"><label class="custom-control-label" for="rw_settings_layout_indent_container_single">Single page container</label></div>
              </div>
              <div class="custom-control custom-checkbox margin-bottom-10"><input type="checkbox" class="custom-control-input" id="rw_settings_layout_indent_rounded"><label class="custom-control-label" for="rw_settings_layout_indent_rounded">Rounded corners</label></div>
              <div class="custom-control custom-checkbox margin-bottom-10"><input type="checkbox" class="custom-control-input" id="rw_settings_layout_indent_shadowed"><label class="custom-control-label" for="rw_settings_layout_indent_shadowed">Add shadows</label></div>
              <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="rw_settings_layout_indent_move_heading"><label class="custom-control-label" for="rw_settings_layout_indent_move_heading">Heading under header (relative header)</label></div>
          </div>
          <div class="d-none" id="rw_settings_layout_bgs_group">
              <h5 class="margin-top-30">Backgrounds</h5>
              <div class="bg-examples margin-bottom-20" id="rw_settings_layout_bgs">
                  <div class="bg-gradient-1" data-toggle="tooltip" data-placement="top" title="bg-gradient-1"></div>
                  <div class="bg-gradient-2" data-toggle="tooltip" data-placement="top" title="bg-gradient-2"></div>
                  <div class="bg-gradient-3" data-toggle="tooltip" data-placement="top" title="bg-gradient-3"></div>
                  <div class="bg-gradient-4" data-toggle="tooltip" data-placement="top" title="bg-gradient-4"></div>
                  <div class="bg-gradient-5" data-toggle="tooltip" data-placement="top" title="bg-gradient-5"></div>
                  <div class="bg-gradient-6" data-toggle="tooltip" data-placement="top" title="bg-gradient-6"></div>
                  <div class="bg-gradient-7" data-toggle="tooltip" data-placement="top" title="bg-gradient-7"></div>
                  <div class="bg-gradient-8" data-toggle="tooltip" data-placement="top" title="bg-gradient-8"></div>
                  <div class="bg-gradient-9" data-toggle="tooltip" data-placement="top" title="bg-gradient-9"></div>
                  <div class="bg-gradient-10" data-toggle="tooltip" data-placement="top" title="bg-gradient-10"></div>
              </div>
          </div>
          <div class="" id="rw_settings_header_opt_group">
              <div class="divider divider--sm"></div>
              <h5 class="margin-top-30">Header options</h5>
              <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="rw_settings_header_fixed"><label class="custom-control-label" for="rw_settings_header_fixed">Fixed header</label></div>
              <div class="custom-control custom-checkbox margin-bottom-20"><input type="checkbox" class="custom-control-input" id="rw_settings_header_invert"><label class="custom-control-label" for="rw_settings_header_invert">Invert style</label></div>
          </div>
          <div class="d-none" id="rw_settings_container_opt_group">
              <div class="divider divider--sm"></div>
              <h5 class="margin-top-30">Container</h5>
              <div class="custom-control custom-checkbox margin-bottom-20"><input type="checkbox" class="custom-control-input" id="rw_settings_container_invert"><label class="custom-control-label" for="rw_settings_container_invert">Invert style</label></div>
          </div>
          <div class="" id="rw_settings_navigation_opt_group">
              <div class="divider divider--sm"></div>
              <h5 class="margin-top-30">Navigation options</h5>
              <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="rw_settings_nav_minimized"><label class="custom-control-label" for="rw_settings_nav_minimized">Minimized navigation</label></div>
              <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="rw_settings_nav_hidden"><label class="custom-control-label" for="rw_settings_nav_hidden">Hidden navigation</label></div>
              <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="rw_settings_nav_fixed"><label class="custom-control-label" for="rw_settings_nav_fixed">Fixed navigation</label></div>
              <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="rw_settings_nav_invert"><label class="custom-control-label" for="rw_settings_nav_invert">Invert style</label></div>
              <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="rw_settings_nav_vmiddle"><label class="custom-control-label" for="rw_settings_nav_vmiddle">Vertical middle position</label></div>
              <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="rw_settings_nav_condensed"><label class="custom-control-label" for="rw_settings_nav_condensed">Condensed navigation</label></div>
              <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="rw_settings_nav_custom"><label class="custom-control-label" for="rw_settings_nav_custom">Custom navigation</label></div>
              <div class="custom-control custom-checkbox margin-bottom-20"><input type="checkbox" class="custom-control-input" id="rw_settings_nav_cpanel"><label class="custom-control-label" for="rw_settings_nav_cpanel">Remove control panel</label></div>
          </div>
          <div class="" id="rw_settings_sidepanel_opt_group">
              <div class="divider divider--sm"></div>
              <h5 class="margin-top-30">Sidepanel options</h5>
              <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="rw_settings_sidepanel_hidden"><label class="custom-control-label" for="rw_settings_sidepanel_hidden">Hide sidepanel</label></div>
              <div class="custom-control custom-checkbox margin-bottom-20"><input type="checkbox" class="custom-control-input" id="rw_settings_sidepanel_invert"><label class="custom-control-label" for="rw_settings_sidepanel_invert">Invert style</label></div>
          </div>
          <div class="divider divider--sm"></div>
          <h5 class="margin-top-30">Content options</h5>
          <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="rw_settings_content_fluid"><label class="custom-control-label" for="rw_settings_content_fluid">Fluid container</label></div>
          <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="rw_settings_content_invert"><label class="custom-control-label" for="rw_settings_content_invert">Invert content</label></div> -->
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
      $('body').on('click', "[data-action='fixedpanel-toggle']", function(e) {
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
