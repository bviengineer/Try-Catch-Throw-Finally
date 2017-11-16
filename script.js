// 1. Try a try/catch 
// 2. Throw an error
// 3. Handle the error

try {
    var userInput = Number(prompt("enter any whole number"));
    if(isNaN(userInput) == true){
        alert("you did not enter a number");
    } else {
        document.querySelector("#displayDiv").innerHTML = 'You entered the number ' + '"' + userInput + '"';
        displayDiv.style.color = "white";
        displayDiv.style.backgroundColor = "black";
        displayDiv.style.fontSize = "5rem" 
    }
} catch(error){
    console.log("user entered an invalid data type into prompt");

} finally {
    console.log("this is the end of the error handling via the: 'Try-Catch-Throw-Finally' method");
}

