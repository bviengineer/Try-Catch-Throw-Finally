// 1. Try a try/catch 
// 2. Throw an error
// 3. Handle the error

    var userInput = Number(prompt("enter any whole number"));
    if(isNaN(userInput) == true){
        alert("you did not enter a number");
    } else {
        document.querySelector("#displayDiv").innerHTML = 'You entered the number ' + '"' + userInput + '"';
        displayDiv.style.color = "white";
        displayDiv.style.backgroundColor = "black";
        displayDiv.style.fontSize = "5rem" 
    }

