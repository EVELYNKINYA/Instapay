import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AdminDashboardLayout = ({ userRole }) => {
  // Assuming userRole is passed as a prop from your authentication logic
  if (userRole !== 'admin') {
    // If the user is not an admin, return null or a message indicating unauthorized access
    return null; // You can also redirect to a different page
  }

  return (
    <div>
      {/* Render your AdminDashboard layout here */}
      <h1>Admin Dashboard</h1>
      <nav>
        {/* Add navigation links for nested routes here */}
        <ul>
          <li>
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/dashboard/transaction-summary">Transaction Summary</Link>
          </li>
          <li>
            <Link to="/admin/dashboard/user-management">User Management</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default AdminDashboardLayout;
