import "./MemoForm.css";
import { useState } from "react";

const MemoForm = ({ addMemo }) => {
  const [memo, setMemo] = useState("");

  const handleInputText = (e) => {
    setMemo(e.target.value);
  };

  const addNewMemo = (e) => {
    e.preventDefault();
    addMemo(memo);
    console.log("a");
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
            onChange={handleInputText}
          />
        </div>
      </div>
      <div>
        <button id="submit" type="submit">
          Aggiungi
        </button>
      </div>
      <div className="titolo2">Aggiungi qualcosa e clicca sul bottone</div>
    </form>
  );
};

export default MemoForm;
