import "./App.css";
import MemoForm from "./MemoForm.js";
import { useState } from "react";
import MemoBlockList from "./MemoBlockList.js";

function App() {
  const [memoblocks, setMemoblocks] = useState([]);
  const addMemo = (memo) => {
    let newMemoBlock = [...memoblocks];
    newMemoBlock.push(memo);
    setMemoblocks(newMemoBlock);
  };
  return (
    <div className="container">
      <div className="containerLista">
        <div className="titolo">Lista della spesa</div>
        <MemoForm addMemo={addMemo}></MemoForm>
        <MemoBlockList memoblocks={memoblocks}></MemoBlockList>
      </div>
    </div>
  );
}

export default App;
