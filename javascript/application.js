$(document).ready(function() {

  $('#tabs a').click(function() {
    $.get(this.href, function(page) {
      $('#content').html(page);
    });
    return false;
  });

  $('#projects .show-info').live('click', function() {
    var info = $(this).siblings('.info');
    $('.info').slideUp('fast'); // Hide the other info divs.
    info.slideDown('fast');
    return false;
  });

}); // $(document).ready()
