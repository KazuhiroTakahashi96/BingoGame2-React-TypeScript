import React from "react";

type Props = {
  ballCount: number;
  bingoBallNum: number;
};

const style = {
  fontSize: "25px",
  fontWeight: "bold",
};

const BingoBall = (props: Props) => {
  return (
    <div>
      <div>
        <span style={style}>{props.ballCount}</span>
        個目のボール
      </div>
      <br />
      <div style={style}>{props.bingoBallNum}</div>
      <br />
    </div>
  );
};

export default BingoBall;
