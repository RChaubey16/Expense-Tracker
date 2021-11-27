import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="01-01-2021" max="31-12-2023" />
        </div>
      </div>
      <div className="new-expense__actions">
          <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
