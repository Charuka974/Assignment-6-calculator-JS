// function clickButton (symbol) {

//     if (symbol === 'c') {

//         document.getElementById('display').value = "";

//     } else if (symbol === '=') {

//         let expression = document.getElementById('display').value;
//         if (expression === "" || expression === "+" || expression === "-" || expression === "/" || expression === "*" || expression === ".") {
//             document.getElementById('display').value = "";
//         } else {
//             try {
//                 let result = eval(expression);
//                 console.log(result);
//                 document.getElementById('display').value = result;
//             } catch (error) {
//                 document.getElementById('display').value = "Syntax Error";
//             }
//         }   

//     } else {

//         let result = symbol;
//         document.getElementById('display').value += result;  

//     }   
   
// }

//-----------------------------------------//-----------------------------------------

// var calculationValue = "";

// function clickButton(symbol) {
//     let display = document.getElementById('display');

//     if (symbol === 'c') {
//         display.value = "";
//         calculationValue = "";

//     } else if (symbol === '=') {
//         let isEmpty = calculationValue === "";
//         let isInvalidOperator = (
//             calculationValue === "+" || 
//             calculationValue === "-" || 
//             calculationValue === "/" || 
//             calculationValue === "*" || 
//             calculationValue === "."
//         );

//         if (isEmpty || isInvalidOperator) {
//             display.value = "";
//         } else {
//             try {
//                 let result = eval(calculationValue);
//                 console.log(result);
//                 display.value = result;
//                 calculationValue = result.toString(); 
//             } catch (error) {
//                 display.value = "Syntax Error";
//                 calculationValue = "";
//             }
//         }

//     } else if (
//         symbol === "+" || 
//         symbol === "-" || 
//         symbol === "/" || 
//         symbol === "*"
//     ) {
//         let lastChar = calculationValue[calculationValue.length - 1];
//         let isLastCharOperator = (
//             lastChar === "+" || 
//             lastChar === "-" || 
//             lastChar === "/" || 
//             lastChar === "*"
//         );

//         if (calculationValue !== "" && !isLastCharOperator) {
//             calculationValue += symbol;
//             display.value = "";
//         }

//     } else {
//         calculationValue += symbol;
//         display.value += symbol;
//     }
// }

//-----------------------------------------//-----------------------------------------

var calculationValue = "";
var visibleNumber = "";

function clickButton(symbol) {
    let display = document.getElementById('display');

    if (symbol === 'c') {
        display.value = "";
        calculationValue = "";
        visibleNumber = "";

    } else if (symbol === '=') {
        let isEmpty = calculationValue === "";
        let isInvalidOperator = (calculationValue === "+" || calculationValue === "-" || calculationValue === "/" || calculationValue === "*" || calculationValue === ".");

        if (isEmpty || isInvalidOperator) {
            display.value = "";
            calculationValue = "";
        } else {
            try {
                let result = eval(calculationValue);
                console.log(result);
                display.value = result;
                calculationValue = result.toString(); 
                visibleNumber = result.toString();
            } catch (error) {
                display.value = "Syntax Error";
                calculationValue = "";
                visibleNumber = "";
            }
        }

    } else {
        let lastChar = calculationValue[calculationValue.length - 1];

        // first number can be - or +
        if (visibleNumber === "" && (symbol === "-" || symbol === "+")) {

            calculationValue += symbol;
            visibleNumber = symbol;
            display.value = visibleNumber;
            return;
            
        }

        if (symbol === "+" || symbol === "-" || symbol === "/" || symbol === "*") {

            calculationValue += symbol;
            display.value = "";
            visibleNumber = "";

        } else {
            calculationValue += symbol;
            visibleNumber += symbol;
            display.value = visibleNumber;
        }
    }
}
