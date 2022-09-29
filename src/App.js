import "./App.css";
import MemoForm from "./MemoForm.js";
import { useState } from "react";
import MemoBlockList from "./MemoBlockList.js";

function App() {
  const [memoblocks, setMemoblocks] = useState([]);

  const handleClick = (id) => {
    let newMemoBlock = memoblocks.map((block) => {
      return block.id === parseInt(id)
        ? { ...block, complete: !block.complete }
        : { ...block };
    });

    setMemoblocks(newMemoBlock);
  };

  const handleClickLocal = (e) => {
    handleClick(e.currentTarget.id);
  };

  const addMemo = (memo) => {
    console.log("Memo " + memo);
    let newMemoBlock = [
      ...memoblocks,
      { id: memoblocks.length + 1, memo: memo, complete: false },
    ];
    console.log(newMemoBlock);
    // console.log(handleClick(memo))
    setMemoblocks(newMemoBlock);
  };

  return (
    <div className="container">
      <div className="containerLista">
        <div className="titolo">Lista della spesa</div>
        <div>Contiene: {memoblocks.length} oggetti</div>
        <MemoForm addMemo={addMemo}></MemoForm>
        <MemoBlockList
          memoblocks={memoblocks}
          handleClick={handleClick}
          handleClickLocal={handleClickLocal}
        ></MemoBlockList>
      </div>
    </div>
  );
}

export default App;
