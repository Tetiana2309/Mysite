const button = document.querySelector(".main-btn");

button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "#ff4500";
  button.style.color = "#141024";
  button.style.transform = "scale(1.05)";
});

button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "#D52027";
  button.style.color = "#FFFFFF";
  button.style.transform = "scale(1)";
});

button.addEventListener("click", () => {
  // Действия при клике на кнопку
});
