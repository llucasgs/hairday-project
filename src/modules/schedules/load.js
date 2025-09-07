import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { scheduleShow } from "../schedules/show.js";

// Seleciona o input de data
const selectedDate = document.getElementById("date");

export async function scheduleDay() {
  // Busca a data do input.
  const date = selectedDate.value;

  // Busca os agendamentos já feitos na API.
  const dailySchedules = await scheduleFetchByDay({ date });

  // Exibe os agendamentos na tela.
  scheduleShow({ dailySchedules });

  // Renderiza as horas disponíveis.
  hoursLoad({ date, dailySchedules });
}
