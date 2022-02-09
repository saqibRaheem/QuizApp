var myQuiz=[
{
    Question:" Q1.<br> 2 + 5 = ?",
    answer:[
        "6",
        "25",
        "7"

    ],
    correctAnswer:"c"
},
{
    Question:"  Q2.<br> whats your name",
    answer:[
        "6",
        "25",
        "7"

    ],
    correctAnswer:"c"
},
{
    Question:" Q3.<br> whatr name",
    answer:[
        "6",
        "25sgfsdf",
        "7"

    ],
    correctAnswer:"c"
},
{
    Question:"  Q4.<br> hgchgchsdgsdfgdsfhsdfghdfghdfghdfghdfgh" ,
    answer:[
        "dsfgdsg6",
        "2sdfgdsfg5",
        "7"

    ],
    correctAnswer:"c"
},
{
    Question:" Q5.<br> wgdtrdy",
    answer:[
        "6",
        "25",
        "7dsgdsfg"

    ],
    correctAnswer:"c"
},
]
// var msecHeading= document.getElementById("milsec")
// var secHeading= document.getElementById("sec")
// var minHeading= document.getElementById("min")
// var hourHeading= document.getElementById("hour")
// var startBtn= document.getElementById("start-btn")
// var onDiv = document.getElementById("on")
// var msec = 00;
// var sec = 00;
// var min = 00;
// var hour = 00;
// var interval;

// function Timer(){
//     msec++
//     msecHeading.innerHTML = msec
//     if(msec == "100"){
//         sec++
//         secHeading.innerHTML = ":"+sec
//         msec = 00
//     }
//     if(sec == "60"){
//         min++
//         minHeading.innerHTML = ":"+min
//         sec = 00
//     }
//     if(min == "60"){
//         hour++
//         hourHeading.innerHTML = hour
//         min= 00
//     }
    
// }


// function start() {
//     alert("Ready")
//     // startBtn.classList = " fa fa-pause";
//     // console.log(startBtn.classList );
//     // startBtn.onclick = pause;
//     interval = setInterval(Timer, 10);
// }
$(function(){
    let totalTime = 10;
    let min = 0;
    let sec = 0;
    let conter = 0;
    

    let timer = setInterval(function(){
 min = Math.floor((totalTime - conter)/ 60);
 sec = totalTime - (min * 60) - conter

 $(".timeBox span").text(min + ":" + sec);
 conter++;
    },1000)
    if(timer>=2){
        nextQuestion()
        }
    
});

function showQuenTion(e){
  
    var show = document.getElementById("showQuestion");
    show.innerHTML=  myQuiz[e].Question;

    var  optionEment = document.getElementsByClassName("optionEment")
    for(var i=0 ; i< optionEment.length ; i++){
     optionEment[i].innerHTML=myQuiz[e].answer[i]

    }
    
}

var QuestionCount = 0
function nextQuestion(){
   
    QuestionCount++;
    showQuenTion(QuestionCount )
    
}

function chacked(e){
    var  optionEment = document.get("optionEment")
    for(i=0; i<optionEment.length;i++){
        console.log(optionEment.chacked);
    }
    
}