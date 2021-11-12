import React from "react";
import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>10th Nov 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">Rs. 25999 </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
