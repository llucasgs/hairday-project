import dayjs from "dayjs";

// Seleciona as seções "manhã, tarde e noite"
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function scheduleShow({ dailySchedules }) {
  try {
    // Primeiro limpa as listas de agendamentos.
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    // Depois renderiza os agendamentos por período.
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");

      // Adiciona o ID do agendamento.
      item.setAttribute("data-id", schedule.id);

      time.textContent = dayjs(schedule.when).format("HH:mm");
      name.textContent = schedule.name;

      // Cria o ícone de cancelar os agendamentos.
      const cancelIcon = document.createElement("img");
      cancelIcon.classList.add("cancel-icon");
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
      cancelIcon.setAttribute("alt", "Ícone para cancelar agendamento");

      // Adiciona o tempo, nome e ícone no item.
      item.append(time, name, cancelIcon);

      // Obtém somente a hora.
      const hour = dayjs(schedule.when).hour();

      // Renderizando o agendamento nas sessões (manhã, tarde, noite) de forma condicional.
      if (hour <= 11) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour <= 17) {
        periodAfternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }
    });
  } catch (error) {
    alert("Não foi possível exibir os agendamentos");
    console.log(error);
  }
}
