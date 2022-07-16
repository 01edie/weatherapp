import React from 'react'

const Introduction = ({isLocationSet, isError}) => {
  if(isError){
    return(
      <h3 className='intro-line'>well, we can't check the weather of the cities which don't exist 🌚🌝</h3>
    )
  }
  if(isLocationSet===false){
    return(
      <h3 className='intro-line'>Let's checkOut what's going on with the weather in different cities 😁😁😁👀</h3>
    )
  }
}

export default Introduction