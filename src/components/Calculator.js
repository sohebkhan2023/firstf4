// import React,{useState} from "react";

//   const Calculator = () => {
//   const [result, setResult] = useState('');

//   function add() {
//     const num1 = parseFloat(document.getElementById('num1').value);
//     const num2 = parseFloat(document.getElementById('num2').value);
//     const sum = num1 + num2;
//     setResult(sum);
//   }

//   function sub() {
//     const num1 = parseFloat(document.getElementById('num1').value);
//     const num2 = parseFloat(document.getElementById('num2').value);
//     const difference = num1 - num2;
//     setResult(difference);
//   }

//   function mult() {
//     const num1 = parseFloat(document.getElementById('num1').value);
//     const num2 = parseFloat(document.getElementById('num2').value);
//     const product = num1 * num2;
//     setResult(product);
//   }

//   function div() {
//     const num1 = parseFloat(document.getElementById('num1').value);
//     const num2 = parseFloat(document.getElementById('num2').value);
//     const quotient = num1 / num2;
//     setResult(quotient);
//   }

//   return (
//     <div className="container">
//       <div className="box">
//         <h1>React Calculator</h1>
//         <div className="input">
//           <input type="text" placeholder="num1" id="num1" />
//         </div>
//         <div className="input">
//           <input type="text" placeholder="num2" id="num2" />
//         </div>
//         <div className="opretion">
//           <button id="add" onClick={add()} >+</button>
//           <button id="sub" onClick={sub()} >-</button>
//           <button id="mult" onClick={mult()} >*</button>
//           <button id="div" onClick={div()} >/</button>
//         </div>
//         <div className="message">
//           <p id="msg"></p>
//         </div>
//         <div className="result">
//           <p id="result"></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calculator;

import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  function add() {
    if (num1 === "" || num2 === "") {
      setMessage("Please enter valid num1 and num2.");
      setIsError(true);
    } else {
      const sum = parseFloat(num1) + parseFloat(num2);
      setResult(sum);
      setMessage("Success !");
      setIsError(false);
    }
  }

  function sub() {
    if (num1 === "" || num2 === "") {
      setMessage("Please enter valid num1 and num2.");
      setIsError(true);
    } else {
      const difference = parseFloat(num1) - parseFloat(num2);
      setResult(difference);
      setMessage("Success !");
      setIsError(false);
    }
  }

  function mult() {
    if (num1 === "" || num2 === "") {
      setMessage("Please enter valid num1 and num2.");
      setIsError(true);
    } else {
      const product = parseFloat(num1) * parseFloat(num2);
      setResult(product);
      setMessage("Success!");
      setIsError(false);
    }
  }

  function div() {
    if (num1 === "" || num2 === "") {
      setMessage("Please enter valid num1 and num2.");
      setIsError(true);
    } else if (parseFloat(num2) === 0) {
      setMessage("Division by zero is not allowed.");
      setIsError(true);
    } else {
      const quotient = parseFloat(num1) / parseFloat(num2);
      setResult(quotient);
      setMessage("Success!");
      setIsError(false);
    }
  }

  return (
    <div className="container">
      <div className="box">
        <h1>React Calculator</h1>
        <div className="input">
          <input
            type="text"
            placeholder="num1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="num2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <div className="opretion">
          <button onClick={add}>+</button>
          <button onClick={sub}>-</button>
          <button onClick={mult}>*</button>
          <button onClick={div}>/</button>
        </div>
        <div className="result">
          {isError ? (
            <p className="error">{"Error !"}</p>
          ) : (
            <p className="success">{message}</p>
          )}
          {/* <p>Result: {result} </p> */}
          <p>Result: {isError ? message : result}</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
