import React from 'react'

const Weathern = () => {
    const [city,setCity]=React.useState("");
    console.log("city");
    let form=document.getElementById("but1").addEventListener("click",fun);

    const fun=()=>{
        
    }
    React.useEffect(()=>{
        
    },[city,form]);

  return (
    <div>        
        <input type="text" placeholder="Enter City" value={city} onChange={(e)=>setCity(e.target.value)}/>
        <button id='but1'>Submit</button>
    </div>
  )
}

export default Weathern
