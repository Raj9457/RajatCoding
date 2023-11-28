// ---- Fetch ------

fetch('https://fakestoreapi.com/products/categories')
            .then(function(res){return res.json()})
            .then(json=>console.log(json))

fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json=>console.log(json))

async function getData(){
    try {
        let res=await fetch('https://fakestoreapi.com/products/category/electronics')
        let resData=await res.json();
        console.log(resData)
    } catch (error) {
        console.log(error)
    }
}

getData()