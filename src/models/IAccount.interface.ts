export interface IAccount {
  numeroDeCuenta: number;
  tipoDeCuenta: string;
  saldoInicial: number;
  estado: boolean;
  cliente: string;
  movimientos: any[];
}
