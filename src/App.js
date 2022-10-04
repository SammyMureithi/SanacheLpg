import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import DashBoard from './Pages/DashBoard';
import CustomersPages from './Pages/CustomersPages';
import CustomerSummaryPages from './Pages/CustomerSummaryPages';
import DetailedCustomerPage from './Pages/DetailedCustomerPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path='/DashBoard' element={<DashBoard />} />
        <Route path='/Customers' element={<CustomersPages />} />
        <Route path='/Customers/CustomerSummery' element={<CustomerSummaryPages />} />
        <Route path='/Customers/:CustomerName/:CustomerId' element={<DetailedCustomerPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
