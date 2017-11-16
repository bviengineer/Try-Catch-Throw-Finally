// 1. Try a try/catch 
// 2. Throw an error
// 3. Handle the error

function styleMyOutput(){
    displayDiv.style.color = "white";
    displayDiv.style.backgroundColor = "black";
    displayDiv.style.fontSize = "3rem"
}

try {
    var userInput = prompt("enter any whole number");
    if(isNaN(userInput) == true){
        throw "user entered an invalid data type into prompt";
    } else {
        document.querySelector("#displayDiv").innerHTML = 'You entered the number ' + '"' + userInput + '"'; 
        styleMyOutput();
        
    }
} catch(error){ //error is referencing the message following the throw keyword
    if(error){
        document.querySelector("#displayDiv").innerHTML = "'" + userInput + "'" + " is not a valid number. Please referesh the page and try again.";
        styleMyOutput();
    }

} finally {
    console.log("this is the end of the error handling via the: 'Try-Catch-Throw-Finally' method");
}

