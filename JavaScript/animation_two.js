const teamItems = document.querySelectorAll(".our-team-images");

teamItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "scale(1.05)";
    item.style.backgroundColor = "#f0f0f0";
  });

  item.addEventListener("mouseout", () => {
    item.style.transform = "scale(1)";
    item.style.backgroundColor = "transparent";
  });
});
