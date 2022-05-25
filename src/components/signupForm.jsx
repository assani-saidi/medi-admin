import React, { useState } from "react";

export default function SignupForm({
  employmentNumber,
  password,
  name,
  surname,
  company,
  companies,
  onSubmit,
  onChange,
}) {
  const prepareSubmit = (evt) => {
    evt.preventDefault();
    onSubmit("signup");
  };

  return (
    <form>
      <input
        type="text"
        placeholder="name"
        className="form-control mb-3"
        value={name}
        onChange={(evt) => onChange(evt, "name")}
      />
      <input
        type="text"
        placeholder="surname"
        className="form-control mb-3"
        value={surname}
        onChange={(evt) => onChange(evt, "surname")}
      />
      <input
        type="text"
        placeholder="Employment Number"
        className="form-control mb-3"
        value={employmentNumber}
        onChange={(evt) => onChange(evt, "employment number")}
      />
      <input
        type="text"
        placeholder="Password"
        className="form-control mb-3"
        value={password}
        onChange={(evt) => onChange(evt, "password")}
      />
      <div className="form-group">
        <label>Select your company:</label>
        <select
          value={company?.name}
          onChange={(evt) => onChange(evt, "company")}
          className="form-control mb-2"
        >
          {companies?.map((company, index) => (
            <option key={index} value={company?.name}>
              {company?.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w3-center pt-2">
        <input
          role="button"
          type="submit"
          value="register"
          className="btn btn-outline-success"
          onClick={prepareSubmit}
        />
      </div>
    </form>
  );
}
