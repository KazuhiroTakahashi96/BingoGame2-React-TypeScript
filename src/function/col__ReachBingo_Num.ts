// ===== 縦列のリーチ数、ビンゴ数をチェックする関数 =====
const col__ReachBingo_Num = (
  colNumArray: number[],
  ballNumArray: number[],
  minus: number
): number => {
  // 二次元配列の各配列と、引いたビンゴボールの値が入った配列を引数に持ってくる

  let col__reachBingo_Num = 0;

  for (let i = 0; i < colNumArray.length; i++) {
    // true(穴が空いてる)なら
    if (ballNumArray.includes(colNumArray[i])) {
      col__reachBingo_Num += 1;
    }
  }
  return col__reachBingo_Num === colNumArray.length - minus ? 1 : 0;
};

export default col__ReachBingo_Num;
