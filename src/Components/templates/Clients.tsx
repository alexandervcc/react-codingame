import React from "react";
import { Link, Outlet } from "react-router-dom";

const Clients = () => {
  return (
    <div>
      <h2>Clients</h2>
      <Link to={`/clientes/1`}>Cliente 1</Link>
      <Outlet />
    </div>
  );
};

export default Clients;
