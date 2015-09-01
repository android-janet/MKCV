$(document).ready(function(){

  //hover my name
  $('h1').mouseenter(function(){
    $(this).addClass('font-effect-anaglyph');
  });
  $('h1').mouseleave(function(){
    $(this).removeClass('font-effect-anaglyph');
  });

  //hover links
  $('.mylinks h2').mouseenter(function(){
    $(this).css('color', 'purple');
  });
  $('.mylinks h2').mouseleave(function(){
    $(this).css('color', 'rgba(213, 216, 135, 100)');
  });

  //click about me
  $('#about').click(function(){
    $('#aboutme').slideToggle();
  });

  //click contact
  $('#contact').click(function(){
    $('#contactme').slideToggle();
  });

  //click skills
  $('#skills').click(function(){
    $('#skillsme').slideToggle();
  });

  //click projects
  $('#projects').click(function(){
    $('#projectsme').slideToggle();
  });

  //click employment history
  $('#work').click(function(){
    $('#worksme').slideToggle();
  });

  //click education
  $('#education').click(function(){
    $('#educateme').slideToggle();
  });


});
