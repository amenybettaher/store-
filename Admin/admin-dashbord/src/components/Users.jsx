import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/user.css'
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Users({switchView}) {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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

    const filteredUsers = users.filter(user =>
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="users-container">
            <Navbar switchView={switchView}/>
            <Sidebar switchView={switchView} />

            <h1>Users</h1>

            <div className="search-container">
                <input
                    id="user-search"
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

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
                    {filteredUsers.map(user => (
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
