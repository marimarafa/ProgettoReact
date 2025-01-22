// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Importa il file CSS per questa pagina

function HomePage() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Inizia a visualizzare e gestire le tue tabelle.</h1>
        <p>Esplora le funzionalità disponibili nel sistema!</p>
      </header>

      <section className="home-content">
        <div className="home-card">
          <h2>Elenco WP</h2>
          <p>Visualizza la lista di tutti i WP</p>
          <Link to="/wp" className="home-link">Vai a WP</Link>
        </div>

        <div className="home-card">
          <h2>Elenco Assenze</h2>
          <p>Controlla le assenze registrate</p>
          <Link to="/assenza" className="home-link">Vai alle Assenze</Link>
        </div>

        <div className="home-card">
          <h2>Elenco Persone</h2>
          <p>Gestisci le persone nel sistema</p>
          <Link to="/persona" className="home-link">Vai alle Persone</Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
