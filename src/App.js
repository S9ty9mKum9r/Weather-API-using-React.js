import React, { useState } from 'react';
import './Searchbar.jpg';
import './App.css';
import axios from 'axios';
function App(){
const [cityName, setCityName] = useState('');
const [name, setName] = useState([]);
const [temp, setTemp] = useState('');
const [humidity, setHumidity] = useState('');
const [windSpeed, setWindSpeed] = useState('');
const apiKey="1f716f47d7fe0364488b5ba099fc42e7";
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`;
const getProducts = async (url) => {
  try{
            const res = await axios.get(url);
            const data = res.data;
            setName(data.name);
            setTemp(data.main.temp);
            setHumidity(data.main.humidity);
            setWindSpeed(data.wind.speed);
        } catch (error){
            console.error('Error fetching data:', error);
            alert("City name not found, Please try again!")
        }   
    }
  const searchBtnHandler = () => {
  getProducts(apiUrl);
  document.querySelector(".weather").style.display ="block"
  }
  return (
  <div className="card">
    <div className="search">
      <input type="text" onChange={(e) => setCityName(e.target.value)} value={cityName} placeholder='Enter City name'/>
      <button onClick={searchBtnHandler}><img src="./images/Searchbar.jpg" alt="search"/>
      </button>
    </div>
       <div class="weather">
          <img src="./images/Weather.png" class="weather-icon" alt="weather"/>
          <h1 class="temp">{temp} °C</h1>
          <h2 class="city">{name}</h2>
       <div class="details">
              <div class="col">
                 <img src="./images/Thermometer.png" class="ther" alt='Humidity'/>
                    <div>
                      <p class="humidity">{humidity}%</p>
                      <p>Humidity</p>
                    </div>
              </div>
          <div class="col">
            <img src="./images/Wind2.png" class="wi" alt='wind'/>
            <div>
                <p class="wind">{windSpeed} km/h</p>
                <p>Wind Speed</p>
            </div>
        </div>
    </div>
</div>
</div>
  )
};
export default App
