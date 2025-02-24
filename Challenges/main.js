function getNumberFact(){
    fetch('http://numbersapi.com/random/trivia')
        .then(response => response.text())
        .then(fact => {
            document.getElementById('factDisplay').textContent = fact;
        })
        .catch(error => {
            document.getElementById('factDisplay').textContent = "error fetching fact.";
        })
}

function getCatFact(){
    fetch('https://catfact.ninja/fact')
    // parse response first, then access fact property
        .then(response => response.json())
        .then(data => {
            document.getElementById('factDisplayCat').textContent = data.fact;
        })
        .catch(error => {
            document.getElementById('factDisplayCat').textContent = "Error fetching fact.";
        });

        
}


function getTranslation(){
    userInput = document.getElementById('userInput').value
    
    fetch('	https://api.funtranslations.com/translate/yoda.json?text=' + userInput)
    // parse response first, then access property
        .then(response => response.json())
        .then(data => {
            document.getElementById('translationDisplay').textContent = data.success.total;
        })
        .catch(error => {
            document.getElementById('translationDisplay').textContent = "Error fetching fact.";
        });

        document.getElementById('userInput').value = '';
}


function getDogPic(){
    
    fetch('https://dog.ceo/api/breeds/image/random')
    // parse response first, then access property
        .then(response => response.json())
        .then(data => {
            document.getElementById('dogPic').src = data.message;
        })
        .catch(error => {
            document.getElementById('dogPicError').textContent = "Error fetching fact.";
        });

        document.getElementById('userInput').value = '';
}
