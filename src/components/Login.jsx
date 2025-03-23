import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { UseInput } from "../hooks/useInput.js";

export default function Login() {
  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: emailError,
  } = UseInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    hasError: passwordError,
  } = UseInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(e) {
    e.preventDefault();
    if (emailError || passwordError) {
      return;
    }
    console.log(enteredValues);
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
          error={emailError && "Please enter a valid email address"}
          errorMessage=""
          onBlur={handleEmailBlur}
          value={emailValue}
          onChange={handleEmailChange}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          error={passwordError && "Please enter the valid password"}
          onBlur={handlePasswordBlur}
          value={passwordValue}
          onChange={handlePasswordChange}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
