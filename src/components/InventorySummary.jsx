import inventoryData from '../mocks/inventoryMock.json';

function InventorySummary() {
  const totalItems = inventoryData.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '20px',
        width: '340px',
        fontFamily: 'system-ui, sans-serif',
        boxShadow: '0 10px 25px rgba(0,0,0,0.03)',
        border: '1px solid #ebebeb',
      }}
    >
      <h4
        style={{
          margin: '0 0 15px 0',
          color: '#1a3a34',
          fontSize: '14px',
          textTransform: 'uppercase',
        }}
      >
        📊 Resumo do Inventário
      </h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '14px',
          }}
        >
          <span style={{ color: '#666' }}>Total de itens na despensa:</span>
          <strong style={{ color: '#1a3a34' }}>{totalItems} unidades</strong>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '14px',
          }}
        >
          <span style={{ color: '#666' }}>Categorias ativas:</span>
          <strong style={{ color: '#1a3a34' }}>3</strong>
        </div>
      </div>
    </div>
  );
}

export default InventorySummary;
