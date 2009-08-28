$(document).ready(function() {

  $('.show-info').click(function() {
    var info = $(this).siblings('.info');
    $('.info').slideUp('fast'); // Hide the other info divs.
    info.slideDown('fast');
    return false;
  });

}); // $(document).ready()
