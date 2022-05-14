import React from "react";

type Props = {
  col_NumArray: number[];
  centerIndex: number | null;
};

const numStyle = {
  margin: "5px",
  padding: "5px",
};

const ColumnNum = (props: Props) => {
  return (
    <div>
      {props.col_NumArray.map((num, i) => (
        <p key={i} style={numStyle}>
          {i === props.centerIndex ? "free" : num}
        </p>
      ))}
    </div>
  );
};

export default ColumnNum;
