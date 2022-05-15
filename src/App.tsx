import React, { useState } from "react";
import BingoBall from "./component/bingo_ball/BingoBall";
import BingoCard from "./component/bingo_card/BingoCard";
import Button from "./component/button/Button";
import ReachBingoNum from "./component/reach_bingo_num/ReachBingoNum";

// ビンゴカードの数字を格納する配列。二次元配列にする
const col_row_Array: number[][] = [];

// 出たビンゴボールの数字を格納していく配列の作成
const ballNumArray: number[] = [];

// 1〜最大195（13列の時）の値が入る配列
const bingoBallArray: number[] = [];

// =========== ビンゴカードの数字を作成する関数 ===========
function makeRandomNum(option: number) {
  for (let i = 0; i < option; i++) {
    // 1〜15を持った長さ15の配列の作成
    const array = [];
    for (let k = 1; k <= 15; k++) {
      array.push(k);
    }

    for (let j = 0; j < option; j++) {
      // ランダムな値を取得
      const randomNum = Math.floor(Math.random() * array.length);
      col_row_Array[i].push(array[randomNum] + i * 15);

      // 数字が重複しないよう、元の配列から削除
      array.splice(randomNum, 1);
    }
  }
}

function App() {
  // 何列のビンゴか、その値の更新state
  const [option, setOption] = useState<number>(5);
  // n個目のボール
  const [ballCount, setBallCount] = useState<number>(0);
  const [showHideBtn, setShowHideBtn] = useState<boolean>(true);

  // 引いたビンゴボールの更新
  const [bingoBallNum, setBingoBallNum] = useState<number>(0);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // 各要素の表示非表示
    setShowHideBtn(!showHideBtn);

    // 空の二次元配列の作成処理
    for (let i = 0; i < option; i++) {
      col_row_Array[i] = [];
    }

    for (let i = 1; i <= option * 15; i++) {
      bingoBallArray.push(i);
    }

    makeRandomNum(option);

    // 真ん中の数字を1000に置き換えておく。
    // freeに置換したり、リーチ数・ビンゴ数の計算処理がしやすいように
    const centerIndex = (option - 1) / 2;
    col_row_Array[centerIndex][centerIndex] = 1000;
  };

  const takeBingoBall = () => {
    // 0〜最大194の中で、ランダムな値を取得
    const randomNum = Math.floor(Math.random() * bingoBallArray.length);
    ballNumArray.unshift(bingoBallArray[randomNum]);
    // 数字が重複しないよう、元の配列から削除
    bingoBallArray.splice(randomNum, 1);

    // 引いたビンゴボールの更新
    setBingoBallNum(ballNumArray[0]);
  };

  return (
    <div className="App" style={{ textAlign: "center", fontSize: "20px" }}>
      <header style={{ margin: "30px", fontSize: "25px" }}>
        Bingo Game in React/TypeScript
      </header>

      {showHideBtn && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="bingo_option">ビンゴの列数を選択してください</label>
          <select
            style={{
              width: "110px",
              height: "28px",
              fontSize: "16px",
              margin: "0 5px",
            }}
            name="bingo_option"
            value={option}
            onChange={(e) => setOption(Number(e.target.value))}
          >
            <option defaultValue="5">5列×5列</option>
            <option value="7">7列×7列</option>
            <option value="9">9列×9列</option>
            <option value="11">11列×11列</option>
            <option value="13">13列×13列</option>
          </select>
        </form>
      )}

      {showHideBtn && <Button text={"カード作成"} onClick={handleSubmit} />}
      {showHideBtn || (
        <Button
          text={"ボールを引く"}
          onClick={() => {
            setBallCount(ballCount + 1);
            takeBingoBall();
          }}
        />
      )}

      {showHideBtn || (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
            margin: "30px",
          }}
        >
          <BingoCard
            col_row_Array={col_row_Array}
            ballNumArray={ballNumArray}
          />
          <div style={{ width: "30vw" }}>
            <BingoBall ballCount={ballCount} bingoBallNum={bingoBallNum} />
            <br />
            <ReachBingoNum
              col_row_Array={col_row_Array}
              ballNumArray={ballNumArray}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
