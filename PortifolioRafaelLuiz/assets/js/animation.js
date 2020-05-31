$(document).ready(function() {

  $(window).scroll(function () {
    if($(this).scrollTop() > 800) {
      $('#arrow').fadeIn();
    }
    else {
      $('#arrow').fadeOut();
    }
  })

  $('#arrow').click(function(){
    $('body,html').animate({
        scrollTop: 0
    },800);
    return false;
  })
});