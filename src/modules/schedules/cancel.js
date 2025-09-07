import { scheduleDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";

const periods = document.querySelectorAll(".period");

// Gerando um evento de clique para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // O closets() obtém a li pai do elemento clicado.
      const item = event.target.closest("li");

      // Aqui pegamos o ID do agendamento para remover.
      const { id } = item.dataset;

      if (id) {
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        );

        if (isConfirm) {
          // Faz a requisição na API para cancelar.
          await scheduleCancel({ id });
          // Recarregamos os agendamentos.
          scheduleDay();
        }
      }
    }
  });
});
