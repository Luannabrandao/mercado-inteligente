import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ShoppingPage from './pages/ShoppingPage';
import InsertPurchasePage from './pages/InsertPurchasePage';

function App() {
  const getMenuStyles = ({ isActive }) => ({
    textDecoration: 'none',
    backgroundColor: isActive ? '#ea580c' : 'rgba(255,255,255,0.5)',
    color: isActive ? '#ffffff' : '#7c2d12',
    padding: '16px 20px',
    borderRadius: '20px',
    fontSize: '16px',
    fontWeight: isActive ? 'bold' : '600',
    display: 'block',
    textAlign: 'center',
    transition: 'all 0.2s ease',
    boxShadow: isActive ? '0 4px 12px rgba(234, 88, 12, 0.2)' : 'none',
  });

  const getActionBtnStyles = ({ isActive }) => ({
    textDecoration: 'none',
    backgroundColor: isActive ? '#14532d' : '#4ade80',
    color: isActive ? '#ffffff' : '#14532d',
    padding: '16px 20px',
    borderRadius: '20px',
    fontSize: '16px',
    fontWeight: 'bold',
    display: 'block',
    textAlign: 'center',
    transition: 'all 0.2s ease',
    boxShadow: isActive
      ? '0 6px 16px rgba(20, 83, 45, 0.25)'
      : '0 6px 16px rgba(74, 222, 128, 0.15)',
    border: isActive ? '2px solid #ffedd5' : 'none',
  });

  return (
    <Router>
      <div
        style={{
          display: 'flex',
          minHeight: '100vh',
          width: '100%',
          fontFamily: 'system-ui, sans-serif',
          backgroundColor: '#fffaf5',
          margin: 0,
          padding: 0,
          alignItems: 'stretch',
        }}
      >
        <aside
          style={{
            width: '340px',
            backgroundColor: '#ffedd5',
            color: '#7c2d12',
            padding: '50px 30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '5px 0 25px rgba(124, 45, 18, 0.05)',
            flexShrink: 0,
            boxSizing: 'border-box',
          }}
        >
          <div style={{ marginBottom: '60px', textAlign: 'center' }}>
            <div style={{ fontSize: '54px', marginBottom: '10px' }}>🥑</div>
            <h1
              style={{
                margin: '0',
                fontSize: '34px',
                fontWeight: '900',
                color: '#14532d',
                lineHeight: '1.2',
                letterSpacing: '-0.5px',
              }}
            >
              Mercado Inteligente
            </h1>
            <span
              style={{
                fontSize: '13px',
                color: '#ea580c',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                display: 'block',
                marginTop: '8px',
              }}
            >
              Economia do Lar
            </span>
          </div>

          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              flex: 1,
              width: '100%',
            }}
          >
            <NavLink to="/" style={getMenuStyles}>
              📊 Painel Geral
            </NavLink>

            <NavLink to="/compras" style={getMenuStyles}>
              🛒 Lista Inteligente
            </NavLink>

            <NavLink to="/cadastrar-compra" style={getActionBtnStyles}>
              ➕ Lançar Nota/Compra
            </NavLink>
          </nav>

          <div
            style={{
              fontSize: '12px',
              color: '#9a3412',
              borderTop: '1px solid #fed7aa',
              paddingTop: '20px',
              width: '100%',
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            v1.2.0 • Edição Soft UI Pastel
          </div>
        </aside>

        <main
          style={{
            flex: 1,
            padding: '50px 60px',
            backgroundColor: '#fffaf5',
            boxSizing: 'border-box',
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/compras" element={<ShoppingPage />} />
            <Route path="/cadastrar-compra" element={<InsertPurchasePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
