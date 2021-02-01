import React from "react";
import Container from "react-bootstrap/Container";

function Introduction() {
  return (
    <div className="introduction d-flex">
      <Container>
        <div className="p-md-4 p-3">
          <div className="px-md-5">
            <h1 className="mb-5">What is SIJIL's Portal?</h1>
            <h5>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              esse nihil deserunt autem laboriosam voluptatibus cum aliquid!
              Aperiam non ratione dolorem, amet maiores rerum quo maxime
              laudantium corporis totam ipsa.
            </h5>
          </div>
        </div>
      </Container>
      <img
        src="intro-bg.jpg"
        className="d-md-block d-none"
        style={{ width: "300px" }}
        alt=""
      />
    </div>
  );
}

export default Introduction;
