import React, { useState } from "react";
import Modal from "./common/modal";
import LoginForm from "./loginForm";
import SignupForm from "./signupForm";

export default function logger({ modalOpen, modalClose, type = "login" }) {
  const onSubmit = ({ email, password }) => {
    console.log({ email, password });
  };
  return (
    <Modal open={modalOpen} onClose={modalClose}>
      {type === "signup" ? <SignupForm /> : <LoginForm onSubmit={onSubmit} />}
    </Modal>
  );
}
