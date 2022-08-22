import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IClient } from "../../../models/IClient.interface";
import { ServerResponse } from "../../../models/Response.interface";
import { getClientById, updateClient } from "../../../services/Client.service";

import styles from "./ClientFormEdit.module.css";
import { useNavigate, useParams } from "react-router-dom";

const isNumber = (str: string): boolean => {
  if (typeof str !== "string") {
    return false;
  }

  if (str.trim() === "") {
    return false;
  }

  return !Number.isNaN(Number(str));
};

const ClientFormEdit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const clienteId = params.clienteId!!;

  const { register, handleSubmit, reset } = useForm<IClient>();

  useEffect(() => {
    const obtenerCliente = async () => {
      if (!isNumber(clienteId)) {
        navigate("/404");
      }
      const respuesta = await getClientById(clienteId);
      if (!respuesta.ok) {
        navigate("/404");
      }
      const reponseBody = (await respuesta.json()) as ServerResponse;
      const clienteAEditar = reponseBody.data as IClient;
      reset({ ...clienteAEditar });
    };
    obtenerCliente();
  });

  const onSubmit = async (newClient: IClient) => {
    console.log("actualizando: ", newClient);
    const response = await updateClient(newClient);
    const body = (await response.json()) as ServerResponse;
    console.log("res:", body);
    if (response.ok) {
      alert(body.title);
    } else {
      if (body.error) {
        alert(`${body.title}:- ${body.error}`);
      } else {
        const listaErrores = body.errorsList;
        let errores = "";
        Object.keys(listaErrores).forEach(
          (k) => (errores += k + ": " + listaErrores[k])
        );
        alert(`${body.title}: ${errores}`);
      }
    }
  };

  return (
    <>
      <div>
        <h2>Editar Cliente</h2>
        <hr />
        <div className={styles.form}></div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Identificacion</label>
            <input
              type="text"
              {...register("identificacion", {
                required: true,
                minLength: 10,
              })}
              placeholder="1712345678"
            />
          </div>
          <div>
            <label>Nombre</label>
            <input
              type="text"
              {...register("nombre", { required: true, minLength: 10 })}
              placeholder="Cosme Fulanito"
            />
          </div>
          <div>
            <label>Direccion:</label>
            <input
              type="text"
              {...register("direccion", { required: true, minLength: 10 })}
              placeholder="Inaquito"
            />
          </div>
          <div>
            <label>Telefono</label>
            <input
              type="text"
              {...register("telefono", {
                required: true,
                minLength: 7,
                maxLength: 10,
              })}
              placeholder="0987654321 | 2222222"
            />
          </div>
          <div>
            <label>Edad:</label>
            <input
              type="number"
              min={18}
              {...register("edad", { required: true, min: 18, max: 99 })}
              placeholder="18"
            />
          </div>
          <div>
            <label>Genero:</label>
            <input
              type="radio"
              value="M"
              {...register("genero", { required: true })}
            />
            Masculino
            <input
              type="radio"
              value="F"
              {...register("genero", { required: true })}
            />
            Femenino
          </div>
          <div>
            <label>
              Contrasena:
              <input
                type="password"
                {...register("contrasena", { required: true, min: 8 })}
                placeholder="***********"
              />
            </label>
          </div>
          <div>
            <label>
              Estado:
              <input
                type="radio"
                value="true"
                {...register("estado", { required: true })}
              />
              Activado
              <input
                type="radio"
                value="false"
                {...register("estado", { required: true })}
              />
              Desactivado
            </label>
          </div>
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default ClientFormEdit;
