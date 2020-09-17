'use strict'

$(function(){

  
  const top = $('#top-page');
  const main = $('main');

  $('.enter').click(function(){
    $(top).fadeOut(2000);
    // $(main).delay(2000).fadeIn(2000);
  });

  const slide = $('.slide');

  $(main).ready(function(){
    $(slide).slick({
      accessibility: true,
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      dotsClass: 'slide-dots',
      fade: true,
      speed: 1200,
      arrows: false,
      cssEase: 'linear',
    });

    
    
      const re_btn = $('#return');
      const disap = $('.disap');
      const dots = $('.slide-dots')
      
    $(window).scroll(function(){
      if($(this).scrollTop() > $(this).height()){
        $(slide).slick('slickPause');
        $(re_btn).addClass('in');
        $(main).addClass('filter');
        $(disap).addClass('out');
        $(dots).hide();
      }else{
        $(slide).slick('slickPlay');
        $(re_btn).removeClass('in');
        $(main).removeClass('filter');
        $(disap).removeClass('out');
        $(dots).show();
      }
    }); 
  
  });

  const h_top = $('.header-top');
  const h_btm = $('.header-bot');
  const h_right = $('.header-right');
  let nav_posi = $(h_btm).offset().top;

  $(window).scroll(function(){
    let h_posi = $(window).scrollTop();
    if(h_posi > (nav_posi - 100)){
      $(h_top).addClass('union');
    }else{
      $(h_top).removeClass('union').css('transition','.5s');
    }
  });

  $(window).scroll(function(){
    let h_posi = $(window).scrollTop();
    if(h_posi > (nav_posi - 35)){
      $(h_btm).addClass('bot-fix');
    }else{
      $(h_btm).removeClass('bot-fix');
    }
  });


  $(re_btn).hover(
    function(){
      $(re_btn).stop().addClass('re-hover');
    },
    function(){
      $(re_btn).stop().removeClass('re-hover').css('transition','.6s');
    });
  $(re_btn).click(function(){
    $("html,body").animate({
      scrollTop:0
    }, 600);
  });

});