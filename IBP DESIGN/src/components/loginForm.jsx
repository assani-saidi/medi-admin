import React, { useState } from "react";
import Button from "./common/button";

export default function LoginForm({ onSubmit }) {
  const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "rgba(22, 22, 22, 0.925)",
      padding: "2vw",
      borderRadius: "0.5vw",
      width: "28vw",
    },
    title: {
      fontSize: "7vh",
      fontWeight: "400",
    },
    label: {
      fontSize: "2.5vh",
      fontWeight: "300",
      paddingBottom: "2vh",
      paddingTop: "2vh",
    },
    input: {
      display: "none",
    },
  };

  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const submit = (evt) => {
    evt.preventDefault();
    if (email && password) onSubmit({ email: email.trim(), password });
  };
  return (
    <form style={styles.form}>
      <h1 style={styles.title}>Login</h1>
      <label style={styles.label}>Email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
      />
      <label style={styles.label}>Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
      />
      <br />
      <Button small text="check, in" secondary solid onClick={submit} />
    </form>
  );
}
