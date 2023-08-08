// Функция для открытия основного модального окна с анимацией
function animateMainModalIn(modal, animationClass) {
  modal.style.display = "block";
  modal.classList.add(animationClass);
  modal.style.opacity = "1";
}

function animateMainModalOut(modal, animationClass, callback) {
  modal.classList.add(animationClass);
  modal.style.opacity = "0";

  function animationEndHandler() {
    modal.style.display = "none";
    modal.classList.remove(animationClass);
    modal.removeEventListener("animationend", animationEndHandler);
    if (typeof callback === "function") {
      callback();
    }
  }

  modal.addEventListener("animationend", animationEndHandler);
}

// Функция для открытия вложенного модального окна с анимацией снизу вверх
function animateNestedModalIn(nestedModal, animationClass) {
  nestedModal.style.display = "block";
  nestedModal.classList.add(animationClass);
  nestedModal.style.opacity = "1";
}

function animateNestedModalOut(nestedModal, animationClass, callback) {
  nestedModal.classList.add(animationClass);
  nestedModal.style.opacity = "0";

  function animationEndHandler() {
    nestedModal.style.display = "none";
    nestedModal.classList.remove(animationClass);
    nestedModal.removeEventListener("animationend", animationEndHandler);
    if (typeof callback === "function") {
      callback();
    }
  }

  nestedModal.addEventListener("animationend", animationEndHandler);
}

// Открытие основного модального окна при клике на ссылку "Подробнее"
const modalLinks = document.querySelectorAll(".modal-link");
modalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const modalId = link.getAttribute("data-modal-id");
    const modal = document.getElementById(modalId);
    animateMainModalIn(modal, "zoom-in-left");
  });
});

// Закрытие основного модального окна при клике на кнопку закрытия
const mainCloseButtons = document.querySelectorAll(".close-button");
mainCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal-id");
    const modal = document.getElementById(modalId);
    animateMainModalOut(modal, "zoom-out-right");
  });
});

// Открытие вложенного модального окна при клике на ссылку
const nestedLinks = document.querySelectorAll(".nested-link");
nestedLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const nestedModalId = link.getAttribute("data-nested-modal-id");
    const nestedModal = document.getElementById(nestedModalId);
    animateNestedModalIn(nestedModal, "slide-up");
  });
});

// Закрытие вложенных модальных окон при клике на кнопку закрытия
const nestedCloseButtons = document.querySelectorAll(
  ".nested-modal .close-button"
);
nestedCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nestedModalId = button.getAttribute("data-modal-id");
    const nestedModal = document.getElementById(nestedModalId);
    animateNestedModalOut(nestedModal, "slide-down");
  });
});

const nestedModals = document.querySelectorAll(".nested-modal");

// Закрытие модальных окон при клике за пределами окна
window.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    modalLinks.forEach((link) => {
      const modalId = link.getAttribute("data-modal-id");
      const modal = document.getElementById(modalId);
      animateMainModalOut(modal, "zoom-out-right");
    });
  }

  if (event.target.classList.contains("nested-modal")) {
    nestedModals.forEach((nestedModal) => {
      animateNestedModalOut(nestedModal, "slide-down");
    });
  }
});
