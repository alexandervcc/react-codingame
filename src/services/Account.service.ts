import { IAccount } from "../models/IAccount.interface";
import { ServerResponse } from "../models/Response.interface";

const HEADERS = {
  Accept: "application/json, text/plain, */*",
  "Content-Type": "application/json;charset=utf-8",
};

export const getAllAccounts = async (): Promise<ServerResponse> => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/cuentas/all`, {
    method: "GET",
    headers: HEADERS,
  });
  const allClients = await response.json();

  return allClients as ServerResponse;
};
