
status1=""
objects=[]
function setup(){
    canvas=createCanvas(800,600)
    canvas.center()
     video=createCapture(VIDEO)
     video.size(800,600)
     video.hide()
     objectDetector=ml5.objectDetector("cocossd",modelLoaded)
     document.getElementById("status").innerHTML="Status : Detecting Objects"
}

function preload(){
    image1=loadImage("Traffic images.jpg")
}
 

 function modelLoaded(){
    console.log("Model is Loaded!")
    status1=true
}
function gotResult(error,result){
if(error){
    console.log(error)

}
    console.log(result)
    objects=result




}
function draw(){
    image(video,0,0,800,600)
    if(status1 !=""){
        objectDetector.detect(video,gotResult)
        document.getElementById("status").innerHTML="objectsDetected"
          length=objects.length
       for(i=0; i<length; i++){
        object_name=objects[i].label
        object_confidence=Math.floor(objects[i].confidence*100)
        object_x=objects[i].x
        object_y=objects[i].y
        object_width=objects[i].width
        object_height=objects[i].height
        fill("aquamarine")
        noFill()
        stroke("red") 
        //lineWidth("2")
        rect(object_x,object_y,object_width,object_height)
        text(object_name+" "+object_confidence+"%",object_x+15,object_y+15)
       }           

         
      
    }
 }

