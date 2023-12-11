let imageEvent=document.getElementById("image")
imageEvent.addEventListener("change",function(){
    handleEvent(event)
})

document.getElementById("create_btn").addEventListener("click",function(){
    addPost();
})

async function addPost(){
    try {
        let caption=document.getElementById("caption").value;
        let id=document.getElementById("id").value;
        console.log(id,caption,image_url);
        
        let send_data={
            id,
            caption,
            image_url,
        }
        let res=await fetch("http://localhost:3000/posts",{
            method:'POST',
            body: JSON.stringify(send_data),
            headers:{
                'Content-Type':'application/json'
            }
        })
        let resdata=await res.json();
        console.log(resdata)
    } catch (error) {
        console.log(error);
    } 

    
}

let image_url=""
const handleEvent=async (event)=>{
    try {
        let actual_image=image.files[0];
        let form=new FormData();
        form.append("image",actual_image)
        let res=await fetch("https://api.imgbb.com/1/upload?expiration=600&key=354293956a55a078d928bbedad9c1a77",{
            method:'POST',
            body:form,
        })
        let resdata=await res.json();
        console.log(resdata)
        image_url=resdata.data.display_url;
        console.log(image_url)

    } catch (error) {
        console.log(error)
    }
    
}
console.log(image_url)
