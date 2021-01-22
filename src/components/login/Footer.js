import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container>
        <div className="p-5">
          <img src="logo-dark.jpg" alt="" />
          <div className="row justify-content-between py-5">
            <div className="col-md-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                sint!
              </p>
              <p>All Rights Reserved SIJIL 2021</p>
            </div>
            <div className="col-md-3 text-center">
              <a href="#">FAQ</a>
            </div>
            <div className="col-md-3 text-center">
              <a href="#">Privacy and Policy</a>
            </div>
            <div className="col-md-3 text-center">
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
