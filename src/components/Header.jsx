import { Link } from "react-router-dom"
import { useAuth } from "../context/UserContext"
import { useState } from "react";

const Header = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout()
    setOpen(false);
  }

  return (
    <header className="header">

      <img className="logo" src="src/assets/Logo-Test.png" alt="imagen de logo" />

      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Abrir menú" >
        ☰
      </button>

      <nav className={`navbar ${open ? "show" : ""}`}>

        <ul className="nav-link">
          {/* Cambiar elementos a por componentes Link de react-router-dom */}
          {
            user && <>
              <li><Link to="/" onClick={() => setOpen(false)}>Inicio</Link></li>

              <li><Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link></li>

              <button onClick={handleLogout} className="cs-btn">Cerrar sesión</button>
            </>
          }
          {
            !user && <>
              <li><Link to="/login" onClick={() => setOpen(false)}>Login</Link></li>

              <li><Link to="/registrate" onClick={() => setOpen(false)}>Registrate</Link></li>

              <li><Link to="/aboutUs" onClick={() => setOpen(false)}>Sobre Nosotros</Link></li>
            </>
          }
        </ul>
      </nav>
    </header>
  )
}

export { Header }