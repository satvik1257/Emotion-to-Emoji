prediction_1="";
prediction_2="";
Webcam.set({
    width:350,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapsot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}
console.log('ml5',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6wqNAD618/model.json',modelLoaded);
function modelLoaded()
{
console.log("model loaded successfully");
}
function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1="The first prediction is"+prediction_1;
    
    speak_data_2="and the second prediction is"+prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    utterThis.rate = 0.5;
    synth.speak(utterThis);

}
function check()
{
  img=document.getElementById("captured_image");
  classifier.classify(img,got_result);
}
function got_result(error,results)
{
if(error)
{
console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML=results[0].label;
    document.getElementById("result_emotion_name2").innerHTML=results[1].label;
    prediction_1=results[0].label;
    prediction_2=results[1].label;
    speak();
    if(results[0].label == "happy")
    {
    document.getElementById("result_emoji").innerHTML="&#128522;";
    }
    if(results[0].label == "angry")
    {
    document.getElementById("result_emoji").innerHTML="&#128545;";
    }
    if(results[0].label == "crying")
    {
    document.getElementById("result_emoji").innerHTML="&#128549;";
    }
    if(results[0].label == "sad")
    {
    document.getElementById("result_emoji").innerHTML="&#128577;";
    }
    if(results[0].label == "smiling")
    {
    document.getElementById("result_emoji").innerHTML="&#128516;";
    }
    if(results[0].label == "growling")
    {
    document.getElementById("result_emoji").innerHTML="&#128548;";
    }

    if(results[1].label == "happy")
    {
    document.getElementById("result_emoji2").innerHTML="&#128522;";
    }
    if(results[1].label == "angry")
    {
    document.getElementById("result_emoji2").innerHTML="&#128545;";
    }
    if(results[1].label == "crying")
    {
    document.getElementById("result_emoji2").innerHTML="&#128549;";
    }
    if(results[1].label == "sad")
    {
    document.getElementById("result_emoji2").innerHTML="&#128577;";
    }
    if(results[1].label == "smiling")
    {
    document.getElementById("result_emoji2").innerHTML="&#128516;";
    }
    if(results[1].label == "growling")
    {
    document.getElementById("result_emoji2").innerHTML="&#128548;";
    }
}
}