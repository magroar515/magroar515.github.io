// Script to update the current year in the footer dynamically
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// jQuery for page transitions
$(document).ready(function () {
  // Load initial page
  $("#content").load("pages/home.html");
  $(".nav-item").first().addClass("active");

  // Handle click events
  $(".nav-link").click(function (e) {
    e.preventDefault();

    // Get the href attribute of the clicked link
    var page = $(this).attr("href");

    $("#content").fadeOut(500, function () {
      $("#content").load(page, function () {
        $("#content").fadeIn(500);
      });
    });

    // Remove active class from all nav items
    $(".nav-item").removeClass("active");
    // Add active class to parent nav item of the clicked link
    $(this).parent(".nav-item").addClass("active");
  });
});
