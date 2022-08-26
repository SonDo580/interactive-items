const dropdownTriggers = document.querySelectorAll(".dropdown-trigger");
dropdownTriggers.forEach((button) =>
  button.addEventListener("click", showItems)
);

function showItems(event) {
  const dropdown = event.target.parentElement;

  const itemsContainer = dropdown.querySelector(".dropdown-items");
  itemsContainer.classList.toggle("show");

  const icon = dropdown.querySelector("i");
  icon.classList.toggle("show");
}

// IMAGE SLIDER
const images = document.querySelectorAll(".images img");

const dots = document.querySelectorAll(".dots .dot");
dots.forEach((dot) => dot.addEventListener("click", showImage));

function showImage(event) {
  const activeDot = event.target;
  if (activeDot.classList.contains("active")) {
    return;
  }
  const currentDot = document.querySelector(".dot.active");
  currentDot.classList.remove("active");
  activeDot.classList.add("active");

  const index = activeDot.getAttribute("data-index");
  const activeImage = document.querySelector(`img[data-index="${index}"]`);
  const currentImage = document.querySelector("img.active");
  currentImage.classList.remove("active");
  activeImage.classList.add("active");
}

const leftArrow = document.querySelector("arrows .left");
const rightArrow = document.querySelector("arrows .right");
