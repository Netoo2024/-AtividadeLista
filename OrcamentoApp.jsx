import React, { useState } from "react";
import ItemForm from "./ItemForm";
import ItemTable from "./ItemTable";

export default function OrcamentoApp() {
  const [descricao, setDescricao] = useState("");
  const [qtd, setQtd] = useState(1);
  const [unitario, setUnitario] = useState(0);
  const [itens, setItens] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [novoQtd, setNovoQtd] = useState(1);
  const [novoUnitario, setNovoUnitario] = useState(0);

  function adicionarItem() {
    if (!descricao) return;
    const novo = {
      id: Date.now(),
      descricao,
      qtd: Number(qtd),
      unitario: Number(unitario)
    };
    setItens([...itens, novo]);
    setDescricao("");
    setQtd(1);
    setUnitario(0);
  }

  function removerItem(id) {
    setItens(itens.filter((it) => it.id !== id));
  }

  function iniciarEdicao(item) {
    setEditandoId(item.id);
    setNovoQtd(item.qtd);
    setNovoUnitario(item.unitario);
  }

  function salvarEdicao(id) {
    setItens(
      itens.map((it) =>
        it.id === id ? { ...it, qtd: Number(novoQtd), unitario: Number(novoUnitario) } : it
      )
    );
    setEditandoId(null);
  }

  function cancelarEdicao() {
    setEditandoId(null);
  }

  function totalItem(item) {
    return item.qtd * item.unitario;
  }

  const totalGeral = itens.reduce((soma, it) => soma + totalItem(it), 0);

  return (
    <div
      style={{
        padding: 20,
        fontFamily: "Arial",
        backgroundColor: "#f0f8ff",
        minHeight: "100vh"
      }}
    >
      <h1 style={{ textAlign: "center", color: "#2c3e50" }}> Orçamento</h1>

      <ItemForm
        descricao={descricao}
        setDescricao={setDescricao}
        qtd={qtd}
        setQtd={setQtd}
        unitario={unitario}
        setUnitario={setUnitario}
        adicionarItem={adicionarItem}
      />

      <ItemTable
        itens={itens}
        editandoId={editandoId}
        novoQtd={novoQtd}
        setNovoQtd={setNovoQtd}
        novoUnitario={novoUnitario}
        setNovoUnitario={setNovoUnitario}
        iniciarEdicao={iniciarEdicao}
        salvarEdicao={salvarEdicao}
        cancelarEdicao={cancelarEdicao}
        removerItem={removerItem}
        totalItem={totalItem}
      />

      <h3 style={{ marginTop: 30, textAlign: "right", color: "#2c3e50" }}>
        Total Geral: <span style={{ color: "#27ae60" }}>R$ {totalGeral}</span>
      </h3>
    </div>
  );
}
