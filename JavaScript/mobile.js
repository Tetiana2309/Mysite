document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.querySelector(".mobile-menu-open-btn");
  const closeBtn = document.querySelector(".mobile-menu-close-btn");
  const mobileMenu = document.getElementById("mobileMenuModal");

  openBtn.addEventListener("click", function () {
    mobileMenu.style.display = "block";
    setTimeout(function () {
      mobileMenu.classList.add("mobile-menu-show");
    }, 10);
  });

  closeBtn.addEventListener("click", function () {
    mobileMenu.classList.remove("mobile-menu-show");
    setTimeout(function () {
      mobileMenu.style.display = "none";
    }, 300);
  });
});
