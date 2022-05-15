// ===== 斜め列のリーチ数、ビンゴ数をチェックする関数 =====
const cross__ReachBingo_Num = (array: number[][], minus: number): number => {
  // 二次元配列そのものを引数に持ってくる

  let totalCross_ReachBingo_Num = 0;

  // 斜め列1(左上から右下)のリーチ数、ビンゴ数
  let reachBingo_Num1 = 0;
  for (let i = 0; i < array.length; i++) {
    // true(穴が空いてる)なら
    //   if (array[i][i].className === "matchedNum") {
    //     reachBingo_Num1 += 1;
    //   }
  }
  if (reachBingo_Num1 === array.length - minus) {
    totalCross_ReachBingo_Num += 1;
  } else {
    totalCross_ReachBingo_Num += 0;
  }

  // 斜め列2(左下から右上)のリーチ数、ビンゴ数
  let reachBingo_Num2 = 0;
  for (let i = 0; i < array.length; i++) {
    // true(穴が空いてる)なら
    //   if (array[i][array.length - 1 - i].className === "matchedNum") {
    //     reachBingo_Num2 += 1;
    //   }
  }
  if (reachBingo_Num2 === array.length - minus) {
    totalCross_ReachBingo_Num += 1;
  } else {
    totalCross_ReachBingo_Num += 0;
  }

  return totalCross_ReachBingo_Num;
};

export default cross__ReachBingo_Num;
