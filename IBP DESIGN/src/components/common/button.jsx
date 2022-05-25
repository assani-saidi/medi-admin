import React from "react";

export default function Button({
  text,
  onClick,
  small,
  large,
  medium,
  primary,
  secondary,
  solid,
}) {
  const btnTextColor = secondary
    ? solid
      ? "#000026"
      : "white"
    : solid
    ? "white"
    : "#000026";
  let btnSize = 15;

  if (small) btnSize = 15;
  if (medium) btnSize = 17;
  if (large) btnSize = 20;

  const styles = {
    button: {
      cursor: "pointer",
      color: btnTextColor,
      fontSize: btnSize,
      borderColor: secondary ? "#FFD400" : "#000026",
      borderRadius: btnSize,
      paddingRight: btnSize,
      paddingLeft: btnSize,
      paddingTop: btnSize / 2,
      paddingBottom: btnSize / 2,
      backgroundColor: secondary
        ? solid
          ? "#FFD400"
          : ""
        : solid
        ? "#000026"
        : "",
    },
  };
  return (
    <button style={styles.button} onClick={onClick} className="btn">
      {text}
    </button>
  );
}
