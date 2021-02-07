import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import axios from 'axios';
import Service from '../components/framework/Service';
import { apiBaseUrl } from '../constants/api';

function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    getServicesList();
  }, []);
  const getServicesList = async () => {
    const { data } = await axios.get(`${apiBaseUrl}/api/serviceslist`);
    console.log(`🚀 ~ file: Services.js ~ line 14 ~ data`, data);
    setServices(data);
  };
  return (
    <div className="p-5">
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-3 col-6" key={index}>
            <Service
              link={service.link}
              titleEn={service.titleEn}
              titleAr={service.titleAr}
              iconUrl={service.iconUrl}
              textColor="#000"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// eslint-disable-next-line no-undef
export default hot(module)(Services);
