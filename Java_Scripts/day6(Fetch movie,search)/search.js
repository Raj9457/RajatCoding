//----Search-----

document.getElementById("search").addEventListener("click",function(){
    let movie_name=document.getElementById("query");
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=46db219&s=${movie_name}`)
    .then(function(res){
        return res.json();
    }).then(function(res){
        console.log(res);
    }).catch(function(error){
        console.log(error);
    })    
})

document.getElementById("search").addEventListener("click",async function(){
    try {
        let movie_name=document.getElementById("query");
        let res=await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=46db219&s=${movie_name}`);
        let resdata=await res.json();
        console.log(resdata)
    } catch (error) {
        console.log(error)
    }
    
})