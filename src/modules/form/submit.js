import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

// Define a data atual
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual no lugar do placeholder no input.
selectedDate.value = inputToday;

// Define a data mínima como sendo a data atual.
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  // Previne o comportamento padrão de carregar a página.
  event.preventDefault();
};

//Torna toda a div, inclusive o input dentro, clicável
const divInputDate = document.querySelector("div .input");

divInputDate.addEventListener("click", () => {
  if (selectedDate.showPicker) {
    selectedDate.showPicker(); // abre o seletor de data (Chrome, Edge, etc.)
  } else {
    selectedDate.focus(); // fallback para navegadores que não suportam showPicker
  }
});
