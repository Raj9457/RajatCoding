
const Get_Data=(data,location)=>{
    location.innerHTML=null;
    data.forEach((ele)=>{
        //console.log(ele.caption)
        let div=document.createElement("div");
        let image=document.createElement("img");
        image.src=ele.image_url;
        let caption=document.createElement("p");
        caption.innerText=ele.caption;
        div.append(image,caption);
        location.append(div);
    })    
}

export default Get_Data;