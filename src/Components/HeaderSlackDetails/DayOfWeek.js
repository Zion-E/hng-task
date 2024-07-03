import React from 'react'

function DayOfWeek() {
    const days = ['Sunday',
     'Monday',
     'Tuesday',
     'Wednesday',
     'Thursday',
     'Friday',
     'Saturday'];

     const today = new Date();
     const day = days[today.getDay()];
  return (
    <div>Today is {day}</div>
  )
}

export default DayOfWeek