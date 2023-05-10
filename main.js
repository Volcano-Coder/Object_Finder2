status="";

function preload(){
}

function setup(){
    canvas=createCanvas(480, 380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(480, 380);
    video.hide();
}

function start(){
objectDetector=ml5.objectDetector('cocossd', modelLoaded)
document.getElementById("status").innerHTML="Status: Detecting objects";
}

function modelLoaded(){
    console.log("modelLoaded");
    status=true;
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}

function draw(){
    image(video, 0, 0, 480, 380);
}