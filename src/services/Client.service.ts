import { IClient } from "../models/IClient.interface";

export const getAllClients = async (): Promise<IClient[]> => {
  const response: Response = await fetch(
    "http://localhost:8080/api/clientes/all",
    {
      method: "GET",
      headers: {
        "Content-Type": "application.json",
      },
    }
  );
  const allClients = response.json() as unknown as IClient[];

  return allClients;
};

export const searchClientByName = async (name: string): Promise<IClient[]> => {
  const response: Response = await fetch(
    `http://localhost:8080/api/clientes/?name=${name}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application.json",
      },
    }
  );
  const foundClients = response.json() as unknown as IClient[];

  return foundClients;
};
