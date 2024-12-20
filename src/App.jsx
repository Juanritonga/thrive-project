import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/login";
import Layout from "./pages/layout";
import MasterData from "./pages/masterdata/master-data";
import Project from "./pages/masterdata/project";
import FinanceMasterData from "./pages/masterdata/FinanceMasterData";
import Finance from "./pages/finance/Finance";
import BankFinance from "./pages/finance/BankFinance";
import TranscodeFinance from "./pages/finance/TranscodeFinance";
import Format from "./pages/cashbook/format";
import CashBook from "./pages/cashbook/cashbook";
import BankC from "./pages/cashbook/bankchasbook";
import PettyCash from "./pages/cashbook/pettycash";
import CashAdvance from "./pages/cashbook/cashadvance";
import Reimbursement from "./pages/cashbook/reimbursement";
import EntryCashAdvance from "./pages/cashbook/Entry/entryca";
import Dashboard from "./pages/dashboard";
import Bank from "./pages/masterdata/finance/BankMasterData";
import ClassF from "./pages/masterdata/finance/ClassFinance/ClassFinance";
import Chart from "./pages/masterdata/finance/chart";
import Currency from "./pages/masterdata/finance/currency";
import Tax from "./pages/masterdata/finance/tax";
import UserData from "./pages/masterdata/User/UserData";
import UserRole from "./pages/masterdata/User/UserRole";
import Division from "./pages/masterdata/User/Division";
import RoleAccess from "./pages/masterdata/User/RoleAccess";
import Departement from "./pages/masterdata/User/Departement";
import UserMasterData from "./pages/masterdata/UserMasterData";
import GeneralLedgerDashboard from "./pages/generalledger/GeneralLedgerDashboard";
import Setup from "./pages/generalledger/Setup";
import MainCOAMapping from "./pages/generalledger/COAMapping/MainCOAMapping";
import SubCOAMapping from "./pages/generalledger/COAMapping/SubCOAMapping";
import COADivision from "./pages/generalledger/COAMapping/COADivision";
import TransactionType from "./pages/generalledger/Setup/TransactionType";
import BudgetGroup from "./pages/generalledger/Setup/BudgetGroup";
import AccountPeriod from "./pages/generalledger/Setup/AccountPeriod";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />

        <Route path="/" element={<Layout />}>
          <Route
            index
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />

          <Route path="master-data" element={<MasterData />}>
            <Route path="User" element={<UserMasterData />}>
              <Route index element={<Navigate to="UserData" replace />} />
              <Route path="UserData" element={<UserData />} />
              <Route path="UserRole" element={<UserRole />} />
              <Route path="Division" element={<Division />} />
              <Route path="RoleAccess" element={<RoleAccess />} />
              <Route path="Departement" element={<Departement />} />
            </Route>
            <Route path="project" element={<Project />} />
            <Route path="finance" element={<FinanceMasterData />}>
              <Route index element={<Navigate to="ClassFinance" replace />} />
              <Route path="bank" element={<Bank />} />
              <Route path="ClassFinance" element={<ClassF />} />
              <Route path="chart" element={<Chart />} />
              <Route path="currency" element={<Currency />} />
              <Route path="tax" element={<Tax />} />
            </Route>
          </Route>

          <Route path="finance" element={<Finance />}>
            <Route index element={<Navigate to="bank" replace />} />
            <Route path="bank" element={<BankFinance />} />
            <Route path="transcode" element={<TranscodeFinance />} />
          </Route>

          <Route path="cashbook" element={<CashBook />}>
            <Route path="format" element={<Format />} />
            <Route path="bankchasbook" element={<BankC />}>
              <Route path=":id" element={<EntryCashAdvance />} />
            </Route>
            <Route path="pettycash" element={<PettyCash />}>
              <Route path=":id" element={<EntryCashAdvance />} />
            </Route>
            <Route path="cashadvance" element={<CashAdvance />}>
              <Route path=":id" element={<EntryCashAdvance />} />
            </Route>
            <Route path="reimbursement" element={<Reimbursement />}>
              <Route path=":id" element={<EntryCashAdvance />} />
            </Route>
          </Route>

          <Route path="general-ledger" element={<GeneralLedgerDashboard />}>
          <Route path="main-coa-mapping" element={<MainCOAMapping />}>
              <Route
                index
                element={<Navigate to="coa-mapping" replace />}
              />
              <Route path="coa-mapping" element={<SubCOAMapping />} />
              <Route path="coa-division" element={<COADivision />} />
            </Route>
            <Route path="setup" element={<Setup />}>
              <Route
                index
                element={<Navigate to="transaction-type" replace />}
              />
              <Route path="transaction-type" element={<TransactionType />} />
              <Route path="budget-group" element={<BudgetGroup />} />
              <Route path="account-period" element={<AccountPeriod />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
