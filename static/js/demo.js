"use strict";

var demo = {
    init: function(){
        
        // update card button
        var btnUpdate = document.querySelectorAll("[data-demo-action='update']");
        
        $(btnUpdate).each(function(index, btn){
            
            var card = $(btn).closest(".card");            
            
            btn.addEventListener("click",function(e){                
                e.preventDefault();
                app._loading.show(card,{spinner: true});                
                setTimeout(function(){
                    app._loading.hide(card);
                },2000);                
                return false;
            });            
        });
        // end update card button
        
        // expand card button
        var btnExpand = document.querySelectorAll("[data-demo-action='expand']");
        
        $(btnExpand).each(function(index, btn){
            var card = $(btn).closest(".card");
            btn.addEventListener("click",function(e){
                
                e.preventDefault();                
                
                app._loading.show(card,{spinner: true});
                
                e.target.classList.toggle("active");
                card.classList.toggle("card--expanded");
                
                app._crt();
                
                setTimeout(function(){
                    app._loading.hide(card);
                },1000);
                
                return false;
            });            
        });
        // end expand card button
        
        // invert card button
        var btnInvert = document.querySelectorAll("[data-demo-action='invert']");
        
        $(btnInvert).each(function(index, btn){
            
            var card = $(btn).parents(".card");

            if(card.hasClass("invert")){
                btn.classList.add("active");
            }
            
            btn.addEventListener("click",function(e){
                e.preventDefault();
                e.target.classList.toggle("active");
                card.classList.toggle("invert");
                return false;
            });            
        });
        // end invert card button
        
        // remove card button
        var btnRemove = document.querySelectorAll("[data-demo-action='remove']");
        
        $(btnRemove).each(function(index, btn){
            
            var card = $(btn).parents(".card");
            
            btn.addEventListener("click",function(e){
                e.preventDefault();
                app.card.remove(card);
                return false;
            });            
        });
        // end remove card button

    }
};

document.addEventListener("DOMContentLoaded", function () {    
    demo.init();
});