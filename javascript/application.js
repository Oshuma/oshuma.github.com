$(document).ready(function() {

  /**
   * Load the initial page.
   */
  $.get(Config.root, function(page) {
    $('#content').html(page);
  });

  /**
   * Get a tab link through AJIZ.
   */
  $('#tabs a').click(function() {
    $.get(this.href, function(page) {
      $('#content').html(page);
    });
    return false;
  });

  /**
   * Project list accordion.
   */
  $('#projects .show-info').live('click', function() {
    var info = $(this).siblings('.info');
    $('.info').slideUp('fast'); // Hide the other info divs.
    info.slideDown('fast');
    return false;
  });

}); // $(document).ready()
