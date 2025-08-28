import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours.js";
const hours = document.getElementById("hours");

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    // Recupera somente a hora com uma desestruturação.
    const [scheduleHour] = hour.split(":");

    // Adiciona a hora na data e verifica se está no passado. Se sim, precisamos bloquear para o usuário não conseguir usar.
    const isHourFuture = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    // Define se o horário está disponível.
    return {
      hour,
      available: isHourFuture,
    };
  });

  // Renderizando os horários.
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");

    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    li.textContent = hour;

    if (hour === "8:00") {
      hourHeaderAdd("Manhã");
    } else if (hour === "12:00") {
      hourHeaderAdd("Tarde");
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite");
    }

    hours.append(li);
  });
}

// Separando os horários pelo período
function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}
