import { useCallback, useEffect, useState } from "react";
import { IAccount } from "../../../models//IAccount.interface";
import { getAllAccounts } from "../../../services/Account.service";
import styles from "./Account.module.css";
import AccountHolder from "../../molecules/AccountHolder";

const downloadAllAcounts = async (callback: (param: IAccount[]) => any) => {
  const fetchedAccounts = await getAllAccounts();
  const listAccounts = fetchedAccounts.dataList as IAccount[];
  callback(listAccounts);
};

const Account = () => {
  const [listaCuentas, setListaCuentas] = useState<IAccount[]>([]);

  const getAllAcounts = useCallback(async () => {
    downloadAllAcounts(setListaCuentas);
  }, []);

  useEffect(() => {
    getAllAcounts();
  });

  return (
    <div>
      <h2>Cuentas</h2>

      <div className={styles.Resultados}>
        {listaCuentas.length > 0 ? (
          listaCuentas.map((cuenta) => (
            <AccountHolder key={cuenta.numeroDeCuenta} cuenta={cuenta} />
          ))
        ) : (
          <p>No hay cuentas para mostrar</p>
        )}
      </div>
    </div>
  );
};

export default Account;
