import React from "react";
import BuscadorFechas from "../../molecules/BuscadorFechas";

const Movement = () => {
  return (
    <div>
      <h2>Movimientos</h2>
      <BuscadorFechas
        getAll={() => console.log("getting")}
        searchFor={() => console.log("searching")}
        downloadReport={() => console.log("reporte")}
      />
    </div>
  );
};

export default Movement;
