import "./memoBlock.css";
import { memo, useState } from "react";
import MemoBlock from "./MemoBlock.js";

const MemoBlockList = ({ memoblocks }) => {
  //Prova useEffect: per chiamare terminale
  //npx json-server --watch data/db.json --port 8000
  //   useEffect(() => {
  //     fetch("http://localhost:8000/memoriaBlock")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   }, []);

  return (
    <div>
      {memoblocks.map((memoblock, index) => (
        <MemoBlock
          memoblock={memoblock}
          key={memoblock.id}
          id={memoblock.id}
          value={memoblock.id}
          className={memoblock.complete ? "memoblock completed" : "memoblock"}
        >
          {memoblock.memo}
        </MemoBlock>
      ))}
    </div>
  );
};

export default MemoBlockList;
