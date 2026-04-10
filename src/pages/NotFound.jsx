import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="not-found-page">
      <div className="container">
        <div className="not-found-shell reveal-up">
          <span className="not-found-code">404 ERROR</span>
          <h1 className="not-found-title">Esta página no existe</h1>
          <p className="not-found-text">La ruta que intentaste abrir no fue encontrada o el enlace no es correcto.</p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">Volver al inicio</Link>
            <Link to="/contacto" className="btn btn-secondary">Ir a contacto</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFound
