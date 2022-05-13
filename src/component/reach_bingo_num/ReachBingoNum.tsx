import React, { useState } from "react";

const ReachBingoNum = () => {
  const [reachNum, setReachNum] = useState<number>(0);
  const [bingoNum, setBingoNum] = useState<number>(0);
  return (
    <div>
      <div>リーチ数</div>
      <div style={style}>{reachNum}</div>
      <br />
      <br />
      <div>ビンゴ数</div>
      <div style={style}>{bingoNum}</div>
    </div>
  );
};

export default ReachBingoNum;

const style = {
  fontSize: "25px",
  fontWeight: "bold",
};
