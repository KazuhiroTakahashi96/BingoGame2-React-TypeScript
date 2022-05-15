// ===== 横列のリーチ数、ビンゴ数をチェックする関数 =====
const row__ReachBingo_Num = (
  colNumArray: number[][],
  ballNumArray: number[],
  minus: number
): number => {
  // 二次元配列そのものと、引いたビンゴボールの値が入った配列を引数に持ってくる

  let totalRow_ReachBingo_Num: number = 0;

  for (let j = 0; j < colNumArray.length; j++) {
    let reachBingo_Num: number = 0;
    for (let i = 0; i < colNumArray.length; i++) {
      // 1行ごとにリーチ数、ビンゴ数を計算するfor文
      if (
        ballNumArray.includes(colNumArray[i][j]) ||
        colNumArray[i][j] === 1000
      ) {
        // true(穴が空いてる)なら
        reachBingo_Num += 1;
      }
    }
    if (reachBingo_Num === colNumArray.length - minus) {
      totalRow_ReachBingo_Num += 1;
    }
  }
  return totalRow_ReachBingo_Num;
};

export default row__ReachBingo_Num;
