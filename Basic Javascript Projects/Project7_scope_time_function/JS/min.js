var X = 10;
function global(){
    var Y = 200;
    console.log(X + Y);
}

global();

function local(){
    console.log(X);
}

local();

// get a loos time of day
function getTime(){
    if(new Date().getHours <= 12){
        document.getElementById('time').innerHTML = 'It\'s still morning';
    } else {
        document.getElementById('time').innerHTML = 'It\'s after morning';

    }
}

// give user message based on their entered age
function ageMessage(){
    var age = document.getElementById('age').value;

    if(age <= 100){
        document.getElementById('message').innerHTML = 'You are extremely young!';
        console.log('You are extremely young!');
    } else if(age >= 200){
        document.getElementById('message').innerHTML = 'you are old';
        console.log('you are old')
    } else {
        document.getElementById('message').innerHTML = 'you are old';
        console.log('you are slightly old')
    }
}

// use Date object to tell user time of day based on condition
function Time_function(){
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0){
        Reply = "It is morning Time!";
    } else if(Time >= 12 == Time < 18){
        Reply = "It is afternoon.";
    } else{
        Reply = "It is evening time.";
    }
    document.getElementById('Time_of_day').innerHTML = Reply;
}

