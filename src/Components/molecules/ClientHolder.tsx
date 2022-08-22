import { IClient } from "../../models/IClient.interface";
import Boton from "../atoms/Boton";
import styles from "./ClientHolder.module.css";

interface Props {
  cliente: IClient;
}

const ClientHolder = ({ cliente }: Props) => {
  return (
    <div className={styles.Card}>
      <div className={styles.DataHolder}>
        <p className={styles.ClientData}>
          <b>Nombre:</b> {cliente.nombre}
        </p>
        <p className={styles.ClientData}>
          <b> Identificacion:</b> {cliente.identificacion}
        </p>
        <p className={styles.ClientData}>
          <b>Direccion:</b> {cliente.direccion}
        </p>
        <p className={styles.ClientData}>
          <b>Telefono:</b> {cliente.telefono}
        </p>
        <p className={styles.ClientData}>
          <b>Edad</b> {cliente.edad}
        </p>
      </div>
      <div className={styles.BotonContainer}>
        <Boton
          classname={styles.BotonEditar}
          texto="Editar"
          key={1}
          onClickedButton={() => console.log("editing", cliente.id)}
        />
        <Boton
          classname={styles.BotonEliminar}
          texto="Eliminar"
          key={2}
          onClickedButton={() => console.log("deleting", cliente.id)}
        />
      </div>
    </div>
  );
};

export default ClientHolder;
