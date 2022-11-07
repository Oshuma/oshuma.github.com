$(document).ready(function () {

  /**
   * Project list accordion.
   */
  $('#code .show-info').on('click', function (e) {
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
