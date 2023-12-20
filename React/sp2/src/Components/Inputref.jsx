import React from 'react'

const Inputref = () => {
    let [inputbox,setInupt]=React.useState(new Array(4).fill(""));
    let inputref=React.useRef([]);

    const handleChange=(e,i)=>{
      console.log(e,i)
    
    }
    console.log(inputbox)
    const handleClick=(e)=>{
      e.preventDefault();
    }
  return (
    <div>
      <form>
        {inputbox.map((element,i)=>
      <input type="text" value={inputbox[i]}
      inputref={(ele)=>inputbox.current[i]=ele} 
      onChange={(e)=>handleChange(e,i)}
      style={{width:"10px",height:"10px"}}
      />
      )}
      <button onClick={handleClick}>Add</button>
      </form>
      
    </div>
  )
}

export default Inputref
