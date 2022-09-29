const MemoBlock = ({ memoblock, handleClickLocal }) => {
  return (
    <div className="testoPromemoria">
      <p>{memoblock.memo}</p>
      <span>
        <button
          id={memoblock.id}
          key={memoblock.id}
          memoblock={memoblock}
          value={memoblock.id}
          onClick={handleClickLocal}
          className={memoblock.complete ? "memoblock completed" : "memoblock"}
        >
          ❌
        </button>
      </span>
    </div>
  );
};

export default MemoBlock;
