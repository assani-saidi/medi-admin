import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoBlue from "../assets/ibm logo.svg";
import Button from "./common/button";
import Logger from "./logger";

export default function Header() {
  const [loginOpen, setloginOpen] = useState(false);
  const styles = {
    header: {
      backgroundColor: "#F4F4F4",
      paddingLeft: 40,
      paddingRight: 40,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "#3F3F3F",
    },
    topLogo: {
      width: 300,
      height: 120,
    },
    navContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    nav: {
      padding: 5,
    },
    navLink: {
      textDecoration: "none",
      color: "inherit",
      padding: 5,
      fontSize: 22,
      fontWeight: 300,
      fontKerning: 50,
    },
  };
  return (
    <>
      <div style={styles.header}>
        <img style={styles.topLogo} src={logoBlue} alt="logo" />
        <div style={styles.navContainer}>
          <nav style={styles.nav}>
            <Link to="/" style={styles.navLink}>
              <span className="navLink">HOME</span>
            </Link>
            <Link to="/" style={styles.navLink}>
              <span className="navLink">SERVICES</span>
            </Link>
            <Link to="/" style={styles.navLink}>
              <span className="navLink">CONTACT</span>
            </Link>
            <Link to="/" style={styles.navLink}>
              <span className="navLink">ABOUT</span>
            </Link>
          </nav>
          <Button
            text="CREATE ACCOUNT"
            medium
            solid
            onClick={() => setloginOpen(true)}
          />
        </div>
      </div>
      {/* this is a signup modal */}
      <Logger
        modalOpen={loginOpen}
        modalClose={() => setloginOpen(false)}
        type="signup"
      />
    </>
  );
}
