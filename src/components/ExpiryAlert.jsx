import inventoryData from '../mocks/inventoryMock.json';

function ExpiryAlert() {
  const expiringItems = inventoryData.filter(
    (item) => item.status === 'attention',
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '360px',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <h3
        style={{
          margin: '0',
          color: '#1a3a34',
          fontSize: '16px',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        ⏰ Alertas de Validade
      </h3>

      {expiringItems.map((item) => (
        <div
          key={item.id}
          style={{
            backgroundColor: '#ffffff',
            borderLeft: '5px solid #4cd7c0',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.03)',
            borderTop: '1px solid #f5f5f5',
            borderRight: '1px solid #f5f5f5',
            borderBottom: '1px solid #f5f5f5',
          }}
        >
          <p
            style={{
              margin: '0 0 12px 0',
              color: '#444',
              fontSize: '14px',
              lineHeight: '1.5',
            }}
          >
            Sua <strong>{item.name}</strong> vence em{' '}
            <span style={{ color: '#e53935', fontWeight: 'bold' }}>
              {item.daysLeft} {item.daysLeft === 1 ? 'dia' : 'dias'}
            </span>
            
          </p>

          <button
            style={{
              backgroundColor: '#4cd7c0',
              color: '#1a3a34',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '12px',
              transition: 'background 0.2s',
            }}
          >
            Consumir agora
          </button>
        </div>
      ))}
    </div>
  );
}

export default ExpiryAlert;
