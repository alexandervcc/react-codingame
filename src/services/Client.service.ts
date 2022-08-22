import { ServerResponse } from "../models/Response.interface";

export const getAllClients = async (): Promise<ServerResponse> => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/clientes/all`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application.json",
      },
    }
  );
  const allClients = await response.json();

  return allClients as ServerResponse;
};

export const searchClientByName = async (name: string): Promise<ServerResponse> => {
  const response: Response = await fetch(
    `localhost:8080/api/clientes?nombre=${name}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application.json",
      },
    }
  );
  const foundClients = await response.json();

  return  foundClients as ServerResponse;
};
