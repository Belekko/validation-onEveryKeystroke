import React, { useRef, useState } from "react";

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
  // const firstNameRef = useRef("");
  // const lastNameRef = useRef("");
  // const emailRef = useRef("");

  // const [firstName, setFirstName] = useState("");
  // const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  // const [isFirstNameTouched, setIsFirstNameTouched] = useState(false);

  // const [lastName, setLastName] = useState("");
  // const [isLastNameValid, setIsLastNameValid] = useState(false);
  // const [isLastNameTouched, setIsLastNameTouched] = useState(false);

  // const [email, setEmail] = useState("");
  // const [isEmailValid, setIsEmailValid] = useState(false);
  // const [isEmailTouched, setIsEmailTouched] = useState(false);

  const firstNameChangeHandler = (e) => {
    const value = e.target.value;
    disptach({ type: "FIRSTNAME", value });
  };

  const lastNameChangeHandler = (e) => {};

  const emailChangeHandler = (e) => {};

  const firstNameIsInvalid =
    state.firstName.isEmailTouched && !state.firstName.isEmailValid;
  const firstNameClasses = firstNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  // const lastNameIsInvalid = isLastNameTouched && !isLastNameValid;
  // const lastNameClasses = lastNameIsInvalid
  //   ? "form-control invalid"
  //   : "form-control";

  // const emailIsInvalid = isEmailTouched && !isEmailValid;
  // const emailClasses = emailIsInvalid ? "form-control invalid" : "form-control";

  // const formIsValid =
  //   firstName.trim() !== "" && lastName.trim() !== "" && email.trim() !== "";

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      alert("fill the inputs");
      return;
    }
    console.log("hwllo eo");
    setFirstName("");
    setIsFirstNameTouched(false);
    setIsFirstNameValid(false);

    // if (lastNameIsInvalid) {
    //   return;
    // }

    setLastName("");
    setIsLastNameTouched(false);
    setIsLastNameValid(false);

    // if (emailIsInvalid) {
    //   return;
    // }
    setEmail("");
    setIsEmailTouched(false);
    setIsEmailValid(false);
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
          {/* {firstNameIsInvalid && (
            <p className="error-text">Input must not be empty!</p>
          )} */}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            // value={lastName}
            // onChange={lastNameChangeHandler}
          />
          {/* {lastNameIsInvalid && (
            <p className="error-text">Input must not be empty!</p>
          )} */}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          // value={email}
          // onChange={emailChangeHandler}
        />
        {/* {emailIsInvalid && (
          <p className="error-text">Input must not be empty!</p>
        )} */}
      </div>
      <div className="form-actions">
        <button /* disabled={formIsValid} */>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
