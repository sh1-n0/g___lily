'use strict'

$(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > $(this).height()){
      $('#return').addClass('in');
    }else{
      $('#return').removeClass('in');
    }
  });

  $('#return').hover(
    function(){
      $('#return').stop().addClass('re-hover');
    },
    function(){
      $('#return').stop().removeClass('re-hover').css('transition','.6s');
    });
  $('#return').click(function(){
    $("html,body").animate({
      scrollTop:0
    }, 600);
  });

});