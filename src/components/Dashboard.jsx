import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>El analista de Emojis: Todo sobre los Emojis</h1>
      <p>¡El destino #1 de opiniones sobre Emojis en la Web desde 2020!</p>

      <Link to="/reviews">¡Haz clic aquí para ver mis últimas reseñas!</Link>
    </div>
  );
}

export default Dashboard;
