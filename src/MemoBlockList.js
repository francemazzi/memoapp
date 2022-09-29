import "./memoBlock.css";
import { useState } from "react";
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

  // const handleDelete = (id) => {
  //   const newBlock = memoblocks.filter((memoblock) => memoblock.id !== id);
  //   setMemoblock(newBlock);
  //   console.log("a");
  // };

  return (
    <div>
      {/* mettere come key={memoblock.id} */}
      {memoblocks.map((memoblock, index) => (
        <MemoBlock memoblock={memoblock} key={index}></MemoBlock>
      ))}
    </div>
  );
};

export default MemoBlockList;
