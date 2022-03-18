import React, { useState } from "react";
import Input from "./Input";
import {LoginValidation} from "./LoginValidation";

export default function LoginForm(props) {
  const val = { email: "", password: "" };
  const [infoVal, setinfoVal] = useState(val);
  const [error, seterror] = useState({});
  const [submit, setSubmit] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    seterror(LoginValidation(infoVal, props.acc));
    setSubmit(true);
  };

  const changeVal = (e) => {
    setinfoVal({ ...infoVal, [e.target.firstname]: e.target.value });
  };

  return (
    <>
      <h6 className="formHeader my-4">خوش آمدید</h6>
      <form onSubmit={handleSubmit}>
        <div className="formItems">
          <Input
            text="ایمیل"
            type="email"
            name="email"
            value={infoVal.email}
            onChange={changeVal}
          />
          {error.email ? (
            <p className="error">{error.email}</p>
          ) : null}
        </div>
        <div className="formItems">
          <Input
            text="کلمه عبور"
            type="password"
            name="password"
            value={infoVal.password}
            onChange={changeVal}
          />
          {error.password ? (
            <p className="error">{error.password}</p>
          ) : null}
        </div>
        {error.sample ? (
          <p className="errorText error">{error.sample}</p>
        ) : null}
        <button className="formSubmitBtn" type="submit">
          ورود
        </button>
      </form>
    </>
  );
}
