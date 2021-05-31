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
speak(content);
camera= document.getElementById("camera");
Webcam.attach(camera);
}

function speak(speech){
var synth= window.speechSynthesis;
utterThis= new SpeechSynthesisUtterance(speech);
synth.speak(utterThis);
}

Webcam.set({
    width: 320,
    height: 400,
    image_format: 'png',
png_quality: 70
});