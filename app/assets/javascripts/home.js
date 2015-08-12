$(function(){
  // $('#aboutme').hide();

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

//possible solution to slide issue?
// $('#aboutme').hide();
// $('#about').click(function(){
//   $('#aboutme').slideToggle();
// });

//click about, display my info
  $('#about').click(function(){
    $('#aboutme').slideDown('slow', function(){
      $('#about').click(function(){
        $('#aboutme').slideUp();
      });
    });
  });

//click skills, display skill info
  $('#skills').click(function(){
    $('#skillsme').slideDown('slow', function(){
      $('#skills').click(function(){
        $('#skillsme').slideUp();
      });
    });
  });

  $('#projects').click(function(){
    $('#projectsme').slideDown('slow', function(){
      $('#projects').click(function(){
        $('#projectsme').slideUp();
      });
    });

  });

  $('#work').click(function(){
    $('#worksme').slideDown('slow', function(){
      $('#work').click(function(){
        $('#worksme').slideUp();
      });
    });
  });

  $('#education').click(function(){
    $('#educateme').slideDown('slow', function(){
      $('#education').click(function(){
        $('#educateme').slideUp();
      });
    });
  });

  $('#contact').click(function(){
    $('#contactme').slideDown('slow', function(){
      $('#contact').click(function(){
        $('#contactme').slideUp();
      });
    });
  });


});
