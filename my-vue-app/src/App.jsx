import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage'; // Importiamo la nuova pagina iniziale
import Persona from './ChiamateHttp/persona';
import Assenza from './ChiamateHttp/assenza';
import Wp from './ChiamateHttp/wp';
import './App.css';

function App() {
  return (
    <Router>
      <header className="header">
        <div className="logo">
          <h1>HOME</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to="/wp" className="nav-item">Elenco WP</Link></li>
            <li><Link to="/assenza" className="nav-item">Elenco Assenze</Link></li>
            <li><Link to="/persona" className="nav-item">Elenco Persone</Link></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Imposta la pagina iniziale */}
          <Route path="/wp" element={<Wp />} />
          <Route path="/assenza" element={<Assenza />} />
          <Route path="/persona" element={<Persona />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
