var junt = 'this right here'
var num = '100'

// document.write(typeof junt)
// document.write(typeof (num + 10))

//conditional to check if: number
if(isNaN(0)){
    document.write('it aint')
} else {
    document.write('it is')
}

// show number, or infinite
function isInf(){
    num = -1.8E311

    document.getElementById('inf').innerHTML = num
}

// compare some numbers here
console.log(3 > 10)

console.log(100 -1)

console.log(100 == -1 + 101)

var X = 100
var Y = '100'
console.log(X === Y)

console.log(3 > 10 || X > 101)

console.log(3 < 10 && X >= 100)

console.log(!(4 < 1) && 4 < 100)
