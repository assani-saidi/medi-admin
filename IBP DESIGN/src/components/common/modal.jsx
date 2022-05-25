import React from "react";

export default function Modal({ children, open = false, onClose }) {
  const styles = {
    modal: {
      position: "fixed",
      top: 0,
      height: "100vh",
      width: "100vw",
      zIndex: 1000,
      backgroundColor: "#00000069",
      overflow: "hidden",
      display: open ? "block" : "none",
    },
    modalContainer: {
      display: "flex",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    modalBody: {
      color: "white",
    },
    dismisser: {
      display: "flex",
      justifyContent: "flex-end",
    },
    axe: {
      backgroundColor: "red",
      paddingRight: "0.6vw",
      paddingLeft: "0.6vw",
      borderRadius: "10vw",
      marginBottom: "0.8vh",
      marginRight: "0.3vh",
      fontSize: "1.2vw",
      fontWeight: "900",
      cursor: "pointer",
    },
  };
  return (
    <div style={styles.modal}>
      <div style={styles.modalContainer}>
        <div style={styles.modalBody}>
          <div style={styles.dismisser}>
            <div
              style={styles.axe}
              title="close"
              className="dismiss"
              onClick={onClose}
            >
              x
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
