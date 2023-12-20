import React from 'react'

const TimerRef = () => {
    let [time,setTime]=React.useState(3670);
    let timeref=React.useRef(null);

    const starttime=()=>{
        if(timeref.current!=null){
            return
        }
        timeref.current=setInterval(()=>{
            setTime((prev)=>{
                if(prev<=1){
                    clearInterval(timeref.current)
                    return 0;
                }
                return prev-1;
            })
        },1000)
    }

    const stoptime=()=>{
        clearInterval(timeref.current);
        timeref.current=null;
    }

    const restarttime=()=>{
        stoptime();
        setTime(10);
    }

    const timeset=(value)=>{
        return value<10?`0${value}`:value
    }
    const formattime=(time)=>{
        let sec=time%60;
        let min=Math.floor((time%3600)/60);
        let hour=Math.floor(time/3600);
        return `${timeset(hour)}:${timeset(min)}:${timeset(sec)}`;
    }
  return (
    <div>
        <h1>Timer :{formattime(time)}</h1>
        <button onClick={starttime}>Start</button>
        <button onClick={stoptime}>Stop</button>
        <button onClick={restarttime}>Restart</button>
      
    </div>
  )
}

export default TimerRef
