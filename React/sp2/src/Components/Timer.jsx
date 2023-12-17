import React from 'react'

const Timer = () => {
    let [count,setCount]=React.useState(5);
    let [loading,setLoading]=React.useState(true);

    React.useEffect(()=>{
        let id=setInterval(()=>{            
            setCount((prev)=>{
                console.log(prev);
                if(prev<=0){
                    clearInterval(id);
                    return 0;
                }
                return prev-1;
            })            
        },1000)

        let cleanup=()=>{
            clearInterval(id);
        }
        return cleanup;
    },[])
  return (
    <div>
      {loading&&<h1>Timer : {count}</h1>}
      <button onClick={()=>setLoading(!loading)}>In Toggle Counter</button>
    </div>
  )
}

export default Timer
