
let image_array=JSON.parse(localStorage.getItem("images"))||[];
let container=document.getElementById("container");
let image_tag=document.createElement("img");
let i=0;
image_tag.src=image_array[i];
container.append(image_tag)

document.getElementById("add_url").addEventListener("click",function(){
    image_url=document.getElementById("url");
    image_array.push(image_url.value);  
    image_url.value=""
    localStorage.setItem("images",JSON.stringify(image_array))
})

let interval_id=null;
document.getElementById("start").addEventListener("click",function(){
    container.innerHTML=null;
    image_tag.src=image_array[i++];
    container.append(image_tag)
    interval_id=setInterval(function(){
        console.log(i)
        if(i==image_array.length){
            i=0;
        }
        image_tag.src=image_array[i++];
        container.append(image_tag)
    },300)

})
document.getElementById("stop").addEventListener("click",function(){
    clearInterval(interval_id)
})