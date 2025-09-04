import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Informa ao servidor que o corpo da requisição estará no formato JSON
      },
      body: JSON.stringify({ id, name, when }),
      /* Converte o objeto JS em uma string JSON (serialização: transformar estrutura de dados em string para enviar pela rede).
      O contrário é a desserialização: JSON.parse(text).
      */
    });

    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar. Tente novamente mais tarde.");
  }
}
