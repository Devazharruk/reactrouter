import React from "react";
import image from "./logo-2.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="container mt-5 mb-2">
        <footer
          className="text-center text-lg-start "
          style={{ backgroundColor: "#fff" }}
        >
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <Link to="#">
                    <img width="100px" src={image} alt="" />
                  </Link>
                </div>
                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">RESOURCES</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <Link to="/" className="nav-link text-light-emphasis fs-5 my-1">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="nav-link text-light-emphasis fs-5 my-1">
                        About
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-6 mb-md-0">
                  <h5 className="text-uppercase">FOLLOW US</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <Link to="/" className="nav-link text-light-emphasis fs-5 my-1  ">
                      Github
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="nav-link text-light-emphasis fs-5 my-1">
                      Discord
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">LEGAL</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <Link to="" className="nav-link text-light-emphasis fs-5 my-1">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="nav-link text-light-emphasis fs-5 my-1">
                        Terms & Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <hr className="mb-4" />
            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                © 2024 Azhar Ali. All Rights Reserved.
              </p>
            </section>
            <hr className="mb-4" />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
