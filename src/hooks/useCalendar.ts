import { use, useEffect, useState } from "react";
import { getCalendarForMonth } from "../utils/getCalendarForMonth";

const useCalendar = () => {

  const date = new Date()

  const [day, setDay] = useState(date.getDay())
  const [month, setMonth] = useState(date.getMonth())
  const [year, setYear] = useState(date.getFullYear())

  const daysOfWeek: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const shortDaysOfWeek: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const monthsOfYear: string[] = [
    "January", "February", "March", "April", 
    "May", "June", "July", "August", 
    "September", "October", "November", "December"
  ];

  const getMonthString = (month: number) => {
    return monthsOfYear[month]
  }

  const actualMonthString = getMonthString(month)
  const [monthString, setMonthString] = useState(actualMonthString)

  const daysOfCurrentMonth = getCalendarForMonth(year, month)

  useEffect(() => {

  }, [])

  return {
    day,
    month,
    year,
    monthString,
    shortDaysOfWeek,
    daysOfCurrentMonth
  }
}

export default useCalendar