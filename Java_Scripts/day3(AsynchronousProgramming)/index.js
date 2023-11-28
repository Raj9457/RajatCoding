// ########## Asychronous Programming#######
// ########## SetInterval

let interval_id=null;
let counter_div=document.getElementById("count");
let sec_div=document.getElementById("seconds");
let min_div=document.getElementById("min");
let hour_div=document.getElementById("hour");
let i=00;
let m=00;
let h=00;

function Counter(){    
    interval_id=setInterval(function(){     
        if(i==62){
            clearInterval(interval_id);
        }           
        if(i==60){
            m++;
            i=0;
        }
        if(m==60){
            h++;
            m=0;           
        }
        i++;
        counter_div.innerText=i;
        sec_div.innerText=i;
        min_div.innerText=m;
        hour_div.innerText=h;
    },1000)
    
}

Counter();

function restart(){
    clearInterval(interval_id);
    i=0;
    m=0;
    h=0;
    counter_div.innerText=0;
    sec_div.innerText=0;
    min_div.innerText=0;
    hour_div.innerText=0;
    Counter()
}
document.getElementById("start").addEventListener("click",Counter)
document.getElementById("stop").addEventListener("click",function(){
    clearInterval(interval_id);
})
document.getElementById("restart").addEventListener("click",restart)