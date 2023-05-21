// Script to update the current year in the footer dynamically
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// jQuery for page transitions
$(document).ready(function () {
  // Function to load a page
  function loadPage(page) {
    var pageMap = {
      "#home": "pages/home.html",
      "#about": "pages/about.html",
      "#projects": "pages/projects.html",
      "#contact": "pages/contact.html",
    };

    // Default to home page if page is not in pageMap
    var pageUrl = pageMap[page] || "pages/home.html";

    $("#content").fadeOut(500, function () {
      $("#content").load(pageUrl, function () {
        $("#content").fadeIn(500);
      });
    });

    // Remove active class from all nav items
    $(".nav-item").removeClass("active");
    // Add active class to parent nav item of the clicked link
    $('a[href="' + page + '"]')
      .parent(".nav-item")
      .addClass("active");
  }

  // Handle click events
  $(".nav-link").click(function (e) {
    e.preventDefault();
    var page = $(this).attr("href");
    loadPage(page);

    // Update URL hash
    window.location.hash = page;

    // Collapse navigation bar on nav item click (for small screens)
    $(".navbar-collapse").collapse("hide");
  });

  // Load page from URL hash on page load
  loadPage(window.location.hash);
});
