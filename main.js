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
}

