import React from "react";
import Navigation from "./Navigation";

function DashboardSidebar() {
  return (
    <div style={styles.container} className="p-4  ">
      <img src="logo.png" style={styles.logo} alt="" />
      <Navigation />
    </div>
  );
}
const styles = {
  container: {
    backgroundColor: "#083258",
    background: "linear-gradient(#083258,#225280)",
    width: "220px",
    position: "fixed",
    height: "100%",
  },
  logo: {
    width: "100px",
  },
};
export default DashboardSidebar;
