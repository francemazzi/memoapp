import "./memoBlock.css";
import { useState } from "react";
import MemoBlock from "./MemoBlock.js";

const MemoBlockList = ({ memoblocks, handleClick }) => {
  return (
    <div>
      {memoblocks.map((memoblock, index) => (
        <MemoBlock
          memoblock={memoblock}
          key={memoblock.id}
          id={memoblock.id}
          value={memoblock.id}
          handleClick={handleClick}
          className={memoblock.complete ? "memoblock completed" : "memoblock"}
        >
          {memoblock.memo}
        </MemoBlock>
      ))}
    </div>
  );
};

export default MemoBlockList;
