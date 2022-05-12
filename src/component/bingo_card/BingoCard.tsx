import React from "react";
import ColumnNum from "../column_num/ColumnNum";

const BingoCard = () => {
  return (
    <div style={{ display: "flex" }}>
      <ColumnNum />
      <ColumnNum />
      <ColumnNum />
      <ColumnNum />
      <ColumnNum />
    </div>
  );
};

export default BingoCard;
