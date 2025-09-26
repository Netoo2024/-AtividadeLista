import React from "react";

export default function ItemTable({
  itens,
  editandoId,
  novoQtd,
  setNovoQtd,
  novoUnitario,
  setNovoUnitario,
  iniciarEdicao,
  salvarEdicao,
  cancelarEdicao,
  removerItem,
  totalItem
}) {
  return (
    <table style={{ marginTop: 30, width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr style={{ backgroundColor: "#3498db", color: "white" }}>
          <th style={{ padding: 10 }}>Descrição</th>
          <th style={{ padding: 10 }}>Qtd</th>
          <th style={{ padding: 10 }}>Unitário</th>
          <th style={{ padding: 10 }}>Total</th>
          <th style={{ padding: 10 }}>Ações</th>
        </tr>
      </thead>
      <tbody>
        {itens.length === 0 && (
          <tr>
            <td
              colSpan={5}
              style={{ textAlign: "center", padding: 15, color: "#7f8c8d" }}
            >
              Nenhum item adicionado ainda 📋
            </td>
          </tr>
        )}

        {itens.map((it) => (
          <tr
            key={it.id}
            style={{ backgroundColor: "#ecf0f1", textAlign: "center" }}
          >
            <td style={{ padding: 10 }}>{it.descricao}</td>
            <td style={{ padding: 10 }}>
              {editandoId === it.id ? (
                <input
                  type="number"
                  value={novoQtd}
                  onChange={(e) => setNovoQtd(e.target.value)}
                  style={{ width: 60, padding: 5 }}
                />
              ) : (
                it.qtd
              )}
            </td>
            <td style={{ padding: 10 }}>
              {editandoId === it.id ? (
                <input
                  type="number"
                  value={novoUnitario}
                  onChange={(e) => setNovoUnitario(e.target.value)}
                  style={{ width: 80, padding: 5 }}
                />
              ) : (
                `R$ ${it.unitario}`
              )}
            </td>
            <td style={{ padding: 10, fontWeight: "bold" }}>
              R$ {totalItem(it)}
            </td>
            <td
              style={{
                padding: 10,
                display: "flex",
                gap: 5,
                justifyContent: "center"
              }}
            >
              {editandoId === it.id ? (
                <>
                  <button
                    onClick={() => salvarEdicao(it.id)}
                    style={{
                      backgroundColor: "#27ae60",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: 5,
                      cursor: "pointer"
                    }}
                  >
                    💾 Salvar
                  </button>
                  <button
                    onClick={cancelarEdicao}
                    style={{
                      backgroundColor: "#7f8c8d",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: 5,
                      cursor: "pointer"
                    }}
                  >
                    ❌ Cancelar
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => iniciarEdicao(it)}
                    style={{
                      backgroundColor: "#f39c12",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: 5,
                      cursor: "pointer"
                    }}
                  >
                    ✏️ Editar
                  </button>
                  <button
                    onClick={() => removerItem(it.id)}
                    style={{
                      backgroundColor: "#e74c3c",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: 5,
                      cursor: "pointer"
                    }}
                  >
                    ❌ Remover
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
