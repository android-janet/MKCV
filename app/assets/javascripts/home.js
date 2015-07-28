$(document).ready(function(){
  $('h1').mouseenter(function(){
    $(this).addClass('font-effect-neon');
  });
  $('h1').mouseleave(function(){
    $(this).removeClass('font-effect-neon');
  });
  
  $('p').mouseenter(function(){
    $(this).css('color', 'purple');
  });
  $('p').mouseleave(function(){
    $(this).css('color', 'rgba(213, 216, 135, 100)');
  });

});
