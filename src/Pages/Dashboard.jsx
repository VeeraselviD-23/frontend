import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [data, setData] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const fetchDashboard = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const res = await axios.get("https://backendbind.onrender.com/api/auth/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setData(res.data);
    } catch (error) {
      setMessage(error.response?.data?.message || "Unauthorized");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Dashboard</h2>

        {message && <p>{message}</p>}

        {data && (
          <>
            <p><strong>{data.message}</strong></p>
            <p>User ID: {data.user.id}</p>
            <p>Email: {data.user.email}</p>
          </>
        )}

        <button onClick={handleLogout} style={styles.button}>Logout</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px"
  },
  card: {
    width: "400px",
    padding: "25px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "20px"
  }
};

export default Dashboard;