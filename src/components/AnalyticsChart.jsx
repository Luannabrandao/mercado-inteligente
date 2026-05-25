import financialData from '../mocks/financialMock.json';

function AnalyticsChart() {
  const trends = financialData.monthlyTrends || [
    { month: 'Jan', consumed: 1250 },
    { month: 'Fev', consumed: 950 },
    { month: 'Mar', consumed: 1300 },
    { month: 'Abr', consumed: 1150 },
    { month: 'Mai', consumed: 1378 },
  ];

  const maxAmount = Math.max(...trends.map((t) => t.consumed));

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '24px',
        flex: '1',
        minWidth: '340px',
        fontFamily: 'system-ui, sans-serif',
        boxShadow: '0 10px 25px rgba(0,0,0,0.02)',
        border: '1px solid #ebebeb',
      }}
    >
      <h3
        style={{
          margin: '0 0 20px 0',
          color: '#1a3a34',
          fontSize: '16px',
          fontWeight: '600',
        }}
      >
        📈 Evolução dos Gastos (Últimos Meses)
      </h3>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          height: '180px',
          paddingTop: '20px',
          borderBottom: '2px solid #f0f0f0',
        }}
      >
        {trends.map((item) => {
          const barHeight = (item.consumed / maxAmount) * 100;

          return (
            <div
              key={item.month}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: 1,
                gap: '8px',
              }}
            >
              <span
                style={{ fontSize: '11px', color: '#666', fontWeight: '500' }}
              >
                R${item.consumed}
              </span>

              <div
                style={{
                  width: '35px',
                  height: `${barHeight}px`,
                  backgroundColor: '#a7f3d0',
                  borderRadius: '8px 8px 0 0',
                  transition: 'height 0.5s ease-in-out',
                  boxShadow: 'inset 0 -20px 20px rgba(16, 185, 129, 0.05)',
                }}
              />

              <span
                style={{
                  fontSize: '12px',
                  color: '#333',
                  fontWeight: 'bold',
                  marginBottom: '-25px',
                }}
              >
                {item.month}
              </span>
            </div>
          );
        })}
      </div>
      <div style={{ height: '20px' }}></div>
    </div>
  );
}

export default AnalyticsChart;
