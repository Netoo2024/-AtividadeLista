import React from "react";

export default function ItemForm({ descricao, setDescricao, qtd, setQtd, unitario, setUnitario, adicionarItem }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        marginTop: 20,
        justifyContent: "center"
      }}
    >
      <input
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        style={{ padding: 8, borderRadius: 5, border: "1px solid #ccc" }}
      />
      <input
        type="number"
        value={qtd}
        onChange={(e) => setQtd(e.target.value)}
        style={{
          width: 60,
          padding: 8,
          borderRadius: 5,
          border: "1px solid #ccc"
        }}
      />
      <input
        type="number"
        value={unitario}
        onChange={(e) => setUnitario(e.target.value)}
        style={{
          width: 100,
          padding: 8,
          borderRadius: 5,
          border: "1px solid #ccc"
        }}
      />
      <button
        onClick={adicionarItem}
        style={{
          backgroundColor: "#27ae60",
          color: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: 5,
          cursor: "pointer"
        }}
      >
        ➕ Adicionar
      </button>
    </div>
  );
}
