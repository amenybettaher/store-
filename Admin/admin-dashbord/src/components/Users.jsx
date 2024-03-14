import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/user.css'
function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch all users when the component mounts
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/users/get');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const deleteUser = async (email) => {
        try {
            await axios.delete(`http://localhost:8000/users/delete/${email}`);
            // Refresh the list of users after deletion
            getAllUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };


    return (
        <div>
            <h1>Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Birth</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.email}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.birth}</td>
                            <td>
                                <button onClick={() => deleteUser(user.email)}>Delete</button>
                               
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;
