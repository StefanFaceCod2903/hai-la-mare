import React from "react";
import Calendar from "react-calendar";
import "./calendarInput.css";

function CalendarInput({ handleDateChange, date }) {
  return (
    <>
      <label for="date-picker">Data sosire</label>
      <div id="date-picker" class="dropdown">
        <button
          class="btn btn-outline-primary dropdown-toggle"
          type="button"
          id="calendar-dropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {date.toDateString()}
        </button>
        <div class="dropdown-menu" aria-labelledby="calendar-dropdown">
          <Calendar onChange={handleDateChange} value={date} />
        </div>
      </div>
    </>
  );
}

export default CalendarInput;
