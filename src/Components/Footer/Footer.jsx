import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="">
      <div className="container py-5">
        <div className="row g-4 text-white text-center">
          <div className="col-md-4 ">
            <h3 className="text-uppercase">Location</h3>
            <address>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </address>
          </div>
          <div className="col-md-4">
            <h3 className="text-uppercase">Around The Web</h3>
            <ul className="socials list-unstyled  d-flex justify-content-center gap-3">
              <li className="social-item">
                <span className="social-icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </span>
              </li>
              <li className="social-item">
                <span className="social-icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </span>
              </li>
              <li className="social-item">
                <span className="social-icon">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </span>
              </li>
              <li className="social-item">
                <span className="social-icon">
                  <FontAwesomeIcon icon={faGlobe} />
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="text-uppercase">About Freelancer</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className="footer-text container-fluid">
        <p className="mb-0  py-3 text-center text-white">
          Copyright &copy; Your Website 2025
        </p>
      </div>
    </footer>
  );
}

// position-fixed fixed-bottom
