var idx = Math.floor((new Date().getHours()));
var body = document.getElementsByTagName("body")[0];
body.className = "heaven-" + idx;

navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((stream)=>{

    console.log(stream)
  
  
  
    let video = document.getElementById('video')
  
  
  
    video.srcObject = stream
  
  
  
  
  }).catch((err)=>console.log(err))