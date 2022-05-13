import React, { useState } from "react";

type Props = {
  ballCount: number;
};

const BingoBall = (props: Props) => {
  const [ballNum, setBallNum] = useState<number>(0);
  return (
    <div>
      <div>
        <span style={style}>{props.ballCount}</span>
        個目のボール
      </div>
      <br />
      <div style={style}>{ballNum}</div>
      <br />
    </div>
  );
};

export default BingoBall;

const style = {
  fontSize: "25px",
  fontWeight: "bold",
};
