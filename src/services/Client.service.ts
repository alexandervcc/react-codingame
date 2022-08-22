import { IClient } from "../models/IClient.interface";
import { ServerResponse } from "../models/Response.interface";

const HEADERS = {
  Accept: "application/json, text/plain, */*",
  "Content-Type": "application/json;charset=utf-8",
};

export const getClientById = async (clientId: string): Promise<Response> => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/clientes/${clientId}`,
    {
      method: "GET",
      headers: HEADERS,
    }
  );
  return response;
};

export const getAllClients = async (): Promise<ServerResponse> => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/clientes/all`,
    {
      method: "GET",
      headers: HEADERS,
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
      headers: HEADERS,
    }
  );
  const foundClients = await response.json();

  return foundClients as ServerResponse;
};

export const updateClient = async (clientData: IClient): Promise<Response> => {
  const response: Response = await fetch(
    `${process.env.REACT_APP_API_URL}/clientes/?clientId=${clientData.id}`,
    {
      method: "PUT",
      headers: HEADERS,
      body: JSON.stringify(clientData),
    }
  );

  return response;
};

export const createClient = async (clientData: IClient): Promise<Response> => {
  const response: Response = await fetch(
    `${process.env.REACT_APP_API_URL}/clientes/`,
    {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(clientData),
    }
  );

  return response;
};

export const deleteClientById = async (clientId: Number): Promise<Response> => {
  const response: Response = await fetch(
    `${process.env.REACT_APP_API_URL}/clientes/?clientId=${clientId}`,
    {
      method: "DELETE",
      headers: HEADERS,
    }
  );
  return response;
};
