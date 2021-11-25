import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {

  // useState hook : Used to change any variable or content of the site.
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    // Will take the new value, assign it to title state variable and it will re-call or re-execute this component function to re-render the JSX of this component
    setTitle("Updated!");
    setAmount("Rs 2000");
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {amount} </div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
