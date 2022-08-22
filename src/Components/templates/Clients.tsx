import { useEffect, useState } from "react";
import { IClient } from "../../models/IClient.interface";
import { getAllClients } from "../../services/Client.service";
import Boton from "../atoms/Boton";
import ClientHolder from "../molecules/ClientHolder";
import styles from "./Clients.module.css";

const Clients = () => {
  const [listaClientes, setListaClientes] = useState<IClient[]>([]);

  useEffect(() => {
    const getClientes = async () => {
      const fetchedClients = await getAllClients();
      console.log("c: ", fetchedClients);
      setListaClientes(fetchedClients);
    };
    getClientes();
  }, []);

  const searchForClients = async () => {
    console.log("seraching...");
  };

  return (
    <div>
      <h2>Clients</h2>
      <div className={styles.Buscador}>
        <input type="text" />
        <Boton classname="" texto="Buscar" onClickedButton={searchForClients} />
      </div>
      <div className={styles.Resultados}>
        {listaClientes.length > 0 ? (
          listaClientes.map((cliente) => (
            <ClientHolder key={cliente.id} cliente={cliente} />
          ))
        ) : (
          <p>No hay clientes para mostrar</p>
        )}
      </div>
    </div>
  );
};

export default Clients;
