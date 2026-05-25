function FinancialCard() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.5fr repeat(4, 1fr)',
        gap: '20px',
        width: '100%',
        flexWrap: 'wrap',
      }}
    >
      {/* CARD PRINCIPAL (Gasto Mensal Total) */}
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '24px',
          borderRadius: '24px',
          border: '1px solid #f1f5f9',
          boxShadow: '0 4px 20px rgba(0,0,0,0.01)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontSize: '13px',
            color: '#64748b',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          📉 Gasto Mensal Total
        </span>
        <h3
          style={{
            margin: '8px 0',
            fontSize: '32px',
            fontWeight: '800',
            color: '#1e293b',
          }}
        >
          R$ 1.642,50
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span
            style={{
              fontSize: '13px',
              color: '#16a34a',
              backgroundColor: '#dcfce7',
              padding: '2px 8px',
              borderRadius: '8px',
              fontWeight: 'bold',
            }}
          >
            -12%
          </span>
          <span style={{ fontSize: '12px', color: '#64748b' }}>
            em relação ao mês passado
          </span>
        </div>
      </div>

      {/* MINI CARD 1: MERCADO */}
      <div
        style={{
          backgroundColor: '#f0f9ff',
          padding: '20px',
          borderRadius: '20px',
          border: '1px solid #e0f2fe',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{ fontSize: '12px', color: '#0369a1', fontWeight: 'bold' }}
        >
          🛒 Total Supermercado
        </span>
        <h4
          style={{
            margin: '10px 0 4px 0',
            fontSize: '20px',
            fontWeight: '800',
            color: '#0c4a6e',
          }}
        >
          R$ 980,00
        </h4>
        <span style={{ fontSize: '11px', color: '#0284c7' }}>
          Produtos de mercearia/limpeza
        </span>
      </div>

      {/* MINI CARD 2: AÇOUGUE */}
      <div
        style={{
          backgroundColor: '#fef2f2',
          padding: '20px',
          borderRadius: '20px',
          border: '1px solid #fee2e2',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{ fontSize: '12px', color: '#991b1b', fontWeight: 'bold' }}
        >
          🥩 Total Açougue
        </span>
        <h4
          style={{
            margin: '10px 0 4px 0',
            fontSize: '20px',
            fontWeight: '800',
            color: '#7f1d1d',
          }}
        >
          R$ 412,50
        </h4>
        <span style={{ fontSize: '11px', color: '#b91c1c' }}>
          Carnes, aves e proteínas
        </span>
      </div>

      {/* MINI CARD 3: SACOLÃO */}
      <div
        style={{
          backgroundColor: '#f0fdf4',
          padding: '20px',
          borderRadius: '20px',
          border: '1px solid #dcfce7',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{ fontSize: '12px', color: '#166534', fontWeight: 'bold' }}
        >
          🍉 Total Sacolão
        </span>
        <h4
          style={{
            margin: '10px 0 4px 0',
            fontSize: '20px',
            fontWeight: '800',
            color: '#14532d',
          }}
        >
          R$ 250,00
        </h4>
        <span style={{ fontSize: '11px', color: '#16a34a' }}>
          Hortifruti fresco da feira
        </span>
      </div>

      {/* MINI CARD 4: IDAS */}
      <div
        style={{
          backgroundColor: '#fff7ed',
          padding: '20px',
          borderRadius: '20px',
          border: '1px solid #ffedd5',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{ fontSize: '12px', color: '#c2410c', fontWeight: 'bold' }}
        >
          🚗 Meta de Idas / Mês
        </span>
        <h4
          style={{
            margin: '10px 0 4px 0',
            fontSize: '20px',
            fontWeight: '800',
            color: '#7c2d12',
          }}
        >
          2 / 4{' '}
          <span
            style={{ fontSize: '12px', fontWeight: 'normal', color: '#9a3412' }}
          >
            idas
          </span>
        </h4>
        <span style={{ fontSize: '11px', color: '#ea580c', fontWeight: '500' }}>
          🎯 Evite saídas desnecessárias!
        </span>
      </div>
    </div>
  );
}

export default FinancialCard;
