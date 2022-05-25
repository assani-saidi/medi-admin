import React from "react";

export default function SignupForm() {
  const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
    },
  };
  return (
    <form style={styles.form}>
      <h1>Sign Up</h1>
      <label>name</label>
      <input type="text" name="name" />
      <label>email</label>
      <input type="text" name="name" />
      <label>password</label>
      <input type="text" name="name" />
    </form>
  );
}
