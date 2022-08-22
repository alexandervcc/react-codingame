import { useState } from "react";
import Boton from "../atoms/Boton";
import styles from "./BuscadorFechas.module.css";


interface Props {
  searchFor: (value: string) => any;
  getAll: () => any;
  downloadReport: () => any;
}

const BuscadorFechas = ({ getAll, searchFor, downloadReport }: Props) => {
  const [valueToSearch, setValueToSearch] = useState("");
  return (
    <div className={styles.buscador}>
      <input
        className={styles.InputBuscador}
        type="text"
        placeholder="Nombre Cliente: "
        onChange={(e) => setValueToSearch(e.target.value)}
      />
      <label>Fecha Inicio: </label>
      <input type="date" className={styles.datePicker} />
      <label>Fecha Fin : </label>
      <input type="date" className={styles.datePicker}/>

      <Boton
        classname={styles.BotonBuscar}
        texto="Buscar"
        onClickedButton={() => searchFor(valueToSearch)}
      />
      <Boton
        classname={styles.BotonLimpiar}
        texto="Limpiar"
        onClickedButton={getAll}
      />

      <Boton
        classname={styles.botonDescargar}
        texto="Descargar Reporte"
        onClickedButton={downloadReport}
      />
    </div>
  );
};

export default BuscadorFechas;
