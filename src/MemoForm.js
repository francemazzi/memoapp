import "./MemoForm.css";
import { useState } from "react";

const MemoForm = ({ addMemo }) => {
  const [memo, setMemo] = useState("");

  const handleInputText = (e) => {
    setMemo(e.currentTarget.value);
  };

  const addNewMemo = (e) => {
    e.preventDefault();
    addMemo(memo);
    setMemo("");
  };

  return (
    <form onSubmit={addNewMemo}>
      <div className="inputTesto">
        <span id="idtest">📝</span>
        <div>
          <input
            type="text"
            placeholder="Inserisci il promemoria qui.. "
            className="search"
            id="memo"
            value={memo}
            onChange={handleInputText}
          />
        </div>
      </div>
      <div className="btnContainerMemoForm">
        <button id="submit" type="submit">
          Aggiungi
        </button>
      </div>
      <div className="titolo2">Aggiungi qualcosa e clicca sul bottone</div>
    </form>
  );
};

export default MemoForm;
