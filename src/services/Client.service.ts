import { IClient } from "../models/IClient.interface";
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

export const searchClientByName = async (
  name: string
): Promise<ServerResponse> => {
  const response: Response = await fetch(
    `${process.env.REACT_APP_API_URL}/clientes?nombre=${name}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application.json",
      },
    }
  );
  const foundClients = await response.json();

  return foundClients as ServerResponse;
};

export const updateClient = async (
  clientData: IClient,
  clienteId: Number
): Promise<ServerResponse> => {
  const response: Response = await fetch(
    `${process.env.REACT_APP_API_URL}/clientes/?clientId${clienteId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(clientData),
    }
  );
  const clientUpdated = await response.json();

  return clientUpdated as ServerResponse;
};

export const createClient = async (
  clientData: IClient
): Promise<ServerResponse> => {
  const response: Response = await fetch(
    `${process.env.REACT_APP_API_URL}/clientes/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(clientData),
    }
  );
  const clientCreated = await response.json();

  return clientCreated as ServerResponse;
};

export const deleteClientById = async (
  clientId: Number
): Promise<ServerResponse> => {
  const response: Response = await fetch(
    `${process.env.REACT_APP_API_URL}/clientes/?clientId=${clientId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application.json",
      },
    }
  );
  const clientDeleted = await response.json();

  return clientDeleted as ServerResponse;
};
