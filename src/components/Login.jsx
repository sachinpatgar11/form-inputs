import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";

export default function Login() {
  const [enteredValues, setenteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    didEdit.email != "" &&
    !isEmail(enteredValues.email) &&
    !isNotEmpty(enteredValues.email);
  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValues.password, 6);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(enteredValues);
  }

  function handleInputChange(identifier, value) {
    setenteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }
  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          error={emailIsInvalid && "Please enter a valid email address"}
          errorMessage=""
          onBlur={() => handleInputBlur("email")}
          value={enteredValues.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          error={passwordIsInvalid && "Please enter the valid password"}
          onBlur={() => handleInputBlur("password")}
          value={enteredValues.password}
          onChange={(e) => handleInputChange("password", e.target.value)}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
