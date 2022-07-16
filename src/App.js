import React, { useState } from 'react';
import './App.css';
import Input from './Input';
import Output from './Output';
import Introduction from './Introduction';

function App() {
  const [weather, setWeather] = useState({});
  const [image, setImage] = useState('https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&q=80');
  const [location, setLocation] = useState('You are at void');
  const [isLocationSet, setIsLocationSet] = useState(false);
  const [isError, setIsError] = useState(false);






  return (
    <div className='container'>
      <h1 className='heading'>Check Weather🌡⚡⛈</h1>
      <Introduction isLocationSet={isLocationSet} isError={isError}></Introduction>
      <h2 className="current-location">Current Location : {location}</h2>
      <Input setWeather={setWeather} setLocation={setLocation} location={location}
        setImage={setImage} image={image} weather={weather} setIsLocationSet={setIsLocationSet}
        isLocationSet={isLocationSet} setIsError={setIsError}>

      </Input>
      <Output weather={weather} image={image} isLocationSet={isLocationSet} location={location}>

      </Output>





    </div>

  );
}

export default App;
