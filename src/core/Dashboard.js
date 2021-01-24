import React from "react";
import { hot } from "react-hot-loader";
import DashboardSidebar from "./DashboardSidebar";
function Dashboard({ children }) {
  return (
    <div style={styles.container}>
      <DashboardSidebar />
      <div style={styles.content} className="flex-grow-1">
        {children}
      </div>
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    backgroundColor: "#f5f5fd",
  },
  content: {
    paddingLeft: 220,
  },
};
export default hot(module)(Dashboard);
