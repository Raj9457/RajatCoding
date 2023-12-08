
const API_key="c1e881b140f887f5fe445386583a54cd";
export const fetch_Weather=(city="bareilly")=>{
    console.log(city)
    return function (dispatch){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`)
        .then(res=>res.json())
        .then(res=>{
            //console.log(res)    
            return dispatch({type:"FETCH_WEATHER",payload:res})})
        .catch((error)=>{
            console.log(error);
        })
    }
}