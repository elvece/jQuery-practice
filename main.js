

$(document).ready (function(){

  $(".red").hover(function() {

    $(this).css("background", "green");

  });


  $("#btn-bg").on("click", function(){

    $("body").css("background", "orange");

  });

  $("body").dblclick(function(){
    alert("You clicked this page twice!");

  });


});
