const mobileMenuButton = document.getElementById("mobileMenuButton");
const mainNavigation = document.getElementById("mainNavigation");

function setMobileMenu(open) {
  if (!mobileMenuButton || !mainNavigation) return;

  mobileMenuButton.classList.toggle("is-open", open);
  mainNavigation.classList.toggle("is-open", open);
  mobileMenuButton.setAttribute("aria-expanded", String(open));
  mobileMenuButton.setAttribute(
    "aria-label",
    open ? "Close navigation menu" : "Open navigation menu"
  );
}

if (mobileMenuButton && mainNavigation) {
  mobileMenuButton.addEventListener("click", function (event) {
    event.stopPropagation();
    const isOpen = mobileMenuButton.getAttribute("aria-expanded") === "true";
    setMobileMenu(!isOpen);
  });

  mainNavigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMobileMenu(false);
    });
  });

  document.addEventListener("click", function (event) {
    const clickedInsideMenu = mainNavigation.contains(event.target);
    const clickedMenuButton = mobileMenuButton.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
      setMobileMenu(false);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setMobileMenu(false);
      mobileMenuButton.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 650) {
      setMobileMenu(false);
    }
  });
}
