// Script to update the current year in the footer dynamically
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// jQuery for page transitions
$(document).ready(function() {
  // Handle click events
  $('.nav-link').click(function(e) {
    e.preventDefault();

    // Get the href attribute of the clicked link
    var page = $(this).attr('href');

    $('#content').fadeOut(500, function() {
      $('#content').load(page, function() {
        $('#content').fadeIn(500);
      });
    });
  });
});