const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const logo = document.getElementById("logo");
const hamburgerBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("menu");

tabs.forEach((tab) => tab.addEventListener("click", onTabClick));
hamburgerBtn.addEventListener("click", navToggle);

function onTabClick(event) {
  // "Deactivate" all tabs
  tabs.forEach((tab) =>
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    )
  );

  // Hide all panels before showing the target one
  panels.forEach((panel) => panel.classList.add("hidden"));

  // ============== Activate selected tab/panel: =====================
  event.target.classList.add("border-softRed", "border-b-4");

  // Getting the tab's custom attribute value that will match the class of its respective panel
  const matchedAttributeClass = event.target.getAttribute("data-target");

  // Show target panel (remove class "hidden" & add class "flex")
  document
    // div with the panels
    .getElementById("panels")
    // the panels have classes that match the values of the custom attributes
    // "data-target" of their respective tabs.
    .getElementsByClassName(matchedAttributeClass)[0]
    .classList.remove("hidden");

  document
    .getElementById("panels")
    .getElementsByClassName(matchedAttributeClass)[0]
    .classList.add("flex");
}

// ============== Toggle mobile menu =====================
function navToggle() {
  hamburgerBtn.classList.toggle("open");
  mobileMenu.classList.toggle("flex");
  mobileMenu.classList.toggle("hidden");

  if (mobileMenu.classList.contains("flex")) {
    // white logo
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
  } else {
    // blackish logo
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  }
}
