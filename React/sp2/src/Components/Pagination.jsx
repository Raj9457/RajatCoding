import React from 'react'

export const Pagination = () => {
    let [loading,setLoading]=React.useState(false);
    let [data,setData]=React.useState([]);
    let [page,setPage]=React.useState(1);

    
    let fetchData=async()=>{
        setLoading(true)
        try {
            let res=await fetch(`https://jsonplaceholder.typicode.com/users/?_limit=5&_page=${page}`);
            let resdata=await res.json();
            setData(resdata)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    const PageChange=(value)=>{
        setPage(page+value)
    }
    React.useEffect(()=>{        
        fetchData()

    },[page])

  return (loading?
    <h1>Loading....</h1>:
    <div>
        <h1>Fetch Data with Pagination</h1>
      {data.map((ele)=>
        <li key={ele.id}>{ele.id}-----{ele.name}</li>
      )}
      <div>
        <button disabled={page<=1} onClick={()=>PageChange(-1)}>Previous</button>
        <button>{page}</button>
        <button onClick={()=>PageChange(+1)}>Next</button>
      </div>
    </div>
  )
}
