import React, { /* useRef, useState, */ useReducer } from "react";

const dispatchFunc = (prevState, action) => {
  if (action.type === "FIRSTNAME") {
    console.log(action);
    return {
      ...prevState,
      firstName: {
        isFirstNameTouched: true,
        isFirstNameValid: action.value.trim() !== "",
        firstNameValue: action.value,
      },
    };
  }

  if (action.type === "LASTNAME") {
    console.log(action);
    return {
      ...prevState,
      lastName: {
        isLastNameTouched: true,
        isLastNameValid: action.value.trim() !== "",
        lastNameValue: action.value,
      },
    };
  }

  if (action.type === "EMAIL") {
    console.log(action);
    return {
      ...prevState,
      email: {
        isEmailTouched: true,
        isEmailValid: action.value.includes("@"),
        emailValue: action.value,
      },
    };
  }

  return prevState;
};

const INITIAL_STATE = {
  firstName: {
    isFirstNameTouched: false,
    isFirstNameValid: false,
    firstNameValue: "",
  },
  lastName: {
    isLastNameTouched: false,
    isLastNameValid: false,
    lastNameValue: "",
  },
  email: {
    isEmailTouched: false,
    isEmailValid: false,
    emailValue: "",
  },
};

const BasicForm = (props) => {
  const [state, disptach] = useReducer(dispatchFunc, INITIAL_STATE);
  const { firstName, lastName, email } = state;

  const firstNameChangeHandler = (e) => {
    const value = e.target.value;
    disptach({ type: "FIRSTNAME", value });
  };

  const lastNameChangeHandler = (e) => {
    const value = e.target.value;
    disptach({ type: "LASTNAME", value });
  };

  const emailChangeHandler = (e) => {
    const value = e.target.value;
    disptach({ type: "EMAIL", value });
  };

  const firstNameIsInvalid =
    firstName.isFirstNameTouched && !firstName.isFirstNameValid;
  const firstNameClasses = firstNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const lastNameIsInvalid =
    lastName.isLastNameTouched && !lastName.isLastNameValid;
  const lastNameClasses = lastNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailIsInvalid = email.isEmailTouched && !email.isEmailValid;
  const emailClasses = emailIsInvalid ? "form-control invalid" : "form-control";

  const formIsValid =
    firstName.firstNameValue.trim() !== "" &&
    lastName.lastNameValue.trim() !== "" &&
    email.emailValue.includes('@');
    console.log(formIsValid)

  const submitHandler = (e) => {
    e.preventDefault();
    // if (!formIsValid) {
    //   alert("fill the inputs");
    //   return;
    // }
    // console.log("hwllo eo");
    // setFirstName("");
    // setIsFirstNameTouched(false);
    // setIsFirstNameValid(false);

    // // if (lastNameIsInvalid) {
    // //   return;
    // // }

    // setLastName("");
    // setIsLastNameTouched(false);
    // setIsLastNameValid(false);

    // // if (emailIsInvalid) {
    // //   return;
    // // }
    // setEmail("");
    // setIsEmailTouched(false);
    // setIsEmailValid(false);
  };
  // const formIsValid = isEmailValid && isFirstNameValid && isLastNameValid;
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={state.firstName.firstNameValue}
            onChange={firstNameChangeHandler}
          />
          {firstNameIsInvalid && (
            <p className="error-text">Input must not be empty!</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={lastName.lastNameValue}
            onChange={lastNameChangeHandler}
          />
          {lastNameIsInvalid && (
            <p className="error-text">Input must not be empty!</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={email.emailValue}
          onChange={emailChangeHandler}
        />
        {emailIsInvalid && (
          <p className="error-text">Input must include '@' or not be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
