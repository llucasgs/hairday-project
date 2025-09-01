/*export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      // Remove a classe hour-selected de todas as li não selecionadas.
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });

      // Adiciona a classe hour-selected na li selecionada.
      selected.target.classList.add("hour-selected");
    });
  });
}*/

//Opção mais aprimorada com a função de clicar novamente e remover o evento.
export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      // Se já está selecionado, remove. Senão, marca e remove dos outros.
      if (selected.target.classList.contains("hour-selected")) {
        selected.target.classList.remove("hour-selected");
      } else {
        hours.forEach((hour) => {
          hour.classList.remove("hour-selected");
        });

        selected.target.classList.add("hour-selected");
      }
    });
  });
}
