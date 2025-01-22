import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './stile.css'

function Assenza() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Effettua una chiamata HTTP con fetch
    fetch('http://127.0.0.1:5004/2')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Errore nella risposta del server');
        }
        return response.json(); // Converte la risposta in formato JSON
      })
      .then((data) => {
        setUsers(data);  // Imposta lo stato con i dati ricevuti
        setLoading(false); // Rimuove lo stato di caricamento
      })
      .catch((error) => {
        setError(error.message); // Gestisce gli errori
        setLoading(false);
      });
  }, []); // L'array vuoto significa che la chiamata HTTP avviene una sola volta, al primo render

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div>
      <h2>Elenco Assenze</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>PERSONA</th>
            <th>TIPO</th>
            <th>GIORNO</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td> {user.id}</td>
              <td>{user.persona}</td>
              <td>{user.tipo}</td>
              <td>{user.giorno}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Assenza;
