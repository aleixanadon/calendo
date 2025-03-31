import useCalendar from '../../hooks/useCalendar'

const Calendar = () => {

  const { 
    day,
    month, 
    year, 
    monthString, 
    shortDaysOfWeek,
    daysOfCurrentMonth
  } = useCalendar()
  const tableStyle: React.CSSProperties = { border: "1px solid black" }
  
  return (
    <>
      <div>{monthString} - {year}</div>
      <table style={tableStyle}>
        <tbody>
          <tr>
            {
              shortDaysOfWeek.map((day, index) => (
                <th style={tableStyle} key={index}>{day}</th>
              ))
            }
          </tr>
          {
            daysOfCurrentMonth.map((arr, index) => (
              <tr key={index}>
                {
                  arr.map((val, index) => (
                    <td style={tableStyle} key={index}>{val}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default Calendar