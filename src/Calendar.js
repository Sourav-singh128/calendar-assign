import React from "react";
import "./calendar.css";
import DateBlock from "./DateBlock";
const Calendar = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  const dateArray = Array(42).fill(null);
  dateArray.forEach((val, ind) => {
    if (ind >= 6 && ind <= 36) {
      dateArray[ind] = ind - 5;
    }
  });
  console.log("dateArray ", dateArray);

  const insertDate = () => {
    fetch("/newDate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 8,
        date: "08-10-2023",
        attendance: "Present",
      }),
    });
  };
  return (
    <>
      <div className="container">
        <div className="days-heading">
          {days.map((day, ind) => {
            return (
              <div key={ind} className="days">
                {day}
              </div>
            );
          })}
        </div>
        <div className="date-container">
          {dateArray.map((date, ind) => (
            <DateBlock key={ind} date={date} />
          ))}
        </div>
      </div>
      {/* <button onClick={insertDate}>insert</button> */}
    </>
  );
};

export default Calendar;
