import React from 'react'
import { useParams } from 'react-router-dom'

const SingleUser = () => {
    let [details,setDetails]=React.useState({});
    let {id}=useParams();

    React.useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>res.json())
        .then((res)=>setDetails(res))
        .catch((error)=>console.log(error));
    },[id])
  return (
    <div>
      <h1>Single User Details</h1>
      <div>
        <p>{details.id}</p>
        <p>{details.username}</p>
        <h3>{details.name}</h3>
        
      </div>
    </div>
  )
}

export default SingleUser
