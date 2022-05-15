// ===== 斜め列のリーチ数、ビンゴ数をチェックする関数 =====
const cross__ReachBingo_Num = (
  colNumArray: number[][],
  ballNumArray: number[],
  minus: number
): number => {
  // 二次元配列そのものと、引いたビンゴボールの値が入った配列を引数に持ってくる

  let totalCross_ReachBingo_Num = 0;

  // 斜め列1(左上から右下)のリーチ数、ビンゴ数
  let reachBingo_Num1 = 0;
  for (let i = 0; i < colNumArray.length; i++) {
    // true(穴が空いてる)なら
    if (
      ballNumArray.includes(colNumArray[i][i]) ||
      colNumArray[i][i] === 1000
    ) {
      reachBingo_Num1 += 1;
    }
  }
  if (reachBingo_Num1 === colNumArray.length - minus) {
    totalCross_ReachBingo_Num += 1;
  }

  // 斜め列2(左下から右上)のリーチ数、ビンゴ数
  let reachBingo_Num2 = 0;
  for (let i = 0; i < colNumArray.length; i++) {
    // true(穴が空いてる)なら
    if (
      ballNumArray.includes(colNumArray[i][colNumArray.length - 1 - i]) ||
      colNumArray[i][i] === 1000
    ) {
      reachBingo_Num2 += 1;
    }
  }
  if (reachBingo_Num2 === colNumArray.length - minus) {
    totalCross_ReachBingo_Num += 1;
  }

  return totalCross_ReachBingo_Num;
};

export default cross__ReachBingo_Num;
