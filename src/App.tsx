import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./Components/atoms/Header";
import SideNavigator from "./Components/organisms/SideNavigator";
import Account from "./Components/templates/Account";
import ClientFormCreate from "./Components/templates/clients/ClientFormCreate";
import ClientFormEdit from "./Components/templates/clients/ClientFormEdit";
import Clients from "./Components/templates/clients/Clients";
import Main from "./Components/templates/Main";
import Movement from "./Components/templates/Movement";
import Reports from "./Components/templates/Reports";
import Route404 from "./Components/templates/Route404";

function App() {
  return (
    <>
      <Header />
      <div className={styles.Container}>
        <div className={styles.Row}>
          <div className={styles.SideBar}>
            <SideNavigator />
          </div>
          <div className={styles.Content}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="clientes" element={<Clients />}></Route>
              <Route path="clientes/:clienteId" element={<ClientFormEdit />} />
              <Route path="clientes/nuevo" element={<ClientFormCreate />} />

              <Route path="cuentas" element={<Account />} />

              <Route path="movimientos" element={<Movement />} />
              <Route path="reportes" element={<Reports />} />
              <Route path="*" element={<Route404 />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
