"use strict";

var app = {
    settings: {
        animation: 190, // css value is 200, much better to use 190?
        animationPanel: 500,
        navigation: {
            detectAuto: true, 
            closeOther: true,
            fixNavAlwaysDropUp: false
        },        
        headerHeight: 60,
        containerHeight: 60,
        boxedPaddings: 100,
        indentPaddings: 60,
        logo: '<div class="logo-text"><strong class="text-primary">#</strong> THE <strong>RIGHT WAY</strong></div>',
        backToTop: true,
        backToTopHeight: 200,
        responsiveState: false,
        breakpoints: {xs: 0, sm: 576, md: 768, lg: 992, xl: 1200}
    },
    
    layout: {
        responsive: function(){
                
            var pageContent     = document.getElementById("page-content");
            var pageAside       = document.getElementById("page-aside");
            var pageSidepanel   = document.getElementById("page-sidepanel");
            
            if(!app.settings.responsiveState){
            
                if(window.innerWidth <= app.settings.breakpoints.md){
                    // aside responsive control
                    if(pageAside){
                        pageContent.classList.add("page-aside--hidden");
                        pageAside.classList.add("page-aside--hidden");
                    }

                    // sidepanel
                    if(pageSidepanel){
                        pageContent.classList.add("page-sidepanel--hidden");
                        pageSidepanel.classList.add("page-sidepanel--hidden");                    
                    }
                }

                if(window.innerWidth <= app.settings.breakpoints.xl){
                    // sidepanel
                    if(pageSidepanel){
                        pageContent.classList.add("page-sidepanel--hidden");
                        pageSidepanel.classList.add("page-sidepanel--hidden");                    
                    }
                }
                                
            }else{
                app.settings.responsiveState = false;
            }
            
        },
        controls: function(){
            
            var pageAside               = document.getElementById("page-aside");
            var pageSidepanel           = document.getElementById("page-sidepanel");

            var pageAsideMinimizeButton = document.querySelectorAll("[data-action='aside-minimize']");
            var pageAsideHideButton     = document.querySelectorAll("[data-action='aside-hide']");
            var pageSidepanelHideButton = document.querySelectorAll("[data-action='sidepanel-hide']");
            var pageHorizontalNavMobile = document.querySelectorAll("[data-action='horizontal-show']");
            
            // minimize aside event
            if(pageAsideMinimizeButton)
                app._controlPanelEvent(pageAsideMinimizeButton,pageAside,"page-aside-animation-show","page-aside--minimized");        
            // end minimize aside event

            // hide aside event
            if(pageAsideHideButton)
                app._controlPanelEvent(pageAsideHideButton,pageAside,"page-aside-animation-show","page-aside--hidden",document.getElementById("content"));        
            // end hide aside event

            // hide sidepanel event
            if(pageSidepanelHideButton)
                app._controlPanelEvent(pageSidepanelHideButton,pageSidepanel,"page-sidepanel-animation-show","page-sidepanel--hidden",document.getElementById("content"));
            // end hide sidepanel event
            
            // show horizontal navigation on mobiles
            if(pageHorizontalNavMobile[0]){
                pageHorizontalNavMobile[0].addEventListener("click", function(e){
                    var nav = this.parentNode;
                    nav.classList.toggle("horizontal-navigation--show");
                });
            }
            // end
            
        },
        aside_fixed: function(){
            
            // helper for aside fixed layout. adds/romoves class with paddings.
            var pageContent = document.getElementById("page-content");

            if (pageContent && pageContent.classList.contains("page__content--w-aside-fixed")){
                                
                window.addEventListener("scroll", app._debouncer( function(){
                    
                    var totalHeight = 0; 
                    
                    if(document.querySelector(".page__header")){
                        totalHeight += app.settings.headerHeight;
                    }
                    if(document.querySelector(".page__container")){
                        totalHeight += app.settings.containerHeight;
                    }
                    
                    if(window.pageYOffset > totalHeight){
                        pageContent.classList.add("page-aside-scrolled");
                    }else{
                        pageContent.classList.remove("page-aside-scrolled");
                    }
                    
                    app._fireResize(); 
                    
                }, 100));
                
            }
            
        },
        fixed_panel: function(){
           
            //fixed panel
            var fixed_panel             = document.getElementById("fixed_panel");
            var fixedPanelToggleButtons = document.querySelectorAll("[data-action='fixedpanel-toggle']");
            
            if(fixed_panel){                
                $(fixedPanelToggleButtons).each(function(index, btn){
                    btn.addEventListener("click", function(){
                        
                        if(!fixed_panel.classList.contains("show")){
                            app._backdrop.show(true);
                            fixed_panel.classList.add("show");
                        }else{
                            app._backdrop.hide();
                            fixed_panel.classList.remove("show");
                        }
                        
                    });
                });
            }
            
        }
    },
    header_search: function(){
        
        // header search feature
        var form      = document.getElementById("header_search");
        
        if(!form) return false;
        
        var input     = form.getElementsByTagName("input")[0];
        var button    = form.getElementsByTagName("div")[0];

        // add focus state on search form(not only input)
        input.addEventListener("focus", function(){
            form.classList.add("page-header-search--focus");
        });
        
        // cleanup search field
        button.addEventListener("mouseup", function(){
            input.value = "";
            input.focus();
        });
        
        // removes focus state on search form
        input.addEventListener("blur", function(){
            form.classList.remove("page-header-search--focus");
        });
        
    },
    navigation_detect_auto: function(){
        
        // this feature will find link with same path 
        // and set it(and parents) to active
        if(app.settings.navigation.detectAuto){
            var path        = window.location.pathname,
                pathArray   = path.split("/"),
                page        = pathArray[pathArray.length - 1];
            
            var items = document.querySelectorAll(".navigation a[href='"+page+"']");
            
            $(items).each(function(index, item){
                var li       = item.parentElement,
                    liParent = li.parentElement.parentElement;
                    
                li.classList.add("active");                                
                
                while(liParent !== null){
                    liParent.classList.add("open","active");
                    
                    liParent = liParent.parentElement.parentElement;
                    if(liParent.tagName !== "LI"){
                        liParent = null;
                    }
                }
                
            });
        }

    },
    navigation_quick_build: function(container, prefix){
        
        // this function used to buid quick navigation depends on same id prefixes
        var ids         = document.querySelectorAll("[id^='"+prefix+"']");
        var container   = document.getElementById(container);
        
        if(ids.length > 0){
            
            app._loading.show(container.parentElement,{spinner: true});
            
            $(ids).each(function(index, id){
                var li = document.createElement("li");                    
                    li.innerHTML = "<a href=\"#"+id.getAttribute("id")+"\">"+id.innerHTML+"</a>";                                        
                    container.appendChild(li);                        
            });
            
            setTimeout(function(){
                app._loading.hide(container.parentElement);
            },1000);
            
        }                
        
    },
    navigation: function(){
        
        // get all navigations
        var navigations = document.querySelectorAll(".navigation");
                
        $(navigations).each(function(index, nav) {
            
            // get all links in navigation
            var items = nav.querySelectorAll("a");            
                        
            $(items).each(function(index, item){
                
                // add event to each link
                item.addEventListener('click', function (e) {
                    
                    // navigations in quick mode
                    if(item.getAttribute("href").charAt(0) === "#" && nav.classList.contains("navigation--quick")){
                        
                        e.preventDefault();
                        
                        var target = document.getElementById(item.getAttribute("href").replace("#",""));
                        var card   = $(target).parents(".card");
                        
                        if(card){
                            
                            card.classList.remove("keepAttentionTo");
                            void card.offsetWidth;
                            
                            //target.scrollIntoView({behavior: 'smooth'}); // works but with bugs, can be used in angular
                            
                            /*
                            setTimeout(function(){
                                card.classList.add("keepAttentionTo");
                            }, app.settings.animation);
                            */
                           
                            // jquery scroll to element for html template
                            $('html, body').animate({
                                scrollTop: card.offsetTop
                            }, app.settings.animation, function(){
                                card.classList.add("keepAttentionTo");
                            });

                        }else{
                            window.scroll({top: target.offsetTop, left: 0, behavior: 'smooth'});
                        }                                                
                                                
                        return false;
                    }
                    // end navigations quick mode
                    
                    // if link has sublevel navigation
                    if(item.nextElementSibling.tagName === 'UL'){
                        e.preventDefault();
                        
                        // close if clicked on already opened
                        if(item.parentElement.classList.contains("open")){
                            item.parentElement.classList.remove("open");
                            return false;
                        }
                        
                        // close other if needed
                        if(app.settings.navigation.closeOther){
                            
                            var parentsLi = $(item).parents("li");
                            
                            $(item).parents("ul").find("> li").not(parentsLi).removeClass("open"); 
                            
                            /*
                            var lists = $(item).parents("UL").find("li");
                            
                            $(lists).each(function(index, li){
                               li.classList.remove("open");
                            });                           */
                            
                        }                                                
                        
                        item.parentElement.classList.add("open");
                        
                        app.settings.responsiveState = true;
                        app._crt();                                                
                        app._fireEvent(item.parentElement, "mouseenter");
                        
                        return false;
                    }
                    
                });

            });                        
            
            // fix navigation in case if view port is smaller then popup
            app._navigationFix(nav);
            
        });
        
    },    
    file_tree: function(){
        // get all file tree navigations
        var trees = document.querySelectorAll(".file-tree");
       
       // loop all of them
        $(trees).each(function(index, tree){
            var f_links = tree.querySelectorAll("li.folder > a");
            
            // loop all links
            $(f_links).each(function(index, link){
                
                // add event listener to each link
                link.addEventListener("click", function(e){
                    e.preventDefault();
                    
                    var folder = this.parentNode;
                    var icon   = this.querySelectorAll(".icon")[0];                                        
                    
                    if(folder.classList.contains("open")){
                        folder.classList.remove("open");
                        if(icon){                            
                            icon.classList.remove("fa-folder-open-o");
                            icon.classList.add("fa-folder-o");
                        }
                    }else{
                        folder.classList.add("open");
                        if(icon){                            
                            icon.classList.remove("fa-folder-o");
                            icon.classList.add("fa-folder-open-o");
                        }
                    }
                    
                    app._crt();
                    
                    return false;
                });
                
            });            
        });        
        
    },
    card: {
        remove: function(elm, fn){
            
            elm.classList.add("fadeOut","animated");
            
            setTimeout(function(){
                elm.remove();
            },app.settings.animation);
            
            if(typeof fn === "function") fn();
            
            app._crt();
            
            return false;
        }
    },
    _navigationFix: function(nav){
        // !Important fix
        // minimized vertical navigation fix in case if sublevel 
        // bigger then content height

        // get all lis in current navigation
        var lis   = nav.querySelectorAll("li"); 

        // loop them all
        $(lis).each(function(index, li){

            // add event listener
            li.addEventListener("mouseenter", function(e){
                
                e.preventDefault();

                var parentContainer = nav.parentElement;

                // use if navigation minimzed only
                if(parentContainer.classList.contains("page-aside--minimized") || parentContainer.classList.contains("navigation--minimized")){

                    var visibleHeight   = document.getElementById("page-aside").offsetHeight;
                    var submenu         = li.getElementsByTagName("UL")[0];

                    if(submenu){
                        submenu.classList.remove("height-control");
                        submenu.style.height = "auto";

                        var freeSpaceBottom = visibleHeight - li.offsetTop,
                            freeSpaceTop    = li.offsetTop,
                            freeSpace       = 0, 
                            drop            = 0;
                        
                        if(freeSpaceBottom > freeSpaceTop){
                            freeSpace = freeSpaceBottom;
                        }else{
                            freeSpace = freeSpaceTop;
                            drop      = 1;
                        }
                        
                        if(drop === 1){
                            if(app.settings.navigation.fixNavAlwaysDropUp){
                                submenu.classList.add("dropup");
                            }else{
                                if(freeSpaceBottom < submenu.offsetHeight){
                                    submenu.classList.add("dropup");
                                }
                            }
                        }
                        
                        // add scroll in case if submenu bigger then free space
                        if(freeSpace - submenu.offsetHeight < 0){
                            submenu.classList.add("height-control");
                            submenu.style.height = freeSpace + "px";
                        }
                        
                    }

                }

            });
            
            // remove height from sublevel on mouseleave
            li.addEventListener("mouseleave", function(e){

                e.preventDefault();

                var submenu = li.getElementsByTagName("UL")[0];

                if(submenu){
                    submenu.classList.remove("height-control","dropup");
                    submenu.style.height = "auto";
                    submenu.style.top    = "auto";
                }

            });

        });
        // end fix
    },
    _controlPanelEvent: function(buttons,panel,animation,classname,hideContentMobile){
        // get page content wrapper
        var pageContent = document.getElementById("page-content");
        
        $(buttons).each(function(index, button){
        
            // add new event event listener to button
            button.addEventListener("click", function(e){
                e.preventDefault;

                // remove animation if exists
                panel.classList.remove(animation);
                // toggle class active(state) to button
                button.classList.toggle("active");

                // animation lifehack 
                void panel.offsetWidth;

                if(panel.classList.contains(classname)){
                    
                    panel.classList.remove(classname);
                    panel.classList.add(animation);        
                    pageContent.classList.remove(classname);
                                        
                    if(typeof hideContentMobile !== "undefined"){
                        if(window.innerWidth <= app.settings.breakpoints.xl){
                            hideContentMobile.classList.add("hideContainerContent");
                            app._loading.show(hideContentMobile,{spinner: true, solid: true});                            
                        }
                    }
                    
                }else{
                    
                    panel.classList.add(classname,animation);
                    pageContent.classList.add(classname);                                        
                    
                    if(typeof hideContentMobile !== "undefined"){                        
                        setTimeout(function(){
                            hideContentMobile.classList.remove("hideContainerContent");                            
                            app._loading.hide(hideContentMobile,app.settings.animation);
                        },app.settings.animation);                                                
                    }
                }

                app.settings.responsiveState = true;
                app._crt();                

            }, false);
        
        });
        
    },
    _fireResize: function(){
        
        // fire default window resize event // should be tested
        if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
            var evt = document.createEvent('UIEvents');
            evt.initUIEvent('resize', true, false, window, 0);
            window.dispatchEvent(evt);
        } else {
            window.dispatchEvent(new Event('resize'));
        }       
        
    },
    _fireEvent: function(element, eventName)
    {
        if(element !== null){   
            if(element.fireEvent){
                element.fireEvent( 'on' + eventName );     
            }else{
                var evObj = document.createEvent('Events');
                evObj.initEvent(eventName, true, false );
                element.dispatchEvent(evObj);
            }
        }
    },
    _crt: function(timeout){
        // get timeout
        var timeout = (typeof timeout === "undefined") ? app.settings.animationPanel : 0;                
        
        console.log("crt");
        
        // content resize trigger. use this function to avoid content size problems               
        setTimeout(function(){
            app._fireResize();
        },timeout);
        
    },
    _backdrop: {
        show: function(mtransparent){                        
            
            var backdrop = document.createElement("div");
                backdrop.classList.add("backdrop");
                
                if(typeof mtransparent !== "undefined"){
                    backdrop.classList.add("backdrop--mtransparent");    
                }
            
            document.body.appendChild(backdrop);
            
        },
        hide: function(){
            var backdrop = document.body.querySelector(".backdrop");
            
            backdrop.classList.add("fadeOut");
            
            setTimeout(function(){
                $(backdrop).remove();
            },app.settings.animation);
        }
    },
    _loading: {
        // loading layer feature
        // container: where to add loading layer
        // options: spinner, dark, spinner
        
        show: function(container, options){
            
            // default options
            var classes = ["loading"],
                text    = false,
                spinner = false,
                solid   = false;
            
            // get new options from options var
            if(typeof options === 'object'){
                if(typeof options.spinner !== 'undefined' && options.spinner === true){
                    classes.push("loading--w-spinner");
                    spinner = true;
                }
                
                if(typeof options.dark !== 'undefined' && options.dark === true)
                    classes.push("loading--dark");
                
                if(typeof options.text !== 'undefined' && options.text.length > 0){
                    classes.push("loading--text");
                    text = options.text;
                }
                
                if(typeof options.solid !== 'undefined' && options.solid === true){                    
                    classes.push("loading--solid");
                }
            }
            
            // build loading layer
            if(container){
                
                // add loading class to container
                container.classList.add("loading-process");
                
                // create html elements
                var layer            = document.createElement("div"),
                    optionsContainer = document.createElement("div"),
                    spinnerBox       = document.createElement("div");
                
                // add text to optionsContainer if exists
                if(text){
                    optionsContainer.innerHTML = text;                    
                }
                
                // add spinner top optionsContainer if needed
                if(spinner){
                    spinnerBox.classList.add("loading-spinner");                    
                    optionsContainer.appendChild(spinnerBox);
                }
                
                // append optionsContainer if needed
                if(spinner || text){
                    layer.appendChild(optionsContainer);
                }
                
                // set classes for loading layer
                for(var i = 0; i < classes.length; i++) {
                    layer.classList.add(classes[i]);
                }
                
                // add class loaded if preloading exists
                if(container.classList.contains("preloading")){
                   container.classList.add("loaded");
                   
                   setTimeout(function(){
                       container.classList.remove("preloading","loaded");
                   },app.settings.animation);
                }
                
                // add loading layer to container
                container.appendChild(layer);
            }
            
        },
        hide: function(container, timeout){            
            
            // remove loading layer if exists
            if(container){                                
                
                if(typeof timeout === "undefined"){
                    timeout = 0;
                }
                
                setTimeout(function(){
                    var loading = container.querySelector(".loading");
                    
                    if(loading){
                        
                        loading.classList.add("fadeOut");
                        
                        setTimeout(function(){
                            $(container).find(".loading").remove();

                            // remove loading class from container
                            container.classList.remove("loading-process");
                        },app.settings.animation);
                    
                    }
                    
                },timeout);                                
                                
            }
            
        }
    },
    _page_loading: {
        show: function(options){
            
            // page loading feature            
            var body    = document.body,
                layer   = document.createElement("div");
                layer.classList.add("page-loader");
                
            if(typeof options === "object"){
                
                if(typeof options.logo !== "undefined"){
                    
                    var logo = document.createElement("div");
                        logo.classList.add("logo-holder","logo-holder--xl");
    
                    if(typeof options.logo === "boolean"){
                        logo.innerHTML = app.settings.logo;
                    }else{
                        logo.innerHTML = options.logo;
                    }
                    
                    if(typeof options.logoAnimate !== "undefined"){
                        if(typeof options.logoAnimate === "boolean"){
                            logo.classList.add("zoomIn","animated");
                        }else{
                            logo.classList.add(options.logoAnimate,"animated");
                        }
                    }
                    
                    layer.appendChild(logo);
                }
                
                if(typeof options.spinner !== "undefined"){
                    var spinner = document.createElement("div");
                        spinner.classList.add("page-loader__spinner");
                        
                    layer.appendChild(spinner);    
                }
                
                if(typeof options.animation !== "undefined"){
                    if(typeof options.animation === "boolean"){
                        layer.classList.add("page-loader--animation");
                    }else{
                        layer.classList.add(options.animation);
                    }
                }
            }
                
            body.classList.add("page-loading");
            body.appendChild(layer);
            
        },
        hide: function(){
            
            var body = document.body;                                
                body.querySelector(".page-loader").classList.add("fadeOut");
                
                setTimeout(function(){
                    body.classList.remove("page-loading");
                    
                    $(body).find(".page-loader").remove();
                    
                },app.settings.animation);                 
                
        }
    },
    _backToTop: function(){
        
        if(!app.settings.backToTop) return false;
        
        var button = document.createElement("div");
            button.classList.add("back_to_top");
        
        button.addEventListener("click",function(){
            window.scroll({top: 0, left: 0, behavior: 'smooth'});
        });
            
        document.body.appendChild(button);
        
        window.addEventListener("scroll", function(){
            if(window.pageYOffset > app.settings.backToTopHeight){
                button.classList.add("show");
            }else{
                button.classList.remove("show");
            }
        });
        
    },
    _rwProgress: function(){
        
        var list = document.querySelectorAll(".rw-progress");        
        
        $(list).each(function(index, item){
            
            var value = item.dataset.value;
            
            if(value){
                
                var valToBars = Math.round(value / 10);
                
                for(var i=0; i <= 9; i++){
                    var bar = document.createElement("div");
                    
                    if(i < valToBars){
                        bar.classList.add("active");
                    }
                    
                    item.appendChild(bar);                                                            
                }                                
                
                if(item.classList.contains("rw-progress--animation")){
                    
                    var divs = item.querySelectorAll("div");
                    
                    $(divs).each(function(index, bar){
                        setTimeout(function(){                
                            bar.classList.add("animate");    
                        }, index * app.settings.animation);
                    });
                }
                
            }                                                
            
        });
        
    },
    _debouncer:  function(func, timeout) {
        
        var timeoutID, timeout = timeout || 200;
        
        return function () {
            var scope = this, args = arguments;
            
            clearTimeout(timeoutID);
                timeoutID = setTimeout(function () {
                func.apply(scope, Array.prototype.slice.call(args));
            }, timeout);
        };
    }
};

