import { Modal } from "@material-ui/core";
import React from "react";

export default function RModal({ open, onClose, records }) {
  const styles = {
    middle: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
  return (
    <Modal open={open} onClose={onClose}>
      <div style={styles.middle}>
        <div className="p-4 bg-light rounded">
          <h1>Records</h1>
          <table className="table table-striped table-lg">
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Illness</th>
                <th>Treatment</th>
              </tr>
            </thead>
            <tbody>
              {records?.map((record, index) => (
                <tr key={index}>
                  <td>{record.patient}</td>
                  <td>{record.dieses}</td>
                  <td>{record.treatment}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn btn-outline-danger" onClick={onClose}>
            close
          </button>
        </div>
      </div>
    </Modal>
  );
}
