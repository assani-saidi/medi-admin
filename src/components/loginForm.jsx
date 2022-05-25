import React, { useState } from "react";

export default function LoginForm({
  employmentNumber,
  password,
  onSubmit,
  onChange,
}) {
  const prepareSubmit = (evt) => {
    evt.preventDefault();
    onSubmit("login");
  };

  const [hidden, setHidden] = useState(true);
  return (
    <form>
      <input
        type="text"
        placeholder="Employment Number"
        className="form-control mb-3"
        value={employmentNumber}
        onChange={(evt) => onChange(evt, "employment number")}
      />
      {hidden ? (
        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          value={password}
          onChange={(evt) => onChange(evt, "password")}
        />
      ) : (
        <input
          type="text"
          placeholder="Password"
          className="form-control mb-3"
          value={password}
          onChange={(evt) => onChange(evt, "password")}
        />
      )}
      <input
        className="form-check-input"
        type="checkbox"
        onChange={() => setHidden(!hidden)}
      />
      {hidden ? " Show password" : " Hide password"}
      <div className="w3-center pt-2">
        <input
          role="button"
          type="submit"
          value="check, in"
          className="btn btn-outline-success w-100"
          onClick={prepareSubmit}
        />
      </div>
    </form>
  );
}
