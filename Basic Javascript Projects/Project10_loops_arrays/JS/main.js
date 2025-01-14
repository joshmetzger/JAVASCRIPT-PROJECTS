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