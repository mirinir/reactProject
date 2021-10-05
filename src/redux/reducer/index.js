// import get from './get.reducer'
// import { combineReducers } from 'redux'



// export default combineReducers({
//     get:get
// })

import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const options = [
    "Monty Python and the Holy Grail",
    "Monty Python's Life of Brian",
    "Monty Python's The Meaning of Life"
  ];
  const filmsByTati = [
    {
      id: 1,
      title: "Jour de fête",
      releasedYear: 1949
    },
    {
      id: 2,
      title: "Play time",
      releasedYear: 1967
    },
    {
      id: 3,
      releasedYear: 1958,
      title: "Mon Oncle"
    }
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedTatiFilm, setSelectedTatiFilm] = useState(filmsByTati[0]);
  return (
    <div className="App">
      <h1>Select Example</h1>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span>Selected option: {selectedOption}</span>

      <select
        value={selectedTatiFilm}
        onChange={(e) =>
          setSelectedTatiFilm(
            filmsByTati.find(film => (film.id == e.target.value))
          )
        }
      >
        {filmsByTati.map((film) => (
          <option key={film.id} value={film.id}>
            {film.title}
          </option>
        ))}
      </select>
      <span>Selected option: {selectedTatiFilm.title}</span>
    </div>
     );
    }