import React from "react";
import contactUsText from "../../assets/contact us text.png";
import questionMark from "../../assets/question mark.png";

export default function Callout() {
  return (
    <div className="queContainer">
      <img className="queBefore" src={questionMark} alt="call out" />
      <img className="queAfter" src={contactUsText} alt="call out" />
    </div>
  );
}
