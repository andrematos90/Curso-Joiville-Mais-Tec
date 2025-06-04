import React from "react";
import "./PriceTag.css";

type PriceTagProps = {
  value: number;
};

const PriceTag: React.FC<PriceTagProps> = ({ value }) => {
  const formatted = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return <span className="price-tag">{formatted}</span>;
};

export default PriceTag;