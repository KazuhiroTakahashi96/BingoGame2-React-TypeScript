import React, { useEffect, useState } from "react";
import col__ReachBingo_Num from "../../function/col__ReachBingo_Num";
import cross__ReachBingo_Num from "../../function/cross__ReachBingo_Num";
import row__ReachBingo_Num from "../../function/row__ReachBingo_Num";

type Props = {
  col_row_Array: number[][];
  ballNumArray: number[];
};

const ReachBingoNum = (props: Props) => {
  const [reachNum, setReachNum] = useState<number>(0);
  const [bingoNum, setBingoNum] = useState<number>(0);
  // ==== トータルリーチ数 =====
  let totalReachNumber = 0;
  // ==== トータルビンゴ数 ====
  let totalBingoNumber = 0;

  useEffect(() => {
    const centerIndex = (props.col_row_Array.length - 1) / 2;
    console.log(centerIndex);
  }, [props.col_row_Array.length]);

  for (let i = 0; i < props.col_row_Array.length; i++) {
    // 縦列のチェック（リーチ数）
    totalReachNumber += col__ReachBingo_Num(
      props.col_row_Array[i],
      props.ballNumArray,
      1
    );
    // 縦列のチェック（ビンゴ数）
    totalBingoNumber += col__ReachBingo_Num(
      props.col_row_Array[i],
      props.ballNumArray,
      0
    );
  }

  // 横列のチェック（リーチ数）
  totalReachNumber += row__ReachBingo_Num(props.col_row_Array, 1);
  // 横列のチェック（ビンゴ数）
  totalBingoNumber += row__ReachBingo_Num(props.col_row_Array, 0);

  // 斜め列のチェック（リーチ数）
  totalReachNumber += cross__ReachBingo_Num(props.col_row_Array, 1);
  // 斜め列のチェック（ビンゴ数）
  totalBingoNumber += cross__ReachBingo_Num(props.col_row_Array, 0);

  // 画面にリーチ数、ビンゴ数の出力
  useEffect(() => {
    setReachNum(totalReachNumber);
    setBingoNum(totalBingoNumber);
  }, [totalReachNumber, totalBingoNumber]);

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
