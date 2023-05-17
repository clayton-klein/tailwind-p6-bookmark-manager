const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

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

  // Show target panel
  document
    // div with the panels
    .getElementById("panels")
    // the panels have classes that match the values of the custom attributes
    // "data-target" of their respective tabs.
    .getElementsByClassName(matchedAttributeClass)[0]
    .classList.remove("hidden");
}
