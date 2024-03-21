$(function(){
    $(".toggle").on("click", function(){
        if($(".nav-list").hasClass("active")){
            $(".nav-list").removeClass("active");
            $(".toggle").removeClass("move");
            $(this).find("a").html("<ion-icon name='menu-outline'></ion-icon>")
        } else{
            $(".nav-list").addClass("active");
            $(".toggle").addClass("move");
            $(this).find("a").html("<ion-icon name='close-outline'></ion-icon>")
        }
    });
});