
let apikey="AIzaSyAHkJd9FIuyQEZlphPnCkohyr83Eqm6PME";

document.getElementById("search").addEventListener("click",async ()=>{
    try {
        let query=document.getElementById("query").value;
        let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${apikey}`);
        let resdata=await res.json();
        const actual_data=resdata.items;
        append_data(actual_data)
    } catch (error) {
        console.log(error);
    }
    
})
document.getElementById("rating").addEventListener("click",async ()=>{
    try {
        let query=document.getElementById("query").value;
        let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${apikey}&order=rating`);
        let resdata=await res.json();
        const actual_data=resdata.items;
        append_data(actual_data)
    } catch (error) {
        console.log(error);
    }
    
})

const append_data=(data)=>{
    let container=document.getElementById("container");
    container.innerHTML=null;
    console.log(data)
    data.forEach(({snippet:{channelTitle,title,thumbnails},id:{videoId},snippet})=>{
        let div=document.createElement("div");
        let image=document.createElement("img");
        image.src=thumbnails.high.url;
        let video_title=document.createElement("h3");
        video_title.innerText=title;
        let channel_title=document.createElement("h4");
        channel_title.innerText=channelTitle;
        div.append(image,video_title,channelTitle);
        container.append(div);
        
        let data={
            videoId,
            snippet
        }
        div.addEventListener("click",()=>{
            storeclickedvideo(data);
        })
    })
}


const storeclickedvideo=(data)=>{
    localStorage.setItem("clickedvideo",JSON.stringify(data));
    window.location.href="video.html"
}