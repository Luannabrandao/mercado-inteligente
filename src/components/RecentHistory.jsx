import { useState } from 'react';

function RecentHistory() {
  const [favorites, setFavorites] = useState({});

  const markets = [
    { id: 1, name: '🏪 Supermercado Pão de Açúcar' },
    { id: 2, name: '🛍️ Atacadão Carrefour' },
    { id: 3, name: '🍉 Hortifruti da Vila' },
  ];

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div
      style={{
        backgroundColor: '#f0fdf4',
        borderRadius: '24px',
        padding: '24px',
        fontFamily: 'system-ui, sans-serif',
        boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
        border: '1px solid #dcfce7',
      }}
    >
      <h3
        style={{
          margin: '0 0 16px 0',
          color: '#1a3a34',
          fontSize: '16px',
          fontWeight: '600',
        }}
      >
        🏪 Meus Mercados Favoritos
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {markets.map((m) => (
          <div
            key={m.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              padding: '14px 20px',
              borderRadius: '16px',
              border: '1px solid #eaf5ec',
            }}
          >
            <span
              style={{ color: '#333', fontWeight: '500', fontSize: '14px' }}
            >
              {m.name}
            </span>
            <button
              onClick={() => toggleFavorite(m.id)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                transition: 'transform 0.1s',
                transform: favorites[m.id] ? 'scale(1.2)' : 'scale(1)',
              }}
            >
              {favorites[m.id] ? '❤️' : '🤍'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentHistory;
