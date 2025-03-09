function calculate () {
    let expression = document.getElementById('display').value;
    try {
        let result = eval(expression);
        console.log(result);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = "Syntax Error";
    }
}

function clickButton (symbol) {
    let result = symbol;
    document.getElementById('display').value += result;     
}

function clearDisplay () {
    document.getElementById('display').value = "";
}