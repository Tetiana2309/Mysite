// Получаем все кнопки с классом 'price-btn'
const buttons = document.querySelectorAll(".price-btn");

// Добавляем обработчики событий для каждой кнопки
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Получаем родительский элемент кнопки, который является блоком 'card-price'
    const card = button.parentElement;

    // Переключаем класс 'active' для карточки и её дочерних элементов
    card.classList.toggle("active");

    // Переключаем класс 'active' для заголовка, цены и текста внутри карточки
    const title = card.querySelector(".title");
    const price = card.querySelector(".price");
    const text = card.querySelector(".text");

    title.classList.toggle("active");
    price.classList.toggle("active");
    text.classList.toggle("active");
  });
});
