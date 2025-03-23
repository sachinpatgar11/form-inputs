import { useState } from "react";

export function UseInput(defaultValue, validatonFn){
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = validatonFn(enteredValue);

    function handleInputChange(e) {
        setEnteredValue(e.target.value);
    
        setDidEdit(false);
      }
      function handleInputBlur() {
        setDidEdit(true);
      }

      return{
        value: enteredValue,
        handleInputBlur,
        handleInputChange,
        hasError: didEdit && !valueIsValid,
      };
}