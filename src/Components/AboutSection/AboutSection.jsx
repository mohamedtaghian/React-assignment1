import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function AboutSection() {
  return (
    <section className="section-home d-flex flex-column align-items-center justify-content-center gap-3">
      <SectionHeading text="About Component" isWhite="true" />
      <div className="container">
        <div className="row text-white">
          <div className="col-md-6">
            <div className="inner">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="inner">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
