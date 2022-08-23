import { useEffect, useState } from "react";
import { IClient } from "../../../models/IClient.interface";
import { IMovement } from "../../../models/IMovement.interface";
import { IMovementReport } from "../../../models/IMovementReport.interface";
import { ServerResponse } from "../../../models/ServerResponse.interface";
import {
  getAllMovements,
  deleteMovementById,
  getAllMovementsByClient,
} from "../../../services/Movements.service";
import Boton from "../../atoms/Boton";
import BuscadorFechas from "../../molecules/BuscadorFechas";

import styles from "./Movement.module.css";

const Movement = () => {
  const [listMovements, setListMovements] = useState<IMovement[]>();
  const [clientMovement, setClientMovement] = useState<IClient>();

  const downloadAllMovements = async () => {
    const response = await getAllMovements();
    if (response.ok) {
      const bodyRes = (await response.json()) as ServerResponse;
      const movements = bodyRes.data["movimientos"] as IMovement[];
      movements.forEach((mov) => (mov.fecha = new Date(mov.fecha)));
      setListMovements(movements);
    }
  };
  useEffect(() => {
    downloadAllMovements();
  }, []);

  const handleMovememntDelete = async (movementId: number) => {
    const response = await deleteMovementById(movementId);
    const bodyRes = (await response.json()) as ServerResponse;
    if (response.ok) {
      alert("Info: " + bodyRes.title);
    } else {
      alert("Error: " + bodyRes.error);
    }
  };

  const handleMovementsSearch = async (
    nombreCliente: string,
    initialDate: string,
    finalDate: string
  ) => {
    if (nombreCliente.length === 0 || !nombreCliente) {
      alert("Cliente a buscar vacio.");
      return;
    }
    if (!initialDate || !finalDate) {
      alert("Fechas sin escoger.");
      return;
    }
    const response = await getAllMovementsByClient(
      nombreCliente,
      initialDate,
      finalDate
    );
    const resBody = (await response.json()) as ServerResponse;
    if (!response.ok) {
      alert(`Error: ${resBody.error}`);
      return;
    }
    const listMovements = resBody.data as IMovementReport;
    listMovements.movimientos.forEach(
      (mov) => (mov.fecha = new Date(mov.fecha))
    );
    setListMovements(listMovements.movimientos);
    setClientMovement(listMovements.cliente);
  };

  return (
    <div>
      <h2>Movimientos</h2>
      <BuscadorFechas
        getAll={downloadAllMovements}
        searchFor={handleMovementsSearch}
        downloadReport={() => console.log("reporte")}
      />
      <hr />
      <div>
        <h3>Cantidad de movimientos: {listMovements?.length}</h3>
        <div>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tableHeader}>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Tipo Cuenta</th>
                <th>Cuenta</th>
                <th>Tipo Movimiento</th>
                <th>Saldo Inicial</th>
                <th>Valor</th>
                <th>Saldo</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {listMovements?.map((movement) => (
                <tr key={movement.id}>
                  <td>{movement.fecha.toLocaleString()}</td>
                  <td>
                    {movement.cliente
                      ? movement.cliente
                      : clientMovement?.nombre}
                  </td>
                  <td>{movement.tipoCuentaOrigen}</td>
                  <td>{movement.cuentaOrigen}</td>
                  <td>{movement.tipoMovimiento}</td>
                  <td>{movement.saldoInicial}</td>
                  <td>{movement.valor}</td>
                  <td>{movement.saldoDisponible}</td>
                  <td>
                    <Boton
                      tooltip="Editar"
                      classname={`${styles.circleButton} ${styles.editButton}`}
                      onClickedButton={() => {}}
                      texto="√"
                    />
                    <Boton
                      tooltip="Eliminar"
                      texto="x"
                      classname={`${styles.circleButton} ${styles.deleteButton}`}
                      onClickedButton={() => handleMovememntDelete(movement.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Movement;
