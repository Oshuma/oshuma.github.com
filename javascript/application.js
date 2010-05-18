$(document).ready(function() {

  // Update the Gravatar on page load.
  updateGravatar();

  $('#gravatar').live('click', function() {
    updateGravatar();
    return false;
  });

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
      updateGravatar();
      $('#content').html(page);
    });
    return false;
  });

  /**
   * Project list accordion.
   */
  $('#code .show-info').live('click', function() {
    var info = $(this).siblings('.info');
    $('.info').slideUp('fast'); // Hide the other info divs.
    info.slideDown('fast');
    return false;
  });

}); // $(document).ready()

function updateGravatar() {
  $('#gravatar').attr('src', new Gravatar(Config.randomEmail()).url);
}
