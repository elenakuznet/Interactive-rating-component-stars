const ratingStars = document.querySelectorAll(".star");
const ratingBtn = document.getElementById("rating__button");
const ratingWrapper = document.getElementById("rating__wrapper");
const thanksWrapper = document.getElementById("thanks");
const ratingResult = document.getElementById("result");
const form = document.getElementById("form");
const resetBtn = document.getElementById("reset");

// Форма

let rating;

function handleFormSubmit(event) {
  event.preventDefault();

  // Получаем данные из формы

  const formData = new FormData(form);

  rating = formData.get("rating");
  // console.log(rating);

  // Отправляем данные на сервер
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      // Обрабатываем ответ от сервера
      console.log(response);
    })
    .catch((error) => {
      // Обрабатываем ошибку
      console.error(error);
    });
  return rating;
}

function checkValidity(event) {
  const formNode = event.target.form;
  // console.log(formNode);
  const isValid = formNode.checkValidity();

  formNode.querySelector(".rating__button").disabled = !isValid;
}

form.addEventListener("input", checkValidity);
form.addEventListener("submit", handleFormSubmit);
form.addEventListener("submit", (event) => {
  thanksWrapper.classList.toggle("hidden");
  ratingWrapper.classList.toggle("hidden");
  ratingResult.innerHTML = rating;
  event.target.reset();
});

resetBtn.addEventListener("click", () => {
  thanksWrapper.classList.toggle("hidden");
  ratingWrapper.classList.toggle("hidden");
  ratingBtn.setAttribute("disabled", true);
  console.log("ratingBtn", ratingBtn);
});
