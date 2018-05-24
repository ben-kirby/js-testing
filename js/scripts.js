$(function() {
  $("h1").click(function(){
    alert("This is clickable.");
  });

  $("p").click(function(){
    $(".showing").toggle();
    $(".hidden").toggle();
  });

  $("button#red").click(function(){
    $("body").removeClass();
    $("body").addClass("redbg");
  });

  $("button#yellow").click(function(){
    $("body").removeClass();
    $("body").addClass("yellowbg");
  });

  $("button#green").click(function(){
    $("body").removeClass();
    $("body").addClass("greenbg");
  });

  $("button#blue").click(function(){
    $("body").removeClass();
    $("body").addClass("bluebg");
  });
});
