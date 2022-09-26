import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import DashBoard from './Pages/DashBoard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path='/DashBoard' element={ <DashBoard/>} />
      </Routes>
    </div>
  );
}

export default App;
