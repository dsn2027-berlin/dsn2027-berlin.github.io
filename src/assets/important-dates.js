function updatePastDates() {
  const now = Date.now();

  for (const date of document.querySelectorAll("time[data-end-date]")) {
    // The next midnight in UTC−12 is noon UTC on the following day.
    const end = Date.parse(`${date.dataset.endDate}T12:00:00Z`) + 86400000;
    date.classList.toggle("past-date", now >= end);
  }
}

updatePastDates();
setInterval(updatePastDates, 60000);
