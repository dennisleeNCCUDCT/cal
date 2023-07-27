import React, { useState } from "react";

const Calculator = () => {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondtNum] = useState(0);
  const [result, setResult] = useState(0);

  //
  function addClickHandler() {
    setResult(firstNum + secondNum);
  }

  function minusClickHandler() {
    setResult(firstNum - secondNum);
  }
  function multiplyClickHandler() {
    setResult(firstNum * secondNum);
  }

  function devideClickHandler() {
    setResult(firstNum / secondNum);
  }

  return (
    <>
      {" "}
      <br />
      <br />
      <br />
      <label>1.先輸入一個數字</label>
      <br />
      <input
        placeholder="first number"
        onChange={(e) => {
          setFirstNum(parseFloat(e.target.value));
          console.log("第一個數字" + firstNum);
        }}
      ></input>
      <br />
      <br />
      <br />
      <label>3.選擇動作</label>
      <br />
      <button onClick={addClickHandler}> +</button>
      <button onClick={minusClickHandler}>-</button>
      <button onClick={multiplyClickHandler}>*</button>
      <button on onClick={devideClickHandler}>
        /
      </button>
      <br />
      <br />
      <br />
      <label>2.再輸入第二個數字</label>
      <br />
      <input
        placeholder="second number"
        onChange={(e) => {
          setSecondtNum(parseFloat(e.target.value));
          console.log("第二個數字" + secondNum);
        }}
      ></input>
      <br />
      <br />
      <br />
      <label>結果</label>
      <br />
      <p>{result}</p>
    </>
  );
};

export default Calculator;
