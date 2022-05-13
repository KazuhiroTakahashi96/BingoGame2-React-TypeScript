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

  return col_row_Array;
}

function App() {
  // 何列のビンゴか、その値の更新state
  const [option, setOption] = useState<number>(5);
  const [ballCount, setBallCount] = useState<number>(0);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(option);
    // 空の二次元配列の作成処理
    for (let i = 0; i < option; i++) {
      col_row_Array[i] = [];
    }

    const result = makeRandomNum(option);
    console.log(result);
  };
  return (
    <div className="App" style={{ textAlign: "center", fontSize: "20px" }}>
      <header style={{ margin: "30px", fontSize: "25px" }}>
        Bingo Game in React/TypeScript
      </header>

      <form action="" onSubmit={handleSubmit}>
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
      <Button text={"カード作成"} onClick={handleSubmit} />
      <Button
        text={"ボールを引く"}
        onClick={() => setBallCount(ballCount + 1)}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          textAlign: "center",
          margin: "30px",
        }}
      >
        <BingoCard />
        <div>
          <BingoBall ballCount={ballCount} />
          <ReachBingoNum />
        </div>
      </div>
    </div>
  );
}

export default App;
