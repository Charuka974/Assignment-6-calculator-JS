function clickButton (symbol) {

    if (symbol === 'c') {

        document.getElementById('display').value = "";

    } else if (symbol === '=') {

        let expression = document.getElementById('display').value;
        if (expression === "" || expression === "+" || expression === "-" || expression === "/" || expression === "*" || expression === ".") {
            document.getElementById('display').value = "";
        } else {
            try {
                let result = eval(expression);
                console.log(result);
                document.getElementById('display').value = result;
            } catch (error) {
                document.getElementById('display').value = "Syntax Error";
            }
        }   

    } else {

        let result = symbol;
        document.getElementById('display').value += result;  

    }   
   
}
