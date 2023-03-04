import './App.css';
import Weather from './Components/Weather';
import './Components/style.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [input, setInput] = useState('Delhi');

  const [data, setData] = useState({
    "coord": {
      "lon": 77.2167,
      "lat": 28.6667
    },
    "weather": [
      {
        "id": 721,
        "main": "Haze",
        "description": "haze",
        "icon": "50d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 299.2,
      "feels_like": 299.2,
      "temp_min": 299.2,
      "temp_max": 299.2,
      "pressure": 1018,
      "humidity": 31
    },
    "visibility": 3000,
    "wind": {
      "speed": 4.12,
      "deg": 280
    },
    "clouds": {
      "all": 75
    },
    "dt": 1677928472,
    "sys": {
      "type": 1,
      "id": 9165,
      "country": "IN",
      "sunrise": 1677892436,
      "sunset": 1677934343
    },
    "timezone": 19800,
    "id": 1273294,
    "name": "Delhi",
    "cod": 200
  });

  function weatherData() {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=fa74b5d9c4f1511fb76db2423e99ca38`)
      .then(res => {
        setData(res.data)
      });
  }

  console.log(input)

  useEffect(() => {
    weatherData()
  }, [input]);

  return (
    <div className='weather-main-div'>
      <input type="text" placeholder="Search City" name="text" className="input"
        value={input} onInput={e => setInput(e.target.value)} />
      <Weather data={data} />
    </div>
  );
}

export default App;
