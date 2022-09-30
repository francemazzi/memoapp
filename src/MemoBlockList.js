import "./memoBlock.css";
import { useState } from "react";
import MemoBlock from "./MemoBlock.js";

const MemoBlockList = ({ memoblocks, handleClickLocal }) => {
  return (
    <div>
      {memoblocks.map((memoblock, index) => (
        <MemoBlock
          memoblock={memoblock}
          key={memoblock.id}
          id={memoblock.id}
          value={memoblock.id}
          handleClickLocal={handleClickLocal}
          className={memoblock.complete ? "memoblock completed" : "memoblock"}
        >
          {memoblock.memo}
        </MemoBlock>
      ))}
    </div>
  );
};

export default MemoBlockList;
