$(document).ready(function() {

  // Update the Gravatar on page load.
  updateGravatar();

  $('#gravatar').on('click', function(e) {
    updateGravatar();
    e.preventDefault();
  });

  /**
   * Project list accordion.
   */
  $('#code .show-info').on('click', function(e) {
    var info = $(this).siblings('.info');
    if (info.is(':hidden')) {
      $('.info').slideUp('fast'); // Hide the other info divs.
      info.slideDown('fast');
    } else {
      info.slideUp('fast');
    }
    e.preventDefault();
  });

}); // $(document).ready()

function updateGravatar() {
  $('#gravatar').attr('src', new Gravatar(Config.randomEmail()).url);
}
