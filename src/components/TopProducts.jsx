function TopProducts() {
  const topItems = [
    { name: 'Leite Integral', count: 3, color: '#e0f2fe' },
    { name: 'Maçã Gala', count: 2, color: '#fce7f3' },
    { name: 'Pão de Forma', count: 2, color: '#fef3c7' },
    { name: 'Iogurte Natural', count: 2, color: '#e0f2fe' },
    { name: 'Banana', count: 1, color: '#f0fdf4' },
  ];

  return (
    <div
      style={{
        backgroundColor: '#fdf2f8',
        borderRadius: '24px',
        padding: '24px',
        fontFamily: 'system-ui, sans-serif',
        border: '1px solid #fce7f3',
        width: '100%',
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
        🏆 Mais Consumidos (Últimos 2 Meses)
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {topItems.map((item, index) => (
          <div
            key={item.name}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              padding: '12px 16px',
              borderRadius: '12px',
            }}
          >
            <span style={{ fontSize: '14px', color: '#333' }}>
              {index + 1}° <strong>{item.name}</strong>
            </span>
            <span
              style={{
                fontSize: '12px',
                color: '#666',
                backgroundColor: item.color,
                padding: '4px 10px',
                borderRadius: '12px',
                fontWeight: '600',
              }}
            >
              {item.count} compras completas
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopProducts;
