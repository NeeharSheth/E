var Speechrecognition= window.webkitSpeechRecognition;
var recognition= new Speechrecognition();

function start(){
    document.getElementById("textbox").innerHTML= "";
    recognition.start();
}

recognition.onresult= function run(event){
    console.log(event);
var content= event.results[0][0].transcript;
document.getElementById("textbox").innerHTML= content;

if(content == "take my selfie"){
    content = "taking your selfie in 5 seconds";
    console.log(content);
    speak(content);
    setTimeout(function(){take_snapshot();},5000 );
}
else{
    speak(content);
}
}

function speak(speech){
var synth= window.speechSynthesis;
utterThis= new SpeechSynthesisUtterance(speech);
synth.speak(utterThis);
}

function take_snapshot(){
    Webcam.snap(function(data_uri){document.getElementById("display_result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';})
    save();
}

Webcam.set({
    width: 320,
    height: 400,
    image_format: 'png',
png_quality: 70
});
camera= document.getElementById("camera");
Webcam.attach(camera);

function save(){
link= document.getElementById("link");
image= document.getElementById("selfie_image").src;
link.href= image;
link.click();
}