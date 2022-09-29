const MemoBlock = ({ memoblock, handleDelete }) => {
  return (
    <div className="testoPromemoria">
      <p>{memoblock}</p>
      <span>
        <button onClick={() => handleDelete(memoblock.id)}>❌</button>
      </span>
    </div>
  );
};

export default MemoBlock;
