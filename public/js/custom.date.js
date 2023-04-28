const months = [
  'ene',
  'feb',
  'mar',
  'abr',
  'may',
  'jun',
  'jul',
  'ago',
  'sep',
  'oct',
  'nov',
  'dic',
];
const weekDays = ['dom', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'];

function parseDateToJson(date) {
  const day = date.getDate() >= 10 ? date.getDate() : '0' + date.getDate();
  const hour = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours();
  const minute =
    date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();
  const weekDay = weekDays[date.getDay()];
  const month = months[date.getMonth()];

  return {
    day,
    month,
    year: date.getFullYear(),
    hour,
    minute,
    // second: date.getSeconds(),
    // millisecond: date.getMilliseconds(),
    stringDate: `${weekDay} ${day} de ${month} de ${date.getFullYear()}`,
    formatTime: `${hour}:${minute}`,
  };
}

function parseDateToCalendar(date) {
  return `${date.getFullYear()}-` +
    `${(date.getMonth() + 1).toString().padStart(2, '0')}-` +
    `${date.getDate().toString().padStart(2, '0')} ` +
    `${date.getHours().toString().padStart(2, '0')}:` +
    `${date.getMinutes().toString().padStart(2, '0')}:` +
    `${date.getSeconds().toString().padStart(2, '0')}`;
}
