import React from 'react'

const CityWeather = (props) => {
    let datas=props.citydata.WeatherReducer.weatherinfo;
    console.log(datas)
  return (
    <div>
      <h1>{datas.main["temp"]}</h1>
    </div>
  )
}

export default CityWeather
