$(document).ready(function(){
  /*
  $(window).scroll(function(){
    if ($(window).scrollTop() > 20) {
      //$('#navbar').animate({height: 25px},'slow');
    }
  });*/

  $(window).resize(function(){
    setSquareSize();
  });

  setSquareSize();

});

function setSquareSize(){
  $('#squares').width($(window).width());
  $('#squares').height($(window).height());
}
