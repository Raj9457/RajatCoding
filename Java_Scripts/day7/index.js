


async function movie_data(){
    try {
        let movie_name=document.getElementById("query").value;
        let res=await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=46db219&s=${movie_name}`);
        let resdata=await res.json();
        console.log(resdata)
    } catch (error) {
        console.log(error)
    }
    
}


document.getElementById("query").addEventListener("input",function(){
    invokefun(movie_data,1000);
})
let id;
function invokefun(func,delay){
    if(id){
        clearTimeout(id);
    }
    id=setTimeout(function(){
        func();
    },delay);
} 