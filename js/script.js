/* script.js */

// Function to add an animation class to an element
function animate(element, animationClass) {
  element.classList.add(animationClass);

  // Remove the animation class after the animation is complete
  element.addEventListener("animationend", function () {
    element.classList.remove(animationClass);
  });
}

// Animate project cards on hover
var projectCards = document.querySelectorAll(".project-card");
projectCards.forEach(function (card) {
  card.addEventListener("mouseenter", function () {
    animate(card, "bounce");
  });
});
