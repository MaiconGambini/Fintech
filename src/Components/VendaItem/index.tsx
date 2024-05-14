import React from "react";
import { IVenda } from "../../Context/DataContext";
import { NavLink, useParams } from "react-router-dom";

const VendaItem = ({ venda }: { venda: IVenda }) => {
  return (
    <div className="venda box">
      <NavLink to={`/vendas/${venda.id}`} style={{ fontFamily: "monospace" }}>
        {venda.id}
      </NavLink>
      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default VendaItem;
