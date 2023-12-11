

let id;
let caption;
let imageEvent=document.getElementById("image");
let imageEvent_update=document.getElementById("update_image");
let btn=document.getElementById("create_btn")
btn.disabled=true;

imageEvent.addEventListener("change",function(){
    handleEvent(event)
})
imageEvent_update.addEventListener("change",function(){
    handleUpdateEvent(event)
})


btn.addEventListener("click",function(){
    addPost();
})

async function addPost(){
    id=document.getElementById("id").value;
    caption=document.getElementById("caption").value;
    try {
        let send_data={
            id,
            caption,
            image_url,
        }
        console.log(caption)
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
    console.log(caption,id)
    try {
        
        let actual_image=image.files[0];
        let form=new FormData();
        form.append("image",actual_image)
        let res=await fetch("https://api.imgbb.com/1/upload?expiration=600&key=354293956a55a078d928bbedad9c1a77",{
            method:'POST',
            body:form,
        })
        let resdata=await res.json();
        image_url=resdata.data.display_url;
        console.log(image_url)
        btn.disabled=false;

    } catch (error) {
        console.log(error)
    }    
}



let delete_btn=document.getElementById("delete_btn");
delete_btn.addEventListener("click",async function(){
    let del_id=document.getElementById("delete_id").value;
    console.log(del_id);
    try {
        let res=await fetch(`http://localhost:3000/posts/${del_id}`,{
            method:'DELETE',
        })
        let resdata=await res.json();
    } catch (error) {
        console.log(error);        
    }  
})

let update_btn=document.getElementById("update_btn");
update_btn.addEventListener("click",async function(){
    let update_id=document.getElementById("update_id").value;
    let update_caption=document.getElementById("update_caption").value;
    let updated_data={
        caption:update_caption,
    }
    console.log(updated_data)
    try {
        let res=await fetch(`http://localhost:3000/posts/${update_id}`,{
            method:'PATCH',
            body:JSON.stringify(updated_data),
            headers:{
                'Content-Type':'application/json',
            }
        })
        let resdata=await res.json();

    } catch (error) {
        console.log(error)
    }
})




//put update


const handleUpdateEvent=async (event)=>{
    console.log(caption,id)
    try {
        
        let actual_image=imageEvent_update.files[0];
        let form=new FormData();
        form.append("image",actual_image)
        let res=await fetch("https://api.imgbb.com/1/upload?expiration=600&key=354293956a55a078d928bbedad9c1a77",{
            method:'POST',
            body:form,
        })
        let resdata=await res.json();
        image_url=resdata.data.display_url;
        console.log(image_url)
        btn.disabled=false;

    } catch (error) {
        console.log(error)
    }    
}
let update_put=document.getElementById("update_btn_put");
update_put.addEventListener("click",async function(){
    let update_id_put=document.getElementById("update_id_put");
    let update_caption_put=document.getElementById("update_caption_put");
    let updated_data={
        id:update_id_put,
        caption:update_caption_put,
        image_url:image_url
    }

    try {
        let res=await fetch(`http://localhost:3000/posts/${update_id_put}`,{
            method:'PUT',
            body:JSON.stringify(updated_data),
            headers:{
                'Content-Type':'application/json',
            }
        })
        let resdata=await res.json();
        console.log(resdata);
    } catch (error) {
        console.log(error)
    }

})



















