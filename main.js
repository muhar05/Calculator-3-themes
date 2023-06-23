let cyberpunk = document.getElementById("cyberpunk");
let aesthetic = document.getElementById("aesthetic");
let nature = document.getElementById("nature");
let theme = document.getElementById("theme");
let btnCyber = document.getElementById("btnCyber");
let btnAesthetic = document.getElementById("btnAesthetic");
let btnNature = document.getElementById("btnNature");

aesthetic.style.display ="none";
nature.style.display = "none";

function btnC(){
  cyberpunk.style.display = "block";
  aesthetic.style.display ="none";
  nature.style.display = "none";
  btnCyber.style.display = "block";
  btnAesthetic.style.display = "block";
  btnNature.style.display = "block";
}

function btnA() {
  aesthetic.style.display = "block";
  cyberpunk.style.display = "none";
  nature.style.display = "none";
  btnCyber.style.display = "block";
  btnAesthetic.style.display = "block";
  btnNature.style.display = "block";
}

function btnN() {
  nature.style.display = "block";
  cyberpunk.style.display ="none";
  aesthetic.style.display = "none";
  btnCyber.style.display = "block";
  btnAesthetic.style.display = "block";
  btnNature.style.display = "block";
}


let expressionC = "";
let expressionA = "";
let expressionN = "";
const resultC = document.getElementById("output2C");
const resultA = document.getElementById("output2A");
const resultN = document.getElementById("output2N");


// RESULT CYBERPUNK
function appendValueC(value) {
    expressionC += value;
    resultC.value = expressionC;
}

function performOperatorC(operator) {
    expressionC += operator;
    resultC.value = expressionC;
}

function calculateC() {
    try {
      const evalResultC = eval(expressionC);
      resultC.value = evalResultC;
      expressionC = evalResultC.toString();
    } catch (error) {
      resultC.value = "WAIT FOR UPDATE";
      expressionC = "";
    }
  }

function clearResultC() {
    expressionC = "";
    resultC.value = "0";
  }

  // aesthetic
  function appendValueA(value) {
    expressionA += value;
    resultA.value = expressionA;
}

function performOperatorA(operator) {
    expressionA += operator;
    resultA.value = expressionA;
}

function calculateA() {
    try {
      const evalResultA = eval(expressionA);
      resultA.value = evalResultA;
      expressionA = evalResultA.toString();
    } catch (error) {
      resultA.value = "WAIT FOR UPDATE";
      expressionA = "";
    }
  }


function clearResultA() {
    expressionA = "";
    resultA.value = "0";
  }

  // NATURE
  function appendValueN(value) {
    expressionN += value;
    resultN.value = expressionN;
}

function performOperatorN(operator) {
    expressionN += operator;
    resultN.value = expressionN;
}

function calculateN() {
    try {
      const evalResultN = eval(expressionN);
      resultN.value = evalResultN;
      expressionN = evalResultN.toString();
    } catch (error) {
      resultN.value = "WAIT FOR UPDATE";
      expressionN = "";
    }
  }


function clearResultN() {
    expressionN = "";
    resultN.value = "0";
  }