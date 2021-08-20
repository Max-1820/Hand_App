var prediction_1=""
var prediction_2=""
Webcam.set({
    width: 350,
    height: 300,
image_format:'png',
png_quality: 90
});
var Camera= document.getElementById("camera");
Webcam.attach('#Camera');

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'"/>';
    });

}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/YcMPDgX8Y/model.json',modelLoaded);
function modelLoaded(){
    console.log('Model Loaded!');

}
function speak(){
    var Synth= Window.speechSynthesis;
speak_data_1="The First Prediction is "+prediction_1;
speak_data_2="The Second Prediction is "+prediction_2;
var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
Synth.speak(utterThis);
}
function check()
{
  img = document.getElementById('captured_image');
  classifier.classify(img, gotResult);
}


function gotResult(error, results) {
if (error) {
  console.error(error);
} else {
  console.log(results);
  document.getElementById("result_hand_name").innerHTML = results[0].label;
  document.getElementById("result_hand_name2").innerHTML = results[1].label;
  prediction_1 = results[0].label;
  prediction_2 = results[1].label;
  speak();
  if(results[0].label == "Awsome")
  {
    document.getElementById("update_hand").innerHTML = "&#128076;";
  }
  if(results[0].label == "Peace")
  {
    document.getElementById("update_hand").innerHTML = "&#9996;";
  }
  if(results[0].label == "Victory")
  {
    document.getElementById("update_hand").innerHTML = "&#9994;";
  }

if(results[0].label == "Point Up")
  {
    document.getElementById("update_hand").innerHTML = "&#128070;";
  
  }
  if(results[0].label == "Point Down")
 {
    document.getElementById("update_hand").innerHTML = "&#128071;";
  } 
  if(results[0].label == "Thumbs Up")
 {
    document.getElementById("update_hand").innerHTML = "&#128077;";
  } 
  if(results[0].label == "Thumbs Down")
  {
     document.getElementById("update_hand").innerHTML = "&#128078;";
   } 
   if(results[1].label == "Awsome")
   {
     document.getElementById("update_hand2").innerHTML = "&#128076;";
   }
   if(results[1].label == "Peace")
   {
     document.getElementById("update_hand2").innerHTML = "&#9996;";
   }
   if(results[1].label == "Victory")
   {
     document.getElementById("update_hand2").innerHTML = "&#9994;";
   }
 
 if(results[1].label == "Point Up")
   {
     document.getElementById("update_hand2").innerHTML = "&#128070;";
   
   }
   if(results[1].label == "Point Down")
  {
     document.getElementById("update_hand2").innerHTML = "&#128071;";
   } 
   if(results[1].label == "Thumbs Up")
  {
     document.getElementById("update_hand2").innerHTML = "&#128077;";
   } 
   if(results[1].label == "Thumbs Down")
   {
      document.getElementById("update_hand2").innerHTML = "&#128078;";
    } 
}
}