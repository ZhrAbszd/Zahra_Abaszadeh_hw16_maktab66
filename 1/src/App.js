import { useState, useEffect, useRef, useCallback, memo } from "react";
import Button from "./Button";
import Title from "./Title";
/**
 * you should use useRef, useCallback, memo, useState.
 * don't remove console logs,
 * check console before and after your chnages
 */
function App() {
  console.log("App is rendering...");
  useEffect(() => console.log("== App rendered =="));

  // -----------------------------------------------------

  /**
   * create two states called value1 and value 2
   */
  const [value1, setVal1] = useState("");
  const [value2, setVal2] = useState("");

  // -------------------------------------------------------
  /**
   * create ref for each input (ref1, ref2) and pass them to input elements
   */
  const ref1 = useRef("");
  const ref2 = useRef("");

  // -------------------------------------------------------
  const changeValue1 = useCallback(() => {
    /**
     * get value of input from ref and set first state
     */
    setVal1(ref1.current.value);
  }, [setVal1]);

  // -------------------------------------------------------
  const changeValue2 = useCallback(() => {
    /**
     * get value of input from ref and set second state
     */
    setVal2(ref2.current.value);
  }, [setVal2]);

  // -------------------------------------------------------

  return (
    <div className="App">
      <div className="value-1">
        first value: <Title>{value1}</Title>
        <br />
        change first value:
        <input ref={ref1} />
        <Button onClick={changeValue1}>change</Button>
      </div>
      <div className="value-2">
        second value: <Title>{value2}</Title>
        <br />
        change second value:
        <input ref={ref2} />
        <Button onChange={changeValue2}>change</Button>
      </div>
    </div>
  );
}
export default memo(App);
