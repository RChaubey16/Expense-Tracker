import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

  // Method 1 : Multiple slices of state
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  // Method 2 : one single state for storing all the 3 values.
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

    const titleChangeHandler = (event) => {
      // Method 1 :
      // setEnteredTitle(event.target.value);

      // Method 2 : 
      setUserInput({
        ...userInput,
        enteredTitle: event.target.value
      });

    }

    const amountChangeHandler = event => {
       // Method 1 :
      // setEnteredTitle(event.target.value);

      // Method 2 : 
      setUserInput({
        ...userInput,
        enteredAmount: event.target.value,
      });
    }

    const dateChangeHandler = event => {
       // Method 1 :
      // setEnteredTitle(event.target.value);

      // Method 2 : 
      setUserInput({
        ...userInput,
        enteredDate: event.target.value,
      })
    }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
          <h2>{enteredAmount}</h2>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="01-01-2021" max="31-12-2023" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
          <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
