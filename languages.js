$(document).ready(function(){
    $("img").mouseleave(function(){
        $(this).hide();
    });
    $("p").click(function(){
        $("img").slideDown("slow");
    });
});
