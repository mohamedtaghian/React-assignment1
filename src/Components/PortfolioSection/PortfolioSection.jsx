import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import PortfolioCard from "./PortfolioCard";
import portfolio1 from "./images/portfolio1.png";
import portfolio2 from "./images/portfolio2.png";
import portfolio3 from "./images/portfolio3.png";

export default function PortfolioSection() {
  function showOverlay(imgSrc) {
    document.querySelector(".image-overlay").classList.remove("d-none");
    document.querySelector(".image-view").src = imgSrc;
  }
  function hideOverlay(e) {
    if (e.target.classList.contains("image-overlay")) {
      document.querySelector(".image-overlay").classList.add("d-none");
    }
  }

  return (
    <>
      <section className="section-portfolio">
        <SectionHeading text="Portfolio Component" isWhite="false" />
        {/* Will Fix Later */}
        <div className="container">
          <div className="row g-5">
            <PortfolioCard clickEvent={showOverlay} imgSrc={portfolio1} />
            <PortfolioCard clickEvent={showOverlay} imgSrc={portfolio2} />
            <PortfolioCard clickEvent={showOverlay} imgSrc={portfolio3} />
            <PortfolioCard clickEvent={showOverlay} imgSrc={portfolio1} />
            <PortfolioCard clickEvent={showOverlay} imgSrc={portfolio2} />
            <PortfolioCard clickEvent={showOverlay} imgSrc={portfolio3} />
          </div>
        </div>
      </section>
      <div
        onClick={hideOverlay}
        className="image-overlay position-fixed start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center bg-primary bg-opacity-25 d-none"
      >
        <img className="w-50 image-view" />
      </div>
    </>
  );
}
