import { Alert } from "bootstrap";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import logo from "../assets/medi-icon.png";
import LoginForm from "../components/loginForm";
import SignupForm from "../components/signupForm";
import { GetCompanies } from "../helpers/data";
import { Login, Register } from "../helpers/functions";
import { Store } from "../store/store";

export default function Home() {
  useEffect(() => {
    (async () => {
      const companies = await GetCompanies();
      setCompanies(companies);
      if (companies.length > 0) setCompany(companies[0]);
    })();
  }, []);
  const navigator = useNavigate();
  const { setUser } = useContext(Store);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [employmentNumber, setEmploymentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [inLogin, setInLogin] = useState(true);

  const styles = {
    homeView: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    fullBrightness: {
      backgroundColor: "white",
    },
  };

  const change = (evt, type) => {
    if (type === "employment number") {
      setEmploymentNumber(evt.target.value);
    }
    if (type === "password") {
      setPassword(evt.target.value);
    }
    if (type === "surname") {
      setSurname(evt.target.value);
    }
    if (type === "name") {
      setName(evt.target.value);
    }
    if (type === "company") {
      const choosen_company = companies.find(
        (co) => co?.name === evt.target.value
      );
      setCompany(choosen_company);
    }
  };

  const submit = (type) => {
    if (type === "login") {
      Login({ employmentNumber, password }).then((user) => {
        if (user === undefined) {
          window.alert("user not found");
        } else {
          setUser(user);
          navigator("/dashboard");
        }
      });
    }
    if (type === "signup") {
      Register({
        name,
        surname,
        company: company?.id,
        employmentNumber,
        password,
      })
        .then((res) => {
          setUser(res);
          navigator("/dashboard");
        })
        .catch((err) => console.log(`err`, err));
    }
  };
  return (
    <div className="homeBG" style={styles.homeView}>
      <div style={styles.fullBrightness} className="p-4 rounded">
        <h1 className="h1 pb-2">{inLogin ? "Login" : "SignUp"}</h1>
        {inLogin ? (
          <LoginForm
            employmentNumber={employmentNumber}
            password={password}
            onSubmit={submit}
            onChange={change}
          />
        ) : (
          <SignupForm
            company={company}
            employmentNumber={employmentNumber}
            name={name}
            password={password}
            onChange={change}
            onSubmit={submit}
            companies={companies}
            surname={surname}
          />
        )}
        <div onClick={() => setInLogin(!inLogin)} className="text-center pt-2">
          {inLogin ? "sigup, instead" : "login, instead"}
        </div>
      </div>
    </div>
  );
}
