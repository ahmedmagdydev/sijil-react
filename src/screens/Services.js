import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader";
import axios from "axios";
import Service from "../components/framework/Service";

function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    getServicesList();
  }, []);
  const getServicesList = async () => {
    const { data } = await axios.get(`http://localhost:5000/api/serviceslist`);
    setServices(data);
  };
  return (
    <>
      <div className="row p-5">
        {services.map((service, index) => (
          <div className="col-md-3 col-6" key={index}>
            <Service
              link={service.link}
              titleEn={service.titleEn}
              titleAr={service.titleAr}
              textColor="#000"
            />
          </div>
        ))}
      </div>
    </>
  );
}

// eslint-disable-next-line no-undef
export default hot(module)(Services);
