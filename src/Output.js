import React from 'react'

const Output = ({weather, image,isLocationSet, location}) => {
  if(isLocationSet){
    return (
      <div className="details">
          <div className="image">
            <img src={image} alt="location" className='location-image'/>
          </div>
          <div className="weather-details">
            <h3 className='location-text'>{location.toUpperCase()}</h3>
          <h4>Current Temperature: {weather?.main?.temp}</h4>
          <h4>Current Humidity: {weather?.main?.humidity}</h4>
          <h4>Feels Like: {weather?.main?.feels_like}</h4>
          <h4>Current Pressure: {weather?.main?.pressure}</h4>
          <h4>Maximum Temperature: {weather?.main?.temp_max}</h4>
          <h4>Minimum Temperature: {weather?.main?.temp_min}</h4>
          <p>[All units are in metric]</p>
          </div>
        </div>
    )
  }
 
  
}

export default Output