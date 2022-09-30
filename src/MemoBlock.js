const MemoBlock = ({ memoblock, handleClickLocal }) => {
  return (
    <div
      className={
        memoblock.complete
          ? "testoPromemoria memoblock completed"
          : "testoPromemoria memoblock"
      }
    >
      <p>{memoblock.memo}</p>
      <span>
        <button
          id={memoblock.id}
          key={memoblock.id}
          memoblock={memoblock}
          value={memoblock.id}
          onClick={(e) => handleClickLocal(memoblock.id, e)}
        >
          ❌
        </button>
      </span>
    </div>
  );
};

export default MemoBlock;
