import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import API from '../../Utils/API';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await API.get('/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleUserStatusChange = async (userId, newStatus) => {
    try {
      await API.put(`/users/${userId}`, { status: newStatus });
      fetchUsers();
    } catch (error) {
      console.error('Error updating user status:', error);
    }
  };

  const handleUserDelete = async (userId) => {
    try {
      await API.delete(`/users/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <Container fluid className="mt-4">
      <h2>User Management</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
              <td>
                <Button
                  variant={user.status === 'active' ? 'danger' : 'success'}
                  onClick={() =>
                    handleUserStatusChange(
                      user.id,
                      user.status === 'active' ? 'inactive' : 'active'
                    )
                  }
                  className="mr-2"
                >
                  {user.status === 'active' ? 'Deactivate' : 'Activate'}
                </Button>
                <Button variant="danger" onClick={() => handleUserDelete(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserManagement;