import { useState, useEffect } from "react";
import './App.css';
import { mergeArrays } from "./CafeData";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [cafeData, setCafeData]=useState([])
  const [placeData, setPlaceData]=useState([])


  useEffect(() => {
    getCafes();
    getPlaces();
  }, []);

  const getCafes = async () => {
    const response = await axios.get("https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json");
    setCafeData(response.data);
    console.log("1: "+ response.data)
  };

  const getPlaces = async () => {
    const response = await axios.get("https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json");
    setPlaceData(response.data);
    console.log("2: "+ response.data)
  };


  const new_data = mergeArrays(cafeData, placeData)
  setData(new_data)


  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Street no</th>
            <th>Locality</th>
            <th>Postal code</th>
            <th>Lat</th>
            <th>Long</th>
          </tr>
          {data.filter((asd) =>
            asd.name.toLowerCase().includes(query)
          ).map((user) => (
            <tr key={user.place_id}>
              <td>{user.name}</td>
              <td>{user.street_no}</td>
              <td>{user.locality}</td>
              <td>{user.postal_code}</td>
              <td>{user.lat}</td>
              <td>{user.long}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;
