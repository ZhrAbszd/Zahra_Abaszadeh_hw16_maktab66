import React from "react";

export default function StateSelection(props) {
  return (
    <>
      <div className="state d-flex flex-column flex-sm-row gap-3">
        <select
          className={`selectState flex-fill w-100 ${
            !props.infoVal.state ? "non-selected" : ""
          }`}
          name="state"
          onChange={props.handleClick}
        >
          <option  value="">
            استان
          </option>
        </select>

        <select
          className={`selectState flex-fill w-100 ${
            !props.infoVal.city ? "non-selected" : ""
          }`}
          name="city"
          onChange={props.handleClick}
        >
          {props.infoVal.state ? (
            <>
              <option selected hidden>
                شهر
              </option>
            </>
          ) : (
            <>
              <option selected hidden>
                شهر
              </option>
              <option value="" disabled>
                 ابتدا استان را انتخاب کنید
              </option>
            </>
          )}
        </select>
      </div>
      {props.error.place ? (
        <p className="error">{props.error.place}</p>
      ) : null}
    </>
  );
}
