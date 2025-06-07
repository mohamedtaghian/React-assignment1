import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function SectionHeading({ text, isWhite }) {
  return (
    <div
      className={`section-heading pt-4 text-center ${
        isWhite === "true" ? "white" : "dark"
      }`}
    >
      <h2 className="fs-1 mb-3 text-uppercase fw-bold">{text}</h2>
      <div className="heading-decoration d-flex justify-content-center align-items-center mb-3">
        <div className="line me-3 "></div>
        <FontAwesomeIcon className="icon" icon={faStar} size="lg" />
        <div className="line ms-3"></div>
      </div>
    </div>
  );
}
