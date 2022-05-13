import React, { useState } from "react";
import BingoBall from "./component/bingo_ball/BingoBall";
import BingoCard from "./component/bingo_card/BingoCard";
import Button from "./component/button/Button";
import ReachBingoNum from "./component/reach_bingo_num/ReachBingoNum";

function App() {
  const [option, setOption] = useState<number>(5);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(option);
  };
  return (
    <div className="App" style={{ textAlign: "center", fontSize: "20px" }}>
      <header style={{ margin: "30px", fontSize: "25px" }}>
        Bingo Game in React/TypeScript
      </header>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="bingo_option">ビンゴの列数を選択してください</label>
        <select
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
      <Button text={"ボールを引く"} onClick={() => console.log("bbb")} />

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
          <BingoBall />
          <ReachBingoNum />
        </div>
      </div>
    </div>
  );
}

export default App;
