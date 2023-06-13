import { useState } from "react";
import "./index.css";
const Card = ({ props }) => {
  return (
    <>
      <div className="todo">
        <h3>{props.todo}</h3>
        <input type="checkbox" checked={props.completed} />
      </div>
    </>
  );
};
export default Card;
