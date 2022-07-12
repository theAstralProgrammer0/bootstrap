$(document).ready(function(){
    $("#myCarousel").carousel({interval:2000});
    $("#myCarousel").mouseenter(function(){
        $("#myCarousel").carousel("pause");
        $("#myCarousel").mouseleave(function(){
            $("#myCarousel").carousel("cycle");
        });
    });
})

