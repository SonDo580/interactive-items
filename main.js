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
