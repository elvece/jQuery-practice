

$(document).ready (function(){

//when hover, change background to green
  $(".red").hover(function() {
    $(this).css("background", "green");
  });

//when click button, turn background orange
  $("#btn-bg").on("click", function(){
    $("body").css("background", "orange");
  });

//when double click page, alert you did so
  $("body").dblclick(function(){
    alert("You clicked this page twice!");
  });

//when hotdog image clicked, create 1000
  $("#hotdog").on('click', function(){
    $(this).append('img');
  });



});
