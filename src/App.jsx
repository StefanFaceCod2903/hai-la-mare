import { useState } from "react";
import "./App.css";
import CityInput from "./components/cityInput/CityInput";
import CalendarInput from "./components/calendarInput/CalendarInput";
import SearchButton from "./components/searchButton/SearchButton";
function App() {
  const [date, handleDateChange] = useState(new Date());

  const [tabel, setTabel] = useState({});

  function requestDepartures() {
    fetch(
      "https://raw.githubusercontent.com/StefanFaceCod2903/hai-la-mare/main/db.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTabel(data);
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
