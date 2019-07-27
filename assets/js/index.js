$(".tabs").click(function(){
    $(".tabs").removeClass("active");
    $(this).addClass("active");
    var id = $(this).data("id");
    if(id == 0){
        $(".box").css("top", "200%");
        $("#who").css("top", "50%");
    } else if(id == 1){
        $(".box").css("top", "200%");
        $("#social").css("top", "50%");
    } else if(id == 2){
        $(".box").css("top", "200%");
        $("#project").css("top", "50%");
    } else if(id == 3){
        $(".box").css("top", "200%");
        $("#contact").css("top", "50%");
    }
});