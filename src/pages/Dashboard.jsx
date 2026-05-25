import { useState } from 'react';

function DashboardPage() {
  const [expiryItems, setExpiryItems] = useState([
    {
      id: 1,
      name: 'Maçã Gala',
      qty: '6 un',
      daysLeft: 2,
      icon: '🍎',
      category: 'Frutas e Vegetais',
      warning: false,
    },
    {
      id: 2,
      name: 'Leite Integral',
      qty: '2 un',
      daysLeft: 3,
      icon: '🥛',
      category: 'Laticínios',
      warning: false,
    },
    {
      id: 3,
      name: 'Tomate Italiano',
      qty: '5 un',
      daysLeft: 1,
      icon: '🍅',
      category: 'Frutas e Vegetais',
      warning: false,
    },
    {
      id: 4,
      name: 'Berinjela',
      qty: '3 un',
      daysLeft: 4,
      icon: '🍆',
      category: 'Frutas e Vegetais',
      warning: '⚠️ Já estragou 3 vezes antes. Leve menos!',
    },
    {
      id: 5,
      name: 'Iogurte Natural',
      qty: '4 un',
      daysLeft: 5,
      icon: '🥛',
      category: 'Laticínios',
      warning: false,
    },
  ]);

  const handleConsume = (id) => {
    setExpiryItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSpoiled = (id) => {
    setExpiryItems((prev) => prev.filter((item) => item.id !== id));
  };

  const sortedExpiryItems = [...expiryItems].sort(
    (a, b) => a.daysLeft - b.daysLeft,
  );

  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        maxWidth: '1400px',
        margin: '0 auto',
        color: '#334155',
      }}
    >
      <div style={{ marginBottom: '24px' }}>
        <h2
          style={{
            margin: '0',
            fontSize: '26px',
            fontWeight: '800',
            color: '#1e293b',
          }}
        >
          Olá! 👋
        </h2>
        <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#64748b' }}>
          Bem-vindo! Aqui está o resumo financeiro e o status da despensa do seu
          lar hoje.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px',
          marginBottom: '24px',
        }}
      >
        <div style={{ ...miniCardStyle, backgroundColor: '#ffffff' }}>
          <span
            style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 'bold' }}
          >
            📊 GASTO MENSAL TOTAL
          </span>
          <span
            style={{
              fontSize: '22px',
              fontWeight: '900',
              color: '#1e293b',
              margin: '4px 0',
            }}
          >
            R$ 1.642,50
          </span>
          <span
            style={{
              fontSize: '11px',
              color: '#a71204',
              backgroundColor: '#f8c9c9',
              padding: '2px 6px',
              borderRadius: '6px',
              width: 'fit-content',
              fontWeight: '500',
            }}
          >
            +19,5% em relação ao mês passado
          </span>
        </div>
        <div style={{ ...miniCardStyle, backgroundColor: '#f4f9fb' }}>
          <span
            style={{ fontSize: '11px', color: '#0369a1', fontWeight: 'bold' }}
          >
            🛒 Total Supermercado
          </span>
          <span
            style={{
              fontSize: '20px',
              fontWeight: '800',
              color: '#0369a1',
              margin: '4px 0',
            }}
          >
            R$ 980,00
          </span>
          <span style={{ fontSize: '11px', color: '#64748b' }}>
            Produtos de mercearia/limpeza
          </span>
        </div>
        <div style={{ ...miniCardStyle, backgroundColor: '#fef2f2' }}>
          <span
            style={{ fontSize: '11px', color: '#b91c1c', fontWeight: 'bold' }}
          >
            🥩 Total Açougue
          </span>
          <span
            style={{
              fontSize: '20px',
              fontWeight: '800',
              color: '#b91c1c',
              margin: '4px 0',
            }}
          >
            R$ 412,50
          </span>
          <span style={{ fontSize: '11px', color: '#64748b' }}>
            Carnes, aves e proteínas
          </span>
        </div>
        <div style={{ ...miniCardStyle, backgroundColor: '#f0fdf4' }}>
          <span
            style={{ fontSize: '11px', color: '#166534', fontWeight: 'bold' }}
          >
            🍉 Total Sacolão
          </span>
          <span
            style={{
              fontSize: '20px',
              fontWeight: '800',
              color: '#166534',
              margin: '4px 0',
            }}
          >
            R$ 250,00
          </span>
          <span style={{ fontSize: '11px', color: '#64748b' }}>
            Hortifruti fresco da feira
          </span>
        </div>
        <div style={{ ...miniCardStyle, backgroundColor: '#fff7ed' }}>
          <span
            style={{ fontSize: '11px', color: '#b45309', fontWeight: 'bold' }}
          >
            🏃‍♂️ Meta de Idas / Mês
          </span>
          <span
            style={{
              fontSize: '20px',
              fontWeight: '800',
              color: '#b45309',
              margin: '6px 0',
            }}
          >
            2 / 4 idas
          </span>
          <span
            style={{ fontSize: '11px', color: '#ea580c', fontWeight: '600' }}
          ></span>
        </div>
      </div>

      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid #f1f5f9',
          marginBottom: '24px',
        }}
      >
        <h4
          style={{
            margin: '0 0 20px 0',
            fontSize: '13px',
            color: '#475569',
            fontWeight: '700',
          }}
        >
          📈 Evolução dos Gastos (Últimos Meses)
        </h4>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            height: '160px',
            paddingBottom: '10px',
            borderBottom: '2px solid #f1f5f9',
          }}
        >
          {[
            { month: 'Jan', val: 'R$1250', pxHeight: '100px' },
            { month: 'Fev', val: 'R$950', pxHeight: '76px' },
            { month: 'Mar', val: 'R$1300', pxHeight: '104px' },
            { month: 'Abr', val: 'R$1150', pxHeight: '92px' },
            { month: 'Mai', val: 'R$1375', pxHeight: '110px' },
          ].map((bar, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '70px',
                gap: '6px',
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  color: '#94a3b8',
                  fontWeight: 'bold',
                }}
              >
                {bar.val}
              </span>

              <div
                style={{
                  width: '28px',
                  height: bar.pxHeight,
                  backgroundColor: '#a7f3d0',
                  borderRadius: '6px 6px 0 0',
                  transition: 'height 0.3s',
                }}
              />
              <span
                style={{
                  fontSize: '12px',
                  color: '#64748b',
                  fontWeight: '600',
                  marginTop: '4px',
                }}
              >
                {bar.month}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '24px',
          alignItems: 'start',
        }}
      >
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: '24px',
            borderRadius: '16px',
            border: '1px solid #f1f5f9',
          }}
        >
          <h3
            style={{
              margin: '0 0 4px 0',
              fontSize: '15px',
              color: '#1e293b',
              fontWeight: '700',
            }}
          >
            ⚠️ Produtos Próximos ao Vencimento
          </h3>
          <p
            style={{ margin: '0 0 20px 0', fontSize: '12px', color: '#94a3b8' }}
          >
            Consumo prioritário sugerido para os itens da sua despensa.
          </p>

          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            {sortedExpiryItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#ffffff',
                  border: '1px solid #f1f5f9',
                  borderRadius: '16px',
                  padding: '16px 20px',
                  gap: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.01)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <span style={{ fontSize: '24px' }}>{item.icon}</span>
                    <div>
                      <strong
                        style={{
                          fontSize: '15px',
                          color: '#334155',
                          display: 'block',
                          fontWeight: '700',
                        }}
                      >
                        {item.name}
                      </strong>
                      <span style={{ fontSize: '12px', color: '#64748b' }}>
                        Quantidade:{' '}
                        <span style={{ color: '#ea580c', fontWeight: '700' }}>
                          {item.qty}
                        </span>
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        padding: '6px 12px',
                        borderRadius: '10px',
                        backgroundColor:
                          item.daysLeft === 1 ? '#fee2e2' : '#fef3c7',
                        color: item.daysLeft === 1 ? '#b91c1c' : '#b45309',
                      }}
                    >
                      Vence em {item.daysLeft}{' '}
                      {item.daysLeft === 1 ? 'dia' : 'dias'}
                    </span>

                    <span
                      style={{
                        fontSize: '10px',
                        backgroundColor: '#fee2e2',
                        color: '#b91c1c',
                        padding: '6px 12px',
                        borderRadius: '10px',
                        fontWeight: '800',
                        letterSpacing: '0.3px',
                      }}
                    >
                      ⚠️ CONSUMIR AGORA EVITE O DESPERDÍCIO
                    </span>

                    <button
                      onClick={() => handleConsume(item.id)}
                      style={{
                        backgroundColor: '#dcfce7',
                        color: '#15803d',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '10px',
                        fontWeight: 'bold',
                        fontSize: '13px',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s',
                      }}
                    >
                      ✓ Consumi
                    </button>
                    <button
                      onClick={() => handleSpoiled(item.id)}
                      style={{
                        backgroundColor: '#f1f5f9',
                        color: '#64748b',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '10px',
                        fontWeight: 'bold',
                        fontSize: '13px',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s',
                      }}
                    >
                      🗑️ Estragou
                    </button>
                  </div>
                </div>

                {item.warning && (
                  <div
                    style={{
                      backgroundColor: '#fee2e2',
                      borderLeft: '4px solid #ef4444',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      color: '#b91c1c',
                      fontWeight: '500',
                    }}
                  >
                    {item.warning}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              backgroundColor: '#fff1f2',
              padding: '20px',
              borderRadius: '16px',
              border: '1px solid #ffe4e6',
            }}
          >
            <h4
              style={{
                margin: '0 0 14px 0',
                fontSize: '13px',
                color: '#b91c1c',
                fontWeight: '700',
              }}
            >
              🏆 Mais Consumidos (Últimos 2 Meses)
            </h4>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
            >
              {[
                {
                  rank: '1°',
                  name: 'Leite Integral',
                  desc: '3 compras completas',
                },
                { rank: '2°', name: 'Maçã Gala', desc: '2 compras completas' },
                {
                  rank: '3°',
                  name: 'Pão de Forma',
                  desc: '2 compras completas',
                },
                {
                  rank: '4°',
                  name: 'Iogurte Natural',
                  desc: '2 compras completas',
                },
                { rank: '5°', name: 'Banana', desc: '1 compras completas' },
              ].map((prod, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    backgroundColor: '#ffffff',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    fontSize: '13px',
                    border: '1px solid #fff5f5',
                  }}
                >
                  <span style={{ fontWeight: '600' }}>
                    <span style={{ color: '#b91c1c', marginRight: '6px' }}>
                      {prod.rank}
                    </span>
                    {prod.name}
                  </span>
                  <span
                    style={{
                      fontSize: '11px',
                      color: '#94a3b8',
                      backgroundColor: '#f8fafc',
                      padding: '2px 6px',
                      borderRadius: '6px',
                    }}
                  >
                    {prod.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#f0fdf4',
              padding: '20px',
              borderRadius: '16px',
              border: '1px solid #dcfce7',
            }}
          >
            <h4
              style={{
                margin: '0 0 14px 0',
                fontSize: '13px',
                color: '#166534',
                fontWeight: '700',
              }}
            >
              🏪 Meus Mercados Favoritos
            </h4>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
            >
              {[
                { name: 'Supermercado Pão de Açúcar' },
                { name: 'Atacadão Carrefour' },
                { name: 'Hortifruti da Vila' },
              ].map((mkt, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#ffffff',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    fontSize: '13px',
                    border: '1px solid #e2f5e7',
                  }}
                >
                  <span>🏪 {mkt.name}</span>
                  <span style={{ color: '#ec4899', fontSize: '12px' }}>💜</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const miniCardStyle = {
  padding: '16px',
  borderRadius: '12px',
  border: '1px solid #e2e8f0',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 2px 6px rgba(0,0,0,0.01)',
};

export default DashboardPage;
