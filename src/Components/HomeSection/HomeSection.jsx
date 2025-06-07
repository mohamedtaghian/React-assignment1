import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import avatar from "./images/avataaars.svg";

export default function HomeSection() {
  return (
    <section className="section-home d-flex flex-column align-items-center gap-3">
      <img className="avatar" src={avatar} alt="User profile picture" />
      <SectionHeading text="Start Framework" isWhite="true" />
      <p className="titles text-white">
        Graphic Artist - Web Designer - Illustrator
      </p>
    </section>
  );
}
