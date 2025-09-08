import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";
import { scheduleDay } from "../schedules/load.js";

const form = document.querySelector("form");

//Torna toda a div, inclusive o input dentro, clicável
const divInputDate = document.querySelector("div .input");

divInputDate.addEventListener("click", () => {
  if (selectedDate.showPicker) {
    selectedDate.showPicker(); // abre o seletor de data (Chrome, Edge, etc.)
  } else {
    selectedDate.focus(); // fallback para navegadores que não suportam showPicker
  }
});

const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

// Define a data atual
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual no lugar do placeholder no input.
selectedDate.value = inputToday;

// Define a data mínima como sendo a data atual.
// selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  // Previne o comportamento padrão de carregar a página.
  event.preventDefault();

  try {
    // Recuperando o nome do cliente
    const name = clientName.value.trim();
    if (!name) {
      return alert("Informe o nome do cliente");
    }

    // Recuperando o horário selecionado
    const hourSelected = document.querySelector(".hour-selected");
    if (!hourSelected) {
      return alert("Selecione um horário");
    }

    //Recuperando apenas a hora do horário
    const [hour] = hourSelected.innerText.split(":");

    /*Inserindo a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour");
    Do jeito acima, o front entende, mas o server.json salva o UTC cru, ou seja, fica 3h a mais na API  
    */
    const when = dayjs(`${selectedDate.value} ${hour}:00`).format(
      "YYYY-MM-DD HH:mm"
    );

    // Faz o agendamento (envia os dados para a API).
    await scheduleNew({
      name,
      when,
    });

    // Atualiza (recarrega) a lista de agendamentos na tela.
    await scheduleDay();

    // Limpa o input de nome do cliente
    clientName.value = "";
  } catch (error) {
    alert("Não foi possível realizar o agendamento");
    console.log(error);
  }
};
