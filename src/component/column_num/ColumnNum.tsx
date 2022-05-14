import React from "react";

type Props = {
  col_NumArray: number[];
  centerIndex: number | null;
  ballNumArray: number[];
};

// const commonStyle = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   margin: "5px",
//   padding: "5px",
//   width: "35px",
//   height: "35px",
//   color: "black",
// };

const numStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "5px",
  padding: "5px",
  width: "35px",
  height: "35px",
  color: "black",
  backgroundColor: "antiquewhite",
};
const matchedNumStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "5px",
  padding: "5px",
  width: "35px",
  height: "35px",
  color: "black",
  backgroundColor: "gold",
  borderRadius: "20px 20px 0 0",
};

const ColumnNum = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {props.col_NumArray.map((num, i) => (
        <p
          key={i}
          style={
            i === props.centerIndex || props.ballNumArray.includes(num)
              ? matchedNumStyle
              : numStyle
          }
        >
          {i === props.centerIndex ? "free" : num}
        </p>
      ))}
    </div>
  );
};

export default ColumnNum;
