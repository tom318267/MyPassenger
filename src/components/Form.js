import React from "react";

function Form ({ handleChange, handleSubmit, stateValue }) {
  return (

  <div>
    <form>
      <div className="form-group">
        <input
          type="text"
          onChange={handleChange}
          name="FirstName"
          className="form-control"
          placeholder="Enter First name"
          value={stateValue.FirstName}
        />
        {stateValue.errors.FirstName && (
          <span className="field-error d-flex justify-content-end">
            {"First Name required."}
          </span>
        )}
      </div>
      <div className="form-group">
        <input
          type="text"
          onChange={handleChange}
          className="form-control"
          name="LastName"
          placeholder="Enter Last name"
          value={stateValue.LastName}
        />
        {stateValue.errors.LastName && (
          <span className="field-error d-flex justify-content-end">
            {"Last Name required."}
          </span>
        )}
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          onChange={handleChange}
          name="EmailAddress"
          placeholder="Enter email"
          value={stateValue.EmailAddress}
        />
        {stateValue.errors.EmailAddress && (
          <span className="field-error d-flex justify-content-end">
            {"Email Address required."}
          </span>
        )}
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="btn btn-sm form-control"
      >
        Submit
      </button>
    </form>
  </div>
  );

}

export default Form
