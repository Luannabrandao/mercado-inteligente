import { useState } from 'react';

function InsertPurchasePage() {
  const [market, setMarket] = useState('');
  const [type, setType] = useState('Mercado');
  const [itemName, setItemName] = useState('');
  const [itemQty, setItemQty] = useState('');
  const [itemTotalPrice, setItemTotalPrice] = useState('');
  const [addedItems, setAddedItems] = useState([]);

  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [isConfirmClicked, setIsConfirmClicked] = useState(false);

  const [savedInvoices, setSavedInvoices] = useState([
    {
      id: 101,
      date: '20/05/2026',
      place: 'Açougue do Gaúcho',
      category: '🥩 Açougue',
      total: 189.4,
    },
    {
      id: 102,
      date: '15/05/2026',
      place: 'Sacolão Central',
      category: '🍉 Sacolão',
      total: 74.2,
    },
    {
      id: 103,
      date: '10/05/2026',
      place: 'Supermercado TodoDia',
      category: '🛒 Mercado',
      total: 412,
    },
  ]);

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!itemName || !itemQty || !itemTotalPrice) return;

    setIsBtnClicked(true);
    setTimeout(() => setIsBtnClicked(false), 200);

    const qtyValue = Number(itemQty);
    const totalItemPrice = Number(itemTotalPrice);
    const unitPrice = totalItemPrice / qtyValue;

    const newItem = {
      id: Date.now(),
      name: itemName,
      qty: qtyValue,
      unitPrice: unitPrice,
      total: totalItemPrice,
    };

    setAddedItems([...addedItems, newItem]);
    setItemName('');
    setItemQty('');
    setItemTotalPrice('');
  };

  const handleRemoveItem = (id) => {
    setAddedItems(addedItems.filter((item) => item.id !== id));
  };

  const calculateTotalInvoice = () => {
    return addedItems.reduce((acc, curr) => acc + curr.total, 0);
  };

  const handleSaveInvoice = () => {
    if (!market || addedItems.length === 0) {
      alert('Por favor, preencha o estabelecimento e adicione itens!');
      return;
    }
    setIsConfirmClicked(true);
    setTimeout(() => setIsConfirmClicked(false), 200);

    const newInvoice = {
      id: Date.now(),
      date: new Date().toLocaleDateString('pt-BR'),
      place: market,
      category:
        type === 'Mercado'
          ? '🛒 Mercado'
          : type === 'Sacolão'
            ? '🍉 Sacolão'
            : '🥩 Açougue',
      total: calculateTotalInvoice(),
    };

    setSavedInvoices([newInvoice, ...savedInvoices]);
    alert(
      `🎉 Nota fiscal de R$ ${calculateTotalInvoice().toFixed(2)} salva com sucesso!`,
    );
    setMarket('');
    setAddedItems([]);
  };

  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        maxWidth: '1300px',
        margin: '0 auto',
      }}
    >
      <div style={{ marginBottom: '32px' }}>
        <h2
          style={{
            color: '#7c2d12',
            margin: '0',
            fontSize: '26px',
            fontWeight: '700',
          }}
        >
          📝 Lançar Nova Compra
        </h2>
        <p style={{ color: '#666', margin: '6px 0 0 0', fontSize: '14px' }}>
          Insira os dados do cupom para calcular valores unitários e atualizar
          limites automaticamente.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '32px',
          alignItems: 'start',
          marginBottom: '40px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              backgroundColor: '#ffffff',
              padding: '24px',
              borderRadius: '20px',
              border: '1px solid #f1f5f9',
            }}
          >
            <h3
              style={{
                margin: '0 0 16px 0',
                fontSize: '15px',
                color: '#7c2d12',
                fontWeight: '600',
              }}
            >
              🏬 Identificação da Compra
            </h3>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '180px' }}>
                <label
                  htmlFor="marketInput"
                  style={{
                    display: 'block',
                    fontSize: '13px',
                    color: '#64748b',
                    marginBottom: '6px',
                  }}
                >
                  Estabelecimento
                </label>
                <input
                  id="marketInput"
                  type="text"
                  placeholder="Ex: Carrefour, Açougue..."
                  value={market}
                  onChange={(e) => setMarket(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '12px',
                    border: '1px solid #cbd5e1',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="typeSelect"
                  style={{
                    display: 'block',
                    fontSize: '13px',
                    color: '#64748b',
                    marginBottom: '6px',
                  }}
                >
                  Setor
                </label>
                <select
                  id="typeSelect"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  style={{
                    padding: '11px 14px',
                    borderRadius: '12px',
                    border: '1px solid #cbd5e1',
                    backgroundColor: '#fff',
                    fontSize: '14px',
                    color: '#334155',
                  }}
                >
                  <option value="Mercado">🛒 Supermercado Geral</option>
                  <option value="Sacolão">🍉 Sacolão / Hortifruti</option>
                  <option value="Açougue">🥩 Açougue / Peixaria</option>
                </select>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#fffdfa',
              padding: '24px',
              borderRadius: '20px',
              border: '1px solid #fef3c7',
            }}
          >
            <h3
              style={{
                margin: '0 0 16px 0',
                fontSize: '15px',
                color: '#b45309',
                fontWeight: '600',
              }}
            >
              🍎 Digitar Itens do Cupom
            </h3>
            <form
              onSubmit={handleAddItem}
              style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                alignItems: 'flex-end',
              }}
            >
              <div style={{ flex: 2, minWidth: '150px' }}>
                <label
                  htmlFor="prodName"
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    color: '#78350f',
                    marginBottom: '6px',
                  }}
                >
                  Produto
                </label>
                <input
                  id="prodName"
                  type="text"
                  placeholder="Ex: Alcatra..."
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div style={{ flex: 1, minWidth: '60px' }}>
                <label
                  htmlFor="prodQty"
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    color: '#78350f',
                    marginBottom: '6px',
                  }}
                >
                  Qtd
                </label>
                <input
                  id="prodQty"
                  type="number"
                  placeholder="1"
                  value={itemQty}
                  onChange={(e) => setItemQty(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div style={{ flex: 1, minWidth: '95px' }}>
                <label
                  htmlFor="prodPrice"
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    color: '#78350f',
                    marginBottom: '6px',
                  }}
                >
                  Valor Total Item
                </label>
                <input
                  id="prodPrice"
                  type="number"
                  step="0.01"
                  placeholder="R$ Total"
                  value={itemTotalPrice}
                  onChange={(e) => setItemTotalPrice(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: isBtnClicked ? '#ffedd5' : '#ea580c',
                  color: isBtnClicked ? '#ea580c' : '#fff',
                  border: isBtnClicked ? '2px solid #ea580c' : 'none',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.1s',
                  fontSize: '14px',
                }}
              >
                {isBtnClicked ? '✨' : '➕ Incluir'}
              </button>
            </form>
          </div>
        </div>

        <div style={{ width: '100%' }}>
          {addedItems.length === 0 ? (
            <div
              style={{
                border: '2px dashed #cbd5e1',
                padding: '54px 32px',
                borderRadius: '20px',
                textAlign: 'center',
                color: '#94a3b8',
                backgroundColor: '#ffffff',
              }}
            >
              <span style={{ fontSize: '32px' }}>🧾</span>
              <p
                style={{
                  margin: '12px 0 0 0',
                  fontSize: '14px',
                  fontWeight: '500',
                }}
              >
                A sua notinha digital aparecerá aqui assim que você incluir o
                primeiro produto.
              </p>
            </div>
          ) : (
            <div
              style={{
                backgroundColor: '#ffffff',
                padding: '28px',
                borderRadius: '20px',
                border: '2px solid #ea580c',
              }}
            >
              <h3
                style={{
                  margin: '0 0 4px 0',
                  fontSize: '16px',
                  color: '#ea580c',
                  fontWeight: '700',
                }}
              >
                🧾 Cupom Digital
              </h3>
              <span
                style={{
                  fontSize: '12px',
                  color: '#64748b',
                  display: 'block',
                  marginBottom: '16px',
                }}
              >
                {market || 'Estabelecimento Não Informado'} • Setor: {type}
              </span>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  marginBottom: '20px',
                  maxHeight: '220px',
                  overflowY: 'auto',
                }}
              >
                {addedItems.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingBottom: '8px',
                      borderBottom: '1px dashed #e2e8f0',
                      fontSize: '14px',
                    }}
                  >
                    <div>
                      <span>
                        {item.name}{' '}
                        <span style={{ color: '#64748b', fontSize: '12px' }}>
                          x{item.qty}
                        </span>
                      </span>
                      <small
                        style={{
                          display: 'block',
                          color: '#94a3b8',
                          fontSize: '11px',
                        }}
                      >
                        Un: R$ {item.unitPrice.toFixed(2)}
                      </small>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                      }}
                    >
                      <strong style={{ color: '#334155' }}>
                        R$ {item.total.toFixed(2)}
                      </strong>

                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#ef4444',
                          cursor: 'pointer',
                          fontSize: '14px',
                          padding: '4px',
                        }}
                        title="Remover item"
                      >
                        ❌
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '2px solid #ea580c',
                  paddingTop: '15px',
                }}
              >
                <span
                  style={{
                    fontWeight: 'bold',
                    fontSize: '13px',
                    color: '#475569',
                  }}
                >
                  TOTAL DA NOTA:
                </span>
                <span
                  style={{
                    fontSize: '24px',
                    fontWeight: '900',
                    color: '#ea580c',
                  }}
                >
                  R$ {calculateTotalInvoice().toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleSaveInvoice}
                style={{
                  width: '100%',
                  backgroundColor: isConfirmClicked ? '#ffedd5' : '#16a34a',
                  color: isConfirmClicked ? '#ea580c' : '#fff',
                  border: isConfirmClicked ? '2px solid #ea580c' : 'none',
                  padding: '14px',
                  borderRadius: '12px',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  marginTop: '20px',
                  transition: 'all 0.1s',
                }}
              >
                💾 Confirmar e Fechar Nota
              </button>
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '32px',
          alignItems: 'start',
        }}
      >
        <div
          style={{
            backgroundColor: '#f0fdf4',
            padding: '24px',
            borderRadius: '20px',
            border: '1px solid #dcfce7',
          }}
        >
          <h3
            style={{
              margin: '0 0 16px 0',
              fontSize: '16px',
              color: '#166534',
              fontWeight: '600',
            }}
          >
            📜 Últimas Notas Lançadas no Mês
          </h3>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            {savedInvoices.map((invoice) => (
              <div
                key={invoice.id}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '14px 18px',
                  borderRadius: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  border: '1px solid #e2f5e7',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '11px',
                      color: '#16a34a',
                      backgroundColor: '#dcfce7',
                      padding: '2px 6px',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                    }}
                  >
                    {invoice.category}
                  </span>
                  <h4
                    style={{
                      margin: '4px 0 2px 0',
                      fontSize: '14px',
                      color: '#334155',
                      fontWeight: '600',
                    }}
                  >
                    {invoice.place}
                  </h4>
                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>
                    Lançado em: {invoice.date}
                  </span>
                </div>
                <strong style={{ fontSize: '15px', color: '#166534' }}>
                  R$ {invoice.total.toFixed(2)}
                </strong>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            backgroundColor: '#f0f9ff',
            padding: '24px',
            borderRadius: '20px',
            border: '1px solid #e0f2fe',
          }}
        >
          <h3
            style={{
              margin: '0 0 4px 0',
              fontSize: '16px',
              color: '#0369a1',
              fontWeight: '600',
            }}
          >
            🎯 Limite de Gastos Estimado
          </h3>
          <p
            style={{ margin: '0 0 20px 0', fontSize: '12px', color: '#64748b' }}
          >
            Acompanhamento sugerido para controle do orçamento doméstico.
          </p>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '13px',
                  marginBottom: '4px',
                }}
              >
                <span style={{ fontWeight: '500', color: '#334155' }}>
                  🛒 Supermercado Mensal
                </span>
                <span style={{ color: '#0369a1', fontWeight: 'bold' }}>
                  R$ 412 / R$ 800
                </span>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '8px',
                  backgroundColor: '#e2e8f0',
                  borderRadius: '10px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: '51%',
                    height: '100%',
                    backgroundColor: '#38bdf8',
                    borderRadius: '10px',
                  }}
                />
              </div>
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '13px',
                  marginBottom: '4px',
                }}
              >
                <span style={{ fontWeight: '500', color: '#334155' }}>
                  🥩 Açougue & Proteínas
                </span>
                <span style={{ color: '#0369a1', fontWeight: 'bold' }}>
                  R$ 189 / R$ 400
                </span>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '8px',
                  backgroundColor: '#e2e8f0',
                  borderRadius: '10px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: '47%',
                    height: '100%',
                    backgroundColor: '#38bdf8',
                    borderRadius: '10px',
                  }}
                />
              </div>
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '13px',
                  marginBottom: '4px',
                }}
              >
                <span style={{ fontWeight: '500', color: '#334155' }}>
                  🍉 Sacolão & Hortifruti
                </span>
                <span style={{ color: '#16a34a', fontWeight: 'bold' }}>
                  R$ 74 / R$ 300
                </span>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '8px',
                  backgroundColor: '#e2e8f0',
                  borderRadius: '10px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: '24%',
                    height: '100%',
                    backgroundColor: '#4ade80',
                    borderRadius: '10px',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsertPurchasePage;
