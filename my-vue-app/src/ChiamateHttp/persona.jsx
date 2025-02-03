import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './stile.css';

function Persona() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5004/3')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Errore ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p style={{ color: 'red' }}>Errore: {error}</p>;

  return (
    <div>
      <h2>Elenco Persone</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>COGNOME</th>
            <th>POSIZIONE</th>
            <th>STIPENDIO</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nome}</td>
              <td>{user.cognome}</td>
              <td>{user.posizione}</td>
              <td>{user.stipendio}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Persona;
