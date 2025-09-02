import { scheduleDay } from "../schedules/load.js";

const selectedDate = document.getElementById("date");

// Recarregando a lista de horários quando o input de data mudar
selectedDate.addEventListener("change", scheduleDay);
