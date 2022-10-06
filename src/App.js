import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import DashBoard from './Pages/DashBoard';
import CustomersPages from './Pages/CustomersPages';
import CustomerSummaryPages from './Pages/CustomerSummaryPages';
import DetailedCustomerPage from './Pages/DetailedCustomerPage';
import SalesPage from './Pages/SalesPage';
import TransferPage from './Pages/TransferPage';
import LPO from './Pages/LPO';
import ExpensesPage from './Pages/ExpensesPage';
import DepositPage from './Pages/DepositPage';
import CustomerAccount from './Pages/CustomerAccount';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path='/DashBoard' element={<DashBoard />} />
        <Route path='/Customers' element={<CustomersPages />} />
        <Route path='/Customers/CustomerSummery' element={<CustomerSummaryPages />} />
        <Route path='/Customers/:CustomerName/:CustomerId' element={<DetailedCustomerPage />} />
        <Route path='/Customers/:CustomerName/:CustomerId/Account' element={<CustomerAccount/>}/>
        <Route path='/Sales' element={<SalesPage />} />
        <Route path='/Transfers' element={<TransferPage />} />
        <Route path='/LPO' element={<LPO />} />
        <Route path='/Expenses' element={<ExpensesPage />} />
        <Route path='/Deposit' element={<DepositPage />} />
        
      </Routes>
    </div>
  );
}

export default App;
