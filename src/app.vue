<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue"

export default Vue.extend({
  name: 'app',
  created() {
    window.initBlockHub = function() {
      import('./framework/ethereum').then(c => c.init())
      import('./framework/peer').then(c => c.init())
    }
    
    window.initBlockHubSettings = function() {
      var settings = {    
          showSettings: function(){
              return;
              
              var fixed_panel = document.getElementById("fixed_panel");
              
              var showSettingsCheckbox = document.getElementById("rw_settings_show");
              
              showSettingsCheckbox.addEventListener("change",function(e){
                  sessionStorage.setItem("showSettings", e.target.checked);            
              });        
              
              if (!sessionStorage.getItem("showSettings") || sessionStorage.getItem("showSettings") === 'false') {        
                  
                  setTimeout(function(){

                      if(!fixed_panel.classList.contains("show")){
                          var btn = document.querySelector("[data-action='fixedpanel-toggle']");        
                          btn.click();
                      }

                  },2000);        
                  
              }else{
                  showSettingsCheckbox.checked = true;
              }
              
              return false;
          },
          vars: {
              body: document.body,
              page: document.getElementsByClassName("page")[0],
              page_header: document.getElementsByClassName("page__header")[0],
              page_container: document.getElementsByClassName("page__container")[0],
              page_sidepanel: document.getElementById("page-sidepanel"),
              page_content: document.getElementById("page-content"),
              content: document.getElementById("content"),
              page_aside: document.getElementById("page-aside"),
              page_aside_navigation: document.getElementById("navigation-default"),
              
              s_layout: document.getElementById("rw_settings_layout"),
              
              s_layout_gb: document.getElementById("rw_settings_layout_boxed_group"),
                  s_layout_gb_vspace:     document.getElementById("rw_settings_layout_boxed_vspace"),
                  s_layout_gb_rounded:    document.getElementById("rw_settings_layout_boxed_rounded"),
                  s_layout_gb_shadowed:   document.getElementById("rw_settings_layout_boxed_shadowed"),
                                          
              s_layout_gi: document.getElementById("rw_settings_layout_indent_group"),
                  s_layout_gi_header_group:    document.getElementById("rw_settings_layout_indent_header_group"),            
                  s_layout_gi_header:          document.getElementById("rw_settings_layout_indent_header"),
                  s_layout_gi_header_relative: document.getElementById("rw_settings_layout_indent_header_relative"),
                  s_layout_gi_container:       document.getElementById("rw_settings_layout_indent_container"),
                  s_layout_gi_container_single:document.getElementById("rw_settings_layout_indent_container_single"),
                  s_layout_gi_rounded:         document.getElementById("rw_settings_layout_indent_rounded"),
                  s_layout_gi_shadowed:        document.getElementById("rw_settings_layout_indent_shadowed"),
                  s_layout_gi_move_heading:    document.getElementById("rw_settings_layout_indent_move_heading"),
              
              s_layout_gbg: document.getElementById("rw_settings_layout_bgs_group"),
              
              s_header_opt_group: document.getElementById("rw_settings_header_opt_group"),
              s_header:           document.getElementById("rw_settings_header_fixed"),
              s_header_invert:    document.getElementById("rw_settings_header_invert"),
              
              s_container_opt_group:  document.getElementById("rw_settings_container_opt_group"),
              s_container_invert:     document.getElementById("rw_settings_container_invert"),
              
              
              s_sidepanel_opt_group: document.getElementById("rw_settings_sidepanel_opt_group"),
              s_sidepanel:        document.getElementById("rw_settings_sidepanel_hidden"),
              s_sidepanel_invert: document.getElementById("rw_settings_sidepanel_invert"),
              
              s_content:          document.getElementById("rw_settings_content_fluid"),
              s_content_invert:   document.getElementById("rw_settings_content_invert"),
              
              s_nav_opt_group:    document.getElementById("rw_settings_navigation_opt_group"),
              s_nav_min:          document.getElementById("rw_settings_nav_minimized"),
              s_nav_hid:          document.getElementById("rw_settings_nav_hidden"),
              s_nav_fix:          document.getElementById("rw_settings_nav_fixed"),
              s_nav_invert:       document.getElementById("rw_settings_nav_invert"),
              s_nav_vmiddle:      document.getElementById("rw_settings_nav_vmiddle"),
              s_nav_condensed:    document.getElementById("rw_settings_nav_condensed"),
              s_nav_cpanel:       document.getElementById("rw_settings_nav_cpanel"),
              
              bgs: ["bg-gradient-1","bg-gradient-2","bg-gradient-3","bg-gradient-4","bg-gradient-5","bg-gradient-6","bg-gradient-7","bg-gradient-8","bg-gradient-9","bg-gradient-10"]
          },
          init: function(){
              
              settings.showSettings();
              settings.detect_states();
              settings.add_events();
              
          },
          add_events: function(){
              
              // change layout type
              settings.vars.s_layout.addEventListener("change",function(e){
                  if(e.target.value === "default"){
                      
                      settings.vars.s_layout_gb.classList.remove("d-block");
                      settings.vars.s_layout_gi.classList.remove("d-block");
                      settings.vars.s_layout_gb.classList.add("d-none");
                      settings.vars.s_layout_gi.classList.add("d-none");
                      
                      settings.vars.s_layout_gbg.classList.add("d-none");
                      
                      // remove all layout classes
                      settings.vars.body.classList.remove("indent");
                      settings.vars.body.classList.remove("indent--single-header");
                      settings.vars.body.classList.remove("indent--single-container");
                      settings.vars.body.classList.remove("indent--relative-header");
                      settings.vars.body.classList.remove("indent--rounded");
                      settings.vars.body.classList.remove("indent--shadowed");
                      
                      settings.vars.body.classList.remove("boxed");
                      settings.vars.body.classList.remove("boxed--vspace");
                      settings.vars.body.classList.remove("boxed--rounded","boxed--shadowed");
                      settings.vars.body.classList.remove("boxed--shadowed");
                      
                      
                      settings.vars.s_layout_gb_vspace.checked = false;
                      settings.vars.s_layout_gb_rounded.checked = false;
                      settings.vars.s_layout_gb_shadowed.checked = false;
                      
                      settings.vars.s_layout_gi_header.checked = false;
                      settings.vars.s_layout_gi_header_relative.checked = false;
                      settings.vars.s_layout_gi_rounded.checked = false;
                      settings.vars.s_layout_gi_shadowed.checked = false;
                      
                      settings.vars.s_nav_vmiddle.disabled = true;
                      settings.vars.s_content_invert.checked = true;
                      
                      var page_heading = settings.vars.page.querySelectorAll(".page-heading")[0];
                      if(page_heading){
                          page_heading.querySelectorAll(".breadcrumb")[0].classList.remove("d-none");
                          settings.vars.content.insertBefore(page_heading, settings.vars.content.firstChild);
                      }
                      settings.vars.s_layout_gi_move_heading.checked = false;
                  }
                  if(e.target.value === "boxed"){
                      
                      settings.vars.s_layout_gb.classList.remove("d-none");
                      settings.vars.s_layout_gb.classList.add("d-block");                
                      settings.vars.s_layout_gi.classList.remove("d-block");
                      settings.vars.s_layout_gi.classList.add("d-none");
                      
                      settings.vars.s_layout_gbg.classList.remove("d-none");
                      
                      settings.vars.body.classList.remove("indent");
                      settings.vars.body.classList.remove("indent--single-header");
                      settings.vars.body.classList.remove("indent--single-container");
                      settings.vars.body.classList.remove("indent--relative-header");
                      settings.vars.body.classList.remove("indent--rounded");
                      settings.vars.body.classList.remove("indent--shadowed");
                      
                      settings.vars.s_layout_gi_header.checked = false;
                      settings.vars.s_layout_gi_header_relative.checked = false;
                      settings.vars.s_layout_gi_rounded.checked = false;
                      settings.vars.s_layout_gi_shadowed.checked = false;
                      settings.vars.s_layout_gi_move_heading.disabled = true;
                      
                      settings.vars.s_nav_vmiddle.disabled = true;
                      
                      if(settings.vars.page_aside)
                          settings.vars.page_aside.classList.remove("navigation--vertical-middle");
                      
                      var page_heading = settings.vars.page.querySelectorAll(".page-heading")[0];
                      if(page_heading){
                          page_heading.querySelectorAll(".breadcrumb")[0].classList.remove("d-none");
                          settings.vars.content.insertBefore(page_heading, settings.vars.content.firstChild);
                      }
                      settings.vars.s_layout_gi_move_heading.checked = false;
                      
                      // add layout classes
                      settings.vars.body.classList.add("boxed");
                      
                      // fix height
                      app._crt();
                  }
                  if(e.target.value === "indent"){
                      settings.vars.s_layout_gi.classList.remove("d-none");
                      settings.vars.s_layout_gi.classList.add("d-block");                
                      
                      settings.vars.s_layout_gbg.classList.remove("d-none");
                      
                      if(settings.vars.page_header){
                          settings.vars.s_layout_gi_header_group.classList.remove("d-none");
                      }
                      
                      settings.vars.s_layout_gi_move_heading.disabled = true;
                      settings.vars.s_nav_vmiddle.disabled = true;
                      
                      if(settings.vars.page_aside)
                          settings.vars.page_aside.classList.remove("navigation--vertical-middle");
                      
                      settings.vars.s_layout_gb.classList.remove("d-block");
                      settings.vars.s_layout_gb.classList.add("d-none");
                      
                      settings.vars.body.classList.remove("boxed");
                      settings.vars.body.classList.remove("boxed--vspace");
                      settings.vars.body.classList.remove("boxed--rounded","boxed--shadowed");
                      settings.vars.body.classList.remove("boxed--shadowed");
                      
                      settings.vars.s_layout_gb_vspace.checked = false;
                      settings.vars.s_layout_gb_rounded.checked = false;
                      settings.vars.s_layout_gb_shadowed.checked = false;
                      
                      if(settings.vars.page.getElementsByClassName("page__container")[0]){
                          settings.vars.s_layout_gi_container.classList.remove("d-none");
                      }
                      
                      // add layout classes
                      settings.vars.body.classList.add("indent");
                      
                      // fix height
                      app._crt();
                  }
                  
                  // fire default window resize event // should be tested
                  app._fireResize();
                  
                  settings.detect_states();
                  
              });
              
              // boxed
              // boxed vertical spacing                
              settings.vars.s_layout_gb_vspace.addEventListener("change",function(e){
                  if(e.target.checked){
                      settings.vars.body.classList.add("boxed--vspace");
                  }else{
                      settings.vars.body.classList.remove("boxed--vspace");
                  }            
                  
                  // fix height
                  app._crt();
              });

              // boxed rounded 
              settings.vars.s_layout_gb_rounded.addEventListener("change",function(e){
                  if(e.target.checked){
                      settings.vars.body.classList.add("boxed--rounded");
                  }else{
                      settings.vars.body.classList.remove("boxed--rounded");
                  }            
              });
              
              // boxed rounded 
              settings.vars.s_layout_gb_shadowed.addEventListener("change",function(e){
                  if(e.target.checked){
                      settings.vars.body.classList.add("boxed--shadowed");
                  }else{
                      settings.vars.body.classList.remove("boxed--shadowed");
                  }            
              });
              
              
              // indent
              // indent single header
              settings.vars.s_layout_gi_header.addEventListener("change",function(e){
                  if(e.target.checked){
                      settings.vars.body.classList.add("indent--single-header");
                      settings.vars.s_layout_gi_move_heading.disabled = true;
                      settings.vars.s_layout_gi_header_relative.disabled = true;
                  }else{
                      settings.vars.body.classList.remove("indent--single-header");
                      settings.vars.s_layout_gi_header_relative.disabled = false;
                  }        
                  
                  // fix height
                  app._crt();
              });
              
              // indent relative header
              settings.vars.s_layout_gi_header_relative.addEventListener("change",function(e){
                  if(e.target.checked){
                      settings.vars.body.classList.add("indent--relative-header");
                      settings.vars.s_layout_gi_move_heading.disabled = false;
                      settings.vars.s_layout_gi_header.disabled = true;
                  }else{
                      settings.vars.body.classList.remove("indent--relative-header");
                      settings.vars.s_layout_gi_move_heading.disabled = true;
                      settings.vars.s_layout_gi_header.disabled = false;
                      
                      var page_heading = settings.vars.page.querySelectorAll(".page-heading")[0];
                      
                      var breadcrumb = page_heading.querySelectorAll(".breadcrumb")[0];
                      if(breadcrumb){
                          breadcrumb.classList.remove("d-none");
                      }
                      
                      settings.vars.content.insertBefore(page_heading, settings.vars.content.firstChild);
                  } 
                  
                  // fix height
                  app._crt();
              });
              
              // indent single page container
              settings.vars.s_layout_gi_container_single.addEventListener("change",function(e){
                  if(e.target.checked){
                      settings.vars.body.classList.add("indent--single-container");
                  }else{
                      settings.vars.body.classList.remove("indent--single-container");
                  }
                  
                  // fix height
                  app._crt();
              });
              
              // indent rounded 
              settings.vars.s_layout_gi_rounded.addEventListener("change",function(e){
                  if(e.target.checked){
                      settings.vars.body.classList.add("indent--rounded");
                  }else{
                      settings.vars.body.classList.remove("indent--rounded");
                  }            
              });                
              
              // indent shadowed
              settings.vars.s_layout_gi_shadowed.addEventListener("change",function(e){
                  if(e.target.checked){
                      settings.vars.body.classList.add("indent--shadowed");
                  }else{
                      settings.vars.body.classList.remove("indent--shadowed");
                  }            
              });
              
              // indent move heading
              settings.vars.s_layout_gi_move_heading.addEventListener("change",function(e){                        
                  
                  if(e.target.checked){
                      
                      var page_heading = settings.vars.content.querySelectorAll(".page-heading")[0];
                      page_heading.querySelectorAll(".breadcrumb")[0].classList.add("d-none");
                      
                      settings.vars.page_header.parentNode.insertBefore(page_heading, settings.vars.page_header.nextSibling)
                      
                  }else{
                      
                      var page_heading = settings.vars.page.querySelectorAll(".page-heading")[0];
                      page_heading.querySelectorAll(".breadcrumb")[0].classList.remove("d-none");
                      
                      settings.vars.content.insertBefore(page_heading, settings.vars.content.firstChild);                                
                  }
                  
                  // fix height
                  app._crt();
              });
              
              
              // background options
              var bgs = document.getElementById("rw_settings_layout_bgs").querySelectorAll("div");
              
              $(bgs).each(function(index, bg){
                  
                  bg.addEventListener("click",function(e){
                      
                      if(e.target.classList.contains("active")){
                        e.target.classList.remove("active");
                        settings.vars.body.classList.remove(e.target.getAttribute("class"));                
                        return false;
                      }
                      
                      settings.vars.bgs.forEach(function(elm){                    
                          if(document.body.classList.contains(elm)){
                              document.body.classList.remove(elm);
                          }
                      });
                      
                      $(bgs).each(function(index, bgr){
                          bgr.classList.remove("active");
                      });
                      
                      settings.vars.body.classList.add(e.target.getAttribute("class"));                
                      e.target.classList.add("active");
                      
                  });
                  
              });
              
              
              // header options
              settings.vars.s_header.addEventListener("change",function(e){
                  if(e.target.checked){
                      settings.vars.page.classList.add("page--w-fixed-header");
                  }else{
                      settings.vars.page.classList.remove("page--w-fixed-header");
                  }
              });
              settings.vars.s_header_invert.addEventListener("change",function(e){
                  if(e.target.checked){
                      settings.vars.page_header.classList.add("invert");
                  }else{
                      settings.vars.page_header.classList.remove("invert");
                  }
              });

              
              // page container options
              settings.vars.s_container_invert.addEventListener("change",function(e){
                  if(e.target.checked){
                      settings.vars.page_container.classList.add("invert");
                  }else{
                      settings.vars.page_container.classList.remove("invert");
                  }
              });

              // navigation options
              // minimized
              settings.vars.s_nav_min.addEventListener("change",function(e){
                  if(e.target.checked){
                      settings.vars.page_content.classList.add("page-aside--minimized");
                      settings.vars.page_aside.classList.add("page-aside--minimized");
                  }else{
                      settings.vars.page_content.classList.remove("page-aside--minimized");
                      settings.vars.page_aside.classList.remove("page-aside--minimized");
                  }            
              });
              // hidden
              settings.vars.s_nav_hid.addEventListener("change",function(e){
                  if(e.target.checked){
                      settings.vars.page_content.classList.add("page-aside--hidden");
                      settings.vars.page_aside.classList.add("page-aside--hidden");
                  }else{
                      settings.vars.page_content.classList.remove("page-aside--hidden");
                      settings.vars.page_aside.classList.remove("page-aside--hidden");
                  }            
              });
              // fixed
              settings.vars.s_nav_fix.addEventListener("change",function(e){
                  if(e.target.checked){                
                      settings.vars.page_content.classList.add("page__content--w-aside-fixed");
                      app.layout.aside_fixed();
                      settings.vars.s_nav_vmiddle.disabled = false;                
                  }else{
                      
                      settings.vars.page_content.classList.remove("page__content--w-aside-fixed");
                      
                      settings.vars.s_nav_vmiddle.disabled = true;
                      settings.vars.s_nav_vmiddle.checked = false;
                      settings.vars.page_aside.classList.remove("navigation--vertical-middle");
                  }            
              });        
              // invert
              settings.vars.s_nav_invert.addEventListener("change",function(e){
                  if(e.target.checked){                
                      settings.vars.page_aside.classList.add("invert");
                  }else{                
                      settings.vars.page_aside.classList.remove("invert");
                  }            
              });
              // vertical middle
              settings.vars.s_nav_vmiddle.addEventListener("change",function(e){
                  if(e.target.checked){
                      settings.vars.page_aside.classList.add("navigation--vertical-middle");
                  }else{                
                      settings.vars.page_aside.classList.remove("navigation--vertical-middle");
                  }            
              });
              // condensed
              settings.vars.s_nav_condensed.addEventListener("change",function(e){
                  if(e.target.checked){
                      settings.vars.page_aside_navigation.classList.add("navigation--condensed");
                  }else{                
                      settings.vars.page_aside_navigation.classList.remove("navigation--condensed");
                  }            
              });
              
              // control panel
              settings.vars.s_nav_cpanel.addEventListener("change",function(e){
                  if(e.target.checked){
                      settings.vars.page_aside.classList.remove("page-aside--w-controls");
                  }else{
                      settings.vars.page_aside.classList.add("page-aside--w-controls");
                  }            
              });
              
              // sidepanel options
              // hide
              settings.vars.s_sidepanel.addEventListener("change",function(e){
                  if(e.target.checked){                
                      settings.vars.page_content.classList.add("page-sidepanel--hidden");
                      settings.vars.page_sidepanel.classList.add("page-sidepanel--hidden");
                  }else{                
                      settings.vars.page_content.classList.remove("page-sidepanel--hidden");
                      settings.vars.page_sidepanel.classList.remove("page-sidepanel--hidden");
                  }            
              });              
              // invert
              settings.vars.s_sidepanel_invert.addEventListener("change",function(e){
                  if(e.target.checked){                                
                      settings.vars.page_sidepanel.classList.add("invert");
                  }else{                                
                      settings.vars.page_sidepanel.classList.remove("invert");
                  }            
              });


              
              // content options
              // fluid content
              settings.vars.s_content.addEventListener("change",function(e){
                  var elm = settings.vars.content.querySelectorAll("[class^='container']")[0];
                  
                  if(e.target.checked){                                                                
                      elm.classList.remove("container");
                      elm.classList.add("container-fluid");
                  }else{                             
                      elm.classList.remove("container-fluid");
                      elm.classList.add("container");                
                  }            
              });

              
              var contentInverter = function(e){
                  var cards = settings.vars.content.querySelectorAll(".card");
                  var page_heading = settings.vars.content.querySelectorAll(".page-heading")[0];
                  
                  if(e.checked){                                                
                      settings.vars.page_content.classList.add("page__content-invert");
                      
                      if(page_heading)
                          page_heading.classList.add("invert");
                      
                      settings.vars.content.classList.add("invert");
                      
                      $(cards).each(function(index, card){
                          card.classList.add("invert");
                      });                    
                  }else{                                
                      settings.vars.page_content.classList.remove("page__content-invert");                                
                      
                      if(page_heading)
                          page_heading.classList.remove("invert");
                      settings.vars.content.classList.remove("invert");
                      
                      $(cards).each(function(index, card){
                          card.classList.remove("invert");
                      });
                  }
              }

              // content invert
              settings.vars.s_content_invert.addEventListener("change", (e) => contentInverter(e.target));

              settings.vars.s_content_invert.checked = true;

              if (settings.vars.s_content_invert) contentInverter(settings.vars.s_content_invert)
              
          },
          detect_states: function () {
              settings.vars.s_nav_fix.checked = true
              settings.vars.s_container_invert.checked = true
              settings.vars.s_header_invert.checked = true
              settings.vars.s_nav_invert.checked = true

              // layout options
              if(settings.vars.body.classList.contains("boxed")){
                  settings.vars.s_layout.value = "boxed";
                  
                  settings.vars.s_layout_gb.classList.remove("d-none");
                  settings.vars.s_layout_gb.classList.add("d-block");                                                
                  
                  // disable fixed header option
                  settings.vars.page.classList.remove("page--w-fixed-header");
                  settings.vars.s_header.disabled = true;
                  
                  // enable aside fixed option
                  settings.vars.page_content.classList.remove("page__content--w-aside-fixed");
                  settings.vars.s_nav_fix.disabled = true;
                  
                  // check current settings
                  settings.vars.s_layout_gbg.classList.remove("d-none");
                  
                  settings.vars.s_layout_gb_vspace.checked = settings.vars.body.classList.contains("boxed--vspace");
                  settings.vars.s_layout_gb_rounded.checked = settings.vars.body.classList.contains("boxed--rounded");
                  settings.vars.s_layout_gb_shadowed.checked = settings.vars.body.classList.contains("boxed--shadowed");
                  
              }else if(settings.vars.body.classList.contains("indent")){
                  settings.vars.s_layout.value = "indent";
                  
                  settings.vars.s_layout_gi.classList.remove("d-none");
                  settings.vars.s_layout_gi.classList.add("d-block");
                  
                  // disable fixed header option
                  settings.vars.page.classList.remove("page--w-fixed-header");
                  settings.vars.s_header.disabled = true;
                  
                  // enable aside fixed option
                  settings.vars.page_content.classList.remove("page__content--w-aside-fixed");
                  settings.vars.s_nav_fix.disabled = true;
                  
                  if(settings.vars.page_header){
                      settings.vars.s_layout_gi_header_group.classList.remove("d-none");
                  }
                  
                  if(settings.vars.page.getElementsByClassName("page__container")[0]){
                      settings.vars.s_layout_gi_container.classList.remove("d-none");
                  }
                  
                  // check current settings
                  settings.vars.s_layout_gbg.classList.remove("d-none");
                  
                  if(settings.vars.body.classList.contains("indent--single-header")){
                      settings.vars.s_layout_gi_header.checked = true;
                      settings.vars.s_layout_gi_move_heading.disabled = true;
                      settings.vars.s_layout_gi_header_relative.disabled = true;
                  }

                  if(settings.vars.body.classList.contains("indent--relative-header")){
                      settings.vars.s_layout_gi_header_relative.checked = true;
                      settings.vars.s_layout_gi_move_heading.disabled = false;
                      settings.vars.s_layout_gi_header.disabled = true;
                  }

                  if(settings.vars.body.classList.contains("indent--single-container")){
                      settings.vars.s_layout_gi_container_single.checked = true;
                  }

                  if(settings.vars.body.classList.contains("indent--rounded")){
                      settings.vars.s_layout_gi_rounded.checked = true;
                  }

                  if(settings.vars.body.classList.contains("indent--shadowed")){
                      settings.vars.s_layout_gi_shadowed.checked = true;
                  }
                  
              }else{
                  settings.vars.s_layout.value = "default";
                  
                  if(settings.vars.s_nav_fix.checked){
                      settings.vars.s_nav_vmiddle.disabled = false;
                  }
                  
                  // enable fixed header option
                  settings.vars.s_header.disabled = false;
                  
                  // enable aside fixed option
                  settings.vars.s_nav_fix.disabled = false;
              }
              
              // background options        
              settings.vars.bgs.forEach(function(elm){
                  
                  if(settings.vars.body.classList.contains(elm)){
                      document.getElementById("rw_settings_layout_bgs").querySelectorAll("."+elm)[0].classList.add("active");
                  }
                  
              });
              
              //  header options
              settings.vars.s_header.checked = settings.vars.page.classList.contains("page--w-fixed-header") ? true : false;
              
              if(settings.vars.page_header){
                  settings.vars.s_header_invert.checked = settings.vars.page_header.classList.contains("invert") ? true : false;
                  settings.vars.s_header_opt_group.classList.remove("d-none");
              }
              
              // container options
              if(settings.vars.page_container){
                  settings.vars.s_container_invert.checked = settings.vars.page_container.classList.contains("invert") ? true : false;
                  settings.vars.s_container_opt_group.classList.remove("d-none");
              }
              
              // navigation options
              if(settings.vars.page_aside){
                  settings.vars.s_nav_opt_group.classList.remove("d-none");
                  settings.vars.s_nav_min.checked = settings.vars.page_content.classList.contains("page-aside--minimized") ? true : false;
                  settings.vars.s_nav_hid.checked = settings.vars.page_content.classList.contains("page-aside--hidden") ? true : false;
                  settings.vars.s_nav_fix.checked = settings.vars.page_content.classList.contains("page__content--w-aside-fixed") ? true : false;        
                  settings.vars.s_nav_invert.checked = settings.vars.page_aside.classList.contains("invert") ? true : false;
                  settings.vars.s_nav_vmiddle.checked = settings.vars.page_aside.classList.contains("navigation--vertical-middle") ? true : false;
                  if (settings.vars.page_aside_navigation) settings.vars.s_nav_condensed.checked = settings.vars.page_aside_navigation.classList.contains("navigation--condensed") ? true : false;
                  if (settings.vars.page_aside) settings.vars.s_nav_cpanel.checked = settings.vars.page_aside.classList.contains("page-aside--w-controls") ? false : true;
              }
              
            
              // sidepanel options
              if(settings.vars.page_sidepanel){
                  settings.vars.s_sidepanel.checked = settings.vars.page_content.classList.contains("page-sidepanel--hidden") ? true : false;
                  settings.vars.s_sidepanel_invert.checked = settings.vars.page_sidepanel.classList.contains("invert") ? true : false;
                  settings.vars.s_sidepanel_opt_group.classList.remove("d-none");
              }
              
              // content options        
              if(settings.vars.content.querySelectorAll("[class^='container'")[0]){
                  settings.vars.s_content.checked = settings.vars.content.querySelectorAll("[class^='container'")[0].classList.contains("container-fluid") ? true : false;
              }
              
              //settings.vars.s_content_invert.checked = settings.vars.page_content.classList.contains("page__content-invert") ? true : false;
          }
      };

      settings.init()
    }

    window.initBlockHub()
  }
})
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
