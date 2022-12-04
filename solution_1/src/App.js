import { useState, useEffect } from "react";
import './App.css';
import { Cafes } from "./CafeData/cafes";
import { Places } from "./CafeData/places";
import { mergeArrays } from "./CafeData";

function App() {
  const [query, setQuery] = useState("");

  const data = mergeArrays(Cafes, Places)

  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <ul className="list">
        {data.filter((asd) =>
          asd.name.toLowerCase().includes(query)
        ).map((user) => (
          <li className="listItem" key={user.place_id}>
            {user.name}, 
            {user.street_no}, 
            {user.locality}, 
            {user.postal_code}, 
            {user.lat}, 
            {user.long}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
