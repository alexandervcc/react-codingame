import React from "react";

interface Props {
  texto: string;
  classname: string;
  onClickedButton: () => any;
}

const Boton = ({ classname, texto, onClickedButton }: Props) => {
  return (
    <>
      <button className={classname} onClick={() => onClickedButton()}>
        {texto}
      </button>
    </>
  );
};

export default Boton;
