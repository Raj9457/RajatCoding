


import Get_data from "./Scripts/Get_Data.js"

let container=document.getElementById("container");

const get_data=async()=>{
    let res=await fetch("http://localhost:3000/posts");
    let resdata=await res.json();
    //console.log(resdata);
    Get_data(resdata,container)
}

get_data()