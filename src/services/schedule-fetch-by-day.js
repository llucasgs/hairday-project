import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({ date }) {
  try {
    // Faz a requisição HTTP GET.
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    // Converte o corpo da requisição para um array JS. Quando chamamos .json(), o navegador tenta converter o corpo da resposta em um objeto JavaScript usando JSON.parse.
    const data = await response.json();

    // Filtra os agendamentos de acordo com o dia selecionado.
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    );
    return dailySchedules;
  } catch (error) {
    console.log(error);
    error("Não foi possível buscar os agendamentos do dia selecionado");
  }
}
