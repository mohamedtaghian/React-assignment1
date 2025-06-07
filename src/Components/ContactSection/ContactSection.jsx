import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function ContactSection() {
  function displayLabel(e) {
    const id = e.target.id;
    document.querySelector(`label[for=${id}] span`).classList.add("show");
  }

  return (
    <section className="section-contact">
      <SectionHeading text="Conatct Section" isWhite="false" />
      <div className="container mt-5 d-flex justify-content-center">
        <form className="w-50">
          <div className="mb-1">
            <label htmlFor="user-name" className="form-label">
              <span className="label">Username</span>
            </label>
            <input
              onInput={displayLabel}
              type="text"
              className="form-control"
              id="user-name"
              placeholder="Username"
              aria-describedby="userName"
            />
          </div>

          <div className="mb-1">
            <label htmlFor="user-age" className="form-label">
              <span className="label">Age</span>
            </label>
            <input
              onInput={displayLabel}
              type="number"
              className="form-control"
              id="user-age"
              placeholder="Age"
            />
          </div>

          <div className="mb-1">
            <label htmlFor="user-email" className="form-label">
              <span className="label">Email</span>
            </label>
            <input
              onInput={displayLabel}
              type="email"
              className="form-control"
              id="user-email"
              placeholder="Email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="user-password" className="form-label">
              <span className="label">Password</span>
            </label>
            <input
              onInput={displayLabel}
              type="password"
              className="form-control"
              id="user-password"
              placeholder="Password"
            />
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            type="submit"
            className="btn btn--sumbit text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
