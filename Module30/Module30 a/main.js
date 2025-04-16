varwakeuptime;
var distime;
var sleeptime;
var noob = 12;

function ShowCurrentTime(){
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = "AM";

    if(hours >= noon){
        meridian = "PM"
    }
     var clockTime = hours + ":" + minutes + ":" + seconds + "" + meridian;
     clock.innerText = clockTime;
     changeImage();
};
var oneSecond = 1000;
setInterval(showCurremntTime, oneSecond);

function changeTmage(){
    var time = new Date().getHours();
    console.log(time);

    var image ="ds_clock.png";
    var imageHTML = documents.getElementById("timeImage");

    if(time == wakeuptime){
        
    }
}
