var s1 = 'this begins ';
var s2 = 'a brand new, ';
var s3 = 'award winning sentence.';

function concaroo(){
   var sentence = s1.concat(s2, s3);
//    document.getElementById('junt').innerHTML = sentence;
   console.log(sentence);
}

concaroo();

function chop(){
    var sent = "it was sunny most of the day";
    var bit = sent.slice(7, 12);
    document.getElementById('sent').innerHTML = bit;
}


console.log('the is all uppercase now'.toUpperCase())

var ex = 'to ensure proper credit please detach..';
// show the first index number of where the string or charachter is
console.log(ex.search('O'))


var num = 4573.2839365438
console.log(typeof num.toString())
// will show this many charachters on both sides of decimal
console.log(num.toPrecision(6))
// shows this many numbers to the right of the decimal
console.log(num.toFixed(9))

function makeNumberObject(n) {
    this.number = n;
}

makeNumberObject.valueOf = function () {
    return this.number;
};

const object1 = new makeNumberObject(4);

console.log(typeof object1)
