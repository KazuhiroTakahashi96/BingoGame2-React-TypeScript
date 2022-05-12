import React from "react";
import BingoBall from "./component/bingo_ball/BingoBall";
import BingoCard from "./component/bingo_card/BingoCard";
import Button from "./component/button/Button";
import ReachBingoNum from "./component/reach_bingo_num/ReachBingoNum";

function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <header style={{ margin: "30px", fontSize: "25px" }}>
        Bingo Game in React/TypeScript
      </header>
      <label htmlFor="bingo_option">ビンゴの列数を選択してください</label>
      <select name="bingo_option" id="">
        <option value="5">5列×5列</option>
        <option value="7">7列×7列</option>
        <option value="9">9列×9列</option>
        <option value="11">11列×11列</option>
        <option value="13">13列×13列</option>
      </select>
      <Button text={"カード作成"} />
      <Button text={"ボールを引く"} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          margin: "30px",
        }}
      >
        <BingoCard />
        <div>
          <BingoBall />
          <ReachBingoNum />
        </div>
      </div>
    </div>
  );
}

export default App;