document.addEventListener("DOMContentLoaded", function () {
    
    app.layout.controls();    
    app.layout.aside_fixed();
    app.layout.fixed_panel();    
    app.layout.responsive();
    
    // not important for personal usage
    app.navigation_detect_auto();
    app.navigation_quick_build("navigation-quick","rw-");
    // end        
    
    app.navigation();
    app.file_tree();    
    
    app.header_search();    
    app._backToTop();
    app._rwProgress();
            
});

window.addEventListener("resize", function(){
       
    app.layout.responsive();
    
}, true);


/*************************
       owl carousel 
*************************/
function owlcarousel() {
    $(".owl-carousel").each(function () {
        var $this = $(this),
            $items = ($this.data('items')) ? $this.data('items') : 1,
            $loop = ($this.data('loop')) ? $this.data('loop') : true,
            $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
            $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
            $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
            $space = ($this.attr('data-space')) ? $this.data('space') : 30;
        $(this).owlCarousel({
            loop: $loop,
            items: $items,
            responsive: {
                0: {
                    items: $this.data('xx-items') ? $this.data('xx-items') : 1
                },
                600: {
                    items: $this.data('xs-items') ? $this.data('xs-items') : 1
                },
                767: {
                    items: $this.data('sm-items') ? $this.data('sm-items') : 2
                },
                992: {
                    items: $this.data('md-items') ? $this.data('md-items') : 2
                },
                1190: {
                    items: $this.data('lg-items') ? $this.data('lg-items') : 3
                },
                1200: {
                    items: $items
                }
            },
            dots: $navdots,
            margin: $space,
            nav: $navarrow,
            navText: ["<i class='ion-ios-arrow-left'></i>", "<i class='ion-ios-arrow-right'></i>"],
            autoplay: $autoplay,
            autoplayHoverPause: true
        });

    });

}