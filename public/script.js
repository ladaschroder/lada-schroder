/* Functionality */

const accordionTriggers = document.querySelectorAll(".accordion-trigger");

accordionTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const item = trigger.closest(".accordion-item");
    item.classList.toggle("open");
  });
});


/* Topbar show/hide on scroll */
const topbar = document.getElementById("topbar");

function handleScrollTopbar() {
  if (window.scrollY > 140) {
    document.body.classList.add("scrolled");
    topbar.classList.add("show");
  } else {
    document.body.classList.remove("scrolled");
    topbar.classList.remove("show");
  }
}


/* Scroll event listener */
window.addEventListener("scroll", handleScrollTopbar);


/* Run once on page load */
handleScrollTopbar();