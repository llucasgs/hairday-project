import { hoursLoad } from "../form/hours-load";

// Seleciona o input de data
const selectedDate = document.getElementById("date");

export function scheduleDay() {
  // Busca a data do input.
  const date = selectedDate.value;

  // Renderiza as horas disponíveis.
  hoursLoad({ date });

  // Busca na API os agendamentos para carregar do lado direito da tela.
  // Busca os horários disponíveis (futuros + não agendados) do lado esquerdo (formulário).
}
