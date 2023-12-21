import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const getPage=(pagevalue)=>{
    pagevalue=+pagevalue;
    if(typeof(pagevalue)!="number"||pagevalue<=0||!pagevalue){
        pagevalue=1;
    }
    return pagevalue;
}

const Users = () => {
    let [param,setParam]=useSearchParams();
    let initialpage=getPage(param.get("_page"))
    let [data,setData]=React.useState([]); 
    let [page,setPage]=React.useState(initialpage)
    
   
    React.useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/?_page=${page}&_limit=2`)
        .then((res)=>res.json())
        .then((res)=>setData(res))
        .catch((error)=>console.log(error))
    },[page])

    React.useEffect(()=>{
        setParam({"_page":page})
    },[page])

    const handlePage=(value)=>{
        setPage((pre)=>pre+value)
    }
    console.log(param.get("_page"))
    return (
    <div>
        <h1>Users Page</h1>
        {data&&data?.map((ele,i)=>
            <p key={ele.id}>{ele.id} -- <Link to={`/users/${ele.id}`}>{ele.name} </Link></p>
        )}
        <button onClick={()=>handlePage(-1)}>Prev</button>
        <button disabled={true}>{page}</button>
        <button onClick={()=>handlePage(1)}>Next</button>
    </div>
  )
}

export default Users
