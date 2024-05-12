import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import Navbar from './Components/Shared/Navbar';
import Footer from './Components/Shared/Footer';
import Loader from './Components/Shared/Loader';
import Modal from './Components/Shared/Modal';
import AdminDashboard from './Components/Dashboard/Admin/AdminDashBoard';
import UserManagement from './Components/Dashboard/Admin/UserManagement';

//Defining the home component
const Home = () => {
  return <h1>Welcome to the Application</h1>;
};


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/signup" component={Signup} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/user-management" element={<UserManagement />} />
        </Routes >
        <Footer />
        <Loader />
        <Modal />
      </div>
    </Router>
  );
};

export default App;