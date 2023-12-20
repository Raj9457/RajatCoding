import React from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    let [data,setData]=React.useState([]); 
   
    React.useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((res)=>setData(res))
        .catch((error)=>console.log(error))
    },[])

    return (
    <div>
        <h1>Users Page</h1>
        {data&&data?.map((ele,i)=>
            <p key={ele.id}>{ele.id} -- <Link to={`/users/${ele.id}`}>{ele.name} </Link></p>
        )}
    </div>
  )
}

export default Users
