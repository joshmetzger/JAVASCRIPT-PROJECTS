// add 2 numbers
function overFunction(){
    var addSum = 6+4320203824
    document.getElementById('Math').innerHTML = "6 + 4320203824 = " + addSum
}

// subtract 2 numbers
function subtractFunction(){
    var subSum = 6-3
    document.getElementById('Sub').innerHTML = "6 - 3 = " + -subSum
}

// multiply 2 numbers
function multFunction(){
    var subSum = 6*3
    subSum++
    document.getElementById('Mult').innerHTML = "6 * 3, incremented once = " + subSum
}

// divide 2 numbers
function divFunction(){
    var subSum = 6/3
    subSum--
    document.getElementById('Div').innerHTML = "6 / 3, decremented once = " + subSum
}

// modulus of 2 numbers
function modFunction(){
    var modRem = 6%1.78
    document.getElementById('Mod').innerHTML = "6 % 1.78 leaves a mod of: " + modRem
}

// chain 2 Math object methods
window.alert(Math.floor(Math.random() * 100))