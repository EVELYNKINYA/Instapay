import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Beneficiaries from './Components/Dashboard/User/Beneficiaries';
import SendMoney from './Components/Dashboard/User/SendMoneyForm';
import Profile from './Components/Dashboard/User/Profile';
import Navbar from './Components/Shared/Navbar';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import Footer from './Components/Shared/Footer';
import Modal from './Components/Shared/Modal';
import AdminDashboard from './Components/Dashboard/Admin/AdminDashBoard';
import AdminDashboardLayout from './Components/Dashboard/Admin/AdminDashboardLayout';

const Home = () => {
  return <h1>Welcome to Instapay</h1>;
};

const NotFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
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
    setUser(updatedUser);
  };

  return (
    <div className="App d-flex flex-column min-vh-100">
      <Router>
        <Navbar />
        <div className="container flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin/dashboard" element={<AdminDashboardLayout />}>
              <Route index element={<AdminDashboard />} />
            </Route>
            <Route path="dashboard/beneficiaries" element={<Beneficiaries beneficiaries={beneficiaries} setBeneficiaries={setBeneficiaries} />} />
            <Route path="dashboard/send-money" element={<SendMoney beneficiaries={beneficiaries} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/shared/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
        <Modal />
      </Router>
    </div>
  );
}

export default App;
