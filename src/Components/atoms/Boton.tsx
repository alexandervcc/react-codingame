import styles from "./Boton.module.css";

interface Props {
  texto: string;
  classname?: string;
  onClickedButton: () => any;
}

const Boton = ({ classname = "", texto, onClickedButton }: Props) => {
  return (
    <>
      <button
        className={`${classname} ${styles.Boton}`}
        onClick={() => onClickedButton()}
      >
        {texto}
      </button>
    </>
  );
};

export default Boton;
