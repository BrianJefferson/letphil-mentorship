/*
Mini Project — Type Table 

Goal
  Build a small fixed list of values and render "<value> — <type>" lines using correct type detection.
  Practice: typeof, Array.isArray, special-case null, and function detection.

Exact element ids required
  buildBtn, outputList

STEP 1 — Values
  Create variables with these exact values:
    textValue equals hello
    numberValue equals 42
    boolValue equals true
    nullValue equals null
    undefValue is declared but not assigned any value
    objValue equals an object with a single key label with the value sample
    arrValue equals a list with values 1, 2, 3
    fnValue equals a function that returns the text yo
  Create a list named values in this exact order:
    textValue, numberValue, boolValue, nullValue, undefValue, objValue, arrValue, fnValue

STEP 2 — Type helper
  Create a function named describeType that returns:
    the text null when the value is exactly null,
    the text array when the value is an array,
    the text function when typeof returns function,
    otherwise use the result of typeof.

STEP 3 — Display helper
  Create a function named toDisplay that tries to build a readable string:
    when the value is an object or an array, try to convert with a structured approach; if that fails, fall back to a simple approach,
    otherwise convert to a text form directly.

STEP 4 — Builder
  Create a function named buildList that removes any existing items inside outputList,
  then for each value in values creates a list item whose text is the display string, a space, a dash, a space, then the type from describeType,
  and appends it to outputList.

STEP 5 — Wiring
  When buildBtn is clicked, run buildList.
*/

let textValue = "hello";
let numberValue = 42;
let boolValue = true;
let nullValue = null;

let undefValue = undefined;
let objValue = {genre: "Action", movie: "John Wick"};
let arrValue = [1, 2, 3];
let fnValue = function() {
  return "yo"
};

let values = [textValue, numberValue, boolValue, nullValue, undefValue, objValue, arrValue, fnValue];
console.log(values)

function describeType(value) {
  if (value === null) {
    return "null"
  } else if (Array.isArray (value)) {
      return "array;"
  } else if (typeof value === "function") {
      return "function"
  } else {
      return typeof value
  }
};

function toDisplay(value){
     if (typeof value === "object" && value!==null) {
       try {                                
         return JSON.stringify(value);    
       } catch  {               
        return String(value); 
       }
     }
     return String(value); 
    }


const outputList = document.getElementById("outputList");
  const buildList = () => {
     outputList.innerHTML = "";

     values.forEach(function(value) {   
      const li = document.createElement("li");   

      li.textContent = toDisplay(value) + " - " + describeType(value); 
      outputList.appendChild(li);  
     });
  }


const buildBtn = document.getElementById("buildBtn");
  buildBtn.addEventListener("click", () => {  
    buildList();   
  });



