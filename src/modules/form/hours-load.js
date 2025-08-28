import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours.js";

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
}
