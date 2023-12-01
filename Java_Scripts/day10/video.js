
window.addEventListener("load",()=>{
    let video_div=document.getElementById("video")
    let data=JSON.parse(localStorage.getItem("clickedvideo"));
    console.log(data)
    let iframe=document.createElement("iframe");
    iframe.src=`https://www.youtube.com/embed/${data.videoId}?autoplay=1&mute=1`;
    iframe.width="100%";
    iframe.height="95%";
    iframe.setAttribute("allowfullscreen",true)
    video_div.append(iframe)

})