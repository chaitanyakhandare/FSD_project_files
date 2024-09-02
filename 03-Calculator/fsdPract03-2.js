
function add() {
    const num1 = parseFloat(document.getElementById("firstNumber").value);
    const num2 = parseFloat(document.getElementById("secondNumber").value);
    const resultEle = document.getElementById('result');
    var result = num1 + num2;
    resultEle.textContent = result;
    console.log(result)
}

function sub() {
    const num1 = document.getElementById("firstNumber").value;
    const num2 = document.getElementById("secondNumber").value;
    const resultEle = document.getElementById('result');
    var result = num1 - num2;
    resultEle.textContent = result;
    console.log(result)
}

function multiply() {
    const num1 = document.getElementById("firstNumber").value;
    const num2 = document.getElementById("secondNumber").value;
    const resultEle = document.getElementById('result');
    var result = num1 * num2;
    resultEle.textContent = result;
    console.log(result)
}

function division() {
    const num1 = document.getElementById("firstNumber").value;
    const num2 = document.getElementById("secondNumber").value;
    const resultEle = document.getElementById('result');
    var result = num1 / num2;
    resultEle.textContent = result;
    console.log(result)
}

function clearfnc() {
    console.log("clear got clicked");
    
    // Get the input elements by their IDs
    const num1 = document.getElementById("firstNumber");
    const num2 = document.getElementById("secondNumber");
    
    // Get the result element
    const resultEle = document.getElementById('result');
    
    // Clear the input fields
    num1.value = "";
    num2.value = "";
    
    // Set the result message
    const result = "Click on button to show result.";
    resultEle.textContent = result;
    
    // Log the result to the console
    console.log(result);
}
