// get task from input
function get_todos() {

    var todos = new Array;

    var todos_str = localStorage.getItem('todo');

    // if the input is NOT null then JSON.parse will communicate with the browser to make the task a JS object
    if(todos_str !== null){
        todos = JSON.parse(todos_str);
    }

    return todos;
}

// adds tasks to the get_todos function array
function add(){

    var task = document.getElementById('task').value;

    var todos = get_todos();

    // add new task to end of array
    todos.push(task);

    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

// keeps tasks permanently displayed on screen
function show() {

    var todos = get_todos();

    // set up each task as a ul
    var html = '<ul>';

    // display task to the list in order is was inputted
    for (var i = 0; i < todos.length; i++){
        // display the task as a list item and create the button with "x"
        html += '<li>' + todos[i] + '<button class="remove" id="' + i +  '" onclick="remove(' + i +')">x</button></li>';
    };

    html += '</ul>';

    // display tasks
    document.getElementById('todos').innerHTML = html;

}

function remove(todo){

    var todos = get_todos();

    todos.splice(todo, 1);

    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;

}

// localStorage.clear();


//display inputted task when add item button is clicked
document.getElementById('add').addEventListener('click', add);

// permanantly display inputs:
show();