import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div>
      <nav style={styles.nav}>
        <h2>Auth App</h2>
        <div>
          <Link to="/signup" style={styles.link}>Signup</Link>
          <Link to="/login" style={styles.link}>Login</Link>
          <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Signup />} />
      </Routes>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    backgroundColor: "#222",
    color: "white",
    alignItems: "center"
  },
  link: {
    color: "white",
    marginLeft: "15px",
    textDecoration: "none",
    fontWeight: "bold"
  }
};

export default App;