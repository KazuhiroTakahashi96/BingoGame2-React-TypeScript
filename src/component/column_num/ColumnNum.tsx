import React from "react";

type Props = {
  col_NumArray: number[];
  ballNumArray: number[];
};

const ColumnNum = (props: Props) => {
  function BG_Color(color: string): object {
    const style = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "5px",
      padding: "5px",
      width: "35px",
      height: "35px",
      color: "black",
      borderRadius: "20px 20px 0 0",
      backgroundColor: color,
    };
    return style;
  }

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
            num === 1000 || props.ballNumArray.includes(num)
              ? BG_Color("gold")
              : BG_Color("antiquewhite")
          }
        >
          {num === 1000 ? "free" : num}
        </p>
      ))}
    </div>
  );
};

export default ColumnNum;
