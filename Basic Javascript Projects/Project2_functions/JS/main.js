// create strings to concatenate
var word1 = "this here,"
var word2 = " over there"

// concatenate another string with operator
var sentence = "the quick brown fox "
sentence += "jumped over lil dog";

// log String, concat in the log itself
function thisFunction(){
    console.log(word1 + word2)
}

// display concatenated string with operator, on the page from button click
function thisFunction2(){
    document.getElementById('thisButton').innerHTML = sentence
}