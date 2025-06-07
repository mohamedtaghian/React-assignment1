import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function PortfolioCard({ imgSrc, clickEvent }) {
  return (
    <div className="col-md-6 col-lg-4 ">
      <div
        onClick={() => {
          clickEvent(imgSrc);
        }}
        className="port-card inner position-relative rounded-3 overflow-hidden"
      >
        <img className="w-100" src={imgSrc} alt="Portoflio" />
        <div className="overlay position-absolute w-100 h-100 start-0 top-0  d-flex justify-content-center align-items-center ">
          <span className="icon fs-1 text-white">
            <FontAwesomeIcon icon={faPlus} size="2xl" />
          </span>
        </div>
      </div>
    </div>
  );
}
