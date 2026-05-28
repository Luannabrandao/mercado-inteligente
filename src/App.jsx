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
  return (
    <Router basename="/mercado-inteligente">
            
      <Routes>
        <Route path="/" element={<Dashboard />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shopping" element={<ShoppingPage />} />
        <Route path="/insert" element={<InsertPurchasePage />} />
      </Routes>
    </Router>
  );
}

export default App;
