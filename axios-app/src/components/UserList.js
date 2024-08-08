import React, { useEffect, useState } from "react";
import api from "../services/api";
import '../styles/styles.css';

const UserList = () => {
  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect (() => {
    // obtener usuarios
    const fetchUsers = async () => {
        try {
            const response = await api.get('/users');
            setUsers(response.data)
        } catch (err) {
            setError('Erro al recupera datos');
        }finally{
            setLoading(false);
        }
    };
    fetchUsers();
  }, []
  );
  if(loading) return <p>cargando...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="user-list">
        <h2>Lista de usuarios</h2>
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    <p><strong>Nombre:</strong>{user.name}</p>
                    <p><strong>Email:</strong>{user.email}</p>
                </li>
            )
            )}
        </ul>
    </div>
  );
}

export default UserList;