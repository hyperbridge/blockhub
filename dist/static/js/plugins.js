"use strict";

var plugins = {
    mCustomScrollBar: function(){
        // initialize mCustomScrollbar on each .scroll box
        $(".scroll").mCustomScrollbar({axis:"y", theme: "minimal-dark", autoHideScrollbar: true, scrollInertia: 300, advanced: {autoScrollOnFocus: false}});
        
        // redraw all .scroll boxes after window reiszed
        window.addEventListener('resize', function(){
            $(".scroll").mCustomScrollbar("update");
        }, true);        
    },
    bs_inits: function(){
        // initialize all popovers on a page
        $("[data-toggle=\"popover\"]").popover();
        
        // initialize all tooltips on a page
        $("[data-toggle=\"tooltip\"]").tooltip();
    },
    select2: function(){        
                                      
        // basic without search        
        if($(".select-simple").length > 0){
            $(".select-simple").select2({
                minimumResultsForSearch: -1
            });
        }
                
        // default with search
        if($(".select-default").length > 0){
            $(".select-default").select2();
        }
        
        // default with search
        if($(".select-clearable").length > 0){
            $(".select-clearable").select2({placeholder: 'Choose option...', allowClear: true});     
        }
        
    },
    smartWizard: function(){
        
        if($(".wizard").length > 0){

            //check count of steps in each wizard
            $(".wizard > ul").each(function(){
                $(this).addClass("steps_"+$(this).children("li").length);
            });// ./end                                    
            
            // init wizard plugin
            $(".wizard").smartWizard({
                // This part (using for wizard validation) of code can be removed FROM 
                onLeaveStep: function(obj){
                    var wizard = obj.parents(".wizard");

                    if(wizard.hasClass("wizard-validation")){

                        var valid = true;

                        $('input,textarea',$(obj.attr("href"))).each(function(i,v){
                            valid = validate.element(v) && valid;
                        });

                        if(!valid){
                            wizard.find(".stepContainer").removeAttr("style");
                            validate.focusInvalid();                                
                            return false;
                        }         
                    }    

                    app._crt();

                    return true;
                },// <-- TO
                //this is important part of wizard init
                onShowStep: function(obj){
                    var wizard = obj.parents(".wizard");

                    if(wizard.hasClass("show-submit")){

                        var step_num = obj.attr('rel');
                        var step_max = obj.parents(".anchor").find("li").length;

                        if(step_num == step_max){                             
                            obj.parents(".wizard").find(".actionBar .btn-secondary").css("display","block");
                        }                         
                    }
                    
                    app._crt();
                    
                    return true;                         
                }// ./end
            });                        
        }
    },
    maskedInput: function(){
        if($("input[class^='mask_']").length > 0){
            $("input.mask_tin").mask('99-9999999');
            $("input.mask_ssn").mask('999-99-9999');        
            $("input.mask_date").mask('9999-99-99');
            $("input.mask_date_rev").mask('99-99-9999');
            $("input.mask_product").mask('a*-999-a999');
            $("input.mask_phone").mask('99 (999) 999-99-99');
            $("input.mask_phone_ext").mask('99 (999) 999-9999? x99999');
            $("input.mask_credit").mask('9999-9999-9999-9999');        
            $("input.mask_percent").mask('99%');            
        }
    },
    extension: function(){
        // New selector case insensivity        
        $.expr[':'].containsi = function(a, i, m) {
            return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
        };
    }
};

document.addEventListener("DOMContentLoaded", function () {
    plugins.mCustomScrollBar();
    plugins.bs_inits();
    plugins.select2();
    plugins.smartWizard();
    plugins.maskedInput();
    
    plugins.extension();
});

window.addEventListener('resize', function(){
    
    
}, true);