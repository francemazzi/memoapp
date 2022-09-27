import "./App.css";
import BtnAdd from "./Btn.js";
import InputMemo from "./Input.js";

function App() {
  return (
    <div class="container">
      <div class="containerLista">
        <div class="titolo">Lista della spesa</div>
        <InputMemo></InputMemo>
        <div>
          <BtnAdd>Aggiungi</BtnAdd>
        </div>
        <div class="titolo2">Aggiungi qualcosa e clicca sul bottone</div>

        <div class="promemoria"></div>
      </div>
    </div>
  );
}

export default App;
