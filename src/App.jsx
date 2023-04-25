import { useState } from "react";
import "./App.css";
import CityInput from "./components/cityInput/CityInput";
import CalendarInput from "./components/calendarInput/CalendarInput";
import SearchButton from "./components/searchButton/SearchButton";
function App() {
  const [date, handleDateChange] = useState(new Date());

  const [tabel, handleNewTabel] = useState({});

  function requestDepartures() {
    fetch(
      "https://jsonplaceholder.typicode.com/hai-la-mare/db.json/gherla-cluj-lv"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        tabel(data);
        console.log(data);
      });
  }
  return (
    <>
      <form>
        <div class="form-row">
          <div class="col text-left">
            <CityInput name="Plecare" placeholder="ex. Cluj-Napoca" />
          </div>
          <div class="col text-left">
            <CityInput name="Sosire" placeholder="ex. Baia Mare" />
          </div>
          <div class="col text-left">
            <CalendarInput date={date} handleDateChange={handleDateChange} />
          </div>
        </div>
        <SearchButton onClick={requestDepartures} />
      </form>
    </>
  );
}

export default App;
