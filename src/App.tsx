import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/atoms/Header";
import ClientCreate from "./Components/organisms/ClientCreate";
import ClientDetails from "./Components/organisms/ClientDetails";
import SideNavigator from "./Components/organisms/SideNavigator";
import Account from "./Components/templates/Account";
import Clients from "./Components/templates/Clients";
import Main from "./Components/templates/Main";
import Movement from "./Components/templates/Movement";
import Reports from "./Components/templates/Reports";
import Route404 from "./Components/templates/Route404";

function App() {
  return (
    <>
      <Header />
      <div>
        <div>
          <SideNavigator />
        </div>
        <div>
          <h2>Content</h2>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="clientes" element={<Clients />}></Route>
            <Route path="clientes/:clienteId" element={<ClientDetails />} />
            <Route path="clientes/new" element={<ClientCreate />} />

            <Route path="cuentas" element={<Account />} />
            

            <Route path="movimientos" element={<Movement />} />
            <Route path="reportes" element={<Reports />} />
            <Route path="*" element={<Route404 />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
