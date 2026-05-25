import { useState } from 'react';

function ShoppingList() {
  // Lista de produtos que precisam de atenção no painel geral
  const [items, setItems] = useState([
    { id: 1, name: 'Maçã Gala', qty: 6, daysLeft: 2, icon: '🍎' },
    { id: 2, name: 'Leite Integral', qty: 2, daysLeft: 3, icon: '🥛' },
    { id: 3, name: 'Tomate Italiano', qty: 5, daysLeft: 1, icon: '🍅' },
    { id: 4, name: 'Berinjela', qty: 3, daysLeft: 4, icon: '🍆' },
    { id: 5, name: 'Iogurte Natural', qty: 4, daysLeft: 5, icon: '🥛' },
  ]);

  // AÇÃO 1: Quando o item foi consumido com sucesso.
  const handleConsumeItem = (id, name) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    alert(
      `🎉 Que ótimo! O item "${name}" foi totalmente consumido. Desperdício zero no lar!`,
    );
  };

  // AÇÃO 2: Quando o item estragou
  const handleWasteItem = (id, name) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    alert(
      `🔴 Registro computado: Infelizmente o item "${name}" foi para o lixo.`,
    );
  };

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        padding: '32px',
        borderRadius: '24px',
        border: '1px solid #f1f5f9',
        boxShadow: '0 4px 25px rgba(0, 0, 0, 0.01)',
        width: '100%',
      }}
    >
      <div style={{ marginBottom: '24px' }}>
        <h3
          style={{
            margin: '0',
            fontSize: '18px',
            color: '#1a3a34',
            fontWeight: '700',
          }}
        >
          ⚠️ Produtos Próximos ao Vencimento
        </h3>
        <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#64748b' }}>
          Consumo prioritário sugerido para os itens da sua despensa.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '30px 0' }}>
            <span style={{ fontSize: '40px' }}>🥳</span>
            <p
              style={{
                color: '#16a34a',
                fontSize: '15px',
                fontWeight: 'bold',
                margin: '10px 0 0 0',
              }}
            >
              Tudo limpo por aqui! Nenhum produto correndo risco de vencer.
            </p>
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                borderRadius: '18px',
                backgroundColor: '#fffaf5',
                border: '1px solid #ffedd5',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '14px' }}
              >
                <span style={{ fontSize: '24px' }}>{item.icon}</span>
                <div>
                  <h4
                    style={{
                      margin: '0',
                      fontSize: '16px',
                      color: '#334155',
                      fontWeight: '600',
                    }}
                  >
                    {item.name}
                  </h4>
                  <span style={{ fontSize: '13px', color: '#64748b' }}>
                    Quantidade:{' '}
                    <strong style={{ color: '#ea580c' }}>{item.qty} un</strong>
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  flexWrap: 'wrap',
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    backgroundColor: item.daysLeft <= 2 ? '#fee2e2' : '#fef3c7',
                    color: item.daysLeft <= 2 ? '#991b1b' : '#92400e',
                    padding: '6px 12px',
                    borderRadius: '10px',
                    fontWeight: 'bold',
                  }}
                >
                  Vence em {item.daysLeft} d
                </span>

                <div
                  style={{
                    backgroundColor: '#fef2f2',
                    color: '#991b1b',
                    border: '2px solid #fca5a5',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: '900',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    lineHeight: '1.3',
                  }}
                >
                  ⚠️ consumir agora
                  <br />
                  evite o desperdicio
                </div>

                <button
                  onClick={() => handleConsumeItem(item.id, item.name)}
                  style={{
                    backgroundColor: '#dcfce7',
                    color: '#14532d',
                    border: '1px solid #bbf7d0',
                    padding: '10px 16px',
                    borderRadius: '12px',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.1s',
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = '#bbf7d0')
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = '#dcfce7')
                  }
                >
                  ✓ Consumi
                </button>

                {/* Botão Estragou */}
                <button
                  onClick={() => handleWasteItem(item.id, item.name)}
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#64748b',
                    border: '1px solid #cbd5e1',
                    padding: '10px 16px',
                    borderRadius: '12px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = '#f1f5f9')
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = '#ffffff')
                  }
                >
                  🗑️ Estragou
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ShoppingList;
