import React, { useState } from "react";

const BasicForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isFirstNameTouched, setIsFirstNameTouched] = useState(false);

  const [lastName, setLastName] = useState("");
  const [isLastNameValid, setIsLastNameValid] = useState(false);
  const [isLastNameTouched, setIsLastNameTouched] = useState(false);

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const firstNameChangeHandler = (e) => {
    const firstNameValue = e.target.value;
    setIsFirstNameTouched(true);
    setFirstName(firstNameValue);
    setIsFirstNameValid(firstNameValue.trim() !== "");
  };

  const lastNameChangeHandler = (e) => {
    const lastNameValue = e.target.value;
    setIsLastNameTouched(true);
    setLastName(lastNameValue);
    setIsLastNameValid(lastNameValue.trim() !== "");
  };

  const emailChangeHandler = (e) => {
    const emailValue = e.target.value;
    setIsEmailTouched(true);
    setEmail(emailValue);
    setIsEmailValid(emailValue.trim() !== "");
  };

  const firstNameIsInvalid = isFirstNameTouched && !isFirstNameValid;
  const firstNameClasses = firstNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const lastNameIsInvalid = isLastNameTouched && !isLastNameValid;
  const lastNameClasses = lastNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailIsInvalid = isEmailTouched && !isEmailValid;
  const emailClasses = emailIsInvalid ? "form-control invalid" : "form-control";

  const formIsValid =
    firstName.trim() !== "" && lastName.trim() !== "" && email.trim() !== "";

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
            value={firstName}
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
            value={lastName}
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
          value={email}
          onChange={emailChangeHandler}
        />
        {emailIsInvalid && (
          <p className="error-text">Input must not be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
