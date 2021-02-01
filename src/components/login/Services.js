import React from "react";
import Container from "react-bootstrap/Container";
import Service from "../Service";

function Services({ servicesList }) {
  return (
    <div className="services ">
      <Container>
        <div className="p-md-4 p-3">
          <div className="px-md-5">
            <h2 className="mb-5">Portal Services</h2>
            <div className="px-5">
              <div className="row">
                {servicesList.map((item, index) => (
                  <div className="col-md-4 col-6" key={index}>
                    <Service link={item.link} title={item.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Services;
