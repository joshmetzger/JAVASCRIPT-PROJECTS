function pick_dog(){
    var dog_output;
    var ugly_dogs = document.getElementById('dog_input').value;
    switch(ugly_dogs){
        case "pug":
            dog_output = 'a little ugly try again';
        break;
        case "greyhound":
            dog_output = 'a little ugly try again';
        break;
        case "dog without a head":
            dog_output = 'gross! you win!';
        break;
        case "lab":
            dog_output = 'not very ugly try again';
        break;
        default:
        dog_output = "please pick a winner";
    }
    document.getElementById('output').innerHTML = dog_output;
    
}

function changeItems(){
    const items = document.getElementsByClassName('li');
        console.log(items);

    for (let i = 0; i < items.length; i++) {
        items[i].innerHTML = 'changed!';
    }
}

var canvy = document.getElementById('canvy');
var contx = canvy.getContext('2d');

// circle
contx.beginPath();
contx.arc(100,200,40,0,4 * Math.PI);
contx.stroke();

//gradient
var grade = contx.createLinearGradient(50,100,400,0);
grade.addColorStop(0, "purple");
grade.addColorStop(1, "beige");

//fill
contx.fillStyle = grade;
contx.fillRect(10,10,150,80);
