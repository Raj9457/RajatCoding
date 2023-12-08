import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { fetch_Weather } from '../redux/actions/fetchweather';
import CityWeather from './CityWeather';


const Weather = () => {
    let [city,setCity]=React.useState("");
    //console.log(city)
    const weather=useSelector((state)=>state);
    const dispatch=useDispatch();
    //console.log(weather.WeatherReducer.weatherinfo)

    //const get_weather=(city)=> dispatch(fetch_Weather(city));
    React.useEffect(()=>{
        dispatch(fetch_Weather(city))
    },[])

    const getWeather=(e)=>{
        e.preventDefault();
        //console.log("city",city)
        if(city==""){
            console.log("No city entered");
        }
        else{
            //console.log("city",city)
            //get_weather(city);
            dispatch(fetch_Weather(city))
        }
    }

  return (
    <div>
      <form onSubmit={getWeather}>
        <div>
          <input type="text" placeholder="Enter City"  onChange={(e)=>setCity(e.target.value)}/>
        </div>
        <input type="submit" />
      </form>
      <div>
        {<CityWeather citydata={weather}/>}
      </div>
      
    </div>
  )
}

export default Weather
