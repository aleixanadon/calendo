export function getCalendarForMonth(year: number, month: number): number[][] {
  // first day of the month
  const firstDay = new Date(year, month, 1);
  // total number of days in the month
  const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
  // get the weekday for the first day (0 = sunday, 6 = saturday)
  const startDay = firstDay.getDay();

  // shift so that Monday is 0 and Sunday is 6
  const adjustedStartDay = startDay === 0 ? 6 : startDay - 1;

  // initialize the array for the calendar
  let calendar: number[][] = [];
  let currentDay = 1;

  // calculate the previous month's days that fill the first week
  const previousMonthDays = new Date(year, month, 0).getDate(); // get last day of the previous month
  // get the number of days in the next month (to fill the last week if needed)
  const nextMonthDays = new Date(year, month + 1, 0).getDate();

  // fill the weeks of the calendar
  for (let week = 0; week < 6; week++) {
    let daysOfWeek: number[] = [];

    // add days to the week
    for (let day = 0; day < 7; day++) {
      if (week === 0 && day < adjustedStartDay) {
        // add the previous month's days if the current month doesn't start on monday
        daysOfWeek.push(previousMonthDays - (adjustedStartDay - day) + 1);
      } else if (currentDay > totalDaysInMonth) {
        // add the next month's days when we run out of days in the current month
        daysOfWeek.push(currentDay - totalDaysInMonth);
        currentDay++;
      } else {
        // add the actual day of the current month
        daysOfWeek.push(currentDay);
        currentDay++;
      }
    }

    // if the week has no days, we stop adding
    if (daysOfWeek.some(day => day !== 0)) {
      calendar.push(daysOfWeek);
    }
  }

  return calendar;
}