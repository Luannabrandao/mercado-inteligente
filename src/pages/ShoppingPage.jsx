import { useState } from 'react';

function ShoppingPage() {
  const [viewMode, setViewMode] = useState('lista');

  const [shoppingItems, setShoppingItems] = useState([
    {
      id: 1,
      name: 'Arroz Integral (Saco 5kg)',
      category: '📦 Itens Pesados',
      type: 'Fixo',
      qty: 1,
      checked: false,
    },
    {
      id: 2,
      name: 'Fardo de Água Mineral',
      category: '📦 Itens Pesados',
      type: 'Sazonal',
      qty: 2,
      checked: false,
    },
    {
      id: 3,
      name: 'Sabão em Pó 2kg',
      category: '🧹 Limpeza',
      type: 'Fixo',
      qty: 1,
      checked: false,
    },
    {
      id: 4,
      name: 'Desinfetante Lavanda',
      category: '🧹 Limpeza',
      type: 'Fixo',
      qty: 2,
      checked: false,
    },
    {
      id: 5,
      name: 'Acém Moído',
      category: '🥩 Açougue',
      type: 'Fixo',
      qty: 2,
      checked: false,
    },
    {
      id: 6,
      name: 'Peito de Frango',
      category: '🥩 Açougue',
      type: 'Sazonal',
      qty: 1,
      checked: false,
    },
    {
      id: 7,
      name: 'Tomate Italiano',
      category: '🍉 Sacolão',
      type: 'Sazonal',
      qty: 5,
      checked: false,
    },
    {
      id: 8,
      name: 'Banana Prata',
      category: '🍉 Sacolão',
      type: 'Sazonal',
      qty: 6,
      checked: false,
    },
  ]);

  const [pantrySuggestions, setPantrySuggestions] = useState([
    {
      id: 'p1',
      name: 'Feijão Carioca 1kg',
      category: '📦 Itens Pesados',
      type: 'Fixo',
      status: 'ok',
    },
    {
      id: 'p2',
      name: 'Óleo de Soja',
      category: '📦 Itens Pesados',
      type: 'Fixo',
      status: 'ok',
    },
    {
      id: 'p3',
      name: 'Detergente Líquido',
      category: '🧹 Limpeza',
      type: 'Fixo',
      status: 'ok',
    },
    {
      id: 'p4',
      name: 'Amaciante de Roupa',
      category: '🧹 Limpeza',
      type: 'Fixo',
      status: 'ok',
    },
    {
      id: 'p5',
      name: 'Bife de Patinho',
      category: '🥩 Açougue',
      type: 'Fixo',
      status: 'ok',
    },
    {
      id: 'p6',
      name: 'Cebola',
      category: '🍉 Sacolão',
      type: 'Sazonal',
      status: 'ok',
    },
    {
      id: 'p7',
      name: 'Batata Monalisa',
      category: '🍉 Sacolão',
      type: 'Sazonal',
      status: 'ok',
    },
  ]);

  const [newItemName, setNewItemName] = useState('');
  const [newItemType, setNewItemType] = useState('Fixo');
  const [newItemCategory, setNewItemCategory] = useState('🧹 Limpeza');

  const handleToggleCheck = (id) => {
    setShoppingItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItemName) return;

    setShoppingItems((prevItems) => [
      ...prevItems,
      {
        id: Date.now(),
        name: newItemName,
        category: newItemCategory,
        type: newItemType,
        qty: 1,
        checked: false,
      },
    ]);
    setNewItemName('');
  };

  const handleAuditStatus = (id, newStatus) => {
    setPantrySuggestions((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item,
      ),
    );

    const targetItem = pantrySuggestions.find((item) => item.id === id);
    if (!targetItem) return;

    if (newStatus === 'falta' || newStatus === 'pouco') {
      const alreadyExists = shoppingItems.some(
        (item) =>
          item.name.toLowerCase() === targetItem.name.toLowerCase() &&
          !item.checked,
      );

      if (!alreadyExists) {
        setShoppingItems((prev) => [
          ...prev,
          {
            id: Date.now() + Math.random(),
            name: targetItem.name,
            category: targetItem.category,
            type: targetItem.type,
            qty: 1,
            checked: false,
          },
        ]);
      }
    }
  };

  const pendingItems = shoppingItems.filter((item) => !item.checked);

  const renderSector = (typeFilter, categoryName, color) => {
    const filtered = pendingItems.filter(
      (item) => item.type === typeFilter && item.category === categoryName,
    );
    if (filtered.length === 0) return null;

    return (
      <div key={categoryName} style={{ marginBottom: '16px' }}>
        <h4
          style={{
            margin: '0 0 8px 0',
            fontSize: '14px',
            color: color,
            fontWeight: '700',
          }}
        >
          {categoryName}
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => handleToggleCheck(item.id)}
              style={itemRowStyle}
            >
              <span
                style={{
                  fontSize: '14px',
                  color: '#334155',
                  fontWeight: '500',
                }}
              >
                {item.name}
              </span>
              <strong style={{ color: '#ea580c', fontSize: '14px' }}>
                x{item.qty}
              </strong>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const totalFixed = pendingItems.filter((item) => item.type === 'Fixo').length;
  const totalSeasonal = pendingItems.filter(
    (item) => item.type === 'Sazonal',
  ).length;

  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '32px',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div>
          <h2
            style={{
              color: '#14532d',
              margin: '0',
              fontSize: '28px',
              fontWeight: '800',
            }}
          >
            🛒 Minha Lista Inteligente
          </h2>
          <p style={{ color: '#666', margin: '6px 0 0 0', fontSize: '14px' }}>
            Alterne entre ver sua lista pronta ou conferir o que tem no armário
            antes de ir.
          </p>
        </div>

        <div
          style={{
            backgroundColor: '#f1f5f9',
            padding: '6px',
            borderRadius: '16px',
            display: 'flex',
            gap: '4px',
          }}
        >
          <button
            onClick={() => setViewMode('lista')}
            style={{
              padding: '10px 20px',
              borderRadius: '12px',
              border: 'none',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer',
              backgroundColor: viewMode === 'lista' ? '#ffffff' : 'transparent',
              color: viewMode === 'lista' ? '#ea580c' : '#64748b',
              boxShadow:
                viewMode === 'lista' ? '0 2px 8px rgba(0,0,0,0.05)' : 'none',
              transition: 'all 0.2s',
            }}
          >
            📝 Ver Lista ({pendingItems.length})
          </button>
          <button
            onClick={() => setViewMode('auditoria')}
            style={{
              padding: '10px 20px',
              borderRadius: '12px',
              border: 'none',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer',
              backgroundColor:
                viewMode === 'auditoria' ? '#ffffff' : 'transparent',
              color: viewMode === 'auditoria' ? '#ea580c' : '#64748b',
              boxShadow:
                viewMode === 'auditoria'
                  ? '0 2px 8px rgba(0,0,0,0.05)'
                  : 'none',
              transition: 'all 0.2s',
            }}
          >
            🔍 Abrir Armário (Auditoria)
          </button>
        </div>
      </div>

      {viewMode === 'lista' ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '32px',
            alignItems: 'start',
          }}
        >
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                padding: '28px',
                borderRadius: '24px',
                border: '2px solid #cbd5e1',
              }}
            >
              <h3
                style={{
                  margin: '0 0 20px 0',
                  color: '#1e3a8a',
                  fontSize: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderBottom: '2px solid #f1f5f9',
                  paddingBottom: '12px',
                }}
              >
                📌 Itens Fixos (Essenciais do Mês)
                <span
                  style={{
                    fontSize: '13px',
                    backgroundColor: '#dbeafe',
                    color: '#1e40af',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    fontWeight: 'bold',
                  }}
                >
                  {totalFixed}
                </span>
              </h3>
              {totalFixed === 0 ? (
                <p
                  style={{
                    color: '#94a3b8',
                    fontSize: '14px',
                    fontStyle: 'italic',
                    margin: '0',
                  }}
                >
                  Nenhum item fixo pendente! 🎉
                </p>
              ) : (
                <div>
                  {renderSector('Fixo', '📦 Itens Pesados', '#475569')}
                  {renderSector('Fixo', '🧹 Limpeza', '#0284c7')}
                  {renderSector('Fixo', '🥩 Açougue', '#b91c1c')}
                  {renderSector('Fixo', '🍉 Sacolão', '#16a34a')}
                </div>
              )}
            </div>

            <div
              style={{
                backgroundColor: '#ffffff',
                padding: '28px',
                borderRadius: '24px',
                border: '2px solid #fed7aa',
              }}
            >
              <h3
                style={{
                  margin: '0 0 20px 0',
                  color: '#b45309',
                  fontSize: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderBottom: '2px solid #fff7ed',
                  paddingBottom: '12px',
                }}
              >
                🍂 Itens Sazonais & Ofertas
                <span
                  style={{
                    fontSize: '13px',
                    backgroundColor: '#fef3c7',
                    color: '#92400e',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    fontWeight: 'bold',
                  }}
                >
                  {totalSeasonal}
                </span>
              </h3>
              {totalSeasonal === 0 ? (
                <p
                  style={{
                    color: '#94a3b8',
                    fontSize: '14px',
                    fontStyle: 'italic',
                    margin: '0',
                  }}
                >
                  Nenhum item sazonal pendente! 🍉
                </p>
              ) : (
                <div>
                  {renderSector('Sazonal', '📦 Itens Pesados', '#475569')}
                  {renderSector('Sazonal', '🧹 Limpeza', '#0284c7')}
                  {renderSector('Sazonal', '🥩 Açougue', '#b91c1c')}
                  {renderSector('Sazonal', '🍉 Sacolão', '#16a34a')}
                </div>
              )}
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#ffedd5',
              padding: '24px',
              borderRadius: '24px',
              border: '1px solid #fed7aa',
            }}
          >
            <h3
              style={{
                margin: '0 0 16px 0',
                fontSize: '16px',
                color: '#7c2d12',
                fontWeight: '700',
              }}
            >
              ⚡ Adicionar à Lista
            </h3>
            <form
              onSubmit={handleAddItem}
              style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
              <label
                htmlFor="itemName"
                style={{
                  fontSize: '13px',
                  color: '#7c2d12',
                  fontWeight: '500',
                }}
              >
                Nome do Item
              </label>
              <input
                id="itemName"
                type="text"
                placeholder="Ex: Arroz, Sabão..."
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                style={{
                  padding: '12px',
                  borderRadius: '12px',
                  border: '1px solid #cbd5e1',
                  fontSize: '14px',
                  outline: 'none',
                }}
              />

              <label
                htmlFor="itemType"
                style={{
                  fontSize: '13px',
                  color: '#7c2d12',
                  fontWeight: '500',
                }}
              >
                Planejamento
              </label>
              <select
                id="itemType"
                value={newItemType}
                onChange={(e) => setNewItemType(e.target.value)}
                style={{
                  padding: '12px',
                  borderRadius: '12px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: '#fff',
                  fontSize: '14px',
                }}
              >
                <option value="Fixo">📌 Item Fixo (Mensal)</option>
                <option value="Sazonal">🍉 Item Sazonal (Oferta)</option>
              </select>

              <label
                htmlFor="itemCategory"
                style={{
                  fontSize: '13px',
                  color: '#7c2d12',
                  fontWeight: '500',
                }}
              >
                Setor do Mercado
              </label>
              <select
                id="itemCategory"
                value={newItemCategory}
                onChange={(e) => setNewItemCategory(e.target.value)}
                style={{
                  padding: '12px',
                  borderRadius: '12px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: '#fff',
                  fontSize: '14px',
                }}
              >
                <option value="📦 Itens Pesados">
                  📦 Itens Pesados / Volume
                </option>
                <option value="🧹 Limpeza">
                  🧹 Itens de Limpeza & Higiene
                </option>
                <option value="🥩 Açougue">🥩 Açougue & Proteínas</option>
                <option value="🍉 Sacolão">🍉 Sacolão & Hortifruti</option>
              </select>

              <button
                type="submit"
                style={{
                  backgroundColor: '#ea580c',
                  color: '#fff',
                  border: 'none',
                  padding: '14px',
                  borderRadius: '12px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  marginTop: '8px',
                  fontSize: '14px',
                }}
              >
                Adicionar na Lista
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: '32px',
            borderRadius: '24px',
            border: '2px solid #e2e8f0',
          }}
        >
          <div
            style={{
              marginBottom: '24px',
              borderBottom: '2px solid #f1f5f9',
              paddingBottom: '16px',
            }}
          >
            <h3
              style={{
                margin: '0 0 6px 0',
                color: '#334155',
                fontSize: '18px',
              }}
            >
              🕵️‍♀️ O que tem na Despensa hoje?
            </h3>
            <p style={{ color: '#64748b', margin: '0', fontSize: '14px' }}>
              Marque os itens que estão acabando. O sistema vai colocá-los na
              lista de compras automaticamente!
            </p>
          </div>

          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            {pantrySuggestions.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  borderRadius: '16px',

                  backgroundColor:
                    item.status === 'falta'
                      ? '#fee2e2'
                      : item.status === 'pouco'
                        ? '#fef3c7'
                        : item.status === 'ok'
                          ? '#f0fdf4'
                          : '#f8fafc',
                  border: `1px solid ${item.status === 'falta' ? '#fca5a5' : item.status === 'pouco' ? '#fde68a' : item.status === 'ok' ? '#bbf7d0' : '#e2e8f0'}`,
                  transition: 'all 0.2s',
                }}
              >
                <div>
                  <strong
                    style={{
                      color: '#334155',
                      fontSize: '15px',
                      display: 'block',
                    }}
                  >
                    {item.name}
                  </strong>
                  <span style={{ fontSize: '12px', color: '#94a3b8' }}>
                    {item.category} • Sugestão: {item.type}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => handleAuditStatus(item.id, 'ok')}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '10px',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      backgroundColor:
                        item.status === 'ok' ? '#22c55e' : '#e2e8f0',
                      color: item.status === 'ok' ? '#fff' : '#64748b',
                      transition: 'all 0.1s',
                    }}
                  >
                    🟢 Tem bastante
                  </button>
                  <button
                    onClick={() => handleAuditStatus(item.id, 'pouco')}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '10px',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      backgroundColor:
                        item.status === 'pouco' ? '#eab308' : '#e2e8f0',
                      color: item.status === 'pouco' ? '#fff' : '#64748b',
                      transition: 'all 0.1s',
                    }}
                  >
                    🟡 Tá Pouco
                  </button>
                  <button
                    onClick={() => handleAuditStatus(item.id, 'falta')}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '10px',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      backgroundColor:
                        item.status === 'falta' ? '#ef4444' : '#e2e8f0',
                      color: item.status === 'falta' ? '#fff' : '#64748b',
                      transition: 'all 0.1s',
                    }}
                  >
                    🔴 Falta / Acabou
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const itemRowStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 18px',
  borderRadius: '12px',
  cursor: 'pointer',
  backgroundColor: '#f8fafc',
  border: '1px solid #e2e8f0',
  marginBottom: '6px',
};

export default ShoppingPage;
