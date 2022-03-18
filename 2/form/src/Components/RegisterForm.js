import React, { useState, useEffect } from "react";
import { RegisterValidation } from "./RegisterValidation";
import StateSelection from "./StateSelection";
import Input from "./Input";

export default function RegisterForm(props) {
  const val = {
    firstname: "",
    lastName: "",
    email: "",
    password: "",
    state: "",
    city: "",
    edu: "",
    educationPlace: "",
  };

  const [infoVal, setinfoVal] = useState(val);
  const [error, seterror] = useState({});
  const [submit, setSubmit] = useState(false);
  const [stateVal, setstateVal] = useState("");

  const changeValue = (e) => {
    if (e.target.name === "state") {
      setinfoVal({
        ...infoVal,
        [e.target.name]: e.target.value,
        city: "",
      });
    } else {
      setinfoVal({ ...infoVal, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    seterror(RegisterValidation(infoVal, props.acc));
    setSubmit(true);
  };

  useEffect(() => {
    fetch("/iranstates.json")
      .then((res) => res.json())
      .then((data) => {
        setstateVal(data);
      });
  }, []);

  return (
    <>
      <h6 className="formHeader my-4">رایگان ثبت نام کنید</h6>
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column flex-sm-row firstName gap-3">
          <div className="formItems flex-fill">
            <Input
              text="نام"
              type="text"
              name="firstname"
              value={infoVal.firstname}
              onChange={changeValue}
            />
            {error.firstname ? (
              <p className="error">{error.firstname}</p>
            ) : null}
          </div>

          <div className="formItems flex-fill">
            <Input
              text="نام خانوادگی"
              type="text"
              name="lastName"
              value={infoVal.lastName}
              onChange={changeValue}
            />
            {error.lastName ? (
              <p className="error">{error.lastName}</p>
            ) : null}
          </div>
        </div>

        <div className="formItems">
          <Input
            text="ایمیل"
            type="email"
            name="email"
            value={infoVal.email}
            onChange={changeValue}
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
            onChange={changeValue}
          />
          {error.password ? (
            <p className="error">{error.password}</p>
          ) : null}
        </div>

        <div className="formItems">
          <StateSelection
            handleClick={changeValue}
            stateVal={stateVal}
            infoVal={infoVal}
            error={error}
          />
        </div>

        <div className="educationInput d-flex flex-column">
          <Input
            className="w-100"
            type="text"
            text="تحصیلات"
            name="edu"
            value={infoVal.edu}
            onChange={changeValue}
          />

          {infoVal.edu ? (
            <Input
              className="w-100"
              type="text"
              text="محل تحصیل"
              name="educationPlace"
              value={infoVal.educationPlace}
              onChange={changeValue}
            />
          ) : null}
          {error.educationPlace ? (
            <p className="error">{error.educationPlace}</p>
          ) : null}
        </div>
        <button className="formSubmitBtn" type="submit">
          ثبت نام
        </button>
      </form>
    </>
  );
}
