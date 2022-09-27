import "./btn.css";

const BtnAdd = (props) => {
  return (
    <button id="submit" className="props.type">
      {props.children}
    </button>
  );
};

export default BtnAdd;
