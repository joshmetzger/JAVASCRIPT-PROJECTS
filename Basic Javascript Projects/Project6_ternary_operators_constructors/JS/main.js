function Ride_Function(){
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
    console.log(Height)
}

function can_Vote(){
    var age = document.getElementById('age').value;
    canVote = (age >= 18) ? "You are old enough":"You are NOT old enough";
    console.log(age);
    console.log(canVote + " to vote");
}

function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year= Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

var Josh = new Vehicle("Toyota","Camry", 2014, "Black");

function showJosh(){
    document.getElementById('New_and_This').innerHTML = Josh.Vehicle_Make
}

var yes = true;

function Dog(Breed, Color, Age){
    this.Dog_Breed = Breed;
    this.Dog_Color = Color;
    this.Dog_Age = Age;
}

function nesty(){
    var ptag = document.getElementById('Nested_Function');
    function nested(){
        ptag.innerHTML = "nest function works";
    }
    nested();
}