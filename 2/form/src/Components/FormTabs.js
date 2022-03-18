import React, { useState, useRef } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function FormTabs() {
  const [acc, setacc] = useState([]);
  const [status, setStatus] = useState(true);
  const textMessage = useRef("");

  const changeForm = (e) => {
    e.target.id === "login" ? setStatus(false) : setStatus(true);
  };

  const getText = (text) => {
    textMessage.current = text;
  };

  const getData = (newitem) => {
    setacc((prev) => [...prev, newitem]);
  };

  return (
    <div className="forms">
      <div className="formTog d-flex text-center">
        <div
          className={`formstatus flex-fill ${!status ? "selected" : ""}`}
          id="login"
          onClick={changeForm}
        >
          ورود
        </div>
        <div
          className={`formstatus flex-fill ${status ? "selected" : ""}`}
          id="register"
          onClick={changeForm}
        >
          ثبت نام
        </div>
      </div>
      {status ? (
        <RegisterForm acc={acc} handleText={getText} handleSend={getData} />
      ) : (
        <LoginForm acc={acc} handleText={getText} />
      )}
    </div>
  );
}
