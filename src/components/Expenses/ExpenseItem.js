import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card.js";
import { useState } from "react";

function ExpenseItem({ title: titleElm, amount, date }) {
  const [title, setTitle] = useState(titleElm);

  const clickHandler = () => {
    setTitle("Updated");
  };

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
