$(document).ready(function() {

  /**
   * Load the initial page.
   * TODO: Load page from URL hash if it's there.
   */
  $.get(Config.root, function(page) {
    $('#content').html(page);
  });

  // Update the Gravatar on page load.
  updateGravatar();

  $('#gravatar').on('click', function(e) {
    updateGravatar();
    e.preventDefault();
  });

  /**
   * Get a tab link through AJIZ.
   */
  $('#tabs a').on('click', function(e) {
    $.get(this.href, function(page) {
      updateGravatar();
      $('#content').html(page);
    });
    e.preventDefault();
  });

}); // $(document).ready()

function updateGravatar() {
  $('#gravatar').attr('src', new Gravatar(Config.randomEmail()).url);
}
