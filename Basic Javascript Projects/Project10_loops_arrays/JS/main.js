var str = 'testing length of string charachters';
document.getElementById('Loop').innerHTML = str.length


function for_Loop(){
    var instruments = ['tuba', 'potato', 'flute', 'guitar', 'keys'];
    var stuff = '';
    var X;
    console.log(instruments.length)
    for(X = 0; X < instruments.length; X++){
        stuff += instruments[X] + "<br>";
    }
    document.getElementById('List_of_Instruments').innerHTML = stuff
}

function array_Function(){
    var instruments = ['tuba', 'potato', 'flute', 'guitar', 'keys'];
    
    document.getElementById('Array').innerHTML = instruments[1] + ' is not an instrument, but a ' + instruments[3] + ' is.'
}

const food = {veggie: 'potato', fruit: 'apple', protein: 'chicken'};
food.veggie = 'broccoli';
food.grain = 'rice';
function constant_Function(){
    
    // document.getElementById('Constant').innerHTML = food.protein;
    document.getElementById('Constant').innerHTML = food.veggie;

    // document.getElementById('Constant').innerHTML = food.grain;

}

// experiment with scope and LET
{
    let str = 'changed';
    console.log(str);
}
console.log(str);

function ret(){
    return str;
}

console.log(ret());

let person = {
    age: 33,
    yearsAtJob: 5,
    percentOfLifeAtJob : function(){
        return (this.age / this.yearsAtJob * 100);
    }
};
document.getElementById('person').innerHTML = person.percentOfLifeAtJob();


// stops at 4
let A = 10;

while(A > 0){
    if(A === 4){
        break;
    }
    A = A - 1;
    console.log(A)

}

// let B = 0;

// while(B < 10){
//     if(B === 4){
//         continue;
//     }
//     B = B + 1;
//     console.log(B)

// }

// basically just skips 3
let text = '';
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
}

console.log(text)


