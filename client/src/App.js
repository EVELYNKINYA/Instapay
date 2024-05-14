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
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import Footer from './Components/Shared/Footer';
import Loader from './Components/Shared/Loader';
import Modal from './Components/Shared/Modal';
import AdminDashboard from './Components/Dashboard/Admin/AdminDashBoard';
import AdminDashboardLayout from './Components/Dashboard/Admin/AdminDashboardLayout';
import UserManagement from './Components/Dashboard/Admin/UserManagement';


const Home = () => {
  return <h1>Welcome to Instapay</h1>;
};

const App = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [user, setUser] = useState({
    username: 'Linet Chepngeno',
    email: 'linetmutaih@gmail.com',
    password: 'password123',
  });

  const updateUser = (updatedUser) => {
    console.log('Updated user:', updatedUser);
    // setUser(updatedUser);
  };

  const ProfileTest = () => {
    return (
      <div>
        <h1>Profile Test</h1>
        <Profile user={user} updateUser={updateUser} isTest={true}/> {/* Render the Profile component */}
      </div>
    );
  };

  return (
    <div className="App">
    <Router>
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/dashboard" element={<AdminDashboardLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="transaction-summary" element={<TransactionSummary />} />
        <Route path="user-management" element={<UserManagement />} />
      </Route>
      <Route path="dashboard/beneficiaries" element={<Beneficiaries beneficiaries={beneficiaries} setBeneficiaries={setBeneficiaries} />} />
      <Route path="dashboard/user/profile" element={<Profile />} />
      <Route path="dashboard/send-money" element={<SendMoney beneficiaries={beneficiaries} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
    </Routes>
    <Footer />
    <Loader />
    <Modal />
    
  </div>
</Router>
    </div>
  );
}

export default App;