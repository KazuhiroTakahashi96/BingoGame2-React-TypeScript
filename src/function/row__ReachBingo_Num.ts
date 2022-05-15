// ===== 横列のリーチ数、ビンゴ数をチェックする関数 =====
const row__ReachBingo_Num = (array: number[][], minus: number): number => {
  // 二次元配列そのものを引数に持ってくる
  let totalRow_ReachBingo_Num: number = 0;

  for (let j = 0; j < array.length; j++) {
    let reachBingo_Num: number = 0;
    for (let i = 0; i < array.length; i++) {
      // 1行ごとにリーチ数、ビンゴ数を計算するfor文
      //   if (array[i][j].className === "matchedNum") {
      //     // true(穴が空いてる)なら
      //     reachBingo_Num += 1;
      //   }
      reachBingo_Num += 1;
    }
    // reachBingo_Num === array.length - minus
    //   ? (totalRow_ReachBingo_Num += 1)
    //   : 0;
  }
  return totalRow_ReachBingo_Num;
};

export default row__ReachBingo_Num;
