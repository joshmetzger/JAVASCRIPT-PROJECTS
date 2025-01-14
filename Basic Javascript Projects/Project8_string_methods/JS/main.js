var s1 = 'this begins ';
var s2 = 'a brand new, ';
var s3 = 'award winning sentence.';

function concaroo(){
   var sentence = s1.concat(s2, s3);
   document.getElementById('junt').innerHTML = sentence;
}


function chop(){
    var sent = "it was sunny most of the day";
    var bit = sent.slice(7, 12);
    document.getElementById('sent').innerHTML = bit;
}

function upper(){
    var text = document.getElementById('up').innerHTML
    document.getElementById('uppy').innerHTML = text.toUpperCase();
}


function searchString(){
    var ex = 'to ensure proper credit please detach..';
    // show the first index number of where the string or charachter is
    document.getElementById('surch').innerHTML = ex.search('d')
}


var num = 4573.2839365438

function makeString(){
    document.getElementById('makeString').innerHTML = typeof num.toString() + ', number: ' + num.toString()
}


// will show this many charachters on both sides of decimal
function prec(){
    document.getElementById('prec').innerHTML = num.toPrecision(6)
}

// shows this many numbers to the right of the decimal
function fixed(){
    document.getElementById('fixy').innerHTML = num.toFixed(9)
}

function makeNumberObject(n) {
    this.number = n;
}

makeNumberObject.valueOf = function () {
    return this.number;
};

const object1 = new makeNumberObject(4);

function numberObject(){
    document.getElementById('number').innerHTML = typeof object1
}

// console.log(typeof object1)
