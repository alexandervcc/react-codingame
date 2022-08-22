import { IClient } from "../../models/IClient.interface";
import styles from "./ClientHolder.module.css";

interface Props {
  cliente: IClient;
}

const ClientHolder = ({ cliente }: Props) => {
  return (
    <div className={styles.Card}>
      <p>Nombre: {cliente.nombre}</p>
      <p>Identificacion: {cliente.identificacion}</p>
      <p>Direccion: {cliente.direccion}</p>
      <p>Telefono: {cliente.telefono}</p>
      <p>Edad: {cliente.edad}</p>
    </div>
  );
};

export default ClientHolder;
