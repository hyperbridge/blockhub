"use strict";

var app_faq = {
    init: function(){
        
        $(".list-faq-item").on("click", function(){
            $(this).toggleClass("open");

            app._crt();
        });
        
        $("#app_faq_open").on("click", function(){
            $(".list-faq .list-faq-item").addClass("open");
            
            app._crt();
        });

        $("#app_faq_hide").on("click", function(){
            $(".list-faq .list-faq-item").removeClass("open");
            
            app._crt();
        });
        
        $("#app_faq_remove").on("click", function(){
            var hl = $(".list-faq").find(".list-faq-highlight");
            hl.each(function(){
                var txt = $(this).html();
                $(this).after(txt);
                $(this).remove();
            });
            $("#app_faq_hide").trigger("click");
        });
        
        this.search();        
    },
    search: function(){
        
        $("#app_faq_form").on("submit",function(){
            
            var keyword = $("#app_faq_search").val();

            if(keyword.length >= 3){
                $(".list-faq .list-faq-item").removeClass("open");
                
                $(".list-faq").removeHighlight();

                var items = $(".list-faq .list-faq-item-content:containsi('"+keyword+"')");

                items.highlight(keyword);

                items.each(function(){
                    $(this).parent(".list-faq-item").addClass("open");
                });

                app._crt();
            }                

            return false;
        });
        
    }    
};


$(function(){                        
   app_faq.init();
});
