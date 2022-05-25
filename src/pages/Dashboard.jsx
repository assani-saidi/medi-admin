import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Store } from "../store/store";
import logo from "../assets/medi-icon.png";
import { ArrowBack, ArrowBackRounded } from "@material-ui/icons";
import RModal from "../components/modal";
import { CreateRecord, GetRecords } from "../helpers/functions";

export default function Dashboard() {
  const { user, setUser } = useContext(Store);
  const navigator = useNavigate();

  const styles = {
    header: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "row",
    },
    topHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
    },
    navs: {
      marginLeft: 20,
    },
    rest: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  useEffect(() => {
    if (user === null) navigator("/home");
    (async () => {
      const records = await GetRecords(user?.company);
      setRecords(records);
    })();
  }, []);
  const [modalOpen, setModalOpen] = useState(false);
  const [records, setRecords] = useState([]);
  const [patient, setPatient] = useState("");
  const [illness, setIllness] = useState("");
  const [treatment, setTreatment] = useState("");

  const prepareSubmit = async (evt) => {
    evt.preventDefault();
    const record = {
      request: user.id,
      patient,
      illness,
      treatment,
      company: user.company,
    };
    CreateRecord(record);
    GetRecords(user?.company).then((records) => setRecords(records));
  };

  return (
    <div>
      <div className="sticky-top">
        <div style={styles.topHeader} className=" bg-dark text-light">
          <div style={styles.header}>
            <img src={logo} width={30} height={30} className="m-4" />
            <div className="h4" onClick={() => navigator("/dashboard")}>
              Identify
            </div>
            <div
              className="h4"
              style={styles.navs}
              onClick={() => setModalOpen(true)}
            >
              Records
            </div>
          </div>
          <ArrowBackRounded
            className="w3-text-red h1 m-4"
            title="logout"
            onClick={() => {
              setUser(null);
              navigator("/home");
            }}
          />
        </div>
      </div>
      <div className="dashboardBG" style={styles.rest}>
        <div className="bg-white p-4 rounded w-50">
          <h1>Identify Patient</h1>
          <form>
            <div className="form-group">
              <label>Patient ID:</label>
              <input
                type="text"
                placeholder="National id number"
                className="form-control mb-3"
                value={patient}
                onChange={(evt) => setPatient(evt.target.value)}
              />
            </div>
            <div className="form-group pb-4">
              <label>Illness:</label>
              <input
                type="text"
                placeholder="Illness identified"
                className="form-control mb-3"
                value={illness}
                onChange={(evt) => setIllness(evt.target.value)}
              />
            </div>
            <div className="form-group pb-4">
              <label>Treatment:</label>
              <textarea
                className="form-control"
                placeholder="State treatment"
                rows={4}
                value={treatment}
                onChange={(evt) => setTreatment(evt.target.value)}
              />
              <input
                role="button"
                type="submit"
                value="identify"
                className="btn btn-success mt-4 w-25"
                onClick={prepareSubmit}
              />
            </div>
          </form>
        </div>
      </div>
      <RModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        records={records}
      />
    </div>
  );
}
