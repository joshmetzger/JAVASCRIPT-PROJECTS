// define function that creates an Object, delete a key value, show on page..
function KVP_func(){
    var dog = {
        name: 'Ivan',
        age: 13,
        color: 'black'
    }

    delete dog.color

    document.getElementById('Dictionary').innerHTML = dog.color
}