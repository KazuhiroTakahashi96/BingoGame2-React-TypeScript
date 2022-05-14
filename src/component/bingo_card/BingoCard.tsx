import React from "react";
import ColumnNum from "../column_num/ColumnNum";

type Props = {
  col_row_Array: number[][];
  ballNumArray: number[];
};

const BingoCard = (props: Props) => {
  const centerIndex = (props.col_row_Array.length - 1) / 2;

  return (
    <div style={{ display: "flex" }}>
      {props.col_row_Array.map((col_NumArray, i) => (
        <ColumnNum
          key={i}
          col_NumArray={col_NumArray}
          centerIndex={i === centerIndex ? centerIndex : null}
          ballNumArray={props.ballNumArray}
        />
      ))}
    </div>
  );
};

export default BingoCard;
