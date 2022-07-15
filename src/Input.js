import React,{useEffect} from 'react';


const Input = ({setWeather, setLocation,location,setImage,image, weather}) => {
  
    
    const openWeatherMap = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=0cb79c67df5904e68ba7f3f53fade759&units=metric`;
  
    const unSplash = `https://api.unsplash.com/search/photos?query=${location}&client_id=hh7U9JN2SgyK4qFzSxktF7Jl1IKXrJRlA2ZEEUCXUnY`;
  
 
    function fetchWeather(){

      // weather api
      fetch(openWeatherMap)
      .then(response=>{
        if(response.ok){
          console.log(response);
          return response.json();
        }
        else{
          return alert('city not found');
        }
      })
      .then(result=>{
        console.log(result);
        setWeather(result);
      })


      // image api
      fetch(unSplash)
      .then(res=>{
        if(res.ok){
          return res.json();
        }
        else{
          throw new Error('you made a mistake');
        }
      })
      .then(result=>{
        console.log(result);
        setImage(result?.results[0]?.urls?.raw);
      })

   
    }
    useEffect(()=>{
      fetchWeather();
    },[]);
  return (
    <div className='input-container'>
      <input type="text" className='location-input' onChange={(e)=>{setLocation(e.target.value)}}  placeholder='Enter City'/>
      <button type='button' className='btn' onClick={fetchWeather}>Check</button>

    </div>
  )
}

export default Input;