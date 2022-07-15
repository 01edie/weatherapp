import React, { useState, useEffect } from 'react';
import './App.css';
import Input from './Input';

function App() {
    const [weather, setWeather] = useState({});
    const [image, setImage] = useState('https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&q=80');
    const [location, setLocation] = useState('None');
    

  return (
    <div className='container'>
      <h1 className='heading'>Check Weather</h1>
      <h2 className="current-location">Current Location : {location}</h2>
      <Input setWeather={setWeather} setLocation={setLocation} location={location} setImage={setImage} image={image} weather= {weather}></Input>

      <div className="details">
        <div className="image">
          <img src={image} alt="location" className='location-image'/>
        </div>
        <h4>Current Temperature: {weather?.main?.temp}</h4>
        <h4>Current Humidity: {weather?.main?.humidity}</h4>
        <h4>Feels Like: {weather?.main?.feels_like}</h4>
        <h4>Current Pressure: {weather?.main?.pressure}</h4>
        <h4>Maximum Temperature: {weather?.main?.temp_max}</h4>
        <h4>Minimum Temperature: {weather?.main?.temp_min}</h4>
        <p>[All units are in metric]</p>
      </div>


    </div>

  );
}

export default App;
