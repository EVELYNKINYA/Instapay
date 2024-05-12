import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import './App.css';
import TransactionSummary from './Components/Dashboard/Admin/TransactionSummary';
import Beneficiaries from './Components/Dashboard/User/Beneficiaries';
import SendMoney from './Components/Dashboard/User/SendMoneyForm';
import Profile from './Components/Dashboard/User/Profile';
import Navbar from './Components/Shared/Navbar';
import Footer from './Components/Shared/Footer';
import Loader from './Components/Shared/Loader';
import Modal from './Components/Shared/Modal';
import AdminDashboard from './Components/Dashboard/Admin/AdminDashBoard';
import UserManagement from './Components/Dashboard/Admin/UserManagement';


function App() {
  const [beneficiaries, setBeneficiaries] = useState([]);
  //Defining the home component
  const Home = () => {
    return <h1>Welcome to the Application</h1>;
  };

  const App = () => {
    const [user, setUser] = useState({
      username: 'Linet Chepngeno',
      email: 'linetmutai@gmail.com',
      password: 'password123',
    });
  
    const updateUser = (updatedUser) => {
      setUser(updatedUser);
    };
  
    return (
      <div>
        <h1>My App</h1>
        <Profile user={user} updateUser={updateUser} /> {/* Render the Profile component */}
      </div>
    );
  };

  return (
    <div className="App">
      <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/user-management" element={<UserManagement />} />
          <Route path="dashboard/beneficiaries" element={<Beneficiaries
          beneficiaries={beneficiaries}
          setBeneficiaries={setBeneficiaries} />} />
          <Route path="dashboard/profile" element={<Profile />} />
          <Route path="dashboard/send-money" element={<SendMoney beneficiaries={beneficiaries}/>} />
          <Route path="dashboard/transaction-summary" element={<TransactionSummary />} />
        </Routes >
        <Loader />
        <Modal />
      </div>
    </Router>
    </div>
  );
}

export default App;