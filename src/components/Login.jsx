import { useState } from "react";
import Input from "./Input";

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
    didEdit.email != "" && !enteredValues.email.includes("@");
  const passwordIsInvalid =
    didEdit.password && enteredValues.password.trim().length < 6;

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

        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            value={enteredValues.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address</p>}
          </div>
        </div> */}

        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValues.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
          />
        </div> */}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
