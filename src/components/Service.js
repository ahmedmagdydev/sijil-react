import React from "react";

function Service({ title, link }) {
  return (
    <a href={link} style={styles.serviceLink}>
      <div style={styles.serviceIcon}>
        <img
          src="serviece icons/service-icon1.jpg"
          style={styles.serviceImage}
          alt=""
        />
      </div>
      <p>{title}</p>
    </a>
  );
}
const styles = {
  serviceLink: {
    color: "#fff",
    textAlign: "center",
    marginBottom: "50px",
    display: "block",
  },
  serviceIcon: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  serviceImage: {
    width: "40px",
  },
};
export default Service;
