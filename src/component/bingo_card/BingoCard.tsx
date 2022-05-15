import React from "react";
import ColumnNum from "../column_num/ColumnNum";

type Props = {
  col_row_Array: number[][];
  ballNumArray: number[];
};

const BingoCard = (props: Props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "70vw" }}>
      {props.col_row_Array.map((col_NumArray, i) => (
        <ColumnNum
          key={i}
          col_NumArray={col_NumArray}
          ballNumArray={props.ballNumArray}
        />
      ))}
    </div>
  );
};

export default BingoCard;
